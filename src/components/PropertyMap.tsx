import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  featured?: boolean;
}

interface PropertyMapProps {
  properties: Property[];
  mapboxToken: string;
}

const PropertyMap = ({ properties, mapboxToken }: PropertyMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Sample coordinates for Mexico City properties
  const propertyCoordinates: Record<string, [number, number]> = {
    "Polanco, Ciudad de México": [-99.1944, 19.4326],
    "Santa Fe, Ciudad de México": [-99.2576, 19.3598],
    "Zona Rosa, Ciudad de México": [-99.1677, 19.4284],
    "Roma Norte, Ciudad de México": [-99.1677, 19.4284],
    "Condesa, Ciudad de México": [-99.1677, 19.4084],
    "Del Valle, Ciudad de México": [-99.1677, 19.3984],
    "Coyoacán, Ciudad de México": [-99.1628, 19.3467],
    "Ciudad Satélite, Estado de México": [-99.2369, 19.5094]
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-99.1332, 19.4326], // Mexico City center
      zoom: 11,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add property markers
    properties.forEach((property) => {
      const coords = propertyCoordinates[property.location];
      if (coords) {
        // Create popup content
        const popupHTML = `
          <div class="max-w-sm">
            <img src="${property.imageUrl}" alt="${property.title}" class="w-full h-32 object-cover rounded-t-lg" />
            <div class="p-3">
              <h3 class="font-semibold text-lg mb-1">${property.title}</h3>
              <p class="text-gray-600 text-sm mb-2">${property.location}</p>
              <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-xl text-blue-600">${property.price}</span>
                <span class="text-gray-500">${property.area}</span>
              </div>
              <div class="flex gap-4 text-sm text-gray-600">
                <span>${property.bedrooms} rec</span>
                <span>${property.bathrooms} baños</span>
              </div>
            </div>
          </div>
        `;

        const popup = new mapboxgl.Popup({ 
          offset: 25,
          maxWidth: '300px'
        }).setHTML(popupHTML);

        // Create custom marker
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.cssText = `
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${property.featured ? '#000' : '#666'};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        `;
        markerElement.textContent = property.featured ? '★' : '●';

        new mapboxgl.Marker(markerElement)
          .setLngLat(coords)
          .setPopup(popup)
          .addTo(map.current!);
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [properties, mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted border border-border rounded-lg">
        <p className="text-muted-foreground">Por favor ingresa tu token de Mapbox para ver el mapa</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-muted border border-border rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg">
        <p className="text-xs text-gray-600">
          {properties.length} propiedades en México
        </p>
      </div>
    </div>
  );
};

export default PropertyMap;