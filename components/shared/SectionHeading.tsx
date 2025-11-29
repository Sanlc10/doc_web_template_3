import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {overline && (
        <div className="mb-4 flex items-center gap-3" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <p className="text-sm font-medium tracking-widest uppercase text-secondary">
            {overline}
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </div>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" style={{ marginLeft: align === "center" ? "auto" : "0", marginRight: align === "center" ? "auto" : "0" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
