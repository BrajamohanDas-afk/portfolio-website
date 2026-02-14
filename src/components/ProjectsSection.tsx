import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "QRdx",
    period: "08.2025 — Present",
    description: "Better way to generate QR codes.",
    features: [
      "Dynamic QR code generation",
      "Customizable design options",
      "Multiple export formats",
      "High-quality output",
    ],
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "@bucharitesh/cli",
    period: "03.2025 — Present",
    description: "A personal CLI tool for scaffolding projects and automating workflows.",
    tags: ["Node.js", "TypeScript", "CLI"],
  },
  {
    title: "bucharitesh.in",
    period: "01.2024 — Present",
    description: "Personal portfolio and blog built with modern web technologies.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Projects{" "}
        <span className="text-sm font-normal text-muted-foreground align-super">
          ({projects.length})
        </span>
      </h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
