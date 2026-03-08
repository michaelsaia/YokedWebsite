import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy - Yoked',
  description: 'Privacy Policy for Yoked fitness app',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-dark-500 space-y-4 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-dark-500 [&_strong]:text-dark-400 [&_table]:w-full [&_th]:text-left [&_th]:text-dark-400 [&_th]:py-2 [&_th]:pr-4 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top">
        {children}
      </div>
    </section>
  );
}

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
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-dark-500 mb-12">Last updated: March 7, 2026</p>

            <Section title="1. Introduction">
              <p>
                This Privacy Policy describes how Michael Saia, doing business as Yoked (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and shares your personal information when you use the Yoked mobile application (&quot;App&quot;) and related services (collectively, &quot;Services&quot;).
              </p>
              <p>
                Yoked is a fitness application that allows you to create and manage workout programs, track exercise progress, and generate AI-powered workouts and training programs.
              </p>
              <p>
                By using the App, you agree to the collection and use of information as described in this Privacy Policy. If you do not agree, please do not use the App.
              </p>
              <p>
                Questions? Contact us at{' '}
                <a href="mailto:support@yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">support@yoked.fitness</a>.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <p>When you create an account and use the App, you may provide:</p>
              <ul>
                <li><strong>Account information:</strong> Name, email address, and password (or OAuth credentials via Google or Apple Sign-In)</li>
                <li><strong>Profile information:</strong> Display name, avatar/profile photo</li>
                <li><strong>Physical attributes:</strong> Height, weight, gender, date of birth (all optional, used to personalize AI recommendations)</li>
                <li><strong>Fitness profile:</strong> Experience level, fitness goals, preferred workout duration, preferred training frequency, injury notes or physical limitations</li>
                <li><strong>Equipment inventory:</strong> Available gym equipment (used to tailor workout generation)</li>
                <li><strong>Workout data:</strong> Programs you create, workouts you log, exercises performed, sets, reps, weights used, RPE ratings, personal records, and workout feedback (difficulty, duration, notes)</li>
                <li><strong>Progress data:</strong> Body measurements (chest, waist, hips, biceps, thighs, calves), body fat percentage, and progress photos you upload</li>
                <li><strong>AI interaction data:</strong> Prompts and preferences you provide when generating AI workouts or programs</li>
                <li><strong>Promo codes:</strong> Promotional or invite codes you redeem</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <p>When you use the App, we automatically collect:</p>
              <ul>
                <li><strong>Device information:</strong> Device type, operating system version, and app version</li>
                <li><strong>Usage data:</strong> Features used, screens viewed, and interaction patterns</li>
                <li><strong>Error logs:</strong> Crash data and error reports for debugging and stability improvements</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.3 Information We Do NOT Collect</h3>
              <ul>
                <li>Precise GPS location data</li>
                <li>Contacts or address book</li>
                <li>Phone call or SMS data</li>
                <li>Credit card or payment instrument numbers (handled entirely by Apple)</li>
                <li>Health data from Apple Health or Google Fit</li>
                <li>Browsing history outside the App</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li><strong>Provide the Service:</strong> Create and manage your account, store your workouts and programs, and track your progress</li>
                <li><strong>Power AI features:</strong> Send your fitness profile (experience level, goals, equipment, preferences, and injury notes) to our AI service to generate personalized workout programs and exercises. We do not send your name, email, or other identifying information to the AI.</li>
                <li><strong>Enable community features:</strong> Display your public programs and display name to other users when you choose to share programs publicly</li>
                <li><strong>Process subscriptions:</strong> Manage your Premium subscription status and entitlements</li>
                <li><strong>Send notifications:</strong> Deliver workout reminders, achievement notifications, streak milestones, and AI coaching messages (with your permission)</li>
                <li><strong>Improve the App:</strong> Analyze usage patterns and error logs to fix bugs and improve features</li>
                <li><strong>Provide support:</strong> Respond to your questions and troubleshoot issues</li>
              </ul>
            </Section>

            <Section title="4. AI Data Processing">
              <p>
                Yoked uses Google Gemini (an AI service provided by Google) to generate workout programs, individual workouts, exercise swap suggestions, and coaching feedback.
              </p>
              <p><strong>What we send to Google Gemini:</strong></p>
              <ul>
                <li>Your experience level and fitness goals</li>
                <li>Available equipment</li>
                <li>Preferred workout duration and frequency</li>
                <li>Injury notes or limitations you&apos;ve provided</li>
                <li>Your generation prompt (what you asked the AI to create)</li>
              </ul>
              <p><strong>What we do NOT send to Google Gemini:</strong></p>
              <ul>
                <li>Your name, email, or account credentials</li>
                <li>Your workout history or exercise logs</li>
                <li>Your body measurements or progress photos</li>
                <li>Your payment or subscription information</li>
              </ul>
              <p>
                AI-generated content is stored in your account so you can review, edit, and use it. We also store a record of AI generation requests (prompts, model used, token counts) to monitor service quality and usage limits.
              </p>
              <p>
                Google&apos;s use of data sent through the Gemini API is governed by{' '}
                <a href="https://ai.google.dev/gemini-api/terms" className="text-primary hover:text-primary-400 transition-colors underline" target="_blank" rel="noopener noreferrer">
                  Google&apos;s API Terms of Service
                </a>.
              </p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>We use the following third-party services to operate the App:</p>
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Supabase</strong></td>
                    <td>Database hosting, user authentication, and data storage</td>
                    <td>All account and workout data is stored in Supabase</td>
                  </tr>
                  <tr>
                    <td><strong>Google Gemini</strong></td>
                    <td>AI-powered workout and program generation</td>
                    <td>Fitness profile context and user prompts (see Section 4)</td>
                  </tr>
                  <tr>
                    <td><strong>RevenueCat</strong></td>
                    <td>Subscription management and entitlement tracking</td>
                    <td>User ID, purchase events, subscription status</td>
                  </tr>
                  <tr>
                    <td><strong>Apple App Store</strong></td>
                    <td>Payment processing for subscriptions</td>
                    <td>Payment handled entirely by Apple; we never see your payment details</td>
                  </tr>
                  <tr>
                    <td><strong>Google Sign-In</strong></td>
                    <td>OAuth authentication</td>
                    <td>Name and email from your Google account</td>
                  </tr>
                  <tr>
                    <td><strong>Apple Sign-In</strong></td>
                    <td>OAuth authentication</td>
                    <td>Name and email (or relay email) from your Apple account</td>
                  </tr>
                </tbody>
              </table>
              <p>
                We do not sell your personal information to any third party. We do not use third-party analytics, advertising, or tracking SDKs.
              </p>
            </Section>

            <Section title="6. Community and Public Data">
              <p>
                When you make a program public, the following information becomes visible to other authenticated users of the App:
              </p>
              <ul>
                <li>Program title, description, and workout details (exercises, sets, reps)</li>
                <li>Your display name and avatar</li>
                <li>Whether the program was AI-generated</li>
                <li>Like count and clone count</li>
              </ul>
              <p>
                Your email address, fitness profile, body measurements, workout logs, and progress photos are never made public.
              </p>
              <p>
                The App also allows you to share workout summaries and program screenshots via your device&apos;s native share sheet (iMessage, email, etc.). These images are generated locally on your device and are not uploaded to our servers.
              </p>
            </Section>

            <Section title="7. Data Security">
              <p>We protect your data through:</p>
              <ul>
                <li><strong>Row Level Security (RLS):</strong> Database-level access controls ensure users can only access their own data</li>
                <li><strong>Encrypted connections:</strong> All data is transmitted over HTTPS/TLS</li>
                <li><strong>Authentication tokens:</strong> Secure JWT-based session management</li>
                <li><strong>Minimal data sharing:</strong> AI requests exclude personally identifying information</li>
              </ul>
              <p>
                No method of electronic transmission or storage is 100% secure. While we use commercially reasonable measures to protect your data, we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="8. Data Retention">
              <p>
                We retain your personal information for as long as your account is active. When you delete your account:
              </p>
              <ul>
                <li>Your profile, workouts, programs, exercise logs, progress data, and AI generation history are permanently deleted</li>
                <li>Data deletion cascades automatically — removing your account removes all associated records</li>
                <li>Active subscriptions should be cancelled through Apple before deleting your account to avoid continued billing</li>
              </ul>
              <p>
                We may retain anonymized, aggregated data that cannot be linked back to you for service improvement purposes.
              </p>
            </Section>

            <Section title="9. Your Rights and Choices">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information via your account settings</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
                <li><strong>Withdraw consent:</strong> Opt out of push notifications via device settings; withdraw consent for data processing by deleting your account</li>
                <li><strong>Object:</strong> Object to certain processing of your personal information</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:support@yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">support@yoked.fitness</a>.
                We will respond within 30 days.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">For California Residents (CCPA)</h3>
              <p>
                You have the right to know what personal information we collect, request deletion of your data, and opt out of the sale of personal information. We do not sell your personal information. To submit a request, email{' '}
                <a href="mailto:support@yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">support@yoked.fitness</a>.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">For EU/UK Residents (GDPR)</h3>
              <p>
                We process your data based on: (a) your consent, (b) performance of our contract with you (providing the Service), and (c) our legitimate interests in improving the App. You may withdraw consent at any time. You have the right to lodge a complaint with your local data protection authority.
              </p>
            </Section>

            <Section title="10. Children&apos;s Privacy">
              <p>
                The App is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe a child under 16 has provided us with personal information, please contact us at{' '}
                <a href="mailto:support@yoked.fitness" className="text-primary hover:text-primary-400 transition-colors underline">support@yoked.fitness</a>
                {' '}and we will delete the account promptly.
              </p>
            </Section>

            <Section title="11. Push Notifications">
              <p>
                With your permission, we may send push notifications for workout reminders, achievement milestones, streak updates, and AI coaching messages. You can disable push notifications at any time through your device&apos;s Settings app.
              </p>
            </Section>

            <Section title="12. Social Login">
              <p>
                You may register and sign in using Google or Apple. When you do so, we receive your name and email address from the provider. We use this information only to create and authenticate your account. We do not access your contacts, calendars, photos, or other data from these providers.
              </p>
            </Section>

            <Section title="13. Cookies and Tracking">
              <p>
                The Yoked mobile app does not use cookies. We do not use third-party analytics, advertising SDKs, or tracking pixels. The Yoked website (yoked.fitness) may use basic cookies for site functionality.
              </p>
            </Section>

            <Section title="14. Do Not Track">
              <p>
                We do not track users across third-party websites or services. The App does not respond to Do Not Track (DNT) signals because we do not engage in cross-site tracking.
              </p>
            </Section>

            <Section title="15. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy in the App or on our website with a new &quot;Last updated&quot; date. Your continued use of the App after changes are posted constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="16. Contact Us">
              <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
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
