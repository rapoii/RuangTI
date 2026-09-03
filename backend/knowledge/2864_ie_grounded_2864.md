# 2864 — Optimasi Rantai Pasok Produk Susu Multi-Objektif dengan Benders Decomposition: Kerangka Rekayasa untuk Desain Jaringan Forward-Reverse

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade kedua abad ke-21. Produk susu termasuk kategori paling *perishable* (mudah rusak) dalam industri makanan dan minuman, dengan rata-rata *shelf life* berkisar antara 5 hingga 21 hari tergantung pada proses pasteurisasi, kemasan, dan suhu rantai dingin. Kerusakan produk susu pada rantai pasok global mencapai 15–25% dari total produksi akibat pelanggaran *cold chain*, menurut berbagai laporan FAO. Tekanan untuk merancang jaringan distribusi yang efisien secara biaya sekaligus resilient menjadi sangat mendesak, terutama karena permintaan produk susu di pasar Asia-Pasifik tumbuh pada CAGR 4,8% dan di pasar Afrika pada CAGR 5,2%.

Lead Researchers (2023) dalam publikasinya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) mengusulkan kerangka multi-objektif untuk desain jaringan rantai pasok produk susu yang diselesaikan dengan Benders Decomposition. Urgensi riset ini muncul dari tiga realitas industri: (i) tingginya variabilitas permintaan musiman (Agustus–November di belahan bumi utara, Desember–Februari di belahan bumi selatan); (ii) margin keuntungan yang tipis (3–7% pada segmen pasteurisasi, 8–14% pada segmen keju dan *value-added dairy*); serta (iii) kebutuhan menyeimbangkan biaya total dengan emisi karbon dan kesetiaan tingkat layanan (*service level*).

Sementara itu, Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma ini ke ranah *reverse supply chain* dengan keputusan kualitas, memperkenalkan variabel keputusan inspeksi dan rework yang terintegrasi dengan desain jaringan hulu. Kedua paper ini saling melengkapi karena jaringan susu modern mensyaratkan *closed-loop* antara produksi, distribusi, pengembalian kemasan, dan daur ulang produk *expired*. Konteks operasional yang dirangkum dari Lead Researchers (2023) mencakup jaringan dengan *processing plants*, *collection centers*, *distribution centers*, *cold storage hubs*, dan *retail outlets*, dengan kendala kapasitas, waktu tempuh, dan suhu.

Permasalahan yang diidentifikasi oleh Lead Researchers (2023) adalah bahwa formulasi MILP (Mixed Integer Linear Programming) konvensional untuk jaringan ini menghasilkan *combinatorial explosion* pada skala industri nyata (>200 node kandidat, >1500 variabel biner), sehingga pendekatan monolithic melalui solver komersial menjadi tidak efisien secara komputasional. Di sinilah Benders Decomposition berperan sebagai teknik dekomposisi primal yang memisahkan keputusan lokasi (master problem) dari keputusan alur (subproblem), menghasilkan reduksi kompleksitas eksponensial ke kompleksitas polinomial per iterasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Master Problem (MP)

Benders Decomposition memformulasikan masalah sebagai dua lapisan yang saling beriterasi. **Master Problem** memutuskan variabel lokasi $y_i \in \{0,1\}$ untuk fasilitas kandidat $i \in \mathcal{I}$, $z_j \in \{0,1\}$ untuk kapasitas ekspansi $j \in \mathcal{J}$, dengan fungsi tujuan meminimalkan biaya tetap ditambah *optimality cut* dari subproblem:

$$
\min_{y,z,\theta} \quad \sum_{i \in \mathcal{I}} f_i y_i + \sum_{j \in \mathcal{J}} g_j z_j + \theta
$$

$$
\text{subject to:} \quad \sum_{i \in \mathcal{I}} y_i \geq 1 \quad \forall \text{ region } r
$$

$$
y_i \leq z_{j(i)} \quad \forall i \in \mathcal{I}
$$

$$
\theta \geq 0
$$

$$
\theta \geq \alpha^{(k)} + \sum_{i \in \mathcal{I}} \pi_i^{(k)} (y_i - y_i^{(k)}) \quad \forall k = 1, \ldots, K
$$

di mana $\alpha^{(k)}$ dan $\pi^{(k)}$ adalah komponen *dual* dari subproblem pada iterasi ke-$k$, dan $\theta$ adalah *surrogate variable* yang mendekati nilai optimal subproblem.

