import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Decorative starfield dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,0.6) 0.75px, transparent 0.75px)`,
        backgroundSize: '18px 18px'
      }} />

      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Voltiq • South Tyrol · Tirol del Sud · 南蒂罗尔</div>
          <div className="text-white/60 text-sm">Made with love by a Sino-European team</div>
        </div>
      </footer>
    </div>
  );
}

export default App;