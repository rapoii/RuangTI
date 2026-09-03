# 2722 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju **Industry 4.0** dan **Society 5.0** menuntut integrasi mendalam antara entitas fisik di lantai pabrik dengan representasi digitalnya secara *real-time*. Dalam konteks ini, *digital twin* bukan sekadar replika virtual statis, melainkan sistem dinamis yang melakukan sinkronisasi dua arah (bidirectional synchronization) antara aset fisik dan model komputasionalnya. Salvatore Cavalieri, Raffaele Di Natale, dan Salvatore Gambadoro (2024), dalam makalah yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), mengusulkan arsitektur *digital twin* berbasis **Asset Administration Shell (AAS)** untuk sistem komunikasi 5G industri. Kontribusi ini sangat relevan karena komunikasi nirkabel generasi kelima (5G) menjadi *backbone* infrastruktur komunikasi pada *smart factory*, khususnya melalui fitur **Ultra-Reliable Low-Latency Communication (URLLC)** dan **enhanced Mobile Broadband (eMBB)** yang didefinisikan oleh 3GPP Release 15 dan Release 16.

Urgensi industrial dari pendekatan ini muncul dari tiga tantangan utama. Pertama, interoperabilitas: menurut standar IEC PAS 63288-1:2024 (turunan dari *Reference Architecture Model Industry 4.0*/RAMI 4.0), setiap aset industri harus memiliki *digital representation* yang dapat dibaca oleh mesin (*machine-readable*) lintas-vendor. Kedua, latensi deterministik: aplikasi *motion control* pada lini produksi membutuhkan latensi end-to-end di bawah 1 ms dengan tingkat reliabilitas 99,999% (5 nine) — parameter yang hanya dapat dipenuhi oleh 5G URLLC. Ketiga, konsumsi energi komunikasi: jaringan sensor nirkabel masif (*massive Machine-Type Communication*/mMTC) menuntut efisiensi energi per bit data yang ditransmisikan, di mana protokol komunikasi tradisional seperti Modbus TCP atau PROFINET tidak dioptimasi untuk skenario ini.

Kontribusi makalah Cavalieri et al. (2024) menjadi penting karena menggabungkan tiga pilar strategis: (i) standarisasi AAS sebagai metadata schema (submodel) untuk mendeskripsikan aset komunikasi 5G; (ii) implementasi protokol komunikasi industri seperti **OPC UA over 5G** untuk transmisi data telemetry; dan (iii) integrasi dengan *edge computing node* guna memenuhi *Key Performance Indicators* (KPI) latensi. Studi pelengkap dari Matteo De Marchi, Rafael Rojas, dan Benedikt Mark (2022) — *Digital Twin Architecture of a Cyber-physical Assembly Transfer System* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) — menunjukkan bahwa arsitektur *digital twin* yang serupa dapat diterapkan pada *cyber-physical assembly transfer system*, di mana *transfer line* terhubung dengan sistem kendali terdistribusi melalui *field bus* dan *wireless gateway*. Kedua makalah ini, meskipun membahas domain aplikasi yang berbeda (jaringan komunikasi vs. lini perakitan), sama-sama mengadopsi paradigma **cyber-physical production system (CPPS)** dengan lapisan *digital twin* sebagai penghubung antara *operational technology* (OT) dan *information technology* (IT). Implikasi ekonominya sangat signifikan: studi McKinsey (2022) memperkirakan penerapan *digital twin* pada lini produksi dapat menurunkan *unplanned downtime* sebesar 30–50% dan meningkatkan *overall equipment effectiveness* (OEE) sebesar 10–25%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS (Asset Administration Shell)

AAS didefinisikan oleh *Plattform Industrie 4.0* sebagai *digital representation* dari sebuah aset, terstruktur dalam dua bagian utama: **AAS shell** (berisi metadata identifikasi dan referensi submodel) dan **submodels** (berisi deskripsi fungsional aset). Secara formal, struktur AAS dapat dimodelkan sebagai tuple:

$$
AAS_i = \langle M_i, S_i, E_i \rangle
$$

di mana $M_i$ adalah himpunan *metadata properties* (misalnya $manufacturer$, $productCode$, $serialNumber$), $S_i = \{s_{i,1}, s_{i,2}, \dots, s_{i,n}\}$ adalah himpunan submodel, dan $E_i$ adalah himpunan *endpoint* protokol komunikasi. Setiap submodel $s_{i,k}$ terdiri dari *submodel elements*:

$$
s_{i,k} = \langle \text{id}, \text{type}, \text{semanticId}, \mathcal{P}_{i,k}, \mathcal{O}_{i,k}, \mathcal{E}_{i,k} \rangle
$$

dengan $\mathcal{P}_{i,k}$ adalah himpunan properti, $\mathcal{O}_{i,k}$ himpunan *operation*, dan $\mathcal{E}_{i,k}$ himpunan *event*. Cavalieri et al. (2024) memanfaatkan fleksibilitas ini untuk merepresentasikan komponen 5G (misalnya *gNodeB*, *User Equipment*/UE, *network slice*) sebagai instans AAS dengan submodel **Identification**, **CapabilityDescription**, dan **CommunicationEndpoint**.

### 2.2 Model Latensi End-to-End 5G

Total latensi end-to-end dari sensor hingga *digital twin* diekspresikan sebagai:

$$
L_{total} = L_{proc} + L_{queue} + L_{tx} + L_{prop} + L_{edge}
$$

dengan $L_{proc}$ (waktu pemrosesan paket di UE dan *application layer*), $L_{queue}$ (waiting time dalam antrian *buffer*), $L_{tx}$ (transmisi udara/air interface), $L_{prop}$ (propagasi sinyal), dan $L_{edge}$ (waktu komputasi di MEC/*Multi-access Edge Computing*). Untuk 5G URLLC pada *subcarrier spacing* 30 kHz dan *mini-slot* sepanjang 2 OFDM simbol:

$$
L_{tx} = \frac{N_{sym}}{f_{sym}} = \frac{2}{120 \times 10^3} \approx 16{,}67~\mu s
$$

di mana $f_{sym} = \Delta f \cdot N_{FFT} / N_{cyc} \approx 120$ kHz untuk numerologi $\mu = 1$. Cavalieri et al. (2024) menunjukkan bahwa latensi holistik untuk *one-way telemetry* dapat ditekan hingga di bawah ambang 1 ms ketika *network slicing* dengan jaminan deterministik diterapkan.

### 2.3 Throughput Agregat Jaringan

Throughput agregat sistem komunikasi untuk sejumlah $N$ perangkat sensor dengan laju sampling $R_s$ (dalam sample/detik) dan ukuran payload $P$ (bit) per pesan adalah:

$$
\Theta = N \cdot R_s \cdot P \cdot \frac{1}{\eta_{pack}}
$$

dengan $\eta_{pack}$ adalah *packing efficiency* (fraksi payload terhadap total *packet overhead*, termasuk header IP, UDP, dan OPC UA). Untuk paket OPC UA Binary dengan *header* 24 byte dan payload 256 byte, $\eta_{pack} \approx 256/280 \approx 0{,}914$. Jika $N = 200$ sensor dengan $R_s = 1$ kHz dan $P = 256$ bit:

$$
\Theta = 200 \times 1000 \times 256 / 0{,}914 \approx 56{,}02~\text{Mbps}
$$

### 2.4 Model Konsumsi Energi pada UE

Konsumsi energi transmisi per bit untuk UE 5G mengikuti model:

$$
E_{tx}(d) = \frac{P_{tx} \cdot \frac{P_{payload}}{R_b}}{N_{bit}} + E_{circ} \cdot \frac{P_{payload}}{N_{bit}}
$$

dengan $P_{tx}$ daya pancar, $R_b$ laju bit (*bit rate*), $E_{circ}$ energi sirkuit, dan $d$ jarak. Cavalieri et al. (2024) menyoroti pentingnya model ini untuk menentukan *battery lifetime* sensor *wireless* yang terhubung ke AAS *gateway*.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi arsitektur yang diusulkan Cavalieri et al. (2024) mengikuti prosedur operasional standar yang dapat diadaptasi di lingkungan manufaktur. Tahapan utamanya adalah:

**Tahap 1 — Pemodelan Aset 5G sebagai AAS.** Setiap komponen jaringan 5G (*gNodeB*, *AMF/SMF/UPF*, *UE*, *network slice*) dimodelkan sebagai instans AAS menggunakan *AASX Package Explorer* atau *BaSyx* SDK. Submodel **CommunicationEndpoint** didefinisikan untuk menyimpan alamat IP, port, dan protokol (HTTP/REST, MQTT, OPC UA). Submodel **CapabilityDescription** mendeskripsikan fitur teknis (bandwidth, *modulation*, latensi tipikal).

**Tahap 2 — Provisioning Infrastruktur 5G Privat.** *Private 5G network* di-deploy menggunakan spektrum lokal (misalnya 3,5 GHz CBRS di AS atau 3,7–3,8 GHz di Jerman) dengan *core* yang di-virtualisasi (5G Core Standalone/SA). *Network slice* khusus dialokasikan untuk aplikasi *digital twin* dengan jaminan **QoS flow** dan *5QI (5G QoS Identifier)* bernilai 82 (untuk URLLC).

**Tahap 3 — Integrasi Edge Computing.** *Multi-access Edge Computing* (MEC) node di-deploy di lokasi pabrik. Aplikasi *digital twin* (misalnya *AAS Server*) berjalan di MEC dengan *publish/subscribe* pattern menggunakan MQTT broker atau OPC UA Pub/Sub.

**Tahap 4 — Registrasi AAS ke *AAS Registry*.** Setiap instans AAS diregistrasikan ke server direktori (BaSyx Registry) yang dapat diakses oleh aplikasi klien (MES, ERP, dashboard monitoring).

**Tahap 5 — Validasi dan Sinkronisasi.** *Round-trip time* (RTT) antara sensor fisik dan *digital twin* diukur. Threshold latensi ditetapkan (misalnya ≤ 50 ms untuk *condition monitoring*, ≤ 1 ms untuk *