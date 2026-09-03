# 2813 — Perilaku dan Karakterisasi Scaling Autoclave pada Proses Leaching Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit merupakan salah satu sumber daya strategis yang menguasai sekitar 60–70% cadangan nikel global, namun hanya menyumbang kurang lebih 40% produksi nikel primer karena kompleksitas metalurginya (Dickson, Deleau & Espitalier, 2026). Bijih nikel laterit umumnya dibagi menjadi dua lapisan utama, yaitu *limonite* (saprolit atas dengan kadar Fe dan MgO rendah) dan *saprolite* (lapisan bawah kaya MgO dan SiO₂). Proses *High-Pressure Acid Leaching* (HPAL) menjadi teknologi dominan untuk mengolah bijih laterit jenis limonit karena mampu mengekstraksi nikel hingga 90–95% melalui pelarutan selektif menggunakan asam sulfat pada kondisi termodinamika ekstrem, yaitu suhu 240–270 °C dan tekanan 35–45 bar (Andrameda, Triaswinanti & Madra, 2024).

Dalam operasional industri, salah satu tantangan paling krusial yang menurunkan ketersediaan fisik (*physical availability*) dan keandalan autoclave adalah fenomena *scaling*, yaitu pengendapan dan akresi padatan tak larut pada dinding internal, pipa transfer slurry, serta permukaan penukar panas autoclave. Dickson, Deleau, dan Espitalier (2026) mendokumentasikan bahwa perilaku scaling pada autoclave HPAL secara langsung menentukan interval shutdown, konsumsi spesifik asam, serta yield recovery nikel. Studi mereka menunjukkan bahwa deposit scaling terutama tersusun atas gypsum (CaSO₄·2H₂O), anhydrite (CaSO₄), hematite (α-Fe₂O₃), alunite [KAl₃(SO₄)₂(OH)₆], dan campuran ferri-hidrosulfat yang terbentuk melalui mekanisme supersaturasi lokal saat slurry mengalami dekompresi dan pendinginan antara kompartemen autoclave.

Urgensi ekonomi dari pengendalian scaling sangat signifikan. Sebuah pabrik HPAL berkapasitas 50.000 ton nikel per tahun dapat mengalami kerugian produksi hingga USD 8–12 juta per siklus shutdown akibat *unplanned downtime* dan biaya *acid wash* kimiawi (Dickson et al., 2026). Sementara itu, Andrameda et al. (2024) melengkapi perspektif ini dengan menunjukkan bahwa residu HPAL yang mengandung Fe₂O₃, gangue, dan sulfur dapat dimanfaatkan kembali melalui *roasting-reduction* untuk mengurangi volume tailing dan menambah *recovery* logam kritis, sehingga loop daur ulang residu turut memengaruhi desain operasi autoclave. Dalam konteks *engineering system* dan *reliability engineering*, fenomena scaling bukan semata isu kimiawi tetapi merupakan variabel keputusan yang menentukan kapasitas efektif (*effective capacity*), throughput, dan OEE (*Overall Equipment Effectiveness*) pabrik HPAL. Dengan demikian, kemampuan memprediksi laju akresi, komposisi fase, dan morfologi skala menjadi kebutuhan fundamental bagi insinyur proses dan perencana kapasitas dalam rantai pasok nikel baterai global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Leaching dan Model Inti Menyusut (*Shrinking Core Model*)

Reaksi pelarutan nikel dari matriks laterit umumnya mengikuti mekanisme *shrinking core* dengan difusi melalui lapisan produk sebagai langkah kontrol:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_A^n}{\rho_B \cdot r_p^2} \cdot t$$

di mana $\alpha$ adalah fraksi konversi nikel, $k_d$ adalah konstanta laju difusi, $C_A$ konsentrasi asam sulfat (g/L), $\rho_B$ densitas partikel bijih, $r_p$ radius awal partikel, dan $n$ orde reaksi parsial terhadap reaktan.

Ketergantungan suhu mengikuti persamaan Arrhenius:

$$k_d = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan $A$ faktor frekuensi, $E_a$ energi aktivasi (kJ/mol), $R = 8{,}314$ J/(mol·K), dan $T$ suhu absolut (K). Untuk leaching nikel laterit, $E_a$ umumnya berkisar antara 55–75 kJ/mol (Andrameda et al., 2024).

### 2.2 Kinetika Pertumbuhan Skala (*Scale Growth Law*)

Pertumbuhan lapisan scale pada dinding autoclave mengikuti hukum parabolik difusi-controlled:

$$\delta(t) = \sqrt{2 D_s C_s^{\text{sat}} \frac{\Omega}{M_s} \cdot t}$$

dengan $\delta(t)$ ketebalan scale (m), $D_s$ koefisien difusi ion sulfat dalam lapisan boundary layer, $C_s^{\text{sat}}$ konsentrasi jenuh ion pembentuk scale, $\Omega$ volume molar scale, dan $M_s$ massa molar scale. Untuk gypsum, $M_s = 172{,}17$ g/mol dan $\Omega \approx 7{,}48 \times 10^{-5}$ m³/mol.

Laju supersaturasi lokal di dekat dinding autoclave mengikuti:

$$S = \frac{\text{IAP}}{K_{sp}(T)}$$

di mana IAP adalah *ion activity product* aktual dan $K_{sp}(T)$ adalah konstanta kelarutan sebagai fungsi suhu. Untuk CaSO₄, transisi gypsum ↔ anhydrite terjadi ketika $T > 120$ °C dengan rasio $K_{sp}^{\text{anhydrite}}/K_{sp}^{\text{gypsum}} \approx 0{,}3$ (Dickson et al., 2026).

### 2.3 Neraca Massa dan Panas Autoclave

Neraca massa total Ni dalam satu kompartemen autoclave:

$$\frac{dM_{Ni}}{dt} = \dot{m}_{\text{feed}} \cdot x_{Ni}^{\text{feed}} - \dot{m}_{\text{discharge}} \cdot x_{Ni}^{\text{discharge}} - r_{\text{scale,Ni}}$$

Kebutuhan termal untuk mempertahankan suhu operasi HPAL:

$$Q = \dot{m} c_p \Delta T + U A_{\text{heat}} (T_{\text{steam}} - T_{\text{process}}) + Q_{\text{loss}}$$

di mana $U$ koefisien transfer panas keseluruhan, $A_{\text{heat}}$ luas permukaan perpindahan panas, dan $Q_{\text{loss}}$ meliputi panas yang diangkut oleh scale yang tumbuh pada dinding (heat loss term).

### 2.4 Indeks Keandalan dan Ketersediaan

Untuk mengkuantifikasi dampak scaling terhadap ketersediaan autoclave, digunakan metrik *Mean Time Between Cleaning* (MTBC):

$$\text{MTBC} = \frac{\delta_{\text{kritis}} - \delta_0}{v_{\text{growth}}}$$

dengan $\delta_{\text{kritis}}$ ketebalan maksimum yang masih diizinkan (umumnya 5–8 mm untuk autoclave HPAL), $\delta_0$ ketebalan awal setelah *acid wash*, dan $v_{\text{growth}}$ laju pertumbuhan scale rata-rata (mm/hari).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Titik Sampling Scaling

```
[Bijih Laterit] → [Repulp & Grinding] → [Pre-heater 1-4] 
   → [Autoclave Kompartemen 1-6 (240-270 °C, 40 bar)]
       → [Flash Cooling & Discharging] → [CCD Washing]
           → [Mixed Hydroxide Precipitation (MHP)]
[Residu/Solid] → [Net Acid Wash & Neutralization]
```

**Titik kritis monitoring scaling:**

1. *Inlet pre-heater* (suhu 180–200 °C): risiko gypsum scaling dominan.
2. *Dinding kompartemen 2-3 autoclave* (suhu puncak 260–270 °C): risiko anhydrite + hematite.
3. *Discharge line & flash tank* (dekompresi tiba-tiba): risiko alunite dan jarosite.
4. *Internal heat exchanger tubes*: risiko Fe-sulfat scale yang sangat keras.

### 3.2 SOP Pengendalian Scaling Otomotif (berdasarkan Dickson et al., 2026)

| Tahap | Aktivitas | Parameter Kritis | Standar Industri |
|---|---|---|---|
| Pre-leach conditioning | Penambahan Ca-bleed kontrol | Ca²⁺ < 0,8 g/L | ISO 22489 |
| Operasi autoclave | Monitoring ΔT dinding | ΔT < 8 °C | NPI (2018) |
| Sampling mingguan | XRD + SEM-EDS | Identifikasi fase scale | ASTM E1508 |
| Acid wash terjadwal | Sirkulasi HCl 5% + inhibitor | 8–16 jam soak | Best Practice TS |
| Predictive shutdown | Inspeksi UT ketebalan scale | δ ≤ 5 mm | ASME B&PV Sec.V |

### 3.3 Protokol Karakterisasi Scaling

Metodologi karakterisasi yang digunakan Dickson et al. (2026) meliputi:

- **XRD (X-Ray Diffraction)**: identifikasi fase kristalin (gypsum, anhydrite, hematite, alunite).
- **SEM-EDS**: morfologi permukaan dan komposisi elemental.
- **TGA-DSC**: stabilitas termal dan kandungan air kristal.
- **ICP-OES leach test**: solubilisasi scale untuk penentuan komposisi kimia.
- **Cross-sectional microscopy**: pengukuran ketebalan dan delaminasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario Pabrik

Sebuah autoclave HPAL industri dengan kapasitas 250 ton/jam bijih laterit umpan slurry (35% solids) beroperasi pada kondisi berikut:

- Suhu operasi dalam kompartemen 3: $T = 265$ °C = 538 K
- Tekanan operasi: $P = 42$ bar
- Konsentrasi asam sulfat umpan: $C_{H_2SO_4} = 98$ g/L
- Diameter partikel bijih: $d_p = 75$ µm, sehingga $r_p = 37{,}5 \times 10^{-6}$ m
- Konsentrasi Ca²⁺ dalam umpan slurry: $C_{Ca} = 1{,}2$ g/L
- Diameter autoclave: $D_{\text{auto}} = 4{,}8$ m, panjang total $L = 28$ m (6 kompartemen)

### 4.2 Perhitungan Kinetika Leaching

Menggunakan persamaan Arrhenius dengan parameter dari Andrameda et al. (2024):

$$k_d = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

Asumsi $A = 1{,}8 \times 10^{7}$ m²/s dan $E_a = 65$ kJ/mol:

$$k_d = 1{,}8 \times 10^{7} \cdot \exp\left(-\frac{65.000}{8{,}314 \times 538}\right) = 1{,}8 \times 10^{7} \cdot \exp(-14{,}53)$$

$$\exp(-14{,}53) \approx 4{,}98 \times 10^{-7}$$

$$k_d \approx 8{,}96 \times 10^{0} \text{ m}^2/\text{s} = 8{,}96 \text{ m}^2/\text{s}$$

Untuk estimasi recovery nikel setelah residence time $\tau = 60