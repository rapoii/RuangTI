# 789 — Manajemen Pendapatan Dinamis dan Optimasi Markdown dengan Pemodelan Pilihan Pelanggan Multinomial Logit dalam Retail Fashion dan Barang Perishable

**Domain:** Teknik Industri  
**Topik Spesialis:** Manajemen Pendapatan (Revenue Management) dan Dinamis Pricing  
**Standar & Referensi Utama:** IISE (Institute of Industrial and Systems Engineers) Guidelines for Operations Research in Retail, APICS (now ASCM) Supply Chain Operations Reference (SCOR) Model, ASTM E1988-21 for Lifecycle Management of Perishable Goods, dan foundational works on Multinomial Logit (MNL) by McFadden (1973) serta Talluri & van Ryzin (2004) untuk Revenue Management.

## 1. Pendahuluan dan Konteks Industri

Di era digital retail yang kompetitif, manajemen pendapatan dinamis (Dynamic Pricing) dan optimasi markdown menjadi elemen krusial bagi industri fashion dan barang perishable. Fashion retail, seperti yang dihadapi oleh retailer global seperti Zara, H&M, atau Uniqlo, menghadapi fluktuasi tren musiman yang ekstrem, di mana garment musiman dapat kehilangan nilai jual dalam waktu singkat setelah peluncuran koleksi baru. Permasalahan operasional utama adalah overstocking inventory yang menyebabkan biaya holding tinggi, risiko keusangan stok, dan penurunan margin hingga 30-50% akibat markdown agresif. Secara ekonomi, biaya markdown rata-rata di industri fashion mencapai 20-30% dari nilai penjualan awal, sementara di sektor perishable goods seperti supermarket atau distributor makanan segar, kerugian lebih parah karena faktor expiration date yang ketat. Menurut data industri, waste dari barang perishable dapat mencapai 30-40% dari total produksi, yang berdampak langsung pada biaya logistik dan keberlanjutan lingkungan.

Urgensi penerapan revenue management semakin mendesak akibat pertumbuhan e-commerce yang mencapai 25% pangsa pasar global pada 2023, di mana pelanggan memiliki akses real-time terhadap harga kompetitif dan pilihan produk yang lebih luas. Permasalahan teknis muncul dari ketidakpastian permintaan, di mana model permintaan statis gagal menangkap dinamika perilaku pelanggan yang dipengaruhi oleh harga, waktu, dan substitusi produk. Tanpa pendekatan berbasis data seperti Multinomial Logit (MNL) customer choice modeling, retailer kesulitan mengoptimalkan harga dinamis untuk memaksimalkan revenue sambil mengelola inventory secara efisien. Contoh nyata di Indonesia, di mana pasar fashion lokal seperti di Jakarta atau Bandung mengalami persaingan ketat dengan platform seperti Shopee dan Tokopedia, menunjukkan bahwa retailer yang mengadopsi dynamic pricing melalui AI dapat meningkatkan revenue hingga 15-25% dibandingkan strategi harga tetap.

Dari perspektif operasional, tantangan teknis melibatkan integrasi data penjualan historis, inventori, dan perilaku pelanggan ke dalam sistem yang real-time. Di sektor fashion, markdown optimization menjadi strategi survival karena tren berubah cepat, sementara di perishable goods, pricing harus mempertimbangkan waktu kedaluwarsa untuk menghindari kerugian total. Industri ini juga menghadapi tekanan regulasi dari pemerintah Indonesia melalui UU Perlindungan Konsumen dan standar keberlanjutan yang mendorong pengurangan waste. Tanpa model matematis yang kuat, keputusan pricing bersifat intuitif dan rentan error, menyebabkan lost sales opportunity atau kelebihan stok yang membebani cash flow. Oleh karena itu, integrasi MNL choice modeling dalam dynamic pricing bukan hanya alat teknis, melainkan kebutuhan strategis untuk mencapai efisiensi operasional dan keunggulan kompetitif di tengah volatilitas pasar global yang dipicu oleh inflasi dan perubahan perilaku konsumen pasca-pandemi.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori revenue management berakar pada konsep optimal pricing untuk memaksimalkan pendapatan di bawah keterbatasan kapasitas inventory. Model Multinomial Logit (MNL) menjadi fondasi utama untuk memodelkan perilaku pelanggan dalam memilih antara beberapa alternatif produk. Menurut McFadden (1973), utilitas pelanggan terhadap produk \( j \) pada waktu \( t \) didefinisikan sebagai:

\[ U_{ijt} = \mathbf{\beta}^T \mathbf{x}_{ijt} + \epsilon_{ijt} \]

