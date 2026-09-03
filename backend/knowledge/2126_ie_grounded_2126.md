# 2126 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor MRO Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. SSRN Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Versi sebelumnya / Repositori Pendukung*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *asset-heavy* paling kompleks di dunia, di mana satu unit pesawat narrow-body seperti Boeing 737 atau Airbus A320 memiliki nilai kapital $50–110 juta USD dan umur layanan desain 25–30 tahun. Aset ini tidak hanya bernilai tinggi secara finansial, tetapi juga memiliki implikasi keselamatan publik yang kritis serta keterkaitan langsung dengan revenue stream operator melalui *block hours*, *cycles*, dan *seat-kilometer sold*. Dalam konteks ini, ketersediaan (*availability*) armada menjadi variabel ekonomi paling determinan: setiap jam *ground time* pesawat wide-body (misal B777) dapat merugikan operator sebesar $20.000–$40.000 USD dalam bentuk kehilangan pendapatan langsung (Direct Operating Cost recovery), belum termasuk efek domino terhadap *schedule reliability*, *passenger experience*, dan *slot airport* yang bernilai sangat tinggi (Hang Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Praktik industri MRO aviasi secara historis mengadopsi skema pemeliharaan *progressive/hierarchical* berupa **A-Check, B-Check, C-Check, dan D-Check**, yang merupakan warisan era piston dan awal jet. Frekuensi典型的 checks—A-Check setiap 400–600 flight hours (FH) atau 200–300 cycles; C-Check setiap 20–24 bulan (~6.000–10.000 FH); D-Check setiap 6–12 tahun (~30.000–60.000 FH)—telah menjadi standar de facto berdasarkan rekomendasi OEM dan regulator (FAA, EASA). Namun, degradasi performa siklus-hidup bersifat **non-linear**: laju kegagalan (*failure rate*) tidak konstan sepanjang masa pakai, melainkan mengikuti pola *bathtub curve* yang dipengaruhi oleh *wear-in*, *useful life*, dan *wear-out* phases (Hang Zhou, 2024).

Permasalahan fundamental yang diangkat Zhou (2024) adalah bagaimana **menjadwalkan interval checks dalam kerangka A/B/C/D secara optimal** ketika terdapat dinamika degradasi non-linear, dengan tujuan memaksimalkan ketersediaan tanpa mengorbankan margin keselamatan. Paper ini memperkenalkan kerangka MRO yang secara eksplisit menginkorporasikan *fully refurbished D-check cycles* dan *partial refurbishments* pada fase *mature-run*, kemudian membuktikan secara matematis **eksistensi nilai optimal** untuk model ketersediaan tersebut. Signifikansi ekonominya sangat besar: peningkatan availabilitas armada hanya sebesar 0,5% pada maskapai dengan 100 pesawat narrow-body dapat menerjemahkan menjadi tambahan revenue tahunan senilai $30–80 juta USD, menjadikan topik ini sangat relevan bagi *decision-makers* maskapai, *lessor*, dan *MRO providers* global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear

Zhou (2024) memodelkan degradasi komponen kritis pesawat melalui fungsi reliabilitas dengan *time-varying hazard rate* $\lambda(t)$:

$$R(t) = \exp\left(-\int_0^t \lambda(u)\, du\right)$$

dengan $\lambda(u)$ mengikuti formulasi **Power-Law (Crow-AMSAA)** untuk fase *useful life* dan fase *wear-out*:

$$\lambda(t) = \beta \cdot \lambda_0 \cdot t^{\beta - 1}$$

