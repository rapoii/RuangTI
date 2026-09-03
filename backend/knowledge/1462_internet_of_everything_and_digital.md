# 1462 — Platform Layanan Cold Chain Logistics Berbasis Internet of Everything dan Digital Twin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Internet of Everything (IoE) dan Digital Twin untuk Platform Layanan Cold Chain Logistics
**Jurnal & Sitasi Utama:** Wei Wu, Leidi Shen, Zhiheng Zhao (2023). *Internet of Everything and Digital Twin enabled Service Platform for Cold Chain Logistics*. **Journal of Industrial Information Integration**. DOI: [https://doi.org/10.1016/j.jii.2023.100443](https://doi.org/10.1016/j.jii.2023.100443)
**Sitasi Pendukung:** Soonh Taj, Ali Shariq Imran, Zenun Kastrati (2023). *IoT-based supply chain management: A systematic literature review*. **Internet of Things**. DOI: [https://doi.org/10.1016/j.iot.2023.100982](https://doi.org/10.1016/j.iot.2023.100982)

---

## 1. Pendahuluan dan Konteks Industri

Cold Chain Logistics (CCL) merupakan subsistem kritis dari rantai pasok modern yang mengelola pergerakan barang-barang sensitif-suhu — seperti produk farmasi (vaksin, bioteknologi), makanan segar (seafood, daging, produk susu), serta bahan kimia khusus — dengan mempertahankan rentang termal presisi sepanjang hulu-hilir (end-to-end). Menurut Wu, Shen, dan Zhao (2023) yang dipublikasikan di *Journal of Industrial Information Integration*, disrupsi termal sekecil 2 °C pada rantai dingin vaksin mRNA dapat menurunkan titrasi efikasi hingga 30 %; kerugian global akibat *temperature excursion* diestimasi melebihi USD 35 miliar per tahun (Wu et al., 2023). Studi tersebut membangun argumentasi bahwa paradigma *Cold Chain 4.0* tidak cukup hanya mengandalkan telemetri sensor pasif, melainkan memerlukan integrasi Internet of Everything (IoE) — evolusi IoT yang mencakup manusia, proses, dan data sebagai entitas konektif — dengan platform *Digital Twin* (DT) yang mampu melakukan mirroring fisikal-digital secara real-time untuk mendukung *proactive control*, bukan sekadar *reactive monitoring*.

Taj, Imran, dan Kastrati (2023) dalam *Systematic Literature Review* (SLR) mereka di jurnal *Internet of Things* menemukan bahwa proliferasi perangkat IoT telah merevolusi SCM melalui tiga pilar: (i) *real-time tracking* via GPS/GNSS, (ii) *asset management* melalui RFID dan NFC, dan (iii) *environmental sensing* melalui multisensor fusion. Namun SLR tersebut juga menyoroti *research gap* bahwa mayoritas penelitian masih terfokus pada *visibility* (visibilitas) dan belum menyentuh *prescriptive analytics* yang membutuhkan kembaran digital. Integrasi IoE-DT menjawab gap ini dengan menyediakan *closed-loop cyber-physical orchestration*: keputusan diambil bukan oleh operator berdasarkan dashboard, melainkan oleh agen otonom yang mengeksekusi ulang parameter aktuator (misalnya kompresor refrigerasi, katup, sistem peringatan) berdasarkan simulasi *what-if* terhadap model kembaran digital.

Urgensi industri semakin nyata pasca-COVID-19: distribusi global 13,5 miliar dosis vaksin (data WHO 2022 yang dirujuk Wu et al., 2023) memerlukan *cold chain* dengan toleransi $-20$ °C hingga $-70$ °C untuk platform mRNA; rata-rata *spoilage rate* produk segar di negara berkembang masih 25–40 % menurut FAO. Kerugian ini bukan hanya ekonomi tetapi juga ekologis — pangan terbuang menyumbang 8–10 % emisi gas rumah kaca global. Oleh karena itu, kebutuhan akan *decision-support system* yang bersifat *predictive, prescriptive, dan self-healing* menjadi agenda strategis industri 4.0. Modul 1462 ini akan membedah arsitektur, formulasi matematis, dan implementasi empiris dari platform layanan cold chain tersebut, dengan justifikasi rekayasa industri yang presisi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Kualitas Termal-Sensitif (Arrhenius Kinetics)

Kualitas produk *cold chain* terdegradasi mengikuti persamaan Arrhenius orde pertama yang sudah diadopsi dalam standar WHO PQS E006 dan Codex Alimentarius. Untuk produk farmasi berbasis protein, fraksi aktivitas biologis yang tersisa pada waktu $t$ didefinisikan sebagai:

$$A(t) = A_0 \cdot \exp\!\left(-k_{\text{ref}} \cdot \Delta t \cdot \exp\!\left[-\frac{E_a}{R}\!\left(\frac{1}{T(t)}-\frac{1}{T_{\text{ref}}}\right)\right]\right)$$

dengan $A_0$ aktivitas awal, $k_{\text{ref}}$ laju degradasi pada suhu referensi $T_{\text{ref}}$ (umumnya 277,15 K = 4 °C untuk vaksin), $E_a$ energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T(t)$ suhu absolut (K) hasil pengukuran sensor. Untuk vaksin mRNA, $E_a \approx 80$–$110$ kJ/mol (Wu et al., 2023).

### 2.2 Model Termal Dinamis Kontainer (Newton's Cooling + Resistansi Termal)

Distribusi suhu dalam kontainer refrigerasi dimodelkan sebagai *lumped-capacitance* dengan koreksi resistansi dinding dan *transient heat load* saat pintu dibuka. Persamaan konservasi energi:

$$m \, c_p \, \frac{dT_c}{dt} = \dot{Q}_{\text{gen}} - \frac{T_c - T_{\text{amb}}}{R_{\text{th}}} - \dot{Q}_{\text{COP}}$$

dengan $m$ massa produk (kg), $c_p$ kapasitas panas spesifik (J/(kg·K)), $\dot{Q}_{\text{gen}}$ panas metabolik/respirasi produk (W), $R_{\text{th}}$ resistansi termal dinding (K/W), $\dot{Q}_{\text{COP}}$ kapasitas pendinginan sistem refrigerasi tergantung *Coefficient of Performance* (COP) kompresor:

$$\dot{Q}_{\text{COP}}(t) = \text{COP}_{\text{rated}} \cdot P_{\text{elec}}(t) \cdot \eta_{\text{part-load}}(T_c(t))$$

Efisiensi *part-load* dimodelkan secara empiris oleh De Almeida et al. sebagai fungsi rasio beban: $\eta_{\text{PLF}} = 0{,}86 - 0{,}17 \cdot (P_{\text{actual}}/P_{\text{rated}})$ untuk unit kompresi uap modern.

### 2.3 Digital Twin — State-Space Synchronization dengan Extended Kalman Filter

Kembaran digital mempertahankan state vector $\mathbf{x}(t) = [T_c, T_{\text{wall}}, S_c, \text{SoH}]^T$ di mana $S_c$ adalah *remaining shelf-life* dan $\text{SoH}$ adalah *State of Health* kompresor. Sinkronisasi dengan sistem fisik dilakukan melalui *Extended Kalman Filter* (EKF) dengan langkah prediksi-koreksi:

**Prediksi:**
$$\hat{\mathbf{x}}_{k|k-1} = \mathbf{f}(\hat{\mathbf{x}}_{k-1|k-1}, \mathbf{u}_{k-1})$$
$$\mathbf{P}_{k|k-1} = \mathbf{F}_{k-1}\,\mathbf{P}_{k-1|k-1}\,\mathbf{F}_{k-1}^T + \mathbf{Q}_{k-1}$$

**Koreksi (measurement update):**
$$\mathbf{K}_k = \mathbf{P}_{k|k-1}\,\mathbf{H}_k^T\left(\mathbf{H}_k\,\mathbf{P}_{k|k-1}\,\mathbf{H}_k^T + \mathbf{R}_k\right)^{-1}$$
$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k\left(\mathbf{z}_k - \mathbf{h}(\hat{\mathbf{x}}_{k|k-1})\right)$$

di mana $\mathbf{z}_k$ adalah vektor pengukuran sensor IoE (suhu, kelembapan, posisi GPS, getaran kompresor, arus listrik), $\mathbf{Q}$ dan $\mathbf{R}$ berturut-turut adalah kovariansi *process noise* dan *measurement noise* (Wu et al., 2023). Pengaturan *tuning* $\mathbf{Q}/\mathbf{R}$ dilakukan adaptif menggunakan *innovation sequence* untuk menjamin *bounded estimation error*.

### 2.4 Model Jaringan IoE — Throughput, Latency, dan Energi

Konsumsi energi komunikasi node sensor dalam jaringan LoRa-WAN/5G NB-IoT mengikuti model:

$$E_{\text{tx}}(b, d) = \left(E_{\text{elec}} + \epsilon_{\text{amp}} \cdot d^{\alpha}\right) \cdot b$$

dengan $b$ ukuran paket (bit), $d$ jarak transmisi, $\alpha$ *path-loss exponent* (2–3,5 untuk lingkungan urban/indoor kontainer logam), $\epsilon_{\text{amp}}$ konstanta amplifier. *Quality of Service* (QoS) didefinisikan sebagai konstrain probabilitas packet delivery:

$$P_{\text{PDR}} = 1 - \left(1 - p_r\right)^{N_r} \geq P_{\text{target}}$$

di mana $p_r$ adalah *single-retry success probability* dan $N_r$ jumlah retransmisi. Taj et al. (2023) melaporkan bahwa untuk *cold chain*, $P_{\text{target}}$ harus $\geq 0{,}999$ karena paket hilang等同于 kehilangan jejak audit.

### 2.5 Fungsi Objektif Optimasi End-to-End

Total biaya rantai dingin dinormalisasi menjadi fungsi objektif multi-kriteria:

$$\min_{\mathbf{u}(t)} \; J = \int_{0}^{T}\!\left[\,w_1 \cdot C_{\text{elec}}(t) + w_2 \cdot C_{\text{spoilage}}(A(t)) + w_3 \cdot C_{\text{CO}_2}(t) - w_4 \cdot V_{\text{trust}}(t)\,\right] dt$$

dengan $w_i$ bobot kepentingan (diturunkan via *AHP* atau *stakeholder elicitation*), $C_{\text{elec}}$ biaya listrik, $C_{\text{spoilage}}$ kerugian karena degradasi kualitas, $C_{\text{CO}_2}$ *carbon cost*, dan $V_{\text{trust}}$ nilai tambah dari transparansi rantai (premium harga konsumen untuk *traceable* produk). Solusi dicapai melalui *Model Predictive Control* (MPC) horizon gulung dengan DT sebagai *internal predictor*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi platform IoE-DT mengikuti *engineering pipeline* 7-fase yang diadaptasi dari Wu et al. (2023) dan diperkuat oleh SLR Taj et al. (2023):

**Fase 1 — *Requirement Engineering* & Stakeholder Analysis.** Pemetaan *use case* dengan pendekatan *SysML*: identifikasi entitas (operator, regulator, konsumen), suhu target (mis. 2–8 °C untuk vaksin; $-25$ °C untuk seafood beku), dan *Service Level Agreement* (SLA) terkait MTTR, RTO, *maximum excursion duration*.

**Fase 2 — *Sensor Deployment & IoE Edge Layer*.** Pemasangan multisensor fusion: (i) sensor suhu DS18B20/PT1000 dengan akurasi $\pm 0{,}1$ °C, (ii) *data logger* kelembapan SHT35, (iii) GPS u-blox NEO-M8N untuk geolokasi, (iv) *three-axis accelerometer* untuk deteksi guncangan/shock, (v) *current transformer* non-invasif untuk memantau konsumsi energi kompresor. Topologi jaringan mengikuti arsitektur *edge-fog-cloud* dengan gateway Raspberry Pi/industrial PLC sebagai *edge aggregator* (Taj et al., 2023).

**Fase 3 — *Communication Backbone*.** Pilihan teknologi nirkabel mengikuti matriks trade-off: LoRaWAN untuk jangkauan >5 km dengan bit-rate rendah (cocok untuk telemetry periodik 5–15 menit); NB-IoT/5G mMTC untuk latency <1 s pada alert; BLE 5.0 untuk pairing dengan smartphone kurir di last-mile.

**Fase 4 — *Digital Twin Modeling*.** Pembangunan model termal-mekanik-elektrik di platform Siemens MindSphere, Azure Digital Twins, atau ANSYS Twin Builder. *Model parameter identification* dilakukan via *grey-box identification* dari data historis; validasi mengikuti protokol *ASME V&V 40-2018* dengan *benchmark* pada *Root Mean Square Error* (RMSE) <0,3 °C untuk prediksi suhu 30 menit ke depan.

**Fase 5 — *Analytics & AI Layer*.** Pipeline analitik: *streaming analytics* (Apache Flink/Kafka) → *feature store* → *anomaly detection* (autoencoder LSTM) → *remaining useful life* (RUL) prediction untuk