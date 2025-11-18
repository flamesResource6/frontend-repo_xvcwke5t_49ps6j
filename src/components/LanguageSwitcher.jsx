import { Globe2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="relative">
      <select
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="appearance-none bg-white/10 text-white text-sm rounded-full pl-8 pr-3 py-2 ring-1 ring-white/15 hover:bg-white/15 focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="it">IT</option>
        <option value="zh">中文</option>
      </select>
      <Globe2 className="h-4 w-4 text-white absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
