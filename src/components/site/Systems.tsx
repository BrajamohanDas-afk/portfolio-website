import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface Project {
  index: string;
  kicker: string;
  title: string;
  period: string;
  description: string;
  features: string[];
  tags: string[];
  links: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    index: "01",
    kicker: "// Backend service — Python",
    title: "Drift-Guard",
    period: "2026",
    description:
      "Operational drift detection. Drift Guard detects when runbooks and operational documentation no longer match real system state: ingest documents, extract machine-checkable entities, collect live evidence and alert when docs drift.",
    features: [
      "Runbook ingestion from Markdown uploads and Git-backed sources, with versioned content history",
      "Entity extraction for services, owners, IAM roles, commands, dashboards and URLs",
      "ARQ worker for source sync, audit runs and nightly scans; alerts persisted with resolve APIs",
      "API-key auth, rate limits and x-request-id request logs across every /v1 route",
    ],
    tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Alembic", "Docker", "GitHub Actions"],
    links: [{ label: "View repo", href: "https://github.com/BrajamohanDas-afk/Drift-Guard" }],
  },
  {
    index: "02",
    kicker: "// Web app — TypeScript",
    title: "SafeCheck",
    period: "2026",
    description:
      "Browser-based file safety analysis. SafeCheck interprets VirusTotal results, verifies file integrity with local SHA-256 hashing and warns about untrusted download sources.",
    features: [
      "Zero-install: files are hashed in the browser with SHA-256",
      "VirusTotal results interpreted into a clear safe / suspicious / dangerous verdict",
      "Warns when a file comes from an untrusted download source",
    ],
    tags: ["React", "TypeScript", "Express", "VirusTotal API", "SHA-256"],
    links: [
      { label: "Live demo", href: "https://safe-checker-one.vercel.app" },
      { label: "GitHub", href: "https://github.com/BrajamohanDas-afk/SafeCheck" },
    ],
  },
  {
    index: "03",
    kicker: "// Platform — Node / React",
    title: "MMSpace",
    period: "2025",
    description:
      "Mentor–mentee management infrastructure. Real-time collaboration for mentors and mentees: role-based access, messaging, attendance and progress tracking.",
    features: [
      "Role-based authentication for Admin, Mentor and Mentee",
      "Group and private chat with real-time notifications over Socket.IO",
      "Attendance tracking and leave approval workflows",
      "Progress monitoring dashboard with responsive UI and dark mode",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    links: [
      { label: "Live site", href: "https://www.mmspace.me/" },
      { label: "GitHub", href: "https://github.com/BrajamohanDas-afk/MMSpace" },
    ],
  },
];

const Systems = () => (
  <section id="systems" className="mx-auto max-w-[1280px] px-5 pt-16 md:px-10 md:pt-24">
    <SectionHead index="02" title="Selected Systems" note="Real projects / running systems" />

    <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
      {projects.map((project) => (
        <Reveal key={project.index} className="h-full">
          <article className="flex h-full flex-col border border-line p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-mono text-5xl font-black leading-none text-ink/10 md:text-6xl">
                {project.index}
              </p>
              <p className="label text-ink/35">{project.period}</p>
            </div>
            <p className="label mt-4 text-ink/50">{project.kicker}</p>
            <h3 className="mt-2 text-[clamp(1.8rem,3vw,2.6rem)] font-black uppercase leading-[0.9] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">{project.description}</p>

            <ul className="mt-5 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-[0.8125rem] leading-snug text-ink/70">
                  <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 bg-hot" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ink/20 px-2 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-ink/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-6 pt-7">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-ink underline decoration-hot decoration-2 underline-offset-4 transition-colors hover:text-hot"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Systems;
