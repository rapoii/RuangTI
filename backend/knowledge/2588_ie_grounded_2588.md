# 2588 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Fondasi Process Analytical Technology (PAT) Generasi Baru

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan proses unit kritis dalam industri biofarmasi untuk menstabilkan sediaan termolabil seperti protein monoklonal, mRNA, dan vaksin. Lebih dari 50% produk biofarmasi yang saat ini mendapat persetujuan regulatori memerlukan tahap liofilisasi dalam rantai produksinya (Meza‐Galvan, Strongrich, & Darwish, 2026, [DOI:10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Dalam konteks ini, visibilitas proses secara *real-time* bukan sekadar kebutuhan operasional—melainkan prasyarat mutu yang diatur oleh inisiatif Process Analytical Technology (PAT) FDA (2004) dan kerangka Quality by Design (QbD) ICH Q8(R2).

Secara historis, pemantauan suhu produk dilakukan menggunakan termokopel berkabel (*wired thermocouples*) yang menembus dinding ruang vakum. Solusi ini memiliki tiga kelemahan struktural yang signifikan secara industri: (i) kompromi integritas vakum dan sterilitas karena setiap kabel adalah potensi *leak path*; (ii) jumlah titik ukur terbatas—umumnya hanya 3–5 vial dari total ratusan ribu vial dalam satu batch—mengakibatkan keputusan proses diekstrapolasi dari sampel yang sangat kecil; dan (iii) biaya kegagalan batch yang sangat tinggi, dengan satu *lot* produk biologis bernilai komersial mencapai USD 1–5 juta (Artusio, Barresi, & Pisano, 2026, [DOI:10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)). Berdasarkan tinjauan literatur, jaringan sensor nirkabel (*Wireless Sensor Networks*—WSN) muncul sebagai arsitektur transformatif yang mampu menambah kerapatan pengukuran tanpa menambah risiko kontaminasi, sekaligus menyediakan umpan balik kontinu untuk algoritma *Model Predictive Control* (MPC). Urgensi implementasi WSN meningkat ketika dikaitkan dengan tren industri: (a) meningkatnya kompleksitas formulasi (misalnya formulasi highly concentrated dengan viskositas tinggi yang memerlukan profil termal presisi); (b) dorongan untuk *continuous manufacturing* yang memerlukan *in-line* monitoring; dan (c) kebutuhan untuk memvalidasi setiap vial sesuai paradigma *batch release based on process data*. Dengan demikian, investasi pada WSN bukan sekadar biaya modal, melainkan *risk mitigation* terhadap kerugian operasional dan penundaan *release* produk bernilai tinggi.

## 2. Landasan Teori & Formulasi Matematis

Liofilisasi terdiri dari tiga tahap: *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi). Tahap *primary drying* menjadi fokus utama pemantauan karena menyerap 60–80% dari total waktu siklus dan menjadi titik kritis kegagalan mutu. Model fisik yang banyak diadopsi adalah *Steele-Deckard quasi-steady state*, yang menyatakan fluks sublimasi sebagai:

$$\dot{m} = \frac{P_{i,c} - P_{i,s}}{R_p}$$

dengan $\dot{m}$ adalah fluks massa sublimasi (kg·m⁻²·s⁻¹), $P_{i,c}$ tekanan uap air parsial pada permukaan kondensor, $P_{i,s}$ tekanan uap air pada *sublimation front*, dan $R_p$ tahanan lapisan kering (*dried layer resistance*). Parameter $R_p$ dapat dimodelkan lebih lanjut sebagai:

$$R_p = R_{p,0} + \frac{A_0 + A_1 \cdot L}{A_0 + A_1 \cdot (L - \ell)}$$

dengan $L$ adalah tebal cake total, $\ell$ kedalaman *sublimation front*, dan $A_0, A_1$ parameter empiris. Waktu pengeringan primer diprediksi oleh persamaan Pikal:

$$t_p = \frac{L^2}{8 \cdot D_{e} \cdot (p_{w,s} - p_{w,c})/P_{tot}}$$

dengan $D_e$ difusivitas efektif uap air dalam lapisan kering.

Pada tingkat jaringan sensor, konsumsi energi transmisi data mengikuti model *first-order radio*:

$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{n}$$

dengan $k$ ukuran paket (bit), $d$ jarak transmisi, $E_{elec}$ energi/bit pada sirkuit elektronik, $\epsilon_{amp}$ koefisien penguatan, dan eksponen $n \in \{2, 4\}$ tergantung pada model propagasi (*free-space* vs. *two-ray ground*). Untuk aplikasi dalam ruang vakum logam—seperti ruang liofilisasi—propagasi radio dibatasi oleh efek *cavity resonance* dan redaman stainless steel, sehingga model propagasi harus dikalibrasi ulang dengan parameter $n \approx 2.5\text{–}3.2$ sesuai geometri chamber.

Estimasi suhu vial dari pengukuran sparse dapat dilakukan dengan *Unscented Kalman Filter* (UKF), dengan persamaan observasi non-linear:

$$\mathbf{x}_{k|k} = \mathbf{x}_{k|k-1} + \mathbf{K}_k (\mathbf{z}_k - h(\mathbf{x}_{k|k-1}))$$

dengan $\mathbf{K}_k$ Kalman gain, $\mathbf{z}_k$ vektor pengukuran, dan $h(\cdot)$ fungsi observasi non-linear. Pendekatan ini memungkinkan rekonstruksi *thermal map* seluruh *batch* dari hanya beberapa titik ukur nirkabel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam liofilisasi mengikuti arsitektur berlapis yang lazim diadopsi dalam sistem *Industrial Internet of Things* (IIoT):

```
┌─────────────────────────────────────────────────────────┐
│ Layer 4 – Cloud/Edge Analytics (PAT Dashboard)         │
│   • Multivariate Statistical Process Control (MSPC)      │
│   • Model Predictive Control (MPC)                       │
├─────────────────────────────────────────────────────────┤
│ Layer 3 – Sink/Gateway Node                              │
│   • Penerima RF + Antarmuka OPC UA ke DCS/PLC           │
│   • Time synchronization (IEEE 1588 PTP)                │
├─────────────────────────────────────────────────────────┤
│ Layer 2 – Relay Mesh Network                             │
│   • Multi-hop routing (RPL, TSCH protocol)               │
│   • Redundancy & self-healing                            │
├─────────────────────────────────────────────────────────┤
│ Layer 1 – Sensor Nodes (Vial-Level Wireless Probes)      │
│   • Microbolometer / RTD wireless                        │
│   • Battery + RFID-based thermal harvesting              │
└─────────────────────────────────────────────────────────┘
```

SOP industri untuk implementasi mengikuti urutan berikut: (1) **Kualifikasi Desain (DQ)** — verifikasi bahwa sensor bersifat *food-grade* atau *pharma-grade* (USP Class VI), mampu beroperasi pada rentang $-80°C$ hingga $+60°C$ dan vakum $10^{-3}$ mbar; (2) **Pemetaan Sensor** — penempatan node secara *Design of Experiments* (DoE) untuk menjamin cakupan statistik, biasanya dengan *central composite design* untuk menangkap gradien termal antar-rak; (3) **Kalibrasi** — mengacu pada ISO 17025, sensor dibandingkan dengan termokopel bersertifikat NIST pada titik beku air ($0.0 \pm 0.1°C$) dan titik tripel air ($0.01°C$); (4) **Commissioning & IQ/OQ/PQ** — uji instalasi, operasional, dan performa sesuai GAMP 5; (5) **Integrasi DCS** — melalui protokol OPC UA atau MQTT-SN untuk komunikasi ke sistem DCS seperti Emerson DeltaV atau Siemens PCS 7. Meza‐Galvan et al. (2026) menekankan pentingnya *time-synchronization* untuk mengkoordinasikan pembacaan multipel titik sehingga