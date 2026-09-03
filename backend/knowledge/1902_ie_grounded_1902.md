# 1902 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (versi sebelumnya)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil komersial merupakan salah satu ekosistem *capital-intensive* dengan karakteristik teknis yang sangat khas: usia ekonomis armada yang panjang (umumnya 20–30 tahun), degradasi performa siklus-hidup (*life-cycle performance degradation*) yang bersifat **non-linear**, serta kewajiban regulatorik yang ketat dari otoritas seperti FAA, EASA, dan DGCA. Dalam konteks ini, Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)) menyoroti bahwa *Reliability-Centred Maintenance* (RCM) telah menjadi kerangka kerja yang dihormati luas di industri-industri padat-aset (*asset-heavy industries*) karena kemampuannya dalam **mengkuantifikasi degradasi non-linear performa siklus hidup** sekaligus mengoptimalkan operasi dari sisi keselamatan dan ketersediaan (*availability*).

Sektor MRO penerbangan secara konvensional mengadopsi kebijakan pemeliharaan **hirarkis A/B/C/D**, di mana setiap tingkat check memiliki interval, cakupan, dan dampak downtime yang berbeda secara eksponensial. Sebuah *A-check* dilakukan setiap ±400–600 jam terbang dengan downtime 24–50 jam; *B-check* setiap 6–8 bulan (downtime 100–250 jam); *C-check* setiap 20–24 bulan (downtime 1–3 minggu); serta *D-check* berupa *full refurbishment* yang dilakukan setiap 6–12 tahun dengan downtime 1–2 bulan. Tantangan manajerial yang diangkat oleh Zhou (2024) adalah bagaimana **mengoptimalkan penjadwalan check siklus-hidup** berbasis *maximum available operation time* ketika harus memasukkan kombinasi antara *full D-check* dan *partial refurbishments* selama fase *mature-run* operasi pesawat. Urgensi ekonominya sangat nyata: setiap jam *ground time* pesawat narrow-body bernilai ±USD 8.000–15.000, sedangkan wide-body mencapai USD 25.000–40.000, sehingga peningkatan 1% *fleet availability* pada armada 50 unit berpotensi menghemat USD 5–10 juta per tahun. Lebih jauh, paper ini berargumen bahwa meskipun RCM secara teoritis kuat, **implementasinya pada sistem kompleks hirarkis A/B/C/D masih menjadi *research gap*** yang signifikan, khususnya dalam membuktikan eksistensi nilai optimal model ketersediaan secara matematis rigor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Siklus Hidup

Zhou (2024) memodelkan degradasi reliabilitas komponen kritis menggunakan fungsi *power-law* yang merepresentasikan keausan *mature-run*:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dengan $R(t)$ adalah reliabilitas pada umur operasi $t$, $\beta > 1$ merepresentasikan **parameter bentuk degradasi non-linear** (weibull shape), dan $\eta$ adalah *characteristic life* (umur karakteristik dalam jam terbang atau siklus). Ketika $\beta > 1$, sistem memasuki fase *wear-out* di mana laju kegagalan meningkat secara akseleratif seiring waktu.

### 2.2 Model Ketersediaan Hirarkis A/B/C/D

Ketersediaan sesaat (*instantaneous availability*) sistem selama siklus $i$ didefinisikan sebagai:

$$A_i(t) = \frac{\text{MTBF}_i}{\text{MTBF}_i + \text{MDT}_i}$$

dengan $\text{MTBF}_i$ adalah *Mean Time Between Failures* pada tingkat check $i \in \{A, B, C, D\}$ dan $\text{MDT}_i$ adalah *Mean Downtime* untuk perbaikan/preventif. Untuk kebijakan hirarkis, ketersediaan armada rata-rata (*fleet availability*) menjadi:

$$\bar{A}_F = \frac{\sum_{i=A}^{D} \alpha_i \cdot U_i}{\sum_{i=A}^{D} \alpha_i \cdot (U_i + D_i)}$$

