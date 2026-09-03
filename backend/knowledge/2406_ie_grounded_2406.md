# 2406 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Sistem Monitoring IoT dan Kerangka Ketahanan Rantai Pasok

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan tulang punggung distribusi produk farmasi, pangan, dan bioteknologi yang memiliki sifat termolabil — produk yang mengalami degradasi irreversibel ketika terpapar suhu di luar rentang preskripsinya. Kerentanan struktural rantai dingin telah meningkat secara eksponensial dalam satu dekade terakhir seiring dengan kompleksitas jaringan distribusi farmasi global, dimana satu titik kegagalan suhu (*temperature excursion*) dapat menyebabkan kerugian ekonomi miliaran rupiah dan dampak sosial berupa penurunan efikasi vaksin atau pembusukan pangan massal. Menurut Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), model resiliensi untuk cold chain harus memperhitungkan tidak hanya kapasitas sistem untuk mempertahankan fungsinya di bawah tekanan operasional, tetapi juga kemampuannya untuk pulih (*recoverability*) ketika gangguan terjadi. Pendekatan ini menjadi semakin relevan karena pola disrupsi rantai pasok modern — mulai dari kegagalan refrigerasi, keterlambatan transportasi, hingga *human error* dalam pencatatan — bersifat multifaktorial dan seringkali tidak dapat diprediksi dengan pendekatan *reliability* klasik saja.

Konteks operasional riil di Indonesia memperkuat urgensi permasalahan ini. Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan secara empiris bahwa UPTD Farmasi Dinas Kesehatan Kabupaten Siak menghadapi tantangan kritis dalam penyimpanan vaksin di *cold chain box*, dimana dua permasalahan fundamental coexist: pertama, ketiadaan sistem pemantau suhu *real-time* yang mampu memberikan peringatan dini kepada personel apoteker ketika suhu melebihi ambang batas 2°C–8°C akibat kerusakan internal atau eksternal; kedua, proses pencatatan suhu yang masih mengandalkan *log sheet* manual dengan interval dua jam sekali — sebuah praktik yang tidak hanya rentan terhadap *human error* tetapi juga gagal menangkap *transient thermal event* yang terjadi di antara interval pencatatan. Fenomena ini bukan kasus terisolasi melainkan representatif dari kondisi 80% fasilitas penyimpanan farmasi tingkat kabupaten di Indonesia yang masih beroperasi dengan standar *Good Distribution Practice* (GDP) suboptimal.

Dimensi ekonomi dari kegagalan cold chain bersifat katastrofik. World Health Organization (WHO) memperkirakan bahwa sekitar 50% vaksin global terbuang sia-sia akibat kegagalan cold chain, dengan nilai ekonomis yang melampaui US$ 35 miliar per tahun. Lebih dari itu, paparan suhu di luar rentang aman selama lebih dari 30 menit sudah cukup untuk menginaktivasi vaksin berbasis mRNA atau subunit protein yang sensitif terhadap *thermal shock*. Dengan demikian, rekayasa sistem untuk meningkatkan resiliensi cold chain bukan sekadar persoalan efisiensi logistik melainkan isu kesehatan masyarakat dan keamanan farmasi nasional. Modul 2406 ini akan membahas secara sistematis kerangka teoretis resiliensi cold chain, integrasi teknologi IoT sebagai *enabler* resiliensi, formulasi kuantitatif untuk pengukuran performa sistem, serta aplikasi lintas sektoral dari manufaktur farmasi hingga distribusi pangan segar.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Cold Chain

Model resiliensi yang diajukan oleh Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) beroperasi pada tiga domain waktu: **fase pra-disrupsi** (kapasitas absorbsi), **fase during-disrupsi** (kapasitas adaptasi), dan **fase pasca-disrupsi** (kapasitas restorasi). Formulasi matematis untuk *Resilience Index* (RI) didefinisikan sebagai:

$$RI = \int_{t_0}^{t_f} \frac{Q(t)}{Q_{nom}} \, dt \cdot \frac{1}{T_{total}}$$

