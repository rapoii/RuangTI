# 2578 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai arsitektur Digital Twin untuk Sistem Komunikasi 5G Industri dan Sistem Transfer Perakitan Siber-Fisik (CPAS)
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dalam sektor manufaktur dan rekayasa sistem industri mensyaratkan interoperabilitas mesin-mesin heterogen melalui lapisan komunikasi deterministik berlatensi rendah. Dalam konteks ini, komunikasi nirkabel generasi kelima (5G) muncul sebagai enabler strategis karena kemampuannya menyediakan *Ultra-Reliable Low-Latency Communication* (URLLC) dengan target latensi ujung-ke-ujung di bawah 1 ms dan tingkat keandalan 99,999%. Cavalieri, Di Natale, dan Gambadoro (2024) dalam naskah yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi pengembangan model digital twin untuk sistem komunikasi 5G yang tidak lagi dapat diperlakukan sebagai infrastruktur *opaque*, melainkan harus menjadi aset industri yang dapat dikelola siklus hidupnya, diamati status operasionalnya, dan diintegrasikan ke dalam *Production Excellence* framework melalui standardisasi Asset Administration Shell (AAS).

Secara historis, arsitektur komunikasi industri didominasi oleh kabel *industrial Ethernet* (misalnya PROFINET, EtherCAT) yang memiliki kelemahan berupa rigiditas topologi dan biaya rekonfigurasi tinggi. Migrasi ke 5G private network di lantai pabrik — yang kini banyak diadopsi oleh sektor otomotif, semikonduktor, dan logistik — menciptakan *paradoks operasional*, di mana semakin fleksibelnya jaringan nirkabel justru meningkatkan kompleksitas tata kelola aset. Tanpa representasi digital yang formal dan dapat di-query secara mesin-ke-mesin (*machine-readable*), operator pabrik tidak memiliki visibilitas terhadap parameter Radio Resource Management (RRM), kualitas *beamforming*, maupun degradasi *Signal-to-Interference-plus-Noise Ratio* (SINR) akibat interferensi seluler tetangga. AAS, yang merupakan tulang punggung Reference Architecture Model Industry 4.0 (RAMI 4.0) yang diformalkan oleh *Plattform Industrie 4.0* dan kini dilanjutkan oleh *Industrial Digital Twin Association* (IDTA), menyediakan kerangka representasi aset yang memenuhi kebutuhan tersebut.

De Marchi, Rojas, dan Mark (2022) melalui *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi perspektif tersebut dengan mengusulkan arsitektur digital twin untuk *Cyber-Physical Assembly Transfer System* (CPAS) — yaitu sistem transport antar-stasiun perakitan yang dikendalikan secara sibernetis. Sinergi antara kedua literatur ini menunjukkan bahwa digital twin bukan lagi konsep monolitik melainkan *federated information system* yang terdiri atas submodel-submodel AAS yang saling bertukar data melalui antarmuka HTTP/MQTT. Permasalahan riset yang diangkat bersifat ganda: (1) bagaimana memodelkan aset jaringan 5G (base station, *User Equipment*, *core network function*) sebagai submodel AAS yang sesuai dengan spesifikasi IEC 63278 dan DIN SPEC 91345; serta (2) bagaimana mengintegrasikan representasi tersebut dengan *state machine* sistem transfer perakitan untuk mendukung *predictive maintenance* dan *closed-loop control* dengan frekuensi update hingga orde millisecond. Aspek ekonomisnya sangat signifikan: menurut laporan industrial 5G alliance, downtime komunikasi di pabrik pintar menyebabkan kerugian produksi rata-rata €22.000 per menit, sehingga kemampuan AAS untuk menyediakan *Condition Monitoring* real-time menjadi value proposition yang kuat bagi *Chief Operating Officer* dan *Plant Manager*.

## 2. Landasan Teori & Formulasi Matematis

AAS didefinisikan secara formal sebagai representasi digital dari sebuah aset industri yang terdiri atas satu atau lebih *submodels*. Setiap *submodel* tersusun atas *SubmodelElement* (seperti `Property`, `MultiLanguageProperty`, `Operation`, `Event`, dan `SubmodelElementCollection`). Secara matematis, struktur AAS dapat diabstraksikan sebagai pasangan terurut:

$$
\mathcal{A} = (\mathcal{I}, \mathcal{S})
$$

di mana $\mathcal{I}$ adalah himpunan *Identification* yang memuat `idShort`, `id` (URI global), dan `assetKind` (sesuai taksonomi IDTA), sedangkan $\mathcal{S} = \{s_1, s_2, \ldots, s_n\}$ adalah himpunan submodel. Sebuah submodel $s_i$ memenuhi:

$$
s_i = \langle \sigma_i, \mathcal{E}_i, \mathcal{O}_i, \mathcal{V}_i \rangle
$$

dengan $\sigma_i$ adalah `idShort` submodel, $\mathcal{E}_i$ himpunan *Event*, $\mathcal{O}_i$ himpunan *Operation* (fungsi yang dapat di-invoke via HTTP REST), dan $\mathcal{V}_i$ himpunan elemen bernilai (properti terukur).

