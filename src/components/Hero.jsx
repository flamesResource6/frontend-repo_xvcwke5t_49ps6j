import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[860px] w-[860px] rounded-full opacity-50 blur-3xl pointer-events-none" style={{
          background: 'radial-gradient(closest-side, rgba(129, 140, 248, 0.35), rgba(168, 85, 247, 0.28), rgba(251, 191, 36, 0.18), transparent 70%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Based in South Tyrol • 全球团队 Chinese engineering excellence
          </motion.div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Automate your operations with Voltiq AI
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            A multilingual AI chatbot engineered by our team in South Tyrol with strong Chinese engineering roots. We streamline processes, reduce response times, and integrate with your tools — securely.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex rounded-full px-5 py-3 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition">Request a demo</a>
            <a href="#solutions" className="inline-flex rounded-full px-5 py-3 text-sm font-medium bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 transition">Explore solutions</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-white/70">
            <div>Secure by design</div>
            <div>Multilingual (EN/DE/IT/中文)</div>
            <div>Fast deployment</div>
          </div>
        </div>
        <div className="relative h-[480px] sm:h-[560px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-fuchsia-500/10">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;