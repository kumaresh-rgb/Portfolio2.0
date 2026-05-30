import { motion } from "motion/react";
import {
  Terminal, Code2, Database, Cloud, Wrench, Layers,
  CheckCircle2, Diamond, ArrowLeftRight, Bug, BadgeCheck, Coins,
} from "lucide-react";

function Pill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-xs font-medium text-on-surface">
      {label}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-surface-container rounded-xl border border-outline-variant p-5 ${className}`}>
      {children}
    </motion.div>
  );
}

function CardHeader({ icon: Icon, title, subtitle, iconColor = "text-primary" }: {
  icon: React.ElementType; title: string; subtitle?: string; iconColor?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <div>
        <h2 className="font-headline text-base font-bold text-on-surface">{title}</h2>
        {subtitle && <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{subtitle}</p>}
      </div>
    </div>
  );
}

export const Skills = () => (
  <div className="w-full bg-background text-on-surface">
    <div className="pt-16 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10">
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-on-surface">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Arsenal
          </span>
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Specialised in the .NET ecosystem and cloud-native deployments, with full-stack coverage.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Backend */}
        <Card className="lg:col-span-6">
          <CardHeader icon={Terminal} title="Backend Development" subtitle="Logic & Infrastructure" />
          <div className="flex flex-wrap gap-1.5">
            {[".NET 8","C#","ASP.NET Core","Entity Framework","LINQ","Microservices","SignalR","Python","Repository Pattern","OOPS","xUnit","Unit Testing"].map(s => <Pill key={s} label={s} />)}
          </div>
        </Card>

        {/* Frontend */}
        <Card className="lg:col-span-6">
          <CardHeader icon={Code2} title="Frontend Development" subtitle="Interface & UX" />
          <div className="flex flex-wrap gap-1.5">
            {["React","TypeScript","Angular","Tailwind CSS","Redux","Framer Motion","PrimeNG"].map(s => <Pill key={s} label={s} />)}
          </div>
        </Card>

        {/* Data & Storage */}
        <Card className="lg:col-span-4">
          <CardHeader icon={Database} title="Data & Storage" iconColor="text-secondary" />
          <div className="space-y-2">
            {["SQL Server / Azure SQL","PostgreSQL","Redis / Cosmos DB","MongoDB / Dapper"].map(label => (
              <div key={label} className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/10">
                <span className="text-sm text-on-surface">{label}</span>
                <Database className="w-3.5 h-3.5 text-secondary opacity-50" />
              </div>
            ))}
          </div>
        </Card>

        {/* Cloud */}
        <Card className="lg:col-span-8">
          <CardHeader icon={Cloud} title="Cloud & Infrastructure" subtitle="Provisioning & Scaling" iconColor="text-tertiary" />
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[
              { name: "Azure",   sub: "Primary",      color: "text-primary" },
              { name: "Docker",  sub: "Container",    color: "text-tertiary" },
              { name: "K8s",     sub: "Orchestrator", color: "text-secondary" },
            ].map(({ name, sub, color }) => (
              <div key={name} className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/10 text-center">
                <span className="block font-bold text-sm text-on-surface">{name}</span>
                <span className={`text-[10px] uppercase tracking-widest ${color}`}>{sub}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["CI/CD Pipelines","Terraform","Serverless Functions"].map(s => (
              <span key={s} className="px-2.5 py-1 rounded-lg text-[11px] text-on-surface-variant border border-outline-variant/10 bg-surface-container-low">{s}</span>
            ))}
          </div>
        </Card>

        {/* DevOps */}
        <Card className="lg:col-span-5">
          <CardHeader icon={Wrench} title="DevOps & Tools" />
          <div className="grid grid-cols-2 gap-2">
            {["Azure DevOps","GitHub Actions","Git / Jira","Postman","Swagger","SonarQube"].map(tool => (
              <div key={tool} className="flex items-center gap-2 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {tool}
              </div>
            ))}
          </div>
        </Card>

        {/* Architecture */}
        <Card className="lg:col-span-7">
          <CardHeader icon={Layers} title="Architecture & Patterns" iconColor="text-tertiary" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-2">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Core Philosophy</p>
              {[
                { label: "Clean Architecture", icon: <Diamond className="w-3 h-3 text-primary" /> },
                { label: "CQRS",               icon: <ArrowLeftRight className="w-3 h-3 text-primary" /> },
                { label: "Domain Driven Design",icon: <Layers className="w-3 h-3 text-primary" /> },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <span className="text-sm text-on-surface">{label}</span>
                  {icon}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Implementation</p>
              {[
                { label: "SOLID Principles",    icon: <BadgeCheck className="w-3 h-3 text-tertiary" /> },
                { label: "Design Patterns",     icon: <Coins className="w-3 h-3 text-tertiary" /> },
                { label: "Unit Testing (xUnit)", icon: <Bug className="w-3 h-3 text-tertiary" /> },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <span className="text-sm text-on-surface">{label}</span>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);
