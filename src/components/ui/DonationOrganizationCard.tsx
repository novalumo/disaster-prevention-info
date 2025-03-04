'use client';
import Link from 'next/link';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';

type AccountDetail = {
  id: string;
  label: string;
  value: string;
};

type DonationOrganizationCardProps = {
  organizationName: string;
  note?: string;
  amount?: string | number;
  accountInfo?: string | AccountDetail[];
  websiteUrl?: string;
  websiteLabel?: string;
  className?: string;
};

export default function DonationOrganizationCard({
  organizationName,
  note,
  amount,
  accountInfo,
  websiteUrl,
  websiteLabel = '公式サイトへ',
  className,
}: DonationOrganizationCardProps) {
  const renderStringAccountInfo = () => {
    return (
      <Paper
        variant="outlined"
        sx={{
          mt: 1,
          p: 2,
          bgcolor: 'grey.50',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'text.primary',
            whiteSpace: 'pre-wrap',
          }}
        >
          {accountInfo as string}
        </Typography>
      </Paper>
    );
  };

  const renderDetailedAccountInfo = () => {
    const details = accountInfo as AccountDetail[];
    return (
      <Paper
        variant="outlined"
        sx={{
          mt: 1,
          bgcolor: 'grey.50',
          overflow: 'hidden',
        }}
      >
        {details.map((detail, index) => (
          <Box key={detail.id}>
            {index > 0 && <Divider />}
            <Box
              sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { xs: '120px 1fr', sm: '140px 1fr' },
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'text.primary',
                  py: 0.5,
                  px: 1.5,
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  display: 'inline-block',
                }}
              >
                {detail.label}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                }}
              >
                {detail.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    );
  };

  return (
    <Card variant="outlined" className={className}>
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          color="primary"
          gutterBottom
          fontWeight="bold"
        >
          {organizationName}
        </Typography>

        {amount && (
          <Box sx={{ mb: 2 }}>
            <Typography component="span" variant="subtitle2">
              金額:{' '}
            </Typography>
            <Typography component="span" variant="body1" color="text.secondary">
              {typeof amount === 'number'
                ? `${amount.toLocaleString()}円`
                : amount}
            </Typography>
          </Box>
        )}

        {accountInfo && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">振込先: </Typography>
            {Array.isArray(accountInfo)
              ? renderDetailedAccountInfo()
              : renderStringAccountInfo()}
          </Box>
        )}

        {note && (
          <Paper
            variant="outlined"
            sx={{
              mb: 2,
              p: 2,
              bgcolor: 'grey.50',
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              備考:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {note}
            </Typography>
          </Paper>
        )}

        {websiteUrl && (
          <Box sx={{ mt: 3 }}>
            <Button
              component={Link}
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{ textTransform: 'none' }}
              endIcon={<OpenInNewIcon />}
            >
              {websiteLabel}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
