import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Radio, 
  Users, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  Navigation,
  Phone,
  Activity
} from 'lucide-react'

const CommandCenter = ({ ambulances, emergencyCalls, onDispatchAmbulance }) => {
  const [selectedAmbulance, setSelectedAmbulance] = useState(null)
  const [showDispatchModal, setShowDispatchModal] = useState(false)

  const pendingCalls = emergencyCalls.filter(call => call.status === 'pending')
  const activeAmbulances = ambulances.filter(amb => amb.status !== 'available')

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'dispatched': return 'bg-yellow-500'
      case 'en-route': return 'bg-blue-500'
      case 'returning': return 'bg-gray-500'
      default: return 'bg-gray-400'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return <CheckCircle className="w-4 h-4" />
      case 'dispatched': return <Radio className="w-4 h-4" />
      case 'en-route': return <Navigation className="w-4 h-4" />
      case 'returning': return <Clock className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const handleDispatchAmbulance = (ambulanceId, callId) => {
    onDispatchAmbulance(ambulanceId, {
      status: 'dispatched',
      patient: emergencyCalls.find(call => call.id === callId)?.description || 'Emergency Response'
    })
    
    // Update call status
    // This would typically update the call status through a parent function
    setShowDispatchModal(false)
  }

  return (
    <div className="dashboard-card h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Radio className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Command Center</h2>
        </div>
      </div>

      {/* Active Calls */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
          <AlertTriangle className="w-4 h-4 mr-1" />
          Active Emergencies ({pendingCalls.length})
        </h3>
        
        <div className="space-y-2 max-h-32 overflow-y-auto">
          <AnimatePresence>
            {pendingCalls.length === 0 ? (
              <motion.div
                className="text-center text-gray-500 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">All Clear</p>
              </motion.div>
            ) : (
              pendingCalls.map((call, index) => (
                <motion.div
                  key={call.id}
                  className="bg-red-50 border border-red-200 rounded-lg p-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm capitalize">
                        {call.type?.replace('-', ' ') || 'Emergency'}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        Location: {Math.round(call.location?.x || 0)}, {Math.round(call.location?.y || 0)}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <motion.button
                        className="p-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowDispatchModal(true)}
                      >
                        <Radio className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Ambulance Fleet Status */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
          <Users className="w-4 h-4 mr-1" />
          Fleet Status ({ambulances.length})
        </h3>
        
        <div className="space-y-2">
          {ambulances.map((ambulance, index) => (
            <motion.div
              key={ambulance.id}
              className={`p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                selectedAmbulance === ambulance.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedAmbulance(
                selectedAmbulance === ambulance.id ? null : ambulance.id
              )}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`status-indicator ${getStatusColor(ambulance.status)}`}>
                    {getStatusIcon(ambulance.status)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Ambulance {ambulance.id}
                    </div>
                    <div className="text-xs text-gray-600 capitalize">
                      {ambulance.status.replace('-', ' ')}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xs text-gray-500 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {ambulance.location.x}, {ambulance.location.y}
                  </div>
                  {ambulance.patient && (
                    <div className="text-xs text-blue-600 mt-1 max-w-20 truncate">
                      {ambulance.patient}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Extended Info */}
              <AnimatePresence>
                {selectedAmbulance === ambulance.id && (
                  <motion.div
                    className="mt-3 pt-3 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Status:</span>
                        <div className="font-semibold capitalize">{ambulance.status}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Location:</span>
                        <div className="font-semibold">({ambulance.location.x}, {ambulance.location.y})</div>
                      </div>
                      {ambulance.patient && (
                        <div className="col-span-2">
                          <span className="text-gray-500">Patient:</span>
                          <div className="font-semibold text-blue-600">{ambulance.patient}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      {ambulance.status === 'available' && (
                        <motion.button
                          className="flex-1 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowDispatchModal(true)
                          }}
                        >
                          <Radio className="w-3 h-3 inline mr-1" />
                          Dispatch
                        </motion.button>
                      )}
                      
                      <motion.button
                        className="flex-1 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log('Call ambulance:', ambulance.id)
                        }}
                      >
                        <Phone className="w-3 h-3 inline mr-1" />
                        Contact
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <div className="text-lg font-bold text-green-600">
              {ambulances.filter(amb => amb.status === 'available').length}
            </div>
            <div className="text-gray-600">Available</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">
              {activeAmbulances.length}
            </div>
            <div className="text-gray-600">Active</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-600">
              {pendingCalls.length}
            </div>
            <div className="text-gray-600">Pending</div>
          </div>
        </div>
      </div>

      {/* Dispatch Modal */}
      <AnimatePresence>
        {showDispatchModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDispatchModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Dispatch Ambulance
              </h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Ambulance
                  </label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setSelectedAmbulance(parseInt(e.target.value))}
                    value={selectedAmbulance || ''}
                  >
                    <option value="">Choose ambulance...</option>
                    {ambulances.filter(amb => amb.status === 'available').map(amb => (
                      <option key={amb.id} value={amb.id}>
                        Ambulance {amb.id} - Available
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Call
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {pendingCalls.map(call => (
                      <option key={call.id} value={call.id}>
                        {call.type?.replace('-', ' ')} - Location ({Math.round(call.location?.x || 0)}, {Math.round(call.location?.y || 0)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  onClick={() => {
                    if (selectedAmbulance && pendingCalls.length > 0) {
                      handleDispatchAmbulance(selectedAmbulance, pendingCalls[0].id)
                    }
                  }}
                >
                  Dispatch
                </button>
                <button
                  className="flex-1 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition-colors"
                  onClick={() => setShowDispatchModal(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CommandCenter