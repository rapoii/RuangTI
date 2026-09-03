# 1793 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (lot sizing) dan penjadwalan produksi (scheduling) merupakan dua keputusan operasional yang saling terkait erat dalam rantai pasok manufaktur modern. Dalam praktik industri, keputusan lot sizing menentukan *kapan* dan *berapa banyak* pesanan produksi dilakukan untuk memenuhi permintaan yang bersifat stokastik, sementara penjadwalan menentukan *urutan* dan *alokasi* kapasitas pada sumber daya terbatas (mesin, shift, operator). Keputusan lot sizing yang optimal tanpa mempertimbangkan *sequencing* seringkali menghasilkan perencanaan yang tidak *feasible* di lantai produksi, dan sebaliknya. Ketidakpastian permintaan, yang diperparah oleh volatilitas pasar, *bullwhip effect*, dan perubahan tren konsumen musiman, menambah kompleksitas keputusan manajerial secara eksponensial.

Kesenjangan antara riset akademis dan praktik industri menjadi fokus utama dalam literatur terbaru. Forel dan Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyatakan bahwa pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing "jarang digunakan dalam praktik". Industri secara umum masih mengandalkan model deterministik dengan kompensasi berupa perencanaan *rolling-horizon* dan pembaruan *forecast* secara berkala. Fenomena ini menunjukkan urgensi pengembangan model yang secara eksplisit mengintegrasikan evolusi permintaan ke dalam formulasi optimasi stokastik, sembari mempertahankan keselarasan dengan prosedur operasional industri (*rolling-horizon planning*).

Lead Researchers (2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) merespons kesenjangan ini dengan mengusulkan **Model Optimasi Stokastik Hibrida** yang secara simultan menyelesaikan keputusan lot sizing dan penjawalan (integrated lot sizing and scheduling problem, ILSSP) di bawah ketidakpastian permintaan. Pendekatan hibrida tersebut menggabungkan kekuatan *stochastic programming* (untuk menangani ketidakpastian endogen) dan *robust optimization* (untuk menghadapi *worst-case scenarios* pada parameter biaya), menghasilkan solusi yang tidak hanya optimal secara ekspektasi tetapi juga layak secara operasional di lantai produksi. Modul ini menjadi relevan bagi praktisi perencanaan produksi pada industri *batch manufacturing* seperti makanan-minuman, farmasi, kimia khusus, dan *consumer electronics*, di mana permintaan sangat fluktuatif namun kapasitas mesin bersifat *rigid* (dedicated) per produk.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Evolusi Forecast (Martingale Model of Forecast Evolution – MMFE)

Forel dan Grunow (2023) mengadopsi MMFE untuk menangkap bagaimana *forecast* permintaan berubah seiring waktu. Formulasi dasarnya adalah:

$$\tilde{D}_{t+1} = \tilde{D}_t + \tilde{\varepsilon}_{t+1}, \quad t = 1, 2, \dots, T-1$$

dengan $\tilde{D}_t$ adalah permintaan aktual pada periode $t$, dan $\tilde{\varepsilon}_{t+1}$ merupakan *martingale difference sequence* dengan $\mathbb{E}[\tilde{\varepsilon}_{t+1} | \mathcal{F}_t] = 0$. *Forecast update* mengikuti aturan:

$$\hat{D}_{t+1|t+1} = \hat{D}_{t+1|t} + \tilde{\varepsilon}_{t+1}$$

Variansi permintaan masa depan meningkat seiring horizon:

$$\text{Var}(\tilde{D}_{t+h} | \mathcal{F}_t) = h \cdot \sigma^2_{\varepsilon}$$

yang merepresentasikan akumulasi ketidakpastian hingga periode ke-$h$.

### 2.2 Formulasi Dasar Stochastic Lot Sizing dengan Production Recourse

Model *single-item capacitated lot sizing problem* (CLSP) dengan recourse didefinisikan sebagai berikut. Indeks $t \in \{1, \dots, T\}$ merepresentasikan periode diskrit. Parameter: $c_t$ (biaya produksi variabel per unit), $s_t$ (biaya *setup*), $h_t$ (biaya *holding*), $p_t$ (biaya *backorder*), $K_t$ (kapasitas mesin). Variabel keputusan: $x_t$ (kuantitas produksi), $y_t \in \{0,1\}$ (indikator setup), $I_t$ (inventori akhir), $B_t$ (backorder). Formulasi minimisasi biaya ekspektasi:

$$\min \; \mathbb{E}\!\left[\sum_{t=1}^{T}\left(c_t x_t + s_t y_t + h_t I_t^{+} + p_t I_t^{-}\right)\right]$$

Kendala keseimbangan inventori:

$$I_{t-1} + x_t = \tilde{D}_t + I_t, \quad \forall t$$

dengan $I_t = I_t^{+} - I_t^{-}$. Kapasitas:

$$x_t \leq K_t y_t, \quad \forall t$$

