# 1920 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition: Integrasi Keputusan Kualitas dalam Rekayasa Jaringan Maju-Mundur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tekanan operasional yang semakin kompleks akibat karakteristik unik dari rantai pasoknya. Berbeda dengan produk manufaktur konvensional, produk susu memiliki sifat *perishable* dengan umur simpan yang pendek (rata-rata 5–21 hari tergantung pada proses pasteurisasi dan suhu distribusi), memerlukan cold chain yang ketat, serta menghadapi fluktuasi permintaan musiman yang signifikan. Lead Researchers (2023) dalam publikasi di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) menekankan bahwa perancangan jaringan rantai pasok susu memerlukan keseimbangan simultan antara minimalisasi biaya total, maksimalisasi tingkat layanan (service level), dan reduksi emisi karbon dari sistem refrigerasi. Studi ini muncul sebagai respons terhadap fakta bahwa industri susu global diproyeksikan mencapai nilai pasar USD 1,1 triliun pada 2028 dengan volume produksi melebihi 880 juta ton per tahun, namun sekitar 15–20% produk susu masih terbuang sia-sia akibat inefisiensi jaringan distribusi.

Urgensi permasalahan ini diperparah oleh kompleksitas struktural jaringan susu yang melibatkan multi-echelon: peternak (farms), unit pengumpulan (collection centers), fasilitas pemrosesan (processing plants), gudang berpendingin (cold storage warehouses), distributor regional, hingga titik ritel akhir. Lead Researchers (2023) mengidentifikasi bahwa keputusan fasilitas (facility location), kapasitas produksi (capacity allocation), alokasi aliran produk (product flow assignment), dan kebijakan inventori (inventory policy) bersifat saling tergantung (*interdependent*) sehingga penyelesaian menggunakan pendekatan monolitik menjadi komputasional tidak tractable. Lebih lanjut, Zhang, Li, dan Ren (2024) dalam DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa perancangan jaringan maju (forward) saja tidak cukup; integrasi dengan keputusan reverse logistics—terutama untuk produk susu yang mendekati kedaluwarsa atau telah expired—menjadi imperatif strategis karena menyangkut aspek profitabilitas回收, kepatuhan regulasi food safety, dan tanggung jawab lingkungan.

Konteks regulasi juga menjadi penggerak utama. Implementasi standar Hazard Analysis Critical Control Point (HACCP), ISO 22000 untuk food safety management, serta inisiatif Sustainable Development Goals (SDGs) poin 12 tentang Responsible Consumption and Production menuntut perusahaan susu merancang jaringan yang tidak hanya cost-efficient tetapi juga quality-preserving dan environmentally sustainable. Benders Decomposition (BD), sebagai teknik dekomposisi yang dikembangkan oleh Jacques F. Benders (1962) dan telah diaplikasikan secara ekstensif dalam optimisasi berskala besar, menawarkan mekanisme elegan untuk memisahkan keputusan investasi fasilitas (masalah master) dari keputusan operasional aliran dan produksi (masalah subproblem). Integrasi kerangka multi-objektif dengan BD memungkinkan perusahaan susu menangani ribuan variabel keputusan dan ratusan skenario permintaan secara komputasional efisien, sambil mengeksplorasi trade-off Pareto-optimal antara dimensi ekonomi, operasional, dan lingkungan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif Rantai Pasok Susu

Kerangka multi-objektif yang diajukan Lead Researchers (2023) memodelkan jaringan sebagai graf berarah $G = (N, A)$ dengan himpunan node $N$ yang terdiri dari suppliers ($S$), plants ($P$), warehouses ($W$), dan customers ($C$). Formulasi Mixed-Integer Linear Programming (MILP) untuk ketiga objektif tersebut adalah:

**Objektif 1: Minimalisasi Biaya Total (Z₁)**
$$\min Z_1 = \sum_{i \in S} \sum_{j \in P} c_{ij}^{sp} x_{ij} + \sum_{j \in P} f_j y_j + \sum_{j \in P} \sum_{k \in W} c_{jk}^{pw} x_{jk} + \sum_{k \in W} \sum_{l \in C} c_{kl}^{wc} x_{kl} + \sum_{(i,j) \in A} h_{ij} x_{ij}$$

