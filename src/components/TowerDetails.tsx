'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Square, Layers, Zap, Wind, Sun, Droplets } from 'lucide-react'

const TowerDetails: React.FC = () => {
  const specifications = [
    {
      icon: Building2,
      title: 'Total Floors',
      value: '40 Floors',
      description: 'Including 3 basement levels for parking'
    },
    {
      icon: Home,
      title: 'Total Units',
      value: '200+ Homes',
      description: '1, 2, 3 & 4 BHK luxury apartments'
    },
    {
      icon: Square,
      title: 'Unit Sizes',
      value: '850 - 3500 sq.ft',
      description: 'Spacious layouts with premium finishes'
    },
    {
      icon: Layers,
      title: 'Construction',
      value: 'RCC Structure',
      description: 'Earthquake-resistant design standards'
    }
  ]

  const highlights = [
    {
      icon: Zap,
      title: 'Smart Home Integration',
      description: 'Advanced automation systems with app-based controls for lighting, climate, and security.'
    },
    {
      icon: Wind,
      title: 'Superior Ventilation',
      description: 'Cross-ventilation design ensuring natural airflow throughout the living spaces.'
    },
    {
      icon: Sun,
      title: 'Natural Lighting',
      description: 'Floor-to-ceiling windows maximizing natural light with energy-efficient glass.'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Rainwater harvesting and advanced water treatment systems for sustainability.'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tower <span className="text-gold">Specifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            Designed with meticulous attention to detail, every aspect of Fortune Heights 
            reflects our commitment to luxury, quality, and modern living standards.
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-8 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-xl bg-white group-hover:bg-gold/10 transition-colors mb-6">
                <spec.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                {spec.title}
              </h3>
              <div className="text-2xl font-bold text-gold mb-3">
                {spec.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Key <span className="text-gold">Highlights</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gold/10 rounded-xl">
                  <highlight.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Construction Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/10 to-gold/5 p-8 md:p-12 rounded-3xl text-center"
        >
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Construction Status
          </h3>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto force-text-center">
            We are currently in the interior finishing phase, with completion 
            scheduled for October 2025. All structural work has been completed 
            ahead of schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">Foundation Complete</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">Structure Complete</span>
            </div>
            <div className="flex items-center space-x-2 text-gold">
              <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
              <span className="font-medium">Interior Finishing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TowerDetails
