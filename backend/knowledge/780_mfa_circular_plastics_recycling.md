# 780 — Analisis Aliran Material dan Substansi untuk Ekonomi Sirkular Plastik: Pemodelan Sankey Dinamis dan Rendemen Daur Ulang Mekanik-Kimia (ISO 14044 & EN 15343)

**Domain:** Teknik Industri  
**Topik Spesialis:** Analisis Aliran Material dan Substansi dalam Ekonomi Sirkular Plastik  
**Standar & Referensi Utama:** ISO 14044:2006, EN 15343:2020

## 1. Pendahuluan dan Konteks Industri

Industri plastik global menghadapi krisis lingkungan yang mendesak akibat produksi massal yang mencapai lebih dari 400 juta ton per tahun pada tahun 2023, dengan hanya sekitar 9% yang didaur ulang secara efektif. Menurut data dari Plastics Europe dan Ellen MacArthur Foundation, sekitar 79% plastik terbuang tidak terdaur ulang, berkontribusi pada pencemaran lautan dengan estimasi 11 juta ton plastik masuk ke laut setiap tahunnya. Permasalahan operasional utama meliputi rendahnya tingkat pengumpulan dan pemisahan sampah plastik, yang disebabkan oleh kompleksitas campuran material seperti polietilen tereftalat (PET), polipropilena (PP), dan polistirena (PS) yang sulit didistribisikan. Secara ekonomi, biaya daur ulang mekanik sering kali lebih tinggi dibandingkan produksi dari bahan baku primer karena biaya pengurutan dan pembersihan yang tinggi, ditambah fluktuasi harga bahan baku virgin yang dipengaruhi oleh ketidakstabilan pasar minyak. Secara teknis, tantangan seperti kontaminasi oleh zat kimia berbahaya dan degradasi material selama proses daur ulang menyebabkan penurunan kualitas produk daur ulang, sehingga rendemen rendah dan siklus daur ulang pendek. Urgensi semakin tinggi karena regulasi ketat seperti Directive (EU) 2019/904 tentang Plastik Tunggal Pakai yang mewajibkan target 55% daur ulang plastik oleh 2030, serta standar ISO 14044 yang mendorong analisis lingkungan seumur hidup. Di Indonesia, sebagai produsen plastik terbesar ke-10 dunia, masalah sampah plastik mencapai 3,2 juta ton per tahun, dengan tingkat daur ulang rendah sekitar 5-10%. Hal ini tidak hanya berdampak pada kesehatan masyarakat dan ekosistem, tetapi juga pada ketahanan ekonomi nasional melalui ketergantungan impor bahan baku. Oleh karena itu, penerapan Material Flow Analysis (MFA) dan Substance Flow Analysis (SFA) menjadi krusial untuk memahami aliran material dan substansi dalam sistem daur ulang plastik, memungkinkan pengoptimalan proses dan transisi menuju ekonomi sirkular yang berkelanjutan. Pemodelan Sankey dinamis memungkinkan visualisasi aliran waktu nyata, sementara pemahaman rendemen daur ulang mekanik dan kimia membantu dalam perencanaan investasi. Dengan demikian, modul ini bertujuan memberikan landasan ilmiah dan praktis bagi insinyur dan manajer untuk mengimplementasikan pendekatan ini dalam industri plastik.

## 2. Landasan Teori & Formulasi Matematis

Analisis Aliran Material (MFA) merupakan metode sistematis untuk melacak dan menganalisis aliran material dalam suatu sistem, berdasarkan prinsip konservasi massa. Menurut ISO 14044, MFA terintegrasi dengan analisis lingkungan seumur hidup (LCA) untuk mengevaluasi dampak lingkungan. Persamaan dasar untuk keseimbangan massa adalah:

\[ \sum_{i} I_i = \sum_{j} O_j + \Delta S \]

di mana \( I_i \) adalah input material, \( O_j \) output, dan \( \Delta S \) perubahan stok. Variabel ini didefinisikan sebagai massa dalam satuan ton, dengan \( i \) dan \( j \) mewakili aliran spesifik.

