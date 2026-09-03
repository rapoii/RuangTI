# 1634 — Digital Twin Asset Administration Shell (AAS) Sistem Komunikasi 5G untuk Sistem Produksi Siber-Fisik Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah mengubah secara fundamental paradigma rekayasa sistem manufaktur melalui konvergensi antara domain siber (cyber), domain fisik (physical), dan domain komunikasi (communication). Dalam konteks ini, **Asset Administration Shell (AAS)** muncul sebagai standar referensi internasional yang didefinisikan oleh *Plattform Industrie 4.0* dan kini diformalkan melalui IEC PAS 63294:2021 serta IEC TR 62541 (OPC UA). Seperti yang ditegaskan oleh Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper *"Asset Administration Shell Digital Twin of 5G Communication System"* yang diterbitkan pada *Proceedings of the 21st ICINCO* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), integrasi antara AAS dan jaringan komunikasi 5G privat menjadi enabler kritis bagi implementasi *cyber-physical production systems* (CPPS) yang resilien, deterministik, dan dapat diorkestrasi secara end-to-end.

Urgensi permasalahan ini nyata di lantai pabrik. Berdasarkan laporan *5G Alliance for Connected Industries and Automation* (5G-ACIA, 2022), lebih dari 70% lantai pabrik pintar membutuhkan latensi komunikasi di bawah 10 ms untuk aplikasi *closed-loop control*, sementara jaringan Wi-Fi industri konvensional hanya mampu menjamin latensi tipikal 20–50 ms dengan jitter tinggi. Cavalieri *et al.* (2024) menyoroti bahwa tantangan ini tidak cukup diselesaikan dengan sekadar membangun twin digital untuk aset fisik (robot, PLC, sensor), melainkan memerlukan **digital twin untuk infrastruktur komunikasinya itu sendiri** — sebuah *meta-twin* yang memodelkan perilaku, kualitas layanan (QoS), dan degradasi jaringan 5G. Pendekatan ini melengkapi kerangka yang sebelumnya dikemukakan oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang membangun arsitektur digital twin untuk *cyber-physical assembly transfer system*, di mana transfer material antar-stasiun memerlukan sinkronisasi presisi antara dunia fisik dan representasi virtualnya.

Secara ekonomis, biaya *downtime* pada lini produksi otomatis bernilai rata-rata €50.000–€250.000 per jam menurut studi *International Society of Automation* (ISA, 2021), sehingga kemampuan untuk melakukan *predictive maintenance* dan *what-if simulation* terhadap jaringan 5G sebelum gangguan terjadi memiliki nilai strategis yang sangat tinggi. Lebih jauh, *European Chips Act* dan inisiatif *Germany's Catena-X* secara eksplisit mengamanatkan interoperabilitas berbasis AAS untuk menjamin *data sovereignty* lintas rantai pasok, menjadikan topik ini tidak hanya relevan secara teknis tetapi juga strategis secara kebijakan industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi Asset Administration Shell

AAS didefinisikan sebagai representasi digital standar dari sebuah aset industri yang mengikuti *metamodel* berjenjang. Submodel utama yang relevan untuk studi komunikasi 5G menurut Cavalieri *et al.* (2024) adalah **Submodel "Communication"** dengan struktur:

$$\text{AAS} = \langle \text{Header}, \text{Submodels} \rangle, \quad \text{Submodels} = \{SM_k\}_{k=1}^{K}$$

Setiap submodel $SM_k$ terdiri atas koleksi *property*, *operation*, dan *event* yang direpresentasikan melalui *semantic identifier* sesuai *Eclass* atau *IEC CDD*:

$$SM_k = \{P_{k,i}, Op_{k,j}, Ev_{k,l}\} \mid i,j,l \in \mathbb{N}$$

di mana $P_{k,i}$ adalah properti dengan ID semantik misalnya `0173-1#02-AAV732#001` (merepresentasikan latensi round-trip 5G).

### 2.2 Formulasi Kualitas Layanan (QoS) Jaringan 5G untuk Twin

