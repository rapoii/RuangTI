# 2576 — Optimasi Jaringan Rantai Pasok Multi-Objektif Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework untuk Jaringan Rantai Pasok Produk Susu menggunakan Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, Ed. 5. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor agri-food dengan karakteristik operasional paling kompleks dalam bidang Teknik Industri. Berbeda dengan barang manufaktur konvensional, produk susu menghadapi tiga kendala struktural yang simultan: **perishability tinggi** (umur simpan 5–21 hari tergantung jenis produk), **variabilitas permintaan musiman** yang dipengaruhi tren konsumsi dan preferensi diet, serta **kepastian kualitas sensoris** yang harus dipertahankan sepanjang rantai dingin (cold-chain). Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* menekankan bahwa jaringan rantai pasok susu modern menghadapi dilema struktural berupa kebutuhan meminimalkan biaya total logistik yang mencakup biaya produksi, distribusi, dan inventory holding, sembari memaksimalkan kesegaran produk (*freshness*) yang sampai ke konsumen akhir.

Urgensi ekonomis dari permasalahan ini cukup signifikan. Berdasarkan laporan FAO dan analisis industri susu global, kerugian akibat produk susu yang kadaluarsa (*spoilage loss*) di negara berkembang dapat mencapai 15–25% dari total produksi, sementara di rantai pasok maju kerugian ini tetap berada di kisaran 4–8% (Lead Researchers, 2023). Kerugian tersebut terjadi karena keputusan desain jaringan—yakni penentuan lokasi fasilitas produksi, kapasitas processing plants, alokasi distribution centers (DCs), dan rute distribusi—sangat mempengaruhi *lead time* dan kualitas produk akhir. Dalam konteks ini, jaringan rantai pasok susu biasanya tersusun atas empat lapisan keputusan: (i) supplier/pabrik pengolahan susu, (ii) fasilitas manufaktur produk olahan, (iii) pusat distribusi berpendingin, dan (iv) retailer/outlet ritel.

Kompleksitas permasalahan bertambah ketika mempertimbangkan dimensi lingkungan (*carbon footprint*) dan target keberlanjutan. Oleh karena itu, Lead Researchers (2023) mengusulkan kerangka **multi-objective mixed-integer linear programming (MO-MILP)** yang diselesaikan secara efisien dengan **Benders Decomposition (BD)**. Pendekatan ini memungkinkan pemisahan keputusan investasi kapasitas (strategis, integer) dari keputusan operasional alokasi aliran (taktis, kontinu). Secara paralel, Zhang, Li, & Ren (2024) menunjukkan bahwa metodologi Benders juga efektif untuk *reverse supply chain* dengan keputusan kualitas, membuktikan bahwa kerangka dekomposisi ini memiliki generalisasi lintas domain rekayasa industri. Integrasi kedua perspektif tersebut—maju (*forward*) dan mundur (*reverse*)—menjadi fondasi penting bagi perancangan rantai pasok susu *closed-loop* masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Model Multi-Objektif

Model yang diajukan Lead Researchers (2023) memformulasikan tiga fungsi tujuan yang dioptimasi secara simultan melalui pendekatan *lexicographic* dan *ε-constraint*. Definisikan himpunan indeks sebagai berikut:

- $i \in I$: kandidat lokasi fasilitas produksi
- $j \in J$: kandidat lokasi pusat distribusi
- $k \in K$: zona permintaan pelanggan/retailer
- $p \in P$: jenis produk susu (misal: UHT milk, yogurt, cheese, butter)

Parameter-parameter model:

- $f_i$: biaya investasi tetap membuka fasilitas di $i$
- $g_j$: biaya investasi tetap membuka DC di $j$
- $c_{ij}$: biaya transportasi unit dari $i$ ke $j$
- $d_{jk}$: biaya transportasi unit dari $j$ ke $k$
- $h_i$: kapasitas produksi di fasilitas $i$
- $q_j$: kapasitas penyimpanan di DC $j$
- $D_{kp}$: permintaan produk $p$ di zona $k$
- $\alpha_p$: parameter tingkat kerusakan/kadaluarsa produk $p$
- $\theta$: tingkat kesegaran minimum yang dapat diterima

Variabel keputusan:

- $x_i \in \{0,1\}$: 1 jika fasilitas $i$ dibuka
- $y_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $z_{ijk} \geq 0$: aliran produk dari $i$ melalui $j$ ke $k$

### 2.2 Formulasi MO-MILP

Fungsi tujuan pertama adalah minimasi biaya total:

$$\min Z_1 = \sum_{i \in I} f_i x_i + \sum_{j \in J} g_j y_j + \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} (c_{ij} + d_{jk}) z_{ijk}$$

Fungsi tujuan kedua adalah maksimasi tingkat kesegaran rata-rata:

$$\max Z_2 = \sum_{p \in P}\sum_{k \in K} \frac{1}{|I|+|J|+1} \sum_{(i,j)} (1 - \alpha_p \cdot t_{ijk}) z_{ijk}$$

di mana $t_{ijk}$ adalah total waktu transit dari $i$ ke $k$ melalui $j$.

Fungsi tujuan ketiga adalah minimasi emisi karbon:

$$\min Z_3 = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} e_{ij} \cdot \rho_{ij} \cdot z_{ijk}$$

dengan $e_{ij}$ adalah faktor emisi per unit jarak dan $\rho_{ij}$ jarak.

### 2.3 Kendala Utama

Kendala kapasitas produksi:

$$\sum_{j \in J}\sum_{k \in K} z_{ijk} \leq h_i x_i, \quad \forall i \in I$$

Kendala kapasitas distribusi:

$$\sum_{i \in I}\sum_{k \in K} z_{ijk} \leq q_j y_j, \quad \forall j \in J$$

Kendala pemenuhan permintaan:

$$\sum_{i \in I}\sum_{j \in J} z_{ijk} \geq D_{kp}, \quad \forall k \in K, \forall p \in P$$

### 2.4 Benders Decomposition

Karena $|I| \cdot |J| \cdot |K|$ dapat berukuran ribuan variabel kontinu, Lead Researchers (2023) menerapkan Benders Decomposition dengan struktur berikut:

**Master Problem (MP)** — keputusan investasi integer:

$$\min \sum_{i} f_i x_i + \sum_{j} g_j y_j + \theta$$

subject to:
- $x_i, y_j \in \{0,1\}$
- Benders cuts: $\theta \geq L(y)$

**Subproblem (SP)** — fixed $(x^*, y^*)$, optimasi aliran:

$$\min \sum_{i,j,k} (c_{ij}+d_{jk}) z_{ijk}$$

subject to kendala kapasitas & permintaan di atas. Dual dari SP menghasilkan **optimality cut** yang ditambahkan ke MP pada iterasi berikutnya. Konvergensi terjadi ketika lower bound MP dan upper bound SP bertemu dengan toleransi $\epsilon \leq 0.5\%$. Zhang, Li, & Ren (2024) memvalidasi bahwa pendekatan ini scalable untuk jaringan dengan >1000 node, dengan *speed-up* 12–40× dibanding penyelesaian langsung MILP menggunakan solver branch-and-bound.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Lead Researchers (2023) di industri susu mengikuti SOP tujuh tahapan:

**Tahap 1 — Pengumpulan Data Demand & Supply.** Menggunakan data historis 24–36 bulan dari ERP (SAP S/4HANA atau Oracle SCM), dilakukan *time-series decomposition* untuk menangkap musiman. Standar ISO 22005:2007 tentang traceability dalam food chain menjadi acuan dokumentasi.

**Tahap 2 — Karakterisasi Produk Susu.** Setiap produk $p$ di-parameterisasi dengan: (i) umur simpan pada suhu 4°C, (ii) kebutuhan suhu penyimpanan (UHT: 10–25°C; yogurt: 2–6°C), (iii) laju degradasi kualitas $\alpha_p$.

**Tahap 3 — Pembentukan Model MO-MILP.** Formulasi mengikuti persamaan di Bagian 2, diimplementasikan dalam Python (Pyomo) atau GAMS. Validasi model melalui sanity check terhadap solusi trivial.

**Tahap 4 — Aplikasi Benders Decomposition.** Iterasi algoritma:

