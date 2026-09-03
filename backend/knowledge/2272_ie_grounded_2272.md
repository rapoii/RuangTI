# 2272 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition: Formulasi, Implementasi, dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, 6(5). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks di era pascapandemi dan disrupsi rantai pasok. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, jaringan rantai pasok susu dicirikan oleh tiga karakteristik yang membedakannya dari manufaktur konvensional: *(i) sifat produk yang sangat mudah rusak* dengan masa simpan terbatas (1–14 hari untuk susu pasteurisasi, hingga 30 hari untuk yogurt), *(ii) permintaan yang sangat elastis dan stokastik* yang dipengaruhi musim, promosi, dan preferensi konsumen, serta *(iii) kendala rantai dingin* yang mengharuskan integritas suhu 2–6°C dari titik produksi hingga konsumen akhir ([DOI: 10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Ketiga faktor ini menyebabkan kerugian tahunan industri susu dunia mencapai 8–12% dari total produksi karena pembusukan, kerusakan kemasan, dan cold chain failure, dengan estimasi nilai ekonomi melebihi USD 30 miliar per tahun.

Urgensi pengembangan kerangka optimasi multi-objektif untuk jaringan rantai pasok susu semakin nyata ketika perusahaan menghadapi tekanan simultan untuk *(a) menekan biaya operasional dan logistik* yang meningkat 15–25% akibat kenaikan harga energi dan refrigeran, *(b) meminimalkan food waste* untuk memenuhi target SDG 12.3 (pengurangan 50% food waste pada 2030), dan *(c) mempertahankan kualitas organoleptik dan keamanan pangan* yang diawasi ketat oleh regulator seperti BPOM, FDA, dan EFSA. Pendekatan single-objective yang hanya meminimalkan biaya terbukti tidak cukup, karena solusi biaya-minimum dapat menghasilkan tingkat waste yang tidak dapat diterima atau service level yang rendah.

Lead Researchers (2023) mengusulkan kerangka kerja multi-objektif yang menyeimbangkan tiga tujuan konkuren: minimisasi total biaya jaringan, minimisasi produk rusak/kadaluwarsa, dan maksimisasi tingkat layanan (service level). Kompleksitas komputasional masalah Mixed-Integer Programming (MIP) berskala besar dengan dimensi stokastik ditangani melalui Benders Decomposition (BD)—sebuah teknik dekomposisi yang mempartisi masalah menjadi *master problem* (keputusan stratejik: lokasi fasilitas dan kapasitas) dan *subproblem* (keputusan operasional: alokasi aliran dan lot sizing). Studi pendukung Zhang, Li, & Ren (2024) menunjukkan bahwa Benders Decomposition juga sangat efektif untuk jaringan reverse supply chain dengan keputusan kualitas, yang arsitektur algoritmiknya dapat di-*coupling* dengan framework forward chain susu ([DOI: 10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)). Sinergi kedua literatur membentuk fondasi metodologis yang kuat untuk desain jaringan rantai pasok produk susu modern yang resilient dan berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Himpunan, Parameter, dan Variabel Keputusan

Formulasi matematis mengikuti notasi standar dari Lead Researchers (2023). Himpunan keputusan meliputi:

- $\mathcal{I}$ = himpunan pabrik pengolahan (*processing plants*), $|\mathcal{I}| = I$
- $\mathcal{J}$ = himpunan pusat distribusi / gudang dingin, $|\mathcal{J}| = J$
- $\mathcal{K}$ = himpunan zona permintaan (*customer zones*), $|\mathcal{K}| = K$
- $\mathcal{P}$ = himpunan produk susu (misal: susu pasteurisasi, yogurt, keju), $|\mathcal{P}| = P$
- $\mathcal{T}$ = himpunan periode perencanaan (mingguan/bulanan), $|\mathcal{T}| = T$
- $\mathcal{S}$ = himpunan skenario permintaan, $|\mathcal{S}| = S$

