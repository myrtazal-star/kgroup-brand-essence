import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, TrendingUp, Shield, Users, Phone, Mail, Instagram, Youtube, ChevronDown, User, Bot } from "lucide-react";
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
      <header className="relative z-10 glass sticky top-0">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-up">
              <KGroupLogo variant="full" size="md" />
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-caption font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-all duration-300">
                  Properties
                  <ChevronDown className="w-3 h-3 transition-transform duration-300" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass border-border z-50 shadow-premium">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="cursor-pointer">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="cursor-pointer">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="hover:text-foreground transition-all duration-300">Services</Link>
              <a href="#about" className="hover:text-foreground transition-all duration-300">About</a>
              <Link to="/join-advisors" className="hover:text-foreground transition-all duration-300">Unite al KGroup</Link>
              <a href="#contact" className="hover:text-foreground transition-all duration-300">Contact</a>
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

            <div className="hidden md:flex items-center gap-4 animate-fade-in-up">
              <Link to="/consultation">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-refined hover:shadow-premium transition-all duration-300 hover:scale-105 text-premium text-xs px-6"
                >
                  REGISTER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroProperty} 
            alt="Interior de propiedad de lujo"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/50 to-background/70" />
          <div className="absolute inset-0" style={{background: 'var(--gradient-hero)'}} />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-hero font-light text-foreground drop-shadow-lg text-premium">
                PREMIUM PROPERTY
                <span className="block">WITH KGROUP</span>
              </h1>
              <Link to="/consultation">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-premium transition-all duration-500 hover:scale-105 text-premium px-12"
                >
                  CLAIM YOUR DREAM HOME TODAY
                </Button>
              </Link>
            </div>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="glass-dark p-6 text-center space-y-2">
                <div className="text-caption text-foreground/70 text-premium">UNIT TYPES</div>
                <div className="text-heading text-foreground font-light">Studios, 1-3 BR</div>
              </div>
              <div className="glass-dark p-6 text-center space-y-2">
                <div className="text-caption text-foreground/70 text-premium">STARTING FROM</div>
                <div className="text-heading text-foreground font-light">$500,000 MXN</div>
              </div>
              <div className="glass-dark p-6 text-center space-y-2">
                <div className="text-caption text-foreground/70 text-premium">PAYMENT PLAN</div>
                <div className="text-heading text-foreground font-light">Flexible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="relative py-3xl bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4 animate-fade-in-up">
            <h2 className="text-display font-light text-premium">
              PROPIEDADES DESTACADAS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Colección curada de oportunidades inmobiliarias premium en México
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-xl">
            <Link to="/rent-catalog" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8 shadow-elegant hover:shadow-refined transition-all duration-300 hover:scale-105">
                Ver Propiedades en Renta
              </Button>
            </Link>
            <Link to="/sale-catalog" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8 shadow-elegant hover:shadow-refined transition-all duration-300 hover:scale-105">
                Ver Propiedades en Venta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-2xl space-y-4 animate-fade-in-up">
            <h2 className="text-display font-light text-premium">
              NUESTROS SERVICIOS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Soluciones inmobiliarias integrales con experiencia inigualable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center space-y-4 p-10 glass hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                <MapPin className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-heading font-medium">Descubrimiento de Propiedades</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Acceso a listados exclusivos y oportunidades fuera del mercado a través de nuestra extensa red.
              </p>
            </div>

            <div className="group text-center space-y-4 p-10 glass hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                <TrendingUp className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-heading font-medium">Análisis de Mercado</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Insights basados en datos e inteligencia de mercado para informar tus decisiones de inversión.
              </p>
            </div>

            <div className="group text-center space-y-4 p-10 glass hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                <Shield className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-heading font-medium">Servicio Concierge</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Servicio de guante blanco desde la consulta inicial hasta el cierre y más allá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-3xl bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-2xl items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-display font-light text-premium">
                REDEFINIENDO LA EXCELENCIA INMOBILIARIA
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg font-light leading-relaxed">
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
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-extralight mb-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">$2.4B+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground font-medium tracking-wide">TRANSACTIONS</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-extralight mb-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground font-medium tracking-wide">CLIENTS</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl font-extralight mb-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-xs sm:text-caption text-muted-foreground font-medium tracking-wide">YEARS</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 blur-3xl" />
              <div className="relative aspect-square glass shadow-luxury overflow-hidden group">
                <img 
                  src={kgroupLogo} 
                  alt="KGroup Logo" 
                  className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-2xl space-y-4 animate-fade-in-up">
            <h2 className="text-display font-light text-premium">
              CONTACT US
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Comienza tu viaje inmobiliario con una consulta personalizada
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-10 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="text-heading font-medium">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-light">+52 55 6080 8129</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-light">groupkellar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="font-light">Av. Paseo de Reforma 180, Ciudad de México</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-heading font-medium">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/kellargroup/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-premium"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@kgroup_real" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-premium"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-10 shadow-luxury hover:shadow-premium transition-all duration-500 animate-fade-in-up">
              <h3 className="text-heading font-medium mb-8">Agendar Consulta</h3>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="px-4 py-3.5 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all duration-300 font-light"
                    placeholder="First Name"
                  />
                  <input 
                    className="px-4 py-3.5 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all duration-300 font-light"
                    placeholder="Last Name"
                  />
                </div>
                <input 
                  className="w-full px-4 py-3.5 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all duration-300 font-light"
                  placeholder="Email Address"
                />
                <textarea 
                  className="w-full px-4 py-3.5 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none transition-all duration-300 font-light"
                  rows={4}
                  placeholder="Tell us about your real estate needs..."
                />
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-refined hover:shadow-premium transition-all duration-300 hover:scale-105 text-premium"
                >
                  AGENDAR CONSULTA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 glass py-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-caption text-muted-foreground font-light">
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Agent Button */}
      <Link to="/ai-agent">
        <Button
          size="lg"
          className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full shadow-luxury hover:shadow-premium transition-all duration-500 bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-110 group"
          aria-label="Abrir Agente IA"
        >
          <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500" />
        </Button>
      </Link>
    </div>
  );
};

export default Index;