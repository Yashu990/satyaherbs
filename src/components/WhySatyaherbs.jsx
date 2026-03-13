export function LeafSVG({ className = '', color = '#2d5a27', opacity = 0.6 }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ opacity }}
    >
      <path 
        d="M50 0 C70 20 90 40 90 70 C90 90 70 100 50 100 C30 100 10 90 10 70 C10 40 30 20 50 0 Z" 
        fill={color} 
      />
      {/* Veins */}
      <path 
        d="M50 0 Q60 50 50 100" 
        stroke="rgba(0,0,0,0.15)" 
        strokeWidth="1.5" 
        fill="none" 
      />
      <path 
        d="M50 30 L75 50 M50 50 L85 70 M50 70 L75 90" 
        stroke="rgba(0,0,0,0.1)" 
        strokeWidth="1.2" 
        fill="none" 
      />
      <path 
        d="M50 30 L25 50 M50 50 L15 70 M50 70 L25 90" 
        stroke="rgba(0,0,0,0.1)" 
        strokeWidth="1.2" 
        fill="none" 
      />
    </svg>
  )
}

export function FlowerSVG({ className = '', color = '#d43a5e', opacity = 0.5 }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ opacity }}
    >
      {/* 5 Petals with gradients/shading effect */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <path
          key={i}
          d="M50 50 Q75 10 100 50 Q75 90 50 50"
          fill={color}
          transform={`rotate(${angle} 50 50)`}
          style={{ transformOrigin: 'center' }}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="0.5"
        />
      ))}
      <circle cx="50" cy="50" r="12" fill="#facc15" />
      <circle cx="50" cy="50" r="6" fill="#ca8a04" />
    </svg>
  )
}

export default function WhySatyaherbs() {
  const points = [
    {
      number: '01',
      title: 'FORMULATED BY EXPERTS',
      subtitle: 'AT SATYAHERBS ACADEMY OF AYURVEDA',
      description: 'Experts at Satyaherbs Academy of Ayurveda, PhD.\'s, and Ayurvedacharya with over 50 years of cumulative experience build formulations with scientifically and clinically tested ingredients, to make our proprietary products that help you reach your health goals.'
    },
    {
      number: '02',
      title: 'THE BEST INGREDIENTS',
      subtitle: 'PASSED THROUGH TOUGHEST PROCESS',
      description: 'We go the extra mile to source the best ingredients like Shilajit from 18000 Ft. in the Himalayas. Our products are made with herbs slowly processed for maximum potency. We manufacture our products in GMP-certified facilities, which are USFDA approved.'
    },
    {
      number: '03',
      title: 'HOLISTIC SOLUTIONS',
      subtitle: 'FOR EVERY NEED',
      description: 'Be it low energy, stress, or chronic care, we don\'t stop at just giving you products. We also give free health expert advice, personalized diet plans, and lifestyle recommendations including Yoga Asanas.'
    }
  ]

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* ── Botanical Decorations ── */}
      
      {/* Top Left - Large Leaf */}
      <div className="absolute -top-12 -left-20 w-80 h-80 pointer-events-none rotate-[20deg] opacity-70">
        <LeafSVG color="#1b4332" opacity={0.6} />
      </div>

      {/* Top Right - Flower */}
      <div className="absolute top-20 -right-16 w-64 h-64 pointer-events-none rotate-12">
        <FlowerSVG color="#d43a5e" opacity={0.4} />
      </div>

      {/* Middle Left - Small Leaf Cluster */}
      <div className="absolute top-[40%] -left-10 w-40 h-40 pointer-events-none -rotate-12">
        <LeafSVG color="#2d6a4f" opacity={0.5} />
      </div>
      <div className="absolute top-[42%] -left-5 w-32 h-32 pointer-events-none rotate-45">
        <LeafSVG color="#40916c" opacity={0.4} />
      </div>

      {/* Middle Right - Flower & Leaf */}
      <div className="absolute top-[60%] -right-20 w-72 h-72 pointer-events-none -rotate-45">
        <LeafSVG color="#1b4332" opacity={0.5} />
      </div>
      <div className="absolute top-[65%] -right-10 w-48 h-48 pointer-events-none rotate-12">
        <FlowerSVG color="#e63946" opacity={0.5} />
      </div>

      {/* Bottom Left - Large Flower */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 pointer-events-none rotate-[100deg]">
        <FlowerSVG color="#d43a5e" opacity={0.4} />
      </div>

      {/* Bottom Right - Final Leaf */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 pointer-events-none rotate-[200deg]">
        <LeafSVG color="#1b4332" opacity={0.6} />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">Why Satyaherbs?</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#c8a45a]/30"></div>
            <p className="text-[#c8a45a] font-bold tracking-[0.2em] text-sm md:text-base">HEALTHY INSIDE, HAPPY OUTSIDE</p>
            <div className="h-[1px] w-12 bg-[#c8a45a]/30"></div>
          </div>
        </div>

        <div className="space-y-32">
          {points.map((point, index) => (
            <div 
              key={point.number} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Large Number with soft glow */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-[#c8a45a]/5 blur-3xl rounded-full group-hover:bg-[#c8a45a]/10 transition-all duration-700"></div>
                <span className="text-8xl md:text-[11rem] font-serif font-bold leading-none select-none relative z-10" style={{ color: '#c8a45a', opacity: 0.9 }}>
                  {point.number}
                </span>
                {/* Visual line connecting to number (desktop only) */}
                <div 
                  className={`hidden md:block absolute top-1/2 w-24 h-[1px] bg-[#c8a45a]/20 -z-10 ${index % 2 !== 0 ? 'left-full ml-4' : 'right-full mr-4'}`}
                ></div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">{point.title}</h3>
                  <p className="text-lg md:text-xl font-bold text-[#c8a45a] mb-0 tracking-wide">{point.subtitle}</p>
                </div>
                <div className="h-[2px] w-16 bg-[#c8a45a] mb-8 mx-auto md:mx-0 opacity-40"></div>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
                  {point.description}
                </p>
                
                {/* Learn more link mockup */}
                <button className="mt-8 text-sm font-bold text-black uppercase tracking-widest border-b-2 border-black/10 hover:border-[#c8a45a] transition-all pb-1">
                  Learn Our Process
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
