# 1532 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti vaksin mRNA, antibodi monoklonal (mAb), dan sediaan protein rekombinan. Dalam konteks *good manufacturing practice* (GMP) sesuai Pedoman Validasi Proses FDA (Process Validation Guidance, 2011) dan ICH Q8/Q9/Q10, proses ini memerlukan pemantauan *real-time* yang presisi terhadap variabel-variabel kritis seperti suhu rak (*shelf temperature*, $T_s$), suhu produk ($T_p$), tekanan ruang ($P_c$), serta laju sublimasi. Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menyoroti bahwa instrumentasi konvensional berbasis termokopel berkabel (*wired thermocouples*) memiliki keterbatasan fundamental: intrusi fisik ke dalam vial menyebabkan distorsi termal yang memicu *localized supercooling*, nucleation tidak seragam, serta formasi *cake* yang tidak homogen. Lebih lanjut, pemasangan probe kabel menghambat skalabilitas lini produksi dan menambah biaya validasi (*validation cost*) yang signifikan.

Urgensi industrialisasi jaringan sensor nirkabel (*Wireless Sensor Networks* — WSN) untuk liofilisasi semakin nyata mengingat permintaan global akan sediaan parenteral steril yang mencapai USD 678 miliar pada 2024 dengan CAGR 8,4% (sumber kutipan konteksual dalam Meza-Galvan *et al.*, 2026). Kapasitas produksi *batch* pada lyophilizer skala industri (misalnya TELSTAR LyoConstellation atau GEA LYOSPARK) mencapai 50.000 vial per siklus, sehingga satu vial yang cacat akibat *product temperature excursion* pada fase sublimasi (*primary drying*) berpotensi menurunkan *yield* hingga 2–5% per batch. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) melengkapi kerangka ini dengan mengemukakan bahwa integrasi WSN, *soft sensors* berbasis model *first-principles*, dan algoritma *machine learning* merupakan pilar *emerging PAT* yang akan merevolusi paradigma kontrol *Quality by Design* (QbD) dalam liofilisasi.

Dari perspektif *Industrial Engineering*, penerapan WSN bukan sekadar isu instrumentasi, melainkan transformasi arsitektur sistem manufaktur: dari sistem *island-of-automation* menuju *cyber-physical production system* (CPPS) yang memenuhi indikator Industry 4.0 — *interoperability*, *real-time capability*, *decentralized decision-making*, dan *service orientation*. Artikel ini menguraikan secara sistematis landasan teoritik, formulasi matematis, metodologi rekayasa, studi kasus kuantitatif, serta evaluasi kritis lintas-sektor terkait adopsi WSN di fasilitas liofilisasi farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa pada Liofilisasi

Meza-Galvan *et al.* (2026) membangun model *quasi-steady-state* berbasis persamaan energi 1-D pada lapisan es yang memisahkan vial dengan rak. Laju perpindahan panas dari rak ke sublimasi front diformulasikan sebagai:

$$q = \frac{T_s - T_b}{R_{total}} = \frac{T_s - T_b}{\frac{1}{K_v} + \frac{l_{dried}}{k_{dried}} + \frac{1}{K_s}}$$

di mana $T_b$ adalah suhu *sublimation interface* (K), $R_{total}$ adalah resistansi termal total (m²·K/W), $K_v$ adalah koefisien transfer panas vial (W/m²K), $l_{dried}$ adalah ketebalan lapisan produk kering (m), $k_{dried}$ adalah konduktivitas termal *dried cake* (W/m·K), dan $K_s$ adalah koefisien transfer panas sisi *shelf* (W/m²K). Untuk vial standar 10 mL dengan $K_v \approx 2{,}5$ W/m²K, $k_{dried} \approx 0{,}025$ W/m·K (mengacu pada nilai tipikal *amorphous matrix* trehalosa), dan $K_s \approx 100$ W/m²K (antara vial-rak dengan *interstitial gas*).

Laju sublimasi massa $\dot{m}$ mengikuti hukum Fick untuk difusi uap air melalui lapisan kering:

$$\dot{m} = \frac{A_p \, (P_i - P_c)}{R_p}$$

dengan $A_p$ luas penampang sublimasi (m²), $P_i$ tekanan uap air pada *sublimation interface* (Pa) — dihitung via persamaan Goff-Gratch atau Murphy-Koop, dan $R_p$ resistansi transfer massa lapisan kering (m²·Pa·s/kg). Resistansi ini merupakan fungsi nonlinier dari $l_{dried}$ dan suhu:

$$R_p = R_{p,0} + \frac{l_{dried}}{k_p(T)}$$

di mana $k_p(T)$ adalah permeabilitas uap air pada lapisan kering, biasanya mengikuti korelasi Arrhenius:

$$k_p(T) = k_{p,0} \, \exp\left(-\frac{E_a}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)\right)$$

