'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import FadeInView from '@/components/animations/FadeInView';

interface Screenshot {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const screenshots: Screenshot[] = [
  {
    src: '/screenshots/home-screen.png',
    alt: 'Yoked Home Screen',
    title: 'Your Daily Dashboard',
    description: "See today's workout, track your streak, and view what's coming up next.",
  },
  {
    src: '/screenshots/create-program.png',
    alt: 'Create Program Options',
    title: 'Create Your Program',
    description: 'Choose AI-generated programs, build from scratch, or use templates.',
  },
  {
    src: '/screenshots/workout-detail.png',
    alt: 'Workout Detail View',
    title: "Coach's Game Plan",
    description: 'AI-powered guidance for every workout with detailed exercise breakdowns.',
  },
  {
    src: '/screenshots/active-workout.png',
    alt: 'Active Workout Tracking',
    title: 'Track Every Rep',
    description: 'Log your sets with video guides, target metrics, and smart suggestions.',
  },
  {
    src: '/screenshots/training-programs.png',
    alt: 'Training Programs List',
    title: 'Manage Your Programs',
    description: 'Keep all your programs organized with progress tracking.',
  },
  {
    src: '/screenshots/discover-programs.png',
    alt: 'Discover Community Programs',
    title: 'Discover Programs',
    description: 'Find community-created programs filtered by your goals.',
  },
  {
    src: '/screenshots/progress-prs.png',
    alt: 'Progress and PRs',
    title: 'Celebrate Your PRs',
    description: 'Track personal records and see your strength progress over time.',
  },
];

export default function AppScreenshotsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="app-preview" ref={ref} className="py-24 bg-dark overflow-hidden">
      <Container>
        <FadeInView className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See <span className="text-primary">Yoked</span> in Action
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            A personal trainer in your pocket. Here&apos;s what you get.
          </p>
        </FadeInView>

        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Phone Frame */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[3rem] blur-2xl scale-110" />

              {/* Phone body */}
              <div className="relative bg-gradient-to-b from-dark-200 to-dark-300 rounded-[3rem] p-2 shadow-2xl">
                {/* Inner bezel */}
                <div className="bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                  {/* Screen */}
                  <div className="relative w-[280px] h-[600px] sm:w-[320px] sm:h-[680px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={screenshots[activeIndex].src}
                          alt={screenshots[activeIndex].alt}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-dark-400 rounded-full" />
            </div>

            {/* Navigation arrows - mobile */}
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-white hover:bg-dark-300 transition-colors"
                aria-label="Previous screenshot"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-white hover:bg-dark-300 transition-colors"
                aria-label="Next screenshot"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Feature Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 max-w-lg"
          >
            {/* Current feature */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center lg:text-left"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  {activeIndex + 1} of {screenshots.length}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {screenshots[activeIndex].title}
                </h3>
                <p className="text-lg text-dark-500 mb-8">
                  {screenshots[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Feature dots/pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary text-dark'
                      : 'bg-dark-200 text-dark-500 hover:bg-dark-300 hover:text-white'
                  }`}
                >
                  {screenshot.title.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>

            {/* Navigation arrows - desktop */}
            <div className="hidden lg:flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-white hover:bg-dark-300 transition-colors"
                aria-label="Previous screenshot"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-white hover:bg-dark-300 transition-colors"
                aria-label="Next screenshot"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress bar */}
              <div className="flex-1 flex items-center">
                <div className="w-full h-1 bg-dark-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeIndex + 1) / screenshots.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
