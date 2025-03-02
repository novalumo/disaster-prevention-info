'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { shelters } from '../data/shelters';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function ShelterMap() {
  return (
    <div className="h-[600px] w-full">
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY || ''}>
        <Map
          style={{ width: '100%', height: '100%' }}
          styles={[]}
          defaultCenter={{ lat: 39.0833, lng: 141.7083 }}
          zoom={13}
          gestureHandling="greedy"
          mapId="shelter-map"
        >
          {shelters.map(
            (shelter) =>
              shelter.position && (
                <Marker
                  key={shelter.id}
                  position={shelter.position}
                  title={shelter.name}
                />
              ),
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
