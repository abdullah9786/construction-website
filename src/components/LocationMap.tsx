'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react'

interface LocationMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  showNearbyPlaces?: boolean
}

const LocationMap: React.FC<LocationMapProps> = ({
  center = { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates - update with actual location
  zoom = 15,
  showNearbyPlaces = true
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Nearby places data
  const nearbyPlaces = [
    { name: 'International Airport', distance: '8 km', time: '15 min', icon: '✈️' },
    { name: 'Metro Station', distance: '2 km', time: '5 min', icon: '🚇' },
    { name: 'Shopping Mall', distance: '3 km', time: '8 min', icon: '🛍️' },
    { name: 'Hospital', distance: '1.5 km', time: '4 min', icon: '🏥' },
    { name: 'School', distance: '1 km', time: '3 min', icon: '🏫' },
    { name: 'Restaurant Hub', distance: '2.5 km', time: '7 min', icon: '🍽️' }
  ]

  useEffect(() => {
    let checkInterval: NodeJS.Timeout | null = null

    // Load Google Maps script
    const loadGoogleMaps = () => {
      // Check if already loaded
      if (window.google && window.google.maps && window.google.maps.Map) {
        setIsLoaded(true)
        return
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
      if (existingScript) {
        // Script exists, wait for it to load
        checkInterval = setInterval(() => {
          if (window.google && window.google.maps && window.google.maps.Map) {
            setIsLoaded(true)
            if (checkInterval) clearInterval(checkInterval)
          }
        }, 100)
        return
      }

      // Create new script
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,marker&loading=async`
      script.async = true
      script.defer = true
      script.onload = () => {
        // Wait a bit for libraries to initialize
        setTimeout(() => setIsLoaded(true), 100)
      }
      script.onerror = (error) => {
        console.error('Error loading Google Maps:', error)
      }
      document.head.appendChild(script)
    }

    loadGoogleMaps()

    // Cleanup
    return () => {
      if (checkInterval) clearInterval(checkInterval)
    }
  }, [])

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      const googleMap = new google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapId: 'FORTUNE_SQUARE_MAP', // Required for AdvancedMarkerElement
        // Note: styles are controlled via Google Cloud Console when using mapId
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true
      })

      // Create custom marker element with gold pin
      const pinElement = document.createElement('div')
      pinElement.innerHTML = `
        <div style="
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%);
          border: 3px solid #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: transform 0.2s;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `
      
      // Add hover effect
      pinElement.addEventListener('mouseenter', () => {
        pinElement.querySelector('div')!.style.transform = 'scale(1.1)'
      })
      pinElement.addEventListener('mouseleave', () => {
        pinElement.querySelector('div')!.style.transform = 'scale(1)'
      })

      // Create AdvancedMarkerElement
      const { AdvancedMarkerElement } = google.maps.marker as any
      const marker = new AdvancedMarkerElement({
        map: googleMap,
        position: center,
        content: pinElement,
        title: 'Fortune Square'
      })

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 5px 0; color: #D4AF37; font-size: 16px; font-weight: bold;">Fortune Square</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">Premium Luxury Tower</p>
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(googleMap, marker)
      })

      setMap(googleMap)
    }
  }, [isLoaded, map, center, zoom])

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
            Prime <span className="text-gold">Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located in the heart of the city with easy access to all major landmarks
            and excellent connectivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Map */}
              <div
                ref={mapRef}
                className="w-full h-[500px] bg-gray-200"
              >
                {!isLoaded && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading map...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Address Card */}
              <div className="p-6 bg-gradient-to-r from-gold/10 to-gold/5">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                      Fortune Square
                    </h3>
                    <p className="text-gray-600 mb-4">
                      123 Luxury Boulevard, Downtown District<br />
                      Metropolitan City, 400001
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`, '_blank')}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 flex items-center space-x-2"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300"
                      >
                        View on Maps
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nearby Places */}
          {showNearbyPlaces && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Nearby Landmarks
              </h3>
              
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl shadow-lg p-5 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{place.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {place.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{place.distance}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{place.time}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl p-6 mt-6"
              >
                <h4 className="font-playfair text-xl font-bold mb-4">
                  Schedule a Site Visit
                </h4>
                <p className="text-gray-300 mb-4 text-sm">
                  Experience the location firsthand. Contact us to arrange a visit.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919892072711"
                    className="flex items-center space-x-3 text-sm hover:text-gold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98920 72711</span>
                  </a>
                  <a
                    href="mailto:anas.ansari@fortunesquare.in"
                    className="flex items-center space-x-3 text-sm hover:text-gold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>anas.ansari@fortunesquare.in</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LocationMap
