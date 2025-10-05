'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-black/60 via-black/40 to-black/60">
          {/* Placeholder for hero image - you can replace with actual tower image */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('../assets/elevation.png')] opacity-10 bg-cover bg-center"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white py-4 sm:py-8 w-full flex items-center justify-center min-h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 max-h-[80vh] flex flex-col justify-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-1.5 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full px-4 py-1.5 text-gold w-fit mx-auto"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-sm font-medium">Coming Soon - 2025</span>
          </motion.div>

          {/* Main Heading */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            Fortune
            <span className="block text-gold">Heights</span>
          </motion.h1> */}
          <div>
            <img src="../assets/Banner-logo.svg" alt="" />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed force-text-center"
          >
            Where luxury meets sophistication. Experience elevated living in our 
            premium residential tower with world-class amenities and breathtaking city views.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center space-x-2 text-gray-300 mb-0 mt-2"
          >
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-base sm:text-lg">Downtown District, Prime Location</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8"
          >
            <Link href="/floor-plans">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-gold-lg flex items-center space-x-2"
              >
                <span>Explore Floor Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            {/* <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:border-gold hover:bg-gold hover:text-black text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Schedule Visit
              </motion.button>
            </Link> */}
          </motion.div>

          {/* Key Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '40+', label: 'Premium Floors' },
              { number: '200+', label: 'Luxury Units' },
              { number: '15+', label: 'World-Class Amenities' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  )
}

export default HeroSection
