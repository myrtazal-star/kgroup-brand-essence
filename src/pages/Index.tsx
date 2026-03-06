import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { HeroSection } from "@/components/HeroSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";
import { AboutSection } from "@/components/AboutSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InteractiveMap } from "@/components/InteractiveMap";

import oficinaBegrand1 from "@/assets/oficina-begrand-1.jpg";
import oficinaEn1 from "@/assets/oficina-en-1.jpg";
import oficinaHomero1 from "@/assets/oficina-homero-1.jpg";
import oficinaEn2_1 from "@/assets/oficina-en2-1.jpg";
import oficinaEn3_1 from "@/assets/oficina-en3-1.jpg";
import oficinaMoliere1 from "@/assets/oficina-moliere-1.jpg";
import espacioMasaryk1 from "@/assets/espacio-masaryk-1.jpg";
import oficinaVinkel1 from "@/assets/oficina-vinkel-1.jpg";
import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";
import oficinaJuarez1 from "@/assets/oficina-juarez-1.jpg";
import oficinaPininfarina1 from "@/assets/oficina-pininfarina-1.jpg";
import oficinaMoliere2_1 from "@/assets/oficina-moliere2-1.jpg";
import oficinaPatriotismo1 from "@/assets/oficina-patriotismo-1.jpg";
import oficinaPatriotismo77_1 from "@/assets/oficina-patriotismo-77-1.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredProperties = [
    { id: "s4", title: "Oficina en Venta – Be Grand Reforma", location: "Tabacalera · Cuauhtémoc", price: "$12,500,000 MXN", area: "113 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaBegrand1, featured: true },
    { id: "r19", title: "Oficina en Renta – Av. Moliere, Polanco", location: "Polanco · Piso 5", price: "$58,000/mes", area: "288 m²", bedrooms: 0, bathrooms: 4, imageUrl: oficinaMoliere1, featured: true },
    { id: "r20", title: "Espacio en Renta – Av. Presidente Masaryk", location: "Polanco · Masaryk", price: "$85,000/mes", area: "Consultar", bedrooms: 0, bathrooms: 4, imageUrl: espacioMasaryk1, featured: true },
    { id: "r23", title: "Oficina Corporativa – Prol. Paseo de la Reforma", location: "Reforma–Bosques · Piso 10", price: "$150,000/mes", area: "Consultar", bedrooms: 0, bathrooms: 3, imageUrl: oficinaReforma1, featured: true },
    { id: "r21", title: "Oficina en Renta – Torre Vinkel, Monterrey", location: "Monterrey · Piso 18", price: "$130,000/mes", area: "170 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaVinkel1, featured: true },
    { id: "s6", title: "Oficinas Preventa – Torre Designo by Pininfarina", location: "Bosque Real · Huixquilucan", price: "Desde $5,306,436 MXN", area: "54–250 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaPininfarina1, featured: true },
  ];

  const allProperties = [
    ...featuredProperties,
    { id: "r7", title: "Oficina en Polanco – Ejercito Nacional", location: "Polanco", price: "$75,000/mes", area: "215 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaEn1 },
    { id: "r11", title: "Oficina en renta – Homero, Polanco", location: "Polanco · Homero", price: "$45,000/mes", area: "150 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaHomero1 },
    { id: "r17", title: "Oficina en renta – Ejercito Nacional, Polanco", location: "Polanco", price: "$40,000/mes", area: "70 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaEn2_1 },
    { id: "r18", title: "Oficina en Renta – Ejercito Nacional, 5 Privados", location: "Polanco", price: "$60,000/mes", area: "170 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaEn3_1 },
    { id: "r24", title: "Oficina Amueblada – Juárez", location: "Juárez · Piso 6", price: "$53,000/mes", area: "105 m²", bedrooms: 0, bathrooms: 2, imageUrl: oficinaJuarez1 },
    { id: "r25", title: "Oficina / Bodega en Renta – Moliere, Polanco", location: "Polanco · Moliere", price: "$140,000/mes", area: "247 m²", bedrooms: 0, bathrooms: 5, imageUrl: oficinaMoliere2_1 },
    { id: "r26", title: "Oficina en Patriotismo con Vistas Panorámicas", location: "Condesa · Hipódromo", price: "$42,000/mes", area: "120 m²", bedrooms: 0, bathrooms: 2, imageUrl: oficinaPatriotismo1 },
    { id: "r27", title: "Oficina en Renta – Patriotismo, Condesa", location: "Condesa · Hipódromo", price: "$27,000/mes", area: "77 m²", bedrooms: 0, bathrooms: 1, imageUrl: oficinaPatriotismo77_1 },
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
            <div className="hidden md:flex items-center gap-14">
              <Link to="/rent-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Renta</Link>
              <Link to="/sale-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Venta</Link>
              <Link to="/nosotros" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Nosotros</Link>
              <Link to="/services" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Servicios</Link>
              <Link to="/blog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Blog</Link>
              <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Contacto</a>
            </div>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-8 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-8">
                <Link to="/rent-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Renta</Link>
                <Link to="/sale-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Venta</Link>
                <Link to="/nosotros" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
                <Link to="/services" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-nav text-muted-foreground">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Featured Properties */}
      <section className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <ScrollRevealSection className="mb-16">
            <p className="text-caption tracking-[0.35em] text-primary mb-4">SELECCIÓN EXCLUSIVA</p>
            <h2 className="text-display text-foreground uppercase">Propiedades Destacadas</h2>
            <GoldDivider className="my-4" />
            <p className="text-muted-foreground font-light text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {featuredProperties.length} propiedades premium seleccionadas
            </p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <ScrollRevealSection key={property.id} delay={index * 0.08}>
                <PropertyCard {...property} />
              </ScrollRevealSection>
            ))}
          </div>

          <ScrollRevealSection className="flex gap-8 mt-20 justify-center" delay={0.2}>
            <Link to="/rent-catalog" className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500">
              Ver todas las rentas
            </Link>
            <Link to="/sale-catalog" className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500">
              Ver todas las ventas
            </Link>
          </ScrollRevealSection>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Interactive Map */}
      <InteractiveMap />

      {/* All Properties */}
      <section className="py-[120px] border-t border-border/20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <ScrollRevealSection className="mb-16">
            <p className="text-caption tracking-[0.35em] text-primary mb-4">CATÁLOGO COMPLETO</p>
            <h2 className="text-display text-foreground uppercase">Portafolio Corporativo</h2>
            <GoldDivider className="my-4" />
            <p className="text-muted-foreground font-light text-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {allProperties.length} propiedades disponibles
            </p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProperties.map((property, index) => (
              <ScrollRevealSection key={property.id} delay={index * 0.05}>
                <PropertyCard {...property} />
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <InvestmentSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Lead Capture */}
      <LeadCaptureSection />

      {/* Footer */}
      <footer className="border-t border-border/30 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <KGroupLogo variant="full" size="md" />
              <p className="text-sm text-muted-foreground mt-4 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Firma especializada en bienes raíces de alto nivel en Ciudad de México.
              </p>
            </div>
            <div>
              <p className="text-caption text-primary mb-4">NAVEGACIÓN</p>
              <div className="flex flex-col gap-3">
                <Link to="/rent-catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Renta</Link>
                <Link to="/sale-catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Venta</Link>
                <Link to="/nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Nosotros</Link>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Servicios</Link>
              </div>
            </div>
            <div>
              <p className="text-caption text-primary mb-4">CONTACTO</p>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  +52 55 6080 8129
                </a>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Ciudad de México, México</p>
              </div>
            </div>
          </div>
          <GoldDivider className="mb-6" />
          <p className="text-caption text-muted-foreground/60 text-center">
            © 2024 KGroup Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
