# 2482 — Integrasi Asset Administration Shell dan Digital Twin untuk Sistem Komunikasi 5G pada Ekosistem Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik telah bergeser dari sekadar *Computer-Integrated Manufacturing* (CIM) menuju paradigma **Sistem Cyber-Fisik** (*Cyber-Physical Production Systems*/CPPS) yang menuntut interoperabilitas semantik antar aset, mesin, dan sistem informasi perusahaan. Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper *"Asset Administration Shell Digital Twin of 5G Communication System"* yang dipublikasikan pada proceedings ICINTO 2024 (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menegaskan bahwa standar **Asset Administration Shell (AAS)** yang dicanangkan oleh Plattform Industrie 4.0 kini menjadi *lingua franca* untuk merepresentasikan aset industri secara digital. AAS memungkinkan setiap mesin — mulai dari *Programmable Logic Controller* (PLC), *Human-Machine Interface* (HMI), hingga *Automated Guided Vehicle* (AGV) — memiliki "paspor digital" yang dapat dibaca lintas vendor, lintas protokol, dan lintas lapisan *Information Technology/Operational Technology* (IT/OT).

Urgensi ekonomi dari adopsi AAS-digital twin terletak pada tiga pilar. Pertama, **penghematan biaya *commissioning*** yang menurut studi-studi German Plattform dapat memangkas durasi *ramp-up* lini produksi hingga 30–50% karena dokumen, parameter kalibrasi, dan diagram *Program Organization Logic* (PLC) terdistribusi secara otomatis. Kedua, **peningkatan *Overall Equipment Effectiveness* (OEE)** melalui prediksi degradasi mesin menggunakan *digital twin* yang disinkronkan secara real-time dengan sensor fisik; estimasi industri menunjukkan potensi kenaikan OEE dari 60% menjadi di atas 85% pada lini *brownfield*. Ketiga, **ketangkasan rantai pasok** karena interoperabilitas AAS memungkinkan *plug-and-produce* antar fasilitas lintas benua tanpa rekayasa ulang integrasi.

Konteks teknis tak terlepas dari proliferasi **5G New Radio (5G NR)** dengan kapabilitas *Ultra-Reliable Low-Latency Communication* (URLLC) yang menjanjikan latensi *user-plane* hingga $\leq 1$ ms pada rilis Release 16/17 3GPP, menjadikannya kandidat utama *backhaul* nirkabel untuk CPPS yang sebelumnya mengandalkan kabel *Industrial Ethernet* (PROFINET, EtherCAT). Namun, paper ICINCO 2024 tersebut menyoroti jurang riset: bagaimana AAS dapat secara *native* merepresentasikan bukan hanya aset fisik, melainkan juga **infrastruktur 5G itu sendiri** — *gNodeB*, *User Plane Function* (UPF), *Session Management Function* (SMF), dan *Quality of Service* (QoS) flows — sebagai entitas industri kelas satu. Tanpa representasi semantik tersebut, kualitas jaringan nirkabel menjadi *blind spot* bagi *Manufacturing Execution System* (MES), sehingga degradasi latensi tak terdeteksi sebelum produk *reject* muncul.

Pendukung dari paper De Marchi, Rojas, dan Mark (2022) — *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) — melengkapi narasi dengan menunjukkan bagaimana *digital twin* pada sistem *transfer* perakitan (konveyor, *shuttle*, *rotary table*) membutuhkan tiga lapis: (i) *physical asset layer* dengan sensor dan aktuator, (ii) *communication layer* yang menjamin determinisme waktu, dan (iii) *service layer* yang mengekspos kapabilitas ke MES/ERP. Kedua paper secara simultan menggarisbawahi bahwa 5G dan AAS bukan孤立的 teknologi, melainkan **saling-konstitutif**: AAS menyediakan *semantic interoperability*, sementara 5G menyediakan *temporal interoperability* yang presisi.

Konteks regulasi juga relevan. Inisiatif **GAIA-X** dan **Catena-X** di Eropa telah mengadopsi AAS sebagai fondasi *data space* manufaktur, sementara di Asia, program *Smart Manufacturing Innovation* Korea dan *Made in China 2025* menggunakan subspesifikasi AAS untuk *Industrial Internet*. Dengan demikian, modul ini bukan sekadar wacana, melainkan kompetensi rekayasa yang diminta oleh *tier-1 supplier* global seperti Bosch, Siemens, ABB, dan Foxconn.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS dan Struktur Submodel

AAS mengikuti standar **IEC 63278 (PAS)** dan **Plattform Industrie 4.0 Reference Architecture Model (RAMI 4.0)**. Secara formal, sebuah AAS direpresentasikan sebagai *tuple*:

$$\text{AAS} = \langle \text{ID}_{aas}, \mathcal{S}, \mathcal{P}_{meta}, \mathcal{R}_{ext} \rangle$$

di mana $\text{ID}_{aas}$ adalah *globally unique identifier* (mengikuti ISO 29002-5), $\mathcal{S} = \{s_1, s_2, \ldots, s_n\}$ adalah himpunan *submodel*, $\mathcal{P}_{meta}$ adalah *metadata* (misalnya *manufacturerName*, *productType*), dan $\mathcal{R}_{ext}$ adalah relasi eksternal (misalnya *Bill of Material*, *componentOf*).

Setiap submodel $s_i$ memiliki struktur:

