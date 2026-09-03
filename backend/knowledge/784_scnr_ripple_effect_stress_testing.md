# 784 — Supply Chain Network Resilience (SCNR) Stress Testing: Ripple Effect Simulation, Node Criticality Centrality, and Post-Disruption Recovery Dynamics

**Domain:** Teknik Industri  
**Topik Spesialis:** Resiliensi Jaringan Rantai Pasok (SCNR) melalui Stress Testing: Simulasi Ripple Effect, Centralitas Kritisitas Node, dan Dinamika Pemulihan Pasca-Distupsi  
**Standar & Referensi Utama:** ISO 28000:2019 Sistem Manajemen Keamanan Rantai Pasok, ISO 31000:2018 Manajemen Risiko, IEEE 7000:2021 Sistem yang Dapat Diandalkan dan Aman, ASME B46.1-2019 Toleransi dan Kecocokan, serta Body of Knowledge IISE untuk Manajemen Rantai Pasok.

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap industri global yang semakin terhubung, rantai pasok (supply chain) telah berkembang menjadi sistem jaringan yang kompleks dengan puluhan hingga ratusan node dan edge yang saling bergantung. Namun, kerentanan struktural terhadap disrupsi telah terbukti fatal. Pandemi COVID-19 tahun 2020 menyebabkan kelangkaan komponen semikonduktor yang mengganggu produksi otomotif dan elektronik di seluruh dunia, dengan estimasi kerugian ekonomi global mencapai 2,5 triliun dolar AS. Bencana alam seperti banjir besar di Thailand tahun 2011 yang menghentikan produksi komponen elektronik selama berbulan-bulan, atau konflik geopolitik di Laut Merah yang memaksa perusahaan logistik mengalihkan rute melalui Tanjung Harapan, telah menunjukkan bagaimana satu node atau edge yang terganggu dapat memicu efek rantai (ripple effect) yang meluas hingga tingkat nasional. Permasalahan operasional meliputi peningkatan biaya inventori akibat safety stock yang berlebih, keterlambatan pengiriman yang menurunkan tingkat on-time delivery hingga 40% di beberapa sektor, serta masalah teknis seperti kurangnya visibilitas real-time yang menyebabkan bullwhip effect yang parah. Dari perspektif ekonomi, perusahaan manufaktur mengalami penurunan pendapatan hingga 25% dalam kuartal pertama disrupsi, sementara sektor logistik kehilangan jutaan jam pengiriman dan meningkatkan emisi karbon akibat rute alternatif yang tidak optimal. Urgensi pengembangan Supply Chain Network Resilience (SCNR) semakin mendesak karena tuntutan konsumen akan keandalan produk, regulasi ESG yang semakin ketat, serta ancaman iklim dan geopolitik yang semakin tidak dapat diprediksi. Teknik industri harus mampu merancang sistem yang tidak hanya efisien secara operasional tetapi juga resilien, melalui pendekatan stress testing yang sistematis. Pendekatan ini mencakup simulasi ripple effect untuk memahami propagasi disrupsi, analisis node criticality centrality untuk mengidentifikasi bottleneck kritis, serta model dinamika pemulihan pasca-distupsi yang dapat mengembalikan jaringan ke kondisi optimal dalam waktu seminimal mungkin. Integrasi dengan standar industri seperti ISO 28000:2019 yang mewajibkan manajemen keamanan rantai pasok dan ISO 31000:2018 untuk penanganan risiko terstruktur menjadi keharusan agar perusahaan dapat bertahan dan berkembang di tengah ketidakpastian. Tanpa SCNR yang kuat, perusahaan berisiko kehilangan daya saing, sementara industri secara keseluruhan dapat mengalami gangguan ekonomi makro yang berkepanjangan. Studi kasus global menunjukkan bahwa perusahaan yang menerapkan SCNR mengurangi dampak kerugian hingga 60% dibandingkan yang tidak, dengan penghematan biaya pemulihan yang signifikan. Oleh karena itu, modul ini menyediakan kerangka lengkap yang praktis bagi teknisi industri untuk mengimplementasikan SCNR dalam operasional sehari-hari.

## 2. Landasan Teori & Formulasi Matematis

Jaringan rantai pasok direpresentasikan sebagai graf tak berarah yang tidak terarah \( G = (V, E) \), di mana \( V \) adalah himpunan node (supplier, produsen, distributor, dan konsumen) dengan \( |V| = n \), dan \( E \) adalah himpunan edge yang merepresentasikan aliran material, informasi, atau dana dengan kapasitas \( c_e \). Representasi matriks adjacency \( \mathbf{A} \) didefinisikan sebagai \( A_{ij} = 1 \) jika \( (i,j) \in E \) dan \( 0 \) sebaliknya, sementara matriks kapasitas \( \mathbf{C} \) menyimpan nilai \( c_e \). Model ini memungkinkan analisis topologi dan aliran simultan.

