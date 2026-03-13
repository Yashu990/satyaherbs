// Trust Strip - certification and promise badges
const trustItems = [
  { icon: '🏔️', title: 'Himalayan Sourced', desc: '18,000ft altitude' },
  { icon: '🔬', title: 'Lab Certified', desc: 'ISO tested & verified' },
  { icon: '🌿', title: '100% Natural', desc: 'Zero synthetic additives' },
  { icon: '✅', title: 'FSSAI Approved', desc: 'Govt. of India certified' },
  { icon: '🚚', title: 'Free Delivery', desc: 'Orders above ₹999' },
  { icon: '↩️', title: '30-Day Returns', desc: 'Risk-free guarantee' },
  { icon: '🔒', title: 'Secure Payments', desc: 'Razorpay encrypted' },
  { icon: '🪙', title: 'Health Coins', desc: 'Earn & redeem rewards' },
]

export default function TrustStrip() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0a0800, #1a1200)' }} className="py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1 group cursor-default">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-1 transition-transform group-hover:scale-110"
                style={{ background: 'rgba(200,164,90,0.15)', border: '1px solid rgba(200,164,90,0.3)' }}
              >
                {item.icon}
              </div>
              <p className="text-xs font-bold" style={{ color: '#c8a45a' }}>{item.title}</p>
              <p className="text-xs" style={{ color: 'rgba(253,248,239,0.55)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
