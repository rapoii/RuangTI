# 3021 — Rekayasa Autoclave HPAL Laterit Nikel: Karakterisasi Pembentukan Kerak (Scaling), Desulfurisasi, dan Optimalisasi Ekstraksi Nikel dari Bijih Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel primer terus mengalami eskalasi struktural seiring dengan transisi energi dan elektrifikasi industri kendaraan listrik (EV). Bijih laterit—yang menyumbang sekitar 60–70% cadangan nikel terrestre global—menjadi sumber strategis yang sangat krusial karena cadangan sulfida nikel semakin menipis. Namun, karakteristik bijih laterit yang memiliki kadar nikel rendah (umumnya 0,8–1,5% Ni), kadar besi dan magnesium tinggi, serta kandungan air kristal yang signifikan menjadikannya substrat yang sulit untuk diproses secara pirometalurgi konvensional. Dalam konteks inilah teknologi **High-Pressure Acid Leaching (HPAL)** muncul sebagai solusi hidrometalurgi dominan yang beroperasi pada rentang suhu 240–270 °C dan tekanan total 35–55 bar di dalam autoclave berlining titanium (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun demikian, operasi HPAL menghadapi satu tantangan operasional paling persisten: **autoclave scaling**—yaitu pengendapan dan akresi padatan tak-larut pada dinding internal, impeller, serta jaringan pipa dan heat exchanger autoclave. Dickson, Deleau, dan Espitalier (2026) menekankan bahwa perilaku scaling sangat ditentukan oleh komposisi mineralogi umpan (terutama rasio goethit/hematit, keberadaan alunit, jarosit, dan gypsum), profil termodinamika sistem Fe–Al–Mg–S–Ca–H₂SO₄, serta dinamika fluida dalam reaktor. Kerak yang terbentuk tidak hanya menurunkan koefisien perpindahan panas global (overall heat transfer coefficient, U) hingga 30–60% dari nilai desain, tetapi juga menurunkan yield leaching nikel, mempersingkat *campaign time* autoclave, dan meningkatkan konsumsi asam sulfat spesifik (kg H₂SO₄/tonne bijih). Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) lebih lanjut menunjukkan bahwa proses desulfurisasi sebelum roasting-reduksi secara signifikan memengaruhi karakteristik residu HPAL dan komposisi kimiawi umpan yang masuk ke autoclave, sehingga berdampak langsung pada intensitas scaling.

Urgensi industri dari pemahaman mendalam tentang perilaku scaling ini bersifat multidimensional: (i) **ekonomi**—penurunan availability autoclave dari target 90% menjadi 70–75% berdampak pada kapasitas produksi dan CAPEX per-tonne nikel; (ii) **keselamatan proses**—penumpukan kerak menciptakan *hot spots*, risiko thermal stress pada lining titanium, dan potensi ledakan tekanan (*thermal runaway*); (iii) **keberlanjutan**—volume residu yang harus ditangani di *tailings storage facility* meningkat seiring menurunnya efisiensi leaching; serta (iv) **kepatuhan regulasi**—emisi CO₂ dan konsumsi energi spesifik per-kg nikel menjadi indikator ESG yang semakin diaudit. Kerangka kerja yang dikembangkan oleh Dickson et al. (2026) memberikan pendekatan karakterisasi multi-skala (mulai dari XRD, SEM-EDS, TGA-DSC hingga simulasi CFD) untuk memetakan morfologi dan laju pertumbuhan kerak, sementara studi Andrameda et al. (2024) melengkapi pemahaman tentang bagaimana pretreatment termokimiawi dapat memitigasi pembentukan kerak sejak dari hulu proses.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pembentukan Kerak dalam Sistem Fe–Al–S–Ca

Formasi kerak pada autoclave HPAL terutama dikendalikan oleh tiga reaksi heterogen kritis yang beroperasi pada kondisi super-kritis air (sub-cooled). Pertama, **presipitasi hematit** mengikuti reaksi:

$$2\text{FeSO}_4_{(aq)} + \tfrac{1}{2}\text{O}_2(g) + 3\text{H}_2\text{O}_{(l)} \rightarrow \text{Fe}_2\text{O}_3(s) + 2\text{H}_2\text{SO}_4_{(aq)}$$

Konstanta kesetimbangan $K_{sp}$ untuk hematit amorf pada suhu 250 °C berada pada orde $10^{-40}$ hingga $10^{-44}$, sehingga presipitasi terjadi secara hampir kuantitatif begitu ion Fe³⁺ melampaui batas kelarutan. Kedua, **pembentukan jarosit** yang dimediasi oleh ion alkali/alkali tanah:

$$3\text{Fe}_2(\text{SO}_4)_3(aq) + \text{K}_2\text{SO}_4(aq) + 12\text{H}_2\text{O} \rightarrow 2\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6(s) + 6\text{H}_2\text{SO}_4(aq)$$

Ketiga, **presipitasi gypsum/anhidrit** ketika ion Ca²⁺ dari pelindian mineral garnierit-forsterit bertemu dengan sulfat bebas:

$$\text{Ca}^{2+}(aq) + \text{SO}_4^{2-}(aq) + 2\text{H}_2\text{O} \rightarrow \text{CaSO}_4 \cdot 2\text{H}_2\text{O}(s)$$

### 2.2 Model Kinetika Pertumbuhan Kerak

Laju pertumbuhan ketebalan kerak $\delta(t)$ mengikuti pendekatan parabolic kinetics yang dipopulerkan oleh literatur korosi dan deposit:

$$\delta(t) = \sqrt{2 D_{eff} \cdot C_s \cdot M_w / \rho_s \cdot t} + \delta_0$$

