import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  features?: string[];
  tags: string[];
  link?: string;
  images?: ProjectImage[];
}

const ProjectImagePreview = ({ src, alt }: ProjectImage) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
        Add screenshot file: <span className="font-mono">{src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full rounded-lg border border-border object-cover"
    />
  );
};

const ProjectCard = ({ title, period, description, features, tags, link, images }: ProjectCardProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-lg border border-border bg-card transition-colors hover:border-foreground/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-foreground">
            {title.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-xs font-mono text-muted-foreground">{period}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-border px-5 py-4 animate-fade-in">
          <p className="font-mono text-sm text-foreground/80">{description}</p>
          {images && images.length > 0 && (
            <div className="mt-4 grid gap-3">
              {images.map((image) => (
                <ProjectImagePreview key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>
          )}
          {features && features.length > 0 && (
            <ul className="mt-3 space-y-1">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/80 font-mono">
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
