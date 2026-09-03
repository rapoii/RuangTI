# 2812 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Optimalisasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam manufaktur farmasi yang digunakan untuk menstabilkan produk biologis, vaksin, antibodi monoklonal, dan API (*Active Pharmaceutical Ingredient*) yang sensitif terhadap termal. Proses ini menghilangkan air melalui dua tahap berurutan: pengeringan primer (sublimasi) pada tekanan rendah (umumnya 10–30 Pa) dan pengeringan sekunder (desorpsi) pada suhu lebih tinggi (Meza-Galvan et al., 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Secara global, pasar liofilisasi farmasi bernilai lebih dari USD 8,5 miliar pada 2025 dan diproyeksikan tumbuh pada CAGR 8,2% hingga 2032, didorong oleh peningkatan pipeline biofarmasi yang membutuhkan formulasi steril.

Urgensi operasional utama terletak pada *batch failure rate* yang masih berkisar 5–12% pada fasilitas konvensional, dengan kerugian finansial yang bervariasi dari USD 50.000 per vial untuk produk onkologi hingga USD 2 juta per batch untuk terapi gen berbasis viral vector. Menurut Meza-Galvan, Strongrich, dan Darwish (2026), variabilitas proses ini terutama muncul dari *spatial heterogeneity* suhu produk ($T_p$) dan tekanan ruang ($P_c$) yang tidak terdeteksi secara real-time. Sensor thermocouple konvensional (T型 atau K型) umumnya hanya berjumlah 4–8 unit per dryer dengan volume chamber 200–500 L, sehingga coverage thermal mapping sangat terbatas.

Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menekankan bahwa paradigma *Industry 4.0* dan inisiatif FDA PAT (Process Analytical Technology) sejak 2004 telah mendorong adopsi sensor non-invasif, *soft sensing*, dan arsitektur jaringan terdistribusi. Wireless Sensor Networks (WSN) muncul sebagai enabler untuk *real-time monitoring* dengan densitas sensor yang lebih tinggi (≥40 node per chamber), biaya instalasi retrofit yang lebih rendah (tidak memerlukan kabel hermetik melalui dinding vakum), dan kemampuan *mesh self-healing* yang krusial untuk lingkungan steril GMP.

Dari perspektif rekayasa sistem industri, integrasi WSN ke dalam siklus freeze-drying menciptakan umpan balik data yang sebelumnya tidak tersedia, memungkinkan transisi dari *Quality by Testing* (QbT) menuju *Quality by Design* (QbD) dengan *Real-Time Release* (RTR). Hal ini berdampak langsung pada *Overall Equipment Effectiveness* (OEE), pengurangan *cycle time*, dan kepatuhan terhadap regulasi FDA 21 CFR Part 11 serta EU GMP Annex 15.

## 2. Landasan Teori & Formulasi Matematis

Model matematis fundamental liofilisasi yang menjadi dasar interpretasi data WSN adalah persamaan *heat and mass transfer* simultan pada fase pengeringan primer (Meza-Galvan et al., 2026):

$$\frac{dq}{dt} = \frac{T_s - T_p}{R_s + R_p} = K_v \cdot (T_s - T_p)$$

di mana:
- $\frac{dq}{dt}$ adalah fluks sublimasi (kg·m⁻²·h⁻¹)
- $T_s$ adalah suhu rak (shelf temperature) dalam °C
- $T_p$ adalah suhu produk pada *sublimation front* dalam °C
- $R_s$ adalah resistansi termal dry layer (m²·K·W⁻¹)
- $R_p$ adalah resistansi termal produk beku (m²·K·W⁻¹)
- $K_v$ adalah koefisien transfer panas total (W·m⁻²·K⁻¹)

Mass transfer selama sublimasi diekspresikan melalui persamaan:

$$J_w = \frac{P_{ice}(T_p) - P_c}{R_p^{mass}}$$

dengan $P_{ice}(T_p)$ adalah tekanan uap es pada suhu $T_p$ (dihitung menggunakan persamaan *Clausius-Clapeyron*), $P_c$ tekanan ruang (chamber pressure), dan $R_p^{mass}$ adalah resistansi transfer massa dry layer (m·s·kg⁻¹). Korelasi $K_v$ dan $R_p^{mass}$ dikarakterisasi secara eksperimental melalui *pressure rise test* (manometric temperature measurement).

