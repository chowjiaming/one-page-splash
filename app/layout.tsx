import '@/styles/globals.css';
import {Red_Hat_Mono} from 'next/font/google';

export const metadata = {
  title: 'Joseph Chow',
  description: 'Welcome to my website!',
  applicationName: 'Joseph Chow',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [{name: 'Joseph Chow', url: 'https://github.com/chowjiaming'}],
  creator: 'Joseph Chow',
  openGraph: {
    title: 'Joseph Chow',
    description: 'Welcome to my website!',
    url: 'https://josephchow.dev',
    siteName: 'Joseph Chow',
    images: [
      {
        url: 'https://josephchow.dev/icon-256.png',
        width: 256,
        height: 256,
      },
      {
        url: 'https://josephchow.dev/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Alt icon',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/icon-512.png',
    shortcut: '/icon-256.png',
    apple: '/icon-512.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Chow',
    description: 'Welcome to my website!',
    creator: '@chowjiaming',
    images: ['https://josephchow.dev/icon-512.png'],
  },
};

const font = Red_Hat_Mono({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
