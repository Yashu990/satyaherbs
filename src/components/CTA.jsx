export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-bronze via-stone to-bronze text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cream/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center fade-in relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Your Journey to Optimal Wellness Starts Today
        </h2>
        
        <p className="text-xl mb-4 opacity-95 leading-relaxed font-light">
          Join 50,000+ satisfied customers experiencing the transformative power of 
          premium Himalayan Shilajit.
        </p>

        <p className="text-lg mb-12 opacity-90 font-serif italic">
          Experience noticeable improvements in energy, focus, and overall wellness or get 100% of your money back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-10 py-4 bg-cream text-bronze rounded-lg hover:bg-gold transition-all duration-300 font-serif font-bold text-lg shadow-lg hover:shadow-xl">
            Order Your Premium Shilajit
          </button>
          <button className="px-10 py-4 border-2 border-cream text-cream rounded-lg hover:bg-cream hover:text-bronze transition-all duration-300 font-serif font-bold text-lg">
            Learn More
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-cream/30">
          <div>
            <p className="text-2xl font-serif font-bold mb-1">🚚</p>
            <p className="text-sm opacity-90">Free Shipping Above ₹999</p>
          </div>
          <div>
            <p className="text-2xl font-serif font-bold mb-1">⚡</p>
            <p className="text-sm opacity-90">Ships Within 24 Hours</p>
          </div>
          <div>
            <p className="text-2xl font-serif font-bold mb-1">🔒</p>
            <p className="text-sm opacity-90">100% Secure Checkout</p>
          </div>
        </div>

        <p className="text-xs opacity-70 mt-8">
          Limited time: Subscribe now and get 15% off your first order + exclusive wellness tips delivered weekly
        </p>
      </div>
    </section>
  )
}
