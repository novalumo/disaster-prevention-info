'use client';

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Campaign, LocationOn } from '@mui/icons-material';
import EmergencyInfoCard from './EmergencyInfoCard';
import ShelterInfoCard from './ShelterInfoCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`emergency-tabpanel-${index}`}
      aria-labelledby={`emergency-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function EmergencyTabs() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTab-root': {
            fontSize: '1rem',
            py: 2,
          },
        }}
      >
        <Tab
          icon={<LocationOn />}
          label="避難所"
          iconPosition="start"
          sx={{ textTransform: 'none' }}
        />
        <Tab
          icon={<Campaign />}
          label="避難情報"
          iconPosition="start"
          sx={{ textTransform: 'none' }}
        />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <ShelterInfoCard />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <EmergencyInfoCard />
      </TabPanel>
    </Box>
  );
}
