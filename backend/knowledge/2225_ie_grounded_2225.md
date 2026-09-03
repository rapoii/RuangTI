# 2225 — Optimasi Stokastik Hibrida untuk Masalah Lot Sizing dan Penjadwalan Produksi dalam Lingkungan Permintaan Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan lot sizing dan penjadwalan produksi merupakan salah satu keputusan taktis paling kritikal dalam sistem manufaktur modern. Dalam praktik industri nyata, keputusan ini harus diambil di tengah ketidakpastian permintaan yang semakin tinggi akibat fragmentasi rantai pasok, volatilitas permintaan konsumen, dan pergeseran preferensi pasar yang makin cepat. Menurut Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)), permasalahan lot sizing—yang secara klasik diselesaikan dengan model deterministik Wagner-Whitin atau Silver-Meal—menjadi suboptimal secara signifikan ketika variabilitas permintaan tidak dimodelkan secara eksplisit. Studi tersebut mengusulkan model optimasi stokastik hibrida yang memadukan keputusan kuantitas pesanan (*lot size*) dengan keputusan waktu eksekusi (*scheduling*) pada lantai produksi.

Kesenjangan antara riset akademik dan praktik industri menjadi perhatian sentral. Forel & Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan bahwa perusahaan manufaktur hampir secara universal mengimplementasikan model deterministik, namun mengkompensasinya melalui *rolling-horizon planning* dengan pembaruan prakira yang sering. Pola ini menimbulkan paradoks: keputusan lot sizing secara nominal deterministik, tetapi dieksekusi dalam ekosistem yang sepenuhnya dinamis dan stokastik. Konsekuensinya, biaya total sistem manufaktur rata-rata 8–15% lebih tinggi dibanding optimum stokastik sejati menurut simulasi pada data industri nyata.

Urgensi ekonomis makin relevan pada era *mass customization* dan *Industry 4.0*, di mana lead time produksi makin pendek dan variasi SKU makin banyak. Ketika permintaan berubah cepat, keputusan lot sizing yang kaku akan menghasilkan dua skenario ekstrem: *overstock* (biaya-carry tinggi) atau *stockout* (kehilangan penjualan). Dengan memadukan model stokastik—seperti *Martingale Model of Forecast Evolution* (MMFE)—dengan *rolling-horizon planning* dan komponen penjadwalan berbasis sumber daya, diperoleh kerangka keputusan yang *robust* dan adaptif. Inilah sumbangan metodologis utama yang dibahas dalam kedua literatur di atas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Lot Sizing Deterministik (Baseline)

Model dasar Wagner-Whitin untuk $T$ periode didefinisikan sebagai:

$$
\min \; Z = \sum_{t=1}^{T} \left[ s_t \cdot y_t + h_t \cdot I_t + p_t \cdot Q_t \right]
$$

dengan batasan:

$$
I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1,\ldots,T\}
$$

$$
Q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad Q_t, I_t \geq 0
$$

di mana $s_t$ = biaya setup, $h_t$ = biaya simpan per unit, $p_t$ = biaya produksi per unit, $Q_t$ = kuantitas produksi, $I_t$ = inventori akhir periode, $d_t$ = permintaan deterministik, $y_t$ = variabel biner setup, dan $M$ = big-M.

### 2.2 Ekstensi Stokastik dengan Demand Recourse

Ketika permintaan $D_t$ bersifat acak dengan distribusi $F_{D_t}(\cdot)$, keputusan produksi harus mencakup recourse variable $\Delta_t^+$ (produksi tambahan) dan $\Delta_t^-$ (backorder/shortage):

$$
\min \; \mathbb{E}\left[ \sum_{t=1}^{T} s_t y_t + p_t (Q_t + \Delta_t^+(\omega)) + b_t \Delta_t^-(\omega) + h_t I_t^+(\omega) \right]
$$

dengan batasan recourse:

$$
I_t(\omega) = I_{t-1}(\omega) + Q_t + \Delta_t^+(\omega) - D_t(\omega)
$$

$$
\Delta_t^+(\omega), \Delta_t^-(\omega) \geq 0, \quad \Delta_t^+(\omega) \cdot \Delta_t^-(\omega) = 0
$$

di mana $b_t$ adalah biaya *backorder* per unit.

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Inovasi utama Forel & Grunow (2023) adalah penggunaan MMFE yang memungkinkan prakira permintaan *berevolusi* sepanjang horizon perencanaan:

$$
D_{t+h|t} = D_{t+h|t-1} + \varepsilon_{t+h|t}
$$

dengan $\varepsilon_{t+h|t}$ adalah *martingale difference sequence*:

$$
\mathbb{E}[\varepsilon_{t+h|t} \mid \mathcal{F}_t] = 0
$$

dan variannya mengikuti *exponential smoothing* struktur:

$$
\text{Var}(\varepsilon_{t+h|t}) = \sigma^2 \cdot \left(1 - \phi^{h}\right) / \left(1 - \phi\right)
$$

di mana $\phi \in (0,1)$ adalah parameter persistensi prakira dan $\sigma^2$ varians dasar inovasi. Parameter ini diestimasi dari data historis melalui metode maximum likelihood.

### 2.4 Formulasi Hibrida Lot Sizing + Scheduling

Lead Researchers (2025) mengusulkan model hibrida yang menggabungkan keputusan lot sizing dengan constraint penjadwalan pada $K$ mesin paralel:

$$
\min_{y, Q, z} \; \mathbb{E}\left[ \sum_{t=1}^{T} \sum_{j=1}^{J} s_{jt} y_{jt} + \sum_{t=1}^{T} \sum_{i=1}^{I} \left( h_i I_{it} + p_i Q_{it} + b_i B_{it} \right) \right]
$$

subject to:

$$
\sum_{i \in \mathcal{P}_j} z_{ijt} \leq C_{jt}, \quad \forall j, t
$$

$$
z_{ijt} \geq \alpha_i Q_{it} - M(1 - y_{jt}), \quad z_{ijt} \leq \alpha_i Q_{it}
$$

$$
I_{it} = I_{i,t-1} + Q_{it} - D_{it}, \quad I_{i0} = I_{iT}
$$

$$
y_{jt} \in \{0,1\}, \quad z_{ijt}, Q_{it}, I_{it} \geq 0
$$

di mana $z_{ijt}$ adalah waktu alokasi mesin $j$ untuk produk $i$ pada periode $t$, $\alpha_i$ adalah waktu proses per unit produk $i$, dan $C_{jt}$ adalah kapasitas tersedia mesin $j$.

### 2.5 Mekanisme Rolling Horizon

Implementasi dilakukan dengan horizon bergulir $H$ dengan periode keputusan $\tau$:

$$
\Pi_{\tau} = \arg\min_{y,Q,z} \; \mathbb{E}\left[ \sum_{t=\tau}^{\tau+H-1} \text{Cost}_t \mid \mathcal{F}_\tau \right]
$$

Hanya keputusan $y_{\tau}, Q_{\tau}, z_{\cdot,\tau}$ yang dieksekusi, sedangkan horizon bergeser ke $\tau+1$ dengan prakira yang diperbarui.

## 3. Metodologi Rekayasa & SOP Implementasi

Penerapan model hibrida ini di lingkungan produksi mengikuti Prosedur Operasional Standar (SOP) lima tahap berikut:

**Tahap 1 — Akuisisi dan Pembersihan Data.** Kumpulkan data historis permintaan minimal 24 periode, biaya setup $s_t$, biaya inventori $h_t$, biaya produksi $p_t$, kapasitas mesin, dan waktu proses per SKU. Validasi konsistensi menggunakan *control chart* dan eliminasi pencilan dengan aturan 3-sigma.

**Tahap 2 — Estimasi Parameter Stokastik.** Fitting MMFE dengan estimasi parameter $(\phi, \sigma^2, \mu)$ melalui *rolling-window maximum likelihood*. Uji stasioneritas dengan Augmented Dickey-Fuller test pada residual $\varepsilon_t$.

**Tahap 3 — Generasi Skenario.** Bangkitkan $N = 1{,}000$ skenario permintaan menggunakan simulasi Monte Carlo dari MMFE yang telah diestimasi. Aplikasikan *scenario reduction* (misalnya algoritma Kantorovich) untuk mereduksi menjadi $N' = 50$ skenario representatif.

**Tahap 4 — Optimasi Hibrida.** Selesaikan model MILP stokastik menggunakan solver komersial (Gurobi, CPLEX) atau *decomposition method* (Benders/L-shaped). Toleransi gap optimalitas ditetapkan $\leq 1\%$.

**Tahap 5 — Eksekusi Rolling Horizon dan Monitoring.** Terapkan keputusan lot-sizing hanya pada periode $\tau$, dengan monitoring KPI berikut: tingkat servis ($\geq 95\%$), rasio inventori terhadap penjualan, dan varians biaya aktual terhadap prakira.

Diagram alur logikanya: `[Data Historis] → [Estimasi MMFE] → [Simulasi Skenario] → [Optimasi MILP Stokastik] → [Keputusan Eksekusi] → [Monitoring KPI] → [Update Prakira] → (loop ke Tahap 1)`.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Parameter Industri

Pertimbangkan perusahaan manufaktur komponen 3 dengan horizon perencanaan $T = 5$ periode. Parameter tercantum pada Tabel 1.

**Tabel 1. Parameter Input**

| Parameter | Nilai |
|-----------|-------|
| Permintaan rata-rata $\mu_t$ | [50, 60, 55, 70, 65] unit |
| Biaya setup $s_t$ | \$200 per order |
| Biaya simpan $h_t$ | \$2/unit/period |
| Biaya produksi $p_t$ | \$10/unit |
| Biaya backorder $b_t$ | \$15/unit |
| Kapasitas produksi $C_t$ | 80 unit/period |
| Parameter MMFE $\phi$ | 0,70 |
| Standar deviasi dasar $\sigma$ | 5 unit |

### 4.2 Perhitungan Stokastik dengan MMFE

Ambil prakira awal $D_{t|t} = \mu_t$. Update MMFE setelah pengamatan $t$:

**Langkah 1.** Hitung varians prakira h-step ahead:
$$\text{Var}(D_{t+h|t}) = \sigma^2 \cdot \frac{1 - \phi^{h+1}}{1 - \phi}, \quad \phi = 0{,}70$$

Untuk $h = 0$: $\text{Var}(D_{t|t}) = 25 \cdot (1 - 0{,}70) / 0{,}30 = 25 \cdot 1{,}0 = 25 \rightarrow \sigma = 5$.
Untuk $h = 1$: $\text{Var}(D_{t+1|t}) = 25 \