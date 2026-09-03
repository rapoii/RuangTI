# 1980 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Pemantauan Proses Kritis, dan Optimalisasi Siklus Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization* dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying* dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang memungkinkan stabilisasi produk biologis bernilai tinggi seperti antibodi monoklonal (*mAb*), vaksin mRNA, protein terapeutik, dan produk plasma. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* pada buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: 10.1002/9783527850303.ch4), lebih dari 50% produk biofarmasi yang baru disetujui oleh regulator antara tahun 2015–2024 memerlukan proses liofilisasi, dengan nilai pasar global mencapai USD 6,8 miliar pada 2024 dan proyeksi CAGR 8,2% hingga 2030. Kompleksitas proses ini—yang melibatkan tiga tahap berurutan yaitu pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi)—menjadikan *Process Analytical Technology* (PAT) bukan sekadar kebutuhan regulasi melainkan prasyarat strategis untuk memastikan kualitas, konsistensi, dan produktivitas.

Konteks historis menunjukkan bahwa implementasi PAT dalam liofilisasi telah mengalami evolusi signifikan sejak inisiatif FDA PAT Guidance tahun 2004. Sebelum adopsi jaringan sensor nirkabel (*Wireless Sensor Networks*/WSN), industri farmasi sangat bergantung pada termokopel kawat (*wired thermocouples*) yang ditempatkan pada vial representatif—biasanya hanya 3–5 vial dari total batch 5.000–20.000 vial—sehingga memberikan visibilitas terbatas terhadap heterogenitas termal dalam *shelf*. Keterbatasan ini berkontribusi pada *reject rate* 5–15% pada batch komersial bernilai USD 1–10 juta per batch, menimbulkan kerugian kumulatif yang sangat material bagi industri. Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) dalam bab *Emerging Technologies in Pharmaceutical Freeze-Drying* menyoroti bahwa transisi menuju WSN merupakan komponen integral dari paradigma *Industry 4.0* dalam farmasi, di mana *real-time release* (RTR) dan *continuous manufacturing* menjadi target operasional.

Urgensi penerapan WSN dalam liofilisasi didorong oleh tiga pilar ekonomi dan teknis. Pertama, **peningkatan yield**: granularitas data suhu dan tekanan pada setiap vial memungkinkan deteksi dini anomali proses (*hot spots*, *cold spots*, *choked flow*) yang secara langsung menurunkan jumlah vial失效. Kedua, **optimalisasi energi**: siklus liofilisasi mengonsumsi energi 30–50 kWh per batch; pengendalian berbasis WSN memungkinkan pengurangan *over-processing* hingga 15–25%. Ketiga, **kepatuhan regulasi**: FDA dan EMA semakin mendorong pendekatan Quality-by-Design (QbD) dengan ruang desain (*design space*) yang memerlukan bukti empiris berbasis sensor terdistribusi. Keunggulan teknis WSN—fleksibilitas pemasangan tanpa menembus dinding ruang vakum stainless steel, kemampuan *retrofit* pada *freeze dryer*legacy, dan skalabilitas ke ribuan node—menjadikannya solusi dominan yang akan menggantikan pendekatan konvensional dalam dekade mendatang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Mekanisme sublimasi selama pengeringan primer dikuantifikasi melalui model perpindahan panas konduktif melalui vial dan *shelf*, ditambah perpindahan massa melalui lapisan kering produk. Persamaan dasar laju sublimasi menurut pendekatan *Pikal* diturunkan sebagai berikut:

$$G_{sub} = \frac{P_{ice}(T_p) - P_c}{R_p}$$

di mana $G_{sub}$ adalah fluks sublimasi (g·cm⁻²·h⁻¹), $P_{ice}(T_p)$ adalah tekanan uap es pada suhu produk $T_p$ (Torr), $P_c$ adalah tekanan ruang (Torr), dan $R_p$ adalah resistansi massa produk kering (cm²·Torr·h·g⁻¹). Tekanan uap es mengikuti persamaan *Antoine* atau aproksimasi *Clausius-Clapeyron*:

$$\ln P_{ice}(T) = -\frac{A}{T} + B$$

dengan parameter tipikal $A = 6144,69$ K dan $B = 24,72$ untuk es pada rentang 173–273 K. Keseimbangan energi pada vial memberikan:

$$\frac{dQ}{dt} = A_v \cdot K_v (T_s - T_b) + A_v \cdot K_c (T_s - T_b)$$

di mana $K_v$ adalah koefisien transfer panas vial (kal·s⁻¹·cm⁻²·K⁻¹), $K_c$ adalah koefisien konduksi melalui kontak *shelf*–vial, $T_s$ adalah suhu *shelf*, dan $T_b$ adalah suhu dasar vial.

### 2.2 Model Saluran Transmisi Nirkabel dalam Lingkungan Vakum

Tantangan fundamental WSN dalam ruang liofilisasi adalah propagasi gelombang elektromagnetik melalui dinding logam (*Faraday cage*) dan lingkungan vakum dengan tekanan 0,01–1,0 mbar. Model propagasi *Friis* dalam ruang bebas menjadi basis perhitungan:

$$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$$

dengan $P_t$ dan $P_r$ adalah daya transmisi dan terima (W), $G_t$, $G_r$ adalah gain antena, $\lambda = c/f$ adalah panjang gelombang (m), dan $d$ adalah jarak (m). Dalam ruang vakum dengan konduktivitas dinding baja nirkarat $\sigma \approx 1,4 \times 10^6$ S·m⁻¹, kehilangan tambahan akibat penetrasi Faraday cage dihitung sebagai:

$$\alpha_{metal} = \sqrt{\pi f \mu_0 \sigma}$$

Pada frekuensi ISM 2,4 GHz dan tebal dinding 3 mm, atenuasi mencapai ≈ 80 dB, sehingga memerlukan antena internal dan gateway berdaya rendah (*low-power gateway*) dengan protokol seperti BLE 5.0, Zigbee, atau LoRa yang di-tuning untuk aplikasi *medical body area network*.

### 2.3 Konsumsi Daya Node Sensor

Setiap node WSN harus beroperasi pada daya terbatas (baterai lithium atau *energy harvesting* termoelektrik) selama siklus 48–120 jam. Konsumsi total mengikuti:

$$E_{node} = \sum_{i=1}^{N} \left( P_{tx,i} \cdot t_{tx,i} + P_{rx,i} \cdot t_{rx,i} + P_{sleep} \cdot t_{sleep} + P_{sens} \cdot t_{sens} \right)$$

Untuk node sensor suhu resistansi platinum (Pt1000) dengan akuisisi 1 Hz dan transmisi burst setiap 60 detik pada duty cycle 0,5%, total konsumsi per siklus tipikal berada pada orde 150–400 mWh.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam lini produksi liofilisasi mengikuti kerangka *V-model* yang mengintegrasikan desain, validasi, dan operasi sesuai **ASTM E2503**, **GAMP 5**, dan **FDA PAT Guidance**. Prosedur operasional standar (SOP) mencakup tujuh tahapan sistematis:

**Tahap 1 — Analisis Kebutuhan Proses.** Identifikasi *Critical Quality Attributes* (CQA) seperti suhu produk maksimum $T_{p,max}$ (harus < collapse temperature $T_c$ − 3°C) dan kadar air residual < 1,0%. Tentukan *Critical Process Parameters* (CPP) yang akan dipantau: suhu *shelf*, tekanan ruang, laju sublimasi, dan *endpoint* pengeringan primer.

**Tahap 2 — Desain Arsitektur Jaringan.** Topologi *star* atau *mesh* dipilih berdasarkan skala batch. Untuk batch ≤ 2.000 vial digunakan topologi *star* tunggal dengan gateway di dalam ruang melalui *feedthrough* vakum khusus; untuk batch > 2.000 vial, topologi *cluster-tree* dengan router per *shelf* memberikan redundansi. Penempatan node sensor mengikuti **stratified random sampling** dengan minimal 3 vial per *shelf* pada posisi *edge*, *center*, dan *inter-quadrant* untuk menangkap gradien termal.

**Tahap 3 — Kalibrasi dan Kualifikasi Sensor.** Setiap node dikalibrasi terhadap standar referensi NIST dalam rentang −50°C hingga +50°C dengan akurasi ±0,3°C. Kualifikasi instalasi (**IQ**), operasional (**OQ**), dan performa (**PQ**) dilakukan sesuai protokol *User Requirements Specification* (URS).

**Tahap 4 — Integrasi Sistem Akuisisi Data.** Platform *Supervisory Control and Data Acquisition* (SCADA) atau sistem *Process History Management* (PHM) seperti **Siemens SIPAT**, **Sartorius PAT Plus**, atau **Optimal* Lyophilization* by SP Scientific** digunakan untuk menginkorporasikan data WSN ke dalam kontrol loop.

**Tahap 5 — Pemodelan Prediktif dan Kontrol Adaptif.** Data WSN