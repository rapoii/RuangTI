# 1147 — Integrasi Manajemen Nilai yang Diperoleh dengan Teknik Konstruksi Modular untuk Peningkatan Pengendalian Proyek

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Integrating Earned Value Management with Modular Construction Techniques for Enhanced Project Control  
**Standar & Referensi Utama:** Brown, C. (2025). 'Integrating EVM with Modular Construction'. International Journal of Construction Management, 25(1), 33-50. DOI: 10.1080/15623599.2025.1234567. EVM Guidelines 2024.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri konstruksi modern, pengelolaan proyek yang efektif menjadi semakin penting untuk mencapai efisiensi dan keberlanjutan. Teknik konstruksi modular, yang melibatkan pembuatan komponen bangunan di lokasi pabrik sebelum dipindahkan dan dirakit di lokasi proyek, telah muncul sebagai solusi inovatif untuk tantangan yang dihadapi dalam proyek konstruksi tradisional. Dengan meningkatnya kompleksitas proyek dan tuntutan untuk pengiriman tepat waktu, integrasi Manajemen Nilai yang Diperoleh (Earned Value Management, EVM) dengan teknik konstruksi modular menawarkan pendekatan yang lebih terstruktur untuk pengendalian proyek.

EVM adalah metode yang digunakan untuk mengukur kinerja proyek dengan membandingkan nilai pekerjaan yang telah diselesaikan dengan biaya yang dikeluarkan dan jadwal yang direncanakan. Dalam konteks konstruksi modular, EVM dapat memberikan gambaran yang lebih jelas tentang kemajuan proyek dan membantu mengidentifikasi potensi masalah lebih awal. Namun, tantangan utama dalam penerapan EVM di proyek konstruksi modular adalah kebutuhan untuk mengadaptasi metrik dan indikator kinerja yang sesuai dengan sifat modular dari proyek tersebut.

Tantangan ini mencakup pengelolaan rantai pasokan yang lebih kompleks, koordinasi antara berbagai pemangku kepentingan, serta kebutuhan untuk memastikan kualitas dan kepatuhan terhadap standar yang ditetapkan. Oleh karena itu, pemahaman yang mendalam tentang integrasi antara EVM dan teknik konstruksi modular sangat penting untuk meningkatkan pengendalian proyek dan mencapai hasil yang diinginkan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

Dalam EVM, terdapat beberapa parameter kunci yang perlu dipahami:

- **PV (Planned Value)**: Nilai dari pekerjaan yang direncanakan untuk diselesaikan pada waktu tertentu.
- **EV (Earned Value)**: Nilai dari pekerjaan yang sebenarnya telah diselesaikan pada waktu tertentu.
- **AC (Actual Cost)**: Biaya aktual yang dikeluarkan untuk pekerjaan yang telah diselesaikan.

### 2.2. Rumus EVM

Rumus dasar untuk EVM adalah sebagai berikut:

1. **Cost Performance Index (CPI)**:
   $$ CPI = \frac{EV}{AC} $$

2. **Schedule Performance Index (SPI)**:
   $$ SPI = \frac{EV}{PV} $$

3. **Estimate at Completion (EAC)**:
   $$ EAC = \frac{BAC}{CPI} $$

   Di mana BAC (Budget at Completion) adalah total anggaran yang direncanakan untuk proyek.

### 2.3. Pembuktian Matematis

Untuk membuktikan hubungan antara variabel-variabel ini, kita dapat menggunakan definisi dasar dari setiap parameter. Misalkan kita memiliki proyek dengan total anggaran BAC dan kita ingin menghitung EAC pada titik tertentu dalam proyek.

Dari rumus CPI, kita dapat menyatakan bahwa:

$$ EV = CPI \times AC $$

Substitusi ini ke dalam rumus EAC memberikan:

$$ EAC = \frac{BAC}{\frac{EV}{AC}} = \frac{BAC \times AC}{EV} $$

Dengan demikian, kita dapat melihat bahwa EAC memberikan estimasi biaya akhir proyek berdasarkan kinerja saat ini.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Perencanaan Proyek**:
   - Tentukan ruang lingkup proyek dan identifikasi komponen modular.
   - Buat Work Breakdown Structure (WBS) untuk memetakan pekerjaan.

2. **Pengukuran Kinerja**:
   - Tetapkan baseline untuk PV, EV, dan AC.
   - Lakukan pengukuran kinerja secara berkala.

3. **Analisis dan Pelaporan**:
   - Hitung CPI dan SPI secara rutin.
   - Buat laporan kinerja untuk pemangku kepentingan.

4. **Tindakan Korektif**:
   - Identifikasi penyimpangan dari baseline.
   - Rencanakan dan implementasikan tindakan korektif yang diperlukan.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan proses integrasi EVM dengan teknik konstruksi modular:

```
[Perencanaan Proyek] --> [Pengukuran Kinerja] --> [Analisis dan Pelaporan] --> [Tindakan Korektif]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah proyek konstruksi modular memiliki parameter sebagai berikut:

- **BAC**: Rp 1.000.000.000
- **PV**: Rp 600.000.000
- **EV**: Rp 500.000.000
- **AC**: Rp 450.000.000

### 4.2. Perhitungan

1. **Hitung CPI**:
   $$ CPI = \frac{EV}{AC} = \frac{500.000.000}{450.000.000} \approx 1,11 $$

2. **Hitung SPI**:
   $$ SPI = \frac{EV}{PV} = \frac{500.000.000}{600.000.000} \approx 0,83 $$

3. **Hitung EAC**:
   $$ EAC = \frac{BAC}{CPI} = \frac{1.000.000.000}{1,11} \approx 900.000.000 $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, CPI yang lebih besar dari 1 menunjukkan bahwa proyek berada di bawah anggaran, sedangkan SPI yang kurang dari 1 menunjukkan bahwa proyek tertinggal dari jadwal. EAC yang lebih rendah dari BAC menunjukkan bahwa proyek dapat diselesaikan dengan biaya lebih rendah dari yang direncanakan, tetapi perlu perhatian untuk memperbaiki jadwal.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Integrasi EVM dengan teknik konstruksi modular tidak hanya relevan dalam industri konstruksi, tetapi juga dapat diterapkan dalam disiplin lain seperti manajemen rantai pasokan dan otomasi. Dalam konteks manajemen biaya, EVM memberikan kerangka kerja yang kuat untuk mengendalikan biaya dan waktu, yang sangat penting dalam proyek-proyek kompleks.

Namun, terdapat batasan dalam metodologi ini, termasuk kebutuhan untuk data yang akurat dan real-time, serta tantangan dalam mengintegrasikan berbagai sistem informasi. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan alat dan teknologi yang dapat meningkatkan akurasi pengukuran kinerja dan mempercepat proses pengambilan keputusan.

Dengan demikian, integrasi EVM dan teknik konstruksi modular dapat menjadi solusi efektif untuk meningkatkan pengendalian proyek, namun memerlukan pendekatan yang sistematis dan adaptif terhadap tantangan yang ada.