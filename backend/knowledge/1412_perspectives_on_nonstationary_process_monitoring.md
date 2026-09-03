# 1412 — Pemantauan Proses Nonstasioner di Era Kecerdasan Buatan Industri: Perspektif, Metodologi, dan Integrasi Menuju Industri 5.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Perspectives on nonstationary process monitoring in the era of industrial artificial intelligence
**Jurnal & Sitasi Utama:** Chunhui Zhao (2022). *Journal of Process Control*. DOI: [https://doi.org/10.1016/j.jprocont.2022.06.011](https://doi.org/10.1016/j.jprocont.2022.06.011)
**Sitasi Pendukung:** Jiewu Leng, Xiaofeng Zhu, Zhiqiang Huang (2024). *Journal of Manufacturing Systems*. DOI: [https://doi.org/10.1016/j.jmsy.2024.02.010](https://doi.org/10.1016/j.jmsy.2024.02.010)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses kontemporer pada dekade terakhir ditandai oleh adopsi masif *Industrial Artificial Intelligence* (IAI) sebagai tulang punggung pengambilan keputusan operasional. Zhao (2022) dalam *Journal of Process Control* menegaskan bahwa mayoritas sistem *Statistical Process Control* (SPC) klasik — yang sejak era Shewhart (1924) dibangun atas asumsi kestationeran — mengalami degradasi kinerja signifikan ketika diterapkan pada proses modern yang dicirikan oleh *drift*, *shifts*, *mode changes*, serta dinamika *multimodal* akibat permintaan *mass customization*, pergantian *feedstock*, dan *reconfigurable manufacturing*. Ketidakstasioneran (*nonstationarity*) secara statistik dimanifestasikan sebagai perubahan parameter rata-rata $\boldsymbol{\mu}(t)$, kovarians $\boldsymbol{\Sigma}(t)$, maupun struktur korelasi antar-variabel, sehingga batas kendali (*control limits*) yang dikalibrasi pada kondisi *nominal* menjadi usang dan menghasilkan *false alarms* maupun *missed detections* dengan proporsi yang merusak Key Performance Indicator (KPI) pabrik.

Urgensi ekonomi fenomena ini sangat substansial. Laporan industri yang dirujuk Zhao (2022) mengestimasi bahwa *false alarm rate* pada sistem SPC tradisional dapat mencapai 15–40% pada proses kimia kontinu dengan ribuan variabel, setara dengan kerugian produksi ratusan ribu USD per tahun per unit operasi hanya dari *unnecessary shutdown*. Lebih jauh, pada industri semikonduktor dengan toleransi geometri *sub-nanometer*, satu kejadian *missed detection* dapat menyebabkan报废 (*scrap*) seluruh batch wafer bernilai jutaan dolar. Zhao (2022) mengargumentasikan bahwa IAI — yang mengintegrasikan *machine learning*, *deep learning*, dan *transfer learning* ke dalam arsitektur pemantauan proses — menawarkan paradigma adaptif yang mampu meng-*update* model referensi secara *online*, meniru perilaku operator ahli namun dengan skalabilitas ribuan sensor.

Paralel dengan itu, Leng, Zhu, & Huang (2024) dalam *Journal of Manufacturing Systems* memposisikan IAI bukan sekadar sebagai evolusi Industry 4.0, melainkan sebagai *enabler* fundamental Industry 5.0 yang human-centric, *sustainable*, dan *resilient*. Mereka mengidentifikasi bahwa kualitas model IAI untuk proses nonstasioner sangat ditentukan oleh tiga pilar: (i) kapasitas representasi fitur (*feature representation*), (ii) kemampuan generalisasi lintas-domain (*domain generalization*), dan (iii) interpretabilitas untuk kolaborasi manusia-mesin. Tanpa kerangka IAI yang kokoh, transisi menuju *human-cyber-physical system* (HCPS) yang menjadi visi Industry 5.0 akan terhambat oleh *black-box* decisions yang tidak dapat diaudit oleh operator lini produksi. Keduanya — Zhao (2022) dan Leng dkk. (2024) — sepakat bahwa titik kritis riset dan rekayasa industri ke depan adalah membangun algoritma yang secara simultan *adaptive*, *robust*, dan *explainable* terhadap dinamika proses nonstasioner.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Pemantauan Multivariat Konvensional

Misalkan $\mathbf{X} = [\mathbf{x}_1, \mathbf{x}_2, \ldots, \mathbf{x}_n]^T \in \mathbb{R}^{n \times m}$ merupakan matriks data historis dengan $n$ observasi dan $m$ variabel proses yang telah dinormalisasi. Model PCA dekomposisi $\mathbf{X}$ ke dalam subruang *principal* dan *residual*:

$$\mathbf{X} = \mathbf{T}\mathbf{P}^T + \mathbf{E} = \sum_{i=1}^{k} \mathbf{t}_i \mathbf{p}_i^T + \mathbf{E}$$

dengan $\mathbf{P} \in \mathbb{R}^{m \times k}$ adalah *loading matrix* yang kolom-kolomnya adalah *eigenvectors* dari matriks kovarians $\mathbf{S} = \frac{1}{n-1}\mathbf{X}^T\mathbf{X}$, dan $k$ dipilih sehingga *cumulative variance contribution* (CPV) melebihi ambang 85%.

Dua statistik pemantauan standar didefinisikan sebagai:

$$T^2 = \mathbf{x}_{\text{new}}^T \mathbf{P} \boldsymbol{\Lambda}^{-1} \mathbf{P}^T \mathbf{x}_{\text{new}} \sim \frac{k(n-1)}{n-k} F_{k, n-k}$$

$$Q = \mathbf{x}_{\text{new}}^T (\mathbf{I} - \mathbf{P}\mathbf{P}^T) \mathbf{x}_{\text{new}} = \left\| (\mathbf{I} - \mathbf{P}\mathbf{P}^T)\mathbf{x}_{\text{new}} \right\|^2$$

dengan $\boldsymbol{\Lambda} = \text{diag}(\lambda_1, \ldots, \lambda_k)$ memuat $k$ *eigenvalues* dominan. Batas kendali $T^2_{\alpha}$ dan $Q_{\alpha}$ diperoleh dari distribusi $F$ dan *kernel density estimation* (Jackson & Mudholkar, 1979; direview dalam Zhao, 2022).

### 2.2 Karakteristik Proses Nonstasioner

Zhao (2022) membedakan tiga rezim ketidakstasioneran:

1. **Slow drift:** $\boldsymbol{\mu}(t) = \boldsymbol{\mu}_0 + \mathbf{v}t$, dengan laju $\mathbf{v}$ konstan.
2. **Abrupt shift:** $\mathbf{x}_t \sim \mathcal{N}(\boldsymbol{\mu}_0 + \Delta\boldsymbol{\mu}, \boldsymbol{\Sigma}_0)$ untuk $t \geq t^*$.
4. **Time-varying covariance:** $\boldsymbol{\Sigma}(t)$ berubah secara *piecewise*.

Model *exponentially weighted moving average* (EWMA) untuk *adaptive mean* ditulis:

$$\mathbf{z}_t = \lambda \mathbf{x}_t + (1-\lambda)\mathbf{z}_{t-1}, \quad 0 < \lambda \leq 1$$

dengan *forgetting factor* $\lambda$ yang mengendalikan bobot historis. *Effective sample size* adalah $N_{\text{eff}} = 1/\lambda$.

### 2.3 Slow Feature Analysis (SFA) untuk Ekstraksi Tren Lambat

Untuk menangkap dinamika nonstasioner laten, Wiskott & Sejnowski (2002) — yang diadopsi Zhao (2022) — mengusulkan SFA yang meminimalkan variabilitas *output* sesegera mungkin:

$$\min_{\mathbf{W}} \langle \dot{\mathbf{y}}_t^2 \rangle \quad \text{subject to} \quad \langle \mathbf{y}_t \rangle = 0,\ \langle \mathbf{y}_t \mathbf{y}_t^T \rangle = \mathbf{I}$$

dengan $\dot{\mathbf{y}}_t = \mathbf{y}_{t+1} - \mathbf{y}_t$, dan $\mathbf{y}_t = \mathbf{W}\mathbf{x}_t$. Solusi analitiknya adalah $\mathbf{W}$ yang terdiri dari *eigenvectors* generalized dari masalah:

$$\mathbf{A}\mathbf{w}_i = \eta_i \mathbf{B}\mathbf{w}_i$$

dengan $\mathbf{B}$ matriks kovarians sinyal dan $\mathbf{A}$ matriks kovarians turunannya.

### 2.4 Arsitektur Jaringan Neural untuk IAI

Leng dkk. (2024) memformalkan arsitektur IAI sebagai *stacked hierarchy*:

$$\mathbf{h}^{(l)} = \sigma^{(l)}\left( \mathbf{W}^{(l)} \mathbf{h}^{(l-1)} + \mathbf{b}^{(l)} \right), \quad l = 1, \ldots, L$$

dengan fungsi kerugian gabungan untuk tugas regresi, klasifikasi, dan *anomaly detection*:

$$\mathcal{L}_{\text{total}} = \alpha \mathcal{L}_{\text{MSE}} + \beta \mathcal{L}_{\text{CE}} + \gamma \mathcal{L}_{\text{contrastive}}$$

Parameter regularisasi $(\alpha, \beta, \gamma)$ diset *trade-off* antara akurasi prediksi, diskriminasi anomali, dan kohesi representasi fitur.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti kerangka *closed-loop adaptive monitoring* yang dikodifikasi oleh Zhao (2022) menjadi SOP 5-tahap:

**Tahap 1 — Akuisisi & Praproses:** Sensor *distributed control system* (DCS) mengirim data pada laju $\Delta t$ ke *data historian* (PI, OSIsoft). Normalisasi *z-score*:

$$\tilde{x}_{ij} = \frac{x_{ij} - \mu_j}{\sigma_j}$$

dilakukan dengan parameter $\mu_j, \sigma_j$ yang diperbarui *rolling* tiap 1000 sampel.

**Tahap 2 — Feature Engineering:** Transformasi *time-lag embedding* membentuk *augmented matrix* $\mathbf{X}_{\text{aug}} = [\mathbf{x}_t, \mathbf{x}_{t-1}, \ldots, \mathbf{x}_{t-d+1}]$ dengan *lag order* $d$ dipilih via Akaike Information Criterion (AIC). SFA diterapkan untuk memproyeksikan $\mathbf{X}_{\text{aug}}$ ke komponen tren lambat $\mathbf{Y}_{\text{slow}}$.

**Tahap 3 — Model Adaptation:** *Just-in-Time* (JIT) learning memilih $K$ tetangga terdekat berbasis Euclidean distance $\|\mathbf{x}_{\text{query}} - \mathbf{x}_i\|$ dari jendela *sliding window* $[t-W+1, t]$ dengan $W = 500$ untuk melatih model lokal *locally weighted regression*.

**Tahap 4 — Monitoring & Diagnosis:** Statistik $T^2$ dan $Q$ dikalkulasi setiap *sample time*. Jika $T^2 > T^2_{\alpha}$ atau $Q > Q_{\alpha}$, *contribution plot*:

$$\text{cont}_j = (\mathbf{x}_{\text{new}} - \hat{\mathbf{x}}_{\text{new}}) \cdot \mathbf{S}^{-1} \cdot (\mathbf{x}_{\text{new}} - \hat{\mathbf{x}}_{\text{new}})_j$$

digunakan untuk *root cause isolation*.

**Tahap 5 — Feedback & Model Update:** Model PCA lokal direfit setiap $N_{\text{update}}$ sampel menggunakan algoritma *recursive least squares* (RLS) dengan faktor lupa $\lambda$. Operator menerima rekomendasi melalui HMI yang mengintegrasikan *explainable AI* (SHAP/LIME sesuai kerangka Leng dkk., 2024).

Seluruh SOP terdokumentasi dalam ISA-88/ISA-95 batch control standard dan dapat diaudit sesuai ISO 22400 untuk KPI manufaktur.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Unit *distillation column* pada pabrik petrokimia dengan $m = 8$ variabel proses terkritis (suhu, tekanan, *reflux ratio*, laju umpan, komposisi 4 fraksi) dan target produksi *naphtha* 99,5% kemurnian. Kami memiliki *dataset training* $n = 1000$ observasi kondisi operasi normal (segmen stasioner pendek).

**Langkah 1 — Hitung matriks kov