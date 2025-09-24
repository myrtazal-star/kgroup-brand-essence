import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, BedDouble, Bath, Car, Wifi, Phone, Mail, Calendar, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { KGroupLogo } from "@/components/KGroupLogo";

// Property data - en una app real esto vendría de una base de datos
const propertiesData = {
  // Propiedades en Renta
  "r1": {
    id: "r1",
    title: "Departamento Arquímedes",
    location: "Polanco, CDMX",
    price: "$45,000",
    priceType: "Renta",
    area: "180 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    imageUrl: "/src/assets/depto-arquimedes-polanco.jpg",
    featured: false,
    description: "Hermoso departamento en renta ubicado en Arquímedes, Polanco. Completamente amueblado con acabados modernos y en una ubicación privilegiada.",
    features: ["Completamente amueblado", "Balcón", "Cocina integral", "Closets empotrados", "Aire acondicionado"],
    amenities: ["Seguridad 24/7", "Elevador", "Estacionamiento", "Área de juegos infantiles"],
    gallery: [
      "/src/assets/depto-arquimedes-polanco.jpg",
      "/src/assets/property-1.jpg",
      "/src/assets/property-2.jpg"
    ]
  },
  "r2": {
    id: "r2",
    title: "Oficina PH Roma Norte",
    location: "Roma Norte, CDMX",
    price: "$25,000",
    priceType: "Renta",
    area: "120 m²",
    bedrooms: 0,
    bathrooms: 2,
    parking: 1,
    imageUrl: "/src/assets/oficina-ph-roma-norte.jpg",
    featured: false,
    description: "Moderna oficina en penthouse ubicada en el corazón de Roma Norte. Ideal para empresas creativas que buscan un espacio único y bien ubicado.",
    features: ["Terraza privada", "Doble altura", "Iluminación natural", "Área de reuniones", "Kitchenette"],
    amenities: ["Internet de alta velocidad", "Seguridad", "Elevador", "Estacionamiento"],
    gallery: [
      "/src/assets/oficina-ph-roma-norte.jpg",
      "/src/assets/property-1.jpg"
    ]
  },
  "r3": {
    id: "r3",
    title: "Renta Mitikah",
    location: "Mitikah, CDMX",
    price: "$35,000",
    priceType: "Renta",
    area: "95 m²",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    imageUrl: "/src/assets/renta-mitikah.jpg",
    featured: false,
    description: "Departamento nuevo en renta en el exclusivo desarrollo Mitikah. Con amenidades de lujo y ubicación estratégica.",
    features: ["Completamente nuevo", "Balcón", "Cocina moderna", "Walk-in closet", "Lavandería"],
    amenities: ["Gimnasio", "Alberca", "Sky lounge", "Seguridad 24/7", "Elevadores de alta velocidad"],
    gallery: [
      "/src/assets/renta-mitikah.jpg",
      "/src/assets/property-2.jpg",
      "/src/assets/property-3.jpg"
    ]
  },
  "r4": {
    id: "r4",
    title: "Block Renta",
    location: "Roma Norte, CDMX",
    price: "$28,000",
    priceType: "Renta",
    area: "85 m²",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    imageUrl: "/src/assets/block-renta.jpg",
    featured: false,
    description: "Departamento moderno en renta en Roma Norte. Diseño contemporáneo con acabados de calidad en una zona vibrante.",
    features: ["Diseño moderno", "Iluminación LED", "Cocina integral", "Área de lavado", "Balcón"],
    amenities: ["Rooftop", "Gimnasio", "Seguridad", "Elevador", "Bike parking"],
    gallery: [
      "/src/assets/block-renta.jpg",
      "/src/assets/property-2.jpg"
    ]
  },
  // Propiedades en Venta
  "s1": {
    id: "s1",
    title: "Penthouse Aristóteles",
    location: "Polanco, CDMX",
    price: "$8,500,000",
    priceType: "Venta",
    area: "450 m²",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    imageUrl: "/src/assets/penthouse-aristotiles.jpg",
    featured: true,
    description: "Espectacular penthouse ubicado en la exclusiva zona de Polanco. Este increíble espacio cuenta con acabados de lujo, terrazas amplias con vista panorámica a la ciudad y amenidades de primer nivel.",
    features: ["Terraza privada", "Vista panorámica", "Cocina gourmet", "Closets vestidores", "Sala de TV", "Cuarto de servicio"],
    amenities: ["Gimnasio", "Alberca", "Seguridad 24/7", "Elevador", "Estacionamiento techado", "Área común"],
    gallery: [
      "/src/assets/penthouse-aristotiles.jpg",
      "/src/assets/property-1.jpg",
      "/src/assets/property-2.jpg",
      "/src/assets/property-3.jpg"
    ]
  },
  "s2": {
    id: "s2",
    title: "Mitikah Residencial",
    location: "Mitikah, CDMX",
    price: "$6,200,000",
    priceType: "Venta",
    area: "110 m²",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    imageUrl: "/src/assets/mitikah-residencial.jpg",
    featured: true,
    description: "Departamento en venta en Mitikah, el desarrollo más exclusivo del sur de la ciudad. Amenidades de clase mundial y acabados premium.",
    features: ["Vista al parque", "Cocina gourmet", "Terraza", "Smart home", "Closets empotrados"],
    amenities: ["Concierge", "Gimnasio", "Spa", "Alberca infinity", "Salón de eventos", "Business center"],
    gallery: [
      "/src/assets/mitikah-residencial.jpg",
      "/src/assets/property-1.jpg",
      "/src/assets/property-3.jpg"
    ]
  }
};

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium">Propiedad no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Regresar al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <KGroupLogo />
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Favorito
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Regresar
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img 
                src={property.imageUrl} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {property.gallery.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={image} 
                    alt={`${property.title} - imagen ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-light">{property.title}</h1>
                  {property.featured && (
                    <Badge variant="secondary">DESTACADA</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center gap-8 py-4 border-y border-border">
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{property.area}</span>
                </div>
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-muted-foreground" />
                    <span>{property.bedrooms} recámaras</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-muted-foreground" />
                  <span>{property.bathrooms} baños</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-muted-foreground" />
                  <span>{property.parking} estacionamientos</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-medium mb-4">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-medium mb-4">Características</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-medium mb-4">Amenidades</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-primary mb-1">
                    {property.price}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {property.priceType}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Cita
                  </Button>
                </div>

                <Separator />

                <div className="text-center space-y-2">
                  <div className="text-sm font-medium">K Group</div>
                  <div className="text-xs text-muted-foreground">
                    Bienes Raíces de Lujo
                  </div>
                  <div className="text-xs text-muted-foreground">
                    📞 (55) 1234-5678
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;