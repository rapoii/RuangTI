# 2354 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Arsitektur Cyber-Physical Transfer System

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik telah memasuki fase keempat yang ditandai dengan konvergensi antara *cyber-physical systems* (CPS), Internet of Things (IoT), dan kecerdasan buatan. Dalam kerangka *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang dipromosikan oleh *Plattform Industrie 4.0*, **Asset Administration Shell (AAS)** muncul sebagai tulang punggung interoperabilitas karena menyediakan representasi virtual standar dari setiap aset fisik melalui submodel yang dapat dibaca mesin. Standarisasi AAS melalui spesifikasi *Details of the Asset Administration Shell* (IEC/PAS 62443 seri dan dokumen kerja *Plattform Industrie 4.0*) menjadikannya komponen wajib bagi setiap perusahaan yang ingin mengadopsi paradigma digital twin secara end-to-end.

Pada saat yang bersamaan, peluncuran jaringan komunikasi bergerak generasi kelima (5G) membawa tiga profil layanan utama: *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC). Ketiga profil ini memenuhi kebutuhan spesifik industri manufaktur — dari transmisi video inspeksi mutu (eMBB), kendali robotika presisi dengan latensi sub-1 ms (URLLC), hingga konektivitas ribuan sensor nirkabel per kilometer persegi (mMTC). Integrasi 5G dengan AAS menjadi krusial karena komunikasi nirkabel tidak lagi sekadar pendukung, melainkan menjadi variabel arsitektural yang menentukan kelayakan *digital twin* dalam *closed-loop control*.

Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang dipublikasikan di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) membahas bagaimana AAS dapat digunakan untuk memodelkan elemen-elemen sistem komunikasi 5G secara formal dan dapat di-*query* oleh entitas industri. Pendekatan ini mengisi celah (gap) antara standar AAS yang awalnya didesain untuk aset mesin/manufaktur dan kebutuhan telekomunikasi industri. Sementara itu, De Marchi, Rojas, dan Mark (2022) pada *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) melengkapi sisi komplementer dengan mengusulkan arsitektur *digital twin* untuk *cyber-physical assembly transfer system* yang mampu menjaga koherensi status antara lini fisik dan representasi virtualnya.

Urgensi ekonominya nyata: studi McKinsey & Company (2023) memperkirakan pasar *digital twin* industri akan melampaui USD 150 miliar pada 2030, dengan CAGR >35%. Kegagalan mengintegrasikan lapisan telekomunikasi ke dalam arsitektur *digital twin* akan menghasilkan "silo virtual" yang tidak mampu merefleksikan real-time constraint lantai pabrik, sehingga menurunkan *Overall Equipment Effectiveness* (OEE) rata-rata 8–15% akibat mismatch data. Oleh karena itu, kombinasi AAS + 5G + arsitektur CPS menjadi pilar yang wajib dikuasai oleh setiap insinyur industri di era *smart manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Submodel AAS

AAS secara formal didefinisikan sebagai tuple:

$$\text{AAS} = \langle \text{id}_{\text{asset}}, \, \mathcal{S}, \, \mathcal{V}, \, \mathcal{R} \rangle$$

di mana $\text{id}_{\text{asset}}$ adalah *globally unique identifier* (berdasarkan *International Data Space* reference), $\mathcal{S} = \{s_1, s_2, \dots, s_n\}$ adalah himpunan *submodel*, $\mathcal{V}$ adalah himpunan *property* yang merepresentasikan atribut fisik/operasional, dan $\mathcal{R}$ adalah himpunan relasi antar-submodel. Setiap properti $v \in \mathcal{V}$ memenuhi kontrak:

$$v = \langle \text{id}_v, \, \text{semanticId}_v, \, \text{valueType}, \, \text{value}_v(t) \rangle$$

dengan $\text{value}_v(t)$ merupakan nilai time-varying yang diperbarui oleh sensor lapangan.

### 2.2 Model Jaringan 5G untuk Komunikasi Industri

Kapasitas kanal 5G menurut teorema Shannon-Hartley untuk *sub-6 GHz* adalah:

$$C = B \cdot \log_2\!\left(1 + \frac{S}{N}\right) \quad [\text{bit/s}]$$

