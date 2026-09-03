# 2306 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G Industri dan Integrasi Sistem Transfer Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur menuju **Industry 4.0** dan **Industry 5.0** menempatkan jaringan komunikasi nirkabel seluler generasi kelima (5G) sebagai *critical infrastructure* yang menopang otomasi, robotika kolaboratif (*cobot*), sistem cyber-physical (CPS), dan platform Industrial Internet of Things (IIoT). Berbeda dengan Wi-Fi industri yang memiliki keterbatasan determinisme dan mobilitas, 5G menghadirkan tiga pilar layanan utama: *Enhanced Mobile Broadband* (eMBB) untuk throughput tinggi, *Massive Machine-Type Communications* (mMTC) untuk konektivitas sensor masif, dan *Ultra-Reliable Low-Latency Communications* (URLLC) untuk kendali.loop tertutup dengan latensi < 5 ms dan keandalan 99,999 % (3GPP TS 22.261). Cavalieri, Di Natale, dan Gambadoro (2024) dalam karyanya yang dipublikasikan pada *ICINCO 2024* mengidentifikasi bahwa kompleksitas operasional jaringan 5G privat (private 5G) yang diterapkan di lantai pabrik membutuhkan representasi digital yang terstruktur, interoperabel, dan *machine-interpretable* agar dapat diintegrasikan dengan ekosistem *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP).

Di sinilah konsep **Asset Administration Shell (AAS)** dari *Reference Architecture Model Industry 4.0* (RAMI 4.0) — yang diformalkan oleh Platform Industrie 4.0 dan стандарт IEC 63278 (formerly PAS 62955) — berperan sentral. AAS adalah *digital representation* standar dari sebuah aset industri yang terdiri dari beberapa *submodels* (Nameplate, Identification, Documentation, Capability, etc.) yang masing-masing merepresentasikan aspek tertentu dari aset. Kontribusi orisinal Cavalieri dkk. (2024) adalah memperluasnya menjadi *AAS-based Digital Twin* dari jaringan komunikasi 5G itu sendiri, bukan sekadar dari perangkat *end* yang terhubung. Pendekatan ini menjawab gap riset berupa minimnya metodologi formal untuk melakukan *twinning* terhadap infrastruktur telekomunikasi privat di pabrik.

Urgensi ekonomis pendekatan ini sangat nyata: studi oleh Ericsson (2023) menunjukkan bahwa *downtime* jaringan komunikasi di pabrik pintar dapat menyebabkan kerugian produksi hingga **$50.000 per menit** pada lini *semiconductor* kelas atas, sehingga kebutuhan akan *predictive maintenance* jaringan, *anomaly detection*, dan simulasi *what-if* terhadap konfigurasi 5G menjadi sangat strategis. Di sisi lain, De Marchi, Rojas, dan Mark (2022) yang dimuat di *IN4PL 2022* menyajikan arsitektur *digital twin* untuk **sistem transfer perakitan cyber-physical** — yaitu subsistem penting lini produksi yang memindahkan *workpiece* antar stasiun perakitan dengan presisi tinggi. Kedua paper ini saling melengkapi: tanpa jaringan 5G URLLC yang *reliable*, *digital twin* sistem transfer tidak dapat melakukan sinkronisasi *real-time*; tanpa AAS sebagai *interoperability layer*, *twin* jaringan 5G tidak dapat berkomunikasi dengan MES maupun *twin* lini produksi.

Konteks industri yang melatarbelakangi riset ini mencakup tiga tantangan utama: (1) **fragmentasi protokol** antara vendor 5G (Ericsson, Nokia, Huawei, Samsung) yang menghambat interoperabilitas, (2) **kurangnya model data standar** untuk merepresentasikan parameter jaringan 5G (RSRP, SINR, throughput, latensi) dalam format yang dapat dibaca MES, dan (3) **kompleksitas orkestrasi** antara *network slice* 5G dengan *workstation* perakitan. Kedua paper di atas memberikan kontribusi untuk menjawab tantangan tersebut melalui pendekatan AAS yang *vendor-neutral* dan *semantically rich*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual Asset Administration Shell (AAS)

Menurut spesifikasi *Details of the Asset Administration Shell* (Industrie 4.0 Plattform, 2023), AAS didefinisikan sebagai struktur hierarkis yang terdiri dari *Asset*, *Asset Administration Shell*, dan satu atau lebih *Submodel*. Formalnya, AAS dapat direpresentasikan sebagai tuple:

$$AAS = \langle A, M, S, R, I \rangle$$

di mana $A$ adalah identitas unik aset (misalnya *gNodeB* 5G dengan serial number), $M$ adalah *metaproperty* global AAS, $S = \{s_1, s_2, ..., s_n\}$ adalah himpunan *submodels*, $R$ adalah relasi antar-*submodel*, dan $I$ adalah *interface* komunikasi (OPC UA, MQTT, atau HTTP/RESTful). Cavalieri dkk. (2024) memanfaatkan struktur ini untuk mendefinisikan *submodels* khusus 5G seperti `CommunicationSubmodel`, `NetworkSliceSubmodel`, `QoSMetricsSubmodel`, dan `FaultManagementSubmodel`.

### 2.2 Model Kualitas Layanan (QoS) Jaringan 5G

Kinerja jaringan 5G dalam konteks industri dimodelkan melalui beberapa Key Performance Indicators (KPI). Latensi end-to-end *user-plane* dapat dinyatakan sebagai jumlahan latensi kumulatif:

$$L_{e2e} = L_{UE} + L_{radio} + L_{gNB} + L_{transport} + L_{UPF} + L_{server}$$

di mana $L_{UE}$ adalah latensi pemrosesan *User Equipment*, $L_{radio}$ adalah latensi propagasi radio, $L_{gNB}$ adalah latensi *next-generation NodeB*, $L_{transport}$ adalah latensi *fronthaul/midhaul*, $L_{UPF}$ adalah latensi *User Plane Function*, dan $L_{server}$ adalah latensi aplikasi. Untuk URLLC, 3GPP menargetkan $L_{e2e} \leq 1$ ms dengan probabilitas keberhasilan $1 - 10^{-5}$.

Throughput kanal radio dimodelkan oleh kapasitas Shannon yang disesuaikan dengan *spectral efficiency* 5G NR:

$$C = B \cdot \log_2(1 + \text{SINR}) \cdot \eta_{coding}$$

dengan $B$ adalah *bandwidth* (maksimum 400 MHz pada FR2 *mmWave*), $\text{SINR}$ adalah *Signal-to-Interference-plus-Noise Ratio*, dan $\eta_{coding}$ adalah efisiensi *coding* (≈ 0,85 untuk LDPC 5G NR).

### 2.3 Model Sinkronisasi Digital Twin

De Marchi, Rojas, dan Mark (2022) mendefinisikan *digital twin* sistem transfer perakitan sebagai representasi *state-space* yang paralel dengan sistem fisik. Jika $x_p(t) \in \mathbb{R}^n$ adalah *state vector* sistem fisik (posisi, kecepatan, torsi *conveyor* atau *AGV*), dan $x_v(t) \in \mathbb{R}^n$ adalah *state vector* *virtual*, maka *synchronization error* didefinisikan:

$$e(t) = \| x_p(t) - x_v(t) \|_2 = \sqrt{\sum_{i=1}^{n} \left( x_{p,i}(t) - x_{v,i}(t) \right)^2 }$$

Untuk menjaga konsistensi, dilakukan re-sinkronisasi periodik dengan laju $f_s$ (Hz), dengan kebutuhan bandwidth komunikasi:

$$BW_{DT} = n \cdot f_s \cdot (\text{bit
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
