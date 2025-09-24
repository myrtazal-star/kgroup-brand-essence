import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, BedDouble, Bath, Phone, Mail, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KGroupLogo } from "@/components/KGroupLogo";

// Property data - In a real app, this would come from an API
const propertyData = {
  "1": {
    id: "1",
    title: "Departamento Arquímedes",
    location: "Polanco, CDMX",
    price: "Desde 12.6 MDP",
    area: "195 m²",
    bedrooms: 3,
    bathrooms: 3,
    images: [
      "/src/assets/depto-arquimedes-polanco.jpg",
      "/src/assets/mitikah-residencial.jpg",
      "/src/assets/property-2.jpg",
    ],
    description: "Hermoso departamento en renta ubicado en Arquímedes, Polanco. Completamente amueblado con acabados modernos y en una ubicación privilegiada.",
    features: [
      "Totalmente amueblado y equipado",
      "3 recámaras completas / 2 baños",
      "180 m²",
      "Completamente amueblado",
      "Balcón",
      "Cocina integral",
      "Closets empotrados",
      "Aire acondicionado",
      "2 estacionamientos",
      "Seguridad 24/7"
    ],
    type: "rent"
  },
  "2": {
    id: "2",
    title: "Oficina en venta Be grand",
    location: "Lafragua 13, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX",
    price: "14 MDP",
    area: "111 m²",
    bedrooms: 0,
    bathrooms: 1,
    images: [
      "/src/assets/oficina-ph-roma-norte.jpg",
      "/src/assets/property-1.jpg",
      "/src/assets/property-3.jpg",
    ],
    description: "Oficina moderna en venta en el corazón de la colonia Tabacalera. Excelente oportunidad de inversión.",
    features: [
      "Oficina completamente equipada",
      "1 baño completo",
      "111 m² de construcción",
      "Ubicación estratégica",
      "Acabados de lujo",
      "Iluminación natural",
      "Aire acondicionado",
      "Seguridad en el edificio",
      "Elevador",
      "Estacionamiento"
    ],
    type: "sale"
  },
  "3": {
    id: "3",
    title: "Penthouse Polanco",
    location: "Aristotiles, Polanco",
    price: "28 MDP",
    area: "523.80 m²",
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "/src/assets/penthouse-aristotiles.jpg",
      "/src/assets/hero-property.jpg",
      "/src/assets/mitikah-residencial.jpg",
    ],
    description: "Espectacular penthouse en Polanco con vistas panorámicas de la ciudad. Acabados de lujo y espacios amplios.",
    features: [
      "4 recámaras principales",
      "3 baños completos",
      "523.80 m² de construcción",
      "Terraza privada",
      "Vista panorámica",
      "Cocina gourmet",
      "Sala de estar amplia",
      "Cuarto de servicio",
      "3 estacionamientos",
      "Amenidades exclusivas"
    ],
    type: "sale"
  }
};

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  if (!id || !propertyData[id as keyof typeof propertyData]) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Propiedad no encontrada</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const property = propertyData[id as keyof typeof propertyData];

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            
            <div className="flex items-center gap-4">
              <Button 
                variant="minimal" 
                size="sm"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Regresar
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="minimal" size="sm">
                  <Share2 className="w-4 h-4" />
                  Compartir
                </Button>
                <Button variant="minimal" size="sm">
                  <Heart className="w-4 h-4" />
                  Favorito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="aspect-[4/3] overflow-hidden bg-muted border border-border">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden bg-muted border border-border">
                  <img 
                    src={image} 
                    alt={`${property.title} - imagen ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-display font-light mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-heading">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-heading">Características</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-caption">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Price and Details */}
            <div className="bg-card border border-border p-6 space-y-4">
              <div className="text-2xl font-medium text-primary">{property.price}</div>
              
              <div className="flex items-center gap-6 text-caption text-muted-foreground border-t border-border pt-4">
                <div className="flex items-center gap-1">
                  <Square className="w-3 h-3" />
                  {property.area}
                </div>
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-3 h-3" />
                    {property.bedrooms} rec
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Bath className="w-3 h-3" />
                  {property.bathrooms} baño{property.bathrooms > 1 ? 's' : ''}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-6 space-y-4">
              <h3 className="text-heading">Contactar Agente</h3>
              
              <div className="space-y-4">
                <input 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Nombre completo"
                />
                <input 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Email"
                  type="email"
                />
                <input 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Teléfono"
                  type="tel"
                />
                <textarea 
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  rows={3}
                  placeholder="Mensaje (opcional)"
                />
                <Button variant="luxury" className="w-full">
                  Solicitar Información
                </Button>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center gap-3 text-caption">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+52 55 6080 8129</span>
                </div>
                <div className="flex items-center gap-3 text-caption">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>groupkellar@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                Agendar Visita
              </Button>
              <Button variant="minimal" className="w-full">
                Solicitar Video Tour
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background py-xl mt-12">
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

export default PropertyDetails;