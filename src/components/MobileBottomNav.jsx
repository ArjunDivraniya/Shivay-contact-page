import React from 'react'
import { FaUser, FaPhone } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-white/10 z-50 flex justify-around py-2 sm:hidden">
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="flex flex-col items-center text-xs text-white/60 hover:text-yellow-400 transition-all cursor-pointer"
        activeClass="text-yellow-400"
      >
        <FaUser className="text-xl mb-1" />
        About
      </ScrollLink>

      <ScrollLink
        to="connect"
        smooth={true}
        duration={500}
        offset={-80}
        className="flex flex-col items-center text-xs text-white/60 hover:text-yellow-400 transition-all cursor-pointer"
        activeClass="text-yellow-400"
      >
        <FaPhone className="text-xl mb-1" />
        Contact
      </ScrollLink>
    </div>
  )
}
