import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Atom,
  Boxes,
  Braces,
  Container,
  Database,
  FileCode2,
  Layers,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LogLine {
  time: string;
  text: string;
  ok?: boolean;
}

interface Stage {
  n: string;
  name: string;
  desc: [string, string];
  logs: LogLine[];
}

const STAGES: Stage[] = [
  {
    n: "01",
    name: "IDEA",
    desc: ["Turn problems and ideas", "into clear requirements."],
    logs: [{ time: "10:24:17", text: "Analyzing problem statement" }],
  },
  {
    n: "02",
    name: "DESIGN",
    desc: ["Design architecture,", "data flows and interfaces."],
    logs: [{ time: "10:24:23", text: "Updating system architecture" }],
  },
  {
    n: "03",
    name: "BUILD",
    desc: ["Implement services,", "integrations and tools."],
    logs: [{ time: "10:25:01", text: "Implementing API endpoint" }],
  },
  {
    n: "04",
    name: "TEST",
    desc: ["Validate with tests,", "edge cases and real data."],
    logs: [
      { time: "10:25:12", text: "Running unit tests" },
      { time: "10:25:28", text: "All tests passed ✓", ok: true },
    ],
  },
  {
    n: "05",
    name: "DEPLOY",
    desc: ["Ship to production", "or share as open source."],
    logs: [
      { time: "10:25:33", text: "Building production image" },
      { time: "10:26:01", text: "Deployment successful ✓", ok: true },
    ],
  },
  {
    n: "06",
    name: "OBSERVE",
    desc: ["Monitor, learn", "and iterate."],
    logs: [
      { time: "10:26:14", text: "Monitoring system metrics" },
      { time: "10:26:20", text: "No issues detected ✓", ok: true },
    ],
  },
];

const STACK: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Braces },
  { name: "FastAPI", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Layers },
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Atom },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Boxes },
];

const ENV = [
  { name: "Development", status: "Online" },
  { name: "API Endpoints", status: "Healthy" },
  { name: "Database", status: "Connected" },
  { name: "Worker Jobs", status: "Running" },
];

const SCENE = { w: 560, h: 800 };
const CARD = { w: 184, h: 104 };
const DESC_X = 346;

/* Plate centres in scene coordinates — staggered like the reference. */
const NODES = [
  { x: 162, y: 70 },
  { x: 206, y: 190 },
  { x: 212, y: 310 },
  { x: 220, y: 430 },
  { x: 234, y: 550 },
  { x: 226, y: 670 },
];

const LOOP_PATH = `M ${NODES[5].x} ${NODES[5].y + CARD.h / 2} V 760 H 16 V ${NODES[0].y} H ${
  NODES[0].x - CARD.w / 2
}`;

const ITERATE_Y = 391;

const IDEA_TRAVEL_MS = 560;
const TRAVEL_MS = 480;
const GLOW_MS = 420;
const ITERATE_MS = 1000;

const TRAVEL_KEYFRAMES = [
  "signal-to-1",
  "signal-to-2",
  "signal-to-3",
  "signal-to-4",
  "signal-to-5",
];

type Phase = "travel" | "glow" | "iterate";

/* ponytail: scripted visual sequence — no server telemetry exists; wire to an API if one ever does */
const LOG_ROWS = STAGES.flatMap((stage, stageIndex) =>
  stage.logs.map((line) => ({ stage, stageIndex, line })),
);

