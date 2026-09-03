# 2134 — Model Resiliensi Logistik Rantai Dingin Produk Mudah Rusak dan Sistem Monitoring Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rantai pasok produk termolabil—mulai dari vaksin, produk biofarmasi, makanan segar, hingga bahan kimia sensitif—yang mengintegrasikan lima pilar operasional: penyimpanan terkontrol suhu, transportasi berinsulasi, pergudangan, kemasan termal, dan sistem dokumentasi kepatuhan suhu (Khurshid & Siddiqui, 2024). Setiap deviasi suhu di luar ambang batas yang ditentukan (misalnya $2°C \leq T \leq 8°C$ untuk mayoritas vaksin dalam pedoman WHO PQS E001) bukan hanya menyebabkan degradasi kualitas produk, tetapi juga pemborosan ekonomi langsung, risiko kesehatan masyarakat, dan tuntutan regulasi. Dalam konteks Indonesia, Unit Pelaksana Teknis Dinas (UPTD) Farmasi di tingkat kabupaten menghadapi tantangan struktural yang khas: volume distribusi yang meningkat pasca-pandemi, geografi kepulauan yang menyulitkan homogenitas suhu, serta keterbatasan SDM apoteker untuk melakukan pencatatan manual setiap 2 jam pada log sheet kertas (Putra, Defit, & Nurcahyo, 2024). Putra dkk. (2024) secara eksplisit mengidentifikasi dua masalah utama di UPTD Farmasi Dinas Kesehatan Kabupaten Siak: ketiadaan alat pemantauan suhu *real-time* yang mampu memberikan peringatan otomatis saat suhu cold chain box naik melebihi ambang batas (akibat kerusakan internal kompresor, pembukaan pintu berulang, atau kegagalan catu daya), serta proses dokumentasi manual yang rentan terhadap human error, keterlambatan, dan pemalsuan data. Ketiadaan visibilitas kondisi suhu secara kontinu menciptakan blind spot yang menurunkan resiliensi rantai dingin—yakni kemampuan sistem untuk menyerap, beradaptasi, dan pulih dari disruption tanpa mengorbankan integritas produk.

Urgensi rekayasa sistem untuk menjawab tantangan ini bersifat multidimensional. Dari perspektif ekonomi, World Health Organization (WHO) memperkirakan kerugian global akibat cold chain failure pada vaksin mencapai $数十 miliar annually melalui program wastage monitoring. Dari perspektif teknologi, konvergensi sensor digital presisi tinggi, platform IoT berbiaya rendah, dan analitik data telah membuka peluang untuk membangun cyber-physical cold chain system yang mampu beroperasi secara *self-monitoring*, *self-reporting*, dan *self-correcting*. Sensor DS18B20 yang digunakan oleh Putra dkk. (2024) merepresentasikan kelas sensor suhu digital 1-Wire dengan akurasi $\pm 0.5°C$ pada rentang $-10°C$ hingga $+85°C$ yang memenuhi requirement sensitifitas untuk sebagian besar aplikasi farmasi. Dari perspektif *resilience engineering*, framework yang diajukan Khurshid dan Siddiqui (2024) menyediakan pendekatan stokastik untuk mengkuantifikasi probabilitas sistem tetap beroperasi dalam batas fungsionalnya meskipun terjadi satu atau lebih disruption events simultan. Modul 2134 ini menyintesiskan kedua perspektif tersebut menjadi satu kerangka rekayasa terpadu: membangun sistem cold chain yang tidak hanya *terukur* (observable) melalui IoT, tetapi juga *tangguh* (resilient) secara matematis terhadap berbagai skenario kegagalan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Stokastik Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) memodelkan cold chain sebagai finite-state Markov chain dengan state ruang $\{S_0, S_1, S_2, S_3\}$ yang merepresentasikan tingkat fungsional sistem:

- $S_0$: *Normal state* — seluruh node berfungsi pada kapasitas nominal, suhu dalam batas
- $S_1$: *Alert state* — satu node mengalami degradasi parsial (misalnya pintu terbuka > 30 detik)
- $S_2$: *Critical state* — suhu keluar dari rentang operasional, produk terancam rusak
- $S_3$: *Failure state* — produk dikonfirmasi rusak/dimusnahkan

