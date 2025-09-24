import { MapPin, Square, BedDouble, Bath, ArrowUpRight } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  imageUrl: string;
  featured?: boolean;
  type: 'apartment' | 'house' | 'penthouse';
}

export const PropertyCard = ({ 
  title, 
  location, 
  price, 
  area, 
  bedrooms, 
  bathrooms, 
  imageUrl, 
  featured = false,
  type
}: PropertyCardProps) => {
  return (
    <div className="group cursor-pointer hover-elegant">
      <div className="relative overflow-hidden border border-border bg-card">
        {/* Property Image */}
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-caption font-medium tracking-wide">
              EXCLUSIVO
            </div>
          )}
          <div className="absolute top-6 right-6 w-8 h-8 bg-background/90 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Property Details */}
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="text-caption text-muted-foreground uppercase tracking-wide">
              {type === 'apartment' ? 'Apartamento' : type === 'house' ? 'Casa' : 'Penthouse'}
            </div>
            <h3 className="text-heading font-serif group-hover:text-muted-foreground transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-caption">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>

          <div className="divider-elegant h-4"></div>

          <div className="flex justify-between items-center">
            <span className="text-subheading font-serif text-primary">{price}</span>
          </div>

          {(bedrooms !== undefined || bathrooms !== undefined) && (
            <div className="flex items-center gap-8 text-muted-foreground text-caption border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <Square className="w-3 h-3" />
                {area}
              </div>
              {bedrooms !== undefined && (
                <div className="flex items-center gap-2">
                  <BedDouble className="w-3 h-3" />
                  {bedrooms} rec
                </div>
              )}
              {bathrooms !== undefined && (
                <div className="flex items-center gap-2">
                  <Bath className="w-3 h-3" />
                  {bathrooms} baños
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};