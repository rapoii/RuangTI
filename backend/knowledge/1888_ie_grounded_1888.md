# 1888 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu Menggunakan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks sepanjang dekade terakhir. Volatilitas harga bahan baku, peningkatan kesadaran konsumen terhadap kesegaran (*freshness*) produk, serta tekanan regulasi lingkungan terkait emisi karbon telah memaksa perusahaan susu merestrukturisasi arsitektur rantai pasok mereka. Lead Researchers (2023) dalam tulisannya di *Industrial Engineering and Innovation Management* menyoroti bahwa jaringan rantai pasok susu tradisional yang bersifat *single-objective* (cost minimization only) terbukti inadekuat ketika harus menyeimbangkan empat dimensi keputusan secara simultan: biaya logistik, tingkat kesegaran produk, jejak karbon dioksida, dan dampak sosial-ekonomi terhadap peternak lokal. Kerangka kerja multi-objektif tersebut menjadi krusial karena produk susu memiliki karakteristik *perishable high-value* dengan *shelf-life* yang pendek (umumnya 5–18 hari untuk produk pasteurisasi), sehingga keputusan lokasi fasilitas produksi dan distribusi sangat memengaruhi kualitas akhir yang diterima konsumen.

Urgensi operasional dari paper ini diperkuat oleh Zhang, Li, dan Ren (2024) yang menginvestigasi jaringan *reverse supply chain* dengan mempertimbangkan keputusan kualitas produk. Mereka menunjukkan bahwa integrasi keputusan kualitas (*quality decisions*) ke dalam model optimisasi jaringan secara signifikan meningkatkan kompleksitas komputasional karena variabel keputusan menjadi bertipe *mixed-integer* dengan dimensi besar. Kedua paper ini secara konsisten menunjukkan bahwa metode eksak konvensional seperti *branch-and-bound* murni menjadi tidak efisien ketika ukuran jaringan melebihi skala meso (lebih dari 50 node dan 200弧). Oleh karena itu, pendekatan *Benders Decomposition* (BD) yang memisahkan keputusan stratejik (lokasi fasilitas) dari keputusan operasional (aliran barang) menjadi solusi metodologis yang sangat relevan.

Secara empiris, industri susu di berbagai negara — termasuk Indonesia yang memiliki lebih dari 600.000 peternak sapi perah dengan produksi > 950 juta liter/tahun (BPS, 2022) — menghadapi inefisiensi rantai pasok hingga 18–25% dalam hal *product loss* akibat keterlambatan distribusi dan keputusan lokasi fasilitas yang suboptimal. Kerangka kerja Lead Researchers (2023) menawarkan pendekatan sistematis untuk menjawab inefisiensi ini melalui formulasi matematis *mixed-integer programming* (MIP) yang diselesaikan dengan dekomposisi. Konteks ini menegaskan bahwa topik Modul 1888 bukan sekadar permasalahan akademis, melainkan kebutuhan rekayasa industri yang nyata dan berdampak langsung pada keberlanjutan rantai pasok pangan.

## 2. Landasan Teori & Formulasi Matematis

Model jaringan rantai pasok susu yang dirumuskan oleh Lead Researchers (2023) menggunakan struktur *four-echelon* yang terdiri dari *supplier farm* ($i \in I$), *processing plant* ($j \in J$), *distribution center* ($k \in K$), dan *customer zone* ($l \in L$). Formulasi multi-objektif dirumuskan dengan teknik *weighted goal programming* untuk mengonversi beberapa fungsi tujuan menjadi bentuk skalar. Himpunan parameter, variabel keputusan, dan fungsi tujuan disajikan secara sistematis berikut ini.

**Himpunan (Sets):**

- $I = \{1, 2, \ldots, m\}$: himpunan peternakan/peternak susu
- $J = \{1, 2, \ldots, n\}$: himpunan kandidat pabrik pengolahan
- $K = \{1, 2, \ldots, p\}$: himpunan pusat distribusi
- $L = \{1, 2, \ldots, q\}$: himpunan zona konsumen