Untuk sistem komunikasi 5G yang dimodelkan oleh Cavalieri et al. (2024), parameter kualitas tautan nirkabel harus terkuantifikasi. Kapasitas *shannon* pada sebuah *Resource Block* (RB) 5G NR berduransi transmisi $T_{slot}$ mengikuti teorema Shannon-Hartley:

$$
C_{RB} = B_{RB} \cdot \log_2\!\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B_{RB} \cdot L_{path}}\right) \quad \text{[bit/s]}
$$

dengan $B_{RB} = 180$ kHz adalah bandwidth standar *numerology* 5G NR, $P_t$ daya transmit, $G_t, G_r$ gain antena, $N_0$ densitas noise termal ($\approx -174$ dBm/Hz), dan $L_{path}$ path loss yang mengikuti model propagasi 3GPP TR 38.901. Latensi ujung-ke-ujung URLLC untuk satu paket data didekomposisi sebagai:

$$
L_{E2E} = L_{proc} + L_{queue} + L_{tx} + L_{prop} + L_{retrans}
$$

Syarat URLLC ($L_{E2E} \leq 1$ ms) mengharuskan $L_{queue}$ diminimalkan melalui *preemptive scheduling* dan penggunaan *Numerology* $\mu = 3$ (subcarrier spacing 120 kHz). Tingkat keandalan diekspresikan sebagai probabilitas keberhasilan transmisi dalam window waktu $T_{window}$:

$$
R_{URLLC} = 1 - 10^{-5} = \prod_{k=1}^{N_{tx}} (1 - \text{BLER}_k(\gamma_k))
$$

di mana $\text{BLER}_k$ adalah *Block Error Rate* pada transmisi ke-$k$ yang bergantung pada SINR $\gamma_k$. Dalam submodel AAS, fungsi $\text{BLER}(\gamma)$ diimplementasikan sebagai *Operation* `GetBlockErrorRate` yang di-*invoke* oleh controller lantai pabrik.

Untuk sistem transfer perakitan siber-fisik yang dikaji De Marchi et al. (2022), laju produksi majemuk (*effective cycle time*) dapat diformulasikan sebagai:

$$
T_{cycle} = \max\!\left(T_{transfer}, T_{process}, T_{buffer}\right)
$$

di mana $T_{transfer}$ adalah durasi fisik pergerakan工件 (workpiece) antar-stasiun, $T_{process}$ waktu operasi perakitan, dan $T_{buffer}$ waktu tunggu antrean. *Overall Equipment Effectiveness* (OEE) kemudian dihitung:

$$
\text{OEE} = A \cdot P \cdot Q
$$

dengan availability $A = \frac{T_{planned} - T_{downtime}}{T_{planned}}$, performance $P = \frac{T_{ideal\,cycle} \cdot N_{actual}}{T_{operating}}$, serta quality $Q = \frac{N_{good}}{N_{total}}$. Digital twin menyediakan estimasi real-time untuk seluruh variabel ini melalui pembacaan `Property` AAS yang dipublikasikan via *Asset Interface Description*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin mengikuti prosedur delapan tahap yang distandardisasi oleh IDTA dan diadopsi oleh Cavalieri et al. (2024) serta De Marchi et al. (2022) untuk domain masing-masing. Tahapan tersebut diuraikan secara berurutan sebagai berikut:

**Tahap 1 — Pemodelan Ontologi Aset (*Asset Identification*).** Definisikan `Asset` beserta `idShort` dan Global Asset Identifier (GAID) berbasis URI. Untuk BTS 5G, gunakan namespace `https://idta.example/5G/gNB/{serial}`; untuk transfer line, gunakan `https://idta.example/CPAS/{line-id}`.

**Tahap 2 — Identifikasi Submodel.** Pilih submodel-submodel dari *AAS Submodel Template Repository* (misalnya *Nameplate*, *TechnicalData*, *CapabilityDescription*, *OperationalData*, *ConditionMonitoring*). Untuk BTS 5G, Cavalieri et al. (2024) menambahkan submodel *RadioResourceStatus* yang berisi `Property` seperti `currentLoadPRB`, `numActiveUEs`, `throughputDL`, dan `throughputUL`.

**Tahap 3 — Pemetaan ke Sumber Data.** Setiap `Property` AAS dipetakan ke sumber data riil via *Endpoint* `https://` atau `opc.tcp://`. Untuk 5G, gunakan *O1/NBI* interface ke *Radio Access Network* Information Service (RIS) berbasis RESTCONF/YANG. Untuk CPAS, gunakan *OPC UA* Server di setiap *Programmable Logic Controller* (PLC) yang menggerakkan konveyor.

**Tahap 4 — Penentuan *Operation* dan *Event*.** Tetapkan operasi yang dapat di-*invoke* dari luar, misalnya `RebootCell`, `AdjustBeamTilt(theta)` untuk BTS, atau `EmergencyStop`, `ResetTransferLine` untuk CPAS. *Event* seperti `LinkDegradation`, `BufferOverflow` di-emit via MQTT-SN ke *Message Broker*.

**Tahap 5 — Serialisasi dan Publikasi.** Submodel dideskripsikan menggunakan format AASX (XML) atau JSON sesuai *AASX Package Explorer*. Endpoint *Asset Administration Shell Registry* dipublikasikan ke *Industrial Cloud* (misalnya Eclipse.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
