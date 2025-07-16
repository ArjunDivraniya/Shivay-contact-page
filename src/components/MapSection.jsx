// src/components/MapSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function MapSection() {
  return (
    <motion.div
      className="bg-black text-white px-5 py-10 space-y-4"
      id="location"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <h2 className="text-xl font-bold text-yellow-400 text-center">
        Visit Our Studio
      </h2>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
        <iframe
          title="Shivay Studio Location"
          src="https://www.google.com/maps?q=Shivay+Video+Studio,+Junagadh,+Gujarat&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg w-full"
        ></iframe>
      </div>

      {/* Address */}
      <div className="flex items-center justify-center gap-2 text-sm text-white/70 mt-2 text-center">
        <FaMapMarkerAlt className="text-yellow-400 text-lg" />
        <span>
          Shivay Video Studio, Near Zanzarda Road, Junagadh, Gujarat 362001
        </span>
      </div>
    </motion.div>
  )
}
