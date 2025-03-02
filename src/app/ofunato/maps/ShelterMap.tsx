'use client';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { shelters } from '../data/shelters';
import { useState } from 'react';
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type ShelterDialogProps = {
  shelter: typeof shelters[number];
  isOpen: boolean;
  onClose: () => void;
};

function ShelterDialog({ shelter, isOpen, onClose }: ShelterDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed z-50 grid w-full gap-4 rounded-b-lg border bg-white p-6 shadow-lg sm:max-w-lg sm:rounded-lg animate-slide-up">
          <div className="flex flex-col space-y-1.5">
            <h2 className="text-lg font-semibold leading-none tracking-tight">{shelter.name}</h2>
            <p className="text-sm text-muted-foreground">{shelter.type}</p>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">住所</div>
              <div className="text-sm">{shelter.address}</div>
            </div>
            {shelter.phone && (
              <div>
                <div className="text-sm font-medium mb-1">電話番号</div>
                <div className="text-sm">{shelter.phone}</div>
              </div>
            )}
            {(shelter.maxCapacity || shelter.currentCapacity) && (
              <div>
                <div className="text-sm font-medium mb-1">収容状況</div>
                <div className="text-sm">
                  {shelter.currentCapacity || 0}人 / {shelter.maxCapacity || '---'}人
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default function ShelterMap() {
  const [selectedShelterId, setSelectedShelterId] = useState<string | null>(null);
  
  const selectedShelter = shelters.find(s => s.id === selectedShelterId);

  return (
    <div className="h-screen w-full">
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
                <AdvancedMarker
                  key={shelter.id}
                  position={shelter.position}
                  title={shelter.name}
                  onClick={() => setSelectedShelterId(shelter.id)}
                >
                  <Pin
                    background={selectedShelterId === shelter.id ? '#2563eb' : '#ffffff'}
                    borderColor={selectedShelterId === shelter.id ? '#1e40af' : '#94a3b8'}
                    glyphColor={selectedShelterId === shelter.id ? '#ffffff' : '#475569'}
                  />
                </AdvancedMarker>
              ),
          )}
        </Map>
      </APIProvider>
      {selectedShelter && (
        <ShelterDialog
          shelter={selectedShelter}
          isOpen={!!selectedShelterId}
          onClose={() => setSelectedShelterId(null)}
        />
      )}
    </div>
  );
}
