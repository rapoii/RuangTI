# 2898 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 di lantai produksi mensyaratkan integrasi tiga pilar teknologi — *Cyber-Physical Production Systems* (CPPS), komunikasi nirkabel generasi kelima (5G), dan *Digital Twin* (DT) berbasis standar — secara bersamaan agar tercapai visibilitas real-time terhadap aset fisik. Cavalieri, Di Natale, dan Gambadoro (2024) dalam Proceedings ICINCO 2024 mengangkat persoalan arsitektur DT untuk jaringan 5G industri menggunakan kerangka **Asset Administration Shell (AAS)** yang distandarkan oleh Plattform Industrie 4.0 dan kini diformalkan dalam IEC PAS 63278. Tulisan ini mengisi celah kritis: bagaimana merepresentasikan *sel*jaringan nirkabel privat (Private 5G) — termasuk *gNodeB*, *User Plane Function*, dan *network slice* — sebagai submodel AAS yang dapat dipertukarkan antar-*toolchain* engineering (Cavalieri et al., 2024, https://doi.org/10.5220/0012914200003822). Sebelumnya De Marchi, Rojas, dan Mark (2022) di IN4PL telah memvalidasi arsitektur DT berlapis untuk sistem transfer perakitan *cyber-physical*, yang menjadi *baseline* integrasi fisik-siber untuk skenario manufaktur diskrit (*discrete manufacturing*) (De Marchi et al., 2022, https://doi.org/10.5220/0011589900003329).

Urgensi ekonomi dan teknisnya substansial. Pertama, survei GSMA (2023) menunjukkan bahwa pasar 5G industri akan menembus USD 180 miliar pada 2030, namun fragmentasi vendor *Radio Access Network* (RAN) — antara Ericsson, Nokia, Huawei, dan pemain Open RAN — menimbulkan interoperabilitas rendah. Tanpa standar AAS, *handover* data historis antar-Equipment Vendor Master (EVM) menjadi mahal dan rentan *lock-in*. Kedua, *ultra-reliable low-latency communication* (URLLC) 5G menjanjikan latensi 1 ms dengan keandalan 99,999% (5G PPP, 2022), sehingga memerlukan *state observer* yang deterministik — peran yang tidak dapat dipenuhi oleh protokol proprietary MQTT/AMQP tanpa formalisasi semantik. Ketiga, integrasi antara OT (Operational Technology) lantai pabrik dan IT (Information Technology) korporat melalui AAS memungkinkan *predictive maintenance* berbasis *Remaining Useful Life* (RUL), mengurangi *Mean Time To Repair* (MTTR) hingga 30–45% (Lee et al., 2014). Konteks ini menegaskan bahwa modul 2898 bukan sekadar wacana teknologi tetapi pilar strategis untuk kompetensi Teknik Industri abad ke-21.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis Digital Twin dan Submodel AAS

Digital Twin didefinisikan secara formal oleh Tao et al. (2018) sebagai integrasi tiga dimensi: fisik (*physical entity*), maya (*virtual entity*), dan koneksi (*connection*). Secara matematis, status fisik aset pada waktu diskrit $k$ dievolusi menurut persamaan状态空间 linear:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k, \quad \mathbf{y}_k = \mathbf{H}\mathbf{x}_k + \mathbf{v}_k$$

dengan $\mathbf{A}\in\mathbb{R}^{n\times n}$ matriks transisi状态, $\mathbf{B}$ matriks input, $\mathbf{H}$ matriks observasi, $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0},\mathbf{Q})$ derau状态, dan $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0},\mathbf{R})$ derau pengukuran. Estimasi状态 pada DT dilakukan dengan *Kalman Filter*:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k(\mathbf{z}_k - \mathbf{H}\hat{\mathbf{x}}_{k|k-1}),\quad \mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{H}^\top(\mathbf{H}\mathbf{P}_{k|k-1}\mathbf{H}^\top + \mathbf{R})^{-1}$$

dengan $\mathbf{K}_k$ penguatan Kalman dan $\mathbf{P}_{k|k-1}$ kovarians prediksi.

### 2.2 Model Kapasitas Kanal 5G (Shannon-Hartley)

Untuk menjamin kualitas layanan URLLC, kapasitas kanal uplink/downlink 5G mengikuti formula Shannon-Hartley:

$$C = B \cdot \log_2\!\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 B \cdot PL}\right) \;\;[\text{bit/s}]$$

dengan $B$ bandwidth (Hz), $P_t$ daya pancar, $G_t, G_r$ penguatan antena, $N_0$ densitas derau termal, dan $PL$ *path loss*. Untuk sub-6 GHz industri pada 3,5 GHz dengan $B=100$ MHz, $P_t=23$ dBm, dan SNR $= 10$ dB, kapasitas teoretis:

$$C = 100\times 10^6 \cdot \log_2(11) \approx 100\times 10^6 \cdot 3{,}459 = 345{,}9\;\text{Mbps}$$

### 2.3 Anggaran Latensi URLLC 5G

Latensi end-to-end URLLC disusun atas empat komponen:

$$L_{\text{URLLC}} = L_{\text{UE}} + L_{\text{access}} + L_{\text{backhaul}} + L_{\text{core}}$$

Cavalieri et al. (2024) menurunkan anggaran ini ke dalam submodel AAS `CommunicationSubmodel` dengan target 1 ms pada *one-way user-plane latency*. Keandalan terkait *block error rate* (BLER) $\leq 10^{-5}$ memenuhi:

$$P_{\text{succ}} = 1 - \text{BLER} \geq 1 - 10^{-5} = 0{,}99999$$

### 2.4 Model Sinkronisasi DT–AAS

Sinkronisasi状态 antara *physical twin* dan *virtual twin* memerlukan laju pembaruan $f_s$ yang bergantung pada *jitter* jaringan $\sigma_j$ dan ukuran paket AASX $M_{\text{AASX}}$:

$$f_{s,\max} = \frac{R_{5G} \cdot 8}{M_{\text{AASX}} \cdot (1 + 3\sigma_j / T_{\text{cycle}})}$$

dengan $R_{5G}$ throughput efektif (bps) dan $T_{\text{cycle}}$ *cycle time* produksi (s).

## 4. Metodologi Rekayasa & SOP Implementasi AAS-DT-5G

Prosedur operasional baku (*Standard Operating Procedure*) untuk mengimplementasikan arsitektur Cavalieri et al. (2024) dibagi dalam tujuh tahap sistematis yang mengintegrasikan praktik De Marchi et al. (2022):

**Tahap 1 — Identifikasi Aset dan *Taxonomy* AAS.** Inventarisasi seluruh entitas fisik (gNodeB, sensor, *Programmable Logic Controller*) dan klasifikasikan menurut *taxonomy* IEC PAS 63278. Tetapkan *globally unique identifier*