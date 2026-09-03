# 2690 — Rekayasa Digital Twin Sistem Komunikasi 5G Berbasis Asset Administration Shell (AAS) untuk Lingkungan Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital sektor manufaktur menuju **Industry 4.0** membawa konsekuensi strategis berupa kebutuhan integrasi ketat antara entitas fisik (*cyber-physical systems*), jaringan komunikasi nirkabel ultra-cepat, dan representasi digital aset secara real-time. Dalam konteks ini, komunikasi **5G Private Network** muncul sebagai tulang punggung (*backbone*) konektivitas karena menawarkan tiga pilar layanan yang sebelumnya tidak dapat disediakan secara simultan oleh teknologi nirkabel generasi sebelumnya, yaitu *enhanced Mobile BroadBand* (eMBB), *massive Machine-Type Communications* (mMTC), dan *Ultra-Reliable Low-Latency Communications* (URLLC). Namun, kompleksitas intrinsik jaringan 5G—yang terdiri atas *gNodeB*, *5GC (5G Core)*, *User Plane Function*, *Network Slice*, serta orkestrasi *MEC (Multi-access Edge Computing)*—menuntut adanya model digital yang mampu merepresentasikan perilaku dinamis jaringan tersebut secara akurat untuk kebutuhan monitoring, prediksi kegagalan, dan optimasi kapasitas. Permasalahan ini menjadi fokus utama paper Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), yang mengusulkan penggunaan **Asset Administration Shell (AAS)** sebagai kerangka representasi formal untuk membangun *digital twin* dari sistem komunikasi 5G.

AAS sendiri merupakan spesifikasi standar yang dipromosikan oleh **Plattform Industrie 4.0** dan **Industrial Digital Twin Association (IDTA)**, yang menyediakan model data terstruktur berbasis *submodel* dan antarmuka layanan terstandar (REST/HTTP, OPC UA, MQTT). Pendekatan ini berbeda dengan representasi *digital twin* konvensional yang cenderung *ad-hoc*, monolitik, dan sulit di-*interoperable*-kan antar-vendor. Urgensi ekonomis dari adopsi AAS dalam konteks 5G terletak pada kenyataan bahwa investasi infrastruktur radio seluler privat di lantai pabrik global diproyeksikan tumbuh signifikan, sementara biaya *downtime* komunikasi pada lini produksi otomatis dapat mencapai ratusan ribu Euro per jam pada industri semikonduktor dan otomotif. Oleh karena itu, kemampuan untuk melakukan simulasi *what-if*, deteksi anomali spektrum, serta rekayasa ulang jaringan secara virtual sebelum implementasi fisik menjadi kebutuhan strategis yang tidak dapat dinegosiasikan.

Kontribusi paper Cavalieri dkk. (2024) menjadi semakin relevan ketika ditempatkan berdampingan dengan literatur komplementer yang membahas arsitektur *digital twin* pada sistem *cyber-physical assembly transfer*, sebagaimana diuraikan oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)). Kedua karya ini menunjukkan bahwa tantangan utama bukan lagi pada pembuatan model 3D atau visualisasi geometris aset, melainkan pada formalisasi **status**, **kapabilitas**, dan **interaksi** aset dalam format mesin-ke-mesin yang dapat dibaca secara semantik oleh *Manufacturing Execution System* (MES), *Enterprise Resource Planning* (ERP), maupun *Network Management System* (NMS). Dengan latar belakang ini, modul 2690 dirancang untuk memberikan pemahaman komprehensif tentang integrasi AAS dengan telekomunikasi 5G dalam ranah rekayasa sistem industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kapasitas Kanal 5G

Kinerja dasar suatu tautan radio 5G pada lapisan fisik mengikuti teorema **Shannon-Hartley**, yang menyatakan kapasitas kanal maksimum $C$ (dalam bit/s) sebagai fungsi dari bandwidth $B$ (Hz) dan *Signal-to-Interference-plus-Noise Ratio* (SINR):

$$C = B \cdot \log_2(1 + \text{SINR})$$

dengan SINR didefinisikan sebagai:

$$\text{SINR} = \frac{P_{rx}}{N_0 B + \sum_{i \in \mathcal{I}} P_{i}}$$

