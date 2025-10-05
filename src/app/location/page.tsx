import { Metadata } from 'next'
import LeafletLocationMap from '@/components/LeafletLocationMap'
import LocationHero from '@/components/LocationHero'
import ConnectivitySection from '@/components/ConnectivitySection'

export const metadata: Metadata = {
  title: 'Prime Location',
  description: 'Fortune Square is strategically located in the heart of the city with excellent connectivity to major landmarks, business districts, and transportation hubs.',
}

export default function Location() {
  return (
    <div className="pt-20">
      <LocationHero />
      <LeafletLocationMap />
      <ConnectivitySection />
    </div>
  )
}
