# 2142 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Kajian Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial merupakan salah satu ekosistem *capital-intensive* paling kompleks di dunia, di mana satu unit pesawat窄-body bernilai ratusan juta dolar AS dan siklus hidupnya mencakup beberapa dekade operasi. Menurut Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), sektor Maintenance, Repair, and Overhaul (MRO) penerbangan menghadapi tantangan struktural berupa degradasi non-linear terhadap performa *life-cycle*, di mana laju kerusakan komponen tidak mengikuti pola linear melainkan bergantung pada kombinasi *aging*, *fatigue*, *corrosion*, dan *operational stress*. Dalam praktiknya, regimen pemeliharaan pesawat dikodekan dalam kebijakan **A/B/C/D-check** yang bersifat hirarkis: A-check dan B-check merupakan inspeksi ringan dengan frekuensi tinggi, C-check adalah *thorough inspection* berkala, sedangkan D-check (atau *Heavy Maintenance Visit*) merupakan pembongkaran total armada yang membutuhkan downtime puluhan ribu *man-hours*.

Urgensi ekonomis dari optimalisasi kebijakan ini sangat besar. Sebuah pesawat窄-body komersial seperti Boeing 737 atau Airbus A320 menghasilkan pendapatan harian sekitar USD 100.000–250.000 ketika beroperasi; karenanya, setiap jam *ground time* yang tidak perlu akibat penjadwalan *check* yang suboptimal berpotensi menimbulkan kerugian margin operasional yang signifikan. Lebih lanjut, regulator penerbangan seperti FAA (Part 121.367) dan EASA (AMC M.A.301) mewajibkan operator untuk mendemonstrasikan bahwa program pemeliharaan mereka menjaga tingkat keselamatan dan ketersediaan (*availability*) yang terverifikasi. Di sinilah *Reliability-Centered Maintenance* (RCM) — yang awalnya dikembangkan oleh United Airlines untuk industri penerbangan pada era 1970-an — kembali menemukan relevansinya karena kemampuannya memformalkan keputusan *task selection* berbasis bukti *failure mode* kuantitatif.

Zhou (2024, [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) menekankan bahwa meskipun RCM telah lama diadopsi secara konseptual, implementasinya pada sistem hirarkis A/B/C/D masih menghadapi kesenjangan riset, khususnya dalam membuktikan secara analitis bahwa model ketersediaan memiliki **nilai optimal yang eksis** (*existence of an optimal value*). Paper tersebut menjembatani kesenjangan tersebut dengan mengusulkan kerangka MRO yang mengintegrasikan *fully refurbished D-check cycles* dengan *partial refurbishments* selama fase *mature-run* operasi, kemudian mengoptimalkan jadwal *check life-cycle* berdasarkan **maximum available operation time**. Pendekatan ini tidak hanya relevan bagi penerbangan, melainkan dapat diadaptasi untuk sistem *fleet* pada industri perkeretaapian, maritim, dan manufaktur berat.

## 3. Landasan Teori & Formulasi Matematis

Kerangka analitis yang dibangun Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) bertumpu pada beberapa pilar teori pemeliharaan dan proses stokastik. Berikut adalah rekonstruksi model matematis yang konsisten dengan temuan naskah.

### 3.1 Model Ketersediaan Stasioner dengan Teorema Reward Renewal

Untuk sistem yang mengalami *renewal* (peremajaan) berkala melalui *check* A/B/C/D, ketersediaan jangka panjang (*long-run availability*) diberikan oleh:

$$
A_{\infty} = \lim_{T \to \infty} \frac{1}{T} \int_0^T \mathbf{1}_{\{X(t)=1\}} \, dt = \frac{\mathbb{E}[U]}{\mathbb{E}[U] + \mathbb{E}[D]}
$$

di mana $\mathbf{1}_{\{X(t)=1\}}$ adalah indikator proses saat sistem *up*, $\mathbb{E}[U]$ adalah ekspektasi *uptime* kumulatif dalam satu siklus, dan $\mathbb{E}[D]$ adalah ekspektasi *downtime* kumulatif (akibat A/B/C/D-check).

### 3.2 Fungsi Degradasi Non-Linear

Zhou (2024) mengasumsikan bahwa reliabilitas komponen tidak menurun secara eksponensial sederhana melainkan mengikuti model *non-linear degradation*, misalnya bentuk *power-law*:

$$
R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \; \eta > 0
$$

di mana $\beta$ adalah *shape parameter* (untuk $\beta = 1$ model kembali ke distribusi Weibull standar dengan *constant hazard*), $\eta$ adalah *scale parameter*, dan laju kegagalan adalah:

$$
h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}
$$

### 3.3 Struktur Biaya Hirarkis A/B/C/D-check

Misalkan $c_A, c_B, c_C, c_D$ adalah biaya per *check*, dan $d_A, d_B, d_C, d_D$ adalah durasi *ground time* (dalam jam) untuk masing-masing level. Untuk satu siklus D-check penuh, total biaya ekspektasian adalah:

$$
\mathbb{E}[C_{\text{cycle}}] = N_A \, c_A + N_B \, c_B + N_C \, c_C + c_D + \sum_{i \in \text{komponen}} \mathbb{E}[C_i^{\text{corr}}]
$$

di mana $N_A, N_B, N_C$ adalah jumlah A/B/C-check yang terjadi dalam satu siklus D-check penuh, dan $\mathbb{E}[C_i^{\text{corr}}]$ adalah ekspektasi biaya korektif tak terjadwal untuk komponen $i$.

### 3.4 Fungsi Tujuan Optimasi

