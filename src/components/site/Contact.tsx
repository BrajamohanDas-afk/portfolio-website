import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const channels = [
  { label: "Email", value: "brajamohandas0390@gmail.com", href: "mailto:brajamohandas0390@gmail.com" },
  { label: "GitHub", value: "BrajamohanDas-afk", href: "https://github.com/BrajamohanDas-afk" },
  { label: "LinkedIn", value: "brajmohandas", href: "https://www.linkedin.com/in/brajmohandas/" },
  { label: "X / Twitter", value: "@Brajamo08820896", href: "https://x.com/Brajamo08820896" },
];

interface FieldProps {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  type?: string;
  textarea?: boolean;
}

const Field = ({ label, name, value, onChange, type = "text", textarea }: FieldProps) => {
  const className =
    "mt-2 w-full border border-paper/20 bg-transparent px-3 py-2.5 font-mono text-sm text-paper transition-colors placeholder:text-paper/25 focus:border-hot focus:outline-none";

  return (
    <label className="block">
      <span className="label text-paper/50">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={4}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          className={`${className} resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          className={className}
        />
      )}
    </label>
  );
};

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (name: keyof FormState, value: string) => setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${form.name || "new message"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:brajamohandas0390@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 pt-16 md:px-10 md:pt-24">
      <SectionHead index="06" title="Contact" note="Open channel" />

      <div className="grid gap-12 pt-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.3rem)] font-black uppercase leading-[0.9] tracking-tight">
            Have a system worth building<span className="text-hot">?</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
            Open to interesting projects, collaborations and engineering opportunities.
          </p>

          <div className="mt-8 border-t border-line">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group grid grid-cols-[100px_1fr_auto] items-baseline gap-4 border-b border-line py-3.5"
              >
                <span className="label text-ink/45">{channel.label}</span>
                <span className="truncate font-mono text-[0.6875rem] text-ink/75 transition-colors group-hover:text-hot">
                  {channel.value}
                </span>
                <span aria-hidden="true" className="label text-ink/35 transition-colors group-hover:text-hot">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-8">
            <a
              href="https://cal.com/brajamohan-das/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-ink underline decoration-hot decoration-2 underline-offset-4 transition-colors hover:text-hot"
            >
              Book a call ↗
            </a>
            <a
              href="/resume.pdf"
              download
              className="label text-ink underline decoration-hot decoration-2 underline-offset-4 transition-colors hover:text-hot"
            >
              Resume ↓
            </a>
          </div>

          <p className="label mt-10 flex items-center gap-2 text-ink/70">
            <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Status — ready for connection
          </p>
        </Reveal>

        {/* ponytail: no backend here — the form composes a mailto request; add a form API when message volume justifies it */}
        <Reveal delay={80} className="lg:col-span-6">
          <div className="border border-ink bg-panel p-6 text-paper md:p-8">
            <p className="label flex items-center gap-2 text-paper/60">
              <span aria-hidden="true" className="text-signal">
                ➜
              </span>
              initiate_connection()
              <span aria-hidden="true" className="inline-block h-3 w-1.5 animate-blink bg-signal" />
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <Field label="Name" name="name" value={form.name} onChange={update} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} />
              <Field label="Message" name="message" textarea value={form.message} onChange={update} />

              <button
                type="submit"
                className="label w-full border border-hot bg-hot px-4 py-3 text-paper transition-colors hover:bg-panel hover:text-hot"
              >
                [ Send request ]
              </button>
            </form>

            <p aria-live="polite" className="mt-4 font-mono text-[0.625rem] leading-relaxed text-paper/45">
              {sent
                ? "> opening your mail client…"
                : "> composes an email in your mail client — nothing is stored on this page"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
