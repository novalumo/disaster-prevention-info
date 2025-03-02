import type { Metadata } from 'next';
import {
  Alert,
  AlertTitle,
  Box,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import OfunatoContainer from '../components/OfunatoContainer';

export const metadata: Metadata = {
  title: '情報の正確性について - 大船渡市 山林火災情報',
  description:
    '大船渡市の山林火災に関する情報の正確性と更新についての説明です。',
  openGraph: {
    title: '情報の正確性について - 大船渡市 山林火災情報',
    description:
      '大船渡市の山林火災に関する情報の正確性と更新についての説明です。',
  },
};

export default function AboutPage() {
  return (
    <OfunatoContainer>
      <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
        情報の正確性について
      </Typography>
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>情報の更新について</AlertTitle>
        <Box sx={{ fontSize: '0.875rem' }}>
          当サイトに掲載されている情報は、最終更新時点で正確なものであることを確認していますが、
          状況は刻々と変化している可能性があります。最新の情報は各公式サイトでご確認ください。
        </Box>
      </Alert>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        情報の訂正・更新について
      </Typography>
      <Typography paragraph>
        情報の誤りを見つけられた場合や更新の提案は、以下のいずれかの方法でご連絡ください：
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom fontWeight="medium">
          1. GitHub Issues
        </Typography>
        <Typography paragraph>
          <MuiLink
            href="https://github.com/novalumo/disaster-prevention-info/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Issues
          </MuiLink>
          から issue を作成してください。Pull Request も歓迎します。
        </Typography>

        <Typography variant="subtitle1" gutterBottom fontWeight="medium">
          2. メール
        </Typography>
        <Typography>
          <MuiLink href="mailto:contact@novalumo.com">
            contact@novalumo.com
          </MuiLink>
          までご連絡ください。
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        免責事項
      </Typography>
      <Typography>
        当サイトの情報の正確性については細心の注意を払っておりますが、
        情報の完全性、正確性、有用性について保証するものではありません。
        当サイトの情報を利用することで生じたいかなる損害についても、
        運営者は責任を負いかねますのでご了承ください。
      </Typography>
    </OfunatoContainer>
  );
}
