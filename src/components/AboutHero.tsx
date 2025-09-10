'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award } from 'lucide-react'

const AboutHero: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: '2025',
      label: 'Expected Completion',
      color: 'text-gold'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Families to Call Home',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years of Excellence',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      value: 'Prime',
      label: 'Downtown Location',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/luxury-pattern.svg')] bg-repeat opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 text-gold text-sm font-medium mb-6"
            >
              <span>Under Construction</span>
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              About 
              <span className="text-gold block">Fortune Heights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              Rising majestically in the heart of the city, Fortune Heights represents the 
              epitome of luxury living. Our 40-story architectural masterpiece combines 
              contemporary design with premium amenities to create an unparalleled 
              residential experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Currently under construction with an expected completion date of October 2025, 
              Fortune Heights will house over 200 luxury apartments designed to exceed 
              the expectations of discerning homeowners who demand the very best.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
