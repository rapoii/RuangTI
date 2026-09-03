# 2480 — Optimasi Rantai Pasok Multi-Objektif Produk Susu dengan Benders Decomposition: Kerangka Kerja Terintegrasi untuk Desain Jaringan & Operasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok manufaktur konvensional. Produk susu—yang meliputi *fresh milk*, yogurt, keju, mentega, dan *cream*—memiliki karakteristik *highly perishable* dengan *shelf life* rata-rata 5–14 hari pada suhu refrigerasi 2–4°C. Kerusakan produk susu di sepanjang rantai pasok global mencapai 20–35% menurut Food and Agriculture Organization (FAO), sebuah inefisiensi yang menimbulkan kerugian ekonomi lebih dari USD 30 miliar per tahun. Kerangka multi-objektif yang dikembangkan oleh Lead Researchers (2023) dalam jurnal *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) muncul sebagai respon terhadap dualitas kritis dalam jaringan rantai pasok susu: di satu sisi, keputusan *facility location* untuk pabrik pengolahan, gudang dingin, dan *distribution center* memerlukan investasi modal jangka panjang (*tactical-strategic*); di sisi lain, keputusan produksi-distribusi harian menghadapi ketidakpastian permintaan, variasi musiman (*seasonality*), dan risiko kerusakan (*spoilage risk*).

Urgensi operasional semakin diperkuat oleh dinamika permintaan pascapandemi COVID-19 yang mencatatkan pertumbuhan konsumsi susu sebesar 18,2% secara year-on-year di pasar Asia Tenggara, sementara tekanan regulasi emisi karbon dan target *net-zero* memaksa perusahaan susu untuk memasukkan dimensi keberlanjutan ke dalam fungsi tujuan. Studi oleh Zhang, Li, dan Ren (2024) yang dipublikasikan di jurnal *peer-reviewed* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) turut menguatkan relevansi pendekatan dekomposisi Benders dengan membuktikan efektivitasnya pada jaringan *reverse supply chain* yang mempertimbangkan keputusan kualitas. Kedua literatur ini saling melengkapi: paper pertama (2023) berfokus pada jaringan maju (*forward supply chain*) susu dengan multi-objektif biaya-emisi-kesegasan, sementara paper kedua (2024) menangani jaringan mundur dengan keputusan inspeksi kualitas yang dapat diintegrasikan ke dalam arsitektur keputusan terpadu.

Dalam konteks Indonesia—yang merupakan konsumen susu terbesar di Asia Tenggara dengan volume konsumsi 4,2 juta ton pada 2023 menurut Gabungan Susu Indonesia (GISI)—kerangka multi-objektif dengan Benders Decomposition memiliki relevansi tinggi karena (i) rantai dingin (*cold chain*) nasional masih memiliki *cold storage capacity* yang defisit 35–40%, (ii) jaringan produksi terfragmentasi dengan lebih dari 600 koperasi susu skala kecil, dan (iii) waktu tempuh rata-rata dari *farm* ke *processing plant* mencapai 8–14 jam yang memperbesar risiko kerusakan. Dokumen modul ini akan membedah secara mendalam arsitektur matematis, prosedur operasional, dan aplikasi kuantitatif dari framework yang dikembangkan dalam kedua literatur tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Multi-Objektif

Model yang diusulkan oleh Lead Researchers (2023) mengikuti formulasi *Mixed-Integer Linear Programming* (MILP) dua-tahap (*two-stage stochastic programming*) dengan struktur dekomposisi Benders. Tahap pertama (*strategic*) memutuskan lokasi fasilitas dan kapasitas, sedangkan tahap kedua (*operational*) menentukan alokasi produksi-distribusi di bawah skenario permintaan yang realisasi.

**Himpunan (Sets):**

$$I = \{1, 2, \ldots, m\} \quad \text{(himpunan pabrik pengolahan)}$$
$$J = \{1, 2, \ldots, n\} \quad \text{(himpunan gudang dingin/cooling center)}$$
$$K = \{1, 2, \ldots, l\} \quad \text{(himpunan zona permintaan/retail)}$$
$$P = \{1, 2, \ldots, r\} \quad \text{(himpunan produk susu: fresh milk, yogurt, keju, dll.)}$$
$$S = \{1, 2, \ldots, t\} \quad \text{(himpunan skenario permintaan)}$$

