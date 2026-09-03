# 776 — Closed-Loop Remanufacturing Baterai Lithium-Ion: Optimasi Yield Recyling Hidrometallurgi dan Kinetika Leaching Black Mass

**Domain:** Teknik Industri  
**Topik Spesialis:** Rekayasa Proses Recyling Baterai Lithium-Ion  
**Standar & Referensi Utama:** ISO 12405, IEEE 2933  

## 1. Pendahuluan dan Konteks Industri

Industri baterai lithium-ion (Li-ion) telah mengalami pertumbuhan eksponensial seiring dengan adopsi kendaraan listrik (EV) dan penyimpanan energi terbarukan. Menurut data industri tahun 2023, pasar global baterai Li-ion mencapai nilai lebih dari USD 40 miliar, dengan proyeksi pertumbuhan tahunan rata-rata 18% hingga 2030. Namun, semakin banyaknya baterai yang mencapai akhir siklus hidup (end-of-life/EOL) menciptakan tantangan operasional, ekonomi, dan teknis yang mendesak. Sekitar 95% baterai Li-ion yang diproduksi hingga saat ini akan mencapai EOL dalam 5–10 tahun ke depan, menghasilkan lebih dari 1 juta ton baterai bekas per tahun di Eropa saja pada 2030.

Urgensi pemulihan material melalui closed-loop remanufacturing semakin tinggi karena keterbatasan sumber daya kritis seperti litium (Li), kobalt (Co), nikel (Ni), dan grafit. Ekstraksi primer dari tambang menghasilkan emisi karbon yang signifikan, sementara pemulihan melalui hidrometallurgi dapat mengurangi emisi hingga 70–90% dibandingkan produksi baru. Permasalahan operasional utama meliputi rendahnya yield recyling (rata-rata hanya 60–80% untuk Co dan Li), biaya operasional tinggi akibat proses leaching yang memerlukan waktu lama dan bahan kimia korosif, serta volatilitas harga material kritis yang dipengaruhi oleh rantai pasok geopolitik. Secara ekonomi, biaya pemulihan material mencapai USD 5–15/kg untuk black mass, sementara nilai material yang dipulihkan bisa mencapai USD 20–50/kg, sehingga closed-loop remanufacturing berpotensi mengurangi biaya rantai pasok hingga 30% dan meningkatkan margin keuntungan.

Dari perspektif teknis, tantangan utama adalah kinetika leaching black mass yang dipengaruhi oleh parameter seperti suhu, konsentrasi asam, rasio padat-cair, dan ukuran partikel. Rendahnya efisiensi leaching menyebabkan residu material beracun yang sulit didaur ulang, serta risiko lingkungan akibat limbah asam dan logam berat. Regulasi seperti EU Battery Regulation (Regulation (EU) 2023/1542) mewajibkan target recovery rate minimal 90% untuk Co dan Li pada 2031, sementara standar ISO 12405 menekankan persyaratan kualitas dan keamanan baterai daur ulang. IEEE 2933, sebagai standar terkait keberlanjutan dan traceability data, semakin relevan dalam memastikan traceability material dari EOL hingga remanufacturing.

Tanpa optimalisasi yield dan kinetika leaching, industri akan mengalami kerugian ekonomi yang masif, dengan estimasi kerugian global mencapai USD 10 miliar per tahun akibat material yang tidak terpulihkan. Oleh karena itu, pengembangan sistem closed-loop remanufacturing berbasis hidrometallurgi menjadi krusial untuk mencapai tujuan circular economy dan Sustainable Development Goals (SDG) 12 dan 13. Pendekatan ini tidak hanya mengatasi masalah lingkungan tetapi juga memperkuat ketahanan rantai pasok nasional dan global.

## 2. Landasan Teori & Formulasi Matematis

Proses recyling hidrometallurgi baterai Li-ion melibatkan pelarutan black mass yang mengandung oksida litium, kobalt, nikel, dan mangan dalam media asam. Reaksi utama leaching adalah:

\[ \ce{LiCoO2 + H2SO4 -> Li2SO4 + CoSO4 + H2O} \]

\[ \ce{NiO + H2SO4 -> NiSO4 + H2O} \]

\[ \ce{MnO2 + H2SO4 -> MnSO4 + H2O + O2} \]

Kinetika leaching black mass umumnya dianalisis menggunakan model pseudo-first order atau shrinking core model (SCM). Model pseudo-first order menyatakan bahwa laju reaksi dapat dinyatakan sebagai:

\[ -\ln(1 - X) = k_1 t \]

di mana \( X \) adalah konversi material (fraction dissolved), \( k_1 \) adalah konstanta laju reaksi (s⁻¹), dan \( t \) adalah waktu reaksi (s). Model ini berlaku untuk sistem homogen dengan konsentrasi reaktan berlebih.

Model SCM untuk partikel non-porous dengan reaksi pada permukaan inti menghasilkan persamaan:

\[ 1 - (1 - X)^{1/3} = k_2 t \]

di mana \( k_2 \) adalah konstanta laju (m³/s). Parameter \( k_2 \) dipengaruhi oleh suhu melalui persamaan Arrhenius:

\[ k = A e^{-E_a / RT} \]

dengan \( A \) sebagai faktor pre-eksponensial, \( E_a \) energi aktivasi (J/mol), \( R \) konstanta gas (8,314 J/mol·K), dan \( T \) suhu absolut (K).

Optimasi yield recyling didefinisikan sebagai:

\[ Y = \frac{m_{\text{recovered}}}{m_{\text{input}}} \times 100\% \]

dengan \( m_{\text{recovered}} \) massa logam yang terlarut dan \( m_{\text{input}} \) massa black mass input. Untuk optimasi multi-parameter, metode Response Surface Methodology (RSM) digunakan dengan persamaan polinomial kedua orde:

\[ Y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_{11} x_1^2 + \beta_{22} x_2^2 + \beta_{12} x_1 x_2 \]

di mana \( x_1 \) adalah suhu (K), \( x_2 \) adalah rasio asam (mol/L), dan \( \beta \) adalah koefisien regresi yang diperoleh dari eksperimen.

Dalam closed-loop remanufacturing, efisiensi remanufacture (Ef) dihitung sebagai:

\[ Ef = \frac{\text{output remanufactured battery capacity}}{\text{input EOL capacity}} \times 100\% \]

dengan pertimbangan degradasi kapasitas selama siklus daur ulang.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Proses closed-loop remanufacturing hidrometallurgi terdiri dari beberapa tahapan sistematis yang didokumentasikan dalam arsitektur teknologi berbasis Industry 4.0. Diagram alir proses (flowchart) sebagai berikut:

1. **Pengumpulan dan Sorting EOL Battery**: Baterai dikumpulkan dari EV dan penyimpanan energi. Sorting dilakukan berdasarkan tipe (pouch, cylindrical, prismatic) dan state-of-health (SoH) menggunakan sensor IoT.  
2. **Disassembly dan Shredding**: Baterai dibongkar mekanik dengan robot otomasi untuk memisahkan anode, cathode, dan separator. Black mass dihasilkan melalui shredding dengan ukuran partikel <1 mm.  
3. **Pretreatment Black Mass**: Black mass dicuci untuk menghilangkan debu dan logam berat. Proses ini mencakup pengeringan dan klasifikasi ukuran.  
4. **Leaching Hidrometallurgi**: Black mass direaksikan dengan asam sulfat (H₂SO₄) pada suhu 50–80°C dan rasio padat-cair 1:5–1:10. Parameter dioptimalkan menggunakan DOE (Design of Experiments).  
5. **Filtrasi dan Purifikasi**: Cairan leachate difilter untuk memisahkan residu padat. Logam diekstrak melalui solvent extraction (D2EHPA, Cyanex 272) untuk memisahkan Co, Ni, dan Mn.  
6. **Electrowinning dan Electrodeposition**: Logam dipulihkan sebagai sulfat murni atau oksida melalui elektrolisis.  
7. **Remanufacturing dan Closed-Loop**: Material pulih digunakan untuk produksi cathode baru, kemudian diuji kualitas sesuai standar. Siklus ditutup dengan traceability data menggunakan IEEE 2933.

