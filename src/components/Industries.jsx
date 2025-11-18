import { useLanguage } from './LanguageContext';

function Industries() {
  const { t } = useLanguage();
  const sectors = [
    { name: "Manufacturing", detail: "Automate quality checks, maintenance scheduling and supplier ops." },
    { name: "Tourism & Hospitality", detail: "Concierge chat, bookings, cross-language support for guests." },
    { name: "Finance", detail: "KYC workflows, compliance checks and client onboarding automation." },
    { name: "Healthcare", detail: "Appointment coordination, triage and multilingual patient support." },
    { name: "Logistics", detail: "Order status, customs paperwork, cross-border ops in multiple languages." },
    { name: "IT & Support", detail: "Ticket deflection, self-serve resets and change approvals." },
  ];

  return (
    <section id="industries" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">{t('industries_title')}</h2>
          <p className="mt-3 text-white/70">{t('industries_sub')}</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s) => (
            <div key={s.name} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 hover:bg-white/7 transition">
              <div className="text-white font-medium">{s.name}</div>
              <div className="mt-2 text-white/70 text-sm">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;