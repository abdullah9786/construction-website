'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Waves, Dumbbell, TreePine, Car, Shield, Wifi, 
  Coffee, Users, GamepadIcon, Baby, Wind, Utensils,
  Sparkles, GraduationCap, Heart, Sun
} from 'lucide-react'

const AmenitiesGrid: React.FC = () => {
  const amenityCategories = [
    {
      title: 'Health & Fitness',
      items: [
        {
          icon: Dumbbell,
          name: 'State-of-the-Art Gymnasium',
          description: 'Fully equipped fitness center with latest equipment and personal training services',
          color: 'from-red-500 to-red-600'
        },
        {
          icon: Waves,
          name: 'Temperature Controlled Pool',
          description: 'Olympic-size swimming pool with separate kids pool and poolside cabanas',
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: Heart,
          name: 'Wellness Spa & Salon',
          description: 'Full-service spa with massage therapy, sauna, and beauty treatments',
          color: 'from-pink-500 to-pink-600'
        },
        {
          icon: Wind,
          name: 'Yoga & Meditation Deck',
          description: 'Serene outdoor space for yoga classes and meditation sessions',
          color: 'from-green-500 to-green-600'
        }
      ]
    },
    {
      title: 'Recreation & Entertainment',
      items: [
        {
          icon: GamepadIcon,
          name: 'Gaming Lounge',
          description: 'Modern gaming zone with consoles, VR setup, and entertainment systems',
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: Users,
          name: 'Multi-Purpose Hall',
          description: 'Elegant event space for celebrations, meetings, and social gatherings',
          color: 'from-gold to-gold-dark'
        },
        {
          icon: Coffee,
          name: 'Resident Lounge & Café',
          description: 'Comfortable co-working space with premium café and library',
          color: 'from-amber-500 to-amber-600'
        },
        {
          icon: Sun,
          name: 'Rooftop Sky Deck',
          description: 'Panoramic city views with outdoor seating and barbecue facilities',
          color: 'from-orange-500 to-orange-600'
        }
      ]
    },
    {
      title: 'Family & Lifestyle',
      items: [
        {
          icon: TreePine,
          name: 'Landscaped Gardens',
          description: 'Beautifully maintained gardens with walking paths and seating areas',
          color: 'from-emerald-500 to-emerald-600'
        },
        {
          icon: Baby,
          name: 'Kids Play Area',
          description: 'Safe and fun playground with age-appropriate equipment and supervision',
          color: 'from-cyan-500 to-cyan-600'
        },
        {
          icon: GraduationCap,
          name: 'Study Rooms',
          description: 'Quiet study spaces with high-speed internet for students and professionals',
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          icon: Utensils,
          name: 'Party Lawn',
          description: 'Open-air venue for outdoor events, parties, and family gatherings',
          color: 'from-teal-500 to-teal-600'
        }
      ]
    },
    {
      title: 'Essential Services',
      items: [
        {
          icon: Shield,
          name: '24/7 Security',
          description: 'Advanced security systems with CCTV surveillance and trained personnel',
          color: 'from-red-600 to-red-700'
        },
        {
          icon: Car,
          name: 'Valet Parking',
          description: 'Covered parking with valet services and electric vehicle charging stations',
          color: 'from-gray-600 to-gray-700'
        },
        {
          icon: Wifi,
          name: 'High-Speed Internet',
          description: 'Fiber-optic connectivity throughout the building and common areas',
          color: 'from-blue-600 to-blue-700'
        },
        {
          icon: Sparkles,
          name: 'Housekeeping Services',
          description: 'Professional cleaning and maintenance services available on demand',
          color: 'from-purple-600 to-purple-700'
        }
      ]
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
        {amenityCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            {/* Amenities Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {category.items.map((amenity, index) => (
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
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gold/10 to-gold/5 p-12 rounded-3xl"
        >
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Experience Luxury Like Never Before
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto force-text-center">
            Schedule a visit to explore our world-class amenities and see why 
            Fortune Heights is the ultimate choice for luxury living.
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
        </motion.div>
      </div>
    </section>
  )
}

export default AmenitiesGrid
