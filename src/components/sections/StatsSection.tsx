'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import CountUp from '@/components/animations/CountUp';
import FadeInView from '@/components/animations/FadeInView';

const stats = [
  { value: 10, suffix: 'K+', label: 'Active Users' },
  { value: 500, suffix: 'K+', label: 'Workouts Logged' },
  { value: 4.9, suffix: '', label: 'App Rating', isDecimal: true },
  { value: 50, suffix: 'K+', label: 'Programs Created' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 bg-dark-100">
      <Container>
        <FadeInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Join the <span className="text-primary">Yoked</span> Community
          </h2>
          <p className="text-dark-500">
            Thousands are already crushing their fitness goals
          </p>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.isDecimal ? (
                  <span>{stat.value}</span>
                ) : (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                )}
                {stat.isDecimal && (
                  <span className="text-2xl ml-1">⭐</span>
                )}
              </div>
              <div className="text-dark-500 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
