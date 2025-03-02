'use client';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
import { shelters } from '@/app/ofunato/data/shelters';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Phone, People } from '@mui/icons-material';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAPS_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

if (!GOOGLE_MAPS_API_KEY || !GOOGLE_MAPS_MAP_ID) {
  throw new Error('GOOGLE_MAPS_API_KEY or GOOGLE_MAPS_MAP_ID is not set');
}

type ShelterDialogProps = {
  shelter: (typeof shelters)[number];
  isOpen: boolean;
  onClose: () => void;
};

function ShelterDialog({ shelter, isOpen, onClose }: ShelterDialogProps) {
  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      scroll="paper"
    >
      <DialogContent>
        <div className="mb-4">
          <Typography variant="h6" component="h2" gutterBottom>
            {shelter.name}
          </Typography>
          {shelter.type && (
            <Typography variant="body2" color="text.secondary">
              {shelter.type}
            </Typography>
          )}
        </div>
        <Divider sx={{ my: 2 }} />
        <List disablePadding>
          <ListItem>
            <ListItemText
              primary="住所"
              secondary={shelter.address}
              primaryTypographyProps={{ variant: 'subtitle2' }}
            />
          </ListItem>
          {shelter.phone && (
            <>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary={
                    <span className="flex items-center gap-1">
                      <Phone fontSize="small" />
                      電話番号
                    </span>
                  }
                  secondary={shelter.phone}
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                />
              </ListItem>
            </>
          )}
          {(shelter.maxCapacity || shelter.currentCapacity) && (
            <>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary={
                    <span className="flex items-center gap-1">
                      <People fontSize="small" />
                      収容状況
                    </span>
                  }
                  secondary={`${shelter.currentCapacity || 0}人 / ${
                    shelter.maxCapacity || '---'
                  }人`}
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                />
              </ListItem>
            </>
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ShelterMap() {
  const [selectedShelterId, setSelectedShelterId] = useState<string | null>(
    null,
  );

  const selectedShelter = shelters.find((s) => s.id === selectedShelterId);

  return (
    <div>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY || ''}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{ lat: 39.0833, lng: 141.7083 }}
          zoom={13}
          gestureHandling="greedy"
          disableDefaultUI={true}
          mapId={GOOGLE_MAPS_MAP_ID}
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
                    background={
                      selectedShelterId === shelter.id ? '#2563eb' : '#ffffff'
                    }
                    borderColor={
                      selectedShelterId === shelter.id ? '#1e40af' : '#94a3b8'
                    }
                    glyphColor={
                      selectedShelterId === shelter.id ? '#ffffff' : '#475569'
                    }
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
