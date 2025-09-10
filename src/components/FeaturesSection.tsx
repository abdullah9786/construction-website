'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Shield, Wifi, Car, TreePine, Dumbbell, Crown, Sparkles } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: 'Premium Architecture',
      description: 'Contemporary design with floor-to-ceiling windows offering panoramic city views.',
      color: 'text-gold'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Advanced security systems with round-the-clock surveillance and concierge services.',
      color: 'text-blue-600'
    },
    {
      icon: Car,
      title: 'Premium Parking',
      description: 'Covered parking with valet services and electric vehicle charging stations.',
      color: 'text-green-600'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gymnasium with personal training and wellness facilities.',
      color: 'text-red-600'
    },
    {
      icon: TreePine,
      title: 'Landscaped Gardens',
      description: 'Beautifully maintained gardens and outdoor spaces for relaxation.',
      color: 'text-emerald-600'
    },
    {
      icon: Wifi,
      title: 'Smart Home Tech',
      description: 'Integrated smart home systems with high-speed fiber internet connectivity.',
      color: 'text-purple-600'
    },
    {
      icon: Crown,
      title: 'Luxury Amenities',
      description: 'Premium facilities including spa, pool, and exclusive resident lounges.',
      color: 'text-gold'
    },
    {
      icon: Sparkles,
      title: 'Concierge Services',
      description: 'Personalized concierge services to cater to your every need.',
      color: 'text-pink-600'
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
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{marginBottom: '12px'}}>
            Luxury <span className="text-gold">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            Discover the exceptional amenities and services that make Fortune Heights 
            the pinnacle of luxury living in the heart of the city.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gray-100 group-hover:bg-gray-50 transition-colors mb-6 mx-auto`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect decorative element */}
              <div className="mt-6 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500 mx-auto"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold"
          >
            View All Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