di mana $\alpha_i$ adalah bobot kontribusi tingkat check $i$, $U_i$ adalah *uptime* ekspektasian, dan $D_i$ adalah *downtime*.

### 2.3 Formulasi Optimasi Maksimasi Ketersediaan

Masalah optimasi inti yang diselesaikan Zhou (2024) adalah menentukan interval check optimal $T_i^*$ yang memaksimalkan *long-run average availability*:

$$\max_{T_A, T_B, T_C, T_D} \; \bar{A}_F(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad T_A \leq T_B \leq T_C \leq T_D$$

$$\sum_{i=A}^{D} C_i(T_i) \leq C_{budget}$$

$$\bar{A}_F \geq A_{min}$$

Zhou (2024) membuktikan secara analitis bahwa **fungsi objektif bersifat quasi-konkav** pada domain kendala, sehingga **nilai optimal $T_i^*$ ada dan unik** (*existence and uniqueness of optimal solution*). Ini merupakan kontribusi teoretis penting karena memecahkan kritik klasik terhadap RCM yang dianggap *lacking formal optimization guarantees*.

### 2.4 Model Biaya Siklus Hidup Total

$$C_{LC} = \sum_{i=A}^{D} \left( C_{insp,i} + C_{part,i} \cdot N_{part,i}(T_i) + C_{DT,i} \cdot D_i(T_i) \right) + C_{D-check}^{full}$$

dengan $C_{insp,i}$ adalah biaya inspeksi, $C_{part,i}$ adalah biaya komponen, $N_{part,i}$ adalah jumlah part replacement yang merupakan fungsi dari interval check, dan $C_{DT,i}$ adalah biaya downtime.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti kerangka tujuh-langkah *MSG-3* yang diadopsi global oleh FAA/EASA, yang diperluas oleh Zhou (2024) dengan modul optimasi ketersediaan:

**Langkah 1 — Identifikasi Sistem & Subsistem.** Inventarisasi *ATA Chapter* (Air Transport Association) untuk seluruh sistem pesawat, mulai dari fuselage (ATA 53), powerplant (ATA 70), avionik (ATA 22–34), hingga sistem hidrolik (ATA 29). Setiap sistem diberi *Failure Mode and Effects Analysis* (FMEA) kuantitatif.

**Langkah 2 — Penentuan Fungsi Signifikan.** Klasifikasikan item berdasarkan konsekuensi kegagalannya: keselamatan (Safety), operasional (Operational), ekonomis (Economic), atau hanya kenyamanan.

**Langkah 3 — Penentuan *Failure Modes*.** Menggunakan teknik *Failure Modes, Effects, and Criticality Analysis* (FMECA), tetapkan mode kegagalan dominan beserta *failure rate* $\lambda_j$ untuk komponen $j$.

**Langkah 4 — Penentuan Tugas RCM.** Pilih dari delapan task standar MSG-3: *Hard Time*, *On-Condition*, *Condition Monitoring*, *Failure Finding*, *Redesign*, *Combined*, *No Scheduled Maintenance*, atau *Lubrication/Servicing*.

**Langkah 5 — Pengelompokan Hirarkis.** Kelompokkan task ke dalam interval A/B/C/D berdasarkan kompatibilitas downtime, kebutuhan hanggar, dan kompetensi teknisi. Gunakan aturan:

$$\text{Jika } D_i \leq 48 \text{ jam} \Rightarrow \text{Task masuk A-check}$$
$$\text{Jika } 48 < D_i \leq 168 \text{ jam} \Rightarrow \text{Task masuk B-check}$$

**Langkah 6 — Optimasi Interval.** Terapkan formulasi pada Bagian 2.3 untuk menentukan $T_i^*$ dengan menggunakan algoritma *Sequential Quadratic Programming* (SQP) atau *Dynamic Programming* pada horizon perencanaan 20 tahun.

**Langkah 7 — Implementasi & Review Berkelanjutan.** Gunakan *closed-loop feedback* dengan KPI: *Dispatch Reliability* (target ≥99.5%), *Schedule Adherence*, dan *Mean Time Between Unscheduled Removals* (MTBUR).

```
┌─────────────────────────────────────────────────────────────┐
│ ALUR LOGIKA RCM HIRARKIS (Zhou, 2024)                      │
├─────────────────────────────────────────────────────────────┤
│ [Fleet Data] → [FMEA] → [Reliability R(t)]                │
│        ↓                                                    │
│ [Cost Function C(T)] → [Constraint Definition]             │
│        ↓                                                    │
│ [SQP Optimizer] → [T_A*, T_B*, T_C*, T_D*]                │
│        ↓                                                    │
│ [Schedule Generator] → [Execution & Monitoring]            │
│        ↓                                                    │
│ [Performance Feedback Loop] ───────────────┐               │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai penerbangan komersial mengoperasikan 50 unit *narrow-body* (tipe Airbus A320 family). Kita akan menentukan interval check optimal yang memaksimalkan ketersediaan armada.

### 4.1 Parameter Input Industri Tipikal

| Parameter | A-check | B-check | C-check | D-check |
|-----------|---------|---------|---------|---------|
| Interval saat ini $T_i$ (jam terbang) | 500 | 4.000 | 20.000 | 50.000 |
| Downtime $D_i$ (jam) | 36 | 180 | 600 | 1.800 |
| Biaya inspeksi $C_{insp}$ (USD) | 8.000 | 35.000 | 250.000 | 1.500.000 |
| Biaya part $C_{part}$ (USD/part) | 1.200 | 4.500 | 18.000 | 85.000 |
| Jumlah part $N_{part}$ | 12 | 28 | 65 | 240 |
| Biaya downtime $C_{DT}$/jam | 12.000 | 12.000 | 12.000 | 12.000 |

### 4.2 Perhitungan Ketersediaan Baseline

Untuk satu siklus gabungan A→B→C→D, hitung kontribusi uptime dan downtime:

**Uptime total per siklus penuh:**
$$U_{total} = 500 + (4.000 - 500) + (20.000 - 4.000) + (50.000 - 20.000) = 50.000 \text{ jam terbang}$$

**Downtime total per siklus penuh:**
$$D_{total} = 36 + 180 + 600 + 1.800 = 2.616 \text{ jam}$$

**Ketersediaan baseline:**
$$\bar{A}_{F,base} = \frac{50.000}{50.000 + 2.616} = \frac{50.000}{52.616} = 0,9503 \text{ atau } 95,03\%$$

### 4.3 Optimasi dengan *Partial Refurbishment* (Usulan Zhou, 2024)

Zhou (2024) mengusulkan penambahan **partial refurbishment** pada fase *mature-run* (setelah C-check ke-2), dengan downtime 240 jam per *partial D*, menurunkan kebutuhan *full D-check*. Misalkan biaya per *partial refurbishment* $C_{partial} = $USD 600.000 dengan downtime $D_{partial} = 240$ jam, dilakukan setiap 25.000 jam terbang.

**Uptime tidak berubah** (50.000 jam), tetapi *downtime* turun karena satu *full D-check* diganti dengan dua *partial refurbishments* yang lebih pendek:

$$D_{total}^{new} = 36 + 180 + 600 + 240 + 240 = 1.296 \text{ jam}$$

**Ketersediaan baru:**
$$\bar{A}_{F,new} = \frac{50.000}{50.000 + 1.296} = \frac{50.000}{51.296} = 0,9748 \text{ atau } 97,48\%$$

**Peningkatan ketersediaan:**
$$\Delta A = 97,48\% - 95,03\% = 2,45 \text{ poin persentase}$$

### 4.4 Dampak Ekonomi

Untuk armada 50 unit dengan utilisasi harian 10 jam/unit, total jam terbang/tahun:
$$H_{annual} = 50 \times 10 \times 365 = 182.500 \text{ jam terbang/tahun}$$

Tambahan jam terbang tersedia per tahun akibat peningkatan 2