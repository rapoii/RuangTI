# 1948 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dan Rekayasa Sistem Monitoring Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan fundamental dalam menjaga kualitas produk biologis yang sensitif terhadap termal, seperti vaksin mRNA, antibodi monoklonal, dan terapi seluler. Liofilisasi (freeze-drying) merupakan Unit Operasi kritis yang memungkinkan stabilitas jangka panjang produk melalui dehidrasi sublimatif pada tekanan rendah. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* (DOI: 10.1002/9783527850303.ch4), proses ini memiliki tiga fase utama — pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi) — yang masing-masing memerlukan presisi pengukuran suhu produk pada rentang −40 °C hingga +60 °C, tekanan ruang pada orde 10–200 mTorr, dan kelembapan residu di bawah 1% (w/w).

Urgensi operasionalnya sangat tinggi karena nilai produk dalam satu batch vial khas berkisar USD 50.000–500.000. Kegagalan proses akibat *batch* loss* atau *out-of-specification* bukan hanya menimbulkan kerugian finansial langsung, melainkan juga *regulatory non-compliance* dengan FDA Process Validation Guidance (2011) dan EMA Annex 15. Meza‐Galvan et al. (2026) menekankan bahwa kerangka *Process Analytical Technology* (PAT) yang dipicu oleh FDA pada 2004 telah mendorong adopsi monitoring real-time untuk menggantikan pendekatan *end-product testing* yang reaktif. Sensor nirkabel (Wireless Sensor Networks/WSN) menjadi enabler strategis karena menghilangkan hambatan instalasi kabel pada ruang vakum yang steril, memudahkan *scalability* pada lini multi-vial, dan mendukung integrasi dengan sistem *Manufacturing Execution System* (MES) serta *cloud-based analytics*.

Dari perspektif ekonomi, investasi implementasi WSN pada satu liofilizer skala pilot (kapasitas ± 10.000 vial) berkisar USD 25.000–60.000, namun *return on investment* (ROI) dapat tercapai dalam 8–14 bulan melalui pengurangan *rejected batch* sebesar 30–45% dan optimalisasi siklus pengeringan yang menghemat energi listrik hingga 18%. Artusio, Barresi, dan Pisano (2026) dalam bab *Emerging Technologies in Pharmaceutical Freeze‐Drying* (DOI: 10.1002/9783527850303.ch11) memperkuat posisi ini dengan menunjukkan bahwa integrasi WSN dengan *soft-sensor modeling*, *machine learning*, dan *digital twin* memungkinkan *predictive process control* yang menurunkan variabilitas *Critical Quality Attribute* (CQA) seperti waktu rekonstitusi dan aktivitas biologis produk. Kedua literatur ini menjadi basis bagi transformasi liofilisasi farmasi dari pendekatan *batch-centric* menuju *continuous knowledge-driven manufacturing* sesuai inisiatif Pharma 4.0.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif proses liofilisasi mengikuti kerangka *heat and mass transfer* simultan yang diformulasikan oleh Pikal (1985) dan dimodifikasi untuk arsitektur WSN oleh Meza‐Galvan et al. (2026). Laju sublimasi es $J_q$ (kg/s) pada antarmuka sublimasi mengikuti hukum perpindahan massa:

$$J_q = \frac{A_p}{R_p} \cdot \left( P_{ice}(T_p) - P_c \right)$$

di mana $A_p$ adalah luas area sublimasi vial (m²), $R_p$ resistansi perpindahan massa dry layer (Pa·m²·s/kg), $P_{ice}(T_p)$ tekanan uap jenuh es pada suhu produk $T_p$ (Pa), dan $P_c$ tekanan ruang chamber (Pa). Tekanan uap es mengikuti persamaan Clausius-Clapeyron:

$$P_{ice}(T) = \exp\left( a_1 + \frac{a_2}{T} + a_3 \ln T + a_4 T \right)$$

