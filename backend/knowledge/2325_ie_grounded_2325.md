# 2325 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi *Closed-Loop Supply Chain* (CLSC) dengan Pemanfaatan Bertingkat Baterai Bekas dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG, L., & TANG, L. (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** SHIN, Y., KIM, G., & JEONG, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024) menimbulkan tantangan siklus hidup baru di bidang teknik industri: pembuangan baterai *power lithium-ion* (LIB) secara masif. Baterai EV yang telah terdegradasi hingga kapasitas *State of Health* (SOH) 70–80% tidak lagi layak untuk aplikasi traksi, namun masih menyimpan 60–70% kapasitasnya untuk aplikasi stasioner berdaya rendah—sebuah peluang yang oleh JIANG & TANG (2025) disebut sebagai **echelon utilization** (pemanfaatan bertingkat). DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Urgensi operasional dan ekonomi dari topik ini bersifat tiga dimensional. Pertama, secara **ekonomi**, pasar baterai bekas global diproyeksi bernilai USD 48,7 miliar pada 2033 (Allied Market Research, 2024), menciptakan *revenue stream* baru bagi *Original Equipment Manufacturer* (OEM). Kedua, secara **lingkungan**, satu baterai BEV mengandung 5–8 kg litium, 30–60 kg nikel/kobalt/mangan, dan jika tidak didaur ulang akan mencemari 30.000 liter air tanah per unit (JIANG & TANG, 2025). Ketiga, secara **regulasi**, *EU Battery Regulation 2023/1542* dan *GB/T 34014-2017* (Tiongkok) mewajibkan *Extended Producer Responsibility* (EPR) dengan target tingkat daur ulang material ≥90% pada 2030.

Konteks rekayasa sistem yang diangkat JIANG & TANG (2025) adalah bagaimana merancang arsitektur CLSC empat-tingkat (OEM → konsumen → pengumpul → *echelon integrator* → *recycler*) yang secara simultan mengoptimalkan keputusan harga, akuisisi, remanufaktur, dan alokasi baterai antara kanal *second-life* dan *recycling*. Pendekatan ini sangat relevan dengan framework yang dikemukakan SHIN, KIM, & JEONG (2024) yang menyoroti perlunya *robust decision-making* di tengah ketidakpastian tingkat pengembalian (*return rate uncertainty*) dan fluktuasi harga material daur ulang. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197). Kedua paper tersebut mengisi celah riset yang sebelumnya didominasi oleh CLSC produk fast-moving-consumer-goods (FMCG) dengan karakteristik degradasi yang deterministik, menjadi domain stochastic multi-stage dengan biaya transaksi *reverse logistics* yang kompleks.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dikembangkan JIANG & TANG (2025) mengadopsi **Stackelberg game dua-pemimpin** dengan OEM sebagai *leader* dan *echelon integrator* (EI) sebagai *follower*. Notasi parameter dan variabel keputusan yang digunakan:

### 2.1 Notasi Parameter

- $p_n$: harga jual baterai baru ($/kWh)
- $p_e$: harga jual baterai *second-life* ($/kWh)
- $c_n$: biaya produksi baterai baru ($/kWh)
- $c_r$: biaya remanufaktur untuk kanal *echelon* ($/kWh)
- $c_d$: biaya daur ulang material ($/kWh)
- $\alpha$: tingkat akuisisi (*acquisition rate*) baterai bekas, $0 < \alpha < 1$
- $\beta$: proporsi baterai bekas yang dialokasikan ke kanal echelon, $0 \leq \beta \leq 1$
- $\theta$: parameter sensitivitas harga terhadap permintaan
- $\delta$: rasio degradasi kapasitas baterai (0,7–0,8)

### 2.2 Fungsi Permintaan

Permintaan baterai baru ($D_n$) dan permintaan baterai *second-life* ($D_e$) mengikuti model linear-price-dependent:

$$D_n = a_n - b_n p_n + \gamma_e p_e$$

$$D_e = a_e - b_e p_e + \gamma_n p_n$$

dengan $a_i, b_i > 0$ merepresentasikan parameter ukuran pasar dan elastisitas, sementara $\gamma_{ne}$ menangkap efek substitusi silang antar kanal. SHIN, KIM, & JEONG (2024) menambahkan *stochastic noise term* $\epsilon$ untuk merepresentasikan ketidakpastian permintaan: $D_n^{actual} = D_n + \epsilon$, dengan $\epsilon \sim N(0, \sigma^2)$. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

### 2.3 Fungsi Profit OEM

$$\Pi_{OEM} = p_n D_n + \alpha \beta \cdot \delta \cdot c_r \cdot D_n \cdot \tau - c_n D_n - c_a \alpha D_n$$

di mana:
- $\alpha \beta \delta c_r D_n \tau$ adalah *revenue sharing* dari aktivitas remanufaktur (dengan $\tau$ sebagai koefisien bagi-hasil)
- $c_a$ adalah biaya akuisisi per unit baterai bekas

### 2.4 Fungsi Profit Echelon Integrator

$$\Pi_{EI} = p_e D_e - c_r \cdot \alpha \beta D_n - c_{log} \cdot L$$

dengan $c_{log}$ adalah biaya logistik terbalik (*reverse logistics*) dan $L$ adalah jarak/lead-time transportasi.

### 2.5 Fungsi Profit Recycler

$$\Pi_{REC} = (1 - \beta) \alpha D_n \cdot (c_d - c_m) - c_{sort} \alpha D_n$$

dengan $c_m$ sebagai biaya pembuangan material dan $c_{sort}$ sebagai biaya pemilahan (*sorting*) baterai berdasarkan SOH.

### 2.6 Program Optimasi (Stackelberg Equilibrium)

