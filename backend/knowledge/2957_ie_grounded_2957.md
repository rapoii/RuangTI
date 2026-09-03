# 2957 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak tajam seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi grid. International Nickel Study Group (INSG) melaporkan konsumsi nikel primer dunia melampaui 3,4 juta ton pada 2024, di mana lebih dari 70 % berasal dari bijih laterit karena sumber sulfida (pentlandite) semakin terbatas. Dari total cadangan laterit, hanya fraksi saprolit yang sebagian dapat diproses secara pirometalurgi, sedangkan limonit—yang mengandung 0,8–1,5 % Ni—memerlukan teknologi hidrometalurgi High Pressure Acid Leaching (HPAL) untuk mencapai ekstraksi nikel di atas 90 %. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menekankan bahwa HPAL, meskipun efisien, menghadapi tantangan operasional kronis berupa pembentukan kerak (autoclave scaling) yang menurunkan produktivitas, memperbesar konsumsi energi spesifik, dan mengancam keberlanjutan operasi.

Kerak autoclave merupakan endapan anorganik yang menempel pada dinding dan agitator autoclave, terutama tersusun atas hematit (α-Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), gipsum/anhidrit (CaSO₄·nH₂O), dan ferrihidrit amorf. Endapan ini terbentuk karena supersaturasi lokal ion Fe³⁺, Al³⁺, dan SO₄²⁻ pada suhu 240–270 °C dan tekanan 35–45 bar. Konsekuensi langsungnya adalah kehilangan perpindahan panas (heat transfer) sebesar 20–45 %, peningkatan Specific Energy Consumption (SEC) dari baseline 1,8 GJ/ton bijih menjadi 3,2 GJ/ton, serta forced shutdown untuk acid wash yang menurunkan *overall equipment effectiveness* (OEE) autoclave hingga 15–25 %. Dari perspektif rantai pasok, downtime ini menyebabkan kerugian EBITDA hingga USD 30–60 juta per tahun pada fasilitas HPAL kapasitas 60.000 ton Ni/tahun, seperti yang dilaporkan oleh operasi Vale di New Caledonia dan PT Halmahera Persada Lygend di Indonesia.

Urgensi teknis diperparah oleh dinamika feedstock. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa nikel laterite Indonesia—khususnya dari Halmahera dan Sulawesi Tenggara—memiliki kadar sulfur (S) yang bervariasi antara 0,02–0,45 %, memicu kompetisi reaksi antara pembentukan gipsum dan dekomposisi pirit selama *roasting-reduction*. Variabilitas ini memperumit desain operasi HPAL karena stoikiometri leaching dan potensi fouling menjadi tidak stasioner. Tanpa strategi mitigasi yang bersifat *first-principles* dan *data-driven*, investasi modal HPAL—yang mencapai USD 4–6 miliar per fasilitas—menjadi sulit di-justify secara finansial. Oleh karena itu, modul ini membahas secara sistematis perilaku scaling, formulasi kinetika pembentukannya, karakterisasi material, serta integrasi dengan proses pra-perlakuan desulfurisasi-roasting untuk mencapai operasi HPAL yang *robust* dan berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam pada Model Inti Menyusut (Shrinking Core Model)

Pelindian bijih nikel laterit dalam autoclave HPAL mengikuti model inti menyusut (*shrinking core model*/SCM) yang mempertimbangkan tiga rezim kontrol: difusi lapisan边界 (*film diffusion*), difusi melalui lapisan produk (*product layer diffusion*), dan reaksi kimia permukaan. Untuk partikel laterit berbentuk spherical dengan jari-jari awal $r_0$, laju pelindian nikel $X_{\text{Ni}}(t)$ diekspresikan sebagai:

$$t^* = \frac{\rho_B \, r_0}{b \, C_{A_s} \, k_s} \left[ 1 - (1-X)^{1/3} \right] \quad \text{(kontrol kimia)}$$

