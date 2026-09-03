# 2422 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products) dan Integrasi Sistem Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam manajemen rantai pasok produk termolabil yang mencakup vaksin, produk biofarmasi, makanan beku, hortikultura segar, dan produk susu. Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa lemahnya kapasitas resiliensi pada jaringan cold chain menjadi salah satu akar penyebab tertinggi kerugian pascapanen, terutama di negara berkembang yang menanggung *post-harvest loss* hingga 30–40% untuk produk segar dan 25% untuk vaksin yang失效 (*World Health Organization*, 2022 — sebagaimana dikutip dalam kerangka studi Khurshid & Siddiqui). Resiliensi cold chain bukan sekadar kemampuan mempertahankan suhu pada rentang 2–8°C, melainkan kapasitas sistem untuk **menyerap (absorb), beradaptasi (adapt), dan pulih (restore)** dari gangguan operasional berupa kenaikan suhu, pemadaman listrik, kerusakan refrigerant, keterlambatan distribusi, maupun kegagalan sensor.

Urgensi ekonomi dari topik ini bersifat multidimensional. Pertama, dari sisi farmasi, Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus nyata di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana cold chain box penyimpanan疫苗 tidak dilengkapi sistem pemantauan suhu real-time sehingga pencatatan suhu masih dilakukan secara manual setiap dua jam sekali pada *log sheet* oleh apoteker. Konsekuensinya, jika terjadi ekskursi suhu (>8°C) yang tidak terdeteksi dalam interval dua jam, vaksin dapat kehilangan potensi (*loss of potency*) dan tidak layak edar — sebuah risiko yang langsung berimplikasi pada keselamatan pasien dan kerugian finansial miliaran rupiah. Kedua, dari sisi makanan, Peraturan Badan Pangan Nasional dan Codex Alimentarius mensyaratkan kepatuhan HACCP (*Hazard Analysis and Critical Control Points*) yang hanya dapat diverifikasi melalui jejak suhu kontinyu (*continuous temperature trace*), bukan sampling diskret.

Konteks teknis operasional yang melatarbelakangi kebutuhan model resiliensi ini dapat dirangkum menjadi empat tantangan utama: (1) **fragmentasi pelaku rantai pasok** — distributor, transporter, retailer, dan end-user sering tidak memiliki protokol pemulihan bersama (*shared recovery protocol*); (2) **keterbatasan visibilitas data** — pencatatan manual dua-jam memiliki *blind spot* hingga 119 menit per interval pengukuran (Putra dkk., 2024); (3) **interdependensi infrastruktur energi** — cold chain box sangat bergantung pada catu daya yang rentan terhadap pemadaman di daerah 3T (*terdepan, terluar, tertinggal*); dan (4) **kompleksitas biofisik produk** — vaksin mRNA, produk darah, dan seafood memiliki laju degradasi yang berbeda terhadap waktu dan suhu sehingga memerlukan *decision support system* yang adaptif. Keempat tantangan ini menjadi justifikasi mengapa diperlukan sebuah **Model Resiliensi Cold Chain (MRCC)** yang memformalkan kapasitas sistem melalui indikator terukur dan bukan sekadar ambang suhu statis.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi yang diajukan oleh Khurshid & Siddiqui (2024) dibangun di atas tiga pilar matematis: (a) fungsi kinerja sistem terhadap waktu, (b) dinamika degradasi produk termolabil, dan (c) biaya total resiliensi. Pada bagian ini ketiga pilar tersebut diformulasikan secara eksplisit.

### 2.1 Fungsi Kinerja Sistem (System Performance Function)

Kinerja sistem cold chain pada waktu $t$ didefinisikan sebagai rasio antara kemampuan mempertahankan suhu target dan kapasitas nominalnya:

$$P(t) = \frac{T_{set} - T(t)}{T_{set} - T_{ambient}} \quad \text{untuk } T(t) \geq T_{set}$$

dengan $P(t) \in [0,1]$. Saat suhu aktual $T(t)$ sama dengan suhu set-point $T_{set}$, kinerja optimum tercapai ($P(t)=1$); saat $T(t) \geq T_{ambient}$, sistem失效 ($P(t)=0$). **Indeks resiliensi** $R$ menurut Bruneau dkk. (2003, yang diadopsi Khurshid & Siddiqui) dihitung sebagai:

