interface SectionHeadProps {
  index: string;
  title: string;
  note?: string;
  tone?: "light" | "dark";
}

const SectionHead = ({ index, title, note, tone = "light" }: SectionHeadProps) => {
  const dark = tone === "dark";

  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t pt-3 ${
        dark ? "border-paper/20" : "border-line"
      }`}
    >
      <h2 className={`label ${dark ? "text-paper/60" : "text-ink/55"}`}>
        {index} / {title}
      </h2>
      {note ? <p className={`label ${dark ? "text-paper/40" : "text-ink/40"}`}>{note}</p> : null}
    </div>
  );
};

export default SectionHead;
