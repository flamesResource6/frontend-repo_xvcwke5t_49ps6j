import { motion } from 'framer-motion';

// Global background effects: animated starfield, gradient orbs, and subtle vignette
function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Starfield - animated shimmer */}
      <motion.div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 0.75px, transparent 0.75px)',
          backgroundSize: '18px 18px',
        }}
        animate={{ opacity: [0.10, 0.16, 0.10] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-20 h-[52rem] w-[52rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25), rgba(168,85,247,0.22), rgba(251,191,36,0.14) 60%, transparent 70%)' }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-14rem] right-[-6rem] h-[44rem] w-[44rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.20), rgba(99,102,241,0.18), rgba(251,191,36,0.1) 60%, transparent 70%)' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
    </div>
  );
}

export default BackgroundFX;
