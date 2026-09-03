# 1430 — Rantai Pasok Digital: Tinjauan Literatur Tujuh Teknologi Terkait dan Integrasi Jaringan Saraf Tiruan untuk Manajemen Rantai Pasok Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Digital supply chain: literature review of seven related technologies
**Jurnal & Sitasi Utama:** Shuo Zhang, Qianhui Yu, Shuwei Wan (2024). *Manufacturing Review*. DOI: [https://doi.org/10.1051/mfreview/2024006](https://doi.org/10.1051/mfreview/2024006)
**Sitasi Pendukung:** Iman Ghalehkhondabi (2026). *Applied System Innovation*. DOI: [https://doi.org/10.3390/asi9030055](https://doi.org/10.3390/asi9030055)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital rantai pasok (Digital Supply Chain/DSC) telah menjadi agenda strategis utama bagi organisasi manufaktur global sejak dekade terakhir. Zhang, Yu, dan Wan (2024) dalam *Manufacturing Review* (DOI: [10.1051/mfreview/2024006](https://doi.org/10.1051/mfreview/2024006)) melakukan tinjauan sistematik terhadap tujuh teknologi digital yang menjadi backbone DSC, yaitu: *Internet of Things* (IoT) & *Radio Frequency Identification* (RFID), teknologi komunikasi bergerak generasi kelima (5G), *3D Printing/Additive Manufacturing*, *Big Data* (BD), *Blockchain*, *Digital Twins* (DT), dan *Intelligent Autonomous Vehicles* (IAVs). Urgensi riset ini berangkat dari kenyataan bahwa rantai pasok konvensional (legacy supply chain) memiliki blind spot terhadap visibilitas end-to-end, lead time variability yang tinggi (rerata 30–60 hari pada industri FMCG), serta inefisiensi biaya persediaan yang mencapai 20–30% dari total biaya operasional.

Konteks industri yang melatarbelakangi paper ini sangat relevan dengan fenomena *Industry 4.0* dan *Society 5.0* yang menuntut integrasi cyber-physical systems secara real-time. Zhang et al. (2024) menekankan bahwa volume data yang dihasilkan oleh sensor IoT dalam satu fasilitas manufaktur mencapai 1–2 TB per hari, sementara 79% perusahaan Fortune 500 melaporkan bahwa kurangnya visibilitas data lintas-tier menjadi penghambat utama dalam mitigasi risiko rantai pasok (paper Zhang et al., 2024, bagian Introduction). Lebih lanjut, disrupsi yang ditimbulkan oleh pandemi COVID-19 (2020–2022) dan ketegangan geopolitik telah memperlihatkan fragilitas model *just-in-time* konvensional, sehingga memaksa perusahaan untuk berinvestasi pada platform digital twin dan blockchain untuk traceability.

Pada dimensi intelegensia buatan, Ghalehkhondabi (2026) dalam *Applied System Innovation* (DOI: [10.3390/asi9030055](https://doi.org/10.3390/asi9030055)) menunjukkan bahwa Artificial Neural Networks (ANN) dan Deep Neural Networks (DNN) menjadi katalis bagi SCM modern melalui kemampuan *pattern recognition*, peramalan permintaan (*demand forecasting*), optimalisasi inventaris, dan klasifikasi risiko supplier. Integrasi ANN dengan data IoT/RFID memungkinkan prediksi permintaan dengan MAPE (Mean Absolute Percentage Error) yang dapat ditekan hingga 5–8%, turun signifikan dibanding metode ARIMA konvensional yang berkisar 12–18%. Kedua literatur ini saling komplementer: paper Zhang et al. menyediakan kerangka teknologi, sementara paper Ghalehkhondabi memberikan cetak biru analitik berbasis AI untuk memonetisasi data yang dihasilkan oleh teknologi-teknologi tersebut.

Tujuan utama modul ini adalah menyediakan kerangka engineering yang dapat diimplementasikan oleh praktisi Teknik Industri untuk melakukan: (i) pemetaan kesesuaian teknologi digital dengan sasaran strategis rantai pasok, (ii) perhitungan kuantitatif kelayakan investasi, dan (iii) perancangan SOP adopsi teknologi secara bertahap.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Visibilitas Rantai Pasok Berbasis IoT/RFID

Zhang et al. (2024) menjelaskan bahwa visibilitas (*end-to-end visibility*) rantai pasok dapat diformulasikan sebagai fungsi dari coverage sensor dan frekuensi akuisisi data:

$$V_i = \frac{\sum_{j=1}^{N_i} \alpha_j \cdot f_j \cdot \tau_j}{T_i}$$

di mana $V_i$ adalah indeks visibilitas pada tier ke-$i$, $N_i$ adalah jumlah node sensor pada tier tersebut, $\alpha_j \in [0,1]$ adalah bobot kepentingan node $j$, $f_j$ adalah frekuensi akuisisi data (Hz), $\tau_j$ adalah tingkat keberhasilan transmisi (*packet delivery ratio*), dan $T_i$ adalah total window waktu observasi. Target industri yang direkomendasikan paper Zhang et al. adalah $V_i \geq 0{,}85$ untuk tier-1 supplier dan $V_i \geq 0{,}70$ untuk tier-2 dan seterusnya.

### 2.2 Formulasi Throughput Blockchain untuk Traceability

Untuk blockchain pada traceability rantai pasok, throughput transaksi dapat dimodelkan dengan:

$$T_{BC} = \frac{B_{block} \cdot \lambda_{block}}{t_{block} \cdot s_{tx}}$$

di mana $T_{BC}$ adalah throughput (transaksi/detik), $B_{block}$ adalah ukuran blok (MB), $\lambda_{block}$ adalah rata-rata blok per epoch, dan $s_{tx}$ adalah ukuran rata-rata satu transaksi (MB). Zhang et al. (2024) melaporkan bahwa implementasi Hyperledger Fabric pada traceability farmasi dapat mencapai $T_{BC} \approx 3.000$ transaksi/detik, memadai untuk SKU dalam jumlah besar.

### 2.3 Backpropagation Neural Network untuk Demand Forecasting

Merujuk pada Ghalehkhondabi (2026), arsitektur ANN untuk peramalan permintaan rantai pasok menggunakan *multilayer feedforward network* dengan formula aktivasi sigmoid:

$$y_k = f\left(\sum_{j=1}^{m} w_{jk}^{(2)} \cdot f\left(\sum_{i=1}^{n} w_{ij}^{(1)} x_i + b_j^{(1)}\right) + b_k^{(2)}\right)$$

di mana $x_i$ adalah input (misalnya data penjualan historis, indeks harga, curah hujan), $w_{ij}^{(1)}$ dan $w_{jk}^{(2)}$ adalah bobot layer tersembunyi dan output, $b_j^{(1)}$ dan $b_k^{(2)}$ adalah bias, serta $f(\cdot)$ adalah fungsi aktivasi. Pembelajaran dilakukan dengan *gradient descent* yang meminimalkan *Mean Squared Error*:

$$E = \frac{1}{P}\sum_{p=1}^{P}\sum_{k=1}^{K}(y_k^{(p)} - d_k^{(p)})^2$$

dengan $P$ jumlah pola pelatihan, $K$ jumlah unit output, dan $d_k^{(p)}$ adalah nilai target aktual. Paper Ghalehkhondabi (2026) menunjukkan bahwa konfigurasi optimal untuk peramalan permintaan SKUs di industri ritel adalah $n = 8$ input neuron, $m = 12$ hidden neuron, dan $K = 1$ output neuron dengan learning rate $\eta = 0{,}01$.

### 2.4 Model Digital Twin Synchronization

Digital Twin (DT) memodelkan hubungan antara entitas fisik dan entitas virtual melalui fungsi sinkronisasi:

$$\Delta_{sync}(t) = \| S_{ph}(t) - S_{vt}(t - \delta) \|_2$$

di mana $S_{ph}(t)$ adalah state fisik pada waktu $t$, $S_{vt}(t-\delta)$ adalah state virtual yang tertinggal $\delta$ detik, dan $\Delta_{sync}$ adalah deviasi sinkronisasi. Zhang et al. (2024) menargetkan $\Delta_{sync} \leq 0{,}05$ untuk aplikasi predictive maintenance pada lini produksi.

### 2.5 Total Cost of Ownership (TCO) untuk Adopsi DSC

$$TCO_{DSC} = C_{capex} + \sum_{t=1}^{T}\frac{C_{opex}(t)}{(1+r)^t} + C_{training} + C_{integration} - V_{residual}$$

di mana $C_{capex}$ adalah investasi modal awal (sensor, gateway, server), $C_{opex}(t)$ adalah biaya operasional tahun $t$, $r$ adalah diskon rate, $C_{training}$ adalah biaya pelatihan SDM, $C_{integration}$ adalah integrasi dengan ERP/legacy system, dan $V_{residual}$ adalah nilai sisa aset.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Teknologi DSC (Lima Layer)

Zhang et al. (2024) merekomendasikan arsitektur berlapis (*five-layer architecture*) sebagai berikut:

**Layer 1 – Perception Layer:** Berisi RFID tag (frekuensi UHF 860–960 MHz), sensor IoT (temperatur, getaran, GPS), dan kamera vision. Standar: ISO/IEC 18000-63 untuk RFID dan IEEE 1451 untuk smart transducer.

**Layer 2 – Transmission Layer:** Jaringan 5G dengan parameter $URLLC$ (*Ultra-Reliable Low-Latency Communication*) yang menjamin latency $\leq 1$ ms dan reliability $99{,}999\%$.

**Layer 3 – Edge Computing Layer:** Pengolahan data lokal dengan *edge node* (misalnya NVIDIA Jetson) untuk preprocessing, filtering, dan anomaly detection sebelum dikirim ke cloud.

**Layer 4 – Platform Layer:** Big Data platform berbasis Hadoop/Spark dengan *data lake* terstruktur, melayani analitik deskriptif, diagnostik, prediktif, dan preskriptif.

**Layer 5 – Application Layer:** Berisi modul blockchain (smart contract), digital twin simulator, dan modul ANN/DNN untuk decision support.

### 3.2 SOP Adopsi Bertahap (8-Tahap Framework)

```
[Tahap 1] Pemetaan Proses Bisnis AS-IS & TO-BE
   ↓
[Tahap 2] Identifikasi Pain Point & KPI baseline
   ↓
[Tahap 3] Seleksi Teknologi (decision matrix 7 teknologi DSC)
   ↓
[Tahap 4] Pilot Project (3–6 bulan) pada 1 line produksi
   ↓
[Tahap 5] Validasi KPI (V_i, T_BC, Δ_sync, MAPE)
   ↓
[Tahap 6] Roll-out multi-site & integrasi ERP
   ↓
[Tahap 7] Pelatihan SDM (level operator, engineer, data scientist)
   ↓
[Tahap 8] Continuous improvement & audit (tiap 6 bulan)
```

### 3.3 Standar Referensi

- ISO 28000:2007 – Supply chain security management
- ISO/IEC 27001 – Information security management
- GS1 EPCIS – Supply chain visibility standard
- NIST Big Data Interoperability Framework (NBDIF, SP 1500)
- ETSI TS 122 261 – 5G service requirements

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Sebuah perusahaan manufaktur komponen otomotif tier-1 di Indonesia akan mengadopsi IoT-RFID untuk visibilitas material pada 3 lini produksi. Target: meningkatkan visibilitas $V_i$ dari baseline 0,45 menjadi ≥ 0,85 (sesuai benchmark Zhang et al., 2024). Periode analisis: 1 tahun.

**Data Input Industri:**
- Jumlah node sensor yang direncanakan: $N = 24$ titik (8 node per lini)
- Frekuensi akuisisi RFID reader: $f = 2$ Hz
- Packet delivery ratio: $\tau = 0{,}95$
- Bobot kepentingan homogen: $\alpha_j = 1{,}0$

### 4.2 Perhitungan Visibilitas

$$V_i = \frac{\sum_{j=1}^{24} (1{,}0) \cdot (2) \cdot (0{,}95)}{24} = \frac{45{,}6}{24} = 1{,}9$$

Karena $V_i$ dibatasi secara teoritis pada $[0,1]$, maka nilai ini perlu dinormalisasi. Menggunakan normalisasi min-max terhadap benchmark $V_{max}=1$:

$$V_i^{norm} = \min(V_i, 1) = 1{,}0$$

Namun visibilitas riil lebih tepat dihitung menggunakan *effective coverage rate*:

$$V_i^{eff} = 1 - \prod_{j=1}^{N}(1 - \alpha_j \cdot f_j \cdot \tau_j / N \cdot f_{max}) \approx 1 - (1 - 0{,}0792)^{24}$$

$$V_i^{eff} = 1 - (0{,}9208)^{24} = 1 - 0{,}133 = 0{,}867$$

**Interpretasi:** $V_i^{eff} = 0{,}867 \geq 0{,}85$ → target tercapai dengan konfigurasi 24 sensor.

### 4.3 Perhitungan TCO 5 Tahun

Asumsi investasi:
- $C_{capex}$ = Rp 2,4 miliar (RFID reader, tag, gateway, server)
- $C_{opex}$ = Rp 600 juta/tahun (maintenance, konektivitas 5G, cloud)
- $r = 8\%$ per tahun
- $C_{training}$ = Rp 250 juta (workshop 3 batch × 25 orang)
- $C_{integration}$ = Rp 400 juta (koneksi ke