Parameter kunci mencakup:

- $d_{kpt}^{s}$ = permintaan produk $p$ dari zona $k$ pada periode $t$ di skenario $s$
- $f_i$ = biaya tetap operasional pabrik $i$ per periode
- $g_j$ = biaya tetap operasional gudang $j$ per periode
- $c_{ijp}^{P}$ = biaya transportasi per unit dari pabrik $i$ ke gudang $j$ untuk produk $p$
- $c_{jkp}^{D}$ = biaya distribusi dari gudang $j$ ke zona $k$ untuk produk $p$
- $h_{jp}$ = biaya penyimpanan per unit produk $p$ di gudang $j$ (mencakup energi pendingin)
- $\alpha_p$ = umur simpan (*shelf life*) produk $p$ dalam hari
- $w_{jp}$ = tingkat kerusakan produk $p$ di gudang $j$ per hari
- $Cap_i$ = kapasitas produksi pabrik $i$
- $Cap_j$ = kapasitas penyimpanan gudang $j$

Variabel keputusan:

- $x_i \in \{0,1\}$ = 1 jika pabrik $i$ dibuka
- $y_j \in \{0,1\}$ = 1 jika gudang $j$ diaktifkan
- $q_{ijp}^{s}$ = kuantitas produk $p$ yang dikirim dari $i$ ke $j$ pada skenario $s$
- $z_{jkp}^{ts}$ = kuantitas produk $p$ yang dikirim dari $j$ ke $k$ pada periode $t$ skenario $s$
- $r_{jp}^{ts}$ = kuantitas produk $p$ yang rusak di gudang $j$ pada periode $t$ skenario $s$

### 2.2 Formulasi Multi-Objektif

Mengikuti kerangka *scalarized ε-constraint* dari Lead Researchers (2023), masalah optimasi multi-objektif diformulasikan sebagai:

**Fungsi Objektif 1 — Minimisasi Total Biaya Jaringan:**

$$\min Z_1 = \sum_{i \in \mathcal{I}} f_i x_i + \sum_{j \in \mathcal{J}} g_j y_j + \sum_{s \in \mathcal{S}} \pi_s \left[ \sum_{i,j,p} c_{ijp}^{P} q_{ijp}^{s} + \sum_{j,k,p,t} c_{jkp}^{D} z_{jkp}^{ts} + \sum_{j,p,t} h_{jp} \left(\sum_{i} q_{ijp}^{s} - \sum_{k} z_{jkp}^{ts} - r_{jp}^{ts}\right) \right] \tag{1}$$

**Fungsi Objektif 2 — Minimisasi Produk Rusak (Waste):**

$$\min Z_2 = \sum_{s \in \mathcal{S}} \pi_s \sum_{j \in \mathcal{J}} \sum_{p \in \mathcal{P}} \sum_{t \in \mathcal{T}} r_{jp}^{ts} \tag{2}$$

**Fungsi Objektif 3 — Maksimisasi Service Level:**

$$\max Z_3 = \frac{\sum_{s,t,k,p} \pi_s \sum_{j} z_{jkp}^{ts}}{\sum_{s,t,k,p} \pi_s d_{kpt}^{s}} \tag{3}$$

**Kendala:**

$$\sum_{j,p} z_{jkp}^{ts} \leq d_{kpt}^{s} \quad \forall k, t, s \tag{4}$$

$$\sum_{j,p} z_{jkp}^{ts} \geq \lambda \, d_{kpt}^{s} \quad \forall k, t, s \tag{5}$$

$$\sum_{i,p} q_{ijp}^{s} \leq Cap_j \, y_j \quad \forall j, s \tag{6}$$

$$\sum_{j,p} q_{ijp}^{s} \leq Cap_i \, x_i \quad \forall i, s \tag{7}$$

$$\sum_{k,p} z_{jkp}^{ts} + r_{jp}^{ts} = \sum_{i,p} q_{ijp}^{s} + I_{jp}^{t-1,s} \quad \forall j, t, s \tag{8}$$

