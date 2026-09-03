# 2197 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) Baterai Pensiun: Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Closed-Loop Supply Chain Strategy untuk Baterai Pensiun (Echelon Utilization + Recycling Remanufacturing)  
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)  
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi mobilitas listrik global memicu fenomena *tsunami pensiun* baterai lithium-ion (LIB) berskala petavolt-hour yang akan membanjiri rantai pasok pada dekade 2025–2035. JIANG Lin & TANG Lidan (2025) dalam makalahnya yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering* (ICLSE 2024) menegaskan bahwa strategi *closed-loop supply chain* (CLSC) yang mengintegrasikan **pemanfaatan bertingkat (*echelon utilization*)** dan **remanufaktur daur ulang (*recycling remanufacturing*)** menjadi keharusan strategis, bukan sekadar opsi lingkungan. Baterai kendaraan listrik (EV) yang pensiun dengan *State of Health* (SoH) 70–80% masih memiliki kapasitas residu yang signifikan untuk aplikasi *second-life* seperti penyimpanan energi terbarukan (*stationary energy storage system*/SESS), telekomunikasi base transceiver station (BTS), dan *forklift* industri.

Urgensi ekonominya nyata: harga litium karbonat pada 2022 sempat menembus USD 78.000/ton sebelum turun ke kisaran USD 13.000–15.000/ton (2024), sementara biaya produksi sel baru masih didominasi oleh material katoda (≈40–50% *bill of materials*). Substitusi baterai pensiun yang lolos grading SoH ke lini SESS dapat menekan *levelized cost of storage* (LCOS) hingga 30–40% dibanding baterai baru. Sebaliknya, baterai dengan SoH <70% atau gagal grading harus dialirkan ke jalur *hydrometallurgical recycling* untuk mengekstrak Li, Ni, Co, Mn — yang merupakan *critical raw materials* dengan risiko geopolitik tinggi. Tanpa desain CLSC yang optimal, terjadi kebocoran *value leakage* berupa penumpukan baterai di *landfill* ilegal, emisi karbon tersembunyi, dan potensi *thermal runaway* yang membahayakan keselamatan publik.

Shin, Kim & Jeong (2024) memperkuat urgensi ini dengan memperkenalkan *Return Management System* (RMS) yang robust terhadap ketidakpastian *return quality* dan fluktuasi permintaan — suatu dimensi yang juga relevan dalam konteks baterai pensiun di mana kualitas lot masuk bersifat stokastik. Kedua literatur ini menjadi kerangka rujukan utama modul 2197 dalam merumuskan keputusan taktis-operasional bagi integrator baterai, *recycling hub*, dan operator SESS.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Sistem CLSC Baterai Pensiun

Arsitektur CLSC mengikuti topologi *hybrid closed-loop* (JIANG & TANG, 2025) yang terdiri dari empat entitas: **OEM baterai baru (M)**, **Operator Rantai Eceran (R)**, **Pusat Koleksi & Pengujian (C)**, dan **Lini Remanufaktur/Daur Ulang (Rec)**. Aliran *forward chain*: M → R → konsumen; aliran *reverse chain*: konsumen → C → (echelon market E atau Rec).

### 2.2 Formulasi Model Optimasi

Notasi parameter dan variabel keputusan:

| Simbol | Definisi |
|---|---|
| $p_n, p_e, p_r$ | Harga jual baterai baru, baterai *second-life*, material daur ulang (per kWh) |
| $c_c, c_t, c_d, c_{rm}$ | Biaya koleksi, pengujian/grading, pembongkaran, remanufaktur (per kWh) |
| $\tau \in [0,1]$ | Tingkat koleksi baterai pensiun |
| $\theta \in [0,1]$ | Proporsi baterai lulus grading yang dialokasikan ke *echelon utilization* |
| $\eta \in [0,1]$ | Efisiensi recovery material di lini daur ulang |
| $s$ | Subsidi pemerintah per kWh baterai pensiun yang diproses |
| $D_n, D_e, D_r$ | Permintaan deterministik-stokastik untuk masing-masing lini |

Fungsi permintaan mengikuti model linier price-dependent (berdasarkan bentuk pada JIANG & TANG, 2025):

$$D_n(p_n) = a_n - b_n p_n, \quad D_e(p_e) = a_e - b_e p_e, \quad D_r(p_r) = a_r - b_r p_r$$

dengan $a_i > 0$ merepresentasikan *market size* dan $b_i > 0$ adalah sensitivitas harga.

Volume baterai pensiun yang berhasil dikembalikan ke pusat koleksi:

$$Q = \tau \cdot R_{total}$$

di mana $R_{total}$ adalah total baterai pensiun pasar (per kWh). Aliran *fork* di pusat koleksi:

$$E = \theta \cdot Q, \quad M_{in} = (1-\theta) \cdot Q$$

dengan $E$ adalah volume baterai *echelon* dan $M_{in}$ adalah volume feedstock daur ulang.

### 2.3 Fungsi Objektif (Profit Total CLSC)

Mengikuti kerangka JIANG & TANG (2025), profit total sistem:

$$\Pi(p_n, p_e, p_r, \theta, \tau) = \underbrace{p_n D_n + p_e D_e + p_r \eta M_{in}}_{\text{Pendapatan}} + \underbrace{s \cdot Q}_{\text{Subsidi}} - \underbrace{(c_c + c_t + c_d + c_{rm}) \cdot Q}_{\text{Biaya proses reverse}}$$

