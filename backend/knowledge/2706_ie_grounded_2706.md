# 2706 — Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G pada Sistem Cyber-Physical Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur abad ke-21 tidak lagi hanya berbicara tentang otomasi skalar (PLC, SCADA), melainkan telah bergeser ke paradigma **cyber-physical production systems (CPPS)** di mana entitas fisik (*asset*), model digitalnya, dan jaringan komunikasi konektivitas tinggi saling terkait secara real-time. Dalam konteks ini, **Asset Administration Shell (AAS)**—sebagaimana distandarisasi oleh Plattform Industrie 4.0 dan spesifikasi IEC/PAS 63278-1—menjadi *lingua franca* interoperabilitas untuk merepresentasikan aset industri secara semantik di sepanjang *lifecycle*. Cavalieri, Di Natale, dan Gambadoro (2024) dalam proceeding ICINCO 2024 (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengangkat persoalan krusial: bagaimana AAS dapat digunakan bukan sekadar sebagai repositori metadata pasif, melainkan sebagai *digital twin aktif* yang merepresentasikan **sistem komunikasi 5G itu sendiri sebagai sebuah aset industri** yang dapat dimonitor, dikonfigurasi, dan dioptimasi.

Urgensi topik ini bersifat tiga-dimensi. Pertama, **urgensi teknis**: 5G membawa janji URLLC (*Ultra-Reliable Low-Latency Communication*) dengan target latensi ujung-ke-ujung $\le 1$ ms dan tingkat keandalan packet delivery $1-10^{-5}$ untuk kebutuhan kontrol loop tertutup pada lini produksi berkecepatan tinggi. Kedua, **urgensi operasional**: dalam arsitektur RAMI 4.0, sistem telekomunikasi (yang sebelumnya dianggap sebagai *enabler* di luar scope manufaktur) kini harus diperlakukan sebagai *production-critical asset* karena kualitas sinyal, latency, jitter, dan packet loss secara langsung memengaruhi *OEE* (Overall Equipment Effectiveness). Ketiga, **urgensi strategis**: integrasi 5G-AAS memungkinkan operator *brownfield* migrasi ke *smart factory* tanpa melakukan *forklift upgrade*, melainkan melalui pendekatan *digital retrofit*—sejalan dengan arsitektur sistem *cyber-physical assembly transfer* yang dipaparkan De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) untuk lini perakitan transfer.

Makalah Cavalieri dkk. (2024) berargumen bahwa representasi AAS untuk jaringan 5G harus mencakup **submodel Nameplate, Identification, Capability, OperationalData, dan DiagnosticData** agar jaringan dapat dilihat (*visibility*), dianalisis (*transparency*), dan diprediksi (*predictability*) perilakunya oleh *Manufacturing Execution System* (MES). Pendekatan ini menutup gap antara disiplin *telecommunications engineering* (3GPP TS 38.300, ETSI TS 123 501) dan *industrial automation engineering* (IEC 62443, IEC 63278). Sementara itu, De Marchi dkk. (2022) menyediakan bukti empiris bahwa arsitektur *digital twin* pada sistem *cyber-physical assembly transfer* memerlukan *three-tier architecture* (edge-fog-cloud) dengan sinkronisasi dua-arah (*bidirectional data flow*) agar *cycle time* perakitan tetap stabil saat variabel lingkungan berubah—kondisi yang hanya dapat dipenuhi oleh 5G dengan kemampuan *network slicing*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual AAS sebagai Digital Twin

AAS didefinisikan oleh spesifikasi industrial sebagai representasi digital dari sebuah *asset* melalui sekumpulan *submodels* yang masing-masing menangkap aspek tertentu. Untuk jaringan 5G, Cavalieri dkk. (2024) mengusulkan pemodelan dengan ruang keadaan (*state space*) berikut:

$$S_{AAS}^{5G} = \{s_{np}, s_{id}, s_{cap}, s_{op}, s_{diag}, s_{ml}\}$$

di mana:
- $s_{np}$ = submodel *Nameplate* (data statis: ID, vendor, model gNB, release 3GPP),
- $s_{id}$ = submodel *Identification* (alamat IPv6, MCC/MNC, TAC),
- $s_{cap}$ = submodel *Capability* (bandwidth, numerology $\mu$, slot duration, MIMO layers),
- $s_{op}$ = submodel *OperationalData* (throughput real-time, PRB utilization, SINR),
- $s_{diag}$ = submodel *DiagnosticData* (alarm, fault history, RSRP, RSRQ),
- $s_{ml}$ = submodel *Machine Learning Predictor* (model regresi/CNN untuk prediksi).

### 2.2 Formulasi Latensi URLLC 5G

Latensi total pada *user plane* 5G NR diberikan oleh:

$$L_{total} = L_{air} + L_{trans} + L_{core} + L_{edge}$$

dengan komponen:
- $L_{air}$ = latensi akses radio, terkait numerology $\mu$ melalui slot duration $T_{slot} = 2^{-\mu}$ ms,
- $L_{trans}$ = latensi transmisi transport (fiber/microwave),
- $L_{core}$ = latensi pada 5GC (UPF processing, N3/N6 interface),
- $L_{edge}$ = latensi processing di MEC host.

Untuk skenario URLLC pada lini perakitan transfer De Marchi dkk. (2022), batas yang disyaratkan adalah:

$$L_{total} \le L_{req} = 1 \text{ ms} \quad \text{(target URLLC)}$$

Probabilitas keberhasilan transmisi direpresentasikan sebagai:

$$P(L_{total} \le L_{req}) \ge 1 - 10^{-5}$$

### 2.3 Model Throughput Agregat dengan Network Slicing

Ketika AAS mengelola beberapa *slices* (misalnya slice untuk kontrol, slice untuk video, slice untuk voice), total throughput *cell*:

$$R_{cell} = \sum_{k=1}^{K} R_k \cdot \eta_k$$

di mana $R_k = N_{PRB,k} \cdot N_{RE,PRB} \cdot m_{cs,k} \cdot \nu_k \cdot (1 - OH_k)$ adalah throughput slice $k$, dengan:
- $N_{PRB,k}$ = jumlah Physical Resource Block,
- $N_{RE,PRB}$ = Resource Element per PRB,
- $m_{cs,k}$ = bits per RE sesuai Modulation Coding Scheme,
- $\nu_k$ = jumlah MIMO layers,
- $OH_k$ = overhead (demodulation, pilot, guard band).

### 2.4 Sinkronisasi Digital Twin (Bidirectional)

Model sinkronisasi dua-arah mengikuti persamaan beda hingga waktu-diskrit yang diadopsi De Marchi dkk. (2022):

$$x_{t+1}^{DT} = f(x_t^{DT}, u_t^{phy})$$
$$y_t^{DT} = g(x_t^{DT}, \theta_t)$$

di mana $x_t^{DT}$ adalah *state vector* digital twin, $u_t^{phy}$ adalah *measurement vector* dari fisik, $y_t^{DT}$ adalah output twin yang dibandingkan dengan $y_t^{phy}$ untuk *residual-based fault detection*:

$$r_t = y_t^{phy} - y_t^{DT}$$

dengan threshold alarm $\tau$: $|r_t| > \tau \Rightarrow$ *trigger maintenance*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-5G Digital Twin mengikuti prosedur 7-langkah sistematis berikut, yang disintesis dari Cavalieri dkk. (2024) dan diselaraskan dengan praktik baik dari De Marchi dkk. (2022):

**Langkah 1 — Identifikasi Aset Jaringan 5G.** Buat inventaris gNB (*next-generation Node B*), AMF/SMF/UPF, dan MEC host. Tetapkan setiap aset ke *Global Asset ID* (GAID) berformat URI sesuai IEC 63278.

**Langkah 2 — Pemodelan Submodel AAS.** Bangun *JSON/AASX package* berisi submodel *Nameplate*, *Identification*, *Capability*, *OperationalData*, dan *DiagnosticData*. Gunakan *Semantic Interoperability* dengan ontologi referensi dari *Eclipse AAS Submodel Template Registry*.

**Langkah 3 — Akuisisi Data via Interface 3GPP.** Sambungkan AAS ke northbound API O1 (3GPP TS 28.533) untuk *performance management*, dan ke southbound *Netconf/YANG* untuk konfigurasi.

