# 2338 — Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G Industri: Arsitektur, Formulasi Matematis, dan Prosedur Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System — Integrasi AAS Plattform Industrie 4.0 dengan jaringan seluler privat generasi kelima untuk otomasi industri
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital manufaktur yang dipicu oleh inisiatif *Plattform Industrie 4.0* dan *Reference Architecture Model Industry 4.0* (RAMI 4.0) telah menempatkan konsep *Asset Administration Shell* (AAS) sebagai elemen sentral untuk interoperabilitas aset industri. AAS berfungsi sebagai representasi digital standar yang men-*encoding* identitas, kapabilitas, status, dan dokumentasi teknis sebuah aset fisik agar dapat diakses secara semantik oleh pihak-pihak heterogen dalam ekosistem Industri 4.0. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *“Asset Administration Shell Digital Twin of 5G Communication System”* mengangkat satu pertanyaan rekayasa yang sangat relevan: bagaimana menjadikan sebuah *private 5G network* — yang merupakan *enabler* konektivitas nirkabel latensi-ultra-rendah untuk lantai pabrik — sebagai *asset* yang dapat di-*model*-kan ke dalam AAS secara utuh, sehingga performanya dapat dimonitor, dikontrol, dan di-*orchestrate* dari tingkat perusahaan (*enterprise level*) hingga tingkat *edge*. Studi ini dipublikasikan dalam *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* dan mengusulkan dekomposisi fungsional jaringan 5G menjadi sekumpulan *submodel* AAS yang merepresentasikan *Radio Access Network* (RAN), *5G Core* (5GC), *User Equipment* (UE), serta *Quality of Service* (QoS) profile.

Urgensi industrialisasi penelitian ini tidak terlepas dari tiga tekanan simultan. Pertama, adopsi 5G *non-public networks* (NPN) oleh operator seperti BMW di Leipzig, Bosch di Würzburg, dan Lufthansa Technik di Hamburg menuntut adanya *digital twin* jaringan yang *single source of truth* untuk compliance dan *fault management*. Kedua, standarisasi internasional yang dilakukan IEC, ISO, dan 3GPP memerlukan agar setiap *network function* (NF) terekspos melalui skema data yang terstruktur (misalnya AASX package, JSON, atau XML) sehingga integrasi dengan *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP) menjadi plug-and-play. Ketiga, peningkatan kompleksitas *Network Slicing* — di mana satu infrastruktur fisik harus melayani tiga kategori layanan berbeda (URLLC, eMBB, mMTC) secara simultan — memerlukan model formal untuk menjamin *Service Level Agreement* (SLA). Hasil riset Cavalieri dkk. (2024) menjawab kebutuhan ini melalui pemetaan deterministik antara elemen 3GPP dan kelas AAS. Sementara itu, studi De Marchi, Rojas, dan Mark (2022) yang berjudul *“Digital Twin Architecture of a Cyber-physical Assembly Transfer System”* memberikan komparasi penting karena menyajikan arsitektur *digital twin* untuk sistem *transfer* rakitan *cyber-physical* berlapis (edge–fog–cloud) yang dapat dijadikan acuan integrasi dengan AAS 5G. Kedua literatur tersebut saling melengkapi karena De Marchi dkk. menyediakan pola arsitektur CPS berlapis untuk lini perakitan, sedangkan Cavalieri dkk. menyediakan *schema* data standar AAS yang konsisten untuk jaringan komunikasi.

Dari sudut pandang ekonomi, kapitalisasi aset TIK dalam industri manufaktur maju mencapai 8–12 % dari total investasi modal, dan *downtime* jaringan komunikasi 5G yang tidak terkelola dapat menyebabkan kerugian produksi hingga €100.000 per jam pada lini *high-mix low-volume*. Oleh karena itu, *digital twin* AAS tidak lagi menjadi pilihan, melainkan menjadi kebutuhan strategis untuk *predictive maintenance*, *root-cause analysis*, dan *closed-loop optimization* pada lantai pabrik yang terdigitalisasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Relasional Asset Administration Shell (AAS)

AAS mengikuti spesifikasi IEC 63278 dan *Specification of the Asset Administration Shell — Part 1* yang dikeluarkan *Plattform Industrie 4.0*. Secara struktural, AAS tersusun atas empat *aas:Identifiable* utama, masing-masing diidentifikasi oleh *idShort* yang bersifat unik secara global. Hubungan父子 (parent–child) antar-*element* mengikuti struktur pohon (*HasDataSpecification*, *HasProperty*, *HasOperation*). Formulasi indeksasi untuk *submodel* ke-$i$ dapat ditulis sebagai:

$$
\mathcal{A} = \left\{a_j \,\middle|\, j \in \mathcal{J}, \; a_j \in \bigcup_{i=1}^{N_{SM}} S_i \right\}
$$

di mana $\mathcal{A}$ adalah himpunan semua *Identifiable* dalam satu *Asset Administration Shell*, $S_i$ adalah submodel ke-$i, N_{SM}$ adalah jumlah total submodel, dan $\mathcal{J}$ adalah indeks seluruh properti/operasi/event dalam submodel.

### 2.2 Kapasitas Kanal dan Throughput Jaringan 5G

Untuk setiap *gNodeB* yang melayani $U$ pengguna pada pita frekuensi $B$ (Hz), kapasitas Shannon menentukan batas atas laju data yang dapat dicapai pada rasio signal-to-interference-plus-noise $\gamma$:

$$
C_u = B_u \cdot \log_2\!\left(1 + \gamma_u\right) \;\;\; \text{[bit/s]}
$$

