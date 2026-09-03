# 2210 — Asset Administration Shell sebagai Kerangka Digital Twin Sistem Komunikasi 5G untuk Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lini manufaktur menuju Industri 4.0 mensyaratkan integrasi fisik-siber yang real-time, deterministik, dan interoperabel. Komunikasi nirkabel generasi kelima (5G) muncul sebagai enabler strategis karena tiga pilar layanan yang ditawarkannya, yaitu *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC), masing-masing menjawab kebutuhan bandwidth tinggi, latensi rendah di bawah 1 ms, dan konektivitas jutaan perangkat per km² (Cavalieri et al., 2024). Namun, di tingkat operasional, perusahaan manufaktur menghadapi fragmentasi heterogenitas: perangkat 5G (*gNodeB*, *User Equipment*, *User Plane Function*) diproduksi oleh vendor berbeda dengan format data proprietary, menciptakan *data silo* yang menghambat visibilitas lintas-pabrik dan prediksi kinerja jaringan.

Dalam konteks inilah Asset Administration Shell (AAS) — standar dari Plattform Industrie 4.0 yang kini dipublikasikan sebagai IEC 63278 / DIN SPEC 91345 — menyediakan cetak biru semantik untuk merepresentasikan aset industri secara vendor-netral. Cavalieri, Di Natale, dan Gambadoro (2024) dalam prosiding ICINCO 2024 memperkenalkan pendekatan AAS Digital Twin untuk sistem komunikasi 5G, menjawab迫切nya kebutuhan akan interoperabilitas horizontal dan vertikal di *factory floor*. Karya ini secara eksplisit menjembatani kesenjangan antara rekayasa telekomunikasi dan rekayasa sistem industri, sebuah masalah yang juga disoroti oleh De Marchi, Rojas, dan Mark (2022) pada sistem *assembly transfer* siber-fisik, di mana *digital twin* diperlukan untuk sinkronisasi state antara *conveyor*, *robot*, dan sistem kendali.

Urgensi ekonomis penelitian ini tecermin dari data empiris: menurut studi yang dirujuk Cavalieri et al. (2024), downtime jaringan komunikasi di pabrik pintar menyebabkan kerugian produksi rata-rata €22.000–€80.000 per jam tergantung sektor. Tanpa representasi digital twin yang terstandarisasi, operator tidak dapat melakukan *root-cause analysis* secara cepat ketika degradasi Key Performance Indicator (KPI) 5G terjadi. Lebih jauh, inisiatif *Industrie 4.0* Jerman dan *Industrial Digital Twin Association* telah merilis lebih dari 50 *Submodel Template* (misalnya *Nameplate*, *Capability*, *Bill of Material*), tetapi hingga 2024 belum tersedia *template* spesifik untuk elemen jaringan 5G — sebuah *gap* yang secara langsung diisi oleh paper Cavalieri et al. (2024) dengan memperkenalkan Submodel *CommunicationProfile*, *NetworkSlice*, dan *QualityOfServiceMonitoring*.

Kontribusi saintifik paper ini bersifat tiga-lapis: (i) definisi formal elemen AAS untuk *gNodeB*, *Access and Mobility Management Function* (AMF), *Session Management Function* (SMF), dan *User Plane Function* (UPF); (ii) metodologi *real-time binding* antara data sensor jaringan 5G dan properti AAS menggunakan protokol OPC UA over HTTP/MQTT; dan (iii) studi kelayakan pada *testbed* industri. Bagi insinyur industri, signifikansi praktis karya ini adalah kemampuan melakukan *what-if analysis* terhadap konfigurasi *network slicing*, memprediksi dampak perubahan parameter radio terhadap throughput, serta menyediakan antarmuka tunggal untuk integrasi dengan Manufacturing Execution System (MES) dan Enterprise Resource Planning (ERP).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell

AAS didefinisikan sebagai representasi digital formal dari satu atau lebih aset yang terdiri dari *Property* (atribut status), *Operation* (fungsi yang dapat dipanggil), *Event* (notifikasi asynchronous), dan *Submodel* (pengelompokan semantik). Struktur hierarkis ini dapat diformulasikan sebagai tuple:

$$\text{AAS} = \langle \text{Asset}, \text{Submodel}_1, \ldots, \text{Submodel}_n, \text{ConceptDescription}_k \rangle$$

dengan setiap *Submodel*$j$ memiliki himpunan elemen $E_j = \{e_1, e_2, \ldots, e_m\}$ di mana $e_i \in \{\text{Property}, \text{Operation}, \text{Event}, \text{ReferenceElement}\}$. Pendekatan ini menjamin komposabilitas horizontal antar-vendor (Cavalieri et al., 2024).

### 2.2 Kapasitas Kanal 5G dan Shannon-Hartley

Untuk *gNodeB* yang beroperasi pada *bandwidth* $B$ (Hz) dengan Signal-to-Noise Ratio $\text{SNR} = P_s / P_n$, kapasitas kanal teoretis menurut Shannon-Hartley adalah:

$$C = B \cdot \log_2(1 + \text{SNR}) \quad [\text{bit/s}]$$

dengan utilisasi efektif $\eta = C_{\text{real}}/C_{\text{Shannon}}$ yang pada 5G NR mendekati 0.85 untuk *modulation and coding scheme* (MCS) orde tinggi (256-QAM). Cavalieri et al. (2024) merepresentasikan throughput *downlink* agregat sebagai properti AAS *throughputDL* dengan satuan Mbps.

### 2.3 Budget Latensi URLLC

Untuk aplikasi industri kritis (misalnya *closed-loop motion control*), target latensi satu-arah URLLC adalah $T_{target} \leq 1$ ms. Budget latensi didekomposisi:

$$T_{total} = T_{UE} + T_{access} + T_{core} + T_{transport} + T_{application}$$

dengan tipikal nilai industri: $T_{UE} = 0.1$ ms (pemrosesan *buffer*), $T_{access} = 0.2$ ms (OFDM simbol + scheduling), $T_{core} = 0.3$ ms (5GC *User Plane*), $T_{transport} = 0.2$ ms (fiber), $T_{application} = 0.2$ ms (PLC/MES). Total $T_{total} = 1.0$ ms harus dipenuhi dengan *reliability* $1 - 10^{-5}$ (5-nine), sesuai target 3GPP TS 22.261 yang diadopsi oleh paper Cavalieri et al. (2024).

### 2.4 Model Reliabilitas dan Block Error Rate

Probabilitas sukses transmisi paket dalam slot durasi $T_{slot} = 0.125$ ms mengikuti:

$$R_{succ} = (1 - \text{BLER})^{N_{slots}}$$

untuk paket yang menempati $N_{slots}$ slot. Target URLLC menetapkan $\text{BLER}_{target} = 10^{-5}$, sehingga paket 4-slots menghasilkan $R_{succ} = (1 - 10^{-5})^4 \approx 0.99996$.

### 2.5 Network Slicing sebagai Optimasi Sumber Daya

*Network slicing* memungkinkan partisi logis jaringan 5G. Formulasi alokasi sumber daya spektral untuk $k$ slice:

$$\sum_{i=1}^{k} \alpha_i \cdot R_{total} = R_{total}, \quad 0 \leq \alpha_i \leq 1
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
