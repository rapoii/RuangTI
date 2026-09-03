# 2639 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi Rekayasa Produk, Efisiensi Perakitan, dan Evaluasi Multi-Kriteria

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur perangkat medis dan alat kesehatan rumah tangga menghadapi tekanan efisiensi yang semakin tinggi akibat persaingan global, standar regulasi yang ketat, dan permintaan pasar yang fluktuatif. Amirullah dan Jakaria (2024) dalam paper *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method* menyoroti bagaimana sebuah produk sederhana berupa *coffee enema basket*—komponen penampung bubuk kopi yang digunakan dalam prosedur hidroterapi kolon—memiliki potensi efisiensi manufaktur yang sangat besar jika dirancang ulang dengan pendekatan DFMA (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)). Produk ini pada dasarnya merupakan keranjang berlubang dengan tutup berulir yang berfungsi menampung media, menyaring cairan, dan memastikan tidak ada partikel yang lolos ke dalam tubuh pengguna. Meskipun tampak sederhana, desain awalnya memiliki banyak komponen yang harus dirakit secara manual, sambungan ulir yang sulit distandarisasi, serta pemilihan material yang kurang optimal untuk proses *injection molding* maupun *sheet metal forming*.

Urgensi redesain muncul dari tiga faktor utama. Pertama, **biaya produksi kumulatif**—termasuk biaya material, *tooling*, perakitan, dan inspeksi—tergolong tinggi relative terhadap harga jual ritel. Kedua, **lead time perakitan** yang panjang menghambat skalabilitas produksi ketika permintaan musiman meningkat. Ketiga, **risiko cacat perakitan** (misalignment, kebocoran ulir, kontaminasi silang) yang menurunkan keandalan produk dan meningkatkan *return rate*. Pendekatan DFMA—yang menggabungkan *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA)—menjadi kerangka sistematis untuk menjawab tantangan tersebut dengan menyederhanakan struktur produk, meminimalkan jumlah komponen, memilih proses fabrikasi yang sesuai dengan karakteristik material, serta merancang geometri yang memudahkan perakitan otomatis maupun manual.

