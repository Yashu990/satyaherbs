import aboutImg from '../images /Unlock the natural power of Salajeet for holistic wellness_.jpeg'

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <div className="inline-block mb-6">
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-serif font-bold">Our Story</span>
              <div className="h-0.5 w-8 bg-gold/40 mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-8 leading-tight">
              20+ Years of Himalayan Excellence
            </h2>
            
            <p className="text-lg text-stone/70 mb-6 leading-relaxed">
              Deep within the pristine Himalayan mountains lies our heritage. For over two decades, we've sourced and purified shilajit using time-honored methods combined with modern scientific verification.
            </p>
            
            <p className="text-lg text-stone/70 mb-8 leading-relaxed">
              Every batch undergoes rigorous testing to ensure exceptional purity, maximum potency, and complete safety. We believe in radical transparency and the transformative power of nature.
            </p>

            <button className="button-primary font-bold text-lg">Learn Our Story</button>
          </div>

          <div className="bg-gradient-to-br from-bronze/10 to-gold/10 rounded-2xl p-12 aspect-square flex items-center justify-center fade-in overflow-hidden">
            <img 
              src={aboutImg}
              alt="Himalayan Wellness"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
