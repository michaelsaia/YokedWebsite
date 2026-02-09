import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yoked - AI-Powered Fitness App | Get Your Personalized Workout Program',
  description: 'Build muscle, track progress, and crush your fitness goals with Yoked. Our AI enabled workflow creates personalized workout programs tailored to your goals. Download now and get yoked!',
  keywords: ['fitness app', 'workout tracker', 'AI fitness', 'gym app', 'workout program', 'muscle building', 'personal trainer', 'exercise app'],
  authors: [{ name: 'Yoked' }],
  creator: 'Yoked',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourusername.github.io/YokedWebsite/',
    title: 'Yoked - AI-Powered Fitness App',
    description: 'Your AI-Powered Gains Partner. Build muscle, track progress, crush your goals - all on your schedule.',
    siteName: 'Yoked',
    images: [
      {
        url: '/images/icon.png',
        width: 512,
        height: 512,
        alt: 'Yoked App - Get Yoked with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoked - AI-Powered Fitness App',
    description: 'Your AI-Powered Gains Partner. Build muscle, track progress, crush your goals.',
    images: ['/images/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
