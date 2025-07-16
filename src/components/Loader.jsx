import React from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-yellow-400 font-signature"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-yellow-400 pr-2"
        >
          Shivay Video
        </motion.span>
      </motion.h1>
    </div>
  )
}