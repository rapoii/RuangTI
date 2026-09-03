# 2156 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses Berkelanjutan dan Integrasi Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel dalam Proses Liofilisasi Farmasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization* dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying* dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu proses manufaktur farmasi paling kritis dan paling padat energi dalam industri biofarmasi modern. Proses ini digunakan untuk menstabilkan bahan aktif farmasi (*Active Pharmaceutical Ingredient* — API), terutama yang bersifat termolabil seperti protein, antibodi monoklonal, dan produk terapi gen seperti mRNA. Seperti ditegaskan oleh Artusio, Barresi, dan Pisano (2026) dalam DOI [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11), siklus liofilisasi konvensional berlangsung antara 24 hingga 72 jam per batch dengan konsumsi energi spesifik mencapai 1,5–2,5 kWh per vial, menjadikan optimalisasi proses sebagai imperatif ekonomi dan keberlanjutan.

Meza‐Galvan, Strongrich, dan Darwish (2026) dalam DOI [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4) menyoroti bahwa **pengukuran suhu produk ($T_p$) dan tekanan ruang ($P_c$) secara real-time dan terdistribusi** merupakan tantangan operasional utama. Sistem instrumentasi kabel tradisional (*wired thermocouples* tipe T) memiliki keterbatasan inheren: hanya mampu memantau 3–5 vial representatif dari ribuan vial dalam satu batch, menciptakan *sampling bias* yang berpotensi melewatkan vial "terpanas" atau "terdingin" — yang justru menentukan kualitas produk. Studi-studi terkini menunjukkan bahwa variabilitas suhu antar-vial dalam satu batch dapat mencapai rentang 5–10 K, cukup untuk menyebabkan *collapse* pada sebagian vial sementara vial lain masih dalam kondisi optimal.

Urgensi penerapan Wireless Sensor Networks (WSN) dalam konteks ini diperkuat oleh kerangka regulasi FDA melalui inisiatif *Process Analytical Technology* (PAT) yang diterbitkan sejak 2004 dan diperkuat dalam *Guidance for Industry: QbD for ANDAs* (2018). Implementasi PAT bukan sekadar kepatuhan, melainkan representasi perubahan paradigma dari *quality by testing* menjadi *quality by design*. Dalam konteks rantai pasok farmasi global yang bernilai lebih dari USD 1,6 triliun (menurut IQVIA Institute, 2023), dengan segmen biofarmasi menyumbang >USD 400 miliar, setiap peningkatan 1% pada *first-pass yield* liofilisasi berpotensi menghemat hingga USD 4 miliar per tahun secara global. Artikel ini akan membedah secara kuantitatif arsitektur WSN, formulasi matematis yang mendasari proses sublimasi dan perpindahan panas, serta SOP implementasi di fasilitas manufaktur farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Dasar Perpindahan Panas dan Sublimasi

Mekanisme pengeringan primer (*primary drying*) liofilisasi dikontrol oleh keseimbangan antara laju sublimasi dan suplai panas ke antarmuka es-uap. Model Pikal (1985) yang diadopsi secara luas dalam literatur termasuk Meza‐Galvan *et al.* (2026) menyatakan bahwa fluks sublimasi $dm/dt$ bergantung pada resistansi termal dan resistansi perpindahan massa:

$$\frac{dm}{dt} = \frac{T_b - T_s}{R_p + R_s} = \frac{P_i - P_c}{R_m}$$

di mana:
- $T_b$ = suhu rak bawah (*bottom shelf temperature*), K
- $T_s$ = suhu permukaan sublimasi, K  
- $R_p$ = resistansi termal produk beku (K·m²·W⁻¹)
- $R_s$ = resistansi termal sublimasi (K·m²·W⁻¹)
- $P_i$ = tekanan uap air pada antarmuka sublimasi, Pa
- $P_c$ = tekanan ruang (*chamber pressure*), Pa
- $R_m$ = resistansi perpindahan massa pada *drying chamber* (Pa·m²·s·kg⁻¹)

