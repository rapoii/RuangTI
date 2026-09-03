# 2726 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak dengan Integrasi Sistem Pemantauan IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik cold chain merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, biofarmasi, produk darah, makanan segar, dan bahan kimia tertentu. Menurut Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: 10.2139/ssrn.4959599), kompleksitas rantai pasok modern yang bersifat *multi-modal*, *multi-node*, dan terdistribusi secara geografis menjadikan kerentanan terhadap gangguan operasional sebagai risiko struktural, bukan insidental. Pelanggaran rentang suhu yang ditetapkan — misalnya pada rentang 2–8°C untuk vaksin program imunisasi WHO — selama periode kritis dapat menyebabkan degradasi kualitas produk yang tidak terdeteksi secara visual hingga pada titik di mana lot produk harus dimusnahkan (*wastage rate* 5–35% di negara berkembang).

Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* (DOI: 10.35134/komtekinfo.v12i1.589) mendokumentasikan kasus nyata di Dinas Kesehatan Kabupaten Siak, di mana Unit Pelaksana Teknis Dinas (UPTD) Farmasi menghadapi dua permasalahan struktural: (1) cold chain box tidak dilengkapi sistem pemantauan suhu *real-time* dengan kemampuan peringatan dini (*early warning*), dan (2) pencatatan suhu masih dilakukan secara manual setiap dua jam pada *log sheet* kertas — pendekatan yang rentan terhadap human error, keterlambatan respons, dan kehilangan jejak audit. Kedua keterbatasan ini menunjukkan jurang (*gap*) antara praktik operasional lapangan dan kapabilitas teknologi yang tersedia, sekaligus menegaskan urgensi integrasi sensor *Internet of Things* (IoT) dengan model resiliensi kuantitatif.

Konsekuensi ekonomi dari kegagalan cold chain sangat material. Pada industri biofarmasi, satu lot vaksin yang rusak karena *temperature excursion* bernilai USD 0,5–2 juta. Pada sektor perishable food, *Food and Agriculture Organization* (FAO) memperkirakan 14% produk pangan hilang sebelum mencapai konsumen akibat cold chain failure. Secara operasional, paper Khurshid dan Siddiqui (2024) menunjukkan bahwa pendekatan resiliensi bukan sekadar *redundancy* melainkan kombinasi dari *absorption*, *adaptation*, dan *restoration* capability yang harus dirancang secara eksplisit sejak tahap desain sistem. Integrasi IoT dengan model resiliensi memungkinkan *visibility* real-time, *predictive intervention*, dan *post-event learning* — tiga pilar yang sebelumnya sulit dipenuhi oleh sistem manual.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain

Khurshid dan Siddiqui (2024) mengusulkan kerangka resiliensi yang diukur melalui *Resilience Triangle* yang diadaptasi dari Bruneau et al. dengan modifikasi untuk domain logistik. Indeks resiliensi didefinisikan sebagai rasio antara *quality performance* sistem terhadap waktu:

$$R(t) = \frac{1}{T}\int_{0}^{T} Q(t)\, dt$$

di mana $Q(t)$ adalah fungsi kinerja sistem pada waktu $t$, dengan $Q(t) \in [0,1]$, dan $T$ adalah horizon evaluasi. Saat gangguan terjadi pada $t_0$ dan sistem pulih pada $t_1$, degradasi resiliensi dihitung melalui:

$$\text{Resilience Loss} = \int_{t_0}^{t_1} \left[1 - Q(t)\right] dt$$

### 2.2 Model Degradasi Termal Arrhenius

Degradasi produk vaccine mengikuti kinetika Arrhenius, di mana laju degradasi $k(T)$ bergantung pada suhu absolut $T$:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), dan $R$ adalah konstanta gas universal (8,314 J/(mol·K)). Penurunan potensi vaksin seiring waktu pada suhu $T$ dimodelkan sebagai:

$$P(t) = P_0 \cdot \exp\left(-k(T) \cdot t\right)$$

di mana $P_0$ adalah potensi awal dan $P(t)$ adalah potensi pada waktu $t$.

### 2.3 Reliabilitas Sistem Multi-Komponen

Sistem cold chain terdiri dari komponen seri (compressor, sensor, komunikasi, daya). Reliabilitas total sistem:

$$R_{sys}(t) = \prod_{i=1}^{n} R_i(t) = \prod_{i=1}^{n} \exp(-\lambda_i t)$$

di mana $\lambda_i$ adalah *failure rate* komponen $i$. *Mean Time Between Failures* (MTBF):

$$\text{MTBF} = \frac{1}{\lambda_{sys}} = \frac{1}{\sum_{i=1}^{n} \lambda_i}$$

### 2.4 Model Sensor DS18B20

Berdasarkan Putra et al. (2024), sensor DS18B20 memiliki protokol *1-Wire* dengan akurasi $\pm 0{,}5°\text{C}$ pada rentang $-10°\text{C}$ hingga $+85°\text{C}$. Resolusi konfigurasi 12-bit menghasilkan langkah kuantisasi:

$$\Delta T = \frac{T_{max} - T_{min}}{2^{12}} = \frac{160}{4096} \approx 0{,}039°\text{C}$$

Waktu konversi pada resolusi 12-bit adalah $t_{conv} \leq 750$ ms, sehingga *sampling rate* efektif:

$$f_s = \frac{1}{t_{conv}} \approx 1{,}33 \text{ Hz}$$

### 2.5 Total Cost of Ownership (TCO)

TCO cold chain dengan IoT selama periode $N$ tahun:

$$\text{TCO} = \sum_{t=0}^{N-1} \frac{C_{cap} + C_{op} + C_{loss}}{(1+r)^t}$$

dengan $C_{cap}$ biaya kapital sensor, $C_{op}$ biaya operasional (maintenance, cloud), $C_{loss}$ biaya kerugian produk, dan $r$ adalah discount rate.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain (berdasarkan Putra et al., 2024)

Arsitektur sistem berlapis empat (*four-tier architecture*):

1. **Perception Layer**: Sensor DS18B20 terpasang pada multiple *probe points* di dalam cold chain box, terhubung secara *daisy-chain* melalui protokol 1-Wire ke mikrokontroler (ESP32/NodeMCU).
2. **Network Layer**: Transmisi data menggunakan WiFi/MQTT ke *message broker* dengan *quality of service* level 1 (QoS-1) untuk menjamin minimal satu kali pengiriman berhasil.
3. **Processing Layer**: *Cloud platform* (misal: Firebase, AWS IoT Core) melakukan agregasi, validasi, dan penyimpanan time-series data dengan retensi minimum 5 tahun untuk keperluan audit.
4. **Application Layer**: Dashboard *web-based* dan aplikasi mobile menampilkan real-time temperature, threshold alerts, dan *historical analytics*.

### 3.2 SOP Pemantauan dan Respons

Diagram alir SOP:

```
[Mulai] → [Inisialisasi Sensor] → [Kalibrasi 0°C & 8°C] 
   ↓
[Loop: Baca Suhu setiap Δt=60s] 
   ↓
[T < 2°C atau T > 8°C?] —Tidak→ [Log ke Database] → [Loop]
   ↓ Ya
[Trigger Alert: SMS/Email/Sirene] → [Notifikasi Apoteker]
   ↓
[Apoteker Verifikasi dalam 15 menit] 
   ↓
[Evaluasi: a) Produk masih aman? b) Lot dikarantina?]
   ↓
[Dokumentasi Insiden & CAPA] → [Loop]
```

### 3.3 Standar yang Dipatuhi

- **WHO PQS (Performance, Quality and Safety)** untuk cold chain equipment
- **GxP (Good x Practice)** untuk industri farmasi
- **ISO 23412:2020** untuk *Indirect temperature-controlled refrigerated delivery*
- **HACCP** untuk industri pangan
- **GDP (Good Distribution Practice)** untuk farmasi

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin COVID-19 dari Produsen ke Puskesmas

**Parameter Input:**
- Lot vaksin: 10.000 dosis
- Suhu referensi: $T_{ref} = 5°C = 278{,}15$ K
- Energi aktivasi tipikal mRNA: $E_a = 83.680$ J/mol (≈ 20 kcal/mol)
- $A = 10^{12}$ jam$^{-1}$
- Jarak distribusi: 500 km, 3 segmen transport (pabrik → gudang regional → puskesmas)
- Durasi total: 18 jam transport + 24 jam penyimpanan sementara
- Biaya per dosis: USD 15
- Discount rate: $r = 8\%$

### 4.2 Perhitungan Laju Degradasi pada Suhu Normal

$$k(5°C) = 10^{12} \cdot \exp\left(-\frac{83.680}{8{,}314 \cdot 278{,}15}\right) = 10^{12} \cdot e^{-36{,}18}$$

$$k(5°C) = 10^{12} \cdot 1{,}76 \times 10^{-16} = 1{,}76 \times 10^{-4} \text{ jam}^{-1}$$

### 4.3 Simulasi Kegagalan Daya 4 Jam (Suhu Naik ke 15°C)

$$k(15°C) = 10^{12} \cdot \exp\left(-\frac{83.680}{8{,}314 \cdot 288{,}15}\right) = 10^{12} \cdot e^{-34{,}93} = 3{,}49 \times 10^{-4} \text{ jam}^{-1}$$

Tanpa sistem peringatan dini, paparan 4 jam menyebabkan potensi yang tersisa:

$$P(t) = P_0 \cdot \exp\left(-3{,}49 \times 10^{-4} \cdot 4\right) = P_0 \cdot e^{-0{,}001396} \approx 0{,}9986 \cdot P_0$$

Degradasi tampak kecil secara individu, namun pada 10.000 dosis dan paparan berulang secara kumulatif pada multi-batch:

$$\text{Total Loss (tanpa IoT)} = 10.000 \times 15 \times 0{,}15 = \text{USD } 22.500$$

### 4.4 Dengan Sistem IoT — Deteksi Dini dalam 5 Menit

Waktu respons rata-rata dengan IoT: 5 menit (0,0833 jam). Degradasi menjadi:

$$P(t) = P_0 \cdot \exp\left(-3{,}49 \times 10^{-4} \cdot 0{,}0833\right) \approx 0{,}99997 \cdot P_0$$

Kerugian berkurang menjadi:

$$\text{Total Loss (dengan IoT)} = 10.000 \times 15 \times 0{,}0003 = \text{USD } 45$$

### 4.5 Analisis Indeks Resiliensi (Khurshid & Siddiqui, 2024)

Misalkan fungsi kinerja tanpa IoT setelah 4 jam gangguan:

$$Q_{tanpa}(t) = \begin{cases} 1{,}0 & 0 \leq t < t_0 \\ 0{,}4 & t_0 \leq t < t_1 \\ 0{,}9 & t \geq t_1 \end{cases}$$

$$R_{tanpa} = \frac{(1 \cdot 1{,}0) + (4 \cdot 0{,}4) + (19 \cdot 0{,}9)}{24} = \frac{1 + 1{,}6 + 17{,}1}{24} = 0{,}821$$

Dengan IoT, sistem pulih dalam 5 menit:

$$Q_{dengan}(t) = \begin