import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Activity, 
  Users, 
  MapPin, 
  Clock, 
  Shield, 
  Heart, 
  Zap,
  Navigation,
  Radio,
  Database,
  AlertTriangle,
  CheckCircle,
  Monitor
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "User App - Tombol Darurat",
      description: "Aplikasi Android untuk pengguna dengan tombol darurat mudah diakses, pelaporan kejadian real-time, dan tracking lokasi otomatis untuk emergency medical response",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Ambulance App - Dispatch System",
      description: "Aplikasi Android khusus ambulans dengan sistem dispatch otomatis, navigasi GPS real-time, dan pengiriman data pra-rumah sakit terintegrasi",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Dashboard - Command Center",
      description: "Dashboard web untuk command center dan call center dengan monitoring real-time, sistem triase, dan pengendalian operasional komprehensif",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS Tracking Real-time",
      description: "Sistem pelacakan lokasi real-time untuk semua ambulans dan pasien dengan akurasi tinggi dan update otomatis setiap detik",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Communication System",
      description: "Sistem komunikasi terintegrasi antara call center, ambulans, dan pasien dengan fitur voice, chat, dan video call",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Medical Data Integration",
      description: "Integrasi data medis lengkap dari pasien, riwayat emergency, dan informasi rumah sakit untuk response yang lebih efektif",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Response Time &lt; 5 Menit",
      description: "Sistem otomatisasi dispatch dengan algoritma optimasi untuk memastikan ambulans terdekat dapat merespons dalam waktu kurang dari 5 menit",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical Triage System",
      description: "Sistem triase otomatis untuk mengklasifikasikan tingkat kegentingan pasien dan menentukan prioritas penanganan emergency",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Emergency Alert System",
      description: "Sistem peringatan darurat multi-level dengan notifikasi otomatis ke rumah sakit, keluarga, dan tim medis terkait",
      color: "from-red-600 to-red-800"
    }
  ]

  return (
    <section className="py-12 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">Sistem Emergency Medical Response</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Fitur
            <span className="text-red-600"> Terintegrasi</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            EMR System menyediakan solusi komprehensif untuk emergency medical response dengan 
            tiga komponen utama yang bekerja terintegrasi untuk memberikan layanan darurat medis yang cepat, akurat, dan terpercaya
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon dengan gradient background */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Components Highlight */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">User Application</h3>
            <p className="text-sm sm:text-base text-gray-600">Android app untuk tombol darurat dan pelaporan kejadian emergency</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Ambulance System</h3>
            <p className="text-sm sm:text-base text-gray-600">Android app untuk dispatch, navigasi, dan data pra-rumah sakit</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center sm:col-span-2 lg:col-span-1 max-w-sm sm:max-w-none mx-auto">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Command Center</h3>
            <p className="text-sm sm:text-base text-gray-600">Web dashboard untuk monitoring, triase, dan pengendalian operasional</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-left text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Siap mengimplementasikan sistem emergency medical response?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Hubungi kami untuk demo dan konsultasi mengenai konsep CB1, CB2, atau CB3 yang sesuai kebutuhan Anda
                </p>
              </div>
              
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap w-full sm:w-auto max-w-sm md:max-w-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Request Demo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
