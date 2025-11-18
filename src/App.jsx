import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import CTA from './components/CTA';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';
import { ScrollProgress } from './components/Transitions';
import { LanguageProvider } from './components/LanguageContext';
import Timeline from './components/Timeline';
import Logos from './components/Logos';
import Founders from './components/Founders';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-white relative">
        <ScrollProgress />
        <BackgroundFX />

        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Logos />
        <Features />
        <Industries />
        <Founders />
        <CTA />

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
