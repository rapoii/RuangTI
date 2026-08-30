# 787 — Indeks Risiko Bahan Baku Kritis: Herfindahl-Hirschman Market Concentration, Geopolitical Vulnerability Scoring, dan Substitution Elasticity Modeling

**Domain:** Teknik Industri  
**Topik Spesialis:** Manajemen Risiko Rantai Pasok Bahan Baku Kritis  
**Standar & Referensi Utama:** ISO 31000:2018 Manajemen Risiko, IISE Body of Knowledge in Industrial and Systems Engineering (Supply Chain & Risk Management), ASTM E178 Standard Practice for Dealing With Outlying Observations

## 1. Pendahuluan dan Konteks Industri

Dalam ekosistem industri manufaktur dan teknologi global saat ini, bahan-bahan mentah kritis (Critical Raw Materials – CRM) merupakan elemen strategis yang mendukung rantai nilai di berbagai sektor inti, termasuk kendaraan listrik, panel surya, elektronik konsumen, serta sistem pertahanan nasional. CRM mencakup mineral seperti litium, kobalt, tantalum, niobium, dan tanah jarang yang tidak dapat digantikan secara mudah dalam aplikasi tertentu karena keterbatasan substitusi teknis dan kinerja material. Urgensi pengelolaan risiko CRM semakin tinggi karena ketergantungan rantai pasok yang sangat tinggi terhadap produsen tunggal, terutama di Asia Timur, yang menyebabkan kerentanan struktural terhadap gangguan geopolitik, ekonomi, dan lingkungan. Permasalahan operasional yang paling menonjol meliputi volatilitas harga yang ekstrem, keterbatasan kapasitas produksi, dan kesulitan dalam diversifikasi supplier tanpa mengorbankan kualitas dan efisiensi teknis. Dari perspektif ekonomi, disrupsi pasokan CRM dapat menimbulkan kerugian triliunan dolar per tahun, sebagaimana terlihat pada kasus pembatasan ekspor tanah jarang oleh China tahun 2010 yang memicu krisis komponen elektronik di Jepang dan Eropa, serta gangguan rantai pasok global selama pandemi COVID-19 yang menyebabkan kekurangan baterai dan semikonduktor. 

Secara teknis, rekayasa teknik industri harus mampu mengintegrasikan model matematis kuantitatif untuk memprediksi, mengukur, dan memitigasi risiko ini agar mendukung kelangsungan operasional perusahaan serta ketahanan strategis negara. Isu tambahan mencakup dampak lingkungan dan sosial ekstraksi CRM yang sering kali merusak ekosistem, menyebabkan pencemaran air dan tanah, serta isu hak asasi manusia di wilayah penambangan. Pendekatan manajemen risiko berbasis data menjadi keharusan untuk memenuhi regulasi ESG dan standar industri global. Dalam konteks ini, indeks risiko komposit yang menggabungkan Herfindahl-Hirschman Market Concentration untuk mengukur konsentrasi pasar, Geopolitical Vulnerability Scoring untuk menilai faktor geopolitik, serta Substitution Elasticity Modeling untuk mengukur kemudahan substitusi menjadi alat rekayasa yang esensial. Pendekatan ini tidak hanya mengurangi biaya operasional dan risiko finansial tetapi juga meningkatkan daya saing kompetitif perusahaan industri melalui pengambilan keputusan berbasis bukti. Tanpa model kuantitatif yang sistematis, perusahaan industri akan terus menghadapi ketidakpastian yang tinggi, menyebabkan overstock/understock, peningkatan biaya hedging, serta kehilangan peluang pasar di sektor energi terbarukan dan teknologi tinggi. Oleh karena itu, modul ini menyajikan kerangka lengkap yang dapat diterapkan oleh insinyur teknik industri untuk mengubah CRM dari beban risiko menjadi aset strategis yang terkelola secara proaktif.

## 2. Landasan Teori & Formulasi Matematis

Indeks Herfindahl-Hirschman (HHI) merupakan metrik klasik dalam ekonomi industri untuk mengukur tingkat konsentrasi pasar. HHI dihitung berdasarkan pangsa pasar setiap pelaku ekonomi dan memberikan gambaran tentang potensi kekuatan pasar monopoli atau oligopoli. Rumus lengkapnya adalah:

\[ HHI = \sum_{i=1}^{n} (s_i \times 100)^2 \]

