# 2364 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses, Model Termal, dan Standar PAT 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks (WSN) untuk Liofilisasi Farmasi
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze-Drying*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang mengubah sediaan cair menjadi padatan kering berpori melalui sublimasi di bawah tekanan rendah (khas 10–100 Pa) untuk menjaga stabilitas protein, antibodi monoklonal, dan produk biologi kompleks lainnya. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini melibatkan tiga fase utama—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang masing-masing memerlukan pemantauan parameter proses dengan akurasi tinggi dan resolusi temporal ketat. Industri farmasi global menghadapi tantangan signifikan karena satu batch produk biologis bernilai USD 500.000–5.000.000, sehingga setiap *out-of-specification* (OOS) akibat deviasi suhu produk $T_p$ lebih dari 1–2 °C dari *setpoint* desain dapat menimbulkan kerugian finansial besar serta *batch failure rate* yang mendorong biaya produksi kumulatif.

Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menekankan bahwa implementasi *Process Analytical Technology* (PAT) sesuai kerangka FDA (Guidance for Industry, 2004) dan ICH Q8/Q9/Q10 menuntut akuisisi data *real-time* multivariat untuk mendukung strategi *Quality by Design* (QbD). Dalam konteks ini, Meza-Galvan *et al.* (2026) menyoroti bahwa sistem instrumentasi kabel tradisional—yang menggunakan thermocouple T-type di setiap vial melalui *sample thief* port—memiliki keterbatasan inheren: (i) skalabilitas rendah (umumnya hanya 1–5 vial termonitori dari total ratusan vial dalam *batch*), (ii) risiko kontaminasi karena *feedthrough* listrik menembus dinding ruang vakum, dan (iii) *delay* akuisisi data akibat multiplexing.

Wireless Sensor Networks (WSN) muncul sebagai arsitektur instrumentasi disruptif yang menjawab ketiga keterbatasan tersebut melalui tiga pilar: *multi-point sensing* (ratusan node per batch), *non-invasive telemetry* (transmisi RF melalui jendela kuarsa tanpa menembus *vacuum chamber*), dan *edge computing* (pemrosesan lokal sebelum transmisi). Urgensi penerapan WSN di liofilisasi farmasi diperkuat oleh data industri yang menunjukkan bahwa rata-rata siklus *primary drying* memakan waktu 24–72 jam per batch, sehingga total biaya operasional lini produksi dapat mencapai USD 50.000–100.000 per hari. Implementasi WSN memungkinkan pengurangan *cycle time* sebesar 10–20% melalui optimasi *design space* berbasis *feedback* suhu vial individual yang sebelumnya tidak terlihat.

Dari perspektif teknik industri, adopsi WSN juga berkaitan langsung dengan pilar *Industry 4.0* dan *Pharma 4.0*: integrasi CPS (*Cyber-Physical Systems*), analitik big data, dan traceability sesuai standar ISO 22400 untuk KPI manufaktur. Investasi modal (*CAPEX*) awal untuk retrofit satu lyophilizer dengan WSN 200 node berkisar USD 80.000–150.000, dengan *payback period* 14–24 bulan pada fasilitas produksi bervolume tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Vial Liofilisasi

Model termal vial liofilisasi mengikuti persamaan *steady-state* konduksi satu-dimensi melalui dinding vial, gas konduksi pada *headspace* vial, dan lapisan produk beku. Persamaan dasar untuk fluks panas $J_q$ menuju *sublimation front* dinyatakan sebagai (Pisano, Barresi, 2018—kerangka yang dirujuk oleh Artusio *et al.* 2026):

$$J_q = \frac{T_s - T_b}{R_{total}} = \frac{T_s - T_b}{\frac{L_g}{k_g A_g} + \frac{L_w}{k_w A_w} + \frac{1}{h_{rad} A_w}}$$

di mana $T_s$ adalah suhu *shelf* (K), $T_b$ adalah suhu pada *sublimation front* (K), $L_g$ adalah jarak efektif konduksi gas dalam vial (m), $k_g$ adalah konduktivitas termal gas residual (W/m·K), $A_g$ adalah luas penampang efektif ($m^2$), $L_w$ adalah tebal dinding vial kaca (m), $k_w$ adalah konduktivitas termal kaca borosilikat (≈ 1,0 W/m·K), dan $h_{rad}$ adalah koefisien perpindahan panas radiasi antara *shelf* dan vial (W/m²·K).

### 2.2 Persamaan Laju Sublimasi

Laju sublimasi $\dot{m}$ selama *primary drying* mengikuti *kinetic equation*:

$$\dot{m} = \frac{A_v \cdot (P_{ice}(T_b) - P_c)}{R_{sub}}$$

dengan $A_v$ luas sublimasi permukaan produk ($m^2$), $P_{ice}(T_b)$ tekanan uap es pada suhu sublimasi front (Pa) yang mengikuti persamaan Goff-Gratch atau Wagner-Müller, $P_c$ tekanan ruang (*chamber*) (Pa), dan $R_{sub}$ resistansi terhadap aliran uap melalui lapisan produk kering (*dried layer*) yang besarnya:

$$R_{sub} = \frac{L_{dry}(t)}{k_d \cdot A_v}$$

di mana $L_{dry}(t)$ adalah ketebalan lapisan kering yang tumbuh seiring waktu, dan $k_d$ permeabilitas lapisan kering (m²·Pa·s/kg). Gabungan kedua persamaan menghasilkan *moving boundary problem* yang diselesaikan dengan metode *quasi-steady-state* (Pikal, 1985; diperbarui oleh Artusio *et al.* 2026).

### 2.3 Model Komunikasi Nirkabel di Lingkungan Vakum

Transmisi data dari node sensor ke gateway harus mempertimbangkan redaman propagasi RF pada ruang vakum dan jendela kuarsa. Persamaan *Friis transmission* dalam bentuk logaritmik:

$$P_r (dBm) = P_t + G_t + G_r - 20 \log_{10}\left(\frac{4\pi d}{\lambda}\right) - PL_{vac}$$

dengan $P_r$ daya terima, $P_t$ daya transmisi node, $G_t, G_r$ gain antena, $d$ jarak (m), $\lambda$ panjang gelombang (m), dan $PL_{vac}$ rugi tambahan akibat penetrasi jendela kuarsa dan refleksi pada dinding logam lyophilizer. Untuk pita frekuensi ISM 2,4 GHz dengan $P_t = 0$ dBm, $d = 1{,}5$ m, diperoleh $P_r \approx -52$ dBm, masih di atas *sensitivity* tipikal -90 dBm untuk transceiver IEEE 802.15.4 (ZigBee), sehingga margin tautan ≥ 35 dB memadai.

### 2.4 Ketidakpastian Sensor & Sampling Statistik

Untuk N vial termonitori, estimasi suhu rata-rata *batch* mengikuti:

$$\bar{T}_p = \frac{1}{N}\sum_{i=1}^{N} T_{p,i}, \quad s^2 = \frac{1}{N-1}\sum_{i=1}^{N}(T_{p,i} - \bar{T}_p)^2$$

dengan *confidence interval* 95%:

$$CI_{95\%} = \bar{T}_p \pm t_{0{,}025, N-1} \cdot \frac{s}{\sqrt{N}}$$

Peningkatan N dari 5 (tradisional) menjadi 200 (WSN) memperkecil *margin of error* sebesar faktor $\sqrt{200/5} = 6{,}32$, memungkinkan *detection* perbedaan suhu antar-posisi *shelf* yang sebelumnya tersembunyi (*edge effect*, *center effect*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilisasi

```
┌─────────────────────────────────────────────────────────┐
│  LEVEL 4: CLOUD / MANUFACTURING EXECUTION SYSTEM (MES) │
│           (Historian, Analytics, Audit Trail)            │
└──────────────────▲──────────────────────────────────────┘
                   │ OPC-UA / MQTT (TLS 1.3)
┌──────────────────┴──────────────────────────────────────┐
│  LEVEL 3: EDGE GATEWAY / SUPERVISORY SERVER            │
│           (Time-series DB, Statistical Process Control) │
└──────────────────▲──────────────────────────────────────┘
                   │ IEEE 802.15.4 / ZigBee 3.0
┌──────────────────┴──────────────────────────────────────┐
│  LEVEL 2: WIRELESS ROUTER NODES (MESH)                  │
│           (Vacuum-compatible RF antenna via quartz port)  │
└──────────────────▲──────────────────────────────────────┘
                   │ Star / Cluster-Tree
┌──────────────────┴──────────────────────────────────────┐
│  LEVEL 1: SENSOR NODES (battery-powered, ≤ 2 g)         │
│           • Thermistor (±0,1 °C, 10-bit ADC)            │
│           • Pirani gauge (pressure, 1–1000 Pa)          │
│           • Capacitive RH (residual moisture monitor)    │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Deployment WSN di Lyophilizer

| Tahap | Aktivitas | Standar Referensi |
|-------|-----------|-------------------|
| 1. Pre-qualification | Verifikasi kompatibilitas vakum (≤ 0,1 Pa) & suhu (-50 °C s/d +60 °C) terhadap node sensor | ISO 22400-2, USP <1207> |
| 2. IQ (Installation Qualification) | Kalibrasi setiap node terhadap referensi bersertifikat NIST (0 °C ice-bath); dokumentasi *as-built* | GAMP 5 V-model |
| 3. OQ (Operational Qualification) | Uji linieritas termistor (0,1–60 °C), uji *outgassing* material sensor (≤ 0,01% mass loss pada TGA 25–250 °C) | USP <659>, ASTM E595 |
| 4. PQ (Performance Qualification) | 3 batch konsistensi dengan *placement* sensor pada *edge*, *center*, dan *corner* shelf | FDA PAT Guidance (2004) |
| 5. Routine Use | Sampling rate 30 s; auto-shutdown node pada $T > 70$ °C atau $P < 0{,}05$ Pa (proteksi baterai) | ICH Q9 |

### 3.3 Diagram Alir Pengambilan Keputusan PAT

```
[START] → Baca T_p(i,t) dari WSN
    │
    ▼
Hitung rata-rata dan varians batch: μ_T, σ²_T
    │
    ▼
Apakah |T_p(i,t) - T_setpoint| > 2 °C untuk > 5% vial?
    │                              │