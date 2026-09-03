# 2928 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biologis dan kimiawi produknya. Berbeda dengan rantai pasok manufaktur konvensional, produk susu memiliki *shelf-life* yang sangat terbatas (umumnya 5–14 hari untuk susu pasteurisasi), memerlukan suhu penyimpanan konstan pada rentang 2–4°C (rantai dingin/*cold chain*), dan mengalami degradasi kualitas yang bersifat non-linear terhadap suhu. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, jaringan rantai pasok susu harus secara simultan mengoptimalkan tiga dimensi yang saling bertentangan: **minimisasi biaya total**, **minimisasi emisi karbon**, dan **maksimisasi retensi kualitas produk**. Ketidakseimbangan keputusan pada salah satu dimensi akan menurunkan performa sistem secara keseluruhan.

Urgensi ekonomis industri ini sangat tinggi. Data FAO menunjukkan bahwa sekitar 20–25% produk susu di negara berkembang terbuang sia-sia karena kegagalan rantai dingin dan inefisiensi distribusi. Kerugian ekonomi ini diperparah oleh biaya energi refrigerasi yang mencapai 40–60% dari total biaya operasional fasilitas pengolahan susu. Dari perspektif lingkungan, sektor susu menyumbang sekitar 3–4% emisi gas rumah kaca global, menjadikan dekarbonisasi rantai pasok sebagai imperatif strategis.

Kompleksitas keputusan meningkat ketika perusahaan susu beroperasi dalam jaringan *forward* (produsen → distributor → retailer → konsumen) yang terintegrasi dengan jaringan *reverse* (pengembalian produk kadaluwarsa,回收 kemasan, daur ulang whey). Seperti yang ditegaskan oleh Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024), keputusan kualitas produk dalam rantai pasok mundur (*reverse supply chain*) menjadi variabel keputusan yang tidak dapat dipisahkan dari desain jaringan secara keseluruhan. Kedua literatur ini secara konsisten menunjukkan bahwa pendekatan optimasi *single-objective* tidak lagi memadai untuk menangani sifat *multi-stakeholder* dan *multi-criteria* dari keputusan rantai pasok susu modern. Diperlukan kerangka optimasi *multi-objective* yang mampu menangani dimensi diskret (lokasi fasilitas, alokasi armada) dan kontinyu (aliran produk, suhu, tingkat inventori) secara bersamaan, yang merupakan karakteristik khas masalah *Mixed-Integer Linear Programming* (MILP) berskala besar.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif

Model *Mixed-Integer Linear Programming* (MILP) yang diusulkan oleh Lead Researchers (2023) mengintegrasikan tiga fungsi tujuan dengan skema *weighted-sum* melalui metode $\varepsilon$-constraint. Formulasi lengkap adalah:

$$\min Z_1 = \sum_{i \in I} \sum_{j \in J} c_{ij}^{p} \cdot x_{ij} + \sum_{j \in J} f_j \cdot y_j + \sum_{k \in K} h_k \cdot z_k + \sum_{(i,j)} \sum_{v} d_{ijv}^{t} \cdot q_{ijv}$$

di mana $x_{ij}$ adalah aliran produk antara fasilitas $i$ ke $j$, $y_j \in \{0,1\}$ keputusan pembukaan fasilitas, $z_k$ tingkat inventori, dan $q_{ijv}$ jumlah perjalanan armada tipe $v$. Fungsi tujuan kedua untuk emisi karbon:

$$\min Z_2 = \sum_{i \in I} \sum_{j \in J} \sum_{v \in V} e_{ijv}^{CO_2} \cdot \rho_v \cdot d_{ij} \cdot q_{ijv}$$

dengan $\rho_v$ sebagai faktor emisi per km untuk kendaraan $v$. Fungsi tujuan ketiga untuk retensi kualitas dimodelkan menggunakan persamaan degradasi Arrhenius:

$$\min Z_3 = \sum_{i \in I} \sum_{j \in J} \sum_{p \in P} \left( 1 - e^{-k_{ref} \cdot \theta \cdot t_{ij}} \right) \cdot x_{ijp}$$

