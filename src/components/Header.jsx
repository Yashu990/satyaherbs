import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import SatyaherbsLogo from './SatyaherbsLogo'
import { useCart } from '../context/CartContext'

function useLocation() {
  const [location, setLocation] = useState({ status: 'idle', city: null, pincode: null, error: null })

  const detect = useCallback(() => {
    if (!navigator.geolocation) {
      setLocation({ status: 'error', city: null, pincode: null, error: 'Not supported' })
      return
    }
    setLocation(l => ({ ...l, status: 'loading' }))
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          const data = await res.json()
          const addr = data.address || {}
          const city = addr.city || addr.town || addr.village || addr.county || 'Your location'
          const pincode = addr.postcode || ''
          setLocation({ status: 'ok', city, pincode, error: null })
        } catch {
          setLocation({ status: 'ok', city: 'Your location', pincode: '', error: null })
        }
      },
      (err) => {
        const msg = err.code === 1 ? 'Permission denied' : 'Could not detect'
        setLocation({ status: 'error', city: null, pincode: null, error: msg })
      },
      { timeout: 8000 }
    )
  }, [])

  return { location, detect }
}

export default function Header() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState('Shop by')
  const [scrolled, setScrolled] = useState(false)
  const { location, detect } = useLocation()
  const { cartCount, setIsSidebarOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categoryRoutes = {
    'Daily Wellness': '/daily-wellness',
    'Gym Foods': '/gym-foods',
    "Men's Health": '/mens-health',
    'Blood Sugar & Chronic Care': '/blood-sugar-care',
    'Heart Care': '/heart-care',
    'Skin Care': '/skin-care',
    'Hair Care': '/hair-care',
    'Ayurvedic Juices': '/ayurvedic-juices',
    'Weight Management': '/weight-management',
    "Women's Health": '/womens-health',
    'Pure Himalayan Shilajit': '/pure-shilajit',
    'Fulvic Acid': '/fulvic-acid',
    'Trace Minerals': '/trace-minerals',
    'Ayurvedic Blend': '/ayurvedic-blend',
  }

  const menuSections = [
    {
      title: 'Shop by',
      icon: '🛒',
      items: ['Daily Wellness', 'Gym Foods', "Men's Health", 'Blood Sugar & Chronic Care', 'Heart Care', 'Skin Care', 'Hair Care', 'Ayurvedic Juices', 'Weight Management', "Women's Health"],
    },
    {
      title: 'Ingredients',
      icon: '🍃',
      items: ['Pure Himalayan Shilajit', 'Fulvic Acid', 'Trace Minerals', 'Ayurvedic Blend'],
    },
  ]

  const scrollToSection = (id) => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }, 100)
  }

  const navigateToCategory = (itemName) => {
    const route = categoryRoutes[itemName]
    if (route) {
      navigate(route)
      setIsMenuOpen(false)
      setOpenSection('')
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        {/* Top bar — location + nav */}
        <div style={{ borderBottom: '1px solid rgba(10,8,0,0.07)' }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">

            {/* Left — Live Delivery Location */}
            <div className="hidden items-center gap-2.5 lg:flex min-w-[220px]">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-base flex-shrink-0"
                style={{ background: 'rgba(200,164,90,0.12)', border: '1px solid rgba(200,164,90,0.3)' }}
              >
                {location.status === 'loading' ? (
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a45a" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
                  </svg>
                ) : '📍'}
              </div>
              <button
                onClick={detect}
                className="text-left group cursor-pointer"
                title="Click to detect your location"
              >
                {location.status === 'idle' && (
                  <>
                    <p className="text-sm font-semibold group-hover:underline" style={{ color: '#c8a45a' }}>Deliver to you?</p>
                    <p className="text-xs" style={{ color: '#888' }}>Click to detect location →</p>
                  </>
                )}
                {location.status === 'loading' && (
                  <>
                    <p className="text-sm font-semibold" style={{ color: '#1a0f00' }}>Detecting location…</p>
                    <p className="text-xs" style={{ color: '#888' }}>Please allow access</p>
                  </>
                )}
                {location.status === 'ok' && (
                  <>
                    <p className="text-xs font-medium" style={{ color: '#888' }}>Delivering to</p>
                    <p className="text-sm font-bold group-hover:underline flex items-center gap-1" style={{ color: '#1a0f00' }}>
                      {location.city} {location.pincode && <span style={{ color: '#c8a45a' }}>{location.pincode}</span>}
                    </p>
                  </>
                )}
                {location.status === 'error' && (
                  <>
                    <p className="text-sm font-semibold text-red-500 group-hover:underline">{location.error}</p>
                    <p className="text-xs" style={{ color: '#888' }}>Click to try again</p>
                  </>
                )}
              </button>
            </div>

            {/* Center — Logo */}
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center transition-opacity hover:opacity-85 focus:outline-none mx-auto lg:mx-0"
              aria-label="Go to SATYAHERBS homepage"
            >
              <SatyaherbsLogo variant="dark" size="sm" showTagline={false} />
            </button>

            {/* Center — Search bar (desktop) */}
            <div className="hidden flex-1 items-center justify-center px-8 lg:flex max-w-xl mx-auto">
              <label
                className="flex w-full items-center gap-3 rounded-full px-5 py-2.5 transition-shadow hover:shadow-md cursor-text"
                style={{ background: '#f7f4ef', border: '1.5px solid #e8e0d0' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder='Search for "Shilajit"'
                  className="w-full bg-transparent text-sm outline-none"
                  style={{ color: '#1a0f00' }}
                />
              </label>
            </div>

            {/* Right — Actions */}
            <div className="flex items-center gap-2 min-w-[220px] justify-end">
              <button
                className="hidden rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-gray-50 md:inline-flex"
                style={{ border: '1.5px solid #e0d8cc', color: '#444' }}
              >
                Get App
              </button>
              <button
                className="hidden rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-gray-50 md:inline-flex"
                style={{ border: '1.5px solid #e0d8cc', color: '#444' }}
              >
                Login
              </button>
              <a
                href="https://shop.satyaherbs.com"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #c8a45a, #e8c87a)', color: '#0a0800' }}
              >
                Shop Now
              </a>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-gray-100"
                style={{ border: '1.5px solid #e0d8cc', color: '#444' }}
                aria-label="Open cart"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm"
                    style={{ background: '#c8a45a' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-gray-100"
                style={{ border: '1.5px solid #e0d8cc', color: '#444' }}
                aria-label="Open menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="lg:hidden" style={{ borderBottom: '1px solid rgba(10,8,0,0.07)' }}>
          <div className="mx-auto flex max-w-7xl px-4 py-2.5 sm:px-8">
            <label
              className="flex w-full items-center gap-3 rounded-full px-4 py-2.5 cursor-text"
              style={{ background: '#f7f4ef', border: '1.5px solid #e8e0d0' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder='Search for "Shilajit"'
                className="w-full bg-transparent text-sm outline-none"
                style={{ color: '#1a0f00' }}
              />
            </label>
          </div>
        </div>
      </header>

      {/* ── Slide-in Side Drawer ── */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60]"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="ml-auto flex h-full w-full max-w-sm flex-col bg-white px-6 py-6 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ borderLeft: '1px solid #f0ebe0' }}
          >
            {/* Drawer header */}
            <div className="mb-6 flex items-center justify-between">
              <SatyaherbsLogo variant="dark" size="sm" showTagline={true} />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100"
                style={{ color: '#666', border: '1px solid #e8e0d0' }}
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Shop Now CTA */}
            <a
              href="https://shop.satyaherbs.com"
              className="mb-6 flex items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #0a0800, #1a1200)', color: '#c8a45a' }}
            >
              🛍️ &nbsp; Shop Now
            </a>

            {/* Menu sections */}
            <div className="space-y-1">
              {menuSections.map((section) => (
                <div key={section.title} style={{ borderBottom: '1px solid #f0ebe0' }}>
                  <button
                    onClick={() => setOpenSection(openSection === section.title ? '' : section.title)}
                    className="flex w-full items-center justify-between py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-base"
                        style={{ background: 'rgba(200,164,90,0.1)', border: '1px solid rgba(200,164,90,0.25)' }}
                      >
                        {section.icon}
                      </span>
                      <span className="text-base font-semibold" style={{ color: '#1a0f00' }}>{section.title}</span>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round"
                      className={`transition-transform duration-200 ${openSection === section.title ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>

                  {openSection === section.title && (
                    <div className="grid grid-cols-1 gap-1 pb-3 pl-12">
                      {section.items.map((item) => (
                        <button
                          key={item}
                          onClick={() => navigateToCategory(item)}
                          className="text-left py-1.5 text-sm transition-colors hover:font-semibold"
                          style={{ color: '#555' }}
                        >
                          → {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer links */}
            <div className="mt-auto pt-6 flex flex-col gap-2 text-sm" style={{ color: '#888', borderTop: '1px solid #f0ebe0' }}>
              <button className="text-left py-1 hover:text-black transition">FAQ</button>
              <button className="text-left py-1 hover:text-black transition">Contact Us</button>
              <button className="text-left py-1 hover:text-black transition">Track Order</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
