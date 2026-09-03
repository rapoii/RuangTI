# 1792 — Desain Jaringan Rantai Pasok Multi-Objektif Produk Susu dengan Kerangka Benders Decomposition untuk Efisiensi Biaya, Kesegaran Produk, dan Keberlanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, No. 5, hal. 99–112. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. SSRN Electronic Journal. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibanding rantai pasok barang konsumsi lainnya. Produk susu merupakan kategori *perishable product* dengan *shelf life* yang sangat pendek (3–21 hari tergantung jenis proses: pasteurisasi, UHT, atau fermentasi), jejak karbon yang signifikan akibat *cold chain logistics* yang intensif energi, serta tingkat variabilitas permintaan musiman yang tinggi (Lead Researchers, 2023). Menurut data FAO yang dirujuk dalam paper Lead Researchers (2023) dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), konsumsi produk susu global diproyeksikan tumbuh pada CAGR 2,3% hingga 2030, namun di sisi lain, sekitar 15–20% produk susu di negara berkembang terbuang sia-sia karena inefisiensi jaringan distribusi. Permasalahan ini menjadi semakin kompleks ketika dimasukkan dimensi keberlanjutan lingkungan, seperti emisi gas rumah kaca (GRK) dari armada refrigerated truck dan fasilitas pendingin di pusat distribusi.

Urgensi penelitian Lead Researchers (2023) muncul dari kenyataan bahwa mayoritas model optimasi jaringan rantai pasok susu konvensional hanya bersifat *single-objective* (misalnya minimasi total biaya) dan menggunakan pendekatan deterministik yang mengabaikan ketidakpastian permintaan, tingkat kerusakan, serta kualitas produk. Padahal, manajer rantai pasok susu harus secara simultan menyeimbangkan tiga tujuan yang sering berkonflik: (1) **minimasi total biaya logistik** yang mencakup biaya fasilitas, transportasi, dan inventaris; (2) **maksimasi kesegaran produk** yang diterima konsumen akhir (product freshness); dan (3) **minimasi emisi karbon** dari operasi cold chain. Trade-off antara ketiga tujuan ini menjadi landasan utama paper Lead Researchers (2023) untuk mengusulkan kerangka multi-objektif.

Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperkuat argumentasi ini dengan menunjukkan bahwa pada konteks *reverse supply chain* produk susu (pengembalian produk kedaluwarsa,回收 daur ulang kemasan, dan produk yang tidak memenuhi standar kualitas), keputusan kualitas (*quality decisions*) menjadi variabel keputusan tambahan yang krusial. Integrasi antara forward dan reverse supply chain untuk produk susu memerlukan arsitektur optimasi yang scalable, yang melatarbelakangi penerapan Benders Decomposition sebagai metodologi utama dalam kedua paper. Benders Decomposition, yang diperkenalkan Jacques F. Benders (1962) dan telah diaplikasikan luas dalam pemrograman mixed-integer linear programming (MILP) skala besar, memungkinkan dekomposisi masalah menjadi *master problem* (keputusan fasilitas dan alokasi strategis) dan *subproblem* (keputusan operasional flowship dan inventaris) sehingga waktu komputasi dapat ditekan secara signifikan.

Konteks industri yang melatarbelakangi kedua paper ini sangat relevan dengan realitas Technical Industri Indonesia, di mana industri pengolahan susu nasional (seperti PT Frisian Flag Indonesia, PT Nestlé Indonesia, dan PT Ultrajaya) menghadapi tantangan geografis berupa *archipelago supply chain* yang kompleks, dengan lebih dari 17.000 pulau dan waktu transit yang bervariasi. Oleh karena itu, kontribusi ilmiah dari kedua paper ini tidak hanya bersifat teoretis, tetapi juga memiliki implikasi praktis yang signifikan bagi rekayasa sistem rantai pasok susu di kawasan tropis dengan infrastruktur cold chain yang belum merata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur Model Multi-Objektif

Paper Lead Researchers (2023) mengusulkan model Mixed-Integer Linear Programming (MILP) multi-objektif dengan tiga fungsi tujuan yang selanjutnya diolah menggunakan pendekatan *epsilon-constraint method* untuk menghasilkan Pareto front. Struktur jaringan yang dimodelkan mencakup empat tingkatan (*echelons*): (i) *supplier farms* (peternak sapi perah), (ii) *processing plants* (pabrik pengolahan), (iii) *distribution centers* dengan fasilitas *cold storage*, dan (iv) *retail zones* sebagai zona permintaan akhir.

Notasi himpunan dan parameter yang digunakan adalah sebagai berikut:

