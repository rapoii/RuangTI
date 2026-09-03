# 2946 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur generasi keempat (Industrie 4.0 / I4.0) menuntut interoperatibilitas semantik antar aset fisik di lantai produksi. Salah satu阻碍 utama yang diidentifikasi dalam literatur rekayasa sistem industri adalah fragmentasi protokol komunikasi, inkonsistensi model data, dan kurangnya representasi digital yang dapat dibaca mesin (*machine-readable*) untuk setiap aset. Cavalieri, Di Natale, dan Gambadoro (2024) — yang mempublikasikan karyanya pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* dengan DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822) — mengusulkan penerapan **Asset Administration Shell (AAS)** sebagai tulang punggung digital twin untuk sistem komunikasi 5G. Pendekatan ini menjawab kebutuhan industri akan representasi aset yang terstandarisasi sesuai *Reference Architecture Model Industrie 4.0* (RAMI 4.0) yang dikembangkan oleh Plattform Industrie 4.0.

Urgensi ekonomi dari adopsi AAS-5G cukup signifikan. Studi-studi terkini (termasuk yang dilaporkan oleh [Cavalieri et al., 2024](https://doi.org/10.5220/0012914200003822)) menunjukkan bahwa integrasi AAS dengan jaringan 5G *private* di lingkungan pabrik dapat menurunkan *Mean Time To Repair* (MTTR) hingga 35–50% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 8–12 poin persentase. Kebutuhan akan komunikasi *ultra-reliable low-latency* (URLLC) dengan latensi kurang dari 10 ms dan reliabilitas packet loss di bawah $10^{-5}$ menjadi prasyarat bagi aplikasi *closed-loop control* digital twin yang sesungguhnya. Untuk konteks yang lebih luas pada arsitektur *cyber-physical*, De Marchi, Rojas, dan Mark (2022) — melalui publikasinya pada *Proceedings of the 3rd IN4PL Conference* dengan DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) — menunjukkan bahwa sistem transfer rakitan *cyber-physical* dapat memanfaatkan prinsip AAS untuk menjamin keselarasan antara model virtual dan kondisi fisik lini produksi. Kedua paper ini saling melengkapi karena keduanya mengadopsi paradigma *cyber-physical production system* (CPPS) yang menjadi landasan utama I4.0.

Konteks operasional yang melatarbelakangi penelitian ini mencakup tiga skenario industri nyata: (1) lini perakitan *flexible* dengan robot kolaboratif (*cobot*) yang membutuhkan pembaruan trajectory secara real-time; (2) sistem *autonomous mobile robot* (AMR) dalam *intralogistics* yang memerlukan koordinat posisi dan status baterai secara kontinu; (3) *predictive maintenance* pada mesin putar kecepatan tinggi (misalnya turbin, motor listrik, kompresor) yang menuntut streaming data getaran dan termal dengan bandwidth tinggi. Dalam semua kasus, AAS berperan sebagai *digital nameplate* yang dapat diakses oleh aplikasi *edge* maupun *cloud*, sementara 5G menjamin *deterministic connectivity* yang tidak dapat disediakan oleh Wi-Fi konvensional. Standarisasi submodel AAS melalui dokumen spesifikasi *Details of the Asset Administration Shell* (terutama bagian 1, 2, dan 3 dari seri IEC PAS 63278) menjamin bahwa informasi seperti kapasitas produksi, konsumsi energi, jejak karbon, dan riwayat pemeliharaan dapat dipertukarkan secara semantik di antara berbagai *vendor* dan *stakeholder*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Status Ruang Diskrit Digital Twin

Sistem fisik aset industri dapat dimodelkan sebagai *state-space* diskrit dengan vektor status $\mathbf{x}_k \in \mathbb{R}^n$ pada waktu diskrit $k$. Persamaan status dan observasi mengikuti formulasi standar:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k$$

$$\mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k$$

dengan $\mathbf{A} \in \mathbb{R}^{n \times n}$ adalah matriks transisi status, $\mathbf{B}$ adalah matriks input, $\mathbf{C}$ adalah matriks observasi, $\mathbf{u}_k$ adalah vektor *actuation*, $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})$ adalah *process noise*, dan $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R})$ adalah *measurement noise* [Cavalieri et al., 2024](https://doi.org/10.5220/0012914200003822).

### 2.2 Submodel AAS dan Struktur Hierarkis

AAS disusun oleh sekumpulan *submodel* yang masing-masing merepresentasikan aspek tertentu dari aset. Secara formal, sebuah AAS untuk aset $i$ dapat dinyatakan sebagai himpunan terstruktur:

$$\mathcal{S}_i = \{I_i, M_i, P_i, C_i, H_i\}$$

di mana $I_i$ adalah *Identification* (ID global sesuai IEC 61360), $M_i$ adalah *Nameplate* (kapasitas desain, dimensi fisik), $P_i$ adalah *operational data* (status produksi, throughput), $C_i$ adalah *Capability* (batas operasional, mode operasi), dan $H_i$ adalah *historical log* (timestamped event). Konsistensi antar-submodel dijaga melalui aturan *semantic interoperability* berbasis *vocabulary* yang telah disepakati industri.

### 2.3 Latensi End-to-End Jaringan 5G Private

Total *end-to-end latency* $L_{e2e}$ dalam sistem AAS-5G terdiri dari empat komponen utama:

$$L_{e2e} = L_{acq} + L_{tx} + L_{proc} + L_{app}$$

dengan:
- $L_{acq}$: latensi akuisisi sensor (orde 0,5–2 ms untuk sensor getaran MEMS),
- $L_{tx}$: latensi transmisi 5G *air interface*,
- $L_{proc}$: latensi pemrosesan di *edge/MEC*,
- $L_{app}$: latensi aplikasi (rendering digital twin, inferensi).

Untuk URLLC 5G *mini-slot* configuration, latensi transmisi dapat ditulis:

$$L_{tx} = T_{proc} + \frac{N_{slot}}{2^{\mu}} \cdot 0{,}125 \text{ ms}$$

dengan $T_{proc}$ adalah waktu pemrosesan gNB, $\mu$ adalah *subcarrier spacing* (nilai 0, 1, 2, atau 3 untuk numerologi 15/30/60/120 kHz), dan $N_{slot}$ adalah jumlah slot.

### 2.4 Age of Information (AoI) sebagai Metrik Kesegaran Data

Metrik *Age of Information* (AoI) mengukur kesegaran data digital twin terhadap kondisi fisik:

$$\Delta(t) = t - U(t)$$

di mana $U(t)$ adalah timestamp paket data terakhir yang berhasil diterima. Rata-rata AoI untuk kebijakan pembaruan *periodic update* dengan periode $T$ adalah:

$$\bar{\Delta} = \frac{T^2}{2T - 2L_{e2e}} \approx \frac{T}{2} \text{ untuk } T \gg L_{e2e}$$

Untuk memenuhi constraint kesegaran data digital twin, biasanya diterapkan $\bar{\Delta} \leq \Delta_{max}$ dengan $\Delta_{max}$ adalah batas usang data yang dapat diterima aplikasi.

### 2.5 Optimasi Throughput Multi-Aset

Untuk $N$ aset yang berbagi kapasitas kanal 5G, alokasi *resource block* (RB) dapat diformulasikan sebagai masalah optimasi maksimasi throughput agregat:

$$\max_{x_{i,n}} \sum_{i=1}^{N}\sum_{n=1}^{N_{RB}} x_{i,n} \cdot R_{i,n}$$

$$\text{s.t. } \sum_{i=1}^{N}x_{i,n} \leq 1, \quad \forall n; \quad \sum_{n=1}^{N_{RB}} x_{i,n} \geq R_{i}^{min}, \quad \forall i; \quad x_{i,n} \in \{0,1\}$$

dengan $R_{i,n}$ adalah *rate* aset $i$ pada RB $n$ dan $R_i^{min}$ adalah throughput minimum untuk menjamin SLA aplikasi AAS.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G mengikuti prosedur sistematis berlapis seperti diuraikan oleh [Cavalieri et al. (2024)](https://doi.org/10.5220/0012914200003822) dan diperkuat oleh kerangka *cyber-physical assembly transfer* dari [De Marchi et al. (2022)](https://doi.org/10.5220/0011589900003329). SOP terlengkap terdiri atas tujuh tahap:

**Tahap 1 — Inventarisasi Aset & Klasifikasi Kritisitas.** Setiap aset di lantai produksi diklasifikasikan berdasarkan matrix kritisitas $K = P \times C$ di mana $P$ adalah *probability of failure* dan $C$ adalah *consequence of failure*. Aset kelas A (kritisitas tinggi) menjadi prioritas pertama migrasi ke AAS.

**Tahap 2 — Pemodelan AAS dengan AASX Package Factory.** Engineer menggunakan *AASX Package Explorer* atau *BaSyx AAS Designer* untuk membangun struktur submodel. Setiap *submodel element* diberi *Semantic ID* sesuai *Eclass* atau *IEC CDD*.

**Tahap 3 — Deployment Registry & Submodel Endpoints.** Registry AAS (BaSyx *AAS Registry*) di-deploy pada *edge server* dengan protokol HTTP/REST atau MQTT sebagai antarmuka. Setiap submodel dapat diakses melalui *fully qualified path*: `/aas/{aasId}/submodels/{submodelId}/submodel-elements/{idShortPath}`.

**Tahap 4 — Integrasi 5G Private Network.** Jaringan 5G *standalone non-public network* (SNPN) di-deploy menggunakan *shared spectrum* atau *licensed spectrum*. *gNB* dan *core 5GC* ditempatkan di *on-premise* untuk memenuhi *data sovereignty* dan *deterministic latency*.

**Tahap 5 — Konfigurasi *Time-Sensitive Networking* (TSN).** Bridge TSN diintegrasikan dengan *User Plane Function* (UPF) 5G melalui *standardized interface* untuk menjamin transmisi *isochronous* dengan jitter kurang dari 1 µs.

**Tahap 6 — Sinkronisasi Dual-Direction (Physical ↔ Virtual).** Data dari aset fisik dikirim ke AAS (uplink), sementara *setpoint* atau *control command* dikirim ke aset (downlink). *Synchronization error* dimonitor melalui mekanisme *heartbeat* berkala.

**Tahap 7 — Validasi & Continuous Improvement.** Pengujian kepatuhan dilakukan terhadap *AAS Compliance Tests* dan *5G network KPI* (latency, jitter, packet loss, throughput).

Diagram alur integrasi mengikuti pola berikut secara konseptual:

```
[Physical Asset] ⇄ [Sensor/Actuator