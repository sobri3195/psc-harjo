import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, MessageCircle } from 'lucide-react'

const FloatingActionButton = ({ onServiceClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Emergency Call Button */}
      <motion.button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-full shadow-2xl flex items-center space-x-2 mb-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(239, 68, 68, 0.7)",
            "0 0 0 20px rgba(239, 68, 68, 0)",
            "0 0 0 0 rgba(239, 68, 68, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity
          }
        }}
        onClick={onServiceClick}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Emergency Call</span>
        <span className="sm:hidden">119</span>
      </motion.button>

      {/* Service Request Button */}
      <motion.button
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-full shadow-2xl flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onServiceClick}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Request Demo</span>
        <span className="sm:hidden">Demo</span>
      </motion.button>
    </div>
  )
}

export default FloatingActionButton