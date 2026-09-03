# 2672 — Optimasi Jaringan Rantai Pasok Multi-Objektif dengan Benders Decomposition: Aplikasi pada Rantai Pasok Produk Susu dan Reverse Supply Chain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok produk susu merupakan salah satu sistem logistik paling kompleks dalam industri pangan global karena karakteristik intrinsiknya yang mudah rusak (*perishability*), memerlukan rantai dingin (*cold chain*) yang ketat, serta memiliki pola permintaan musiman dan stokastik yang tinggi. Produk susu seperti susu segar (*fresh milk*), keju (*cheese*), yogurt, dan mentega memiliki umur simpan (*shelf life*) yang pendek—rata-rata 7 hingga 21 hari untuk susu pasteurisasi—sehingga keputusan lokasi fasilitas, kapasitas produksi, alokasi distribusi, dan kebijakan persediaan menjadi bersifat *time-critical*. Lead Researchers (2023) dalam paper yang diterbitkan di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa kerangka kerja multi-objektif sangat diperlukan untuk secara simultan meminimalkan total biaya logistik, emisi karbon, dan kehilangan produk akibat pembusukan, sambil memaksimalkan tingkat layanan pelanggan.

Urgensi operasional tema ini diperkuat oleh beberapa fakta industri. Pertama, FAO melaporkan bahwa sekitar 14% produksi pangan global hilang di antara panen dan ritel, dengan proporsi signifikan terjadi pada produk susu di negara berkembang. Kedua, rantai dingin menyumbang sekitar 4–6% total emisi CO₂ dalam industri susu, sehingga keputusan desain jaringan memiliki implikasi lingkungan langsung. Ketiga, volatilitas harga susu global yang sempat menyentuh USD 4.000/ton pada 2022 menciptakan tekanan profitabilitas yang membutuhkan optimasi adaptif. Pada tataran teoritis, masalah desain jaringan rantai pasok susu merupakan *mixed-integer stochastic programming* (MISP) berskala besar yang sulit diselesaikan dengan solver komersial standar seperti CPLEX atau Gurobi ketika jumlah skenario, periode, dan fasilitas bertambah. Benders Decomposition (BD)—yang diperkenalkan oleh Jacques Benders pada tahun 1962—menawarkan dekomposisi struktural dengan memisahkan keputusan *here-and-now* (lokasi, kapasitas) sebagai master problem dari keputusan *wait-and-see* (aliran, produksi, inventaris) sebagai subproblem. Penerapan BD pada konteks dairy supply chain merupakan kontribusi metodologis signifikan yang dibahas dalam Lead Researchers (2023), sementara perluasannya ke reverse supply chain dengan keputusan kualitas dipaparkan oleh Zhang, Li, dan Ren (2024) (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif MINLP

Model jaringan rantai pasok susu memuat himpunan indeks $i \in \mathcal{I}$ (peternakan/ supllier), $j \in \mathcal{J}$ (pabrik pengolahan/UPC), $k \in \mathcal{K}$ (gudang/DC), $l \in \mathcal{L}$ (pelanggan/retailer), $p \in \mathcal{P}$ (produk), $t \in \mathcal{T}$ (periode), dan $s \in \mathcal{S}$ (skenario permintaan). Variabel keputusan meliputi:

- $y_j \in \{0,1\}$: keputusan pembukaan fasilitas pengolahan
- $z_k \in \{0,1\}$: keputusan pembukaan gudang
- $x_{ijp}^s$: kuantitas produk $p$ yang dikirim dari $i$ ke $j$ pada skenario $s$
- $q_{jkp}^{ts}$: kuantitas produk $p$ dari $j$ ke $k$ pada periode $t$, skenario $s$
- $w_{klp}^{ts}$: kuantitas produk $p$ dari $k$ ke $l$ pada periode $t$, skenario $s$
- $I_{kp}^{ts}$: tingkat persediaan produk $p$ di $k$ pada akhir periode $t$

Fungsi tujuan multi-objektif dirumuskan sebagai vektor $\mathbf{F} = (F_1, F_2, F_3)$:

$$
F_1 = \sum_{j} f_j y_j + \sum_{k} g_k z_k + \mathbb{E}_s\left[\sum_{i,j,p,t} c_{ijp}^{t} x_{ijp}^{ts} + \sum_{j,k,p,t} h_{jkp}^{t} q_{jkp}^{ts} + \sum_{k,l,p,t} r_{klp}^{t} w_{klp}^{ts} + \sum_{k,p,t} h_{kp}^{I} I_{kp}^{ts}\right]
$$

$$
F_2 = \sum_{i,j,p,t} e_{ijp}^{\text{CO}_2} x_{ijp}^{ts} + \sum_{j,k,p,t} e_{jkp}^{\text{CO}_2} q_{jkp}^{ts} + \sum_{k,l,p,t} e_{klp}^{\text{CO}_2} w_{klp}^{ts}
$$

$$
F_3 = \mathbb{E}_s\left[\sum_{l,p,t} \text{Pen}_l^{ts}(D_l^{p,ts} - \sum_k w_{klp}^{ts}) + \sum_{k,p,t} s_{kp} I_{kp}^{ts,\text{expired}}\right]
$$

di mana $F_1$ adalah total biaya, $F_2$ adalah emisi karbon, dan $F_3$ adalah *expected shortage* ditambah kerugian produk kadaluarsa.

### 2.2 Benders Decomposition (BD)

Benders Decomposition memisahkan MINLP di atas menjadi *master problem* (MP) dengan variabel lokasi $y_j, z_k$ dan *subproblem* (SP) yang untuk setiap skenario $s$ menjadi:

$$
\text{SP}(y^*, z^*, s): \quad \min_{x,q,w,I} \quad c^T \mathbf{u}^s \quad \text{s.t.} \quad A\mathbf{u}^s \geq b - B(y^*, z^*), \quad \mathbf{u}^s \geq 0
$$

Dual SP menghasilkan $\pi^s$ dan *Benders optimality cut* ditambahkan ke MP:

$$
\eta \geq \mathbb{E}_s\left[(b - B\bar{y})^T \pi^s\right]
$$

dengan $\bar{y}$ nilai incumbent. Algoritma iteratif berhenti ketika $|\eta^{(r)} - \eta^{(r-1)}| \leq \varepsilon$ dengan $\varepsilon = 10^{-4}$ sebagai toleransi.

### 2.3 Kendala Cold-Chain dan Shelf-Life

Untuk produk susu dengan umur simpan $\tau_p$:

$$
\sum_{t' \geq t}^{t+\tau_p} w_{klp}^{t's} \geq 0 \quad \forall k,l,p,t,s, \quad \text{dan} \quad I_{kp}^{ts} \leq \sum_{t'' \leq t} (Q_{jkp}^{t''s} - \sum_{l} w_{klp}^{t''s})
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi BD untuk optimasi jaringan rantai pasok susu mengikuti SOP rekayasa industri sebagai berikut:

**Tahap 1 — Karakterisasi Masalah.** Definisikan horizon perencanaan (umumnya 12–24 bulan), jumlah skenario (100–500 skenario dari Monte Carlo atau Latin Hypercube Sampling terhadap data historis permintaan), dan struktur jaringan (3–5 eselon). Validasi distribusi permintaanuji Kolmogorov–Smirnov.

**Tahap 2 — Pembangunan Model Dasar.** Bangun *full-space MINLP* menggunakan bahasa pemodelan (GAMS, AMPL, atau Pyomo) sebagai *benchmark*. Validasi dengan solver CPLEX 22.1 atau Gurobi 11.0 pada data aktual.

**Tahap 3 — Dekomposisi Benders.** Partisi menjadi MP (variabel biner lokasi) dan SP (variabel kontinu aliran). Implementasikan *regularized Benders* untuk meningkatkan konvergensi:

$$
\text{MP}^{(r)}: \min_{y, \eta} \quad \sum f_j y_j + \eta + \rho \left\|y - y^{(r-1)}\right\|^2
$$

dengan $\rho$ sebagai parameter regularisasi Proximal.

**Tahap 4 — Pembangkitan Cut.** Setiap iterasi menghasilkan *optimality cut* atau *feasibility cut* tergantung status SP. Untuk multi-objektif, digunakan kerangka *ε-constraint*: optimalkan $F_1$ dengan约束 $F_2 \leq \varepsilon_2$, $F_3 \leq \varepsilon_3$ dan variasikan $\varepsilon$ untuk membangun Pareto front.

**Tahap 5 — Validasi & Implementasi.** Bandingkan gap optimalitas BD dengan full-space solver; target gap ≤ 1,5% dalam waktu CPU ≤ 3.600 detik. Implementasikan solusi ke sistem ERP/SCM (SAP IBP atau Oracle SCM) melalui integrasi API.

**Tahap 6 — Pemantauan Berkelanjutan.** Aktifkan *rolling horizon* dengan re-optimasi setiap bulan menggunakan data aktual terkini. Ini sesuai dengan praktik ISO 28000:2007 untuk *supply chain security management*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Jaringan distribusi produk susu di sebuah provinsi dengan 5 peternakan ($i=1,...,5$), 2 kandidat pabrik pengolahan ($j=1,2$), 3 kandidat gudang ($k=1,2,3$), dan 8 zona pelanggan ($l=1,...,8$). Produk: susu pasteurisasi ($\tau=7$ hari) dan yogurt ($\tau=21$ hari). Horizon: 12 bulan, 4 skenario permintaan (S1: rendah, S2: sedang, S3: tinggi, S4: ekstrim).

**Parameter Biaya (Rp):** $f_1=2{,}5 \times 10^9$, $f_2=3{,}0 \times 10^9$; $g_k \in \{8 \times 10^8, 9 \times 10^8, 1{,}0 \times 10^9\}$; biaya transportasi rata-rata $c_{ij} = 250$/liter, $h_{jk} = 180$/liter, $r_{kl} = 320$/liter. Biaya persediaan $h^{I} = 50$/liter/minggu. Penalty shortage $\text{Pen} = 1{,}200$/liter. Permintaan skenario S1: $D_l^{S1} \in [8.000, 15.000]$ liter/m