'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'

const AmenitiesGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Swimming Pool',
      category: 'Recreation',
      type: 'image',
      // Placeholder - replace with actual images
      src: '/api/placeholder/800/600',
      description: 'Olympic-size temperature controlled swimming pool'
    },
    {
      id: 2,
      title: 'Fitness Center',
      category: 'Health',
      type: 'image',
      src: '/api/placeholder/800/600',
      description: 'State-of-the-art gymnasium with modern equipment'
    },
    {
      id: 3,
      title: 'Rooftop Garden',
      category: 'Lifestyle',
      type: 'image',
      src: '/api/placeholder/800/600',
      description: 'Beautiful landscaped gardens with city views'
    },
    {
      id: 4,
      title: 'Kids Play Area',
      category: 'Family',
      type: 'image',
      src: '/api/placeholder/800/600',
      description: 'Safe and fun playground for children'
    },
    {
      id: 5,
      title: 'Resident Lounge',
      category: 'Community',
      type: 'image',
      src: '/api/placeholder/800/600',
      description: 'Elegant lounge space for socializing'
    },
    {
      id: 6,
      title: 'Virtual Tour',
      category: 'Overview',
      type: 'video',
      src: '/api/placeholder/800/600',
      description: 'Complete walkthrough of all amenities'
    }
  ]

  const categories = ['All', 'Recreation', 'Health', 'Lifestyle', 'Family', 'Community']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = selectedImage
    let newIndex: number
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedImage(newIndex)
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
            Amenities <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            Get a glimpse of the luxurious amenities waiting for you at Fortune Heights
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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => openModal(index)}
              >
                {/* Image/Video Placeholder */}
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="text-4xl mb-2">🏢</div>
                      <div className="text-sm">{item.title}</div>
                    </div>
                  </div>
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2">
                    <span className="bg-gold text-black px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image/Video */}
                <div className="bg-gray-200 rounded-lg aspect-w-16 aspect-h-12 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <div className="text-xl font-bold">
                      {filteredItems[selectedImage]?.title}
                    </div>
                    <div className="text-lg mt-2">
                      {filteredItems[selectedImage]?.description}
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {filteredItems[selectedImage]?.title}
                  </h3>
                  <p className="text-gray-200">
                    {filteredItems[selectedImage]?.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AmenitiesGallery
