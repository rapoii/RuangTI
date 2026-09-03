# 2608 — Desain Jaringan Rantai Pasok Multi-Objek dengan Benders Decomposition untuk Produk Susu dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok manufaktur konvensional. Karakteristik intrinsik susu segar—yaitu umur simpan pendek (rata-rata 7–21 hari untuk pasteurisasi, dan hanya 5–7 hari untuk produk UHT yang sudah dibuka), sensitivitas suhu rantai dingin (2–4°C), serta volatilitas permintaan musiman—menjadikan jaringan distribusinya sebagai salah satu sistem logistik paling kompleks dalam sektor agri-food. Berdasarkan kerangka kerja yang dikembangkan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, persoalan desain jaringan untuk produk susu tidak dapat direpresentasikan sebagai masalah optimasi mono-objektif sederhana, karena keputusan lokasi fasilitas, kapasitas produksi, dan alokasi distribusi harus secara simultan menyeimbangkan tiga dimensi yang sering saling konfliktif: total biaya logistik, emisi karbon, dan tingkat layanan (service level) yang diwujudkan dalam parameter kesegaran produk.

Urgensi penelitian ini diperkuat oleh fakta bahwa rantai pasok susu menyumbang sekitar 3–4% emisi gas rumah kaca (GRK) global, terutama melalui segmentasi transportasi rantai dingin dan energi refrigerasi pada fasilitas pengolahan. Studi Lead Researchers (2023) dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) mengusulkan kerangka multi-objektif yang diselesaikan melalui dekomposisi matematis khusus, yang menandai pergeseran paradigma dari pendekatan tradisional yang hanya meminimalkan biaya total. Di sisi lain,Zhang, Li, dan Ren (2024) dalam DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas relevansi metodologis ini ke ranah reverse supply chain dengan keputusan kualitas, menunjukkan bahwa arsitektur Benders yang sama dapat diadopsi untuk menangani pengembalian produk, remanufaktur, dan degradasi mutu dalam jaringan closed-loop.

Kedua paper tersebut menggarisbawahi bahwa kompleksitas komputasional Mixed-Integer Linear Programming (MILP) untuk jaringan riil dengan ratusan node dan ribuan variabel keputusan tidak dapat diselesaikan secara langsung oleh solver komersial dalam waktu operasional yang wajar. Oleh karena itu, Benders Decomposition muncul sebagai metodologi esensial yang memungkinkan dekomposisi problem menjadi *master problem* (desain jaringan: keputusan lokasi dan kapasitas, biasanya variabel biner/integer) dan *subproblem* (operasi: alokasi aliran, produksi, dan distribusi, biasanya variabel kontinyu). Gap riset yang dijawab adalah ketiadaan kerangka terpadu yang mampu menghasilkan trade-off Pareto-optimal antara biaya, keberlanjutan, dan service level pada jaringan susu dengan computational tractability yang tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Himpunan (Sets & Indices)

Model matematis mengikuti formulasi MILP multi-objektif standar untuk facility location problem dengan elemen operasional. Misalkan:

- $I = \{1, 2, \ldots, m\}$: himpunan kandidat fasilitas produksi/pengolahan (plants)
- $J = \{1, 2, \ldots, n\}$: himpunan zona pelanggan (distribution centers/retail zones)
- $K = \{1, 2, \ldots, p\}$: himpunan varian produk susu (misal: UHT, pasteurisasi, yoghurt, keju)
- $S = \{1, 2, \ldots, s\}$: himpunan skenario permintaan (untuk pemodelan stochastic)

### 2.2 Parameter

