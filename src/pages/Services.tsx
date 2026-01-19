import { useState } from "react";
import { Button } from "@/components/ui/button";
import { KGroupLogo } from "@/components/KGroupLogo";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, User, MessageSquare, ChevronDown, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const consultationSchema = z.object({
  firstName: z.string().trim().nonempty({ message: "El nombre es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  lastName: z.string().trim().nonempty({ message: "El apellido es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Máximo 255 caracteres" }),
  phone: z.string().trim().nonempty({ message: "El teléfono es requerido" }).max(20, { message: "Máximo 20 caracteres" }),
  propertyType: z.enum(["compra", "venta", "renta"], { message: "Selecciona un tipo de servicio" }),
  budget: z.string().trim().nonempty({ message: "El presupuesto es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  location: z.string().trim().nonempty({ message: "La ubicación es requerida" }).max(100, { message: "Máximo 100 caracteres" }),
  message: z.string().trim().max(1000, { message: "Máximo 1000 caracteres" }).optional()
});

type ConsultationData = z.infer<typeof consultationSchema>;

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ConsultationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "renta",
    budget: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ConsultationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const validatedData = consultationSchema.parse(formData);
      
      // Send to WhatsApp with form data
      const message = `Hola, solicito asesoría inmobiliaria:
      
Nombre: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Teléfono: ${validatedData.phone}
Tipo: ${validatedData.propertyType === 'compra' ? 'Compra' : validatedData.propertyType === 'venta' ? 'Venta' : 'Renta'}
Presupuesto: ${validatedData.budget}
Ubicación: ${validatedData.location}
${validatedData.message ? `Mensaje: ${validatedData.message}` : ''}`;

      const phone = "525560808129";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
      
      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Completa el envío en WhatsApp para recibir asesoría.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyType: "renta",
        budget: "",
        location: "",
        message: ""
      });
      setErrors({});
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ConsultationData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ConsultationData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <WhatsAppButton />
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none z-0" />
      
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

      {/* Main Content */}
      <main className="relative z-20 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass tech-border text-sm">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="font-medium tracking-wider uppercase text-xs">Asesoría Gratuita</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                SOLICITA <span className="gradient-text">ASESORÍA</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Completa el formulario y un asesor especializado te contactará en menos de 24 horas
              </p>
            </div>

            {/* Form Card */}
            <div className="glass tech-border p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-accent" />
                    Información Personal
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="Tu nombre"
                        maxLength={50}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Apellido *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="Tu apellido"
                        maxLength={50}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="tu@email.com"
                        maxLength={255}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="+52 55 1234 5678"
                        maxLength={20}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Información del Espacio
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Servicio *</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange("propertyType", e.target.value as "compra" | "venta" | "renta")}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                    >
                      <option value="renta">Busco rentar un espacio comercial</option>
                      <option value="compra">Quiero comprar una propiedad</option>
                      <option value="venta">Quiero vender mi propiedad</option>
                    </select>
                    {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Presupuesto *</label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="$30,000 - $50,000/mes"
                        maxLength={50}
                      />
                      {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Zona Preferida *</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                        placeholder="Polanco, Reforma, Santa Fe..."
                        maxLength={100}
                      />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Información Adicional
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje (Opcional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none rounded-lg"
                      rows={4}
                      placeholder="Cuéntanos más sobre lo que buscas: tamaño, características especiales, etc."
                      maxLength={1000}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold uppercase tracking-wider"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Asesoría Gratis"}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Sin costo • Respuesta en menos de 24 horas
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground">¿Prefieres contactarnos directamente?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                <a href="tel:+525560808129" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+52 55 6080 8129</span>
                </a>
                <a href="mailto:groupkellar@gmail.com" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>groupkellar@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

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
