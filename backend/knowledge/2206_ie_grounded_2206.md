# 2206 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sektor *capital-intensive* dengan struktur biaya tetap yang sangat tinggi, di mana ketersediaan (*availability*) armada pesawat terbang menentukan profitabilitas, tingkat pelayanan, dan reputasi keselamatan operator. Dalam konteks operasional maskapai, satu unit pesawat narrow-body bernilai ratusan juta dolar AS dan setiap jam *ground time* akibat pemeliharaan korektif (*corrective maintenance*) atau inspeksi terjadwal (*scheduled maintenance*) dapat menimbulkan kerugian pendapatan langsung sebesar USD 50.000–180.000 per jam tergantung rute dan kelas pesawat (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Oleh sebab itu, kebijakan pemeliharaan yang optimal bukan sekadar keputusan teknikal, melainkan keputusan strategis yang bersifat *multi-objective*: menyeimbangkan keselamatan, ketersediaan, biaya siklus hidup (*life-cycle cost*), dan tingkat degradasi non-linear performa subsistem pesawat.

Secara historis, sektor aviasi mengadopsi skema inspeksi berbasis kalender dan jam terbang yang terdiri atas empat tingkatan hierarkis: **A-check** (ringan, periodik pendek), **B-check** (menengah), **C-check** (berat, sebagian besar subsistem dibongkar-pasang), dan **D-check** (overhaul total atau refurbishment penuh). Akan tetapi, kebijakan A/B/C/D konvensional yang diterapkan secara seragam pada seluruh armada seringkali gagal menangkap sifat degradasi yang non-linear — di mana laju kegagalan (*failure rate*) komponen tidak mengikuti pola linear terhadap waktu atau siklus, melainkan berubah secara signifikan setelah melewati *infant-mortality*, *useful-life*, dan *wear-out phase*. *Reliability-Centered Maintenance* (RCM), yang awalnya dikembangkan dari standar SAE JA1011/SAE JA1012 dan diadaptasi oleh FAA serta IATA untuk industri aviasi, muncul sebagai kerangka analitis yang menjawab keterbatasan tersebut dengan memprioritaskan tugas pemeliharaan berdasarkan konsekuensi kegagalan (*failure consequences*) dan profil keandalan intrinsik setiap komponen.

Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan kerangka kebijakan MRO yang secara eksplisit mengintegrasikan siklus D-check penuh (*fully refurbished D-check cycles*) dengan refurbishment parsial (*partial refurbishment*) pada fase *mature-run* operasional pesawat. Masalah optimasi yang diangkat adalah penentuan interval penjadwalan yang memaksimalkan *available operation time*, dengan tetap membuktikan secara matematis keberadaan nilai optimum untuk model ketersediaan. Temuan ini penting karena menyajikan transisi dari pendekatan *fixed-schedule* menuju *condition-based* dan *reliability-driven scheduling* yang adaptif terhadap dinamika degradasi komponen, sehingga mengurangi *unnecessary maintenance* sekaligus menekan risiko *failure in service* yang berakibat fatal (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi dan Keandalan Komponen

Untuk menangkap perilaku degradasi non-linear, paper Zhou (2024) mengadopsi distribusi Weibull dua-parameter sebagai fungsi reliabilitas intrinsik komponen kritis pesawat:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \ \eta > 0$$

di mana $\beta$ adalah *shape parameter* (mencerminkan karakteristik keausan: $\beta<1$ menandakan *infant mortality*, $\beta=1$ laju kegagalan konstan, $\beta>1$ keausan meningkat seiring waktu), dan $\eta$ adalah *scale parameter* atau *characteristic life*. Laju kegagalan sesaat (*hazard rate*) menjadi:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Fungsi Ketersediaan Hirarkis A/B/C/D-check

Kebijakan pemeliharaan hierarkis didefinisikan oleh vektor interval inspeksi $\mathbf{T} = (T_A, T_B, T_C, T_D)$, di mana $T_A < T_B < T_C < T_D$. Total *uptime* selama satu siklus D-check penuh $T_D$ dapat diformulasikan sebagai:

$$U(T_D) = \int_0^{T_D} A(t, \mathbf{T}) \, dt$$

dengan ketersediaan sesaat:

$$A(t, \mathbf{T}) = \frac{\text{MTBF}(t)}{\text{MTBF}(t) + \text{MTTR}(t)}$$

Karena MTTR bervariasi menurut tingkat检修 (A-check ≈ 24–60 jam, C-check ≈ 1–2 minggu, D-check ≈ 1–2 bulan), maka ketersediaan rata-rata siklus menjadi:

$$\bar{A}(\mathbf{T}) = \frac{\sum_{k \in \{A,B,C,D\}} N_k \cdot T_k}{\sum_{k \in \{A,B,C,D\}} \left(N_k \cdot T_k + N_k \cdot \bar{D}_k\right)}$$

di mana $N_k$ adalah jumlah检修 tingkat-$k$ dalam satu siklus penuh, $T_k$ interval检修, dan $\bar{D}_k$ rerata *downtime* per检修 tingkat-$k$.

### 2.3 Formulasi Optimasi: Memaksimumkan Available Operation Time

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) merumuskan masalah optimasi sebagai:

$$\max_{\mathbf{T}} \ A_{cycle}(\mathbf{T}) = \frac{T_D - \sum_{k} N_k \bar{D}_k}{T_D}$$

