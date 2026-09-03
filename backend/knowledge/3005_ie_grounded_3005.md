# 3005 — Rekayasa Autoclave dan Pengendalian Skalabilitas pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak tajam seiring akselerasi transisi energi dan proliferasi kendaraan listrik (EV). Lebih dari 60% cadangan nikel dunia terkonsentrasi dalam bijih laterit, yang didominasi oleh limonit (oksida) dan saprolit (silikat). Berbeda dengan bijih sulfida yang dapat diproses secara pirometalurgi, bijih laterit memerlukan teknologi hidrometalurgi tingkat lanjut, dengan **High-Pressure Acid Leaching (HPAL)** menjadi salah satu metode paling mapan untuk mengekstraksi nikel dari limonit kadar rendah (biasanya 0,8–1,5% Ni). Dickson, Deleau, dan Espitalier (2026) menekankan bahwa dalam operasional HPAL, salah satu tantangan paling kritikal yang menghambat kapasitas produksi adalah fenomena **autoclave scaling**, yaitu akresiendapan mineral pada dinding internal, impeller, dan pipa internal autoclave yang beroperasi pada tekanan 40–50 bar dan suhu 245–270 °C (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Secara ekonomis, downtime autoclave akibat scaling dapat menurunkan *availability* pabrik hingga 10–15%, dengan kerugian produksi nikel sekitar 1.000–3.000 ton nikel per tahun pada fasilitas berskala besar (kapasitas 30.000–50.000 t Ni/tahun). Karakterisasi endapan yang dilaporkan dalam paper Dickson et al. (2026) umumnya mengidentifikasi tiga fasa dominan: **(i) hematit (α-Fe₂O₃) terkristalisasi sebagai produk paska-leaching, (ii) basic iron sulfate (misalnya jarosite dan alunite) yang terbentuk pada zona transien suhu, dan (iii) gypsum serta aluminum hydroxides (boehmite/gibbsite) yang mengkristal saat pendinginan slurry**. Andrameda, Triaswinanti, dan Madra (2024) melengkapi pemahaman ini dengan menunjukkan bahwa **proses desulfurisasi residu HPAL melalui *roasting-reduction* sangat dipengaruhi oleh jenis agen desulfurisasi, suhu kalsinasi (700–1.000 °C), dan waktu tahan (*holding time*)**, yang secara langsung menentukan kualitas residu dan laju regenerasi asam sulfat (Andrameda et al., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Urgensi rekayasa sistem industri pada domain ini terletak pada kebutuhan untuk memformalkan model prediktif pertumbuhan scale, mengintegrasikan parameter operasional dengan karakteristik mineralogi feed, serta merancang protokol *cleaning-in-place* (CIP) yang efisien tanpa menurunkan *campaign life* autoclave. Kajian ini berada di persimpangan antara *process metallurgy*, *unit operations*, dan *industrial systems engineering*, dengan implikasi langsung terhadap **biaya operasional (OPEX), kapasitas efektif, dan keberlanjutan lingkungan** fasilitas HPAL.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Leaching — Shrinking Core Model (SCM)

Laju pelindian nikel dari partikel laterit umumnya dimodelkan dengan **shrinking core model** yang menganggap reaksi terjadi pada permukaan inti yang menyusut seiring waktu. Untuk kontrol difusi melalui lapisan produk (product layer diffusion control), fraksi konversi $X$ terhadap waktu $t$ mengikuti persamaan:

$$1 - \frac{2}{3}X - (1 - X)^{2/3} = \frac{k_p \cdot C_{H^+} \cdot t}{\rho_p \cdot r_0^2}$$

di mana $k_p$ adalah konstanta laju difusi lapisan produk (m²/s), $C_{H^+}$ adalah konsentrasi asam sulfat bebas (kg/m³), $\rho_p$ adalah densitas partikel (kg/m³), dan $r_0$ adalah jari-jari awal partikel (m). Untuk kontrol reaksi kimia permukaan (chemical reaction control):

$$1 - (1 - X)^{1/3} = \frac{k_c \cdot C_{H^+} \cdot t}{\rho_p \cdot r_0}$$

di mana $k_c$ adalah konstanta laju reaksi kimia (m/s).

### 2.2 Persamaan Arrhenius untuk Ketergantungan Suhu

Pengaruh suhu terhadap laju pelindian diekspresikan melalui hukum Arrhenius:

$$k = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

di mana $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), $R$ adalah konstanta gas universal (8,314 J/(mol·K)), dan $T$ adalah suhu absolut (K). Untuk leaching nikel dari limonit, nilai $E_a$ tipikal berada pada rentang 50–85 kJ/mol, mengindikasikan regime campuran (*mixed kinetics*).

### 2.3 Model Pertumbuhan Scale Autoclave

Pertumbuhan scale pada permukaan autoclave sering dimodeli sebagai proses yang dikontrol oleh **nucleation and growth** dengan kinetika Avrami atau melalui model parabolic scaling law:

$$\delta(t) = \sqrt{2 \cdot D_s \cdot C_s \cdot t}$$

di mana $\delta(t)$ adalah tebal scale pada waktu $t$ (m), $D_s$ adalah koefisien difusi spesies pengendap (m²/s), dan $C_s$ adalah konsentrasi jenuh ekuivalen (kg/m³). Dalam paper Dickson et al. (2026), ketebalan scale umumnya mengikuti **dual-stage kinetics**: tahap awal (0–50 jam) berupa *induction period* dengan pertumbuhan lambat, diikuti tahap akselerasi yang linier atau parabolik.

### 2.4 Keseimbangan Massa Sistem HPAL

