# 793 — High-Throughput Automated Guided Vehicle (AGV) dengan Transfer Daya Nirkabel Induktif: Magnetic Resonant Coupling, Misalignment Tolerance, dan In-Motion Opportunity Charging (SAE J2954)

**Domain:** Teknik Industri  
**Topik Spesialis:** Penerapan Wireless Power Transfer Induktif pada Sistem AGV untuk Operasi Logistik Tinggi  
**Standar & Referensi Utama:** SAE J2954, IEEE Std 802.11, IISE AGV Standards, ASME B56 untuk Material Handling, ASTM E3016 untuk Pengujian AGV

## 1. Pendahuluan dan Konteks Industri

Industri logistik dan manufaktur global mengalami transformasi struktural akibat pertumbuhan e-commerce yang mencapai CAGR 25% menurut laporan McKinsey 2023. Automated Guided Vehicles (AGV) telah menjadi infrastruktur inti untuk material handling otomatis, mengurangi intervensi manusia hingga 70% dan meningkatkan keselamatan operasional. Namun, bottleneck charging tradisional—baik kabel tetap maupun docking station—menyebabkan downtime rata-rata 15-20% waktu produktif AGV, yang secara langsung menekan throughput hingga 30-40%. Opportunity charging melalui inductive wireless power transfer (WPT) memungkinkan AGV beroperasi tanpa jeda, sehingga uptime dapat ditingkatkan hingga 50% pada fasilitas high-throughput dengan puluhan unit AGV yang bergerak kontinu.

Permasalahan operasional utama mencakup ketergantungan infrastruktur charging statis yang mahal (capex hingga Rp 500 juta per unit), risiko bahaya jatuh atau slip akibat kabel yang tergeletak, penurunan efisiensi daya akibat misalignment lateral hingga 30 cm dan angular misalignment pada lantai tidak rata, serta isu teknis seperti heat dissipation dan elektromagnetik interference (EMI) yang memerlukan shielding khusus. Dari perspektif ekonomi, biaya charging mencapai 10-15% dari total operasional gudang, sementara skalabilitas menjadi kendala pada fasilitas dengan throughput 50 unit/menit. Urgensi semakin tinggi karena regulasi ESG yang mendorong zero-emission operations dan pengurangan konsumsi energi; WPT mencapai efisiensi >80% sambil mengurangi emisi dari proses charging baterai konvensional.

Di konteks Indonesia, di mana banyak gudang modern di kawasan industri Bekasi, Cikarang, dan Surabaya masih bergantung pada sistem charging manual, implementasi WPT akan mengurangi ketergantungan impor baterai dan mendukung visi Industry 4.0. Adaptasi standar SAE J2954 (awalnya untuk kendaraan listrik) memerlukan penyesuaian frekuensi (20-100 kHz) dan geometri coil agar mendukung high-throughput tanpa mengorbankan safety dan reliability. Secara keseluruhan, WPT bukan sekadar teknologi, melainkan strategi bisnis strategis untuk meningkatkan kompetitif, mengurangi risiko operasional, dan mencapai sustainability yang terukur.

## 2. Landasan Teori & Formulasi Matematis

Magnetic Resonant Coupling (MRC) merupakan prinsip fundamental Wireless Power Transfer (WPT) modern yang memungkinkan transfer energi melalui medan magnetik resonan antara transmitter (Tx) dan receiver (Rx) coil. Dua rangkaian resonant dihubungkan melalui mutual inductance \(M\), sehingga energi dapat ditransfer secara efisien meskipun jarak dan orientasi tidak presisi.

Coupling coefficient \(k\) didefinisikan sebagai:
$$ k = \frac{M}{\sqrt{L_1 L_2}} $$
di mana \(L_1\) dan \(L_2\) adalah self-inductance Tx dan Rx coil, \(M\) adalah mutual inductance. Nilai \(k\) berkisar 0,1-0,5 untuk sistem loosely coupled yang mendukung misalignment tolerance tinggi.

Derivasi \(M\) mengikuti rumus Neumann:
$$ M = \frac{\mu_0}{4\pi} \iint \frac{\mathbf{dl_1} \cdot \mathbf{dl_2}}{r} $$
untuk coil lingkaran dengan diameter \(2r\), \(M\) dapat diaproksimasi sebagai fungsi jarak dan orientasi.

