# 2288 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena sifat intrinsik produknya: *highly perishable*, *time-temperature dependent*, dan *quality-deteriorating*. Produk susu segar memiliki rata-rata umur simpan (*shelf life*) hanya 7–21 hari pada suhu refrigerasi 2–4 °C, sehingga setiap jam keterlambatan dalam rantai pasok menurunkan kesegaran, nilai gizi, dan akhirnya nilai jual. Di Indonesia, konsumsi susu per kapita masih di bawah 20 liter/tahun (jauh di bawah rata-rata dunia 120 liter/tahun), namun volume produksi nasional oleh Peternakan Sapi Perah rakyat dan koperasi susu (seperti KUD Susu di Jawa Timur dan Bandung) terus tumbuh seiring program Makan Bergizi Gratis dan peningkatan kesadaran gizi. Kondisi ini menciptakan kebutuhan mendesain jaringan rantai pasok yang tidak hanya meminimalkan biaya, tetapi juga memaksimalkan kesegaran produk dan menekan emisi karbon dari operasi *cold chain* (Lead Researchers, 2023; DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)).

Paper Lead Researchers (2023) memposisikan kerangka *multi-objective mixed-integer linear programming* (MOMILP) sebagai pendekatan yang mampu menangkap ketiga dimensi keputusan secara simultan: lokasi fasilitas, alokasi aliran, dan keputusan operasional *processing*. Namun, masalah optimasi jaringan rantai pasok susu bersifat NP-hard karena kombinasi variabel keputusan biner (lokasi fasilitas) dan kontinu (aliran, tingkat produksi), ditambah dengan dimensi multi-periode dan multi-produk. Pendekatan *branch-and-bound* langsung menjadi tidak layak secara komputasional untukインスタンス skala besar. Di sinilah Dekomposisi Benders (Benders, 1962) menjadi metodologi pilihan, karena mempartisi masalah menjadi *master problem* (keputusan lokasi strategis) dan *subproblem* (keputusan operasional taktis-operasional) yang resolusinya jauh lebih efisien (Zhang, Li, & Ren, 2024; DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)).

Urgensi industrial tidak terlepas dari konteks ekonomi dan regulasi. Pertama, biaya energi untuk *cold chain* dapat mencapai 30–40% dari total biaya logistik produk susu, sehingga keputusan lokasi fasilitas processing yang dekat dengan sentra peternakan maupun pasar konsumsi menjadi determinan profitabilitas. Kedua, tekanan regulasi emisi karbon (misalnya komitmen Paris Agreement dan roadmap *net-zero emission* Indonesia 2060) memaksa industri susu untuk memasukkan *carbon footprint* sebagai fungsi objektif kedua. Ketiga, keputusan kualitas (*quality grading*, *sorting*, *reprocessing*) pada tahap *receiving* di fasilitas processing menentukan utilisasi kapasitas dan nilai jual produk akhir, yang menjadi fokus spesifik paper Zhang et al. (2024) untuk konteks *reverse supply chain*. Integrasi tiga perspektif ini—biaya, kesegaran/emisi, dan kualitas—menjadi landasan justifikasi mengapa model MOMILP dengan dekomposisi Benders menjadi state-of-the-art dalam riset optimasi rantai pasok susu kontemporer.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Dasar

Misalkan indeks himpunan berikut:
- $i \in \mathcal{I}$: *fining plant*/peternakan pemasok susu mentah
- $j \in \mathcal{J}$: fasilitas *processing* (UHT/pasteurisasi)
- $k \in \mathcal{K}$: pusat distribusi (*cold distribution center*)
- $l \in \mathcal{L}$: zona permintaan/retail
- $p \in \mathcal{P}$: jenis produk (susu UHT full cream, rendah lemak, flavored, dll.)
- $t \in \mathcal{T}$: periode waktu (misal harian/mingguan)

### 2.2 Parameter

Parameter biaya dan kapasitas:
- $c_{ij}^{p}$: biaya transportasi susu mentah dari $i$ ke $j$ untuk produk $p$
- $f_{j}$: biaya tetap pembukaan fasilitas $j$
- $h_{jk}^{p}$: biaya distribusi dari $j$ ke $k$
- $g_{kl}^{p}$: biaya distribusi dari $k$ ke $l$
- $\alpha^{p}$: faktor emisi karbon per unit jarak
- $\beta_{j}$: konsumsi energi *cold storage* per unit produk di $j$
- $\gamma_{l}^{p}$: permintaan deterministik produk $p$ di zona $l$

Parameter teknologi:
- $\rho^{p}$: rasio konversi susu mentah ke produk $p$ (yield)
- $\tau^{p}$: umur simpan produk $p$ dalam hari
- $\theta^{p}$: koefisien degradasi kualitas per satuan waktu-temperatur

### 2.3 Variabel Keputusan

Variabel biner (strategis):
$$y_j = \begin{cases} 1, & \text{jika fasilitas } j \text{ dibuka} \\ 0, & \text{lainnya} \end{cases}$$

Variabel kontinu (operasional):
- $x_{ij}^{p}$: aliran susu mentah dari $i$ ke $j$ untuk produk $p$
- $u_{jk}^{p}$: aliran produk $p$ dari $j$ ke $k$
- $v_{kl}^{p}$: aliran produk $p$ dari $k$ ke $l$
- $w_{j}^{p}$: tingkat produksi produk $p$ di fasilitas $j$

### 2.4 Formulasi Multi-Objektif

Tujuan 1—minimisasi total biaya (TC):
$$\min Z_1 = \sum_{j \in \mathcal{J}} f_j y_j + \sum_{i,j,p} c_{ij}^{p} x_{ij}^{p} + \sum_{j,k,p} h_{jk}^{p} u_{jk}^{p} + \sum_{k,l,p} g_{kl}^{p} v_{kl}^{p}$$

Tujuan 2—minimisasi emisi karbon (CE):
$$\min Z_2 = \sum_{i,j,p} \alpha^{p} d_{ij} x_{ij}^{p} + \sum_{j,k,p} \alpha^{p} d_{jk} u_{jk}^{p} + \sum_{k,l,p} \alpha^{p} d_{kl} v_{kl}^{p}$$

Tujuan 3—maksimisasi kesegaran (FS), atau minimisasi degradasi kualitas:
$$\min Z_3 = \sum_{j,k,l,p} \theta^{p} \cdot T_{kl}^{p} \cdot v_{kl}^{p}$$

di mana $T_{kl}^{p}$ adalah *lead time* dari $k$ ke $l$. Formulasi pareto-frontier menggunakan teknik $\varepsilon$-constraint atau weighted sum:

$$\min \; w_1 Z_1 + w_2 Z_2 + w_3 Z_3 \quad \text{atau} \quad \min\{Z_1 \mid Z_2 \leq \varepsilon_2, Z_3 \leq \varepsilon_3\}$$

### 2.5 Kendala

Konservasi aliran dan kapasitas:
$$\sum_{k} u_{jk}^{p} = w_{j}^{p}, \quad \forall j, p$$
$$\sum_{j} u_{jk}^{p} = \sum_{l} v_{kl}^{p}, \quad \forall k, p$$
$$\sum_{k} v_{kl}^{p} = \gamma_{l}^{p}, \quad \forall l, p$$

Kapasitas fasilitas:
$$w_j^{p} \leq C_j \cdot y_j, \quad \forall j, p$$

Konversi susu mentah:
$$\sum_{p} \frac{w_j^{p}}{\rho^{p