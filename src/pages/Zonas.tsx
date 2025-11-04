import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Zonas = () => {
  const zonas = [
    {
      name: "Polanco",
      description: "El distrito corporativo más exclusivo de CDMX, ideal para oficinas premium y marcas de lujo.",
      rentRange: "$450 - $850 MXN/m²",
      recommendedFor: ["Oficinas corporativas AAA", "Boutiques de lujo", "Restaurantes gourmet", "Consultorios médicos premium"],
      features: ["Alta plusvalía", "Excelente conectividad", "Zona segura", "Alto poder adquisitivo"]
    },
    {
      name: "Reforma – Anzures",
      description: "Corredor de negocios icónico con las torres más modernas y emblemáticas de la ciudad.",
      rentRange: "$400 - $750 MXN/m²",
      recommendedFor: ["Sedes corporativas", "Despachos legales", "Empresas tecnológicas", "Instituciones financieras"],
      features: ["Torres clase A+", "Vistas panorámicas", "Infraestructura moderna", "Prestigio empresarial"]
    },
    {
      name: "Santa Fe",
      description: "Centro de negocios contemporáneo con la mayor concentración de oficinas corporativas.",
      rentRange: "$350 - $650 MXN/m²",
      recommendedFor: ["Corporativos multinacionales", "Call centers", "Empresas de servicios", "Tech hubs"],
      features: ["Centros comerciales", "Conectividad vehicular", "Espacios modernos", "Amenidades completas"]
    },
    {
      name: "Del Valle",
      description: "Zona consolidada con excelente balance entre ubicación, precio y servicios.",
      rentRange: "$300 - $500 MXN/m²",
      recommendedFor: ["Oficinas boutique", "Agencias creativas", "Consultorios", "Comercio al detalle"],
      features: ["Céntrico", "Transporte público", "Precios competitivos", "Ambiente profesional"]
    },
    {
      name: "Roma – Condesa",
      description: "Epicentro creativo y cultural, perfecto para empresas innovadoras y espacios conceptuales.",
      rentRange: "$350 - $600 MXN/m²",
      recommendedFor: ["Startups", "Agencias de marketing", "Galerías", "Cafés y restaurantes conceptuales"],
      features: ["Ambiente bohemio", "Alta concentración de talento", "Espacios únicos", "Vida urbana"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-light mb-6">
              Zonas Clave en <span className="text-accent font-medium">CDMX</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre las mejores ubicaciones para tu negocio con análisis detallado de cada zona comercial.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {zonas.map((zona, index) => (
              <div 
                key={zona.name}
                className="glass p-8 lg:p-12 hover:shadow-luxury transition-all group"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Zona Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-medium">{zona.name}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {zona.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        Características
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {zona.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommended For */}
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        Giros Recomendados
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {zona.recommendedFor.map((giro) => (
                          <li key={giro} className="flex items-center gap-2 text-foreground">
                            <Building2 className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{giro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Rent Range */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg h-full flex flex-col justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
                        <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          Rango de Renta
                        </div>
                        <div className="text-3xl font-light text-foreground mb-2">
                          {zona.rentRange}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          por metro cuadrado al mes
                        </div>
                        <Button 
                          className="mt-6 w-full bg-accent hover:bg-accent/90"
                          asChild
                        >
                          <a href={`https://wa.me/525560808129?text=Hola%20Kira%2C%20busco%20un%20espacio%20en%20${zona.name}`} target="_blank" rel="noopener noreferrer">
                            Buscar en {zona.name}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              ¿No encuentras la zona ideal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cuéntame qué buscas y te envío 3 opciones personalizadas hoy mismo
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a href="https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20un%20espacio%20comercial%20en%20CDMX" target="_blank" rel="noopener noreferrer">
                Contactar a Kira por WhatsApp
              </a>
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
              © 2024 KGroup Real Estate – Comercial. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zonas;
