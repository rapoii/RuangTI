# 1826 — Asset Administration Shell Digital Twin Sistem Komunikasi 5G untuk Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sistem manufaktur dan rekayasa industri contemporer mensyaratkan integrasi erat antara entitas fisik (physical asset) dan representasi virtualnya secara *real-time* dan deterministik. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan arsitektur *Asset Administration Shell* (AAS) sebagai implementasi digital twin (DT) untuk sistem komunikasi 5G, yang menjadi tulang punggung infrastruktur komunikasi industri modern. Pendekatan ini menjawab kebutuhan mendesak akan interoperabilitas lintas-pemasok (*vendor-agnostic interoperability*) yang selama ini menjadi瓶颈 adopsi Industri 4.0 di lantai pabrik.

Urgensi utama berasal dari tiga tren simultan. Pertama, proliferasi sensor IoT industri yang menghasilkan volume data masif dengan laju hingga beberapa Gbps per lini produksi, sehingga memerlukan jaringan komunikasi dengan *throughput* tinggi dan latensi ultra-rendah. Kedua, meningkatnya kompleksitas *cyber-physical production systems* (CPPS) yang menuntut sinkronisasi status fisik–virtual dengan galat (error) yang dapat diabaikan untuk menjamin keselamatan operasional dan kualitas produk. Ketiga, standarisasi yang masih碎片化 di antara berbagai platform digital twin propietary, yang menghambat integrasi horizontal dan vertikal dalam rantai nilai manufaktur. Seperti ditegaskan oleh Cavalieri dkk. (2024), AAS—yang distandardisasi melalui IEC/PAS 63278 dan spesifikasi *Plattform Industrie 4.0*—menyediakan pendekatan *semantic interoperability* berbasis submodel terstruktur yang menjembatani keterbatasan ini.

Kontribusi De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi lanskap ini dengan menunjukkan arsitektur digital twin untuk *cyber-physical assembly transfer system* yang mengandalkan AAS sebagai *information backbone*. Pekerjaan mereka menunjukkan bahwa tanpa kerangka metadata yang terstandarisasi, integrasi antara robot, konveyor, dan sistem kendali vision menjadi sangat mahal dan rentan terhadap *technical debt*. Sinergi antara kedua literatur ini membentuk basis bagi rekayasawan sistem industri untuk merancang komunikasi deterministik pada lantai pabrik berbasis 5G dengan digital twin yang sepenuhnya *self-describing*. Dari perspektif ekonomi, adopsi pendekatan ini berpotensi menurunkan total biaya kepemilikan (TCO) sistem komunikasi industri hingga 30–45% karena pengurangan *engineering effort* untuk integrasi, sekaligus meningkatkan *overall equipment effectiveness* (OEE) melalui prediksi kegagalan yang lebih akurat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis Asset Administration Shell

AAS secara formal dimodelkan sebagai struktur data hierarkis yang merepresentasikan *property* dan *capability* aset industri. Representasi minimalnya dapat dituliskan sebagai himpunan submodel:

$$M_{AAS} = \bigcup_{i=1}^{n} S_i = \{S_{ID}, S_{Comm}, S_{Cap}, S_{State}, S_{Diag}\}$$

di mana $S_{ID}$ adalah submodel identifikasi (berisi *manufacturer name*, *serial number*, *product family*); $S_{Comm}$ berisi parameter protokol komunikasi; $S_{Cap}$ mendeskripsikan kemampuan fungsional; $S_{State}$ merepresentasikan status operasional *real-time*; dan $S_{Diag}$ menyimpan riwayat diagnostik.

Setiap submodel direpresentasikan sebagai koleksi properti $p_j$ dengan tipe data tertentu:

$$S_i = \{(p_j, \tau_j, v_j, t_j^{update}) \mid j = 1, \ldots, m_i\}$$

di mana $\tau_j \in \{xsd:string, xsd:int, xsd:float, xsd:boolean, ...\}$ adalah tipe data, $v_j$ adalah nilai terkini, dan $t_j^{update}$ adalah *timestamp* pembaruan terakhir.

### 2.2 Model Latensi dan Keandalan 5G URLLC

Untuk aplikasi *Ultra-Reliable Low-Latency Communication* (URLLC) pada sistem komunikasi 5G industri, latensi end-to-end didekomposisi menjadi empat komponen utama:

$$L_{e2e} = L_{tx} + L_{prop} + L_{queue} + L_{proc}$$

di mana $L_{tx}$ adalah latensi transmisi yang bergantung pada ukuran paket $P$ dan *data rate* $R$ ($L_{tx} = P/R$); $L_{prop}$ adalah latensi propagasi sepanjang medium; $L_{queue}$ adalah latensi antrian pada node jaringan; dan $L_{proc}$ adalah latensi pemrosesan pada base station dan core network.

Untuk menjamin keandalan URLLC pada level 99,999% (lima-sembilan), Cavalieri dkk. (2024) menerapkan *constraint* probabilistik:

$$P(L_{e2e} \leq L_{threshold}) \geq 1 - 10^{-5}$$

dengan $L_{threshold}$ umumnya ditetapkan pada 1 ms untuk aplikasi kontrol motion dan 10 ms untuk aplikasi monitoring proses. Parameter *Block Error Rate* (BLER) target diekspresikan sebagai:

$$\text{BLER}_{target} = 10^{-5}, \quad \text{SNR}_{req} = f^{-1}(\text{BLER}_{target}, \text{MCS})$$

di mana $f^{-1}$ adalah invers dari kurva BLER versus SNR untuk *Modulation and Coding Scheme* tertentu.

### 2.3 Model Sinkronisasi Digital Twin

State-space model untuk sinkronisasi digital twin dengan aset fisik menggunakan representasi *discrete-time linear stochastic system*:

$$x_{k+1} = A x_k + B u_k + w_k, \quad w_k \sim \mathcal{N}(0, Q)$$
$$y_k = C x_k + v_k, \quad v_k \sim \mathcal{N}(0, R)$$

di mana $x_k \in \mathbb{R}^n$ adalah vektor status aset fisik (posisi, kecepatan, suhu, getaran, dll.); $u_k \in \mathbb{R}^m$ adalah vektor aktuasi/kontrol; $y_k \in \mathbb{R}^p$ adalah vektor pengukuran sensor; $w_k$ dan $v_k$ adalah *process noise* dan *measurement noise* dengan kovarian $Q$ dan $R$.

*Estimator* optimal yang digunakan adalah *Kalman Filter*:

$$\hat{x}_{k|k-1} = A \hat{x}_{k-1|k-1} + B u_{k-1}$$
$$P_{k|k-1} = A P_{k-1|k-1} A^T + Q$$
$$K_k = P_{k|k-1} C^T (C P_{k|k-1} C^T + R)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - C \hat{x}_{k|k-1})$$

*Age of Information* (AoI) yang merepresentasikan kesegaran data digital twin didefinisikan sebagai:

$$\Delta(t) = t - U(t)$$

di mana $U(t)$ adalah *timestamp* pembaruan status terakhir yang diterima. *Expected AoI* untuk kebijakan pembaruan periodik dengan periode $T$ adalah:

$$\mathbb{E}[\Delta] = \frac{3T}{2} - \frac{T}{2e^{2\lambda T}}$$

di mana $\lambda$ adalah laju kedatangan paket pada kanal komunikasi.

### 2.4 Model Throughput dan Network Slicing

Untuk 5G *network slicing* pada aplikasi industri, kapasitas efektif setiap *slice* ditentukan oleh alokasi sumber daya:

$$C_{slice} = \sum_{r \in R_{alloc}} BW_r \cdot \log_2\left(1 + \frac{P_r \cdot g_r}{N_0 \cdot BW_r}\right)$$

di mana $BW_r$ adalah *bandwidth* blok sumber daya, $P_r$ adalah daya transmisi, $g_r$ adalah gain kanal, dan $N_0$ adalah densitas noise. *Spectral efficiency* agregat sistem multi-slice harus memenuhi:

$$\eta_{agg} = \frac{\sum_{s=1}^{S} \sum_{r \in R_s} \text{BLER}_r \cdot \log_2(MCS_r)}{BW_{total}} \geq \eta_{target}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G mengikuti prosedur rekayasa sistematics yang terdiri atas tujuh tahapan utama seperti diuraikan oleh Cavalieri dkk. (2024):

**Tahap 1 — Identifikasi Aset dan Pemetaan Submodel.** Langkah awal adalah inventarisasi seluruh aset komunikasi (base station, *edge node*, gateway, sensor field) yang akan direpresentasikan sebagai AAS. Setiap aset dipetakan ke template submodel berdasarkan *standard submodel templates* dari *Plattform Industrie 4.0* (misalnya *Identification*, *Capability*, *Communication*, *State*). Submodel disimpan dalam format *AASX Package* (berbasis OPC UA dan XML) atau format *JSON* sesuai *AAS Part 2 Specification*.

**Tahap 2 — Penentuan Endpoint dan Protokol Komunikasi.** Setiap AAS instance dipublikasikan melalui *AAS Server* dengan endpoint HTTP/REST atau OPC UA. URL endpoint mengikuti konvensi:

$$\text{Endpoint} = \frac{scheme}{host:port}/aas/{aasId}/submodels/{submodelIdShort}$$

Protokol transport yang digunakan adalah HTTPS untuk akses RESTful API dengan autentikasi OAuth 2.0 / TLS 1.3, atau protokol OPC UA Binary untuk komunikasi *machine-to-machine* (M2M) latensi rendah.

**Tahap 3 — Konfigurasi Network Slice 5G.** Alokasi *network slice* dikonfigurasi melalui *Network Slice Management Function* (NSMF) dengan parameter: (a) Slice Type = URLLC; (b) Latency Budget = 1 ms; (c) Reliability Target = 99,999%; (d) *Isolation Level* = *dedicated resources*. Quality of Service (QoS) flow identifier (5QI) ditetapkan pada nilai 1 atau 2 untuk menjamin *priority handling* di *scheduler*.

**Tahap 4 — Sinkronisasi Data Fisik-Virtual.** Loop sinkronisasi digital twin diimplementasikan dengan tiga mekanisme: (a) *Event-driven update* menggunakan *publish-subscribe* pattern; (b) *Periodic polling* dengan interval yang disesuaikan dengan dinamika aset; (c) *State-based trigger* yang mengirim pembaruan hanya ketika selisih $|x_k - \hat{x}_{k|k-1}| > \delta_{threshold}$.

**Tahap 5 — Integrasi dengan Sistem SCADA/MES.** Submodel AAS yang relevan (terutama $S_{State}$ dan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
