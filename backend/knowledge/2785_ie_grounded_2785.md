# 2785 — Optimasi Stokastik Hybrid untuk Masalah Lot Sizing dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan lot sizing dan penjadwalan produksi (Lot Sizing and Scheduling Problem, LSSP) merupakan salah satu keputusan taktis-operasional paling krusial dalam sistem manufaktur modern. Dalam praktik industri nyata, manajer produksi menghadapi dilema struktural: di satu sisi, permintaan pelanggan bersifat stokastik dengan variabilitas yang sulit diprediksi; di sisi lain, kapasitas sumber daya (mesin, tenaga kerja, material) bersifat terbatas dan kaku. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menegaskan bahwa pelibatan ketidakpastian secara eksplisit melalui model optimasi stokastik hibrida mampu menjembatani kesenjangan antara formulasi deterministik klasik (seperti Wagner-Whitin atau Economic Lot Scheduling Problem) dan kebutuhan operasional aktual. Studi tersebut mengusulkan arsitektur hybrid yang menggabungkan program stokastik dua-tahap (two-stage stochastic programming) dengan modul penjadwalan sekuensial berbasis aturan prioritas (dispatching rules) untuk menangani dimensi kompleksitas NP-hard dari masalah.

Konteks urgensi industrial dapat dilihat dari tiga perspektif. Pertama, *economic urgency*: studi Forel dan Grunow (2023) di *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan bahwa pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing "jarang digunakan dalam praktik" (*are seldom used in practice*). Industri umumnya tetap menggunakan model deterministik dengan cushion berupa *safety stock* dan *rolling-horizon replanning*. Kedua, *technological urgency*: adopsi Industri 4.0, sistem ERP-MES terintegrasi, dan komputasi awan memungkinkan pemrosesan skenario stokastik ribuan instance secara paralel, sehingga hambatan komputasional historis bukan lagi kendala utama. Ketiga, *operational urgency*: fluktuasi permintaan pasca-pandemi, *supply chain disruption*, dan *short product life cycle* pada industri FMCG, semikonduktor, dan farmasi menuntut keputusan lot sizing yang tidak hanya optimal secara ekspektasi tetapi juga *robust* terhadap tail-risk.

Forel dan Grunow (2023) lebih lanjut membuktikan secara empiris melalui simulasi ekstensif pada data sintetis dan dunia-nyata bahwa model *Martingale Model of Forecast Evolution* (MMFE) yang digabung dengan *rolling-horizon planning* menghasilkan reduksi biaya aktual yang signifikan dibanding kebijakan *frozen plan* deterministik. Paradoks akademis-praktik ini — yaitu kesenjangan antara riset mutakhir dan adopsi industri — menjadi justifikasi utama pengembangan model hybrid yang mampu menyajikan trade-off kompromi antara kualitas solusi (optimality gap) dan kelayakan implementasi (tractability). Dengan demikian, modul 2785 ini bertujuan membedah arsitektur matematis, prosedur operasional, dan aplikasi kuantitatif dari model hybrid tersebut untuk menjawab kebutuhan profesional Teknik Industri masa kini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Dasar

Misalkan indeks periode $t \in \mathcal{T} = \{1, 2, \dots, T\}$ merepresentasikan horizon diskrit (misal hari atau minggu), indeks produk $i \in \mathcal{I} = \{1, \dots, N\}$, indeks mesin $m \in \mathcal{M} = \{1, \dots, M\}$, dan skenario permintaan $\omega \in \Omega$ dengan probabilitas $p(\omega)$ sedemikian sehingga $\sum_{\omega \in \Omega} p(\omega) = 1$.

Parameter-parameternya:
- $d_{i,t}(\omega)$: permintaan acak produk $i$ pada periode $t$ di skenario $\omega$
- $c_{i,m,t}$: biaya produksi variabel per unit produk $i$ di mesin $m$ periode $t$
- $s_{i,t}$: biaya setup produk $i$ pada periode $t$
- $h_{i,t}$: biaya inventory holding per unit per periode
- $C_{m,t}$: kapasitas waktu mesin $m$ pada periode $t$ (jam atau menit)
- $p_{i,m}$: waktu proses (processing time) produk $i$ di mesin $m$
- $I_{i,0}$: inventory awal produk $i$
- $B_{i,t}$: backlog/backorder cost per unit