di mana $x_{ij}$ adalah kuantitas aliran pada arc $(i,j)$, $y_j \in \{0,1\}$ adalah keputusan biner pembukaan fasilitas, $f_j$ adalah fixed cost pembukaan plant $j$, $c_{ij}^{sp}, c_{jk}^{pw}, c_{kl}^{wc}$ adalah biaya transportasi per unit antar-echelon, dan $h_{ij}$ adalah biaya penanganan (handling) yang mencakup cold chain.

**Objektif 2: Maksimalisasi Tingkat Layanan (Z₂)**
$$\max Z_2 = \sum_{l \in C} \sum_{m \in M} w_m \cdot \text{SL}_{lm}$$

di mana $\text{SL}_{lm}$ adalah service level untuk customer $l$ pada produk $m$, dan $w_m$ adalah bobot prioritas produk.

**Objektif 3: Minimalisasi Emisi Karbon (Z₃)**
$$\min Z_3 = \sum_{(i,j) \in A} e_{ij} \cdot d_{ij} \cdot x_{ij} + \sum_{j \in P} \epsilon_j y_j$$

dengan $e_{ij}$ adalah faktor emisi per ton-km, $d_{ij}$ jarak antar-node, dan $\epsilon_j$ emisi dari operasional plant.

Konstrain utama mencakup:
- **Kapasitas plant:** $\sum_{i \in S} x_{ij} \leq \text{Cap}_j \cdot y_j, \quad \forall j \in P$
- **Konservasi aliran:** $\sum_{i} x_{ij} - \sum_{k} x_{jk} = 0, \quad \forall j \in P$
- **Pemenuhan permintaan:** $\sum_{k \in W} x_{kl} \geq D_{lm}, \quad \forall l \in C, m \in M$

### 2.2 Formulasi Benders Decomposition

Karena struktur masalah memiliki variabel biner $y_j$ yang bersifat *complicating variables*, Lead Researchers (2023) melakukan dekomposisi menjadi:

**Master Problem (MP):**
$$\min_{y \in Y} f^T y + \theta$$
$$\text{st.} \quad \theta \geq \pi^{(t)} (f - By) \quad \forall t = 1, \ldots, T$$

di mana $\theta$ adalah variabel yang merepresentasikan nilai optimal subproblem, dan $\pi^{(t)}$ adalah dual multiplier dari iterasi $t$.

**Subproblem (SP) — fixed y:** Masalah operasional aliran, produksi, dan inventori diselesaikan sebagai linear program setelah $y$ difiksasi dari MP.

### 2.3 Integrasi Keputusan Kualitas (Reverse Chain)

Zhang, Li, dan Ren (2024) memperluas kerangka ini dengan memperkenalkan variabel kualitas $q \in \{0,1,2\}$ yang merepresentasikan grade produk (high, medium, reject), dengan konstrain degradasi kualitas mengikuti hukum Arrhenius:
$$q_{ij}^{arr} = q_i \cdot \exp(-\lambda \cdot \tau_{ij})$$

di mana $\tau_{ij}$ adalah waktu transit dan $\lambda$ adalah konstanta degradasi spesifik produk susu. Produk dengan grade rendah dialokasikan ke reverse channel dengan recovery value $r_{ij}^{rec}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kerangka Lead Researchers (2023) dan Zhang et al. (2024) mengikuti prosedur operasional berikut:

**Fase 1 — Karakterisasi Data Industri.** Pengumpulan data meliputi: profil permintaan musiman (demand forecasting), biaya pembukaan fasilitas, kapasitas produksi, matriks jarak-time, parameter cold chain, dan aturan food safety (HACCP). Data distandardisasi mengikuti ISO 22000.

**Fase 2 — Konstruksi Model Matematis.** Model MILP multi-objektif dibangun menggunakan notasi aljabrik dan diimplementasikan dalam GAMS/Python (Pyomo) dengan solver CPLEX atau Gurobi. Skalabilitas diverifikasi dengan stress test pada instance 50–500 node.

