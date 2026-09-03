# 2950 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak dengan Integrasi Sistem Monitoring IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk farmasi, pangan, dan bioteknologi yang memerlukan pengendalian suhu kontinyu pada rentang 2–8°C untuk vaksin, -18°C hingga -25°C untuk produk beku, serta 0–4°C untuk produk susu dan seafood (Khurshid & Siddiqui, 2024). Menurut Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products*, kegagalan menjaga integritas termal rantai dingin tidak hanya menyebabkan kerugian ekonomi hingga 35% dari nilai produk, tetapi juga mengancam keselamatan publik, terutama pada distribusi vaksin di negara berkembang. Hal ini diperkuat oleh temuan Putra, Defit, dan Nurcahyo (2024) yang mendokumentasikan kasus pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana cold chain box penyimpanan vaksin belum配备 pemantauan suhu *real-time*, sehingga pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet* oleh apoteker.

Urgensi pengembangan model resiliensi rantai dingin muncul dari tiga permasalahan struktural: (1) **gangguan operasional** berupa kerusakan internal kompresor, kebocoran refrigeran, atau kegagalan sistem kelistrikan; (2) **gangguan eksternal** berupa delay transportasi, *handling* yang tidak sesuai, dan paparan suhu ambient; serta (3) **keterbatasan visibilitas data** yang menghambat respons cepat ketika terjadi ekskursi suhu. Putra et al. (2024) mengidentifikasi bahwa ekskursi suhu pada cold chain box sering kali tidak terdeteksi hingga 2 jam, yang merupakan jendela kritis karena mayoritas vaksin mRNA dan *live attenuated* (misalnya Campak, Polio OPV) memiliki *Time-Temperature Indicator* (TTI) yang sensitif terhadap perubahan suhu melebihi 8°C. Khurshid dan Siddiqui (2024) mengusulkan kerangka resiliensi yang mengintegrasikan kapasitas *absorption*, *adaptation*, dan *recovery* sebagai metrik kinerja utama. Kerangka ini menjadi dasar bagi rekayasawan industri untuk merancang sistem cold chain yang tidak hanya andal (*reliable*), tetapi juga mampu pulih secara cepat dari gangguan, sehingga menjamin kualitas produk hingga ke titik akhir distribusi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Indeks Resiliensi Sistem Cold Chain

Khurshid dan Siddiqui (2024) mendefinisikan resiliensi rantai dingin sebagai kemampuan sistem untuk mempertahankan fungsi kritis (integritas suhu dan kualitas produk) di bawah kondisi gangguan, yang diukur melalui *Resilience Triangular Area* (RTA). Formulasi matematisnya adalah:

$$R = \frac{\int_{t_0}^{t_1} [Q_{nominal}(t) - Q_{disrupted}(t)] \, dt}{\int_{t_0}^{t_1} Q_{nominal}(t) \, dt}$$

di mana $R$ adalah indeks resiliensi (0 ≤ R ≤ 1), $Q_{nominal}(t)$ adalah fungsi kualitas produk pada kondisi nominal, $Q_{disrupted}(t)$ adalah fungsi kualitas saat terjadi gangguan, $t_0$ adalah waktu awal gangguan, dan $t_1$ adalah waktu pemulihan penuh. Semakin kecil nilai $R$, semakin tinggi resiliensi sistem.

### 2.2. Model Kerusakan Termal Kumulatif (Cumulative Thermal Damage)

Putra et al. (2024) merujuk pada model degradasi Arrhenius untuk memprediksi laju kerusakan termal pada produk biologi:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

dengan $k(T)$ adalah laju reaksi degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), dan $R$ adalah konstanta gas universal (8,314 J/mol·K). Total kerusakan kumulatif dihitung menggunakan integrasi numerik:

$$D_{total} = \int_0^{t} k[T(\tau)] \, d\tau$$

Untuk produk vaksin dengan energi aktivasi tipikal $E_a = 80.000$ J/mol dan suhu referensi 5°C (278,15 K), pelanggaran suhu selama $\Delta t$ jam pada suhu $T_{excursion}$ menghasilkan laju degradasi yang meningkat secara eksponensial.

