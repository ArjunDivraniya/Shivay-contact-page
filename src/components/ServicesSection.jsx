// src/components/ServicesSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHeart,
  FaVideo,
  FaFilm,
  FaBriefcase,
  FaMagic,
  FaCameraRetro,
} from 'react-icons/fa'

const services = [
  {
    icon: FaHeart,
    title: 'Wedding Shoots',
    description: 'Cinematic storytelling to capture your special day.',
    color: 'text-pink-400',
  },
  {
    icon: FaVideo,
    title: 'Pre-Wedding Films',
    description: 'Romantic, stylized short films for your love story.',
    color: 'text-red-400',
  },
  {
    icon: FaCameraRetro,
    title: 'BTS Coverage',
    description: 'Candid behind-the-scenes moments, raw & real.',
    color: 'text-yellow-400',
  },
  {
    icon: FaBriefcase,
    title: 'Corporate / Commercial',
    description: 'Product shoots, business branding & event coverage.',
    color: 'text-blue-400',
  },
  {
    icon: FaMagic,
    title: 'Editing Services',
    description: 'Post-production, cinematic edits & color grading.',
    color: 'text-green-400',
  },
]

export default function ServicesSection() {
  return (
    <motion.div
      className="bg-black text-white px-5 py-10 text-center space-y-6"
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm shadow-md hover:shadow-yellow-200/10 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <Icon className={`text-3xl mb-2 ${service.color}`} />
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="text-sm text-white/60">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
