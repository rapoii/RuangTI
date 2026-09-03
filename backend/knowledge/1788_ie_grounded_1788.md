# 1788 — Jaringan Sensor Nirkabel dan Teknologi Proses untuk Liofilisasi Farmasi: Pemantauan Cerdas, PAT, dan Integrasi IoT dalam Manufaktur Obat Steril

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization & Emerging Process Analytical Technology in Pharmaceutical Freeze‐Drying
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization* dalam buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Wiley‐VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze‐drying) merupakan unit operasi kritis dalam manufaktur farmasi modern yang ditujukan untuk produk biologis, vaksin, antibiotik, dan sediaan protein rekombinan dengan nilai pasar global lebih dari USD 4,8 milyar per tahun (Meza‐Galvan et al., 2026). Proses ini berlangsung dalam kondisi vakum (tekanan 10–100 Pa) dengan tiga tahap utama: pembekuan (*freezing*), sublimasi (*primary drying*), dan desorpsi (*secondary drying*). Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam chapter "Wireless Sensor Networks for Lyophilization" (DOI: 10.1002/9783527850303.ch4), industri farmasi menghadapi tantangan struktural berupa **blind‐spot termal**: termokopel kabel tradisional (T‐type, 36 gauge) hanya mampu memantau 5–18 vial dari total ribuan vial dalam satu *batch*, menimbulkan variabilitas suhu produk $T_p$ yang dapat melebihi 3 °C antar vial pada posisi kritis seperti tepi rak (*edge vials*) versus pusat rak (*center vials*). Meza‐Galvan et al. (2026) menunjukkan bahwa kesalahan penempatan satu termokopel saja sudah cukup menurunkan akurasi model *heat transfer* dan menghasilkan prediksi $T_p$ yang bias hingga 4,7 °C.

Artusio, Barresi, dan Pisano (2026) dalam chapter "Emerging Technologies in Pharmaceutical Freeze‐Drying" (DOI: 10.1002/9783527850303.ch11) memperluas wacana ini dengan menegaskan bahwa transisi menuju **Industry 4.0 pharmaceutical manufacturing** mensyaratkan integrasi penuh antara *Process Analytical Technology* (PAT), jaringan sensor nirkabel (*Wireless Sensor Networks*, WSN), dan sistem kontrol umpan balik berbasis *machine learning*. Kedua naskah tersebut dipublikasikan dalam buku Wiley‐VCH edisi 2026 yang dieditori oleh para ahli PAT farmasi dan menjadi rujukan standar bagi regulator FDA yang menerapkan kerangka *Quality by Design* (QbD) sesuai ICH Q8(R2), Q9, Q10, dan Q13. Urgensi ekonominya signifikan: satu siklus liofilisasi bernilai USD 50.000–250.000 per batch, sehingga kerugian akibat *failed batch* akibat parameter yang tidak terpantau secara spasial dapat melebihi USD 1 juta per kejadian pada lini produksi komersial.

Dari perspektif *Industrial Engineering*, masalah ini bukan sekadar persoalan instrumentasi, melainkan masalah **desain sistem manufaktur** yang memerlukan optimasi lintas fungsi: akuisisi data, transmisi nirkabel dalam lingkungan vakum/konduktif, *real‐time decision support*, dan kepatuhan terhadap *Good Manufacturing Practice* (cGMP 21 CFR Part 211). Meza‐Galvan et al. (2026) menekankan bahwa implementasi WSN memungkinkan peningkatan *spatial resolution* pemantauan dari 0,5–1 % vial menjadi 15–25 % vial, sehingga *process capability index* $C_{pk}$ untuk atribut kritis seperti kadar air residual ($< 1,0$ % w/w untuk protein) dapat ditingkatkan dari 1,0 menjadi > 1,5.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Perpindahan Panas dan Laju Sublimasi

Meza‐Galvan et al. (2026) membangun model *heat and mass transfer* mengikuti pendekatan Pikal (1985) yang menjadi standar industri:

$$q_{tot} = q_c + q_r = A_v \cdot k_c (T_s - T_p) + A_v \cdot \sigma \cdot \varepsilon (T_s^4 - T_p^4)$$

dengan $q_{tot}$ fluks panas total (W), $q_c$ konduksi gas pada tekanan Chamber, $q_r$ radiasi, $A_v$ luas sublimasi vial, $k_c$ koefisien konduksi gas residu (W/m·K), $T_s$ suhu rak (*shelf*), $T_p$ suhu produk pada *sublimation front*, $\sigma$ konstanta Stefan‐Boltzmann ($5{,}67 \times 10^{-8}$ W/m²·K⁴), dan $\varepsilon$ emisivitas efektif.

Laju sublimasi mengikuti:

$$\dot{m}_{sub} = \frac{q_{tot}}{\Delta H_s}$$

dengan $\Delta H_s \approx 2800$ kJ/kg untuk es murni. Total waktu *primary drying*:

$$t_d = \frac{m_{ice,0}}{\dot{m}_{sub}}$$

### 2.2. Degradasi Produk dan Batas Termal

Batas degradasi termal produk biologis mengikuti kinetika Arrhenius yang dirujuk Artusio et al. (2026):

$$k_{deg} = A \cdot \exp\left(-\frac{E_a}{RT_p}\right)$$

dengan $A$ faktor pre‐eksponensial, $E_a$ energi aktivasi (kJ/mol, tipikal 50–120 kJ/mol untuk protein), dan $R = 8{,}314$ J/mol·K. Konsentrasi produk terdegradasi:

