# 2686 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global merupakan salah satu sektor *capital-intensive* dengan karakteristik unik berupa **umur layanan panjang** (umur pakai pesawat komersial dapat mencapai 25–30 tahun), **regulasi keselamatan ketat** (FAA Part 121, EASA Part-CAMO, dan ICAO Annex 6), serta **tingkat utilisasi aset yang sangat tinggi**. Dalam ekosistem ini, armada pesawat tidak hanya berfungsi sebagai alat produksi, melainkan juga sebagai *revenue-generating assets* yang nilainya dapat mencapai ratusan juta dolar AS per unit. Setiap jam *ground time* yang tidak direncanakan berpotensi menimbulkan kerugian pendapatan signifikan — untuk pesawat narrow-body wide-utilization seperti Boeing 737, satu jam *ground time* dapat kehilangan pendapatan senilai USD 15.000–25.000 (Boeing Annual Report, 2023).

Untuk menjamin keberlanjutan operasional, organisasi MRO aviasi menerapkan struktur pemeliharaan **hierarkis A/B/C/D-check** yang telah distandardisasi oleh OEM (Original Equipment Manufacturer) dan regulator. **A-check** dilakukan setiap 400–600 *flight hours* dengan durasi sekitar 50–100 *man-hours*; **B-check** setiap 6–8 bulan dengan cakupan lebih mendalam; **C-check** setiap 20–24 bulan dengan inspeksi mayor; dan **D-check** (atau *heavy maintenance visit*) setiap 6–12 tahun berupa **overhaul penuh** dengan pembongkaran struktural. Zhou (2024) dalam DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa sistem ini, meskipun terstruktur, menghadapi tantangan degradasi *non-linear* sepanjang siklus hidup pesawat — di mana laju degradasi komponen struktural dan sistem avionik tidak dapat diasumsikan stasioner.

Zhou (2024) menyoroti bahwa **Reliability-Centered Maintenance (RCM)** merupakan pendekatan analitis yang paling tepat untuk mengkuantifikasi degradasi non-linear tersebut sekaligus memaksimalkan ketersediaan (*availability*) armada. RCM, yang awalnya dikembangkan oleh Stanley Nowlan dan Howard Heap (1978) untuk industri penerbangan militer AS (United Airlines atas permintaan Departemen Pertahanan AS), kini telah bertransformasi menjadi kerangka strategis bagi keputusan *trade-off* antara keselamatan, biaya, dan ketersediaan. Studi Zhou memperkenalkan **kerangka kebijakan MRO hibrida** yang mengintegrasikan *full D-check refurbishment* dengan *partial refurbishment* pada fase *mature-run* operasi, dengan tujuan mengoptimalkan jadwal inspeksi berdasarkan **maksimasi waktu operasi tersedia**. Lebih lanjut, Zhou (2024) membuktikan secara matematis **eksistensi nilai optimal** pada model ketersediaannya — sebuah kontribusi teoretis yang sebelumnya belum sepenuhnya terjawab dalam literatur MRO aviasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma Reliability-Centered Maintenance (RCM)

RCM berakar pada **fungsi keandalan** (reliability function) sistem, yang didefinisikan sebagai probabilitas komponen atau sistem beroperasi tanpa kegagalan hingga waktu $t$:

$$R(t) = P(T > t) = \exp\left(-\int_0^t \lambda(u)\, du\right)$$

di mana $\lambda(u)$ adalah **laju kegagalan sesaat** (*hazard rate*) yang berubah terhadap waktu $u$. Untuk komponen avionik modern, distribusi **Weibull** dengan parameter bentuk $\beta > 1$ banyak digunakan untuk merepresentasikan fenomena *wear-out*:

$$R(t) = \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right), \quad \lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\eta$ adalah *characteristic life* dan $\beta$ adalah *shape parameter*. Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) memanfaatkan properti non-stasioner ini untuk mengkonstruksi kebijakan MRO yang adaptif terhadap profil degradasi aktual.

### 2.2 Availability dalam Konteks Renewal Reward

Ketersediaan jangka panjang (*steady-state availability*) dari sistem yang mengalami siklus operasi-pemeliharaan berulang dapat diformulasikan melalui **renewal reward theorem**:

$$A_{\infty} = \frac{\mathbb{E}[\text{Operating Time per Cycle}]}{\mathbb{E}[\text{Operating Time per Cycle}] + \mathbb{E}[\text{Downtime per Cycle}]}$$