Centralitas node menjadi fondasi identifikasi kritisitas. Centralitas derajat (degree centrality) sederhana namun informatif:
\[
C_D(v) = \deg(v) = \sum_{u \in V} A_{vu}
\]
di mana \( \deg(v) \) menghitung jumlah koneksi langsung node \( v \). Centralitas antara (betweenness centrality) yang lebih kompleks mengukur kontrol node terhadap aliran:
\[
C_B(v) = \sum_{s \neq v \neq t \in V} \frac{\sigma_{st}(v)}{\sigma_{st}}
\]
dengan \( \sigma_{st} \) sebagai jumlah jalur terpendek (shortest paths) antara \( s \) dan \( t \), serta \( \sigma_{st}(v) \) sebagai jumlah jalur tersebut yang melalui \( v \). Derivasi berasal dari penghitungan jalur terpendek menggunakan algoritma Floyd-Warshall atau Brandes yang dioptimalkan dengan \( O(nm) \) kompleksitas, di mana \( m = |E| \). Centralitas eigen (eigenvector centrality) memperhitungkan kualitas koneksi:
\[
C_E(v) = \lambda_1 \mathbf{u}_1(v)
\]
di mana \( \lambda_1 \) adalah eigenvalue terbesar dari \( \mathbf{A} \) dan \( \mathbf{u}_1 \) adalah vektor eigen terkait. Persamaan ini diselesaikan melalui power iteration method: \( \mathbf{u}^{(k+1)} = \mathbf{A} \mathbf{u}^{(k)} / \|\mathbf{A} \mathbf{u}^{(k)}\| \).

