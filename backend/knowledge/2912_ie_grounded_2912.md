# 2912 — Optimasi Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders: Kerangka Kerja untuk Jaringan Susu Segar dan Logistik Terbalik Berkualitas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok barang konsumsi lainnya, terutama karena karakteristik intrinsik produk susu sebagai *perishable goods* dengan umur simpan terbatas (umumnya 5–14 hari untuk susu pasteurisasi), tingkat metabolisme biologis yang cepat, serta persyaratan rantai dingin (*cold chain*) yang ketat pada kisaran suhu 2–4°C. Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* menunjukkan bahwa jaringan distribusi produk susu harus secara simultan menyeimbangkan dua tujuan yang saling bertentangan: minimasi total biaya logistik dan maksimasi tingkat kesegaran (*freshness*) produk yang diterima konsumen. Ketidakseimbangan keduanya dapat menurunkan margin industri hingga 18–25% akibat *product waste* dan klaim kualitas, sebagaimana dikonfirmasi dalam dataset empiris mereka.

Urgensi permasalahan ini makin terasa ketika diintegrasikan dengan dimensi ketidakpastian permintaan musiman (fluktuasi 20–35% antar-kuartal) dan fragmentasi rantai pasok yang terdiri atas peternakan skala kecil, koperasi susu, unit pengolahan (UHT/pasteurisasi), hingga *cold warehouse* dan retailer dengan kapasitas pendinginan heterogen. Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) melengkapi konteks ini dengan menunjukkan bahwa pada rantai pasok terbalik (*reverse supply chain*)—yang relevan untuk industri susu melalui *returnable bottle logistics*, daur ulang whey, dan recovery kemasan—keputusan kualitas (*quality decisions*) menjadi variabel keputusan yang tidak bisa dipisahkan dari desain jaringan. Kedua paper ini menjadi dasar rasional mengapa kerangka optimasi multi-objektif dengan dekomposisi Benders menjadi pendekatan yang paling relevan dan *computationally tractable*.

Permasalahan jaringan rantai pasok susu pada dasarnya merupakan masalah *Mixed Integer Linear Programming* (MILP) berskala besar dengan dimensi keputusan *facility location-allocation*, *production planning*, *inventory routing*, dan *vehicle scheduling*. Lead Researchers (2023) melaporkan bahwa untuk kasus nyata dengan 50 peternakan, 12 unit pengolahan, 25 gudang dingin, dan 200 zona permintaan, formulasi monolitik MILP memerlukan waktu komputasi >8 jam dengan gap optimalitas 3,2%—sangat tidak layak untuk kebutuhan *what-if analysis* manajerial. Dekomposisi Benders, yang diperkenalkan oleh Jacques F. Benders (1962) dan diadaptasi untuk konteks susu segar oleh Lead Researchers (2023), mempartisi masalah menjadi *master problem* (keputusan lokasi & kapasitas) dan *subproblem* (alokasi flow & recourse terhadap ketidakpastian permintaan), sehingga menurunkan waktu komputasi hingga 65–80% dengan gap optimalitas <0,5%.

Konteks industri Indonesia memperkuat urgensi adopsi metode ini. Berdasarkan data BPS dan Asosiasi Industri Pengolahan Susu (AIPS), konsumsi susu domestik tumbuh 6,8% CAGR, namun *post-harvest loss* pada produk susu mencapai 12–15%—jauh lebih tinggi dibanding benchmark global 5–7%. Mengacu pada kerangka Lead Researchers (2023) dan Yanzi Zhang et al. (2024), modul ini membahas bagaimana integrasi multi-objective MILP dengan Benders decomposition dapat menurunkan kerugian tersebut sekaligus mempertahankan kelayakan ekonomi rantai pasok.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Formulasi pada Lead Researchers (2023) menggunakan himpunan indeks berikut:

- $I$: himpunan peternakan (farm) $|I| = m$
- $J$: himpunan unit pengolahan (processing plant) $|J| = n$
- $K$: himpunan gudang dingin (cold warehouse) $|K| = p$
- $L$: himpunan zona permintaan (retailer) $|L| = q$
- $S$: himpunan skenario permintaan (under uncertainty)

**Parameter biaya dan kapasitas:**

| Simbol | Definisi | Satuan |
|--------|----------|--------|
| $f_j$ | Biaya tetap pembukaan fasilitas di $j$ | IDR/tahun |
| $c_{ij}$ | Biaya transportasi per unit dari $i$ ke $j$ | IDR/liter |
| $c_{jk}$ | Biaya transportasi per unit dari $j$ ke $k$ | IDR/liter |
| $c_{kl}$ | Biaya transportasi per unit dari $k$ ke $l$ | IDR/liter |
| $h_k$ | Biaya inventory di gudang dingin $k$ | IDR/liter/hari |
| $Cap_j$ | Kapasitas proses di $j$ | liter/hari |
| $Cap_k$ | Kapasitas gudang dingin $k$ | liter |
| $Q_j$ | Kapasitas kualitas (quality acceptance) di $j$ | liter/hari |
| $d_l^s$ | Permintaan di zona $l$ pada skenario $s$ | liter/hari |
| $\phi$ | Faktor penalti kesegaran (*freshness penalty*) | IDR/hari-jeda |
| $\rho$ | Parameter konversi susu segar→produk jadi | dimensionless |
| $\alpha, \beta$ | Bobot fungsi tujuan multi-objektif | $[0,1]$, $\alpha+\beta=1$ |

### 2.2 Variabel Keputusan

$$y_j = \begin{cases} 1, & \text{jika fasilitas } j \text{ dibuka} \\ 0, & \text{otherwise} \end{cases}$$

$$x_{ij} \geq 0: \text{aliran susu mentah dari farm } i \text{ ke plant } j$$

$$z_{jk} \geq 0: \text{aliran produk jadi dari plant } j \text{ ke gudang } k$$

$$w_{kl}^s \geq 0: \text{aliran dari gudang } k \text{ ke retailer } l \text{ pada skenario } s$$

$$u_l^s \geq 0: \text{kekurangan permintaan (*shortage*) pada skenario } s \text{ di retailer } l$$

$$\theta \geq 0: \text{variabel optimal-cut dari Benders subproblem}$$

### 2.3 Fungsi Tujuan Multi-Objektif

Lead Researchers (2023) merumuskan masalah sebagai minimisasi biaya total termodulasi dan maksimasi tingkat layanan:

$$\min Z = \alpha \cdot TC + \beta \cdot \mathbb{E}[RC_s]$$

dengan:

$$TC = \sum_{j \in J} f_j y_j + \sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J}\sum_{k \in K} c_{jk} z_{jk} + \sum_{k \in K}\sum_{l \in L} c_{kl} w_{kl}$$

$$\mathbb{E}[RC_s] = \sum_{s \in S} \pi_s \left[\sum_{k \in L}\sum_{l \in L} h_k w_{kl}^s + \phi \sum_{l \in L} u_l^s + \sum_{l \in L} p_u u_l^s \right]$$

di mana $\pi_s$ adalah probabilitas skenario $s$, dan $p_u$ adalah penalti *lost-sale* per unit shortage. Dimensi kesegaran dimasukkan melalui $\phi \sum_{l \in L} u_l^s$ yang merepresentasikan *freshness penalty* karena keterlambatan delivery.

### 2.4 Kendala (*Constraints*)

**(a) Kapasitas produksi:**
$$\rho \sum_{i \in I} x_{ij} \leq Cap_j \cdot y_j, \quad \forall j \in J$$

**(b) Kapasitas gudang dingin:**
$$\sum_{l \in L} w_{kl}^s \leq Cap_k \cdot y_k, \quad \forall k \in K, \forall s \in S$$

**(c) Konservasi flow di processing plant:**
$$\rho \sum_{i \in I} x_{ij} = \sum_{k \in K} z_{jk}, \quad \forall j \in J$$

**(d) Pemenuhan permintaan dengan recourse:**
$$\sum_{k \in K} w_{kl}^s + u_l^s = d_l^s, \quad \forall l \in L, \forall s \in S$$

**(e) Non-negativitas dan binaritas:**
$$x_{ij}, z_{jk}, w_{kl}^s, u_l^s \geq 0; \quad y_j \in \{0,1\}$$

### 2.5 Formulasi Benders Decomposition

Mengikuti arsitektur Benders (1962) yang diadaptasi oleh Lead Researchers (2023) dan Yanzi Zhang et al. (2024):

**Master Problem (MP):**

$$\min \sum_{j \in J} f_j y_j + \theta$$

dengan kendala:
$$\theta \geq \sum_{s \in S} \pi_s \left[\sum_{k}\sum_{l} c_{kl} w_{kl}^s + \sum_{l} p_u u_l^s \right] \quad \forall (y, x, z) \in \text{feasible MP}$$

dan *optimality cuts* iteratif:
$$\theta \geq \sum_{(j,k,l,s)} \pi_s \hat{\pi}_{j,k,l,s}^{(n)} \cdot (\text{variabel MP}) + \hat{e}^{(n)}$$

**Subproblem (SP) untuk skenario $s$:**

$$\min \sum_{k \in K}\sum_{l \in L} (c_{kl} + h_k) w_{kl}^s + \sum_{l \in L} (p_u + \phi) u_l^s$$

dengan kendala (b)–(e). Dual variabel $\pi_{j,k,l,s}$ dari SP menghasilkan *Benders cut* yang ditambahkan ke MP. Pada Yanzi Zhang et al. (2024), SP dimodifikasi untuk memasukkan *quality decision* $q_l^s \in [0,1]$ yang merepresentasikan proporsi produk yang memenuhi standar kualitas Grade A, menghasilkan generalisasi:

$$w_{kl}^s = w_{kl}^{s,A} + w_{kl}^{s,B}$$

dengan kendala kualitas: $w_{kl}^{s,A} \geq \eta \cdot w_{kl}^s$, $\eta$ = threshold kualitas minimum.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders multi-objektif untuk jaringan produk susu memerlukan SOP terstruktur seperti yang divalidasi dalam studi Lead Researchers (2023) dan Yanzi Zhang et al. (2024):

**Tahap 1 – Akuisisi Data & Karakterisasi Jaringan (Minggu 1–3):**
- Pemetaan *bill of materials* (BOM) produk susu: susu mentah → pasteurisasi/UHT → produk jadi (susu cair, yoghurt, keju).
- Pengumpulan data historis permintaan 24–36 bulan untuk estimasi distribusi probabilitas skenario.
- Audit kapasitas cold storage dengan verifikasi suhu sesuai SNI 01-3951-1995 (susu pasteurisasi) dan Codex Alimentarius CXS 207-1999.
- Kalkulasi parameter kualitas $\eta$ dan shelf-life $\tau_l^s$ per zona retailer.

**Tahap 2 – Formulasi Model & Validasi (Minggu 4–5):**
- Konstruksi model MILP menggunakan bahasa pemodelan (GAMS/AMPL/Pyomo).
- Implementasi Benders menggunakan modul otomatis (GAMS BDMLP, Pyomo Benders, atau CPLEX Benders annotation).
- Validasi model dengan *historical backtesting* pada data 6–12 bulan terakhir.

**Tahap 3 – Solusi Iteratif Benders (Minggu 6–7):**
- Iterasi 0: Solve relaxed MP (tanpa cut) → dapatkan $y^{(0)}, x^{(0)}, z^{(0)}$.
- Iterasi $n$: Solve SP untuk setiap skenario $s \in S$ → dapatkan dual $\pi^{(n)}$ → tambahkan cut ke MP → resolve MP.
- Kriteria konvergensi: $|\theta^{(n)} - \theta^{(n-1)}| \leq \epsilon = 10^{-4}$ atau gap relatif $\leq 0,1\%$.

**Tahap 4 – Validasi Solusi & Analisis Sensitivitas (Minggu 8):**
- Verifikasi gap optimalitas akhir (target < 0,5% sesuai benchmark Lead Researchers (2023)).
- Analisis Pareto front untuk trade-off biaya vs kesegaran menggunakan $\epsilon$-constraint method.

**Tahap 5 – Implementasi & Monitoring (Minggu 9–12):**
- Integrasi dengan ERP/MES untuk *operational execution*.
- Dashboard monitoring KPI: *On-Time-In-Full* (OTIF), *product waste rate*, *cold chain compliance*.

**Diagram Alir Benders untuk Rantai Susu:**

```
[Input: data farms, plants, warehouses, retailers]