### 2.2 Formulasi Deterministik (Base Model)

Model dasar mengikuti struktur Capacitated Lot Sizing and Scheduling Problem (CLSP) yang diperluas Lead Researchers (2025):

$$\min \sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \left[ s_{i,t} \, y_{i,t} + \sum_{m \in \mathcal{M}} c_{i,m,t} \, x_{i,m,t} + h_{i,t} \, I_{i,t}^{+} + B_{i,t} \, I_{i,t}^{-} \right]$$

dengan variabel keputusan:
- $x_{i,m,t} \geq 0$: kuantitas produksi produk $i$ di mesin $m$ periode $t$
- $y_{i,t} \in \{0,1\}$: 1 jika setup produk $i$ dilakukan pada periode $t$
- $I_{i,t}^{+} \geq 0$: inventory positif produk $i$ di akhir periode $t$
- $I_{i,t}^{-} \geq 0$: backorder produk $i$ di akhir periode $t$

Konstrain-konstrainnya:

**(a) Keseimbangan aliran material:**
$$I_{i,t}^{+} - I_{i,t}^{-} = I_{i,t-1}^{+} - I_{i,t-1}^{-} + \sum_{m \in \mathcal{M}} x_{i,m,t} - d_{i,t} \quad \forall i, t$$

**(b) Kapasitas mesin:**
$$\sum_{i \in \mathcal{I}} p_{i,m} \, x_{i,m,t} \leq C_{m,t} \quad \forall m, t$$

**(c) Linking setup-produksi:**
$$x_{i,m,t} \leq \left(\sum_{k \leq t} y_{i,k}\right) \cdot Q_{i}^{\max} \quad \forall i, m, t$$

atau menggunakan formulasi Big-M klasik $x_{i,m,t} \leq M \cdot y_{i,t}$, di mana $M$ merupakan upper bound produksi.

### 2.3 Formulasi Stokastik Dua-Tahap (Two-Stage Stochastic LSSP)

Lead Researchers (2025) memperluas model di atas menjadi program stokastik dua-tahap dengan recourse. Tahap pertama (*here-and-now*) memutuskan lot sizing sebelum realisasi permintaan; tahap kedua (*wait-and-see*) memutuskan penyesuaian recourse setelah skenario permintaan $\omega$ terungkap:

$$\min \; \mathbb{E}_{\omega} \left[ \sum_{t} \sum_{i} s_{i,t} y_{i,t} + \sum_{t} \sum_{i} \sum_{m} c_{i,m,t} x_{i,m,t}(\omega) + \sum_{t} \sum_{i} h_{i,t}^{+} I_{i,t}^{+}(\omega) + B_{i,t}^{-} I_{i,t}^{-}(\omega) \right]$$

Subjek terhadap konstrain (a)-(c) yang direalisasikan pada setiap skenario $\omega$. Untuk memastikan *non-anticipativity*, keputusan tingkat pertama harus identik untuk semua skenario pada periode yang sama: $y_{i,t}(\omega) = y_{i,t}$ dan $x_{i,m,t}^{\text{first}}(\omega) = x_{i,m,t}^{\text{first}}$ untuk semua $\omega$.

### 2.4 Integrasi dengan MMFE Rolling-Horizon

Forel dan Grunow (2023) memperkenalkan komponen *forecast evolution* dengan memodelkan permintaan sebagai proses martingale bersyarat terhadap informasi historis $\mathcal{F}_{t-1}$:

$$d_{i,t}(\omega) = \hat{d}_{i,t|\tau} + \varepsilon_{i,t}(\omega)$$

di mana $\hat{d}_{i,t|\tau}$ adalah forecast pada periode pembuatan keputusan $\tau$ untuk horizon $t$, dan $\varepsilon_{i,t}$ adalah *forecast error* yang mengikuti distribusi tertentu (umumnya normal atau log-normal). Update forecast pada periode $\tau$ mengekspektasi bahwa informasi baru akan mengoreksi nilai ekspektasi permintaan, sehingga perencanaan ulang dapat dilakukan secara sistematis melalui rolling-horizon dengan window $H$.

### 2.5 Arsitektur Hybrid

