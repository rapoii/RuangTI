# 1677 — Perilaku Scaling Autoclave dan Karakterisasi Proses pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri metalurgi ekstraktif global sedang menghadapi tantangan struktural yang semakin kompleks seiring dengan menurunnya kadar bijih sulfida nikel secara gradual dan bergesernya pusat produksi ke bijih laterit yang memiliki kompleksitas mineralogis lebih tinggi. High-Pressure Acid Leaching (HPAL) telah muncul sebagai teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit jenis limonit dan saprolit, namun proses ini memiliki satu kelemahan operasional yang signifikan yaitu pembentukan *scale* (kerak) pada dinding dan internal komponen autoclave. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menekankan bahwa perilaku scaling pada autoclave HPAL merupakan faktor pembatas utama yang menentukan *overall equipment effectiveness* (OEE) instalasi, karena secara langsung menurunkan koefisien perpindahan panas, mempersempit luas penampang aliran slurry, dan memaksa dilakukannya *shut-down* tidak terjadwal untuk *descaling* mekanis maupun kimiawi (Dickson et al., 2026; DOI: 10.1016/j.clwas.2026.100503).

Konteks ekonomi makro menunjukkan bahwa produksi nikel kelas baterai (*battery-grade nickel sulfate*) diproyeksikan tumbuh pada CAGR sebesar 8,5–12% hingga 2035, didorong oleh ekspansi manufaktur kendaraan listrik (*electric vehicles*). Setiap jam *downtime* autoclave HPAL kapasitas tipikal 5.000–8.000 ton bijih/hari dapat menyebabkan kerugian pendapatan antara USD 25.000 hingga USD 80.000 per jam, belum termasuk biaya *descaling* yang dapat mencapai USD 1,5–3 juta per siklus. Oleh karena itu, pemahaman kuantitatif tentang mekanisme *scaling*, kinetika pertumbuhannya, dan karakteristik mineralogi deposit menjadi imperatif strategis bagi insinyur proses dan manajemen operasional.

Paper Andrameda, Triaswinanti, dan Madra (2024) menyumbangkan perspektif komplementer dengan mengkaji pengaruh agen desulfurisasi, suhu, dan durasi proses *roasting-reduction* terhadap residu HPAL, yang secara tidak langsung mengendalikan komposisi umpan slurry dan propensity terhadap scaling. Residu HPAL yang kaya akan Fe, Al, dan Mg hidroksida/oksida merupakan prekursor utama bagi pembentukan scale ketika parameter proses tidak dioptimasi dengan benar (Andrameda et al., 2024; DOI: 10.1063/5.0186417). Integrasi kedua literatur ini menghasilkan kerangka analisis yang holistik, mulai dari karakteristik umpan hingga perilaku operasional autoclave dan manajemen residu.

Urgensi rekayasa juga muncul dari aspek keberlanjutan. Pembentukan scale tidak hanya menurunkan produktivitas tetapi juga meningkatkan konsumsi energi spesifik (*specific energy consumption*) per ton nikel yang diproduksi, sekaligus menambah volume waste yang harus dikelola. Dengan demikian, karakterisasi scaling bukan sekadar persoalan pemeliharaan, melainkan merupakan variabel kunci dalam *life cycle assessment* (LCA) dan *total cost of ownership* (TCO) pabrik HPAL modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Pembentukan Scale Autoclave HPAL

Secara termodinamika, scaling dalam autoclave HPAL terjadi melalui tiga mekanisme simultan: (i) *precipitation* senyawa Fe, Al, dan Mg dari larutan jenuh; (ii) *crystallization* pada permukaan logam yang berfungsi sebagai *seed nucleation sites*; dan (iii) *particulate fouling* akibat deposisi partikel padatan yang tidak terlarut sempurna. Laju pertumbuhan scale total dapat diformulasikan sebagai berikut:

$$\frac{dm_s}{dt} = \dot{m}_{p} + \dot{m}_{c} + \dot{m}_{f}$$

