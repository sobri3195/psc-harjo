import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  MapPin, 
  Phone, 
  User, 
  AlertTriangle, 
  Heart,
  Clock,
  MessageSquare
} from 'lucide-react'

const EmergencyModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    emergencyType: '',
    description: '',
    location: { x: 0, y: 0 },
    priority: 'medium'
  })

  const emergencyTypes = [
    { 
      id: 'heart-attack', 
      icon: Heart, 
      label: 'Heart Attack', 
      color: 'bg-red-500',
      priority: 'high',
      description: 'Chest pain, difficulty breathing, unconscious'
    },
    { 
      id: 'accident', 
      icon: AlertTriangle, 
      label: 'Traffic Accident', 
      color: 'bg-orange-500',
      priority: 'high',
      description: 'Car crash, motorcycle accident, pedestrian hit'
    },
    { 
      id: 'medical', 
      icon: User, 
      label: 'Medical Emergency', 
      color: 'bg-blue-500',
      priority: 'medium',
      description: 'Seizure, diabetic emergency, severe bleeding'
    },
    { 
      id: 'fire', 
      icon: AlertTriangle, 
      label: 'Fire Emergency', 
      color: 'bg-red-600',
      priority: 'high',
      description: 'Building fire, explosion, smoke inhalation'
    },
    { 
      id: 'other', 
      icon: Phone, 
      label: 'Other Emergency', 
      color: 'bg-gray-500',
      priority: 'low',
      description: 'Any other type of emergency'
    }
  ]

  const handleTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      emergencyType: type.id,
      priority: type.priority
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate random location for demo
    const location = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    }
    
    onSubmit({
      ...formData,
      location,
      timestamp: new Date()
    })
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prev => ({
          ...prev,
          location: {
            x: ((position.coords.longitude + 180) / 360) * 100,
            y: ((90 - position.coords.latitude) / 180) * 100
          }
        }))
      })
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Emergency Alert</h2>
                <p className="text-sm text-gray-600">Report an emergency situation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Emergency Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Emergency Type *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyTypes.map((type) => (
                <motion.button
                  key={type.id}
                  type="button"
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    formData.emergencyType === type.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => handleTypeSelect(type)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${type.color} text-white`}>
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{type.label}</div>
                      <div className="text-xs text-gray-600">{type.description}</div>
                      <div className="text-xs mt-1">
                        <span className={`px-2 py-1 rounded-full ${
                          type.priority === 'high' ? 'bg-red-100 text-red-800' :
                          type.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {type.priority} priority
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Your Name *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="+62 xxx xxx xxxx"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Location *
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                required
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Address or landmark"
                value={formData.locationText || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, locationText: e.target.value }))}
              />
              <motion.button
                type="button"
                className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                onClick={getCurrentLocation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5" />
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Click the location icon to use your current GPS position
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-1" />
              Additional Details
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              rows="3"
              placeholder="Describe the emergency situation, number of people involved, visible injuries, etc."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          {/* Emergency Contact Info */}
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-red-600" />
              <h4 className="font-semibold text-red-800">Response Time</h4>
            </div>
            <p className="text-sm text-red-700">
              Emergency services will be notified immediately. Average response time is 5-8 minutes.
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-3">
            <motion.button
              type="submit"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              disabled={!formData.emergencyType || !formData.name || !formData.phone}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Send Emergency Alert</span>
            </motion.button>
            <motion.button
              type="button"
              className="px-6 py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default EmergencyModal