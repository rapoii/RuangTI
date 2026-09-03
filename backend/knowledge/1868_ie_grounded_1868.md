# 1868 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur Pemantauan Proses Kritis dan Integrasi PAT

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Divisi Manufaktur Farmasi & Bioteknologi
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global tengah mengalami pergeseran struktural yang dipicu oleh dominasi molekul biologik (biologics), antibodi monoklonal, terapi gen berbasis mRNA, dan vaksin novel-platform yang secara inherent bersifat termolabil serta tidak stabil dalam bentuk larutan cair. Liofilisasi (freeze‐drying) merupakan unit operasi *de facto* untuk mempertahankan aktivitas farmakologis senyawa‐senyawa tersebut dengan memperpanjang *shelf life* hingga 24–36 bulan tanpa rantai dingin aktif. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), satu siklus produksi liofilisasi untuk produk biologi bernilai tinggi dapat melibatkan investasi modal \$2–8 juta per *batch*, dengan kerugian *batch rejection* yang mampu melampaui \$500.000 karena penyimpangan satu atribut kualitas kritis seperti *residual moisture* atau *collapse temperature*.

Artusio, Barresi, dan Pisano (2026) pada Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menegaskan bahwa kompleksitas proses tiga‐tahap—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—menjadikan visibilitas real‐time terhadap gradien termal dan tekanan dalam ruang pengering sebagai kebutuhan strategis. Ketidakseragaman distribusi suhu di antara vial‐vial (*vial‐to‐vial heterogeneity*) pada rak (*shelf*) menghasilkan *drying heterogeneity* yang secara langsung menurunkan *yield* proses dan kualitas produk. Konvensi historis menggunakan thermocouple hardwired konvensional hanya mampu memonitor ≤ 12 titik pada konfigurasi satu rak, meninggalkan lebih dari 95% vial dalam *blind spot* kontrol kualitas.

Regulator FDA melalui *Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) serta ICH Q8/Q9/Q10 secara eksplisit menuntut strategi *Quality by Design* (QbD) yang memerlukan pemahaman multivariat terhadap *Critical Process Parameters* (CPP) dan *Critical Quality Attributes* (CQA). Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai enabler teknologi yang menjawab tiga tantangan struktural ini: (i) densitas pengukuran tinggi tanpa menambah kompleksitas mekanis pada ruang vakum, (ii) eliminasi *feedthrough* listrik yang rentan *leak* pada *chamber*, dan (iii) kapabilitas penskalaan (*scalability*) ke lini produksi multi‐rak dan multi‐chamber. Meza‐Galvan *et al.* (2026) menunjukkan bahwa implementasi WSN berbasis protokol IEEE 802.15.4 mampu meningkatkan *spatial resolution* termal hingga 8–16× lipat dibanding konfigurasi thermocouple tradisional, dengan reduksi biaya instrumentasi sebesar 35–50% pada kapasitas batch 10.000 vial.

Urgensi ekonomi ditambah dengan tekanan operasional *Industry 4.0*: integrasi data liofilisasi dengan sistem *Manufacturing Execution System* (MES) dan *Cloud‐based historian* menuntut protokol transmisi data yang interoperabel dan tahan terhadap lingkungan sterilisasi *in situ*. Dengan demikian, adopsi WSN bukan semata peningkatan akurasi pengukuran, melainkan transformasi arsitektur kontrol proses yang berdampak langsung pada *Overall Equipment Effectiveness* (OEE) fasilitas farmasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa pada Vial

Model Vial Pikal‐Searles yang diadopsi oleh Meza‐Galvan *et al.* (2026) mendeskripsikan neraca panas melalui dinding vial sebagai kombinasi konduksi gas (Kv,c) dan radiasi (Kv,r):

$$K_v = K_{v,c} + K_{v,r}$$

dengan resistansi termal total:

$$R_t = \frac{1}{K_v \cdot A_v}$$

Laju sublimasi massa es per vial mengikuti persamaan:

$$\frac{dm}{dt} = \frac{P_{ice}(T_b) - P_c}{R_p}$$

di mana $P_{ice}(T_b)$ adalah tekanan uap jenuh pada suhu produk $T_b$, $P_c$ tekanan ruang (*chamber*), dan $R_p$ resistansi transfer massa cake kering.

Model resistansi cake produk kering yang umum digunakan (Pikal, 1985) adalah:

$$R_p = R_{p,0} + \frac{A_{p,0} \cdot m_0}{A_v}$$

dengan $R_{p,0}$ resistansi awal, $A_{p,0}$ parameter empiris, $m_0$ massa awal, dan $A_v$ luas penampang vial.

