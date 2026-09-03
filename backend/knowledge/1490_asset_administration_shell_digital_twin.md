# 1490 — Integrasi Asset Administration Shell (AAS) Digital Twin dengan Sistem Komunikasi 5G untuk Rekayasa Sistem Produksi Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 (I4.0) menuntut integrasi vertikal dan horizontal pada lantai produksi melalui digitalisasi aset fisik menjadi representasi virtual yang interoperabel. Dua tantangan struktural mendominasi diskusi ilmiah kontemporer: pertama, **kurangnya interoperabilitas semantik** antar-vendor terhadap deskripsi aset industri; kedua, **fragmentasi arsitektur komunikasi** pada sistem cyber-physical production systems (CPPS) yang mengandalkan protokol proprietary. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* yang dipublikasikan di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menjawab tantangan pertama dengan mengadopsi kerangka **Asset Administration Shell (AAS)** — standar inti dari arsitektur referensi *Reference Architecture Model Industrie 4.0 (RAMI 4.0)* yang dikembangkan oleh Plattform Industrie 4.0 dan telah diadopsi sebagai IEC 63278 series. AAS berperan sebagai *digital nameplate* dan *digital typeplate* yang menyediakan interoperabilitas melalui submodel terstandarisasi menggunakan format XML (AASX), JSON (AASJSON), atau bentuk RDF. Ketiga penulis tersebut secara khusus memetakan elemen jaringan 5G — *gNodeB*, *5G Core (5GC)*, *User Equipment (UE)*, dan *User Plane Function (UPF)* — ke dalam submodel AAS yang dapat diakses melalui protokol HTTP/REST, OPC UA over MQTT, atau gRPC.

Konteks operasional yang melatarbelakangi riset ini adalah **kritisnya dependensi jaringan komunikasi nirkabel generasi kelima (5G) terhadap performansi lini produksi modern**. Skenario URLLC (*Ultra-Reliable Low-Latency Communication*) pada 5G menjanjikan latensi *user-plane* sebesar $\leq 1$ ms dengan reliabilitas $99{,}999\%$ (5 nines) untuk aplikasi kendali loop tertutup industri. Namun, perancang sistem industri masih menghadapi *trade-off* antara *coverage*, *capacity*, dan *determinism* — apalagi integrasi AAS dengan 5G bukan sekadar persoalan konektivitas, melainkan masalah **sinkronisasi state** antara aset fisik dan representasi virtualnya. De Marchi, Rojas, dan Mark (2022) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi kerangka tersebut dengan mengusulkan arsitektur *digital twin* untuk *cyber-physical assembly transfer system* — sebuah *conveyor–robot–gripper* terintegrasi yang menjadi unit fungsional paling representatif pada lini perakitan otomotif, elektronik, dan farmasi. Urgensi ekonominya signifikan: menurut studi-studi referensi yang dirujuk komunitas I4.0, downtime lini perakitan yang tidak terdeteksi selama $\geq 15$ menit dapat menimbulkan kerugian produksi antara €8.000–€40.000 per kejadian pada fasilitas manufaktur kelas menengah-Eropa, menjadikan digital twin dengan visibility *real-time* bukan lagi investasi opsional melainkan *mission-critical infrastructure*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sinkronisasi State Digital Twin

Digital twin yang diusulkan Cavalieri et al. (2024) beroperasi sebagai *state-based mirror* dari jaringan 5G. Formulasi state-space untuk entitas fisik $\mathcal{P}$ dan virtual $\mathcal{V}$ diberikan oleh:

$$x_p(t+1) = A_p x_p(t) + B_p u(t) + w_p(t)$$
$$x_v(t+1) = A_v x_v(t) + B_v \hat{u}(t) + w_v(t)$$

dengan $x_p, x_v \in \mathbb{R}^n$ adalah vektor状态 (state) fisik dan virtual, $u(t)$ adalah input kendali, $\hat{u}(t)$ adalah input yang diterima virtual melalui kanal komunikasi, serta $w_p, w_v \sim \mathcal{N}(0, Q)$ adalah *process noise*. **Error sinkronisasi** didefinisikan sebagai norma Euclidean:

$$E_{sync}(t) = \|x_p(t) - x_v(t)\|_2 = \sqrt{\sum_{i=1}^{n}(x_{p,i}(t) - x_{v,i}(t))^2}$$

Sistem dianggap *synchronized* ketika $E_{sync}(t) \leq \varepsilon_{threshold}$, dengan $\varepsilon_{threshold}$ ditentukan dari toleransi aplikasi (misalnya $\varepsilon \leq 0{,}05$ untuk kendali torsi robot).

### 2.2 Model Latensi End-to-End 5G URLLC

Untuk sistem kendali industri yang berjalan di atas 5G, total latensi *user-plane* end-to-end dimodelkan sebagai:

$$L_{E2E} = L_{UE \to gNB} + L_{gNB \rightarrow UPF} + L_{UPF \rightarrow AAS} + L_{AAS \rightarrow MES}$$

dengan distribusi tipikal (3GPP TR 38.913):
- $L_{UE \to gNB}$: latensi akses radio, $\leq 0{,}5$ ms pada *subcarrier spacing* 30 kHz
- $L_{gNB \rightarrow UPF}$: latensi transport (F1/Uu interface), $\leq 1$ ms
- $L_{UPF \rightarrow AAS}$: latensi *Multi-access Edge Computing* (MEC), $\leq 2$ ms
- $L_{AAS \rightarrow MES}$: latensi integrasi ke *Manufacturing Execution System*, $\leq 3$ ms

### 2.3 Model Reliabilitas dan Packet Error Rate

Reliabilitas kumulatif dalam window transmisi $N$ paket didefinisikan sebagai probabilitas seluruh paket berhasil dikirim:

$$R(N) = \prod_{i=1}^{N}\left(1 - P_{e,i}\right)$$

dengan $P_{e,i}$ adalah *block error rate* (BLER) paket ke-$i$. Untuk BLER konstan $p$, reliabilitas menjadi $R(N) = (1-p)^N$. Spesifikasi URLLC untuk kendali robotik mengharuskan $R(32) \geq 1 - 10^{-5}$, sehingga BLER per paket harus memenuhi $p \leq 1 - (1-10^{-5})^{1/32} \approx 3{,}125 \times 10^{-7}$.

### 2.4 Model Throughput dan Bandwidth AAS

Throughput efektif *submodel* AAS yang bertukar *property* berukuran $B$ byte dalam interval sinkronisasi $T_s$ detik:

$$\Theta_{AAS} = \frac{8B}{T_s} \quad \text{[bit/s]}$$

Untuk *digital twin* 5G yang dilaporkan Cavalieri et al. (2024), sebuah *gNodeB* tipikal memiliki sekitar 12 *property* aktif dengan payload rata-rata 256 byte per siklus $T_s = 10$ ms, sehingga $\Theta_{AAS} \approx 204{,}8$ kbit/s per gNodeB.

### 2.5 Model Antrian M/M/1 untuk Assembly Transfer

De Marchi, Rojas, dan Mark (2022) memodelkan lini transfer sebagai sistem antrian M/M/1 dengan laju kedatangan Poisson $\lambda$ dan laju layanan $\mu$. Utilisasi server:

$$\rho = \frac{\lambda}{\mu}, \quad \rho < 1$$

Waktu tinggal rata-rata di sistem (rumus Little yang diperluas):

$$W_q = \frac{\rho}{\mu(1-\rho)} = \frac{\lambda}{\mu(\mu-\lambda)}$$

Untuk sistem multi-stage dengan $k$ workstation serial:

$$CT = \sum_{i=1}^{k}\left(\frac{1}{\mu_i - \lambda}\right) + T_{transfer,i}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi arsitektur yang divalidasi Cavalieri et al. (2024) mengikuti **lima fase prosedural** yang selaras dengan *IEC 63278* (AAS) dan *IEC 62443* (keamanan siber industri):

**Fase 1 — Identifikasi Aset dan Pemetaan Submodel.**
Inventarisasi seluruh elemen jaringan 5G: *gNodeB*, *AMF/SMF/UPF*, *MEC host*, dan *UE* (sensor/aktuator industri). Tiap entitas dipetakan ke *IdentifiableElement* AAS dengan *global asset id* berformat URI sesuai *IRDI* (International Registration Data Identifier).

**Fase 2 — Konstruksi Submodel Template.**
Setiap kelas aset diinstansiasi dari *SubmodelTemplate* menggunakan *AASX Package Explorer* atau *BaSyx* SDK. Contoh submodel yang relevan:

| Submodel | Kardinalitas Properti | Sumber Data |
|---|---|---|
| *Identification* | 4 | *Nameplate* aset |
| *5GCommunicationCapabilities* | 8 | *gNodeB* configuration |
| *OperationalData* | 12 | Telemetri *real-time* via MQTT |
| *DiagnosticData* | 6 | *Alarm logs*, BLER history |

**Fase 3 — Orquestrasi Protokol Komunikasi.**
AAS server di-*deploy* pada *edge cloud* dengan protokol komunikasi utama: (a) **OPC UA over MQTT** untuk lalu lintas *publish–subscribe* skala besar; (b) **HTTP/REST** untuk *on-demand query* submodel; (c) **gRPC** untuk streaming telemetri latensi-kritis. Pemilihan protokol mengikuti *trade-off*:

$$J_{protokol} = \alpha \cdot L_{proto} + \beta \cdot C_{proto} + \gamma \cdot S_{proto}$$

dengan $L$ = latensi tipikal, $C$ = *computational overhead* pada UE, $S$ = skalabilitas, dan $\alpha+\beta+\gamma=1$.

**Fase 4 — Sinkronisasi dan Validasi.**
Digital twin dibandingkan dengan aset fisik setiap $T_s = 10$ ms menggunakan uji *goodness-of-fit* RMSE. Bila $E_{sync} > \varepsilon$, sistem memicu *re-synchronization protocol* berbasis *sequence number* dan *timestamp* IEEE 1588.

**F