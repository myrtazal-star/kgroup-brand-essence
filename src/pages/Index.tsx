import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import heroProperty from "@/assets/hero-building.jpg";
import oficinaEn1 from "@/assets/oficina-en-1.jpg";
import oficinaHomero1 from "@/assets/oficina-homero-1.jpg";
import oficinaBegrand1 from "@/assets/oficina-begrand-1.jpg";
import oficinaPorsche1 from "@/assets/oficina-porsche-1.jpg";
import oficinaEn2_1 from "@/assets/oficina-en2-1.jpg";
import oficinaEn3_1 from "@/assets/oficina-en3-1.jpg";
import oficinaMoliere1 from "@/assets/oficina-moliere-1.jpg";
import espacioMasaryk1 from "@/assets/espacio-masaryk-1.jpg";
import oficinaVinkel1 from "@/assets/oficina-vinkel-1.jpg";
import oficinaChapultepec1 from "@/assets/oficina-chapultepec-1.jpg";
import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";
import oficinaJuarez1 from "@/assets/oficina-juarez-1.jpg";
import oficinaPininfarina1 from "@/assets/oficina-pininfarina-1.jpg";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allProperties = [
    {
      id: "r16",
      title: "Oficina Corporativa – Torre Porsche",
      location: "Santa Fe · Piso 22",
      price: "$45,900/mes",
      area: "130 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPorsche1,
      featured: true
    },
    {
      id: "s4",
      title: "Oficina en Venta – Be Grand Reforma",
      location: "Tabacalera · Cuauhtémoc",
      price: "$12,500,000 MXN",
      area: "113 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaBegrand1,
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
    {
      id: "r24",
      title: "Oficina Amueblada – Juárez",
      location: "Juárez · Piso 6",
      price: "$53,000/mes",
      area: "105 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaJuarez1,
      featured: true
    },
    {
      id: "s6",
      title: "Oficinas Preventa – Torre Designo by Pininfarina",
      location: "Bosque Real · Huixquilucan",
      price: "Desde $2,500,000 MXN",
      area: "54–250 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPininfarina1,
      featured: true
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <KGroupLogo variant="full" size="md" />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <Link to="/rent-catalog" className="text-caption hover:text-muted-foreground transition-colors">
                Renta
              </Link>
              <Link to="/sale-catalog" className="text-caption hover:text-muted-foreground transition-colors">
                Venta
              </Link>
              <Link to="/services" className="text-caption hover:text-muted-foreground transition-colors">
                Servicios
              </Link>
              <a 
                href="https://wa.me/525560808129" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-caption hover:text-muted-foreground transition-colors"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-6">
                <Link 
                  to="/rent-catalog" 
                  className="text-caption"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Renta
                </Link>
                <Link 
                  to="/sale-catalog" 
                  className="text-caption"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Venta
                </Link>
                <Link 
                  to="/services" 
                  className="text-caption"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </Link>
                <a 
                  href="https://wa.me/525560808129" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-caption"
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <img 
            src={heroProperty} 
            alt="Espacios Premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-[0.1em] leading-tight mb-6 animate-slide-up">
              ESPACIOS<br />
              COMERCIALES<br />
              PREMIUM
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl animate-fade-in">
              Oficinas y locales comerciales en las mejores zonas de Ciudad de México
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] mb-4">
              PROPIEDADES
            </h2>
            <p className="text-muted-foreground font-light">
              {allProperties.length} espacios disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="flex gap-6 mt-16 justify-center">
            <Link 
              to="/rent-catalog"
              className="text-caption border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              Ver todas las rentas
            </Link>
            <Link 
              to="/sale-catalog"
              className="text-caption border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              Ver todas las ventas
            </Link>
          </div>
        </div>
      </section>

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

export default Index;