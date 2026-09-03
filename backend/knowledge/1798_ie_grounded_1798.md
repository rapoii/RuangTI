# 1798 — Model Ketahanan (Resilience) Cold Chain Logistics untuk Produk Mudah Rusak: Integrasi Pemantauan IoT dan Rekayasa Keandalan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam jaringan distribusi produk yang sensitif terhadap suhu, mencakup produk farmasi (vaksin, biologi, insulin), makanan beku, produk susu, seafood, hortikultura, dan reagen diagnostik. Pemutusan atau degradasi pada salah satu mata rantai dapat menimbulkan kerugian ekonomi masif sekaligus risiko kesehatan masyarakat yang tidak dapat dipulihkan (*irreversible public health hazard*). Khurshid dan Siddiqui (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menekankan bahwa kemampuan sistem cold chain untuk pulih dari *temperature excursion*—yakni peristiwa di mana suhu menyimpang dari rentang operasional yang ditetapkan—menjadi ukuran kinerja yang lebih relevan daripada sekadar mempertahankan suhu nominal. Mereka memperkenalkan paradigma *resilience engineering* yang memandang rantai dingin sebagai sistem *socio-technical* kompleks yang harus dirancang tidak hanya untuk mencegah kegagalan, melainkan juga untuk menyerap, beradaptasi, dan memulihkan diri (Brittleness → Robustness → Resilience).

Di Indonesia, urgensi ini tercermin jelas pada studi Putra, Defit, dan Nurcahyo (2024) di *Jurnal KomtekInfo* ([10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka mendeskripsikan permasalahan operasional pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana *cold chain box* yang digunakan untuk menyimpan dan mengangkut vaksin tidak dilengkapi sistem pemantauan suhu *real-time*. Pencatatan suhu masih dilakukan secara manual menggunakan *log sheet* setiap 2 jam oleh apoteker—suatu pendekatan yang rentan terhadap human error, delay deteksi, dan tidak mampu memberikan peringatan dini (*early warning*) ketika suhu menyimpang akibat kerusakan internal kompresor, kegagalan catu daya, atau paparan lingkungan eksternal. Kerusakan satu vial vaksin COVID-19 misalnya, dapat merugikan negara ratusan ribu rupiah, dan kerusakan pada ribuan vial akibat *temperature excursion* yang tidak terdeteksi selama beberapa jam akan menimbulkan kerugian miliaran rupiah serta potensi outbreak karena herd immunity tidak tercapai.

Secara makro-ekonomi, World Health Organization (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia akibat kegagalan cold chain, terutama di negara berkembang. Kerugian ini bukan sekadar *economic loss*, melainkan *social cost* berupa morbiditas dan mortalitas yang sebenarnya dapat dicegah. Oleh karena itu, integrasi antara model resilience teoritis (Khurshid & Siddiqui, 2024) dan solusi pemantauan IoT berbasis sensor DS18B20 (Putra et al., 2024) menjadi kerangka pikir yang sangat relevan untuk industri farmasi, makanan, dan logistik kesehatan di Indonesia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Ketahanan Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) mengajukan kerangka *Cold Chain Resilience Index* (CCRI) yang terdiri dari tiga sub-komponen utama: *Absorption Capacity* ($A$), *Adaptation Capacity* ($B$), dan *Recovery Capacity* ($C$). Indeks total diformulasikan sebagai:

$$\text{CCRI} = w_1 \cdot A + w_2 \cdot B + w_3 \cdot C$$

dengan $w_1 + w_2 + w_3 = 1$ merupakan bobot preferensi pemangku kepentingan (misalnya regulator, operator logistik, dan *end-user*). Masing-masing sub-komponen dihitung secara proporsional terhadap kemampuan sistem mempertahankan fungsinya di bawah tekanan (*disturbance*).

### 2.2 Model Probabilitas Kegagalan Sensor dan Sistem

Untuk perangkat IoT cold chain box berbasis sensor DS18B20 sebagaimana dirancang Putra et al. (2024), keandalan sensor mengikuti distribusi eksponensial dengan laju kegagalan konstan $\lambda$ (cacat per juta jam operasi):

$$R(t) = e^{-\lambda t}$$

dengan $\lambda_{DS18B20} \approx 0{,}5$ FIT (Failure In Time) pada rentang operasi $-55^\circ\text{C}$ hingga $+125^\circ\text{C}$ dan akurasi $\pm 0{,}5^\circ\text{C}$ pada resolusi 9–12 bit. *Mean Time To Failure* (MTTF) sistem adalah:

$$\text{MTTF} = \int_0^\infty R(t)\,dt = \frac{1}{\lambda}$$

Untuk $\lambda = 5{,}8 \times 10^{-7}$ per jam (≈ 50 FIT), diperoleh $\text{MTTF} \approx 1{,}72 \times 10^6$ jam ≈ 196 tahun per sensor, namun kegagalan sistemik (kabel putus, mikrokontroler hang, kehilangan konektivitas) menurunkan MTTF efektif menjadi ratusan hingga ribuan jam, sehingga strategi *redundancy* dan *fail-safe* menjadi wajib.

### 2.3 Deviasi Suhu dan Model Degradasi Produk

Penyimpangan suhu dari rentang operasional $[\,T_{\min}, T_{\max}\,]$ didefinisikan sebagai:

$$\Delta T(t) = \begin{cases} T(t) - T_{\max}, & T(t) > T_{\max} \\ T_{\min} - T(t), & T(t) < T_{\min} \\ 0, & \text{lainnya} \end{cases}$$

Total eksposur termal kumulatif yang merusak produk mengikuti integral:

$$E = \int_{t_0}^{t_1} \Delta T(t)\,dt \quad [\text{jam}\cdot^\circ\text{C}]$$

Untuk vaksin, degradasi potensi mengikuti persamaan Arrhenius yang dimodifikasi (kineetika denaturasi protein):

$$\frac{dP}{dt} = -k_0 \cdot e^{-E_a/(R \cdot T)} \cdot P$$

dengan $P$ adalah potensi aktif (%), $k_0$ konstanta pre-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut (K). Pada suhu +8°C, vaksin COVID-19 (Pfizer/Moderna) memiliki $E_a \approx 80$ kJ/mol; kenaikan suhu menjadi +25°C mempercepat laju degradasi hingga 10–15 kali lipat.

### 2.4 Biaya Kegagalan Cold Chain

Biaya total akibat *temperature excursion* terdiri dari *direct product loss*, *replacement cost*, dan *social cost*:

$$C_{\text{total}} = C_{\text{product}} + C_{\text{replacement}} + C_{\text{recall}} + C_{\text{liability}}$$

Putra et al. (2024) mencatat bahwa kerugian tidak hanya finansial, melainkan juga pada kualitas layanan publik karena program imunisasi nasional terganggu.

### 2.5 Respon Dinamis Sistem Pemantauan IoT

Sistem IoT menggunakan persamaan kalor sederhana untuk memodelkan *thermal lag* antara sensor dan lingkungan:

$$T_{\text{sensor}}(t) = T_{\text{env}}(t) - \tau \frac{dT_{\text{sensor}}}{dt}$$

dengan $\tau$ konstanta waktu termal sensor (orde detik hingga menit tergantung enkapsulasi). Putus et al. (2024) merancang algoritma *threshold alert* dengan logika:

$$\text{Alert} = \begin{cases} 1, & T(t) > T_{\max} \vee T(t) < T_{\min} \\ 0, & \text{otherwise} \end{cases}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT Cold Chain Box

Berdasarkan Putra et al. (2024), arsitektur sistem IoT untuk cold chain box vaksin terdiri dari empat lapisan:

1. **Lapisan Persepsi (Sensor):** Sensor DS18B20 ditempatkan secara *multi-point* (minimal 3 titik: sudut atas, tengah, dan bawah box) untuk menangkap gradien suhu. Akuisisi data menggunakan protokol 1-Wire yang memungkinkan beberapa sensor dihubungkan pada satu pin mikrokontroler.
2. **Lapisan Pengolah (Mikrokontroler):** ESP32/Arduino membaca data suhu, melakukan *timestamping*, dan menjalankan logika ambang batas. Pembacaan dilakukan setiap 1–5 detik.
3. **Lapisan Komunikasi:** Modul WiFi/GSM/Sigfox mengirim data ke *cloud server* (MQTT/HTTPS) setiap 30–60 detik. Saat konektivitas terputus, *data logger* internal menyimpan hingga 32.000 pembacaan.
4. **Lapisan Aplikasi (Dashboard & Alert):** Aplikasi web/mobile menampilkan *real-time dashboard*, grafik tren, serta mengirimkan peringatan melalui SMS, email, atau Telegram ketika $\Delta T(t) > 0$.

### 3.2 Prosedur Operasional Standar (SOP) Pemantauan

```
┌────────────────────────────────────────────────────┐
│  SOP COLD CHAIN MONITORING – UPTD FARMASI         │
├────────────────────────────────────────────────────┤
│ A. Pra-Operasi                                    │
│    1. Kalibrasi sensor DS18B20 (ice-bath 0°C)     │
│    2. Verifikasi catu daya & baterai backup       │
│    3. Cek konektivitas modul IoT ke server        │
│ B. Operasional                                    │
│    4. Pembacaan suhu otomatis tiap 60 detik       │
│    5. Auto-alert bila T<2°C atau T>8°C           │
│    6. Pencatatan manual TSB (Temperature          │
│       Storage Box) setiap 2 jam sebagai backup    │
│ C. Tindakan Korektif (saat Alert aktif)           │
│    7. Verifikasi fisik dalam 10 menit             │
│    8. Pindahkan produk ke cold chain cadangan     │
│    9. Investigasi akar masalah (5-Why analysis)   │
│   10. Dokumentasi insiden & laporan ke Dinkes     │
└────────────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan Model Resilience (Khurshid & Siddiqui, 2024)

Setiap mata rantai cold chain (manufaktur → gudang → transporter → cold chain box → puskesmas) diberi skor CCRI melalui:

$$\text{CCRI}_i = w_1 A_i + w_2 B_i + w_3 C_i$$

di mana untuk unit cold chain box:

- $A_i$ = kemampuan absorbsi (insulasi termal, *thermal mass* PCM);
- $B_i$ = kemampuan adaptasi (sensor IoT + algoritma prediktif);
- $C_i$ = kemampuan recovery (protokol pemindahan, *cold chain contingency plan*).

Sistem IoT yang dirancang Putra et al. (2024) secara langsung meningkatkan $B_i$ dan $C_i$ melalui peringatan dini.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: UPTD Farmasi Dinkes Siak

**Data Asumsi:**
- Kapasitas cold chain box: 200 vial vaksin COVID-19 @ dosis 0,5 mL
- Harga 1 vial: Rp 200.000 (estimasi)
- Suhu operasional WHO: $T \in [2^\circ\text{C}, 8^\circ\text{C}]$
- Sensor DS18B20: $\lambda_s = 5 \times 10^{-7}$/jam, akurasi $\pm 0{,}5^\circ\text{C}$
- Durasi paparan suhu tinggi: 4 jam pada $T = 18^\circ\text{C}$ (rusak kompresor)

### 4.2 Perhitungan Deviasi Suhu

$$\Delta T = 18 - 8 = 10^\circ\text{C}$$

Eksposur termal kumulatif:

$$E = \Delta T \cdot \Delta t = 10^\circ\text{C} \times 4\,\text{jam} = 40\,\text{jam}\cdot^\circ\text{C}$$

### 4.3 Estimasi Kerugian Potensi Vaksin

Berdasarkan model Arrhenius dengan $E_a = 80$ kJ/mol, rasio laju degradasi pada 18°C (291 K) versus 8°C (281 K):

$$\frac{k_{18}}{k_{8}} = \exp\!\left[-\frac{E_a}{R}\!\left