# 2402 — Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G pada Sistem Produksi Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 yang berlangsung di sektor manufaktur global mensyaratkan integrasi erat antara entitas fisik (*Physical Entity*) di lantai produksi dengan representasi digitalnya (*Digital Twin*) melalui infrastruktur komunikasi deterministik latensi rendah. Dalam konteks ini, komunikasi nirkabel 5G—yang menawarkan *enhanced Mobile BroadBand* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC)—menjadi enabler strategis untuk menghubungkan sensor, aktuator, dan *Programmable Logic Controller* (PLC) pada *Cyber-Physical Production System* (CPPS). Seperti yang ditegaskan oleh Cavalieri, Di Natale, dan Gambadoro (2024) dalam Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), ketersediaan model digital dari jaringan 5G itu sendiri merupakan prasyarat fundamental agar operator industri dapat memvalidasi *Service Level Agreement* (SLA), menguji konfigurasi *slicing*, serta melakukan *what-if analysis* terhadap dampak perubahan parameter radio terhadap kualitas produksi.

Permasalahan mendasar yang diangkat adalah *asimetri informasi* antara vendor jaringan telekomunikasi (yang memiliki *Radio Access Network* - RAN) dengan operator manufaktur (yang memiliki aset fisik produksi). Tanpa model digital terbuka yang distandarisasi, integrasi 5G ke dalam CPPS bersifat *black-box* dan menghambat interoperabilitas multi-vendor. Solusi yang ditawarkan oleh Cavalieri et al. (2024) adalah penerapan *Asset Administration Shell* (AAS)—standar referensi dari Platform Industrie 4.0 dan spesifikasi teknis IEC/PAS 62443 serta DIN SPEC 91345—sebagai *semantic digital representation* dari komponen jaringan 5G (misalnya *gNodeB*, *AMF/SMF*, *UPF*, dan *Network Slice*). Pendekatan ini melengkapi temuan De Marchi, Rojas, dan Mark (2022) (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang telah membuktikan kelayakan arsitektur digital twin untuk sistem transfer rakitan siber-fisik, dengan menambahkan dimensi komunikasi nirkabel sebagai objek digital twin itu sendiri.

Urgensi ekonomi dan teknis dari topik ini diperkuat oleh data prognostikasi industri: menurut *5G-ACIA* (5G Alliance for Connected Industries and Automation), lebih dari 70% lini produksi baru di Eropa pada tahun 2030 akan mengandalkan komunikasi nirkabel privat 5G, dan gangguan komunikasi sekecil 10 ms dapat menurunkan *Overall Equipment Effectiveness* (OEE) hingga 3–5%. Oleh karena itu, dokumen Knowledge Base Spesialis Teknik Industri Modul 2402 ini menyusun secara sistematis landasan teori, formulasi matematis, metodologi rekayasa, studi kasus kuantitatif, dan evaluasi kritis terkait implementasi AAS Digital Twin untuk sistem komunikasi 5G pada lingkungan CPPS, dengan tetap merujuk pada kedua literatur primer yang telah disebutkan DOI-nya secara terverifikasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Asset Administration Shell (AAS) untuk Jaringan 5G

Cavalieri et al. (2024) memodelkan setiap elemen jaringan 5G sebagai instans AAS yang terdiri dari *Asset* (entitas fisik I/O), *Submodel* (potongan informasi terdistribusi), dan *AAS-Repository* (layanan direktori & registrasi). Secara matematis, sebuah AAS didefinisikan sebagai tupel:

$$
\text{AAS} = \langle \mathcal{A}, \mathcal{S}, \mathcal{R}, \mathcal{V} \rangle
$$

di mana $\mathcal{A}$ adalah himpunan atribut identifikasi (misal `aas.id`, `aas.kind`), $\mathcal{S}$ adalah himpunan *submodel element* yang merepresentasikan kapasitas 5G (bandwidth, latensi, jangkauan), $\mathcal{R}$ adalah himpunan referensi ke submodel lain (interoperabilitas), serta $\mathcal{V}$ adalah himpunan *value* yang dapat berupa properti, operasi, atau event.

### 2.2 Formulasi Kualitas Komunikasi 5G sebagai State Variable

Untuk keperluan sinkronisasi real-time antara *physical network* dan *digital twin*, parameter *Key Performance Indicator* (KPI) 5G diformulasikan sebagai berikut. *End-to-end latency* $L_{e2e}$ terdiri atas tiga komponen utama:

$$
L_{e2e} = L_{tx} + L_{prop} + L_{queue}
$$

dengan:
- $L_{tx}$ = waktu transmisi = $\dfrac{P_{payload}}{R_{throughput}}$ (s)
- $L_{prop}$ = waktu propagasi = $\dfrac{d_{UE-gNB}}{c}$ (s), $c \approx 3 \times 10^8$ m/s
- $L_{queue}$ = waktu antrian pada *scheduling* RAN (model M/D/1 Kendall: $\bar{W}_q = \dfrac{\rho}{2\mu(1-\rho)}$, dengan $\rho = \lambda/\mu$)

Parameter *reliability* untuk URLLC pada *Network Slice* ke-$i$ dapat dinyatakan sebagai:

$$
R_i(t) = 1 - \Pr(L_{e2e} > L_{threshold}) = e^{-\lambda_{fail} \cdot t}
$$

yang mengikuti distribusi eksponensial untuk laju kegagalan $\lambda_{fail}$ per detik per *packet*.

### 2.3 Sinkronisasi Digital Twin dan *State Deviation*

De Marchi, Rojas, dan Mark (2022) memperkenalkan konsep *bidirectional data flow* yang menjamin kesamaan kondisi antara sistem fisik dan digital. Formulasi *state deviation* $\Delta x(t)$ antara kondisi aktual (*Physical State* $x_p(t)$) dan estimasi digital (*Digital State* $x_d(t)$) didefinisikan sebagai:

$$
\Delta x(t) = \| x_p(t) - x_d(t) \|_2 = \sqrt{\sum_{j=1}^{n} \left( x_{p,j}(t) - x_{d,j}(t) \right)^2}
$$

dengan $n$ adalah jumlah variabel status yang dipantau (misalnya RSSI, throughput, packet loss). Stabilitas sinkronisasi dicapai jika *Lyapunov function* $V(\Delta x) = \Delta x^T \mathbf{P} \, \Delta x$ bersifat decreasing untuk matriks definit positif $\mathbf{P} \succ 0$ yang memenuhi persamaan diferensial:

$$
\dot{V}(\Delta x) \leq -\alpha \cdot V(\Delta x), \quad \alpha > 0
$$

Kondisi ini menjamin *exponential convergence* digital twin terhadap dinamika fisik dengan laju peluruhan $\alpha$.

### 2.4 Model Throughput Agregat pada *Network Slicing*

Dalam arsitektur 5G *network slicing* yang menjadi perhatian Cavalieri et al. (2024), total throughput yang dialokasikan ke $K$ slice adalah:

$$
R_{agg} = \sum_{k=1}^{K} \min\left( R_{k,demand}, \ \frac{w_k \cdot C_{RAN}}{\sum_{i=1}^{K} w_i} \right)
$$

dengan $C_{RAN}$ kapasitas RAN (bps), $w_k$ bobot prioritas slice-$k$, dan $R_{k,demand}$ throughput permintaan slice tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk jaringan 5G mengikuti prosedur rekayasa berlapis yang diadaptasi dari kerangka kerja Cavalieri et al. (2024) serta ditautkan dengan arsitektur De Marchi et al. (2022). Prosedur Operasional Baku (SOP) terdiri atas delapan tahapan:

**Tahap 1 – Inventarisasi Aset Jaringan 5G.** Petugas inventarisasi memetakan setiap elemen RAN/Core (gNodeB, AMF, SMF, UPF, O-RAN RU/DU/CU) ke dalam *Asset Identification Code* sesuai ISO 23247.

**Tahap 2 – *Onboarding* ke AAS Server.** Setiap *asset* terdaftar di AAS Repository (BaSyx, Eclipse Ditto, atau Plattform Industrie 4.0 aas-spec) menggunakan *AASX package*. Konfigurasi endpoint mengikuti protokol *HTTP/REST* atau *OPC UA Part 100*.

**Tahap 3 – Pemodelan Submodel.** Submodel standar `CommunicationSubnet_5G` dideklarasikan dengan *property*:
- `Bandwidth` (Mbps)
- `LatencyMs` (ms)
- `Jitter` (ms)
- `PacketLoss` (%)
- `SliceProfile` (eMBB/URLLC/mMTC)

**Tahap 4 – Akuisisi Data via *Telemetry Channel*.** Data diekstrak dari elemen jaringan menggunakan *southbound interface* (NETCONF/YANG, O1/O2 dari O-RAN, atau *Kafka topic*).

**Tahap 5 – Sinkronisasi Digital-Physical.** Algoritma *State Synchronizer* menghitung $\Delta x(t)$ setiap interval $T_s$ dan menyesuaikan model digital sesuai Kalman Filter:

$$
\hat{x}_{d}(k|k) = \hat{x}_{d}(k|k-1) + \mathbf{K}_k \left[ z_k - \mathbf{H} \hat{x}_{d}(k|k-1) \right]
$$

dengan $\mathbf{K}_k$ adalah *Kalman Gain* dan $z_k$ adalah pengukuran aktual.

**Tahap 6 – Validasi SLA.** *Service Level Agreement* diverifikasi: misalnya $L_{e2e} \leq 10$ ms (URLLC) dan $R_i(3600s) \geq 1 - 10^{-5}$ (reliability 5-nine untuk misi kritis).

**Tahap 7 – *What-if Analysis* & *Predictive Maintenance*.** Operator menjalankan skenario (penambahan UE, interferensi, kegagalan gNodeB) pada digital twin sebelum dieksekusi pada jaringan fisik.

**Tahap 8 – *Feedback Loop* ke Lini Produksi.** Hasil analisis di-*push* ke MES/ERP via *Event Submodel* (AAS *Publish-Subscribe*) sehingga *Production Schedule* dapat disesuaikan real-time.

Diagram alir logika secara ringkas dapat direpresentasikan sebagai:

```
[Physical 5G Network] --telemetry--> [AAS Server] <--> [Digital Twin Engine]
        ^                                                 |
        |                                                 v
   [Control Loop] <--SLA/event-- [Production MES/PLC] <--|
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pabrik manufaktur otomotif di Stuttgart menjalankan lini perakitan *body-in-white* yang terdiri atas 24 robot ABB IRB 6700 yang dikendalikan melalui *wireless PLC* dengan *Ultra-Reliable Low-Latency Communication* (URLLC) slice. Diasumsikan spesifikasi sebagai berikut:

| Parameter | Simbol | Nilai |
|---|---|---|
| Payload per paket kontrol | $P_{payload}$ | 256 byte |
| Throughput RAN agregat | $C_{RAN}$ | 1 Gbps |
| Jumlah UE aktif | $N_{UE}$ | 24 |
| Jarak UE ke gNodeB | $d_{UE-gNB}$ | 50 m |
| Bobot prioritas URLLC slice | $w_{URLLC}$ | 0.8 |
| Bobot eMBB slice | $w_{eMBB}$ | 0.2 |
| Laju kedatangan paket (per UE) | $\lambda$ | 100 pkt/s |
| Laju layanan rata-rata | $\mu$ | 500 pkt/s |
| Threshold latensi URLLC | $L_{thr}$ | 10 ms |
| Toleransi packet loss | $\varepsilon$ | $10^{-5}$ |

### 4.2 Perhitungan Step-by-Step

**Langkah A — *End-to-end latency* komponen transmisi.**

$$
L_{tx} = \frac{P_{payload}}{R_{throughput}} = \frac{256 \times 8 \text{ bit}}{1 \times 10^9 \text{ bps}} = 2{,}048 \times 10^{-6} \text{ s} = 2{,}05 \text{ \mu s}
$$

**Langkah B — *Propagation latency*.**

$$
L_{prop} = \frac{d_{UE-gNB}}{c} = \frac{50}{3 \times 10^8} = 1{,}667 \times 10^{-7} \text{ s} \approx 0{,}17 \text{ \mu s}
$$

**Langkah C — *Queueing latency* (model M/D/1).** Intensitas trafik:

$$
\rho = \frac{\lambda}{\