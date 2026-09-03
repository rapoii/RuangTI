# 2130 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System; Arsitektur Digital Twin untuk Sistem Transfer Perakitan Cyber-Physical
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 menuntut interoperabilitas mesin, sensor, aktuator, dan sistem kendali pada level komunikasi deterministik. Dalam konteks ini, *Asset Administration Shell* (AAS)—sebagaimana diformalisasi oleh Plattform Industrie 4.0 dan distandarisasi melalui IEC PAS 63088—menawarkan representasi digital twin (DT) yang hierarkis, semantik, dan berbasis submodel yang dapat dipertukarkan (interoperable) lintas vendor. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti masalah struktural bahwa pada umumnya AAS digunakan untuk merepresentasikan *aset fisik produksi* (mesin CNC, robot, AGV), tetapi belum ada kerangka metodologis yang matang untuk menjadikan **infrastruktur komunikasi 5G itu sendiri** sebagai aset yang memiliki DT. Padahal, jaringan nirkabel privat 5G (yang kini diadopsi masif di pabrik pintar melalui spektrum CBRS, n77/n78, dan n78 lokal) adalah *cyber resource* yang kinerjanya (latency, jitter, packet loss, slice isolation) menentukan kualitas kendali closed-loop lantai produksi.

Urgensi ekonominya nyata: menurut estimasi yang dikutip dalam literatur smart manufacturing, downtime tak terjadwal pada lini perakitan akibat degradasi kualitas komunikasi nirkabel dapat menimbulkan kerugian hingga €18.000–€120.000 per jam, tergantung kelas produk. Dari sisi teknis, 5G membawa tiga pilar layanan—*Enhanced Mobile Broadband* (eMBB), *Massive Machine-Type Communication* (mMTC), dan *Ultra-Reliable Low-Latency Communication* (URLLC)—yang masing-masing memerlukan profil Quality of Service (QoS) berbeda, misalnya latensi ujung-ke-ujung 1 ms untuk URLLC pada tingkat keandalan 99,999 %. Tanpa DT yang terus-menerus menyinkronkan profil submodel AAS dengan kondisi riil RAN (Radio Access Network), pabrik tidak dapat menjalankan *predictive network orchestration*.

Di sisi hilir, De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bagaimana arsitektur DT diterapkan pada *cyber-physical assembly transfer system*—yakni sistem transfer komponen antara stasiun perakitan yang mengandalkan konveyor, linear motor, atau AGV fleets. Kajian tersebut menegaskan bahwa subsistem komunikasi 5G adalah *enabler*, bukan *commodity*, untuk mencapai fleksibilitas reconfigurable manufacturing systems (RMS). Integrasi keduanya—AAS untuk 5G (Cavalieri et al., 2024) dan DT untuk transfer perakitan CPPS (De Marchi et al., 2022)—membentuk pondasi *cognitive factory*: pabrik yang dapat mengoptimasi sendiri jalur produksi, alokasi spectrum, dan urutan perakitan secara *real-time*. Inilah latar belakang industrial-operasional-teknis yang melatari Modul 2130.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sinkronisasi Digital Twin–Physical Asset

Digital twin dimodelkan sebagai bayangan (*shadow*) state-space dari aset fisik. Untuk sistem komunikasi 5G, state vektor pada waktu diskrit $k$ didefinisikan sebagai:

$$\mathbf{x}_k = \begin{bmatrix} N_{\text{UE}} & R_{\text{thp}} & \tau_{\text{RTT}} & \rho_{\text{PRB}} & \text{SINR} \end{bmatrix}_k^\top$$

dengan $N_{\text{UE}}$ jumlah *User Equipment* aktif, $R_{\text{thp}}$ throughput agregat (Mbps), $\tau_{\text{RTT}}$ round-trip time (ms), $\rho_{\text{PRB}}$ utilisasi *Physical Resource Block*, dan SINR *Signal-to-Interference-plus-Noise Ratio* (dB). Persamaan的状态 evolusioner DT mengikuti:

$$\hat{\mathbf{x}}_{k+1} = \mathbf{A}\,\hat{\mathbf{x}}_k + \mathbf{B}\,\mathbf{u}_k + \mathbf{K}\,( \mathbf{y}_k - \mathbf{C}\,\hat{\mathbf{x}}_k )$$

dengan $\mathbf{A}$ matriks transisi状态 (estimated dari time-series telemetry RAN), $\mathbf{B}$ matriks input kendali (alokasi bandwidth, beamforming vectors), $\mathbf{K}$ gain Kalman filter, dan $\mathbf{y}_k$ pengukuran aktual dari physical asset. *Steady-state error* sinkronisasi:

$$e_{\infty} = \lim_{k \to \infty} \mathbb{E}\!\left[\, \| \mathbf{x}_k - \hat{\mathbf{x}}_k \|_2^2 \,\right] = \text{tr}(\mathbf{P}_\infty)$$

