# Emergency Medical Command & Response System - Landing Page

Landing page modern dan profesional untuk sistem komando medis terintegrasi dengan tiga varian produk yang berbeda.

## Fitur Utama

### CB 1 — Simple Core System
Solusi dasar dengan fokus pada kesederhanaan, kecepatan, dan stabilitas.

**Komponen:**
- Aplikasi User: Tombol darurat satu klik, pengiriman lokasi otomatis, status bantuan
- Aplikasi Ambulans: Terima dispatch, navigasi, update status misi
- Dashboard Command Center: Daftar kejadian, status ambulans, peta real-time, dispatch cepat

### CB 2 — Advanced & Integrated System
Platform enterprise-level dengan integrasi klinis lengkap.

**Komponen:**
- Aplikasi User: Emergency request, klasifikasi kejadian, tracking, edukasi
- Aplikasi Ambulans: Dispatch otomatis, input vital sign, pre-notification IGD, ETA
- Command Center & IGD: Call triage, decision support, monitoring multi-ambulans, aktivasi jalur klinis

### CB 3 — Location-Based Limited System
Solusi berbasis wilayah dengan kontrol akses terbatas.

**Komponen:**
- Aplikasi User (Location-Based): Aktif di area tertentu, tombol darurat, validasi zona
- Aplikasi Ambulans: Dispatch dalam zona, navigasi internal, status misi
- Command Center (Restricted): Monitoring berbasis wilayah, akses role-based, log per zona

## Teknologi

- **HTML5**: Struktur semantik dan aksesibel
- **CSS3**: Styling modern dengan Flexbox dan Grid
- **JavaScript (Vanilla)**: Interaktivitas dan animasi tanpa dependensi

## Struktur File

```
project/
├── index.html      # Halaman utama landing page
├── styles.css      # Styling dan desain responsif
├── script.js       # JavaScript untuk interaktivitas
└── README.md       # Dokumentasi proyek
```

## Fitur Landing Page

### Desain
- Warna medis profesional (biru, putih, cyan)
- Layout responsif untuk semua perangkat
- Animasi smooth dan modern
- Ikon minimalis dan SVG custom

### Navigasi
- Navbar sticky dengan efek scroll
- Mobile menu responsive
- Smooth scroll ke setiap section
- Active state indicator

### Interaktivitas
- Hover effects pada cards dan buttons
- Ripple effect pada tombol
- Fade-in animations saat scroll
- Counter animation untuk statistik

### Sections
1. **Hero Section**: Headline utama dengan statistik dan preview cards
2. **CB 1 Section**: Simple Core System dengan features dan components
3. **CB 2 Section**: Advanced & Integrated System (dark theme)
4. **CB 3 Section**: Location-Based Limited System
5. **CTA Section**: Call-to-action dengan multiple buttons
6. **Footer**: Branding, links, dan copyright

## Penggunaan

### Buka Landing Page
Simply open `index.html` in a web browser:

```bash
# Using a simple HTTP server
python -m http.server 8000

# Or using Node.js
npx serve .

# Or directly open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Kustomisasi

#### Mengubah Warna
Edit variabel CSS di `styles.css`:

```css
:root {
    --primary-blue: #0077B6;
    --primary-blue-light: #00B4D8;
    --accent-cyan: #CAF0F8;
    /* ... */
}
```

#### Mengubah Konten
Edit teks di `index.html` sesuai kebutuhan. Setiap section memiliki class yang jelas:
- `.hero-title` untuk headline utama
- `.cb-title` untuk judul setiap CB
- `.feature-item` untuk fitur-fitur
- `.component-card` untuk komponen sistem

#### Menambahkan Logo
Ganti SVG di bagian `.logo` di `index.html` dengan logo Anda sendiri.

## Responsiveness

Landing page ini sepenuhnya responsif dan mendukung:
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## Browser Support

- Chrome (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Edge (terbaru)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performa

- Minimal JavaScript (vanilla JS, tidak ada framework)
- CSS optimized dengan variabel
- SVG inline untuk ikon
- Lazy loading support untuk images
- Smooth animations dengan hardware acceleration

## Aksesibilitas

- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Color contrast compliant
- Mobile-friendly tap targets

## License

All rights reserved © 2024 Emergency Medical Command & Response System

## Dukungan

Untuk demo atau konsultasi sistem, hubungi tim kami melalui:
- Request Demo
- Konsultasi Sistem
- Hubungi Tim

---

**Bangun sistem respons medis yang sesuai dengan kebutuhan institusi Anda.**
