import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, TrendingUp, Briefcase, Star, Phone, Mail, CheckCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const JoinAdvisors = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Plataforma con IA",
      description: "Acceso a herramientas de inteligencia artificial para análisis de mercado, valoración automática y gestión de leads"
    },
    {
      icon: Briefcase,
      title: "Tecnología Avanzada",
      description: "CRM integrado, automatización de procesos, marketing digital y aplicaciones móviles de última generación"
    },
    {
      icon: Users,
      title: "Respaldo Profesional",
      description: "Capacitación continua, soporte técnico 24/7, y mentoría especializada para tu crecimiento profesional"
    },
    {
      icon: Star,
      title: "Red Tecnológica",
      description: "Forma parte de la única red inmobiliaria 100% tecnológica que revoluciona el sector en México"
    }
  ];

  const requirements = [
    "Cédula profesional en bienes raíces o áreas afines",
    "Mínimo 1 año de experiencia en ventas inmobiliarias",
    "Orientación hacia la innovación y adopción tecnológica",
    "Excelentes habilidades de comunicación y servicio al cliente",
    "Conocimiento del mercado inmobiliario mexicano",
    "Compromiso con la excelencia y el crecimiento profesional continuo"
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
            
            <Link to="/">
              <Button variant="minimal" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
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
                Unite al KGroup
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Somos la primera red inmobiliaria tecnológica de México. Brindamos el respaldo integral 
                que los asesores necesitan para transformar y potenciar su negocio inmobiliario con 
                inteligencia artificial y herramientas de vanguardia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" className="group">
                <Users className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
              <Button variant="minimal">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-2xl space-y-4">
            <h2 className="text-display font-light">¿Por qué Elegir KGroup?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnología de vanguardia y respaldo integral para profesionales inmobiliarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-heading">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2xl space-y-4">
              <h2 className="text-display font-light">Requisitos & Perfil Profesional</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Buscamos profesionales comprometidos con la innovación y el servicio de excelencia
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-2xl items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-heading">Lo que Ofrecemos</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Únete a la primera red inmobiliaria tecnológica de México. Nuestros asesores disfrutan 
                    de herramientas de inteligencia artificial, automatización de procesos, y una plataforma 
                    integral que multiplica su productividad y resultados.
                  </p>
                  <p>
                    Proporcionamos capacitación especializada en tecnología inmobiliaria, marketing digital, 
                    CRM avanzado, y acceso a una red exclusiva de clientes gestionada por algoritmos 
                    inteligentes que optimizan cada oportunidad de negocio.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-light mb-1">4-6%</div>
                    <div className="text-caption text-muted-foreground">COMISIÓN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light mb-1">IA</div>
                    <div className="text-caption text-muted-foreground">HERRAMIENTAS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="relative py-3xl bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2xl space-y-4">
              <h2 className="text-display font-light">¿Listo para Unirte?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Envía tu aplicación y comienza tu transformación profesional con KGroup
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-2xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-heading mb-4">Contacta a Nuestro Equipo</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>+52 55 6080 8129</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>groupkellar@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-heading mb-4">Proceso de Aplicación</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">1</div>
                      <span>Envía tu aplicación con documentos requeridos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">2</div>
                      <span>Entrevista inicial con nuestro equipo de reclutamiento</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">3</div>
                      <span>Evaluación de perfil y demostración de plataforma</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">4</div>
                      <span>Onboarding y capacitación en herramientas tecnológicas</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 border border-border">
                <h3 className="text-heading mb-6">Solicita Unirte a KGroup</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="Nombre"
                    />
                    <input 
                      className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="Apellido"
                    />
                  </div>
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Correo Electrónico"
                  />
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Número de Teléfono"
                  />
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Número de Cédula Profesional"
                  />
                  <input 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Años de Experiencia"
                  />
                  <textarea 
                    className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    rows={4}
                    placeholder="Cuéntanos sobre tu experiencia y por qué quieres unirte a KGroup..."
                  />
                  <Button variant="luxury" className="w-full">
                    Enviar Solicitud
                  </Button>
                </div>
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
              © 2024 KGroup. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JoinAdvisors;