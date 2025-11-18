import { Menu, Sparkles } from "lucide-react";
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useLanguage();
  return (
    <header className="relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight text-lg">Voltiq</div>
            <div className="text-xs text-white/60 -mt-0.5">AI Automation from South Tyrol</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#solutions" className="text-white/80 hover:text-white transition">{t('nav_solutions')}</a>
          <a href="#industries" className="text-white/80 hover:text-white transition">{t('nav_industries')}</a>
          <a href="#about" className="text-white/80 hover:text-white transition">{t('nav_about')}</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">{t('nav_contact')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a href="#contact" className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15 transition">Book a demo</a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;