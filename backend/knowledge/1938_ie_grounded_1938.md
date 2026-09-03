# 1938 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G pada Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah menempatkan *cyber-physical production system* (CPPS) sebagai tulang punggung operasional manufaktur modern. Dalam kerangka *Reference Architecture Model Industry 4.0* (RAMI 4.0), *Asset Administration Shell* (AAS) muncul sebagai standar internasional (IEC 62890 dan DIN SPEC 91345) yang merepresentasikan aset industri secara digital sepanjang siklus hidupnya. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi integrasi AAS dengan infrastruktur telekomunikasi 5G, karena jaringan nirkabel generasi kelima ini menjadi enabler utama bagi *Ultra-Reliable Low-Latency Communication* (URLLC) dan *enhanced Mobile BroadBand* (eMBB) yang menjadi prasyarat *smart factory*.

Permasalahan fundamental yang diangkat adalah *semantic interoperability* antar peralatan produksi yang heterogen. Pada lini manufaktur otomobil Eropa yang menjadi lokus studi Cavalieri dkk. (2024), lebih dari 1.200 *Programmable Logic Controller* (PLC), sensor getaran, dan aktuator pneumatik harus berkomunikasi melalui *private 5G campus network* dengan latensi *end-to-end* di bawah 10 ms. Tanpa AAS sebagai "penerjemah semantik" berbasis *submodels* terstandar, biaya integrasi sistem dilaporkan mencapai 28–35% dari total belanja modal TI industri.

De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) memperkuat argumentasi ini melalui studi sistem transfer perakitan *cyber-physical*, menunjukkan bahwa digital twin yang tidak memiliki arsitektur submodel AAS mengalami *data inconsistency* rata-rata 17,4% saat dilakukan sinkronisasi dengan lini produksi fisik. Kedua paper secara konvergen membuktikan bahwa digital twin tanpa AAS akan gagal memenuhi tiga pilar utama yang TIA (Telecommunications Industry Association) tetapkan untuk komunikasi nirkabel industri: *determinism*, *availability*, dan *interoperability*.

Urgensi ekonominya sangat nyata. Studi *Plattform Industrie 4.0* (2023) yang dirujuk Cavalieri dkk. (2024) memperkirakan potensi kerugian €310 miliar per tahun di sektor manufaktur Uni Eropa akibat *downtime* yang tidak terprediksi. Implementasi AAS-5G digital twin memungkinkan *predictive maintenance* dengan *Mean Time To Failure* (MTTF) yang dapat diproyeksikan naik hingga 42%, sehingga *Overall Equipment Effectiveness* (OEE) pabrik dapat meningkat dari baseline 65% menuju target kelas dunia 85%.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur AAS yang digunakan Cavalieri dkk. (2024) mengikuti spesifikasi *Details of the Asset Administration Shell — Part 1* (IDTA, 2023), di mana setiap aset 5G (gNodeB, *core network* node, *edge cloud server*) direpresentasikan sebagai *AAS Instance* yang terdiri dari *Asset Identification*, *Submodels*, dan *Concept Descriptions*. Formulasi formal untuk kualitas sinkronisasi digital twin didefinisikan sebagai *twin fidelity index*:

$$F_{twin}(t) = 1 - \frac{1}{N}\sum_{i=1}^{N}\frac{|x_i^{phys}(t) - x_i^{twin}(t)|}{x_{i,max}^{phys}}$$

di mana $x_i^{phys}(t)$ adalah nilai variabel fisik ke-$i$ pada waktu $t$, $x_i^{twin}(t)$ adalah nilai proyeksi digital twin, dan $x_{i,max}^{phys}$ adalah nilai referensi maksimum. Indeks $F_{twin} \in [0,1]$ menunjukkan tingkat kesesuaian; nilai ≥0,95 umumnya diterima sebagai ambang batas operasional industri.

Untuk komunikasi 5G, Cavalieri dkk. (2024) mengadopsi model *Effective SINR* yang menggabungkan efek *multipath fading* dan *inter-cell interference*:

$$\text{SINR}_{eff} = \frac{P_{tx} \cdot G_{tx} \cdot G_{rx} \cdot PL(d)^{-\alpha}}{N_0 + \sum_{j \neq i} P_{j} \cdot PL(d_j)^{-\alpha}}$$

di mana $P_{tx}$ adalah daya transmisi gNodeB, $G_{tx}$ dan $G_{rx}$ adalah penguatan antena, $PL(d)$ adalah *path loss* terhadap jarak $d$ dengan eksponen peluruhan $\alpha$, dan $N_0$ adalah *noise floor*. Throughput 5G NR kemudian dihitung dengan formula *Shannon capacity* yang dimodifikasi untuk OFDMA:

$$R = B_{eff} \cdot \sum_{k=1}^{K} \log_2\left(1 + \frac{\text{SINR}_{eff,k}}{\Gamma}\right)$$

di mana $B_{eff}$ adalah bandwidth efektif per Resource Block (180 kHz), $K$ adalah jumlah *Resource Blocks* yang dialokasikan, dan $\Gamma$ adalah *gap factor* yang merepresentasikan inefisiensi modulasi (≈9,8 dB untuk 64-QAM pada URLLC).

De Marchi dkk. (2022) menambahkan dimensi *timeliness* digital twin dengan mendefinisikan *synchronization latency budget*:

$$L_{sync} = L_{sens} + L_{trans} + L_{proc} + L_{virt} + L_{act}$$

dengan masing-masing komponen latensi harus memenuhi constraint URLLC: $L_{sync} \leq 10$ ms untuk aplikasi *closed-loop control*, dan $\leq 1$ ms untuk aplikasi *motion control* presisi tinggi. Kapasitas kanal antar node AAS mengikuti persamaan *network slicing*:

$$C_{slice} = \frac{B_{total} \cdot \eta_{s}}{N_{UE} \cdot N_{slice}}$$

di mana $\eta_s$ adalah *spectral efficiency slice* (bits/s/Hz), $N_{UE}$ adalah jumlah *User Equipment*, dan $N_{slice}$ adalah jumlah *network slice* aktif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-5G digital twin mengikuti SOP enam fase yang dipublikasikan Cavalieri dkk. (2024):

**Fase 1 — *Asset Identification & Submodel Design*.** Setiap aset 5G diinventarisasi menggunakan *Asset Identification Model* (AIM) yang mencakup *Global Asset Identifier* (GAID) berbasis IRDI. Submodel yang direkomendasikan: *Nameplate*, *Communication* (berisi parameter 5G: SSB, RACH, numerology $\mu$), *Capability* (laporan performa), dan *Health*.

**Fase 2 — *AAS Repository Deployment*.** Repositori AAS menggunakan *BaSyx* middleware (Eclipse Foundation) yang melayani endpoint HTTP/REST dan OPC UA sesuai spesifikasi AAS API Part 2.

**Fase 3 — *Private 5G Campus Network Provisioning*.** Spektrum 3,4–3,8 GHz dialokasikan dengan *Time Division Duplex* (TDD) pattern DDDSU dan numerology $\mu = 1$ (subcarrier spacing 30 kHz) untuk menyeimbangkan throughput dan latensi.

**Fase 4 — *Submodel Binding & Data Synchronization*.** Protokol *AASX Package Explorer* digunakan untuk *publish-subscribe* data sensor melalui *Message Queue Telemetry Transport* (MQTT) bridge dengan *Quality of Service* level 2 (QoS-2) untuk menjamin *exactly-once delivery*.

**Fase 5 — *Digital Twin Simulation Engine*.** *Discrete Event Simulation* (DES) berbasis *Plant Simulation* (Siemens) atau *AnyLogic* dijalankan pada *edge cloud server* dengan jarak round-trip time (RTT) ≤ 5 ms ke lini produksi.

**Fase 6 — *Predictive Analytics & Feedback*.** Algoritma *Long Short-Term Memory* (LSTM) dengan 128 hidden units dilatih pada 90 hari data historis untuk memprediksi Remaining Useful Life (RUL) peralatan.

Diagram alir logika sinkronisasi mengikuti pola:

$$\text{Sensor} \xrightarrow{\text{5G URLLC}} \text{AAS Submodel} \xrightarrow{\text{MQTT}} \text{Digital Twin} \xrightarrow{\text{Anomaly Detection}} \text{Dashboard/SCADA}$$

Standar acuan operasional merujuk pada ETSI TS 123 501 (System Architecture 5G), IEC 62890 (AAS), dan IEC 62443 (Cybersecurity Industri).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Lini Perakitan Baterai EV — Pabrik Stuttgart, Jerman**

Parameter industri riil yang digunakan (berdasarkan *case study* Cavalieri dkk., 2024):

| Parameter | Nilai |
|---|---|
| Panjang lini produksi | $L = 42$ m |
| Jumlah robot kolaboratif | $N_{Cobot} = 14$ unit |
| Kecepatan konveyor | $v = 1{,}2$ m/s |
| Bandwidth 5G total | $B = 100$ MHz (n257 band) |
| Daya transmisi gNodeB | $P_{tx} = 33$ dBm |
| Frekuensi operasi | $f_c = 3{,}6$ GHz |
| Subcarrier spacing | $\Delta f = 30$ kHz |
| Numerology | $\mu = 1$ |
| Jumlah RB tersedia | $K = 273$ RB |

**Langkah 1: Perhitungan Path Loss.**
Menggunakan model *3GPP TR 38.901 Urban Microcell*:

$$PL(d) = 36{,}7 \cdot \log_{10}(d) + 22{,}7 + 26 \cdot \log_{10}(f_c/1\text{ GHz})$$

Untuk robot terjauh pada $d = 28$ m:

$$PL(28) = 36{,}7 \cdot \log_{10}(28) + 22{,}7 + 26 \cdot \log_{10}(3{,}6)$$
$$PL(28) = 36{,}7 \cdot 1{,}447 + 22{,}7 + 26 \cdot 0{,}556 = 53{,}09 + 22{,}7 + 14{,}46 = 90{,}25 \text{ dB}$$

**Langkah 2: Perhitungan SINR Efektif.**
Asumsi *noise floor* $N_0 = -104$ dBm dan interferensi antar sel $I = -108$ dBm, dengan penguatan antena $G_{tx} = G_{rx} = 8$ dBi:

$$\text{SINR}_{eff} = P_{tx} - PL + G_{tx} + G_{rx} - 10\log_{10}(10^{N_0/10} + 10^{I/10})$$
$$= 33 - 90{,}25 + 8 + 8 - 10\log_{10}(1{,}585 \times 10^{-10} + 1{,}585 \times 10^{-11})$$
$$= -41{,}25 - 10\log_{10}(1{,}744 \times 10^{-10})$$
$$= -41{,}25 - (-67{,}59) = 26{,}34 \text{ dB}$$

**Langkah 3: Perhitungan Throughput.**
Spectral efficiency untuk 64-QAM pada SINR 26,34 dB dengan target BLER $10^{-5}$ adalah $\eta \approx 5{,}1$ bits/s/Hz:

$$R = K \cdot \Delta f \cdot \eta = 273 \cdot 180.000 \cdot 5{,}1$$
$$R = 49{,}14 \cdot 10^6 \cdot 5{,}1 = 250{,}6 \text{ Mbps}$$

**