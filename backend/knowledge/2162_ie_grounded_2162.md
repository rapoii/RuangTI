# 2162 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G pada Sistem Manufaktur Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 di sektor manufaktur tidak dapat dilepaskan dari kebutuhan akan interoperabilitas semantik antar aset produksi. Dalam konteks ini, Asset Administration Shell (AAS) yang dikembangkan oleh Plattform Industrie 4.0 dan kini dilanjutkan oleh Industrial Digital Twin Association (IDTA) muncul sebagai kerangka acuan (reference architecture) untuk merepresentasikan aset industri secara digital dengan struktur informasi yang terstandarisasi. Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti bahwa komunikasi nirkabel generasi kelima (5G) menjadi enabler utama bagi aplikasi *Ultra-Reliable Low-Latency Communication* (URLLC) dan *Enhanced Mobile Broadband* (eMBB) yang dibutuhkan oleh sistem manufaktur siber-fisik (CPS). Tanpa representasi digital yang terstandar, integrasi antara *Operational Technology* (OT) di lantai pabrik dan *Information Technology* (IT) di tingkat manajemen akan menghadapi friksi semantik yang menurunkan nilai strategis data.

Urgensi ekonomi dari penelitian ini terletak pada proyeksi bahwa investasi 5G untuk manufaktur akan mencapai USD 13,9 miliar secara kumulatif hingga 2030 (GSMA Intelligence, 2023), sementara lebih dari 70% lini produksi Eropa masih mengandalkan protokol *fieldbus* propieter. Ketimpangan ini menimbulkan kebutuhan akan digital twin yang tidak hanya memodelkan fisik mesin tetapi juga jaringan komunikasi yang melayaninya. Paper Cavalieri et al. (2024) dengan DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822) mengisi celah tersebut dengan mengusulkan arsitektur AAS yang secara eksplisit memodelkan *5G Communication System* sebagai aset industri. Pendekatan ini sejalan dengan temuan De Marchi, Rojas, dan Mark (2022, DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang menunjukkan bahwa arsitektur digital twin untuk *cyber-physical assembly transfer system* memerlukan *submodel* yang merepresentasikan status komunikasi, latensi, dan keandalan tautan nirkabel secara real-time. Konteks operasionalnya meliputi *smart factory* dengan robot kolaboratif, *autonomous guided vehicle* (AGV), dan *autonomous mobile robot* (AMR) yang semuanya menuntut latensi ujung-ke-ujung di bawah 10 ms dengan reliabilitas 99,999% (3GPP TS 22.261).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kapasitas Kanal 5G (Shannon-Hartley)

Kinerja komunikasi 5G untuk sistem manufaktur siber-fisik secara fundamental dibatasi oleh kapasitas kanal yang dirumuskan oleh teorema Shannon-Hartley:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right) \quad \text{(bit/s)}$$

di mana $C$ adalah kapasitas kanal, $B$ adalah bandwidth yang dialokasikan (Hz), $S$ adalah daya sinyal terima (Watt), dan $N$ adalah daya derau termal (Watt). Untuk *slicing* URLLC pada 5G, kapasitas efektif yang tersedia bagi aplikasi industri menjadi:

$$C_{\text{URLLC}} = \eta_{\text{overhead}} \cdot B_{\text{RB}} \cdot N_{\text{RB}} \cdot \log_2(1 + \text{SINR})$$

dengan $\eta_{\text{overhead}}$ adalah faktor efisiensi akibat referensi sinyal dan kontrol, $B_{\text{RB}} = 180$ kHz adalah bandwidth per *resource block*, dan $N_{\text{RB}}$ adalah jumlah *resource block* yang dialokasikan.

### 2.2 Model Latensi Ujung-ke-Ujung (E2E)

Latensi total komunikasi didekomposisi menjadi komponen-komponen pada lapisan protokol yang berbeda:

$$\tau_{\text{E2E}} = \tau_{\text{proc}} + \tau_{\text{queue}} + \tau_{\text{tx}} + \tau_{\text{prop}} + \tau_{\text{retx}}$$

di mana:
- $\tau_{\text{proc}}$ = latensi pemrosesan di gNB dan UE
- $\tau_{\text{queue}}$ = latensi antrian di *scheduler* (bergantung pada beban $\rho = \lambda/\mu$)
- $\tau_{\text{tx}}$ = latensi transmisi = $\frac{L_{\text{packet}}}{R_{\text{link}}}$
- $\tau_{\text{prop}}$ = latensi propagasi = $\frac{d_{\text{prop}}}{c \cdot n_{\text{medium}}}$
- $\tau_{\text{retx}}$ = latensi retransmisi yang mengikuti distribusi *truncated Pareto* sesuai 3GPP TR 38.913

Untuk menjamin reliabilitas $R = 1 - P(\tau_{\text{E2E}} > \tau_{\text{max}})$ pada URLLC, diterapkan *diversity gain* melalui *packet duplication* di dua jalur independen, sehingga probabilitas kegagalan menjadi:

$$P_{\text{fail}} = (1 - e^{-\lambda \tau_{\text{max}}})^2$$

### 2.3 Model Submodel AAS untuk 5G

Dalam kerangka AAS, setiap aset dimodelkan melalui *Identification* (IdentificationCard) dan satu set *Submodel*. Submodel untuk 5G mengikuti struktur:

$$\text{Submodel}_{5G} = \{ID, \text{SemanticID}, \text{Properties}, \text{Operations}, \text{Events}\}$$

