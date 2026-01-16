import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Heart, 
  Activity, 
  Smartphone, 
  Monitor,
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle,
  User,
  MessageSquare,
  Building
} from 'lucide-react'

const ServiceModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institutionType: '',
    institutionName: '',
    position: '',
    conceptInterest: '',
    systemComponents: [],
    expectedUsers: '',
    implementationTimeline: '',
    currentSystem: '',
    requirements: '',
    budgetRange: '',
    contactMethod: 'email',
    preferredDate: '',
    preferredTime: ''
  })

  const institutionTypes = [
    { id: 'hospital', icon: <Heart className="w-6 h-6" />, label: 'Rumah Sakit', description: 'Rumah sakit umum atau swasta' },
    { id: 'clinic', icon: <Activity className="w-6 h-6" />, label: 'Klinik', description: 'Klinik atau puskesmas' },
    { id: 'ambulance', icon: <Activity className="w-6 h-6" />, label: 'Layanan Ambulans', description: 'Perusahaan ambulans' },
    { id: 'government', icon: <Building className="w-6 h-6" />, label: 'Pemerintah', description: 'Instansi pemerintah' },
    { id: 'other', icon: <Users className="w-6 h-6" />, label: 'Lainnya', description: 'Institusi lainnya' }
  ]

  const concepts = [
    { id: 'cb1', label: 'CB1 - Fitur Sederhana', description: 'Sistem emergency response dasar dengan dispatch manual' },
    { id: 'cb2', label: 'CB2 - Terintegrasi Penuh', description: 'Sistem komprehensif dengan AI triase dan analytics' },
    { id: 'cb3', label: 'CB3 - Berbasis Lokasi', description: 'Sistem berbasis lokasi geografis dengan akses terbatas' }
  ]

  const systemComponents = [
    { id: 'user-app', label: 'User Application', description: 'Android app untuk tombol darurat' },
    { id: 'ambulance-app', label: 'Ambulance App', description: 'Dispatch dan navigasi untuk ambulans' },
    { id: 'command-center', label: 'Command Center', description: 'Web dashboard monitoring dan kontrol' }
  ]

  const budgetRanges = [
    'Di bawah 50 juta',
    '50 - 100 juta',
    '100 - 500 juta',
    '500 juta - 1 miliar',
    'Di atas 1 miliar'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleComponentChange = (componentId, checked) => {
    setFormData(prev => ({
      ...prev,
      systemComponents: checked 
        ? [...prev.systemComponents, componentId]
        : prev.systemComponents.filter(id => id !== componentId)
    }))
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">Request Demo EMR System</h2>
                <p className="text-white/80 text-sm">Isi formulir di bawah untuk request demo dan konsultasi</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-red-600" />
                Informasi Pribadi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="email@domain.com"
                  />
                </div>
              </div>
            </div>

            {/* Institution Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-red-600" />
                Informasi Institusi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Institusi *</label>
                  <select
                    name="institutionType"
                    value={formData.institutionType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih jenis institusi</option>
                    {institutionTypes.map((type) => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Institusi *</label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Contoh: RS Harapan Sehat"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Posisi/Jabatan *</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Contoh: Kepala Instalasi Gawat Darurat"
                  />
                </div>
              </div>
            </div>

            {/* Concept Interest */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-600" />
                Konsep yang Diminati
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {concepts.map((concept) => (
                  <motion.button
                    key={concept.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, conceptInterest: concept.id }))}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.conceptInterest === concept.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        formData.conceptInterest === concept.id
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Heart className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{concept.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{concept.description}</div>
                      </div>
                      {formData.conceptInterest === concept.id && (
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* System Components */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-red-600" />
                Komponen Sistem yang Diminati
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {systemComponents.map((component) => (
                  <motion.label
                    key={component.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.systemComponents.includes(component.id)
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.systemComponents.includes(component.id)}
                        onChange={(e) => handleComponentChange(component.id, e.target.checked)}
                        className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{component.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{component.description}</div>
                      </div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-red-600" />
                Detail Proyek
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimasi Jumlah User</label>
                  <select
                    name="expectedUsers"
                    value={formData.expectedUsers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih estimasi user</option>
                    <option value="1-50">1 - 50 users</option>
                    <option value="51-200">51 - 200 users</option>
                    <option value="201-500">201 - 500 users</option>
                    <option value="500+">500+ users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline Implementasi</label>
                  <select
                    name="implementationTimeline"
                    value={formData.implementationTimeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih timeline</option>
                    <option value="1-3-months">1 - 3 bulan</option>
                    <option value="3-6-months">3 - 6 bulan</option>
                    <option value="6-12-months">6 - 12 bulan</option>
                    <option value="12+ months">12+ bulan</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih range budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-red-600" />
                Kebutuhan Spesifik
              </h3>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Jelaskan kebutuhan spesifik, tantangan saat ini, atau fitur khusus yang dibutuhkan untuk institusi Anda"
              />
            </div>

            {/* Contact Preference */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-red-600" />
                Preferensi Kontak & Demo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Metode Kontak Prefer</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Telepon</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="meeting">Pertemuan Langsung</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Waktu Preferensi untuk Demo</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-gray-800">Butuh Bantuan Segera?</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-gray-700">119</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span className="text-gray-700">info@emrsystem.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-gray-700">Response: 24/7</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Batal
              </motion.button>
              <motion.button
                type="submit"
                className="flex-1 py-4 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo Sekarang
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceModal
