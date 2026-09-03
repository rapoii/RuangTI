# 2005 — Sistem Tertutup (Closed-Loop Systems) sebagai Jalur Menuju Ekonomi Sirkular dan Keberlanjutan Lingkungan: Integrasi Teknologi Digital untuk Manajemen Produk Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Systems to Circular Economy: Pathway to Environmental Sustainability?
**Jurnal & Sitasi Utama:** Sami Kara, Michael Zwicky Hauschild, John W. Sutherland (2022). *Closed-loop systems to circular economy: A pathway to environmental sustainability?* **CIRP Annals**. DOI: [https://doi.org/10.1016/j.cirp.2022.05.008](https://doi.org/10.1016/j.cirp.2022.05.008)
**Sitasi Pendukung:** Magdalena Rusch, Josef-Peter Schöggl, Rupert J. Baumgartner (2022). *Application of digital technologies for sustainable product management in a circular economy: A review*. **Business Strategy and the Environment**. DOI: [https://doi.org/10.1002/bse.3099](https://doi.org/10.1002/bse.3099)

---

## 1. Pendahuluan dan Konteks Industri

Krisis keberlanjutan lingkungan global telah memaksa komunitas Teknik Industri untuk merekonstruksi secara fundamental paradigma produksi dan konsumsi. Model ekonomi linier (*take–make–use–dispose*) yang telah menjadi tulang punggung Revolusi Industri sejak abad ke-18 terbukti gagal mempertahankan keseimbangan ekologis planet, dengan emisi gas rumah kaca (GRK) kumulatif yang telah melampaui *planetary boundary* untuk perubahan iklim, siklus biogeokimia nitrogen dan fosfor, serta integritas biosfer (Rockström et al., 2009 — direferensikan dalam kerangka diskusi Kara et al., 2022). Dalam konteks ini, **Sami Kara, Michael Zwicky Hauschild, dan John W. Sutherland** (2022) di jurnal *CIRP Annals* menyajikan tinjauan kritis tentang bagaimana *closed-loop systems* (CLS) berfungsi sebagai *pathway* rekayasa menuju ekonomi sirkular (*circular economy*, CE) dan keberlanjutan lingkungan.

Kara et al. (2022) berargumen bahwa transisi dari sistem lini terbuka ke sistem lini tertutup bukan sekadar pilihan strategis melainkan keniscayaan operasional. Dalam sistem lini terbuka, material mengalir secara satu arah dari ekstraksi sumber daya alam menuju tempat pembuangan akhir (*landfill*), menghasilkan akumulasi limbah yang merusak kapasitas asimilatif lingkungan. Sebaliknya, CLS dirancang untuk meminimalkan *leakage* material dengan cara menutup siklus material melalui strategi *reduce*, *reuse*, *remanufacture*, dan *recycle* (4R), yang secara formal dimasukkan ke dalam kerangka **Ellen MacArthur Foundation (EMF)**. Implementasi CLS memerlukan rekayasa ulang rantai pasok menjadi *closed-loop supply chain* (CLSC) yang menggabungkan aliran maju (*forward logistics*) dengan aliran balik (*reverse logistics*).

Secara empiris, urgensi transisi ini dapat diukur melalui indikator *Material Footprint* (MF) global yang telah melampaui 100 miliar metrik ton per tahun dan *global resource extraction* yang mendekati 90 miliar ton/tahun (UNEP International Resource Panel, dirujuk dalam diskusi Kara et al., 2022). Sektor manufaktur, yang merupakan tulang punggung output ekonomi global (~16% PDB dunia menurut World Bank), bertanggung jawab atas ~20% emisi GRK global dan ~25% konsumsi material global. Tanpa transformasi struktural melalui CLS, target **Sustainable Development Goals (SDGs)** — khususnya SDG 12 (*Responsible Consumption and Production*) dan SDG 13 (*Climate Action*) — tidak akan tercapai pada tahun 2030.

Kontribusi penting kedua literatur datang dari **Magdalena Rusch, Josef-Peter Schöggl, dan Rupert J. Baumgartner** (2022) di *Business Strategy and the Environment* yang melakukan *systematic literature review* terhadap **146 contoh aplikasi teknologi digital (DT)** dalam manajemen produk berkelanjutan (*sustainable product management*, SPM) pada konteks CE. Mereka mengidentifikasi empat pilar DT — **Internet of Things (IoT), Big Data Analytics, Artificial Intelligence (AI), dan Blockchain** — sebagai *enabler* teknis yang memungkinkan CLS beroperasi secara efektif melalui pelacakan produk, optimasi siklus hidup, dan transparansi rantai nilai. Sinergi antara kerangka CLS ala Kara et al. (2022) dengan kapabilitas DT ala Rusch et al. (2022) membentuk **arsitektur digital-twinned circular economy** yang menjadi perhatian utama modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Neraca Massa dalam Closed-Loop System

Representasi paling fundamental dari CLS adalah persamaan neraca massa sistem dinamik yang dinyatakan oleh Kara et al. (2022) sebagai perluasan dari prinsip konservasi material dalam kerangka *Material Flow Analysis* (MFA):

$$M_{in}(t) = M_{out}(t) + \frac{dM_{stock}(t)}{dt} + M_{loss}(t)$$

di mana:
- $M_{in}(t)$ = laju aliran massa masuk (kg/tahun)
- $M_{out}(t)$ = laju aliran massa keluar sebagai produk fungsional (kg/tahun)
- $M_{stock}(t)$ = akumulasi stok material dalam siklus hidup (kg)
- $M_{loss}(t)$ = *leakage* atau kehilangan material ke lingkungan (kg/tahun)

Untuk CLS ideal, $M_{loss}(t) \to 0$, yang berarti seluruh material teoritis dapat dipertahankan dalam siklus penggunaan. Dalam praktiknya, batas termodinamika kedua (*entropy generation*) membatasi kemampuan pencapaian nol mutlak ini.

### 2.2 Indikator Sirkularitas Material (Material Circularity Indicator — MCI)

EMF dan Granta Design telah merumuskan **Material Circularity Indicator (MCI)** yang diadopsi Kara et al. (2022) sebagai metrik kuantitatif tingkat sirkularitas:

$$MCI = 1 - \frac{LFW + F(W) + F(M)}{2 \cdot LFW + F(W) + F(M)}$$

di mana:
- $LFW = \frac{\frac{V+W}{2}}{\frac{V+W+M}{2}}$ = *Linear Flow Index* (fraksi material yang mengalir secara linier)
- $V$ = jumlah material virgin (virgin input)
- $W$ = jumlah material yang terbuang (*waste output*)
- $F(W)$ = jumlah废料 (*waste* flow yang dihasilkan dari proses)
- $F(M)$ = aliran material dalam komponen produk

Nilai MCI berkisar antara 0 (sepenuhnya linier) hingga 1 (sepenuhnya sirkular). MCI merupakan komponen integral dalam **Life Cycle Assessment (LCA)** sesuai standar **ISO 14040:2006** dan **ISO 14044:2006**.

### 2.3 Model Optimasi Closed-Loop Supply Chain (CLSC)

Formulasi CLSC yang banyak diadopsi dalam literatur rekayasa industri mengikuti formulasi **Mixed Integer Linear Programming (MILP)** untuk mendesain jaringan *reverse logistics*:

$$\min Z = \sum_{i \in I}\sum_{j \in J} c_{ij}^f x_{ij}^f + \sum_{k \in K}\sum_{l \in L} c_{kl}^r x_{kl}^r + \sum_{m \in M} h_m I_m$$

*Subject to:*
$$\sum_{j \in J} x_{ij}^f \leq S_i \quad \forall i \in I$$
$$\sum_{i \in I} x_{ij}^f \geq D_j \quad \forall j \in J$$
$$\sum_{k \in K} x_{kl}^r \leq R_k \quad \forall k \in K$$
$$x_{ij}^f, x_{kl}^r \in \mathbb{Z}_{\geq 0}$$

di mana:
- $c_{ij}^f$ = biaya aliran maju dari fasilitas $i$ ke pelanggan $j$
- $c_{kl}^r$ = biaya aliran balik dari titik回收 $k$ ke pusat daur ulang $l$
- $h_m$ = biaya inventori di lokasi $m$
- $I_m$ = level inventori di lokasi $m$
- $S_i$ = kapasitas suplai fasilitas $i$
- $D_j$ = permintaan pelanggan $j$
- $R_k$ = kapasitas回收 di titik $k$

### 2.4 Dampak Lingkungan dan Carbon Footprint dalam CLS

Berdasarkan metodologi **ReCiPe 2016** dan kerangka Environmental Footprint (EF 3.0) yang dirujuk Kara et al. (2022), total dampak lingkungan CLS dapat dihitung sebagai:

$$EC_{total} = \sum_{i=1}^{n} Q_i \cdot CF_i$$

di mana:
- $EC_{total}$ = total *environmental impact score* (dalam unit *Pt* atau *kg CO₂-eq*)
- $Q_i$ = kuantitas emisi zat $i$ ke kategori dampak (kg zat)
- $CF_i$ = *characterization factor* zat $i$ untuk kategori dampak tertentu

Untuk emisi karbon, faktor emisi baja virgin menurut *World Steel Association* adalah $EF_{steel,virgin} \approx 1.99 \text{ kg CO}_2\text{-eq/kg}$, sedangkan baja daur ulang $EF_{steel,recycled} \approx 0.5 \text{ kg CO}_2\text{-eq/kg}$. Reduksi emisi per kg material daur ulang adalah $\Delta EF_{steel} \approx 1.49 \text{ kg CO}_2\text{-eq/kg}$.

### 2.5 Model Matematis untuk Produk Digital-Twinned (Rusch et al., 2022)

Rusch et al. (2022) mendeskripsikan model *digital twin* untuk produk dalam CLS sebagai fungsi status yang diperbarui secara real-time melalui sensor IoT:

$$\mathbf{S}(t+\Delta t) = f(\mathbf{S}(t), \mathbf{U}(t), \mathbf{E}(t))$$

di.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
