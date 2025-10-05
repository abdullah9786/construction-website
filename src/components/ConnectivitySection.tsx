'use client'

import { motion } from 'framer-motion'
import {
  Plane,
  Train,
  Bus,
  Car,
  School,
  Hospital,
  ShoppingBag,
  Utensils,
  Building2,
  Briefcase,
  GraduationCap,
  HeartPulse
} from 'lucide-react'

const ConnectivitySection = () => {
  const connectivityData = [
    {
      category: 'Transportation',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'International Airport', distance: '8 km', icon: Plane },
        { name: 'Metro Station', distance: '2 km', icon: Train },
        { name: 'Bus Terminal', distance: '1.5 km', icon: Bus },
        { name: 'Highway Access', distance: '1 km', icon: Car }
      ]
    },
    {
      category: 'Education',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'International School', distance: '1 km', icon: School },
        { name: 'University', distance: '3 km', icon: GraduationCap },
        { name: 'Preschool', distance: '500 m', icon: School },
        { name: 'Coaching Center', distance: '1.5 km', icon: School }
      ]
    },
    {
      category: 'Healthcare',
      icon: HeartPulse,
      color: 'from-red-500 to-red-600',
      items: [
        { name: 'Multi-Specialty Hospital', distance: '1.5 km', icon: Hospital },
        { name: 'Emergency Care', distance: '800 m', icon: HeartPulse },
        { name: 'Diagnostic Center', distance: '1 km', icon: Hospital },
        { name: 'Pharmacy', distance: '300 m', icon: Hospital }
      ]
    },
    {
      category: 'Entertainment',
      icon: ShoppingBag,
      color: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Shopping Mall', distance: '3 km', icon: ShoppingBag },
        { name: 'Restaurant Hub', distance: '2.5 km', icon: Utensils },
        { name: 'Cinema Complex', distance: '3 km', icon: ShoppingBag },
        { name: 'Recreation Park', distance: '1 km', icon: ShoppingBag }
      ]
    },
    {
      category: 'Business',
      icon: Briefcase,
      color: 'from-gold to-gold-dark',
      items: [
        { name: 'IT Park', distance: '5 km', icon: Building2 },
        { name: 'Business District', distance: '4 km', icon: Briefcase },
        { name: 'Corporate Offices', distance: '3 km', icon: Building2 },
        { name: 'Convention Center', distance: '6 km', icon: Briefcase }
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamless <span className="text-gold">Connectivity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need is within reach. Experience the convenience of living in a well-connected neighborhood
            with easy access to essential services and amenities.
          </p>
        </motion.div>

        {/* Connectivity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connectivityData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <item.icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gold font-semibold text-sm">
                      {item.distance}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-gold/10 to-gold/5 p-12 rounded-3xl"
        >
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Discover the Neighborhood
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a site visit to explore the area and experience the exceptional connectivity firsthand.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold"
          >
            Schedule Site Visit
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ConnectivitySection
