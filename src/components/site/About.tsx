import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const rows = [
  { key: "Role", value: "Backend / Full-Stack Engineer" },
  { key: "Focus", value: "Backend systems · LLM infrastructure · Automation · Full-stack products" },
  {
    key: "Stack",
    value:
      "Python · FastAPI · Django · SQLAlchemy · PostgreSQL · Redis · React · Next.js · Docker",
  },
  { key: "AI & agents", value: "vLLM · LLM serving · LangGraph · smolagents · RAG · Hugging Face" },
  { key: "Education", value: "B.Tech CSE, KIIT — 2022–2026 · CGPA 7.5/10" },
  {
    key: "Open source",
    value: "Kestra (26k★) — pagination fix and Vue i18n refactor (PRs #14206, #14142)",
  },
  { key: "Working style", value: "Build → Test → Observe → Iterate" },
];

const About = () => (
  <section id="about" className="mx-auto max-w-[1280px] px-5 pt-16 md:px-10 md:pt-24">
    <SectionHead index="05" title="About" note="System profile" />

    <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-5">
        <p className="text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl">
          Backend-focused, end&#8209;to&#8209;end by default.
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/75">
          I architect and deliver scalable full-stack applications with Python, FastAPI, React and
          Next.js — specialising in backend LLM infrastructure and self-hosted model serving.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/75">
          I learn by working on real codebases and contributing to open source, taking reviews
          seriously and fixing things properly.
        </p>
      </Reveal>

      <Reveal delay={80} className="lg:col-span-7">
        <dl>
          {rows.map((row) => (
            <div
              key={row.key}
              className="grid gap-1.5 border-t border-line py-4 md:grid-cols-[160px_1fr] md:gap-6"
            >
              <dt className="label pt-0.5 text-ink/45">{row.key}</dt>
              <dd className="text-sm leading-relaxed text-ink/80">{row.value}</dd>
            </div>
          ))}
          <div className="grid gap-1.5 border-t border-line py-4 md:grid-cols-[160px_1fr] md:gap-6">
            <dt className="label pt-0.5 text-ink/45">Status</dt>
            <dd className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-wider text-ink/80">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
              Available for backend / full-stack / AI work
            </dd>
          </div>
        </dl>
      </Reveal>
    </div>
  </section>
);

export default About;
