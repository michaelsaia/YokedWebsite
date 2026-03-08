import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service - Yoked',
  description: 'Terms of Service for Yoked fitness app',
};

export default function TermsOfService() {
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
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
            <p className="text-dark-500 mb-12">Last updated: March 7, 2026</p>

            <Section title="1. Agreement to Terms">
              <p>
                By downloading, installing, or using the Yoked mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and Yoked (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </Section>

            <Section title="2. Eligibility">
              <p>
                You must be at least 16 years of age to use the App. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </Section>

            <Section title="3. Account Registration">
              <p>
                To access certain features, you must create an account. You agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                You may sign in using email/password or third-party authentication providers (Google, Apple). Your use of third-party authentication is also subject to those providers&apos; terms.
              </p>
            </Section>

            <Section title="4. Subscriptions and Payments">
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.1 Free Features</h3>
              <p>
                Yoked offers core fitness tracking features at no cost, including manual program creation, workout logging, exercise tracking, and progress monitoring.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.2 Free Trial</h3>
              <p>
                New users receive one free AI workout generation to experience Premium features before subscribing. This free generation is a one-time offer and does not require payment information.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.3 Premium Subscription</h3>
              <p>
                Continued access to AI-powered features requires a Premium subscription. Premium plans are available as:
              </p>
              <ul>
                <li><strong>Monthly:</strong> $7.99/month</li>
                <li><strong>Annual:</strong> $49.99/year</li>
              </ul>
              <p>
                Premium features include AI-generated workout programs, AI-generated individual workouts, AI exercise swap suggestions, and AI coaching feedback.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.4 Billing</h3>
              <p>
                Subscriptions are billed through Apple&apos;s App Store. Payment is charged to your Apple ID account at confirmation of purchase. Your subscription automatically renews unless auto-renewal is turned off at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the end of the current period at the same rate.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.5 Cancellation</h3>
              <p>
                You may cancel your subscription at any time through your Apple ID account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods. For refund requests, contact Apple Support directly.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.6 Promotional Codes</h3>
              <p>
                We may issue promotional codes that grant temporary access to Premium features. Promo codes are subject to specific terms provided at the time of issuance and may include usage limits or expiration dates.
              </p>
            </Section>

            <Section title="5. AI-Generated Content">
              <p>
                Yoked uses artificial intelligence (Google Gemini) to generate workout programs, individual workouts, exercise suggestions, and coaching feedback. You acknowledge and agree that:
              </p>
              <ul>
                <li>AI-generated content is provided for informational and guidance purposes only</li>
                <li>AI-generated workouts are not a substitute for professional medical advice, personal training, or physical therapy</li>
                <li>You should consult a healthcare provider before beginning any new exercise program, especially if you have pre-existing medical conditions or injuries</li>
                <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated content for your specific circumstances</li>
                <li>You are solely responsible for evaluating whether any AI-generated workout is appropriate for your fitness level and physical condition</li>
                <li>All AI-generated content is editable — you can and should modify exercises, weights, sets, and reps to match your abilities</li>
              </ul>
            </Section>

            <Section title="6. User Content and Community Features">
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.1 Your Content</h3>
              <p>
                You retain ownership of content you create in the App, including custom programs, workouts, and exercise logs. By making a program public or sharing content through the App, you grant us a non-exclusive, royalty-free license to display that content to other users within the App.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.2 Community Guidelines</h3>
              <p>
                When using community features (public programs, likes), you agree not to:
              </p>
              <ul>
                <li>Post content that is offensive, harmful, or inappropriate</li>
                <li>Misrepresent your identity or credentials</li>
                <li>Use the platform to spam or harass other users</li>
                <li>Upload content that infringes on others&apos; intellectual property rights</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.3 Content Removal</h3>
              <p>
                We reserve the right to remove any user content that violates these Terms or that we deem inappropriate, without prior notice.
              </p>
            </Section>

            <Section title="7. Acceptable Use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
                <li>Interfere with or disrupt the App&apos;s servers or networks</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
                <li>Use automated systems (bots, scrapers) to access the App</li>
                <li>Circumvent any access controls or usage limits</li>
                <li>Share, sell, or transfer your account credentials to others</li>
              </ul>
            </Section>

            <Section title="8. Health and Safety Disclaimer">
              <p>
                <strong className="text-white">Yoked is not a medical device and does not provide medical advice.</strong> The App provides fitness tracking and AI-assisted workout suggestions for general informational purposes. You acknowledge that:
              </p>
              <ul>
                <li>Physical exercise carries inherent risks of injury</li>
                <li>You participate in any workout at your own risk</li>
                <li>You should stop exercising immediately if you feel pain, dizziness, or discomfort</li>
                <li>You are responsible for using appropriate weights, proper form, and adequate rest</li>
                <li>The App does not account for your complete medical history or physical limitations unless you provide that information</li>
              </ul>
            </Section>

            <Section title="9. Intellectual Property">
              <p>
                The App, including its design, features, code, and branding, is owned by Yoked and protected by intellectual property laws. The exercise library, AI prompts, and App interface are proprietary. You may not copy, modify, or distribute any part of the App without our prior written consent.
              </p>
            </Section>

            <Section title="10. Privacy">
              <p>
                Your use of the App is also governed by our{' '}
                <Link href="/privacy" className="text-primary hover:text-primary-400 transition-colors underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal information. By using the App, you consent to the practices described in the Privacy Policy.
              </p>
            </Section>

            <Section title="11. Third-Party Services">
              <p>
                The App integrates with third-party services including:
              </p>
              <ul>
                <li><strong>Supabase</strong> — database and authentication</li>
                <li><strong>Google Gemini</strong> — AI content generation</li>
                <li><strong>RevenueCat</strong> — subscription management</li>
                <li><strong>Apple App Store</strong> — payment processing</li>
              </ul>
              <p>
                Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the practices of third-party service providers.
              </p>
            </Section>

            <Section title="12. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Yoked and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul>
                <li>Loss of data or workout history</li>
                <li>Physical injury resulting from following AI-generated or user-created workouts</li>
                <li>Interruption of service or loss of access</li>
                <li>Errors in AI-generated content</li>
              </ul>
              <p>
                Our total liability for any claim arising from or relating to these Terms shall not exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </Section>

            <Section title="13. Disclaimer of Warranties">
              <p>
                The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </Section>

            <Section title="14. Termination">
              <p>
                We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice. You may terminate your account at any time by deleting your account through the App. Upon termination:
              </p>
              <ul>
                <li>Your right to use the App ceases immediately</li>
                <li>Active subscriptions should be cancelled through Apple to avoid further charges</li>
                <li>We may delete your account data after a reasonable retention period</li>
              </ul>
            </Section>

            <Section title="15. Changes to Terms">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or via email. Your continued use of the App after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the updated Terms, you should discontinue use of the App.
              </p>
            </Section>

            <Section title="16. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of competent jurisdiction.
              </p>
            </Section>

            <Section title="17. Contact Us">
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:support@yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">support@yoked.fitness</a></li>
                <li>Website: <a href="https://yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">yoked.fitness</a></li>
              </ul>
            </Section>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-200 py-8">
        <Container>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/terms" className="text-dark-500 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-dark-500 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
          <p className="text-dark-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Yoked. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-dark-500 space-y-4 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-dark-500 [&_strong]:text-dark-400">
        {children}
      </div>
    </section>
  );
}
