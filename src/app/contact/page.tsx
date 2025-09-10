import type { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Fortune Heights sales team. Schedule visits, ask questions, and get personalized assistance for your luxury apartment purchase.',
}

export default function Contact() {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