### 2.2 Resistansi Termal Produk Beku

Resistansi termal produk beku berkembang secara dinamis seiring proses sublimasi karena terbentuknya *dried layer* yang menghambat aliran uap air:

$$R_p(t) = R_{p,0} + \int_{0}^{t} \frac{A_{v}}{K_d(\theta)} \, d\theta$$

di mana $A_v$ adalah luas penampang vial (m²) dan $K_d$ adalah konduktivitas termal efektif *dried cake* (W·m⁻¹·K⁻¹) yang meningkat seiring waktu karena *collapse* parsial pori. Meza‐Galvan *et al.* (2026) menunjukkan bahwa tanpa pengukuran terdistribusi, variabilitas $K_d$ antar-vial tidak dapat diestimasi, menyebabkan prediksi $T_s$ yang bias hingga 3–4 K.

### 2.3 Model Wireless Sensor Network — Throughput dan Latency

Arsitektur WSN untuk liofilisasi mengikuti topologi *star-mesh hybrid* dengan *gateway node* yang mengumpulkan data dari 50–500 *mote* (sensor vial). Performansi jaringan dimodelkan sebagai berikut:

$$\tau_{end-to-end} = \tau_{sensing} + \tau_{MAC} + \tau_{TX} + \tau_{propagation} + \tau_{processing}$$

Untuk protokol IEEE 802.15.4e (*Time Synchronized Channel Hopping* — TSCH) yang umum digunakan dalam *industrial WSN*:

$$\text{PDR} = 1 - \left(1 - \frac{1}{N}\right)^{N-1} \cdot p_{ber}^{f}$$

di mana PDR (*Packet Delivery Ratio*) tergantung pada jumlah tetangga $N$ dan *bit error rate* $p_{ber}$ dengan panjang paket $f$. Untuk batch farmasi kritis, target PDR ≥ 99,9% untuk memenuhi prinsip ALCOA+ (*Attributable, Legible, Contemporaneous, Original, Accurate*) dari FDA 21 CFR Part 11.

### 2.4 Statistical Process Control (SPC) untuk Real-Time Monitoring

Variabilitas suhu antar-vial dimodelkan dengan indeks kapabilitas proses:

$$C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$

dengan USL (*Upper Specification Limit*) dan LSL (*Lower Specification Limit*) untuk $T_p$ yang didefinisikan oleh *design space* proses. Target industri farmasi adalah $C_{pk} \geq 1{,}33$ untuk proses tervalidasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Lyo

Berdasarkan kerangka yang diuraikan oleh Meza‐Galvan *et al.* (2026), arsitektur WSN untuk liofilisasi farmasi terdiri dari empat lapisan:

1. **Lapisan Persepsi (*Sensing Layer*):** *Mote* berdaya baterai lithium (3,6 V, 2,4 Ah) dengan寿命 ≥ 72 jam, dilengkapi sensor suhu resistansi platinum (Pt1000, akurasi ±0,2 K dalam rentang 193–373 K), sensor kapasitif untuk kelembapan relatif, dan akselerometer MEMS untuk deteksi getaran (*vial bouncing*).

2. **Lapisan Komunikasi (*Network Layer*):** Protokol TSCH pada pita 2,4 GHz dengan *channel hopping* untuk mitigasi interferensi dari sumber *RF* eksternal (Wi-Fi industri, *Bluetooth*).

3. **Lapisan Edge Computing (*Gateway Layer*):** Single-Board Computer (SBC) berbasis ARM Cortex-A72 yang menjalankan algoritma *Manometric Temperature Measurement* (MTM) dan *Pressure Rise Test* (PRT) secara real-time.

4. **Lapisan Cloud & Analytics (*Application Layer*):* Platform historian OSIsoft PI atau Ignition SCADA yang memenuhi standar GAMP 5 Kategori 4.

### 3.2 Diagram Alir SOP Implementasi

