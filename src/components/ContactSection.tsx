import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import avatarImg from "@/assets/avatar.jpg";

const CAL_LINK = "https://cal.com/brajamohan-das/30min?overlayCalendar=true";

const contactLinks = [
  {
    label: "GitHub",
    value: "BrajamohanDas-afk",
    href: "https://github.com/BrajamohanDas-afk",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "brajmohandas",
    href: "https://www.linkedin.com/in/brajmohandas/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    value: "@Brajamo08820896",
    href: "https://x.com/Brajamo08820896",
    icon: FaXTwitter,
  },
];

const ContactSection = () => {
  return (
    <section id="contact-section" className="space-y-4 scroll-mt-20">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="text-sm text-muted-foreground">
        If you've read this far, you might be interested in what I do.
      </p>

      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto inline-flex items-center gap-3 rounded-xl border border-border bg-accent/30 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent"
        >
          <span className="flex items-center">
            <img
              src={avatarImg}
              alt="Brajamohan Das"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
            />
            <span className="mx-1.5 text-sm font-semibold text-muted-foreground">+</span>
            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-background/80 px-2 text-[11px] font-medium text-muted-foreground ring-1 ring-border">
              You
            </span>
          </span>
          <span className="text-base font-semibold">Book a Free Call</span>
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-accent/20"
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
