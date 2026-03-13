import { Link } from 'react-router-dom'

// Category images from hero banners
import imgWellness from '../images /hero_daily_wellness.png'
import imgGym from '../images /hero_gym_foods.png'
import imgMens from '../images /hero_mens_health.png'
import imgWomens from '../images /hero_womens_health.png'
import imgSkin from '../images /hero_skin_care.png'
import imgHair from '../images /hero_hair_care.png'
import imgHeart from '../images /hero_heart_care.png'
import imgBlood from '../images /hero_blood_sugar.png'
import imgWeight from '../images /hero_weight_management.png'
import imgShilajit from '../images /hero_pure_shilajit.png'
import imgJuices from '../images /hero_ayurvedic_juices.jpeg'
import imgFulvic from '../images /hero_fulvic_acid.jpeg'
import imgMinerals from '../images /hero_trace_minerals.jpeg'
import imgBlend from '../images /hero_ayurvedic_blend.jpeg'

const categories = [
  { name: 'Pure Shilajit', img: imgShilajit, href: '/pure-shilajit', tag: 'Premium' },
  { name: 'Daily Wellness', img: imgWellness, href: '/daily-wellness', tag: 'Popular' },
  { name: "Men's Health", img: imgMens, href: '/mens-health', tag: 'Trending' },
  { name: "Women's Health", img: imgWomens, href: '/womens-health', tag: 'Loved' },
  { name: 'Skin Care', img: imgSkin, href: '/skin-care', tag: 'Glow' },
  { name: 'Hair Care', img: imgHair, href: '/hair-care', tag: 'Growth' },
  { name: 'Heart Care', img: imgHeart, href: '/heart-care', tag: 'Care' },
  { name: 'Blood Sugar', img: imgBlood, href: '/blood-sugar-care', tag: 'Balance' },
  { name: 'Weight Loss', img: imgWeight, href: '/weight-management', tag: 'Slim' },
  { name: 'Gym & Fitness', img: imgGym, href: '/gym-foods', tag: 'Power' },
  { name: 'Ayurvedic Juices', img: imgJuices, href: '/ayurvedic-juices', tag: 'Pure' },
  { name: 'Fulvic Acid', img: imgFulvic, href: '/fulvic-acid', tag: 'Science' },
  { name: 'Trace Minerals', img: imgMinerals, href: '/trace-minerals', tag: '84+' },
  { name: 'Ayurvedic Blend', img: imgBlend, href: '/ayurvedic-blend', tag: 'Ancient' },
]

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">Shop by Category</h2>
          <div className="h-1 w-20 bg-[#c8a45a] mb-2"></div>
          <span className="text-sm text-gray-500">{categories.length} Premium Categories</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group relative rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ aspectRatio: '1 / 1.2' }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
              {/* Tag */}
              <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#c8a45a', color: '#000' }}>
                {cat.tag}
              </span>
              {/* Category name */}
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <p className="text-xs font-bold text-center leading-tight">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
