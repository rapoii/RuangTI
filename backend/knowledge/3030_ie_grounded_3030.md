# 3030 — Model Ketahanan Rantai Dingin untuk Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan laut, produk susu, hortikultura segar, dan reagen diagnostik. Menurut Khurshid & Siddiqui (2024) dalam naskah "A Resilience Model for Cold Chain Logistics of Perishable Products" (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), sistem rantai dingin modern tidak cukup hanya dirancang untuk beroperasi pada kondisi nominal, tetapi harus memiliki kemampuan *resilience* — yaitu kapasitas untuk menyerap gangguan (*absorptive capacity*), beradaptasi terhadap kondisi abnormal (*adaptive capacity*), serta memulihkan kinerja ke tingkat optimal (*restorative capacity*). Ketiga dimensi resilience ini seringkali diabaikan dalam desain rantai pasok tradisional yang hanya berfokus pada efisiensi biaya.

Urgensi industrial dari topik ini bersifat multidimensional. Dari sisi ekonomi, WHO memperkirakan bahwa hilangnya vaksin akibat *cold chain break* di negara berkembang mencapai 25–40% dari total vaksin yang didistribusikan, dengan kerugian finansial bernilai miliaran dolar AS per tahun. Dari sisi kemanusiaan, pemaparan suhu di luar rentang 2–8°C (untuk vaksin terprogram) dapat menurunkan potensi antigen (*antigenicity loss*) hingga >30% per jam pada suhu 25°C, sehingga efikasi klinis tidak lagi memenuhi ambang baku WHO PQS E006. Dari sisi regulasi, ketidakpatuhan terhadap *Good Distribution Practice* (GDP) dan WHO TRS 961 Annex 9 dapat menyebabkan penarikan produk (*batch recall*), sanksi BPOM/FDA, dan rusaknya reputasi institusi.

