import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';

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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          {/*
            REPLACE THIS SECTION WITH YOUR PRIVACY POLICY HTML
            You can paste your privacy policy HTML content below.
            The container has prose-like styling for readability.
          */}
          <div className="prose prose-invert max-w-none space-y-6 text-dark-500">
            <p className="text-lg">
              Last updated: January 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Yoked (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy
                and ensuring you have a positive experience when using our fitness application.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-white mt-6 mb-3">Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address when you create an account</li>
                <li>Fitness goals and experience level</li>
                <li>Workout data and progress metrics</li>
                <li>Progress photos (stored locally or with your consent)</li>
              </ul>

              <h3 className="text-xl font-medium text-white mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you use our app, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (type, operating system)</li>
                <li>Usage data and app analytics</li>
                <li>Crash reports and performance data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and personalize our fitness services</li>
                <li>Generate AI-powered workout programs tailored to your goals</li>
                <li>Track your progress and celebrate your achievements</li>
                <li>Improve and optimize our application</li>
                <li>Communicate important updates and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your workout data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-primary">support@yokedapp.com</p>
            </section>

            {/* Add more sections as needed for your actual privacy policy */}
          </div>
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
