# 1682 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dalam Integrasi Sistem Manufaktur Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memunculkan kebutuhan akan representasi digital yang terstandarisasi terhadap aset fisik di lantai produksi. Salah satu tantangan struktural terbesar adalah interoperabilitas data antara *Operational Technology* (OT) yang heterogen—mulai dari PLC, sensor, hingga robot industri—dengan *Information Technology* (IT) perusahaan (ERP, MES, dan SCM). Dalam konteks inilah **Asset Administration Shell (AAS)** muncul sebagai kerangka referensi resmi dari *Plattform Industrie 4.0* dan *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang menyediakan *metamodel* digital twin berstandar IEC/ISO. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) memposisikan AAS sebagai representasi digital dari sebuah *base station* 5G, di mana setiap *gNodeB*, unit *User Plane Function* (UPF), serta elemen *Radio Access Network* (RAN) direpresentasikan oleh submodel terstruktur yang mengekspos kapabilitas jaringan, konfigurasi *slicing*, dan parameter kualitas layanan (*Quality of Service*). Pendekatan ini krusial karena 5G tidak lagi dipandang sekadar sebagai infrastruktur telekomunikasi, melainkan sebagai *enabler* produksi yang harus diorkestrasi sebagaimana mesin CNC.

Urgensi ekonomis dari integrasi AAS-5G dapat diukur dari tiga dimensi. Pertama, **latency deterministik** komunikasi *Ultra-Reliable Low-Latency Communication* (URLLC) yang dituntut turun ke level submilidetik pada aplikasi *closed-loop control* industri. Kedua, **lifetime value** perangkat 5G industri yang mencapai 7–10 tahun menuntut kemampuan *software-defined upgrade* tanpa intervensi fisik, sesuatu yang hanya mungkin bila aset tersebut memiliki representasi digital yang kaya semantik. Ketiga, **biaya kegagalan integrasi** yang menurut studi implementasi Industry 4.0 mencapai 18–25% dari total *Capital Expenditure* (CAPEX) proyek, dapat ditekan secara signifikan melalui digital twin yang menjamin interoperabilitas *plug-and-produce*. De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi lanskap ini dengan menunjukkan bahwa arsitektur digital twin untuk *cyber-physical assembly transfer system* memerlukan lapisan orkestrasi yang mampu menyinkronkan status fisik kontainer, konveyor, dan gripper dengan representasi virtualnya pada tingkat *event*-driven dalam orde milidetik. Kedua paper ini bersama-sama menegaskan bahwa digital twin bukan sekadar visualisasi 3D, melainkan **kontrak data formal** yang mengatur pertukaran informasi antara aset fisik dan ekosistem digitalnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell

AAS didefinisikan sebagai pasangan terurut $A = \langle M, S \rangle$, di mana $M$ adalah *Asset Identification Model* yang memuat *Global Asset Identifier* (GAID) bersifat unik sesuai ISO 23247, dan $S$ adalah himpunan *Submodels* $S = \{s_1, s_2, \dots, s_n\}$. Setiap submodel $s_i$ mengandung koleksi *SubmodelElements* $\mathcal{E}_i = \{e_{i,1}, e_{i,2}, \dots, e_{i,k}\}$ dengan tipe data *Property*, *MultiLanguageProperty*, *File*, *Blob*, *ReferenceElement*, atau *Operation*. Cavalieri dkk. (2024) menunjukkan bahwa untuk representasi 5G, submodel dikategorisasikan ke dalam *Capability*, *Connectivity*, *Configuration*, dan *Diagnostics*.

### 2.2 Model Jaringan 5G untuk Aplikasi Industri

Kinerja URLLC pada jaringan 5G dapat diformulasikan sebagai probabilitas keberhasilan transmisi dalam batas latensi $T_{max}$:

$$P_{succ} = \mathbb{P}[\tau_{RTT} \leq T_{max}] = 1 - Q\left(\frac{T_{max} - \mu_{\tau}}{\sigma_{\tau}}\right)$$

di mana $\tau_{RTT}$ adalah *Round-Trip Time*, $\mu_{\tau}$ adalah nilai tengah, $\sigma_{\tau}$ adalah simpangan baku, dan $Q(\cdot)$ adalah fungsi komplementer distribusi normal standar. Untuk closed-loop control pada lini perakitan dengan $T_{max} = 1$ ms, dibutuhkan target $\sigma_{\tau} \leq 100 \,\mu s$ pada *radio interface*.

Throughput agregat suatu *slicing* di RAN dihitung dengan *Shannon-Hartley theorem* yang disesuaikan dengan alokasi *Resource Block*:

$$R_{slice} = \sum_{k=1}^{K} B_{RB} \cdot N_{RB,k} \cdot \log_2\left(1 + \frac{P_t \cdot G_k \cdot |h_k|^2}{N_0 \cdot B_{RB}}\right)$$

dengan $B_{RB} = 180$ kHz adalah bandwidth satu *Resource Block*, $N_{RB,k}$ jumlah *Resource Block* pada *slice* $k$, $P_t$ daya transmisi, $G_k$ gain antena, $|h_k|^2$ magnitudo kanal fading, dan $N_0$ densitas daya noise.

### 2.3 Sinkronisasi State Digital Twin

Menurut De Marchi dkk. (2022), *cyber-physical* assembly system dimodelkan sebagai sistem kejadian diskrit $D = (Q, \Sigma, \delta, q_0, F)$ di mana $Q$ adalah himpunan state fisik, $\Sigma$ alfabet kejadian, $\delta: Q \times \Sigma \rightarrow Q$ fungsi transisi, $q_0$ state awal, dan $F \subseteq Q$ himpunan state akhir. Drift antara state fisik $\hat{q}(t)$ dan state virtual $\tilde{q}(t)$ didefinisikan sebagai:

$$\Delta q(t) = \| \hat{q}(t) - \tilde{q}(t) \|_2$$

dan waktu konvergensi setelah kejadian abnormal $\tau_{conv}$ memenuhi:

$$\tau_{conv} = \inf\{t > t_{event} : \Delta q(t) \leq \epsilon_{threshold}\}$$

dengan $\epsilon_{threshold}$ batas toleransi yang umumnya ditetapkan pada 0,5 mm untuk sistem transfer kontainer di lini perakitan presisi.

### 2.4 Indeks Kualitas Digital Twin

Untuk evaluasi holistik, kualitas digital twin dapat dikuantifikasi menggunakan *Composite Digital Twin Quality Index* (CDTQI):

$$CDTQI = w_1 \cdot N_{sync} + w_2 \cdot C_{inter} + w_3 \cdot A_{upd} - w_4 \cdot L_{drift}$$

di mana $N_{sync}$ adalah *Normalized Synchronization Frequency*, $C_{inter}$ cakupan interoperabilitas protokol, $A_{upd}$ akurasi pembaruan state, dan $L_{drift}$ laju drift state; dengan $\sum w_i = 1$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi digital twin AAS-5G mengikuti prosedur operasional standar berikut, yang disintesis dari protokol Cavalieri dkk. (2024) dan arsitektur De Marchi dkk. (2022):

**Tahap 1 — Penyiapan Identifikasi Aset.** Setiap elemen 5G (gNodeB, CU, DU, UPF) diberi *Global Asset Identifier* sesuai IEC 23247 dan *International Registration Data Identifier* (IRDI) untuk setiap submodel element.

**Tahap 2 — Desain Submodel.** Dibuat minimal empat submodel wajib: *CommunicationProfile* (bandwidth, latency target, slicing ID), *CapabilityDescription* (URLLC/eMBB/mMTC flag), *Configuration* (parameter operasional), dan *Diagnostic* (KPI实时). Format pertukaran data mengikuti spesifikasi `AASX` (berbasis OPC UA) dan `JSON` sesuai `AAS API Part 2`.

**Tahap 3 — Registrasi ke BaSyx/Plattform Registry.** Submodel diunggah ke *AAS Repository* dan dipublikasikan ke *AAS Discovery Service* agar dapat ditemukan oleh *Asset Connector* di tingkat shopfloor.

**Tahap 4 — Integrasi dengan 5G Network Slice Manager.** Berkoordinasi dengan *Network Exposure Function* (NEF) dan *Network Slice Management Function* (NSMF) untuk mengekspos API northbound ke AAS menggunakan *Service-Based Interface* (SBI) 3GPP TS 29.500.

**Tahap 5 — Orkestrasi Closed-Loop dengan Cyber-Physical Assembly.** Berdasarkan arsitektur De Marchi dkk. (2022), modul `TwinOrchestrator` melakukan sinkronisasi periodik antara AAS 5G dan AAS *Programmable Logic Controller* (PLC) lini perakitan, dengan prioritas deterministik menggunakan protokol *Time-Sensitive Networking* (TSN) IEEE 802.1Qbv.

**Tahap 6 — Validasi dan Continuous Improvement.** Dilakukan pengujian terhadap parameter $\tau_{conv}$, $R_{slice}$, dan $CDTQI$ menggunakan *Digital Twin Testbench* sebelum deployment produksi.

Arsitektur berlapis dari De Marchi dkk. (2022) menyediakan kerangka referensi sebagai berikut:

```
[Lapisan 5]  Cloud Analytics & AI        → Prediksi, optimasi
[Lapisan 4]  Digital Twin Orchestrator    → AAS Repository, state manager
[Lapisan 3]  5G/TSN Communication         → URLLC, slicing, OPC UA
[Lapisan 2]  Edge Computing (PLC)        → Logika kontrol lokal
[Lapisan 1]  Physical Asset               → Robot, konveyor, sensor
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik perakitan *Printed Circuit Board* (PCB) di kawasan industri Eropa akan mengintegrasikan AAS digital twin untuk jaringan 5G privat dan lini transfer *Pick-and-Place*. Parameter aktual yang digunakan:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah gNodeB | 4 | unit |
| Bandwidth sistem | 100 | MHz |
| Daya transmisi ($P_t$) | 23 | dBm |
| Noise figure receiver | 7 | dB |
| Thermal noise density ($N_0$) | -174 | dBm/Hz |
| Path loss