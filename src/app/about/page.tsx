import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import AboutHero from '@/components/AboutHero'
import TowerDetails from '@/components/TowerDetails'
import DeveloperInfo from '@/components/DeveloperInfo'

export const metadata: Metadata = {
  title: 'About Fortune Heights',
  description: 'Learn about Fortune Heights luxury residential tower - construction status, completion date, and key highlights of this premium living destination.',
}

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <TowerDetails />
      <DeveloperInfo />
    </div>
  )
}