**Langkah 4 — Deploy pada Plattform Edge/Cloud.** Tempatkan *AAS Server* (BaSyx, SAP EDC) di sisi edge untuk latensi rendah, replikasi ke cloud untuk historis. Arsitektur mengikuti pola *three-tier* ala De Marchi dkk. (2022).

**Langkah 5 — Kalibrasi Model Digital Twin.** Bandingkan output twin dengan telemetry real menggunakan MAPE (*Mean Absolute Percentage Error*):

$$MAPE = \frac{1}{N} \sum_{i=1}^{N} \left| \frac{y_i^{phy} - y_i^{DT}}{y_i^{phy}} \right| \times 100\%$$

Target: $MAPE < 5\%$.

**Langkah 6 — Integrasi ke MES/ERP.** Ekspos AAS endpoint via OPC UA atau MQTT ke *Manufacturing Execution System*. Pastikan interoperabilitas melalui *Asset Interface Description* (AID).

**Langkah 7 — Continuous Monitoring & Update.** Aktifkan *drift detection* untuk model ML; retraining terjadwal jika $|r_t|$ rata-rata melebihi ambang statistik $\bar{r} + 2\sigma$.

Diagram alir logika prosedur ini adalah: *Inventory → Submodel → 3GPP Interface → Edge Deploy → Calibration → MES Integration → Continuous Update → (loop)*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah lini perakitan transfer otomatis (De Marchi dkk., 2022) memiliki 12 *workstation* yang terhubung ke 1 *gNB 5G* indoor (band n78, 3.5 GHz). Sistem kontrol setiap workstation mengirimkan paket perintah aktuator setiap *cycle time* 200 ms. Manajemen ingin menjamin latensi ujung-ke-ujung $< 5$ ms dengan *reliability* $\ge 99.999\%$.

**Input Parameter Industri:**

| Parameter | Nilai |
|---|---|
| Numerology $\mu$ | 2 (slot duration $T_{slot}=0.25$ ms) |
| Bandwidth sistem | 100 MHz (n78) |
| Jumlah PRB $N_{PRB}$ | 273 |
| Subcarrier Spacing $\Delta f$ | 30 kHz |
| MIMO | $4 \times 4$ ($\nu = 4$) |
| Modulasi target | 64-QAM ($m_{cs} = 6$ bit/RE) |
| Overhead $OH$ | $25\%$ |
| Kapasitas produksi target | 60 unit/jam (cycle 200 ms × 12 station) |

**Langkah 1 — Hitung Throughput Maksimum Cell:**

Resource Elements per PRB (slot normal, $\mu=2$):
$$N_{RE,PRB} = 12 \text{ subcarrier} \times 14 \text{ simbol OFDM} = 168 \text{ RE}$$

Dengan asumsi 2 simbol referensi (CRS/CSI-RS): $N_{RE,data} \approx 156$ RE/PRB.

$$R_{cell} = N_{PRB} \times N_{RE,data} \times m_{cs} \times \nu \times (1-OH)$$

$$R_{cell} = 273 \times 156 \times 6 \times 4 \times (1-0.25)$$

$$R_{cell} = 273 \times 156 \times 18 = 766.7 \text{ Mbps}$$

**Langkah 2 — Alokasi Slicing untuk 12 Workstation:**

Diasumsikan 3 *slice*: 
- Slice-URLLC (kontrol) butuh $\approx 5$ Mbps per workstation × 12 = **60 Mbps**,
- Slice-eMBB (visual inspection camera) butuh 20 Mbps,
- Slice-mMTC (sensor IoT) butuh 5 Mbps.

Total demand: $\sum R_k = 85$ Mbps. Utilisasi:

$$U = \frac{\sum R_k}{R_{cell}} = \frac{85}{766.7} = 11.09\%$$

**Langkah 3 — Validasi Latensi:**

$$L_{air} = T_{slot} \times N_{slots} = 0.25 \text{ ms} \times 4 = 1 \text{ ms (4-slot TX})$$
$$L_{trans} \approx 0.05 \text{ ms