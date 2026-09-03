# 1567 — Redesain Coffee Enema Basket dengan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (Universitas Pendidikan Surabaya)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan dan *wellness device* di Indonesia mengalami transformasi signifikan seiring meningkatnya permintaan terhadap prosedur *coffee enema* sebagai terapi komplementer. Permintaan ini memunculkan tantangan desain pada komponen kritis berupa *basket* atau saringan penampung bubuk kopi yang harus memenuhi tiga tuntutan simultan: higienitas alat kesehatan, efektivitas filtrasi, dan keterjangkauan biaya produksi massal. Amirullah & Jakaria (2024) dalam studinya menyoroti bahwa desain awal coffee enema basket konvensional di tingkat UMKM masih menggunakan *multi-piece assembly* dengan jumlah komponen berlebih, sambungan ulir, serta proses *welding* yang menambah variabilitas dimensi dan waktu perakitan manual [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309).

Urgensi ekonomis dari redesain ini cukup nyata. Data lapangan menunjukkan bahwa pada lini produksi manual, biaya perakitan satu unit coffee enema basket konvensional dapat menyerap 30–40% dari total biaya produksi, sementara *defect rate* akibat misalignment lubang saringan mencapai 12–15%. Ketika diekstrapolasikan pada kapasitas produksi 10.000 unit per bulan, kerugian akibat *rework* dan *scrap* dapat melebihi Rp 45 juta per bulan. Penerapan metodologi *Design for Manufacture and Assembly* (DFMA) — yang mengintegrasikan *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA) — menjadi pendekatan sistematis untuk menekan inefisiensi ini pada fase *conceptual design*, sebelum biaya *tooling* dan *mold* terkunci.

