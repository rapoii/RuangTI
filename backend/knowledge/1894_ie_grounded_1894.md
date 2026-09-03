# 1894 — Model Ketahanan (Resilience) Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products — Integrasi Sensor IoT DS18B20 untuk Monitoring Cold Chain Box Vaksin
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *A Resilience Model for Cold Chain Logistics of Perishable Products*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20*. Jurnal KomtekInfo, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk farmasi, bioteknologi, dan pangan mudah rusak (*perishable products*) yang nilai ekonominya pada 2024 diperkirakan melebihi USD 420 miliar secara global, dengan segmen vaksin menyumbang lebih dari USD 140 miliar (Khurshid & Siddiqui, 2024). Dalam konteks Indonesia, berdasarkan temuan Putra, Defit, dan Nurcahyo (2024), Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak mengelola distribusi vaksin untuk ribuan fasilitas pelayanan kesehatan primer, di mana kualitas sediaan hayati sangat bergantung pada pemeliharaan suhu 2 °C–8 °C selama siklus *last-mile* menggunakan *cold chain box*. Dua permasalahan struktural teridentifikasi: (i) tidak adanya sistem pemantauan suhu *real-time* yang mampu memberikan peringatan dini kepada apoteker ketika suhu *cold chain box* mengalami eskalasi akibat kerusakan internal (misalnya degradasi fase pendingin, defek *insulation*) maupun eksternal (paparan matahari, waktu buka pintu yang melebihi standar), serta (ii) pencatatan suhu yang masih dilakukan secara manual setiap 2 jam sekali pada *log sheet*, menciptakan risiko *human error*, keterlambatan respons, serta tidak tersedianya data historis untuk analisis akar masalah.

