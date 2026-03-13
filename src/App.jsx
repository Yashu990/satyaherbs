import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Footer from './components/Footer'
// New Kapiva-style homepage sections
import TrustStrip from './components/TrustStrip'
import Bestsellers from './components/Bestsellers'
import CategoryGrid from './components/CategoryGrid'
import CategoryProductRows from './components/CategoryProductRows'
import WellnessGoals from './components/WellnessGoals'
import RealStories from './components/RealStories'
import WhySatyaherbs from './components/WhySatyaherbs'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import { CartProvider } from './context/CartContext'
import CartSidebar from './components/CartSidebar'
import CartPage from './pages/Cart'
import Checkout from './pages/Checkout'
// Product Pages
import DailyWellness from './pages/DailyWellness'
import GymFoods from './pages/GymFoods'
import MensHealth from './pages/MensHealth'
import BloodSugarCare from './pages/BloodSugarCare'
import HeartCare from './pages/HeartCare'
import SkinCare from './pages/SkinCare'
import HairCare from './pages/HairCare'
import AyurvedicJuices from './pages/AyurvedicJuices'
import WeightManagement from './pages/WeightManagement'
import WomensHealth from './pages/WomensHealth'
import PureShilajit from './pages/PureShilajit'
import FulvicAcid from './pages/FulvicAcid'
import TraceMinerals from './pages/TraceMinerals'
import AyurvedicBlend from './pages/AyurvedicBlend'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel — untouched */}
      <HeroCarousel />
      {/* Trust Certifications Strip */}
      <TrustStrip />
      {/* Bestsellers horizontal scroll */}
      <Bestsellers />
      {/* All 14 categories visual grid */}
      <CategoryGrid />
      {/* Per-category horizontal product rows */}
      <CategoryProductRows />
      {/* Stats + Wellness goals icon grid */}
      <WellnessGoals />
      {/* Why Satyaherbs - Experts & Ingredients */}
      <WhySatyaherbs />
      {/* Real customer reviews with product photos */}
      <RealStories />
      {/* Newsletter */}
      <Newsletter />
      {/* FAQ */}
      <FAQ />
    </div>
  )
}


export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-cream font-sans text-stone">
          <Header />
          <CartSidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/daily-wellness" element={<DailyWellness />} />
            <Route path="/gym-foods" element={<GymFoods />} />
            <Route path="/mens-health" element={<MensHealth />} />
            <Route path="/blood-sugar-care" element={<BloodSugarCare />} />
            <Route path="/heart-care" element={<HeartCare />} />
            <Route path="/skin-care" element={<SkinCare />} />
            <Route path="/hair-care" element={<HairCare />} />
            <Route path="/ayurvedic-juices" element={<AyurvedicJuices />} />
            <Route path="/weight-management" element={<WeightManagement />} />
            <Route path="/womens-health" element={<WomensHealth />} />
            <Route path="/pure-shilajit" element={<PureShilajit />} />
            <Route path="/fulvic-acid" element={<FulvicAcid />} />
            <Route path="/trace-minerals" element={<TraceMinerals />} />
            <Route path="/ayurvedic-blend" element={<AyurvedicBlend />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

