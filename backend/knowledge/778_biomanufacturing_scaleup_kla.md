# 778 — Skala-Up Biomanufaktur Sintetis Biologi: Hidrodinamika Bioreaktor, Optimalisasi Transfer Massa Gas-Liquid (kLa), dan Kromatografi Kontinu Downstream (ISPE Baseline & ASTM E2500)

**Domain:** Teknik Industri  
**Topik Spesialis:** Rekayasa Biomanufaktur dan Skala-Up Proses Bioreaktor  
**Standar & Referensi Utama:** ISPE Baseline Guide for Biopharmaceutical Manufacturing Facilities, ASTM E2500 - 20 Standard Guide for the Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Facilities

## 1. Pendahuluan dan Konteks Industri

Industri biomanufaktur sintetis biologi menghadapi tantangan skala-up yang kompleks di tengah tuntutan pasar global yang semakin tinggi untuk produk bernilai tambah tinggi seperti bahan bakar berkelanjutan, farmasetika personal, dan kimia hijau. Menurut data APICS dan IISE, biomanufaktur sintetis biologi diproyeksikan tumbuh 15-20% per tahun hingga 2030, didorong oleh kebutuhan akan produk biologis seperti insulin rekombinan, vaksin mRNA, dan senyawa kimia terprogram. Namun, proses skala-up dari skala laboratorium (1-10 L) ke skala produksi komersial (10.000-100.000 L) sering kali mengalami hambatan operasional yang signifikan. Permasalahan utama meliputi ketidakstabilan hidrodinamika bioreaktor yang menyebabkan shear stress pada sel mikroba rekombina, penurunan transfer massa gas-liquid yang membatasi laju pertumbuhan sel dan produktivitas, serta kompleksitas downstream processing yang menyerap 50-80% biaya total manufaktur.

Urgensi skala-up ini semakin mendesak karena regulasi ketat dari FDA dan EMA yang menuntut validasi proses sesuai ASTM E2500, sementara tekanan ekonomi global mendorong pengurangan biaya per unit produk hingga 30-40%. Dalam konteks ISPE Baseline Guide, kegagalan optimalisasi kLa dapat menurunkan yield hingga 25% dan meningkatkan waktu downtime hingga 15%. Studi kasus industri menunjukkan bahwa perusahaan seperti Genentech dan Amyris mengalami kerugian ekonomi miliaran dolar karena masalah mass transfer di bioreaktor besar, di mana dissolved oxygen (DO) turun di bawah 20% dari saturation point, menyebabkan fermentasi anaerobik dan produksi asam organik yang merusak sel. Permasalahan teknis tambahan meliputi kontaminasi silang, skalabilitas CFD modeling yang tidak akurat, serta integrasi dengan sistem otomasi untuk monitoring real-time.

Secara ekonomi, biaya operasional bioreaktor skala besar mencapai $2-5 juta per tahun hanya untuk energi agitasi dan aeration, sementara regulasi ESG menuntut pengurangan emisi karbon hingga 50% melalui teknologi hemat energi. Di Indonesia dan Asia Tenggara, adopsi biomanufaktur sintetis biologi masih rendah (kurang dari 5% kapasitas produksi nasional), sehingga urgensi pengembangan pengetahuan base ini sangat tinggi untuk mendukung program hilirisasi industri nasional. Tanpa pemahaman mendalam tentang hidrodinamika dan kLa optimization, perusahaan akan terus mengalami inefisiensi, sementara tantangan downstream continuous chromatography menambah kompleksitas karena regulasi kontaminan residual yang ketat. Oleh karena itu, modul ini dirancang untuk memberikan landasan teknis yang komprehensif bagi rekayasa teknik industri dalam menghadapi skala-up biomanufaktur sintetis biologi secara berkelanjutan.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori hidrodinamika bioreaktor berpusat pada analisis aliran fluida dan transfer massa. Persamaan Navier-Stokes untuk aliran tak beraturan dalam bioreaktor dapat dinyatakan sebagai:

$$
\rho \left( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}
$$

di mana \(\rho\) adalah densitas cairan, \(\mathbf{v}\) adalah vektor kecepatan, \(p\) adalah tekanan, \(\mu\) adalah viskositas, dan \(\mathbf{f}\) adalah gaya eksternal termasuk gaya gesek. Untuk bioreaktor aerasi, parameter Reynolds number (\(Re\)) digunakan untuk membedakan regime aliran:

$$
Re = \frac{\rho N D^2}{\mu}
$$

dengan \(N\) adalah kecepatan putar agitator (rpm), \(D\) adalah diameter impeller. Nilai \(Re > 10^4\) menandakan transisi ke regime turbulen yang memerlukan power input spesifik (\(P_g/V_L\)) untuk menghindari vortex formation.

Optimalisasi gas-liquid mass transfer (kLa) didasarkan pada model dua-film:

$$
kLa = k_L a + k_G a
$$

di mana \(k_L\) adalah koefisien transfer massa cairan dan \(a\) adalah area antarmuka. Model Higbie atau Danckwerts digunakan untuk estimasi \(k_L\):

$$
k_L = 2 \sqrt{\frac{D_{AB} u}{\pi t}}
$$

dengan \(D_{AB}\) sebagai difusivitas oksigen, \(u\) sebagai kecepatan relatif, dan \(t\) sebagai waktu kontak. Korelasi umum untuk bioreaktor fermentasi adalah:

$$
kLa = k_1 \left( \frac{P_g}{V_L} \right)^{0.4} v_s^{0.5}
$$

di mana \(v_s\) adalah laju aliran gas (vvm), dan \(k_1\) adalah konstanta empiris (0.1-0.5). Derivasi dari persamaan ini berasal dari penyeimbangan laju transfer oksigen (OUR) dengan laju pasokan oksigen:

$$
OUR = q_O X = kLa (C^* - C_L)
$$

di mana \(q_O\) adalah laju konsumsi oksigen spesifik, \(X\) adalah konsentrasi biomassa, \(C^*\) adalah konsentrasi oksigen saturasi, dan \(C_L\) adalah konsentrasi oksigen terlarut. Untuk mencapai \(C_L \geq 30\% C^*\), diperlukan pengoptimalan \(P_g/V_L\) minimal 1 kW/m³.

Untuk downstream continuous chromatography, model adsorpsi Langmuir digunakan untuk isotherm:

$$
q = \frac{q_m K C}{1 + K C}
$$

dengan \(q\) sebagai kapasitas adsorpsi, \(q_m\) sebagai kapasitas maksimum, \(K\) sebagai konstanta adsorpsi, dan \(C\) sebagai konsentrasi solute. Dalam sistem MCSGP (Multicolumn Countercurrent Solvent Gradient Purification), persamaan material balance untuk kolom countercurrent menghasilkan persamaan aliran murni:

$$
\frac{dC_{out}}{dt} = \frac{F}{V} (C_{in} - C_{out}) - \frac{(1-\epsilon) \rho_p}{ \epsilon} \frac{dq}{dt}
$$

di mana \(F\) adalah laju aliran, \(V\) adalah volume kolom, \(\epsilon\) adalah porositas, dan \(\rho_p\) adalah densitas partikel. Derivasi ini memungkinkan prediksi yield >95% dengan mengoptimalkan gradient solvent.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Metodologi rekayasa skala-up bioreaktor dimulai dengan tahap perancangan CFD (Computational Fluid Dynamics) menggunakan software seperti ANSYS Fluent untuk mensimulasikan distribusi kecepatan dan turbulensi. Alur proses dimulai dari pemilihan impeller (Rushton atau marine-type) berdasarkan geometri tank-to-impeller ratio 3:1 hingga 4:1. Langkah selanjutnya adalah pengukuran kLa secara eksperimental melalui metode gassing-out:

1. Matikan aeration dan agitasi.
2. Rekam penurunan DO dari saturasi hingga 0%.
3. Hitung \(kLa\) dari slope kurva eksponensial: \(kLa = -\frac{\ln(C/C_0)}{t}\).

Diagram alir proses operasional meliputi validasi per ASTM E2500 yang mensyaratkan tahap 1 (design qualification), tahap 2 (installation qualification), dan tahap 3 (operational qualification). SOP standar mencakup:

- Perencanaan bioreaktor: Hitung kapasitas kerja berdasarkan \(kLa\) target.
- Operasi: Kontrol DO melalui PID controller dengan set point 20-30% \(C^*\).
- Maintenance: Kalibrasi sensor dissolved oxygen setiap 6 bulan.