di mana \( s_i \) adalah pangsa pasar firma ke-i dalam persen (%), \( n \) adalah jumlah firma yang mendominasi pasar, dan hasilnya dinyatakan dalam poin (range 0–10.000). Interpretasi standar: HHI < 1.500 menunjukkan pasar tidak terkonsentrasi, 1.500–2.500 sedang terkonsentrasi, dan > 2.500 sangat terkonsentrasi (berpotensi tinggi terhadap praktik anti-monopoli). Derivasi dasar berasal dari indeks konsentrasi pasar yang dikembangkan Hirschman dan Herfindahl pada tahun 1940-an, yang mengukur varians pangsa pasar. Dalam konteks CRM, HHI digunakan untuk menilai risiko monopoli pasokan, misalnya China yang menguasai lebih dari 60% produksi tanah jarang.

Geopolitical Vulnerability Scoring (GVS) merupakan kerangka penilaian kualitatif-kuantitatif yang mengintegrasikan faktor-faktor eksternal berisiko tinggi. Model GVS yang dikembangkan adalah:

\[ GVS = \sum_{j=1}^{m} w_j \cdot v_j \]

dengan \( v_j \) skor kerentanan (0–10) untuk faktor ke-j, dan \( w_j \) bobot normalisasi (0–1) yang disesuaikan berdasarkan prioritas industri. Faktor utama meliputi stabilitas politik negara produsen, ketergantungan impor, regulasi ekspor, serta risiko konflik bersenjata. Skor GVS berkisar 0–100; nilai tinggi menunjukkan risiko geopolitik yang signifikan. Derivasi model ini mengikuti pendekatan multi-kriteria decision analysis (MCDA) yang dikombinasikan dengan indeks governance dari World Bank dan data perdagangan dari UN Comtrade.

Substitution Elasticity Modeling mengacu pada elastisitas substitusi dalam teori produksi mikroekonomi. Elastisitas substitusi Allen-Uzawa antara dua input material A dan B didefinisikan sebagai:

\[ \sigma_{AB} = \frac{\partial \ln (Q_A / Q_B)}{\partial \ln (P_A / P_B)} \]

di mana \( Q_A, Q_B \) adalah kuantitas output yang dapat dihasilkan, dan \( P_A, P_B \) adalah harga input. Derivasi berasal dari fungsi produksi Cobb-Douglas \( Q = A \cdot L^\alpha \cdot K^\beta \), di mana elastisitas substitusi konstan \( \sigma = 1/(\alpha + \beta) \). Dalam aplikasi CRM, \( \sigma \) rendah (kurang dari 0,5) menunjukkan kesulitan teknis substitusi, sementara \( \sigma \) tinggi (di atas 2) memungkinkan penggantian cepat tanpa penurunan kinerja. Model ini dikombinasikan dengan data historis harga dan kuantitas substitusi untuk estimasi empiris melalui regresi log-linear.

Indeks Risiko Komposit (CRI) kemudian dihasilkan melalui kombinasi berbobot:

\[ CRI = \alpha \cdot \frac{HHI}{10000} + \beta \cdot \frac{GVS}{100} + \gamma \cdot (1 - \sigma) \]

dengan \( \alpha + \beta + \gamma = 1 \), sehingga CRI berada dalam rentang 0–1 (0 = risiko rendah, 1 = risiko sangat tinggi). Normalisasi dilakukan untuk menghindari bias satuan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi sistem indeks risiko CRM dilakukan melalui prosedur operasional yang sistematis dan terstandarisasi. Langkah pertama adalah identifikasi CRM dan pasar sasaran berdasarkan data USGS Mineral Commodity Summaries serta laporan industri. Langkah kedua melibatkan pengumpulan data pasar (pangsa perusahaan), data geopolitik (indeks governance, regulasi ekspor), dan data historis substitusi (harga serta kuantitas). Data dinormalisasi menggunakan min-max scaling untuk menghindari outlier, sesuai praktik ASTM E178.

Langkah ketiga adalah perhitungan HHI menggunakan rumus di atas, diikuti penilaian GVS melalui matriks skor yang telah divalidasi. Langkah keempat melibatkan estimasi elastisitas substitusi melalui regresi time-series atau model panel data. Langkah kelima adalah perhitungan CRI dengan metode agregasi berbobot yang telah ditetapkan. Langkah keenam adalah validasi melalui sensitivitas analisis (Monte Carlo simulation) dan interpretasi manajerial.