Non-negativitas: $x_t, I_t^{+}, I_t^{-} \geq 0$. Recourse terjadi pada periode $t$ ketika *forecast* diperbarui: variabel recourse $\rho_t$ merepresentasikan penyesuaian produksi yang merespons *forecast update* baru.

### 2.3 Model Hibrida: Integrasi Lot Sizing dan Scheduling

Lead Researchers (2025) memperluas model di atas menjadi ILSSP dengan menambahkan kendala *sequencing*. Misalkan terdapat himpunan produk $J = \{1, \dots, J\}$ yang harus diproduksi pada $M$ mesin identik dalam satu *planning horizon*. Formulasi mixed-integer programming stokastik hibrida:

$$\min_{x, y, z, \sigma} \; \mathbb{E}\left[\sum_{j \in J}\sum_{t=1}^{T}\left(c_{jt}x_{jt} + s_{jt}y_{jt} + h_{jt}I_{jt} + p_{jt}B_{jt} + r_{jt}\rho_{jt}\right)\right]$$

Subjek terhadap:

$$I_{j,t-1} + x_{jt} - B_{jt} = \tilde{D}_{jt} + I_{jt}, \quad \forall j, t$$

$$\sum_{j \in J} a_{jt} x_{jt} \leq K_t, \quad \forall t$$

$$\sum_{j \in J} y_{jt} \leq 1, \quad \forall t \quad \text{(sequence-dependent setup)}$$

$$\sigma_{jt} \leq \sigma_{j',t} + (1-z_{jj't}) \cdot M_{\text{big}}, \quad \forall j \neq j', t$$

$$\rho_{jt} \geq x_{jt} - \hat{x}_{jt|t-1}, \quad \rho_{jt} \geq \hat{x}_{jt|t-1} - x_{jt}$$

Variabel biner $z_{jj't}$ menunjukkan urutan relatif antara produk $j$ dan $j'$, dan $\sigma_{jt}$ adalah *position index* dalam *sequence*. Komponen *robust* muncul melalui *budget of uncertainty* $\Gamma$:

$$\tilde{D}_{jt} = \hat{D}_{jt} + \Gamma_{jt} \hat{d}_{jt}, \quad \sum_{t} |\Gamma_{jt}| \leq \Psi$$

yang membatasi deviasi total permintaan dari *forecast* nominal sebesar parameter $\Psi$ (analog dengan *Soyster's robust counterpart*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model di atas di industri mengikuti SOP enam tahapan (*rolling-horizon planning framework*):

```
[Tahap 1] Inisialisasi Data Historis & Forecast
        │
        ▼
[Tahap 2] Estimasi Parameter MMFE (variance ε_t)
        │
        ▼
[Tahap 3] Generate Skenario Permintaan (Monte Carlo / SAA)
        │
        ▼
[Tahap 4] Solve Hybrid Stochastic MIP (CPLEX/Gurobi)
        │      └─► Output: Production plan & Sequence
        ▼
[Tahap 5] Lock horizon 1-2, Floating horizon 3-T
        │
        ▼
[Tahap 6] Execute period 1 → Update forecast → Repeat
```

**Tahap 1-2** mencakup pengumpulan data permintaan historis minimal 24 periode, identifikasi *trend* dan *seasonality*, lalu estimasi $\sigma_\varepsilon$ dengan metode ARIMA-residual atau exponential smoothing decomposition. **Tahap 3** menggunakan Sample Average Approximation (SAA) dengan $N = 200$ skenario permintaan, direduksi menjadi $K = 20$ skenario representatif melalui *scenario reduction* (algoritma *forward selection* berdasarkan jarak Kantorovich). **Tahap 4** memanfaatkan solver MIP komersial dengan *cutting planes* untuk mempercepat konvergensi (*Benders decomposition* karena struktur recourse). **Tahap 5-6** mengikuti praktik *rolling-horizon*: dua periode pertama di-*lock* untuk eksekusi, periode berikutnya di-*float* untuk optimasi ulang ketika data permintaan aktual periode $t$ terobservasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi kasus**: Manufaktur *consumer electronics* dengan 3 produk smartphone (P1, P2, P3) pada lini perakitan berkapasitas $K = 200$ unit/period. Parameter biaya (USD/unit atau per setup):

| Parameter | P1 | P2 | P3 |
|-----------|-----|-----|-----|
| $c_{jt}$ (prod) | 80 | 95 | 110 |
| $s_{jt}$ (setup) | 500 | 650 | 800 |
| $h_{jt}$ (holding) | 2.5 | 3.0 | 3.5 |
| $p_{jt}$ (backorder) | 6 | 7 | 8 |

*Forecast* awal permintaan ($\hat{D}_{jt}$, unit): P1 = [100, 120, 90, 150, 110, 130], P2 = [80, 95, 110, 85, 100, 120], P3 = [60, 70, 65, 90, 75, 85]. Variansi MMFE diasumsikan $\sigma_\varepsilon = 15$ untuk semua produk.

**Langkah 1 — Hitung biaya deterministik (model Wagner-Whitin tanpa kapasitas ketat)**:
Total produksi = Σ$\hat{D}_{jt