# 2318 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi di Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi di Sektor Aviation Maintenance, Repair, and Overhaul (MRO)
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri Maintenance, Repair, and Overhaul (MRO) penerbangan global merupakan salah satu ekosistem rekayasa paling kompleks dengan nilai pasar yang melampaui USD 100 miliar per tahun, di mana keputusan pemeliharaan satu komponen kritis pesawat terbang dapat mempengaruhi keselamatan ratusan jiwa, profitabilitas maskapai, dan keandalan rantai pasok global. Zhou (2024) dalam papernya yang berjudul *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyoroti bahwa meskipun *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka kerja baku dalam industri padat-aset karena kemampuannya mengkuantifikasi degradasi kinerja siklus hidup yang bersifat non-linear, implementasinya pada sistem kompleks seperti kebijakan MRO hirarkis A/B/C/D pada sektor aviasi masih menghadapi tantangan signifikan.

Konteks operasional yang melatarbelakangi riset ini adalah kenyataan bahwa operator armada penerbangan modern—baik *low-cost carrier* maupun *full-service airline*—mengelola siklus pemeliharaan bertingkat yang secara konvensional diklasifikasikan menjadi empat tingkat: A-Check (rutin, interval pendek, biasanya setiap 400–600 flight hours), B-Check (lebih komprehensif, interval menengah, setiap 6–8 bulan), C-Check (ekstensif, inspeksi struktural dan sistem, setiap 20–24 bulan), serta D-Check (overhaul penuh atau *heavy maintenance visit*, setiap 6–12 tahun). Zhou (2024) menekankan bahwa tantangan utama terletak pada pengintegrasian siklus D-Check yang melakukan *refurbishment* penuh dengan *partial refurbishment* yang dilakukan pada fase *mature-run* operasi, sehingga membentuk trade-off antara ketersediaan armada (*fleet availability*), biaya siklus hidup, dan tingkat keselamatan.

Urgensi ekonomis dari optimalisasi kebijakan ini sangat substansial. Setiap jam *ground time* pesawat narrow-body menghasilkan potensi kehilangan pendapatan sebesar USD 5.000–15.000, sementara untuk wide-body dapat mencapai USD 25.000–50.000 per jam. Dengan armada global yang beroperasi lebih dari 28.000 pesawat komersial, peningkatan ketersediaan sebesar 1% saja berpotensi menghemat miliaran dolar secara agregat. Lebih jauh, paper Zhou (2024) terdokumentasi pada DOI sekunder [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) menyoroti bahwa optimalisasi tersebut tidak hanya mengejar efisiensi biaya, melainkan juga memenuhi regulasi ketat dari otoritas penerbangan seperti FAA, EASA, dan CASA yang mengharuskan setiap *aircraft maintenance program* berbasis pada analisis keandalan kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model RCM hirarkis dengan menggunakan landasan teori *renewal reward process* dan *non-homogeneous Poisson process* (NHPP) untuk menangkap karakteristik degradasi non-linear. Fungsi laju kegagalan (*failure rate*) komponen pesawat umumnya dimodelkan dengan distribusi Weibull dua parameter:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) yang menentukan karakteristik degradasi (wear-in, *random failure*, atau wear-out), dan $\eta$ adalah *scale parameter* atau *characteristic life*. Untuk komponen kritis pesawat dengan pola degradasi *wear-out*, $\beta > 1$, sehingga $\lambda(t)$ meningkat secara monoton seiring waktu operasi.

Fungsi keandalan (*reliability function*) sistem pada waktu $t$ kemudian dinyatakan sebagai:

$$R(t) = e^{-\int_0^t \lambda(u) \, du} = e^{-\left(\frac{t}{\eta}\right)^\beta}$$

Zhou (2024) memperkenalkan ketersediaan sesaat (*instantaneous availability*) armada yang didefinisikan sebagai rasio antara *mean uptime* (MUT) dan total *cycle time* (MUT + *mean downtime*/MDT):