Standar operasional mengikuti ISO 12405 untuk persyaratan kualitas baterai daur ulang dan IEEE 2933 untuk traceability data. Prosedur mencakup validasi keselamatan (thermal runaway test), dokumentasi material balance, dan audit lingkungan. Arsitektur teknologi melibatkan sistem SCADA untuk monitoring real-time dan AI untuk prediksi kinetika.

## 4. Studi Kasus Kuantitatif Industri

Kasus industri hipotetis: Sebuah pabrik recyling memproses 1 ton black mass dengan komposisi rata-rata 5% Li, 30% Co, 10% Ni, dan 20% Mn. Kondisi leaching: suhu 60°C, rasio asam 2 M H₂SO₄, waktu 120 menit, dan rasio padat-cair 1:8.

Langkah kalkulasi step-by-step menggunakan model pseudo-first order:

1. Konversi \( X \) dihitung dari massa yang terlarut: \( X = \frac{m_{\text{dissolved}}}{m_{\text{total}}} \).  
2. Dari data eksperimen, \( k_1 = 0.025 \) min⁻¹ diperoleh dari regresi linear \( -\ln(1 - X) \) vs \( t \).  
3. Waktu reaksi \( t = 120 \) menit, sehingga:  
   \[ -\ln(1 - X) = 0.025 \times 120 = 3 \]  
   \[ 1 - X = e^{-3} \approx 0.0498 \]  
   \[ X \approx 0.9502 \] atau 95.02%.  

Yield recyling dihitung:  
\[ Y_{\text{Co}} = \frac{0.30 \times 1 \times 0.9502}{1} \times 100\% = 28.51\% \] (dari 300 g Co input).  

Efisiensi keseluruhan proses remanufacture:  
\[ Ef = \frac{0.2851 \times \text{capacity factor (80\%)}}{1} \times 100\% = 22.81\% \] (efek degradasi).  

Interpretasi manajerial: Yield 95% leaching menghasilkan penghematan material senilai USD 15.000 per ton black mass. Namun, residu leaching masih memerlukan pengolahan lebih lanjut untuk mencapai target ISO 12405. Hasil ini menunjukkan bahwa optimalisasi kinetika melalui peningkatan suhu 10°C dapat meningkatkan yield hingga 5–7% berdasarkan persamaan Arrhenius dengan \( E_a = 45 \) kJ/mol.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Rekayasa recyling Li-ion memiliki hubungan erat dengan supply chain (SCM) melalui closed-loop system yang meminimalkan ketergantungan impor material kritis. Integrasi dengan otomasi (robotik dan AI) memungkinkan pengurangan biaya tenaga kerja hingga 40% dan peningkatan akurasi proses. Dalam manajemen biaya/teknik, analisis total cost of ownership (TCO) mencakup biaya capex leaching plant dan opex kimia, dengan ROI yang tercapai dalam 3–5 tahun pada skala industri.

Disiplin K3 dan ESG menuntut evaluasi risiko kesehatan (paparan asam) dan dampak lingkungan (emisi limbah). Tantangan adopsi meliputi volatilitas supply EOL battery, regulasi yang berbeda antar negara, serta kebutuhan standar internasional seperti ISO 12405 untuk sertifikasi baterai remanufactured. Evaluasi manajerial dilakukan melalui KPI seperti yield rate (>85%), recovery rate (>90%), dan ESG score. Integrasi dengan IEEE 2933 memastikan traceability data untuk audit kepatuhan dan pengurangan risiko hukum.

Secara keseluruhan, modul ini memberikan kerangka lengkap untuk implementasi recyling Li-ion yang berkelanjutan dan menguntungkan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