$$R = \frac{\int_{t_0}^{t_1} P(t)\, dt}{P_0 \cdot (t_1 - t_0)} = 1 - \frac{\text{Area of Resilience Triangle}}{P_0 \cdot \tau}$$

dengan $P_0$ adalah kinerja pra-gangguan, $t_0$ saat gangguan terjadi, $t_1$ saat pemulihan penuh tercapai, dan $\tau = t_1 - t_0$ adalah *Time To Recovery* (TTR). Indeks ini merepresentasikan fraksi layanan yang berhasil dipertahankan sepanjang jendela gangguan.

### 2.2 Probabilitas Kegagalan dan Keandalan Sensor

Sensor DS18B20 yang digunakan oleh Putra dkk. (2024) mengikuti protokol 1-Wire dengan tingkat kegagalan mengikuti distribusi eksponensial:

$$\lambda(t) = \frac{f(t)}{R(t)} \quad \text{dan} \quad R(t) = e^{-\lambda t}$$

dengan $\lambda$ adalah laju kegagalan konstan. Untuk sensor DS18B20 dengan MTBF (*Mean Time Between Failure*) sekitar 100.000 jam pada suhu operasi 0–50°C, maka $\lambda \approx 1 \times 10^{-5}$ jam$^{-1}$. Keandalan sistem sensor pada rentang operasional satu tahun ($t = 8.760$ jam) adalah:

$$R(8760) = e^{-(1 \times 10^{-5}) \times 8760} = e^{-0.0876} \approx 0{,}9161$$

Artinya, sekitar 91,61% sensor masih beroperasi andal setelah satu tahun — sebuah angka yang memerlukan jadwal kalibrasi dan *redundant sensing node* untuk mencegah *single point of failure*.

### 2.3 Kinetika Degradasi Produk: Model Arrhenius

Degradasi mutu produk termolabil mengikuti persamaan Arrhenius yang diadopsi oleh Khurshid & Siddiqui:

$$k(T) = A \cdot e^{-E_a / (R_g \cdot T)}$$

dengan $k(T)$ adalah laju reaksi degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor frekuensi, $E_a$ adalah energi aktivasi (J/mol), dan $R_g = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Kerusakan kumulatif akibat ekskursi suhu dievaluasi melalui integral:

$$D = \int_{0}^{t} k[T(\tau)]\, d\tau$$

Jika suhu konstan sepanjang ekskursi, $D = k \cdot t$. Untuk mempertahankan mutu pada batas ambang $D \leq D_{max}$, maka **waktu kritis ekskursi** pada suhu $T$ adalah:

$$t_{crit}(T) = \frac{D_{max}}{A \cdot e^{-E_a / (R_g \cdot T)}}$$

### 2.4 Koefisien Q10 (Temperature Coefficient)

Untuk produk makanan dan farmasi, laju degradasi sering dinyatakan melalui koefisien $Q_{10}$ — rasio laju reaksi ketika suhu naik 10°C:

$$Q_{10} = \left(\frac{k_{T+10}}{k_T}\right) = \exp\left(\frac{10 \cdot E_a}{R_g \cdot T \cdot (T+10)}\right)$$

Untuk vaksin tipikal, $E_a \approx 80$ kJ/mol sehingga pada $T = 278$ K (5°C) diperoleh $Q_{10} \approx 2{,}5$. Artinya, setiap kenaikan suhu 10°C di atas 5°C **mempercepat degradasi 2,5 kali lipat** — sebuah parameter yang vital untuk menentukan *response time* alarm IoT.

### 2.5 Fungsi Biaya Total Resiliensi (Total Cost of Resilience)

Pemodelan keputusan investasi resiliensi mengikuti formulasi:

$$C_{total} = C_{prevention} + C_{disruption} + C_{recovery} + C_{monitoring}$$

dengan $C_{monitoring}$ adalah biaya sensor IoT, gateway, dan cloud service. Pengurangan risiko dihitung melalui *Expected Loss Reduction*:

