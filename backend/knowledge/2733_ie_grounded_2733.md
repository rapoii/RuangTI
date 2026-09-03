# 2733 — Rekayasa Autoclave HPAL pada Pelindian Nikel Laterit: Karakterisasi, Kinetika Pembentukan Kerak (Scaling), dan Optimalisasi Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel primer untuk baterai kendaraan listrik (EV) dan stainless steel telah mendorong ekspansi agresif fasilitas High-Pressure Acid Leaching (HPAL) di Indonesia, khususnya di kawasan Indonesia Morowali Industrial Park (IMIP), Indonesia Halmahera Persada Lygend (IHL), dan Pomalaa. Lebih dari 60% cadangan nikel laterit dunia berada di Indonesia, dan proses HPAL menjadi tulang belakang ekstraksi nikel dari bijih limonit-saprolit kadar rendah (biasanya <1,5% Ni). Dickson, Deleau, dan Espitalier (2026) menyoroti satu masalah operasional paling kritikal dalam teknologi ini, yaitu pembentukan *autoclave scaling* — endapan padat anorganik yang menempel pada dinding dan pipa autoclave selama siklus leaching pada suhu 240–270 °C dan tekanan 30–50 bar (Dickson dkk., 2026).

Secara ekonomi, downtime autoclave akibat *descaling* dapat mencapai 10–15% dari total *available time*, dengan kerugian produksi nikel dalam mixed hydroxide precipitate (MHP) mencapai USD 1.500–2.500 per ton nikel yang hilang. Kerak yang dominan terbentuk adalah *basic ferric sulfate* ($\text{FeOHSO}_4$), *hematit* ($\alpha\text{-Fe}_2\text{O}_3$), *alunit* ($\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6$), *gipsum* ($\text{CaSO}_4 \cdot 2\text{H}_2\text{O}$), dan *amorphous silica* — semuanya menurunkan koefisien perpindahan panas dinding autoclave hingga 60%. Studi Andrameda dkk. (2024) menunjukkan bahwa residu HPAL yang kaya magnesium dan besi dapat diolah lebih lanjut melalui *roasting-reduction* dengan variasi *desulfurization agent* dan suhu untuk mengurangi kadar sulfur residu sekaligus menjadi indikator komposisi kerak yang terbentuk (Andrameda, Triaswinanti, & Madra, 2024).

Dalam konteks rekayasa sistem industri, fenomena scaling bukan semata masalah kimia proses, melainkan masalah *integrated production system* yang memengaruhi availability, throughput, konsumsi energi spesifik (GJ/t Ni), dan total biaya operasional (OPEX). Oleh karena itu, karakterisasi kerak, kinetika pembentukannya, dan strategi mitigasi menjadi area riset yang sangat relevan bagi insinyur teknik industri yang mengelola rantai pasok baterai nikel.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Supersaturasi dan Presipitasi

Pembentukan kerak terjadi ketika *supersaturation ratio* $S$ melebihi ambang batas nukleasi heterogen pada permukaan logam. Untuk senyawa kerak generik $\text{M}_a\text{X}_b$ dengan konstanta kelarutan $K_{sp}$:

$$S = \left(\frac{a_M^{\,a} \cdot a_X^{\,b}}{K_{sp}(T)}\right)^{1/(a+b)}$$

Nukleasi terjadi secara signifikan ketika $\ln S > 2$ untuk permukaan baja karbon autoclave, dan laju nukleasi $J$ mengikuti persamaan:

$$J = J_0 \exp\left(-\frac{16 \pi \gamma^3 v^2 N_A}{3 (RT)^3 (\ln S)^2}\right)$$

dengan $\gamma$ adalah *interfacial tension*, $v$ volume molar, $N_A$ bilangan Avogadro, dan $R$ konstanta gas universal. Pada operasi HPAL nikel laterit, $S_{\text{FeOHSO}_4}$ dapat mencapai 5–8, menjelaskan mengapa *basic ferric sulfate* menjadi kerak paling agresif.

### 2.2 Kinetika Pertumbuhan Kerak (Scale Growth Kinetics)

Model *shrinking-core* untuk pertumbuhan kerak, dengan laju dikontrol difusi ion melalui lapisan kerak, mengikuti bentuk:

$$1 - \left(1 - \alpha\right)^{1/3} = \frac{k_d (C_b - C_{sat})}{\rho_s r_0} \cdot t$$

dengan $\alpha$ fraksi permukaan yang tertutupi, $k_d$ koefisien transfer massa, $C_b$ konsentrasi bulk, $C_{sat}$ konsentrasi jenuh, $\rho_s$ densitas kerak, $r_0$ jari-jari butir awal. Untuk endapan yang mengikuti *Arrhenius behavior*, konstanta laju efektif:

$$k_s(T) = A \exp\left(-\frac{E_a}{RT}\right)$$

Dickson dkk. (2026) melaporkan nilai $E_a \approx 78\text{–}95$ kJ/mol untuk pertumbuhan kerak *basic ferric sulfate* pada rentang 230–260 °C, yang konsisten dengan rezim *diffusion-controlled growth*.

### 2.3 Penurunan Perpindahan Panas oleh Fouling

Resistansi termal total dinding autoclave dengan ketebalan kerak $\delta_s$ dan konduktivitas termal $\lambda_s$:

$$R_{total} = \frac{\delta_{steel}}{\lambda_{steel}} + \frac{1}{h_i} + \frac{\delta_s}{\lambda_s} + \frac{1}{h_o}$$

dengan $h_i$ dan $h_o$ koefisien konveksi sisi dalam dan luar. Fouling resistance didefinisikan sebagai:

$$R_f = \frac{1}{U_{fouled}} - \frac{1}{U_{clean}}$$

Kondisi operasional autoclave HPAL tipikal memiliki $U_{clean} \approx 1.200\text{–}1.800$ W/m²·K. Kerak setebal $\delta_s = 5$ mm dengan $\lambda_s = 1,0$ W/m·K menyumbang resistansi tambahan 0,005 m²·K/W, menurunkan $U$ efektif menjadi ~750 W/m²·K.

### 2.4 Keseimbangan Massa dan Energi

Untuk autoclave volume $V$ dengan laju alir slurry $Q$ dan konsentrasi slurry $c_{ore}$:

$$\frac{dC}{dt} = \frac{Q}{V}(C_{in} - C) - r_{reaction}(T, [H^+], p) - r_{scale}(T, C)$$

Di mana $r_{reaction}$ mengikuti kinetika *shrinking core* leaching nikel dari *goethit* dan $r_{scale}$ menangkap laju deposisi kerak. Optimasi suhu operasi harus menyeimbangkan leaching rate dengan scale formation rate.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi HPAL Industri

Dickson dkk. (2026) menguraikan SOP operasional HPAL sebagai berikut:

1. **Pre-treatment & Slurry Preparation** — Bijih laterit digiling hingga $P_{80} < 75$ μm, dicampur dengan air proses dan asam sulfat untuk menghasilkan slurry 35–45% solid dengan $H_2SO_4$ berlebih 5–15%.
2. **Pre-heating** — Slurry dipanaskan bertahap (1–4 bar, 100–150 °C) untuk aktivasi awal.
3. **Autoclave Leaching** — Multi-compartment autoclave (*tie-tank* design) dengan 4–6 kompartemen pada 240–270 °C, residence time 60–90 menit.
4. **Flash & Cooling** — Pelepasan tekanan bertahap untuk recupenerasi steam dan pendinginan slurry hingga 60 °C.
5. **CCD Thickener & Neutralization** — Pemisahan padatan dengan *counter-current decantation*, netralisasi dengan limestone/lime.
6. **Precipitation & MHP Recovery** — Penambahan MgO untuk presipitasi MHP pada pH 7,5–8,0.
7. **Periodic Acid Wash & Descaling** — setiap 60–90 hari operasi, menggunakan inhibited HCl atau high-pressure water jet.

### 3.2 Diagram Alir Logika Mitigasi Scaling

```
Slurry In → Pre-heat → HPAL Autoclave → Flash
                  ↓
         [Real-time Monitoring]
         - ΔP across compartments
         - Wall temperature (thermocouples)
         - Acid consumption rate
                  ↓
   Decision Tree:
   ├─ ΔP naik > 15%  → Switch to spare autoclave line
   ├─ Wall T turun > 8°C → Schedule acid wash
   └─ Acid consume > target → Adjust ore/acid ratio
                  ↓
         Acid Wash (inhibited HCl 5–8%, 60°C)
                  ↓
         Rinse → Inspect → Re-commission
```

### 3.3 Pendukung: Integrasi Roasting-Reduction untuk Residu

Andrameda dkk. (2024) memperkenalkan *co-processing* residu HPAL melalui *desulfurization–roasting–reduction* yang beroperasi pada suhu 800–1.100 °C dengan $\text{Na}_2\text{CO}_3$ atau $\text{Ca(OH)}_2$ sebagai agen desulfurisasi. Residu sulfur $<0,5\%$ dapat dicapai pada suhu optimal 950 °C dengan waktu tahan 60 menit (Andrameda dkk., 2024), yang secara tidak langsung mengurangi potensi akumulasi kerak sulfat pada siklus berikutnya.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Kasus Tipikal HPAL Halmahera)

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Throughput ore feed ($F$) | 250.000 | t/tahun |
| Feed Ni grade | 1,30 | % |
| Recovery Ni | 92 | % |
| Suhu operasi ($T$) | 250 | °C |
| Tekanan operasi | 42 | bar |
| Konsentrasi $H_2SO_4$ initial | 280 | g/L |
| Solid loading | 40 | % |
| Autoclave residence time ($\tau$) | 75 | menit |

### 4.2 Perhitungan Kinetika Scaling

Menggunakan persamaan Arrhenius untuk $k_s$ pada suhu $T = 523{,}15$ K dengan parameter Dickson dkk. (2026): $A = 2{,}3 \times 10^{12}$ m/s, $E_a = 86$ kJ/mol:

$$k_s(523{,}15\,\text{K}) = 2{,}3 \times 10^{12} \cdot \exp\left(-\frac{86.000}{8{,}314 \times 523{,}15}\right)$$

$$= 2{,}3 \times 10^{12} \cdot \exp(-19{,}78) = 2{,}3 \times 10^{12} \cdot 2{,}51 \times 10^{-9} \approx 5{,}77 \times 10^{3}\,\text{m/s}$$

L