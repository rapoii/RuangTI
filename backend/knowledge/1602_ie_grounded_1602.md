# 1602 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Ekosistem Industri Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memperkenalkan konsep *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang memposisikan *Asset Administration Shell* (AAS) sebagai representasi digital standar untuk setiap aset industri (Cavalieri dkk., 2024). Dalam konteks manufaktur modern, integrasi antara *cyber-physical production systems* (CPPS) dan jaringan komunikasi nirkabel generasi kelima (5G) menjadi tulang punggung bagi otomasi real-time, kontrol gerak presisi, serta interoperabilitas lintas-pabrik. Permasalahan fundamental yang diangkat oleh Cavalieri dkk. (2024) adalah ketiadaan model digital yang terstandarisasi untuk elemen-elemen jaringan 5G itu sendiri—padahal komunikasi 5G merupakan *enabler* kritis bagi aplikasi seperti *cooperative robotics*, *autonomous mobile robots* (AMR), *augmented reality* untuk pemeliharaan, dan kontrol mesin *closed-loop* dengan latensi di bawah satu milidetik.

Urgensi ekonomis dan teknis dari digitalisasi infrastruktur komunikasi dapat dijelaskan melalui tiga vektor. Pertama, biaya *downtime* lini produksi modern dapat mencapai 25.000–250.000 USD per jam pada industri semikonduktor dan otomotif, sehingga kegagalan *handover* 5G atau degradasi kualitas sinyal (yang sering luput dari diagnosa karena minimnya instrumentasi) menjadi risiko operasional yang signifikan. Kedua, standarisasi melalui AAS memungkinkan integrasi *plug-and-play* lintas-vendor sesuai dengan spesifikasi *Details of the Asset Administration Shell* (DIN SPEC 91345 dan seri IEC 63278). Ketiga, akselerasi adopsi *private 5G networks* di lingkungan manufaktur—diproyeksikan mencapai 30% dari seluruh deployment 5G industri pada 2027—menuntut ketersediaan *digital twin* 5G sebagai bagian dari *twin* sistem produksi (Cavalieri dkk., 2024; De Marchi dkk., 2022).

Studi pelengkap oleh De Marchi, Rojas, dan Mark (2022) menyoroti arsitektur *digital twin* untuk sistem transfer perakitan siber-fisik, yang secara inheren memerlukan komunikasi deterministik latensi rendah—kondisi yang hanya dapat dipenuhi oleh 5G dengan *Time-Sensitive Networking* (TSN) atau *Ultra-Reliable Low-Latency Communication* (URLLC). Dengan memodelkan *gNodeB*, *User Equipment* (UI), *core network* (5GC), dan *Quality of Service* (QoS) flow sebagai *submodels* AAS, Cavalieri dkk. (2024) menyediakan cetak biru bagi insinyur industri untuk melakukan *root cause analysis*, *predictive maintenance*, dan *what-if simulation* terhadap infrastruktur telekomunikasi yang menopang lini produksi. Pendekatan ini secara langsung menjawab tantangan interoperabilitas yang sebelumnya menghambat adopsi luas 5G di lantai pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model AAS dan Submodel 5G

AAS direpresentasikan sebagai struktur data hierarkis yang terdiri atas *Submodel* (S), *SubmodelElement* (SE), dan *Property* (P). Untuk jaringan 5G, Cavalieri dkk. (2024) mengusulkan pemetaan elemen-elemen berikut ke dalam submodel AAS:

$$
\text{AAS}_{5G} = \bigcup_{i=1}^{N} S_i, \quad S_i \subseteq \{S_{\text{gNB}}, S_{\text{UE}}, S_{\text{5GC}}, S_{\text{QoS}}, S_{\text{Slice}}\}
$$

di mana $N$ adalah jumlah submodel yang merepresentasikan komponen fisik dan logis jaringan. Setiap submodel memiliki *capability* dan *property* yang dapat diakses melalui *AAS Interface* berbasis HTTP/HTTPS atau OPC UA, sesuai standar *Asset Administration Shell – Part 2: Role of the digital twin and interoperability* (Industrial Digital Twin Association, 2023).

### 2.2 Model Kapasitas Kanal 5G (Shannon-Hartley)

Untuk submodel kualitas sinyal, kapasitas kanal 5G *New Radio* (NR) pada arah downlink dapat dimodelkan dengan persamaan Shannon-Hartley:

$$
C = B \cdot \log_2\left(1 + \frac{S}{N}\right)
$$

