import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState } from "react";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    giro: "",
    presupuesto: "",
    zona: "",
    whatsapp: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hola Kira, soy ${formData.nombre} de ${formData.empresa}.
    
Giro: ${formData.giro}
Presupuesto: ${formData.presupuesto}
Zona de interés: ${formData.zona}
WhatsApp: ${formData.whatsapp}

${formData.mensaje}`;

    const whatsappURL = `https://wa.me/525560808129?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    toast.success("Redirigiendo a WhatsApp...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Hablemos de tu <span className="text-accent font-medium">Proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cuéntanos qué necesitas y te enviaremos 3 opciones personalizadas hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass p-8 lg:p-10">
              <h2 className="text-2xl font-medium mb-6">Formulario de Contacto</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Mi Empresa S.A."
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="giro">Giro del negocio *</Label>
                    <Input
                      id="giro"
                      name="giro"
                      required
                      value={formData.giro}
                      onChange={handleChange}
                      placeholder="Tecnología, Retail, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="presupuesto">Presupuesto mensual *</Label>
                    <Input
                      id="presupuesto"
                      name="presupuesto"
                      required
                      value={formData.presupuesto}
                      onChange={handleChange}
                      placeholder="$50,000 MXN"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zona">Zona de interés *</Label>
                    <Input
                      id="zona"
                      name="zona"
                      required
                      value={formData.zona}
                      onChange={handleChange}
                      placeholder="Polanco, Santa Fe, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensaje">Cuéntanos más sobre tu proyecto</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Necesito un espacio de 200m² para oficinas..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-8">
                <h3 className="text-xl font-medium mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Teléfono</div>
                      <a href="tel:+525560808129" className="text-lg hover:text-accent transition-colors">
                        +52 55 6080 8129
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <a href="mailto:groupkellar@gmail.com" className="text-lg hover:text-accent transition-colors">
                        groupkellar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Ubicación</div>
                      <p className="text-lg">
                        Ciudad de México<br />
                        <span className="text-sm text-muted-foreground">Atendemos toda la CDMX</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8">
                <h3 className="text-xl font-medium mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 10:00 AM - 3:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Respuesta garantizada en menos de 2 horas en horario laboral
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-3">¿Prefieres llamar?</h3>
                <p className="text-muted-foreground mb-6">
                  Agenda una llamada directa con Kira para discutir tu proyecto en detalle
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a href="tel:+525560808129">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </a>
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
            <div className="text-sm text-muted-foreground">
              © 2024 KGroup Real Estate – Comercial. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacto;
