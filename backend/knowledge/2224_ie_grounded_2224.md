# 2224 — Optimasi Jaringan Rantai Pasok Multi-Objektif dengan Dekomposisi Benders: Aplikasi pada Produk Susu dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan susu (dairy industry) merupakan salah satu sektor agroindustri paling kompleks di dunia, dengan karakteristik unik berupa *highly perishable product*, sensitivitas suhu, dan tuntutan keamanan pangan yang ketat. Berdasarkan Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), jaringan rantai pasok susu modern menghadapi tantangan simultan berupa **peningkatan permintaan produk olahan segar (fresh dairy)**, **fluktuasi harga bahan baku di tingkat peternakan**, serta **tekanan regulasi emisi karbon** yang semakin stringent di pasar Uni Eropa, Amerika Utara, dan Asia-Pasifik. Studi tersebut menegaskan bahwa model jaringan tunggal-objektif (*single-objective cost minimization*) sudah tidak memadai untuk menangkap trade-off riil antara profitabilitas, kesegaran produk, dan jejak lingkungan.

Konteks operasional yang melatarbelakangi perumusan masalah pada Lead Researchers (2023) dapat diuraikan sebagai berikut. Pertama, susu pasteurisasi memiliki *shelf-life* efektif hanya 7–14 hari pada suhu 2–4°C, sehingga keputusan alokasi fasilitas (*facility location*) dan rute distribusi harus memperhitungkan *lead-time degradation function*. Kedua, kapasitas *processing plant* bersifat *scale-economy*, di mana biaya tetap (*fixed cost*) pembukaan pabrik dapat mencapai 30–40% dari total biaya operasional jaringan, sehingga keputusan biner lokasi sangat menentukan struktur biaya jangka panjang. Ketiga, *greenhouse gas emission* dari *cold chain logistics* (refrigerated trucking) mencapai 4–6% emisi CO₂ ekuivalen rantai pasok susu global, sehingga kebutuhan *carbon-aware network design* menjadi keharusan strategis.

Sementara itu, Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memberikan kontribusi komplementer melalui formulasi *reverse supply chain* dengan keputusan kualitas (*quality decisions*), yang relevan untuk konteks produk susu dalam bentuk *by-product recovery* (whey protein, lactose), pengembalian kemasan, dan daur ulang limbah organik. Integrasi kedua kerangka ini memungkinkan rekayasawan industri merancang jaringan *closed-loop* yang tidak hanya optimal secara ekonomi, tetapi juga memenuhi *circular economy* dan target SDG-12 (Responsible Consumption and Production). Urgensi penelitian ini diperkuat oleh fakta bahwa FAO (2023) mencatat 13–15% produksi susu global terbuang (*food loss*) sepanjang rantai pasok, menimbulkan kerugian ekonomi lebih dari USD 30 miliar per tahun. Oleh karena itu, pengembangan kerangka multi-objektif dengan *Benders Decomposition* bukan sekadar kontribusi akademis, melainkan kebutuhan rekayasa langsung yang memiliki implikasi terhadap profitabilitas industri, keberlanjutan lingkungan, dan ketahanan pangan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Himpunan, Indeks, dan Parameter

Formulasi matematis yang diusulkan Lead Researchers (2023) menggunakan notasi berikut:

- **Himpunan (Sets):**
  - $I = \{1, 2, \dots, m\}$ : himpunan lokasi peternakan (*farms*)
  - $J = \{1, 2, \dots, n\}$ : himpunan lokasi *processing plants* (PP)
  - $K = \{1, 2, \dots, p\}$ : himpunan *distribution centers* (DC)
  - $L = \{1, 2, \dots, q\}$ : himpunan retailer
  - $T = \{1, 2, \dots, h\}$ : himpunan periode perencanaan

