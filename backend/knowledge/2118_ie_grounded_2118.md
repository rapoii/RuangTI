# 2118 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak dengan Pemantauan Suhu Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan salah satu subsistem paling kritis dalam manajemen rantai pasok produk farmasi, vaksin, makanan segar (seafood, daging, produk dairy), dan bioteknologi. Kerentanan terbesar pada rantai dingin bukanlah rendahnya kapasitas pendinginan, melainkan kemampuan sistem untuk **mempertahankan, memantau, dan memulihkan (recover)** suhu dalam rentang toleransi yang ditetapkan ketika terjadi gangguan internal maupun eksternal. Khurshid & Siddiqui (2024) dalam naskah "A Resilience Model for Cold Chain Logistics of Perishable Products" yang dipublikasikan di repositori SSRN dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menekankan bahwa pendekatan tradisional yang hanya berfokus pada *reliability* (keandalan komponen) tidak cukup untuk menjawab dinamika gangguan modern — seperti fluktuasi suhu akibat pembukaan pintu kontainer berulang, *last-mile delay*, pemadaman listrik, serta kerusakan mekanis kompresor yang tidak terprediksi.

Konteks industri yang melatarbelakangi kebutuhan model resilience ini adalah besarnya kerugian ekonomi global akibat *cold chain failure*. World Health Organization (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang setiap tahun karena pelanggaran rantai dingin (*cold chain excursion*), dengan nilai kerugian mencapai USD 34,1 miliar per tahun untuk sektor biofarmasi. Pada sektor perishable food, *Food and Agriculture Organization* (FAO) menunjukkan *post-harvest losses* hingga 40% di negara berkembang — sebagian besar disebabkan oleh *temperature abuse* di环节 distribusi. Kerugian ini bukan hanya finansial, tetapi juga menyangkut *public health* (vaksin rusak yang tetap didistribusikan), food safety (kontaminasi *Salmonella*, *Listeria*), dan reputasi merek.

Di Indonesia, permasalahan ini diperparah oleh karakteristik geografis kepulauan, jaringan distribusi 3PL yang heterogen, serta minimnya sistem *real-time monitoring*. Putra, Defit, & Nurcahyo (2024) dalam Jurnal KomtekInfo dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) mendokumentasikan secara empiris kasus di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, di mana proses *cold chain box* penyimpanan vaksin masih mengandalkan **pencatatan manual setiap 2 jam oleh apoteker** pada *log sheet*, tanpa sistem peringatan dini ketika suhu箱 melebihi ambang batas 2–8°C akibat kerusakan internal (kompresor) maupun eksternal (paparan lingkungan). Risiko kesalahan manusia (*human error*) dalam pencatatan manual ini, ditambah *response time* yang lambat, menjadi celah kegagalan sistemik.

Urgensi integrasi model resilience dengan teknologi Internet of Things (IoT) menjadi semakin nyata. Sensor DS18B20 dengan akurasi ±0,5°C pada rentang -10°C hingga +85°C, yang digunakan oleh Putra et al. (2024), memungkinkan *continuous temperature logging* dengan konsumsi daya rendah dan biaya rendah (USD 2–4 per unit). Ketika digabungkan dengan model kuantitatif resilience ala Khurshid & Siddiqui (2024), operator cold chain tidak hanya mampu **mendeteksi** anomali suhu, tetapi juga **memprediksi** dampak degradasi mutu produk dan **memprioritaskan** tindakan pemulihan berdasarkan *criticality index*. Inilah paradigma baru yang membedakan *cold chain monitoring* konvensional dengan *resilient cold chain management* abad ke-21.

---

## 2. Landasan Teori & Formulasi Matematis

Model resilience untuk cold chain yang dikembangkan oleh Khurshid & Siddiqui (2024) berakar pada tiga pilar teoretis: (1) **Arrhenius kinetics** untuk degradasi mutu produk, (2) **Reliability Engineering** untuk probabilitas kegagalan sistem pendingin, dan (3) **System Dynamics** untuk mengukur kemampuan pemulihan. Ketiga pilar ini saling terintegrasi dalam satu kerangka matematis holistik.

### 2.1 Arrhenius Degradation Model untuk Produk Perishable

