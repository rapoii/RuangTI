# 2396 — Jaringan Sensor Nirkabel (Wireless Sensor Networks/WSN) untuk Proses Liofilisasi Farmasi: Kerangka Process Analytical Technology (PAT) dan Rekayasa Sistem Pemantauan Vial Nirkabel

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization — Instrumentasi Cerdas untuk Pemantauan Real-Time Vial dalam Produksi Sediaan Farmasi Beku-Kering
**Jurnal & Sitasi Utama:** Jesus Meza‑Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze‑Drying*. Wiley‑VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‑Drying*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze‑Drying*. Wiley‑VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze‑drying) merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologi, vaksin mRNA, antibodi monoklonal, dan sediaan parenteral kompleks yang rentan terhadap degradasi termal. Proses ini berlangsung dalam tiga tahap berurutan — pembekuan (*freezing*), pengeringan primer (*primary drying*) di mana sublimasi terjadi pada tekanan rendah, dan pengeringan sekunder (*secondary drying*) untuk desorpsi air terikat — dengan total siklus tipikal berdurasi 24–72 jam per batch dan konsumsi energi spesifik 1,2–2,5 kWh per vial (Pisano, Barresi, & Fissore, 2026). Ketidakseragaman distribusi suhu antar vial pada rak (*shelf*) merupakan salah satu sumber utama *batch failure* yang menurunkan *Overall Equipment Effectiveness* (OEE) fasilitas farmasi hingga 15–20%.

Menurut Meza‑Galvan, Strongrich, dan Darwish (2026), instrumentasi vial konvensional berbasis termokopel kawat (ASTM E2503) memiliki tiga keterbatasan mendasar: (1) hanya satu titik ukur per kabel sehingga cakupan spasial kurang dari 0,1% dari total vial pada batch produksi (untuk 1.000 vial, umumnya hanya 3–5 vial yang termonitor); (2) jalur kabel menembus dinding ruang vakum melalui *port* yang menambah *outgassing* dan jalur kebocoran; (3) pemasangan manual menambah waktu *setup* dan risiko kontaminasi mikroba. Jaringan Sensor Nirkabel (*Wireless Sensor Networks/WSN*) muncul sebagai paradigma instrumentasi disruptif yang memungkinkan pemantauan suhu dan tekanan parsial secara *real‑time* pada puluhan hingga ratusan vial secara simultan, dengan akuisisi data setiap 1–5 detik dan transmisi data melalui protokol IEEE 802.15.4 atau Bluetooth Low Energy (BLE).

Urgensi implementasi WSN juga diperkuat oleh kerangka *Process Analytical Technology* (PAT) yang diterbitkan FDA (Guidance for Industry, 2004) yang mendorong manufaktur farmasi bergerak menuju paradigma *Quality by Design* (QbD) melalui monitoring parameter kritis secara terus‑menerus. Artusio, Barresi, dan Pisano (2026) menekankan bahwa WSN adalah komponen fundamental dari generasi kedua PAT yang memungkinkan *closed‑loop control* antara sensor vial dan aktuator *shelf temperature* serta *chamber pressure*, menggantikan strategi *recipe‑based* statis dengan sistem adaptif yang meminimalkan residu air dan menjaga integritas kristal produk.

Dari perspektif ekonomi industri, investasi retrofit WSN pada freeze‑dryer existing menghasilkan *payback period* 14–22 bulan melalui peningkatan *first‑pass yield* (dari rata‑rata 78% menjadi 94%), pengurangan *scrap rate* vial termokopel (Rp 18–25 juta per batch pada kapasitas industri), dan pengurangan *cycle time* sebesar 8–12% akibat optimalisasi *setpoint* dinamis (Meza‑Galvan et al., 2026).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Sublimasi es pada lapisan produk dikendalikan secara simultan oleh resistansi perpindahan panas (Kv) dan resistansi perpindahan massa (Rp). Laju sublimasi dihitung melalui persamaan Pikal (1985) yang telah menjadi standar de‑facto dalam industri:

$$\frac{dm}{dt} = \frac{T_s - T_b}{R_p \cdot \Delta H_s \cdot \left(\frac{1}{K_v}\right) + \text{(koreksi geometri)}}$$

dengan:

$$\frac{1}{K_v} = \frac{1}{K_c} + \frac{1}{K_r} + \frac{1}{K_s}$$

di mana $K_c$ adalah koefisien konduksi vial‑rak, $K_r$ adalah konduksi gas pada celah vial, $K_s$ adalah kontribusi radiasi, $T_s$ adalah suhu rak, $T_b$ adalah suhu antarmuka sublimasi, dan $\Delta H_s \approx 2.838$ kJ/kg adalah entalpi sublimasi es.

Fluks sublimasi per satuan luas:

$$\dot{m} = \frac{P_i - P_c}{R_p}$$

dengan $P_i$ adalah tekanan uap jenuh es pada suhu $T_b$ (dihitung dengan persamaan Goff‑Gratch atau Murphy‑Koop), dan $P_c$ adalah tekanan ruang.

### 2.2 Persamaan Energi untuk Estimasi Suhu Produk

Untuk setiap vial, neraca energi pada lapisan beku menghasilkan:

$$\rho_f \cdot c_{p,f} \cdot L \cdot \frac{dT_b}{dt} = K_v \cdot A_v \cdot (T_s - T_b) - \Delta H_s \cdot \dot{m} \cdot A_v - \Delta H_v \cdot \dot{m}_{des} \cdot A_v$$

di mana $\rho_f$ adalah densitas lapisan beku, $c_{p,f}$ adalah kapasitas panas, $L$ adalah tebal lapisan kering, dan $\Delta H_v$ adalah panas desorpsi pada tahap sekunder.

### 2.3 Arsitektur WSN — Model Topologi dan Konsumsi Energi

Pemodelan topologi WSN menggunakan *graph* $G = (V, E)$ dengan $|V| = n$ node sensor vial dan $|E|$ sebagai *edge* komunikasi. Konsumsi energi per transmisi mengikuti model *first‑order radio*:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{\alpha}$$

$$E_{rx}(k) = E_{elec} \cdot k$$

dengan $E_{elec} = 50$ nJ/bit, $\epsilon_{amp} = 100$ pJ/bit/m², $k$ adalah ukuran paket data (bit), $d$ jarak transmisi, dan $\alpha = 2$ untuk propagasi *free‑space*.

*Lifetime* jaringan dengan duty‑cycling δ mengikuti:

$$T_{life} = \frac{E_{bat}}{E_{tx} \cdot \delta + E_{sleep} \cdot (1-\delta)}$$

Untuk sensor vial tipikal dengan baterai Li‑ion 3,7 V/220 mAh dan δ = 0,001 (pengukuran tiap 1.000 detik), *lifetime* teoritis mencapai 4–6 bulan per siklus pengisian.

### 2.4 Penentuan Onset Sublimasi — Deteksi Nukleasi

WSN memungkinkan deteksi onset sublimasi melalui *Kalman Filter* adaptif pada sinyal suhu vial:

$$x_{k+1} = F \cdot x_k + w_k,\quad w_k \sim \mathcal{N}(0, Q)$$

$$z_k = H \cdot x_k + v_k,\quad v_k \sim \mathcal{N}(0, R)$$

dengan vektor state $x = [T_b, \dot{m}]^T$ yang diestimasi secara rekursif untuk setiap vial.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN mengikuti SOP rekayasa 7‑fase sesuai standar ASTM E2503 dan ISO 13485:

**Fase 1 — Risk Assessment & Design Space Definition**
1. Identifikasi CQA (Critical Quality Attributes): kadar air akhir (<1,0%w/w), aktivitas air (<0,1 aw), rekonstitusi <90 detik.
2. Definisi CPP (Critical Process Parameters): $T_s$, $P_c$, $T_b$ per vial.
4. Penentuan *Design Space* sesuai ICH Q8(R2).

**Fase 2 — Kalibrasi Sensor Nirkabel**
- Kalibrasi tiga‑titik pada 0°C, −25°C, +25°C dengan termometer referensi NIST‑traceable.
- Uji akurasi ±0,3°C dan presisi ±0,1°C.
- Penentuan *offset* individual tiap sensor vial.

**Fase 3 — Instalasi Jaringan**
- Penempatan gateway di dalam ruang vakum (housing stainless 316L, IP67).
- Aktivasi node sebelum *loading* vial.
- Pemetaan RSSI (*Received Signal Strength Indicator*) untuk validasi topologi mesh.

**Fase 4 — Commissioning & IQ/OQ/PQ**
- IQ (*Installation Qualification): verifikasi firmware, kalibrasi, dan keamanan data.
- OQ (*Operational Qualification*): uji beban dengan placebo vial pada suhu ekstrem −40°C hingga +40°C.
- PQ (*Performance Qualification*): tiga batch validasi konsistensi (*consistency lots*) sesuai FDA Process Validation Guidance (2011).

**Fase 5 — Eksekusi Siklus & Akuisisi Data**
- Akuisisi suhu vial pada *sampling rate* 1 Hz dengan transmisi tiap 60 detik.
- Logging ke SCADA/DCS melalui OPC‑UA (IEC 62541).
- Penyimpanan data pada historian dengan retensi minimum 10 tahun.

**Fase 6 — Analisis & Kontrol Loop Tertutup**
- Implementasi kontrol Model Predictive Control (MPC) berbasis model Pikal.
- Update *setpoint* $T_s$ dan $P_c$ setiap 5 menit berdasarkan prediksi $T_b$.

**Fase 7 — Continuous Verification**
- *Statistical Process Control* (SPC) pada data historis.
- *Control charts* Levey‑Jennings untuk parameter vial individu.

Diagram alir logika:

```
[Loading Vial] → [Aktivasi WSN] → [Kalibrasi In‑situ]
       ↓
[Freezing Stage] → Deteksi Nukleasi via ΔT
       ↓
[Primary Drying] → Real‑time T_b & P_c → MPC Update T_s
       ↓
[Secondary Drying] → Desorption Monitoring via Pirani vs CM
       ↓
[Unloading] → Data Archival → Release Decision
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Batch produksi 1.000 vial sediaan antibodi monoklonal (10 mL fill, konsentrasi 50 mg/mL) pada freeze‑dryer skala pilot (luas rak $A_s = 0,5$ m²).

**Parameter Input Industri:**
- $T_s$ = 293,15 K (20°C)
- $P_c$ = 13,33 Pa (100 mTorr)
- $K_v$ = 0,25 mW/(cm²·K) = 2,5 W/(m²·K)
- $R_p$ = 1,5 cm²·Torr·hr/g = 0,0193 m²·Pa·s/kg
- $\Delta H_s$ = 2,838 × 10⁶ J/kg
- Teb