# 2172 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Pemantauan Proses Cerdas dalam Kerangka Process Analytical Technology

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi moderna yang memungkinkan stabilisasi produk biologis termolabil seperti protein monoklonal, vaksin mRNA, dan antibodi terapeutik. Lebih dari 50% produk biofarmasi kelas atas yang saat ini memasuki *pipeline* klinis memerlukan proses liofilisasi, menjadikan siklus pengembangan *Cycle Development Time* (CDT) sebagai penentu langsung dari *cost of goods sold* (COGS) serta *speed-to-market*. Namun, menurut Meza‐Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini secara historis merupakan "*black-box operation*" karena pengukuran suhu vial konvensional menggunakan termokopel berkabel hanya mampu memantau kurang dari 1% dari total vial dalam batch produksi—memunculkan asumsi homogenitas termal yang sering kali tidak valid terutama pada *edge vials* dan *center vials* yang memiliki gradien sublimasi berbeda.

Konteks operasional diperburuk oleh tiga tantangan struktural: (i) invasivitas fisik kabel termokopel yang mengganggu pola sublimasi vial tetangga sehingga *measurement bias* tidak dapat dipisahkan dari *real process noise*; (ii) biaya instalasi ulang (*reconfiguration cost*) yang tinggi pada sistem cleanroom ISO 7 ketika recipe diubah; dan (iii) kegagalan memenuhi paradigma *Quality by Design* (QbD) FDA yang sejak 2004 menuntut pemahaman multivariat terhadap *Critical Process Parameters* (CPP) terhadap *Critical Quality Attributes* (CQA). Dalam kerangka Process Analytical Technology (PAT), WSN muncul sebagai enabler teknis yang memungkinkan transformasi dari *end-product testing* menjadi *real-time release* (RTR). Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menyoroti bahwa tren *Emerging Technologies* dalam liofilisasi farmasi tidak hanya mencakup inovasi pada *drying chamber* dan sistem kontrol, tetapi juga pada arsitektur akuisisi data yang memungkinkan *closed-loop control* dengan latensi di bawah 1 detik.

Urgensi ekonominya sangat nyata. Sebuah batch liofilisasi komersial dengan 10.000 vial yang gagal karena *collapse* akibat over-temperature pada primary drying akan menyebabkan kerugian langsung senilai USD 200.000–500.000 hanya pada bahan baku API (Active Pharmaceutical Ingredient), belum termasuk kerugian akibat *batch rejection*, investigasi OOS (Out-of-Specification), dan kerugian *opportunity cost* dari kapasitas lini produksi yang tidak terpakai. Dengan implementasi WSN yang mampu memantau 100% vial secara real-time dan mengidentifikasi *hot spots* sebelum terjadi *product collapse*, potential saving dapat mencapai USD 1–3 juta per tahun per lini produksi untuk manufaktur berskala menengah.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Laju Sublimasi (Kinetics of Primary Drying)

Mekanisme sublimasi es pada *primary drying* dikontrol oleh dua resistansi utama: resistansi perpindahan kalor dari rak (*shelf*) ke vial dan resistansi perpindahan massa uap air melalui *dried cake*. Persamaan sublimasi quasi-steady state yang dirujuk secara luas dalam literatur PAT liofilisasi adalah:

$$\frac{dm}{dt} = \frac{A_v \cdot (P_{w,i}(T_i) - P_{w,c})}{\hat{R}_p} = \frac{A_v \cdot K_c \cdot (T_{sh} - T_i)}{\Delta H_s}$$

di mana:

- $\frac{dm}{dt}$ = laju sublimasi massa per unit waktu (kg/s)
- $A_v$ = luas penampang internal vial (m²)
- $P_{w,i}(T_i)$ = tekanan uap air pada interface sublimasi pada suhu $T_i$ (Pa)
- $P_{w,c}$ = tekanan uap air di chamber (Pa)
- $\hat{R}_p$ = resistansi perpindahan masa dari dried cake (Pa·m²·s/kg), biasanya dimodelkan sebagai $\hat{R}_p = \hat{R}_{p,0} + A_p \cdot m$ dengan $A_p$ adalah koefisien resistance build-up
- $K_c$ = koefisien perpindahan kalor vial (W/m²·K)
- $\Delta H_s$ = entalpi sublimasi es ≈ 2.838 MJ/kg pada 0°C

### 2.2 Tekanan Uap Air di Interface

Tekanan uap air pada interface sublimasi mengikuti persamaan Clausius–Clapeyron atau lebih akurat persamaan Antoine:

