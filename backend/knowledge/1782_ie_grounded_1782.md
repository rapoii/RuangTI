# 1782 — Model Ketahanan (Resilience) Rantai Dingin Produk Mudah Rusak: Integrasi Pemantauan IoT Real-Time untuk Sistem Logistik Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics (logistik rantai dingin) merupakan subsistem kritis dalam rantai pasok produk termolabil — vaksin, biofarmasi, produk darah, hortikultura segar, dan seafood — yang memerlukan penjagaan suhu dalam rentang presisi sepanjang siklus *last-mile*. Khurshid dan Siddiqui (2024) memposisikan bahwa disrupsi tunggal pada mata rantai pendinginan mampu menghasilkan efek domino terhadap kemampuan penyerapan (*absorptive*), adaptasi (*adaptive*), dan pemulihan (*restorative*) sistem, sehingga diperlukan model kuantitatif untuk mengukur resilience secara *time-dependent* [DOI: 10.2139/ssrn.4959599]. Studi tersebut berangkat dari realitas bahwa 20–25% produk farmasi termolabil terdegradasi sebelum mencapai *end-user* akibat *temperature excursion* (WHO, 2022).

Di Indonesia, kondisi operasional cold chain pada tingkat UPTD Farmasi — sebagaimana didokumentasikan Putra, Defit, dan Nurcahyo (2024) di Dinas Kesehatan Kabupaten Siak — masih mengandalkan pencatatan manual setiap 2 jam pada *log sheet* oleh apoteker, tanpa peringatan dini berbasis sensor ketika suhu cold chain box melebihi ambang batas 2–8°C [DOI: 10.35134/komtekinfo.v12i1.589]. Kombinasi kedua perspektif ini menunjukkan *gap* rekayasa yang signifikan: belum ada integrasi antara model resilience teoritis (Khurshid & Siddiqui) dengan instrumentasi IoT yang orkestrasinya dibahas Putra et al.

Secara ekonomis, biaya *cold chain failure* diestimasikan mencapai USD 35 miliar per tahun secara global (Allied Market Research, 2023), sementara pada konteks Indonesia, program imunisasi nasional menangani lebih dari 350 juta dosis vaksin per tahun yang seluruhnya bergantung pada cold chain integrity. Urgensi rekayasa industri di Modul 1782 ini adalah merancang kerangka kuantitatif yang menyatukan model resilience dengan arsitektur sensing real-time, sehingga *decision-maker* mampu memprediksi, memantau, dan memulihkan kapasitas rantai dingin secara *proactive* alih-alih *reactive*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resilience Bruneau yang Diperluas

Khurshid dan Siddiqui (2024) mengadopsi kerangka 4R Bruneau (Robustness, Redundancy, Resourcefulness, Rapidity) dan mengekstensi menjadi *Time-Dependent Resilience Function*:

$$R(t) = \frac{Q(t)}{Q_0} \cdot \exp\left(-\lambda \int_{t_0}^{t} \mathbf{1}_{\{|T(\tau) - T^*| > \delta\}} \, d\tau\right)$$

di mana $Q(t)$ adalah *quality state* produk pada waktu $t$, $Q_0$ adalah kualitas awal, $\lambda$ adalah *degradation rate*, $T^*$ adalah suhu target, dan $\delta$ adalah toleransi devang suhu. Fungsi indikator $\mathbf{1}_{\{\cdot\}}$ bernilai 1 saat terjadi ekskursi suhu.

### 2.2 Indeks Integritas Cold Chain (Cold Chain Integrity Index — CCII)

Untuk mengkuantifikasi tingkat kepatuhan suhu, didefinisikan:

$$CCII = 1 - \frac{1}{N} \sum_{i=1}^{N} \frac{|T_i - T^*|}{T_{tol}}$$

dengan $T_i$ pembacaan suhu sensor ke-$i$, $T_{tol}$ adalah batas toleransi absolut. Sistem dianggap *compliant* apabila $CCII \geq 0{,}95$.

### 2.3 Model Degradasi Termal Arrhenius

Potensi produk farmasi terdegradasi mengikuti persamaan Arrhenius yang dimodifikasi:

$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

dengan $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), $T_1$ dan $T_2$ adalah suhu absolut (K). Untuk vaksin tipikal, $E_a \approx 60$–$100$ kJ/mol.

### 2.4 Akurasi Sensor DS18B20 dan Resolusi Pengukuran

Putra et al. (2024) menggunakan sensor DS18B20 dengan karakteristik: akurasi $\pm 0{,}5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$, resolusi konfigurable 9–12 bit melalui *register configuration*. Resolusi suhu pada 12-bit:

$$\Delta T_{res} = \frac{T_{max} - T_{min}}{2^{12}} = \frac{160}{4096} \approx 0{,}0625^{\circ}\text{C}$$

### 2.5 Resilience Recovery Index (RRI)

Untuk mengukur kecepatan pemulihan pasca-disrupsi:

$$RRI = \frac{\Delta t_{recovery}}{\Delta t_{disruption}} \cdot \frac{Q_{restored} - Q_{min}}{Q_0 - Q_{min}}$$

Nilai $RRI < 1$ menunjukkan *high-resilience* system; $RRI > 1$ menunjukkan sistem memerlukan waktu pemulihan lebih lama dari durasi disrupsi.

### 2.6 Mean Time Between Failures untuk Subsistem Pendingin

$$MTBF_{cooling} = \frac{\sum_{i=1}^{n} t_{op,i}}{N_{failures}}$$

yang selanjutnya digabung dengan parameter sensor untuk membangun *overall system reliability* seri:

$$R_{system}(t) = \prod_{j=1}^{m} R_j(t) = \prod_{j=1}^{m} e^{-\lambda_j t}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti arsitektur 5-lapis yang menyatukan model Khurshid & Siddiqui (2024) dengan sistem instrumentasi Putra et al. (2024):

**Lapis 1 — Sensing Layer.** Sensor DS18B20 dipasang secara multi-point (minimum 3 titik: inlet, middle-zone, outlet) untuk menangkap gradien suhu spasial. Protokol komunikasi 1-Wire dengan parasitic power mode memastikan kontinuitas pembacaan meskipun terjadi kegagalan catu daya utama.

**Lapis 2 — Data Acquisition & Edge Computing.** Mikrokontroler (ESP32/NodeMCU) melakukan sampling setiap 60 detik, kemudian menghitung statistik ringkas (rata-rata, standar deviasi, min/max) menggunakan *moving window* 5 menit untuk mengurangi noise.

**Lapis 3 — Transmission & Storage.** Data dikirim ke cloud server (MQTT protocol, QoS level 1) dengan *timestamp* ISO-8601. Redundansi penyimpanan menggunakan *circular buffer* lokal 72 jam untuk antisipasi *network outage*.

**Lapis 4 — Analytics & Decision Engine.** Algoritma menjalankan fungsi $R(t)$ secara real-time. Apabila $R(t) < R_{threshold}$ (default 0,85), sistem memicu peringatan bertingkat:
- **Level 1 (warning):** $8°C < T < 10°C$ selama > 15 menit → notifikasi ke apoteker
- **Level 2 (critical):** $T > 10°C$ selama > 30 menit → notifikasi + aktivasi *backup cooling*
- **Level 3 (emergency):** $T > 15°C$ selama > 60 menit → *quarantine protocol* dan penilaian *batch potency loss*

**Lapis 5 — Recovery & Continuous Improvement.** *Post-incident report* mencakup nilai $\Delta t_{disruption}$, $Q_{min}$, dan *root cause analysis*. Data historis digunakan untuk *re-calibration* parameter $\lambda$ dan threshold alert.

SOP operasional mengikuti pedoman WHO PQS (Performance, Quality and Safety) dan SNI ISO 21930:2016 untuk cold chain monitoring, dengan audit internal setiap 3 bulan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi mengelola *batch* vaksin COVID-19 (500 vial @ 10 dosis) pada cold chain box 50 liter dengan suhu target $T^* = 5^{\circ}\text{C}$ dan toleransi $\delta = 3^{\circ}\text{C}$ (rentang 2–8°C). Selama 6 jam operasional, terjadi *single-event disruption* berupa kegagalan kompresor pendingin.

**Parameter awal:**
- $Q_0 = 100\%$ (potensi vaksin awal)
- $\lambda = 0{,}015$/menit (laju degradasi pada ekskursi suhu)
- $E_a = 80$ kJ/mol
- Pembacaan sensor: $T_1 = 5{,}0°C$, $T_2 = 12{,}5°C$, $T_3 = 5{,}1°C$ (3 titik sampling)

**Langkah 1 — Perhitungan CCII awal:**
$$CCII_{baseline} = 1 - \frac{1}{3}\left(\frac{|5{,}0-5|}{3} + \frac{|12{,}5-5|}{3} + \frac{|5{,}1-5|}{3}\right) = 1 - \frac{1}{3}(0 + 2{,}5 + 0{,}033) = 0{,}156$$

**Langkah 2 — Aktivasi degradation termal:**
$$k_2/k_1 = \exp\left(\frac{80.000}{8{,}314}\left(\frac{1}{278{,}15} - \frac{1}{285{,}65}\right)\right) = \exp(9617 \cdot 0{,}0000940) = \exp(0{,}904) \approx 2{,}