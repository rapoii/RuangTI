# 2700 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Pengendalian Proses Kritis Beku-Kering

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau freeze-drying merupakan unit operasi kritis dalam industri biofarmasi untuk menstabilkan produk biologis bernilai molekuler tinggi seperti antibodi monoklonal, mRNA vaccine, dan protein rekombinan yang rentan terhadap degradasi termal. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), lebih dari 50% produk biofarmasi baru yang disetujui FDA membutuhkan proses liofilisasi, dengan nilai pasar global yang diproyeksikan melampaui USD 8,7 miliar pada 2028. Proses ini melibatkan tiga tahap utama—*freezing* (pembekuan), *primary drying* (sublimasi pada tekanan rendah), dan *secondary drying* (desorpsi)—yang masing-masing memiliki jendela operasional sempit di mana suhu produk harus dijaga di bawah *collapse temperature* ($T_c$) atau *glass transition temperature* ($T_g'$) untuk mempertahankan struktur cake yang porous dan aktivitas farmakologis.

Urgensi utama dalam konteks industri adalah *batch-to-batch variability* yang masih tinggi (rata-rata Cpk ≈ 0,85), yang mengarah pada *reject rate* 8–15% pada lini produksi biologi. Meza-Galvan et al. (2026) menekankan bahwa metode monitoring konvensional berbasis thermocouple berkabel (*wired thermocouples*) memiliki keterbatasan signifikan: (1) invasifitas fisik yang menciptakan jalur kebocoran termal (*thermal leakage path*), (2) jumlah titik pengukuran terbatas (umumnya 3–5 titik per batch), (3) tidak mampu melakukan pemetaan gradien suhu 3D secara *real-time*, dan (4) downtime yang tinggi untuk kalibrasi manual yang rata-rata memerlukan 45–90 menit per chamber.

Solusi yang diajukan dalam bab tersebut adalah **Wireless Sensor Networks (WSN)** berbasis teknologi *surface acoustic wave* (SAW), RFID pasif, dan transceiver Sub-GHz yang mampu beroperasi dalam lingkungan ruang vakum dengan tekanan 0,01–0,1 mbar, suhu -50 °C hingga +40 °C, dan paparan uap air sublimasi. Pendekatan ini selaras dengan kerangka **Process Analytical Technology (PAT)** yang diinisasi FDA sejak 2004, yang menuntut monitoring *real-time* terhadap *Critical Process Parameters* (CPPs) dan *Critical Quality Attributes* (CQAs). Senada dengan itu, Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) mengkategorikan WSN sebagai salah satu *emerging technologies* paling disruptif yang memungkinkan transisi dari *batch release* tradisional menuju *real-time release* (RTR), sekaligus mendukung paradigma **Quality by Design (QbD)** melalui *design space* yang lebih terdefinisi secara empiris.

Secara ekonomis, investasi retrofit WSN pada chamber liofilisasi skala industri (kapasitas 200 L) memerlukan modal sekitar USD 18.000–35.000, namun menghasilkan *return on investment* (ROI) dalam 14–22 bulan melalui pengurangan scrap, peningkatan *first-pass yield* menjadi ≥ 96%, dan kepatuhan terhadap *Annex 1* GMP Eropa yang semakin ketat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Sublimasi

Laju sublimasi es pada tahap *primary drying* dikendalikan oleh resistansi produk ($R_p$) dan beda tekanan uap air antara permukaan es dan ruang sublimasi. Persamaan *primary drying rate* klasik dari Pikal (1985) yang diadopsi Meza-Galvan et al. (2026) adalah:

$$\frac{dm}{dt} = \frac{P_{ice}(T_p) - P_c}{R_p}$$

dengan $dm/dt$ adalah laju sublimasi (kg/s), $P_{ice}(T_p)$ adalah tekanan uap es pada suhu produk $T_p$ (Pa), $P_c$ adalah tekanan ruang chamber (Pa), dan $R_p$ adalah resistansi produk (Pa·s/kg). Resistansi $R_p$ bergantung pada ketebalan lapisan kering $L_d$:

$$R_p = R_{p,0} + \frac{A_1 \cdot L_d}{A_2}$$

dengan $A_1$ dan $A_2$ adalah parameter empiris yang merepresentasikan struktur cake.

Fluks panas dari rak menuju vial diberikan oleh persamaan:

$$Q = K_v \cdot A_v \cdot (T_{shelf} - T_p)$$

dengan $K_v$ adalah koefisien transfer panas vial (W/m²K), $A_v$ adalah luas penampang, dan $T_{shelf}$ adalah suhu rak.

### 2.2 Model Propagasi Sinyal Nirkabel dalam Lingkungan Vakum dan Logam

Lingkungan liofilizer sangat menantang untuk propagasi sinyal RF karena dominasi material baja tahan karat dan aluminium. Model **Friis transmission equation** yang dimodifikasi untuk propagasi dalam ruang tertutup:

$$P_r(d) = P_t + G_t + G_r + 20 \log_{10}\left(\frac{\lambda}{4\pi d}\right) - L_{metal}$$

dengan $P_r$ adalah daya terima (dBm), $P_t$ daya transmisi (dBm), $G_t, G_r$ penguatan antena, $\lambda$ panjang gelombang, $d$ jarak, dan $L_{metal}$ adalah rugi-rugi penetrasi dinding logam yang merupakan fungsi eksponensial:

$$L_{metal} = L_0 \cdot e^{\alpha \cdot f}$$

