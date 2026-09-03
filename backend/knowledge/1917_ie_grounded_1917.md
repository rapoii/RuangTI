# 1917 — Karakterisasi dan Pengendalian Perilaku Scaling Autoclave pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade Ni) terus melonjak seiring transisi elektrifikasi kendaraan dan penyimpanan energi grid. Bijih nikel laterit menyumbang sekitar 70% dari cadangan nikel terrestre global, namun kadar Ni yang rendah (0,8–1,5%) dan kandungan Fe serta Mg yang tinggi menjadikan proses pirometalurgi konvensional tidak efisien. *High-Pressure Acid Leaching* (HPAL) menjadi teknologi dominan untuk mengekstraksi Ni dan Co dari limonit laterit karena mampu mencapai perolehan Ni >90% dengan kemurnian Mixed Hydroxide Precipitate (MHP) yang tinggi. Akan tetapi, operasional HPAL menghadapi satu tantangan teknis-ekonomi paling krusial: **pembentukan kerak (scaling) pada dinding dan pipa internal autoclave**.

Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menyoroti bahwa perilaku scaling selama leaching bijih nikel laterit pada kondisi HPAL menentukan keberlanjutan operasional, ketersediaan pabrik (*plant availability*), dan profil konsumsi energi spesifik. Pada suhu 240–270 °C dan tekanan 30–45 bar dengan konsentrasi H₂SO₄ 5–7 M, terbentuk endapan multi-fasa berupa hematit (Fe₂O₃), aluminium hidroksida, jarosit hidronium [H₃O·Fe₃(SO₄)₂(OH)₆], dan gipsum (CaSO₄·2H₂O) yang menempel sebagai lapisan padat kompak. Ketebalan kerak dapat mencapai 5–50 mm dalam satu siklus produksi 60–90 hari, menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, U) hingga 40–60% dan memaksa *shutdown* prematur untuk清洗 mekanis.

Secara ekonomi, setiap hari *unplanned shutdown* pada autoclave HPAL berkapasitas 50.000 ton bijih/tahun dapat menimbulkan kerugian produksi nikel dalam MHP senilai USD 0,8–1,5 juta. Dengan demikian, rekayasa pengendalian scaling bukan sekadar isu kimia proses, melainkan persoalan **optimasi sistem industri** yang mencakup keandalan (*reliability engineering*), manajemen pemeliharaan, dan keberlanjutan rantai pasok. Andrameda, Triaswinanti, dan Madra (2024) melengkapi perspektif ini dengan menunjukkan bahwa *pre-treatment* desulfurisasi dan proses *roasting-reduction* pada residu HPAL dapat memodifikasi komposisi mineralogi umpan sehingga mengurangi potensi deposisi kerak dalam autoclave. Integrasi kedua pendekatan—karakterisasi in-situ dan modifikasi umpan—menjadi pilar strategi operasional HPAL modern.

Urgensi riset ini diperkuat oleh agenda dekarbonisasi: peningkatan *plant availability* sebesar 5% saja pada pabrik HPAL berskala besar dapat menurunkan emisi CO₂ spesifik hingga ~8% melalui pengurangan *idling energy* dan peningkatan throughput. Oleh karena itu, modul ini membahas perilaku scaling secara kuantitatif, formulasi kinetika deposisi, dan SOP operasional yang dapat diadopsi oleh praktisi teknik industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Leaching Bijih Laterit: Shrinking Core Model (SCM)

Partikel bijih laterit diasumsikan sebagai bola isotropik dengan jari-jari awal $r_0$ dan radius inti yang belum bereaksi $r_c(t)$. Laju leaching dikendalikan oleh difusi asam melalui lapisan produk (ash layer), sehingga untuk kontrol difusi:

$$\frac{t}{\tau} = 1 - 3\left(\frac{r_c}{r_0}\right)^2 + 2\left(\frac{r_c}{r_0}\right)^3$$

dengan $\tau$ adalah waktu total untuk konversi sempurna:

$$\tau = \frac{\rho_B \cdot r_0^2}{6 \cdot b \cdot D_{eff} \cdot C_{A,s}}$$

di mana $\rho_B$ adalah densitas molar Ni dalam bijih (mol/m³), $b$ koefisien stoikiometri reaksi, $D_{eff}$ koefisien difusi efektif (m²/s), dan $C_{A,s}$ konsentrasi H₂SO₄ di permukaan. Temperatur dependence difusivitas遵循 persamaan Arrhenius:

$$D_{eff} = D_0 \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ untuk leaching Ni laterit dilaporkan 45–75 kJ/mol (Dickson et al., 2026).

### 2.2 Kinetika Deposisi Scaling

Deposisi kerak遵循model laju orde-nol terkontrol-superficial atau *induction time* yang diikuti deposi cepat. Laju pertumbuhan ketebalan kerak $\delta(t)$ dapat dimodelkan sebagai:

$$\delta(t) = k_s \cdot \exp\left(-\frac{E_s}{RT}\right) \cdot \left(\frac{[Fe^{3+}]}{C_{Fe}^*}\right)^n \cdot t^m$$

dengan $k_s$ konstanta laju (m·s⁻¹), $E_s$ energi aktivasi deposisi (~85 kJ/mol untuk jarosit), $C_{Fe}^*$ konsentrasi saturasi Fe³⁺, eksponen $n$ = 1,5–2,2 dan $m$ = 0,7–1,1 (fasa *linearly growth-dominated*). Pada HPAL komersial, $m \to 1$ setelah periode induksi $\tau_i$ yang khas:

$$\tau_i = \tau_0 \exp\left(\frac{E_i}{RT}\right) \cdot \left[\frac{[H^+]}{[SO_4^{2-}]}\right]^{-0.5}$$

### 2.3 Penurunan Perpindahan Panas oleh Kerak

Efek termal kerak pada dinding autoclave dimodelkan sebagai resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{steel}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{\delta_{insulation}}{k_{ins}} + \frac{1}{h_o}$$

Konduktivitas termal kerak HPAL khas: $k_{scale}$ (hematit) ≈ 0,8–1,2 W/(m·K), $k_{scale}$ (jarosit) ≈ 0,4–0,7 W/(m·K). Untuk autoclave baja SA-516 Grade 70 ($k_{steel}$ = 45 W/(m·K), $\delta_{steel}$ = 0,025 m) dan insulasi kalsium silikat ($k_{ins}$ = 0,07 W/(m·K), $\delta_{ins}$ = 0,15 m), kontribusi $\delta_{scale}/k_{scale}$ menjadi dominan ketika $\delta_{scale} > 0,01$ m.

### 2.4 Neraca Massa & Yield MHP

Yield Ni dalam MHP dari slurry leaching:

$$Y_{Ni} = \frac{\dot{m}_{MHP} \cdot x_{Ni,MHP}}{\dot{m}_{ore} \cdot x_{Ni,ore} \cdot R_{ext}}$$

dengan $R_{ext}$ efisiensi ekstraksi leaching. Material balance keseluruhan mengikuti persamaan stoikiometri leach:

$$NiO_{(s)} + H_2SO_4 \rightarrow NiSO_{4(aq)} + H_2O$$

dengan konsumsi asam teoritis 0,91 ton H₂SO₄/ton Ni untuk umpan limonit standar. Konsumsi aktual pada HPAL industri berada pada 2,2–3,5 ton H₂SO₄/ton Ni karena reaksi samping dengan MgO dan Fe₂O₃.

### 2.5 Model Kritis untuk Desain Pembersihan

Frekuensi optimal *cleaning cycle* (hari) dimodelkan dengan menyeimbangkan kerugian produksi dan biaya清洗:

$$T_{opt} = \sqrt{\frac{2 \cdot C_{clean}}{C_{prod} \cdot \left(\frac{dU^{-1}}{dt}\right) \cdot \Delta T}}$$

dengan $C_{clean}$ biaya *shutdown* + cleaning, $C_{prod}$ margin produksi harian.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Scaling

```
┌─────────────────┐
│ Bijih Laterit   │
│ (Ni 1,1%, Fe    │
│  45%, MgO 5%)   │
└────────┬────────┘
         ▼
┌─────────────────────────────┐
│ Pre-treatment:              │
│ • Desulfurisasi (Andrameda  │
│   et al., 2024)             │
│ • Roasting-Reduction 600°C  │
│ • Size reduction <150 μm    │
└────────┬────────────────────┘
         ▼
┌─────────────────────────────┐
│ Slurry Mixing (60% solids)  │
│ + H₂SO₄ recycle             │
└────────┬────────────────────┘
         ▼
┌─────────────────────────────┐
│ AUTOCLAVE HPAL              │
│ • T = 250 °C                │
│ • P = 40 bar                │
│ • t = 90 min                │
│ • Agitasi 250 rpm           │
│ [Multi-compartment: 4-6     │
│  stage dengan baffle]       │
└────────┬────────────────────┘
         ▼
┌─────────────────────────────┐
│ Flash Cooling & CCD         │
│ (Counter-Current Decant)    │
└────────┬────────────────────┘
         ▼
┌─────────────────────────────┐
│ Neutralisasi & MHP          │
│ Precipitation (pH 3,5)      │
└────────┬────────────────────┘
         ▼
┌─────────────────────────────┐
│ Solid Residue → Tailings    │
│ Neutralization              │
└─────────────────────────────┘
```

### 3.2 SOP Pengendalian Scaling (berdasarkan Dickson et al., 2026)

**Fase Pra-Operasional:**
1. Karakterisasi mineralogi umpan dengan XRD dan SEM-EDS untuk mengidentifikasi rasio goethit/hematit dan konten S²⁻.
2. Penentuan rasio optimal [H₂SO₄]/[Fe total] = 1,05–1,15 untuk menghindari *over-acid*.
3. *Baffled design verification* pada autoclave sesuai standar ASME BPVC Section VIII Div. 1.

**Fase Operasional:**
1. **Monitoring suhu dinding autoclave** dengan termokopel T₁–T₆ sepanjang bejana. Jika $\Delta T_{wall-steam} > 12$ °C, indikasi deposisi kerak > 8 mm.
2. **Sampling slurry setiap 4 jam** untuk analisis Fe³⁺, free acid, dan *particle size distribution* dengan laser diffraction (Malvern Mastersizer).
3. **Kontrol pH slurry pada 1,0–1,5** menggunakan online probe (Hamilton