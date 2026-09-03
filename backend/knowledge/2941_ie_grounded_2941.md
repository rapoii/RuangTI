# 2941 — Analisis Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL: Perspektif Teknik Industri untuk Efisiensi Proses dan Keberlanjutan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri hidrometalurgi nikel global menghadapi tantangan operasional yang sangat berat dalam pemrosesan bijih nikel laterit melalui teknologi *High-Pressure Acid Leaching* (HPAL). Bijih laterit, yang merupakan sumber daya nikel dominan di Indonesia, Filipina, Kaledonia Baru, dan sebagian Australia, memiliki kadar nikel rendah (0,8–2,5% Ni) namun kaya akan magnesium, besi, dan aluminosilikat. Kondisi operasi HPAL yang ekstrem—tekanan 30–45 bar dan suhu 240–270°C—memungkinkan pelindian nikel dan kobalt secara selektif menggunakan asam sulfat, namun secara simultan memicu terbentuknya *scaling* atau kerak padat pada dinding internal autoclave. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* mengkarakterisasi fenomena ini secara mendalam, menunjukkan bahwa scaling bukan hanya menurunkan efisiensi perpindahan panas melainkan juga menurunkan *uptime* autoclave hingga 15–30% per siklus operasi.

Secara ekonomis, produksi nikel kelas baterai (*battery-grade nickel sulfate*) melalui HPAL memiliki *Capital Expenditure* (CAPEX) yang sangat tinggi, berkisar USD 45.000–70.000 per ton nikel tahunan, sehingga setiap kehilangan *throughput* akibat shutdown untuk *descaling* memberikan dampak margin yang signifikan. Andrameda, Triaswinanti, dan Madra (2024) dari *AIP Conference Proceedings* melengkapi konteks ini dengan menunjukkan bahwa residu HPAL masih mengandung nikel residual yang tidak terlarutkan (0,05–0,15%) sehingga diperlukan tahap *roasting-reduction* dengan agen desulfurisasi untuk meningkatkan *overall recovery*. Kombinasi kedua literatur ini menunjukkan bahwa optimalisasi HPAL adalah masalah multi-dimensi: tidak hanya menyangkut rekayasa reaksi kimia, tetapi juga rekayasa sistem, manajemen pemeliharaan, dan keberlanjutan rantai pasok.

Urgensi operasional semakin nyata karena permintaan nikel untuk baterai *lithium-ion* kendaraan listrik (EV) diproyeksikan tumbuh dengan CAGR 12–15% hingga 2030 (IEA, 2024). Indonesia sebagai produsen nikel laterit terbesar dunia (~37% produksi global) menjadi episentrum transformasi ini, dengan megaproyek seperti *Indonesia Morowake* HPAL di Sulawesi Tengah dan Halmahera. Tanpa mitigasi scaling yang efektif, target produksi 1,4 juta ton nikel equivalente pada 2030 menjadi sulit tercapai. Oleh karena itu, modul 2941 ini membahas secara kuantitatif perilaku scaling autoclave, karakterisasi fisiko-kimia, dan integrasinya dengan strategi desulfurisasi serta reduksi untuk mencapai *closed-loop* proses yang efisien dan minim limbah.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pembentukan Scaling

Pertumbuhan kerak pada dinding autoclave HPAL mengikuti model *paralinear* yang dikemukakan oleh Barner & Mantell (1985) dan direplikasi pada studi Dickson et al. (2026). Laju pertumbuhan ketebalan kerak $h(t)$ dapat dinyatakan sebagai:

$$\frac{dh}{dt} = \frac{k_d \cdot C_s^n}{1 + k_r \cdot h(t)}$$

di mana $k_d$ adalah konstanta laju deposisi (m/s), $C_s$ adalah konsentrasi supersaturasi spesies pengendap (mol/L), $n$ adalah orde reaksi deposisi (umumnya 1–2), dan $k_r$ adalah konstanta *redissolution* yang terkait dengan pelarutan balik parsial kerak oleh asam. Pada kondisi tipikal HPAL nikel laterit, parameter Arrhenius untuk $k_d$ mengikuti:

$$k_d = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi $E_a$ berkisar 65–95 kJ/mol untuk endapan *basic ferric sulfate* (BFS) dan *hematite* ($\alpha$-Fe₂O₃) yang umum terbentuk. Faktor pre-eksponensial $A \approx 2{,}4 \times 10^5$ m/s dan suhu $T$ dalam Kelvin.

### 2.2 Neraca Massa Spesies Pembentuk Kerak

Komposisi kerak dominan pada autoclave HPAL nikel laterit, menurut karakterisasi XRD dan SEM-EDS oleh Dickson et al. (2026), terdiri dari:

- *Basic Ferric Sulfate* (BFS): $\text{FeOHSO}_4$ dan $\text{Fe}_4(\text{OH})_{10}\text{SO}_4$
- *Hematite*: $\alpha\text{-Fe}_2\text{O}_3$
- *Alunite-Jarosite* kompleks: $\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$
- *Amorphous silica*: $\text{SiO}_2 \cdot n\text{H}_2\text{O}$

Massa kerak total yang terbentuk per batch operasi (8–12 jam) dapat dihitung dengan:

$$m_{scale} = \sum_{i=1}^{n} \int_0^{t_{batch}} J_i(t) \cdot A_{autoclave} \, dt$$

di mana $J_i(t)$ adalah fluks deposisi komponen $i$ (kg/m²·h) dan $A_{autoclave}$ adalah luas permukaan internal autoclave (umumnya 200–450 m² untuk unit industri berkapasitas 200–250 ton bijih/batch).

### 2.3 Model Perpindahan Panas dengan Resistansi Kerak

Efisiensi perpindahan panas autoclave terdegradasi seiring pertumbuhan kerak. Koefisien perpindahan panas overall $U$ mengikuti:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{tube}}{k_{steel}} + \frac{h_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_{scale}$ adalah ketebalan kerak (m), $k_{scale}$ adalah konduktivitas termal kerak (umumnya 0,18–0,35 W/m·K untuk BFS dan 0,65–1,2 W/m·K untuk hematite), dan $h_i, h_o$ adalah koefisien konveksi internal-eksternal. Penurunan $U$ sekitar 25–40% teramati pada autoclave yang beroperasi >500 jam tanpa descaling.

### 2.4 Kinetika Pelindian HPAL

Reaksi pelindian nikel dari forsterite dan serpentine mengikuti model *shrinking core* dengan difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_{leach} \cdot C_{H_2SO_4}^m}{r_0^2 \cdot \rho_{ore}} \cdot t$$

di mana $\alpha$ adalah fraksi nikel terlindi (0,85–0,95 pada operasi optimal), $k_{leach}$ adalah konstanta laju, $C_{H_2SO_4}$ adalah konsentrasi asam bebas (40–80 g/L), $m$ adalah orde reaksi terhadap asam (sekitar 0,6), dan $r_0, \rho_{ore}$ adalah jari-jari awal partikel dan densitas bijih. Integrasi dengan model desulfurisasi Andrameda et al. (2024) memberikan:

$$\text{Ni Recovery}_{total} = \eta_{HPAL} + (1-\eta_{HPAL}) \cdot \eta_{red}$$

di mana $\eta_{HPAL}$ adalah recovery HPAL dan $\eta_{red}$ adalah recovery tahap reduksi roasting (umumnya 70–88% tergantung suhu dan jenis agen peredu).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Scaling

```
[Bijih Laterit] → [Penghancuran & Pengayakan] → [Pencampuran Slurry 35–45% solid]
    ↓
[Pemanas Umpan (Pre-heater)] → [Autoclave HPAL Multi-kompartemen]
    ↓                                              ↓
[Flash Cooling]                          [Sampling & Monitoring Kerak]
    ↓                                              ↓
[CCD Counter-Current Decantation]        [Injeksi Agen Anti-scaling]
    ↓
[Netralisasi & Pengendapan Fe/Al] → [Ekstraksi Solvent Ni/Co]
    ↓                                              ↓
[Kristalisasi NiSO₄·6H₂O]           [Residu → Roasting-Reduction]
                                              ↓
                                  [Recovery Ni dari Residu]
```

### 3.2 SOP Karakterisasi Scaling

