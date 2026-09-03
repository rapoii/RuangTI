# 2322 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. SciTePress. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. SciTePress. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses yang tengah berlangsung di bawah payung **Industri 4.0** menuntut konvergensi tiga pilar teknologi: *cyber-physical systems* (CPS), *Internet of Things* (IoT), dan konektivitas ultra-rendah-latensi yang hanya mampu disediakan oleh jaringan seluler generasi kelima (5G). Dalam konteks ini, paradigma *Digital Twin* (DT) berevolusi dari sekadar representasi visual tiga dimensi menjadi repositori semantik formal yang mampu mendeskripsikan perilaku, status, dan interoperabilitas aset industri sepanjang siklus hidupnya. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang diterbitkan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* ([DOI: 10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan implementasi *Digital Twin* dengan kerangka **Asset Administration Shell (AAS)** — standar resmi dari *Platform Industrie 4.0* dan *International Electrotechnical Commission* (IEC 63278) — yang diterapkan secara spesifik pada subsistem komunikasi 5G di dalam pabrik. Urgensi riset ini lahir dari kenyataan bahwa sebagian besar implementasi DT di literatur masih bersifat *proprietary*, sehingga menghambat interoperabilitas lintas-vendor dan lintas-pabrik.

Kontribusi paper Cavalieri et al. (2024) menjadi signifikan karena menyediakan bukti konsep (*proof of concept*) bagaimana AAS dapat memodelkan bukan hanya aset fisik (misalnya robot, CNC, atau PLC), tetapi juga *infrastruktur telekomunikasi* itu sendiri — termasuk *base station*, *core network*, dan *network slice* — sebagai entitas DT yang dapat di-*query*, di-*invoke* operasinya, dan diamati statusnya secara real-time. Pendekatan ini melengkapi pekerjaan De Marchi, Rojas, dan Mark (2022) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* ([DOI: 10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), yang membangun arsitektur DT untuk *cyber-physical assembly transfer system* dan menunjukkan pentingnya lapisan abstraksi semantik untuk mengoordinasikan pergerakan material antar-stasiun produksi. Kedua makalah ini secara kolektif menegakkan tesis bahwa DT bukan lagi pelengkap, melainkan infrastruktur kritis yang memungkinkan *closed-loop control* antara dunia fisik dan digital. Secara ekonomis, adopsi AAS-5G DT diestimasi dapat menurunkan *mean time to repair* (MTTR) sebesar 30–45% melalui prediksi anomali jaringan, sementara secara teknis membuka peluang *over-the-air* (OTA) provisioning dan *self-configuration* pada lantai produksi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Metamodel Asset Administration Shell

AAS mendefinisikan sebuah *digital nameplate* untuk setiap aset industri melalui struktur **Submodel** yang masing-masing terdiri atas sekumpulan **SubmodelElement** (Property, Operation, Event, Capability, dll.). Secara matematis, sebuah AAS untuk entitas *jaringan 5G* dapat diformulasikan sebagai tuple:

$$ \mathcal{A} = (I_{\mathcal{A}}, S_{\mathcal{A}}, C_{\mathcal{A}}, V_{\mathcal{A}}) $$

di mana $I_{\mathcal{A}}$ adalah *Identification* (Global Asset ID berbasis IRDI), $S_{\mathcal{A}} = \{s_1, s_2, \ldots, s_n\}$ adalah himpunan submodel, $C_{\mathcal{A}}$ adalah *Communication endpoints*, dan $V_{\mathcal{A}}$ adalah *Version* model. Setiap submodel $s_i$ mengandung properti:

$$ s_i = (id, semanticId, \{e_{i,1}, e_{i,2}, \ldots, e_{i,k_i}\}) $$

Untuk jaringan 5G, submodel esensial yang digunakan Cavalieri et al. (2024) mencakup: `Nameplate`, `OperationalData`, `NetworkSliceManagement`, `QoSProfile`, dan `DiagnosticsLog`.

### 2.2 Model Kanal dan Kapasitas 5G

Kinerja tautan radio 5G mengikuti persamaan kapasitas Shannon yang disesuaikan dengan skenario *industrial indoor*:

$$ C = B \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 B + I}\right) \quad [\text{bit/s}] $$

dengan $B$ adalah bandwidth kanal (untuk 5G NR FR1: hingga 100 MHz per *carrier component*, dengan *carrier aggregation* mencapai 800 MHz), $P_t$ daya transmisi, $G_t$ dan $G_r$ gain antena, $N_0$ densitas noise, dan $I$ interferensi. Untuk *Ultra-Reliable Low-Latency Communication* (URLLC), parameter **Block Error Rate** (BLER) dibatasi pada $10^{-5}$ dengan target latensi *user-plane* satu arah sebesar $L_{URLLC} \leq 1$ ms.

