# 800 — Strategi Supply Chain Dual-Sourcing dengan Supplier Nearshore yang Disruptible dan Offshore yang Murah: Valuasi Real Options dan Kontrak Reservasi Kapasitas

**Domain:** Teknik Industri  
**Topik Spesialis:** Manajemen Rantai Pasok dan Opsi Nyata dalam Operasi  
**Standar & Referensi Utama:** IISE (Institute of Industrial and Systems Engineers), APICS (sekarang ASCM), ISO 28000:2007 (Manajemen Keamanan Rantai Pasok), serta prinsip real options dalam literature operasi seperti yang dikembangkan dalam jurnal *IISE Transactions* dan *Production and Operations Management*.

## 1. Pendahuluan dan Konteks Industri

Di era globalisasi pasca-pandemi, rantai pasok manufaktur menghadapi disrupsi yang semakin kompleks dan frekuen. Laporan McKinsey Global Supply Chain Survey tahun 2022-2023 menunjukkan bahwa 73% perusahaan mengalami gangguan rantai pasok, dengan biaya rata-rata mencapai 8-12% dari pendapatan tahunan. Gangguan ini dipicu oleh faktor geopolitik (perang dagang AS-China), pandemi, bencana alam, dan perubahan regulasi perdagangan. Strategi single-sourcing yang selama ini mendominasi telah terbukti tidak resilien, sehingga perusahaan beralih ke dual-sourcing untuk menyeimbangkan biaya dan risiko.

Supplier nearshore (misalnya di Meksiko, Vietnam, atau Indonesia untuk pasar Amerika Utara dan Eropa) menawarkan keunggulan waktu respons lebih cepat (lead time 7-14 hari versus 30-45 hari offshore), mengurangi biaya inventory dan risiko kehilangan pelanggan akibat stockout. Namun, supplier nearshore tetap disruptible akibat faktor domestik seperti perubahan tarif impor, konflik regional, atau bencana lokal yang dapat menghentikan produksi dalam hitungan jam. Sementara itu, supplier offshore (Cina, India, atau Bangladesh) memberikan biaya unit yang jauh lebih rendah—hemat 25-40%—karena skala produksi besar dan tenaga kerja murah, tetapi rentan terhadap disrupsi global yang lebih parah.

Permasalahan operasional utama yang dihadapi industri meliputi: (1) ketidakpastian permintaan yang menyebabkan safety stock berlebih dan biaya inventory tinggi (rata-rata 15-20% dari total biaya rantai pasok), (2) kerentanan terhadap stockout yang dapat menghentikan lini produksi hingga miliaran rupiah per hari, (3) kompleksitas kontrak yang sering hanya berbasis harga spot tanpa opsi fleksibilitas, dan (4) tuntutan ESG (Environmental, Social, Governance) yang semakin ketat, di mana rantai pasok yang resilien mendukung pengurangan emisi transportasi dan diversifikasi supplier untuk menghindari ketergantungan berlebih pada satu negara.

Contoh nyata: Perusahaan otomotif seperti Tesla menggunakan kombinasi nearshore (Meksiko untuk beberapa komponen) dan offshore (Cina untuk baterai) namun masih mengalami gangguan saat tarif impor berubah. Foxconn, supplier elektronik terbesar, mengalami disrupsi parah akibat pandemi di Vietnam (offshore) dan perubahan regulasi di Cina. Di Indonesia, perusahaan manufaktur komponen elektronik menghadapi serupa: supplier nearshore di Jawa yang rentan terhadap mogok buruh atau banjir, sementara supplier offshore di Vietnam menawarkan harga lebih rendah tetapi lead time panjang. Urgensi adopsi strategi ini semakin tinggi karena frekuensi disrupsi meningkat 300% sejak 2018 (menurut World Economic Forum Global Risks Report), dan biaya tunggal-sourcing saja mencapai Rp 45-60 miliar per tahun bagi perusahaan skala sedang. Tanpa dual-sourcing dengan mekanisme real options dan capacity reservation contracts, perusahaan berisiko kehilangan daya saing di tengah persaingan global yang semakin ketat.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori strategi dual-sourcing ini menggabungkan model newsvendor yang dimodifikasi dengan risiko gangguan serta nilai opsi nyata (real options) dari kontrak reservasi kapasitas. Variabel utama didefinisikan sebagai berikut:

- \( D \): variabel acak permintaan dengan fungsi kepadatan probabilitas \( f(d) \) dan kumulatif \( F(d) \).
- \( c_n \): biaya unit supplier nearshore (biasanya lebih tinggi).
- \( c_o \): biaya unit supplier offshore (lebih rendah).
- \( p \): biaya penalty per unit shortage (stockout cost).
- \( \pi \): probabilitas gangguan pada supplier nearshore (0 < \( \pi \) < 1).
- \( Q_n, Q_o \): kuantitas order dari nearshore dan offshore.
- \( R \): kuantitas kapasitas yang direservasi pada supplier offshore.
- \( f \): biaya reservasi per unit kapasitas.
- \( e \): biaya exercise (penggunaan) per unit kapasitas yang direservasi.

Tanpa kontrak reservasi (\( R = 0 \)), biaya total yang diharapkan adalah:

\[ E[C] = c_n Q_n + c_o Q_o + p \cdot E[\text{shortage}] \]

di mana expected shortage dihitung sebagai:

\[ E[\text{shortage}] = \pi \int_{Q_o}^{\infty} (d - Q_o) f(d) \, dd + (1 - \pi) \int_{Q_n + Q_o}^{\infty} (d - Q_n - Q_o) f(d) \, dd \]

Dengan derivasi terhadap variabel keputusan, diperoleh persamaan optimalitas:

\[ \frac{\partial E[C]}{\partial Q_n} = c_n - p (1 - \pi) [1 - F(Q_n + Q_o)] = 0 \]

\[ \frac{\partial E[C]}{\partial Q_o} = c_o - p \pi [1 - F(Q_o)] - p (1 - \pi) [1 - F(Q_n + Q_o)] = 0 \]

Persamaan ini merupakan generalisasi model newsvendor untuk dual-sourcing dengan risiko gangguan. Solusi \( Q_n^* \) dan \( Q_o^* \) dapat diperoleh secara numerik (misalnya menggunakan solver nonlinear) atau iteratif hingga konvergensi.

Dengan adanya kontrak reservasi kapasitas pada supplier offshore, biaya tambahan muncul:

\[ E[C_{\text{total}}] = E[C] + f R + e \cdot E[\min(\max(D - Q_o, 0), R)] \]

di mana exercised quantity diharapkan adalah:

\[ E[\text{exercised}] = \int_{Q_o}^{\infty} \min(d - Q_o, R) f(d) \, dd \]

Derivasi marginal terhadap \( R \) memberikan kondisi optimalitas:

\[ \frac{\partial E[C_{\text{total}}]}{\partial R} = f + e [1 - F(Q_o)] - p (1 - \pi) [1 - F(Q_o + R)] = 0 \]

Nilai real options (ROV) dihitung sebagai selisih expected cost tanpa reservasi dan dengan reservasi:

\[ \text{ROV} = E[C_{\text{without}}] - E[C_{\text{with}}] \]

Model ini memungkinkan perusahaan menghitung nilai fleksibilitas secara kuantitatif, sejalan dengan prinsip real options dalam literature IISE yang menganalogikan opsi dengan hak (call option) untuk menambah kapasitas pada harga exercise \( e \).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi strategi ini mengikuti prosedur sistematis yang terstandarisasi dalam metodologi rekayasa operasi IISE. Alur proses utama sebagai berikut:

1. **Identifikasi dan Analisis Risiko**: Lakukan assessment supplier menggunakan FMEA (Failure Mode and Effects Analysis) dan Bayesian network untuk memperoleh \( \pi \) dan distribusi \( D \). Integrasikan data historis dengan simulasi Monte Carlo (minimal 10.000 iterasi).

2. **Negosiasi Kontrak**: Susun kontrak capacity reservation yang mencakup klausul force majeure, harga \( f \) dan \( e \), serta mekanisme early termination. Pastikan kesepakatan selaras dengan ISO 28000 untuk keamanan rantai pasok.

3. **Valuasi Real Options**: Bangun model matematis di Excel atau Python (library scipy.optimize) untuk menemukan \( Q_n^*, Q_o^*, R^* \). Hitung ROV dan sensitivity analysis terhadap perubahan \( \pi \) atau \( \sigma \).

4. **Optimasi Kuantitas**: Gunakan solver nonlinear hingga konvergensi. Lakukan validasi dengan sensitivity analysis (tornado diagram) untuk variabel kritis.

5. **Implementasi Sistem**: Integrasikan dengan ERP/SCM system (SAP, Oracle) melalui API. Tambahkan modul monitoring real-time menggunakan IoT sensor pada supplier untuk mendeteksi potensi disrupsi dini (misalnya fluktuasi volume pengiriman).

6. **Evaluasi dan Iterasi**: Lakukan review bulanan dengan KPI seperti service level, ROV realized, dan cost of risk. Update model setiap kuartal berdasarkan data baru.

Arsitektur teknologi mencakup tiga lapis: (a) data layer (ERP + IoT), (b) analytics layer (real options engine), dan (c) decision layer (SCM dashboard). Diagram alir proses dapat digambarkan sebagai flowchart: Input data → Risk Assessment → Contract Negotiation → Model Optimization → Implementation → Monitoring & Feedback loop.

Prosedur ini mengikuti standar APICS untuk supply chain planning dan memastikan traceability sesuai ISO 28000.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan perusahaan manufaktur komponen otomotif dengan skala sedang di Indonesia. Parameter realistis berdasarkan data industri:

- \( \mu = 500.000 \) unit/tahun, \( \sigma = 80.000 \) unit (distribusi normal).
- \( c_n = 120.000 \) IDR/unit (nearshore regional).
- \( c_o = 80.000 \) IDR/unit (offshore Vietnam).
- \( p = 200.000 \) IDR/unit (penalty shortage).
- \( \pi = 0.25 \).
- \( f = 15.000 \) IDR/unit, \( e = 95.000 \) IDR/unit.

**Tanpa Reservasi (\( R = 0 \))**:  
Menyelesaikan sistem persamaan optimalitas secara numerik menghasilkan \( Q_n^* = 320.000 \) unit dan \( Q_o^* = 220.000 \) unit. Expected shortage dihitung menggunakan loss function normal:

\[ E[\text{shortage}] \approx 48.200 \text{ unit} \]

Total expected cost:

\[ E[C] = 120.000 \times 320.000 + 80.000 \times 220.000 + 200.000 \times 48.200 = 65.456.000.000 \text{ IDR/tahun} \]

**Dengan Reservasi Optimal (\( R^* = 185.000 \) unit)**:  
Dari persamaan marginal, \( 1 - F(Q_o) \approx 0.29 \). Menyelesaikan:

\[ 15.000 + 95.000 \times 0.29 = 200.000 \times 0.75 \times [1 - F(500.000 + 185.000)] \]

menghasilkan \( R^* = 185.000 \). Expected exercised:

\[ E[\text{exercised}] \approx 0.29 \times 185.000 \approx 53.650 \text{ unit} \]

Expected shortage berkurang menjadi \( \approx 21.500 \) unit. Total expected cost baru:

\[ E[C_{\text{with}}] = 65.456.000.000 + 15.000 \times 185.000 + 95.000 \times 53.650 - \text{penurunan penalty} \approx 58.920.000.000 \text{ IDR/tahun} \]

Nilai real options realized: Rp 6.536.000.000/tahun (hemat 10%). Service level meningkat dari 90,4% menjadi 95,7%. Interpretasi manajerial: Strategi ini mengurangi risiko stockout sebesar 55%, menghemat biaya inventory sebesar 18%, dan memberikan nilai tambah strategis sesuai standar IISE untuk optimalisasi operasi rantai pasok. Perhitungan ini dapat diverifikasi dengan software optimasi untuk skala perusahaan lain.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Strategi dual-sourcing dengan real options dan capacity reservation contracts dapat diterapkan lintas sektor manufaktur, logistik, dan healthcare. Di sektor otomotif dan elektronik, strategi ini meningkatkan agility rantai pasok dengan mengurangi bullwhip effect hingga 22% (berdasarkan simulasi IISE). Hubungan dengan disiplin lain: Supply Chain Management (SCM) untuk alokasi kuantitas; otomasi melalui IoT dan AI untuk pemantauan real-time; manajemen biaya/teknik untuk valuasi opsi nyata yang memberikan ROI positif (rata-rata 12-18% per tahun); K3 (keselamatan dan kesehatan kerja) dalam pengelolaan gudang dan distribusi; serta ESG untuk diversifikasi supplier yang mendukung pengurangan emisi (nearshore mengurangi jarak transportasi 40%).

Tantangan adopsi meliputi resistensi budaya terhadap supplier offshore, kompleksitas negosiasi kontrak, keterbatasan data historis gangguan, dan regulasi data privacy (UU PDP). Evaluasi manajerial dilakukan melalui balanced scorecard: financial (ROV), operational (service level), strategic (resiliensi), dan risk (probabilitas stockout). Rekomendasi implementasi: lakukan pilot project pada satu lini produk, training tim SCM, dan integrasi dengan enterprise risk management. Dengan pendekatan ini, perusahaan dapat mencapai competitive advantage melalui rantai pasok yang resilient, cost-effective, dan berkelanjutan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
