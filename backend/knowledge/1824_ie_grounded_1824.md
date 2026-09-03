# 1824 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik fisikokimiawi produk yang mudah rusak (*perishable*) dan memiliki siklus hidup singkat. Susu pasteurisasi memiliki umur simpan rata-rata 7–21 hari pada suhu refrigerasi 2–4°C, sedangkan keju lunak memiliki jendela distribusi 14–30 hari. Kerugian pascapanen (*post-harvest losses*) pada rantai pasok susu mencapai 15–25% di negara berkembang akibat inefisiensi cold chain, perencanaan distribusi suboptimal, dan ketidakseimbangan supply-demand (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)).

Urgensi operasional industri ini diperparah oleh tiga faktor simultan: (1) **fluktuasi musiman produksi** susu sapi perah yang mencapai koefisien variasi 18–22% antara puncak (musim hujan) dan lembah (musim kemarau); (2) **biaya energi cold chain** yang kontribusinya terhadap total biaya distribusi mencapai 35–45% dari total operational expenditure; dan (3) **regulasi food safety** yang semakin ketat (HACCP, ISO 22000, FSSC 22000) yang memerlukan traceability end-to-end. Kerangka multi-objektif menjadi pendekatan imperatif karena ketiga dimensi ini—ekonomi, kualitas produk, dan dampak lingkungan—tidak dapat dioptimasi secara simultan dengan pendekatan single-objective konvensional.

Paper Lead Researchers (2023) memposisikan Dekomposisi Benders sebagai metode optimasi yang memecah masalah Mixed-Integer Linear Programming (MILP) berskala besar menjadi *master problem* (keputusan lokasi fasilitas) dan *subproblem* (alokasi aliran operasional). Pendekatan ini sangat relevan untuk jaringan rantai pasok susu yang memiliki hierarki keputusan: tingkat strategis (lokasi peternakan, pabrik pengolahan, distribution center), tingkat taktis (routing armada refrigerated), dan tingkat operasional (penjadwalan produksi harian). Kompleksitas komputasional eksponensial pada model terintegrasi menuntut dekomposisi untuk tractability, yang dijawab oleh algoritma Benders (Benders, 1962).

Studi pendukung Zhang, Li, dan Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas kerangka ini ke ranah *reverse supply chain* dengan keputusan kualitas, yang secara langsung relevan untuk dairy industry karena limbah whey, kemasan plastik, dan produk kadaluarsa memerlukan penanganan khusus. Integrasi forward-reverse network dengan keputusan inspeksi kualitas (Grade A/B/Reject) menjadi extension natural untuk industri susu di mana standarisasi kualitas sangat bergantung pada plate count, somatic cell count, dan fat content.

Dalam konteks ekonomi Indonesia—produsen susu terbesar di ASEAN dengan produksi ~950 juta liter/tahun menurut data BPS—kerangka seperti ini memiliki aplikasi langsung bagi perusahaan seperti PT Frisian Flag Indonesia, PT Ultrajaya, dan PT Indofood Susu. Gap riset yang diidentifikasi adalah minimnya model yang secara simultan mengintegrasikan multi-objective (cost-freshness-emission), Benders decomposition, dan karakteristik dairy-specific seperti degradasi kualitas berbasis waktu.

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis untuk kerangka multi-objektif dairy supply chain network menggunakan notasi himpunan, parameter, dan variabel keputusan sebagai berikut (Lead Researchers, 2023):

### 2.1 Notasi Himpunan

- $I$: himpunan peternakan (farm), $i \in I$
- $J$: himpunan pabrik pengolahan (processing plant), $j \in J$
- $K$: himpunan distribution center (DC), $k \in K$
- $L$: himpunan zona permintaan (customer zones), $l \in L$
- $T$: himpunan periode waktu, $t \in T$
- $P$: himpunan jenis produk susu (UHT, pasteurisasi, keju, yoghurt), $p \in P$

### 2.2 Parameter