$$s_i = \langle \text{ID}_{sm}, \text{IDT}_{sm}, \{e_k\}, \mathcal{C}_{sm} \rangle$$

dengan $\{e_k\}$ adalah *submodel element* (properti, operasi, atau event), dan $\mathcal{C}_{sm}$ adalah *capability* yang mengekspos fungsi. Paper Cavalieri et al. (2024) memperkenalkan submodel baru yang disebut **`CommunicationSubmodel`** untuk 5G, dengan elemen-elemen kritis: `BandwidthProfile`, `LatencyBudget`, `SliceID`, `QoSClass`, `UERadioCapability`, dan `PDUSessionInfo`.

### 2.2 Model Latensi End-to-End pada Jaringan 5G URLLC

Untuk menjamin QoS industri, latensi *end-to-end* harus dimodelkan sebagai konvolusi empat komponen utama:

$$L_{e2e} = L_{air} + L_{transport} + L_{core} + L_{edge}$$

dengan:
- $L_{air}$ = latensi *over-the-air* 5G NR (tergantung numerologi $\mu$, *subcarrier spacing* $\Delta f = 2^\mu \cdot 15$ kHz),
- $L_{transport}$ = latensi *F1/Uu/Xn* interface,
- $L_{core}$ = latensi *User Plane Function* (UPF) di 5GC,
- $L_{edge}$ = latensi aplikasi pada *Multi-access Edge Computing* (MEC).

Parameterisasi $L_{air}$ untuk URLLC mengikuti:

$$L_{air} = N_{TTI} \cdot T_{slot} + T_{proc}$$

dengan $T_{slot} = 1/(\Delta f \cdot 14) = 1/(2^\mu \cdot 210)\ \text{ms}$ (untuk *normal CP*), $N_{TTI}$ adalah jumlah *transmission time interval*, dan $T_{proc}$ adalah waktu pemrosesan UE/gNB.

**Contoh numerik (konsisten dengan 3GPP TS 38.214):** Untuk $\mu = 3$ ($\Delta f = 120$ kHz), $T_{slot} = 1/(120\text{kHz} \cdot 14) \approx 0.596\ \mu s$. Dengan *mini-slot* 2-OFDM-sym, $T_{TTI} = 2 \cdot T_{slot} \approx 0.125$ ms. Tambahkan $T_{proc}^{UE} \approx 0.5$ ms (untuk decoding capability 1), sehingga:

$$L_{air} \approx 0.125 + 0.5 = 0.625\ \text{ms}$$

### 2.3 Model Keandalan URLLC

Untuk aplikasi *motion control*, keandalan paket harus memenuhi $1 - 10^{-5}$ pada latensi 1 ms (3GPP TR 38.824). Probabilitas keberhasilan transmisi:

$$P_{success} = \prod_{i=1}^{n_{retx}} (1 - \text{BLER}_i)$$

di mana $\text{BLER}_i$ adalah *Block Error Rate* pada transmisi ke-$i$, dan $n_{retx}$ adalah jumlah *retransmission* yang diizinkan. Dengan HARQ *incremental redundancy*:

$$\text{SINR}_{\text{eff}} = \text{SINR} + 10 \log_{10}(n_{retx})$$

dan *outage probability* didekati sebagai:

$$P_{out} = Q\!\left(\frac{\text{SINR}_{\text{th}} - \text{SINR}_{\text{eff}}}{\sigma_{\text{shadow}}}\right)$$

dengan $Q(\cdot)$ adalah Q-function Gaussian.

### 2.4 Model Sinkronisasi Digital Twin

*Digital twin* dari sebuah aset AAS mempertahankan **model status** $\mathbf{x}_k \in \mathbb{R}^n$ pada waktu diskrit $k$, dengan persamaan keadaan:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k$$
$$\mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k$$

di mana $\mathbf{A} \in \mathbb{R}^{n\times n}$ adalah matriks transisi, $\mathbf{B}$ adalah matriks input, $\mathbf{w}_k \sim \mathcal{N}(0, \mathbf{Q})$ adalah *process noise*, dan $\mathbf{v}_k \sim \mathcal{N}(0, \mathbf{R})$ adalah *measurement noise*. Estimasi optimal menggunakan **Kalman Filter**:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k(\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1})$$

dengan *Kalman gain*:

$$\mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{C}^\top(\mathbf{C}\mathbf{P}_{k|k-1}\mathbf{C}^\top + \mathbf{R})^{-1}$$

*Update covariance*:

$$\mathbf{P}_{k|k} = (\mathbf{I} - \mathbf{K}_k\mathbf{C})\mathbf{P}_{k|k-1}$$

Paper De Marchi, Rojas, dan Mark (2022) menekankan bahwa pada sistem *transfer* perakitan berkecepatan tinggi, periode sampling $T_s$ harus memenuhi:

$$T_s \leq \frac{\pi}{2\omega_{n,closed}}$$

agar filter Kalman tetap *observable* dan stabil (di mana $\omega_{n,closed}$ adalah frekuensi natural *closed-loop* dari sistem mekanis).

### 2.5 Model Network Slicing 5G untuk AAS

5G NR mendukung *network slicing* dengan alokasi sumber daya dedicated. Model alokasi *bandwidth*:

$$B_{slice}^{(j)} = \alpha_j \cdot B_{total}, \quad \sum_{j=1}^{m} \alpha_j = 1, \quad \alpha_j \geq 0$$

d