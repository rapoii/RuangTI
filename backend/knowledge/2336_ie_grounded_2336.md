# 2336 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders untuk Optimasi Biaya, Kualitas, dan Keberlanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Berdasarkan laporan Lead Researchers (2023) yang dipublikasikan dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), rantai pasok susu merupakan sistem bio-klimatik-termodinamik yang sangat sensitif terhadap tiga variabel utama: waktu simpan (shelf life), suhu rantai dingin (cold chain), dan volatilitas permintaan musiman. Produk susu pasteurisasi memiliki rata-rata umur simpan hanya 14–21 hari, sedangkan Ultra-High Temperature (UHT) milk mencapai 6–9 bulan—namun membutuhkan investasi energi termal yang signifikan. Kerugian akibat *post-harvest loss* pada rantai dingin susu di negara berkembang dilaporkan mencapai 18–25% dari total produksi (Lead Researchers, 2023).

Urgensi operasional semakin meningkat ketika industri harus menyeimbangkan tiga objective yang saling konfliktif secara simultan: (1) **minimasi total biaya logistik** yang mencakup biaya transportasi refrigerated, biaya inventori, dan biaya kapasitas fasilitas; (2) **maksimasi tingkat kesegaran produk** (*product freshness*) yang terukur melalui degradasi vitamin, pertumbuhan bakteri mesofilik, dan waktu tempuh dari peternakan (*farm*) ke konsumen akhir; serta (3) **minimasi jejak karbon** yang kini menjadi mandat regulasi di Uni Eropa melalui *Farm to Fork Strategy* dan Carbon Border Adjustment Mechanism (CBAM). Pendekatan single-objective optimization yang selama ini dipakai dalam literatur klasik—seperti model *transshipment* Hodgson atau model *p-hub median*—diidentifikasi tidak cukup untuk menangkap trade-off triadik tersebut.

Kontribusi utama Lead Researchers (2023) adalah mengusulkan *framework* multi-objektif dengan tiga *objective function* berbeda yang diselesaikan secara simultan melalui teknik **Benders Decomposition**. Pendekatan ini membagi masalah Mixed-Integer Non-Linear Programming (MINLP) berskala besar menjadi *master problem* (MP) yang menangani keputusan lokasi fasilitas dan *subproblem* (SP) yang mengoptimalkan alokasi aliran dan operasional harian. Zhang, Li, dan Ren (2024) dalam artikel komplementer mereka (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas arsitektur ini ke ranah *reverse supply chain* dengan memasukkan keputusan kualitas produk yang dikembalikan (*returned product quality*), sehingga menutup loop antara forward dan reverse logistics. Integrasi kedua paper ini menjadi fondasi kuat bagi perancangan sistem rantai pasok susu yang adaptif terhadap dinamika permintaan dan regulasi lingkungan modern.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dibangun oleh Lead Researchers (2023) dirumuskan sebagai *Mixed-Integer Linear Programming* (MILP) untuk bagian diskret (lokasi) dan *Non-Linear Programming* (NLP) untuk bagian kontinyu (aliran), sehingga membentuk MINLP yang diselesaikan melalui *Benders Decomposition*. Notasi himpunan, parameter, dan variabel keputusan didefinisikan sebagai berikut.

**Himpunan (Sets):**
- $I$ = himpunan peternakan (farms), $i \in I$
- $J$ = himpunan pabrik pengolahan (processing plants), $j \in J$
- $K$ = himpunan pusat distribusi (distribution centers), $k \in K$
- $L$ = himpunan retailer/area permintaan, $l \in L$

**Parameter:**
- $d_{il}$ = permintaan produk susu di area $l$ yang dipasok dari farm $i$ (liter/hari)
- $c_{ij}^{tr}$ = biaya transportasi refrigerated dari $i$ ke $j$ (Rp/liter/km)
- $f_j$ = biaya tetap pembukaan fasilitas $j$ (Rp)
- $\alpha$ = laju degradasi kesegaran per satuan waktu (1/jam)
- $\beta$ = faktor emisi CO₂ per liter-km
- $Cap_j$ = kapasitas pengolahan harian di $j$ (liter/hari)

**Variabel Keputusan:**
- $x_j \in \{0,1\}$ = 1 jika fasilitas $j$ dibuka
- $y_{ijk} \geq 0$ = aliran produk dari $i$ ke $j$ ke $k$
- $z_{kl} \geq 0$ = aliran dari $k$ ke $l$
- $t_{ij}$ = waktu tempuh dari $i$ ke $j$ (jam)

**Fungsi Objektif Multi-Kriteria:**

Objektif 1—Minimasi Total Biaya:

$$\min Z_1 = \sum_{j \in J} f_j x_j + \sum_{i \in I}\sum_{j \in J} c_{ij}^{tr} y_{ijk} + \sum_{j \in J} h_j \left(\frac{Cap_j}{2}\right) + \sum_{k \in K}\sum_{l \in L} c_{kl}^{ret} z_{kl}$$

Objektif 2—Minimasi Degradasi Kesegaran:

$$\min Z_2 = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K}\sum_{l \in L} \alpha \cdot t_{ij} \cdot y_{ijk}$$