Untuk kebijakan hierarki dengan $n$ tingkat pemeliharaan (misalnya A, B, C, D), Zhou (2024) memperkenalkan **siklus renewal gabungan** $T_{cycle}$ yang merupakan superposisi dari interval antar-inspeksi:

$$T_{cycle} = \sum_{i \in \{A,B,C,D\}} N_i \cdot \tau_i$$

di mana $N_i$ adalah jumlah inspeksi tingkat $i$ dalam satu siklus renewal penuh, dan $\tau_i$ adalah interval waktu antar-inspeksi tingkat $i$. *Downtime* total $D_{cycle}$ mencakup waktu inspeksi terjadwal $d_i$ dan waktu perbaikan korektif $d_c$ yang muncul dari kegagalan acak:

$$D_{cycle} = \sum_{i \in \{A,B,C,D\}} N_i \cdot d_i + N_c \cdot d_c$$

### 2.3 Fungsi Objektif Optimasi Ketersediaan

Tujuan utama kerangka Zhou (2024) adalah **memaksimumkan ketersediaan armada** dengan memilih interval inspeksi optimal $\tau = (\tau_A, \tau_B, \tau_C, \tau_D)$:

$$\max_{\tau} \quad A(\tau) = \frac{\sum_{i} N_i \tau_i}{\sum_{i} N_i \tau_i + \sum_{i} N_i d_i + \sum_{i} N_i N_c(\tau) \cdot d_c}$$

dengan kendala:

$$\sum_{i} N_i \tau_i \leq T_{\max}, \quad \tau_i \in [\tau_i^{min}, \tau_i^{max}], \quad N_c(\tau) \geq 0$$

Zhou membuktikan bahwa fungsi tujuan memiliki **nilai optimal tunggal** (*global maximum*) yang dijamin melalui kondisi *first-order*:

$$\frac{\partial A(\tau)}{\partial \tau_i} = 0, \quad \forall i \in \{A,B,C,D\}$$

dan **kriteria kedua-order** untuk konfirmasi *maximum*:

$$\frac{\partial^2 A(\tau)}{\partial \tau_i^2} < 0$$

### 2.4 Model Degradasi Non-Linear untuk Komponen Kritis

Untuk komponen kritis (mesin turbin, *landing gear*, *avionics suite*), Zhou mengadopsi model degradasi berbasis **stochastic degradation process**:

$$X(t) = X_0 + \int_0^t \mu(s)\, ds + \sigma B(t)$$

di mana $X(t)$ adalah *degradation level*, $\mu(s)$ adalah *drift function* yang merepresentasikan laju degradasi deterministik, dan $\sigma B(t)$ adalah proses Wiener. **Probabilitas kegagalan** terjadi ketika $X(t)$ melampaui *threshold* kritis $\ell$:

$$P_f(t) = P(X(t) \geq \ell) = \Phi\left(\frac{\ell - X_0 - \int_0^t \mu(s) ds}{\sigma \sqrt{t}}\right)$$

dengan $\Phi(\cdot)$ adalah *cumulative distribution function* normal standar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka kebijakan MRO hierarkis Zhou (2024) mengikuti **prosedur operasional standar 7-langkah** yang dapat diadaptasi sesuai **MSG-3** (Maintenance Steering Group-3) dari Airlines for America:

**Langkah 1 — Penentuan Sistem & Lingkup Batas (*System Boundary Definition*):**
Insinyur keandalan menetapkan *ATA chapter* (Air Transport Association) yang menjadi cakupan analisis, misalnya ATA 32 (Landing Gear), ATA 53 (Fuselage Structure), atau ATA 72 (Engine).

**Langkah 2 — Analisis Fungsi & Kegagalan (*Function & Failure Analysis*):**
Setiap komponen kritis diidentifikasi fungsinya (misal: fungsi hidrolik *landing gear extension*) dan mode kegagalannya (kebocoran, fatigue crack, korosi). Matriks **FMEA** (Failure Mode and Effects Analysis) digunakan untuk mengkalkulasi **Risk Priority Number (RPN)**:

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *severity*, $O$ adalah *occurrence*, dan $D$ adalah *detectability* (skala 1–10).