$$f_i = \text{biaya tetap pembukaan fasilitas } i \in I$$
$$q_{ik} = \text{kapasitas produksi fasilitas } i \text{ untuk produk } k$$
$$c_{ijk} = \text{biaya transportasi per unit dari } i \text{ ke } j \text{ untuk produk } k$$
$$e_{ijk} = \text{emisi CO}_2 \text{ per unit } (i,j,k)$$
$$t_{jk} = \text{waktu tempuh dari } i \text{ ke } j$$
$$\alpha_k = \text{umur simpan produk } k \text{ (hari)}$$
$$d_{jk}^s = \text{permintaan produk } k \text{ di zona } j \text{ pada skenario } s$$
$$\beta = \text{batas kesegaran maksimum (hari) yang dapat diterima konsumen}$$

### 2.3 Variabel Keputusan

$$y_i \in \{0,1\}: \text{1 jika fasilitas } i \text{ dibuka, 0 sebaliknya}$$
$$z_{ijk} \geq 0: \text{aliran produk } k \text{ dari } i \text{ ke } j$$
$$w_i \geq 0: \text{kapasitas terpakai di fasilitas } i$$

### 2.4 Fungsi Objektif Multi-Objek

Tiga fungsi objektif yang dioptimasi secara simultan:

**Objektif 1 — Minimasi Total Biaya Logistik:**

$$\min Z_1 = \sum_{i \in I} f_i y_i + \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} c_{ijk} z_{ijk}$$

**Objektif 2 — Minimasi Emisi Karbon (green objective):**

$$\min Z_2 = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} e_{ijk} z_{ijk}$$

**Objektif 3 — Maksimasi Service Level (kesegaran produk):**

$$\max Z_3 = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} z_{ijk} \cdot \mathbb{1}(t_{jk} \leq \beta - \alpha_k)$$

di mana $\mathbb{1}(\cdot)$ adalah fungsi indikator bernilai 1 jika produk masih layak jual saat sampai ke konsumen.

### 2.5 Kendala (Constraints)

Kendala kapasitas:
$$\sum_{j \in J}\sum_{k \in K} z_{ijk} \leq q_{ik} \cdot y_i \quad \forall i \in I, k \in K$$

Kendala pemenuhan permintaan (per skenario $s$):
$$\sum_{i \in I} z_{ijk} \geq d_{jk}^s \quad \forall j \in J, k \in K, s \in S$$

Kendala non-negativitas dan biner:
$$z_{ijk} \geq 0, \quad y_i \in \{0,1\}$$

### 2.6 Benders Decomposition Structure

Problem MILP di atas dipartisi menjadi:

**Master Problem (MP)** — hanya berisi variabel desain:

$$\min_{y} \sum_{i \in I} f_i y_i + \eta$$
$$\text{s.t.} \quad \eta \geq \pi^T (d^s - A y) \quad \forall \text{ optimal dual } \pi \in \Pi$$
$$y_i \in \{0,1\}, \quad \eta \in \mathbb{R}$$

**Subproblem (SP)** — diberikan $y^*$ dari MP, minimasi biaya operasional:

$$\min_{z \geq 0} \sum_{i,j,k} c_{ijk} z_{ijk}$$
$$\text{s.t.} \quad \sum_j z_{ijk} \leq q_{ik} y_i^* \quad (\pi_i)$$
$$\sum_i z_{ijk} \geq d_{jk}^s \quad (\rho_{jk})$$

Dual SP menghasilkan *Benders cut* $\eta \geq \pi^T d - \pi^T A y$ yang ditambahkan ke MP pada iterasi berikutnya. Algoritma berulang sampai gap optimalitas $|\text{UB} - \text{LB}| < \epsilon$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition untuk jaringan susu mengikuti SOP tujuh tahap yang distandardisasi oleh Lead Researchers (2023) dan diperkuat oleh formulasi Zhang et al. (2024):

**Tahap 1 — Karakterisasi Jaringan & Akuisisi Data.** Pemetaan kandidat lokasi fasilitas, segmentasi SKU produk, dan pengumpulan data historis permintaan selama 24–36 bulan. Parameter emisi mengikuti standar ISO 14064 dan GHG Protocol Scope 3.

