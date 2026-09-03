# 1858 — Asset Administration Shell Digital Twin untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur yang berakar pada inisiatif *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* telah memperkenalkan konsep **Asset Administration Shell (AAS)** sebagai kerangka referensi standar (IEC 63278 / DIN SPEC 91373) untuk merepresentasikan aset fisik secara digital sepanjang siklus hidupnya. Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan implementasi AAS sebagai *digital twin* untuk sistem komunikasi 5G, mengakui bahwa infrastruktur jaringan nirkabel generasi kelima merupakan *enabling asset* kritis bagi lantai pabrik cerdas (smart factory). Urgensi penelitian ini muncul dari kebutuhan industri untuk memodelkan parameter jaringan 5G—seperti *latency*, *jitter*, *throughput*, dan *reliability*—secara formal dalam representasi digital yang interoperabel, sehingga Quality of Service (QoS) dapat dipantau, diprediksi, dan dioptimasi secara real-time.

Secara operasional, integrasi 5G dengan AAS menjadi penting karena tiga tantangan utama industri modern. Pertama, kompleksitas multi-vendor pada jaringan *Non-Standalone (NSA)* dan *Standalone (SA)* 5G memerlukan bahasa model data yang統一 (common semantic). Kedua, *ultra-reliable low-latency communication* (URLLC) mensyaratkan *end-to-end latency* di bawah 1 ms untuk aplikasi kontrol loop tertutup, yang hanya dapat diverifikasi melalui simulasi digital twin. Ketiga, integrasi dengan sistem siber-fisik seperti lini perakitan transfer membutuhkan sinkronisasi deterministik yang tidak dapat dijamin oleh protokol komunikasi konvensional.

De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi lanskap ini dengan menyajikan arsitektur *digital twin* untuk sistem transfer perakitan siber-fisik, di mana komunikasi deterministik berbasis protokol industri (OPC UA, PROFINET, dan Time-Sensitive Networking/TSN) menjadi tulang punggung. Kedua paper ini secara sinergis menunjukkan bahwa *digital twin* bukan sekadar replika visual, melainkan instrumen rekayasa untuk menjamin koherensi antara dunia fisik dan siber pada lapisan komunikasi. Secara ekonomis, adopsi pendekatan ini berpotensi menurunkan *mean time to repair* (MTTR) sebesar 30–50% dan *unplanned downtime* hingga 25%, sebagaimana dilaporkan dalam berbagai studi benchmark industri 4.0.

---

## 2. Landasan Teori & Formulasi Matematis

Model AAS untuk sistem 5G yang diajukan Cavalieri *et al.* (2024) mengikuti arsitektur tiga lapis (*layered architecture*): **Asset**, **AAS Implementation**, dan **AAS Interface**. Representasi state sistem pada waktu diskrit $t$ dapat diformulasikan sebagai vektor status:

$$\mathbf{x}(t) = \begin{bmatrix} s_{\text{RSRP}}(t) \\ s_{\text{SINR}}(t) \\ s_{\text{Lat}}(t) \\ s_{\text{Thr}}(t) \end{bmatrix}$$

di mana $s_{\text{RSRP}}(t)$ adalah *Reference Signal Received Power* (dBm), $s_{\text{SINR}}(t)$ adalah *Signal-to-Interference-plus-Noise Ratio* (dB), $s_{\text{Lat}}(t)$ adalah *one-way latency* (ms), dan $s_{\text{Thr}}(t)$ adalah *throughput* (Mbps). Dinamika state dievolusi melalui persamaan beda stokastik:

$$\mathbf{x}(t+1) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{w}(t)$$

dengan $\mathbf{A} \in \mathbb{R}^{4\times4}$ sebagai matriks transisi状态, $\mathbf{B}$ sebagai matriks kontrol input $\mathbf{u}(t)$ (misalnya parameter beamforming), dan $\mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})$ sebagai *white noise* proses dengan kovariansi $\mathbf{Q}$.