const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(2)}%`;

const enterClass = (started: boolean) =>
  `transition-[opacity,transform] duration-500 ease-out ${
    started ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
  }`;

interface StageCardProps {
  stage: Stage;
  node: { x: number; y: number };
  index: number;
  started: boolean;
  glow: boolean;
}

const StageCard = ({ stage, node, index, started, glow }: StageCardProps) => {
  return (
    <div
      className="absolute aspect-[184/104] w-[32.86%] -translate-x-1/2 -translate-y-1/2"
      style={{ left: pct(node.x, SCENE.w), top: pct(node.y, SCENE.h) }}
    >
      <div className={`h-full w-full ${enterClass(started)}`} style={{ transitionDelay: `${380 + index * 100}ms` }}>
        <div
          className={`h-full w-full transition-transform duration-500 ease-out ${glow ? "-translate-y-[2px]" : ""}`}
          style={{
            filter: glow ? "drop-shadow(0 7px 12px hsl(var(--hot) / 0.16))" : "none",
            transitionProperty: "transform, filter",
          }}
        >
          <svg viewBox="0 0 184 104" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
            {/* slab thickness */}
            <path
              d="M0 52 L92 104 L184 52 L184 59 L92 111 L0 59 Z"
              className="fill-paper-2 stroke-line"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            {/* top face */}
            <path
              d="M92 0 L184 52 L92 104 L0 52 Z"
              className={`fill-paper transition-colors duration-500 ${glow ? "stroke-ink/30" : "stroke-line"}`}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            {/* bottom edge — lights up when the signal arrives */}
            <path
              d="M0 52 L92 104 L184 52"
              fill="none"
              className={`transition-colors duration-500 ${glow ? "stroke-hot" : "stroke-transparent"}`}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="absolute left-1/2 top-[42%] w-[66%] -translate-x-1/2 -translate-y-1/2 text-center leading-none">
            <span
              className={`block font-mono text-[0.625rem] tracking-[0.14em] transition-colors duration-500 ${
                glow ? "text-hot" : "text-ink/55"
              }`}
            >
              {stage.n}
            </span>
            <span className="mt-1 block text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink">
              {stage.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

interface WorkflowSceneProps {
  phase: Phase;
  step: number;
  started: boolean;
  reduced: boolean;
}

const WorkflowScene = ({ phase, step, started, reduced }: WorkflowSceneProps) => {
  const running = started && !reduced;
  const glowAt = running && phase === "glow" ? step : -1;
  const iterate = running && phase === "iterate";
  const showDot = running && (phase === "travel" || phase === "iterate");
  const dotKeyframe = phase === "iterate" ? "signal-iterate" : step === 0 ? "signal-idea" : TRAVEL_KEYFRAMES[step - 1];
  const dotDuration = phase === "iterate" ? ITERATE_MS : step === 0 ? IDEA_TRAVEL_MS : TRAVEL_MS;
  const connectorOn = (index: number) =>
    running && ((phase === "glow" && step === index) || (phase === "travel" && step === index + 1));

  return (
    <div
      className={`blueprint relative mx-auto aspect-[560/800] w-full max-w-[560px] ${enterClass(started)}`}
      style={{ transitionDelay: "280ms" }}
    >
      <svg viewBox={`0 0 ${SCENE.w} ${SCENE.h}`} aria-hidden="true" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="activity-glow">
            <stop offset="0%" stopColor="hsl(var(--hot))" stopOpacity="0.16" />
            <stop offset="100%" stopColor="hsl(var(--hot))" stopOpacity="0" />
          </radialGradient>
          <marker
            id="activity-arrow-line"
            viewBox="0 0 6 6"
            refX="5"
            refY="3"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M1 1 L5 3 L1 5" fill="none" className="stroke-ink/45" strokeWidth="1" />
          </marker>
          <marker
            id="activity-arrow-hot"
            viewBox="0 0 6 6"
            refX="5"
            refY="3"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M1 1 L5 3 L1 5" fill="none" className="stroke-hot" strokeWidth="1" />
          </marker>
        </defs>

        {/* warm light spreading underneath the active plate */}
        {NODES.map((node, index) => (
          <ellipse
            key={STAGES[index].n}
            cx={node.x}
            cy={node.y + 46}
            rx={98}
            ry={42}
            fill="url(#activity-glow)"
            className="transition-opacity duration-700 ease-out"
            style={{ opacity: glowAt === index ? 1 : 0 }}
          />
        ))}

        {/* faint technical ticks from the rail to each plate (skipping the iterate row) */}
        {NODES.slice(1)
          .filter((_, index) => index !== 2)
          .map((node, index) => (
            <line
              key={STAGES[index].n}
              x1={16}
              y1={node.y}
              x2={node.x - CARD.w / 2}
              y2={node.y}
              className="stroke-ink/15"
              strokeWidth="1"
              strokeDasharray="2 4"
              vectorEffect="non-scaling-stroke"
            />
          ))}

        {/* iterate loop: observe → rail → idea */}
        <path d={LOOP_PATH} fill="none" className="stroke-ink/35" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path
          d={LOOP_PATH}
          fill="none"
          className={`stroke-hot transition-opacity duration-500 ${iterate ? "opacity-100" : "opacity-0"}`}
          strokeWidth="1"
          markerEnd="url(#activity-arrow-hot)"
          vectorEffect="non-scaling-stroke"
        />

        {/* stage connectors */}
        {NODES.slice(0, -1).map((node, index) => {
          const next = NODES[index + 1];
          const on = connectorOn(index);
          return (
            <g key={STAGES[index].n}>
              <line
                x1={node.x}
                y1={node.y + CARD.h / 2}
                x2={next.x}
                y2={next.y - CARD.h / 2}
                className={`transition-colors duration-500 ${on ? "stroke-hot/25" : "stroke-hot/0"}`}
                strokeWidth="7"
              />
              <line
                x1={node.x}
                y1={node.y + CARD.h / 2}
                x2={next.x}
                y2={next.y - CARD.h / 2}
                className={`transition-colors duration-500 ${on ? "stroke-hot" : "stroke-hot/45"}`}
                strokeWidth="1.25"
                markerEnd="url(#activity-arrow-hot)"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}

        {/* dashed elbow from each plate to its description */}
        {NODES.map((node, index) => (
          <path
            key={STAGES[index].n}
            d={`M ${node.x + CARD.w / 2 + 8} ${node.y + 10} H ${DESC_X - 30} L ${DESC_X - 12} ${
              node.y - 14
            }`}
            fill="none"
            className={`transition-colors duration-300 ${glowAt === index ? "stroke-ink/60" : "stroke-ink/30"}`}
            strokeWidth="1"
            strokeDasharray="2 3"
            markerEnd="url(#activity-arrow-line)"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* active indicator on the iteration rail */}
        <circle
          cx={16}
          cy={ITERATE_Y}
          r={3}
          className={`transition-colors duration-500 ${iterate ? "fill-hot" : "fill-ink/25"}`}
        />
        {iterate ? <circle cx={16} cy={ITERATE_Y} r={9} className="fill-hot/15 dot-pulse" /> : null}
      </svg>

      {NODES.map((node, index) => (
        <StageCard
          key={STAGES[index].n}
          stage={STAGES[index]}
          node={node}
          index={index}
          started={started}
          glow={glowAt === index}
        />
      ))}

      {/* signal dot: rides the rail, the connectors and the description elbows */}
      {showDot ? (
        <span
          key={`${phase}-${step}`}
          aria-hidden="true"
          className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hot shadow-[0_0_10px_3px_hsl(var(--hot)/0.35)]"
          style={{ animation: `${dotKeyframe} ${dotDuration}ms ${phase === "iterate" ? "linear" : "ease-in-out"} forwards` }}
        />
      ) : null}

      {NODES.map((node, index) => (
        <p
          key={STAGES[index].n}
          className={`absolute w-[38%] font-mono text-[0.5rem] leading-[1.7] transition-colors duration-300 sm:text-[0.5625rem] ${
            glowAt === index ? "text-ink/90" : "text-ink/65"
          }`}
          style={{ left: pct(DESC_X, SCENE.w), top: pct(node.y - 28, SCENE.h) }}
        >
          {STAGES[index].desc[0]}
          <br />
          {STAGES[index].desc[1]}
        </p>
      ))}

      <div className="absolute w-[17%]" style={{ left: pct(26, SCENE.w), top: pct(384, SCENE.h) }}>
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink">Iterate</p>
        <p className="mt-1.5 font-mono text-[0.5rem] uppercase leading-[1.9] tracking-[0.1em] text-ink/55 sm:text-[0.5625rem]">
          Based on
          <br />
          real usage
          <br />
          and feedback.
        </p>
      </div>
    </div>
  );
};

const PANEL_HEADER = "flex items-center justify-between gap-3 border-b border-paper/15 px-2.5 py-1.5";

const LogPanel = ({ revealed, reduced }: { revealed: number; reduced: boolean }) => (
  <aside className="flex flex-col border border-ink bg-[#111111] text-paper">
    <div className="flex items-center justify-between gap-4 border-b border-paper/15 px-3.5 py-2">
      <p className="label text-paper/90">&gt; Live Engineering Logs</p>
      <p className="label flex items-center gap-2 text-hot">
        Auto
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400 dot-pulse" />
      </p>
    </div>

    <ol className="space-y-1 border-b border-paper/15 px-3.5 py-2.5">
      {LOG_ROWS.map(({ stage, stageIndex, line }, index) => {
        const on = reduced || revealed > stageIndex;
        const accent = line.ok ? "text-emerald-400" : stage.name === "IDEA" ? "text-paper/90" : "text-hot";
        return (
          <li
            key={`${stage.n}-${index}`}
            className={`grid grid-cols-[auto_9ch_minmax(0,1fr)] items-baseline gap-x-1.5 font-mono text-[0.5625rem] leading-[1.55] transition-opacity duration-500 ${
              on ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-paper/35">{line.time} •</span>
            <span className={accent}>[{stage.name}]</span>
            <span className={line.ok ? "text-emerald-400" : "text-paper/80"}>{line.text}</span>
          </li>
        );
      })}
    </ol>

    <div className="mx-3.5 mt-3 border border-paper/20">
      <div className={PANEL_HEADER}>
        <p className="label text-paper/70">Current Stack</p>
        <ArrowRight aria-hidden="true" className="h-3 w-3 text-paper/40" />
      </div>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 p-2.5 sm:grid-cols-4">
        {STACK.map(({ name, icon: Icon }) => (
          <li key={name} className="flex items-center gap-1.5 font-mono text-[0.5625rem] text-paper/75">
            <Icon aria-hidden="true" strokeWidth={1.5} className="h-3 w-3 shrink-0 text-paper/45" />
            {name}
          </li>
        ))}
      </ul>
    </div>

    <div className="mx-3.5 my-3 border border-paper/20">
      <div className={PANEL_HEADER}>
        <p className="label text-paper/70">Environment Status</p>
        <ArrowRight aria-hidden="true" className="h-3 w-3 text-paper/40" />
      </div>
      <ul className="space-y-1.5 p-2.5">
        {ENV.map((row) => (
          <li key={row.name} className="flex items-center justify-between gap-4 font-mono text-[0.59375rem]">
            <span className="text-paper/60">{row.name}</span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-paper/85">{row.status}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>

    <p className="px-3.5 pb-2.5 font-mono text-[0.5rem] leading-relaxed text-paper/30">
      &gt; visual sequence — no live telemetry on this page
    </p>
  </aside>
);

const Activity = () => {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>("travel");
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reduced) {
      setRevealed(STAGES.length);
      return;
    }

    let timer: number;

    if (phase === "travel") {
      timer = window.setTimeout(() => {
        setRevealed(step + 1);
        setPhase("glow");
      }, step === 0 ? IDEA_TRAVEL_MS : TRAVEL_MS);
    } else if (phase === "glow") {
      timer = window.setTimeout(() => {
        if (step < STAGES.length - 1) {
          setStep(step + 1);
          setPhase("travel");
        } else {
          setPhase("iterate");
        }
      }, GLOW_MS);
    } else {
      timer = window.setTimeout(() => {
        setRevealed(0);
        setStep(0);
        setPhase("travel");
      }, ITERATE_MS);
    }

    return () => window.clearTimeout(timer);
  }, [started, reduced, phase, step]);

  return (
    <section id="activity" ref={sectionRef} className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-[28px_minmax(0,1fr)] md:grid-cols-[52px_minmax(0,1fr)]">
          <div className={`pt-8 md:pt-10 ${enterClass(started)}`}>
            <p className="font-mono text-[0.6875rem] text-ink/60">03</p>
            <span aria-hidden="true" className="mt-2 block h-px w-4 bg-ink/40" />
          </div>

          <div className="pl-4 md:pl-8">
            <header
              className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3 pt-8 md:pt-10 ${enterClass(
                started,
              )}`}
            >
              <h2 className="label text-ink/70">// System Activity</h2>
              <p className="label text-ink/40">Real Workflow&nbsp;&nbsp;/&nbsp;&nbsp;From Code To Impact</p>
            </header>

            <div className="grid items-start gap-8 py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.25fr)] md:gap-6 md:py-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.3fr)_minmax(0,1.15fr)] lg:gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.5fr)_minmax(0,1.22fr)] xl:gap-8">
              <div>
                <h3
                  className={`font-display text-[clamp(2.4rem,4.6vw,4.1rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.01em] ${enterClass(
                    started,
                  )}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  System
                  <br />
                  Activity
                </h3>
                <p
                  className={`mt-6 max-w-[32ch] font-mono text-[0.6875rem] leading-[1.9] text-ink/65 ${enterClass(
                    started,
                  )}`}
                  style={{ transitionDelay: "180ms" }}
                >
                  A live view of how ideas turn into running systems. This is the actual engineering
                  cycle I follow for every project.
                </p>
                <span
                  aria-hidden="true"
                  className={`mt-6 block h-px w-14 bg-hot ${enterClass(started)}`}
                  style={{ transitionDelay: "180ms" }}
                />
              </div>

              <div className="min-w-0">
                <WorkflowScene phase={phase} step={step} started={started} reduced={reduced} />
              </div>

              <div
                className={`md:col-span-2 md:mx-auto md:max-w-[560px] lg:col-span-1 lg:mx-0 lg:max-w-none ${enterClass(
                  started,
                )}`}
                style={{ transitionDelay: "380ms" }}
              >
                <LogPanel revealed={revealed} reduced={reduced} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;

