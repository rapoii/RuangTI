# 2053 — Indikator Kinerja Utama untuk Rantai Pasok Loop-Tertutup Remanufaktur Berkelanjutan: Kerangka Multi-Dimensi dengan Dukungan Machine Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Performance Indicators for Sustainable Remanufacturing Closed-Loop Supply Chains
**Jurnal & Sitasi Utama:** Camilo Mejía-Moncayo, Amin Chaabane, Jean‐Pierre Kenné (2025). *Peer-Reviewed Academic Journal (Springer Chapter — Sustainable Remanufacturing)*. DOI: [https://doi.org/10.1007/978-3-031-82896-6_8](https://doi.org/10.1007/978-3-031-82896-6_8)
**Sitasi Pendukung:** Kuo-Yi Lin, Shuhang Wei (2023). *Journal of Green Economy and Low-Carbon Development*, 2(3). DOI: [https://doi.org/10.56578/jgelcd020302](https://doi.org/10.56578/jgelcd020302)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju ekonomi sirkular (*Circular Economy*/CE) telah mengubah secara fundamental paradigma rekayasa rantai pasok konvensional yang bersifat linier (*take–make–dispose*) menjadi arsitektur loop-tertutup (*closed-loop supply chain*/CLSC). Dalam konteks ini, Provinsi Québec—sebagaimana dianalisis oleh Mejía-Moncayo, Chaabane, dan Kenné (2025, DOI: [10.1007/978-3-031-82896-6_8](https://doi.org/10.1007/978-3-031-82896-6_8))—menjadi yurisdiksi pionir yang secara eksplisit mendorong implementasi strategi CE melalui insentif regulasi remanufaktur. Urgensi permasalahan ini bersifat tripartit: (1) **ekonomis**, di mana margin EBITDA perusahaan manufaktur оригинал equipment manufacturer (OEM) di Québec tertekan oleh fluktuasi harga material primer hingga ±18% per tahun; (2) **lingkungan**, dengan target pengurangan emisi GRK sebesar 37,5% di bawah level 1990 yang harus dicapai sebelum 2030; serta (3) **sosial**, berupa peningkatan penciptaan lapangan kerja hijau berkualitas tinggi di sektor *advanced remanufacturing*.

Mengacu pada kerangka tinjauan sistematis yang dilakukan Mejía-Moncayo dkk. (2025), tantangan fundamental dalam adopsi remanufaktur berkelanjutan terletak pada kebutuhan untuk menyeimbangkan ketiga dimensi *Triple Bottom Line* (TBL) secara simultan, sambil menjamin *remanufacturability* produk dan **sirkularitas sistem** sepanjang CLSC. Indikator Kinerja Utama (*Key Performance Indicators*/KPI) muncul sebagai *decision-support tools* yang esensial bagi pengambil keputusan untuk mengontrol dan meningkatkan kinerja sistem. Namun, sifat multidimensional dari remanufaktur berkelanjutan—yang mencakup aspek desain produk, logistik balik, pengolahan ulang, dan redistribusi—menentukan bahwa pemilihan KPI tidak dapat dilakukan secara ad-hoc, melainkan memerlukan kerangka terstruktur berbasis bukti literatur.

Lin dan Wei (2023, DOI: [10.56578/jgelcd020302](https://doi.org/10.56578/jgelcd020302)) melengkapi perspektif ini dengan menunjukkan bahwa *Industrial Circular Economy* (ICE) secara signifikan berkontribusi pada penurunan biaya melalui daur ulang dan pemanfaatan sekunder, sekaligus bahwa *Machine Learning* (ML) menunjukkan potensi substansial dalam optimasi sumber daya di sektor manufaktur. Integrasi kedua perspektif ini—KPI terstruktur dari Mejía-Moncayo dkk. (2025) dan kapabilitas prediktif ML dari Lin & Wei (2023)—menciptakan landasan bagi sistem pendukung keputusan yang mampu mengelola kompleksitas CLSC secara real-time. Modul 2053 ini dirancang untuk memberikan pemahaman holistik tentang bagaimana rekayasawan industri dapat merancang, mengimplementasikan, dan mengaudit sistem KPI remanufaktur berkelanjutan dengan presisi kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Multi-Dimensi KPI TBL

Mejía-Moncayo, Chaabane, dan Kenné (2025) mengusulkan dekomposisi ruang indikator menjadi tiga himpunan ortogonal—**ekonomi (E)**, **lingkungan (Env)**, dan **sosial (S)**—yang selanjutnya diagregasikan melalui indeks komposit $I_{CLSC}$. Formulasi indeks komposit TBL adalah:

$$I_{CLSC} = w_E \cdot \tilde{K}_E + w_{Env} \cdot \tilde{K}_{Env} + w_S \cdot \tilde{K}_S$$

dengan kendala bobot:

$$\sum_{i \in \{E, Env, S\}} w_i = 1, \quad w_i \geq 0$$

di mana $\tilde{K}_i$ adalah nilai KPI ternormalisasi untuk dimensi $i$ menggunakan min-max scaling:

$$\tilde{K}_i = \frac{K_i - K_i^{min}}{K_i^{max} - K_i^{min}}$$

### 2.2 Indikator Sirkularitas Material

*Material Circularity Indicator* (MCI) yang diadopsi dari literatur CLSC didefinisikan sebagai:

$$MCI = 1 - \frac{V_{virgin}}{V_{total}} \cdot \frac{L_{product}}{L_{avg}} + F_{recyc} \cdot \frac{L_{loop}}{L_{avg}}$$

di mana $V_{virgin}$ adalah fraksi material virgin, $V_{total}$ adalah total massa material, $L_{product}$ adalah umur pakai produk, $L_{avg}$ adalah rata-rata umur industri, $F_{recyc}$ adalah fraksi material yang didaur ulang, dan $L_{loop}$ adalah jumlah siklus loop tertutup. Nilai $MCI \in [0, 1]$ dengan $MCI = 1$ menunjukkan sirkularitas sempurna (Mejía-Moncayo dkk., 2025).

### 2.3 Model Ekonomi Remanufaktur

Biaya total operasional loop-tertutup dalam horizon perencanaan $T$ periode adalah:

$$TC = \sum_{t=1}^{T} \left[ C_{col}(q_t) + C_{insp}(x_t) + C_{reman}(y_t) + C_{dis}(z_t) + h \cdot I_t \right] \cdot \frac{1}{(1+r)^t}$$

di mana:
- $C_{col}(q_t)$ = biaya koleksi sebagai fungsi kuantitas返还 $q_t$
- $C_{insp}(x_t)$ = biaya inspeksi dan grading untuk unit $x_t$
- $C_{reman}(y_t)$ = biaya remanufaktur unit $y_t$ (core yang lolos inspeksi)
- $C_{dis}(z_t)$ = biaya disposal unit $z_t$ (core yang tidak layak)
- $h \cdot I_t$ = biaya inventaris dengan $I_t$ = inventory level
- $r$ = tingkat diskonto

Dengan *balance constraint* material flow:

$$q_t = x_t, \quad x_t = y_t + z_t, \quad 0 \leq y_t \leq x_t$$

### 2.4 Optimasi Berbasis Machine Learning

Berdasarkan kerangka Lin dan Wei (2023), fungsi objektif ML-driven untuk optimasi parameter remanufaktur dapat diformulasikan sebagai minimization dari *expected loss*:

$$\min_{\theta} \mathbb{E}_{(x,y) \sim \mathcal{D}} \left[ \mathcal{L}(f_\theta(x), y) \right] + \lambda \|\theta\|_2^2$$

di mana $f_\theta(x)$ adalah model prediktif (misalnya *gradient boosting* atau *deep neural network*) dengan parameter $\theta$, $\mathcal{D}$ adalah distribusi data historis operasional CLSC, dan $\lambda \|\theta\|_2^2$ adalah regularisasi Ridge untuk mencegah *overfitting*. Prediktor $x$ dapat berupa fitur seperti waktu siklus, suhu operasi, tingkat keausan, sedangkan target $y$ berupa *recovery rate* atau *quality grade*.

### 2.5 Formulasi Trade-off Multi-Objektif

Untuk menangani konflik antara dimensi TBL, vector optimasi Pareto digunakan:

$$\max_{d \in \mathcal{D}} \left[ \pi_E(d), \pi_{Env}(d), \pi_S(d) \right]^T$$

dengan *Pareto front* $\mathcal{P}$ didefinisikan sebagai himpunan solusi non-dominated. Trade-off antar tujuan dapat dikuantifikasi menggunakan *Hypervolume Indicator*:

$$HV(\mathcal{P}, z^{ref}) = \lambda \left( \bigcup_{p \in \mathcal{P}} [p_1, z^{ref}_1] \times \cdots \times [p_k, z^{ref}_k] \right)$$

di mana $z^{ref}$ adalah *reference point* dan $\lambda$ adalah ukuran Lebesgue.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka KPI remanufaktur berkelanjutan mengikuti protokol enam fase yang disintesiskan dari Mejía-Moncayo dkk. (2025) dan diperkuat dengan pendekatan ML dari Lin & Wei (2023):

### Fase 1 — Pemetaan CLSC dan Stakeholder
Identifikasi *reverse logistics network nodes* (collection centers, inspection facilities, remanufacturing plants, redistribution warehouses). Buat *Bill-of-Material* (BOM) reverse dan petakan *core acquisition channels*.

### Fase 2 — Seleksi KPI Berbasis Systematic Literature Review (SLR)
Terapkan protokol PRISMA untuk menyaring literatur. Mejía-Moncayo dkk. (2025) mengidentifikasi setidaknya 18 KPI inti yang tersebar dalam tiga dimensi. Kriteria inklusi: *peer-reviewed*, konteks CLSC remanufaktur, periode 2010–2024.

### Fase 3 — Instrumentasi Data dan Akuisisi
Instalasi sensor IoT pada titik-titik kritis: RFID pada *returnable transport items* (RTI), *computer vision* di lini inspeksi, *smart meters* pada peralatan remanufaktur. Arsitektur data lake mengikuti schema:

```
Raw Layer (OLTP) → Staging Layer (Parquet) → Curated Layer (KPIs)
```

### Fase 4 — Pengembangan Model Prediktif
Lin dan Wei (2023) menekankan bahwa ML memungkinkan *predictive maintenance* dan optimasi sumber daya. Pipeline ML mencakup: feature engineering (lag variables, rolling statistics), model selection (*Random Forest*, *XGBoost*, *LSTM*), dan hyperparameter tuning via *Bayesian Optimization*.

### Fase 5 — Kalibrasi Bobot TBL
Gunakan *Analytic Hierarchy Process* (AHP) dengan *expert judgment* dari 5–7 stakeholder kunci untuk menentukan bobot $w_E$, $w_{Env}$, $w_S$. Validasi konsistensi melalui *Consistency Ratio* (CR) dengan阈值 $CR < 0,10$.

### Fase 6 — Continuous Improvement Loop
Implementasi *Plan-Do-Check-Act* (PDCA) dengan audit KPI bulanan dan *feedback* ke desain produk (*Design for Remanufacturability*/DfReman).

**Diagram Alir SOP:**

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Phase 1:     │───▶│ Phase 2:     │───▶│ Phase 3:     │
│ Mapping CLSC │    │ KPI Selection│    │ Data Acqu.   │
└──────────────┘    └──────────────┘    └──────────────┘
                                              │
┌──────────────┐    ┌──────────────┐    ┌─────▼────────┐
│ Phase 6:     │◀───│ Phase 5:     │◀───│ Phase 4:     │
│ PDCA Loop    │    │ AHP Calibr.  │    │ ML Modeling  │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan perusahaan OEM di Québec yang memproduksi *industrial hydraulic valves* dengan volume produksi $V_{new} = 10.000$ unit/tahun. Program remanufaktur mengembalikan core dengan *recovery rate* ekspektasian $\mathbb{E}[R] = 0,72$.

### 4.2 Parameter Input Industri

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Harga jual produk baru | $p_{new}$ | 1.250 | CAD/unit |
| Harga jual remanufaktur | $p_{rem}$ | 850 | CAD/unit |
| Biaya koleksi | $c_{col}$ | 45 | CAD/unit |
| Biaya inspeksi | $c_{insp}$ | 30 | CAD/unit |
| Biaya remanufaktur | $c_{rem}$ | 280 | CAD/unit |
| Biaya disposal | $c_{dis}$ | 15 | CAD/unit |
| Penghematan emisi CO₂ | $\Delta CO_2$ | 18,5 | kg/unit |
| Nilai sosial (pekerjaan) | $V_S$ | 2,4 | job-years/1000 unit |

### 4.3 Langkah Kalkulasi Step-by-Step

**Langkah 1 — Hitung volume core yang kembali:**

$$q = V_{new} \cdot \mathbb{E}[R] = 10.000 \times 0,72 = 7.200 \text{ unit/tahun}$$

**Langkah 2 — Alokasikan core ke grading:**

Dengan asumsi $y/x = 0,85$ (rasio kelayakan inspeksi), maka:

$$y = 7.200 \times 0,85 = 6.120 \text{ unit remanufaktur}$$
$$z = 7.200 \times 0,15 = 1.080 \text{ unit disposal}$$

**Langkah 3 — Hitung Total Cost (TC) Tahunan:**

$$TC = 7.200(45) + 7.200(30) + 6.120(280) + 1.080(15