di mana $B_u$ adalah *bandwidth* yang dialokasikan untuk pengguna $u$, dan $\gamma_u = \dfrac{P_{tx,u} \cdot G_u}{N_0 B_u + \sum_{k \neq u} P_{tx,k} G_k}$. Agregat kapasitas sel menjadi:

$$
C_{\text{cell}} = \sum_{u=1}^{U} B_u \cdot \log_2(1 + \gamma_u)
$$

Cavalieri dkk. (2024) membahas bagaimana nilai $C_{\text{cell}}$ ini menjadi *property* dinamis pada *submodel* `CapacityInformation` dalam AAS dan di-*update* melalui *operation* `UpdateThroughputMetrics`.

### 2.3 Latensi End-to-End untuk URLLC

Salah satu target paling ketat dari 5G NPN adalah latensi *user-plane* satu arah sebesar 1 ms pada skenario *Ultra-Reliable Low-Latency Communication* (URLLC). Latensi total $L_{\text{E2E}}$ dapat didekomposisi menjadi:

$$
L_{\text{E2E}} = L_{\text{TA}} + L_{\text{fiber}} + L_{\text{gNB}} + L_{\text{core}} + L_{\text{transport}} + L_{\text{UE}}
$$

dengan:
- $L_{\text{TA}}$ = *Transmission Time Interval* ($\le 0{,}125$ ms untuk *mini-slot*)
- $L_{\text{fiber}}$ = propagasi *fronthaul/midhaul* ($d/c_{\text{fib}} \approx 5 \mu$s/km)
- $L_{\text{gNB}}$ = antrian *scheduling* dan pemrosesan *baseband unit*
- $L_{\text{core}}$ = *User Plane Function* (UPF) dan *Application Function*
- $L_{\text{UE}}$ = *transcoding* dan *application-layer processing*

Total latensi memenuhi constraint:

$$
L_{\text{E2E}} \le L_{\max}^{\text{URLLC}} = 1 \text{ ms dengan keandalan } 1 - 10^{-5}
$$

### 2.4 Network Slicing sebagai Optimasi Constraint

*Network slice* adalah sumber daya jaringan virtual yang terisolasi secara logis. Formulasi optimasi alokasi sumber daya untuk $Z$ slice pada $K$ pengguna adalah:

$$
\max_{\{x_{k,z}\}} \; \sum_{z=1}^{Z} \sum_{k=1}^{K} w_{k,z} \cdot \log_2\!\left(1 + \gamma_{k,z}\right)
$$

$$
\text{subject to:} \quad \sum_{z=1}^{Z} x_{k,z} \le 1, \quad \sum_{k=1}^{K} B_{k,z} \le B_z^{\max}, \quad L_{k,z} \le L_z^{\text{SLA}}
$$

di mana $x_{k,z} \in \{0,1\}$ adalah keputusan apakah pengguna $k$ dilayani slice $z$, $w_{k,z}$ adalah bobot prioritas, dan $B_z^{\max}$ adalah kapasitas maksimum slice. Cavalieri dkk. (2024) menjelaskan bahwa setiap slice dimodelkan sebagai *submodel* AAS terpisah dengan *property* SLA yang dapat di-*query* via *HTTP RESTful API* spesifikasi AAS Part 2 (API).

### 2.5 Sinkronisasi Digital–Physical Twin

*Digital twin* dari sistem 5G harus mempertahankan kesetiaan (*fidelity*) terhadap entitas fisiknya. Galat status didefinisikan sebagai:

$$
\varepsilon(t) = \left\| \mathbf{x}_{\text{physical}}(t) - \mathbf{x}_{\text{digital}}(t - \tau_{\text{sync}}) \right\|_2
$$

dengan $\tau_{\text{sync}}$ adalah *latency* sinkronisasi. Frekuensi pembaruan state $f_{\text{update}}$ (Hz) harus memenuhi:

$$
f_{\text{update}} \ge \frac{1}{2\pi \tau_{\text{sync}}} \sqrt{\frac{2 P_{\max}}{P_{\text{error}}}}
$$

di mana $P_{\max}$ adalah daya dinamis maksimum proses fisik dan $P_{\text{error}}$ adalah toleransi galat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk jaringan 5G industri mengikuti SOP delapan tahap yang disintesis dari Cavalieri dkk. (2024) dan arsitektur CPS De Marchi, Rojas, Mark (2022):

**Tahap 1 — Identifikasi Aset Fisik.** Lakukan inventarisasi *gNodeB*, antenna, *baseband unit* (BBU), *5G Core* (AMF, SMF, UPF, AUSF, NRF, PCF), dan UE (sensor, aktuator, AGV). Setiap aset diberi *global asset id* sesuai *namespace* AAS: `https://<company>/aas/<asset-type>/<serial>`.

**Tahap 2 — Pemetaan ke Submodel AAS.** Setiap entitas 3GPP dipetakan ke *submodel* sesuai template *Plattform Industrie 4.0*. Contoh yang digunakan Cavalieri dkk.:

| Entitas 3GPP | Submodel AAS | idShort |
|---|---|---|
| gNodeB | Radio Access | `RadioAccess` |
| 5G Core | Core Network | `CoreNetwork` |
| UE | Device Information | `DeviceInformation` |
| Network Slice | Slicing Profile | `SlicingProfile` |
| QoS Flow | QoS Properties | `QoSProperties` |

**Tahap 3 — Penentuan Properti, Kapabilitas, Operasi.** Properti mencakup *throughput*, *latency*, *jitter*, *packet loss*, dan *signal strength*. Operasi mencakup `Read`, `Write`, `Invoke`, `Subscribe`. Kapabilitas (*Capability*) men-*encoding.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
