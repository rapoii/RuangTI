# 2854 — Model Ketahanan (Resilience) untuk Logistik Rantai Dingin Produk Mudah Rusak: Integrasi Sensor IoT DS18B20 dan Formulasi Stokastik Degradasi Termal

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo, Vol. 12 No. 1*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan laut, produk hortikultura segar, dan bahan kimia reaktif. Khurshid dan Siddiqui (2024) dalam artikelnya yang dipublikasikan melalui DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menekankan bahwa kegagalan mempertahankan integritas termal pada satu mata rantai saja dapat menurunkan mutu produk secara irreversibel, sehingga *cold chain* tidak cukup hanya dirancang untuk *reliability* statis, melainkan harus memiliki *resilience*—yakni kapasitas untuk menyerap gangguan, pulih dengan cepat, dan beradaptasi terhadap kondisi operasional baru.

Konteks industri diperkuat oleh temuan Putra, Defit, dan Nurcahyo (2024) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak (DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka mengidentifikasi dua masalah struktural utama: (1) *cold chain box* vaksin tidak dilengkapi alat pemantau suhu *realtime* sehingga apoteker tidak menerima peringatan dini saat terjadi *temperature excursion* akibat kerusakan internal (kompresor) maupun eksternal (paparan matahari, keterlambatan pengiriman); (2) pencatatan suhu masih dilakukan secara manual setiap 2 (dua) jam pada *log sheet*, yang rentan terhadap *missing data*, human error, dan keterlambatan deteksi. Padahal, untuk sebagian besar vaksin program imunisasi nasional, rentang suhu kritis yang diizinkan adalah 2–8°C (WHO PQS E006), dan setiap pelanggaran di luar rentang tersebut—bahkan hanya selama 30 menit—dapat memaksa prosedur *discard* dengan kerugian finansial signifikan.

Secara ekonomis, kerugian akibat *cold chain failure* pada sektor farmasi global mencapai lebih dari USD 35 miliar per tahun menurut estimasi IFPW, sementara pada sektor makanan segar FAO memperkirakan sekitar 14% kehilangan pascapanen akibat *temperature abuse*. Dari perspektif Teknik Industri, masalah ini merupakan masalah optimasi multi-objektif antara *service level*, *risk exposure*, dan *total cost of ownership*. Khurshid dan Siddiqui (2024) mengusulkan kerangka *resilience modeling* yang mengkuantifikasi probabilitas gangguan, laju degradasi mutu, dan *recovery time*, sehingga keputusan rekayasa dapat dilakukan secara data-driven. Sementara itu, Putra dkk. (2024) membuktikan kelayakan teknis implementasi sensor IoT DS18B20 sebagai enabler utama sistem peringatan dini tersebut. Integrasi keduanya menjadi landasan modul ini.

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan rantai dingin yang dirujuk dari Khurshid dan Siddiqui (2024) dibangun di atas tiga pilar stokastik: (a) fungsi degradasi mutu sebagai fungsi suhu-waktu, (b) distribusi probabilitas gangguan, dan (c) indeks resilience agregat.

### 2.1 Fungsi Degradasi Mutu Termal

Untuk produk biologis dan pangan, mutu $Q(t)$ menurun secara eksponensial terhadap waktu dan suhu. Persamaan dasar yang digunakan adalah:

$$Q(t) = Q_0 \cdot \exp\left(-k(T) \cdot t\right)$$

di mana $Q_0$ adalah mutu awal (100%), $t$ adalah waktu paparan (jam), dan $k(T)$ adalah laju degradasi spesifik yang bergantung pada suhu. Hubungan $k(T)$ mengikuti persamaan Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ = faktor pre-eksponensial (1/jam), $E_a$ = energi aktivasi (J/mol), $R$ = konstanta gas universal (8,314 J/mol·K), dan $T$ = suhu absolut (Kelvin). Untuk vaksin, referensi umum menggunakan $E_a \approx 60\text{–}90$ kJ/mol.

### 2.2 Distribusi Probabilitas Gangguan

Waktu antar-gangguan (*time-to-failure*) pada peralatan rantai dingin dimodelkan dengan distribusi Weibull dua parameter:

$$f(t) = \frac{\beta}{\theta} \left(\frac{t}{\theta}\right)^{\beta-1} \exp\left[-\left(\frac{t}{\theta}\right)^{\beta}\right]$$

dengan $\beta$ = *shape parameter* (umur peralatan) dan $\theta$ = *scale parameter* (jam). Untuk *cold chain box* pada tahap awal pemakaian ($\beta > 1$ menandakan *wear-out phase*), sedangkan untuk komponen elektronik kontrol ($\beta < 1$ menandakan *infant mortality*).

### 2.3 Indeks Resilience

Indeks resilience $\Psi$ didefinisikan sebagai rasio antara mutu aktual yang mampu dipertahankan terhadap mutu nominal dalam horizon perencanaan $[t_0, t_1]$:

$$\Psi = \frac{\int_{t_0}^{t_1} Q(t) \, dt}{\int_{t_0}^{t_1} Q_{nominal}(t) \, dt}, \quad 0 \le \Psi \le 1$$

Nilai $\Psi \to 1$ menandakan sistem sangat *resilient*; $\Psi \to 0$ menandakan sistem kolaps. Khurshid dan Siddiqui (2024) juga memperkenalkan ekspektasi resilience $\mathbb{E}[\Psi]$ yang dihitung dengan simulasi Monte Carlo atas parameter $T$, $t$, dan downtime.

### 2.4 Model Sensor IoT DS18B20 (Putra dkk., 2024)

Akurasi sensor DS18B20 adalah $\pm 0,5°C$ pada rentang $-10°C$ hingga $+85°C$, dengan resolusi 9–12 bit (resolusi default 12 bit = 0,0625°C). Frekuensi sampling $f_s$ (Hz) menghasilkan data suhu deret waktu $T_n = T(n/f_s)$ yang dibandingkan terhadap ambang batas $T_{min}, T_{max}$. Aturan keputusan alarm:

$$\text{Alert}_n = \begin{cases} 1, & \text{jika } T_n < T_{min} \text{ atau } T_n > T_{max} \\ 0, & \text{lainnya} \end{cases}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem *resilient cold chain* mengikuti kerangka **Plan–Do–Check–Act (PDCA)** yang dikombinasikan dengan arsitektur empat lapis:

**Lapis 1 – Sensing Layer.** Sensor DS18B20 (akurasi ±0,5°C) dipasang pada minimal tiga titik kritis cold chain box: inlet evaporator, outlet evaporator, dan zona tengah (*load zone*). Konfigurasi *one-wire* memungkinkan beberapa sensor berbagi satu pin mikrokontroler (misal ESP32/NodeMCU).

**Lapis 2 – Communication Layer.** Transmisi data menggunakan protokol MQTT over Wi-Fi/LTE dengan *payload* JSON berisi timestamp, ID sensor, suhu, dan status alarm. Topik (*topic*) dipisah per sensor untuk skalabilitas.

**Lapis 3 – Analytics Layer.** Data di-*stream* ke *time-series database* (InfluxDB) untuk diolah dengan model Arrhenius-eksponensial pada Persamaan (1) dan (2). Nilai mutu $Q(t)$ dihitung *on-the-fly* dan dibandingkan terhadap ambang kritis $Q_{crit}$ (misal 90%).

**Lapis 4 – Response Layer.** Jika $\text{Alert}_n = 1$ atau $Q(t) < Q_{crit}$, sistem mengirim notifikasi push ke apoteker dan memicu protokol respons:

1. **Deteksi & Isolasi (0–15 menit):** Verifikasi alarm, isolasi cold chain box, pindahkan produk ke unit cadangan.
2. **Mitigasi (15–60 menit):** Diagnosis akar masalah (kompresor, daya, segel), hubungi teknisi.
3. **Pemulihan (1–4 jam):** Validasi suhu kembali ke rentang 2–8°C, dokumentasi insiden.
4. **Pasca-insiden:** *Root cause analysis*, update *parameter* model, kalibrasi sensor.

SOP pencatatan suhu manual setiap 2 jam (Putra dkk., 2024) digantikan dengan logging otomatis 24/7, sehingga risiko *missing data* turun dari ~95% (tergantung disiplin operator) menjadi <0,1%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah UPTD Farmasi mendistribusikan 500 vial vaksin COVID-19 (volume total 5 L) dari *cold storage* (5°C) menggunakan cold chain box ke puskesmas dengan waktu tempuh normal $t^* = 4$ jam. Diasumsikan terjadi gangguan: suhu rata-rata naik menjadi $T' = 12°C$ selama $t_d = 1$ jam karena keterlambatan buka segel.

**Parameter (berdasarkan referensi tipikal Khurshid & Siddiqui, 2024):**
- $A = 2{,}5 \times 10^{12}$ /jam; $E_a = 75$ kJ/mol
- $R = 8{,}314$ J/mol·K
- $T_{normal} = 5°C = 278{,}15$ K
- $T_{abuse} = 12°C = 285{,}15$ K
- $T_{crit}$ mutu: $Q_{crit} = 90\%$

**Langkah 1: Hitung laju degradasi pada kondisi normal:**

$$k(278{,}15) = 2{,}5 \times 10^{12} \cdot \exp\left(-\frac{75.000}{8{,}314 \times 278{,}15}\right) = 2{,}5 \times 10^{12} \cdot \exp(-32{,}42)$$

$$k(278{,}15) \approx 2{,}5 \times 10^{12} \times 7{,}37 \times 10^{-15} \approx 0{,}0184 \text{ /jam}$$

**Langkah 2: Hitung laju degradasi pada suhu abuse:**

$$k(285{,}15) = 2{,}5 \times 10^{12} \cdot \exp\left(-\frac{75.000}{8{,}314 \times 285{,}15}\right) = 2{,}5 \times 10^{12} \cdot \exp(-31{,}63)$$

$$k(285{,}15) \approx 2{,}5 \times 10^{12} \times 1{,}90 \times 10^{-14} \approx 0{,}0474 \text{ /jam}$$

**Langkah 3: Mutu setelah 4 jam campuran (3 jam normal + 1 jam abuse):**

$$Q(4) = 100\% \cdot \exp\left[-(0{,}0184 \times 3 + 0{,}0474 \times 1)\right]$$

$$Q(4) = 100\% \cdot \exp(-0{,}1026) \approx 100\% \times 0{,}9025 = 90{,}25\%$$

**Interpretasi:** Mutu berada tepat di ambang kritis 90%. Sistem IoT dengan alarm pada $T_{max} = 8°C$ akan memicu respons dalam <5 menit, memungkinkan suhu dipulihkan sebelum melewati $Q_{crit}$.

**Langkah 4: Indeks Resilience:** Dengan downtime yang diminimalkan menjadi 5 menit (= 0,083 jam):

$$Q_{resilient}(4) = 100\% \cdot \exp