$$\mathcal{I} = \{1, 2, \ldots, I\} \quad \text{(himpunan peternak/peternakan)}$$
$$\mathcal{J} = \{1, 2, \ldots, J\} \quad \text{(himpunan pabrik pengolahan)}$$
$$\mathcal{K} = \{1, 2, \ldots, K\} \quad \text{(himpunan pusat distribusi)}$$
$$\mathcal{L} = \{1, 2, \ldots, L\} \quad \text{(himpunan zona retail/pelanggan)}$$
$$\mathcal{T} = \{1, 2, \ldots, T\} \quad \text{(himpunan periode waktu diskret)}$$

Parameter-parameter utama yang digunakan:

- $d_{l,t}$ = permintaan produk susu di zona retail $l$ pada periode $t$ (liter)
- $c_{ij}^{T}$ = biaya transportasi per unit dari peternakan $i$ ke pabrik $j$
- $c_{jk}^{T}$ = biaya transportasi dari pabrik $j$ ke pusat distribusi $k$
- $c_{kl}^{T}$ = biaya transportasi dari pusat distribusi $k$ ke retail $l$
- $f_j$ = biaya tetap pembukaan/operasional pabrik $j$
- $h_k$ = biaya penanganan cold storage di pusat distribusi $k$
- $\alpha_j$ = kapasitas produksi pabrik $j$ (liter/hari)
- $\beta_k$ = kapasitas cold storage pusat distribusi $k$ (liter)
- $e_{ij}^{CO_2}$ = emisi CO$_2$ per liter dari segmen transportasi $(i,j)$
- $\theta_{lt}$ = parameter degradasi kesegaran produk (fungsi waktu transit dan suhu)
- $\mu$ = batas minimum kesegaran yang dapat diterima konsumen

### 2.2. Variabel Keputusan

$$y_j \in \{0,1\} \quad \forall j \in \mathcal{J} \quad \text{(1 jika pabrik } j \text{ dibuka, 0 jika tidak)}$$
$$z_k \in \{0,1\} \quad \forall k \in \mathcal{K} \quad \text{(1 jika DC } k \text{ diaktifkan, 0 jika tidak)}$$
$$x_{ij} \geq 0 \quad \text{(aliran susu dari peternakan } i \text{ ke pabrik } j \text{)}$$
$$x_{jk} \geq 0 \quad \text{(aliran produk dari pabrik } j \text{ ke DC } k \text{)}$$
$$x_{kl} \geq 0 \quad \text{(aliran produk dari DC } k \text{ ke retail } l \text{)}$$
$$w_{lt} \in [0,1] \quad \text{(indeks kesegaran produk sampai di retail } l \text{ pada waktu } t \text{)}$$

### 2.3. Fungsi Tujuan Multi-Objektif

**Objektif 1: Minimasi Total Biaya Rantai Pasok**

$$\min Z_1 = \sum_{j \in \mathcal{J}} f_j y_j + \sum_{k \in \mathcal{K}} h_k z_k + \sum_{(i,j)} c_{ij}^{T} x_{ij} + \sum_{(j,k)} c_{jk}^{T} x_{jk} + \sum_{(k,l)} c_{kl}^{T} x_{kl} + \sum_{k,t} c^{hold}_{k} I_{kt}$$

di mana $I_{kt}$ adalah level inventaris di DC $k$ pada periode $t$, dengan biaya *holding cost* $c^{hold}_{k}$.

**Objektif 2: Maksimasi Kesegaran Produk**

$$\max Z_2 = \sum_{l \in \mathcal{L}} \sum_{t \in \mathcal{T}} \lambda_{lt} \cdot w_{lt}$$

di mana $\lambda_{lt}$ adalah bobot kepentingan untuk retail $l$ pada waktu $t$. Indeks kesegaran $w_{lt}$ dimodelkan sebagai:

$$w_{lt} = 1 - \sum_{(k,l)} \frac{\tau_{kl}^{trans}}{T^{max}_{shelf}} \cdot \frac{x_{kl}}{d_{lt}}$$

dengan $\tau_{kl}^{trans}$ adalah waktu transportasi dari DC $k$ ke retail $l$, dan $T^{max}_{shelf}$ adalah *shelf life* maksimum produk.

**Objektif 3: Minimasi Emisi Karbon**

$$\min Z_3 = \sum_{(i,j)} e_{ij}^{CO_2} x_{ij} + \sum_{(j,k)} e_{jk}^{CO_2} x_{jk} + \sum_{(k,l)} e_{kl}^{CO_2} x_{kl} + \sum_{j \in \mathcal{J}} E_j^{proc} y_j + \sum_{k \in \mathcal{K}} E_k^{cold} z_k$$

di mana $E_j^{proc}$ adalah emisi dari operasional pabrik $j$, dan $E_k^{cold}$ adalah emisi dari pendingin di DC $k$.

### 2.4. Kendala (Constraints)

**Kendala Kapasitas Pabrik:**

$$\sum_{i \in \mathcal{I}} x_{ij} \leq \alpha_j y_j \quad \forall j \in \mathcal{J}$$

**Kendala Kapasitas Cold Storage:**

$$\sum_{j \in \mathcal{J}} x_{jk} \leq \beta_k z_k \quad \forall k \in \mathcal{K}$$

**Kendala Keseimbangan Aliran (Flow Balance):**

$$\sum_{i \in \mathcal{I}} x_{ij} = \sum_{k \in \mathcal{K}} x_{jk} \quad \forall j \in \mathcal{J}$$

$$\sum_{j \in \mathcal{J}} x_{jk} = \sum_{l \in \mathcal{L}} x_{kl} + I_{k,t} - I_{k,t-1} \quad \forall k \in \mathcal{K}, t \in \mathcal{T}$$

**Kendala Pemenuhan Permintaan:**

$$\sum_{k \in \mathcal{K}} x_{kl} = d_{lt} \quad \forall l \in \mathcal{L}, t \in \mathcal{T}$$

**Kendala Kesegaran Minimum:**

$$w_{lt} \geq \mu \quad \forall l \in \mathcal{L}, t \in \mathcal{T}$$

### 2.5. Benders Decomposition

Untuk masalah skala besar (misalnya $|I|+|J|+|K|+|L| > 200$), Lead Researchers (2023) menerapkan Benders Decomposition dengan dekomposisi sebagai berikut:

**Master Problem (MP) — Keputusan Strategis:**

$$MP: \quad \min_{y,z} \sum_{j} f_j y_j + \sum_{k} h_k z_k + \eta$$

$$\text{s.t.} \quad \eta \geq \phi(y, z) \quad \forall (y,z) \in \text{feasible cuts}$$

di mana $\eta$ adalah variabel yang merepresentasikan estimasi biaya operasional minimum dari MP. Master problem hanya berisi variabel biner $y_j, z_k$ dan variabel kontinu $\eta$.

**Subproblem (SP) — Keputusan Operasional:**

Untuk setiap kombinasi tetap $(\bar{y}, \bar{z})$ dari MP, subproblem dirumuskan sebagai:

$$SP: \quad \phi(\bar{y}, \bar{z}) = \min_{x} \sum_{(i,j)} c_{ij}^T x_{ij} + \sum_{(j,k)} c_{jk}^T x_{jk} + \sum_{(k,l)} c_{kl}^T x_{kl}$$

subject to kendala kapasitas, flow balance, dan permintaan, dengan batasan tambahan:

$$\sum_i x_{ij} \leq \alpha_j \bar{y}_j, \quad \sum_j x_{jk} \leq \beta_k \bar{z}_k$$

Dual dari subproblem, dengan variabel dual $\pi, \rho, \sigma, \omega$, menghasilkan **optimality cut** yang ditambahkan ke MP:

$$\eta \geq \text{constant} + \sum_j \pi_j (\alpha_j \bar{y}_j) + \sum_k \rho_k (\beta_k \bar{z}_k)$$

Jika subproblem infeasible, maka ditambahkan **feasibility cut** dengan variabel dual $\upsilon \geq 0$:

$$0 \geq \text{constant} + \sum_j \upsilon_j \alpha_j \bar{y}_j + \sum_k \upsilon_k \beta_k \bar{z}_k$$

Algoritma iteratif Benders berhenti ketika $\eta \geq \phi$ dalam toleransi $\epsilon$ yang ditetapkan (umumnya $\epsilon = 10^{-4}$).

Zhang, Li, dan Ren (2024) memperluas kerangka ini untuk reverse supply chain dengan menambahkan keputusan tingkat kualitas $q_m \in \{0,1,\ldots, Q\}$ untuk setiap produk yang dikembalikan, sehingga subproblem menjadi lebih kompleks tetapi tetap dapat didekomposisi melalui generalized Benders.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka multi-objektif Benders Decomposition pada jaringan rantai pasok susu di industri memerlukan SOP yang sistematis. Berdasarkan Lead Researchers (2023), tahapan prosedur adalah sebagai berikut:

### 3.1. Diagram Alir Proses Rekay.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
