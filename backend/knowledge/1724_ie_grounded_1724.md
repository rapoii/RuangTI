# 1724 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritikal dalam rantai pasok biofarmasi modern yang digunakan untuk menstabilkan produk biologis, antibodi monoklonal (mAb), vaksin mRNA, dan API (*Active Pharmaceutical Ingredient*) yang rentan terhadap degradasi termal. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam bab monograf *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), industri farmasi global menghadapi tantangan operasional berupa **yield loss 15–30%** yang disebabkan oleh *batch failure* akibat *non-uniformity* suhu vial selama tahap *primary drying*. Variasi suhu antar vial sebesar ±2°C saja sudah cukup untuk menciptakan heterogenitas *cake morphology* dan *residual moisture* yang melampaui batas spesifikasi FDA serta ICH Q1A.

Inisiatif **PAT (Process Analytical Technology)** yang digulirkan FDA sejak 2004 menuntut *real-time monitoring* seluruh *Critical Process Parameters* (CPP) yang memengaruhi *Critical Quality Attributes* (CQA). Secara konvensional, monitoring dilakukan menggunakan **termosokop kabel (wired thermocouples)** yang memiliki keterbatasan: (1) jumlah titik ukur terbatas (umumnya hanya 8–16 vial per *batch* dari total 5.000–20.000 vial), (2) menghasilkan *self-heating* lokal yang mengganggu keseimbangan termal vial, serta (3) memerlukan instalasi manual yang meningkatkan *human error* dan *cleanroom footprint*.

Meza‐Galvan *et al.* (2026) mengusulkan paradigma baru berbasis **Wireless Sensor Networks (WSN)** dengan topologi mesh yang memungkinkan instrumentasi vial secara masif (50–200 vial) tanpa menambah *heat load*. Pelengkap konteks ini diberikan oleh Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) yang memaparkan *emerging technologies* seperti TDLAS (*Tunable Diode Laser Absorption Spectroscopy*), *soft sensors* berbasis model mekanistik, dan integrasi *machine learning* untuk *endpoint detection* yang semakin memperkuat ekosistem PAT 4.0. Dari perspektif Teknik Industri, adopsi WSN bukan sekadar inovasi instrumentasi, melainkan merupakan **restrukturisasi arsitektur sistem kualitas** yang menyentuh aspek *throughput*, *energy efficiency*, dan *regulatory compliance* secara simultan.

---

## 2. Landasan Teori & Formulasi Matematis

Mekanisme sublimasi pada *primary drying* dikuantifikasi melalui persamaan keseimbangan **panas–massa** di dalam vial sebagaimana dirumuskan oleh Pisano & Barresi dan dirujuk oleh Meza‐Galvan *et al.* (2026). Persamaan dasar *heat flux* vial adalah:

$$q_v = K_v \left( T_s - T_p \right) = K_c \left( T_p - T_b \right)$$

dengan:
- $q_v$ = fluks panas per vial (W),
- $K_v$ = koefisien transfer panas vial–produk (W/K),
- $K_c$ = koefisien transfer panas frozen layer–sublimation interface (W/K),
- $T_s$ = suhu *shelf* (K), $T_p$ = suhu produk (K), $T_b$ = suhu *sublimation interface* (K).

Laju sublimasi $\dot{m}$ terkait melalui *latent heat of sublimation* $L_s \approx 2.840$ kJ/kg:

$$\dot{m} = \frac{q_v}{L_s}$$

Untuk analisis *batch*, persamaan *mass balance* kumulatif menentukan *primary drying time*:

$$t_d = \frac{m_0 \, L_s}{A_v \, \dot{m}_{avg}} = \frac{\rho_{ice} \, V_{fill} \, L_s}{A_v \, \dot{m}_{avg}}$$

Resistansi *dried cake* terhadap transfer massa meningkat terhadap *cake thickness* menurut:

$$R_p(t) = R_{p,0} + \frac{A_1}{m_d(t)} = R_{p,0} + \frac{A_1}{m_0 - \dot{m}\,t}$$

dengan $A_1$ adalah koefisien resistansi (Pa·m²·s/kg) yang bergantung pada formulasi eksipien.

Pada dimensi **jaringan sensor nirkabel**, parameter kualitas didefinisikan sebagai *Packet Delivery Ratio* (PDR), *latency*, dan *lifetime* node yang dihitung:

$$\text{PDR} = \frac{N_{rx}}{N_{tx}} \times 100\%$$

$$E_{node} = \int_0^{T_{life}} \left( P_{tx} + P_{rx} + P_{idle} \right) dt$$