Diagram alur proses dapat digambarkan sebagai berikut:  
Identifikasi CRM & pasar → Pengumpulan data pasar & geopolitik → Normalisasi data → Perhitungan HHI → Penilaian GVS → Estimasi elastisitas substitusi → Perhitungan CRI → Analisis mitigasi risiko → Monitoring & update berkala (bulanan/kuartalan) → Pelaporan ke manajemen strategis.

Arsitektur teknologi yang direkomendasikan adalah sistem berbasis cloud dengan integrasi ERP, dashboard real-time menggunakan Python/R atau Power BI, serta modul machine learning untuk prediksi elastisitas substitusi otomatis. Prosedur operasional ini selaras dengan ISO 31000 yang menekankan proses manajemen risiko yang terdokumentasi, komunikasi, dan tinjauan berkala. Standar IISE menyarankan dokumentasi proses rekayasa untuk audit internal dan eksternal.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan pasar tanah jarang dunia sebagai contoh industri. Data pasar tahun 2023 menunjukkan pangsa pasar: China 70%, Myanmar 10%, Australia 10%, AS 5%, dan negara lain 5%. Langkah pertama menghitung HHI:

\[ HHI = (70)^2 + (10)^2 + (10)^2 + (5)^2 + (5)^2 = 4900 + 100 + 100 + 25 + 25 = 5150 \]

Nilai HHI > 2500 menunjukkan konsentrasi pasar yang sangat tinggi. Langkah kedua menilai GVS berdasarkan faktor: stabilitas politik (skor 8), regulasi ekspor (skor 9), ketergantungan impor (skor 10). Dengan bobot rata-rata 0,33, GVS dihitung sebagai:

\[ GVS = 0,33 \cdot 8 + 0,33 \cdot 9 + 0,33 \cdot 10 = 9,0 \]

Langkah ketiga estimasi elastisitas substitusi menggunakan data historis harga dan kuantitas substitusi (misalnya penggantian NdFeB magnet dengan alternatif). Melalui regresi log-linear diperoleh \( \sigma = 0,35 \) (rendah, menunjukkan kesulitan teknis substitusi). Langkah akhir menghitung CRI dengan bobot \( \alpha = 0,4 \), \( \beta = 0,4 \), \( \gamma = 0,2 \):

\[ CRI = 0,4 \cdot \frac{5150}{10000} + 0,4 \cdot \frac{9}{100} + 0,2 \cdot (1 - 0,35) = 0,206 + 0,36 + 0,13 = 0,696 \]

Interpretasi hasil: CRI tinggi (0,696) menandakan risiko sangat tinggi. Rekomendasi manajerial: diversifikasi supplier ke Australia dan AS, investasi R&D substitusi, serta hedging harga. Dari perspektif engineering, hasil ini memerlukan analisis biaya substitusi dan pengujian material alternatif untuk memastikan kinerja magnet tetap di atas 95% dari kinerja asli.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Indeks risiko ini memiliki aplikasi lintas sektor yang luas. Dalam supply chain, digunakan untuk supplier selection dan mitigation planning dengan integrasi ke dalam sistem digital twin. Dalam otomasi, data HHI dan GVS dapat di-feed ke AI untuk prediksi gangguan pasokan secara real-time. Dalam manajemen biaya dan teknik, CRI digunakan untuk scenario planning dan perhitungan nilai risiko (Risk Value = CRI × potensi kerugian finansial). Dalam K3 dan ESG, indeks membantu mengevaluasi risiko lingkungan ekstraksi serta keselamatan penanganan material beracun seperti kobalt.

Tantangan adopsi meliputi kurangnya data terbuka yang akurat, bias subjektif dalam penilaian GVS, serta kompleksitas integrasi dengan sistem legacy. Evaluasi manajerial dilakukan melalui analisis ROI dengan membandingkan biaya implementasi (software & training) versus penghematan akibat mitigasi risiko. Sensitivitas analisis menunjukkan bahwa perubahan bobot \( \gamma \) (elastisitas) paling berpengaruh terhadap keputusan substitusi. Secara keseluruhan, pendekatan ini mendukung transformasi industri menuju ketahanan rantai pasok yang resilien dan berkelanjutan.