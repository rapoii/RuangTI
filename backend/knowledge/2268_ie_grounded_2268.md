# 2268 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dan Otomasi Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam manufaktur farmasi parenteral bernilai tinggi, terutama untuk produk biologis, vaksin mRNA, antibodi monoklonal, dan formulasi protein yang sensitif terhadap degradasi termal. Lebih dari 50% produk biofarmasi berbasis biologis memerlukan proses liofilisasi untuk mencapai stabilitas jangka panjang, dan kerugian akibat satu batch yang gagal (*reject rate* 1–3%) pada siklus komersial bernilai US$0,5–2 juta per batch menunjukkan urgensi ekonomis yang sangat tinggi. Meza‐Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menekankan bahwa proses ini memiliki tiga fase utama—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang masing-masing memerlukan profil suhu dan tekanan yang presisi dengan toleransi deviasi sering kali lebih sempit dari ±0,5°C pada rak (*shelf*) dan ±0,1 mbar pada ruang (*chamber*).

Secara historis, instrumentasi liofilizer komersial sangat bergantung pada sensor *thermocouple* tipe T hard-wired (kawat tembaga-konstantan) yang ditempatkan secara manual pada tiap vial. Pendekatan ini memiliki kelemahan fundamental: jumlah vial yang dapat dimonitor sangat terbatas (umumnya 5–10 vial dari total 10.000–100.000 vial per batch), sehingga terjadi *sampling bias* yang signifikan. Ketika vial yang tidak termonitor mengalami *collapse* atau *melt-back*, kerugian finansial menjadi katastrofik. Meza‐Galvan *et al.* (2026) mengargumentasi bahwa adopsi Wireless Sensor Networks (WSN) berbasis standar IEEE 802.15.4/ZigBee atau LoRaWAN memungkinkan perluasan cakupan monitor hingga ratusan vial secara simultan dengan akurasi suhu ±0,2°C dan akurasi tekanan parsial uap air ±0,05 mbar.

Konteks regulasi semakin memperkuat urgensi implementasi WSN. FDA *Guidance for Industry PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) dan ICH Q8(R2) mendorong peningkatan *real-time process monitoring*. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) mencatat bahwa WSN merupakan pilar utama menuju paradigma *Smart Freeze-Drying*, di mana data multi-vial digunakan untuk *Model Predictive Control* (MPC), deteksi anomali berbasis machine learning, dan *batch release* secara *real-time*. Investasi CAPEX untuk retrofit WSN pada liofilizer existing berkisar US$50.000–150.000, dengan ROI yang dapat tercapai dalam 1–2 siklus produksi apabila *reject rate* berkurang dari 2% menjadi <0,5%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Dinamika Sublimasi dan Neraca Energi Liofilisasi

Meza‐Galvan *et al.* (2026) menjelaskan bahwa laju sublimasi $\dot{m}_{sub}$ pada fase *primary drying* dikendalikan oleh resistansi termal dan resistansi terhadap transfer uap air melalui *dried cake*:

$$\dot{m}_{sub} = \frac{T_{sh} - T_{b}}{\Delta H_s \cdot R_p} = \frac{P_{w,i} - P_{w,c}}{R_p}$$

di mana $T_{sh}$ adalah suhu rak (*shelf temperature*), $T_{b}$ adalah suhu produk pada *sublimation front*, $\Delta H_s$ ≈ 2.838 kJ/kg adalah entalpi sublimasi es, $R_p$ adalah resistansi produk (cm²·mbar·hr/g), $P_{w,i}$ adalah tekanan uap air pada *interface* sublimasi (fungsi Arrhenius), dan $P_{w,c}$ adalah tekanan parsial uap air di *chamber*. Resistansi produk berevolusi sepanjang siklus mengikuti:

$$R_p(t) = R_{p,0} + \frac{A_0 \cdot t}{V_s}$$

