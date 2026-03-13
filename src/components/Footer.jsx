export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0a0800 0%, #000000 100%)', color: '#fdf8ef' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-3" style={{ color: '#c8a45a' }}>SATYAHERBS</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(253,248,239,0.7)', maxWidth: '280px' }}>
              Pure. Potent. Powerful.<br/>
              Authentic Himalayan Shilajit and premium Ayurvedic supplements for extraordinary wellness.
            </p>
            <div className="flex gap-3 mb-4">
              {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                <a key={s} href="#" className="px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105" style={{ background: 'rgba(200,164,90,0.15)', color: '#c8a45a', border: '1px solid rgba(200,164,90,0.3)' }}>
                  {s}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: 'rgba(253,248,239,0.4)' }}>
              © 2024 SATYAHERBS. All rights reserved.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-sm tracking-widest uppercase" style={{ color: '#c8a45a' }}>Shop</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(253,248,239,0.65)' }}>
              <li><a href="#" className="hover:text-white transition">Pure Shilajit</a></li>
              <li><a href="#" className="hover:text-white transition">Daily Wellness</a></li>
              <li><a href="#" className="hover:text-white transition">Men's Health</a></li>
              <li><a href="#" className="hover:text-white transition">Women's Health</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-sm tracking-widest uppercase" style={{ color: '#c8a45a' }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(253,248,239,0.65)' }}>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div id="contact">
            <h4 className="font-serif font-bold mb-4 text-sm tracking-widest uppercase" style={{ color: '#c8a45a' }}>Support</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(253,248,239,0.65)' }}>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              <li><a href="mailto:hello@satyaherbs.com" className="hover:text-white transition">hello@satyaherbs.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-white transition">+91 9876 543 210</a></li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['🔒 Secure Payments', '🚚 Free Shipping ₹999+', '↩️ 30-Day Returns', '✅ ISO Certified', '🏔️ Himalayan Sourced'].map((badge, i) => (
            <span key={i} className="text-xs px-4 py-2 rounded-full" style={{ background: 'rgba(200,164,90,0.1)', color: 'rgba(253,248,239,0.7)', border: '1px solid rgba(200,164,90,0.2)' }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(253,248,239,0.45)' }}>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Shipping & Returns</a>
          </div>
          <p>Payments: Razorpay · UPI · COD · Credit/Debit Cards</p>
        </div>
      </div>
    </footer>
  )
}
