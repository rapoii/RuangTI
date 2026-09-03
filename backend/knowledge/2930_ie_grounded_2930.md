# 2930 — Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO). SciTePress. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL). SciTePress. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lini manufaktur yang digerakkan oleh paradigma **Industry 4.0** dan **Reference Architecture Model Industry 4.0 (RAMI 4.0)** telah mengubah secara fundamental cara aset industri direpresentasikan, dipertukarkan informasinya, dan diintegrasikan ke dalam rantai nilai cyber-physical. Dalam konteks ini, **Asset Administration Shell (AAS)** muncul sebagai kerangka standardisasi yang dikembangkan oleh *Plattform Industrie 4.0* dan diadopsi secara luas melalui spesifikasi IEC PAS 63278 dan seri dokumen spesifikasi "Details of the Asset Administration Shell" (seperti IDTA 01001, IDTA 01002, IDTA 02001, dan seterusnya). AAS berfungsi sebagai "paspor digital" atau *digital twin* formal dari sebuah aset fisik, menyediakan representasi terstruktur yang dapat dibaca mesin (*machine-readable*) dan interoperabel lintas platform.

Di sisi lain, sistem komunikasi nirkabel generasi kelima (**5G**) telah diposisikan sebagai *enabler* strategis untuk manufaktur cerdas, khususnya melalui tiga pilar layanan: *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine Type Communication* (mMTC). Untuk lingkungan industri, URLLC menjadi paling relevan karena menjanjikan latensi kurang dari 1 ms dengan tingkat keandalan 99,999% (five-nines). Integrasi AAS dengan infrastruktur 5G memungkinkan digital twin aset untuk tidak hanya memodelkan *equipment* produksi, tetapi juga memodelkan *jaringan komunikasi* yang menopang operasionalnya — sebuah kebutuhan yang sangat krusial dalam *cyber-physical production systems* (CPPS).

Cavalieri, Di Natale, dan Gambadoro (2024) — sebagaimana disitasi melalui DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822) — mengangkat persoalan mendasar bahwa sebagian besar literatur digital twin 5G hanya membahas *model jaringan* (grafik node, alokasi *spectrum*, *handover*), namun belum cukup memperhatikan bagaimana merepresentasikan elemen jaringan 5G (gNB, CU, DU, RU, UE, *slicing instance*, *QoS flow*) sebagai **aset industri yang tunduk pada siklus hidup** (pengadaan, commissioning, operasi, pemeliharaan, dekomisioning). Pendekatan berbasis AAS ini menjadi jembatan antara dua domain yang selama ini berjalan paralel: *network management* (3GPP / ETSI) dan *industrial asset management* (RAMI 4.0 / AAS). Urgensi ekonominya jelas: menurut studi-studi referensi dalam literatur terkait, downtime komunikasi di lini produksi bernilai ribuan hingga puluhan ribu euro per menit, sehingga kemampuan *predictive maintenance* terhadap elemen 5G memiliki *business case* yang kuat.

Penelitian pendukung oleh De Marchi, Rojas, dan Mark (2022) melalui DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) turut memberikan kontribusi kontekstual dengan mendemonstrasikan arsitektur *digital twin* untuk *cyber-physical assembly transfer system*, di mana *assembly transfer line* direpresentasikan sebagai entitas cyber-physical yang state-nya disinkronkan secara real-time. Pelajaran arsitektural dari sistem transfer perakitan tersebut — khususnya pemisahan antara *physical layer*, *communication layer*, *digital twin layer*, dan *application/service layer* — menjadi cetak biru yang dapat diadaptasi untuk memodelkan elemen 5G dalam kerangka AAS.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual AAS

AAS direpresentasikan sebagai struktur *property-based* dan *operation-based* yang terorganisir dalam *submodels*. Untuk elemen 5G, submodel yang relevan antara lain:

- **Nameplate**: identifikasi vendor, model, nomor seri, versi perangkat lunak.
- **Identification**: *International Asset Identifier* (IRI), *Global Asset Identifier* (GAI).
- **Capability**: parameter operasional seperti *bandwidth*, *frequency band*, *MIMO layers*, *transmit power*.
- **Status**: state dinamis seperti *cell load*, *connected UEs*, *throughput*, *latency*.
- **Documentation**: *firmware*, *configuration*, *network topology reference*.
- **Service / Operation**: API yang dapat dipanggil (misal *reconfigure_slice*).

### 2.2 Formulasi Kapasitas Kanal 5G

Kapasitas teoretis kanal 5G mengikuti formula Shannon-Hartley:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right) \quad \text{[bit/s]}$$

dengan $B$ adalah bandwidth kanal (Hz), $S$ adalah daya sinyal (W), dan $N$ adalah daya derau (W). Untuk bandwidth 100 MHz pada sub-6 GHz dengan SNR 20 dB, kapasitas teoretis per *resource block* menjadi:

$$C = 10^8 \cdot \log_2(1 + 100) \approx 6.66 \times 10^8 \text{ bit/s} \approx 666 \text{ Mbps}$$

### 2.3 Model Latensi URLLC

Total latensi end-to-end pada skenario URLLC dapat dimodelkan sebagai:

$$L_{total} = L_{UE} + L_{radio} + L_{transport} + L_{core} + L_{app}$$

dengan tipikal target: $L_{radio} \leq 0.5$ ms, $L_{transport} \leq 1$ ms untuk one-way.

### 2.4 Keandalan dan Model Kegagalan

Probabilitas *success packet delivery* mengikuti distribusi eksponensial:

$$R(t) = e^{-\lambda t}, \quad \lambda = \frac{1}{\text{MTBF}}$$

Untuk target keandalan URLLC dengan packet size 32 byte pada interval transmisi 1 ms:

$$P_{\text{success}} = 1 - 10^{-5} \Rightarrow \lambda \cdot t \approx 10^{-5}$$

### 2.5 Frekuensi Sinkronisasi Digital Twin

Interval sinkronisasi state antara AAS dan aset fisik:

$$T_{sync} = \min\left(T_{asset}^{min}, \frac{L_{budget}}{f_{update}^{max}}\right)$$

dengan $T_{asset}^{min}$ adalah periode sampling minimum aset dan $L_{budget}$ adalah budget latensi yang dialokasikan untuk sinkronisasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Berlapis

Implementasi mengikuti arsitektur empat lapis yang diadopsi dari referensi De Marchi et al. (2022):

| Lapisan | Komponen | Standar |
|---------|----------|---------|
| **Field Layer** | Sensor, aktuator, gNB, RU, UE | IEC 61784, 3GPP TS 38.xxx |
| **Communication Layer** | 5G NR, OPC UA, MQTT | 3GPP Release 16/17, OPC UA Part 100 |
| **Digital Twin Layer** | AAS instance, submodels, registry | IDTA 01001-01003, AASX package |
| **Application Layer** | Dashboard, predictive maintenance, optimizer | RAMI 4.0, IIRA |

### 3.2 SOP Implementasi Step-by-Step

1. **Aset Identification & Submodel Selection**: pilih elemen 5G (misal gNB, AMF/SMF) dan tentukan submodel AAS yang relevan.
2. **AAS Authoring**: bangun *