Untuk arsitektur WSN, model konsumsi energi node mengikuti persamaan *first-order radio*:

$$E_{node} = N_{tx} \cdot (E_{elec} + \epsilon_{amp} \cdot d^{\alpha}) + N_{rx} \cdot E_{elec} + P_{sleep} \cdot t_{sleep}$$

di mana:
- $E_{elec}$ = 50 nJ/bit (energi elektronik)
- $\epsilon_{amp}$ = 100 pJ/bit/m² untuk $\alpha = 2$ (path loss)
- $d$ = jarak transmisi (m)
- $\alpha$ = path loss exponent (umumnya 2–4 dalam ruang vakum logam)
- $N_{tx}, N_{rx}$ = jumlah bit yang dikirim/diterima

*Quality of Service* (QoS) jaringan diukur melalui Packet Delivery Ratio (PDR):

$$PDR = \frac{N_{received}}{N_{transmitted}} \times 100\%$$

dan latensi end-to-end:

$$L_{e2e} = t_{prop} + t_{queue} + t_{proc} + t_{trans}$$

Threshold QoS minimum untuk aplikasi liofilisasi (Meza-Galvan et al., 2026) adalah PDR ≥ 99,5% dan $L_{e2e}$ ≤ 500 ms untuk mempertahankan *temporal resolution* data $T_p$ pada 1 Hz.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN pada lini freeze-drying mengikuti SOP berbasis framework V-model dari Artusio et al. (2026):

**Tahap 1: Karakteristik Proses (Process Characterization)**
1. Lakukan *Design of Experiment* (DoE) faktorial 2³ pada parameter $T_s$, $P_c$, dan durasi primary drying.
2. Identifikasi *Critical Process Parameters* (CPP) dan *Critical Quality Attributes* (CQA) – residual moisture ≤ 1,0% w/w.
3. Lakukan *Pressure Rise Test* untuk menentukan $K_v$ dan $R_p$.

**Tahap 2: Desain Arsitektur Jaringan**
1. Tentukan densitas node: minimal 1 node per 100 vial untuk batch 10.000 vial.
2. Pilih protokol radio: IEEE 802.15.4/ZigBee (2,4 GHz) atau LoRaWAN (868/915 MHz) untuk penetrasi dinding baja chamber.
3. Pastikan kompatibilitas *feedthrough* hermetik (vacuum-rated SMA connector, leak rate ≤ 10⁻⁹ Pa·m³/s).
4. Implementasikan topologi *mesh* dengan ≥3 node redundan untuk fault tolerance.

**Tahap 3: Kalibrasi dan Validasi (IQ/OQ/PQ)**
1. **IQ (Installation Qualification):** verifikasi posisi node terhadap FMEA risiko kontaminasi.
2. **OQ (Operational Qualification):** uji linearitas sensor pada rentang −50°C hingga +60°C dengan akurasi ±0,3°C (NIST-traceable).
3. **PQ (Performance Qualification):** tiga batch konsekutif harus menunjukkan PDR ≥ 99,5% dan *coherence* data $\Delta T_p$ ≤ 0,5°C antar node.

**Tahap 4: Integrasi PAT dan Data Analytics**
Data dari gateway WSN diteruskan ke historian (PI System, OSIsoft) dengan arsitektur:

```
WSN Node → Gateway → MQTT Broker → Time-Series DB → PAT Dashboard
```

Stream Processing menggunakan Kafka dan algoritma *Moving Principal Component Analysis* (MPCA) untuk deteksi anomali (Meza-Galvan et al., 2026). SOP menyebutkan *multivariate control chart* (Hotelling $T^2$ dan Q-residual) untuk *real-time batch monitoring*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah fasilitas CDMO (Contract Development & Manufacturing Organization) memproduksi batch 10.000 vial produk antibodi monoklonal pada freeze dryer 30 m² dengan protokol WSN 40 node. Parameter proses target: $T_s = 25°C$, $P_c = 15$ Pa, durasi primary drying 35 jam.