Untuk misalignment lateral \(d\) dan angular \(\theta\), model \(k(d,\theta)\) adalah:
$$ k(d) \approx \frac{k_0}{\sqrt{1 + (d/r)^2}} \cdot \cos\theta $$
di mana \(k_0\) adalah nilai maksimum pada \(d=0\). Toleransi misalignment hingga 30-50 cm dapat dipertahankan dengan \(k > 0,2\).

Pada sistem resonant, efisiensi daya transfer \(\eta\) dihitung dari model rangkaian seri-paralel:
$$ \eta = \frac{k^2 Q_1 Q_2}{(1 + k^2 Q_1 Q_2)} $$
di mana \(Q_1\) dan \(Q_2\) adalah faktor kualitas masing-masing rangkaian (biasanya 50-150). Derivasi berasal dari persamaan impedansi total \(Z_{total} = R_{Tx} + j\omega L_{Tx} + 1/(j\omega C_{Tx}) + R_{Rx} + j\omega L_{Rx} + 1/(j\omega C_{Rx})\), dengan power dissipated pada load \(R_L\).

Untuk in-motion opportunity charging, power output sebagai fungsi posisi \(x(t)\) (kecepatan AGV 1-2 m/s) adalah:
$$ P(x) = \frac{V_{Tx}^2 \cdot k(x)^2 \cdot R_L}{(R_{Tx} + R_L k(x)^2)^2 + (\omega L_{Tx} - 1/(\omega C_{Tx}))^2} \cdot \eta_{Rx} $$
di mana \(\omega = 2\pi f\) dan \(f\) adalah frekuensi resonansi. Frekuensi resonansi dasar dirumuskan sebagai:
$$ \omega_0 = \frac{1}{\sqrt{L_{eq} C_{eq}}} $$
dengan \(L_{eq}\) dan \(C_{eq}\) setara dari kedua rangkaian.

Derivasi efisiensi keseluruhan melibatkan pertimbangan heat loss \(P_{loss} = I^2 R\) dan safety interlock berdasarkan \(k < 0,3\) untuk mencegah overcurrent. Model ini memungkinkan simulasi real-time menggunakan software FEM untuk memastikan misalignment tolerance dan power delivery stabil selama pergerakan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Metodologi rekayasa WPT pada AGV bersifat sistematis dan berbasis simulasi-presisi untuk mencapai high-throughput tanpa downtime. Proses dimulai dari perancangan hingga implementasi dan maintenance.

Langkah-langkah implementasi:
1. Spesifikasi teknis: Daya butuh (5-10 kW per AGV), kecepatan maksimal (2 m/s), frekuensi operasi (20-100 kHz), dan toleransi misalignment (maksimal 30 cm lateral).
2. Perancangan geometri coil: Hitung jumlah lilitan \(N\), diameter, dan ketebalan kawat menggunakan rumus \(L = \mu_0 N^2 A / l\) untuk self-inductance. Pilih material (litz wire untuk mengurangi skin effect).
3. Pemilihan rangkaian resonant: Series-Series atau Series-Parallel dengan kalkulasi \(C = 1/(\omega_0^2 L)\).
4. Simulasi dan validasi: Gunakan ANSYS Maxwell atau COMSOL untuk menghitung \(k(d,\theta)\) dan efisiensi. Lakukan Design of Experiments (DOE) untuk analisis sensitivitas misalignment.
5. Integrasi sistem: Sinkronisasi dengan kontrol AGV (PLC atau ROS) melalui komunikasi IEEE 802.11 atau protokol khusus SAE J2954. Sertakan power electronics (inverter DC-AC, rectifier AC-DC, dan matching network).
6. Pengujian dan deployment: Validasi safety (UL 275001, CE), pengujian in-motion pada lintasan berjalan, dan monitoring real-time power delivery.

Diagram alir proses operasional:
```
Start
   ↓
Spesifikasi & Desain Coil
   ↓
Simulasi Coupling & Misalignment (FEM)
   ↓
Hitung Efisiensi & Power Budget
   ↓
Integrasi Control System & Safety Interlock
   ↓
Pengujian In-Motion & Calibration
   ↓
Deployment & Monitoring
   ↓
Maintenance (coil inspection setiap 6 bulan)
```

