# 2550 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak: Integrasi Sistem Pemantauan Suhu Real-Time IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, biofarmaka, produk darah, makanan beku, dan bahan biologis bernilai tinggi. Karakteristik utama rantai dingin adalah jendela suhu operasional yang sangat sempit (untuk vaksin pada rentang $2^\circ\text{C}$–$8^\circ\text{C}$ menurut World Health Organization Performance, Quality and Safety—WHO PQS) dan sensitivitas tinggi terhadap setiap deviasi suhu yang dikenal sebagai *temperature excursion*. Khurshid dan Siddiqui (2024) dalam artikelnya yang berjudul *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menegaskan bahwa degradasi mutu produk terjadi secara non-linear ketika suhu menyimpang, sehingga *time-to-recovery* menjadi variabel yang jauh lebih menentukan daripada sekadar *reliability* statis sistem.

Konteks operasional yang diangkat oleh Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) memperkuat urgensi tersebut. Mereka mendokumentasikan bahwa Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak menghadapi dua permasalahan struktural dalam operasional *cold chain box*: (1) ketiadaan alat pemantau suhu *real-time* yang mampu memberikan peringatan dini saat terjadi kenaikan suhu akibat kerusakan internal (misalnya kompresor) maupun eksternal (misalnya paparan lingkungan), dan (2) proses pencatatan suhu yang masih dilakukan secara manual pada *log sheet* setiap dua jam sekali. Kedua celah ini menciptakan *vulnerability window* yang lebar di mana potensi kehilangan produk tidak terdeteksi secara proaktif.

Secara ekonomi, nilai produk rantai dingin farmasi global mencapai lebih dari USD 350 miliar per tahun, dengan kerugian tahunan akibat kerusakan rantai dingin diestimasi antara USD 15–35 miliar (sekitar 4–10% dari total nilai produk). Kerugian ini tidak hanya bersifat moneter melainkan memiliki implikasi kesehatan masyarakat ketika vaksin kehilangan potensinya secara kumulatif—fenomena yang dikenal sebagai *vaccine potency decay*. Model ketahananan (*resilience*) yang diajukan oleh Khurshid dan Siddiqui (2024) berupaya mengkuantifikasi kemampuan sistem rantai dingin untuk mempertahankan fungsinya di bawah tekanan gangguan (*disruption*) dan seberapa cepat sistem tersebut kembali ke performa baseline setelah gangguan terjadi.

Integrasi Internet of Things (IoT) menggunakan sensor DS18B20, sebagaimana diimplementasikan oleh Putra dkk. (2024), menjadi elemen teknologi yang memungkinkan transformasi dari sistem reaktif menjadi sistem prediktif-proaktif. Sensor DS18B20 memiliki akurasi $\pm 0{,}5^\circ\text{C}$ pada rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$, resolusi programmable hingga 12-bit (setara $0{,}0625^\circ\text{C}$), serta antarmuka *one-wire* yang menyederhanakan arsitektur jaringan sensor di dalam *cold chain box*. Kombinasi antara model resilience matematis dan arsitektur sensor IoT membentuk kerangka solusi yang holistik, menjawab kebutuhan strategis industri farmasi, makanan, dan biofarmaka.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Resilience dalam Konteks Cold Chain

Berbeda dengan *reliability* yang fokus pada probabilitas kegagalan, *resilience* didefinisikan oleh Khurshid dan Siddiqui (2024) sebagai kapasitas sistem untuk menyerap (*absorb*), beradaptasi (*adapt*), dan memulihkan diri (*recover*) dari gangguan. Indeks resilience triangular yang umum digunakan dalam rekayasa sistem didefinisikan sebagai:

$$R_{\text{index}} = \frac{T_{\text{baseline}} - T_{\text{degraded}}}{T_{\text{total disruption}}}$$

