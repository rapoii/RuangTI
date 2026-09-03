# 2476 — Wireless Sensor Networks dan Process Analytical Technology untuk Optimasi Siklus Lyophilisasi Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Rantai Pasok Farmasi & Manufaktur Berorientasi Kualitas
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Integrasi PAT pada Siklus Freeze-Drying)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Wiley‐VCH, Bab 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Wiley‐VCH, Bab 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Lyophilization atau freeze-drying merupakan proses dehidrasi produk farmasi biologis (vaksin, antibodi monoklonal, antibiotik, probiotik, dan API sensitif-termal) melalui tahapan pembekuan terkontrol, sublimasi es pada tekanan rendah (primary drying), dan desorpsi air terikat (secondary drying). Proses ini sangat kritikal karena lebih dari 40 % produk biofarmasi yang baru dikembangkan memerlukan formulasi liofilisasi untuk mempertahankan stabilitas hayati selama rantai pasok, terutama pasca-krisis pandemi COVID-19 yang mendorong akselerasi kapasitas produksi liofilisasi global dari sekitar USD 5,8 miliar (2022) menjadi estimasi USD 9,6 miliar pada 2030 (CAGR ≈ 6,5 %). Dari perspektif Teknik Industri, siklus liofilisasi konvensional memiliki karakter inefisiensi klasik: **durasi primary drying yang panjang (24–72 jam per batch)**, konsumsi energi spesifik sebesar 1,2–1,8 kWh per vial, serta yield loss 2–8 % akibat *batch heterogeneity* yang tidak terdeteksi secara real-time.

Dalam konteks inilah Meza-Galvan, Strongrich, dan Darwish (2026) memperkenalkan paradigma **Wireless Sensor Networks (WSN)** sebagai tulang punggung implementasi *Process Analytical Technology* (PAT) pada liofilisasi farmasi. Mereka berpijak pada spirit FDA PAT Guidance (2004) yang menuntut *“a system for designing, analyzing, and controlling manufacturing through timely measurements of critical quality attributes (CQA) of raw and in-process materials and processes”*. WSN memungkinkan penempatan puluhan hingga ratusan node sensor nirkabel (termostor, *pressure transducer*, *moisture analyzer*, dan *PIRANI vs. capacitance gauge*) di dalam ruang liofilizer tanpa menembus dinding vakum dan tanpa menambah port thermocouple terbatas.

Signifikansi ekonominya sangat besar. Sebagai contoh, sebuah lyophilizer skala-pilot yang menampung 5.000 vial dengan primary drying 36 jam memiliki konsumsi energi total sekitar 9.000 kWh. Pengurangan 10 % durasi drying melalui kontrol berbasis data sensor nirkabel real-time akan menghemat sekitar 900 kWh per batch, atau setara Rp 1,8 juta (pada tarif industri USD 0,12/kWh). Dalam setahun dengan 200 batch, penghematan mencapai USD 21.600 hanya dari energi, belum termasuk peningkatan yield 1–2 % yang berarti tambahan revenue ratusan juta rupiah untuk produk bernilai tinggi seperti *mAb* (USD 5.000–20.000 per gram). Studi komplementer oleh Artusio, Barresi, dan Pisano (2026) – Chapter 11 – menunjukkan bahwa teknologi emerging seperti WSN, *soft sensors*, dan *machine learning-based primary drying endpoint detection* merupakan *game-changer* dalam transisi paradigma Industry 4.0 untuk industri farmasi aseptik. Kedua literatur ini menjadi rujukan utama Modul 2476 karena menjembatani kesenjangan antara instrumentasi klasik (thermocouple berkabel, baratron gauge) dengan kebutuhan akan *spatial-temporal data density* yang hanya dapat dipenuhi oleh jaringan nirkabel terdistribusi.

Dengan demikian, urgensi adopsi WSN pada lyophilisasi tidak hanya berakar pada efisiensi energi dan peningkatan yield, melainkan juga pada **kepatuhan regulasi**, **ketertelusuran data (data integrity per ALCOA+)**, serta **kecepatan time-to-market** produk biofarmasi yang sangat sensitif terhadap jendela stabilitas pasca-produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Primary Drying

