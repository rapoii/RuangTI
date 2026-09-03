# 1983 — Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Ekstensi Lintas Sektor Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin kompetitif, kemampuan untuk merancang produk yang ekonomis, mudah dirakit, dan memiliki reliabilitas tinggi menjadi pembeda utama antara perusahaan yang bertahan dan yang tertinggal. Adam Rizki Amirullah dan Ribangun Bamban Jakaria (2024), dalam artikel ilmiah yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), mengangkat permasalahan nyata pada produk alat kesehatan rumahan berupa *coffee enema basket* — sebuah komponen yang berfungsi sebagai saringan untuk prosedur enema kopi dalam konteks terapi alternatif. Produk ini pada desain awalnya memiliki permasalahan klasik berupa jumlah零件 (*parts count*) yang berlebih, proses perakitan yang kompleks, biaya produksi yang tidak efisien, serta waktu fabrikasi yang panjang. Permasalahan ini bukan kasus terisolasi, melainkan merepresentasikan fenomena industri yang meluas di mana desainer produk belum mengintegrasikan pertimbangan manufaktur dan perakitan sejak fase konseptual.

Urgensi ekonomis dari penerapan DFMA semakin jelas ketika kita merujuk pada studi Mubashir Islam (2024) yang dipublikasikan dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Dalam konteks konstruksi jembatan prefabrikasi, Islam menunjukkan bahwa keputusan desain konvensional yang hanya mempertimbangkan biaya dan kecukupan struktural, tanpa memperhitungkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi sejak awal, menghasilkan *buildability problems* yang baru terdeteksi pada tahap shop-drawing atau bahkan di lapangan — saat desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya perubahan yang sangat tinggi. Paralelisme dengan studi Amirullah dan Jakaria sangat kuat: keduanya menunjukkan bahwa *late-stage design errors* (kesalahan desain tahap lanjut) memiliki dampak biaya yang eskalatif.

Konteks industri alat kesehatan rumahan di Indonesia menunjukkan tren pertumbuhan yang signifikan. Produk-produk *wellness device* seperti *coffee enema basket* umumnya diproduksi oleh UMKM dengan kapasitas teknik yang terbatas, menggunakan komponen-komponen yang dibeli secara terpisah (sekrup, mur, ring, *handle*, *mesh filter*, *frame*), dan dirakit secara manual. Desain awal yang tidak mempertimbangkan *Design for Manufacture and Assembly* (DFMA) menghasilkan produk dengan *part count* tinggi (seringkali 10–15 bagian diskrit), toleransi yang sulit dicapai pada perakitan manual, dan biaya produksi yang sulit ditekan. Melalui pendekatan DFMA, Amirullah dan Jakaria (2024) mendemonstrasikan bagaimana redesain sistematis dapat mengurangi kompleksitas struktural tanpa mengorbankan fungsi produk. Pendekatan ini juga sejalan dengan semangat *Industry 4.0* dan prinsip *lean manufacturing* yang menekankan eliminasi waste dalam seluruh rantai nilai.

Lebih lanjut, integrasi metodologi DFMA dengan platform digital seperti BIM (sebagaimana dikembangkan Islam, 2024) menunjukkan bahwa pendekatan ini semakin relevan dalam konteks transformasi industri 4.0. Untuk industri alat kesehatan dan produk konsumen, meskipun integrasi BIM belum lazim, prinsip-prinsip *digital twin* dan *computer-aided design* dengan simulasi perakitan virtual sudah mulai diadopsi. Kombinasi DFMA dengan simulasi digital memungkinkan prediksi *assembly time*, *assembly cost*, dan *manufacturing cost* pada fase desain — jauh sebelum produksi fisik dilakukan.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) berakar pada dua pilar utama: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Pilar DFM berfokus pada optimalisasi proses fabrikasi individual setiap komponen, sedangkan pilar DFA berfokus pada minimalisasi upaya perakitan produk secara keseluruhan. Pendekatan Boothroyd-Dewhurst yang menjadi referensi klasik dalam DFMA menyediakan kerangka kuantitatif untuk evaluasi desain.

### 2.1 Indeks Desain untuk Perakitan (DFA Index)

Indeks efisiensi perakitan menurut Boothroyd dapat diformulasikan sebagai:

$$\eta_{assembly} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a}$$

Di mana:
- $\eta_{assembly}$ = efisiensi perakitan (rasio, fraksi desimal)
- $N_{min}$ = jumlah minimum teoritis bagian yang diperlukan untuk memenuhi fungsi utama produk
- $t_{min}$ = waktu perakitan minimum teoritis per bagian (detik atau menit)
- $N_a$ = jumlah aktual bagian dalam desain
- $t_a$ = waktu perakitan aktual rata-rata per bagian

Semakin mendekati nilai 1,0, semakin efisien desain perakitan. Desain dengan $\eta_{assembly} < 0{,}5$ dianggap memiliki peluang besar untuk redesain.

### 2.2 Fungsi Biaya Manufaktur Total

Total biaya produksi produk dapat dimodelkan sebagai:

$$C_{total} = \sum_{i=1}^{N} \left( C_{m,i} + C_{a,i} \right) + C_{overhead}$$

Di mana:
- $C_{total}$ = biaya total produksi per unit
- $N$ = jumlah komponen diskrit dalam produk
- $C_{m,i}$ = biaya manufaktur komponen $i$ ($)
- $C_{a,i}$ = biaya perakitan komponen $i$ ($)
- $C_{overhead}$ = biaya overhead pabrik tetap per unit ($)

Komponen biaya manufaktur individual:

$$C_{m,i} = C_{material,i} + C_{machining,i} + C_{tooling,i} + C_{setup,i}$$

