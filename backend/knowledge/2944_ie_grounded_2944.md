# 2944 — Optimalisasi Jaringan Rantai Pasok Multi-Objektif dengan Dekomposisi Benders: Aplikasi pada Rantai Pasok Produk Susu dan Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biofisik produk yang sangat *time-critical*. Susu pasteurisasi memiliki umur simpan (*shelf life*) yang terbatas antara 7 hingga 21 hari pada suhu refrigerasi 2–4°C, sementara produk *UHT* (Ultra High Temperature) memiliki rentang 3–6 bulan namun tetap memerlukan kontrol suhu rantai dingin (*cold chain integrity*). Kerentanan ini diperparah oleh fakta bahwa degradasi kualitas susu—yang dipengaruhi oleh suhu, waktu, dan kontaminasi mikroba—bersifat *irreversible* dan tidak dapat dipulihkan melalui proses hilir. Dalam konteks ini, perancangan jaringan rantai pasok tidak cukup hanya meminimalkan biaya logistik, melainkan harus secara simultan mempertimbangkan tiga dimensi keputusan: efisiensi biaya, kesegaran produk (*product freshness*), dan emisi karbon dari operasional rantai dingin.

Lead Researchers (2023) dalam publikasi mereka di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) mengusulkan kerangka kerja *multi-objective mixed-integer linear programming* (MOMILP) yang diselesaikan melalui *Benders Decomposition* sebagai respons terhadap kompleksitas komputasional masalah jaringan rantai pasok susu skala industri. Masalah optimasi jaringan rantai pasok susu biasanya mencakup ratusan variabel biner (keputusan *facility location*) dan ribuan variabel kontinu (aliran produk), sehingga solver *branch-and-cut* konvensional sering gagal mencapai konvergensi dalam batas waktu komputasi yang diterima industri. Pendekatan *Benders Decomposition* memungkinkan dekomposisi problem menjadi *master problem* (keputusan fasilitas) dan *subproblem* (aliran operasional) yang diselesaikan secara iteratif.

Kompleksitas ini semakin nyata ketika integrasi dengan *reverse supply chain* dipertimbangkan, seperti yang disoroti oleh Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437). Mereka menekankan bahwa keputusan kualitas (*quality decisions*) dalam jaringan *reverse logistics*—misalnya tingkat inspeksi, sortasi, dan *remanufacturing* produk susu yang dikembalikan (*return milk*)—harus diintegrasikan ke dalam keputusan desain jaringan karena kualitas produk daur ulang mempengaruhi kelayakan konsumsi ulang dan profitabilitas ekonomi sirkular. Kedua paper ini memberikan fondasi metodologis yang saling melengkapi untuk menangani kompleksitas bio-komputasional pada industri *fast-moving consumer goods* (FMCG) yang mudah rusak.

Urgensi industri dari optimalisasi ini dapat diukur secara kuantitatif. Studi kasus pada koperasi susu di Eropa menunjukkan bahwa 8–15% kerugian ekonomi tahunan berasal dari produk kadaluarsa dan inefisiensi distribusi, setara dengan €2.3 miliar per tahun untuk industri susu Eropa. Di Indonesia, dengan konsumsi susu domestik yang tumbuh rata-rata 5.7% per tahun (BPS, 2023), inefisiensi rantai pasok susu impor dan domestik menjadi *bottleneck* strategis bagi ketahanan pangan berbasis protein hewani. Kerangka multi-objektif dengan *Benders Decomposition* bukan sekadar persoalan akademis, melainkan kebutuhan operasional yang terukur dampaknya terhadap margin keuntungan (*profit margin*), keberlanjutan lingkungan, dan kepuasan konsumen.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis Terintegrasi

Formulasi *Mixed-Integer Linear Programming* (MILP) untuk jaringan rantai pasok susu multi-objektif yang dibangun oleh Lead Researchers (2023) dapat dinyatakan sebagai berikut. Misalkan himpunan $I$ merepresentasikan *supplier* (peternakan sapi perah), himpunan $J$ merepresentasikan fasilitas produksi (pabrik pengolahan/Pabrik Pengolahan Susu/PPS), himpunan $K$ merepresentasikan pusat distribusi (*distribution centers*/DC), himpunan $L$ merepresentasikan *retailers*, dan himpunan $P$ merepresentasikan produk (susu pasteur, susu UHT, keju, yoghurt). Parameter-parameter kunci meliputi:

- $a_i$: kapasitas suplai susu mentah dari peternakan $i$ (liter/hari)
- $cap_j$: kapasitas produksi fasilitas $j$ (liter/hari)
- $cap_k$: kapasitas penyimpanan DC $k$ (liter)
- $d_{lp}$: permintaan produk $p$ pada retailer $l$ (liter/hari)
- $c_{ij}$: biaya运输 susu mentah dari $i$ ke $j$ (Rp/liter)
- $c_{jkl}$: biaya distribusi produk dari $j$ ke $k$ ke $l$ (Rp/liter)
- $f_j$: biaya investasi tetap fasilitas $j$ (Rp)
- $\alpha$: tingkat degradasi kualitas per satuan waktu
- $T_{max}$: batas waktu maksimum dari produksi hingga ritel

