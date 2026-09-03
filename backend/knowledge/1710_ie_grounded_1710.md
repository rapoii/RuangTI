# 1710 — Kebijakan Pemeliharaan Hierarkis Berpusat pada Keandalan guna Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *capital-intensive* dengan struktur biaya operasional yang sangat sensitif terhadap waktu dan keandalan. Pesawat komersial seperti Airbus A320 family atau Boeing 737 memiliki *fly-away cost* (biaya per unit) rata-rata USD 50–110 juta, sehingga *utilization rate* armada menjadi determinan utama profitabilitas operator. Setiap jam *ground-time* pesawat akibat inspeksi atau perbaikan yang tidak optimal dapat menyebabkan kerugian pendapatan sebesar USD 25.000–50.000 per jam untuk *narrow-body* pada rute padat, sehingga keputusan pemeliharaan memiliki konsekuensi ekonomi yang sangat material (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Zhou (2024) dalam karyanya menyoroti bahwa Reliability-Centred Maintenance (RCM) telah menjadi kerangka acuan utama dalam industri *asset-heavy* karena kemampuannya mengkuantifikasi degradasi kinerja *life-cycle* yang bersifat non-linear, sekaligus mengoptimalkan operasi dari aspek keselamatan dan ketersediaan (*availability*). Namun, implementasi RCM pada sistem kompleks seperti kebijakan MRO hierarkis A/B/C/D di sektor aviasi masih menghadapi tantangan besar, terutama dalam menentukan interval inspeksi yang optimal di antara *D-check* (overhaul besar) yang membutuhkan waktu *downtime* 1–2 bulan dan biaya USD 3–6 juta per pesawat (Zhou, 2024).

Permasalahan sentral yang diidentifikasi Zhou adalah bagaimana menyeimbangkan tiga dimensi yang saling bertentangan: pertama, **interval pemeliharaan preventif** yang terlalu pendek akan meningkatkan *availability loss* karena pesawat terlalu sering di-*ground*-kan; kedua, interval yang terlalu panjang akan meningkatkan probabilitas kegagalan tersembunyi (*hidden failure*) yang merugikan keselamatan dan meningkatkan biaya korektif; ketiga, terdapat *trade-off* antara *D-check* penuh yang mahal tetapi menjamin *reset* keandalan, dengan *partial refurbishment* selama fase *mature-run* yang lebih murah namun memberikan *refresh* parsial. Konteks operasional ini diperparah oleh fakta bahwa armada aviasi modern menggunakan arsitektur sistem yang sangat terdistribusi—dari struktur pesawat (*airframe*), *powerplant* (mesin), avionik, sistem hidrolik, hingga *landing gear*—yang masing-masing memiliki karakteristik degradasi dan dinamika kegagalan berbeda, sehingga kebijakan pemeliharaan tunggal tidak lagi memadai.

Kontributor Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) selanjutnya memperkuat argumen bahwa pendekatan hierarkis, di mana keputusan pemeliharaan setiap subsistem di-*couple* dengan kebijakan tingkat armada (*fleet-level*), mampu menghasilkan efisiensi yang tidak dapat dicapai oleh pendekatan *component-level* secara parsial. Urgensi ekonomis dan keselamatan ini menjadikan topik RCM hierarkis sebagai salah satu pilar rekayasa pemeliharaan kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Weibull untuk Subsistem Pesawat

Landasan teoretis utama paper Zhou (2024) menggunakan distribusi Weibull dua parameter untuk memodelkan reliabilitas setiap subsistem pesawat terbang. Fungsi reliabilitas (*survival function*) didefinisikan sebagai:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right], \quad t \geq 0$$

di mana $\beta > 0$ adalah parameter bentuk (*shape*) yang merepresentasikan karakteristik kegagalan: $\beta < 1$ menunjukkan *infant mortality* (penyakit muda), $\beta = 1$ menunjukkan laju kegagalan acak konstan (eksponensial), dan $\beta > 1$ menandakan *wear-out* (keausan). Parameter $\eta > 0$ adalah parameter skala (*scale*) dalam satuan jam terbang atau siklus, dengan interpretasi $\eta \approx$ usia karakteristik kegagalan.

Laju kegagalan sesaat (*hazard rate*) kemudian menjadi:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Fungsi densitas kegagalan:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

