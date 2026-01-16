# 🔧 PSC Harjo - Pusat Servis Cepat

Landing page untuk PSC Harjo - Pusat Servis Cepat yang menyediakan layanan servis kendaraan terpercaya dengan teknisi profesional, pengerjaan cepat, dan garansi terjamin.

## ✨ Fitur Utama

### 🎯 Landing Page Modern
- **Hero Section**: Header menarik dengan animasi dan CTA untuk booking servis
- **Features Section**: Menampilkan keunggulan layanan PSC Harjo
- **How It Works Section**: Alur proses servis yang jelas dan mudah dipahami
- **Testimonials Section**: Testimoni pelanggan yang puas dengan layanan kami
- **Footer**: Informasi kontak, layanan, dan sosial media

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
cd psc-harjo

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

## 📱 Fitur Landing Page

### 🚀 Hero Section
- **Headline Menarik**: "PSC Harjo - Pusat Servis Cepat"
- **Subheadline**: Penjelasan singkat tentang layanan
- **Stats Row**: Menampilkan tahun pengalaman, pelanggan puas, dan layanan 24/7
- **CTA Buttons**: Tombol "Booking Servis" dan "Lihat Layanan"
- **Trust Indicators**: Badge garansi resmi, service cepat, teknisi berpengalaman

### ⭐ Features Section
- **6 Fitur Utama**:
  - Pengerjaan Cepat & Rapi
  - Sparepart Original
  - Layanan 24/7
  - Teknisi Bersertifikat
  - Semua Jenis Kendaraan
  - Garansi Servis
- **CTA Box**: Ajakan untuk menghubungi kami
- **Hover Effects**: Animasi pada setiap feature card

### 📋 How It Works Section
- **4 Langkah Proses**:
  1. Booking Servis
  2. Bawa Kendaraan
  3. Inspeksi & Servis
  4. Selesai & Garansi
- **Timeline Animation**: Animasi connection line antar langkah
- **Success Stats**: Statistik keberhasilan PSC Harjo

### 💬 Testimonials Section
- **6 Testimoni Pelanggan**: Pengalaman nyata dari pelanggan
- **Rating System**: Bintang rating untuk setiap testimoni
- **Service Info**: Jenis servis dan kendaraan
- **Trust Indicators**: Jumlah pelanggan di berbagai kota

### 📞 Footer
- **Company Info**: Informasi tentang PSC Harjo
- **Quick Links**: Navigasi cepat
- **Services**: Daftar layanan yang tersedia
- **Contact Info**: Hotline, email, dan alamat
- **Newsletter Signup**: Form berlangganan newsletter
- **Social Media Links**: Link ke sosial media
- **Floating CTA Button**: Tombol booking servis yang selalu visible

### 📝 Service Modal
- **Personal Information**: Nama, telepon, email
- **Vehicle Information**: Jenis dan model kendaraan
- **Service Type Selection**: Pilihan jenis servis
- **Date & Time Picker**: Pilihan tanggal dan waktu servis
- **Pickup Service Option**: Opsi layanan jemput
- **Additional Info**: Kolom untuk informasi tambahan
- **Contact Information**: Info kontak untuk bantuan segera

## 🎨 Customization

### Mengubah Warna Theme
Edit di `src/index.css`:
```css
:root {
  --primary-blue: #2563eb;
  --accent-cyan: #06b6d4;
  --success-green: #10b981;
  --warning-yellow: #fbbf24;
}
```

### Mengubah Logo
Ganti file di `public/logo.svg` dengan logo PSC Harjo Anda.

### Menambah Layanan Baru
Edit di `src/components/ServiceModal.jsx`:
```javascript
const serviceTypes = [
  // Existing types...
  { 
    id: 'new-service', 
    icon: NewIcon, 
    label: 'Layanan Baru', 
    description: 'Deskripsi layanan baru'
  }
]
```

### Kustom Animasi
Tambah di `src/index.css`:
```css
@keyframes custom-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## 🏗️ Struktur Komponen

```
src/
├── components/
│   ├── HeroSection.jsx          # Hero section dengan animasi
│   ├── FeaturesSection.jsx       # Features grid dengan hover effects
│   ├── HowItWorksSection.jsx    # Process timeline
│   ├── TestimonialsSection.jsx   # Testimonials grid
│   ├── Footer.jsx               # Footer dengan semua informasi
│   └── ServiceModal.jsx         # Booking form modal
├── App.jsx                      # Main app component
├── main.jsx                     # App entry point
└── index.css                   # Global styles & animations
```

## 🔧 Fitur Pengembangan

### Animations
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

### Scenario 1: Booking Servis Berkala
1. Klik "Booking Servis" di hero section
2. Isi formulir dengan data pribadi
3. Pilih jenis kendaraan dan model
4. Pilih jenis servis "Servis Berkala"
5. Pilih tanggal dan waktu
6. Submit booking

### Scenario 2: Layanan Darurat
1. Klik tombol "Booking Servis" di floating button
2. Pilih jenis servis "Layanan Darurat"
3. Centang opsi "Layanan Jemput"
4. Isi alamat penjemputan
5. Submit untuk bantuan segera

## 🔮 Roadmap

- [ ] Integration dengan booking system backend
- [ ] Payment gateway untuk deposit
- [ ] Live tracking status servis
- [ ] Push notifications untuk update servis
- [ ] Customer portal untuk history servis
- [ ] Integration dengan WhatsApp untuk notifikasi

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
- Hotline: (021) 1234-5678
- Email: info@pscharjo.com
- Lokasi: Jl. Harjo Utama No. 123, Jakarta Selatan

---

**Made with ❤️ for PSC Harjo**

PSC Harjo - Pusat Servis Cepat. Solusi servis kendaraan terpercaya dengan teknisi profesional dan layanan 24/7.