**Fase 3 — Aplikasi Algoritma Benders.** Algoritma iteratif sebagai berikut:

```
Step 1: Inisialisasi UB = +∞, LB = -∞, T = 0
Step 2: Selesaikan Master Problem → dapat (y*, θ*)
Step 3: Update LB = f^T y* + θ*
Step 4: Selesaikan Subproblem dengan y = y*
Step 5: Jika SP feasible: tambah Benders optimality cut
        Jika SP infeasible: tambah Benders feasibility cut
Step 6: Update UB = min(UB, f^T y* + SP*)
Step 7: Jika |UB - LB|/UB < ε: STOP; else T = T+1, go to Step 2
```

**Fase 4 — Generasi Pareto Front.** Untuk kerangka multi-objektif, digunakan metode $\epsilon$-constraint atau NSGA-II untuk mengeksplorasi permukaan trade-off.

**Fase 5 — Validasi dan Implementasi.** Solusi divalidasi menggunakan simulasi discrete-event pada software AnyLogic atau FlexSim, kemudian diimplementasikan sebagai decision support system dengan integrasi ERP (SAP S/4HANA).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Instance

Pertimbangkan jaringan susu dengan parameter (diadaptasi dari Lead Researchers, 2023):

| Parameter | Nilai |
|-----------|-------|
| Jumlah farms (S) | 5 |
| Jumlah plants (P) | 3 kandidat |
| Jumlah warehouses (W) | 4 kandidat |
| Jumlah customers (C) | 8 |
| Permintaan total | 12.000 ton/bulan |
| Fixed cost plant | Rp 8–15 milyar |
| Biaya transp/kg | Rp 250–650 |
| Kapasitas plant | 4.000–6.000 ton/bulan |

### 4.2 Iterasi Benders Step-by-Step

**Iterasi 1:** MP tanpa cut memberikan $y_1^* = y_2^* = 1, y_3^* = 0$ (buka Plant 1 dan 2). LB = f^T y* = 23 milyar.

Subproblem dengan $y_1 = y_2 = 1, y_3 = 0$: optimal SP* = 47,3 milyar (biaya operasional). UB = 23 + 47,3 = 70,3 milyar.

Dual multipliers dari SP: $\pi^{(1)} = [2.1, 1.8, 3.2]$. Benders optimality cut:
$$\theta \geq 2.1(f_1 - 6.000 \cdot y_1) + 1.8(f_2 - 5.000 \cdot y_2) + 3.2(0 \cdot y_3)$$

**Iterasi 2:** MP dengan cut baru diselesaikan. Hasil: $y_1^* = 1, y_2^* = 1, y_3^* = 1$ (semua plant dibuka). LB = 36 milyar.

Subproblem: SP* = 38,1 milyar. UB = 74,1 milyar. Gap = 5,3%.

**Iterasi 5 (konvergen):** $y^* = (1,1,1)$. LB = 74,0 milyar, UB = 74,3 milyar. **Gap = 0,4% < ε = 0,5%. STOP.**

### 4.3 Analisis Pareto Multi-Objektif

Setelah 30 titik Pareto diperoleh, trade-off kunci teridentifikasi:
- **Solusi cost-min:** Total cost Rp 74,0 milyar, emisi 1.240 ton CO₂eq, service level 92%.
- **Solusi green-min:** Emisi 890 ton CO₂eq, cost Rp 82,5 milyar (+11,5%), service level 94%.
- **Solusi service-max:** Service level 98%, cost Rp 89,1 milyar, emisi 1.180 ton CO₂eq.

Interpretasi manajerial: perusahaan susu dengan target carbon neutrality akan memilih green-min meskipun cost meningkat 11,5%, namun investasi ini dapat dikompensasi melalui carbon credit dan image branding sustainability. Zhang et al. (2024) menambahkan bahwa integrasi reverse channel untuk produk near-expiry (yang didegradasi menjadi grade