Untuk Substance Flow Analysis (SFA), fokus pada aliran substansi seperti polimer dan aditif:

\[ \text{SFA} = \sum_{k} f_k \]

di mana \( f_k \) adalah aliran substansi k, termasuk pelacakan kontaminan seperti logam berat atau bromin dalam campuran plastik.

Pemodelan Sankey dinamis merepresentasikan aliran dengan lebar proporsional terhadap jumlah aliran:

\[ w \propto Q \]

di mana \( w \) adalah lebar alur dan \( Q \) adalah aliran massa per waktu. Dalam pemodelan dinamis, stok akumulasi dihitung melalui integrasi waktu:

\[ S(t) = \int_0^t (I(\tau) - O(\tau)) \, d\tau \]

Rendemen daur ulang mekanik (\( Y_m \)) didefinisikan sebagai:

\[ Y_m = \frac{m_{\text{pellet}}}{m_{\text{input}}} \]

Sementara rendemen daur ulang kimia (\( Y_c \)) untuk depolimerisasi:

\[ Y_c = \frac{m_{\text{monomer}}}{m_{\text{input}}} \]

Derivasi rumus ini berasal dari hukum kekekalan massa yang diadaptasi untuk proses daur ulang, di mana degradasi material mengurangi massa output. Dalam konteks plastik, persamaan ini diekspansi dengan mempertimbangkan aliran karbon:

\[ \text{C-balance} = \frac{m_{\text{C, recycled}}}{m_{\text{C, total}}} \]

Variabel tambahan meliputi efisiensi sorting (\( \eta_s \)) dan tingkat pengumpulan (\( \eta_c \)), yang digabungkan menjadi:

\[ \text{Total yield} = \eta_c \cdot \eta_s \cdot Y_m \]

Formulasi ini memungkinkan simulasi sensitivitas terhadap variasi parameter industri, seperti fluktuasi suhu dalam proses kimia yang memengaruhi \( Y_c \).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi sistem MFA dan SFA mengikuti langkah-langkah sistematis yang terstandarisasi. Langkah pertama adalah definisi batas sistem sesuai ISO 14044, mencakup cradle-to-grave atau cradle-to-cradle untuk siklus plastik. Langkah kedua melibatkan pengumpulan data input-output menggunakan sensor IoT, laporan pabrik, dan analisis laboratorium untuk substansi. Langkah ketiga adalah pembangunan model Sankey dinamis dengan software seperti SankeyMATIC atau Python (matplotlib/sankey), di mana aliran direpresentasikan grafis dengan lebar proporsional dan animasi waktu untuk simulasi dinamis. Langkah keempat adalah validasi model dengan data historis menggunakan uji chi-square untuk kesesuaian statistik. Langkah kelima adalah evaluasi sensitivitas terhadap parameter seperti suhu daur ulang atau kontaminasi, serta interpretasi hasil melalui software seperti MATLAB untuk pemodelan diferensial.

Diagram alir proses dapat digambarkan sebagai berikut:

- Node 1: Produksi Plastik (Input massa total)  
- Alur ke Node 2: Konsumsi dan Penggunaan (stok akumulasi)  
- Alur ke Node 3: Pengumpulan Sampah (efisiensi \( \eta_c \))  
- Alur ke Node 4: Pemisahan dan Sorting (efisiensi \( \eta_s \))  
- Alur ke Node 5: Daur Ulang Mekanik (output pellet)  
- Alur ke Node 6: Daur Ulang Kimia (output monomer)  
- Alur ke Node 7: Produk Baru dan Loss (degradasi, landfill, incineration)

Arsitektur teknologi mencakup integrasi dengan sistem otomasi berbasis AI untuk real-time monitoring aliran. Prosedur operasional mencakup standar EN 15343 untuk karakterisasi daur ulang plastik, yang mensyaratkan pelaporan rendemen dan substansi secara kuantitatif. Prosedur ini juga mengintegrasikan ISO 14044 untuk LCA, memastikan bahwa setiap aliran dievaluasi dari perspektif emisi dan konsumsi energi.

