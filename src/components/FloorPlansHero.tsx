'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, Square, Ruler, Layout } from 'lucide-react'

const FloorPlansHero: React.FC = () => {
  const stats = [
    {
      icon: Home,
      value: '4',
      label: 'Apartment Types',
      description: '1, 2, 3 & 4 BHK options'
    },
    {
      icon: Square,
      value: '850+',
      label: 'Starting From',
      description: 'Sq.ft carpet area'
    },
    {
      icon: Ruler,
      value: '3500',
      label: 'Up To',
      description: 'Sq.ft for premium units'
    },
    {
      icon: Layout,
      value: '12+',
      label: 'Layout Options',
      description: 'Thoughtfully designed'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/blueprint-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-0">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 text-gold text-sm font-medium mb-8"
          >
            <Layout className="w-4 h-4" />
            <span>Thoughtfully Designed</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8"
          >
            Floor
            <span className="block text-gold">Plans</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16 force-text-center"
          >
            Discover meticulously planned living spaces that perfectly blend functionality 
            with luxury. Each floor plan is designed to maximize natural light, ventilation, 
            and the spectacular city views that Fortune Heights offers.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold"
            >
              View Interactive Plans
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-1/4 left-10 w-16 h-16 border-2 border-gold/30 transform rotate-45"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-gold/20 transform rotate-45"
      />
    </section>
  )
}

export default FloorPlansHero
