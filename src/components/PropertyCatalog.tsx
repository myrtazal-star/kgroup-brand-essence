import { PropertyCard } from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import { Search, MapPin, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

interface Property {
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

interface PropertyCatalogProps {
  title: string;
  subtitle: string;
  properties: Property[];
  type: "rent" | "sale";
}

export const PropertyCatalog = ({ title, subtitle, properties, type }: PropertyCatalogProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [mapboxToken, setMapboxToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceA - priceB;
        });
      case "price-high":
        return filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceB - priceA;
        });
      default:
        return filtered;
    }
  }, [properties, searchTerm, sortBy]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.1em]">{title}</h1>
        <p className="text-muted-foreground font-light max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between py-6 border-y border-border">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-border text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-caption text-muted-foreground">
            {filteredProperties.length} resultados
          </span>
          
          <div className="flex items-center gap-2">
            <button 
              className={`p-2 transition-colors ${viewMode === "grid" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 transition-colors ${viewMode === "map" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setViewMode("map")}
            >
              <MapPin className="w-4 h-4" />
            </button>
          </div>

          <select 
            className="px-3 py-2 bg-transparent border border-border text-sm font-light focus:outline-none focus:border-foreground"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Recientes</option>
            <option value="price-low">Precio ↑</option>
            <option value="price-high">Precio ↓</option>
          </select>
        </div>
      </div>

      {/* Mapbox Token Input */}
      {viewMode === "map" && !mapboxToken && (
        <div className="p-6 border border-border space-y-4">
          <p className="text-sm text-muted-foreground">
            Ingresa tu token de Mapbox para ver el mapa.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Token de Mapbox..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent border border-border text-sm font-light focus:outline-none focus:border-foreground"
            />
            <button 
              className="px-4 py-2 bg-foreground text-background text-sm font-light"
              onClick={() => setMapboxToken(mapboxToken)}
            >
              Aplicar
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      {viewMode === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      ) : (
        <PropertyMap properties={filteredProperties} mapboxToken={mapboxToken} />
      )}

      {/* Pagination */}
      {viewMode === "grid" && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8">
          <button 
            className="px-4 py-2 text-sm font-light border border-border hover:border-foreground disabled:opacity-30 disabled:hover:border-border transition-colors"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Anterior
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`w-10 h-10 text-sm font-light border transition-colors ${
                currentPage === page 
                  ? "bg-foreground text-background border-foreground" 
                  : "border-border hover:border-foreground"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="px-4 py-2 text-sm font-light border border-border hover:border-foreground disabled:opacity-30 disabled:hover:border-border transition-colors"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Siguiente
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="py-12 text-center border-t border-border">
        <p className="text-muted-foreground font-light mb-6">
          ¿No encuentras lo que buscas?
        </p>
        <a 
          href="https://wa.me/525560808129"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-caption border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};