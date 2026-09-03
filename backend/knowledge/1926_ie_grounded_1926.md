# 1926 — Model Ketahanan (Resilience) Rantai Dingin Produk Mudah Rusak: Integrasi Pemantauan IoT dan Kerangka Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup produk farmasi (vaksin, biologis), pangan mudah rusak (*perishable foods*), serta reagen diagnostik. Gangguan terhadap integritas termal rantai dingin tidak hanya menyebabkan kerugian ekonomi substansial—diperkirakan bernilai miliaran dolar secara global per tahun—tetapi juga berimplikasi langsung pada keselamatan publik, terutama pada program imunisasi massal. Khurshid dan Siddiqui (2024) dalam papernya yang berjudul *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka model ketahanan (*resilience modeling*) yang secara eksplisit memformulasikan kemampuan sistem rantai dingin untuk menahan, menyerap, memulihkan, dan beradaptasi terhadap disrupsi, sehingga mengurangi degradasi mutu produk serta risiko kerugian pasok.

Konteks empiris yang sangat relevan disajikan oleh Putra, Defit, dan Nurcahyo (2024) dalam Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan kondisi operasional Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi tiga masalah struktural yang menjadi titik rapuh (*vulnerability*) klasik dalam rantai dingin vaksin Indonesia: (i) *cold chain box* sebagai media penyimpanan tidak配备 alat pemantau suhu *real-time*; (ii) tidak adanya sistem peringatan dini (*early warning system*) kepada apoteker ketika suhu menyimpang dari rentang 2–8°C akibat kerusakan internal/eksternal; dan (iii) pencatatan suhu masih dilakukan secara manual setiap dua jam pada *log sheet*, sehingga menciptakan *single point of failure* pada human-in-the-loop. Ketiga isu ini, menurut kerangka Khurshid dan Siddiqui (2024), merupakan determinan langsung dari rendahnya *resilience capacity* rantai dingin karena menghambat kecepatan *detection*, *recovery*, dan *adaptation*.

Urgensi integrasi kedua literatur ini terletak pada kenyataan bahwa model ketahanan tanpa sensor dan data *real-time* tidak akan mampu mengoperasionalkan variabel-variabel kunci seperti *time-to-detection* (TTD) dan *time-to-recovery* (TTR). Sebaliknya, sistem IoT tanpa model ketahanan kuantitatif hanya akan menghasilkan *alert* tanpa kerangka keputusan manajerial. Dengan demikian, integrasi arsitektur IoT DS18B20 (akurasi ±0,5°C pada rentang –10°C hingga +85°C, resolusi 0,0625°C, protokol 1-Wire) dengan model ketahanan Khurshid–Siddiqui menjadi agenda rekayasa sistem industri yang memiliki nilai tambah strategis tinggi, khususnya untuk konteks Indonesia di mana 70–80% distribusi vaksin last-mile masih mengandalkan *cold chain box* portabel dengan kapasitas termal terbatas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Ketahanan (Resilience Framework)

Khurshid dan Siddiqui (2024) memformalkan ketahanan rantai dingin sebagai kemampuan sistem mempertahankan fungsi tingkat layanan $Q(t)$ di atas ambang kritis $Q_{min}$ selama dan setelah gangguan. Indeks ketahanan $R$ didefinisikan sebagai:

$$R = \frac{\displaystyle\int_{t_0}^{t_1} Q(t)\, dt}{\displaystyle\int_{t_0}^{t_1} Q_0(t)\, dt}$$

di mana $Q_0(t)$ adalah fungsi kinerja *baseline* tanpa disrupsi, $t_0$ adalah waktu onset gangguan, dan $t_1$ adalah waktu pemulihan penuh. Nilai $R \in [0,1]$, dengan $R \geq 0{,}85$ umumnya menjadi target operasional untuk produk farmasi kritis (berdasarkan standar WHO PQS E001).

### 2.2 Model Degradasi Termal Arrhenius

Kerentanan produk terhadap suhu dimodelkan menggunakan persamaan Arrhenius untuk laju degradasi:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g T}\right)$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), $R_g = 8{,}314$ J/(mol·K) konstanta gas, dan $T$ suhu absolut (K). Untuk vaksin berbasis protein, $E_a$ tipikal berkisar 60–100 kJ/mol; untuk produk susu dan daging, $E_a$ berada pada 40–80 kJ/mol.

### 2.3 Suhu Kinetik Rata-rata (Mean Kinetic Temperature)

Standar USP <1079> mendefinisikan MKT sebagai:

$$MKT = \frac{\Delta H / R_g}{-\ln \left(\dfrac{\sum_{i=1}^{n} e^{-\Delta H/(R_g T_i)}}{n} \right)}$$

dengan $\Delta H$ entalpi aktivasi (umumnya 83,144 kJ/mol). MKT memberikan bobot lebih besar pada suhu ekstrem dibanding suhu moderat—sesuai dengan sifat degradasi Arrhenius yang non-linear.

### 2.4 Availability Sistem dan MTTR

Availability rantai dingin didefinisikan sebagai:

$$A_{sys} = \frac{MTBF}{MTBF + MTTR}$$

Untuk arsitektur IoT dengan sensor DS18B20 redundant (topologi *dual-probe*), availability menjadi:

$$A_{dual} = 1 - (1-A_1)(1-A_2)$$

Putra et al. (2024) menunjukkan bahwa dengan sensor tunggal, $A_{sys}$ tipikal hanya 0,92–0,95 karena *downtime* akibat *sensor drift* dan *battery failure*.

