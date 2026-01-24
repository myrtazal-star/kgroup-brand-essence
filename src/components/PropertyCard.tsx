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

  // Split title into type and name
  const titleParts = title.split(/\s*[–-]\s*/);
  const propertyType = titleParts[0]?.replace(/^(Oficina|Local|Espacio|Departamento)\s+(en\s+)?(Renta|Venta)?\s*/i, '') || titleParts[0];
  const propertyName = titleParts[1] || "";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Title - Split Typography */}
          <div className="mb-3">
            <h3 className="text-white text-lg md:text-xl font-light tracking-[0.1em] uppercase leading-tight">
              {propertyType || "OFICINA"}
            </h3>
            {propertyName && (
              <p className="text-white text-xl md:text-2xl font-light tracking-[0.05em] uppercase leading-tight mt-1">
                {propertyName}
              </p>
            )}
          </div>
          
          {/* Location */}
          <p className="text-white/70 text-xs tracking-[0.15em] uppercase mb-3">
            {location}
          </p>
          
          {/* Price */}
          <p className="text-white text-sm tracking-[0.1em] uppercase">
            {operationType} {price}
          </p>
        </div>
      </div>
    </article>
  );
};