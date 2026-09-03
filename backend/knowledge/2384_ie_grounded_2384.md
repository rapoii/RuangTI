# 2384 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor manufaktur pangan dengan karakteristik operasional paling menantang di dunia karena tingginya tingkat *perishability* (ketahanan simpan yang pendek), kebutuhan akan *cold chain* yang tidak terputus, serta volatilitas permintaan yang dipengaruhi oleh pola konsumsi harian, musim, dan tren gaya hidup sehat. Lead Researchers (2023) dalam artikelnya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menekankan bahwa keputusan lokasi fasilitas pengolahan, kapasitas *processing plant*, rute distribusi, dan kebijakan inventori tidak dapat dipisahkan satu sama lain karena membentuk satu sistem keputusan terintegrasi yang berdampak langsung pada tingkat kerugian (*spoilage*), biaya logistik, dan emisi karbon.

Urgensi penelitian ini diperkuat oleh data empiris industri susu global yang menunjukkan bahwa *food loss* pada tahap pascapanen hingga distribusi dapat mencapai 20–30% di negara berkembang, dengan proporsi signifikan terjadi karena kegagalan desain jaringan dan alokasi kapasitas yang suboptimal. Dalam konteks Indonesia sebagai negara dengan konsumsi susu per kapita yang terus naik (rata-rata 16,27 kg/kapita/tahun menurut BPS 2023) namun dengan tingkat swasembada susu domestik hanya sekitar 22%, optimalisasi jaringan rantai pasok susu menjadi sangat strategis. Lead Researchers (2023) mengajukan kerangka multi-objektif yang secara simultan meminimalkan total biaya logistik, emisi CO₂ ekuivalen, dan tingkat pemborosan produk, kemudian menyelesaikannya dengan *Benders Decomposition* (BD) untuk menangani kompleksitas komputasional yang melekat pada masalah Mixed-Integer Linear Programming (MILP) berskala besar.

