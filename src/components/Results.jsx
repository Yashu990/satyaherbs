export default function Results() {
  const results = [
    { weeks: '1-2', title: 'Energy Boost', description: 'Notice improved energy levels and reduced fatigue' },
    { weeks: '2-4', title: 'Mental Clarity', description: 'Enhanced focus and sharper cognitive function' },
    { weeks: '4-8', title: 'Full Transformation', description: 'Complete wellness shift with sustained benefits' }
  ]

  return (
    <section className="section-padding bg-stone/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-serif font-bold">Results Timeline</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mt-4 mb-4">
            See Results in Weeks
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="bg-white rounded-xl p-8 h-full border border-stone/10 hover:border-bronze/30 transition-all">
                <div className="text-sm font-serif font-bold text-gold tracking-wider mb-4 uppercase">
                  Week {result.weeks}
                </div>
                <h3 className="text-2xl font-serif font-bold text-bronze mb-4">
                  {result.title}
                </h3>
                <p className="text-stone/70">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-bronze/5 to-gold/5 rounded-xl border border-bronze/20 text-center">
          <p className="text-stone/70 text-lg mb-6">
            <strong className="text-bronze">Individual results vary</strong> based on lifestyle, diet, and existing health conditions. Most customers report noticeable improvements within 1-2 weeks.
          </p>
          <button className="button-primary font-bold">Start Your Journey</button>
        </div>
      </div>
    </section>
  )
}
