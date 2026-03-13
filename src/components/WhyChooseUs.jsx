export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🏔️',
      title: 'Sourced from 15,000+ ft',
      description: 'Only the purest mineral resin from pristine Himalayan peaks'
    },
    {
      icon: '🔬',
      title: 'Lab Verified',
      description: '3rd-party tested for purity, potency, and contaminants'
    },
    {
      icon: '⚗️',
      title: 'Traditional + Scientific',
      description: 'Ancient wisdom combined with modern verification'
    },
    {
      icon: '🌱',
      title: 'Sustainably Harvested',
      description: 'Eco-friendly practices that preserve ecosystems'
    },
    {
      icon: '⭐',
      title: '50,000+ Happy Customers',
      description: '4.8/5 average rating from verified buyers'
    },
    {
      icon: '💯',
      title: '60-Day Guarantee',
      description: 'Full refund if not satisfied. No questions asked.'
    },
  ]

  return (
    <section className="section-padding bg-stone/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-4">
            Why Choose SATYAHERBS
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70">
            Premium quality backed by science, heritage, and customer trust
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="fade-in p-6 bg-white rounded-lg border border-stone/10 hover:border-bronze/30 transition-all hover:shadow-lg hover:shadow-bronze/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-serif font-bold text-bronze mb-3">
                {reason.title}
              </h3>
              <p className="text-stone/70 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
