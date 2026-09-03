# 1901 — Analisis Pembentukan Kerak (Scaling) pada Autoclave High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit: Karakterisasi, Kinetika, dan Strategi Mitigasi Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) tengah mengalami eskalasi masif seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi stasioner. Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel dunia namun hanya ±40% dari produksi global, menjadi sumber daya strategis yang sangat krusial. Proses hidrometalurgi *High-Pressure Acid Leaching* (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit kelas limonit dan saprolit karena kemampuannya memulihkan (recovery) nikel hingga 90–95%, jauh melampaui metode pirometalurgi yang hanya efektif pada bijih sulfida. Namun demikian, operasi HPAL yang berlangsung pada suhu ekstrem 240–270 °C dan tekanan 30–40 bar dengan media asam sulfat pekat menghadapi tantangan operasional kritis berupa **pembentukan kerak (*scaling*) pada dinding dan pipa internal autoclave** [Dickson dkk., 2026, DOI: 10.1016/j.clwas.2026.100503].

Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* melakukan investigasi sistematis terhadap perilaku dan karakterisasi kerak pada autoclave HPAL, mengidentifikasi bahwa masalah ini merupakan *single largest contributor* terhadap *unplanned downtime* pada fasilitas HPAL berskala komersial. Studi mereka menunjukkan bahwa lapisan kerak campuran (compound scale) yang terutama tersusun atas **anhidrit (CaSO₄), hematit (Fe₂O₃), goetit terhidrasi, dan aluminium hidroksisulfat** dapat mencapai ketebalan 5–50 mm dalam satu *campaign* operasi 90–120 hari, menyebabkan degradasi koefisien transfer panas hingga 60% dan lonjakan konsumsi asam sulfat spesifik sebesar 8–15% [Dickson dkk., 2026]. Secara ekonomi, hal ini menambah *operating cost* sekitar USD 3–6 per pon nikel yang diproduksi—angka yang sangat material dalam industri dengan margin tipis.

Komplementer dengan hal tersebut, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* menyoroti persoalan kontemporer lainnya dalam rantai proses HPAL: pengaruh agen desulfurisasi, suhu, dan waktu *roasting-reduction* terhadap residu HPAL yang mengandung konsentrasi sulfur dan logam transisi tinggi. Mereka menunjukkan bahwa pemilihan agen desulfurisasi yang tepat (seperti Na₂CO₃, NaOH, atau Ca(OH)₂) pada suhu 600–900 °C dapat mereduksi kandungan sulfur residu hingga 70% sekaligus memodifikasi morfologi kerak, memberikan perspektif mitigasi hulu-hilir [Andrameda dkk., 2024, DOI: 10.1063/5.0186417].

Dalam konteks Industri 4.0 dan rekayasa sistem industri, masalah scaling bukan sekadar fenomena kimia—melainkan sebuah masalah optimasi multi-dimensi yang membutuhkan integrasi antara *process engineering*, *reliability engineering*, *predictive maintenance*, dan *supply chain resilience*. Modul 1901 ini membahas akar masalah, formulasi matematis kinetika pengendapan, prosedur operasional standar (SOP) mitigasi, hingga studi kasus kuantitatif untuk pengambilan keputusan manajerial.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pengendapan Kerak

Pembentukan kerak dalam autoclave HPAL mengikuti prinsip **kelarutan retrograde** senyawa sulfat. Berbeda dengan kebanyakan garam yang kelarutannya meningkat dengan suhu, kelarutan CaSO₄ dan senyawa turunannya *menurun* signifikan pada suhu >200 °C. Konstanta kesetimbangan dapat dinyatakan sebagai:

$$K_{sp}(T) = [\text{Ca}^{2+}] \cdot [\text{SO}_4^{2-}] = f(T)$$

Dengan pendekatan van't Hoff:

