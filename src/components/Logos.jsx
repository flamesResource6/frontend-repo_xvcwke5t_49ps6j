export default function Logos() {
  const logos = [
    { name: 'AlpineTech', url: 'https://dummyimage.com/120x36/ffffff/000000&text=AlpineTech' },
    { name: 'ShenOps', url: 'https://dummyimage.com/120x36/ffffff/000000&text=ShenOps' },
    { name: 'EuroBank', url: 'https://dummyimage.com/120x36/ffffff/000000&text=EuroBank' },
    { name: 'Touria', url: 'https://dummyimage.com/120x36/ffffff/000000&text=Touria' },
    { name: 'ManuWorks', url: 'https://dummyimage.com/120x36/ffffff/000000&text=ManuWorks' },
  ];

  return (
    <section className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {logos.map(l => (
              <img key={l.name} src={l.url} alt={l.name} className="h-6 w-auto grayscale brightness-200 contrast-125 opacity-80" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
