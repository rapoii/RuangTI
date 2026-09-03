# 1558 — Model Resiliensi untuk Rantai Dingin Logistik Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products — Desain Sistem Pemantauan & Pemulihan Termal Berbasis Internet of Things (IoT)
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *A Resilience Model for Cold Chain Logistics of Perishable Products*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20*. Jurnal KomtekInfo, 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam manajemen rantai pasok produk mudah rusak (*perishable products*) yang mencakup produk farmasi (vaksin, insulin, plasma darah), produk pangan (daging, ikan, susu, buah segar), hingga produk bioteknologi. Menurut Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), integritas termal rantai dingin menjadi penentu utama kualitas, kemanjuran, dan keamanan produk di titik konsumsi akhir (*point-of-care/end-user*). Gangguan sekecil apa pun pada suhu penyimpanan di luar ambang batas yang dipersyaratkan — seperti pelanggaran rentang $2^\circ\text{C}$–$8^\circ\text{C}$ untuk vaksin sensitif (Putra dkk., 2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) — dapat memicu degradasi irreversible pada struktur molekul produk.

Urgensi ekonomi dan operasional dari topik ini bersifat multidimensional. Pertama, dari sisi kerugian ekonomi global, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang sia-sia setiap tahunnya akibat kegagalan cold chain logistics, terutama di negara berkembang. Kedua, dari sisi rekayasa sistem, distribusi produk farmasi dan pangan memerlukan jaringan yang terdistribusi secara geografis dengan banyak titik transfer (hub pergudangan, moda transportasi multi-segmen, fasilitas penyimpanan tujuan), di mana setiap titik tersebut merupakan potensi *single point of failure* (SPOF) yang menurunkan resiliensi sistem. Ketiga, dari sisi regulasi, Pharmaceutical Inspection Co-operation Scheme (PIC/S) dan Good Distribution Practice (GDP) mensyaratkan traceability suhu secara *real-time* dengan dokumentasi yang tidak dapat dimanipulasi — sebuah tantangan besar bagi operator yang masih mengandalkan pencatatan manual *log sheet* setiap dua jam (Putra dkk., 2024).

Khurshid dan Siddiqui (2024) menekankan bahwa pendekatan konvensional yang bersifat *reactive* — yaitu menunggu hingga suhu menyimpang sebelum mengambil tindakan korektif — tidak lagi memadai dalam ekosistem rantai pasok modern. Dibutuhkan paradigma *proactive resilience* yang memadukan: (i) kemampuan menyerap gangguan (*absorptive capacity*), (ii) kemampuan beradaptasi secara cepat (*adaptive capacity*), dan (iii) kemampuan memulihkan kinerja sistem (*restorative capacity*). Putra dkk. (2024) melengkapi paradigma tersebut dengan bukti empiris pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana sistem pencatatan manual berbasis kertas terbukti rentan terhadap keterlambatan respons, human error, dan tidak tersedianya peringatan otomatis ketika suhu *cold chain box* naik akibat kerusakan internal (misalnya compressor failure) maupun eksternal (misalnya paparan sinar matahari langsung, pembukaan pintu berulang).

Integrasi Internet of Things (IoT) melalui sensor suhu digital seperti DS18B20, mikrokontroler (Arduino/ESP32), dan platform cloud monitoring menjadi enabler teknologi yang memungkinkan transformasi dari sistem pasif menjadi sistem resiliensi aktif. Oleh karena itu, modul ini membahas secara sistematis: (a) formulasi matematis model resiliensi cold chain, (b) arsitektur SOP pemantauan suhu berbasis IoT, (c) studi kasus kuantitatif pada distribusi vaksin, dan (d) evaluasi kritis terhadap metodologi serta arah standarisasi masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Resiliensi Sistem (Resilience Triangle)

Model resiliensi cold chain yang diusung Khurshid dan Siddiqui (2024) berakar pada *Resilience Triangle* yang dipopulerkan oleh Bruneau dkk. (2003) untuk rekayasa gempa, kemudian diadaptasi untuk rekayasa sistem industri. Resiliensi $R$ didefinisikan sebagai kemampuan sistem untuk mengurangi kemungkinan kegagalan, mengurangi konsekuensi kegagalan, dan mengurangi waktu pemulihan. Secara matematis:

$$R = \int_{t_0}^{t_1} [100\% - Q(t)] \, dt$$

di mana:
- $Q(t)$ = fungsi kualitas sistem pada waktu $t$ (dinyatakan dalam %, dengan 100% = performa nominal),
- $t_0$ = waktu onset gangguan,
- $t_1$ = waktu sistem pulih ke performa nominal.

Semakin kecil luas area di bawah kurva $Q(t)$ antara $t_0$ dan $t_1$, semakin tinggi resiliensi sistem.

### 2.2. Fungsi Kinerja Termal Cold Chain

Untuk cold chain farmasi, fungsi kinerja termal $Q(t)$ dapat dimodelkan sebagai:

$$Q(t) = 1 - \left| \frac{T(t) - T_{ref}}{T_{ref}}\right|$$

di mana $T(t)$ adalah suhu aktual pada waktu $t$ dan $T_{ref}$ adalah suhu referensi (misal $5^\circ\text{C}$ sebagai titik tengah rentang $2^\circ\text{C}$–$8^\circ\text{C}$). Jika $|T(t) - T_{ref}| \geq 3^\circ\text{C}$, maka $Q(t) = 0$ karena produk sudah masuk kategori kerusakan (Khurshid & Siddiqui, 2024).

### 2.3. Model Degradasi Kumulatif Produk (Arrhenius-Kinetics)

Laju degradasi produk farmasi mengikuti persamaan Arrhenius yang dikoreksi untuk cold chain:

$$k(T) = A \cdot e^{-\frac{E_a}{R_g \cdot T_{abs}}}$$

dengan:
- $k(T)$ = konstanta laju degradasi pada suhu absolut $T_{abs}$ (K),
- $A$ = faktor pre-eksponensial,
- $E_a$ = energi aktivasi reaksi (J/mol) — khas untuk protein vaksin $E_a \approx 80\text{–}120\text{ kJ/mol}$,
- $R_g$ = konstanta gas universal $8{,}314\text{ J/(mol·K)}$.

Kerusakan kumulatif akibat riwayat suhu (*temperature history*) diekspresikan sebagai:

$$D_{cum} = \sum_{i=1}^{n} k(T_i) \cdot \Delta t_i$$

di mana $\Delta t_i$ adalah interval waktu ke-$i$. Produk dianggap失效 (*spoiled*) ketika $D_{cum} \geq D_{crit}$ (ambang batas kritis) — Putra dkk. (2024) menyoroti bahwa tanpa sistem monitoring kontinu, akumulasi kerusakan ini tidak dapat dihitung secara akurat.

### 2.4. Model Resiliensi dengan Komponen IoT

Integrasi IoT mengubah struktur resiliensi secara fundamental. Waktu deteksi gangguan $t_d$ menurun drastis, sehingga:

$$t_1 = t_0 + t_d + t_r$$

dengan:
- $t_d$ = *detection time* (waktu dari onset gangguan hingga alarm),
- $t_r$ = *recovery time* (waktu dari alarm hingga sistem kembali normal).

Tanpa IoT, Putra dkk. (2024) menunjukkan bahwa $t_d$ pada metode manual mencapai $120$ menit (2 jam) sesuai interval pencatatan. Dengan IoT menggunakan sensor DS18B20 (resolusi $0{,}0625^\circ\text{C}$, akurasi $\pm 0{,}5^\circ\text{C}$ dalam rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$, waktu sampling $\leq 750$ ms), $t_d$ dapat ditekan hingga $\leq 10$ detik. Reduksi $t_d$ menghasilkan peningkatan resiliensi:

$$\Delta R = \int_{t_0}^{t_0 + t_d^{manual}} Q_{manual}(t)\,dt - \int_{t_0}^{t_0 + t_d^{IoT}} Q_{IoT}(t)\,dt$$

### 2.5. Indeks Resiliensi Ternormalisasi (Khurshid & Siddiqui, 2024)

Untuk memudahkan benchmarking antar-node cold chain:

$$\text{RI} = \frac{R}{R_{max}} = 1 - \frac{\int_{t_0}^{t_1} [100\% - Q(t)]\, dt}{(t_1 - t_0) \cdot 100\%}$$

Nilai $\text{RI} \in [0,1]$, dengan $\text{RI} = 1$ menunjukkan sistem sempurna tanpa degradasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Pemantauan Suhu IoT

