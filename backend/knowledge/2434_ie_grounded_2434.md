# 2434 — Selubung Administrasi Aset sebagai Kembaran Digital Sistem Komunikasi 5G untuk Otomasi Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah memperkenalkan paradigma *Cyber-Physical Production Systems* (CPPS) di mana aset fisik manufaktur—mulai dari robot kolaboratif (*cobot*), Automated Guided Vehicle (AGV), hingga lini perakitan—harus memiliki representasi digital yang mampu melayani siklus hidup secara utuh. Kebutuhan ini memicu inisiatif standardisasi **Asset Administration Shell (AAS)** oleh *Plattform Industrie 4.0* dan kini diformalisasikan melalui IEC 63278 (Cavalieri *et al.*, 2024). Pada tataran praktis, integrasi AAS dengan jaringan komunikasi generasi kelima (5G)—khususnya profil *Ultra-Reliable Low-Latency Communication* (URLLC)—menjadi titik kritis karena 5G diproyeksikan sebagai tulang punggung komunikasi nirkabel di lantai pabrik (*shop floor*).

Konteks industri yang melatari paper Cavalieri, Di Natale, dan Gambadoro (2024) adalah ledakan kebutuhan akan konektivitas deterministik untuk aplikasi seperti motion control (≤1 ms latensi), augmented reality pemeliharaan (≥50 Mbps uplink), dan kendali proses kritis (reliability 99,999%). Di sisi lain, paper De Marchi, Rojas, dan Mark (2022) membahas arsitektur kembaran digital untuk sistem transfer perakitan siber-fisik yang mengintegrasikan sensor, aktuator, dan logika kontrol terdistribusi. Keduanya bertemu pada satu kebutuhan bersama: representasi aset komunikasi 5G harus tunduk pada standar interoperable agar dapat di-*plug-and-play* ke dalam ekosistem *smart manufacturing* lintas-pemasok.

Urgensi ekonomi dari topik ini dapat dilihat dari laporan Industrial 5G Consortium yang memproyeksikan nilai pasar *private 5G network* di manufaktur mencapai USD 14,6 miliar pada 2030. Namun tanpa model informasi aset yang terstandar, investasi ini akan terfragmentasi ke dalam silo-silo proprietary masing-masing vendor (Huawei, Ericsson, Nokia, Siemens). AAS menjawab tantangan ini dengan menyediakan *metamodel* berbasis *Resource Description Format* (RDF) yang mampu mendeskripsikan identitas (*Identification*), kemampuan teknis (*Capability*), dan kondisi operasional (*OperationalData*) dari base station 5G, antenna, dan *core network function*. Pendekatan ini memungkinkan *digital twin* dari infrastruktur telekomunikasi diperlakukan sebagai *first-class citizen* di dalam arsitektur Reference Architecture Model Industry 4.0 (RAMI 4.0), sejajar dengan aset manufaktur fisik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Konseptual Asset Administration Shell

AAS merupakan struktur data hierarkis yang merepresentasikan aset industri. Secara formal, satu instans AAS $\mathcal{A}$ dapat didefinisikan sebagai:

$$
\mathcal{A} = \{ \mathcal{I}, \mathcal{S}, \mathcal{V}, \mathcal{C} \}
$$

di mana $\mathcal{I}$ adalah himpunan *submodel identifier* (misalnya `Nameplate`, `TechnicalData`, `OperationalData`), $\mathcal{S}$ adalah himpunan *submodel element* yang merupakan properti atau operasi, $\mathcal{V}$ adalah himpunan nilai skalar atau vektor, dan $\mathcal{C}$ adalah himpunan constraint (rentang nilai, satuan). Untuk konteks base station, Cavalieri *et al.* (2024) mendefinisikan submodel khusus 5G NR yang memuat parameter lapisan fisika seperti frekuensi pembawa $f_c$, bandwidth kanal $B$, dan *transmit power* $P_{tx}$.

### 2.2. Model Latensi URLLC pada Sistem 5G Industri

Untuk komunikasi misi-kritis, parameter latensi end-to-end didekomposisi menjadi empat komponen utama sesuai 3GPP TS 22.261:

$$
L_{e2e} = L_{air} + L_{trans} + L_{core} + L_{edge}
$$

dengan $L_{air} = \frac{N_{sym} \cdot T_{sym}}{2}$ untuk konfigurasi slot mini (mini-slot of 2 OFDM symbols), di mana pada numerologi $\mu = 3$ berlaku $T_{sym} = 8,92\ \mu s$ sehingga $L_{air} \approx 17,84\ \mu s$. Anggaran latensi total untuk profil URLLC pada umumnya dibatasi:

