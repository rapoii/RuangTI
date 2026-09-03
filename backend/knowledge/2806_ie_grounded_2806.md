# 2806 — Pemodelan Resiliensi Cold Chain Logistics untuk Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam jaringan distribusi produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan segar, dan bahan kimia sensitif termal. Kerusakan suhu sekecil apa pun di luar rentang operasional yang ditetapkan (umumnya 2°C–8°C untuk vaksin sesuai WHO PQS E001) dapat memicu degradasi kualitas, kerugian finansial masif, dan risiko keselamatan publik. Khurshid & Siddiqui (2024) dalam papernya yang berjudul *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka resiliensi holistik yang tidak hanya memitigasi disrupsi suhu tetapi juga mengukur kapasitas sistem untuk *bounce-forward* setelah kejadian anomali termal.

Urgensi industri ini diperkuat oleh data empiris dari Putra, Defit, & Nurcahyo (2024) di Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan permasalahan pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak: cold chain box vaksin belum配备 alat pemantauan suhu *realtime*, pencatatan suhu masih manual setiap 2 jam pada *log sheet*, dan tidak ada sistem peringatan dini (*early warning*) ketika suhu *cold chain box* naik akibat kerusakan internal (kompresor) maupun eksternal (paparan lingkungan, kesalahan operator). Kedua keterbatasan ini menunjukkan *gap* antara praktik konvensional dan kebutuhan resiliensi modern.

Secara ekonomi, WHO memperkirakan bahwa sekitar 25–50% vaksin global terbuang sia-sia akibat *cold chain failure*. Untuk produk pangan, FAO melaporkan kerugian pascapanen hingga USD 400 miliar per tahun di negara berkembang, dimana 25% di antaranya disebabkan oleh pelanggaran suhu. Konteks ini menegaskan bahwa rekayasa cold chain bukan sekadar persoalan logistik, melainkan masalah multidisiplin yang menggabungkan *industrial systems engineering*, *reliability engineering*, *sensor IoT*, dan *decision science*. Dari perspektif Teknik Industri, isu sentral adalah bagaimana merancang sistem yang mampu mempertahankan *service level* (SLA) 99,5% dalam menghadapi gangguan stokastik seperti keterlambatan distribusi, kegagalan refrigerasi, dan *human error*. Dokumen modul ini akan membangun pemahaman integratif antara model resiliensi teoritis (Khurshid & Siddiqui, 2024) dan implementasi instrumentasi cerdas (Putra et al., 2024) sebagai pilar transformasi cold chain 4.0.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024) mendefinisikan **Resiliensi Sistem Cold Chain (R_cc)** sebagai kemampuan sistem untuk menyerap, memulihkan, dan beradaptasi terhadap disrupsi suhu, yang diformulasikan sebagai:

$$R_{cc} = \int_{t_0}^{t_r} \left[1 - \frac{|P(t) - P_{nom}|}{P_{nom}}\right] dt + \int_{t_r}^{t_{recovery}} \frac{P(t)}{P_{nom}} dt$$

dimana:
- $P(t)$ adalah *performance function* sistem pada waktu $t$ (misalnya integritas termal produk)
- $P_{nom}$ adalah *nominal performance* pada kondisi operasi normal
- $t_0$ adalah waktu onset disrupsi
- $t_r$ adalah waktu dimulainya pemulihan (*recovery initiation*)
- $t_{recovery}$ adalah waktu pencapaian kembali kinerja nominal

Indeks resiliensi ternormalisasi didefinisikan sebagai:

$$\rho = \frac{R_{cc}}{T_{cycle} \cdot P_{nom}}, \quad 0 \leq \rho \leq 1$$

dimana $T_{cycle}$ adalah total durasi siklus distribusi.

### 2.2 Model Degradasi Termal Produk (Arrhenius-Kinetic)

Tingkat degradasi produk farmasi dan pangan terhadap pelanggaran suhu mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

