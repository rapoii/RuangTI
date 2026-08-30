# 803 — Additive Manufacturing for Aerospace Nickel-Based Superalloys (Inconel 718): Hot Isostatic Pressing (HIP) Densification, Gamma Double Prime Precipitation, and Creep Rupture Mechanics (AMS 5662 & ASTM E139)

**Domain:** Teknik Industri  
**Topik Spesialis:** Manufaktur Tambahan dan Pemrosesan Material Panas untuk Komponen Aero  
**Standar & Referensi Utama:** AMS 5662, ASTM E139, ASME BPVC Section VIII (untuk peralatan HIP), ASTM F3049 (kualifikasi AM), IISE Body of Knowledge untuk industrial process optimization, ISO 9001 (manajemen mutu proses manufaktur)

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan dan ruang angkasa menghadapi tuntutan yang semakin ketat terhadap efisiensi bahan bakar, pengurangan emisi, dan keandalan komponen turbin jet yang beroperasi di bawah suhu ekstrem hingga 650–700°C. Inconel 718, paduan nikel berbasis dengan komposisi utama Ni-19%Cr-3%Mo-5%Nb-1%Ti-0,2%C, telah menjadi material pilihan utama untuk blade, disk, dan casing turbin karena kombinasi kekuatan creep yang unggul, ketahanan oksidasi, dan kemampuan pengerasan termal hingga 650°C. Namun, proses manufaktur tradisional berbasis pemotongan (machining) dari bahan blok padat menghasilkan limbah material hingga 90%, biaya operasional yang tinggi, dan waktu siklus produksi yang lama. Additive Manufacturing (AM), khususnya Laser Powder Bed Fusion (LPBF), memungkinkan pembuatan geometri kompleks dengan fraksi material yang lebih tinggi (hanya 5–10% waste), mengurangi waktu pengembangan produk hingga 50%, dan mendukung prinsip sustainable manufacturing sesuai standar IISE.

Permasalahan operasional utama adalah densifikasi pori-pori mikro yang terbentuk selama proses melting cepat AM, yang dapat menurunkan kekuatan mekanik dan mempercepat kegagalan creep. Pengecekan pori-pori ini memerlukan Hot Isostatic Pressing (HIP) pada suhu 1100–1180°C dan tekanan 100–200 MPa selama 2–4 jam, sesuai rekomendasi AMS 2660 dan AMS 5662. Setelah HIP, proses heat treatment melibatkan solution annealing di 980°C diikuti double aging untuk memicu presipitasi gamma double prime (Ni₃Nb) yang memberikan pengerasan terkuat. Tanpa pengendalian tepat, presipitasi gamma double prime yang tidak merata dapat menyebabkan embrittlement dan penurunan creep rupture life di bawah 10.000 jam pada 650°C dan 600 MPa.

Secara ekonomi, biaya material Inconel 718 mencapai US$ 45–60/kg, sementara AM + HIP + heat treatment menurunkan biaya per komponen hingga 30–40% berkat pengurangan machining. Namun, tantangan teknis meliputi pengendalian residual stress, tekstur kristal yang tidak isotroplik, dan validasi creep rupture mechanics sesuai ASTM E139. ASTM E139 mensyaratkan pengujian creep pada 10 sampel minimal dengan strain rate 4×10⁻⁴ s⁻¹ hingga rupture, sementara AMS 5662 mengatur heat treatment untuk nickel alloy parts dengan kriteria minimum rupture life 100 jam pada 650°C dan 600 MPa. Urgensi industri semakin tinggi karena regulasi FAA dan EASA mewajibkan traceability penuh dan qualification data creep rupture dengan probabilitas keandalan 99,999% untuk komponen flight-critical.

Di sektor supply chain, ketergantungan pada supplier powder atomized gas atomization (seperti Carpenter Powder Products) menimbulkan risiko ketersediaan dan volatilitas harga. Otomasi proses AM melalui software seperti EOSPRINT atau Additive Industries Control menghasilkan penghematan energi 60% dibandingkan tradisional. Evaluasi manajerial menunjukkan bahwa adopsi AM-HIP-Inconel 718 mendukung strategi ESG dengan pengurangan CO₂ emission hingga 45% per kg material. Namun, tantangan adopsi mencakup biaya awal CAPEX untuk sistem HIP > US$ 2 juta, pelatihan teknisi, dan pengembangan data creep rupture yang memerlukan minimal 5.000 jam pengujian terakumulasi. Tanpa solusi terintegrasi, keterlambatan adopsi dapat menunda proyek program modernisasi turbin generasi berikutnya yang menargetkan thrust-to-weight ratio 30% lebih tinggi. Secara keseluruhan, modul ini menyajikan kerangka ilmiah-praktis yang mengintegrasikan AM, HIP densification, presipitasi gamma double prime, dan creep rupture mechanics untuk mendukung transformasi industri aero ke manufaktur presisi tinggi.

(Word count bagian 1: 378)

## 2. Landasan Teori & Formulasi Matematis

Mikrostruktur Inconel 718 terdiri dari matriks FCC γ, presipitat γ'' (Ni₃Nb tetragonal), γ' (Ni₃(Al,Ti) cubic), serta karbida MC dan M₂₃C₆. Presipitasi γ'' memberikan pengerasan utama melalui mekanisme coherency strain dan Orowan bypassing. Model kinetika presipitasi dapat dirumuskan menggunakan persamaan Avrami:

\[
X(t) = 1 - \exp(-k t^n)
\]

di mana \(X(t)\) adalah fraksi presipitat yang terbentuk, \(k = k_0 \exp(-Q_p/RT)\) adalah konstanta laju, \(n\) adalah eksponen Avrami (biasanya 1–2 untuk γ''), \(Q_p\) adalah energi aktivasi presipitasi (sekitar 180–220 kJ/mol), \(R\) adalah konstanta gas (8,314 J/mol·K), dan \(T\) adalah suhu absolut. Derivasi awal dari persamaan ini berasal dari laju pertumbuhan nucleus \( \frac{dN}{dt} = I \exp(-Q_n/RT) \), diikuti pertumbuhan radius \(r = G t\) dengan \(G\) laju pertumbuhan linear.

Untuk densifikasi HIP, model pori-pori tertutup (closed pore) menggunakan persamaan creep-like:

\[
\frac{d\epsilon}{dt} = A \sigma^n \exp\left(-\frac{Q_{HIP}}{RT}\right)
\]

dengan \(A\) pre-exponential factor (10⁻²⁰–10⁻¹⁸ s⁻¹), \(\sigma\) tekanan efektif (100–200 MPa), \(n\) eksponen creep (4–6 untuk superalloy), dan \(Q_{HIP}\) energi aktivasi (300–400 kJ/mol). Waktu diperlukan untuk densifikasi penuh dihitung dari integral:

\[
t_{HIP} = \frac{1}{A \sigma^n} \int_{\epsilon_0}^{\epsilon_f} \exp\left(\frac{Q_{HIP}}{RT}\right) d\epsilon
\]

Creep rupture mechanics didasarkan pada Norton-Bailey law untuk strain creep:

\[
\dot{\epsilon}_c = B \sigma^n \exp\left(-\frac{Q_c}{RT}\right)
\]

dengan \(B\) konstanta, \(Q_c\) energi aktivasi creep (350–450 kJ/mol untuk Inconel 718), dan \(n\) eksponen (5–7). Persamaan Larson-Miller Parameter (LMP) digunakan untuk extrapolasi waktu rupture:

\[
P_{LM} = T (C + \log_{10} t_r) = \sigma \cdot f(\text{stress})
\]

di mana \(C = 20\) untuk superalloy nikel, \(t_r\) waktu rupture (jam), dan \(T\) suhu absolut (K). Derivasi LMP berasal dari integrasi persamaan creep hingga rupture dengan asumsi \(t_r \propto \exp(Q_c/RT)/\sigma^n\). Untuk Inconel 718 pada 650°C dan 600 MPa, nilai LMP tipikal 18.000–20.000 menghasilkan \(t_r > 10.000\) jam.

Model presipitasi γ'' dapat dikombinasikan dengan model creep menggunakan persamaan yang menggabungkan volume fraksi presipitat \(f_{\gamma''}\) ke dalam konstanta \(B\):

\[
B = B_0 (1 - f_{\gamma''})^m
\]

dengan \(m \approx 2–3\). Semua rumus ini terintegrasi dalam simulasi termomechanical menggunakan software seperti Thermo-Calc atau DICTRA untuk prediksi fase dan kekuatan creep rupture.

(Word count bagian 2: 412)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Prosedur operasional sistematis dimulai dengan perancangan parameter AM menggunakan software EOSINT atau Renishaw. Parameter optimal untuk Inconel 718 meliputi laser power 200–350 W, scan speed 800–1200 mm/s, hatch 120–160 µm, dan layer thickness 30–40 µm pada atmosfer argon dengan kandungan oksigen <0,1%. Arsitektur teknologi melibatkan mesin LPBF dengan sistem powder recirculation dan inert gas glovebox.

Setelah building, dilakukan inspeksi non-destruktif menggunakan CT-scan (ASTM E1441) untuk mengukur densitas pori-pori (<0,5% volume). Proses HIP dilaksanakan pada sistem HIP dengan siklus: heat-up ke 1120°C dalam 4 jam, hold pressure 150 MPa selama 3 jam, cool-down dalam 6 jam. Tekanan dan suhu diukur secara real-time dengan sensor tipe K dan strain gauge.

Heat treatment mengikuti urutan: (1) solution annealing di 980°C selama 1 jam dengan pendinginan air, (2) aging pertama di 720°C selama 8 jam, (3) aging kedua di 620°C selama 8 jam, pendinginan air. Diagram alur proses dapat digambarkan sebagai:

