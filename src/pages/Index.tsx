import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Shield, Building2, Search, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroProperty from "@/assets/hero-property.jpg";
import oficinaPN1 from "@/assets/oficina-pn-1.jpg";
import localMasaryk1 from "@/assets/local-masaryk-1.jpg";
import oficinaChapultepec1 from "@/assets/oficina-chapultepec-1.jpg";
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
    },
    {
      id: "r5",
      title: "Oficina Chapultepec",
      location: "Chapultepec",
      price: "$48,000/mes + IVA",
      area: "90 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaChapultepec1,
      featured: true
    }
  ];

  const zonas = [
    { name: "Polanco", description: "Distrito corporativo de lujo" },
    { name: "Reforma – Anzures", description: "Corredor de negocios icónico" },
    { name: "Santa Fe", description: "Hub empresarial moderno" },
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
              <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">Inicio</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                  Propiedades
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
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">Servicios</Link>
              <Link to="/zonas" className="text-sm font-medium hover:text-accent transition-colors">Zonas</Link>
              <Link to="/nosotros" className="text-sm font-medium hover:text-accent transition-colors">Nosotros</Link>
              <Link to="/contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</Link>
            </div>

            <Link to="/contacto" className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Agendar Visita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

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
                  <Link to="/zonas">Zonas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nosotros">Nosotros</Link>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark text-sm mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-foreground">Kira Kellar – Miembro AMPI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6">
              Espacios Comerciales en CDMX que
              <span className="block text-accent font-medium">hacen crecer tu negocio</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Oficinas, locales y terrenos con análisis de rentabilidad y negociación experta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20un%20espacio%20comercial%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  WhatsApp Ahora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link to="/contacto">
                  Agendar Visita
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-light text-accent mb-1">+400K</div>
                <div className="text-xs text-muted-foreground uppercase">Vistas/mes</div>
              </div>
              <div>
                <div className="text-3xl font-light text-accent mb-1">95%</div>
                <div className="text-xs text-muted-foreground uppercase">Ocupación</div>
              </div>
              <div>
                <div className="text-3xl font-light text-accent mb-1">30 días</div>
                <div className="text-xs text-muted-foreground uppercase">Cierre promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buscador Rápido */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">
                Encuentra tu espacio <span className="text-accent">ideal</span>
              </h2>
              <p className="text-muted-foreground">
                Búsqueda rápida por tus criterios específicos
              </p>
            </div>

            <div className="glass p-8">
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                <select className="p-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent">
                  <option>Tipo de espacio</option>
                  <option>Oficina</option>
                  <option>Local</option>
                  <option>Terreno</option>
                </select>
                <select className="p-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent">
                  <option>Operación</option>
                  <option>Renta</option>
                  <option>Venta</option>
                </select>
                <select className="p-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent">
                  <option>Zona</option>
                  <option>Polanco</option>
                  <option>Reforma-Anzures</option>
                  <option>Santa Fe</option>
                  <option>Del Valle</option>
                  <option>Roma-Condesa</option>
                </select>
                <select className="p-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent">
                  <option>Precio</option>
                  <option>$0 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
                <select className="p-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent">
                  <option>m²</option>
                  <option>0 - 100 m²</option>
                  <option>100 - 200 m²</option>
                  <option>200+ m²</option>
                </select>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg" asChild>
                <Link to="/rent-catalog">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar Propiedades
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas Clave */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">
              Zonas <span className="text-accent">Clave</span> en CDMX
            </h2>
            <p className="text-muted-foreground">
              Las mejores ubicaciones para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {zonas.map((zona) => (
              <Link key={zona.name} to="/zonas">
                <div className="glass p-6 hover:shadow-luxury transition-all group cursor-pointer">
                  <MapPin className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-medium mb-2">{zona.name}</h3>
                  <p className="text-sm text-muted-foreground">{zona.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/zonas">
                Ver Análisis Completo de Zonas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Últimas Propiedades */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">
              Propiedades <span className="text-accent">Destacadas</span>
            </h2>
            <p className="text-muted-foreground">
              Espacios comerciales premium disponibles ahora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <div key={property.id} className="group hover:-translate-y-2 transition-all duration-500">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/rent-catalog">
                Ver Todas las Propiedades
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Cómo <span className="text-accent">Trabajamos</span>
            </h2>
            <p className="text-muted-foreground">
              Proceso simple y efectivo para encontrar tu espacio ideal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="glass p-8 hover:shadow-luxury transition-all">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-light text-accent">1</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Brief</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos tus necesidades específicas: presupuesto, ubicación, tamaño y características especiales de tu negocio.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 hover:shadow-luxury transition-all">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-light text-accent">2</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Visitas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Te presentamos las 3 mejores opciones y coordinamos visitas personalizadas a los espacios que mejor se adapten.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 hover:shadow-luxury transition-all">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-3xl font-light text-accent">3</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">Negociación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Negociamos las mejores condiciones: precio, términos de contrato y beneficios adicionales para tu empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">
              Lo que dicen <span className="text-accent">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass p-8">
              <div className="mb-4">
                <div className="text-accent text-4xl mb-2">"</div>
                <p className="text-muted-foreground italic">
                  Kira nos ayudó a encontrar la oficina perfecta en Polanco. Su conocimiento del mercado y capacidad de negociación fueron clave.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Carlos Mendoza</div>
                <div className="text-sm text-muted-foreground">CEO, TechStart MX</div>
              </div>
            </div>

            <div className="glass p-8">
              <div className="mb-4">
                <div className="text-accent text-4xl mb-2">"</div>
                <p className="text-muted-foreground italic">
                  Proceso rápido y profesional. En menos de 3 semanas teníamos nuestro local en Masaryk operando.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">María Fernández</div>
                <div className="text-sm text-muted-foreground">Directora, Boutique Moda</div>
              </div>
            </div>

            <div className="glass p-8">
              <div className="mb-4">
                <div className="text-accent text-4xl mb-2">"</div>
                <p className="text-muted-foreground italic">
                  El análisis de rentabilidad que nos presentó fue fundamental para tomar la decisión correcta.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Roberto Sánchez</div>
                <div className="text-sm text-muted-foreground">CFO, Grupo Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-6">
              Cuéntame qué buscas y te envío 3 opciones <span className="text-accent">hoy</span>
            </h2>
            <p className="text-xl text-background/70 mb-12">
              Respuesta garantizada en menos de 2 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20un%20espacio%20comercial%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-background/20 text-background hover:bg-background/10"
                asChild
              >
                <Link to="/contacto">
                  Enviar Mensaje
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
              © 2024 KGroup Real Estate – Comercial. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
