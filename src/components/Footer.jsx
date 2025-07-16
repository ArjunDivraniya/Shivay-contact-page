// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-white/60 text-sm mt-10 mb-4 px-4">
      <div className="border-t border-white/10 pt-4">
        <p>© {new Date().getFullYear()} Shivay Video Studio. All rights reserved.</p>
        <p className="text-xs mt-1">Crafted with ❤️ for creativity & memories</p>
      </div>
    </footer>
  )
}
