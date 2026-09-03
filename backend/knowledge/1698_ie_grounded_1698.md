# 1698 — Cangkang Administrasi Aset (Asset Administration Shell) sebagai Kerangka Digital Twin Sistem Komunikasi 5G untuk Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor manufaktur telah memasuki fase keempat yang ditandai dengan konvergensi antara sistem siber-fisik (cyber-physical systems/CPS), Internet of Things (IoT), dan jaringan komunikasi nirkabel generasi kelima (5G). Dalam konteks ini, digital twin muncul sebagai representasi virtual fidelitas tinggi dari entitas fisik yang memungkinkan simulasi, prediksi, dan optimalisasi proses industri secara *real-time*. Per Cavalieri, Di Natale, dan Gambadoro (2024) dalam artikel "*Asset Administration Shell Digital Twin of 5G Communication System*" yang dipublikasikan pada Proceedings of the 21st ICINCO dengan DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822), kebutuhan akan interoperabilitas digital twin pada aset komunikasi 5G menjadi sangat kritis karena meningkatnya kompleksitas jaringan privat 5G yang diterapkan di lantai pabrik (factory floor). Studi tersebut secara eksplisit mengusulkan pemanfaatan **Asset Administration Shell (AAS)** — standar referensi arsitektur dari Plattform Industrie 4.0 dan referensied model RAMI 4.0 — sebagai meta-model semantik untuk mendeskripsikan kemampuan (capabilities), properti, dan titik akhir (endpoints) komunikasi dari infrastruktur 5G yang digunakan sebagai tulang punggung sistem manufaktur terhubung.

Urgensi ekonomis dan teknis dari topik ini dapat ditelusuri dari beberapa驱动力 (driver) utama. Pertama, kebutuhan akan latensi rendah (*ultra-reliable low-latency communication*/URLLC) pada aplikasi misi-kritis seperti robot kolaboratif (cobot), kendaraan berpemandu otomatis (AGV), dan sistem transfer rakitan siber-fisik yang dikaji oleh De Marchi, Rojas, dan Mark (2022) dalam DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329). Kedua, fragmentasi protokol komunikasi (OPC UA, MQTT, Modbus TCP, Profinet) yang menghambat integrasi *end-to-end* pada lini produksi. Ketiga, minimnya model informasi standar yang dapat menjembatani domain Information Technology (IT) dan Operational Technology (OT) di tingkat lantai pabrik. Menurut Cavalieri et al. (2024), tanpa representasi digital twin yang distandardisasi, operator jaringan 5G privat tidak memiliki visibilitas holistik terhadap *Quality of Service* (QoS) yang dirasakan oleh aplikasi industri, sehingga menyulitkan *root cause analysis* ketika terjadi degradasi layanan. Studi De Marchi et al. (2022) juga menyoroti bahwa arsitektur transfer rakitan siber-fisik memerlukan lapisan abstraksi informasi yang mampu memodelkan status operasional (*operational state*) modul-modul elektromekanis dan logika kontrol secara serempak.

Dalam konteks Engineering Industri, digital twin yang dibangun di atas AAS memungkinkan *predictive maintenance*, *what-if scenario analysis*, dan sinkronisasi antara *bill of materials* fisik dengan model informasi digital. Lebih jauh, integrasi AAS dengan spesifikasi 3GPP TS 28.533 (Management and Orchestration; Architecture) dan ETSI ZSM (Zero-touch Service Management) memungkinkan *closed-loop automation* yang sebelumnya tidak feasible pada arsitektur SCADA konvensional. Dokumen knowledge base ini menguraikan kerangka matematis, prosedur operasional, dan studi kasus kuantitatif yang relevan bagi rekayasawan industri yang akan mengimplementasikan AAS-based digital twin untuk jaringan 5G privat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi RAMI 4.0 dan Layer Hierarchy AAS

AAS merupakan implementasi konkret dari konsep *Administration Shell* yang didefinisikan dalam dokumen spesifikasi Plattform Industrie 4.0 (Detail Specification of the Asset Administration Shell, Part 1 & 2). Struktur AAS dapat diformulasikan sebagai himpunan submodel yang merepresentasikan aspek spesifik dari sebuah aset industri. Secara matematis, sebuah AAS untuk node komunikasi 5G dapat dinyatakan sebagai:

$$
\mathcal{A}_{5G} = \left\{ \mathcal{I}, \mathcal{S}, \mathcal{C}, \mathcal{V}, \mathcal{T} \right\}
$$

di mana $\mathcal{I}$ merepresentasikan *Identification* (misalnya global asset ID menurut IEC 61449), $\mathcal{S}$ adalah himpunan *Submodels*, $\mathcal{C}$ menyatakan *Capabilities*, $\mathcal{V}$ adalah *Views* yang memproyeksikan subset informasi sesuai peran pengguna, dan $\mathcal{T}$ adalah *Event-driven data timestamps*. Cavalieri et al. (2024) menekankan bahwa untuk sistem komunikasi 5G, himpunan submodel minimal harus mencakup:

$$
\mathcal{S} = \{S_{\text{NRM}}, S_{\text{QoS}}, S_{\text{Topology}}, S_{\text{Security}}\}
$$

di mana $S_{\text{NRM}}$ berisi *Network Resource Model* sesuai 3GPP Information Model (NRM), $S_{\text{QoS}}$ memuat parameter *throughput*, *latency*, *jitter*, dan *packet loss*, $S_{\text{Topology}}$ mendeskripsikan topologi sel, beam, dan *gNodeB*, serta $S_{\text{Security}}$ memuat sertifikat dan *access policy*.

### 2.2 Model Latensi End-to-End URLLC

Persyaratan URLLC pada 5G NR mensyaratkan latensi *user-plane* sebesar 1 ms dengan reliabilitas 99,999%. Latensi end-to-end untuk satu paket data dalam arsitektur 5G dapat dimodelkan sebagai:

$$
L_{\text{e2e}} = L_{\text{UE}} + L_{\text{radio}} + L_{\text{transport}} + L_{\text{core}} + L_{\text{MEC}}
$$

di mana masing-masing komponen merupakan variabel acak. Cavalieri et al. (2024) mengusulkan agar setiap submodel AAS menyimpan distribusi probabilitas empiris dari komponen latensi ini, misalnya:

$$
L_{\text{radio}} \sim \mathcal{N}(\mu_L, \sigma_L^2)
$$

dengan $\mu_L$ adalah *mean latency* (dalam milidetik) dan $\sigma_L^2$ varians yang diestimasi dari pengukuran *probe* berkala. Probabilitas terpenuhinya *Service Level Agreement* (SLA) latensi adalah:

$$
P(L_{\text{e2e}} \leq L_{\text{SLA}}) = \int_{0}^{L_{\text{SLA}}} f_{L_{\text{e2e}}}(l)\, dl = \Phi\!\left(\frac{L_{\text{SLA}} - \mu_{\text{e2e}}}{\sigma_{\text{e2e}}}\right)
$$

di mana $\Phi(\cdot)$ adalah fungsi distribusi kumulatif normal standar. Persamaan ini menjadi dasar untuk menghitung *availability* jaringan dalam submodel $S_{\text{QoS}}$ AAS.

### 2.3 Throughput Agregat dan Kapasitas Shannon

Kapasitas unjuk-kerja (*throughput*) agregat dari sebuah *gNodeB* 5G pada *bandwidth* sistem $B$ (dalam Hz) dapat didekripsikan oleh formula kapasitas Shannon yang dimodifikasi dengan *spectral efficiency* riil:

$$
C_{\text{agg}} = B \cdot \eta \cdot N_{\text{cell}} \cdot \sum_{u=1}^{U} \log_2\!\left(1 + \text{SINR}_u\right)
$$

di mana $\eta$ adalah faktor implementasi (*implementation factor*, tipikal 0,4–0,7 untuk Release 15 NR), $N_{\text{cell}}$ adalah jumlah *sector cells*, dan $\text{SINR}_u$ adalah *Signal-to-Interference-plus-Noise Ratio* untuk pengguna $u$. Dalam konteks AAS digital twin, throughput riil yang terukur $C_{\text{measured}}$ dibandingkan dengan kapasitas teoretis melalui *utilization metric*:

$$
\rho = \frac{C_{\text{measured}}}{C_{\text{agg}}}
$$

Nilai $\rho$ ini selanjutnya dipublikasikan sebagai properti dari submodel $S_{\text{NRM}}$ agar aplikasi hilir (misalnya penjadwal AGV) dapat melakukan alokasi sumber daya secara adaptif.

### 2.4 State Vector dan Sinkronisasi Digital Twin

