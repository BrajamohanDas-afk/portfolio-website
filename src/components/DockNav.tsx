import {
  Home,
  PenLine,
  BookOpen,
  Bookmark,
  CalendarDays,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: PenLine, label: "Blog", href: "#" },
  { icon: BookOpen, label: "Reading", href: "#" },
  { icon: Bookmark, label: "Bookmarks", href: "#" },
  { icon: CalendarDays, label: "Calendar", href: "#" },
];

const socialItems = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const DockNav = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-2xl border border-dock-border bg-dock-bg/80 px-3 py-2 shadow-lg backdrop-blur-xl">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            title={item.label}
            className="rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <item.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-border" />
        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className="rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <item.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-border" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DockNav;
