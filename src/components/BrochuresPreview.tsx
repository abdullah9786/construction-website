'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const BrochuresPreview: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our sales team',
      action: '+91 98920 72711',
      href: 'tel:+919892072711',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get detailed information',
      action: 'anas.ansari@fortunesquare.in',
      href: 'mailto:anas.ansari@fortunesquare.in',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need More <span className="text-gold">Information?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            Our sales team is ready to answer your questions and provide personalized assistance 
            to help you find your perfect home at Fortune Heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                <method.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {method.description}
              </p>
              <div className="text-gold font-bold text-lg hover:text-gold-dark transition-colors">
                {method.action}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 p-8 md:p-12 rounded-3xl text-center"
        >
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto force-text-center">
            Subscribe to get the latest updates about Fortune Heights, including new brochures, 
            construction progress, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-gold transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default BrochuresPreview
