'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Building, TrendingUp, Shield, CheckCircle } from 'lucide-react'

const DeveloperInfo: React.FC = () => {
  const achievements = [
    {
      icon: Building,
      value: '50+',
      label: 'Projects Completed',
      description: 'Successfully delivered residential and commercial properties'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Families',
      description: 'Families living in our premium developments'
    },
    {
      icon: TrendingUp,
      value: '₹2000Cr+',
      label: 'Projects Value',
      description: 'Total value of completed and ongoing projects'
    },
    {
      icon: Award,
      value: '25+',
      label: 'Awards Won',
      description: 'Recognition for excellence in real estate'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We never compromise on quality. Every project undergoes rigorous quality checks and uses only premium materials and finishes.'
    },
    {
      icon: CheckCircle,
      title: 'Timely Delivery',
      description: 'Our track record speaks for itself - consistent on-time project delivery with transparent communication throughout.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide comprehensive after-sales support and maintain long-term relationships.'
    }
  ]

  const certifications = [
    'RERA Registered',
    'ISO 9001:2015 Certified', 
    'Green Building Council Member',
    'Real Estate Excellence Award Winner'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About the <span className="text-gold">Developer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed force-text-center">
            Fortune Heights is brought to you by Premier Developments, a trusted name 
            in luxury real estate with over 15 years of excellence in creating premium living spaces.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-6">
                Premier Developments
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2008, Premier Developments has established itself as a premier 
                real estate developer known for creating iconic residential and commercial 
                properties that redefine luxury living.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our commitment to excellence, innovative design, and customer satisfaction 
                has earned us numerous awards and the trust of thousands of homeowners 
                across the region.
              </p>
              
              {/* Certifications */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gold mb-4">Certifications & Memberships</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-gray-300 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors mb-4">
                    <achievement.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="font-playfair text-2xl font-bold text-gold mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-white font-medium mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core <span className="text-gold">Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-playfair text-2xl font-bold text-white mb-4">
            Ready to Make Fortune Heights Your Home?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto force-text-center">
            Join the growing community of residents who have chosen Premier Developments 
            for their luxury living needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Schedule a Meeting
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold hover:bg-gold hover:text-black text-gold font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Download Company Profile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperInfo
