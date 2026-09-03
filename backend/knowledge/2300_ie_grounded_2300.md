# 2300 — Jaringan Sensor Nirkabel (WSN) untuk Proses Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Lini Freeze-Drying Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan paradoksal yang semakin akut: di satu sisi, permintaan akan produk biologis termosensitif—vaksin mRNA, antibodi monoklonal, terapi gen, dan produk plasma—meningkat secara eksponensial dengan *Compound Annual Growth Rate* (CAGR) lebih dari 10% selama dekade terakhir; di sisi lain, lebih dari 40% produk biofarmasi baru dalam pipeline klinis bersifat tidak stabil dalam bentuk larutan cair sehingga memerlukan liofilisasi (*freeze-drying*) sebagai satu-satunya metode pengawetan yang layak secara komersial. Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab monografinya yang berjudul "Wireless Sensor Networks for Lyophilization" (DOI: 10.1002/9783527850303.ch4) menegaskan bahwa liofilisasi adalah proses *batch* yang panjang, mahal, dan secara inheren heterogen, dengan siklus produksi tipikal berlangsung antara 24 hingga 96 jam per *batch* pada fasilitas *contract development and manufacturing organization* (CDMO) berskala besar.

Urgensi operasional dari perspektif Teknik Industri sangat jelas: sebuah liofilizer industri (*commercial-scale freeze-dryer*) dengan rak (*shelf*) seluas 20 m² dan kapasitas lebih dari 100.000 vial per siklus mewakili aset modal tunggal senilai USD 2–8 juta, dengan biaya operasional (energi, operator, material) yang dapat melampaui USD 50.000 per *batch*. Variabilitas antar-vial yang tidak terdeteksi (*inter-vial heterogeneity*) menjadi sumber utama inefisiensi—menurut Artusio, Barresi, dan Pisano (2026) pada DOI: 10.1002/9783527850303.ch11, perbedaan suhu produk antar-vial dapat melebihi 5–10 °C pada rak yang sama, menyebabkan *batch failure rate* antara 2–7% yang setara dengan kerugian ratusan juta dolar per tahun bagi industri secara agregat.

Dalam kerangka regulasi FDA *Process Analytical Technology* (PAT) Guidance for Industry (2004) dan ICH Q8(R2)/Q9/Q10, produsen farmasi didorong untuk beralih dari paradigma *quality by testing* (QcT) pascaproduksi menjadi *quality by design* (QbD) yang memerlukan monitoring *real-time* multivariat. Jaringan Sensor Nirkabel (WSN) muncul sebagai jawaban strategis terhadap kendala utama instrumentasi liofilisasi konvensional: keterbatasan jumlah port thermocouple (umumnya 16–32 channel) dalam ruang steril yang rapat dan sulit diakses (*sterile, sealed vacuum chamber*). Meza-Galvan et al. (2026) menunjukkan bahwa deployment WSN dengan topologi *mesh* berbasis protokol Bluetooth Low Energy (BLE) atau ZigBee dapat memperluas jumlah titik pengukuran dari 32 menjadi lebih dari 200 sensor suhu mini-invasif tanpa melanggar integritas steril vial, sekaligus membuka paradigma baru *in-process control* (IPC) berbasis data-driven dan machine learning. Transformasi ini bukan sekadar upgrade teknologi—ia merupakan reinvensi arsitektur *shop-floor intelligence* yang akan menentukan daya saing manufaktur farmasi di era *Industry 4.0*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Sublimasi pada Primary Drying

Model matematis fundamental untuk liofilisasi primer didasarkan pada hukum Fick untuk difusi massa dan hukum Fourier untuk konduksi panas, dengan asumsi *steady-state* pada *sublimation interface*. Resistansi total terhadap perpindahan panas dan massa merupakan seri antara resistansi produk kering ($R_p$) dan resistansi vial-chamber ($R_s$):

$$\dot{m} = \frac{A_p \cdot (P_i - P_c)}{R_p} = \frac{A_v \cdot K_v \cdot (T_{shelf} - T_b)}{R_p + R_s}$$