Untuk parameterisasi AAS terhadap jaringan 5G privat, Cavalieri *et al.* (2024) mengusulkan pengukuran tiga metrik esensial: *End-to-End Latency* ($L_{e2e}$), *Packet Loss Rate* ($PLR$), dan *Jitter* ($J$). Model latensi total dalam jaringan 5G dapat diformulasikan sebagai:

$$L_{e2e} = L_{air} + L_{core} + L_{edge} + L_{proc}$$

di mana:
- $L_{air}$ = latensi propagasi radio pada *Uu interface* (umumnya 1–4 ms pada *Sub-6 GHz*),
- $L_{core}$ = latensi pada *5GC (5G Core)* tipikal 1–2 ms,
- $L_{edge}$ = latensi *Multi-access Edge Computing* (MEC) 0,5–1 ms,
- $L_{proc}$ = latensi pemrosesan aplikasi AAS.

Untuk menjamin QoS, ditentukan *constraint* deterministik:

$$L_{e2e} \le L_{max}, \quad PLR \le \epsilon, \quad J \le \sigma$$

dengan $L_{max}$ = 10 ms, $\epsilon$ = 10⁻⁹ (untuk URLLC), dan $\sigma$ = 1 ms sesuai standar *3GPP TS 22.261*.

### 2.3 Model Sinkronisasi Digital Twin

Tingkat sinkronisasi antara AAS (digital twin) dan aset 5G fisik dimodelkan melalui *synchronization error* $\delta_{sync}$:

$$\delta_{sync}(t) = \| S_{phy}(t) - S_{vir}(t) \|$$

dengan $S_{phy}$ status fisik (dari telemetry via *OPC UA over 5G*) dan $S_{vir}$ status virtual di AAS. Cavalieri *et al.* (2024) memperkenalkan fungsi *coherence index* $\mathcal{C}$:

$$\mathcal{C}(t) = e^{-\lambda \delta_{sync}(t)}, \quad \lambda > 0$$

di mana $\mathcal{C} \in [0,1]$ dengan $\mathcal{C}=1$ merepresentasikan sinkronisasi sempurna.

### 2.4 Formula Throughput Jaringan dan Network Slicing

Untuk kapasitas slice jaringan 5G yang dialokasikan ke AAS:

$$R_{slice} = B_{eff} \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B_{eff} \cdot F}\right)$$

di mana $B_{eff}$ adalah bandwidth efektif slice, $P_t$ daya transmisi, $G_t, G_r$ gain antena, $N_0$ noise spectral density, dan $F$ noise figure.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Cavalieri *et al.* (2024) mengusulkan metodologi empat tahap untuk mengimplementasikan AAS Digital Twin sistem komunikasi 5G:

### Tahap 1 — Identifikasi Aset & Pemetaan Submodel
1. Inventarisasi aset 5G: *gNodeB*, *UPF*, *AMF*, *SMF*, *MEC node*, *UE* (sensor/robot/AGV).
2. Pembuatan *Identification* submodel dengan `globalAssetId` berbasis URI.
3. Pembuatan *Nameplate* submodel berisi properti pabrikan.
4. Pembuatan *Communication* submodel berisi metrik $L_{e2e}$, $PLR$, $J$, $R_{slice}$.

### Tahap 2 — Instrumentasi & Pengumpulan Data Telemetry
1. Deployment *OPC UA Server* pada setiap node jaringan 5G.
2. Konfigurasi *MQTT broker* di MEC untuk agregasi data lintas-slice.
3. Sampling period $T_s$ disesuaikan: $T_s \le 0{,}1 \cdot L_{max}$.
4. Penyiapan *time synchronization* via *IEEE 1588v2 PTP* dengan akurasi ±100 ns.

### Tahap 3 — Pemodelan & Validasi Twin
1. Pembuatan *Digital Twin asset* di AAS sesuai spektrum part *Asset Administration Shell – Part 2*.
2. Validasi melalui *coherence index* $\mathcal{C} \ge 0{,}95$ selama minimal 24 jam operasional.
3. *Regression testing* menggunakan *digital shadow* untuk prediksi.

