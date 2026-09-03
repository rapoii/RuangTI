# 1808 — Optimisasi Rantai Pasok Multi-Objektif Produk Susu dengan Kerangka Benders Decomposition: Integrasi Desain Jaringan, Kualitas, dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang kompleks terkait dengan sifat **highly perishable** (sangat mudah rusak) dari produk, yang membedakan rantai pasoknya dari manufaktur konvensional. Berdasarkan kerangka kerja yang dikembangkan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), jaringan rantai pasok susu melibatkan setidaknya empat tingkatan keputusan: **peternakan sapi perah (farm)**, **pabrik pengolahan (processing plant)**, **pusat distribusi berpendingin (cold distribution center)**, dan **zona零售商/customer zone**. Kerumitan muncul karena setiap tingkatan memiliki kapasitas, lead time, dan karakteristik degradasi mutu yang berbeda.

Urgensi operasional dari paper ini terletak pada kenyataan bahwa lebih dari **30% produk susu global terbuang** akibat inefisiensi rantai pasok dan kesalahan keputusan fasilitas, sementara di sisi lain, emisi karbon dari cold chain物流 menyumbang porsi signifikan pada jejak karbon industri pangan. Studi Lead Researchers (2023) mengusulkan kerangka **multi-objective** yang secara simultan meminimalkan biaya total jaringan, memaksimalkan kesegaran produk saat sampai ke konsumen, dan meminimalkan emisi CO₂, diselesaikan melalui **Benders Decomposition** untuk mengatasi kompleksitas komputasional mixed-integer programming berskala besar.

Dari perspektif industri, paper pendukung Zhang, Li, dan Ren (2024) yang diterbitkan di *SSRN Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa dekomposisi Benders juga efektif untuk **reverse supply chain** dengan keputusan berbasis kualitas, memberikan landasan metodologis yang sama untuk aplikasi pada rantai pasok maju (forward) maupun balik. Sinergi kedua paper ini mengarahkan pada formulasi umum: bagaimana merancang jaringan yang optimal ketika keputusan investasi (here-and-now) bersifat integer dan keputusan operasional (wait-and-see) harus responsif terhadap realisasi permintaan serta kualitas produk.

Dalam konteks Indonesia sebagai salah satu konsumen susu terbesar di Asia Tenggara dengan konsumsi sekitar 16,5 kg/kapasitas per tahun menurut data industri, penerapan model ini memiliki relevansi strategis untuk efisiensi produksi susu lokal, pengurangan losses, dan peningkatan daya saing produk susu nasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Model multi-objektif yang diajukan Lead Researchers (2023) menggunakan notasi berikut:

**Himpunan:**
- $I = \{1,2,\ldots,m\}$: himpunan peternakan (farm)
- $J = \{1,2,\ldots,n\}$: himpunan pabrik pengolahan
- $K = \{1,2,\ldots,p\}$: himpunan pusat distribusi
- $L = \{1,2,\ldots,q\}$: himpunan zona konsumen
- $T = \{1,2,\ldots,|T|\}$: himpunan periode waktu

**Parameter:**
- $f_i$: biaya tetap pembukaan fasilitas $i$ (Rp/satuan)
- $c_{ij}^{F-P}$: biaya transportasi per unit dari farm $i$ ke plant $j$
- $c_{jk}^{P-D}$: biaya transportasi dari plant $j$ ke DC $k$
- $c_{kl}^{D-C}$: biaya transportasi dari DC $k$ ke konsumen $l$
- $q_i$: kapasitas suplai di farm $i$
- $Q_j$: kapasitas produksi di plant $j$
- $W_k$: kapasitas penyimpanan di DC $k$
- $d_l$: permintaan deterministik di zona konsumen $l$
- $p_l$: harga jual di zona $l$
- $\alpha$: laju degradasi kesegaran (per jam)
- $\tau_{ij}, \tau_{jk}, \tau_{kl}$: waktu tempuh antar simpul
- $e_{ij}$: emisi CO₂ per unit pada ruas $i \rightarrow j$

**Variabel Keputusan:**
- $x_i \in \{0,1\}$: 1 jika farm $i$ dibuka
- $y_j \in \{0,1\}$: 1 jika plant $j$ dibuka
- $z_k \in \{0,1\}$: 1 jika DC $k$ dibuka
- $F_{ij}$: alur susu dari farm $i$ ke plant $j$ (variabel kontinu, $\geq 0$)
- $P_{jk}$: alur produk olahan dari plant $j$ ke DC $k$
- $D_{kl}$: alur produk dari DC $k$ ke konsumen $l$