$$A(t) = \frac{\text{MUT}}{\text{MUT} + \text{MDT}} = \frac{\int_0^t R(u) \, du}{\int_0^t R(u) \, du + \sum_{i \in \{A,B,C,D\}} \mathbb{1}_i \cdot T_i^{\text{down}}}$$

di mana $\mathbb{1}_i$ adalah *indicator function* yang bernilai 1 jika check ke-$i$ sedang berlangsung pada interval waktu yang dipertimbangkan, dan $T_i^{\text{down}}$ adalah durasi *downtime* untuk check tingkat ke-$i$.

Formulasi inti yang menjadi kontribusi utama paper adalah masalah optimasi ketersediaan *life-cycle* dengan variabel keputusan berupa interval antar-pemeliharaan $(\tau_A, \tau_B, \tau_C, \tau_D)$ dan jumlah *partial refurbishment* $n_p$ yang dilakukan di antara dua *D-Check* penuh:

$$\max_{\tau_A, \tau_B, \tau_C, \tau_D, n_p} \quad \bar{A}_L = \frac{1}{L} \int_0^L A(t) \, dt$$

$$\text{subject to:} \quad \sum_{i=1}^{4} C_i \cdot N_i \leq C_{\text{budget}}, \quad \text{Safety}_{\text{min}} \geq \sigma_{\text{crit}}$$

di mana $L$ adalah panjang siklus hidup pesawat, $C_i$ adalah biaya per check tingkat ke-$i$, $N_i$ adalah jumlah check tingkat ke-$i$ dalam periode $[0, L]$, $C_{\text{budget}}$ adalah konstrain anggaran, dan $\sigma_{\text{crit}}$ adalah ambang batas keselamatan minimum yang diregulasikan.

Zhou (2024) membuktikan secara analitis keberadaan nilai optimal $\bar{A}_L^*$ melalui argumen bahwa fungsi tujuan adalah *quasi-concave* pada domain himpunan feasible, yang dibuktikan melalui kondisi *Karush-Kuhn-Tucker* (KKT) berikut:

$$\frac{\partial \bar{A}_L}{\partial \tau_k} - \mu \frac{\partial}{\partial \tau_k}\left(\sum_{i} C_i N_i - C_{\text{budget}}\right) = 0, \quad \forall k \in \{A,B,C,D\}$$

dengan $\mu \geq 0$ sebagai *Lagrange multiplier* yang merepresentasikan *shadow price* dari konstrain anggaran. Lebih lanjut, paper memperkenalkan konsep *effective availability ratio* (EAR) yang menormalisasi ketersediaan terhadap *mission completion rate*:

$$\text{EAR} = A \cdot P(\text{mission success} \mid \text{no critical failure})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti kerangka SOP yang diuraikan oleh Zhou (2024) dalam alur keputusan berikut:

**Tahap 1 — Identifikasi Sistem dan Subsistem Kritis.** Operator armada melakukan *Failure Modes, Effects, and Criticality Analysis* (FMECA) untuk seluruh *line replaceable unit* (LRU) dan *shop replaceable unit* (SRU) pada armada. Setiap komponen diberi skor *Risk Priority Number* (RPN):

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *severity*, $O$ adalah *occurrence*, dan $D$ adalah *detectability*. Komponen dengan RPN $\geq 100$ diklasifikasikan sebagai *critical items* yang wajib masuk dalam *MSG-3* task package.

**Tahap 2 — Penentuan Interval Pemeliharaan Optimal.** Berdasarkan data historis telemetri dan *Onboard Maintenance System* (OMS), parameter Weibull $(\beta, \eta)$ diestimasi menggunakan *Maximum Likelihood Estimation* (MLE):

$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta, \eta} \prod_{j=1}^{n} f(t_j \mid \beta, \eta)$$