Model ripple effect menggunakan pendekatan cascade failure berbasis kapasitas. Jika node \( v \) mengalami disrupsi parsial dengan kapasitas direduksi menjadi \( c_v' < c_v \), maka aliran outgoing \( f_e \) dihitung ulang melalui max-flow min-cut theorem. Model sederhana propagasi dapat diformulasikan sebagai:
\[
f_e' = \max(0, f_e - \Delta c_v)
\]
di mana \( \Delta c_v \) adalah penurunan kapasitas akibat kegagalan node. Efek ripple terukur melalui perubahan giant component size \( S \) dalam jaringan:
\[
S = \frac{1}{n} \sum_{i=1}^n \mathbf{1}_{\text{component size of } i > 1}
\]
yang berkurang drastis jika node kritis dihapus.

Dinamika pemulihan pasca-distupsi dimodelkan sebagai proses dinamis. Model recovery level \( R(t) \) mengikuti persamaan diferensial orde pertama:
\[
\frac{dR(t)}{dt} = \alpha (1 - R(t)) - \beta D(t)
\]
dengan \( \alpha \) sebagai kecepatan pemulihan alami, \( \beta \) sebagai faktor degradasi oleh disrupsi tersisa \( D(t) \), dan \( R(0) = 0 \). Solusi analitik untuk kasus \( D(t) \) konstan adalah:
\[
R(t) = \frac{\alpha}{\alpha + \beta D} (1 - e^{-(\alpha + \beta D)t})
\]
di mana waktu setengah recovery \( t_{0.5} \) dihitung sebagai \( t_{0.5} = \ln(2)/(\alpha + \beta D) \). Model ini dapat dioptimalkan menggunakan linear programming untuk menentukan strategi dual sourcing atau buffer inventori minimal yang meminimalkan \( \sum c \cdot f \) dengan batasan kapasitas.

## 3. Metodologi Rekayasan & Standar Prosedur Operasional

Prosedur implementasi SCNR stress testing mengikuti alur sistematis yang terstruktur. Langkah pertama adalah pemodelan jaringan menggunakan software seperti NetworkX atau MATLAB, di mana node dan edge didefinisikan dengan atribut kapasitas dan ketahanan. Langkah kedua melibatkan perhitungan centralitas node menggunakan algoritma Brandes untuk betweenness dan power method untuk eigenvector centrality, menghasilkan skor prioritas node kritis. Langkah ketiga melakukan stress testing melalui dua skenario: targeted attack (penghapusan node kritis berdasarkan centrality tertinggi) dan random failure (penghapusan node secara acak dengan probabilitas \( p \)). Ripple effect diukur dengan metrik seperti average path length baru \( L' = \sum d'(s,t)/n(n-1) \) dan giant component size pasca-distupsi.

Diagram alur proses dapat digambarkan sebagai:
```
Mulai
   |
   v
Model Jaringan (G=(V,E), C)
   |
   v
Hitung Centralitas (C_D, C_B, C_E)
   |
   v
Simulasi Stress Testing
   ├── Targeted Removal
   └── Random Failure (p=0.1-0.3)
   |
   v
Analisis Ripple Effect (S, L', Flow Change)
   |
   v
Model Pemulihan (ODE atau LP Optimasi)
   |
   v
Evaluasi Strategi (Dual Sourcing, Buffer, Rerouting)
   |
   v
Selesai
```

Arsitektur teknologi mencakup integrasi dengan ERP system untuk data real-time dan AI untuk prediksi dinamis. Prosedur operasional mengikuti standar ISO 28000:2019 yang mewajibkan identifikasi risiko rantai pasok dan ISO 31000:2018 yang menyediakan kerangka penilaian risiko berjenjang. Setiap simulasi divalidasi dengan uji sensitivitas terhadap parameter seperti \( \alpha \) dan \( \beta \), serta dokumentasi traceability untuk audit. Pendekatan ini memastikan reproducibility dan skalabilitas hingga jaringan dengan ribuan node.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan jaringan rantai pasok sederhana dengan 5 node: Supplier A (node 1), Produsen B (node 2), Distributor C (node 3), Distributor D (node 4), dan Konsumen E (node 5). Edge terhubung A-B, B-C, C-D, D-E, serta A-C dan B-D dengan kapasitas \( c_e = 100 \) unit per bulan. Centralitas dihitung sebagai berikut.

Centralitas derajat: \( C_D(1) = 3 \), \( C_D(2) = 3 \), \( C_D(3) = 3 \), \( C_D(4) = 2 \), \( C_D(5) = 1 \). Centralitas antara (betweenness) menggunakan jalur terpendek: node B memiliki \( C_B(2) = 4 \) karena mengontrol jalur utama ke E, sementara node A memiliki \( C_B(1) = 2 \). Eigenvector centrality menunjukkan node B sebagai node tertinggi karena koneksi ke node dengan degree tinggi.

Simulasi disrupsi: Hapus node B (targeted attack berdasarkan centrality tertinggi). Ripple effect menyebabkan giant component size \( S \) turun dari 1 ke 0,7 (hanya komponen A-C-D-E tetap terhubung parsial). Average path length \( L' \) meningkat dari 2 ke 3,5. Aliran total berkurang 35% karena kapasitas edge A-C dan B-D direduksi secara proporsional.

Perhitungan recovery menggunakan model ODE dengan \( \alpha = 0.05 \) per hari dan \( \beta = 0.2 \): waktu recovery \( t_{0.5} \approx 18 \) hari untuk mengembalikan \( R(t) = 0.5 \). Strategi optimal (dual sourcing A ke C dan B) mengurangi waktu menjadi 9 hari dengan biaya tambahan 15% inventori.

Interpretasi manajerial: Node B adalah bottleneck kritis yang menyebabkan 40% penurunan throughput pasca-distupsi. Rekomendasi engineering termasuk penambahan buffer 20% di edge A-C dan diversifikasi supplier. Hasil ini menunjukkan bahwa investasi resiliensi sebesar 12% dari total biaya rantai pasok dapat mengembalikan performa 95% dalam 30 hari, menghemat kerugian ekonomi hingga 2,8 juta dolar dalam skenario serupa.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

SCNR stress testing dapat diterapkan lintas sektor dengan adaptasi parameter. Di sektor manufaktur otomotif, ripple effect digunakan untuk menguji ketahanan terhadap gangguan komponen elektronik, di mana centralitas node supplier baterai kritis dapat diidentifikasi untuk strategi dual sourcing. Sektor logistik memanfaatkan model recovery dinamis untuk merutekan ulang pengiriman, mengurangi waktu recovery dari 45 hari menjadi 12 hari selama pandemi. Di sektor kesehatan, aplikasi ini membantu distribusi vaksin pasca-distupsi dengan memprioritaskan node rumah sakit sebagai node dengan centrality tinggi untuk pemulihan prioritas. Sektor pertanian memodelkan rantai pangan terhadap bencana iklim, di mana node penyimpanan dingin menjadi kritisitas utama.

Tantangan adopsi meliputi ketersediaan data yang terfragmentasi antar perusahaan, kompleksitas komputasi untuk jaringan besar (antara lain NP-hardness of betweenness calculation), dan integrasi dengan sistem otomasi seperti IoT serta AI predictive maintenance. Evaluasi manajerial dilakukan melalui KPI seperti Resilience Index \( RI = \frac{P_0 - P_d}{P_0} \times 100\% \) (di mana \( P_0 \) adalah performa pre-distupsi dan \( P_d \) pasca-distupsi), Cost of Resilience (COR) sebagai rasio biaya investasi terhadap penghematan kerugian, dan Recovery Time Objective (RTO) yang diukur dari model ODE. Manajemen biaya teknik diintegrasikan dengan Six Sigma DMAIC untuk mengurangi variasi recovery time, sementara K3 dan ESG dievaluasi melalui pengurangan emisi selama recovery dan kepatuhan regulasi. Tantangan adopsi diatasi dengan framework hybrid yang menggabungkan data historis dengan simulasi Monte Carlo, menghasilkan rekomendasi strategis yang dapat meningkatkan daya saing hingga 30% di berbagai sektor.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
