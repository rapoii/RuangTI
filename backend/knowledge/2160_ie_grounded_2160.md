# 2160 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok manufaktur konvensional. Sifat intrinsik produk susu yang sangat mudah rusak (*perishable*) dengan umur simpan rata-rata 7–21 hari untuk susu pasteurisasi dan 30–90 hari untuk produk olahan seperti keju dan yogurt, memaksa perancang jaringan untuk memasukkan dimensi kualitas temporal ke dalam keputusan lokasi fasilitas, kapasitas produksi, dan distribusi (Lead Researchers, 2023). Kerangka multi-objektif yang diusulkan dalam paper ini muncul sebagai respons terhadap kenyataan bahwa pengoptimalan tunggal berbasis biaya saja gagal merepresentasikan trade-off riil antara profitabilitas, kesegaran produk, dan dampak lingkungan.

Urgensi operasional industri susu modern dapat diukur dari tiga dimensi. Pertama, secara ekonomi, biaya logistik cold-chain mencapai 25–40% dari total biaya operasional distributor susu, sehingga keputusan desain jaringan memiliki leverage finansial yang sangat besar. Kedua, secara teknis, degradasi kualitas produk susu mengikuti model kinetika orde pertama dengan konstanta yang bergantung pada suhu, sehingga waktu tempuh dan kondisi penyimpanan menjadi variabel keputusan yang tidak bisa diabaikan. Ketiga, secara lingkungan, emisi karbon dari distribusi rantai dingin menyumbang porsi signifikan dari *carbon footprint* industri makanan, sehingga regulator dan konsumen menuntut transparansi multi-kriteria.

Paper Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management* memposisikan Dekomposisi Benders sebagai metodologi utama untuk menyelesaikan masalah Mixed-Integer Linear Programming (MILP) berskala besar yang muncul dari formulasi multi-objektif ini. Pelengkap yang kuat datang dari karya Zhang, Li, dan Ren (2024) yang memperluas aplikasi Dekomposisi Benders ke ranah reverse supply chain dengan keputusan kualitas, memberikan justifikasi teoretis bahwa dekomposisi variabel merupakan pendekatan yang robust untuk masalah jaringan dengan keputusan kualitas. Kombinasi kedua literatur ini memberikan fondasi metodologis yang solid untuk merancang jaringan rantai pasok susu yang tidak hanya efisien secara biaya tetapi juga optimal secara multi-dimensi.

Dalam konteks Indonesia sebagai salah satu konsumen produk susu terbesar di Asia Tenggara dengan pertumbuhan permintaan 8–12% per tahun, penerapan kerangka ini memiliki relevansi strategis yang tidak bisa diabaikan oleh para insinyur industri dan pengambil kebijakan rantai pasok.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi multi-objektif untuk jaringan rantai pasok susu mengikuti kerangka Mixed-Integer Programming dengan tiga fungsi tujuan yang saling berkonflik. Notasi himpunan yang digunakan adalah: $I$ = himpunan kandidat fasilitas produksi, $J$ = himpunan kandidat pusat distribusi, $K$ = himpunan produk susu, $L$ = himpunan zona permintaan. Parameter-parameter kunci meliputi:

- $f_i$ = biaya tetap pembukaan fasilitas produksi di lokasi $i$
- $g_j$ = biaya tetap pembukaan pusat distribusi di lokasi $j$
- $c_{ijk}$ = biaya transportasi per unit produk $k$ dari $i$ ke $j$
- $d_{lks}$ = permintaan produk $k$ di zona $l$ pada skenario $s$
- $\alpha_i$ = kapasitas produksi fasilitas $i$
- $\beta_j$ = kapasitas distribusi di $j$
- $\theta_{ijk}$ = tingkat degradasi kualitas produk $k$ pada rute $i \to j$
- $e_{ijk}$ = emisi CO₂ per unit pada rute $i \to j$

Variabel keputusan meliputi $y_i \in \{0,1\}$ untuk keputusan pembukaan fasilitas produksi, $z_j \in \{0,1\}$ untuk pembukaan pusat distribusi, dan $x_{ijk} \geq 0$ untuk alur produk kontinu. Fungsi tujuan multi-objektif diformulasikan sebagai:

$$\min \; Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} c_{ijk} x_{ijk}$$

$$\min \; Z_2 = \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} \theta_{ijk} x_{ijk}$$

$$\min \; Z_3 = \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} e_{ijk} x_{ijk}$$

Fungsi $Z_1$ meminimalkan total biaya (TCO), $Z_2$ meminimalkan kehilangan kualitas agregat, dan $Z_3$ meminimalkan emisi karbon. Kendala utama mencakup:

$$\sum_{j \in J} \sum_{k \in K} x_{ijk} \leq \alpha_i y_i \quad \forall i \in I$$

$$\sum_{i \in I} \sum_{k \in K} x_{ijk} \leq \beta_j z_j \quad \forall j \in J$$

$$\sum_{i \in I} \sum_{j \in J} x_{ijks} \geq d_{lks} \quad \forall l \in L, k \in K, s \in S$$

### Prinsip Dekomposisi Benders

