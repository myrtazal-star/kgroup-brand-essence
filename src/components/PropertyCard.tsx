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
  featured = false 
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  // Split title into two parts for styling
  const titleParts = title.split(/\s*[–-]\s*/);
  const mainTitle = titleParts[0] || title;
  const subTitle = titleParts[1] || "";

  // Determine if it's a sale or rent based on price
  const isSale = price.includes("MXN") && !price.includes("/mes");
  const operationType = isSale ? "VENTA" : "RENTA";

  return (
    <div 
      className="group cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Full Cover Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-medium tracking-wider">
            DESTACADO
          </div>
        )}
        
        {/* Property Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Title - Two Lines Style */}
          <div className="mb-2">
            <h3 className="text-lg font-light tracking-wide uppercase">
              {mainTitle}
            </h3>
            {subTitle && (
              <p className="text-xl font-bold tracking-wide uppercase text-accent">
                {subTitle}
              </p>
            )}
          </div>
          
          {/* Location */}
          <p className="text-xs uppercase tracking-widest text-white/80 mb-2">
            {location}
          </p>
          
          {/* Price */}
          <p className="text-sm font-medium">
            {operationType} {price}
          </p>
        </div>
      </div>
    </div>
  );
};