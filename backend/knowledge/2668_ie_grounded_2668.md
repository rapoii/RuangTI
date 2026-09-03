# 2668 — Jaringan Sensor Nirkabel untuk Monitoring Proses Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Sistem Manufaktur Farmasi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi modern, khususnya untuk produk biologis, vaksin, antibiotik, dan formulasi protein yang rentan terhadap degradasi termal. Proses ini berlangsung dalam tiga tahap berurutan—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang keseluruhannya harus dipertahankan dalam rentang parameter yang sangat sempit untuk menjamin kualitas produk akhir. Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menegaskan bahwa kompleksitas operasional ini diperparah oleh fakta bahwa proses liofilisasi dijalankan dalam kondisi vakum tinggi dengan gradien suhu dan tekanan yang heterogen di sepanjang chamber, menjadikan instrumentasi konvensional berbasis termokopel berkabel sebagai titik tunggal kegagalan (*single point of failure*) yang signifikan.

Dalam industri farmasi global yang bernilai lebih dari USD 1,5 triliun, *batch failure* pada lini liofilisasi dapat menimbulkan kerugian ekonomi langsung mencapai USD 5–50 juta per batch, belum termasuk konsekuensi regulasi berupa *Form 483 Observation* dari FDA, penarikan produk (*product recall*), dan rusaknya reputasi perusahaan. Framework **Process Analytical Technology (PAT)** yang dicanangkan FDA sejak 2004 menuntut penerapan monitoring *real-time* terhadap *Critical Quality Attributes* (CQA)—di antaranya kelembapan residu, suhu produk, dan laju sublimasi—sehingga keputusan kontrol proses dapat diambil secara adaptif. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) mengidentifikasi bahwa teknologi instrumentasi emerging, termasuk *Tunable Diode Laser Absorption Spectroscopy* (TDLAS), *Raman spectroscopy*, dan *Wireless Sensor Networks* (WSN), kini menjadi pilar utama implementasi PAT generasi keempat.

Urgensi penerapan WSN dalam liofilisasi muncul dari keterbatasan struktural sistem instrumentasi tradisional. Sensor berkabel (thermocouple, RTD, pirani gauge) membatasi jumlah titik pengukuran—biasanya hanya 1–5 vial termonitor dari total ratusan hingga ribuan vial per *batch*—sehingga variabilitas intra-batch tidak teramati. Hal ini menimbulkan risiko heterogenitas kualitas antar vial yang dapat lolos dari uji *release testing* konvensional. Meza-Galvan et al. (2026) berargumen bahwa arsitektur WSN multi-hop dengan sensor suhu miniaturisasi, akselerometer getaran, dan sensor kelembapan residu berbasis *near-infrared* (NIR) mampu menyediakan *spatial-temporal resolution* yang sebelumnya tidak mungkin diperoleh, sekaligus mengurangi biaya instalasi retrofit hingga 40–60% dibanding sistem berkabel.

Secara strategis, integrasi WSN dalam lini liofilisasi farmasi bukan sekadar upgrading instrumentasi, melainkan transformasi paradigma Quality-by-Testing menjadi Quality-by-Design (QbD). Dengan densitas sensor yang tinggi dan transmisi data nirkabel, *control loop* dapat ditutup secara *real-time* melalui algoritma *Model Predictive Control* (MPC) yang memperhitungkan dinamika sublimasi dan desorpsi secara kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa pada Liofilisasi

Laju sublimasi pada tahap *primary drying* dikendalikan oleh mekanisme perpindahan panas dari rak (*shelf*) menuju permukaan sublimasi dan difusi uap air melalui lapisan produk kering. Meza-Galvan et al. (2026) merumuskan model *unsteady-state heat and mass transfer* sebagai berikut:

$$\frac{dm}{dt} = \frac{A_v \cdot (T_s - T_b)}{R_m \cdot \Delta H_s} = \frac{A_v \cdot (P_{sat}(T_b) - P_c)}{R_p}$$

Di mana:
- $\frac{dm}{dt}$ = laju sublimasi massa (kg/s)
- $A_v$ = luas penampang vial yang efektif ($m^2$)
- $T_s$ = suhu shelf (K)
- $T_b$ = suhu pada *sublimation interface* (K)
- $P_{sat}(T_b)$ = tekanan uap jenuh air pada suhu $T_b$ (Pa)
- $P_c$ = tekanan ruang (*chamber pressure*) (Pa)
- $R_m$ = tahanan termal total (K·m²/W)
- $R_p$ = tahanan difusi lapisan produk kering (m²·Pa·s/kg)
- $\Delta H_s$ = entalpi sublimasi es (≈ 2.838 × 10⁶ J/kg)

Persamaan di atas menunjukkan hubungan kuantitatif bahwa laju sublimasi maksimum dibatasi oleh *minimum* antara kapasitas perpindahan panas (numerator kiri) dan kapasitas perpindahan massa (numerator kanan).

### 2.2 Model Jaringan Sensor Nirkabel

Arsitektur WSN untuk liofilisasi mengikuti model *cluster-tree topology* yang terdiri dari node sensor (*motes*), router, dan koordinator (gateway). Kapasitas baterai node sensor dimodelkan dengan persamaan konsumsi energi berikut (Meza-Galvan et al., 2026):

$$E_{total} = N \cdot [E_{sense} + E_{proc} + E_{tx} \cdot d^{\alpha} + E_{rx}]$$

