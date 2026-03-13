export default function Science() {
  const research = [
    {
      title: 'Fulvic Acid Rich',
      stat: '>60%',
      description: 'High bioavailability ensures maximum absorption and cellular benefits'
    },
    {
      title: 'Bioactive Compounds',
      stat: '84+',
      description: 'Naturally occurring minerals supporting energy, focus, and recovery'
    },
    {
      title: 'Lab Verified',
      stat: '100%',
      description: 'Every batch tested for purity, potency, and harmful contaminants'
    },
    {
      title: 'Customer Satisfaction',
      stat: '4.8★',
      description: 'Average rating from 50,000+ verified customers worldwide'
    }
  ]

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-serif font-bold">Science Backed</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mt-4 mb-4">
            Verified Quality & Efficacy
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70 max-w-2xl mx-auto">
            Our shilajit is rigorously tested and verified to meet the highest standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {research.map((item, index) => (
            <div 
              key={index}
              className="fade-in bg-white rounded-xl p-8 text-center border border-stone/10 hover:border-bronze/30 transition-all hover:shadow-lg hover:shadow-bronze/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-serif font-bold text-gold mb-4">
                {item.stat}
              </div>
              <h3 className="text-lg font-serif font-bold text-bronze mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-stone/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-stone/5 to-bronze/5 rounded-xl p-8 md:p-12 border border-stone/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-serif font-bold text-bronze mb-6">
                Testing Standards
              </h4>
              <ul className="space-y-4 text-stone/70">
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>3rd-party laboratory verification</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Heavy metals testing (Pb, Cd, As, Hg)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Microbial contamination screening</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Fulvic acid content verification</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-bronze mb-6">
                Quality Guarantee
              </h4>
              <ul className="space-y-4 text-stone/70">
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>100% pure Himalayan shilajit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>No additives, fillers, or binders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Sustainably sourced & harvested</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>60-day satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
