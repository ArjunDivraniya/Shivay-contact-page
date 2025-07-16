// src/components/StickyCTA.jsx
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function StickyCTA() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Add buffer to avoid flickering
      if (currentScrollY > lastScrollY + 10) {
        setShow(false) // scrolling down
      } else if (currentScrollY < lastScrollY - 10) {
        setShow(true) // scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-[999] transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      } group`}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
        Chat on WhatsApp
      </div>

      {/* WhatsApp Icon Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  )
}