Model hybrid yang diusulkan Lead Researchers (2025) menggabungkan tiga komponen: (i) solver MILP stokastik untuk lot sizing (level taktis), (ii) algoritma heuristik/CP-SAT untuk penjadwalan sekuensial (level operasional), dan (iii) modul validasi simulasi discrete-event untuk verifikasi kinerja *realized cost*. Formulasi akhir:

$$\min_{y,x^{\text{first}}} \; \sum_{\omega \in \Omega} p(\omega) \left[ Q(y, x^{\text{first}}, \omega) + R(\omega) \right]$$

di mana $R(\omega)$ adalah recourse function yang dihasilkan dari sub-problem penjadwalan sekuensial pada skenario $\omega$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid LSSP di lingkungan industri mengikuti SOP 7-tahap berikut, yang menyelaraskan temuan Lead Researchers (2025) dengan praktik terbaik *rolling-horizon planning* versi Forel-Grunow:

**Tahap 1 — Akuisisi Data & Karakterisasi Permintaan.** Kumpulkan histori permintaan minimal 24-36 periode. Estimasi parameter distribusi (mean $\mu_t$, standar deviasi $\sigma_t$, autokorelasi $\rho_k$). Lakukan uji stasioneritas (Augmented Dickey-Fuller) dan identifikasi pola musiman (STL decomposition). Output: distribusi probabilitas permintaan per periode $f_{d_{i,t}}(d)$.

**Tahap 2 — Generasi Skenario.** Gunakan Monte Carlo Simulation atau Latin Hypercube Sampling untuk membangkitkan $N_s = 500-2000$ skenario permintaan. Terapkan *scenario reduction* (algoritma K-means atau fast-forward selection) untuk menurunkan menjadi $N_s' = 50-100$ skenario representatif dengan tetap menjaga momen statistik orde pertama dan kedua.

**Tahap 3 — Formulasi & Solusi Master Problem.** Bangun MILP stokastik dua-tahap menggunakan Gurobi, CPLEX, atau HiGHS. Untuk ukuran besar ($|\Omega| \times |\mathcal{I}| \times |\mathcal{T}| > 10^6$), terapkan dekomposisi Benders atau Progressive Hedging Algorithm (PH) untuk mendapatkan lower bound dan upper bound secara paralel.

**Tahap 4 — Ekstraksi Rencana Operasional.** Dari solusi master, ekstrak *frozen plan* untuk horizon pendek (1-3 periode ke depan) dan *flexible plan* untuk horizon menengah. Keputusan setup yang sudah dikunci menjadi input bagi modul penjadwalan sekuensial.

**Tahap 5 — Penjadwalan Sekuensial (Dispatching).** Alokasikan operasi ke mesin menggunakan *priority dispatching rules* (misalnya Shortest Processing Time, Earliest Due Date, atau kombinasi *composite rules* dengan bobot $\alpha$ SPT + $\beta$ EDD). Validasi feasibility kapasitas.

**Tahap 6 — Simulasi Validasi.** Jalankan discrete-event simulation terhadap rencana lot sizing menggunakan skenario permintaan out-of-sample. Hitung *realized cost* (inventaris aktual, backorder aktual, overtime aktual) sebagai ground-truth untuk validasi.

**Tahap 7 — Replanning (Rolling Horizon).** Setiap $\Delta = 1$ periode, lakukan update forecast menggunakan informasi terbaru (MMFE Forel-Grunow), lalu ulangi Tahap 3-6. SOP ini memenuhi kerangka kerja S&OP (Sales & Operations Planning) APICS dan integrasi modul MRP II klasik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Pertimbangkan pabrik pengemasan minuman ringan dengan data berikut:
- 3 produk: $i \in \{A, B, C\}$ (misal: A=cola 330ml, B=lemon 500ml, C=orange 1L)
- Horizon: $T = 6$ minggu
- 2 lini produksi: $m \in \{1, 2\}$ (line 1: A,B,C; line 2: B,C)
- Setup cost: $s_{i,t} = \$200$ untuk semua produk
- Biaya produksi: $c_{A,1} = 1.2$, $c_{B,1} = 1.5$, $c_{C,1} = 1.8$ (\$/unit)
- Holding cost: $