$$\ln\frac{K_{sp}(T_2)}{K_{sp}(T_1)} = -\frac{\Delta H^\circ_{diss}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

di mana $\Delta H^\circ_{diss} < 0$ untuk CaSO₄·2H₂O (transformasi ke anhidrit), sehingga kenaikan suhu akan menggeser kesetimbangan ke arah pengendapan.

### 2.2 Kinetika Pertumbuhan Kerak

Pertumbuhan ketebalan kerak $x(t)$ mengikuti model *linear-parabolic* Wagner:

$$x^2 + 2k_d x = 2 k_d^2 t / \Omega$$

di mana $k_d$ adalah konstanta difusi ion melalui lapisan kerak dan $\Omega$ adalah parameter stoikiometri. Untuk jangka panjang, laju pertumbuhan secara asimtotik menjadi:

$$\frac{dx}{dt} \approx \frac{k_d}{\Omega} \quad \text{(difusi-controlled)}$$

Laju nukleasi dan pertumbuhan kristal anhidrit secara umum mengikuti hukum Arrhenius:

$$r = A \exp\left(-\frac{E_a}{RT}\right)[C_a-C_{a,sat}]^n$$

dengan $E_a \approx 65{-}90$ kJ/mol untuk sistem CaSO₄-H₂SO₄ pada konsentrasi asam 200–350 g/L [Dickson dkk., 2026].

### 2.3 Degradasi Transfer Panas

Koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, $U$) pada autoclave berskala direpresentasikan oleh model resistansi seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_{scale}}{k_{scale}} + \frac{x_{wall}}{k_{steel}} + \frac{1}{h_o}$$

Konduktivitas termal kerak campuran $k_{scale}$ berada pada rentang 0,4–1,2 W/m·K (anhidrit) hingga 1,8–2,5 W/m·K (hematit dengan kompaksi tinggi), jauh lebih rendah dibanding baja autoclave $k_{steel} \approx 16$ W/m·K. Inilah yang menjelaskan mengapa lapisan kerak hanya beberapa milimeter sudah mampu menurunkan $U$ secara drastis.

### 2.4 Neraca Massa Skala Industri

Untuk autoclave kompartemen tunggal dengan kapasitas umpan $F$ (ton/jam), recovery Ni $\eta_{Ni}$, dan fraksi kerak $f_s$ dari umpan:

$$\dot{m}_{scale} = F \cdot C_{Ca,ore} \cdot \eta_{precip} \cdot M_{CaSO_4}/M_{Ca}$$

Tingkat keasaman bebas residual menentukan driving force pengendapan:

$$\Delta C_{Ca^{2+}} = C_{Ca^{2+},diss} - C_{Ca^{2+},eq}(T, pH, [H_2SO_4])$$

### 2.5 Pendekatan Andrameda dkk. (2024) untuk Residu

Untuk karakteristik residu HPAL pasca-roasting, Andrameda dkk. (2024) menggunakan persamaan konversi desulfurisasi:

$$X_{S} = 1 - \frac{m_{S,residual}}{m_{S,initial}}$$

dengan pengaruh suhu sesuai model kontrakasi volumetrik *shrinking core*:

$$\frac{t}{\tau_{total}} = 1 - (1-X_S)^{1/3}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dan Titik Kritis Scaling

```
[Bijih Laterit] → [Repulping & Grinding] → [Pulp Pre-heating (Multi-stage flash)]
        ↓
[AUTOCLAVE HPAL — TITIK KRITIS SCALING]
   • Compartemen 1: 190-220°C, residence 15-20 menit
   • Compartemen 2-4: 240-270°C, residence 60-90 menit
   • Asam sulfat: 200-300 g/L free acid
        ↓
[Flash Cooling & CCD (Counter-Current Decantation)]
        ↓
[Neutralisasi & Precipitasi Ni/Co Mixed Hydroxide]
```

### 3.2 SOP Mitigasi Scaling

