import { PropertyCard } from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Home, Building } from "lucide-react";
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
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and sort properties based on search criteria
  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (propertyType) {
      filtered = filtered.filter(property => {
        const title = property.title.toLowerCase();
        switch (propertyType) {
          case "apartment":
            return title.includes("departamento") || title.includes("apartamento");
          case "house":
            return title.includes("casa");
          case "office":
            return title.includes("oficina");
          case "penthouse":
            return title.includes("penthouse") || title.includes("ph");
          default:
            return true;
        }
      });
    }

    // Filter by price range (simplified for rental properties)
    if (priceRange && type === "rent") {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[^\d]/g, ''));
        switch (priceRange) {
          case "0-30k":
            return price <= 30000;
          case "30k-60k":
            return price > 30000 && price <= 60000;
          case "60k-100k":
            return price > 60000 && price <= 100000;
          case "100k+":
            return price > 100000;
          default:
            return true;
        }
      });
    }

    // Sort properties
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
      case "area":
        return filtered.sort((a, b) => {
          const areaA = parseInt(a.area.replace(/[^\d]/g, ''));
          const areaB = parseInt(b.area.replace(/[^\d]/g, ''));
          return areaB - areaA;
        });
      default:
        return filtered;
    }
  }, [properties, searchTerm, propertyType, priceRange, sortBy, type]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, propertyType, priceRange, sortBy]);

  return (
    <div className="space-y-2xl">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-hero font-light text-foreground">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Filters Section */}
      <div className="bg-card border border-border p-4 sm:p-6 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
           <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm sm:text-base"
                placeholder="Buscar ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4">
            <select 
              className="px-3 sm:px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Tipo</option>
              <option value="apartment">Depto</option>
              <option value="house">Casa</option>
              <option value="office">Oficina</option>
              <option value="penthouse">PH</option>
            </select>
            
            <select 
              className="px-3 sm:px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Precio</option>
              {type === "rent" ? (
                <>
                  <option value="0-30k">$0-30K</option>
                  <option value="30k-60k">$30-60K</option>
                  <option value="60k-100k">$60-100K</option>
                  <option value="100k+">$100K+</option>
                </>
              ) : (
                <>
                  <option value="0-500k">$0-500K</option>
                  <option value="500k-1m">$500K-1M</option>
                  <option value="1m-5m">$1M-5M</option>
                  <option value="5m+">$5M+</option>
                </>
              )}
            </select>
            
            <Button variant="outline" size="sm" className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Más Filtros</span>
              <span className="sm:hidden">Filtros</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <span className="text-sm sm:text-base text-muted-foreground">{filteredProperties.length} propiedades</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant={viewMode === "grid" ? "minimal" : "outline"} 
                  size="sm" 
                  className="flex items-center gap-1 sm:gap-2"
                  onClick={() => setViewMode("grid")}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Grid</span>
                </Button>
                <Button 
                  variant={viewMode === "map" ? "minimal" : "outline"} 
                  size="sm" 
                  className="flex items-center gap-1 sm:gap-2"
                  onClick={() => setViewMode("map")}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Mapa</span>
                </Button>
              </div>
            </div>
            
            <select 
              className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Más Recientes</option>
              <option value="price-low">Precio: ↑</option>
              <option value="price-high">Precio: ↓</option>
              <option value="area">Área</option>
            </select>
          </div>

          {/* Mapbox Token Input (only show when map view is selected and no token) */}
          {viewMode === "map" && !mapboxToken && (
            <div className="bg-card border border-border p-6 space-y-4">
              <div>
                <h3 className="text-heading mb-2">Configurar Vista de Mapa</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Para ver las propiedades en el mapa, necesitas un token público de Mapbox. 
                  <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Obtén tu token aquí
                  </a>
                </p>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Ingresa tu token público de Mapbox..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1 px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <Button variant="outline" onClick={() => setMapboxToken(mapboxToken)}>
                    Aplicar
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Content based on view mode */}
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <PropertyMap properties={filteredProperties} mapboxToken={mapboxToken} />
          )}

        {/* Pagination - only show in grid view */}
        {viewMode === "grid" && totalPages > 1 && (
          <div className="flex justify-center items-center flex-wrap gap-3 py-8">
            <Button 
              variant="outline" 
              size="default" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="font-semibold border-2 hover:bg-foreground hover:text-background"
            >
              Anterior
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="default"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page 
                  ? "min-w-[48px] h-[48px] font-bold text-base bg-foreground text-background hover:bg-foreground/90" 
                  : "min-w-[48px] h-[48px] font-semibold text-base border-2 hover:bg-foreground hover:text-background"
                }
              >
                {page}
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="default" 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="font-semibold border-2 hover:bg-foreground hover:text-background"
            >
              Siguiente
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 p-6 sm:p-2xl text-center space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-display font-light">¿No encuentras lo que buscas?</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Nuestro equipo de asesores especializados puede ayudarte a encontrar la propiedad perfecta
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/consultation" className="w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full flex items-center justify-center gap-2">
              <Building className="w-4 h-4" />
              Asesoría Personalizada
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};