dengan kendala:

$$\text{(i) Safety:} \quad R(T_k) \geq R_{\min,k}, \quad \forall k \in \{A,B,C,D\}$$

$$\text{(ii) Regulatory:} \quad T_k \leq T_{k,\text{regulatory}}$$

$$\text{(iii) Budget:} \quad \sum_{k} N_k C_k \leq C_{\text{budget}}$$

$$\text{(iv) Non-negativity:} \quad T_k > 0$$

di mana $R_{\min,k}$ adalah reliabilitas minimum yang disyaratkan regulator (FAA, EASA) untuk检修 tingkat-$k$, dan $C_k$ adalah biaya检修 per-event. Zhou (2024) membuktikan secara analitis bahwa fungsi tujuan memiliki nilai optimum interior, dengan kondisi *first-order necessary condition*:

$$\frac{\partial A_{cycle}}{\partial T_k} = 0, \quad k \in \{A,B,C,D\}$$

yang diselesaikan dengan menerapkan kalkulus variasi dan metode *Lagrange multiplier* untuk kendala regulasi dan anggaran.

### 2.4 Fungsi Biaya Siklus Hidup (LCC)

Total *Life-Cycle Cost* sepanjang umur pesawat $L$ (dalam tahun):

$$\text{LCC} = \int_0^L \left[C_{\text{pm}}(t) + C_{\text{cm}}(t) + C_{\text{down}}(t) + C_{\text{logistic}}(t)\right] dt$$

di mana $C_{\text{pm}}$ adalah biaya pemeliharaan preventif, $C_{\text{cm}}$ biaya korektif, $C_{\text{down}}$ biaya *downtime* (kehilangan pendapatan), dan $C_{\text{logistic}}$ biaya logistik suku cadang. Kebijakan optimal meminimalkan LCC dengan tetap memenuhi kendala ketersediaan $A_{cycle} \geq A_{\text{target}}$ (umumnya $A_{\text{target}} \geq 0.95$ untuk armada komersial).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hirarkis di industri MRO aviasi mengikuti alur rekayasa berikut, yang disusun berdasarkan kerangka Zhou (2024) dan standar internasional SAE JA1011, MSG-3 (Maintenance Steering Group), serta regulasi EASA Part-M:

**Tahap 1 — Sistem Boundary Definition & FMEA**
1. Definisikan *system boundary* (pesawat utuh → *zone* → *subsystem* → *component*).
2. Lakukan *Failure Modes and Effects Analysis* (FMEA) untuk mengidentifikasi mode kegagalan kritis.
3. Klasifikasikan mode kegagalan ke dalam kategori *evident*, *hidden*, dan *safety-critical* sesuai MSG-3.

**Tahap 2 — Reliability Block Diagram (RBD) & Profil Degradasi**
1. Bangun RBD untuk mengkuantifikasi reliabilitas sistem.
2. Estimasi parameter Weibull $(\beta_i, \eta_i)$ untuk setiap komponen $i$ menggunakan data historis fleet dan *Weibull++* / *RENO* / *ReliaSoft*.
3. Validasi dengan *Goodness-of-Fit test* (Anderson-Darling, Kolmogorov-Smirnov).

**Tahap 3 — Penentuan Interval Hierarkis Optimal**
1. Selesaikan masalah optimasi pada Persamaan (4) untuk mendapatkan $\mathbf{T}^* = (T_A^*, T_B^*, T_C^*, T_D^*)$.
2. Verifikasi bahwa $R(T_k^*) \geq R_{\min,k}$ untuk setiap tingkat检修.
3. Lakukan *sensitivity analysis* terhadap parameter biaya dan reliabilitas.

**Tahap 4 — Implementasi CMMS/EAM Integration**
1. Integrasikan jadwal检修 ke dalam *Computerized Maintenance Management System* (CMMS) atau *Enterprise Asset Management* (EAM) seperti SAP PM, RAMCO, atau AMOS.
2. Konfigurasikan *trigger* otomatis untuk检修 berbasis *condition monitoring* (sensor IoT, *on-board diagnostics*, *aircraft health monitoring*/AHM).
3. Tautkan dengan *logistic information system* untuk *just-in-time* suku cadang.

**Tahap 5 — Partial Refurbishment Insertion**
1. Pada fase *mature-run* (setelah 2–3 siklus D-check penuh), identifikasi subsistem dengan profil keausan terlokalisasi.
2. Sisipkan *partial refurbishment* (misalnya hanya *landing gear overhaul*, *APU replacement*, atau *engine borescope inspection*) tanpa membongkar total pesawat.
3. Perbarui $\mathbf{T}$ dengan memasukkan检修 parsial baru $T_{PR}$.

**Tahap 6 — Continuous Monitoring & Feedback Loop**
1. Kumpulkan data operasional aktual: *actual flight hours*, *unscheduled removal rates*, *MTBUR* (Mean Time Between Unscheduled Removals).
2. Bandingkan dengan prediksi model dan lakukan *Bayesian update* terhadap parameter $(\beta_i, \eta_i)$.
3. Re-optimasi berkala (tiap 6–12 bulan).

Diagram alir logika keputusan mengikuti struktur pohon MSG-3: identifikasi komponen signifikan → identifikasi mode kegagalan → penugasan tugas pemeliharaan (hard time, on-condition, atau failure-finding).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah mask