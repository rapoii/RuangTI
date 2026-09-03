# 1970 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical dalam Kerangka Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada lantai pabrik telah memicu kebutuhan akan representasi virtual aset fisik yang akurat, *machine-readable*, dan dapat diorkestrasi lintas *stakeholder*. Dalam konteks tersebut, **Asset Administration Shell (AAS)** — spesifikasi yang diformalkan oleh *Industrial Digital Twin Association* (IDTA) yang继承了 *Plattform Industrie 4.0* — muncul sebagai kerangka standar industri Jerman (DIN SPEC 91345) dan kini diadopsi secara luas di Eropa sebagai struktur *digital twin* resmi (Cavalieri dkk., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Berbeda dari pendekatan *digital twin* proprietary yang dikembangkan oleh vendor, AAS mendefinisikan *metamodel* hierarkis yang memisahkan *asset*, *submodel*, dan *submodel element*, sehingga interoperabilitas antara sistem OT (*Operational Technology*) dan IT (*Information Technology*) dapat terjamin secara semantik.

Urgensi utama yang melatarbelakangi integrasi AAS dengan sistem komunikasi nirkabel generasi kelima (*5G New Radio*) bersumber dari kebutuhan manufaktur modern terhadap komunikasi *ultra-reliable low-latency communication* (URLLC) dengan latensi di bawah 10 ms, keandalan 99,999%, dan throughput yang deterministik untuk aplikasi *closed-loop control* pada lini produksi. Cavalieri, Di Natale, dan Gambadoro (2024) secara eksplisit menyatakan bahwa tanpa representasi formal terhadap kapabilitas jaringan 5G — termasuk *slicing*, *Quality of Service* (QoS), dan parameter *beamforming* — integrasi *cyber-physical production system* (CPPS) ke dalam kerangka RAMI 4.0 (*Reference Architecture Model Industrie 4.0*) akan mengalami fragmentasi semantik. Studi tersebut membangun *digital twin* AAS untuk node 5G yang memungkinkan *network orchestrator* memantau konsumsi sumber daya radio dan menyesuaikan *slice* secara adaptif berdasarkan beban lini produksi.

Di sisi lain, De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menyoroti bahwa arsitektur *digital twin* untuk **sistem transfer perakitan *cyber-physical*** — yang menjadi tulang punggung lini perakitan *mixed-model* pada industri otomotif dan elektronik — mensyaratkan tiga pilar: (1) lapisan sensor aktuator terdistribusi yang berkomunikasi melalui protokol deterministik, (2) lapisan *edge computing* untuk agregasi data waktu-nyata, dan (3) lapisan *digital twin* AAS untuk sinkronisasi status fisik dan virtual. Kedua paper ini secara konvergen menekankan bahwa AAS bukan sekadar *wrapper* data, melainkan *enabler* bagi interoperabilitas horizontal lintas-*machine tool*, sekaligus tulang punggung integrasi vertikal antara *shop-floor* dan *enterprise resource planning* (ERP).

Secara ekonomi, pasar *digital twin* industri diproyeksikan mencapai USD 156,7 miliar pada tahun 2030 (compound annual growth rate ~38%), dengan aplikasi manufaktur menyumbang lebih dari 34% pangsa. Tanpa standardisasi AAS, biaya integrasi diestimasikan meningkat 25–40% akibat *vendor lock-in*. Dengan demikian, penguasaan terhadap arsitektur AAS untuk sistem komunikasi 5G dan sistem transfer perakitan menjadi kompetensi strategis bagi insinyur teknik industri abad ke-21.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell

AAS direpresentasikan melalui dokumen JSON atau RDF/XML dengan struktur hierarkis: `AssetAdministrationShell → Submodel → SubmodelElement → Property/Operation/Event`. Setiap *submodel* merepresentasikan aspek spesifik aset — misalnya, `SubmodelNetworkCapabilities` untuk node 5G, atau `SubmodelTransferSystemDynamics` untuk sistem transfer perakitan.

### 2.2 Model Throughput Jaringan 5G (Shannon Capacity)

