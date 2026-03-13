import { useState, useEffect } from 'react'
import slide1 from '../images /ChatGPT Image Mar 13, 2026, 12_56_18 PM.png'
import slide2 from '../images /ChatGPT Image Mar 13, 2026, 12_55_55 PM.png'
import slide3 from '../images /ChatGPT Image Mar 13, 2026, 12_54_45 PM.png'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: slide1,
      title: 'SATYAHERBS',
      subtitle: 'Premium Himalayan Shilajit',
      description: 'Pure. Potent. Powerful.',
      imagePosition: 'center 60%'
    },
    {
      id: 2,
      image: slide2,
      title: 'Lab Verified',
      subtitle: '100% Pure Shilajit',
      description: 'Scientifically tested. Supremely potent.',
      imagePosition: 'center 34%'
    },
    {
      id: 3,
      image: slide3,
      title: 'Natural Energy',
      subtitle: 'Transform Your Wellness',
      description: 'Experience the Himalayan difference.',
      imagePosition: 'center 42%'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="top" className="relative w-full overflow-hidden bg-cream pt-20">
      {/* Carousel Container */}
      <div className="relative h-screen w-full bg-cream">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              style={{ objectPosition: slide.imagePosition }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/10" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 text-center">
                {/* Minimal content - just navigation dots */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-[calc(50%+2.5rem)] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-cream transition-all backdrop-blur-sm hover:bg-cream/40 sm:left-6 md:left-8 md:top-[calc(50%+2.5rem)] text-2xl font-light"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-[calc(50%+2.5rem)] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-cream transition-all backdrop-blur-sm hover:bg-cream/40 sm:right-6 md:right-8 md:top-[calc(50%+2.5rem)] text-2xl font-light"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-gold w-8'
                : 'bg-cream/40 hover:bg-cream/60'
            }`}
          />
        ))}
      </div>

    </section>
  )
}
