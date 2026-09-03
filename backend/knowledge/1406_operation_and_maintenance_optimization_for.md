# 1406 — Optimasi Operasi dan Pemeliharaan Sistem Manufaktur dengan Manajemen Energi: Integrasi Model Probabilistik dan Digital Twin untuk Pengambilan Keputusan Proaktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Operation and Maintenance Optimization for Manufacturing Systems with Energy Management
**Jurnal & Sitasi Utama:** Xiangxin An, Guojin Si, Tangbin Xia (2022). *Energies*. DOI: [https://doi.org/10.3390/en15197338](https://doi.org/10.3390/en15197338)
**Sitasi Pendukung:** Bharath Pidaparthi, Ryan Jacobs, Sayan Ghosh (2024). *Annual Conference of the PHM Society*. DOI: [https://doi.org/10.36001/phmconf.2024.v16i1.4148](https://doi.org/10.36001/phmconf.2024.v16i1.4148)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur merupakan konsumen energi terbesar di hampir seluruh negara industri—menurut An, Si, dan Xia (2022) dalam *Energies*, lebih dari 30% konsumsi energi final global attributable pada aktivitas produksi industri, dengan elastisitas konsumsi energi yang sangat dipengaruhi oleh intensitas operasi mesin, jadwal pemeliharaan, dan struktur sistem produksi (An, Si, & Xia, 2022, DOI: [10.3390/en15197338](https://doi.org/10.3390/en15197338)). Tekanan terhadap evolusi optimasi energi bersumber dari dua arah simultan: regulasi keberlanjutan pemerintah (carbon tax, EU ETS, standar ISO 50001) dan kompetisi pasar yang menuntut *total cost of ownership* semakin rendah tanpa mengorbankan availability aset.

Operation and Maintenance (O&M) memiliki prospek paling signifikan untuk optimasi energi karena dua alasan fundamental. Pertama, *diversitas aktivitas O&M*—meliputi *preventive maintenance* (PM), *corrective maintenance* (CM), *predictive maintenance* (PdM), *opportunity maintenance*, dan *shutdown-based overhauls*—menyediakan ruang keputusan yang kaya untuk *trade-off* antara biaya energi, biaya downtime, dan risiko kegagalan. Kedua, *kompleksitas struktur sistem manufaktur* (arsitektur seri, paralel, atau hybrid pada lini produksi) menambah dimensi stokastik pada permasalahan optimasi. An, Si, dan Xia (2022) secara eksplisit mengidentifikasi tiga tantangan utama: (1) dinamika aktivitas manufaktur yang *time-varying* sehingga solusi *steady-state* menjadi tidak valid; (2) kompleksitas struktural yang menghasilkan interdependensi antar-subsistem; dan (3) interpretasi beragam terhadap *energy-optimization* (apakah dimaknai sebagai *minimasi konsumsi absolut*, *minimasi konsumsi per unit output*, atau *minimasi carbon footprint*) (An et al., 2022).

Dalam konteks aset kapital-intensif seperti *aircraft engine*, Pidaparthi, Jacobs, dan Ghosh (2024) menunjukkan bahwa keputusan *engine removal* untuk maintenance harus menyeimbangkan *fleet stability* dengan biaya siklus hidup. Mereka mengusulkan penggunaan *probabilistic prognostic digital twins* yang dibangun dari *Dynamic Bayesian Networks* (DBN) untuk mengaggregasi estimasi *remaining useful life* (RUL) tingkat-komponen menjadi keputusan tingkat-sistem (Pidaparthi, Jacobs, & Ghosh, 2024, DOI: [10.36001/phmconf.2024.v16i1.4148](https://doi.org/10.36001/phmconf.2024.v16i1.4148)). Sinergi antara kerangka optimasi energi An et al. (2022) dan kerangka prognostik probabilistik Pidaparthi et al. (2024) menjadi pilar keputusan O&M modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Keandalan Probabilistik untuk Komponen Kritis

Untuk komponen yang mengalami *damage growth*, distribusi Weibull dua-parameter menjadi standar de facto karena fleksibilitasnya memodelkan *infant mortality*, *useful life*, dan *wear-out* phases secara simultan:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $\beta$ adalah *shape parameter* (untuk *wear-out* $\beta > 1$), $\eta$ adalah *scale parameter* (characteristic life), dan $R(t)$ menyatakan probabilitas kelangsungan fungsi hingga waktu $t$ (An et al., 2022).

### 2.2 Formulasi Optimasi Energi pada Aktivitas O&M

An et al. (2022) merumuskan permasalahan optimasi sebagai berikut. Untuk sistem manufaktur dengan $N$ mesin dan horizon perencanaan diskret $t = 1, 2, \ldots, T$, fungsi tujuan meminimalkan *total expected cost* yang terdiri dari biaya energi, biaya pemeliharaan, dan biaya downtime:

$$\min_{x_{i,t},\, m_{i,t}} \; \sum_{t=1}^{T} \sum_{i=1}^{N} \left[ C_e \cdot P_{i,t}(x_{i,t}) \cdot \Delta t + C_m \cdot m_{i,t} + C_d \cdot D_{i,t} \right]$$

dengan variabel keputusan:
- $x_{i,t} \in \{0,1\}$ = status operasi mesin $i$ pada waktu $t$ (1 = beroperasi, 0 = off)
- $m_{i,t} \in \{0,1,2\}$ = mode pemeliharaan (0 = none, 1 = preventive, 2 = corrective)

Parameter: $P_{i,t}(x_{i,t})$ adalah *power consumption function* yang umumnya non-linear; $C_e$, $C_m$, $C_d$ berturut-turut adalah tarif energi (USD/kWh), biaya pemeliharaan per-event, dan biaya downtime per-jam. Fungsi konsumsi daya mengikuti pola kuadratik ketika *partial loading* dipertimbangkan:

$$P_{i,t} = P_{i}^{\text{base}} + P_{i}^{\text{var}} \cdot \left(\frac{\text{load}_{i,t}}{\text{cap}_{i}}\right)^2$$

### 2.3 Dynamic Bayesian Network untuk Prognostik

Pidaparthi et al. (2024) membangun DBN dengan *hidden state* yang merepresentasikan tingkat degradasi $D_k$ pada komponen $k$ pada epoch waktu $t$, dan *observable* berupa sinyal kondisi seperti *vibration RMS*, *oil debris count*, dan *borescope inspection results*. Update Bayesian dilakukan dengan:

$$P(D_{k,t+1} \mid D_{k,t}, \mathbf{u}_{k,t}) = \int P(D_{k,t+1} \mid D_{k,t}) \cdot P(D_{k,t} \mid \mathbf{u}_{k,1:t}) \, dD_{k,t}$$

di mana $\mathbf{u}_{k,t}$ adalah vektor usage variable (siklus, suhu, tekanan). Aggregasi tingkat-sistem untuk keputusan *engine removal* menggunakan fungsi risiko kumulatif:

$$\Lambda_{\text{engine}}(t) = 1 - \prod_{k=1}^{K} R_k(t)$$

dengan asumsi kegagalan bersifat *competing risk* antar-komponen kritis (Pidaparthi et al., 2024).

### 2.4 Trade-off Biaya: Opportunity Maintenance Threshold

Keputusan *opportunity maintenance* (melakukan PM ketika sistem sedang shutdown untuk alasan lain) dimodelkan sebagai berikut. Threshold $\tau^*$ dipilih untuk meminimalkan:

$$E[\text{TC}](\tau) = P(\text{PM at } \tau) \cdot C_{PM} + P(\text{fail before } \tau) \cdot C_{CM} + \int_0^{\tau} C_e(t) \, dt$$

Solusi first-order condition menghasilkan:

$$\tau^* = \eta \cdot \left[ \frac{C_{CM} - C_{PM}}{C_e \cdot \eta} \right]^{1/\beta}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis optimasi O&M dengan manajemen energi mengikuti arsitektur berlapis berikut ini, yang mengintegrasikan kedua paper rujukan:

```
┌──────────────────────────────────────────────────────────────┐
│  LAYER 1: Akuisisi Data (ISO 50015 EnMS Compliance)         │
│  ├─ Smart meter / SCADA (energi, load, uptime)              │
│  ├─ CMMS records (work orders, MTBF, MTTR)                  │
│  └─ Sensor PdM (vibrasi, termografi, oil analysis)          │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  LAYER 2: Prognostic Engine (Pidaparthi et al., 2024)       │
│  ├─ Component-level DBN → distribusi RUL                    │
│  ├─ Aggregasi sistem → P(failure dalam horizon H)            │
│  └─ Update inspeksi lapangan via Bayesian inference         │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  LAYER 3: Optimasi Energi-O&M (An et al., 2022)             │
│  ├─ Formulasi MILP / Dynamic Programming                    │
│  ├─ Objective: minimize C_e + C_m + C_d                     │
│  └─ Constraints: availability, throughput, carbon budget     │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  LAYER 4: Decision Dashboard (Maintenance Manager)          │
│  ├─ Jadwal PM, opportunity window, work order release       │
│  └─ KPI: OEE, Energy intensity (kWh/unit), MTBF, MTTR      │
└──────────────────────────────────────────────────────────────┘
```

**SOP Langkah Demi Langkah:**

1. **Baseline Audit (2-4 minggu):** Lakukan *energy audit* sesuai ISO 50002 dan *reliability block diagram analysis* untuk memetakan struktur sistem. Hitung baseline $E_0 = \sum P_i \cdot t_i$ dan identifikasi *energy hotspots*.
2. **Kalibrasi Model Probabilistik (4-6 minggu):** Fit distribusi Weibull pada data historis menggunakan *maximum likelihood estimation*. Validasi dengan *Kolmogorov-Smirnov test* pada level signifikansi $\alpha = 0.05$.
3. **Deployment Digital Twin:** Bangun DBN per-komponen sesuai kerangka Pidaparthi et al. (2024). Validasi *predictive accuracy* dengan metrik *Mean Absolute Percentage Error* (MAPE) pada hold-out set, target MAPE ≤ 15%.
4. **Optimasi MILP:** Selesaikan formulasi An et al. (2022) dengan *solver* (Gurobi/CPLEX). Validasi *feasibility* terhadap *production schedule* mingguan.
5. **Implementasi Opportunity Maintenance:** Aktivasi modul keputusan $\tau^*$ yang dibahas di §2.4. Setiap *downtime window* dievaluasi untuk PM oportunistik.
6. **Continuous Improvement (PDCA):** Review bulanan KPI. Target *energy intensity reduction* ≥ 8% tahun pertama sesuai *best-practice* sektor (An et al., 2022).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus: Keputusan Engine Removal pada Armada Pesawat Regional**

Sebuah operator *aircraft engine* memiliki 12 armada dengan model yang homogen. Komponen kritis utama adalah *high-pressure turbine blade* (HPTB). Data historis menunjukkan parameter Weibull $\beta = 2.4$, $\eta = 8.500$ flight cycles (FC). Inspeksi *borescope* terakhir pada mesin nomor 7 menunjukkan *tip clearance* 1.8 mm (threshold removal = 2.5 mm), dengan *vibration RMS* 5.2 g (baseline 2.8 g, alarm 7.0 g).

**Langkah 1: Estimasi RUL saat ini.**

Probabilitas HPTB masih hidup pada $t$ flight cycles:

$$R(t) = e^{-(t/8500)^{2.4}}$$

Untuk $t = 10.000$ FC (3.000 FC dari sekarang):

$$R(10000) = e^{-(10000/8500)^{2.4}} = e^{-(1.1765)^{2.4}} = e^{-1.5191} \approx 0.2187$$

Artinya, pada 10.000 FC kemungkinan gagal sudah ~78%.

**Langkah 2: Proyeksi kerusakan menggunakan estimasi point.**

Misalkan kerusakan tumbuh secara linear terhadap siklus: $D(t) = D_0 + r \cdot (t - t_0)$, dengan $D_0 = 1.8$ mm saat $t_0 = 7.000$ FC, dan *rate* $r = 0.0003$ mm/FC (diperoleh dari *fleet-wide trend*). Threshold removal $D^* = 2.5$ mm, sehingga:

$$t^* = t_0 + \frac{D^* - D_0}{r} = 7000 + \frac{2.5 - 1.8}{0.0003} = 7000 + 2333 = 9.333 \text{ FC}$$

**Langkah 3: Update Bayesian dengan inspeksi terbaru.**

*Prior*: distribusi kerusakan $D \sim \mathcal{N}(1.8, 0.3^2)$ mm. *Likelihood* dari pengukuran *borescope* baru: $\mathcal{N}(2.1,