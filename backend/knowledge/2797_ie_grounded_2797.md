# 2797 — Rekayasa Autoclave dan Karakterisasi Pembentukan Kerak (Scaling) pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel sebagai bahan baku baterai lithium-ion, stainless steel austenitik, dan superalloy telah memicu lonjakan produksi yang didominasi oleh bijih nikel laterit, yang menyumbang lebih dari 70% cadangan nikel dunia namun hanya ~50% produksi karena tantangan metalurginya. Di antara teknologi hidrometalurgi, *High-Pressure Acid Leaching* (HPAL) menjadi tulang punggung pemrosesan bijih limonitik yang kaya besi dan rendah magnesium, karena kemampuannya mengekstraksi 90–95% nikel pada suhu 240–270 °C dan tekanan 35–55 bar dengan kemurnian endapan mixed hydroxide precipitate (MHP) yang tinggi (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun, keunggulan teknis HPAL diimbangi oleh persoalan operasional kronis: **autoclave scaling**, yaitu pengendapan lapisan kerak padat pada dinding, impeller, dan pipa penukar panas internal autoclave. Kerak tersusun atas hematit ($\alpha$-Fe$_2$O$_3$), *basic ferric sulfate* (misalnya natrojarosite NaFe$_3$(OH)$_6$(SO$_4$)$_2$), *goetit* (FeOOH), dan silika amorf yang membentuk matriks berpori. Akumulasi kerak 5–20 mm/cycle menyebabkan degradasi koefisien transfer panas (overall heat transfer coefficient, U) hingga 40–60%, peningkatan konsumsi asam spesifik sebesar 15–25%, serta *unplanned shutdown* yang menurunkan *overall equipment effectiveness* (OEE) autoclave di bawah 75% (Andrameda et al., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Secara ekonomis, downtime unscheduled pada autoclave HPAL kapasitas 45.000 t Ni/tahun menyebabkan hilangnya revenue sekitar USD 8–15 juta per kejadian, menjadikan studi perilaku scaling dan karakterisasinya bukan sekadar persoalan metalurgi tetapi persoalan keberlanjutan operasional industri. Pendekatan *cleaner production* yang diajukan Dickson et al. (2026) menyoroti pentingnya integrasi antara karakterisasi fisikokimia kerak dan strategi desulfurization pra-perlakuan untuk menekan laju pengendapan, sehingga memperpanjang *campaign time* autoclave dari rata-rata 90 hari menjadi >180 hari. Konteks ini menjadi pijakan utama mengapa modul ini relevan bagi rekayasa sistem industri: pengendalian scaling adalah keputusan *trade-off* antara konsumsi reagen, kapasitas produksi, dan frekuensi *maintenance turnaround*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Nikel dan Besi

Reaksi pelindian bijih laterit dalam autoclave mengikuti stoikiometri inti:

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O}$$

$$\text{Fe}_2\text{O}_3 + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 3\text{H}_2\text{O}$$

Kinetika pelindian untuk komponen $i$ ($\text{Ni}$, $\text{Co}$, $\text{Fe}$) umumnya dimodelkan dengan persamaan *shrinking core* termodifikasi:

$$1 - (1 - X_i)^{1/3} = \frac{k_{s,i} \cdot C_{\text{H}^+}^{n}}{\rho_{p} \cdot r_{p}} \cdot t$$

dengan $X_i$ adalah fraksi konversi komponen $i$, $k_{s,i}$ konstanta laju intrinsik, $C_{\text{H}^+}$ konsentrasi ion hidrogen efektif, $\rho_p$ densitas partikel, $r_p$ jari-jari partikel, $n$ orde reaksi terhadap proton, dan $t$ waktu tinggal. Pengaruh suhu ditangkap oleh persamaan Arrhenius:

$$k_{s,i}(T) = k_{0,i} \cdot \exp\left(-\frac{E_{a,i}}{R T}\right)$$

dengan energi aktivasi tipikal $E_a$ untuk nikel laterit limonitik: $E_{a,\text{Ni}} \approx 45\text{–}60$ kJ/mol dan $E_{a,\text{Fe}} \approx 70\text{–}85$ kJ/mol, yang menunjukkan bahwa pelindian Fe lebih sensitif terhadap suhu dan menjadi "motor" pengendapan kerak (Dickson et al., 2026).

### 2.2 Thermodinamika dan Kinetika Pembentukan Kerak

Pada suhu >240 °C, Fe$_2$(SO$_4$)$_3$ mengalami hidrolisis membentuk hematit sesuai reaksi *Hatch-Cutler*:

$$\text{Fe}_2(\text{SO}_4)_3 + (3 + 2x)\text{H}_2\text{O} \rightarrow 2\text{FeOOH} \cdot x\text{H}_2\text{O}_{(s)} + 3\text{H}_2\text{SO}_4$$

$$2\text{FeOOH} \rightarrow \alpha\text{-Fe}_2\text{O}_3 + \text{H}_2\text{O}$$

Laju pertumbuhan kerak δ(x,t) pada dinding autoclave dimodelkan dengan kinetika parabolic (difusi-ion terkontrol):

$$\delta(t) = \sqrt{2 D_{s} \cdot C_{s,\text{sat}} \cdot \frac{\Omega}{M_s} \cdot t}$$

dengan $D_s$ koefisien difusi spesies pembentuk kerak (umumnya Fe$^{3+}$ atau SO$_4^{2-}$), $C_{s,\text{sat}}$ konsentrasi saturasi, $\Omega$ volume molar Fe(OH)$_3$, dan $M_s$ massa molar. Untuk proses multi-komponen, model *mixed-control* memberikan:

$$\delta(t) = A \sqrt{t} + B t$$

dengan $A\sqrt{t}$ komponen difusif dan $Bt$ komponen antarmuka (reaction-limited).

### 2.3 Neraca Massa Asam dan Heat Transfer Effectiveness

Asam sulfat total yang dibutuhkan per ton bijih:

$$M_{\text{H}_2\text{SO}_4} = \sum_{j} \nu_j \cdot \frac{m_j \cdot X_j}{M_j}$$

dengan $\nu_j$ koefisien stoikiometri terhadap komponen $j$ (Fe, Al, Mg, Mn, Ca), $m_j$ massa komponen dalam umpan, dan $M_j$ massa molar. Kerak menurunkan koefisien transfer panas efektif:

$$\frac{1}{U_{\text{eff}}} = \frac{1}{U_0} + \frac{\delta(t)}{k_{\text{scale}}}$$

sehingga kenaikan suhu slurry di dalam autoclave membutuhkan steam yang lebih besar:

$$\dot{Q} = U_{\text{eff}} \cdot A \cdot \Delta T_{\text{LMTD}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Dickson et al. (2026) mengusulkan metodologi karakterisasi dan mitigasi scaling secara terstruktur sebagai berikut:

```
┌─────────────────────────────────────────────────────┐
│  1. Pra-perlakuan Bijih (Desulfurization/Roasting)  │
│     ↓                                               │
│  2. Slurry Feeding (45-55% solids) → Autoclave     │
│     ↓                                               │
│  3. HPAL Reactor (T=250°C, P=45 bar, t=60 min)     │
│     ↓     ↓                                         │
│  [Sampling]  [Scale Deposit Sampling]               │
│     ↓                                               │
│  4. Characterization (XRD, SEM-EDS, TGA, ICP-OES)   │
│     ↓                                               │
│  5. Kinetic Modelling → Scale Growth Prediction     │
│     ↓                                               │
│  6. Decision Support: Cleaning Interval & Acid Dosing│
└─────────────────────────────────────────────────────┘
```

**Tahapan SOP (sesuai Andrameda et al., 2024 + Dickson et al., 2026):**

1. **Desulfurization pra-perlakuan**: penambahan agen desulfurisasi (misalnya Na$_2$CO$_3$, CaCl$_2$, atau *roasting* pada 600–800 °C) untuk mengurangi sulfur yang akan membentuk jarosite, dengan rasio optimal S-removal >70% pada suhu 700 °C dan waktu 90 menit.
2. **Pulp density control**: menjaga solid-to-liquid ratio pada 45–55% agar viskositas slurry 50–150 cP sehingga perpindahan massa tidak menjadi *bottleneck* pengendapan kerak.
3. **Acid dosing staging**: injeksi asam dua tahap (pre-acid 30% pada 90 °C, *main acid* 70% pada 250 °C) untuk membedakan pelindian Fe awal dari pelindian Ni lanjutan.
4. **Real-time monitoring**: pengukuran ΔT heat exchanger dan pressure drop sebagai proxy laju penebalan kerak.
5. **Shutdown & chemical cleaning**: blow-down bertahap, *acid wash* 5% HCl pada 60 °C selama 8–12 jam untuk melarutkan kerak Fe-oksida.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik HPAL dengan kapasitas umpan 3.000 t bijih limonitik/hari, komposisi umpan: 1,3% Ni, 0,05% Co, 45% Fe, 5% Al, 2% Mg, 0,8% S (sebagai sulfida). Suhu operasi 250 °C (523 K), tekanan 45 bar, residence time 60 menit.

### 4.1 Kebutuhan Asam Sulfat Stoikiometri

Asumsi semua Fe, Al, Mg harus terlindikan sesuai reaksi stoikiometri:

$$M_{\text{H}_2\text{SO}_4}^{\text{stoik}} = \frac{3000 \text{ t}}{1 \text{ t ore}}\left[ \frac{0{,}45 \cdot 3}{159{,}7} + \frac{0{,}05 \cdot 3}{102} + \frac{0{,}02 \cdot 1}{24{,}3} \right] \times 98$$

Perhitungan komponen per ton bijih:
- Fe: $\frac{0{,}45 \cdot 3}{159{,}7} = 0{,}00845$ kmol H$_2$SO$_4$/t
- Al: $\frac{0{,}05 \cdot 3}{102} = 0{,}00147$ kmol H$_2$SO$_4$/t
- Mg: $\frac{0{,}02 \cdot 1}{24{,}3} = 0{,}000823$ kmol H$_2$SO$_4$/t
- **Total**: 0,01074 kmol/t ×