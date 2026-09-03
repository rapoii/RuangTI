# 1837 — Perilaku Scaling Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL: Pendekatan Rekayasa Proses, Kinetika Desulfurisasi, dan Optimasi Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang menghadapi transformasi struktural yang dipicu oleh transisi energi, elektrifikasi kendaraan, dan permintaan baterai lithium-ion berbasis NMC (Ni-Mn-Co) dan NCA (Ni-Co-Al). Lebih dari 70% cadangan nikel dunia berada dalam bentuk bijih laterit kadar rendah (limonit dan saprolit), yang hanya dapat diproses secara ekonomis melalui teknologi **High-Pressure Acid Leaching (HPAL)**. Teknologi HPAL yang diperkenalkan secara komersial sejak era 1950-an (Moa Bay, Cuba) dan kemudian dimatangkan oleh proyek-proyek seperti Murrin Murrin (Australia), Goro (Kaledonia Baru), hingga proyek-proyek modern di Indonesia (Halmahera, Morowali), beroperasi pada suhu 240–270 °C dan tekanan 35–45 bar dengan konsumsi asam sulfat (H₂SO₄) mencapai 350–500 kg per ton bijih.

Dalam konteks operasional, tantangan terbesar HPAL adalah **autoclave scaling** — pembentukan lapisan kerak padat pada dinding internal reaktor autoclave yang terbuat dari baja tahan karat bermassa jenis tinggi (umumnya *Alloy 625* atau *titanium-clad steel*). Dickson, Deleau, dan Espitalier (2026, *Cleaner Waste Systems*, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) secara sistematis menunjukkan bahwa scaling terutama terbentuk dari campuran hematit (α-Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), dan gypsum (CaSO₄·2H₂O) yang mengendap ketika slurry melewati zona transien suhu di dinding autoclave. Akumulasi scaling setebal 5–15 mm dapat menurunkan koefisien perpindahan panas keseluruhan (U) hingga 40–60%, meningkatkan konsumsi uap spesifik per ton bijih sebesar 15–25%, dan memaksa *shutdown* tidak terjadwal yang menyebabkan *lost production* signifikan.

Di sisi hilir, Andrameda, Triaswinanti, dan Madra (2024, *AIP Conference Proceedings*, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi pemahaman ini dengan menganalisis **residue HPAL** yang masih mengandung sulfur residu (S°) dan nikel yang tidak terekstraksi. Mereka mengevaluasi pengaruh agen desulfurisasi, suhu, dan waktu *roasting-reduction* terhadap recovery nikel dan penurunan kadar sulfur. Temuan ini penting karena residu HPAL bukan sekadar *waste stream* — melainkan *secondary feedstock* yang memiliki nilai ekonomik melalui proses *roasting-reduction* (reduksi selektif). 

Implikasi industri dari kedua paper ini sangat luas. Pertama, biaya produksi HPAL Indonesia saat ini berada pada kisaran USD 18.000–22.000/ton Ni, di mana 35–40% di antaranya adalah biaya energi dan *maintenance* yang langsung terkait dengan perilaku scaling. Kedua, ketidakmampuan mengelola scaling dapat menurunkan *metal recovery* dan merusak integritas mekanik autoclave (risak lelah termal dan *stress corrosion cracking*). Ketiga, sinergi antara pengelolaan scaling upstream dan desulfurisasi downstream menjadi pilar keberlanjutan proses HPAL, selaras dengan konsep *circular economy* dan target *net-zero emission* 2060. Modul 1837 ini menguraikan kerangka rekayasa sistem industri untuk memahami, memodelkan, dan memitigasi fenomena scaling dengan pendekatan matematis yang ketat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian HPAL dan Pertumbuhan Scaling

Reaksi pelindian nikel laterit dalam autoclave mengikuti kinetika *shrinking core* dengan lapisan produk Fe₂O₃ hidrat yang berfungsi sebagai *diffusion barrier*. Untuk mineral limonit (goethit), reaksi dapat ditulis sebagai:

$$\text{FeOOH} + \text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + \text{H}_2\text{O}$$

Persamaan laju *shrinking core* untuk kontrol difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_A \cdot t}{r_0^2 \cdot \rho_s}$$

di mana $\alpha$ adalah fraksi konversi, $k_d$ adalah konstanta difusi efektif (m²/s), $C_A$ adalah konsentrasi asam (kg/m³), $r_0$ adalah radius awal partikel (m), $\rho_s$ adalah densitas padatan (kg/m³), dan $t$ adalah waktu (s).

Laju pertumbuhan scaling pada dinding autoclave diformulasikan oleh Dickson et al. (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) sebagai fungsi supersaturasi lokal dan fluks perpindahan panas:

$$\frac{dx_s}{dt} = \frac{k_g}{\rho_s} \left( C_{\text{sat}}(T_s) - C_{\text{bulk}}(T_b) \right) - k_{\text{diss}} \cdot x_s$$

dengan $x_s$ adalah ketebalan scaling (m), $k_g$ adalah koefisien pertumbuhan (m/s), $C_{\text{sat}}$ dan $C_{\text{bulk}}$ adalah konsentrasi jenuh dan bulk spesies pengendap, $k_{\text{diss}}$ adalah koefisien disolusi parsial, dan $T_s$, $T_b$ adalah suhu permukaan dan bulk slurry. Persamaan ini merepresentasikan *dynamic equilibrium* antara deposisi dan erosi kimiawi.

### 2.2 Perpindahan Panas Majemuk dengan Resistansi Scaling

Koefisien perpindahan panas keseluruhan ($U$) pada dinding autoclave mengikuti model resistansi seri:

$$\frac{1}{U} = \frac{1}{h_{\text{slurry}}} + \frac{x_s}{k_s} + \frac{x_w}{k_w} + \frac{1}{h_{\text{steam}}}$$

di mana $h_{\text{slurry}}$ dan $h_{\text{steam}}$ adalah koefisien konveksi (W/m²·K), $k_s$ dan $k_w$ adalah konduktivitas termal scaling dan dinding autoclave (W/m·K), sementara $x_s$ dan $x_w$ adalah ketebalan lapisan. Untuk scaling Fe₂O₃–alunit, $k_s \approx 0{,}4$–$0{,}8$ W/m·K — sangat rendah dibanding baja tahan karat ($k_w \approx 16$ W/m·K), sehingga $x_s$ menjadi parameter paling sensitif.

### 2.3 Energi Aktivasi dan Persamaan Arrhenius

Kinetika pelindian dan reaksi desulfurisasi mengikuti hukum Arrhenius:

$$k = A \cdot e^{-E_a/(R \cdot T)}$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R = 8{,}314$ J/mol·K, dan $T$ suhu absolut (K). Andrameda et al. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melaporkan $E_a$ untuk reaksi desulfurisasi residu HPAL berkisar 78–112 kJ/mol tergantung komposisi mineralogi sulfur.

### 2.4 Model Neraca Massa dan Recovery Nikel

Recovery nikel total proses digambarkan oleh:

$$R_{\text{Ni,total}} = R_{\text{HPAL}} \cdot (1 - f_{\text{residue}}) + R_{\text{red}} \cdot f_{\text{residue}}$$

di mana $R_{\text{HPAL}}$ adalah recovery autoclave, $f_{\text{residue}}$ fraksi nikel yang masuk residu, dan $R_{\text{red}}$ recovery tahap *roasting-reduction*. Model neraca energi autoclave:

$$Q_{\text{steam}} = \dot{m}_{\text{slurry}} \cdot c_p \cdot (T_{\text{out}} - T_{\text{in}}) + U \cdot A \cdot \Delta T_{\text{LMTD}}$$

dengan $\Delta T_{\text{LMTD}}$ adalah *log mean temperature difference*. Efek scaling langsung menurunkan $U$, sehingga $Q_{\text{steam}}$ yang dibutuhkan meningkat secara non-linear seiring pertumbuhan $x_s$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL Modern

Diagram alir teknologi HPAL untuk bijih laterit limonit mengikuti blok fungsional sebagai berikut:

```
[Receiving & Storage] → [Slurry Preparation] → [Pre-heating Train] → 
[Primary Autoclave (3-4 compartments)] → [Flash Let-down] → 
[CCD Thickener] → [Neutralization (CCD wash)] → [Mixed Sulfide Precipitation] → 
[Residue Treatment → Desulfurization Roasting → Reduction Furnace]
```

### 3.2 SOP Mitigasi Scaling (4-Pilar Strategi)

Berdasarkan rekomendasi Dickson et al. (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)), mitigasi scaling dilakukan melalui empat pilar:

**Pilar I — Pengendalian Kimia Slurry:**
- Mempertahankan rasio Fe³⁺/Fe²⁺ di bawah 0,15 untuk menekan pembentukan jarosit.
- Dosis *seed hematite* (2–5 g/L) untuk mengarahkan presipitasi ke fase yang tidak *adherent* (slurry-borne).
- Pengendalian konsentrasi sulfat bebas pada 25–35 g/L.

**Pilar II — Manajemen Termal:**
- *Ramp-up rate* suhu dinding dibatasi ≤ 2°C/menit untuk menghindari *thermal shock*.
- Pemeliharaan gradien suhu slurry-dinding ≤ 8°C.
- Implementasi *temperature profiling* multi-zona pada setiap kompartemen autoclave.

**Pilar III — Mechanical Mitigation:**
- *Acid wash cycle* terjadwal menggunakan H₂SO₄ 5–10% pada suhu 80°C selama 4–6 jam.
- *High-pressure water jet* (200–300 bar) saat *shutdown* terjadwal.
- *Online monitoring* ketebalan scaling melalui *guided wave ultrasonic* dan *heat flux sensor*.

**Pilar IV — Process Data Analytics:**
- Digital twin berbasis first-principles model dengan kalibrasi *real-time*.
- *Predictive maintenance* menggunakan algoritma *Random Forest* dan *LSTM* untuk memprediksi laju pertumbuhan scaling.

### 3.3 SOP Desulfurisasi Residu HPAL

Mengikuti kerangka Andrameda et al. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)):

1. **Karakterisasi awal** residu melalui XRF, XRD, dan LECO sulfur analyzer.
2. **Pencampuran agen desulfurisasi** (Na₂CO₃ atau CaO pada rasio stoikiometri 1,05–1,15).
3. **Roasting** pada suhu 600–900°C selama 30–120 menit dalam atmosfer oksidatif terkontrol.
4. **Reduksi selektif** dengan kokas atau gas reduktor (CO/H₂) pada suhu 850–1050°C.
5. **Water leaching** untuk melarutkan sulfat dan memisahkan nikel-logam.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numer