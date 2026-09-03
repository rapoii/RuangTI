# 1709 — Analisis Perilaku Scaling Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Bidang Khusus: Proses Hidrometalurgi Tekanan Tinggi
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel dan kobalt sebagai bahan baku baterai lithium-ion (NCM/NCA katoda) telah melonjak drastis seiring transisi energi kendaraan listrik dan penyimpanan energi stasioner. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit (limonit dan saprolit) yang kadar Ni-nya rendah (0,8–1,5%) sehingga tidak ekonomis diproses dengan pirometalurgi konvensional. *High-Pressure Acid Leaching* (HPAL) muncul sebagai teknologi dominan untuk mengekstraksi Ni dan Co dari bijih laterit skala besar, sebagaimana diimplementasikan pada pabrik-pabrik referensi seperti Murrin Murrin (Australia), Ravensthorpe, Goro (Kaledonia Baru), dan proyek-proyek strategis Indonesia seperti Halmahera Persada Lygend serta Huayou Cobalt di Morowali.

Dickson, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) menyoroti salah satu masalah operasional paling kritis dalam HPAL: **autoclave scaling** — akumulasi endapan padat tak larut pada dinding dan komponen internal autoclave. Dalam operasi HPAL pada suhu 240–270 °C dan tekanan 35–50 bar dengan media asam sulfat pekat (H₂SO₄ 150–250 g/L), senyawa-kaya silika, aluminium, dan besi (terutama *amorphous silica*, alunit, jarosite, dan hematit) mengalami polimerisasi dan presipitasi, membentuk kerak yang mengurangi efisiensi perpindahan panas, menurunkan kapasitas produksi, dan memaksa *shut-down* berkala untuk *de-scaling* mekanik/kimiawi. Studi tersebut menakar bahwa penumpukan kerak setebal 5–15 mm dapat menurunkan koefisien perpindahan panas overall (U) hingga 30–45%, dengan kerugian produksi tahunan dapat melebihi USD 15–25 juta untuk pabrik kapasitas 40.000 ton Ni/tahun.

Kontribusi spesifik Dickson dkk. (2026) adalah kombinasi *in-situ* characterisation (XRD, SEM-EDS, Raman spektroskopi) terhadap kerak multi-layer dengan pemodelan kinetika pengendapan berbasis persamaan Arrhenius dan neraca massa unsteady-state, sehingga dihasilkan *scaling rate* (kg/m²·jam) sebagai fungsi suhu, konsentrasi asam sisa, dan *retention time*. Studi pendukung Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi dengan perspektif *downstream*: mereka mengkaji efek agen desulfurisasi, suhu, dan waktu *roasting-reduction* terhadap residu HPAL untuk pemulihan kembali Ni/Co yang masih terperangkap dalam *iron-goethite residue* serta reduksi sulfur residual yang menghambat proses *neutralization-leach* lanjutan. Sinergi kedua paper ini menyajikan *value-chain* analisis HPAL yang utuh — dari *front-end* autoclave efficiency hingga *back-end* residue valorization — yang sangat relevan bagi insinyur teknik industri yang bertanggung jawab atas keandalan (*reliability*), availabilitas (90–95% target), dan profitabilitas lini HPAL.

Konteks strategis di Indonesia makin penting: dengan target hilirisasi nikel menjadi *precursor* pCAM pada 2030, downtime autoclave akibat scaling menjadi *single point of failure* yang dapat menggagalkan target produksi nasional. Modul ini dirancang untuk membekali spesialis teknik industri dengan kerangka kuantitatif dan SOP operasional guna memitigasi risiko tersebut secara sistematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Nikel Laterit

Reaksi utama pelindian mineral limonit (goethit, FeO(OH)) pada kondisi HPAL dapat ditulis sebagai:

$$\text{FeO(OH)} + \text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + \text{H}_2\text{O}$$