Fungsi objektif multi-tujuan dirumuskan melalui pendekatan *weighted sum* atau *$\epsilon$-constraint*, dengan tiga komponen tujuan yang saling *conflicting*:

$$\min Z_1 = \sum_{j \in J} f_j y_j + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{k \in K} \sum_{l \in L} c_{kl} z_{kl} \quad \text{(Biaya Total)}$$

$$\min Z_2 = \sum_{p \in P} \sum_{l \in L} \sum_{j \in J} \beta_{jlp} q_{jlp} \quad \text{(Indeks Degradasi Kesegaran)}$$

$$\min Z_3 = \sum_{(i,j,k,l) \in A} \gamma_{ij} \cdot \text{dist}_{ij} \cdot x_{ij} + \sum_{(j,k,l) \in B} \gamma_{kl} \cdot \text{dist}_{kl} \cdot z_{kl} \quad \text{(Emisi Karbon)}$$

di mana $y_j \in \{0,1\}$ adalah variabel keputusan biner untuk pembukaan fasilitas, $x_{ij}$ adalah aliran susu mentah dari $i$ ke $j$, dan $z_{kl}$ adalah aliran produk jadi dari DC $k$ ke ritel $l$. Parameter $\beta_{jlp}$ mengkuantifikasi koefisien degradasi kesegaran yang bergantung pada waktu transit dan suhu penyimpanan.

### 2.2 Formulasi *Benders Decomposition*

*Benders Decomposition* mempartisi problem asli menjadi *master problem* yang hanya mengandung variabel biner keputusan fasilitas $y_j$, serta *subproblem* yang menentukan aliran operasional optimal $x_{ij}$ dan $z_{kl}$ untuk给定 konfigurasi fasilitas. *Master problem* diformulasikan sebagai:

$$\min Z_{MP} = \sum_{j \in J} f_j y_j + \eta$$

$$\text{s.t.} \quad \sum_{j \in J} a_{ij} y_j \geq D \quad \forall i$$

$$\eta \geq 0, \quad y_j \in \{0,1\} \quad \forall j$$

di mana $\eta$ adalah variabel skalar yang merepresentasikan batas bawah (*lower bound*) pada biaya operasional. *Subproblem* untuk给定 $\bar{y}$ adalah *LP relaxation*:

$$\min Z_{SP}(\bar{y}) = \sum_{i,j} c_{ij} x_{ij} + \sum_{k,l} c_{kl} z_{kl}$$

$$\text{s.t.} \quad \sum_{j} x_{ij} \leq a_i \quad \forall i \quad (\pi_i)$$

$$\sum_{i} x_{ij} = \sum_{k} w_{jk} \quad \forall j \quad (\mu_j)$$

$$\sum_{k} w_{jk} \leq cap_j \cdot y_j \quad \forall j \quad (\nu_j)$$

$$\sum_{l} z_{kl} \geq d_{kp} \quad \forall k,p \quad (\rho_{kp})$$

$$\sum_{j} z_{kl} \leq cap_k \cdot v_k \quad \forall k \quad (\sigma_k)$$

$$x_{ij}, z_{kl}, w_{jk} \geq 0$$

Variabel dual $(\pi_i, \mu_j, \nu_j, \rho_{kp}, \sigma_k)$ digunakan untuk membangkitkan *Benders cuts* yang ditambahkan ke *master problem*:

$$\eta \geq Z_{SP}(\bar{y}^{(t)}) + \sum_{j} (f_j - \nu_j^{(t)}) (y_j - \bar{y}_j^{(t)}) \quad \text{(optimality cut)}$$

atau

$$0 \geq Z_{SP}(\bar{y}^{(t)}) + \sum_{j} (f_j - \nu_j^{(t)}) (y_j - \bar{y}_j^{(t)}) \quad \text{(feasibility cut)}$$

untuk iterasi $t$. Algoritma ini menjamin konvergensi ke solusi optimal problem asli dalam jumlah iterasi yang umumnya jauh lebih kecil daripada *branch-and-bound* langsung, terutama untuk instances dengan ribuan variabel biner.

### 2.3 Model Kualitas dalam Reverse Supply Chain

Zhang, Li, dan Ren (2024) memperluas kerangka *Benders* dengan memasukkan keputusan kualitas melalui variabel inspeksi $\iota_r \in [0,1]$ yang merepresentasikan proporsi produk yang diinspeksi pada *recovery center* $r$. Fungsi degradasi kualitas dinyatakan sebagai:

$$Q(\tau) = Q_0 \cdot e^{-\alpha \tau} \cdot (1 - \theta \cdot \iota_r)$$

di mana $Q_0$ adalah kualitas awal, $\tau$ adalah waktu siklus, dan $\theta$ adalah koefisien peningkatan kualitas melalui inspeksi. Keputusan sortasi menghasilkan tiga kategori *output*: produk *remanufactured* (kelas A), *rework* (kelas B), dan *reject* (kelas C), dengan batasan:

$$\sum_{c \in \{A,B,C\}} s_{rc} = \iota_r \cdot R_r$$

di mana $R_r$ adalah volume *returns* pada recovery center $r$ dan $s_{rc}$ adalah alokasi ke kelas kualitas