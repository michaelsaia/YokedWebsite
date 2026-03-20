import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StructuredData, { organizationSchema } from '@/components/shared/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yoked.fitness'),
  title: 'Yoked - AI-Powered Fitness App | Personalized Workout Programs',
  description: 'Yoked is an AI fitness app that creates personalized workout programs tailored to your goals, experience, and schedule. Your AI personal trainer — available 24/7. Download free on iOS.',
  keywords: ['AI fitness app', 'AI personal trainer', 'personalized workout app', 'AI workout planner', 'AI fitness coach', 'adaptive training', 'workout tracker', 'gym app', 'workout program', 'muscle building', 'exercise app'],
  authors: [{ name: 'Yoked' }],
  creator: 'Yoked',
  alternates: {
    canonical: 'https://yoked.fitness/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoked.fitness/',
    title: 'Yoked - AI-Powered Fitness App | Your AI Personal Trainer',
    description: 'AI fitness app that creates personalized workout programs in seconds. Tailored to your goals, equipment, and schedule. Download free.',
    siteName: 'Yoked',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yoked - AI-Powered Fitness App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoked - AI-Powered Fitness App',
    description: 'AI fitness app that creates personalized workout programs in seconds. Your AI personal trainer — available 24/7.',
    images: ['/images/og-image.png'],
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
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-dark text-white antialiased">
        <StructuredData data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