Objektif paper Zhou (2024) adalah memaksimumkan *maximum available operation time* yang ekuivalen dengan memaksimumkan *availability* dengan kendala biaya:

$$
\max_{N_A, N_B, N_C, T_D} \; A(N_A, N_B, N_C, T_D)
$$

$$
\text{subject to:} \quad \mathbb{E}[C_{\text{cycle}}] \leq C_{\text{budget}}
$$

$$
T_D \geq T_D^{\min}, \quad N_A, N_B, N_C \in \mathbb{Z}_{\geq 0}
$$

di mana $T_D$ adalah interval D-check, $T_D^{\min}$ adalah batas regulasi (umumnya 6–12 tahun untuk pesawat komersial).

### 3.5 Kondisi Eksistensi Optimum

Paper Zhou (2024, [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) membuktikan secara analitis bahwa untuk fungsi ketersediaan yang *continuous* dan *quasi-concave* pada domain kompak, **nilai optimum selalu eksis** (Weierstrass extreme value theorem). Pembuktian ini merupakan kontribusi teoretis utama paper, karena menyatakan bahwa persoalan penjadwalan MRO tidak hanya *well-posed* secara komputasional tetapi juga *well-defined* secara matematis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka RCM hirarkis Zhou (2024) mengikuti alur tujuh tahap yang merupakan adaptasi dari standar SAE JA1011 (RCM Evaluation Criteria) dan MSG-3 (Maintenance Steering Group):

**Tahap 1 — Inventarisasi Sistem & Batasan Misi:** Petakan semua *Line Replaceable Units* (LRU) pada armada dan tetapkan profil misi (misalnya *short-haul*, *long-haul*, *mixed*).

**Tahap 2 — Analisis Modus Kegagalan & Efek (FMEA):** Lakukan FMEA multi-level untuk seluruh subsistem (propulsi, avionik, struktur, *landing gear*, kabin). Tentukan *failure mode*, *failure effect*, dan *failure rate* $\lambda_i$.

**Tahap 3 — Diagram Logika Keputusan (RCM Decision Logic Tree):** Untuk setiap *failure mode*, evaluasi secara berurutan: (a) Apakah mode kegagalan memiliki dampak keselamatan? (b) Apakah memiliki dampak operasional? (c) Apakah memiliki dampak ekonomi signifikan? (d) Apakah mode kegagalan tersembunyi? Berdasarkan jawaban, pilih *task* yang sesuai: *scheduled discard*, *scheduled restoration*, *on-condition task*, atau *failure finding*.

**Tahap 4 — Penentuan Interval Hirarkis A/B/C/D:** Berdasarkan *task* yang dipilih, tentukan interval optimal menggunakan model reliabilitas Bagian 2.

**Tahap 5 — Formulasi Model Ketersediaan:** Bangun fungsi $A(N_A, N_B, N_C, T_D)$ menggunakan data historis *check duration* dan *unscheduled downtime*.

**Tahap 6 — Optimasi dengan Algoritma Meta-heuristik:** Selesaikan problem optimasi Bagian 2 menggunakan *Genetic Algorithm* (GA) atau *Particle Swarm Optimization* (PSO) karena domain bersifat diskret–kontinyu campuran (*mixed-integer non-linear programming*).

**Tahap 7 — Validasi & Iterasi:** Bandingkan hasil kebijakan baru terhadap kebijakan *baseline* menggunakan simulasi Monte Carlo terhadap data operasi historis 3–5 tahun.

```
[Mulai] → [FMEA] → [Decision Tree] → [Penentuan Interval]
   ↓                                            ↓
[Validasi Regulator] ← [Simulasi Monte Carlo] ← [Optimasi GA/PSO]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Optimalisasi jadwal MRO untuk armada 10 unit *narrow-body* (representasi Airbus A320 family) pada operator *low-cost carrier* Asia Tenggara dengan utilisasi harian rata-rata 11 jam (*block time*).

**Parameter Input Industri:**

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| A-check interval | $\tau_A$ | 500 *flight hours* |
| A-check duration | $d_A$ | 24 jam (2 shift × 12 jam) |
| B-check interval | $\tau_B$ | 2.000 *flight hours* |
| B-check duration | $d_B$ | 96 jam |
| C-check interval | $\tau_C$ | 20 bulan |
| C-check duration | $d_C$ | 360 jam (15 hari × 24 jam) |
| D-check interval | $T_D$ | 6 tahun |
| D-check duration | $d_D$ | 4.800 jam (≈ 2 bulan) |
| Biaya A-check | $c_A$ | USD 8.000 |
| Biaya B-check | $c_B$ | USD 45.000 |
| Biaya C-check | $c_C$ | USD 800.000 |
| Biaya D-check | $c_D$ | USD 4.500.000 |
| Pendapatan per jam terbang | $r$ | USD 6.000 |

**Langkah 1 — Hitung jumlah masing-masing *check* dalam satu siklus D-check:**

Dengan utilisasi 11 jam/hari × 365 hari × 6 tahun ≈ 24.090 jam terbang, maka:

$$
N_A = \frac{24.090}{500} \approx 48 \text{ A-check}
$$

$$
N_B = \frac{24.090}{2.000} \approx 12 \text{ B-check}
$$

$$
N_C = \frac{6 \text{ tahun}}{20 \text{ bulan}} \approx 3{,}6 \rightarrow 4 \text{ C-check}
$$

**Langkah 2 — Total downtime satu siklus D-check (6 tahun):**

$$
\mathbb{E}[D] = N_A d_A + N_B d_B + N_C d_C + d_D = 48(24) + 12(96) + 4(360) + 4.800
$$

$$