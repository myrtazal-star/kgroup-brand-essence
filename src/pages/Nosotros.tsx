import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, TrendingUp, Users, Target, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Nosotros = () => {
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
              Sobre <span className="text-accent font-medium">KGroup</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Especialistas en bienes raíces comerciales que transforman espacios en oportunidades de crecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Kira Kellar Profile */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-5xl font-light text-accent">KK</span>
                      </div>
                      <h3 className="text-2xl font-medium mb-2">Kira Kellar</h3>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">Miembro AMPI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-light mb-4">Especialista en Bienes Raíces Comerciales</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Con más de 10 años de experiencia en el mercado inmobiliario comercial de CDMX, 
                      Kira Kellar ha consolidado su reputación como la asesora de confianza para empresas 
                      que buscan el espacio perfecto para crecer.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Miembro certificada de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI), 
                      Kira combina conocimiento profundo del mercado con un enfoque personalizado que garantiza 
                      resultados excepcionales para cada cliente.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
                    <div>
                      <div className="text-3xl font-light text-accent mb-2">+400K</div>
                      <div className="text-sm text-muted-foreground">Vistas mensuales</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-accent mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Tasa de ocupación</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-accent mb-2">30 días</div>
                      <div className="text-sm text-muted-foreground">Tiempo promedio de cierre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass p-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conectar a empresas con espacios comerciales estratégicos que potencien su crecimiento, 
                ofreciendo asesoría experta, análisis de rentabilidad y negociación profesional que 
                maximice el valor de cada transacción.
              </p>
            </div>

            <div className="glass p-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la consultora líder en bienes raíces comerciales de CDMX, reconocida por transformar 
                la forma en que las empresas encuentran y negocian sus espacios, estableciendo nuevos 
                estándares de excelencia y profesionalismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Nuestros Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-medium mb-3">Transparencia</h4>
                <p className="text-muted-foreground">
                  Comunicación clara y honesta en cada paso del proceso
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-medium mb-3">Resultados</h4>
                <p className="text-muted-foreground">
                  Enfoque orientado a maximizar el valor de cada negociación
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-medium mb-3">Compromiso</h4>
                <p className="text-muted-foreground">
                  Dedicación total al éxito de cada cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              ¿Listo para encontrar tu espacio ideal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agenda una consulta con Kira y descubre cómo podemos ayudarte a crecer
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a href="https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
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

export default Nosotros;
