# 1789 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nikel global sedang menghadapi tekanan strategis berupa meningkatnya permintaan baterai kendaraan listrik (Li-ion), di mana nikel kelas baterai (Ni>99.9%) menjadi bahan baku anoda katode NMC (Nikel-Mangan-Kobalt) dan NCA (Nikel-Kobalt-Aluminium). Lebih dari 60% cadangan nikel dunia berada dalam bijih laterit kadar rendah (0.8–1.5% Ni), yang tidak dapat diproses secara efektif melalui teknologi pirometalurgi konvensional (smelting) sehingga memerlukan teknologi hidrometalurgi **High-Pressure Acid Leaching (HPAL)**. Proses HPAL yang beroperasi pada suhu 240–270 °C dan tekanan 30–50 bar dengan pereaksi asam sulfat mampu mencapai tingkat recovery nikel 90–95% dengan kemurnian tinggi. Namun demikian, operasi HPAL menghadapi tantangan operasional kritis berupa **autoclave scaling** atau pembentukan kerak pada dinding dan internal peralatan autoclave yang berdampak langsung pada penurunan efisiensi termal, peningkatan konsumsi energi, dan forced shutdown untuk cleaning. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* (DOI: 10.1016/j.clwas.2026.100503) menekankan bahwa perilaku dan karakterisasi kerak pada autoclave HPAL merupakan variabel kritis yang menentukan *availability* dan *overall equipment effectiveness* (OEE) fasilitas. Studi komplementer oleh Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: 10.1063/5.0186417) menyoroti aspek *roasting-reduction* terhadap residu HPAL yang mengandung sulfur dan besi, yang secara tidak langsung terkait dengan komposisi kerak yang terbentuk selama leaching. Urgensi operasional dari studi ini terletak pada fakta bahwa satu hari *unplanned shutdown* akibat *scaling event* pada autoclave HPAL berskala komersial (kapasitas 50.000–60.000 ton nikel/tahun) dapat menyebabkan kerugian produksi senilai jutaan USD. Secara ekonomi, biaya mitigasi kerak mencakup energi tambahan untuk *acid washing* (40–80 kg H₂SO₄/ton bijih), biaya *mechanical descaling* (high-pressure water jet, acid boil-out), serta degradasi lining titanium autoclave yang berharga tinggi. Oleh karena itu, pemahaman kuantitatif terhadap mekanisme *nucleation*, *growth*, dan *deposition* kerak menjadi prasyarat esensial bagi *process engineer* untuk merancang strategi operasi yang resilien. Dari perspektif keberlanjutan, pengelolaan kerak juga berkontribusi pada pengurangan *waste generation* dan *carbon footprint* karena konsumsi energi spesifik (GJ/ton Ni) menjadi tidak efisien ketika lapisan kerak bertindak sebagai isolator termal.

## 2. Landasan Teori & Formulasi Matematis

Perilaku pembentukan kerak pada autoclave HPAL mengikuti prinsip-prinsip termodinamika presipitasi, kinetika reaksi heterogen, dan fenomena transport. Komponen utama kerak dalam HPAL bijih laterit adalah **hematit (Fe₂O₃)**, **aluminum goethite (AlOOH)**, **basic ferric sulfate**, dan **anhydrite (CaSO₄)** yang terbentuk ketika larutan leach jenuh terhadap spesies tersebut pada kondisi operasi. Persamaan termodinamika kesetimbangan presipitasi hematit mengikuti:

$$K_{sp,Fe_2O_3} = \frac{[Fe^{3+}]^2 [OH^-]^6}{[Hematit]}$$

Konstanta kelarutan efektif berubah dengan suhu mengikuti persamaan **van't Hoff**:

$$\ln\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

di mana $\Delta H^\circ$ adalah entalpi standar reaksi presipitasi (J/mol), $R = 8.314$ J/(mol·K), dan $T$ dalam Kelvin. Kinetika pertumbuhan kerak dapat dimodelkan dengan **Arrhenius equation** untuk laju deposisi:

$$r_{scale} = A \cdot \exp\left(-\frac{E_a}{RT}\right) \cdot [Fe^{3+}]^n \cdot [H^+]^{-m}$$