Untuk konservasi energi, protokol **IEEE 802.15.4e TSCH** dengan *duty cycle* $D = 1\%$ memungkinkan *lifetime* baterai > 7 hari pada suhu ruang dan > 2 hari pada -25°C (Meza-Galvan *et al.*, 2026). Persamaan *energy harvesting* termoelektrik (*Seebeck effect*) pada permukaan vial:

$$P_{harv} = \alpha_{se}^2 \, \Delta T^2 \, R_{load} \, / \, 2$$

dengan $\alpha_{se}$ koefisien Seebeck (≈200 µV/K untuk Bi₂Te₃), memberikan potensi *self-powered* node selama tahap *primary drying*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Meza‐Galvan *et al.* (2026) menyusun arsitektur **tiga-lapis** untuk implementasi WSN di ruang liofilisasi:

```
┌────────────────────────────────────────────────────────────┐
│ Layer 3: Cloud Analytics (ML, CPV, Regulatory Reporting)  │
├────────────────────────────────────────────────────────────┤
│ Layer 2: Edge Gateway (TimeSync, Data Buffering, OPC-UA)   │
├────────────────────────────────────────────────────────────┤
│ Layer 1: Wireless Sensor Mesh (50–200 nodes, IEEE 802.15.4)│
└────────────────────────────────────────────────────────────┘
        ↓ terpasang pada vial dalam lyophilizer chamber
```

**SOP implementasi (6 tahap):**

1. **Pra-Validasi (IQ/OQ):** Pemetaan RSSI (*Received Signal Strength Indicator*) di dalam *chamber* kosong dengan beban dummy vial; validasi terhadap standar ISO/IEC 17025.
2. **Kalibrasi Sensor:** Perbandingan pembacaan sensor nirkabel RTD (PT1000) vs termokopel Tipe T bersertifikat NIST pada rentang -40°C hingga +40°C; toleransi deviasi $\Delta T \leq 0,3$ °C.
3. **Penempatan Vial Instrumentasi:** Stratifikasi menurut *edge effect* (vial baris tepi) dan *center effect* (vial tengah) dengan *sampling fraction* 1–3% sesuai ASTM E2503-13.
4. **Konfigurasi Jaringan:** Topologi mesh dengan *redundancy* minimal 2 *parent node*, *transmit power* 0 dBm, *beacon interval* 1 s.
5. **Eksekusi Batch:** Logging pada 1 Hz, *time synchronization* NTP stratum-2, integrasi ke LIMS (*Laboratory Information Management System*) melalui protokol OPC-UA.
6. **Post-Batch Review:** Analisis *Raman spectra* dan *Karl Fischer titration* dibandingkan prediksi WSN untuk validasi *drying endpoint*.

Selaras dengan ini, Artusio, Barresi, dan Pisano (2026) menambahkan bahwa integrasi **TDLAS** untuk pengukuran *water vapor concentration* secara *in-line* mampu mengkonfirmasi *endpoint* dengan akurasi < 5 menit terhadap metode *pressure rise test* konvensional, sehingga menurunkan *over-drying energy cost* hingga 12–18%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** *Batch* 10.000 vial (10 mL fill volume, formulasi 5% sukrosa + 50 mg/mL mAb, *shelf area* 1,5 m², *chamber pressure* $P_c = 13,3$ Pa = 100 mTorr).

**Tahap 1 — Sublimation rate pada T_s = -25°C:**

Dari data Pisano & Barresi untuk vial 10 mL, $K_v \approx 1,2 \times 10^{-2}$ W/K dan $K_c \approx 5,8 \times 10^{-3}$ W/K:

$$q_v = \frac{K_v \cdot K_c}{K_v + K_c} (T_s - T_{eq}) = \frac{(0,012)(0,0058)}{0,012+0,0058} \times (248 - 233)$$

$$q_v = (3,90 \times 10^{-3}) \times 15 = 0,0585 \text{ W/vial}$$

$$\dot{m} = \frac{0,0585}{2.840} = 2,06 \times 10^{-5} \text{ kg/s} = 74,2 \text{ g/h per vial}$$

**Tahap 2 — Primary drying time:**

Massa es awal per vial: $m_0 = \rho_{ice} \cdot V_{fill} = 917 \times 0,010 = 9,17$ g

$$t_d = \frac{9,17 \times 10^{-3} \times 2.840 \times 1.000}{A_v \times \dot{m}}$$

dengan luas sublimasi vial $A_v = \pi (0,0125)^2 / 4 = 1,23 \times 10^{-4}$ m² (asumsi vial $\varnothing$ 25 mm dengan *product contact area* efektif). Jika $\dot{m}_{avg} \approx 60$ g/h akibat kenaikan resistansi $R_p$ selama siklus:

$$t_d = \frac{(9{,}17)(2{,}84)}{1{,}23 \times 10^{-4} \times 60/3{,}6 \times