import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most users report noticeable improvements in energy within 5-7 days. For deeper benefits like improved focus and recovery, allow 2-4 weeks as your body adapts. Results vary based on lifestyle and existing health status.'
    },
    {
      question: 'Is SATYAHERBS safe for daily consumption?',
      answer: 'Yes, our shilajit is 100% natural and lab-tested for safety. It has been used safely for centuries. However, if you\'re pregnant, nursing, or on medications, consult your doctor first.'
    },
    {
      question: 'How much should I consume daily?',
      answer: 'Start with a pea-sized amount (250-500mg) dissolved in water or coconut oil once daily. You can gradually increase to twice daily based on your needs and tolerance.'
    },
    {
      question: 'How is SATYAHERBS different from other brands?',
      answer: 'We source from 15,000+ ft altitude, process using traditional + modern methods, and provide 3rd-party lab verification. Every batch includes detailed testing reports. Customer satisfaction is our top priority.'
    },
    {
      question: 'Can I take this with other supplements?',
      answer: 'Shilajit is compatible with most supplements and actually enhances nutrient absorption. However, avoid combining with iron supplements as shilajit already contains minerals. Consult your healthcare provider if unsure.'
    },
    {
      question: 'What\'s your return and refund policy?',
      answer: 'We offer a 60-day money-back guarantee. If unsatisfied for any reason, simply contact us for a full refund. We also offer free shipping on all orders above ₹999.'
    },
  ]

  return (
    <section className="section-padding bg-stone/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bronze mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-stone/70">
            Everything you need to know about SATYAHERBS
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="fade-in border border-bronze/20 rounded-lg overflow-hidden hover:border-bronze/40 transition-all"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex justify-between items-center bg-white hover:bg-cream/50 transition-colors"
              >
                <h3 className="text-lg font-serif font-bold text-bronze text-left">
                  {faq.question}
                </h3>
                <span className={`text-2xl text-bronze transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-cream/30 border-t border-bronze/10">
                  <p className="text-stone/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-bronze/5 rounded-lg border border-bronze/20">
          <p className="text-stone/70 mb-4">
            Still have questions?
          </p>
          <p className="text-sm text-stone/60 mb-4">
            Contact our wellness experts at <a href="mailto:hello@satyaherbs.com" className="text-bronze font-bold hover:underline">hello@satyaherbs.com</a>
          </p>
          <p className="text-xs text-stone/50">
            Response time: Within 2-4 hours
          </p>
        </div>
      </div>
    </section>
  )
}
