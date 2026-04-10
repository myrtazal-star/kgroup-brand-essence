import { KGroupLogo } from "@/components/KGroupLogo";
import { PropertyCatalog } from "@/components/PropertyCatalog";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import oficinaEn1 from "@/assets/oficina-en-1.jpg";
import oficinaHomero1 from "@/assets/oficina-homero-1.jpg";

import oficinaEn2_1 from "@/assets/oficina-en2-1.jpg";
import oficinaEn3_1 from "@/assets/oficina-en3-1.jpg";
import oficinaMoliere1 from "@/assets/oficina-moliere-1.jpg";
import espacioMasaryk1 from "@/assets/espacio-masaryk-1.jpg";
import oficinaVinkel1 from "@/assets/oficina-vinkel-1.jpg";

import oficinaReforma1 from "@/assets/oficina-reforma-1.jpg";
import oficinaJuarez1 from "@/assets/oficina-juarez-1.jpg";
import oficinaMoliere2_1 from "@/assets/oficina-moliere2-1.jpg";
import oficinaPatriotismo1 from "@/assets/oficina-patriotismo-1.jpg";
import oficinaPatriotismo77_1 from "@/assets/oficina-patriotismo-77-1.jpg";
import diagonalPatriotismo1 from "@/assets/diagonal-patriotismo-1.jpg";
import oficinaTamaulipas1 from "@/assets/oficina-tamaulipas-1.jpg";
import oficinaDiagPat1 from "@/assets/oficina-diagonal-pat-1.jpg";
import oficinaAnzures1 from "@/assets/oficina-anzures-1.jpg";
import oficinaAnzures2_1 from "@/assets/oficina-anzures2-1.jpg";
import oficinaWorklab1 from "@/assets/oficina-worklab-condesa-1.jpg";
import oficinaWorklab2_1 from "@/assets/oficina-worklab2-1.jpg";
import oficinaWorklab3_1 from "@/assets/oficina-worklab3-1.jpg";
import oficinaArquimedes1 from "@/assets/oficina-arquimedes-1.jpg";
import oficinaMoliere3_3 from "@/assets/oficina-moliere3-3.jpg";