Kendala (4) menjamin permintaan tidak dilampaui, kendala (5) menjamin tingkat layanan minimum $\lambda$ (mis. 95%), kendala (6)–(7) menjamin kapasitas, dan kendala (8) menjamin keseimbangan aliran dengan inventori periode sebelumnya $I_{jp}^{t-1,s}$.

### 2.3 Formulasi Benders Decomposition

Benders Decomposition mempartisi masalah menjadi **Master Problem (MP)** dengan variabel stratejik $(x_i, y_j)$ dan **Subproblem (SP)** dengan variabel operasional $(q_{ijp}^{s}, z_{jkp}^{ts}, r_{jp}^{ts})$ untuk skenario tetap.

**Master Problem (relaxasi awal):**

$$\min \sum_{i} f_i x_i + \sum_{j} g_j y_j + \eta$$

$$\text{subject to: } x_i \in \{0,1\}, \; y_j \in \{0,1\} \tag{9}$$

dengan $\eta$ merepresentasikan nilai optimal subproblem yang didekomposisi via Benders cuts.

**Subproblem (untuk skenario $s$ dan vektor $\bar{x}, \bar{y}$ tetap):**

$$\min \sum_{i,j,p} c_{ijp}^{P} q_{ijp}^{s} + \sum_{j,k,p,t} (c_{jkp}^{D} z_{jkp}^{ts} + h_{jp} I_{jp}^{ts}) + M \sum_{k,t} \delta_{kt}^{s}$$

subject to kendala (4)–(8) dengan $\bar{x}, \bar{y}$ sebagai parameter. Dual subproblem menghasilkan Benders cut yang ditambahkan ke MP:

$$\eta \geq \sum_{s} \pi_s \left[ \text{dual}_s^T (\bar{x}, \bar{y}) \right] \tag{10}$$

Iterasi berlanjut sampai gap optimalitas $(\text{UB}-\text{LB})/\text{LB} < \epsilon = 10^{-4}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka optimasi rantai pasok susu mengikuti prosedur operasional standar yang diadopsi dari Lead Researchers (2023) dan diperkuat dengan arsitektur reverse chain oleh Zhang et al. (2024):

**Tahap 1 — Karakterisasi Permintaan & Segmentasi Produk.** Kumpulkan data historis permintaan minimum 24 bulan, identifikasi pola musiman (peak Ramadan, liburan sekolah), dan klasifikasikan produk berdasarkan umur simpan $\alpha_p$. Terapkan metode *time-series decomposition* (Holt-Winters atau SARIMA) untuk membangkitkan skenario permintaan $d_{kpt}^{s}$ dengan simulasi Monte Carlo (minimal 100 skenario).

**Tahap 2 — Estimasi Parameter Biaya.** Parameter $f_i$, $g_j$, $c_{ijp}^{P}$, $c_{jkp}^{D}$, $h_{jp}$ dikumpulkan dari laporan keuangan, kontrak logistics provider, dan benchmark industri. Untuk cold chain, $h_{jp}$ harus mencakup biaya energi refrigerasi sesuai ISO 22005 dan SNI 01-3951-1995 untuk produk susu.

**Tahap 3 — Formulasi Model & Validasi.** Bangun model MIP dalam Python (PuLP/Gurobi) atau AMPL/GAMS. Validasi model dengan *feasibility check* dan *sanity bound* — sebagai contoh, biaya total tidak boleh menyimpang lebih dari 15% dari best-case ramp-up.

**Tahap 4 — Eksekusi Benders Decomposition.** Diagram alir logika:

```
┌──────────────────────────────────────────┐
│  Inisialisasi: LB = -∞, UB = +∞, ε = 1e-4│
└──────────────────┬───────────────────────┘
                   ▼
        ┌──────────────────────┐
        │  Solve Master Problem │ ◄────┐
        │  (Lokasi & Kapasitas) │