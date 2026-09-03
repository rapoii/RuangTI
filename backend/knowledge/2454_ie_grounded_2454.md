# 2454 — Model Resilensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Model Resilensi Rantai Pasok Dingin untuk Produk Mudah Rusak dengan Pemantauan IoT
**Jurnal & Sitasi Utama:** Khurshid, A., & Siddiqui, D. A. (2024). *A Resilience Model for Cold Chain Logistics of Perishable Products*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Putra, A. D., Defit, S., & Nurcahyo, G. W. (2024). *Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20*. Jurnal KomtekInfo, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik *cold chain* merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, produk biofarmasi, makanan segar, dan produk hortikultura. Menurut Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), gangguan pada rantai dingin — baik yang bersifat *acute* (kerusakan refrigerasi, keterlambatan distribusi) maupun *chronic* (drift suhu akibat kesalahan prosedur) — dapat menurunkan kualitas produk secara ireversibel dan menimbulkan kerugian ekonomi serta risiko kesehatan masyarakat yang signifikan. Urgensi permasalahan ini diperkuat oleh data empiris dari Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan kondisi di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Kabupaten Siak, di mana proses pencatatan suhu *cold chain box* masih dilakukan secara *manual* setiap 2 jam oleh apoteker, tanpa sistem peringatan dini ketika suhu menyimpang dari ambang batas (umumnya 2–8°C untuk vaksin).

Kesenjangan antara praktik operasional dan kebutuhan teknis menjadi landasan utama pengembangan model resilensi. Ketergantungan pada pencatatan manual memiliki tiga kelemahan fundamental: (i) *latency* data hingga 2 jam, (ii) risiko human error dalam pembacaan termometer analog, dan (iii) ketiadaan jejak audit digital (*digital trail*). Di sisi hulu industri, Pharmaceutical Inspection Co-operation Scheme (PIC/S) dan WHO PQS (Performance, Quality and Safety) mensyaratkan Continuous Temperature Monitoring (CTM) dengan resolusi temporal minimum 15 menit untuk produk termolabil. Oleh karena itu, integrasi arsitektur sensor IoT — seperti DS18B20 dengan akurasi ±0,5°C pada rentang -55°C hingga +125°C — ke dalam model resilensi bukan sekadar peningkatan teknis, melainkan prasyarat kepatuhan regulatoris. Kerangka kerja yang dikembangkan Khurshid dan Siddiqui (2024) berupaya menjembatani kesenjangan ini melalui formulasi matematis yang secara eksplisit memodelkan kapasitas absorptif, adaptif, dan restoratif sistem *cold chain*, sehingga memungkinkan pengambilan keputusan berbasis risiko (*risk-based decision making*) bagi manajer rantai pasok.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Fungsi Keandalan (Reliability Function) Komponen Cold Chain

Komponen mekanis dan elektrik pada *cold chain box* (kompresor, evaporator, sensor, catu daya) memiliki laju kegagalan yang dapat dimodelkan dengan distribusi Weibull:

$$R(t) = e^{-(t/\alpha)^{\beta}}$$

dengan $R(t)$ adalah probabilitas komponen beroperasi tanpa kegagalan hingga waktu $t$, $\alpha$ adalah *scale parameter* (umur karakteristik), dan $\beta$ adalah *shape parameter*. Untuk kompresor refrigerasi pada *cold chain box*疫苗, $\alpha \approx 20.000$ jam dan $\beta \approx 2{,}1$ sesuai data lapangan.

### 2.2. Model Kinetika Kerusakan Produk (Arrhenius)

Laju degradasi produk termolabil mengikuti persamaan Arrhenius yang diterapkan pada konteks cold chain:

$$k(T) = A \cdot e^{-E_a / (R_g \cdot T)}$$

dengan $k$ adalah laju degradasi (per jam), $E_a$ adalah energi aktivasi (J/mol), $R_g = 8{,}314$ J/(mol·K), dan $T$ adalah suhu absolut (Kelvin). Untuk vaksin mRNA, nilai $E_a$ berada pada rentang 80–120 kJ/mol, sehingga setiap kenaikan suhu 2°C di atas ambang batas dapat menggandakan laju degradasi.

### 2.3. Indeks Resilensi Sistem (Resilience Triangle)