dengan $L_0$ sekitar 20–35 dB untuk stainless steel 304 dan $\alpha$ adalah koefisien atenuasi spesifik material pada frekuensi $f$.

### 2.3 Model Konsumsi Energi Sensor Node

Baterai node sensor harus bertahan minimal 72 jam (durasi batch liofilisasi tipikal). Dengan kapasitas baterai $C$ (mAh), siklus pengukuran interval $\Delta t$ (detik), dan konsumsi per siklus $I_{cycle}$ (mAh):

$$T_{lifetime} = \frac{C}{I_{sleep} + \frac{I_{cycle}}{\Delta t} + I_{tx} \cdot \tau_{tx}}$$

dengan $I_{sleep}$, $I_{cycle}$, $I_{tx}$ berturut-turut adalah arus saat tidur, pengukuran, dan transmisi; $\tau_{tx}$ adalah durasi transmisi aktif.

### 2.4 Kriteria Stabilitas dan Kualitas Produk

Batas kritis suhu produk dihitung menggunakan pendekatan **Stickiness-Collapse** dengan menyamakan viskositas larutan dengan nilai ambang $\eta_{crit} \approx 10^4$–$10^6$ Pa·s. Hubungan suhu–viskositas mengikuti persamaan Williams-Landel-Ferry (WLF):

$$\log_{10}\left(\frac{\eta}{\eta_g}\right) = \frac{-C_1 (T - T_g')}{C_2 + (T - T_g')}$$

dengan $C_1, C_2$ adalah konstanta universal, dan $T_g'$ adalah suhu transisi gelas.

### 2.5 Statistical Process Control untuk Data WSN

Untuk CAPA (Corrective and Preventive Action) berbasis data WSN, digunakan indeks kapabilitas proses:

$$C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$

dengan $\mu$ rata-rata proses, $\sigma$ simpangan baku, dan $USL$, $LSL$ batas spesifikasi atas/bawah (misalnya suhu vial kritis $-32 \pm 1,5$ °C untuk produk monoclonal antibody).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN pada liofilizer mengikuti SOP bertahap yang distandarkan oleh Meza-Galvan et al. (2026):

**Tahap 1 – Site Survey & Karakterisasi RF Chamber.** Pemetaan rugi-rugi propagasi menggunakan *vector network analyzer* (VNA) pada 433 MHz, 868 MHz, dan 2,4 GHz. Pengukuran $L_{metal}$ dilakukan pada 36 lokasi grid 3D dalam chamber kosong.

**Tahap 2 – Desain Arsitektur Jaringan.** Topologi *star-mesh hybrid* dengan satu koordinator (gateway) di luar chamber dan node sensor di dalam vial. Jumlah node: 24–48 per chamber (1 node per vial pada tray kritis, 1 node per 4 vial pada tray rutin). Protokol: IEEE 802.15.4e (TSCH) untuk determinisme.

**Tahap 3 – Instalasi & Validasi IQ/OQ/PQ.** Instalasi mengikuti protokol Installation Qualification (IQ), Operational Qualification (OQ), dan Performance Qualification (PQ) sesuai FDA Process Validation Guidance (2011) dan EU GMP Annex 15.

**Tahap 4 – Kalibrasi Multi-titik.** Kalibrasi silang antara thermocouple berkabel (referensi) dan node WSN pada 5 titik suhu (-50 °C, -30 °C, 0 °C, +25 °C, +40 °C). Akurasi target ≤ ±0,5 °C.

**Tahap 5 – Integrasi ke SCADA/Historian.** Data WSN diintegrasikan ke PI System atau OPC UA server dengan *latency* < 2 detik. Alarm di-set berdasarkan *moving window* Statistik ± 3σ.

**Tahap 6 – Pemeliharaan Preventif.** Penggantian baterai setiap 50 batch, *re-calibration* setiap 100 batch atau 6 bulan, audit node berkala untuk deteksi *drift*.

Diagram alir logika keputusan implementasi dapat dirangkum sebagai berikut:

```
START → Business Case (CAPEX/OPEX) → Site Survey RF → 
Pilot 1 Chamber (4 nodes) → Risk Analysis (FMEA) → 
Scale-up 24 nodes → Integration SCADA → 
PQ + Process Capability (Cpk ≥ 1.33) → Routine Production
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus

Sebuah industri biofarmasi di Asia Tenggara memproduksi **vaccine subunit rekombinan** dalam vial 10 mL dengan formulasi sukrosa 5% w/v. Kapasitas chamber: 12 rak × 150 vial = 1.800 vial/batch. Target batch release: 8.000 vial/bulan.

Parameter kritis:
- $T_{shelf}$ = -35 °C
- $P_c$ = 0,05 mbar (5 Pa)
- $R_{p,0}$ = 0,8 Pa·s/kg
- $A_1 = 1,2 \times 10^4$ Pa·s/kg²
- $A_2 = 1$ (normalized)
- $T_g'$ = -32 °C
- LSL, USL suhu produk: -34 °C, -30 °C

### 4.2 Perhitungan Laju Sublimasi pada Tengah Batch

Asumsikan setelah 12 jam *primary drying*, lapisan kering $L_d$ = 0,6 cm. Resistansi produk:

$$R_p = 0,8 + \frac{1,2 \times 10^4 \cdot 0,6}{1} = 0,8 + 7.200 = 7.200,8 \text{ Pa·s/kg}$$

Tekanan uap es pada $T_p$ = -32 °C (241 K) menggunakan persamaan Goff-Gratch (disederhanakan):

$$