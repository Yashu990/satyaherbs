export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Harvest',
      description: 'Sustainably sourced from pristine Himalayan peaks, 15,000+ ft altitude'
    },
    {
      number: '02',
      title: 'Extract',
      description: 'Traditional methods preserving all beneficial compounds'
    },
    {
      number: '03',
      title: 'Purify',
      description: 'Advanced filtration process removing impurities'
    },
    {
      number: '04',
      title: 'Test',
      description: 'Laboratory verified for purity, potency, and safety standards'
    },
  ]

  return (
    <section className="section-padding bg-stone/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-4">
            Our Process
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70">
            From pristine peaks to your wellness
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="fade-in flex gap-8 items-start" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-bronze text-cream text-lg font-serif font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-serif font-bold text-bronze mb-2">
                  {step.title}
                </h3>
                <p className="text-stone/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