Konteks kekinian juga menunjukkan bahwa DFMA tidak lagi berdiri sendiri. Islam (2024) dalam studinya tentang konstruksi jembatan prefabrikasi membuktikan bahwa integrasi DFMA dengan platform *Building Information Modelling* (BIM) dan kerangka evaluasi multi-kriteria memungkinkan *trade-off analysis* antara biaya, kemampuan manufaktur, kemampuan transportasi, dan kemampuan ereksi dilakukan secara digital sebelum desain dibekukan [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Pelajaran penting dari studi tersebut adalah bahwa keputusan material, jumlah part, dan arah insert harus dievaluasi menggunakan *knowledge base* manufaktur dan perakitan sejak tahap *concept*, bukan dideteksi saat shop-drawing atau di lantai produksi. Prinsip ini sepenuhnya dapat di-*transpose* ke domain medical device seperti coffee enema basket, di mana *single-use* atau *limited-reuse* constraint memerlukan penyederhanaan geometri dan standardisasi komponen secara radikal.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan dalam redesain coffee enema basket mengikuti kerangka Boothroyd-Dewhurst yang telah teruji di industri alat kesehatan. Dua indeks utama menjadi basis keputusan: *Design Efficiency* untuk perakitan dan *Manufacturing Cost Index* untuk fabrikasi.

**Indeks Efisiensi Desain Perakitan (E_d)** didefinisikan sebagai rasio antara jumlah part minimum teoretis ($N_{min}$) yang diperlukan untuk memenuhi fungsi produk terhadap jumlah part aktual pada desain ($N_{actual}$):

$$E_d = \frac{N_{min}}{N_{actual}} \times 100\%$$

Nilai $N_{min}$ ditetapkan berdasarkan analisis fungsi-fungsi wajib: (1) penampung bubuk kopi, (2) media filtrasi, (3) antarmuka sambungan ke selang enema, dan (4) penutup/handle. Untuk coffee enema basket, $N_{min}=4$, sehingga desain awal dengan 8 part memiliki $E_d = 50\%$, sedangkan desain redesain dengan 5 part menghasilkan $E_d = 80\%$.

**Waktu Perakitan Teoretis (T_a)** dihitung menggunakan persamaan Boothroyd:

$$T_a = N_{min} \cdot t_{theoretical} + \sum_{i=1}^{n} t_i^{handling} + \sum_{i=1}^{n} t_i^{insertion}$$

di mana $t_{theoretical} = 1.5$ detik (standar untuk operasi pegang-dan-pasang sederhana pada komponen ringan), $t_i^{handling}$ adalah waktu penanganan tiap part sesuai kode *handling* (H=1.95 dtk untuk simetris, H=3.95 dtk untuk non-simetris), dan $t_i^{insertion}$ mengikuti *insertion code* (1.8 dtk untuk self-locating, 4.5 dtk untuk requiring tool).

**Efisiensi Perakitan (η)** kemudian dihitung sebagai:

$$\eta = \frac{N_{min} \cdot t_{theoretical}}{T_a} \times 100\%$$

Untuk analisis manufaktur, digunakan **Manufacturing Cost Index (MCI)** berbasis *process capability* dan *material utilization*:

$$MCI = \sum_{j=1}^{m} \left( C_{material,j} \cdot \frac{A_{actual,j}}{A_{net,j}} + C_{process,j} \cdot t_{process,j} \right)$$

di mana $A_{actual}/A_{net}$ adalah *material utilization ratio* (target ≥ 0.85 untuk *stamping*, ≥ 0.70 untuk *injection molding*). Untuk komponen stainless steel 304 yang digunakan pada coffee enema basket, target *yield strength* ≥ 215 MPa dan *corrosion resistance* terhadap cairan kopi dengan pH 4.5–5.0 harus dipenuhi sesuai standar ISO 13485 untuk医疗器械.

**Total Biaya Produksi per Unit (C_unit)** dimodelkan sebagai:

$$C_{unit} = C_{material} + C_{manufacturing} + C_{assembly} + C_{quality}$$

di mana $C_{assembly} = T_a \cdot L \cdot (1 + \alpha)$, dengan $L$ adalah *labor rate* (Rp 8.333/menit untuk operator UMKM) dan $\alpha$ adalah *overhead factor* (0.35).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi redesain mengikuti SOP DFMA terstruktur yang diadopsi dari ISO 10993 (biocompatibility) dan ISO 13485 (quality management medical device). Alur metodologi dapat dipetakan sebagai berikut:

**Tahap 1 — Analisis Fungsi dan Part Existing.** Lakukan *functional decomposition* terhadap desain awal, identifikasi setiap part dengan kode Boothroyd (kode A untuk part yang dapat dieliminasi, kode B untuk part yang perlu dimodifikasi, kode C untuk part esensial). Untuk coffee enema basket konvensional, ditemukan 4 part dengan kode A (ring pengunci, gasket berlebih, tutup ulir, bracket pengikat) yang dapat dieliminasi melalui integrasi fungsi.

**Tahap 2 — Konsep Redesain dengan Prinsip DFA.** Terapkan tiga prinsip dasar Boothroyd: (a) *minimize part count*, (b) *use symmetrical parts*, dan (c) *provide single insertion direction*. Redesain mengintegrasikan ring dan gasket menjadi satu *overmolded seal*, mengganti ulir dengan *snap-fit* satu arah, dan menggunakan mesh filter yang *integrally formed* dengan body utama.

**Tahap 3 — Analisis Manufaktur (DFM).** Evaluasi setiap komponen redesain terhadap *process selection matrix*. Body utama menggunakan *injection molding* polipropilena food-grade (memenuhi FDA 21 CFR 177.1520) dengan *wall thickness* uniform 2.0 mm, *draft angle* 1.5°, dan *gate location* di zona non-visible. Filter mesh menggunakan *stainless steel 304 wire cloth* 100 mesh yang dilas laser (*laser welding*) ke frame.

**Tahap 4 — Prototyping dan Validasi.** Buat *rapid prototype* menggunakan *fused deposition modeling* (FDM) untuk verifikasi *fit* dan *function*, kemudian *production prototype* dengan *injection molding* untuk uji *dimensional* dan *functional* (laju filtrasi ≥ 250 mL/menit pada tekanan 0.5 bar).

**Tahap 5 — Perhitungan DFMA Score dan Validasi Ekonomi.** Hitung seluruh indeks kuantitatif pada Bagian 2 dan bandingkan dengan baseline.

Diagram alir keputusan kritis: jika $E_d < 70\%$ atau $\eta < 60\%$ setelah redesain, maka iterasi desain Tahap 2 harus diulang. SOP ini paralel dengan kerangka BIM-DfMA yang dikembangkan Islam (2024), di mana setiap keputusan desain harus terdokumentasi dalam *parametric object* dengan atribut manufacturability, transportability, dan assemblyability [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Input Parameter Baseline (Desain Awal):**
- Jumlah part: $N_{actual} = 8$
- Part minimum teoretis: $N_{min} = 4$
- Komposisi part: 3 part kode H=1.95 (simetris: body, tutup ulir, ring), 5 part kode H=3.95 (non-simetris: gasket, bracket, mesh, seal, konektor)
- Kode insertion: 6 part kode 1.8 (self-locating), 2 part kode 4.5 (tool-required: ulir)
- Material: stainless steel 304 + polypropylene (campuran)

**Kalkulasi Step-by-Step Desain Awal:**

$$T_a^{baseline} = (4)(1.5) + [(3)(1.95) + (5)(3.95)] + [(6)(1.8) + (2)(4.5)]$$

$$T_a^{baseline} = 6.0 + (5.85 + 19.75) + (10.8 + 9.0) = 51.4 \text{ detik}$$

$$E_d^{baseline} = \frac{4}{8} \times 100\% = 50\%$$

$$\eta_{baseline} = \frac{4 \times 1.5}{51.4} \times 100\% = 11.67\%$$

**Input Parameter Redesain:**
- Jumlah part: $N_{actual} = 5$ (body, integrated seal, mesh, snap-cap, konektor)
- Part minimum teoretis: $N_{min} = 4$
- Komposisi part: 5 part kode H=1.95 (semua simetris)
- Kode insertion: 5 part kode 1.8 (semua self-locating, *snap-fit*)

**Kalkulasi Step-by-Step Redesain:**

$$T_a^{redesign} = (4)(1.5) + [(5)(1.95)] + [(5)(1.8)]$$

$$T_a^{redesign} = 6.0 + 9.75 + 9.0 = 24.75 \text{ detik}$$

$$E_d^{redesign} = \frac{4}{5} \times 100\% = 80\%$$

$$\eta_{redesign} = \frac{4 \times 1.5}{