$$t^* = \frac{\rho_B \, r_0^2}{6 \, b \, D_e \, C_{A_s}} \left[ 1 - 3(1-X)^{2/3} + 2(1-X) \right] \quad \text{(difusi lapisan produk)}$$

di mana $\rho_B$ adalah densitas molar nikel dalam bijih (mol/m³), $C_{A_s}$ konsentrasi H₂SO₄ di bulk, $b$ koefisien stoikiometri, $k_s$ konstanta laju reaksi permukaan (m/s), dan $D_e$ difusivitas efektif dalam lapisan kerak (m²/s). Parameter kinetik $k_s$ mengikuti persamaan Arrhenius:

$$k_s = k_0 \exp\!\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ untuk pelindian nikel laterit limonit berkisar 65–85 kJ/mol, sebagaimana dilaporkan Dickson dkk. (2026) untuk rentang suhu 235–270 °C.

### 2.2 Mekanisme Pembentukan Kerak (Scaling) dan Persamaan Supersaturasi

Pembentukan kerak terjadi ketika produk kelarutan mineral melampaui batas saturasi termodinamik. Pada suhu operasi $T$, kelarutan senyawa skala $M$ dinyatakan sebagai:

$$K_{sp}^{(M)}(T) = \prod_i a_i^{\nu_i}$$

Laju deposisi kerak $\dot{m}_s$ (kg/(m²·jam)) dimodelkan melalui pendekatan *population balance* terhadap kristal yang tumbuh di permukaan dinding autoclave:

$$\dot{m}_s = k_d \, (C_b - C^*)^{\,n}$$

dengan $C_b$ konsentrasi aktual ion pembentuk skala di bulk, $C^*$ konsentrasi saturasi pada suhu dinding $T_w$, $k_d$ koefisien transfer, dan orde reaksi $n \in [1,2]$. Untuk hematit ($\alpha$-Fe₂O₃) yang dominan pada dinding autoclave bagian atas, reaksi presipitasi mengikuti:

$$2\,\text{Fe}^{3+} + 3\,\text{H}_2\text{O} \longrightarrow \alpha\text{-Fe}_2\text{O}_3(s) + 6\,\text{H}^+$$

dengan $\Delta G^{\circ}_{270\,^\circ\text{C}} \approx -184$ kJ/mol, sehingga secara termodinamik sangat spontan. Andrameda dkk. (2024) menambahkan bahwa keberadaan agen desulfurisasi (mis. Na₂CO₃) pada tahap pra-perlakuan menurunkan aktivitas $\text{SO}_4^{2-}$ hingga 60 % dan menekan pembentukan alunit, sehingga secara langsung memengaruhi laju $\dot{m}_s$.

### 2.3 Neraca Energi dan Perpindahan Panas Autoclave

Total koefisien perpindahan panas $U$ pada dinding autoclave berkurang karena akumulasi kerak dengan resistansi termal $R_s$:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_s}{k_s^{\text{scale}}} + \frac{\delta_w}{k_w} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal (slurry) dan eksternal (steam), $\delta_s$ tebal kerak, dan $k_s^{\text{scale}}$ konduktivitas termal kerak yang umumnya 0,4–1,2 W/(m·K) untuk hematit berpori. Penurunan $U$ menyebabkan kebutuhan steam naik menjadi:

$$\dot{Q} = U \cdot A \cdot \Delta T_{\text{LMTD}}$$

$\Delta T_{\text{LMTD}}$ adalah beda suhu log-mean antara steam pemanas dan slurry. Dengan tebal kerak 4 mm, Dickson dkk. (2026) menunjukkan bahwa $\Delta T_{\text{LMTD}}$ efektif harus naik dari 18 °C menjadi 32 °C untuk mempertahankan duty pemanasan yang sama, yang berarti konsumsi steam naik 38 %.

### 2.4 Model Konsumsi Asam dan Konsumsi Energi Spesifik (SEC)

Konsumsi asam total $M_{\text{H}_2\text{SO}_4}$ per ton bijih kering dihitung sebagai:

$$M_{\text{H}_2\text{SO}_4} = \sum_j \nu_j \, n_j$$

