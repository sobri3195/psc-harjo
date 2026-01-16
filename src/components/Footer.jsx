import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Shield, 
  Activity, 
  Users, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Monitor,
  Smartphone,
  Database
} from 'lucide-react'

const Footer = () => {
  const contactInfo = [
    { label: "Hotline Emergency", value: "119", icon: <Phone className="w-4 h-4" /> },
    { label: "Emergency Medical", value: "(021) 1234-5678", icon: <Activity className="w-4 h-4" /> },
    { label: "Email", value: "info@emrsystem.com", icon: <Mail className="w-4 h-4" /> }
  ]

  const quickLinks = [
    { label: "User App", href: "#" },
    { label: "Ambulance App", href: "#" },
    { label: "Command Center", href: "#" },
    { label: "CB1 Concept", href: "#" },
    { label: "CB2 Concept", href: "#" },
    { label: "CB3 Concept", href: "#" }
  ]

  const services = [
    { label: "Emergency Response", href: "#" },
    { label: "Medical Triage", href: "#" },
    { label: "GPS Tracking", href: "#" },
    { label: "Real-time Monitoring", href: "#" },
    { label: "Hospital Integration", href: "#" },
    { label: "Data Analytics", href: "#" }
  ]

  const systemComponents = [
    { 
      icon: <Smartphone className="w-5 h-5" />, 
      title: "User Application", 
      description: "Android app untuk tombol darurat dan pelaporan kejadian" 
    },
    { 
      icon: <Activity className="w-5 h-5" />, 
      title: "Ambulance System", 
      description: "Dispatch, navigasi, dan data pra-rumah sakit" 
    },
    { 
      icon: <Monitor className="w-5 h-5" />, 
      title: "Command Center", 
      description: "Web dashboard monitoring dan pengendalian operasional" 
    }
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
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
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
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">EMR System</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Emergency Medical Response System adalah solusi terintegrasi untuk emergency medical response 
                dengan tiga komponen utama: User App, Ambulance App, dan Command Center Dashboard.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-red-400" />
                  <span>Sistem Terpercaya</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Activity className="w-4 h-4 text-blue-400" />
                  <span>Response &lt; 5 Menit</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Database className="w-4 h-4 text-green-400" />
                  <span>Real-time Integration</span>
                </div>
              </div>
            </motion.div>

            {/* System Components */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Komponen Sistem</h4>
              <div className="space-y-4">
                {systemComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-red-400 mt-1">
                      {component.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{component.title}</div>
                      <div className="text-gray-400 text-xs">{component.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Solutions</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                      <span>{link.label}</span>
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
              <h4 className="text-lg font-bold mb-6">Kontak Darurat</h4>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-red-400">
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
                  <span className="text-sm font-semibold">Head Office</span>
                </div>
                <div className="text-sm text-gray-300">
                  Jl. Emergency Medical No. 119
                  <br />
                  Jakarta Pusat, 10110
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">System Uptime</span>
                </div>
                <div className="text-sm text-gray-300">
                  <div>Monitoring: 24/7</div>
                  <div>Support: 24/7</div>
                </div>
              </div>

              {/* Demo CTA */}
              <motion.button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-4 h-4" />
                <span>Request Demo</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Implementation Concepts */}
        <motion.div
          className="border-t border-gray-800 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Konsep Implementasi EMR System
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Tiga konsep implementasi untuk memenuhi berbagai kebutuhan emergency medical response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">CB1 - Fitur Sederhana</h4>
              <p className="text-gray-300 text-sm">Sistem emergency response dasar dengan fitur inti dan dispatch manual</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">CB2 - Terintegrasi Penuh</h4>
              <p className="text-gray-300 text-sm">Sistem komprehensif dengan AI triase dan analytics prediktif</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">CB3 - Berbasis Lokasi</h4>
              <p className="text-gray-300 text-sm">Sistem berbasis lokasi geografis dengan akses terbatas</p>
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
              © 2024 EMR System. All rights reserved. Emergency Medical Response Terintegrasi.
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

      {/* Floating Emergency Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl z-50 flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(239, 68, 68, 0.7)",
            "0 0 0 20px rgba(239, 68, 68, 0)",
            "0 0 0 0 rgba(239, 68, 68, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity
          }
        }}
      >
        <Heart className="w-5 h-5" />
        <span className="hidden sm:inline">Emergency Call</span>
      </motion.button>
    </footer>
  )
}

export default Footer
