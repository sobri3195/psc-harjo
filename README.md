# 🚑 911 Emergency Dashboard

Dashboard darurat 911 yang dibuat dengan React dan animasi menarik untuk tracking ambulans dan user dalam situasi emergency.

## ✨ Fitur Utama

### 🎯 Dashboard 911 Komprehensif
- **Real-time Monitoring**: Tracking ambulans dan emergency calls secara real-time
- **Interactive Map**: Peta interaktif dengan animasi bergerak untuk ambulans
- **Command Center**: Pusat komando untuk dispatch dan monitoring
- **User Panel**: Interface untuk emergency requests dari pengguna

### 🚑 Animasi Ambulans
- **Movement Animation**: Ambulans bergerak dengan animasi smooth
- **Status Indicators**: Visual status (available, dispatched, en-route, returning)
- **Route Animation**: Animasi jalur saat ambulans menuju lokasi emergency
- **Emergency Response**: Animasi khusus saat dispatch dan response

### 👤 User Interface
- **Emergency Button**: Tombol darurat dengan animasi pulse
- **Quick Request**: Form emergency request dengan validasi
- **Location Pin**: Pin lokasi user dengan animasi ping effect
- **Status Tracking**: Tracking status emergency dari request hingga resolved

### 🎨 Animasi Menarik
- **Pulse Effects**: Animasi berdenyut untuk emergency states
- **Smooth Transitions**: Transisi halus antar komponen
- **Hover Effects**: Interaksi hover yang responsif
- **Loading States**: Animasi loading yang smooth

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
cd 911-emergency-dashboard

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

## 📱 Fitur Dashboard

### 🗺️ Ambulance Tracker (Center Panel)
- **Live Map**: Peta dengan grid dan jalan simulasi
- **Ambulance Markers**: Marker ambulans dengan status colors
- **Emergency Pins**: Pin lokasi emergency dengan animasi
- **Route Animation**: Animasi jalur perjalanan ambulans
- **Interactive**: Click ambulans untuk detail info

### 👤 User Panel (Left Panel)  
- **Emergency Button**: Tombol emergency dengan animasi pulse
- **Quick Select**: Pilih jenis emergency (Heart Attack, Accident, Medical, etc.)
- **Recent Calls**: History emergency calls terbaru
- **Form Modal**: Modal form untuk detail emergency

### 🎛️ Command Center (Right Panel)
- **Active Emergencies**: List emergency yang sedang pending
- **Fleet Status**: Status semua ambulans dalam fleet
- **Quick Dispatch**: Interface dispatch ambulans cepat
- **Real-time Updates**: Update status real-time

### 📊 Statistics Panel (Bottom)
- **Total Ambulances**: Jumlah total ambulans
- **Available Units**: Unit yang siap siaga
- **Pending Calls**: Emergency calls yang menunggu
- **Response Rate**: Persentase response yang berhasil

## 🎭 Jenis Animasi

### Emergency Animations
- **Emergency Pulse**: Animasi berdenyut untuk tombol emergency
- **User Ping**: Animasi ping untuk lokasi user
- **Status Blinking**: Blinking untuk status active

### Ambulance Animations  
- **Movement**: Animasi gerakan ambulans di peta
- **Route Following**: Animasi mengikuti jalur
- **Status Change**: Transisi status (available → dispatched → en-route)

### UI Animations
- **Page Transitions**: Transisi antar halaman/modal
- **Hover Effects**: Efek hover pada buttons dan cards
- **Loading States**: Animasi loading yang smooth
- **Micro-interactions**: Animasi detail untuk interaksi kecil

## 🏗️ Struktur Komponen

```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard layout
│   ├── AmbulanceTracker.jsx   # Map & ambulance tracking
│   ├── UserPanel.jsx          # Emergency requests panel
│   ├── CommandCenter.jsx      # Command & control panel
│   └── EmergencyModal.jsx     # Emergency form modal
├── App.jsx                    # Main app component
├── main.jsx                   # App entry point
└── index.css                  # Global styles & animations
```

## 🎨 Customization

### Mengubah Warna Theme
Edit di `src/index.css`:
```css
:root {
  --emergency-red: #ef4444;
  --ambulance-blue: #3b82f6;
  --available-green: #10b981;
}
```

### Menambah Jenis Emergency
Edit di `src/components/EmergencyModal.jsx`:
```javascript
const emergencyTypes = [
  // Existing types...
  { 
    id: 'new-type', 
    icon: NewIcon, 
    label: 'New Emergency', 
    color: 'bg-purple-500',
    priority: 'medium'
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

## 🔧 Fitur Pengembangan

### Real-time Simulation
- Simulasi ambulans bergerak otomatis
- Random emergency calls generator
- Status transitions yang realistis

### Responsive Design
- Desktop: 3-column layout
- Mobile: Single column stacked
- Tablet: Adaptive grid

### Accessibility
- Keyboard navigation
- Screen reader support
- High contrast colors
- Focus indicators

## 🚨 Demo Scenarios

### Scenario 1: Heart Attack Emergency
1. Klik "Emergency" button
2. Pilih "Heart Attack"
3. Ambulance akan bergerak ke lokasi
4. Status berubah: Available → Dispatched → En Route

### Scenario 2: Multi-Emergency
1. Buat multiple emergency calls
2. Lihat bagaimana ambulans didispatch
3. Monitor response time

### Scenario 3: Command Center
1. Buka Command Center panel
2. Lihat fleet status
3. Dispatch ambulans manual
4. Monitor real-time updates

## 🔮 Roadmap

- [ ] Real-time WebSocket integration
- [ ] GPS location tracking
- [ ] Voice communication
- [ ] Hospital integration
- [ ] Mobile responsive improvements
- [ ] Push notifications
- [ ] Historical data analytics

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

Untuk emergency atau bug reports, silakan buat issue di repository ini.

---

**Made with ❤️ for Emergency Response Systems**

Dashboard 911 ini menyediakan interface yang user-friendly dan animasi yang menarik untuk membantu operator emergency services dalam menjalankan tugas mereka dengan lebih efisien.