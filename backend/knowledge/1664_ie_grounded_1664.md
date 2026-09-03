# 1664 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network Design with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan dengan rantai pasok barang konsumsi non-tersier. Produk susu—mulai dari susu pasteurisasi, yogurt, hingga keju—memiliki karakteristik *highly perishable* dengan umur simpan yang pendek (umumnya 5–21 hari untuk produk segar dan 2–8 minggu untuk keju), sehingga menuntut integrasi *cold chain logistics* yang ketat dari peternakan (*farm*) hingga konsumen (*retail*) (Lead Researchers, 2023). Kerumitan ini diperparah oleh fluktuasi musiman produksi sapi perah, fragmentasi titik koleksi, serta ketidakpastian permintaan yang dipengaruhi oleh tren konsumsi, hari besar keagamaan, dan preferensi gaya hidup sehat.

Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, persoalan desain jaringan rantai pasok susu yang mempertimbangkan aspek multi-objektif—yakni minimalisasi biaya total, maksimalisasi kesegaran produk (*freshness*), dan minimalisasi emisi karbon—memiliki struktur Mixed-Integer Linear Programming (MILP) berskala besar yang sulit diselesaikan oleh solver komersial dalam waktu komputasi yang acceptable. Sebagai respon, penulis mengusulkan kerangka *Benders Decomposition* untuk memisahkan keputusan taktis-strategis (lokasi fasilitas, kapasitas) sebagai *master problem* dari keputusan operasional (aliran produk, inventori, pengiriman) sebagai *subproblem*. Pendekatan ini secara signifikan menurunkan kompleksitas eksponensial menjadi pseudo-polinomial.

Pada tataran praktis, kontribusi ini selaras dengan kebutuhan *reverse supply chain* untuk kemasan produk susu (Zhang, Li, & Ren, 2024). Dalam paper kedua yang diterbitkan di SSRN, Zhang dkk. menunjukkan bahwa keputusan kualitas—sortir, grading, dan disposal—pada jaringan logistik balik memiliki struktur matematis yang serupa dengan masalah forward chain susu. Integrasi keduanya memungkinkan perusahaan FMCG (*fast-moving consumer goods*) merancang jaringan hulu-hilir yang resilient terhadap *food loss*, sesuai dengan Sustainable Development Goal (SDG) 12.3 yang menargetkan pengurangan 50% food waste pada tahun 2030. Urgensi penerapan kerangka ini semakin nyata ketika biaya energi rantai dingin melonjak 18–25% pasca-pandemi dan tekanan regulasi emisi karbon Scope-3 meningkat di pasar Eropa dan Asia Timur.

---

## 2. Landasan Teori & Formulasi Matematis

Model jaringan rantai pasok susu multi-echelon mempertimbangkan himpunan indeks berikut: $I$ = himpunan kandidat lokasi pabrik pengolahan (*processing plant*), $J$ = himpunan kandidat pusat distribusi (*distribution center*), $K$ = himpunan pelanggan/ritel, $P$ = himpunan produk susu (misal $p_1$ = susu pasteurisasi, $p_2$ = yogurt, $p_3$ = keju), dan $T$ = himpunan periode waktu (misal mingguan).

**Parameter:**
- $f_i$ = biaya tetap pembukaan pabrik $i$
- $g_j$ = biaya tetap pembukaan DC $j$
- $c_{ijp}$ = biaya produksi + transportasi per unit produk $p$ dari $i$ ke $j$
- $t_{jkp}$ = biaya distribusi per unit dari DC $j$ ke ritel $k$
- $h_{jp}$ = biaya inventori per unit di DC $j$
- $d_{kpt}$ = permintaan deterministik produk $p$ di ritel $k$ pada periode $t$
- $Q_i$ = kapasitas produksi pabrik $i$
- $R_{jp}$ = kapasitas DC $j$ untuk produk $p$
- $\theta_p$ = laju deteriorasi kualitas produk $p$ (fungsi waktu)
- $\alpha$ = ambang batas kesegaran minimum (misal 0,85)

**Variabel keputusan:**
- $y_i \in \{0,1\}$ = 1 jika pabrik $i$ dibuka
- $z_j \in \{0,1\}$ = 1 jika DC $j$ dibuka
- $x_{ijp}$ = alir produk $p$ dari pabrik $i$ ke DC $j$
- $w_{jkpt}$ = alir produk $p$ dari DC $j$ ke ritel $k$ pada periode $t$
- $s_{jpt}$ = stok produk $p$ di DC $j$ akhir periode $t$