**Parameter:**

- $f_j$: biaya tetap pembukaan pabrik $j$
- $c_{ij}$: biaya transportasi per unit dari $i$ ke $j$
- $d_{lk}$: permintaan konsumen pada zona $l$ dari DC $k$
- $\alpha_j$: kapasitas produksi pabrik $j$
- $\beta_k$: kapasitas penyimpanan DC $k$
- $\rho_l$: batas waktu kesegaran maksimum menuju zona $l$
- $\gamma_{ij}$: emisi CO₂ per unit yang diangkut dari $i$ ke $j$
- $w^s, w^f, w^e$: bobot relatif untuk biaya, kesegaran, dan emisi

**Variabel Keputusan:**

- $y_j \in \{0, 1\}$: 1 jika pabrik $j$ dibuka
- $x_{ijk} \geq 0$: aliran unit dari $i$ melalui $j$ ke $k$
- $z_{kl} \geq 0$: aliran unit dari $k$ ke $l$
- $\tau_{kl}$: waktu rata-rata transportasi dari $k$ ke $l$

**Fungsi Tujuan (Multi-Objective):**

$$\min Z = w^s \sum_{j \in J} f_j y_j + w^s \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} c_{ijk} x_{ijk} + w^s \sum_{k \in K}\sum_{l \in L} c_{kl} z_{kl}$$

$$\max F = \sum_{l \in L} \sum_{k \in K} \left(1 - \frac{\tau_{kl}}{\rho_l}\right) z_{kl}$$

$$\min E = \sum_{i \in I}\sum_{j \in J}\sum_{k \in K} \gamma_{ijk} x_{ijk} + \sum_{k \in K}\sum_{l \in L} \gamma_{kl} z_{kl}$$

Fungsi tujuan ketiga (emisi) dan fungsi tujuan pertama (biaya) diminimalkan, sedangkan fungsi tujuan kedua (kesegaran, dinormalisasi) dimaksimkan. Konversi ke bentuk skalar melalui *lexicographic ordering* atau *compromise programming* menghasilkan:

$$\min Z_{agg} = w^s \cdot \tilde{Z}_1 - w^f \cdot \tilde{F} + w^e \cdot \tilde{E}$$

di mana $\tilde{Z}_1, \tilde{F}, \tilde{E}$ adalah nilai ternormalisasi dari masing-masing tujuan.

**Kendala Utama:**

$$\sum_{k \in K} z_{kl} \geq d_l \quad \forall l \in L \quad \text{(kepuusan permintaan)}$$

$$\sum_{i \in I} x_{ijk} \leq \alpha_j y_j \quad \forall j \in J, k \in K \quad \text{(kapasitas pabrik)}$$

$$\sum_{l \in L} z_{kl} \leq \beta_k \quad \forall k \in K \quad \text{(kapasitas DC)}$$

$$\sum_{k \in K} x_{ijk} = \sum_{k \in K} x_{ijk} \quad \text{(konservasi aliran)}$$

**Formulasi Benders Decomposition (BD):**

Strategi BD memisahkan keputusan stratejik $y_j$ (master problem/MP) dari keputusan operasional $x_{ijk}, z_{kl}$ (subproblem/SP). MP pada iterasi $t$ adalah:

$$\min_{y, \theta} \sum_{j \in J} f_j y_j + \theta$$

$$\text{s.t.} \quad y_j \in \{0, 1\} \quad \forall j \in J$$

$$\theta \geq \pi^{rT}(h - Hy^r) \quad \forall r = 1, \ldots, t-1 \quad \text{(optimality cuts)}$$

Subproblem diberikan $\hat{y}^t$ tetap:

$$\min_{x, z} \sum c_{ijk} x_{ijk} + \sum c_{kl} z_{kl}$$

