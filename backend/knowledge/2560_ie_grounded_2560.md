# 2560 — Desain Jaringan Rantai Pasok Multi-Eselon dengan Dekomposisi Benders: Framework Multi-Objektif untuk Produk Susu dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor agri-food dengan karakteristik operasional paling kompleks dalam rantai pasok global. Produk susu seperti *pasteurized milk*, yoghurt, keju, dan susu bubuk memiliki *shelf-life* yang pendek (umumnya 5–21 hari untuk produk segar pada suhu 2–4°C), memerlukan infrastruktur *cold chain* yang kontinyu, serta memiliki tingkat *waste ratio* yang tinggi jika dibandingkan dengan produk FMCG non-persiable. Berdasarkan Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), permasalahan desain jaringan rantai pasok susu tidak cukup diselesaikan dengan pendekatan *single-objective* tradisional yang hanya meminimalkan biaya, melainkan harus mempertimbangkan secara simultan tiga dimensi keputusan: (i) lokasi dan kapasitas fasilitas produksi (pabrik pengolahan, gudang ber-AC, distribution center), (ii) alokasi aliran produk antar-eselon, dan (iii) tingkat pelayanan (*service level*) yang memenuhi standar kualitas SNI 01-3951-1995 untuk produk susu pasteurisasi.

Urgensi operasional makin meningkat ketika dimasukkan dimensi lingkungan (*carbon footprint*) dan risiko kerugian karena produk *expired*. Studi Lead Researchers (2023) menunjukkan bahwa rata-rata *waste rate* produk susu di jaringan distribusi yang tidak ter-optimasi mencapai 8,7% dari total volume produksi, dibandingkan dengan 3,1% pada jaringan yang dioptimasi dengan framework multi-objektif. Secara ekonomis, dengan asumsi harga jual rata-rata Rp 12.500/liter dan volume produksi nasional sekitar 3,2 juta ton/tahun, setiap 1% pengurangan *shrinkage* berpotensi menghemat Rp 400 miliar/tahun bagi industri.

Kompleksitas ini memicu kebutuhan akan metodologi *exact* dan *heuristic* yang mampu menangani *mixed-integer linear programming* (MILP) berskala besar. Framework yang diusulkan Lead Researchers (2023) menggunakan **Benders Decomposition** sebagai teknik dekomposisi untuk memisahkan *master problem* (keputusan investasi fasilitas, bersifat integer) dari *subproblem* (aliran operasional, bersifat kontinyu LP). Pendekatan ini diperkuat secara metodologis oleh Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) dalam studi mereka di [DOI 10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) yang menunjukkan efektivitas Benders Decomposition dalam konteks *reverse supply chain* dengan keputusan kualitas, membuktikan bahwa struktur matematis serupa dapat diterapkan lintas domain industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Model jaringan rantai pasok susu mengikuti struktur MILP multi-objektif dengan notasi berikut (Lead Researchers, 2023):

**Himpunan:**
- $I$ = himpunan *supplier*/peternakan susu, $|I| = m$
- $J$ = himpunan pabrik pengolahan (*processing plant*), $|J| = p$
- $K$ = himpunan gudang dingin (*cold warehouse*), $|K| = w$
- $L$ = himpunan distribution center (DC), $|L| = d$
- $R$ = himpunan *retail zone*/zona permintaan, $|R| = n$
- $T$ = himpunan periode perencanaan (mingguan), $|T| = h$

**Parameter:**
- $c_{ij}^{s}$ = biaya transportasi per unit dari supplier $i$ ke plant $j$
- $c_{jk}^{p}$ = biaya транспортации dari plant $j$ ke gudang $k$
- $c_{kl}^{w}$ = biaya distribusi dari gudang $k$ ke DC $l$
- $f_j$ = *fixed cost* pembukaan plant $j$ (Rp)
- $g_k$ = *fixed cost* pembangunan gudang $k$ (Rp)
- $\text{Cap}_j$ = kapasitas produksi plant $j$ (liter/hari)
- $\text{Wcap}_k$ = kapasitas penyimpanan dingin gudang $k$ (liter)
- $d_{rt}$ = permintaan di zona ritel $r$ pada periode $t$ (liter)
- $\alpha$ = *service level* minimum yang diinginkan (0 ≤ α ≤ 1)
- $\beta$ = emisi CO₂ per liter-km (kg CO₂e)
- $\lambda_1, \lambda_2, \lambda_3$ = bobot preferensi multi-objektif, $\sum \lambda_s = 1$

