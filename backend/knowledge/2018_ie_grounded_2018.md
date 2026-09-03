# 2018 — Desain, Pemodelan, dan Implementasi Digital Twin: Rekayasa Sistematis untuk Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Design, Modeling and Implementation of Digital Twins
**Jurnal & Sitasi Utama:** Mariana Segovia, Joaquín García-Alfaro (2022). *Sensors*, 22(14), 5396. DOI: [https://doi.org/10.3390/s22145396](https://doi.org/10.3390/s22145396)
**Sitasi Pendukung:** Jingxi Zhang, Carsten Ellwein, Malte Heithoff (2025). *Software & Systems Modeling*. DOI: [https://doi.org/10.1007/s10270-024-01255-0](https://doi.org/10.1007/s10270-024-01255-0)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental cara organisasi manufaktur dan rantai pasok beroperasi. Di tengah meningkatnya kompleksitas sistem sosio-tiknis, kebutuhan akan representasi virtual yang akurat dari aset fisik menjadi krusial. Segovia dan García-Alfaro (2022) menekankan bahwa *Digital Twin* (DT) bukan sekadar model CAD 3D pasif, melainkan **seperangkat model yang dihasilkan komputer (computer-generated models) yang memetakan objek fisik ke ruang virtual**, di mana terjadi pertukaran informasi dua arah antara elemen fisik dan virtual untuk *monitoring, simulation, prediction, diagnosis,* dan *control* terhadap keadaan serta perilaku objek fisik (Segovia & García-Alfaro, 2022, DOI: 10.3390/s22145396).

Urgensi ekonomi dari penerapan DT sangat nyata. Menurut laporan McKinsey yang dikutip dalam banyak literatur pendukung, implementasi DT berpotensi mengurangi *unplanned downtime* hingga 30%, menurunkan biaya pemeliharaan 25%, dan meningkatkan produktivitas tenaga kerja hingga 20%. Segovia dan García-Alfaro (2022) mencatat bahwa DT memungkinkan terciptanya *new business models*—misalnya *as-a-service* untuk peralatan industri—di mana data hasil penginderaan virtual menjadi sumber pendapatan baru.

Secara teknis, tantangan rekayasa DT berpijak pada tiga pilar: (1) **akuisisi data sensor** dengan latensi rendah, (2) **sinkronisasi model virtual-fisik**, dan (3) **verifikasi fidelitas** model. Zhang, Ellwein, dan Heithoff (2025) melengkapi perspektif ini dengan menyoroti bahwa rekayasa DT merupakan tantangan *software and systems engineering* di mana **belum ada pendekatan sistematis yang mapan** (DOI: 10.1007/s10270-024-01255-0). Mereka mengusulkan penggunaan **Asset Administration Shell (AAS)** sebagai fondasi populer untuk DT di Industri 4.0, yang hadir dalam tiga tipe berbeda dan mendukung rekayasa berbagai jenis serta komponen DT (Zhang et al., 2025).

Konteks industri yang melatarbelakangi modul ini mencakup: (a) pabrik diskrit dengan lini perakitan multi-stasiun, (b) fasilitas proses kontinu (kilang, petrokimia), (c) infrastruktur kritis (jaringan listrik, transportasi rel), dan (d) aset bergerak seperti armada kendaraan logistik. Pada semua domain ini, keputusan rekayasa harus menyeimbangkan tiga trade-off fundamental: **fidelitas model vs. biaya komputasi**, **latensi komunikasi vs. bandwidth**, dan **granularitas data vs. privasi/keamanan siber**.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konseptual Digital Twin

Segovia dan García-Alfaro (2022) memformulasikan DT sebagai sistem dengan tiga komponen utama yang saling terhubung melalui tautan komunikasi:

$$\text{DT} = \{M_p, M_v, C_{pv}\}$$

di mana $M_p$ adalah *physical entity* (objek fisik dengan sensor/aktuator), $M_v$ adalah *virtual counterpart* (model matematis di ruang komputasi), dan $C_{pv}$ adalah *connection layer* yang menjamin pertukaran data dua arah.

### 2.2 Model State-Space untuk Representasi Virtual

Model virtual $M_v$ umumnya dinyatakan dalam bentuk *state-space representation* kontinu atau diskret:

$$\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{w}(t)$$
$$\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) + \mathbf{v}(t)$$

di mana $\mathbf{x}(t) \in \mathbb{R}^n$ adalah vektor status, $\mathbf{u}(t)$ adalah vektor input kontrol, $\mathbf{y}(t)$ adalah vektor output terukur, $\{\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}\}$ adalah matriks sistem, dan $\mathbf{w}(t)$, $\mathbf{v}(t)$ adalah derau proses dan pengukuran dengan kovarians $\mathbf{Q}$ dan $\mathbf{R}$ (Segovia & García-Alfaro, 2022).

