import { useState } from "react";
import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Send, Building2, CheckCircle, ChevronDown, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { toast } from "sonner";

const Services = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoServicio: "renta",
    presupuesto: "",
    zona: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tipoTexto = formData.tipoServicio === 'renta' ? 'Renta' : formData.tipoServicio === 'compra' ? 'Compra' : 'Venta';
    
    const message = `Hola, solicito asesoría inmobiliaria:

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Tipo: ${tipoTexto}
Presupuesto: ${formData.presupuesto}
Zona: ${formData.zona}
${formData.mensaje ? `Mensaje: ${formData.mensaje}` : ''}`;

    const whatsappURL = `https://wa.me/525560808129?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    toast.success("Redirigiendo a WhatsApp...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Acceso a propiedades exclusivas no listadas",
    "Ahorro de tiempo con opciones pre-filtradas",
    "Negociación experta para mejores condiciones",
    "Acompañamiento legal incluido",
    "Sin costo — el propietario paga la comisión"
  ];

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
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass tech-border text-sm">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="font-medium tracking-wider uppercase text-xs">Asesoría Gratuita</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold">
              ENCUENTRA TU ESPACIO<br />
              <span className="gradient-text">COMERCIAL IDEAL</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos a encontrar la oficina, local o terreno perfecto para tu negocio.
              <strong className="text-foreground"> Sin costo para ti.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Larger */}
            <div className="lg:col-span-3 glass tech-border p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-2">Solicita Asesoría Gratuita</h2>
              <p className="text-muted-foreground mb-8">Completa el formulario y te contactaremos en menos de 24 horas</p>
              
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
                      placeholder="Tu nombre"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tipoServicio">¿Qué necesitas? *</Label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-md"
                  >
                    <option value="renta">Busco rentar un espacio comercial</option>
                    <option value="compra">Quiero comprar una propiedad</option>
                    <option value="venta">Quiero vender mi propiedad</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="presupuesto">Presupuesto mensual *</Label>
                    <Input
                      id="presupuesto"
                      name="presupuesto"
                      required
                      value={formData.presupuesto}
                      onChange={handleChange}
                      placeholder="$30,000 - $50,000 MXN"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zona">Zona de interés *</Label>
                    <Input
                      id="zona"
                      name="zona"
                      required
                      value={formData.zona}
                      onChange={handleChange}
                      placeholder="Polanco, Reforma, Santa Fe..."
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensaje">Cuéntanos más sobre tu proyecto (opcional)</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Necesito un espacio de 200m² para oficinas, con estacionamiento..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Sin compromiso • Respuesta en menos de 24 horas
                </p>
              </form>
            </div>

            {/* Contact Info - Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Card */}
              <div className="glass tech-border p-6">
                <h3 className="text-lg font-semibold mb-6">Información de Contacto</h3>
                
                <div className="space-y-5">
                  <a href="tel:+525560808129" className="flex items-start gap-4 hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Teléfono</div>
                      <div className="font-medium">+52 55 6080 8129</div>
                    </div>
                  </a>

                  <a href="mailto:groupkellar@gmail.com" className="flex items-start gap-4 hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Email</div>
                      <div className="font-medium">groupkellar@gmail.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Ubicación</div>
                      <div className="font-medium">Ciudad de México</div>
                      <div className="text-sm text-muted-foreground">Atendemos toda la CDMX</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glass tech-border p-6">
                <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 10:00 AM - 3:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    ✓ Respuesta garantizada en menos de 24 horas
                  </p>
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border border-accent/20">
                <h3 className="text-lg font-semibold mb-2">¿Prefieres llamar?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Habla directamente con un asesor especializado
                </p>
                <Button 
                  variant="outline" 
                  className="w-full tech-border"
                  asChild
                >
                  <a href="tel:+525560808129">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>

              {/* Benefits List */}
              <div className="glass tech-border p-6">
                <h3 className="text-lg font-semibold mb-4">¿Por qué elegirnos?</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background py-8">
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
