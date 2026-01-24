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
  imageUrl, 
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  // Clean title - remove prefix like "Oficina en Renta –" 
  const cleanTitle = title.replace(/^(Oficina|Local|Espacio|Departamento)\s+(en\s+)?(Renta|Venta)?\s*[–-]\s*/i, '');

  // Determine if it's a sale or rent based on price
  const isSale = price.includes("MXN") && !price.includes("/mes");

  return (
    <article 
      className="group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        {/* Location */}
        <p className="text-caption text-muted-foreground">
          {location}
        </p>
        
        {/* Title */}
        <h3 className="text-lg font-light tracking-wide leading-tight">
          {cleanTitle}
        </h3>
        
        {/* Price & Area */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-sm font-normal">
            {isSale ? 'Venta' : 'Renta'} · {price}
          </span>
          {area && area !== "Consultar" && (
            <span className="text-sm text-muted-foreground">
              {area}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};