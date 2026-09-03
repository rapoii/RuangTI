# 2768 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri susu global menghadapi tantangan struktural yang semakin kompleks seiring dengan meningkatnya permintaan produk segar dan tekanan terhadap rantai pasok yang berkelanjutan. Produk susu merupakan kategori barang *perishable* dengan *shelf-life* yang pendek — umumnya antara 5 hingga 21 hari tergantung pada proses pasteurisasi, jenis pengemasan, dan suhu penyimpanan — sehingga setiap keputusan lokasi fasilitas, kapasitas produksi, dan rute distribusi memiliki konsekuensi langsung terhadap tingkat kerusakan (*spoilage rate*), kesegaran produk yang sampai ke konsumen akhir, serta total biaya logistik. Industri ini juga merupakan kontributor signifikan terhadap emisi gas rumah kaca: menurut berbagai studi, sektor susu menyumbang sekitar 3–4% dari total emisi antropogenik global, menjadikan aspek keberlanjutan sebagai variabel strategis yang tidak dapat diabaikan.

Lead Researchers (2023) dalam publikasinya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) mengusulkan sebuah *framework* multi-objektif yang secara eksplisit mengintegrasikan tiga dimensi keputusan — minimisasi biaya total, maksimisasi kesegaran produk, dan minimisasi jejak karbon — ke dalam satu formulasi optimasi Mixed-Integer Linear Programming (MILP) untuk jaringan rantai pasok dairy multi-echelon. Pendekatan ini dipandang sebagai respons terhadap keterbatasan model *single-objective* tradisional yang cenderung mengabaikan *trade-off* antara efisiensi ekonomi dan kualitas produk. Studi ini memanfaatkan Benders Decomposition (BD) sebagai algoritma eksak untuk memecahkan masalah *large-scale network design* yang secara komputasional sulit ditangani oleh solver MILP standar ketika jumlah fasilitas kandidat, pelanggan, dan periode perencanaan membesar.

Urgensi operasional dari kerangka ini dapat dipahami dari dua perspektif. Pertama, dari sisi *cold chain logistics*, setiap tambahan jam keterlambatan distribusi pada suhu ruang dapat mempercepat laju pertumbuhan bakteri dan memperpendek sisa umur simpan produk. Kedua, dari sisi *network design*, keputusan pembukaan fasilitas manufaktur (*processing plant*) dan *distribution center* memiliki *lock-in effect* jangka panjang karena investasi modalnya yang signifikan. Penelitian Zhang, Li, dan Ren (2024) (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) semakin memperkaya konteks ini dengan menunjukkan bahwa keputusan kualitas (*quality decisions*) dalam *reverse supply chain* — termasuk pengembalian produk cacat, daur ulang kemasan, dan inspeksi mutu — memiliki interaksi non-trivial dengan desain jaringan maju (*forward network*). Keduanya menegaskan bahwa keputusan desain jaringan pada industri susu tidak lagi dapat dipisahkan dari keputusan operasional dan keputusan kualitas dalam satu kerangka optimasi terpadu.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi yang dikembangkan oleh Lead Researchers (2023) mengikuti struktur *multi-echelon capacitated facility location problem* (MECFLP) dengan horizon perencanaan diskret $T = \{1, 2, \ldots, |T|\}$. Himpunan keputusan meliputi *supplier* $I$, *processing plant* kandidat $J$, *distribution center* (DC) kandidat $K$, dan *retail zone* $L$. Parameter-parameter kunci didefinisikan sebagai berikut:

- $d_{l,t}$: permintaan pelanggan $l$ pada periode $t$ (liter)
- $c_{ij}$: biaya transportasi dari supplier $i$ ke plant $j$ (per liter)
- $f_j$: biaya tetap pembukaan plant $j$
- $u_j$: kapasitas produksi plant $j$ (liter/period)
- $\alpha$: laju penurunan kualitas kesegaran per satuan waktu transit
- $\beta$: *spoilage rate* harian produk pada kondisi *cold chain*

Variabel keputusan:
- $y_j \in \{0,1\}$: 1 jika plant $j$ dibuka
- $x_{ijlt} \geq 0$: alur produk dari supplier $i$ melalui plant $j$ ke retailer $l$ pada periode $t$
- $q_{l,t} \geq 0$: indeks kesegaran yang sampai ke pelanggan $l$ pada periode $t$

**Fungsi Objektif Multi-Objektif:**

Minimisasi biaya total:
$$Z_1 = \sum_{j \in J} f_j y_j + \sum_{i \in J} \sum_{j \in J} \sum_{l \in L} \sum_{t \in T} c_{ij} x_{ijlt} + \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} h_j s_{jkt}$$

Maksimisasi kesegaran produk rata-rata:
$$Z_2 = \frac{1}{|L| \cdot |T|} \sum_{l \in L} \sum_{t \in T} q_{l,t}$$

Minimisasi emisi $\text{CO}_2$ ekuivalen:
$$Z_3 = \sum_{i,j,l,t} \xi_{ijl} \cdot \text{dist}_{ijl} \cdot x_{ijlt}$$

dengan $\xi_{ijl}$ adalah faktor emisi per liter-kilometer sesuai standar GHG Protocol Scope 3.

**Kendala Utama:**

Kendala kapasitas plant:
$$\sum_{i \in I} \sum_{l \in L} x_{ijlt} \leq u_j y_j, \quad \forall j \in J, t \in T$$

Kendala pemenuhan permintaan:
$$\sum_{i \in I} \sum_{j \in J} x_{ijlt} \geq d_{l,t}, \quad \forall l \in L, t \in T$$