```
[PRA-IMPLEMENTASI] → Validasi IQ/OQ/PQ sesuai GAMP 5
       ↓
[STEP 1] Karakterisasi vial (volume, fill depth, cake thickness)
       ↓
[STEP 2] Kalibrasi sensor WSN di ruang bersuhu terkontrol
       ↓
[STEP 3] Pemetaan baseline thermal chamber (N ≥ 27 vial)
       ↓
[STEP 4] Eksekusi batch validasi (3 batch konsekutif)
       ↓
[STEP 5] Analisis variabilitas Cp/Cpk dan identifikasi hot/cold spot
       ↓
[STEP 6] Optimasi design space (shelf temperature setpoint, chamber pressure)
       ↓
[STEP 7] Rilis protokol PAT-CbD (Continuous verification)
```

### 3.3 SOP Perawatan dan Kalibrasi

Sesuai rekomendasi Artusio *et al.* (2026), kalibrasi sensor WSN dilakukan setiap 6 bulan menggunakan *dry block calibrator* (Fluke 9171 atau setara) dengan titik kalibrasi pada 233 K, 273 K, dan 313 K — mencakup rentang operasional penuh. Batas kesalahan yang diizinkan (*permissible error*): $\pm 0{,}3$ K untuk compliance USP ⟨659⟩.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Studi Kasus

Ambil skenario realistis untuk batch vial 10R (volume fill 3 mL) dengan API protein monoklonal pada konsentrasi 50 mg/mL:

| Parameter | Nilai | Satuan |
|---|---|---|
| $T_b$ (shelf temperature) | 278,15 | K |
| $P_c$ (chamber pressure) | 10 | Pa |
| $R_p,0$ (initial product resistance) | 0,0 | K·m²·W⁻¹ |
| $K_d$ (dried cake conductivity) | 0,025 | W·m⁻¹·K⁻¹ |
| $A_v$ (vial cross-section) | $3{,}14 \times 10^{-4}$ | m² |
| $L_d$ (dried layer thickness) | 0,001 → 0,005 | m |
| $N_{vial}$ (batch size) | 5.000 | vial |
| $N_{sensor}$ (WSN node aktif) | 150 | node |

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Laju Sublimasi pada Awal Proses ($t = 0$)**

Menggunakan persamaan Pikal dengan $R_p = 0$ dan asumsi $T_s = T_b - \Delta T_{sub}$:

$$\frac{dm}{dt}\bigg|_{t=0} = \frac{P_i(T_b) - P_c}{R_m}$$

Untuk $T_b = 278{,}15$ K, tekanan uap jenuh es $P_i = 133{,}3$ Pa (menggunakan persamaan Antoine untuk air):

$$\frac{dm}{dt}\bigg|_{t=0} = \frac{133{,}3 - 10}{R_m} = \frac{123{,}3}{R_m}$$

Dengan $R_m = 5{,}6 \times 10^{3}$ Pa·m²·s·kg⁻¹ (tipikal untuk lyo lab/pilot scale):

$$\frac{dm}{dt}\bigg|_{t=0} = \frac{123{,}3}{5{,}6 \times 10^{3}} = 0{,}022 \text{ kg/(m²·s)}$$

**Langkah 2: Resistansi Termal Setelah 6 Jam ($t = 21{,}600$ s)**

Asumsikan laju sublimasi rata-rata menghasilkan dried layer 1 mm per 4 jam, sehingga $L_d(t=6h) = 0{,}0015$ m:

$$R_p(t=6h) = \frac{L_d}{K_d \cdot A_v} = \frac{0{,}0015}{0{,}025 \cdot 3{,}14 \times 10^{-4}} = 191{,}1 \text{ K·m²·W⁻¹}$$

**Langkah 3: Suhu Sublimasi Terkini**

$$T_s(t) = T_b - R_p(t) \cdot \frac{dm}{dt}(t)$$

Untuk $dm/dt$ berkurang menjadi $0{,}008$ kg/(m²·s) setelah 6 jam (akena resistansi):

$$T_s =
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
