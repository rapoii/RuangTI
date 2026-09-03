# 2718 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu ekosistem *capital-intensive* paling kompleks di mana ketersediaan (*availability*) armada pesawat terbang bukan sekadar metrik operasional, melainkan determinan langsung terhadap profitabilitas, keselamatan publik, dan kepatuhan regulasi. Menurut Hang Zhou (2024) dalam studinya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan menghadapi tantangan unik dalam mengelola degradasi non-linier terhadap siklus hidup komponen kritis pesawat. Berbeda dengan manufaktur diskret yang mengandalkan lini produksi deterministik, operasi MRO harus beroperasi di bawah rezim stokastik, di mana setiap *check*—mulai dari A-check (ringan, berkala pendek), B-check (menengah), C-check (berat), hingga D-check (*heavy maintenance*, overhaul penuh)—memiliki karakteristik downtime, biaya, dan kontribusi terhadap peremajaan kondisi (*restoration factor*) yang berbeda.

Urgensi ekonomis dari optimalisasi kebijakan pemeliharaan ini tidak dapat dipandang sebelah mata. Berdasarkan data MRO global yang dirujuk dalam literatur, downtime satu pesawat窄-body bernilai sekitar $10.000–$25.000 per hari dalam kehilangan pendapatan, sementara D-check untuk pesawat窄-body dapat memakan biaya $3–6 juta dan memakan waktu 1–2 bulan. Zhou (2024) menekankan bahwa meskipun *Reliability-Centered Maintenance* (RCM) sudah lama diakui sebagai kerangka kerja premium untuk industri padat aset (*asset-heavy industries*), implementasinya pada sistem hirarkis seperti kebijakan A/B/C/D MRO penerbangan masih menghadapi kesenjangan riset yang signifikan. Model RCM konvensional sering gagal mengakomodasi dua realitas operasional penting: (1) karakteristik degradasi *bathtub curve* yang sangat non-linier pada fase mature-run operasional pesawat, dan (2) keberadaan keputusan antara *full refurbishment* (D-check penuh) versus *partial refurbishment* (peremajaan parsial di antara interval D-check).

