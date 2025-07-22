"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-black/30 backdrop-blur-md border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">ICT Club of Kalika</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Innovating the future through technology. Join us in our mission to inspire and impact the world through
              ICT.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">ictkalika82@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">Butwal, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-[#9bd3ff]" />
                <span className="text-sm">+9779748703502</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 glow-text">Quick Links</h3>
            <div className="space-y-2">
              {["About Us", "Events", "FAQs", "Partners"].map((link) => (
                <div key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#9bd3ff] text-sm transition-colors duration-300">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 ICT Club of K.M.G.S.S. All rights reserved. | Est. 2079</p>
          <p className="text-gray-400 text-sm mt-2">
            Crafted with passion by NAYAN & NARAYAN
          </p>
            <p className="text-gray-400 text-sm mt-2">
           Contributors: Shasank Shrestha | Anshu Aryal
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
