"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "FAQs", href: "/faqs" },
  { name: "Partners", href: "/partners" },

]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.5 }} className="relative">
              <Image
                src="/logo.png"
                alt="ICT Club Logo"
                width={45}
                height={45}
                className="animate-pulse-glow rounded-full"
              />
            </motion.div>
            <span className="text-white font-bold text-lg glow-text">ICT Club of Kalika</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-white hover:text-[#9bd3ff] px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActive ? "text-[#9bd3ff]" : ""
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#9bd3ff] glow-border transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#9bd3ff] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/30 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                      isActive ? "text-[#9bd3ff]" : "text-white hover:text-[#9bd3ff]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {isActive && <span className="block h-0.5 bg-[#9bd3ff] mt-1 glow-border"></span>}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
// nav