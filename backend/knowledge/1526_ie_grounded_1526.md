# 1526 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Framework Ketahanan Sistem dan Pemantauan IoT Realtime

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk farmasi biologis, makanan segar, serta bahan kimia sensitif termal. Menurut Khurshid & Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), integritas cold chain sangat ditentukan oleh kemampuan sistem untuk mempertahankan kontinuitas suhu meskipun terjadi gangguan (*disruption*) internal maupun eksternal. Gangguan tersebut dapat berupa kegagalan refrigerasi, keterlambatan transportasi, pemadaman listrik, kesalahan prosedur operator, maupun *bottleneck* pada titik distribusi. Tanpa mekanisme resiliensi yang terukur, setiap deviasi suhu di luar ambang batas dapat menyebabkan kerusakan produk secara irreversibel, sehingga model resiliensi cold chain menjadi kebutuhan strategis bagi industri farmasi, makanan, dan kimia.

Konteks permasalahan di lapangan Indonesia semakin mempertegas urgensi topik ini. Putra, Defit, dan Nurcahyo (2024) dalam artikelnya di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus nyata di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka menemukan bahwa cold chain box sebagai media penyimpanan dan pendingin vaksin belum dilengkapi alat pemantauan suhu secara *realtime* yang mampu memberikan peringatan dini (*early warning*) kepada apoteker ketika suhu melebihi ambang 2–8°C akibat kerusakan internal maupun eksternal. Selain itu, proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet*, yang rentan terhadap human error, keterlambatan pencatatan, serta tidak mampu memberikan respons cepat saat terjadi ekskursi suhu mendadak. Risiko degradasi mutu vaksin—yang berpotensi menurunkan efikasi hingga titik tak layak pakai—menjadi konsekuensi langsung yang merugikan dari segi klinis, ekonomis, maupun reputasi kelembagaan.

Secara ekonomis, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia akibat kegagalan cold chain, sementara industri makanan segar mengalami kerugian pasca-panen hingga 30–40% di negara berkembang. Oleh karena itu, modul ini menyintesiskan kerangka resiliensi dari Khurshid & Siddiqui (2024) dengan pendekatan teknologi IoT berbasis sensor DS18B20 yang diusulkan oleh Putra *et al.* (2024) untuk membangun model cold chain yang adaptif, responsif, dan terukur secara kuantitatif. Pendekatan integratif ini memungkinkan insinyur industri merancang sistem yang tidak hanya *robust* terhadap gangguan tetapi juga memiliki kapasitas *recovery* cepat dan kemampuan adaptasi jangka panjang.

## 2. Landasan Teori & Formulasi Matematis

Kerangka resiliensi cold chain dalam modul ini dibangun di atas empat pilar resiliensi sistem yang diformalisasikan oleh Bruneau *et al.* dan diadaptasi oleh Khurshid & Siddiqui (2024): **Robustness (R), Redundancy (Re), Resourcefulness (Rs), dan Rapidity (Ra)**. Indeks resiliensi sistem $\Psi$ didefinisikan sebagai fungsi dari empat dimensi tersebut:

$$\Psi = f(R, Re, Rs, Ra) = \alpha \cdot R + \beta \cdot Re + \gamma \cdot Rs + \delta \cdot Ra$$

dengan $\alpha, \beta, \gamma, \delta$ adalah bobot kepentingan relatif yang memenuhi $\alpha + \beta + \gamma + \delta = 1$ dan ditentukan melalui Analytical Hierarchy Process (AHP) berdasarkan prioritas organisasi.

### 2.1 Model "Resilience Triangle" untuk Ekskursi Suhu

Khurshid & Siddiqui (2024) mengadaptasi konsep *resilience triangle* untuk mengkuantifikasi degradasi kualitas produk selama periode gangguan. Jika $Q(t)$ adalah fungsi kualitas relatif terhadap waktu dengan $Q(0)=1$ (kondisi ideal) dan $Q(t_r)=Q_{min}$ saat sistem pulih pada waktu $t_r$, maka kehilangan kualitas kumulatif dinyatakan sebagai:

$$L = \int_0^{t_r} \left[1 - Q(t)\right] dt$$

Untuk produk farmasi seperti vaksin yang mengalami degradasi mengikuti kinetika Arrhenius, laju degradasi $k(T)$ terhadap suhu $T$ (dalam Kelvin) diberikan oleh:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), dan $R_g = 8{,}314$ J/(mol·K) konstanta gas universal. Penurunan potensi vaksin pada suhu aktual $T$ selama waktu paparan $\Delta t$ mengikuti:

$$P(t) = P_0 \cdot \exp\left[-k(T) \cdot \Delta t\right]$$

### 2.2 Model Probabilitas Kegagalan Cold Chain

Putra *et al.* (2024) menyoroti bahwa sistem cold chain konvensional memiliki laju kegagalan yang dapat dimodelkan dengan distribusi Weibull, karena tingkat kegagalannya meningkat seiring waktu (*increasing hazard*). Fungsi reliabilitas cold chain box:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^\beta\right]$$

dengan $\eta$ adalah *scale parameter* (umur karakteristik) dan $\beta$ adalah *shape parameter*. Untuk sistem refrigeration farmasi, tipikal $\beta > 1$ menandakan *wear-out failure*.

### 2.3 Akurasi Sensor dan Model Pengukuran IoT

Sensor DS18B20 yang digunakan oleh Putra *et al.* (2024) memiliki resolusi 9–12 bit dengan akurasi $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$. Kesalahan pengukuran total mengikuti model:

$$\epsilon_{total} = \sqrt{\epsilon_{sensor}^2 + \epsilon_{kalibrasi}^2 + \epsilon_{transmisi}^2}$$