dengan koefisien untuk es: $a_1 = 9.550426$, $a_2 = −5723.265$ K, $a_3 = 3.53068$, $a_4 = 0.000023$ (Davy & Somayaji, 1985; dirujuk ulang oleh Meza‐Galvan et al., 2026).

Keseimbangan energi pada vial menghasilkan:

$$Q = A_v \cdot K_v \cdot (T_s - T_p) = \Delta H_s \cdot J_q$$

di mana $A_v$ luas vial bagian luar, $K_v$ koefisien transfer panas keseluruhan vial (W/m²·K), $T_s$ suhu *shelf*, dan $\Delta H_s$ entalpi sublimasi es (≈ 2.840 kJ/kg pada 0 °C). Parameter kunci $K_v$ dapat dimodelkan sebagai:

$$K_v = \frac{1}{\frac{1}{K_c} + \frac{1}{K_s} + \frac{1}{K_r}}$$

mencakup konduksi gas pada celah vial (*bottom curvature gap*), radiasi, dan kontak vial–shelf.

Untuk arsitektur WSN, throughput data jaringan mengikuti protokol IEEE 802.15.4 dengan *duty cycle* $\delta$:

$$\delta = \frac{T_{active}}{T_{active} + T_{sleep}}$$

Laju transmisi efektif $\lambda_{eff}$:

$$\lambda_{eff} = \lambda_{max} \cdot \delta \cdot (1 - P_{loss})$$

dengan $P_{loss}$ probabilitas packet loss yang harus dijaga di bawah 0,5% untuk menjamin *reliability* sesuai ALCOA+ data integrity guideline EMA (2018). Konsumsi energi sensor node:

$$E_{node} = P_{tx} \cdot t_{tx} + P_{rx} \cdot t_{rx} + P_{idle} \cdot t_{idle} + P_{sleep} \cdot t_{sleep}$$

Meza‐Galvan et al. (2026) menurunkan formula *remaining useful life* (RUL) baterai sensor yang dipasang di ruang steril:

$$RUL = \frac{C_{battery} - C_{threshold}}{I_{avg}}$$

dengan $I_{avg}$ arus rata-rata tergantung *duty cycle* dan protokol MAC. Untuk aplikasi farmasi, target *mean time between failure* (MTBF) node adalah ≥ 50.000 jam dengan laju sampling 1 Hz untuk termokopel dan 10 Hz untuk sensor tekanan kapasitif Pirani.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti SOP 8-tahap yang dirancang berdasarkan kontribusi Meza‐Galvan et al. (2026) dan integrasi teknologi baru oleh Artusio et al. (2026):

**Tahap 1 — Pemetaan Proses & Identifikasi Titik Kritis (*Critical Process Parameter*/CPP).** Gunakan diagram Ishikawa dan Failure Mode Effects Analysis (FMEA) untuk mengidentifikasi lokasi vial sentinel (1 vial termometer di setiap kuadran rak *shelf*) yang mewakili *edge vial* dan *center vial*.

**Tahap 2 — Seleksi Sensor & Validasi.** Sensor RTD kelas PT100 dengan akurasi ±0,1 °C atau termokopel Tipe T (rentang −200 °C hingga +350 °C) untuk $T_p$, sensor tekanan kapasitif Baratron® (akurasi ±0,5%) untuk $P_c$, dan *moisture analyzer* near-infrared (NIR) untuk $C_{res}$. Validasi mengikuti USP <1119> dan ICH Q2(R2).

**Tahap 3 — Desain Topologi Jaringan.** Topologi *hybrid mesh-star* dengan gateway sterilisasi-grade (IP68) di luar *chamber*, koordinator pada panel kontrol, dan router node di setiap rak *shelf*. Frekuensi 2,4 GHz (ZigBee PRO/Thread) atau sub-GHz 868 MHz (LoRaWAN) untuk penetrasi baja stainless.

