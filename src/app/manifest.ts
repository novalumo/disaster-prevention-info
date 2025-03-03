import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '防災情報',
    short_name: '防災情報',
    description: '防災情報',
    start_url: '/',
    display: 'standalone',
    background_color: '#1d4ed8',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/icon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  };
}
