import React from 'react'
import Navbar from '../../shared/components/Navbar'
import AboutHero from './components/AboutHero'
import CompanyDetails from './components/CompanyDetails'
import Footer from '../../shared/components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-gray-200">
      <AboutHero />
      <CompanyDetails />
      <Footer />
    </div>
  )
}
