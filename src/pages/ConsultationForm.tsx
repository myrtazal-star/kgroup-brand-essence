import { useState } from "react";
import { Button } from "@/components/ui/button";
import { KGroupLogo } from "@/components/KGroupLogo";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const consultationSchema = z.object({
  firstName: z.string().trim().nonempty({ message: "El nombre es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  lastName: z.string().trim().nonempty({ message: "El apellido es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Máximo 255 caracteres" }),
  phone: z.string().trim().nonempty({ message: "El teléfono es requerido" }).max(20, { message: "Máximo 20 caracteres" }),
  propertyType: z.enum(["compra", "venta", "renta"], { message: "Selecciona un tipo de propiedad" }),
  budget: z.string().trim().nonempty({ message: "El presupuesto es requerido" }).max(50, { message: "Máximo 50 caracteres" }),
  location: z.string().trim().nonempty({ message: "La ubicación es requerida" }).max(100, { message: "Máximo 100 caracteres" }),
  message: z.string().trim().max(1000, { message: "Máximo 1000 caracteres" }).optional()
});

type ConsultationData = z.infer<typeof consultationSchema>;

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ConsultationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "compra",
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
      
      // Here you would typically send the data to your backend
      console.log("Consultation request:", validatedData);
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyType: "compra",
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
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Regresar
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-3xl">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-2xl space-y-4">
              <h1 className="text-display font-light">Solicitar Asesoría</h1>
              <p className="text-muted-foreground">
                Completa el formulario y uno de nuestros asesores especializados se pondrá en contacto contigo
              </p>
            </div>

            <div className="bg-card border border-border p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-heading flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Información Personal
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="+52 55 1234 5678"
                        maxLength={20}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="space-y-4">
                  <h3 className="text-heading flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Información de la Propiedad
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Servicio *</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange("propertyType", e.target.value as "compra" | "venta" | "renta")}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="compra">Quiero comprar una propiedad</option>
                      <option value="venta">Quiero vender mi propiedad</option>
                      <option value="renta">Quiero rentar una propiedad</option>
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
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="$2,000,000 - $5,000,000"
                        maxLength={50}
                      />
                      {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Ubicación Preferida *</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Polanco, Roma Norte, etc."
                        maxLength={100}
                      />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-heading flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Información Adicional
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje (Opcional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                      rows={4}
                      placeholder="Cuéntanos más sobre lo que buscas..."
                      maxLength={1000}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-xl text-center space-y-4">
              <p className="text-muted-foreground">¿Prefieres contactarnos directamente?</p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+52 55 6080 8129</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>groupkellar@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultationForm;