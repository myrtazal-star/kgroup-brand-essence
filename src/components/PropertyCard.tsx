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
  const propertyType = titleParts[0]?.replace(/^(Oficina|Local|Espacio|Departamento)\s+(en\s+)?(Renta|Venta|Corporativa)?\s*/i, '').trim() || "OFICINA";
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Title - Split Typography like Gubond */}
          <div className="mb-4">
            <p className="text-white/80 text-base md:text-lg font-extralight tracking-[0.2em] uppercase">
              {propertyType || "OFICINA"}
            </p>
            {propertyName && (
              <h3 className="text-white text-2xl md:text-3xl font-medium tracking-[0.02em] uppercase leading-tight mt-1">
                {propertyName}
              </h3>
            )}
          </div>
          
          {/* Location */}
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2">
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