# 2262 — Model Resiliensi Rantai Dingin untuk Produk Mudah Rusak: Integrasi Pemantauan Suhu Real-Time IoT dan Pemodelan Kuantitatif Ketahanan Sistem Logistik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rekayasa logistik yang menjamin integritas termal produk mudah rusak sepanjang hulu ke hilir — mulai dari produksi, penyimpanan, distribusi, hingga titik konsumsi akhir. Khurshid dan Siddiqui (2024) dalam artikelnya yang terbit di jurnal *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) membangun kerangka resiliensi (*resilience modeling*) untuk menjawab kerentanan struktural rantai dingin produk *perishable* terhadap gangguan operasional. Pendekatan ini muncul karena fakta industri bahwa kehilangan produk akibat *cold chain failure* secara global mencapai US$ 35 miliar per tahun (estimasi yang dirujuk dalam literatur terkait), dengan sektor farmasi, makanan laut, hortikultura, dan bioteknologi sebagai kontributor kerugian terbesar.

Dalam konteks nasional Indonesia, Putra, Defit, dan Nurcahyo (2024) pada DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) mendokumentasikan permasalahan konkret pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka menemukan tiga masalah struktural yang bersifat *systemic*: (1) cold chain box sebagai media penyimpanan tidak dilengkapi sistem pemantauan suhu *real-time*; (2) tidak ada mekanisme peringatan otomatis ketika suhu menyimpang dari ambang batas (umumnya 2°C–8°C untuk vaksin) akibat kerusakan internal maupun eksternal; (3) pencatatan suhu masih dilakukan secara manual setiap dua jam melalui *log sheet* oleh apoteker — yang selain tidak efisien juga rentan terhadap human error dan tidak dapat mendeteksi anomali dalam interval dua jam tersebut. Temuan ini menegakkan urgensi integrasi antara *resilience framework* ala Khurshid–Siddiqui dengan implementasi IoT ala Putra et al., karena keduanya beroperasi pada titik kelemahan yang sama: kapasitas deteksi dini dan reaktif terhadap deviasi termal.

Perspektif teknik industri memandang rantai dingin sebagai *socio-technical system* yang memiliki tiga lapis kerentanan: (a) kerentanan fisik (kegagalan kompresor, kebocoran insulasi, keterlambatan transportasi); (b) kerentanan informasi (keterlambatan deteksi suhu, fragmentasi data antar-aktor); dan (c) kerentanan organisasi (kurangnya SOP respons darurat, absennya *decision support system*). Model resiliensi berupaya mengkuantifikasi kemampuan sistem untuk *absorbing*, *adapting*, dan *recovering* dari gangguan tanpa mengorbankan kualitas produk akhir. Inilah nexus yang akan dibahas secara mendalam dalam modul ini, dengan formulasi matematis, SOP, dan studi kasus kuantitatif yang dirancang untuk aplikasi langsung di fasilitas rantai dingin Indonesia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain

Khurshid dan Siddiqui (2024) mendefinisikan *Resilience Index* $R$ sebagai fungsi tiga parameter utama, yaitu *robustness* $\rho$, *redundancy* $\eta$, dan *resourcefulness* $\zeta$:

$$R = w_1 \cdot \rho + w_2 \cdot \eta + w_3 \cdot \zeta \quad \text{dengan} \quad \sum_{i=1}^{3} w_i = 1$$

di mana $w_i$ merepresentasikan bobot prioritas yang ditentukan melalui *Analytic Hierarchy Process* (AHP) oleh *stakeholder*. *Robustness* $\rho \in [0,1]$ mengukur kapasitas sistem mempertahankan kinerja saat gangguan; *redundancy* $\eta \in [0,1]$ merepresentasikan ketersediaan kapasitas cadangan; dan *resourcefulness* $\zeta \in [0,1]$ merefleksikan ketersediaan sumber daya respons (tenaga, energi, informasi).

### 2.2 Kinetika Kerusakan Produk (Arrhenius Termal)

Laju deteriorasi produk biologis mengikuti persamaan Arrhenius yang dinormalisasi terhadap suhu referensi $T_{ref}$:

$$k(T) = k_{ref} \cdot \exp\left[\frac{E_a}{R_g}\left(\frac{1}{T_{ref}} - \frac{1}{T}\right)\right]$$

dengan $E_a$ adalah energi aktivasi reaksi deteriorasi (J/mol), $R_g = 8{,}314$ J/(mol·K) adalah konstanta gas universal, $T$ adalah suhu absolut (K). Untuk vaksin Campak–Rubella, parameter referensi lazimnya $E_a \approx 75.000$ J/mol dengan $T_{ref} = 277{,}15$ K (4°C).

Kuantitas produk yang terdegradasi selama jendela waktu $[t_1, t_2]$ ketika suhu menyimpang dari ambang aman dirumuskan:

$$Q_{loss}(t_1, t_2) = N_0 \cdot \left[1 - \exp\left(-\int_{t_1}^{t_2} k(T(\tau)) \, d\tau\right)\right]$$

dengan $N_0$ adalah unit dosis awal. Integral ini selanjutnya dievaluasi secara numerik atau diaproksimasi melalui diskretisasi langkah waktu $\Delta t$.

### 2.3 Model Markov Diskret untuk Status Cold Box

State cold box dimodelkan sebagai rantai Markov $\{X_t\}_{t \geq 0}$ dengan state space $\mathcal{S} = \{S_0, S_1, S_2, S_3\}$ di mana:

- $S_0$: kondisi normal (2°C ≤ T ≤ 8°C)
- $S_1$: peringatan ringan (suhu 8°C < T ≤ 10°C atau 1°C ≤ T < 2°C)
- $S_2$: kritis (T > 10°C atau T < 1°C)
- $S_3$: gagal (*spoiled*, T > 15°C selama $\geq 30$ menit)

Matriks transisi $\mathbf{P}$ berukuran $4 \times 4$ dievaluasi secara empiris dari data deret waktu sensor DS18B20:

$$\mathbf{P} = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}, \quad \sum_{j=0}^{3} p_{ij} = 1 \; \forall i$$

### 2.4 Fungsi Keandalan Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki karakteristik: rentang ukur $-55°C$ hingga $+125°C$, akurasi $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$, resolusi 9–12 bit, dan protokol komunikasi 1-Wire. Keandalan sensor dimodelkan sebagai:

$$R_s(t) = e^{-\lambda_s t}, \quad \lambda_s = \frac{1}{\text{MTBF}_s}$$

dengan MTBF khas DS18B20 dalam lingkungan terkontrol sekitar 250.000 jam menurut datasheet Maxim Integrated.

### 2.5 Formulasi Optimasi Biaya-Resiliensi

Trade-off antara investasi resiliensi $I_R$ dan *expected loss* $\mathbb{E}[L]$ diformulasikan sebagai masalah minimisasi:

$$\min_{I_R} \; \mathbb{E}[L(I_R)] + \beta \cdot I_R$$

dengan $\beta$ adalah parameter regularisasi yang mengkonversi investasi ke unit risiko ekuivalen. *Expected loss* terdiri dari kerugian produk rusak, biaya pemulihan, dan penalti keterlambatan distribusi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain

Implementasi mengikuti cetak biru Putra et al. (2024) yang terdiri dari empat lapisan fungsional:

**Lapisan 1 — Sensor & Akuisisi Data**
Sensor DS18B20 ditempatkan pada tiga titik kritis cold box (pintu, tengah rak, dasar) untuk menangkap gradien termal. Interval sampling $T_s$ dapat dikonfigurasi 1–5 menit; menurut WHO PQS E006, untuk vaksin diperlukan interval $\leq 15$ menit. Resolusi 12-bit menghasilkan kenaikan 0,0625°C per LSB.

**Lapisan 2 — Transmisi & Gateway**
Mikrokontroler (Arduino/ESP32) membaca sensor melalui protokol 1-Wire (memerlukan resistor *pull-up* 4,7 kΩ pada jalur DQ). Data dikirim ke gateway melalui Wi-Fi/MQTT dengan topologi *publish-subscribe*. Payload JSON tipikal:

```json
{"device_id":"CCB-SIAK-01","ts":"2024-08-15T08:32:00Z",
 "T1":4.21,"T2":5.07,"T3":3.88,"battery":92,"alarm":0}
```

**Lapisan 3 — Edge Computing & Aturan Bisnis**
Pada edge node, aturan *if-then* dieksekusi:
- IF T_avg > 8°C selama ≥ 5 menit THEN kirim notifikasi level 1 ke apoteker
- IF T_avg > 10°C selama ≥ 10 menit THEN aktivasi alarm audio-visual dan eskalasi ke supervisor
- IF T_avg > 15°C selama ≥ 30 menit THEN status = *spoiled*, kunci lot, blokir distribusi

**Lapisan 4 — Dashboard & Integrasi ERP**
Dashboard menampilkan *real-time temperature plot*, *heat map* risiko per cold box, dan *compliance report* otomatis untuk audit BPOM/WHO.

### 3.2 SOP Respons Insiden Cold Chain

Diagram alir SOP berikut merangkum tindakan operasional berjenjang:

```
[Deteksi Anomali oleh Sensor]
        │
        ▼
[Verifikasi Ganda — 2 Sensor Threshold Confirmation]
        │
   ┌────┴────┐
[False Alarm] [True Anomaly]
   │              │
   ▼              ▼
[Log Event]  [Klasifikasi Severity: Level 1/2/3]
                  │
                  ▼
        [Notifikasi Apoteker via SMS/Apps]
                  │
                  ▼
        [Implementasi Tindakan Korektif]
                  │
   ┌──────────────┼────────────────┐
   ▼              ▼                ▼
[Ventilasi]  [Transfer ke Cold   [Evaluasi Lot:
              Box Cadangan]      layak/tidak]
                  │
                  ▼
        [Root Cause Analysis]
                  │
                  ▼
        [Update Parameter Markov P]
```

### 3.3 Prosedur Kalibrasi Berkala

Sesuai ISO 17025 dan pedoman kefarmasian, sensor dikalibrasi setiap 6 bulan dengan metode *comparison calibration* menggunakan reference thermometer bersertifikat (asamnya NIST/kan). Drift $\Delta_{cal}$ tidak boleh melebihi $\pm 0{,}3°C$ untuk vaksin; jika terlampaui maka sensor di-*recalibrate* atau diganti.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin MR dari UPTD Farmasi Siak ke 12 Puskesmas

Parameter industri:

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Kapasitas cold box | $C$ | 240 vial (10 dosis/vial) |
| Suhu referensi | $T_{ref}$ | 4°C = 277,15 K |
| Suhu aktual rata-rata | $T$ | 8,5°C = 281,65 K |
| Energi aktivasi | $E_a$ | 75.000 J/mol |
| Konstanta gas | $R_g$ | 8,314 J/(mol·K) |
| Konstanta referensi | $k_{ref}$ | 1,0 × 10⁻⁴ /jam |
| Durasi paparan | $\Delta t$ | 4 jam