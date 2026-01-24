import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Search, ArrowRight, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const allProperties = [
    {
      id: "r16",
      title: "Oficina Corporativa – Torre Porsche, Santa Fe",
      location: "Torre Porsche, Santa Fe – Piso 22",
      price: "$45,900/mes + IVA",
      area: "130 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPorsche1,
      featured: true
    },
    {
      id: "s4",
      title: "Oficina en Venta – Be Grand, Tabacalera",
      location: "Lafragua #13, Col. Tabacalera, Cuauhtémoc",
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
      location: "Ejercito Nacional, Polanco",
      price: "$75,000/mes",
      area: "215 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn1
    },
    {
      id: "r11",
      title: "Oficina en renta – Homero, Polanco",
      location: "Homero, Polanco",
      price: "$45,000/mes + IVA",
      area: "150 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaHomero1
    },
    {
      id: "r17",
      title: "Oficina en renta – Ejercito Nacional, Polanco",
      location: "Ejercito Nacional, Polanco",
      price: "$18,000/mes",
      area: "70 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn2_1
    },
    {
      id: "r18",
      title: "Oficina en Renta – Ejercito Nacional, 5 Privados",
      location: "Ejercito Nacional, Polanco",
      price: "$60,000/mes + IVA",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn3_1
    },
    {
      id: "r19",
      title: "Oficina en Renta – Av. Moliere, Polanco",
      location: "Av. Moliere, Polanco – Piso 5",
      price: "$58,000/mes + IVA",
      area: "288 m²",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: oficinaMoliere1,
      featured: true
    },
    {
      id: "r20",
      title: "Espacio en Renta – Av. Presidente Masaryk",
      location: "Av. Presidente Masaryk, Polanco – Piso 5",
      price: "$85,000/mes + IVA",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: espacioMasaryk1,
      featured: true
    },
    {
      id: "r21",
      title: "Oficina en Renta – Torre Vinkel, Monterrey",
      location: "Av. Lázaro Cárdenas, Monterrey – Piso 18",
      price: "$130,000/mes + IVA",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaVinkel1,
      featured: true
    },
    {
      id: "r22",
      title: "Oficina en Renta – Lomas de Chapultepec",
      location: "Prado Sur, Lomas de Chapultepec – Piso 5",
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
      location: "Corredor Reforma–Bosques – Piso 10",
      price: "$150,000/mes + IVA",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaReforma1,
      featured: true
    },
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
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Asesoría</Link>
              
              <Link to="/join-advisors" className="text-sm font-medium hover:text-accent transition-smooth uppercase tracking-wider">Únete a KGroup</Link>
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
                  <Link to="/services">Asesoría</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/join-advisors">Únete a KGroup</Link>
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

      {/* Todas las Propiedades */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              NUESTRAS <span className="gradient-text">PROPIEDADES</span>
            </h2>
            <p className="text-muted-foreground">
              Espacios comerciales disponibles en renta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-tech uppercase tracking-wider" asChild>
              <Link to="/rent-catalog">
                Ver Catálogo Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
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