Arsitektur teknologi meliputi array Tx coil terpasang di lantai (biasanya 4-6 coil per AGV), Rx coil terintegrasi pada platform AGV, dan modul komunikasi untuk koordinasi multiple AGV. Standar operasional mengikuti SAE J2954 untuk power levels dan safety classification, ASME B56 untuk mekanikal handling, serta IEEE 802.11 untuk data transfer posisi real-time. Prosedur pemeliharaan mencakup inspeksi koil, kalibrasi frekuensi, dan dokumentasi traceability sesuai ISO 9001.

## 4. Studi Kasus Kuantitatif Industri

Kasus industri hipotetis: Gudang logistik dengan 20 unit AGV, masing-masing membutuhkan charging 6 kW selama in-motion. Parameter sistem: \(L_1 = L_2 = 150\,\mu\mathrm{H}\), \(k_0 = 0,4\), \(Q_1 = Q_2 = 80\), misalignment maksimal 25 cm, \(P_\mathrm{input} = 5\,\mathrm{kW}\), kecepatan AGV 1,5 m/s.

Langkah 1: Hitung \(k\) pada misalignment lateral \(d = 25\,\mathrm{cm}\) dengan \(r = 20\,\mathrm{cm}\):
$$ k = \frac{0,4}{\sqrt{1 + (0,25/0,2)^2}} \approx 0,32 $$
Langkah 2: Hitung efisiensi daya:
$$ \eta = \frac{(0,32)^2 \times 80 \times 80}{(1 + (0,32)^2 \times 80 \times 80)} \approx 0,78 \ (78\%) $$
Langkah 3: Hitung power ke beban:
$$ P_\mathrm{load} = \eta \times P_\mathrm{input} \approx 3,9\,\mathrm{kW} $$
Langkah 4: Analisis in-motion. Dengan posisi berubah setiap 0,1 detik, power fluctuasi maksimal 12% (dihitung dari \(k(x)\)). Perhitungan downtime savings: charging konvensional memerlukan 30 menit berhenti per siklus (jarak 50 m), sementara WPT menghasilkan 0 menit jeda. Savings uptime = \(20\% \times 20\,\mathrm{AGV} \times 8\,\mathrm{jam/hari} \times 250\,\mathrm{hari/tahun} \approx 80.000\,\mathrm{kWh/tahun}\).

Langkah 5: Perhitungan ekonomi. Biaya capex coil array Rp 8 juta/unit, opex maintenance 5% capex/tahun. ROI = \((\text{savings energi} \times \text{harga energi}) / \text{capex} \approx 1,8\) tahun. Interpretasi manajerial: Sistem viable untuk high-throughput karena efisiensi tetap >70% pada misalignment ekstrem, mengurangi biaya baterai pengganti hingga 35%, dan mendukung ESG dengan penghematan energi 18% dibandingkan charging statis.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

WPT AGV memiliki aplikasi lintas sektor yang kuat. Di supply chain, integrasi dengan ERP dan WMS memungkinkan scheduling charging otomatis berdasarkan route optimization, mengurangi inventori bateri cadangan hingga 60%. Di otomasi manufaktur, sinkronisasi dengan robotic arm untuk seamless material flow meningkatkan produktivitas lini hingga 45%. Manajemen biaya menggunakan Total Cost of Ownership (TCO) model yang mencakup capex infrastruktur, opex maintenance, dan cost per meter traveled (Rp 0,12/meter dengan WPT vs Rp 0,28/meter konvensional).

Dalam K3 dan ESG, WPT mengurangi risiko listrik (tidak ada kabel terpapar), emisi dari proses charging bateri (penurunan 22%), dan mendukung green logistics sesuai ISO 14001. Tantangan adopsi meliputi biaya awal tinggi, regulasi keselamatan, serta kebutuhan training operator untuk monitoring power delivery. Evaluasi manajerial dilakukan melalui KPI: throughput rate (unit/jam), system efficiency (>75%), dan cost avoidance (hemat Rp 2,3 juta/bulan per AGV). Hubungan dengan disiplin lain: Teknik listrik untuk power electronics, manajemen operasional untuk route planning, dan sistem informasi untuk real-time analytics.

Secara keseluruhan, modul ini memberikan kerangka lengkap bagi rekayasa dan manajemen untuk mengimplementasikan WPT pada AGV high-throughput, dengan penekanan pada mathematical rigor dan praktikalitas industri.