### 2.2 Formulasi Objektif Multi-Kriteria

Mengikuti kerangka Lead Researchers (2023), tiga fungsi objektif dimodelkan sebagai:

$$\min Z_1 = \sum_{i \in I} f_i x_i + \sum_{j \in J} f_j y_j + \sum_{k \in K} f_k z_k + \sum_{i,j} c_{ij}^{F-P} F_{ij} + \sum_{j,k} c_{jk}^{P-D} P_{jk} + \sum_{k,l} c_{kl}^{D-C} D_{kl} \tag{1}$$

$$\max Z_2 = \sum_{i,j,k,l} \beta \cdot e^{-\alpha(\tau_{ij}+\tau_{jk}+\tau_{kl})} \cdot F_{ij} \cdot P_{jk} \cdot D_{kl} \tag{2}$$

$$\min Z_3 = \sum_{i,j} e_{ij} F_{ij} + \sum_{j,k} e_{jk} P_{jk} + \sum_{k,l} e_{kl} D_{kl} \tag{3}$$

di mana $Z_1$ merepresentasikan biaya total jaringan, $Z_2$ adalah fungsi kesegaran produk (dimaksimumkan), dan $Z_3$ adalah emisi karbon kumulatif.

### 2.3 Kendala (Constraints)

**Kendala Kapasitas:**
$$\sum_{j \in J} F_{ij} \leq q_i x_i, \quad \forall i \in I \tag{4}$$
$$\sum_{k \in K} P_{jk} \leq Q_j y_j, \quad \forall j \in J \tag{5}$$
$$\sum_{l \in L} D_{kl} \leq W_k z_k, \quad \forall k \in K \tag{6}$$

**Kendala Konservasi Alur (Flow Conservation):**
$$\sum_{i \in I} F_{ij} = \sum_{k \in K} P_{jk}, \quad \forall j \in J \tag{7}$$
$$\sum_{j \in J} P_{jk} = \sum_{l \in L} D_{kl}, \quad \forall k \in K \tag{8}$$

**Kendala Permintaan:**
$$\sum_{k \in K} D_{kl} \geq d_l, \quad \forall l \in L \tag{9}$$

**Kendala Non-Negativitas dan Integritas:**
$$F_{ij}, P_{jk}, D_{kl} \geq 0, \quad x_i, y_j, z_k \in \{0,1\} \tag{10}$$

### 2.4 Formulasi Benders Decomposition

Karena $|I| \cdot |J| + |J| \cdot |K| + |K| \cdot |L|$ dapat mencapai ribuan variabel kontinu ditambah ratusan variabel biner, paper Lead Researchers (2023) menerapkan Benders Decomposition dengan pemisahan berikut:

**Master Problem (MP) — keputusan investasi:**
$$\min_{x,y,z,\theta} \sum_{i} f_i x_i + \sum_{j} f_j y_j + \sum_{k} f_k z_k + \theta \tag{11}$$

dengan kendala:
$$\theta \geq \pi^T (b - A[x,y,z]^T), \quad \forall \pi \in \Pi \tag{12}$$
$$x_i, y_j, z_k \in \{0,1\} \tag{13}$$

**Subproblem (SP) — keputusan alur operasional:**

Setelah nilai $x^*, y^*, z^*$ diperoleh dari MP, subproblem linear programming dirumuskan:

$$\min_{F,P,D} \sum_{i,j} c_{ij}^{F-P} F_{ij} + \sum_{j,k} c_{jk}^{P-D} P_{jk} + \sum_{k,l} c_{kl}^{D-C} D_{kl} \tag{14}$$

dengan kendala (4)–(10) menggunakan nilai biner $x^*, y^*, z^*$.

**Benders Optimality Cut** dihasilkan dari dual subproblem. Jika subproblem *feasible*, dengan variabel dual $\pi_i, \mu_j, \nu_k, \rho_l$, maka cut yang ditambahkan ke MP:

$$\theta \geq \sum_i \pi_i (q_i x_i^* - \sum_j F_{ij}) + \sum_j \mu_j (Q_j y_j^*