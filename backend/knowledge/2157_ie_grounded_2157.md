# 2157 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural yang dipicu oleh permintaan baterai kendaraan listrik (*electric vehicles*/EV) yang diproyeksikan tumbuh pada CAGR 19–22% hingga 2030 (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Pergeseran ini menggeser dominasi sumber nikel dari bijih sulfida (yang semakin habis) ke bijih **nikel laterit**, yang menyumbang sekitar 70% dari cadangan nikel dunia namun hanya ~40% produksi global karena tantangan metalurgi yang melekat. Di antara teknologi hidrometalurgi yang tersedia, **High-Pressure Acid Leaching (HPAL)** merupakan satu-satunya rute komersial yang mampu mengekstraksi nikel dan kobalt secara selektif dari bijih laterit limonitik (kadar rendah Mg, tinggi Fe) pada skala industri.

Proses HPAL beroperasi pada kondisi ekstrem: suhu 240–270 °C, tekanan operasi 35–55 bar, dan konsentrasi asam sulfat 150–250 g/L dalam autoclave titanium-clad yang terdiri dari 4–6 kompartemen (*compartments*) dengan agitasi mekanis. Dalam regime termodinamika ini, mineralogi bijih laterit—terutama goethit (α-FeOOH), serpentin (Mg₃Si₂O₅(OH)₄), dan berbagai oksida besi—mengalami dekomposisi asam agresif yang melepaskan Ni²⁺, Co²⁺, Fe²⁺, Al³⁺, Mg²⁺, dan silika terlarut ke dalam larutan. Namun, keberhasilan ekstraksi Ni/Co ini dibarengi dengan konsekuensi operasional yang sangat signifikan: **pembentukan kerak (*scale*) pada dinding, pipa, dan impeller autoclave**.

Menurut Dickson et al. (2026), fenomena scaling merupakan *single largest contributor to plant downtime* pada operasi HPAL, dengan kerugian produktivitas yang terukur dalam satuan *million USD per annum* untuk fasilitas berskala 30.000–60.000 ton Ni/tahun. Studi ini secara spesifik memetakan perilaku penskalaan (*scaling behaviour*) dan mengkarakterisasi produk kerak yang terbentuk selama pelindian, mengidentifikasi mineralogi utama (amorphous silica, basic iron sulfates, sodium jarosite, gypsum, hematite rekristalisasi) serta mengkuantifikasi laju akresi sebagai fungsi waktu tinggal (*residence time*), konsentrasi umpan padat, dan suhu operasi. Temuan ini memiliki implikasi langsung terhadap desain kapasitas, jadwal *shutdown*, dan strategi *cleaning* yang dalam praktiknya membedakan profitabilitas fasilitas HPAL. Studi pendukung Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) selanjutnya menunjukkan bahwa modifikasi proses pra-perlakuan—khususnya *roasting-reduction* dengan agen desulfurisasi—dapat secara material mengubah komposisi *residue* dan karakter penskalaan downstream pada autoclave, membuka peluang rekayasa preventif yang sebelumnya kurang dieksplorasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetik Pelindian Nikel Laterit

Reaksi pelindian utama goethit dan limonit dalam HPAL dapat direpresentasikan sebagai:

$$\text{FeOOH} + 3\text{H}^+ \rightarrow \text{Fe}^{3+} + 2\text{H}_2\text{O} \quad \text{(dekomposisi goethit)}$$

$$\text{NiO}\cdot\text{Fe}_2\text{O}_3 + 8\text{H}^+ \rightarrow \text{Ni}^{2+} + 2\text{Fe}^{3+} + 4\text{H}_2\text{O} \quad \text{(pelindian oksida campuran)}$$

Laju pelindian mengikuti **shrinking core model** dengan difusi melalui lapisan *ash* sebagai langkah pengendali pada suhu >200 °C:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_{H^+}}{r_p^2 \rho_s} \cdot t$$

dengan $\alpha$ = konversi fraksional, $k_d$ = konstanta laju difusi (m/s), $C_{H^+}$ = konsentrasi asam (mol/m³), $r_p$ = radius partikel (m), $\rho_s$ = densitas padatan (kg/m³), dan $t$ = waktu (s). Temperatur dependency mengikuti persamaan Arrhenius:

$$k_d = k_0 \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi tipikal $E_a$ ≈ 60–85 kJ/mol untuk pelindian laterit limonitik pada regime HPAL.

### 2.2 Kinetik Pembentukan Kerak (*Scale Growth Kinetics*)

Pertumbuhan kerak pada permukaan autoclave mengikuti dua regime dominan. Regime pertama adalah **reaksi-kendali** pada awal operasi dengan laju linear:

$$\frac{dm_s}{dt} = k_r \cdot C_i^n$$

dengan $m_s$ = massa kerak per satuan luas (kg/m²), $k_r$ = konstanta reaksi permukaan, $C_i$ = konsentrasi species pengendap (i), dan $n$ = orde reaksi (umumnya 1–2 untuk silica/iron sulfate).

Regime kedua adalah **difusi-kendali** yang mendominasi pada ketebalan kerak >0,5 mm dengan profil parabolik:

$$m_s(t)^2 = k_p \cdot t$$

atau dalam bentuk ketebalan:

$$\delta_s(t) = \sqrt{2 D_s C_s^{\text{surf}} \cdot t}$$

dengan $D_s$ = koefisien difusi species dalam matriks kerak (m²/s), dan $C_s^{\text{surf}}$ = konsentrasi jenuh di interface larutan–kerak (mol/m³). Untuk kerak multi-komponen (silika + basic iron sulfate), persamaan perlu dimodifikasi menjadi:

$$\delta_s^{\text{total}}(t) = \sum_{j=1}^{N} \sqrt{2 D_j C_j^{\text{surf}} \cdot t}$$

### 2.3 Resistansi Termal dan Penalti Perpindahan Panas

Kerak memberikan resistansi termal tambahan pada dinding autoclave yang dipanaskan dengan *live steam injection* atau pemanas eksternal:

$$R_{\text{total}} = R_{\text{conv,in}} + R_{\text{wall}} + R_{\text{scale}} + R_{\text{conv,out}}$$

$$R_{\text{scale}} = \frac{\delta_s}{k_s}$$

dengan $k_s$ = konduktivitas termal kerak (umumnya 0,3–1,2 W/(m·K) untuk campuran silika–iron sulfate). Penurunan fluks panas $q$ yang tersedia untuk reaksi endotermik pelindian menjadi:

$$q = \frac{T_{\text{steam}} - T_{\text{slurry}}}{R_{\text{total}}} \cdot A$$

Akresi kerak $0,5–1,5$ mm/tahun secara tipikal mengurangi efektivitas perpindahan panas sebesar 15–35%, memaksa operator meningkatkan tekanan steam untuk mempertahankan suhu target dengan biaya energi yang signifikan.

### 2.4 Neraca Asam dan Kriteria Saturasi

Prediksi apakah suatu species akan mengendap dievaluasi melalui *saturation index*:

$$\text{SI} = \log_{10}\left(\frac{\text{IAP}}{K_{sp}}\right)$$

dengan IAP = *ion activity product* dan $K_{sp}$ = konstanta kelarutan. Endapan terjadi ketika SI > 0. Untuk amorf silika: $K_{sp}(\text{SiO}_2 \text{ amorf}) \approx 10^{-2,7}$; untuk gypsum: $K_{sp}(\text{CaSO}_4 \cdot 2\text{H}_2\text{O}) \approx 10^{-4,6}$; untuk sodium jarosite: $K_{sp}(\text{NaFe}_3(\text{SO}_4)_2(\text{OH})_6) \approx 10^{-11}$ pada 250 °C.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dengan Mitigasi Scaling

```
[Bijih Laterit] → [Repulping] → [Pre-heating (slurry heater)] 
                                          ↓
[Autoclave Compartments 1–6, T=240-270°C, P=35-55 bar]
        ↓ (counter-current heat recovery)
[Cyclone (liquid/solid separation)] → [CCD Washing]
                                          ↓
[Neutralization (MgO/lime)] → [Ni/Co SX] → [EW atau MS Kristalisasi]
                                          ↓
[Autoclave Acid Wash (cleaning-in-place)]
```

### 3.2 SOP Pengendalian Kerak Autoclave

**Tahap Pra-Operasi (Start-up):**
1. **Acid curing & pre-passivation:** Sirkulasi asam sulfat 50–80 g/L pada 80–100 °C selama 4–6 jam untuk membentuk *protective oxide layer* pada dinding titanium.
2. **Heat-up rate control:** Pemanasan gradual ≤2 °C/menit untuk menghindari *thermal shock* pada lapisan kerak awal.
3. **Inokulasi seeding:** Penambahan *seed crystal* (≤2% solids recycle) pada kompartemen awal untuk mempromosikan *controlled precipitation* di slurry, bukan di dinding.

**Tahap Operasi (Steady-State):**
1. **Pemantauan suhu multi-titik:** Sensor thermocouple pada dinding dan slurry (ΔT >8 °C mengindikasikan kerak signifikan).
2. **Pressure drop monitoring:** Peningkatan ΔP pada *letdown valve* dan pipa transfer antar-stage >15% dari baseline menandakan fouling.
3. **Sampling rutin:** Analisis slurry untuk konsentrasi Si, Fe²⁺/Fe³⁺, free acid setiap 4 jam.
4. **Penyesuaian parameter operasi:** Modulasi *residence time* (umumnya 60–90 menit) dan *acid-to-ore ratio* (0,25–0,35 t H₂SO₄/t bijih kering) berdasarkan *online titrator*.

**Tahap Shut-down & Cleaning-in-Place (CIP):**
1. **Acid boil-out:** Sirkulasi asam sulfat 100–150 g/L pada 180–200 °C selama 8–12 jam untuk melarutkan iron sulfate.
2. **Alkaline wash:** Sirkulasi NaOH 5–8% pada 80–95 °C selama 4–6 jam untuk melarutkan silika amorf dan jarosite.
3. **Mechanical removal (jika diperlukan):** *Hydroblasting* pada titik-titik dengan akresi >3 mm.
4. **Inspection & NDT:** Ultrasonic thickness gauge untuk dinding autoclave (mencegah *over-etching*).

### 3.3 Integrasi dengan Pra-perlakuan Roasting-Reduction

Merujuk pada Andrameda et al. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)), pendekatan *roasting-reduction* dengan agen desulfurisasi pada 600–850 °C sebelum pelindian secara signifikan mengurangi kandungan sulfur dan besi reaktif dalam umpan autoclave, sehingga menurunkan *driving force* untuk pembentukan basic iron sulfate. SOP perlu mencakup:

1. **Desulfurisasi agent selection:** Calcium-based (CaO/CaCO₃) atau natrium-based, dengan rasio stoikiometri 1,1–1,3 terhadap sulfur umpan.
2. **Roasting temperature optimization:** Biasanya 700–800 °C untuk dekomposisi pirit tanpa sintering berlebihan.
4. **Reduktan kontrol:** Penambahan *coke breeze* atau gas reduktor (CO/H₂) untuk mengkonversi Fe³⁺ → Fe²⁺/Fe⁰ in-situ, mengurangi pelar