## 4. Studi Kasus Kuantitatif Industri

Studi kasus ini mengasumsikan pabrik daur ulang PET botol di Eropa dengan kapasitas input 5000 ton/tahun. Parameter realistis mencakup tingkat pengumpulan 65%, efisiensi sorting 92%, rendemen mekanik 87%, dan rendemen kimia 65% untuk perbandingan. Langkah-langkah perhitungan matematis dilakukan sebagai berikut:

1. Massa input total = 5000 ton/tahun.  
2. Massa terkumpul = \( 5000 \times 0.65 = 3250 \) ton/tahun.  
3. Massa setelah sorting = \( 3250 \times 0.92 = 2990 \) ton/tahun.  
4. Massa pellet output mekanik = \( 2990 \times 0.87 = 2600.3 \) ton/tahun.  
5. Massa output kimia = \( 2990 \times 0.65 = 1943.5 \) ton/tahun (untuk perbandingan).  
6. Massa loss total = \( 5000 - 2600.3 = 2399.7 \) ton/tahun, yang terdiri dari degradasi material (kontaminasi 15%), sampah landfill (40%), dan energi terbuang (45%).

Interpretasi hasil secara manajerial menunjukkan bahwa daur ulang mekanik dapat memenuhi 52% kebutuhan bahan baku baru, mengurangi ketergantungan impor virgin plastic sebesar 2600 ton/tahun. Secara engineering, biaya produksi pellet daur ulang diperkirakan 0,8 USD/kg dibandingkan 1,5 USD/kg untuk virgin, menghasilkan penghematan 35% per unit. Pemodelan Sankey dinamis menggambarkan aliran stok PET yang akumulasi sebesar 1943,5 ton/tahun dalam siklus tertutup, dengan penurunan emisi karbon sekitar 1,2 ton CO₂e/ton plastik daur ulang. Hasil ini menunjukkan potensi ROI investasi dalam pengurutan otomatis sebesar 18% dalam 3 tahun, dengan rekomendasi untuk meningkatkan sorting efficiency menjadi 95% guna mengurangi loss menjadi di bawah 2000 ton/tahun.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

MFA dan SFA memiliki aplikasi lintas sektor yang luas, terutama dalam supply chain di mana data aliran digunakan untuk optimasi rute pengumpulan melalui algoritma Vehicle Routing Problem (VRP) yang terintegrasi dengan model Sankey. Dalam otomasi, sensor dan computer vision memanfaatkan SFA untuk deteksi substansi berbahaya secara real-time, mengurangi kesalahan sorting hingga 20%. Manajemen biaya dan teknik memanfaatkan analisis Total Cost of Ownership (TCO) yang menghitung biaya daur ulang versus virgin, dengan rumus:

\[ \text{TCO} = C_{\text{op}} + C_{\text{cap}} + C_{\text{env}} \]

di mana \( C_{\text{env}} \) mencakup dampak lingkungan dari loss aliran. Dalam K3 dan ESG, MFA menyediakan data untuk pelaporan carbon footprint sesuai ISO 14064, memungkinkan perusahaan mencapai target net-zero dengan mengurangi emisi 30-40% melalui siklus plastik tertutup. Tantangan adopsi meliputi ketidakpastian data historis, infrastruktur yang belum merata, dan persaingan pasar recycled plastic yang kompetitif dengan harga virgin. Evaluasi manajerial menekankan pentingnya pelatihan staf dan kebijakan Extended Producer Responsibility (EPR) untuk mengatasi hambatan ini, sehingga mencapai ekonomi sirkular yang berkelanjutan di sektor plastik global. Integrasi dengan disiplin lain seperti manajemen operasional memastikan keputusan berbasis data yang mengurangi risiko lingkungan dan meningkatkan daya saing industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
