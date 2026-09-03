# 2108 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Teknologi PAT dalam Rekayasa Proses Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Rekayasa Proses Farmasi, Sistem Sensor Cerdas, Process Analytical Technology/PAT)
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis untuk stabilisasi produk farmasi biologis, vaksin, antibodi monoklonal, dan API (*Active Pharmaceutical Ingredients*) termosensitif. Pasar global produk farmasi liofilisasi mencapai lebih dari USD 3,4 miliar pada 2024 dengan proyeksi CAGR 8,2% menuju 2030, didorong oleh ekspansi biofarmasi dan pipeline produk termolabil. Proses ini berlangsung dalam tiga tahap (pembekuan, pengeringan primer/sublimasi, pengeringan sekunder/desorpsi) yang sensitif terhadap variabel kritis: suhu produk $T_p$, tekanan ruang $P_c$, dan laju sublimasi $\dot{m}_{sub}$. Kerusakan batch bernilai ratusan ribu USD per lot jika parameter menyimpang, sehingga kebutuhan akan *real-time monitoring* menjadi strategis (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Inisiatif **Process Analytical Technology (PAT)** dari FDA (Guidance for Industry, 2004) dan kerangka **Quality by Design (QbD)** mendorong implementasi sensor multivariat yang mengukur *Critical Quality Attributes (CQA)* secara *in-situ*. Namun pendekatan konvensional—termokopel kabel, *Pressure Rise Test (PRT)*, *Tunable Diode Laser Absorption Spectroscopy (TDLAS)*, dan *Manometric Temperature Measurement (MTM)*—memiliki keterbatasan: jumlah sensor terbatas (umumnya 3–6 vial representatif dari ribuan vial per siklus), instalasi invasif, kalibrasi ulang intensif, dan tidak scalable untuk *continuous manufacturing* (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Meza‐Galvan *et al.* (2026) mengusulkan **Wireless Sensor Networks (WSN)** sebagai paradigma baru yang memungkinkan deployment ratusan node sensor mini pada setiap vial, dengan kemampuan self-organizing, multi-hop routing, dan komunikasi dua arah ke SCADA/MES. Pendekatan ini menjawab tantangan rekayasa sistem: skalabilitas spasial, ketahanan terhadap lingkungan ekstrem (vakum 0,1–100 Pa, suhu −40 °C hingga +40 °C), dan integrasi data temporal-spasial untuk kontrol prediktif. Bab 11 dari volume yang sama (Artusio *et al.*, 2026) memperluas cakupan WSN ke dalam lanskap teknologi emerging PAT: nukleasi terkontrol (*controlled ice nucleation*), spektroskopi NIR/Raman, dan sensor *soft-sensors* berbasis model digital twin. Kedua bab tersebut merepresentasikan konsolidasi riset *state-of-the-art* yang diterbitkan Wiley-VCH pada seri *PAT for Pharmaceutical Freeze-Drying* (2026).

Urgensi工业-nya bersifat ekonomi-teknis: pengurangan *cycle time* 20–30%, peningkatan *batch success rate* dari 85% ke >99%, serta kemungkinan implementasi QbD real-time release yang menurunkan inventaris Work-In-Process (WIP) hingga 40%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Laju sublimasi vial dikendalikan oleh resistansi termal produk kering $R_p$ dan resistansi stopper/chamber $R_s$:

$$q = \frac{T_b - T_p}{R_p} = \frac{\Delta H_{sub} \cdot \dot{m}_{sub}}{A_v} \tag{1}$$

dengan $q$ = fluks panas (W/m²), $T_b$ = suhu rak, $T_p$ = suhu produk pada antarmuka sublimasi, $\Delta H_{sub}$ = entalpi sublimasi es ≈ 2.838 kJ/kg, dan $A_v$ = luas penampang vial. Resistansi produk mengikuti model *resistance of dried layer*:

$$R_p(T_p) = R_{p,0} + \frac{R_{p,1} \cdot P_{w,i}(T_p)}{1 - P_{w,i}(T_p)/P_c} \tag{2}$$

dengan $P_{w,i}$ = tekanan uap air pada antarmuka (fungsi Arrhenius) dan $P_c$ = tekanan ruang.

### 2.2 Model Energi Node Sensor Nirkabel

Konsumsi energi satu node transmisi mengikuti model *first-order radio*:

$$E_{tx}(k, d) = E_{elec} \cdot k + \varepsilon_{amp} \cdot k \cdot d^{\alpha} \tag{3}$$

$E_{elec}$ = energi/bit sirkuit (≈ 50 nJ/bit), $\varepsilon_{amp}$ = energi amplifier (≈ 100 pJ/bit/m²), $k$ = ukuran paket (bit), $d$ =