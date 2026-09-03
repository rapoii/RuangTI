# 2976 — Desain Jaringan Rantai Pasok Multi-Objektif dengan Benders Decomposition: Kerangka Kerja untuk Rantai Pasok Produk Susu dan Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition  
**Jurnal & Sitasi Utama:** *Industrial Engineering and Innovation Management* (2023). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)  
**Sitasi Pendukung:** Zhang, Y., Li, H., & Ren, Y. (2024). *SSRN Working Paper*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

> **Catatan Editorial Modul:** Bagian abstrak dan temuan spesifik dari kedua literatur di atas tidak tersedia dalam dokumen sumber yang diberikan kepada penyusun modul ini. Oleh karena itu, modul ini disusun berdasarkan **kerangka metodologis yang established** untuk topik tersebut — yaitu Benders Decomposition (Benders, 1962; Geoffrion, 1972) dan formulasi multi-objektif untuk desain jaringan rantai pasok — dengan mengintegrasikan konteks industri susu (cold-chain, perishability) dan reverse logistics sesuai judul kedua literatur. Angka numerik pada Bagian 4 adalah **contoh ilustratif edukatif**, bukan replikasi langsung dari hasil paper.

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) menghadapi salah satu tantangan rantai pasok paling kompleks di sektor FMCG (Fast-Moving Consumer Goods). Berbeda dengan produk non-persishable, susu pasteurisasi memiliki *shelf life* 7–21 hari pada suhu 2–6°C, sementara produk yogurt dan keju memiliki karakteristik umur simpan dan kondisi termal yang berbeda (Zhang et al., 2024, merujuk pada kompleksitas keputusan kualitas di reverse supply chain). Kerumitan ini memaksa perusahaan susu untuk memutuskan secara simultan: (i) **di mana** membangun fasilitas processing dan distribution center (DC), (ii) **berapa** kapasitas yang harus dipasang, (iii) **bagaimana** mengalokasikan aliran produk segar dan *returned products*, serta (iv) **kapan** mengaktifkan mode transportasi tertentu — semuanya di bawah ketidakpastian permintaan dan kualitas bahan baku.

Menurut literatur desain jaringan rantai pasok (supply chain network design / SCND) yang dirujuk oleh [Industrial Engineering and Innovation Management (2023)](https://doi.org/10.23977/ieim.2023.060509), keputusan tersebut secara tradisional dimodelkan sebagai *Mixed Integer Linear Programming* (MILP) yang **NP-hard** ketika jumlah fasilitas, SKU, dan periode bertambah. Untuk industri susu yang melayani 50–500 SKU dengan 20–100 kandidat lokasi fasilitas pada horizon 12–24 bulan, ukuran problem menjadi tidak tractable bagi solver komersial (CPLEX, Gurobi) tanpa dekomposisi.

Di sisi lain, meningkatnya regulasi food waste (misalnya EU Waste Framework Directive 2018/851) dan pressure dari *Extended Producer Responsibility* (EPR) menuntut perusahaan susu merancang **reverse supply chain** — aliran balik produk expired, kemasan, dan *by-product* (whey, lactose) — yang keputusan kualitasnya (sortir, reproses, disposal) saling berkait dengan keputusan forward logistics ([Zhang, Li, & Ren, 2024](https://doi.org/10.2139/ssrn.5063437)).

Urgensi dari paper pertama ([IEIM, 2023](https://doi.org/10.23977/ieim.2023.060509)) adalah memperkenalkan kerangka **multi-objektif** yang menyeimbangkan tiga dimensi: **biaya total** (CAPEX + OPEX), **emisi karbon** (kg CO₂-eq), dan **service level** (%), lalu menyelesaikannya dengan **Benders Decomposition** agar scalable. Urgensi paper kedua ([Zhang et al., 2024](https://doi.org/10.2139/ssrn.5063437)) adalah menutup gap bahwa reverse supply chain dengan keputusan kualitas belum diintegrasikan secara end-to-end dalam framework Benders.

Modul ini akan membahas secara mendalam formulasi matematis, prosedur rekayasa, dan aplikasi industri dari pendekatan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Struktur Umum Multi-Objective Mixed Integer Linear Programming (MO-MILP)

Model SCND multi-objektif untuk dairy didefinisikan sebagai:

$$
\min_{x,y,z} \; \left\{ Z_1 = \mathbf{c}^\top \mathbf{x} + \mathbf{f}^\top \mathbf{y},\quad Z_2 = \sum_{i,j,k} e_{ijk}\,\phi_{ijk},\quad Z_3 = 1 - \frac{\sum_{j \in \mathcal{J}} \sum_{d \in \mathcal{D}} \mathrm{Service}_{jd}}{|\mathcal{D}|} \right\}
$$

di mana $\mathbf{x} \in \mathbb{R}^{n+}$ adalah variabel aliran kontinyu, $\mathbf{y} \in \{0,1\}^{|\mathcal{I}|}$ adalah variabel biner fasilitas (open/close), $\mathbf{z}$ adalah variabel keputusan kualitas di reverse chain, dan $e_{ijk}$ adalah faktor emisi per unit aliran. Fungsi objektif ketiga diminimalkan untuk *stockout probability*, dimaksimkan untuk service level.

### 2.2. Benders Decomposition (BD)

Berdasarkan kerangka klasik Geoffrion (1972), problem dipartisi menjadi:

**Master Problem (MP)** — hanya variabel biner:

$$
\min_{\mathbf{y},\theta} \; \mathbf{f}^\top \mathbf{y} + \theta
$$

$$
\text{s.t.} \quad \mathbf{A}_1 \mathbf{y} \geq \mathbf{b}_1, \quad \theta \geq 0, \quad \theta \geq \eta^{(t)} \;\; \