di mana $T_{\text{baseline}}$ adalah level kinerja nominal (misalnya 100% potensi vaksin), $T_{\text{degraded}}$ adalah level kinerja terendah saat gangguan puncak, dan $T_{\text{total disruption}}$ adalah total durasi dari awal gangguan hingga pemulihan penuh. Nilai $R_{\text{index}} \in [0, 1]$ di mana 1 menunjukkan resilience sempurna dan 0 menunjukkan kegagalan katastrofik.

### 2.2 Model Degradasi Potensi Vaksin (Persamaan Arrhenius)

Degradasi potensi biologis produk rantai dingin mengikuti kinetika kimia yang bergantung pada suhu. Model Arrhenius yang diadopsi dalam studi stabilitas farmasi menyatakan laju degradasi $k$ sebagai:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

di mana $A$ adalah faktor frekuensi pre-eksponensial, $E_a$ adalah energi aktivasi (untuk protein vaksin tipikal $E_a \approx 80\text{–}120\text{ kJ/mol}$), $R$ adalah konstanta gas universal ($8{,}314 \text{ J/(mol·K)}$), dan $T$ adalah suhu absolut dalam Kelvin. Konsekuensinya, setiap kenaikan suhu $1^\circ\text{C}$ di atas ambang batas mempercepat laju degradasi secara eksponensial.

### 2.3 Model Probabilitas Kegagalan Sensor (Distribusi Weibull)

Sensor DS18B20 yang beroperasi secara kontinu mengalami degradasi seiring waktu. Khurshid dan Siddiqui (2024) mengusulkan penggunaan distribusi Weibull untuk memodelkan waktu hingga kegagalan (*time-to-failure*):

$$f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta - 1} \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan $\beta$ sebagai *shape parameter* (umumnya $\beta > 1$ untuk *wear-out failures*) dan $\eta$ sebagai *scale parameter* atau *characteristic life*. Fungsi reliabilitas komplemen kumulatifnya:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

### 2.4 Mean Time To Recovery (MTTR) dan Resilience Time

Waktu pemulihan sistem rantai dingin setelah ekskursi suhu dimodelkan sebagai:

$$\text{MTTR} = \int_0^{\infty} t \cdot g(t) \, dt$$

di mana $g(t)$ adalah *probability density function* dari waktu pemulihan. Khurshid dan Siddiqui (2024) menurunkan resilience time sebagai:

$$R_t = \int_{t_d}^{t_r} \left[ Q_{\text{nominal}} - Q(t) \right] dt$$

di mana $Q_{\text{nominal}}$ adalah kinerja nominal, $Q(t)$ adalah kinerja sesaat, $t_d$ adalah waktu onset gangguan, dan $t_r$ adalah waktu pemulihan penuh. Integral ini merepresentasikan "area kehilangan" yang menjadi indikator dampak ekonomi.

### 2.5 Model Jaringan Sensor IoT (Network Reliability)

Untuk sistem dengan $n$ sensor DS18B20 yang terhubung secara *one-wire*, reliabilitas jaringan sensor mengikuti reliabilitas seri karena kegagalan satu sensor memutus komunikasi *bus*:

$$R_{\text{network}} = \prod_{i=1}^{n} R_i(t)$$

Jika setiap sensor memiliki reliabilitas identik $R_i = 0{,}99$ dan $n = 4$, maka $R_{\text{network}} = 0{,}99^4 \approx 0{,}9606$. Untuk konfigurasi paralel-redundan (dual-bus) sebagaimana direkomendasikan oleh Putra dkk. (2024):

$$R_{\text{parallel}} = 1 - \prod_{i=1}^{m}(1 - R_i)$$

dengan $m$ jalur komunikasi independen.

### 2.6 Model Deteksi Dini (*Early Warning Lead Time*)

Nilai tambah utama sistem IoT dibandingkan pencatatan manual setiap 2 jam adalah *lead time* peringatan dini:

$$\Delta t_{\text{lead}} = \frac{T_{\text{manual interval}}}{2} - \tau_{\text{IoT}}$$

