import { useState, useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader, OverlayViewF, OverlayView } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { ScrollRevealSection } from "./ScrollRevealSection";
import { GoldDivider } from "./GoldDivider";
import { MapPin, ArrowRight, X } from "lucide-react";

interface MapProperty {
  id: string;
  name: string;
  zone: string;
  price: string;
  lat: number;
  lng: number;
  imageUrl: string;
}

const GOOGLE_MAPS_API_KEY = "AIzaSyBvjh8UdCsQr2q5CTmCKUvVAKyzqc_ZD_c";

const mapProperties: MapProperty[] = [
  { id: "r16", name: "Torre Porsche", zone: "Santa Fe", price: "$52,000/mes", lat: 19.3590, lng: -99.2743, imageUrl: "" },
  { id: "s4", name: "Be Grand Reforma", zone: "Tabacalera", price: "$12,500,000 MXN", lat: 19.4350, lng: -99.1530, imageUrl: "" },
  { id: "r7", name: "Ejercito Nacional", zone: "Polanco", price: "$75,000/mes", lat: 19.4370, lng: -99.1920, imageUrl: "" },
  { id: "r11", name: "Homero, Polanco", zone: "Polanco", price: "$45,000/mes", lat: 19.4340, lng: -99.1960, imageUrl: "" },
  { id: "r17", name: "Ejercito Nacional II", zone: "Polanco", price: "$40,000/mes", lat: 19.4375, lng: -99.1900, imageUrl: "" },
  { id: "r18", name: "Ejercito Nacional III", zone: "Polanco", price: "$60,000/mes", lat: 19.4365, lng: -99.1910, imageUrl: "" },
  { id: "r19", name: "Av. Moliere", zone: "Polanco", price: "$58,000/mes", lat: 19.4330, lng: -99.1990, imageUrl: "" },
  { id: "r20", name: "Av. Masaryk", zone: "Polanco", price: "$85,000/mes", lat: 19.4335, lng: -99.1940, imageUrl: "" },
  { id: "r21", name: "Torre Vinkel", zone: "Monterrey", price: "$130,000/mes", lat: 25.6580, lng: -100.3490, imageUrl: "" },
  { id: "r23", name: "Prol. Paseo de la Reforma", zone: "Reforma", price: "$150,000/mes", lat: 19.3980, lng: -99.2580, imageUrl: "" },
  { id: "r24", name: "Juárez", zone: "Juárez", price: "$53,000/mes", lat: 19.4280, lng: -99.1610, imageUrl: "" },
  { id: "s6", name: "Torre Designo by Pininfarina", zone: "Interlomas", price: "Desde $5,306,436 MXN", lat: 19.3960, lng: -99.2930, imageUrl: "" },
  { id: "r25", name: "Moliere, Polanco", zone: "Polanco", price: "$140,000/mes", lat: 19.4325, lng: -99.2000, imageUrl: "" },
  { id: "r26", name: "Patriotismo, Condesa", zone: "Condesa", price: "$42,000/mes", lat: 19.4120, lng: -99.1760, imageUrl: "" },
  { id: "r27", name: "Patriotismo 77", zone: "Condesa", price: "$27,000/mes", lat: 19.4115, lng: -99.1765, imageUrl: "" },
  { id: "r22", name: "Lomas de Chapultepec", zone: "Lomas", price: "$85,000/mes", lat: 19.4230, lng: -99.2120, imageUrl: "" },
  { id: "s7", name: "Yama Pedregal", zone: "Pedregal", price: "$5,500,000 MXN", lat: 19.3130, lng: -99.1950, imageUrl: "" },
];

const zones = ["Todas", "Polanco", "Santa Fe", "Reforma", "Condesa", "Juárez", "Lomas", "Interlomas", "Pedregal", "Monterrey", "Tabacalera"];

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a5a6e" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#8a8a9e" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1e2d23" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#333348" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3a3a4e" }] },
];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "16px",
};

const defaultCenter = { lat: 19.4100, lng: -99.2000 };

