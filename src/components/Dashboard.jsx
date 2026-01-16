import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Users, Ambulance, Phone, AlertTriangle, Clock } from 'lucide-react'
import AmbulanceTracker from './AmbulanceTracker'
import UserPanel from './UserPanel'
import CommandCenter from './CommandCenter'

const Dashboard = ({ ambulances, emergencyCalls, onEmergencyClick, onDispatchAmbulance }) => {
  const activeAmbulances = ambulances.filter(amb => amb.status !== 'available')
  const availableAmbulances = ambulances.filter(amb => amb.status === 'available')
  const pendingCalls = emergencyCalls.filter(call => call.status === 'pending')

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'dispatched': return 'bg-yellow-500'
      case 'en-route': return 'bg-blue-500'
      case 'returning': return 'bg-gray-500'
      default: return 'bg-gray-400'
    }
  }

  return (
    <div className="dashboard-grid">
      {/* Header */}
      <motion.div 
        className="col-span-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">911 Emergency Dashboard</h1>
            </div>
            <div className="text-sm text-gray-600">
              {new Date().toLocaleString('id-ID')}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-lg"
              animate={{ scale: pendingCalls.length > 0 ? [1, 1.05, 1] : 1 }}
              transition={{ repeat: pendingCalls.length > 0 ? Infinity : 0, duration: 1 }}
            >
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="font-semibold text-red-700">{pendingCalls.length} Emergency</span>
            </motion.div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{availableAmbulances.length} Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{activeAmbulances.length} Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Left Panel - User Emergency Requests */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <UserPanel 
          emergencyCalls={emergencyCalls}
          onEmergencyClick={onEmergencyClick}
        />
      </motion.div>

      {/* Center Panel - Map & Ambulance Tracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AmbulanceTracker 
          ambulances={ambulances}
          emergencyCalls={emergencyCalls}
          onDispatchAmbulance={onDispatchAmbulance}
        />
      </motion.div>

      {/* Right Panel - Command Center */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CommandCenter 
          ambulances={ambulances}
          emergencyCalls={emergencyCalls}
          onDispatchAmbulance={onDispatchAmbulance}
        />
      </motion.div>

      {/* Bottom Panel - System Status */}
      <motion.div 
        className="col-span-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="dashboard-card p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{ambulances.length}</div>
                <div className="text-sm text-gray-600">Total Ambulances</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{availableAmbulances.length}</div>
                <div className="text-sm text-gray-600">Available Units</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{pendingCalls.length}</div>
                <div className="text-sm text-gray-600">Pending Calls</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {Math.round(emergencyCalls.filter(call => call.status === 'completed').length / Math.max(emergencyCalls.length, 1) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard