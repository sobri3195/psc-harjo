import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MapPin, 
  Activity, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Heart,
  AlertTriangle,
  Navigation,
  Users,
  Smartphone,
  Monitor,
  Database
} from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Call Received",
      description: "Call center menerima panggilan darurat via User App, telepon, atau sistem报警. Informasi lokasi dan kondisi pasien langsung terdeteksi otomatis",
      time: "< 30 detik",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Dispatch & Navigation",
      description: "Sistem otomatis mendispatch ambulans terdekat dengan rute navigasi optimal. Ambulans menerima detail pasien dan lokasi via Ambulance App",
      time: "< 2 menit",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Real-time Response",
      description: "Ambulans dalam perjalanan dengan tracking real-time. Command center monitor progress dan komunikasi tetap terjaga via sistem terintegrasi",
      time: "< 5 menit",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient Care & Handover",
      description: "Tim medis memberikan perawatan pra-rumah sakit,数据传输 ke hospital, dan handover informasi lengkap untuk treatment lanjutan",
      time: "Real-time",
      color: "from-purple-500 to-indigo-500"
    }
  ]

  const concepts = [
    {
      title: "CB1 - Fitur Sederhana",
      description: "Sistem emergency response dasar dengan fitur inti: tombol darurat, tracking lokasi, dan dispatch manual",
      features: ["Tombol darurat sederhana", "GPS tracking basic", "Dispatch manual", "Komunikasi voice call"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      ideal: "Ideal untuk area dengan traffic emergency rendah"
    },
    {
      title: "CB2 - Fitur Kompleks Terintegrasi Penuh",
      description: "Sistem emergency response komprehensif dengan semua fitur advanced: AI triase, prediktif analytics, dan integrasi rumah sakit penuh",
      features: ["AI-powered triase system", "Prediktif analytics", "Integrasi hospital penuh", "Real-time monitoring", "Automated dispatch"],
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      ideal: "Ideal untuk kota besar dengan traffic emergency tinggi"
    },
    {
      title: "CB3 - Fitur Terbatas Berbasis Lokasi",
      description: "Sistem emergency response berbasis lokasi geografis dengan akses terbatas untuk efisiensi operasional dan biaya",
      features: ["Geo-fencing based access", "Location-based dispatch", "Limited feature set", "Cost-effective operation"],
      icon: <MapPin className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      ideal: "Ideal untuk wilayah suburban dengan budget terbatas"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Emergency Response Workflow</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cara Kerja
            <span className="text-red-600"> EMR System</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sistem emergency medical response terintegrasi dengan workflow yang dirancang 
            untuk memberikan respons tercepat dan paling efektif dalam situasi emergency medis
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Version - Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: (index + 1) * 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-4`}>
                      {step.icon}
                    </div>

                    {/* Time Badge */}
                    <div className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 rounded-full px-3 py-1 mb-4">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-medium">{step.time}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Version - Vertical Flow */}
          <div className="lg:hidden space-y-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} text-white`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <div className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 rounded-full px-2 py-1 mt-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{step.time}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Concepts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tiga Konsep Implementasi
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih konsep yang sesuai dengan kebutuhan, budget, dan skala operasional emergency medical response Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${concept.color} text-white mb-6`}>
                  {concept.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {concept.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {concept.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {concept.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <div className="bg-gray-50 rounded-lg p-4 mt-auto">
                  <p className="text-sm text-gray-600 font-medium">
                    <span className="text-gray-800">Cocok untuk:</span> {concept.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Kinerja Emergency Response System
            </h3>
            <p className="text-white/90 text-lg">
              Target kinerja EMR System untuk memberikan layanan emergency medis terbaik
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "< 5", label: "Menit Response Time", icon: <Clock className="w-6 h-6" /> },
              { number: "99.9%", label: "System Uptime", icon: <CheckCircle className="w-6 h-6" /> },
              { number: "24/7", label: "Monitoring", icon: <Activity className="w-6 h-6" /> },
              { number: "100%", label: "Real-time Data", icon: <Database className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3 text-red-200">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
