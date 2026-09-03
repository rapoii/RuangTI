# 804 — Dinamika Fluida Sleeve Shot dalam High-Pressure Die Casting: Eliminasi Porositas Gas dengan Bantuan Vakum, Keretakan Termal Die, dan Model Hidraulik PQ2 (Standar NADCA)

**Domain:** Teknik Industri  
**Topik Spesialis:** Dinamika Fluida Sleeve Shot dalam High-Pressure Die Casting (HPDC) untuk Eliminasi Porositas Gas dengan Bantuan Vakum, Manajemen Keretakan Termal Die, dan Model Hidraulik PQ2 (Standar NADCA)  
**Standar & Referensi Utama:** NADCA (North American Die Casting Association) Standards, ISO 9001:2015 untuk manajemen mutu, ASME B16.5 untuk perhitungan tekanan dan desain piping, ASTM E8 untuk pengujian mekanik, IEEE 519 untuk analisis harmonik sistem otomasi, serta APICS untuk pengelolaan rantai pasok.

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur komponen otomotif, aeroangkasa, dan elektronik telah bergantung pada High-Pressure Die Casting (HPDC) sebagai metode produksi massal dengan tingkat kecepatan hingga 100 siklus per jam. Proses ini melibatkan injeksi logam cair bertekanan tinggi (10–150 MPa) ke dalam cetakan matriks yang didinginkan secara intensif, menghasilkan produk dengan toleransi dimensi ketat dan sifat mekanik superior. Namun, sleeve shot—tabung horizontal atau vertikal tempat plunger mendorong logam cair—menjadi titik kritis di mana dinamika fluida menjadi penentu utama kualitas akhir produk. Permasalahan utama meliputi entrapment udara yang menyebabkan gas porosity, keretakan termal akibat siklus pemanasan-pendinginan berulang, serta soldering (sticking) logam ke dinding cetakan yang secara signifikan mengurangi umur matriks.

Urgensi eliminasi porositas gas melalui vacuum-assisted HPDC semakin mendesak karena porositas dapat menurunkan kekuatan lentur hingga 30–50% pada komponen ringan seperti casing roda gigi mobil listrik. Data industri menunjukkan bahwa porositas gas menyumbang 60–70% dari total defect casting di pabrik HPDC, dengan biaya scrap hingga 8–12% dari nilai produksi tahunan. Keretakan termal pada sleeve shot disebabkan oleh thermal fatigue, di mana suhu permukaan sleeve naik hingga 400–600°C selama siklus injeksi, diikuti pendinginan cepat hingga 100–150°C. Hal ini menghasilkan tegangan termal yang berkontribusi pada crack propagation, mengurangi umur sleeve dari 500.000 siklus menjadi kurang dari 200.000 siklus pada logam aluminium A380. Soldering semakin memperburuk kondisi dengan membentuk lapisan oksida dan logam yang lengket, sehingga memerlukan intervensi manual yang meningkatkan biaya tenaga kerja hingga 15%.

Secara ekonomi, perusahaan manufaktur seperti supplier komponen Ford dan Tesla menghadapi tekanan regulasi ESG (Environmental, Social, Governance) yang mewajibkan pengurangan limbah hingga 20% pada 2030. Secara teknis, tanpa model hidraulik PQ2 yang terintegrasi, aliran turbulen di sleeve shot menyebabkan ketidakseragaman tekanan, menghasilkan porositas tidak merata dan peningkatan reject rate. NADCA Standard 2019 menekankan bahwa vacuum-assisted gas porosity elimination dapat mengurangi porositas hingga 90% dengan mengurangi volume udara entrapped dari 2–5% menjadi di bawah 0,5%. Namun, implementasi ini menuntut pemahaman mendalam terhadap fluid dynamics, termasuk persamaan Navier-Stokes untuk aliran laminar-turbulen, serta model thermal fatigue menggunakan hukum Coffin-Manson.

Dalam konteks operasional, perusahaan-perusahaan kelas dunia seperti Toyota dan BMW telah mengadopsi PQ2 hydraulic modeling untuk memprediksi velocity profile dan pressure drop di sleeve shot, mengurangi downtime maintenance hingga 40%. Tantangan utama meliputi biaya awal vacuum system (Rp 500 juta–Rp 2 miliar per lini produksi) serta kebutuhan pelatihan teknisi untuk monitoring real-time. Tanpa pengetahuan mendalam ini, perusahaan berisiko kehilangan kompetitifitas di pasar global yang menuntut zero-defect casting. Oleh karena itu, modul ini menyajikan kerangka lengkap yang mengintegrasikan teori fluida, metodologi rekayasa, serta evaluasi manajerial untuk mencapai efisiensi tinggi sesuai standar industri.

## 2. Landasan Teori & Formulasi Matematis

Dinamika fluida sleeve shot dalam HPDC didasarkan pada persamaan Navier-Stokes yang merepresentasikan aliran viskoelastis logam cair. Persamaan momentum tak terperinci adalah:

\[
\rho \left( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}
\]

di mana \(\rho\) adalah densitas logam cair (kg/m³), \(\mathbf{v}\) adalah vektor kecepatan (m/s), \(p\) adalah tekanan (Pa), \(\mu\) adalah viskositas dinamis (Pa·s), dan \(\mathbf{f}\) adalah gaya tubuh termasuk gravitasi. Untuk aliran laminar di sleeve shot dengan diameter \(D = 50\) mm dan kecepatan \(v = 1\) m/s, Reynolds number dinyatakan sebagai:

\[
Re = \frac{\rho v D}{\mu}
\]

dengan \(\mu\) untuk A380 aluminium sekitar \(1.2 \times 10^{-3}\) Pa·s pada suhu 650°C. Nilai \(Re > 2000\) menandakan transisi ke aliran turbulen, yang meningkatkan porositas hingga 3–4% akibat entrapment udara.

Persamaan Bernoulli untuk tekanan di ujung sleeve shot adalah:

\[
P + \frac{1}{2} \rho v^2 + \rho g h = P_0 + \frac{1}{2} \rho v_0^2
\]

di mana \(P_0\) adalah tekanan atmosferik. Vacuum-assisted eliminasi porositas gas mengurangi volume udara entrapped melalui persamaan:

\[
V_{\text{air, reduced}} = V_{\text{total}} \left(1 - \frac{P_{\text{vac}}}{P_0}\right)
\]

dengan \(P_{\text{vac}} = 0.05\) bar menghasilkan pengurangan porositas gas sebesar 85–92%. Model thermal fatigue menggunakan hukum Coffin-Manson untuk siklus termal:

\[
\frac{\Delta \epsilon}{2} = \epsilon_f' (2N_f)^c
\]

