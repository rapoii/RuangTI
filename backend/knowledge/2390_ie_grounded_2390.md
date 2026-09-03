# 2390 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products) dan Sistem Pemantauan Suhu Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** *A Resilience Model for Cold Chain Logistics of Perishable Products* dengan Integrasi IoT Temperature Monitoring pada Cold Chain Box Vaksin  
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *A Resilience Model for Cold Chain Logistics of Perishable Products*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)  
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20*. Jurnal KomtekInfo Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik produk mudah rusak (*perishable products*) — yang mencakup vaksin, produk farmasi biologis, makanan beku, dan produk hortikultura — menghadapi tantangan struktural yang semakin kompleks dalam rantai pasok global. Kerusakan produk akibat pelanggaran rantai dingin (*cold chain breach*) menjadi salah satu penyebab utama kerugian ekonomi dan kesehatan masyarakat. Organisasi Kesehatan Dunia (WHO) melaporkan bahwa lebih dari 50% vaksin global terbuang sia-sia setiap tahun akibat kesalahan manajemen suhu pada tahap distribusi, terutama di negara berkembang seperti Indonesia. Kerugian ini tidak hanya bersifat finansial, melainkan juga menurunkan efikasi terapi secara langsung, yang berdampak pada kualitas layanan kesehatan masyarakat.

Dalam konteks spesifik Indonesia, Putra, Defit, dan Nurcahyo (2024) menyoroti permasalahan nyata pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak yang bertanggung jawab penuh menjaga kualitas vaksin hingga saat distribusi. Dua permasalahan fundamental teridentifikasi: pertama, *cold chain box* sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantauan suhu secara *real-time* yang mampu memberikan peringatan otomatis kepada apoteker ketika terjadi kenaikan suhu akibat kerusakan internal (misalnya kegagalan kompresor atau kebocoran refrigeran) maupun kerusakan eksternal (misalnya paparan panas lingkungan atau kesalahan operasional). Kedua, proses pencatatan suhu masih dikerjakan secara manual setiap 2 jam sekali pada *log sheet* oleh apoteker, sehingga rentan terhadap human error, keterlambatan respons, dan hilangnya jejak audit digital.

Permasalahan ini diangkat secara teoritis oleh Khurshid dan Siddiqui (2024) yang mengajukan model kuantitatif untuk mengukur tingkat ketahanan (*resilience*) logistik cold chain. Berbeda dengan pendekatan konvensional yang hanya berfokus pada keandalan (*reliability*), model resilience ini memperhitungkan kapasitas sistem untuk pulih (*recovery*), beradaptasi terhadap gangguan (*adaptive capacity*), dan mempertahankan fungsi kritis (*functional persistence*) ketika menghadapi disrupsi. Pendekatan ini sangat relevan untuk konteks operasional Indonesia di mana infrastruktur cold chain sering menghadapi fluktuasi daya listrik, keterbatasan SDM terlatih, dan tantangan geografis distribusi ke daerah terpencil. Integrasi kedua literatur ini — satu dari perspektif pemodelan matematis resilience dan satu dari perspektif implementasi sensor IoT DS18B20 — memberikan kerangka kerja holistik yang menjembatani analisis teoretis dengan solusi rekayasa terapan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Indeks Ketahanan (Resilience Index) Cold Chain

Khurshid dan Siddiqui (2024) mengajukan kerangka kuantitatif yang memformulasikan tingkat ketahanan cold chain sebagai fungsi dari tiga parameter utama: kemampuan menyerap (*absorption capacity*), kemampuan memulihkan (*recovery capacity*), dan kemampuan beradaptasi (*adaptive capacity*). Formulasi indeks resilience dapat dinyatakan sebagai:

$$R_{CC} = \int_{t_{d}}^{t_{r}} \frac{Q(t)}{t_{r} - t_{d}} \, dt$$

di mana $R_{CC}$ adalah indeks ketahanan cold chain, $t_{d}$ adalah waktu onset disrupsi (detection time), $t_{r}$ adalah waktu pemulihan penuh (full recovery time), dan $Q(t)$ adalah fungsi kualitas produk pada waktu $t$ yang dinormalisasi. Fungsi $Q(t)$ mengikuti persamaan degradasi orde pertama ketika suhu menyimpang dari rentang operasional:

$$Q(t) = Q_{0} \cdot e^{-\lambda |T(t) - T_{opt}| \cdot \Delta t}$$

dengan $Q_{0}$ adalah kualitas awal, $\lambda$ adalah koefisien degradasi spesifik produk (untuk vaksin sensitif seperti DPT atau Campak, $\lambda$ berkisar antara 0,05–0,20 per jam pada pelanggaran suhu 2°C), $T(t)$ adalah suhu aktual pada waktu $t$, dan $T_{opt}$ adalah suhu optimal (umumnya 2–8°C untuk vaksin).

### 2.2. Model Rantai Markov untuk Transisi Status Cold Chain

Status operasional cold chain dimodelkan sebagai empat keadaan diskrit pada rantai Markov waktu diskrit: $S_1$ (Normal, $T \in [2°C, 8°C]$), $S_2$ (Warning, $T \in [1°C, 2°C] \cup [8°C, 10°C]$), $S_3$ (Critical, $T < 1°C$ atau $T > 10°C$), dan $S_4$ (Failure/Compromised, produk tidak layak distribusi). Matriks transisi probabilitasnya:

$$P = \begin{bmatrix} p_{11} & p_{12} & p_{13} & p_{14} \\ p_{21} & p_{22} & p_{23} & p_{24} \\ p_{31} & p_{32} & p_{33} & p_{34} \\ p_{41} & p_{42} & p_{43} & p_{44} \end{bmatrix}$$