dengan $\mathbf{P}_\infty$ solusi Riccati diskrit. Untuk konsorsium industri, target tipikal adalah $e_{\infty} < 0{,}05$.

### 2.2 Model Latensi URLLC dan Keandalan

Total latensi paket data URLLC ujung-ke-ujung mengikuti dekomposisi linier (3GPP TR 38.913):

$$\tau_{\text{E2E}} = \tau_{\text{tx}} + \tau_{\text{prop}} + \tau_{\text{queue}} + \tau_{\text{proc}} + \tau_{\text{sched}}$$

Untuk keandalan, Cavalieri et al. (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) merumuskan konstrain URLLC dalam submodel AAS sebagai:

$$P(\tau_{\text{E2E}} \leq \tau_{\max}) \geq 1 - 10^{-x}$$

dengan $x = 5$ untuk "lima sembilan" keandalan. Dengan asumsi distribusi latensi eksponensial parametrized oleh rate $\lambda$ (paket/ms), maka:

$$P(\tau_{\text{E2E}} \leq \tau_{\max}) = 1 - e^{-\lambda \tau_{\max}} \geq 1 - 10^{-5}$$

menghasilkan konstrain $\lambda \leq -\tfrac{1}{\tau_{\max}}\ln(10^{-5})$. Untuk $\tau_{\max} = 1\,\text{ms}$:

$$\lambda \leq \frac{5\ln 10}{1} \approx 11{,}51 \text{ paket/ms}$$

### 2.3 Throughput Shannon dan Alokasi Resource Block

Throughput satu *Physical Resource Block* pada slot 5G NR:

$$R_{\text{PRB}} = N_{\text{RE}} \cdot N_{\text{bps}} \cdot \eta_{\text{coding}} \cdot \frac{1}{T_{\text{slot}}}$$

dengan $N_{\text{RE}}$ *Resource Element*, $N_{\text{bps}}$ bit per simbol, $\eta_{\text{coding}}$ efisiensi pengkodean (≈0,85 untuk LDPC), dan $T_{\text{slot}} = 0{,}5\,\text{ms}$ (numerologi $\mu=1$). Throughput sektor RAT dipengaruhi SINR via kapasitas Shannon:

$$C = B \cdot \log_2(1 + \text{SINR}) \quad \text{(bps/Hz)}$$

Submodel AAS untuk "Radio Performance" mengemas parameter-parameter ini dalam bentuk *property* dan *operation* yang diekspos via HTTP/REST atau OPC UA.

### 2.4 Throughput Transfer Station pada CP Assembly

Berdasarkan De Marchi et al. (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), sistem transfer perakitan dimodelkan sebagai *cyclic conveyor* dengan kapasitas:

$$Q_{\text{sys}} = \min\!\left\{ Q_{\text{mech}},\, Q_{\text{comm}},\, Q_{\text{ctrl}} \right\}$$

dengan $Q_{\text{mech}}$ throughput mekanik (bagian/jam), $Q_{\text{comm}} = \frac{3600}{\bar{\tau}_{\text{E2E}}}$ bagian/jam yang ditentukan jaringan 5G, dan $Q_{\text{ctrl}}$ throughput *programmable logic controller*. *Bottleneck* sistem berpindah ketika $\tau_{\text{E2E}}$ berubah—menjadikan DT 5G aset yang langsung mengendalikan produktivitas lantai pabrik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk jaringan 5G mengikuti enam tahap SOP yang dipandu oleh ISO 23247 dan detail konstruksi submodel menurut spesifikasi AAS (IDTA Submodel Templates):

**Tahap 1 — Identifikasi Aset Komunikasi.** Inventarisasi seluruh node 5G: gNB/DU/CU, AMF/SMF/UPF, edge MEC, *radio units*, UE industri. Tiap node diberi *global asset ID* (IRI) yang *globally unique* sesuai DTAP/AAS规范.

**Tahap 2 — Dekomposisi Submodel.** Gunakan katalog *Submodel Template* resmi IDTA, antara lain: *Nameplate*, *Identification*, *TechnicalData*, *OperationalData*, *Capability*, *RadioPerformance* (kustom sesuai Cavalieri et al., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822))). Tiap submodel merepresentasikan aspek tertentu: Nameplate → identitas; TechnicalData → bandwidth, frekuensi, numerologi; RadioPerformance → telemetry SINR/PRB; OperationalData → timestamp sinkronisasi.

**Tahap 3 — Pemodelan Antarmuka (Interface).** Ekspos submodel via *AAS API* (HTTP/REST + JSON atau OPC UA). Pilih dua mode: *Passive DT* (hanya melayani *read*) atau *Active DT* (menerima *write* untuk konfigurasi RAN parameter via AAS *Operation*).

**Tahap 4 — Akuisisi Data Telemetri.** Pipeline: *RAN collector* (mis. E2 agent O-RAN