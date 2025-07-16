// src/components/Header.jsx
import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        {/* 🎥 Use video or image background here */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/studio-bg.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="./assets/shivay.png"
            alt="Studio background"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Logo Icon */}
        <motion.div
          className="text-yellow-400 text-4xl mb-4"
          whileHover={{ scale: 1.2, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <FaCameraRetro />
        </motion.div>

        {/* Studio Name */}
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
          Shivay Video
        </h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-sm sm:text-base italic text-yellow-200 tracking-wide font-light max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Capturing Moments. Creating Memories.
        </motion.p>
      </motion.div>
    </div>
  )
}
