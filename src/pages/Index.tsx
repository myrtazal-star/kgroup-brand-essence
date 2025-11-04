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
              <Link to="/voice-agent" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Agente IA
              </Link>
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
                  <Link to="/voice-agent" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Agente IA
                  </Link>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-foreground/10 text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span className="font-medium tracking-wider uppercase text-xs">Bienes Raíces Comerciales CDMX</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-light leading-[1.1] mb-6 tracking-tight">
              Espacios Comerciales<br/>
              <span className="italic">en Ciudad de México</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Oficinas, locales y terrenos comerciales en las mejores zonas de la ciudad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2"
                asChild
              >
                <Link to="/rent-catalog">
                  Ver Propiedades
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-foreground/10">
              <div>
                <div className="text-4xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Propiedades</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Zonas Premium</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>24/7</div>
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
              <h2 className="text-4xl lg:text-5xl font-light mb-4">
                Busca tu <span className="italic">espacio ideal</span>
              </h2>
              <p className="text-muted-foreground">
                Filtra por tus necesidades específicas
              </p>
            </div>

            <div className="glass p-8 border-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <select className="p-4 bg-background border-2 border-border hover:border-foreground/30 focus:border-foreground rounded text-sm transition-colors font-medium">
                  <option>Tipo de espacio</option>
                  <option>Oficina</option>
                  <option>Local</option>
                  <option>Terreno</option>
                </select>
                <select className="p-4 bg-background border-2 border-border hover:border-foreground/30 focus:border-foreground rounded text-sm transition-colors font-medium">
                  <option>Operación</option>
                  <option>Renta</option>
                  <option>Venta</option>
                </select>
                <select className="p-4 bg-background border-2 border-border hover:border-foreground/30 focus:border-foreground rounded text-sm transition-colors font-medium">
                  <option>Zona</option>
                  <option>Polanco</option>
                  <option>Reforma-Anzures</option>
                  <option>Santa Fe</option>
                  <option>Del Valle</option>
                  <option>Roma-Condesa</option>
                </select>
                <select className="p-4 bg-background border-2 border-border hover:border-foreground/30 focus:border-foreground rounded text-sm transition-colors font-medium">
                  <option>Presupuesto</option>
                  <option>$0 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              <Button className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold" size="lg" asChild>
                <Link to="/rent-catalog">
                  <Search className="w-5 h-5 mr-2" />
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
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Zonas <span className="italic">Premium</span> en CDMX
            </h2>
            <p className="text-muted-foreground">
              Las mejores ubicaciones para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {zonas.map((zona) => (
              <Link key={zona.name} to="/zonas">
                <div className="glass p-6 hover:shadow-refined transition-all group cursor-pointer border-2 border-transparent hover:border-foreground/10">
                  <MapPin className="w-8 h-8 mb-3 transition-transform group-hover:translate-y-[-2px]" />
                  <h3 className="text-lg font-semibold mb-2">{zona.name}</h3>
                  <p className="text-sm text-muted-foreground">{zona.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-2 font-semibold" asChild>
              <Link to="/zonas">
                Ver Todas las Zonas
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
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Propiedades <span className="italic">Destacadas</span>
            </h2>
            <p className="text-muted-foreground">
              Espacios comerciales disponibles ahora
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
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-semibold" asChild>
              <Link to="/rent-catalog">
                Ver Todas las Propiedades
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Cómo <span className="italic">Trabajamos</span>
            </h2>
            <p className="text-muted-foreground">
              Proceso simple y efectivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 hover:shadow-refined transition-all border-2 border-transparent hover:border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulta</h3>
              <p className="text-muted-foreground leading-relaxed">
                Entendemos tus necesidades: presupuesto, ubicación, tamaño y características del espacio ideal.
              </p>
            </div>

            <div className="glass p-8 hover:shadow-refined transition-all border-2 border-transparent hover:border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Selección</h3>
              <p className="text-muted-foreground leading-relaxed">
                Presentamos las mejores opciones y coordinamos visitas a los espacios seleccionados.
              </p>
            </div>

            <div className="glass p-8 hover:shadow-refined transition-all border-2 border-transparent hover:border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Cierre</h3>
              <p className="text-muted-foreground leading-relaxed">
                Negociamos las mejores condiciones y gestionamos toda la documentación necesaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              <span className="italic">Testimonios</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass p-8 border-2">
              <div className="mb-4">
                <div className="text-5xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  Excelente servicio profesional. Encontramos la oficina perfecta en tiempo récord.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Carlos M.</div>
                <div className="text-sm text-muted-foreground">CEO, Tech Startup</div>
              </div>
            </div>

            <div className="glass p-8 border-2">
              <div className="mb-4">
                <div className="text-5xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  Proceso rápido y transparente. Recomiendo ampliamente sus servicios.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">María F.</div>
                <div className="text-sm text-muted-foreground">Directora, Retail</div>
              </div>
            </div>

            <div className="glass p-8 border-2">
              <div className="mb-4">
                <div className="text-5xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  El análisis de mercado fue fundamental para nuestra decisión de inversión.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Roberto S.</div>
                <div className="text-sm text-muted-foreground">CFO, Grupo Empresarial</div>
              </div>
            </div>
          </div>

          {/* CTA para Agente IA */}
          <div className="mt-16 text-center">
            <div className="glass p-8 max-w-2xl mx-auto border-2">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-4">
                Prueba nuestro <span className="italic">Agente Inteligente</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Análisis de oportunidades y recomendaciones personalizadas por comando de voz
              </p>
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold"
                asChild
              >
                <Link to="/voice-agent">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Hablar con el Agente
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Encuentra tu espacio<br/>
              <span className="italic">comercial ideal</span>
            </h2>
            <p className="text-xl text-background/80 mb-12">
              Contacta con nosotros para más información
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background hover:bg-background/90 text-foreground"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 border-2"
                asChild
              >
                <Link to="/contacto">
                  Contacto
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
