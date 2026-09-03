# 2710 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products): Integrasi Pemantauan Suhu Real-Time dan Pemodelan Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari rantai pasok produk yang rentan terhadap degradasi mutu (perishable) seperti vaksin, produk biofarmasi, makanan beku, dan bahan biologis. Khurshid dan Siddiqui (2024) dalam artikelnya yang berjudul *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa lebih dari 50% produk farmasi global bersifat termolabil dan membutuhkan pemeliharaan suhu dalam rentang sempit (umumnya 2–8 °C untuk vaksin, -20 °C untuk produk beku, dan -70 °C untuk mRNA-based therapeutics). Gangguan sekecil apa pun—mulai dari keterlambatan distribusi, kegagalan refrigerasi, hingga kesalahan prosedur penanganan—dapat menimbulkan *thermal excursion* yang merusak integritas produk. 

Kasus empiris yang sangat relevan dipotret oleh Putra, Defit, dan Nurcahyo (2024) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Studi ini mendokumentasikan bahwa *cold chain box* sebagai media penyimpanan dan pendingin vaksin belum dilengkapi alat pemantauan suhu *real-time* yang mampu memberikan peringatan dini (*early warning*) kepada apoteker ketika terjadi kenaikan suhu akibat kerusakan internal maupun eksternal. Lebih lanjut, pencatatan suhu masih dilakukan secara manual setiap 2 jam melalui *log sheet* oleh apoteker—suatu prosedur yang rentan terhadap *human error*, keterlambatan respons, dan tidak dapat memberikan visibilitas *continuous monitoring* yang menjadi prasyarat standar WHO PQS (Performance, Quality and Safety) serta ISO 23412:2020 untuk transportasi rantai dingin.

