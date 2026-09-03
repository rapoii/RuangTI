# 3042 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Manufaktur Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Kerangka Digital Twin untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju **Industri 4.0** (Jerman) dan *Industrial Internet of Things* (IIoT) (Amerika Serikat) telah memunculkan kebutuhan akan representasi digital aset fisik yang mampu menjembatani dunia *cyber* dan fisik secara *real-time* dan semantik. Dalam konteks ini, *Asset Administration Shell* (AAS) — yang distandarisasi oleh **Plattform Industrie 4.0** dan kini diadopsi menjadi **IEC 63278 / PAS 63169** — muncul sebagai *metamodel* referensi industri yang mendefinisikan struktur interoperable untuk pertukaran informasi antar-peserta rantai nilai (Cavalieri dkk., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Berbeda dari protokol komunikasi murni seperti *OPC UA* atau MQTT, AAS menyediakan lapisan semantik terstruktur — disebut *Submodel* — yang memungkinkan aset manufaktur, jaringan telekomunikasi, dan komponen logistik saling memahami konteks data tanpa integrasi *point-to-point* yang mahal.

Urgensi integrasi AAS dengan **jaringan komunikasi 5G** muncul dari karakteristik teknis 5G yang membawa tiga pilar layanan: *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC). Untuk otomasi pabrik, URLLC menjanjikan latensi *end-to-end* di bawah 5 ms dengan tingkat reliabilitas 99,999 % (5 nine), parameter yang sebelumnya tidak tercapai pada Wi-Fi industri atau LTE. Namun, agar pemodelan digital *asset* jaringan 5G (misalnya *gNodeB*, *edge server*, *network slice*) dapat dimanfaatkan oleh operator pabrik, diperlukan *Digital Twin* (DT) yang mengikuti standar interoperable — di sinilah kontribusi Cavalieri dkk. (2024) menjadi sangat relevan: mereka mengusulkan AAS sebagai *enabler* DT untuk elemen 5G sehingga operator pabrik dan operator telekomunikasi dapat mengintegrasikan data jaringan ke dalam *Production Line Digital Twin*.

Di sisi hilir rantai pasok manufaktur, integrasi DT ke dalam **sistem transfer perakitan cyber-physical** (*Cyber-Physical Assembly Transfer System*, CP-ATS) menjadi tulang punggung *smart factory*. De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) merancang arsitektur DT berlapis untuk lini perakitan yang menggabungkan *Programmable Logic Controller* (PLC), sensor vision, conveyor, dan robot kolaboratif. Sinergi antara kerangka AAS untuk aset 5G (Cavalieri dkk., 2024) dan arsitektur DT-CP-ATS (De Marchi dkk., 2022) menjadi pondasi paradigma **IIoT-aware Smart Manufacturing**, di mana setiap *resource* — mulai dari sensor lapangan, jaringan nirkabel, *edge controller*, hingga lini perakitan — memiliki kembaran digital yang saling berinteroperasi.

Secara ekonomi, adopsi DT-AAS diproyeksi menurunkan *time-to-market* hingga 30 % dan biaya pemeliharaan hingga 25 % (estimasi konsorsium Plattform Industrie 4.0, 2023), sekaligus memungkinkan model bisnis baru seperti *Network-as-a-Product* dan *Production-as-a-Service* dalam konteks *Industrial Metaverse*. Namun demikian, interoperabilitas tetap menjadi hambatan: studi empiris menunjukkan bahwa hingga 60 % proyek IIoT di Eropa gagal pada tahap integrasi karena fragmentasi protokol. Inilah yang coba dijawab oleh literatur yang dirujuk dalam modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Asset Administration Shell (AAS)

AAS didefinisikan sebagai representasi digital formal dari sebuah aset industri. Secara matematis, struktur AAS dapat dimodelkan sebagai *tuple* berjenjang:

$$
\mathcal{A} = \langle \text{id}, \, \text{idShort}, \, \text{assetKind}, \, \text{submodels}, \, \text{views} \rangle
$$

di mana $\text{id}$ adalah *International Registration Data Identifier* (IRDI) unik global, $\text{assetKind} \in \{\text{Instance}, \text{Type}\}$, dan $\text{submodels} = \{S_1, S_2, \dots, S_n\}$ merepresentasikan aspek-aspek spesifik aset (misalnya *Nameplate*, *TechnicalData*, *Capability*, *Communication*). Setiap *submodel* memiliki koleksi elemen *Property*, *Operation*, dan *Event* yang dapat diekspos melalui antarmuka REST/HTTP, OPC UA, atau MQTT.

### 2.2 Formulasi Digital Twin untuk Jaringan 5G

