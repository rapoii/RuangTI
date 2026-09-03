# 2086 — Model Ketahanan (Resilience) Rantai Dingin Logistik Produk Mudah Rusak (Perishable) Berbasis Pemantauan IoT Realtime

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk termolabil—vaksin, produk biofarmasi, produk segar (hortikultura, dairy, seafood), dan reagen diagnostik—yang membutuhkan pemeliharaan suhu dalam rentang presisi (umumnya 2–8 °C untuk vaksin sesuai WHO PQS E001; -18 °C untuk makanan beku). Gangguan sekecil apapun pada rentang suhu dapat menyebabkan degradasi kualitas ireversibel, kerugian finansial masif, dan pada kasus vaksin serta biofarmasi, risiko keselamatan publik. Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa sistem cold chain modern harus dirancang bukan sekadar untuk *reliability* (keandalan), tetapi untuk *resilience*—yakni kapasitas sistem untuk menyerap, beradaptasi, dan memulihkan performa pascagangguan, suatu pergeseran paradigma fundamental dari preventive maintenance menuju predictive-resilient operations.

Urgensi problem ini bersifat global. World Health Organization (WHO) memperkirakan lebih dari 50% vaksin terbuang secara global karena breakage rantai dingin, terutama di negara berkembang. Kerugian ekonomi akibat food loss & waste menurut FAO menyentuh angka USD 1 triliun per tahun, dimana porsi signifikan terjadi pada tahap distribusi karena pelanggaran suhu. Di Indonesia, sebagaimana didokumentasikan Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) melalui studi kasus pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak, permasalahan klasik masih terjadi: (i) cold chain box belum配备 alat pemantauan suhu *realtime*; (ii) pencatatan suhu masih dilakukan secara manual setiap 2 jam pada *log sheet* oleh apoteker, sehingga deteksi anomali menjadi *post-factum*; dan (iii) tidak ada sistem peringatan dini (*early warning*) saat suhu keluar dari ambang batas yang disebabkan kerusakan internal (kompresor, refrigerant leakage) maupun eksternal (paparan lingkungan, durasi buka pintu). Kedua-gap ini—absence of resilience quantification dan absence of real-time IoT telemetry—menjadi justifikasi kuat untuk integrasi model resilience Khurshid & Siddiqui (2024) dengan arsitektur sensor DS18B20 dan mikrokontroler yang diusulkan Putra et al. (2024).

Konteks industrial engineering menjadi sangat relevan karena trade-off antara investasi modal (sensor IoT, sistem telemetri, UPS, redundansi chiller), biaya operasional (energi, kalibrasi), dan risiko kerugian harus dioptimasi secara kuantitatif. Dokumen modul ini membahas sinergi keduanya: bagaimana model ketahanan (resilience) dikembangkan secara matematis dan bagaimana implementasinya secara prosedural melalui SOP dan arsitektur teknologi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resilience Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) memformalkan *system resilience* sebagai fungsi waktu yang merepresentasikan tingkat performa sistem sebelum, selama, dan setelah disrupsi. Fungsi performa sistem $Q(t)$ didefinisikan sebagai:

$$Q(t) = \frac{T_{spec} - |T_{actual}(t) - T_{set}|}{T_{spec}}$$

di mana $T_{set}$ adalah suhu set-point (misal 5 °C untuk vaksin), $T_{actual}(t)$ suhu terukur pada waktu $t$, dan $T_{spec}$ adalah toleransi deviasi maksimum yang diizinkan (umumnya 3 °C untuk WHO PQS). Nilai $Q(t)$ berada pada rentang $[0, 1]$, dimana $Q=1$ merepresentasikan operasi nominal dan $Q=0$ merepresentasikan kegagalan total.

Resilience sistem kemudian dikuantifikasi melalui tiga metrik utama:

$$R = \int_{t_d}^{t_r} [1 - Q(t)] \, dt \quad \text{(Performance Loss Integral)}$$

$$\tau_r = t_r - t_d \quad \text{(Recovery Time)}$$

$$R_{score} = \frac{1}{1 + \alpha \cdot R + \beta \cdot \tau_r}$$

di mana $t_d$ adalah waktu onset disrupsi (saat $Q(t)$ turun di bawah threshold, misal 0.8), $t_r$ adalah waktu pemulihan sistem ke $Q \geq 0.95$, dan $\alpha, \beta$ adalah bobot kepentingan relatif antara performa dan waktu pemulihan. Semakin kecil $R$ dan $\tau_r$, semakin tinggi $R_{score}$ (mendekati 1).

### 2.2 Probabilistic Disruption Model

Karena disrupsi cold chain mengikuti pola stokastik, waktu antar-gangguan dimodelkan dengan distribusi Weibull:

$$f(\Delta t) = \frac{k}{\lambda}\left(\frac{\Delta t}{\lambda}\right)^{k-1} e^{-(\Delta t/\lambda)^k}$$

dengan $k$ shape parameter dan $\lambda$ scale parameter. Parameter ini dapat diestimasi dari data historis sensor. Peluang sistem mengalami minimal satu disrupsi dalam horizon waktu $T$ adalah:

$$P_{disrupt}(T) = 1 - e^{-(T/\lambda)^k}$$

### 2.3 Degradasi Kualitas Produk

Untuk produk biologis/vaksin, degradasi mengikuti kinetika Arrhenius termodifikasi. Kecepatan deteriorasi $k_d$ adalah:

$$k_d = A \cdot e^{-E_a / (R_g T)}$$

di mana $A$ adalah pre-exponential factor, $E_a$ energi aktivasi, $R_g$ konstanta gas universal (8.314 J/(mol·K)), dan $T$ suhu absolut (Kelvin). Konsentrasi zat aktif tersisa $C(t)$ mengikuti:

$$C(t) = C_0 \cdot e^{-k_d(T(t)) \cdot t}$$

### 2.4 Formulasi Optimasi Biaya-Resilience

Trade-off biaya vs resilience diformulasikan sebagai fungsi objektif:

$$\min_{x} \; Z = C_{capex}(x) + C_{opex}(x) + \mathbb{E}[C_{loss}(x, \xi)]$$

dengan kendala $R_{score}(x) \geq R_{min}$, di mana $x$ adalah vektor keputusan desain (jumlah sensor, kapasitas chiller, redundansi), $\xi$ adalah skenario disrupsi stokastik, dan $C_{loss}$ adalah expected loss dari produk rusak.

### 2.5 Model IoT Telemetri (Putra et al., 2024)

Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mengusulkan arsitektur sensor DS18B20 (akurasi ±0.5 °C pada -10 hingga +85 °C, resolusi 0.0625 °C) dengan protokol 1-Wire yang memungkinkan multi-drop pada satu pin mikrokontroler. Akuisisi data mengikuti laju Nyquist untuk fluktuasi suhu:

$$f_s \geq 2 \cdot f_{max}$$

Untuk cold chain box dengan konstanta waktu termal $\tau_{th} \approx 30$–$60$ menit, laju sampling efektif minimum adalah 1/60 Hz, namun untuk deteksi anomali cepat direkomendasikan 0.01–0.1 Hz (sampling setiap 10–100 detik).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Terintegrasi

Sistem resilience cold chain modern mengintegrasikan empat lapis:

1. **Lapis Sensor (Sensing Layer):** Jaringan sensor DS18B20 multi-titik (minimal 3 titik per cold chain box: inlet evaporator, outlet evaporator, center-load) dengan akuisisi data setiap $\Delta t_{sample}$.
2. **Lapis Edge (Edge Computing):** Mikrokontroler (ESP32/Arduino) menjalankan algoritma *sliding window* untuk deteksi anomali realtime.
3. **Lapis Komunikasi:** Transmisi via WiFi/LoRaWAN/MQTT ke cloud server dengan interval 30–60 detik.
4. **Lapis Aplikasi:** Dashboard monitoring, alert system, dan modul *resilience analytics*.

### 3.2 Algoritma Deteksi Anomali Realtime

Implementasi dari deteksi disrupsi otomatis dapat menggunakan algoritma *moving average* dan *CUSUM* (Cumulative Sum Control Chart):

$$S_t = \max\left(0, S_{t-1} + (T_t - \mu_0 - k_{CUSUM})\right)$$

di mana $S_t$ adalah statistik CUSUM kumulatif, $\mu_0$ suhu nominal, dan $k_{CUSUM}$ parameter referensi (allowable shift). Alarm diaktifkan saat $S_t > h$ (decision threshold).

### 3.3 SOP Operasional Harian

```
PROSEDUR OPERASIONAL STANDAR — COLD CHAIN RESILIENCE MONITORING

P1. PRA-OPERASI (T-60 menit sebelum loading)
   a) Verifikasi set-point dan stabilisasi suhu cold chain box
   b) Kalibrasi sensor DS18B20 terhadap referensi termometer bersertifikat
   c) Check connectivity IoT gateway (ping test, packet loss < 1%)
   d) Verifikasi battery backup (SoC ≥ 95%)

P2. OPERASI AKTIF (selama distribusi)
   a) Auto-logging setiap Δt = 60 detik ke local SD card
   b) Auto-upload telemetry ke cloud setiap 5 menit
   c) Real-time alarm jika T_actual > T_set + ΔT_warn (ΔT_warn = 1.5 °C)
   d) Critical alarm jika T_actual > T_set + ΔT_crit (ΔT_crit = 3 °C)

P3. POST-OPERASI (T+15 menit setelah unloading)
   a) Auto-generate Quality Assurance Report
   b) Hitung R_score periode operasional
   c) Flag lot produk jika R_score < R_min_threshold untuk investigasi

P4. PEMELIHARAAN PREVENTIF
   a) Bulanan: verifikasi sensor accuracy, ganti refrigerant filter
   b) Triwulanan: full system stress test, simulasi power failure recovery
   c) Tahunan: recalibration sensor oleh lab terakreditasi ISO 17025
```

### 3.4 Prosedur Pemulihan Pasca-Disrupsi

Berdasarkan kerangka Khurshid & Siddiqui (2024), pemulihan mengikuti protokol tiga fase: (i) *Stabilization*—mencapai kembali Q(t) ≥ 0.5 dalam waktu $\tau_{stab} \leq 30$ menit; (ii) *Recovery*—mencapai Q(t) ≥ 0.95 dalam $\tau_{rec} \leq 4$ jam untuk produk termolabil standar; (iii) *Verification*—sampling kualitas produk untuk keputusan release/hold/quarantine.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak

Mengacu pada studi kasus Putra et al. (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)), tinjau distribusi 500 vial vaksin (volume total 5 L, suhu set-point $T_{set} = 5$ °C, toleransi $\pm 3$ °C) dari UPTD Farmasi Kabupaten Siak ke 12 Puskesmas dengan durasi pengiriman total 8 jam.

**Parameter input industri:**

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Suhu set-point | $T_{set}$ | 5 | °C |
| Toleransi atas | $T_{spec}$ | 3 | °C |
| Suhu lingkungan rata-rata | $T_{amb}$ | 32 | °C |
| Konstanta waktu thermal box | $\tau_{th}$ | 45 | menit |
| Energi aktivasi produk | $E_a$ | 75 | kJ/mol |
| Onset disrupsi (kerusakan kompresor) | $t_d$ | 180 | menit |
| Kapasitas termal cold box | $C_{th}$ | 800 | kJ/K |
| Laju kalor masuk saat kegagalan | $\dot{Q}_{leak}$ | 15 | W |

### 4.2 Perhitungan Trajektori Suhu Pascagangguan

Setelah kegagalan kompresor pada $t_d = 180$ menit, suhu di dalam cold box naik secara eksponensial menuju suhu ambient:

$$T(t) = T_{amb} - (T_{amb} - T_0) \cdot e^{-(t-t_d)/\tau_{th}'}$$

di mana $\tau_{th}' = C_{th} / (\dot{Q}_{leak}/\Delta T)$ adalah konstanta waktu saat kompresor mati. Dengan $\Delta T = 27