Lebih lanjut, sebagaimana ditegaskan dalam versi lanjutan studi Zhou (2024) dengan DOI [10.2139/ssrn.5291672](https://doi.com/10.2139/ssrn.5291672), scheduler tradisional yang menggunakan interval waktu tetap (*fixed-interval scheduling*) tidak lagi memadai ketika maskapai beroperasi dalam model *mixed-fleet* dengan utilisasi variabel. Konsekuensinya, jadwal pemeliharaan yang suboptimal menyebabkan *out-of-service rate* armada naik, sementara *shop load* MRO tidak merata antar kuartal—sebuah fenomena yang dalam literatur operasi disebut sebagai *maintenance bullwhip effect*. Oleh sebab itu, kerangka kerja yang mengintegrasikan RCM dengan optimasi ketersedian melalui kebijakan pemeliharaan hirarkis menjadi kebutuhan strategis yang mendesak bagi operator penerbangan modern.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka kerja analitis yang dikembangkan Zhou (2024) berakar pada **Renewal Reward Theorem (RRT)** untuk sistem yang dapat diperbarui (*renewal systems*), dengan generalisasi terhadap *delay-time model* dan *imperfect repair*. Berikut adalah formulasi matematis inti yang menjadi tulang punggung model.

### 2.1 Model Ketersediaan Hirarkis (*Hierarchical Availability Function*)

Didefinisikan $T_{op}$ sebagai total waktu operasi kumulatif dalam satu siklus hidup pesawat antara dua D-check penuh, dan $T_{down}^{(i)}$ sebagai downtime yang diakibatkan oleh *check* tingkat ke-$i$ (di mana $i \in \{A, B, C, D\}$). Fungsi ketersediaan sesaat (*steady-state availability*) didefinisikan sebagai:

$$A_{ss} = \lim_{t \to \infty} \frac{E[U(t)]}{t} = \frac{E[T_{op}]}{E[T_{op}] + E[T_{down}]}$$

dengan $\mathbb{E}[\cdot]$ menyatakan ekspektasi matematis. Untuk kebijakan hirarkis, downtime total dapat diuraikan secara aditif:

$$E[T_{down}] = \sum_{i \in \{A,B,C\}} N_i \cdot E[T_{down}^{(i)}] + E[T_{down}^{(D)}]$$

di mana $N_i$ menyatakan jumlah *check* tingkat-$i$ yang dijadwalkan dalam satu siklus D-check penuh. Zhou (2024) membuktikan bahwa keberadaan *availability optimum* $\tilde{A}^*$ dapat dijamin melalui teorema titik tetap (*fixed-point theorem*) yang diaplikasikan pada fungsi objektif:

$$\tilde{A}(\tau_A, \tau_B, \tau_C) = \frac{T_L - \sum_{i \in \{A,B,C,D\}} \left\lfloor \frac{T_L}{\tau_i} \right\rfloor \cdot \bar{d}_i}{T_L}$$

di mana $T_L$ adalah panjang satu *life-cycle* (siklus hidup operasional penuh), $\tau_i$ adalah interval penjadwalan *check* tingkat-$i$, dan $\bar{d}_i$ adalah rata-rata downtime untuk *check* tingkat-$i$.

### 2.2 Model Degradasi Non-Linier

Tingkat degradasi tidak dimodelkan secara linier, melainkan mengikuti *power-law degradation model* yang menangkap *aging* pada fase *mature-run*:

$$R(t) = R_0 - \alpha \cdot t^{\beta}, \quad \beta > 1, \quad \alpha > 0$$

dengan $R(t)$ adalah tingkat keandalan pada waktu $t$, $R_0$ adalah keandalan saat *delivery*, dan $\alpha, \beta$ adalah parameter kalibrasi. Setiap *partial refurbishment* memulihkan keandalan sebesar *restoration factor* $\rho_i \in (0, 1)$, sehingga:

$$R(t^+) = R_0 - \alpha \cdot t^{\beta} + \rho_i \cdot \alpha \cdot t^{\beta} = R_0 - (1-\rho_i) \cdot \alpha \cdot t^{\beta}$$

### 2.3 Fungsi Objektif Optimasi

Optimasi gabungan biaya-ketersediaan dinyatakan sebagai:

$$\max_{\tau_A, \tau_B, \tau_C} \quad J = w_1 \cdot \tilde{A}(\tau_A, \tau_B, \tau_C) - w_2 \cdot \tilde{C}(\tau_A, \tau_B, \tau_C)$$

dengan kendala (*constraint set*):

$$\tau_D \leq \tau_{\max}^{(D)}, \quad \tau_A \leq \tau_B \leq \tau_C \leq \tau_D$$

di mana $\tilde{C}$ adalah total biaya pemeliharaan ternormalisasi, dan $w_1, w_2$ adalah bobot preferensi keputusan manajerial.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari model Zhou (2024) mengikuti protokol operasional delapan-tahap yang dirancang untuk kompatibilitas dengan standar internasional **SAE ARP 4153A** (for maintenance program development) dan **MSG-3** (Maintenance Steering Group – 3rd iteration) dari *Air Transport Association*.

**Tahap 1 – Karakterisasi Armada:** Inventarisasi tipe pesawat, *mean utilization rate* (jam terbang/hari), dan distribusi misi. Input ini menentukan parameter $T_L$ dan konstanta laju utilisasi.

**Tahap 2 – Pengumpulan Data Historis MRO:** Ekstraksi *mean time to repair* (MTTR), distribusi downtime, dan *restoration factors* dari log MRO selama minimal 5 tahun. Data ini diperlukan untuk estimasi $\alpha$, $\beta$, dan $\rho_i$.

**Tahap 3 – Pemodelan Degradasi:** *Curve fitting* terhadap trajectory degradasi komponen kritis menggunakan regresi non-linier (misalnya, *Levenberg–Marquardt algorithm*).

**Tahap 4 – Penentuan Interval Baseline:** Penetapan $\tau_A^{(0)}, \tau_B^{(0)}, \tau_C^{(0)}, \tau_D^{(0)}$ dari rekomendasi OEM (*Original Equipment Manufacturer*), yang berfungsi sebagai *initial feasible point*.

**Tahap 5 – Optimasi Hirarkis:** Penerapan algoritma *Sequential Quadratic Programming* (SQP) atau *Genetic Algorithm* (GA) untuk memaksimalkan $J$ pada rentang kendala. Zhou (2024) merekomendasikan GA untuk kasus dengan *mixed-integer scheduling*.

**Tahap 6 – Validasi Monte Carlo:** Simulasi kebijakan optimal terhadap 10.000 skenario operasional untuk mengestimasi *confidence interval* ketersediaan 95%.

**Tahap 7 – Implementasi Bertahap (*Phased Rollout*):** Penerapan kebijakan baru mulai 25% armada, kemudian 50%, 75%, hingga 100% dengan *feedback loop* kuartalan.

**Tahap 8 – Audit & Kalibrasi Ulang:** Tinjauan tahunan terhadap parameter $\alpha, \beta, \rho_i$ berdasarkan data aktual, dengan *trigger* rekalibrasi bila deviasi prediksi-aktual melebihi 10%.

Diagram alir logika keputusan antara *full refurbishment* (D-check) dan *partial refurbishment* mengikuti logika pohon keputusan (*decision tree*) dengan *decision node* pada threshold tingkat degradasi $R_{threshold} = 0.65$, di mana keputusan diambil berdasarkan:

$$\text{Keputusan} = \begin{cases} \text{Full D-check}, & \text{jika } R(t) \leq R_{threshold} \text{ dan } t > \tau_C \\ \text{Partial refurbishment}, & \text{jika } R_{threshold} < R(t) \leq R_{partial} \\ \text{Routine check (A/B/C)}, & \text{otherwise} \end{cases}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi model, pertimbangkan studi kasus **Armada窄-body Airbus A320** milik sebuah maskapai regional dengan parameter operasional tipikal sebagaimana dirujuk dalam literatur Zhou (2024).

### 4.1 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_L$ (siklus hidup D-check) | 12.000 | jam terbang (FH) |
| $\tau_A^{(0)}$ | 600 | FH |
| $\tau_B^{(0)}$ | 3.000 | FH |
| $\tau_C^{(0)}$ | 6.000 | FH |
| $\tau_D$ | 12.000 | FH |
| $\bar{d}_A$ | 8 | jam |
| $\bar{d}_B$ | 24 | jam |
| $\bar{d}_C$ | 168 | jam (≈ 7 hari) |
| $\bar{d}_D$ | 720 | jam (≈ 30 hari) |
| $\alpha$ | $4{,}2 \times 10^{-7}$ | – |
| $\beta$ | 1,35 | – |
| $\rho_C$ | 0,45 | – |
| $\rho_D$ | 0,98 | – |
| $R_0$ | 1,00 | – |

### 4.2 Perhitungan Jumlah Check per Siklus

$$N_A = \left\lfloor \frac{T_L}{\tau_A} \right\rfloor = \left\lfloor \frac{12.000}{600} \right\rfloor = 20$$

$$N_B = \left\lfloor \frac{T_L}{\tau_B} \right\rfloor = \left\lfloor \frac{12.000}{3.000} \right\rfloor = 4$$

$$N_C = \left\lfloor \frac{T_L}{\tau_C} \right\rfloor = \left\lfloor \frac{12.000}{6.000} \right\rfloor = 2$$

### 4.3 Perhitungan Downtime Total Ternormalisasi

$$E[T_{down}] = (20)(8) + (4)(24) + (2)(168) + (1)(720)$$
$$= 160 + 96 + 336 + 720 = 1.312 \text{ jam}$$

### 4.4 Perhitungan Ketersediaan Baseline

$$\tilde{A}_{baseline} = \frac{T_L - E[T_{down}]}{T_L} = \frac{12.000 - 1.312}{12.000} = 0{,}8907 \text{ atau } 89{,}07\%$$

### 4.5 Optimasi dengan Partial Refurbishment

Misalkan maskapai memutuskan untuk menyisipkan satu *partial refurbishment* (C-check ringan) pada $t = 9.000$ FH dengan $\bar{d}_{partial} = 96$ jam dan $\rho_{partial} = 0{,}30$. Setelah refurbishment parsial, trajectory degradasi menjadi:

$$R(9.000^+) = R(9.000^-) + 0{,}30 \cdot [R_0 - R(9.000^-)]$$

Menghitung degradasi sebelum refurbishment:
$$R(9.000) = 1{,}00 - 4{,}2 \times 10^{-7} \cdot (9.000)^{1,35}$$
$$= 1{,}00 - 4{,}2 \times 10^{-7} \cdot 9.000^{1,35}$$

Perhitungan