di mana:
- $\dot{m}$ adalah laju sublimasi (kg/s atau g/jam)
- $A_p$ adalah luas penampang produk (m²)
- $A_v$ adalah luas penampang luar vial (m²)
- $P_i$ adalah tekanan uap air pada *sublimation interface* (Pa)
- $P_c$ adalah tekanan ruang (*chamber pressure*, Pa)
- $K_v$ adalah koefisien transfer energi vial (W/m²·K)
- $T_{shelf}$ adalah suhu rak (K)
- $T_b$ adalah suhu *product at the bottom of the dried cake* (K)

Persamaan Clausius-Clapeyron yang menghubungkan $P_i$ dengan $T_b$ adalah:

$$\ln(P_i) = -\frac{A}{T_b} + B$$

dengan parameter empiris $A = 6144.96$ K dan $B = 24.721$ untuk air murni, sehingga setiap deviasi $T_b$ sebesar 1 °C menyebabkan perubahan $P_i$ sebesar ~10–15%, yang secara langsung memengaruhi laju sublimasi.

### 2.2 Resistansi Produk Kering ($R_p$)

Resistansi produk kering meningkat secara nonlinier seiring kemajuan sublimasi karena ketebalan *dried cake* yang makin tebal. Meza-Galvan et al. (2026) merujuk pada korelasi Kuu et al. yang dimodifikasi dengan mempertimbangkan kompaksi (*collapse*) dan efek *skin formation*:

$$R_p(t) = R_{p,0} + \frac{A_1 \cdot (L - L_0)}{1 + A_2 \cdot e^{-A_3 \cdot (t - t_0)}}$$

di mana $R_{p,0}$ adalah resistansi awal (umumnya 0–2 cm²·Torr·jam/g), $L$ adalah tebal produk (cm), dan $A_1, A_2, A_3$ adalah parameter fitting spesifik formulasi.

### 2.3 Arsitektur Jaringan Sensor Nirkabel

Kinerja WSN dalam lingkungan liofilizer dievaluasi melalui metrik *Quality of Service* (QoS) berikut:

$$SNR_{dB} = 10 \log_{10}\left(\frac{P_{signal}}{P_{noise}}\right)$$

$$BER = \frac{1}{2}\text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right)$$

$$P_{link} = 1 - (1 - BER)^N \quad \text{(probabilitas packet loss untuk N bit)}$$

Konsumsi energi setiap node sensor untuk transmisi periodik mengikuti model first-order radio:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