### 2.2 Formulasi Subproblem (SP)

Subproblem meminimalkan biaya variabel (transportasi, produksi, *holding*, *cold chain*) untuk given $y^*, z^*$ dari master:

$$
\min_{x,q} \quad \sum_{(i,j) \in \mathcal{A}} c_{ij} x_{ij} + \sum_{j \in \mathcal{J}} h_j q_j + \sum_{i \in \mathcal{I}} p_i s_i
$$

$$
\text{subject to:} \quad \sum_{j} x_{ij} = d_i - s_i \quad \forall i \in \mathcal{I} \quad (\pi_i)
$$

$$
\sum_{i} x_{ij} \leq C_j y_j^* \quad \forall j \in \mathcal{J} \quad (\mu_j)
$$

$$
x_{ij} \geq 0, \quad s_i \geq 0
$$

di mana $x_{ij}$ adalah alur dari node $i$ ke $j$, $s_i$ adalah *shortage* (jika terjadi unmet demand), dan $\pi_i, \mu_j$ adalah variabel dual. Setelah solusi dual $(\pi^*, \mu^*)$ diperoleh, Benders cut diregenerasikan.

### 2.3 Kerangka Multi-Objektif $\varepsilon$-Constraint

Lead Researchers (2023) menerapkan metode $\varepsilon$-constraint untuk menghasilkan *Pareto frontier* antara tiga objektif: (1) biaya total jaringan (TC), (2) emisi karbon (CO₂e), dan (3) kesetiaan tingkat layanan (*freshness service level*, FSL):

$$
\min \, f_1(x,y) = TC
$$

$$
\text{subject to:} \quad f_2(x,y) \leq \varepsilon_2, \quad f_3(x,y) \leq \varepsilon_3
$$

$$
x \in \mathcal{X}(y), \quad y \in \mathcal{Y}
$$

dengan enumerasi grid pada $\varepsilon_2 \in [\varepsilon_2^{\min}, \varepsilon_2^{\max}]$ dan $\varepsilon_3 \in [\varepsilon_3^{\min}, \varepsilon_3^{\max}]$.

### 2.4 Integrasi Keputusan Kualitas (Zhang et al., 2024)

Zhang, Li, dan Ren (2024) memperkenalkan variabel inspeksi $w_p \in [0,1]$ yang merepresentasikan probabilitas produk dikembalikan karena defect, dengan probabilitas rework $\rho_w$ dan disposal $1-\rho_w$. Subproblem reverse-nya berbentuk:

$$
\min \, \sum_{p \in \mathcal{P}} \left[ c_p^{rev} q_p + c_p^{disp} (1-\rho_p) r_p + c_p^{rew} \rho_p r_p \right]
$$

$$
\sum_{p \in \mathcal{P}_k} r_p \leq Q_k^{cap} \quad \forall k \in \mathcal{K}
$$

$$
r_p \leq w_p^{cap} \cdot d_p^{used}
$$

Integrasi ini menambah dimensi kualitatif pada jaringan dairy yang sebelumnya hanya memperlakukan produk sebagai homogen, padahal dalam praktik industri, susu UHT, pasteurisasi, dan keju memiliki *recovery cost* yang sangat berbeda.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition di industri susu mengikuti protokol rekayasa 7 tahap yang distandarkan:

**Tahap 1 — Pemetaan Jaringan & Akuisisi Data.** Identifikasi node kandidat (farm, collection center, processing plant, cold hub, retailer) menggunakan GIS dan data master ERP. Validasi data permintaan musiman dengan time-series analysis (ARIMA/Prophet).

**Tahap 2 — Estimasi Parameter.** Parameter biaya transportasi $c_{ij}$ menggunakan tarif logistik 3PL dengan koreksi suhu (cold chain premium 15–30%). Kapasitas $C_j$ mengikuti standar ISO 22000 untuk fasilitas pangan. Emisi karbon mengikuti GHG Protocol Scope 3 untuk *upstream transportation*.

**Tahap 3 — Pembentukan Set $\varepsilon$.** Grid $\varepsilon$ untuk multi-objektif dibangun dengan 8–12 titik pada setiap sumbu, menghasilkan 64–144 skenario Pareto.

**Tahap 4 — Inisialisasi Master Problem.** Solve relaxed MP (LP relaxation) dengan *big-M* coefficients; identifikasi lower bound awal $LB^{(0)}$.

