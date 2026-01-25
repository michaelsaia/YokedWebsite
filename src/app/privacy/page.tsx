import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import TermlyPolicy from './TermlyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy - Yoked',
  description: 'Privacy Policy for Yoked fitness app',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="border-b border-dark-200 py-4">
        <Container>
          <Link href="/" className="text-primary hover:text-primary-400 transition-colors">
            &larr; Back to Home
          </Link>
        </Container>
      </header>

      {/* Content */}
      <main className="py-16">
        <Container size="md">
          <TermlyPolicy />
        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-200 py-8">
        <Container>
          <p className="text-dark-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Yoked. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
