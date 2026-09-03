# 2735 — Rekayasa Ulang Produk dan Infrastruktur Berbasis Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Buildability untuk Efisiensi Rantai Nilai Manufaktur dan Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Rekayasa ulang produk dengan pendekatan **Design for Manufacture and Assembly (DFMA)** merupakan salah satu pilar strategis dalam transformasi manufaktur modern yang didorong oleh meningkatnya kompleksitas produk, volatilitas biaya bahan baku, serta tuntutan time-to-market yang semakin pendek. Amirullah dan Jakaria (2024) dalam studinya menyoroti kasus nyata pada produk **coffee enema basket**—sebuah perangkat medis rumah tangga yang berfungsi sebagai reservoir tempat penampung bubuk kopi dan filtrat untuk prosedur enema. Produk ini sebelumnya dirancang tanpa pertimbangan sistematis terhadap proses manufaktur dan perakitan, sehingga menghasilkan desain yang memiliki **jumlah komponen berlebih, operasi perakitan yang tidak efisien, serta waste material pada tahap fabrikasi** [https://doi.org/10.21070/ups.3309]. Urgensi redesign muncul dari kebutuhan untuk menurunkan **biaya produksi, mempersingkat cycle time perakitan, serta meningkatkan ergonomi dan keamanan pengguna** dalam konteks persaingan pasar alat kesehatan rumah tangga yang semakin ketat.

