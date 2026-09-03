# 1702 — Model Ketahanan (Resilience) Logistik Cold Chain Produk Mudah Rusak dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan segar, dan bahan biologis bernilai tinggi. Khurshid dan Siddiqui (2024) dalam kerangka *A Resilience Model for Cold Chain Logistics of Perishable Products* menekankan bahwa sistem cold chain tidak cukup hanya dievaluasi dari sisi efisiensi biaya, melainkan harus diukur dari kemampuan *recovery* (pemulihan) ketika terjadi ekskursi suhu (*temperature excursion*) yang merusak integritas produk ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)). Urgensi topik ini diperkuat oleh estimasi WHO bahwa lebih dari 50% vaksin global terbuang sia-sia setiap tahun akibat kegagalan rantai dingin, dengan nilai kerugian ekonomi tahunan mencapai miliaran dolar.

Putra, Defit, dan Nurcahyo (2024) memberikan konteks empiris yang presisi pada tataran operasional melalui kasus Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka mendokumentasikan dua masalah struktural pada cold chain box vaksin: (1) tidak tersedianya sistem peringatan dini *realtime* ketika suhu menyimpang dari ambang 2–8 °C, dan (2) proses pencatatan suhu yang masih dikerjakan secara manual setiap 2 (dua) jam melalui *log sheet* oleh apoteker ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Pola kegagalan ini bersifat sistemik—bukan insidental—karena proses manual memiliki *detection lag* rata-rata satu jam, sementara degradasi termal produk biologis dapat melampaui ambang kritis dalam hitungan menit. Secara工业 (industri), gabungan kedua masalah tersebut menciptakan kerentanan ganda (*dual vulnerability*): keterlambatan deteksi dan tidak adanya *recovery protocol* otomatis. Inilah celah yang dijawab oleh integrasi model resiliensi Khurshid & Siddiqui (2024) dengan arsitektur IoT yang diusung Putra et al. (2024).

Konteks kekinian menunjukkan bahwa teknologi IoT, khususnya sensor suhu digital presisi seperti DS18B20 dengan akurasi ±0,5 °C pada rentang -55 °C hingga +125 °C, telah menurunkan *Total Cost of Ownership* (TCO) sistem monitoring secara signifikan. Namun adopsi teknologi ini masih rendah di negara berkembang, sehingga *gap* antara kebutuhan resiliensi dan kapasitas implementasi menjadi agenda strategis Teknik Industri. Modul 1702 ini memposisikan integrasi kedua perspektif—pemodelan resiliensi teoritis dan implementasi IoT-terapan—sebagai kerangka kerja operasional yang holistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain

Khurshid dan Siddiqui (2024) memformulasi resiliensi sistem cold chain sebagai kemampuan sistem untuk mempertahankan fungsi kritis (integritas termal produk) di bawah tekanan gangguan dan memulihkannya dalam waktu yang dapat diterima. Indeks resiliensi $R_c$ didefinisikan:

$$R_c = \frac{T_{max} - T_{disruption}}{T_{max} - T_{baseline}}$$

dengan:
- $T_{baseline}$ = durasi operasi normal sebelum gangguan
- $T_{disruption}$ = total durasi gangguan (waktu ekskursi suhu di luar ambang)
- $T_{max}$ = batas waktu maksimum sebelum produk kehilangan mutu secara irrecoverable

Nilai $R_c \in [0, 1]$, dengan $R_c \to 1$ menunjukkan resiliensi tinggi (dampak gangguan minimal terhadap total kapasitas operasional).

### 2.2 Model Degradasi Termal Arrhenius

Untuk produk vaksin dan biofarmaseutikal, laju degradasi mengikuti persamaan Arrhenius yang dikutip oleh literatur cold chain farmasi:

$$k(T) = A \cdot e^{-E_a / (R \cdot T)}$$

dengan:
- $k(T)$ = konstanta laju degradasi pada suhu absolut $T$ (Kelvin)
- $A$ = faktor pre-eksponensial
- $E_a$ = energi aktivasi (J/mol), tipikal 60–100 kJ/mol untuk protein vaksin
- $R$ = konstanta gas universal (8,314 J/mol·K)

Waktu paruh degradasi $t_{1/2}$ pada suhu penyimpanan aktual $T$ adalah:

$$t_{1/2}(T) = \frac{\ln 2}{k(T)} = \frac{\ln 2}{A} \cdot e^{E_a/(R \cdot T)}$$

### 2.3 Fungsi Reliabilitas Sensor dan Deteksi

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) mengikuti model reliabilitas eksponensial untuk komponen elektronik:

$$R_s(t) = e^{-\lambda_s t}, \quad \lambda_s \approx 5 \times 10^{-6} \text{ jam}^{-1}$$

*Mean Time Between Failures* sensor: $\text{MTBF}_s = 1/\lambda_s \approx 200.000$ jam (≈ 22,8 tahun).

### 2.4 Model *Detection Lag* dan *Mean Downtime*

*Detection lag* sistem manual $\tau_m$ versus sistem IoT $\tau_i$ memengaruhi total waktu paparan produk pada suhu merusak:

$$D_{total} = \tau_{detect} + \tau_{respond} + \tau_{recover}$$

di mana setiap subsistem berkontribusi pada *downtime* total. Untuk sistem manual berselang 2 jam: $\tau_m \sim 60$ menit (rata-rata). Untuk sistem IoT real-time: $\tau_i \sim 1$ menit.

### 2.5 Kerangka Economic Loss Function

Kerugian ekonomi akibat kegagalan cold chain:

$$L = \sum_{i=1}^{N} (C_i \cdot P_i) + C_{recall} + C_{liability}$$

dengan $C_i$ = biaya produk rusak ke-$i$, $P_i$ = probabilitas kerusakan pada segmen pasok ke-$i$, $N$ = jumlah segmen distribusi, dan $C_{recall}$, $C_{liability}$ masing-masing adalah biaya penarikan produk dan litigasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Putra et al. (2024) menyusun arsitektur sistem pemantauan IoT cold chain dalam lima tahap rekayasa yang menjadi acuan SOP implementasi:

**Tahap 1 — Akuisisi Data Sensor.** Sensor DS18B20 dipasang di beberapa *critical zone* dalam cold chain box: (a) zona evaporator atas, (b) zona tengah rak vial, dan (c) zona pintu (sumber kebocoran termal dominan). Sensor berkomunikasi melalui protokol *1-Wire* dengan akuisisi data setiap 10 detik dan logging setiap 1 menit.

**Tahap 2 — Akuisisi & Pre-processing Mikrokontroler.** Mikrokontroler (ESP32/Arduino) menerima data, melakukan *filtering* menggunakan *moving average* dengan jendela 6 sampel untuk meredam noise thermal transient, dan mengemas data dalam paket JSON berformat `{ts, T1, T2, T3, status}`.

**Tahap 3 — Transmisi & Cloud Logging.** Data dikirim ke *cloud server* (MQTT/HTTPS) untuk *real-time dashboard* dan *historical analytics*. Redundansi链路 (link) menggunakan SIM-card fallback untuk daerah dengan Wi-Fi terbatas seperti di UPTD Farmasi Siak.

**Tahap 4 — Rule-based Alerting Engine.** Aturan阈值 (threshold) mengikuti standar WHO PQS E001 untuk cold chain box: suhu 2–8 °C = kondisi normal; <2 °C atau >8 °C = peringatan Level-1 (SMS); >10 °C atau <0 °C selama >15 menit = peringatan Level-2 (alarm audio + notifikasi seluruh apoteker).

**Tahap 5 — Recovery Protocol Otomatis.** Sistem memicu *workflow*: (a) notifikasi ke apoteker jaga, (b) aktivasi logger detil, (c) instruksi SOP digital (misal: periksa segel pintu, pindahkan batch ke *backup cold box*), dan (d) *post-incident report* otomatis.

```
[Sensor DS18B20] → [Filter MA(6)] → [Mikrokontroler] 
                                              ↓
                              [MQTT Publish ke Cloud]
                                              ↓
                ┌─────────────────────────────┴─────────────────────────────┐
                ↓                                                          ↓
        [Dashboard Real-time]                                  [Alert Engine + SOP]
                ↓                                                          ↓
        [Historical Database]                                  [Notifikasi Apoteker]
                                                                            ↓
                                                                  [Recovery Action]
```

Standar acuan: WHO PQS E001/IN05.VP.1, ISO 23412:2020 (*Controlled temperature chain*), dan Pedoman Cara Distribusi Obat yang Baik (CDOB) BPOM RI.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus — UPTD Farmasi Kabupaten Siak (Putra et al., 2024)

| Parameter | Simbol | Nilai |
|---|---|---|
| Jumlah vial vaksin per cold box | $N$ | 500 vial |
| Suhu ambang atas kritis | $T_c$ | 8 °C (281,15 K) |
| Suhu operasional aktual | $T_{op}$ | 5 °C (278,15 K) |
| Energi aktivasi degradasi | $E_a$ | 80.000 J/mol |
| Faktor pre-eksponensial | $A$ | $10^{14}$ jam$^{-1}$ |
| Biaya rerata per vial | $C_v$ | Rp 250.000 |
| Frekuensi sampling manual | $f_m$ | 0,5/jam (setiap 2 jam) |
| Frekuensi sampling IoT | $f_i$ | 60/jam (1 menit) |
| *Detection lag* manual rerata | $\tau_m$ | 60 menit |
| *Detection lag* IoT rerata | $\tau_i$ | 1 menit |
| Biaya investasi IoT (sistem lengkap) | $C_{IoT}$ | Rp 18.000.000 |
| Biaya operasional IoT tahunan | $C_{op}$ | Rp 2.400.000 |

### 4.2 Perhitungan 1 — Laju Degradasi pada Suhu Ambang Kritis