# 1617 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (lot sizing) dan penjadwalan produksi (production scheduling) merupakan dua keputusan operasional yang saling berinteraksi secara erat dalam sistem manufaktur modern. Dalam konteks *Cuestiones de fisioterapia* (Lead Researchers, 2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)), penulis menyoroti bahwa mayoritas pendekatan akademik terhadap lot sizing dengan ketidakpastian permintaan jarang diimplementasikan di industri. Realitas operasional menunjukkan bahwa perusahaan umumnya menggunakan model deterministik yang dikombinasikan dengan mekanisme *rolling-horizon planning* untuk menyerap fluktuasi permintaan. Diskrepansi antara riset akademis dan praktik industri inilah yang menjadi urgensi utama pengembangan model optimasi stokastik hibrida.

Dalam industri manufaktur kontemporer—mulai dari produsen barang konsumsi, farmasi, hingga komponen otomotif—variabilitas permintaan bukan lagi pengecualian melainkan norma. Forel & Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mendokumentasikan bahwa perencanaan lot sizing secara deterministik menyebabkan rata-rata kenaikan biaya aktual antara 3%–8% dibandingkan dengan pendekatan stokastik yang memperhitungkan evolusi peramalan (*forecast evolution*). Tanpa antisipasi terhadap pembaruan ramalan, keputusan lot sizing menjadi suboptimal secara struktural, terutama pada horizon perencanaan yang panjang.

Permasalahan menjadi semakin kompleks ketika lot sizing tidak berdiri sendiri, melainkan terikat dengan keputusan penjadwalan pada mesin terbatas (*capacitated lot sizing and scheduling problem*—CLSP). Pada level ini, keputusan tidak hanya menentukan *kapan* dan *berapa banyak* memproduksi, tetapi juga *pada mesin mana* urutan produksi akan dieksekusi. Integrasi dua keputusan ini dalam kerangka optimasi stokastik memerlukan pendekatan hibrida yang menggabungkan kekuatan *mixed-integer programming* (MIP) untuk aspek kombinatorial dan kemampuan metaheuristik atau simulasi Monte Carlo untuk menangani ketidakpastian dimensi tinggi.

Lead Researchers (2025) mengajukan model hibrida yang secara eksplisit menjembatani celah antara rigor akademis dan kebutuhan praktis industri. Pendekatan hibrida ini dirancang untuk mempertahankan sifat *tractable* pada skala produksi nyata (50–500 item, 12–52 periode perencanaan) sambil tetap menghasilkan keputusan yang robust terhadap realisasi permintaan masa depan. Justifikasi ekonominya jelas: pada perusahaan manufaktur menengah dengan omset tahunan Rp 500 miliar, penghematan biaya inventaris 5% melalui optimasi stokastik bernilai sekitar Rp 5–7 miliar per tahun—angka yang signifikan untuk investasi teknologi keputusan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik sebagai *Baseline*

Model lot sizing dan penjadwalan kapasitif (*Capacitated Lot Sizing and Scheduling Problem*—CLSP) dalam bentuk deterministik dapat diformulasikan sebagai berikut. Misalkan $T$ adalah jumlah periode perencanaan, $I$ adalah himpunan item, dan $K$ adalah himpunan mesin. Parameter-parameter kunci meliputi:

- $d_{i,t}$: permintaan deterministik untuk item $i$ pada periode $t$
- $p_{i,k}$: waktu proses unit item $i$ pada mesin $k$
- $c_{i,t}$: biaya produksi variabel per unit item $i$ pada periode $t$
- $h_{i,t}$: biaya penyimpanan per unit item $i$ dari periode $t$ ke $t+1$
- $s_{i,t}$: biaya *setup* (siap) untuk item $i$ pada periode $t$
- $C_k$: kapasitas waktu tersedia pada mesin $k$ per periode

Variabel keputusan:
- $x_{i,t,k} \geq 0$: jumlah produksi item $i$ pada periode $t$ di mesin $k$
- $y_{i,t,k} \in \{0,1\}$: 1 jika *setup* item $i$ dilakukan pada periode $t$ di mesin $k$
- $I_{i,t} \geq 0$: inventaris item $i$ di akhir periode $t$

Formulasi MILP deterministik:

$$\min \sum_{i \in I} \sum_{t=1}^{T} \sum_{k \in K} (c_{i,t} x_{i,t,k} + s_{i,t} y_{i,t,k}) + \sum_{i \in I} \sum_{t=1}^{T} h_{i,t} I_{i,t}$$

dengan kendala:

$$\sum_{k \in K} x_{i,t,k} + I_{i,t-1} - I_{i,t} = d_{i,t} \quad \forall i,t \quad (1)$$

$$\sum_{i \in I} p_{i,k} x_{i,t,k} \leq C_k \quad \forall k,t \quad (2)$$

$$x_{i,t,k} \leq M \cdot y_{i,t,k} \quad \forall i,t,k \quad (3)$$

Persamaan (1) menjamin keseimbangan inventaris; (2) menjamin kapasitas tidak terlampaui; (3) menjamin korelasi antara keputusan produksi dan setup melalui konstanta Big-$M$.

### 2.2 Ekstensi Stokastik dengan *Martingale Model of Forecast Evolution* (MMFE)

Forel & Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mengusulkan penggunaan MMFE untuk menangkap dinamika pembaruan ramalan dalam kerangka *rolling-horizon*. Dalam MMFE, ramalan permintaan pada periode $\tau$ yang dibuat pada periode keputusan $t$ (dengan $t \leq \tau$) mengikuti relasi *martingale*:

$$F_{i,\tau|t+1} = F_{i,\tau|t} + \varepsilon_{i,\tau,t+1}$$

di mana $\varepsilon_{i,\tau,t+1}$ adalah *innovation* dengan $\mathbb{E}[\varepsilon_{i,\tau,t+1} | \mathcal{F}_t] = 0$. Dengan kata lain, ramalan terbaik di masa depan adalah ramalan hari ini plus ekspektasi *forecast error* yang bernilai nol. Variansi dari inovasi ini menurun seiring mendekatnya horizon eksekusi:

$$\text{Var}(\varepsilon_{i,\tau,t+1}) = \sigma_{i,\tau}^2 \cdot \rho^{\tau-t-1}, \quad 0 < \rho < 1$$

Parameter $\rho$ adalah *smoothing factor* yang mengukur seberapa cepat ketidakpastian berkurang ketika mendekati waktu realisasi. Untuk kasus empiris pada industri FMCG, Forel & Grunow melaporkan $\rho \in [0.7, 0.9]$.

### 2.3 Formulasi Stokastik Dua-Tahap dengan *Production Recourse*

Model Lead Researchers (2025) membangun program stokastik dua-tahap (*two-stage stochastic program*). Pada tahap pertama (*here-and-now*), keputusan lot size dan *setup* ditetapkan sebelum realisasi permintaan. Pada tahap kedua (*wait-and-see*), keputusan *production recourse* $x_{i,t,k}^{\omega}$ dapat disesuaikan untuk setiap skenario permintaan $\omega \in \Omega$:

$$\min \sum_{i,t,k} (c_{i,t} x_{i,t,k}^0 + s_{i,t} y_{i,t,k}^0) + \mathbb{E}_{\omega}\left[Q(y^0, \omega)\right]$$

di mana $Q(y^0, \omega)$ adalah fungsi recourse:

$$Q(y^0, \omega) = \min \sum_{i,t,k} q_{i,t}^+ x_{i,t,k}^{\omega,+} + q_{i,t}^- x_{i,t,k}^{\omega,-} \quad \text{s.t.}$$

$$\sum_k x_{i,t,k}^{\omega,+} - \sum_k x_{i,t,k}^{\omega,-} + I_{i,t-1}^{\omega} - I_{i,t}^{\omega} = d_{i,t}^{\omega} \quad \forall i,t$$

$$x_{i,t,k}^{\omega,+} + x_{i,t,k}^{\omega,-} \leq M \cdot y_{i,t,k}^0 \quad \forall i,t,k$$

Variabel $x^{+}$ dan $x^{-}$ berturut-turut merepresentasikan penyesuaian produksi ke atas dan ke bawah relatif terhadap keputusan tahap pertama, dengan biaya asimetris $q^+ > q^-$ yang merefleksikan biaya *rush order* lebih tinggi dari biaya penundaan produksi.

### 2.4 Komponen Hibrida: Metaheuristik untuk Pembangkitan Skenario

Karena jumlah skenario $|\Omega|$ dapat mencapai ribuan untuk kasus industri nyata, Lead Researchers (2025) mengintegrasikan teknik *sample average approximation* (SAA) dengan algoritma *iterative Local Search* (ILS) untuk menyeimbangkan kualitas solusi dan waktu komputasi. Solusi MIP direlaksasikan secara bertahap melalui dekomposisi Benders, sementara ILS memperbaiki struktur kombinatorial keputusan setup.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model optimasi stokastik hibrida di lingkungan industri mengikuti alur prosedural sebagai berikut:

**Tahap 1 – Akuisisi dan Pembersihan Data Historis (Minggu 1–2).**
Kumpulkan data permintaan historis minimal 36 periode (3 tahun). Hitung parameter MMFE: deviasi standar residual $\sigma_{i,\tau}$ dan *smoothing factor* $\rho_i$ menggunakan regresi pada transformasi logaritmik. Validasi dengan *cross-validation* 5-fold.

**Tahap 2 – Pembangkitan Skenario (Minggu 3).**
Bangun pohon skenario menggunakan *Monte Carlo Simulation* dengan 1.000–5.000 sampel. Terapkan *scenario reduction* berbasis algoritma *forward selection* (Dupacová–Gröwe-Kushnir) untuk mereduksi menjadi 50–200 skenario representatif yang mempertahankan momen pertama dan kedua dari distribusi asli.

**Tahap 3 – Penyelesaian Model (Minggu 4–5).**
Selesaikan formulasi dua-tahap dengan solver komersial (Gurobi atau CPLEX) pada mode *deterministic equivalent* untuk $|\Omega| \leq 50$. Untuk $|\Omega| > 50$, gunakan dekomposisi Benders