### 2.2 Hirarki Kebijakan A/B/C/D

Zhou (2024) memformalkan kebijakan hierarkis dengan empat tingkat intervensi yang berbeda dalam cakupan dan biaya. Durasi inspeksi efektif ($d_i$) untuk setiap tingkat pemeliharaan dimodelkan sebagai:

$$T_{\text{down},i} = \int_{0}^{T_i} (1 - A_i(\tau)) \, d\tau$$

di mana $A_i(\tau)$ adalah availabilitas sesaat selama siklus ke-$i$. Untuk hierarki A/B/C/D, berlaku relasi:

$$T_D > T_C > T_B > T_A, \quad C_D > C_C > C_B > C_A$$

di mana $T_i$ adalah interval waktu antara inspeksi tingkat-$i$ dan $C_i$ adalah biaya per inspeksi.

### 2.3 Model Availabilitas Steady-State

Availabilitas intrinsik pesawat pada tingkat subsistem ke-$k$ didefinisikan oleh Zhou sebagai:

$$A_k = \frac{\text{MTBF}_k}{\text{MTBF}_k + \text{MDT}_k} = \frac{1}{1 + \frac{\text{MDT}_k}{\mu_k \cdot T_k}}$$

di mana $\text{MTBF}_k$ adalah *Mean Time Between Failures* subsistem ke-$k$, $\text{MDT}_k$ adalah *Mean Downtime*, $\mu_k$ adalah laju perbaikan, dan $T_k$ adalah interval inspeksi preventif. Untuk *fleet-level* dengan $N$ subsistem independen yang terhubung secara seri (konfigurasi khas pesawat), availabilitas total menjadi:

$$A_{\text{fleet}} = \prod_{k=1}^{N} A_k = \prod_{k=1}^{N} \frac{1}{1 + \frac{\text{MDT}_k}{\mu_k \cdot T_k}}$$

### 2.4 Fungsi Objektif Optimasi

Zhou (2024) menyatakan bahwa tujuan optimasi adalah memaksimumkan *Maximum Available Operation Time* (MAOT) di bawah kendala biaya. Formulasi optimasi nonlinier adalah:

$$\max_{T_A, T_B, T_C, T_D} \quad \mathcal{A}(T_A, T_B, T_C, T_D) = \frac{T_{\text{operational}}}{T_{\text{operational}} + T_{\text{down}}}$$

*subject to:*

$$C_{\text{total}}(T_A, T_B, T_C, T_D) = \sum_{i \in \{A,B,C,D\}} \frac{N_i \cdot C_i}{T_i} \leq C_{\text{budget}}$$

$$T_A < T_B < T_C < T_D, \quad T_i \in \mathbb{Z}^+$$

### 2.5 Model Partial Refurbishment (D-Check Parsial)

Inovasi utama Zhou (2024) adalah penggabungan *partial refurbishment* selama fase *mature-run*, di mana reliabilitas sistem di-*reset* secara parsial menggunakan faktor rejuvenation $\alpha \in (0,1)$:

$$R_{\text{after-partial}}(t) = R(t)^{\alpha} = \exp\left[-\alpha \left(\frac{t}{\eta}\right)^{\beta}\right]$$

Efek ini menurunkan laju kegagalan efektif:

$$\lambda_{\text{eff}}(t) = \alpha \cdot \lambda(t) = \alpha \cdot \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Ketika $\alpha = 1$, tidak ada rejuvenasi (tanpa pemeliharaan), dan ketika $\alpha \to 0$, sistem mendekati kondisi *as-good-as-new*. Untuk *D-check* penuh, $\alpha_D \approx 0$, sedangkan untuk *partial refurbishment* di antara siklus, $0 < \alpha_{\text{partial}} < 1$.

### 2.6 Eksistensi Nilai Optimal

Zhou (2024) membuktikan secara analitis bahwa fungsi availabilitas memiliki nilai optimal tunggal, yang diturunkan melalui kondisi orde pertama. Turunan parsial:

$$\frac{\partial \mathcal{A}}{\partial T_i} = \frac{T_{\text{down}} \cdot \frac{\partial T_{\text{operational}}}{\partial T_i} - T_{\text{operational}} \cdot \frac{\partial T_{\text{down}}}{\partial T_i}}{\left(T_{\text{operational}} + T_{\text{down}}\right)^2} = 0$$