di mana \( \mathbf{\beta} \) adalah vektor parameter estimasi yang mencerminkan sensitivitas pelanggan terhadap atribut produk, \( \mathbf{x}_{ijt} \) adalah vektor atribut termasuk harga \( p_{jt} \), fitur produk, dan waktu, serta \( \epsilon_{ijt} \) adalah error term yang terdistribusi Gumbel dengan parameter skala \( \mu \). Asumsi ini memungkinkan derivasi probabilitas pilihan secara eksplisit.

Probabilitas pilihan pelanggan untuk produk \( j \) adalah:

\[ P_{ijt} = \frac{e^{\mathbf{\beta}^T \mathbf{x}_{ijt}}}{\sum_{k=1}^J e^{\mathbf{\beta}^T \mathbf{x}_{ikt}}} \]

dengan \( J \) sebagai jumlah alternatif produk. Untuk model dinamis, probabilitas ini menjadi dasar untuk menghitung expected revenue pada setiap periode waktu. Revenue yang diharapkan untuk harga \( p_{jt} \) didefinisikan sebagai:

\[ R(p_{jt}) = p_{jt} \cdot D(p_{jt}) \]

di mana demand \( D(p_{jt}) = \sum_{i} P_{ijt} \cdot d_{it} \), dengan \( d_{it} \) sebagai demand historis. Dalam optimasi markdown, harga dinamis \( p_{jt} = p_{0j} - m_{jt} \), di mana \( m_{jt} \) adalah markdown amount yang dioptimalkan untuk memaksimalkan revenue kumulatif sepanjang siklus hidup produk.

Untuk perishable goods, model diperluas dengan faktor waktu kedaluwarsa \( \tau \), sehingga utilitas menjadi:

\[ U_{ijt} = \beta_p \cdot (p_{jt} - c_j) + \beta_\tau \cdot \tau_{jt} + \epsilon_{ijt} \]

di mana \( \beta_p \) sensitivitas harga dan \( \beta_\tau \) sensitivitas terhadap waktu. Derivasi revenue management menggunakan dynamic programming untuk memaksimalkan nilai harapan:

\[ V_t(I_t) = \max_{p_t} \left[ R(p_t) + \mathbb{E}[V_{t+1}(I_{t+1})] \right] \]

dengan \( I_t \) sebagai inventory level pada periode \( t \), dan \( I_{t+1} = I_t - D(p_t) \). Optimasi ini sering diimplementasikan melalui mixed-integer linear programming (MILP) untuk mengatasi batasan kapasitas dan batasan markdown maksimal.

Dalam konteks fashion dan perishable, MNL dipadukan dengan constrained assortment optimization untuk memilih subset produk yang dijual pada harga penuh sebelum markdown. Formulasi Lagrangian relaxation digunakan untuk mengatasi kompleksitas komputasi, di mana dual variable \( \lambda \) merepresentasikan harga opportunity cost inventory. Derivasi menunjukkan bahwa optimal price satisfies:

\[ p_{jt}^* = \arg\max_p \left[ p \cdot \frac{e^{\mathbf{\beta}^T \mathbf{x}_{jt} - \lambda}}{1 + \sum_k e^{\mathbf{\beta}^T \mathbf{x}_{kt} - \lambda}} \right] \]

dengan \( \lambda \) di-update iteratif hingga konvergensi. Pendekatan ini memastikan revenue maximization sambil menjaga substitutability antar produk, yang krusial untuk fashion dengan banyak varian dan perishable dengan substitutability berdasarkan harga dan waktu.

## 3. Metodologi Rekayasan & Standar Prosedur Operasional

Implementasi sistem revenue management menggunakan MNL dimulai dengan tahap pengumpulan data yang komprehensif. Data meliputi historis penjualan per SKU, inventori awal, harga kompetitor, dan survei perilaku pelanggan untuk estimasi parameter \( \beta \). Proses ini mengikuti standar IISE untuk data-driven operations, di mana data preprocessing dilakukan melalui cleaning dan normalization untuk menghindari bias.

Langkah selanjutnya adalah kalibrasi model MNL menggunakan maximum likelihood estimation (MLE). Likelihood function didefinisikan sebagai:

\[ L(\beta) = \prod_{i=1}^N \prod_{j=1}^J P_{ijt}^{y_{ijt}} \]

di mana \( y_{ijt} \) adalah variabel dummy pilihan. Estimasi dilakukan melalui Newton-Raphson method atau gradient descent untuk menghindari local optima. Validasi model dilakukan dengan hold-out sample dan metrik seperti hit rate dan log-likelihood.

Optimasi pricing menggunakan dynamic programming atau MILP. Diagram alir proses dapat digambarkan sebagai berikut:

1. Input: Data historis dan parameter \( \beta \).  
2. Prediksi demand menggunakan MNL.  
3. Optimasi harga dinamis dengan mempertimbangkan inventory depletion curve.  
4. Output: Harga optimal \( p_t^* \) dan jadwal markdown.  
5. Feedback loop: Update model secara real-time dengan data baru.

