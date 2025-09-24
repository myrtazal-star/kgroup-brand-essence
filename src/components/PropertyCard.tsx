import { MapPin, Square, BedDouble, Bath, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

  const whatsappNumber = "5256808129";
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation to property details
    const message = `Hola! Me interesa la propiedad: *${title}*\n\n` +
                   `📍 ${location}\n` +
                   `💰 ${price}\n` +
                   `📐 ${area}\n` +
                   `🛏️ ${bedrooms} recámaras\n` +
                   `🚿 ${bathrooms} baños\n\n` +
                   `¿Podrían proporcionarme más información?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

          {/* WhatsApp Button */}
          <div className="pt-4 border-t border-border">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};