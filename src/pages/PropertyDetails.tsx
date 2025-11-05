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
  "r2": {
    id: "r2",
    title: "Oficina PH de 2 niveles en Polanco",
    location: "Homero, Polanco",
    price: "$88,000",
    priceType: "Renta mensual",
    area: "200 m²",
    bedrooms: 6,
    bathrooms: 1.5,
    parking: 2,
    imageUrl: oficinaPh,
    featured: false,
    description: "Moderna oficina en penthouse de dos niveles ubicada en Polanco. Ideal para empresas creativas que buscan un espacio único y bien ubicado con excelente conectividad.",
    features: ["2 niveles", "Iluminación natural", "6 espacios de trabajo", "Cocina", "2.5 baños", "Consierge y seguridad 24/7", "Piso 7 PH", "Acepta mascotas"],
    amenities: ["Seguridad", "Elevador", "Estacionamiento", "Recepción"],
    gallery: [oficinaPh, oficinaPh1, oficinaPh2, oficinaPh3, oficinaPh4, oficinaPh5],
    youtubeVideoId: "z43UebPM2B4"
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
  "r10": {
    id: "r10",
    title: "Local en Insurgentes",
    location: "Avenida Insurgentes Sur, CDMX",
    price: "$60,000",
    priceType: "Renta mensual + IVA",
    area: "100 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: oficinaInsurgentes1,
    featured: false,
    description: "Espacio ideal para oficinas corporativas, consultorios o showrooms ejecutivos. Ubicado sobre Insurgentes Sur, con vista directa a la avenida y a solo dos cuadras del World Trade Center. Zona rodeada de comercios, bancos, restaurantes y vías principales — el punto perfecto para tu negocio.",
    features: [
      "100 m² en primer piso (mezzanine)",
      "Amplia vista hacia la avenida",
      "1 cajón de estacionamiento incluido",
      "Posibilidad de rentar más lugares ($650 mensuales c/u)",
      "Elevador",
      "Seguridad",
      "Excelente iluminación natural",
      "A 2 cuadras del World Trade Center"
    ],
    amenities: [
      "Seguridad 24/7",
      "Elevador",
      "Estacionamiento",
      "Ubicación sobre Insurgentes Sur",
      "Zona comercial con bancos y restaurantes",
      "Fácil acceso a vías principales"
    ],
    gallery: [oficinaInsurgentes1, oficinaInsurgentes2, oficinaInsurgentes3, oficinaInsurgentes4, oficinaInsurgentes5, oficinaInsurgentes6, oficinaInsurgentes7, oficinaInsurgentes8],
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
  "r12": {
    id: "r12",
    title: "Espacio comercial en Mariano Escobedo, Polanco",
    location: "Mariano Escobedo, Polanco",
    price: "$48,000",
    priceType: "Renta mensual + IVA",
    area: "120 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    imageUrl: localEscobedo1,
    featured: false,
    description: "Espacio comercial ubicado en Mariano Escobedo, una de las principales avenidas de Polanco. Ideal para oficinas, consultorios o comercios que buscan una ubicación estratégica con excelente visibilidad y conectividad en una de las zonas más exclusivas de CDMX.",
    features: [
      "1 cajón de estacionamiento",
      "Ubicación estratégica en Mariano Escobedo",
      "Espacio versátil y funcional",
      "Excelente iluminación natural",
      "Zona de alto tráfico peatonal y vehicular"
    ],
    amenities: [
      "Ubicación premium en Polanco",
      "Cerca de restaurantes y comercios",
      "Excelente conectividad",
      "Zona exclusiva de negocios",
      "Alta visibilidad"
    ],
    gallery: [localEscobedo1, localEscobedo2, localEscobedo3, localEscobedo4, localEscobedo5, localEscobedo6, localEscobedo7, localEscobedo8],
    youtubeVideoId: undefined
  },
  "r13": {
    id: "r13",
    title: "Oficina amueblada en Lomas de Chapultepec, Prado Norte",
    location: "Lomas de Chapultepec, Prado Norte",
    price: "$70,000",
    priceType: "Renta mensual",
    area: "140 m²",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    imageUrl: oficinaPn7,
    featured: false,
    description: "Oficina amueblada de 140 m², ubicada en una casa histórica adaptada para negocios de alto nivel. Cuenta con 6 espacios de trabajo, 4 privados, 1 baño, terraza y cocina equipada. Además, dispone de 2 cajones de estacionamiento techados y seguridad 24 horas. A pasos de Paseo de la Reforma y rodeada de restaurantes, despachos y embajadas. Ideal para abogados, arquitectos, consultores o firmas corporativas que buscan prestigio y ubicación.",
    features: ["Oficina amueblada", "140 m²", "6 espacios de trabajo", "4 privados", "1 baño", "Terraza", "Cocina equipada", "Casa histórica adaptada", "2 cajones techados"],
    amenities: ["Seguridad 24/7", "A pasos de Paseo de la Reforma", "Rodeada de restaurantes", "Zona de despachos y embajadas", "Ideal para profesionales"],
    gallery: [oficinaPn7, oficinaPn8, oficinaPn9, oficinaPn10],
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
    title: "Oficina Be Grand Reforma en Venta",
    location: "Lafragua #13, Col. Tabacalera, Cuauhtémoc",
    price: "$12,500,000",
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
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  // Get rental properties for navigation
  const rentalPropertyIds = ["r1", "r2", "r3", "r7", "r8", "r9", "r10", "r11", "r12", "r13"];
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
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate("/rent-catalog")} 
          className="mb-4 sm:mb-6 flex items-center gap-2 hover:bg-accent"
        >
          <ArrowLeft className="w-4 h-4" />
          Regresar
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image Gallery with Navigation */}
            <div className="relative">
              <div 
                className="aspect-[16/10] overflow-hidden bg-muted cursor-pointer rounded-lg"
                onClick={() => {
                  setSelectedImage(property.gallery[currentGalleryIndex]);
                  setCurrentImageIndex(currentGalleryIndex);
                  setIsModalOpen(true);
                }}
              >
                <img 
                  src={property.gallery[currentGalleryIndex]} 
                  alt={`${property.title} - imagen ${currentGalleryIndex + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12"
                onClick={() => {
                  const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : property.gallery.length - 1;
                  setCurrentGalleryIndex(newIndex);
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12"
                onClick={() => {
                  const newIndex = currentGalleryIndex < property.gallery.length - 1 ? currentGalleryIndex + 1 : 0;
                  setCurrentGalleryIndex(newIndex);
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentGalleryIndex + 1} / {property.gallery.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {property.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-square overflow-hidden bg-muted cursor-pointer rounded border-2 transition-colors ${
                    index === currentGalleryIndex ? 'border-primary' : 'border-transparent hover:border-primary/50'
                  }`}
                  onClick={() => {
                    setCurrentGalleryIndex(index);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - miniatura ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
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

              {/* YouTube Video */}
              {property.youtubeVideoId && (
                <div>
                  <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Video Tour</h2>
                  <div className="aspect-video overflow-hidden">
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
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => {
                      const message = "Hola, me interesa la propiedad que vi en su sitio web";
                      const phone = "525560808129";
                      const whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
                      window.location.href = whatsappUrl;
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar al WhatsApp
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