Untuk pemodelan kanal 5G NR, *path loss* mengikuti rumus *3GPP TR 38.901*:

$$PL_{\text{NLOS}}(d) = 36.85\log_{10}(d) + 43.42 + 20\log_{10}(f_c) - 0.6(h_{\text{UT}})$$

dengan $d$ jarak (m), $f_c$ frekuensi pembawa (GHz), dan $h_{\text{UT}}$ tinggi *user terminal* (m). Parameter-parameter ini menjadi *property* AAS yang dapat diserialisasi dalam format AAS Submodel Template menggunakan bahasa *SMC* (Semantic Model Component).

Konsumsi bandwidth protokol AAS melalui OPC UA untuk *publish-subscribe* berkenaan dengan *Message Size*:

$$B_{\text{req}} = \frac{N_{\text{sub}} \cdot M_{\text{payload}} \cdot P_{\text{rate}}}{1 - \rho}$$

dengan $N_{\text{sub}}$ jumlah *subscriber*, $M_{\text{payload}}$ ukuran *payload* (bytes), $P_{\text{rate}}$ *publishing rate* (Hz), dan $\rho$ *network utilization factor* ($0 < \rho < 1$).

De Marchi *et al.* (2022) melengkapi kerangka ini dengan model *transfer line* siber-fisik, di mana waktu siklus (*cycle time*) stasiun ke-$i$ adalah:

$$T_i = t_{\text{proc},i} + t_{\text{comm},i} + t_{\text{queue},i}$$

di mana $t_{\text{comm},i}$ dipengaruhi langsung oleh latensi 5G AAS. *Bottleneck* lini ditentukan oleh:

$$T_{\text{line}} = \max_{i \in \{1,\ldots,n\}} T_i$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem 5G mengikuti SOP berlapis sesuai Cavalieri *et al.* (2024):

**Tahap 1 — Identifikasi Aset Komunikasi.** Inventarisasi elemen 5G: *gNodeB*, *5G Core (AMF/SMF/UPF)*, *Radio Unit*, dan *edge MEC server*. Setiap aset dimodelkan sebagai *Identifiable Asset* dengan *globally unique identifier* (AAS-ID).

**Tahap 2 — Konstruksi Submodel.** Definisikan *Submodel* spesifik: `CommunicationPerformance`, `NetworkSlice`, `QoSProfile`, dan `SecurityPosture`. Submodel menggunakan *template* dari `aas-core-works` library dan diserialisasi dalam JSON/XML sesuai `AASX Package Format`.

**Tahap 3 — Instrumentasi & Data Acquisition.** Aktifkan *southbound interface* untuk membaca *Key Performance Indicators* (KPI) dari elemen jaringan via protokol **3GPP NEF** (Network Exposure Function) atau **O1 interface** ke *Management and Orchestration* (MANO). Untuk lini perakitan (De Marchi *et al.*, 2022), gunakan **OPC UA Pub/Sub over TSN** untuk menjamin determinisme.

**Tahap 4 — Sinkronisasi Digital Twin.** Terapkan algoritma *Kalman Filter* untuk menyinkronkan state fisik $\mathbf{x}_{\text{phy}}(t)$ dengan state model $\mathbf{x}_{\text{dt}}(t)$:

$$\hat{\mathbf{x}}(t|t) = \hat{\mathbf{x}}(t|t-1) + \mathbf{K}(t)\left[\mathbf{y}(t) - \mathbf{H}\hat{\mathbf{x}}(t|t-1)\right]$$

dengan *gain* Kalman $\mathbf{K}(t) = \mathbf{P}(t|t-1)\mathbf{H}^T\left[\mathbf{H}\mathbf{P}(t|t-1)\mathbf{H}^T + \mathbf{R}\right]^{-1}$.

**Tahap 5 — Validasi & Sertifikasi.** Lakukan *co-simulation* dengan tools seperti MATLAB/Simulink + ns-3 untuk memverifikasi latensi end-to-end sesuai target URLLC (<1 ms untuk kontrol motion).

