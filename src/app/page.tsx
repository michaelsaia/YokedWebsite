import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AppScreenshotsSection from '@/components/sections/AppScreenshotsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
// import StatsSection from '@/components/sections/StatsSection'; // Hidden until we have real stats
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import StructuredData, { softwareApplicationSchema, buildFAQSchema } from '@/components/shared/StructuredData';
import { FAQS } from '@/lib/constants';

export default function Home() {
  const faqSchema = buildFAQSchema(FAQS);

  return (
    <>
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main>
        <HeroSection />
        <AppScreenshotsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        {/* <StatsSection /> */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