Urgensi rekayasa terhadap permasalahan ini diperkuat oleh fakta bahwa setiap kenaikan suhu di atas 8 °C selama lebih dari 30 menit pada kategori vaksin *sensitive* (misalnya *DTaP, MMR, Pentavalent*) dapat menurunkan potensi antigen hingga 15–40 % secara kumulatif, sebagaimana dirujuk oleh Khurshid & Siddiqui (2024) yang mengusulkan *Resilience Model* sebagai paradigma baru untuk mengkuantifikasi kemampuan sistem cold chain dalam menyerap (*absorptive capacity*), beradaptasi (*adaptive capacity*), dan pulih (*restorative capacity*) dari gangguan termal. Ketidakmampuan merespons secara *real-time* berimplikasi pada potensi *product loss*, pemborosan dosis (*wastage rate* WHO yang ditargetkan di bawah 5 %, namun secara nasional masih berkisar 8–15 %), serta risiko kesehatan masyarakat ketika vaksin terdistribusi namun kehilangan efikasi. Dalam kerangka *Industrial Engineering*, integrasi sensor *Digital Temperature Sensor* DS18B20 dengan akurasi ±0,5 °C pada rentang -10 °C hingga +85 °C, resolusi 9–12 bit yang dapat dikonfigurasi, dan protokol komunikasi *1-Wire* memungkinkan digitalisasi termal penuh pada titik kritis *cold chain box*, sekaligus menyediakan *data stream* untuk pemodelan ketahanan berbasis Markov dan *Bayesian Network* yang diajukan oleh Khurshid dan Siddiqui (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Ketahanan Cold Chain (Cold Chain Resilience Index — CCRI)

Khurshid dan Siddiqui (2024) mendefinisikan *Resilience Function* $R(t)$ sebagai kemampuan sistem mempertahankan kualitas termal terhadap gangguan, yang diformulasikan sebagai:

$$R(t) = \int_{0}^{T_{op}} \left[ 1 - P(T_{inside}(t) > T_{critical}) \right] \cdot \alpha(t) \, dt$$

di mana $T_{op}$ adalah durasi operasional, $P(\cdot)$ adalah probabilitas suhu internal melampaui ambang kritis $T_{critical}$, dan $\alpha(t)$ adalah bobot kepentingan pada waktu $t$. Untuk vaksin kategori VVM (*Vaccine Vial Monitor*) tipe A–D, $T_{critical} = 8°C$.

### 2.2 Model Termal Dinamis *Cold Chain Box*

Berdasarkan hukum keseimbangan energi dan konduksi *steady-state* melalui dinding *polystyrene* (Putra dkk., 2024), laju perubahan suhu internal dapat diekspresikan:

$$\rho \cdot V \cdot c_p \cdot \frac{dT_{inside}}{dt} = -k \cdot A \cdot \frac{(T_{inside} - T_{ambient})}{\delta} - h \cdot A_c \cdot (T_{inside} - T_{ambient}) + Q_{latent}$$

dengan:
- $\rho$ = densitas muatan pendingin (kg/m³), umumnya campuran *ice pack* pada 917 kg/m³
- $V$ = volume efektif *cold box* (m³)
- $c_p$ = kalor jenis air laten (≈ 4.186 kJ/kg·K, atau 334 kJ/kg untuk fusi)
- $k$ = konduktivitas termal *polystyrene* (≈ 0,033 W/m·K)
- $A$ = luas permukaan dinding (m²)
- $\delta$ = tebal insulasi (m)
- $h$ = koefisien konveksi alami (≈ 5–10 W/m²·K)
- $A_c$ = luas tutup & bukaan
- $Q_{latent}$ = beban termal laten dari produk

### 2.3 Akuisisi Data Sensor DS18B20

Sensor DS18B20 (Putra dkk., 2024) menghasilkan keluaran digital 12-bit dengan *Register Temperature* sebagai berikut:

$$T_{raw} = \sum_{i=0}^{11} b_i \cdot 2^{i-4}$$

di mana resolusi 12-bit menghasilkan $LSB = 0{,}0625°C$ dan akurasi intrinsik $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$. Waktu konversi $t_{conv} = 750$ ms pada resolusi penuh.

### 2.4 Probabilitas Kegagalan Termal & MTTR

Waktu untuk pulih (*Mean Time To Repair* — MTTR) setelah ekskursi termal terdistribusi eksponensial:

$$f(t) = \lambda \cdot e^{-\lambda t}, \quad MTTR = \frac{1}{\lambda}$$

Ketersediaan (*availability*) sistem cold chain dengan komponen IoT monitoring:

$$A_{system} = \frac{MTBF}{MTBF + MTTR}$$

dengan $MTBF$ adalah *Mean Time Between Failures* termal (jam), dan integrasi sensor DS18B20 + alarm otomatis mempersingkat $MTTR$ hingga 80 % dibanding pencatatan manual (Putra dkk., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Temperature Monitoring

Putra, Defit, dan Nurcahyo (2024) merancang arsitektur berlapis sebagai berikut:

```
[Lapisan 1 — Akuisisi]    Sensor DS18B20 (multi-point: top, middle, bottom box)
        ↓ (1-Wire / MAX31820)
[Lapisan 2 — Edge]        Mikrokontroler ESP32 / Arduino Mega
        ↓ (Wi-Fi 802.11 b/g/n, MQTT publish every 60 s)
[Lapisan 3 — Transport]   Broker MQTT (Mosquitto) / REST API
        ↓
[Lapisan 4 — Cloud]       Database InfluxDB + Dashboard Grafana
        ↓
[Lapisan 5 — Alerting]    Webhook → Telegram Bot / SMS Gateway (threshold > 8 °C)
```

### 3.2 Diagram Alir SOP Operasional

| No | Tahapan | Penanggung Jawab | Durasi Standar |
|----|---------|------------------|----------------|
| 1 | *Pre-conditioning* cold box (pengisian ice-pack pada -20 °C selama minimum 24 jam) | Apoteker UPTD | 24 jam |
| 2 | Kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat (NIST-traceable) | Teknisi Farmasi | 30 menit |
| 3 | Pengepakan vaksin sesuai prinsip *quadrant loading* (vaksin paling sensitif di tengah) | Apoteker | 15 menit |
| 4 | Aktivasi logger, verifikasi sinkronisasi cloud, dan *geo-tagging* rute distribusi | Logistik | 5 menit |
| 5 | Monitoring *real-time* pada dashboard dengan interval sampling 60 detik | Semua pihak via aplikasi | Kontinu |
| 6 | Respons alarm: triase dalam ≤ 15 menit, eskalasi ke supervisor jika perlu | Apoteker on-duty | ≤ 30 menit |

### 3.3 Prosedur Tanggap Darurat (*Excursion Protocol*)

Jika $T_{inside} \geq 8°C$ terdeteksi: (a) sistem otomatis mengirim notifikasi dalam < 5 detik; (b) apoteker menutup *cold box*, memindahkan ke *cooler backup* berisi *ice pack* segar; (c) vaksin diberi label *quarantine* dan dikirim ke PBF untuk uji *potency assay*; (d) seluruh kejadian dicatat dalam *CAPA log* (Corrective and Preventive Action) sesuai ISO 9001:2015 klausul 10.2.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

UPTD Farmasi Siak melakukan distribusi vaksin Pentavalent (5 ml vial × 200 vial = 1 L total) menggunakan *cold chain box* AOV-44 kapasitas 44 liter dengan dimensi eksternal 60 × 40 × 45 cm, tebal dinding polystyrene $\delta = 40$ mm, dan 24 *ice-pack* masing-masing 0,4 kg. Suhu ambient distribusi rata-rata $T_{ambient} = 32°C$ (lingkungan tropis Riau). Asumsikan waktu target $T_{op} = 8$ jam sesuai rute UPTD → 12 puskesmas.

### 4.2 Perhitungan Laju Kenaikan Suhu

Parameter operasional:
- $V = 0{,}044$ m³
- $A \approx 2(0{,}60 \times 0{,}40) + 2(0{,}60 \times 0{,}45) + 2(0{,}40 \times 0{,}45) = 1{,}128$ m²
- $A_c$ (bukaan tutup) = 0,24 m² (asumsi tutup dibuka 10 % waktu)
- $k = 0{,}033$ W/m·K, $\delta = 0{,}040$ m
- $h = 7$ W/m²·K
- $m_{ice} = 24 \times 0{,}4 = 9{,}6$ kg, $L_f = 334$ kJ/kg
- Energi pendingin total: $E_{cool} = m_{ice} \cdot L_f + m_{ice} \cdot c_p \cdot \Delta T = 9{,}6 \times 334 + 9{,}6 \times 4{,}186 \times (8 - 2)$

$$E_{cool} = 3206{,}4 + 240{,}7 = 3447{,}1 \text{ kJ}$$

Beban panas masuk (*heat ingress*) per jam:

$$Q_{in} = \frac{k \cdot A \cdot \Delta T}{\delta} + h \cdot A_c \cdot \Delta T$$

$$Q_{in} = \frac{0{,}033 \times 1{,}128 \times 24}{0{,}040} + 7 \times 0{,}24 \times 24$$

$$Q_{in} = 22{,}33 + 40{,}32 = 62{,}65 \text{ W} \approx 0{,}0627 \text{ kW}$$

Konversi ke kJ/jam: $Q_{in} = 225{,}5$ kJ/jam.

Durasi teoritis sebelum suhu naik melampaui 8 °C:

$$t_{hold} = \frac{E_{cool}}{Q_{in}} = \frac{3447{,}1}{225{,}5} = 15{,}28 \text{ jam}$$

**Interpretasi Manajerial:** Kapasitas termal *cold box* memberikan margin keselamatan (safety margin) sebesar 91 % di atas durasi target 8 jam, yang secara *risk-based* memenuhi standar WHO PQS E004 (waktu *hold-over* minimum 8 jam pada suhu ambient 43 °C untuk *prequalified cold box*). Namun tanpa sistem monitoring, apoteker tidak akan pernah mengetahui jika $Q_{in}$ aktual melebihi asumsi karena kerusakan insulasi.

### 4.3 Simulasi Akuisisi Data DS18B20

Untuk resolusi 12-bit, pada pembacaan suhu aktual 4,0625 °C, register DS18B20:

$$T_{raw} = 0x0410_{hex} = 0 \times 2^{-4} + 1 \times 2^{-3} + 0 \times 2^{-2} + 4 \times 2^{0} = 0{,}0625 + 0{,
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
