import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, BedDouble, Bath, Car, Wifi, Phone, Mail, Calendar, Share2, Heart, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { KGroupLogo } from "@/components/KGroupLogo";

import { useState } from "react";
import oficinaPn1 from "@/assets/oficina-pn-1.jpg";
import oficinaPn2 from "@/assets/oficina-pn-2.jpg";
import oficinaPn3 from "@/assets/oficina-pn-3.jpg";
import oficinaPn4 from "@/assets/oficina-pn-4.jpg";
import oficinaPn5 from "@/assets/oficina-pn-5.jpg";
import oficinaPn6 from "@/assets/oficina-pn-6.jpg";
import oficinaCh1 from "@/assets/oficina-chapultepec-1.jpg";
import oficinaCh2 from "@/assets/oficina-chapultepec-2.jpg";
import oficinaCh3 from "@/assets/oficina-chapultepec-3.jpg";
import oficinaCh4 from "@/assets/oficina-chapultepec-4.jpg";
import oficinaCh5 from "@/assets/oficina-chapultepec-5.jpg";
import oficinaCh6 from "@/assets/oficina-chapultepec-6.jpg";
import oficinaCh7 from "@/assets/oficina-chapultepec-7.jpg";
import oficinaCh8 from "@/assets/oficina-chapultepec-8.jpg";

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
    title: "Oficina en Prado Norte",
    location: "Lomas de Chapultepec, Prado Norte",
    price: "$60,000",
    priceType: "Renta mensual",
    area: "103 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    imageUrl: oficinaPn1,
    featured: false,
    description: "Oficina nueva en renta. 103 m2, 2 cajones de estacionamiento, vigilancia 24/7. Puedes hacer las adecuaciones que desees, seguridad y cámaras 24 hrs. Ubicación privelegiada en Prado Norte a 5 min del Auditorio Nacional, rodeado de restaurantes de lujo y negocios de alto nivel.",
    features: ["Oficina nueva", "2 cajones de estacionamiento", "Vigilancia 24/7", "Seguridad y cámaras 24 hrs", "Adecuaciones personalizadas", "Piso 2"],
    amenities: ["Seguridad 24 horas", "Oficina"],
    gallery: [oficinaPn1, oficinaPn2, oficinaPn3, oficinaPn4, oficinaPn5, oficinaPn6]
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
  "r6": {
    id: "r6",
    title: "Oficina o Local con historia en San Miguel Chapultepec, frente al Bosque",
    location: "Cl. 13 de Septiembre, San Miguel Chapultepec",
    price: "$37,000",
    priceType: "Renta mensual",
    area: "100 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 0,
    imageUrl: oficinaCh1,
    featured: false,
    description: "Trabaja donde la inspiración fluye y la elegancia se respira. Una oficina de 100 m² ubicada en planta baja de una casa antigua catalogada por el INAH, a solo pasos del Bosque de Chapultepec. Un espacio único que eleva marcas y conecta con lo auténtico.",
    features: ["Casa de época catalogada por el INAH", "100 m² en planta baja", "Recepción con gran presencia", "4 espacios para oficinas privadas", "Iluminación natural abundante", "Pisos de madera", "Techos altos con molduras", "Área de cocina", "Espacio para almacenamiento", "Perfecto estado de conservación"],
    amenities: ["A pasos del Bosque de Chapultepec", "San Miguel Chapultepec", "Ideal para despachos creativos", "Agencias y estudios de diseño"],
    gallery: [oficinaCh1, oficinaCh2, oficinaCh3, oficinaCh4, oficinaCh5, oficinaCh6, oficinaCh7, oficinaCh8]
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  // Get rental properties for navigation
  const rentalPropertyIds = ["r1", "r2", "r3", "r4", "r5", "r6"];
  const currentPropertyIndex = rentalPropertyIds.indexOf(id || "");
  const isRentalProperty = currentPropertyIndex !== -1;
  
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
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <KGroupLogo />
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartir</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Favorito</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Button */}
        <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="mb-4 sm:mb-6 flex items-center gap-2 hover:bg-accent">
          <ArrowLeft className="w-4 h-4" />
          Regresar
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="aspect-[16/10] overflow-hidden bg-muted cursor-pointer" onClick={() => {
              setSelectedImage(property.imageUrl);
              setCurrentImageIndex(0);
              setIsModalOpen(true);
            }}>
              <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Property Navigation - Only for rental properties */}
            {isRentalProperty && (
              <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const prevIndex = currentPropertyIndex > 0 ? currentPropertyIndex - 1 : rentalPropertyIds.length - 1;
                    navigate(`/property/${rentalPropertyIds[prevIndex]}`);
                  }}
                  className="text-xs sm:text-sm"
                >
                  Anterior
                </Button>
                {rentalPropertyIds.map((propId, index) => (
                  <Button
                    key={propId}
                    variant={propId === id ? "default" : "outline"}
                    size="sm"
                    onClick={() => navigate(`/property/${propId}`)}
                    className="w-8 sm:w-10 h-8 sm:h-10 text-xs sm:text-sm"
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const nextIndex = currentPropertyIndex < rentalPropertyIds.length - 1 ? currentPropertyIndex + 1 : 0;
                    navigate(`/property/${rentalPropertyIds[nextIndex]}`);
                  }}
                  className="text-xs sm:text-sm"
                >
                  Siguiente
                </Button>
              </div>
            )}

            {/* Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {property.gallery.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer" onClick={() => {
                  setSelectedImage(image);
                  setCurrentImageIndex(index + 1);
                  setIsModalOpen(true);
                }}>
                  <img src={image} alt={`${property.title} - imagen ${index + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-light">{property.title}</h1>
                  {property.featured && <Badge variant="secondary">DESTACADA</Badge>}
                </div>
                <div className="flex items-center gap-1 text-sm sm:text-base text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 py-4 border-y border-border">
                <div className="flex items-center gap-2">
                  <Square className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base font-medium">{property.area}</span>
                </div>
                {property.bedrooms > 0 && <div className="flex items-center gap-2">
                    <BedDouble className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                    <span className="text-sm sm:text-base">{property.bedrooms} recámaras</span>
                  </div>}
                <div className="flex items-center gap-2">
                  <Bath className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base">{property.bathrooms} baños</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base">{property.parking} estacionamientos</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Descripción</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Características</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {property.features.map((feature, index) => <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>)}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Amenidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {property.amenities.map((amenity, index) => <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{amenity}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-8">
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-primary mb-1">
                    {property.price}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">
                    {property.priceType}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3 sm:space-y-4">
                  
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="tel:+525560808129">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="https://wa.me/525560808129?text=Hola,%20me%20interesa%20la%20propiedad%20que%20vi%20en%20su%20sitio%20web" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar al WhatsApp
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/consultation">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Cita
                    </Link>
                  </Button>
                </div>

                <Separator />

                <div className="text-center space-y-1 sm:space-y-2">
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