import { useCart } from '../context/CartContext'
import heroImg from '../images /hero_heart_care.png'
import prod1 from '../images /product_shilajit_1.png'
import prod2 from '../images /product_shilajit_2.png'
import prod3 from '../images /product_shilajit_3.png'

export default function HeartCare() {
    const { addToCart } = useCart()
  const products = [
    {
      id: 1,
      name: 'Heart Support Formula',
      price: '₹2,999',
      originalPrice: '₹3,999',
      rating: 4.9,
      reviews: 2841,
      description: 'Daily cardiovascular support with CoQ10, natural antioxidants, and fulvic acid for a strong and healthy heart.',
      features: ['CoQ10 Rich', 'BP Support', 'Antioxidants', 'Lab Tested'],
      badge: 'Best Seller',
      img: prod1
    },
    {
      id: 2,
      name: 'Cholesterol Balance',
      price: '₹3,499',
      originalPrice: '₹4,499',
      rating: 4.8,
      reviews: 2163,
      description: 'Maintain healthy cholesterol levels naturally with plant-based compounds and trace minerals for arterial health.',
      features: ['LDL Reduction', 'HDL Boost', 'Arterial Health', 'Plant-Based'],
      badge: 'Doctor Recommended',
      img: prod2
    },
    {
      id: 3,
      name: 'Complete Heart Bundle',
      price: '₹6,999',
      originalPrice: '₹9,999',
      rating: 4.9,
      reviews: 3582,
      description: 'Complete cardiovascular support — BP management, cholesterol balance, and heart muscle support.',
      features: ['3 Products', 'Full Coverage', 'Best Value', 'Free Shipping'],
      badge: 'Best Value',
      img: prod3
    }
  ]
  const stats = [
    { value: '88%', label: 'Improved Circulation' },
    { value: '12 Wks', label: 'To Results' },
    { value: '0%', label: 'Synthetic Chemicals' },
    { value: '4.9★', label: 'Average Rating' }
  ]
  const benefits = [
    { icon: '❤️', title: 'Heart Strength', desc: 'Clinically validated cardiac muscle support' },
    { icon: '🩸', title: 'BP Management', desc: 'Natural compounds for healthy blood pressure' },
    { icon: '🔬', title: 'Lipid Balance', desc: 'Optimize cholesterol with plant sterols' },
    { icon: '⚡', title: 'Circulation Boost', desc: 'Improve blood flow and oxygenation' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.2) 100%)' }}></div>
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-20" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: 'rgba(200,164,90,0.2)', color: '#c8a45a', border: '1px solid rgba(200,164,90,0.5)' }}>
              ❤️ Doctor Recommended Formula
            </span>
            <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Heart <span style={{ color: '#c8a45a' }}>Care</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: '#e0e0e0', maxWidth: '520px' }}>
              Cardiovascular wellness support — natural formulas for a strong, healthy, and long-lasting heart
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
          <h2 className="font-serif font-bold text-black mb-3" style={{ fontSize: '2rem' }}>Premium Heart Health Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Support your cardiovascular system naturally. Maintain healthy blood pressure, cholesterol levels, and overall heart function.</p>
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
                <button className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #0f0000, #1f0808)' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h3 className="font-serif font-bold text-center text-black mb-8 text-2xl">Why Choose Our Heart Care Products?</h3>
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
        <div className="rounded-2xl p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #0f0000, #1f0808)' }}>
          <h3 className="font-serif font-bold text-3xl mb-3">Protect Your Most Vital Organ</h3>
          <p className="text-lg mb-6" style={{ color: '#d0d0d0' }}>Heart health is priceless. Start natural cardiovascular support today. Doctor recommended, clinically validated.</p>
          <button className="px-10 py-4 rounded-xl font-bold text-black text-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)' }}>Shop Heart Care →</button>
        </div>
      </div>
    </div>
  )
}