# 2496 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu Menggunakan Dekomposisi Benders
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, 6(5). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. SSRN. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks seiring dengan meningkatnya permintaan konsumen akan produk segar berkualitas tinggi, tekanan regulasi terhadap jejak karbon, dan ketidakpastian rantai pasok pasca-pandemi. Produk susu merupakan kategori barang mudah rusak (*perishable goods*) dengan umur simpan yang pendek, biasanya antara 5–21 hari tergantung pada jenis proses (pasteurisasi, UHT, fermentasi), sehingga keputusan lokasi fasilitas, kapasitas produksi, armada distribusi, dan strategi inventaris memiliki dampak langsung terhadap tingkat kehilangan produk (*spoilage loss*) dan profitabilitas. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, jaringan rantai pasok susu harus dirancang secara simultan untuk meminimumkan biaya total, memaksimumkan kesegaran produk yang sampai ke konsumen, dan meminimumkan emisi karbon — tiga tujuan yang pada dasarnya saling konfliktif sehingga memerlukan kerangka kerja *multi-objective* yang ketat secara matematis.

Konteks operasional yang melatarbelakangi paper ini adalah struktur multi-echelon yang lazim di industri susu: *raw milk collection centers* di tingkat peternakan, *processing plants* untuk konversi menjadi berbagai SKU (susu pasteurisasi, keju, yoghurt, susu bubuk), *distribution centers* dengan armada berpendingin (*cold-chain*), dan *retail outlets* sebagai titik konsumsi akhir. Variabel permintaan bersifat *stokastik* karena fluktuasi musiman produksi susu sapi (yang bergantung pada siklus laktasi dan ketersediaan hijauan), sementara kapasitas fasilitas memiliki sifat *integer* karena bersifat diskret (jumlah lini produksi, jumlah truk). Kompleksitas komputasional masalah Mixed-Integer Linear Programming (MILP) berskala besar ini menjadi motivasi utama penggunaan **Dekomposisi Benders** (Benders, 1962) sebagai teknik dekomposisi yang memisahkan masalah keputusan investasi (lokasi & kapasitas, *first-stage*) dari masalah operasional (aliran produk, *second-stage*).

Urgensi ekonominya dapat diukur: studi menunjukkan bahwa kehilangan produk susu akibat keputusan jaringan yang suboptimal dapat mencapai 8–15% dari total produksi, dengan estimasi kerugian finansial global melebihi USD 30 miliar per tahun. Urgensi teknis terlihat dari kebutuhan untuk menyelesaikan instance masalah dengan ratusan variabel biner dan ribuan variabel kontinu dalam waktu komputasi yang layak (< 30 menit) untuk mendukung keputusan *what-if analysis* oleh perencana rantai pasok. Paper Lead Researchers (2023) menjawab kebutuhan ini dengan mengusulkan kerangka ε-constraint yang dikombinasikan dengan Benders, sementara Zhang, Li, & Ren (2024) memperkuat pendekatan pada konteks *reverse supply chain* dengan keputusan kualitas produk yang dikembalikan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi MILP Multi-Objektif

Model Lead Researchers (2023) merumuskan tiga fungsi tujuan yang diminimumkan secara simultan:

$$Z_1 = \sum_{i \in I} f_i \cdot y_i + \sum_{j \in J} g_j \cdot z_j + \sum_{(i,j) \in A} c_{ij} \cdot x_{ij} + \sum_{(j,k) \in B} c_{jk} \cdot w_{jk} + \sum_{k \in K} h_k \cdot v_k$$

$$Z_2 = \sum_{k \in K} \sum_{p \in P} \theta_{kp} \cdot F_{kp}$$

$$Z_3 = \sum_{(i,j) \in A} e_{ij}^{co_2} \cdot d_{ij} \cdot x_{ij} + \sum_{(j,k) \in B} e_{jk}^{co_2} \cdot d_{jk} \cdot w_{jk}$$

di mana $Z_1$ adalah biaya total (investasi fasilitas tetap + biaya operasional variabel), $Z_2$ adalah total kehilangan kesegaran (fungsi dari *remaining shelf-life* $F_{kp}$), dan $Z_3$ adalah emisi CO₂ dari transportasi. Variabel keputusan: $y_i, z_j, v_k \in \{0,1\}$ adalah keputusan pembukaan fasilitas, $x_{ij}, w_{jk} \geq 0$ adalah aliran antar-node.

### 2.2 Kendala Utama

