# 1460 — Teknologi *Fungible* dan *Non-Fungible* dalam *Scale-Up* Biomanufaktur: Perspektif Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Fungible and non-fungible technologies in biomanufacturing scale-up
**Jurnal & Sitasi Utama:** Sang Yup Lee (2024). *Nature Chemical Engineering*. DOI: [https://doi.org/10.1038/s44286-024-00093-7](https://doi.org/10.1038/s44286-024-00093-7)
**Sitasi Pendukung:** Zizhao Wu, Peng Xu (2025). *Nature Chemical Engineering*. DOI: [https://doi.org/10.1038/s44286-025-00222-w](https://doi.org/10.1038/s44286-025-00222-w)

---

## 1. Pendahuluan dan Konteks Industri

Industri biomanufaktur global tengah mengalami transformasi struktural yang ditandai oleh meningkatnya kompleksitas modal (modalitas) produk biologis — dari antibodi monoklonal (mAb) menuju *antibody-drug conjugates* (ADC), *viral vectors*, *cell therapies*, dan *mRNA therapeutics*. Lee (2024) dalam artikelnya yang berjudul *"Fungible and non-fungible technologies in biomanufacturing scale-up"* di *Nature Chemical Engineering* memperkenalkan dikotomi kritis antara teknologi **fungible** (dapat dipertukarkan, terstandarisasi, *platformable*) dan **non-fungible** (khas produk, sulit di-*generalize*) yang hingga kini menjadi *bottleneck* fundamental dalam transisi laboratorium ke produksi komersial (Lee, 2024, DOI: 10.1038/s44286-024-00093-7).

Urgensi ekonomi dari dikotomi ini sangat nyata. Pasar biopharmaceutical global diproyeksikan melampaui USD 850 miliar pada 2030, namun *success rate* transisi dari *clinical scale* ke *commercial manufacturing* untuk modalitas baru seperti *cell dan gene therapy* masih berkisar 30–40%, jauh di bawah 70–80% untuk antibodi monoklonal konvensional. Sebagai konsekuensinya, biaya *good manufacturing practice* (cGMP) per gram produk untuk modalitas non-fungible bisa mencapai 100–1000 kali lipat lebih tinggi dibanding platform fungible. Lee (2024) berargumen bahwa akar masalahnya bukan semata pada aspek biokimia, melainkan pada ketidakselarasan antara **arsitektur teknologi proses** dengan **sifat fisikokimia produk**.

Wu & Xu (2025) dalam companion paper *"Beyond TRY in biomanufacturing scale-up"* (DOI: 10.1038/s44286-025-00222-w) memperluas kerangka ini dengan mengkritik pendekatan tradisional **T**ime-**R**esource-**Y**ield (TRY) yang terlalu menyederhanakan masalah *scale-up*. Mereka mengusulkan paradigma yang mengintegrasikan dimensi *robustness*, *regulatory reproducibility*, dan *resilience* rantai pasok, yang secara langsung beresonansi dengan disiplin *Industrial Engineering* — khususnya pada aspek *process design*, *capacity planning*, dan *facility layout* (Wu & Xu, 2025, DOI: 10.1038/s44286-025-00222-w).

Dalam konteks Indonesia dan Asia Tenggara, di mana investasi fasilitas *bio-CDMO* (Contract Development & Manufacturing Organization) meningkat tajam (misalnya di Singapura, Korea Selatan, dan India), pemahaman mendalam tentang fungibilitas teknologi menjadi prasyarat strategis untuk keputusan investasi kapasitas, pemilihan *chassis* (misalnya *E. coli*, *CHO*, *Saccharomyces*, atau *moss*), dan desain *facility* yang *flexible* maupun *dedicated*. Modul ini menyintesiskan kedua paper di atas dengan perangkat analitis Teknik Industri untuk memberikan kerangka kuantitatif yang operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Fungibilitas Teknologi

Lee (2024) secara implisit mengusulkan bahwa setiap teknologi proses dapat dikarakterisasi oleh **Indeks Fungibilitas (IF)** yang kontinum antara 0 (sepenuhnya non-fungible) hingga 1 (sepenuhnya fungible). Secara formal:

$$\text{IF} = \frac{1}{n}\sum_{i=1}^{n} w_i \cdot \left(1 - \frac{\sigma_i}{\mu_i}\right)$$

di mana $w_i$ adalah bobot atribut kritis ke-$i$ (misalnya kompatibilitas *chassis*, *feedstock*, *purification train*), $\sigma_i$ adalah standar deviasi kinerja teknologi pada produk berbeda, dan $\mu_i$ adalah rerata kinerja. Semakin rendah variabilitas relatif, semakin tinggi IF, dan semakin mudah teknologi tersebut di-*platform*-kan.

### 2.2 Bilangan Dimensional *Scale-Up*

Untuk menjaga *hydrodynamics* dan *mass transfer* konsisten selama *scale-up*, digunakan serangkaian bilangan tak berdimensi. *Power input per volume* (P/V) mengikuti korelasi:

$$\frac{P}{V} \propto \left(\frac{P_0 \cdot \rho \cdot N^3 \cdot D_i^5}{V}\right) = \text{konstan}$$

di mana $P_0$ adalah *Power number* (fungsi geometri impeller dan Reynolds), $\rho$ densitas broth, $N$ kecepatan agitasi, dan $D_i$ diameter impeller. Penurunan skala dari reaktor 50 L ke 5.000 L mensyaratkan *power density* identik untuk mencegah gradien剪切 (*shear*) yang merusak sel rentan seperti CHO atau *primary cells*.

Koefisien transfer oksigen (k$_L$a) dimodelkan dengan persamaan *Van't Riet*:

$$k_L a = K \cdot \left(\frac{P}{V}\right)^{\alpha} \cdot v_s^{\beta}$$

dengan $K, \alpha, \beta$ sebagai parameter empiris (umumnya $\alpha \approx 0.4–0.7$, $\beta \approx 0.3–0.5$), dan $v_s$ adalah *superficial gas velocity*. Untuk proses fungible (misalnya produksi insulin rekombinan di *E. coli*), korelasi ini berlaku universal. Untuk proses non-fungible (misalnya *iPSC-derived cardiomyocytes*), korelasi harus di-*re-fit* untuk setiap *cell line* (Lee, 2024).

### 2.3 Model Ekonomi Kapasitas dan Fungsi Biaya

Wu & Xu (2025) menekankan bahwa keputusan *scale-up* tidak lagi dapat direduksi menjadi fungsi biaya sederhana. Fungsi biaya total (*Total Cost of Ownership*, TCO) yang diperluas menjadi:

$$\text{TCO} = \underbrace{C_{\text{CAPEX}} \cdot \text{CRF}}_{\text{modal}} + \underbrace{C_{\text{OPEX,variabel}}}_{\text{bahan baku}} + \underbrace{C_{\text{OPEX,fix}}}_{\text{utilitas \& SDM}} + \underbrace{C_{\text{resilience}}}_{\text{buffer kapasitas \& QA/RA}}$$

di mana *Capital Recovery Factor* (CRF) didefinisikan sebagai:

$$\text{CRF} = \frac{r(1+r)^n}{(1+r)^n - 1}$$

dengan $r$ tingkat diskonto dan $n$ umur ekonomis aset (umumnya 10–15 tahun untuk fasilitas biomanufaktur). Komponen $C_{\text{resilience}}$ — yang dikemukakan oleh Wu & Xu (2025) sebagai koreksi atas framework TRY klasik — mencakup biaya *contingency* untuk *batch failure*, *regulatory rework*, dan *dual sourcing*.

### 2.4 Kerangka Keputusan Multi-Atribut

Pemilihan antara teknologi fungible dan non-fungible dapat diformulasikan sebagai masalah optimisasi multi-objektif:

$$\max_{x \in X} \left[ f_1(x), f_2(x), \ldots, f_m(x) \right] \quad \text{dengan} \quad g_j(x) \leq 0, \ j=1,\ldots,p$$

di mana $f_1$ merepresentasikan *throughput*, $f_2$ *cost per gram*, $f_3$ *time to market*, dan seterusnya. Solusi *Pareto front* memberikan kompromi optimal, dan teknologi fungible umumnya mendominasi *front* pada kapasitas besar (high-volume, low-margin), sementara teknologi non-fungible mendominasi pada *front* untuk produk *orphan* dan *personalized medicine*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi teknologi bioproses mengikuti protokol berlapis yang dapat dipetakan ke dalam diagram alir keputusan berikut (gabungan kerangka Lee, 2024 dan Wu & Xu, 2025):

**Tahap 1 — Karakterisasi Molekul & Penentuan Fungibilitas**
1. Analisis *critical quality attributes* (CQA): glikolisasi, agregasi, isomerisasi, potensi biologis.
2. Penentuan apakah proses dapat di-*template* menggunakan platform yang ada (misalnya platform *CHO*-based IgG).
3. Jika IF > 0.7 → lintasan fungible (modul kromatografi dan bioreaktor standar). Jika IF < 0.3 → lintasan non-fungible (*bespoke process development*).

**Tahap 2 — Scale-Up dengan Pendekatan Konstanta P/V**
1. Pertahankan $P/V = 1.0–2.5$ kW/m³ untuk sel mamalia.
2. Iterasi tip speed ($v_{tip} = \pi N D_i$) agar ≤ 2 m/s untuk mencegah *shear-induced apoptosis*.
3. Validasi k$_L$a melalui *dynamic gassing-out method* pada tiga skala (lab, pilot, produksi).

**Tahap 3 — Analisis Teknologi Proses (ATA)**
Sesuai standar ICH Q11 dan ASTM E3230, lakukan *process control strategy* dengan parameter kritis CPP (Critical Process Parameters): suhu, pH, DO, *feeding strategy*.

**Tahap 4 — Penilaian Ekonomi & Resilience (Beyond TRY)**
Wu & Xu (2025) memperkenalkan protokol **R$^3$ — Robustness, Regulatory reproducibility, Resilience**:
- **Robustness:** verifikasi desain ruang (*design space*) melalui *DOE* dan analisis *edge of failure*.
- **Regulatory reproducibility:** verifikasi bahwa proses non-fungible dapat memenuhi *pre-approval inspection* (PAI) FDA/EMA tanpa rework.
- **Resilience:** audit dual-sourcing untuk *raw material* dan *single-use consumables*, mitigasi risiko geopolitik rantai pasok.

**Tahap 5 — Transfer Teknologi & Validasi**
1. Engineering batch (3–5 run) untuk konfirmasi parameter skala produksi.
2. Process Performance Qualification (PPQ) sesuai FDA Process Validation Guidance (2011).
3. Continuous Process Verification (CPV) dengan *multivariate statistical process control* (MSPC) — Hotelling T² dan SPE (Squared Prediction Error).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Produksi mAb pada Platform Fungible

Misalkan sebuah perusahaan ingin memproduksi *trastuzumab biosimilar* pada *CHO*-based platform (fungible). Data proses:

- Skala laboratorium: $V_1 = 50$ L, $N_1 = 120$ rpm, $D_{i,1} = 0.10$ m
- Skala target (pilot): $V_2 = 2.000$ L
- Asumsi geometri相似 (geometric similarity): $D_{i,2}/D_{i,1} = (V_2/V_1)^{1/3} = (40)^{1/3} \approx 3.42$
- Maka $D_{i,2} \approx 0.342$ m

**Langkah 1: Hitung kecepatan agitasi baru dengan menjaga tip speed konstan**

$$v_{tip} = \pi N D_i \quad \Rightarrow \quad N_2 = \frac{N_1 D_{i,1}}{D_{i,2}} = \frac{120 \times 0.10}{0.342} \approx 35.1 \text{ rpm}$$

**Langkah 2: Hitung Power number (假设 Rushton impeller, Re turbulent)**

$$P_0 \approx 5.5 \quad \text{(bilangan Power untuk Rushton di Re > 10.000)}$$

$$P = P_0 \cdot \rho \cdot N^3 \cdot D_i^5$$

Untuk broth dengan $\rho \approx 1.050$ kg/m³ dan $\mu \approx 0.001$ Pa·s, hitung Reynolds:

$$Re = \frac{\rho N D_i^2}{\mu} = \frac{1050 \times 35.1/60 \times (0.342)^2}{0.001} \approx 7.2 \times 10^4 \quad \text{(turbulen)}$$

**Langkah 3: Hitung P/V (power density)**

$$P_2 = 5.5 \times 1050 \times \left(\frac{35.1}{60}\right)^3 \times (0.342)^5 \approx 5.440
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
