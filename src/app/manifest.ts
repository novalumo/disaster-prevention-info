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
        src: '/images/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
