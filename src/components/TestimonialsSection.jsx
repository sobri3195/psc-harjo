import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Clock, Heart } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jakarta Selatan",
      rating: 5,
      text: "Response time mereka sangat cepat! Dalam 2 menit ambulans sudah sampai. Tim medis的专业 dan照顾得很周到. Sangat berterima kasih untuk bantuan darurat ini.",
      emergency: "Heart Attack",
      time: "Response dalam 2 menit",
      avatar: "BS"
    },
    {
      name: "Sari Indrawati",
      location: "Surabaya",
      rating: 5,
      text: "Ketika anak saya mengalami accidente, mereka datang dengan sangat cepat. Sistem tracking GPS memudahkan keluarga untuk mengikuti perjalanan ambulans. Pelayanannya luar biasa!",
      emergency: "Accident",
      time: "Response dalam 3 menit",
      avatar: "SI"
    },
    {
      name: "Ahmad Rizki",
      location: "Bandung",
      rating: 5,
      text: "Tim medis mereka sangat berpengalaman dan calm dalam situasi darurat. Mereka tidak hanya memberikan perawatan medis tapi juga memberikan ketenangan kepada keluarga.",
      emergency: "Stroke",
      time: "Response dalam 2.5 menit",
      avatar: "AR"
    },
    {
      name: "Maya Sari",
      location: "Medan",
      rating: 5,
      text: "Aplikasi mobile mereka sangat user-friendly. Mudah untuk melaporkan emergency dan sistem AI mereka sangat akurat dalam menganalisis lokasi dan severity kondisi.",
      emergency: "Fall Injury",
      time: "Response dalam 2 menit",
      avatar: "MS"
    },
    {
      name: "Rudi Hermawan",
      location: "Makassar",
      rating: 5,
      text: "Pelayanan 24/7 mereka benar-benar dapat diandalkan. Minggu dini hari mereka tetap merespon dengan cepat. Teknologi dan service quality mereka terdepan di Indonesia.",
      emergency: "Respiratory Emergency",
      time: "Response dalam 3 menit",
      avatar: "RH"
    },
    {
      name: "Dewi Lestari",
      location: "Palembang",
      rating: 5,
      text: "Dalam momento krisis, mereka memberikan harapan. Tim mereka tidak hanya cepat tapi juga sangat care dan professional. Highly recommended untuk emergency service!",
      emergency: "Pregnancy Emergency",
      time: "Response dalam 2.5 menit",
      avatar: "DL"
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Testimoni Pengguna</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dipercaya Ribuan
            <span className="text-red-600"> Nyawa</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           听听 mereka yang pernah merasakan layanan emergency kami. 
            Setiap cerita adalah bukti komitmen kami untuk menyelamatkan nyawa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Emergency Info */}
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-700 font-medium">{testimonial.emergency}</span>
                    <span className="text-red-600">{testimonial.time}</span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>

                  {/* User Details */}
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Dipercaya Oleh Seluruh Indonesia
            </h3>
            <p className="text-gray-600">
              Ribuan pengguna di berbagai kota mempercayakan layanan emergency mereka kepada kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { city: "Jakarta", users: "15,000+", flag: "🇮🇩" },
              { city: "Surabaya", users: "8,500+", flag: "🇮🇩" },
              { city: "Bandung", users: "6,200+", flag: "🇮🇩" },
              { city: "Medan", users: "4,800+", flag: "🇮🇩" }
            ].map((city, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{city.flag}</div>
                <div className="text-lg font-bold text-gray-800">{city.users}</div>
                <div className="text-sm text-gray-600">Trusted Users in {city.city}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection