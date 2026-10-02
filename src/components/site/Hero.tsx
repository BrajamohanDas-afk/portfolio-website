import avatar from "@/assets/avatar.jpg";

const LINES = ["Brajamohan", "Das", "Backend", "Engineer", "Building"];

const strip = [
  "PYTHON",
  "FASTAPI",
  "POSTGRESQL",
  "REDIS",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "DOCKER",
  "VLLM",
  "LANGGRAPH",
  "AI",
  "AUTOMATION",
];

const specs = [
  { key: "Role", value: "Backend / Full-Stack Engineer" },
  { key: "Focus", value: "LLM infrastructure · Backend systems · Automation" },
  {
    key: "Stack",
    value: "Python · FastAPI · PostgreSQL · Redis · TypeScript · React · Next.js · Docker · vLLM",
  },
];

const Hero = () => (
  <section id="top" className="mx-auto max-w-[1280px] px-5 pt-16 md:px-10 md:pt-20">
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line pb-3">
      <p className="label text-ink/55">[ System Status ]</p>
      <p className="label flex items-center gap-2 text-ink/70">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal dot-pulse" />
        Available for Backend / Full-Stack / AI
      </p>
    </div>

    <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-12">
      <div>
        <h1 className="font-display text-[clamp(2.7rem,10.3vw,7.8rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.01em]">
          {LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block">
            Systems<span className="text-hot">.</span>
          </span>
        </h1>

        <p className="mt-2 max-w-[30rem] text-sm leading-relaxed text-ink/65 md:text-base">
          I build backend systems, automation pipelines, developer tools and AI&#8209;powered
          infrastructure.
        </p>
      </div>

      <div className="min-w-0">
        <dl>
          {specs.map((spec) => (
            <div
              key={spec.key}
              className="grid grid-cols-[67px_1fr] gap-4 border-t border-line py-3"
            >
              <dt className="label pt-0.5 text-ink/45">{spec.key}</dt>
              <dd className="font-mono text-[0.6875rem] leading-relaxed text-ink/75">
                {spec.value}
              </dd>
            </div>
          ))}
          <div className="grid grid-cols-[67px_1fr] gap-4 border-t border-line py-3">
            <dt className="label pt-0.5 text-ink/45">Status</dt>
            <dd className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-wider text-ink/75">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal dot-pulse" />
              Online
            </dd>
          </div>
        </dl>

        <figure className="relative mt-8 border border-line">
          <span aria-hidden="true" className="absolute -right-px -top-px h-4 w-4 bg-hot" />

          <div className="grid grid-cols-[86px_minmax(0,1fr)]">
            <figcaption className="flex flex-col border-r border-line p-3 font-mono text-[0.5625rem] uppercase leading-[1.7] tracking-[0.14em] text-ink/55">
              <span className="text-ink/40">//</span>
              <span aria-hidden="true" className="mb-1.5 mt-1.5 h-px w-6 bg-line" />
              <span>Code</span>
              <span>Systems</span>
              <span>Automate</span>
              <span>Repeat</span>
            </figcaption>
            <img src={avatar} alt="Brajamohan Das" className="aspect-square w-full object-cover" />
          </div>

          <div className="flex items-stretch justify-between border-t border-line">
            <p className="label px-3 py-3 text-ink/45">SYS/PORTFOLIO — V3.0</p>
            <span
              aria-hidden="true"
              className="flex items-center border-l border-line px-4 font-mono text-[0.6875rem] text-ink/60"
            >
              ↗
            </span>
          </div>
        </figure>
      </div>
    </div>

    <div className="mt-12 overflow-hidden border-y border-line py-3 md:mt-16">
      <div className="marquee flex w-max items-center gap-x-3 whitespace-nowrap">
        {[...strip, ...strip].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            aria-hidden={i >= strip.length}
            className="label flex items-center gap-3 text-ink/60"
          >
            {tech}
            <span aria-hidden="true" className="text-ink/25">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
