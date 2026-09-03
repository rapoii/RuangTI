# 1598 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN — versi awal)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *capital-intensive* dengan tingkat kompleksitas operasional tertinggi di dunia. Sebuah armada pesawat窄-body (misalnya Boeing 737 atau Airbus A320) memiliki nilai per unit yang melampaui USD 100 juta, sementara armada wide-body (Boeing 777, 787, Airbus A350) bahkan menyentuh kisaran USD 300–400 juta per unit pada tahun 2024. Oleh karena itu, keputusan pemeliharaan bukan sekadar keputusan teknis, melainkan keputusan *fleet-level strategic investment* yang menentukan profitabilitas operator. Hang Zhou (2024) dalam makalahnya di *Peer-Reviewed Journal* (DOI: 10.2139/ssrn.6387479) menekankan bahwa **Reliability-Centered Maintenance (RCM)** — yang secara historis lahir dari program *Maintenance Steering Group (MSG-3)* untuk regulator FAA pada tahun 1970-an (Nowlan & Heap, 1978) — tetap menjadi kerangka kerja paling otoritatif untuk mengkuantifikasi degradasi non-linier pada performa siklus-hidup aset penerbangan, sekaligus mengoptimasi keselamatan dan ketersediaan (*availability*) armada.

Urgensi ekonomi dari studi ini muncul dari kenyataan bahwa downtime pesawat akibat parkir pemeliharaan (*maintenance-induced ground time*) dapat mencapai 15–25% dari total kalender tahun, sehingga setiap peningkatan 1% pada *fleet availability* berpotensi menambah pendapatan rute senilai ratusan juta USD per tahun bagi maskapai besar. Kompleksitasnya bertambah ketika dimasukkan kebijakan pemeliharaan hirarkis A/B/C/D yang telah menjadi standar de-facto industri: **A-check** dilakukan setiap 400–600 flight hours (FH), **B-check** setiap 6–8 bulan, **C-check** setiap 20–24 bulan dengan downtime 1–2 minggu, dan **D-check** (heavy maintenance visit) setiap 6–12 tahun dengan downtime 1–2 bulan. Zhou (2024) secara eksplisit mengakui bahwa "RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector" (Zhou, 2024, abstrak). Kutipan ini menjadi justifikasi utama mengapa diperlukan kerangka matematis hirarkis yang menggabungkan siklus D-check penuh dengan refurbishment parsial selama fase mature-run operasi pesawat.

Secara strategis, paper Zhou (2024) menyasar tiga *pain points* operator penerbangan: (i) optimalisasi penjadwalan life-cycle maintenance checks berbasis *maximum available operation time*, (ii) pembuktian eksistensi nilai optimum pada model ketersediaan, dan (iii) integrasi antara *fully refurbished D-check cycles* dengan *partial refurbishments* yang memungkinkan perpanjangan interval antar-D-check tanpa mengorbankan margin keselamatan struktural. Versi revisi (DOI: 10.2139/ssrn.5291672) menunjukkan kesinambungan riset ini dalam menstandardisasi pendekatan agar dapat diadopsi secara luas oleh komunitas MRO.

---

## 2. Landasan Teori & Formulasi Matematis

Model kuantitatif yang dikembangkan Zhou (2024) berakar pada teori ketersediaan stasioner (*steady-state availability*) dan pemodelan degradasi non-linier berbasis distribusi Weibull. Untuk satu siklus pemeliharaan gabungan, ketersediaan sesaat $A(t)$ didefinisikan sebagai:

$$A(t) = \frac{T_{up}(t)}{T_{up}(t) + T_{down}(t)} = \frac{\int_0^t [1 - \mathbb{1}_{m}(\tau)] \, d\tau}{\int_0^t [1 - \mathbb{1}_{m}(\tau)] \, d\tau + \int_0^t \mathbb{1}_{m}(\tau) \, d\tau}$$

di mana $\mathbb{1}_{m}(\tau)$ adalah *indicator function* bernilai 1 ketika aset dalam mode pemeliharaan pada waktu $\tau$, dan 0 sebaliknya. Untuk kebijakan hirarkis A/B/C/D, variabel keputusan utama adalah jumlah siklus A-check ($n_A$), B-check ($n_B$), C-check ($n_C$), dan D-check ($n_D$) dalam satu *horizon planning* $T$.

Reliabilitas komponen individual selama interval antar-pemeliharaan mengikuti bentuk Weibull dua-parameter:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \eta > 0$$

di mana $\beta$ adalah *shape parameter* (untuk *wear-out phase* biasanya $\beta > 1$) dan $\eta$ adalah *scale parameter* (characteristic life). Ketika sistem berada dalam regime mature-run, parameter $\beta$ menurun mendekati 1 (mendekati eksponensial), menandakan bahwa proses refurbishment parsial efektif menghilangkan *memory* degradasi kumulatif.

Fungsi tujuan (*objective function*) yang ingin dimaksimumkan adalah ketersediaan siklus-hidup jangka panjang:

$$\max_{n_A, n_B, n_C, n_D} \; \mathcal{A}(n_A, n_B, n_C, n_D) = \frac{\sum_{i \in \{A,B,C,D\}} n_i \cdot T_i^{op}}{\sum_{i \in \{A,B,C,D\}} n_i \cdot \left(T_i^{op} + T_i^{m}\right)}$$

dengan kendala:

$$\text{(Kendala 1: Safety)} \; \quad R_i(t_i^{op}) \geq R_{min}^{(i)}, \quad \forall i \in \{A,B,C,D\}$$

