function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Voltiq • South Tyrol · Tirol del Sud · 南蒂罗尔</div>
        <div className="text-white/60 text-sm">Sino-European team • Built with care</div>
      </div>
    </footer>
  );
}

export default Footer;
