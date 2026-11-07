import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { MotionConfig, useReducedMotion } from 'framer-motion';

const MotionContext = createContext({ paused: false, reduced: false, toggle: () => {} });
export const useMotionPreferences = () => useContext(MotionContext);
export function MotionPreferences({ children }: { children: ReactNode }) {
  const reduced = Boolean(useReducedMotion());
  const [paused, setPaused] = useState(false);
  return <MotionContext.Provider value={{ paused: paused || reduced, reduced, toggle: () => setPaused(value => !value) }}>
    <MotionConfig reducedMotion={paused || reduced ? 'always' : 'user'}>
      <div data-motion={paused || reduced ? 'paused' : 'running'}>{children}</div>
    </MotionConfig>
  </MotionContext.Provider>;
}
