# 1990 — Efisiensi Waste pada Cold Supply Chain melalui Digitalisasi Berbasis Industry 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Waste efficiency in cold supply chains through industry 4.0-enabled digitalisation
**Jurnal & Sitasi Utama:** Hajar Fatorachian, Kulwant S. Pawar (2025). *International Journal of Sustainable Engineering*. DOI: [https://doi.org/10.1080/19397038.2025.2461564](https://doi.org/10.1080/19397038.2025.2461564)
**Sitasi Pendukung:** Raju R. Yenare, Chandrakant Sonawane, Anirban Sur (2024). *Alexandria Engineering Journal*. DOI: [https://doi.org/10.1016/j.aej.2024.03.014](https://doi.org/10.1016/j.aej.2024.03.014)

---

## 1. Pendahuluan dan Konteks Industri

Cold supply chain (rantai pasok dingin) merupakan subsistem kritis dalam distribusi barang mudah rusak (perishable goods) yang mencakup produk pangan, farmasi, dan bioteknologi. Menurut Fatorachian & Pawar (2025) dalam *International Journal of Sustainable Engineering*, sektor ini menghadapi tekanan ganda berupa *climate emergency* global dan meningkatnya regulasi emisi CO₂, sehingga kebutuhan akan efisiensi waste menjadi agenda strategis yang tidak dapat ditunda. Studi tersebut secara eksplisit memposisikan digitalisasi berbasis Industry 4.0 — yang mencakup Artificial Intelligence (AI), Internet of Things (IoT), dan *predictive analytics* — sebagai enabler transformasional untuk memitigasi pemborosan, menurunkan emisi karbon, dan meningkatkan keberlanjutan operasional.

Konteks industri yang melatarbelakangi penelitian ini cukup mendesak. Kerusakan pangan global tercatat mendekati 1,3 miliar ton per tahun (sekitar 30–40% produksi pangan dunia hilang antara tahap panen hingga konsumsi), di mana porsi signifikan terjadi pada环节 distribusi suhu terkontrol. Cold chain sendiri mengonsumsi sekitar 4–7% dari total permintaan listrik global untuk kebutuhan refrigerasi, menjadikan inefisiensi termal sebagai sumber waste energi sekaligus waste produk. Fatorachian & Pawar (2025) menemukan bahwa integrasi sensor IoT secara *real-time* memungkinkan deteksi dini anomali suhu sebelum produk mengalami degradasi mutu, sementara algoritma *predictive maintenance* menurunkan tingkat kegagalan peralatan refrigerasi yang sebelumnya menjadi penyebab utama kehilangan stok.

Studi pelengkap oleh Yenare, Sonawane, & Sur (2024) dalam *Alexandria Engineering Journal* memperkuat urgensi ini dengan meninjau teknologi *portable cold storage* (termasuk *refrigerated shipping containers*, *portable refrigerators*, dan *cold rooms*). Penulis menyoroti bahwa fleksibilitas unit-unit portabel menjadi semakin vital pada *last-mile distribution* dan operasi lapangan kemanusiaan, serta integrasi material perubahan fase (Phase Change Materials/PCM) memungkinkan penyimpanan energi termal yang memperpanjang durasi mempertahankan suhu kritis tanpa catu daya kontinu. Sinergi antara kedua literatur menunjukkan bahwa waste efficiency bukan hanya masalah optimasi internal fasilitas, melainkan persoalan orkestrasi teknologi digital dan material termal di seluruh rantai pasok.

Dalam lanskap manufaktur dan logistik modern, kelangkaan energi, volatilitas biaya refrigeran, serta ketatnya protokol HACCP dan GFSI menuntut pendekatan berbasis data. Fatorachian & Pawar (2025) mengidentifikasi bahwa solusi digital tidak hanya menekan waste produk, tetapi juga membuka peluang monetisasi baru melalui traceability blockchain, dynamic routing, dan prescriptive pricing. Oleh karena itu, modul ini akan membedah secara kuantitatif bagaimana arsitektur Industry 4.0 — sensor IoT, platform AI/ML, dan digital twin — dapat diintegrasikan dengan teknologi pendingin konvensional dan portabel untuk mencapai efisiensi waste yang terukur.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi kuantitatif waste efficiency pada cold supply chain dapat dibangun dari tiga perspektif: termodinamika refrigerasi, keandalan sistem (reliability), dan optimasi berbasis data. Pendekatan ini konsisten dengan kerangka analitis yang digunakan Fatorachian & Pawar (2025) yang menekankan *real-time monitoring*, *predictive maintenance*, dan *enhanced traceability*.

### 2.1 Beban Termal dan Konsumsi Energi Refrigerasi

Beban pendinginan total pada ruang dingin dimodelkan melalui persamaan perpindahan panas overall:

$$Q_{total} = U \cdot A \cdot \Delta T_{avg} \cdot t + \dot{m}_{prod} \cdot c_p \cdot (T_{in} - T_{out}) + \dot{Q}_{infil} + \dot{Q}_{respir}$$

di mana:
- $U$ = koefisien perpindahan panas overall (W/m²·K)
- $A$ = luas permukaan ruang (m²)
- $\Delta T_{avg}$ = beda suhu rata-rata antara interior dan eksterior (K)
- $t$ = durasi operasi (s)
- $\dot{m}_{prod}$ = laju massa produk (kg/s)
- $c_p$ = kapasitas panas produk (kJ/kg·K)
- $\dot{Q}_{infil}$ = beban infiltrasi udara dari buka-tutup pintu (kW)
- $\dot{Q}_{respir}$ = panas respirasi produk hortikultura (kW)

Konsumsi energi spesifik dapat dihitung sebagai:

$$E_{specific} = \frac{Q_{total}}{m_{stored} \cdot COP}$$

dengan $COP$ (*Coefficient of Performance*) compressor dan $m_{stored}$ adalah massa barang tersimpan (kg). Waste energi terjadi ketika $COP$ menurun akibat fouling evaporator, kebocoran refrigeran, atau setpoint suhu yang tidak optimal — semua variabel yang dapat dipantau via sensor IoT sebagaimana ditunjukkan Fatorachian & Pawar (2025).

### 2.2 Model Penyimpanan Energi Termal PCM

Yenare, Sonawane, & Sur (2024) menekankan peran Phase Change Materials untuk menstabilkan suhu pada portable cold storage. Kapasitas penyimpanan termal PCM mengikuti:

$$Q_{PCM} = m_{PCM} \cdot \left[ c_{s,solid} \cdot (T_m - T_i) + h_{fusion} + c_{s,liquid} \cdot (T_f - T_m) \right]$$

di mana $h_{fusion}$ adalah entalpi peleburan laten (kJ/kg), $T_m$ adalah suhu transisi fase, dan $T_i$, $T_f$ adalah suhu awal dan akhir. Untuk PCM es (water-based) dengan $h_{fusion} \approx 334$ kJ/kg, kapasitas termal per satuan massa sangat tinggi sehingga efektif mempertahankan suhu 0°C selama periode tanpa catu daya.

### 2.3 Indeks Waste Efficiency

Fatorachian & Pawar (2025) mengusulkan waste efficiency sebagai rasio antara output yang terpelihara terhadap input sumber daya:

$$\eta_{waste} = 1 - \frac{W_{actual}}{W_{baseline}}$$

dengan $W_{actual}$ adalah waste aktual setelah intervensi digital, $W_{baseline}$ adalah waste sebelum digitalisasi. Waste dapat berupa produk rusak ($W_{prod}$, kg), energi terbuang ($W_{energy}$, kWh), atau emisi CO₂ ekuivalen ($W_{CO_2}$, kgCO₂e).

### 2.4 Model Prediksi Kerusakan dengan AI

Pendekatan *predictive analytics* yang digunakan dalam studi Fatorachian & Pawar (2025) dapat diformulasikan secara stokastik. Peluang produk tetap layak pada waktu $t$ diberikan suhu historis $\{T_1, T_2, ..., T_n\}$:

$$P(S_t = 1 | \mathbf{T}) = \sigma\left(\beta_0 + \sum_{i=1}^{n} \beta_i \cdot f_i(\mathbf{T}) + \epsilon \right)$$

di mana $\sigma(\cdot)$ adalah fungsi sigmoid, $f_i(\mathbf{T})$ adalah fitur turunan (misalnya integral waktu-suhu, *time-temperature indicator*), dan $\epsilon$ adalah residual.

### 2.5 Formulasi ROI Digitalisasi

Pengembalian investasi atas implementasi sensor IoT dan platform AI:

$$ROI = \frac{\sum_{t=1}^{T} \left( C_{waste\_saved,t} + C_{energy\_saved,t} + C_{downtime\_avoided,t} \right) - C_{capex} - \sum_{t=1}^{T} C_{opex,t}}{\sum_{t=1}^{T} C_{opex,t} + C_{capex}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Fatorachian & Pawar (2025) melaksanakan penelitian kualitatif menggunakan *focus groups* dan wawancara semi-terstruktur dengan praktisi industri, dianalisis melalui NVivo 14. Untuk konteks implementasi rekayasa, kami menerjemahkan temuan kualitatif tersebut menjadi SOP terstruktur berbasis lima fase:

**Fase 1 — Asesmen Baseline dan Pemetaan Proses.**
Lakukan *value stream mapping* (VSM) cold chain untuk mengidentifikasi titik-titik kritis kehilangan termal dan operasional. Tetapkan baseline $W_{baseline}$ (kg produk rusak/bulan), konsumsi energi (kWh/hari), dan tingkat downtime peralatan refrigerasi (jam/bulan). Kalibrasi sensor IoT terhadap standar ISO/IEC 17025 untuk memastikan akurasi pengukuran suhu ±0,2°C.

**Fase 2 — Deployment Arsitektur IoT.**
Pasang jaringan sensor multi-parameter (suhu, kelembapan relatif, getaran kompresor, arus listrik, posisi pintu) dengan protokol komunikasi MQTT atau LoRaWAN. Bangun *edge gateway* untuk agregasi data lokal dan transmisi ke *cloud platform* (AWS IoT Core, Azure Digital Twins). Lapisan digital twin memodelkan state termodinamika ruang dingin secara *real-time* mengikuti Persamaan 2.1.

**Fase 3 — Integrasi AI dan Predictive Maintenance.**
Latih model *machine learning* (gradient boosting, LSTM networks) pada data historis untuk memprediksi kegagalan compressor 7–14 hari sebelum kejadian. Threshold alert dibangun berdasarkan:

$$\text{Alert} = \mathbb{1}\left[ P(failure | \mathbf{x}_t) > \tau \right]$$

dengan $\tau$阈值 ditetapkan melalui analisis ROC curve.

**Fase 4 — Prosedur Operasional Harian (SOP Operator).**
- Pemeriksaan dashboard digital twin setiap 4 jam.
- Verifikasi alert IoT dan eskalasi teknisi dalam 30 menit.
- Pencatatan deviasi suhu > 2°C dari setpoint sebagai *near-miss incident*.
- Validasi suhu produk masuk menggunakan *time-temperature indicator* (TTI) kimia atau RFID.

**Fase 5 — Continuous Improvement dan Audit.**
Lakukan *Plan-Do-Check-Act* (PDCA) bulanan berdasarkan KPI: $W_{actual}$, $E_{specific}$, dan $OEE$ (Overall Equipment Effectiveness) sistem refrigerasi. Bandingkan dengan baseline dan adjust parameter AI secara *online learning*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Skenario

Sebuah fasilitas *cold storage* buah-buahan tropis di pelabuhan ekspor memiliki spesifikasi berikut:
- Kapasitas: 1.000 ton produk
- Setpoint suhu: 2°C (rentang produk: mangga, manggis, nanas)
- Volume ruang: $V = 25.000$ m³ (50 m × 50 m × 10 m)
- Luas permukaan: $A = 4.900$ m² (lantai + dinding + atap)
- Baseline tanpa digitalisasi:
  - Konsumsi energi: $E_{baseline} = 12.500$ kWh/hari
  - Waste produk: $W_{prod,baseline} = 8\%$ per siklus (40 hari) → 80 ton/siklus
  - Downtime compressor: 18 jam/bulan
  - Emisi CO₂ ekuivalen: 4,2 tonCO₂e/hari

### 4.2 Perhitungan Beban Termal dan PCM

Menggunakan Persamaan 2.2, jika dipasang PCM berbasis larutan garam hidrat dengan $h_{fusion} =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