Arsitektur lengkap dapat digambarkan sebagai diagram alir: *Physical 5G Network* → *Telemetry Collector* → *AAS Repository (BaSyx/HydAAS)* → *Digital Twin Service* → *Dashboard & Anomaly Detector* → *Feedback Control*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Lini perakitan PCB dengan 6 stasiun kerja menggunakan jaringan 5G NSA pada pita n78 (3.5 GHz), *bandwidth* 100 MHz, dan konfigurasi 4×4 MIMO.

**Parameter Input Industri:**

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Jarak UE-gNodeB | 35 m | $d$ |
| Frekuensi pembawa | 3.5 GHz | $f_c$ |
| Tinggi terminal | 1.5 m | $h_{\text{UT}}$ |
| Payload AAS update | 256 bytes | $M_{\text{payload}}$ |
| Publishing rate | 100 Hz | $P_{\text{rate}}$ |
| Subscriber OPC UA | 12 unit | $N_{\text{sub}}$ |
| Network utilization | 0.65 | $\rho$ |

**Langkah 1 — Perhitungan Path Loss NLOS:**

$$PL_{\text{NLOS}}(35) = 36.85\log_{10}(35) + 43.42 + 20\log_{10}(3.5) - 0.6(1.5)$$
$$= 36.85(1.5441) + 43.42 + 10.881 - 0.9$$
$$= 56.92 + 43.42 + 10.881 - 0.9 \approx 110.32 \text{ dB}$$

**Langkah 2 — Perhitungan SINR dengan daya pancar 23 dBm dan noise floor -104 dBm:**

$$s_{\text{SINR}} = 23 - 110.32 - (-104) = 16.68 \text{ dB}$$

**Langkah 3 — Estimasi Throughput menggunakan formula kapasitas Shannon adaptif 5G NR:**

$$s_{\text{Thr}} = \eta_{\text{eff}} \cdot BW \cdot \log_2(1 + 10^{s_{\text{SINR}}/10})$$

dengan *bandwidth* $BW = 100$ MHz dan efisiensi spektral 5G NR untuk SINR 16.68 dB ≈ $\eta_{\text{eff}} = 4.5$ bps/Hz:

$$s_{\text{Thr}} = 4.5 \times 100 \times \log_2(1 + 10^{1.668}) = 450 \times \log_2(46.34) = 450 \times 5.534 \approx 2490 \text{ Mbps}$$

**Langkah 4 — Bandwidth protokol AAS OPC UA:**

$$B_{\text{req}} = \frac{12 \times 256 \times 100}{1 - 0.65} = \frac{307200}{0.35} \approx 877714 \text{ bytes/s} \approx 7.02 \text{ Mbps}$$

**Langkah 5 — Validasi Kapasitas:** $B_{\text{req}} = 7.02$ Mbps $\ll s_{\text{Thr}} = 2490$ Mbps, sehingga *headroom* jaringan sangat memadai (*overprovisioning ratio* = 354×). Latensi one-way URLLC untuk 5G dapat dijamin di $s_{\text{Lat}} \leq 0.8$ ms.

**Langkah 6 — Cycle Time Lini:**

Dengan $t_{\text{proc}} = 4.2$ s, $t_{\text{comm}} \approx 0.0008$ s, dan $t_{\text{queue}} = 0.6$ s (antrian M/M/1, $\rho = 0.7$):

$$T_i = 4.2 + 0.0008 + 0.6 = 4.8008 \text{ s}$$

$$T_{\text{line}} = 4.8008 \text{ s} \implies \text{Throughput lini} = \frac{3600}{4.8008} \approx 750 \text{ unit/jam}$$

**Interpretasi Manajerial:** Komunikasi 5G menjadi *non-bottleneck* (kontribusi <0.02%), sehingga kapasitas lini sepenuhnya ditentukan oleh *mechanical process*. *Return on Investment* (ROI) implementasi AAS dapat