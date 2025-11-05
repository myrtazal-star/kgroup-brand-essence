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
    { name: "Polanco", description: "Luxury corporate district" },
    { name: "Reforma – Anzures", description: "Iconic business corridor" },
    { name: "Santa Fe", description: "Modern business hub" },
    { name: "Del Valle", description: "Perfect price-location balance" },
    { name: "Roma – Condesa", description: "Creative epicenter" }
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
              <Link to="/" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Home</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">
                  Properties
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass shadow-premium bg-background">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog" className="cursor-pointer uppercase tracking-wider">Rent</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog" className="cursor-pointer uppercase tracking-wider">Sale</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Services</Link>
              <Link to="/zonas" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Zones</Link>
              <Link to="/contacto" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Contact</Link>
            </div>

            <Link to="/contacto" className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-tech hover:scale-105 transition-all uppercase tracking-wider">
                Schedule Visit
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
              <span className="font-medium tracking-wider uppercase text-xs">Commercial Real Estate CDMX</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-wide animate-fade-in-up">
              THE FUTURE OF<br/>
              <span className="gradient-text">COMMERCIAL REAL ESTATE</span><br/>
              IN CDMX
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Offices, Retail Spaces, and Land for Sale or Lease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-tech hover:shadow-premium transition-all hover:scale-105"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  VIEW PROPERTIES
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
                  CONTACT KIRA
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
                FIND YOUR <span className="gradient-text">IDEAL SPACE</span>
              </h2>
              <p className="text-muted-foreground">
                Filter by your specific needs
              </p>
            </div>

            <div className="glass tech-border p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Type of Space</option>
                  <option>Office</option>
                  <option>Retail</option>
                  <option>Land</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Operation</option>
                  <option>Rent</option>
                  <option>Sale</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Zone</option>
                  <option>Polanco</option>
                  <option>Reforma-Anzures</option>
                  <option>Santa Fe</option>
                  <option>Del Valle</option>
                  <option>Roma-Condesa</option>
                </select>
                <select className="p-4 bg-background tech-border hover:border-accent transition-all font-medium uppercase tracking-wider text-sm">
                  <option>Budget</option>
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
                  Search Properties
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              PREMIUM <span className="gradient-text">ZONES</span> IN CDMX
            </h2>
            <p className="text-muted-foreground">
              The best locations for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {zonas.map((zona) => (
              <Link key={zona.name} to="/zonas">
                <div className="glass tech-border p-6 hover:shadow-tech transition-all group cursor-pointer hover:scale-105">
                  <MapPin className="w-8 h-8 mb-3 text-accent transition-transform group-hover:translate-y-[-2px]" />
                  <h3 className="text-lg font-semibold mb-2">{zona.name}</h3>
                  <p className="text-sm text-muted-foreground">{zona.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="tech-border font-semibold hover:bg-accent/10 uppercase tracking-wider" asChild>
              <Link to="/zonas">
                View All Zones
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              FEATURED <span className="gradient-text">PROPERTIES</span>
            </h2>
            <p className="text-muted-foreground">
              Commercial spaces available now
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <div key={property.id} className="group hover:-translate-y-2 transition-all duration-500 hover:shadow-tech">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-tech uppercase tracking-wider" asChild>
              <Link to="/rent-catalog">
                View All Properties
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              HOW <span className="gradient-text">WE WORK</span>
            </h2>
            <p className="text-muted-foreground">
              Simple and effective process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass tech-border p-8 hover:shadow-tech transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 text-accent-foreground flex items-center justify-center mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Brief</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand your needs: budget, location, size and features of the ideal space.
              </p>
            </div>

            <div className="glass tech-border p-8 hover:shadow-tech transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 text-accent-foreground flex items-center justify-center mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Visits</h3>
              <p className="text-muted-foreground leading-relaxed">
                We present the best options and coordinate visits to the selected spaces.
              </p>
            </div>

            <div className="glass tech-border p-8 hover:shadow-tech transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 text-accent-foreground flex items-center justify-center mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Negotiation & Closing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We negotiate the best terms and manage all necessary documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Testimonios</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass tech-border p-8">
              <div className="mb-4">
                <div className="text-5xl font-bold mb-4 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed">
                  Excelente servicio profesional. Encontramos la oficina perfecta en tiempo récord.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Carlos M.</div>
                <div className="text-sm text-muted-foreground">CEO, Tech Startup</div>
              </div>
            </div>

            <div className="glass tech-border p-8">
              <div className="mb-4">
                <div className="text-5xl font-bold mb-4 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed">
                  Proceso rápido y transparente. Recomiendo ampliamente sus servicios.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">María F.</div>
                <div className="text-sm text-muted-foreground">Directora, Retail</div>
              </div>
            </div>

            <div className="glass tech-border p-8">
              <div className="mb-4">
                <div className="text-5xl font-bold mb-4 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"</div>
                <p className="text-muted-foreground leading-relaxed">
                  El análisis de mercado fue fundamental para nuestra decisión de inversión.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">Roberto S.</div>
                <div className="text-sm text-muted-foreground">CFO, Grupo Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-foreground via-accent/10 to-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              SPACES THAT MAKE<br/>
              <span className="gradient-text">YOUR BUSINESS GROW</span>
            </h2>
            <p className="text-xl text-background/80 mb-12">
              Tell me what you're looking for — I'll send 3 commercial options today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-tech uppercase tracking-wider"
                asChild
              >
                <a href="https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground uppercase tracking-wider transition-all"
                asChild
              >
                <Link to="/contacto">
                  Contact
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
