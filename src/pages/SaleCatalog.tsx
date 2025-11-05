import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCatalog } from "@/components/PropertyCatalog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import oficinaBegrand1 from "@/assets/oficina-begrand-1.jpg";

const SaleCatalog = () => {
  const saleProperties = [
    {
      id: "s4",
      title: "Oficina en venta o renta – BeGrand Reforma, CDMX",
      location: "Lafragua #13, Col. Tabacalera, Cuauhtémoc",
      price: "$12,500,000",
      area: "113 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaBegrand1,
      featured: true,
    },
    {
      id: "s1",
      title: "Residencias Meridian",
      location: "Polanco, Ciudad de México",
      price: "$4,200,000",
      area: "223 m²",
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: property1,
      featured: true,
    },
    {
      id: "s2",
      title: "Torre Ejecutiva Santa Fe",
      location: "Santa Fe, Ciudad de México",
      price: "$850,000",
      area: "111 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: property2,
      featured: false,
    },
    {
      id: "s3",
      title: "Penthouse Skyline",
      location: "Zona Rosa, Ciudad de México",
      price: "$12,500,000",
      area: "446 m²",
      bedrooms: 4,
      bathrooms: 3,
      imageUrl: property3,
      featured: true,
    },
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
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground font-medium">
                  Properties
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="text-foreground font-medium">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            title="Propiedades en Venta"
            subtitle="Invierte en tu futuro con nuestra selección exclusiva de propiedades en venta en las zonas más prestigiosas de Ciudad de México"
            properties={saleProperties}
            type="sale"
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

export default SaleCatalog;