Mengikuti JIANG & TANG (2025), penyelesaian permainan dilakukan dengan **backward induction**:

$$\max_{p_n, \alpha, \beta} \Pi_{OEM}(p_n, \alpha, \beta)$$

$$\text{s.t.} \quad \beta(p_e^*(\cdot)) \in \arg\max \Pi_{EI}, \quad 0 \leq \alpha, \beta \leq 1$$

Kondisi *first-order* (FOC) untuk OEM:

$$\frac{\partial \Pi_{OEM}}{\partial p_n} = D_n + p_n \frac{\partial D_n}{\partial p_n} - c_n \frac{\partial D_n}{\partial p_n} - \alpha c_a \frac{\partial D_n}{\partial p_n} + \alpha \beta \delta c_r \tau \frac{\partial D_n}{\partial p_n} = 0$$

Kondisi FOC untuk EI:

$$\frac{\partial \Pi_{EI}}{\partial p_e} = D_e + p_e \frac{\partial D_e}{\partial p_e} = 0 \Rightarrow p_e^* = \frac{a_e + \gamma_n p_n}{2 b_e}$$

Substitusi $p_e^*$ ke fungsi OEM menghasilkan *reduced-form objective* yang dapat diselesaikan secara analitik atau melalui *particle swarm optimization* (PSO) sebagaimana diterapkan dalam makalah aslinya.

### 2.7 Robust Counterpart (SHIN et al., 2024)

Untuk menangani ketidakpastian tingkat pengembalian $\tilde{\alpha} \in [\alpha_L, \alpha_U]$, SHIN, KIM, & JEONG (2024) merumuskan *robust counterpart*:

$$\max_{p_n, p_e} \min_{\tilde{\alpha} \in U} \Pi(p_n, p_e, \tilde{\alpha})$$

dengan uncertainty set $U = \{\tilde{\alpha} : |\tilde{\alpha} - \hat{\alpha}| \leq \Gamma \sigma_\alpha\}$, di mana $\Gamma$ adalah parameter konservatisme pengambil keputusan. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) menyajikan SOP empat-fase untuk implementasi CLSC baterai bekas. Diagram alir berikut merupakan sintesis berdasarkan paper tersebut dan disesuaikan dengan praktik industri OEM global (CATL, BYD, Tesla):

```
┌──────────────────────────────────────────────────────────┐
│ FASE 1: AKUISISI & DIAGNOSTIK                           │
│  • Registrasi Battery Passport (GB/T 34014)             │
│  • Pengukuran SOH via BMS cloud telemetry               │
│  • Triase otomatis: SOH > 80% → reuse; 60–80% → echelon;│
│    < 60% → hydrometallurgical recycling                  │
└──────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────┐
│ FASE 2: SORTASI & LOGISTIK TERBALIK                     │
│  • Klasifikasi Grade-A/B/C baterai bekas                 │
│  • Optimasi rute armada pickup (VRP-TW)                 │
│  • Keputusan alokasi β dengan model Stackelberg          │
└──────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────┐
│ FASE 3: ECHELON UTILIZATION & REMANUFAKTUR              │
│  • Refurbishment: cell balancing, BMS reset              │
│  • Aplikasi second-life: storage 50–500 kWh              │
│  • Quality gate (UN 38.3, IEC 62619)                    │
└──────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────┐
│ FASE 4: RECYCLING LOOP & MATERIAL RECOVERY              │
│  • Pyrometallurgy / hydrometallurgy / direct cathode    │
│    recycling                                             │
│  • Black mass recovery: Li, Co, Ni, Mn                  │
│  • Closed-loop material feedback ke lini produksi OEM    │
└──────────────────────────────────────────────────────────┘
```

**Arsitektur teknologi pendukung** yang diidentifikasi JIANG & TANG (2025) mencakup: (i) *digital twin* baterai berbasis IoT, (ii) *blockchain* untuk traceability material (sesuai EU Battery Passport 2027), dan (iii) *AI-driven demand forecasting* untuk second-life batteries. SHIN, KIM, & JEONG (2024) menambahkan satu lapis *return management system* (RMS) terintegrasi dengan ERP yang mampu men-*trigger* pengambilan keputusan restocking/disposal secara otomatis. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut adalah studi kasus realistis berbasis data pasar baterai EV Indonesia/Asia Tenggara 2024, dengan parameter yang konsisten dengan asumsi JIANG & TANG (2025).

### 4.1 Input Parameter

| Parameter | Nilai | Satuan | Sumber/Asumsi |
|-----------|-------|--------|---------------|
| $a_n$ (ukuran pasar baterai baru) | 5.000 | unit/tahun | Pasar EV nasional |
| $b_n$ (elastisitas harga baterai baru) | 8 | unit/($/kWh) | Estimasi elastisitas -1,25 |
| $a_e$ (ukuran pasar second-life) | 2.000 | unit/tahun | Proyeksi BESS storage |
| $b_e$ | 4 | unit/($/kWh) | Estimasi elastisitas |
| $\gamma_{ne}$ | 1,2 | unit/($/kWh) | Efek substitusi sedang |
| $c_n$ | 135 | $/kWh | BloombergNEF 2024 |
| $c_r$ | 55 | $/kWh | 40% dari biaya baru |
| $c_d$ | 12 | $/kWh | Margin daur ulang material |
| $c_m$ | 4 | $/kWh | Biaya disposal |
| $c_a$ | 8 | $/kWh | Biaya akuisisi |
| $\delta$ | 0,75 | – | SOH rata-rata baterai bekas |
| $\tau$ | 0,4 | – | Koefisien bagi-hasil OEM |
| $\hat{\alpha}$