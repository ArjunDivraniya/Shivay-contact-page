// src/components/AboutSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaMapMarkerAlt, FaBolt } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <motion.div
      className="bg-black text-white px-5 py-10 text-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
    >
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">
        About Shivay Video
      </h2>

      {/* Short Description */}
      <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
        Shivay Video is a full-service creative studio capturing life’s best moments.
        From cinematic weddings to reels, music videos to baby shoots – we turn your
        memories into art.
      </p>

      {/* Highlights */}
      <div className="space-y-2 text-sm text-white/70">
        <div className="flex items-center justify-center gap-2">
          <FaCheckCircle className="text-yellow-400" />
          <span>10+ Years of Experience in Film & Photography</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaCheckCircle className="text-yellow-400" />
          <span>Specialized in Weddings, Reels, BTS, and Corporate Shoots</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaBolt className="text-yellow-400" />
          <span>Known for Cinematic Editing & Drone Shots</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>Based in Junagadh, Gujarat — Serving Pan India</span>
        </div>
      </div>
    </motion.div>
  )
}