### 2.5 Model Markov untuk State-of-Health Cold Chain

State diagram empat-negara $\{S_{norm}, S_{warn}, S_{crit}, S_{fail}\}$ dengan laju transisi $\lambda_{ij}$ menghasilkan matriks generator $Q$ yang digunakan untuk menghitung probabilitas keadaan tunak (*steady-state*) $\pi$ dari $\pi Q = 0$. *Time-to-detection* (TTD) kritis untuk mencegah transisi $S_{crit} \rightarrow S_{fail}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur IoT untuk Pemantauan *Real-Time*

Berdasarkan Putra et al. (2024), arsitektur sistem terdiri dari empat lapisan:

1. **Lapisan Sensing:** Sensor DS18B20 (akurasi ±0,5°C, resolusi 12-bit, *unique 64-bit serial code*), multiple probe di dalam *cold chain box*, antarmuka 1-Wire.
2. **Lapisan Edge Processing:** Mikrokontroler (ESP32/NodeMCU) melakukan akuisisi setiap 10–30 detik, *smoothing* dengan *moving average* window $w=5$, dan transmisi via Wi-Fi/MQTT ke *cloud broker*.
3. **Lapisan Cloud & Analytics:** Platform ThingsBoard/Blynk menerima topik MQTT, menyimpan *time-series*, dan mengeksekusi aturan ambang (*threshold rule*) dua tingkat: *warning* pada $T > 8°C$ atau $T < 2°C$, *critical* pada $T > 10°C$ atau $T < 0°C$.
4. **Lapisan Notification:** Notifikasi multi-modal (push notification, SMS gateway, *buzzer* lokal) kepada apoteker UPTD dalam $< 60$ detik sejak anomali terdeteksi.

### 3.2 Diagram Alir SOP Pemantauan dan Tanggap Gangguan

```
[Sensor DS18B20 aktif] → [Baca T tiap 15 detik]
        ↓
[Filter Moving Average] → [Hitung MKT rolling 24 jam]
        ↓
        ├── 2°C ≤ T ≤ 8°C → [Status: NORMAL, log ke DB]
        ↓
        ├── 8°C < T ≤ 10°C atau T < 2°C → [Status: WARNING, kirim notifikasi]
        ↓
        └── T > 10°C atau T < 0°C → [Status: CRITICAL, alarm + eskalasi]
                                      ↓
                                [Inisiasi protokol karantina produk]
                                      ↓
                                [Hitung degradasi kumulatif Arrhenius]
                                      ↓
                                [Keputusan: RELEASE / REJECT berdasarkan total Q10]
```

### 3.3 SOP Pencatatan dan Audit

Pencatatan suhu otomatis menggantikan *log sheet* manual dua jam. Setiap *timestamp*, nilai suhu, ID sensor, dan status dikirim ke *cloud database* immutable. *Audit* periodik dilakukan dengan membandingkan *trace* digital terhadap *back-up* kertas hanya untuk validasi silang, sehingga menghilangkan *single point of failure* dokumentasi.

### 3.4 Prosedur Kalibrasi Sensor

Kalibrasi dilakukan setiap 6 bulan menggunakan *ice-bath calibration* pada $T = 0{,}00 \pm 0{,}05°C$ dan *reference thermometer* bersertifikat NIST-traceable. *Drift* $> \pm 0{,}5°C$ menjadi kriteria *sensor replacement*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Disrupsi Termal pada Distribusi Vaksin

Sebuah *cold chain box* berisi 50 vial vaksin COVID-19 (volume 2 mL/vial) mengalami kerusakan kompresor pada $t_0 = 0$ menit. Suhu awal $T_0 = 5{,}0°C$, suhu lingkungan $T_{env} = 30°C$. Kapasitas termal efektif sistem $C_{eff} = 18$ kJ/K (massa es *gel pack* + vial). Laju perpindahan panas $UA = 1{,}2$ W/K.

**Langkah 1: Pemodelan Laju Kenaikan Suhu**

Persamaan diferensial transien termal:

$$C_{eff} \frac{dT}{dt} = UA (T_{env} - T)$$

Solusi analitik:

$$T(t) = T_{env} - (T_{env} - T_0) \exp\left(-\frac{UA}{C_{eff}} t\right)$$

Substitusi parameter pada $t = 30$ menit = 1800 s:

$$T(1800) = 30 - (30 - 5{,}0)\exp\left(-\frac{1{,}2 \times 1800}{18000}\right) = 30 - 25{,}0 \cdot e^{-0{,}12}$$

$$= 30 - 25{,}0 \cdot 0{,}8869 = 30 - 22{,}17 = 7{,}83°C$$

**Langkah 2: Perhitungan MKT Selama Disrupsi**

Dengan asumsi profil suhu $\{5{,}0; 6{,}4; 7{,}1; 7{,}5; 7{,}7; 7{,}83\}$ °C pada interval 5 menit (0–30 menit), konversi ke Kelvin $\{278{,}15; 279{,}55; 280{,}25; 280{,}65; 280{,}85; 281{,}0\}$, dan $\Delta H = 83{,}144$ kJ/mol:

$$MKT = \frac{83144/8{,}314}{-\ln\left(\frac{1}{6}\sum_{i=1}^{6} e^{-83144/(8{,}314 T_i)}\right)}$$

Perhitungan intermediate $\sum e^{-\