Meza-Galvan et al. (2026) mengembangkan arsitektur WSN yang membaca parameter fisis sesuai dengan model perpindahan klasik Pikal (1985) yang dimodifikasi. Untuk vial yang dikenai panas dari *shelf* dengan suhu $T_s$, suhu vial pada *bottom* $T_b$, dan suhu sublimasi pada antarmuka es-uap $T_i$, laju sublimasi $\dot{m}$ ditentukan oleh resistansi perpindahan massa dan panas secara seri:

$$\dot{m} = \frac{A_p \cdot (p_i(T_i) - p_c)}{R_p + R_s}$$

dengan:
- $A_p$ = luas penampang vial bagian dalam (m²),
- $p_i(T_i)$ = tekanan uap es pada antarmuka sublimasi (Pa), mengikuti persamaan Goff-Gratch atau Murphy-Koop,
- $p_c$ = tekanan ruang (chamber pressure, Pa),
- $R_p$ = resistansi produk (product resistance, Pa·m²·s/kg), yang meningkat seiring primary drying karena terbentuknya *dried layer*,
- $R_s$ = resistansi stopper (Pa·m²·s/kg).

Untuk $R_p$, Meza-Galvan et al. (2026) menyesuaikan model nonlinier:

$$R_p(t) = R_{p,0} \cdot \left( 1 + \alpha \cdot \frac{L(t)}{L_{max}} \right)$$

dengan $L(t)$ adalah ketebalan dried layer yang tumbuh seiring waktu, dan $\alpha$ adalah koefisien yang bergantung pada formulasi (tipikal 1,5–2,2 untuk formulasi 5 % sukrosa).

### 2.2 Neraca Energi Shelf

Panas yang dibutuhkan untuk sublimasi di-supply melalui perpindahan panas konduksi dan konveksi gas pada tekanan rendah. Neraca energi shelf adalah:

$$Q_{shelf} = A_v \cdot K_v \cdot (T_s - T_b) + A_v \cdot K_c \cdot (T_s - T_b)$$

dengan:
- $A_v$ = luas kontak vial–shelf (m²),
- $K_v$ = konduktansi vial–glass (tipikal 0,4–0,6 W/(m²·K)),
- $K_c$ = konduktansi gas pada tekanan rendah (fungsi $p_c$ dan jenis gas).

Gabungan keduanya memberikan koefisien perpindahan panas efektif $K_{eff}$, yang menjadi target pengukuran langsung oleh *heat flux sensor* node dalam WSN:

$$K_{eff} = K_v + \alpha_c \cdot p_c^{\beta_c}$$

dengan $\alpha_c$ dan $\beta_c$ parameter kalibrasi (tipikal $\beta_c \approx 0{,}7$ pada N₂).

### 2.3 Teori Wireless Sensor Networks dalam Lingkungan Vakum

Dalam WSN untuk liofilizer, setiap node sensor beroperasi pada suhu -50 °C hingga +40 °C dan tekanan 0,1–100 Pa. Transmisi nirkabel dalam ruang vakum dan logam *shelf stainless steel* menghadapi rugi-rugi propagasi signifikan. Model path loss log-normal yang diadopsi Meza-Galvan et al. (2026) adalah:

$$PL(d) = PL(d_0) + 10 n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan:
- $PL(d_0)$ = rugi lintasan pada referensi $d_0 = 1$ m (tipikal 30–40 dB pada 2,4 GHz dalam ruang vakum),
- $n$ = eksponen rugi lintasan (2,5–4,0 untuk propagasi dalam ruang tertutup logam),
- $X_\sigma$ = variabel acak Gaussian dengan simpangan baku $\sigma$ (tipikal 4–7 dB).

Konsumsi energi setiap node sensor mengikuti model first-order:

$$E_{node} = E_{sense} + E_{proc} + E_{tx} \cdot \frac{N_{bit}}{R_{bit}} + E_{sleep}$$

dengan $E_{tx} = V \cdot I_{tx} \cdot t_{tx}$. Umur baterai ditentukan oleh *duty cycle* $\delta = t_{active}/t_{cycle}$:

$$t_{life} = \frac{C_{bat}}{I_{sleep} + \delta \cdot (I_{active} - I_{sleep})}$$

### 2.4 Secondary Drying dan Kinetika Desorpsi

Untuk secondary drying, Artusio, Barresi, dan Pisano (2026) menekankan bahwa WSN *moisture sensor* (berbasis *tunable diode laser absorption spectroscopy* atau TDLAS, serta *near-infrared* miniaturized) membaca kadar air residu $C_w(t)$ yang menurun menurut model Arrhenius-modified:

$$\frac{dC_w}{dt} = -k_0 \cdot e^{-E_a/(RT_s)} \cdot C_w^n$$

dengan $k_0$ pre-eksponensial, $E_a$ energi aktivasi (40–80 kJ/mol), dan $n$ ordo reaksi (1–2). Target akhir $C_w \le 1$ % (atau $\le 3$ % untuk probiotik) harus tercapai terdokumentasi otomatis untuk memenuhi syarat **release by attribute** FDA.

### 2.5 Model Statistik Pengendalian Proses

WSN menghasilkan big-data time-series yang memungkinkan implementasi *Multivariate Statistical Process Control* (MSPC) berbasis Principal Component Analysis (PCA):

$$T^2 = \mathbf{x}^T \mathbf{P} \mathbf{\Lambda}^{-1} \mathbf{P}^T \mathbf{x}, \quad SPE = \|\mathbf{x} - \hat{\mathbf{x}}\|^2$$

di mana $\mathbf{x}$ vektor CQA (T, p, RH, sublimation rate) yang dinormalisasi, $\mathbf{P}$ matriks loading, $\mathbf{\Lambda}$ matriks eigenvalue. Pelanggaran $T^2$ atau *Squared Prediction Error* (SPE) memicu *automatic feedback* ke PLC lyophilizer.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk siklus liofilisasi farmasi mengikuti kerangka **Plan–Do–Check–Act (PDCA)** yang selaras dengan ICH Q8(R2), Q9, Q10, Q11 dan FDA PAT Guidance. Prosedur rekayasa yang dipetakan dari Meza-Galvan et al. (2026) serta Artusio et al. (2026) dapat disusun dalam bentuk SOP delapan-tahap sebagai berikut.

### 3.1 Tahap 1 — Analisis Risiko Proses (PRA) & Penentuan CQA/CPP

Tim engineering melakukan *Failure Mode and Effects Analysis* (FMEA) pada parameter kritis: shelf temperature ramp rate, chamber pressure setpoint, primary drying duration, secondary drying temperature. Output: daftar CPP (Critical Process Parameters) yang akan dimonitor node WSN: $T_{shelf}$, $T_{vial\;bottom}$, $T_{vial\;side}$, $T_{condenser}$, $p_{chamber}$, $RH_{product}$, $\dot{m}_{sublimation}$.

### 3.2 Tahap 2 — Desain Arsitektur WSN

Arsitektur mengikuti topologi *star-of-stars* dengan tiga lapisan:
1. **Sensor Layer** — 30–150 node miniatur (masing-masing ukuran 12 × 18 mm) berisi thermistor NTC 10 kΩ (akurasi ±0,1 °C), kapasitif pressure sensor (rentang 0,1–1000 Pa, akurasi ±0,5 %FS), dan moisture MEMS.
2. **Aggregator/Gateway Layer** — 4–8 gateway *battery-powered* dengan microcontroller ARM Cortex-M4, modul radio 2,4 GHz (ZigBee 3.0 atau Bluetooth Low Energy 5.2, latency 7,5–15 ms).
3. **Supervisory Layer** — *Edge server* menjalankan algoritma PCA-MSPC, menyimpan data ke *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
