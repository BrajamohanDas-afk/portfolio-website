import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface Experiment {
  date: string;
  type: string;
  title: string;
  note: string;
  preview: string[];
  href: string;
  linkLabel: string;
}

const experiments: Experiment[] = [
  {
    date: "2026.08",
    type: "AI / Detection",
    title: "VoiceShield",
    note: "Real-time AI voice deepfake detection: frozen Wav2Vec2 embeddings served through a versioned FastAPI API.",
    preview: ["WAV2VEC2 EMBEDDINGS", "MLP HEAD", "FASTAPI", "POSTGRESQL"],
    href: "https://github.com/BrajamohanDas-afk/ai-voice-detections",
    linkLabel: "GitHub",
  },
  {
    date: "2026.04",
    type: "Fintech",
    title: "Payout Engine",
    note: "Django payout engine with an explicit state machine, ledger invariants and idempotent Celery settlement.",
    preview: ["PAYOUT REQUEST", "HELD FUNDS", "CELERY SETTLE", "LEDGER ENTRY"],
    href: "https://payout-engine-two.vercel.app",
    linkLabel: "Live",
  },
  {
    date: "2026.04",
    type: "Backend service",
    title: "Rate-Limiter",
    note: "Per-client API rate limiting with a request-volume dashboard and integration-style tests.",
    preview: ["ROUTE", "SERVICE", "DB", "DASHBOARD"],
    href: "https://github.com/BrajamohanDas-afk/Rate-Limiter",
    linkLabel: "GitHub",
  },
  {
    date: "2025.08",
    type: "AI toolkit",
    title: "AI-Tools App",
    note: "Summarizer, image captioning, translation and visual Q&A built on Google Generative AI.",
    preview: ["PROMPT", "GOOGLE GEN AI", "RESULT"],
    href: "https://ai-tools-frontend-iota.vercel.app/",
    linkLabel: "Live",
  },
  {
    date: "2025.04",
    type: "ML / Compilers",
    title: "ML in Compiler Optimization",
    note: "Experiments applying machine learning to compiler optimization.",
    preview: ["C SOURCE", "ML MODEL", "OPTIMIZED PASS"],
    href: "https://coptimize.onrender.com/",
    linkLabel: "Live",
  },
];

const Lab = () => (
  <section id="lab" className="mx-auto max-w-[1280px] px-5 pt-16 md:px-10 md:pt-24">
    <SectionHead index="04" title="Lab / Experiments" note="Smaller builds — every entry is a real repo" />

    <Reveal>
      <div className="mt-10">
        {experiments.map((experiment) => (
          <a
            key={experiment.title}
            href={experiment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-2 border-t border-line px-0 py-5 transition-colors hover:bg-paper-2/70 md:grid-cols-[95px_160px_1fr_80px] md:items-baseline md:gap-6 md:px-2"
          >
            <span className="font-mono text-[0.6875rem] text-ink/45">{experiment.date}</span>
            <span className="label text-ink/55">{experiment.type}</span>
            <span>
              <span className="block text-base font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-hot">
                {experiment.title}
              </span>
              <span className="mt-1 grid max-w-2xl">
                <span className="[grid-area:1/1] text-[0.8125rem] leading-relaxed text-ink/65 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0">
                  {experiment.note}
                </span>
                <span className="[grid-area:1/1] font-mono text-[0.6875rem] uppercase tracking-wider text-ink/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {`> ${experiment.preview.join("  →  ")}`}
                </span>
              </span>
            </span>
            <span className="label text-ink/45 transition-[color,transform] group-hover:translate-x-1 group-hover:text-hot md:text-right">
              {experiment.linkLabel} ↗
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10">
        <a
          href="https://github.com/BrajamohanDas-afk"
          target="_blank"
          rel="noopener noreferrer"
          className="label text-ink underline decoration-hot decoration-2 underline-offset-4 transition-colors hover:text-hot"
        >
          All repositories ↗
        </a>
      </p>
    </Reveal>
  </section>
);

export default Lab;
