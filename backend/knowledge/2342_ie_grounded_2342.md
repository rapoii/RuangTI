# 2342 — Model Ketahanan Rantai Dingin (Cold Chain Resilience) untuk Produk Mudah Rusak dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (cold chain) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (perishable products) yang mencakup produk farmasi, vaksin, makanan segar, dan bioteknologi. Menurut Khurshid dan Siddiqui (2024) dalam artikel "A Resilience Model for Cold Chain Logistics of Perishable Products" yang dipublikasikan dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599), kegagalan mempertahankan integritas termal rantai dingin dapat menimbulkan kerugian ekonomi masif, risiko kesehatan publik yang signifikan, serta disrupsi pada ekosistem distribusi global. World Health Organization (WHO) memperkirakan bahwa lebih dari 50% vaksin sensitif termal terbuang sia-sia setiap tahun akibat pelanggaran cold chain, sebuah inefisiensi yang bernilai miliaran dolar pada skala global. Urgensi ini semakin diperparah oleh meningkatnya kompleksitas jaringan distribusi pasca-pandemi COVID-19, dimana permintaan akan produk farmasi termolabil melonjak drastis.

Di sisi operasional, konteks Indonesia memberikan gambaran tantangan yang sangat relevan. Putra, Defit, dan Nurcahyo (2024) dalam Jurnal KomtekInfo dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) mendokumentasikan permasalahan spesifik pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, dimana cold chain box sebagai media penyimpanan vaksin belum dilengkapi sistem pemantauan suhu secara real-time. Kondisi ini menyebabkan ketergantungan pada pencatatan manual yang dilakukan setiap 2 jam sekali oleh apoteker pada log sheet, sebuah proses yang rentan terhadap human error, keterlambatan respons, serta tidak mampu memberikan peringatan dini ketika suhu cold chain box naik akibat kerusakan internal (malfunction refrigerator) maupun eksternal (gangguan daya listrik, pembukaan pintu berulang).

Dari perspektif Teknik Industri, permasalahan ini bukan sekadar isu teknis instrumentasi, melainkan merupakan kegagalan sistemik dalam perancangan rantai pasok yang resilient. Khurshid dan Siddiqui (2024) menekankan bahwa model ketahanan (resilience model) harus mampu mengkuantifikasi kapasitas sistem untuk menahan (absorb), beradaptasi terhadap (adapt), dan memulihkan diri (recover) dari disrupsi. Dalam konteks cold chain, disrupsi tidak hanya berupa kerusakan infrastruktur fisik, tetapi juga mencakup delay transportasi, kegagalan sensor, pelanggaran prosedur operasional, dan ancaman siber pada sistem monitoring digital. Tanpa kerangka kerja kuantitatif yang memadai, pengambil keputusan tidak dapat mengalokasikan sumber daya mitigasi secara optimal, sehingga trade-off antara biaya investasi dan tingkat layanan (service level) menjadi tidak terukur.

Integrasi Internet of Things (IoT) sebagaimana diusulkan oleh Putra et al. (2024) melalui sensor DS18B20 yang memiliki akurasi ±0.5°C dalam rentang -10°C hingga +85°C, menawarkan solusi instrumentasi yang cost-effective untuk digitalisasi pemantauan. Namun, instrumentasi saja tidak cukup tanpa model ketahanan yang memvalidasi bahwa data yang dikumpulkan benar-benar menghasilkan keputusan operasional yang optimal. Oleh karena itu, modul ini menyintesiskan kedua literatur tersebut untuk membangun kerangka rekayasa sistem yang komprehensif: model matematis untuk mengukur resilience cold chain yang diparameterisasi dengan data real-time dari jaringan sensor IoT.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resilience Cold Chain (CRCI)

Berdasarkan kerangka yang diajukan oleh Khurshid dan Siddiqui (2024), indeks resilience cold chain dapat diformulasikan sebagai fungsi dari tiga komponen utama: kapasitas absorpsi (absorptive capacity), kapasitas adaptasi (adaptive capacity), dan kapasitas pemulihan (restorative capacity). Formulasi matematisnya adalah:

$$CRCI = w_1 \cdot \alpha(t) + w_2 \cdot \beta(t) + w_3 \cdot \gamma(t)$$

