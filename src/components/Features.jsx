import { Cpu, Workflow, ShieldCheck, Languages, LineChart } from "lucide-react";
import { useLanguage } from './LanguageContext';

function Features() {
  const { t } = useLanguage();
  const items = [
    { icon: Cpu, title: "AI-first architecture", desc: "LLM-powered understanding, custom tools and retrieval for your domain." },
    { icon: Workflow, title: "Workflow automation", desc: "Automate ticketing, approvals, reporting and more across your stack." },
    { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC2 practices, role permissions and audit trails built-in." },
    { icon: Languages, title: "Multilingual by default", desc: "Serve users in English, German, Italian and Chinese seamlessly." },
    { icon: LineChart, title: "Measurable outcomes", desc: "Track CSAT, resolution time and cost savings – prove ROI fast." },
  ];

  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.06),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">{t('features_title')}</h2>
          <p className="mt-3 text-white/70">{t('features_sub')}</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:bg-white/7 transition overflow-hidden">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center shadow-md shadow-fuchsia-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;