Kendala kesegaran (linearisasi dari fungsi eksponensial deteriorasi):
$$q_{l,t} \leq Q_0 \cdot e^{-\alpha \cdot \tau_{ijl}} \cdot x_{ijlt}$$

di mana $Q_0$ adalah indeks kesegaran awal dan $\tau_{ijl}$ adalah *lead time*.

**Struktur Benders Decomposition:**

Karena variabel $y_j$ bersifat *binary* dan keputusan operasional $(x_{ijlt}, s_{jkt})$ bersifat *continuous*, masalah dipartisi menjadi:

*Master Problem (MP):*
$$\min_{y \geq 0} \sum_{j} f_j y_j + \theta$$
$$\text{st.} \quad \theta \geq \sum_{(i,l,t)} \pi^{k}_{ijlt}(d_{lt} - \sum_{i} x_{ijlt}) \quad \text{[optimality cut]}$$
$$0 \geq \sum_{(i,l,t)} \mu^{k}_{ijlt}(d_{lt} - \sum_{i} x_{ijlt}) \quad \text{[feasibility cut]}$$

*Subproblem (SP) — fixed $y$:* masalah LP murni yang meminimalkan biaya operasional dengan *dual variables* $\pi, \mu$. Iterasi BD menghasilkan *cutting planes* yang secara progresif mengencirkan *relaxation* MP hingga gap optimalitas $\leq \varepsilon$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari kerangka Lead Researchers (2023) mengikuti prosedur operasional standar yang dapat diadaptasi ke dalam *digital twin* rantai pasok:

**Tahap 1 — Akuisisi Data Historis & Kalibrasi Parameter.** Pengumpulan data permintaan harian (*SKU-level*), suhu aktual cold chain, dan laju deteriorasi dari sensor IoT. Kalibrasi parameter $\alpha, \beta$ menggunakan regresi non-linear terhadap data spoil historis dengan target $R^2 \geq 0.85$.

**Tahap 2 — Formulasi & Validasi Model.** Pembuatan formulasi MILP dalam *high-level modeling language* (GAMS/AMPL) dengan validasi menggunakan *small-scale benchmark* terhadap solver CPLEX/Gurobi untuk memastikan formulasi bebas *bug* struktural.

**Tahap 3 — Eksekusi Benders Decomposition.** Implementasi algoritma BD dengan *callback function* untuk lazy constraint generation. Parameter tuning meliputi *max iterations*, *cut management* (keep最多 50 most violated cuts), dan *MIP gap tolerance* $\varepsilon = 10^{-4}$.

**Tahap 4 — Validasi Solusi & Stress Test.** Pengujian skenario *what-if* terhadap fluktuasi permintaan ±20%, gangguan supply, dan kenaikan harga energi untuk menilai *robustness* solusi.

**Tahap 5 — Implementasi & Monitoring Berkelanjutan.** Penerjemahan solusi ke dalam rencana operasional mingguan dengan *rolling horizon* re-optimasi setiap 4 minggu. Pemantauan KPI meliputi *on-time delivery*, *spoilage rate*, dan *carbon intensity per liter*.

Diagram alir proses rekayasa mengikuti siklus PDCA (Plan-Do-Check-Act) yang terintegrasi dengan *Enterprise Resource Planning* (ERP) dan *Supply Chain Management* (SCM) platform.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Perusahaan dairy regional dengan 3 plant kandidat, 2 DC, dan 5 zona retailer. Horizon perencanaan $T = 4$ minggu.

**Parameter Input:**

| Parameter | Nilai | Satuan |
|---|---|---|
| $f_1, f_2, f_3$ | 850.000, 920.000, 780.000 | USD/tahun |
| $u_1, u_2, u_3$ | 50.000, 60.000, 45.000 | liter/minggu |
| $d_{l,t}$ rata-rata | 8.000 | liter/minggu |
| $\alpha$ | 0,05 | per jam |
| $Q_0$ | 100 | indeks |
| $\tau_{ijl}$ | 6–18 | jam |
| $\xi$ | 0,0021 | kg CO₂/L·km |
| Biaya transport | 0,08 | USD/L·km |

**Iterasi 1 BD — Subproblem Relaxation:**
Misalkan pada iterasi pertama, MP membuka plant 1 dan 3 ($y_1 = y_3 = 1, y_2 = 0$). SP dengan $y$ tetap menghasilkan biaya operasional: $C_{\text{op}}^* = \sum c_{ij} x_{ijlt} = 1.142.000$ USD.

Dual variables dari SP pada约束 permintaan: $\pi_{lt} = 0{,}15$ USD/L untuk semua $(l,t)$.

**Benders Optimality Cut untuk MP iterasi 2:**
$$\theta \geq 1.142.000 + 0{,}15 \sum_{l,t} \left( d_{lt} - \sum_{i,j} x_{ijlt} \right)$$

**Iterasi 2 — Solusi MP:** Algoritma memutuskan untuk menutup plant 3 dan membuka plant 2 dengan tambahan biaya tetap $\Delta f = 920.000 - 780.000 = 140.000$ USD, namun pengurangan biaya operasional karena plant 2 lebih dekat ke retailer utama: $C_{\text{op}}^{\text{baru}} = 1.058.000$ USD. Total biaya iteratif: $1.058.000 + 140.000 = 1.198.000$ USD.

**Iterasi 3 — Konvergensi:** Setelah 4 iterasi, gap optimalitas:
$$\text{gap} = \frac{|UB - LB|}{UB} = \frac{|1.198.000 - 1.195.000|}{1.198.000} = 0{,}25\% < 0{,}5