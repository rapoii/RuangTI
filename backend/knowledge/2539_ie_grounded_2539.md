# 2539 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Manufaktur Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, in: *Chiplet Design and Heterogeneous Integration Packaging*. Springer, Singapore. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari desain *System-on-Chip* (SoC) monolitik menuju arsitektur *chiplet* dan *3D-Integrated Circuit* (3D-IC) yang bersifat heterogen. Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: pertama, **batas fisik litografi sub-3 nm** yang menyebabkan biaya *wafer fab* melonjak secara eksponensial (biaya fab先进 meningkat ~30-50% per node menurut data historis industri); kedua, **yield monolitik yang menurun drastis** ketika satu die tunggal harus mengintegrasikan semua fungsi (CPU, GPU, IO, memori, analog) dalam area yang makin luas; dan ketiga, **fragmentasi permintaan pasar** akan komputasi heterogen (AI accelerator, HBM, RF, sensor) yang tidak lagi efisien disatukan dalam satu proses teknologi tunggal.

Ksenia Roze dan Mark Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menyoroti bahwa **toolchain EDA (Electronic Design Automation) konvensional tidak lagi memadai** untuk menangani kompleksitas co-design multi-die. Arsitektur chiplet memerlukan sintesis lintas-die yang mencakup *floorplanning* 2.5D/3D, verifikasi *interconnect* berkecepatan sangat tinggi (PAM4, 112 Gbps+), simulasi termal tumpukan vertikal, dan *sign-off* terhadap *Design Rule Check* (DRC) spesifik proses *hybrid bonding*. John H. Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) selanjutnya mengkuantifikasi bahwa *Cu-Cu hybrid bonding* memungkinkan pitch interconnect turun ke **≤ 3 µm** dengan resistansi kontak < 50 mΩ per sambungan dan tanpa *underfill*, berbeda dengan *micro-bump* solder konvensional (pitch 20-40 µm, resistansi ~100-300 mΩ).

Urgensi ekonominya sangat konkret. Pasar chiplet global diproyeksi melampaui USD 100 miliar pada 2030 dengan CAGR > 40%. Perusahaan seperti AMD (arsitektur Infinity Fabric/Infinity Cache), Intel (Foveros, EMIB), TSMC (SoIC-X, SoIC-W), dan Samsung (X-Cube) telah mengkomersilkan paket multi-die berskala produksi. Tanpa *tool* EDA yang mature untuk co-design, *package*, dan *verification*, *time-to-market* akan terhambat 12-18 bulan dan risiko *respin* silikon meningkat tajam. Dalam konteks Teknik Industri, ini bukan sekadar persoalan rekayasa perangkat keras, melainkan masalah **optimalisasi rantai nilai (value chain) desain-fab-packaging-test** yang memerlukan integrasi keputusan lintas-fungsi, *trade-off* biaya-versus-performa, dan mitigasi risiko ketidakpastian manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Multi-Die Heterogen

Untuk arsitektur chiplet dengan $n$ die independen yang disusun dalam paket 2.5D/3D, yield kumulatif sistem mengikuti model probabilistik serial:

$$Y_{system} = \prod_{i=1}^{n} Y_i \cdot Y_{bonding} \cdot Y_{interconnect}$$

di mana $Y_i$ adalah yield fab individual die, $Y_{bonding}$ adalah yield proses *hybrid bonding*, dan $Y_{interconnect}$ adalah yield sambungan listrik lintas-die. Dengan asumsi Poisson yield model (Good, 1970) untuk die ukuran $A_i$ (cm²) pada cacat densitas $D$ (cm⁻²):

$$Y_i = e^{-D \cdot A_i}$$

Untuk paket 3D dengan 4 chiplet identik ukuran 1 cm² dan $D = 0.5$ cm⁻²:

$$Y_i = e^{-0.5 \cdot 1} = 0{,}6065$$

$$Y_{system} = 0{,}6065^4 \cdot Y_{bonding} \cdot Y_{interconnect}$$

Jika $Y_{bonding} = 0{,}98$ dan $Y_{interconnect} = 0{,}97$ (tipikal hybrid bonding Cu-Cu menurut Lau, 2023):

$$Y_{system} = 0{,}1352 \cdot 0{,}98 \cdot 0{,}97 \approx 0{,}1285$$

Artinya hanya ~12,85% unit lulus, sehingga strategi *known-good-die* (KGD) menjadi imperatif ekonomis.

### 2.2 Model Resistansi & Kapasitansi Interconnect Hybrid Bonding

Untuk sambungan *Cu-Cu hybrid bonding* pitch $p$ (µm), diameter pad $d$ (µm), tinggi Cu $h$ (µm), dan resistivitas Cu $\rho_{Cu} = 1{,}68 \times 10^{-8}$ Ω·m, resistansi kontak dapat dimodelkan sebagai:

$$R_{contact} = \frac{\rho_{Cu} \cdot t_{interface}}{A_{contact}} + R_{oxide} + R_{spreading}$$

dengan $t_{interface} \approx 1{-}3$ nm untuk ikatan metalurgi langsung pada suhu < 300°C, dan $A_{contact} = \pi (d/2)^2$. Untuk pitch 3 µm, diameter 1,5 µm, dan $t_{interface} = 2$ nm:

