import type { MouseEvent } from "react";

const items = [
  { n: "01", label: "WORK", href: "#work" },
  { n: "02", label: "SYSTEMS", href: "#systems" },
  { n: "03", label: "LAB", href: "#lab" },
  { n: "04", label: "ABOUT", href: "#about" },
  { n: "05", label: "CONTACT", href: "#contact" },
];

const closeDetails = (event: MouseEvent<HTMLAnchorElement>) => {
  event.currentTarget.closest("details")?.removeAttribute("open");
};

const Nav = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
    <div className="mx-auto flex h-12 max-w-[1280px] items-center justify-between gap-6 px-5 md:px-10">
      <a href="#top" className="label whitespace-nowrap text-ink transition-colors hover:text-hot">
        Brajamohan Das
      </a>

      <nav aria-label="Sections" className="hidden items-center gap-5 md:flex">
        {items.map((item) => (
          <a
            key={item.n}
            href={item.href}
            className="label whitespace-nowrap tracking-[0.14em] text-ink/60 transition-colors hover:text-ink"
          >
            <span className="text-ink/35">{item.n}</span> {item.label}
          </a>
        ))}
      </nav>

      <p className="label hidden items-center gap-2 whitespace-nowrap text-ink/60 md:flex">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
        Available
      </p>

      <div className="flex items-center gap-4 md:hidden">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
        <details className="relative">
          <summary className="label cursor-pointer list-none text-ink/70 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Sections"
            className="absolute right-0 top-7 flex w-44 flex-col border border-line bg-paper py-1"
          >
            {items.map((item) => (
              <a
                key={item.n}
                href={item.href}
                onClick={closeDetails}
                className="label px-4 py-2.5 text-ink/70 transition-colors hover:bg-paper-2 hover:text-ink"
              >
                {item.n} / {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </div>
  </header>
);

export default Nav;
