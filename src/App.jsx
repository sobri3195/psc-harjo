import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Dashboard from './components/Dashboard'
import EmergencyModal from './components/EmergencyModal'
import AmbulanceTracker from './components/AmbulanceTracker'
import UserPanel from './components/UserPanel'
import CommandCenter from './components/CommandCenter'

function App() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)
  const [emergencyCalls, setEmergencyCalls] = useState([])
  const [ambulances, setAmbulances] = useState([
    { id: 1, status: 'available', location: { x: 20, y: 30 }, patient: null },
    { id: 2, status: 'dispatched', location: { x: 60, y: 45 }, patient: 'John Doe - Heart Attack' },
    { id: 3, status: 'en-route', location: { x: 80, y: 20 }, patient: 'Jane Smith - Accident' },
    { id: 4, status: 'returning', location: { x: 40, y: 70 }, patient: null }
  ])

  const handleEmergencyCall = (callData) => {
    setEmergencyCalls(prev => [...prev, {
      id: Date.now(),
      ...callData,
      timestamp: new Date(),
      status: 'pending'
    }])
    setShowEmergencyModal(false)
  }

  const updateAmbulanceStatus = (ambulanceId, updates) => {
    setAmbulances(prev => prev.map(amb => 
      amb.id === ambulanceId 
        ? { ...amb, ...updates }
        : amb
    ))
  }

  return (
    <div className="dashboard-container">
      <Dashboard 
        ambulances={ambulances}
        emergencyCalls={emergencyCalls}
        onEmergencyClick={() => setShowEmergencyModal(true)}
        onDispatchAmbulance={updateAmbulanceStatus}
      />
      
      <AnimatePresence>
        {showEmergencyModal && (
          <EmergencyModal
            onClose={() => setShowEmergencyModal(false)}
            onSubmit={handleEmergencyCall}
          />
        )}
      </AnimatePresence>

      {/* Floating Emergency Button */}
      <motion.button
        className="fixed bottom-6 right-6 emergency-button emergency-pulse z-50"
        onClick={() => setShowEmergencyModal(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🚨 Emergency
      </motion.button>
    </div>
  )
}

export default App