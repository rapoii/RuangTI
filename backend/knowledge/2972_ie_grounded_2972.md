# 2972 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Pemantauan Vial Real-Time dalam Kerangka Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti antibodi monoklonal, vaksin mRNA, protein terapeutik, dan sediaan parenteral bernilai tinggi lainnya. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab keempat buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: 10.1002/9783527850303.ch4), proses liofilisasi konvensional masih mengandalkan thermocouple kawat keras (*hard-wired thermocouples*) yang ditempatkan pada posisi terbatas di dalam ruang pengering (*drying chamber*) — biasanya hanya 3–5 probe untuk memantau ratusan vial secara bersamaan. Keterbatasan spasial ini menimbulkan blind spot operasional yang signifikan, karena vial-vial di tepi rak (*edge vials*) mengalami sublimasi lebih cepat 20–40% dibanding vial di pusat (*center vials*), suatu fenomena yang dalam literatur PAT dikenal sebagai *edge effect* (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11).

Urgensi ekonomi dari transformasi digital ini dapat dihitung secara kasar: sebuah batch liofilisasi bernilai antara USD 500.000 hingga USD 5.000.000 (terapi seluler dan genetik bahkan lebih tinggi). Kegagalan satu batch akibat *over-drying* (kerusakan produk) atau *under-drying* (residual moisture tinggi) bukan hanya menghilangkan nilai produk tetapi menunda rilis klinis dengan dampak biaya peluang yang besar. Meza-Galvan et al. (2026) menekankan bahwa penerapan Wireless Sensor Networks (WSN) membuka paradigma baru *per-vial real-time monitoring*, di mana setiap vial menjadi titik ukur cerdas yang dapat melaporkan suhu produk, laju sublimasi, dan posisi *drying front* secara mandiri. Pendekatan ini merupakan pilar utama dari kerangka Quality by Design (QbD) yang diminta oleh regulator FDA melalui pedoman PAT tahun 2004 dan diperkuat dalam ICH Q8(R2), Q9, dan Q10.

Konteks industri 4.0 semakin memperkuat urgensi ini. Dengan arsitektur WSN, data vial dapat diintegrasikan ke dalam platform *edge-cloud manufacturing execution system* (MES), memungkinkan algoritma *Model Predictive Control* (MPC) menutup loop umpan balik secara adaptif (Artusio et al., 2026). Lebih jauh, jaringan nirkabel menghilangkan hambatan sterilisasi dan konektivitas fisik yang selama ini membatasi jumlah sensor, sehingga granularity data meningkat dari O(10¹) menjadi O(10²)–O(10³) titik ukur per batch.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis WSN-for-lyophilization menggabungkan dua disiplin: (a) model perpindahan panas-massa liofilisasi, dan (b) model komunikasi nirkabel dan konsumsi energi sensor.

### 2.1. Model Sublimasi dan Perpindahan Panas Vial (Pikal–Mascarenhas)

Laju sublimasi lapisan es $\dot{m}$ untuk satu vial dikendalikan oleh resistansi lapisan kering $R_p$ dan perbedaan tekanan uap:

$$\dot{m} = \frac{A_v (p_i - P_c)}{R_p}$$

dengan $A_v$ luas penampang vial (m²), $p_i$ tekanan uap pada antarmuka es–produk kering (Pa), dan $P_c$ tekanan ruang (Pa). Resistansi $R_p$ berevolusi selama proses menurut:

$$R_p(t) = R_{p,0} + \frac{a \cdot L_0}{1 + b \cdot \dot{m} \cdot t}$$

dengan $R_{p,0}$ resistansi awal, $L_0$ ketebalan awal lapisan beku, dan $a$, $b$ parameter empirik formulasi (Meza-Galvan et al., 2026).

Neraca energi vial menggunakan koefisien transfer panas vial $K_v$ (umumnya 5–15 W/m²·K):

$$q = A_v K_v (T_s - T_p)$$

dengan $T_s$ suhu rak dan $T_p$ suhu produk. Menggabungkan kedua persamaan menghasilkan suhu produk tunak (*steady-state*):

$$T_p = T_s - \frac{\dot{m} \Delta H_s}{A_v K_v}$$

