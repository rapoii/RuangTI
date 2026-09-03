# 1618 — Digital Twin *Asset Administration Shell* (AAS) untuk Sistem Komunikasi 5G Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Asset Administration Shell Digital Twin* Sistem Komunikasi 5G pada Lingkup *Cyber-Physical Production Systems* (CPPS)
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. **Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)**. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. **Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)**. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lini produksi manufaktur menuju paradigma **Industrie 4.0** (juga dikenal sebagai *Smart Manufacturing* atau *Industrial Internet of Things*/IIoT) menuntut kehadiran representasi digital standar dari setiap aset fisik (*cyber-physical asset*). Dalam konteks tersebut, **Asset Administration Shell (AAS)** muncul sebagai kerangka referensi (*Reference Architecture Model Industry 4.0*/RAMI 4.0) yang dikembangkan oleh *Plattform Industrie 4.0* dan kini dilanjutkan oleh *Industrial Digital Twin Association* (IDTA). AAS berfungsi sebagai *digital nameplate*, *digital typeplate*, dan *digital twin* formal yang mendeskripsikan seluruh siklus hidup aset: mulai dari *design*, *production*, *operation*, hingga *recycling*.

Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang berjudul **"Asset Administration Shell Digital Twin of 5G Communication System"** mengangkat urgensi integrasi AAS dengan infrastruktur telekomunikasi **5G New Radio (NR)** yang kini menjadi tulang punggung komunikasi nirkabel di lantai pabrik. Permasalahan riset yang mereka identifikasi adalah belum adanya model *digital twin* yang sepenuhnya mengadopsi standar AAS (IEC 63278 / IEC PAS 63050) untuk elemen-elemen jaringan 5G — seperti *gNodeB*, *User Equipment* (UE), *User Plane Function* (UPF), dan *5G Core*. Padahal, standarisasi ini krusial agar komunikasi industri dapat bersifat *plug-and-produce*, interoperable, dan memenuhi sertifikasi kepatuhan *Industrie 4.0* [Cavalieri *et al.*, 2024, DOI: 10.5220/0012914200003822].

Konteks ekonominya sangat relevan: pasar global *digital twin* manufaktur diproyeksikan mencapai USD 110 miliar pada 2030 dengan CAGR ~35%, sementara investasi *private 5G* di manufaktur tumbuh >40% YoY. Ketiadaan model AAS untuk 5G menyebabkan silo data, mempersulit *commissioning*, *monitoring*, dan *predictive maintenance* pada lini produksi otomatis.

Makalah pendukung karya De Marchi, Rojas, dan Mark (2022) — **"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"** — menyajikan arsitektur *digital twin* untuk sistem *transfer* perakitan *cyber-physical* yang dapat berkomunikasi dengan aset melalui protokol MQTT/OPC UA. Studi mereka menunjukkan bahwa integrasi lapisan *edge-cloud digital twin* mampu mengurangi *mean-time-to-recovery* (MTTR) hingga 42% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 7–11 poin persentase [De Marchi *et al.*, 2022, DOI: 10.5220/0011589900003329]. Sinergi antara kedua makalah ini menjadi pilar bagaimana AAS yang awalnya dirancang untuk aset fisik kini diperluas ke aset komunikasi (5G) yang menopang *cyber-physical production systems* (CPPS) tersebut.

Dengan demikian, modul 1618 membahas bagaimana memodelkan, mengimplementasikan, dan mengukur kinerja *digital twin* AAS untuk sistem komunikasi 5G di lingkungan industri, lengkap dengan formulasi matematis, SOP implementasi, studi kasus kuantitatif, serta evaluasi kritis lintas-sektor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS dan *Submodel*

AAS mengikuti arsitektur berlapis yang terdiri atas *Asset*, *Asset Administration Shell*, dan *Submodels*. Secara matematis, setiap entitas AAS dapat direpresentasikan sebagai *tuple* berorde tinggi:

$$AAS_i = \langle ID_i, Attr_i, Sub_i, Op_i, Ev_i \rangle$$

di mana:
- $ID_i$ = *identifier* global sesuai *IRDI* (International Registration Data Identifier),
- $Attr_i = \{a_1, a_2, \ldots, a_n\}$ = himpunan atribut statis,
- $Sub_i = \{S_1, S_2, \ldots, S_m\}$ = himpunan *submodel* (misal *Nameplate*, *TechnicalData*, *Communication*),
- $Op_i$ = operasi *CRUD* (Create, Read, Update, Delete),
- $Ev_i$ = *event log* untuk *traceability*.

Setiap submodel memiliki himpunan *property* $\mathcal{P}_{ij}$ yang diikat pada elemen SemanticId yang dapat dibaca oleh *BaSyx* atau *AASX Package Explorer*.

### 2.2 Kinerja 5G untuk Aplikasi Industri

Untuk aplikasi *Ultra-Reliable Low-Latency Communication* (URLLC) pada lantai pabrik, Cavalieri *et al.* (2024) menggunakan tiga metrik esensial yang diformulasikan sebagai berikut [DOI: 10.5220/0012914200003822]:

**1. Latensi ujung-ke-ujung (*End-to-End Latency*, E2E Latency):**
$$L_{e2e} = L_{UE} + L_{radio} + L_{transport} + L_{core} + L_{app}$$

