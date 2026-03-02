import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { HeroSection } from "@/components/HeroSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InteractiveMap } from "@/components/InteractiveMap";

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
import naumaFachada from "@/assets/nauma-fachada.jpg";
import oficinaMoliere2_1 from "@/assets/oficina-moliere2-1.jpg";
import oficinaPatriotismo1 from "@/assets/oficina-patriotismo-1.jpg";
import oficinaPatriotismo77_1 from "@/assets/oficina-patriotismo-77-1.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allProperties = [
    {
      id: "r16",
      title: "Oficina Corporativa – Torre Porsche",
      location: "Santa Fe · Piso 22",
      price: "$52,000/mes",
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
      price: "$40,000/mes",
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
      price: "Desde $5,306,436 MXN",
      area: "54–250 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPininfarina1,
      featured: true
    },
    {
      id: "r25",
      title: "Oficina / Bodega en Renta – Moliere, Polanco",
      location: "Polanco · Moliere",
      price: "$140,000/mes",
      area: "247 m²",
      bedrooms: 0,
      bathrooms: 5,
      imageUrl: oficinaMoliere2_1,
      featured: true
    },
    {
      id: "r26",
      title: "Oficina en Patriotismo con Vistas Panorámicas",
      location: "Condesa · Hipódromo",
      price: "$42,000/mes",
      area: "120 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaPatriotismo1,
      featured: true
    },
    {
      id: "r27",
      title: "Oficina en Renta – Patriotismo, Condesa",
      location: "Condesa · Hipódromo",
      price: "$27,000/mes",
      area: "77 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPatriotismo77_1,
      featured: true
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            <Link to="/">
              <KGroupLogo variant="full" size="md" />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-14">
              <Link to="/rent-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">
                Renta
              </Link>
              <Link to="/sale-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">
                Venta
              </Link>
              <Link to="/services" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">
                Servicios
              </Link>
              <a 
                href="https://wa.me/525560808129" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-8 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-8">
                <Link to="/rent-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Renta</Link>
                <Link to="/sale-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Venta</Link>
                <Link to="/services" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-nav text-muted-foreground">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Properties Grid */}
      <section className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <ScrollRevealSection className="mb-16">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-display text-foreground uppercase">
                Portafolio Corporativo
              </h2>
            </div>
            <GoldDivider className="mb-4" />
            <p className="text-muted-foreground font-light text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {allProperties.length} propiedades disponibles
            </p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProperties.map((property, index) => (
              <ScrollRevealSection key={property.id} delay={index * 0.08}>
                <PropertyCard {...property} />
              </ScrollRevealSection>
            ))}
          </div>

          <ScrollRevealSection className="flex gap-8 mt-20 justify-center" delay={0.2}>
            <Link 
              to="/rent-catalog"
              className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
            >
              Ver todas las rentas
            </Link>
            <Link 
              to="/sale-catalog"
              className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
            >
              Ver todas las ventas
            </Link>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Interactive Map */}
      <InteractiveMap />

      {/* Footer */}
      <footer className="border-t border-border/30 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <p className="text-caption text-muted-foreground">
              © 2024 KGroup Commercial Real Estate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
