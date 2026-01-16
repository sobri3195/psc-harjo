import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Clock, Award, Car, Shield, CheckCircle, Phone, Star } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Pengerjaan Cepat & Rapi",
      description: "Pengerjaan servis berkala selesai dalam 1-2 jam dengan standar kualitas tinggi dan jaminan kepuasan pelanggan",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sparepart Original",
      description: "Kami hanya menggunakan sparepart original dan berkualitas untuk menjaga performa optimal kendaraan Anda",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Layanan 24/7",
      description: "Layanan darurat 24 jam untuk kondisi darurat seperti mogok di jalan atau kebutuhan emergency lainnya",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Teknisi Bersertifikat",
      description: "Tim teknisi kami bersertifikat dan berpengalaman menangani berbagai jenis kendaraan dengan profesional",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Semua Jenis Kendaraan",
      description: "Melayani servis untuk mobil, motor, dan kendaraan komersial dari berbagai merek dan model",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Garansi Servis",
      description: "Setiap servis kami berikan garansi untuk ketenangan pikiran dan kepuasan pelanggan penuh",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Kenapa Memilih Kami</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Layanan Servis
            <span className="text-blue-600"> Terlengkap</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengan pengalaman lebih dari 15 tahun, PSC Harjo hadir memberikan layanan servis 
            berkualitas tinggi dengan harga terjangkau untuk semua kebutuhan kendaraan Anda
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon dengan gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Siap merawat kendaraan Anda?
                </h3>
                <p className="text-gray-600">
                  Hubungi kami sekarang dan dapatkan penawaran spesial untuk servis pertama Anda
                </p>
              </div>
              
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Hubungi Kami</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