dengan $B$ adalah bandwidth (Hz), $S$ daya sinyal (W), dan $N$ daya derau (W). Untuk *mmWave* (FR2, 26–28 GHz), kapasitas puncak teoritis dapat melampaui 20 Gbps *downlink* ketika menggunakan *carrier aggregation* dan *massive MIMO* $64 \times 64$.

Latensi end-to-end URLLC dimodelkan sebagai:

$$L_{\text{e2e}} = L_{\text{proc}} + L_{\text{queue}} + L_{\text{tx}} + L_{\text{prop}} + L_{\text{propag}}$$

Untuk aplikasi kontrol robotika presisi, batas yang direkomendasikan oleh 3GPP TS 22.104 adalah:

$$L_{\text{e2e}}^{\text{URLLC}} \leq 1 \,\text{ms}, \quad \text{dengan reliabilitas } R = 1 - P_{\text{loss}} \geq 1 - 10^{-5}$$

### 2.3 Model Sinkronisasi Digital Twin

Sistem CPS transfer lini yang dibahas De Marchi et al. (2022) mengikuti persamaan ruang-keadaan diskrit:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k$$
$$\mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k$$

dengan $\mathbf{x}_k \in \mathbb{R}^n$ adalah *state vector* (posisi konveyor, kecepatan, torsi, suhu), $\mathbf{u}_k$ adalah vektor kendali, $\mathbf{y}_k$ adalah output terukur, dan $\mathbf{w}_k, \mathbf{v}_k$ adalah noise Gaussian dengan kovarians $\mathbf{Q}$ dan $\mathbf{R}$. Estimasi state optimal diberikan oleh *Kalman filter* rekursif:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k (\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1})$$

di mana gain Kalman $\mathbf{K}_k$ meminimalkan trace dari kovariansi error $\mathbf{P}_{k|k}$.

*Time-stamping* antara *physical asset* dan *virtual counterpart* menggunakan protokol IEEE 1588 *Precision Time Protocol* (PTP) dengan simpangan:

$$\sigma_{\text{clock}}^2 = \sigma_0^2 + \sigma_{\text{drift}}^2 \cdot T_{\text{sync}}^2$$

yang harus dijaga $\sigma_{\text{clock}} \leq 1 \,\mu\text{s}$ untuk aplikasi kendali gerak tertutup.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Empat Lapis AAS-5G

```
┌─────────────────────────────────────────────────────────┐
│ Layer 4 — Application Services (SCADA, MES, ERP, AI/ML)│
├─────────────────────────────────────────────────────────┤
│ Layer 3 — AAS Registry & Submodel Repository (BaSyx)   │
│   ├── Submodel "Identification"                         │
│   ├── Submodel "5G Network Slice"                        │
│   ├── Submodel "QoS KPI"                                 │
│   └── Submodel "Asset Health"                            │
├─────────────────────────────────────────────────────────┤
│ Layer 2 — 5G Core + Edge Compute (MEC)                  │
│   ├── AMF/SMF/UPF                                       │
│   ├── Network Slice Selection Function (NSSF)           │
│   └── Edge App (Digital Twin Sync)                       │
├─────────────────────────────────────────────────────────┤
│ Layer 1 — Physical Assets & 5G UE/Modem                 │
│   ├── Conveyor, Robot, AGV                               │
│   ├── Sensors (vib, temp, vision)                        │
│   └── Industrial 5G Modem (e.g., Quectel RG500Q)        │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Tujuh Tahap

1. **Identifikasi Aset** — Tentukan *asset ID* global (format `https://company.com/aas/{uuid}`).
2. **Pemodelan Submodel** — Pilih *submodel template* dari katalog resmi `github.com/admin-shell-io/submodel-templates`. Untuk 5G, Cavalieri et al. (2024) mengusulkan submodel khusus `5GNetworkSlice` dan `CommunicationKPI`.
3. **Provisioning 5G Slice** — Gunakan API 3GPP (mis. `NSSF_NSAC`) untuk memesan slice URLLC:  
   ```json
   { "sst": 1, "sd": "000099", "5qi": 84, "latency_ms": 1 }
   ```
4. **Edge Deployment** — Deploy *AAS server* (BaSyx / Eclipse Ditto) pada Multi-access Edge Computing (MEC) dengan latensi hop ≤ 10 ms.
5. **Sensor Binding** — Konfigurasi *OPC UA over 5G* (port 4840) atau MQTT-SN untuk setiap sensor.
6. **Digital Twin Synchronization** — Implement