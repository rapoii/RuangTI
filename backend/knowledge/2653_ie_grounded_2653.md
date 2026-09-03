# 2653 — Autoclave Scaling Behaviour dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) melonjak tajam seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi berbasis baterai litium-ion. Menurut Dickson, Deleau, dan Espitalier (2026) dalam makalahnya yang dipublikasikan di *Cleaner Waste Systems* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)), lebih dari 70% cadangan nikel dunia tersimpan dalam bentuk bijih laterit (limonit dan saprolit), sementara bijih sulfida yang selama ini mendominasi produksi hanya menyumbang kurang dari 30%. Kondisi geologis ini menggeser dominasi teknologi ekstraksi dari proses pirometalurgi (seperti *flash smelting*) menuju proses hidrometalurgi bertekanan tinggi atau *High-Pressure Acid Leaching* (HPAL). Namun, adopsi teknologi HPAL dalam skala industri menghadapi satu tantangan operasional kronis yang sangat menentukan profitabilitas: **autoclave scaling** atau pembentukan kerak padat pada dinding, impeller, dan pipa internal autoklaf.

Permasalahan scaling pada HPAL nikel laterit bukan hanya isu teknis minor. Dari perspektif engineering ekonomi, downtime akibat descaling (pembersihan kerak) dapat mencapai 15–25% dari total *available operating time* pada pabrik-pabrik HPAL di Indonesia dan Filipina, yang secara langsung menurunkan *overall equipment effectiveness* (OEE) dan menaikkan *unit production cost* hingga USD 1,5–2,0 per pon nikel yang diproduksi. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menegaskan bahwa pengelolaan HPAL residue—termasuk komponen berskala yang ikut terbentuk—sangat bergantung pada kontrol suhu, jenis agen desulfurisasi, dan waktu tinggal proses roasting-reduksi. Kedua literatur ini secara sinergis memperlihatkan bahwa perilaku scaling merupakan resultante dari interaksi multi-fisika antara kinetika pelindian, termodinamika pengendapan, dan dinamika fluida dalam reaktor bertekanan tinggi.

