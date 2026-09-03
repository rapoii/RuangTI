# 1836 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Monitoring PAT, Rekayasa Sistem & Optimalisasi Rantai Nilai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks (WSN) untuk Liofilisasi (Freeze-Drying) Farmasi
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan struktural yang semakin kompleks pada operasi *freeze-drying* (liofilisasi), sebuah proses *batch* dengan tiga tahap kritis — *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi) — yang secara kolektif menyerap 30–40% dari total biaya manufaktur produk steril parenteral bernilai tinggi seperti antibodi monoklonal, vaksin mRNA, dan terapi sel (Meza‐Galvan, Strongrich & Darwish, 2026). Dalam *Pharmaceutical Freeze-Drying: Process Analytical Technology* yang dieditori pada 2026, Meza‐Galvan dkk. menjelaskan bahwa kegagalan satu siklus liofilisasi bernilai komersial antara USD 200.000 hingga USD 1,2 juta tergantung pada skala batch, dan batch failure rate secara historis berada pada kisaran 5–8% pada fasilitas konvensional yang mengandalkan *thermocouples* point-measurement berlapis tembaga—kabel yang selain bersifat invasif terhadap vial kaca juga menciptakan celah konduktif yang mendistorsi profil suhu produk aktual.

Dorongan regulatori utama datang dari inisiatif **Process Analytical Technology (PAT)** FDA (2004) dan ICH Q8/Q9/Q10, yang mengamanatkan *real-time quality assurance* berbasis pemahaman proses (*Quality-by-Design*, QbD). Paradigma lama yang mengandalkan *end-product testing* vial抽样抽样 sudah tidak cukup karena keputusan rilis lot membutuhkan rekonstruksi kondisi proses historis per vial, sesuatu yang mustahil dilakukan secara presisi dengan sparse sensor konvensional. Artusio, Barresi & Pisano (2026) dalam bab Emerging Technologies mengidentifikasi bahwa rata-rata fasilitas liofilisasi kelas dunia hanya memasang 6–12 titik sensor termal dalam kamar berisi 10.000–50.000 vial, menghasilkan *spatial resolution* yang sangat rendah—kurang dari 0,02% coverage.

Di sinilah **Wireless Sensor Networks (WSN)** menjadi *disruptive technology* yang diajukan oleh Meza‐Galvan et al. sebagai backbone arsitektur monitoring generasi baru. WSN memungkinkan penempatan *dozens hingga hundreds* node sensor miniatur di dalam chamber, setiap node mampu mengukur suhu produk ($T_p$), suhu shelf ($T_s$), tekanan chamber ($P_c$), dan bahkan kelembapan residu dengan akurasi sub-Kelvin dan laju sampling 1–10 Hz. Investasi modal pada retrofit WSN berkisar USD 50.000–250.000 per liofilizer, namun potensi *yield improvement* 3–7% dan pengurangan cycle time 8–15% memberikan payback period 6–18 bulan pada produk biologis high-value.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Sublimasi Liofilisasi

Meza‐Galvan et al. (2026) menurunkan ulang persamaan *heat and mass transfer* klasik untuk front sublimasi, yang menjadi fondasi seluruh algoritma monitoring berbasis WSN:

$$q = \frac{T_s - T_p}{R_p} = \Delta H_s \cdot N_m$$

di mana $q$ adalah fluks panas (W/m²), $T_s$ suhu shelf, $T_p$ suhu produk pada antarmuka sublimasi, $R_p$ resistansi termal produk kering (m²·K/W), $\Delta H_s$ entalpi sublimasi es (≈ 2.838 kJ/kg), dan $N_m$ laju sublimasi massa (kg/m²·s). Resistansi $R_p$ berevolusi secara kuasi-linear terhadap waktu:

$$R_p(t) = R_{p,0} + \frac{A_1 + A_2 \cdot t}{1 + B_1 \cdot t}$$

dengan $A_1$, $A_2$, $B_1$ sebagai parameter *fit* yang diestimasi *real-time* oleh sensor nirkabel menggunakan regresi kuadrat terkecil rekursif.

### 2.2 Propagasi Sinyal Nirkabel dalam Kamar Liofilisasi

