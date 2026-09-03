# 1632 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders: Kerangka Rekayasa Industri untuk Rantai Pasok Maju dan Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor agroindustri paling strategis sekaligus paling rentan dalam ekosistem rantai pasok global. Karakteristik utama yang membedakan jaringan rantai pasok susu dari jaringan manufaktur konvensional adalah **perishability** (daya rusak tinggi), **shelf-life yang pendek** (umumnya 5–18 hari untuk produk pasteurisasi), **persyaratan cold-chain** yang ketat (suhu 2–4 °C), dan **fluktuasi musiman permintaan** yang dipengaruhi oleh pola konsumsi, hari raya, dan tren gaya hidup sehat. Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menegaskan bahwa desain jaringan rantai pasok susu tidak dapat lagi dimodelkan sebagai masalah biaya-tunggal, melainkan harus secara simultan mempertimbangkan tiga dimensi keputusan: **efisiensi ekonomi**, **kualitas produk** (kesegaran dan keamanan pangan), dan **jejak lingkungan** (emisi karbon dari cold-chain). Studi tersebut memperkenalkan kerangka multi-objektif dengan Dekomposisi Benders untuk menyelesaikan masalah Mixed-Integer Programming (MIP) berskala besar yang lazim muncul ketika perusahaan susu harus memutuskan lokasi fasilitas produksi, kapasitas distribution center (DC), alokasi batch produksi, dan rute distribusi simultan dalam horizon perencanaan multi-periode.

Urgensi operasional dari penelitian ini diperkuat oleh temuan Zhang, Li, dan Ren (2024) pada DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) yang menunjukkan bahwa integrasi **keputusan kualitas** ke dalam model jaringan rantai pasok balik (*reverse supply chain*) dapat menurunkan total biaya sistem hingga 12–18% dan meningkatkan回收率 (tingkat pemulihan) produk jadi hingga 23%. Kedua literatur ini saling melengkapi: paper pertama berfokus pada rantai pasok maju (*forward chain*) produk susu dengan multi-objektif, sedangkan paper kedua memperluas kerangka Benders ke rantai pasok balik dengan keputusan inspeksi kualitas dan disposition (re-manufaktur, daur ulang, disposal). Secara empiris, FAO (2023) melaporkan bahwa lebih dari 13,2% produk susu global terbuang sebelum dikonsumsi; di Indonesia, BPS mencatat tingkat food loss susu segar mencapai 18% sepanjang 2022. Kerangka Benders multi-objektif menjadi relevan karena dapat menghasilkan **frontier Pareto** yang membantu manajer membuat trade-off eksplisit antara biaya, kesegaran, dan emisi.

## 2. Landasan Teori & Formulasi Matematis

Formulasi pada paper Lead Researchers (2023) menggunakan himpunan indeks $I$ (pabrik), $J$ (distribution center), $K$ (zona ritel), $P$ (produk), dan $T$ (periode). Parameter-parameter kunci meliputi biaya tetap pembukaan fasilitas $f_i, g_j$, biaya transportasi $c_{ijkt}^{p}$, tingkat deteriorasi kualitas $\alpha_{pt}$, biaya holding $h_{jt}^{p}$, permintaan $d_{kpt}$, dan faktor emisi karbon $e_{ij}^{CO_2}$. Variabel keputusan adalah $y_i \in \{0,1\}$ (pembukaan pabrik), $z_j \in \{0,1\}$ (pembukaan DC), $x_{ijkt}^{p}$ (aliran produk), $s_{jt}^{p}$ (safety stock), dan $v_{kq}$ (volume produk tersalur pada grade kualitas $q \in Q$).

Fungsi objektif majemuk dimodelkan melalui **scalarization weighted Chebyshev** agar diperoleh solusi kompromi yang terdistribusi merata di sepanjang frontier Pareto:

$$\min \; \lambda$$
$$\text{s.t. } \frac{F_k(\mathbf{x},\mathbf{y}) - F_k^{\text{ideal}}}{F_k^{\text{nadir}} - F_k^{\text{ideal}}} \leq \lambda, \quad \forall k \in \{1,2,3\}$$

dengan tiga fungsi objektif $F_1$ (biaya total), $F_2$ (indeks kesegaran), dan $F_3$ (emisi karbon):

$$F_1 = \sum_{i} f_i y_i + \sum_{j} g_j z_j + \sum_{i,j,k,t,p} c_{ijkt}^{p}\, x_{ijkt}^{p} + \sum_{j,t,p} h_{jt}^{p}\, s_{jt}^{p}$$

$$F_2 = \sum_{i,j,k,t,p} (1 - \alpha_{pt} \tau_{ijkt})\, x_{ijkt}^{p}$$

$$F_3 = \sum_{i,j,k,t,p} e_{ij}^{CO_2}\, x_{ijkt}^{p} + \sum_{j} e_{j}^{DC}\, z_j$$

Kendala utama meliputi **konservasi aliran** $\sum_{i,p} x_{ijkt}^{p} = \sum_{p} x_{jklt}^{p}$, **kepuasan permintaan** $\sum_{i,j} x_{ijkt}^{p} \geq d_{kpt}$, **kapasitas** $\sum_{k,t} x_{ijkt}^{p} \leq C_i y_i$, dan **single-source assignment** $\sum_{i} y_i \leq N^{max}$.

**Dekomposisi Benders** diterapkan dengan mempartisi variabel menjadi *first-stage* (lokasi fasilitas: $\mathbf{y}, \mathbf{z}$, integer) dan *second-stage* (aliran & stock: $\mathbf{x}, \mathbf{s}, \mathbf{v}$, kontinu). Master Problem (MP) pada iterasi $\nu$ adalah:

$$\min_{\mathbf{y}, \mathbf{z}, \theta} \; \sum_{i} f_i y_i + \sum_{j} g_j z_j + \theta$$
$$\text{s.t. } \sum_{i} y_i \leq N^{max}, \quad \sum_{j} z_j \leq M^{max}$$
$$\theta \geq \pi_{r}^T (b - A\bar{\mathbf{x}}^{(r)}), \quad r = 1,\dots,\nu - 1$$
$$\mathbf{y} \in \{0,1\}^{|I|}, \; \mathbf{z} \in \{0,1\}^{|J|}$$

Subproblem (SP) untuk fixed facility decisions $(\bar{\mathbf{y}}, \bar{\mathbf{z}})$ adalah program linear; dual-nya menghasilkan vektor pi $(\boldsymbol{\pi})$ yang menjadi koef