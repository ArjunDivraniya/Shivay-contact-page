// src/components/ContactCard.jsx
import React from 'react'
import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

export default function ContactCard({ icon, title, subtitle, link, color }) {
  const icons = {
    call: FaPhone,
    whatsapp: FaWhatsapp,
    instagram: FaInstagram,
    youtube: FaYoutube
  }

  const Icon = icons[icon] || FaPhone

  const colorMap = {
    yellow: '#facc15',
    green: '#22c55e',
    pink: '#ec4899',
    red: '#ef4444',
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-300`}
      style={{
        borderLeft: `4px solid ${colorMap[color] || '#fff'}`
      }}
    >
      <div className="text-2xl" style={{ color: colorMap[color] }}>
        <Icon />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
    </a>
  )
}