$$\text{s.t.} \quad Ax + Hy^r \geq h, \quad x, z \geq 0$$

Dual SP menghasilkan vektor $\pi^t$, yang kemudian ditambahkan sebagai *feasibility cut* jika SP infeasible, atau *optimality cut* jika SP optimal. Konvergensi tercapai ketika $|\theta^t - \theta^{t-1}| \leq \epsilon$ (Lead Researchers, 2023).

Untuk ekstensi rantai pasok balik, Zhang, Li, dan Ren (2024) memperkenalkan variabel tambahan $q_r \in [0,1]$ yang merepresentasikan tingkat kualitas produk yang dikembalikan, dengan kendala $q_r \leq \bar{q}_r y_r$, sehingga memperluas BD menjadi *quality-aware Benders*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi BD untuk optimisasi rantai pasok susu mengikuti prosedur operasional terstruktur yang terdiri dari delapan tahap rekayasa. Diagram alir (flowchart) rekayasa disusun berdasarkan protokol Lead Researchers (2023) yang disesuaikan dengan pedoman ISO 22000:2018 untuk keamanan pangan dan ISO 14064 untuk核算 emisi.

**Tahap 1 — Akuisisi Data Rantai Pasok.** Pengumpulan data historis 12 bulan mencakup volume produksi peternakan, kapasitas olah pabrik, permintaan musiman, biaya angkut, dan waktu tempuh rata-rata. Akurasi data minimal 95% direkomendasikan.

**Tahap 2 — Estimasi Parameter Emisi.** Emisi CO₂ dihitung menggunakan faktor konversi IPCC Tier 2 untuk moda transportasi (*refrigerated truck* ≈ 0.25 kg CO₂/km per ton).

**Tahap 3 — Konstruksi Model MIP.** Bangun formulasi (1)–(6) menggunakan notasi standar dan validasi dimensi variabel.

**Tahap 4 — Dekomposisi Strategis-Operasional.** Identifikasi variabel integer (lokasi) sebagai MP dan variabel kontinu (aliran) sebagai SP. Tentukan *linking constraints* yang memotong keduanya.

**Tahap 5 — Inisialisasi MP.** Set batas bawah $LB = 0$, batas atas $UB = +\infty$, dan master cut pool kosong.

**Tahap 6 — Iterasi BD.** Untuk setiap iterasi $t = 1, 2, \ldots$:
- Solve MP → solusi $\hat{y}^t$, nilai $\hat{\theta}^t$
- Update $LB^t = \hat{f}^T \hat{y}^t + \hat{\theta}^t$
- Solve SP → solusi $(x^t, z^t)$, dual $\pi^t$, nilai $Q^t$
- Update $UB^t = \min(UB^{t-1}, \hat{f}^T \hat{y}^t + Q^t)$
- Tambahkan cut $\theta \geq \pi^t(h - H\hat{y}^t)$ ke MP
- Cek konvergensi: $(UB^t - LB^t)/LB^t \leq 10^{-4}$

**Tahap 7 — Validasi Pareto Front.** Lakukan perturbasi bobot $(w^s, w^f, w^e)$ untuk membangun *Pareto frontier* solusi nondominated.

**Tahap 8 — Implementasi Keputusan.** Solusi akhir didokumentasikan dalam *decision dashboard* dengan KPI utama: total biaya, indeks kesegaran, total emisi.

Arsitektur teknologi pendukung terdiri atas empat lapisan: (i) *data ingestion layer* (ERP, IoT sensor suhu), (ii) *optimization engine* (Python/Gurobi atau CPLEX), (iii) *decision layer* (visualisasi Pareto), dan (iv) *execution layer* (TMS/WMS integration). SOP ini memenuhi standar GFSI (Global Food Safety Initiative) untuk traceability rantai pangan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk menggambarkan penerapan BD secara konkret, dipertimbangkan jaringan susu hipotetis dengan parameter berikut: $|I|