Studi pendukung Zhang, Li, dan Ren (2024) (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas kerangka ini ke ranah *reverse supply chain* dengan keputusan kualitas, di mana produk yang tidak lolos uji mutu dapat di-*reprocess*, di-*recycle*, atau dimusnahkan. Integrasi kedua perspektif ini — *forward* dan *reverse* chain — menjadi semakin penting karena regulasi limbah pangan dan target *circular economy* yang diadopsi oleh banyak negara. Secara operasional, perusahaan susu menghadapi tiga konflik objektif yang tidak dapat direkonsiliasi secara intuitif: (1) biaya rendah vs. kesegaran produk, (2) responsivitas tinggi vs. emisi rendah, dan (3) kapasitas produksi tinggi vs. tingkat *spoilage* rendah. Oleh karena itu, diperlukan pendekatan optimasi multi-objektif yang rigor dan skalabel.

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Lead Researchers (2023) menggunakan notasi himpunan, parameter, dan variabel keputusan sebagai berikut:

**Himpunan (Sets):**
- $I = \{1, 2, \ldots, m\}$: himpunan peternakan sapi perah (*farms*)
- $J = \{1, 2, \ldots, n\}$: himpunan pabrik pengolahan (*plants*)
- $K = \{1, 2, \ldots, p\}$: himpunan pusat distribusi (*DCs*)
- $L = \{1, 2, \ldots, q\}$: himpunan zona permintaan (*customer zones*)
- $T = \{1, 2, \ldots, h\}$: himpunan periode perencanaan

**Parameter kunci:**
- $c^{p}_{ij}$: biaya produksi & transportasi dari farm $i$ ke plant $j$ (IDR/liter)
- $c^{t}_{jkl}$: biaya distribusi dari plant $j$ ke DC $k$ lalu ke customer $l$
- $c^{h}_{k}$: biaya *holding* di DC $k$ (IDR/liter/hari)
- $c^{s}_{j}$: biaya *spoilage* di plant $j$
- $Cap^{P}_{j}, Cap^{D}_{k}$: kapasitas harian plant dan DC
- $d_{lt}$: permintaan customers di zona $l$ pada periode $t$
- $ef^{CO2}_{ij}, ef^{CO2}_{jkl}$: faktor emisi CO₂ per liter-km
- $\alpha$: bobot pada fungsi *freshness degradation*

**Variabel keputusan:**
- $x_{ij} \geq 0$: volume susu (liter) yang dikirim dari farm $i$ ke plant $j$
- $y_{jkl} \geq 0$: volume produk jadi yang dikirim plant $j \rightarrow$ DC $k \rightarrow$ customer $l$
- $z_{j} \in \{0,1\}$: 1 jika plant $j$ dibuka
- $w_{k} \in \{0,1\}$: 1 jika DC $k$ dibuka
- $\theta \geq 0$: variabel nilai optimal subproblem di BD

**Fungsi tujuan multi-objektif (diminimalkan):**

$$
\min \; Z_1 = \sum_{i,j} c^{p}_{ij} x_{ij} + \sum_{j,k,l} c^{t}_{jkl} y_{jkl} + \sum_{k} f^{D}_{k} w_{k} + \sum_{j} f^{P}_{j} z_{j}
$$

$$
\min \; Z_2 = \sum_{i,j} ef^{CO2}_{ij} \cdot dist_{ij} \cdot x_{ij} + \sum_{j,k,l} ef^{CO2}_{jkl} \cdot dist_{jkl} \cdot y_{jkl}
$$

$$
\min \; Z_3 = \sum_{k,l,t} \alpha \cdot \left( t \right) \cdot y_{kl}^{t} \quad \text{(indeks degradasi kesegaran)}
$$

dengan kendala utama:

$$
\sum_{j} x_{ij} \leq Sup_{i}, \quad \forall i \in I
$$

$$
\sum_{i} x_{ij} \leq Cap^{P}_{j} \cdot z_{j}, \quad \forall j \in J
$$

$$
\sum_{j} y_{jkl} \leq Cap^{D}_{k} \cdot w_{k}, \quad \forall k \in K
$$

$$
\sum_{j,k} y_{jkl} \geq d_{lt}, \quad \forall l \in L, \; t \in T
$$

**Struktur Benders Decomposition (BD).** Masalah MILP dipartisi menjadi:

1. **Master Problem (MP) — keputusan investasi:**
$$
\min_{z,w,\theta} \; \sum_{j} f^{P}_{j} z_{j} + \sum_{k} f^{D}_{k} w_{k} + \theta
$$
$$
\text{s.t.} \; z_{j}, w_{k} \in \{0,1\}, \; \theta \geq 0, \; \text{dan cuts BD}
$$

2. **Subproblem (SP) — keputusan aliran operasional:** Diberikan $\bar{z}, \bar{w}$ dari MP, SP meminimalkan biaya operasional:
$$
\min_{x,y} \; \sum c^{p}_{ij} x_{ij} + \sum c^{t}_{jkl} y_{jkl} + \sum c^{s}_{j} s_{j}
$$
$$
\text{s.t.} \; \sum_{j} x_{ij} \leq Sup_{i}, \; \sum_{i} x_{ij} \leq Cap^{P}_{j} \bar{z}_{j}, \; \sum_{j} y_{jkl} \leq Cap^{D}_{k} \bar{w}_{k}, \; \sum y_{jkl} \geq d_{lt}
$$

Jika SP *feasible optimal*, maka *optimality cut* ditambahkan ke MP:
$$
\theta \geq \sum_{i,j} c^{p}_{ij} x_{ij}^{*} - \sum_{j} \pi^{P}_{j} \left( Cap^{P}_{j} z_{j} - \sum_{i} x_{ij}^{*} \right) - \sum_{k} \pi^{D}_{k} \left( Cap^{D}_{k} w_{k} - \sum_{j} y_{jkl}^{*} \right)
$$
di mana $\pi^{P}_{j}, \pi^{D}_{k}$ adalah variabel dual dari kendala kapasitas. Jika SP *infeasible*, maka *feasibility cut* (Farkas cut) ditambahkan.

Lead Researchers (2023) melaporkan bahwa dekomposisi ini menghasilkan reduksi waktu komputasi hingga 67% dibandingkan solusi langsung via *branch-and-bound* untuk instance dengan lebih dari 50 variabel biner dan 200.000 variabel kontinu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka BD-multi-objektif di industri susu mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 — Akuisisi Data (1–4 minggu):** Pengumpulan data historis 12 bulan dari peternakan koperasi, kapasitas plant, jarak aktual (GPS), tarif listrik untuk cold storage, dan permintaan ritel. Lead Researchers (2023) merekomendasikan ISO 22000-aligned data pipeline.

**Tahap 2 — Formulasi Model (1 minggu):** Bangun himpunan dan parameter, kalibrasi bobot multi-objektif ($\lambda_{1}, \lambda_{2}, \lambda_{3}$) melalui *Analytic Hierarchy Process* (AHP) bersama manajemen senior.

**Tahap 3 — Pre-processing & Validasi (3–5 hari):** Reduksi variabel redundan, validasi integritas data, dan deteksi outlier permintaan. Zhang, Li, dan Ren (2024) menambahkan modul validasi kualitas (uji lemak, protein, Total Plate Count/TPC) untuk *reverse flow*.

**Tahap 4 — Eksekusi BD (8–24 jam):**