dengan $C$ kapasitas kanal (bps), $B$ bandwidth kanal (Hz), $S$ daya sinyal (W), dan $N$ daya derau (W). Pada *numerology* 5G NR dengan *subcarrier spacing* (SCS) $\Delta f = 30$ kHz, *slot duration* didefinisikan sebagai:

$$
T_{\text{slot}} = \frac{1}{2^{\mu}} \cdot 10^{-3} \text{ detik}, \quad \mu \in \{0,1,2,3,4\}
$$

di mana $\mu$ adalah *numerology index* (0 untuk 15 kHz, 1 untuk 30 kHz, dst.). Pada $\mu = 1$, $T_{\text{slot}} = 0{,}5$ ms, memungkinkan *transmission time interval* (TTI) yang sesuai untuk aplikasi URLLC dengan target latensi end-to-end sebesar 1 ms.

### 2.3 Model Latensi End-to-End

Latensi total komunikasi URLLC dapat diformulasikan sebagai:

$$
L_{\text{e2e}} = L_{\text{TX}} + L_{\text{prop}} + L_{\text{queue}} + L_{\text{proc}} + L_{\text{retx}}
$$

di mana $L_{\text{TX}}$ adalah latensi transmisi, $L_{\text{prop}}$ latensi propagasi, $L_{\text{queue}}$ latensi antrian pada *scheduler*, $L_{\text{proc}}$ latensi pemrosesan pada *gNodeB* dan *User Equipment Function* (UEF), serta $L_{\text{retx}}$ latensi *retransmission* pada Hybrid Automatic Repeat Request (HARQ). Dengan $L_{\text{retx}} = 0$ untuk transmisi berhasil pada *slot* pertama, target $L_{\text{e2e}} \leq 1$ ms mensyaratkan desain *mini-slot* dengan alokasi sumber daya 2–4 OFDM simbol, bukan satu *slot* penuh.

### 2.4 Model Diskret *Digital Twin* untuk Simulasi Jaringan

*Digital twin* AAS mengadopsi persamaan ruang-keadaan diskret untuk sinkronisasi status aset fisik:

$$
\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k
$$

$$
\mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k
$$

dengan $\mathbf{x}_k \in \mathbb{R}^n$ vektor status (misalnya daya transmisi, jumlah UE aktif, *buffer status*), $\mathbf{u}_k$ vektor *input* kontrol (alokasi *resource block*, *modulation and coding scheme*), $\mathbf{w}_k \sim \mathcal{N}(0, \mathbf{Q})$ dan $\mathbf{v}_k \sim \mathcal{N}(0, \mathbf{R})$ masing-masing merupakan derau proses dan derau pengukuran. Matriks $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$ dikalibrasi dari data historis menggunakan algoritma *Kalman Filter* atau *Extended Kalman Filter* untuk *state estimation* (Cavalieri dkk., 2024).

### 2.5 Model Keandalan URLLC

Keandalan komunikasi pada URLLC didefinisikan sebagai probabilitas keberhasilan transmisi paket dalam ukuran tertentu:

$$
R = \mathbb{P}(L_{\text{e2e}} \leq L_{\text{target}} \land \text{PER} \leq 10^{-5})
$$

dengan PER adalah *Packet Error Rate*. Target industri adalah $R = 1 - 10^{-5}$ untuk *reliability* 99,999% selama periode observasi 1 ms hingga 10 ms.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Berlapis

Implementasi AAS Digital Twin untuk jaringan komunikasi 5G mengikuti arsitektur empat lapis yang diadopsi dari De Marchi dkk. (2022) untuk sistem transfer perakitan:

| Lapis | Komponen | Fungsi |
|---|---|---|
| **Lapisan Aset (Field)** | *gNodeB*, UE, sensor, aktuator | Akuisisi data dan eksekusi fisik |
| **Lapisan Edge** | AAS Server lokal, OPC UA Server, *edge controller* | Agregasi data, *pre-processing*, protokol *southbound* |
| **Lapisan Platform** | AAS Repository, *twin engine*, *Kalman filter*, simulator | Orkestrasi *digital twin*, *state synchronization*, analitik |
| **Lapisan Aplikasi** | Dashboard operator, API industri, *MES/ERP integration* | Visualisasi, *predictive maintenance*, kontrol keputusan |

### 3.2 SOP Implementasi AAS Digital Twin 5G

Prosedur operasional standar yang diturunkan dari Cavalieri dkk. (2024) dan De Marchi dkk. (2022):

1. **Identifikasi Aset Jaringan (Fase 1):** Invent