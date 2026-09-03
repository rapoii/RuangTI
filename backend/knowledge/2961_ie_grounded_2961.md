# 2961 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) telah lama menjadi pilar strategis dalam perencanaan operasional manufaktur, terutama pada industri proses seperti kimia, farmasi, makanan-minuman, dan semikonduktor. Pada dasarnya, keputusan lot sizing bertujuan menentukan *kapan* dan *berapa banyak* suatu item harus diproduksi untuk memenuhi permintaan yang diketahui maupun stokastik, dengan tetap mempertimbangkan biaya *setup* (biaya tetap produksi), biaya *holding* (biaya simpan persediaan), serta biaya *backordering* (Lead Researchers, 2025; DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)). Tantangan fundamentalnya adalah *trade-off* klasik antara efisiensi biaya *setup* (yang menurunkan biaya variabel per unit jika lot besar) dan biaya persediaan (yang meningkat seiring membesarnya lot).

Dalam konteks industri modern, ketidakpastian permintaan (*demand uncertainty*) menjadi faktor yang semakin dominan. Forel dan Grunow (2023; DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyatakan bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan dalam praktik industri." Realitas ini menciptakan *research-practice gap* yang signifikan. Industri pada umumnya masih mengandalkan model deterministik yang dikombinasikan dengan kerangka *rolling-horizon planning* (RHP) dengan pembaruan ramalan (*forecast update*) yang频繁 sebagai mekanisme penyesuaian ketidakpastian secara heuristik.

Urgensi operasional semakin meningkat ketika dikaitkan dengan fenomena *bullwhip effect*, volatilitas rantai pasok pascapandemi, dan meningkatnya *mass customization* yang mempersempit interval permintaan stabil. Secara ekonomi, Lead Researchers (2025) menunjukkan bahwa penerapan model stokastik hibrida mampu menurunkan total biaya persediaan-setup gabungan hingga 8–15% dibandingkan pendekatan deterministik murni pada studi kasus industri kimia dengan 12 periode perencanaan. Sementara itu, Forel dan Grunow (2023) membuktikan melalui simulasi ekstensif pada data sintetis dan *real-world* bahwa model *forecast evolution* berbasis *Martingale Model of Forecast Evolution* (MMFE) secara konsisten mengurangi biaya aktual (*actual costs*) karena mampu mengantisipasi evolusi ramalan dalam horizon bergulir. Dengan demikian, integrasi pendekatan stokastik ke dalam kerangka RHP bukan sekadar latihan akademis, melainkan kebutuhan strategis untuk daya saing industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Wagner-Whitin)

Formulasi kanonik *capacitated lot sizing problem* (CLSP) untuk $T$ periode perencanaan dapat dinyatakan sebagai berikut (Lead Researchers, 2025):

$$\min \; Z = \sum_{t=1}^{T} \left( s_t y_t + p_t P_t + h_t I_t + b_t B_t \right) \tag{1}$$

dengan batasan (*constraints*):

$$I_{t-1} + P_t + B_t - I_t = d_t, \quad \forall t \in \{1,\ldots,T\} \tag{2}$$

$$P_t \leq M_t y_t, \quad \forall t \tag{3}$$

$$\sum_{t \in [k, k+L-1]} P_t \leq C_{k,k+L-1}, \quad \forall k, L \tag{4}$$

$$y_t \in \{0,1\}, \; P_t, I_t, B_t \geq 0, \quad \forall t \tag{5}$$

di mana $s_t$ adalah biaya *setup*, $p_t$ biaya produksi per unit, $h_t$ biaya simpan per unit per periode, $b_t$ biaya *backorder* per unit per periode, $y_t$ variabel biner keputusan *setup*, $P_t$ jumlah produksi, $I_t$ persediaan akhir, $B_t$ jumlah *backorder*, $d_t$ permintaan deterministik, $M_t$ kapasitas produksi maksimum pada periode $t$, dan $C_{k,k+L-1}$ kapasitas agregat dalam window $[k, k+L-1]$.

### 2.2 Formulasi Stokastik dengan Produksi Resors

Permintaan $d_t$ bersifat acak sehingga $d_t = d_t(\omega)$ dengan $\omega \in \Omega$. Forel dan Grunow (2023) mengajukan *two-stage stochastic program* dengan recourse:

$$\min \; \mathbb{E}_{\omega} \left[ \sum_{t=1}^{T} \left( s_t y_t + p_t P_t(\omega) + h_t I_t^+(\omega) + b_t I_t^-(\omega) \right) \right] \tag{6}$$

$$I_{t}(\omega) = I_{t-1}(\omega) + P_t(\omega) - d_t(\omega) \tag{7}$$

di mana $I_t^+$ adalah persediaan positif dan $I_t^-$ adalah *backorder*. Keputusan lot sizing tingkat pertama (*first-stage*) diambil sebelum realisasi permintaan, sedangkan recourse $P_t(\omega)$ merepresentasikan fleksibilitas replanning di tingkat kedua. Struktur ini menangkap kemampuan adaptasi yang melekat pada RHP.

### 2.3 Model Evolusi Ramalan (MMFE)