dimana:
- $\alpha(t) \in [0,1]$ = kapasitas absorpsi termal pada waktu $t$
- $\beta(t) \in [0,1]$ = kapasitas adaptasi sistem terhadap pelanggaran suhu
- $\gamma(t) \in [0,1]$ = kapasitas pemulihan pasca-disrupsi
- $w_1 + w_2 + w_3 = 1$ = bobot relatif komponen

### 2.2 Model Pelanggaran Suhu Kumulatif (Cumulative Thermal Excursion)

Putra et al. (2024) menyoroti pentingnya deteksi dini pelanggaran suhu. Kita dapat mendefinisikan *thermal excursion index* sebagai:

$$TEI = \sum_{i=1}^{n} \int_{t_0}^{t_1} \left[ \max\left(0, T_i(t) - T_{upper}\right) + \max\left(0, T_{lower} - T_i(t)\right) \right] dt$$

dimana $T_i(t)$ adalah pembacaan suhu sensor ke-$i$ pada waktu $t$, $T_{upper}$ dan $T_{lower}$ adalah batas suhu yang diizinkan (untuk vaksin COVID-19 typically $T_{upper} = 8°C$ dan $T_{lower} = -50°C$ tergantung platform), dan $n$ adalah jumlah sensor dalam jaringan.

### 2.3 Fungsi Degradasi Produk (Arrhenius-Based Decay)

Tingkat degradasi produk farmasi mengikuti persamaan Arrhenius yang dimodifikasi:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T(t)}}$$

dimana $A$ adalah pre-exponential factor, $E_a$ adalah energi aktivasi (J/mol), $R = 8.314$ J/(mol·K) adalah konstanta gas universal, dan $T(t)$ dalam Kelvin. Produk dianggap失效 jika total dosis termal kumulatif melebihi threshold kritis:

$$D_{thermal} = \int_{0}^{t_{storage}} k(T(t)) \, dt \geq D_{crit}$$

### 2.4 Model Probabilitas Kegagalan Sensor (Sensor Failure Probability)

Mengingat sensor DS18B20 memiliki Mean Time Between Failures (MTBF) sekitar 100.000 jam menurut datasheet, probabilitas kegagalan sensor pada interval $\Delta t$ mengikuti distribusi eksponensial:

$$P_{fail}(\Delta t) = 1 - e^{-\lambda \Delta t}, \quad \lambda = \frac{1}{MTBF}$$

### 2.5 Fungsi Objektif Optimasi Biaya-Resilience

Trade-off antara investasi sistem monitoring dan peningkatan resilience dimodelkan sebagai:

$$\min_{x \in \mathcal{X}} \left[ C_{invest}(x) + \mathbb{E}\left[ C_{loss}(x, \omega) \right] \right]$$

dimana $C_{invest}(x)$ adalah biaya investasi sistem monitoring dengan konfigurasi $x$, $\omega$ adalah skenario disrupsi, dan $C_{loss}$ adalah expected loss akibat gagal mempertahankan integritas cold chain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Tiga-Lapis (Three-Tier Architecture)

Berdasarkan integrasi kedua paper, arsitektur sistem yang diusulkan mengikuti pola tiga-lapis:

**Layer 1 — Sensing Layer:** Jaringan sensor DS18B20 (Putra et al., 2024) yang tersebar di seluruh cold chain box. Setiap sensor memiliki address unik 64-bit pada protokol 1-Wire, memungkinkan multiple sensors pada single GPIO pin. Sensor dikalibrasi dengan akurasi ±0.5°C dan resolusi 9-12 bit yang dapat dikonfigurasi.

**Layer 2 — Communication Layer:** Mikrokontroler (misalnya ESP32 atau Arduino Mega) bertugas melakukan polling sensor setiap $\Delta t_{poll} = 30$ detik, melakukan filtering menggunakan moving average dengan window $w = 5$, dan mengirim data ke gateway melalui protokol MQTT over WiFi/GSM.

**Layer 3 — Analytics Layer:** Server menerima data, menghitung CRCI dan TEI secara real-time, serta mengeksekusi rule-based alerts ketika threshold pelanggaran terlampaui.

### 3.2 Diagram Alir SOP Operasional

