'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactHero: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/elevation.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full px-6 py-2 text-gold mb-8"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Contact
            <span className="block text-gold">Our Team</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16 force-text-center"
          >
            Ready to make Fortune Heights your home? Our dedicated sales team is here to guide you 
            through every step of your journey to luxury living.
          </motion.p>

          {/* Quick Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+91 98920 72711',
                subInfo: '24/7 Available'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'anas.ansari@fortunesquare.in',
                subInfo: 'Quick Response'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: '123 Luxury Boulevard',
                subInfo: 'Sales Office'
              },
              {
                icon: Clock,
                title: 'Office Hours',
                info: '9:00 AM - 8:00 PM',
                subInfo: 'Monday - Sunday'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/15 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors mb-4">
                  <contact.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">{contact.title}</h3>
                <div className="text-gold font-medium mb-1">{contact.info}</div>
                <div className="text-gray-400 text-sm">{contact.subInfo}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-1/4 left-10 w-16 h-16 border-2 border-gold/30"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-gold/20"
      />
    </section>
  )
}

export default ContactHero
