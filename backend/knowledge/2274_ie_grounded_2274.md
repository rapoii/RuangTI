# 2274 — Perancangan Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G pada Ekosistem Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur memasuki fase krusial di mana konvergensi antara *cyber-physical systems* (CPS), jaringan komunikasi nirkabel generasi kelima (5G), dan konsep *digital twin* (DT) menjadi pilar utama strategi *Industry 4.0* dan *Industry 5.0*. Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) melalui artikel berjudul *"Asset Administration Shell Digital Twin of 5G Communication System"* yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi pengembangan representasi digital formal untuk infrastruktur telekomunikasi 5G yang menopang lini produksi cerdas. Permasalahan fundamental yang diangkat adalah bagaimana melakukan abstraksi dan standardisasi terhadap aset telekomunikasi 5G—yang sebelumnya diperlakukan sebagai entitas *opaque* oleh sistem operasi pabrik—ke dalam skema metadata interoperabel yang dapat digunakan oleh *Manufacturing Execution System* (MES), *Enterprise Resource Planning* (ERP), dan platform *Industrial Internet of Things* (IIoT).

Secara empiris, urgensi ini didorong oleh tiga realitas operasional. Pertama, proliferasi *private 5G networks* di lingkungan manufaktur (diperkirakan lebih dari 1.000 *campus network* 5G telah di-*deploy* secara global hingga 2024 menurut berbagai laporan konsultan telekomunikasi) memerlukan kerangka manajemen aset yang mampu menjembatani domain *Operational Technology* (OT) dan *Information Technology* (IT). Kedua, kompleksitas jaringan 5G dengan fitur *network slicing*, *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC) melampaui kapabilitas model aset tradisional berbasis OPC-UA atau MTConnect. Ketiga, regulator dan konsorsium industri seperti Plattform Industrie 4.0 telah mengadopsi *Asset Administration Shell* (AAS) sebagai standar metadata untuk seluruh hierarki RAMI 4.0, sehingga digital twin yang tidak遵守 standar ini akan menghadapi *vendor lock-in* dan fragmentasi ekosistem.

De Marchi, Rojas, dan Mark (2022) dalam *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) memberikan konteks empiris yang saling melengkapi: mereka mendemonstrasikan arsitektur DT pada sistem transfer rakitan *cyber-physical* yang sangat bergantung pada komunikasi deterministik latensi rendah. Gabungan kedua literatur ini menunjukkan satu koherensi tematik: digital twin tidak lagi berdiri sebagai representasi statis aset fisik, melainkan sebagai entitas komputasional terdistribusi yang mengandalkan kualitas jaringan komunikasi. Dalam perspektif ekonomi industri, kegagalan dalam mengintegrasikan dimensi telekomunikasi ke dalam DT berpotensi menimbulkan kerugian signifikan berupa *downtime* tak terencana (rata-rata €50.000–€250.000 per jam pada lini *high-mix low-volume*), cacat kualitas yang tidak terdeteksi (*escaped defects*), dan inefisiensi energi akibat sub-optimal scheduling. Oleh karena itu, penelitian Cavalieri et al. (2024) hadir sebagai kontribusi tepat waktu yang menawarkan formalisasi DT untuk lapisan komunikasi 5G menggunakan *Asset Administration Shell* sebagai wadah metadata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual Asset Administration Shell (AAS)

Menurut kerangka yang dibangun oleh Cavalieri et al. (2024), AAS dimodelkan sebagai *tuple* berstruktur yang merepresentasikan aset industri secara hierarkis. Formulasi formalnya dapat dinyatakan sebagai:

$$AAS_i = \langle I_i, M_i, S_i, V_i, T_i \rangle$$

di mana $I_i$ adalah *Identifier* unik aset (mengikuti *International Registration Data Identifier* — IRDI), $M_i$ adalah himpunan *Metadata* (nama, produsen, versi, dan *bill of materials*), $S_i$ adalah kumpulan *Submodel* $\lbrace s_{i,1}, s_{i,2}, \dots, s_{i,n} \rbrace$ yang masing-masing merepresentasikan aspek fungsional spesifik (misalnya submodel "CommunicationCapabilities", "NetworkSlicingConfig", "QoSMonitoring"), $V_i$ adalah himpunan *Value* terikat pada elemen submodel, dan $T_i$ adalah *timestamp* peristiwa (*event*-driven update). Submodel sendiri merupakan himpunan *SubmodelElement* yang dapat berupa *Property*, *Operation*, *Event*, atau *Capability*.

Untuk kasus spesifik sistem 5G, Cavalieri et al. (2024) mendefinisikan submodel khusus **"5G Network Asset Submodel"** yang memuat elemen-elemen kritis berikut: *gNodeB Identifier*, *Cell Identity* (CI), *Tracking Area Code* (TAC), *Frequency Band*, *Bandwidth*, *Transmission Power*, *Antenna Gain*, *Slice Identifier*, dan *QoS Flow Identifier* (QFI).

### 2.2 Formulasi Kualitas Layanan (QoS) Jaringan 5G

Kinerja komunikasi 5G dalam konteks DT dimodelkan melalui tiga metrik primer yang digunakan secara luas dalam literatur telekomunikasi:

$$L_{e2e}(t) = L_{proc}(t) + L_{queue}(t) + L_{tx}(t) + L_{prop}$$

di mana $L_{e2e}$ adalah *end-to-end latency*, $L_{proc}$ adalah latensi pemrosesan pada *user plane function* (UPF) dan *access and mobility management function* (AMF), $L_{queue}$ adalah latensi antrian pada *radio interface*, $L_{tx}$ adalah durasi transmisi *frame*, dan $L_{prop}$ adalah latensi propagasi. Untuk URLLC pada aplikasi manufaktur, target tipikal adalah $L_{e2e} \leq 1$ ms dengan tingkat keandalan $1 - 10^{-5}$.

Throughput sel 5G diberikan oleh persamaan *Shannon-Hartley* yang disesuaikan dengan skenario OFDMA:

$$R_{cell} = \sum_{u=1}^{U} \sum_{rb=1}^{N_{rb}} \frac{N_{sc}^{rb}}{T_{sf}} \cdot \log_2\left(1 + \text{SINR}_{u,rb}\right) \cdot \eta_{coding}$$

dengan $U$ adalah jumlah *user equipment* simultan, $N_{rb}$ adalah jumlah *resource block* yang dialokasikan, $N_{sc}^{rb}$ adalah jumlah *subcarrier* per *resource block* (12 untuk LTE/5G NR), $T_{sf}$ adalah durasi *subframe* (1 ms), $\text{SINR}_{u,rb}$ adalah *Signal-to-Interference-plus-Noise Ratio* untuk *user* $u$ pada *resource block* $rb$, dan $\eta_{coding}$ adalah efisiensi pengkodean kanal.

### 3.3 Persamaan Sinkronisasi Digital Twin

Sinkronisasi antara entitas fisik (*physical twin*) dan representasi digitalnya dimodelkan sebagai *state estimation* kontinu:

$$\hat{x}_d(t) = f\big(\hat{x}_d(t-\Delta t), u(t), y(t)\big)$$

dengan *error* sinkronisasi didefinisikan sebagai norma Euclidean:

$$e_{sync}(t) = \|x_p(t) - \hat{x}_d(t)\|_2 = \sqrt{\sum_{k=1}^{n}\big(x_{p,k}(t) - \hat{x}_{d,k}(t)\big)^2}$$

Nilai $e_{sync}(t)$ yang melebihi ambang batas $\varepsilon_{alert}$ akan memicu *Event* dalam submodel AAS untuk kebutuhan *predictive maintenance* dan *root cause analysis*.

### 2.4 Throughput Lini Transfer Rakitan (Sitasi Pendukung)

De Marchi et al. (2022) menurunkan persamaan *cycle time* dan *throughput* untuk lini transfer rakitan yang terhubung dengan infrastruktur komunikasi DT:

$$\text{CT}_{line} = \max_{1 \leq i \leq n} \left( \text{CT}_{i}^{process} + \text{CT}_{i}^{transport} \right)$$

$$\text{TH}_{line} = \frac{1}{\text{CT}_{line}} \cdot \eta_{availability}$$

di mana $\text{CT}_{i}^{process}$ adalah waktu proses pada stasiun $$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.

$$