di mana $L_{radio}$ adalah latency lapisan radio 5G NR yang dimodelkan dengan:

$$L_{radio} = T_{tti} \cdot \left(\frac{N_{HARQ}}{2} + N_{retrans}\right) + \frac{P_{payload}}{R_{throughput}}$$

dengan:
- $T_{tti}$ = durasi *Transmission Time Interval* (misal 1 ms untuk *numerology* $\mu=0$ atau 0,125 ms untuk $\mu=2$),
- $N_{HARQ}$ = jumlah proses *Hybrid Automatic Repeat Request*,
- $N_{retrans}$ = jumlah retransmisi akibat block error,
- $P_{payload}$ = ukuran *payload* (bit),
- $R_{throughput}$ = *throughput* efektif (bps).

**2. Keandalan (*Reliability*):**
Probabilitas paket sukses diterima dalam waktu $T_{max}$:

$$R_{reliability} = P(L_{e2e} \leq T_{max}) = 1 - (1 - p_{succ})^k$$

di mana $p_{succ}$ adalah probabilitas keberhasilan transmisi per *slot* dan $k$ adalah jumlah *slot* yang tersedia dalam jendela $T_{max}$. Untuk URLLC, target tipikal adalah $R_{reliability} \geq 1 - 10^{-5}$ dalam $T_{max} = 1\,\text{ms}$.

**3. Kapasitas dan *Throughput* Agregat:**
$$R_{agg} = \sum_{u=1}^{U} B \cdot \log_2\left(1 + \frac{P_u \cdot g_u}{N_0 \cdot B}\right)$$

dengan $B$ adalah *bandwidth* (Hz), $P_u$ daya transmisi UE ke-$u$, $g_u$ *channel gain*, dan $N_0$ densitas daya noise.

### 2.3 Sinkronisasi *Digital Twin* — *State Mirroring*

Karena AAS merepresentasikan *real-time state* dari aset 5G, diperlukan model sinkronisasi periodik. Bentuk paling sederhana mengikuti pendekatan *discrete-time state update*:

$$S_{DT}(t_{k+1}) = f(S_{DT}(t_k), \Delta \mathbf{x}(t_k), \Delta \mathbf{u}(t_k))$$

dengan $S_{DT}(t_k)$ adalah *state vector digital twin* (misalnya status RRC, throughput S1-U, buffer occupancy), $\Delta \mathbf{x}(t_k)$ perubahan variabel yang diamati dari sensor/ *telemetry*, dan $\Delta \mathbf{u}(t_k)$ perubahan perintah kontrol. Akurasi *mirroring* diukur dengan:

$$\varepsilon_{sync} = \frac{\|S_{DT}(t_k) - S_{phys}(t_k)\|_2}{\|S_{phys}(t_k)\|_2}$$

Nilai $\varepsilon_{sync} \leq 5\%$ umumnya dianggap layak untuk aplikasi *monitoring*; untuk *closed-loop control*, $\varepsilon_{sync} \leq 1\%$.

### 2.4 Penilaian Kinerja Manajerial

Kontribusi AAS terhadap kinerja lini produksi dapat dikuantifikasi melalui peningkatan OEE:

$$OEE = A \cdot P \cdot Q$$

di mana $A$ = *Availability*, $P$ = *Performance*, $Q$ = *Quality*. Dengan integrasi AAS-5G, De Marchi *et al.* (2022) melaporkan peningkatan availabilitas rata-rata 8% melalui *predictive maintenance* berbasis *digital twin* [DOI: 10.5220/0011589900003329].

---

## 3. Metodologi Rekayasa & SOP Implementasi AAS-5G

Implementasi AAS *digital twin* untuk sistem komunikasi 5G mengikuti delapan langkah prosedural berdasarkan temuan Cavalieri *et al.* (2024) dan praktik terbaik IDTA:

### SOP-1618: Langkah Implementasi

1. **Identifikasi Aset Komunikasi** — Inventarisasi elemen jaringan 5G: *gNodeB*, *AMF/SMF/UPF*, *RU/DU/CU*, *UE* industri (AGV, robot kolaboratif, sensor IoT).
2. **Pemetaan ke Standar AAS** — Tentukan *Submodel Templates* (SMT) yang relevan:
   - *Nameplate* SMT (untuk vendor, model, serial)
   - *TechnicalData* SMT (untuk frekuensi, bandwidth, daya)
   - *Communication* SMT (untuk *endpoint* AAS, protokol HTTP/MQTT/OPC UA)
   - *Capability* SMT (untuk fitur URLLC, network slicing)
3. **Desain Skema JSON/XML AASX** — Gunakan format *AASX* (file paket OPC UA + XML) atau *JSON-AAS* sesuai spesifikasi IDTA.
4. **Provisioning *Endpoint* AAS** — Daftarkan *registry URL* (misal `https://aas.company.com/registry/`) yang mengarahkan ke *repository* AAS.
5. **Integrasi Telemetri 5G** — Sambungkan *northbound API* 5G (misal Nokia Network Exposure Function atau Ericsson ENM) ke *repository* AAS menggunakan *adapter* OPC UA → AAS.
6. **Implementasi *State Synchronization*** — Tentukan *sampling period* ($T_s$) sesuai kemampuan jaringan dan kebutuhan kontrol