Forel dan Grunow (2023) menggunakan *Martingale Model of Forecast Evolution*:

$$D_t = D_{t-1} + \epsilon_t \tag{8}$$

dengan $\mathbb{E}[\epsilon_t | \mathcal{F}_{t-1}] = 0$, sehingga:

$$\mathbb{E}[D_t | D_{t-1}] = D_{t-1} \tag{9}$$

di mana $D_t$ adalah ramalan permintaan pada akhir periode $t$ dan $\epsilon_t$ adalah *innovation* (shock informasi). Varian *forecast error* dapat dimodelkan sebagai:

$$\text{Var}(\epsilon_t) = \sigma^2 \cdot D_{t-1}^{\alpha} \tag{10}$$

dengan $\alpha \in [1,2]$ mengikuti *square-root law* industri.

### 2.4 Model Hibrida Lead Researchers (2025)

Penelitian Lead Researchers (2025; DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan model hibrida yang menggabungkan pemrograman stokastik dua-tahap dengan *adaptive large neighborhood search* (ALNS) untuk aspek penjadwalan:

$$\min_{y, P} \; \mathbb{E}\left[\sum_{t=1}^{T} c_t(y_t, P_t) + Q(P, \omega)\right] + \lambda \cdot \text{Penalty}_{\text{seq}} \tag{11}$$

di mana $Q(P, \omega)$ adalah fungsi recourse dan $\text{Penalty}_{\text{seq}}$ adalah penalti pelanggaran *sequence-dependent setup time* antar produk pada mesin yang sama.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP untuk modul 2961 mengikuti kerangka berlapis berikut (Lead Researchers, 2025; Forel & Grunow, 2023):

**Langkah 1 — Akuisisi & Pembersihan Data.**
Kumpulkan data historis permintaan minimal 24 periode, identifikasi musim (*seasonality*) menggunakan dekomposisi STL, dan bersihkan outlier dengan *interquartile range* (IQR) test.

**Langkah 2 — Estimasi Model Evolusi Ramalan.**
Pasangkan parameter $(\mu, \sigma^2, \alpha)$ dari persamaan (10) menggunakan *maximum likelihood estimation* (MLE) pada residual ramalan:

$$\hat{\theta} = \arg\max_{\theta} \sum_{t=1}^{N} \log f(\epsilon_t; \theta) \tag{12}$$

**Langkah 3 — Generasi Skenario Stokastik.**
Menggunakan *moment matching* atau *scenario reduction* (misal *forward selection* алгоритм Heitsch-Köhler-Romisch), generate 50–200 skenario permintaan yang merepresentasikan pohon skenario $\xi = \{\omega_1, \ldots, \omega_S\}$ dengan probabilitas $\pi_s$.

**Langkah 4 — Optimasi Lot Sizing Stokastik.**
Selesaikan formulasi (6)–(7) menggunakan *benders decomposition* atau *progressive hedging algorithm* (PH) untuk masalah berskala besar.

**Langkah 5 — Penjadwalan dengan ALNS.**
Untuk aspek *sequence-dependent*, jalankan ALNS dengan operator *destroy* (random removal, worst removal, Shaw removal) dan *repair* (greedy insertion, regret insertion) sebanyak 50.000 iterasi.

**Langkah 6 — Replanning Rolling-Horizon.**
Pada setiap *frozen period* (lead time), ulang Langkah 3–5 dengan informasi aktualis permintaan dan ramalan terbaru, sehingga lot sizing bersifat adaptif.

**Diagram Alir Logika:**

$$\text{Data Historis} \rightarrow \text{MLE MMFE} \rightarrow \text{Scenario Tree} \rightarrow \text{Benders/PH} \rightarrow \text{ALNS} \rightarrow \text{Rolling Replan}$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Pabrik kimia khusus (*specialty chemicals*) dengan 6 periode perencanaan, 2 produk (P1, P2) pada satu lini produksi bersama (*shared facility*).

**Parameter Input:**

| Parameter | P1 | P2 |
|-----------|----|----|
| $s_t$ (setup cost) | 400 | 350 |
| $p_t$ (unit cost) | 12 | 10 |
| $h_t$ (holding) | 3 | 2.5 |
| $d_t$ (mean demand) | [80, 95, 110, 90, 105, 100] | [60, 70, 80, 75, 85, 70] |
| $\sigma_{\epsilon}$ | 8% | 10% |

**Langkah 1: Perhitungan Deterministik (Baseline).**
Untuk P1, gunakan *Silver-Meal heuristic*:
- $SM_1 = 400 / 1 = 400$ per periode
- $SM_2 = (400 + 3 \cdot 95) / 2 = 492.5$ per periode
- $SM_3 = (400 + 3(95+110)) / 3 = 546.67$
- $SM_4$ mulai menurun: $(400 + 3(95+110+90))/4 = 551.25$

Karena $SM_3 < SM_4$, maka **lot P1 optimal = produksi 3 periode sekaligus pada t=1** dengan kuantitas $Q_1^{P1} = 80 + 95 + 110 = 285$ unit, inventori akhir $I_3 =