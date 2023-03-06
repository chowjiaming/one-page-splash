import './globals.css';

export const metadata = {
  title: 'Joseph Chow',
  description: 'Welcome to my website!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