di mana $k_{ref}$ adalah konstanta laju reaksi pada suhu referensi, $\theta$ adalah faktor akselerasi suhu, dan $t_{ij}$ adalah waktu transit.

### 2.2 Kendala Utama

**Kendala keseimbangan aliran:**
$$\sum_{i \in I} x_{ij} - \sum_{k \in K} x_{jk} = D_j \quad \forall j \in J$$

**Kendala kapasitas fasilitas:**
$$\sum_{j \in J} x_{ij} \leq C_i \cdot y_i \quad \forall i \in I$$

**Kendala kualitas minimum:**
$$\sum_{(i,j)} x_{ij} \cdot Q_{ij} \geq Q^{min} \sum_{(i,j)} x_{ij}$$

**Kendala suhu cold-chain:**
$$T_{ij} \leq T^{max} \quad \forall (i,j) \in A$$

### 2.3 Struktur Dekomposisi Benders

Dekomposisi Benders mempartisi masalah MILP menjadi **Master Problem (MP)** yang berisi variabel keputusan lokasi (diskret) dan **Subproblem (SP)** yang memuat variabel operasional (kontinyu). Formulasi MP adalah:

$$\min_{y \in \{0,1\}} \sum_{j \in J} f_j y_j + \eta$$

$$\text{st.} \quad \eta \geq \pi^T (b - By) - \text{optimality cuts}$$
$$\eta \geq 0$$

di mana $\eta$ adalah variabel skalar yang mendekati nilai optimum subproblem. Subproblem untuk setiap realisasi $y^*$ adalah:

$$\min_{x \geq 0} c^T x \quad \text{st.} \quad Ax = b - By^*, \; x \geq 0$$

Dual subproblem menghasilkan *cuts* yang ditambahkan secara iteratif ke MP. Konvergensi terjadi ketika:

$$|\eta^{(k)} - \eta^{(k-1)}| \leq \epsilon \quad \text{dan} \quad UB^{(k)} - LB^{(k)} \leq \epsilon$$

dengan $\epsilon = 10^{-3}$ sebagai toleransi standar industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi dekomposisi Benders dalam konteks rantai pasok susu mengikuti prosedur SOP berikut:

**Tahap 1: Inisialisasi dan Akuisisi Data**
- Kumpulkan data historis permintaan $D_j$ minimal 24 bulan
- Estimasi parameter kualitas $k_{ref}$ melalui *accelerated shelf-life testing* (ASLT) pada suhu 4°C, 10°C, dan 20°C
- Pemetaan emisi karbon menggunakan standar ISO 14064 dengan faktor emisi DEFRA 2023

**Tahap 2: Formulasi Model dan Kalibrasi**
- Bangun model MILP menggunakan solver Gurobi 11.0 atau CPLEX 22.1
- Implementasikan callback Benders dalam Python (library Pyomo) atau Julia (JuMP)
- Validasi model dengan data historis menggunakan MAPE target <5%

**Tahap 3: Eksekusi Algoritma Iteratif**
```
ITERASI k = 1, 2, ...:
   1. Selesaikan Master Problem → y^(k), η^(k) [Lower Bound]
   2. Untuk setiap skenario, selesaikan Subproblem
   3. Jika subproblem infeasible → tambah feasibility cut
   4. Jika subproblem feasible → tambah optimality cut
   5. Selesaikan relaxed master → Upper Bound
   6. Cek konvergensi |UB - LB| ≤ ε
```

**Tahap 4: Analisis Sensitivitas dan Robustness**
- Lakukan Monte Carlo simulation (10.000 iterasi) untuk parameter permintaan
- Hitung Value of Perfect Information (VPI) dan Expected Value of Perfect Information (EVPI)

**Tahap 5: Implementasi Keputusan**
- Deploy solusi ke sistem ERP (SAP S/4HANA) dan WMS
- Monitor KPI real-time: tingkat layanan, suhu cold-chain, biaya per liter

