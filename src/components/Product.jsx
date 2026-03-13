import productImg from '../images /Pure Himalayan Shilajit Gummies.jpeg'

export default function Product() {
  const products = [
    {
      name: 'Premium Shilajit 30g',
      price: '₹2,499',
      badge: 'Best Seller',
      features: ['Pure Resin', 'Lab Tested', 'Full Potency'],
      rating: 4.8
    },
    {
      name: 'Premium Shilajit 60g',
      price: '₹4,699',
      badge: 'Best Value',
      features: ['2 Month Supply', 'Save ₹299', 'Free Shipping'],
      rating: 4.9
    },
    {
      name: 'Premium Shilajit 100g',
      price: '₹7,499',
      badge: 'Most Popular',
      features: ['3+ Month Supply', 'Save ₹799', 'Free Shipping'],
      rating: 4.9
    }
  ]

  return (
    <section id="product" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-serif font-bold">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mt-4 mb-4">
            Premium Himalayan Shilajit
          </h2>
          <div className="h-1 w-12 bg-gold/40 mx-auto mb-6"></div>
          <p className="text-lg text-stone/70 max-w-2xl mx-auto">
            Choose your wellness package. All 100% pure, lab-verified, and backed by our 60-day guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`fade-in rounded-xl overflow-hidden transition-all duration-300 ${
                index === 2 
                  ? 'border-2 border-gold md:scale-105 shadow-2xl shadow-gold/20' 
                  : 'border border-stone/10 hover:border-bronze/30 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Card */}
              <div className="p-8 bg-white flex flex-col h-full">
                {/* Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
                    index === 2 
                      ? 'bg-gold text-stone' 
                      : 'bg-stone/10 text-stone'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Image Placeholder */}
                <div className="mb-6 aspect-square bg-gradient-to-br from-bronze/10 to-gold/10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={productImg}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-serif font-bold text-bronze mb-4">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-stone/60">{product.rating}</span>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-stone/70 flex items-start gap-2">
                      <span className="text-gold text-lg leading-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-stone/10">
                  <p className="text-3xl font-serif font-bold text-bronze mb-1">
                    {product.price}
                  </p>
                  <p className="text-xs text-stone/60">One-time purchase</p>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  index === 2
                    ? 'bg-gold text-stone hover:bg-stone hover:text-gold'
                    : 'bg-bronze text-cream hover:bg-stone'
                }`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="bg-stone/5 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-serif font-bold text-bronze mb-4">What's Inside</h4>
              <ul className="space-y-3 text-stone/70">
                <li className="flex gap-3">
                  <span className="text-gold">▸</span>
                  <span>Pure Himalayan Shilajit (100% resin)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">▸</span>
                  <span>84+ bioactive mineral compounds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">▸</span>
                  <span>Fulvic acid content: &gt;60%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">▸</span>
                  <span>Lab-verified purity & potency</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-bronze mb-4">How to Use</h4>
              <ul className="space-y-3 text-stone/70">
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span><strong>Serving:</strong> Pea-sized amount (250-500mg) daily</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span><strong>Best Time:</strong> Morning with warm water or coconut oil</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span><strong>Results:</strong> Notice benefits within 5-7 days</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span><strong>Storage:</strong> Keep in a cool, dry place</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