```
┌─────────────────────────────────────────────┐
│ MULAI - Inisialisasi sistem & kalibrasi    │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ Pembacaan sensor DS18B20 setiap 30 detik   │
│ T_i(t) → filter moving average → database  │
└──────────────────┬──────────────────────────┘
                   ▼
        ┌──────────┴──────────┐
        ▼                     ▼
┌────────────────┐    ┌────────────────────┐
│ T ∈ [T_L,T_U] │    │ T < T_L atau T>T_U │
│ Status: NORMAL │    │ Status: EXCURSION  │
└────────┬───────┘    └─────────┬──────────┘
         ▼                     ▼
┌────────────────┐    ┌────────────────────┐
│ Hitung CRCI    │    │ Hitung TEI, trigger│
│ secara periodik│    │ alarm multi-channel│
│ (tiap 15 mnt)  │    │ (SMS/buzzer/email) │
└────────────────┘    └────────────────────┘
```

### 3.3 Prosedur Standar Operasional (SOP)

1. **Pre-operational check**: Verifikasi kalibrasi sensor terhadap reference thermometer (±0.1°C), validasi komunikasi 1-Wire, dan backup konfigurasi.
2. **Continuous monitoring**: Polling otomatis dengan redundant sensor placement (minimum 2 sensor per cold chain box untuk validasi silang).
3. **Anomaly detection**: Implementasi threshold ganda — warning pada $T_{warn} = T_{upper} - 1°C$ dan critical alert pada $T_{crit} = T_{upper} + 0.5°C$.
4. **Data logging**: Auto-logging menggantikan proses manual 2-jaman yang diidentifikasi oleh Putra et al. (2024), dengan retention policy minimum 3 tahun untuk compliance audit.
5. **Periodic resilience audit**: Perhitungan CRCI bulanan untuk evaluasi trend dan identifikasi degradasi sistem secara proaktif.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak

Kita ambil skenario realistis berdasarkan konteks UPTD Farmasi Kabupaten Siak (Putra et al., 2024):
- **Volume distribusi:** 5.000 vial vaksin per bulan
- **Suhu penyimpanan target:** $T_{target} = 2°C$ hingga $8°C$
- **Cold chain box:** 10 unit, masing-masing berisi 1 sensor DS18B20 + 1 sensor backup
- **Nilai inventaris per cold chain box:** Rp 75.000.000 (≈ 500 vial @ Rp 150.000)
- **Biaya investasi IoT per unit:** Rp 4.500.000 (sensor, mikrokontroler, konektivitas)

### 4.2 Perhitungan Thermal Excursion Index (TEI)

Misalkan dalam periode 30 hari terjadi 3 kali insiden pelanggaran suhu:

| Insiden | Durasi | Suhu Puncak | TEI Kontribusi |
|---------|--------|-------------|----------------|
| 1 | 45 menit | 11°C | $\int_0^{45} (11-8) \, dt = 3 \times 45 = 135$ °C·menit |
| 2 | 20 menit | 9.5°C | $(9.5-8) \times 20 = 30$ °C·menit |
| 3 | 90 menit | 12°C (kompresor rusak) | $(12-8) \times 90 = 360$ °C·menit |

$$TEI_{total} = 135 + 30 + 360 = 525 \text{ °C·menit per bulan}$$

### 4.3 Perhitungan CRCI

Dengan asumsi bobot equal ($w_1 = w_2 = w_3 = 1/3$):

- **Kapasitas absorpsi** $\alpha = 0.85$ (sistem mampu menahan fluktuasi normal tanpa alarm)
- **Kapasitas adaptasi** $\beta = 0.70$ (respons rata-rata 8 menit setelah alarm)
- **Kapasitas pemulihan** $\gamma = 0.60$ (rerata 45 menit untuk recovery pasca-insiden)

$$CRCI = \frac{1}{3}(0.85) + \frac{1}{3}(0.70) + \frac{1}{3}(0.60) = 0.717$$

Interpretasi: CRCI = 0.717 mengindikasikan sistem memiliki **ketahanan tingkat menengah-tinggi**, namun masih terdapat gap signifikan pada dimensi pemulihan (recovery).

### 4.4 Analisis Degradasi Arrhenius untuk Vaksin mRNA

Untuk vaksin mRNA dengan parameter $E_a = 84.000$ J/mol dan $A = 10^{15}$ jam$^{-1}$ (berdasarkan literatur stabilitas mRNA), pada suhu pelanggaran $T = 285.15$ K (12°C):