Untuk autoclave multi-compartment dengan volume slurry $V$ dan laju umpan bijih $\dot{m}_{ore}$:

$$\frac{dM_{Ni}}{dt} = \dot{m}_{ore} \cdot c_{Ni,ore} \cdot X_{Ni} - \dot{m}_{PLS} \cdot c_{Ni,PLS}$$

di mana $M_{Ni}$ adalah massa nikel terlarut dalam Pregnant Leach Solution (PLS), $X_{Ni}$ adalah fraksi recovery nikel (umumnya 90–95%), dan $c_{Ni,ore}$, $c_{Ni,PLS}$ berturut-turut adalah konsentrasi nikel dalam bijih umpan dan PLS.

### 2.5 Neraca Asam Sulfat

Konsumsi asam sulfat merupakan variabel ekonomi kunci. Kebutuhan stoikiometri direpresentasikan sebagai:

$$\dot{m}_{H_2SO_4}^{stoich} = \dot{m}_{ore} \cdot \left[ \alpha_{Fe} \cdot \frac{98}{56} + \alpha_{Al} \cdot \frac{98 \cdot 3}{54} + \alpha_{Mg} \cdot \frac{98}{24} \right]$$

dengan $\alpha_{Fe}$, $\alpha_{Al}$, $\alpha_{Mg}$ berturut-turut adalah fraksi Fe, Al, Mg yang terlarutkan (Andrameda et al., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem HPAL

Diagram alir proses HPAL terdiri dari beberapa unit utama: (1) **Slurry Preparation** (pencampuran bijih laterit kering dengan air proses dan asam sulfat recycle), (2) **Pre-heating** melalui penukar panas shell-and-tube, (3) **Autoclave Multi-Compartment** dengan agitator bertenaga tinggi, (4) **Flash Cooling** untuk depressurisasi slurry, (5) **CCD Thickener** untuk pemisahan PLS dari residu, dan (6) **Neutralization & Selective Precipitation** untuk pemulihan nikel.

### 3.2 SOP Pengendalian Scale

**Fase 1 — Pra-Operasi (Preparasi Feed):**
1. Karakterisasi umpan (XRD, ICP-OES, SEM-EDS) untuk menentukan rasio goethite/hematit dan konsentrasi Mg, Al.
2. Pengaturan konsentrasi solid dalam slurry (40–45% w/w) untuk mencegah underflow settling.
3. Pre-mixing asam sulfat pada konsentrasi 50–98% sesuai kebutuhan stoikiometri.

**Fase 2 — Operasi Autoclave:**
1. Pemanasan bertahap dari 80 °C ke 245–270 °C dengan ramp rate 2–3 °C/menit untuk mencegah thermal shock.
2. Pengaturan residence time 60–90 menit per kompartemen dengan agitasi tip speed 3–5 m/s.
3. Monitoring real-time parameter: T, P, pH slurry, ORP, dan konsentrasi asam bebas via *online titrator*.
4. Implementasi *controlled seeding* dengan recycle hematit slurry untuk mengurangi nucleation heterogeneous pada dinding.

**Fase 3 — Cleaning-in-Place (CIP):**
1. Drainase slurry dan rinse dengan air demin.
2. Sirkulasi larutan HCl 5–8% pada suhu 60–80 °C selama 4–6 jam untuk dissolusi scale.
3. Mechanical removal dengan high-pressure water jet (200–400 bar) untuk scale residual.
4. Inspeksi NDT (ultrasonic thickness gauge) untuk verifikasi ketebalan dinding autoclave.

### 3.3 Integrasi dengan Desulfurisasi Residu

Mengikuti Andrameda et al. (2024), residu HPAL (limonit leach residue) yang kaya Fe dan S dapat diproses lebih lanjut melalui *roasting-reduction* dengan agen desulfurisasi (CaO, Na₂CO₃, atau abu sekam padi). Suhu optimal roasting berada pada 800–900 °C dengan waktu tahan 60–90 menit untuk memperoleh konversi desulfurisasi >90% (Andrameda et al., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasional

Sebuah fasilitas HPAL hipotetis beroperasi dengan parameter berikut:
- Kapasitas umpan bijih: $\dot{m}_{ore} = 150$ ton/jam
- Komposisi bijih limonit: Ni = 1,2%; Fe = 45%; Al = 3,5%; Mg = 1,8%; S = 0,05%
- Suhu operasi: $T = 260 °C = 533,15$ K
- Tekanan: $P = 42$ bar
- Konsentrasi asam sulfat dalam slurry: $C_{H^+} = 80$ kg/m³
- Jari-jari partikel rata-rata: $r_0 = 75 \mu m = 7,5 \times 10^{-5}$ m
- Densitas partikel: $\rho_p = 3.500$ kg/m³
- Target recovery Ni: $X_{Ni} = 92\%$

### 4.2 Perhitungan Kinetika Leaching

Untuk energi aktivasi $E_a = 70$ kJ/mol dan faktor pre-eksponensial $A = 1{,}2 \times 10^4$ m/s (kondisi HPAL standar):

$$k_c = 1{,}2 \times 10^4 \cdot \exp\left(-\frac{70.000}{8{,}314 \times 533{,}15}\right) = 1{,}2 \times 10^4 \cdot \exp(-15{,}79)$$

$$k_c = 1{,}2 \times 10^4 \times 1{,}37 \times 10^{-7} = 1{,}64 \times 10^{-3} \text{ m/s}$$

Fraksi konversi pada waktu tinggal $t = 5.400$ s (90 menit):

$$1 - (1 - X)^{1/3} = \frac{(1{,}64 \times 10^{-3}) \times 80 \times 5.400}{3.500 \times (7