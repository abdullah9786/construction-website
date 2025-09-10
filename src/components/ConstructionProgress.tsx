'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, Calendar, Hammer, Key, Sparkles } from 'lucide-react'

const ConstructionProgress: React.FC = () => {
  const milestones = [
    {
      phase: 'Foundation & Structure',
      description: 'Foundation laying and structural framework completion',
      date: 'March 2023',
      status: 'completed',
      icon: Hammer
    },
    {
      phase: 'Core Construction',
      description: 'Main building construction and floor development',
      date: 'September 2024',
      status: 'completed',
      icon: Hammer
    },
    {
      phase: 'Interior Finishing',
      description: 'Interior design, fixtures, and premium finishes installation',
      date: 'March 2025',
      status: 'current',
      icon: Sparkles
    },
    {
      phase: 'Final Inspections',
      description: 'Quality checks, safety certifications, and final approvals',
      date: 'July 2025',
      status: 'upcoming',
      icon: CheckCircle
    },
    {
      phase: 'Ready for Possession',
      description: 'Move-in ready with all amenities fully operational',
      date: 'October 2025',
      status: 'upcoming',
      icon: Key
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-8 h-8 text-green-500" />
      case 'current':
        return (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Circle className="w-8 h-8 text-gold fill-gold" />
          </motion.div>
        )
      default:
        return <Circle className="w-8 h-8 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'current':
        return 'border-gold bg-gold/10'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  const progressPercentage = (milestones.filter(m => m.status === 'completed').length / milestones.length) * 100

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Construction <span className="text-gold">Progress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 force-text-center">
            Track our journey to completion. Fortune Heights is on schedule to deliver 
            exceptional luxury living by October 2025.
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-900">Overall Progress</span>
              <span className="text-sm font-medium text-gold">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full shadow-lg relative overflow-hidden"
              >
                {/* Progress shine effect */}
                <motion.div
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              Currently at {Math.round(progressPercentage)}% - Interior Finishing phase in progress
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden lg:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                  {getStatusIcon(milestone.status)}
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl border-2 ${getStatusColor(milestone.status)} shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-4 mb-3 lg:hidden">
                      {getStatusIcon(milestone.status)}
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{milestone.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <milestone.icon className={`w-6 h-6 ${
                        milestone.status === 'completed' ? 'text-green-500' : 
                        milestone.status === 'current' ? 'text-gold' : 'text-gray-400'
                      }`} />
                      <h3 className="font-playfair text-xl font-bold text-gray-900">
                        {milestone.phase}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-3">
                      {milestone.description}
                    </p>

                    <div className="hidden lg:flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{milestone.date}</span>
                    </div>

                    {milestone.status === 'current' && (
                      <div className="mt-3 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gold">Currently In Progress</span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6 force-text-center">
            Want to stay updated on our construction progress?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-gold"
          >
            Subscribe for Updates
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ConstructionProgress
