# 2845 — Karakterisasi dan Pengendalian Autoclave Scaling pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang menghadapi tantangan struktural yang semakin kompleks seiring dengan menipisnya cadangan bijih nikel sulfida (sulfidic ore) bermutu tinggi. Pergeseran sumber daya menuju bijih nikel laterit—yang menyumbang lebih dari 70% cadangan nikel terrestrial dunia namun hanya menghasilkan sekitar 40% produksi global—memaksa pelaku industri untuk mengadopsi teknologi ekstraksi hidrometalurgi bertekanan tinggi. High-Pressure Acid Leaching (HPAL) telah muncul sebagai satu-satunya rute teknis-ekonomi yang viable untuk memproses bijih laterit limonitik dan saprolitik dengan kandungan nikel 1–2,5%, seperti yang banyak terdapat di Indonesia (Morowali, Halmahera, Sulawesi Tenggara), Filipina (Rio Tuba), Kaledonia Baru (Goro), dan Australia (Murrin Murrin, Ravensthorpe). Dickson, Deleau, dan Espitalier (2026) dalam naskah mereka di *Cleaner Waste Systems* menyoroti salah satu masalah operasional paling kronis dan merugikan secara finansial pada teknologi HPAL modern, yaitu fenomena *autoclave scaling* yang terjadi pada dinding dalam reaktor, pipa transfer slurry, dan penukar panas.

Okechukwu et al. (2026) mendokumentasikan bahwa pada plant HPAL yang beroperasi pada rentang suhu 245–260 °C dan tekanan 35–45 bar dengan konsentrasi asam sulfat umpan 180–280 g/L H₂SO₄, laju akumulasi scale dapat mencapai 1,5–4,8 mm per bulan tergantung pada komposisi mineralogi umpan. Implikasi ekonominya sangat signifikan: downtime autoclave akibat *pressure drop* dan kehilangan efisiensi termal dapat menyebabkan kerugian produksi nikel senilai USD 8.000–25.000 per jam pada plant berkapasitas 30.000–40.000 ton nikel per tahun. Studi Andrameda, Triaswinanti, dan Madra (2024) yang dipublikasikan di *AIP Conference Proceedings* melengkapi perspektif ini dengan menunjukkan bahwa penambahan *desulfurization agent* (seperti natrium karbonat atau kalsium hidroksida) pada tahap pra-perlakuan *roasting-reduction* mampu mengurangi kandungan sulfur residu pada residue HPAL hingga 62–78%, sehingga menurunkan potensi pembentukan scale berbasis sulfat (khususnya gypsum dan magnesium sulfat heptahidrat) pada dinding autoclave.

Konteks strategis Indonesia menjadi sangat relevan karena negara ini merupakan produsen nikel terbesar dunia dengan pangsa produksi global lebih dari 38% (data USGS 2024), dan hampir seluruh proyek HPAL baru yang sedang konstruksi (Halmahera Persada Lygend, Huayou Cobalt di Morowali, QMB Energi di Konawe) berlokasi di Indonesia. Keberhasilan operasional teknologi HPAL di Indonesia menjadi determinan utama bagi keberlanjutan rantai pasok baterai kendaraan listrik (*electric vehicle battery*) global, di mana nikel kelas HPAL merupakan feedstock utama untuk prekursor NCM/NCA katoda. Oleh karena itu, pemahaman kuantitatif terhadap perilaku scaling dan metode karakterisasinya—sebagaimana diuraikan oleh Dickson et al. (2026)—merupakan kompetensi inti bagi ahli teknik industri yang beroperasi di persimpangan antara metalurgi ekstraktif, rekayasa proses, dan manajemen aset pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Kinetika Pelindian (Shrinking Core Model)

Kinetika pelindian nikel dari bijih laterit pada kondisi HPAL secara klasik dimodelkan dengan *shrinking core model* (SCM), di mana mineralogi goethite (α-FeOOH) dan serpentine (Mg₃Si₂O₅(OH)₄) terlarut secara progresif dari permukaan luar menuju inti partikel yang tidak ter-reaksi. Untuk reaksi pelindian goethite:

$$\text{FeOOH}_{(s)} + \text{H}_2\text{SO}_{4(l)} \rightarrow \text{Fe}_2(\text{SO}_4)_3{}_{(l)} + \text{H}_2\text{O}_{(l)}$$

Model SCM yang dikontrol oleh difusi melalui lapisan *ash* memberikan hubungan:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_A \cdot t}{\rho_B \cdot r_p^2}$$

di mana $\alpha$ adalah fraksi reaktan yang terlarut, $k_d$ adalah koefisien transfer massa difusif (m/s), $C_A$ adalah konsentrasi asam (kg/m³), $t$ adalah waktu pelindian (s), $\rho_B$ adalah densitas padatan (kg/m³), dan $r_p$ adalah radius awal partikel (m). Persamaan ini telah digunakan secara luas oleh peneliti hydrometallurgy untuk memprediksi recovery nikel pada berbagai rentang suhu operasi HPAL (Whittington et al., 2003; Bunjoko & Sahin, 2021).

### 2.2. Persamaan Arrhenius untuk Temperatur Dependence

Efekatan temperatur terhadap konstanta kecepatan reaksi pelindian mengikuti persamaan Arrhenius:

$$k = A_0 \cdot e^{-E_a/RT}$$

dengan $A_0$ adalah faktor frekuensi (s⁻¹), $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $T$ adalah suhu absolut (K). Untuk pelindian goethite dalam kondisi HPAL, nilai $E_a$ tipikal berkisar 65–85 kJ/mol. Efekatan temperatur ini penting dalam konteks autoclave scaling karena gradien termal lokal pada dinding autoclave dapat menciptakan zona supersaturasi yang mempercepat deposisi scale.

### 2.3. Model Pertumbuhan Kristal Scale (Nukleasi dan Pertumbuhan)

Pembentukan scale di autoclave HPAL terjadi melalui mekanisme nukleasi homogen dan heterogen, diikuti oleh pertumbuhan kristal. Laju nukleasi $J$ dan laju pertumbuhan $G$ mengikuti formulasi klasik *classical nucleation theory* (CNT):

$$J = J_0 \cdot \exp\left(-\frac{16\pi \gamma_{sl}^3 v_m^2}{3k_B^3 T^3 (\ln S)^2}\right)$$

$$G = k_g \cdot (S - 1)^n$$

di mana $\gamma_{sl}$ adalah tegangan interfacial solid-liquid (J/m²), $v_m$ adalah volume molar (m³/mol), $k_B$ adalah konstanta Boltzmann (1,38 × 10⁻²³ J/K), $S$ adalah *supersaturation ratio* ($S = C/C_{sat}$), $k_g$ adalah konstanta laju pertumbuhan, dan $n$ adalah orde pertumbuhan (umumnya 1–2 untuk scale sulfat).

### 2.4. Neraca Massa dan Energi Autoclave

Untuk autoclave kompartemen tunggal (*single-compartment autoclave*) dengan volume reaktif $V_r$, laju alir slurry $Q_s$, neraca massa untuk komponen $i$ adalah:

$$\frac{dC_i}{dt} = \frac{Q_s}{V_r}(C_{i,in} - C_{i,out}) + \sum_j \nu_{i,j} r_j$$

Neraca energi steady-state untuk operasi HPAL pada suhu $T_{op}$ adalah:

$$Q_{steam} + \sum_i F_i c_{p,i}(T_{in,i} - T_{op}) + Q_{reaction} = Q_{loss} + \sum_o F_o c_{p,o}(T_{out,o} - T_{op})$$

dengan $Q_{reaction}$ adalah panas eksotermik dari reaksi pelindian (khususnya pelarutan goethite melepas ~89 kJ/mol Fe), yang sebagian mengkompensasi kebutuhan injeksi uap bertekanan tinggi.

### 2.5. Karakterisasi Scale Compound

Dickson et al. (2026) melakukan karakterisasi scale menggunakan XRD, SEM-EDS, dan TGA, dan mengidentifikasi fase mineralogi dominan berupa: hematit (Fe₂O₃), jarosit (KFe₃(SO₄)₂(OH)₆), alunit (KAl₃(SO₄)₂(OH)₆), dan heksahidrit (MgSO₄·6H₂O). Formulasi stoikiometri senyawa scale utama adalah:

$$\text{Hematit: } \text{Fe}_2\text{O}_3, \quad M = 159{,}69 \text{ g/mol}$$
$$\text{Jarosit: } \text{KFe}_3(\text{SO}_4)_2(\text{OH})_6, \quad M = 497{,}84 \text{ g/mol}$$
$$\text{Alunit: } \text{KAl}_3(\text{SO}_4)_2(\text{OH})_6, \quad M = 414{,}22 \text{ g/mol}$$

Komposisi relatif fase-fase ini menentukan strategi removal scale—baik secara mekanis (water jetting bertekanan 1.500–2.500 bar), kimia (inhibitor fosfonat, dispersant polimerik), maupun termal (*thermal shock cooling-heating cycle*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Proses HPAL dan Titik Kritis Scaling

Sistem HPAL tipikal terdiri atas beberapa unit operasi berurutan: (i) persiapan slurry (repulping bijih kering dengan air recycle dan asam hingga konsentrasi padatan 35–45% w/w), (ii) preheating bertahap dalam 3–4段階 *flash heater* menggunakan steam panas buang, (iii) autoclave multi-kompartemen (umumnya 4–6 kompartemen dengan pemisahan baffle), (iv) flash cooling multi-stage, (v) CCD (*counter-current decantation*) thickener untuk pemisahan solid-liquid, dan (vi) netutralisasi dan presipitasi selektif untuk recovery nikel sebagai Mixed Hydroxide Precipitate (MHP) atau Mixed Sulfide Precipitate (MSP).

Diagram alir proses logika dapat direpresentasikan sebagai berikut:

```
[Bijih Laterit] → [Repulping + H₂SO₄] → [Pre-Heater Multi-Stage] 
    → [Autoclave HPAL 245-260°C / 35-45 bar] → [Flash Cooler]
    → [CCD Washing] → [Neutralization] → [Selective Precipitation Ni]
    → [MHP/MSP Product] + [Tailings Neutralization]
```

### 3.2. Standar Prosedur Operasional Mitigasi Scaling

Berdasarkan sintesis Dickson et al. (2026) dan pengalaman operasi industri plant Murrin Murrin, Ravensthorpe.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