**Langkah 3 — Klasifikasi Tindakan Pemeliharaan:**
Berdasarkan *RPN* dan konsekuensi keselamatan, tindakan diklasifikasikan ke dalam salah satu dari empat kategori: (a) *Hard Time* (penggantian terjadwal), (b) *On-Condition* (monitor berbasis kondisi), (c) *Condition Monitoring* (monitor kontinu), atau (d) *No Scheduled Maintenance*.

**Langkah 4 — Penentuan Interval Inspeksi Awal:**
Interval awal $\tau_i^{(0)}$ ditentukan berdasarkan rekomendasi OEM dan regulator, misalnya A-check $= 500$ flight hours, C-check $= 24$ bulan.

**Langkah 5 — Optimasi Berbasis Model:**
Menggunakan formula Bagian 2.3, *optimizer* (misal *sequential quadratic programming* atau *genetic algorithm*) dijalankan untuk memperoleh $\tau_i^*$. Zhou (2024) merekomendasikan penggunaan **algoritma Monte Carlo** untuk mengestimasi $N_c(\tau)$ yang bersifat stokastik.

**Langkah 6 — Validasi Simulasi:**
Sebelum implementasi penuh, kebijakan MRO baru divalidasi melalui **discrete event simulation (DES)** pada *software* seperti Siemens Tecnomatix Plant Simulation atau AnyLogic, dengan *seed* data historis minimal 5 tahun operasi.

**Langkah 7 — Implementasi & Pemantauan Berkelanjutan (*Continuous Monitoring*):**
Setelah implementasi, KPI utama dipantau secara real-time menggunakan **dashbor Aviation Maintenance Analytics**: $A(t)$, MTBF, MTTR, *dispatch reliability*, dan *unscheduled removal rate*.

Standar rujukan yang relevan meliputi **SAE JA1011/1012** (RCM evaluation criteria), **ISO 55000** (asset management), dan **EASA Part-M / Part-CAMO**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input — Boeing 737-800 Fleet

Pertimbangkan satu unit **Boeing 737-800** dengan parameter operasional tipikal maskapai *low-cost carrier* Asia Tenggara (rilis analis 2023):

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Rata-rata flight hours harian | $h$ | 10 | hours/day |
| Interval A-check | $\tau_A$ | 500 | flight hours |
| Interval B-check | $\tau_B$ | 4 | bulan |
| Interval C-check | $\tau_C$ | 24 | bulan |
| Interval D-check | $\tau_D$ | 120 | bulan |
| Durasi A-check | $d_A$ | 24 | hours |
| Durasi B-check | $d_B$ | 120 | hours |
| Durasi C-check | $d_C$ | 720 | hours |
| Durasi D-check | $d_D$ | 2.400 | hours |
| MTTR korektif | $d_c$ | 48 | hours |
| Jumlah failure/tahun | $N_c$ | 6 | events/year |

### 4.2 Perhitungan Ketersediaan Baseline (Kebijakan OEM)

Hitung total operasi dan downtime per **siklus D-check** (10 tahun):

**Flight hours kumulatif dalam 10 tahun:**
$$\text{Total flight hours} = 10 \times 365 \times 10 = 36.500 \text{ hours}$$

**Jumlah A-check dalam 10 tahun:**
$$N_A = \frac{36.500}{500} = 73 \text{ inspeksi}$$

**Jumlah B-check dalam 10 tahun:**
$$N_B = \frac{120}{4} = 30 \text{ inspeksi}$$

**Jumlah C-check dalam 10 tahun:**
$$N_C = \frac{120}{24} = 5 \text{ inspeksi}$$

**Jumlah D-check dalam 10 tahun:**
$$N_D = 1 \text{ inspeksi}$$

**Total downtime terjadwal:**
$$D_{sched} = (73 \times 24) + (30 \times 120) + (5 \times 720) + (1 \times 2.400) = 1.752 + 3.600 + 3.600 + 2.400 = 11.352 \text{ hours}$$

**Total downtime korektif (6 failure/tahun × 10 tahun):**
$$D_{corr} = 6 \times 10 \times 48 = 2.880 \text{ hours}$$

**Ketersediaan baseline:**
$$A_{baseline} = \frac{36.500}{36.500 + 11.352 + 2.880} = \frac{36.500}{50.732} = 0{,}7195 \approx 71{,}95\%$$

### 4.3 Optimasi dengan Partial Refurbishment (Framework Zhou 2024)