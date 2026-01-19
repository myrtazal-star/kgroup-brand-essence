import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, MessageCircle, CheckCircle, Building2, Users, TrendingUp, Clock, Phone, MapPin, Star, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Services = () => {
  const benefits = [
    "Acceso a propiedades exclusivas no listadas públicamente",
    "Ahorro de tiempo: te presentamos solo opciones que cumplen tus criterios",
    "Negociación experta para obtener las mejores condiciones",
    "Acompañamiento legal y administrativo incluido",
    "Sin costo para ti — el propietario paga nuestra comisión"
  ];

  const stats = [
    { number: "50+", label: "Propiedades Disponibles" },
    { number: "98%", label: "Clientes Satisfechos" },
    { number: "24h", label: "Tiempo de Respuesta" },
    { number: "0", label: "Costo para Ti" }
  ];

  const steps = [
    {
      number: "1",
      title: "Cuéntanos qué buscas",
      description: "Zona, presupuesto, tamaño y características de tu espacio ideal."
    },
    {
      number: "2",
      title: "Recibe opciones curadas",
      description: "En 24 horas te enviamos 3-5 propiedades que cumplen tus criterios."
    },
    {
      number: "3",
      title: "Visita y elige",
      description: "Coordinamos visitas, negociamos y te acompañamos hasta el cierre."
    }
  ];

  const testimonials = [
    {
      quote: "Encontré mi oficina ideal en Polanco en menos de una semana. Servicio excepcional.",
      author: "Carlos M.",
      role: "CEO, Startup Tech"
    },
    {
      quote: "Me ahorraron meses de búsqueda. Las opciones que me presentaron eran exactamente lo que necesitaba.",
      author: "María F.",
      role: "Directora, Retail"
    },
    {
      quote: "Profesionales, eficientes y conocen perfectamente el mercado de CDMX.",
      author: "Roberto S.",
      role: "CFO, Grupo Empresarial"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Hola, me interesa recibir asesoría para encontrar un espacio comercial en CDMX";
    const phone = "525560808129";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link to="/" className="hover:text-accent transition-colors uppercase tracking-wider">Inicio</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent transition-colors uppercase tracking-wider">
                  Propiedades
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass shadow-premium bg-background">
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="text-accent font-medium uppercase tracking-wider">Asesoría</Link>
              <Link to="/join-advisors" className="hover:text-accent transition-colors uppercase tracking-wider">Únete a KGroup</Link>
              <Link to="/contacto" className="hover:text-accent transition-colors uppercase tracking-wider">Contacto</Link>
            </nav>

            <Link to="/">
              <Button variant="outline" size="sm" className="tech-border">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass tech-border text-sm">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="font-medium tracking-wider uppercase text-xs">Asesoría Inmobiliaria Comercial</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              ENCUENTRA TU ESPACIO<br/>
              <span className="gradient-text">COMERCIAL IDEAL</span><br/>
              EN CDMX
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Te ayudamos a encontrar la oficina, local o terreno perfecto para tu negocio. 
              <strong className="text-foreground"> Sin costo para ti.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-tech text-lg px-8"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Asesoría Gratis
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="tech-border"
                asChild
              >
                <a href="tel:+525560808129">
                  <Phone className="w-5 h-5 mr-2" />
                  (55) 6080-8129
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ¿POR QUÉ USAR <span className="gradient-text">NUESTRA ASESORÍA</span>?
              </h2>
              <p className="text-muted-foreground">
                Beneficios exclusivos para nuestros clientes
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 glass tech-border hover:shadow-tech transition-all">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              CÓMO <span className="gradient-text">FUNCIONA</span>
            </h2>
            <p className="text-muted-foreground">
              Proceso simple en 3 pasos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass tech-border p-8 text-center hover:shadow-tech transition-all h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-accent/70 text-accent-foreground flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ZONAS <span className="gradient-text">DONDE OPERAMOS</span>
            </h2>
            <p className="text-muted-foreground">
              Las mejores ubicaciones comerciales de CDMX
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {["Polanco", "Reforma", "Santa Fe", "Lomas", "Roma-Condesa"].map((zona) => (
              <div key={zona} className="glass tech-border p-4 text-center hover:shadow-tech transition-all">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
                <span className="font-medium">{zona}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              LO QUE DICEN <span className="gradient-text">NUESTROS CLIENTES</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass tech-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-accent/10 to-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿LISTO PARA ENCONTRAR<br/>
              <span className="gradient-text">TU ESPACIO IDEAL?</span>
            </h2>
            <p className="text-xl text-background/80">
              Cuéntanos qué buscas y en 24 horas te enviamos opciones personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Asesoría por WhatsApp
              </Button>
            </div>
            
            <p className="text-sm text-background/60">
              Sin compromiso • Respuesta en menos de 24 horas • 100% gratuito
            </p>
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

export default Services;
