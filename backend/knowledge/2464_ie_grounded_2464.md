# 2464 — Optimasi Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) merupakan salah satu sektor pangan dengan karakteristik operasional paling kompleks dalam konteks Teknik Industri. Produk susu seperti *fresh milk*, yogurt, keju, dan *cream* memiliki umur simpan (*shelf life*) yang pendek, umumnya berkisar antara 5 hingga 21 hari pada suhu refrigerasi 2–4°C, sehingga menuntut integrasi erat antara keputusan lokasi fasilitas, kapasitas produksi, dan kebijakan distribusi dalam satu kerangka optimasi terpadu (Lead Researchers, 2023, [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Kerumitan ini semakin meningkat ketika perusahaan susu beroperasi pada jaringan multi-echelon yang mencakup peternakan (farm), fasilitas pengolahan (processing plant), gudang berpendingin (cold storage), pusat distribusi regional, hingga titik retail.

Urgensi operasional dari penelitian Lead Researchers (2023) muncul dari tiga fenomena empiris yang terjadi secara simultan. Pertama, fragmentasi peternakan sapi perah di Indonesia—data BPS menunjukkan lebih dari 90% merupakan peternakan rakyat dengan kapasitas < 10 ekor—mengakibatkan biaya *first-mile logistics* yang sangat tinggi. Kedua, tingkat kerugian pascapanen (*post-harvest losses*) produk susu di ASEAN dilaporkan mencapai 15–25% akibat kerusakan rantai dingin dan mismatch antara produksi dan permintaan. Ketiga, tekanan regulasi Badan Pengawas Obat dan Makanan (BPOM) serta SNI 01-3951-1995 tentang standar mutu susu segar mensyaratkan kepatuhan terhadap parameter Total Plate Count (TPC), kandungan lemak, dan protein yang sensitif terhadap waktu tempuh (*lead time*) distribusi.

