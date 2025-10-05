'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

interface LeafletContactMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  title?: string
  address?: string
}

const LeafletContactMap: React.FC<LeafletContactMapProps> = ({
  center = { lat: 18.9526, lng: 72.8339 }, // Sales office coordinates - UPDATE WITH YOUR ACTUAL LOCATION
  zoom = 16,
  title = 'Fortune Square Sales Office',
  address = '107/f hasham bldg mohd ali road above mejestic perfume, Mumbai 400003'
}) => {
  const [isClient, setIsClient] = useState(false)
  const [Map, setMap] = useState<any>(null)
  const [Marker, setMarker] = useState<any>(null)
  const [Popup, setPopup] = useState<any>(null)
  const [TileLayer, setTileLayer] = useState<any>(null)
  const [customIcon, setCustomIcon] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Dynamically import Leaflet library first
    import('leaflet').then((L) => {
      // Create custom icon after Leaflet is loaded
      const icon = new L.DivIcon({
        html: `
          <div style="
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%);
            border: 3px solid #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            position: relative;
          ">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44]
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
      >
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </motion.div>
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
      >
        {/* Map */}
        <div className="w-full h-80">
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
                <div style={{ padding: '12px', fontFamily: 'Arial, sans-serif', minWidth: '200px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#D4AF37', fontSize: '18px', fontWeight: 'bold' }}>
                    {title}
                  </h3>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                    {address}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}
                  >
                    Get Directions →
                  </a>
                </div>
              </Popup>
            </Marker>
          </Map>
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
    </>
  )
}

export default LeafletContactMap