1. Inisialisasi MP dengan lower bound LB = $-\infty$, upper bound UB = $+\infty$
2. Solve MP → $(x^*, y^*, \theta^*)$
3. Solve SP dengan $(x^*, y^*)$ fixed → solusi primal $z^*$ dan dual $(\pi^*, \mu^*, \sigma^*)$
4. Bangun **optimality cut**: $\theta \geq \sum_i \pi^*_i (h_i x_i - \sum_{j,k} z^*_{ijk}) + \sum_j \mu^*_j q_j y_j + \sum_k \sigma^*_k D_k$
5. Tambahkan cut ke MP, update LB = max(LB, nilai MP), UB = min(UB, $f^\top x^* + g^\top y^* + c^\top z^*$)
6. Jika |UB − LB|/UB ≤ ε: STOP; jika tidak, kembali ke langkah 2.

**Tahap 5 — Validasi Pareto Front.** Untuk permasalahan multi-objektif, dilakukan *ε-constraint method*: optimasi $Z_1$ dengan kendala $Z_2 \geq \epsilon_2$ dan $Z_3 \leq \epsilon_3$, variasikan $\epsilon_2, \epsilon_3$ untuk membentuk *trade-off curve*.

**Tahap 6 — Sensitivity Analysis.** Parameter yang diuji: tingkat permintaan (±20%), biaya energi cold-chain (±15%), dan umur simpan produk.

**Tahap 7 — Implementasi & Monitoring.** Solusi jaringan diterjemahkan menjadi keputusan investasi dan *network reconfiguration*, dengan KPI监控: on-time delivery ≥ 97%, spoilage rate ≤ 3%, dan biaya logistik turun 8–15%.

Zhang, Li, & Ren (2024) menambahkan prosedur **quality decision loop** yang relevan untuk produk susu: ketika level kualitas hasil inspeksi berada di bawah threshold, produk dialihkan ke sub-saluran reverse (misal: pengolahan ulang menjadi milk powder atau biogas), yang direpresentasikan sebagai variabel $r_{ijk} \geq 0$ dengan margin kontribusi berbeda.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Industri Susu (Studi Kasus Hipotetis-Realistis)

Pertimbangkan jaringan dengan $|I|=4$ kandidat pabrik, $|J|=5$ kandidat DC, $|K|=8$ zona retailer, dan $|P|=3$ produk (Fresh Milk, Yogurt, Cheese). Data disintesis mengikuti karakteristik industri susu Skandinavia dan Asia Tenggara.

**Tabel 1. Kapasitas dan biaya investasi**

| Fasilitas | Kapasitas (unit/hari) | Biaya Investasi (juta USD) |
|-----------|----------------------|----------------------------|
| Pabrik A (Jakarta) | 50.000 | 12.0 |
| Pabrik B (Bandung) | 40.000 | 9.5 |
| Pabrik C (Surabaya) | 60.000 | 14.0 |
| Pabrik D (Semarang) | 35.000 | 8.0 |

| DC | Kapasitas (unit) | Biaya (juta USD) |
|----|-----------------|------------------|
| DC-1 (Bekasi) | 80.000 | 3.0 |
| DC-2 (Cirebon) | 60.000 | 2.5 |
| DC-3 (Solo) | 70.000 | 2.8 |
| DC-4 (Malang) | 55.000 | 2.2 |
| DC-5 (Yogyakarta) | 45.000 | 1.9 |

**Tabel 2. Permintaan per zona (unit/hari)**

| Zona | Fresh Milk | Yogurt | Cheese |
|------|-----------|--------|--------|
| K1 (DKI Jakarta) | 25.000 | 8.000 | 4.000 |
| K2 (Banten) | 15.000 | 5.000 | 2.500 |
| K3 (Jabar) | 18.000 | 6.000 | 3.000 |
| K4 (Jateng) | 12.000 | 4.000 | 2.000 |
| K5 (DIY) | 6.000 | 2.000 | 1.000 |
| K6 (Jatim Barat) | 10.000 | 3.500 | 1.800 |
| K7 (Jatim Timur) | 8.000 | 2.500 | 1.200 |
| K8 (Bali) | 5.000 | 1.500 | 800 |

Total permintaan harian: Fresh Milk = 99.000, Yogurt = 32.500, Cheese = 16.300.

### 4.2 Langkah Perhitungan Benders Iterasi Pertama

**MP Iterasi 0 (Inisialisasi):** Hanya kendala integer, tanpa cuts. Solusi LP relaxation membuka semua fasilitas:

$$Z_{MP}^{LB,0} = 12.0 + 9.5 + 14.0 + 8.0 + 3.0 + 2.5 + 2.8 + 2.2 + 1.9 = 55.9