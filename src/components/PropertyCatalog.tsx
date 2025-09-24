import { PropertyCard } from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Home, Building } from "lucide-react";
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
      <div className="bg-card border border-border p-6 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
           <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Buscar por ubicación, colonia o tipo de propiedad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select 
              className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Tipo de Propiedad</option>
              <option value="apartment">Departamento</option>
              <option value="house">Casa</option>
              <option value="office">Oficina</option>
              <option value="penthouse">Penthouse</option>
            </select>
            
            <select 
              className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Rango de Precio</option>
              {type === "rent" ? (
                <>
                  <option value="0-30k">$0 - $30,000</option>
                  <option value="30k-60k">$30,000 - $60,000</option>
                  <option value="60k-100k">$60,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </>
              ) : (
                <>
                  <option value="0-500k">$0 - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m+">$5M+</option>
                </>
              )}
            </select>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Más Filtros
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">{filteredProperties.length} propiedades encontradas</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant={viewMode === "grid" ? "minimal" : "outline"} 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => setViewMode("grid")}
                >
                  <Home className="w-4 h-4" />
                  Vista Grid
                </Button>
                <Button 
                  variant={viewMode === "map" ? "minimal" : "outline"} 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => setViewMode("map")}
                >
                  <MapPin className="w-4 h-4" />
                  Vista Mapa
                </Button>
              </div>
            </div>
            
            <select 
              className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Más Recientes</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
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
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <PropertyMap properties={filteredProperties} mapboxToken={mapboxToken} />
          )}

        {/* Pagination - only show in grid view */}
        {viewMode === "grid" && (
          <div className="flex justify-center space-x-2">
            <Button variant="outline" disabled>Anterior</Button>
            <Button variant="luxury">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Siguiente</Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 p-2xl text-center space-y-6">
        <h2 className="text-display font-light">¿No encuentras lo que buscas?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nuestro equipo de asesores especializados puede ayudarte a encontrar la propiedad perfecta
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            Asesoría Personalizada
          </Button>
          <Button variant="minimal">Crear Alerta de Búsqueda</Button>
        </div>
      </div>
    </div>
  );
};