$$(\text{Ni,Co})\text{O} \cdot \text{Fe}_2\text{O}_3 + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{CoSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + \text{H}_2\text{O}$$

Untuk padatan berpori (*shrinking core model* — SCM), fraksi Ni terlarut $X_{Ni}(t)$ mengikuti bentuk:

$$1 - \frac{2}{3}X_{Ni} - (1-X_{Ni})^{2/3} = \frac{k_s \cdot C_{H^+}^n}{\rho_s \cdot r_0^2} \cdot t = k_{app} \cdot t$$

di mana $k_s$ adalah konstanta kinetika intrinsik (m/s), $C_{H^+}$ konsentrasi asam (kg/m³), $n$ orde reaksi parsial terhadap $\text{H}^+$ (umumnya 0,5–1,0), $\rho_s$ densitas padatan, dan $r_0$ radius awal partikel. Temperatur dependence mengikuti hukum Arrhenius:

$$k_s(T) = k_0 \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ = 45–75 kJ/mol untuk pelindian Ni laterit (Dickson dkk., 2026), $R$ = 8,314 J/mol·K.

### 2.2 Mekanisme Pembentukan Kerak (*Scaling Kinetics*)

Pengendapan *amorphous silica* ($\text{SiO}_2 \cdot n\text{H}_2\text{O}$) mengikuti kinetika orde pertama terhadap *supersaturation*:

$$r_{scaling} = k_p \left(C_{SiO_2,aktual} - C_{SiO_2,eq}\right)$$

Laju pengendapan *effective* per satuan luas permukaan autoclave:

$$\frac{dm_{scale}}{dt} = k_{prec} \exp\left(-\frac{E_{a,p}}{RT}\right) \cdot A_{eff} \cdot \Delta C_{Si}$$

Dengan $k_{prec} \approx 1{,}2 \times 10^{-4}$ kg/(m²·s·(kg/m³)), $E_{a,p} \approx 38$ kJ/mol, dan $A_{eff}$ luas dinding yang terekspos slurry.

### 2.3 Neraca Massa & Energi Autoclave

Untuk autoclave volume $V$ beroperasi *batch/continuous* dengan laju alir slurry $F$:

$$V \frac{dC_{Ni}}{dt} = F(C_{Ni,in} - C_{Ni,out}) + R_{Ni}$$

dengan $R_{N,i} = k_{app} \cdot C_{H^+}^n \cdot C_{Ni,solid}$ laju pelindian Ni.

Persamaan perpindahan panas menyelubung (*overall heat transfer*):

$$Q = U \cdot A \cdot \Delta T_{lm}$$

di mana koefisien $U$ menurun secara eksponensial terhadap ketebalan kerak $\delta$:

$$U(\delta) = \frac{1}{\frac{1}{h_i} + \frac{\delta}{k_{scale}} + \frac{1}{h_o}} \approx \frac{U_0}{1 + \alpha \cdot \delta}$$

dengan $\alpha \approx 0{,}15$ mm⁻¹ sebagai parameter empiris fouling (Dickson dkk., 2026).

### 2.4 Pemulihan Ni dari Residu HPAL (Andrameda dkk., 2024)

Untuk *roasting-reduction* residu HPAL dengan desulfurizer (mis. Na₂CO₃ atau CaO):

$$\text{NiO} + \text{H}_2 \rightarrow \text{Ni} + \text{H}_2\text{O}, \quad \Delta H_{298} = -2{,}1 \text{ kJ/mol}$$

*Recovery* Ni dari residu:

$$\eta_{Ni} = \frac{m_{Ni,reduced}}{m_{Ni,residue}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Scaling

```
[Bijih Laterit] → [Repulping + Slurry Mixing] → [Pre-heater (multi-stage flash)]
        ↓
[Autoclave HPAL (240–270 °C, 40 bar)] ← [Acid injection H₂SO₄]
        ↓
[Discharge → Flash Tank] → [CCD Thickener (counter-current decantation)]
        ↓                                   ↓
[Neutralization (CaCO₃/Ca(OH)₂)]      [Residue → Iron Ore Agglomerate / 
        ↓                                Roasting-Reduction (Andrameda 2024)]
[Ni/Co SX → EW → Nickel Cathode]
```

### 3.2 SOP Operasional Autoclave HPAL

**Tahap 1 — Pre-Operation Check (8 jam pra-start):**
1. Verifikasi integritas dinding autoclave (UT thickness mapping, toleransi korosi < 6 mm).
2. Kalibrasi *instrumentasi*: T, P, pH slurry, densitas pulp.
3. Pre-heating bertahap (ramp rate ≤ 2 °C/menit) untuk menghindari *thermal shock* pada lapisan kerak residual.

**Tahap 2 — Commissioning & Steady-State:**
1. Slurry feed: 35–45% solids w/w, rasio S/L = 1:2,5.
2. Acid dosing: 220–260 kg H₂SO₄ per ton bijih kering.
3. Operating envelope: $T = 255 \pm 3$ °C, $P = 42 \pm 1$ bar, $t_{residensi} = 60–90$ menit.

**Tahap 3 — In-process Monitoring:**
- Sampling slurry tiap 4 jam untuk analisis *free acid*, Fe³⁺, Ni²⁺, SiO₂ terlarut.
- *Real-time* pengukuran heat flux pada kompartemen 1–4 menggunakan *heat flux sensors*.
- Implementasi *Predictive Maintenance Trigger*: jika $U/U_0 < 0{,}75$, jadwalkan *acid wash* (5% HF/HNO₃) dalam 72 jam.

**Tahap 4 — De-scaling Cycle (tiap 90–120 hari):**
- Acid wash kimiawi: HCl 10% + inhibitor koroși pada 60 °C, 6 jam.
- High-pressure water jet (200 bar) untuk pengangkatan kerak mekanis.
- Dokumentasi tebal kerak per zona, XRD-SEM analisis untuk *root cause*.

### 3.3 SOP Pengolahan Residu (Andrameda dkk., 2024)

1. *Desulfurization* residu HPAL dengan Na₂CO₃ (rasio mol 1:1,2 terhadap S) pada 800 °C, 2 jam.
2. *Roasting-reduction* dengan kokas 8% b/b pada 1100–1200 °C, 60–120 menit.
3. *Water-leach* selektif (pH 2,5, 80 °C, 30