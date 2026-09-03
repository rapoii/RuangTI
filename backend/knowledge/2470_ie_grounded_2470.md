# 2470 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup sektor farmasi (vaksin, produk biologis), pangan (daging, ikan, susu, buah segar), dan kimia khusus. Kerentanan sistem ini muncul dari tiga karakteristik simultan: (i) degradasi kualitas bersifat *time-temperature dependent* (Arrhenius kinetics), (ii) kerusakan sering kali *irreversible* setelah melewati ambang batas suhu kritis, dan (iii) paparan kegagalan tunggal (*single point of failure*) pada simpul transportasi, penyimpanan, atau transisi antarmoda. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa kemampuan pulih (*resilience*) rantai dingin bukan sekadar pencegahan disrupsi, melainkan kapasitas sistem untuk mempertahankan tingkat kinerja minimum ketika menghadapi guncangan internal maupun eksternal.

Konteks empiris permasalahan ini sangat kuat. Laporan Food and Agriculture Organization (FAO) menunjukkan sekitar 14% pangan dunia hilang antara fase panen hingga ritel, di mana pelanggaran suhu merupakan kontributor utama. Di sisi farmasi, World Health Organization (WHO) menetapkan standar penyimpanan vaksin pada rentang +2°C hingga +8°C, dengan deviasi singkat di luar rentang tersebut berpotensi menurunkan potensi (*potency*) produk secara kumulatif. Putra, Defit, dan Nurcahyo (2024) mendokumentasikan secara spesifik kasus pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, Indonesia, di mana cold chain box sebagai media penyimpanan dan pendingin vaksin belum dilengkapi alat pemantauan suhu *real-time* ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Proses pencatatan suhu masih dilakukan secara manual setiap dua jam oleh apoteker pada *log sheet* kertas, yang mengandung risiko *human error*, keterlambatan deteksi anomali, dan tidak adanya peringatan otomatis (*alert*) ketika suhu cold chain box naik akibat kerusakan internal (misalnya kompresor) maupun eksternal (misalnya paparan matahari atau kegagalan catu daya). Kedua paper tersebut saling melengkapi: Khurshid & Siddiqui (2024) menyediakan kerangka model resiliensi kuantitatif, sedangkan Putra et al. (2024) menyediakan justifikasi empiris kebutuhan instrumentasi *real-time* sebagai *enabler* resiliensi.

Urgensi pengembangan model resiliensi cold chain didorong oleh tiga faktor simultan: globalisasi rantai pasok farmasi pascapandemi COVID-19, meningkatnya kompleksitas jaringan distribusi jarak jauh, dan meningkatnya frekuensi kejadian ekstrem (perubahan iklim, gejolak geopolitik) yang mengganggu simpul logistik. Dalam perspektif Teknik Industri, cold chain dipandang sebagai *socio-technical system* yang menggabungkan elemen fisik (peralatan refrigerasi, kemasan, moda transportasi), elemen informasi (sensor, telemetri, sistem peringatan), dan elemen prosedural (SOP, rencana kontinjensi, kapasitas respons). Permasalahan utamanya adalah bagaimana mengkuantifikasi *trade-off* antara investasi instrumentasi, redundansi jaringan, dan kapasitas pemulihan terhadap risiko kerugian produk.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Fungsi Reliabilitas dan Laju Kegagalan

Model resiliensi cold chain dimulai dari karakterisasi reliabilitas komponen kritis. Untuk sistem refrigerasi dan sensor, laju kegagalan diasumsikan mengikuti distribusi eksponensial:

$$R(t) = e^{-\lambda t}, \quad t \geq 0$$

dengan $R(t)$ adalah probabilitas sistem beroperasi tanpa kegagalan hingga waktu $t$, dan $\lambda$ adalah *laju kegagalan konstan* (asumsi memori Markov). *Mean Time Between Failures* diperoleh dari integral fungsi reliabilitas:

$$MTBF = \int_{0}^{\infty} R(t) \, dt = \frac{1}{\lambda}$$

Untuk sistem cold chain box terintegrasi IoT yang dilaporkan Putra et al. (2024), laju kegagalan kompresor portabel tipikal berada pada $\lambda \approx 0{,}0008$ kegagalan/jam, sehingga $MTBF \approx 1.250$ jam.

### 2.2 Ketersediaan Sistem (Availability)

Ketersediaan dihitung sebagai rasio waktu operasional terhadap total waktu siklus, mempertimbangkan waktu pemulihan (*Mean Time To Repair*, MTTR):

$$A = \frac{MTBF}{MTBF + MTTR} = \frac{\mu}{\lambda + \mu}$$

dengan $\mu = 1/MTTR$ adalah laju perbaikan. Dengan target MTTR = 4 jam pada cold chain box berkapasitas teknisi lapangan:

$$A = \frac{1250}{1250 + 4} \approx 0{,}9968 = 99{,}68\%$$

Nilai ini memenuhi standar industri farmasi Grade A (minimal 99,5%).

### 2.3 Indeks Resiliensi Kuantitatif

Merujuk pada kerangka yang dibangun Khurshid dan Siddiqui (2024), indeks resiliensi didefinisikan sebagai kemampuan sistem untuk kembali ke kinerja nominal setelah disrupsi. Indeks resiliensi dapat diformulasikan sebagai rasio kinerja aktual terhadap kinerja nominal selama *recovery window* $[t_d, t_d + \tau_r]$:

$$\Psi = \frac{1}{\tau_r \cdot P_{nom}} \int_{t_d}^{t_d + \tau_r} P(t) \, dt$$

dengan $P(t)$ adalah fungsi kinerja sistem (misalnya rasio suhu aktual terhadap suhu nominal, dinormalisasi 0–1), $P_{nom}$ adalah kinerja nominal (1,0), $t_d$ adalah waktu deteksi disrupsi, dan $\tau_r$ adalah *recovery time*. Nilai $\Psi \in [0,1]$; semakin mendekati 1, semakin resilien sistem tersebut.

### 2.4 Model Markov Dua-Negara untuk Sensor

Untuk subsistem sensor suhu (DS18B20 pada sistem yang dirancang Putra et al., 2024), transisi keadaan didefinisikan sebagai *Operasional* ($S_0$) dan *Failure* ($S_1$). Probabilitas steady-state:

$$\pi_0 = \frac{\mu}{\lambda + \mu}, \quad \pi_1 = \frac{\lambda}{\lambda + \mu}$$

### 2.5 Expected Loss Function

Kerugian ekonomi total akibat disrupsi cold chain dimodelkan sebagai:

$$E[L] = P_{dis} \cdot \left( V_{spoil} + C_{recovery} + C_{reputation} \right)$$

dengan $P_{dis}$ probabilitas disrupsi, $V_{spoil}$ nilai produk rusak, $C_{recovery}$ biaya pemulihan, dan $C_{reputation}$ kerugian reputasi (kualitatif-kuantitatif).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT

Berdasarkan arsitektur yang dirancang Putra et al. (2024) untuk cold chain box vaksin UPTD Farmasi Dinas Kesehatan Kabupaten Siak, sistem IoT tersusun atas empat lapisan:

1. **Lapisan Persepsi (*Perception Layer*)**: Sensor DS18B20 (rentang -55°C hingga +125°C, akurasi ±0,5°C, resolusi 9–12 bit) ditempatkan pada tiga titik kritis cold chain box (dekat evaporator, tengah ruang, dekat dinding luar). Mikrokontroler ESP32 mengelola akuisisi data dengan interval sampling $\Delta t = 30$ detik.
2. **Lapisan Jaringan (*Network Layer*)**: Transmisi nirkabel menggunakan protokol MQTT (Message Queuing Telemetry Transport) melalui Wi-Fi; *payload* berisi timestamp, ID sensor, dan nilai suhu terenkripsi AES-128.
3. **Lapisan Pemrosesan (*Processing Layer*)**: Server *cloud* (GCP/AWS) menjalankan logika ambang batas (alert threshold) sesuai standar WHO: *lower limit* $T_L = 2°C$, *upper limit* $T_U = 8°C$.
4. **Lapisan Aplikasi (*Application Layer*)**: Dasbor web dan notifikasi SMS/WhatsApp kepada apoteker dengan protokol *escalation* tiga tingkat: warning ($\pm 0{,}5°C$ dari batas), alert (pelanggaran $>5$ menit), dan critical (pelanggaran $>30$ menit).

### 3.2 Diagram Alir SOP Respon