dengan kendala $\sum_{j=1}^{4} p_{ij} = 1$ untuk setiap $i$. Probabilitas keadaan tunak (*steady-state*) $\pi = [\pi_1, \pi_2, \pi_3, \pi_4]$ diperoleh dari求解 $\pi P = \pi$.

### 2.3. Model Kegagalan dengan Distribusi Weibull

Untuk mengkarakterisasi keandalan sistem refrigerasi cold chain, digunakan distribusi Weibull dua parameter:

$$f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta - 1} e^{-(t/\eta)^{\beta}}$$

di mana $\beta$ adalah parameter bentuk (*shape*) dan $\eta$ adalah parameter skala (*scale* atau *characteristic life*). Untuk compressor unit pada cold chain box, kajian empiris umumnya menghasilkan $\beta \approx 1,8$ sampai 3,5 (mengarah ke pola *wear-out failure*). Keandalan fungsi adalah:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

### 2.4. Model Termodinamika Cold Chain Box

Perubahan suhu internal cold chain box mengikuti hukum kesetimbangan energi:

$$m \cdot c_{p} \cdot \frac{dT}{dt} = \dot{Q}_{in} - \dot{Q}_{out} + \dot{Q}_{gen}$$

dengan $m$ adalah massa efektif, $c_{p}$ kapasitas panas spesifik, $\dot{Q}_{in}$ laju perpindahan panas masuk (konduksi melalui dinding, radiasi, infiltrasi udara), $\dot{Q}_{out}$ kapasitas pendinginan (refrigerasi), dan $\dot{Q}_{gen}$ beban panas internal. Untuk cold chain box dengan isolasi polyurethane setebal $d$ dan luas permukaan $A$:

$$\dot{Q}_{in} = \frac{k_{ins} \cdot A}{d} (T_{amb} - T_{in})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem IoT Temperature Monitoring

Berdasarkan desain Putra dkk. (2024), arsitektur IoT monitoring cold chain box vaksin menggunakan sensor DS18B20 (akurasi ±0,5°C pada rentang -10°C sampai +85°C, resolusi 9–12 bit) yang terhubung ke mikrokontroler Arduino/ESP32 melalui protokol *1-Wire*. Arsitektur berlapis terdiri atas:

1. **Lapisan Persepsi (*Perception Layer*):** Sensor DS18B20 ditempatkan pada titik kritis (bagian dalam box dekat dinding, tengah, dan dekat tutup) untuk menangkap gradien suhu. Setiap sensor memiliki *unique 64-bit ROM code* yang memungkinkan multi-sensor pada satu pin data (*parasitic power mode*).
2. **Lapisan Transmisi (*Network Layer*):** Modul WiFi ESP32 mengirim data ke server cloud (MQTT/HTTP) setiap interval sampling Δt = 30 detik.
3. **Lapisan Aplikasi (*Application Layer*):** Dashboard web menampilkan *real-time temperature*, *historical trend*, dan *alert system* via SMS/WhatsApp/Telegram ketika suhu keluar rentang aman.

### 3.2. SOP Operasional Pemantauan Cold Chain

```
┌─────────────────────────────────────────┐
│  PROSEDUR OPERASIONAL STANDAR (SOP)     │
│  PEMANTAUAN COLD CHAIN BOX VAKSIN      │
└─────────────────────────────────────────┘
        ↓
[1] Pre-Operational Check
    - Kalibrasi sensor DS18B20 (ice-bath 0°C)
    - Verifikasi battery backup ≥ 4 jam
    - Cek koneksi WiFi/GSM
        ↓
[2] Inisialisasi Monitoring
    - Set threshold bawah = 2°C
    - Set threshold atas = 8°C
    - Set sampling interval = 30 detik
        ↓
[3] Real-Time Monitoring Loop
    - Baca suhu setiap 30 detik
    - Simpan ke SD card lokal (redundansi)
    - Kirim ke cloud setiap 5 menit
        ↓
[4] Deteksi Anomali
    ├─ [2°C ≤ T ≤ 8°C] → Status NORMAL
    ├─ [1°C < T < 2°C] atau [8°C < T < 10°C]
    │   → Status WARNING → Alert Level 1
    └─ [T < 1°C] atau [T > 10°C]
        → Status CRITICAL → Alert Level 2
            + Aktivasi protokol pemulihan
        ↓
[5] Protokol Pemulihan
    - Inspeksi fisik oleh apoteker
    - Verifikasi seal cold chain box
    - Evaluasi durasi pelanggaran
    - Keputusan: distribusi | karantina | disposal
        ↓
[6] Dokumentasi & Audit Trail
    - Auto-generate compliance report
    - Digital signature untuk traceability
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input Cold Chain Box di UPTD Farmasi Siak

Berdasarkan karakteristik cold chain box standar yang digunakan di Indonesia (kapasitas 16–32 liter, isolasi polyurethane 30 mm):

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Volume box | V | 22 | liter |
| Massa produk (vaksin) | m | 12 | kg |
| Kapasitas panas spesifik | $c_p$ | 3500 | J/(kg·K) |
| Ketebalan isolasi | d | 0,030 | m |
| Luas permukaan | A | 0,85 | m² |
| Konduktivitas polyurethane | $k_{ins}$ | 0,024 | W/(m·K) |
| Suhu ambient | $T_{amb}$ | 32 | °C |
| Suhu internal awal | $T_0$ | 5,0 | °C |
| Suhu target | $T_{opt}$ | 5,0 | °.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
