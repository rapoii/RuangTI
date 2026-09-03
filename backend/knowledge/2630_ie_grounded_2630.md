# 2630 — Model Resiliensi dan Sistem Monitoring Cerdas untuk Cold Chain Logistics Produk Mudah Rusak (Perishable Products) Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merepresentasikan salah satu subsistem paling kritis dalam rantai pasok produk termolabil (perishable products), mencakup produk farmasi, vaksin, makanan beku, dan produk biologis yang memerlukan pemeliharaan suhu presisi sepanjang siklus distribusi. Kerusakan pada integritas suhu tidak hanya menurunkan kualitas produk tetapi juga dapat menimbulkan kerugian ekonomi masif, kegagalan terapi klinis, serta risiko kesehatan masyarakat yang signifikan. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa kerentanan utama cold chain bukan semata-mata pada kemampuan preventif mempertahankan suhu, melainkan pada kapasitas sistem untuk *absorb*, *adapt*, dan *recover* terhadap disrupsi tak terelakkan seperti kegagalan refrigerasi, delay transportasi, kerusakan kemasan, dan anomali sensor.

Secara empiris, Organisasi Kesehatan Dunia (WHO) melaporkan bahwa lebih dari 50% vaksin yang didistribusikan di negara berkembang mengalami setidaknya satu kali paparan suhu di luar rentang aman (excursion) sepanjang distribusinya, dengan kerugian ekonomis global pada cold chain farmasi mencapai lebih dari USD 35 miliar per tahun akibat pembusukan (spoilage). Dalam konteks nasional Indonesia, Putra et al. (2024) ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan secara langsung permasalahan operasional di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, di mana proses penyimpanan vaksin pada *cold chain box* masih mengandalkan pencatatan suhu *manual* setiap 2 jam oleh apoteker pada *log sheet*—sebuah pendekatan yang rentan terhadap human error, kelambatan respons, dan tidak memberikan peringatan dini (*real-time alert*) ketika terjadi kenaikan suhu akibat kerusakan internal maupun eksternal. Kedua literatur ini, ketika dikombinasikan, membentuk dasar kebutuhan rekayasa industri modern: integrasi model resiliensi kuantitatif dengan sistem monitoring berbasis Internet of Things (IoT) untuk menghasilkan cold chain yang *self-aware*, *predictive*, dan *rapidly recoverable*.

Permasalahan cold chain juga bersifat multi-dimensi—mencakup dimensi teknis (akurasi sensor, latensi telemetri), dimensi manajerial (SOP respons insiden, alokasi buffer stock), dan dimensi ekonomis (biaya investasi vs. *value at risk*). Pendekatan konvensional yang bersifat *reactive* terbukti tidak cukup; oleh karena itu dibutuhkan kerangka resiliensi kuantitatif yang memungkinkan insinyur industri merancang sistem dengan *Key Performance Indicators* (KPI) yang terukur, seperti *Mean Time To Detect* (MTTD), *Mean Time To Recover* (MTTR), dan *Cold Chain Resilience Index* (CCRI). Dokumen modul ini akan menjabarkan formulasi matematis, prosedur operasional, dan studi kasus kuantitatif yang diperlukan untuk menjawab tantangan tersebut secara sistematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) mengusulkan kerangka resiliensi yang memandang cold chain sebagai sistem dinamis dengan fungsi performa $P(t)$ yang berfluktuasi akibat disrupsi. Resiliensi didefinisikan secara kuantitatif melalui **Resilience Triangle Integral** yang dimodifikasi:

$$R = \frac{1}{t_R - t_0} \int_{t_0}^{t_R} \left[1 - \frac{P_{nominal} - P(t)}{P_{nominal} - P_{min}}\right] dt$$

di mana:
- $P(t)$ = fungsi performa sistem pada waktu $t$ (dapat berupa kapasitas pendinginan, ketersediaan produk layak, atau tingkat integritas suhu)
- $P_{nominal}$ = performa nominal saat kondisi operasi normal
- $P_{min}$ = performa minimum acceptable
- $t_0$ = waktu onset disrupsi
- $t_R$ = waktu pemulihan penuh (*recovery time*)

Nilai $R \in [0, 1]$, di mana $R = 1$ mengindikasikan resiliensi sempurna (sistem tidak terdegradasi secara signifikan) dan $R \to 0$ mengindikasikan kegagalan katastrofik.

### 2.2 Cold Chain Resilience Index (CCRI)

Untuk agregasi multi-dimensi, kami menurunkan **Cold Chain Resilience Index**:

$$CCRI = \alpha \cdot \frac{MTTR_{target}}{MTTR_{actual}} + \beta \cdot \frac{MTTD_{target}}{MTTD_{actual}} + \gamma \cdot (1 - \rho_{excursion})$$

di mana:
- $MTTR_{actual}$ = *Mean Time To Recover* aktual (jam)
- $MTTD_{actual}$ = *Mean Time To Detect* anomali suhu (jam)
- $\rho_{excursion}$ = rasio waktu excursion terhadap total waktu operasi
- $\alpha + \beta + \gamma = 1$ (bobot prioritas, umumnya $\alpha = 0.4$, $\beta = $0.3, $\gamma = $0.3)

### 2.3 Model Degradasi Kualitas Termal (Arrhenius-type)

Kualitas produk perishable mengikuti kinetika degradasi yang dipercepat oleh kenaikan suhu menurut persamaan Arrhenius:

$$Q(t) = Q_0 \cdot \exp\left(-k \cdot t \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)\right)$$

di mana:
- $Q(t)$ = kualitas produk pada waktu $t$ (fraksi)
- $Q_0$ = kualitas awal ($= 1$)
- $k$ = konstanta laju reaksi (pre-exponential)
- $E_a$ = energi aktivasi (J/mol), khas untuk produk biologis $\approx 60{-}80$ kJ/mol
- $R$ = konstanta gas universal ($8.314$ J/mol·K)
- $T$ = suhu absolut (K)

### 2.4 Model Sensor dan Akuisisi Data IoT (Putra et al., 2024)

Sensor DS18B20 yang digunakan dalam implementasi Putra et al. (2024) memiliki karakteristik:
- Rentang pengukuran: $-55°C$ sampai $+125°C$
- Akurasi: $\pm 0.5°C$ pada rentang $-10°C$ sampai $+85°C$
- Resolusi: $9{-}12$ bit (programmable)
- Interface: 1-Wire (digital, kebal terhadap noise analog)

Hubungan antara resolusi bit $n$ dan *Least Significant Bit* (LSB):

$$\Delta T_{LSB} = \frac{T_{max} - T_{min}}{2^n} = \frac{180°C}{2^n}$$

Untuk resolusi 12-bit: $\Delta T_{LSB} = 0.0625°C$.

Reliabilitas sensor mengikuti model eksponensial:

$$R_{sensor}(t) = e^{-\lambda t}$$

dengan $\lambda$ = laju kegagalan (failure rate), tipikal $\lambda \approx 0.0001$/jam untuk DS18B20 berkualitas industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Monitoring Cold Chain

Berdasarkan integrasi model resiliensi (Khurshid & Siddiqui, 2024) dan implementasi IoT (Putra et al., 2024), arsitektur sistem dirancang berlapis (*layered architecture*):

```
┌─────────────────────────────────────────────────────────┐
│ LAYER 4: DECISION SUPPORT & RESILIENCE ANALYTICS        │
│   → CCRI Calculator, Anomaly Detection, Alert Engine    │
├─────────────────────────────────────────────────────────┤
│ LAYER 3: DATA TRANSMISSION (IoT Gateway)                 │
│   → WiFi/GSM/LoRa, MQTT Protocol, Cloud Server (Blynk)  │
├─────────────────────────────────────────────────────────┤
│ LAYER 2: DATA ACQUISITION (Mikrokontroler)              │
│   → ESP32/Arduino, DS18B20 Driver, Sampling Algorithm   │
├─────────────────────────────────────────────────────────┤
│ LAYER 1: PHYSICAL SENSING                                │
│   → DS18B20 Sensors, Cold Chain Box, Phase Change Mat.  │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Monitoring dan Respons Insiden

| Tahapan | Aktivitas | PIC | Target Waktu |
|---------|-----------|-----|--------------|
| 1 | Sampling suhu tiap 10 detik oleh DS18B20 | Sistem Otomatis | Kontinu |
| 2 | Validasi data (filter outlier $\pm 3\sigma$) | Mikrokontroler | Real-time |
| 3 | Deteksi excursion ($|T - T_{set}| > \delta$) | Alert Engine | MTTD < 5 menit |
| 4 | Notifikasi multi-kanal (SMS, sirene, dashboard) | Gateway IoT | < 1 menit |
| 5 | Aktivasi prosedur recovery (rotasi stock, backup cooling) | Apoteker/Operator | MTTR < 30 menit |
| 6 | Logging insiden dan post-mortem analysis | Quality Assurance | < 24 jam |

### 3.3 Algoritma Deteksi Anomali

Implementasi menggunakan *Exponential Moving Average* (EMA) untuk baseline dinamis:

$$EMA_t = \alpha_s \cdot T_t + (1 - \alpha_s) \cdot EMA_{t-1}$$

dengan smoothing factor $\alpha_s = 0.3$ (optimal untuk response time vs. noise rejection). Alarm terpicu jika:

$$|T_t - EMA_t| > k_{threshold} \cdot \sigma_{historical}$$

dengan $k_{threshold} = 2.5$ (memenuhi *2-sigma rule* dengan sedikit buffer untuk false positive reduction).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin di UPTD Farmasi

**Parameter Input:**
- Set-point suhu cold chain box: $T_{set} = 5°C$ (rentang aman vaksin 2–8°C sesuai WHO PQS)
- Excursion tolerance: $\delta = \pm 3°C$
- Durasi operasi harian: 24 jam
- Volume cold chain box: 50 liter
- $E_a$ untuk vaksin: $75{,}000$ J/mol
- $k = 1.2 \times 10^{18}$ /jam (pre-exponential untuk kinetika denaturasi protein)

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Simulasi Gangguan (Compressor Failure selama 45 menit)**

Asumsikan pada $t_0 = 0$, terjadi kegagalan kompresor. Suhu cold box naik mengikuti:

$$T(t) = T_{set} + (T_{ambient} - T_{set})(1 - e^{-t/\tau})$$

dengan $T_{ambient} = 30°C$ dan konstanta waktu termal $\tau = 60$ menit (karena insulasi cold box dan *thermal mass* PCM).

Pada $t = 45$ menit:

$$T(45) = 5 + (30-5)(1 - e^{-45/60}) = 5 + 25(1 - e^{-0.75})$$

$$= 5 + 25(1 - 0.4724) = 5 + 25(0.5276) = 5 + 13.19 = 18.19°C$$

**Excursion terdeteksi:** $T(45) - T_{set} = 13.19°C > 3°C$ → **CRITICAL ALARM**

**Langkah 2: Perhitungan Degradasi Kualitas Vaksin**

Untuk menghitung faktor degradasi pada suhu tinggi $T = 18.19°C = 291.34$ K selama 45 menit:

$$k_{eff} = k \cdot \exp\left(-\frac{E_a}{R \cdot T}\right) = 1.2 \times 10^{18} \cdot \exp\left(-\frac{75{,}000}{8.