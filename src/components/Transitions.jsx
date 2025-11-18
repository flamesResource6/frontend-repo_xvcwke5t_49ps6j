import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Section wrapper that adds parallax and reveal-on-scroll
export function Section({ children, className = '', id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.2'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section id={id} ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.section>
  );
}

// Sticky progress bar at top of page
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, bounce: 0 });
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-0.5 origin-left bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 z-[60]" />;
}
