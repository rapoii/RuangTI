# 2242 — Asset Administration Shell dan Arsitektur Digital Twin untuk Sistem Komunikasi 5G serta Sistem Cyber-Physical Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin untuk Sistem Komunikasi 5G dan Arsitektur Digital Twin pada Sistem Transfer Rakitan Cyber-Physical
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara mendasar paradigma rekayasa sistem industri melalui integrasi fisik-siber (*cyber-physical systems*/CPS), Internet of Things (IoT), dan konektivitas nirkabel generasi kelima (5G). Di tengah pergeseran ini, Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti urgensi akan representasi digital yang terstandarisasi dari aset komunikasi 5G agar dapat dikelola, diintegrasikan, dan diorkestrasikan secara interoperable sepanjang *lifecycle*. Mereka mengadopsi konsep *Asset Administration Shell* (AAS) — kerangka standar yang dipromosikan oleh Plattform Industrie 4.0 dan diformalkan dalam IEC 63278 serta seri dokumen spesifikasi "Details of the Asset Administration Shell" — untuk membangun *Digital Twin* (DT) sistem komunikasi 5G (Cavalieri et al., 2024). Pendekatan ini menjawab salah satu tantangan paling akut dalam otomasi pabrik modern: ketiadaan model informasi umum (*common information model*) yang mampu menjembatani silo data antara lapisan *Operational Technology* (OT), *Information Technology* (IT), dan *Communication Technology* (CT).

Konteks ekonominya signifikan: menurut data yang dirujuk komunitas riset Eropa, investasi private 5G untuk manufaktur diproyeksikan mencapai €4–6 miliar per tahun pada 2027, sementara downtime tak terencana pada lini produksi modern mampu menimbulkan kerugian rata-rata €22.000–€50.000 per menit. Tanpa digital twin yang akurat, keputusan manajemen aset, prediksi *degradation*, serta penjadwalan pemeliharaan menjadi suboptimal. Lebih jauh, standarisasi AAS memungkinkan portability *digital description* antar platform (BaSyx, Eclipse Ditto, SAP MII) sehingga memudahkan integrasi multi-vendor — aspek yang secara eksplisit ditekankan oleh penulis sebagai motivasi penelitian.

Studi komplementer dari De Marchi, Rojas, dan Mark (2022) turut memperkokoh pentingnya arsitektur digital twin yang terstruktur, dengan menerapkan prinsip CPS pada sistem transfer rakitan (*assembly transfer system*) di mana setiap konveyor, aktuator, dan sensor memiliki representasi virtual yang sinkron dengan entitas fisiknya. Kedua paper ini saling memperkuat: paper pertama berfokus pada lapisan komunikasi 5G sebagai *asset* yang di-*twin*-kan, sementara paper kedua memperlihatkan bagaimana digital twin dapat mengelola *flow* material dan informasi dalam proses perakitan fisik. Bersama-sama, keduanya membangun narasi bahwa digital twin bukan sekadar replika visual melainkan representasi fungsional multi-dimensi dari aset industri yang menjadi tulang punggung *smart manufacturing*.

Kebutuhan akan sinkronisasi real-time, traceability data, dan interoperabilitas menjadi semakin mendesak ketika garis produksi mengadopsi *flexible manufacturing* dengan varian produk yang berubah cepat, *reconfigurable* dalam hitungan jam, dan membutuhkan komunikasi latensi rendah (URLLC, *Ultra-Reliable Low-Latency Communication*) yang hanya mampu disediakan oleh jaringan 5G privat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Dasar Digital Twin

Digital twin secara formal dapat dipandang sebagai pasangan entitas fisik $\mathcal{P}$ dan entitas virtual $\mathcal{V}$ yang dipertahankan sinkronisasinya melalui aliran data $\mathcal{D}$ (Cavalieri et al., 2024). State entitas fisik pada waktu $t$ dinotasikan sebagai $\mathbf{x}_p(t) \in \mathbb{R}^n$, sementara state entitas virtual adalah $\hat{\mathbf{x}}_v(t)$. Persamaan dinamika sistem fisik mengikuti bentuk *state-space* linear time-invariant (LTI):