### 2.4 Model Robust dengan Return Management System (Shin, Kim & Jeong, 2024)

Untuk menangani ketidakpastian kualitas dan permintaan, Shin, Kim & Jeong (2024) membangun model *min-max regret*:

$$\min_{\mathbf{x} \in X} \max_{\mathbf{u} \in U} \left[ f(\mathbf{x}, \mathbf{u}) - \rho \cdot \mathbb{E}_{\mathbf{u}}[f(\mathbf{x}, \mathbf{u})] \right]$$

di mana $\mathbf{x}$ adalah vektor keputusan CLSC, $\mathbf{u} \in U$ adalah skenario ketidakpastian (*return rate*, *SoH distribution*, *price volatility*), dan $\rho \in [0,1]$ adalah koefisien权衡 (*trade-off*) antara robust dan ekspektasi.

### 2.5 Kendala

$$0 \le \theta, \tau, \eta \le 1$$
$$E + M_{in} = Q$$
$$D_n, D_e, D_r \ge 0$$
$$p_i^{min} \le p_i \le p_i^{max}$$

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

JIANG & TANG (2025) mengusulkan **protokol 7-tahap rekayasa CLSC baterai pensiun** yang dapat diadopsi operator industri:

```
[Tahap 1] Estimasi Volume Pensiun (Forecasting)
   ├─ Pakai data telematika armada EV (VIN-linked)
   ├─ Proyeksi SoH curve: SoH(t) = SoH_0 · e^(-λt), λ≈0.02/tahun
   └─ Output: R_total dalam kWh per tahun

[Tahap 2] Desain Jaringan Reverse Logistics
   ├─ Optimasi lokasi hub koleksi (p-median / facility location)
   └─ Radius layanan ≤ 150 km (berdasarkan studi JIANG & TANG)

[Tahap 3] Koleksi & Transportasi
   ├─ Standar UN 38.3, IEC 62619
   └─ Insentif deposit-refund (DRS) untuk konsumen

[Tahap 4] Pengujian & Grading (Tahap Kritis)
   ├─ Capacity test (CCCV 0.5C)
   ├─ Internal resistance (AC impedance 1 kHz)
   ├─ Kriteria lulus echelon: SoH ≥ 70%, IR ≤ 1.5× baseline
   └─ Yield grading historis: θ rata-rata 0.55–0.70

[Tahap 5] Alokasi Dual-Channel (Decision Point)
   ├─ IF SoH ≥ 80% → SESS premium / EV low-power
   ├─ IF 70% ≤ SoH < 80% → BTS telekom / forklift
   └─ IF SoH < 70% → feedstock daur ulang

[Tahap 6] Remanufacturing / Hydrometallurgical Recycling
   ├─ Disassembly → shredding → leaching (H2SO4 + H2O2)
   ├─ Recovery target: Li ≥ 90%, Ni/Co ≥ 95%
   └─ Residu ke black mass → refining

[Tahap 7] Closed-Loop Material Flow ke OEM
   └─ Traceability via blockchain (Battery Passport, EU Reg. 2023/1542)
```

Standar referensi: **ISO 14040 (LCA)**, **ISO 14064 (carbon accounting)**, **EU Battery Regulation 2023/1542**, **GB/T 34014-2017** (Cina, kode traceability baterai otomotif).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter (Sintetis, realistis untuk pasar Cina 2026)

Asumsikan OEM dengan volume pensiun baterai EV tahun 2026:

$$R_{total} = 500{,}000 \text{ kWh/tahun}$$

Parameter biaya (RMB/kWh, berdasarkan JIANG & TANG, 2025; data industri pasar Cina):

$$c_c = 80, \quad c_t = 120, \quad c_d = 150, \quad c_{rm} = 600$$
$$s = 200, \quad \eta = 0.92$$

Parameter permintaan:

$$a_n = 800{,}000, \; b_n = 200 \Rightarrow D_n(p_n) = 800{,}000 - 200 p_n$$
$$a_e = 400{,}000, \; b_e = 500 \Rightarrow D_e(p_e) = 400{,}000 - 500 p_e$$
$$a_r = 600{,}000, \; b_r = 300 \Rightarrow D_r(p_r) = 600{,}000 - 300 p_r$$

### 4.2 Langkah Kalkulasi

**Langkah A — Volume reverse chain:**
Misal $\tau = 0.70$:
$$Q = 0.70 \times 500{,}000 = 350{,}000 \text{ kWh}$$

**Langkah B — Alokasi echelon vs recycling:**
Misal $\theta = 0.60$:
$$E = 0.60 \times 350{,}000 = 210{,}000 \text{ kWh}$$
$$M_{in} = 0.40 \times 350{,}000 = 140{,}000 \text{ kWh}$$

**Langkah C — Harga ekuilibrium optimal** (syarat first-order $\partial \Pi / \partial p_i = 0$):

Untuk permintaan $D_i = a_i - b_i p_i$, harga optimum monopoli: $p_i^* = \dfrac{a_i + b_i \cdot c_i^{eff}}{2 b_i}$, dengan $c_n^{eff}=0$, $c_e^{eff} = c_c+c_t+c_d \approx 350$ RMB/kWh, $c_r^{eff} = (c_c+c_t+c_d+c_{rm})/\eta \approx 970.65$ RMB/kWh:

$$p_n^* =
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
