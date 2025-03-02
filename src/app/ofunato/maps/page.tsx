'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { shelters } from '../data/shelters';
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';

export default function ShelterMapPage() {
  // 大船渡市の中心座標
  const center = { lat: 39.0833, lng: 141.7083 };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <Heading as="h1" color="primary" className="mb-4">
          避難所マップ
        </Heading>
        <div className="h-[600px] w-full">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <Map
              zoom={13}
              center={center}
              gestureHandling="greedy"
              mapId="shelter-map"
            >
              {shelters.map((shelter) => (
                shelter.position && (
                  <Marker
                    key={shelter.id}
                    position={shelter.position}
                    title={shelter.name}
                  />
                )
              ))}
            </Map>
          </APIProvider>
        </div>
      </Card>
    </div>
  );
}