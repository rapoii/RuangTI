# 1548 — Jaringan Sensor Nirkabel (WSN) untuk Proses Liofilisasi Farmasi: Integrasi Pemantauan Proses Waktu Nyata dalam Manufaktur Biofarmasi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel dalam Liofilisasi Farmasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, antibodi, vaksin mRNA, dan antibiotik golongan β-laktam. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), lebih dari 50% produk biofarmasi baru yang disetujui dalam satu dekade terakhir memerlukan proses liofilisasi, dengan total nilai pasar global lebih dari USD 6,8 miliar per tahun dan tingkat pertumbuhan tahunan majemuk (CAGR) sekitar 8,2%. Proses ini beroperasi pada tiga tahapan berurutan — pembekuan (freezing), pengeringan primer (primary drying melalui sublimasi), dan pengeringan sekunder (secondary drying melalui desorpsi) — yang masing-masing memerlukan kendali presisi terhadap suhu rak (*shelf temperature*), tekanan ruang (*chamber pressure*), dan suhu produk (*product temperature*).

Dalam konteks Teknik Industri, proses liofilisasi menimbulkan tantangan rekayasa sistem yang unik. Pertama, biaya satu siklus produksi tunggal pada lyophilizer industri skala besar (kapasitas 40.000–100.000 vial) dapat mencapai USD 15.000–40.000, sehingga kegagalan satu batch akibat *out-of-specification* (OOS) memiliki dampak finansial yang signifikan. Kedua, instrumentation konvensional berbasis thermocouple berkabel (*wired thermocouples*) memiliki keterbatasan inheren: jumlah titik ukur terbatas (umumnya 4–16 kanal per siklus), risiko kontaminasi pada sambungan kabel terhadap lingkungan aseptik kelas ISO 5, serta mobilitas rendah saat instalasi ulang untuk *changeover* produk. Meza-Galvan dkk. (2026) menekankan bahwa jaringan sensor nirkabel (Wireless Sensor Networks/WSN) muncul sebagai solusi transformatif yang memungkinkan *in-situ*, *real-time*, dan *multi-point* monitoring dengan densitas sensor 10–50 kali lebih tinggi dibanding sistem konvensional.

Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) melengkapi perspektif ini dengan menunjukkan bahwa WSN merupakan komponen integral dari arsitektur *Process Analytical Technology* (PAT) emerging yang bertujuan membangun *Quality by Design* (QbD) framework sesuai pedoman FDA 2004 dan ICH Q8(R2). Adopsi WSN memungkinkan implementasi *soft-sensor* dan *digital twin* untuk liofilizer, sehingga mempercepat proses *scale-up* dari skala laboratorium ke skala manufaktur komersial serta menekan jumlah *design space* verification cycle yang dibutuhkan. Dari sisi optimasi rantai pasok, integrasi WSN menurunkan *lead time* validasi proses dari 18–24 bulan menjadi 9–12 bulan, dengan estimasi *return on investment* (ROI) 220–340% dalam 5 tahun untuk perusahaan Contract Development and Manufacturing Organization (CDMO) berukuran menengah.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kinetika Liofilisasi: Model Transfer Panas dan Massa

Meza-Galvan dkk. (2026) merangkum model *heat and mass transfer* satu dimensi yang menjadi tulang punggung kendali proses liofilisasi. Laju sublimasi pada antarmuka es-product di setiap vial dapat dinyatakan sebagai:

$$\frac{dm}{dt} = \frac{A_p \cdot (P_{w,i} - P_{w,c})}{R_p}$$

di mana:
- $dm/dt$ = laju sublimasi massa (kg/s)
- $A_p$ = luas penampang internal vial (m²)
- $P_{w,i}$ = tekanan uap air pada antarmuka sublimasi (Pa)
- $P_{w,c}$ = tekanan uap air parsial di ruang pengering (Pa)
- $R_p$ = resistansi transfer massa pada *dried cake* (Pa·s·m²/kg)

Fluks panas dari rak ke produk melalui dinding vial dan lapisan *dried cake* mengikuti hukum Fourier:

$$Q = \frac{A_v \cdot K_v \cdot (T_{shelf} - T_b)}{L_{cake}} + A_v \cdot K_c \cdot (T_{shelf} - T_b)$$

dengan $K_v$ dan $K_c$ berturut-turut adalah konduktivitas termal kaca vial dan *cake*, $T_b$ suhu sublimasi antarmuka, dan $L_{cake}$ tebal lapisan kering yang tumbuh seiring waktu. Energi untuk sublimasi memenuhi:

$$Q = \Delta H_s \cdot \frac{dm}{dt}$$

di mana $\Delta H_s \approx 2838$ kJ/kg adalah entalpi sublimasi es pada suhu $-30$°C.

### 2.2. Model Konsumsi Energi Jaringan Sensor Nirkabel