di mana $Q(t)$ adalah *system performance function* pada waktu $t$, $Q_{nom}$ adalah *nominal performance* saat sistem beroperasi normal, $t_0$ adalah waktu inisiasi disrupsi, $t_f$ adalah waktu saat sistem pulih sepenuhnya, dan $T_{total} = t_f - t_0$ adalah total durasi disrupsi. Indeks ini mendekati nilai 1 ketika sistem mempertahankan performa penuh selama disrupsi dan mendekati 0 ketika sistem mengalami *collapse* sempurna.

### 2.2 Degradasi Produk Termolabil (Arrhenius-Kinetic Model)

Untuk produk biologis seperti vaksin, degradasi mengikuti persamaan kinetika Arrhenius orde pertama:

$$\ln \frac{P(t)}{P_0} = -k \cdot t, \quad \text{dimana } k = A \cdot e^{-E_a / RT}$$

$P(t)$ adalah potensi produk pada waktu $t$, $P_0$ adalah potensi awal, $k$ adalah konstanta laju degradasi, $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $T$ adalah suhu absolut (K). Untuk vaksin DPT yang umum di fasilitas UPTD, parameter tipikal adalah $E_a = 84.000$ J/mol dan $A = 1{,}2 \times 10^{11}$ jam$^{-1}$, menghasilkan waktu paruh degradasi pada suhu 25°C sekitar 5,5 jam.

### 2.3 Model Probabilitas Kegagalan Sensor dan Akuisisi Data IoT

Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mengimplementasikan sensor DS18B20 dengan akurasi $\pm 0{,}5°C$ pada resolusi 9–12 bit. Akurasi pengukuran suhu aktual mengikuti:

$$T_{measured} = T_{true} + \epsilon, \quad \epsilon \sim \mathcal{N}(0, \sigma^2)$$

dengan $\sigma = 0{,}25°C$ untuk DS18B20 terkalibrasi. Interval sampling optimal $f_s$ ditentukan melalui *Nyquist criterion* untuk menangkap fluktuasi termal:

$$f_s \geq 2 \cdot f_{max} = \frac{2}{\tau_{thermal}}$$

dimana $\tau_{thermal}$ adalah konstanta waktu termal cold chain box yang tipikalnya berkisar 15–45 menit, sehingga $f_s \geq 4$ sampel/jam sudah cukup, namun untuk *margin of safety* digunakan $f_s = 12$ sampel/jam (interval 5 menit).

### 2.4 Total Product Thermal Stress Index

Indeks stres termal kumulatif yang menggabungkan efek suhu dan durasi:

$$TTS = \sum_{i=1}^{n} \int_{t_{i-1}}^{t_i} k(T(\tau)) \, d\tau \approx \sum_{i=1}^{n} k(\bar{T}_i) \cdot \Delta t_i$$

di mana $\bar{T}_i$ adalah suhu rerata pada interval ke-$i$. Ketika $TTS > TTS_{critical}$, produk dinyatakan失效 dan harus dimusnahkan. Untuk vaksin, $TTS_{critical}$ berkorelasi dengan *Vaccine Vial Monitor* (VVM) stage 4 (rejection point).

### 2.5 Formulasi Biaya Kerugian dan Return on Investment (ROI) IoT

Kerugian finansial akibat disrupsi cold chain:

$$L_{total} = \sum_{j=1}^{m} \left[ C_j \cdot N_j \cdot \mathbb{1}(TTS_j > TTS_{critical}) \right] + C_{emergency}$$

dimana $C_j$ adalah biaya satuan produk $j$, $N_j$ adalah jumlah unit, $\mathbb{1}(\cdot)$ adalah fungsi indikator, dan $C_{emergency}$ adalah biaya respons darurat. ROI sistem IoT monitoring:

$$ROI = \frac{\sum_{y=1}^{Y} \frac{L_{prevented,y} - C_{IoT,y}}{(1+r)^y}}{C_{initial}}$$