di mana $\nu_j$ adalah stoikiometri H₂SO₄ terhadap komponen $j$ (Fe, Al, Mg, Ca, Mn, Ni). Untuk bijih limonit dengan 38 % Fe, 4,5 % Al, 1,8 % Mg, dan 0,05 % Ca, konsumsi asam teoretis mencapai 480–540 kg/ton bijih. SEC total operasi:

$$\text{SEC} = \frac{\dot{Q}_{\text{steam}} \cdot H_s + \dot{W}_{\text{agitasi}}}{m_{\text{bijih}}}$$

dengan $H_s$ entalpi spesifik steam (≈ 2,1 GJ/ton) dan $\dot{W}_{\text{agitasi}}$ daya pengadukan (0,8–1,5 MW untuk autoclave 750 m³).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik-Titik Kritis Scaling

Diagram alir proses HPAL dapat direpresentasikan dalam blok berikut:

```
[Bijih Laterit] → [Pulp Preparation] → [Pre-heating (Steam)] 
        ↓
[Autoclave HPAL: 240–270 °C, 35–45 bar, residence time 60–90 min]
        ↓
[Flash & Cooling] → [CCD Thickener] → [Neutralisasi] → [MSP/Precipitation]
        ↓
[Acid Wash (descaling) ⇐ titik kritis 1]
[Mechanical Cleaning (shutdown) ⇐ titik kritis 2]
```

Operasi HPAL terdiri atas 4–6 autoclave multi-kompartemen yang disusun secara cascade. Titik kritis pembentukan kerak berada pada kompartemen pertama dan kedua, di mana feed slurry bersentuhan pertama kali dengan suhu tinggi dan terjadi supersaturasi maksimum.

### 3.2 SOP Pengoperasian dan Mitigasi Scaling

**Langkah 1 – Persiapan Slurry.** Konsentrasi solid dijaga pada 28–32 % w/w dengan rasio liquid/solid = 2,3–2,6. pH awal slurry 1,5–2,0 untuk menghindari presipitasi awal hidroksida besi di pra-pemanasan.

**Langkah 2 – Pemanasan Bertahap.** Steam injeksi dilakukan secara gradual untuk menghindari thermal shock. Laju kenaikan suhu dijaga ≤ 4 °C/menit hingga suhu kerja.

**Langkah 3 – Kontrol Residensi dan Agitasi.** *Residence time* (RT) optimum 60–90 menit pada agitasi tip speed 3–4 m/s. Pengadukan yang tidak seragam menciptakan dead zone dan mempercepat deposisi kerak.

**Langkah 4 – Acid Wash Periodik (Descaling In-Situ).** Setiap 14–21 hari operasi, dilakukan *acid wash* dengan larutan HCl 5–8 % atau H₂SO₄ pekat 15 % pada 80 °C selama 6–12 jam untuk melarutkan kerak berbasis hematit dan alunit. SOP ini menurunkan ketebalan kerak dari 4–6 mm menjadi < 1 mm.

**Langkah 5 – Inspeksi Shutdown.** Setiap 6–12 bulan, dilakukan mechanical cleaning dengan high-pressure water jet (200–300 bar) dan inspeksi ketebalan dinding autoclave menggunakan UT (ultrasonic testing) untuk memantau korosi.

### 3.3 Karakterisasi Kerak

Dickson dkk. (2026) melakukan karakterisasi kerak menggunakan:

- **XRD (X-Ray Diffraction):** identifikasi fase kristalin, terutama α-Fe₂O₃, alunit, gipsum, dan ferrihidrit.
- **SEM-EDS:** morfologi dan komposisi mikro, menunjukkan struktur berlapis (*layered morphology*).
- **TGA-DSC:** stabilitas termal dan kadar air terikat.
- **ICP-OES:** leaching test untuk mengetahui kelarutan kerak dalam berbagai media.

### 3.4 Integrasi dengan Pra-Proses Desulfurisasi-Reduction

Andrameda dkk. (202