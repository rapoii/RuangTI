# 1414 — Model Hybrid Fuzzy Inference System Cerdas untuk Inferensi Kualitas Produk Mudah Rusak (Perishable) dalam Rantai Pasok Pangan Ber-IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** An Optimized Hybrid Model for Perishable Product Quality Inference in the Food Supply Chain
**Jurnal & Sitasi Utama:** Muhammad Asrol, Suharjito Suharjito, Riyanto Jayadi (2025). *Emerging Science Journal*. DOI: [https://doi.org/10.28991/esj-2025-09-01-027](https://doi.org/10.28991/esj-2025-09-01-027)
**Sitasi Pendukung:** Domitila Kyule, Jonathan Munguti, Mavindu Muthoka (2025). *Aquaculture Research*. DOI: [https://doi.org/10.1155/are/8816761](https://doi.org/10.1155/are/8816761)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok untuk produk-produk *perishable* (mudah rusak/mudah busuk) menghadapi tantangan struktural yang sangat berbeda dibandingkan dengan rantai pasok produk manufaktur kering (*durable goods*). Asrol, Suharjito, dan Jayadi (2025) dalam *Emerging Science Journal* menegaskan bahwa produk yang sangat rentan ini seperti ikan, daging, susu, buah segar, dan sayuran daun menghadapi dinamika degradasi kualitas yang diakselerasi oleh fluktuasi suhu, kelembapan relatif, konsentrasi gas etilen, paparan cahaya, serta guncangan mekanis selama distribusi dan transportasi (Asrol et al., 2025). Dalam konteks industri perikanan—yang menjadi perhatian Kyule, Munguti, dan Muthoka (2025) untuk kasus *rainbow trout* di Kenya—rantai pasok akuatik memiliki kompleksitas tambahan berupa suhu air yang harus dijaga pada rentang 10–16 °C, kadar oksigen terlarut (DO) minimal 6 mg/L, dan waktu transit yang sangat kritis karena aktivitas enzimatis serta pertumbuhan bakteri patogen yang berlangsung cepat pasca-panen (Kyule et al., 2025).

Urgensi operasional dari topik ini bersifat multidimensi. Pertama, dari perspektif ekonomi, FAO memperkirakan bahwa sekitar 14% pangan global hilang antara panen dan ritel, dengan proporsi signifikan terjadi pada produk perishable. Kedua, dari perspektif keamanan pangan, konsumen akhir sangat bergantung pada visibilitas kualitas yang dapat diverifikasi (*traceability*). Ketiga, dari perspektif keberlanjutan, minimasi losses secara langsung menurunkan jejak karbon dan meningkatkan efisiensi sumber daya. Permasalahan utamanya adalah bahwa kualitas produk perishable bersifat *latent* (tidak terukur langsung dengan sensor sederhana) melainkan merupakan fungsi multivariat dari paparan lingkungan kumulatif. Oleh karena itu, diperlukan model inferensi (*quality inference model*) yang mampu menerjemahkan data sensor IoT menjadi estimasi kualitas yang akurat secara real-time (Asrol et al., 2025).

Asrol et al. (2025) menekankan bahwa pendekatan konvensional berbasis ambang batas (*threshold-based*) seperti sekadar memantau apakah suhu melebihi 8 °C ternyata tidak cukup representatif, karena degradasi kualitas bersifat kumulatif dan nonlinear—produk yang terpapar suhu 8 °C selama 6 jam memiliki profil kualitas yang berbeda secara signifikan dengan produk yang terpapar 12 °C selama 3 jam, meskipun integral suhu-waktu mungkin mirip. Inilah yang kemudian melatarbelakangi pengembangan model hybrid Fuzzy Inference System (FIS) dengan fungsi keanggotaan Gaussian dan *fuzzy c-means* clustering untuk pembangkitan aturan (*rule generation*), yang dioptimasi lebih lanjut menggunakan algoritma genetika.

Dari sisi aplikasi lapangan, Kyule et al. (2025) melaporkan bahwa kelemahan infrastruktur rantai dingin (*cold chain*) di Kenya—yang mengandalkan benih dan pakan impor—membuat kerugian pasca-panen trout sangat tinggi, sehingga kebutuhan akan sistem pemantauan cerdas menjadi semakin nyata. Kedua literatur ini secara sinergi memperkuat justifikasi bahwa teknologi inferensi kualitas cerdas bukan sekadar kebutuhan akademik, melainkan prasyarat strategis untuk keberlanjutan industri pangan global.

---

## 2. Landasan Teori & Formulasi Matematis

Model hybrid yang dikembangkan Asrol et al. (2025) mengintegrasikan tiga pilar matematis: (i) Fuzzy C-Means (FCM) clustering untuk identifikasi struktur data historis, (ii) Fuzzy Inference System (FIS) tipe Takagi-Sugeno-Kang (TSK) dengan fungsi keanggotaan Gaussian sebagai tulang punggung inferensi, dan (iii) Algoritma Genetika (GA) untuk optimasi parameter fungsi keanggotaan agar akurasi inferensi maksimum.

### 2.1 Fungsi Keanggotaan Gaussian

Untuk setiap variabel input ke-$i$ dengan domain $x_i \in \mathbb{R}$, himpunan fuzzy ke-$j$ didefinisikan melalui fungsi keanggotaan Gaussian berikut (Asrol et al., 2025):

$$
\mu_{ij}(x_i) = \exp\left(-\frac{(x_i - c_{ij})^2}{2\sigma_{ij}^2}\right)
$$

di mana $c_{ij}$ adalah pusat (*center*) cluster ke-$j$ untuk variabel ke-$i$, dan $\sigma_{ij}$ adalah parameter lebar (*spread*) yang akan dioptimasi. Pemilihan bentuk Gaussian didasarkan pada sifat *smooth* dan turunannya yang kontinu, sehingga menghasilkan permukaan inferensi yang dapat diturunkan (*differentiable*)—prasyarat penting untuk optimasi berbasis gradien dalam GA.

### 2.2 Algoritma Fuzzy C-Means (FCM)

FCM membagi dataset $\mathbf{X} = \{x_1, x_2, \ldots, x_n\}$ ke dalam $c$ cluster fuzzy dengan meminimasi fungsi objektif:

$$
J_m(U, V) = \sum_{k=1}^{n} \sum_{j=1}^{c} u_{jk}^m \|x_k - v_j\|^2
$$

dengan kendala:

$$
\sum_{j=1}^{c} u_{jk} = 1, \quad \forall k \in \{1,\ldots,n\}
$$

di mana $u_{jk}$ adalah tingkat keanggotaan titik $x_k$ pada cluster $j$, $v_j$ adalah pusat cluster, $m \in [1.5, 3.0]$ adalah parameter *fuzzifier*, dan $\|\cdot\|$ adalah norma Euclidean. Pembaruan pusat cluster dan keanggotaan dilakukan secara iteratif:

$$
v_j = \frac{\sum_{k=1}^{n} u_{jk}^m x_k}{\sum_{k=1}^{n} u_{jk}^m}
$$

$$
u_{jk} = \left[\sum_{l=1}^{c} \left(\frac{\|x_k - v_j\|}{\|x_k - v_l\|}\right)^{\frac{2}{m-1}}\right]^{-1}
$$

Hasil FCM digunakan sebagai *rule generation*—yaitu menentukan pusat $c_{ij}$ dan jumlah aturan fuzzy yang optimal, menggantikan pendekatan *grid-partition* yang konvensional (Asrol et al., 2025).

### 2.3 Inferensi Fuzzy TSK

Untuk aturan fuzzy ke-$r$ dengan antecedent $p$ kondisi:

$$
R_r: \text{IF } x_1 \text{ is } A_{1r} \text{ AND } x_2 \text{ is } A_{2r} \text{ AND } \ldots \text{ AND } x_p \text{ is } A_{pr} \text{ THEN } y_r = f_r(x_1,\ldots,x_p)
$$

dengan consequent $f_r$ berupa fungsi linear:

$$
y_r = a_{0r} + \sum_{i=1}^{p} a_{ir} x_i
$$

Tingkat aktivasi aturan (*firing strength*) dihitung sebagai:

$$
w_r(x) = \prod_{i=1}^{p} \mu_{ir}(x_i)
$$

Output agregat FIS adalah rata-rata terbobot (*weighted average*):

$$
\hat{y}(x) = \frac{\sum_{r=1}^{R} w_r(x) \cdot y_r}{\sum_{r=1}^{R} w_r(x)}
$$

### 2.4 Optimasi dengan Algoritma Genetika

GA mengoptimasi parameter $\sigma_{ij}$ dan koefisien consequent $a_{ir}$ untuk memaksimalkan akurasi yang diukur dengan koefisien determinasi:

$$
R^2 = 1 - \frac{\sum_{k=1}^{n}(y_k - \hat{y}_k)^2}{\sum_{k=1}^{n}(y_k - \bar{y})^2}
$$

Kromosom GA direpresentasikan sebagai vektor parameter $\boldsymbol{\theta} = [\sigma_{11},\ldots,\sigma_{pq}, a_{01},\ldots,a_{pR}]^T$ dengan panjang total $|\boldsymbol{\theta}|$. Fitness function adalah $R^2(\boldsymbol{\theta})$ yang diminimasi melalui $-R^2$, dengan operator seleksi *tournament*, *crossover* uniform, dan *mutasi* Gaussian. Hasil akhir penelitian menunjukkan bahwa model ini mencapai $R^2 = 0{,}873$ (Asrol et al., 2025).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model inferensi kualitas cerdas dalam rantai pasok perishable mengikuti SOP sistematis yang dapat distandarisasi sebagai berikut:

**Tahap 1 — Akuisisi Data Sensor IoT.** Unit *sensor node* (misalnya berbasis ESP32 + DHT22 untuk suhu/kelembapan, sensor MQ-135 untuk CO₂, sensor gas C₂H₄ untuk etilen) dipasang pada kemasan aktif (*smart packaging*) atau kontainer rantai dingin. Data ditransmisikan via LoRaWAN atau MQTT ke *cloud server* dengan frekuensi sampling $\Delta t = 60$ detik.

**Tahap 2 — Pra-pemrosesan Data.** Data mentah melalui proses *cleaning* (penanganan *missing values* dengan interpolasi linear), normalisasi min-max ke domain $[0,1]$, dan deteksi *outlier* menggunakan *Interquartile Range* (IQR). Setiap *record* dinomori dengan timestamp $t_k$ dan *batch ID* untuk traceability.

**Tahap 3 — Clustering FCM untuk Rule Generation.** Dataset historis kualitas nyata (misalnya *Total Volatile Basic Nitrogen*/TVB-N untuk ikan, atau *firmness* untuk buah) dipasangkan dengan vektor fitur lingkungan $(T, RH, CO_2, C_2H_4)$. FCM dijalankan dengan $c=5$–$8$ cluster dan $m=2{,}0$ hingga konvergensi $\|U^{(t+1)} - U^{(t)}\| < 10^{-5}$. Pusat cluster $\{v_j\}$ digunakan untuk inisialisasi pusat fungsi keanggotaan $c_{ij}$.

**Tahap 4 — Inisialisasi FIS dan Tuning GA.** Struktur TSK-FIS diinisialisasi dari hasil FCM. Populasi GA sebanyak $N_{pop}=80$ kromosom dibangkitkan acak dalam rentang $\sigma_{ij} \in [0.05, 0.5]$ dan $a_{ir} \in [-2, 2]$. Evolusi berlangsung maksimum $G=200$ generasi dengan kriteria konvergensi fitness plateau.

**Tahap 5 — Validasi dan Deployment.** Model divalidasi dengan *k-fold cross-validation* ($k=10$), kemudian di-*deploy* sebagai *edge inference service* pada gateway IoT, atau sebagai *microservice* di cloud dengan latensi target $<500$ ms per inferensi.

**Diagram alir logika proses:**

```
[Sensor IoT] → [Data Pipeline] → [Preprocessing]
      ↓
[FCM Clustering] → [Rule Base] → [TSK-FIS Initialization]
      ↓                                  ↓
[GA Optimization] ← [Fitness: R²]   [Validation Set]
      ↓
[Deployed Hybrid Model] → [Real-time Quality Inference]
```

Standar referensi yang relevan meliputi ISO 22005 (*traceability in the feed and food chain*), GS1 EPCIS untuk visibilitas rantai pasok, dan SNI 01-3954-2006 untuk penanganan produk perikanan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan model, diambil skenario rantai pasok **rainbow trout segar** dari instalasi budidaya di Kenya menuju pasar Nairobi, merujuk pada tantangan yang diidentifikasi Kyule et al. (2025).

**Parameter input industri (studi kasus hipotetis):**

| Variabel | Simbol | Nilai Rata-rata | Domain Normalisasi |
|---|---|---|---|
| Suhu (°C) | $x_1$ | 4,5 | $[0,1]$ |
| Kelembapan relatif (%) | $x_2$ | 0,88 | $[0,1]$ |
| Konsentrasi CO₂ (ppm) | $x_3$ | 1.200 | $[0,1]$ |
| Konsentrasi etilen (ppm) | $x_4$ | 0,8 | $[0,1]$ |
| Kualitas target (skor 0–100) | $y$ | aktual 78 | — |

**Langkah 1 — Normalisasi.** Menggunakan min-max pada data historis, vektor fitur ternormalisasi menjadi $x = [0{,}45, 0{,}88, 0{,}60, 0{,}30]$.

**Langkah 2 — FCM Clustering dengan $c=3$ cluster.** Misalkan setelah iterasi konvergen, pusat cluster untuk $x_1$ adalah $c_{11}=0{,}20$, $c_{12}=0{,}50$, $c_{13}=0{,}80$. Derajat keanggotaan untuk $x_1=0{,}45$ dihitung menggunakan:

$$
\mu_{1j}(0{,}45) = \frac{(\|0{,}45 - v_j\|)^{-2/(m-1)}}{\sum_{l=1}^{3}(\|0{,}45 - v_l\|)^{-2/(m-1)}}, \quad m=2
$$

Perhitungan:

- $d_1 = |0{,}45 - 0{,}20| = 0{,$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