const CustomMarker = ({
  property,
  isActive,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  property: MapProperty;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) => (
  <OverlayViewF
    position={{ lat: property.lat, lng: property.lng }}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  >
    <div
      className="relative cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ transform: "translate(-50%, -100%)" }}
    >
      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[220px] animate-fade-in z-50"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="rounded-xl p-4 shadow-2xl border"
            style={{
              background: "linear-gradient(135deg, hsl(230 15% 12%), hsl(230 15% 16%))",
              borderColor: "hsl(36 40% 40% / 0.3)",
            }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-1"
              style={{ color: "#C6A15B", fontFamily: "'Inter', sans-serif" }}
            >
              {property.zone}
            </p>
            <p
              className="text-sm font-medium mb-1"
              style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              {property.name}
            </p>
            <p className="text-xs mb-3" style={{ color: "#9a9aae", fontFamily: "'Inter', sans-serif" }}>
              Desde {property.price}
            </p>
            <span
              className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-md inline-flex items-center gap-1.5"
              style={{
                background: "hsl(36 40% 40% / 0.15)",
                color: "#C6A15B",
                border: "1px solid hsl(36 40% 40% / 0.25)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Ver Oficina <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          {/* Arrow */}
          <div
            className="w-3 h-3 mx-auto -mt-1.5 rotate-45"
            style={{ background: "hsl(230 15% 14%)", borderRight: "1px solid hsl(36 40% 40% / 0.3)", borderBottom: "1px solid hsl(36 40% 40% / 0.3)" }}
          />
        </div>
      )}

      {/* Pin */}
      <div
        className="flex items-center justify-center transition-all duration-300"
        style={{
          width: isActive || isHovered ? "36px" : "28px",
          height: isActive || isHovered ? "36px" : "28px",
        }}
      >
        <div
          className="rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          style={{
            width: "100%",
            height: "100%",
            background: isActive
              ? "linear-gradient(135deg, #C6A15B, #D4B36A)"
              : isHovered
              ? "linear-gradient(135deg, #C6A15B, #D4B36A)"
              : "linear-gradient(135deg, hsl(36 30% 35%), hsl(36 30% 45%))",
            boxShadow: isActive || isHovered
              ? "0 0 20px hsl(36 40% 40% / 0.5), 0 4px 12px rgba(0,0,0,0.4)"
              : "0 2px 8px rgba(0,0,0,0.5)",
            border: `2px solid ${isActive || isHovered ? "#D4B36A" : "hsl(36 30% 50% / 0.5)"}`,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: isActive || isHovered ? "8px" : "6px",
              height: isActive || isHovered ? "8px" : "6px",
              background: "#1a1a2e",
            }}
          />
        </div>
      </div>
    </div>
  </OverlayViewF>
);

