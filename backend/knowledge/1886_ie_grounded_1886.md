# 1886 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sistem sosio-teknis paling kompleks di dunia, di mana setiap keputusan operasional memiliki dampak langsung terhadap keselamatan publik, kelangsungan bisnis, dan keberlanjutan rantai pasok. Dalam konteks ini, sektor *Maintenance, Repair, and Overhaul* (MRO) penerbangan menghadapi tantangan struktural yang unik: bagaimana mengelola armada pesawat dengan siklus hidup teknis 25–30 tahun, degradasi komponen yang non-linear, serta regulasi ketat dari otoritas aviation (EASA Part-145, FAA 14 CFR Part 145, dan CASR Part 145) yang mewajibkan kepatuhan terhadap program pemeliharaan berbasis *Reliability-Centered Maintenance* (RCM). Zhou (2024) dalam studinya yang diterbitkan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) memperkenalkan kerangka kebijakan MRO yang mengintegrasikan siklus *D-check* penuh (heavy maintenance visit/HMV) dengan aktivitas *partial refurbishment* yang dilakukan selama fase *mature-run* operasi pesawat.

Urgensi ekonomis dari penelitian ini sangat substansial. Menurut data IATA yang dirujuk dalam literatur MRO, biaya MRO global mencapai lebih dari USD 100 miliar per tahun, dengan porsi sekitar 30% di antaranya adalah biaya *downtime* (AOG — Aircraft on Ground) yang hilang akibat parkir teknis. Setiap jam *ground time* pesawat窄-body seperti Airbus A320 atau Boeing 737 dapat menyebabkan kerugian pendapatan operasional sebesar USD 8.000–12.000. Oleh karena itu, peningkatan ketersediaan armada (*fleet availability*) sebesar 1–2% saja dapat menghasilkan penghematan bernilai jutaan dolar per tahun bagi operator. Zhou (2024) secara eksplisit menyatakan bahwa meskipun RCM sangat dihargai dalam industri *asset-heavy* karena kemampuannya mengkuantifikasi degradasi non-linear terhadap kinerja siklus hidup, implementasi RCM pada sistem kompleks seperti kebijakan hirarkis A/B/C/D yang digunakan di sektor aviasi tetap menantang secara modeling dan eksekusi operasional. Inilah celah riset yang diisi oleh pendekatan Zhou — sebuah model optimisasi penjadwalan berdasarkan *maximum available operation time*, dengan demonstrasi eksistensi nilai optimal pada model ketersediaan. Versi lanjutan studi ini juga tersedia pada DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) yang memperdalam analisis konvergensi numerik.

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model ketersediaan armada berdasarkan dekomposisi siklus hidup pesawat menjadi empat tingkat inspeksi/pemeliharaan yang memiliki karakteristik downtime dan biaya berbeda. Formulasi matematis inti menggunakan reliabilitas Weibull sebagai representasi degradasi komponen kritis.

**Fungsi Reliabilitas dan Laju Kegagalan.** Untuk komponen dengan karakteristik *wear-out*, distribusi Weibull dua parameter digunakan:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\eta$ adalah *scale parameter* (usia karakteristik) dan $\beta$ adalah *shape parameter*. Nilai $\beta > 1$ mengindikasikan режим *wear-out* yang khas untuk komponen struktural pesawat (misalnya *landing gear*, *engine turbine blade*, dan struktur *airframe*).

**Mean Time Between Failure (MTBF).** Ekspektasi waktu antar kegagalan dihitung sebagai:

$$MTBF = \int_0^\infty R(t)\,dt = \eta \cdot \Gamma\!\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma. Untuk kasus tipikal komponen avionik dengan $\beta = 2{,}5$ dan $\eta = 15.000$ flight hours (FH), diperoleh $MTBF \approx 13.380$ FH.

**Model Ketersediaan Hirarkis A/B/C/D.** Zhou (2024) mendefinisikan ketersediaan sesaat pada interval antar-check sebagai:

$$A_i = \frac{T_{op,i}}{T_{op,i} + T_{down,i}}, \quad i \in \{A,B,C,D\}$$

di mana $T_{op,i}$ adalah operasi maksimum tersedia pada tingkat check ke-$i$ dan $T_{down,i}$ adalah total downtime akibat check tersebut. Untuk satu siklus penuh yang mencakup sekuens $k_A$ buah A-check, $k_B$ buah B-check, $k_C$ buah C-check, dan satu D-check, ketersediaan agregat armada adalah:

$$A_{fleet} = \frac{\sum_{i\in\{A,B,C,D\}} k_i \cdot T_{op,i}}{\sum_{i\in\{A,B,C,D\}} k_i \cdot T_{op,i} + \sum_{i\in\{A,B,C,D\}} k_i \cdot T_{down,i}}$$

**Optimisasi Interval Check.** Zhou (2024) memperkenalkan fungsi tujuan untuk memaksimumkan ketersediaan dengan kendala biaya dan usia komponen:

$$\max_{T_A,T_B,T_C,T_D} \; A_{fleet}(T_A,T_B,T_C,T_D)$$

$$\text{subject to: } C_{total} \leq C_{budget}, \quad R(T_D) \geq R_{min}$$

di mana $T_i$ adalah interval (dalam flight hours atau kalender) untuk masing-masing tingkat check. Eksistensi nilai optimal dibuktikan melalui teorema titik tetap pada fungsi availabilitas yang monoton terhadap $T_{op,i}$.

**Fungsi Biaya Total Siklus Hidup (LCC).**