di mana $\beta$ adalah *shape parameter* (untuk $\beta > 1$ menandakan *wear-out* dominan). Formulasi ini menangkap karakteristik non-linear degradasi yang menjadi kritik utama terhadap jadwal *fixed-interval* konvensional (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.2 Model Ketersediaan Hirarkis A/B/C/D

Definisikan interval antar-check: $T_A$ (interval A-Check), $T_C$ (interval C-Check), $T_D$ (interval D-Check), dengan $T_D = k_C \cdot T_C$ dan $T_C = k_A \cdot T_A$, di mana $k_C, k_A \in \mathbb{Z}^+$. Downtime masing-masing check dinotasikan $d_A, d_C, d_D$, dengan downtime *partial refurbishment* (pada fase mature) dinotasikan $d_P$ dan *fully refurbished D-check* dinotasikan $d_D$.

Menggunakan **Renewal Reward Theorem**, *steady-state availability* diberikan oleh:

$$A(T_A, T_C, T_D) = \frac{E[U]}{E[U] + E[D]}$$

di mana *expected uptime per renewal cycle*:

$$E[U] = k_C \cdot k_A \cdot T_A - \sum_{i=1}^{k_C \cdot k_A} \delta_i$$

dan *expected downtime*:

$$E[D] = k_A \cdot d_A + (k_C - k_A \cdot \lfloor k_C/k_A \rfloor) \cdot d_P + d_D$$

Substitusi menghasilkan fungsi tujuan optimasi:

$$\max_{T_A, T_C, T_D} \; A(T_A, T_C, T_D) \quad \text{subject to } R(T_D) \geq R_{\min}$$

dengan *constraint* keselamatan $R_{\min}$ (umumnya $0{,}95$ per regulasi EASA Part-M).

### 2.3 Kondisi Optimal (First-Order Conditions)

Zhou (2024) membuktikan eksistensi titik optimum melalui kondisi first-order:

$$\frac{\partial A}{\partial T_A} = 0 \implies \frac{k_C \cdot d_A'}{T_A^2} = \frac{\partial \lambda(T_A)}{\partial T_A} \cdot \frac{R(T_A)}{[R(T_A)]^2}$$

Eksistensi optimum tunggal dijamin oleh **konkavitas fungsi availabilitas** dalam domain feasible, sebagaimana dibuktikan melalui Hessian definit negatif.

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Arsitektur Kebijakan MRO Hirarkis

Implementasi di industri mengikuti alur prosedural berikut:

**Tahap 1 — Akuisisi Data Telemetri & Flight Hours**: Sistem *Aircraft Health Monitoring (AHM)* dan *Continuous Airworthiness Maintenance Program (CAMP)* mengumpulkan data *flight hours*, *cycles*, *engine parameters*, dan *vibration signatures* secara real-time. Threshold degradasi dihitung menggunakan *moving average* dan *control charts* (Western Electric rules).

**Tahap 2 — Penjadwalan Baseline**: Jadwal A/B/C/D-Check ditetapkan sebagai *baseline schedule* menggunakan pendekatan MSG-3 (Maintenance Steering Group-3) yang menjadi standar ICAO Annex 6.

**Tahap 3 — Optimasi Interval Hirarkis**: Algoritma *non-linear programming* (NLP) atau *sequential quadratic programming* (SQP) diaplikasikan untuk menemukan $T_A^*, T_C^*, T_D^*$ yang memaksimalkan $A$ dengan mempertahankan $R(t) \geq R_{\min}$.

**Tahap 4 — Partial Refurbishment Insertion**: Pada *mature-run* (setelah 2–3 D-Check), dilakukan *partial refurbishment* (kapasitas setara 40–60% D-Check) untuk menunda *next D-Check* tanpa menurunkan reliabilitas di bawah threshold.

**Tahap 5 — Continuous Review & Feedback Loop**: Data aktual *in-service failures*, *unplanned removals*, dan *MTBUR* (Mean Time Between Unscheduled Removals) dimasukkan kembali ke model untuk *Bayesian update* parameter $\lambda_0$ dan $\beta$.

### 3.2 SOP Penghitungan Ulang Ketersediaan

```
Input: T_A_old, T_C_old, T_D_old, R(t) data historis
   ↓
[Step 1] Estimasi parameter β, λ_0 via MLE
   ↓
[Step 2] Hitung A(T_A, T_C, T_D) saat ini
   ↓
[Step 3] Solve NLP → T_A*, T_C*, T_D*
   ↓
[Step 4] Validasi constraint R(T_D*) ≥ R_min
   ↓
[Step 5] Jika feasible → implementasi jadwal baru
   ↓
[Step 6] Monitoring 6-bulanan → recalibration
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Parameter Input Industri (Armada Narrow-Body)

Ambil studi kasus maskapai regional dengan **20 unit Airbus A320neo**, parameter terukur:

| Parameter | Simbol | Nilai |
|---|---|---|
| Interval A-Check | $T_A$ | 600 FH |
| Interval C-Check | $T_C$ | 6.000 FH |
| Interval D-Check | $T_D$ | 36.000 FH |
| Downtime A-Check | $d_A$ | 18 jam |
| Downtime C-Check | $d_C$ | 360 jam (~15 hari) |
| Downtime D-Check | $d_D$ | 1.440 jam (60 hari) |
| Downtime partial refurb | $d_P$ | 720 jam (30 hari) |
| Hazard rate parameter | $\lambda_0$ | $5 \times 10^{-5}$/FH |
| Shape parameter | $\beta$ | 1,25 |
| Avg. daily utilization | $u$ | 10 FH/hari |

### 4.2 Perhitungan Steady-State Availability (Baseline)

Dalam satu *renewal cycle* lengkap (1 unit D-Check):
- Jumlah A-Check: $k_A = T_D / T_A = 36.000 / 600 = 60$ buah
- Jumlah C-Check: $k_C = T_D / T_C = 36.000 / 6.000 = 6$ buah
- Total cycle length: $T_D = 36.000$ FH ≈ 3.600 hari pada utilisasi 10 FH/hari

$$E[D]_{\text{baseline}} = (60)(18) + (6)(360) + (1)(1.440) = 1.080 + 2.160 + 1.440 = 4.680 \text{ jam}$$

$$A_{\text{baseline}} = \frac{36.000}{36.000 + 4.680} = \frac{36.000}{40.680} \approx 0{,}8849 \; (88{,}49\%)$$

### 4.3 Perhitungan dengan Partial Refurbishment (Framework Zhou, 2024)

Zhou (2024) mengusulkan *partial refurbishment* disisipkan setiap $T_P = 18.000$ FH (setengah siklus D), dengan:
- Jumlah A-Check tetap: 60
- Jumlah C-Check: 6
- Jumlah partial refurb: 1 (di midpoint)

$$E[D]_{\text{optimized}} = (60)(18) + (6)(360) + (1)(720) + (1)(1.440) \cdot 0{,}8$$
$$= 1.080 + 2.160 + 720
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
