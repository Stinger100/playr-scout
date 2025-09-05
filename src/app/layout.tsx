import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Playr — Football Scouting',
  description: 'Data-driven scouting for pros.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white text-gray-900">
      <body className={`${inter.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