$$C(t) = C_0 \cdot \exp(-k_{deg} \cdot t)$$

Kriteria desain rekayasa: $T_p$ harus dijaga $< T_{crit}$ di mana $T_{crit}$ adalah suhu *collapse* atau *eutectic melt* produk, biasanya -30 °C hingga -10 °C untuk protein.

### 2.3. Teori Transmisi Nirkabel dalam Lingkungan Liofilisasi

Meza‐Galvan et al. (2026) membahas propagasi gelombang RF dalam ruang logam yang merujuk pada persamaan *path loss* log‐distance:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d)$ redaman pada jarak $d$, $PL(d_0)$ redaman referensi pada $d_0 = 1$ m, $n$ *path loss exponent* (2 untuk *free space*, 3–5 dalam chamber logam multi‐pantul), $X_\sigma$ variabel acak normal *shadowing* (dB). Kapasitas kanal Shannon–Hartley:

$$C = B \log_2\left(1 + \frac{S}{N}\right)$$

dengan $B$ bandwidth (Hz), $S$ daya sinyal, $N$ daya derau. Implementasi praktis pada frekuensi 2,4 GHz (IEEE 802.15.4/ZigBee) menghasilkan $C \approx 250$ kbps pada SNR 12 dB.

### 2.4. Ketidakpastian Pengukuran dan Proses Kapabilitas

Artusio et al. (2026) menggunakan framework *measurement system analysis* (MSA) untuk validasi sensor PAT:

$$u_c = \sqrt{\sum_{i=1}^{n} \left(\frac{\partial f}{\partial x_i}\right)^2 u_i^2}$$

dengan $u_c$ ketidakpastian terkombinasi dan $u_i$ ketidakpastian standar tiap sumber. Kapabilitas proses atribut kritis:

$$C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$

FDA mensyaratkan $C_{pk} \geq 1{,}33$ untuk proses farmasi komersial dan $C_{pk} \geq 1{,}5$ untuk proses validasi penuh (ICH Q9).

### 2.5. Kontrol Nukleasi Terkendali

Artusio et al. (2026) memformulasikan *ice nucleation controlled* dengan parameter *induction time* mengikuti distribusi Weibull:

$$F(t) = 1 - \exp\left[-\left(\frac{t - \gamma}{\eta}\right)^\beta\right]$$

dengan $\gamma$ *location parameter*, $\eta$ *scale parameter* (s), dan $\beta$ *shape parameter*. Penyempitan distribusi ini melalui teknik *ice fog* atau *depressurization* menurunkan variabilitas ukuran kristal es dan memperbaiki *cake resistance* $R_p$ pada tahap sublimasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur WSN untuk Liofilisasi (Meza‐Galvan et al., 2026)

Tahapan implementasi sistematis:

1. **Karakterisasi Termal Awal.** Pemetaan 9‐titik termokopel standar (3 zona × 3 vial) sesuai ASTM E2503 untuk menetapkan baseline distribusi $T_p$.
2. **Pemilihan Platform Sensor.** Sensor MEMS berbasis Texas Instruments CC2652 atau Analog Devices ADuCM3029 dengan akurasi ±0,1 °C (rentang -40 °C sampai +85 °C), termokopel T‐type terintegrasi, resolusi tekanan 0,1 Pa (sensor piezoresistif), dan akselerometer 3‐sumbu untuk deteksi getaran.
3. **Desain Protokol Transmisi.** Pemilihan *mesh network* ZigBee/Thread dengan *time‐synchronized channel hopping* (TSCH) untuk mitigasi interferensi. Redundansi 3‐*hop* pada frekuensi 2,4 GHz dengan *duty cycle* 5 % untuk memperpanjang usia baterai.
4. **Integrasi dengan Sistem PAT.** Agregasi data melalui *edge gateway* (Raspberry Pi CM4 atau Siemens IoT2050) dengan protokol MQTT ke platform *data historian* (OSIsoft PI, AVEVA Historian).
5. **Validasi sesuai GMP.** Kualifikasi instalasi (IQ), operasional (OQ), dan performa (PQ) sesuai ASTM E2503 dan PDA Technical Report 64.

```
┌─────────────────────────────────────────────────────────────┐
│        ARSITEKTUR WSN UNTUK LIOFILISASI FARMASI             │
├─────────────────────────────────────────────────────────────┤
│  Layer 1: Sensor Nirkabel (Vial-level)                     │
│   ├─ Termokopel MEMS T-type, ±0.1°C                        │
│   ├─ Sensor tekanan piezoresistif, 0.1 Pa                   │
│   ├─ Sensor RH (kapasitif), 0.5% RH                        │
│   └─ Akselerometer 3-axis (deteksi getaran pompa)          │
├─────────────────────────────────────────────────────────────┤
│  Layer 2: Komunikasi RF (2.4 GHz IEEE 802.15.4)            │
│   ├─ Topologi mesh, 3-hop redundancy                        │
│   ├─ TSCH time-synchronized channel hopping                 │
│   └─ Duty cycle 5% untuk battery life extension             │
├─────────────────────────────────────────────────────────────┤
│  Layer 3: Edge Gateway                                      │
│   ├─ MQTT broker → Data historian (PI/AVEVA)               │
│   ├─ Real-time dashboard (Grafana/Power BI)                │
│   └─ Soft sensor: pred