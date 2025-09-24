import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Home, Building } from "lucide-react";

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
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
              <option value="">Tipo de Propiedad</option>
              <option value="apartment">Departamento</option>
              <option value="house">Casa</option>
              <option value="office">Oficina</option>
              <option value="penthouse">Penthouse</option>
            </select>
            
            <select className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
              <option value="">Rango de Precio</option>
              <option value="0-500k">$0 - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m+">$5M+</option>
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
            <span className="text-muted-foreground">{properties.length} propiedades encontradas</span>
            <div className="flex items-center gap-2">
              <Button variant="minimal" size="sm" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Vista Grid
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Vista Mapa
              </Button>
            </div>
          </div>
          
          <select className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
            <option value="newest">Más Recientes</option>
            <option value="price-low">Precio: Menor a Mayor</option>
            <option value="price-high">Precio: Mayor a Menor</option>
            <option value="area">Área</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          <Button variant="outline" disabled>Anterior</Button>
          <Button variant="luxury">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Siguiente</Button>
        </div>
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