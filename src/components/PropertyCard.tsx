import { MapPin, Square, BedDouble, Bath } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  featured?: boolean;
}

export const PropertyCard = ({ 
  id,
  title, 
  location, 
  price, 
  area, 
  bedrooms, 
  bathrooms, 
  imageUrl, 
  featured = false 
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden border border-border bg-card hover:shadow-refined transition-all duration-300">
        {/* Property Image */}
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-caption">
              FEATURED
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-heading font-medium group-hover:text-muted-foreground transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-caption">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>

          <div className="flex justify-between items-center text-caption">
            <span className="text-xl font-medium text-primary">{price}</span>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground text-caption border-t border-border pt-4">
            <div className="flex items-center gap-1">
              <Square className="w-3 h-3" />
              {area}
            </div>
            <div className="flex items-center gap-1">
              <BedDouble className="w-3 h-3" />
              {bedrooms} bed
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-3 h-3" />
              {bathrooms} bath
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};