Skala industri yang dimaksud pada modul ini mencakup unit autoklaf Multi-Stage dengan volume efektif 1.000–4.500 m³ per kompartemen, beroperasi pada suhu 240–270 °C dan tekanan 35–50 bar dengan kemasaman bebas (free acidity) 30–80 g/L H₂SO₄. Pada rentang termodinamika tersebut, mineralogi bijih laterit—terutama *goethite* (FeO(OH)), *limonit* (Fe₂O₃·H₂O), dan magnesium silikat—melepaskan Fe³⁺, Al³⁺, Mg²⁺, dan SiO₂ ke dalam larutan. Ketika tingkat kejenuhan larutan melebihi *solubility limit* senyawa seperti jarosit, alunit, gipsum, dan silika amorf, terjadilah nukleasi dan pertumbuhan kristal yang akhirnya menempel sebagai kerak pada permukaan logam autoklaf. Studi Dickson et al. (2026) menjadi pionir dalam mengkuantifikasi *scale thickness growth rate* sebagai fungsi waktu tinggal dan komposisi slurry, sekaligus memetakan distribusi spasial kerak pada geometri internal autoklaf (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Urgensi penelitian ini juga terkait erat dengan agenda dekarbonisasi. Pabrik HPAL yang beroperasi stabil dengan *mean time between failures* (MTBF) lebih dari 90 hari memiliki *carbon footprint* per ton nikel yang secara signifikan lebih rendah dibanding rute pirometalurgi. Sebaliknya, autoklaf yang sering shutdown untuk descaling akan mengonsumsi energi tambahan dan bahan kimia descaling (umumnya asam sulfat pekat pada 80–90 °C atau larutan inhibis organik), yang pada akhirnya meningkatkan emisi CO₂e dan konsumsi air industri. Dengan demikian, mitigasi autoclave scaling bukan sekadar masalah *plant availability*, melainkan juga bagian integral dari *sustainable mineral processing* dan kepatuhan terhadap Environmental, Social, and Governance (ESG)指标 yang kini menjadi standar bagi perusahaan pertambangan global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Pelindian — Shrinking Core Model (SCM)

Reaksi pelindian bijih laterit dalam autoklaf HPAL paling tepat dimodelkan menggunakan *Shrinking Core Model* yang mencakup tiga mekanisme kontrol simultan: difusi lapisan fluida, difusi lapisan produk (ash), dan reaksi kimia antarmuka. Untuk partikel bijih laterit berbentuk sferis dengan jari-jari awal $R_0$ dan jari-jari inti yang belum bereaksi $R_c(t)$, fraksi nikel yang terlarut pada waktu $t$ diberikan oleh persamaan berikut ketika reaksi kimia permukaan menjadi langkah pembatas laju:

$$t = \frac{\rho_B R_0}{b k_s C_{A_g}} \left[ 1 - \left(1 - X\right)^{1/3} \right] \quad \text{(1)}$$

di mana $\rho_B$ adalah densitas molar nikel dalam bijih (mol/m³), $b$ adalah koefisien stoikiometri reaksi, $k_s$ adalah konstanta laju reaksi permukaan (m/s), $C_{A_g}$ adalah konsentrasi asam sulfat dalam fasa fluida (mol/m³), dan $X$ adalah fraksi konversi Ni. Pada mekanisme kontrol difusi lapisan produk, persamaan berubah menjadi:

$$t = \frac{\rho_B R_0^2}{6 b D_e C_{A_g}} \left[ 1 - 3(1-X)^{2/3} + 2(1-X) \right] \quad \text{(2)}$$

dengan $D_e$ sebagai *effective diffusivity* (m²/s) pada lapisan produk. Pada umumnya, untuk HPAL limonit dengan suhu $>250\,°\text{C}$, mekanisme (2) lebih dominan dibanding (1) karena difusi H⁺/HSO₄⁻ melalui lapisan Fe-oksida hidrat menjadi *rate-determining step*.

### 2.2 Persamaan Arrhenius untuk Ketergantungan Temperatur

Konstanta laju $k_s$ dan koefisien difusi $D_e$ keduanya mengikuti hukum Arrhenius yang merepresentasikan sensitivitas proses terhadap suhu operasi autoklaf:

$$k_s = A \exp\left(-\frac{E_a}{RT}\right) \quad \text{(3)}$$

$$D_e = D_0 \exp\left(-\frac{E_d}{RT}\right) \quad \text{(4)}$$

dengan $E_a$ adalah energi aktivasi reaksi (kJ/mol), $E_d$ adalah energi aktivasi difusi, $R = 8{,}314\,\text{J/(mol·K)}$ adalah konstanta gas universal, dan $T$ adalah suhu absolut (K). Dickson et al. (2026) melaporkan bahwa untuk pelindian Ni dari limonit di bawah kondisi HPAL, $E_a \approx 60{-}75\,\text{kJ/mol}$, sedangkan untuk difusi H⁺ melalui lapisan produk $E_d \approx 20{-}30\,\text{kJ/mol}$ (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Angka energi aktivasi ini menjadi dasar justifikasi pemilihan suhu operasi 250–270 °C pada pabrik HPAL modern.

### 2.3 Kinetika Pertumbuhan Kerak (Scale Growth Rate)

Salah satu kontribusi orisinal Dickson, Deleau, dan Espitalier (2026) adalah formulasi empiris-mekanistik untuk laju penebalan kerak $\dot{\delta}(t)$ yang dituliskan sebagai:

$$\dot{\delta}(t) = \frac{d\delta}{dt} = \frac{k_m \cdot \Delta C_{sat}}{\rho_{scale}} \exp\left(-\frac{E_{nuc}}{RT}\right) \quad \text{(5)}$$

di mana $k_m$ adalah koefisien transfer massa pada antarmuka slurry-dinding, $\Delta C_{sat} = C_{bulk} - C_{eq}$ adalah *supersaturation driving force*, $\rho_{scale}$ adalah densitas molar kerak, dan $E_{nuc}$ adalah energi aktivasi nukleasi heterogen. Persamaan (5) diselesaikan secara analitik dengan asumsi $\Delta C_{sat}$ konstan selama satu siklus pelindian, menghasilkan:

$$\delta(t) = \delta_0 + \frac{k_m \cdot \Delta C_{sat}}{\rho_{scale}} \exp\left(-\frac{E_{nuc}}{RT}\right) \cdot t \quad \text{(6)}$$

Persamaan (6) memungkinkan prediksi *time-to-shutdown* ketika ketebalan kerak melebihi ambang kritis $\delta_{crit} = 3{-}5\,\text{mm}$ (yang menghambat perpindahan panas dan menyebabkan overheating lokal).

### 2.4 Neraca Massa dan Konsentrasi Kesetimbangan

Konsentrasi kesetimbangan ion Fe³⁺ dalam larutan HPAL dikontrol oleh reaksi hidrolisis dan pengendapan jarosit:

$$\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6 \rightleftharpoons \text{K}^+ + 3\text{Fe}^{3+} + 2\text{SO}_4^{2-} + 6\text{OH}^- \quad \text{(7)}$$

dengan tetapan kesetimbangan $K_{sp}$ yang sangat bergantung pada pH, suhu, dan konsentrasi basa monovalen (Na⁺, K⁺). Andrameda et al. (2024) menunjukkan bahwa penambahan agen desulfurisasi tertentu dapat menurunkan aktivitas K⁺/Na⁺ efektif sehingga menggeser kesetimbangan (7) ke kiri dan mengurangi potensi pengendapan jarosit di dinding autoklaf (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari temuan Dickson et al. (2026) dan Andrameda et al. (2024) dapat distandardisasi dalam bentuk SOP delapan tahapan berikut yang berlaku untuk pabrik HPAL nikel laterit kapasitas 30.000–50.000 ton nikel/tahun:

**Tahap 1 — Karakterisasi Umpan Bijih (Feed Characterisation).** Analisis *X-Ray Fluorescence* (XRF) dan *Inductively Coupled Plasma Optical Emission Spectroscopy* (ICP-OES) pada sampel bijih laterit untuk menentukan kadar Ni (umumnya 1,0–1,6%), Co (0,05–0,15%), Fe (35–50%), Mg (1–8%), Al (2–6%), dan SiO₂ (10–30%). Data ini menjadi input model SCM pada persamaan (1)–(2).

**Tahap 2 — Preparasi Slurry dan Pra-Pelindian.** Pencampuran bijih laterit kering dengan air proses dan asam sulfat recycle pada *acid-to-ore ratio* 0,4–0,6 t H₂SO₄/t bijih, menghasilkan slurry dengan *pulp density* 30–45% w/w.

**Tahap 3 — Pemanasan Bertahap dan Tekanan Operasi.** Slurry dipanaskan menggunakan *direct steam injection* hingga suhu 240–270 °C dengan tekanan autogenous 38–52 bar. Pemanasan dilakukan secara gradual (5–8 °C/menit) untuk menghindari *thermal shock* pada lining titanium autoklaf.

**Tahap 4 — Pelindian Multi-Stage.** Tiga hingga empat kompartemen autoklaf dioperasikan secara *counter-current* dengan waktu tinggal total 60–90 menit. Sampling dilakukan setiap 15 menit untuk monitoring free acidity, Fe³⁺, dan suhu menggunakan probe *on-line* tipe OptiOx dan Raman spektroskopi.

**Tahap 5 — Pengukuran Laju Scaling (Scaling Rate