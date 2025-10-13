import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, TrendingUp, Shield, Users, Phone, Mail, Instagram, Linkedin, ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroProperty from "@/assets/hero-property.jpg";
import blockRenta from "@/assets/block-renta.jpg";
import oficinaPH from "@/assets/oficina-ph-roma-norte.jpg";
import oficinaPn1 from "@/assets/oficina-pn-1.jpg";
import kgroupLogo from "@/assets/kgroup-logo.jpg";

const Index = () => {
  const featuredProperties = [
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
      imageUrl: oficinaPH,
      featured: true
    },
    {
      id: "r4",
      title: "Oficina en Prado Norte",
      location: "Lomas de Chapultepec, Prado Norte",
      price: "$60,000/mes",
      area: "103 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPn1,
      featured: true
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
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-muted-foreground transition-colors">
                  Properties
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="hover:text-muted-foreground transition-colors">Services</Link>
              <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
              <Link to="/join-advisors" className="hover:text-muted-foreground transition-colors">Unite al KGroup</Link>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50 w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="w-full">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="w-full">Venta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full">Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#about" className="w-full">About</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/join-advisors" className="w-full">Unite al KGroup</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#contact" className="w-full">Contact</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="minimal" size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroProperty} 
            alt="Interior de propiedad de lujo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero font-light text-foreground">
                Where Luxury Meets 
                <span className="block">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Descubre propiedades exclusivas a través de nuestra plataforma sofisticada, 
                diseñada para clientes exigentes que valoran tanto la elegancia como la tecnología.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button variant="default" size="lg" className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  Pedir Asesoría
                  <User className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Propiedades Destacadas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Colección curada de oportunidades inmobiliarias premium en México
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-xl">
            <Link to="/rent-catalog" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8">
                Ver Propiedades en Renta
              </Button>
            </Link>
            <Link to="/sale-catalog" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8">
                Ver Propiedades en Venta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones inmobiliarias integrales con experiencia inigualable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Descubrimiento de Propiedades</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acceso a listados exclusivos y oportunidades fuera del mercado a través de nuestra extensa red.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Análisis de Mercado</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Insights basados en datos e inteligencia de mercado para informar tus decisiones de inversión.
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-heading">Servicio Concierge</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Servicio de guante blanco desde la consulta inicial hasta el cierre y más allá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-2xl items-center">
            <div className="space-y-6">
              <h2 className="text-display font-light">Redefiniendo la Excelencia Inmobiliaria</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  KGroup representa la intersección entre lujo e innovación en bienes raíces. 
                  Aprovechamos tecnología de vanguardia y experiencia profunda del mercado para entregar 
                  servicio incomparable a nuestra distinguida clientela en México.
                </p>
                <p>
                  Nuestra plataforma combina algoritmos sofisticados con perspicacia humana, 
                  asegurando que cada transacción cumpla con los más altos estándares de excelencia.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light mb-1">$2.4B+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground">TRANSACTIONS</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light mb-1">500+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground">CLIENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light mb-1">15+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground">YEARS</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted border border-border overflow-hidden">
                <img 
                  src={kgroupLogo} 
                  alt="KGroup Logo" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comienza tu viaje inmobiliario con una consulta personalizada
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-heading mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+52 55 6080 8129</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>groupkellar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Av. Paseo de Reforma 180, Ciudad de México</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/kellargroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-border">
              <h3 className="text-heading mb-6">Agendar Consulta</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="First Name"
                  />
                  <input 
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Last Name"
                  />
                </div>
                <input 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Email Address"
                />
                <textarea 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  rows={4}
                  placeholder="Tell us about your real estate needs..."
                />
                <Button variant="luxury" size="lg" className="w-full">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Index;