import type { Metadata } from "next";
import { Playfair_Display, Inter, Italiana } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Marco Lopez - Board-Certified Rheumatologist",
  description: "Expert rheumatology care specializing in arthritis, autoimmune diseases, and joint health. Compassionate treatment for rheumatoid arthritis, lupus, osteoarthritis, and more.",
  keywords: ['rheumatologist', 'arthritis treatment', 'autoimmune disease', 'joint pain', 'lupus', 'osteoporosis'],
  authors: [{ name: 'Dr. Marco Lopez' }],
  openGraph: {
    title: 'Dr. Marco Lopez - Board-Certified Rheumatologist',
    description: 'Expert rheumatology care specializing in arthritis, autoimmune diseases, and joint health.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Marco Lopez Rheumatology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Marco Lopez - Rheumatologist',
    description: 'Expert rheumatology care',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${italiana.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