Pada tataran yang lebih luas, studi Mubashir Islam (2024) tentang integrasi DFMA dengan *Building Information Modelling* (BIM) untuk evaluasi desain jembatan pracetak (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memberikan justifikasi strategis bahwa prinsip DFMA kini tidak lagi terbatas pada produk diskrit skala kecil, melainkan telah merambah ke industri konstruksi infrastruktur bernilai miliaran dolar. Islam (2024) menunjukkan bahwa keputusan desain konvensional yang hanya mempertimbangkan biaya material dan kapasitas struktural sering mengabaikan variabel *manufacturability, transportability, liftability,* dan *erectability*—variabel yang justru menentukan keberhasilan eksekusi proyek. Paradigma keputusan desain yang “beku” pada tahap *shop drawing* menyebabkan koreksi hanya mungkin dilakukan dengan biaya *rework* yang sangat besar. Dengan mengintegrasikan DFMA ke dalam kerangka evaluasi multi-kriteria berbasis BIM, desainer dapat melakukan *trade-off analysis* di tahap konseptual dan preliminary, sehingga menghasilkan produk yang tidak hanya murah secara material tetapi juga efisien secara manufaktur dan logistik.

Konteks industri perangkat medis—di mana coffee enema basket berada—memiliki dinamika serupa dengan industri konstruksi jembatan. Kedua industri menghadapi regulasi ketat (BPOM untuk alat kesehatan, SNI untuk infrastruktur jembatan), rantai pasok yang panjang, serta tuntutan *traceability* komponen. Oleh karena itu, transfer metodologi DFMA dari domain satu ke domain lain menjadi sangat relevan dan merupakan salah satu kekuatan utama kerangka berpikir ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar DFMA

DFMA merupakan integrasi dua disiplin yang saling komplementer. **Design for Manufacture (DFM)** berfokus pada optimalisasi proses fabrikasi individual komponen, sedangkan **Design for Assembly (DFA)** berfokus pada kemudahan penggabungan seluruh komponen menjadi produk akhir. Amirullah dan Jakaria (2024) menjelaskan bahwa tujuan akhir DFMA adalah meminimalkan **biaya siklus hidup total** (*total life-cycle cost*) tanpa mengorbankan fungsi, kualitas, maupun keamanan produk.

Formulasi umum biaya siklus hidup total dapat dinyatakan sebagai:

$$C_{TLCC} = C_{mat} + C_{fab} + C_{asm} + C_{op} + C_{mnt} + C_{disp}$$

di mana $C_{mat}$ adalah biaya material, $C_{fab}$ adalah biaya fabrikasi, $C_{asm}$ adalah biaya perakitan, $C_{op}$ adalah biaya operasional, $C_{mnt}$ adalah biaya pemeliharaan, dan $C_{disp}$ adalah biaya disposal. Untuk produk perangkat medis sekali pakai atau produk dengan siklus pendek, komponen $C_{mat}$ dan $C_{fab}$ mendominasi total biaya.

### 2.2 Indeks DFA Boothroyd-Dewhurst

Metode kuantitatif paling terkenal untuk DFA adalah prosedur Boothroyd-Dewhurst, yang menghitung **DFA Efficiency** berdasarkan perbandingan antara waktu perakitan teoritis minimum dengan waktu perakitan aktual:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{act} \cdot t_{act}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen (biasanya $N_{min}=1$ untuk produk monoblok), $t_{min}$ adalah waktu minimum per operasi (standar Boothroyd sekitar 1,5–3 detik per komponen tergantung orientasi), $N_{act}$ adalah jumlah aktual komponen, dan $t_{act}$ adalah waktu perakitan aktual.

Nilai $\eta_{DFA}$ dapat ditafsirkan secara kualitatif sebagai berikut:

$$\eta_{DFA} \in 
\begin{cases}
[0\%, 30\%] & \text{sangat tidak efisien} \\
(30\%, 50\%] & \text{kurang efisien} \\
(50\%, 70\%] & \text{cukup efisien} \\
(70\%, 100\%] & \text{sangat efisien}
\end{cases}$$

### 2.3 Indeks DFM dan Rasio Manufaktur

Untuk komponen individual, DFM diukur dengan **Rasio Manufaktur** (*manufacturing efficiency ratio*):

$$\rho_{MF} = \frac{C_{material}}{C_{total\,component}} = \frac{C_{m}}{C_{m} + C_{p} + C_{t} + C_{q}}$$

di mana $C_{p}$ adalah biaya proses, $C_{t}$ adalah biaya *tooling*, dan $C_{q}$ adalah biaya inspeksi kualitas. Desain yang baik menargetkan $\rho_{MF} > 0,5$ untuk komponen yang massalnya didominasi material, dan semakin tinggi nilai ini untuk komponen yang diproduksi massal.

### 2.4 Kriteria Desain untuk Eliminasi Komponen

Boothroyd-Dewhurst menetapkan tiga pertanyaan krusial untuk setiap komponen:

1. Apakah komponen tersebut bergerak relatif terhadap komponen lain selama operasi? Jika **tidak**, kandidat eliminasi.
2. Apakah komponen tersebut harus terbuat dari material yang berbeda dari komponen lain? Jika **tidak**, kandidat eliminasi.
3. Apakah komponen tersebut harus dipisahkan dari komponen lain untuk memudahkan *assembly* atau *disassembly*? Jika **tidak**, kandidat eliminasi.

Jawaban "tidak" pada ketiganya menunjukkan bahwa komponen tersebut layak digabungkan (*combine*). Formulasi keputusan eliminasi komponen ke-$i$ dapat dinyatakan:

$$E_i = \prod_{k=1}^{3} \mathbb{1}_{\{jawab_k = \text{tidak}\}}$$

di mana $\mathbb{1}$ adalah fungsi indikator Bernouilli. $E_i = 1$ berarti komponen ke-$i$ layak dieliminasi; $E_i = 0$ berarti harus dipertahankan.

### 2.5 Kerangka Multi-Kriteria DFMA (MCDM-DFMA)

Merujuk pada pendekatan Islam (2024), untuk kasus dengan banyak alternatif desain dan kriteria yang saling bertentangan, digunakan kerangka **Weighted Sum Model** (WSM) atau **TOPSIS**:

$$S_j = \sum_{i=1}^{n} w_i \cdot x_{ij}, \quad \sum_{i=1}^{n} w_i = 1$$

di mana $S_j$ adalah skor alternatif desain ke-$j$, $w_i$ adalah bobot kriteria ke-$i$ (ditentukan melalui AHP atau Delphi), dan $x_{ij}$ adalah nilai ternormalisasi kriteria ke-$i$ untuk alternatif $j$.

Untuk TOPSIS, *Closeness Coefficient* ke solusi ideal positif dihitung sebagai:

$$CC_j = \frac{D_j^-}{D_j^+ + D_j^-}$$

di mana $D_j^+$ dan $D_j^-$ masing-masing adalah jarak Euclidean ke solusi ideal positif dan negatif. Alternatif dengan $CC_j$ tertinggi adalah desain optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti **delapan tahapan sistematis** yang diadopsi dari standar ISO 9001 dan praktik terbaik industri perangkat medis:

**Tahap 1 – Analisis Fungsi Produk.** Definisikan *functional decomposition* produk, identifikasi *primary function* (misalnya: menyaring dan menampung), *secondary function* (misalnya: mencegah kebocoran), dan *constraint function* (misalnya: food-grade material).

**Tahap 2 – Inventarisasi Komponen Eksisting.** Buat Bill of Materials (BOM) lengkap, dokumentasikan geometri, toleransi, material, dan proses fabrikasi setiap komponen. Pada studi Amirullah dan Jakaria (2024), produk awal memiliki 8 komponen utama: badan keranjang (1), tutup ulir (1), ring pengunci (1), saringan stainless (1), gagang (1), gasket silikon (1), dan dua pengencang.

**Tahap 3 – Perhitungan DFA Baseline.** Hitung $\eta_{DFA}^{baseline}$ menggunakan rumus Boothroyd-Dewhurst, identifikasi *time-consuming* operations, dan petakan *handling difficulties* (orientasi, insert, fasten).

**Tahap 4 – Generate Konsep Redesain.** Buat minimal 3–5 alternatif desain dengan variasi: (a) integrasi tutup-badan dalam satu komponen, (b) penggantian ulir dengan *snap-fit*, (c) penggantian gasket silikon dengan elastomer termoplastik (TPE) co-injection, (d) perubahan material ke polimer food-grade (PP, PE, atau Tritan).

**Tahap 5 – Evaluasi Multi-Kriteria.** Terapkan WSM atau TOPSIS dengan kriteria: biaya produksi, waktu perakitan, jumlah komponen, berat, estetika, kemampuan daur ulang, dan kepatuhan regulasi. Bobot ditentukan melalui AHP dengan keterlibatan *stakeholder* (insinyur desain, *quality assurance*, *regulatory affairs*, pengguna).

**Tahap 6 – Simulasi Proses.** Gunakan simulasi *injection molding* (Moldflow), *finite element analysis* (ANSYS), dan *kinematic simulation* perakitan untuk memvalidasi desain.

**Tahap 7 – Prototipe dan Pengujian.** Buat prototipe dengan *3D printing* atau *soft tooling*, lakukan uji fungsional, uji kebocoran, uji siklus buka-tutup, dan uji *biocompatibility