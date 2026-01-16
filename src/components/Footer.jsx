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
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">EMR System</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Emergency Medical Response System adalah solusi terintegrasi untuk emergency medical response 
                dengan tiga komponen utama: User App, Ambulance App, dan Command Center Dashboard.
              </p>

              {/* Certifications */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                  <span>Sistem Terpercaya</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Response &lt; 5 Menit</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                  <Database className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
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
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span className="text-xs sm:text-sm font-semibold">Head Office</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Jl. Emergency Medical No. 119
                  <br />
                  Jakarta Pusat, 10110
                  <br />
                  Indonesia
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 EMR System. Semua hak dilindungi. 
              <br className="sm:hidden" />
              <span className="sm:ml-2">Emergency Medical Response Terintegrasi</span>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex items-center space-x-4 sm:space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">Syarat & Ketentuan</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
