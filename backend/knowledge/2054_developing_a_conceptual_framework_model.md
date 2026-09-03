# 2054 — Manajemen Rantai Pasok Dingin Produk Mudah Rusak: Kerangka Konseptual, Optimasi Jaringan, dan Integrasi Blockchain untuk Keamanan Vakin dan Produk Pangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Developing a Conceptual Framework Model for Effective Perishable Food Cold-Supply-Chain Management Based on Structured Literature Review
**Jurnal & Sitasi Utama:** Hafiz Wasim Akram, Samreen Akhtar, Alam Ahmad (2023). *Sustainability*, 15(6), 4907. DOI: [https://doi.org/10.3390/su15064907](https://doi.org/10.3390/su15064907)
**Sitasi Pendukung:** Mahdyeh Shiri, Parviz Fattahi, Fatemeh Sogandi (2024). *Scientific Reports*, 14, Article 67071. DOI: [https://doi.org/10.1038/s41598-024-67071-0](https://doi.org/10.1038/s41598-024-67071-0)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok dingin (*cold supply chain* — CSC) untuk produk pangan mudah rusak (*perishable food*) merupakan salah satu subsistem logistik paling kompleks sekaligus paling kritis dalam rekayasa sistem industri modern. Akram, Akhtar, dan Ahmad (2023) dalam *Sustainability* melakukan tinjauan literatur terstruktur terhadap 103 artikel ilmiah yang terbit pada rentang 2001–2022 di basis data Scopus dan Web of Science untuk memetakan kondisi mutakhir manajemen rantai pasok dingin pangan (*Food Cold-Chain Management* — FCCM). Hasil utama mereka menunjukkan tiga hal fundamental: (1) terjadi pergeseran paradigma menuju *sustainable FCCM* yang menyeimbangkan manfaat finansial, ekologis, dan sosial; (2) praktik cold-chain berkelanjutan masih didominasi negara maju, sementara negara berkembang — termasuk Indonesia — menghadapi kesenjangan struktural; serta (3) masalah klasik masih membayangi yaitu *lead time* tinggi, biaya mahal, tingkat waste signifikan, return rate tinggi, komplain pelanggan, dan rendahnya kepuasan konsumen [https://doi.org/10.3390/su15064907](https://doi.org/10.3390/su15064907).

Urgensi ekonominya sangat nyata. FAO memperkirakan sekitar 14% pangan global hilang antara panen hingga ritel, dan di kawasan Asia Tenggara khususnya untuk produk perikanan dan hortikultura, tingkat loss dapat mencapai 25–40% karena *broken cold chain*. Biaya energi refrigerasi untuk mempertahankan suhu 0–4 °C pada produk perishable mencapai 30–50% dari total biaya operasional distribusi. Akram et al. (2023) menekankan bahwa kerangka konseptual mereka menyoroti tiga pilar: integrasi sensor IoT untuk monitoring suhu real-time, optimalisasi jaringan distribusi multi-echelon, dan kolaborasi aktor rantai pasok melalui platform digital.

Relevansi langsung dengan konteks Indonesia dapat dilihat dari produk perikanan. Indonesia merupakan produsen perikanan tangkap terbesar kedua dunia dengan produksi >6,5 juta ton/tahun, namun lebih dari 20% hasil tangkapan rusak sebelum sampai konsumen karena *cold chain* yang terputus. Shiri, Fattahi, dan Sogandi (2024) di *Scientific Reports* memberikan pelajaran berharga dari rantai pasok vakin COVID-19 bahwa integrasi blockchain mampu meningkatkan transparansi dan akuntabilitas rantai pasok farmasi — pendekatan yang sama persis dapat di-*移植* ke rantai pasok pangan [https://doi.org/10.1038/s41598-024-67071-0](https://doi.org/10.1038/s41598-024-67071-0). Kedua paper secara sinergetik menyusun basis rekayasa untuk Modul 2054 ini: paper Akram et al. sebagai kerangka konseptual, dan paper Shiri et al. sebagai referensi formulasi optimasi stokastik-blokchain yang dapat diadopsi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Kualitas Termal (Arrhenius)

Degradasi mutu pangan mudah rusak mengikuti persamaan kinetika reaksi orde pertama yang bergantung pada suhu. Akram et al. (2023) merujuk pada model standar yang digunakan dalam FCCM:

$$Q(t) = Q_0 \cdot e^{-k(T)\cdot t}$$

di mana $Q(t)$ adalah indeks kualitas pada waktu $t$, $Q_0$ adalah kualitas awal, dan $k(T)$ adalah laju degradasi yang merupakan fungsi suhu absolut $T$ (Kelvin). Konstanta laju mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) konstanta gas universal. Untuk mengkuantifikasi efek kenaikan suhu, digunakan rasio $Q_{10}$:

$$Q_{10} = \left(\frac{k_2}{k_1}\right)^{\frac{10}{T_2-T_1}}$$

Untuk ikan segar, nilai $Q_{10}$ tipikal berada pada rentang 2–4, artinya setiap kenaikan suhu 10 °C laju deteriorasi meningkat 2–4 kali lipat.

### 2.2 Model Total Biaya Cold Chain

Total biaya sistem CSC dapat diformulasikan sebagai:

$$TC = C_{storage} + C_{transport} + C_{energy} + C_{waste} + C_{penalty}$$

Secara ekspansif:

$$TC = \sum_{i\in I}\sum_{j\in J}c_{ij}^{tr}x_{ij} + \sum_{k\in K}h_k I_k + \sum_{i\in I}p_i\cdot s_i + \sum_{j\in J}\pi_j\cdot b_j$$

di mana:
- $c_{ij}^{tr}$ = biaya transport per unit dari node $i$ ke node $j$ (termasuk *reefer cost*)
- $x_{ij}$ = kuantitas aliran produk
- $h_k$ = biaya *holding* per unit di fasilitas $k$
- $I_k$ = level inventori di $k$
- $p_i$ = biaya waste per unit rusak
- $s_i$ = unit yang terbuang di node $i$
- $\pi_j$ = penalti akibat keterlambatan di node tujuan $j$
- $b_j$ = unit yang terlambat

### 2.3 Model Jaringan Multi-Kanal Vakin (Adaptasi Shiri et al. 2024)

Shiri et al. (2024) merumuskan model *mixed-integer linear programming* untuk jaringan distribusi vakin multi-channel di bawah ketidakpastian hybrid. Formulasi intinya:

$$\min Z = \sum_{i\in I}\sum_{j\in J}c_{ij}x_{ij} + \sum_{k\in K}f_k y_k + \sum_{r\in R}\sum_{d\in D}u_{rd}w_{rd}$$

*Subject to:*

$$\sum_{j\in J}x_{ij} \leq \sum_{k\in K}\text{Cap}_k\cdot y_k, \quad \forall i\in I$$

$$\sum_{i\in I}x_{ij} = D_j, \quad \forall j\in J$$

$$x_{ij} \geq 0,\quad y_k \in \{0,1\}$$

di mana $y_k$ adalah variabel biner pembukaan fasilitas, $\text{Cap}_k$ kapasitas, dan $D_j$ demand. Ketidakpastian parameter (demand, kapasitas, biaya) dimodelkan dengan himpunan fuzzy dan pendekatan *robust optimization*.

### 2.4 Indikator Kinerja Cold Chain

Akram et al. (2023) mengusulkan *Key Performance Indicators* (KPI) utama FCCM:

$$\text{Cold Chain Integrity (CCI)} = \frac{T_{actual} - T_{threshold}^{upper}}{T_{critical} - T_{threshold}^{upper}}$$

$$\text{Waste Rate (WR)} = \frac{Q_{spoiled}}{Q_{total}} \times 100\%$$

$$\text{On-Time Delivery (OTD)} = \frac{N_{on-time}}{N_{total}} \times 100\%$$

$$\text{Energy Efficiency (EE)} = \frac{Q_{preserved}}{E_{consumed}} \;\; \text{(kg/kWh)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka konseptual Akram et al. (2023) dan formulasi matematis Shiri et al. (2024), SOP implementasi FCCM terdiri atas **tujuh tahap** berikut yang divisualisasikan dalam diagram alir rekayasa:

```
[1] Identifikasi Produk & Klasifikasi Suhu
        │
        ▼
[2] Pemetaan Jaringan Multi-Echelon
        │
        ▼
[3] Instrumentasi Sensor IoT (T, RH, GPS)
        │
        ▼
[4] Formulasi Model Optimasi → Mixed-Integer Linear Programming
        │               ↑↓
        │      [5] Handling Hybrid Uncertainty
        │       (Fuzzy + Robust Optimization)
        ▼
[6] Integrasi Blockchain Ledger (Traceability)
        │
        ▼
[7] Monitoring KPI Real-Time & Continuous Improvement
```

**Tahap 1 — Klasifikasi Termal.** Produk diklasifikasikan ke dalam zone suhu sesuai Codex Alimentarius: *frozen* (≤ −18 °C), *chilled* (0–4 °C), *cool* (8–12 °C). Setiap kelas memiliki $Q_{10}$ berbeda yang menjadi input parameter model.

**Tahap 2 — Pemetaan Jaringan.** Menggunakan *Structured Literature Review* methodology Akram et al. (2023): identifikasi node supplier, DC, hub, retailer. Tentukan jarak, kapasitas, dan demand historis.

**Tahap 3 — Instrumentasi IoT.** Sensor suhu DS18B20, RFID untuk traceability, GPS untuk tracking posisi. Data rate minimum 1 sampel/menit selama transport. Setiap kontainer reefer memiliki *data logger* dengan *buffer* 30 hari.

**Tahap 4 — Formulasi Optimasi.** Bangun model MILP sesuai persamaan (6)–(9). Gunakan solver seperti CPLEX, Gurobi, atau open-source CBC. Validasi model dengan data historis 6–12 bulan.

**Tahap 5 — Ketidakpastian.** Terapkan *hybrid uncertainty* sesuai Shiri et al. (2024): parameter deterministik (kapasitas armada) menjadi *fuzzy*, parameter probabilistik (demand musiman) menjadi *stochastic scenario*. Solusi optimal harus *robust* pada semua skenario.

**Tahap 6 — Blockchain.** Implementasi *permissioned blockchain* (Hyperledger Fabric) dengan smart contract yang mencatat setiap perubahan suhu, lokasi, dan kepemilikan. Setiap *hash block* berisi timestamp + sensor reading + actor ID — mengikuti arsitektur Shiri et al. (2024) untuk vakin yang disesuaikan untuk pangan.

**Tahap 7 — Monitoring.** Dashboard real-time menampilkan CCI, WR, OTD, EE. *Alert* otomatis bila CCI > 1 (suhu melewati ambang). *Root cause analysis* setiap kejadian break-chain.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Distribusi Ikan Segar dari PPS Nizam Zachman (Jakarta) ke Tiga Kota

Perusahaan distributor ikan “PT Samudra Jaya” memiliki pusat distribusi di Jakarta dan melayani tiga pasar induk: Bandung (220 km), Surabaya (770 km), dan Medan (1.870 km). Produk adalah ikan tuna segar yang memerlukan suhu 0–2 °C dengan $Q_{10} = 3$, energi aktivasi $E_a = 84$ kJ/mol, dan waktu paruh mutu pada 2 °C = 8 hari.

**Tabel 1. Data Input Optimasi Jaringan Cold Chain**

| Parameter | Bandung (B) | Surabaya (S) | Medan (M) |
|-----------|-------------|--------------|-----------|
| Demand harian, $D_j$ (kg) | 800.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