**Tahap 5 — Iterasi Benders.** Loop iteratif:
- Solve subproblem pada $y^{(k)}, z^{(k)}$ → dapatkan $\alpha^{(k)}$, $\pi^{(k)}$, $\mu^{(k)}$, dan *upper bound* $UB^{(k)} = f^{MP} + \alpha^{(k)}$
- Tambahkan *optimality cut* atau *feasibility cut* ke MP
- Solve MP baru → perbarui $LB^{(k+1)}$
- Stop ketika $|UB - LB| / \max(|UB|, |LB|, \epsilon) \leq 10^{-4}$ (konvergensi relatif)

**Tahap 6 — Post-Processing & Validasi.** Verifikasi solusi dengan simulasi *discrete event* pada AnyLogic atau Arena untuk mengukur kinerja aktual di luar asumsi deterministik. Bandingkan dengan solusi monolithic CPLEX/Gurobi pada *benchmark instances*.

**Tahap 7 — Implementasi & Monitoring.** Deploy solusi pada S&OP mingguan, dengan re-optimization triwulanan mengikuti pola permintaan musiman.

Lead Researchers (2023) melaporkan bahwa prosedur ini menghasilkan reduksi waktu komputasi rata-rata 67–82% dibanding monolithic MILP pada jaringan 100–250 node, dengan gap optimalitas rata-rata 1,3%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Industri Hipotetis: Jaringan Susu PT Sinar Dairy Nusantara

Sebuah studi kasus ilustratif menggunakan parameter industri susu tipikal di Asia Tenggara dengan 3 *processing plant* kandidat, 5 *collection center* eksisting, 8 *distribution center* kandidat, dan 15 zona permintaan. Permintaan harian bervariasi dari 8.000 L (musim hujan) hingga 14.500 L (musim kemarau).

**Parameter Biaya:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Biaya tetap processing plant $f_i$ | 4.500.000.000 | IDR/tahun |
| Biaya tetap DC $g_j$ | 850.000.000 | IDR/tahun |
| Transportasi dingin $c_{ij}$ | 1.200 | IDR/L·km |
| Holding cost $h_j$ | 85 | IDR/L·hari |
| Penalty shortage $p_i$ | 4.500 | IDR/L |

### 4.2 Perhitungan Subproblem pada Iterasi ke-1

Misalkan master problem menetapkan $y_1^* = 1, y_2^* = 1, y_3^* = 0$ (dua plant aktif). Subproblem dihitung pada 5 collection center dengan permintaan:

$$
d_1 = 1200, \, d_2 = 950, \, d_3 = 1450, \, d_4 = 1100, \, d_5 = 1300 \quad (\text{dalam L/hari})
$$

Asumsikan plant 1 berkapasitas 3.500 L/hari dan plant 2 berkapasitas 4.200 L/hari. Subproblem diselesaikan dengan simpleks; variabel dual untuk kendala kapasitas:

$$
\mu_1^* = 1450, \quad \mu_2^* = 0
$$

Artinya, plant 1 *binding* (kapasitas penuh tercapai), plant 2 memiliki slack. Benders optimality cut yang dihasilkan:

$$
\theta \geq \alpha^{(1)} + 1450 (y_1 - 1) + 0 \cdot (y_2 - 1) = \alpha^{(1)} + 1450(y_1 - 1)
$$

di mana $\alpha^{(1)} = $ total biaya variabel minimum = Rp 28.750.000.000/tahun.

### 4.3 Iterasi ke-2 dan Konvergensi

Master problem baru menambahkan cut tersebut. Solusi baru: $y_1^* = 1, y_2^* = 1, y_3^* = 1$ karena tiga plant diperlukan memenuhi permintaan puncak. Kapasitas total menjadi 3.500 + 4.200 + 3.800 = 11.500 L/hari, lebih dari cukup untuk puncak 8.000 L/hari aktual setelah alokasi ulang.

$UB^{(2)} = 13.500.000.000 + 850.000.000 \times 2 + 28.750.000.000 = $ **Rp 44.000.000.000**

$LB^{(2)} = $ Rp 43.450.000.000 (dari MP)

Gap: $|44,0 - 43,45| / 44,0 = 1,25\%$ → di bawah toleransi 1,3%, konvergen.

### 4.4 Pareto Front Multi-Objektif

Tiga skenario efisien diidentifikasi oleh Lead Researchers (2023):
- **Skenario A**