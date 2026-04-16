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
    if (id === "nauma-interlomas") {
      navigate("/nauma-interlomas");
    } else {
      navigate(`/property/${id}`);
    }
  };

  // Split title into type and name
  const titleParts = title.split(/\s*[–-]\s*/);
  const propertyType = titleParts[0]?.replace(/^(Oficina|Local|Espacio|Departamento|Oficinas)\s+(en\s+)?(Renta|Venta|Corporativa|Amueblada|Preventa)?\s*/i, '').trim() || "";
  const propertyName = titleParts[1] || "";

  // Determine if it's a sale or rent based on price
  const isSale = price.includes("MXN") && !price.includes("/mes");
  const operationType = isSale ? "VENTA" : "RENTA";

  return (
    <article 
      className="group cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Zone */}
          <p className="text-[hsl(36,12%,68%)] text-xs tracking-[0.22em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            {location}
          </p>

          {/* Type / Name */}
          <div className="mb-3">
            {propertyType && (
              <p className="text-[hsl(36,20%,95%)]/70 text-sm font-light tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                {propertyType}
              </p>
            )}
            {propertyName && (
              <h3 className="text-[hsl(36,20%,95%)] text-2xl md:text-[1.75rem] tracking-[0.02em] leading-tight mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                {propertyName}
              </h3>
            )}
          </div>
          
          {/* Price */}
          <p className="text-[hsl(36,20%,95%)] text-sm font-light tracking-[0.08em]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {operationType} · {price}
          </p>

          {/* CTA Button - appears on hover */}
          <div className="mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            <span className="btn-luxury inline-block px-5 py-2 text-xs tracking-[0.2em] uppercase text-[hsl(36,20%,95%)]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Ver Detalles
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