dengan $A_0$ merupakan resistansi awal dan $V_s$ merupakan volume sublimasi kumulatif.

### 2.2 Model Transfer Panas Vial

Untuk vial tunggal dengan diameter dalam $d_v$ dan tinggi produk $L_p$, neraca panas pada *sublimation front* mengikuti:

$$q = \frac{k_g}{\Delta L} (T_{sh} - T_b) + \sigma \varepsilon (T_{sh}^4 - T_b^4)$$

di mana $k_g$ adalah konduktivitas termal gas pada tekanan rendah (≈0,015 W/m·K pada 0,1 mbar), $\Delta L$ adalah jarak vial dasar ke *front*, $\sigma$ adalah konstanta Stefan-Boltzmann, dan $\varepsilon$ adalah emisivitas efektif. Pada tekanan rendah, kontribusi radiasi dapat mencapai 20–30% dari total fluks panas.

### 2.3 Path Loss pada Kanal Nirkabel di dalam Liofilizer

Lingkungan *chamber* liofilizer bersifat sangat menantang untuk propagasi RF: ruang tertutup baja tahan karst (stainless steel 316L), multivial berisi air/es sebagai dielektrik, dan gradien suhu dari -50°C hingga +40°C. Meza‐Galvan *et al.* (2026) merujuk pada model *log-distance path loss*:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

di mana $PL(d_0)$ adalah path loss pada referensi $d_0$ = 1 m (≈40 dB pada 2,4 GHz), $n$ adalah *path loss exponent* (di dalam liofilizer $n$ = 2,8–3,5 karena multipath dan redaman oleh lapisan es), dan $X_\sigma$ adalah variabel acak log-normal shadowing dengan standar deviasi 4–8 dB. Untuk memastikan *link budget* positif:

$$P_{tx} + G_{tx} + G_{rx} - PL(d) - M_{fade} \geq P_{rx,min}$$

dengan margin *fade* $M_{fade}$ ≥ 20 dB direkomendasikan pada lingkungan vial-ice-loaded.

### 2.4 Model Jaringan Sensor dan Throughput

Arsitektur WSN mengikuti topologi *star-of-mesh* dengan $N$ node sensor dan 1 *gateway/edge router*. *Duty cycle* node $\delta$ dan interval sampling $\Delta t$ menentukan konsumsi energi:

$$E_{node} = V \cdot I_{tx} \cdot t_{tx} + V \cdot I_{rx} \cdot t_{rx} + V \cdot I_{sleep} \cdot (1-\delta)\Delta t$$

dengan baterai lithium 3,6 V / 2,4 Ah (≈8,64 kJ) memberikan otonomi >40 siklus liofilisasi (@ 72 jam per siklus) pada $\delta$ = 0,1%.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem

Penerapan WSN mengacu pada kerangka PAT berlapis yang diuraikan Meza‐Galvan *et al.* (2026):

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 4: Advanced Analytics (MPC, RTR, Soft Sensor)        │
├─────────────────────────────────────────────────────────────┤
│ Layer 3: Edge Gateway (Time-Series DB, OPC-UA, MQTT)       │
├─────────────────────────────────────────────────────────────┤
│ Layer 2: WSN Backhaul (ZigBee/LoRa Mesh → PoE Gateway)    │
├─────────────────────────────────────────────────────────────┤
│ Layer 1: Smart Sensor Nodes (T, P, RH — vial-level)        │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi (7 Langkah)

