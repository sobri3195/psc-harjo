import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Award, Shield, Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const contactInfo = [
    { label: "Hotline Servis", value: "(021) 1234-5678", icon: <Phone className="w-4 h-4" /> },
    { label: "Layanan Darurat", value: "0812-3456-7890", icon: <Car className="w-4 h-4" /> },
    { label: "Email", value: "info@pscharjo.com", icon: <Mail className="w-4 h-4" /> }
  ]

  const quickLinks = [
    { label: "Layanan Kami", href: "#" },
    { label: "Tentang Kami", href: "#" },
    { label: "Booking Servis", href: "#" },
    { label: "Promo & Diskon", href: "#" },
    { label: "Karir", href: "#" },
    { label: "FAQ", href: "#" }
  ]

  const services = [
    { label: "Servis Berkala", href: "#" },
    { label: "Overhaul Mesin", href: "#" },
    { label: "Servis AC", href: "#" },
    { label: "Ganti Oli", href: "#" },
    { label: "Tune-up", href: "#" },
    { label: "Layanan Darurat", href: "#" }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">PSC Harjo</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pusat Servis Cepat Harjo adalah solusi terpercaya untuk semua kebutuhan servis kendaraan Anda. 
                Dengan teknisi profesional dan layanan 24/7, kami siap melayani kapanpun Anda butuhkan.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Bergaransi Resmi</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Teknisi Bersertifikat</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Car className="w-4 h-4 text-green-400" />
                  <span>Sparepart Original</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Layanan Kami</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-400">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{contact.label}</div>
                      <div className="text-white font-semibold">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold">Alamat Workshop</span>
                </div>
                <div className="text-sm text-gray-300">
                  Jl. Harjo Utama No. 123
                  <br />
                  Jakarta Selatan, 12345
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">Jam Operasional</span>
                </div>
                <div className="text-sm text-gray-300">
                  <div>Senin - Sabtu: 08:00 - 18:00</div>
                  <div>Layanan Darurat: 24/7</div>
                </div>
              </div>

              {/* Booking CTA */}
              <motion.button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Car className="w-4 h-4" />
                <span>Booking Servis</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-gray-800 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Dapatkan Info Promo & Tips Merawat Kendaraan
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan promo terbaru, tips perawatan kendaraan, 
              dan informasi penting lainnya langsung ke email Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 PSC Harjo. All rights reserved. Solusi Servis Kendaraan Terpercaya.
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Booking Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl z-50 flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 99, 235, 0.7)",
            "0 0 0 20px rgba(37, 99, 235, 0)",
            "0 0 0 0 rgba(37, 99, 235, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity
          }
        }}
      >
        <Car className="w-5 h-5" />
        <span className="hidden sm:inline">Booking Servis</span>
      </motion.button>
    </footer>
  )
}

export default Footer
