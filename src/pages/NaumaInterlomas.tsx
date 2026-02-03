import { KGroupLogo } from "@/components/KGroupLogo";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Building2, Calendar, Check, Phone, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState } from "react";

import naumaFachada from "@/assets/nauma-fachada.jpg";
import naumaSala from "@/assets/nauma-sala.jpg";
import naumaRecamara from "@/assets/nauma-recamara.jpg";
import naumaBano from "@/assets/nauma-bano.jpg";
import naumaEntrada from "@/assets/nauma-entrada.jpg";
import naumaCinema from "@/assets/nauma-cinema.jpg";
import naumaSpa from "@/assets/nauma-spa.jpg";
import naumaJardin from "@/assets/nauma-jardin.jpg";
import naumaLobby from "@/assets/nauma-lobby.jpg";
import naumaLobby2 from "@/assets/nauma-lobby-2.jpg";

const NaumaInterlomas = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    { src: naumaFachada, alt: "Fachada Nauma Interlomas" },
    { src: naumaLobby, alt: "Lobby principal" },
    { src: naumaLobby2, alt: "Lobby recepción" },
    { src: naumaSala, alt: "Sala de estar" },
    { src: naumaRecamara, alt: "Recámara principal" },
    { src: naumaBano, alt: "Baño premium" },
    { src: naumaEntrada, alt: "Entrada del desarrollo" },
    { src: naumaCinema, alt: "Cine privado" },
    { src: naumaSpa, alt: "Spa y jacuzzi" },
    { src: naumaJardin, alt: "Jardín zen" },
  ];

  const unitTypes = [
    { type: "Loft", price: "desde $4.9 MDP", available: true },
    { type: "1 Recámara", price: "desde $5.5 MDP", available: true },
    { type: "2 Recámaras", price: "desde $7.6 MDP", available: true },
    { type: "3 Recámaras", price: "desde $9.5 MDP", available: false },
  ];

  const amenities = [
    "Gimnasio equipado",
    "Coworking",
    "Ludoteca",
    "Salón de jóvenes",
    "Cancha deportiva",
    "Pet zone",
    "Áreas sociales",
    "Cine privado",
    "Spa con jacuzzi",
    "Jardín zen",
    "Lobby con recepción",
    "Estacionamiento",
  ];

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />

      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <KGroupLogo variant="full" size="md" />
            </Link>
            
            <Link to="/sale-catalog" className="flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Ver más propiedades</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Main Image */}
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img 
            src={images[selectedImage].src} 
            alt={images[selectedImage].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-2">Desarrollo Residencial</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4">
              NAUMA INTERLOMAS
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light">
              Departamentos nuevos desde $5,306,436 MXN
            </p>
          </div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index 
                    ? "border-foreground" 
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Subtitle */}
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Un desarrollo residencial moderno con amenidades tipo hotel y alto potencial de plusvalía
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-lg tracking-[0.1em] uppercase text-foreground">Acerca del desarrollo</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nauma Interlomas es un desarrollo residencial nuevo diseñado para quienes buscan vivir o invertir 
                  en una de las zonas de mayor crecimiento y plusvalía del Estado de México. Con departamentos tipo loft, 
                  1, 2 y 3 recámaras, ofrece opciones para diferentes estilos de vida, todos con acabados de primera calidad 
                  y un concepto de lifestyle completo.
                </p>
                <p>
                  Es ideal para parejas jóvenes, recién casados e inversionistas que buscan patrimonio, comodidad y 
                  una experiencia de vida superior. Con más de 50 amenidades y amenidades tipo hotel, Nauma Interlomas 
                  representa una oportunidad única de inversión y calidad de vida.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Torres</p>
                  <p className="font-medium">2 torres (Torre A 90% vendida)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Entrega</p>
                  <p className="font-medium">Julio 2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Interlomas, Estado de México</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <Check className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Cercanía</p>
                  <p className="font-medium">5 min Universidad Anáhuac</p>
                </div>
              </div>
            </div>

            {/* Unit Types */}
            <div className="space-y-6">
              <h2 className="text-lg tracking-[0.1em] uppercase text-foreground">Tipos de departamento</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {unitTypes.map((unit, index) => (
                  <div 
                    key={index}
                    className={`p-6 border rounded-lg transition-colors ${
                      unit.available 
                        ? "border-border hover:border-foreground" 
                        : "border-border/50 opacity-60"
                    }`}
                  >
                    <p className="text-lg font-medium mb-1">{unit.type}</p>
                    <p className="text-muted-foreground">{unit.price}</p>
                    {!unit.available && (
                      <p className="text-xs text-muted-foreground mt-2">* Consultar disponibilidad</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-6">
              <h2 className="text-lg tracking-[0.1em] uppercase text-foreground">
                Más de 50 amenidades
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Price Card */}
              <div className="border border-border rounded-lg p-6 space-y-4">
                <div>
238:                   <p className="text-sm text-muted-foreground mb-1">Precio desde</p>
                  <p className="text-3xl font-light tracking-wide">$5,306,436</p>
                  <p className="text-sm text-muted-foreground">MXN</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    Departamentos de 1, 2 y 3 recámaras + lofts disponibles
                  </p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">¿Te interesa Nauma Interlomas?</h3>
                  <p className="text-sm text-muted-foreground">
                    Solicita más información y conoce la disponibilidad actual. Un asesor te contactará.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/525560808129?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Nauma%20Interlomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a 
                    href="tel:+525560808129"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Llamar ahora</span>
                  </a>
                </div>
              </div>

              {/* Agent Info */}
              <div className="border border-border rounded-lg p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Asesor inmobiliario</p>
                <p className="font-medium">KGroup Real Estate</p>
                <p className="text-sm text-muted-foreground">+52 55 6080 8129</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <p className="text-caption text-muted-foreground">
              © 2024 KGroup
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NaumaInterlomas;
