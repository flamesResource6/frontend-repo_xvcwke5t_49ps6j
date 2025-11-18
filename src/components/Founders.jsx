import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Founders() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{t('founders_title')}</h3>
        <div className="mt-8 rounded-3xl p-8 ring-1 ring-white/10 bg-white/5 relative overflow-hidden">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 blur-2xl" />
          <Quote className="h-6 w-6 text-white/60" />
          <p className="mt-4 text-lg text-white/80">We build AI that respects culture, language, and compliance. Precision from China, reliability from the Alps — practical automation that earns trust.</p>
          <div className="mt-6 text-white/70 text-sm">— The Voltiq Founders</div>
        </div>
      </div>
    </section>
  );
}