Kamar liofilisasi bukan lingkungan propagasi RF ideal: dinding stainless steel 316L menghasilkan refleksi multipath, sementara vakum (< 10 Pa) menghilangkan konveksi udara sebagai media pendingin sensor. Meza‐Galvan et al. mengadopsi persamaan **Friis path loss** yang dimodifikasi untuk propagasi dalam ruang tertutup dengan rugi tambahan $(\sigma)$:

$$P_r = P_t + G_t + G_r + 20\log_{10}\left(\frac{\lambda}{4\pi d}\right) - \sigma$$

dengan $P_r$ daya terima (dBm), $P_t$ daya pancar, $G_t$ dan $G_r$ gain antena, $\lambda$ panjang gelombang, dan $d$ jarak node ke gateway. Untuk frekuensi ISM 2,4 GHz pada jarak tipikal 1,2 m, rugi propagasi vakum mencapai 50 dB, sehingga margin link budget harus melebihi 80 dB agar Packet Error Rate (PER) < 1%.

### 2.3 Konsumsi Energi Node dan *Duty Cycling*

Sensor nirkabel beroperasi dengan baterai lithium primari 3,6 V / 2,4 Ah. Konsumsi per pengukuran didekati:

$$E_{tx} = \frac{P_{tx} \cdot L}{R_b \cdot \eta_{PA}}$$

$$E_{total} = N_{samp} \cdot E_{tx} + N_{samp} \cdot E_{rx} + P_{sleep} \cdot t_{sleep}$$

Pada konfigurasi $N_{samp}$ = 50.000 pengukuran/siklus, $P_{tx}$ = 0,1 W, $L$ = 64 byte payload, $R_b$ = 250 kbps (IEEE 802.15.4), dan *duty cycle* 2%, lifetime baterai mencapai 240 siklus — cukup untuk 2–3 tahun operasi.

### 2.4 Statistik Proses dan *Control Chart* Multivariat

WSN memungkinkan konstruksi *Moving Window PCA* (MWPCA) yang memantau koherensi spasial 50+ variabel simultan:

$$T^2 = \mathbf{x}^T \mathbf{S}^{-1} \mathbf{x} \sim \frac{p(n-1)}{n-p} F_{p,n-p,\alpha}$$

dengan $T^2$ sebagai *Hotelling statistic*, $\mathbf{x}$ vektor variabel terstandarisasi, $\mathbf{S}$ matriks kovarians, dan $F$ distribusi F. Pelanggaran $T^2 > T^2_{\alpha}$ mengindikasikan *out-of-control condition* dalam hitungan detik—kecepatan yang tidak mungkin dicapai sensor hard-wired.

## 3. Metodologi Rekayasa & SOP Implementasi WSN Liofilisasi

Meza‐Galvan, Strongrich & Darwish (2026) menyusun prosedur implementasi tujuh fase:

1. **Site Survey & RF Mapping**: Pemetaan 3D ruang chamber menggunakan spectrum analyzer dan *heatmap generator*; identifikasi blind spot propagasi RF.
2. **Sensor Node Calibration**: Setiap node dikalibrasi terhadap *National Institute of Standards and Technology* (NIST)-traceable reference di rentang −50°C hingga +50°C, dengan *expanded uncertainty* (k=2) ≤ 0,15 K.
3. **Network Topology Deployment**: Arsitektur *mesh* 3-hop maksimum, gateway tunggal di dinding chamber dengan *hermetic RF feedthrough* berbasis isolator kaca Corning 7070.
4. **IQ/OQ/PQ Qualification**: Instalasi, operasional, dan performance qualification mengikuti GAMP 5 dan ASTM E2503 untuk *thermal mapping*.
5. **Data Integration Layer**: Koneksi ke *Manufacturing Execution System* (MES) via OPC UA, dengan *edge computing* pada gateway untuk reduksi data 10:1.
6. **Soft Sensor Fusion**: Penggabungan pengukuran langsung dengan model *first-principles* sublimasi untuk menghasilkan *virtual sensor* parameter kritis seperti $R_p$ dan $K_v$ (resistance vial).
7. **Continuous Verification**: Bulanan *calibration drift check* dan tahunan *re-qualification* penuh sesuai 21 CFR Part 11.

