# 1968 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang sangat khas dibandingkan dengan rantai pasok produk manufaktur konvensional. Sifat *perishable* (mudah rusak) dari susu mentah, yogurt, keju, dan krim mengharuskan seluruh mata rantai logistik — mulai dari *farm tank*, *chilling centers*, *processing plants*, hingga *retail outlets* — beroperasi dalam jendela waktu dan suhu yang sangat ketat. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), degradasi mutu biologis yang dipengaruhi oleh waktu (*time-temperature integrator*), tingkat kontaminasi mikrobiologis, serta fluktuasi permintaan musiman menjadikan perancangan jaringan rantai pasok susu sebagai masalah *mixed-integer programming* (MIP) berskala besar dengan banyak objektif yang saling berkonflik.

Urgensi perancangan ini diperkuat oleh fakta empiris bahwa kerugian pascapanen (*post-harvest losses*) pada produk susu di negara berkembang dapat mencapai 20–35% dari total produksi, terutama disebabkan oleh inefisiensi distribusi cold chain. Zhang, Li, dan Ren (2024) dalam *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa ketika keputusan *quality grading* dimasukkan ke dalam model desain jaringan rantai pasok balik (*reverse supply chain*), kompleksitas masalah meningkat secara eksponensial karena variabel kualitas menjadi *state-dependent* terhadap waktu dan suhu. Studi tersebut mengonfirmasi bahwa kerangka multi-objektif — yang menyeimbangkan biaya logistik, emisi karbon, dan degradasi mutu — bukan sekadar kebutuhan akademis melainkan prasyarat operasional.

Konteks industri yang melatarbelakangi riset ini mencakup empat kekuatan pendorong utama: (i) peningkatan konsumsi produk susu di Asia Tenggara yang diproyeksikan tumbuh 4,8% CAGR; (ii) tekanan regulasi terkait *food safety* (SNI, Codex Alimentarius, FDA) yang menuntut traceability; (iii) tuntutan keberlanjutan (*sustainability*) berupa reduksi emisi CO₂ per liter susu yang didistribusikan; serta (iv) adopsi teknologi *Industry 4.0* seperti sensor IoT untuk *cold chain monitoring* yang menghasilkan data beresolusi tinggi untuk pemodelan stokastik. Dalam konteks ini, pendekatan deterministik satu-objektif sudah tidak memadai, dan dekomposisi Benders muncul sebagai metodologi yang secara elegan memisahkan keputusan *strategic* (lokasi fasilitas, kapasitas) dari keputusan *operational* (alokasi aliran, batch produksi, rute) untuk menyelesaikan masalah MIP berskala besar secara komputasional efisien.

## 2. Landasan Teori & Formulasi Matematis

Model jaringan rantai pasok susu multi-objektif yang diajukan oleh Lead Researchers (2023) diformulasikan sebagai *mixed-integer linear programming* (MILP) dengan empat lapisan *echelon*: *supplier* (peternakan) → *processing plants* → *distribution centers* (DC) → *customer zones*. Formulasi master problem-nya adalah:

$$
\min_{y,z} \; Z(y,z) = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \Phi(y,z)
$$

di mana:
- $y_i \in \{0,1\}$ adalah keputusan biner membuka fasilitas *processing plant* di lokasi kandidat $i \in I$
- $z_j \in \{0,1\}$ adalah keputusan membuka *distribution center* di kandidat $j \in J$
- $f_i, g_j$ masing-masing adalah *fixed cost* tahunan untuk membuka plant dan DC
- $\Phi(y,z)$ adalah *optimal subproblem value* yang mewakili biaya operasional dan degradasi mutu

Subproblem operasional untuk setiap skenario permintaan $\xi \in \Xi$ dirumuskan sebagai:

$$
\Phi(y,z,\xi) = \min_{x,h} \sum_{(i,j)\in A} c_{ij} x_{ij}^{\xi} + \sum_{(j,k)\in B} c_{jk} h_{jk}^{\xi} + \sum_{k \in K} \rho_k s_k^{\xi}
$$

dengan kendala:

$$
\sum_{j} x_{ij}^{\xi} \leq \alpha_i^{\xi} y_i \quad \forall i \in I \quad \text{(kapasitas plant)}
$$

$$
\sum_{i} x_{ij}^{\xi} = \sum_{k} h_{jk}^{\xi} \quad \forall j \in J \quad \text{(konservasi aliran di DC)}
$$

$$
\sum_{j} h_{jk}^{\xi} + s_k^{\xi} = d_k^{\xi} \quad \forall k \in K \quad \text{(pemenuhan permintaan)}$$

$$
x_{ij}^{\xi}, h_{jk}^{\xi}, s_k^{\xi} \geq 0
$$

di mana $x_{ij}^{\xi}$ adalah volume susu (liter) yang dikirim dari plant $i$ ke DC $j$, $h_{jk}^{\xi}$ adalah volume dari DC $j$ ke customer zone $k$, $s_k^{\xi}$ adalah unmet demand (backorder) di zona $k$, dan $d_k^{\xi}$ adalah permintaan acak di skenario $\xi$.

Inovasi krusial paper Lead Researchers (2023) adalah penambahan fungsi degradasi mutu berbasis persamaan Arrhenius untuk *shelf-life*:

$$
Q_{jk}^{\xi} = Q_0 \cdot \exp\!\left(-\int_{0}^{T_{jk}} k_{\text{ref}} \cdot \exp\!\left[-\frac{E_a}{R}\!\left(\frac{1}{T(t)} - \frac{1}{T_{\text{ref}}}\right)\right] dt\right)
$$

di mana $Q_0$ adalah mutu awal, $E_a$ adalah energi aktivasi deteriorasi, $R$ adalah konstanta gas, dan $T(t)$ adalah profil suhu waktu-nyata. Mutu akhir $Q_{jk}^{\xi}$ harus memenuhi $Q_{jk}^{\xi} \geq Q_{\min}$ (standar mutu minimum, misalnya total plate count ≤ $10^5$ CFU/mL).

Objektif multi-tujuan diformulasikan secara *weighted sum* dengan parameter $\lambda$ sebagai preferensi *decision-maker*:

$$
\min \; \lambda_1 \mathbb{E}_{\xi}[C^{\xi}] + \lambda_2 \mathbb{E}_{\xi}[E^{\xi}] + \lambda_3 \mathbb{E}_{\xi}[(Q_{\min} - Q^{\xi})^+]
$$

di mana $C^{\xi}$ adalah total biaya, $E^{\xi}$ adalah emisi CO₂ ekuivalen, dan suku ketiga adalah *expected quality shortfall*. Algoritma **ε-constraint** digunakan untuk menghasilkan *Pareto frontier* karena studi menunjukkan bobot subjektif sulit ditentukan pada tahap awal.

Prosedur dekomposisi Benders secara iteratif:

1. Selesaikan *master problem* (MP) tanpa cuts → dapat $(y^*, z^*)$.
2. Bangun dan selesaikan *subproblem* (SP) untuk seluruh $\xi \in \Xi$.
3. Jika SP feasibel, generate **optimality cut**: $\theta \geq \Phi(y^*,z^*) + \pi^T(y - y^*) + \sigma^T(z - z^*)$.
4. Jika SP infeasibel, generate **feasibility cut** berbasis *dual ray*.
5. Tambahkan cut ke MP, ulangi hingga *gap* $\leq \epsilon$ (misalnya 0,5%).

Zhang et al. (2024) memperluas kerangka ini dengan variabel $q_r \in [0,1]$ sebagai *quality grade* yang dialokasikan pada akhir rantai pasok balik, sehingga menambah dimensi keputusan tetapi tetap solvable via Benders karena struktur blok-angular tetap terjaga.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka Lead Researchers (2023) mengikuti SOP delapan-tahap:

**Tahap 1 — Pengumpulan Data Geospasial & Deman.** Data lokasi peternakan (GPS kandidat $I$), kapasitas harian $\alpha_i$, permintaan historis $d_k^{\xi}$ selama 24 bulan, profil suhu ambient regional (rata-rata $T(t)$ musiman), dan struktur biaya transportasi $c_{ij}, c_{jk}$ dari operator logistik.

**Tahap 2 — Diskretisasi Skenario.** Reduksi skenario permintaan dari ribuan *realizations* menjadi 10–20 skenario representatif menggunakan *forward scenario reduction* (algoritma Dupacova-Kaut-Wallace) dengan jarak Kantorovich ≤ 5%.

