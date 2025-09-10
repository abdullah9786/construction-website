'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Clock, Car, Train, 
  Plane, Coffee, Building, Users
} from 'lucide-react'

const ContactInfo: React.FC = () => {
  const officeInfo = {
    address: '123 Luxury Boulevard, Downtown District',
    city: 'Metropolitan City 12345',
    phone: '+1 (234) 567-8900',
    email: 'info@fortuneheights.com',
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '10:00 AM - 6:00 PM'
    }
  }

  const nearbyLandmarks = [
    { icon: Building, name: 'City Center Mall', distance: '500m' },
    { icon: Train, name: 'Metro Station', distance: '800m' },
    { icon: Plane, name: 'International Airport', distance: '12km' },
    { icon: Coffee, name: 'Premium Cafes', distance: '200m' },
    { icon: Car, name: 'Business District', distance: '2km' },
    { icon: Users, name: 'Entertainment Hub', distance: '1.5km' }
  ]

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Sales Manager',
      phone: '+1 (234) 567-8901',
      email: 'sarah.johnson@fortuneheights.com',
      specialization: 'Luxury Apartments & Investment'
    },
    {
      name: 'Michael Chen',
      role: 'Customer Relations Head',
      phone: '+1 (234) 567-8902', 
      email: 'michael.chen@fortuneheights.com',
      specialization: 'Site Visits & Documentation'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Visit Our <span className="text-gold">Sales Office</span>
          </h2>

          {/* Google Maps Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Sales Office Location</p>
              </div>
              {/* Placeholder for actual Google Maps integration */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="bg-gold text-black px-6 py-2 rounded-full font-semibold">
                  View in Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Sales Office Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">{officeInfo.address}</p>
                  <p className="text-gray-600">{officeInfo.city}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <a href={`tel:${officeInfo.phone}`} className="text-gray-900 hover:text-gold transition-colors">
                  {officeInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0" />
                <a href={`mailto:${officeInfo.email}`} className="text-gray-900 hover:text-gold transition-colors">
                  {officeInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Office Hours</p>
                  <p className="text-gray-600">Mon-Fri: {officeInfo.hours.weekdays}</p>
                  <p className="text-gray-600">Sat-Sun: {officeInfo.hours.weekends}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nearby Landmarks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Nearby Landmarks
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <landmark.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{landmark.name}</p>
                    <p className="text-sm text-gray-600">{landmark.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Meet Our Sales Team
            </h3>
            
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{member.name}</h4>
                  <p className="text-gold font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.specialization}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold hover:bg-gold-dark text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Book Site Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Request Callback
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
