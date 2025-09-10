import type { Metadata } from 'next'
import AmenitiesHero from '@/components/AmenitiesHero'
import AmenitiesGrid from '@/components/AmenitiesGrid'
import AmenitiesGallery from '@/components/AmenitiesGallery'

export const metadata: Metadata = {
  title: 'Luxury Amenities',
  description: 'Discover world-class amenities at Fortune Heights including fitness center, swimming pool, spa, business center, and premium recreational facilities.',
}

export default function Amenities() {
  return (
    <div className="pt-20">
      <AmenitiesHero />
      <AmenitiesGrid />
      <AmenitiesGallery />
    </div>
  )
}
