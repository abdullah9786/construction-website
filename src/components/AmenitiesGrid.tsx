'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Waves, Dumbbell, TreePine, Car, Shield, Wifi, 
  Coffee, Users, GamepadIcon, Baby, Wind, Utensils,
  Sparkles, Home, Film, Activity, Droplets, Armchair
} from 'lucide-react'

const AmenitiesGrid: React.FC = () => {
  const amenities = [
    {
      icon: Dumbbell,
      name: 'Gymnasium',
      description: 'Fully equipped fitness center with latest equipment and personal training services',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Waves,
      name: 'Swimming Pool',
      description: 'Temperature controlled pool with modern design and lounging area',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Baby,
      name: 'Kids Play Area',
      description: 'Safe and fun playground with age-appropriate equipment and tot lot',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: TreePine,
      name: 'Landscaped Lawn',
      description: 'Beautifully maintained gardens with walking paths and seating areas',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Armchair,
      name: 'Lounge Deck',
      description: 'Outdoor relaxation space with comfortable seating and ambient lighting',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      name: 'Banquet Hall',
      description: 'Elegant event space for celebrations, meetings, and social gatherings',
      color: 'from-gold to-gold-dark'
    },
    {
      icon: Utensils,
      name: 'Dining Area',
      description: 'Spacious dining hall with modern amenities for resident gatherings',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: GamepadIcon,
      name: 'Games Room',
      description: 'Recreation zone with indoor games and entertainment facilities',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Film,
      name: 'Mini Theatre',
      description: 'Private cinema with comfortable seating and audio-visual equipment',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Activity,
      name: 'Massage Room',
      description: 'Professional massage and therapy room for relaxation and wellness',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Droplets,
      name: 'Sauna & Steam',
      description: 'Luxury spa facilities with sauna and steam rooms for rejuvenation',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Coffee,
      name: 'Juice Bar',
      description: 'Refreshment counter serving fresh juices and healthy beverages',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Home,
      name: 'Reception',
      description: '24/7 manned reception desk for visitor management and assistance',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Shield,
      name: '24/7 Security',
      description: 'Advanced security systems with CCTV surveillance and trained personnel',
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: Car,
      name: 'Covered Parking',
      description: 'Multi-level parking with valet services and EV charging stations',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Wifi,
      name: 'High-Speed Internet',
      description: 'Fiber-optic connectivity throughout the building and common areas',
      color: 'from-blue-600 to-blue-700'
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
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class <span className="text-gold">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury living with our comprehensive suite of premium amenities 
            designed to elevate every moment of your daily life.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Icon Header */}
              <div className={`h-24 bg-gradient-to-br ${amenity.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <amenity.icon className="w-12 h-12 text-white" />
                </motion.div>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">
                  {amenity.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {amenity.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-4 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}</motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center bg-gradient-to-r from-gold/10 to-gold/5 p-12 rounded-3xl mt-16"
        >
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Experience Luxury Like Never Before
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto force-text-center">
            Schedule a visit to explore our world-class amenities and see why 
            Fortune Square is the ultimate choice for luxury living.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold"
            >
              Book a Tour
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold hover:bg-gold hover:text-black text-gold font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              View Floor Plans
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default AmenitiesGrid
