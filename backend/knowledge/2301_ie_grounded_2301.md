# 2301 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel telah melonjak drastis dalam satu dekade terakhir, terutama didorong oleh ekspansi industri baterai kendaraan listrik (EV) dan sistem penyimpanan energi. International Nickel Study Group (INSG) melaporkan konsumsi nikel dunia melampaui 3,3 juta ton pada 2023, dan lebih dari 65% suplai nikel primer kini berasal dari bijih laterit — bukan lagi sulfida. Namun, cadangan sulfida yang tersisa secara global hanya menyumbang kurang dari 30%, sementara laterit mendominasi ~70% deposit nikel terrestrial. Paradoks geologis ini memaksa industri metalurgi untuk mengadopsi teknologi High-Pressure Acid Leaching (HPAL) sebagai rute utama ekstraksi nikel dari bijih laterit kadar rendah (biasanya 1,0–1,8% Ni) seperti limonit dan saprolit (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

HPAL beroperasi pada kondisi ekstrem: suhu 240–270°C, tekanan 30–55 bar, dan konsentrasi asam sulfat 30–150 g/L. Dalam lingkungan superkritis seperti ini, mineralogi bijih laterit — yang kaya akan goethit (α-FeOOH), magnesium silikat, dan aluminium hidroksida — mengalami dekomposisi selektif. Nikel, kobalt, dan sebagian besi larut ke dalam fasa liquor, sementara besi(III) diendapkan kembali sebagai hematit (Fe₂O₃). Akan tetapi, kejenuhan ion sulfat dan keberadaan kalsium, natrium, serta aluminium pada konsentrasi tinggi memicu terbentuknya *kerak autoclave* (autoclave scale) yang menempel pada dinding, impeller, dan pipa penukar panas (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Fenomena scaling bukan sekadar masalah operasional ringan. Studi Dickson dkk. (2026) menunjukkan bahwa akumulasi kerak setebal 5–15 mm dapat menurunkan efisiensi perpindahan panas hingga 40%, meningkatkan konsumsi energi spesifik sebesar 18–25%, dan memaksa *shut-down* tidak terjadwal yang merugikan secara ekonomi. Sebuah autoclave komersial berkapasitas 5.000 ton umpan/hari yang mengalami downtime 7 hari akibat scaling dapat kehilangan pendapatan hingga USD 8–12 juta. Lebih lanjut, Andrameda dkk. (2024) menyoroti bahwa residu HPAL yang mengandung belerang dan besi dalam bentuk tereduksi memerlukan tahap *roasting-reduction* dan *desulfurization* tambahan, yang seluruhnya menjadi tidak efisien bila efisiensi autoclave terganggu oleh scaling. Oleh karena itu, karakterisasi perilaku kerak — mulai dari komposisi kimia, morfologi, laju pertumbuhan, hingga mekanisme adhesi — menjadi agenda riset kritis yang menjembatani bidang metalurgi ekstraktif, rekayasa korosi, dan optimasi proses (Dickson dkk., 2026; Andrameda dkk., 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kinetika Pelindian Berdasarkan Shrinking Core Model (SCM)

Pelindian nikel dari bijih laterit pada kondisi HPAL lazim dimodelkan menggunakan *Shrinking Core Model* yang dikontrol difusi melalui lapisan produk (ash layer) untuk mineral silikat, dan dikontrol reaksi kimia permukaan untuk goethit. Persamaan laju fraksi konversi dapat ditulis:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_A^n}{\rho_B \cdot r_0^2} \cdot t$$

di mana $\alpha$ adalah fraksi nikel terekstraksi, $k_d$ adalah konstanta difusi efektif (m²/s), $C_A$ konsentrasi asam sulfat (kg/m³), $n$ orde reaksi (0,6–0,8 untuk limonit HPAL), $\rho_B$ densitas umpan bijih (kg/m³), $r_0$ jari-jari awal partikel (m), dan $t$ waktu tinggal (s). Untuk mineral goethit, persamaan SCM dengan kontrol reaksi kimia permukaan lebih sesuai:

$$1 - (1-\alpha)^{1/3} = \frac{k_s \cdot C_A^n}{\rho_B \cdot r_0} \cdot t$$

dengan $k_s$ sebagai konstanta laju reaksi permukaan (m/s). Konstanta $k_s$ mengikuti hukum Arrhenius:

$$k_s = k_0 \exp\!\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi $E_a$ tipikal 60–85 kJ/mol untuk dekomposisi goethit dalam HPAL (Dickson dkk., 2026).

### 2.2. Model Pertumbuhan Kerak Autoclave

Laju akumulasi kerak $R_s$ (kg/m²·hari) dapat diformulasikan sebagai fungsi fluks presipitasi dan gaya adhesi partikulat:

$$R_s = \int_0^L k_{prec} \left([Fe^{3+}]_{sat} - [Fe^{3+}]_{bulk}\right) \cdot S_{eff} \, dV - R_{diss}$$

di mana $k_{prec}$ adalah konstanta kinetika presipitasi, $[Fe^{3+}]_{sat}$ konsentrasi jenuh Fe³⁺ pada suhu operasi, $[Fe^{3+}]_{bulk}$ konsentrasi aktual, $S_{eff}$ luas permukaan efektif dinding autoclave, dan $R_{diss}$ laju disolusi kerak. Pada operasi tipikal 250°C, kelarutan hematit turun tajam, sehingga driving force presipitasi meningkat. Komposisi kerak yang dilaporkan Dickson dkk. (2026) terutama adalah campuran hematit ($\alpha$-Fe₂O₃), anhydrit (CaSO₄), sodium aluminosilicate sodalit, dan basic iron sulfate ($\text{FeOHSO}_4$). Andrameda dkk. (2024) menambahkan bahwa residu setelah HPAL mengandung fraksi sulfur yang apabila tidak didesulfurisasi akan mengkontaminasi produk roaster dan menghambat reduksi selektif.

### 2.3. Neraca Panas Autoclave dengan Efek Kerak

Efek isolasi termal kerak terhadap dinding autoclave dimodelkan melalui resistansi termal total:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{scale}}{k_{scale}} + \frac{\delta_{wall}}{k_{steel}} + \frac{1}{h_o}$$

dengan $U$ koefisien pindah panas keseluruhan (W/m²·K), $h_i$ dan $h_o$ koefisien konveksi sisi dalam dan luar, $\delta_{scale}$ dan $\delta_{wall}$ ketebalan kerak dan dinding baja, serta $k_{scale}$ dan $k_{steel}$ konduktivitas termal. Harga tipikal: $k_{scale} \approx 0{,}8$–$1{,}4$ W/m·K (untuk campuran hematit-anhydrit), sedangkan $k_{steel} \approx 16$ W/m·K. Penurunan $U$ secara langsung meningkatkan kebutuhan steam sesuai:

$$Q_{steam} = \dot{m} \cdot c_p \cdot (T_{target} - T_{feed}) + U \cdot A \cdot \Delta T_{lm}$$

### 2.4. Model Kinetika Desulfurisasi pada Residu HPAL

Andrameda dkk. (2024) menurunkan kinetika desulfurisasi residu HPAL dengan Na₂CO₃ dan NaOH mengikuti pseudo-homogeneous first order:

$$-\frac{d[S^{6+}]}{dt} = k_{ds} \cdot [S^{6+}] \cdot \left[\frac{m_{agent}}{m_{residue}}\right]^{m}$$

dengan $k_{ds}$ konstanta laju yang bergantung pada suhu menurut Arrhenius, $m$ orde parsial terhadap rasio agent/residu (0,4–0,6 pada suhu 600–900°C), dan konsentrasi sulfur awal [S⁶⁺] residu HPAL 1,8–3,5 wt%.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Proses HPAL End-to-End

```
[Bijih Laterit] → [Crushing & Sizing <1 mm] → [Slurry Mixing (40-45% solid)]
       ↓
[Pre-heating (90-110°C)] → [Autoclave Multi-kompartemen 250°C/45 bar]
       ↓
[Counter-current Decantation] → [CCD Liquor Pregnant]
       ↓
[Neutralisasi & Pengendapan Ni/Co Mixed Hydroxide (MHP)]
       ↓
[Residu Sisa] → [Roasting-Reduction] → [Desulfurization Agent] → [Fe-Ni Produk]
```

### 3.2. SOP Karakterisasi Kerak Autoclave (Dickson dkk., 2026)

1. **Sampling Periodik**: Ambil sampel kerak dari lokasi kritis (inlet slurry, baffle, zona transisi fasa) setiap 250 jam operasi.
2. **Karakterisasi Mineralogi**: XRD (X-ray Diffraction) dengan Cu-Kα radiation (λ = 1,5406 Å) untuk identifikasi fasa. Kisaran 2θ = 5°–80° step 0,02°.
3. **Analisis Morfologi**: SEM-EDS (Scanning Electron Microscopy dengan Energy Dispersive Spectroscopy) untuk topografi dan komposisi elemental; resolusi 5–10 nm.
4. **Penentuan Ketebalan**: Ultrasonic thickness gauge (panasonic-type probe) untuk mengukur $\delta_{scale}$ non-destruktif.
5. **Konsentrasi Logam Terlarut**: ICP-OES pada liquor pregnant untuk Fe, Al, Mg, Si, Na, Ca, S.
6. **Uji Adhesi**: Scratch tester dengan beban 0,5–10 N untuk menentukan gaya adhesi kerak-substrat.

### 3.3. SOP Desulfurisasi Residu HPAL (Andrameda dkk., 2024)

1. Pengeringan residu HPAL pada 105°C selama 12 jam.
2. Pencampuran residu dengan agen desulfurisasi (Na₂CO₃ atau NaOH) dengan rasio agent/residu 0,3–0,7.
3. Kalsinasi-roasting pada suhu 600–900°C selama 30–120 menit.
4. Leaching air (water leaching) pada suhu 80°C, rasio S/L = 1:10 selama 60 menit.
5. Analisis sulfur residual dengan LECO carbon-sulfur analyzer.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus: Efek Kerak 8 mm pada Performa Autoclave Komersial

**Data Input (Autoclave PT. Vale Indonesia / contoh tipikal, Dickson dkk., 2026):**
- Kapasitas umpan: 5.000 ton bijih/hari (~52,9 kg/s)
- Densitas slurry: 1.350 kg/m³
- Komposisi bijih: Ni = 1,5%, Fe = 38%, MgO = 8%, Al₂O₃ = 4%, SiO₂ = 12%
- Suhu operasi: 250°C (T₁ dalam autoclave), 240°C slurry
- Tekanan: 45 bar
- Diameter autoclave: 5,5 m; panjang 30 m; luas perpindahan panas A ≈ 250 m²
- Tanpa kerak: $U_0 = 850$ W/m²·K
- Konduktivitas kerak: $k_{scale} = 1{,}0$ W/m·K
- Ketebalan kerak: $\delta_{scale} = 0{,}008$ m
- Konduktivitas baja: $k_{steel} = 16$ W/m·K; $\delta_{wall} = 0{,}04$ m
- $h_i = 2.500$ W/m²·K (konveksi paksa slurry); $h_o = 15$ W/m²·K (steam jacket)

**Perhitungan Resistansi Termal dengan Kerak:**

$$\frac{1}{U_0} = \frac{1}{2500} + \frac{