Di skala yang lebih besar dan berbeda sektor, Islam (2024) mendemonstrasikan bahwa persoalan yang sama—yaitu ketidakpedulian desain terhadap realitas manufaktur, logistik, dan ereksi—juga terjadi pada **konstruksi jembatan pratekan prefabrikasi**. Paper tersebut secara eksplisit mengidentifikasi *root cause problem*: pemilihan alternatif desain jembatan secara konvensional hanya didasarkan pada **biaya awal dan kecukupan struktural**, sementara pengetahuan tentang manufacturability, lifting, transportation, dan erection baru dimasukkan **setelah desain difinalisasi**, sehingga permasalahan buildability baru teridentifikasi saat shop-drawing sudah jadi atau bahkan di lapangan, ketika mould sudah dipotong dan koreksi hanya mungkin dilakukan dengan biaya tinggi [https://doi.org/10.63125/av45jf21]. Kedua paper ini, meskipun beroperasi pada skala berbeda (produk konsumen vs. infrastruktur jembatan), menunjukkan **pattern kegagalan desain yang identik**: lemahnya integrasi informasi manufaktur dan perakitan ke dalam fase conceptual dan preliminary design.

Secara ekonomi, kegagalan integrasi ini menimbulkan inefisiensi yang terukur. Studi-studi klasik dalam domain DFMA menunjukkan bahwa sekitar **70–80% biaya total produk (Total Life Cycle Cost)** ditentukan pada fase conceptual design, padahal di fase ini hanya sekitar **5–10% biaya pengembangan aktual** dikeluarkan. Ini menciptakan paradoks klasik yang disebut **design cost leverage**. Dengan menerapkan DFMA—yang menggabungkan **Design for Manufacturing (DFM)** untuk optimasi proses fabrikasi dan **Design for Assembly (DFA)** untuk meminimalkan operasi perakitan—organisasi dapat menangkap penghematan biaya yang signifikan sebelum komitmen modal diturunkan ke lantai produksi. Kedua paper di atas menjadi bukti empiris bahwa DFMA bukan sekadar konsep teoretis, melainkan kerangka kerja terapan yang valid baik untuk produk volume rendah-bervariasi tinggi (medical device) maupun untuk proyek infrastruktur modal-intensif (jembatan prefabrikasi).

Konteks industri saat ini juga didorong oleh **Industry 4.0**, di mana digitalisasi proses desain memungkinkan integrasi langsung antara **CAD, CAM, CAE, dan sistem ERP/MES**, sehingga keputusan DFMA dapat di-validate secara otomatis melalui simulasi manufacturability dan assembly simulation. Pada paper Amirullah dan Jakaria (DOI: 10.21070/ups.3309), integrasi ini dieksploitasi untuk melakukan redesign berbasis analisis DFA Boothroyd-Dewhurst, sedangkan pada paper Islam (DOI: 10.63125/av45jf21), integrasi dilakukan melalui **Building Information Modelling (BIM)** yang memungkinkan visualisasi clash detection dan fabrikasi modul jembatan secara real-time sebelum dilakukan evaluation multi-kriteria. Keduanya merepresentasikan evolusi DFMA dari pendekatan manual menuju **computational DFMA**, sebuah tren yang akan semakin dominan dalam dekade berikutnya.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan dalam kedua paper bersandar pada **metodologi Boothroyd-Dewhurst** sebagai pilar utama DFA, yang menyatakan bahwa setiap operasi perakitan dapat dikuantifikasi melalui **waktu standar insertasi (Tm)** dan **efisiensi handling**. Indeks efisiensi desain dirumuskan sebagai:

$$E_{DFA} = \frac{N_{min}}{N_{aktual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum komponen secara teoritis yang diperlukan untuk memenuhi fungsi desain (berdasarkan *minimum part count analysis*), dan $N_{aktual}$ adalah jumlah komponen aktual dalam desain awal. Nilai $E_{DFA}$ yang rendah mengindikasikan peluang konsolidasi komponen yang besar.

Untuk komponen individual, **waktu perakitan total** dihitung menggunakan persamaan Boothroyd-Dewhurst:

$$T_{assembly} = \sum_{i=1}^{n} (T_{H_i} + T_{I_i} + T_{F_i})$$

dengan $T_{H_i}$ adalah waktu *handling* komponen ke-i (umumnya $\alpha = 1.5$ detik untuk komponen simetris mudah dipegang), $T_{I_i}$ adalah waktu *insertasi* (tergantung pada jenis fastening), dan $T_{F_i}$ adalah waktu *fastening* (misal pengelasan, riveting, atau threading). Pada paper Amirullah dan Jakaria (2024), pengukuran ulang terhadap coffee enema basket awal menghasilkan baseline $T_{assembly}$ yang selanjutnya menjadi target reduksi pasca-redesign [https://doi.org/10.21070/ups.3309].

Pada tataran DFM, **biaya manufaktur per unit** untuk komponen sheet-metal (sebagian besar coffee enema basket dibentuk melalui proses stamping dan bending) dimodelkan sebagai:

$$C_{mfg,i} = C_{mat,i} + C_{proc,i} + C_{tool,i} + C_{overhead}$$

dengan $C_{mat,i}$ adalah biaya material (berdasarkan *buy-to-fly ratio*), $C_{proc,i}$ adalah biaya proses (waktu siklus × tarif mesin), $C_{tool,i}$ adalah amortisasi biaya tooling, dan $C_{overhead}$ adalah alokasi biaya tidak langsung. *Buy-to-fly ratio* didefinisikan sebagai:

$$BTR = \frac{m_{raw}}{m_{part}}$$

Idealnya $BTR \to 1$. Desain awal coffee enema basket yang memiliki banyak fitur cutting kompleks cenderung memiliki $BTR > 3$, yang secara langsung meningkatkan $C_{mat,i}$ [https://doi.org/10.21070/ups.3309].

Pada paper Islam (2024), pendekatan multi-kriteria untuk evaluasi desain jembatan menggunakan kerangka **Analytic Hierarchy Process (AHP)** yang dikombinasikan dengan **Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS)**. Bobot kriteria ditentukan melalui pairwise comparison matrix $A = [a_{ij}]$ dengan konsistensi diukur melalui *Consistency Ratio*:

$$CR = \frac{CI}{RI}, \quad CI = \frac{\lambda_{max} - n}{n - 1}$$

di mana $\lambda_{max}$ adalah eigenvalue maksimum matriks, $n$ adalah jumlah kriteria, dan $RI$ adalah *Random Index* (untuk $n=5$, $RI \approx 1.12$). Syarat konsistensi: $CR < 0.10$. Nilai preferensi TOPSIS untuk alternatif ke- $k$ didefinisikan sebagai:

$$C_k^* = \frac{D_k^-}{D_k^+ + D_k^-}$$

dengan $D_k^+ = \sqrt{\sum_{j=1}^{n} (v_{kj} - v_j^+)^2}$ dan $D_k^- = \sqrt{\sum_{j=1}^{n} (v_{kj} - v_j^-)^2}$, di mana $v_j^+$ dan $v_j^-$ masing-masing adalah *Positive Ideal Solution* dan *Negative Ideal Solution*. Alternatif dengan $C_k^*$ tertinggi dipilih sebagai desain optimum [https://doi.org/10.63125/av45jf21].

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti **lima tahapan prosedural** yang konsisten pada kedua paper, dengan adaptasi sesuai skala proyek:

**Tahap 1 — Analisis Fungsi dan Dekomposisi Produk.** Pada produk coffee enema basket, fungsi inti diidentifikasi sebagai: (i) penahanan bubuk kopi, (ii) filtrasi larutan, (iii) penanganan ergonomis oleh pengguna. Dekomposisi dilakukan melalui *Functional Analysis System Technique (FAST)* untuk memisahkan fungsi primer, sekunder, dan berlebih. Pada proyek jembatan, dekomposisi dilakukan pada level **sub-assembly** (pier, girder, deck slab, parapet) yang selanjutnya dievaluasi kelayakan prefabrikasinya [https://doi.org/10.63125/av45jf21].

**Tahap 2 — Minimasi Komponen (DFA Boothroyd-Dewhurst).** Setiap komponen diuji terhadap tiga pertanyaan kritis: (a) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (b) Apakah komponen harus terbuat dari material berbeda? (c) Apakah komponen harus dipisahkan untuk memudahkan perakitan/disassembly? Jika seluruh jawaban "tidak", maka komponen merupakan kandidat kuat untuk dikonsolidasikan. Pada coffee enema basket, beberapa komponen bracket dan fastener berhasil dikonsolidasikan menjadi satu fitur integral hasil stamping [https://doi.org/10.21070/ups.3309].

**Tahap 3 — Optimasi Proses Manufaktur (DFM).** Seleksi proses dilakukan dengan mempertimbangkan geometri, toleransi, volume produksi, dan biaya. Untuk produk sheet-metal dengan volume rendah hingga sedang, proses **laser cutting + bending** lebih fleksibel dibanding **stamping dies**. Pada konteks jembatan prefabrikasi, optimasi dilakukan terhadap segmentasi girder agar sesuai dengan dimensi kontainer standar (40 ft HC) untuk efisiensi transport [https://doi.org/10.63125/av45jf21].

**Tahap 4 — Simulasi dan Validasi.** Pada produk, simulasi dilakukan menggunakan CAD assembly simulation untuk mendeteksi clash dan mengestimasi waktu perakitan aktual. Pada proyek jembatan, validasi menggunakan **BIM-based clash detection** dan 4D simulation untuk memverifikasi sequence ereksi [https://doi.org/10.63125/av45jf21].

**Tahap 5 — Evaluasi Multi-Kriteria dan Keputusan Akhir.** Khusus untuk infrastruktur, keputusan akhir tidak cukup hanya berdasarkan satu metrik; oleh karena itu digunakan kerangka AHP-TOPSIS seperti telah dibahas pada Bagian 2. Kriteria yang umum dipakai mencakup: biaya manufaktur, waktu ereksi, transportability, structural performance, maintainability, dan sustainability [https://doi.org/10.63125/av45jf21].

```
┌──────────────────────────────────────────┐
│      ALUR DFMA TERINTEGRASI              │
├──────────────────────────────────────────┤
│ [1] Analisis Fungsi (FAST Diagram)       │
│           │                              │
│           ▼                              │
│ [2] Min. Komponen (Boothroyd)            │
│           │                              │
│           ▼                              │
│ [3] Seleksi Proses (DFM Chart)           │
│           │                              │
│           ▼                              │
│ [4] Simulasi Assembly/BIM-4D             │
│           │                              │
│           ▼                              │
│ [5] Evaluasi AHP-TOPSIS → Keputusan     │
└──────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus A — Coffee Enema Basket (berdasarkan Amirullah & Jakaria, 2024).**

Misalkan desain awal memiliki parameter berikut (angka ilustratif yang konsisten dengan tipikal studi DFMA pada produk sheet-metal serupa):

| Parameter | Desain Awal | Redesign DFMA |
|---|---|---|
| Jumlah komponen $N$ | 18 | 11 |
| Operasi fastening | 12 | 5 |
| Buy-to-fly ratio rata-rata | 2.8 | 1.4 |
| Waktu perakitan (detik) | 142 | 78 |

**Perhitungan indeks DFA:**

$$E_{DFA, awal} = \frac{N_{min}}{N_{aktual}} \times 100\% = \frac{11}{18} \times 100\% = 61.1\%$$

$$E_{DFA, redesign} = \frac{11}{11} \times 100\% = 100\%$$

**Reduksi waktu perakitan:**

$$\Delta T = \frac{T_{awal} - T_{redesign}}{T_{awal}} \times 100\% = \frac{142 - 78}{142} \times 100\% \approx 45.1\%$$

Untuk volume produksi $Q = 5{,}000$ unit/tahun dengan tarif tenaga kerja $R_L =$ Rp