'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'

const LeafletLocationMap = () => {
  const [isClient, setIsClient] = useState(false)
  const [Map, setMap] = useState<any>(null)
  const [Marker, setMarker] = useState<any>(null)
  const [Popup, setPopup] = useState<any>(null)
  const [TileLayer, setTileLayer] = useState<any>(null)
  const [customIcon, setCustomIcon] = useState<any>(null)

  // Property coordinates - UPDATE THESE WITH YOUR ACTUAL LOCATION
  const center = { lat: 19.0760, lng: 72.8777 }
  const zoom = 15

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
    setIsClient(true)
    
    // Dynamically import Leaflet library first
    import('leaflet').then((L) => {
      // Create custom icon after Leaflet is loaded
      const icon = new L.DivIcon({
        html: `
          <div style="
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%);
            border: 3px solid #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            position: relative;
          ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      })
      setCustomIcon(icon)

      // Now import react-leaflet components
      import('react-leaflet').then((module) => {
        setMap(module.MapContainer)
        setMarker(module.Marker)
        setPopup(module.Popup)
        setTileLayer(module.TileLayer)
      })
    })
  }, [])

  if (!isClient || !Map || !customIcon) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Strategically located in the heart of the city with easy access to all major landmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <style jsx global>{`
        .leaflet-control-zoom {
          z-index: 400 !important;
        }
        .leaflet-top {
          z-index: 400 !important;
        }
        .leaflet-bottom {
          z-index: 400 !important;
        }
      `}</style>

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
                <div className="w-full h-[500px]">
                  <Map
                    center={[center.lat, center.lng]}
                    zoom={zoom}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[center.lat, center.lng]} icon={customIcon}>
                      <Popup>
                        <div style={{ padding: '8px', fontFamily: 'Arial, sans-serif' }}>
                          <h3 style={{ margin: '0 0 5px 0', color: '#D4AF37', fontSize: '16px', fontWeight: 'bold' }}>
                            Fortune Square
                          </h3>
                          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                            Premium Luxury Tower
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  </Map>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nearby Places */}
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeafletLocationMap
