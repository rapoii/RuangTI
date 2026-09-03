# 2000 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Produk susu — terutama susu segar, yoghurt, keju, dan krim — merupakan kategori barang dengan karakteristik *highly perishable* yang menuntut jendela distribusi sangat sempit (umumnya 24–72 jam dari pintu peternakan ke etalase ritel) karena tingkat penurunan mutu biologis yang cepat, khususnya melalui proses oksidasi lemak, proliferasi bakteri mesofilik, dan degradasi protein kasein. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), sekitar 18–25% kerugian pascapanen (*post-harvest losses*) pada rantai pasok susu di negara berkembang disebabkan oleh inefisiensi alokasi jaringan, keputusan lokasi fasilitas yang suboptimal, dan kurangnya integrasi keputusan operasional dengan keputusan strategis.

Urgensi rekayasa jaringan rantai pasok susu tidak semata-mata berakar pada efisiensi biaya, melainkan juga pada dimensi mutu dan keberlanjutan. Paper tersebut mengusulkan kerangka kerja *multi-objective* yang menyeimbangkan dua tujuan yang saling berkonflik: minimasi **Total Logistics Cost** (TLC) yang mencakup biaya tetap pembukaan fasilitas, biaya variabel produksi, biaya transportasi armada refrigerated, dan biaya persediaan — di satu sisi, dan minimasi **Freshness Loss Index** (FLI) yang merepresentasikan degradasi mutu seiring waktu dan jarak — di sisi lain. Konflik ini terjadi karena strategi untuk menurunkan biaya (misalnya dengan mengkonsolidasikan aliran ke satu fasilitas sentral) sering kali memperpanjang *lead time* dan meningkatkan FLI, yang selanjutnya menurunkan nilai jual serta margin kontribusi produk.

Lebih lanjut, jaringan rantai pasok susu bersifat multi-echelon: dari tingkat peternakan (*farm gate*), tempat pemrosesan susu (*processing plant*), pusat distribusi berpendingin (*cold distribution center*), hingga titik konsumsi ritel. Kompleksitas bertambah karena setiap produk susu memiliki karakteristik umur simpan, suhu penyimpanan optimal, dan laju penurunan mutu yang berbeda. Penulis Lead Researchers (2023) menekankan bahwa pemodelan MILP (*Mixed-Integer Linear Programming*) naif untuk jaringan ini menjadi *computationally intractable* ketika horizon perencanaan melebihi 7 periode mingguan dan jumlah kandidat fasilitas melebihi 12. Sebagai pelengkap, Zhang, Li, dan Ren (2024) dalam DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas cakupan dengan mempertimbangkan keputusan mutu dalam rantai pasok balik (*reverse supply chain*), di mana susu kadaluarsa atau produk jadi yang dikembalikan pelanggan dapat dialihkan ke lini produksi sekunder (misalnya keju matang atau susu bubuk) untuk menurunkan kerugian ekonomi dan memperkuat pilar ekonomi sirkular.

Konteks industri ini menjadi pijakan utama bagi kebutuhan akan teknik optimasi *large-scale* yang mampu memisahkan keputusan strategis (lokasi & kapasitas) dari keputusan operasional (aliran, produksi, persediaan). Di sinilah **Dekomposisi Benders** muncul sebagai metode yang paling sesuai karena struktur masalahnya secara natural *block-angular* — variabel biner lokasi di satu blok, variabel kontinu aliran di blok lain — sehingga dekomposisi primal dapat dieksploitasi secara matematis.

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis yang dibangun mengikuti kerangka MILP dua tahap dengan struktur hierarkis. Misalkan himpunan-himpunan berikut didefinisikan:

- $I = \{1,\ldots,n\}$: himpunan peternakan / *supply nodes*
- $K = \{1,\ldots,m\}$: himpunan kandidat *processing plants*
- $J = \{1,\ldots,p\}$: himpunan kandidat *distribution centers* (DC)
- $L = \{1,\ldots,q\}$: himpunan zona permintaan ritel
- $T = \{1,\ldots,\tau\}$: himpunan periode perencanaan (misal: mingguan)
- $R = \{1,\ldots,r\}$: himpunan produk susu (susu segar, yoghurt, keju, dll.)

Parameter-parameter utama meliputi: $a_i$ kapasitas pasok peternakan $i$; $b_k$ kapasitas olah plants; $c_j$ kapasitas DC; $d_{l,r,t}$ permintaan produk $r$ di zona $l$ pada periode $t$; $f_k$ biaya tetap buka plant $k$; $g_j$ biaya tetap buka DC $j$; $h^r_{ij}$ biaya transport per unit dari $i$ ke $j$; $p^r_{kl}$ biaya transport plant-DC; $w^r_{jl}$ biaya transport DC-ritel; $\alpha^r$ biaya produksi per unit; $\beta^r$ biaya persediaan per unit-periode; $\delta^r$ biaya kadaluarsa per unit terbuang; $\lambda^r_{i,t}$ indeks kesegaran produk $r$ dari $i$ pada periode $t$ (berkisar 0–1, dengan 1 = sangat segar); $M$ bilangan *big-M*.

Variabel keputusan: $y_k \in \{0,1\}$ apakah plant $k$ dibuka; $z_j \in \{0,1\}$ apakah DC $j$ dibuka; $x^r_{i,k,t} \geq 0$ aliran produk $r$ dari peternakan $i$ ke plant $k$ periode $t$; $u^r_{k,j,t} \geq 0$ aliran plant $k$ ke DC $j$; $v^r_{j,l,t} \geq 0$ aliran DC $j$ ke ritel $l$; $s^r_{k,t} \geq 0$ tingkat persediaan di plant $k$.

**Fungsi tujuan pertama (minimasi biaya total):**

$$Z_1 = \min \sum_{k \in K} f_k y_k + \sum_{j \in J} g_j z_j + \sum_{r,i,k,t} \alpha^r x^r_{i,k,t} + \sum_{r,k,j,t} \beta^r u^r_{k,j,t} + \sum_{r,j,l,t} w^r v^r_{j,l,t} + \sum_{r,k,t} h^r s^r_{k,t} + \sum_{r,i,j,l,t} \delta^r (d_{l,r,t} - \sum_j v^r_{j,l,t})$$

**Fungsi tujuan kedua (minimasi kehilangan kesegaran):**

$$Z_2 = \min \sum_{r,i,k,j,l,t} \left(1 - \lambda^r_{i,t}\right) x^r_{i,k,t} + \sum_{r,k,j,l,t} \left(1 - \lambda^r_{k,t}\right) u^r_{k,j,t} + \sum_{r,j,l,t} \left(1 - \lambda^r_{j,t}\right) v^r_{j,l,t}$$

**Kendala utama:**

$$\sum_{k \in K} x^r_{i,k,t} \leq a_i \quad \forall i,r,t \quad \text{(kapasitas peternakan)}$$

$$\sum_{i \in I} x^r_{i,k,t} - \sum_{j \in J} u^r_{k,j,t} - s^r_{k,t} = 0 \quad \forall k,r,t \quad \text{(neraca massa plant)}$$

$$\sum_{k \in K} u^r_{k,j,t} = \sum_{l \in L} v^r_{j,l,t} \quad \forall j,r,t \quad \text{(neraca massa DC)}$$

$$\sum_{j \in J} v^r_{j,l,t} \geq d_{l,r,t} \quad \forall l,r,t \quad \text{(pemenuhan permintaan)}$$

$$\sum_{r,i} x^r_{i,k,t} \leq b_k y_k \quad \forall k,t \quad \text{(aktivasi kapasitas plant)}$$

$$\sum_{r,l} v^r_{j,l,t} \leq c_j z_j \quad \forall j,t \quad \text{(aktivasi kapasitas DC)}$$

Karena $Z_1$ dan $Z_2$ berkonflik, paper Lead Researchers (2023) mengkonstruksi **frontier Pareto** melalui metode $\varepsilon$-constraint, dengan menyatakan $Z_2 \leq \varepsilon_p$ sebagai kendala dan memvariasikan nilai $\varepsilon_p \in [\varepsilon^{min}, \varepsilon^{max}]$ untuk mendapatkan titik-titik Pareto-optimal.

**Formulasi Dekomposisi Benders:** Masalah master (MP) hanya memuat variabel biner lokasi:

$$MP: \quad \min_{y,z} \sum_k f_k y_k + \sum_j g_j z_j + \theta$$

$$\text{s.t.} \quad \sum_k f_k y_k + \sum_j g_j z_j + \theta \geq \phi(y^*,z^*) \quad \text{(Benders optimality cuts)}$$

$$\sum_k f_k y_k + \sum_j g_j z_j + \theta \geq \psi(y^*,z^*) \quad \text{(Benders feasibility cuts)}$$

$$y_k, z_j \in \{0,1\}, \quad \theta \in \mathbb{R}$$

Subproblem (SP), untuk setiap kandidat $(y^*,z^*)$ yang dihasilkan MP, merupakan masalah transportasi-operasional dengan variabel kontinu $x, u, v, s$:

$$SP(y^*,z^*): \quad \min \sum_{r,i,k,t} \alpha^r x^r_{i,k,t} + \sum_{r,k,j,t} \beta^r u^r_{k,j,t} + \sum_{r,j,l,t} w^r v^r_{j,l,t} + \sum_{r,k,t} h^r s^r_{k,t}$$

Dual SP menghasilkan **multiplier** $\pi$ yang dipakai untuk membentuk *optimality cut*: $\theta \geq \pi^T (b - By - Dz)$. Iterasi berhenti ketika *lower bound* MP konvergen dengan *upper bound* dari solusi layak SP dalam toleransi $\epsilon = 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi ini di industri mengikuti **SOP tujuh tahap** yang merupakan konsolidasi prosedur dari Lead Researchers (2023) dan ekstensi rantai pasok balik dari Zhang et al. (2024):

**Tahap 1 — Akuisisi Data Hierarkis.** Pengumpulan data meliputi: kapasitas ternak & jarak geografis dari koperasi peternakan (level I); kapasitas olah, utilitas pendingin, dan lini pengemasan di tiap plant (level K); throughput dan suhu DC; permintaan historis ritel selama 12–24 bulan; serta profil suhu, umur simpan, dan laju penurunan mutu tiap SKU produk.

**Tahap 2 — Estimasi Parameter Mutu.** Penentuan $\lambda^r_{i,t}$ mengikuti model Arrhenius: $\lambda = e^{-k_r T}$ dengan $k_r$ konstanta degradasi produk dan $T$ suhu penyimpanan. Untuk susu pasteurisasi, $k \approx 0{,}04/\text{jam}$ pada suhu 4°C, sehingga $\lambda$ turun menjadi $\sim 0{,}37$ setelah 24 jam.

**Tahap 3 — Konstruksi Model Master.** Bangun MILP lokasi dengan variabel biner $y_k, z_j$, kendala kapasitas aktivasi, dan kendala logis (mis. plant $k$ hanya dapat diaktifkan jika minimal satu DC $j$ yang terhubung diaktifkan). Validasi dengan solver CBC atau Gurobi untuk memastikan kekonsistenan.

**Tahap 4 — Konstruksi Model Subproblem.** Formulasikan masalah transportasi-operasional kontinu, hasilkan *dual* secara simbolik. Subproblem diselesaikan sebagai LP (relatif murah) untuk setiap iterasi Benders.

**Tahap 5 — Eksekusi Algoritma Benders.** Diagram alir algorit