Akurasi sistem pemantauan *realtime* menghasilkan *detection latency* $L_d$ yang jauh lebih rendah dibanding pencatatan manual 2 jam:

$$L_d^{IoT} = \frac{1}{f_s} + \tau_{network} + \tau_{alert}$$

dengan $f_s$ frekuensi sampling, $\tau_{network}$ latensi jaringan, dan $\tau_{alert}$ waktu aktivasi alarm. Untuk konfigurasi DS18B20 dengan $f_s = 0{,}1$ Hz, $\tau_{network} \approx 1$ s, dan $\tau_{alert} \approx 0{,}5$ s, diperoleh $L_d^{IoT} \approx 11{,}5$ detik, atau **lebih baik 624× lipat** dibanding $L_d^{manual} = 7200$ s.

### 2.4 Indeks Resiliensi Komposit

Menggabungkan elemen degradasi kualitas dan kemampuan deteksi, indeks resiliensi komposit untuk cold chain didefinisikan:

$$\Psi_{cold} = \frac{1}{L} \cdot \frac{1}{L_d} \cdot Re$$

Semakin rendah kehilangan kualitas $L$ dan latensi deteksi $L_d$, serta semakin tinggi redundansi $Re$, semakin resilien sistem tersebut.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi cold chain mengikuti SOP berjenjang yang mengintegrasikan arsitektur IoT dari Putra *et al.* (2024) dengan framework kuantitatif dari Khurshid & Siddiqui (2024). Prosedur operasi standar disusun dalam delapan tahap sistematis:

**Tahap 1 — Pemetaan Rantai Nilai (*Value Stream Mapping*).** Identifikasi seluruh titik kritis cold chain dari lini produksi hingga titik administrasi, termasuk *cold storage warehouse*, refrigerated truck, last-mile cooler, dan cold chain box. Setiap node diberi parameter: kapasitas, suhu target, MTBF, dan variabilitas lingkungan.

**Tahap 2 — Penentuan Ambang Batas Kritis.** Berdasarkan standar WHO PQS E001 dan Indonesian Pharmacopoeia, suhu untuk sebagian besar vaksin adalah 2–8°C. Zona aman didefinisikan sebagai $T_{min} \leq T(t) \leq T_{max}$ dengan margin operasional $\Delta T_{op} = 1°C$.

**Tahap 3 — Deployment Jaringan Sensor IoT.** Sensor DS18B20 dipasang pada setiap cold chain box menggunakan protokol 1-Wire, kemudian diintegrasikan dengan mikrokontroler (Arduino/ESP32) yang terhubung ke gateway berbasis MQTT/HTTP. Arsitektur mengikuti rekomendasi Putra *et al.* (2024) dengan topologi star untuk cold room dan mesh untuk armada mobile.

**Tahap 4 — Konfigurasi Sistem Peringatan Dini.** Ambang batas peringatan (*warning threshold*) ditetapkan pada $T = 8{,}5°C$ dan *critical alert* pada $T = 10°C$. Notifikasi dikirim ke apoteker melalui SMS, aplikasi mobile, dan sirene lokal. Mekanisme ini menggantikan prosedur manual pencatatan setiap 2 jam yang disebutkan Putra *et al.* (2024).

**Tahap 5 — Kalibrasi dan Validasi.** Sensor dikalibrasi menggunakan *reference thermometer* bersertifikat NIST dengan titik kalibrasi 0°C, 4°C, dan 25°C. Validasi dilakukan dengan *paired t-test* pada $n \geq 30$ pembacaan.

**Tahap 6 — Penentuan Bobot AHP.** Pakar (apoteker senior, logistik, manajemen) mengisi matriks pairwise comparison untuk menentukan $\alpha, \beta, \gamma, \delta$. Uji konsistensi: $CR = CI/RI < 0{,}10$.

**Tahap 7 — Komputasi Indeks Resiliensi.** Hitung $\Psi_{cold}$ untuk setiap skenario gangguan menggunakan formula pada Bagian 2.4. Benchmark nilai $\Psi_{cold} \geq 0{,}75$ sebagai target operational excellence.

**Tahap 8 — Continuous Improvement Loop.** Data historis di-*regress* untuk memperbarui parameter model dan mendeteksi *drift* sistem. *Plan-Do-Check-Act* (PDCA) diimplementasikan setiap kuartal.

Diagram alir proses logika peringatan dini mengikuti urutan: **Sensor Baca → ADC Konversi → Filter Digital (Moving Average n=5) → Threshold Check → IF (T > 8,5°C) THEN Warning → IF (T > 10°C) THEN Critical Alert + Aktivasi Backup Cooling**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** UPTD Farmasi Kabupaten Siak mengelola 1.000 vial vaksin COVID-19 (Comirnaty®) dengan nilai total Rp 1,2 miliar. Cold chain box menggunakan refrigerated unit dengan parameter: $\eta = 8.760$ jam, $\beta = 2{,}3$ (Weibull), suhu target 4°C dengan ambang kritis 8°C.

### 4.1 Perhitungan Degradasi Kualitas Vaksin Saat Gangguan Refrigerasi

Misalkan terjadi pemadaman listrik selama $\Delta t = 4$ jam, suhu箱箱box naik dari 4°C menjadi 12°C mengikuti model transien termal orde pertama:

$$T(t) = T_{amb} - (T_{amb} - T_0) \cdot e^{-t/\tau_t}$$

dengan $T_{amb} = 30°C$ (suhu ambient Indonesia tropis) dan konstanta waktu termal $\tau_t = 3$ jam. Pada $t = 4$ jam:

$$T(4) = 30 - (30-