1. **Kualifikasi Desain (DQ):** Pemetaan ruang 3D *chamber* dengan simulasi ray-tracing (HFSS/CST) untuk memvalidasi cakupan RF; penempatan *gateway* di dinding *chamber* menggunakan feedthrough hermetik.
3. **Kalibrasi Sensor:** Kalibrasi 3-titik thermocouple terhadap standar ITS-90 pada -50°C, 0°C, +40°C; akurasi target ±0,2°C.
5. **Pengisian Data Batch:** Setiap *smart vial* diberi RFID/UUID yang terkait dengan resep, posisi rak, dan lot API.
7. **Proses Validasi:** Tujuh *runs* IQ/OQ/PQ sesuai ASTM E2503 dan GAMP 5; pengujian *edge cases* pada tekanan 0,05–1,0 mbar.
9. **Streaming Data:** Publish ke historian (PI/AVEVA) dengan frekuensi 0,1–1 Hz; *latency* end-to-end <2 detik.
11. **Soft Sensor Computation:** Estimasi $R_p(t)$, $q(t)$, dan $L_{dried}(t)$ menggunakan *moving horizon estimator*.
13. **Real-Time Release Testing (RTR):** Threshold otomatis lulus/gagal berdasarkan *primary drying endpoint* yang terdeteksi dari pendekatan tekanan *Pirani vs. capacitance* manometer.

### 3.3 Protokol Komunikasi

Standar yang direkomendasikan: ZigBee PRO (IEEE 802.15.4) untuk densitas tinggi ≤250 node di area liofilizer; LoRaWAN (868/915 MHz) untuk liofilizer besar dengan *gateway* eksternal; Modbus TCP/OPC UA untuk integrasi SCADA (Siemens PCS 7, Emerson DeltaV). Enkripsi AES-128 wajib sesuai 21 CFR Part 11.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Produksi Antibodi Monoklonal pada Liofilizer 8 m²

**Parameter input:**
- Liofilizer skala piloto dengan luas rak total $A_s$ = 8,0 m²
- Vial 10R (volume isi 3 mL), total $N_v$ = 20.000 vial per batch
- API: mAb konsentrasi 50 mg/mL dalam formulasi sukrosa 5% w/v
- Suhu rak target $T_{sh}$ = 20°C, suhu *freezing* $T_f$ = -45°C
- Tekanan *chamber* $P_c$ = 0,1 mbar (10 Pa)
- WSN: 100 node *smart vial* (sampling 5%), ditempatkan terdistribusi secara *stratified random*

**Langkah 1 — Estimasi waktu primary drying:**

Menggunakan persamaan sublimasi dengan parameter khas mAb-sukrosa: $R_{p,0}$ = 0,8 cm²·mbar·hr/g, $A_0$ = 0,02 cm²·mbar·hr/g per cm³ sublimasi, $V_s$ total per vial = 0,27 cm³ (3 mL produk - ice mass).

Rata-rata resistansi produk selama siklus:
$$\bar{R}_p = R_{p,0} + \frac{A_0 \cdot L_{avg}}{2} = 0{,}8 + \frac{0{,}02 \cdot 0{,}27}{2} = 0{,}803 \text{ cm}^2 \cdot \text{mbar} \cdot \text{hr/g}$$

Laju sublimasi per vial:
$$\dot{m}_{sub} = \frac{T_{sh} - T_b}{\Delta H_s \cdot \bar{R}_p}$$

Pada $T_{sh}$ = 20°C dengan asumsi $T_b$ = -25°C (tipikal pada 0,1 mbar):
$$\dot{m}_{sub} = \frac{(20 - (-25)) \cdot 1000}{2838 \cdot 0{,}803} = \frac{45.000}{2278{,}5} \approx 19{,}75 \text{ g/hr per vial}$$

Massa ice per vial: $m_{ice} = 3 \text{ mL} \times 0{,}917 \text{ g/cm}^3 = 2{,}75 \text{ g}$, sehingga waktu sublimasi per vial:
$$t_{sub} = \frac{2{,}75}{19{,}75} \approx 0{,}139 \text{ hr} = 8{,}3 \text{ menit}$$

Ini adalah sublimasi per vial; total waktu batch mempertimbangkan *edge vial* effect ≈ 35–40 jam.

**Langkah 2 — Validasi cakupan WSN dengan path loss:**

Jarak maksimum sensor