dimana:
- $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin)
- $A$ adalah *pre-exponential factor*
- $E_a$ adalah energi aktivasi (J/mol)
- $R$ adalah konstanta gas universal = 8,314 J/(mol·K)

**Contoh parameter untuk vaksin:** $E_a = 84 \text{ kJ/mol}$, $A = 1{,}2 \times 10^{12} \text{ jam}^{-1}$. Faktor akselerasi degradasi saat suhu naik dari $T_1 = 5°C = 278{,}15 \text{ K}$ ke $T_2 = 15°C = 288{,}15 \text{ K}$:

$$\frac{k(T_2)}{k(T_1)} = \exp\left[\frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)\right]$$

### 2.3 Model Pemantauan IoT dengan Sensor DS18B20 (Putra et al., 2024)

Sensor DS18B20 memiliki karakteristik intrinsik berikut berdasarkan datasheet Maxim Integrated:

$$\sigma_{total} = \sqrt{\sigma_{sensor}^2 + \sigma_{kalibrasi}^2 + \sigma_{noise}^2}$$

Untuk DS18B20: $\sigma_{sensor} = \pm 0{,}5°C$, $\sigma_{kalibrasi} = \pm 0{,}1°C$, $\sigma_{noise} \approx 0{,}05°C$ sehingga $\sigma_{total} \approx 0{,}512°C$.

Resolusi konversi ADC 12-bit pada rentang $-55°C$ sampai $+125°C$:

$$\Delta T_{res} = \frac{125 - (-55)}{2^{12}} = \frac{180}{4096} = 0{,}0439°C$$

Waktu konversi maksimum: $t_{conv} = 750 \text{ ms}$ (resolusi 12-bit).

### 2.4 Fungsi Deteksi Alarm dan *Mean Time to Alert*

Putra et al. (2024) mengimplementasikan logika alarm berbasis ambang batas (*threshold-based*). *Alert triggering function*:

$$A(t) = \begin{cases} 1, & \text{jika } T(t) \notin [T_{min}, T_{max}] \text{ selama } \tau \geq \tau_{persist} \\ 0, & \text{otherwise} \end{cases}$$

dimana $\tau_{persist}$ adalah durasi persistensi anomali (umumnya 30–60 detik) untuk menghindari *false alarm*.

*Mean Time to Alert* (MTTA) dengan interval sampling $\Delta t_{s}$:

$$MTTA = \Delta t_s \cdot \frac{\tau_{persist}}{\Delta t_s} + t_{proc} \approx \tau_{persist} + t_{proc}$$

dimana $t_{proc}$ adalah latensi pemrosesan mikrokontroler (ESP8266/Arduino ≈ 50–200 ms).

### 2.5 Model Keandalan Gabungan (*System Reliability*)

Untuk sistem cold chain dengan komponen serial (sensor, refrigerasi, telemetri, daya):

$$R_{system}(t) = \prod_{i=1}^{n} R_i(t) = e^{-\sum_{i=1}^{n} \lambda_i \cdot t}$$

dimana $\lambda_i$ adalah *failure rate* komponen $i$. Dengan asumsi data tipikal: $\lambda_{sensor} = 5 \times 10^{-6}$/jam, $\lambda_{refrigerator} = 2 \times 10^{-5}$/jam, $\lambda_{telemetry} = 1 \times 10^{-5}$/jam, $\lambda_{power} = 8 \times 10^{-6}$/jam:

$$R_{system}(t) = e^{-(4{,}3 \times 10^{-5}) \cdot t}$$

Untuk $t = 8760$ jam (1 tahun): $R_{system} = e^{-0{,}3767} = 0{,}686$ atau 68,6%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain IoT

Berdasarkan arsitektur yang dikemukakan Putra et al. (2024) untuk UPTD Farmasi Siak, sistem berlapis disusun sebagai berikut:

```
[Sensor DS18B20] → [Mikrokontroler ESP8266/Arduino]
         ↓                              ↓
    [Akuisisi Data]            [Modul Wi-Fi/GSM]
         ↓                              ↓
  [Edge Processing]  →  [Cloud Database / Blynk Server]
         ↓                              ↓
   [Threshold Check]            [Dashboard Monitoring]
         ↓                              ↓
   [Local Alarm]            [Notification ke Apoteker]
```

### 3.2 SOP Pemantauan Cold Chain Tervalidasi

| No | Tahap | Aktivitas | Standar Acuan |
|----|-------|-----------|---------------|
| 1 | Pra-Operasional | Kalibrasi sensor DS18B20 terhadap *reference thermometer* bersertifikat | ISO 17025, WHO PQS E006 |
| 2 | Inisialisasi | Set parameter $T_{min}, T_{max}, \tau_{persist}$ sesuai jenis produk | WHO PQS E001 (vaksin: 2–8°C) |
| 3 | Operasional | Sampling otomatis setiap $\Delta t_s = 30$ s | Good Distribution Practice (GDP) |
| 4 | Pemantauan | Dashboard *real-time* dan pencatatan otomatis | 21 CFR Part 11 |
| 5 | Anomali | Trigger alarm, notifikasi SMS/WhatsApp, log event | ALCOA+ Principles |
| 6 | Tanggap Darurat | Aktivasi protokol *contingency* (genset, es gel, transfer) | WHO Guideline EVM |
| 7 | Pasca-Insiden | *Root cause analysis*, CAPA, audit *traceability* | ICH Q9 |

### 3.3 Diagram Alir Logika Alarm (Mirroring Putra et al., 2024)

```
START
   ↓
[Baca Suhu Sensor DS18B20]
   ↓
[Filter Moving Average 5 data] → T̄(t)
   ↓
[T̄ < T_min ATAU T̄ > T_max?]
   ↓ Ya                    ↓ Tidak
[Increment counter anomali] → [Reset counter; Loop]
   ↓
[counter ≥ τ_persist / Δt_s?]
   ↓ Ya
[AKTIFKAN ALARM] → [Kirim Notifikasi]
   ↓
[Catat Event ke Database]
   ↓
[Loop Kembali]
```

### 3.4 Integrasi dengan Model Resiliensi Khurshid & Siddiqui (2024)

Aliran data IoT memungkinkan komputasi *real-time* indeks resiliensi $\rho(t)$ melalui *streaming analytics*, sehingga operator tidak hanya bereaksi terhadap anomali tetapi juga memprediksi tren degradasi menggunakan *exponential smoothing*:

$$\hat{T}_{t+1} = \alpha T_t + (1-\alpha)\hat{T}_t, \quad \alpha = 0{,}3$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Kasus: Distribusi Vaksin COVID-19 dari UPTD Farmasi Siak

**Skenario:** Sebuah *cold chain box* berkapasitas 50 liter membawa 500 vial vaksin (volume 2 mL/vial). Suhu ambient rata-rata di Riau: $T_{amb} = 30°C$. Cold chain box menggunakan ice-pack PCM (*phase change material*) dengan kapasitas kalor laten.

**Parameter operasi:**
- $T_{nom} = 5°C$ (target suhu vial)
- $T_{min} = 2°C, T_{max} = 8°C$
- $E_a = 84 \text{ kJ/mol}$ (vaksin mRNA tipikal)
- $A = 1{,}2 \times 10^{12} \text{ jam}^{-1}$
- $R = 8{,}314 \text{ J/(mol·K)}$

### 4.2 Perhitungan Faktor Akselerasi Degradasi

Pada suhu vial $T_1 = 5°C = 278{,}15$ K (kondisi normal):

$$k_1 = 1{,}2 \times 10^{12} \cdot e^{-\frac{84000}{8{,}314 \times 278{,}15}} = 1{,}2 \times 10^{12} \cdot e^{-36{,}32} = 1{,}2 \times 10^{12} \times 1{,}61 \times 10^{-16} = 1{,}93 \times 10^{-4} \text{ jam}^{-1}$$

Pada suhu vial $T_2 = 12°C = 285{,}15$ K (g