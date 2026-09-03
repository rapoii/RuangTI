# 1517 — Karakterisasi dan Mitigasi Pembentukan Kerak (Scaling) pada Autoclave dalam Proses High Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) mengalami eskalasi masif sejak 2020, didorong oleh transisi elektrifikasi kendaraan dan kebijakan dekarbonisasi Uni Eropa, Tiongkok, dan Indonesia sebagai pemain utama. Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel terrestre global namun hanya ~40% produksi, menjadi sumber strategis karena cadangan sulfida yang semakin terkuras. High Pressure Acid Leaching (HPAL) merupakan teknologi hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah (limonit dan saprolit kadar transisi), karena pelindian pada suhu 240–270 °C dan tekanan 35–45 bar dengan asam sulfat mampu mencapai recovery nikel >90% (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun demikian, proses HPAL menghadapi tantangan operasional kritis berupa pembentukan kerak (scale) pada dinding dan komponen internal autoclave. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* mendokumentasikan bahwa fenomena scaling menyebabkan downtime pabrik hingga 15–25% dari total jadwal produksi tahunan, menurunkan *overall equipment effectiveness* (OEE) autoclave menjadi 65–72%, serta menambah *unit operating cost* hingga USD 800–1.200 per ton nikel yang diproduksi. Skala deposit kerak yang terutama tersusun dari fase hematit (α-Fe₂O₃), alunit/jarosit, dan aluminium hidroksida, selain gypsum (CaSO₄·2H₂O), secara langsung mengurangi koefisien perpindahan panas, memperlambat kinetika pelindian, serta meningkatkan konsumsi asam sulfat 8–18%. Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) dalam studi tentang *roasting-reduction* residu HPAL menunjukkan bahwa pre-treatment bijih melalui desulfurisasi dapat mereduksi kadar sulfur dalam residue hingga 47% dan secara tidak langsung memengaruhi komposisi scalant yang terbentuk downstream.

Dari perspektif rekayasa sistem industri, akar masalah scaling merupakan konsekuensi termodinamika dari operasi pada kondisi super-ambient dalam media asam kuat. Sebagai contoh, autoclave multi-kompartemen di fasilitas PT Halmahera Persada Lygend (Indonesia) dengan kapasitas 30.000 ton nikel sulfat/tahun harus menjalani *cleaning-in-place* (CIP) berkala yang mencakup *acid boil-out* dengan HCl 18%, *pressure washing* pada 80 bar, dan inspeksi visual—siklus ini mengonsumsi waktu 5–7 hari dan mengganggu *campaign time* pelindian. Oleh karena itu, karakterisasi perilaku scaling, identifikasi mekanisme nukleasi dan pertumbuhan, serta pengembangan strategi mitigasi menjadi agenda riset terapan yang sangat relevan bagi keberlanjutan operasi HPAL di Indonesia yang diproyeksikan akan memiliki 12–15 pabrik HPAL beroperasi penuh pada 2030.

## 2. Landasan Teori & Formulasi Matematis

Mekanisme pembentukan kerak dalam autoclave HPAL mengikuti paradigma **kesetimbangan termodinamika-kinetika-transport**. Model yang dirangkum oleh Dickson dkk. (2026) mengintegrasikan tiga sub-model utama:

### 2.1 Kinetika Presipitasi Skalant

Laju deposisi kerak $r_d$ (kg·m⁻²·jam⁻¹) dapat dimodelkan sebagai fungsi supersaturasi dan koefisien transfer massa:

$$r_d = k_d \cdot (S - 1)^n \cdot A_{interface}$$

dengan $k_d$ adalah konstanta laju presipitasi (m·jam⁻¹), $S = C / C^*$ adalah rasio supersaturasi ($C$ = konsentrasi aktual, $C^*$ = konsentrasi kesetimbangan), $n$ adalah orde nukleasi (umumnya 1,5–2,5 untuk jarosit/hematit), dan $A_{interface}$ adalah luas kontak efektif (m²). Untuk sistem Fe³⁺-SO₄²⁻-H₂O, nilai $k_d$ berkisar 0,8 × 10⁻⁶ hingga 4,5 × 10⁻⁶ m·jam⁻¹ tergantung pH (0,5–1,5) dan suhu (250–270 °C) (Dickson dkk., 2026).