di mana \(\Delta \epsilon\) adalah strain termal, \(\epsilon_f'\) adalah strain fracture, \(N_f\) adalah siklus kelelahan, dan \(c\) adalah eksponen (biasanya -0.5 hingga -0.6 untuk baja cetakan). Derivasi dari persamaan ini menunjukkan bahwa penurunan suhu gradient dari 300°C/menjadi 150°C/menurunkan \(N_f\) dari 800 menjadi 2500 siklus.

Untuk PQ2 hydraulic modeling, persamaan Darcy-Weisbach digunakan untuk menghitung penurunan tekanan akibat gesekan:

\[
\Delta P = f \frac{L}{D} \frac{\rho v^2}{2}
\]

dengan faktor gesek \(f = 0.316 Re^{-0.25}\) untuk aliran turbulen. Soldering dihindari dengan memodelkan kohesi logam-logam menggunakan persamaan Young-Laplace untuk sudut kontak:

\[
\Delta P = \sigma \left( \frac{1}{R_1} + \frac{1}{R_2} \right)
\]

di mana \(\sigma\) adalah tegangan permukaan (N/m) dan \(R_1, R_2\) adalah radius kelengkungan. Derivasi ringkas menunjukkan bahwa vacuum meningkatkan kohesi dengan mengurangi oksida layer tebal hingga 0.1 mm, sehingga mengurangi soldering defect hingga 70%. Semua rumus ini diintegrasikan dalam simulasi CFD (Computational Fluid Dynamics) menggunakan ANSYS Fluent untuk memprediksi distribusi suhu dan tekanan secara simultan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi sistem vacuum-assisted HPDC mengikuti alur proses sebagai berikut: (1) Persiapan sleeve shot dengan coating khusus (TiN atau CrN) untuk mengurangi thermal fatigue; (2) Pemasangan sensor tekanan dan termokopel pada sleeve shot; (3) Aplikasi vacuum hingga -0.8 bar selama 2–3 detik sebelum injeksi; (4) Injeksi logam cair dengan kecepatan 2–5 m/s; (5) Post-vacuum purging untuk menghilangkan sisa gas; serta (6) Monitoring real-time menggunakan PLC berbasis IEEE 519 untuk harmonik listrik pada pompa vakum.

Diagram alir proses operasional dapat digambarkan sebagai:

```
Start
  ↓
Sleeve Preparation & Coating
  ↓
Sensor Calibration (Pressure & Temp)
  ↓
Vacuum Application (-0.8 bar, 2-3s)
  ↓
Injeksi HPDC (10-150 MPa)
  ↓
Post-Vacuum Purging
  ↓
Cooling Cycle & Thermal Fatigue Monitoring
  ↓
Quality Inspection (NADCA PQ2)
  ↓
Maintenance Schedule
  ↓
End
```

Arsitektur teknologi mencakup sistem otomasi dengan sensor tipe K-type thermocouple untuk suhu sleeve (rentang 200–700°C) dan manometer digital untuk tekanan. Prosedur operasional NADCA Standard 2019 mengharuskan validasi setiap siklus dengan pengukuran porositas menggunakan X-ray atau ultrasonic testing. Untuk PQ2 modeling, dilakukan simulasi CFD sebelum produksi massal dengan input parameter: diameter sleeve \(D = 40–60\) mm, panjang \(L = 300\) mm, dan kecepatan plunger \(v_p = 1–3\) m/s. Langkah-langkah implementasi meliputi: (a) pengumpulan data operasional selama 100 siklus; (b) kalibrasi model hidraulik; (c) prediksi umur sleeve berdasarkan siklus termal; serta (d) integrasi dengan MES (Manufacturing Execution System) untuk traceability.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan kasus nyata pabrik HPDC produksi casing roda gigi aluminium A380 dengan volume produksi 50.000 pcs/bulan. Parameter input: diameter sleeve \(D = 50\) mm, panjang \(L = 350\) mm, kecepatan injeksi \(v = 2\) m/s, suhu awal 650°C, dan tekanan injeksi 80 MPa. Langkah kalkulasi Reynolds number:

\[
Re = \frac{\rho v D}{\mu} = \frac{2.7 \times 10^3 \times 2 \times 0.05}{1.2 \times 10^{-3}} = 2250
\]

Nilai \(Re > 2000\) menunjukkan transisi turbulen, menghasilkan porositas gas estimasi 2.8% berdasarkan model entrapment. Dengan vacuum-assisted (\(P_{\text{vac}} = 0.05\) bar), volume udara reduced dihitung sebagai:

\[
V_{\text{reduced}} = 0.35 \times (1 - 0.05/101.3) = 0.348 \, \text{m}^3
\]

Penurunan porositas menjadi 0.35%, mengurangi scrap rate dari 7% menjadi 1.2%. Perhitungan thermal fatigue menggunakan Coffin-Manson:

\[
\frac{\Delta \epsilon}{2} = 0.6 \times (2N_f)^{-0.55} \implies N_f = \left( \frac{0.6}{0.003} \right)^{1/-0.55} \approx 1420 \, \text{siklus}
\]

Sebelumnya tanpa vacuum, \(N_f\) hanya 620 siklus. Interpretasi manajerial: peningkatan umur sleeve 130% menghemat biaya maintenance Rp 18 juta/siklus, serta pengurangan reject cost Rp 2.4 juta/pcs. Hasil akhir menunjukkan ROI 4.2 tahun untuk investasi vacuum system senilai Rp 1.2 miliar, dengan peningkatan produktivitas 22% dan kepuasan pelanggan nol-defect.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Dinamika fluida sleeve shot dalam HPDC memiliki aplikasi lintas sektor yang luas. Di sektor otomotif, sistem ini mendukung produksi komponen EV dengan kekuatan tensile >300 MPa dan porositas <0.5%. Di aeroangkasa, model PQ2 digunakan untuk memenuhi AS9100D requirements pada komponen turbin pesawat. Integrasi dengan supply chain memerlukan kontrak ketat dengan pemasok logam (misalnya AlSi9Cu3) untuk konsistensi densitas, mengurangi variasi batch hingga 15%. Otomasi melalui PLC dan IoT memungkinkan remote monitoring, mengurangi downtime dari 4 jam menjadi 45 menit per siklus.

Dalam manajemen biaya/teknik, evaluasi ROI dilakukan dengan menghitung Net Present Value (NPV) berdasarkan penghematan scrap dan maintenance. Tantangan adopsi meliputi biaya awal tinggi dan kebutuhan pelatihan teknisi sesuai standar APICS. Untuk K3 (Kesehatan dan Keselamatan), vacuum system mengurangi risiko kebocoran gas berbahaya, sementara ESG menekankan pengurangan energi (pompa vakum hemat 30% dibandingkan tanpa vacuum). Evaluasi manajerial menunjukkan bahwa perusahaan yang mengadopsi modul ini mencapai pengurangan defect 65%, peningkatan efisiensi rantai pasok 28%, serta kepatuhan regulasi ISO 14001. Tantangan utama adalah integrasi data real-time dengan ERP system untuk predictive maintenance berbasis model hidraulik PQ2. Secara keseluruhan, pendekatan ini memberikan keunggulan kompetitif melalui kualitas dan keberlanjutan operasional.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