export const InteractiveMap = () => {
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState("Todas");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const filteredProperties = useMemo(
    () => (selectedZone === "Todas" ? mapProperties : mapProperties.filter((p) => p.zone === selectedZone)),
    [selectedZone]
  );

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const handleMarkerClick = useCallback(
    (property: MapProperty) => {
      setActiveId(property.id);
      map?.panTo({ lat: property.lat, lng: property.lng });
      map?.setZoom(15);
    },
    [map]
  );

  const handleViewProperty = (id: string) => {
    if (id === "nauma-interlomas") {
      navigate("/nauma-interlomas");
    } else {
      navigate(`/property/${id}`);
    }
  };

  const activeProperty = mapProperties.find((p) => p.id === activeId);

  if (!isLoaded) {
    return (
      <section className="py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="aspect-[16/9] rounded-2xl bg-muted/10 animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-[100px] md:py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollRevealSection className="mb-12 md:mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C6A15B", fontFamily: "'Inter', sans-serif" }}
          >
            Mapa Interactivo
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.5rem] uppercase tracking-[0.04em] leading-[1.1] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#F5F3EF" }}
          >
            Ubicaciones Estratégicas
          </h2>
          <GoldDivider className="mb-4" />
          <p className="text-muted-foreground font-light text-sm tracking-wide max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
            Oficinas en los puntos más relevantes de CDMX.
          </p>
        </ScrollRevealSection>

        {/* Zone Filters */}
        <ScrollRevealSection className="mb-8" delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => {
                  setSelectedZone(zone);
                  setActiveId(null);
                  if (zone === "Todas" && map) {
                    map.panTo(defaultCenter);
                    map.setZoom(12);
                  } else if (zone === "Monterrey" && map) {
                    map.panTo({ lat: 25.658, lng: -100.349 });
                    map.setZoom(14);
                  }
                }}
                className="px-4 py-2 rounded-lg text-xs tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: selectedZone === zone ? "hsl(36 40% 40% / 0.2)" : "hsl(230 15% 14%)",
                  color: selectedZone === zone ? "#C6A15B" : "#8a8a9e",
                  border: `1px solid ${selectedZone === zone ? "hsl(36 40% 40% / 0.4)" : "hsl(230 15% 20%)"}`,
                }}
              >
                {zone}
              </button>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Map + Sidebar */}
        <ScrollRevealSection delay={0.15}>
          <div className="relative flex flex-col lg:flex-row gap-6">
            {/* Map */}
            <div
              className="flex-1 relative overflow-hidden"
              style={{
                height: "clamp(400px, 70vh, 680px)",
                borderRadius: "16px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px hsl(230 15% 18%)",
              }}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={12}
                onLoad={onLoad}
                options={{
                  styles: darkMapStyle,
                  disableDefaultUI: true,
                  zoomControl: true,
                  fullscreenControl: true,
                  zoomControlOptions: { position: 3 },
                  fullscreenControlOptions: { position: 7 },
                  gestureHandling: "greedy",
                }}
              >
                {filteredProperties.map((property) => (
                  <CustomMarker
                    key={property.id}
                    property={property}
                    isActive={activeId === property.id}
                    isHovered={hoveredId === property.id}
                    onHover={() => setHoveredId(property.id)}
                    onLeave={() => setHoveredId(null)}
                    onClick={() => handleMarkerClick(property)}
                  />
                ))}
              </GoogleMap>
            </div>

            {/* Sidebar Card */}
            {activeProperty && (
              <div
                className="lg:w-[320px] rounded-2xl p-6 animate-fade-in border flex flex-col"
                style={{
                  background: "linear-gradient(180deg, hsl(230 15% 11%), hsl(230 15% 9%))",
                  borderColor: "hsl(36 40% 40% / 0.2)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <p
                    className="text-xs tracking-[0.25em] uppercase"
                    style={{ color: "#C6A15B", fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeProperty.zone}
                  </p>
                  <button
                    onClick={() => setActiveId(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#F5F3EF" }}
                >
                  {activeProperty.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#C6A15B" }} />
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {activeProperty.zone}, Ciudad de México
                  </span>
                </div>

                <div
                  className="rounded-xl p-4 mb-6"
                  style={{ background: "hsl(36 40% 40% / 0.08)", border: "1px solid hsl(36 40% 40% / 0.15)" }}
                >
                  <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Desde
                  </p>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "#F5F3EF", fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeProperty.price}
                  </p>
                </div>

                <button
                  onClick={() => handleViewProperty(activeProperty.id)}
                  className="mt-auto w-full py-3.5 rounded-xl text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #C6A15B, #B8923F)",
                    color: "#1a1a2e",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Ver Oficina <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </ScrollRevealSection>

        {/* Properties List - Mobile */}
        <div className="lg:hidden mt-6">
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
            {filteredProperties.map((property) => (
              <button
                key={property.id}
                onClick={() => handleMarkerClick(property)}
                className="snap-start shrink-0 w-[200px] rounded-xl p-4 text-left transition-all duration-300 border"
                style={{
                  background: activeId === property.id ? "hsl(36 40% 40% / 0.1)" : "hsl(230 15% 12%)",
                  borderColor: activeId === property.id ? "hsl(36 40% 40% / 0.3)" : "hsl(230 15% 18%)",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "#C6A15B", fontFamily: "'Inter', sans-serif" }}
                >
                  {property.zone}
                </p>
                <p
                  className="text-sm mb-1 line-clamp-1"
                  style={{ color: "#F5F3EF", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  {property.name}
                </p>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {property.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
