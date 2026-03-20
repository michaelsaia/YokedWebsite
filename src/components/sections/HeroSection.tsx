'use client';

import { motion } from 'motion/react';
import AnimatedEgg from '@/components/animations/AnimatedEgg';
import AppStoreBadges from '@/components/shared/AppStoreBadges';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Animated background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <AnimatedEgg size="xl" />
          </motion.div>

          {/* Right: Copy + CTAs */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
            >
              GET{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                YOKED.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-primary font-medium mb-4"
            >
              Your AI-Powered Gains Partner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-dark-500 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The AI fitness app that builds personalized workout programs for your goals,
              equipment, and schedule. Like a personal trainer in your pocket — available 24/7.
            </motion.p>

            {/* Use cases ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm text-dark-600 mb-2">Perfect for when...</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  '🏨 Hotel workouts',
                  '🏠 Home gym guilt',
                  '🏖️ Beach season prep',
                  '🎯 New year plans',
                ].map((useCase, index) => (
                  <motion.span
                    key={useCase}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 rounded-full bg-dark-200 text-dark-500 text-sm"
                  >
                    {useCase}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <AppStoreBadges />
            </motion.div>
          </div>
        </div>

      </Container>
    </section>
  );
}
