import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-bronze/10 to-gold/10">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-bronze mb-4">
          Join the Wellness Revolution
        </h2>
        
        <p className="text-lg text-stone/70 mb-8">
          Get exclusive wellness tips, special offers, and early access to new products.
          Plus, receive a 15% discount on your first order.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-bronze/20 focus:border-bronze outline-none transition"
            required
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-bronze text-cream rounded-lg hover:bg-stone transition-colors font-bold whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="text-green-600 text-sm font-bold">
            ✓ Thank you! Check your email for your 15% discount code.
          </p>
        )}

        <p className="text-xs text-stone/50 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
