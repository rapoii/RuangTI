# 2237 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya dalam Pelindian Bijih Nikel Laterit pada Kondisi HPAL: Analisis Rekayasa Proses, Kinetika, dan Mitigasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions  
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)  
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) mengalami lonjakan signifikan seiring akselerasi adopsi kendaraan listrik (EV) dan sistem penyimpanan energi stasioner. International Nickel Study Group (INSG) mencatat konsumsi nikel dunia telah melampaui 3,2 juta ton pada 2024, dengan proyeksi mendekati 4,5 juta ton pada 2030, di mana lebih dari 60 % pasokan baru harus berasal bijih laterit karena cadangan sulfida magmatik (pentlandit) semakin menipis. Proses *High-Pressure Acid Leaching* (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit jenis limonit dan saprolit kadar rendah, yang tidak layak diproses secara pirometalurgi konvensional. Dickson, Deleau, dan Espitalier (2026) menekankan bahwa meskipun HPAL mampu mencapai recoveries nikel 90–95 % pada kondisi operasi 240–270 °C dan tekanan 35–45 bar dengan konsumsi asam sulfat 250–400 kg H₂SO₄ per ton bijih, persoalan operasional paling kronis adalah terbentuknya kerak (*scale*) pada dinding dan impeller autoclave yang menurunkan efisiensi perpindahan panas, menyumbat pipa, dan memaksa *shutdown* prematur (Dickson dkk., 2026).

Secara ekonomis, satu kejadian *unplanned shutdown* pada autoclave HPAL berkapasitas 5.000–8.000 ton bijih per hari mampu menimbulkan kerugian opportunity cost hingga USD 2–4 juta per hari akibat hilangnya produksi Mixed Hydroxide Precipitate (MHP) atau Mixed Sulfide Precipitate (MSP). Kerak yang terbentuk tersusun utamanya dari alunit (KAl₃(SO₄)₂(OH)₆), jarosit/hematit amorf, gipsum (CaSO₄·2H₂O), dan silika amorf (SiO₂·nH₂O), yang konsentrasinya dikendalikan oleh komposisi mineralogi umpan, profil suhu, residence time, dan dosis desulfurisasi. Andrameda, Triaswinanti, dan Madra (2024) melaporkan bahwa pemilihan agen desulfurisasi (natrium hidroksida, kalsium karbonat, atau barium hidroksida) serta parameter *roasting-reduction* (suhu 600–900 °C, waktu tahan 30–120 menit) secara langsung memengaruhi kadar sulfur residual umpan HPAL dan laju akumulasi kerak di autoclave (Andrameda dkk., 2024). Konteks industri ini menjadikan karakterisasi perilaku kerak autoclave dan strategi mitigasinya sebagai salah satu *critical control points* (CCP) dalam *Design of Experiment* (DoE) sistem produksi HPAL modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian — Shrinking Core Model (SCM)

Pelindian partikel bijih laterit dalam autoclave HPAL遵循 mengikuti model *shrinking unreacted core* dengan difusi lapisan produk sebagai tahap pengendali laju (Dickson dkk., 2026). Untuk partikel sferis, hubungan konversi fraksional nikel $X_{\text{Ni}}$ terhadap waktu $t$ diberikan oleh:

$$1 - \frac{2}{3}X_{\text{Ni}} - (1 - X_{\text{Ni}})^{2/3} = \frac{k_s \cdot C_{A}^{n}}{R_p^{2}} \cdot t$$

di mana $k_s$ adalah konstanta laju efektif (m·s⁻¹), $C_A$ adalah konsentrasi asam sulfat bebas (mol·L⁻¹), $n$ adalah orde reaksi terhadap H₂SO₄ (umumnya 0,5–1,0 untuk pelindian laterit), dan $R_p$ adalah radius awal partikel (m). Konstanta $k_s$ mengikuti persamaan Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ sebagai faktor pre-eksponensial, $E_a$ sebagai energi aktivasi (kJ·mol⁻¹), $R = 8{,}314$ J·mol⁻¹·K⁻¹, dan $T$ sebagai suhu absolut (K). Untuk pelindian nikel dari goetit (α-FeOOH) limonit, literatur HPAL melaporkan $E_a \approx 65$–$85$ kJ·mol⁻¹, sedangkan untuk saprolit garnierit $E_a \approx 45$–$60$ kJ·mol⁻¹ (Dickson dkk., 2026).

### 2.2 Kinetika Pertumbuhan Kerak Autoclave

Laju penebalan kerak autoclave $\delta(t)$ (m) dimodelkan sebagai fungsi kombinasi deposisi partikulat dan kristalisasi permukaan:

$$\delta(t) = \delta_0 + \int_{0}^{t} \left[ k_c \cdot (C_{\text{sat}} - C_{\text{bulk}}) + k_d \cdot \dot{m}_s \right] d\tau$$

di mana $\delta_0$ adalah ketebalan kerak awal, $k_c$ adalah konstanta kristalisasi (m·s⁻¹), $C_{\text{sat}}$ dan $C_{\text{bulk}}$ berturut-turut adalah konsentrasi jenuh dan konsentrasi aktual spesies pembentuk kerak dalam slurry, $k_d$ adalah koefisien deposisi, dan $\dot{m}_s$ adalah fluks padatan tersuspensi (kg·m⁻²·s⁻¹). Untuk kerak alunit, persamaan kelarutan ioniknya mengikuti:

$$K_{sp}^{\text{alunite}} = a_{\text{K}^+} \cdot a_{\text{Al}^{3+}}^{3} \cdot a_{\text{SO}_4^{2-}}^{2} \cdot a_{\text{OH}^-}^{6}$$

Nilai $pK_{sp}^{\text{alunite}} \approx 117{,}9$ pada 250 °C menunjukkan bahwa alunit sangat mudah mengendap begitu kelarutan terlampaui (Dickson dkk., 2026).

### 2.3 Neraca Massa dan Energi Autoclave HPAL

Neraca massa total autoclave kontinu stirred-tank reactor (CSTR) bertingkat $N$:

$$\sum_{i=1}^{N} F_{\text{in},i} - \sum_{i=1}^{N} F_{\text{out},i} = \sum_{i=1}^{N} V_i \frac{dC_j}{dt}$$

Untuk neraca termal:

$$Q_{\text{steam}} + \sum_i F_{\text{in},i} h_{\text{in},i} - \sum_i F_{\text{out},i} h_{\text{out},i} = \rho V c_p \frac{dT}{dt} + U A (T - T_{\text{wall}})$$

dengan $Q_{\text{steam}}$ adalah duty pemanasan steam injeksi langsung, $h$ adalah entalpi spesifik slurry, $U$ koefisien pindah panas keseluruhan (W·m⁻²·K⁻¹), dan $A$ luas permukaan autoclave. Pembentukan kerak menurunkan $U$ menurut:

$$\frac{1}{U_{\text{fouled}}} = \frac{1}{U_{\text{clean}}} + \frac{\delta_{\text{scale}}}{k_{\text{scale}}}$$

di mana $k_{\text{scale}}$ adalah konduktivitas termal kerak (umumnya 0,3–0,8 W·m⁻¹·K⁻¹ untuk alunit-hematit).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Integrasi Pre-Treatment

Berdasarkan integrasi temuan Dickson dkk. (2026) dan Andrameda dkk. (2024), arsitektur rekayasa proses yang direkomendasikan mengikuti tahapan berikut:

1. **Preparasi Umpan**: *Comminution* (crushing & grinding) bijih laterit kering hingga $P_{80} = 75$–$150$ μm, diikuti *slurrying* pada densitas pulp 35–45 % solids (w/w) dengan air proses.
2. **Pre-Treatment Desulfurisasi dan Roasting-Reduction**: Andrameda dkk. (2024) menunjukkan bahwa penambahan agen desulfurisasi berbasis NaOH dosis 2–6 % (berat bijih) diikuti *roasting* pada 700–850 °C selama 60–90 menit dalam atmosfer reduktif (gas CO/H₂) mampu menurunkan sulfur umpan dari 0,8–1,5 % menjadi < 0,2 %, sehingga mereduksi formasi alunit di autoclave.
3. **Autoclave HPAL Multi-Kompartemen**: Umumnya 4–6 kompartemen CSTR串联 dengan suhu bertahap 245 → 270 °C, tekanan 38–42 bar, residence time total 60–90 menit, dan dosis H₂SO₄ 350–420 kg/t bijih.
4. **Solid-Liquid Separation**: *Counter-current decantation* (CCD) thickener 6–8 stage untuk memisahkan slurry pregnant liquor (PLS) dari residue.
5. **Pemurnian**: Netralisasi parsial dengan limestone/lime, pemisahan Fe/Al, dan presipitasi selektif Ni-Co sebagai MHP/MSP.

### 3.2 SOP Karakterisasi Kerak Autoclave

Standar prosedur operasional karakterisasi kerak yang diadopsi dari Dickson dkk. (2026):

- **Pengambilan sampel**: Pengeboran inti (*coring*) kerak pada dinding autoclave saat *turnaround* dengan interval ketinggian 0,5 m.
- **Analisis mineralogi**: XRD (Cu-Kα,扫描 5–70° 2θ, step 0,02°) untuk identifikasi fase alunit, jarosit, gipsum, hematit; *Rietveld refinement* untuk kuantifikasi.
- **Mikrostruktur**: SEM-EDS untuk morfologi dan komposisi lokal; mapping untuk distribusi K, Al, S, Fe, Si.
- **Termal**: TGA-DSC untuk stabilitas termal kerak dan estimasi kadar air kristal.
- **Sifat mekanis**: Uji adhesi kerak-logam dasar (pull-off test ASTM D4541) untuk evaluasi kekuatan bonding.

### 3.3 Diagram Alir Logika Pengendalian Kerak

```
[Sensor T, P, pH, ORP, konduktivitas] 
        ↓
[Realtime Mass Balance Estimator] → prediksi C_sat Al³⁺, SO₄²⁻, SiO₂
        ↓
[Decision Logic] — IF (C_bulk/C_sat) > 0,85 → TRIGGER
        ↓
[Aksi Mitigasi: 
   • Adjust acid dosing (-5%)
   • Increase residence time
   • Inject anti-scalant (polimaleat/akrilat 10–50 ppm)
   • Schedule CIP (Clean-In-Place) dengan HCl 5 % + inhibitor]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Industri Hipotetis-Riil

Ambil satu autoclave HPAL dengan spesifikasi operasional berikut (diadopsi dari data lapangan Dickson dkk., 2026 dan kalibrasi Andrameda dkk., 2024):

| Parameter | Nilai |
|---|---|
| Kapasitas umpan | $F_{\text{feed}} = 200$ t/jam bijih kering |
| Kadar Ni dalam bijih |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
