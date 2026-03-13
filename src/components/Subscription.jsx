export default function Subscription() {
  const plans = [
    {
      name: 'One Time',
      price: '₹2,499',
      period: '30g bottle',
      features: ['1x Premium Shilajit', 'Free shipping above ₹999', 'Full access to guides']
    },
    {
      name: 'Subscribe & Save',
      price: '₹1,999',
      period: 'per month',
      badge: 'Save 20%',
      features: ['1x Premium Shilajit monthly', 'Free shipping always', 'Cancel anytime', '24/7 priority support']
    }
  ]

  return (
    <section className="section-padding bg-stone/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-serif font-bold">Save More</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mt-4 mb-4">
            Subscribe & Save
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70">
            Never run out. Cancel anytime. Premium Shilajit delivered to your door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`fade-in rounded-xl overflow-hidden transition-all ${
                index === 1 
                  ? 'border-2 border-gold shadow-xl shadow-gold/20 md:scale-105' 
                  : 'border border-stone/10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8 bg-white h-full flex flex-col">
                {plan.badge && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-xs font-bold tracking-wider uppercase rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-serif font-bold text-bronze mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-8">
                  <span className="text-4xl font-serif font-bold text-bronze">
                    {plan.price}
                  </span>
                  <span className="text-stone/60 ml-2">{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-stone/70">
                      <span className="text-gold text-xl flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  index === 1
                    ? 'bg-gold text-stone hover:bg-stone hover:text-gold'
                    : 'bg-bronze text-cream hover:bg-stone'
                }`}>
                  {index === 1 ? 'Subscribe Now' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-xl border border-stone/10 text-center">
          <p className="text-stone/70 mb-4">
            <span className="font-bold text-bronze">Flexible & Convenient:</span> Modify frequency or skip months anytime. No commitments, no penalties.
          </p>
          <p className="text-sm text-stone/60">
            All subscriptions include free shipping and our 60-day satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
