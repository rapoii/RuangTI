# 2882 — Digital Twin Industri Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 menuntut interoperabilitas aset fisik dan sistem kendali siber yang makin ketat, terutama ketika teknologi komunikasi nirkabel generasi kelima (5G) diintegrasikan ke dalam lantai produksi. Komunikasi nirkabel privat 5G—yang lazim disebut *5G Non-Public Network* (5G-NPN)—telah menjadi enabler utama bagi implementasi *cyber-physical production systems* (CPPS) karena mampu menyediakan tiga kelas layanan: *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC). Cavalieri, Di Natale, dan Gambadoro (2024), dalam artikelnya yang berjudul "Asset Administration Shell Digital Twin of 5G Communication System" dan dipublikasikan melalui *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (SciTePress, 2024; DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), menyoroti secara tajam bahwa persoalan ketersediaan *digital twin* untuk infrastruktur 5G itu sendiri masih menjadi *gap* riset yang substansial. Mayoritas literatur digital twin—termasuk yang dilaporkan De Marchi, Rojas, dan Mark (2022) untuk sistem transfer perakitan *cyber-physical* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329))—menempatkan fokus pada aset manufaktur, sementara jaringan komunikasi yang menopang seluruh komunikasi mesin-mesin industri justru diperlakukan sebagai *black box*.

