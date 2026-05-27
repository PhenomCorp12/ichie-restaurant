import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ICHIÉ 一会 | Authentic Japanese Restaurant in Sydney Fish Market',
  description: 'Experience authentic Japanese cuisine at ICHIE, located in Sydney Fish Market. Fresh sashimi, grilled specialties, and traditional Japanese dishes prepared with passion and precision.',
  keywords: 'Japanese restaurant, Sydney Fish Market, Japanese cuisine, sashimi, sushi, Glebe restaurant',
  openGraph: {
    title: 'ICHIE | Authentic Japanese Restaurant',
    description: 'Experience authentic Japanese cuisine at ICHIE in Sydney Fish Market',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICHIE | Authentic Japanese Restaurant',
    description: 'Experience authentic Japanese cuisine at ICHIE in Sydney Fish Market',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