### 2.3 Model Latensi End-to-End

Latensi total transmisi data antara sensor lantai-pabrik dan *Digital Twin server* melalui jaringan 5G merupakan komposisi empat komponen:

$$ L_{\text{e2e}} = L_{\text{proc}} + L_{\text{queue}} + L_{\text{trans}} + L_{\text{prop}} $$

$$ L_{\text{e2e}} = \underbrace{\frac{1}{\mu - \lambda}}_{\text{queueing (M/M/1)}} + \underbrace{\frac{S}{B}}_{\text{transmission}} + \underbrace{\frac{d}{c} + \tau_{\text{core}}}_{\text{propagation+core}} $$

di mana $\lambda$ adalah laju kedatangan paket, $\mu$ adalah laju pelayanan, $S$ ukuran paket (bytes), $B$ bandwidth efektif, $d$ jarak fisik, $c$ kecepatan cahaya dalam介质, dan $\tau_{\text{core}}$ latensi pada *5G core* (termasuk *User Plane Function*). Untuk skenario kontrol motion-control real-time, target kompositnya:

$$ L_{\text{e2e}} + J_{\text{jitter}} \leq L_{\text{budget}}, \quad J_{\text{jitter}} = \sigma(L_{\text{e2e}}) $$

### 2.4 Sinkronisasi Digital Twin

Tingkat kesegaran (*freshness*) data antara aset fisik dan bayangan digitalnya diukur melalui **Age of Information (AoI)**:

$$ \Delta_{\text{AoI}}(t) = t - u(t), \quad u(t) = \max\{\tau : \text{update received at } \tau \leq t\} $$

Untuk aplikasi *closed-loop*, batasannya $\Delta_{\text{AoI}} \leq T_{\text{cycle}}$ dengan $T_{\text{cycle}}$ adalah perioda kontrol (umumnya 1–10 ms untuk motion control). Cavalieri et al. (2024) memanfaatkan *Event* elemen AAS untuk memicu pembaruan DT secara *push-based* ketika $\Delta_{\text{AoI}}$ melampaui ambang batas, sehingga konsumsi bandwidth AAS-API dapat dioptimasi.

### 2.5 Model Reliabilitas Jaringan

Reliabilitas sesi komunikasi DT mengikuti proses Poisson dengan laju kegagalan $\lambda_f$:

$$ R(t) = e^{-\lambda_f t}, \quad \text{MTBF} = \frac{1}{\lambda_f} $$

Untuk URLLC dengan target reliabilitas $R(t) = 1 - 10^{-5}$ selama periode observasi 1 ms, diperlukan *diversity gain* melalui *packet duplication* pada *dual connectivity* (DC) 4G/5G.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Keseluruhan

Arsitektur yang diajukan mengikuti referensi model RAMI 4.0 (Reference Architectural Model Industrie 4.0), dengan lapisan-lapisan:

1. **Lapisan Aset (Asset Layer):** *5G base station (gNB)*, *User Equipment* (sensor/aktuator), *5G Core* (AMF, SMF, UPF).
2. **Lapisan Integrasi (Integration Layer):** *AAS Server* (mengacu pada implementasi *BaSyx* dari Fraunhofer), registri AAS berbasis HTTP/REST, dan broker MQTT untuk *event-based* push.
3. **Lapisan Representasi (Information Layer):** *Submodel* AAS, file `.aasx` (berbasis OPC UA XML), dan repositori *Asset Administration Shell Repository*.
4. **Lapisan Fungsional (Functional Layer):** *DT services* untuk prediksi, optimasi, dan *root-cause analysis*.
5. **Lapisan Bisnis (Business Layer):** *Dashboard*, KPI monitoring, dan integrasi ERP/MES.

### 3.2 SOP Implementasi AAS-5G Digital Twin

Berdasarkan metodologi Cavalieri et al. (2024), prosedur operasional standar untuk implementasi mengikuti delapan langkah berikut:

| Langkah | Aktivitas | Standar Acuan | Deliverable |
|---------|-----------|----------------|-------------|
| 1 | **Identifikasi Aset** — inventarisasi elemen 5G (gNB, CU, DU, RU, core) dan penetapan `globalAssetId` berbasis IRDI | IEC 63278-1 | *Asset nameplate*