Dari perspektif ekonomi, WHO memperkirakan bahwa sekitar 25–50% vaksin global terbuang karena pelanggaran rantai dingin, menimbulkan kerugian hingga USD 600 juta per tahun. Di sisi lain, industri makanan kehilangan produk senilai lebih dari USD 35 miliar setiap tahun akibat kegagalan *cold chain*. Kerentanan ini makin nyata dengan meningkatnya kejadian *extreme weather events*, ketidakstabilan energi listrik, serta kompleksitas lintas batas negara yang menambah dimensi *disruption risk* pada sistem logistik modern. Oleh karena itu, kebutuhan akan model resiliensi yang tidak hanya mengukur keandalan (*reliability*) tetapi juga kemampuan pemulihan (*recoverability*) sistem menjadi sangat urgen—menjadi fokus utama Khurshid dan Siddiqui (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Resiliensi Cold Chain

Khurshid dan Siddiqui (2024) mengusulkan model resiliensi yang memandang rantai dingin sebagai sistem dinamik dengan kemampuan mempertahankan tingkat layanan (service level) di bawah tekanan gangguan. Formulasi inti mengikuti Bruneau-Krein trapesium resiliensi yang disesuaikan untuk konteks suhu:

$$Res(t_0, t_1) = \frac{\int_{t_0}^{t_1} Q(t) \, dt}{(t_1 - t_0) \cdot Q_{opt}}$$

di mana:
- $Q(t)$ adalah fungsi performa sistem (efektivitas suhu aktual terhadap target pada waktu $t$),
- $Q_{opt}$ adalah performa optimal sistem saat tidak terjadi gangguan,
- $t_0$ adalah waktu onset gangguan,
- $t_1$ adalah waktu pemulihan penuh sistem.

Nilai $Res(t_0,t_1) \in [0,1]$, dengan $Res \to 1$ mengindikasikan sistem sangat resilien dan $Res \to 0$ menunjukkan kegagalan sistemik.

### 2.2. Model Keandalan Komponen Cold Chain

Komponen utama cold chain—refrigerator, sensor, *phase change material* (PCM), dan *cold box*—dimodelkan menggunakan distribusi eksponensial untuk laju kegagalan konstan $\lambda$:

$$R(t) = e^{-\lambda t}$$

dengan *Mean Time Between Failures*:

$$MTBF = \frac{1}{\lambda}$$

Ketersediaan sistem (*availability*) diperoleh dari:

$$A = \frac{MTBF}{MTBF + MTTR} = \frac{\mu}{\lambda + \mu}$$

di mana $\mu = 1/MTTR$ adalah laju perbaikan.

### 2.3. State-Space Resilience Transition

Transisi status suhu produk dalam cold chain dimodelkan sebagai rantai Markov waktu-diskret dengan tiga state: **aman** ($S_1$, suhu dalam batas), **peringatan** ($S_2$, mendekati *critical threshold*), dan **kritis** ($S_3$, *thermal excursion*):

$$P_{ij}(k+1) = \sum_{m} P_{im}(k) \cdot p_{mj}$$

di mana $p_{mj}$ adalah probabilitas transisi dari state $m$ ke $j$. Matriks transisi $P$ berukuran $3 \times 3$ dan memenuhi $\sum_j p_{mj} = 1$. *Steady-state probability* $\pi$ diperoleh dari $\pi P = \pi$.

### 2.4. Persamaan Panas pada Cold Box (Fenomenologis)

Untuk mengkuantifikasi degradasi mutu akibat kenaikan suhu dalam *cold box*, digunakan model konduksi panas satu dimensi berbasis hukum Fourier:

$$\frac{\partial T(x,t)}{\partial t} = \alpha \frac{\partial^2 T(x,t)}{\partial x^2}$$

dengan $\alpha = k/(\rho c_p)$ adalah difusivitas termal material (untuk *expanded polystyrene* (EPS) umum, $\alpha \approx 0.8 \times 10^{-7}$ m²/s). Kondisi batasnya adalah suhu permukaan internal $T(0,t) = T_{PCM}(t)$ dan suhu ambien $T(L,t) = T_{amb}$.

### 2.5. Model Kerugian Ekonomi

Kerugian akibat thermal excursion dimodelkan sebagai:

$$L(t) = V \cdot c_p \cdot \int_{0}^{\tau} \left[ T(t) - T_{crit} \right]^{+} dt \cdot \gamma$$

di mana:
- $V$ adalah volume produk (m³),
- $c_p$ adalah kapasitas panas produk,
- $\tau$ adalah durasi paparan,
- $\gamma$ adalah koefisien kerugian per unit paparan,
- $[\cdot]^+$ adalah fungsi *positive part*.

### 2.6. Formulasi Optimasi Biaya Resiliensi

Trade-off antara investasi instrumentasi dan pengurangan kerugian dimodelkan sebagai:

$$\min_{I} \ C(I) = C_0 + \int_{0}^{T} \left[ L(t) \cdot (1 - Res(I,t)) + \beta \cdot I \right] dt$$

dengan $I$ adalah tingkat investasi pemantauan IoT, $\beta$ adalah faktor diskonto biaya, dan $C_0$ adalah biaya modal awal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Pemantauan Suhu IoT (Berdasarkan Putra et al., 2024)

Putra dkk. (2024) merancang arsitektur monitoring suhu berbasis sensor **DS18B20** dengan karakteristik teknis berikut:
- *Range* suhu: -55 °C hingga +125 °C
- Akurasi: ±0.5 °C pada rentang -10 °C hingga +85 °C
- Resolusi konfigurabel: 9–12 bit (resolusi 0.0625 °C pada mode 12-bit)
- Antarmuka *1-Wire* yang memungkinkan multiple sensor dalam satu bus
- Waktu konversi: 750 ms pada resolusi 12-bit
- Konsumsi daya rendah, ideal untuk baterai

Arsitektur sistem berlapis sebagai berikut:

```
[Sensor DS18B20] → [Mikrokontroler ESP32/Arduino] 
        ↓ (I2C/UART) 
[Display LCD 20×4] + [Modul SD Card Logger] 
        ↓ (WiFi/GSM)
[Cloud Database (Firebase/MySQL)] 
        ↓
[Web Dashboard + SMS/WhatsApp Alert Bot]
```

### 3.2. SOP Operasional Cold Chain

**Tabel 1. SOP Pemantauan Cold Chain (Sintesis dari Khurshid & Siddiqui, 2024 dan Putra et al., 2024)**

| Tahap | Aktivitas | Standar | Output |
|-------|-----------|---------|--------|
| Pra-distribusi | Kalibrasi sensor DS18B20 | Akurasi ±0.5 °C | Sertifikat kalibrasi |
| Loading | Verifikasi suhu awal cold box (2–8 °C) | WHO PQS E001 | Log digital + ID batch |
| In-transit | Sampling setiap 60 detik, alert pada $T \geq 8 °C$ | ISO 23412:2020 | Data *time-series* |
| Receiving | Verifikasi thermal history | Continuous logging | Analisis $\int (T-T_{crit})^+ dt$ |
| Storage | Pemantauan triple-redundant (sensor + IoT + manual) | CPOB 2024 | Compliance log |
| Audit | Traceability check | GDP (Good Distribution Practice) | Audit report |

### 3.3. Diagram Alir Logika Peringatan Dini

```
[Start] → Baca Suhu T(t)
        ↓
    T(t) ∈ [2°C, 8°C]?  ──Ya──→ Status NORMAL → Log → Loop
        ↓ Tidak
    T(t) ∈ (8°C, 10°C]? ──Ya──→ Status WARNING → SMS ke Apoteker → Loop
        ↓ Tidak
    T(t) > 10°C?         ──Ya──→ Status CRITICAL → Sirine + SMS + Auto-cut power
        ↓
    [Trigger protokol penarikan produk]
```

Prosedur *escalation* ini memastikan tiga lapis kontrol: pencegahan (preventif), deteksi (deteksi dini), dan koreksi (quarantine produk terkontaminasi).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak

**Parameter Input (berdasarkan studi Putra et al., 2024 dengan modifikasi):**

- Volume *cold box*: $V = 0.05$ m³ (kapasitas ~500 vial)
- Suhu target: $T_{opt} = 5$ °C
- Ambang kritis: $T_{crit} = 8$ °C (berdasarkan WHO)
- Kapasitas panas produk: $c_p = 3500$ J/(kg·K)
- Massa produk: $m = 40$ kg
- Koefisien kerugian: $\gamma = 1.5 \times 10^6$ Rp/(jam·°C)
- Laju kegagalan cold box: $\lambda = 0.002$ per jam
- MTTR dengan sistem IoT: $MTTR_{IoT} = 0.5$ jam
- MTTR tanpa sistem IoT: $MTTR_{manual} = 4$ jam

### 4.2. Perhitungan Resiliensi

**Langkah 1:** Hitung *availability* sistem tanpa IoT:
$$A_{manual} = \frac{1/\lambda}{1/\lambda + MTTR_{manual}} = \frac{