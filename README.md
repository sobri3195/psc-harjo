# 🚑 EMR System - Emergency Medical Response Terintegrasi

Landing page untuk EMR System - sistem emergency medical response terintegrasi yang terdiri dari tiga komponen utama: aplikasi Android untuk pengguna, aplikasi Android untuk ambulans, dan dashboard web sebagai command center untuk monitoring, triase, dan pengendalian operasional secara real-time.

## ✨ Fitur Utama

### 🎯 Landing Page Modern
- **Hero Section**: Header menarik dengan animasi dan CTA untuk demo sistem
- **Features Section**: Menampilkan fitur terintegrasi EMR System
- **How It Works Section**: Workflow emergency response yang jelas
- **Testimonials Section**: Testimoni dari stakeholder medis
- **Footer**: Informasi kontak darurat dan sistem komponen

### 🎨 Animasi Menarik
- **Smooth Animations**: Transisi halus menggunakan Framer Motion
- **Hover Effects**: Interaksi hover yang responsif pada cards dan buttons
- **Scroll Animations**: Animasi saat scroll ke bawah untuk enhanced user experience
- **Micro-interactions**: Animasi detail untuk interaksi kecil

### 📱 Responsive Design
- **Mobile First**: Optimasi untuk tampilan mobile
- **Desktop Adaptation**: Layout 3-column untuk desktop
- **Tablet Support**: Grid adaptif untuk berbagai ukuran layar

## 🛠️ Teknologi

- **React 18** - Framework UI modern
- **Framer Motion** - Library animasi advanced
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Icon library
- **Vite** - Build tool cepat

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Instalasi & Menjalankan

```bash
# Clone atau copy project
cd emr-system

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser ke http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm run preview
```

## 📱 Komponen Sistem

### 🚑 Hero Section
- **Headline Menarik**: "EMR System - Emergency Medical Response"
- **Subheadline**: Penjelasan sistem terintegrasi
- **System Components Preview**: User App, Ambulance App, Web Dashboard
- **Stats Row**: Response time < 5 menit, monitoring 24/7, real-time data
- **CTA Buttons**: "Demo Sistem" dan "Lihat Konsep"
- **Trust Indicators**: Sistem terpercaya, response cepat, terintegrasi penuh

### ⭐ Features Section
- **9 Fitur Utama**:
  - User App - Tombol Darurat
  - Ambulance App - Dispatch System
  - Web Dashboard - Command Center
  - GPS Tracking Real-time
  - Communication System
  - Medical Data Integration
  - Response Time < 5 Menit
  - Medical Triage System
  - Emergency Alert System
- **System Components Highlight**: Preview tiga komponen utama
- **CTA Box**: Ajakan untuk request demo

### 📋 How It Works Section
- **4 Langkah Emergency Response**:
  1. Emergency Call Received
  2. Dispatch & Navigation
  3. Real-time Response
  4. Patient Care & Handover
- **Three Implementation Concepts**:
  - CB1 - Fitur Sederhana
  - CB2 - Fitur Kompleks Terintegrasi Penuh
  - CB3 - Fitur Terbatas Berbasis Lokasi
- **Performance Stats**: Response time, system uptime, monitoring

### 💬 Testimonials Section
- **6 Testimoni Stakeholder**: Pengalaman dari dokter, driver ambulans, user
- **Rating System**: Bintang rating untuk setiap testimoni
- **Role & Institution**: Posisi dan institusi pemberi testimoni
- **Stakeholder Coverage**: Coverage nationwide dengan statistik

### 📞 Footer
- **Company Info**: Informasi tentang EMR System
- **System Components**: Detail tiga komponen sistem
- **Solutions**: Navigasi ke konsep CB1, CB2, CB3
- **Emergency Contact**: Hotline 119, emergency medical, email
- **Implementation Concepts**: Preview tiga konsep implementasi
- **Social Media Links**: Link ke sosial media
- **Floating Emergency Button**: Tombol emergency call yang selalu visible

### 📝 Demo Request Modal
- **Personal Information**: Nama, telepon, email
- **Institution Information**: Jenis institusi, nama, posisi
- **Concept Interest**: CB1, CB2, CB3 selection
- **System Components**: User App, Ambulance App, Command Center
- **Project Details**: Estimasi user, timeline, budget range
- **Specific Requirements**: Text area untuk kebutuhan spesifik
- **Contact Preference**: Metode kontak dan waktu demo

## 🎨 Customization

### Mengubah Warna Theme
Edit di `src/index.css`:
```css
:root {
  --primary-red: #dc2626;
  --accent-pink: #ec4899;
  --medical-blue: #2563eb;
  --emergency-orange: #ea580c;
}
```

### Mengubah Logo
Ganti file di `public/logo.svg` dengan logo EMR System Anda.

### Menambah Fitur Baru
Edit di `src/components/FeaturesSection.jsx`:
```javascript
const features = [
  // Existing features...
  { 
    icon: NewIcon, 
    title: "Fitur Baru", 
    description: "Deskripsi fitur baru",
    color: "from-purple-500 to-indigo-500"
  }
]
```

### Kustom Animasi
Tambah di `src/index.css`:
```css
@keyframes emergency-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

## 🏗️ Struktur Komponen

```
src/
├── components/
│   ├── HeroSection.jsx          # Hero section dengan animasi
│   ├── FeaturesSection.jsx       # Features grid dengan hover effects
│   ├── HowItWorksSection.jsx    # Process timeline & concepts
│   ├── TestimonialsSection.jsx   # Testimonials grid
│   ├── Footer.jsx              # Footer dengan informasi sistem
│   └── ServiceModal.jsx         # Demo request form modal
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles & animations
```

## 🔧 Fitur Pengembangan

### Animations
- Emergency-themed animations
- Pulse effects untuk emergency elements
- Smooth scroll animations
- Hover effects pada semua interactive elements
- Stagger animations untuk list items
- Modal transitions yang smooth

### Responsive Design
- Desktop: Multi-column layout
- Tablet: Adaptive grid
- Mobile: Single column stacked

### Accessibility
- Keyboard navigation
- Screen reader support
- High contrast colors
- Focus indicators

## 🚨 Demo Scenarios

### Scenario 1: Request Demo CB2 System
1. Klik "Demo Sistem" di hero section
2. Isi form dengan data institusi rumah sakit
3. Pilih konsep "CB2 - Terintegrasi Penuh"
4. Pilih semua komponen sistem
5. Isi estimasi user dan timeline
6. Submit untuk konsultasi

### Scenario 2: Emergency Response Overview
1. Lihat "System Components Preview" di hero
2. Scroll ke "Features Terintegrasi"
3. Lihat "Emergency Response Workflow"
4. Bandingkan tiga konsep implementasi
5. Klik floating "Emergency Call" button

## 🔮 Roadmap

- [ ] Integration dengan emergency dispatch system
- [ ] Real-time GPS tracking implementation
- [ ] Medical data integration APIs
- [ ] Push notifications untuk emergency alerts
- [ ] Admin portal untuk system management
- [ ] Integration dengan hospital information systems
- [ ] Mobile app development (Android)
- [ ] Web dashboard backend integration

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Untuk pertanyaan atau support, silakan hubungi:
- Hotline Emergency: 119
- Emergency Medical: (021) 1234-5678
- Email: info@emrsystem.com
- Head Office: Jl. Emergency Medical No. 119, Jakarta Pusat

---

**Made with ❤️ for Emergency Medical Response**

EMR System - Emergency Medical Response Terintegrasi. Solusi lengkap untuk emergency medical response dengan response time < 5 menit dan monitoring 24/7.