$$\text{(Kendala 2: Budget)} \; \quad \sum_{i} n_i \cdot C_i \leq B_{total}$$

$$\text{(Kendala 3: Regulasi)} \; \quad t_i^{op} \leq t_i^{max,regulasi}$$

di mana $t_i^{op}$ adalah interval operasi, $C_i$ adalah biaya per-siklus, dan $t_i^{max,regulasi}$ adalah batas maksimum yang diizinkan regulator (misalnya FAA, EASA).

Zhou (2024) lebih lanjut mendemonstrasikan bahwa karena $\mathcal{A}$ bersifat *quasi-concave* terhadap masing-masing $n_i$ pada domain kendala yang kompak, maka **nilai optimum global $\mathcal{A}^\*$ pasti ada** dan dapat dicari melalui *nested optimization*: optimasi tingkat dalam untuk siklus A/B/C (line maintenance), dan tingkat luar untuk interval D-check dengan kemungkinan *partial refurbishment* di antaranya. Bukti eksistensi ini merupakan kontribusi teoretis utama paper, yang dinyatakan secara eksplisit: *"the existence of an optimal value for the availability model is demonstrated"* (Zhou, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model Zhou (2024) mengikuti kerangka lima tahap yang merupakan adaptasi dari *MSG-3 logic decision tree* dan prinsip RCM SAE JA1011/JA1012:

**Tahap 1 — Inventarisasi Sistem & Fungsi Kritis.** Tim *engineering planning* bersama OEM (Boeing/Airbus/Embraer) memetakan seluruh *significant items* pesawat (SSIs) dan mengklasifikasikannya ke dalam delapan ATA Chapter (Air Transport Association) utama: struktur (ATA 53), sistem hidrolik (ATA 29), avionik (ATA 22), propulsi (ATA 71), dsb.

**Tahap 2 — Penentuan Tipe Kegagalan & Mode.** Setiap SSI dianalisis menggunakan *Failure Modes, Effects and Criticality Analysis (FMECA)* untuk menentukan apakah kegagalan bersifat *evident* (aman) atau *hidden* (berbahaya).

**Tahap 3 — Pengumpulan Data Degradasi.** Data historis dari *Electronic Maintenance Records (EMR)*, *Airborne Vibration Monitoring (AVM)*, dan *Structural Health Monitoring (SHM)* digunakan untuk mengestimasi parameter Weibull $(\beta_i, \eta_i)$ per komponen.

**Tahap 4 — Penjadwalan Hirarkis & Optimasi.** Algoritma optimasi (misalnya *Sequential Quadratic Programming* atau *Genetic Algorithm* untuk kasus non-konveks) dijalankan untuk menentukan $n_A^\*, n_B^\*, n_C^\*, n_D^\*$ yang memaksimalkan $\mathcal{A}$ sambil memenuhi kendala keselamatan, regulasi, dan budget.

**Tahap 5 — Implementasi, Monitoring & Feedback Loop.** Hasil optimasi diterjemahkan menjadi *Maintenance Planning Document (MPD)* baru, dengan *key performance indicators* (KPI): *dispatch reliability* (target ≥ 99,2%), *on-time departure*, dan *schedule completion rate*.

Diagram alur proses (logic flow) untuk satu siklus gabungan:

```
┌──────────────────────┐
│  Pesawat Rilis Layak │
└──────────┬───────────┘
           ▼
   [A-check rutin, t_A]
           ▼
   [B-check teragregasi]
           ▼
   [C-check mayor, 20-24 bulan]
           ▼
   [Partial Refurbishment?]
     ├── Ya → [kembali ke operasional, t_C/2]
     └── Tidak → 
           ▼
   [D-check penuh, 6-12 tahun]
           ▼
   [Siklus berulang ↺]
```

*Partial refurbishment* dilakukan ketika kurva degradasi aktual masih berada di bawah threshold kritis $R_{min}$, sehingga interval D-check efektif dapat diperpanjang tanpa melanggar batas structural fatigue (misalnya berdasarkan *life-limited parts* dan *fatigue critical baseline structure*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator low-cost carrier mengelola 50 unit armada Airbus A320ceo dengan utilisasi rata-rata 3.000 flight hours/tahun. Data historis menunjukkan parameter Weibull untuk komponen struktural kritis: $\beta = 2{,}4$, $\eta = 28.000$ FH. Biaya dan durasi tipikal ditabulasikan sebagai berikut:

| Tipe Check | Interval ($t^{op}$) | Downtime ($T^{m}$) | Biaya ($C$) per siklus |
|---|---|---|---|
| A-check | 500 FH | 8 jam | USD 12.000 |
| B-check | 8 bulan | 24 jam | USD 35.000 |
| C-check | 24 bulan | 360 jam | USD 850.000 |
| D-check | 9 tahun (27.000 FH) | 1.440 jam | USD 4.500.000 |

**Langkah 1 — Hitung reliabilitas pada interval rencana.** Untuk C-check dengan interval 24 bulan (~6.000 FH):

$$R_{C}(6.000) = e^{-\left(\frac{6.000}{28.000}\right)^{2,4}} = e^{-(0{,}2143)^{2,4}} = e^{-0{,}0243} \approx 0{,}9760$$

Karena $R_C > 0{,}95$, C-check aman dilakukan sesuai jadwal standar.

**Langkah 2 — Hitung ketersediaan satu siklus penuh (9 tahun = 27.000