**Parameter:**

| Simbol | Deskripsi | Satuan |
|--------|-----------|--------|
| $f_i$ | Biaya tetap pembukaan pabrik $i$ | USD |
| $g_j$ | Biaya tetap pembukaan gudang $j$ | USD |
| $c_{ij}^{p}$ | Biaya transportasi unit produk $p$ dari $i$ ke $j$ | USD/unit |
| $d_{jk}^{p,s}$ | Permintaan produk $p$ di zona $k$ dari gudang $j$ pada skenario $s$ | unit |
| $\phi_i^{p}$ | Kapasitas produksi produk $p$ di pabrik $i$ | unit |
| $\psi_j^{p}$ | Kapasitas gudang dingin $j$ untuk produk $p$ | unit |
| $\rho^{p}$ | Tingkat kerusakan produk $p$ per unit waktu | %/jam |
| $\tau_{ij}$ | Waktu transit dari $i$ ke $j$ | jam |
| $\lambda_s$ | Probabilitas skenario $s$ | — |
| $\alpha$ | *Carbon emission factor* | kg CO₂e/unit |
| $\beta$ | Bobot multi-objektif biaya-emisi | — |

**Variabel Keputusan:**

$$y_i \in \{0, 1\} \quad \text{(1 jika pabrik $i$ dibuka)}$$
$$z_j \in \{0, 1\} \quad \text{(1 jika gudang $j$ dibuka)}$$
$$x_{ij}^{p,s} \geq 0 \quad \text{(aliran produk $p$ dari $i$ ke $j$ pada skenario $s$)}$$
$$w_{jk}^{p,s} \geq 0 \quad \text{(aliran produk $p$ dari $j$ ke $k$ pada skenario $s$)}$$

### 2.2 Fungsi Tujuan Multi-Objektif

Framework menggunakan formulasi *weighted augmented $\epsilon$-constraint* untuk menghasilkan *Pareto front* antara biaya total dan emisi karbon:

$$\min \; Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{s \in S} \lambda_s \left( \sum_{i \in I, j \in J, p \in P} c_{ij}^{p} x_{ij}^{p,s} + \sum_{j \in J, k \in K, p \in P} h_{jk}^{p} w_{jk}^{p,s} \right)$$

$$\min \; Z_2 = \sum_{s \in S} \lambda_s \sum_{i \in I, j \in J, p \in P} \alpha \cdot d_{ij} \cdot x_{ij}^{p,s}$$

dengan $d_{ij}$ adalah jarak (km) antara pabrik $i$ dan gudang $j$.

### 2.3 Kendala Utama

**Kendala Kapasitas Produksi:**

$$\sum_{j \in J} \sum_{p \in P} x_{ij}^{p,s} \leq \phi_i y_i \quad \forall i \in I, \; s \in S$$

**Kendala Kapasitas Gudang Dingin (dengan depresiasi kualitas):**

$$\sum_{k \in K} w_{jk}^{p,s} \leq \psi_j z_j \cdot (1 - \rho^{p} \cdot \bar{\tau}_{ij}) \quad \forall j \in J, \; p \in P, \; s \in S$$

di mana $\bar{\tau}_{ij}$ adalah waktu transit rata-rata yang sudah diperhitungkan dalam keputusan *facility location*.

**Kendala Keseimbangan Aliran:**

$$\sum_{i \in I} x_{ij}^{p,s} = \sum_{k \in K} w_{jk}^{p,s} \quad \forall j \in J, \; p \in P, \; s \in S$$

**Kendala Pemenuhan Permintaan (w/ Service Level):**

$$\sum_{j \in J} w_{jk}^{p,s} \geq (1 - \theta) d_{jk}^{p,s} \quad \forall k \in K, \; p \in P, \; s \in S$$

dengan $\theta$ adalah toleransi *stockout* (umumnya 5–10%).

### 2.4 Struktur Benders Decomposition

Kompleksitas komputasional model di atas menjadi eksponensial ketika $|I| \cdot |J| \cdot |K| \cdot |S| > 10^6$. Lead Researchers (2023) menerapkan Benders Decomposition dengan pemisahan berikut:

**Master Problem (MP) — keputusan stratejik:**

$$\min_{y,z,\eta} \; \sum_{i} f_i y_i + \sum_{j} g_j z_j + \eta$$

$$\text{s.t.} \quad \eta \geq Q(y, z, s) \quad \forall s \in S \quad (\text{Benders optimality cuts})$$

$$\sum_i y_i \geq 1, \quad \sum_j z_j \geq 1$$

$$y, z \in \{0, 1\}$$

**Subproblem (SP) — keputusan operasional per skenario $s$:**

$$Q(y, z, s) = \min_{x,w} \sum_{i,j,p} c_{ij}^{p} x_{ij}^{p,s} + \sum_{j,k,p} h_{jk}^{p} w_{jk}^{p,s}$$

dengan kendala subproblem yang melinearisasi keputusan stratejik $(y^*, z^*)$. Dual variabel $\pi$ dari subproblem digunakan untuk membentuk *optimality cut*:

$$\eta \geq Q(y^*, z^*, s) + \sum_{i,j,p} \pi_{ij}^{p,s}(y_i - y_i^*) + \sum_{j} \pi_j^{\psi}(z_j - z_j^*)$$

Zhang et al. (2024) memperluas struktur ini dengan menambahkan *feasibility cuts* untuk menangani infeasibility akibat keputusan kualitas di jaringan *reverse supply chain*, sehingga menghasilkan algoritma Benders yang lebih robust (*generalized Benders decomposition*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework di industri memerlukan SOP 8-tahap yang diturunkan dari Lead Researchers (2023) dan diperkuat dengan prosedur *reverse logistics* dari Zhang et al. (2024):

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data.** Petakan seluruh node ($I$, $J$, $K$) menggunakan *Geographic Information System* (GIS), kumpulkan data historis permintaan minimum 24 bulan, hitung parameter $\rho^p$ melalui analisis Accelerated Shelf-Life Testing (ASLT) berstandar Codex Alimentarius (CAC/RCP 1-1969).

**Tahap 2 — Validasi Parameter Kualitas.** Lakukan kalibrasi tingkat kerusakan $\rho^p$ untuk setiap produk. Sebagai contoh, untuk *fresh milk* pada suhu 4°C, $\rho^p \approx 0{,}004$/jam (setara dengan *shelf life* 14 hari).

**Tahap 3 — Pembuatan Skenario.** Gunakan *Monte Carlo Simulation* dengan 1.000 iterasi atau *Latin Hypercube Sampling* untuk membangun $|S| \geq 50$ skenario permintaan dengan probabilitas $\lambda_s$.

**Tahap 4 — Formulasi Model MILP.** Kodekan formulasi pada Bagian 2 menggunakan solver seperti Gurobi 11.0 atau CPLEX 22.1, dengan Benders otomatis (*built-in Benders* di Gurobi).

**Tahap 5 — Iterasi Benders.** Jalankan Master Problem dengan nilai awal $\eta = -\infty$. Selesaikan subproblem untuk setiap skenario $s$, ekstrak dual $\pi$, dan tambahkan *optimality cut* ke MP. Ulangi hingga gap optimalitas $< 0{,}5\%$.

**Tahap 6 — Generasi Pareto Front.** Variasikan parameter $\epsilon$ pada kendala $Z_2 \leq \epsilon$ untuk menghasilkan 20–30 titik Pareto antara biaya dan emisi.

**Tahap 7 — Validasi Sensitivitas.** Lakukan *tornado analysis* pada parameter $\rho^p$, $\phi_i$, $\beta$, dan $\alpha$ untuk menguji robustness solusi.

**Tahap 8 — Implementasi & Monitoring.** Terapkan keputusan stratejik ($y^*$, $z^*$) dengan *phased rollout* 6-12 bulan, dan bangun *dashboard* KPI real-time (Service Level $\geq 95\%$, Spoilage Rate $< 2\%$, Carbon Intensity $<$ target ESG).

**Diagram Alir Logika:**

```
┌─────────────────────────┐
│  START: Input Data      │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│ Generate Scenarios (S)  │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│