dengan $n$ = *path loss exponent* (umumnya 2.5–3.5 di dalam chamber baja stainless), $k$ = ukuran paket (bit), $d$ = jarak transmisi (m). Untuk duty cycle 1 Hz dengan baterai 220 mAh, *lifetime* node tipikal adalah 18–36 bulan sesuai Artusio et al. (2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi WSN pada Liofilizer Skala Komersial

Berdasarkan rekomendasi Meza-Galvan et al. (2026) dan integrasi dengan framework PAT (Artusio et al., 2026), berikut adalah tahapan SOP sistematis:

**Fase 1 — Site Survey & Risk Assessment (Durasi: 2–3 minggu)**
1. Pemetaan thermal mapping (*empty chamber*) menggunakan 36 thermocouple bersertifikat NIST pada suhu -40 °C hingga +40 °C, tekanan 50–500 mTorr.
2. Identifikasi zona *edge effect* (vial di perimeter rak) yang menunjukkan gradien termal >3 °C.
3. Analisis kompatibilitas material: sensor MEMS dengan *biocompatible* coating (USP Class VI silicone overmold).
4. Validasi EMI/EMC dengan protokol FDA 21 CFR Part 11 dan IEC 60601-1-2.

**Fase 2 — Deployment Hardware (Durasi: 1–2 minggu)**
1. Kalibrasi setiap node sensor pada *triple point of water* (0.01 °C) dengan akurasi ±0.3 °C.
2. Penempatan node pada vial sample yang terletak di 9 zona kritis (3 × 3 grid per rak) sesuai desain *Design of Experiments* (DoE).
3. Instalasi gateway dengan protokol MQTT untuk transmisi ke historian server (PI System atau OSIsoft).

**Fase 3 — Software Integration & Algorithm Development (Durasi: 4–6 minggu)**
1. Pembuatan *digital twin* proses liofilisasi menggunakan model 1-D heat-mass transfer coupled dengan $R_p$ dinamis.
2. Training algoritma *Model Predictive Control* (MPC) berbasis *Recurrent Neural Network* (RNN-LSTM) menggunakan >1000 batch historis.
3. Implementasi *soft sensor* untuk memprediksi $T_b$ pada vial yang tidak memiliki sensor langsung.

**Fase 4 — Qualification & Validation (Durasi: 8–12 minggu)**
1. IQ (Installation Qualification), OQ (Operational Qualification), PQ (Performance Qualification) sesuai GAMP 5.
2. *Worst-case challenge*: 3 batch placebo + 3 batch aktif pada parameter operasional ekstrem.
3. Dokumentasi Complete Batch Record (CBR) dengan integrasi data WSN real-time.

### 3.2 Diagram Arsitektur Sistem

```
┌─────────────────────────────────────────────────┐
│         WIRELESS SENSOR NETWORK (WSN)            │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐        │
│  │Node 1 │ │Node 2 │ │Node 3 │ │Node N │ (MEMS) │
│  └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘        │
│      │ BLE/ZigBee Mesh      │                     │
│      └────────┬─────────────┘                     │
│               ▼                                   │
│         ┌──────────┐    ┌──────────────┐         │
│         │ Gateway  │◄──►│ MQTT Broker  │         │
│         └────┬─────┘    └──────┬───────┘         │
└──────────────┼─────────────────┼─────────────────┘
               ▼                 ▼
        ┌─────────────┐    ┌──────────────┐
        │ Historian   │    │  MPC Engine  │
        │ (PI System) │◄──►│  (LSTM/RNN)  │
        └──────┬──────┘    └──────┬───────┘
               │                  │
               ▼                  ▼
        ┌──────────────────────────────┐
        │   PAT Dashboard & Historian  │
        │   (21 CFR Part 11 Compliant) │
        └──────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Optimasi Primary Drying pada Produksi Antibodi Monoklonal (mAb)

**Parameter Input Industri (Tipikal CDMO):**
- Formulasi: 50 mg/mL mAb dalam buffer histidine-aspartate
- Fill volume: 5.0 mL per vial
- Vial: 10R Schott, $A_v = 4.54$ cm², $A_p = 3.80$ cm²
- Total vials per batch: 15,000
- Target shelf temperature ($T_{shelf}$): -5 °C
- Chamber pressure ($P_c$): 100 mTorr (13.33 Pa)
- Initial product temperature ($T_0$): -45 °C
- $K_v$ terukur: 0.0029 W/(cm²·K) = 29 W/(m²·K)

**Langkah 1 — Estimasi $T_b$ dan $P_i$ Awal**

Asumsikan kondisi *quasi-steady state* tercapai setelah 2 jam primary drying. Menggunakan keseimbangan panas–massa:

$$K_v \cdot A_v \cdot (T_{shelf} - T_b) = \frac{A_p \cdot (P_i - P_c)}{R_p}$$

dengan $R_p$ awal = 1.5 cm²·Torr·jam/g pada dryness 20%. Konversi satuan: 1 cm²·Torr·jam/g = 0.0515 m²·Pa·s/kg.

Substitusi parameter:
$$\dot{q} = 29 \cdot 4.54 \times 10^{-4} \cdot (268.15 - T_b) = \frac{3.80 \times 10^{-4} \cdot (P_i - 13.33)}{0.077}$$

Iterasi numerik menghasilkan $T_b \approx -32.5$ °C, sehingga $P_i \approx 0.286$ Torr (38.1 Pa). Laju sublimasi:

$$\dot{m} = 3.