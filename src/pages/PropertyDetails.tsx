import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, BedDouble, Bath, Car, Wifi, Phone, Mail, Calendar, Share2, Heart, X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
import oficinaPn7 from "@/assets/oficina-pn-7.jpg";
import oficinaPn8 from "@/assets/oficina-pn-8.jpg";
import oficinaPn9 from "@/assets/oficina-pn-9.jpg";
import oficinaPn10 from "@/assets/oficina-pn-10.jpg";
import oficinaRd1 from "@/assets/oficina-rd-1.jpg";
import oficinaRd2 from "@/assets/oficina-rd-2.jpg";
import oficinaRd3 from "@/assets/oficina-rd-3.jpg";
import oficinaRd4 from "@/assets/oficina-rd-4.jpg";
import oficinaRd5 from "@/assets/oficina-rd-5.jpg";
import localMasaryk1 from "@/assets/local-masaryk-1.jpg";
import localMasaryk2 from "@/assets/local-masaryk-2.jpg";
import localMasaryk3 from "@/assets/local-masaryk-3.jpg";
import localMasaryk4 from "@/assets/local-masaryk-4.jpg";
import localMasaryk5 from "@/assets/local-masaryk-5.jpg";
import localMasaryk6 from "@/assets/local-masaryk-6.jpg";
import localMasaryk7 from "@/assets/local-masaryk-7.jpg";
import localMasaryk8 from "@/assets/local-masaryk-8.jpg";
import oficinaPh from "@/assets/oficina-ph-roma-norte.jpg";
import oficinaPh1 from "@/assets/oficina-ph-1.jpg";
import oficinaPh2 from "@/assets/oficina-ph-2.jpg";
import oficinaPh3 from "@/assets/oficina-ph-3.jpg";
import oficinaPh4 from "@/assets/oficina-ph-4.jpg";
import oficinaPh5 from "@/assets/oficina-ph-5.jpg";
import oficinaInsurgentes1 from "@/assets/oficina-insurgentes-1.jpg";
import oficinaInsurgentes2 from "@/assets/oficina-insurgentes-2.jpg";
import oficinaInsurgentes3 from "@/assets/oficina-insurgentes-3.jpg";
import oficinaInsurgentes4 from "@/assets/oficina-insurgentes-4.jpg";
import oficinaInsurgentes5 from "@/assets/oficina-insurgentes-5.jpg";
import oficinaInsurgentes6 from "@/assets/oficina-insurgentes-6.jpg";
import oficinaInsurgentes7 from "@/assets/oficina-insurgentes-7.jpg";
import oficinaInsurgentes8 from "@/assets/oficina-insurgentes-8.jpg";
import oficinaHomero1 from "@/assets/oficina-homero-1.jpg";
import oficinaHomero2 from "@/assets/oficina-homero-2.jpg";
import oficinaHomero3 from "@/assets/oficina-homero-3.jpg";
import oficinaHomero4 from "@/assets/oficina-homero-4.jpg";
import oficinaHomero5 from "@/assets/oficina-homero-5.jpg";
import oficinaHomero6 from "@/assets/oficina-homero-6.jpg";
import oficinaHomero7 from "@/assets/oficina-homero-7.jpg";
import oficinaHomero8 from "@/assets/oficina-homero-8.jpg";
import localEscobedo1 from "@/assets/local-escobedo-1.jpg";
import localEscobedo2 from "@/assets/local-escobedo-2.jpg";
import localEscobedo3 from "@/assets/local-escobedo-3.jpg";
import localEscobedo4 from "@/assets/local-escobedo-4.jpg";
import localEscobedo5 from "@/assets/local-escobedo-5.jpg";
import localEscobedo6 from "@/assets/local-escobedo-6.jpg";
import localEscobedo7 from "@/assets/local-escobedo-7.jpg";
import localEscobedo8 from "@/assets/local-escobedo-8.jpg";
import oficinaBegrand1 from "@/assets/oficina-begrand-1.jpg";
import oficinaBegrand2 from "@/assets/oficina-begrand-2.jpg";
import oficinaBegrand3 from "@/assets/oficina-begrand-3.jpg";
import oficinaBegrand4 from "@/assets/oficina-begrand-4.jpg";
import oficinaBegrand5 from "@/assets/oficina-begrand-5.jpg";
import oficinaBegrand6 from "@/assets/oficina-begrand-6.jpg";
import oficinaBegrand7 from "@/assets/oficina-begrand-7.jpg";
import oficinaBegrand8 from "@/assets/oficina-begrand-8.jpg";
import oficinaBegrand9 from "@/assets/oficina-begrand-9.jpg";
import oficinaBegrand10 from "@/assets/oficina-begrand-10.jpg";
import localGandhi1 from "@/assets/local-gandhi-1.jpg";
import localGandhi2 from "@/assets/local-gandhi-2.jpg";
import localGandhi3 from "@/assets/local-gandhi-3.jpg";
import localGandhi4 from "@/assets/local-gandhi-4.jpg";
import localGandhi5 from "@/assets/local-gandhi-5.jpg";
import localGandhi6 from "@/assets/local-gandhi-6.jpg";
import localGandhi7 from "@/assets/local-gandhi-7.jpg";
import localGandhi8 from "@/assets/local-gandhi-8.jpg";
import oficinaLomas1 from "@/assets/oficina-lomas-1.jpg";
import oficinaLomas2 from "@/assets/oficina-lomas-2.jpg";
import oficinaLomas3 from "@/assets/oficina-lomas-3.jpg";
import oficinaLomas4 from "@/assets/oficina-lomas-4.jpg";
import oficinaLomas5 from "@/assets/oficina-lomas-5.jpg";
import oficinaLomas6 from "@/assets/oficina-lomas-6.jpg";
import oficinaLomas7 from "@/assets/oficina-lomas-7.jpg";
import oficinaLomas8 from "@/assets/oficina-lomas-8.jpg";
import oficinaLomas9 from "@/assets/oficina-lomas-9.jpg";
import oficinaLomas10 from "@/assets/oficina-lomas-10.jpg";
import oficinaPhCondesa1 from "@/assets/oficina-ph-1.jpg";
import oficinaPhCondesa2 from "@/assets/oficina-ph-2.jpg";
import oficinaPhCondesa3 from "@/assets/oficina-ph-3.jpg";
import oficinaPhCondesa4 from "@/assets/oficina-ph-4.jpg";
import oficinaPhCondesa5 from "@/assets/oficina-ph-5.jpg";
import oficinaPhCondesa6 from "@/assets/oficina-ph-6.jpg";
import oficinaPhCondesa7 from "@/assets/oficina-ph-7.jpg";
import oficinaPhCondesa8 from "@/assets/oficina-ph-8.jpg";
import oficinaPhCondesa9 from "@/assets/oficina-ph-9.jpg";
import oficinaPhCondesa10 from "@/assets/oficina-ph-10.jpg";
import oficinaCondesa16_1 from "@/assets/oficina-condesa-16-1.jpg";
import oficinaCondesa16_2 from "@/assets/oficina-condesa-16-2.jpg";
import oficinaCondesa16_3 from "@/assets/oficina-condesa-16-3.jpg";
import oficinaCondesa16_4 from "@/assets/oficina-condesa-16-4.jpg";
import oficinaCondesa16_5 from "@/assets/oficina-condesa-16-5.jpg";
import oficinaCondesa16_6 from "@/assets/oficina-condesa-16-6.jpg";
import oficinaCondesa16_7 from "@/assets/oficina-condesa-16-7.jpg";
import oficinaCondesa16_8 from "@/assets/oficina-condesa-16-8.jpg";
import oficinaCondesa16_9 from "@/assets/oficina-condesa-16-9.jpg";
import oficinaCondesa16_10 from "@/assets/oficina-condesa-16-10.jpg";
import oficinaPorsche1 from "@/assets/oficina-porsche-1.jpg";
import oficinaPorsche2 from "@/assets/oficina-porsche-2.jpg";
import oficinaPorsche3 from "@/assets/oficina-porsche-3.jpg";
import oficinaPorsche4 from "@/assets/oficina-porsche-4.jpg";
import oficinaPorsche5 from "@/assets/oficina-porsche-5.jpg";
import oficinaPorsche6 from "@/assets/oficina-porsche-6.jpg";
import oficinaPorsche7 from "@/assets/oficina-porsche-7.jpg";
import oficinaEn2_1 from "@/assets/oficina-en2-1.jpg";
import oficinaEn2_2 from "@/assets/oficina-en2-2.jpg";
import oficinaEn2_3 from "@/assets/oficina-en2-3.jpg";
import oficinaEn2_4 from "@/assets/oficina-en2-4.jpg";
import oficinaEn2_5 from "@/assets/oficina-en2-5.jpg";
import oficinaEn2_6 from "@/assets/oficina-en2-6.jpg";
import oficinaEn2_7 from "@/assets/oficina-en2-7.jpg";
import oficinaEn2_8 from "@/assets/oficina-en2-8.jpg";
import oficinaEn2_9 from "@/assets/oficina-en2-9.jpg";
import oficinaEn2_10 from "@/assets/oficina-en2-10.jpg";
import oficinaEn3_1 from "@/assets/oficina-en3-1.jpg";
import oficinaEn3_2 from "@/assets/oficina-en3-2.jpg";
import oficinaEn3_3 from "@/assets/oficina-en3-3.jpg";
import oficinaEn3_4 from "@/assets/oficina-en3-4.jpg";
import oficinaEn3_5 from "@/assets/oficina-en3-5.jpg";
import oficinaEn3_6 from "@/assets/oficina-en3-6.jpg";
import oficinaEn3_7 from "@/assets/oficina-en3-7.jpg";
import oficinaEn3_8 from "@/assets/oficina-en3-8.jpg";
import oficinaEn3_9 from "@/assets/oficina-en3-9.jpg";
import oficinaEn3_10 from "@/assets/oficina-en3-10.jpg";
import oficinaMoliere1 from "@/assets/oficina-moliere-1.jpg";
import oficinaMoliere2 from "@/assets/oficina-moliere-2.jpg";
import oficinaMoliere3 from "@/assets/oficina-moliere-3.jpg";
import oficinaMoliere4 from "@/assets/oficina-moliere-4.jpg";
import oficinaMoliere5 from "@/assets/oficina-moliere-5.jpg";
import oficinaMoliere6 from "@/assets/oficina-moliere-6.jpg";
import oficinaMoliere7 from "@/assets/oficina-moliere-7.jpg";
import oficinaMoliere8 from "@/assets/oficina-moliere-8.jpg";
import oficinaMoliere9 from "@/assets/oficina-moliere-9.jpg";
import oficinaMoliere10 from "@/assets/oficina-moliere-10.jpg";
import oficinaMoliere2_1 from "@/assets/oficina-moliere2-1.jpg";
import oficinaMoliere2_2 from "@/assets/oficina-moliere2-2.jpg";
import oficinaMoliere2_3 from "@/assets/oficina-moliere2-3.jpg";
import oficinaMoliere2_4 from "@/assets/oficina-moliere2-4.jpg";
import oficinaMoliere2_5 from "@/assets/oficina-moliere2-5.jpg";
import oficinaMoliere2_6 from "@/assets/oficina-moliere2-6.jpg";
import oficinaMoliere2_7 from "@/assets/oficina-moliere2-7.jpg";
import oficinaMoliere2_8 from "@/assets/oficina-moliere2-8.jpg";
import oficinaMoliere2_9 from "@/assets/oficina-moliere2-9.jpg";
import oficinaMoliere2_10 from "@/assets/oficina-moliere2-10.jpg";
import oficinaPatriotismo1 from "@/assets/oficina-patriotismo-1.jpg";
import oficinaPatriotismo2 from "@/assets/oficina-patriotismo-2.jpg";
import oficinaPatriotismo3 from "@/assets/oficina-patriotismo-3.jpg";
import oficinaPatriotismo4 from "@/assets/oficina-patriotismo-4.jpg";
import oficinaPatriotismo5 from "@/assets/oficina-patriotismo-5.jpg";
import oficinaPatriotismo6 from "@/assets/oficina-patriotismo-6.jpg";
import oficinaPatriotismo7 from "@/assets/oficina-patriotismo-7.jpg";
import oficinaPatriotismo8 from "@/assets/oficina-patriotismo-8.jpg";
import oficinaPatriotismo9 from "@/assets/oficina-patriotismo-9.jpg";
import oficinaPatriotismo77_1 from "@/assets/oficina-patriotismo-77-1.jpg";
import oficinaPatriotismo77_2 from "@/assets/oficina-patriotismo-77-2.jpg";
import oficinaPatriotismo77_3 from "@/assets/oficina-patriotismo-77-3.jpg";
import oficinaPatriotismo77_4 from "@/assets/oficina-patriotismo-77-4.jpg";
import oficinaPatriotismo77_5 from "@/assets/oficina-patriotismo-77-5.jpg";
import oficinaPatriotismo77_6 from "@/assets/oficina-patriotismo-77-6.jpg";
import oficinaPatriotismo77_7 from "@/assets/oficina-patriotismo-77-7.jpg";
import oficinaPatriotismo77_8 from "@/assets/oficina-patriotismo-77-8.jpg";
import espacioMasaryk1 from "@/assets/espacio-masaryk-1.jpg";
import espacioMasaryk2 from "@/assets/espacio-masaryk-2.jpg";
import espacioMasaryk3 from "@/assets/espacio-masaryk-3.jpg";
import espacioMasaryk4 from "@/assets/espacio-masaryk-4.jpg";
import espacioMasaryk5 from "@/assets/espacio-masaryk-5.jpg";
import espacioMasaryk6 from "@/assets/espacio-masaryk-6.jpg";
import espacioMasaryk7 from "@/assets/espacio-masaryk-7.jpg";
import espacioMasaryk8 from "@/assets/espacio-masaryk-8.jpg";
import oficinaVinkel1 from "@/assets/oficina-vinkel-1.jpg";
import oficinaVinkel2 from "@/assets/oficina-vinkel-2.jpg";
import oficinaVinkel3 from "@/assets/oficina-vinkel-3.jpg";
import oficinaVinkel4 from "@/assets/oficina-vinkel-4.jpg";
import oficinaChapultepec1 from "@/assets/oficina-chapultepec-1.jpg";
import oficinaChapultepec2 from "@/assets/oficina-chapultepec-2.jpg";
import oficinaChapultepec3 from "@/assets/oficina-chapultepec-3.jpg";
import oficinaChapultepec4 from "@/assets/oficina-chapultepec-4.jpg";
import oficinaChapultepec5 from "@/assets/oficina-chapultepec-5.jpg";
import oficinaChapultepec6 from "@/assets/oficina-chapultepec-6.jpg";
import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";
import oficinaReforma2 from "@/assets/oficina-reforma-2.jpg";
import oficinaReforma3 from "@/assets/oficina-reforma-3.jpg";
import oficinaReforma4 from "@/assets/oficina-reforma-4.jpg";
import oficinaReforma5 from "@/assets/oficina-reforma-5.jpg";
import oficinaReforma6 from "@/assets/oficina-reforma-6.jpg";
import oficinaReforma7 from "@/assets/oficina-reforma-7.jpg";
import oficinaReforma8 from "@/assets/oficina-reforma-8.jpg";
import oficinaReforma9 from "@/assets/oficina-reforma-9.jpg";
import oficinaReforma10 from "@/assets/oficina-reforma-10.jpg";
import oficinaJuarez1 from "@/assets/oficina-juarez-1.jpg";
import oficinaJuarez2 from "@/assets/oficina-juarez-2.jpg";
import oficinaJuarez3 from "@/assets/oficina-juarez-3.jpg";
import oficinaJuarez4 from "@/assets/oficina-juarez-4.jpg";
import oficinaJuarez5 from "@/assets/oficina-juarez-5.jpg";
import oficinaJuarez6 from "@/assets/oficina-juarez-6.jpg";
import oficinaJuarez7 from "@/assets/oficina-juarez-7.jpg";
import oficinaJuarez8 from "@/assets/oficina-juarez-8.jpg";
import oficinaJuarez9 from "@/assets/oficina-juarez-9.jpg";
import oficinaJuarez10 from "@/assets/oficina-juarez-10.jpg";
import oficinaPininfarina1 from "@/assets/oficina-pininfarina-1.jpg";
import oficinaPininfarina2 from "@/assets/oficina-pininfarina-2.jpg";
import oficinaPininfarina3 from "@/assets/oficina-pininfarina-3.jpg";
import oficinaPininfarina4 from "@/assets/oficina-pininfarina-4.jpg";
import oficinaPininfarina5 from "@/assets/oficina-pininfarina-5.jpg";
import oficinaPininfarina6 from "@/assets/oficina-pininfarina-6.jpg";
import oficinaPininfarina7 from "@/assets/oficina-pininfarina-7.jpg";
import oficinaPininfarinaPlan from "@/assets/oficina-pininfarina-plano.png";
import oficinaYama1 from "@/assets/oficina-yama-1.jpg";
import oficinaYama2 from "@/assets/oficina-yama-2.jpg";
import oficinaYama3 from "@/assets/oficina-yama-3.jpg";
import oficinaYama4 from "@/assets/oficina-yama-4.jpg";
import oficinaYama5 from "@/assets/oficina-yama-5.jpg";
import oficinaYama6 from "@/assets/oficina-yama-6.jpg";
import oficinaYama7 from "@/assets/oficina-yama-7.jpg";
import oficinaYama8 from "@/assets/oficina-yama-8.jpg";
import oficinaSanjeronimo1 from "@/assets/oficina-sanjeronimo-1.jpg";
import oficinaSanjeronimo2 from "@/assets/oficina-sanjeronimo-2.jpg";
import oficinaSanjeronimo3 from "@/assets/oficina-sanjeronimo-3.jpg";
import oficinaSanjeronimo4 from "@/assets/oficina-sanjeronimo-4.jpg";
import oficinaSanjeronimo5 from "@/assets/oficina-sanjeronimo-5.jpg";
import oficinaSanjeronimo6 from "@/assets/oficina-sanjeronimo-6.jpg";
import oficinaSanjeronimo7 from "@/assets/oficina-sanjeronimo-7.jpg";
import oficinaSanjeronimo8 from "@/assets/oficina-sanjeronimo-8.jpg";
import oficinaSanjeronimo9 from "@/assets/oficina-sanjeronimo-9.jpg";
import oficinaSanjeronimo10 from "@/assets/oficina-sanjeronimo-10.jpg";
import diagonalPatriotismo1 from "@/assets/diagonal-patriotismo-1.jpg";
import diagonalPatriotismo2 from "@/assets/diagonal-patriotismo-2.jpg";
import diagonalPatriotismo3 from "@/assets/diagonal-patriotismo-3.jpg";
import diagonalPatriotismo4 from "@/assets/diagonal-patriotismo-4.jpg";
import diagonalPatriotismo5 from "@/assets/diagonal-patriotismo-5.jpg";
import diagonalPatriotismo6 from "@/assets/diagonal-patriotismo-6.jpg";
import diagonalPatriotismo7 from "@/assets/diagonal-patriotismo-7.jpg";

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
    gallery: ["/src/assets/block-renta.jpg", "/src/assets/property-r1-1.jpg", "/src/assets/property-r1-2.jpg", "/src/assets/property-r1-3.jpg", "/src/assets/property-r1-4.jpg", "/src/assets/property-r1-5.jpg", "/src/assets/property-r1-6.jpg", "/src/assets/property-r1-7.jpg"],
    youtubeVideoId: undefined
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
    gallery: ["/src/assets/renta-mitikah.jpg", "/src/assets/property-r3-1.jpg", "/src/assets/property-r3-2.jpg", "/src/assets/property-r3-3.jpg", "/src/assets/property-r3-4.jpg"],
    youtubeVideoId: undefined
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
    gallery: [oficinaPn1, oficinaPn2, oficinaPn3, oficinaPn4, oficinaPn5, oficinaPn6],
    youtubeVideoId: "Qb3MgfN1kgQ"
  },
  "r7": {
    id: "r7",
    title: "Oficina en Polanco, Ejercito Nacional",
    location: "Ejercito Nacional, Polanco",
    price: "$75,000",
    priceType: "Renta mensual",
    area: "215 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    imageUrl: "/src/assets/oficina-en-1.jpg",
    featured: false,
    description: "Moderna oficina en el corazón de Polanco, ubicada en Ejercito Nacional. Espacio amplio ideal para empresas que buscan una ubicación privilegiada con excelente conectividad.",
    features: ["Oficina amplia", "Iluminación natural", "2 cajones de estacionamiento", "Ubicación privilegiada", "Fácil acceso"],
    amenities: ["Seguridad 24/7", "Elevador", "Estacionamiento"],
    gallery: ["/src/assets/oficina-en-1.jpg", "/src/assets/oficina-en-2.jpg", "/src/assets/oficina-en-3.jpg", "/src/assets/oficina-en-4.jpg", "/src/assets/oficina-en-5.jpg", "/src/assets/oficina-en-6.jpg"],
    youtubeVideoId: "r0mBmjqVKko"
  },
  "r8": {
    id: "r8",
    title: "🏢 Oficina PH en Polanco – Vista Panorámica y Terraza",
    location: "Rubén Darío, Polanco",
    price: "$46,000",
    priceType: "Renta mensual + IVA",
    area: "215 m²",
    bedrooms: 0,
    bathrooms: 2,
    parking: 1,
    imageUrl: oficinaRd1,
    featured: false,
    description: "Oficina ubicada en el piso 9 sobre Rubén Darío, Polanco, a solo 5 minutos de Masaryk, una de las zonas más exclusivas y céntricas de la CDMX. Ubicación privilegiada con excelente conectividad, cerca de Masaryk, Campos Elíseos y principales avenidas de Polanco.",
    features: ["Amplia terraza con vista espectacular a la ciudad", "Cocina equipada", "Espacio muy iluminado con grandes ventanales", "Piso 9", "Vista a la ciudad"],
    amenities: ["Seguridad 24/7", "Ideal para oficinas corporativas", "Despachos", "Estudios", "Espacios de bienestar o uso comercial"],
    gallery: [oficinaRd1, oficinaRd2, oficinaRd3, oficinaRd4, oficinaRd5],
    youtubeVideoId: undefined
  },
  "r9": {
    id: "r9",
    title: "Local Comercial en Renta – Av. Presidente Masaryk, Polanco",
    location: "Av. Presidente Masaryk, Polanco",
    price: "$235,000",
    priceType: "Renta mensual + IVA",
    area: "250 m²",
    bedrooms: 0,
    bathrooms: 4,
    parking: 0,
    imageUrl: localMasaryk1,
    featured: false,
    description: "Local comercial ubicado en una de las avenidas más prestigiosas de la colonia Polanco. Cuenta con instalaciones y adaptaciones ideales para restaurante o showroom, pero puede adaptarse para cualquier otro giro comercial. Zona con alto flujo vehicular y peatonal, ideal para posicionar tu marca o negocio.",
    features: [
      "Planta baja",
      "Baños de hombres y mujeres",
      "Bodega",
      "Área de cocina",
      "Amplio salón de 200 m²",
      "Total construido: 250 m²",
      "Superficie cubierta: 250 m²",
      "Fondo: 25 m",
      "Frente: 10 m",
      "5 ambientes",
      "Zonificación: 500 metros",
      "Expensas: $23,500 MXN"
    ],
    amenities: [
      "Mantenimiento incluido en la renta",
      "Disponibilidad inmediata",
      "Vigilancia 24/7",
      "Contrato mínimo por dos años",
      "Todos los giros permitidos (excepto bares)",
      "Alto flujo vehicular y peatonal",
      "Zona de parquímetros y estacionamientos cercanos"
    ],
    gallery: [localMasaryk1, localMasaryk2, localMasaryk3, localMasaryk4, localMasaryk5, localMasaryk6, localMasaryk7, localMasaryk8],
    youtubeVideoId: undefined
  },
  "r11": {
    id: "r11",
    title: "Oficina en renta en Homero, Polanco",
    location: "Homero, Polanco",
    price: "$45,000",
    priceType: "Renta mensual + IVA",
    area: "150 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaHomero1,
    featured: false,
    description: "¿Buscas una oficina que combine imagen, comodidad y ubicación premium? Esta opción en Polanco tiene todo lo que necesitas para tu negocio. Perfecta para despachos, agencias o firmas corporativas que buscan proyección y conexión en una de las zonas más exclusivas de CDMX.",
    features: [
      "5 espacios privados",
      "1 cajón de estacionamiento",
      "Baños completos",
      "Área de recepción",
      "Espacio luminoso y funcional",
      "Ubicación estratégica cerca de Masaryk y Reforma"
    ],
    amenities: [
      "Ubicación premium en Polanco",
      "Cerca de Av. Masaryk",
      "Acceso a Reforma",
      "Zona exclusiva de negocios",
      "Conectividad excepcional"
    ],
    gallery: [oficinaHomero1, oficinaHomero2, oficinaHomero3, oficinaHomero4, oficinaHomero5, oficinaHomero6, oficinaHomero7, oficinaHomero8],
    youtubeVideoId: undefined
  },
  "r14": {
    id: "r14",
    title: "Local comercial en renta en Campos Elíseos, Polanco",
    location: "Corporativo Gandhi, Campos Elíseos, Polanco",
    price: "Consultar precio",
    priceType: "Renta mensual",
    area: "270 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 0,
    imageUrl: localGandhi1,
    featured: true,
    description: "Corporativo Gandhi, ubicado en una de las zonas más céntricas y conectadas de la ciudad. Ofrece espacios corporativos funcionales e ideales para empresas que buscan una ubicación estratégica a un precio competitivo. El edificio cuenta con una imagen corporativa sobria y profesional, con vigilancia 24/7, accesos rápidos a importantes avenidas, transporte público, restaurantes y servicios. Una excelente opción para oficinas administrativas, call center, consultorías o empresas en crecimiento que buscan establecerse en una ubicación privilegiada.",
    features: [
      "270 m² en Piso 1",
      "Recepción amplia",
      "2 Elevadores",
      "Bodega incluida",
      "Cuarto de máquinas",
      "Espacio funcional y adaptable",
      "Mantenimiento: $4 USD por m²",
      "Listo para adecuar a tus necesidades"
    ],
    amenities: [
      "Vigilancia 24/7",
      "Ubicación estratégica en Polanco",
      "Accesos rápidos a avenidas importantes",
      "Transporte público cercano",
      "Restaurantes y servicios",
      "Imagen corporativa profesional",
      "Ideal para call center, consultorías y oficinas administrativas"
    ],
    gallery: [localGandhi1, localGandhi2, localGandhi3, localGandhi4, localGandhi5, localGandhi6, localGandhi7, localGandhi8],
    youtubeVideoId: undefined
  },
  // Propiedades en Venta
  "s4": {
    id: "s4",
    title: "Oficina en Venta – Be Grand, Tabacalera",
    location: "Lafragua #13, Col. Tabacalera, Cuauhtémoc",
    price: "$12,500,000 MXN",
    priceType: "Venta",
    area: "113 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 4,
    imageUrl: oficinaBegrand1,
    featured: true,
    description: "Ubicada en uno de los corporativos más exclusivos de la ciudad, esta oficina de 113 m² con triple altura (3.90 m) te ofrece un espacio moderno, abierto y adaptable a cualquier tipo de empresa. Espacio abierto en obra gris, listo para adecuar a tus necesidades en el piso 15 con vistas panorámicas espectaculares.",
    features: [
      "113 m² con triple altura (3.90 m)",
      "Espacio abierto en obra gris",
      "Piso 15 con vistas panorámicas",
      "4 lugares de estacionamiento privados",
      "Salida de agua potable",
      "Ducto para aire acondicionado",
      "Sistema contra incendios",
      "Listo para adecuar a tus necesidades"
    ],
    amenities: [
      "Business Center con 4 salas de juntas equipadas",
      "Sky Lobby y terraza con vista a Reforma",
      "Cafetería y tiendas",
      "Servicio de valet parking",
      "Seguridad 24/7",
      "Ubicación exclusiva en Reforma",
      "Dirección corporativa de alto nivel"
    ],
    gallery: [oficinaBegrand1, oficinaBegrand2, oficinaBegrand3, oficinaBegrand4, oficinaBegrand5, oficinaBegrand6, oficinaBegrand7, oficinaBegrand8, oficinaBegrand9, oficinaBegrand10],
    youtubeVideoId: undefined
  },
  "r15": {
    id: "r15",
    title: "Oficina en Lomas de Chapultepec – ubicación premium CDMX",
    location: "Lomas de Chapultepec, CDMX",
    price: "$76,500",
    priceType: "Renta mensual + IVA",
    area: "88 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaLomas1,
    featured: true,
    description: "Oficina moderna de 88 m², ideal para empresas que buscan un espacio ejecutivo con seguridad y excelente ubicación. Perfecta para despachos, startups o marcas que valoran imagen, comodidad y seguridad. Ubicación estratégica con acceso rápido a zonas corporativas, comercios y vías principales.",
    features: [
      "1 cajón de estacionamiento incluido",
      "Seguridad 24/7 (primer filtro)",
      "Recepción profesional (segundo filtro)",
      "Mantenimiento incluido",
      "Agua incluida",
      "Espacio ejecutivo moderno",
      "Ubicación premium en Lomas de Chapultepec"
    ],
    amenities: [
      "Luz e internet no incluidos",
      "Seguridad con doble filtro",
      "Recepción corporativa",
      "Mantenimiento del edificio",
      "Estacionamiento privado",
      "Acceso a vías principales",
      "Cerca de zonas corporativas"
    ],
    gallery: [oficinaLomas1, oficinaLomas2, oficinaLomas3, oficinaLomas4, oficinaLomas5, oficinaLomas6, oficinaLomas7, oficinaLomas8, oficinaLomas9, oficinaLomas10],
    youtubeVideoId: undefined
  },
  "r16": {
    id: "r16",
    title: "Oficina Corporativa – Torre Porsche, Santa Fe",
    location: "Torre Porsche, Santa Fe – Piso 22",
    price: "$45,900",
    priceType: "Renta mensual + IVA (mantenimiento $5,600 MXN aprox.)",
    area: "130 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 5,
    imageUrl: oficinaPorsche1,
    featured: true,
    description: "Oficina en renta en Torre Porsche Santa Fe, una de las direcciones corporativas más reconocidas del corredor México–Toluca, ideal para empresas que buscan imagen, funcionalidad y ubicación estratégica. Ubicada en piso 22, esta oficina cuenta con 130 m², está totalmente terminada y lista para ocuparse, con una distribución eficiente y una espectacular vista panorámica. Edificio corporativo AAA, con seguridad, excelente imagen institucional y ubicación estratégica dentro del distrito financiero de Santa Fe.",
    features: [
      "130 m² totalmente terminados",
      "Oficina principal",
      "Área libre de trabajo",
      "Gran salón de juntas",
      "Baño privado dentro de la oficina",
      "Bodega de 12 m²",
      "5 cajones de estacionamiento",
      "5 baños para hombres y 5 para mujeres en el piso",
      "Vista panorámica espectacular",
      "Piso 22"
    ],
    amenities: [
      "Edificio corporativo AAA",
      "Seguridad 24/7",
      "Excelente imagen institucional",
      "Ubicación estratégica en Santa Fe",
      "Corredor México–Toluca",
      "Distrito financiero"
    ],
    gallery: [oficinaPorsche1, oficinaPorsche2, oficinaPorsche3, oficinaPorsche4, oficinaPorsche5, oficinaPorsche6, oficinaPorsche7],
    youtubeVideoId: undefined
  },
  "r17": {
    id: "r17",
    title: "Oficina en renta – Ejercito Nacional, Polanco",
    location: "Ejercito Nacional, Polanco",
    price: "$40,000",
    priceType: "Renta mensual",
    area: "70 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaEn2_1,
    featured: false,
    description: "Oficinas en renta en Ejercito Nacional con 70 m² de superficie. Este espacio ofrece un ambiente abierto y luminoso, ideal para un entorno profesional y moderno. Diseño funcional para un ambiente de trabajo eficiente con ubicación privilegiada y excelente conectividad.",
    features: [
      "Superficie: 70 m²",
      "1 piso",
      "1 cajón de estacionamiento",
      "Guardia 24/7",
      "Espacio abierto y luminoso",
      "Diseño funcional",
      "Entorno profesional y moderno"
    ],
    amenities: [
      "Seguridad 24/7",
      "Ubicación privilegiada",
      "Excelente conectividad",
      "Ambiente de trabajo eficiente"
    ],
    gallery: [oficinaEn2_1, oficinaEn2_2, oficinaEn2_3, oficinaEn2_4, oficinaEn2_5, oficinaEn2_6, oficinaEn2_7, oficinaEn2_8, oficinaEn2_9, oficinaEn2_10],
    youtubeVideoId: undefined
  },
  "r18": {
    id: "r18",
    title: "Oficina en Renta – Ejercito Nacional, 5 Privados",
    location: "Ejercito Nacional, Polanco",
    price: "$60,000",
    priceType: "Renta mensual + IVA",
    area: "170 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    imageUrl: oficinaEn3_1,
    featured: false,
    description: "Oficina en renta con 170 m² de superficie, diseñada para ofrecer una distribución eficiente y funcional, ideal para empresas que buscan comodidad, productividad y una excelente imagen corporativa. Ubicación estratégica con fácil acceso a vialidades principales, ideal para corporativos, despachos o empresas que requieren espacios bien definidos en una zona estratégica.",
    features: [
      "Superficie total: 170 m²",
      "5 oficinas privadas bien distribuidas",
      "2 lugares de estacionamiento",
      "Diseño funcional que optimiza espacios",
      "Excelente iluminación y circulación",
      "Entorno profesional y moderno"
    ],
    amenities: [
      "Ubicación privilegiada",
      "Fácil acceso a vialidades principales",
      "Zona estratégica",
      "Ideal para corporativos y despachos"
    ],
    gallery: [oficinaEn3_1, oficinaEn3_2, oficinaEn3_3, oficinaEn3_4, oficinaEn3_5, oficinaEn3_6, oficinaEn3_7, oficinaEn3_8, oficinaEn3_9, oficinaEn3_10],
    youtubeVideoId: undefined
  },
  "r19": {
    id: "r19",
    title: "Oficina en Renta – Av. Moliere, Polanco",
    location: "Av. Moliere, Polanco – Piso 5",
    price: "$58,000",
    priceType: "Renta mensual + IVA",
    area: "288 m²",
    bedrooms: 0,
    bathrooms: 4,
    parking: 0,
    imageUrl: oficinaMoliere1,
    featured: true,
    description: "Excelente oficina corporativa en renta ubicada sobre Avenida Moliere, en el corazón de Polanco, una de las zonas empresariales más consolidadas de la Ciudad de México. La oficina se encuentra en piso 5, con 288 m² distribuidos de manera funcional, ideal para empresas que buscan una imagen corporativa sólida y espacios bien definidos.",
    features: [
      "Superficie: 288 m²",
      "Recepción con sala de espera",
      "Sala de juntas",
      "4 oficinas privadas",
      "4 baños",
      "Cocina con área de bodega",
      "Amplia área abierta de trabajo",
      "Espacio para archivo o almacenamiento"
    ],
    amenities: [
      "Seguridad 24 horas",
      "Elevador",
      "Escaleras",
      "Helipuerto",
      "Motor lobby",
      "Estacionamiento público cercano (renta no incluye estacionamiento)",
      "Excelente conectividad y accesos viales",
      "Rodeada de bancos, restaurantes, comercios"
    ],
    gallery: [oficinaMoliere1, oficinaMoliere2, oficinaMoliere3, oficinaMoliere4, oficinaMoliere5, oficinaMoliere6, oficinaMoliere7, oficinaMoliere8, oficinaMoliere9, oficinaMoliere10],
    youtubeVideoId: undefined
  },
  "r20": {
    id: "r20",
    title: "Espacio en Renta – Av. Presidente Masaryk, Polanco",
    location: "Av. Presidente Masaryk, Polanco – Piso 5",
    price: "$85,000",
    priceType: "Renta mensual + IVA",
    area: "Consultar",
    bedrooms: 0,
    bathrooms: 4,
    parking: 0,
    imageUrl: espacioMasaryk1,
    featured: true,
    description: "Espacio en renta ubicado en Av. Presidente Masaryk, una de las zonas más exclusivas de Polanco. Ideal para SPA, consultorios, wellness, o oficinas corporativas boutique. El inmueble se encuentra en el piso 5 (edificio sin elevador) y ofrece un ambiente moderno, luminoso y con vista arbolada. Distribuido en dos niveles, este espacio fue diseñado originalmente para SPA, por lo que cuenta con áreas funcionales y una atmósfera relajante.",
    features: [
      "Área de recepción",
      "2 niveles acondicionados",
      "5 espacios independientes en el primer nivel (cabinas u oficinas)",
      "4 baños",
      "Excelente iluminación natural",
      "Vista arbolada",
      "Último piso del edificio (mayor privacidad)"
    ],
    amenities: [
      "Ubicación exclusiva en Masaryk",
      "Ideal para SPA y centros de bienestar",
      "Consultorios de belleza o salud",
      "Oficinas corporativas boutique",
      "Despachos ejecutivos",
      "Estudios o firmas creativas",
      "Imagen, prestigio y fácil acceso"
    ],
    gallery: [espacioMasaryk1, espacioMasaryk2, espacioMasaryk3, espacioMasaryk4, espacioMasaryk5, espacioMasaryk6, espacioMasaryk7, espacioMasaryk8],
    youtubeVideoId: undefined
  },
  "r21": {
    id: "r21",
    title: "Oficina en Renta – Torre Vinkel Office Park, Monterrey",
    location: "Av. Lázaro Cárdenas 506, San Agustín, Monterrey – Piso 18",
    price: "$130,000",
    priceType: "Renta mensual + IVA",
    area: "170 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaVinkel1,
    featured: true,
    description: "Oficina en renta en Torre Vinkel Office Park, ubicada en Avenida Lázaro Cárdenas 506, colonia Antiguo Hacienda San Agustín, Monterrey, Nuevo León. Se encuentra en el piso 18 y cuenta con 170 metros cuadrados. La oficina es completamente nueva, con piso terminado y lista para amueblar según las necesidades del cliente.\n\nIncluye una terraza privada con vista panorámica al cerro de la silla y acceso a amenidades del edificio como seguridad 24 horas, estacionamiento, salas de juntas, área de comedor y baños.\n\nIdeal para empresas que buscan un espacio moderno, bien ubicado y con excelente imagen corporativa en una de las zonas más exclusivas de Monterrey.",
    features: [
      "170 m² en Piso 18",
      "Oficina completamente nueva",
      "Piso terminado",
      "Lista para amueblar",
      "Terraza privada",
      "Vista panorámica al Cerro de la Silla",
      "Espacio moderno y funcional"
    ],
    amenities: [
      "Seguridad 24 horas",
      "Estacionamiento",
      "Salas de juntas",
      "Área de comedor",
      "Baños",
      "Ubicación premium en Monterrey",
      "Excelente imagen corporativa"
    ],
    gallery: [oficinaVinkel1, oficinaVinkel2, oficinaVinkel3, oficinaVinkel4],
    youtubeVideoId: undefined
  },
  "r22": {
    id: "r22",
    title: "Oficina en Renta – Lomas de Chapultepec, Prado Sur",
    location: "Prado Sur, Lomas de Chapultepec – Piso 5",
    price: "$70,000",
    priceType: "Renta mensual",
    area: "140 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 5,
    imageUrl: oficinaChapultepec1,
    featured: true,
    description: "Oficina ubicada en una zona de alto nivel en Lomas de Chapultepec, cercana a vías principales como Reforma y Periférico, corporativos, restaurantes y centros comerciales.\n\nTener tu oficina en una ubicación privilegiada como Lomas de Chapultepec le proporciona a tu imagen corporativa beneficios de posición y prestigio para clientes y socios. En la zona tendrás además acceso a amenidades y servicios de primer nivel que facilitan un ambiente de trabajo moderno y profesional.\n\nUna ubicación privilegiada te ayuda a atraer y mantener talento calificado para tu negocio. Tendrás una oficina que te ofrece comodidad y privacidad para trabajar sin distracciones.",
    features: [
      "140 m² en Piso 5",
      "5 despachos privados",
      "Sala de reuniones o Coworking",
      "Paredes de cristal para amplitud y luminosidad",
      "5 cajones de estacionamiento",
      "Acceso a sala de juntas",
      "Comedor y cocina",
      "Elevador"
    ],
    amenities: [
      "Ubicación premium en Lomas de Chapultepec",
      "Cerca de Reforma y Periférico",
      "Zona de corporativos y restaurantes",
      "Centros comerciales cercanos",
      "Prestigio e imagen corporativa",
      "Ambiente profesional de alto nivel"
    ],
    gallery: [oficinaChapultepec1, oficinaChapultepec2, oficinaChapultepec3, oficinaChapultepec4, oficinaChapultepec5, oficinaChapultepec6],
    youtubeVideoId: undefined
  },
  "r23": {
    id: "r23",
    title: "Oficina Corporativa en Renta – Prol. Paseo de la Reforma",
    location: "Prol. Paseo de la Reforma 379, Corredor Reforma–Bosques – Piso 10",
    price: "$150,000",
    priceType: "Renta mensual + IVA",
    area: "Consultar",
    bedrooms: 0,
    bathrooms: 3,
    parking: 27,
    imageUrl: oficinaReforma1,
    featured: true,
    description: "Oficina en renta ubicada en el Piso 10 de uno de los corporativos más exclusivos de Prol. Paseo de la Reforma 379, dentro del corredor financiero Reforma–Bosques. Ideal para empresas que buscan imagen corporativa, seguridad y un espacio premium adaptable a sus necesidades.\n\nEl espacio se entrega en obra gris, listo para diseñar a la medida. Cuenta con ventanales de piso a techo con cancelería Reynaers CW50 y vidrio TE-Low E, lo que garantiza excelente iluminación natural, aislamiento acústico y eficiencia energética.\n\nIncluye preparaciones para aire acondicionado (agua helada), rociadores contra incendio, instalación hidráulica y sanitaria, ventilación, renovación de aire y ductería eléctrica desde los medidores.\n\nEl nivel dispone de baños totalmente terminados para hombres, mujeres y accesibilidad, con acabados de lujo: granito Negro Austral, porcelanato gris, lavabos Helvex Lucerna, mezcladoras Moen M Press, WC Helvex y mamparas Disacsa. Iluminación LED indirecta de diseño.",
    features: [
      "Piso 10 en corporativo exclusivo",
      "Entrega en obra gris, listo para diseñar",
      "Ventanales piso a techo",
      "Cancelería Reynaers CW50 con vidrio TE-Low E",
      "Excelente iluminación natural",
      "Aislamiento acústico y eficiencia energética",
      "Preparaciones para A/C (agua helada)",
      "Rociadores contra incendio",
      "Instalación hidráulica y sanitaria",
      "27 cajones de estacionamiento por nivel"
    ],
    amenities: [
      "Lobby de doble altura con front desk",
      "6 elevadores Mitsubishi de alta velocidad + VIP",
      "Seguridad y CCTV 24/7",
      "Control de accesos vehicular y peatonal",
      "Planta de emergencia",
      "Terraza ajardinada y Lounge VIP",
      "Directorio digital",
      "9 sótanos de estacionamiento",
      "Baños de lujo con acabados premium"
    ],
    gallery: [oficinaReforma1, oficinaReforma2, oficinaReforma3, oficinaReforma4, oficinaReforma5, oficinaReforma6, oficinaReforma7, oficinaReforma8, oficinaReforma9, oficinaReforma10],
    youtubeVideoId: undefined
  },
  "r24": {
    id: "r24",
    title: "Oficina Amueblada en Renta – Colonia Juárez",
    location: "Colonia Juárez, CDMX – Piso 6",
    price: "$53,000",
    priceType: "Renta mensual",
    area: "105 m²",
    bedrooms: 0,
    bathrooms: 2,
    parking: 0,
    imageUrl: oficinaJuarez1,
    featured: true,
    description: "Oficina amueblada de 105 m² ubicada en la Colonia Juárez, en el piso 6 del edificio. Cuenta con 2 baños y estacionamiento para hombres y mujeres. La zona de Juárez es conocida por su ambiente comercial y su excelente conectividad. Encontrarás una gran variedad de restaurantes, cafeterías y tiendas, así como fácil acceso a transporte público. Está cerca de importantes avenidas que facilitan el desplazamiento a otras áreas de la ciudad. Disponibilidad inmediata.",
    features: [
      "105 m² de superficie",
      "Completamente amueblada",
      "2 baños (Hombres y Mujeres)",
      "Piso 6",
      "Disponibilidad inmediata",
      "Ambiente comercial",
      "Excelente conectividad"
    ],
    amenities: [
      "Fácil acceso a transporte público",
      "Cerca de importantes avenidas",
      "Zona con restaurantes y cafeterías",
      "Tiendas cercanas",
      "Ambiente comercial vibrante",
      "Terraza con vista a la ciudad"
    ],
    gallery: [oficinaJuarez1, oficinaJuarez2, oficinaJuarez3, oficinaJuarez4, oficinaJuarez5, oficinaJuarez6, oficinaJuarez7, oficinaJuarez8, oficinaJuarez9, oficinaJuarez10],
    youtubeVideoId: undefined
  },
  "s5": {
    id: "s5",
    title: "Oficina Corporativa en Venta – Prol. Paseo de la Reforma",
    location: "Prol. Paseo de la Reforma 379, Corredor Reforma–Bosques – Piso 10",
    price: "$22,000,000",
    priceType: "MXN",
    area: "Consultar",
    bedrooms: 0,
    bathrooms: 3,
    parking: 27,
    imageUrl: oficinaReforma1,
    featured: true,
    description: "Oficina en venta ubicada en el Piso 10 de uno de los corporativos más exclusivos de Prol. Paseo de la Reforma 379, dentro del corredor financiero Reforma–Bosques. Ideal para empresas que buscan imagen corporativa, seguridad y un espacio premium adaptable a sus necesidades.\n\nEl espacio se entrega en obra gris, listo para diseñar a la medida. Cuenta con ventanales de piso a techo con cancelería Reynaers CW50 y vidrio TE-Low E, lo que garantiza excelente iluminación natural, aislamiento acústico y eficiencia energética.\n\nIncluye preparaciones para aire acondicionado (agua helada), rociadores contra incendio, instalación hidráulica y sanitaria, ventilación, renovación de aire y ductería eléctrica desde los medidores.\n\nEl nivel dispone de baños totalmente terminados para hombres, mujeres y accesibilidad, con acabados de lujo: granito Negro Austral, porcelanato gris, lavabos Helvex Lucerna, mezcladoras Moen M Press, WC Helvex y mamparas Disacsa. Iluminación LED indirecta de diseño.",
    features: [
      "Piso 10 en corporativo exclusivo",
      "Entrega en obra gris, listo para diseñar",
      "Ventanales piso a techo",
      "Cancelería Reynaers CW50 con vidrio TE-Low E",
      "Excelente iluminación natural",
      "Aislamiento acústico y eficiencia energética",
      "Preparaciones para A/C (agua helada)",
      "Rociadores contra incendio",
      "Instalación hidráulica y sanitaria",
      "27 cajones de estacionamiento por nivel"
    ],
    amenities: [
      "Lobby de doble altura con front desk",
      "6 elevadores Mitsubishi de alta velocidad + VIP",
      "Seguridad y CCTV 24/7",
      "Control de accesos vehicular y peatonal",
      "Planta de emergencia",
      "Terraza ajardinada y Lounge VIP",
      "Directorio digital",
      "9 sótanos de estacionamiento",
      "Baños de lujo con acabados premium"
    ],
    gallery: [oficinaReforma1, oficinaReforma2, oficinaReforma3, oficinaReforma4, oficinaReforma5, oficinaReforma6, oficinaReforma7, oficinaReforma8, oficinaReforma9, oficinaReforma10],
    youtubeVideoId: undefined
  },
  "s6": {
    id: "s6",
    title: "Oficinas Preventa – Torre Designo by Pininfarina, Bosque Real",
    location: "Bosque Real, Entrada Principal · Huixquilucan",
    price: "Desde $5,306,436 MXN",
    priceType: "Preventa – Entrega Diciembre 2026 + 6 meses de gracia",
    area: "Desde 47.18 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaPininfarina1,
    featured: true,
    description: "Oficinas en preventa en un edificio de clase A+, diseñado por la reconocida firma PININFARINA. Este exclusivo proyecto combina innovación, sostenibilidad y diseño de vanguardia, además de contar con la prestigiosa certificación LEED, que garantiza un alto estándar en eficiencia energética y cuidado ambiental.\n\nTORRE DESIGNO es el primer espacio de oficinas en Bosque Real. Dos torres diseñadas con curvas orgánicas que dan un toque contemporáneo y dinámico, un diseño excepcional que se distingue ante la mirada de los más exigentes.\n\nUbicado en la entrada principal de Bosque Real, en el poniente de la CDMX, a menos de un km del túnel BosqueReal-Interlomas. Modernas vialidades conectan con las mejores zonas residenciales y servicios de la CDMX. A muy pocos minutos de Santa Fe, Bosques, Interlomas, Polanco y Aeropuerto internacional de Toluca.\n\n**Esquemas de Pago:**\n• 30% enganche, 70% a la entrega\n• 10% de enganche, 90% a 12 meses\n\n**Tabla de Descuentos:**\n• Contado: 10% de descuento\n• 12 mensualidades: 5% de descuento",
    features: [
      "Diseño exclusivo por Pininfarina",
      "Edificio clase A+ con certificación LEED",
      "Oficinas desde 47.18 m²",
      "Altura entrepisos 4.5 m",
      "Vistas panorámicas a Bosque Real e Interlomas",
      "Plantas desde 1,270 m²",
      "Eficiencia al 85%",
      "1 cajón cada 30 m²",
      "6 Elevadores inteligentes de alta velocidad",
      "Elevador VIP"
    ],
    amenities: [
      "Escaleras de emergencia presurizadas",
      "Seguridad 24/7 CCTV",
      "Sistema de prevención contra incendios",
      "Sistema de aire acondicionado",
      "Amenidades en el edificio",
      "A menos de 1 km del túnel Bosque Real-Interlomas",
      "Cerca de Santa Fe, Bosques, Interlomas y Polanco",
      "Esquemas de pago flexibles con descuentos"
    ],
    gallery: [oficinaPininfarina1, oficinaPininfarina2, oficinaPininfarina3, oficinaPininfarina4, oficinaPininfarina5, oficinaPininfarina6, oficinaPininfarina7, oficinaPininfarinaPlan],
    youtubeVideoId: undefined
  },
  "r25": {
    id: "r25",
    title: "Oficina / Bodega en Renta – Moliere, Polanco",
    location: "Moliere, Polanco",
    price: "$140,000",
    priceType: "Renta mensual + 10% mantenimiento + IVA",
    area: "247 m²",
    bedrooms: 0,
    bathrooms: 5,
    parking: 4,
    imageUrl: oficinaMoliere2_1,
    featured: true,
    description: "Ubicada en una de las calles más corporativas y exclusivas de Polanco, esta oficina de 247 m² en un solo nivel ofrece el espacio ideal para empresas que buscan presencia, funcionalidad y ubicación estratégica.\n\nSu ubicación sobre Moliere, a pasos de Av. Presidente Masaryk y principales corredores corporativos, brinda conectividad inmediata, prestigio de marca y comodidad para colaboradores y clientes.\n\nIdeal para corporativos, bodega, firmas legales, consultorios, despachos financieros o empresas que buscan posicionarse en el corazón de Polanco.",
    features: [
      "247 m² perfectamente distribuidos",
      "Piso completo en un solo nivel",
      "5 baños",
      "4 cajones de estacionamiento",
      "Cocineta con barra de granito",
      "Vigilancia 24 horas",
      "Elevador",
      "Lobby corporativo"
    ],
    amenities: [
      "Seguridad 24/7",
      "A pasos de Av. Presidente Masaryk",
      "Corredores corporativos principales",
      "Conectividad inmediata",
      "Prestigio de marca",
      "1 mes de renta anticipada",
      "2 depósitos",
      "Aval requerido",
      "1 mes de gracia"
    ],
    gallery: [oficinaMoliere2_1, oficinaMoliere2_2, oficinaMoliere2_3, oficinaMoliere2_4, oficinaMoliere2_5, oficinaMoliere2_6, oficinaMoliere2_7, oficinaMoliere2_8, oficinaMoliere2_9, oficinaMoliere2_10],
    youtubeVideoId: undefined
  },
  "r26": {
    id: "r26",
    title: "Oficina en Patriotismo con Vistas Panorámicas",
    location: "Condesa, Hipódromo",
    price: "$42,000 MXN",
    priceType: "Renta mensual",
    area: "120 m²",
    bedrooms: 0,
    bathrooms: 2,
    parking: 2,
    imageUrl: oficinaPatriotismo1,
    featured: true,
    description: "Oficina disponible en renta en la Condesa, Hipódromo. Cuenta con 120 m², ideal para adaptar a las necesidades de tu empresa. Dispone de 2 baños y 2 lugares de estacionamiento. Se ubica en el piso 7 y cuenta con disponibilidad inmediata.\n\nSaliendo de metro Patriotismo, se quedan muy cerca opciones de transporte público, como estaciones de Metro y Metrobús, además de fácil acceso a avenidas principales.\n\nLa zona ofrece una amplia gama de servicios, desde supermercados y bancos hasta restaurantes y centros de entretenimiento. También cuenta con parques y espacios verdes, como el Parque México, ideales para disfrutar al aire libre.",
    features: [
      "120 m² de superficie",
      "Vistas panorámicas",
      "Piso 7",
      "2 baños",
      "2 lugares de estacionamiento",
      "Disponibilidad inmediata",
      "Excelente iluminación natural",
      "Espacio abierto para adaptar"
    ],
    amenities: [
      "Seguridad",
      "Elevador",
      "Acceso a transporte público (Metro y Metrobús)",
      "Cerca de avenidas principales",
      "Zona de servicios y restaurantes",
      "Cerca de Parque México"
    ],
    gallery: [oficinaPatriotismo1, oficinaPatriotismo2, oficinaPatriotismo3, oficinaPatriotismo4, oficinaPatriotismo5, oficinaPatriotismo6, oficinaPatriotismo7, oficinaPatriotismo8, oficinaPatriotismo9],
    youtubeVideoId: undefined
  },
  "r27": {
    id: "r27",
    title: "Oficina en Renta – Patriotismo, Condesa",
    location: "Condesa, Hipódromo",
    price: "$27,000 MXN",
    priceType: "Renta mensual",
    area: "77 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaPatriotismo77_1,
    featured: true,
    description: "Oficina disponible en renta en la Condesa, Hipódromo. Cuenta con 77 m², ideal para adaptar a las necesidades de tu empresa. Dispone de 1 baño y 1 lugar de estacionamiento. Se ubica en el piso 8.5 y cuenta con disponibilidad inmediata.\n\nSaliendo de metro Patriotismo, se quedan muy cerca opciones de transporte público, como estaciones de Metro y Metrobús, además de fácil acceso a avenidas principales.\n\nLa zona ofrece una amplia gama de servicios, desde supermercados y bancos hasta restaurantes y centros de entretenimiento. También cuenta con parques y espacios verdes, como el Parque México, ideales para disfrutar al aire libre.",
    features: [
      "77 m² de superficie",
      "Piso 8.5",
      "1 baño",
      "1 lugar de estacionamiento",
      "Disponibilidad inmediata",
      "Excelente iluminación natural",
      "Espacio abierto para adaptar",
      "Vistas a la ciudad"
    ],
    amenities: [
      "Seguridad",
      "Elevador",
      "Acceso a transporte público (Metro y Metrobús)",
      "Cerca de avenidas principales",
      "Zona de servicios y restaurantes",
      "Cerca de Parque México"
    ],
    gallery: [oficinaPatriotismo77_1, oficinaPatriotismo77_2, oficinaPatriotismo77_3, oficinaPatriotismo77_4, oficinaPatriotismo77_5, oficinaPatriotismo77_6, oficinaPatriotismo77_7, oficinaPatriotismo77_8],
    youtubeVideoId: undefined
  },
  "r28": {
    id: "r28",
    title: "Oficina en Renta – Diagonal Patriotismo, Condesa",
    location: "Diagonal Patriotismo 12, Condesa",
    price: "$54,000 MXN",
    priceType: "Renta mensual",
    area: "140 m²",
    bedrooms: 0,
    bathrooms: 3,
    parking: 1,
    imageUrl: diagonalPatriotismo1,
    featured: true,
    description: "Oficina en renta ubicada en Diagonal Patriotismo 12, en la zona de la Condesa. Cuenta con 140 m² distribuidos en 5 privados, cocina equipada y 3 baños. Incluye 1 lugar de estacionamiento.\n\nSe ubica en el piso 8 con excelentes vistas panorámicas a la ciudad. La zona cuenta con fácil acceso a transporte público, restaurantes, bancos y servicios.\n\nIdeal para empresas que buscan un espacio funcional y bien ubicado en una de las zonas con mayor demanda de Ciudad de México.",
    features: [
      "140 m² de superficie",
      "Piso 8",
      "5 privados",
      "Cocina equipada",
      "3 baños",
      "1 lugar de estacionamiento",
      "Vistas panorámicas",
      "Disponibilidad inmediata"
    ],
    amenities: [
      "Seguridad",
      "Elevador",
      "Acceso a transporte público (Metro Patriotismo)",
      "Cerca de avenidas principales",
      "Zona de restaurantes y servicios",
      "Cerca de Parque México"
    ],
    gallery: [diagonalPatriotismo1, diagonalPatriotismo2, diagonalPatriotismo3, diagonalPatriotismo4],
    youtubeVideoId: undefined
  },
  "s7": {
    id: "s7",
    title: "Oficina en Venta – Yama Pedregal",
    location: "Pedregal",
    price: "$5,500,000 MXN",
    priceType: "Venta",
    area: "73.5 m²",
    bedrooms: 0,
    bathrooms: 0,
    parking: 2,
    imageUrl: oficinaYama1,
    featured: true,
    description: "Oficina en venta en el corporativo Yama Pedregal, un desarrollo moderno con accesos fáciles desde la avenida principal. Cuenta con 73.5 m² en obra gris, ideal para adaptar a las necesidades de tu empresa o como inversión.\n\nSe ubica en el piso 10 con vistas panorámicas. Dispone de 2 lugares de estacionamiento y entrega inmediata.\n\nEl corporativo cuenta con amenidades de primer nivel, incluyendo terraza rooftop con área lounge y sala de juntas equipada.",
    features: [
      "73.5 m² de superficie",
      "Piso 10 con vistas panorámicas",
      "Obra gris – listo para adaptar",
      "2 lugares de estacionamiento",
      "Entrega inmediata",
      "Corporativo moderno",
      "Accesos fáciles desde avenida principal",
      "Ideal para inversión o uso propio"
    ],
    amenities: [
      "Terraza rooftop con área lounge",
      "Sala de juntas equipada",
      "Seguridad 24/7",
      "Elevador",
      "Estacionamiento techado",
      "Acceso a transporte público"
    ],
    gallery: [oficinaYama1, oficinaYama2, oficinaYama3, oficinaYama4, oficinaYama5, oficinaYama6, oficinaYama7, oficinaYama8],
    youtubeVideoId: undefined
  },
  "s8": {
    id: "s8",
    title: "Oficina en Venta – San Jerónimo, CDMX",
    location: "San Jerónimo, a una cuadra de Periférico Sur",
    price: "$6,500,000",
    priceType: "MXN",
    area: "128 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    imageUrl: oficinaSanjeronimo1,
    featured: true,
    description: "Excelente oportunidad de inversión o para establecer tu empresa en una zona corporativa estratégica del sur de la Ciudad de México.\n\nEsta oficina cuenta con 128 m² de superficie y una distribución funcional con 5 privados, ideal para despachos, consultorías, empresas de tecnología, firmas legales o corporativos que buscan un espacio profesional y bien ubicado.\n\nUbicada en San Jerónimo, a una cuadra de Periférico Sur, con acceso inmediato a importantes puntos de la ciudad como Hospital Ángeles del Pedregal, Artz Pedregal, Perisur y la Supervía, lo que permite una excelente conectividad para clientes y colaboradores.\n\nIdeal para empresas que buscan ubicación, funcionalidad y una excelente proyección corporativa en el sur de la CDMX.",
    features: [
      "128 m² de superficie",
      "Piso 3",
      "5 privados",
      "1 baño",
      "2 cajones de estacionamiento",
      "Distribución funcional",
      "Excelente iluminación",
      "A una cuadra de Periférico Sur"
    ],
    amenities: [
      "8 salas de juntas totalmente equipadas",
      "Salón VIP para reuniones ejecutivas",
      "Valet parking",
      "Áreas comunes",
      "Elevador",
      "Cerca de Hospital Ángeles del Pedregal",
      "Acceso inmediato a Artz Pedregal y Perisur",
      "Conectividad con la Supervía"
    ],
    gallery: [oficinaSanjeronimo1, oficinaSanjeronimo2, oficinaSanjeronimo3, oficinaSanjeronimo4, oficinaSanjeronimo5, oficinaSanjeronimo6, oficinaSanjeronimo7, oficinaSanjeronimo8, oficinaSanjeronimo9, oficinaSanjeronimo10],
    youtubeVideoId: undefined
  },
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
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  // Get rental properties for navigation
  const rentalPropertyIds = ["r1", "r3", "r7", "r8", "r9", "r11", "r14", "r15", "r16", "r17", "r18", "r19", "r20", "r21", "r22", "r23"];
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
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <KGroupLogo />
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartir</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Favorito</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Gallery - Inmuebles24 Style Mosaic */}
      <div className="w-full bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2">
            {/* Main Large Image */}
            <div 
              className="md:col-span-3 md:row-span-2 aspect-[16/9] md:aspect-[16/10] overflow-hidden cursor-pointer relative group"
              onClick={() => {
                setSelectedImage(property.gallery[0]);
                setCurrentImageIndex(0);
                setIsModalOpen(true);
              }}
            >
              <img 
                src={property.gallery[0]} 
                alt={`${property.title} - imagen principal`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Square className="w-4 h-4" />
                Ver {property.gallery.length} fotos
              </div>
            </div>
            
            {/* Side Thumbnails */}
            <div className="hidden md:grid grid-rows-2 gap-1 md:gap-2">
              {property.gallery.slice(1, 3).map((image, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] overflow-hidden cursor-pointer relative group"
                  onClick={() => {
                    setSelectedImage(image);
                    setCurrentImageIndex(index + 1);
                    setIsModalOpen(true);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - imagen ${index + 2}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Thumbnail Strip */}
      <div className="md:hidden overflow-x-auto bg-muted pb-2">
        <div className="flex gap-1 px-4">
          {property.gallery.map((image, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-16 h-16 overflow-hidden cursor-pointer rounded border-2 transition-colors ${
                index === currentGalleryIndex ? 'border-primary' : 'border-transparent'
              }`}
              onClick={() => {
                setSelectedImage(image);
                setCurrentImageIndex(index);
                setIsModalOpen(true);
              }}
            >
              <img 
                src={image} 
                alt={`Miniatura ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/rent-catalog")} 
          className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al listado
        </Button>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Price Bar - Prominent like Inmuebles24 */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-3xl sm:text-4xl font-semibold text-primary">
                    {property.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {property.priceType}
                  </div>
                </div>
                {property.featured && (
                  <Badge className="bg-amber-500 text-white hover:bg-amber-600 self-start">
                    ⭐ DESTACADA
                  </Badge>
                )}
              </div>
            </div>

            {/* Property Title & Location */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">{property.location}</span>
              </div>
            </div>

            {/* Property Stats - Inmuebles24 Style */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.area}</div>
                  <div className="text-xs text-muted-foreground">Superficie</div>
                </div>
                {property.bedrooms > 0 && (
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <BedDouble className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-semibold">{property.bedrooms}</div>
                    <div className="text-xs text-muted-foreground">Recámaras</div>
                  </div>
                )}
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.bathrooms}</div>
                  <div className="text-xs text-muted-foreground">Baños</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.parking}</div>
                  <div className="text-xs text-muted-foreground">Estacionamientos</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-primary rounded-full" />
                Descripción
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Features */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  Características
                </h2>
                <div className="space-y-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-accent rounded-full" />
                  Amenidades
                </h2>
                <div className="space-y-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            {property.youtubeVideoId && (
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  Video Tour
                </h2>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${property.youtubeVideoId}`}
                    title="Video de la propiedad"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}

            {/* Property Navigation - Only for rental properties */}
            {isRentalProperty && (
              <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap py-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const prevIndex = currentPropertyIndex > 0 ? currentPropertyIndex - 1 : rentalPropertyIds.length - 1;
                    navigate(`/property/${rentalPropertyIds[prevIndex]}`);
                  }}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Anterior
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {currentPropertyIndex + 1} de {rentalPropertyIds.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const nextIndex = currentPropertyIndex < rentalPropertyIds.length - 1 ? currentPropertyIndex + 1 : 0;
                    navigate(`/property/${rentalPropertyIds[nextIndex]}`);
                  }}
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Right Column - Contact Card - Inmuebles24 Style */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 space-y-4">
              {/* Main Contact Card */}
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-5 space-y-5">
                  {/* Agent Info */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">KG</span>
                    </div>
                    <div>
                      <div className="font-semibold">K Group</div>
                      <div className="text-xs text-muted-foreground">Bienes Raíces Premium</div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white" 
                      size="lg"
                      onClick={() => {
                        const message = `Hola, me interesa la propiedad: ${property.title} - ${property.price}`;
                        const phone = "525560808129";
                        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                    
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a href="tel:+525560808129">
                        <Phone className="w-4 h-4 mr-2" />
                        (55) 6080-8129
                      </a>
                    </Button>
                    
                  </div>

                  {/* Quick Info */}
                  <div className="pt-4 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground">
                      Respuesta garantizada en menos de 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Property Summary Mini Card */}
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                    <div className="text-xs text-muted-foreground mb-3">{property.priceType}</div>
                    <div className="flex justify-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        {property.parking}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            
            {/* Previous Image Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => {
                const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : property.gallery.length - 1;
                setCurrentImageIndex(newIndex);
                setSelectedImage(property.gallery[newIndex]);
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {/* Next Image Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => {
                const newIndex = currentImageIndex < property.gallery.length - 1 ? currentImageIndex + 1 : 0;
                setCurrentImageIndex(newIndex);
                setSelectedImage(property.gallery[newIndex]);
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <img
              src={selectedImage}
              alt="Imagen completa"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {property.gallery.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default PropertyDetails;