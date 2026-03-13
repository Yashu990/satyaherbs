export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Banner Section */}
      <div className="relative h-screen w-full bg-gradient-to-br from-stone via-bronze/20 to-gold/10 overflow-hidden pt-20">
        {/* Background image placeholder with premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone/80 via-bronze/40 to-gold/20">
          {/* Mountain-like SVG background pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 600">
            <path d="M0,300 Q300,100 600,200 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-gold"/>
          </svg>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 text-center">
            {/* Tag */}
            <div className="mb-8 inline-block">
              <span className="text-gold/80 text-sm tracking-[0.2em] uppercase font-serif font-bold">Pure Himalayan Heritage</span>
              <div className="h-0.5 w-12 bg-gold/40 mx-auto mt-3"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-cream mb-6 leading-tight tracking-tight">
              SATYAHERBS
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gold/90 font-light mb-8 max-w-3xl mx-auto">
              Premium Himalayan Shilajit for Extraordinary Wellness
            </p>

            {/* Tagline */}
            <p className="text-lg text-cream/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Pure. Potent. Powerful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-10 py-4 bg-gold text-stone rounded-lg hover:bg-cream transition-all duration-300 font-serif font-bold text-lg shadow-xl hover:shadow-2xl">
                Shop Now
              </button>
              <button className="px-10 py-4 border-2 border-cream/50 text-cream rounded-lg hover:border-cream hover:bg-cream/10 transition-all duration-300 font-serif font-bold text-lg backdrop-blur-sm">
                Explore
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-cream/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Lab Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>100% Pure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <p className="text-cream/50 text-xs uppercase tracking-widest">Scroll</p>
            <svg className="w-5 h-8 text-cream/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Section - Below Hero */}
      <div className="relative z-20 -mt-20 mx-4 sm:mx-8 md:mx-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-bronze/10">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-2">50K+</p>
                <p className="text-sm text-stone/60 uppercase tracking-widest">Happy Customers</p>
              </div>
              <div className="text-center border-l border-stone/10 pl-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-2">20+</p>
                <p className="text-sm text-stone/60 uppercase tracking-widest">Years Heritage</p>
              </div>
              <div className="text-center border-l border-stone/10 pl-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-2">100%</p>
                <p className="text-sm text-stone/60 uppercase tracking-widest">Pure Shilajit</p>
              </div>
              <div className="text-center border-l border-stone/10 pl-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-2">4.8★</p>
                <p className="text-sm text-stone/60 uppercase tracking-widest">Overall Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
