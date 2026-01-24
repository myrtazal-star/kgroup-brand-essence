import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCatalog } from "@/components/PropertyCatalog";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import oficinaBegrand1 from "@/assets/oficina-begrand-1.jpg";
import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";

const SaleCatalog = () => {
  const saleProperties = [
    {
      id: "s4",
      title: "Oficina en Venta – Be Grand, Tabacalera",
      location: "Tabacalera · Cuauhtémoc",
      price: "$12,500,000 MXN",
      area: "113 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaBegrand1,
      featured: true,
    },
    {
      id: "s5",
      title: "Oficina Corporativa – Prol. Paseo de la Reforma",
      location: "Reforma–Bosques · Piso 10",
      price: "$22,000,000 MXN",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaReforma1,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <KGroupLogo variant="full" size="md" />
            </Link>
            
            <nav className="hidden md:flex items-center gap-12">
              <Link to="/rent-catalog" className="text-caption text-muted-foreground hover:text-foreground transition-colors">
                Renta
              </Link>
              <Link to="/sale-catalog" className="text-caption text-foreground">
                Venta
              </Link>
              <Link to="/services" className="text-caption text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
            </nav>

            <Link to="/" className="flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        <PropertyCatalog
          title="PROPIEDADES EN VENTA"
          subtitle="Inversiones en espacios comerciales y oficinas en las zonas más prestigiosas de Ciudad de México"
          properties={saleProperties}
          type="sale"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <p className="text-caption text-muted-foreground">
              © 2024 KGroup
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaleCatalog;