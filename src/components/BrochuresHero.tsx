'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Share2 } from 'lucide-react'

const BrochuresHero: React.FC = () => {
  const stats = [
    {
      icon: FileText,
      value: '8+',
      label: 'Detailed Brochures',
      description: 'Comprehensive project information'
    },
    {
      icon: Download,
      value: '1000+',
      label: 'Downloads',
      description: 'By interested buyers'
    },
    {
      icon: Share2,
      value: '24/7',
      label: 'Available',
      description: 'Instant download access'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/document-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-0">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full px-6 py-2 text-gold mb-8"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Comprehensive Information</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Project
            <span className="block text-gold">Brochures</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16 force-text-center"
          >
            Access comprehensive project information including detailed floor plans, 
            pricing guides, amenities overview, and complete specifications. 
            Everything you need to make an informed decision about your future home.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/15 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="font-playfair text-2xl md:text-3xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
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
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download All Brochures</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-1/4 left-10 w-16 h-16 border-2 border-gold/30"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-gold/20"
      />
    </section>
  )
}

export default BrochuresHero
