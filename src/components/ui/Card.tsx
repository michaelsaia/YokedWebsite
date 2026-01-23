'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps {
  hover?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  className,
  hover = true,
  glow = false,
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-2xl bg-dark-100 border border-dark-200 p-6',
        glow && 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