$$\log_{10}(P_{w,i}) = A - \frac{B}{T_i + C}$$

Untuk es pada rentang liofilisasi (-50°C hingga -10°C), parameter yang digunakan: $A = -4.860$, $B = 1240.62$ K, $C = -0.132$ K (satuan $P$ dalam Torr).

### 2.3 Ketidakpastian Pengukuran Sensor (Measurement Uncertainty Framework)

Sensor nirkabel WSN harus dievaluasi menggunakan kerangka GUM (*Guide to the Expression of Uncertainty in Measurement*):

$$u_c = \sqrt{u_{cal}^2 + u_{rep}^2 + u_{drift}^2 + u_{env}^2}$$

di mana:

- $u_{cal}$ = uncertainty kalibrasi (tipikal ±0.3°C untuk RTD Class A)
- $u_{rep}$ = uncertainty repeatability (diestimasi dari standard deviation pengukuran berulang)
- $u_{drift}$ = uncertainty akibat drift temporal sensor
- $u_{env}$ = uncertainty lingkungan (interferensi EMI di ruang proses)

Ketidakpastian gabungan *expanded uncertainty* pada confidence level 95%:

$$U = k \cdot u_c, \quad k = 2$$

### 2.4 Model Propagasi Panas Vial (Steady-State Heat Transfer)

Untuk satu vial yang berdiri di atas rak suhu $T_{sh}$:

$$Q_v = K_v \cdot A_v \cdot (T_{sh} - T_b) = \frac{K_v \cdot A_v \cdot (T_{sh} - T_i) \cdot \hat{R}_p}{\hat{R}_p + \frac{K_v \cdot A_v \cdot \Delta H_s}{P_{w,i}(T_i) - P_{w,c}} \cdot \frac{1}{...}}$$

Persamaan disederhanakan menjadi bentuk lumped-parameter yang sering dipakai untuk identifikasi parameter vial:

$$T_i = T_{sh} - \frac{\Delta H_s}{K_v} \cdot \frac{P_{w,i}(T_i) - P_{w,c}}{...}$$

### 2.5 Konsumsi Energi dan Lifetime Baterai Node Sensor Nirkabel

Untuk node WSN yang beroperasi pada lingkungan cryogenic (-40°C hingga +25°C), lifetime baterai dapat dimodelkan dengan:

$$t_{battery} = \frac{C_{battery} \cdot V_{nom}}{I_{active} \cdot t_{duty} + I_{sleep} \cdot (1 - t_{duty})}$$

di mana $t_{duty}$ adalah duty cycle transmisi (fraksi waktu radio aktif). Untuk node dengan transmisi setiap 5 detik dan baterai lithium primer 3.6V/2.4Ah, lifetime tipikal mencapai 12–18 bulan, memadai untuk satu siklus kalibrasi tahunan standar industri farmasi.

### 2.6 Throughput Jaringan (Network Performance)

Kinerja WSN dalam konteks liofilisasi dievaluasi melalui tiga metrik:

- *Packet Delivery Ratio* (PDR): $PDR = \frac{N_{rx}}{N_{tx}}$
- *Latency*: $L_{tot} = L_{proc} + L_{queue} + L_{tx} + L_{prop}$
- *Energy per bit*: $E_b = \frac{P_{tx} \cdot t_{packet}}{L_{packet}}$ (J/bit)

Untuk standar batch liofilisasi dengan 10.000 vial dan target sampling 1 Hz, throughput yang dibutuhkan minimal: $\text{Throughput} \geq 10{,}000 \times (32 \text{ byte payload} \times 8) \times 1 \text{ Hz} = 2.56 \text{ Mbps}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilisasi

```
┌─────────────────────────────────────────────────────────────────────┐
│              ARSITEKTUR 3-LAYER WSN UNTUK LYOPHILIZATION            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  LAYER 1 - PERCEPTION (Vial-Level)                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐         ┌─────────┐            │
│  │Node #001│ │Node #002│ │Node #003│  ...    │Node #N  │            │
│  │Temp RTD │ │Pressure │ │Humidity │         │Multi-   │            │
│  │+ Pirani │ │+ CM     │ │+ NIR    │         │modal    │            │
│  └────┬────┘ └────┬────┘ └────┬────┘         └────┬────┘            │
│       │            │            │                   │                │
│  LAYER 2 - TRANSPORT (Rack-Level)                                  │
│  ┌────▼────────────▼────────────▼───────────────────▼────┐           │
│  │  Gateway per Rack (ZigBee/LoRa/Wi-Fi 6 mesh)