**Tahap Pra-Operasi (Design Phase):**
1. **Seleksi bijih dan blending**: Batasi rasio CaO/SiO₂ dan MgO/SiO₂; lakukan *ore characterization* dengan XRD/XRF setiap batch.
2. **Material of Construction (MoC)**: Pilih baja tahan karat duplex (Safurex®, 254 SMO) untuk area suhu tertinggi dengan permukaan rendah *adhesion energy*.

**Tahap Operasi (Operating Phase):**
3. **Kontrol parameter kritis menggunakan Six-Sigma framework**:
   - $T$: $\pm 3$ °C dari setpoint (target Cpk ≥ 1,67)
   - $[\text{H}_2\text{SO}_4]$ free: 200–280 g/L
   - *Residence time* tiap kompartemen: jaga solid content 25–35% w/w
4. **Acid management strategy**: *Two-stage acid addition* — 60% di C1, 40% di C3 untuk mengendalikan supersaturasi CaSO₄.
5. **Real-time monitoring**: Pasang *skin thermocouples*, *pressure differential transmitters*, dan *online XRF slurry analyzer* untuk deteksi dini penebalan kerak.
6. **Predictive scale model**: Implementasikan *digital twin* berbasis persamaan di Bagian 2 untuk memprediksi $x(t)$ dan jadwal *shut-down*.

**Tahap Pemeliharaan (Shutdown):**
7. **Acid wash procedure**: Sirkulasi H₂SO₄ 5–10% pada 80–95 °C selama 4–8 jam; efisiensi pelarutan kerak anhidrit mencapai 85–92%.
8. **Mechanical removal**: Water-jetting (40–60 MPa) untuk kerak persistent.
9. **Inspection & thickness mapping**: Ultrasonic thickness gauge pada seluruh dinding; pemetaan 3D untuk trend analisis *remaining useful life* (RUL).

### 3.3 Integrasi dengan Proses Hilir (Andrameda dkk., 2024)

Untuk menangani residu HPAL dengan kandungan sulfur tinggi, SOP tambahan mencakup:
- **Roasting-Reduction** pada suhu 700–900 °C selama 60–120 menit dengan penambahan kokas/arang sebagai reduktor.
- **Desulfurization** dengan Na₂CO₃ (rasio stoikiometri 1,1–1,3) untuk mengonversi SO₃ residual menjadi Na₂SO₄ yang dapat dicuci.
- Karakterisasi XRD pasca-perlakuan untuk verifikasi konversi fase.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Pabrik Acuan

Ambil fasilitas HPAL hipotetik dengan kapasitas olah 3.000 ton bijih laterit/hari:

| Parameter | Nilai |
|-----------|-------|
| Komposisi umpan: Mg, Ca, Fe, Al | 2,5% / 0,8% / 35% / 2,0% |
| Suhu operasi (C2–C4) | 255 °C (528 K) |
| Tekanan operasi | 42 bar |
| Asam sulfat free | 240 g/L |
| Residence time total | 75 menit |
| Diameter autoclave internal | 4,5 m; panjang efektif 32 m |
| Ketebalan dinding baja | 60 mm; $k_{steel}$ = 16 W/m·K |

### 4.2 Perhitungan Laju Pertumbuhan Kerak Anhidrit

Konsentrasi Ca²⁺ terlarut dalam larutan umpan rata-rata $C_{Ca^{2+}} = 0{,}020$ mol/L. Kelarutan CaSO₄ pada 255 °C dalam matriks H₂SO₄ 240 g/L berdasarkan korelasi Dickson dkk. (2026): $C_{sat} = 0{,}0035$ mol/L.

Supersaturasi relatif:
$$\sigma = \frac{C_{Ca^{2+}} - C_{sat}}{C_{sat}} = \frac{0{,}020 - 0{,}0035}{0{,}0035} = 4{,}71$$

Laju nukleasi pertumbuhan (orde 2):
$$\frac{dx}{dt} = A \exp\left(-\frac{E_a}{RT}\right) \cdot \sigma^2$$

Dengan $A = 1{,}2 \times 10^{5