menghasilkan kondisi optimal:

$$\frac{\partial T_{\text{operational}}/\partial T_i}{\partial T_{\text{down}}/\partial T_i} = \frac{T_{\text{operational}}}{T_{\text{down}}}$$

yang menjamin eksistensi titik interior maksimum pada interval $T_i$ yang feasible (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Empat Tahap

Zhou (2024) mengusulkan arsitektur implementasi RCM hierarkis yang terdiri dari empat tahap sistematis:

**Tahap 1 — Pengumpulan Data Telemetri & Historis.**
Data *time-on-wing*, *flight cycles*, riwayat kegagalan, dan jam operasional setiap pesawat dikumpulkan dari sistem *Aircraft Health Monitoring* (AHM) dan *Centralized Fault Display System* (CFDS). Parameter Weibull $(\beta_k, \eta_k)$ untuk setiap subsistem ke-$k$ diestimasi menggunakan *Maximum Likelihood Estimation* (MLE):

$$\hat{\beta}_k, \hat{\eta}_k = \arg\max_{\beta, \eta} \prod_{j=1}^{n_k} f(t_j; \beta, \eta)^{[status_j=1]} \cdot R(t_j; \beta, \eta)^{[status_j=0]}$$

di mana $status_j = 1$ jika kegagalan teramati (uncensored) dan $status_j = 0$ jika data tersensor.

**Tahap 2 — Klasifikasi Subsistem & Penentuan Hirarki.**
Setiap subsistem diklasifikasikan ke dalam salah satu dari empat tingkat intervensi berdasarkan:
- *Criticality* terhadap keselamatan (Failure Mode and Effects Analysis / FMEA)
- Biaya inspeksi vs. biaya kegagalan
- Visibilitas kegagalan (*evident* vs. *hidden*)

**Tahap 3 — Optimasi Interval Inspeksi.**
Menggunakan algoritma *Dynamic Programming* atau *Sequential Quadratic Programming* (SQP) untuk menyelesaikan masalah optimasi nonlinier pada persamaan $\max \mathcal{A}(T_A, T_B, T_C, T_D)$ di bawah kendala biaya.

**Tahap 4 — Implementasi & Monitoring Berkelanjutan.**
Interval optimal diimplementasikan dalam *Maintenance Planning System* (misalnya AMOS atau SAP PM), dengan *feedback loop* untuk re-estimation parameter setiap 6 bulan berdasarkan *in-service* performance.

### 3.2 Diagram Alir Logika Pengambilan Keputusan

```
┌─────────────────────────────────────────────────────────┐
│ INPUT: Data historis armada (flight hours, cycles)      │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 1: Estimasi parameter Weibull per subsistem       │
│          Menggunakan MLE pada data censored              │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 2: FMEA + Criticality Analysis                    │
│          → Klasifikasi ke A/B/C/D hierarchy             │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 3: Formulasi & solusi optimasi                    │
│          max A(T_A,T_B,T_C,T_D) s.t. biaya ≤ budget    │
│          → Validasi eksistensi nilai optimal            │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 4: Integrasi dengan MRO schedule & feedback loop  │
│          Monitoring → Re-estimation → Adjustment        │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Prosedur Partial Refurbishment pada Fase Mature-Run

Zhou (2024) memperkenalkan prosedur operasional standar untuk *partial refurbishment* yang dilakukan di antara *D-check* penuh. Prosedur ini mensyaratkan:

1. **Inspeksi Visual & Non-Destructive Testing (NDT):** ultrasonik, eddy current, dan boroskop untuk komponen struktural kritis.
2. **Rejuvenation Berbasis-DATA:** komponen dengan degradasi terukur di atas ambang 70% wear diganti.
3. **Update *Health Records*** dengan parameter Weibull baru pasca-intervensi.
4. **Validasi availabilitas** menggunakan persamaan $\lambda_{\text{eff}}(t)$ yang telah direjuvenasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter Kasus Hipotetis-Sejati

Untuk mengilustrasikan implementasi model Zhou (2024), kami menyajikan studi kasus berbasis parameter