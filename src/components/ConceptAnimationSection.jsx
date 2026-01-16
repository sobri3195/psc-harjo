import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Ambulance, 
  Monitor, 
  MapPin, 
  Smartphone,
  Activity,
  Navigation,
  Radio,
  Brain,
  TrendingUp,
  Hospital,
  DollarSign,
  Zap,
  Shield,
  Target,
  CheckCircle
} from 'lucide-react'

const ConceptAnimationSection = () => {
  const [selectedConcept, setSelectedConcept] = useState('CB1')

  const concepts = {
    CB1: {
      title: 'CB1 - Fitur Sederhana',
      description: 'Sistem emergency response dasar dengan fitur inti: tombol darurat, tracking lokasi, dan dispatch manual',
      features: [
        'Tombol darurat sederhana',
        'GPS tracking basic',
        'Dispatch manual',
        'Komunikasi voice call'
      ],
      ideal: 'Ideal untuk area dengan traffic emergency rendah',
      color: 'gray',
      gradient: 'from-gray-500 to-gray-600',
      userFeatures: ['Tombol Darurat', 'Lokasi GPS'],
      ambulanceFeatures: ['Navigasi Basic', 'Voice Call'],
      dashboardFeatures: ['Dispatch Manual', 'Tracking Lokasi']
    },
    CB2: {
      title: 'CB2 - Fitur Kompleks Terintegrasi Penuh',
      description: 'Sistem emergency response komprehensif dengan semua fitur advanced: AI triase, prediktif analytics, dan integrasi rumah sakit penuh',
      features: [
        'AI-powered triase system',
        'Prediktif analytics',
        'Integrasi hospital penuh',
        'Real-time monitoring',
        'Automated dispatch'
      ],
      ideal: 'Ideal untuk kota besar dengan traffic emergency tinggi',
      color: 'blue',
      gradient: 'from-blue-500 to-purple-500',
      userFeatures: ['Tombol Darurat', 'AI Triase', 'Video Call', 'Medical History'],
      ambulanceFeatures: ['Auto Dispatch', 'Smart Navigation', 'Real-time Data', 'Hospital Integration'],
      dashboardFeatures: ['AI Analytics', 'Prediktif System', 'Full Monitoring', 'Hospital Network']
    },
    CB3: {
      title: 'CB3 - Fitur Terbatas Berbasis Lokasi',
      description: 'Sistem emergency response berbasis lokasi geografis dengan akses terbatas untuk efisiensi operasional dan biaya',
      features: [
        'Geo-fencing based access',
        'Location-based dispatch',
        'Limited feature set',
        'Cost-effective operation'
      ],
      ideal: 'Ideal untuk wilayah suburban dengan budget terbatas',
      color: 'green',
      gradient: 'from-green-500 to-teal-500',
      userFeatures: ['Tombol Darurat', 'Geo-Zone Access'],
      ambulanceFeatures: ['Zone-based Dispatch', 'Local Navigation'],
      dashboardFeatures: ['Zone Management', 'Basic Tracking', 'Cost Control']
    }
  }

  const currentConcept = concepts[selectedConcept]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  // User Animation Component
  const UserAnimation = () => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-red-200">
        <div className="flex flex-col items-center">
          {/* User Icon */}
          <motion.div
            className="bg-gradient-to-r from-red-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <User className="w-10 h-10 text-white" />
          </motion.div>

          <h4 className="text-lg font-bold text-gray-800 mb-2">User App</h4>
          
          {/* User Features */}
          <div className="space-y-2 w-full">
            {currentConcept.userFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-red-50 rounded-lg px-3 py-2 text-xs text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-red-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Emergency Button Animation */}
          <motion.button
            className="mt-4 bg-red-600 text-white rounded-full px-6 py-2 font-semibold text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.7)",
                "0 0 0 10px rgba(239, 68, 68, 0)",
              ]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            Emergency
          </motion.button>
        </div>
      </div>

      {/* Signal Animation */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  )

  // Ambulance Animation Component
  const AmbulanceAnimation = () => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-200">
        <div className="flex flex-col items-center">
          {/* Ambulance Icon */}
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Ambulance className="w-10 h-10 text-white" />
            {/* Siren Light */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ 
                opacity: [1, 0, 1],
              }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity
              }}
            />
          </motion.div>

          <h4 className="text-lg font-bold text-gray-800 mb-2">Ambulance App</h4>
          
          {/* Ambulance Features */}
          <div className="space-y-2 w-full">
            {currentConcept.ambulanceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-lg px-3 py-2 text-xs text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <div className="flex items-center justify-center space-x-1">
                  <Navigation className="w-3 h-3 text-blue-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status Badge */}
          <motion.div
            className="mt-4 bg-green-500 text-white rounded-full px-4 py-1 text-xs font-semibold"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity
            }}
          >
            En Route
          </motion.div>
        </div>
      </div>

      {/* GPS Signal */}
      <motion.div
        className="absolute -bottom-2 -left-2"
        animate={{ 
          rotate: 360
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <MapPin className="w-6 h-6 text-blue-500" />
      </motion.div>
    </motion.div>
  )

  // Dashboard Animation Component
  const DashboardAnimation = () => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-200">
        <div className="flex flex-col items-center">
          {/* Dashboard Icon */}
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
          >
            <Monitor className="w-10 h-10 text-white" />
            {/* Activity indicator */}
            <motion.div
              className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
              animate={{ 
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </motion.div>

          <h4 className="text-lg font-bold text-gray-800 mb-2">Dashboard Maps</h4>
          
          {/* Dashboard Features */}
          <div className="space-y-2 w-full">
            {currentConcept.dashboardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 rounded-lg px-3 py-2 text-xs text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <div className="flex items-center justify-center space-x-1">
                  <Activity className="w-3 h-3 text-purple-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Status */}
          <motion.div
            className="mt-4 flex items-center space-x-2"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ 
                opacity: [1, 0.3, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="text-xs text-gray-600 font-medium">Live Monitoring</span>
          </motion.div>
        </div>
      </div>

      {/* Data flow animation */}
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity
        }}
      >
        <Activity className="w-4 h-4 text-purple-600" />
      </motion.div>
    </motion.div>
  )

  // Connection Lines Animation
  const ConnectionLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* User to Dashboard */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="33%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dashboard to Ambulance */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="50%"
          y1="50%"
          x2="67%"
          y2="50%"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="gradient2">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data packets animation */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-500 rounded-full"
        animate={{ 
          x: ["0%", "200%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      />
    </div>
  )

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-purple-100 text-red-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-semibold">Animasi Sistem Terintegrasi</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Visualisasi
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600"> Sistem Emergency Response</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lihat bagaimana User App, Ambulance System, dan Dashboard Maps bekerja terintegrasi dalam tiga konsep implementasi berbeda
          </p>
        </motion.div>

        {/* Concept Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Object.keys(concepts).map((conceptKey) => (
            <motion.button
              key={conceptKey}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedConcept === conceptKey
                  ? `bg-gradient-to-r ${concepts[conceptKey].gradient} text-white shadow-lg`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedConcept(conceptKey)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {concepts[conceptKey].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Animation Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedConcept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Concept Description */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {currentConcept.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {currentConcept.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 font-medium">{currentConcept.ideal}</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 min-w-[280px]">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Fitur Utama:</h4>
                  <ul className="space-y-2">
                    {currentConcept.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Animation Display */}
            <div className="relative">
              {/* Desktop View */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
                <ConnectionLines />
                <UserAnimation />
                <DashboardAnimation />
                <AmbulanceAnimation />
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-8">
                <UserAnimation />
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Activity className="w-8 h-8 text-gray-400" />
                  </motion.div>
                </div>
                <DashboardAnimation />
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Activity className="w-8 h-8 text-gray-400" />
                  </motion.div>
                </div>
                <AmbulanceAnimation />
              </div>
            </div>

            {/* Feature Icons */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {selectedConcept === 'CB1' && (
                <>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Smartphone className="w-8 h-8 text-gray-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Basic Features</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <MapPin className="w-8 h-8 text-gray-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">GPS Tracking</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Radio className="w-8 h-8 text-gray-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Voice Call</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <DollarSign className="w-8 h-8 text-gray-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Cost Effective</span>
                  </motion.div>
                </>
              )}
              
              {selectedConcept === 'CB2' && (
                <>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Brain className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">AI Powered</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Analytics</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Hospital className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Hospital Integration</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Zap className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Auto Dispatch</span>
                  </motion.div>
                </>
              )}
              
              {selectedConcept === 'CB3' && (
                <>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <MapPin className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Geo-Fencing</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Target className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Zone Based</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <DollarSign className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Budget Friendly</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Shield className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-gray-600 text-center">Efficient</span>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={`bg-gradient-to-r ${currentConcept.gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Tertarik dengan {currentConcept.title}?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk demo langsung dan konsultasi implementasi sistem emergency response yang sesuai dengan kebutuhan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Konsultasi Gratis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConceptAnimationSection
