import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <div className="group card-premium">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/products"
          className="inline-flex items-center text-primary font-medium text-sm group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
