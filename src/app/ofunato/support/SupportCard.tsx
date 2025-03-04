'use client';

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { MonetizationOn, Handshake } from '@mui/icons-material';
import DonationInfoCard from './DonationInfoCard';
import VolunteerInfoCard from '@/app/ofunato/support/VolunteerInfoCard';
import OfunatoContainer from '@/app/ofunato/components/OfunatoContainer';
import { sendGTMEvent } from '@next/third-parties/google';

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
      id={`support-tabpanel-${index}`}
      aria-labelledby={`support-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function SupportCard() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <OfunatoContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="支援情報タブ"
          variant="fullWidth"
        >
          <Tab
            icon={<MonetizationOn />}
            label="募金"
            id="support-tab-donation"
            aria-controls="support-tabpanel-donation"
            onClick={() =>
              sendGTMEvent({
                event: 'tabClick',
                value: 'support-tab-donation',
              })
            }
          />
          <Tab
            icon={<Handshake />}
            label="ボランティア"
            id="support-tab-volunteer"
            aria-controls="support-tabpanel-volunteer"
            onClick={() =>
              sendGTMEvent({
                event: 'tabClick',
                value: 'support-tab-volunteer',
              })
            }
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <DonationInfoCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VolunteerInfoCard />
      </TabPanel>
    </OfunatoContainer>
  );
}
