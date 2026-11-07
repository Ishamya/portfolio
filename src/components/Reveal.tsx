import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMotionPreferences } from './MotionPreferences';

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { paused } = useMotionPreferences();
  return <motion.div className={className} initial={paused ? false : { y: 14 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: paused ? 0 : 0.65, delay: paused ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