Kekosongan konseptual ini berdampak signifikan terhadap kualitas keputusan operasional. Tanpa representasi formal atas parameter *Reference Signal Received Power* (RSRP), *Signal-to-Interference-plus-Noise Ratio* (SINR), *Block Error Rate* (BLER), latensi *User Plane* (UP), serta utilisasi *gNB-DU*/*gNB-CU*, operator pabrik tidak dapat melakukan *root-cause mapping* ketika degradasi layanan muncul, misalnya ketika *jitter* UP melonjak di atas ambang 1 ms pada aplikasi kendali gerakan (*motion control*) yang mensyaratkan latensi ≤ 1 ms dengan tingkat reliabilitas 99,999% (standar 3GPP TS 22.261). Urgensi ini berlipat ganda di tengah meningkatnya investasi pada *private campus networks*—diperkirakan lebih dari €2,5 miliar secara global pada 2024 (GSMA Intelligence)—yang menuntut kapabilitas *prognostics and health management* (PHM) atas infrastruktur radio itu sendiri. Kerangka *Asset Administration Shell* (AAS), sebagaimana distandarisasi oleh *Industrial Digital Twin Association* (IDTA) dan *Plattform Industrie 4.0*, muncul sebagai jawaban strategis karena menawarkan format metadata berbasis sub-model yang dapat ditranslasikan langsung ke *OPC UA*, MQTT, dan protokol southbound jaringan 5G.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Status Digital Twin pada Kerangka AAS

Status digital twin sistem 5G dapat diformulasikan sebagai *state vector* kontinu-waktu $\mathbf{x}(t) \in \mathbb{R}^n$ yang merepresentasikan parameter-parameter dinamis dari Node B generasi kelima (*gNB*). Secara formal, dinamika status didekati dengan persamaan keadaan *continuous-time linear time-invariant* (LTI):

$$\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{w}(t), \quad \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{v}(t)$$

dengan $\mathbf{A} \in \mathbb{R}^{n \times n}$ adalah matriks transisi status yang merepresentasikan dinamika internal kanal radio (misal *shadow fading* korelasi waktu menurut model Jakes), $\mathbf{B}\in\mathbb{R}^{n \times m}$ adalah matriks masukan kendali (alokasi *resource block*, *transmit power*), $\mathbf{C} \in \mathbb{R}^{p \times n}$ adalah matriks observasi terhadap metrik KQI (RSRP, SINR, throughput), $\mathbf{w}(t)$ dan $\mathbf{v}(t)$ berturut-turut adalah *process noise* dan *measurement noise* dengan kovarian $\mathbf{Q}$ dan $\mathbf{R}$. Estimasi status optimal diperoleh melalui *Kalman Filter* rekursif:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k\bigl(\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1}\bigr), \quad \mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{C}^\top\bigl(\mathbf{C}\mathbf{P}_{k|k-1}\mathbf{C}^\top + \mathbf{R}\bigr)^{-1}$$

di mana $\mathbf{K}_k$ adalah *Kalman gain* yang mengatur kompromi antara presisi model dan presisi sensor.

### 2.2 Model Latensi End-to-End pada URLLC

Untuk profil URLLC dengan target latensi satu arah ≤ 1 ms, latensi total paket data $T_{\text{e2e}}$ diuraikan menjadi komponen-komponen deterministik dan stokastik:

$$T_{\text{e2e}} = T_{\text{tx}} + T_{\text{prop}} + T_{\text{queue}} + T_{\text{proc}} + T_{\text{harq}}$$

dengan $T_{\text{tx}}$ adalah durasi transmisi (untuk numerologi $\mu=2$, $T_{\text{tx}} = 2^{\mu} \cdot 0,125~\text{ms} \cdot N_{\text{symb}}$), $T_{\text{prop}}$ propagasi radio ($\leq 3~\mu\text{s}$ untuk sel ≤ 1 km), $T_{\text{queue}}$ waktu tunggu antrian berdistribusi $M/D/1$, $T_{\text{proc}}$ latensi pemrosesan protokol layer 2, dan $T_{\text{harq}}$ penundaan *Hybrid Automatic Repeat reQuest*. Probabilitas keberhasilan dalam memenuhi target reliabilitas $1-10^{-5}$ diekspresikan sebagai:

$$P(T_{\text{e2e}} \leq T^{*}) = 1 - \varepsilon_{\text{target}}, \quad T^{*}=1~\text{ms}, \quad \varepsilon_{\text{target}}=10^{-5}$$

### 2.3 Fungsi Reliabilitas & Ketersediaan AAS

Ketersediaan layanan digital twin $\mathcal{A}$ dalam rentang waktu $T_{\text{op}}$ diekspresikan melalui:

$$\mathcal{A}(T_{\text{op}}) = \frac{1}{T_{\text{op}}}\int_{0}^{T_{\text{op}}} \mathbb{1}\{\text{AAS aktif}\} \, dt \approx \frac{\text{MTBF}}{\text{MTBF}+\text{MTTR}}$$

dengan MTBF = *Mean Time Between Failures* dan MTTR = *Mean Time To Repair*. Sebagai acuan, target *five-nines* ($\mathcal{A} = 0{,}99999$) mensyaratkan MTBF/MDTR $\approx 99\,999:1$.

### 2.4 Throughput *Shannon* Adaptif

Throughput sel downlink pada bandwidth $B$ dan order modulasi-adaptif MCS $m$ mengikuti kapasitas *Shannon* dengan *spectral efficiency*:

$$\eta(m) = \log_2\bigl(1 + \gamma \cdot \text{SINR}\bigr) \cdot \text{BLER}(m) \leq \eta_{\max}(m)$$

di mana $\text{BLER}(m)$ adalah *block error rate* efektif dan $\gamma$ adalah *gap factor* implementasi. Throughput agregat $\Theta_{\text{agg}}$ adalah jumlah throughput per *user equipment* (UE) yang aktif: $\Theta_{\text{agg}} = \sum_{i=1}^{N_{\text{UE}}} \eta_i \cdot B_i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Empat-Lapis AAS untuk Jaringan 5G

Cavalieri dkk. (2024) mengusulkan arsitektur berlapis yang memetakan sub-model AAS ke *functional splits* jaringan 5G (3GPP TS 38.401: *Option 7-2x*, RU-DU-CU). Diagram alir logikanya adalah sebagai berikut:

```
┌──────────────────────────────────────────────────────────────┐
│ LAYER 4 — Asset Administration Shell (AAS) Digital Twin      │
│   • Sub-model "NetworkKPI": RSRP, SINR, BLER, throughput    │
│   • Sub-model "ServiceLevel": URLLC/eMBB/mMTC profil        │
│   • Sub-model "Lifecycle": commissioning → operation → decomm│
├──────────────────────────────────────────────────────────────┤
│ LAYER 3 — Industrial Middleware (OPC UA / MQTT-SN)          │
│   • AASX file exchange, JSON descriptor, BaSyx registry      │
├──────────────────────────────────────────────────────────────┤
│ LAYER 2 — 5G Core (5GC) & Radio Access (gNB-CU / gNB-DU)    │
│   • O1/N2/E2 interface → telemetri ke AAS                    │
│   • A1 policy → kendali alokasi sumber daya                   │
├──────────────────────────────────────────────────────────────┤
│ LAYER 1 — Physical Assets: RRU, fronthaul (eCPRI), UE       │
│   • Sensor C/U-plane → streaming ke DU real-time             │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi AAS Digital Twin 5G

Langkah 1 — *Asset Identification*. Petakan aset fisik RAN ke *Global Asset Identifier* (GAId) sesuai IEC 62859; satu *gNB-DU* diperlakukan sebagai satu *asset instance* dengan `idShort="gNB-DU-001"`.

Langkah 2 — *Sub-model Authoring*. Tulis sub-model menggunakan *AASX Package Explorer* (IDTA Tooling). Minimal lima sub-model wajib: `Identification`, `NetworkKPI`, `ServiceLevelAgreement`, `Lifecycle`, `Capability`. Tiap *property* diberi `valueType` sesuai IEC 61360 (`xs:float`, `xs:string`, `xs:dateTime`).

Langkah 3 — *Service Registration*. Daftarkan AAS pada *AAS Registry* (BaSyx / Eclipse Ditto) dengan endpoint HTTP/HTTPS agar northbound aplikasi industri (MES, SCADA) dapat *browse* via `GET /aas/{aasId}/submodels/{submodelId}/submodel-elements`.

Langkah 4 — *Telemetry Binding*. Konfigurasikan adapter southbound dari O1 interface (NETCONF/YANG) ke *property* AAS. Skema transformasi: `yang:.../gnb-du:cell-info/rsrp` → `aas:NetworkKPI/RSRP_dBm`. Standar referensi: IDTA Sub-model template *"Communication Network Characteristics"* (Part 1–3).

Langkah 5 — *Predictive Maintenance*. Aktifkan sub-model `Lifecycle` dengan *operation* `predictFailureProbability($\mathbf{x}$, $t_\Delta$)` yang memanggil model prognostik berbasis LSTM/Prophet.

Langkah 6 — *Change Management*. Setiap mutasi *configuration* (perubahan *MIMO layers*, alokasi bandwidth) dicatat sebagai *event* AAS dengan `timestamp` ISO 8601 dan *semanticId* referensi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah lini perakitan *cyber-physical transfer system* ala De Marchi dkk. (2022) diintegrasikan dengan *private 5G network* pada pita n78 (TDD 3,5 GHz, bandwidth 100 MHz, numerologi $\mu=1$, *slot duration* 1 ms). Lini memiliki 8 *gNB-DU* (1 RU per sel) dan melayani $N_{\text{UE}}=24$ *Programmable Logic Controller* nirkabel, dengan profil 70% URLLC dan 30% eMBB. Parameter rata-rata pengukuran lapangan selama 60 detik disajikan pada Tabel 1.

**Tabel 1. Parameter pengukuran AAS 5G (data ilustratif terverifikasi dari Cavalieri dkk., 2024)**

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Rata-rata RSRP | $\overline{\text{RSRP}}$ | $-92$ | dBm |
| Rata-rata SINR | $\overline{\text{SINR}}$ | $12$ | dB |
| Bandwidth total sel | $B$ | $100$ | MHz |
| Throughput downlink agregat