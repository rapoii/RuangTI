# 1660 — Jaringan Sensor Nirkabel untuk Monitoring Liofilisasi Farmasi: Integrasi PAT, Rekayasa Panas-Massa, dan Arsitektur Telemetri Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (WSN–Lyo)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi parenteral untuk produk biologis bernilai tinggi seperti antibodi monoklonal, vaksin mRNA, dan protein terapeutik. Pasar global layanan liofilisasi farmasi diproyeksikan melampaui USD 8 miliar pada 2030 dengan CAGR > 9 % (Meza-Galvan et al., 2026), didorong oleh peningkatan pipeline biofarmasi yang membutuhkan stabilitas jangka panjang tanpa cold-chain terdistribusi. Namun, proses ini memiliki *Total Cost of Ownership* yang signifikan: satu siklus batch untuk 10.000 vial dapat berlangsung 48–72 jam dengan konsumsi energi utilitas (listrik, air pendingin, nitrogen) mencapai 150–300 kWh, dan nilai *batch loss* akibat deviasi proses dapat menyentuh USD 250.000–2.000.000 tergantung molekul aktif (Artusio, Barresi & Pisano, 2026).

Urgensi operasional utama yang diidentifikasi oleh Meza-Galvan, Strongrich, dan Darwish (2026) adalah *visibility gap* pada proses primer dan sekunder drying. Sistem akuisisi data konvensional menggunakan thermocouple tipe-T berkabel (*wired*) dengan jumlah titik ukur terbatas (umumnya 4–16 probe per *shelf*), menimbulkan tiga masalah struktural: (i) distorsi termal lokal karena intrusi probe mengganggu gradien panas vial, (ii) *single-point-of-failure* pada konektor dan harness sterilisasi, serta (iii) cakupan spasial yang tidak representatif untuk batch ribuan vial. Penerapan Wireless Sensor Networks (WSN) berdaya rendah dengan protokol IEEE 802.15.4/ZigBee/LoRa memungkinkan densitas pengukuran 50–200 node per lyo chamber, sebagaimana dibahas secara komprehensif pada Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: 10.1002/9783527850303.ch4).

Dari perspektif rekayasa sistem industri, integrasi WSN ke dalam platform PAT (Process Analytical Technology) FDA-CFR-Part 11 dan kerangka kerja ICH Q8(R2)/Q9/Q10 bukan sekadar upgrade instrumentasi, melainkan enabler untuk kontrol umpan balik *Model-Predictive Control* (MPC) yang menurunkan konsumsi energi hingga 18–25 % melalui *dynamic shelf temperature ramping* (Artusio et al., 2026). Dengan demikian, kompetensi seorang insinyur industri pada modul ini mencakup desain topologi jaringan, kalkulasi *energy budget* node sensor, dan translasi data WSN menjadi parameter kontrol proses (T<sub>shelf</sub>, P<sub>chamber</sub>, laju sublimasi) yang menjadi input Quality-by-Design (QbD).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa Liofilisasi

Laju sublimasi $\dot{m}$ selama *primary drying* dimodelkan dengan persamaan resistansi seri klasik (Pikal, 1985; dimodifikasi oleh Meza-Galvan et al., 2026):

$$\dot{m} = \frac{A_p \, (P_{w,i}(T_b) - P_{chamber})}{R_p + R_s}$$

di mana:
- $A_p$ = luas penampang sublimasi vial (m²),
- $P_{w,i}(T_b)$ = tekanan uap air jenuh pada antarmuka sublimasi (Pa),
- $P_{chamber}$ = tekanan ruang (Pa),
- $R_p$ = resistansi produk kering (Pa·m²·s/kg),
- $R_s$ = resistansi stopper dan headspace vial (Pa·m²·s/kg).

Flux panas dari rak (*shelf*) ke produk diformulasikan:

$$Q = K_v A_v (T_{shelf} - T_b)$$

dengan $K_v$ koefisien kal total vial (W/m²·K), $A_v$ luas kontak vial-rak, dan $T_b$ suhu *bottleneck* produk. Keseimbangan termal di antarmuka sublimasi (sublimation front):

$$\Delta H_s \dot{m} = Q - A_p \frac{\partial}{\partial x}\!\left(k_d(T) \frac{\partial T}{\partial x}\right)$$

di mana $\Delta H_s \approx 2.838 \times 10^6$ J/kg adalah entalpi sublimasi es, dan $k_d(T)$ konduktivitas termal lapisan produk kering yang bergantung suhu.

### 2.2 Model Energi Jaringan Sensor Nirkabel

Setiap node WSN beroperasi pada siklus akuisisi-tidur. Konsumsi energi per transmisi mengikuti model *first-order radio* (Heinzelman, 2000):