**Kendala kapasitas:**
$$\sum_{j: (i,j) \in A} x_{ij} \leq C_i \cdot y_i, \quad \forall i \in I$$

**Kendala keseimbangan aliran di processing plant:**
$$\sum_{i: (i,j) \in A} x_{ij} = \sum_{k: (j,k) \in B} w_{jk}, \quad \forall j \in J$$

**Kendala permintaan terpenuhi:**
$$\sum_{j: (j,k) \in B} w_{jk} = D_k, \quad \forall k \in K$$

**Kendalaumur simpan pada saat pengiriman ke retailer:**
$$F_{kp} = SL_p - t_{jk}^{trans} - t_{ret}^{hold} \geq F^{min}, \quad \forall j,k,p$$

di mana $SL_p$ adalah *initial shelf-life* produk $p$, dan $F^{min}$ adalah batas kesegaran minimum yang dapat diterima konsumen.

### 2.3 Dekomposisi Benders

Problem di atas dipartisi menjadi **Master Problem (MP)** yang hanya memuat variabel investasi $\{y_i, z_j, v_k\}$, dan **Subproblem (SP)** yang untuk fixed $\hat{y}, \hat{z}, \hat{v}$ meminimalkan biaya operasional. Dual SP menghasilkan *cuts*:

$$\text{Optimality Cut: } \quad \sigma(y,z,v) \geq \alpha + \sum_i \pi_i (C_i y_i - \text{supply}_i) + \sum_j \mu_j (\text{demand}_j - \text{flow}_j)$$

Iterasi Benders berlanjut sampai *gap* antara *upper bound* (feasible solution) dan *lower bound* (MP relaxation) kurang dari ε = 0.5%. Kompleksitas iterasi turun dari O(2^n) untuk MILP langsung menjadi O(iterasi × (n_mp + n_sp)) yang jauh lebih efisien untuk n > 200.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders multi-objektif untuk jaringan susu mengikuti SOP 7-langkah berikut:

**Langkah 1 — Karakterisasi Data Industri.** Kumpulkan data permintaan historis 24 bulan per retailer $D_k(\omega)$, biaya transportasi $c_{ij}$ (termasuk tarif energi untuk refrigerasi), kapasitas fasilitas kandidat $C_i$, dan *carbon emission factor* dari database GLEC (Global Logistics Emissions Council) v3.0. Validasi data dengan metode *tukey fences* untuk deteksi outlier.

**Langkah 2 — Estimasi Parameter Stokastik.** Gunakan metode Scenario Reduction (Dupacová et al.) untuk mereduksi 1000 skenario permintaan menjadi 5–10 skenario representatif dengan jarak probabilitas Kanstantsinovich minimum.

**Langkah 3 — Formulasi Model.** Tuliskan model dalam notasi matematis di atas menggunakan perangkat Generalized Algebraic Modeling System (GAMS) atau Python + Pyomo. Modul keputusan kualitas dari Zhang et al. (2024) ditambahkan jika ada aliran balik (*returns*) dari retailer.

**Langkah 4 — Generasi Pareto Front.** Gunakan metode **ε-constraint** dengan merubah $Z_2, Z_3$ menjadi kendala:
$$Z_2 \leq \epsilon_2^{(r)}, \quad Z_3 \leq \epsilon_3^{(s)}$$
dan sweep grid $(r,s) \in \{0,1,\ldots,R\} \times \{0,1,\ldots,S\}$ untuk menghasilkan $(R+1)(S+1)$ titik Pareto.

**Langkah 5 — Eksekusi Benders Loop.** Untuk setiap titik ε, jalankan dekomposisi Benders dengan parameter: max_iter = 200, gap tolerance = 0.005, time limit = 1800 detik.

**Langkah 6 — Validasi & Sensitivitas.** Uji stabilitas solusi terhadap variasi ±15% pada parameter biaya dan permintaan.

**Langkah 7 — Implementasi & Monitoring.** Deploy solusi menggunakan dashboard Power BI/Tableau dengan KPI: *service level*, *spoilage rate*, *carbon intensity* (kg CO₂eq / liter susu terkirim).