di mana $P_{rx}$ adalah daya sinyal penerima, $N_0$ adalah densitas daya noise termal, dan $\sum_{i \in \mathcal{I}} P_{i}$ adalah akumulasi daya interferensi dari kumpulan sel *co-channel* $\mathcal{I}$. Pada jaringan 5G NR (*New Radio*) dengan *numerology* $\mu$, bandwidth efektif per *Resource Block* (RB) adalah $B_{RB} = 12 \cdot 15 \text{ kHz} \cdot 2^{\mu}$, sehingga jumlah RB yang tersedia pada bandwidth kanal total $B_{total}$ menjadi:

$$N_{RB} = \left\lfloor \frac{B_{total}}{B_{RB}} \right\rfloor$$

Dalam konteks industri, parameter $\mu$ umumnya dipilih antara 0 (untuk *eMBB*) hingga 4 (untuk URLLC pada *factory automation*), dengan *slot duration* minimum 0,125 ms pada $\mu=4$.

### 2.2 Model Latensi End-to-End

Latensi end-to-end pada transmisi URLLC dimodelkan sebagai jumlahan beberapa komponen deterministic dan stokastik:

$$T_{e2e} = T_{TX} + T_{prop} + T_{proc} + T_{queue} + T_{retrans}$$

di mana:
- $T_{TX}$ = waktu transmisi frame pada *Physical Uplink Shared Channel* (PUSCH) atau *Physical Downlink Shared Channel* (PDSCH),
- $T_{prop}$ = propagasi ruang bebas $\approx d/c$ untuk jarak $d$ di dalam pabrik ($c$ = kecepatan cahaya),
- $T_{proc}$ = waktu pemrosesan di *gNodeB* dan *UE*,
- $T_{queue}$ = waktu antrian pada buffer *MAC/PHY*,
- $T_{retrans}$ = waktu retransmisi hybrid-ARQ.

Batasan URLLC untuk otomasi pabrik presisi adalah:

$$\Pr[T_{e2e} > T_{max}] \leq 10^{-5}$$

yang merepresentasikan tingkat reliabilitas 99,999% (*five-nines*) terhadap pelanggaran batas latensi maksimum $T_{max}$ yang umumnya ditetapkan antara 1 ms hingga 10 ms tergantung pada aplikasi.

### 2.3 Formalisasi Submodel Asset Administration Shell

Dalam arsitektur AAS, sebuah aset $a$ direpresentasikan sebagai tuple $\mathcal{A} = (I, S, P, C)$ di mana:
- $I$ = *Identification* (identifikasi global AAS via *globally unique identifier*),
- $S = \{s_1, s_2, \ldots, s_n\}$ = himpunan *submodels* dengan kardinalitas $n$,
- $P$ = *Properties* (atribut statis seperti nomor seri, vendor, firmware version),
- $C$ = *Capabilities* (layanan operasional seperti *read*, *write*, *invoke*, *subscribe*).

Setiap submodel $s_k$ memiliki struktur:

$$s_k = (id_k, \text{descriptor}_k, \mathcal{D}_k, \mathcal{M}_k)$$

di mana $\mathcal{D}_k$ adalah himpunan *data elements* dan $\mathcal{M}_k$ adalah himpunan *operations/methods*. *Semantic descriptor* mengikuti *ECL@SS* atau *IEC Common Data Dictionary (CDD)* untuk menjamin interoperabilitas.

### 2.4 Sinkronisasi Status Digital Twin

Selisih status antara aset fisik dan representasi digital twin didefinisikan sebagai norma *state divergence*:

$$\Delta_{\text{sync}}(t) = \| \mathbf{x}_{\text{phys}}(t) - \mathbf{x}_{\text{virt}}(t) \|_2$$

di mana $\mathbf{x}_{\text{phys}}(t) \in \mathbb{R}^m$ adalah vektor status fisik hasil pengukuran sensor, dan $\mathbf{x}_{\text{virt}}(t) \in \mathbb{R}^m$ adalah vektor status yang dihitung oleh model simulasi. Untuk menjaga *fidelity* digital twin dalam toleransi industri, berlaku syarat:

$$\Delta_{\text{sync}}(t) \leq \delta_{\text{max}}, \quad \forall t \in [t_0, t_0 + \tau]$$

dengan $\delta_{\text{max}}$ adalah ambang batas yang bergantung pada aplikasi (misalnya 5% untuk throughput, 0,1 ms untuk latensi kontrol).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa digital twin sistem 5G berbasis AAS mengikuti tahapan sistematis sebagai berikut:

**Tahap 1 — Inventarisasi Aset Jaringan.** Melakukan *asset discovery* terhadap seluruh elemen jaringan 5G di