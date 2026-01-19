import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Shield, Building2, Search, ArrowRight, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroProperty from "@/assets/hero-building.jpg";
import oficinaPN1 from "@/assets/oficina-pn-1.jpg";
import localMasaryk1 from "@/assets/local-masaryk-1.jpg";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const featuredProperties = [
    {
      id: "r4",
      title: "Oficina en Prado Norte",
      location: "Lomas de Chapultepec, Prado Norte",
      price: "$60,000/mes + IVA",
      area: "103 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPN1,
      featured: true
    },
    {
      id: "r8",
      title: "Local comercial en Masaryk",
      location: "Avenida Masaryk, Polanco",
      price: "$80,000/mes + IVA",
      area: "150 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: localMasaryk1,
      featured: true
    }
  ];

  const zonas = [
    { name: "Polanco", description: "Distrito corporativo de lujo" },
    { name: "Reforma – Anzures", description: "Corredor de negocios icónico" },
    { name: "Santa Fe", description: "Centro empresarial moderno" },
    { name: "Del Valle", description: "Balance perfecto precio-ubicación" },
    { name: "Roma – Condesa", description: "Epicentro creativo" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Inicio</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">
                  Propiedades
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass shadow-premium bg-background">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="cursor-pointer uppercase tracking-wider">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="cursor-pointer uppercase tracking-wider">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Servicios</Link>
              
              <Link to="/join-advisors" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Únete a KGroup</Link>
              <Link to="/contacto" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Contacto</Link>
            </div>


            <DropdownMenu>
              <DropdownMenuTrigger asChild className="lg:hidden">
                <Button variant="outline" size="sm">Menú</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass shadow-premium w-48">
                <DropdownMenuItem asChild>
                  <Link to="/">Inicio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/rent-catalog">Renta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sale-catalog">Venta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services">Servicios</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/join-advisors">Únete a KGroup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contacto">Contacto</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={heroProperty} 
            alt="Espacio Comercial Premium"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass tech-border text-sm mb-6 animate-slide-in-left">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="font-medium tracking-wider uppercase text-xs">Bienes Raíces Comerciales CDMX</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-wide animate-fade-in-up">
              ESPACIOS COMERCIALES<br/>
              <span className="gradient-text">PREMIUM</span><br/>
              EN CDMX
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Oficinas, locales comerciales y terrenos en venta o renta en las mejores zonas de la ciudad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-tech hover:shadow-premium transition-all hover:scale-105"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  VER PROPIEDADES
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="tech-border hover:bg-accent/10 transition-all"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  Contactar
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-foreground/10">
              <div className="tech-pulse">
                <div className="text-4xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Propiedades</div>
              </div>
              <div className="tech-pulse">
                <div className="text-4xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Zonas Premium</div>
              </div>
              <div className="tech-pulse">
                <div className="text-4xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Atención</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buscador Rápido */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                ENCUENTRA TU <span className="gradient-text">ESPACIO IDEAL</span>
              </h2>
              <p className="text-muted-foreground">
                Filtra según tus necesidades específicas
              </p>
            </div>

            <div className="glass tech-border p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Tipo de Espacio</option>
                  <option>Oficina</option>
                  <option>Local Comercial</option>
                  <option>Terreno</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Operación</option>
                  <option>Renta</option>
                  <option>Venta</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Zona</option>
                  <option>Polanco</option>
                  <option>Reforma-Anzures</option>
                  <option>Santa Fe</option>
                  <option>Del Valle</option>
                  <option>Roma-Condesa</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Presupuesto</option>
                  <option>$0 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>m²</option>
                  <option>0 - 100 m²</option>
                  <option>100 - 300 m²</option>
                  <option>300+ m²</option>
                </select>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-tech uppercase tracking-wider" size="lg" asChild>
                <Link to="/rent-catalog">
                  <Search className="w-5 h-5 mr-2" />
                  Buscar Propiedades
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative border-t border-border bg-background py-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-sm text-muted-foreground">
              © 2024 KGroup. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
