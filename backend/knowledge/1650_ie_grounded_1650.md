# 1650 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G pada Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 di lingkungan manufaktur modern menuntut integrasi erat antara aset fisik, jaringan komunikasi nirkabel generasi kelima (5G), dan representasi digitalnya di tingkat *shop floor*. Salah satu hambatan struktural yang diidentifikasi oleh Cavalieri, Di Natale, dan Gambadoro (2024) dalam artikel *"Asset Administration Shell Digital Twin of 5G Communication System"* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) adalah ketiadaan kerangka kerja interoperable yang mampu memodelkan perangkat jaringan 5G — termasuk *gNodeB*, unit pemrosesan baseband (BBU), *centralized unit* (CU), *distributed unit* (DU), dan *radio unit* (RU) — sebagai aset rekayasa yang dapat ditukar informasinya secara semantik dengan lini produksi. Sebelumnya, De Marchi, Rojas, dan Mark (2022) (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) telah menunjukkan bahwa arsitektur *digital twin* untuk *cyber-physical assembly transfer system* memerlukan tiga pilar: (i) model aset yang dinormalisasi, (ii) protokol komunikasi deterministik, dan (iii) kemampuan *real-time* untuk sinkronisasi status fisik dan virtual.

Urgensi ekonomi dari adopsi AAS (Asset Administration Shell) untuk sistem 5G sangat jelas. Investasi global pada *private 5G network* diestimasi mencapai USD 14,7 miliar pada tahun 2028 (GSMA Intelligence), namun *Total Cost of Ownership* (TCO) komunikasi nirkabel di pabrik dilaporkan meningkat 18–25% karena fragmentasi protokol dan ketiadaan manajemen aset jaringan yang terstandarisasi. Lebih lanjut, kasus penggunaan *Ultra-Reliable Low-Latency Communication* (URLLC) untuk kontrol robotik, *Augmented Reality* pemeliharaan, dan *autonomous mobile robot* (AMR) mensyaratkan latensi end-to-end kurang dari 5 ms dengan keandalan 99,999% (5 nines). Tanpa *digital twin* AAS, insinyur pabrik tidak memiliki visibilitas semantik terhadap *health*, konfigurasi, dan degradasi kinerja elemen 5G yang menjadi tulang punggung *cyber-physical production system* (CPPS).

Konteks operasional ini semakin kritis ketika pabrik mulai mengadopsi pola *plug-and-produce*, di mana lini produksi direkonfigurasi secara dinamis mengikuti pesanan dengan *mix* rendah dan volume sedang (*batch size of one*). Dalam skenario tersebut, perpindahan *radio resources*, *network slice*, dan kebijakan *Quality of Service* (QoS) harus dilakukan secara otomatis dan dapat diaudit — sesuatu yang mustahil tanpa representasi digital yang konsisten. Paper Cavalieri et al. (2024) menjawab kebutuhan ini dengan mengusulkan adopsi AAS — standar formal yang dikembangkan oleh Plattform Industrie 4.0 dan kini diadopsi IEC sebagai IEC PAS 63286 — sebagai *metamodel* tunggal untuk merepresentasikan elemen 5G, sehingga setiap base station, *core network function*, dan *edge node* memiliki "paspor digital" yang dapat dibaca lintas-vendor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formalisme Asset Administration Shell

AAS didefinisikan secara formal oleh spesifikasi *Details of the Asset Administration Shell — Part 1: The exchange of information between partners in the value chain* (Plattform Industrie 4.0) sebagai fungsi pemetaan antara entitas aset fisik $a_i \in \mathcal{A}$ dan representasi digitalnya $\hat{a}_i \in \hat{\mathcal{A}}$:

$$\hat{a}_i = f_{AAS}(a_i, t) = \langle I_i, S_i, P_i, O_i, E_i \rangle$$

di mana:
- $I_i$ = *Identification* (misalnya *Global Asset Identifier* / *International Data Space Connector ID*)
- $S_i$ = *Submodels* (kumpulan submodel tematik seperti *Communication*, *Diagnostics*, *Capability*)
- $P_i$ = *Properties* (atribut statis seperti nomor seri, kalibrasi)
- $O_i$ = *Operations* (fungsi *invokable* seperti `reconfigureSlice()`, `readKPI()`)
- $E_i$ = *Events* (notifikasi asinkron seperti *link failure*, *throughput degradation*)

Cavalieri et al. (2024) memperluas formalisme ini untuk konteks 5G dengan mendefinisikan himpunan submodel khusus $\mathcal{S}_{5G} = \{S_{radio}, S_{transport}, S_{core}, S_{slice}, S_{QoS}\}$. Setiap submodel $S_j$ direpresentasikan sebagai graf RDF dengan skema $G_j = (V_j, E_j)$ yang elemen-elemennya sesuai dengan kelas ontologi AAS yang didefinisikan dalam *AAS Metamodel* versi 3.0.

### 2.2 Model Latensi End-to-End untuk URLLC

Untuk kasus penggunaan *closed-loop control* pada sistem transfer yang dikaji De Marchi et al. (2022), latensi end-to-end sistem *cyber-physical* yang melewati jaringan 5G dapat dimodelkan sebagai:

$$T_{e2e} = T_{sense} + T_{encode} + T_{access} + T_{backhaul} + T_{core} + T_{compute} + T_{actuate}$$

Setiap komponen bersifat *random variable* dengan distribusi yang khas. Untuk *uplink* URLLC dengan slot durasi $\tau_s = 0{,}125$ ms (konfigurasi *numerology* $\mu=3$, *subcarrier spacing* 120 kHz), Cavalieri et al. (2024) mengasumsikan:

$$T_{access} \sim \text{LogNormal}(\mu_T, \sigma_T^2)$$

dengan estimasi parameter $\mu_T = \ln(\bar{T}) - \frac{\sigma_T^2}{2}$ dan *mean* $\bar{T} = 1{,}5$ ms untuk skenario *line-of-sight* (LOS) pada pabrik dengan *path loss* rata-rata 92 dB. Probabilitas terpenuhinya constraint latensi URLLC ($\leq 5$ ms) adalah:

$$P(T_{e2e} \leq 5) = \int_0^5 f_{T_{e2e}}(t)\, dt = \Phi\!\left(\frac{\ln 5 - \mu_{e2e}}{\sigma_{e2e}}\right)$$

di mana $\Phi(\cdot)$ adalah fungsi distribusi kumulatif normal standar.

### 2.3 Model Keandalan dan *Packet Error Rate*

Standar 3GPP TS 22.261 mendefinisikan keandalan URLLC sebagai:

$$R(t) = P(\text{tidak ada paket hilang dalam interval } t) = e^{-\lambda t}$$

dengan *failure rate* $\lambda$ yang terkait dengan *Block Error Rate* (BLER) menurut:

$$\lambda = -\frac{\ln(1 - \text{BLER})}{\tau_s}$$

Untuk target keandalan $R(1\,\text{s}) \geq 0{,}99999$, diperlukan:

$$\lambda \leq -\ln(0{,}99999) \approx 10^{-5}\,\text{failures/s}$$

Jika BLER target adalah $10^{-5}$, maka:

$$\lambda = -\frac{\ln(1 - 10^{-5})}{0{,}125 \times 10^{-3}} = \frac{10^{-5}}{0{,}125 \times 10^{-3}} = 0{,}08\,\text{s}^{-1}$$

### 2.4 Throughput *Network Slice*

Untuk mendukung *digital twin* yang mengirim telemetri setiap $\Delta t = 100$ ms dengan ukuran paket $L_p$ byte, *throughput* minimum yang dibutuhkan *slice* adalah:

$$T_{slice} = \frac{L_p}{\Delta t} \cdot N_{