// src/components/StickyCTA.jsx
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function StickyCTA() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY + 10) {
        setShow(false)
      } else if (currentScrollY < lastScrollY - 10) {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-24 right-5 z-[999] transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      } group`}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 right-0 bg-black text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 whitespace-nowrap">
        Chat on WhatsApp
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919106572374"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 flex justify-center items-center bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  )
}
