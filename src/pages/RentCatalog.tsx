import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCatalog } from "@/components/PropertyCatalog";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import oficinaEn1 from "@/assets/oficina-en-1.jpg";
import oficinaHomero1 from "@/assets/oficina-homero-1.jpg";
import oficinaPorsche1 from "@/assets/oficina-porsche-1.jpg";
import oficinaEn2_1 from "@/assets/oficina-en2-1.jpg";
import oficinaEn3_1 from "@/assets/oficina-en3-1.jpg";
import oficinaMoliere1 from "@/assets/oficina-moliere-1.jpg";
import espacioMasaryk1 from "@/assets/espacio-masaryk-1.jpg";
import oficinaVinkel1 from "@/assets/oficina-vinkel-1.jpg";
import oficinaChapultepec1 from "@/assets/oficina-chapultepec-1.jpg";
import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";

const RentCatalog = () => {
  const rentalProperties = [
    {
      id: "r16",
      title: "Oficina Corporativa – Torre Porsche, Santa Fe",
      location: "Santa Fe · Piso 22",
      price: "$45,900/mes",
      area: "130 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPorsche1,
      featured: true
    },
    {
      id: "r7",
      title: "Oficina en Polanco – Ejercito Nacional",
      location: "Polanco",
      price: "$75,000/mes",
      area: "215 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn1
    },
    {
      id: "r11",
      title: "Oficina en renta – Homero, Polanco",
      location: "Polanco · Homero",
      price: "$45,000/mes",
      area: "150 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaHomero1
    },
    {
      id: "r17",
      title: "Oficina en renta – Ejercito Nacional, Polanco",
      location: "Polanco",
      price: "$18,000/mes",
      area: "70 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn2_1
    },
    {
      id: "r18",
      title: "Oficina en Renta – Ejercito Nacional, 5 Privados",
      location: "Polanco",
      price: "$60,000/mes",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn3_1
    },
    {
      id: "r19",
      title: "Oficina en Renta – Av. Moliere, Polanco",
      location: "Polanco · Piso 5",
      price: "$58,000/mes",
      area: "288 m²",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: oficinaMoliere1,
      featured: true
    },
    {
      id: "r20",
      title: "Espacio en Renta – Av. Presidente Masaryk",
      location: "Polanco · Masaryk",
      price: "$85,000/mes",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: espacioMasaryk1,
      featured: true
    },
    {
      id: "r21",
      title: "Oficina en Renta – Torre Vinkel, Monterrey",
      location: "Monterrey · Piso 18",
      price: "$130,000/mes",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaVinkel1,
      featured: true
    },
    {
      id: "r22",
      title: "Oficina en Renta – Lomas de Chapultepec",
      location: "Lomas · Piso 5",
      price: "$70,000/mes",
      area: "140 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaChapultepec1,
      featured: true
    },
    {
      id: "r23",
      title: "Oficina Corporativa – Prol. Paseo de la Reforma",
      location: "Reforma–Bosques · Piso 10",
      price: "$150,000/mes",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaReforma1,
      featured: true
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
              <Link to="/rent-catalog" className="text-caption text-foreground">
                Renta
              </Link>
              <Link to="/sale-catalog" className="text-caption text-muted-foreground hover:text-foreground transition-colors">
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
          title="PROPIEDADES EN RENTA"
          subtitle="Espacios comerciales y oficinas disponibles para renta en las mejores ubicaciones de Ciudad de México"
          properties={rentalProperties}
          type="rent"
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

export default RentCatalog;