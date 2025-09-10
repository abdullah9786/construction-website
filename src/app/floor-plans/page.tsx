import type { Metadata } from 'next'
import FloorPlansHero from '@/components/FloorPlansHero'
import FloorPlansGrid from '@/components/FloorPlansGrid'
import FloorPlanDetails from '@/components/FloorPlanDetails'

export const metadata: Metadata = {
  title: 'Floor Plans',
  description: 'Explore thoughtfully designed floor plans at Fortune Heights - 1, 2, 3 & 4 BHK luxury apartments with premium layouts and modern amenities.',
}

export default function FloorPlans() {
  return (
    <div className="pt-20">
      <FloorPlansHero />
      <FloorPlansGrid />
      <FloorPlanDetails />
    </div>
  )
}