Objektif 3—Minimasi Jejak Karbon:

$$\min Z_3 = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K}\sum_{l \in L} \beta \cdot dist_{ij} \cdot y_{ijk} + \sum_{k \in K}\sum_{l \in L} \beta \cdot dist_{kl} \cdot z_{kl}$$

**Kendala Utama:**

Kendala kapasitas fasilitas:

$$\sum_{i \in I} y_{ijk} \leq Cap_j \cdot x_j, \quad \forall j \in J$$

Kendala keseimbangan aliran (*flow conservation*):

$$\sum_{k \in K} z_{kl} = d_l, \quad \forall l \in L$$

Kendala kesegaran minimum:

$$\alpha \cdot t_{ij} \leq F_{max}, \quad \forall (i,j) \in A$$

Untuk membentuk *scalarized* problem, Lead Researchers (2023) menggunakan teknik **Tchebycheff weighted aggregation**:

$$\min_{x \in \Omega} \left\{ \max_{r=1,2,3} \left[ w_r \cdot \frac{Z_r(x) - Z_r^{ideal}}{Z_r^{nadir} - Z_r^{ideal}} \right] \right\}$$

dengan bobot $w_r \geq 0$ dan $\sum_r w_r = 1$. Pendekatan ini menghasilkan himpunan Pareto-optimal yang lebih merata dibanding *weighted-sum* konvensional.

**Formulasi Benders Decomposition:**

Master Problem (MP) hanya memuat variabel diskret $x_j$:

$$\min_{x} \sum_{j \in J} f_j x_j + \theta$$

$$\text{s.t.} \quad \theta \geq \sum_{j \in J} f_j x_j + \pi (b - Ax)$$

Subproblem (SP) untuk fixed $\bar{x}$:

$$\min_{y,z} \sum_{(i,j,k,l)} c_{ij}^{tr} y_{ijk} + \sum_{k,l} c_{kl}^{ret} z_{kl}$$

$$\text{s.t.} \quad By + Dz \leq b - A\bar{x}, \quad y, z \geq 0$$

Dual SP menghasilkan *cut* Benders ($\pi$) yang ditambahkan ke MP pada iterasi berikutnya hingga gap optimalitas $< \epsilon$ (Lead Researchers, 2023).

Zhang, Li, dan Ren (2024) memperluas model ini dengan kendala kualitas *recovered product*:

$$q_l^{rec} \geq q_{min}, \quad \forall l \in L$$

di mana $q_l^{rec}$ adalah indeks kualitas akhir hasil proses *recovery* yang dipengaruhi oleh kondisi penyimpanan selama reverse logistics.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *framework* ini mengikuti SOP enam-tahap berbasis metodologi **Design Science Research (DSR)** Hevner (2007) yang diadopsi Lead Researchers (2023):

**Tahap 1 — Pemodelan Data Historis & Segmentasi Permintaan.**
Data permintaan produk susu dikumpulkan selama 36 bulan dari 24 area distribusi. Segmentasi dilakukan menggunakan *K-means clustering* dengan jarak Euclidean terhadap fitur musiman, menghasilkan 4 segmen permintaan: *low-season regular*, *high-season regular*, *volatile premium*, dan *stable UHT*.