$$
L_{e2e} \leq 1\ \text{ms} \quad \text{(user-plane latency target)}
$$

### 2.3. Keandalan dan Probabilitas Kegagalan

Batas keandalan 99,999% (five-nines) dalam jendela transmisi $T_{obs}=1$ jam menghasilkan probabilitas kegagalan maksimum:

$$
P_{fail} = 1 - R = 10^{-5} \implies \lambda_{max} = -\frac{\ln(0{,}99999)}{T_{obs}} = 2{,}78 \times 10^{-9}\ \text{failures/s}
$$

di mana $\lambda_{max}$ adalah laju kegagalan per detik. Parameter ini kemudian dipakai sebagai约束 (*constraint*) pada submodel `ReliabilityMetrics` di dalam AAS base station 5G.

### 2.4. Throughput Agregat *Network Slice*

Kapasitas throughput agregat untuk *network slice* URLLC dengan $N_{UE}$ pengguna aktif, *spectral efficiency* $\eta$, dan bandwidth $B$ diberikan oleh:

$$
C_{slice} = N_{UE} \cdot \eta \cdot B \cdot \rho_{load}
$$

dengan $\rho_{load} \in [0,1]$ adalah faktor utilisasi sel. Misalnya, untuk $N_{UE}=50$ AGV, $\eta=3{,}5$ bit/s/Hz (256-QAM), $B=100$ MHz, dan $\rho_{load}=0{,}7$, diperoleh $C_{slice} = 50 \cdot 3{,}5 \cdot 100 \cdot 0{,}7 = 12{,}25$ Gbps.

---

## 3. Metodologi Rekayasa & SOP Implementasi AAS-5G

Paper Cavalieri *et al.* (2024) mengusulkan metodologi lima-tahap untuk membangun kembaran digital infrastruktur 5G berbasis AAS. Prosedur Operasional Standar (SOP) yang dapat diadopsi praktisi industri adalah sebagai berikut:

### Tahap 1 — *Asset Identification & Role Mapping*
Definisikan aset komunikasi yang akan dimodelkan: gNodeB, AMF (Access and Mobility Management Function), SMF (Session Management Function), UPF (User Plane Function), serta *Radio Unit* (RU). Tetapkan Global Asset ID sesuai *Eclipse AAS Specification* `https://github.com/admin-shell-io/aas-specs`.

### Tahap 2 — *Submodel Template Engineering*
Pilih atau rancang submodel templates mengikuti *Plattform Industrie 4.0 Submodel Repository*. Contoh submodel relevan:

- **Nameplate**: serial number, manufacturer, year of construction.
- **TechnicalData**: $f_c$, $B$, $P_{tx}$, antenna gain $G_{tx}$, tinggi antena $h_{ant}$.
- **OperationalData**: real-time Key Performance Indicator (KPI) seperti RSRP, SINR, throughput aktual, *block error rate* (BLER).
- **Capability**: apakah mendukung URLLC, eMBB, atau mMTC.

### Tahap 3 — *AASX Packaging & Deployment*
Kemas seluruh definisi ke dalam file `.aasx` (AAS eXchange) berbasis OPC UA Companion Specification. Distribusikan ke *AAS Registry* atau *AAS Server* menggunakan protokol HTTP/REST atau MQTT publish-subscribe.

### Tahap 4 — *5G Data Source Integration*
Hubungkan submodel `OperationalData` dengan sumber data telemetri 5G melalui *northbound interface*. Gunakan representational state transfer (REST) API dari *Network Management System* (NMS) atau streaming Kafka dari *Performance Management* (PM) collector. *Update rate* $\Delta t$ dipilih mengikuti dinamika aset: 1 s untuk monitoring kualitas sinyal, 10 ms untuk kontrol AGV.

### Tahap 5 — *Digital Twin Synchronization & Validation*
Validasi konsistensi antara nilai di AAS dengan kondisi fisik menggunakan teknik *state estimation* seperti Kalman Filter pada data RSRP, atau *hypothesis testing* (uji-$\chi^2$) untuk distribusi BLER. Cavalieri *et al.* (2024) menekankan pentingnya *closed-loop validation* agar kembaran digital menjadi benar-benar representatif.

Selaras dengan paper De Marchi *et al.* (2022), arsitektur ini kemudian di-*compose* ke dalam sistem perakitan siber-fisik, di mana AAAS base station 5G menyediakan lapisan konektivitas deterministik antara *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