Laju degradasi mutu produk farmasi dan pangan segar mengikuti persamaan Arrhenius:

$$k(T) = k_{0} \cdot \exp\left(-\frac{E_{a}}{R \cdot T}\right)$$

di mana:
- $k(T)$ = laju degradasi mutu pada suhu absolut $T$ (Kelvin)
- $k_0$ = konstanta pre-exponential (frekuensi karakteristik)
- $E_a$ = energi aktivasi degradasi (J/mol) — untuk produk biologi tipikal $E_a \in [60.000, 90.000]$ J/mol
- $R$ = konstanta gas universal = $8{,}314$ J/(mol·K)
- $T$ = suhu absolut (K)

### 2.2 Residual Quality Function

Khurshid & Siddiqui (2024) mengusulkan *residual quality function* $Q(t)$ yang merepresentasikan proporsi mutu produk yang tersisa:

$$Q(t) = \exp\left(-\int_{0}^{t} k[T(\tau)] \, d\tau\right)$$

Jika suhu mengalami ekskursi sementara (misalnya naik dari 5°C ke 12°C selama $\Delta t$ menit akibat kegagalan kompresor), maka degradasi kumulatif dapat dihitung dengan:

$$\Delta Q = 1 - \exp\left(-k_{12°\text{C}} \cdot \Delta t \cdot 60\right)$$

### 2.3 Resilience Index Multi-Dimensi

Indeks resilience rantai dingin didefinisikan oleh Khurshid & Siddiqui sebagai fungsi dari tiga parameter: kemampuan menyerap (absorptive), beradaptasi (adaptive), dan memulihkan (restorative). Versi formalisasinya:

$$\mathcal{R} = \frac{P_{\text{post-recovery}} - P_{\text{min}}}{P_{\text{nominal}} - P_{\text{min}}} \cdot \frac{T_{\text{recovery}}}{T_{\text{max-allowable}}}^{-1}$$

di mana:
- $\mathcal{R}$ = Resilience Index (rentang 0–1)
- $P_{\text{post-recovery}}$ = performa sistem setelah pemulihan
- $P_{\text{min}}$ = performa minimum selama gangguan
- $P_{\text{nominal}}$ = performa nominal (baseline)
- $T_{\text{recovery}}$ = waktu aktual pemulihan (jam)
- $T_{\text{max-allowable}}$ = waktu pemulihan maksimum yang dapat ditoleransi

### 2.4 Model Probabilitas Kegagalan Sensor IoT (Putra et al., 2024)

Sistem IoT berbasis sensor DS18B20 memiliki laju kegagalan yang mengikuti distribusi eksponensial:

$$R(t) = e^{-\lambda t}$$

dengan $\lambda$ = *failure rate* sensor (umumnya $10^{-6}$/jam untuk sensor kalibrasi industri), dan *Mean Time Between Failures*:

$$\text{MTBF} = \frac{1}{\lambda}$$

### 2.5 Economic Loss Function

Kerugian ekonomi akibat *cold chain excursion* dimodelkan sebagai:

$$L_{\text{total}} = \sum_{i=1}^{n} \left[ V_{i} \cdot P_{\text{reject},i} + C_{\text{disposal},i} + C_{\text{liability},i} \right]$$

di mana $V_i$ adalah nilai produk ke-$i$, $P_{\text{reject},i}$ probabilitas penolakan mutu, $C_{\text{disposal}}$ biaya pembuangan, dan $C_{\text{liability}}$ potensi biaya hukum.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem cold chain yang resilient memerlukan SOP terstruktur yang mengintegrasikan model Khurshid & Siddiqui (2024) dengan infrastruktur IoT Putra et al. (2024). Berikut adalah arsitektur SOP 7-tahap yang dapat diadopsi oleh distributor farmasi, *third-party logistics* (3PL) pangan, dan rumah sakit:

### 3.1 Diagram Alir Implementasi

