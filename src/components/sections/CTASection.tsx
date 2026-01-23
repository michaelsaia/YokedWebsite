'use client';

import { motion } from 'motion/react';
import AnimatedEgg from '@/components/animations/AnimatedEgg';
import WaitlistForm from '@/components/forms/WaitlistForm';
import AppStoreBadges from '@/components/shared/AppStoreBadges';
import Container from '@/components/ui/Container';
import FadeInView from '@/components/animations/FadeInView';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-dark-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <div className="flex justify-center mb-8">
              <AnimatedEgg size="lg" />
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ready to Get{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Yoked?
              </span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-xl text-dark-500 mb-8 max-w-xl mx-auto">
              Stop scrolling. Start lifting. Your future yoked self is waiting.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <AppStoreBadges className="mb-8" />
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="flex items-center gap-4 mb-6 max-w-md mx-auto">
              <div className="flex-1 h-px bg-dark-200" />
              <span className="text-dark-500 text-sm">or get notified at launch</span>
              <div className="flex-1 h-px bg-dark-200" />
            </div>
          </FadeInView>

          <FadeInView delay={0.5}>
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </FadeInView>

          {/* Fun tagline */}
          <FadeInView delay={0.6}>
            <motion.p
              className="mt-8 text-dark-600 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              No spam. Just gains. 💪
            </motion.p>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
