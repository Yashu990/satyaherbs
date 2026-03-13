// Real Stories / Testimonials - Kapiva Style with product holding photos
import img1 from '../images /product_shilajit_1.png'
import img2 from '../images /product_shilajit_2.png'
import img3 from '../images /product_shilajit_3.png'
import img4 from '../images /product_shilajit_4.png'
import imgShilajit from '../images /Unlock the natural power of Salajeet for holistic wellness_.jpeg'
import imgMuscle from '../images /How To Take Shilajit for Muscle Building__.jpeg'
import imgGummies from '../images /Pure Himalayan Shilajit Gummies.jpeg'
import imgObs from '../images /bKo28L7wFJa0UU5_BUls9E_ucj8ef3vH66qT2DsAFP0jfcwJu4Qe8EC_lhm7Kc4uvYLJ1p7j64n6VmOUDKyYy-hXYoK2556UTAZ_8uZt-Nw.jpeg'

const stories = [
  {
    name: 'Tarun K.',
    stars: 5,
    text: 'Besides improving my energy levels, these supplements have given me a noticeable improvement in strength and stamina. Highly recommend!',
    img: img1,
    product: 'Pure Shilajit Resin',
    verified: true
  },
  {
    name: 'Amay Sharma',
    stars: 5,
    text: 'Consistent benefits. Regular use has brought remarkable changes. My testosterone levels and overall vitality have improved significantly.',
    img: img2,
    product: 'Men\'s Vitality Complex',
    verified: true
  },
  {
    name: 'Praveen Kumar',
    stars: 5,
    text: 'Feels energetic and tastes good. Thanks to SATYAHERBS, my gym performance has gone to the next level. Worth every rupee!',
    img: imgMuscle,
    product: 'Muscle Builder Formula',
    verified: true
  },
  {
    name: 'Mohit Arora',
    stars: 5,
    text: 'It will boost your body on another level. I can feel the difference in my energy and focus after just 3 weeks of regular use.',
    img: imgGummies,
    product: 'Daily Energy Blend',
    verified: true
  },
  {
    name: 'Paramjeet Singh',
    stars: 5,
    text: "I'm feeling so energetic. Thank you SATYAHERBS for such a wonderful product. My morning routine has completely transformed.",
    img: imgShilajit,
    product: 'Himalayan Shilajit',
    verified: true
  },
  {
    name: 'Priya Mehta',
    stars: 5,
    text: 'Very effective. I felt energized after just the first week. My skin has started glowing and my hair fall has reduced drastically.',
    img: img3,
    product: "Women's Wellness Kit",
    verified: true
  },
  {
    name: 'Rahul Verma',
    stars: 5,
    text: 'The best Shilajit I have ever tried. Authentic quality from the Himalayas. My blood sugar levels are much more stable now.',
    img: img4,
    product: 'Blood Sugar Balance',
    verified: true
  },
  {
    name: 'Sunita Rawat',
    stars: 5,
    text: 'Remarkable quality. After 45 days of use I can see visible differences in my weight and energy. Will keep ordering from SATYAHERBS.',
    img: imgObs,
    product: 'Weight Management Kit',
    verified: true
  },
]

export default function RealStories() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black">Real People, Real Stories</h2>
            <p className="text-gray-500 text-sm mt-1">50,000+ satisfied customers across India</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">4.9</p>
              <div className="flex" style={{ color: '#f5a623' }}>★★★★★</div>
              <p className="text-xs text-gray-500">Overall Rating</p>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stories.map((story, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ border: '1px solid #f0f0f0' }}
            >
              {/* Product Photo (User holding) */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={story.img}
                  alt={story.product}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Verified badge */}
                {story.verified && (
                  <span className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.9)', color: '#fff' }}>
                    ✓ Verified Purchase
                  </span>
                )}
              </div>

              {/* Review Content */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-gray-900">{story.name}</span>
                  <div style={{ color: '#f5a623', fontSize: '11px' }}>{'★'.repeat(story.stars)}</div>
                </div>
                <p className="text-xs text-gray-400 mb-2 italic font-medium">{story.product}</p>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{story.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <button
            className="px-8 py-3 rounded-xl font-bold text-black border-2 hover:bg-amber-50 transition-all"
            style={{ borderColor: '#c8a45a', color: '#c8a45a' }}
          >
            Read More Reviews →
          </button>
        </div>
      </div>
    </section>
  )
}
