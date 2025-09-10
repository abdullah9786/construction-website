import type { Metadata } from 'next'
import BrochuresHero from '@/components/BrochuresHero'
import BrochuresGrid from '@/components/BrochuresGrid'
import BrochuresPreview from '@/components/BrochuresPreview'

export const metadata: Metadata = {
  title: 'Brochures & Downloads',
  description: 'Download comprehensive brochures for Fortune Heights including floor plans, pricing, amenities guide, and project specifications.',
}

export default function Brochures() {
  return (
    <div className="pt-20">
      <BrochuresHero />
      <BrochuresGrid />
      <BrochuresPreview />
    </div>
  )
}