**Tahap 3 — Formulasi Master Problem.** Tentukan kandidat plant/DC dengan fixed cost $f_i, g_j$, bangun MP dalam notasi ringkas dan validasi约束 menggunakan parser MILP (GAMS/CPLEX/Gurobi).

**Tahap 4 — Inisialisasi Benders Loop.** Set batas bawah (LB) = $-\infty$, batas atas (UB) = $+\infty$, iterasi $r = 0$. Subproblem untuk setiap $\xi$ diselesaikan dengan LP relax (karena kontinu).

**Tahap 5 — Iterasi & Konvergensi.** Pada setiap iterasi, selesaikan MP → $(y^{(r)}, z^{(r)})$; selesaikan SP$(y^{(r)},z^{(r)})$ untuk seluruh $\xi$; bangun cut; tambahkan ke MP; update LB = $\max$(LB, nilai MP) dan UB = $\min$(UB, nilai feasible solution). Berhenti bila $(UB-LB)/UB \leq \epsilon$.

**Tahap 6 — Validasi Fisibilitas Mutu.** Periksa apakah $Q_{jk}^{\xi} \geq Q_{\min}$ untuk semua lintasan kritis (*long lead time routes*). Jika tidak, tambahkan *quality cut* sebagai kendala tambahan.

**Tahap 7 — Pembangkitan Pareto Front.** Variasi $\lambda = (\lambda_1, \lambda_2, \lambda_3)$ pada grid $\epsilon$-constraint untuk mendapatkan *trade-off curve* biaya-mutu-emisi.

**Tahap 8 — Implementasi & Monitoring.** Deploy solusi ke *Enterprise Resource Planning* (ERP), integrasikan sensor IoT suhu truk (*time-temperature logger*), dan lakukan *rolling horizon* re-optimisasi mingguan untuk mengakomodasi perubahan permintaan aktual.

Diagram alir (flowchart) rekayasa ini secara langsung mengikuti arsitektur keputusan strategis-operasional yang juga diadopsi oleh Zhang et al. (2024) dalam konteks *reverse* chain — di mana *feedback loop* dari *recovery facilities* menambah satu blok tambahan pada subproblem tanpa mengubah struktur dekomposisi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi, pertimbangkan studi kasus di sebuah negara dengan 5 kandidat *processing plant* (P1–P5), 4 kandidat *distribution center* (D1–D4), dan 8 *customer zone* (Z1–Z8). Parameter input ringkas:

| Parameter | Nilai |
|---|---|
| Fixed cost plant ($f_i$) | 1.200.000–2.000.000 USD/thn |
| Fixed cost DC ($g_j$) | 600.000–900.000 USD/thn |
| Biaya transport $c_{ij}$ | 0,05–0,12 USD/liter |
| Kapasitas plant $\alpha_i$ | 80–150 juta liter/thn |
| Permintaan rata-rata $d_k$ | 20–60 juta liter/thn |
| Energi aktivasi $E_a$ | 84 kJ/mol (susu pasteurisasi) |
| $Q_{\min}$ (standar mutu) | 0,82 (skor mutu relatif) |
| Bobot objektif | $\lambda_1 = 0,5$; $\lambda_2 = 0,3$; $\lambda_3 = 0,2$ |

**Iterasi 1 (tanpa cut):** MP relaxed menentukan $y_i^* = z_j^* = 1$ untuk seluruh kandidat (solusi “buka semua” karena tanpa cut). LB = $\sum f_i + \sum g_j = 8{,}5$ juta + $3{,}0$ juta = **11,5 juta USD** (lower bound dari fixed cost).

**Iterasi 1 — Subproblem:** Selesaikan SP untuk skenario rata-rata. Solusi LP menghasilkan total biaya operasional $\Phi = 4{,}85$ juta USD (transport 3,20; energi cold-chain 1,05; backorder 0,60). Total UB = 11,5 + 4,85 = **16,35 juta USD**. *Dual prices*: $\pi_i$ (kapasitas) rata-rata 0,018 USD/liter; $\sigma_j$ (aliran DC) rata-rata 0,022 USD/liter.

**Benders Optimality Cut #1:**
$$
\theta \geq 4{,}85 + \sum_i 0{,}018 (y_i - 1) + \sum_j 0{,}022 (z_j - 1)
$$

**Iterasi