**Variabel Keputusan:**
- $x_{ij} \in \{0,1\}$ = 1 jika plant $j$ dibuka, 0 jika tidak
- $y_k \in \{0,1\}$ = 1 jika gudang $k$ dibangun, 0 jika tidak
- $q_{ij}^{s}$ = volume susu mentah dari supplier $i$ ke plant $j$ (liter)
- $q_{jk}^{p}$ = volume produk terolah dari plant $j$ ke gudang $k$ (liter)
- $q_{kl}^{w}$ = volume dari gudang $k$ ke DC $l$ (liter)
- $q_{lr}^{d}$ = volume dari DC $l$ ke zona ritel $r$ (liter)

### 2.2 Fungsi Objektif Multi-Kriteria

Framework Lead Researchers (2023) menggunakan pendekatan *weighted sum scalarization*:

$$\min Z = \lambda_1 \cdot Z_1 + \lambda_2 \cdot Z_2 - \lambda_3 \cdot Z_3 \tag{1}$$

dengan tiga sub-objektif:

$$Z_1 = \sum_{j} f_j x_j + \sum_{k} g_k y_k + \sum_{(i,j)} c_{ij}^{s} q_{ij}^{s} + \sum_{(j,k)} c_{jk}^{p} q_{jk}^{p} + \sum_{(k,l)} c_{kl}^{w} q_{kl}^{w} + \sum_{(l,r)} c_{lr}^{d} q_{lr}^{d} \tag{2}$$

$Z_2 = \sum_{(i,j)} \beta \cdot d_{ij}^{dist} \cdot q_{ij}^{s} + \sum_{(j,k)} \beta \cdot d_{jk}^{dist} \cdot q_{jk}^{p} + \sum_{(k,l)} \beta \cdot d_{kl}^{dist} \cdot q_{kl}^{w} \tag{3}$

$$Z_3 = \frac{\sum_{r,t} \sum_{l} q_{lr}^{d}}{\sum_{r,t} d_{rt}} \quad \text{(fill rate)} \tag{4}$$

### 2.3 Benders Decomposition Structure

Master Problem (MP) hanya memuat variabel investasi integer:

$$\min_{x, y} \sum_{j} f_j x_j + \sum_{k} g_k y_k + \theta(x, y) \tag{5}$$

$$\text{st.} \quad \sum_{j} x_j \geq 1, \quad x_j \in \{0,1\} \quad \forall j$$

dengan $\theta(x, y)$ adalah **fungsi dual recourse** yang didekati melalui *Benders cuts*:

$$\theta(x, y) \geq (\pi^k)^T (h - Tx - Uy) \quad \text{(optimality cut iterasi } k\text{)} \tag{6}$$

Subproblem (SP) untuk fixed $(x^*, y^*)$:

$$\min_{q \geq 0} \sum c \cdot q \tag{7}$$

$$\text{st.} \quad A q \geq b - Tx^* - Uy^*$$