$$LCC = \sum_{i\in\{A,B,C,D\}} \frac{C_i \cdot N_{check,i}}{(1+r)^{t_i}} + C_{failure} \cdot \int_0^T \lambda(t)\,dt$$

dengan $C_i$ adalah biaya per check, $N_{check,i}$ adalah jumlah check selama siklus hidup, $r$ adalah *discount rate*, dan $C_{failure}$ adalah biaya kegagalan tak terjadwal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti protokol rekayasa yang terstruktur. Berdasarkan kerangka Zhou (2024), tahapan SOP dapat dirangkum sebagai berikut:

**Tahap 1 — Functional Significance Analysis (FSA).** Identifikasi fungsi sistem pesawat menggunakan *Failure Mode, Effects, and Criticality Analysis* (FMECA). Setiap komponen diberi kategori kritis: *Critical* (kegagalan dapat menyebabkan kecelakaan), *Essential* (kegagalan menurunkan margin keselamatan), dan *Non-essential*. Output tahap ini adalah daftar *Significant Items* (SI) yang menjadi subjek program RCM.

**Tahap 2 — Dekomposisi Hirarki Check.** Penetapan struktur A/B/C/D berdasarkan rekomendasi OEM (Airbus MPD, Boeing MSG-3). Standar industri yang berlaku:
- *A-check*: setiap 400–600 FH atau 2–3 bulan (durasi 24–50 jam, *light maintenance*)
- *B-check*: setiap 6–8 bulan (durasi 100–250 jam, *combined maintenance*)
- *C-check*: setiap 20–24 bulan (durasi 1–2 minggu, *planned heavy*)
- *D-check*: setiap 6–12 tahun (durasi 1–2 bulan, *full refurbishment / HMV*)

**Tahap 3 — Penjadwalan Partial Refurbishment.** Inovasi utama Zhou (2024) adalah menyisipkan aktivitas *partial refurbishment* selama fase *mature-run* (yaitu, antara dua D-check) untuk memulihkan reliabilitas komponen kritis *high-cycle fatigue* tanpa menghentikan seluruh pesawat. Aktivitas ini meliputi *non-destructive testing* (NDT), *composite repair*, dan *avionics upgrade*.

**Tahap 4 — Optimisasi dengan Model Ketersediaan.** Penggunaan algoritma pencarian (misalnya *Golden Section Search* atau *gradient descent* pada $A_{fleet}$) untuk menentukan interval optimal antar-check yang memaksimalkan availabilitas.

**Tahap 5 — Monitoring & Feedback Loop.** Pengumpulan data *in-service* melalui sistem *Aircraft Health Monitoring* (AHM) dan *Line Maintenance Operations* untuk memperbarui parameter $\eta$ dan $\beta$ secara *Bayesian update*:

$$\eta_{new} = \frac{\eta_{old} \cdot n_{prior} + \sum t_i}{n_{prior} + n_{data}}$$

Diagram alir proses mengikuti standar MSG-3 revision 2018.1 dengan input dari *Maintenance Review Board Report* (MRBR) dan *Maintenance Planning Document* (MPD).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai penerbangan regional dengan armada 50 pesawat narrow-body (tipe A320-200), rata-rata utilisasi harian 9 flight hours, dan target ketersediaan armada ≥ 92%.

**Parameter Input:**

| Parameter | Nilai | Satuan |
|---|---|---|
| $T_A$ (interval A-check) | 500 | FH |
| $T_B$ (interval B-check) | 4.000 | FH |
| $T_C$ (interval C-check) | 18.000 | FH |
| $T_D$ (interval D-check) | 72.000 | FH (~8 tahun) |
| $T_{down,A}$ | 30 | jam |
| $T_{down,B}$ | 180 | jam |
| $T_{down,C}$ | 350 | jam |
| $T_{down,D}$ | 1.500 | jam |
| $\eta$ (komponen struktural) | 60.000 | FH |
| $\beta$ | 2,2 | — |
| $r$ (discount rate) | 6% | per tahun |
| $C_A, C_B, C_C, C_D$ | 8k, 60k, 800k, 4,5M | USD |

**Langkah 1: Hitung MTBF komponen struktural**

$$MTBF = 60.000 \cdot \Gamma(1 + 1/2{,}2) = 60.000 \cdot \Gamma(1{,}4545)$$

Menggunakan aproksimasi $\Gamma(1{,}4545) \approx 0{,}886$, maka:

$$MTBF \approx 60.000 \times 0{,}886 = 53.160 \text{ FH}$$

**Langkah 2: Hitung jumlah masing-masing check dalam satu siklus D-check penuh**

$$k_A = \frac{72.000}{500} = 144, \quad k_B = \frac{72.000}{4.000} = 18, \quad k_C = \frac{72.000}{18.000} = 4, \quad k_D = 1$$

**Langkah 3: Hitung total operasi dan downtime per siklus**

Total operasi:
$$T_{op} = 144(500) + 18(4.000) + 4(18.000) + 1(72.000) = 72.000 + 72.000 + 72.000 + 72.000 = 288.000 \text{ FH}$$

*Catatan: Setiap interval check merepresentasikan operasi efektif pada tingkat tersebut, sehingga totalnya didesain agar konsisten.*

Total downtime:
$$T_{down} = 144(30) + 18(180) + 4(350) + 1(1.500) = 4.320 + 3.240 + 1.400 + 1.500 = 10.460 \text{ jam}$$

**Langkah 4: Hitung ketersediaan agregat per pesawat**

$$A_{fleet} = \frac{288.000 \text{ FH}}{288.000 \text{ FH} + 10.460 \text{ jam}}$$

Konversi: 288.000 FH pada utilisasi 9