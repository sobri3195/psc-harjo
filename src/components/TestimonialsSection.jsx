import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Car, Wrench, CheckCircle } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jakarta Selatan",
      rating: 5,
      text: "Servis di PSC Harjo sangat memuaskan! Pengerjaan cepat dan rapi. Teknisi sangat profesional dan menjelaskan kondisi kendaraan dengan detail. Sangat recommended!",
      service: "Servis Berkala",
      vehicle: "Toyota Avanza",
      avatar: "BS"
    },
    {
      name: "Sari Indrawati",
      location: "Surabaya",
      rating: 5,
      text: "Ketika mobil mogok di jalan, PSC Harjo datang dengan sangat cepat. Layanan 24/7 mereka benar-benar penyelamat! Teknisi berpengalaman dan sparepart original.",
      service: "Layanan Darurat",
      vehicle: "Honda Jazz",
      avatar: "SI"
    },
    {
      name: "Ahmad Rizki",
      location: "Bandung",
      rating: 5,
      text: "Sudah 5 tahun jadi langganan PSC Harjo. Kualitas servis konsisten dan harga sangat terjangkau. Mereka selalu memberikan solusi terbaik untuk kendaraan saya.",
      service: "Overhaul Mesin",
      vehicle: "Mitsubishi Pajero",
      avatar: "AR"
    },
    {
      name: "Maya Sari",
      location: "Medan",
      rating: 5,
      text: "Booking servis sangat mudah dan praktis. Workshop bersih dan nyaman. Teknisi sangat teliti dalam pengerjaan. Kendaraan kembali seperti baru setelah servis!",
      service: "Servis Lengkap",
      vehicle: "Daihatsu Xenia",
      avatar: "MS"
    },
    {
      name: "Rudi Hermawan",
      location: "Makassar",
      rating: 5,
      text: "Ganti oli dan tune-up di PSC Harjo hasilnya luar biasa. Performa motor jadi lebih responsif dan irit bensin. Pelayanan ramah dan profesional.",
      service: "Ganti Oli & Tune-up",
      vehicle: "Yamaha NMAX",
      avatar: "RH"
    },
    {
      name: "Dewi Lestari",
      location: "Palembang",
      rating: 5,
      text: "Servis AC mobil sangat memuaskan. AC kembali dingin maksimal dan harganya sangat reasonable. Teknisi menjelaskan kerusakan dengan jujur dan transparan.",
      service: "Servis AC",
      vehicle: "Honda CR-V",
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
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
            className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Testimoni Pelanggan</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dipercaya Ribuan
            <span className="text-blue-600"> Pelanggan</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengarkan pengalaman mereka yang telah mempercayakan kendaraannya kepada PSC Harjo. 
            Setiap testimoni adalah bukti komitmen kami untuk memberikan pelayanan terbaik
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
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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

                {/* Service Info */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-700 font-medium">{testimonial.service}</span>
                    <span className="text-blue-600">{testimonial.vehicle}</span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
              Dipercaya di Seluruh Indonesia
            </h3>
            <p className="text-gray-600">
              Ribuan pelanggan di berbagai kota mempercayakan kendaraannya kepada PSC Harjo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { city: "Jakarta", customers: "15,000+", icon: <Car className="w-3 h-3" /> },
              { city: "Surabaya", customers: "8,500+", icon: <Wrench className="w-3 h-3" /> },
              { city: "Bandung", customers: "6,200+", icon: <Car className="w-3 h-3" /> },
              { city: "Medan", customers: "4,800+", icon: <CheckCircle className="w-3 h-3" /> }
            ].map((city, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-2 text-blue-500">
                  {city.icon}
                </div>
                <div className="text-lg font-bold text-gray-800">{city.customers}</div>
                <div className="text-sm text-gray-600">Pelanggan di {city.city}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
