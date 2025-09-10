'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, Download, Eye, Share2, Calendar, 
  Home, DollarSign, Building, Dumbbell, Shield, 
  MapPin, Users, Clock
} from 'lucide-react'

const BrochuresGrid: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  const brochures = [
    {
      id: 1,
      title: 'Master Brochure',
      description: 'Complete project overview with all details',
      category: 'Overview',
      pages: 32,
      size: '12.5 MB',
      lastUpdated: '2024-12-15',
      icon: Building,
      color: 'from-gold to-gold-dark',
      popular: true,
      features: ['Project Overview', 'Location Details', 'Amenities Guide', 'Floor Plans Preview']
    },
    {
      id: 2,
      title: 'Floor Plans Detailed',
      description: 'All floor plan layouts with dimensions',
      category: 'Floor Plans',
      pages: 28,
      size: '15.2 MB',
      lastUpdated: '2024-12-12',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      popular: true,
      features: ['1-4 BHK Layouts', 'Dimensions', '3D Views', 'Furniture Layouts']
    },
    {
      id: 3,
      title: 'Price List & Payment Plans',
      description: 'Current pricing and flexible payment options',
      category: 'Pricing',
      pages: 8,
      size: '2.8 MB',
      lastUpdated: '2024-12-10',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      popular: false,
      features: ['Unit Pricing', 'Payment Plans', 'Booking Process', 'Special Offers']
    },
    {
      id: 4,
      title: 'Amenities Guide',
      description: 'Detailed information about all amenities',
      category: 'Amenities',
      pages: 20,
      size: '18.7 MB',
      lastUpdated: '2024-12-08',
      icon: Dumbbell,
      color: 'from-purple-500 to-purple-600',
      popular: false,
      features: ['Recreation Facilities', 'Health & Wellness', 'Security Features', 'Smart Home Tech']
    },
    {
      id: 5,
      title: 'Location & Connectivity',
      description: 'Neighborhood guide and connectivity details',
      category: 'Location',
      pages: 16,
      size: '8.4 MB',
      lastUpdated: '2024-12-05',
      icon: MapPin,
      color: 'from-red-500 to-red-600',
      popular: false,
      features: ['Location Map', 'Connectivity', 'Nearby Facilities', 'Future Developments']
    },
    {
      id: 6,
      title: 'Construction Progress',
      description: 'Latest construction updates and timeline',
      category: 'Progress',
      pages: 12,
      size: '6.1 MB',
      lastUpdated: '2024-12-01',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      popular: false,
      features: ['Progress Photos', 'Timeline', 'Quality Standards', 'Completion Schedule']
    },
    {
      id: 7,
      title: 'Legal Documents',
      description: 'RERA registration and legal compliance',
      category: 'Legal',
      pages: 24,
      size: '4.9 MB',
      lastUpdated: '2024-11-28',
      icon: Shield,
      color: 'from-gray-500 to-gray-600',
      popular: false,
      features: ['RERA Certificate', 'Approvals', 'NOCs', 'Legal Compliance']
    },
    {
      id: 8,
      title: 'Resident Guide',
      description: 'Living guide for new residents',
      category: 'Living',
      pages: 16,
      size: '5.3 MB',
      lastUpdated: '2024-11-25',
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      popular: false,
      features: ['Move-in Process', 'Community Guidelines', 'Services', 'Contact Directory']
    }
  ]

  const handleDownload = async (brochure: typeof brochures[0]) => {
    setDownloadingId(brochure.id)
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would trigger the actual download here
    console.log(`Downloading ${brochure.title}`)
    
    setDownloadingId(null)
  }

  const handlePreview = (id: number) => {
    setPreviewId(id)
  }

  const handleShare = async (brochure: typeof brochures[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${brochure.title} - Fortune Heights`,
          text: brochure.description,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const categories = ['All', 'Overview', 'Floor Plans', 'Pricing', 'Amenities', 'Location', 'Legal']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBrochures = selectedCategory === 'All' 
    ? brochures 
    : brochures.filter(b => b.category === selectedCategory)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-20 bg-gray-50">
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
            Download <span className="text-gold">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed force-text-center">
            Get instant access to comprehensive project documentation and make an informed decision about your investment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Brochures Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredBrochures.map((brochure) => (
            <motion.div
              key={brochure.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`h-20 bg-gradient-to-r ${brochure.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <brochure.icon className="w-10 h-10 text-white" />
                </motion.div>
                {brochure.popular && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                  {brochure.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {brochure.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-3 h-3" />
                    <span>{brochure.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{brochure.size}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Includes:</div>
                  <div className="space-y-1">
                    {brochure.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-gold rounded-full" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {brochure.features.length > 2 && (
                      <div className="text-xs text-gray-500">
                        +{brochure.features.length - 2} more...
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDownload(brochure)}
                    disabled={downloadingId === brochure.id}
                    className="bg-gold hover:bg-gold-dark text-black font-semibold py-2 px-3 rounded-lg text-xs transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {downloadingId === brochure.id ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePreview(brochure.id)}
                    className="border border-gold text-gold hover:bg-gold hover:text-black py-2 px-3 rounded-lg text-xs transition-colors duration-300 flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleShare(brochure)}
                    className="border border-gray-300 text-gray-600 hover:bg-gray-100 py-2 px-3 rounded-lg text-xs transition-colors duration-300 flex items-center justify-center"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Last Updated */}
              <div className="px-6 pb-4">
                <div className="text-xs text-gray-500">
                  Updated: {new Date(brochure.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
            Need Physical Copies?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto force-text-center">
            Request printed brochures to be delivered to your address, or visit our sales office to collect them in person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Request Physical Copies
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Visit Sales Office
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrochuresGrid
