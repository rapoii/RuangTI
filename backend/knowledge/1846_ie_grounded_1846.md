# 1846 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products) dan Integrasi Sistem Pemantauan IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari manajemen rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, biofarmaka, produk darah, makanan segar, dan bahan kimia tertentu. Menurut Khurshid dan Siddiqui (2024) dalam papernya yang berjudul *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), gangguan kecil pada suhu penyimpanan tidak hanya menurunkan kualitas produk, melainkan juga dapat memicu kerugian finansial masif, bahkan risiko keselamatan publik ketika produk yang dimaksud adalah vaksin. Studi tersebut mengusulkan kerangka resiliensi yang mengintegrasikan kapasitas absorpsi (penyerapan guncangan), adaptasi (penyesuaian operasional), dan restorasi (pemulihan cepat) ke dalam satu model kuantitatif yang dapat diukur.

Konteks empiris yang sangat relevan disajikan oleh Putra, Defit, dan Nurcahyo (2024) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka mendokumentasikan dua masalah struktural pada cold chain box vaksin: (i) ketiadaan sistem peringatan dini realtime ketika suhu melebihi ambang batas 2–8°C akibat kerusakan internal (kompresor, refrigeran) maupun eksternal (gangguan listrik, paparan matahari), dan (ii) pencatatan suhu manual setiap dua jam pada *log sheet* yang sangat rentan terhadap human error, keterlambatan, dan kehilangan jejak audit (*audit trail*). Dalam skala industri, pola problematika ini persis sama dengan yang dialami operator makanan laut beku, distributor farmasi global, hingga transporter produk bioteknologi.

Urgensi perancangan model resiliensi cold chain menjadi semakin nyata ketika memperhitungkan data WHO yang menyatakan bahwa lebih dari 50% vaksin global terbuang sia-sia karena kegagalan rantai dingin. Secara ekonomi, FAO memperkirakan bahwa sekitar 14% pangan dunia hilang pascapanen, sebagian besar disebabkan oleh pelanggaran suhu pada rantai pasok. Dalam konteks Teknik Industri, masalah ini bukan sekadar persoalan teknologi pendingin, melainkan masalah keandalan sistem (*system reliability*), kontrol proses statistik, dan desain jaringan yang resilient. Oleh karena itu, modul 1846 ini akan membahas bagaimana model resiliensi Khurshid–Siddiqui (2024) dapat dioperasionalisasikan melalui integrasi arsitektur IoT berbasis sensor DS18B20 sebagaimana dibuktikan oleh Putra et al. (2024), guna membangun cold chain yang tidak hanya terkontrol, tetapi juga mampu pulih secara otomatis dari disrupsi.

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi cold chain yang dibangun oleh Khurshid dan Siddiqui (2024) berpijak pada kerangka Bruneau *Resilience Triangle* yang diperluas dengan empat dimensi: *Technical, Organizational, Economic,* dan *Social* (TOSE). Indeks resiliensi sistem didefinisikan sebagai:

$$RI = \int_{t_0}^{t_1} \left[1 - \frac{Q(t)}{Q_0}\right] dt$$

di mana $Q(t)$ adalah fungsi kualitas produk (0–100%) pada waktu $t$, $Q_0$ adalah kualitas awal, $t_0$ adalah waktu disrupsi terjadi, dan $t_1$ adalah waktu sistem dipulihkan. Semakin kecil luas segitiga di bawah kurva degradasi, semakin tinggi resiliensi sistem.

### 2.1 Degradasi Kualitas Produk (Arrhenius Kinetics)

Untuk produk vaksin dan biofarmaka, degradasi mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-E_a / R \cdot T}$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor frekuensi, $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Khurshid & Siddiqui (2024) mengadopsi parameter $E_a = 83{,}680$ J/mol untuk vaksin umum, sehingga setiap kenaikan suhu 1°C di atas ambang batas 8°C melipatgandakan laju degradasi secara eksponensial.

### 2.2 Kapasitas Absorpsi, Adaptasi, dan Restorasi

Model resiliensi cold chain secara kuantitatif dipecah menjadi tiga kapasitas:

$$R_{system} = f(A_{abs}, A_{adap}, A_{rest})$$

- **Kapasitas Absorpsi** $A_{abs}$: kemampuan sistem menahan guncangan tanpa degradasi signifikan. Formulasi:

$$A_{abs} = \frac{T_{critical} - T_{operating}}{T_{operating}} \cdot C_{thermal}$$

dengan $T_{critical}$ adalah suhu ambang batas, $T_{operating}$ adalah suhu operasional, dan $C_{thermal}$ adalah kapasitas termal sistem (J/K).

- **Kapasitas Adaptasi** $A_{adap}$: kemampuan melakukan reconfigurasi real-time, misal redirect rute, aktivasi genset, atau isolasi kontainer rusak:

$$A_{adap} = 1 - e^{-\lambda_{redundancy} \cdot t}$$

- **Kapasitas Restorasi** $A_{rest}$: kecepatan pemulihan setelah disrupsi, dimodelkan sebagai:

$$A_{rest} = \frac{1}{\text{MTTR}} \cdot \eta_{recovery}$$

dengan MTTR (*Mean Time To Repair*) adalah rata-rata waktu perbaikan.

### 2.3 Keandalan Sensor IoT (Sensor DS18B20)

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$ dan resolusi 9–12 bit. Ketidakpastian pengukuran mengikuti:

$$\sigma_{total} = \sqrt{\sigma_{sensor}^2 + \sigma_{kalibrasi}^2 + \sigma_{noise}^2}$$

Untuk DS18B20 pada konfigurasi 12-bit, $\sigma_{sensor} \approx 0{,}1°C$, dan dengan jumlah sampel $n$ dalam satu interval polling, kesalahan baku rata-rata menjadi:

$$SE_{\bar{T}} = \frac{\sigma_{total}}{\sqrt{n}}$$

### 2.4 Kontrol Proses Statistik (SPC) untuk Cold Chain

Untuk deteksi anomali suhu, Khurshid & Siddiqui (2024) mereapkan peta kontrol Shewhart:

$$\text{UCL} = \mu + 3\sigma, \quad \text{LCL} = \mu - 3\sigma$$

di mana $\mu$ adalah suhu target (umus 5°C) dan $\sigma$ adalah deviasi standar historis. Pelanggaran batas ini menandakan *out-of-control* yang harus memicu alarm.

### 2.5 Indeks Efektivitas Cold Chain (CCPI)

Indeks komposit untuk evaluasi keseluruhan:

$$CCPI = \frac{\sum_{i=1}^{n} w_i \cdot P_i}{\sum_{i=1}^{n} w_i}$$

dengan $w_i$ adalah bobot kriteria (suhu, waktu, dokumentasi, traceability), dan $P_i$ adalah skor performa (0–100).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi Khurshid–Siddiqui di lapangan mengikuti SOP tujuh langkah yang telah divalidasi oleh Putra et al. (2024) di konteks UPTD Farmasi:

**Langkah 1 — Pemetaan Rantai Nilai (*Value Stream Mapping*):** Identifikasi setiap titik kritis suhu dari pabrik hingga titik akhir distribusi. Setiap node diberi target $T_{operating}$ dan $T_{critical}$.

**Langkah 2 — Instalasi Sensor IoT:** Sensor DS18B20 dipasang pada cold chain box dengan topologi *1-Wire* dan mikrokontroler (NodeMCU ESP8266) sebagai gateway. Sampling rate $f_s = 0{,}5$ Hz (setiap 2 detik), sesuai teorema Nyquist $f_s \geq 2f_{max}$ untuk menangkap fluktuasi suhu cepat.

**Langkah 3 — Kalibrasi & Validasi:** Kalibrasi dua titik (es melting 0°C dan air boiling 100°C terkoreksi tekanan atmosfer) menghasilkan sertifikat dengan $\sigma_{kalibrasi} < 0{,}05°C$.

**Langkah 4 — Pembangunan Dashboard Realtime:** Data dikirim ke server via WiFi/MQTT, divisualisasikan dalam dasbor Grafana, dengan alert otomatis ke apoteker via Telegram API saat suhu > 8°C atau < 2°C.

**Langkah 5 — Penerapan SPC:** Batas kontrol Shewhart dihitung otomatis dari 30 hari data historis; alarm *Western Electric Rules* (1 titik di luar 3σ, 2 dari 3 titik di luar 2σ, dsb.) diimplementasikan untuk deteksi dini.

**Langkah 6 — Redundansi & Failover:** Kapasitas absorpsi ditingkatkan dengan phase-change material (PCM) pada dinding cold chain box, kapasitas adaptasi dengan genset otomatis, dan kapasitas restorasi dengan SOP tanggap darurat 30 menit.

**Langkah 7 — Audit & Continuous Improvement:** Audit internal bulanan menggunakan CCPI sebagai KPI utama, dengan target minimal 95%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah cold chain box berisi 200 vial vaksin sensitif (volume total 2 L) di UPTD Farmasi Kabupaten Siak. Suhu operasional ditargetkan $T_{op} = 5°C$, dengan ambang kritis atas $T_{c} = 8°C$. Pada pukul 09:00 terjadi pemadaman listrik; genset hidup pada pukul 09:35 (delay 35 menit). Sebelum genset aktif, suhu naik mengikuti konduksi termal box dengan koefisien $k_{box} = 0{,}15$ W/(m·K), luas permukaan $A = 0{,}8$ m², ketebalan insulasi $d = 0{,}04$ m, suhu lingkungan $T_{env} = 32°C$.

**Hitung laju kenaikan suhu:**

$$\frac{dT}{dt} = \frac{k_{box} \cdot A \cdot (T_{env} - T)}{m \cdot c_p \cdot d}$$

dengan $m = 6$ kg (massa box + vial), $c_p = 2500$ J/(kg·K). Substitusi:

$$\frac{dT}{dt} = \frac{0{,}15 \cdot 0{,}8 \cdot (32 - 5)}{6 \cdot 2500 \cdot 0{,}04} = \frac{3{,}24}{600} = 0{,}0054 \text{ °C/s}$$

Dalam 35 menit (2100 detik), kenaikan suhu:

$$\Delta T = 0{,}0054 \times 2100 = 11{,}34°C$$

Ini melewati $T_{c} = 8°C$ pada waktu $t^* = 8 / 0{,}0054 \approx 1481$ s ≈ 24,7 menit. Artinya, vaksin sudah mulai mengalami degradasi termal sejak menit ke-24,7.

**Hitung degradasi kualitas dengan Arrhenius:**

Pada $T = 8°C = 281{,}15$ K:

$$k(281{,}15) = A \cdot