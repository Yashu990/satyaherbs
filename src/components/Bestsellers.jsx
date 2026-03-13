import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Import all product images
import img1 from '../images /product_shilajit_1.png'
import img2 from '../images /product_shilajit_2.png'
import img3 from '../images /product_shilajit_3.png'
import img4 from '../images /product_shilajit_4.png'
import imgShilajit from '../images /Unlock the natural power of Salajeet for holistic wellness_.jpeg'
import imgMuscle from '../images /How To Take Shilajit for Muscle Building__.jpeg'
import imgGummies from '../images /Pure Himalayan Shilajit Gummies.jpeg'

const bestsellers = [
  {
    id: 'bs-1',
    name: 'Pure Himalayan Shilajit Resin',
    rating: 4.9,
    reviews: 15203,
    price: 2999,
    originalPrice: 3999,
    img: img1,
    badge: '25% OFF',
    tag: 'Best Seller',
    href: '/pure-shilajit'
  },
  {
    id: 'bs-2',
    name: 'Daily Wellness Energy Blend',
    rating: 4.8,
    reviews: 8421,
    price: 1999,
    originalPrice: 2799,
    img: img2,
    badge: '29% OFF',
    tag: 'Top Rated',
    href: '/daily-wellness'
  },
  {
    id: 'bs-3',
    name: 'Men\'s Vitality Complex',
    rating: 4.8,
    reviews: 6312,
    price: 2499,
    originalPrice: 3299,
    img: img3,
    badge: '24% OFF',
    tag: 'Trending',
    href: '/mens-health'
  },
  {
    id: 'bs-4',
    name: 'Shilajit Gold Capsules',
    rating: 4.9,
    reviews: 12847,
    price: 1799,
    originalPrice: 2399,
    img: imgGummies,
    badge: '25% OFF',
    tag: 'New',
    href: '/pure-shilajit'
  },
  {
    id: 'bs-5',
    name: 'Immunity Boost Shilajit',
    rating: 4.7,
    reviews: 4521,
    price: 1499,
    originalPrice: 1999,
    img: imgShilajit,
    badge: '25% OFF',
    tag: 'Popular',
    href: '/daily-wellness'
  },
  {
    id: 'bs-6',
    name: 'Muscle Builder Formula',
    rating: 4.8,
    reviews: 7823,
    price: 2199,
    originalPrice: 2999,
    img: imgMuscle,
    badge: '27% OFF',
    tag: 'Gym Pick',
    href: '/gym-foods'
  },
  {
    id: 'bs-7',
    name: 'Complete Wellness Bundle',
    rating: 4.9,
    reviews: 9102,
    price: 4999,
    originalPrice: 6999,
    img: img4,
    badge: '29% OFF',
    tag: 'Best Value',
    href: '/daily-wellness'
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span style={{ color: '#f5a623', fontSize: '14px' }}>
        {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      </span>
    </div>
  )
}

export default function Bestsellers() {
  const scrollRef = useRef(null)
  const { addToCart } = useCart()

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">
            SATYAHERBS Bestsellers
          </h2>
          <div className="h-1 w-20 bg-[#c8a45a] mb-4"></div>
          <Link to="/pure-shilajit" style={{ color: '#c8a45a' }} className="text-sm font-semibold hover:underline flex items-center gap-1">
            Explore All Products →
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition -translate-x-6"
            style={{ border: '1px solid #e5e7eb' }}
          >
            ←
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bestsellers.map((product) => {
              const discountPct = Math.round((1 - product.price / product.originalPrice) * 100)
              return (
                <Link
                  key={product.id}
                  to={product.href}
                  className="flex-shrink-0 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ width: '220px', border: '1px solid #f0f0f0' }}
                >
                  {/* Image Area */}
                  <div className="relative bg-gray-50 overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    />
                    {/* Discount Badge */}
                    <span
                      className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded"
                      style={{ background: '#22c55e', color: '#fff' }}
                    >
                      {discountPct}% OFF
                    </span>
                    {/* Tag */}
                    <span
                      className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ background: 'rgba(200,164,90,0.9)', color: '#000' }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <StarRating rating={product.rating} />
                      <span className="text-xs text-gray-500">{product.rating}/5 ({product.reviews.toLocaleString()})</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <span style={{ color: '#c8a45a', fontSize: '12px' }}>🪙</span>
                      <span className="text-xs text-gray-500">Earn {Math.round(product.price / 60)} Health Coins</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent Link navigation
                        addToCart(product);
                      }}
                      className="w-full py-2 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #0a0800, #1a1200)' }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition translate-x-6"
            style={{ border: '1px solid #e5e7eb' }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
