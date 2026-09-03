# 2642 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Implementasi Digital Twin untuk Infrastruktur Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur memasuki fase baru dengan adopsi massif teknologi komunikasi nirkabel generasi kelima (5G) sebagai tulang punggung *cyber-physical production system* (CPPS). Konteks ini diuraikan secara sistematis oleh Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) dalam makalah yang dipublikasikan di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. Ketiga penulis tersebut menyoroti urgensi integrasi antara *Asset Administration Shell* (AAS) — yang distandardisasi melalui spesifikasi DIN SPEC 91345 dan kerangka acuan *Reference Architecture Model Industry 4.0* (RAMI 4.0) — dengan arsitektur 5G berbasis layanan (*Service-Based Architecture*/SBA) untuk membangun digital twin yang interoprabel, terdistribusi, dan real-time. AAS berfungsi sebagai representasi digital standar dari sebuah *asset* industri, terdiri atas *submodel* terstruktur yang mendeskripsikan aspek identifikasi, kemampuan (*capabilities*), *nameplate*, status operasional, dokumentasi teknis, dan historis pemeliharaan (Cavalieri et al., 2024).

Kebutuhan industri terhadap komunikasi ultra-reliabel latensi rendah (*Ultra-Reliable Low-Latency Communication*/URLLC) meningkat tajam seiring dengan semakin kompleksnya lini produksi otomatis. Untuk kasus penggunaan *closed-loop control* pada robot kolaboratif (*cobot*), *augmented reality* pemeliharaan, dan sistem transfer perakitan yang dibahas oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*, latensi end-to-end harus dijaga di bawah 5 milidetik. Tanpa arsitektur digital twin yang sinkron dengan cepat, deviasi antara kondisi fisik (*physical asset*) dan representasi digitalnya akan menyebabkan keputusan kontrol yang salah dan degradasi kualitas produk. Oleh karena itu, kombinasi AAS + 5G menjadi *enabler* strategis untuk *smart manufacturing*, dan analisis kuantitatif terhadap karakteristik kinerjanya menjadi kebutuhan mendasar bagi insinyur industri masa kini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Latensi End-to-End 5G URLLC

Menurut Cavalieri et al. (2024), komunikasi AAS melalui jaringan 5G harus memenuhi kendala latensi URLLC. Model latensi end-to-end $L_{e2e}$ didefinisikan sebagai:

$$L_{e2e} = T_{TX} + T_{prop} + T_{queue} + T_{proc} + T_{HARQ}$$

di mana $T_{TX}$ adalah waktu transmisi di lapisan fisik, $T_{prop}$ adalah延迟 propagasi, $T_{queue}$ adalah延迟 antrian pada *scheduler*, $T_{proc}$ adalah延迟 pemrosesan di *User Plane Function* (UPF) dan *Access and Mobility Management Function* (AMF), serta $T_{HARQ}$ adalah延迟 retransmisi *Hybrid Automatic Repeat Request*. Untuk slot durasi $T_{slot}$ pada *numerology* 5G NR, parameter $\mu$ (subcarrier spacing), waktu transmisi minimum adalah:

$$T_{TX}^{min} = 2^{\mu} \cdot T_{slot}^{base}, \quad \mu \in \{0,1,2,3,4\}$$

Untuk URLLC tingkat stringent, target reliabilitas adalah $1 - 10^{-5}$ untuk paket 32 byte dalam waktu 1 ms, sebagaimana ditetapkan oleh 3GPP TS 22.261.

### 2.2 Model Kapasitas Kanal dan *Network Slicing*

Kapasitas kanal 5G untuk slice tertentu mengikuti teorema Shannon-Hartley:

$$C_i = B_i \cdot \log_2\left(1 + \text{SINR}_i\right) \quad [\text{bit/s}]$$

