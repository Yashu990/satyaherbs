import { useCart } from '../context/CartContext'
import heroImg from '../images /hero_mens_health.png'
import prod1 from '../images /product_shilajit_1.png'
import prod2 from '../images /product_shilajit_2.png'
import prod3 from '../images /product_shilajit_3.png'

export default function MensHealth() {
    const { addToCart } = useCart()
  const products = [
    {
      id: 1,
      name: "Men's Vitality Formula",
      price: '₹2,299',
      originalPrice: '₹2,999',
      rating: 4.9,
      reviews: 3421,
      description: 'Boost testosterone naturally, improve energy, stamina, and libido with our clinically studied Shilajit-based formulation.',
      features: ['Testosterone Support', 'Stamina Boost', 'Libido Enhancement', 'Lab Tested'],
      badge: 'Best Seller',
      img: prod1
    },
    {
      id: 2,
      name: "Men's Focus & Power",
      price: '₹1,999',
      originalPrice: '₹2,699',
      rating: 4.7,
      reviews: 2164,
      description: 'Sharpen mental clarity, enhance cognitive performance, and sustain focus during long workdays and workouts.',
      features: ['Mental Clarity', 'Brain Boost', 'Stress Relief', 'Adaptogenic Herbs'],
      badge: 'New',
      img: prod2
    },
    {
      id: 3,
      name: "Men's Complete Bundle",
      price: '₹5,999',
      originalPrice: '₹8,499',
      rating: 4.9,
      reviews: 4830,
      description: "Full-spectrum men's wellness package covering vitality, hormonal health, and physical performance.",
      features: ['4 Products', 'Complete Coverage', 'Free Shipping', 'Save ₹2,500'],
      badge: 'Best Value',
      img: prod3
    }
  ]
  const stats = [
    { value: '1L+', label: 'Men Transformed' },
    { value: '2-4 Wks', label: 'Visible Results' },
    { value: '100%', label: 'Natural Herbs' },
    { value: '4.9★', label: 'Average Rating' }
  ]
  const benefits = [
    { icon: '🦁', title: 'Testosterone Boost', desc: 'Natural support for optimal hormone levels' },
    { icon: '💪', title: 'Physical Stamina', desc: 'Greater endurance in every activity' },
    { icon: '🧬', title: 'Hormonal Balance', desc: 'Clinically studied herbs for male health' },
    { icon: '🧠', title: 'Mental Focus', desc: 'Clear thinking and sharpness all day' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 100%)' }}></div>
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-20" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: 'rgba(200,164,90,0.2)', color: '#c8a45a', border: '1px solid rgba(200,164,90,0.5)' }}>
              🦁 Trusted by 1 Lakh+ Men Worldwide
            </span>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Men's <span style={{ color: '#c8a45a' }}>Health</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: '#e0e0e0', maxWidth: '520px' }}>
              Complete wellness for modern men — naturally boost testosterone, stamina & mental power
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
          <h2 className="font-serif font-bold text-black mb-3" style={{ fontSize: '2rem' }}>Premium Men's Health Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive wellness for men. Support hormonal balance, stamina, and vitality with our scientifically-backed products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100">
              <div className="relative h-56 overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }}></div>
                {product.badge && <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#c8a45a', color: '#000' }}>{product.badge}</span>}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-black text-xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-xl" style={{ color: '#c8a45a' }}>{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <span style={{ color: '#c8a45a' }}>★★★★★</span>
                  <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.features.map((f, i) => (
                    <div key={i} className="text-xs flex items-center gap-1 text-gray-700"><span style={{ color: '#c8a45a' }}>✓</span> {f}</div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #0a0500, #1a0f00)' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h3 className="font-serif font-bold text-center text-black mb-8 text-2xl">Why Men Choose SATYAHERBS?</h3>
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
        <div className="rounded-2xl p-10 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0500, #1a0f00)' }}>
          <h3 className="font-serif font-bold text-3xl mb-3">Reclaim Your Peak Masculinity</h3>
          <p className="text-lg mb-6" style={{ color: '#d0d0d0' }}>100,000+ men transformed their vitality. Results visible in 2-4 weeks, guaranteed.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-black text-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)' }}>Shop Men's Health →</button>
        </div>
      </div>
    </div>
  )
}