dengan $D_{eff}$ adalah koefisien difusi efektif ion reaktan dalam matriks kerak (m²/s), $C_s$ adalah konsentrasi jenuh spesies pengendap di interface fluida–kerak (mol/m³), $M_w$ dan $\rho_s$ berturut-turut adalah berat molekul dan densitas mineral kerak, serta $\delta_0$ adalah ketebalan awal (nukleasi). Alternatifnya, untuk deposit yang pengendapannya dikontrol reaksi permukaan, digunakan model linear:

$$\frac{d\delta}{dt} = k_r \cdot \exp\!\left(-\frac{E_a}{RT}\right) \cdot \left(C_b - C_{eq}\right)$$

dengan $k_r$ adalah konstanta laju (m/s), $E_a$ energi aktivasi (≈ 60–95 kJ/mol untuk presipitasi hematit di lingkungan HPAL), $C_b$ konsentrasi bulk, dan $C_{eq}$ konsentrasi kesetimbangan.

### 2.3 Neraca Energi dan Perpindahan Panas Autoclave

Koefisien perpindahan panas efektif yang merefleksikan akumulasi kerak mengikuti resistansi seri:

$$\frac{1}{U_{eff}} = \frac{1}{h_i} + \frac{\delta_{scale}}{\lambda_{scale}} + \frac{\delta_{wall}}{\lambda_{Ti}} + \frac{1}{h_o}$$

dengan $h_i$ koefisien konveksi internal (≈ 1500–3000 W/m²·K untuk slurry 25% solids), $\lambda_{scale}$ konduktivitas termal kerak (0,3–1,2 W/m·K, jauh lebih rendah dibanding baja 50 W/m·K), dan $\lambda_{Ti} \approx 17$ W/m·K untuk dinding titanium. Penurunan $U_{eff}$ sebagai fungsi waktu secara langsung menentukan kebutuhan steam dan efisiensi energi autoclave.

### 2.4 Model Desulfurisasi dan Dampaknya pada Sisa HPAL

Pendekatan Andrameda et al. (2024) memodelkan reduksi sulfur dalam residu menggunakan reaksi roasting-reduksi:

$$\text{NiS} + \text{CaO} \rightarrow \text{NiO} + \text{CaS}$$

$$\text{CaS} + 2\text{O}_2 \rightarrow \text{CaSO}_4$$

dan recovery nikel dari residu melalui leaching asam. Yield leaching nikel mengikuti:

$$\eta_{Ni} = \frac{m_{Ni,l}}{m_{Ni,0}} \times 100\% = 1 - \exp(-k_L \cdot t)$$

dengan $k_L$ adalah konstanta kinetika leaching yang bergantung pada suhu sesuai persamaan Arrhenius: $k_L = A \exp(-E_a^{leach}/RT)$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi scaling mengikuti protokol terstruktur berikut:

**Tahap 1 — Karakterisasi Umpan (Pre-Leach Sampling).** Analisis XRF, XRD, dan QEMSCAN pada conto bijih laterit untuk memetakan mineralogi primer (goethit $\alpha$-FeOOH, limonit, garnierit, serpentin, garnierit-Ni), rasio Mg/Fe, serta konsentrasi sulfur total. Hasil ini menjadi input untuk prediksi jenis kerak menggunakan software thermodynamik seperti OLI StreamAnalyzer atau HSC Chemistry.

**Tahap 2 — Preparasi Slurry dan Penyesuaian Asam.** Slurry dipreparasi pada densitas 25–35% solids dengan dosis H₂SO₄ 93–98% yang dihitung melalui persamaan stoikiometri berbasis komposisi umpan: konsumsi asam tipikal 350–500 kg H₂SO₄/tonne bijih. pH slurry pra-autoclave dijaga pada 1,0–1,5 untuk menghindari presipitasi awal di pra-heater.

**Tahap 3 — Pretreatment Desulfurisasi (jika diperlukan).** Mengikuti Andrameda et al. (2024), roasting pada 700–900 °C dengan penambahan agen desulfurisasi (CaO, Na₂CO₃, atau abu sekam padi) selama 30–120 menit untuk mengonversi sulfida menjadi oksida/sulfat yang lebih inert dalam autoclave.

**Tahap 4 — Operasi Autoclave Multi-Kompartemen.** Autoclave dibagi menjadi 4–6 kompartemen dengan gradien suhu 70 °C (pra-heater) → 250–270 °C (zona leaching utama). Tekanan parsial oksigen dijaga pada 10–15 bar untuk mengoksidasi Fe²⁺ menjadi Fe³^{+}$ dan mengendapkan hematit.

**Tahap 5 — Monitoring Scaling Real-Time.** Sensor suhu多点 (multi-point) dan pressure drop di tiap heat exchanger coil digunakan untuk mendeteksi onset scaling. Algoritma deteksi dini:

$$\Delta P(t) > \Delta P_{baseline} + 3\sigma \Rightarrow \text{trigger acid wash}$$

**Tahap 6 — Acid Wash dan Decoupling.** Pencucian dengan 5–10% H₂SO₄ panas (80–90 °C) untuk melarutkan kerak gypsum dan jarosit. Laju dissolusi mengikuti:

$$\frac{dm_{scale}}{dt} = -k_{diss} \cdot A_{scale} \cdot (C_{H^+} - C_{eq})$$

**Tahap 7 — Continuous Improvement (PDCA).** Data scaling, konsumsi asam, dan yield dikumpulkan dalam historian process (PI System, Aspen IP21) untuk kalibrasi model prediktif dan preventive maintenance scheduling.

Diagram alir lengkap dapat direpresentasikan sebagai berikut (deskripsi tekstual): Umpan laterit → Crushing/Grinding → Slurry Mixing (H₂SO₄) → Pra-heater (70 °C) → Pre-leach (opsional) → Autoclave Compartemen 1–6 (250–270 °C)