di mana $B_i$ adalah bandwidth teralokasi untuk slice ke-$i$, dan $\text{SINR}_i$ adalah *Signal-to-Interference-plus-Noise Ratio*. Cavalieri et al. (2024) menekankan bahwa *network slicing* 5G memungkinkan alokasi sumber daya deterministik untuk lalu lintas AAS. Alokasi bandwidth terbobot untuk $N$ slice mengikuti proporsi:

$$B_i = \frac{w_i}{\sum_{j=1}^{N} w_j} \cdot B_{total}, \quad \text{dengan } \sum_{i=1}^{N} w_i = 1$$

di mana $w_i$ adalah bobot prioritas slice untuk *Submodel Delivery*, *Live Telemetry*, dan *Predictive Maintenance Analytics*.

### 2.3 Model Sinkronisasi Digital Twin

Sinkronisasi antara *physical asset* dan AAS digital twin dimodelkan sebagai fungsi kesalahan status:

$$E_{sync}(t) = \| \mathbf{s}_{phy}(t) - \mathbf{s}_{twin}(t) \|_2 = \sqrt{\sum_{k=1}^{K}\left(s_{phy,k}(t) - s_{twin,k}(t)\right)^2}$$

di mana $\mathbf{s}_{phy}(t)$ adalah vektor状态 fisik dan $\mathbf{s}_{twin}(t)$ adalah vektor state pada twin. Rekonstruksi state melalui filter Kalman diskret:

$$\hat{\mathbf{x}}_{t|t} = \hat{\mathbf{x}}_{t|t-1} + \mathbf{K}_t \left(\mathbf{z}_t - \mathbf{H}\hat{\mathbf{x}}_{t|t-1}\right)$$

dengan Kalman gain:

$$\mathbf{K}_t = \mathbf{P}_{t|t-1}\mathbf{H}^T\left(\mathbf{H}\mathbf{P}_{t|t-1}\mathbf{H}^T + \mathbf{R}\right)^{-1}$$

di mana $\mathbf{P}_{t|t-1}$ adalah kovarians prediksi, $\mathbf{H}$ adalah matriks observasi, dan $\mathbf{R}$ adalah kovarians derau pengukuran. De Marchi, Rojas, dan Mark (2022) menggunakan formulasi serupa untuk menyusun arsitektur digital twin pada sistem transfer perakitan siber-fisik, yang menjamin konsistensi antara status lini produksi fisik dan lapisan virtualisasinya.

### 2.4 Model Ketersediaan Sistem AAS-5G

Ketersediaan (*availability*) komunikasi AAS melalui jaringan 5G私有 dipengaruhi oleh MTBF (*Mean Time Between Failures*) dan MTTR (*Mean Time To Repair*):

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

Untuk sistem misi-kritis seperti kontrol robotik, ketersediaan minimum yang direkomendasikan adalah $A \geq 0{,}99999$ ("five-nines"), yang berarti waktu henti tahunan tidak melebihi $\approx 5{,}26$ menit.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka yang diajukan Cavalieri et al. (2024) dan divalidasi oleh De Marchi et al. (2022), implementasi AAS Digital Twin untuk sistem 5G mengikuti SOP 7-tahap berikut:

**Tahap 1 — *Asset Identification & AAS Modeling*.** Melakukan inventarisasi aset industri menggunakan template AAS *nameplate* sesuai IDTA (Industrial Digital Twin Association). Setiap aset diberikan *global asset identifier* (GAID) dan URI AAS unik, mengikuti *AAS Metamodel* yang berbasis *property*, *operation*, *event*, dan *submodel*.

**Tahap 2 — *Submodel Decomposition*.** Menguraikan setiap aset ke dalam submodel terstandar: *Identification*, *CapabilityDescription*, *OperationalData*, *MaintenanceRecord*, *Documentation*, dan *PredictedBehavior*. Banyaknya submodel rata-rata adalah $M = 6$ hingga $M = 15$ per aset tergantung kompleksitasnya (Cavalieri et al., 2024).

**Tahap 3 — *5G