dengan $\dot{m}_{s}$ adalah akumulasi massa scale per satuan waktu, sementara subskrip $p$, $c$, dan $f$ masing-masing merujuk pada *precipitation*, *crystallization*, dan *fouling*.

### 2.2 Model Kinetika Presipitasi Arrhenius

Kinetika presipitasi senyawa pengotor mengikuti persamaan Arrhenius termodifikasi yang dikoreksi dengan faktor kejenuhan relatif (*supersaturation*). Untuk komponen $i$ (Fe³⁺, Al³⁺, atau Mg²⁺):

$$r_{i} = k_{0,i} \exp\left(-\frac{E_{a,i}}{RT}\right) \cdot \left(\frac{C_i}{C_{i,sat}(T)}\right)^{n_i}$$

di mana:
- $r_i$ = laju presipitasi molar (mol/m²·s)
- $k_{0,i}$ = konstanta pre-eksponensial
- $E_{a,i}$ = energi aktivasi (J/mol), tipikal 45–85 kJ/mol untuk Fe-oxyhydroxide
- $R$ = konstanta gas universal (8,314 J/mol·K)
- $T$ = suhu absolut (K), berkisar 513–543 K pada operasi HPAL
- $C_i$ dan $C_{i,sat}$ = konsentrasi aktual dan konsentrasi jenuh
- $n_i$ = orde reaksi terhadap *supersaturation* (umumnya 1,5–2,5)

### 2.3 Model Pertumbuhan Layer (Shrinking Core Adopsi)

Untuk scale yang tumbuh sebagai *layer* kontinu pada dinding autoclave, ketebalan scale $\delta(t)$ diekspresikan melalui analogi *shrinking core model*:

$$\delta(t) = \delta_{\infty} \left[1 - \exp\left(-\frac{t}{\tau_s}\right)\right]$$

dengan $\delta_{\infty}$ adalah ketebalan scale asimptotik dan $\tau_s$ adalah konstanta waktu karakteristik yang bergantung pada suhu dan komposisi slurry. Dalam kondisi HPAL tipikal dengan suhu 250°C, $\tau_s$ berada pada rentang 40–120 jam.

### 2.4 Penurunan Koefisien Perpindahan Panas

Akumulasi scale secara langsung mengurangi efektivitas perpindahan panas yang dimodelkan melalui resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_{in}} + \frac{\delta_{w}}{k_w} + \frac{\delta_s}{k_s} + \frac{1}{h_{out}}$$

di mana:
- $U$ = koefisien perpindahan panas keseluruhan (W/m²·K)
- $h_{in}$, $h_{out}$ = koefisien konveksi sisi dalam dan luar
- $\delta_w$, $\delta_s$ = ketebalan dinding logam dan scale
- $k_w$, $k_s$ = konduktivitas termal dinding (baja karbon ~45 W/m·K) dan scale (1,0–2,5 W/m·K)

Karena $k_s \ll k_w$, kontribusi resistansi scale menjadi dominan ketika $\delta_s$ melebihi 3–5 mm, sehingga untuk mempertahankan $U$ pada nilai desain minimal 800 W/m²·K, *descaling* harus dilakukan secara periodik.

### 2.5 Model Konsumsi Asam dan Stoikiometri Leaching

Konsumsi asam sulfat untuk pelindian bijih laterit mengikuti stoikiometri mineralogi:

$$\text{H}_2\text{SO}_4 + \text{MeO} \rightarrow \text{MeSO}_4 + \text{H}_2\text{O}$$

Untuk bijih laterit dengan kandungan rata-rata 35% Fe₂O₃, 5% Al₂O₃, dan 8% MgO, kebutuhan asam teoritis dapat dihitung sebagai:

$$M_{H_2SO_4} = \sum_{i} \left(\frac{w_i \cdot m_{ore}}{M_i}\right) \cdot \nu_i \cdot M_{H_2SO_4}$$

dengan $w_i$ adalah fraksi massa oksida, $m_{ore}$ adalah massa umpan, $M_i$ adalah massa molar oksida, dan $\nu_i$ adalah koefisien stoikiometri. Andrameda et al. (2024) menunjukkan bahwa penambahan agen desulfurisasi dan optimalisasi *roasting-reduction* mampu mereduksi konsumsi asam spesifik hingga 12–18% melalui transformasi fasa goetit menjadi hematit yang lebih resisten dan mengurangi solubilitas Al selama leaching (Andrameda et al., 2024; DOI: 10.1063/5.0186417).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik Kritis Scaling

Diagram alir proses HPAL terdiri dari tahapan: (1) *preparation* slurry (konsentrasi padatan 35–45% w/w), (2) pemanasan awal di *preheater* bertahap, (3) leaching dalam 4–6 *compartment* autoclave pada 240–270°C dan 35–45 bar, (4) *flash cooling* dan netralisasi bertahap, dan (5) *counter-current decantation* (CCD) untuk pemisahan liquir padat. Titik kritis pembentukan scale terutama terjadi di *compartment* 1–3 (suhu >200°C) dan di seluruh jaringan pipa transfer, dengan laju tertinggi pada zona transisi suhu.

### 3.2 SOP Pemantauan dan Pengendalian Scale

Standar prosedur operasional yang diusulkan oleh Dickson et al. (2026) mencakup protokol berikut:

1. **Pre-leaching characterization** — Analisis XRD, SEM-EDS, dan TGA pada bijih umpan untuk mengidentifikasi mineralogi pembentuk scale potensial (goetit, gibsit, serpentin).

2. **Real-time monitoring** — Instalasi *heat flux sensor* pada dinding autoclave untuk mendeteksi peningkatan resistansi termal yang mengindikasikan akumulasi scale:

$$\Delta R_{thermal}(t) = \frac{1}{U(t)} - \frac{1}{U_0}$$

3. **Sampling terprogram** — Pengambilan coupon scale setiap 30 hari untuk analisis XRD dan komposisi kimia guna mengidentifikasi fasa dominan.

4. **Chemical descaling protocol** — Sirkulasi larutan HCl 5–8% atau campuran asam organik (sitrat + oksalat) pada suhu 60–80°C selama 8–12 jam, dilanjutkan dengan *rinse* air demineralisasi.

5. **Mechanical descaling** — *Hydroblasting* bertekanan tinggi (200–300 bar) untuk scale yang resisten terhadap pelarutan kimia.

### 3.3 Strategi Mitigasi Berbasis Andrameda et al. (2024)

Pendekatan preventif yang diusulkan Andrameda et al. (2024) melalui optimisasi *roasting-reduction* dengan agen desulfurisasi (umumnya Na₂CO₃ atau CaCO₃) pada suhu 600–800°C selama 30–90 menit terbukti:

- Mengurangi sulfur dalam residu hingga 70–85%
- Mengubah fasa Fe dari goetit (α-FeOOH) menjadi hematit (α-Fe₂O₃) yang kurang reaktif dalam leaching asam
- Menurunkan rasio Al/Si dalam residu, sehingga mengurangi potensi pembentukan scale aluminium-silikat

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasional

Sebuah pabrik HPAL hipotetis dengan kapasitas umpan 6.000 ton bijih laterit/hari memiliki parameter operasional berikut:

| Parameter | Nilai |
|-----------|-------|
| Suhu autoclave | $T = 543\,\text{K}$ (250°C) |
| Tekanan | $P = 40\,\text{bar}$ |
| Konsentrasi slurry | $C_{sl} = 40\%$ w/w |
| Komposisi bijih | Fe₂O₃ = 35%, Al₂O₃ = 5%, MgO = 8%, NiO = 1,2% |
| Laju alir slurry | $\dot{m}_{sl} = 15.000\,\text{kg/jam}$ |
| Konsentrasi H₂SO₄ umpan | 98% (densitas 1,84 g/cm³) |
| Luas permukaan dalam autoclave | $A = 850\,\text{m}^2$ |

### 4.2 Perhitungan K