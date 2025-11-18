import { motion } from 'framer-motion';
import { Mountain, Globe2, Bot, Factory, Flag } from 'lucide-react';

function About() {
  const badges = [
    { icon: Mountain, label: 'South Tyrol HQ' },
    { icon: Globe2, label: 'Sino-European DNA' },
    { icon: Bot, label: 'AI-first Engineering' },
    { icon: Factory, label: 'Industry-ready' },
    { icon: Flag, label: 'Multilingual' },
  ];

  return (
    <section id="about" className="relative py-24">
      {/* Alpine + Shenzhen split background photos with blend modes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-[0.12] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.10] mix-blend-overlay" />
        <div className="absolute inset-0 bg-slate-950/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">From the Alps to the Pearl River Delta</h2>
            <p className="mt-4 text-white/80">Voltiq blends Alpine reliability with Chinese engineering speed. Our team designs and ships multilingual AI systems that automate complex operations across Europe and Asia.</p>
            <p className="mt-3 text-white/70">Headquartered in South Tyrol, we build with a global mindset—privacy, security, and measurable outcomes first.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/10 text-white/90 text-xs">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            {/* Card with gradient ring and photo collage */}
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 blur-xl" />
              <div className="relative grid grid-cols-2 gap-1 p-1">
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-2xl" />
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-2xl" />
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-2xl" />
                <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
