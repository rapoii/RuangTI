# 2658 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dewasa ini tidak lagi sekadar persoalan otomasi berbasis programmable logic controller (PLC) dan supervisory control and data acquisition (SCADA), melainkan telah bergeser ke paradigma *cyber-physical production system* (CPPS) yang menggabungkan entitas fisik, konektivitas jaringan generasi kelima (5G), dan representasi digital yang *real-time* melalui konsep *digital twin*. Dalam konteks ini, *Asset Administration Shell* (AAS) muncul sebagai kerangka standar yang didefinisikan oleh *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA) untuk mengelola metadata, properti, kapabilitas, dan submodel dari sebuah aset industri secara interoperable lintas vendor dan lintas platform. Cavalieri, Di Natale, dan Gambadoro (2024) dalam tulisannya yang berjudul "Asset Administration Shell Digital Twin of 5G Communication System" ([DOI: 10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi integrasi AAS dengan infrastruktur telekomunikasi 5G, mengingat peran vital jaringan 5G sebagai *backbone* komunikasi nirkabel berlatensi rendah (*ultra-reliable low-latency communication*, URLLC) di lantai pabrik cerdas. Studi tersebut memposisikan 5G bukan sekadar sebagai utilitas telekomunikasi, melainkan sebagai *aset industri* yang memerlukan representasi digital twin yang terstandar agar dapat dikelola mengikuti siklus hidup (*life cycle*) sesuai rekomendasi *Reference Architecture Model Industry 4.0* (RAMI 4.0).

