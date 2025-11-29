import { LucideIcon } from "lucide-react";

interface StrengthCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const StrengthCard = ({ icon: Icon, title, description }: StrengthCardProps) => {
  return (
    <div className="group p-8 bg-card rounded-2xl shadow-premium-sm hover:shadow-premium-lg transition-all duration-400 hover:-translate-y-2">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