$$\dot{\mathbf{x}}_p(t) = A_p \mathbf{x}_p(t) + B_p \mathbf{u}(t) + \mathbf{w}(t)$$

dengan $A_p \in \mathbb{R}^{n \times n}$ adalah matriks状态 sistem fisik, $B_p \in \mathbb{R}^{n \times m}$ adalah matriks input kontrol, $\mathbf{u}(t)$ adalah vektor sinyal kontrol, dan $\mathbf{w}(t) \sim \mathcal{N}(0, Q)$ adalah *process noise* dengan kovariansi $Q$. Output terukur:

$$\mathbf{y}(t) = C_p \mathbf{x}_p(t) + \mathbf{v}(t)$$

dengan $\mathbf{v}(t) \sim \mathcal{N}(0, R)$ adalah *measurement noise*.

### 2.2 Estimasi State dengan Kalman Filter

Digital twin pada paper Cavalieri et al. (2024) menggunakan estimator rekursif untuk mempertahankan sinkronisasi. Persamaan prediksi dan koreksi Kalman Filter adalah:

$$\hat{\mathbf{x}}_{k|k-1} = A_p \hat{\mathbf{x}}_{k-1|k-1} + B_p \mathbf{u}_k$$

$$P_{k|k-1} = A_p P_{k-1|k-1} A_p^\top + Q$$

$$K_k = P_{k|k-1} C_p^\top (C_p P_{k|k-1} C_p^\top + R)^{-1}$$

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + K_k (\mathbf{y}_k - C_p \hat{\mathbf{x}}_{k|k-1})$$

di mana $K_k$ adalah *Kalman gain*. Residual sinkronisasi:

$$e_k = \| \hat{\mathbf{x}}_{k|k} - \mathbf{x}_{p,k} \|_2$$

harus berada di bawah ambang batas $\epsilon$ yang ditetapkan sesuai *service level agreement* (SLA) sistem 5G.

### 2.3 Model Latensi 5G URLLC

Untuk komunikasi URLLC, latensi end-to-end $L_{e2e}$ terdiri dari tiga komponen utama:

$$L_{e2e} = L_{proc} + L_{queue} + L_{tx}$$

dengan $L_{proc}$ adalah latensi pemrosesan protokol (umumnya 1–2 ms pada 5G NR), $L_{queue}$ adalah latensi antrian yang dimodelkan dengan distribusi M/D/1 atau M/G/1, dan $L_{tx}$ adalah latensi transmisi radio. Untuk memenuhi target *reliability* $1 - 10^{-5}$ pada URLLC, *diversity gain* perlu diperhitungkan:

$$P_{outage} = 1 - \prod_{i=1}^{N} (1 - p_i)$$

di mana $p_i$ adalah probabilitas kegagalan pada link ke-$i$ dari total $N$ link redundan.

### 2.4 Formulasi AAS sebagai Model Informasi

Menurut Cavalieri et al. (2024), AAS menyediakan struktur *submodel* yang merepresentasikan aspek-aspek aset. Secara matematis, AAS dapat diformalkan sebagai himpunan:

$$\mathcal{A} = \{ (s_i, a_i, v_i) \mid i = 1, \dots, N_s \}$$

dengan $s_i$ adalah *Submodel* identifier, $a_i$ adalah himpunan *property* dan *operation*, dan $v_i$ adalah nilai/keadaan saat ini. Setiap *property* $p \in a_i$ dapat berupa *scalar*, *vector*, atau *structure* yang memenuhi kontrak data JSON sesuai spesifikasi AAS.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-DT untuk sistem komunikasi 5G mengikuti prosedur sistematis berikut, berdasarkan metodologi yang dikembangkan oleh Cavalieri et al. (2024) dan Di Marchi et al. (2022):

**Tahap 1 — Identifikasi Aset dan Pemetaan Fungsi.** Lakukan inventarisasi aset komunikasi (base station, core network elements, edge nodes), lalu petakan fungsi bisnisnya: coverage planning, capacity management, fault detection. Output: *asset registry* berstandar IEC 63278.

