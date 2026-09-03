# 1676 — Jaringan Sensor Nirkabel untuk Liofilisasi: Rekayasa Pemantauan Proses Kritis Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk biologis sensitif-termal seperti protein monoklonal, vaksin mRNA, dan antibiotik beta-laktam. Proses ini melibatkan tiga tahap berurutan—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang masing-masing memerlukan kontrol parameter proses yang sangat presisi untuk mempertahankan kualitas produk akhir (Meza‐Galvan, Strongrich, & Darwish, 2026). Menurut Meza-Galvan et al. (2026), industri farmasi global menghadapi kerugian tahunan mencapai USD 1,5–2 miliar akibat *batch failure* pada operasi liofilisasi, di mana lebih dari 60% kasus kegagalan disebabkan oleh deviasi suhu rak vial yang tidak terdeteksi secara real-time. Keterbatasan metode konvensional berupa termokopel berkabel (*wired thermocouples*) yang hanya mampu memantau kurang dari 1% dari total vial dalam satu *batch* menciptakan *blind spot* signifikan yang menurunkan *process capability index* (Cpk) menjadi di bawah 1,0—jauh dari standar FDA Process Validation Guidance yang mensyaratkan Cpk ≥ 1,33.

Urgensi penerapan Wireless Sensor Networks (WSN) dalam liofilisasi semakin meningkat seiring kompleksitas molekul biofarmasi modern dan tren *personalized medicine* yang menuntut format vial kecil dalam jumlah besar per siklus produksi. Meza-Galvan et al. (2026) menegaskan bahwa arsitektur WSN berbasis protokol IEEE 802.15.4/ZigBee mampu mengatasi keterbatasan instrumentasi berkabel dengan menyediakan cakupan *spatial resolution* suhu vial hingga 100% populasi, sekaligus mempertahankan integritas ruang steril melalui eliminasi *feedthrough* kabel yang menjadi sumber kontaminasi potensial. Secara ekonomis, investasi retrofit WSN pada liofilizer skala produksi (kapasitas 50.000 vial/*batch*) memberikan *payback period* rata-rata 14–18 bulan melalui pengurangan *reject rate* sebesar 35–45% dan peningkatan *yield* produk sebesar 5–8% (Artusio, Barresi, & Pisano, 2026). Kedua sumber literatur ini secara konsisten menyoroti bahwa integrasi WSN bukan sekadar upgrade instrumentasi, melainkan pilar fundamental dalam implementasi *Pharmaceutical Quality System* (PQS) berbasis ICH Q10 dan *Industry 4.0* paradigm untuk fasilitas farmasi masa depan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Laju Sublimasi dan Persamaan Washburn

Laju sublimasi es pada tahap *primary drying* dikuantifikasi melalui hukum Darcy yang dimodifikasi dengan persamaan resistansi massa:

$$\dot{m} = \frac{A \cdot (P_{ice}(T_s) - P_c)}{R_p}$$

di mana $\dot{m}$ adalah laju sublimasi (kg/s), $A$ adalah luas penampang vial (m²), $P_{ice}(T_s)$ adalah tekanan uap es pada suhu sublimasi $T_s$, $P_c$ adalah tekanan ruang, dan $R_p$ adalah tahanan transfer massa cake kering (Pa·m²·s/kg). Tekanan uap es dihitung menggunakan persamaan Washburn yang telah dimodifikasi:

$$\log_{10}(P_{ice}) = -\frac{2867,28}{T_s(K)} + 9,62131$$

dengan $P_{ice}$ dalam Torr dan $T_s$ dalam Kelvin (Meza-Galvan et al., 2026). Persamaan ini valid untuk rentang suhu −80°C hingga 0°C.

### 2.2 Transfer Panas Vial

Mekanisme transfer panas dari rak ke vial dimodelkan melalui tiga kontribusi: konduksi gas pada tekanan rendah, konduksi antarpermukaan vial-rak, dan radiasi:

$$q = K_v \cdot (T_r - T_s) + \sigma \cdot \varepsilon \cdot (T_r^4 - T_s^4)$$

di mana $K_v$ adalah koefisien transfer panas efektif vial (W/m²·K) yang bergantung pada tekanan ruang, $T_r$ adalah suhu rak, $T_s$ adalah suhu sublimasi, $\sigma = 5{,}67 \times 10^{-8}$ W/m²·K⁴ adalah konstanta Stefan-Boltzmann, dan $\varepsilon$ adalah emisivitas efektif.

### 2.3 Konsumsi Energi Node Sensor Nirkabel

Total energi node WSN selama satu siklus liofilisasi (rata-rata 48–72 jam) dimodelkan sebagai:

$$E_{total} = N_{node} \cdot \left( E_{sense} + E_{proc} + E_{tx} \cdot t_{tx} + E_{rx} \cdot t_{rx} + E_{sleep} \cdot t_{sleep} \right)$$

di mana $N_{node}$ adalah jumlah node sensor, $E_{sense}$ ≈ 0,5–2,0 mJ per siklus pengukuran (akuisisi RTD), $E_{proc}$ ≈ 3–8 mJ untuk pemrosesan sinyal, dan $E_{tx}$ ≈ 50–100 mJ per transmisi pada daya −10 dBm (Meza-Galvan et al., 2026).

### 2.4 Deteksi Endpoints Primary Drying

Metode *Comparative Pressure Measurement* (CPM) menggunakan perbedaan pembacaan sensor Pirani dan kapasitif untuk mendeteksi berakhirnya sublimasi:

$$\Delta P_{ratio} = \frac{P_{Pirani} - P_{capacitive}}{P_{capacitive}}$$

Nilai $\Delta P_{ratio}$ turun mendekati nol ketika es telah habis tersublimasi (Meza-Galvan et al., 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Sensor Nirkabel

Implementasi WSN pada liofilizer mengikuti topologi *mesh hybrid* dengan empat lapisan fungsional:

1. **Lapisan Persepsi**: Node sensor miniatur (±2,5 cm diameter, <15 g) terintegrasi dengan RTD kelas PT1000 (akurasi ±0,1°C) dan transduser tekanan MEMS, ditempatkan di dalam setiap vial sampel menggunakan *holder* steril Food-Grade 316L stainless steel.
2. **Lapisan Komunikasi**: Protokol ZigBee PRO (IEEE 802.15.4) beroperasi pada pita ISM 2,4 GHz dengan skema enkripsi AES-128 sesuai standar IEC 62443 untuk keamanan siber farmasi.
3. **Lapisan Edge Gateway**: Aggregator data berbasis ARM Cortex-M7 yang melakukan *data buffering*, *time-stamping* (sinkronisasi NTP ±10 ms), dan pra-pemrosesan.
4. **Lapisan Analitik Cloud/SCADA**: Platform historis (contoh: OSIsoft PI, Siemens SIPAT) yang menjalankan algoritma *Machine Learning* untuk deteksi anomali.

### 3.2 SOP Deployment dan Kalibrasi

```
┌─────────────────────────────────────────────────┐
│  Pra-Deployment                                  │
│  ├─ Validasi ruang steril (ISO 14644-1 Kelas 5)  │
│  ├─ Kalibrasi RTD terhadap standar ITS-90        │
│  └─ Uji transmitansi RF dalam ruang bertekanan   │
├─────────────────────────────────────────────────┤
│  Saat Loading Vials                              │
│  ├─ Penempatan node pada posisi vial terpilih    │
│  ├─ Aktivasi pairing otomatis via NFC            │
│  └─ Verifikasi cakupan mesh (>98% link quality)  │
├─────────────────────────────────────────────────┤
│  Selama Siklus                                    │
│  ├─ Sampling 1 Hz (freezing), 0,1 Hz (drying)    │
│  ├─ Threshold alarm: T_s > -28°C (primary)       │
│  └─ Auto-transition secondary drying via CPM      │
├─────────────────────────────────────────────────┤
│  Post-Cycle                                       │
│  ├─ Sterilisasi ulang node (VHP atau autoclave)  │
│  ├─ Battery health diagnostics                   │
│  └─ Re-kalibrasi berkala (tiap 50 siklus)        │
└─────────────────────────────────────────────────┘
```

### 3.3 Standar Regulasi yang Dipenuhi

- **FDA 21 CFR Part 11**: Validasi rekaman elektronik dan tanda tangan digital pada *audit trail* node.
- **EU GMP Annex 11**: Integritas data dan validasi sistem komputer.
- **ASTM E2503-13**: Praktik standar liofilisasi biologis.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Sistem

Sebuah fasilitas produksi biofarmasi mengoperasikan liofilizer **Lyostar 3** (BOC Edwards) dengan konfigurasi sebagai berikut:

- **Kapasitas rak**: 7 rak × 1.500 vial ISO 2R = 10.500 vial/*batch*
- **Vial ISO 2R**: diameter dalam $d$ = 14,3 mm, luas penampang $A = \pi (0{,}00715)^2 = 1{,}606 \times 10^{-4}$ m²
- **Set-point proses**: $T_r$ = −25°C (primary drying), $P_c$ = 100 mTorr = 13,33 Pa
- **Node WSN**: 0,5% dari total vial = 53 node aktif (1 node per 200 vial, distribusi stratifikasi acak)

### 4.2 Perhitungan Laju Sublimasi Per Vial

Hitung tekanan uap es pada $T_s$ = −35°C = 238,15 K:

$$\log_{10}(P_{ice}) = -\frac{2867{,}28}{238{,}15} + 9{,}62131 = -12{,}0409 + 9{,}62131 = -2{,}4196$$

$$P_{ice} = 10^{-2,4196} = 3{,}807 \times 10^{-3} \text{ Torr} = 0{,}5076 \text{ Pa}$$

Driving force sublimasi:

$$\Delta P = P_{ice} - P_c = 0{,}5076 - 13{,}33 = \text{negatif (vial terlalu dingin)}$$

Catatan: Karena $\Delta P$ bernilai negatif, sistem tidak akan menyublimkan. Set-point perlu dinaikkan ke $T_s$ = −30°C untuk menghasilkan $P_{ice}$ ≈ 0,86 Pa, sehingga:

$$\Delta P = 0{,}86 - 0{,}0533 = 0{,}807 \text{ Pa}$$

Dengan $R_p$ tipikal cake = 5.000 Pa·m²·s/kg (Artusio et al., 2026):

$$\dot{m} =