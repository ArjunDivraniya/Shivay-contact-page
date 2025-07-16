import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ContactCard from '../components/ContactCard'
import StickyCTA from '../components/StickyCTA'
import AboutSection from '../components/AboutStudio'
import MapSection from '../components/MapSection'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import Loader from '../components/Loader'

export default function ConnectPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-28 relative scroll-smooth">
      <Header />

      <div id="connect" className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Quick Connect</h2>
        <div className="space-y-4">
          <ContactCard icon="call" title="Call Now" subtitle="+91 78178 87973" link="tel:+919106572374" color="yellow" />
          <ContactCard icon="whatsapp" title="WhatsApp Chat" subtitle="Quick Response" link="https://wa.me/919106572374" color="green" />
          <ContactCard icon="instagram" title="Instagram" subtitle="@shivayvideo" link="https://instagram.com/shivayvideo" color="pink" />
          <ContactCard icon="youtube" title="YouTube" subtitle="Watch our work" link="https://www.youtube.com/channel/UCW7_3b2-qKL2JE19Q3BpdZQ" color="red" />
        </div>
      </div>

      <div id="about" className="pt-6">
        <AboutSection />
      </div>

      <div id="map" className="px-4 pt-6">
        <MapSection />
      </div>

      <Footer />
      <StickyCTA />
      <MobileBottomNav />
    </div>
  )
}