dengan $\Delta H_s$ entalpi sublimasi ($\approx$ 2.800 kJ/kg untuk es murni).

### 2.2. Model Komunikasi Nirkabel (Friis Path Loss)

Kualitas link radio antara node sensor dalam chamber dan gateway didekripsi oleh persamaan Friis dalam ruang bebas:

$$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$$

dengan $P_t$ daya transmisi (mW), $G_t$ dan $G_r$ penguatan antena, $\lambda$ panjang gelombang, serta $d$ jarak (m). Karena lingkungan chamber bersifat multi-path dengan permukaan baja tahan karat, model log-distance lebih representatif:

$$PL(d) = PL(d_0) + 10n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $n$ *path-loss exponent* (2–4 dalam chamber logam) dan $X_\sigma$ variabel acak log-normal shadowing (Meza-Galvan et al., 2026).

### 2.3. Model Konsumsi Energi dan Lifetime Jaringan

Energi total per transmisi paket data ($E_{tx}$) mengikuti:

$$E_{tx} = \begin{cases} E_{elec} \cdot k + \varepsilon_{fs} \cdot k \cdot d^2, & d < d_0 \\ E_{elec} \cdot k + \varepsilon_{mp} \cdot k \cdot d^4, & d \geq d_0 \end{cases}$$

dengan $k$ ukuran paket (bit), $E_{elec}$ energi sirkuit (≈ 50 nJ/bit), $\varepsilon_{fs}$ dan $\varepsilon_{mp}$ koefisien amplifier. *Lifetime* jaringan dirumuskan sebagai:

$$L_{net} = \frac{E_{battery}}{I_{avg} \cdot V_{cc}}$$

dengan $E_{battery}$ kapasitas baterai (J), $I_{avg}$ arus rata-rata, dan $V_{cc}$ tegangan suplai (Artusio et al., 2026).

### 2.4. Model Throughput dan Latency PAT

Throughput minimal yang dibutuhkan agar data vial valid secara proses:

$$T_{req} \geq N_{vial} \cdot f_s \cdot \frac{k_{packet}}{T_{cycle}}$$

dengan $N_{vial}$ jumlah vial, $f_s$ laju sampling (Hz), $k_{packet}$ bit per paket, dan $T_{cycle}$ periode transmisi (s).

## 3. Metodologi Rekayasa & SOP Implementasi

Penerapan WSN dalam liofilisasi mengikuti arsitektur berlapis (*layered architecture*) sesuai rekomendasi Meza-Galvan et al. (2026):

### 3.1. Arsitektur Tiga Lapis
1. **Lapisan Persepsi (*Sensor/Node Layer*):** Termistor atau RTD miniatures tertanam dalam vial, dikombinasikan dengan mikrokontroler ultra-low-power (mis. MSP430, nRF52840) dan transceiver 2.4 GHz/Sub-GHz. Sensor harus sterilisasi-kompatibel (autoclave atau gamma) dan beroperasi pada rentang suhu $-50^\circ$C hingga $+60^\circ$C.
2. **Lapisan Jaringan (*Mesh/Gateway Layer*):** Topologi star–mesh hybrid dengan gateway yang ditempatkan di dinding ruang steril. Protokol seperti BLE 5.0, ZigBee 3.0, atau LoRaWAN digunakan tergantung pada kebutuhan jangkauan dan throughput.
3. **Lapisan Aplikasi (*Edge-Cloud/DEC Layer*):** Edge gateway menjalankan inferensi model sublimasi real-time, sementara cloud MES menyimpan *batch electronic record* (EBR) sesuai 21 CFR Part 11.

### 3.2. SOP Implementasi (8 Tahapan)
1. **Kualifikasi Desain (Design Qualification):** Tentukan $N_{vial}$, $f_s$, dan SLA data integrity.
2. **Seleksi Sensor:** Validasi akurasi $\pm 0{,}5^\circ$C dalam rentang proses.
3. **Karakterisasi Saluran Radio:** Lakukan *site survey* PL(d) di chamber kosong dan penuh.
4. **Integrasi Mekanis:** Rancang *fixture* vial agar sensor tidak mengganggu transfer panas.
5. **Kualifikasi Instalasi (IQ) & Operasi (OQ):** Uji sterilisasi,