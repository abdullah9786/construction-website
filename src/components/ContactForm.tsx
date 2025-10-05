'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, X, PartyPopper } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  interestedIn: string
}

interface FormErrors {
  [key: string]: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestedIn: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const interestedOptions = [
    '3 BHK Apartment',
    '4 BHK Apartment',
    'Combination Type 1',
    'Combination Type 2',
    'Site Visit',
    'Investment Opportunity',
    'General Inquiry'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Subject validation - Optional
    // Message validation - Optional

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setShowSuccessModal(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interestedIn: ''
        })
        // Auto close modal after 5 seconds
        setTimeout(() => {
          setShowSuccessModal(false)
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success Animation */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-2">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    Thank you for contacting us
                  </p>
                </motion.div>

                {/* Confetti Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center space-x-2 mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: [-20, 0], opacity: [1, 0] }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <PartyPopper className="w-6 h-6 text-gold" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Message Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response</h4>
                      <p className="text-gray-600 text-sm">
                        We&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Check Your Email</h4>
                      <p className="text-gray-600 text-sm">
                        Confirmation sent to your email address
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Urgent Inquiry?</h4>
                      <p className="text-gray-600 text-sm">
                        Call us: +91 98920 72711
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  onClick={() => setShowSuccessModal(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gold hover:bg-gold-dark text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  Got it, thanks!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Send Us a <span className="text-gold">Message</span>
            </h2>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-500" />
                <div>
                  <h4 className="font-semibold text-red-800">Something went wrong!</h4>
                  <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                </div>
              </motion.div>
            )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 98920 72711"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            {/* Subject & Interested In */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested In
                </label>
                <select
                  id="interestedIn"
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                >
                  <option value="">Select an option</option>
                  {interestedOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us more about your requirements..."
                />
              </div>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
