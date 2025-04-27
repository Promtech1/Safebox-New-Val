import React from 'react'
import ContactHero from '../components/ContactUs/ContactHero'
import ContactForm from '../components/ContactUs/ContactForm'
import LocationSection from '../components/ContactUs/LocationSection'
import CtaSection from '../components/ContactUs/CtaSection'

const ContactUs = () => {
  return (
    <div>
        <ContactHero />
        <ContactForm />
        <LocationSection />
        <CtaSection />
    </div>
  )
}

export default ContactUs