**Tahap 2 — Penentuan Set Efficient (Pareto Front Generation).**
Model MINLP diselesaikan melalui Benders Decomposition dalam lingkungan GAMS 36.1 / Cplex 22.1, dengan toleransi optimalitas $10^{-4}$. Iterasi Benders tipikal berkisar 12–35 iterasi untuk instance dengan $|I|=20, |J|=8, |K|=12, |L|=50$.

**Tahap 3 — Validasi & Sensitivity Analysis.**
Parameter $\alpha$ (laju degradasi) dan $\beta$ (faktor emisi) divariasikan $\pm 20\%$ untuk mengukur elastisitas solusi terhadap ketidakpastian. Analisis ini memenuhi standar ISO 31000:2018 untuk *risk management*.

**Tahap 4 — Implementasi Decision Support System (DSS).**
Output model diintegrasikan ke dalam *web-based DSS* menggunakan Python Flask + PostgreSQL, dengan modul visualisasi Pareto front menggunakan library Plotly. Antarmuka menampilkan slider bobot $w_1, w_2, w_3$ bagi manajer rantai pasok untuk memilih kompromi optimal secara interaktif.

**Tahap 5 — Pilot Implementation & Performance Monitoring.**
Pilot dijalankan selama 90 hari di salah satu region dengan target KPI: (a) penurunan *stockout* rate dari 8,3% menjadi $\leq 3,5\%$; (b) pengurangan biaya logistik 12–15%; (c) penurunan emisi CO₂ 8–11%.

**Tahap 6 — Continuous Improvement & Model Update.**
Setiap 6 bulan, model di-*re-calibrate* menggunakan teknik *rolling horizon* dengan window 12 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Input Parameter (Dimensi Kecil untuk Demonstrasi):**

Misalkan jaringan mini terdiri dari $|I|=3$ farm, $|J|=2$ processing plant, $|K|=2$ DC, $|L|=4$ retailer dengan parameter sebagai berikut.

| Parameter | Farm 1 | Farm 2 | Farm 3 |
|---|---|---|---|
| Kapasitas suplai (L/hari) | 800 | 600 | 400 |
| Lokasi (km dari Plant A) | 40 | 90 | 150 |

| Parameter | Plant A | Plant B |
|---|---|---|
| Biaya tetap buka | Rp 2,5 M | Rp 1,8 M |
| Kapasitas olah (L/hari) | 1.200 | 900 |

Permintaan retailer: $d_1=400, d_2=350, d_3=300, d_4=250$ liter/hari. Total demand = 1.300 L/hari.

Parameter biaya: $c^{tr}_{ij} = Rp\;50$/liter untuk segmen $< 100$ km; Rp 75/liter untuk $> 100$ km. Faktor degradasi $\alpha = 0{,}008$/jam. Faktor emisi $\beta = 0{,}0021$ kg CO₂/liter-km (Lead Researchers, 2023).

**Langkah 1 — Evaluasi Skenario Baseline (kedua plant dibuka):**
Total biaya tetap = Rp 2,5 M + Rp 1,8 M = Rp 4,3 M.
Alokasi: Plant A mengolah 800 L (dari Farm 1) untuk retailer 1 & 2; Plant B mengolah 500 L (dari Farm 2 & 3) untuk retailer 3 & 4.

$Z_1^{baseline} = 4.300.000 + (800 \times 50) + (500 \times 75) = 4.300.000 + 40.000 + 37.500 = $ **Rp 4.377.500**

**Langkah 2 — Evaluasi Skenario Optimasi (Tutup Plant B):**
$Z_1^{opt} = 2.500.000 + (1.300 \times 75) = 2.500.000 + 97.500 = $ **Rp 2.597.500**
*Penghematan biaya tetap: 41%*.

**Langkah 3 — Perhitungan Kesegaran:**
Waktu tempuh rata-rata: Farm 1 ke Plant A = 2 jam, Farm 2 ke Plant A = 4,5 jam, Farm 3 ke Plant A = 7 jam