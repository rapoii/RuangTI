# 2610 — Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor manufaktur dan otomasi industri mensyaratkan interoperabilitas semantik yang ketat antara aset fisik (*Operational Technology*, OT) dengan sistem informasi perusahaan (*Information Technology*, IT). Standar **Asset Administration Shell (AAS)** yang dikembangkan oleh *Plattform Industrie 4.0* dan *Industrial Digital Twin Association (IDTA)* muncul sebagai kerangka referensi utama untuk merepresentasikan properti, kapabilitas, status, dan dokumentasi aset industri secara digital melalui submodel yang terstruktur dan dapat dibaca mesin (*machine-readable*). Dalam konteks ini, karya Cavalieri, Di Natale, dan Gambadoro (2024) yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan arsitektur **AAS Digital Twin** yang secara spesifik memodeli jaringan komunikasi nirkabel **5G** sebagai aset industri — sebuah kontribusi orisinal karena kebanyakan literatur sebelumnya hanya memperlakukan 5G sebagai *enabler* infrastruktur, bukan sebagai *first-class asset* dengan representasi digital twin-nya sendiri.

Urgensi industrial dari pendekatan ini bersumber pada tiga imperatif operasional. Pertama, adopsi 5G di lantai pabrik (*private 5G networks*) yang diproyeksikan mencapai lebih dari USD 14 miliar secara global pada tahun 2030 membutuhkan tata kelola (*governance*) aset jaringan yang sebelumnya hanya diterapkan pada mesin produksi. Kedua, kemampuan **Ultra-Reliable Low Latency Communication (URLLC)** dengan target latensi satu arah sebesar 1 ms dan reliabilitas 99,999% (5 nines) memerlukan *real-time monitoring* parameter Key Performance Indicator (KPI) jaringan seperti latensi, jitter, packet loss, dan throughput. Ketiga, integrasi AAS dengan sistem *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP) memungkinkan *closed-loop control* antara kondisi jaringan dan penjadwalan produksi.

Penelitian pendukung dari De Marchi, Rojas, dan Mark (2022) yang dimuat pada *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) memperkuat landasan ini dengan menyajikan arsitektur *digital twin* untuk **sistem transfer perakitan siber-fisik** (*cyber-physical assembly transfer system*). Sistem transfer merupakan tulang punggung lini perakitan di industri otomotif, elektronik, dan alat berat, di mana sinkronisasi antara *conveyor*, robot, dan sensor *vision* harus terjadi dalam orde milidetik. Integrasi arsitektur De Marchi et al. dengan kerangka AAS Cavalieri et al. memungkinkan perusahaan memiliki *unified semantic layer* yang menjembatani lini produksi fisik dengan infrastruktur komunikasinya — menjawab langsung kebutuhan *vertical integration* dalam model referensi RAMI 4.0.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell

AAS didefinisikan melalui spesifikasi *Specification of the Asset Administration Shell* (IDTA, 2023) yang menggunakan format JSON atau AASX (berbasis OPC UA XML). Sebuah AAS memiliki *identifiable* yang mengandung `id` (berbasis URI/IRI) dan *asset identification* sesuai ISO 23247. Struktur formalnya dapat dinotasikan sebagai:

$$
AAS = \{ id, assetInformation, submodels, views, conceptDictionaries \}
$$

Setiap *submodel* (SM) adalah *representable* yang merepresentasikan aspek spesifik dari aset:

$$
SM_i = \{ id, semanticId, submodelElements, qualifiers \}
$$

Submodel untuk 5G network (Cavalieri et al., 2024) umumnya mencakup *Property*, *MultiLanguageProperty*, *Capability*, dan *Operation* yang merepresentasikan KPI jaringan seperti RSSI, RSRP, throughput.

### 2.2 Pemodelan Latensi URLLC pada 5G

Latensi end-to-end pada jaringan 5G untuk aplikasi URLLC dapat diformulasikan sebagai:

$$
L_{e2e} = L_{prop} + L_{tx} + L_{proc} + L_{queue} + L_{HARQ}
$$

di mana $L_{prop} = d/c$ (propagasi), $L_{tx} = \frac{N_{bits}}{R}$ (transmisi dengan *bit rate* $R$), $L_{proc}$ (pemrosesan protokol), $L_{queue}$ (antrian di *gNodeB*), dan $L_{HARQ}$ (retransmisi *Hybrid Automatic Repeat Request*). Cavalieri et al. (2024) menekankan bahwa *submodel* AAS harus memuat *time series* nilai $L_{e2e}$ untuk keperluan *digital twin synchronization*.

Kapasitas kanal 5G berdasarkan formula Shannon:

$$
C = B \cdot \log_2\left(1 + \frac{P \cdot |h|^2}{N_0 \cdot B}\right) \quad [\text{bit/s}]
$$

di mana $B$ adalah *bandwidth*, $P$ daya transmisi, $|h|^2$ gain kanal Rayleigh fading, dan $N_0$ densitas noise. Untuk *slicing* jaringan industri (*network slicing*), kapasitas yang dialokasikan ke slice URLLC adalah:

$$
C_{URLLC} = \sum_{k=1}^{K} \alpha_k \cdot B_k \cdot \log_2(1 + \text{SINR}_k), \quad \sum_{k=1}^{K} \alpha_k = 1
$$

dengan $\alpha_k$ adalah bobot alokasi sumber daya radio pada *Resource Block* ke-$k$.

### 2.3 Reliabilitas URLLC

Reliabilitas paket pada URLLC didefinisikan sebagai probabilitas paket berhasil diterima dalam batas latensi $L_{max}$:

$$
R_{pkt} = P(L_{e2e} \leq L_{max}) = 1 - \epsilon
$$

Untuk target *five-nines* ($1 - \epsilon = 0{,}99999$), Cavalieri et al. (2024) menunjukkan bahwa *digital twin* harus melakukan *active monitoring* terhadap $\epsilon$ menggunakan *Property* AAS yang diperbarui secara periodik.

### 2.4 Model State-Space untuk Cyber-Physical Assembly Transfer

Mengikuti kerangka De Marchi et al. (2022), sistem transfer perakitan siber-fisik dimodeli dalam *state-space*:

$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{w}(t)
$$
$$
\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) + \mathbf{v}(t)
$$

dengan $\mathbf{x}(t) \in \mathbb{R}^n$ adalah vektor status (posisi konveyor, kecepatan, status gripper), $\mathbf{u}(t) \in \mathbb{R}^m$ adalah sinyal kontrol (PWM motor, aktuator pneumatik), $\mathbf{w}(t)$ dan $\mathbf{v}(t)$ masing-masing adalah *process noise* dan *measurement noise*. Untuk kontrol *tracking* lintasan transfer, hukum kontrol *Linear Quadratic Regulator* (LQR) optimal:

$$
\mathbf{u}^*(t) = -\mathbf{K}\mathbf{x}(t), \quad \mathbf{K} = \mathbf{R}^{-1}\mathbf{B}^T \mathbf{P}
$$

di mana $\mathbf{P}$ adalah solusi *Riccati equation* $\mathbf{A}^T\mathbf{P} + \mathbf{P}\mathbf{A} - \mathbf{P}\mathbf{B}\mathbf{R}^{-1}\mathbf{B}^T\mathbf{P} + \mathbf{Q} = \mathbf{0}$.

## 3. Metodologi Rekayasa.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
