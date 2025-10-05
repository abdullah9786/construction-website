'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation2, Plane, Train, Car, Building2 } from 'lucide-react'

const LocationHero = () => {
  const highlights = [
    {
      icon: Plane,
      value: '8 km',
      label: 'From Airport',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Train,
      value: '2 km',
      label: 'Metro Access',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building2,
      value: '5 km',
      label: 'Business Hub',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Car,
      value: '1 km',
      label: 'Highway',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/elevation.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-sm border border-gold/30 px-6 py-3 rounded-full mb-8"
          >
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Prime Location</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
          >
            Perfectly <span className="text-gold">Positioned</span>
            <br />
            <span className="text-4xl md:text-5xl">for Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Experience unparalleled connectivity and convenience at Fortune Square.
            Located in the heart of the city with seamless access to all major destinations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold flex items-center space-x-2"
            >
              <Navigation2 className="w-5 h-5" />
              <span>View Location</span>
            </motion.button>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold hover:bg-gold hover:text-black text-gold font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Schedule Site Visit
            </motion.a>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/15 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${highlight.color} mb-4 group-hover:shadow-2xl transition-shadow`}>
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-playfair text-3xl font-bold text-gold mb-2">
                {highlight.value}
              </div>
              <div className="text-white text-sm font-medium">
                {highlight.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f9fafb"></path>
        </svg>
      </div>
    </section>
  )
}

export default LocationHero