- **Parameter:**
  - $S_i$ : kapasitas suplai peternakan $i$ (liter/hari)
  - $D_{lt}$ : permintaan retailer $l$ pada periode $t$ (liter)
  - $f_j$ : biaya tetap pembukaan PP $j$ (USD)
  - $c_{ij}^{tr}$ : biaya transportasi per liter dari $i$ ke $j$
  - $c_{jkt}^{pr}$ : biaya processing & handling di PP $j$ ke DC $k$ periode $t$
  - $c_{klt}^{dl}$ : biaya distribusi dari DC $k$ ke retailer $l$ periode $t$
  - $\theta$ : parameter degradasi kualitas (fraksi kesegaran/hari)
  - $e_{ij}$ : emisi CO₂ per liter (kg CO₂e) untuk lintasan $i \rightarrow j \rightarrow k \rightarrow l$
  - $Cap_j$ : kapasitas PP $j$ (liter/hari)
  - $Cap_k$ : kapasitas DC $k$ (liter/hari)
  - $M$ : bilangan *big-M* untuk linearisasi

- **Variabel Keputusan:**
  - $x_j \in \{0,1\}$ : 1 jika PP $j$ dibuka
  - $y_{ijt} \geq 0$ : alokasi susu dari farm $i$ ke PP $j$ periode $t$
  - $z_{jklt} \geq 0$ : aliran dari PP $j$ via DC $k$ ke retailer $l$ periode $t$
  - $w_{ilt} \geq 0$ : jumlah susu yang tidak terjual (*wasted*) di retailer $l$ periode $t$

### 2.2 Fungsi Objektif Multi-Objektif

Lead Researchers (2023) merumuskan tiga fungsi objektif yang dioptimasi secara simultan melalui teknik $\varepsilon$-constraint:

**(O1) Minimasi Total Biaya Jaringan:**

$$\min Z_1 = \sum_{j \in J} f_j x_j + \sum_{i \in I}\sum_{j \in J}\sum_{t \in T} c_{ij}^{tr} y_{ijt} + \sum_{j \in J}\sum_{k \in K}\sum_{l \in L}\sum_{t \in T} \left(c_{jkt}^{pr} + c_{klt}^{dl}\right) z_{jklt} + \sum_{l \in L}\sum_{t \in T} p^{waste} w_{ilt}$$

**(O2) Maksimasi Kesegaran Produk (Freshness):**

$$\max Z_2 = \sum_{j \in J}\sum_{k \in K}\sum_{l \in L}\sum_{t \in T} \alpha_{lt} z_{jklt}$$

di mana $\alpha_{lt} = e^{-\theta \cdot \tau_{jkl}}$ merepresentasikan fungsi degradasi eksponensial dengan $\tau_{jkl}$ adalah *transit time* dari PP ke retailer.

**(O3) Minimasi Emisi Karbon:**

$$\min Z_3 = \sum_{i \in I}\sum_{j \in J}\sum_{t \in T} e_{ij} y_{ijt} + \sum_{j \in J}\sum_{k \in K}\sum_{l \in L}\sum_{t \in T} e_{jkl} z_{jklt}$$

### 2.3 Kendala (Constraints)

$$\sum_{j \in J} y_{ijt} \leq S_i, \quad \forall i \in I, t \in T \quad \text{(Kapasitas suplai)}$$

$$\sum_{i \in I} y_{ijt} \leq Cap_j \cdot x_j, \quad \forall j \in J, t \in T \quad \text{(Kapasitas PP)}$$

$$\sum_{j \in J}\sum_{k \in K} z_{jklt} + w_{ilt} = D_{lt}, \quad \forall l \in L, t \in T \quad \text{(Keseimbangan permintaan)}$$

$$\sum_{i \in I} y_{ijt} = \sum_{k \in K}\sum_{l \in L} z_{jklt}, \quad \forall j \in J, t \in T \quad \text{(Flow conservation)}$$

$$\sum_{j \in J}\sum_{l \in L} z_{jklt} \leq Cap_k, \quad \forall k \in K, t \in T \quad \text{(Kapasitas DC)}$$

### 2.4 Benders Decomposition

Kompleksitas Mixed-Integer Linear Programming (MILP) untuk $|I|=20, |J|=8, |K|=12, |L|=50, |T|=12$ menghasilkan >115.000 variabel biner dan kontinu, sehingga Lead Researchers (2023) menerapkan **Benders Decomposition (BD)** untuk dekomposisi masalah menjadi:

- **Master Problem (MP):** hanya variabel biner $x_j$ (keputusan lokasi), dengan *cut* yang dibangkitkan dari subproblem.
- **Subproblem (SP):** masalah linear dengan variabel kontinu $y_{ijt}, z_{jklt}, w_{ilt}$ untuk setiap skenario lokasi.

Formulasi dual subproblem menghasilkan *optimality cut*:

$$\theta \geq \sum_{i,t} \pi_{it} S_i + \sum_{l,t} \sigma_{lt} D_{lt} - \sum_{j,t} \mu_{jt} Cap_j x_j$$

di mana $\pi, \sigma, \mu$ adalah variabel dual. Iterasi berlanjut hingga *gap* optimalitas $< 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti diagram alur berikut:

**Tahap 1 — Pengumpulan Data & Karakterisasi Jaringan Eksisting**
1. Audit kapasitas 5–20 *farm*, 3–8 PP, 4–12 DC, 10–60 retailer.
2. Pengukuran *transit time* aktual menggunakan GPS telemetry (ISO 28000:2007 tentang *Supply Chain Security Management*).
3. Kalibrasi parameter degradasi $\theta$ dari uji laboratorium HACCP (suhu, *total plate count*).
4. Penghitungan *carbon footprint* per lintasan menggunakan protokol ISO 14064-1:2018.

**Tahap 2 — Formulasi Model & Validasi**
1. Translasi data ke parameter model menggunakan *data pipeline* ETL.
2. Validasi model melalui *historical backtesting* (12 bulan terakhir) dengan target *MAPE* < 8%.
3. Benchmark dengan model *single-objective* baseline menggunakan *paired t-test*.

**Tahap 3 — Solusi Benders Decomposition**
1. Inisialisasi MP dengan *lower bound* $LB = -\infty$ dan *upper bound* $UB = +\infty$.
2. Iterasi:
   - Solve MP → dapat solusi $x_j^*$.
   - Solve SP dengan $x_j = x_j^*$ → hitung $v(SP)$.
   - Bangkitkan *optimality cut* atau *feasibility cut*.
   - Update $LB = \max(LB, v(MP))$ dan $UB = \min(UB, v(SP) + f^T x^*)$.
3. Stopping criterion: $(UB - LB)/|LB| < \epsilon = 10^{-4}$.

**Tahap 4 — Validasi Solusi & Implementasi**
1. Uji sensitivitas parameter kunci ($\pm 20\%$ terhadap $D_{lt}$ dan $\theta$).
2. Penyusunan *dashboard* manajerial (Tableau/Power BI) untuk monitoring KPI.
3. Implementasi keputusan dengan protokol *change management* ITIL v4.

**Tahap 5 — Integrasi Reverse Supply Chain**
Berdasarkan Zhang, Li, & Ren (2024), tambahkan modul keputusan kualitas dengan variabel:
- $q_{r} \in \{Q_1, Q_2, Q_3, Q_4\}$ : *remanufacturing*, *refurbishing*, *recycling*, *disposal*.
- Cutoff kualitas $Q^c$ untuk segregasi *recovered material*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Hipotetis-Realistis

Sebuah perusahaan susu di Selandia Baru (fiktif, parameter terindustrialisasi) memiliki karakteristik jaringan berikut:

| Parameter | Nilai |
|---|---|
| Jumlah farm ($I$) | 5 |
| Jumlah PP ($J$) | 3 kandidat |
| Jumlah DC ($K$) | 4 |
| Jumlah retailer ($L$) | 6 |
| Periode ($T$) | 3 bulan |

**Tabel 1. Kapasitas PP dan Biaya Tetap**

| PP ($j$) | $f_j$ (USD) | $Cap_j$ (L/hari) |
|---|---|---|
| 1 | 250.000 | 8.000 |
| 2 | 180.000 | 5.000 |
| 3 | 320.000