Energi total yang dibutuhkan untuk menghilangkan air pada suhu sublimasi rata-rata $\bar{T}_{sub}$ diekspresikan:

$$Q_{total} = m_{total} \cdot \left[ \Delta H_{fus}(T_m) + c_{p,ice}(\bar{T}_{sub} - T_m) + \Delta H_{sub} \right]$$

### 2.2 Model Propagasi Sinyal WSN dalam Lingkungan Steril

Lingkungan ruang liofilisasi bersifat metalik dan beroperasi pada tekanan rendah (50–200 mTorr). Redaman sinyal *path loss* mengikuti model log‐distance:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ rugi‐lintang pada referensi $d_0 = 1$ m (tipikal 30–45 dB untuk 2.4 GHz dalam ruang baja), $n$ eksponen rugilintas (n ≈ 2.8–4.2 pada lingkungan multi‐refleksi ruang steril), dan $X_\sigma$ variabel acak Gaussian (shadow fading).

Konsumsi energi node sensor menggunakan model Heinzelman:

$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{n}$$

$$E_{rx}(k) = E_{elec} \cdot k$$

dengan $E_{elec} = 50$ nJ/bit, $\epsilon_{amp} = 10$ pJ/bit/m² (free‐space) atau $0.0013$ pJ/bit/m⁴ (multipath).

### 2.3 Optimasi Lifetime Jaringan

Lifetime jaringan (*network lifetime*, $\mathcal{L}$) untuk topologi mesh star dihubungkan dengan *routing tree* minimum spanning:

$$\mathcal{L} = \min_{i \in \mathcal{V}} \frac{E_{res,i}}{\bar{P}_{tx,i} + \bar{P}_{rx,i} + \bar{P}_{idle,i}}$$

di mana $E_{res,i}$ adalah energi residual node $i$, dan $\bar{P}_{tx,i}$, $\bar{P}_{rx,i}$, $\bar{P}_{idle,i}$ rerata daya transmisi, penerima, dan idle.

Parameter kualitas pengukuran utama:

$$\text{MAE} = \frac{1}{N}\sum_{i=1}^{N}|T_{WSN,i} - T_{ref,i}|$$

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(T_{WSN,i} - T_{ref,i})^2}$$

## 3. Metodologi Rekayasa & SOP Implementasi WSN

### 3.1 Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────┐
│  LEVEL 4: CLOUD/MES (OPC UA, MQTT, Sparkplug-B)            │
├─────────────────────────────────────────────────────────────┤
│  LEVEL 3: EDGE GATEWAY (Linux RTU, Historian)               │
├─────────────────────────────────────────────────────────────┤
│  LEVEL 2: ROUTER NODES (Zigbee/802.15.4 mesh coordinator)   │
├─────────────────────────────────────────────────────────────┤
│  LEVEL 1: END NODES (sensor tag: T, P, RH, NFC/RFID)       │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Langkah Implementasi (Modifikasi dari Meza‐Galvan *et al.*, 2026)

1. **Kualifikasi Risiko Ruang (Risk Assessment)** — Lakukan Failure Mode Effects Analysis (FMEA) pada seluruh titik potensi *leak* feedthrough. Tetapkan *Design Space* lokasi sensor dengan metode Design of Experiments (DoE) faktorial 2³.
2. **Kalibrasi Sensor** — Kalibrasi tiga titik pada −35°C, −10°C, dan +25°C dengan traceability ke NIST. Verifikasi akurasi ±0.3°C untuk thermocouple Class A.
3. **Penempatan Sensor** — Minimum 16 node per rak: 4 sudut (edge), 4 titik tengah (center), 8 titik antara (intermediate). Total 48 node untuk 3 rak.
4. **Validasi Transmisi** — Uji RSSI ≥ −75 dBm di seluruh titik selama *sterilization in place* (SIP) pada 121°C.
5. **Pengujian Beban Jaringan** — Stres test 500 paket/detik selama 4 jam tanpa paket hilang > 0.1%.
6. **Integrasi 21 CFR Part 11** — Tanda tangan elektronik, audit trail, dan kontrol akses berbasis peran (*role‐based access control*).
7. **Protokol Kontrol Perubahan** — Setiap modifikasi alamat MAC, firmware, atau topologi harus melalui *change control* formal.

### 3.3 Tata Letak Sensor per Rak (Skema Plan View)

```
Rak ke-1 (top)
  S1 ──── S2 ──── S3 ──── S4
  │  \    │    /  │  \    │  
  S5 ──── S6 ──── S7 ──── S8
  │    /  │  \    │    \  │  
  S9 ─── S10 ─── S11 ─── S12
  │  \    │    /  │  \    │
 S13 ─── S14 ─── S15 ─── S16
```

## 4. Studi