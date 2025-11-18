import { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext();

const messages = {
  en: {
    nav_solutions: 'Solutions',
    nav_industries: 'Industries',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: 'Based in South Tyrol • Global team • Chinese engineering excellence',
    hero_title: 'Automate your operations with Voltiq AI',
    hero_sub: 'A multilingual AI chatbot engineered in South Tyrol with strong Chinese engineering roots. We streamline processes, reduce response times, and integrate with your tools — securely.',
    hero_cta_primary: 'Request a demo',
    hero_cta_secondary: 'Explore solutions',
    features_title: 'Built for modern operations',
    features_sub: 'From South Tyrol to the world: an AI chatbot shaped by European quality and Chinese engineering precision.',
    industries_title: 'Where Voltiq excels',
    industries_sub: 'Designed for multilingual teams across Europe and Asia. We blend Alpine reliability with Shenzhen speed.',
    cta_title: 'See Voltiq in action',
    cta_sub: "Book a live demo with our team. We'll map your processes and show ROI projections within a week.",
    about_title: 'From the Alps to the Pearl River Delta',
    timeline_title: 'Made in South Tyrol, engineered in China',
    founders_title: 'What our founders believe',
  },
  de: {
    nav_solutions: 'Lösungen',
    nav_industries: 'Branchen',
    nav_about: 'Über uns',
    nav_contact: 'Kontakt',
    hero_badge: 'Sitz in Südtirol • Globales Team • Chinesische Ingenieurskunst',
    hero_title: 'Automatisieren Sie Ihre Abläufe mit Voltiq AI',
    hero_sub: 'Ein mehrsprachiger AI-Chatbot aus Südtirol mit starken chinesischen Ingenieurswurzeln. Wir verschlanken Prozesse, reduzieren Reaktionszeiten und integrieren sicher in Ihre Tools.',
    hero_cta_primary: 'Demo anfragen',
    hero_cta_secondary: 'Lösungen entdecken',
    features_title: 'Für moderne Abläufe gebaut',
    features_sub: 'Von Südtirol in die Welt: Ein AI-Chatbot geprägt von europäischer Qualität und chinesischer Präzision.',
    industries_title: 'Wo Voltiq glänzt',
    industries_sub: 'Für mehrsprachige Teams in Europa und Asien. Alpine Zuverlässigkeit trifft Shenzhen-Tempo.',
    cta_title: 'Erleben Sie Voltiq live',
    cta_sub: 'Buchen Sie eine Live-Demo. Wir kartieren Ihre Prozesse und zeigen ROI-Projektionen in einer Woche.',
    about_title: 'Von den Alpen zum Perlflussdelta',
    timeline_title: 'Hergestellt in Südtirol, entwickelt in China',
    founders_title: 'Woran unsere Gründer glauben',
  },
  it: {
    nav_solutions: 'Soluzioni',
    nav_industries: 'Settori',
    nav_about: 'Chi siamo',
    nav_contact: 'Contatti',
    hero_badge: 'Sede in Alto Adige • Team globale • Eccellenza ingegneristica cinese',
    hero_title: 'Automatizza le tue operazioni con Voltiq AI',
    hero_sub: 'Un chatbot AI multilingue progettato in Alto Adige con forti radici ingegneristiche cinesi. Snelliamo i processi, riduciamo i tempi di risposta e integriamo in sicurezza nei tuoi strumenti.',
    hero_cta_primary: 'Richiedi una demo',
    hero_cta_secondary: 'Esplora le soluzioni',
    features_title: 'Progettato per le operazioni moderne',
    features_sub: 'Dall’Alto Adige al mondo: un chatbot AI plasmato da qualità europea e precisione cinese.',
    industries_title: 'Dove Voltiq eccelle',
    industries_sub: 'Per team multilingue in Europa e Asia. Affidabilità alpina e velocità di Shenzhen.',
    cta_title: 'Guarda Voltiq in azione',
    cta_sub: 'Prenota una demo live. Mappiamo i tuoi processi e mostriamo il ROI in una settimana.',
    about_title: 'Dalle Alpi al Delta del Fiume delle Perle',
    timeline_title: 'Fatto in Alto Adige, ingegnerizzato in Cina',
    founders_title: 'La visione dei fondatori',
  },
  zh: {
    nav_solutions: '解决方案',
    nav_industries: '行业',
    nav_about: '关于我们',
    nav_contact: '联系',
    hero_badge: '总部南蒂罗尔 • 全球团队 • 中国工程实力',
    hero_title: '用 Voltiq AI 自动化您的运营',
    hero_sub: '我们的多语言 AI 聊天机器人源自南蒂罗尔，并融合中国工程基因。它能精简流程、缩短响应时间，并安全接入您的工具。',
    hero_cta_primary: '预约演示',
    hero_cta_secondary: '了解解决方案',
    features_title: '为现代运营而生',
    features_sub: '从南蒂罗尔走向世界：融合欧洲质量与中国工程精度的 AI 聊天机器人。',
    industries_title: 'Voltiq 的优势领域',
    industries_sub: '面向欧洲与亚洲的多语言团队。阿尔卑斯可靠性与深圳速度相结合。',
    cta_title: '亲眼看看 Voltiq',
    cta_sub: '预约现场演示。我们将在一周内绘制流程并给出 ROI 预估。',
    about_title: '从阿尔卑斯到珠江三角洲',
    timeline_title: '源于南蒂罗尔，工程于中国',
    founders_title: '创始人理念',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => (key) => messages[lang][key] ?? key, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
