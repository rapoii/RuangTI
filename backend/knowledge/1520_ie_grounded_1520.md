# 1520 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biologis dan kimiawi produknya. Susu pasteurisasi memiliki umur simpan (shelf life) antara 7–21 hari pada suhu 2–6°C, sementara produk fermentasi seperti yogurt hanya bertahan 14–30 hari, dan keju segar maksimal 60 hari. Kerusakan mikrobiologis yang dipercepat oleh suhu serta degradasi nutrisi akibat oksidasi menjadikan rantai pasok susu sebagai salah satu sistem logistik paling kompleks dalam industri pangan. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), jaringan rantai pasok susu harus secara simultan menyeimbangkan tiga dimensi keputusan: lokasi fasilitas strategis (pabrik pengolahan, distribution center), aliran operasional antarechelon, dan alokasi inventori yang sensitif terhadap waktu.

Kompleksitas meningkat ketika dirumuskan sebagai masalah multi-objektif. Pengambil keputusan tidak hanya mengejar minimasi total biaya logistik dan operasional, tetapi juga memaksimalkan kesegaran produk (freshness) pada titik konsumsi serta meminimasi emisi karbon. Zhang, Li, dan Ren (2024) dalam studi komplementer (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menegaskan bahwa keputusan kualitas produk dalam rantai pasok reversibel memiliki interdependensi non-linear dengan desain fasilitas, sehingga memerlukan teknik dekomposisi khusus agar dapat diselesaikan secara komputasional efisien.

Urgensi ekonomi dari kerangka kerja ini sangat jelas: FAO melaporkan bahwa 20–25% produk susu global terbuang sebelum sampai ke konsumen, dengan kerugian ekonomi lebih dari USD 30 miliar per tahun. Di Indonesia, sebagai negara dengan konsumsi susu per kapita yang terus naik (sekitar 16,5 kg/kapita/tahun menurut data BPS 2023), inefisiensi rantai pasok susu impor maupun domestik memerlukan pendekatan optimasi yang sophisticated. Oleh karena itu, framework multi-objektif dengan Dekomposisi Benders menjadi relevan secara industri karena mampu memisahkan keputusan investasi strategis (lokasi & kapasitas) dari keputusan operasional (aliran & inventori) sehingga masalah mixed-integer nonlinear programming (MINLP) berukuran besar dapat diselesaikan secara iteratif melalui subproblem linear.

## 2. Landasan Teori & Formulasi Matematis

Kerangka kerja optimisasi mengikuti formulasi Mixed-Integer Linear Programming (MILP) tiga-echelon yang terdiri dari himpunan *supplier/peternakan* ($i \in I$), *pabrik pengolahan* ($j \in J$), *distribution center* ($k \in K$), dan *titik ritel* ($l \in L$) sepanjang periode diskrit $t \in T$. Parameter-parameter utama meliputi: biaya运输 $c_{ij}^t$, kapasitas pengolahan $cap_j$, permintaan ritel $d_l^t$, dan koefisien degradasi kualitas $\lambda$.

**Fungsi Tujuan 1 — Minimasi Total Biaya Rantai Pasok:**

$$\min Z_1 = \sum_{t \in T} \left[ \sum_{i \in I}\sum_{j \in J} c_{ij}^t x_{ij}^t + \sum_{j \in J}\sum_{k \in K} c_{jk}^t y_{jk}^t + \sum_{k \in K}\sum_{l \in L} c_{kl}^t z_{kl}^t + \sum_{j \in J} f_j o_j + \sum_{k \in K} g_k p_k + \sum_{j \in J} h_j^w w_j^t \right]$$

di mana $x_{ij}^t, y_{jk}^t, z_{kl}^t$ adalah variabel aliran kontinu, $o_j, p_k \in \{0,1\}$ adalah keputusan pembukaan fasilitas, $w_j^t$ adalah volume waste, dan $f_j, g_k$ adalah fixed cost.

**Fungsi Tujuan 2 — Maksimasi Indeks Kesegaran Produk Ritel:**

$$\max Z_2 = \sum_{t \in T} \sum_{l \in L} Q_l^t \cdot d_l^t$$

dengan $Q_l^t = Q_0 \cdot e^{-\lambda \cdot \tau_{l}}$ merepresentasikan kualitas sisa relatif, $\tau_l$ adalah total lead time dari peternakan ke ritel, dan $\lambda$ adalah laju degradasi.

**Kendala Utama:**

1. *Konservasi aliran di setiap node:*
$$\sum_{i \in I} x_{ij}^t = \sum_{k \in K} y_{jk}^t \quad \forall j \in J, t \in T$$

2. *Kapasitas pabrik (Big-M formulation):*
$$\sum_{i \in I} x_{ij}^t \leq cap_j \cdot o_j \quad \forall j \in J, t \in T$$

3. *Pemerataan permintaan ritel:*
$$\sum_{k \in K} z_{kl}^t = d_l^t \quad \forall l \in L, t \in T$$

4. *Non-negativitas dan integritas:*
$$x_{ij}^t, y_{jk}^t, z_{kl}^t \geq 0; \quad o_j, p_k \in \{0,1\}$$

**Formulasi Benders Decomposition:**

Master Problem (MP) hanya memuat variabel biner investasi:

$$\min_{o, p, \alpha} \sum_{j} f_j o_j + \sum_{k} g_k p_k + \alpha$$

dengan $\alpha \geq 0$ adalah variabel yang mengaproksimasi biaya operasional minimum. Subproblem (SP) diberikan MP yang tetap, menjadi linear program murni:

$$\min_{x,y,z,w} \sum_{t} \left[ \sum_{i,j} c_{ij}^t x_{ij}^t + \sum_{j,k} c_{jk}^t y_{jk}^t + \sum_{k,l} c_{kl}^t z_{kl}^t + \sum_j h_j^w w_j^t \right]$$

Kendala subproblem dapat ditulis ringkas sebagai $\mathbf{A}\mathbf{y} \geq \mathbf{b} - \mathbf{F}\mathbf{x}^*$ di mana $\mathbf{x}^*$ adalah solusi MP iterasi sebelumnya. Dari dual subproblem $\boldsymbol{\pi}$, Benders optimality cut dihasilkan:

$$\alpha \geq \boldsymbol{\pi}^T (\mathbf{b} - \mathbf{F}\mathbf{x}^*) \quad \forall \boldsymbol{\pi} \in \Pi$$

Iterasi dihentikan ketika gap antara upper bound (MP + SP feasible) dan lower bound (MP) lebih kecil dari toleransi $\varepsilon = 10^{-3}$. Untuk menangani multi-objektif, pendekatan $\varepsilon$-constraint digunakan dengan memaksimasi $Z_2$ sebagai kendala $\varepsilon$ pada level diskrit, menghasilkan Pareto front non-dominated set.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi algoritmik mengikuti protokol iteratif enam-tahap yang distandarisasi oleh Lead Researchers (2023):

**Tahap 1 — Akuisisi Data Industri.** Pengumpulan data empiris mencakup: kapasitas peternakan (liter/hari), jarak geografis, demand ritel historis (minimum 24 bulan), biaya energi refrigerasi, dan lead time aktual. Data disimpan dalam format CSV terstruktur dengan granularitas harian.

**Tahap 2 — Pre-processing & Validasi.** Normalisasi satuan, deteksi outlier menggunakan metode IQR (Interquartile Range), dan estimasi parameter $\lambda$ melalui regresi logistik terhadap data shelf life aktual. Validasi silang 5-fold dilakukan untuk memastikan robust