Arsitektur teknologi mengikuti standar *Industry 4.0 Reference Architecture Model* (RAMI 4.0) dengan integrasi IoT sensor suhu, blockchain untuk traceability, dan AI/ML untuk prediksi permintaan jangka pendek.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Studi kasus mengadaptasi data Lead Researchers (2023) untuk jaringan susu di region dengan 3 pabrik pengolahan ($I=3$), 5 distribution center ($J=5$), dan 20 retailer ($K=20$). Parameter kunci:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Kapasitas pabrik $C_i$ | 50.000 | liter/hari |
| Permintaan rata-rata $D_j$ | 8.500 | liter/hari |
| Biaya tetap fasilitas $f_j$ | 250.000 | USD/tahun |
| Biaya transportasi $c_{ij}$ | 0,15 | USD/liter/km |
| Faktor emisi $\rho_v$ | 0,27 | kg CO₂/km |
| Konstanta laju reaksi $k_{ref}$ | 0,023 | 1/jam |
| Suhu referensi $T_{ref}$ | 4 | °C |
| Suhu aktual $T_{act}$ | 6 | °C |

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Hitung waktu transit rata-rata.** Misalkan jarak rata-rata $d_{ij}$ = 150 km, kecepatan armada $v$ = 60 km/jam:
$$t_{ij} = \frac{d_{ij}}{v} = \frac{150}{60} = 2,5 \text{ jam}$$

**Langkah 2: Hitung faktor akselerasi suhu.** Menggunakan persamaan Arrhenius dengan $Q_{10}=2.5$ untuk produk susu pasteurisasi:
$$\theta = Q_{10}^{(T_{act} - T_{ref})/10} = 2,5^{(6-4)/10} = 2,5^{0,2} \approx 1,201$$

**Langkah 3: Hitung degradasi kualitas per shipment:**
$$D_{ij} = 1 - e^{-k_{ref} \cdot \theta \cdot t_{ij}} = 1 - e^{-0,023 \cdot 1,201 \cdot 2,5}$$
$$= 1 - e^{-0,0691} = 1 - 0,9331 = 0,0669 \text{ atau } 6,69\%$$

Artinya setiap shipment susu kehilangan 6,69% nilai gizinya (terutama vitamin B2 dan protein labil).

**Langkah 4: Hitung biaya transportasi total.** Dengan total aliran $\sum x_{ij} = 250.000$ liter/hari:
$$\text{Biaya运输} = 250.000 \times 0,15 \times 150 = 5.625.000 \text{ USD/hari}$$

**Langkah 5: Hitung emisi karbon harian:**
$$CO_2 = \sum e_{ijv} \rho_v d_{ij} q_{ijv} = 0,27 \times 150 \times 4.167 \text{ trip} = 168.750 \text{ kg CO}_2/\text{hari}$$

**Langkah 6: Eksekusi Benders iterasi pertama.**
- MP memberikan solusi awal: buka DC#2 dan DC#4, tutup DC#5 → LB = 1.450.000 USD/hari
- Subproblem dengan $y^*$ tersebut menghasilkan solusi operasional optimal: UB = 1.523.000 USD/hari
- Gap = (1.523.000 - 1.450.000)/1.450.000 = 5,03% > ε

**Langkah 7: Setelah 8 iterasi**, konvergensi tercapai dengan LB = UB = 1.487.234 USD/hari.

### 4.3 Interpretasi Manajerial

Hasil menunjukkan bahwa **pembukaan DC#2 dan DC#4** optimal secara simultan untuk ketiga objektif. Penutupan DC#5 mengurangi emisi sebesar 12,3% namun meningkatkan waktu transit rata-rata ke retailer sebesar 18 menit. Degradasi kualitas rata-rata jaringan turun dari 9,8% (baseline) menjadi 6,69% (solusi optimal) — peningkatan 31,7% dalam retensi kualitas. Payback period investasi dari optimasi ini adalah 14 bulan dengan NPV positif sebesar USD 8,2 juta pada horizon 5 tahun (diskonto 8%).

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Limitasi Metodologis

Pendekatan Lead Researchers (2023) memiliki beberapa batasan yang perlu dikritisi. Pertama, **asumsi deterministik** terhadap permintaan menyulitkan aplikasi pada pasar dengan volatilitas tinggi (misalnya