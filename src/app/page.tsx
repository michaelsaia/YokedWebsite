import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AppScreenshotsSection from '@/components/sections/AppScreenshotsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
// import StatsSection from '@/components/sections/StatsSection'; // Hidden until we have real stats
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AppScreenshotsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        {/* <StatsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
