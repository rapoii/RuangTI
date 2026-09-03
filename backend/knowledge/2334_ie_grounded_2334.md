# 2334 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor *Maintenance, Repair, and Overhaul* (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan global merupakan salah satu ekosistem rekayasa aset paling kompleks dengan nilai pasar melebihi USD 100 miliar per tahun (Boeing Commercial Market Outlook, 2023). Di dalamnya, keputusan penjadwalan pemeliharaan armada (*fleet*) bukan sekadar persoalan biaya, melainkan determinan langsung terhadap *availability* (ketersediaan), keselamatan penerbangan, dan profitabilitas maskapai. Setiap jam *ground time* pesawat narrow-body bernilai komersial antara USD 8.000–15.000, sementara wide-body mencapai USD 25.000–40.000, sehingga kebijakan pemeliharaan yang suboptimal dapat menimbulkan kerugian ratusan juta dolar per tahun bagi operator besar.

Dalam konteks inilah Hang Zhou (2024) memperkenalkan kerangka *Reliability-Centered Maintenance* (RCM) yang diintegrasikan dengan kebijakan pemeliharaan hierarkis A/B/C/D — standar de facto industri penerbangan sipil yang telah diadopsi oleh FAA, EASA, dan IATA. Seperti ditegaskan Zhou (2024, DOI: 10.2139/ssrn.6387479), meskipun RCM sangat dihargai karena kemampuannya mengkuantifikasi degradasi non-linear performa *life-cycle* dan mengoptimalkan operasi dengan meningkatkan keselamatan serta ketersediaan, pemodelan dan implementasinya tetap menantang ketika diterapkan pada sistem kompleks seperti kebijakan hierarkis A/B/C/D MRO penerbangan.

Struktur hierarkis tersebut memiliki karakteristik khas: **A-check** dilakukan setiap 400–600 jam terbang (±6 bulan) dengan durasi *downtime* 6–24 jam; **B-check** setiap 6–8 bulan (±3.000–5.000 jam terbang) dengan downtime 150–250 jam; **C-check** setiap 20–24 bulan dengan downtime 3.000–6.000 jam; dan **D-check** (full overhaul) setiap 6–12 tahun dengan downtime 25.000–50.000 jam. Tantangan fundamental yang diangkat Zhou (2024, DOI: 10.2139/ssrn.5291672) adalah bagaimana menjadwalkan *life-cycle maintenance checks* ini secara optimal berdasarkan **waktu operasi tersedia maksimum**, sembari mendemonstrasikan eksistensi nilai optimal untuk model ketersediaan.

Kontribusi orisinal paper ini terletak pada penggabungan **siklus D-check fully refurbished** dengan **refurbishment parsial selama *mature-run*** operasi penerbangan — sebuah pendekatan yang sebelumnya belum diintegrasikan secara formal dalam literatur RCM penerbangan. Implikasi ekonominya sangat signifikan: optimalisasi *trade-off* antara interval pemeliharaan, durasi perbaikan, serta reliabilitas komponen akan menentukan apakah sebuah armada mampu mempertahankan *dispatch reliability* di atas 99% — benchmark industri yang hanya bisa dicapai melalui kebijakan pemeliharaan berbasis data dan model matematis yang rigor.

---

## 2. Landasan Teori & Formulasi Matematis

Model kuantitatif yang dikembangkan Zhou (2024, DOI: 10.2139/ssrn.6387479) berakar pada tiga pilar: (i) fungsi reliabilitas non-linear, (ii) ketersediaan sesaat dan jangka panjang, serta (iii) optimisasi multi-tier.

### 2.1 Fungsi Reliabilitas dan Degradasi Non-Linear

Untuk komponen kritis penerbangan, laju kegagalan (*hazard rate*) meningkat secara non-stasioner mengikuti *bathtub curve* yang dimodifikasi. Zhou menggunakan formulasi **Power Law Weibull**:

$$R(t) = \exp\!\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan parameter skala $\eta > 0$ dan parameter bentuk $\beta > 1$ menandakan *wear-out phase* khas komponen avionik dan struktur pesawat. Laju kegagalan sesaat menjadi:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

### 2.2 Model Ketersediaan Hirarkis A/B/C/D

Untuk satu siklus *check* ke-i ($i \in \{A,B,C,D\}$), ketersediaan sesaat (*instantaneous availability*) didefinisikan sebagai:

$$A_i = \frac{T_{op,i}}{T_{op,i} + T_{m,i}}$$

di mana $T_{op,i}$ adalah *mean time between maintenance* (MTBM) untuk *check* ke-i, dan $T_{m,i}$ adalah *mean downtime* pemeliharaan. Untuk satu siklus hidup penuh armada dengan $n_i$ kali *check* tipe-i, ketersediaan jangka panjang (*long-run availability*) Zhou (2024, DOI: 10.2139/ssrn.6387479) memformulasikan:

$$A_f = \frac{\displaystyle\sum_{i \in \{A,B,C,D\}} n_i \cdot T_{op,i}}{\displaystyle\sum_{i \in \{A,B,C,D\}} n_i \cdot (T_{op,i} + T_{m,i})}$$

### 2.3 Fungsi Objektif Optimisasi

Zhou (2024) membuktikan eksistensi nilai optimal melalui fungsi objektif:

$$\max_{\mathbf{n} = (n_A, n_B, n_C, n_D)} \quad A_f(\mathbf{n})$$

dengan kendala:

**Kendala biaya total:**
$$\sum_{i \in \{A,B,C,D\}} n_i \cdot c_i + C_{D}(n_D) \leq B_{total}$$

**Kendala keselamatan (reliabilitas residual minimum):**
$$R_{residual}(t) = \prod_{k=1}^{K} R_k(t; n_A, n_B, n_C, n_D) \geq R_{min}$$

**Kendala interval antar-check regulator:**
$$T_{op,A} \in [400, 600] \text{ jam terbang}$$
$$T_{op,B} \in [3{,}000, 5{,}000] \text{ jam terbang}$$
$$T_{op,C} \in [12{,}000, 15{,}000] \text{ jam terbang}$$
$$T_{op,D} \in [30{,}000, 50{,}000] \text{ jam terbang}$$

### 2.4 Model Refurbishment Parsial Selama *Mature-Run*

Inovasi utama paper ini adalah integrasi **partial refurbishment** (PR) antara C-check dan D-check. Zhou memodelkan reliabilitas setelah refurbishment sebagai:

$$R_{post-PR}(t) = R(t) + \alpha \cdot [1 - R(t)]$$

dengan $\alpha \in [0,1]$ merepresentasikan tingkat pemulihan reliabilitas pasca-refurbishment. Ini menunjukkan bahwa refurbishment parsial hanya memulihkan sebagian kapasitas fungsional, berbeda dengan D-check yang mendekati $\alpha \to 1$ (full restoration).

### 2.5 Bukti Eksistensi Solusi Optimal

Melalui teorema nilai ekstrem Weierstrass pada domain kompak yang dibatasi kendala biaya dan interval, Zhou (2024, DOI: 10.2139/ssrn.5291672) membuktikan bahwa fungsi $A_f(\mathbf{n})$ yang kontinu akan mencapai maksimum global pada batas domain atau pada titik stasioner interior, dengan kondisi optimalitas first-order:

$$\frac{\partial A_f}{\partial n_i} = \frac{T_{op,i} \cdot T_m - T_{m,i} \cdot T_{op}}{\left(\sum n_j (T_{op,j} + T_{m,j})\right)^2} = 0 \quad \forall i$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hierarkis Zhou (2024, DOI: 10.2139/ssrn.6387479) mengikuti SOP 7-tahap yang selaras dengan standar SAE JA1011/1012 dan MSG-3 (Maintenance Steering Group):

**Tahap 1 — Inventarisasi Sistem & Fungsi Kritis.** Pemetaan seluruh *Line Replaceable Unit* (LRU) ke dalam 8 ATA Chapter (Air Transport Association) dan identifikasi fungsi keselamatan kritis (ATA 27, 28, 32, 35).

**Tahap 2 — Penentuan Mode Kegagalan melalui FMEA.** Setiap komponen dianalisis menggunakan *Failure Mode and Effects Analysis* dengan skor *Risk Priority Number* (RPN):
$$RPN = S \times O \times D$$
dengan $S$ = severity, $O$ = occurrence, $D$ = detection. Komponen dengan $RPN > 100$ masuk kategori *critical*.

**Tahap 3 — Pengumpulan Data Reliabilitas Operasional.** Time-on-wing, *shop visit rate*, dan *unscheduled removal rate* dikumpulkan dari *Aircraft Maintenance and Engineering System* (AMES) minimal 24 bulan ke belakang.

**Tahap 4 — Penentuan Interval Pemeliharaan Awal.** Menggunakan formula ketersediaan optimum Zhou:
$$T_{op,i}^{opt} = \sqrt{\frac{2 \cdot c_{i}^{preventive}}{\lambda' \cdot c_{i}^{corrective}}}$$

**Tahap 5 — Optimisasi dengan *Partial Refurbishment*.** Sisipan refurbishment parsial (misalnya *engine borescope inspection* + *landing gear overhaul interval extension*) antara C-check ke-2 dan D-check pertama untuk menunda degradasi *mature-run*.

**Tahap 6 — Validasi & Simulasi Monte Carlo.** Running 10.000 skenario operasi dengan distribusi failure *bootstrapped* dari data historis.

**Tahap 7 — Implementasi Bertahap & *Continuous Improvement*.** *Kaizen loop* 6-bulanan dengan re-kalibrasi parameter Weibull menggunakan *Maximum Likelihood Estimation*:
$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta, \eta} \sum_{j=1}^{N} \left[\ln \beta - \beta \ln