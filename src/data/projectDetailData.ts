export interface Phase {
  title: string;
  items: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  accent: string;
  link: string | null;
  stack: { layer: string; techs: string[] }[];
  architecture: string; // mermaid diagram string
  phases: Phase[];
  challenges: { problem: string; solution: string }[];
  metrics: { label: string; value: string }[];
  lessons: string[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  lingoura: {
    id: "lingoura",
    title: "Lingoura AI",
    tagline: "Master English. Conquer IELTS.",
    accent: "#0ea5e9",
    link: "https://lingoura-ai.vercel.app/",
    overview:
      "Lingoura AI is a production-grade IELTS preparation and English fluency platform serving 12K+ users across 89 countries. The platform uses a multi-model AI pipeline for real-time pronunciation scoring, adaptive question generation, and personalised learning paths — all delivered as a responsive React SPA backed by a .NET 8 API.",

    stack: [
      { layer: "Frontend",      techs: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Audio API"] },
      { layer: "Backend API",   techs: [".NET 8 / ASP.NET Core", "C#", "SignalR (real-time)", "Entity Framework Core"] },
      { layer: "AI / ML",       techs: ["OpenAI Whisper (speech-to-text)", "GPT-4o (feedback)", "Custom Pronunciation Scorer"] },
      { layer: "Infrastructure",techs: ["Azure App Service", "Azure Cosmos DB", "Azure Blob Storage", "Redis Cache"] },
      { layer: "DevOps",        techs: ["GitHub Actions CI/CD", "Azure Monitor", "Sentry Error Tracking"] },
    ],

    architecture: `flowchart TD
    A[User Browser] -->|HTTPS| B[React SPA]
    B -->|REST / SignalR| C[.NET 8 API Gateway]
    C -->|Audio Stream| D[Whisper STT Service]
    C -->|Text| E[GPT-4o Feedback Engine]
    C -->|R/W| F[(Cosmos DB)]
    C -->|Cache| G[(Redis)]
    D -->|Transcript| H[Pronunciation Scorer]
    H -->|Score JSON| C
    E -->|Feedback JSON| C
    C -->|Adaptive Quiz| I[Question Generator]
    I -->|Questions| C
    C -->|Results| B
    B -->|Dashboard| A

    style A fill:#0ea5e920,stroke:#0ea5e9
    style C fill:#0ea5e930,stroke:#0ea5e9
    style F fill:#22334420,stroke:#334155
    style G fill:#ef444420,stroke:#ef4444`,

    phases: [
      {
        title: "Phase 1 — Audio Pipeline",
        items: [
          "Integrated Web Audio API to capture microphone input at 16kHz, 16-bit mono — matching Whisper's required format",
          "Built a chunked streaming uploader that sends 3-second WAV blobs over WebSocket to the .NET SignalR hub",
          "Implemented server-side buffering and VAD (Voice Activity Detection) to trim silence before forwarding to Whisper",
        ],
      },
      {
        title: "Phase 2 — AI Scoring Engine",
        items: [
          "Designed a custom Pronunciation Scoring module using phoneme-level diff between Whisper transcript and expected text",
          "Implemented GPT-4o prompt chaining: first pass for grammar analysis, second pass for coherence and vocabulary feedback",
          "Built an adaptive difficulty engine that analyses past 10 responses to calibrate next question's CEFR level",
        ],
      },
      {
        title: "Phase 3 — IELTS Mock System",
        items: [
          "Architected a full IELTS simulator with 4 modules: Listening, Reading, Writing, Speaking — time-boxed per IELTS spec",
          "Stored question banks in Cosmos DB with partition keys on module type + difficulty for sub-10ms retrieval",
          "Implemented band score calculation following official IELTS marking rubrics for automated grading",
        ],
      },
      {
        title: "Phase 4 — Personalisation & Analytics",
        items: [
          "Built a learning-path engine that maps weak areas to a directed acyclic skill graph and suggests the next optimal lesson",
          "Created a real-time analytics dashboard showing pronunciation trends, vocabulary growth, and mock score progression",
          "Integrated Redis for session caching, reducing Cosmos DB read load by 70% during peak hours",
        ],
      },
    ],

    challenges: [
      {
        problem: "Whisper STT latency was 3–4 seconds per chunk, causing unacceptable UX delay during speaking tests",
        solution: "Implemented parallel streaming: UI shows waveform animation while audio is being transcribed. Used Redis to pre-cache last response so next question renders immediately on transcription complete.",
      },
      {
        problem: "Pronunciation scoring accuracy was poor for non-native Indian English accents",
        solution: "Fine-tuned the phoneme diff algorithm with an accent-normalisation layer that maps common Indian English phoneme substitutions before scoring — improved accuracy by 34%.",
      },
      {
        problem: "IELTS mock sessions with 60+ questions caused Cosmos DB RU spikes that throttled concurrent users",
        solution: "Redesigned the session schema to batch write all answers at session end rather than per-question. Added optimistic concurrency via ETags to prevent race conditions.",
      },
    ],

    metrics: [
      { label: "Active Users",     value: "12,000+" },
      { label: "Countries",        value: "89" },
      { label: "Avg Rating",       value: "4.9 ★" },
      { label: "API P99 Latency",  value: "< 180ms" },
      { label: "STT Accuracy",     value: "94.2%" },
      { label: "Mock Sessions/Day",value: "800+" },
    ],

    lessons: [
      "Stream processing beats batching for real-time voice UX — never wait for the full audio before starting analysis",
      "Accent-aware NLP is critical for global reach — generic models fail non-native speakers at scale",
      "Cosmos DB partition strategy matters enormously at scale — wrong keys cause hot partitions and throttling",
      "SignalR hub lifecycle management needs careful connection pooling — idle connections above 10K cause memory spikes",
    ],
  },

  fluentinmock: {
    id: "fluentinmock",
    title: "Fluent InMock",
    tagline: "Interview like a Pro.",
    accent: "#a855f7",
    link: null,
    overview:
      "Fluent InMock is an AI-powered mock interview simulator that provides real-time multi-dimensional feedback on confidence, clarity, tone, and delivery. The platform supports 50+ industry tracks spanning Software Engineering, Product Management, Finance, and Consulting. Powered by a proprietary Voice AI engine and GPT-4o for conversational intelligence.",

    stack: [
      { layer: "Frontend",       techs: ["React 19", "TypeScript", "Zustand (state)", "WebRTC", "Canvas API (waveform)"] },
      { layer: "Backend",        techs: [".NET 8", "C#", "Azure Functions", "Entity Framework Core"] },
      { layer: "Voice AI",       techs: ["Azure Speech SDK", "Whisper STT", "Custom Tone Classifier", "VADER Sentiment"] },
      { layer: "Intelligence",   techs: ["GPT-4o (interviewer)", "Custom Confidence Model", "Body Language Heuristics"] },
      { layer: "Infrastructure", techs: ["Azure Container Apps", "Azure SQL", "Azure Service Bus", "Azure Cognitive Services"] },
    ],

    architecture: `flowchart LR
    U[User] -->|WebRTC Stream| FE[React Frontend]
    FE -->|WS Audio| API[.NET 8 API]
    API -->|Enqueue| SB[(Azure Service Bus)]
    SB -->|Dequeue| VA[Voice AI Worker]
    VA -->|STT| W[Whisper Engine]
    VA -->|Tone| TC[Tone Classifier]
    VA -->|Sentiment| SE[Sentiment Engine]
    W & TC & SE -->|Merged Signal| CS[Confidence Scorer]
    CS -->|Score + Transcript| API
    API -->|Conversation Turn| GPT[GPT-4o Interviewer]
    GPT -->|Next Question| API
    API -->|Real-time Feedback| FE
    FE -->|Live Dashboard| U

    style U fill:#a855f720,stroke:#a855f7
    style API fill:#a855f730,stroke:#a855f7
    style CS fill:#7c3aed30,stroke:#7c3aed`,

    phases: [
      {
        title: "Phase 1 — Real-Time Voice Pipeline",
        items: [
          "Implemented WebRTC audio capture with echo cancellation and noise suppression using browser MediaDevices API",
          "Built a streaming pipeline via Azure Service Bus to decouple the API from the voice processing workload",
          "Designed a multi-worker architecture: separate workers for STT, tone analysis, and confidence scoring run in parallel",
        ],
      },
      {
        title: "Phase 2 — Confidence Scoring Engine",
        items: [
          "Built a composite confidence score from 5 signals: speech pace, filler word density, sentiment valence, vocal energy variance, and articulation clarity",
          "Trained a lightweight gradient boosting classifier on 2,000 labelled interview recordings to weight each signal",
          "Implemented rolling window scoring — score updates every 5 seconds during the answer, shown as a live gauge",
        ],
      },
      {
        title: "Phase 3 — GPT-4o Interviewer",
        items: [
          "Designed a system prompt framework that gives GPT-4o a persona (domain expert interviewer) and tracks conversation state",
          "Built a context compression strategy — summarises prior Q&A pairs to stay within token limits over 60-minute sessions",
          "Implemented behavioural simulation: STAR-method follow-ups, pressure questions, and silence handling (3s timeout triggers clarifying question)",
        ],
      },
      {
        title: "Phase 4 — Industry Track System",
        items: [
          "Created 50+ industry tracks as JSON configuration files — each defines question bank, scoring rubric, and GPT persona",
          "Built a track recommendation engine using user profile (role, years of experience, target company tier)",
          "Implemented post-session report generation: PDF with timestamped feedback, confidence graph, and improvement roadmap",
        ],
      },
    ],

    challenges: [
      {
        problem: "Concurrent voice analysis workers caused race conditions when writing partial scores back to the session",
        solution: "Introduced an event-sourcing pattern for score updates: all workers emit domain events onto Service Bus, a single aggregator consumes them in order and writes the merged score.",
      },
      {
        problem: "GPT-4o context window exhaustion during 60-minute sessions caused the AI to 'forget' early interview context",
        solution: "Implemented a sliding window summarisation: after every 10 turns, a background call compresses previous exchanges into a structured summary injected into the system prompt.",
      },
      {
        problem: "Filler word detection ('um', 'uh', 'like') had 40% false positive rate in Indian English",
        solution: "Added a post-STT phoneme classifier that distinguishes between filler hesitations and legitimate discourse markers, reducing false positives to below 8%.",
      },
    ],

    metrics: [
      { label: "Mock Interviews", value: "6,500+" },
      { label: "Satisfaction",   value: "92%" },
      { label: "Industry Tracks",value: "50+" },
      { label: "Avg Session",    value: "28 min" },
      { label: "Score Accuracy", value: "91.3%" },
      { label: "Improvement Rate",value: "73%" },
    ],

    lessons: [
      "Composite scores are more reliable than single-signal metrics — users trust multi-dimensional feedback more",
      "Event-sourcing is the right pattern when multiple async workers contribute to shared mutable state",
      "GPT context management is an engineering problem, not a prompt engineering problem — treat it as state management",
      "WebRTC noise suppression alone is insufficient for open-office environments — add server-side VAD as a second pass",
    ],
  },

  roundiqai: {
    id: "roundiqai",
    title: "Interview RoundIQ AI",
    tagline: "Hiring Intelligence.",
    accent: "#10b981",
    link: "https://roundiqai.vercel.app/",
    overview:
      "Interview RoundIQ AI is an enterprise-grade hiring intelligence platform for HR teams. It combines structured interview workflow automation, AI-powered candidate evaluation, and real-time scoring to reduce time-to-hire by 40%. The platform integrates with ATS systems and provides HR analytics dashboards for data-driven hiring decisions.",

    stack: [
      { layer: "Frontend",        techs: ["React 19", "TypeScript", "TanStack Query", "Recharts (analytics)", "React PDF"] },
      { layer: "Backend",         techs: [".NET 8", "C#", "ASP.NET Core", "EF Core", "SignalR"] },
      { layer: "AI Engine",       techs: ["GPT-4o (evaluation)", "Custom Resume Parser", "Semantic Similarity (embeddings)"] },
      { layer: "Data",            techs: ["Azure SQL", "Redis (session cache)", "Azure Blob (resumes/recordings)"] },
      { layer: "Integrations",    techs: ["Greenhouse ATS API", "Lever API", "LinkedIn Profile API", "Zoom SDK"] },
    ],

    architecture: `flowchart TD
    HR[HR Admin] -->|Configure Workflow| WB[Workflow Builder UI]
    WB -->|POST /workflows| API[.NET 8 API]
    API -->|Store| DB[(Azure SQL)]

    CAND[Candidate] -->|Interview Link| IP[Interview Portal]
    IP -->|Video/Audio| ZOOM[Zoom SDK]
    IP -->|Answers| API

    API -->|Resume| RP[Resume Parser]
    API -->|Transcript| GPT[GPT-4o Evaluator]
    API -->|Semantic Match| EMB[Embedding Engine]
    RP & GPT & EMB -->|Signals| SCORE[Scoring Engine]
    SCORE -->|Candidate Report| API
    API -->|Dashboard| HR

    API -->|Webhook| ATS[ATS - Greenhouse/Lever]

    style HR fill:#10b98120,stroke:#10b981
    style API fill:#10b98130,stroke:#10b981
    style SCORE fill:#05966920,stroke:#059669`,

    phases: [
      {
        title: "Phase 1 — Workflow Builder",
        items: [
          "Built a drag-and-drop interview workflow builder using React DnD — HR teams define stages, question banks, and scoring rubrics visually",
          "Each workflow stage stores a JSON configuration: question set, time limits, required competencies, and pass/fail thresholds",
          "Implemented workflow versioning so hiring managers can A/B test different interview structures and compare candidate outcomes",
        ],
      },
      {
        title: "Phase 2 — AI Candidate Evaluation",
        items: [
          "Built a multi-stage evaluation pipeline: Resume Parser → Transcript Analysis → Competency Mapping → Score Generation",
          "Resume Parser uses a fine-tuned GPT-4o prompt to extract structured JSON from free-form CVs with 97% field accuracy",
          "Competency mapping uses text-embedding-3-large to compute semantic similarity between candidate answers and ideal answer benchmarks",
        ],
      },
      {
        title: "Phase 3 — Technical Assessment Engine",
        items: [
          "Integrated a sandboxed code execution environment (Docker containers with resource limits) for live coding assessments",
          "Built automatic test case generation using GPT-4o given the job description and required tech stack",
          "Implemented plagiarism detection by comparing code embeddings against a database of known solutions",
        ],
      },
      {
        title: "Phase 4 — HR Analytics & ATS Integration",
        items: [
          "Built a real-time analytics dashboard with funnel visualisation showing candidate drop-off rates at each workflow stage",
          "Implemented bi-directional ATS sync using webhooks — candidate status changes in RoundIQ auto-update Greenhouse/Lever",
          "Created a predictive hiring model that scores 'likelihood of acceptance' based on historical offer/acceptance patterns",
        ],
      },
    ],

    challenges: [
      {
        problem: "Resume parsing failed on non-standard formats (tables, columns, graphics) with 25% extraction error rate",
        solution: "Added Azure Document Intelligence as a pre-processing layer to convert PDFs to structured markdown before GPT extraction — error rate dropped to 3%.",
      },
      {
        problem: "Real-time scoring during live interviews caused database write contention under concurrent load (50+ simultaneous interviews)",
        solution: "Implemented CQRS — write side uses an append-only event log (Azure SQL temporal tables), read side uses Redis-cached projections refreshed every 2 seconds.",
      },
      {
        problem: "ATS webhook reliability was poor — Greenhouse webhooks had 5–8% delivery failure rate in testing",
        solution: "Built an outbox pattern: all ATS events written to an outbox table, a background worker retries failed deliveries with exponential backoff up to 7 times.",
      },
    ],

    metrics: [
      { label: "Interviews Processed", value: "800+" },
      { label: "Time-to-Hire Reduction",value: "40%" },
      { label: "Resume Parse Accuracy", value: "97%" },
      { label: "Scoring Latency",       value: "< 2s" },
      { label: "ATS Sync Reliability",  value: "99.2%" },
      { label: "HR Satisfaction",       value: "4.8 ★" },
    ],

    lessons: [
      "CQRS is not overkill for HR platforms — write contention under interview-day load is a real problem that CQRS elegantly solves",
      "Document Intelligence as a pre-processing step dramatically improves LLM extraction quality — garbage in, garbage out",
      "Outbox pattern should be the default for any third-party webhook integration — eventual consistency beats brittle real-time sync",
      "Workflow versioning from day one prevents migration headaches when hiring managers iterate on interview formats mid-season",
    ],
  },
};