const RentCatalog = () => {
  const rentalProperties = [
    {
      id: "r7",
      title: "Oficina en Polanco – Ejercito Nacional",
      location: "Polanco",
      price: "$75,000/mes",
      area: "215 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn1
    },
    {
      id: "r11",
      title: "Oficina en renta – Homero, Polanco",
      location: "Polanco · Homero",
      price: "$45,000/mes",
      area: "150 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaHomero1
    },
    {
      id: "r17",
      title: "Oficina en renta – Ejercito Nacional, Polanco",
      location: "Polanco",
      price: "$40,000/mes",
      area: "70 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn2_1
    },
    {
      id: "r18",
      title: "Oficina en Renta – Ejercito Nacional, 5 Privados",
      location: "Polanco",
      price: "$60,000/mes",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaEn3_1
    },
    {
      id: "r19",
      title: "Oficina en Renta – Av. Moliere, Polanco",
      location: "Polanco · Piso 5",
      price: "$58,000/mes",
      area: "288 m²",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: oficinaMoliere1,
      featured: true
    },
    {
      id: "r20",
      title: "Espacio en Renta – Av. Presidente Masaryk",
      location: "Polanco · Masaryk",
      price: "$85,000/mes",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 4,
      imageUrl: espacioMasaryk1,
      featured: true
    },
    {
      id: "r21",
      title: "Oficina en Renta – Torre Vinkel, Monterrey",
      location: "Monterrey · Piso 18",
      price: "$130,000/mes",
      area: "170 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaVinkel1,
      featured: true
    },
    {
      id: "r23",
      title: "Oficina Corporativa – Prol. Paseo de la Reforma",
      location: "Reforma–Bosques · Piso 10",
      price: "$150,000/mes",
      area: "Consultar",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaReforma1,
      featured: true
    },
    {
      id: "r24",
      title: "Oficina Amueblada – Juárez",
      location: "Juárez · Piso 6",
      price: "$53,000/mes",
      area: "105 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaJuarez1,
      featured: true
    },
    {
      id: "r25",
      title: "Oficina / Bodega en Renta – Moliere, Polanco",
      location: "Polanco · Moliere",
      price: "$140,000/mes",
      area: "247 m²",
      bedrooms: 0,
      bathrooms: 5,
      imageUrl: oficinaMoliere2_1,
      featured: true
    },
    {
      id: "r26",
      title: "Oficina en Patriotismo con Vistas Panorámicas",
      location: "Condesa · Hipódromo",
      price: "$42,000/mes",
      area: "120 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaPatriotismo1,
      featured: true
    },
    {
      id: "r27",
      title: "Oficina en Renta – Patriotismo, Condesa",
      location: "Condesa · Hipódromo",
      price: "$27,000/mes",
      area: "77 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaPatriotismo77_1,
      featured: true
    },
    {
      id: "r28",
      title: "Oficina en Renta – Diagonal Patriotismo, Condesa",
      location: "Condesa · Piso 8",
      price: "$54,000/mes",
      area: "140 m²",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: diagonalPatriotismo1,
      featured: true
    },
    {
      id: "r29",
      title: "Oficina en Renta – Tamaulipas, Condesa",
      location: "Condesa · Piso 14",
      price: "$59,500/mes",
      area: "180 m²",
      bedrooms: 0,
      bathrooms: 2,
      imageUrl: oficinaTamaulipas1,
      featured: true
    },
    {
      id: "r30",
      title: "Oficina en Renta – Diagonal Patriotismo, Condesa",
      location: "Condesa · Piso 7",
      price: "$85,000/mes + IVA",
      area: "288 m²",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaDiagPat1,
      featured: true
    },
    {
      id: "r31",
      title: "Oficina en Renta – Mariano Escobedo, Anzures",
      location: "Anzures · Piso 1",
      price: "$39,000/mes",
      area: "200 m²",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaAnzures1,
      featured: true
    },
    {
      id: "r32",
      title: "Oficina en Renta – Mariano Escobedo, Anzures (P6)",
      location: "Anzures · Piso 6",
      price: "$45,000/mes",
      area: "200 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaAnzures2_1,
      featured: true
    },
    {
      id: "r33",
      title: "Oficina en Renta – Work Lab Condesa",
      location: "Condesa · Insurgentes 427",
      price: "$50,000/mes",
      area: "87 m²",
      bedrooms: 0,
      bathrooms: 0,
      imageUrl: oficinaWorklab1,
      featured: true
    },
    {
      id: "r34",
      title: "Oficina en Renta – Work Lab Condesa (Obra Gris)",
      location: "Condesa · Insurgentes 427",
      price: "$55,000/mes",
      area: "87 m²",
      bedrooms: 0,
      bathrooms: 0,
      imageUrl: oficinaWorklab2_1,
      featured: true
    },
    {
      id: "r35",
      title: "Oficina en Renta – Work Lab Condesa, Ofic. 405 (Obra Gris)",
      location: "Condesa · Insurgentes 427",
      price: "$64,000/mes",
      area: "106 m²",
      bedrooms: 0,
      bathrooms: 0,
      imageUrl: oficinaWorklab3_1,
      featured: true
    },
    {
      id: "r36",
      title: "Oficina en Renta – Plaza Arquímedes, Polanco",
      location: "Polanco · Piso 2",
      price: "$44,000/mes",
      area: "93 m²",
      bedrooms: 0,
      bathrooms: 1,
      imageUrl: oficinaArquimedes1,
      featured: true
    },
    {
      id: "r37",
      title: "Oficina en Renta – Moliere, Polanco",
      location: "Polanco · Piso 4",
      price: "$32,000/mes",
      area: "146 m²",
      bedrooms: 0,
      bathrooms: 3,
      imageUrl: oficinaMoliere3_3,
      featured: true
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <KGroupLogo variant="full" size="md" />
            </Link>
            
            <nav className="hidden md:flex items-center gap-12">
              <Link to="/rent-catalog" className="text-caption text-foreground">
                Renta
              </Link>
              <Link to="/sale-catalog" className="text-caption text-muted-foreground hover:text-foreground transition-colors">
                Venta
              </Link>
              <Link to="/services" className="text-caption text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
            </nav>

            <Link to="/" className="flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        <PropertyCatalog
          title="PROPIEDADES EN RENTA"
          subtitle="Espacios comerciales y oficinas disponibles para renta en las mejores ubicaciones de Ciudad de México"
          properties={rentalProperties}
          type="rent"
        />
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

export default RentCatalog;