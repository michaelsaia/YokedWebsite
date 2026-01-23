'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import FadeInView from '@/components/animations/FadeInView';

const useCases = [
  {
    emoji: '🏨',
    title: 'Hotel Workouts',
    description: 'Finally making that hotel workout actually happen. No equipment? No problem.',
  },
  {
    emoji: '🏠',
    title: 'Home Gym Heroes',
    description: 'Your home gym equipment is judging you. Time to actually use it.',
  },
  {
    emoji: '🏖️',
    title: 'Beach Season Prep',
    description: "Beach season isn't gonna prep itself. Start your cut with a real plan.",
  },
  {
    emoji: '🎯',
    title: 'New Year, New You',
    description: 'New year, same gym... but this time with a plan that actually sticks.',
  },
  {
    emoji: '🍕',
    title: 'Holiday Recovery',
    description: 'That post-holiday damage control program everyone needs but nobody makes.',
  },
  {
    emoji: '👯',
    title: 'Squad Goals',
    description: "When your friend says \"let's get shredded this summer\" and you actually do it.",
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-dark">
      <Container>
        <FadeInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We&apos;ve All Been There
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            You know that thing you&apos;ve been meaning to do? Yeah, let&apos;s actually do it.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-2xl bg-dark-100 border border-dark-200 hover:border-primary/30 transition-colors cursor-default"
            >
              <div className="text-4xl mb-4">{useCase.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-dark-500 text-sm">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
