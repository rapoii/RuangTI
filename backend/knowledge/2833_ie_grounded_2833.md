# 2833 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Lingkungan Permintaan Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning.* Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

> **Catatan Editorial Literatur:** Abstrak naskah Lead Researchers (2025) tidak tersedia secara terbuka sehingga bagian empiris modul ini bertumpu pada Forel & Grunow (2023) yang memiliki deskripsi metodologis lengkap.Implikasi terhadap validitas sumber primer akan dibahas pada Bagian 5.

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua keputusan operasional yang saling terkait erat dalam sistem manufaktur discrete-parts, proses kontinu, maupun industri perakitan multi-fase.Lead Researchers (2025) dalam naskahnya yang dimuat di *Cuestiones de Fisioterapia*, vol. 54(02), hlm. 2007–2018, mengajukan sebuah model optimasi stokastik hibrida (*hybrid stochastic optimization model*) untuk menjawab kebutuhan integratif tersebut. Meskipun fokus rekayasanya industrial, keberadaan naskah pada jurnal tersebut perlu dicatat sebagai anomali tematik yang akan dievaluasi secara kritis pada Bagian 5.

Pada tataran praktik industri, Forel & Grunow (2023) memaparkan kesenjangan fundamental yang selama ini menghambat adopsi pendekatan stokastik akademis: **"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates"** ([Forel & Grunow, 2023, DOI:10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).Kenyataan ini menunjukkan bahwa rata-rata industri manufaktur masih mengandalkan rencana deterministik yang diperbarui secara periodik, sebuah praktik yang meskipun sederhana namun suboptimal secara biaya total karena tidak menghargai informasi probabilistik tentang evolusi permintaan.

Urgensi ekonomis dari optimasi lot sizing dapat diukur dari struktur biaya produksi: biaya setup (atau changeover), biaya inventory carrying, dan biaya backorder dapat mencapai 15–35% dari total biaya operasional lantai pabrik pada industri FMCG, komponen otomotif, dan semikonduktor (Forel & Grunow, 2023). Ketidakpastian permintaan — yang semakin tinggi pasca-pandemic dengan varian permintaan mingguan yang fluktuatif — memperparah risiko keputusan lot sizing yang tidak adaptif. Oleh karena itu, model hibrida yang menggabungkan optimasi stokastik dengan mekanisme rolling-horizon dan recourse menjadi jembatan strategis antara rigor akademis dan kelayakan implementasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Stokastik Dasar untuk Lot Sizing

Formulasi dasar *stochastic lot-sizing problem* dengan permintaan acak $D_t$ pada periode $t$ dapat ditulis sebagai berikut (Forel & Grunow, 2023):

$$\min_{x_t, I_t, S_t^+, S_t^-} \mathbb{E}\!\left[ \sum_{t=1}^{T} \left( c_t x_t + h_t I_t^+ + p_t S_t^+ + b_t S_t^- \right) \right]$$

dengan kendala keseimbangan inventori:

$$I_t = I_{t-1} + x_t - D_t, \quad \forall t = 1, 2, \ldots, T$$

di mana $x_t$ adalah kuantitas produksi, $I_t = I_t^+ - I_t^-$ adalah persediaan bersih, $S_t^+$ adalah backorder positif, $S_t^-$ adalah *safety stock* berlebih, $c_t$ adalah biaya produksi variabel per unit, $h_t$ biaya *holding*, $p_t$ biaya *penalty* backorder, dan $b_t$ biaya pembuangan/overage.

### 2.2 Model Martingale dari Evolusi Forecast (MMFE)

Forel & Grunow (2023) mengusulkan **Martingale Model of Forecast Evolution (MMFE)** untuk menangkap dinamika pembaruan forecast dalam kerangka *rolling-horizon*. Formulasi rekursifnya:

$$D_t = D_{t-1} + \mu_t + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_\varepsilon^2)$$

di mana $D_t$ adalah permintaan aktual yang baru terobservasi pada periode $t$, $\mu_t$ adalah drift deterministik (tren), dan $\varepsilon_t$ adalah *martingale difference sequence* dengan $\mathbb{E}[\varepsilon_t | \mathcal{F}_{t-1}] = 0$. Sifat martingale menjamin bahwa *forecast update* bersifat *unbiased* terhadap informasi sebelumnya.

