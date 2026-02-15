const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "C", "C++", "Python"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Tools and Technologies",
    items: ["Git", "VS Code", "Google Workspace", "Linux"],
  },
  {
    title: "Relevant Coursework",
    items: ["DBMS", "DSA"],
  },
];

const TechnicalSkillsSection = () => {
  return (
    <section id="skills-section" className="space-y-4 scroll-mt-20">
      <h2 className="text-xl font-semibold">Technical Skills</h2>
      <div className="space-y-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-lg border border-border bg-card p-4">
            <p className="mb-3 text-sm font-mono text-muted-foreground">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