Menurut Lead Researchers (2023), kerangka *multi-objective* diperlukan karena keputusan jaringan rantai pasok susu tidak dapat direduksi hanya menjadi minimasi biaya. Setidaknya tiga objektivitas yang saling bertentangan harus dipertimbangkan secara simultan: (i) minimasi total biaya *facility location* dan *transportation*, (ii) maksimasi tingkat kesegaran (*freshness*) produk yang sampai ke titik demand, dan (iii) minimasi jejak karbon (*carbon footprint*) dari aktivitas logistik. Pendekatan mono-objektif seperti model *Weber* klasik atau *p-median* terbukti tidak cukup untuk menangkap *trade-off* ini. Di sisi lain, Zhang, Li, dan Ren (2024, [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan dalam konteks *reverse supply chain* bahwa dekomposisi Benders secara efektif memisahkan keputusan *strategic* (desain jaringan) dari keputusan *operational* (aliran produk dan kualitas), sehingga memungkinkan solusi *near-optimal* untuk permasalahan mixed-integer yang berskala besar.

Penerapan *Benders Decomposition* (BD) dalam konteks dairy network design menjadi relevan karena permasalahan *facility location* yang dikombinasikan dengan *product routing* menghasilkan model Mixed-Integer Linear Programming (MILP) dengan struktur blok-angular yang sangat cocok dipartisikan. Lead Researchers (2023) melaporkan bahwa untuk jaringan dengan 50 peternakan, 8 processing plant kandidat, dan 30 zona demand, model monolitik MILP memerlukan waktu komputasi > 3.600 detik pada solver CPLEX, sementara formulasi BD konvergen dalam < 600 detik dengan *optimality gap* di bawah 1,5%. Temuan ini menjadi justifikasi utama mengapa modul 2464 ini wajib membahas arsitektur dekomposisi secara mendalam.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Multi-Objektif Rantai Pasok Susu

Formulasi Lead Researchers (2023) membangun model Mixed-Integer Programming dengan tiga fungsi tujuan yang di-*aggregate* menggunakan metode *Weighted Sum Scalarization* (WSS) dan *epsilon-constraint*. Secara matematis, bentuk umum model adalah:

$$\min \; Z = w_1 \cdot Z_1 + w_2 \cdot Z_2 + w_3 \cdot Z_3$$

dengan bobot $w_1 + w_2 + w_3 = 1$ dan $w_k \geq 0$ untuk $k = \{1, 2, 3\}$.

**Objektif 1 — Minimasi Total Biaya:**

$$Z_1 = \sum_{i \in I} \sum_{j \in J} c_{ij} \cdot x_{ij} + \sum_{j \in J} \sum_{k \in K} c_{jk} \cdot y_{jk} + \sum_{j \in J} f_j \cdot z_j$$

di mana $c_{ij}$ adalah biaya transportasi per unit dari peternakan $i$ ke processing plant $j$, $c_{jk}$ adalah biaya distribusi dari plant $j$ ke zona demand $k$, $f_j$ adalah *fixed cost* pembukaan plant, dan $x_{ij}, y_{jk}, z_j$ berturut-turut adalah variabel keputusan *flow* dan *facility opening* (variabel biner $z_j \in \{0,1\}$).

**Objektif 2 — Maksimasi Kesegaran Produk:**

$$Z_2 = \sum_{k \in K} \sum_{j \in J} \alpha \cdot \left( \frac{T_j - t_{jk}}{T_j} \right) \cdot y_{jk}$$

di mana $T_j$ adalah *remaining shelf life* saat produk meninggalkan plant $j$, $t_{jk}$ adalah waktu tempuh dari $j$ ke $k$, dan $\alpha$ adalah faktor konversi kualitas. Karena fungsi ini diminimalkan dalam kerangka WSS, Lead Researchers (2023) menggunakan transformasi $Z_2' = -Z_2$ atau memaksimasi $\sum \alpha \cdot \left(1 - \frac{t_{jk}}{T_j}\right) \cdot y_{jk}$.

**Objektif 3 — Minimasi Emisi Karbon:**

$$Z_3 = \sum_{i \in I} \sum_{j \in J} e_{ij} \cdot x_{ij} \cdot d_{ij} + \sum_{j \in J} \sum_{k \in K} e_{jk} \cdot y_{jk} \cdot d_{jk}$$

di mana $e_{ij}$ dan $e_{jk}$ adalah faktor emisi (kg CO₂e/ton-km) untuk moda transportasi yang digunakan, dan $d_{ij}, d_{jk}$ adalah jarak Euclidean atau jarak jaringan jalan aktual.

### 2.2 Kendala (Constraints)

$$\sum_{j \in J} y_{jk} = D_k, \quad \forall k \in K \quad \text{(kepuasan permintaan)}$$

$$\sum_{i \in I} x_{ij} \leq Q_j \cdot z_j, \quad \forall j \in J \quad \text{(kapasitas plant)}$$

$$x_{ij} \geq 0, \; y_{jk} \geq 0, \; z_j \in \{0,1\} \quad \text{(domain variabel)}$$

Kendala tambahan yang penting untuk konteks susu adalah *shelf-life constraint* dan *quality decay*:

$$t_{jk} \leq T_j - T_{\min}, \quad \forall j \in J, k \in K$$

yang memastikan bahwa produk hanya dikirim jika masih menyisihkan waktu simpan minimum $T_{\min}$ saat tiba di retail.

### 2.3 Formulasi Benders Decomposition

Benders Decomposition (Benders, 1962; diaplikasikan oleh Lead Researchers, 2023, dan diperluas oleh Zhang et al., 2024 untuk kasus reverse supply chain dengan keputusan kualitas) mempartisi model menjadi:

**Master Problem (MP) — Keputusan Strategis:**

$$\min \; \sum_{j \in J} f_j \cdot z_j + \theta$$

subject to:

$$\theta \geq \sum_{k \in K} \sum_{j \in J} \pi_{jk}^{(r)} \left( \sum_{j' \in J} y_{j'k} - D_k \right) + \sum_{i,j} c_{ij} x_{ij} \quad \forall r \in \mathcal{R}_{\text{feas}}$$

dengan $\theta$ adalah variabel epigraf untuk nilai optimal subproblem, $\pi^{(r)}$ adalah *dual variables* dari subproblem iterasi ke-$r$, dan $\mathcal{R}_{\text{feas}}$ adalah himpunan *optimality/feasibility cuts* yang dibangkitkan secara iteratif.

**Subproblem (SP) — Keputusan Operasional:**

Untuk给定 nilai $z_j^*$ dari MP, SP menjadi:

$$\min \; \sum_{i,j} c_{ij} x_{ij} + \sum_{j,k} c_{jk} y_{jk}$$

subject to kendala kapasitas, demand satisfaction, dan shelf-life di atas. Dual SP memberikan *marginal value* dari kapasitas plant dan demand, yang dikembalikan ke MP sebagai Benders cut:

$$\theta \geq \underbrace{\sum_{j} u_j Q_j z_j^*}_{\text{kapasitas}} + \underbrace{\sum_k v_k D_k}_{\text{demand}} - \underbrace{\sum_{j,k} \lambda_{jk} T_{\min}}_{\text{shelf-life}}$$

di mana $u_j, v_k, \lambda_{jk}$ adalah variabel dual. Algoritma berhenti ketika $|Z_{MP}^{(r)} - Z_{SP}^{(r)}| / |Z_{SP}^{(r)}| < \epsilon$ dengan $\epsilon = 0{,}01$ (1% optimality gap).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework Lead Researchers (2023) di lingkungan industri mengikuti *Standard Operating Procedure* (SOP) delapan tahap yang disesuaikan dengan karakteristik rantai pasok susu:

**Tahap 1 — Karakterisasi Data Empiris.** Pengumpulan data lapang selama 6–12 bulan mencakup: kapasitas harian peternakan (liter/hari), kualitas susu mentah (% lemak, TPC, protein), jarak tempuh (km), moda transportasi, kapasitas plant (liter/hari), biaya operasional plant (Rp/liter), dan demand musiman di zona retail.

**Tahap 2 — Estimasi Parameter Model.** Kalibrasi $c_{ij}$, $c_{jk}$, $f_j$, $T_j$, dan $e_{ij}$ menggunakan data historis. Lead Researchers (2023) merekomendasikan validasi melalui *leave-one-out cross-validation* untuk memastikan robustness parameter.

**Tahap 3 — Konstruksi Model Matematis.** Implementasi dalam bahasa pemodelan seperti Python + Pyomo, AMPL, atau GAMS. Struktur MILP dibentuk sesuai formulasi Bagian 2.1.

**Tahap 4 — Penerapan Benders Decomposition.** Partisi MP-SP diimplementasikan menggunakan *callback function* di solver (CPLEX, Gurobi). MP diselesaikan sebagai MILP murni dengan variabel $z_j$ dan $\theta$, sementara SP diselesaikan sebagai LP untuk setiap iterasi.

**Tahap 5 — Generate Pareto Front.** Karena model multi-objektif, dilakukan variasi bobot $w_1, w_2, w_3$ dalam grid search atau menggunakan algoritma NSGA-II untuk memperoleh *Pareto optimal front* dari solusi trade-off biaya-kesegaran-emisi.

**Tahap 6 — Validasi dan Sensitivity Analysis.** Pengujian sensitivitas terhadap parameter kritis (demand ±20%, harga BBM ±15%, kapasitas plant) untuk menilai robustnes solusi.

**Tahap 7 — Implementasi Keputusan.** Penentuan plant mana yang dibuka (lokasi dan kapasitas), alokasi *raw milk supply* dari peternakan ke plant, dan rute distribusi ke zona demand.

**Tahap 8 — Monitoring & Continuous Improvement.** Dashboard KPIs (biaya/liter, % produk dengan shelf life tersisa > 7 hari saat tiba di retail, ton CO₂e/minggu) untuk evaluasi berkala.

Diagram alir proses dapat direpresentasikan sebagai siklus tertutup: **Data → Model → BD Solve → Pareto → Decision → Pilot → Scale-up → Monitoring → Feedback ke Data**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Studi Kasus

Kasus hipotetis realistis untuk koperasi susu di Jawa Timur dengan parameter sebagai berikut:

| Parameter | Nilai | Simbol |
|---|---|---|
| Jumlah peternakan ($I$) | 15 | $i = 1, ..., 15$ |
| Plant kandidat ($J$) | 5 | $j = A, B, C, D, E$ |
| Zona demand ($K$) | 10 | $k = 1, ..., 10$ |
| Kapasitas plant $j$ (liter/hari) | 80.000 | $Q_j$ |
| Biaya tetap buka plant (Rp) | 2,