dengan $E_a$ energi aktivasi (J/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $T_{ref}$ suhu referensi (biasanya 273 K). Meza-Galvan *et al.* (2026) melaporkan $E_a$ tipikal antara 4.000–8.000 J/mol untuk matriks protein-sakarida.

### 2.2 Arsitektur Jaringan Sensor Nirkabel

WSN untuk liofilisasi terdiri atas tiga lapisan (*tiers*): (i) *sensor node* yang ditempatkan di dalam vial atau pada permukaan vial, (ii) *gateway/router* yang mengumpulkan data di kabinet lyophilizer, dan (iii) *cloud/edge server* untuk analitik PAT. Konsumsi energi *sensor node* mengikuti model:

$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{\alpha}$$

di mana $k$ adalah ukuran paket (bit), $d$ jarak transmisi (m), $E_{elec}$ energi sirkuit elektronika (J/bit), $\epsilon_{amp}$ energi amplifier (J/bit/m²), dan $\alpha$ *path loss exponent* (umumnya 2–4 untuk propagasi dalam ruang bertekanan rendah). Untuk protokol Bluetooth Low Energy (BLE 5.0), $E_{elec} \approx 50$ nJ/bit, sedangkan ZigBee/IEEE 802.15.4 memiliki $E_{elec} \approx 100$ nJ/bit. Masa pakai baterai diestimasi dengan:

$$t_{battery} = \frac{C_{battery}}{\sum_i E_i \cdot f_i}$$

dengan $C_{battery}$ kapasitas baterai (J), $E_i$ energi per operasi (J), dan $f_i$ frekuensi operasi (Hz). Untuk sensor suhu-presisi (±0,1 °C) dengan siklus pengukuran 10 detik, $t_{battery}$ mencapai 240–360 jam pada baterai lithium CR2032 (220 mAh, 3 V) — memadai untuk siklus liofilisasi 48–72 jam.

### 2.3 Estimasi *Sublimation Interface Temperature* via Soft Sensor

Karena sensor nirkabel tidak dapat menyentuh es secara langsung tanpa mengganggu morfologi kristal, model *first-principles* digunakan untuk mengestimasi $T_b$ dari $T_p$ terukur dan $P_c$:

$$T_b = T_p - \frac{\dot{m} \cdot l_{dried}}{k_{dried} \cdot A_p}$$

Pendekatan ini selanjutnya digabung dengan filter Kalman untuk mitigasi noise pengukuran. Artusio *et al.* (2026) menunjukkan bahwa *unscented Kalman filter* (UKF) mengurangi *root mean square error* (RMSE) estimasi $T_b$ hingga 0,4 °C dibandingkan 1,2 °C pada filter linier.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi WSN pada Lini Liofilisasi

```
┌─────────────────────────────────────────────────────────────────┐
│ FASE 1: PERENCANAAN & DESAIN (Pre-Engineering)                  │
│ • QbD Risk Assessment (FMEA) → identifikasi CQAs, CPPs          │
│ • Pilih topologi WSN: star / mesh / hybrid                     │
│ • Pilih protokol: BLE 5.0 / ZigBee 3.0 / LoRaWAN               │
│ • Validasi kalibrasi sensor terhadap NIST traceable standard   │
└───────────────────────────┬─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ FASE 2: INSTALASI & QUALIFIKASI (IQ/OQ)                         │
│ • Peletakan sensor vial di posisi strategis (edge, center)     │
│ • Pairing node ↔ gateway (enkripsi AES-128, FDA 21 CFR Part 11)│
│ • Verifikasi cakupan sinyal RF dalam vacuum chamber (< 100 Pa) │
│ • Thermal mapping kosong (empty chamber) ± 1 °C uniformity     │
└───────────────────────────┬─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ FASE 3: OPERASIONAL & PATROL (PQ & Routine Monitoring)          │
│ • Sampling data 10–30 detik via edge gateway                   │
│ • Real-time dashboard: T_s, T_p, P_c, R_p, sublimation rate    │
│ • Automated alert: T_p > T_g' + 2 °C → cycle abort             │
│ • Model-based MPC (Model Predictive Control) untuk T_s         │
└───────────────────────────┬─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ FASE 4: ANALISIS PASCA-BATCH (CBA & Continuous Improvement)     │
│ • Statistical Process Control (SPC) → Cpk per CQA              │
│ • Multivariate analysis (PCA) untuk batch similarity           │
│ • Update parameter Cpk → Knowledge Management (KPI dashboard)  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Pemasangan Sensor Vial Nirkabel

Meza-Galvan *et al.* (2026) merekomendasikan prosedur 7-langkah untuk mempertahankan sterilitas dan integritas vial:

1. **Sanitasi vial**: vials dicuci dengan *water for injection* (WFI) dan disterilisasi pada 121 °C, 20 menit sesuai USP <71>.
2. **Inokulasi sensor**: sensor nirkabel (dimensi ≤ 6 mm × 2 mm) dimasukkan ke dalam vial *after filling* melalui *stoppering position* dengan *aseptic technique* di *ISO 5 laminar airflow hood*.
3. **Penempatan vial sentinel**: vial dengan sensor diletakkan pada *edge*, *center*, dan *corner* rak untuk merepresentasikan profil termal homogen (*spatial coverage*).
4. **Pairing protokol**: aktivasi node, transmisi *advertising packet*, dan asosiasi ke gateway dengan *cryptographic key* unik.
5. **Pre-cycle baseline**: akuisisi 15 menit baseline pada suhu ruang sebelum *freezing ramp*.
6. **In-cycle monitoring**: transmisi data kontinu dengan *duty cycle* yang dapat dikonfigurasi (default 5 detik selama *primary drying*, 30 detik selama *secondary drying*).
7. **Post-cycle retrieval**: vial sensor dipisahkan untuk sterilisasi ulang sensor sebelum *re-use* (sensor harusnya *re-usable* hingga 50 siklus untuk ROI optimal).

### 3.3 Standar Regulasi yang Dipenuhi

- **FDA 21 CFR Part 11** untuk *electronic records and signatures* (autentikasi, audit trail, enkripsi).
- **USP <1207>** untuk *container closure integrity* (sensor harus *non-leachable*).
- **ISO 13485** untuk *medical device quality management* (sensor sebagai *accessory*).
- **ASTM E2503** untuk *standard practice for QbD*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Desk