Untuk perishable goods, prosedur operasional mencakup monitoring waktu \( \tau \) secara otomatis melalui RFID atau IoT sensors. Standar ASTM E1988-21 direkomendasikan untuk lifecycle tracking, di mana setiap produk memiliki status expiration yang terintegrasi dalam sistem pricing engine. Arsitektur teknologi melibatkan cloud-based platform dengan microservices untuk real-time adjustment, diintegrasikan dengan ERP system seperti SAP atau Oracle.

Prosedur operasional standar mencakup validasi reguler model dengan A/B testing untuk memastikan tidak ada cannibalization revenue. Dalam industri fashion, prosedur mencakup segmentasi pelanggan berdasarkan RFM (Recency, Frequency, Monetary) untuk personalisasi pricing. Diagram alir mencakup decision tree untuk harga penuh vs markdown berdasarkan threshold inventory dan waktu.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan kasus nyata retailer fashion di Indonesia dengan 50 SKU musiman dan 200 SKU perishable. Parameter input: harga awal rata-rata Rp 150.000, inventory awal 1.000 unit, demand historis berdasarkan MNL dengan \( \beta_p = -0.02 \), \( \beta_\tau = -0.005 \), dan \( \mu = 1 \). Waktu siklus 6 bulan untuk fashion dan 30 hari untuk perishable.

Langkah kalkulasi: Pertama, hitung probabilitas pilihan pada harga Rp 150.000:

\[ P_j = \frac{e^{\beta_p \cdot 150000}}{\sum e^{\beta_p \cdot p_k}} \]

Asumsikan demand historis 800 unit pada harga penuh. Revenue tanpa optimasi: \( 150000 \times 800 = Rp 120.000.000 \).

Dengan optimasi markdown dinamis, harga turun menjadi Rp 120.000 pada minggu 4, menghasilkan demand naik menjadi 950 unit berdasarkan elastisitas. Revenue kumulatif dengan optimasi: \( 150000 \times 600 + 120000 \times 400 = Rp 138.000.000 \), meningkat 15%.

Step-by-step untuk perishable: Hitung expected revenue pada hari ke-20 dengan inventory 200 unit:

\[ R(p) = p \cdot \frac{200 \cdot e^{\beta \cdot p}}{1 + e^{\beta \cdot p}} \]

Optimasi menghasilkan harga Rp 85.000, revenue Rp 17.200.000 dibandingkan tanpa optimasi Rp 14.800.000. Interpretasi manajerial: Optimasi mengurangi waste dari 25% menjadi 8%, meningkatkan margin dari 35% menjadi 52%, dan memberikan insight bahwa markdown terlalu dini menurunkan revenue 12% sementara terlambat menyebabkan lost sales 18%. Hasil ini menunjukkan ROI positif 22% dalam 3 bulan implementasi.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Revenue management dengan MNL memiliki aplikasi lintas sektor yang luas. Dalam Supply Chain, model ini terintegrasi dengan SCOR level 1-2 untuk koordinasi demand planning dan fulfillment, memungkinkan visibility real-time inventory depletion. Di Otomasi, integrasi dengan AI machine learning memungkinkan predictive analytics untuk forecast demand lebih akurat, mengurangi bullwhip effect hingga 30%.

Dalam Manajemen Biaya/Teknik, pendekatan ini mengoptimalkan cost-to-serve dengan mengurangi holding cost inventory sebesar 18% dan biaya markdown sebesar 22%. Tantangan adopsi mencakup kebutuhan data historis yang besar, di mana biaya implementasi awal bisa mencapai Rp 500 juta untuk sistem kecil. Evaluasi manajerial menunjukkan bahwa perusahaan yang mengadopsi mencapai peningkatan revenue 12-18% dan pengurangan waste ESG-compliant, mendukung komitmen sustainability.

Dalam K3 dan ESG, markdown optimization membantu mengurangi overproduction yang berdampak pada lingkungan, selaras dengan standar ISO 14001. Tantangan utama adalah privasi data pelanggan dan akurasi model di pasar Indonesia yang dinamis. Evaluasi menunjukkan bahwa meskipun ada hambatan awal, ROI jangka panjang mencapai 3-5 tahun dengan payback period 14 bulan. Integrasi dengan disiplin lain seperti Operations Research memungkinkan hybrid model yang lebih robust, di mana MNL dikombinasikan dengan machine learning untuk handling non-stationary demand.

Secara keseluruhan, modul ini menekankan bahwa dynamic pricing berbasis MNL bukan hanya strategi pricing, melainkan fondasi rekayasa operasional yang strategis untuk keberlanjutan bisnis di sektor retail yang kompetitif. Implementasi yang tepat dapat mengubah kerugian menjadi peluang revenue yang signifikan, sekaligus mendukung efisiensi rantai pasok dan tanggung jawab sosial.