dengan energi aktivasi $E_a$ berkisar 45–85 kJ/mol untuk presipitasi hematit dalam media sulfat, dan orde reaksi $n \approx 1.5$–$2.0$ terhadap konsentrasi Fe³⁺.

Dampak termal dari kerak direpresentasikan melalui **resistansi termal total** pada dinding autoclave:

$$\frac{1}{U_{overall}} = \frac{1}{h_i} + \frac{\delta_{scale}}{k_{scale}} + \frac{\delta_{steel}}{k_{steel}} + \frac{1}{h_o}$$

di mana $U_{overall}$ adalah koefisien transfer panas keseluruhan (W/m²·K), $h_i$ dan $h_o$ koefisien konveksi sisi dalam/luar, $\delta$ adalah ketebalan (m), dan $k$ konduktivitas termal (W/m·K). Konduktivitas termal kerak Fe₂O₃-hematit berkisar $k_{scale} \approx 0.5$–$2.0$ W/(m·K), jauh lebih rendah dibanding baja autoclave lining $k_{steel} \approx 50$ W/(m·K), menjadikan kerak sebagai bottleneck perpindahan panas.

Mass balance konsentrasi asam sulfat dalam sistem HPAL mengikuti:

$$C_{H_2SO_4}^{consumed} = \alpha \cdot [Fe] + \beta \cdot [Al] + \gamma \cdot [Mg] + \delta \cdot [Ca] + \epsilon \cdot [Ni]$$

dengan koefisien stoikiometri stoikiometri ($\alpha \approx 1.5$ untuk Fe, $\beta \approx 1.0$ untuk Al, $\gamma \approx 2.0$ untuk Mg). *Acid net consumption* (ANC) yang rendah (200–400 kg/ton bijih) mengindikasikan kontrol proses yang baik, sementara ANC berlebih mengindikasikan potensi formation kerak yang lebih tinggi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian kerak autoclave mengikuti protokol rekayasa berikut:

**Tahap 1 — Karakterisasi Feed dan Penentuan Operating Window:**
1. Analisis mineralogi bijih laterit (XRD/XRF) untuk komposisi Fe, Al, Mg, Ca, Si, Ni
2. Penentuan *free acidity target* (30–50 g/L H₂SO₄) dan *Fe³⁺ concentration* (3–6 g/L)
3. Kalkulasi rasio Al/Fe dan Si/Mg untuk prediksi risiko scaling

**Tahap 2 — Desain dan Operasi Autoclave:**
1. Autoclave Multi-Compartment (4–6 kompartemen) dengan pemisahan zona *preheat*, *primary leach*, *secondary leach*
2. Material lining: titanium Grade 2/7 untuk resistance terhadap korosi asam sulfat
3. Agitasi mekanis (impeller) untuk mencegah *settling* dan menjaga homogenitas slurry

**Tahap 3 — Online Monitoring dan Predictive Maintenance:**
1. *Real-time temperature monitoring* untuk deteksi anomali heat transfer
2. *Pressure differential analysis* untuk deteksi plugging
3. Sampling rutin untuk *acid consumption tracking*

**Tahap 4 — Cleaning Protocol:**
1. *Acid boil-out* dengan H₂SO₄ 5–10% pada 80–90 °C selama 8–12 jam
2. *High-pressure water jetting* (200–400 bar) untuk mechanical removal
3. *Chemical descaling* dengan inhibitor (misalnya EDTA untuk chelation Fe)

**Diagram Alir Proses HPAL:**

```
[Bijih Laterit] → [Repulping] → [Pre-heating 120°C] → 
[Autoclave Compartment 1: 240°C, 30 bar] → [Compartment 2: 260°C] → 
[Compartment 3: 270°C] → [Flash Cooling] → [CCD Counter-Current Decantation] → 
[Neutralization] → [SX-EW] → [Ni/Co Sulfate]
                                    ↓
                            [Residue: HPAL Residue → 
                            Roasting-Reduction (Andrameda et al., 2024)]
```

Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: 10.1063/5.0186417) menekankan bahwa residu HPAL yang telah melalui proses *roasting-reduction*