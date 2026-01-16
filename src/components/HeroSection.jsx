import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Clock, Shield, ArrowRight, Zap, Users, Activity, Smartphone } from 'lucide-react'

const HeroSection = ({ onServiceClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background dengan gradient medis */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Sistem Emergency Medical Response Terintegrasi</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            EMR<span className="text-cyan-300"> System</span>
            <br />
            <span className="text-3xl md:text-5xl">Emergency Medical Response</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Sistem emergency medical response terintegrasi yang menghubungkan pasien, ambulans, 
            dan command center dalam satu platform digital untuk respons emergency yang cepat dan terkoordinasi
          </motion.p>

          {/* System Components Preview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Smartphone className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">User App</h3>
              <p className="text-sm text-white/80">Tombol darurat & pelaporan kejadian untuk pengguna</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Activity className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Ambulance App</h3>
              <p className="text-sm text-white/80">Dispatch, navigasi & data pra-rumah sakit</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Web Dashboard</h3>
              <p className="text-sm text-white/80">Command center & call center real-time</p>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">&lt;5</div>
              <div className="text-sm text-white/80">Menit Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">24/7</div>
              <div className="text-sm text-white/80">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">100%</div>
              <div className="text-sm text-white/80">Real-time</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-4 px-8 rounded-full text-lg flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onServiceClick}
            >
              <Heart className="w-5 h-5" />
              <span>Demo Sistem</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full text-lg backdrop-blur-sm hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Konsep
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Sistem Terpercaya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Response Cepat</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Terintegrasi Penuh</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