Laju transisi antar state dimodelkan sebagai matriks generator $Q$:

$$
Q = \begin{bmatrix} -\lambda_{01} & \lambda_{01} & 0 & 0 \\ \mu_{10} & -(\mu_{10}+\lambda_{12}) & \lambda_{12} & 0 \\ 0 & \mu_{21} & -(\mu_{21}+\lambda_{23}) & \lambda_{23} \\ 0 & 0 & \mu_{32} & -\mu_{32} \end{bmatrix}
$$

dengan parameter $\lambda_{ij}$ merepresentasikan *failure rate* (laju transisi ke state yang lebih buruk) dan $\mu_{ij}$ merepresentasikan *recovery rate*. *Steady-state probability* tiap state diperoleh dari solusi sistem persamaan $\pi Q = 0$ dengan konstrain $\sum_i \pi_i = 1$.

### 2.2 Indeks Resiliensi Sistem

Resilience index sistem cold chain didefinisikan oleh Khurshid dan Siddiqui (2024) sebagai:

$$
R(t) = \frac{\text{Waktu sistem beroperasi dalam state fungsional}}{\text{Total waktu observasi}} \times \frac{1}{1 + CV(\tau_{recovery})}
$$

dengan $CV(\tau_{recovery}) = \sigma_{\tau}/\mu_{\tau}$ adalah koefisien variasi dari *recovery time*. Semakin rendah variabilitas waktu pemulihan, semakin resilien sistem tersebut karena predictability-nya meningkat.

### 2.3 Model Termal Cold Chain Box

Perubahan suhu internal cold chain box dimodelkan menggunakan persamaan keseimbangan energi Newtonian:

$$
m \cdot c_p \cdot \frac{dT(t)}{dt} = \dot{Q}_{in} - \dot{Q}_{out} - \dot{Q}_{cool}(t)
$$

dengan:
- $m$ = massa total produk + kemasan (kg)
- $c_p$ = kapasitas panas spesifik produk ($\approx 3.5$ kJ/kg·K untuk produk biologis)
- $\dot{Q}_{in}$ = laju kalor masuk dari lingkungan (akibat konduksi dinding, pembukaan pintu, infiltrasi udara)
- $\dot{Q}_{out}$ = laju kalor keluar alami
- $\dot{Q}_{cool}(t)$ = kapasitas refrigerasi sistem pendingin (fungsi siklus kompresor)

Laju infiltrasi kalor akibat pembukaan pintu dapat dimodelkan sebagai:

$$
\dot{Q}_{in,door} = \rho_{air} \cdot c_{p,air} \cdot V_{door} \cdot (T_{ambient} - T_{internal}) \cdot f_{open}
$$

dengan $f_{open}$ adalah frekuensi pembukaan per satuan waktu dan $V_{door}$ adalah volume udara yang dipertukarkan per kejadian pembukaan.

### 2.4 Model Akurasi Sensor DS18B20 dan Sampling Theory

Sensor DS18B20 memiliki akurasi $\epsilon_{sensor} = \pm 0.5°C$ pada rentang $-10°C$ hingga $+85°C$ dengan resolusi konfigurasi 12-bit sebesar $0.0625°C$. Dengan laju sampling $f_s$ dan asumsi noise Gaussian independen, error pengukuran total memenuhi:

$$
\sigma_{total} = \sqrt{\sigma_{sensor}^2 + \sigma_{quantization}^2 + \sigma_{transmission}^2}
$$

