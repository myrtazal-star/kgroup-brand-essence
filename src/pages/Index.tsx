import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Shield, Phone, Mail, Instagram, Youtube, ChevronDown, Bot, ArrowRight, Sparkles, Home, Building2 } from "lucide-react";
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <div className="hidden lg:flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                  Properties
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass shadow-premium">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="cursor-pointer">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="cursor-pointer">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
              <Link to="/join-advisors" className="text-sm font-medium hover:text-accent transition-colors">Unite al KGroup</Link>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
            </div>

            <Link to="/consultation" className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-refined hover:shadow-premium transition-all hover:scale-105">
                REGISTER
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="lg:hidden">
                <Button variant="outline" size="sm">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass shadow-premium w-48">
                <DropdownMenuItem asChild>
                  <Link to="/rent-catalog">Renta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sale-catalog">Venta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#about">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/join-advisors">Unite al KGroup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contact">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section - Fullscreen Split */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img 
            src={heroProperty} 
            alt="Luxury Property Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark text-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-foreground">Premium Real Estate in México</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-extralight leading-none">
                Your Dream
                <span className="block text-accent font-light">Property Awaits</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Descubre propiedades exclusivas en las mejores ubicaciones de México. 
                Tecnología de vanguardia al servicio del lujo inmobiliario.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:scale-105 transition-all group">
                    Comenzar Ahora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/rent-catalog">
                  <Button size="lg" variant="outline" className="hover:scale-105 transition-all">
                    Ver Propiedades
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-light mb-1">$2.4B+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Transactions</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-1">500+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-1">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="hidden lg:grid grid-cols-1 gap-4">
              <div className="glass p-8 hover:shadow-premium transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Home className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Unit Types</div>
                    <div className="text-2xl font-light">Studios, 1-3 BR</div>
                  </div>
                </div>
              </div>
              <div className="glass p-8 hover:shadow-premium transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Starting From</div>
                    <div className="text-2xl font-light">$500,000 MXN</div>
                  </div>
                </div>
              </div>
              <div className="glass p-8 hover:shadow-premium transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Payment Plan</div>
                    <div className="text-2xl font-light">Flexible Options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Featured Collection</span>
            </div>
            <h2 className="text-5xl font-light mb-6">
              Propiedades Exclusivas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada propiedad ha sido cuidadosamente seleccionada para ofrecer 
              la mejor experiencia de lujo y confort en ubicaciones privilegiadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id}
                className="group hover:-translate-y-2 transition-all duration-500"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Link to="/rent-catalog">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all">
                Ver Todas en Renta
              </Button>
            </Link>
            <Link to="/sale-catalog">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all">
                Ver Todas en Venta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Our Services</span>
            </div>
            <h2 className="text-5xl font-light mb-6">
              Servicios Premium
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencia integral en bienes raíces con tecnología de punta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-light mb-4">Descubrimiento de Propiedades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acceso a listados exclusivos y oportunidades fuera del mercado a través de nuestra extensa red.
              </p>
            </div>

            <div className="group p-10 glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-light mb-4">Análisis de Mercado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Insights basados en datos e inteligencia de mercado para informar tus decisiones de inversión.
              </p>
            </div>

            <div className="group p-10 glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-light mb-4">Servicio Concierge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Servicio de guante blanco desde la consulta inicial hasta el cierre y más allá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
              <div className="relative aspect-square glass shadow-luxury overflow-hidden group">
                <img 
                  src={kgroupLogo} 
                  alt="KGroup Logo" 
                  className="w-full h-full object-contain p-16 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>About KGroup</span>
              </div>
              
              <h2 className="text-5xl font-light">
                Redefiniendo la Excelencia Inmobiliaria
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-5xl font-light mb-6">
                Comienza Tu Viaje Inmobiliario
              </h2>
              <p className="text-lg text-muted-foreground">
                Consulta personalizada con nuestros expertos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg">+52 55 6080 8129</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg">groupkellar@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg">Av. Paseo de Reforma 180, CDMX</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-6">Síguenos</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/kellargroup/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border-2 border-border hover:border-accent flex items-center justify-center hover:bg-accent/10 transition-all hover:scale-110"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@kgroup_real" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border-2 border-border hover:border-accent flex items-center justify-center hover:bg-accent/10 transition-all hover:scale-110"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-10 shadow-luxury">
                <h3 className="text-2xl font-light mb-6">Agendar Consulta</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      className="px-4 py-3 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Nombre"
                    />
                    <input 
                      className="px-4 py-3 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Apellido"
                    />
                  </div>
                  <input 
                    className="w-full px-4 py-3 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Email"
                  />
                  <textarea 
                    className="w-full px-4 py-3 glass text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none transition-all"
                    rows={5}
                    placeholder="Cuéntanos sobre tus necesidades..."
                  />
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-refined hover:scale-105 transition-all group">
                    Enviar Consulta
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 glass">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-sm text-muted-foreground">
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Button */}
      <Link to="/ai-agent">
        <Button
          size="lg"
          className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full shadow-luxury hover:shadow-premium transition-all duration-500 bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-110 group"
          aria-label="AI Agent"
        >
          <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500" />
        </Button>
      </Link>
    </div>
  );
};

export default Index;