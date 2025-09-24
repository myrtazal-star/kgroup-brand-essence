import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCatalog } from "@/components/PropertyCatalog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const RentCatalog = () => {
  const rentalProperties = [
    {
      id: "r1",
      title: "Departamento Moderno Polanco",
      location: "Polanco, Ciudad de México",
      price: "$25,000/mes",
      area: "120 m²",
      bedrooms: 2,
      bathrooms: 2,
      imageUrl: property1,
      featured: true
    },
    {
      id: "r2",
      title: "Oficina Ejecutiva Santa Fe",
      location: "Santa Fe, Ciudad de México",
      price: "$18,000/mes",
      area: "85 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: property2
    },
    {
      id: "r3",
      title: "Penthouse de Lujo Zona Rosa",
      location: "Zona Rosa, Ciudad de México",
      price: "$45,000/mes",
      area: "200 m²",
      bedrooms: 3,
      bathrooms: 3,
      imageUrl: property3,
      featured: true
    },
    {
      id: "r4",
      title: "Loft Industrial Roma Norte",
      location: "Roma Norte, Ciudad de México",
      price: "$22,000/mes",
      area: "95 m²",
      bedrooms: 1,
      bathrooms: 1,
      imageUrl: property1
    },
    {
      id: "r5",
      title: "Casa Familiar Condesa",
      location: "Condesa, Ciudad de México",
      price: "$35,000/mes",
      area: "180 m²",
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: property2
    },
    {
      id: "r6",
      title: "Estudio Amueblado Del Valle",
      location: "Del Valle, Ciudad de México",
      price: "$15,000/mes",
      area: "60 m²",
      bedrooms: 1,
      bathrooms: 1,
      imageUrl: property3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <nav className="hidden md:flex items-center gap-8 text-caption">
              <Link to="/" className="hover:text-muted-foreground transition-colors">Home</Link>
              <Link to="/rent-catalog" className="text-foreground font-medium">Renta</Link>
              <Link to="/sale-catalog" className="hover:text-muted-foreground transition-colors">Venta</Link>
              <Link to="/join-advisors" className="hover:text-muted-foreground transition-colors">Unite al KGroup</Link>
            </nav>

            <Link to="/">
              <Button variant="minimal" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-3xl">
        <div className="container mx-auto px-6">
          <PropertyCatalog
            title="Propiedades en Renta"
            subtitle="Descubre espacios únicos para vivir o trabajar en las mejores ubicaciones de Ciudad de México con nuestro catálogo de propiedades en renta"
            properties={rentalProperties}
            type="rent"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background py-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-caption text-muted-foreground">
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RentCatalog;