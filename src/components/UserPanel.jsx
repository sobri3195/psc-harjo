import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, User, AlertTriangle, Heart, MapPin, Clock } from 'lucide-react'

const UserPanel = ({ emergencyCalls, onEmergencyClick }) => {
  const [showEmergencyForm, setShowEmergencyForm] = useState(false)

  const emergencyTypes = [
    { 
      id: 'heart-attack', 
      icon: Heart, 
      label: 'Heart Attack', 
      color: 'bg-red-500',
      priority: 'high'
    },
    { 
      id: 'accident', 
      icon: AlertTriangle, 
      label: 'Accident', 
      color: 'bg-orange-500',
      priority: 'high'
    },
    { 
      id: 'medical', 
      icon: User, 
      label: 'Medical Emergency', 
      color: 'bg-blue-500',
      priority: 'medium'
    },
    { 
      id: 'other', 
      icon: Phone, 
      label: 'Other Emergency', 
      color: 'bg-gray-500',
      priority: 'low'
    }
  ]

  const handleEmergencyTypeSelect = (type) => {
    onEmergencyClick({
      type: type.id,
      priority: type.priority,
      location: {
        x: Math.random() * 80 + 10, // Random location on map
        y: Math.random() * 80 + 10
      },
      description: `Emergency: ${type.label}`
    })
    setShowEmergencyForm(false)
  }

  return (
    <div className="dashboard-card h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-800">Emergency Requests</h2>
        </div>
      </div>

      {/* Quick Emergency Button */}
      <div className="p-4">
        <motion.button
          className="w-full emergency-button"
          onClick={() => setShowEmergencyForm(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          🚨 Send Emergency Alert
        </motion.button>
      </div>

      {/* Emergency Type Selection Modal */}
      <AnimatePresence>
        {showEmergencyForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEmergencyForm(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Select Emergency Type
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {emergencyTypes.map((type, index) => (
                  <motion.button
                    key={type.id}
                    className={`p-4 rounded-lg text-white font-semibold ${type.color} hover:opacity-90 transition-all duration-200`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEmergencyTypeSelect(type)}
                  >
                    <type.icon className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">{type.label}</div>
                    <div className="text-xs opacity-80 mt-1">
                      Priority: {type.priority}
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <button
                className="w-full mt-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={() => setShowEmergencyForm(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Emergency Calls */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Recent Calls</h3>
        
        <AnimatePresence>
          {emergencyCalls.length === 0 ? (
            <motion.div
              className="text-center text-gray-500 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Phone className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No emergency calls yet</p>
              <p className="text-sm">Be ready to respond!</p>
            </motion.div>
          ) : (
            emergencyCalls.slice(-5).reverse().map((call, index) => (
              <motion.div
                key={call.id}
                className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${call.priority === 'high' ? 'bg-red-500' : call.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                    <div>
                      <div className="font-semibold text-gray-800 capitalize">
                        {call.type?.replace('-', ' ') || 'Emergency'}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>Location: {Math.round(call.location?.x || 0)}, {Math.round(call.location?.y || 0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      call.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      call.status === 'dispatched' ? 'bg-blue-100 text-blue-800' :
                      call.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {call.status}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {call.timestamp ? call.timestamp.toLocaleTimeString() : 'Now'}
                    </div>
                  </div>
                </div>
                
                {call.description && (
                  <div className="mt-2 text-sm text-gray-700 bg-white/50 rounded p-2">
                    {call.description}
                  </div>
                )}
                
                {call.status === 'pending' && (
                  <motion.button
                    className="mt-2 w-full py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Dispatch ambulance logic would go here
                      console.log('Dispatching ambulance for call:', call.id)
                    }}
                  >
                    🚑 Dispatch Ambulance
                  </motion.button>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* User Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div>
            <div className="text-lg font-bold text-gray-800">
              {emergencyCalls.filter(call => call.status === 'completed').length}
            </div>
            <div className="text-xs text-gray-600">Resolved Today</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">
              {Math.round(
                emergencyCalls.filter(call => call.status === 'completed').length / 
                Math.max(emergencyCalls.length, 1) * 100
              )}%
            </div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPanel