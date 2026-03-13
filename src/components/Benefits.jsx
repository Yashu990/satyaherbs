export default function Benefits() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Energy & Vitality',
      description: 'Natural boost in energy levels and sustained endurance throughout the day'
    },
    {
      icon: '🧠',
      title: 'Mental Clarity',
      description: 'Enhanced focus, concentration, and cognitive performance'
    },
    {
      icon: '💪',
      title: 'Strength & Recovery',
      description: 'Support muscle recovery and overall physical resilience'
    },
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'Pure mineral resin - no additives, no fillers, no compromises'
    },
    {
      icon: '✨',
      title: 'Antioxidant Power',
      description: 'Rich in fulvic acid for cellular health and protection'
    },
    {
      icon: '🎯',
      title: 'Holistic Wellness',
      description: 'Support for overall wellbeing and longevity'
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-cream to-stone/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-4">
            Why SATYAHERBS
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70 max-w-2xl mx-auto">
            The six essential benefits of pure Himalayan Shilajit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="fade-in p-8 bg-white rounded-lg border border-stone/10 hover:border-bronze/30 transition-all duration-300 hover:shadow-lg hover:shadow-bronze/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-5">{benefit.icon}</div>
              <h3 className="text-lg font-serif font-bold text-bronze mb-3">
                {benefit.title}
              </h3>
              <p className="text-stone/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