Optimal dual $(\pi, \mu)$ subproblem menghasilkan *cut* baru untuk iterasi berikutnya, mengikuti algoritma **Generalized Benders Decomposition** (Geoffrion, 1972; dimodifikasi oleh Lead Researchers, 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework Benders Decomposition untuk jaringan rantai pasok susu mengikuti SOP enam tahap berikut (Lead Researchers, 2023; Yanzi Zhang et al., 2024):

**Tahap 1 — Akuisisi Data Operasional**
- Pengumpulan data: kapasitas supplier (±10%), demand historis 24 bulan, *fixed cost* pembukaan fasilitas, struktur biaya transportasi multi-modus (truk berpendingin, kereta, refrigerated van).
- Validasi data dengan metode *triangulation*: cross-check antara ERP, WMS, dan TMS.
- Estimasi parameter lingkungan (emisi per liter-km) menggunakan protokol GHG Protocol Scope 3.

**Tahap 2 — Formulasi Model dan Kalibrasi**
- Penulisan formulasi MILP lengkap dengan semua kendala kapasitas, *service level*, *shelf-life*, dan kapasitas armada.
- Kalibrasi parameter dengan *historical fitting*: $\hat{\theta} = \arg\min_{\theta} \sum_{t} (d_t^{observed} - d_t^{model}(\theta))^2$.

**Tahap 3 — Inisialisasi Master Problem**
- Set $\text{LB} = -\infty$, $\text{UB} = +\infty$, $\epsilon = 10^{-4}$.
- Selesaikan relaxed MP (LP) untuk mendapatkan $(x^0, y^0, \theta^0)$.

**Tahap 4 — Iterasi Benders**
- **Step A:** Solve SP dengan fixed $(x^{k-1}, y^{k-1})$ → solusi optimal $q^k$ dan dual $\pi^k$.
- **Step B:** Generate *optimality cut* atau *feasibility cut* berdasarkan status SP:
  - Jika SP *feasible & optimal*: tambah cut $\theta \geq \pi^T(b - Tx - Uy)$ ke MP.
  - Jika SP *infeasible*: tambah cut $0 \geq \mu^T(b - Tx - Uy)$.
- **Step C:** Resolve updated MP → update LB dan UB.

**Tahap 5 — Konvergensi**
- Kriteria berhenti: $|\text{UB} - \text{LB}| / |\text{LB}| \leq \epsilon$ atau jumlah iterasi maksimum.
- Lead Researchers (2023) melaporkan konvergensi rata-rata 17–34 iterasi untuk kasus dengan 50 supplier, 8 plant, 12 gudang, dan 25 DC.

**Tahap 6 — Validasi dan Implementasi**
- *Post-optimality analysis*: sensitivitas terhadap perubahan demand ±15%, fuel cost ±20%, dan kapasitas ±10%.
- Pilot implementasi di 1 region selama 8 minggu sebelum *roll-out* nasional.
- Zhang et al. (2024) menambahkan validasi berbasis simulasi Monte Carlo untuk memastikan robuste pada rantai pasok balik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Studi Kasus

Ambil studi kasus rantai pasok susu di Pulau Jawa dengan parameter:
- $m = 10$ supplier (peternakan di Bandung, Lembang, Malang, Boyolali, Cirebon)
- $p = 4$ plant (Jakarta, Surabaya, Bandung, Semarang)
- $w = 5$ gudang dingin (Bekasi, Tangerang, Surabaya, Semarang, Bandung)
- $d = 8$ DC regional
- $n = 20$ zona ritel
- $h = 4$ periode (bulan)

**Data biaya tetap pembukaan:**
- Plant: $f_j$ = [Rp 18M, Rp 22M, Rp 16M, Rp 20M]
- Gudang: $g_k$ = [Rp 8M, Rp 9M, Rp 7M, Rp 8,5M, Rp 7,5M]

**Demand total per periode:** $\sum_r d_r = 850.000$ liter/bulan.

**Asumsi biaya transportasi per liter:** rata-rata Rp 250 (lokal) sampai Rp 800 (lintas provinsi).

### 4.2 Eksekusi Iterasi Benders (Sederhana)

**Iterasi 1:** MP relaxed menghasilkan kandidat buka plant $\{J_1, J_3\}$ dan gudang $\{W_1, W_3, W_4\}$, dengan $\theta^0 = $ Rp 6,2 Milyar (lower bound).

**Subproblem 1:** Alirkan demand dengan jaringan di atas:
- $q_{1,1}^s = 180.000$ liter, $q_{3,1}^s = 140.000$ liter
- $q_{1,1}^p = 280.000$, $q_{1,3}^p = 60.000$, $q_{3,4}^p = 150.000$
- Total biaya operasional: Rp 4,85 Milyar
- Dual prices pada kendala plant capacity: $\pi = [220, -, 180, -]$

**Optimality cut:** $\theta \geq 220(\text{Cap}_1 - q_1