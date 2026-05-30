export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string; // markdown-like content
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "xmla-query-engines-microsoft-fabric",
    title: "Building XMLA Query Engines for Microsoft Fabric",
    subtitle: "How I engineered a 'Measure as Category' engine to unpivot measures into dynamic hierarchies",
    date: "2025-05-10",
    readTime: "12 min read",
    tags: [".NET", "Microsoft Fabric", "XMLA", "DAX", "Power BI"],
    excerpt:
      "XMLA is one of the most powerful — and least documented — interfaces in the Microsoft BI stack. In this post, I walk through how I built a custom measure-category engine on top of XMLA to solve a complex data restructuring problem at Lumel Technologies.",
    content: `## The Problem

At Lumel Technologies, we build EPM (Enterprise Performance Management) tools on top of Microsoft Fabric. One of the most requested features from enterprise customers was the ability to **unpivot measures into dynamic row hierarchies** — essentially treating measures as categorical dimensions.

In a standard Power BI matrix, measures live as column headers. Our customers wanted to flip this so measures became rows, enabling complex financial statement layouts (P&L, Balance Sheet) where rows carry meaning.

## Why XMLA?

The standard Power BI REST API doesn't expose this level of semantic model manipulation. XMLA (XML for Analysis) is an industry standard protocol for querying and managing OLAP data sources. Microsoft exposes it on Fabric and Premium workspaces via the \`powerbi://api.powerbi.com/v1.0/...\` endpoint.

We used **ADOMD.NET** — Microsoft's managed client for XMLA — to connect and execute MDX queries programmatically from our .NET 8 backend.

\`\`\`csharp
using Microsoft.AnalysisServices.AdomdClient;

var conn = new AdomdConnection(connectionString);
conn.Open();

var cmd = conn.CreateCommand();
cmd.CommandText = BuildMeasureCategoryMDX(measures, hierarchy);
var reader = cmd.ExecuteReader();
\`\`\`

## The Architecture

The measure-category engine works in three stages:

**Stage 1: Metadata Discovery**
Query the XMLA \`$SYSTEM.MDSCHEMA_MEASURES\` schema rowset to enumerate all measures in the semantic model, their display folders, and data types.

**Stage 2: Virtual Hierarchy Construction**
For each measure group, construct a virtual hierarchy definition that maps each measure to a unique member path in a synthetic "Measures" dimension.

**Stage 3: MDX Generation**
Generate a cross-join MDX query that places the virtual measure hierarchy on rows and the user-defined category hierarchy on columns.

\`\`\`
WITH
  MEMBER [Measures].[Revenue Growth %] AS
    ([Measures].[Revenue], [Date].[Year].CurrentMember) /
    ([Measures].[Revenue], [Date].[Year].PrevMember) - 1
SELECT
  { [Measures].[Revenue], [Measures].[Revenue Growth %] } ON COLUMNS,
  { [Department].[All].[Engineering], [Department].[All].[Sales] } ON ROWS
FROM [EPM Model]
\`\`\`

## Key Engineering Challenges

### Challenge 1: Recursive Hierarchy Flattening

Customers often have deeply nested hierarchies (Country → Region → Division → Team). Flattening these into MDX member paths while preserving parent-child relationships required a recursive tree walker that resolves ambiguous member names using unique names (\`[Department].[&[12]].\`).

### Challenge 2: Measure Type Inference

Not all measures can be treated as categories. Numeric measures need different rendering than text measures or date measures. I built a type inference layer that inspects XMLA metadata and assigns rendering hints to each measure.

### Challenge 3: Cache Invalidation

XMLA schema queries are expensive — a full metadata refresh on a large model takes 2–4 seconds. I implemented a two-level cache:
- **L1 (in-memory, per-request):** Cached within the request lifecycle
- **L2 (Redis, 15-minute TTL):** Shared across all users on the same workspace

Cache keys are workspace ID + model name + dataset ETag (a hash of the last model refresh timestamp).

## Results

After shipping the Measure-as-Category engine:
- 8 enterprise customers onboarded within the first sprint
- Enabled financial statement layouts that were previously impossible in standard Power BI
- XMLA query time reduced from 2.1s to 340ms average (after caching)

## Lessons Learned

1. **XMLA is powerful but the documentation is sparse** — Microsoft's public docs cover 20% of the protocol. The rest requires reading the XMLA spec and reverse-engineering SSAS behaviour.
2. **Unique names vs. member names** — Always use unique names (\`[&[id]]\`) in generated MDX, never display names. Display names break when customers rename members.
3. **Connection pooling is critical** — AdomdConnection objects are expensive to create. Pool them per workspace using a ConcurrentDictionary keyed on connection string hash.`,
  },
  {
    slug: "redis-to-inmemory-cache-migration",
    title: "90% Performance Gain: Migrating from Redis to In-Memory Cache",
    subtitle: "A practical guide to replacing external cache dependencies with Microsoft.Extensions.Caching",
    date: "2025-04-02",
    readTime: "9 min read",
    tags: [".NET", "Performance", "Redis", "Caching", "Azure"],
    excerpt:
      "We had a Redis cluster handling 3,000 cache operations per minute. After migrating to IMemoryCache, our average API response time dropped from 120ms to 12ms and we eliminated an entire infrastructure dependency. Here's the complete migration story.",
    content: `## Context

On the Quickly.app low-code platform, we used Redis as a shared session cache for storing user workflow state, compiled component trees, and API response memos. The architecture made sense at the time — we had multiple instances of the API and needed a shared cache.

However, after a load analysis, we discovered that **95% of cache operations were local to a single API instance** during a user session. The shared cache was solving a problem we didn't actually have.

## The Decision

Migrating from Redis to \`IMemoryCache\` was the right move because:

1. **Reduced latency:** In-memory access is ~1μs; Redis round-trip is ~1–5ms on Azure
2. **Reduced infrastructure cost:** Redis Cache (P1 tier) cost us $150/month
3. **Simplified architecture:** Fewer moving parts = fewer failure modes
4. **No serialisation overhead:** Objects stay as CLR types, no JSON marshalling

## Migration Strategy

The key challenge was that our codebase had Redis calls scattered across 40+ service classes. A naive find-and-replace would break tests and introduce subtle bugs.

### Step 1: Abstraction Layer

First, I introduced an \`ICacheService\` interface that both implementations would implement:

\`\`\`csharp
public interface ICacheService
{
    Task<T?> GetAsync<T>(string key);
    Task SetAsync<T>(string key, T value, TimeSpan? expiry = null);
    Task RemoveAsync(string key);
    Task<bool> ExistsAsync(string key);
}
\`\`\`

Both \`RedisCacheService\` and \`MemoryCacheService\` implemented this interface. The DI container injected the right one based on configuration.

### Step 2: Feature Flag Migration

Used Azure App Configuration feature flags to gradually migrate endpoints:

\`\`\`csharp
// In Program.cs
if (config.GetValue<bool>("Features:UseMemoryCache"))
    services.AddSingleton<ICacheService, MemoryCacheService>();
else
    services.AddSingleton<ICacheService, RedisCacheService>();
\`\`\`

This let us migrate endpoint by endpoint, validate in staging, then production — with instant rollback capability.

### Step 3: Memory Pressure Handling

\`IMemoryCache\` doesn't have built-in eviction policies as sophisticated as Redis. I implemented priority-based eviction hints:

\`\`\`csharp
var cacheOptions = new MemoryCacheEntryOptions
{
    Priority = CacheItemPriority.High,
    SlidingExpiration = TimeSpan.FromMinutes(5),
    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30)
};
cacheOptions.RegisterPostEvictionCallback(OnEviction);
\`\`\`

For large objects (>50KB), I kept Redis as a secondary store, letting \`IMemoryCache\` serve as an L1 with Redis as L2.

## Results

| Metric | Redis | IMemoryCache | Improvement |
|--------|-------|--------------|-------------|
| Avg latency | 120ms | 12ms | **90% faster** |
| Cache hit rate | 78% | 91% | +13pp |
| Infrastructure cost | $150/mo | $0 | **Eliminated** |
| Error rate | 0.3% | 0.01% | 30× reduction |

The error rate improvement was unexpected — it came from eliminating Redis network failures and serialisation edge cases.

## When Not to Use This Pattern

In-memory cache is the wrong choice when:
- You have **multiple load-balanced instances** that need shared state
- Your cached data exceeds **~500MB** (memory pressure kills app performance)
- You need **Redis-specific features** like pub/sub, sorted sets, or Lua scripts
- You need **cache persistence** across application restarts

For Quickly.app specifically, we run sticky sessions on Azure App Service, which means each user's requests always hit the same instance — making shared cache unnecessary.`,
  },
  {
    slug: "microservices-migration-low-code-platform",
    title: "Microservices Migration: Breaking Down a Low-Code Monolith",
    subtitle: "How we carved 30% of a monolithic .NET platform into domain-driven microservices",
    date: "2025-02-20",
    readTime: "14 min read",
    tags: [".NET", "Microservices", "Architecture", "DDD", "Azure"],
    excerpt:
      "Monolith-to-microservices migrations are notoriously hard. At Boston Harbor Consulting, we took the strangler fig approach to extract the most volatile modules of Quickly.app into independent services — without taking the platform offline for a single minute.",
    content: `## Starting Point

Quickly.app is a low-code development platform with ~180,000 lines of .NET C# in a single ASP.NET Core project. The monolith worked well for years, but as the engineering team grew to 12 developers, the codebase became a deployment bottleneck.

Key pain points:
- **Deployment coupling:** A change in the PDF export module required a full platform redeploy
- **Scaling inflexibility:** The workflow execution engine needed 8× the CPU of the UI builder, but they ran in the same process
- **Team autonomy:** Multiple squads stepping on each other's database migrations

## The Strangler Fig Strategy

Rather than a big-bang rewrite (which never works), we used the [Strangler Fig Pattern](https://martinfowler.com/bliki/StranglerFigApplication.html):

1. Identify bounded contexts (domains) with clear ownership
2. Build a new microservice for that domain
3. Route traffic to the new service via an API gateway
4. Delete the monolith code once the new service is stable

We prioritised by **volatility × deployment frequency** — the highest-impact migrations first.

## Phase 1: Notification Service

The notification system (email, in-app, SMS) was the ideal first extraction:
- No shared database tables with other modules
- Well-defined interface: REST POST /notifications/send
- Clear domain boundaries

\`\`\`csharp
// New service in Notification.Api
[ApiController]
[Route("api/v1/[controller]")]
public class NotificationsController : ControllerBase
{
    [HttpPost("send")]
    public async Task<IActionResult> Send([FromBody] NotificationRequest request)
    {
        await _dispatcher.DispatchAsync(request);
        return Accepted();
    }
}
\`\`\`

We used Azure Service Bus for async delivery, making the monolith's calls non-blocking. The monolith published a message, the Notification service consumed it.

## Phase 2: Workflow Execution Engine

This was the hardest extraction — the execution engine had 47 direct database dependencies on the monolith's tables.

### Database Decomposition Strategy

We used the **Shared Database → Database Per Service** migration:

1. **Week 1–2:** Added a dedicated schema (\`exec\`) for execution-related tables within the shared database
2. **Week 3–4:** Updated all monolith code to go through the new service's API rather than direct DB queries
3. **Week 5–6:** Moved the \`exec\` schema tables to a dedicated Azure SQL database
4. **Week 7:** Decommissioned the shared tables

The intermediate step of using a separate schema (but same database) let us validate the API boundary without the operational complexity of a second database.

## Service Communication Patterns

We used three communication patterns depending on the use case:

| Pattern | When | Technology |
|---------|------|------------|
| Synchronous REST | User-facing, needs immediate response | ASP.NET Core + YARP (reverse proxy) |
| Async messaging | Background processing, fire-and-forget | Azure Service Bus |
| Event streaming | Cross-service data sync | Azure Event Hub |

### API Gateway with YARP

We used Microsoft's YARP (Yet Another Reverse Proxy) as our API gateway, running as a thin ASP.NET Core app. This let us route requests to the right service based on path prefix while keeping the client-facing URL consistent.

\`\`\`json
{
  "ReverseProxy": {
    "Routes": {
      "notifications-route": {
        "ClusterId": "notification-service",
        "Match": { "Path": "/api/v1/notifications/{**catch-all}" }
      },
      "workflow-route": {
        "ClusterId": "workflow-service",
        "Match": { "Path": "/api/v1/workflows/{**catch-all}" }
      }
    }
  }
}
\`\`\`

## Observability

Distributed systems are hard to debug without proper observability. We added:

- **OpenTelemetry** for distributed tracing — a trace spans all service hops with a single trace ID
- **Azure Monitor** for centralized logging with correlation IDs
- **Health check endpoints** on every service, monitored by Azure App Service health probes

## Results After 6 Months

- **Deployment frequency:** 2× per week → 8× per day (independent service deployments)
- **Mean time to recovery:** 45 min → 8 min (isolated failure domains)
- **Team autonomy:** Each squad owns and deploys their service independently
- **Infrastructure cost:** +$200/mo (additional services), offset by 30% compute efficiency gain from right-sized services

## What I'd Do Differently

1. **Add contract testing from day one** — Pact tests between services would have caught API contract breaks before they hit production 3 times
2. **Don't underestimate the data migration** — Database decomposition took 2× longer than estimated every single time
3. **Invest in observability before starting** — You'll spend more time debugging distributed issues than writing migration code`,
  },
  {
    slug: "designing-ai-interview-platform",
    title: "Designing a Real-Time AI Interview Platform from Scratch",
    subtitle: "Architecture decisions, trade-offs, and lessons from building Interview RoundIQ AI",
    date: "2025-01-15",
    readTime: "11 min read",
    tags: ["AI", ".NET", "Architecture", "Azure", "System Design"],
    excerpt:
      "Building an AI-powered hiring platform that processes live interview sessions introduces unique engineering challenges: real-time audio processing, concurrent scoring, and sub-2-second AI feedback. Here's the full architecture breakdown.",
    content: `## Why This is Hard

Building a real-time interview scoring platform looks simple on paper — transcribe audio, send to AI, display score. The devil is in the details:

- **Latency requirements:** HR teams expect feedback within 2 seconds of the candidate finishing an answer
- **Concurrency:** 50+ simultaneous interview sessions with independent AI pipelines
- **Reliability:** A system failure during a live interview is catastrophic for both candidate and company
- **Cost control:** GPT-4o API costs at scale require careful token budgeting

## Core Architecture Decisions

### Decision 1: Event-Driven Scoring Pipeline

The initial design had a synchronous pipeline: Audio → STT → GPT → Score → Response. This worked in demos but failed under load — a single slow STT request blocked the entire chain.

The solution was to decompose into independent async workers on Azure Service Bus:

\`\`\`
Interview Session
      │
      ▼
[API Gateway] ──→ [STT Worker]  ──→ ─────────────┐
      │        ──→ [Tone Worker] ──→ ──────────── ▼
      │        ──→ [VAD Worker]  ──→ ─── [Score Aggregator] ──→ [DB]
      │                                              │
      └─────────────────────────────────────────────┘
                                          (SignalR push to UI)
\`\`\`

Workers process in parallel. The Score Aggregator waits for all signals with a 1.8-second timeout — missing signals get a default neutral value.

### Decision 2: CQRS for Session State

Live scoring sessions generate 50–200 events per minute (score updates, answer completions, system events). Writing each event synchronously to Azure SQL would create contention under load.

We adopted CQRS with event sourcing:
- **Write side:** Append events to an Azure SQL temporal table (insert-only)
- **Read side:** Redis-cached projections, rebuilt every 2 seconds by a background worker

This gave us both write throughput AND fast reads for the live dashboard, without distributed transaction complexity.

### Decision 3: GPT Token Budget Management

GPT-4o charges per token. An uncontrolled system prompt grows with session length, causing both cost spikes and context window exhaustion.

Our token management strategy:
1. **System prompt budget:** 800 tokens max (compressed interviewer persona + role context)
2. **History budget:** 1,200 tokens max for conversation history
3. **Summarisation trigger:** After every 8 turns, background summarisation compresses history
4. **Answer budget:** 400 tokens per candidate answer (truncated with ellipsis if exceeded)

Total budget per session: ~2,400 tokens per turn × 15 turns average = 36,000 tokens per session ≈ $0.18/session at current pricing.

## The Resume Parser

Resume parsing is harder than it looks. Candidates submit PDFs in every imaginable format: tables, columns, headers, footers, watermarks, scanned images.

Our parsing pipeline:

1. **Azure Document Intelligence** (form recogniser) converts the PDF to structured markdown
2. **GPT-4o extraction** with a strict JSON schema prompt extracts 23 structured fields
3. **Validation layer** checks required fields and flags low-confidence extractions for human review
4. **Embedding** (text-embedding-3-large) indexes the parsed resume for semantic search

Field extraction accuracy after all three layers: **97.2%** on a test set of 500 diverse CVs.

## Real-Time Dashboard Architecture

The HR admin dashboard shows live scoring updates as the interview progresses. We used SignalR for real-time push:

\`\`\`csharp
public class InterviewHub : Hub
{
    public async Task JoinSession(string sessionId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, sessionId);
    }
}

// Score Aggregator pushes to group
await _hubContext.Clients
    .Group(sessionId)
    .SendAsync("ScoreUpdate", new ScorePayload(sessionId, scores));
\`\`\`

SignalR automatically selects the best transport (WebSocket → Long Polling fallback) based on client capabilities.

## Lessons

1. **Design for partial failure from the start** — in a distributed AI pipeline, any component can be slow or unavailable. Timeout + default value is better than blocking.
2. **Token budgeting is an engineering discipline** — treat GPT context as a finite resource with a budget, not an infinite scrollback
3. **Audit logs are not optional** — hiring decisions have legal implications. Every AI evaluation must be fully traceable with inputs, model version, and output stored immutably.`,
  },
  {
    slug: "power-bi-nested-top-n-dax",
    title: "Solving Nested Top N in Power BI: A DAX Deep Dive",
    subtitle: "How I engineered dynamic TopN logic that respects parent-child hierarchy relationships",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Power BI", "DAX", "Microsoft Fabric", ".NET", "Analytics"],
    excerpt:
      "Nested Top N filtering in Power BI matrices — where you want Top 3 products within each Top 5 category — is one of the most requested and notoriously difficult DAX patterns. Here's how I engineered it at the server side for Lumel EPM.",
    content: `## The Problem

Standard Power BI Top N filtering applies globally. If you want the Top 5 customers by revenue, Power BI finds the top 5 across all regions and shows them.

What enterprise customers actually want: **Top 3 products within each of the Top 5 categories** — a nested, hierarchical Top N. This is easy to describe and genuinely hard to implement in DAX.

## Why Standard DAX Fails

The naive approach uses TOPN inside CALCULATE:

\`\`\`dax
Top3ProductsInEachCategory =
CALCULATE(
    [Revenue],
    TOPN(3, VALUES(Products[Name]), [Revenue])
)
\`\`\`

This works in a flat table. In a matrix with category on rows, it applies the TOPN independently per row — which seems right. But the problem emerges when:

1. You're inside a subtotal row (category level) — TOPN evaluates at the wrong granularity
2. You add column hierarchies — cross-context evaluation breaks the filter

## The Correct Pattern: Rank-Based Filtering

The robust solution uses pre-computed ranks rather than dynamic TOPN:

\`\`\`dax
ProductRankWithinCategory =
VAR CurrentProduct = SELECTEDVALUE(Products[Name])
VAR CurrentCategory = SELECTEDVALUE(Categories[Name])
VAR AllProductsInCategory =
    CALCULATETABLE(
        VALUES(Products[Name]),
        Categories[Name] = CurrentCategory
    )
VAR ProductRevenues =
    ADDCOLUMNS(
        AllProductsInCategory,
        "@Revenue", CALCULATE([Revenue])
    )
RETURN
    RANKX(ProductRevenues, [@Revenue],, DESC, Dense)
\`\`\`

Then use this rank as a visual-level filter: \`ProductRankWithinCategory <= 3\`.

## The Problem With Visual-Level Filters

Visual-level filters work for static thresholds but fail when:
- The N value should be user-configurable (driven by a slicer)
- The Top N logic needs to interact with other filters
- You need "Top N + Others" grouping

For Lumel EPM, we needed all three. This required moving the TopN logic to the **server side**.

## Server-Side Nested TopN

Our approach: intercept the MDX query generated by Power BI, inject custom TopN filtering at the XMLA level before execution.

The XMLA-level implementation using MDX:

\`\`\`mdx
WITH
  SET TopCategories AS
    TOPCOUNT(
      [Category].[Category].[Category].Members,
      5,
      [Measures].[Revenue]
    )
  SET TopProductsInCategory AS
    GENERATE(
      TopCategories,
      TOPCOUNT(
        EXISTS(
          [Product].[Product].[Product].Members,
          {[Category].[Category].CurrentMember}
        ),
        3,
        [Measures].[Revenue]
      )
    )
SELECT
  TopProductsInCategory ON ROWS,
  {[Measures].[Revenue], [Measures].[Units]} ON COLUMNS
FROM [Sales]
\`\`\`

The \`GENERATE\` function iterates over TopCategories and for each category, finds the top 3 products using \`EXISTS\` to filter to that category's products.

## The N+Others Challenge

Customers wanted: Top 5 products + one "Others" row aggregating all remaining products.

The MDX for this uses a calculated member:

\`\`\`mdx
WITH
  MEMBER [Product].[Product].[Others] AS
    SUM(
      EXCEPT(
        [Product].[Product].[Product].Members,
        TopProducts
      ),
      [Measures].[Revenue]
    )
...
\`\`\`

The tricky part: \`[Product].[Product].[Others]\` must be excluded from the TopN calculation to prevent recursion. We solved this by computing TopProducts first, then defining the calculated member.

## Implementation in .NET

The complete .NET service that dynamically generates these MDX queries:

\`\`\`csharp
public class NestedTopNQueryBuilder
{
    public string Build(TopNConfig config)
    {
        var sb = new StringBuilder();
        sb.AppendLine("WITH");

        foreach (var level in config.Levels)
        {
            sb.AppendLine($"SET {level.SetName} AS");
            if (level.Parent != null)
                sb.AppendLine($"GENERATE({level.Parent.SetName},");
            sb.AppendLine($"TOPCOUNT(");
            sb.AppendLine($"  {BuildExistsClause(level)},");
            sb.AppendLine($"  {level.TopN},");
            sb.AppendLine($"  [Measures].[{config.MeasureName}]");
            sb.AppendLine($"))");
        }

        sb.AppendLine($"SELECT {BuildInnermostSet(config)} ON ROWS,");
        sb.AppendLine($"{{ {BuildMeasureSet(config)} }} ON COLUMNS");
        sb.AppendLine($"FROM [{config.ModelName}]");

        return sb.ToString();
    }
}
\`\`\`

## Results

After shipping the Nested TopN feature:
- Processing time for Top 5 Categories × Top 3 Products: **340ms** (vs 2.1s client-side workaround)
- Support for up to 4 hierarchy levels nested Top N
- User-configurable N value via slicer, driving real-time MDX regeneration
- "Others" grouping with accurate aggregation of excluded members

## Key Takeaways

1. **DAX TopN patterns break at subtotal rows** — always validate against hierarchy levels, not just leaf members
2. **GENERATE is the key MDX function for nested iteration** — it's the hierarchical equivalent of CROSS JOIN with row-context propagation
3. **Pre-compute ranks rather than filter dynamically** when the ranking logic is complex — it's more debuggable and performs better
4. **Server-side query generation scales better** than client-side workarounds — one optimised MDX query beats 10 DAX measures`,
  },
];
