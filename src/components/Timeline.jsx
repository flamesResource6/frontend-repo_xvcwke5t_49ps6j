import { motion } from 'framer-motion';
import { Flag, Rocket, Building2, Globe2, Factory } from 'lucide-react';
import { useLanguage } from './LanguageContext';

function Milestone({ icon: Icon, date, title, desc }) {
  return (
    <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 ring-2 ring-slate-900" />
      <div className="text-xs text-white/60">{date}</div>
      <div className="mt-1 text-white font-medium flex items-center gap-2"><Icon className="h-4 w-4" />{title}</div>
      <div className="text-sm text-white/70 mt-1">{desc}</div>
    </motion.li>
  );
}

export default function Timeline() {
  const { t } = useLanguage();
  const items = [
    { icon: Flag, date: '2019', title: 'Founded in South Tyrol', desc: 'Research roots in multilingual NLP and European data privacy.' },
    { icon: Building2, date: '2020', title: 'Shenzhen engineering hub', desc: 'Fast prototyping and hardware-integrated deployments.' },
    { icon: Rocket, date: '2022', title: 'First enterprise rollouts', desc: 'Automation across support and operations in 3 languages.' },
    { icon: Globe2, date: '2023', title: 'Cross-continental scaling', desc: 'Teams across EU and China, 24/7 support windows.' },
    { icon: Factory, date: '2024', title: 'Industry integrations', desc: 'Manufacturing, finance, and hospitality connectors.' },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{t('timeline_title')}</h3>
        <ol className="mt-8 relative border-l border-white/10 space-y-6">
          {items.map((m) => (
            <Milestone key={m.title} {...m} />
          ))}
        </ol>
      </div>
    </section>
  );
}
