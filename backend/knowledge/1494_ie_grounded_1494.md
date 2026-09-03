# 1494 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products): Integrasi Pemantauan IoT dan Manajemen Risiko Rantai Pasok

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik *cold chain* merujuk pada rantai pasok yang mempertahankan suhu terkontrol secara end-to-end untuk produk mudah rusak (perishable) seperti vaksin, produk biofarmasi, makanan beku, dan bahan kimia reaktif. Khurshid dan Siddiqui (2024) dalam kerangka *Resilience Model* mereka menekankan bahwa cold chain bukan sekadar persoalan termodinamika pendinginan, melainkan sebuah *socio-technical system* yang rentan terhadap empat dimensi gangguan utama: (i) kegagalan peralatan pendingin (equipment failure), (ii) keterlambatan distribusi (logistics disruption), (iii) kesalahan prosedur operasional (human-procedural error), dan (iv) ancaman eksternal seperti bencana alam dan pandemi [DOI: 10.2139/ssrn.4959599]. Ketidakstabilan pada salah satu mata rantai cold chain dapat menimbulkan kerugian multidimensi: pada industri farmasi, paparan suhu di luar rentang 2°C–8°C untuk vaksin dapat memicu kehilangan potensi antigen hingga 70% (WHO PQS E006), sementara pada industri perishable food, deviasi suhu 1°C di atas ambang batas dapat mempersingkat *shelf life* sebesar 10–15%.

Putra, Defit, dan Nurcahyo (2024) melaporkan kasus konkret di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, yang menemukan bahwa *cold chain box* konvensional tidak dilengkapi sistem peringatan dini berbasis *real-time monitoring*, sehingga apoteker hanya melakukan pencatatan suhu secara manual setiap 2 jam sekali pada *log sheet* [DOI: 10.35134/komtekinfo.v12i1.589]. Kondisi ini menciptakan dua celah risiko utama: pertama, *latency deteksi* antara kejadian anomali suhu dengan intervensi dapat mencapai 119 menit, dan kedua, *single point of failure* pada sensor analog/manual tanpa mekanisme redundansi. Dalam konteks ekonomi makro, WHO memperkirakan bahwa sekitar 25–50% vaksin global terbuang karena kegagalan cold chain, setara dengan kerugian finansial USD 8–14 miliar per tahun. Tekanan tambahan datang dari meningkatnya kompleksitas rantai pasok pasca-COVID-19, di mana model *just-in-time* dan *lean inventory* memperluas paparan sistem terhadap disrupsi.

Urgensi rekayasa sistem industri untuk modul ini, oleh karena itu, terletak pada kemampuan mengkuantifikasi **resiliensi cold chain** melalui parameter yang terukur, memodelkan *recovery curve*, dan mengintegrasikan teknologi Internet of Things (IoT) sebagai lapisan deteksi anomali dan *decision support system* yang mengurangi ketergantungan pada pencatatan manual. Khurshid & Siddiqui (2024) berargumen bahwa tanpa model resiliensi formal, perusahaan hanya dapat mengandalkan *reactive control*而非*proactive mitigation*, yang secara statistik terbukti menaikkan *Mean Time To Recovery (MTTR)* sistem secara signifikan.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi cold chain yang digunakan sebagai basis modul ini mengikuti formalisasi **Bruneau Reinforced Resilience Framework** yang diadaptasi oleh Khurshid & Siddiqui (2024). Resiliensi sistem $R$ didefinisikan sebagai kemampuan sistem untuk menyerap gangguan, mempertahankan fungsi kritis, dan pulih dalam waktu tertentu:

$$R(t) = \int_{t_0}^{t_1} [100\% - Q(t)] \, dt$$

di mana $Q(t)$ adalah *quality degradation function* yang merepresentasikan persentase produk yang kehilangan mutu akibat paparan suhu ekstrem, $t_0$ adalah waktu mulai gangguan, dan $t_1$ adalah waktu pemulihan penuh. Semakin kecil luas area di bawah kurva $Q(t)$, semakin tinggi resiliensi sistem.

**Persamaan kualitas termal produk** mengikuti model kinetika degradasi Arrhenius untuk produk biologis:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

dengan parameter: $k(T)$ = laju degradasi pada suhu absolut $T$ (Kelvin), $A$ = faktor pre-eksponensial, $E_a$ = energi aktivasi (J/mol), dan $R$ = konstanta gas universal (8,314 J/mol·K). Akumulasi degradasi mengikuti:

$$\ln\left(\frac{C_0}{C_t}\right) = \int_0^t k(T(\tau)) \, d\tau$$

Untuk vaksin dengan $E_a \approx 83{,}680$ J/mol (berdasarkan studi WHO PQS), setiap kenaikan suhu 1°C di atas ambang batas (8°C) melipatgandakan $k(T)$ sekitar 1,1–1,3 kali, tergantung formulasi.

**Indeks Stabilitas Cold Chain (ISCC)** yang diusulkan dalam modul ini menggabungkan tiga sub-indikator:

$$ISCC = w_1 \cdot \frac{T_{avg}}{T_{opt}} + w_2 \cdot \frac{\sigma_T}{\mu_T} + w_3 \cdot \frac{t_{dev}}{t_{total}}$$

dengan $T_{avg}$ = suhu rata-rata aktual, $T_{opt}$ = suhu optimum, $\sigma_T / \mu_T$ = koefisien variasi suhu (menurut Putra et al., 2024, sensor DS18B20 menghasilkan resolusi 0,0625°C dengan akurasi ±0,5°C dalam rentang -10°C hingga +85°C), $t_{dev}$ = total waktu deviasi, dan $t_{total}$ = total waktu observasi. Bobot $w_1, w_2, w_3$ ditentukan menggunakan *Analytic Hierarchy Process* (AHP) dengan prioritas berturut-turut 0,5; 0,3; 0,2.

**Model Probabilitas Kegagalan (Weibull)** untuk komponen cold chain:

$$F(t) = 1 - e^{-(\lambda t)^\beta}$$

di mana $\lambda$ = *scale parameter*, $\beta$ = *shape parameter* (untuk chiller $\beta > 1$ menunjukkan *wear-out failure*).

**Mean Time Between Failures (MTBF)** sistem terintegrasi:

$$MTBF_{system} = \frac{1}{\sum_{i=1}^{n} \frac{1}{MTBF_i}}$$

yang menunjukkan bahwa resiliensi sistem tidak lebih baik daripada komponen paling lemah (*weakest-link principle*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi pada cold chain farmasi mengikuti SOP lima fase yang disintesis dari Khurshid & Siddiqui (2024) dan Putra et al. (2024):

**Fase 1 – Pemetaan Aliran Produk (Value Stream Mapping).** Identifikasi seluruh *touchpoint* suhu mulai dari *manufacturer* hingga *end-user*, termasuk titik transisi (bandara, pelabuhan, rumah sakit). Setiap titik diberi atribut suhu, waktu tinggal, dan rencana kontingensi.

**Fase 2 – Instrumentasi IoT.** Berdasarkan Putra, Defit, & Nurcahyo (2024), arsitektur sistem menggunakan mikrokontroler Arduino Uno/ESP32 sebagai *gateway*, sensor DS18B20 (akuisisi suhu digital dengan protokol 1-Wire), modul RTC DS3231 untuk *timestamping*, dan LCD 20×4 untuk display lokal. Algoritma akuisisi mengikuti pseudocode berikut:

```
For setiap interval Δt = 30 detik:
   Baca T_sensor = DS18B20.getTemperature()
   Jika T_sensor > T_max OR T_sensor < T_min:
      Trigger alarm (buzzer + LED + SMS via SIM800L)
      Kirim data ke cloud server (Firebase/MQTT)
   Else:
      Logging ke SD card + cloud sync
   Hitung σ_T rolling window 24 jam
   Update ISCC real-time
```

**Fase 3 – Penentuan Threshold Kritis.** Berdasarkan standar WHO PQS E006/IN05.VP.1, rentang suhu operasional untuk vaksin sensitif adalah 2°C–8°C. Tetapkan *first alarm* pada deviasi >0,5°C selama >15 menit, dan *critical alarm* pada deviasi >2°C selama >5 menit.

**Fase 4 – Perencanaan Pemulihan (Recovery Plan).** Siapkan *backup cold storage* dalam radius 50 km, *emergency response team* on-call 24/7, dan *vaccine vial monitor (VVM)* sebagai validasi independen. Khurshid & Siddiqui (2024) menekankan bahwa *recovery time objective* (RTO) harus ≤4 jam untuk menjaga efikasi produk.

**Fase 5 – Continuous Improvement.** Lakukan *Failure Mode and Effects Analysis* (FMEA) setiap 6 bulan, dengan menghitung *Risk Priority Number* (RPN):

$$RPN = S \times O \times D$$

dengan $S$ = *severity*, $O$ = *occurrence*, $D$ = *detectability* (skala 1–10).

**Diagram Alir Logika Sistem:**

```
[Sensor DS18B20] → [Filter Moving Average] → [Threshold Check]
                                                   ↓
                              ┌────────────────────┴────────────────────┐
                              ↓                                         ↓
                       [Normal Operation]                      [Anomaly Detected]
                              ↓                                         ↓
                     [Logging + Display]                [Multi-channel Alert System]
                                                                     ↓
                                                       [Decision Tree Response]
                                                                     ↓
                                                  ┌──── [Continue Monitoring]
                                                  ├──── [Switch to Backup Unit]
                                                  ├──── [Dispatch Vaccine Recovery]
                                                  └──── [Initiate Quarantine Protocol]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: UPTD Farmasi Kabupaten Siak — Monitoring 100 vial vaksin COVID-19 (CoronaVac) selama 30 hari.**

**Input Parameter:**
- Kapasitas cold chain box: 50 L
- Suhu lingkungan rata-rata: 30°C
- Target suhu internal: 5°C ± 3°C
- Energi aktivasi CoronaVac: $E_a = 83.680$ J/mol (estimasi konservatif)
- MTBF chiller: 8.000 jam; MTBF sensor DS18B20: 50.000 jam; MTBF catu daya: 20.000 jam

**Langkah 1: Hitung MTBF Sistem Gabungan.**
$$\frac{1}{MTBF_{sys}} = \frac{1}{8000} + \frac{1}{50000} + \frac{1}{20000}$$
$$\frac{1}{MTBF_{sys}} = 0{,}000125 + 0{,}000020 + 0{,}000050 = 0{,}000195$$
$$MTBF_{sys} = 5.128 \text{ jam} \approx 213{,}7 \text{ hari}$$

**Langkah 2: Hitung Laju Degradasi pada Suhu Optimum (5°C = 278,15 K).**
$$k(278{,}15) = A \cdot e^{-\frac{83680}{8{,}314 \times 278{,}15}}$$
Dengan asumsi $A = 10^{12}$ jam$^{-1}$ (tipikal protein biologis):
$$k(278{,}15) = 10^{12} \cdot e^{-36{,}17} = 10^{12} \cdot 1{,}82 \times 10^{-16} \approx 1{,}82 \times 10^{-4} \text{ jam}^{-1}$$

**Langkah 3: Simulasi Kegagalan Chiller selama 4 Jam (suhu naik ke 12°C = 285,15 K).**
$$k(285{,}15) = 10^{12} \cdot e^{-\frac{83680}{8{,}314 \times 285{,}15}} = 10^{12} \cdot e^{-35{,}30} \approx 3{,}96 \times 10^{-4} \text{ jam}^{-1}$$
Degradasi terakumulasi selama 4 jam:
$$\ln(C_0/C_t) = 3{,}96 \times 10^{-4} \times 4 = 1{,}584 \times 10^{-3}$$
$$C_t/C_0 = e^{-0{,}001584} = 0{,}99842$$

Artinya, potensi antigen berkurang ~0,158% per kejadian. Jika dalam sebulan terjadi 3 kejadian serupa, total kehilangan potensi = 0,475%. Di bawah ambang batas 5% yang ditetapkan WHO, vial masih layak, tetapi memerlukan pencatatan insiden.

**Langkah 4: Hitung ISCC.**
Misal dalam 30 hari: $T_{avg} = 5{,}8°C$, $\sigma_T = 0{,}7°C$, $\mu_T = 5{,}8°C$, $t_{dev} = 18$ jam (akumulasi), $t_{total} = 720$ jam.
$$ISCC = 0{,}5 \times \frac{5{,}8}{5{,}0} + 0{,}3 \times \frac{0{,}7}{5{,}8} + 0{,}2 \times \frac{18}{720}$$
$$ISCC = 0{,}5 \times 1{,}16 + 0{,}3 \times 0{,}121 + 0{,}2 \times 0{,}025 = 0{,}580 + 0{,}036 + 0{,}005 = 0{,}621$$

**Langkah 5: Analisis Investasi vs Kerugian.**
- Investasi IoT (sensor, gateway, cloud): Rp 4.500.000/unit
- Biaya 100 vial CoronaVac: Rp 12.000.000 (Rp 120.000