Setiap *property* direpresentasikan sebagai tuple $\langle \text{idShort}, \text{semanticId}, \text{valueType}, \text{value} \rangle$, sehingga memungkinkan interoperabilitas antar *vendor* melalui *eCl@ss* atau *IEC 61360* dictionary.

### 2.4 Sinkronisasi Digital Twin

Persamaan keadaan untuk sinkronisasi antara entitas fisik dan digital pada interval diskrit $k$ mengikuti:

$$\hat{x}_{k+1} = A\hat{x}_k + B u_k + L(y_k - C\hat{x}_k)$$

di mana $L$ adalah *gain estimator Kalman* yang meminimalkan kovariansi galat. Cavalieri et al. (2024) memperluas persamaan ini dengan memasukkan *time-varying network delay* $\tau_k$ yang dimodelkan sebagai *stochastic process* dengan distribusi $\tau_k \sim \mathcal{N}(\mu_\tau, \sigma_\tau^2)$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G mengikuti prosedur operasional standar yang terdiri dari enam tahapan sistematis:

**Tahap 1 — Identifikasi Aset (Asset Identification).** Setiap simpul jaringan 5G (gNB, AMF, UPF, UE industri) diberi *globally unique identifier* sesuai IEC 61360. Untuk gNB, *globalAssetId* mengikuti format URI: `https://supplier.com/aas/ids/[0-9A-F]{32}`.

**Tahap 2 — Konstruksi Submodel.** Submodel yang relevan mencakup: (i) *CapabilitySubmodel* untuk mendeskripsikan fitur URLLC, (ii) *CommunicationProfileSubmodel* dengan properti seperti `5QI`, `GBR`, `AMBR`, dan `defaultPriority`, (iii) *ConnectivityStatusSubmodel* yang meng-*expose* status real-time (RSSI, SINR, throughput), serta (iv) *DiagnosticDataSubmodel* untuk data *performance counter*.

**Tahap 3 — Deployment di AAS Server.** Submodel disimpan pada *AAS Server* (BaSyx, SAP IAS, atau *in-house* berbasis Node.js/Python) dan diekspos melalui antarmuka HTTP/REST sesuai Spesifikasi AAS Part 2 (IDTA, 2023).

**Tahap 4 — Integrasi dengan 5G Core Network.** *Network Exposure Function* (NEF) pada 5GC menyediakan *API* berbasis *service-based interface* (SBI) yang memungkinkan AAS Server melakukan *subscription* terhadap event perubahan status *PDU Session* melalui `Nnef_EventExposure`.

**Tahap 5 — Visualisasi & Analitik.** Digital twin divisualisasikan melalui *AAS UI* dengan ekstensi Dasyy (Dashboard untuk AAS) yang menampilkan *3D scene* beserta panel telemetri 5G.

**Tahap 6 — Loop Optimasi Tertutup.** Data telemetri diumpanbalikkan ke algoritma *Self-Organizing Network* (SON) untuk optimasi *beamforming*, *handover threshold*, dan *scheduling*.

Diagram alir proses logika (*flow diagram*) untuk pertukaran data antara AAS dan 5G Core:

```
┌─────────────┐    Nnef_EventExposure    ┌──────────────┐
│   5G Core   │ ◄─────────────────────►  │   AAS Server │
│ (AMF/UPF)   │    HTTP/2 + JSON         │  (Submodels) │
└──────┬──────┘                          └──────┬───────┘
       │ N1/N2/N4 Interface                      │ REST API
       ▼                                         ▼
┌─────────────┐                          ┌──────────────┐
│  gNB (OT)   │ ─── E2 / F1 Interface ──►│  AAS UI /    │
└─────────────┘                          │  Dashboard   │
                                         └──────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik pintar dengan 30 AGV yang dikendalikan melalui *private 5G network* di pita n78 (3,5 GHz). Parameter operasional disusun dalam Tabel 1.

**Tabel 1. Parameter Sistem**

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Bandwidth agregat | $B$ | 100 | MHz |
| Jumlah RB | $N_{\text{RB}}$ | 273 | RB |
| Daya pancar gNB | $P_{tx}$ | 43 | dBm |
| Noise figure UE | $NF$ | 9 | dB |
| Jarak UE-gNB | $d$ | 50 | m |
| Ukuran paket kontrol AGV | $L$ | 64 | byte |
| Target reliabilitas | $R$ | 99,999 | % |
| Target latensi | $\tau_{\max}$ | 10 | ms |

**Langkah 1: Perhitungan SNR.** Temperatur derau termal pada band 3,5 GHz: $T_0 = 290$ K, sehingga *thermal noise floor*:

$$N = k_B T_0 B = (1{,}38 \times 10^{-23})(290)(100 \times 10^6) = 4{,}00 \times 10^{-13} \text{ W} \approx -93{,}98 \text{ dBm}$$

Tambahkan *noise figure* UE: $N_{\text{total}} = -93{,}98 + 9 = -84{,}98$ dBm. Asumsi *path loss* model 3GPP UMi NLOS: $PL(d) = 36{,}7 \log_{10}(d) + 22{,}7 + 26 \log_{10}(f_c)$ dengan $f_c = 3{,}5$ GHz:

$$PL(50) = 36{,}7 \log_{10}(50) + 22{,}7 + 26 \log_{10}(3{,}5) = 62{,}68 + 22{,}7 + 22{,}76 = 108{,}14 \text{ dB}$$

Daya sinyal terima: $S = P_{tx} - PL + G_{tx} + G_{rx} = 43 - 108{,}14 + 8 +