### Tahap 4 — Orkestrasi & Layanan Nilai Tambah
1. Integrasi dengan *BaSyx* (middleware AAS referensi开源).
2. *Predictive maintenance* model LSTM dengan *training window* 30 hari.
3. *What-if simulation* untuk skenario *cell outage*, *slice congestion*, dan *handover failure*.

**Diagram Alir SOP:**

```
[Identifikasi Aset 5G]
        │
        ▼
[Pemetaan AAS Submodels]
        │
        ▼
[Instrumentasi OPC UA / MQTT]
        │
        ▼
[Pengumpulan Telemetri (T_s)]
        │
        ▼
[Validasi Coherence Index 𝒞 ≥ 0.95] ──✗──> [Kalibrasi Ulang]
        │ ✓
        ▼
[Orkestrasi & Predictive Maintenance]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Lini Perakitan Baterai EV dengan 5G Privat

Ambil kasus lini perakitan *battery pack* kendaraan listrik di pabrik percontohan. Parameter industri:

| Parameter | Simbol | Nilai |
|---|---|---|
| Jumlah robot kolaboratif | $N_{robot}$ | 12 unit |
| Jumlah AGV | $N_{agv}$ | 8 unit |
| Bandwidth slice 5G | $B_{eff}$ | 100 MHz |
| Daya transmisi | $P_t$ | 23 dBm |
| Gain antena total | $G_t G_r$ | 10 dBi |
| Noise spectral density | $N_0$ | −174 dBm/Hz |
| Noise figure | $F$ | 5 dB |
| Sampling period | $T_s$ | 5 ms |
| Latency budget | $L_{max}$ | 10 ms |

### 4.2 Perhitungan Throughput Slice 5G

Substitusi ke persamaan Shannon:

$$R_{slice} = 100 \times 10^6 \cdot \log_2\left(1 + \frac{10^{(23+10-174-5)/10}}{1}\right)$$

$$= 10^8 \cdot \log_2\left(1 + 10^{-14.6}\right) \approx 10^8 \cdot \log_2(1 + 2{,}51 \times 10^{-15})$$

Karena SNR sangat rendah akibat noise, kita koreksi dengan SNR efektif dari link budget riil. Asumsikan SNR kerja riil $= 15$ dB $= 31{,}62$:

$$R_{slice} = 10^8 \cdot \log_2(1 + 31{,}62) = 10^8 \cdot 5{,}02 \approx 502 \text{ Mbps}$$

Alokasi per perangkat = $502 / (12+8) = 25{,}1$ Mbps per unit — cukup untuk telemetri + video kontrol 720p.

### 4.3 Perhitungan Latensi End-to-End

Asumsikan tipikal industri 5G privat (Sub-6 GHz, TDD, numerology $\mu=1$):

$$L_{air} = 4 \text{ ms (slot durasi)}, \quad L_{core} = 1{,}5 \text{ ms}, \quad L_{edge} = 0{,}8 \text{ ms (MEC)}, \quad L_{proc} = 0{,}7 \text{ ms}$$

$$L_{e2e} = 4 + 1{,}5 + 0{,}8 + 0{,}7 = 7{,}0 \text{ ms} \le L_{max} = 10 \text{ ms} \quad \checkmark$$

*Margin* terhadap budget = $(10 - 7)/10 = 30\%$ — memenuhi standar *3GPP URLLC*.

### 4.4 Perhitungan Coherence Index

Misalkan telemetry memberi $\delta_{sync}$ = 0,02 dan $\lambda$ = 10 (terkalibrasi):

$$\mathcal{C} = e^{-10 \cdot 0{,}02} = e^{-0{,}2} \approx 0{,}819$$

Karena $\mathcal{C} < 0{,}95$, diperlukan peningkatan *sampling rate*. Naikkan $T_s$ menjadi 1 ms dengan sinkronisasi PTP, turunkan $\delta_{sync}$ menjadi 0,005:

$$\mathcal{C}_{baru} = e^{-10 \cdot 0{,}005} = e^{-0{,}05} \approx 0{,}951 \ge 0{,}95 \quad \checkmark$$

### 4.5 Nilai Tambah Manajerial

- **Penghematan downtime:** prediksi 4 *cell outage* per tahun, masing