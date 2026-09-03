# 1472 — Relaksasi *p-Lagrangian* untuk Masalah MIQCQP Nonkonveks Separabel: Kerangka Optimasi Industri untuk Pengadaan Kompleks dan Perencanaan Stokastik Dua-Tahap

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *The p-Lagrangian relaxation for separable nonconvex MIQCQP problems*
**Jurnal & Sitasi Utama:** Tiago Andrade, Nikita Belyak, Andrew Eberhard (2022). *Journal of Global Optimization*. DOI: [https://doi.org/10.1007/s10898-022-01138-y](https://doi.org/10.1007/s10898-022-01138-y)
**Sitasi Pendukung:** Md. Rakibul Hasan, Adel Elomri, Chefi Triki (2023). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2023.3284310](https://doi.org/10.1109/access.2023.3284310)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan optimasi nonkonveks berskala besar masih menjadi salah satu tantangan paling persisten dalam Teknik Industri kontemporer, khususnya ketika struktur masalahnya mengharuskan keputusan diambil secara simultan pada level fasilitas, lot-sizing, logistik, dan risiko operasional. Andrade, Belyak, dan Eberhard (2022) dalam *Journal of Global Optimization* (DOI: [10.1007/s10898-022-01138-y](https://doi.org/10.1007/s10898-022-01138-y)) secara eksplisit menyatakan bahwa masalah *mixed-integer quadratically constrained quadratic programming* (MIQCQP) yang muncul sebagai *deterministic equivalent representation* dari program stokastik dua-tahap (dua-tahap *stochastic programming*) merupakan domain aplikasi yang paling menderita akibat keterbatasan *solver* komersial. Struktur deterministik semacam ini lazim dijumpai pada perencanaan kapasitas pabrik farmasi, desain jaringan energi dengan ketidakpastian permintaan, serta alokasi sumber daya pada rantai pasok multi-echelon. Ketika fungsi tujuannya nonkonveks—misalnya karena biaya kuadratik varians, kerugian daya, atau fungsi piecewise elastisitas permintaan—*branch-and-bound* standar kehilangan kemampuan mempartisi ruang solusi secara efisien, sehingga *bound* relaksasi LP menjadi terlalu longgar untuk memangkas *tree* secara berarti.

Urgensi operasional semakin terasa pada konteks pengadaan barang dan jasa logistik, di mana Hasan, Elomri, dan Triki (2023) dalam *IEEE Access* (DOI: [10.1109/access.2023.3284310](https://doi.org/10.1109/access.2023.3284310)) mendokumentasikan bahwa lelang kombinatorial untuk *freight transport service procurement* (FTSP) tumbuh menjadi mekanisme alokasi yang kaya akan kopling keputusan. Pada FTSP, setiap *bid* merupakan bundel rute yang harus dievaluasi secara bersamaan untuk menghindari inkonsistensi kapasitas, sehingga *Winner Determination Problem* (WDP)-nya adalah program integer 0-1 berskala besar dengan kendala kopling yang secara struktural identik dengan kendala tautan pada program stokastik dua-tahap. Kedua literatur ini mempertegas satu tesis: industri modern membutuhkan algoritma dekomposisi yang secara eksplisit memanfaatkan *separability* masalah dan dapat secara progresif mengetatkan *bound* tanpa mengorbankan struktur komputasional.

Di sinilah kontribusi utama Andrade dkk. (2022) menjadi relevan: mereka mengusulkan *p-Lagrangian decomposition* yang menggabungkan dekomposisi Lagrangian klasik dengan *reformulated normalised multiparametric disaggregation technique*, sebuah teknik relaksasi berbasis pemecahan variabel slack ke dalam $p$ parameter multiplikator independen. Dengan menaikkan parameter presisi $p$, bound yang dihasilkan dapat dibuat konvergen secara asimptotik terhadap nilai optimal masalah asli, sementara submasalahnya tetap merupakan MIQCQP (atau bahkan MILP) yang lebih tractable. Pendekatan ini mengembalikan dimensi *solver* industri—yang sejak satu dekade terakhir didominasi Gurobi, CPLEX, dan SCIP—kepada jalur dekomposisi yang ramah terhadap paralelisasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Bentuk Umum MIQCQP Separabel

Andrade, Belyak, dan Eberhard (2022) memformalkan masalah MIQCQP separabel sebagai berikut. Misalkan indeks skenario $\omega \in \Omega$ mendefinisikan struktur dua-tahap dengan variabel tahap-pertama $x \in \mathbb{R}^{n_1} \times \mathbb{Z}^{m_1}$ dan variabel tahap-kedua $y_\omega \in \mathbb{R}^{n_2} \times \mathbb{Z}^{m_2}$ bersyarat pada skenario $\omega$. Deterministik ekuivalennya dapat ditulis sebagai:

$$
z^{\star} \;=\; \min_{x,\,y_\omega} \; \mathbb{E}_\omega\!\left[\, c^T x + d_\omega^T y_\omega + x^T Q\, x + y_\omega^T R_\omega y_\omega + x^T N_\omega y_\omega \,\right]
\tag{1}
$$

dengan kendala:

$$
x \in \mathcal{X} := \{(x,u) \mid A x \geq b,\; u \in \{0,1\}^{m_1},\; u \text{ mengaktifkan } x\},
$$

$$
(x,y_\omega) \in \mathcal{Y}_\omega \;\; \forall\,\omega \in \Omega.
$$

Struktur *separable* muncul ketika kendala kopling hanya menghubungkan variabel tahap-pertama, sehingga masalah dapat dipartisi menjadi satu master (tahap-pertama) dan $|\Omega|$ submasalah independen (tahap-kedua). Untuk eksposisi algoritma, Andrade dkk. (2022) menggunakan abstraksi kanonik:

$$
\min_{x_1,\ldots,x_K} \; \sum_{k=1}^{K} f_k(x_k) \quad \text{s.t.} \quad \sum_{k=1}^{K} A_k x_k \;\geq\; b, \quad x_k \in \mathcal{X}_k \