di mana $\tau_{\text{IoT}}$ adalah latensi deteksi sistem IoT (orde detik hingga menit). Dengan interval manual 2 jam dan $\tau_{\text{IoT}} \approx 60$ detik, diperoleh $\Delta t_{\text{lead}} \approx 3540$ detik atau hampir 1 jam—jendela kritis yang menyelamatkan potensi produk.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain

Berdasarkan implementasi Putra dkk. (2024) pada UPTD Farmasi Dinkes Kabupaten Siak, arsitektur sistem IoT temperature monitoring mengikuti lapisan (*layer*) berikut:

1. **Lapisan Sensor (Perception Layer):** Sensor DS18B20 ditempatkan pada minimal tiga titik kritis di dalam *cold chain box* (dasar, tengah, pintu) untuk mengukur gradien suhu. Setiap sensor memiliki alamat 64-bit *unique* pada protokol *one-wire*.
2. **Lapisan Komunikasi (Network Layer):** Mikrokontroler (misalnya ESP32 atau Arduino) membaca data sensor dengan *polling interval* 10–30 detik, lalu mentransmisikan melalui Wi-Fi/GSM ke *cloud server*.
3. **Lapisan Aplikasi (Application Layer):** *Dashboard* berbasis web/mobile menampilkan data suhu secara *real-time*, dengan logika *threshold alert* ketika suhu melampaui $2^\circ\text{C}$ atau $8^\circ\text{C}$.
4. **Lapisan Notifikasi:** SMS, email, atau *push notification* dikirim ke apoteker penanggung jawab saat ambang batas terlampaui.

### 3.2 Diagram Alir SOP Cold Chain Resilience

```
┌──────────────────────────────────────────────────────────────┐
│ 1. PRE-DEPLOYMENT VALIDATION                                 │
│    - Kalibrasi sensor DS18B20 (3 titik: 0°C, 4°C, 10°C)    │
│    - Uji linearity pada rentang -10°C s/d +50°C              │
│    - Validasi MTBF ≥ 50.000 jam                             │
└────────────────┬─────────────────────────────────────────────┘
                 ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. INSTALASI & COMMISSIONING                                 │
│    - Pasang sensor di 3 titik kritis cold chain box         │
│    - Konfigurasi threshold: T_low=2°C, T_high=8°C           │
│    - Set sampling rate = 15 detik                           │
│    - Test alarm: simulasi ekskursi 30 menit                │
└────────────────┬─────────────────────────────────────────────┘
                 ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. OPERASIONAL (Continuous Monitoring)                      │
│    Loop setiap 15 detik:                                    │
│    ├─ Baca T dari 3 sensor                                  │
│    ├─ Validasi konsistensi (ΔT antar sensor ≤ 1°C)         │
│    ├─ Update database cloud                                 │
│    └─ Jika T ∉ [2°C, 8°C]: TRIGGER ALERT                   │
└────────────────┬─────────────────────────────────────────────┘
                 ▼
┌──────────────────────────────────────────────────────────────┐
│ 4. RESPON TERHADAP EXCURSION                                │
│    - Notifikasi ke apoteker (≤ 60 detik)                    │
│    - Aktifkan protokol investigasi                          │
│    - Isolasi produk terduga terdampak                       │
│    - Dokumentasi timeline ekskursi                          │
└────────────────┬─────────────────────────────────────────────┘
                 ▼
┌──────────────────────────────────────────────────────────────┐
│ 5. POST-EVENT ANALYSIS & CAPA                               │
│    - Hitung R_index dan total Q_loss                        │
│    - Root Cause Analysis (5-Whys, Fishbone)                 │
│    - Corrective and Preventive Action (CAPA)                │
│    - Review kalibrasi sensor terjadwal                       │
└──────────────────────────────────────────────────────────────┘
```

### 3.3 Standar Industri yang Diacu

Implementasi harus memenuhi standar: (i) **WHO PQS E006** untuk *cold chain equipment*; (ii) **Good Distribution Practice (GDP