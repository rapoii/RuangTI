# 2962 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju **Industry 4.0** dan **Society 5.0** mensyaratkan integrasi mendalam antara aset fisik (*physical asset*) dan representasi digitalnya melalui paradigma *Cyber-Physical Systems* (CPS). Dalam konteks ini, dua pilar teknologi menjadi determinan strategis: (1) **Asset Administration Shell (AAS)** sebagai kerangka representasi digital aset yang distandardisasi oleh *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA), dan (2) **jaringan komunikasi 5G** dengan kapabilitas *Ultra-Reliable Low-Latency Communication* (URLLC), *Enhanced Mobile Broadband* (eMBB), dan *Massive Machine-Type Communication* (mMTC) yang diproyeksikan oleh standar 3GPP Release 16/17/18.

Konteks industri yang melatarbelakangi riset Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) adalah kebutuhan mendesak akan digital twin yang tidak hanya memodelkan *production asset* (mesin, robot, conveyor), tetapi juga memodelkan **infrastruktur komunikasi 5G itu sendiri** sebagai aset yang memiliki *life cycle*, *configuration*, dan *operational state*. Pendekatan ini mengatasi keterbatasan arsitektur digital twin konvensional yang memperlakukan jaringan komunikasi sebagai *black box* yang tidak teramati secara semantik. Pelengkap penting diberikan oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang membangun arsitektur digital twin untuk *cyber-physical assembly transfer system*, di mana sinkronisasi antara lini transfer fisik dan model digitalnya memerlukan kanal komunikasi deterministik berlatensi rendah.

Urgensi ekonomis dari integrasi AAS-5G bersifat krusial: menurut estimasi yang dikutip dalam literatur IDTA, biaya *downtime* tak terjadwal pada lini manufaktur bernilai antara **$10.000–$250.000 per jam** tergantung sektor (otomotif presisi vs. semikonduktor). Kapabilitas *predictive maintenance* yang difasilitasi oleh AAS, ketika diperkuat dengan *network slice* 5G yang andal, dapat menurunkan *Mean Time To Repair* (MTTR) hingga 50% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 15–25%. Tanpa representasi digital yang terstandardisasi pada lapisan jaringan komunikasi, integrasi vertikal (*brownfield*) antara *Operational Technology* (OT) dan *Information Technology* (IT) akan menghadapi interoperabilitas yang fragmenter.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi Arsitektural AAS (RAMI 4.0)

AAS didefinisikan dalam spesifikasi **IEC 63278 / PAS 62006** sebagai representasi digital berbasis standar dari sebuah aset industri. Secara formal, AAS dapat dimodelkan sebagai *tuple* berstruktur:

$$
\mathcal{A} = \langle I, S, P, M, V, L \rangle
$$

di mana:
- $I$ = *Identification* (pengidentifikasi global aset, e.g., `IRI` berdasarkan `urn:...`)
- $S$ = *Submodels* (kumpulan submodel semantik), $S = \{s_1, s_2, \dots, s_n\}$
- $P$ = *Properties* (atribut terstruktur)
- $M$ = *Methods* (layanan/fungsi yang dapat dipanggil)
- $V$ = *Value* (nilai runtime)
- $L$ = *Lifecycle state* (state dari `PLANNED`, `INSTALLING`, `OPERATIONAL`, `MAINTAINING`, `DECOMMISSIONING`)

Jumlah total elemen semantik yang harus disinkronkan melalui kanal komunikasi didefinisikan sebagai:

$$
N_{\text{elem}} = \sum_{i=1}^{n} \left( p_i + m_i + e_i \right)
$$

dengan $p_i$ = jumlah *property*, $m_i$ = jumlah *method*, $e_i$ = jumlah *event* pada submodel $s_i$.

### 2.2 Model Latensi URLLC 5G untuk AAS

Total latensi end-to-end pada transmisi data AAS melalui jaringan 5G URLLC:

$$
L_{\text{total}} = L_{\text{radio}} + L_{\text{transport}} + L_{\text{core}} + L_{\text{edge}} + L_{\text{app}}
$$

Target URLLC 3GPP mensyaratkan $L_{\text{total}} \leq 1\text{ ms}$ dengan reliabilitas $1 - 10^{-5}$ untuk blok transmisi 32 byte. Jitter sinkronisasi digital twin yang diturunkan dari eksperimen lapangan:

$$
\sigma_{\text{sync}} = \sqrt{\sigma_{\text{phy}}^2 + \sigma_{\text{net}}^2 + \sigma_{\text{proc}}^2}
$$

dengan $\sigma_{\text{phy}}$ = jitter fisik, $\sigma_{\text{net}}$ = jitter jaringan, $\sigma_{\text{proc}}$ = jitter pemrosesan AAS.

### 2.3 Kapasitas Kanal dan Throughput Data AAS

Kapasitas kanal 5G menurut formula Shannon-Hartley:

$$
C = B \cdot \log_2\!\left(1 + \frac{S}{N}\right) \quad [\text{bit/s}]
$$

Untuk *bandwidth* $B = 100$ MHz dan *Signal-to-Noise Ratio* SNR $= 20$ dB (faktor 100), kapasitas puncak:

$$
C = 10^8 \cdot \log_2(101) \approx 6.66 \times 10^8 \text{ bit/s} = 666 \text{ Mbps}
$$

Volume data AAS yang harus ditransmisikan per siklus sinkronisasi:

$$
V_{\text{AAS}} = f_s \cdot b \cdot n_{\text{elem}} \cdot t_{\text{cycle}}
$$

dengan $f_s$ = *sampling rate* sensor (Hz), $b$ = ukuran per elemen (bit), $n_{\text{elem}}$ = jumlah elemen, $t_{\text{cycle}}$ = durasi siklus observasi.

### 2.4 Model Reliabilitas Jaringan

Reliabilitas *packet delivery* untuk *network slice* URLLC:

$$
R(t) = e^{-\lambda t}
$$

dengan $\lambda$ = laju kegagalan paket. Untuk reliabilitas 99.999% dalam jendela 1 ms:

$$
\lambda = -\frac{\ln(0.99999)}{10^{-3}} \approx 10^{-2} \text{ kegagalan/detik}
$$

### 2.5 Model Konsistensi Digital Twin

Konsistensi antara state fisik dan state digital (state synchronization error) mengikuti:

$$
\varepsilon(t) = \|x_{\text{phys}}(t) - x_{\text{dt}}(t - \tau)\|_2
$$

dengan $\tau$ = total *round-trip delay* dan $\|\cdot\|_2$ = norma Euclidean pada ruang state. Batas konsistensi $\varepsilon_{\max}$ menjadi penentu frekuensi minimum sinkronisasi:

$$
f_{\text{sync}}^{\min} = \frac{1}{\tau + \varepsilon_{\max}/\|\dot{x}_{\text{phys}}\|}
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Empat Lapis Integrasi AAS–5G

Berangkat dari kerangka Cavalieri *et al.* (2024) yang diperkuat oleh arsitektur De Marchi *et al.* (2022), integrasi AAS-5G tersusun atas empat lapisan:

**Lapisan 1 — Physical Asset Layer:** Berisi *sensor*, *actuator*, *PLC*, dan *edge controller*. Sensor tipikal mencakup akselerometer (vibrasi), termokopel (suhu), *current transducer* (arus), dan *vision system* (citra).

**Lapisan 2 — 5G Communication Layer:** Terdiri atas *gNodeB* (base station 5G NR), *5G Core* (5GC) dengan *AMF*, *SMF*, *UPF*, dan *Network Slice Selection Function* (NSSF). Setiap *slice* memiliki profil QoS berbeda untuk tiap *use case* industri.

**Lapisan 3 — AAS Submodel & Semantic Layer:** Repositori AASX yang berisi submodel terstandardisasi, seperti:
- `Nameplate` (identitas aset)
- `Identification` (ID karbon, RIoT)
- `Documentation` (manual, sertifikat)
- `OperationalData` (telemetri)
- `Maintenance` (work order, history)

**Lapisan 4 — Application & Service Layer:** Berisi *dashboard*, *predictive analytics* (ML/AI), dan *MES/ERP connector* melalui protokol OPC UA, MQTT, atau HTTP/REST.

### 3.2 SOP Implementasi Sistematis

**Tahap A — Pemodelan Aset (Aset Modeling):**
1. Lakukan *asset inventory* dan klasifikasi berdasarkan *criticality*.
2. Definisikan submodel AAS menggunakan *AASX Package Explorer* sesuai *submodel templates* IDTA.
3. Validasi kepatuhan terhadap *AAS metamodel* (RDF/SMT/AASX).

**Tahap B