# 2257 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu keputusan taktis paling kritikal dalam hierarki perencanaan manufaktur modern. Dalam konteks operasional nyata industri proses dan perakitan (*assembly*) dengan karakteristik permintaan yang sangat fluktuatif — seperti industri FMCG (*Fast-Moving Consumer Goods*), komponen otomotif, dan produksi farmasi — keputusan lot sizing yang tidak adaptif terhadap ketidakpastian permintaan dapat menimbulkan *inventory bullwhip effect*, peningkatan *safety stock* yang tidak proporsional, serta defisit pelayanan yang merugikan margin.

Penelitian yang dipublikasikan dalam jurnal *Cuestiones de fisioterapia* edisi 2025 dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menyoroti celah fundamental antara optimasi akademik dan implementasi industri. Model deterministik Wagner-Whitin (1958) maupun heuristik Silver-Meal selama bertahun-tahun menjadi *backbone* sistem MRP (*Material Requirements Planning*), namun gagal menangkap dinamika permintaan stokastik yang merupakan norma, bukan pengecualian, di lantai pabrik. Lead Researchers (2025) berargumen bahwa diperlukan pendekatan hibrida yang mengintegrasikan kekuatan formulasi *mixed-integer programming* dengan kemampuan komputasional *decomposition-based heuristic* dan simulasi Monte Carlo untuk menghasilkan keputusan lot sizing yang robust.

Konteks ini diperkuat oleh temuan Forel dan Grunow (2023) yang dipublikasikan di *Production and Operations Management* dengan DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881). Mereka mendokumentasikan bahwa secara empiris, *lebih dari 80% perusahaan manufaktur di Eropa* masih menggunakan model deterministik dalam sistem ERP mereka, dengan kompensasi berupa *rolling-horizon planning* yang dijalankan setiap 1–4 minggu. Namun, mereka juga membuktikan melalui simulasi ekstensif (lebih dari 10.000 instans pada data sintetis dan *real-world*) bahwa mengintegrasikan *Martingale Model of Forecast Evolution* (MMFE) ke dalam formulasi lot sizing stokastik menghasilkan pengurangan biaya aktual hingga 8–14% dibandingkan praktik industri standar. Kedua paper ini bersama-sama membentuk *state-of-the-art* terkini dalam riset lot sizing stokastik hibrida, dan menjadi landasan bagi modul ini.

Urgensi ekonomi dari masalah ini bersifat substansial. Menurut studi kasus pada industri minuman ringan di Indonesia, inefisiensi lot sizing menimbulkan biaya *inventory carrying* sebesar 18–25% dari nilai inventaris per tahun, sementara *stockout cost* pada produk ber-margin tinggi dapat menurunkan *service level* hingga di bawah 95% yang menjadi standar contractual *key account*. Oleh karena itu, kemampuan untuk mengkuantifikasi dan mengelola trade-off antara biaya setup, biaya penyimpanan, dan risiko defisit menjadi kompetensi strategis yang wajib dimiliki oleh setiap industrial engineer dan supply chain analyst.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik sebagai Baseline

Sebagai titik tolak, formulasi Capacitated Lot Sizing Problem (CLSP) deterministik dinyatakan sebagai berikut. Misalkan $T$ adalah jumlah periode perencanaan, $d_t$ adalah permintaan deterministik pada periode $t$, $c_t$ adalah biaya produksi variabel per unit, $h_t$ adalah biaya inventory holding per unit per periode, $s_t$ adalah biaya setup (fixed cost) untuk mengaktifkan produksi pada periode $t$, dan $K_t$ adalah kapasitas produksi maksimum pada periode $t$. Variabel keputusan adalah $x_t$ (kuantitas produksi), $y_t \in \{0,1\}$ (indikator setup), dan $I_t$ (inventory level akhir periode). Model minimisasi biaya total adalah:

$$\min \; Z = \sum_{t=1}^{T}\left(c_t x_t + h_t I_t + s_t y_t\right)$$

dengan kendala:

$$I_t = I_{t-1} + x_t - d_t, \quad \forall t = 1, 2, \ldots, T$$

$$x_t \leq K_t \cdot y_t, \quad \forall t$$

$$x_t \geq 0, \quad I_t \geq 0, \quad y_t \in \{0,1\}$$

Formulasi ini berskala *NP-hard* bahkan pada versi deterministiknya, sehingga dekomposisi dan heuristik menjadi keharusan untuk instans industri dengan horizon 52 minggu dan ratusan item (SKUs).

### 2.2 Ekstensi Stokastik Dua-Tahap (Two-Stage Stochastic Programming)

Lead Researchers (2025) mengusulkan formulasi stokastik dua-tahap dengan *scenario tree* yang merepresentasikan realisasi permintaan. Misalkan $\Omega$ adalah himpunan skenario dengan probabilitas $\pi_\omega$, dan $d_{\omega t}$ adalah permintaan pada skenario $\omega \in \Omega$. Model menjadi:

$$\min \; Z = \sum_{t=1}^{T}\left(c_t x_t + s_t y_t\right) + \sum_{\omega \in \Omega}\pi_\omega \sum_{t=1}^{T}\left(p_\omega x_{\omega t} + h_t I_{\omega t} + p_{\omega}^{-} b_{\omega t}^{+} + p_{\omega}^{+} b_{\omega t}^{-}\right)$$

dengan kendala recourse:

$$I_{\omega t} = I_{\omega,t-1} + x_{\omega t} - d_{\omega t} + b_{\omega t}^{+} - b_{\omega t}^{-}, \quad \forall \omega, t$$

$$x_t \leq K_t y_t, \quad x_{\omega t} \leq K_t y_t$$

$$b_{\omega t}^{+} \cdot b_{\omega t}^{-} = 0, \quad b_{\omega t}^{+}, b_{\omega t}^{-} \geq 0$$

di mana $b_{\omega t}^{+}$ adalah *backorder* (permintaan yang tidak terpenuhi) dan $b_{\omega t}^{-}$ adalah *overfulfillment* (produksi tambahan rekayasa untuk memenuhi permintaan tak terduga). Biaya $p_{\omega}^{-}$ dan $p_{\omega}^{+}$ adalah parameter penalti yang mencerminkan *lost sales cost* dan biaya produksi darurat (*overtime premium*).

### 2.3 Integrasi Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan pendekatan MMFE yang secara elegan mengkuantifikasi bagaimana *forecast* permintaan berkembang antara waktu keputusan $t_0$ dan waktu realisasi permintaan di masa depan. Formulasi MMFE adalah:

$$d_{t+\tau} = d_t + \sum_{k=1}^{\tau} \epsilon_{t+k}$$

di mana $\epsilon_{t+k} \sim \mathcal{N}(0, \sigma^2)$ adalah *innovation* independen dengan mean nol. Varian kumulatif dari error forecast pada horizon $\tau$ adalah $\tau \sigma^2$. Dengan mengintegrasikan MMFE ke dalam lot sizing, variabel keputusan produksi pada periode $t$ dihitung dengan mempertimbangkan *expected demand evolution*:

$$\mathbb{E}[d_{t+\tau} | \mathcal{F}_t] = d_t^{\text{forecast}}$$

dengan $\mathcal{F}_t$ adalah *filtration* informasi historis hingga waktu $t$.

### 2.4 Mekanisme Recourse Produksi dalam Rolling Horizon

Keunggulan utama pendekatan hibrida yang dipaparkan dalam DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881) adalah adanya *production recourse*, yaitu fleksibilitas untuk menyesuaikan keputusan produksi antar revisi rolling horizon. Recourse ini dimodelkan sebagai:

$$x_{\omega t} = x_t + \delta_{\omega t}^{+}, \quad \delta_{\omega t}^{-} \leq x_t$$

di mana $\delta_{\omega t}^{+}$ adalah *positive adjustment* (penambahan produksi) dan $\delta_{\omega t}^{-}$ adalah *negative adjustment* (pengurangan produksi) pada skenario $\omega$. Nilai ekspektasi dari recourse term ini merepresentasikan *expected flexibility value* yang dinikmati oleh keputusan lot sizing awal.

### 2.5 Hybrid Decomposition: L-Shaped + Rolling Horizon

Lead Researchers (2025) mengintegrasikan formulasi di atas dengan algoritma *L-shaped decomposition* (Van Slyke dan Wets, 1969) untuk memecahkan *master problem* dan *subproblem*:

- **Master problem:** keputusan lot sizing first-stage (variabel $x_t$, $y_t$)
- **Subproblem:** untuk setiap skenario $\omega$, optimalisasi recourse ($\delta_{\omega t}^{+}, \delta_{\omega t}^{-}, b_{\omega t}^{+}, b_{\omega t}^{-}$) dengan *dual variables* $\pi_\omega$ yang dikirim kembali ke master problem sebagai *optimality cut*.

*Optimality cut* iterasi ke-$k$ berbentuk:

$$\theta \geq \mathbb{E}_\omega[Q(x, \omega)] + \sum_{\omega}\pi_{\omega}^k (x - x^k)$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model hibrida ini di lingkungan industri mengikuti SOP berikut:

**Tahap 1 — Pengumpulan Data Historis (Durasi: 4–8 minggu)**
1. Ekstrak data permintaan historis minimal 104 minggu (2 tahun) dari sistem ERP.
2. Bersihkan data dari outlier akibat促销 (*promosi*) satu kali atau *stockout* yang membatasi permintaan.
3. Estimasi parameter MMFE: hitung $\hat{\mu}$, $\hat{\sigma}^2$, dan uji stasioneritas menggunakan Augmented Dickey-Fuller test.
4. Generate *scenario tree* menggunakan *Monte Carlo simulation* dengan $N = 1000$ skenario, kemudian *reduce* menjadi $N' = 50–100$ skenario representatif menggunakan *Kantorovich distance minimization* (clustering algorithm).

**Tahap 2 — Formulasi Model (Durasi: 2–4 minggu)**
1. Bangun *master problem* menggunakan bahasa modeling (AMPL, GAMS, atau Pyomo).
2. Tentukan biaya-biaya relevan: setup, holding, backorder, overtime.
3. Validasi model terhadap 1–2 periode historis sebagai *sanity check*.

**Tahap 3 — Solusi dan Validasi (Durasi: 2–3 minggu)**
1. Jalankan solver (CPLEX, Gurobi, atau HiGHS) dengan *time limit* 30–60 menit per instans.
2. Untuk instans besar, aktifkan *decomposition mode* (L-shaped atau Progressive Hedging Algorithm).
3. Bandingkan *expected cost* solusi stokastik vs deterministik baseline.
4. Validasi *out-of-sample* dengan simulasi pada *hold-out period*.

**Tahap 4 — Implementasi Rolling Horizon (Durasi: Ongoing)**
1. Setiap periode $t$, *re-optimize* dengan forecast terbaru (MMFE).
2. Lock keputusan untuk $L = 4$ periode ke depan (*frozen period*).
3. Sisakan $T - L$ periode sebagai *flexible recourse zone*.
4. Catat *realized cost* vs *expected cost* untuk *continuous improvement*.

**Arsitektur Teknologi:**

```
┌─────────────────┐    ┌──────────────────┐    ┌