import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HealthyWaterJourney.com | Change your water, change your life!',
  description: 'A Greener Lifestyle with Kangen Water®. Minimize consumption, eliminate toxins and live healthier with Enagic® water ionizer machines & supplements.',
  keywords: ['kangen water', 'enagic', 'water ionizer', 'k8', 'sd501', 'healthy water journey', 'eco living', 'alkaline water'],
  openGraph: {
    title: 'HealthyWaterJourney.com | Change your water, change your life!',
    description: 'Minimize consumption, eliminate toxins and live healthier by simply adding water. Enagic® Kangen Water.',
    url: 'https://healthywaterjourney.com',
    siteName: 'HealthyWaterJourney.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'HealthyWaterJourney.com Kangen Water',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#EDEEE7] text-[#3E4C4C] antialiased selection:bg-[#7AD1C4] selection:text-[#3E4C4C] min-h-screen">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