DT jaringan 5G mengikuti Cavalieri dkk. (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), di mana setiap elemen jaringan $j \in \mathcal{N}$ (misal *gNodeB*, AMF, UPF, *edge node*) dipetakan ke instance AAS $\mathcal{A}_j$. Status dinamis sistem pada waktu $t$ diekspresikan sebagai vektor state:

$$
\mathbf{x}_j(t) = \begin{bmatrix} \text{latency}_j(t) \\ \text{jitter}_j(t) \\ \text{throughput}_j(t) \\ \text{load}_j(t) \\ \text{SINR}_j(t) \end{bmatrix}
$$

Sinyal kendali jaringan *slicing* untuk URLLC memenuhi kapasitas Shannon yang direalokasi:

$$
C_{\text{URLLC}}(t) = B_{\text{slice}} \cdot \log_2\!\left(1 + \text{SINR}_j(t)\right) \quad \text{[bps]}
$$

Reliabilitas paket data URLLC dalam window observasi $T$ mengikuti ekspresi reliabilitas 5-nine:

$$
R(t) = 1 - \frac{N_{\text{fail}}(t)}{N_{\text{total}}(t)} \geq 1 - 10^{-5}
$$

### 2.3 Sinkronisasi State Physical-Cyber

Sinkronisasi antara aset fisik dan DT dimodelkan oleh persamaan diferensial *discrete-event update*:

$$
\mathbf{x}_j(t_{k+1}) = \mathbf{f}\!\left(\mathbf{x}_j(t_k), \, \mathbf{u}(t_k)\right) + \mathbf{w}(t_k)
$$

dengan $\mathbf{u}(t_k)$ vektor input kendali (alokasi bandwidth, prioritas scheduler), $\mathbf{w}(t_k) \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})$ noise proses, dan *Kalman filter* dipakai untuk estimasi state optimal $\hat{\mathbf{x}}_j(t_k)$ di sisi digital. *Update latency* end-to-end AAS-5G secara umum:

$$
L_{\text{e2e}} = L_{\text{tx}} + L_{\text{prop}} + L_{\text{queue}} + L_{\text{proc}} + L_{\text{AAS-API}}
$$

dengan kendala URLLC: $L_{\text{e2e}} \leq 5$ ms untuk aplikasi *closed-loop control* pabrik.

### 2.4 Model Kinerja CP-Assembly Transfer System

Berdasarkan De Marchi dkk. (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), lini perakitan cyber-physical dimodelkan sebagai jaringan antrian seri *M/G/1* dengan workstation $i = 1, \dots, n$. *Cycle time* workstation $i$:

$$
\text{CT}_i = W_{q,i} + \mathbb{E}[S_i]
$$

dengan $\mathbb{E}[S_i]$ mean service time dan $W_{q,i}$ waktu tunggunya. Untuk *transfer line* deterministik, *throughput* sistem dibatasi oleh *bottleneck*:

$$
\text{TH}_{\text{sistem}} = \min_{i}\left(\frac{1}{\text{CT}_i}\right)
$$

*Overall Equipment Effectiveness* (OEE) standar SEMI E10:

$$
\text{OEE} = A \cdot P \cdot Q
$$

dengan $A = \text{Availability}, \, P = \text{Performance}, \, Q = \text{Quality}$.

### 2.5 Perhitungan Efektivitas Integrasi AAS-DT

Untuk mengkuantifikasi manfaat arsitektur DT-AAS-5G, didefinisikan *Digital Twin Integration Effectiveness* (DTIE):

$$
\text{DTIE} = \alpha \cdot \frac{L_{\text{target}}}{L_{\text{e2e}}} + \beta \cdot \frac{\text{OEE}_{\text{DT}}}{\text{OEE}_{\text{baseline}}} + \gamma \cdot \frac{I_{\text{AAS}}}{I_{\text{total}}}
$$

dengan $\alpha + \beta + \gamma = 1$ bobot Manufaktur-Komunikasi-Interoperabilitas, dan $I_{\text{AAS}}/I_{\text{total}}$ rasio elemen data yang telah terstandarisasi AAS.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi arsitektur DT-AAS untuk sistem 5G dan CP-ATS mengikuti SOP delapan fase berikut, selaras dengan metodologi yang dilaporkan Cavalieri dkk. (2024) dan De Marchi dkk. (2022).

### Fase 1 — Inventarisasi Aset dan Pemetaan *Use Case*
- Identifikasi seluruh aset fisik: *gNodeB*, *edge node*, PLC, sensor, conveyor, robot.
- Tentukan *use case* prioritas menggunakan kerangka **5C** (*Connection, Conversion, Cyber, Cognition, Configuration*) dari Lee dkk. (2014).

### Fase 2 — Pemodelan AAS *Submodels*
Definisikan *submodel* esensial untuk setiap kelas aset:
- *Nameplate* (identitas, pabrikan, seri).
- *TechnicalData* (spesifikasi teknis: bandwidth, latensi, \dots.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