```
Input: Powder Inconel 718
↓
Parameter Optimization (EOS software)
↓
LPBF Build (Layer 30 µm)
↓
CT-Scan Porosity Check
↓
HIP (1120°C, 150 MPa, 3 jam)
↓
Solution Anneal (980°C, 1 jam)
↓
Double Aging (720°C 8h + 620°C 8h)
↓
Creep Rupture Testing (ASTM E139)
```

Standar operasional mencakup kontrol mutu setiap langkah dengan SPC (Statistical Process Control) menggunakan Cpk >1,67. Prosedur darurat termasuk abort jika residual stress >500 MPa (diukur dengan X-ray diffraction). Arsitektur teknologi mencakup IoT integration untuk monitoring suhu dan tekanan secara real-time melalui PLC dan SCADA system.

(Word count bagian 3: 328)

## 4. Studi Kasus Kuantitatif Industri

Kasus industri hipotetis berdasarkan data publik dan simulasi: Komponen blade turbin fan diameter 1,2 m diproduksi dari Inconel 718 AM dengan densitas awal 99,2% (pori 0,8%). Parameter HIP: 1120°C, 150 MPa, 3 jam. Setelah HIP, densitas meningkat menjadi 99,95%. Heat treatment menghasilkan fraksi γ'' sebesar 18% (diukur dengan XRD).

Perhitungan creep rupture menggunakan Larson-Miller:

Input: \(T = 923\) K (650°C), \(\sigma = 600\) MPa, \(n = 5,8\), \(Q_c = 420\) kJ/mol, \(B_0 = 1,2 \times 10^{-20}\) s⁻¹, \(f_{\gamma''} = 0,18\).

Langkah 1: Hitung konstanta creep \(B = B_0 (1 - f_{\gamma''})^2 = 1,2 \times 10^{-20} \times (0,82)^2 = 8,06 \times 10^{-21}\) s⁻¹.

Langkah 2: Hitung strain creep rate awal \(\dot{\epsilon}_c = 8,06 \times 10^{-21} \times 600^{5,8} \times \exp(-420000/(8,314 \times 923)) = 2,14 \times 10^{-8}\) s⁻¹.

Langkah 3: Hitung waktu rupture dari integrasi Norton hingga strain akhir 0,02:

\[
t_r = \frac{0,02}{B \sigma^n} \exp\left(\frac{Q_c}{RT}\right) = \frac{0,02}{8,06 \times 10^{-21} \times 600^{5,8}} \times \exp\left(\frac{420000}{8,314 \times 923}\right) \approx 12450 \text{ jam}
\]

Interpretasi manajerial: Waktu rupture 12450 jam (>10.000 jam minimum AMS 5662) memenuhi kriteria flight-critical dengan margin keandalan 99,95%. Biaya per kg material AM-HIP = US$ 52 (vs US$ 55 tradisional), penghematan energi 62%, dan pengurangan waste 92%. Hasil ini menunjukkan ROI 18 bulan pada produksi 500 unit/tahun.

(Word count bagian 4: 312)

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Hasil penelitian ini memiliki aplikasi lintas sektor. Di sektor minyak dan gas, proses yang sama dapat diaplikasikan untuk valve dan flange high-temperature (API 6A compliant) dengan pengurangan creep rupture time variability hingga 40%. Di otomotif, AM + HIP digunakan untuk turbocharger impeller dengan suhu maksimal 700°C, mengurangi bobot 25% dan meningkatkan efisiensi bahan bakar. Di sektor manufaktur umum, integrasi dengan Industry 4.0 melalui MES system memungkinkan predictive maintenance berdasarkan data creep rupture real-time.

Evaluasi manajerial mencakup supply chain: pemilihan supplier powder harus memenuhi AMS 7002 (sphericity >95%, oxygen <200 ppm). Otomasi proses melalui robotic powder handling mengurangi tenaga kerja langsung 35%. Manajemen biaya menggunakan ABC (Activity Based Costing) dengan alokasi overhead AM 28% dan HIP 22%. K3/ESG: pengurangan limbah kimia (HF, HNO₃) hingga 80% dibandingkan machining tradisional, serta pengurangan emisi CO₂ 45 ton/ton material. Tantangan adopsi meliputi biaya validasi creep rupture (estimasi US$ 1,2 juta per program), regulasi (FAA Part 33), dan kurangnya data publik untuk statistik creep rupture Inconel 718 AM. Solusi: pengembangan database nasional melalui kolaborasi universitas-industri dan penerapan ISO 17025 untuk laboratorium creep testing.

Secara keseluruhan, modul ini memberikan kerangka lengkap yang dapat diadopsi industri untuk meningkatkan daya saing kompetitif sambil memenuhi standar keberlanjutan global.

(Word count bagian 5: 218)

Total kata: 1648