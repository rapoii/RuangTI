# 2694 — Model Resiliensi untuk Logistik Rantai Dingin Produk Mudah Rusak (Perishable Products): Integrasi Pemantauan Suhu IoT dan Pemulihan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik farmasi, makanan segar, bioteknologi, dan agrikultur bernilai tinggi yang mempertahankan integritas termal produk sepanjang perjalanan dari produsen ke konsumen akhir. Menurut Khurshid & Siddiqui (2024) dalam artikel "*A Resilience Model for Cold Chain Logistics of Perishable Products*" (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), kompleksitas operasional rantai dingin modern tidak lagi cukup ditangani dengan pendekatan kualitas konvensional (Quality Control/QC) karena distribusi perishable products menghadapi multi-hazard disruptions—mulai dari kerusakan refrigerasi,延误 dalam transit, kegagalan sensor, hingga *cyber-physical attack* pada infrastruktur IoT. Studi ini memperkenalkan paradigma resiliensi yang menggeser fokus dari sekadar pencegahan kegagalan menjadi kemampuan sistem untuk **menyerap (absorb), memulihkan (recover), dan beradaptasi (adapt)** terhadap gangguan termal yang bersifat stokastik.

Konteks urgensi industri dapat dilihat dari sisi ekonomi: menurut data WHO (diacu oleh Khurshid & Siddiqui, 2024), sekitar 50% vaksin global terbuang akibat *cold chain failure*, dengan nilai kerugian mencapai USD 35–60 miliar per tahun untuk sektor biofarmasi. Di Indonesia, permasalahan ini sangat akut di tingkat daerah. Putra, Defit, & Nurcahyo (2024) dalam "*Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20*" (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan bahwa UPTD Farmasi Dinas Kesehatan Kabupaten Siak menghadapi dua permasalahan struktural: (1) cold chain box sebagai media penyimpanan vaksin tidak dilengkapi alat pemantauan suhu *real-time* yang mampu memberikan peringatan dini saat suhu menyimpang dari rentang 2–8°C akibat kerusakan internal/eksternal, dan (2) pencatatan suhu masih dilakukan secara manual setiap 2 jam pada *log sheet* oleh apoteker—sebuah proses yang rentan terhadap human error, keterlambatan respons, dan inkonsistensi dokumentasi untuk audit BPOM/WHO PQS.

Perspektif Teknik Industri memandang cold chain bukan sekadar isu teknikal refrigerasi, melainkan masalah **reliability engineering**, **supply chain risk management**, dan **human factors engineering** secara simultan. Kegagalan satu titik (single point of failure) pada sensor suhu, kompresor, atau prosedur SOP dapat menyebabkan degradasi kualitas vaksin yang bersifat irreversibel—di mana produk yang telah rusak tidak dapat dipulihkan meskipun sistem telah diperbaiki (Khurshid & Siddiqui, 2024). Inilah yang membedakan *resilience* dari *reliability*: resilience secara eksplisit memasukkan dimensi waktu pemulihan (*recovery time*) dan kinerja residual (*residual performance*) setelah gangguan terjadi. Dokumen modul ini akan menguraikan model kuantitatif yang dikembangkan Khurshid & Siddiqui (2024), integrasinya dengan arsitektur IoT yang dirancang Putra et al. (2024), serta implementasi SOP operasional untuk fasilitas cold chain farmasi dan pangan.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi yang dikembangkan Khurshid & Siddiqui (2024) berpijak pada tiga pilar matematis: **(a) kinetika degradasi termal berbasis persamaan Arrhenius**, **(b) fungsi reliability sistem dengan laju kegagalan stokastik**, dan **(c) indeks resiliensi yang mengintegrasikan kedua konsep sebelumnya dengan metrik pemulihan**.

### 2.1 Kinetika Degradasi Termal (Arrhenius-Kinetics)

Laju degradasi kualitas produk perishable merupakan fungsi suhu absolut. Model standar industri farmasi/pangan menggunakan koefisien Q₁₀ yang ekuivalen dengan formulasi Arrhenius:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana:
- $k(T)$ = laju reaksi degradasi pada suhu $T$ (satuan: 1/waktu)
- $A$ = faktor pre-eksponensial (frekuensi碰撞 molekuler)
- $E_a$ = energi aktivasi degradasi (J/mol); untuk vaksin protein tipikal $E_a \in [60.000, 90.000]$ J/mol
- $R$ = konstanta gas universal = 8,314 J/(mol·K)
- $T$ = suhu absolut (Kelvin)

Hubungan dengan koefisien Q₁₀ diderivasi sebagai:

$$Q_{10} = \frac{k(T+10)}{k(T)} = e^{\frac{10 \cdot E_a}{R \cdot T \cdot (T+10)}}$$

Untuk produk susu pasteurisasi dan vaksin, Q₁₀ berada di rentang 2–4, artinya setiap kenaikan 10°C menggandakan laju degradasi (Khurshid & Siddiqui, 2024).

### 2.2 Fungsi Reliability Cold Chain

Probabilitas sistem cold chain mempertahankan suhu dalam spesifikasi selama interval waktu $[0, t]$ dimodelkan dengan distribusi Weibull (umum dalam reliability engineering):

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dengan $\beta$ = *shape parameter* (untuk cold chain refrigerated, $\beta > 1$ mengindikasikan *wear-out* pada kompresor, sedangkan $\beta < 1$ menandakan *infant mortality* pada sensor), dan $\eta$ = *scale parameter* (umur karakteristik).

### 2.3 Indeks Resiliensi Sistem (Resilience Index)

Khurshid & Siddiqui (2024) mendefinisikan *Resilience Index* $RI$ sebagai rasio antara kemampuan mempertahankan kinerja terhadap kombinasi paparan gangguan dan kecepatan pemulihan:

$$RI = \frac{\int_{t_0}^{t_1} Q_{\text{actual}}(t) \, dt}{\int_{t_0}^{t_1} Q_{\text{nominal}}(t) \, dt} \cdot e^{-\lambda \cdot T_{\text{recovery}}}$$

di mana:
- $Q_{\text{actual}}(t)$ = fungsi kualitas aktual selama gangguan (suhu terukur)
- $Q_{\text{nominal}}(t)$ = fungsi kualitas nominal (suhu target 2–8°C untuk vaksin)
- $t_0, t_1$ = waktu mulai dan berakhirnya event gangguan
- $\lambda$ = parameter diskon kualitas per satuan waktu pemulihan (0 ≤ λ ≤ 1)
- $T_{\text{recovery}}$ = *Mean Time To Recovery* (MTTR)

Nilai $RI \in [0, 1]$, dengan $RI = 1$ menunjukkan resiliensi sempurna (tidak ada degradasi selama gangguan atau pemulihan instan).

### 2.4 Model Stokastik Gangguan Diskrit

Khurshid & Siddiqui (2024) menggunakan proses Poisson non-homogen (*Non-Homogeneous Poisson Process/NHPP*) untuk memodelkan kejadian kegagalan termal:

$$P[N(t) = n] = \frac{\left(\int_{0}^{t} \lambda(\tau) \, d\tau\right)^n \cdot e^{-\int_{0}^{t} \lambda(\tau) \, d\tau}}{n!}$$

dengan laju intensitas $\lambda(\tau)$ yang dapat bervariasi menurut waktu (misalnya lebih tinggi pada jam operasional padat). *Expected number of disruptions* dalam horizon waktu $T$:

$$\mathbb{E}[N(T)] = \int_{0}^{T} \lambda(\tau) \, d\tau$$

### 2.5 Fungsi Kerugian Produk (Product Loss Function)

Akumulasi degradasi produk dinyatakan sebagai integral suhu-lebih (*temperature excess*):

$$L(t) = \int_{0}^{t} \max(0, T(\tau) - T_{\text{max}}) \cdot w(\tau) \, d\tau$$

dengan $T_{\text{max}}$ = batas suhu aman (8°C untuk vaksin冷藏) dan $w(\tau)$ = bobot sensitivitas produk. Produk dinyatakan失效 (*spoiled*) ketika $L(t) \geq L_{\text{critical}}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Suhu IoT (berdasarkan Putra et al., 2024)

Sistem yang dirancang oleh Putra, Defit, & Nurcahyo (2024) mengintegrasikan sensor DS18B20 (akurasi ±0,5°C pada rentang -10°C hingga +85°C, resolusi 0,0625°C) dengan mikrokontroler ESP32 dan platform *cloud monitoring* (Blynk/ThingsBoard). Arsitektur lima lapis (*five-layer architecture*):

| Lapis | Komponen | Fungsi |
|---|---|---|
| **L1 – Sensing** | Sensor DS18B20 (1-Wire protocol) | Akuisisi suhu setiap 5–10 detik |
| **L2 – Edge Processing** | ESP32 microcontroller | Agregasi data, threshold detection (2–8°C), local alerting via buzzer/LED |
| **L3 – Communication** | Wi-Fi/GSM module | Transmisi data ke cloud (MQTT protocol) |
| **L4 – Cloud Platform** | Blynk/ThingsBoard dashboard | Visualisasi real-time, historical logging, notifikasi via Telegram/email |
| **L5 – Decision Support** | Analytics engine | Prediksi deviasi, rekomendasi tindakan preventif |

### 3.2 Diagram Alir SOP Cold Chain Resilient

```
[START] 
   ↓
[Pre-Operation Check] — Verifikasi sensor DS18B20 aktif, level baterai, koneksi Wi-Fi
   ↓
[Inisialisasi] — Set threshold: T_min = 2°C, T_max = 8°C, sampling rate = 10 detik
   ↓
[Loop Monitoring Real-Time]
   ├── Baca T(t) dari sensor
   ├── Hitung ΔT = T(t) - T_setpoint
   ├── Kirim ke cloud (timestamp + T + ΔT)
   ├── Evaluasi kondisi:
   │     IF ΔT ≤ 0 → [NORMAL] catat log
   │     IF 0 < ΔT ≤ 1°C → [WARNING-1] notifikasi apoteker
   │     IF 1°C < ΔT ≤ 3°C → [WARNING-2] alarm + intervensi manual
   │     IF ΔT > 3°C → [CRITICAL] aktivasi protokol kedaruratan
   └── LOOP setiap 10 detik
   ↓
[Protokol Kedaruratan saat CRITICAL]:
   1. Aktivasi backup cooling (es gel / dry ice)
   2. Isolasi produk terdampak → karantina
   3. Hitung cumulative thermal excess L(t) → evaluasi kelayakan produk
   4. Notifikasi BPOM/Pemda dalam 1 jam
   5. Dokumentasi insiden untuk audit QMS
   ↓
[Post-Operation] — Generate laporan harian/bulanan untuk KPI resiliensi (RI, MTTR, N_disruption)
```

### 3.3 Standar Industri yang Diacu

- **WHO PQS (Performance, Quality and Safety)** — E006 (insulated containers), E001 (refrigerators)
- **ISO 23412:2020** — *Indirect, temperature-controlled refrigerated delivery services*
- **GDP (Good Distribution Practice)** — *Pedoman Cara Distribusi Obat yang Baik* (BPOM RI)
- **HACCP** — *Hazard Analysis and Critical Control Points* untuk pangan

### 3.4 Integrasi Model Resiliensi ke SOP

Berdasarkan Khurshid & Siddiqui (2024), setiap fasilitas cold chain harus menetapkan tiga parameter operasional:
1. **$T_{\text{recovery target}}$** — target waktu pemulihan (≤ 15 menit untuk vaksin kritis)
2. **$RI_{\text{minimum}}$** — ambang resiliensi minimum (≥ 0,85)
3. **$N_{\text{disruption,max}}$** — jumlah kejadian gangguan yang ditoleransi per bulan (≤ 2 kejadian)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Cold Chain Box Vaksin di UPTD Farmasi Kabupaten Siak

**Data Input (berdasarkan Putra et al., 2024 dan parameter farmasi standar):**
- Produk: Vaksin DPT-HB-Hib (sensitif terhadap beku maupun panas)
- Volume cold chain box: 40 liter, kapasitas 800 vial
- Suhu target: $T_{\text{nominal}} = 5°C$ (rentang aman 2–8°C)
- Energi aktivasi: $E_a = 75.000$ J/mol (vaksin protein tipikal)
- Faktor pre-eksponensial: $A = 1,2 \times 10^{15}$ /jam
- Laju kegagalan sensor/kom