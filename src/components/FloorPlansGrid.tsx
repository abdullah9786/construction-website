'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Square, Bed, Bath, Car, Eye, Download, Heart } from 'lucide-react'

const FloorPlansGrid: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All')
  const [favorites, setFavorites] = useState<number[]>([])

  const floorPlans = [
    {
      id: 1,
      type: '3 BHK',
      name: 'Luxury Residence',
      area: '1850',
      price: '₹2.25 Cr',
      bedrooms: 3,
      bathrooms: 4,
      balcony: 5,
      parking: 2,
      features: ['3 Ensuite Bedrooms', 'Living Room Balcony', 'Dry Balcony Kitchen', 'Servant Entry'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // Unsplash: modern apartment
      popular: false
    },
    {
      id: 3,
      type: '4 BHK',
      name: 'Presidential Villa',
      area: '2800',
      price: '₹3.85 Cr',
      bedrooms: 4,
      bathrooms: 5,
      balcony: 3,
      parking: 3,
      features: ['4 Ensuite Bedrooms', 'Living Room Balcony', 'Dry Balcony Kitchen', 'Servant Entry'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 5,
      type: 'Combination 1',
      name: 'Grand Residence',
      area: '4500',
      price: '₹6.50 Cr',
      bedrooms: 7,
      bathrooms: 8,
      balcony: 9,
      parking: 4,
      features: ['7 Ensuite Bedrooms', 'Prayer Room', 'Living Room Balcony', 'Servant Entry'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 6,
      type: 'Combination 2',
      name: 'Executive Residence',
      area: '3200',
      price: '₹4.50 Cr',
      bedrooms: 4,
      bathrooms: 5,
      balcony: 6,
      parking: 3,
      features: ['4 Ensuite Bedrooms', 'Prayer Room', 'Living Room Balcony', 'Servant Entry'],
      image: '/api/placeholder/400/300',
      popular: false
    }
  ]

  const categories = ['All', 'Combination 1', 'Combination 2', '3 BHK', '4 BHK']

  const filteredPlans = selectedType === 'All' 
    ? floorPlans 
    : floorPlans.filter(plan => plan.type === selectedType)

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect <span className="text-gold">Home</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            From cozy 1-bedroom apartments to spacious 4-bedroom penthouses, 
            find the perfect layout that suits your lifestyle.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedType(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType === category
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Floor Plans Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <Home className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">{plan.name}</div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <span className="bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                      {plan.type}
                    </span>
                    {plan.popular && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(plan.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(plan.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(plan.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 bg-white/80 rounded-full text-gray-700 hover:bg-gold hover:text-black transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Price */}
                  <div className="mb-4">
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Square className="w-4 h-4 text-gold" />
                        <span className="text-gray-600">{plan.area} sq.ft</span>
                      </div>
                      <div className="font-bold text-gold text-lg">
                        {plan.price}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <Bed className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">{plan.bedrooms} Bed</div>
                    </div>
                    <div className="text-center">
                      <Bath className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">{plan.bathrooms} Bath</div>
                    </div>
                    <div className="text-center">
                      <Home className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">{plan.balcony} Balcony</div>
                    </div>
                    <div className="text-center">
                      <Car className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">{plan.parking} Parking</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gold hover:bg-gold-dark text-black font-semibold py-3 rounded-lg transition-colors duration-300 text-sm"
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black rounded-lg transition-colors duration-300"
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto force-text-center">
            Our design team can customize layouts to meet your specific requirements. 
            Contact us to discuss your dream home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Schedule Site Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Customize Layout
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default FloorPlansGrid