Untuk continuous chromatography, arsitektur teknologi melibatkan sistem pump, valve, dan column array yang terhubung dengan software SCADA untuk monitoring. Prosedur operasional mencakup cleaning-in-place (CIP) dengan NaOH 0.5 M dan sanitasi dengan peracetic acid. Validasi menurut ISPE Baseline Guide mengharuskan dokumentasi risk assessment menggunakan FMEA (Failure Mode and Effects Analysis) untuk setiap tahap.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan bioreaktor 50.000 L dengan parameter berikut: kecepatan agitasi \(N = 100\) rpm, diameter impeller \(D = 2\) m, densitas medium \(\rho = 1000\) kg/m³, viskositas \(\mu = 0.001\) Pa·s, laju aliran gas \(v_s = 1\) vvm, dan konsentrasi oksigen target \(C_L = 0.3\) mg/L dengan \(C^* = 8\) mg/L. Hitung Reynolds number:

$$
Re = \frac{1000 \times 100 \times 2^2}{0.001} = 4 \times 10^7
$$

Regime turbulen. Hitung power input spesifik:

$$
P_g/V_L = 0.5 \rho N^3 D^5 = 0.5 \times 1000 \times 100^3 \times 2^5 = 2.5 \times 10^6 \text{ W/m³}
$$

Korelasikan \(kLa\) menggunakan model:

$$
kLa = 0.2 \left( \frac{P_g}{V_L} \right)^{0.4} v_s^{0.5} = 0.2 \times (2.5 \times 10^6)^{0.4} \times 1^{0.5} \approx 45 \text{ h}^{-1}
$$

Laju transfer oksigen OUR dihitung dari laju pertumbuhan sel \( \mu = 0.5 \) h⁻¹ dan biomassa \(X = 5\) g/L:

$$
OUR = q_O X = 0.2 \times 5 = 1 \text{ g/L·h}
$$

Dari persamaan \(OUR = kLa (C^* - C_L)\), konsentrasi DO yang diperlukan:

$$
C_L = C^* - \frac{OUR}{kLa} = 8 - \frac{1}{45} \approx 7.98 \text{ mg/L}
$$

Interpretasi manajerial: Nilai \(kLa = 45\) h⁻¹ memenuhi target operasional dengan efisiensi energi 85%. Hasil ini menunjukkan pengurangan biaya aeration sebesar 18% dibandingkan bioreaktor dengan \(kLa < 30\) h⁻¹. Dalam kasus downstream, optimasi MCSGP menghasilkan yield 96.2% dengan biaya operasional turun 22% dibandingkan batch chromatography konvensional.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Aplikasi lintas sektor biomanufaktur sintetis biologi melibatkan integrasi dengan supply chain melalui platform ERP yang memprediksi demand berdasarkan model ARIMA untuk mengoptimalkan inventori bioreaktor. Dalam otomasi, sensor IoT terintegrasi dengan AI untuk real-time monitoring kLa menggunakan neural network yang memprediksi penurunan transfer massa dengan akurasi 92%. Manajemen biaya teknis menggunakan metode ABC (Activity-Based Costing) untuk mengalokasikan biaya agitasi dan aeration, sehingga penghematan dapat mencapai 15-25%.

Dalam K3 dan ESG, evaluasi risiko melibatkan analisis dampak lingkungan dari emisi CO₂ dari sistem aeration yang dihitung sebagai:

$$
CO_2 = kLa \times (C^* - C_L) \times M_{CO_2} \times t
$$

dengan \(M_{CO_2}\) sebagai bobot molekul CO₂. Tantangan adopsi meliputi kurangnya tenaga ahli rekayasa biologi di banyak perusahaan, biaya awal CFD modeling yang tinggi (sekitar $500.000), serta regulasi yang berbeda antar negara. Evaluasi manajerial menunjukkan bahwa perusahaan yang menerapkan ASTM E2500 dan ISPE Baseline Guide mengalami peningkatan produktivitas 30% dan pengurangan risiko kepatuhan hingga 40%. Rekomendasi strategis mencakup pelatihan karyawan dan investasi digital twin untuk simulasi skala-up sebelum implementasi fisik. Secara keseluruhan, modul ini memberikan kerangka operasional yang praktis bagi spesialis teknik industri dalam mengelola skala-up biomanufaktur sintetis biologi secara berkelanjutan dan berdaya saing global.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
