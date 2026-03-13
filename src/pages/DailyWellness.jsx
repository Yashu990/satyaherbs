import heroImg from '../images /hero_daily_wellness.png'
import prod1 from '../images /product_shilajit_1.png'
import prod2 from '../images /product_shilajit_2.png'
import prod3 from '../images /product_shilajit_3.png'

import { useCart } from "../context/CartContext"

export default function DailyWellness() {
    const { addToCart } = useCart()
  const products = [
    {
      id: 1,
      name: 'Daily Energy & Vitality',
      price: '₹1,999',
      originalPrice: '₹2,799',
      rating: 4.9,
      reviews: 2341,
      description: 'Start your day with peak energy and sustained vitality. Pure Himalayan Shilajit extract with powerful adaptogens.',
      features: ['Increases Energy', 'Mental Clarity', '100% Natural', 'Lab Tested'],
      badge: 'Best Seller',
      img: prod1
    },
    {
      id: 2,
      name: 'Immune Boosting Blend',
      price: '₹2,499',
      originalPrice: '₹3,299',
      rating: 4.8,
      reviews: 1876,
      description: 'Strengthen your immune system with scientifically formulated natural ingredients. Combat fatigue and stay healthy.',
      features: ['Immune Support', 'Fulvic Acid Rich', 'Trace Minerals', 'Antioxidant Power'],
      badge: 'Top Rated',
      img: prod2
    },
    {
      id: 3,
      name: 'Daily Wellness Kit',
      price: '₹4,999',
      originalPrice: '₹6,999',
      rating: 4.9,
      reviews: 3102,
      description: 'Complete daily wellness solution — energy, immunity, and recovery in one bundle.',
      features: ['3 Products Bundled', 'Complete Support', 'Best Value', 'Free Shipping'],
      badge: 'Best Value',
      img: prod3
    }
  ]

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '100%', label: 'Natural' },
    { value: '30-Day', label: 'Guarantee' }
  ]

  const benefits = [
    { icon: '⚡', title: 'Sustained Energy', desc: 'Clean energy from dawn to dusk, no crashes' },
    { icon: '🛡️', title: 'Immune Defense', desc: 'Fortify your body with proven natural compounds' },
    { icon: '🧠', title: 'Mental Clarity', desc: 'Sharp focus throughout the day' },
    { icon: '🌿', title: '100% Natural', desc: 'Zero synthetic additives, zero fillers' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)' }}></div>
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-20" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: 'rgba(200,164,90,0.2)', color: '#c8a45a', border: '1px solid rgba(200,164,90,0.5)' }}>
              🌿 Trusted by 50,000+ Customers
            </span>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Daily <span style={{ color: '#c8a45a' }}>Wellness</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: '#e0e0e0', maxWidth: '540px' }}>
              Essential nutrition for everyday vitality — powered by pure Himalayan Shilajit & trace minerals
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="px-4 py-3 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(200,164,90,0.3)', backdropFilter: 'blur(10px)' }}>
                  <div className="font-bold text-lg" style={{ color: '#c8a45a' }}>{s.value}</div>
                  <div className="text-xs" style={{ color: '#bbb' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-3 rounded-xl font-bold text-black text-base transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)' }}>Shop Now →</button>
              <button className="px-7 py-3 rounded-xl font-semibold text-white text-base hover:bg-white/10 transition-all" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-black mb-3" style={{ fontSize: '2rem' }}>Start Your Wellness Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">100% pure Himalayan Shilajit and trace minerals to support your energy, immunity, and overall health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
              {/* Real Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)' }}></div>
                {product.badge && (
                  <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full z-10" style={{ background: '#c8a45a', color: '#000' }}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-black text-xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-xl" style={{ color: '#c8a45a' }}>{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <span style={{ color: '#c8a45a' }}>★★★★★</span>
                  <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.features.map((f, i) => (
                    <div key={i} className="text-xs flex items-center gap-1 text-gray-700">
                      <span style={{ color: '#c8a45a' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] text-white" style={{ background: 'linear-gradient(135deg, #0a0800, #1a1200)' }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="font-serif font-bold text-center text-black mb-8 text-2xl">Why Choose Our Daily Wellness Products?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6 rounded-2xl" style={{ background: '#f9f7f3', border: '1px solid #ece8df' }}>
                <div className="text-4xl mb-3">{b.icon}</div>
                <div className="font-bold text-black mb-2 text-sm">{b.title}</div>
                <p className="text-xs text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0800, #1a1200)' }}>
          <h3 className="font-serif font-bold text-3xl mb-3">Ready to Transform Your Wellness?</h3>
          <p className="text-lg mb-6" style={{ color: '#d0d0d0' }}>Join 50,000+ customers experiencing life-changing results. 30-day money-back guarantee.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-black text-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)' }}>
            Shop Daily Wellness →
          </button>
        </div>
      </div>
    </div>
  )
}