**Tahap 2 — Formulasi MILP Multi-Objek.** Translasi masalah bisnis ke formulasi matematis pada Bagian 2, dengan validasi melalui studi pustaka parameter industri (misalnya FAO Dairy Report, IDF World Dairy Situation).

**Tahap 3 — Reformulasi Benders Decomposition.** Partisi variabel: $\{y_i\}$ (integer) masuk MP; $\{z_{ijk}\}$ (continuous) masuk SP. Penulisan dual SP secara eksplisit untuk ekstraksi koefisien cut.

**Tahap 4 — Implementasi & Warm-Starting.** Kode dalam Python (Pyomo/Gurobi) atau CPLEX OPL. Inisialisasi $y^{(0)}$ melalui heuristik (misal: greedy facility location). LP relaxation MP digunakan sebagai LB awal.

**Tahap 5 — Iterasi & Konvergensi.** Pada setiap iterasi $r$:
1. Selesaikan MP → dapat $(y^{(r)}, \eta^{(r)})$ → LB
2. Selesaikan SP dengan $y^{(r)}$ fixed → dapat $z^{(r)}$, dual $\pi^{(r)}$ → UB
3. Jika UB − LB < $\epsilon$, **STOP**; else tambah cut ke MP, $r \leftarrow r+1$

**Tahap 6 — Pareto Front Generation.** Untuk multi-objek, gunakan $\epsilon$-constraint method: optimasi $Z_1$ dengan kendala $Z_2 \leq \epsilon_2, Z_3 \geq \epsilon_3$, variasikan vektor $\epsilon$ untuk membangun kurva trade-off.

**Tahap 7 — Decision Support & Sensitivity Analysis.** Validasi keputusan terhadap perubahan asumsi (permintaan, harga energi, regulasi emisi). Stress test dengan skenario S.

Arsitektur teknologi mengikuti diagram alir: Data Warehouse → Preprocessing → MP Solver ↔ Cut Generator ↔ SP Solver → Pareto Archive → Dashboard.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Hipotetis-Realistis

Pertimbangkan jaringan susu regional dengan $m = 3$ kandidat pabrik, $n = 4$ zona distribusi, $p = 2$ varian produk (susu UHT dan yoghurt). Permintaan rata-rata harian (kg):

| Zona ($j$) | Susu UHT ($k=1$) | Yoghurt ($k=2$) |
|---|---|---|
| 1 | 800 | 400 |
| 2 | 1.200 | 600 |
| 3 | 900 | 500 |
| 4 | 1.500 | 700 |

Biaya tetap fasilitas: $f = [50.000, 65.000, 45.000]$ (satuan moneter).
Kapasitas produksi: $q_{i1} = [2.500, 3.000, 2.000]$, $q_{i2} = [1.200, 1.500, 1.000]$.
Biaya transportasi $c_{ijk}$ (rata-rata): 5 s.d. 12 per unit.

### 4.2 Iterasi 0 — Inisialisasi

Misalkan keputusan awal dari heuristik membuka fasilitas 1 dan 3: $y^{(0)} = (1, 0, 1)$.

Subproblem pada $y^{(0)}$:

$$\min_{z \geq 0} \sum_{i \in \{1,3\}} \sum_{j,k} c_{ijk} z_{ijk}$$

Dual SP misalnya menghasilkan vektor $\pi^{(0)} = (12, 0, 9, 7)$ untuk kendala kapasitas. Benders cut pertama:

$$\eta \geq \sum_j d_{j1} \cdot 12 + \sum_j d_{j2} \cdot 7 - \sum_i \pi_i q_i y_i$$
$$\eta \geq 12(800+1200+900+1500) + 7(400+600+500+700) - 12(2500)y_1 - 9(2500)y_2 - 7(2500)y_3$$
$$\eta \geq 52.800 + 15.400 - 30.000 y_1 - 22.500 y_2 - 17.500 y_3$$
$$\eta \geq 68.200 - 30.000 y_1 - 22.500