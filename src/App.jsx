import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import CTA from './components/CTA';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';
import { ScrollProgress } from './components/Transitions';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <ScrollProgress />
      <BackgroundFX />

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Industries />
      <CTA />

      <Footer />
    </div>
  );
}

export default App;