### 2.3 Persamaan Sinkronisasi dan Latensi

Sinkronisasi antara $M_p$ dan $M_v$ dimodelkan melalui indeks deviasi status:

$$\Delta(t) = \|\mathbf{x}_p(t) - \mathbf{x}_v(t)\|_2 = \sqrt{\sum_{i=1}^{n}\left(x_{p,i}(t) - x_{v,i}(t)\right)^2}$$

Di mana $\mathbf{x}_p(t)$ adalah status terukur fisik dan $\mathbf{x}_v(t)$ adalah status prediksi virtual. Latensi komunikasi $\tau_c$ mempengaruhi prediksi melalui:

$$\mathbf{x}_v(t+\tau_c) = e^{\mathbf{A}\tau_c}\mathbf{x}_v(t) + \int_{t}^{t+\tau_c} e^{\mathbf{A}(t+\tau_c-s)}\mathbf{B}\mathbf{u}(s)\,ds$$

### 2.4 Indeks Fidelitas dan Akurasi Prediktif

Zhang et al. (2025) menyoroti bahwa salah satu *common requirements* DT adalah kemampuan untuk mempertahankan fidelitas representasi. Formulasi umum indeks fidelitas adalah:

$$F = 1 - \frac{\sum_{t=1}^{T}(\hat{y}(t) - y(t))^2}{\sum_{t=1}^{T}(y(t) - \bar{y})^2} = 1 - \frac{\text{SS}_{res}}{\text{SS}_{tot}}$$

Nilai $F \in [0,1]$ di mana $F=1$ berarti prediksi sempurna dan $F=0$ berarti setara model naive (rata-rata).

### 2.5 Model Biaya Manfaat (Cost-Benefit)

Untuk justifikasi ekonomi implementasi DT, biaya total kepemilikan (TCO) dan *net present value* (NPV) dapat diformulasikan:

$$\text{NPV}_{DT} = \sum_{t=0}^{T}\frac{B_t - C_t}{(1+r)^t}$$

dengan $B_t$ = manfaat (pengurangan downtime, efisiensi energi), $C_t$ = biaya (sensor, komputasi, integrasi), dan $r$ = tingkat diskonto.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan metodologi yang diuraikan Segovia dan García-Alfaro (2022), serta kerangka sistematis Zhang et al. (2025), prosedur rekayasa DT dapat distandarkan menjadi **lima fase berurutan**:

### Fase 1: Analisis Kebutuhan Fungsional (*Functional Requirements Selection*)

Tim rekayasa menetapkan kebutuhan operasional yang akan didukung DT. Zhang et al. (2025) mengekstrak *common requirements* dari berbagai definisi DT dan mengkategorikannya ke dalam tiga tipe AAS:

| Tipe AAS | Fungsi Utama | Komponen DT yang Didukung |
|---|---|---|
| **Type 1 (Asset Interface)** | Antarmuka data dasar | Akuisisi data, identifikasi aset |
| **Type 2 (Asset Integration)** | Integrasi data multi-aset | Korelasi lintas-aset, *state propagation* |
| **Type 3 (Asset Lifecycle)** | Manajemen siklus hidup | Prediksi degradasi, rekomendasi pemeliharaan |

### Fase 2: Perencanaan Arsitektur (*Architecture Planning*)

Arsitektur berlapis dirancang sebagai berikut:

1. **Lapisan Sensor (Physical Layer):** IoT sensor, PLC, SCADA, edge gateways
2. **Lapisan Komunikasi (Connectivity Layer):** MQTT, OPC-UA, OPC-UA Pub/Sub, 5G/TSN
3. **Lapisan Platform (Platform Layer):** Cloud/edge computing, time-series database (InfluxDB, TimescaleDB)
4. **Lapisan Model (Analytics Layer):** Model CFD, FEA, machine learning, reduced-order models
5. **Lapisan Layanan (Service Layer):** API REST/gRPC, dashboard, alert system

### Fase 3: Konstruksi Model Virtual

Sesuai Segovia dan García-Alfaro (2022), model virtual dibangun melalui identifikasi parameter ($\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$) menggunakan data historis, kalibrasi dengan *least-squares*, dan validasi dengan *cross-validation* $k$-fold.

### Fase 4: Integrasi Fisik-Virtual