Konteks empiris yang sangat relevan dipaparkan oleh Putra, Defit, & Nurcahyo (2024) dalam "Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20" (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Studi kasus di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak, mengidentifikasi dua permasalahan operasional yang signifikan: (1) *cold chain box* sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantauan suhu secara *real-time*, sehingga apoteker tidak menerima peringatan dini saat terjadi *excursion* suhu; (2) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet*, yang rentan terhadap human error, keterlambatan, dan tidak mampu mendeteksi *transient excursion* yang terjadi di antara interval pencatatan. Permasalahan ini secara langsung memperlemah kapasitas *absorptive* dan *adaptive* dari rantai dingin, karena *lead time* deteksi gangguan terlalu panjang untuk memungkinkan tindakan korektif yang efektif.

Integrasi antara model konseptual resilience (Khurshid & Siddiqui, 2024) dan implementasi teknologi IoT (Putra et al., 2024) menjadi relevan karena model resilience memerlukan data granular tingkat sensor untuk menghitung parameter seperti *time-to-detection*, *recovery time*, dan *performance loss function*. Tanpa sistem akuisisi data otomatis berbasis DS18B20 — yang memiliki akurasi ±0,5°C pada rentang -10°C hingga +85°C dan resolusi 9–12 bit — model resilience hanya dapat bekerja pada level agregat dengan utilitas manajerial yang terbatas. Oleh karena itu, modul ini memposisikan diri di persimpangan antara *operations research* dan *industrial IoT* untuk memberikan kerangka kerja terpadu bagi para insinyur industri yang mengelola rantai dingin produk bernilai tinggi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resilience Sistem

Khurshid & Siddiqui (2024) mengusulkan formalisasi *system resilience* sebagai fungsi kualitatif dan kuantitatif dari waktu. Kinerja sistem pada waktu $t$ setelah terjadi gangguan pada $t_0$ dapat dinyatakan sebagai:

$$Q(t) = Q^* - L(t) \cdot R(t)$$

di mana $Q^*$ adalah kinerja nominal (*steady-state*), $L(t)$ adalah fungsi kehilangan kinerja (*performance loss*), dan $R(t) \in [0,1]$ adalah faktor pemulihan (*recovery factor*). Untuk produk rantai dingin, $Q^*$ direpresentasikan oleh *potency retention* (misalnya efikasi vaksin), sementara $L(t)$ merepresentasikan fraksi kualitas yang hilang akibat paparan suhu.

### 2.2 Model Degradasi Kualitas Termal (Arrhenius)

Degradasi produk biofarmasi mengikuti kinetika Arrhenius yang dinormalisasi terhadap suhu referensi:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana $k(T)$ adalah laju degradasi pada suhu absolut $T$ (K), $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Faktor akselerasi suhu terhadap suhu referensi $T_{ref}$ adalah:

$$AF(T) = e^{\frac{E_a}{R}\left(\frac{1}{T_{ref}} - \frac{1}{T}\right)}$$

Untuk vaksin yang khas, $E_a \approx 80$–$100$ kJ/mol, sehingga setiap kenaikan suhu 2°C di atas 8°C dapat menggandakan laju degradasi.

### 2.3 Fungsi Kehilangan Kualitas Kumulatif

Ketika produk mengalami *excursion* suhu, kualitas kumulatif yang hilang selama interval $[t_0, t_1]$ adalah:

$$\Delta Q = \int_{t_0}^{t_1} k(T(\tau)) \cdot Q(\tau) \, d\tau$$

Jika suhu dianggap konstan selama *excursion*, solusi tertutup menjadi:

$$\Delta Q = Q^* \cdot \left(1 - e^{-k(T) \cdot \Delta t}\right)$$

### 2.4 Model Pemulihan Eksponensial

Setelah tindakan korektif diterapkan (misalnya penggantian *ice pack*, restorasi catu daya), suhu kembali ke rentang nominal secara asimtotik:

$$T(t) = T_{set} + \Delta T_0 \cdot e^{-\lambda(t - t_{corr})}$$

di mana $\Delta T_0$ adalah deviasi suhu saat koreksi dimulai dan $\lambda$ adalah konstanta pemulihan (1/jam) yang bergantung pada kapasitas termal sistem dan lingkungan.

### 2.5 State-Space Markov Chain untuk Transisi Gangguan

Status operasional rantai dingin dimodelkan sebagai rantai Markov diskret dengan ruang state $S = \{S_1, S_2, S_3, S_4\}$:

- $S_1$: **Nominal** (suhu dalam rentang $T_{LSL}$ hingga $T_{USL}$)
- $S_2$: **Minor Excursion** ($|T - T_{set}| \leq 2°C$ selama $\leq 30$ menit)
- $S_3$: **Major Excursion** (deviasi 2–5°C selama $\leq 2$ jam)
- $S_4$: **Critical Excursion** (deviasi $>5°C$ atau paparan $>2$ jam)

Matriks transisi $\mathbf{P}$ berdimensi $4 \times 4$ dengan elemen $p_{ij} = P(X_{t+1} = S_j | X_t = S_i)$. Distribusi stasioner $\boldsymbol{\pi}$ memenuhi $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$ dan $\sum_i \pi_i = 1$.

### 2.6 Indeks Resilience Agregat

Berdasarkan Khurshid & Siddiqui (2024), indeks resilience dapat didefinisikan sebagai:

$$\mathcal{R} = 1 - \frac{\int_{t_0}^{t_1} |Q^*(t) - Q(t)| \, dt}{Q^* \cdot (t_1 - t_0)}$$

Nilai $\mathcal{R} \in [0, 1]$, dengan $\mathcal{R} = 1$ merepresentasikan sistem yang sepenuhnya resilient (tidak ada kehilangan kinerja) dan $\mathcal{R} = 0$ merepresentasikan *catastrophic failure*.

### 2.7 Akurasi dan Resolusi Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki karakteristik:

$$\sigma_{sensor} = \sqrt{\sigma_{noise}^2 + \sigma_{cal}^2 + \sigma_{drift}^2}$$

dengan resolusi konversi yang terkait dengan *resolution bits* $n$:

$$\Delta T_{LSB} = \frac{T_{max} - T_{min}}{2^n}$$

Untuk $n = 12$, $\Delta T_{LSB} = 0{,}0625°C$.

### 2.8 Kapabilitas Proses Six-Sigma untuk Kontrol Suhu

Indeks kemampuan proses Cpk untuk kontrol suhu:

$$C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$

Untuk spesifikasi WHO $2°C \leq T \leq 8°C$, $LSL = 2$, $USL = 8$, target $\mu = 5°C$, dengan $\sigma$ empiris dari pembacaan sensor.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT

Berdasarkan desain Putra et al. (2024), arsitektur sistem IoT untuk *cold chain box* mengikuti paradigma 4-lapisan (*perception*, *network*, *processing*, *application*):

| Lapisan | Komponen | Fungsi |
|---|---|---|
| **Perception** | Sensor DS18B20 (multiple, 1-Wire bus) | Akuisisi suhu digital dengan akurasi ±0,5°C |
| **Network** | Mikrokontroler (ESP32/Arduino) + modul WiFi/LoRa | Pengiriman data telemetri ke gateway |
| **Processing** | Server MQTT + database time-series (InfluxDB) | Penyimpanan, agregasi, dan analisis data |
| **Application** | Dashboard web/mobile + sistem notifikasi | Visualisasi real-time, peringatan SMS/email |

### 3.2 SOP Pemantauan dan Respons Gangguan

**Prosedur 1: Inisialisasi Sistem (T₀)**
1. Kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat (NIST-traceable).
2. Verifikasi *baseline* suhu selama 24 jam pada kondisi muatan penuh.
3. Dokumentasi $T_{set}$, $T_{LSL}$, $T_{USL}$, dan *response time* termal.

**Prosedur 2: Pemantauan Rutin (T₁)**
1. Akuisisi data setiap $\Delta t_{sample} = 60$ detik (sesuai rekomendasi WHO TRS 961).
2. Validasi data menggunakan *moving average filter* dengan jendela $N = 5$.
3. Penulisan ke *log sheet* digital otomatis (menggantikan pencatatan manual 2 jam oleh Putra et al., 2024).

**Prosedur 3: Deteksi dan Respons Gangguan (T₂)**
1. *Trigger alert* otomatis ketika $|T(t) - T_{set}| > \Delta T_{threshold}$ (default 1°C) selama $> 5