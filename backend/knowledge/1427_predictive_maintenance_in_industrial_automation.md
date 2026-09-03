# 1427 — Pemeliharaan Prediktif dalam Otomasi Industri: Tinjauan Sistematis Teknologi Sensor IoT dan Algoritma Kecerdasan Buatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** PREDICTIVE MAINTENANCE IN INDUSTRIAL AUTOMATION: A SYSTEMATIC REVIEW OF IOT SENSOR TECHNOLOGIES AND AI ALGORITHMS
**Jurnal & Sitasi Utama:** Roksana Haque, Ammar Bajwa, Noor Alam Siddiqui (2024). *American Journal of Interdisciplinary Studies*. DOI: [https://doi.org/10.63125/hd2ac988](https://doi.org/10.63125/hd2ac988)
**Sitasi Pendukung:** Taimia Bitam, Abdelouahab Yahiaoui, Djallel Eddine Boubiche (2025). *Sensors*. DOI: [https://doi.org/10.3390/s25247636](https://doi.org/10.3390/s25247636)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin kompleks, gangguan peralatan (*equipment downtime*) bukan sekadar permasalahan teknis—ia merupakan ancaman strategis terhadap profitabilitas, keselamatan pekerja, dan keberlanjutan rantai pasok. Haque, Bajwa, dan Siddiqui (2024) dalam *American Journal of Interdisciplinary Studies* (DOI: [10.63125/hd2ac988](https://doi.org/10.63125/hd2ac988)) menegaskan bahwa pemeliharaan prediktif (*Predictive Maintenance*, PdM) telah bertransformasi dari pendekatan opsional menjadi kebutuhan fundamental dalam otomasi industri kontemporer. Berdasarkan analisis sistematis terhadap 78 studi peer-review berstandar tinggi mengikuti pedoman **PRISMA** (*Preferred Reporting Items for Systematic Reviews and Meta-Analyses*), paper tersebut menunjukkan bahwa integrasi sensor IoT dan algoritma AI mampu mendongkrak akurasi prediksi kegagalan hingga 30–60%, menurunkan biaya pemeliharaan 25–50%, serta meningkatkan *uptime* peralatan secara signifikan.

Konteks ekonomi makro makin memperkuat urgensi ini. Data historis industri manufaktur global menunjukkan bahwa biaya *unplanned downtime* dapat mencapai $50.000 per jam pada fasilitas *high-volume manufacturing*, dengan total kerugian industri manufaktur dunia yang melampaui $50 miliar per tahun. Pendekatan pemeliharaan tradisional—baik *reactive* (perbaikan setelah kegagalan) maupun *preventive* berbasis jadwal tetap—memiliki keterbatasan inheren: yang pertama bersifat mahal dan merusak, sedangkan yang kedua cenderung menghasilkan *over-maintenance* yang tidak efisien. Disinilah PdM menawarkan paradigma baru: intervensi berbasis kondisi (*condition-based intervention*) yang dipicu oleh degradasi aktual, bukan oleh asumsi statistik rata-rata.

Bitam, Yahiaoui, dan Boubiche (2025) dalam jurnal *Sensors* (DOI: [10.3390/s25247636](https://doi.org/10.3390/s25247636)) memperluas wacana ini dengan memperkenalkan kerangka **Artificial Intelligence of Things (AIoT)** yang menyinergikan AI dan IIoT dalam konteks **Industry 5.0**—tatanan industri yang berorientasi pada kolaborasi manusia-mesin, keberlanjutan, dan resiliensi ekosistem industri. Transisi dari Industry 4.0 (otomatisasi sibernetik) ke Industry 5.0 membawa dimensi baru: PdM tidak lagi hanya soal deteksi anomali, melainkan juga *prescriptive maintenance* (rekomendasi tindakan), estimasi *Remaining Useful Life* (RUL), dan integrasi dengan keputusan operasional lintas-fungsi. Dari 49 studi yang dianalisis Haque et al. (2024), terbukti bahwa *real-time fault detection* berbasis IoT mampu meningkatkan akurasi prediksi 15–35% dan menurunkan durasi *downtime* 20–45%—angka yang secara langsung mengonversi menjadi keunggulan kompetitif bagi perusahaan yang mengadopsinya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketersediaan Peralatan

Fondasi analitis PdM dimulai dari persamaan ketersediaan (*availability*) peralatan dalam perspektif keandalan klasik:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

di mana **MTBF** (*Mean Time Between Failures*) adalah rerata waktu antar kegagalan dan **MTTR** (*Mean Time To Repair*) adalah rerata waktu perbaikan. Strategi PdM secara langsung berusaha memperbesar MTBF melalui deteksi dini degradasi, sekaligus memperkecil MTTR melalui perencanaan sumber daya perbaikan yang presisi.

### 2.2 Fungsi Keandalan Weibull

Distribusi Weibull banyak digunakan untuk memodelkan degradasi komponen mesin:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^\beta}$$

dengan $t$ adalah waktu operasi, $\eta$ adalah *scale parameter* (umur karakteristik), dan $\beta$ adalah *shape parameter* yang merepresentasikan mode kegagalan ($\beta < 1$: *infant mortality*; $\beta = 1$: kegagalan acak; $\beta > 1$: keausan/kejumudan). Laju kegagalan (*hazard rate*) dinyatakan sebagai:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3 Arsitektur Jaringan LSTM untuk Prediksi RUL

Model *Long Short-Term Memory* (LSTM) yang terbukti paling efektif dalam paper Haque et al. (2024) menggunakan struktur *gating* berikut:

$$f_t = \sigma\left(W_f \cdot [h_{t-1}, x_t] + b_f\right)$$
$$i_t = \sigma\left(W_i \cdot [h_{t-1}, x_t] + b_i\right)$$
$$\tilde{C}_t = \tanh\left(W_C \cdot [h_{t-1}, x_t] + b_C\right)$$
$$C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$$
$$o_t = \sigma\left(W_o \cdot [h_{t-1}, x_t] + b_o\right)$$
$$h_t = o_t \odot \tanh(C_t)$$

di mana $f_t$, $i_t$, $o_t$ berturut-turut adalah *forget gate*, *input gate*, dan *output gate*; $W$ dan $b$ adalah bobot dan bias; $C_t$ adalah *cell state*; serta $\odot$ adalah operasi *element-wise*. Sensor time-series dari IoT ($x_t$: getaran, suhu, arus) menjadi input model untuk memprediksi RUL.

### 2.4 Model Peningkatan Akurasi Prediktif

Haque et al. (2024) melaporkan rentang peningkatan akurasi sebagai berikut:

$$\Delta P_{\text{accuracy}} = P_{\text{AI-PdM}} - P_{\text{baseline}} \in [30\%, 60\%]$$

dengan *baseline* mengacu pada model regresi klasik atau *threshold-based* monitoring.

### 2.5 Reduksi Biaya Pemeliharaan

Model ekonomis reduksi biaya:

$$\Delta C_{\text{maintenance}} = C_{\text{reactive}} - C_{\text{PdM}} \in [25\%, 50\%] \cdot C_{\text{reactive}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Haque et al. (2024) mengadopsi metodologi **PRISMA** sebagai kerangka sistematis dengan tahapan: (i) identifikasi studi melalui pencarian basis data IEEE Xplore, Scopus, Web of Science; (ii) penyaringan berdasarkan kriteria inklusi/eksklusi; (iii) penilaian kualitas menggunakan *checklist* PRISMA; (iv) ekstraksi data kuantitatif; serta (v) sintesis tematik. Diagram alur *flow diagram* PRISMA memastikan transparansi dalam proses seleksi 78 studi final.

Implementasi rekayasa di lantai pabrik mengikuti arsitektur berlapis berikut:

**Tahap 1 – Akuisisi Data Sensor IoT:** Sensor getaran (akselerometer MEMS), sensor suhu (termokopel/thermistor), sensor akustik, dan sensor arus dipasang pada *critical assets*. Data ditransmisikan via protokol MQTT/OPC-UA ke *edge gateway*.

**Tahap 2 – Pra-pemrosesan Data:** Normalisasi sinyal, filter *wavelet denoising* untuk menghilangkan noise, ekstraksi fitur statistik (RMS, kurtosis, *crest factor*), dan segmentasi *sliding window*.

**Tahap 3 – Pelatihan Model AI:** Dataset historis kegagalan digunakan untuk melatih model CNN-LSTM hibrida dengan *cross-validation* k=5.

**Tahap 4 – Inferensi Real-Time:** Model tervalidasi di-*deploy* pada *edge device* (NVIDIA Jetson atau industrial PLC) untuk inferensi latensi rendah.

**Tahap 5 – Prescriptive Action:** Output model berupa *health score* dan RUL diintegrasikan dengan **CMMS** (*Computerized Maintenance Management System*) untuk auto-generate *work order*.

Bitam et al. (2025) menambahkan dimensi **AIoT** dengan menyatukan tiga arsitektur: *sensing layer* (IIoT), *intelligence layer* (AI/ML), dan *action layer* (prescriptive engine), sehingga alur keputusan dari sensor ke aksi bersifat *closed-loop* dan otonom.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik komponen otomotif di Jawa Timur mengoperasikan 50 mesin CNC untuk produksi massal. Rata-rata downtime karena kegagalan spindel dan sistem hidrolik menimbulkan kerugian signifikan. Manajemen memutuskan mengadopsi sistem PdM berbasis AIoT.

### 4.1 Data Input Operasional

| Parameter | Nilai |
|---|---|
| Jumlah mesin CNC | 50 unit |
| MTBF saat ini (preventive) | 720 jam |
| MTTR saat ini | 8 jam |
| Biaya downtime | Rp 75.000.000/jam |
| Biaya pemeliharaan reaktif tahunan | Rp 18 miliar |
| Investasi sensor IoT + AI platform | Rp 5 miliar (CAPEX) |

### 4.2 Perhitungan Status Baseline (Preventive)

$$A_{\text{baseline}} = \frac{720}{720 + 8} = 0,9890 \text{ atau } 98,90\%$$

Tersedia downtime tahunan per mesin: $8760 \times (1 - 0,9890) = 96,36$ jam.
Total kerugian downtime tahunan: $50 \times 96,36 \times \text{Rp } 75.000.000 = \text{Rp } 361,35 \text{ miliar}$.

### 4.3 Perhitungan Setelah Penerapan PdM

Berdasarkan temuan Haque et al. (2024), peningkatan akurasi prediksi 30–60% menurunkan MTTR secara substansial melalui perbaikan yang direncanakan. Ambil konservatif: MTTR turun 40% menjadi 4,8 jam; MTBF naik 25% menjadi 900 jam karena kegagalan dicegah lebih dini.

$$A_{\text{PdM}} = \frac{900}{900 + 4,8} = 0,9947 \text{ atau } 99,47\%$$

Tersedia downtime tahunan per mesin: $8760 \times 0,0053 = 46,43$ jam.
Total kerugian downtime: $50 \times 46,43 \times \text{Rp } 75.000.000 = \text{Rp } 174,11 \text{ miliar}$.

### 4.4 Reduksi Biaya

$$\Delta C_{\text{downtime}} = 361,35 - 174,11 = \text{Rp } 187,24 \text{ miliar/tahun}$$

Penurunan biaya pemeliharaan reaktif (25–50%, ambil median 37,5%):

$$\Delta C_{\text{maintenance}} = 0,375 \times 18 = \text{Rp } 6,75
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