dengan $r$ adalah *discount rate* dan $Y$ adalah horizon analisis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Cold Chain Resilient

Implementasi sistem resiliensi cold chain mengikuti arsitektur berlapis (*layered resilience architecture*):

**Layer 1 — Sensing Layer:** Sensor DS18B20 terdistribusi di dalam cold chain box (minimal 3 titik: inlet, outlet, dan zona tengah), terhubung via protokol *1-Wire* ke mikrokontroler ESP32 sebagai *data acquisition unit*. Sensor DS18B20 menggunakan alamat unik 64-bit (*ROM code*) sehingga multiple sensor dapat dipasang pada satu bus data. Kalibrasi dilakukan terhadap *reference thermometer* bersertifikat traceable ke NIST dengan metode *two-point calibration* pada 0°C (*ice bath*) dan 25°C (*standard water bath*).

**Layer 2 — Communication Layer:** Transmisi data menggunakan kombinasi MQTT protocol (port 1883) melalui Wi-Fi lokal dengan fallback GSM/LTE untuk konektivitas saat fasilitas berpindah lokasi. Payload JSON berisi timestamp ISO 8601, sensor ID, nilai suhu dalam °C dengan presisi dua desimal, status baterai, dan checksum CRC-8 untuk integritas data.

**Layer 3 — Processing & Analytics Layer:** Platform berbasis cloud (InfluxDB + Grafana atau ThingsBoard) melakukan: (a) validasi data *real-time*, (b) deteksi anomali menggunakan *exponentially weighted moving average* (EWMA), (c) kalkulasi TTS kumulatif, dan (d) *predictive analytics* berbasis *autoregressive integrated moving average* (ARIMA) untuk peramalan suhu 30–60 menit ke depan.

**Layer 4 — Response & Control Layer:** *Alert escalation protocol* tiga tingkat: **Level 1** (suhu 6°C–7,5°C): notifikasi SMS/WhatsApp ke apoteker; **Level 2** (suhu 7,5°C–10°C): alarm audio + panggilan telepon otomatis; **Level 3** (suhu >10°C atau durasi >30 menit pada Level 2): aktivasi prosedur karantina produk dan notifikasi ke otoritas kesehatan kabupaten/provinsi.

### 3.2 Diagram Alir SOP Monitoring Cold Chain

```
[START] → [Inisialisasi Sensor DS18B20] → [Kalibrasi 2-titik] 
    ↓
[Loop Setiap Δt = 5 menit]
    ↓
[Baca Suhu dari Semua Sensor]
    ↓
[Validasi: T_min ≤ T_i ≤ T_max?]
    ├── TIDAK → [Trigger Alert Level Sesuai] → [Log ke Database] → [Cek Recovery]
    └── YA → [Update EWMA & TTS] → [Prediksi ARIMA]
                ↓
         [TTS < Threshold?]
                ├── TIDAK → [Prosedur Karantina]
                └── YA → [Kirim Data ke Cloud] → [Kembali ke Loop]
```

### 3.3 SOP Tanggap Darurat (Emergency Response)

1. **Deteksi (0–2 menit):** Sistem otomatis mendeteksi pelanggaran suhu dan mengaktifkan *buzzer* serta LED merah pada panel lokal.
2. **Verifikasi (2–5 menit):** Apoteker melakukan verifikasi manual dengan termometer independen dan memeriksa segel cold chain box.
3. **Stabilisasi (5–15 menit):** Jika suhu melebihi 8°C, pindahkan vaksin ke cold chain box cadangan yang telah di-*pre-condition* pada 4°C ± 1°C.
4. **Karantina & Evaluasi (15–60 menit):** Vaksin yang terekspos dikarantina dengan label *quarantine tag* dan dilakukan evaluasi TTS. Jika TTS > threshold, vaksin dimusnahkan sesuai prosedur BPOM.
5. **Investigasi Root Cause (1–24 jam):** Analisis *post-mortem* menggunakan *fishbone diagram* untuk mengidentifikasi akar penyebab (kerusakan kompresor, kesalahan operator