Untuk link *downlink* 5G NR pada *gNodeB* dengan bandwidth sistem $B$ (Hz), efisiensi spektral $\eta_{SE}$ (bit/s/Hz), dan jumlah *resource block* aktif $N_{RB}$, kapasitas *peak data rate* diberikan oleh:

$$R_{peak} = 10^{-3} \cdot \sum_{j=1}^{J} \left( N_{RB}^{j} \cdot N_{SC}^{RB} \cdot N_{symb}^{subframe} \cdot N_{layers}^{j} \cdot Q_{m}^{j} \cdot f_{j} \cdot \eta_{SE}^{j} \right) \text{ [Mbps]}$$

dengan $N_{SC}^{RB}=12$ subcarrier per RB, $N_{symb}^{subframe}=14$ simbol OFDM per subframe, $Q_m$ sebagai *modulation order* (4, 6, atau 8 untuk QPSK, 16-QAM, 64-QAM), $f_j$ sebagai rasio *frame*, dan $J$ jumlah *carrier aggregation component*.

### 2.3 Model Latensi URLLC pada Lini Produksi

Untuk *closed-loop control* dengan periode sampling $T_s$, latensi end-to-end $L_{e2E}$ harus memenuhi:

$$L_{e2E} = T_{proc}^{UE} + T_{tx} + T_{prop} + T_{proc}^{gNB} + T_{backhaul} + T_{edge} \leq \alpha \cdot T_s$$

dengan $\alpha \in [0.1, 0.3]$ untuk menjamin *phase margin* yang memadai pada *controller* PID. Untuk URLLC, 3GPP TS 22.261 menetapkan target $L_{e2E} \leq 1$ ms untuk *user-plane* dan $\leq 10$ ms untuk *control-plane*.

### 2.4 Model Keandalan Sistem Transfer Perakitan (De Marchi dkk., 2022)

Untuk sistem transfer perakitan *cyber-physical* dengan komponen $i$ yang memiliki *failure rate* $\lambda_i$ (failure/jam), ketersediaan sistem *steady-state*:

$$A_{sys} = \frac{MTBF_{sys}}{MTBF_{sys} + MTTR_{sys}} = \prod_{i=1}^{n} \frac{\mu_i}{\lambda_i + \mu_i}$$

dengan $\mu_i = 1/MTTR_i$ sebagai *repair rate*. Untuk sistem dengan konfigurasi *parallel redundant*, ketersediaan agregat:

$$A_{par} = 1 - \prod_{i=1}^{k} (1 - A_i)$$

### 2.5 Model Sinkronisasi Digital Twin

*Synchronization error* $\epsilon_{sync}(t)$ antara status fisik $x_p(t)$ dan status virtual $x_v(t)$ didefinisikan sebagai:

$$\epsilon_{sync}(t) = \| x_p(t) - x_v(t - \tau_{comm}) \|_2$$

dengan $\tau_{comm}$ sebagai *communication delay*. Untuk menjamin koherensi, *update rate* AAS minimal:

$$f_{update}^{min} = \frac{1}{\tau_{comm}} \cdot \log\left(\frac{\| x_p^{max} - x_v^{min} \|}{\delta_{tol}}\right)$$

di mana $\delta_{tol}$ adalah *tolerance threshold* yang ditetapkan oleh *controller*.

### 2.6 Network Slicing Resource Allocation

Untuk $S$ *slice* pada infrastruktur 5G bersama, alokasi sumber daya radio $r_s$ (dari total $R_{total}$) dilakukan melalui optimasi:

$$\max_{r_s} \sum_{s=1}^{S} U_s(r_s) \quad \text{subject to} \quad \sum_{s=1}^{S} r_s \leq R_{total}, \quad r_s \geq r_s^{min}$$

dengan fungsi utilitas *concave* $U_s(\cdot)$ yang merepresentasikan nilai *Quality of Experience* per *slice*. Pemecahan melalui *Lagrangian relaxation* menghasilkan *price* per-unit-resource $\pi^*$ dan alokasi *proportional fair*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS *digital twin* untuk sistem komunikasi 5G mengikuti SOP delapan-tahap yang berasal dari metodologi yang diajukan Cavalieri dkk. (2024) dan De Marchi dkk. (2022):

