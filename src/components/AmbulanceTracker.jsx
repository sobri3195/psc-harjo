import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Navigation, Zap } from 'lucide-react'

const AmbulanceTracker = ({ ambulances, emergencyCalls, onDispatchAmbulance }) => {
  const getAmbulanceIcon = (status) => {
    const baseClasses = "w-6 h-6 transition-all duration-300"
    switch (status) {
      case 'available':
        return <div className={`${baseClasses} bg-green-500 rounded-full flex items-center justify-center`}>🚑</div>
      case 'dispatched':
        return <div className={`${baseClasses} bg-yellow-500 rounded-full flex items-center justify-center ambulance-movement`}>🚑</div>
      case 'en-route':
        return <div className={`${baseClasses} bg-blue-500 rounded-full flex items-center justify-center ambulance-movement`}>🚑</div>
      case 'returning':
        return <div className={`${baseClasses} bg-gray-500 rounded-full flex items-center justify-center`}>🚑</div>
      default:
        return <div className={`${baseClasses} bg-gray-400 rounded-full flex items-center justify-center`}>🚑</div>
    }
  }

  const getUserPin = (call) => {
    return (
      <motion.div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${call.location.x}%`,
          top: `${call.location.y}%`
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="relative">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -inset-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -inset-1 bg-red-400 rounded-full animate-pulse opacity-50"></div>
        </div>
      </motion.div>
    )
  }

  const getAmbulanceMarker = (ambulance) => (
    <motion.div
      key={ambulance.id}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{
        left: `${ambulance.location.x}%`,
        top: `${ambulance.location.y}%`
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: ambulance.status === 'en-route' ? [0, 5, 0, -5, 0] : 0,
        y: ambulance.status === 'en-route' ? [0, -3, 0, 3, 0] : 0,
      }}
      transition={{
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        x: ambulance.status === 'en-route' ? { 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        } : {},
        y: ambulance.status === 'en-route' ? { 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        } : {}
      }}
      whileHover={{ scale: 1.3, zIndex: 10 }}
      onClick={() => {
        // Show ambulance details
        console.log('Ambulance clicked:', ambulance)
      }}
    >
      <div className="relative">
        {getAmbulanceIcon(ambulance.status)}
        {ambulance.status === 'dispatched' && (
          <div className="absolute -inset-1 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        )}
        {ambulance.status === 'en-route' && (
          <>
            <div className="absolute -inset-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute -inset-1 bg-blue-500 rounded-full animate-pulse opacity-30"></div>
          </>
        )}
      </div>
      
      {/* Ambulance Info Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
      >
        <div className="font-semibold">Ambulance {ambulance.id}</div>
        <div className="text-gray-300">{ambulance.status.toUpperCase()}</div>
        {ambulance.patient && (
          <div className="text-yellow-300 text-xs">{ambulance.patient}</div>
        )}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
      </motion.div>
    </motion.div>
  )

  return (
    <div className="dashboard-card h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Navigation className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Live Tracking Map</h2>
          <div className="flex items-center space-x-1 ml-auto">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600">Live</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative map-container map-grid rounded-b-xl overflow-hidden">
        {/* Map Background Elements */}
        <div className="absolute inset-0">
          {/* Roads */}
          <svg className="w-full h-full">
            <path
              d="M0,50 Q100,30 200,50 T400,50"
              stroke="#94a3b8"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,10"
              opacity="0.3"
            />
            <path
              d="M50,0 Q70,100 50,200 T50,400"
              stroke="#94a3b8"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,10"
              opacity="0.3"
            />
            <path
              d="M150,0 Q130,100 150,200 T150,400"
              stroke="#94a3b8"
              strokeWidth="6"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M0,150 Q100,130 200,150 T400,150"
              stroke="#94a3b8"
              strokeWidth="6"
              fill="none"
              opacity="0.4"
            />
          </svg>
          
          {/* Buildings/Blocks */}
          <div className="absolute top-10 left-10 w-16 h-12 bg-blue-200/50 rounded"></div>
          <div className="absolute top-20 right-20 w-20 h-16 bg-green-200/50 rounded"></div>
          <div className="absolute bottom-20 left-20 w-18 h-14 bg-yellow-200/50 rounded"></div>
          <div className="absolute bottom-10 right-10 w-12 h-10 bg-purple-200/50 rounded"></div>
        </div>

        {/* Emergency Calls */}
        <AnimatePresence>
          {emergencyCalls.filter(call => call.status === 'pending').map(getUserPin)}
        </AnimatePresence>

        {/* Ambulances */}
        <AnimatePresence>
          {ambulances.map(getAmbulanceMarker)}
        </AnimatePresence>

        {/* Animated Route Lines */}
        {ambulances.filter(amb => amb.status === 'en-route').map((ambulance, index) => (
          <motion.div
            key={`route-${ambulance.id}`}
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: index * 0.2 }}
          >
            <svg className="w-full h-full">
              <motion.path
                d={`M${ambulance.location.x * 4},${ambulance.location.y * 2} Q${(ambulance.location.x + 20) * 4},${(ambulance.location.y - 10) * 2} ${(ambulance.location.x + 40) * 4},${(ambulance.location.y + 5) * 2}`}
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </svg>
          </motion.div>
        ))}

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors">
            <Zap className="w-4 h-4 text-blue-600" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors">
            <MapPin className="w-4 h-4 text-green-600" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-xs font-semibold text-gray-800 mb-2">Legend</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Dispatched</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>En Route</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <MapPin className="w-2 h-2 text-white" />
              </div>
              <span>Emergency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmbulanceTracker