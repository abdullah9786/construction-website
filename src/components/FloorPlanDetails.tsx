'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Award } from 'lucide-react'

const FloorPlanDetails: React.FC = () => {
  const benefits = [
    'Vastu-compliant layouts designed by expert architects',
    'Maximum natural light and cross-ventilation in every unit',
    'Premium specifications including marble flooring',
    'Modular kitchen with branded appliances',
    'Master bedroom with walk-in wardrobe',
    'Private balconies with panoramic city views',
    'Smart home automation in all units',
    'Flexible interior design consultation included'
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      unit: '3 BHK - Floor 25',
      review: 'The layout is perfect for our family. The views are absolutely stunning!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      unit: '2 BHK - Floor 18',
      review: 'Excellent space utilization and premium finishes throughout.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our <span className="text-gold">Floor Plans?</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8">
              What Our Residents Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gold text-sm">{testimonial.unit}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-gold/10 to-gold/5 p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-gold" />
                <h4 className="font-playfair text-xl font-bold text-gray-900">Award Winning Design</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Our floor plans have won the &quot;Best Residential Layout Design 2024&quot; 
                award from the National Real Estate Council.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FloorPlanDetails