**Formulasi multi-objektif** (Lead Researchers, 2023) menggabungkan tiga fungsi tujuan dengan metode $\varepsilon$-constraint untuk menghasilkan frontier Pareto:

$$
\min Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{i,j,p} c_{ijp} x_{ijp} + \sum_{j,k,p,t} t_{jkp} w_{jkpt} + \sum_{j,p,t} h_{jp} s_{jpt}
$$

$$
\max Z_2 = \sum_{j,k,p,t} \alpha \cdot w_{jkpt} - \sum_{j,p,t} \theta_p \cdot s_{jpt}
$$

$$
\min Z_3 = \sum_{i,j,p} \phi_{ijp} \cdot x_{ijp} + \sum_{j,k,p,t} \varphi_{jkp} \cdot w_{jkpt}
$$

dengan $\phi_{ijp}$ dan $\varphi_{jkp}$ berturut-turut adalah faktor emisi CO₂-ekuivalen per unit-km untuk segmen produksi-distribusi dan distribusi-ritel.

**Kendala utama:**

$$
\sum_{j \in J} w_{jkpt} = d_{kpt} \quad \forall k,p,t \quad \text{(kepuasan permintaan)}
$$

$$
\sum_{i \in I} x_{ijp} - \sum_{k \in K} w_{jkpt} = s_{jpt} - s_{jp,t-1} \quad \forall j,p,t \quad \text{(neraca inventori)}
$$

$$
\sum_{j \in J} w_{jkpt} \leq R_{jp} \cdot z_j \quad \forall k,p,t \quad \text{(kapasitas DC)}
$$

$$
\sum_{p \in P} \sum_{j \in J} x_{ijp} \leq Q_i \cdot y_i \quad \forall i \quad \text{(kapasitas pabrik)}
$$

$$
s_{jpt} \geq 0, \; x_{ijp} \geq 0, \; w_{jkpt} \geq 0, \; y_i, z_j \in \{0,1\}
$$

**Struktur Benders Decomposition.** Model MILP di atas didekomposisi menjadi:

**Master Problem (MP)** — keputusan investasi:

$$
\min_{y,z,\eta} \sum_{i} f_i y_i + \sum_{j} g_j z_j + \eta
$$

$$
\text{s.t.} \; \sum_{i} y_i \geq \underline{Y}, \quad \eta \geq 0
$$

$$
\eta \geq \pi^T b - [\pi^T A] \begin{bmatrix} y \\ z \end{bmatrix} \quad \text{(Benders optimality cut)}
$$

**Subproblem (SP)** — untuk setiap $(y,z)$ tetap, selesaikan:

$$
\min_{x,w,s} \sum_{i,j,p} c_{ijp} x_{ijp} + \sum_{j,k,p,t} t_{jkp} w_{jkpt} + \sum_{j,p,t} h_{jp} s_{jpt}
$$

$$
\text{s.t. } Ax + By + Dz \geq b, \quad x,w,s \geq 0
$$

Nilai optimal SP, dinotasikan $Q(y,z)$, dikembalikan ke MP sebagai *Benders cut*. Jika SP tidak layak (*infeasible*), maka *feasibility cut* ditambahkan. Iterasi berlanjut hingga gap antara batas atas (UB) dan batas bawah (LB) kurang dari toleransi $\epsilon = 10^{-4}$. Zhang dkk. (2024) membuktikan bahwa struktur serupa berlaku untuk reverse supply chain dengan tambahan kendala kualitas $q_{jk}$ yang menghubungkan grading keputusan inspeksi terhadap alur回收 (daur ulang) produk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders Multi-Objektif di industri memerlukan SOP terstruktur sebagai berikut:

**Tahap 1 – Akuisisi & Pembersihan Data.** Data historis 12 bulan permintaan ritel, kapasitas armada refrigerated truck, dan parameter kualitas produk dikumpulkan dari ERP (SAP S/4HANA atau Oracle SCM). Validasi outlier dilakukan menggunakan metode IQR dan *time-series decomposition* untuk memisahkan tren, musiman, dan residu.

**Tahap 2 – Kalibrasi Parameter Emisi.** Faktor emisi $\phi_{ij