**Tahap 1 — Identifikasi Aset dan Batasan Sistem.** Definisikan *asset* fisik (node 5G, *conveyor*, robot transfer) dan tetapkan *boundary* antara dunia fisik dan virtual. Untuk setiap aset, tetapkan *identifier* sesuai IEC 61406 (RFID/QR-code *unique identification*).

**Tahap 2 — Pemetaan Submodel sesuai IDTA Template.** Pilih *standard submodel templates* dari katalog IDTA. Contoh untuk node 5G: `SubmodelCommunicationProperties`, `SubmodelNetworkSlicing`, `SubmodelQoSMetrics`. Untuk sistem transfer: `SubmodelNameplate`, `SubmodelCapability`, `SubmodelBillOfMaterial`.

**Tahap 3 — Pembuatan *AASX Package*.* Gunakan *AASX Package Explorer* (Forschungszentrum Informatik) untuk menghasilkan file `.aasx` berformat OPC UA companion specification yang menggabungkan XML/JSON, file CAD, dan dokumentasi PDF.

**Tahap 4 — Integrasi Sensor via OPC UA over 5G.** Terapisikan *publisher-subscriber pattern* dengan *broker* MQTT atau *publishing interval* OPC UA ≤ 100 ms melalui *network slice* URLLC. Setiap *measurement* dipetakan ke `Property` AAS dengan `idShort` terstandardisasi.

**Tahap 5 — Provisioning Edge Computing Node.** *Edge node* (NVIDIA Jetson, Siemens Industrial Edge) menjalankan *AAS server* lokal untuk mengurangi latensi cloud-roundtrip. *Cache* submodel yang sering diakses, sementara *historical data* dikirim ke *time-series database* (InfluxDB) untuk analisis *predictive maintenance*.

**Tahap 6 — Orkestrasi Network Slicing Adaptif.** Modul *orchestrator* (berbasis *intent-based networking*) membaca `SubmodelQoSMetrics` dan menyesuaikan parameter *slice*: *guaranteed bitrate*, *maximum latency*, *reliability target*. Trigger re-alokasi ketika *slice utilization* > 80%.

**Tahap 7 — Visualisasi dan HMI Digital Twin.** Gunakan *BaSyx* (Eclipse) atau *Graphical Twin* untuk *human-machine interface* 3D yang memperlihatkan status *real-time*, *historical playback*, dan *what-if scenario*.

**Tahap 8 — Validasi dan Continuous Improvement.** Bandingkan status virtual dengan status fisik menggunakan *co-simulation* antara AAS dan *digital twin simulator* (ANSYS, Siemens Tecnomatix). Lakukan *FMEA* berkala terhadap setiap *submodel element*.

Arsitektur referensi yang dihasilkan mengikuti pola **3-tier**: (i) *Shop-floor tier* (PLC, sensor, aktuator dengan *PROFINET/OPC UA*); (ii) *Edge tier* (AAS server, *time-series DB*, *AI inference*); (iii) *Cloud tier* (AAS registry, *fleet management*, *advanced analytics*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Perhitungan Kapasitas 5G untuk Pabrik Perakitan Otomotif

Sebuah pabrik perakitan *mixed-model*配备 12 robot transfer yang dikendalikan via 5G. Parameter jaringan: *bandwidth* $B = 100$ MHz pada *band* n78 (3,5 GHz), *carrier aggregation* $J = 2$, *modulation* 64-QAM ($Q_m = 6$), 4×4 MIMO ($N_{layers} = 4$), *subcarrier spacing* 30 kHz menghasilkan $N_{RB} = 273$ per *carrier*.

**Step 1: Hitung *peak data rate* per *carrier*.**

$$R_{peak,j} = 10^{-3} \cdot (273 \cdot 12 \cdot 14 \cdot 4 \cdot 6) \cdot 1 \cdot \eta_{SE