Sesuai teorema Nyquist-Shannon, untuk menangkap fluktuasi suhu dengan frekuensi maksimum $f_{max}$, laju sampling minimum adalah $f_s \geq 2 \cdot f_{max}$ (Putra dkk., 2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Temperature Monitoring

Berdasarkan arsitektur yang diimplementasikan Putra, Defit, dan Nurcahyo (2024), sistem cold chain monitoring tersusun atas empat lapis:

1. **Perception Layer (Sensor Layer):** Sensor DS18B20 ditempatkan pada multiple points (inlet, outlet, mid-section, near door) untuk menangkap gradien suhu spatial. Multiple DS18B20 dapat dihubungkan pada satu bus 1-Wire karena setiap sensor memiliki unique 64-bit serial address.

2. **Network Layer:** Mikrokontroler (Arduino/ESP32/NodeMCU) membaca data sensor, melakukan konversi digital-to-Celsius, dan mengirimkan data melalui protokol komunikasi (WiFi untuk ESP32, GSM untuk daerah tanpa infrastruktur tetap). Format data JSON:
```json
{"device_id": "CCB-001", "timestamp": "2024-XX-XXTXX:XX:XXZ", "sensors": [{"id":"S1","temp":4.2},...]}
```

3. **Processing Layer:** Data disimpan pada database time-series (InfluxDB/MySQL) dengan pencatatan immutable untuk audit trail kepatuhan.

4. **Application Layer:** Dashboard web/mobile menampilkan real-time temperature, alert notifications (SMS/email/WA) saat threshold dilanggar, dan automated report generation untuk regulator.

### 3.2 SOP Implementasi Standar

**SOP-CC-01: Pemasangan Sensor**
- Kalibrasi setiap sensor DS18B20 terhadap reference thermometer bersertifikat (asumsi deviasi awal $d_0 \leq 0.3°C$)
- Pemasangan pada lokasi representative yang terdokumentasi dalam layout diagram
- Validasi koneksi bus 1-Wire menggunakan parasitic power mode test

**SOP-CC-02: Konfigurasi Alert Threshold**
- Set primary alarm pada $T > 8°C$ atau $T < 2°C$ (WHO PQS standard untuk vaksin)
- Set secondary alarm pada $T > 7.5°C$ atau $T < 2.5°C$ sebagai early warning (predictive alarm)
- Konfigurasi hysteresis untuk mencegah alarm chattering: $|T_{set} - T_{reset}| \geq 0.5°C$

**SOP-CC-03: Sampling dan Logging**
- Sampling rate default: 1 reading per 60 detik (sesuai requirement Putra dkk., 2024)
- Logging interval penyimpanan: 5 menit (untuk efisiensi storage)
- Data retention minimum: 5 tahun (sesuai regulasi farmasi)

**SOP-CC-04: Pemulihan Pasca-Disruption**
- Investigasi root cause dalam 1 jam sejak alarm
- Quarantine produk yang terpapar suhu di luar rentang
- Decision tree: jika exposure < 30 menit → lanjutkan; jika > 30 menit → evaluasi vial-by-vial dengan vaccine vial monitor (VVM)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus: Cold Chain Box UPTD Farmasi

Berdasarkan skenario operasional riil yang dilaporkan Putra dkk. (2024):

| Parameter | Nilai | Satuan |
|---|---|---|
| Kapasitas cold chain box ($V$) | 50 | Liter |
| Massa produk疫苗 (vaksin) | 8 | kg |
| $c_p$ produk | 3.5 | kJ/kg·K |
| Suhu ambient ($T_{amb}$) | 30 | °C |
| Suhu set-point ($T_{set}$) | 5 | °C |
| Frekuensi buka pintu ($f_{open}$) | 6 | kali/jam |
| Durasi buka pintu rata-rata | 15 | detik |
| Volume udara per buka pintu | 0.0008 | m³ |
| Kapasitas refrigerasi | 80 | W |
| $\lambda_{01}$ (failure rate ke alert) | 0.05 | /jam |
| $\lambda_{12}$ (degradasi ke critical) | 0.08 | /jam |
| $\mu_{10}$ (recovery normal) | 0.95 | /jam |
| $\mu_{21}$ (recovery alert) | 0.40 | /jam |

### 4.2 Perhitungan 1: Laju Infiltrasi Kalor dari Pembukaan Pintu

$$
\dot{Q}_{in,door} = (1.2 \text{ kg/m}^3)(1.005 \text{ kJ/kg·K})(0.0008 \text{ m}^3)(30-5)\text{K}(6 \text{ /jam})
$$

$$
\dot{Q}_{in,door} = (1.2)(1.005)(0.0008)(25)(6) = 0.1447 \text{ kJ/jam} = 0.0402 \text{ W}
$$

### 4.3 Perhitungan 2: Konstanta Waktu Termal Sistem

Time constant sistem termal:

$$
\tau_{thermal} = \frac{m \cdot c_p}{\dot{Q}_{cool}/\Delta T} = \frac{(8)(3.5)}{80/25} = \frac{28}{3.2} = 8.75 \text{ jam}
$$