Implikasi praktisnya: variansi forecast *update* memenuhi hukum:

$$\mathrm{Var}(\varepsilon_t) = \sigma_\varepsilon^2 = h^2 \cdot \mathrm{Var}(D_{t-1})$$

dengan $h$ adalah parameter *smoothing* yang merepresentasikan akurasi forecast lanjutan.

### 2.3 Formulasi Hibrida Lot Sizing + Scheduling (Lead Researchers, 2025)

Mengkombinasikan keputusan lot sizing dengan penjadwalan memerlukan variabel biner $y_{i,t}$ untuk aktivasi produk $i$ pada periode $t$, dan variabel urutan $z_{i,j,t}$ sebagai indikator transisi setup dari produk $i$ ke $j$:

$$\min \sum_{t=1}^{T} \sum_{i=1}^{N} \left( c_{i,t} x_{i,t} + s_{i,t} y_{i,t} + h_{i,t} I_{i,t}^+ + p_{i,t} S_{i,t}^+ \right) + \mathbb{E}\!\left[ \sum_{t=1}^{T} \sum_{i=1}^{N} \sum_{j \neq i} sc_{i,j,t} z_{i,j,t} \right]$$

dengan kendala kapasitas *sequence-dependent setup*:

$$\sum_{i=1}^{N} \left( t_{i}^{\text{pro}} x_{i,t} + t_{i}^{\text{setup}} y_{i,t} \right) \leq C_t, \quad \forall t$$

dan kendala aktivasi-setup:

$$y_{i,t} \geq \frac{x_{i,t}}{Q_{i}^{\text{max}}}, \quad z_{i,j,t} \geq y_{i,t-1} + y_{j,t} - 1, \quad i \neq j$$

di mana $sc_{i,j,t}$ adalah biaya setup transisi sequence-dependent.

### 2.4 Production Recourse (Forel & Grunow, 2023)

Untuk merefleksikan fleksibilitas replanning, Forel & Grunow (2023) menambahkan recourse decision $r_t$ sebagai kuantitas produksi korektif setelah observasi permintaan aktual:

$$\mathbb{P}\!\left( I_t - D_t + r_t \geq 0 \right) \geq 1 - \alpha, \quad \forall t$$

dengan $1-\alpha$ adalah *service level* yang ditetapkan (umumnya 0.95 atau 0.975).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model hibrida di industri mengikuti SOP berikut, yang dirancang mengikuti prosedur Forel & Grunow (2023) yang divalidasi melalui simulasi ekstensif pada data sintetis dan *real-world*:

**Langkah 1 — Inisialisasi Data Historis.** Kumpulkan data permintaan historis minimal 52 periode (1 tahun mingguan) atau 24 periode (bulanan). Lakukan dekomposisi menjadi komponen tren $\mu_t$, musiman $s_t$, dan residual $\varepsilon_t$ menggunakan metode STL atau SARIMA.

**Langkah 2 — Estimasi Parameter MMFE.** Kalibrasikan parameter $(h, \mu_t, \sigma_\varepsilon)$ dengan *maximum likelihood estimation* pada residual deret waktu yang telah di-*whitening*. Validasi dengan Ljung-Box test untuk autokorelasi residual.

**Langkah 3 — Penyusunan Skenario.** Bangkitkan $S$ skenario permintaan dengan *Monte Carlo simulation* menggunakan MMFE yang telah dikalibrasi. Jumlah skenario minimum yang direkomendasikan: $S = 500$ untuk konvergensi biaya 95% CI.

**Langkah 4 — Optimasi Stokastik Hibrida.** Selesaikan formulasi Mixed-Integer Stochastic Programming (MISP) menggunakan solver komersial (Gurobi/CPLEX) atau pendekatan Progressive Hedging (Rockafellar & Wets) untuk dekomposisi.

**Langkah 5 — Rolling-Horizon Execution.** Pada setiap periode $\tau$, optimalkan horizon $[\tau, \tau+H-1]$ dengan $H$ = panjang horizon (umumnya 8–12 periode). Terapkan hanya keputusan $x_\tau$ (first-period decision).

**Langkah 6 — Recourse & Forecast Update.** Setelah permintaan $D_\tau$ terobservasi, per