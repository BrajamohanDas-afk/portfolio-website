import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Experience from "@/components/site/Experience";
import Systems from "@/components/site/Systems";
import Activity from "@/components/site/Activity";
import Lab from "@/components/site/Lab";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";

const Index = () => (
  <>
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
    >
      Skip to content
    </a>
    <Nav />
    <main>
      <Hero />
      <Experience />
      <Systems />
      <Activity />
      <Lab />
      <About />
      <Contact />
    </main>
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-6 md:px-10">
        <p className="label text-ink/45">SYS/PORTFOLIO — v3.0</p>
        <p className="label text-ink/45">Built with React</p>
        <p className="label text-ink/45">© 2026 Brajamohan Das</p>
        <a href="#top" className="label text-ink/60 transition-colors hover:text-hot">
          Back to top ↑
        </a>
      </div>
    </footer>
  </>
);

export default Index;