$$\Delta L = \sum_{i=1}^{n} p_i \cdot (L_i^{baseline} - L_i^{resilient}) \cdot V_i$$

dengan $p_i$ adalah probabilitas skenario gangguan ke-$i$, $L_i$ adalah fraksi kerugian, dan $V_i$ adalah nilai produk yang terancam. Investasi IoT justified secara ekonomi jika:

$$\Delta L > C_{monitoring} + \text{NPV}(\text{OPEX}_{IoT})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi cold chain mengikuti kerangka tujuh langkah yang disintesis dari Khurshid & Siddiqui (2024) dan divalidasi secara empiris melalui arsitektur IoT yang dirancang Putra dkk. (2024):

**Langkah 1 — Pemetaan Rantai Nilai & Identifikasi Titik Kritis (HACCP Mapping).** Setiap *node* rantai pasok diinventarisasi: *manufacturing* → *primary distribution* → *regional warehouse* → *last-mile delivery* → *end-customer storage*. Tiap node dilengkapi CCP (*Critical Control Point*) berupa threshold suhu, kelembapan, dan waktu tinggal (*dwell time*).

**Langkah 2 — Instrumentasi Sensor Multi-node.** Sensor DS18B20 (akurasi ±0,5°C pada rentang -10°C hingga +85°C, resolusi 9–12 bit) dipasang pada cold chain box di tiap CCP. Sensor berkomunikasi melalui protokol 1-Wire dengan mikrokontroler (misal ESP32/Arduino) sebagai aggregator. Putra dkk. (2024) menunjukkan bahwa setiap sensor memiliki alamat unik 64-bit sehingga mendukung jaringan multi-drop hingga 100 node per bus.

**Langkah 3 — Akuisisi Data & Edge Processing.** Data suhu dibaca setiap interval $\Delta t$ (umumnya 30–60 detik, jauh lebih rapat dibanding pencatatan manual 2 jam). Nilai yang melebihi *set-point* memicu *local alarm* dan transmisi prioritas tinggi (*priority uplink*) ke cloud melalui MQTT atau HTTP.

**Langkah 4 — Transmisi & Dashboarding Real-Time.** Data di-*stream* ke platform cloud (ThingsBoard, AWS IoT, atau Antares). Dashboard menampilkan: (a) time-series suhu per node; (b) *heatmap* lokasi cold chain box; (c) **indikator resiliensi real-time** $R(t)$ sesuai persamaan Bagian 2.1; (d) notifikasi otomatis via SMS/WhatsApp ke apoteker jika $T(t) > T_{set}$ selama lebih dari $t_{warn}$.

**Langkah 5 — Penyimpanan Data Berjenjang.** *Hot storage* (InfluxDB/Redis) untuk telemetri 7 hari terakhir dan *cold storage* (S3/PostgreSQL) untuk histori > 1 tahun — seluruhnya mendukung audit HACCP dan BPOM.

**Langkah 6 — Pemodelan Degradasi Prediktif.** Engine prediksi berbasis persamaan Arrhenius (Bagian 2.3) menghitung akumulasi $D(t)$ dan memproyeksikan *Remaining Useful Life* (RUL) produk. Jika $D(t) \geq 0{,}9 \cdot D_{max}$, sistem mengeluarkan peringatan degradasi tinggi dan merekomendasikan karantina preventif.

**Langkah 7 — Rencana Pemulihan (Recovery Protocol).** Mengacu pada SOP Khurshid & Siddiqui, pemulihan mencakup: (a) aktivasi *backup refrigeration* dalam $\leq 15$ menit; (b) pemindahan produk ke CCP alternatif; (c) triase produk berdasarkan $D(t)$ (layak/karantena/buang); (d) *post-incident review* dan update parameter model.

Diagram alur logika keputusan yang dihasilkan adalah sebagai berikut:

```
┌─────────────────┐    Baca sensor    ┌──────────────────┐
│ Cold Chain Box  │ ───────────────►  │  Edge Aggregator │
└─────────────────┘                   └─────────┬────────┘
                                                │
                                       ┌────────▼────────┐
                                       │ T(t) > T_set ?  │
                                       └────┬───────┬────┘
                                       Ya   │       │ Tidak
                                ┌──────────▼─┐