import { useEffect, useState } from "react";
import {
  Home,
  Code2,
  FolderKanban,
  MessageSquare,
  Mail,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "@/components/ThemeToggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", href: "#about-section", sectionId: "about-section" },
  { icon: Code2, label: "Skills", href: "#skills-section", sectionId: "skills-section" },
  { icon: FolderKanban, label: "Projects", href: "#projects-section", sectionId: "projects-section" },
  { icon: MessageSquare, label: "Contact", href: "#contact-section", sectionId: "contact-section" },
  { icon: FileText, label: "Resume", action: "resume" },
];

const socialItems = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/BrajamohanDas-afk" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/brajmohandas/" },
  { icon: FaXTwitter, label: "X / Twitter", href: "https://x.com/Brajamo08820896" },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=brajamohandas0390@gmail.com",
  },
];

const DockNav = () => {
  const { pathname } = useLocation();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-section");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["about-section", "skills-section", "projects-section", "contact-section"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const iconClassName =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/60 p-0 text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.28] hover:bg-accent hover:text-foreground hover:shadow-lg";
  const labelClassName =
    "pointer-events-none absolute -top-8 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-card-foreground opacity-0 shadow-md transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:opacity-100";

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-end gap-1.5 rounded-full border border-dock-border/80 bg-dock-bg/90 px-2.5 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          {navItems.map((item) =>
            item.action === "resume" ? (
              <div key={item.label} className="relative isolate group">
                <button
                  type="button"
                  title={item.label}
                  aria-label={item.label}
                  onClick={() => setIsResumeOpen(true)}
                  className={iconClassName}
                >
                  <item.icon className="h-[17px] w-[17px] shrink-0" />
                </button>
                <span className={labelClassName}>{item.label}</span>
              </div>
            ) : (
              <div key={item.label} className="relative isolate group">
                <a
                  href={item.href}
                  title={item.label}
                  aria-label={item.label}
                  onClick={() => {
                    if (item.sectionId) {
                      setActiveSection(item.sectionId);
                    }
                  }}
                  className={iconClassName}
                >
                  <item.icon className="h-[17px] w-[17px] shrink-0" />
                </a>
                <span className={labelClassName}>{item.label}</span>
                {item.sectionId && pathname === "/" && item.sectionId === activeSection && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground/80" />
                )}
              </div>
            ),
          )}
          <div className="mx-1 h-8 w-px bg-border/70" />
          {socialItems.map((item) => (
            <div key={item.label} className="relative isolate group">
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                title={item.label}
                aria-label={item.label}
                className={iconClassName}
              >
                <item.icon className="h-[17px] w-[17px] shrink-0" />
              </a>
              <span className={labelClassName}>{item.label}</span>
            </div>
          ))}
          <div className="mx-1 h-8 w-px bg-border/70" />
          <div className="relative isolate group">
            <ThemeToggle className={iconClassName} />
            <span className={labelClassName}>Theme</span>
          </div>
        </div>
      </nav>

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="w-[92vw] max-w-3xl p-4 sm:p-5">
          <DialogHeader className="pr-8">
            <DialogTitle>Hello Everyone This is My Resume</DialogTitle>
            <DialogDescription>Preview in this window, or download the PDF.</DialogDescription>
          </DialogHeader>
          <div className="overflow-hidden rounded-md border border-border">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Resume preview"
              className="h-[60vh] w-full bg-background"
            />
          </div>
          <div className="flex justify-end">
            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download Resume
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DockNav;