Digital twin dari aset 5G mempertahankan *state vector* yang merepresentasikan kondisi operasional pada waktu $t$. Model state-space diskret dapat ditulis sebagai:

$$
\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k, \qquad \mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k
$$

di mana $\mathbf{x}_k \in \mathbb{R}^n$ adalah *state vector* (misalnya jumlah *connected UEs*, *buffer occupancy*, *resource block utilization*), $\mathbf{u}_k$ adalah vektor input (jadwal alokasi resource block), $\mathbf{y}_k$ adalah keluaran terukur (throughput, latensi), sementara $\mathbf{w}_k$ dan $\mathbf{v}_k$ adalah *process noise* dan *measurement noise* dengan kovarians $\mathbf{Q}$ dan $\mathbf{R}$. Estimasi state optimal diberikan oleh Kalman Filter:

$$
\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k(\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1})
$$

dengan gain Kalman $\mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{C}^\top(\mathbf{C}\mathbf{P}_{k|k-1}\mathbf{C}^\top + \mathbf{R})^{-1}$. De Marchi et al. (2022) menerapkan pendekatan serupa untuk memodelkan status modul transfer rakitan siber-fisik sehingga kondisi plant fisik dan representasi digital tetap terkonsolidasi.

### 2.5 Indikator Kinerja Utama (KPI) Layanan

KPI utama yang digunakan untuk menilai kualitas digital twin berbasis AAS, sesuai Cavalieri et al. (2024), dapat diagregasikan menjadi *Composite Digital Twin Health Index* (CDTHI):

$$
\text{CDTHI} = w_1 \cdot A + w_2 \cdot (1 - \overline{L}_{\text{norm}}) + w_3 \cdot \rho_{\text{usage}} + w_4 \cdot (1 - \delta_{\text{sync}})
$$

di mana $A$ adalah availability jaringan, $\overline{L}_{\text{norm}}$ adalah latensi ternormalisasi terhadap batas SLA, $\rho_{\text{usage}}$ adalah tingkat pemanfaatan sumber daya, $\delta_{\text{sync}}$ adalah deviasi sinkronisasi waktu antara AAS dan fisik, dan $\sum_i w_i = 1$ merupakan bobot yang ditetapkan oleh arsitek sistem.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS digital twin untuk sistem 5G mengikuti alur rekayasa sistematis yang dapat diabstraksikan menjadi Diagram Alir **ENABLE-AAS** (*Establish Network, Author Submodels, Bind Live Data, Expose Endpoints, Audit Lifecycle*):

### Tahap 1 — Pemodelan Aset 5G (Authoring)
Langkah pertama adalah membangun *AAS Package* untuk setiap entitas jaringan: *gNodeB*, *AMF/SMF/UPF*, *MEC host*, dan *UE* grup. Paket ini dideskripsikan dalam format AASX (file `.aasx` berbasis OPC UA Companion Specification). Submodel yang wajib ada sesuai Cavalieri et al. (2024) adalah: *Identification*, *Documentation*, *Capability*, *Communication*, *NetworkResource*, *ServiceQuality*, dan *Security*.

### Tahap 2 — Akuisisi Data via *Service-Based Interface*
AAS digital twin diekspos melalui *AAS Server* yang mengimplementasikan protokol *AAS Repository Service* (bagian dari spesifikasi *AAS API*). Antarmuka Representational State Transfer (REST) digunakan untuk pertukaran data, dengan format *Submodel Element Collection* dan *Property* yang dapat diakses melalui *Uniform Resource Identifier* (URI) berbasis *IRI* (Internationalized Resource Identifier).

### Tahap 3 — Pengikatan Data Fisik (*Data Binding*)
AAS Server dikoneksikan dengan sumber data *real-time* melalui adaptor — misalnya *OPC UA Adapter* untuk data PLC dan *SNMP/NetConf Adapter* untuk elemen 5G. Adapter mengubah *push* telemetry menjadi *update* terhadap elemen submodel. *Update interval* $\Delta t$ dipilih berdasarkan persyaratan aplikasi: 1 ms untuk kendali motion, 10–100 ms untuk monitoring QoS.

### Tahap 4 — Orkestrasi & *Closed-Loop Control*
Digital twin tidak hanya bersifat pasif; menurut Cavalieri et al. (2024), AAS dilengkapi dengan kemampuan *command* yang dikirim ke *Network Slice Management Function* (NSMF.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
