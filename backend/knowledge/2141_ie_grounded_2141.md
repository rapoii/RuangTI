# 2141 — Autoclave Scaling Behaviour and Characterisation pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Indonesia merupakan produsen nikel laterit terbesar di dunia dengan kontribusi lebih dari 38% produksi global pada tahun 2024, didominasi oleh wilayah Sulawesi Tenggara, Halmahera, dan Maluku Utara. Sebesar ~70% cadangan nikel bumi berbentuk bijih laterit (limonit dan saprolit) dengan kadar Ni hanya 0,8–1,5%, sehingga membutuhkan teknologi hidrometalurgi bertekanan tinggi untuk mencapai recovery yang layak secara ekonomi. Teknologi *High-Pressure Acid Leaching* (HPAL) menjadi tulang punggung ekstraksi nikel dari bijih limonit, dengan beroperasi pada rentang suhu 240–270 °C dan tekanan 35–45 bar dalam autoclave multi-kompartemen yang dilapisi *titanium grade-2* atau *lead-lined steel* (Dickson et al., 2026; Andrameda et al., 2024).

Namun, operasionalisasi HPAL menghadapi tantangan kritis berupa **autoclave scaling** — pembentukan lapisan kerak anorganik pada dinding autoclave, pipa transfer slurry, dan internal *agitator*. Dickson et al. (2026) menunjukkan bahwa deposit scaling tersusun atas campuran kompleks *iron oxide-hydroxide* (hematit α-Fe₂O₃, goetit α-FeOOH), *gypsum* (CaSO₄·2H₂O), *anhydrite* (CaSO₄), dan *silica-alumina amorphous phases* yang terbentuk akibat supersaturasi lokal pada antarmuka panas. Studi Andrameda et al. (2024) menegaskan bahwa pre-treatment berupa *roasting-reduction* dengan agen *desulfurization* (Na₂CO₃ atau CaO) mampu memodifikasi komposisi residu dan menekan intensitas scaling pada tahap HPAL lanjutan. Urgensi masalah ini bersifat langsung terhadap kinerja pabrik: kehilangan effisiensi perpindahan panas hingga 35%, peningkatan konsumsi asam sulfat 15–25%, downtime autoclave 8–15% dari total *available time*, dan degradasi kapasitas produksi 5–12% per siklus operasi. Secara ekonomi, downtime scaling merugikan industri nikel laterit Indonesia hingga USD 200–400 juta per tahun pada skala global (Dickson et al., 2026, DOI: 10.1016/j.clwas.2026.100503). Konteks ini menjadi landasan perlunya pendekatan rekayasa sistem yang mengintegrasikan karakterisasi material, pemodelan kinetika, dan SOP pemeliharaan prediktif dalam modul 2141.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelarutan dan Pembentukan Skala

Reaksi fundamental HPAL pada bijih limonit mengikuti stoikiometri:

$$2\text{FeOOH} + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O}$$

Kinetika pelarutan padat-cair mengikuti model **shrinking core** dengan difusi melalui lapisan produk sebagai tahap pembatas laju:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_{A,b}}{\rho_B \cdot R^2} \cdot t$$

di mana $\alpha$ adalah fraksi konversi, $k_p$ konstanta difusi lapisan produk (m/s), $C_{A,b}$ konsentrasi asam di bulk (kmol/m³), $\rho_B$ densitas padatan (kg/m³), dan $R$ jari-jari awal partikel (m). Energi aktivasi proses pelarutan mengikuti persamaan Arrhenius:

$$k_p = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ berkisar 55–85 kJ/mol untuk pelarutan goetit dan 40–60 kJ/mol untuk pelarutan nikel oksida (Dickson et al., 2026).

### 2.2 Mekanisme Pembentukan Skala dan Thermodinamika

Skala terbentuk ketika indeks saturasi (SI) fase tertentu melampaui ambang kritis. Untuk gypsum:

$$\text{SI}_{\text{gypsum}} = \log\left(\frac{[\text{Ca}^{2+}][\text{SO}_4^{2-}]}{K_{sp,\text{CaSO}_4 \cdot 2\text{H}_2\text{O}}(T)}\right)$$

di mana $K_{sp}$ menurun dengan naiknya suhu sesuai persamaan *van't Hoff*:

$$\ln K_{sp}(T) = \ln K_{sp}(T_{ref}) - \frac{\Delta H_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)$$

Laju deposisi skala mengikuti model **Hertz-Knudsen** untuk nucleasi heterogen:

$$J = \gamma \cdot \exp\left(-\frac{16\pi \sigma^3 v_m^2}{3k_B^3 T^3 (\ln \text{SI})^2}\right) \cdot A_s$$

di mana $J$ adalah laju nukleasi (nuklei/m²·s), $\sigma$ tegangan permukaan interfacial, $v_m$ volume molar kristal, $k_B$ konstanta Boltzmann, dan $A_s$ luas permukaan substrat (Dickson et al., 2026).

### 2.3 Degradasi Perpindahan Panas oleh Skala

Ketebalan skala $x_s$ menurunkan koefisien perpindahan panas overall menurut model resistansi seri:

$$\frac{1}{U_o} = \frac{1}{h_i} + \frac{x_s}{k_s} + \frac{x_w}{k_w} + \frac{1}{h_o}$$

dengan $h_i$ koefisien konveksi internal, $k_s$ konduktivitas termal skala (~0,35–0,80 W/m·K untuk deposit mixed oxide-sulfate), $x_w$ tebal dinding autoclave, $k_w$ konduktivitas titanium (21,9 W/m·K), dan $h_o$ koefisien eksternal (Dickson et al., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Pre-Treatment

```
[Bijih Laterit] → [Repulping & Klassifikasi] → [Slurry 40-45% solid]
       ↓
[Pre-treatment: Roasting-Reduction + Desulfurization]  ← Andrameda et al. (2024)
       ↓ (suhu 600-750 °C, agen: Na₂CO₃/CaO)
[HPAL Autoclave 4-6 kompartemen] (240-270 °C, 35-45 bar)
       ↓
[Multi-stage CCD Counter-Current Decantation]
       ↓
[Neutralisasi & Precipitation]
       ↓
[Ni(OH)₂/MSP]
```

### 3.2 SOP Karakterisasi Scaling (berdasarkan Dickson et al., 2026)

**Langkah 1: Sampling & Preservasi Deposit**
- Pengambilan sampel kerak dari *inspection port* setelah depressurisasi autoclave
- Pendinginan terkontrol (< 5 °C/menit) untuk mencegah transformasi fase
- Penyimpanan dalam *vacuum desiccator* sebelum analisis

**Langkah 2: Karakterisasi Multi-Analitik**
- **XRD (X-Ray Diffraction)** dengan Cu-Kα (λ = 1,5406 Å) untuk identifikasi fase kristalin
- **SEM-EDS (Scanning Electron Microscopy-Energy Dispersive Spectroscopy)** pada tegangan 15–20 kV untuk morfologi dan komposisi elemental
- **TGA-DSC (Thermogravimetric Analysis-Differential Scanning Calorimetry)** dengan ramp 10 °C/min dalam atmosfer N₂ untuk dekomposisi termal
- **ICP-OES (Inductively Coupled Plasma Optical Emission Spectroscopy)** setelah *acid digestion* untuk komposisi kimia kuantitatif

**Langkah 3: Pemodelan Prediktif**
- Penentuan parameter kinetik dengan *non-linear regression* terhadap data pelarutan
- Validasi dengan *one-way ANOVA* (α = 0,05)
- Simulasi CFD *Computational Fluid Dynamics* menggunakan *k-ε turbulence model* untuk distribusi suhu

### 3.3 SOP Pembersihan & Pencegahan

1. **Acid boil-out** dengan H₂SO₄ 5% pada 80 °C selama 4–6 jam setiap 60–90 hari operasi
2. **Mechanical descaling** menggunakan *high-pressure water jet* (200–300 bar)
3. **Inhibitor injection** (polimfosfat atau dispersan organik) pada konsentrasi 50–200 ppm
4. **Predictive maintenance** berbasis *heat flux monitoring* dengan threshold degradasi > 12% sebagai trigger shutdown

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Estimasi Laju Akumulasi Skala

**Parameter Operasi (Plant Halmahera, kapasitas 50.000 t Ni per tahun):**
- Tekanan operasi: $P = 40$ bar
- Suhu operasi: $T = 255$ °C = 528,15 K
- Konsentrasi asam masuk: $C_{H_2SO_4} = 250$ g/L = 2,55 kmol/m³
- Feeding rate slurry: $Q = 280$ m³/jam
- Komposisi bijih: Fe 38,5%, Ni 1,2%, Mg 4,8%, Ca 0,4%, SiO₂ 12,6%

**Langkah 1: Penentuan konsentrasi ion Ca²⁺ dan SO₄²⁻**

Massa slurry masuk per jam: $\dot{m} = Q \cdot \rho_{slurry} = 280 \cdot 1350 = 378.000$ kg/jam

Massa Ca yang terlarut per jam (asumsi 95% CaO/CaCO₃ terlarut):
$$\dot{m}_{Ca} = 378.000 \cdot 0,004 \cdot 0,95 = 1.437,2 \text{ kg/jam}$$

Konsentrasi Ca²⁺ dalam leach solution (volume larutan ~250 m³/jam):
$$[\text{Ca}^{2+}] = \frac{1.437,2/40,08}{250} = 0,143 \text{ kmol/m}^3$$

Konsentrasi SO₄²⁻ residual setelah pelarutan utama:
$$[\text{SO}_4^{2-}] = 2,55 - 1,2 \cdot 0,385 - 0,048 \cdot 0,5 = 2,073 \text{ kmol/m}^3$$

**Langkah 2: Perhitungan Indeks Saturasi Gypsum pada 255 °C**

$K_{sp}$ gypsum pada 25 °C = $4,87 \times 10^{-5}$, dengan $\Delta H_{diss} = -17,8$ kJ/mol:
$$\ln K_{sp}(528,15) = \ln(4,87 \times 10^{-5}) - \frac{-17.800}{8,314}\left(\frac{1}{528,15} - \frac{1}{298,15}\right)$$

$$\ln K_{sp}(528,15)