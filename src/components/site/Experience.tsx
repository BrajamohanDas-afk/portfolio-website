import { BarChart3, Box, Settings, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface ExperienceEntry {
  period: string;
  duration: string;
  company: string;
  monogram: string;
  role: string;
  location: string;
  description: string;
  contributions: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "07/2026 – 08/2026",
    duration: "(2 MONTHS)",
    company: "TEXMiN FOUNDATION, IIT (ISM)",
    monogram: "T",
    role: "BACKEND DEVELOPER INTERN",
    location: "Dhanbad",
    description:
      "Self-hosted LLM infrastructure — deployed and tuned a 122B MoE model on a single NVIDIA DGX Spark, with quality validation across GSM8K, HumanEval and tool-calling evaluations.",
    contributions: [
      "Deployed a 122B MoE LLM on one NVIDIA DGX Spark (128 GB) via vLLM/Docker, fit in-memory with INT4",
      "Tuned the serving stack for 256K context with speculative decoding and chunked prefill",
      "Benchmarked profiles, raising agent decode ~28 → ~80+ tok/s (~200 at 3 streams)",
      "Executed quality validation using GSM8K, HumanEval and tool-calling evaluations",
    ],
  },
  {
    period: "06/2026 – 09/2026",
    duration: "(4 MONTH)",
    company: "NEXA SOLUTIONS",
    monogram: "N",
    role: "FULL-STACK DEVELOPER INTERN",
    location: "Remote",
    description:
      "Full-stack product work across admin dashboards, an applicant tracking system and storefront checkout flows.",
    contributions: [
      "Cut admin dashboard load 70% via N+1 fixes, SQL-side aggregation and pagination",
      "Developed an applicant tracking system integrated with resume uploads and notifications",
      "Delivered seamless checkout experience across 3 storefronts using Supabase CMS",
    ],
  },
];

const STATS = [
  { value: "2", label: "Internships" },
  { value: "1 Yr", label: "Experience" },
  { value: "400+", label: "Git-Commit" },
];

const FOCUS: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Box,
    title: "Scalable Systems",
    description: "Designing and building production-grade services.",
  },
  {
    icon: Settings,
    title: "Automation",
    description: "Reducing manual work with reliable pipelines.",
  },
  {
    icon: BarChart3,
    title: "LLM Infrastructure",
    description: "Serving and tuning models in production.",
  },
];

const Experience = () => (
  <section id="work" className="mt-16 border-y border-ink bg-panel text-paper md:mt-24">
    <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
      <SectionHead
        index="02"
        title="EXPERIENCE"
        note="REAL WORK. REAL SYSTEMS. REAL IMPACT."
        tone="dark"
      />

      <div className="grid gap-14 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
        <Reveal className="lg:col-span-4">
          <h2 className="font-display text-[clamp(2.75rem,4.5vw,4.25rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.01em]">
            Work
            <br />
            Experience
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
            Two internships. LLM serving, full-stack products and production backend work.
          </p>

          <span aria-hidden="true" className="mt-7 block h-[3px] w-12 bg-hot" />

          <div className="mt-10 grid grid-cols-3 divide-x divide-paper/15">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={index === 0 ? "pr-5" : index === STATS.length - 1 ? "pl-5" : "px-5"}
              >
                <p className="font-display text-4xl font-extrabold leading-none text-hot">
                  {stat.value}
                </p>
                <p className="label mt-2 text-paper/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative lg:col-span-8">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[3px] top-2 w-px bg-paper/20"
          />

          <div className="space-y-10 md:space-y-12">
            {EXPERIENCE.map((entry, index) => (
              <Reveal key={entry.company} delay={index * 140} className="relative pl-8 md:pl-10">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full ${
                    index === 0 ? "bg-hot" : "bg-paper/50 ring-1 ring-panel"
                  }`}
                />

                <div className="flex flex-wrap items-baseline gap-x-3 font-mono text-[0.6875rem] tracking-[0.12em]">
                  <span className="text-paper/75">{entry.period}</span>
                  <span className="text-paper/40">{entry.duration}</span>
                </div>

                <article className="mt-4 border border-paper/20 bg-paper/[0.03]">
                  <div className="grid md:grid-cols-12">
                    <div className="p-6 md:col-span-7 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
                        <div className="flex items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-paper/25 font-display text-xl font-bold text-paper">
                            {entry.monogram}
                          </span>
                          <div>
                            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-paper">
                              {entry.company}
                            </h3>
                            <p className="label mt-1.5 text-paper/45">{entry.role}</p>
                          </div>
                        </div>

                        <div className="text-left sm:text-right">
                          <p className="font-mono text-[0.6875rem] tracking-wide text-paper/70">
                            {entry.location}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-paper/70">
                        {entry.description}
                      </p>
                    </div>

                    <div className="border-t border-paper/15 p-6 md:col-span-5 md:border-l md:border-t-0 md:p-8">
                      <div className="flex items-center justify-between gap-3">
                        <p className="label text-paper/45">Key contributions</p>
                        <span aria-hidden="true" className="font-mono text-sm leading-none text-hot">
                          ↗
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2.5">
                        {entry.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex gap-2.5 font-mono text-[0.6875rem] leading-snug text-paper/70"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-hot"
                            />
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-12 grid border border-paper/20 lg:mt-16 lg:grid-cols-4">
          <div className="p-6 md:p-7">
            <p className="label text-paper/75">
              <span className="text-hot">/</span> Ongoing focus
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">
              Building reliable backend systems, automation pipelines and AI-powered tools to solve
              real problems.
            </p>
          </div>

          {FOCUS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 border-t border-paper/15 p-6 md:p-7 lg:border-l lg:border-t-0"
            >
              <Icon aria-hidden="true" strokeWidth={1.5} className="h-6 w-6 shrink-0 text-paper/70" />
              <div>
                <p className="label text-paper/80">{title}</p>
                <p className="mt-2 font-mono text-[0.6875rem] leading-relaxed text-paper/55">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Experience;
