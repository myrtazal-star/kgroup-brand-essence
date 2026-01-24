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
  imageUrl, 
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  // Extract just the property name (after the dash)
  const titleParts = title.split(/\s*[–-]\s*/);
  const propertyName = titleParts[1] || titleParts[0];

  // Determine if it's a sale or rent based on price
  const isSale = price.includes("MXN") && !price.includes("/mes");
  const operationType = isSale ? "VENTA" : "RENTA";

  return (
    <article 
      className="group cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Full Height Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Property Name */}
          <h3 className="text-white text-xl md:text-2xl font-medium tracking-[0.02em] uppercase leading-tight mb-2">
            {propertyName}
          </h3>
          
          {/* Location */}
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
            {location}
          </p>
          
          {/* Price */}
          <p className="text-white text-sm font-light tracking-[0.1em]">
            {operationType} {price}
          </p>
        </div>
      </div>
    </article>
  );
};