### 2.3. Model Probabilitas Kegagalan Sensor dengan IoT Monitoring

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi ±0,5°C pada resolusi 9–12 bit. Probabilitas kesalahan pembacaan sensor diberikan oleh distribusi normal:

$$P(|T_{measured} - T_{actual}| > \delta) = 2 \cdot \left[1 - \Phi\left(\frac{\delta}{\sigma}\right)\right]$$

dengan $\Phi$ adalah fungsi distribusi kumulatif normal standar, $\delta$ adalah toleransi deviasi yang diizinkan, dan $\sigma$ adalah standar deviasi kesalahan sensor (≈ 0,25°C untuk DS18B20 yang terkalibrasi).

### 2.4. Fungsi Keandalan Rantai Dingin Multi-Node

Khurshid dan Siddiqui (2024) memodelkan cold chain sebagai jaringan multi-node dengan fungsi keandalan:

$$R_{chain}(t) = \prod_{i=1}^{n} R_i(t) = \prod_{i=1}^{n} e^{-\lambda_i t}$$

di mana $R_i(t)$ adalah reliabilitas node ke-$i$ (cold storage, refrigerated truck, last-mile delivery), $\lambda_i$ adalah laju kegagalan node, dan $n$ adalah jumlah node. Keandalan kumulatif menurun secara geometris terhadap jumlah node, sehingga *resilience engineering* wajib memperhatikan node dengan *bottleneck* tertinggi.

### 2.5. Model Biaya-Resiliensi (Cost-Resilience Trade-off)

Formulasi optimasi untuk investasi resiliensi:

$$\min_{x} \, C_{total}(x) = C_{infra}(x) + C_{loss}(R(x)) + C_{monitor}(x)$$

dengan kendala $R(x) \geq R_{min}$, di mana $x$ adalah vektor keputusan investasi (sensor IoT, redundansi unit pendingin, *backup power*), $C_{infra}$ adalah biaya infrastruktur, $C_{loss}$ adalah biaya kerugian produk yang bergantung pada $R$, dan $C_{monitor}$ adalah biaya operasional monitoring.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Monitoring IoT

Putra et al. (2024) merancang arsitektur lima lapis (*five-layer architecture*) untuk cold chain vaccine monitoring:

1. **Lapisan Sensor**: Sensor DS18B20 (*waterproof*), akurasi ±0,5°C, rentang -55°C hingga +125°C, protokol 1-Wire, multi-drop hingga 10 unit per mikrokontroler.
2. **Lapisan Akuisisi Data**: Mikrokontroler ESP32 dengan ADC internal dan *timestamp* RTC DS3231, sampling setiap 10 detik.
3. **Lapisan Komunikasi**: Transmisi via Wi-Fi/MQTT ke *cloud server* dengan *payload* JSON berukuran ±120 byte per reading.
4. **Lapisan Pemrosesan**: *Dashboard* berbasis *web application* (PHP/Node.js) dengan *threshold alert* pada 2°C dan 8°C.
5. **Lapisan Aksi**: Notifikasi otomatis (SMS/WhatsApp/Telegram) kepada apoteker jika terjadi ekskursi suhu lebih dari 15 menit.

### 3.2. SOP Monitoring Cold Chain (Adopsi WHO PQS E006)

| Tahap | Prosedur | PIC | SLA |
|-------|----------|-----|-----|
| Pre-loading | Verifikasi suhu cold box (2–8°C), cek ice pack, catat nomor batch | Apoteker | 15 menit |
| Loading | Penataan疫苗 sesuai SOP, aktivasi logger | Apoteker | 10 menit |
| In-transit | Monitoring IoT real-time, alert setiap 30 detik | Sistem otomatis | Kontinyu |
| Receiving | Verifikasi suhu, cek TTI, dokumentasi | Apoteker penerima | 15 menit |
| Post-event | Investigasi root cause jika ekskursi, hitung exposure thermal | QA Manager | 24 jam |

### 3.3. Diagram Alir Logika Deteksi Ekskursi

```
[START] → Baca T_sensor setiap 10 detik
       ↓
[IF T < 2°C ATAU T > 8°C] → Set flag_excursion = TRUE
       ↓                  ↓
   Reset counter      Tulis ke log buffer
       ↓                  ↓
   Kembali ke loop   Hitung durasi ekskursi Δt
                          ↓
                  [IF Δt > 15 menit] → Trigger alert & SMS
                                       ↓
                                  Lock vaccine batch
                                       ↓
                              Initiate QA investigation
```

### 3.4. Prosedur Pemulihan (Recovery Protocol)

Berdasarkan model resiliensi Khurshid & Siddiqui (2024), protokol pemulihan terdiri dari empat fase:

- **Fase Deteksi (0–5 menit)**: Validasi sensor, identifikasi jenis gangguan (sensor failure vs actual temperature breach).
- **Fase Isolasi (5–15 menit)**: Pindahkan produk ke unit cadangan (*backup cold box*), aktivasi genset jika terjadi power failure.
- **Fase Mitigasi (15–60 menit)**: Koordinasi dengan transporter, evaluasi kelayakan produk berdasarkan model Arrhenius.
- **Fase Restorasi (1–24 jam)**: Perbaikan sistem, kalibrasi ulang sensor, *re-validation* sebelum produk dikembalikan ke rantai pasok.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak

**Parameter Input:**
- Produk: 500 vial vaksin mRNA, volume per vial 2 mL
- Suhu penyimpanan: 2–8°C
- Durasi distribusi: 8 jam
- Laju kerusakan pada 5°C: $k_{ref} = 1,0 \times 10^{-6}$ /jam
- Energi aktivasi: $E_a = 80.000$ J/mol
- Konstanta gas: $R = 8,314$ J/mol·K
- Konstanta pre-eksponensial: $A = 1,2 \times 10^{12}$ /jam
- Biaya per vial: Rp 250.000
- Investasi sensor IoT: Rp 18.500.000 (satu set)

### 4.2. Perhitungan Langkah demi Langkah

**Langkah 1: Hitung laju degradasi pada suhu referensi (5°C = 278,15 K)**

$$k(278,15) = A \cdot e^{-E_a / (R \cdot T)} = 1,2 \times 10^{12} \cdot e^{-80000 / (8,314 \times 278,15)}$$

$$= 1,2 \times 10^{12} \cdot e^{-34,6} = 1,2 \times 10^{12} \cdot 1,0 \times 10^{-15} = 1,2 \times 10^{-3} \text{ /jam}$$

(catatan: $k_{ref}$ yang ditetapkan adalah laju rata-rata terkalibrasi terhadap data empiris stabilizer)

**Langkah 2: Simulasi ekskursi suhu pada 12°C (285,15 K) selama 2 jam**

$$k(285,15) = 1,2 \times 10^{12} \cdot e^{-80000 / (8,314 \times 285,15)} = 1,2 \times 10^{12} \cdot e^{-33,76}$$

$$= 1,2 \times 10^{12} \cdot 2,16 \times 10^{-15} = 2,59 \times 10^{-3} \text{ /jam}$$

**Langkah 3: Hitung kerusakan kumulatif pada kedua kondisi**

Untuk suhu normal 5°C selama 6 jam + ekskursi 12°C selama 2 jam:

$$D_{total} = 6 \times 1,2 \times 10^{-3} + 2 \times 2,59 \times 10^{-3} = 7,2 \times 10^{-3} + 5,18 \times 10^{-3} = 1,238 \times 10^{-2}$$

**Langkah 4: Estimasi tingkat kerusakan batch**

Jika threshold kegagalan adalah $D_{crit} = 2,5 \times 10^{-2}$, maka rasio kerusakan:

$$\eta = \frac{D_{total}}{D_{crit}} = \frac{1,238 \times 10^{-2}}{2,5 \times 10^{-2}} =