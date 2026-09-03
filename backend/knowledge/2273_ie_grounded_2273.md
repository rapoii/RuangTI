# 2273 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan taktis-operasional paling krusial dalam rantai pasok manufaktur modern. Dalam konteks industri proses dan *make-to-stock*, keputusan ini secara langsung memengaruhi tingkat persediaan, biaya pemasangan (*setup cost*), utilisasi kapasitas, dan kemampuan perusahaan merespons fluktuasi permintaan yang semakin volatil akibat volatilitas pasar, *bullwhip effect*, serta disrupsi global. Para periset pada Lead Researchers (2025) menyoroti bahwa integrasi lot sizing dan scheduling dalam satu formulasi tunggal menghasilkan keputusan yang lebih koheren dibanding pendekatan sekuensial, namun tingkat kompleksitas NP-hard yang menyertainya memerlukan pendekatan optimisasi hibrida yang memadukan ketepatan formulasi matematis dan efisiensi komputasional.

Paper pertama yang menjadi acuan utama modul ini, Lead Researchers (2025) dalam *Cuestiones de fisioterapia*, mengajukan model optimisasi stokastik hibrida yang menyelesaikan *Capacitated Lot Sizing and Scheduling Problem* (CLSP) dengan ketidakpastian permintaan eksplisit. Pendekatan hibrida memadukan *Mixed Integer Linear Programming* (MILP) untuk struktur keputusan utama dengan modul metaheuristik (misalnya *simulated annealing* atau *adaptive large neighborhood search*) untuk menangani instance berskala industri yang tidak dapat diselesaikan oleh *branch-and-cut* murni dalam waktu komputasi yang dapat diterima. Sementara itu, Forel dan Grunow (2023) dalam *Production and Operations Management* mengisi kesenjangan antara riset akademik dan praktik industri melalui model *dynamic stochastic lot sizing* berbasis *Martingale Model of Forecast Evolution* (MMFE) yang diintegrasikan ke dalam kerangka *rolling-horizon planning* dengan *production recourse*.

Urgensi ekonomis dari masalah ini sangat substansial. Studi empiris menunjukkan bahwa 30–40% biaya operasional manufaktur berasal dari keputusan lot sizing dan scheduling. Ketidakpastian permintaan jika diabaikan akan menghasilkan rencana produksi yang *over-reactive* (mengakumulasi safety stock berlebihan) atau *under-reactive* (mengakibatkan *stockout* dan backorder). Forel dan Grunow (2023) secara eksplisit mendokumentasikan bahwa pendekatan stokastik yang mempertimbangkan evolusi ramalan mampu menurunkan biaya aktual secara signifikan dibanding pendekatan deterministik industri, sehingga model hibrida bukan sekadar kontribusi teoretis melainkan alat bantu keputusan strategis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik CLSP sebagai Basis

Formulasi dasar *Capacitated Lot Sizing Problem* untuk produk tunggal pada horizon perencanaan $T$ periode didefinisikan sebagai berikut. Misalkan:

- $d_t$ = permintaan deterministik pada periode $t$
- $x_t$ = kuantitas produksi pada periode $t$
- $I_t$ = inventaris akhir periode $t$
- $y_t \in \{0,1\}$ = variabel biner keputusan pemasangan
- $s_t$ = biaya setup, $h_t$ = biaya holding, $p_t$ = biaya produksi variabel per unit
- $C_t$ = kapasitas produksi periode $t$

Model MILP deterministiknya adalah:

$$\min \; Z = \sum_{t=1}^{T} \left( s_t y_t + p_t x_t + h_t I_t \right)$$

$$\text{subject to:}$$

$$x_t + I_{t-1} = d_t + I_t \quad \forall t \in \{1, \ldots, T\}$$

$$x_t \leq C_t y_t \quad \forall t$$

$$x_t, I_t \geq 0, \; y_t \in \{0,1\}$$

### 2.2 Ekstensi ke Model Stokastik Hibrida

Untuk menangani ketidakpastian permintaan, Lead Researchers (2025) memperkenalkan ruang skenario $\omega \in \Omega$ dengan probabilitas $\pi_\omega$. Parameter permintaan menjadi $d_{t,\omega}$, dan variabel keputusan bergantung skenario $x_{t,\omega}, I_{t,\omega}, y_{t,\omega}$. Formulasi lengkap:

$$\min \; \mathbb{E}[Z] = \sum_{\omega \in \Omega} \pi_\omega \sum_{t=1}^{T} \left( s_t y_{t,\omega} + p_t x_{t,\omega} + h_t I_{t,\omega} + b_t B_{t,\omega} \right)$$

dengan kendala *inventory balance* per skenario:

$$x_{t,\omega} + I_{t-1,\omega} - B_{t-1,\omega} = d_{t,\omega} + I_{t,\omega} - B_{t,\omega}$$

*Non-anticipativity constraints* (NAC) menjamin bahwa keputusan untuk periode $t$ tidak boleh bergantung pada informasi masa depan:

$$y_{t,\omega} = y_{t,\omega'} \; \forall \; \omega, \omega' \in \Omega \; \text{yang identik pada history sampai } t-1$$

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) mengadopsi MMFE untuk menangkap pembaruan ramalan pada *rolling-horizon*. Dalam MMFE, permintaan aktual $D_t$ dan ramalan $\mu_t$ mengikuti:

$$D_t = \mu_t + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_\varepsilon^2)$$

$$\mu_t = \mu_{t-1} + \eta_t, \quad \eta_t \sim \mathcal{N}(0, \sigma_\eta^2)$$

dengan $\varepsilon_t$ dan $\eta_t$ independen. Variansi total kesalahan ramalan horizon-$k$ menjadi $\sigma_\varepsilon^2 + k\sigma_\eta^2$, dan ini langsung digunakan untuk membangkitkan skenario stokastik yang realistis.

### 2.4 Mekanisme Hibrida: Lagrangian + Metaheuristik

Komponen hibrida Lead Researchers (2025) menggunakan *Lagrangian relaxation* untuk merelaksasi kendala kapasitas, sehingga masalah terurai menjadi subproblem lot sizing produk tunggal yang solvable secara polinomial dengan *Wagner-Whitin* algorithm. Subgradient optimization memperbarui *Lagrangian multipliers* $\lambda_t$:

$$\lambda_t^{(k+1)} = \lambda_t^{(k)} + \alpha_k \left( \sum_{i=1}^{N} x_{it}^{(k)} - C_t \right)$$

dengan *step-size* $\alpha_k$ yang menurun konvergen. Output Lagrangian menjadi solusi awal untuk fase metaheuristik yang memperbaiki solusi melalui operasi *insert*, *remove*, dan *swap* pada jadwal produksi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP untuk model hibrida mengikuti alur pada Lead Researchers (2025) yang kemudian dipadukan dengan mekanisme *rolling-horizon* Forel dan Grunow (2023):

**Fase A – Akuisisi Data (T-14 hari):**
1. Kumpulkan data historis permintaan 24 periode terakhir.
2. Estimasi parameter MMFE $(\sigma_\varepsilon, \sigma_\eta)$ melalui *maximum likelihood* atau metode momen.
3. Validasi kapasitas produksi $C_t$ dari MPS (*master production schedule*).

**Fase B – Pembangkit Skenario (T-10 hari):**
1. Bangkitkan $S = 200$ skenario permintaan melalui simulasi MMFE.
2. Lakukan *scenario reduction* (misalnya algoritma *fast forward selection*) menjadi $|\Omega| = 20$ skenario representatif.
3. Hitung bobot probabilitas $\pi_\omega$ yang disesuaikan.

**Fase C – Optimasi Hibrida (T-7 hari):**
1. Selesaikan *master problem* MILP dengan *Lagrangian relaxation*.
2. Jalankan metaheuristik ALNS (*Adaptive Large Neighborhood Search*) selama iterasi maksimum $I_{max} = 5000$.
3. Validasi kapasitas dan integritas jadwal (tidak ada overlap produksi antar periode untuk produk berbeda pada lini yang sama).

**Fase D – Eksekusi Rolling-Horizon:**
Setiap awal periode $t$, amati realisasi $D_t$, perbarui ramalan $\mu_{t+1}$, dan re-optimasi horizon $[t+1, t+H]$ dengan *production recourse*. Keputusan variabel kontinu (kuantitas produksi) menjadi recourse, sedangkan vari