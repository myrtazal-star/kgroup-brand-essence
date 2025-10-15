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
import blockRenta from "@/assets/block-renta.jpg";
import oficinaPH from "@/assets/oficina-ph-roma-norte.jpg";
import rentaMitikah from "@/assets/renta-mitikah.jpg";
import deptoArquimedes from "@/assets/depto-arquimedes-polanco.jpg";
import oficinaPn1 from "@/assets/oficina-pn-1.jpg";
import oficinaCh1 from "@/assets/oficina-chapultepec-1.jpg";
import oficinaEn1 from "@/assets/oficina-en-1.jpg";
import oficinaRd1 from "@/assets/oficina-rd-1.jpg";

const RentCatalog = () => {
  const rentalProperties = [
    {
      id: "r1",
      title: "Departamento en renta Roma Norte",
      location: "Durango 262, Roma Norte",
      price: "$92,000/mes",
      area: "120 m²",
      bedrooms: 2,
      bathrooms: 2,
      imageUrl: blockRenta,
      featured: true
    },
    {
      id: "r2",
      title: "Oficina en Polanco PH 2 niveles",
      location: "Homero, Polanco",
      price: "$100,000/mes",
      area: "200 m²",
      bedrooms: 6,
      bathrooms: 1.5,
      imageUrl: oficinaPH
    },
    {
      id: "r4",
      title: "Oficina en Prado Norte",
      location: "Lomas de Chapultepec, Prado Norte",
      price: "$60,000/mes",
      area: "103 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPn1
    },
    {
      id: "r7",
      title: "Oficina en Polanco, Ejercito Nacional",
      location: "Ejercito Nacional, Polanco",
      price: "$75,000/mes",
      area: "215 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn1
    },
    {
      id: "r6",
      title: "Oficina frente de Parque de Chapultepec",
      location: "Cl. 13 de Septiembre, San Miguel Chapultepec",
      price: "$37,000/mes",
      area: "100 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaCh1
    },
    {
      id: "r8",
      title: "Oficina Piso 9 Rubén Darío, Polanco",
      location: "Rubén Darío, Polanco",
      price: "$46,000/mes + IVA",
      area: "215 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaRd1
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
                <DropdownMenuContent className="bg-background border-border z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="text-foreground font-medium">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/join-advisors" className="hover:text-muted-foreground transition-colors">Unite al KGroup</Link>
            </nav>

            {/* Mobile & Desktop Back Button */}
            <Link to="/">
              <Button variant="minimal" size="sm" className="group">
                <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Volver</span>
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