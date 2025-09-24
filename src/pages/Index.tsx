import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCard } from "@/components/PropertyCardMexico";
import { InvestmentCard } from "@/components/InvestmentCard";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin,
  Building2,
  Landmark,
  ChartBar,
  Award,
  Target,
  Globe
} from "lucide-react";
import heroMexico from "@/assets/hero-mexico.jpg";
import propertyCdmx1 from "@/assets/property-cdmx-1.jpg";
import propertyCdmx2 from "@/assets/property-cdmx-2.jpg";
import meridaInvestment from "@/assets/merida-investment.jpg";
import meridaDevelopment from "@/assets/merida-development.jpg";

const Index = () => {
  const mexicoCityProperties = [
    {
      id: "1",
      title: "Residencial Polanco Elite",
      location: "Polanco, Ciudad de México",
      price: "$8.5M MXN",
      area: "180 m²",
      bedrooms: 3,
      bathrooms: 2,
      imageUrl: propertyCdmx1,
      featured: true,
      type: "apartment" as const
    },
    {
      id: "2", 
      title: "Casa Contemporánea Roma Norte",
      location: "Roma Norte, CDMX",
      price: "$12.2M MXN",
      area: "250 m²",
      bedrooms: 4,
      bathrooms: 3,
      imageUrl: propertyCdmx2,
      type: "house" as const
    }
  ];

  const meridaInvestments = [
    {
      id: "1",
      title: "Proyecto Residencial Mérida Norte",
      location: "Norte de Mérida, Yucatán",
      investment: "$2.5M MXN",
      roi: "35-40%",
      timeline: "24 meses",
      area: "5,000 m²",
      imageUrl: meridaInvestment,
      status: "available" as const
    },
    {
      id: "2",
      title: "Desarrollo Mixto Centenario",
      location: "Centro Histórico, Mérida",
      investment: "$4.8M MXN", 
      roi: "45-50%",
      timeline: "30 meses",
      area: "8,200 m²",
      imageUrl: meridaDevelopment,
      status: "developing" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <nav className="hidden md:flex items-center gap-10 text-caption font-medium">
              <a href="#propiedades" className="hover:text-muted-foreground transition-colors tracking-wide">Propiedades</a>
              <a href="#inversiones" className="hover:text-muted-foreground transition-colors tracking-wide">Inversiones</a>
              <a href="#patrimonio" className="hover:text-muted-foreground transition-colors tracking-wide">Patrimonio</a>
              <a href="#nosotros" className="hover:text-muted-foreground transition-colors tracking-wide">Nosotros</a>
              <a href="#contacto" className="hover:text-muted-foreground transition-colors tracking-wide">Contacto</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="minimal" size="sm">Acceder</Button>
              <Button variant="luxury" size="sm">Consultoría</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroMexico} 
            alt="Luxury property Mexico City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-8">
              <h1 className="text-hero font-serif text-foreground leading-tight">
                Donde el Lujo
                <span className="block">Encuentra la Innovación</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-sans">
                Descubra oportunidades exclusivas de inversión inmobiliaria en México. 
                Combinamos elegancia tradicional con estrategias de vanguardia para hacer crecer su patrimonio.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="luxury" className="group">
                Explorar Propiedades
                <Search className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal">Agendar Consulta</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="propiedades" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-6">
            <h2 className="text-display font-serif">Propiedades Exclusivas</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Selección curada de residencias de lujo en las zonas más prestigiosas de la Ciudad de México
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-xl">
            {mexicoCityProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="px-10 py-3">
              Ver Todas las Propiedades
            </Button>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="inversiones" className="relative py-3xl bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-6">
            <h2 className="text-display font-serif">Inversiones en Mérida</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Oportunidades de desarrollo e inversión en terrenos con el mayor potencial de crecimiento en Yucatán
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-xl">
            {meridaInvestments.map((investment) => (
              <InvestmentCard key={investment.id} {...investment} />
            ))}
          </div>

          <div className="text-center space-y-6">
            <Button variant="luxury">
              Solicitar Información de Inversiones
            </Button>
            <p className="text-caption text-muted-foreground">
              ROI proyectado basado en análisis de mercado y tendencias históricas
            </p>
          </div>
        </div>
      </section>

      {/* Patrimony Growth Section */}
      <section id="patrimonio" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-6">
            <h2 className="text-display font-serif">Crecimiento Patrimonial</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Estrategias integrales para multiplicar su patrimonio a través de inversiones inmobiliarias inteligentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-2xl">
            <div className="text-center space-y-6 p-8 bg-card border border-border hover-elegant">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-border">
                <ChartBar className="w-8 h-8" />
              </div>
              <h3 className="text-heading font-serif">Análisis de Mercado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estudios profundos de tendencias, valorización y potencial de crecimiento 
                en cada zona de inversión.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-card border border-border hover-elegant">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-border">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-heading font-serif">Estrategia Personalizada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Planes de inversión diseñados específicamente para sus objetivos 
                financieros y perfil de riesgo.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-card border border-border hover-elegant">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-border">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-heading font-serif">Gestión Integral</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acompañamiento completo desde la adquisición hasta la 
                optimización de rendimientos.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border p-12 text-center space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-serif mb-2">$850M+</div>
                <div className="text-caption text-muted-foreground uppercase tracking-wide">Patrimonio Gestionado</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-2">42%</div>
                <div className="text-caption text-muted-foreground uppercase tracking-wide">ROI Promedio</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-2">150+</div>
                <div className="text-caption text-muted-foreground uppercase tracking-wide">Inversores</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-2">12</div>
                <div className="text-caption text-muted-foreground uppercase tracking-wide">Años Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="relative py-3xl bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-2xl items-center">
            <div className="space-y-8">
              <h2 className="text-display font-serif">Excelencia en Bienes Raíces</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  KGroup representa la intersección entre la tradición inmobiliaria mexicana 
                  y la innovación financiera global. Durante más de una década, hemos 
                  establecido el estándar de excelencia en inversiones de alto valor.
                </p>
                <p>
                  Nuestra metodología combina análisis cuantitativos rigurosos con 
                  conocimiento profundo del mercado local, garantizando decisiones 
                  de inversión fundamentadas y rentables.
                </p>
                <p>
                  Trabajamos exclusivamente con clientes que valoran tanto la discreción 
                  como los resultados excepcionales, construyendo relaciones duraderas 
                  basadas en la confianza y el éxito mutuo.
                </p>
              </div>
              
              <div className="flex gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-caption text-muted-foreground">Exclusividad</div>
                </div>
                <div className="text-center">
                  <Landmark className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-caption text-muted-foreground">Elegancia</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-caption text-muted-foreground">Confianza</div>
                </div>
              </div>
            </div>

            <div className="relative space-y-6">
              <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
                <Globe className="w-24 h-24 text-muted-foreground" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-heading font-serif">Presencia Nacional</h3>
                <p className="text-muted-foreground">
                  Con oficinas en Ciudad de México y Mérida, servimos a inversionistas 
                  en todo el territorio nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-6">
            <h2 className="text-display font-serif">Inicie su Consultoría</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Comience su viaje hacia el crecimiento patrimonial con una consulta personalizada
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-2xl">
            <div className="space-y-10">
              <div>
                <h3 className="text-heading font-serif mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Ciudad de México</div>
                      <div className="text-muted-foreground">+52 55 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Mérida</div>
                      <div className="text-muted-foreground">+52 999 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span>contacto@kgroup.mx</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <div>Av. Presidente Masaryk 111</div>
                      <div className="text-muted-foreground">Polanco, Ciudad de México</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading font-serif mb-6">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-10 border border-border">
              <h3 className="text-heading font-serif mb-8">Solicitar Consultoría</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="px-4 py-4 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
                    placeholder="Nombre"
                  />
                  <input 
                    className="px-4 py-4 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
                    placeholder="Apellido"
                  />
                </div>
                <input 
                  className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
                  placeholder="Correo Electrónico"
                />
                <input 
                  className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm"
                  placeholder="Teléfono"
                />
                <select className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm">
                  <option>Tipo de Inversión</option>
                  <option>Propiedades Residenciales</option>
                  <option>Inversión en Terrenos</option>
                  <option>Desarrollo Inmobiliario</option>
                  <option>Consultoría Patrimonial</option>
                </select>
                <textarea 
                  className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none text-sm"
                  rows={4}
                  placeholder="Cuéntenos sobre sus objetivos de inversión..."
                />
                <Button variant="luxury" className="w-full">
                  Solicitar Consultoría Privada
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
              © 2024 KGroup México. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;