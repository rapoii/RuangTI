# 1766 — Model Ketahanan (Resilience) Logistik Cold Chain untuk Produk Mudah Rusak: Integrasi Pemantauan Suhu Berbasis IoT dan Formulasi Kuantitatif Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan segar, dan bahan biologis bernilai tinggi. Kegagalan menjaga integritas termal pada rentang suhu 2°C–8°C untuk vaksin (sesuai WHO PQS E001) atau -25°C hingga -15°C untuk produk beku akan menghasilkan degradasi kualitas yang bersifat ireversibel, sehingga menimbulkan kerugian ekonomi, sosial, dan kesehatan masyarakat yang sangat signifikan. Khurshid dan Siddiqui (2024) dalam tulisannya *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti urgensi pengembangan model ketahanan yang tidak hanya bersifat preventif tetapi juga adaptif dan restoratif terhadap gangguan operasional seperti fluktuasi suhu, kegagalan refrigerasi, keterlambatan distribusi, dan *human error*.

Secara empiris, Organisasi Kesehatan Dunia (WHO) melaporkan bahwa lebih dari 50% vaksin terbuang secara global akibat pelanggaran cold chain, sementara studi Bank Dunia memperkirakan kerugian ekonomi akibat kerusakan rantai dingin produk pangan mencapai USD 35 miliar per tahun. Di Indonesia, permasalahan ini juga teridentifikasi secara tajam oleh Putra, Defit, dan Nurcahyo (2024) pada studi kasus di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka menemukan tiga permasalahan struktural utama: (1) tidak tersedianya alat pemantauan suhu *real-time* pada *cold chain box* sehingga apoteker tidak menerima peringatan dini ketika suhu mengalami *excursion*; (2) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam pada *log sheet*, yang rentan terhadap kelalaian manusia dan tidak efisien secara operasional; (3) tidak adanya dokumentasi digital yang dapat diaudit, menghambat *traceability* dan analisis akar masalah ketika terjadi kerusakan produk.

Integrasi kedua perspektif ini menunjukkan bahwa permasalahan cold chain bukan sekadar isu teknologi, melainkan merupakan masalah rekayasa sistem yang membutuhkan pendekatan ketahanan (*resilience engineering*). Pendekatan ini membedakan tiga kapasitas sistem, yaitu kemampuan menyerap gangguan (*absorptive capacity*), kemampuan beradaptasi (*adaptive capacity*), dan kemampuan memulihkan diri (*restorative capacity*). Dengan mengintegrasikan framework Ketahanan Khurshid–Siddiqui (2024) dengan solusi IoT berbasis sensor DS18B20 yang diusung Putra et al. (2024), pelaku industri dapat membangun sistem cold chain yang tidak hanya *reliable* tetapi juga *resilient* terhadap dinamika gangguan di lapangan. Konteks ini menjadikan modul 1766 relevan bagi insinyur industri, *supply chain manager*, dan perancang sistem kualitas di sektor farmasi, pangan, dan bioteknologi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Framework Ketahanan Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) memformalkan ketahanan sistem cold chain melalui fungsi kinerja dependen-waktu $Q(t)$, yang merepresentasikan tingkat integritas termal sistem pada waktu $t$. Ketika sistem mengalami gangguan pada waktu $t_d$, kinerja terdegradasi hingga level minimum $Q(t_d)$, kemudian dipulihkan hingga $Q(t_r)$ pada waktu pemulihan $t_r$.

$$Q(t) = \begin{cases} Q_0, & 0 \leq t < t_d \\ Q(t_d) \cdot e^{-\lambda(t - t_d)}, & t_d \leq t < t_r \\ Q_0 - \Delta Q_{\text{res}}, & t \geq t_r \end{cases}$$

di mana:
- $Q_0$ = kinerja baseline sistem (normalisasi = 1,0 untuk suhu dalam rentang spesifikasi)
- $\lambda$ = laju degradasi kualitas termal (per jam)
- $\Delta Q_{\text{res}}$ = *residual quality loss* pasca-pemulihan

Indeks Ketahanan Sistem (*System Resilience Index*, SRI) didefinisikan sebagai rasio antara integral kinerja sistem selama fase gangguan terhadap periode total evaluasi:

$$\text{SRI} = \frac{\int_{t_d}^{t_r} Q(t) \, dt + Q(t_r)(T - t_r)}{(Q_0)(T - t_d)}$$

dengan $T$ = total horizon evaluasi. Nilai SRI mendekati 1,0 menunjukkan ketahanan yang tinggi.

### 2.2 Model Degradasi Arrhenius untuk Produk Vaksin

Putra et al. (2024) menyoroti pentingnya memantau suhu karena degradasi produk biologis mengikuti kinetika Arrhenius. Laju degradasi $k(T)$ pada suhu absolut $T$ (dalam Kelvin) diformulasikan:

$$k(T) = A \cdot e^{-E_a / (R \cdot T)}$$

dengan:
- $A$ = faktor pre-eksponensial (tergantung jenis produk)
- $E_a$ = energi aktivasi (J/mol); untuk vaksin tipikal $E_a \approx 60.000 - 90.000$ J/mol
- $R$ = konstanta gas universal = 8,314 J/(mol·K)

Untuk menyederhanakan, digunakan konsep $Q_{10}$ yang menyatakan bahwa setiap kenaikan suhu 10°C mempercepat degradasi 2–3 kali lipat:

$$Q_{10} = \left(\frac{k_{T+10}}{k_T}\right) = 2{,}5$$

Konsekuensinya, *time-weighted average temperature excursion* memberikan dosis degradasi kumulatif:

$$D_{\text{deg}} = \sum_{i=1}^{n} \Delta t_i \cdot Q_{10}^{(T_i - T_{\text{ref}})/10}$$

### 2.3 Model Probabilitas Kegagalan dan *Mean Time To Recovery* (MTTR)

Waktu antar-kegagalan mengikuti distribusi Weibull dengan parameter bentuk $\beta$ dan skala $\eta$:

$$f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta - 1} e^{-(t/\eta)^\beta}, \quad t \geq 0$$

*Mean Time To Failure* (MTTF) dihitung sebagai:

$$\text{MTTF} = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma. Untuk sistem refrigerasi cold chain tipikal, parameter empiris berdasarkan literatur adalah $\beta = 2{,}5$ dan $\eta = 8.000$ jam, menghasilkan:

$$\text{MTTF} = 8000 \cdot \Gamma(1{,}4) = 8000 \cdot 0{,}887 = 7.096 \text{ jam}$$

### 2.4 Indeks Kerentanan dan Biaya Ketahanan

Kerentanan sistem (*vulnerability index*, $V$) dinyatakan sebagai kombinasi probabilitas dan dampak:

$$V = P_f \cdot C_f$$

dengan $P_f$ = probabilitas kegagalan per siklus distribusi dan $C_f$ = biaya kegagalan (kerugian produk, penalti, dan reputasi). Ketahanan sistem dimaksimalkankan ketika investasi dalam teknologi mitigasi $I_{\text{mit}}$ menghasilkan reduksi $P_f$ yang lebih besar dari biaya investasinya, dengan *payback* melalui reduksi expected loss:

$$\text{NPV}_{\text{res}} = \sum_{y=1}^{Y} \frac{(C_f \cdot \Delta P_f(y) - I_{\text{mit}}(y))}{(1+r)^y} > 0$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain Berbasis IoT (Putra et al., 2024)

Putra et al. (2024) mengusulkan arsitektur tiga lapis (*three-tier architecture*) yang diintegrasikan dengan framework ketahanan Khurshid–Siddiqui (2024):

**Lapisan 1 — Akuisisi Data (Perception Layer):**
Sensor DS18B20 (akurasi ±0,5°C pada rentang -10°C hingga +85°C, resolusi 0,0625°C) ditempatkan di dalam *cold chain box*. Sensor ini menggunakan protokol komunikasi 1-Wire yang memungkinkan pemasangan multi-sensor paralel dengan satu pin mikrokontroler. Konfigurasi tipikal melibatkan 3–4 sensor pada lokasi berbeda (pintu, tengah, dasar, sudut) untuk mendeteksi gradien termal internal.

**Lapisan 2 — Transmisi & Pemrosesan (Network Layer):**
Mikrokontroler (Arduino/ESP32) membaca data suhu setiap interval $\Delta t_{\text{sampling}}$ (umumnya 60 detik) dan mentransmisikannya melalui modul WiFi ke *cloud server* menggunakan protokol MQTT (*Message Queuing Telemetry Transport*) yang hemat bandwidth.

**Lapisan 3 — Aplikasi & Visualisasi (Application Layer):**
Dashboard berbasis web/mobile menampilkan data secara *real-time*, menyimpan *historical log* otomatis (menggantikan pencatatan manual setiap 2 jam), dan mengirim notifikasi peringatan (*alert*) ketika suhu keluar dari *specification window*.

### 3.2 Diagram Alir SOP Operasional Cold Chain Resilient

```
┌──────────────────────────────────────────────────────────┐
│  START: Penerimaan Produk di Cold Chain Box              │
└────────────────────┬─────────────────────────────────────┘
                     ▼
        ┌────────────────────────────┐
        │ Inisialisasi Sensor DS18B20│
        │ (Kalibrasi & Validasi)     │
        └────────────┬───────────────┘
                     ▼
        ┌────────────────────────────┐
        │ Sampling Suhu Tiap 60 detik│◄────┐
        │ (Multi-point sensing)      │     │
        └────────────┬───────────────┘     │
                     ▼                     │
        ┌────────────────────────────┐     │
        │ Evaluasi: 2°C ≤ T ≤ 8°C?   │     │
        └────┬───────────────┬───────┘     │
             │ YA            │ TIDAK       │
             ▼               ▼             │
    ┌─────────────────┐  ┌──────────────────────────┐
    │ Logging ke      │  │ TRIGGER ALERT & COUNTER  │
    │ Cloud Database  │  │ $D_{deg} += \Delta t \cdot Q_{10}^x$ │
    └────────┬────────┘  └──────────┬───────────────┘
             │                     │
             │              ┌──────▼──────────┐
             │              │ Root Cause      │
             │              │ Analysis &      │
             │              │ Corrective      │
             │              │ Action (RCA-CA) │
             │              └──────┬──────────┘
             │                     │
             ▼                     ▼
        ┌────────────────────────────────┐
        │ Hitung SRI per siklus distribusi│
        │ SRI = ∫Q(t)dt / (Q₀·T)        │
        └────────────────┬───────────────┘
                         ▼
        ┌────────────────────────────────┐
        │ END: Decision (Release/Quarantine/Discard)│
        └────────────────────────────────┘
```

### 3.3 SOP Pemulihan Sistem (Recovery Protocol)

Ketika *alert* suhu terpicu, protokol pemulihan mengikuti sekuens 4R (*Recognize–Respond–Restore–Review*) sesuai framework Khurshid–Siddiqui (2024):

1. **Recognize** (0–5 menit): Verifikasi anomali melalui cek sensor kedua, identifikasi jenis gangguan.
2. **Respond** (5–30 menit): Aktivasi prosedur darurat (misalnya transfer ke *backup cold storage*, es pack tambahan, atau unit refrigerasi portabel).
3. **Restore** (30–180 menit): Pemulihan suhu ke rentang operasional, monitoring ketat setiap 15 menit.
4. **Review** (pasca-insiden): *Post-mortem analysis*, update parameter $\lambda$ dan $\beta$ dalam model.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus: Distribusi Vaksin Campak di Kabupaten Siak

Mengacu pada studi kasus Putra et al. (2024) di UPTD Farmasi Dinkes Kabupaten Siak, kita asumsikan skenario distribusi sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Volume cold chain box | 50 | liter |
| Jumlah dosis vaksin | 800 | dosis |
| Suhu referensi $T_{\text{ref}}$ | 5 | °C |
| Suhu aktual (gangguan) | 11 | °C |
| Durasi gangguan $\Delta t$ | 4 | jam |
| Biaya per dosis | Rp 75.000 | IDR |
| Biaya investasi IoT | Rp 4.500.000 | IDR |
| $Q_{10}$ vaksin | 2,5 | – |
| Total dosis distribusi tahunan | 12.000 | dosis/tahun |

### 4.2 Perhitungan D