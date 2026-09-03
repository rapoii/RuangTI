# 2678 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rekayasa logistik produk mudah rusak (*perishable products*) yang membutuhkan kendali suhu presisi sepanjang rantai pasok—mulai dari produsen, gudang penyimpanan, transportasi distribusi, hingga titik konsumsi akhir. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa kompleksitas jaringan distribusi modern, ditambah dengan meningkatnya kejadian *disruption* akibat perubahan iklim, pandemi, dan kegagalan infrastruktur energi, menuntut model resiliensi yang mampu mengkuantifikasi kapasitas pemulihan (*adaptive capacity*) sistem rantai dingin terhadap gangguan operasional.

Urgensi industri ini bersifat multidimensional. Pertama, dari perspektif ekonomi, World Bank memperkirakan kerugian global akibat kerusakan produk farmasi dan pangan mudah rusak dalam rantai dingin mencapai lebih dari USD 35 miliar per tahun. Kedua, dari perspektif kesehatan masyarakat, kegagalan kendali suhu vaksin 2–8 °C terbukti menurunkan potensi imunisasi dan meningkatkan *wastage rate* secara signifikan. Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus konkret pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana *cold chain box* penyimpanan疫苗 belum dilengkapi sistem pemantauan suhu *real-time*, sehingga pencatatan suhu masih dilakukan secara manual setiap 2 jam melalui *log sheet*—prosedur yang rentan terhadap human error, keterlambatan respons, dan *cold excursion* yang tidak terdeteksi.

Integrasi teknologi Internet of Things (IoT) dengan sensor suhu digital DS18B20 (akurasi ±0,5 °C, resolusi 9–12 bit, protokol 1-Wire) membuka paradigma baru *visibility* rantai dingin. Namun, instrumentasi sensor saja tidak cukup—diperlukan kerangka analitis resiliensi untuk menerjemahkan data suhu menjadi keputusan operasional seperti *redistribution routing*, aktivasi *backup refrigeration*, dan *recall decision support*. Modul ini menyintesiskan pendekatan *resilience engineering* dari Khurshid & Siddiqui (2024) dengan arsitektur IoT monitoring dari Putra et al. (2024) untuk membangun sistem rantai dingin yang adaptif dan *self-recovering*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Sistem Cold Chain

Khurshid dan Siddiqui (2024) mengajukan kerangka resiliensi berbasis *performance curve* dengan mendefinisikan **Resilience Index (RI)** sebagai rasio antara area di bawah kurva kinerja aktual pasca-gangguan terhadap area target ideal:

$$RI = \frac{\int_{t_d}^{t_r} Q(t)\, dt}{\int_{t_d}^{t_r} Q^*\, dt}$$

di mana $Q(t)$ adalah kapasitas fungsional sistem pada waktu $t$, $Q^*$ adalah kapasitas nominal (target), $t_d$ adalah waktu dimulainya gangguan (*disruption onset*), dan $t_r$ adalah waktu pemulihan penuh. Nilai $RI \in [0,1]$, dengan $RI = 1$ menunjukkan pemulihan sempurna tanpa degradasi.

### 2.2 Model Degradasi Termal Produk

Degradasi mutu produk farmasi/vaksin mengikuti persamaan Arrhenius yang dimodifikasi:

$$\ln k = \ln A - \frac{E_a}{R \cdot T}$$

di mana $k$ adalah laju degradasi (per jam), $A$ adalah faktor frekuensi (Arrhenius pre-exponential), $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal, dan $T$ adalah suhu absolut (Kelvin). Kerusakan kumulatif didekulisasi menggunakan *Mean Kinetic Temperature* (MKT):

$$MKT = \frac{\Delta H / R}{- \ln\left(\frac{\sum_{i=1}^{n} \exp(-E_a / (R \cdot T_i))}{n}\right)}$$

### 2.3 Model Markov untuk Transisi Status Cold Chain

Status operasional unit cold chain dimodelkan sebagai rantai Markov diskret dengan *state space* $S = \{S_0, S_1, S_2, S_3\}$ di mana $S_0$ (normal), $S_1$ (peringatan dini), $S_2$ (gangguan aktif), $S_3$ (pemulihan). Matriks transisi satu-langkah:

$$P = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}$$

Probabilitas *steady-state* dihitung dengan $\boldsymbol{\pi} P = \boldsymbol{\pi}$ dan $\sum \pi_i = 1$, memungkinkan estimasi *expected downtime* dan biaya gangguan jangka panjang.

### 2.4 Arsitektur Sensor DS18B20 dan Model Akurasi

Sensor DS18B20 memiliki karakteristik: rentang $-55$ °C hingga $+125$ °C, akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C hingga $+85$ °C, dan waktu konversi $\leq 750$ ms pada resolusi 12-bit. Model probabilistik kesalahan pengukuran:

$$T_{measured} = T_{true} + \epsilon, \quad \epsilon \sim \mathcal{N}(0, \sigma^2)$$

dengan $\sigma = 0{,}25$ °C untuk sensor terkalibrasi. Interval sampling optimal $h$ ditentukan oleh teorema Nyquist-Shannon untuk fluktuasi suhu tipikal gudang dingin:

$$h \leq \frac{1}{2 f_{max}}$$

### 2.5 Formulasi Optimasi Jaringan Redundan

Untuk meminimasi biaya total sambil mempertahankan tingkat layanan, model *facility location* dengan probabilistik disruption:

$$\min Z = \sum_{j \in J} f_j y_j + \sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij} + \alpha \sum_{j \in J} p_j (1-y_j) D_j$$

dengan kendala $\sum_{j} x_{ij} \geq d_i$ untuk semua $i \in I$, di mana $p_j$ adalah probabilitas gangguan fasilitas $j$, dan $\alpha$ adalah bobot penalti disrupsi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT (berdasarkan Putra et al., 2024)

```
[Sensor DS18B20] → [Mikrokontroler ESP32] → [WiFi Gateway] → [Cloud Server] 
        ↓                                                              ↓
[1-Wire Bus]                                              [Database Time-Series]
        ↓                                                              ↓
[Multiple Probe Points]                              [Dashboard + Alert System]
```

### 3.2 Prosedur Operasional Standar (SOP) Cold Chain Resilien

**Tahap 1 — Pemetaan Rantai Nilai (Value Stream Mapping):** Identifikasi seluruh titik kritis kendali suhu (HACCP), dengan *critical control points* (CCP) minimal pada: (a) loading dock, (b) cold storage utama, (c) *cold chain box* distribusi, (d) titik akhir (Puskesmas/PBF).

**Tahap 2 — Instrumentasi Sensor:** Deploy sensor DS18B20 pada setiap CCP dengan konfigurasi *multi-point measurement* (minimal 3 probe per zona sesuai standar WHO PQS E001). Resolusi konversi disetel 12-bit, *sampling interval* 60 detik, dan *data logging* ke memori lokal (EEPROM/SD card) sebagai fallback saat konektivitas terputus.

**Tahap 3 — Kalibrasi dan Validasi:** Kalibrasi sensor menggunakan *ice bath* (0,0 °C) dan *reference thermometer* tersertifikat NIST. Validasi silang antar sensor menggunakan *two-sample t-test* dengan tingkat signifikansi $\alpha = 0{,}05$.

**Tahap 4 — Konfigurasi Rule-Based Alerting:** Tetapkan *threshold* peringatan: peringatan Level 1 pada $T > 6$ °C selama $\geq 15$ menit; Level 2 (kritis) pada $T > 8$ °C atau $T < 2$ °C selama $\geq 5$ menit. Alert dikirim via SMS, email, dan *push notification* ke operator.

**Tahap 5 — Simulasi Gangguan dan Stress Test:** Lakukan *tabletop exercise* dan *failure mode injection* (misalnya simulasi kerusakan kompresor, pemadaman listrik 4 jam) untuk mengukur *recovery time* aktual dan validasi model resiliensi.

**Tahap 6 — Continuous Improvement:** Tinjau *mean time between failures* (MTBF), *mean time to recovery* (MTTR), dan *resilience index* secara bulanan menggunakan *Statistical Process Control* (SPC) dengan peta kendali $X$-bar dan $R$.

### 3.3 Diagram Alir Logika Keputusan

```
[Sensor Reading] → {Filter Moving Average} → {Threshold Check}
                                                       ↓
                            ┌──────────────────────────┴──────────────────────────┐
                            ↓                                                     ↓
                  [T ∈ [2°C, 8°C] → Normal]                         [T outside range → Alert]
                                                                                    ↓
                                                                       ┌────────────┴────────────┐
                                                                       ↓                         ↓
                                                            [Backup Refrigerator ON]    [Recall Decision]
                                                                       ↓                         ↓
                                                                  [Log Incident]      [Notify Stakeholders]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin COVID-19 di UPTD Farmasi Kabupaten Siak

**Data Input:**
- Volume *cold chain box*: $V = 50$ liter
- Massa vaksin: $m = 30$ kg (ampul kaca + larutan)
- Kapasitas panas spesifik: $c_p = 3{,}5$ kJ/(kg·K) (representatif campuran)
- Suhu target: $T^* = 5$ °C (titik tengah 2–8 °C)
- Suhu ambang batas atas WHO: $T_{max} = 8$ °C
- Energi aktivasi vaksin mRNA tipikal: $E_a = 83{,}6$ kJ/mol
- Suhu lingkungan (ambient) saat distribusi: $T_{amb} = 32$ °C
- Koefisien perpindahan panas *cold box*: $