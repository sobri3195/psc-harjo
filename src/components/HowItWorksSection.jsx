import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Truck, Heart, ArrowRight, Clock, CheckCircle } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Emergency",
      description: "Hubungi hotline emergency 911 atau gunakan aplikasi mobile untuk melaporkan situasi darurat",
      time: "0-30 detik",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "AI Location Analysis",
      description: "Sistem AI menganalisis lokasi dan jenis emergency untuk dispatch unit terdekat dan tercepat",
      time: "30-60 detik",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Ambulance Dispatch",
      description: "Ambulans dengan tim medis profesional segera menuju lokasi dengan rute optimal",
      time: "1-3 menit",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical Care & Support",
      description: "Tim medis memberikan perawatan profesional dan support untuk pasien dan keluarga",
      time: "Di lokasi",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Proses Kerja</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Bagaimana
            <span className="text-blue-600"> Kami Bekerja</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sistem emergency response yang telah teruji dengan proses yang efisien, 
            cepat, dan professional untuk memberikan bantuan tepat waktu
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
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500"
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
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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

        {/* Success Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Track Record Yang Terpercaya
            </h3>
            <p className="text-white/90 text-lg">
              Angka-angka yang membuktikan komitmen kami untuk memberikan pelayanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "<3", label: "Menit Response Time", icon: <Clock className="w-6 h-6" /> },
              { number: "50K+", label: "Nyawa Diselamatkan", icon: <Heart className="w-6 h-6" /> },
              { number: "99%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6" /> },
              { number: "24/7", label: "Layanan Non-Stop", icon: <Phone className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3 text-yellow-300">
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