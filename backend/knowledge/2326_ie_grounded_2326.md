# 2326 — Model Ketahanan (Resilience) Logistik Rantai Dingin untuk Produk Mudah Rusak: Integrasi Pemantauan IoT dan Kerangka Kuantitatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari rantai pasok global yang menjamin integritas termal produk mudah rusak — vaksin, produk biofarmasi, makanan laut, produk hortikultura, dan reagen diagnostik. Kerusakan pada satu mata rantai distribusi (broken link) dapat menimbulkan kerugian multidimensi: kerugian ekonomi akibat degradasi mutu, risiko kesehatan masyarakat akibat distribusi vaksin rusak, serta kerugian lingkungan dari food waste yang mencapai ±1,3 miliar ton per tahun (FAO). Dalam konteks Indonesia, sistem distribusi farmasi yang dilakukan oleh UPTD Farmasi Dinas Kesehatan masih mengandalkan pencatatan suhu *cold chain box* secara manual setiap 2 jam sekali melalui *log sheet* oleh apoteker, yang rawan terhadap human error, keterlambatan respon, dan kehilangan jejak audit (*audit trail*) — sebagaimana diidentifikasi oleh Putra, Defit, dan Nurcahyo (2024) pada studi kasus Dinas Kesehatan Kabupaten Siak [DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589).

Di sisi teoretis, Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* membangun sebuah model ketahanan (*resilience model*) yang mengkuantifikasi kemampuan sistem rantai dingin untuk menyerap (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*) dari gangguan termal, operasional, dan logistik [DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599). Kedua paper ini saling melengkapi: paper pertama menyediakan kerangka analitik kuantitatif tingkat strategis, sementara paper kedua menyediakan bukti empiris tingkat operasional melalui implementasi sensor DS18B20 dan arsitektur IoT. Urgensi industri dari integrasi keduanya terletak pada fakta bahwa >50% kerugian produk farmasi di negara berkembang disebabkan oleh *temperature excursion* yang tidak terdeteksi secara real-time, dan rata-rata kerugian finansial pada rantai dingin makanan laut mencapai 15–35% dari nilai produk menurut literatur供应链 global. Oleh karena itu, modul 2326 ini menyintesiskan kerangka resilience model dengan bukti empiris IoT untuk menghasilkan modul Teknik Industri yang aplikatif dan terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual Ketahanan Rantai Dingin

Khurshid dan Siddiqui (2024) mendefinisikan *cold chain resilience* sebagai kemampuan sistem untuk mempertahankan kualitas produk $Q(t)$ di atas ambang batas kritis $Q_{crit}$ sepanjang horizon perencanaan $T$, dengan tiga sub-komponen utama:

$$
R(t) = \alpha \cdot A(t) + \beta \cdot \text{Adap}(t) + \gamma \cdot \text{Rec}(t)
$$

di mana:
- $A(t)$ = *Absorptive capacity* (kapasitas absorbsi terhadap shock termal)
- $\text{Adap}(t)$ = *Adaptive capacity* (kapasitas adaptasi dinamis)
- $\text{Rec}(t)$ = *Recovery capacity* (kapasitas pemulihan pasca-gangguan)
- $\alpha + \beta + \gamma = 1$ dengan $\alpha, \beta, \gamma > 0$ (bobot prioritas)

### 2.2 Model Degradasi Kualitas Termal

Degradasi mutu produk mudah rusak mengikuti persamaan Arrhenius yang dimodifikasi:

$$
\frac{dQ}{dt} = -k_0 \cdot e^{-E_a/(R \cdot T(t))} \cdot Q(t)
$$

dengan $k_0$ = konstanta pre-eksponensial, $E_a$ = energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T(t)$ = suhu absolut (K) sebagai fungsi waktu. Solusi analitiknya:

$$
Q(t) = Q_0 \cdot \exp\left(-k_0 \int_0^t e^{-E_a/(R \cdot T(\tau))} d\tau\right)
$$

### 2.3 Indeks Stabilitas Termal (*Thermal Stability Index*)

Putra et al. (2024) mengusulkan indeks yang merepresentasikan kinerja sensor DS18B20 dalam mempertahankan suhu $T$ pada rentang $\left[T_{min}, T_{max}\right]$:

$$
\text{TSI} = 1 - \frac{1}{N}\sum_{i=1}^{N}\left|\frac{T_i - T_{set}}{T_{max} - T_{min}}\right|
$$

dengan $T_{set}$ adalah *set-point* suhu (misalnya 2–8°C untuk vaksin standar), $T_i$ pembacaan sensor ke-$i$, dan $N$ jumlah observasi.

### 2.4 Probabilitas Kegagalan Rantai Dingin

Probabilitas kumulatif kegagalan (*failure probability*) sistem rantai dingin dengan $n$ titik kritis (nodes) mengikuti:

$$
P_f = 1 - \prod_{j=1}^{n}\left(1 - p_j\right)
$$

di mana $p_j$ = probabilitas kegagalan lokal di node $j$ (kerusakan kompresor, keterlambatan distribusi, *excursion* termal, dsb.).

### 2.5 Fungsi Kehilangan Ekonomi

Kerugian total akibat gangguan rantai dingin dimodelkan sebagai:

$$
L = \int_0^T C_v \cdot \max(0, Q_{crit} - Q(t)) \, dt + C_p \cdot P_f
$$

dengan $C_v$ = biaya kerusakan per unit produk per satuan waktu, $C_p$ = biaya penalty (penalty cost) atas kegagalan sistem.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT (berdasarkan Putra et al., 2024)

Arsitektur teknologi yang diusulkan mengikuti pendekatan *4-layer IoT architecture*:

```
┌─────────────────────────────────────────────┐
│ Layer 4: Application & Dashboard (Web/Mobile)│
│   → Visualisasi real-time, alert threshold   │
├─────────────────────────────────────────────┤
│ Layer 3: Network (WiFi/LoRa/4G Gateway)     │
│   → Transmisi data ke cloud server          │
├─────────────────────────────────────────────┤
│ Layer 2: Processing (Mikrokontroler ESP32)  │
│   → Akuisisi data DS18B20, timestamp         │
├─────────────────────────────────────────────┤
│ Layer 1: Perception (Sensor DS18B20)        │
│   → Akuisisi suhu, akurasi ±0.5°C           │
└─────────────────────────────────────────────┘
```

### 3.2 SOP Pemantauan dan Respon Gangguan

| Tahap | Prosedur | Parameter Kritis | Standar Acuan |
|-------|----------|------------------|---------------|
| 1 | Akuisisi data sensor setiap 10 detik | $T_i$ (°C) | WHO PQS E006 |
| 2 | Validasi data (filter outlier) | $\lvert T_i - T_{med}\rvert < 3\sigma$ | ISO 21930 |
| 3 | *Threshold checking* | $T_i \in [2, 8]°C$ (vaksin) | WHO TRS 961 |
| 4 | Alert otomatis jika *excursion* | $\Delta T > 1°C$ selama >15 menit | 21 CFR Part 11 |
| 5 | Logging ke database cloud | Timestamp, node ID, $T_i$ | GDP (Good Distribution Practice) |
| 6 | Analisis TSI harian | $\text{TSI} \geq 0{,}95$ | Internal KPI |

### 3.3 Diagram Alir Respon *Excursion* Termal

```
[Sensor Baca T_i] → [T_i dalam range?] → YA → [Log Normal]
                            ↓ TIDAK
                    [Hitung durasi excursion]
                            ↓
              [Δt > 15 menit?]
                    ↓ YA              ↓ TIDAK
            [Trigger Alarm]    [Watch-list monitoring]
                    ↓
            [Notifikasi Apoteker]
                    ↓
            [Quarantine produk terdampak]
                    ↓
            [Investigasi root cause]
                    ↓
            [Update parameter Q_0, k_0]
```

### 3.4 Prosedur Resiliensi (berdasarkan Khurshid & Siddiqui, 2024)

Tiga protokol resiliensi yang harus diintegrasikan ke dalam SOP:
1. **Absorptive Protocol** — Insulasi ganda, fase-change material (PCM) pada *cold chain box* sebagai buffer termal.
2. **Adaptive Protocol** — Dynamic routing berdasarkan prediksi suhu berbasis ML.
3. **Recovery Protocol** — Aktivasi unit cadangan, redispatch produk, dokumentasi CAPA (Corrective and Preventive Action).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak (×100 vial)

**Parameter Input:**
- Volume batch: $N_{batch} = 100$ vial vaksin mRNA (each vial ~$Q_0$ = 100% poten pada $t=0$)
- Energi aktivasi: $E_a = 75.000$ J/mol (tipikal produk biologis)
- $k_0 = 3{,}6 \times 10^{10}$ /jam
- $R = 8{,}314$ J/(mol·K)
- Suhu operasional normal: $T = 277{,}15$ K (4°C)
- Suhu *excursion* (kontainer terbuka): $T = 298{,}15$ K (25°C) selama $\Delta t = 2$ jam
- Set-point: $T_{set} = 5°C$, range $\left[T_{min}, T_{max}\right] = [2°C, 8°C]$

### 4.2 Perhitungan Degradasi Kualitas

**Langkah 1:** Hitung laju degradasi pada suhu normal (4°C = 277,15 K):
$$
k_1 = k_0 \cdot e^{-E_a/(R \cdot T_1)} = 3{,}6 \times 10^{10} \cdot e^{-75000/(8314 \cdot 277{,}15)}
$$
$$
k_1 = 3{,}6 \times 10^{10} \cdot e^{-32{,}57} = 3{,}6 \times 10^{10} \cdot 6{,}41 \times 10^{-15} = 2{,}31 \times 10^{-4} \text{ /jam}
$$

**Langkah 2:** Hitung laju degradasi pada suhu *excursion* (25°C = 298,15 K):
$$
k_2 = 3{,}6 \times 10^{10} \cdot e^{-75000/(8314 \cdot 298{,}15)} = 3{,}6 \times 10^{10} \cdot e^{-30{,}27}
$$
$$
k_2 = 3{,}6 \times 10^{10} \cdot 7{,}06 \times 10^{-14} = 2{,}54 \times 10^{-3} \text{ /jam}
$$

**Langkah 3:** Degradasi total setelah 2 jam *excursion*:
$$
Q(2) = 100 \cdot e^{-2{,}54 \times 10^{-3} \times 2} = 100 \cdot e^{-5{,}08 \times 10^{-3}} = 100 \cdot 0{,}9949 = 99{,}49\%
$$

**Langkah 4:** Kerugian finansial (asumsi harga vial = Rp 250.000):
$$
L = 100 \times (1 - 0{,}9949) \times 250.000 = 100 \times 0{,}0051 \times 250.000 = \text{Rp } 127.500
$$

### 4.3 Perhitungan Thermal Stability Index (TSI) dengan IoT

Misalkan dalam 1 hari (N = 8640 observasi @ interval 10 detik), suhu fluktuatif antara 4,2°C – 5,8°C dengan rata-rata 5,0°C. Standar deviasi $\sigma = 0{,}4°C$.

$$
\text{TSI} = 1 - \frac{1}{8640}\sum_{i=1}^{8640}\left|\frac{T_i - 5}{8-2}\right|
$$

Untuk distribusi normal, expected value $\left|\frac{T_i - 5}{6}\right| \approx \frac{0{,}4}{6} \cdot \sqrt{2/\pi} = 0{,}0530$.

$$
\text{TSI} \approx 1 - 0{,}0530 = 0{,}947
$$

Interpretasi: TSI = 0,947 berada di bawah target ≥ 0,95 → sistem perlu peningkatan insulasi atau kalibrasi sensor. Putra et al. (2024) menunjukkan bahwa penerapan sensor DS18B20 dengan