Urgensi ekonomis dan teknis dari topik ini dapat dilihat dari dua perspektif. Pertama, investasi global pada jaringan private 5G untuk manufaktur diproyeksikan mencapai lebih dari USD 10 miliar pada akhir dekade ini, sebagaimana dilaporkan oleh berbagai studi konsultan telekomunikasi, sehingga diperlukan *governance* yang setara dengan aset fisik lainnya (CAPEX, OPEX, depresiasi, *Mean Time Between Failure*/MTBF). Kedua, integrasi AAS–5G memungkinkan *predictive maintenance*, *closed-loop control*, dan *real-time reconfiguration* lini produksi yang sebelumnya tidak dapat dilakukan karena latensi jaringan Wi-Fi industri dan *fieldbus* terlalu tinggi untuk memenuhi persyaratan deterministik. Di sisi lain, De Marchi, Rojas, dan Mark (2022) dalam "Digital Twin Architecture of a Cyber-physical Assembly Transfer System" ([DOI: 10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) membangun arsitektur digital twin untuk *assembly transfer system* yang menjadi klien sekaligus pengguna akhir dari infrastruktur 5G. Sinergi kedua makalah ini mempertegas bahwa AAS tidak hanya relevan untuk aset fisik, tetapi juga untuk *sistem komunikasi* yang menopang keseluruhan rantai nilai manufaktur.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori yang relevan mencakup tiga pilar: (i) model komunikasi 5G URLLC, (ii) struktur formal AAS berdasarkan spesifikasi *Details of the Asset Administration Shell* (IDTA, 2023), dan (iii) sinkronisasi state antara *physical asset* dan *digital twin*.

**2.1 Model Latensi End-to-End pada URLLC 5G**

Untuk jaringan 5G dengan mode URLLC, latensi end-to-end $L_{e2e}$ dari sensor hingga *digital twin* dapat dimodelkan sebagai:

$$L_{e2e} = L_{prop} + L_{trans} + L_{proc} + L_{queue} + L_{sync}$$

di mana $L_{prop}$ adalah *propagation delay* yang bergantung pada jarak $d$ dan kecepatan propagasi di medium ($v \approx 2 \times 10^8$ m/s untuk kabel tembaga):

$$L_{prop} = \frac{d}{v}$$

$L_{trans}$ adalah *transmission delay* yang ditentukan oleh ukuran paket data $S$ (dalam bit) dan *data rate* efektif $R$ (dalam bit/s):

$$L_{trans} = \frac{S}{R}$$

$L_{proc}$ adalah latensi pemrosesan pada edge/fog node, $L_{queue}$ adalah latensi antrian pada *scheduling* 5G yang mengikuti model antrian M/D/1 untuk *slot* URLLC dengan durasi tetap $T_{slot}$, dan $L_{sync}$ adalah *clock synchronization error* antara *physical asset* dan *digital twin*. Kapasitas kanal 5G dalam mode URLLC dapat didekati dengan rumus Shannon yang dimodifikasi untuk *blocklength* terbatas (Polyanskiy, 2010):

$$R \approx \frac{W}{\ln 2} \left[ \ln(1 + \text{SNR}) - \sqrt{\frac{V}{W}} \cdot Q^{-1}(\epsilon) \right]$$

dengan $W$ adalah bandwidth (Hz), SNR adalah *signal-to-noise ratio*, $V$ adalah *channel dispersion*, dan $\epsilon$ adalah *block error rate* yang harus $\leq 10^{-5}$ untuk URLLC.

**2.2 Struktur Formal Asset Administration Shell**

AAS merupakan *metamodel* yang didefinisikan secara rekursif. Sebuah AAS $A$ dapat direpresentasikan sebagai tuple:

$$A = \langle \text{ID}_A, \mathcal{S}, \mathcal{P}, \mathcal{C}, \mathcal{M} \rangle$$

di mana $\text{ID}_A$ adalah *globally unique identifier* (berbasis URI), $\mathcal{S}$ adalah himpunan *submodels*, $\mathcal{P}$ adalah himpunan *properties* (data element), $\mathcal{C}$ adalah himpunan *capabilities*, dan $\mathcal{M}$ adalah himpunan *methods/operations*. Setiap submodel $s \in \mathcal{S}$ memiliki struktur:

$$s = \langle \text{ID}_s, \mathcal{E}_s, \mathcal{R}_s \rangle$$

dengan $\mathcal{E}_s$ adalah himpunan *submodel elements* dan $\mathcal{R}_s$ adalah himpunan *relations* antar elemen. *Submodel element* adalah pasangan *property-value*:

$$e = \langle \text{ID}_e, \text{type}_e, \text{value}_e(t), \text{unit}_e, \text{quality}_e \rangle$$

di mana $\text{value}_e(t)$ adalah fungsi waktu yang merepresentasikan pembacaan sensor pada saat $t$.

**2.3 Sinkronisasi State Digital Twin**

*Physical asset* bertransisi menurut *state space* kontinyu:

$$\dot{\mathbf{x}}_p(t) = f_p(\mathbf{x}_p(t), \mathbf{u}_p(t), \mathbf{w}_p(t))$$

$$\mathbf{y}_p(t) = g_p(\mathbf{x}_p(t))$$

Sementara *digital twin* berjalan dengan *state* diskret karena keterbatasan bandwidth transmisi:

$$\mathbf{x}_d[k+1] = f_d(\mathbf{x}_d[k], \mathbf{y}_p(kT_s), \mathbf{u}_d[k])$$

dengan $T_s$ adalah *sampling period*. Error sinkronisasi didefinisikan sebagai:

$$\mathbf{e}(t) = \mathbf{x}_p(t) - \hat{\mathbf{x}}_d(t)$$

dan konvergensi digital twin tercapai jika $\|\mathbf{e}(t)\|_2 \leq \epsilon_{tol}$ untuk semua $t \geq T_{conv}$. Stabilitas dapat dianalisis menggunakan persamaan Lyapunov:

$$V(\mathbf{e}(t)) = \mathbf{e}^T(t) \mathbf{P} \, \mathbf{e}(t), \quad \mathbf{P} \succ 0$$

dengan syarat $\dot{V}(\mathbf{e}(t)) < 0$ di luar bola $\|\mathbf{e}(t)\|_2 > \epsilon_{tol}$.

**2.4 Model Markov untuk Keandalan Rantai AAS–5G**

Keandalan komunikasi antara sensor aset dan server AAS dapat dimodelkan dengan rantai Markov kontinyu-waktu $\{X(t)\}$ dengan ruang状态 $S = \{0,1,2\}$, masing-masing merepresentasikan *operational*, *degraded*, dan *failed*. Intensitas transisi $\lambda_{ij}$ menghasilkan generator $Q$, dan probabilitas sistem berada dalam mode operasional pada waktu $t$:

$$P_{\text{op}}(t) = \pi_0(t)$$

di mana $\pi(t) = \pi(0) e^{Qt}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *Asset Administration Shell Digital Twin* untuk sistem komunikasi 5G mengikuti prosedur operasional standar yang diadopsi dari kerangka kerja *Plattform Industrie 4.0* dan temuan Cavalieri *et al.* (2024) serta De Marchi *et al.* (2022). Tahapan implementasi secara sistematis adalah:

**Tahap 1 — Identifikasi Aset (*Asset Identification*).** Aset yang akan dimodelkan diklasifikasikan menjadi: (a) *5G physical network function* (PNF) seperti *gNodeB*, *small cell*, antena MIMO; (b) *5G virtual network function* (VNF) seperti *AMF*, *SMF*, *UPF*; dan (c) *aset lantai produksi* yang bergantung pada 5G (robot, AGV, sensor). Setiap aset diberi `AssetID` mengikuti *International Designator* (misal `urn:company:asset:5g:gNB:line3:cell01`).

**Tahap 2 — Pemodelan Submodel AAS.** Submodel wajib yang direkomendasikan mencakup:
- `Nameplate` (data identifikasi pabrikan),
- `CommunicationCapability` (profil QoS 5G: bandwidth, latensi, jitter),
- `Status` (`Operational`/`Degraded`/`Failed`),
- `Diagnosis` (alarm aktif dan historis),
- `MaintenanceLog` (riwayat perbaikan),
- `Documentation` (manual, gambar teknik).

Pengisian submodel mengikuti template dari IDTA dengan format JSON/XML sesuai spesifikasi AAS Part 1 (IEC PAS 63088:2023).

**Tahap 3 — Konfigurasi Protokol Komunikasi 5G.** Koneksi antara aset fisik dan *AAS server* menggunakan protokol:
- **MQTT 5.0 over TLS 1.3** untuk *telemetry* ringan dengan topic `$aas/{AssetID}/submodels/{submodelID}/properties`,
- **OPC UA over 5G** (IEC 62541) untuk data industri yang memerlukan *semantic interoperability*,
- **gRPC + Protocol Buffers** untuk *streaming data* dengan *high throughput*,
- **HTTP/REST AAS API** untuk operasi *read/write* sesuai *AAS API specification*.

**Tahap 4 — Implementasi Server AAS dan Registry.** Server AAS menyimpan representasi digital twin dan mengekspos API. Registry (Lighthouse / Discovery Service) mengindeks seluruh AAS sehingga klien dapat melakukan `Lookup` berdasarkan `AssetID` atau *asset kind*.

**Tahap 5 — Validasi dan *Commissioning*.** Validasi dilakukan dengan: (a) uji *latency* menggunakan *round-trip time* (RTT) target $\leq 10$ ms untuk URLLC; (b) uji *packet loss* $\leq 10^{-5}$; (c) uji *interoperability* terhadap *conformance test suite* IDTA; (d) uji *cyber