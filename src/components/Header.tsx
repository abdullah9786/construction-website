'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Only use white text on homepage when not scrolled (due to dark hero background)
  const shouldUseWhiteText = pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/floor-plans', label: 'Floor Plans' },
    { href: '/brochures', label: 'Brochures' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="font-playfair text-2xl md:text-3xl font-bold text-gold flex items-center leading-none mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Fortune */}
              {/* <span className={`ml-1 transition-colors duration-300 ${shouldUseWhiteText ? 'text-white' : 'text-black'}`}>Heights</span> */}
            {/* <img src="../assets/header-logo.svg" alt=""  width={400}/> */}
            logo required
            </motion.div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:text-gold font-medium transition-colors duration-300 group leading-none ${shouldUseWhiteText ? 'text-white' : 'text-gray-700'}`}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-6 text-sm">
              <a href="tel:+919892072711" className={`flex items-center space-x-2 hover:text-gold transition-colors ${shouldUseWhiteText ? 'text-white' : 'text-gray-600'}`}>
                <Phone className="w-4 h-4" />
                <span>+91 98920 72711</span>
              </a>
              <a href="mailto:anas.ansari@fortunesquare.in" className={`flex items-center space-x-2 hover:text-gold transition-colors ${shouldUseWhiteText ? 'text-white' : 'text-gray-600'}`}>
                <Mail className="w-4 h-4" />
                <span>anas.ansari@fortunesquare.in</span>
              </a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md hover:text-gold focus:outline-none transition-colors ${shouldUseWhiteText ? 'text-white' : 'text-gray-700'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-gold font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href="tel:+919892072711" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 98920 72711</span>
                </a>
                <a href="mailto:anas.ansari@fortunesquare.in" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>anas.ansari@fortunesquare.in</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
