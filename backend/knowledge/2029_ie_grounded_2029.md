# 2029 — Autoclave Scaling Behaviour and Characterisation pada Proses HPAL Bijih Nikel Laterit: Kajian Rekayasa Proses, Perpindahan Panas, dan Optimalisasi Residue

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) mengalami peningkatan eksponensial seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi berbasis baterai lithium-ion (NMC/NCA). Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel terrestre global, menjadi sumber daya strategis yang tidak dapat dihindari dalam rantai pasok nikel. Di antara teknologi hidrometalurgi yang tersedia, **High-Pressure Acid Leaching (HPAL)** merupakan proses dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit tipe limonit dan saprolit, dengan tingkat recovery nikel yang mampu mencapai 90–95% pada kondisi operasi optimal (suhu 240–270 °C, tekanan 30–45 bar, konsentrasi H₂SO₄ 150–250 g/L).

Namun demikian, sebagaimana diuraikan oleh Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems*, operasi HPAL menghadapi tantangan operasional yang sangat signifikan berupa **autoclave scaling** — yaitu pengendapan dan akresi lapisan mineral anorganik pada dinding internal autoclave, pipa transfer slurry, dan permukaan penukar panas. Fenomena ini secara langsung menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, U), meningkatkan konsumsi energi spesifik per ton bijih, dan memaksa *planned shutdown* yang tidak terjadwal untuk *descaling* mekanis maupun kimiawi. Studi tersebut melakukan karakterisasi mineralogi dan morfologi *scale* untuk mengidentifikasi fasa dominan seperti **hematit (Fe₂O₃), anhydrit (CaSO₄), alunit (KAl₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), dan basic iron sulfate (FeOHSO₄)**, yang terbentuk melalui mekanisme presipitasi retrograde saat slurry mendingin dari suhu operasi ke suhu discharge.

Urgensi ekonomis dari masalah ini menjadi sangat krusial mengingat CAPEX sebuah pabrik HPAL berkisar USD 1,5–3,0 miliar dengan kapasitas 30.000–50.000 ton Ni per tahun, di mana downtime 5–10 hari akibat scaling dapat menimbulkan kerugian pendapatan hingga **USD 5–15 juta per kejadian**. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* melengkapi perspektif ini dengan mengkaji **proses desulfurisasi dan roasting-reduksi terhadap residue HPAL** untuk mengekstraksi kembali nikel yang terperangkap dalam matriks *scale* dan *neutralization residue*, sekaligus mengurangi volume tailing dan dampak lingkungan. Pendekatan ganda (mitigasi upstream + valorisasi downstream) ini merepresentasikan paradigma *circular hydrometallurgy* yang semakin menjadi standar baru dalam desain pabrik HPAL modern.

Konteks regional Indonesia, sebagai produsen nikel laterit terbesar di dunia (≈37% produksi global, terutama dari Sulawesi Tenggara, Halmahera, dan Morowali), memperkuat urgensi adopsi metodologi karakterisasi dan optimasi HPAL berbasis bukti ilmiah tersebut. Keputusan rekayasa seperti jenis pre-neutralization agent (MgO vs limestone), rasio solid-to-liquid, dan strategi descaling acid wash harus didesain berdasarkan data kinetika dan termodinamika presipitasi skala yang valid.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dengan Fouling

Pada autoclave HPAL yang beroperasi secara batch atau kontinyu dengan steam injection, perpindahan panas dari jacket steam ke slurry leach dimodelkan melalui resistansi termal seri:

$$\frac{1}{U_{\text{eff}}} = \frac{1}{h_{\text{steam}}} + \frac{\delta_{\text{wall}}}{k_{\text{steel}}} + \frac{\delta_{\text{scale}}(t)}{k_{\text{scale}}} + \frac{1}{h_{\text{slurry}}}$$

di mana:
- $U_{\text{eff}}$ = koefisien perpindahan panas efektif (W/m²·K)
- $h_{\text{steam}}$, $h_{\text{slurry}}$ = koefisien konveksi (W/m²·K)
- $\delta_{\text{wall}}$, $\delta_{\text{scale}}(t)$ = ketebalan dinding dan scale yang bergantung waktu (m)
- $k_{\text{steel}}$ ≈ 16–25 W/m·K (SA-516 Gr.70), $k_{\text{scale}}$ ≈ 0,5–2,0 W/m·K untuk komposit Fe₂O₃-CaSO₄

Faktor fouling didefinisikan sebagai:

$$R_f(t) = \frac{\delta_{\text{scale}}(t)}{k_{\text{scale}}} \quad \text{(m²·K/W)}$$

### 2.2 Kinetika Pertumbuhan Scale

Pertumbuhan scale mengikuti model asymptotic fouling yang diajukan Kern–Seaton:

$$\delta_{\text{scale}}(t) = \delta_\infty \left[1 - \exp\left(-\frac{t}{\tau}\right)\right]$$

dengan $\delta_\infty$ sebagai ketebalan kesetimbangan (umumnya 2–6 mm) dan $\tau$ konstanta waktu fouling yang bergantung pada suhu, konsentrasi asam, dan komposisi mineralogi bijih. Kinetika deposisi mengikuti hukum Arrhenius:

$$k_{\text{dep}} = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

di mana energi aktivasi tipikal untuk presipitasi hematit-anhydrit pada sistem HPAL berkisar **Eₐ = 45–80 kJ/mol** (Dickson et al., 2026).

### 2.3 Neraca Massa Leaching dan Pembentukan Scale

Untuk reaksi leaching umum bijih laterit:

$$\text{NiO·Fe}_2\text{O}_3\text{·xH}_2\text{O} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4(aq) + \text{Fe}_2(\text{SO}_4)_3(aq) + \text{H}_2\text{O}$$

Recovery nikel dimodelkan dengan kinetika shrinking-core:

$$1 - (1-X)^{1/3} = \frac{k_s \cdot C_{\text{H}^+}^{n}}{\rho_p \cdot r_p} \cdot t$$

di mana $X$ = fraksi Ni terekstrak, $k_s$ = konstanta kinetika permukaan, $C_{\text{H}^+}$ = konsentrasi ion hidrogen, $\rho_p$ = densitas partikel, $r_p$ = jari-jari awal. Nilai tipikal $k_s$ untuk NiO = $1,2 \times 10^{-4}$ m/s pada 250 °C.

Presipitasi scale mengikuti kelarutan retrograde:

$$\text{CaSO}_4(\text{s}) \rightleftharpoons \text{Ca}^{2+} + \text{SO}_4^{2-}, \quad K_{sp}(T)$$

di mana $K_{sp}$ *menurun* pada suhu tinggi (sifat retrograde), menjelaskan mengapa scale CaSO₄ terbentuk di zona *hot-end* autoclave.

### 2.4 Termodinamika Desulfurisasi dan Reduksi Residue

Proses roasting-reduksi yang dikaji Andrameda et al. (2024) mengikuti reaksi:

$$\text{NiO} + \text{H}_2 \rightarrow \text{Ni} + \text{H}_2\text{O}, \quad \Delta G^\circ = -13,4 \text{ kJ/mol (1000 K)}$$

$$\text{NiSO}_4 + \text{H}_2 \rightarrow \text{Ni} + \text{H}_2\text{SO}_4$$

Konstanta kesetimbangan:

$$K_{eq} = \exp\left(-\frac{\Delta G^\circ}{RT}\right)$$

Untuk desulfurisasi dengan Na₂CO₃ atau CaCO₃, reaksi dominan:

$$\text{NiSO}_4 + \text{Na}_2\text{CO}_3 \rightarrow \text{NiCO}_3 + \text{Na}_2\text{SO}_4$$

Efisiensi desulfurisasi $\eta_{\text{desS}}$ didefinisikan:

$$\eta_{\text{desS}} = \frac{[\text{S}]_{\text{awal}} - [\text{S}]_{\text{akhir}}}{[\text{S}]_{\text{awal}}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL Mitigasi Scaling

```
[ROM Laterite Ore] → [Repulping + SAG Mill] → [Pre-heating Slurry 90-110°C]
       ↓
[Autoclave HPAL Multi-Compartment, T=250°C, P=40 bar]
       ↓
[Solid-Liquid Separation CCD] → [Pregnant Leach Solution (PLS)]
       ↓                          ↓
[Neutralization (MgO/CaCO₃)]   [Tailings Neutralization Residue]
       ↓                                ↓
[Ni/Co SX-EW]                    [Desulfurization → Roasting-Reduction]
                                      ↓
                                 [Ni Recovery + POX Residue]
```

### 3.2 SOP Karakterisasi Scale (Dickson et al., 2026)

1. **Sampling Representatif**: Pengambilan *scale coupon* dari zona *feed-end*, *middle*, dan *discharge-end* autoclave menggunakan metode *drill-core sampling* saat *turnaround*.
2. **Sample Preparation**: Embedding dalam resin epoksi, pemotongan cross-section dengan diamond saw, polishing bertahap (120 → 600 → 1200 grit).
3. **Mineralogical Characterisation**:
   - **XRD (X-Ray Diffraction)** dengan Cu-Kα radiation (λ = 1,5406 Å), scan range 5–80° 2θ, step size 0,02° → identifikasi fasa kristalin menggunakan database ICDD PDF-4+.
   - **SEM-EDS (Scanning Electron Microscopy – Energy Dispersive Spectroscopy)** pada akselerasi 15–20 kV → morfologi dan komposisi elemental (Fe, Al, Ca, S, Si, K).
   - **Raman Spectroscopy** untuk konfirmasi fasa amorf/poorly crystalline seperti ferrihydrite.
4. **Thermogravimetric Analysis (TGA)**: Pemanasan 25–1000 °C pada 10 °C/min dalam atmosfer N₂ → identifikasi dekomposisi 단계 seperti dehidrasi gypsum (120–180 °C), dekomposisi alunit (550–650 °C).
5. **Computational Thermodynamic Modelling** menggunakan software **OLI Stream Analyzer** atau **FactSage 8.3** untuk memetakan kestabilan fasa sebagai fungsi T, pH, dan konsentrasi Fe³⁺/SO₄²⁻.

### 3.3 SOP Descaling dan Mitigasi (Industrial Best Practice)

- **Acid Wash Periodik** dengan 5–10% H₂SO₄ + inhibitor (Rodine 213) pada 80–90 °C selama 4–8 jam, dengan sirkulasi loop tertutup.
- **Mechanical Descaling** menggunakan *high-pressure water jet* (200–350 bar) untuk menghilangkan scale keras hematit-anhydrit.
- **Pre-Treatment Modification**: Penambahan **seed crystal CaSO₄·2H₂O** (50–200 ppm) untuk mengontrol morfologi presipitasi menjadi bentuk yang lebih mudah terdispersi (bulk precipitation > wall deposition).
- **Operating Window Optimization**: Kontrol ΔT across heat exchanger ≤ 15 °C untuk mencegah thermal shock yang mempercepat spalling & re-deposisi.

### 3.4 SOP Roasting-Reduction Residue (Andrameda et al., 2024)

1. **