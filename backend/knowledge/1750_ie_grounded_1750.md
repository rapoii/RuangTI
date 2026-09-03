# 1750 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak: Integrasi Pemantauan IoT Real-Time dan Formulasi Kuantitatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo, 12(1)*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam manajemen rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, biofarmaseutikal, produk darah, makanan laut, dan produk hortikultura bernilai tinggi. Menurut Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), peningkatan suhu sekuensial singkat (*transient temperature excursion*) di luar rentang 2–8 °C untuk vaksin dapat menurunkan titer aktif secara irreversibel, sehingga kemampuan untuk memodelkan dan memulihkan (*recover*) sistem setelah gangguan menjadi pertanyaan strategis, bukan sekadar operasional. Mereka memperkenalkan kerangka *Resilience Model* yang mengkuantifikasi kemampuan rantai dingin untuk mempertahankan fungsinya di bawah *disruption* dan kembali ke *steady-state* dalam waktu yang dapat diterima.

Konteks empiris yang sangat relevan disajikan oleh Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi tiga masalah struktural yang melatarbelakangi kebutuhan akan model ketahanan: (1) *cold chain box* yang digunakan untuk menyimpan dan mendinginkan vaksin tidak dilengkapi sistem pemantauan suhu *real-time*, (2) apoteker mengandalkan pencatatan manual pada *log sheet* setiap dua jam sekali yang rentan terhadap human error dan jeda waktu deteksi, serta (3) tidak ada mekanisme peringatan dini ketika suhu menyimpang akibat kerusakan internal (misalnya kegagalan kompresor) maupun eksternal (misalnya paparan lingkungan sekitar saat distribusi). Kombinasi ketiga kelemahan ini menggambarkan kondisi klasik *low resilience-high vulnerability* pada titik kritis rantai pasok vaksin di tingkat daerah.