$$R_{contact,ideal} = \frac{1{,}68 \times 10^{-8} \cdot 2 \times 10^{-9}}{\pi (0{,}75 \times 10^{-6})^2} \approx 1{,}9 \times 10^{-5} \text{ Ω} \approx 19 \text{ mΩ}$$

Kapasitansi parasitik sambungan ke *ground plane* berjarak $h_{diel}$ dengan permitivitas $\varepsilon_r$:

$$C_{parasitic} = \varepsilon_0 \varepsilon_r \frac{A_{contact}}{h_{diel}} \approx 3{,}9 \times 10^{-13} \cdot \frac{\pi (0{,}75)^2}{2} \approx 3{,}4 \times 10^{-13} \text{ F} \approx 0{,}34 \text{ fF}$$

### 2.3 Model Termal Tumpukan 3D

Resistansi termal vertikal paket 3D dengan $k$ layer die masing-masing setebal $t_i$ dan konduktivitas termal $k_i$:

$$R_{th,vertical} = \sum_{i=1}^{k} \frac{t_i}{k_i \cdot A_{eff}}$$

Untuk tumpukan 4-die (masing-masing $t = 50$ µm, $k_{Si} = 148$ W/m·K, area efektif $A_{eff} = 1 \text{ cm}^2$):

$$R_{th,vertical} = \frac{4 \cdot 50 \times 10^{-6}}{148 \cdot 1 \times 10^{-4}} \approx 1{,}35 \times 10^{-2} \text{ K/W}$$

Daya total 100 W pada paket tanpa heatsink:

$$\Delta T = P \cdot R_{th} = 100 \cdot 0{,}0135 \approx 1{,}35 \text{ °C}$$

Namun dengan *hybrid bonding*, **konduksi termal antardie mendekati bulk Cu** karena tidak ada lapisan solder/underfill, sehingga koefisien transmisi termal efektif meningkat ~3-5x dibanding micro-bump.

### 2.4 Optimasi Biaya Total Kepemilikan (TCO)

Fungsi biaya total kepatuhan EDA-flow:

$$C_{total} = C_{tool,license} + C_{engineer,time} + \sum_{r=1}^{R} C_{respin,r} \cdot p_r + C_{delay,time-to-market}$$

dengan $R$ jumlah respin, $p_r$ probabilitas respin ke-$r$, dan $C_{delay}$ opportunity cost dari keterlambatan peluncuran produk (umumnya ~USD 1-10 juta per minggu untuk produk semikonduktor premium).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Alur EDA Chiplet 3D-IC

Roze & Gerber (2026) menguraikan kerangka EDA yang harus mengintegrasikan delapan domain secara simulter:

```
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 1: System-Level Architecture & Chiplet Partitioning  │
│           (Trade-off Analysis: perf / power / cost / yield) │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 2: Individual Die RTL-to-GDSII (per chiplet)        │
│           (Synthesis, PnR, Timing, Power, DRC/LVS)          │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 3: Inter-Chiplet Floorplanning 2.5D / 3D            │
│           (Bump/Bond pitch assignment, RDL routing)         │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 4: Multi-Physics Sign-Off                            │
│           (Thermal, SI/PI, IR-drop, Mechanical stress)      │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 5: Package Co-Design & Manufacturing Hand-off        │
│           (Substrate, TSV, Hybrid bonding stack-up)         │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 6: Test, KGD, & Yield Management                     │
│           (DFT, BIST, Known-Good-Die burn-in)               │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasi Standar (SOP) Desain Chiplet

**SOP-CP-01: Chiplet Partitioning Decision**
1. Definisikan fungsi fungsional: $F = \{f_1, f_2, \ldots, f_m\}$
2. Alokasikan ke dalam set die $D = \{d_1, d_2, \ldots, d_n\}$ sehingga $\bigcup d_i = F$ dan $\sum A(d_i) < A_{reticle,max}$
3. Hitung *figure-of-merit*: $FOM = \alpha \cdot Perf + \beta \cdot (1/Power) + \gamma \cdot Yield - \delta \cdot Cost$
4. Validasi terhadap thermal constraint: $\Delta T_{max} \leq 85°C$ (umumnya)

**SOP-CP-02: Hybrid Bonding Pitch Allocation** (berdasarkan Lau, 2023)
1. Untuk I/O bandwidth tinggi (> 1 Tbps aggregate): gunakan pitch ≤ 3 µm
2. Untuk sinyal analog/RF: pertimbangkan *Faraday cage* dengan *guard ring*
3. Untuk power delivery: alokasikan pitch lebih besar (8-10 µm) dengan jumlah sambungan lebih banyak
4. Toleransi misalignment: $\Delta_{align} \leq p/4$ untuk memastikan yield > 99%

**SOP-CP-03: Multi-Physics Verification**
1. Ekstrak parasitik RC dari GDSII final semua die
2. Jalankan simulasi transien elektro-termal *coupled*
3. Verifikasi hotspot termal $< 105°C$ (Tj max operasi)
4. Validasi integritas sinyal dengan margin mata diagram $\geq 30\%$ UI pada BER $10^{-12}$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Paket AI Accelerator 2.5D dengan 4 Chiplet