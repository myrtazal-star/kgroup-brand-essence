import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, MapPin, TrendingUp, Shield, Users, Phone, Mail, Building, Search, BarChart3, Target, Headphones, Star, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Services = () => {
  const mainServices = [
    {
      icon: MapPin,
      title: "Descubrimiento de Propiedades",
      description: "Acceso exclusivo a listados premium y oportunidades fuera del mercado a través de nuestra extensa red de contactos.",
      features: [
        "Propiedades exclusivas no listadas públicamente",
        "Red de desarrolladores y propietarios premium",
        "Acceso prioritario a pre-ventas",
        "Inventario actualizado en tiempo real"
      ]
    },
    {
      icon: TrendingUp,
      title: "Análisis de Mercado con IA",
      description: "Insights basados en datos e inteligencia artificial para optimizar tus decisiones de inversión inmobiliaria.",
      features: [
        "Algoritmos de valoración automatizada",
        "Análisis predictivo de tendencias",
        "Reportes personalizados de mercado",
        "Comparativos de precios en tiempo real"
      ]
    },
    {
      icon: Shield,
      title: "Servicio Concierge Premium",
      description: "Acompañamiento integral desde la consulta inicial hasta el cierre y seguimiento post-venta.",
      features: [
        "Asesor personal dedicado",
        "Gestión legal y financiera",
        "Coordinación de inspecciones",
        "Seguimiento post-transacción"
      ]
    },
    {
      icon: Building,
      title: "Gestión de Inversiones",
      description: "Estrategias personalizadas para maximizar el retorno de inversión en bienes raíces.",
      features: [
        "Portfolio diversificado de propiedades",
        "Análisis de ROI personalizado",
        "Gestión de propiedades de renta",
        "Estrategias de salida optimizadas"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "Búsqueda Personalizada",
      description: "Utilizamos IA para encontrar propiedades que coincidan exactamente con tus criterios específicos."
    },
    {
      icon: BarChart3,
      title: "Valuación Automatizada",
      description: "Tecnología de machine learning para valuaciones precisas y actualizadas del mercado inmobiliario."
    },
    {
      icon: Target,
      title: "Marketing Digital",
      description: "Estrategias avanzadas de marketing para vendedores, maximizando la exposición de tu propiedad."
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Equipo de soporte técnico y comercial disponible las 24 horas para resolver cualquier consulta."
    },
    {
      icon: Star,
      title: "Certificación de Calidad",
      description: "Proceso riguroso de verificación y certificación para garantizar la calidad de cada propiedad."
    },
    {
      icon: Clock,
      title: "Gestión de Tiempo",
      description: "Optimización de procesos para reducir tiempos de cierre y agilizar todas las transacciones."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Reunión personalizada para entender tus necesidades, presupuesto y objetivos específicos."
    },
    {
      step: "02", 
      title: "Análisis con IA",
      description: "Nuestros algoritmos analizan el mercado para identificar las mejores oportunidades disponibles."
    },
    {
      step: "03",
      title: "Presentación de Opciones",
      description: "Te presentamos una selección curada de propiedades que coinciden perfectamente con tus criterios."
    },
    {
      step: "04",
      title: "Acompañamiento",
      description: "Visitas guiadas, negociación, gestión legal y seguimiento hasta la firma del contrato."
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
              <Link to="/" className="hover:text-muted-foreground transition-colors">Home</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-muted-foreground transition-colors">
                  Properties
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/rent-catalog">Renta</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sale-catalog">Venta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/services" className="text-foreground font-medium">Services</Link>
              <Link to="/join-advisors" className="hover:text-muted-foreground transition-colors">Unite al KGroup</Link>
            </nav>

            <Link to="/">
              <Button variant="minimal" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero font-light text-foreground">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soluciones inmobiliarias integrales potenciadas por inteligencia artificial 
                para brindar una experiencia excepcional a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Servicios Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnología avanzada y experiencia humana trabajando juntas para tu éxito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-2xl">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-card border border-border p-2xl space-y-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-border flex-shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-heading">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Servicios Adicionales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Herramientas y servicios complementarios para una experiencia completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-heading">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">Nuestro Proceso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Metodología probada que combina tecnología e expertise humano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-light">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-border transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-heading">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-display font-light">¿Listo para Comenzar?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte 
                a alcanzar tus objetivos inmobiliarios.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" className="group">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
              <Button variant="minimal">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Mensaje
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
            <div className="text-caption text-muted-foreground">
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;