### 2.3 Model Biaya Perakitan

Biaya perakitan keseluruhan:

$$C_a = t_a \cdot R_{labor} \cdot (1 + f_{overhead})$$

Di mana $R_{labor}$ adalah tarif tenaga kerja per satuan waktu dan $f_{overhead}$ adalah faktor biaya overhead variabel.

### 2.4 Reduksi Biaya Kumulatif

Persentase reduksi biaya setelah redesain DFMA:

$$\Delta C_{\%} = \frac{C_{total}^{original} - C_{total}^{redesign}}{C_{total}^{original}} \times 100\%$$

### 2.5 Throughput dan Efisiensi Proses

Untuk analisis waktu siklus manufaktur:

$$T_{cycle} = \max_{i} \left( t_{m,i} \right) + t_{assembly}$$

Di mana $t_{m,i}$ adalah waktu manufaktur komponen $i$ dan $t_{assembly}$ adalah total waktu perakitan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) mengusulkan prosedur sistematis enam tahap untuk redesain produk menggunakan DFMA, yang dapat distandardisasi sebagai SOP rekayasa produk:

**Tahap 1 — Analisis Desain Eksisting.** Melakukan *reverse engineering* terhadap produk *coffee enema basket* original, mencakup identifikasi seluruh komponen diskrit, dokumentasi dimensi, material, proses fabrikasi, dan langkah perakitan. Data dikuantifikasi dalam *Bill of Materials* (BoM) dan diagram eksplosi perakitan.

**Tahap 2 — Analisis Fungsi.** Setiap komponen diklasifikasikan menggunakan matriks fungsi DFMA: (a) komponen yang memberikan fungsi struktural esensial, (b) komponen yang memberikan fungsi tambahan (misalnya estetika atau ergonomi), dan (c) komponen yang tidak memberikan fungsi signifikan (kandidat eliminasi).

**Tahap 3 — Penerapan Aturan DFA (Boothroyd).** Setiap komponen dievaluasi terhadap tiga pertanyaan kritis: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (2) Apakah komponen harus terpisah karena memerlukan material berbeda? (3) Apakah komponen harus terpisah karena memerlukan akses untuk assembly/disassembly? Jika seluruh jawaban "tidak", komponen layak digabungkan.

**Tahap 4 — Redesain Konseptual.** Mengembangkan alternatif desain yang mengintegrasikan komponen multifungsi, menggunakan proses fabrikasi unified (misalnya *sheet metal forming* menggantikan fabrikasi pengelasan multi-bagian), dan memilih material yang kompatibel dengan proses fabrikasi tunggal.

**Tahap 5 — Evaluasi Kuantitatif.** Menghitung $\eta_{assembly}$, $C_{total}$, dan $T_{cycle}$ untuk desain baru dan desain original, kemudian menganalisis besaran $\Delta C_{\%}$ dan perbaikan indeks DFA.

**Tahap 6 — Prototipe dan Validasi.** Membuat prototipe fisik desain baru dan melakukan uji fungsional serta pengukuran aktual waktu perakitan untuk validasi terhadap prediksi teoritis.

Standar operasional ini juga diperkuat oleh framework integrasi DfMA-BIM yang dikembangkan Islam (2024, DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), di mana evaluasi multi-kriteria berbasis BIM memungkinkan simulasi *manufacturability* dan *assembly* secara virtual sebelum fabrikasi aktual. Pendekatan ini sangat relevan untuk industri modern yang membutuhkan keputusan desain berbasis data.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter yang dilaporkan Amirullah dan Jakaria (2024), berikut adalah rekonstruksi perhitungan numerik untuk redesain *coffee enema basket*:

**Desain Original (Sebelum DFMA):**
- Jumlah komponen ($N_a^{orig}$): 12 bagian (rangka atas, rangka bawah, *mesh filter* atas, *mesh filter* bawah, 4 sekrup, 4 mur, *handle* dengan 2 ring pengunci)
- Material: Stainless steel 304 (bagian struktural), baja karbon (pengencang)
- Waktu fabrikasi rata-rata per komponen: 8,5 menit
- Waktu perakitan rata-rata per komponen: 2,5 menit

**Desain Redesain (Setelah DFMA):**
- Jumlah komponen ($N_a^{new}$): 7 bagian (rangka tunggal press-formed, *mesh filter* terintegrasi, *handle* monoblok, 2 pin pegas sebagai pengencang)
- Material: Stainless steel 304 unified
- Waktu fabrikasi rata-rata: 12 menit per unit (dengan operasi press-forming)
- Waktu perakitan rata-rata: 1,2 menit per komponen

### Perhitungan Biaya Manufaktur

Misalkan parameter biaya sebagai berikut (estimasi industri UMKM Indonesia, 2024):
- $C_{material,i}^{orig}$ = Rp 15.000/komponen untuk komponen baja karbon, Rp 22.000/komponen untuk stainless
- $C_{machining,i}$ = Rp 35.000 untuk komponen orig (proses bubut, las, dan finishing)
- $C_{machining,i}^{new}$ = Rp 28.000 untuk komponen redesain (press-forming lebih efisien)
- $R_{labor}$ = Rp 25.000/jam
- $f_{overhead}$ = 0,30 (30%)

**Biaya Original:**

$$C_{m,i}^{orig} = 22.000 + 35.000 = Rp\,57.000/\text{komponen}$$

$$C_{total,m}^{orig} = 12 \times 57.000 = Rp\,684.000$$

$$C_a^{orig} = (12 \times 2{,}5) \times \frac{25.000}{60} \times 1{,}3 = Rp\,16.250$$

$$C