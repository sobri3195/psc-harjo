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

  const handleServiceRequest = (requestData) => {
    console.log('Service request submitted:', requestData)
    setShowServiceModal(false)
    // Handle service request submission here
  }

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <HeroSection onServiceClick={() => setShowServiceModal(true)} />
      
      {/* Features Section */}
      <FeaturesSection />
      
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