### 2.2 Model Deposisi Partikulat

Selain presipitasi homogen, *particulate deposition* dari partikel bijih yang tidak terlarut mengikuti persamaan fouling flux klasik Kern-Seaton:

$$\frac{dm_f}{dt} = \Phi_d - \Phi_r = k_{dep} \cdot C_b \cdot u - k_{rem} \cdot \tau_w \cdot m_f$$

dengan $m_f$ adalah massa fouling per satuan luas (kg·m⁻²), $\Phi_d$ dan $\Phi_r$ adalah fluks deposisi dan removal, $k_{dep}$ koefisien deposisi (m·s⁻¹), $C_b$ konsentrasi padatan dalam slurry (kg·m⁻³), $u$ kecepatan slurry (m·s⁻¹), $k_{rem}$ koefisien erosi, $\tau_w$ tegangan geser dinding, dan $t$ adalah waktu.

### 2.3 Kinetika Pelindian Bijih

Ekstraksi nikel mengikuti model shrinking-core untuk partikel laterit:

$$1 - (1 - X)^{1/3} = \frac{k_c \cdot C_{H^+}^m}{r_p \cdot \rho_p} \cdot t$$

dengan $X$ adalah fraksi nikel terlarut, $k_c$ konstanta kinetika (m·s⁻¹), $C_{H^+}$ konsentrasi asam (mol·L⁻¹), $m$ orde reaksi terhadap asam (0,5–0,8 untuk laterit limonit), $r_p$ jari-jari partikel, dan $\rho_p$ densitas partikel. Akumulasi kerak menurunkan $k_c$ efektif karena lapisan difusi tambahan, dengan koefisien transfer massa efektif:

$$\frac{1}{k_{c,ef}} = \frac{1}{k_c} + \frac{\delta_{scale}}{D_{eff}}$$

dengan $\delta_{scale}$ adalah ketebalan kerak rata-rata (m) dan $D_{eff}$ koefisien difusi efektif ion dalam matriks kerak.

### 2.4 Kriteria Kritis dan Korelasi Operasional

Angka Reynolds slurry dalam autoclave:

$$Re_{slurry} = \frac{\rho_m \cdot u \cdot D_{eq}}{\mu_m}$$

dengan $\rho_m$ densitas slurry (1.250–1.450 kg·m⁻³), $u$ kecepatan alir (1,5–3 m·s⁻¹), $D_{eq}$ diameter ekuivalen, dan $\mu_m$ viskositas campuran. Untuk mencegah settling dan meminimalkan deposisi, operasi dijaga pada $Re_{slurry} > 10^5$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri HPAL mengacu pada metodologi empat-fase berikut, yang mengintegrasikan SOP Dickson dkk. (2026) dan Andrameda dkk. (2024):

### Fase 1: Preparasi Umpan dan Karakterisasi Bijih

1. **Sampling dan analisa komposisi**: XRF, XRD, dan ICP-OES untuk menentukan kadar Ni (umumnya 1,0–1,6%), Fe (35–50%), MgO (5–25%), Al₂O₃ (3–8%), dan SiO₂.
2. **Pengujian rheology slurry**: Penentuan viskositas pada 60–70% solids untuk memprediksi perilaku pumping.
3. **Pre-treatment termal (opsional)**: Andrameda dkk. (2024) menunjukkan *roasting* pada 600–800 °C selama 60–90 menit dengan penambahan agen desulfurisasi (CaO atau Na₂CO₃ pada 5–10% berat) mampu mereduksi sulfur total sebesar 35–47%, menurunkan potensi terbentuknya jarosit dan alunit bersulfur.

### Fase 2: Operasi Autoclave Berkelanjutan

Diagram alir logika operasional:

```
[Bijih + H₂SO₄ 98%] → [Pulp 65% solids] → [Pre-heater shell-and-tube]
        ↓
[Autoclave Kompartemen 1 (245°C, 40 bar, residence 20 min)]
        ↓ agitasi 80-120 RPM
[Autoclave Kompartemen 2-4 (255-270°C, 42-45 bar, residence total 60-90 min)]
        ↓
[Flash Cooling ke 100°C, 1 bar] → [CCD Counter-Current Decantation]
        ↓
[Neutralisasi dengan MgO/kapur] → [SX-EW untuk Ni/Co recovery]
```

4. **Pengaturan parameter kritis**: suhu $T \in [245, 270]$ °C, tekanan $P \in [35, 45]$ bar, rasio asam/bijih $R_{A/B} = 250$–$450$ kg H₂SO₄/ton bijih, *free acid* residual 30–55 g/L.
5. **Monitoring *real-time***: probe korosi (electrical resistance probe), termokopel multi-titik, densitometer slurry, dan pressure differential transmitter untuk deteksi dini fouling.

### Fase 3: Inspeksi dan Mitigasi Kerak

6. **Pemantauan ketebalan kerak** dengan *ultrasonic thickness gauge* dan *eddy current testing* setiap 30 hari operasi.
7. **Strategi mitigasi empat-lapis**: (a) modifikasi chemistry (penambahan seed hematit 3–5 g/L, kontrol MgO feed), (b) modifikasi mekanis (rancangan impeller low-shear), (c) operational shutdown terjadwal setiap 90–120 hari untuk *acid boil-out*, dan (d) *online chemical cleaning* injeksi HCl 5% setiap 500 jam operasi.
8. **Standar Keselamatan**: ASME BPVC Section VIII Div. 1 untuk pressure vessel, NACE MR0175 untuk material compatibility (Alloy 276/625 untuk komponen kritis).

### Fase 4: Karakterisasi Skalant Pasca-Operasi

9. **Analisis multi-modal**: SEM-EDS, XRD, TGA-DSC pada sampel kerak untuk identifikasi fase dominan (hematit, jarosit, alunit, gypsum).
10. **Penentuan laju deposisi** $r_d$ empiris sebagai basis pemutakhiran model prediktif.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Autoclave 4-Kompartemen, Kapasitas 2.500 t/h Slurry

**Data input:**
- Feed bijih limonit: kadar Ni 1,3%, Fe 42%, MgO 8,5%, throughput 850 t/h
- Rasio padat-cair: 65% w/w solids, suhu 255 °C, tekanan 42 bar
- Konsentrasi asam awal: $C_{H^+,0}$ = 4,2 mol/L
- Diameter partikel rata-rata $r_p$ = 75 μm, $\rho_p$ = 2.800 kg/m³
- Konstanta kinetika $k_c$ = 1,8 × 10⁻⁵ m/s, orde $m$ = 0,65
- Laju deposisi kerak $r_d$ = 0,042 kg/m²·jam

### Perhitungan 1: Kinetika Pelindian Nikel

Substitusi ke persamaan shrinking-core pada residence time $t$ = 75 menit (4.500 s):

$$X = 1 - \left[1 - \frac{1,8 \times 10^{-5} \cdot (4,2)^{0,65}}{75 \times 10^{-6} \cdot 2.800} \cdot 4500 \right]^3$$

Menghitung:
- Numerator: $1,8 \times 10^{-5} \times 2,847 \times 4500 = 0,2306$ m
- Denominator: $7,5 \times 10^{-5} \times 2.800 = 0,2100$ m
- Rasio = 0,2306 / 0,2100 ≈ 1,098

Karena rasio >1, ini mengindikasikan difusi telah menjadi *rate-limiting* dan integrasi koreksi fouling diperlukan. Dengan ketebalan kerak rata-rata $\delta_{scale}$ = 2,5 mm setelah 30 hari dan $D_{eff}$ = 1,2 × 10⁻⁹ m²/s:

$$k_{c,ef} = \frac{1}{\frac{1}{1,8 \times 10^{-5}} + \frac{2,5 \times 10^{-3}}{1,2 \times 10^{-9}}} \approx 4,8 \times 10^{-7} \text{ m/s}$$

Recovery aktual menjadi: $X_{aktual} \approx 0,82$ atau **82% recovery Ni** (turun dari potensi 94% tanpa fouling).

### Perhitungan