**Tahap 2 — Konstruksi Submodels AAS.** Bangun submodel untuk aspek teknis: `(Submodel) CommunicationPerformance`, `(Submodel) NetworkTopology`, `(Submodel) EnergyConsumption`, `(Submodel) FaultLog`. Gunakan template yang tersedia di repositori Plattform Industrie 4.0 untuk menjamin interoperabilitas.

**Tahap 3 — Implementasi Antarmuka dan Protokol.** Konfigurasikan *endpoint* AAS melalui protokol *Asset Administration Shell Protocol* (HTTP/REST atau MQTT), dengan otentikasi OAuth 2.0 dan enkripsi TLS 1.3. Repositori BaSyx atau Eclipse Ditto direkomendasikan sebagai *AAS server*.

**Tahap 4 — Akuisisi Data dan Estimasi Sinkronisasi.** Integrasikan sensor SNMP, NETCONF/YANG, dan KPI counter 5G (RSRP, SINR, throughput). Jalankan Kalman Filter untuk menyelaraskan estimasi state dengan telemetry aktual. Interval sampling $T_s$ dipilih berdasarkan *Nyquist criterion* untuk dinamika sistem:

$$T_s \leq \frac{\pi}{\omega_{max}}$$

di mana $\omega_{max}$ adalah frekuensi alami tertinggi pada dinamika jaringan.

**Tahap 5 — Validasi dan Continuous Improvement.** Bandingkan $\hat{\mathbf{x}}_{k|k}$ dengan ground-truth secara periodik, hitung *Mean Absolute Error* (MAE):

$$MAE = \frac{1}{N} \sum_{k=1}^{N} | \hat{\mathbf{x}}_k - \mathbf{x}_{p,k} |$$

Tetapkan threshold MAE ≤ 5% dari rentang dinamika sebagai kriteria lulus.

Pada konteks sistem transfer rakitan (De Marchi et al., 2022), arsitektur digital twin mengikuti pola tiga lapis: **(i) Physical Layer** (sensor, aktuator, PLC); **(ii) Communication Layer** (5G/TSN, OPC UA); **(iii) Service Layer** (DT services, predictive analytics). Setiap modul konveyor di-*tag* dengan *Digital Identifier* yang mengarahkan ke AAS instance di *AAS registry*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik pintar di sektor otomotif menerapkan AAS-DT pada klaster 5G privat yang melayani 12 *automated guided vehicle* (AGV) di area perakitan. Target SLA: latensi < 10 ms, *reliability* > 99.999%.

**Input Parameter Industri:**
- Jumlah base station (gNB): $N_{gNB} = 4$
- Panjang siklus kontrol AGV: $T_{cyc} = 20$ ms
- Bandwidth sistem: $BW = 100$ MHz (n78 band)
- Subcarrier spacing: $SCS = 30$ kHz
- Modulasi rata-rata: 64-QAM dengan coding rate $R = 0.5$
- Process noise covariance: $Q = 0.01 \cdot I_{6 \times 6}$
- Measurement noise covariance: $R = 0.1 \cdot I_{3 \times 3}$

**Langkah 1 — Throughput Teoritis 5G NR.** Sesuai 3GPP TS 38.214, *peak throughput*:

$$R_{peak} = N_{RB} \cdot N_{sub}^{sym} \cdot N_{bits}^{RE} \cdot R \cdot (1 - OH)$$

Dengan $N_{RB} = 273$ (untuk 100 MHz @ SCS 30 kHz), $N_{sub}^{sym} = 12$, $N_{bits}^{RE} = 6$ (64-QAM), $OH = 0.14$:

$$R_{peak} = 273 \times 12 \times 6 \times 0.5 \times (1 - 0.14) = 8.450 \text{ Gbps}$$

**Langkah 2 — Latensi End-to-End URLLC.**
- $L_{proc} = 1.5$ ms (numerologi mini-slot 2-OFDM symbol)
- $L_{tx} = \frac{P_{payload}}{R_{eff}} = \frac{32 \text{ bytes}}{8.450 \text{ Gbps}} = 0.003$ ms
- $L_{queue}$ untuk arrival rate $\lambda = 200$ pkt/s dan service rate $\mu = 500$ pkt/s (M/D/1):

$$L_{queue} = \frac{\rho (2 - \rho)}{2 \mu (1 - \rho)}, \quad \