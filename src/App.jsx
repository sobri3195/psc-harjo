import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import EmergencyModal from './components/EmergencyModal'

function App() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  const handleEmergencyCall = (callData) => {
    console.log('Emergency call submitted:', callData)
    setShowEmergencyModal(false)
    // Here you would typically handle the emergency call submission
    // For now, we'll just close the modal
  }

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <HeroSection onEmergencyClick={() => setShowEmergencyModal(true)} />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Emergency Modal */}
      <AnimatePresence>
        {showEmergencyModal && (
          <EmergencyModal
            onClose={() => setShowEmergencyModal(false)}
            onSubmit={handleEmergencyCall}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App