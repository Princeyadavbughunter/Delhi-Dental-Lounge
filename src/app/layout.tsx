import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Delhi Dental Lounge – Advanced & Patient-Focused Dental Care in Dwarka | Dr. Saloni Malik",
  description: "Delhi Dental Lounge led by Dr. Saloni Malik offers high-quality, technology-driven dental treatments in Dwarka. Best Dentist in New Delhi for Implants, Braces & Root Canal.",
  keywords: "Dentist Dwarka, Delhi Dental Lounge, Dr. Saloni Malik, Dental Implants Dwarka, Best Dentist New Delhi, Root Canal Treatment, Dental Braces, Smile Design",
  authors: [{ name: "Dr. Saloni Malik" }],
  creator: "Delhi Dental Lounge",
  publisher: "Delhi Dental Lounge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://delhidentallounge.com/'), // Placeholder URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Delhi Dental Lounge – Advanced & Patient-Focused Dental Care in Dwarka",
    description: "Dr. Saloni Malik - Advanced dental care in Dwarka. Specializing in Implants, Aligners & Cosmetic Dentistry.",
    url: 'https://delhidentallounge.com/',
    siteName: "Delhi Dental Lounge",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Delhi Dental Lounge",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Delhi Dental Lounge | Dr. Saloni Malik",
    description: "Advanced dental care in Dwarka by Dr. Saloni Malik. Patient-focused & Technology-driven.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
