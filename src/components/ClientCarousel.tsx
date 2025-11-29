import { cn } from "@/lib/utils";

const clients = [
  { name: "GBH Hospital Group", initials: "GBH" },
  { name: "Regency Hospital", initials: "RH" },
  { name: "Pantai Hospital", initials: "PH" },
  { name: "Sunway Medical Centre", initials: "SMC" },
  { name: "KPJ Healthcare", initials: "KPJ" },
  { name: "Prince Court Medical", initials: "PCM" },
  { name: "MSU Medical Centre", initials: "MSU" },
  { name: "De La Cruz Hospital", initials: "DLC" },
];

export const ClientCarousel = () => {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-slide-left">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0 mx-8 w-40 h-20 bg-card rounded-xl shadow-premium-sm",
              "flex items-center justify-center transition-all duration-300",
              "hover:shadow-premium-md hover:-translate-y-1"
            )}
          >
            <div className="text-center">
              <span className="font-heading font-bold text-2xl text-primary">
                {client.initials}
              </span>
              <p className="text-xs text-muted-foreground mt-1 px-2 truncate">
                {client.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