Berdasarkan kerangka Khurshid dan Siddiqui (2024) serta implementasi teknis Putra dkk. (2024), arsitektur sistem resiliensi cold chain memiliki 5 lapisan fungsional:

**Lapisan 1 — Sensor & Akuisisi Data:**
Sensor DS18B20 (1-Wire digital) dipasang pada minimal 3 titik kritis *cold chain box*: inlet evaporator, tengah ruang penyimpanan, dan dekat dinding luar (zona paling cepat memanas saat pintu dibuka). Setiap sensor memiliki *unique 64-bit ROM code* untuk identifikasi. Akuisisi data menggunakan protokol *parasitic power* untuk mengurangi kebutuhan kabel.

**Lapisan 2 — Mikrokontroler & Edge Computing:**
ESP32 atau Arduino Mega membaca suhu via protokol 1-Wire, melakukan konversi $\text{ADC}_{\text{digital}} = T \cdot \frac{2^{12}}{128}$ untuk DS18B20 12-bit, dan menjalankan *fuzzy logic controller* lokal untuk klasifikasi status: **NORMAL** ($2 \leq T \leq 8^\circ\text{C}$), **WARNING** ($1 \leq T < 2$ atau $8 < T \leq 10^\circ\text{C}$), **CRITICAL** ($T < 1$ atau $T > 10^\circ\text{C}$).

**Lapisan 3 — Komunikasi & Jaringan:**
Data dikirim ke cloud via Wi-Fi/GSM (MQTT protocol, port 1883, enkripsi TLS 1.2+). QoS Level 2 digunakan untuk menjamin *exactly-once delivery* pada alarm.

**Lapisan 4 — Platform Cloud & Dashboard:**
Dashboard berbasis web/mobile (misalnya ThingsBoard, Blynk, atau custom Laravel/Node.js) menampilkan: time-series chart suhu, heatmap risiko, logbook digital otomatis (menggantikan *log sheet* manual), dan push notification ke apoteker via Telegram/WhatsApp API.

**Lapisan 5 — Decision Support & Continuous Improvement:**
Machine learning (LSTM atau Random Forest) melatih model prediksi suhu 15–30 menit ke depan menggunakan fitur: suhu historis, jumlah buka-tutup pintu (sensor magnet reed switch), suhu ambient, dan status kompresor. Prediksi digunakan untuk *preemptive alerting*.

### 3.2. SOP Operasional Harian

| No. | Aktivitas | Frekuensi | Penanggung Jawab | Standar Acuan |
|-----|-----------|-----------|------------------|---------------|
| 1 | Kalibrasi sensor DS18B20 dengan *ice-bath calibration* ($0{,}0 \pm 0{,}2^\circ\text{C}$) | Bulanan | Teknisi Farmasi | WHO PQS E006 |
| 2 | Inspeksi visual cold chain box (karet pintu, ice pack, ventilasi) | Harian (pagi) | Apoteker Penanggung Jawab | GDP Annex 5 |
| 3 | Review dashboard monitoring dan alarm 24 jam terakhir | Harian (pagi) | Apoteker | Internal SOP |
| 4 | Backup data cloud ke server lokal (redundansi) | Mingguan | IT Support | ISO 27001 |
| 5 | Audit sistem deteksi dini (uji *dummy fault* $T > 8^\circ\text{C}$) | Bulanan | QA Manager | Khurshid & Siddiqui (2024) |
| 6 | Simulasi *recovery drill* (simulasi kegagalan listrik 4 jam) | Triwulanan | Tim Cold Chain | HACCP + GDP |
| 7 | Review performa resiliensi (RI) seluruh node distribusi | Semester | Manajer Logistik | Khurshid & Siddiqui (2024) |

### 3.3. Diagram Alir Respon Insiden

```
[Sensor baca T(t)]
       ↓
[T(t) dalam 2–8°C?]──Yes──→[Log ke database, interval 60 dtk]
       ↓ No                       ↓
[T(t) dalam 1–2 atau 8–10°C?]    [Tampilkan di dashboard]
       ↓ Yes                      ↓
[Kirim WARNING via Telegram API]  [Sistem berjalan normal]
       ↓
[T(t) <1 atau >10°C?]
       ↓ Yes
[ALARM SIRENE + SMS + Call ke Apoteker]
       ↓
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