Secara ekonomi, World Health Organization (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang sia-sia karena pelanggaran rantai dingin di negara berkembang, dan setiap derajat pemanasan di atas ambang dapat memperpendek *shelf-life* efektif secara eksponensial. Dengan demikian, integrasi antara model kuantitatif (Khurshid & Siddiqui, 2024) dan instrumentasi *Internet of Things* (Putra et al., 2024) menjadi sangat mendesak untuk industri farmasi, perishable food, dan manufaktur biologis. Modul ini akan menyintesiskan keduanya dalam kerangka *Industrial Engineering* yang aplikatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Resilience Triangle dan Bruneau Framework
Khurshid dan Siddiqui (2024) mengadopsi Bruneau *Resilience Triangle* untuk mengukur degradasi kinerja sistem akibat *disruption*. Jika $Q(t)$ merepresentasikan kualitas layanan ternormalisasi (1 = nominal, 0 = gagal total), maka indeks ketahanan didefinisikan sebagai:

$$R = \int_{t_0}^{t_1} \left[100 - Q(t)\right] dt$$

di mana $t_0$ adalah waktu mulai gangguan dan $t_1$ adalah waktu pemulihan penuh. Semakin kecil $R$, semakin resilien sistem tersebut.

### 2.2 Availability dan Reliability Cold Chain Box
Untuk komponen aktif seperti kompresor dan sensor DS18B20 (Putra et al., 2024), parameter *Mean Time Between Failures* (MTBF) dan *Mean Time To Recovery* (MTTR) menentukan ketersediaan sistem:

$$A_{sistem} = \frac{MTBF}{MTBF + MTTR}$$

Jika sensor DS18B20 memiliki $MTBF = 50{,}000$ jam dan MTTR rata-rata 4 jam, maka:

$$A_{sensor} = \frac{50{,}000}{50{,}000 + 4} = 0{,}99992 \;(99{,}992\%)$$

### 2.3 Kinetics Degradasi Produk (Arrhenius-Modified)
Kehilangan potensi vaksin mengikuti *Arrhenius kinetics*:

$$k(T) = A \cdot e^{-\frac{E_a}{RT}}$$

di mana $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Waktu paruh efektif pada suhu penyimpangan:

$$t_{1/2}^{exp}(T) = \frac{\ln 2}{k(T)}$$

### 2.4 Fungsi Kehilangan Kualitas Taguchi
Kerugian kualitas karena deviasi suhu dari target $T_V$:

$$L(T) = K \cdot (T - T_V)^2$$

dengan $K$ = konstanta kualitas. Total kerugian selama *excursion* sepanjang durasi $\Delta t$:

$$L_{total} = \int_{0}^{\Delta t} K \cdot (T(t) - T_V)^2 \, dt$$

### 2.5 Probabilitas Kegagalan Sensor dan Deteksi
Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C sampai $+85$ °C. Probabilitas deteksi tepat waktu suatu *excursion*:

$$P_{detect} = 1 - e^{-\lambda \tau}$$

di mana $\lambda$ adalah *failure rate* dan $\tau$ adalah interval sampling (dalam jam). Dengan $\lambda = 0{,}02$/jam (sekali per 50 jam terjadi potensi kegagalan) dan $\tau = 0{,}083$ jam (5 menit):

$$P_{detect} = 1 - e^{-0{,}02 \times 0{,}083} = 0{,}00166$$

Nilai ini rendah sehingga interval sampling harus diperketat menjadi $\tau = 1$ menit ($=1/60$ jam):

$$P_{detect} = 1 - e^{-0{,}02/60} \approx 0{,}000333$$

Menunjukkan bahwa untuk deteksi dini, sistem IoT memerlukan sampling kontinu dengan *buffer* dan *alert threshold* yang agresif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain (Berdasarkan Putra et al., 2024)
Sistem pemantauan suhu berbasis IoT yang dirancang memiliki arsitektur berlapis:

1. **Layer Sensing:** Sensor DS18B20 (*waterproof probe*) ditempatkan pada tiga titik kritis *cold chain box* (saluran masuk evaporator, zona tengah, dan dekat penutup).
2. **Layer Mikrokontroler:** Arduino/ESP32 membaca data dengan protokol 1-Wire, melakukan *smoothing* dengan *exponential moving average*: $T_{smooth}(n) = \alpha \cdot T_{raw}(n) + (1-\alpha) \cdot T_{smooth}(n-1)$ dengan $\alpha = 0{,}3$.
3. **Layer Komunikasi:** Modul WiFi mengirim data setiap 60 detik ke *cloud server* (MQTT/HTTPS).
4. **Layer Aplikasi:** *Dashboard* berbasis web/mobile menampilkan grafik *real-time*, *history log*, dan memicu notifikasi jika $T > 8$ °C atau $T < 2$ °C.
5. **Layer Alarm:** Buzzer lokal dan *push notification* ke apoteker Siak untuk respons dalam waktu $< 5$ menit (Putra et al., 2024).

### 3.2 SOP Pemantauan 24-Jam
- **P0 (00:00–06:00):** Mode *silent alarm* — hanya eskalasi ke supervisor jika $T \notin [2, 8]$ °C selama $> 3$ menit.
- **P1 (06:00–18:00):** Apoteker siaga; logging digital menggantikan *log sheet* manual.
- **P2 (18:00–24:00):** Auto-backup ke *cloud*; sistem *predictive analytics* menghitung *Mean Kinetic Temperature* (MKT):

$$MKT = \frac{\Delta H / R}{- \ln\left(\frac{\sum_{i=1}^{n} e^{-E_a/RT_i}}{n}\right)}$$

dengan $\Delta H / R = 8{,}334$ K (umum untuk vaksin). Jika MKT $> 7$ °C, sistem menandai lot sebagai *quarantine*.

### 3.3 Diagram Alir Resilience Response (Berdasarkan Khurshid & Siddiqui, 2024)

```
[Gangguan Terdeteksi] 
        ↓
[Verifikasi Otomatis — cross-check 3 sensor]
        ↓ (Ya)
[Aktivasi Alarm + Notifikasi Apoteker]
        ↓
[Inisiasi Recovery Protocol — pindahkan ke unit cadangan jika MTTR > 15 menit]
        ↓
[Post-Mortem Analysis: hitung Resilience Loss Function R]
        ↓
[Update Database untuk Perbaikan Model]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** UPTD Farmasi Dinkes Siak mengelola 1.200 vial vaksin COVID-19 (merek X, syarat 2–8 °C, harga satuan Rp 280.000). Pada 5 Maret 2024, tercatat *excursion* suhu dari 5,0 °C menjadi 11,2 °C selama 18 menit akibat kegagalan pompa kipas internal.

**Langkah 1 — Hitung Resilience Loss:**

Gunakan Bruneau Triangle dengan asumsi $Q(t)$ menurun linier dari 1,0 ke 0,7 selama 18 menit lalu naik kembali linier ke 1,0 selama 12 menit (recovery):

$$R = \int_0^{18} \left(1 - \left(1 - \frac{0{,}3t}{18}\right)\right) dt + \int_0^{12} \left(1 - \left(0{,}7 + \frac{0{,}3t}{12}\right)\right) dt$$

$$R = \int_0^{18} \frac{0{,}3t}{18} dt + \int_0^{12} \left(0{,}3 - \frac{0{,}3t}{12}\right) dt$$

$$R = \frac{0{,}3}{18} \cdot \frac{18^2}{2} + \left(0{,}3 \cdot 12 - \frac{0{,}3}{12} \cdot \frac{12^2}{2}\right)$$

$$R = 2{,}7 + (3{,}6 - 1{,}8) = 4{,}5 \; \text{(satuan kualitas·menit)}$$

**Langkah 2 — Hitung Kehilangan Potensi dengan Arrhenius:**
Ambil $E_a = 80$ kJ/mol (umum untuk protein spike), $A = 10^{12}$/jam, $T_{excursion} = 11{,}2 + 273 = 284{,}2$ K, $R = 8{,}314$ J/(mol·K):

$$k(284{,}2) = 10^{12} \cdot e^{-\frac{80{,}000}{8{,}314 \times 284{,}2}} = 10^{12} \cdot e^{-33{,}86} \approx 10^{12} \times 2{,}05 \times 10^{-15} \approx 2{,}05 \times 10^{-3} \;/\text{jam}$$

Untuk 18 menit = 0,3 jam, fraksi degradasi:

$$f_{deg} = 1 - e^{-k \cdot t} = 1 - e^{-0{,}000615} \approx 0{,}000615 \;(0{,}0615\%)$$

**Langkah 3 —