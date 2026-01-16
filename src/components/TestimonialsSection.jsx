import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Heart, Users, Activity, CheckCircle } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sari Wijayanti",
      location: "RS Harapan Sehat - Jakarta",
      rating: 5,
      text: "EMR System telah mengubah cara kami menangani emergency medical response. Response time menurun drastis dan koordinasi dengan ambulans menjadi sangat efisien. Sistem triase otomatis sangat membantu.",
      service: "Command Center Integration",
      role: "Kepala Unit Gawat Darurat",
      avatar: "SW"
    },
    {
      name: "Budi Santoso",
      location: "Ambulans Sehat Selalu - Jakarta",
      rating: 5,
      text: "Sebagai driver ambulans, Ambulance App sangat memudahkan navigasi dan komunikasi dengan command center. Data pra-rumah sakit yang dikirim otomatis membuat kami lebih siap dalam menangani pasien.",
      service: "Ambulance App Usage",
      role: "Driver Ambulans",
      avatar: "BS"
    },
    {
      name: "Ibu Maya Sari",
      location: "Warga Jakarta Selatan",
      rating: 5,
      text: "Ketika ayah saya membutuhkan emergency medical service, User App sangat mudah digunakan. Tombol darurat bekerja sempurna dan ambulans datang dengan sangat cepat. Terima kasih EMR System!",
      service: "Emergency Response",
      role: "User Patient",
      avatar: "MS"
    },
    {
      name: "Dr. Ahmad Rizki",
      location: "RS Pusat Kanker - Surabaya",
      rating: 5,
      text: "Integrasi data real-time dari field ke rumah sakit sangat membantu kami menyiapkan tim medis sebelum pasien tiba. Sistem CB2 dengan AI triase akurat mengklasifikasikan tingkat kegentingan.",
      service: "Hospital Integration",
      role: "Dokter Spesialis",
      avatar: "AR"
    },
    {
      name: "Nurul Huda",
      location: "Call Center 119 - Surabaya",
      rating: 5,
      text: "Dashboard web sangat user-friendly dan semua data emergency tersaji real-time. Komunikasi antara call center, ambulans, dan rumah sakit berjalan lancar. Sistem terintegrasi penuh!",
      service: "Command Center Dashboard",
      role: "Operator Call Center",
      avatar: "NH"
    },
    {
      name: "Dra. Rina Marlina",
      location: "RSUD Kota Bandung",
      rating: 5,
      text: "Implementasi CB1 di wilayah suburban sangat efektif dan efisien biaya. Meskipun fitur sederhana, response time tetap cepat dan koordinasi emergency berjalan optimal.",
      service: "CB1 Implementation",
      role: "Kepala Instalasi Gawat Darurat",
      avatar: "RM"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <span className="text-xs sm:text-sm font-semibold">User Experience</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Dipercaya Seluruh
            <span className="text-red-600"> Stakeholder</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            EMR System telah digunakan oleh rumah sakit, paramedis, dan masyarakat di seluruh Indonesia. 
            Dengarkan pengalaman mereka dalam menggunakan sistem emergency medical response terintegrasi
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Service Info */}
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                    <span className="text-red-700 font-medium">{testimonial.service}</span>
                    <span className="text-red-600">{testimonial.role}</span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.avatar}
                  </div>

                  {/* User Details */}
                  <div>
                    <div className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stakeholder Coverage */}
        <motion.div
          className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Coverage Nationwide
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              EMR System telah diimplementasikan di berbagai institusi medis di seluruh Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { type: "Rumah Sakit", count: "500+", icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { type: "Ambulans", count: "1,200+", icon: <Activity className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { type: "User Active", count: "50,000+", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { type: "Emergency Response", count: "99.9%", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-2 text-red-500">
                  {item.icon}
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-800">{item.count}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.type}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
