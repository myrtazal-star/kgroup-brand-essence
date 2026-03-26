import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { MapPin } from "lucide-react";

const GOOGLE_MAPS_API_KEY = "AIzaSyBvjh8UdCsQr2q5CTmCKUvVAKyzqc_ZD_c";

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a5a6e" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#8a8a9e" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1e2d23" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3a3a4e" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1a2b" }] },
];

interface PropertyLocationMapProps {
  lat: number;
  lng: number;
  title: string;
}

export const PropertyLocationMap = ({ lat, lng, title }: PropertyLocationMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  if (!isLoaded) {
    return (
      <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          Ubicación
        </h2>
        <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-muted-foreground animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <div className="w-1 h-5 bg-primary rounded-full" />
        Ubicación
      </h2>
      <div className="aspect-video overflow-hidden rounded-lg">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat, lng }}
          zoom={15}
          onLoad={onLoad}
          options={{
            styles: darkMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: true,
          }}
        >
          <MarkerF
            position={{ lat, lng }}
            title={title}
          />
        </GoogleMap>
      </div>
    </div>
  );
};
