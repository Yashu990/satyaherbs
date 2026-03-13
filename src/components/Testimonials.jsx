export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mehra',
      role: 'Entrepreneur',
      image: '🧑‍💼',
      rating: 5,
      text: 'SATYAHERBS completely transformed my energy levels. I was skeptical initially, but results after 2 weeks were undeniable. My focus improved dramatically, and I\'ve never felt better. Recommending to everyone!',
      verified: true
    },
    {
      name: 'Priya Sharma',
      role: 'Fitness Coach',
      image: '👩‍🏫',
      rating: 5,
      text: 'The purity and quality are unmatched in the market. I recommend SATYAHERBS to all my clients. The transparency about testing and sourcing gives me complete trust. Pure excellence.',
      verified: true
    },
    {
      name: 'Arjun Kapoor',
      role: 'Professional Athlete',
      image: '🏃',
      rating: 5,
      text: 'Recovery time has improved significantly. Game-changer for my training routine. This is the real deal. The results speak for themselves. Best investment I\'ve made.',
      verified: true
    },
    {
      name: 'Deepak Singh',
      role: 'Software Engineer',
      image: '👨‍💻',
      rating: 5,
      text: 'Mental clarity is real. Better focus at work, improved sleep, more energy. The best part? No crash like with energy drinks. Sustainable energy boost. Couldn\'t be happier.',
      verified: true
    }
  ]

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-6">
            Loved by 50,000+ Wellness Seekers
          </h2>
          <p className="text-lg text-stone/70 mb-4">
            Join thousands experiencing the SATYAHERBS difference
          </p>
          <div className="flex justify-center items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-2xl">★</span>
              ))}
            </div>
            <span className="text-stone/70 font-bold">4.8/5.0 Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="fade-in bg-white p-8 rounded-xl border border-bronze/20 hover:border-bronze/40 hover:shadow-lg transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-start">
                  <span className="text-4xl">{testimonial.image}</span>
                  <div>
                    <p className="font-serif font-bold text-bronze text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-stone/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">
                    ✓ Verified
                  </span>
                )}
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              
              <p className="text-stone/70 leading-relaxed italic mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="text-xs text-stone/50 border-t border-stone/10 pt-4">
                Verified customer
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-bronze/10 to-gold/10 rounded-2xl p-8 md:p-12 text-center border border-bronze/20">
          <h3 className="text-2xl font-serif font-bold text-bronze mb-4">
            Ready to Join Thousands of Happy Customers?
          </h3>
          <p className="text-stone/70 mb-6 max-w-2xl mx-auto">
            Experience the transformation. Start your wellness journey with SATYAHERBS today.
          </p>
          <button className="button-primary text-lg font-bold">
            Get Your Premium Shilajit Now
          </button>
        </div>
      </div>
    </section>
  )
}