Implementasi tautan dua arah: (a) *upstream* — data sensor mengalir ke model virtual; (b) *downstream* — output model mengalir ke aktuator/sistem kontrol.

### Fase 5: Verifikasi dan Validasi (V&V)

Pengujian terhadap: (i) akurasi prediksi (Nilai $F$ ≥ 0.85 untuk aplikasi industri), (ii) latensi end-to-end ($\tau_c \leq 100$ ms untuk kontrol real-time), dan (iii) ketahanan terhadap kegagalan sensor (Zhang et al., 2025).

### Diagram Alir SOP

```
[Mulai] → [Kebutuhan Fungsional] → [Pemilihan Tipe AAS]
   ↓
[Perencanaan Arsitektur] → [Kalibrasi Model Virtual]
   ↓
[Integrasi Sensor-Aktuator] → [Uji Sinkronisasi]
   ↓
[V&V Fidelitas] → [Deploy Operasional] → [Monitoring Berkelanjutan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: lini Perakitan Robotik Industri Otomotif

Sebuah lini perakitan memiliki **8 robot las** dengan masa pakai rata-rata 5 tahun. Operator ingin menerapkan DT untuk memprediksi degradasi dan mengoptimalkan jadwal pemeliharaan.

**Parameter Input:**
- Jumlah robot: $N = 8$
- Biaya kegagalan per jam: $C_f = \text{Rp } 50.000.000$
- Frekuensi kegagalan tanpa DT: $\lambda_0 = 0{,}8$ kegagalan/bulan
- Biaya investasi DT: $C_{DT} = \text{Rp } 2.500.000.000$ (satu kali)
- Biaya operasional DT/tahun: $C_{op} = \text{Rp } 400.000.000$

### 4.2 Perhitungan Pengurangan Downtime

Berdasarkan bukti empiris Segovia dan García-Alfaro (2022) bahwa DT dapat menurunkan *unplanned downtime* hingga 30%, dengan reduksi biaya pemeliharaan 25%:

$$\lambda_{DT} = \lambda_0 \times (1 - 0{,}30) = 0{,}8 \times 0{,}70 = 0{,}56 \text{ kegagalan/bulan}$$

**Penghematan tahunan dari pengurangan downtime:**

$$S_{dt} = (\lambda_0 - \lambda_{DT}) \times 12 \times C_f \times t_{repair}$$

dengan asumsi $t_{repair} = 4$ jam per kegagalan:

$$S_{dt} = (0{,}80 - 0{,}56) \times 12 \times \text{Rp } 50.000.000 \times 4$$
$$S_{dt} = 0{,}24 \times 12 \times 4 \times \text{Rp } 50.000.000$$
$$S_{dt} = \text{Rp } 576.000.000 \text{ per tahun}$$

**Penghematan dari efisiensi pemeliharaan (25%):**

Asumsi biaya pemeliharaan awal $C_m = \text{Rp } 1.200.000.000$/tahun:

$$S_{pm} = 0{,}25 \times C_m = 0{,}25 \times \text{Rp } 1.200.000.000 = \text{Rp } 300.000.000/\text{tahun}$$

**Total manfaat tahunan:**

$$B = S_{dt} + S_{pm} = \text{Rp } 876.000.000/\text{tahun}$$

### 4.3 Analisis NPV (5 tahun, r = 10%)

| Tahun | Benefit ($B_t$) | Cost ($C_t$) | Net ($B_t - C_t$) | Faktor Diskon $(1{,}1)^{-t}$ | PV |
|---|---|---|---|---|---|
| 0 | 0 | 2.500.000.000 | -2.500.000.000 | 1,0000 | -2.500.000.000 |
| 1 | 876.000.000 | 400.000.000 | 476.000.000 | 0,9091 | 432.727.273 |
| 2 | 876.000.000 | 400.000.000 | 476.000.000 | 0,8264 | 393.388.430 |
| 3 | 876.000.000 | 400.000.000 | 476.000.000 | 0,7513 | 357.625.845 |
| 4 | 876.000.000 | 400.000.000 | 476.000.000 | 0,6830 | 325.114.405 |
| 5 | 876.000.000 | 400.000.000 | 476.000.000 | 0,6209 | 295.558.551 |

$$\text{NPV} = \sum_{t=0}^{5}\frac{B_t - C_t}{(1{,}1)^t} \approx \text{Rp } -695.585.496$$

### 4.4 Perhitungan Indeks Fidelitas Model

Untuk memvalidasi model virtual terhadap 200 sampel pengukuran suhu bearing motor:

$$\bar{y} = \frac{
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
