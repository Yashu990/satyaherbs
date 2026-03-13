import { useCart } from '../context/CartContext'
import heroImg from '../images /hero_hair_care.png'
import prod1 from '../images /product_shilajit_1.png'
import prod2 from '../images /product_shilajit_2.png'
import prod3 from '../images /product_shilajit_3.png'

export default function HairCare() {
    const { addToCart } = useCart()
  const products = [
    {
      id: 1,
      name: 'Hair Growth Formula',
      price: '₹1,699',
      originalPrice: '₹2,299',
      rating: 4.9,
      reviews: 7823,
      description: 'Stimulate dormant follicles and accelerate hair growth with our biotin-rich mineral blend and Shilajit extract.',
      features: ['70% More Growth', 'Follicle Boost', 'Biotin Rich', 'Lab Tested'],
      badge: 'Best Seller',
      img: prod1
    },
    {
      id: 2,
      name: 'Anti-Hair Fall Blend',
      price: '₹1,999',
      originalPrice: '₹2,699',
      rating: 4.8,
      reviews: 6241,
      description: 'Reduce hair fall by up to 85% in 90 days. Strengthens hair roots with essential trace minerals.',
      features: ['85% Less Fall', 'Root Strength', 'Scalp Health', 'DHT Blocker'],
      badge: 'Top Rated',
      img: prod2
    },
    {
      id: 3,
      name: 'Complete Hair Wellness',
      price: '₹3,999',
      originalPrice: '₹5,999',
      rating: 4.9,
      reviews: 9102,
      description: 'All-in-one hair transformation — growth, anti-fall, and shine in one premium bundle.',
      features: ['3 Products', 'Save ₹2,000', 'Max Results', 'Free Shipping'],
      badge: 'Best Value',
      img: prod3
    }
  ]
  const stats = [
    { value: '↑70%', label: 'Hair Growth Rate' },
    { value: '↓85%', label: 'Hair Fall' },
    { value: '90 Days', label: 'Results' },
    { value: '50K+', label: 'Customers' }
  ]
  const benefits = [
    { icon: '💇', title: 'Faster Growth', desc: '70% increase in hair growth in 90 days' },
    { icon: '🛡️', title: 'Root Strength', desc: 'Fortify hair roots from the inside out' },
    { icon: '💎', title: 'Natural Shine', desc: 'Lustrous, glossy hair with trace minerals' },
    { icon: '🌿', title: 'Zero Chemicals', desc: 'No harmful additives, pure mineral formula' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.15) 100%)' }}></div>
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-20" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: 'rgba(200,164,90,0.2)', color: '#c8a45a', border: '1px solid rgba(200,164,90,0.5)' }}>
              💇 Clinical Results in 90 Days
            </span>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Hair <span style={{ color: '#c8a45a' }}>Care</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: '#e0e0e0', maxWidth: '520px' }}>
              Strong, thick, healthy hair naturally — restore growth, stop fall, and nourish every strand from the inside
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
          <h2 className="font-serif font-bold text-black mb-3" style={{ fontSize: '2rem' }}>Premium Hair Health Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Restore hair growth and strength from within. Packed with biotin, minerals, and natural compounds to combat hair loss and promote lustrous growth.</p>
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
                <div className="flex items-center gap-1 mb-3"><span style={{ color: '#c8a45a' }}>★★★★★</span><span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span></div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">{product.features.map((f, i) => (<div key={i} className="text-xs flex items-center gap-1 text-gray-700"><span style={{ color: '#c8a45a' }}>✓</span> {f}</div>))}</div>
                <button className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #050a00, #0f1800)' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h3 className="font-serif font-bold text-center text-black mb-8 text-2xl">Why Your Hair Deserves the Best?</h3>
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
        <div className="rounded-2xl p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #050a00, #0f1800)' }}>
          <h3 className="font-serif font-bold text-3xl mb-3">Transform Your Hair in 90 Days</h3>
          <p className="text-lg mb-6" style={{ color: '#d0d0d0' }}>50,000+ customers with clinically proven results. Stop hair fall, restart growth — guaranteed.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-black text-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)' }}>Shop Hair Care →</button>
        </div>
      </div>
    </div>
  )
}