**Langkah 1: Perhitungan Fluks Sublimasi Awal**

Asumsikan $T_p$ awal pada −35°C (di bawah $T_{eutectic}$ produk −28°C), dengan $K_v = 14$ W·m⁻²·K⁻¹ (tipikal vials 6R Schott):

$$\frac{dq}{dt}\bigg|_{t=0} = K_v \cdot (T_s - T_p) = 14 \cdot (25 - (-35)) = 14 \cdot 60 = 840 \text{ W/m}^2$$

Konversi fluks ke laju sublimasi per vial (luas vial 6R ≈ 3,14 cm² = 3,14 × 10⁻⁴ m²):

$$\dot{m}_{vial} = 840 \times 3{,}14 \times 10^{-4} \times 3600 / (2{,}5 \times 10^6) = 0{,}380 \text{ g/jam per vial}$$

**Langkah 2: Total Massa Air yang Disublimasi**

Untuk fill volume 3 mL dengan konsentrasi padatan 10% w/v, massa air per vial ≈ 2,7 g. Total batch:

$$m_{total} = 10{,}000 \times 2{,}7 = 27{,}000 \text{ g} = 27 \text{ kg}$$

**Langkah 3: Estimasi Durasi dengan Efisiensi WSN**

Tanpa WSN, variabilitas $T_p$ antar lokasi vial mencapai ±3°C, menyebabkan *over-drying* 15% pada vial pinggir dan *under-drying* pada vial pusat. Dengan WSN, feedback control berbasis $T_p$ aktual memungkinkan optimasi adaptive:

$$T_{cycle,opt} = T_{cycle,conv} \cdot (1 - \eta_{WSN})$$

dengan $\eta_{WSN}$ = 0,12 (efisiensi penghematan waktu dari studi Meza-Galvan et al., 2026):

$$T_{cycle,opt} = 35 \times (1 - 0{,}12) = 30{,}8 \text{ jam}$$

**Langkah 4: Perhitungan Lifetime Baterai Node**

Asumsi transmisi 1 Hz, payload 32 byte per node:

$$E_{tx} = 32 \times 8 \times (50 \times 10^{-9} + 100 \times 10^{-12} \times 5^2) = 12{,}8 \text{ μJ/paket}$$

Untuk satu siklus 31 jam:

$$E_{cycle} = 12{,}8 \times 10^{-6} \times 3600 \times 31 = 1{,}43 \text{ J}$$

Baterai Li-ion 600 mAh @ 3,7 V = 7.992.000 J. Dengan siklus charge-discharge 80% Depth of Discharge dan 300 siklus:

$$\text{Lifetime} = \frac{7{,}992{,}000 \times 0{,}8}{1{,}43} \times 300 \approx 1{,}34 \times 10^9 \text{ paket} \approx 38{,}0 \text{ tahun}$$

Hasil ini mengindikasikan bahwa constraint energi bukan isu utama; namun, pada aplikasi wireless sensor jaringan terdistribusi (*distributed temperature sensing* via DTS Raman, Artusio et al., 2026), baterai menjadi pembatas kritis.

**Interpretasi Manajerial:** Implementasi WSN menghasilkan penghematan waktu siklus 4,2 jam per batch. Untuk 120 batch/tahun dengan kapasitas harian 35 jam dan valuasi batch USD 500.000, penghematan biaya tahunan:

$$\text{CAPEX WSN} \approx \text{USD } 180{,}000 \text{ (retrofit)}$$
$$\text{Savings} = 120 \times (4{,}2/24) \times 500{,}000 = \text{USD } 10{,}5 \text{ juta/tahun}$$

Payback period < 1 bulan dengan asumsi tidak ada peningkatan scrap rate.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologi:** Meza-Galvan et al. (2026) mengakui bahwa sensor nirkabel dalam ruang vakum logam menghadapi tantangan multipath propagation yang menurunkan *link margin* hingga 8–12 dB. Validitas model $R_p$ berkurang pada fase secondary drying di mana $R_p \rightarrow 0$, sehingga model quasi-steady state kurang representatif. Selain itu, *drift* sensor thermocouple di bawah 0,1°C/tahun membutuhkan kalibrasi ulang setiap 6