dengan fungsi densitas $f(t \mid \beta, \eta) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^\beta}$. Interval check kemudian ditentukan dengan menyeimbangkan dua tujuan yang saling bertentangan: meningkatkan ketersediaan (interval panjang) versus mengurangi risiko kegagalan mendadak (interval pendek).

**Tahap 3 — Penjadwalan D-Check dan Partial Refurbishment.** Zhou (2024) memperkenalkan *decision tree* empat tingkat dengan *branching logic* sebagai berikut:

```
[Fleet Status Check]
      │
      ├── Utilization > threshold ──► Schedule A-Check (τ_A)
      ├── Cumulative FH > τ_B ──► Schedule B-Check (τ_B)
      ├── Calendar time > τ_C ──► Schedule C-Check (τ_C)
      ├── Cycles since last D > τ_D ──► 
      │         │
      │         ├── n_p partial refurb. completed = k ──► Schedule D-Check
      │         └── k < k_max ──► Execute partial refurbishment
      └── No trigger ──► Continue line maintenance
```

**Tahap 4 — Monitoring & Feedback Loop.** Kinerja sistem pemeliharaan dipantau melalui *Key Performance Indicators* (KPI): *Aircraft Availability* ($A_{\text{actual}}$), *Dispatch Reliability* ($D_R = 1 - P(\text{technical delay} > 15 \text{ min})$), dan *Mean Time Between Unscheduled Removals* (MTBUR). Data aktual ini kemudian di-*feed back* ke model untuk *re-estimation* parameter dan *policy refinement* secara berkala setiap 6 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi penerapan, perhatikan kasus sebuah operator *low-cost carrier* yang mengelola 50 unit armada Airbus A320 dengan parameter tipikal berikut:

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| Rata-rata *flight hours* per hari | 10 jam | Utilisasi harian |
| $\eta$ (komponen struktural) | 18.000 FH | *Characteristic life* |
| $\beta$ (komponen struktural) | 2,4 | Wear-out dominan |
| $T_A$ (durasi A-Check) | 24 jam | Downtime |
| $T_B$ (durasi B-Check) | 72 jam | Downtime |
| $T_C$ (durasi C-Check) | 720 jam (~30 hari) | Downtime |
| $T_D$ (durasi D-Check) | 7.200 jam (~300 hari) | Downtime |
| $C_A, C_B, C_C, C_D$ | 50; 200; 800; 5.000 (×USD 1.000) | Biaya per check |
| $C_{\text{budget}}$/siklus | USD 60 juta | Anggaran total |
| $L$ (siklus hidup) | 60.000 FH | ~16 tahun operasi |

**Langkah 1: Estimasi Laju Kegagalan dan Keandalan.**

Untuk komponen struktural dengan $\eta = 18.000$ dan $\beta = 2,4$, laju kegagalan pada $t = 12.000$ FH adalah:

$$\lambda(12.000) = \frac{2,4}{18.000}\left(\frac{12.000}{18.000}\right)^{2,4-1} = 1{,}333 \times 10^{-4} \times 0{,}667^{1,4}$$

$$= 1{,}333 \times 10^{-4} \times 0{,}575 = 7{,}67 \times 10^{-5} \text{ per FH}$$

Keandalan pada saat tersebut:

$$R(12.000) = e^{-(12.000/18.000)^{2,4}} = e^{-0,667^{2,4}} = e^{-0,396} = 0{,}673$$

**Langkah 2: Penentuan Interval Check Optimal.**

Dengan menyetel $\bar{A}_L = 0,92$ sebagai target dan menggunakan solver numerik, diperoleh interval optimal: $\tau_A = 500$ FH, $\tau_B = 3.000$ FH, $\tau_C = 12.000$ FH, dan $\tau_D = 36.000$ FH dengan $n_p = 2$ *partial refurbishment* di antara dua *D-Check*.

Jumlah check per siklus hidup $L = 60.000$ FH:

$$N_A = \lfloor 60.000/500 \rfloor = 120,