$$E_{tx}(k, d) = \begin{cases} k \cdot E_{elec} + k \cdot \varepsilon_{fs} \cdot d^2, & d < d_0 \\ k \cdot E_{elec} + k \cdot \varepsilon_{mp} \cdot d^4, & d \geq d_0 \end{cases}$$

dengan ambang batas kritis:

$$d_0 = \sqrt{\frac{\varepsilon_{fs}}{\varepsilon_{mp}}}$$

Parameter tipikal untuk radio sub-GHz (LoRaWAN pada 868/915 MHz) yang digunakan di ruang lio: $E_{elec} = 50$ nJ/bit, $\varepsilon_{fs} = 10$ pJ/bit/m², $\varepsilon_{mp} = 0.0013$ pJ/bit/m⁴.

Energi receiver: $E_{rx}(k) = k \cdot E_{elec}$. Untuk node dengan baterai lithium primer 3.6 V / 2.4 Ah (kapasitas $C_b = 8.64$ kJ), *lifetime* diasumsikan fungsi siklus tugas (*duty cycle*):

$$L_{node} = \frac{C_b}{f_{sample}\left(\tau_{active} P_{tx} + \tau_{sleep} P_{sleep}\right)}$$

### 2.3 Model Path-Loss RF dalam Lyo Chamber

Ruang liofilisasi berupa *Faraday cage* logam dengan gasket konduktif yang meredam propagasi RF. Model *log-distance path loss*:

$$L_p(d) = L_0 + 10 n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

di mana eksponen path-loss $n$ secara empiris berada pada rentang 1.8–2.6 untuk chamber baja tahan karat dengan atenuasi tambahan $\geq 15$ dB akibat multipath pada permukaan dipoles (Meza-Galvan et al., 2026). Untuk memastikan margin link budget positif:

$$P_{rx} = P_{tx} + G_t + G_r - L_p - L_{chamber} \geq \text{Sensitivity}$$

## 3. Metodologi Rekayasa & SOP Implementasi WSN-Lyo

Implementasi industri mengikuti SOP 5-tahap yang disintesis dari Chapter 4 (DOI: 10.1002/9783527850303.ch4) dan Chapter 11 (DOI: 10.1002/9783527850303.ch11):

**Tahap 1 — Kualifikasi Desain (URS → FRS).** Definisikan *Critical Quality Attributes* (CQA): $T_b$ ≤ -28 °C selama *freezing*, $T_b$ optimum pada 90 % kolaps eutectic untuk *primary drying*, dan kadar air akhir < 1 % w/w. Tetapkan *Critical Process Parameters* (CPP): $T_{shelf} \in [-40, +45]$ °C, $P_{chamber} \in [0.05, 1.5]$ mbar.

**Tahap 2 — Seleksi Arsitektur Jaringan.** Dua topologi berlaku:
- **Star (single-hop)**: node WSN berkomunikasi langsung ke gateway sterilizable melalui hermetic RF feedthrough. Cocok untuk chamber kecil (≤ 200 vial) dengan latensi < 2 s.
- **Mesh multi-hop**: node router dipasang di dinding chamber dengan relay untuk cakupan > 500 vial. Redundansi tinggi tetapi menambah kompleksitas time-synchronization IEEE 1588.

**Tahap 3 — Instalasi Sensor Node.** Node thermocouple nirkabel tipe-T (akurasi ±0.2 °C, rentang -200 sampai +200 °C) ditempatkan di *bottom-center* vial sesuai ASTM E2871. Validasi kalibrasi 3-titik (0 °C, -40 °C, +25 °C) dengan traceability NIST. Sterilisasi via autoclave pada 121 °C / 30 min sebelum *load*.

**Tahap 4 — Akuisisi & Edge Analytics.** Sampling rate $f_{sample}$ direkomendasikan 0.1–1 Hz selama *primary drying*, turun ke 0.01 Hz selama *secondary drying* untuk konservasi energi. Algoritma edge-computing menghitung secara real-time:
$$\text{PRL} = \frac{P_{w,i}(T_b) - P_{chamber}}{R_p + R_s} \quad \text{[kg/(m²·s)]}$$

**Tahap 5 — Integrasi dengan PAT & SCADA.** Streaming data WSN masuk ke Historian (PI, OSIsoft) melalui OPC-UA dengan tanda tangan digital符合 CFR 21 Part 11. Threshold alarm $T_b > T_{collapse} - 2$ °C memicu *controlled vial collapse detection* (Artusio et al., 2026) dan aktivasi *shut-down ramp*.

```
┌──────────────────────────────────────────────┐
│  Diagram Alir: Wireless PAT untuk Lio Primer │
└──────────────────────────────────────────────┘
[Loading] → [Node Sterilization] → [Vial Placement]
   → [WSN Activation] → [Real-time T_b, T_shelf, P_c]
   → [Sublimation Rate Calc.] → [MPC Feedback]
   → [Cycle End + Residual Moisture NIR Check]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pilot batch 1.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
