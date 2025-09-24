import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, BedDouble, Bath, Car, Wifi, Phone, Mail, Calendar, Share2, Heart, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { KGroupLogo } from "@/components/KGroupLogo";
import { useState } from "react";

// Property data - en una app real esto vendría de una base de datos
const propertiesData = {
  // Propiedades en Renta
  "r1": {
    id: "r1",
    title: "Departamento en renta Roma Norte",
    location: "Durango 262, Roma Norte",
    price: "$92,000",
    priceType: "Renta mensual",
    area: "120 m²",
    bedrooms: 2,
    bathrooms: 2,
    parking: 0,
    imageUrl: "/src/assets/block-renta.jpg",
    featured: true,
    description: "Hermoso departamento en renta ubicado en Roma Norte. Este espacio cuenta con acabados modernos, amplios espacios y una ubicación privilegiada en una de las colonias más vibrantes de la ciudad.",
    features: ["Completamente amueblado", "Balcón privado", "Cocina equipada", "Closets empotrados", "Pisos de madera", "PH", "Roof Garden Privado"],
    amenities: ["Seguridad 24/7", "Elevador", "Terraza común", "Área de coworking"],
    gallery: ["/src/assets/block-renta.jpg", "/src/assets/property-r1-1.jpg", "/src/assets/property-r1-2.jpg", "/src/assets/property-r1-3.jpg", "/src/assets/property-r1-4.jpg", "/src/assets/property-r1-5.jpg", "/src/assets/property-r1-6.jpg", "/src/assets/property-r1-7.jpg"]
  },
  "r2": {
    id: "r2",
    title: "Oficina PH de 2 niveles en Polanco",
    location: "Homero, Polanco",
    price: "$100,000",
    priceType: "Renta mensual",
    area: "200 m²",
    bedrooms: 6,
    bathrooms: 1.5,
    parking: 2,
    imageUrl: "/src/assets/oficina-ph-roma-norte.jpg",
    featured: false,
    description: "Moderna oficina en penthouse de dos niveles ubicada en Polanco. Ideal para empresas creativas que buscan un espacio único y bien ubicado con excelente conectividad.",
    features: ["2 niveles", "Iluminación natural", "6 espacios de trabajo", "Cocina", "2.5 baños", "Consierge y seguridad 24/7", "Piso 7 PH", "Acepta mascotas"],
    amenities: ["Seguridad", "Elevador", "Estacionamiento", "Recepción"],
    gallery: ["/src/assets/oficina-ph-roma-norte.jpg", "/src/assets/oficina-ph-1.jpg", "/src/assets/oficina-ph-2.jpg", "/src/assets/oficina-ph-3.jpg", "/src/assets/oficina-ph-4.jpg", "/src/assets/oficina-ph-5.jpg"]
  },
  "r3": {
    id: "r3",
    title: "Renta en Mitikah",
    location: "Polanco, Homero",
    price: "$70,000",
    priceType: "Renta mensual",
    area: "100 m²",
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    imageUrl: "/src/assets/renta-mitikah.jpg",
    featured: true,
    description: "Departamento nuevo en renta en el exclusivo desarrollo Mitikah. Con amenidades de lujo y ubicación estratégica con fácil acceso a las principales vialidades de la ciudad.",
    features: ["Completamente nuevo", "Balcón con vista", "Cocina moderna", "Walk-in closet", "Lavandería", "Smart home"],
    amenities: ["Gimnasio", "Alberca", "Sky lounge", "Seguridad 24/7", "Elevadores de alta velocidad", "Concierge"],
    gallery: ["/src/assets/renta-mitikah.jpg", "/src/assets/property-r3-1.jpg", "/src/assets/property-r3-2.jpg", "/src/assets/property-r3-3.jpg", "/src/assets/property-r3-4.jpg"]
  },
  "r4": {
    id: "r4",
    title: "Loft Industrial Roma Norte",
    location: "Roma Norte, Ciudad de México",
    price: "$22,000",
    priceType: "Renta mensual",
    area: "95 m²",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    imageUrl: "/src/assets/block-renta.jpg",
    featured: false,
    description: "Loft de estilo industrial en Roma Norte con diseño contemporáneo y acabados de calidad. Perfecto para personas que buscan un espacio moderno en una zona vibrante y cultural.",
    features: ["Diseño industrial", "Techos altos", "Iluminación LED", "Cocina integral", "Área de lavado", "Balcón"],
    amenities: ["Rooftop", "Gimnasio", "Seguridad", "Elevador", "Bike parking", "Área común"],
    gallery: ["/src/assets/block-renta.jpg", "/src/assets/property-2.jpg"]
  },
  "r5": {
    id: "r5",
    title: "Departamento en renta Arquímedes, Polanco",
    location: "Arquímedes, Polanco",
    price: "$39,000",
    priceType: "Renta mensual",
    area: "75 m²",
    bedrooms: 2,
    bathrooms: 1.5,
    parking: 1,
    imageUrl: "/src/assets/depto-arquimedes-polanco.jpg",
    featured: false,
    description: "Acogedor departamento de 1 nivel en renta ubicado en Arquímedes, Polanco. Completamente amueblado con acabados modernos y en una ubicación privilegiada cerca de restaurantes y centros comerciales. El frente del departamento está ubicado frente a un kinder.",
    features: ["Completamente amueblado", "1 nivel", "Balcón", "Cocina integral", "Closets equipados", "Frente a kinder"],
    amenities: ["Seguridad 24/7", "Elevador", "Estacionamiento", "Área de juegos infantiles", "Jacuzzi", "Alberca"],
    gallery: ["/src/assets/depto-arquimedes-polanco.jpg", "/src/assets/property-r5-1.jpg", "/src/assets/property-r5-2.jpg", "/src/assets/property-r5-3.jpg", "/src/assets/property-r5-4.jpg", "/src/assets/property-r5-5.jpg", "/src/assets/property-r5-6.jpg", "/src/assets/property-r5-7.jpg"]
  },
  // Propiedades en Venta
  "s1": {
    id: "s1",
    title: "Residencias Meridian",
    location: "Polanco, Ciudad de México",
    price: "$4,200,000",
    priceType: "Venta",
    area: "223 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    imageUrl: "/src/assets/property-1.jpg",
    featured: true,
    description: "Exclusiva residencia ubicada en Polanco con acabados de lujo y amenidades de primer nivel. Esta propiedad ofrece espacios amplios, diseño moderno y una ubicación privilegiada.",
    features: ["Acabados de lujo", "Terraza privada", "Cocina gourmet", "Closets vestidores", "Sala de TV", "Sistema domótico"],
    amenities: ["Gimnasio", "Alberca", "Seguridad 24/7", "Elevador", "Estacionamiento techado", "Salón de eventos"],
    gallery: ["/src/assets/property-1.jpg", "/src/assets/property-2.jpg", "/src/assets/property-3.jpg"]
  },
  "s2": {
    id: "s2",
    title: "Torre Ejecutiva Santa Fe",
    location: "Santa Fe, Ciudad de México",
    price: "$850,000",
    priceType: "Venta",
    area: "111 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: "/src/assets/property-2.jpg",
    featured: false,
    description: "Moderna oficina ejecutiva en Torre Santa Fe, ideal para profesionales e inversionistas. Ubicada en el distrito financiero más importante de la ciudad con excelente conectividad.",
    features: ["Oficina ejecutiva", "Vista panorámica", "Acabados premium", "Aire acondicionado central", "Cableado estructurado"],
    amenities: ["Business center", "Seguridad 24/7", "Elevadores de alta velocidad", "Estacionamiento", "Helipuerto"],
    gallery: ["/src/assets/property-2.jpg", "/src/assets/property-1.jpg"]
  },
  "s3": {
    id: "s3",
    title: "Penthouse Skyline",
    location: "Zona Rosa, Ciudad de México",
    price: "$12,500,000",
    priceType: "Venta",
    area: "446 m²",
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    imageUrl: "/src/assets/property-3.jpg",
    featured: true,
    description: "Espectacular penthouse con vista panorámica a la ciudad ubicado en Zona Rosa. Este increíble espacio cuenta con acabados de lujo, terrazas amplias y amenidades exclusivas.",
    features: ["Vista 360°", "Terraza panorámica", "Jacuzzi privado", "Cocina gourmet", "Cava de vinos", "Home theater"],
    amenities: ["Concierge", "Spa privado", "Gimnasio", "Alberca infinity", "Helipuerto", "Seguridad VIP"],
    gallery: ["/src/assets/property-3.jpg", "/src/assets/property-1.jpg", "/src/assets/property-2.jpg"]
  }
};
const PropertyDetails = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  // WhatsApp integration
  const whatsappNumber = "5256808129"; // K Group phone number
  const createWhatsAppMessage = (property: any) => {
    const message = `Hola! Me interesa la propiedad: *${property.title}*\n\n` +
                   `📍 Ubicación: ${property.location}\n` +
                   `💰 Precio: ${property.price}\n` +
                   `📐 Área: ${property.area}\n` +
                   `🛏️ Recámaras: ${property.bedrooms}\n` +
                   `🚿 Baños: ${property.bathrooms}\n\n` +
                   `¿Podrían proporcionarme más información?`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    if (property) {
      const message = createWhatsAppMessage(property);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };
  
  if (!property) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium">Propiedad no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Regresar al inicio
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
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
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 hover:bg-accent">
          <ArrowLeft className="w-4 h-4" />
          Regresar
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="aspect-[16/10] overflow-hidden bg-muted cursor-pointer" onClick={() => {
              setSelectedImage(property.imageUrl);
              setIsModalOpen(true);
            }}>
              <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {property.gallery.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer" onClick={() => {
                  setSelectedImage(image);
                  setIsModalOpen(true);
                }}>
                  <img src={image} alt={`${property.title} - imagen ${index + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-light">Departamento en Roma Norte con RoofGarden privado</h1>
                  {property.featured && <Badge variant="secondary">DESTACADA</Badge>}
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
                {property.bedrooms > 0 && <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-muted-foreground" />
                    <span>{property.bedrooms} recámaras</span>
                  </div>}
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
                  {property.features.map((feature, index) => <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>)}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-medium mb-4">Amenidades</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{amenity}</span>
                    </div>)}
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
                  <Button className="w-full" size="lg" onClick={handleWhatsAppClick}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
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
                    📞 (55) 6080-8129
                  </div>
                  <div className="text-xs text-muted-foreground">
                    💬 WhatsApp disponible 24/7
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <DialogTitle className="sr-only">Vista completa de la imagen</DialogTitle>
          <DialogDescription className="sr-only">Imagen ampliada de la propiedad</DialogDescription>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedImage}
              alt="Imagen completa"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default PropertyDetails;