# 2758 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak dan Sistem Pemantauan Suhu Real-Time Berbasis IoT pada Cold Chain Box Vaksin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merepresentasikan salah satu rantai pasok paling kritis dalam Teknik Industri karena mengkombinasikan约束an biofisik (sensitivitas termal produk), ketidakpastian lingkungan operasional, dan konsekuensi ekonomi-sosial yang bersifat katastrofik apabila terjadi kegagalan. Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) memposisikan resiliensi cold chain bukan sekadar kemampuan mengembalikan status quo pascagangguan, melainkan kapasitas sistem untuk mempertahankan atribut kualitas produk (quality attribute retention) sepanjang jendela waktu paparan termal. Studi tersebut menekankan bahwa perishable products—mencakup vaksin, produk biofarmasi, makanan laut, dan bahan biologis—memiliki kurva degradasi non-linear terhadap waktu dan suhu, sehingga pendekatan resiliensi klasik yang berbasis MTBF (Mean Time Between Failures) menjadi tidak memadai tanpa integrasi model kinetika degradasi.

Di sisi operasional, Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan permasalahan konkret pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi tiga defisiensi kritis: (i) cold chain box sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantauan suhu secara *real-time*; (ii) tidak ada mekanisme peringatan dini (*early warning*) ketika suhu melebihi ambang 2–8 °C yang ditetapkan WHO PQS (Performance, Quality and Safety) akibat kerusakan internal atau eksternal; dan (iii) pencatatan suhu masih dikerjakan secara *manual* setiap 2 (dua) jam pada log sheet oleh apoteker, yang rentan terhadap *human error*, keterlambatan, dan kehilangan jejak audit (*audit trail*). Kombinasi ketiga缺陷 ini menciptakan blind spot temporal yang persis menjadi titik lemah yang coba di-address oleh kerangka resiliensi Khurshid & Siddiqui (2024). Dengan kata lain, tanpa visibilitas sensorik kontinyu, sistem tidak memiliki kapasitas untuk melakukan *anticipation*, *absorption*, *adaptation*, maupun *recovery*—empat pilar resiliensi yang didefinisikan dalam literatur sistem infrastruktur kritis.

Urgensi ekonominya juga signifikan. Bank Dunia (2023) memperkirakan kerugian global akibat cold chain failure pada sektor farmasi mencapai USD 15–35 miliar per tahun, sementara untuk sektor makanan mudah rusak mencapai 12–14% dari total produksi pascapanen. Dari perspektif Teknik Industri, kondisi ini mengindikasikan *value leakage* pada simpul-simpul kritis rantai pasok yang seharusnya menjadi target optimasi utama melalui integrasi sensor IoT, analitik data, serta protokol SOP yang terotomatisasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024) mengajukan *Resilience Function* yang mengintegrasikan kapasitas pemulihan dengan kualitas produk residual. Indeks resiliensi didefinisikan sebagai:

$$R(t) = \frac{1}{t_1 - t_0} \int_{t_0}^{t_1} \frac{Q(\tau)}{Q_0} \, d\tau$$

di mana $Q(\tau)$ adalah *quality attribute function* pada waktu $\tau$ setelah gangguan (normalized terhadap $Q_0$ = kualitas awal), $t_0$ adalah waktu onset gangguan, dan $t_1$ adalah waktu pemulihan efektif. Nilai $R \in [0,1]$, dengan $R=1$ merepresentasikan resiliensi sempurna (zero degradation).

### 2.2 Kinetika Degradasi Arrhenius

Degradasi produk perishable mengikuti persamaan Arrhenius orde pertama:

$$\frac{dC}{dt} = -k(T) \cdot C(t), \quad k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $C(t)$ konsentrasi/kualitas residu, $A$ faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K) konstanta gas universal, dan $T$ suhu absolut (K). Solusi analitisnya:

$$C(t) = C_0 \cdot \exp\left[-A \cdot t \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)\right]$$

Untuk vaksin, parameter tipikal WHO PQS (misal DPT, Campak) berada pada $E_a \approx 75$–$95$ kJ/mol (Likar et al., 2018). Pada $T = 281{,}15$ K (8 °C, batas atas) versus $T = 275{,}15$ K (2 °C, batas bawah), rasio laju degradasi:

$$\frac{k(8°C)}{k(2°C)} = \exp\left[\frac{E_a}{R}\left(\frac{1}{275{,}15} - \frac{1}{281{,}15}\right)\right] \approx \exp\left[\frac{85000}{8{,}314} \cdot 7{,}76 \times 10^{-5}\right] \approx 2{,}19$$

Artinya, kenaikan suhu hanya 6 °C menggandakan laju degradasi—menjelaskan mengapa *real-time monitoring* bersifat non-negosiable.

### 2.3 Mean Kinetic Temperature (MKT)

Sesuai USP <1079>, MKT memodelkan efek termal non-linear terhadap produk:

$$MKT = \frac{\Delta H / R}{-\ln\left(\frac{\sum_{i=1}^{n} t_i \cdot \exp(-\Delta H / (R \cdot T_i))}{\sum_{i=1}^{n} t_i}\right)}$$

dengan $\Delta H$ entalpi aktivasi (umumnya 83,144 J/mol untuk studi vaksin), $T_i$ suhu absolut pada interval $i$, dan $t_i$ durasi interval tersebut.

### 2.4 Model Sensor DS18B20

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C sampai $+85$ °C, resolusi 9–12 bit (resolusi 12-bit = 0,0625 °C), dan protokol *1-Wire* yang memungkinkan *daisy-chaining* multiple sensor pada satu pin mikrokontroler. Akuisisi data mengikuti:

$$T_{measured} = T_{true} + \epsilon, \quad \epsilon \sim \mathcal{N}(0, \sigma_{sensor}^2)$$

dengan $\sigma_{sensor} = 0{,}25$ °C untuk DS18B20 pada level konfidensi 95%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Putra et al. (2024) merancang arsitektur IoT empat lapis yang secara langsung mengimplementasikan pilar resiliensi Khurshid & Siddiqui (2024):

**Lapisan 1 — Akuisisi (Sensor Layer):** Multiple DS18B20 ditempatkan secara terdistribusi di dalam cold chain box (titik inlet, outlet, tengah beban) untuk menangkap gradien spasial. Protokol *1-Wire* dengan parasitic power memungkinkan pemasangan tanpa baterai, meningkatkan MTBF sensor.

**Lapisan 2 — Edge Processing:** Mikrokontroler (Arduino/ESP32) membaca data setiap $\Delta t = 10$–$30$ detik, melakukan filter moving average window-5 untuk menekan noise:

$$\hat{T}_k = \frac{1}{5}\sum_{j=k-4}^{k} T_j$$

**Lapisan 3 — Transmisi & Notifikasi:** Data dikirim via Wi-Fi ke gateway/cloud menggunakan protokol MQTT (QoS 1) dengan payload JSON terstruktur. Saat $\hat{T}_k > 8$ °C atau $\hat{T}_k < 2$ °C, sistem secara otomatis mengirim notifikasi push (Telegram Bot API/SMS gateway) ke apoteker penanggung jawab—mekanisme *anticipation & early warning* yang menggantikan pencatatan manual 2-jam.

**Lapisan 4 — Audit & Analitik:** Database time-series (InfluxDB/ThingsBoard) menyimpan histori suhu untuk perhitungan MKT harian, audit WHO PQS, dan traceability per-batch vaksin.

```
[DS18B20 ×N] → [Edge MCU + Display LCD]
        │              │
        ▼              ▼
   [Filter MA-5]   [Buzzer/LED Alarm]
        │
        ▼
   [MQTT Publish] → [Cloud Broker] → [Database + Dashboard]
                                              │
                                              ▼
                                  [Notifikasi Apoteker]
```

**SOP Operasional yang Diusulkan:**
1. *Pre-trip verification* (15 menit sebelum loading): kalibrasi sensor terhadap reference thermometer bersertifikat; validasi alarm threshold.
2. *Continuous monitoring*: sampling 30 detik, logging 5 menit, alert latency < 60 detik sejak ekskursi suhu.
3. *Incident response*: protokol triase (Level 1: deviasi < 30 menit, Level 2: 30–120 menit, Level 3: > 120 menit) dengan keputusan retensi/recall berdasarkan MKT kumulatif.
4. *Post-trip reconciliation*: unduh log, hitung MKT, bandingkan dengan log sheet manual sebagai cross-check.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah cold chain box berisi 200 vial vaksin DPT-HB-Hib (batch value Rp 12 juta) mengalami *compressor failure* pada pukul 14:00, suhu naik gradual dari 4 °C menuju ambient 28 °C. Tim teknisi merespons dalam 75 menit. Sensor DS18B20 mencatat profil suhu setiap 5 menit:

| Waktu (menit) | 0 | 15 | 30 | 45 | 60 | 75 |
|---|---|---|---|---|---|---|
| Suhu (°C) | 4,0 | 5,8 | 8,5 | 11,2 | 14,6 | 4,0 (recovery) |

**Langkah 1 — Hitung MKT selama insiden:**

$$\sum t_i \cdot \exp(-\Delta H/(R \cdot T_i))$$

Konversi ke Kelvin: $T_1=277{,}15$, $T_2=278{,}95$, $T_3=281{,}65$, $T_4=284{,}35$, $T_5=287{,}75$ K. Dengan $\Delta H = 83144$ J/mol:

$$e^{-\Delta H/(R \cdot T_1)} = e^{-83144/(8{,}314 \cdot 277{,}15)} = e^{-36{,}07} = 1{,}97 \times 10^{-16}$$

Serupa untuk titik lain. Dengan $\sum t_i = 75$ menit, kita peroleh MKT $\approx 14{,}2$ °C (di luar ambang WHO 2–8 °C → kategori deviasi