Artusio, Barresi & Pisano (2026) menambahkan bahwa integrasi WSN dengan **Tunable Diode Laser Absorption Spectroscopy (TDLAS)** untuk monitoring $H_2O$ vapor pada 1397 nm memungkinkan *closed-loop control* terhadap $P_c$ selama primary drying, menurunkan variabilitas antar-batch dari σ = 1,8°C menjadi 0,4°C pada $T_p$.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Liofilizer skala pilot dengan 1.200 vial 10 mL berisi larutan antibodi monoklonal 50 mg/mL. Siklus: freezing pada −40°C (2 jam), primary drying pada $P_c$ = 10 Pa dan $T_s$ = −10°C.

**Langkah 1 – Perhitungan Resistansi Produk Kering Awal:**
Parameter tipikal: $R_{p,0}$ = 0,0035 m²·K/W; dengan laju sublimasi awal $N_m$ = 1,2 g/m²·s, fluks panas:

$$q = \frac{T_s - T_p}{R_{p,0}} = \frac{(-10) - (-32)}{0,0035} = 6.286 \text{ W/m}^2$$

**Langkah 2 – Verifikasi dengan Energi Sublimasi:**
$$N_m = \frac{q}{\Delta H_s} = \frac{6.286}{2.838.000} = 2,21 \times 10^{-3} \text{ kg/m}^2\text{s} = 2,21 \text{ g/m}^2\text{s}$$

Terdapat perbedaan dengan asumsi awal (1,2 g/m²·s) karena $T_p$ aktual perlu diestimasi melalui *inverse problem* dari data WSN, bukan diasumsikan tetap.

**Langkah 3 – Perhitungan Link Budget RF:**
Parameter: $P_t$ = +10 dBm, $G_t = G_r$ = +2 dBi, $f$ = 2,45 GHz ($\lambda$ ≈ 0,122 m), $d$ = 1,2 m:

$$L_{FS} = 20\log_{10}\left(\frac{4\pi \cdot 1,2}{0,122}\right) = 20\log_{10}(123,5) = 41,8 \text{ dB}$$

Total rugi dengan $\sigma$ = 18 dB (multipath vakum): $41,8 + 18 = 59,8$ dB. Daya terima: $P_r = 10 + 2 + 2 - 59,8 = -45,8$ dBm. Sensitivitas receiver tipikal −95 dBm → margin positif 49,2 dB ✓ (margin aman ≥ 20 dB sesuai IEEE 802.15.4).

**Langkah 4 – Estimasi Yield Improvement:**
Baseline yield = 91%, variabilitas $T_p$ σ = 1,8°C. Dengan WSN + soft sensor, variabilitas turun ke 0,4°C. Hubungan yield–variabilitas (empiris lini produksi Meza‐Galvan): $\Delta Y \approx 4,5 \cdot \Delta\sigma_{T_p}$ → peningkatan yield:

$$\Delta Y = 4,5 \times (1,8 - 0,4) = 6,3\%$$

Pada nilai produk USD 12.000/vial dan batch 1.200 vial: tambahan pendapatan per batch = $1.200 \times 12.000 \times 0,063 = $90.720. Dengan 50 batch/tahun: **USD 4,5 juta peningkatan revenue tahunan**, dengan payback investasi WSN USD 180.000 dalam waktu < 2 bulan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Agenda Riset Lanjutan

### 5.1 Keterbatasan Metodologi

Meza‐Galvan et al. sendiri mengakui tiga limitasi utama: (i) **battery depletion risk** pada siklus panjang > 72 jam dengan sampling > 5 Hz, (ii) **sensor drift** pada paparan radiasi gamma sterilisasi > 25 kGy yang memengaruhi akurasi thermistor NTC, dan (iii) **RF interference** dari motor kompresor dan sistem CIP/SIP yang dapat meningkatkan packet loss hingga 3–7%. Artusio, Barresi & Pisano (2026) menambahkan bahwa integrasi WSN dengan model *Population Balance* masih dalam tahap validasi untuk menangkap heterogenitas nukleasi es antar vial.

### 5.2 Aplikasi Lintas Sektor

Arsitektur WSN yang sama dapat di-*transfer* ke: (a) **industri makanan** untuk *freeze-drying* kopi, buah, dan probiotik dengan compliance HACCP; (b) **industri bioteknologi** untuk preservasi sel punca dan jaringan biologis (*cryopreservation*); (c) **industri kimia halus** untuk drying k