**Tahap 4 — Instalasi Aseptik.** Sensor dimasukkan melalui *port feedthrough* dengan *tri-clamp* steril dan *isolator barrier*; baterai LiSOCl₂ 3,6 V untuk masa pakai 3–5 tahun.

**Tahap 5 — Konfigurasi PAT Data Pipeline.** Arsitektur 4-layer: (i) *acquisition* (sensor + ADC 24-bit), (ii) *edge processing* (filter Kalman untuk derau termal), (iii) *transmission* (MQTT/OPC-UA ke historian), (iv) *analytics* (dashboard PAT dengan *control chart* dan *soft-sensor*).

**Tahap 6 — Kalibrasi & Kualifikasi.** *Installation Qualification* (IQ), *Operational Qualification* (OQ), dan *Performance Qualification* (PQ) mengikuti GAMP 5 dan ASTM E2503.

**Tahap 7 — Integrasi dengan LIMS/MES.** Pemetaan data ke *Batch Record* elektronik (21 CFR Part 11 compliant) dengan *audit trail*.

**Tahap 8 — Continuous Verification.** *Continued Process Verification* (CPV) fase 3 FDA, dengan *multivariate statistical process control* (MSPC) berbasis Hotelling T² dan SPE.

Diagram alir keputusan otomatis (*automatic cycle endpoint detection*) yang dikembangkan Meza‐Galvan et al. (2026) menggunakan algoritma *Pirani pressure rise test*:

$$\frac{dP_c}{dt}\bigg|_{t=0} = \frac{Q_{subl}}{V_c \cdot C_v}$$

di mana $Q_{subl}$ adalah laju sublimasi residual, $V_c$ volume ruang, dan $C_v$ konstanta waktu vakum. Ketika $\frac{dP_c}{dt} < 0,001$ mTorr/s, sistem secara otomatis menandai *primary drying* selesai dan beralih ke *secondary drying*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Liofilisasi antibodi monoklonal pada liofilizer skala produksi (SP Hull LyoConstellation™) dengan kapasitas 12.000 vial per batch (vial 10 mL, format ISO 8362-1). Formulasi: konsentrasi protein 50 mg/mL, eksipien sukrosa 7% (b/v). Target *primary drying*: 36 jam.

**Parameter Input:**

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Suhu shelf | $T_s$ | −10 | °C |
| Tekanan chamber target | $P_c$ | 80 | mTorr (10,66 Pa) |
| Area sublimasi per vial | $A_p$ | 4,52 × 10⁻⁴ | m² |
| Resistansi dry layer awal | $R_p$ | 1,8 | Pa·m²·s/kg |
| Entalpi sublimasi | $\Delta H_s$ | 2.840 | kJ/kg |
| $K_v$ vial | $K_v$ | 12 | W/m²·K |

**Langkah 1 — Hitung Tekanan Uap Es pada Suhu Produk.**

Asumsikan suhu produk awal $T_p$ = −20 °C = 253,15 K. Substitusi ke persamaan Clausius-Clapeyron:

$$P_{ice}(253{,}15) = \exp(9{,}550426 + \frac{-5723{,}265}{253{,}15} + 3{,}53068 \cdot \ln(253{,}15) + 0{,}000023 \cdot 253{,}15)$$

$$P_{ice} = \exp(9{,}550426 - 22{,}6008 + 18{,}5919 + 0{,}00582) = \exp(5{,}5473) = 257{,}1 \text{ Pa}$$

Dalam mTorr: $P_{ice} \approx 1.928$ mTorr.

**Langkah 2 — Hitung Laju Sublimasi per Vial.**

$$\Delta P = P_{ice} - P_c = 257{,}1 - 10{,}66 = 246{,}44 \text{ Pa}$$

$$J_q = \frac{4{,}52 \times 10^{-4}}{1{,}8} \cdot 246{,}44 = 6{,}19 \times 10^{-2