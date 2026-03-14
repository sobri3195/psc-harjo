import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ConceptAnimationSection from './components/ConceptAnimationSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import ServiceModal from './components/ServiceModal'
import FloatingActionButton from './components/FloatingActionButton'

function App() {
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleServiceRequest = (requestData) => {
    console.log('Service request submitted:', requestData)
    setSubmissionMessage('Terima kasih! Request demo Anda berhasil dikirim. Tim kami akan menghubungi Anda secepatnya.')
    setTimeout(() => setSubmissionMessage(''), 4000)
    setShowServiceModal(false)
  }

  return (
    <div className="landing-container">
      {submissionMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] bg-emerald-600 text-white px-6 py-3 rounded-full shadow-xl text-sm sm:text-base text-center">
          {submissionMessage}
        </div>
      )}

      {/* Hero Section */}
      <HeroSection
        onServiceClick={() => setShowServiceModal(true)}
        onViewConceptClick={() => scrollToSection('concept-animation')}
      />
      
      {/* Features Section */}
      <FeaturesSection onServiceClick={() => setShowServiceModal(true)} />
      
      {/* Concept Animation Section */}
      <ConceptAnimationSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Service Modal */}
      <AnimatePresence>
        {showServiceModal && (
          <ServiceModal
            onClose={() => setShowServiceModal(false)}
            onSubmit={handleServiceRequest}
          />
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <FloatingActionButton onServiceClick={() => setShowServiceModal(true)} />
    </div>
  )
}

export default App
