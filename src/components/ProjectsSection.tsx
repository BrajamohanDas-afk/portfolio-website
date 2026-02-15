import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI-Tool App",
    period: "08.2025 — Past",
    description: "All-in-one AI toolkit for everyday tasks.",
    features: [
      "Combines summarizer, image captioning, translation, code explanation, and visual Q&A",
      "Full-stack integration with Google Generative AI API",
      "File uploads (up to 50MB), history tracking, and local storage persistence",
      "Production deployment with proper CORS, responsive layout, and mobile sidebar",
    ],
    tags: ["React", "Tailwind CSS", "Vite", "Node.js", "Express"],
    link: "https://ai-tools-frontend-iota.vercel.app/",
  },
  {
    title: "MMSpace(Mentee Mentor Space)",
    period: "10.2025 — Past",
    description: "Real-time collaboration platform for mentors and mentees.",
    features: [
      "Role-based authentication (Admin, Mentor, Mentee)",
      "Group and private chat with real-time notifications",
      "Attendance tracking and leave approval workflows",
      "Progress monitoring dashboard with responsive UI and dark mode",
    ],
    tags: ["React", "JavaScript", "Socket.IO", "HTML", "CSS"],
    link: "https://www.mmspace.me/"
  },
  {
    title: "SafeCheck",
    period: "02.2026 — Present",
    description: "Web-based file safety checker powered by VirusTotal.",
    features: [
      "Upload files to scan against VirusTotal for malware and threat signals",
      "Displays detection results and risk indicators in a clear, readable UI",
      "Attendance tracking and leave approval workflows",
      "Open-source utility with a focus on simplicity, speed, and usability",
    ],
    tags: ["React", "Node.js", "Tailwind CSS", "VirusTotal API", "Express", "Web Security"],
    link: "https://github.com/BrajamohanDas-afk/SafeCheck"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="space-y-4 scroll-mt-20">
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