Khurshid dan Siddiqui (2024, [DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengadopsi kerangka *resilience triangle* dari Bruneau untuk mengkuantifikasi kehilangan fungsional sistem:

$$\mathcal{R} = 1 - \frac{\int_{t_0}^{t_1} [100\% - Q(t)] \, dt}{100\% \cdot (t_1 - t_0)}$$

dengan $Q(t)$ adalah fungsi kualitas sistem (0–100%) sebagai fungsi waktu, $t_0$ adalah waktu dimulainya gangguan, dan $t_1$ adalah waktu pemulihan penuh. Indeks $\mathcal{R} \in [0, 1]$, di mana nilai mendekati 1 mengindikasikan sistem yang sangat resilien.

### 2.4. Rantai Markov untuk Transisi Status Suhu

Status suhu *cold chain* dimodelkan sebagai *state space* $S = \{S_1, S_2, S_3\}$, yaitu: $S_1$ (suhu nominal 2–8°C), $S_2$ (suhu menyimpang 8–15°C — *warning*), dan $S_3$ (suhu kritis >15°C atau <-2°C — *failure*). Matriks transisi:

$$P = \begin{bmatrix} p_{11} & p_{12} & p_{13} \\ p_{21} & p_{22} & p_{23} \\ p_{31} & p_{32} & p_{33} \end{bmatrix}$$

Probabilitas steady-state diperoleh dari $\pi P = \pi$ dengan $\sum \pi_i = 1$.

### 2.5. Akurasi Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024, [DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) memiliki resolusi konfigurabel 9–12 bit dan akurasi $\pm 0{,}5°C$ pada rentang -10°C hingga +85°C. Waktu konversi termal:

$$t_{conv} = 0{,}75 \text{ s} + (0{,}0625 \cdot 2^{N-1}) \text{ s}$$

dengan $N$ adalah bit resolusi. Untuk $N = 12$ bit, $t_{conv} \approx 0{,}75$ s.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resilensi di lapangan mengikuti SOP lima tahap berbasis data sensor IoT:

**Tahap 1 — Akuisisi Data Sensor.** Mikrokontroler (ESP32/Arduino) membaca suhu dari sensor DS18B20 melalui protokol 1-Wire dengan periode sampling $\Delta t = 30$ s. Data dikirim ke *cloud server* (MQTT/HTTPS) beserta *timestamp* dan identifikasi perangkat (*device ID*).

**Tahap 2 — Edge Processing & Validasi.** Algoritma *moving average filter* dengan jendela $n = 5$ diterapkan untuk meredam derau termal:

$$T_{filtered}(t) = \frac{1}{5} \sum_{i=0}^{4} T(t - i \cdot \Delta t)$$

Data yang terdistribusi di luar rentang fisik (-55°C sampai +125°C) langsung ditandai sebagai *outlier* dan tidak digunakan untuk pemutakhiran status.

**Tahap 3 — Klasifikasi Status Markov.** Berdasarkan suhu ternormalisasi $\tilde{T} = (T - T_{nom})/\sigma_T$ dengan $\sigma_T = 3°C$, status sistem diklasifikasikan ke dalam $S_1, S_2, S_3$ menggunakan aturan keputusan Bayes minimum-risk.

**Tahap 4 — Pemutakhiran Indeks Resilensi.** Nilai $\mathcal{R}$ dihitung secara *rolling window* 24 jam menggunakan Persamaan 2.3. Ambang batas peringatan ditetapkan: $\mathcal{R} < 0{,}85 \rightarrow$ peringatan kuning; $\mathcal{R} < 0{,}70 \rightarrow$ peringatan merah (aktivasi *backup compressor*).

**Tahap 5 — Logging & Audit Trail.** Seluruh data disimpan dalam basis data *time-series* (InfluxDB/PostgreSQL) dengan retensi minimum 5 tahun sesuai pedoman PIC/S Annex 11, sehingga tersedia untuk kebutuhan CAPA (*Corrective and Preventive Action*) inspeksi regulatoris.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Distribusi 5.000 dosis vaksin COVID-19 dari UPTD Farmasi Kabupaten Siak ke 12 puskesmas dengan *cold chain box* berkapasitas 50 L selama 8 jam perjalanan.

**Parameter Input:**
- Suhu nominal: $T_{nom} = 5°C$
- Energi aktivasi vaksin: $E_a = 95$ k.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
