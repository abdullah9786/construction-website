import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ConstructionProgress from '@/components/ConstructionProgress'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ConstructionProgress />
    </div>
  )
}
