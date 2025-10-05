'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

interface ContactMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  title?: string
  address?: string
}

const ContactMap: React.FC<ContactMapProps> = ({
  center = { lat: 18.9526, lng: 72.8339 }, // Sales office coordinates - update with actual location
  zoom = 16,
  title = 'Fortune Square Sales Office',
  address = '107/f hasham bldg mohd ali road above mejestic perfume, Mumbai 400003'
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

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
        mapId: 'FORTUNE_SQUARE_CONTACT_MAP', // Required for AdvancedMarkerElement
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
          width: 36px;
          height: 36px;
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
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
        title: title
      })

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: Arial, sans-serif; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #D4AF37; font-size: 18px; font-weight: bold;">${title}</h3>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 14px; line-height: 1.5;">${address}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}" target="_blank" style="color: #D4AF37; text-decoration: none; font-weight: 600; font-size: 14px;">Get Directions →</a>
          </div>
        `
      })

      // Show info window by default
      infoWindow.open(googleMap, marker)

      marker.addListener('click', () => {
        infoWindow.open(googleMap, marker)
      })

      setMap(googleMap)
    }
  }, [isLoaded, map, center, zoom, title, address])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-8 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
    >
      {/* Map */}
      <div
        ref={mapRef}
        className="w-full h-80 bg-gray-200"
      >
        {!isLoaded && (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-center text-gray-600">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">Sales Office</h4>
            <p className="text-gray-600 text-xs">Visit us today</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`, '_blank')}
          className="bg-gold hover:bg-gold-dark text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 flex items-center space-x-2"
        >
          <Navigation className="w-4 h-4" />
          <span>Directions</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ContactMap