Di mana:
- $E_{total}$ = total energi jaringan (J)
- $N$ = jumlah transmisi per siklus duty
- $E_{sense}$ = energi akuisisi data sensor (J/sample)
- $E_{proc}$ = energi pemrosesan mikroprosesor (J/cycle)
- $E_{tx}$ = energi transmisi radio (J/bit)
- $d^{\alpha}$ = jarak transmisi dengan *path loss exponent* $\alpha$ (umumnya 2–4 di dalam ruang ber-logam chamber)
- $E_{rx}$ = energi penerimaan (J/bit)

Untuk memperpanjang lifetime jaringan, *duty cycling* didefinisikan sebagai:

$$\eta_{DC} = \frac{T_{active}}{T_{active} + T_{sleep}}$$

### 2.3 Model Redundansi dan Keandalan

Sistem harus memenuhi probabilitas deteksi anomali yang tinggi. Untuk monitoring $n_v$ vial dengan cakupan sensor $c$ (rasio vial termonitor), reliabilitas deteksi mengikuti:

$$R_{WSN}(t) = 1 - (1 - c)^{n_v} \cdot (1 - P_{node}(t))$$

Di mana $P_{node}(t)$ adalah probabilitas node aktif pada waktu $t$:

$$P_{node}(t) = e^{-\lambda \cdot t} \approx 1 - \frac{I_{load} \cdot t}{C_{batt}}$$

Dengan $\lambda$ = laju kegagalan, $I_{load}$ = arus beban rata-rata, dan $C_{batt}$ = kapasitas baterai.

### 2.4 Formulasi Kontrol PAT

Integrasi WSN dengan PAT memungkinkan implementasi *feedback control* terhadap suhu shelf:

$$T_s(t+1) = T_s(t) + K_p \cdot e(t) + K_i \int_0^t e(\tau) d\tau$$

Di mana $e(t) = T_b^{target} - T_b^{measured}(t)$, dengan gain $K_p$ dan $K_i$ yang dituning berdasarkan karakteristik dinamika sublimasi vial.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam lini liofilisasi mengikuti kerangka sistematis berikut:

**Fase 1 — Site Assessment dan Desain Jaringan**
1. Pemetaan geometri chamber liofilisasi dan identifikasi blind spots akibat shielding vakum stainless steel.
2. Penentuan jumlah vial termonitor (recommend 5–10% dari total vial sebagai *representative sampling*).
3. Penempatan *gateway* di luar chamber dengan penetrasi sinyal melalui port *view window* atau *feedthrough* vakum.
4. Optimasi topologi mesh menggunakan algoritma *LEACH* (Low-Energy Adaptive Clustering Hierarchy) untuk distribusi beban energi merata.

**Fase 2 — Deployment Sensor**
1. Kalibrasi sensor suhu (akurasi ±0,3°C) dan tekanan miniaturisasi (Pirani tipe TPR, rentang 0,1–1000 Pa).
2. Validasi *Mean Time Between Failure* (MTBF) minimal 500 jam operasi kontinu.
3. Implementasi *Time Division Multiple Access* (TDMA) untuk menghindari kolisi data di lingkungan dengan interferensi elektromagnetik tinggi.

**Fase 3 — Integrasi PAT dan Data Analytics**
1. Streaming data sensor ke *Process Historian Server* melalui protokol OPC-UA atau MQTT-SN.
2. Penerapan *Moving Window Principal Component Analysis* (MW-PCA) untuk deteksi fault real-time.
3. Penutupan *control loop* dengan algoritma MPC yang meng-update setpoint suhu shelf setiap 30–60 detik.

**Fase 4 — Validasi dan Compliance**
1. Kualifikasi instalasi (IQ), operasional (OQ), dan performa (PQ) sesuai GAMP 5 dan FDA Process Validation Guidance (2011).
2. Verifikasi akurasi data WSN terhadap sistem PAT primer (Pirani + Baratron capacitance manometer).
3. Dokumentasi *Electronic Batch Record* (EBR) sesuai 21 CFR Part 11.

Diagram alir logika operasional:

```
[Sensor Node] → [Cluster Head] → [Gateway] → [OPC-UA Bridge]
       ↓                                         ↓
  [Local Storage]                          [Process Historian]
                                               ↓
                                        [MW-PCA Fault Detection]
                                               ↓
                                     [MPC Controller → Shelf TS]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik farmasi memproduksi batch 5% w/v sucrose dalam vial 10 mL (luas $A_v = 3,46 \times 10^{-4}$ m²). Total vial per batch: 1500 unit. Shelf temperature setting: $T_s = -20°C = 253,15$ K. Target suhu produk: $T_b = -35°C = 238,15$ K. Chamber pressure: $P_c = 10$ Pa.

**Langkah 1 — Validasi Model Sublimasi**

Tekanan uap jenuh pada $T_b = -35°C$ dihitung dengan persamaan Goff-Gratch (disitasi oleh Meza-Galvan et al., 2026):

$$\log_{10}(P_{sat}) = a_0 + a_1 \cdot T_b + a_2 \cdot T_b^2 + ...$$

Untuk rentang suhu rendah, pendekatan eksponensial cukup akurat:

$$P_{sat}(T_b) \approx P_0 \cdot \exp\left(-\frac{\Delta H_s}{R \cdot T_b}\right)$$

Dengan $P_0 = 6,03 \times 10^{10}$ Pa, $R = 8,314$ J/(mol·K),