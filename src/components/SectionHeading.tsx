import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {badge && (
        <span className={cn(
          "inline-block px-4 py-2 rounded-full text-sm font-medium mb-4",
          light 
            ? "bg-background/10 text-background" 
            : "bg-primary/10 text-primary"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        light ? "text-background" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-body text-lg max-w-3xl",
          centered && "mx-auto",
          light ? "text-background/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