Diagram alur keputusan:
```
[Data Input] → [Skenario Reduksi] → [ε-constraint Sweep]
                                            ↓
                                    [Master Problem]
                                            ↓ (cuts)
                                    [Subproblem SP]
                                            ↓ (dual π,μ)
                                    [Konvergensi?] → Ya → [Solusi Pareto]
                                            ↓ Tidak
                                    [Iterasi Benders]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Jaringan susu PT XYZ di Pulau Jawa, melayani 15 retailer dengan 3 fasilitas produksi kandidat dan 2 distribution center.

### 4.1 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Permintaan rata-rata $D_k$ | 8.500 | liter/hari |
| Kapasitas produksi $C_i$ | 12.000 | liter/hari |
| Biaya tetap fasilitas $f_i$ | Rp 2,5 Miliar | IDR/tahun |
| Biaya variabel operasional | Rp 850 | IDR/liter |
| Shelf-life susu pasteurisasi | 7 | hari |
| Batas kesegaran minimum $F^{min}$ | 3 | hari |
| Emisi transport refrigerated | 0,062 | kg CO₂eq/(liter·km) |
| Jarak rata-rata plant→DC | 75 | km |
| Jarak rata-rata DC→retailer | 35 | km |

### 4.2 Perhitungan Step-by-Step

**Langkah 1 — Perhitungan kontribusi emisi per liter:**
$$e_{total} = e^{co_2}_{tr1} \cdot d_1 + e^{co_2}_{tr2} \cdot d_2$$
$$e_{total} = 0{,}062 \times 75 + 0{,}062 \times 35 = 4{,}65 + 2{,}17 = 6{,}82 \text{ kg CO}_2\text{eq/liter}$$

**Langkah 2 — Kehilangan kesegaran jika transit time plant→retailer adalah 2 hari:**
$$F_{kp} = SL_p - t^{trans}_{jk} - t^{hold}_{ret} = 7 - 2 - 1 = 4 \text{ hari} \geq 3 \text{ hari} \quad \checkmark$$

**Langkah 3 — Biaya operasional harian:**
$$C_{op} = \sum_{j,k} c_{jk} \cdot w_{jk} = 850 \times 8.500 = \text{Rp } 7{,}225 \text{ Juta/hari}$$

**Langkah 4 — Penyelesaian Benders (simulasi).** Misalkan pada iterasi ke-1, MP menyarankan membuka 2 plant ($y_1 = y_3 = 1$, $y_2 = 0$) dan 2 DC ($v_1 = v_2 = 1$). SP dengan fixed facilities menghasilkan biaya operasional Rp 6,8 Miliar/hari dan emisi 58.000 kg CO₂/hari. Dual SP memberikan *optimality cut* dengan multiplier $\pi_i$ untuk kendala kapasitas. Setelah 12 iterasi, gap konvergen ke 0,3%.

**Langkah 5 — Hasil Pareto-optimal (3 titik representatif):**

| Titik | Biaya (Miliar IDR/hr) | Spoilage (%) | Emisi (ton CO₂/hr) |
|-------|----------------------|--------------|---------------------|
| A (ε-konservatif) | 7,10 | 2,1 | 62,4 |
| B (keseimbangan) | 7,35 | 1,4 | 58,1 |
| C (ε-ramah lingkungan) | 7,82 | 1,1 | 51,7 |

**Interpretasi Manajerial:** Pergeseran dari Titik A ke C menambah biaya Rp 720 juta/hari tetapi mengurangi emisi 17% dan spoilage hampir 50%. Jika harga karbon (*carbon price*) diasumsikan Rp 50.000/ton CO₂eq, maka insentif pengurangan emisi hanya Rp 535.000/hari — jauh lebih kecil dari biaya tambahan. Namun, dengan *green financing* dan preferensi konsumen premium, trade-off ini menjadi layak secara strategis.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Karya Lead Researchers (2023) memiliki tiga keterbatasan utama. Pertama, asumsi deterministik terhadap waktu transit dan kapasitas dapat dilonggarkan menggunakan *robust optimization* (Bertsimas & Sim, 2004). Kedua, ε-constraint menghasilkan distribusi titik Pareto yang tidak merata; metode **NSGA-II** atau **augmented ε-constraint** (Mavrotas, 2009) memberikan cakungan Pareto yang lebih halus. Ketiga, paper Zhang et al. (2024) menyoroti bahwa keputusan kualitas produk kembalian (*reverse logistics*) belum diakomodasi dalam model forward-only, padahal regulasi EPR (*Extended Producer Responsibility*) di banyak negara mensyaratkan integrasi loop tertutup.

### 5.2 Perbandingan dengan Metode Konvensional

| Aspek | MILP Langsung | Benders (paper) | Heuristik (GA/PSO) |
|-------|---------------|-----------------|---------------------