Karena masalah MILP ini bersifat *NP-hard* dengan ribuan variabel biner dan kontinu, Lead Researchers (2023) menerapkan Dekomposisi Benders yang membagi masalah menjadi **Master Problem (MP)** yang hanya melibatkan variabel biner keputusan lokasi, dan **Subproblem (SP)** yang menentukan alur optimal given lokasi. Formulasi Master Problem iterasi ke-$t$ adalah:

$$\min \; \sum_{i} f_i y_i + \eta$$

$$\text{s.t.} \quad \eta \geq \pi^t (d - B y) \quad \forall t = 1, \ldots, T$$

dengan $\eta$ adalah variabel nilai optimal subproblem, $\pi^t$ adalah dual variabel dari SP pada iterasi $t$, dan $B$ adalah matriks teknologi. Subproblem menghasilkan cut optimality (jika feasible) atau cut feasibility (jika infeasible) yang ditambahkan ke MP pada iterasi berikutnya. Konvergensi terjadi ketika gap antara upper bound dan lower bound lebih kecil dari toleransi $\epsilon$ yang ditetapkan.

Untuk kasus multi-objektif, paper ini mengintegrasikan teknik $\varepsilon$-constraint, di mana dua dari tiga tujuan dimasukkan sebagai kendala dengan batas kanan $\varepsilon_r$:

$$Z_r(\mathbf{x}, \mathbf{y}) \leq \varepsilon_r \quad r = 2, 3$$

sehingga menghasilkan *Pareto frontier* yang komprehensif bagi pengambil keputusan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa dari kerangka ini mengikuti protokol lima tahap yang dimulai dari formulasi hingga deployment. **Tahap 1 — Karakterisasi Jaringan**: Insinyur industri memetakan node kandidat (pabrik, DC, retailer), rute, kapasitas, dan profil permintaan musiman. **Tahap 2 — Estimasi Parameter**: dilakukan dengan analisis data historis, wawancara dengan plant manager, dan benchmarking dengan standar ISO 22000 untuk食品安全. **Tahap 3 — Formulasi MILP & Implementasi Benders**: model dikodekan dalam Python dengan library Pyomo atau Gurobi, kemudian didekomposisi menggunakan callback Benders. **Tahap 4 — Validasi & Solusi Pareto**: solusi diverifikasi dengan simulasi diskret-event pada software AnyLogic atau FlexSim. **Tahap 5 — Implementasi & Monitoring**: keputusan dieksekusi dengan KPI dashboard real-time.

Arsitektur teknologi yang direkomendasikan mengikuti layered structure: layer data (ERP, WMS, IoT sensor suhu), layer optimization (solver MILP dengan Benders), layer decision support (dashboard Power BI/Tableau), dan layer execution (TMS untuk transport management). Standar industri yang relevan termasuk ISO 28000 (supply chain security), ISO 14001 (environmental management), dan GS1 Cold Chain Compliance.

Diagram alir proses rekayasa menunjukkan loop iteratif: Inisialisasi MP → Solve MP → Solve SP → Generate Cut → Add Cut to MP → Check Convergence → Stop jika $|UB - LB|/UB < \epsilon$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan jaringan rantai pasok susu dengan $I = 3$ kandidat pabrik (A, B, C), $J = 2$ kandidat DC (D1, D2), $K = 2$ produk (susu pasteurisasi P1, keju P2), dan $L = 3$ zona permintaan (R1, R2, R3). Parameter biaya tetap: $f_A = 800.000$, $f_B = 950.000$, $f_C = 720.000$ (dalam ribu rupiah), $g_{D1} = 350.000$, $g_{D2} = 400.000$. Biaya transportasi $c_{ijk}$ (Rp/unit) dan kapasitas diberikan pada tabel ringkas berikut:

| Dari\\Ke | D1 | D2 |
|----------|-----|-----|
| A (cap 120.000) | 150 (P1), 200 (P2) | 180 (P1), 230 (P2) |
| B (cap 100.000) | 200, 250 | 160, 210 |
| C (cap 90.000) | 170, 220 | 190, 240 |

Permintaan: $R1 = 70.000$ unit P1 + 20.000 unit P2, $R2 = 50.000$ + 15.000, $R3 = 40.000$ + 10.000. Total permintaan = 160.000 unit P1 + 45.000 unit P2 = 205.000 unit.

**Iterasi Benders ke-1**: MP diinisialisasi dengan $y_i, z_j$ bebas. Solusi MP awal membuka semua kandidat ($y_A=y_B=y_C=1$, $z_{D1}=z_{D2}=1$) karena tanpa cut, biaya minimum. Total biaya MP = $800 + 950 + 720 + 350 + 400 = 3.220$ ribu. SP diselesaikan dengan variabel lokasi fixed, menghasilkan alur optimal. Misalkan alur optimal memilih rute dengan biaya termurah: alokasi penuh dari A ke D1, B ke D2, sebagian dari C ke D1, dengan total biaya operasional $\sum c_{ijk} x_{ijk} = 28.500$ ribu. Upper bound $UB = 3.220 + 28.500 = 31.720$ ribu.

**Dual subproblem** $\pi^1$ digunakan untuk membentuk cut optimality: $\eta \geq 31.720 - \pi^1 (B y - B y^*)$. Cut ini ditambahkan ke MP untuk iterasi berikutnya, memaksa MP menutup fasilitas yang tidak efisien. Setelah beberapa iterasi (mis