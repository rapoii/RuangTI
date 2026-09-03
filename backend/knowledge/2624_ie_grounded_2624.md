# 2624 — Optimasi Rantai Pasok Multi-Objektif dengan Dekomposisi Benders: Framework untuk Industri Persusuan dan Reverse Supply Chain Berkeputusan Kualitas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang unik karena produknya bersifat **perishable** (mudah rusak) dengan umur simpan yang pendek (umumnya 5–18 hari untuk susu pasteurisasi, 14–45 hari untuk yogurt). Karakteristik biofisik ini menyebabkan rantai pasok susu memiliki kompleksitas yang secara fundamental berbeda dengan rantai pasok barang tahan lama. Variasi musiman pasokan susu mentah di tingkat peternakan (farm) berkisar antara 8–15% secara periodik, sementara permintaan konsumen sangat elastis terhadap suhu, hari libur, dan tren gizi. Dalam konteks ini, Lead Researchers (2023) mempublikasikan framework multi-objektif pada *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) yang mengusulkan dekomposisi Benders sebagai mekanisme solusi komputasional untuk jaringan empat-tingkat (four-echelon network): farm → processing plant → distribution center → customer zone.

Urgensi operasional framework ini muncul dari tiga permasalahan riil: (1) **biaya operasional yang sangat terdistribusi**, di mana biaya transportasi rantai dingin (cold-chain) dapat mencapai 35–45% dari total biaya rantai pasok susu, (2) **ketidakpastian ganda** pada sisi pasokan (variasi yield susu per ekor sapi) dan permintaan (fluktuasi harian 10–20%), serta (3) **konflik multi-stakeholder** antara pemegang merek yang追求 biaya rendah, retailer yang mengejar service level tinggi, dan regulator yang menuntut kepatuhan standar keamanan pangan (HACCP, ISO 22000). Pendekatan konvensional dengan formulasi Mixed-Integer Linear Programming (MILP) monolithic sering mengalami *computational intractability* ketika horizon perencanaan melebihi 4 minggu atau ketika jumlah fasilitas kandidat melebihi 15 unit. Lead Researchers (2023) mengatasi hal ini dengan **Benders Decomposition**, sebuah teknik dekomposisi yang membagi problem menjadi *master problem* (keputusan stratejik fasilitas) dan *subproblem* (keputusan operasional flow).

Secara paralel, Zhang, Li, dan Ren (2024) dalam [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma dekomposisi Benders ke ranah **reverse supply chain** dengan mempertimbangkan keputusan kualitas produk yang dikembalikan (returned product grading). Pelanggaran kualitas (quality degradation) pada produk reverse menjadi variabel keputusan yang secara langsung mempengaruhi disposition (refurbish/recycle/dispose), dan framework mereka membuktikan bahwa dual information dari subproblem dapat menghasilkan *quality-based feasibility cuts* yang menjamin kelayakan operasional. Sinergi kedua paper ini memperkuat posisi dekomposisi Benders sebagai **state-of-the-art methodology** untuk rantai pasok agroindustri yang membutuhkan kombinasi keputusan diskrit-stratejik dan kontinyu-operasional.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi dasar yang diusulkan Lead Researchers (2023) mengikuti arsitektur **two-stage stochastic programming** dengan recourse, di mana keputusan *here-and-now* (pembukaan fasilitas) diambil sebelum realisasi permintaan, dan keputusan *wait-and-see* (aliran produksi-distribusi) diambil setelahnya. Berikut formulasi MILP multi-objektif yang merepresentasikan esensi model.

**Himpunan (Sets):**
- $I$: himpunan pusat pengumpulan susu (farm), indeks $i \in I$, $|I| = m$
- $J$: himpunan kandidat pabrik pengolahan, indeks $j \in J$, $|J| = n$
- $K$: himpunan kandidat distribution center (DC), indeks $k \in K$
- $L$: himpunan zona pelanggan, indeks $l \in L$
- $T$: himpunan periode waktu (hari/minggu), indeks $t \in T$, $|T| = \tau$
- $P$: himpunan produk akhir, indeks $p \in P$ (susu pasteurisasi, yogurt, keju cottage)

**Parameter:**
- $f_j$: biaya tetap pembukaan pabrik $j$
- $g_k$: biaya tetap pembukaan DC $k$
- $c^{tr}_{ij}$: biaya transportasi susu mentah dari farm $i$ ke plant $j$ per liter
- $c^{pr}_{jp}$: biaya pengolahan produk $p$ di plant $j$ per liter
- $c^{dl}_{kl}$: biaya distribusi dari DC $k$ ke zona $l$ per unit
- $c^{hl}_{jp}$: biaya holding produk $p$ di plant $j$ per unit per periode
- $h^{hd}_k$: biaya holding di DC $k$
- $\pi_{lpt}$: penalty cost untuk unmet demand produk $p$ di zona $l$ pada periode