- $d_{lpt}$: permintaan produk $p$ di zona $l$ pada periode $t$ (liter)
- $c_{ij}^{f}$: biaya transportasi susu mentah dari farm $i$ ke plant $j$ (Rp/liter)
- $c_{jkl}^{p}$: biaya distribusi produk jadi dari plant $j$ ke DC $k$ ke customer $l$ (Rp/liter)
- $f_j$: fixed cost operasional plant $j$ (Rp)
- $\alpha_p$: koefisien degradasi kualitas produk $p$ (% per hari)
- $q_p^{min}$: batas minimum kualitas (plate count threshold) produk $p$
- $\theta$: lead time transportation (jam)
- $\beta$: emission factor CO₂ transport (kg CO₂/km/liter)

### 2.3 Variabel Keputusan

- $y_j \in \{0,1\}$: 1 jika plant $j$ dibuka, 0 sebaliknya
- $x_{ij}$: volume susu mentah yang dikirim dari farm $i$ ke plant $j$ (liter)
- $z_{jkl}$: volume produk jadi dari plant $j$ via DC $k$ ke customer $l$ (liter)
- $w_{lpt}$: unmet demand produk $p$ di zona $l$ periode $t$ (liter)

### 2.4 Fungsi Objektif Multi-Objektif

Kerangka menggunakan pendekatan $\epsilon$-constraint untuk mengkonversi multi-objective menjadi constrained single-objective:

**Objektif 1: Minimasi Total Biaya**

$$\min Z_1 = \sum_{j \in J} f_j y_j + \sum_{i \in I} \sum_{j \in J} c_{ij}^{f} x_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} c_{jkl}^{p} z_{jkl} + \sum_{l \in L} \sum_{p \in P} \sum_{t \in T} \pi_p w_{lpt}$$

di mana $\pi_p$ adalah penalty cost unmet demand per liter produk $p$.

**Objektif 2: Minimasi Degradasi Kualitas Rata-rata**

$$\min Z_2 = \frac{1}{|T| \cdot |P| \cdot |L|} \sum_{p \in P} \sum_{l \in L} \sum_{t \in T} \alpha_p \cdot \theta \cdot \left(\sum_{j,k} z_{jkl}\right)$$

**Objektif 3: Minimasi Emisi Karbon**

$$\min Z_3 = \sum_{i,j} \beta \cdot d_{ij}^{dist} \cdot x_{ij} + \sum_{j,k,l} \beta \cdot d_{jkl}^{dist} \cdot z_{jkl}$$

### 2.5 Kendala (Constraints)

**Kendala Kapasitas Plant:**

$$\sum_{i \in I} x_{ij} \leq Cap_j \cdot y_j, \quad \forall j \in J$$

**Kendala Flow Balance di DC:**

$$\sum_{j \in J} z_{jkl} = \sum_{l' \in L} z_{kl'}^{\text{out}}, \quad \forall k \in K$$

**Kendala Kualitas Minimum:**

$$\sum_{p \in P} \alpha_p \cdot \theta \cdot z_{jkl} \geq q_p^{min} \cdot \sum_{j,k} z_{jkl}, \quad \forall l \in L, t \in T$$

**Kendala Permintaan:**

$$\sum_{j \in J} \sum_{k \in K} z_{jkl} + w_{lpt} \geq d_{lpt}, \quad \forall l \in L, p \in P, t \in T$$

### 2.6 Dekomposisi Benders

Problem MILP direformulasi menjadi:

**Master Problem (MP):**

$$\min_{y} \sum_{j} f_j y_j + \eta$$

subject to: $\eta \geq Q(y^{(n)})$ untuk semua iterasi cut $n$.

**Subproblem (SP) untuk fixed $y$:**

$$\min_{x,z,w} \sum_{i,j} c_{ij}^{f} x_{ij} + \sum_{j,k,l} c_{jkl}^{p} z_{jkl} + \sum_{l,p,t} \pi_p w_{lpt}$$

Dual SP menghasilkan Benders cut yang ditambahkan ke MP, dengan convergence criterion:

$$|UB^{(n)} - LB^{(n)}| \leq \epsilon_{tol} = 0.01 \cdot |LB^{(n)}|$$

Zhang, Li, dan Ren (2024) memperluas formulasi ini dengan menambahkan himpunan $R$ untuk recovery centers dan variabel $r_{jk}^{q}$ untuk recovery quantity dengan grade kualitas $q \in \{A,B,C\}$:

$$x_{ij} = \sum_{q \in Q} r_{ij}^q, \quad \text{dengan} \quad r_{ij}^q \leq u_q \cdot \sum_{i} x_{ij}$$

di mana $u_q$ adalah recovery yield untuk grade kualitas $q$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders decomposition untuk dairy supply chain mengikuti SOP lima tahap yang distandarisasi:

### Tahap 1: Karakterisasi Jaringan Eksisting

1. **Pemetaan node supply chain** menggunakan RFID tracking dan GPS telematics untuk mengidentifikasi farm-to-customer lead time aktual.
2. **Kuantifikasi kapasitas & throughput**: capacity utilization rate plant, vehicle load factor armada refrigerated.
3. **Audit kualitas**: pengukuran plate count, fat content, protein content per batch menggunakan FTIR analyzer.

### Tahap 2: Estimasi Parameter

Sampling permintaan menggunakan time series ARIMA $(p,d,q)$ dengan validasi MAPE < 10%. Parameter biaya divalidasi melalui activity-based costing. Emission factor menggunakan standar GHG Protocol Scope 3.

### Tahap 3: Formulasi & Validasi Model

Model diimplementasikan pada GAMS 36.2 dengan solver CPLEX untuk MILP dan CONOPT untuk NLP. Validasi menggunakan teknik *warm-start* dengan solusi heuristik sebagai initial incumbent.

### Tahap 4: Eksekusi Algoritma Benders

Diagram alur algoritma:

```
INITIALIZATION: Set UB = +∞, LB = -∞, n = 0
REPEAT:
  1. Solve Master Problem → obtain (y*, η*)
  2. Update LB = max(LB, objective_MP)
  3. Solve Subproblem with y* fixed
  4. IF subproblem feasible:
       - Update UB = min(UB, f(y*) + obj_SP)
       - Generate optimality cut
     ELSE:
       - Generate feasibility cut from dual ray
  5. Add cut to MP
  6. n = n + 1
UNTIL |UB - LB| < ε_tol
```

### Tahap 5: Validasi Solusi & Implementasi

Solusi diverifikasi melalui pilot test 30 hari dengan KPI: (a) on-time delivery rate ≥ 95%, (b) shelf-life utilization ≥ 80%, (c) cost reduction 8–15% vs. baseline, (d) CO₂ emission reduction 10–18%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Jaringan Susu PT. ABC di Jawa Timur**

### 4.1 Data Input

Misalkan jaringan dengan $|I|=5$ farm, $|J|=3$ plant, $|K|=4$ DC, $|L|=8$ zona pelanggan, $|T|=12$ bulan, $|P|=4$ produk.

**Tabel 1. Parameter Biaya Transportasi (Rp/liter)**

| Route | Biaya (Rp/liter) |
|-------|------------------|
| Farm-Plant (rata-rata) | 850 |
| Plant-DC (rata-rata) | 620 |
| DC-Customer (rata-rata) | 480 |
| Fixed cost plant | 2,5 Miliar/tahun |

**Permintaan Bulanan:** Total 2.4 juta liter/bulan, terdistribusi: UHT 45%, Pasteurisasi 30%, Yoghurt 15%, Keju 10%.

**Parameter Kualitas:** $\alpha_{UHT}=0.8\%$/hari, $\alpha_{Pasteur}=2.5\%$/hari, $\alpha_{Yoghurt}=3.2\%$/hari, $\alpha_{Keju}=0.4\%$/hari. Minimum acceptable quality $q_p^{min}$: UHT 95%, Paste 90%, Yoghurt 92%, Keju 97%.

### 4.2 Perhitungan Step-by-Step

**Step 1: Tanpa Optim