Untuk evaluasi umur baterai node WSN, model konsumsi energi mengikuti formulasi dari Artusio dkk. (2026) yang menyempurnakan framework First-Order Radio Model:

$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

$$E_{rx}(k) = E_{elec} \cdot k$$

dengan parameter:
- $k$ = ukuran paket data (bit), tipikal 128 bit per paket suhu
- $d$ = jarak transmisi (m), tipikal 0,5–3 m dalam ruang lyophilizer
- $n$ = path loss exponent, $n \approx 1,8$–$2,5$ untuk propagasi *line-of-sight* dalam ruang berinsulasi stainless steel
- $E_{elec}$ = energi elektronika per bit $\approx 50$ nJ/bit
- $\epsilon_{amp}$ = koefisien amplifier $\approx 100$ pJ/bit/m²

Total energi per siklus transmisi lengkap menjadi:

$$E_{cycle} = E_{tx} + E_{rx} + E_{sense} + E_{sleep}$$

Umur baterai dihitung sebagai:

$$T_{life} = \frac{C_{battery} \cdot V_{batt}}{\bar{P}_{cycle} \cdot f_{sample}}$$

dengan $C_{battery}$ kapasitas baterai (mAh), $V_{batt}$ tegangan nominal, $\bar{P}_{cycle}$ daya rata-rata per siklus, dan $f_{sample}$ frekuensi sampling.

### 2.3. Path Loss Model untuk Propagasi RF dalam Lyophilizer

Untuk memprediksi kualitas link WSN dalam ruang tertutup lyophilizer stainless steel, digunakan model log-distance path loss:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_{\sigma}$$

di mana $X_{\sigma}$ adalah variabel acak Gaussian zero-mean dengan standar deviasi $\sigma$ untuk merepresentasikan efek *multipath fading*. Meza-Galvan dkk. (2026) melaporkan bahwa pada frekuensi 2,4 GHz (standar IEEE 802.15.4/ZigBee), path loss eksponent dalam lyophilizer berkisar 2,1–2,7 tergantung konfigurasi rak vial dan shield thermal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem WSN untuk Lyophilisasi

Meza-Galvan dkk. (2026) mengusulkan arsitektur tiga lapis (*three-tier architecture*) untuk implementasi WSN dalam lyophilizer industri:

**Tier 1 — Sensing Layer:** Node sensor terdistribusi (tipikal 16–64 node per lyophilizer) yang ditempatkan pada (a) posisi strategis rak vial (center, edge, corner), (b) thermocouple pada posisi *bottom-center* vial untuk mengukur $T_b$, dan (c) sensor tekanan nirkabel (Pirani dan *capacitance manometer*) pada port chamber. Sensor suhu menggunakan RTD kelas platinum PT100 atau termistor NTC dengan akurasi $\pm 0,1$°C pada $-40$°C hingga $+60$°C.

**Tier 2 — Network Layer:** Topologi *mesh* menggunakan protokol IEEE 802.15.4/ZigBee PRO atau WirelessHART (standar IEC 62591) dengan *time-synchronized channel hopping* (TSCH) untuk mitigasi interferensi multi-path. Gateway berfungsi sebagai *coordinator node* yang melakukan agregasi data dan forwarding ke sistem SCADA/DCS.

**Tier 3 — Application Layer:** Platform PAT berbasis *historian* (contoh: OSIsoft PI, Siemens SIPAT) yang mengimplementasikan *multivariate statistical process control* (MSPC) dengan model PCA atau PLS untuk deteksi anomali *real-time*.

### 3.2. Diagram Alir SOP Implementasi

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: PRE-INSTALLATION QUALIFICATION (IQ/OQ)              │
│ • Verifikasi sertifikat kalibrasi traceable NIST (ISO 17025)│
│ • Site survey RF: path loss mapping dengan vector network  │
│   analyzer (VNA) pada 2,4 GHz                                │
│ • Thermal mapping kosong (empty chamber) ± 1°C uniformity   │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: INSTALASI SENSOR & JARINGAN                          │
│ • Pemasangan node pada tray vial sesuai Design of           │
│   Experiments (DoE) — minimal 3^2 faktorial untuk           │
│   positioning study                                         │
│ • Pairing node dengan gateway, validasi RSSI > -75 dBm     │
│ • Pengujian Packet Delivery Ratio (PDR) target ≥ 99,5%    │
└──────────────────────┬──────────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: PROCESS PERFORMANCE QUALIFICATION (PQ)               │
│ • Tiga siklus liofilisasi placebo (5% sucrose) dengan      │
│   Design Space terdefinisi                                  │
│ • Validasi akurasi suhu produk: deviasi < 0,5°C vs.       │
│   thermocouple berkabel reverensi                           │
│ • Verifikasi cycle time dan yield produk sesuai CQA        │
└──────────────────────┬──────────────────────────────────────┘
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