Sesuai protokol Dickson et al. (2026), karakterisasi kerak dilakukan pada akhir setiap *campaign* operasi (3–6 bulan) melalui tahapan:

**Langkah 1 — Pengambilan Sampel Representatif**
Lakukan *core drilling* pada dinding autoclave menggunakan *pneumatic sampler* dengan bit karbida tungsten berdiameter 25–50 mm. Ambil minimal 5 *core* pada lokasi aksial berbeda (inlet, tengah, outlet autoclave) dengan ketinggian kerak >3 mm.

**Langkah 2 — Preparasi Sampel**
Potong *core* secara melintang menggunakan *precision saw*, lalu bagi menjadi tiga bagian: (a) permukaan dalam (berinteraksi dengan slurry), (b) bagian tengah, (c) antarmuka dengan baja autoclave. Setiap bagian di-*mount* dalam resin epoksi dan dipoles hingga grade mirror 0,05 µm.

**Langkah 3 — Analisis Multi-instrumentasi**
- **XRD (X-Ray Diffraction):** identifikasi fase kristalin dengan Cu-Kα radiation, scan 2θ = 5–80°, langkah 0,02°/s. Estimasi komposisi kuantitatif dengan metode *Rietveld refinement* menggunakan software TOPAS atau HighScore Plus.
- **SEM-EDS (Scanning Electron Microscopy – Energy Dispersive Spectroscopy):** identifikasi morfologi dan komposisi elemental pada perbesaran 500×–10.000×. Pemetaan elemental menggunakan *elemental mapping*.
- **TGA-DSC (Thermogravimetric Analysis – Differential Scanning Calorimetry):** analisis stabilitas termal, dekomposisi BFS, dan kehilangan air kristal pada rentang 25–900°C, laju pemanasan 10°C/menit dalam atmosfer N₂.
- **ICP-OES (Inductively Coupled Plasma – Optical Emission Spectroscopy):** analisis komposisi kimia total setelah *acid digestion* menggunakan campuran HCl-HNO₃-HF (3:1:1) dalam *microwave digester*.

**Langkah 4 — Interpretasi & Rekomendasi Mitigasi**
Berdasarkan profil komposisi dan ketebalan, klasifikasikan tingkat risiko operasi: *low risk* (ketebalan rata-rata <2 mm, recovery >92%), *moderate risk* (2–5 mm, recovery 88–92%), *high risk* (>5 mm, recovery <88%). Tentukan jenis intervensi: penyesuaian parameter operasi, injeksi *seeding agent* (misalnya hematite recycle), atau *shutdown* untuk *chemical cleaning*.

### 3.3 SOP Desulfurisasi & Reduksi Residu

Berdasarkan Andrameda et al. (2024), optimasi parameter desulfurisasi dan reduksi mengikuti SOP:

**Langkah 1 — Karakterisasi Residu HPAL**
Residu HPAL yang sudah di-*neutralize* (pH 4,5–5,5) dikeringkan pada 105°C selama 24 jam hingga kelembaban <2%. Analisis XRD menunjukkan dominasi *goethite* ($\alpha$-FeOOH), *magnetite* (Fe₃O₄), dan *quartz* dengan kadar Ni residual 0,05–0,15%.

**Langkah 2 — Desulfurisasi Awal**
Campur residu dengan larutan NaOH 10% (rasio solid:liquid = 1:3) pada suhu 80°C selama 2 jam untuk melarutkan sulfur residual sebagai Na₂SO₄. Saring dan cuci hingga pH netral. Efisiensi desulfurisasi tipikal: 65–85%.

**Langkah 3 — Roasting-Reduction**
Campur residu terdesulfurisasi dengan agen peredu (arang batok kelapa atau kokas petroleum) pada rasio C/residu = 8–12% berat. Tambahkan *flux* CaO atau SiO₂ jika diperlukan. Proses pada suhu 1100–1250°C selama 60–120 menit dalam atmosfer argon atau nitrogen untuk mencegah oksidasi berlebihan. Pengaruh suhu dan waktu terhadap recovery Ni mengikuti:

$$\eta_{Ni,red}(T,t) = \eta_{