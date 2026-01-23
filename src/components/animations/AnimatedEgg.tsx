'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AnimatedEggProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function AnimatedEgg({ size = 'lg', className = '' }: AnimatedEggProps) {
  const [isZapping, setIsZapping] = useState(false);

  // Periodic lightning zap effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsZapping(true);
      setTimeout(() => setIsZapping(false), 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-56 h-56',
  };

  const sizePixels = {
    sm: 64,
    md: 96,
    lg: 160,
    xl: 224,
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Glow effect behind egg */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
        animate={{
          scale: isZapping ? [1, 1.5, 1] : [1, 1.1, 1],
          opacity: isZapping ? [0.3, 0.8, 0.3] : [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: isZapping ? 0.6 : 3,
          repeat: isZapping ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating egg */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative"
      >
        <Image
          src="/images/icon-transparentbackground.png"
          alt="Yoked - Egg with Lightning Bolt"
          width={sizePixels[size]}
          height={sizePixels[size]}
          className={`drop-shadow-2xl transition-all duration-300 ${
            isZapping ? 'brightness-125 drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]' : ''
          }`}
          priority
        />
      </motion.div>

      {/* Zap particles */}
      {isZapping && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{
                opacity: 1,
                scale: 0,
                x: '50%',
                y: '50%',
              }}
              animate={{
                opacity: [1, 0],
                scale: [0, 1.5],
                x: `${50 + Math.cos((i * Math.PI) / 3) * 100}%`,
                y: `${50 + Math.sin((i * Math.PI) / 3) * 100}%`,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              style={{
                left: 0,
                top: 0,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
