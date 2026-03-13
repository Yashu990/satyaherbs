import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Product images for the category sections
import img1 from '../images /product_shilajit_1.png'
import img2 from '../images /product_shilajit_2.png'
import img3 from '../images /product_shilajit_3.png'
import img4 from '../images /product_shilajit_4.png'
import imgShilajit from '../images /Unlock the natural power of Salajeet for holistic wellness_.jpeg'
import imgMuscle from '../images /How To Take Shilajit for Muscle Building__.jpeg'
import imgGummies from '../images /Pure Himalayan Shilajit Gummies.jpeg'

const categoryRows = [
  {
    title: "Men's Health",
    viewHref: '/mens-health',
    products: [
      { name: "Men's Vitality Shilajit", price: 2499, original: 3299, rating: 4.8, reviews: 6312, img: img1, off: '24% OFF' },
      { name: 'Testosterone Booster', price: 1999, original: 2799, rating: 4.7, reviews: 3821, img: img2, off: '29% OFF' },
      { name: 'Muscle Recovery Blend', price: 2199, original: 2999, rating: 4.8, reviews: 7823, img: imgMuscle, off: '27% OFF' },
      { name: 'Shilajit Energy Sips', price: 1799, original: 2399, rating: 4.9, reviews: 5412, img: imgGummies, off: '25% OFF' },
      { name: 'Complete Men\'s Kit', price: 4999, original: 6999, rating: 4.9, reviews: 9102, img: img3, off: '29% OFF' },
    ]
  },
  {
    title: "Women's Health",
    viewHref: '/womens-health',
    products: [
      { name: "Women's Hormonal Balance", price: 2199, original: 2899, rating: 4.9, reviews: 4127, img: img4, off: '24% OFF' },
      { name: 'Beauty & Glow Blend', price: 1999, original: 2699, rating: 4.8, reviews: 3568, img: imgShilajit, off: '26% OFF' },
      { name: 'Iron & Calcium Support', price: 1499, original: 1999, rating: 4.7, reviews: 2341, img: img1, off: '25% OFF' },
      { name: 'Shatavari Complex', price: 1799, original: 2399, rating: 4.8, reviews: 4210, img: img2, off: '25% OFF' },
      { name: 'Women\'s Wellness Kit', price: 5499, original: 7999, rating: 4.9, reviews: 5201, img: img3, off: '31% OFF' },
    ]
  },
  {
    title: 'Pure Himalayan Shilajit',
    viewHref: '/pure-shilajit',
    products: [
      { name: 'Grade A Shilajit Resin', price: 2999, original: 3999, rating: 4.9, reviews: 12847, img: imgGummies, off: '25% OFF' },
      { name: 'Shilajit Gold Drops', price: 1999, original: 2799, rating: 4.8, reviews: 8621, img: img4, off: '29% OFF' },
      { name: 'Shilajit + Ashwagandha', price: 2499, original: 3299, rating: 4.9, reviews: 6543, img: imgMuscle, off: '24% OFF' },
      { name: 'Shilajit Resin + Saffron', price: 3499, original: 4699, rating: 4.9, reviews: 3821, img: imgShilajit, off: '26% OFF' },
      { name: 'Elite Bundle 3-Months', price: 5999, original: 8999, rating: 4.9, reviews: 15203, img: img1, off: '33% OFF' },
    ]
  },
]

function ProductScrollRow({ row }) {
  const scrollRef = useRef(null)
  const { addToCart } = useCart()

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <div className="py-8 border-b border-gray-100 last:border-0">
      <div className="flex flex-col items-center mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-2">{row.title}</h3>
        <div className="h-0.5 w-12 bg-[#c8a45a] mb-3"></div>
        <Link to={row.viewHref} style={{ color: '#c8a45a' }} className="text-sm font-semibold hover:underline flex items-center gap-1">
          Explore {row.title} →
        </Link>
      </div>
      <div className="relative">
        <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 -translate-x-5 text-sm" style={{ border: '1px solid #e5e7eb' }}>←</button>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-6 px-4" style={{ scrollbarWidth: 'none' }}>
          {row.products.map((p, i) => (
            <div
              key={i}
              className="min-w-[200px] md:min-w-[250px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col p-3 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square rounded-md overflow-hidden bg-cream mb-3">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {p.off}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400 text-xs text-xs">★</span>
                  <span className="text-[10px] text-gray-500 font-bold">{p.rating}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 leading-tight h-10">{p.name}</h4>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold text-black">₹{p.price}</span>
                    <span className="text-[10px] text-gray-400 line-through">₹{p.original}</span>
                  </div>
                  <button 
                    onClick={() => addToCart({
                      id: `cat-${row.title.replace(/\s/g, '-')}-${i}`, // Generate a URL-friendly ID
                      name: p.name,
                      price: p.price,
                      image: p.img
                    })}
                    className="w-full bg-black text-white py-2 rounded-md text-xs font-bold hover:bg-stone transition-colors"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 translate-x-5 text-sm" style={{ border: '1px solid #e5e7eb' }}>→</button>
      </div>
    </div>
  )
}

export default function CategoryProductRows() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {categoryRows.map((row, i) => (
          <ProductScrollRow key={i} row={row} />
        ))}
      </div>
    </section>
  )
}