```
[Tahap 1] Risk Assessment & Criticality Mapping
         ↓
[Tahap 2] Sensor Deployment (DS18B20 array)
         ↓
[Tahap 3] Baseline Calibration (NIST-traceable)
         ↓
[Tahap 4] Real-time Data Acquisition (MQTT/HTTP, 60s interval)
         ↓
[Tahap 5] Anomaly Detection (Z-score > 2.5σ atau ΔT > 2°C)
         ↓
[Tahap 6] Resilience Evaluation (Hitung Q(t) dan R)
         ↓
[Tahap 7] Adaptive Response (Dispatch replacement unit / Recall batch)
```

### 3.2 SOP Tahap demi Tahap

**Tahap 1 — Risk Assessment:** Identifikasi *critical control points* (CCP) menggunakan pendekatan HACCP. Untuk produk vaksin, CCP berada pada titik transisi (dari *primary packaging* ke *cold box*, dari *cold box* ke *vaccine carrier*). Parameter risiko: probabilitas gangguan $p$, dampak $I$, dan *detectability* $D$ → Risk Priority Number $RPN = p \times I \times D$.

**Tahap 2 — Sensor Deployment:** Menggunakan sensor DS18B20 dengan protokol 1-Wire. Putra et al. (2024) menggunakan topologi *star network* dengan mikrokontroler ESP32 sebagai *gateway*, yang mengirim data ke server melalui Wi-Fi. Akurasi sensor: $\pm 0{,}5°\text{C}$ (resolusi 0,0625°C, 12-bit ADC).

**Tahap 3 — Baseline Calibration:** Kalibrasi dua titik menggunakan *ice-point bath* (0,000°C) dan *thermal bath* terkalibrasi (8,000°C). Batas kesalahan diterima: $\leq \pm 0{,}3°\text{C}$ sesuai ISO 17025.

**Tahap 4 — Real-time Data Acquisition:** Interval sampling 60 detik dengan *timestamp* NTP (*Network Time Protocol*) untuk sinkronisasi antar-node. Putra et al. (2024) mengimplementasikan tampilan LCD lokal dan *cloud dashboard* (Blynk/Firebase) untuk monitoring jarak jauh.

**Tahap 5 — Anomaly Detection:** Dua mode deteksi: (a) *Threshold-based* — alarm jika $T_{\text{measured}} \notin [T_{\text{min}}, T_{\text{max}}]$; (b) *Predictive* — alarm jika $dT/dt > 0{,}3°\text{C}/\text{menit}$ yang mengindikasikan deteriorasi termal cepat.

**Tahap 6 — Resilience Evaluation:** Hitung $Q(t)$ secara real-time menggunakan persamaan Arrhenius. Jika $Q(t) < 0{,}85$ (maksimum 15% degradasi mutu), sistem masuk status *critical* dan memicu eskalasi.

**Tahap 7 — Adaptive Response:** Tindakan pemulihan berjenjang berdasarkan level severity: *Level 1* (alarm lokal), *Level 2* (notifikasi apoteker via SMS), *Level 3* (dispatch unit refrigerasi cadangan), *Level 4* (recall produk batch terkait).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin COVID-19 di Kabupaten Siak (Modifikasi Putra et al., 2024)

**Parameter Input:**

| Parameter | Nilai | Sumber |
|-----------|-------|--------|
| Volume batch | 500 vial × 10 dosis | Skenario hipotetis |
| Suhu target | 2–8°C ($T_{\text{nominal}} = 5°\text{C}$) | WHO PQS E006 |
| Energi aktivasi mRNA | $E_a = 75.000$ J/mol | Pessi et al. (2022) |
| $k_0$ referensi (5°C) | $2{,}5 \times 10^{-8}$/menit | Literatur farmasi |
| Suhu ekskursi | 12°C (gagal kompresor) | Skenario |
| Durasi ekskursi | $\Delta t = 45$ menit | Skenario |
| Nilai vial | Rp 280.000/vial | Estimasi Bio Farma |
| Biaya pembuangan | Rp 50.000/vial | Regulasi |

### 4.2 Langkah Kalkulasi

**Langkah 1 — Hitung $k$ pada 12°C (285,15 K):**

$$k(12°\text{C}) = 2{,}5 \times 10^{-8} \cdot \exp\left(-\frac{75.000}{8{,}314 \cdot 285{,}15}\right) \cdot \frac{1}{\text{faktor referensi 5°C