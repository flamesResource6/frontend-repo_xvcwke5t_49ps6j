function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(251,191,36,0.10),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-amber-500/20">
          <div className="px-8 py-12 md:px-16 md:py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">See Voltiq in action</h3>
              <p className="mt-3 text-white/80">Book a live demo with our team. We'll map your processes and show ROI projections within a week.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@voltiq.ai" className="inline-flex rounded-full px-5 py-3 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition">Email us</a>
                <a href="#" className="inline-flex rounded-full px-5 py-3 text-sm font-medium bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 transition">Download one-pager</a>
              </div>
            </div>
            <form className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Name" className="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
                <input placeholder="Company" className="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
              </div>
              <input placeholder="Email" className="mt-4 w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
              <textarea placeholder="What would you like to automate?" className="mt-4 w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" rows={4} />
              <button type="button" className="mt-4 w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-4 py-3 font-medium">Request demo</button>
              <p className="mt-3 text-xs text-white/60">By submitting you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;