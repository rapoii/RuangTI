# 2245 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) Baterai Lithium Bekas: Model Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Closed-Loop Supply Chain* (CLSC) dengan Pemanfaatan Bertingkat dan Remanufaktur Baterai Daya Bekas
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global — yang diproyeksikan menembus 45 juta unit secara kumulatif sebelum akhir dekade ini — telah menimbulkan *bottleneck* lingkungan yang sangat strategis bagi industri manufaktur baterai lithium-ion (LIB): akumulasi baterai *retired power battery* (RPB) yang berusia pakai 5–8 tahun dengan *state-of-health* (SOH) residu sebesar 70–80%. Permasalahan ini bukan sekadar tantangan lingkungan, melainkan menjadi variabel keputusan rekayasa industri yang sangat menentukan keberlanjutan rantai pasok manufaktur baterai (JIANG & TANG, 2025).

Secara industri, baterai RPB yang sudah tidak layak untuk aplikasi otomotif masih memiliki kapasitas energi yang substansial untuk aplikasi *second-life*, seperti penyimpanan energi stasioner (*stationary energy storage system*/SESS), lampu penerangan jalan tenaga surya, dan *backup power* telekomunikasi. Inilah yang disebut *echelon utilization* — strategi pemanfaatan kaskade yang menurunkan degradasi fungsional baterai dari sektor otomotif ke sektor statis ber-densitas energi rendah. Akan tetapi, keputusan rantai pasok untuk memilih antara *echelon utilization* (EU) atau langsung *recycling remanufacturing* (RR) — di mana material katoda/anoda diekstraksi melalui proses hidrometalurgi atau pirometalurgi untuk dijadikan sel baru — merupakan keputusan multi-kriteria yang kompleks (JIANG & TANG, 2025).

Urgensi strategis muncul dari tiga gap sekaligus: (1) **gap ekonomi** — margin keuntungan antara harga jual baterai baru dan biaya回收 ulang (recycling) sangat tipis sehingga diperlukan subsidi pemerintah atau koordinasi *value chain* yang optimal; (2) **gap informasi** — asymmetric information antara manufaktur (*leader* Stackelberg), retailer, dan recycler mengenai kapasitas SOH baterai bekas; dan (3) **gap ketidakpastian** — permintaan pasar second-life, harga material kritis seperti litium dan kobalt, serta yield remanufaktur bersifat stokastik (SHIN, KIM, & JEONG, 2024). Permasalahan ini menjadi semakin relevan di tengah implementasi *Carbon Border Adjustment Mechanism* (CBAM) Uni Eropa dan standar ISO 14001/14064 yang menjadi prasyarat ekspor manufaktur.

JIANG & TANG (2025) memposisikan penelitian mereka sebagai kontribusi penting dengan mengusulkan model CLSC empat-tingkat (*four-tier CLSC*) yang mengintegrasikan keputusan harga *wholesale*, *retail*, *echelon*, dan *recycling* dalam satu kerangka permainan Stackelberg. Sementara itu, SHIN, KIM, & JEONG (2024) melengkapi kerangka tersebut melalui formulasi *robust optimization* yang secara eksplisit mengelola ketidakpastian melalui *return management system* (RMS) dengan himpunan ketidakpastian polihedral. Kedua paper ini secara sinergis membentuk landasan analitis yang digunakan modul ini untuk menganalisis keputusan *closed-loop* pada industri baterai.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Empat-Tingkat

Model JIANG & TANG (2025) membangun jaringan CLSC dengan empat entitas keputusan: *Battery Manufacturer* (M) sebagai pemimpin Stackelberg, *Retailer* (R) sebagai pengikut tingkat pertama, *Echelon User* (E) sebagai pengikut tingkat kedua, dan *Recycler* (T) sebagai pengikut tingkat ketiga. Baterai RPB mengalir dalam loop balik dari konsumen ke Recycler, kemudian terdistribusi baik ke Echelon User (jalur EU) maupun kembali ke Manufacturer sebagai material baku (jalur RR).

### 2.2 Fungsi Permintaan dan Parameter Model

Fungsi permintaan pasar baterai baru dimodelkan sebagai fungsi linear terhadap harga retail dan insentif subsidi:

$$D_R = a - b p_R + \theta s \quad \text{(1)}$$

di mana $a > 0$ adalah intercept permintaan, $b > 0$ adalah elastisitas harga, $p_R$ adalah harga retail, $s$ adalah subsidi pemerintah per unit, dan $\theta > 0$ adalah sensitivitas permintaan terhadap subsidi. Permintaan pasar echelon dimodelkan sebagai:

$$D_E = \alpha - \beta p_E \quad \text{(2)}$$

dengan $\alpha, \beta > 0$ dan $p_E$ sebagai harga jual baterai second-life ke Echelon User. Volume RPB yang berhasil dikumpulkan kembali mengikuti fungsi回收:

$$D_T = k \cdot D_R + \varepsilon \quad \text{(3)}$$

dengan $k \in (0,1]$ sebagai laju回收 (*return rate*) dan $\varepsilon$ sebagai *stochastic noise* yang merepresentasikan kegagalan logistik balik.

### 2.3 Fungsi Objektif (Profit Masing-Masing Pemain)

Profit Manufacturer mencakup pendapatan wholesale, pendapatan echelon, dan pendapatan回收 material:

$$\pi_M = (w - c_M) D_R + (p_E - c_E) D_E + (p_r - c_{rm}) D_T - c_{inv} D_T \quad \text{(4)}$$

di mana $w$ adalah harga *wholesale*, $c_M$ biaya produksi sel baru, $c_E$ biaya re-kondisioning untuk echelon, $p_r$ harga jual回收 material, $c_{rm}$ biaya remanufaktur, dan $c_{inv}$ biaya investasi回收. Profit Retailer adalah:

$$\pi_R = (p_R - w) D_R - c_{log} D_R \quad \text{(5)}$$

dengan $c_{log}$ sebagai biaya logistik distribusi maju. Profit Recycler mencakup penerimaan harga beli baterai bekas $p_b$ dari konsumen dan biaya обработки:

$$\pi_T = (p_r - c_{rc}) D_T + (p_b - c_{rc}) \cdot \gamma D_T \quad \text{(6)}$$

dengan $c_{rc}$ sebagai biaya обработки回收 dan $\gamma$ adalah fraksi baterai RPB yang lolos quality-check untuk jalur RR. Profit Echelon User bersifat eksogen dan diasumsikan sebagai *quasi-linear utility*.

### 2.4 Formulasi Robust Counterpart (SHIN, KIM, & JEONG, 2024)

Untuk mengelola ketidakpastian parameter permintaan, SHIN, KIM, & JEONG (2024) mengusulkan *robust counterpart* dengan himpunan ketidakpastian polihedral:

$$\mathcal{U} = \left\{ \mathbf{u} : \mathbf{G} \mathbf{u} \leq \mathbf{h}, \; \| \mathbf{u} - \mathbf{u}_0 \|_\infty \leq \rho \right\} \quad \text{(7)}$$

di mana $\mathbf{u} = (a, b, k)^\top$ adalah vektor parameter tidak pasti, $\mathbf{u}_0$ adalah *nominal value*, dan $\rho$ adalah *budget of uncertainty*. Fungsi tujuan robust-nya menjadi:

$$\max_{\mathbf{x} \in X} \min_{\mathbf{u} \in \mathcal{U}} \Pi_{CLSC}(\mathbf{x}, \mathbf{u}) \quad \text{(8)}$$

dengan $\mathbf{x} = (w, p_R, p_E, p_r)^\top$ sebagai vektor keputusan. Solusi *worst-case optimal* diperoleh melalui reformulasi dual:

$$\max_{\mathbf{x}, \boldsymbol{\lambda} \geq 0} \; \Pi_0(\mathbf{x}) - \boldsymbol{\lambda}^\top (\mathbf{G} \mathbf{u}_0 - \mathbf{h}) - \rho \| \boldsymbol{\lambda} \|_1 \quad \text{(9)}$$

### 2.5 Kondisi Keseimbangan Stackelberg

Dengan *backward induction*, Manufacturer mengumumkan $(w, p_E, p_r)$ terlebih dahulu, lalu Retailer merespons dengan $p_R^*$ melalui kondisi KKT:

$$\frac{\partial \pi_R}{\partial p_R} = -b(p_R - w) + (a - b p_R + \theta s) = 0 \quad \text{(10)}$$

Solusi reaksi terbaik Retailer:

$$p_R^* = \frac{a + \theta s + b w}{2 b} \quad \text{(11)}$$

Substitusi ke fungsi Manufacturer menghasilkan masalah *upper-level* yang diselesaikan secara analitik atau numerik melalui *interior-point method*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model CLSC baterai RPB mengikuti SOP ISO 14001:2015 dengan integrasi modul keputusan ekonomi dan ekologis. Diagram alir proses rekayasa tersaji sebagai berikut:

**Tahap 1 — Pemodelan Jaringan (Network Design):**
1. Identifikasi entitas CLSC: Manufacturer, Retailer, Echelon User, Recycler.
2. Estimasi parameter empiris: $a, b, \alpha, \beta, k, \gamma$ melalui *time-series regression* terhadap data historis 3–5 tahun.
3. Kalibrasi elastisitas harga menggunakan *conjoint analysis* terhadap sampel konsumen ≥ 1000 responden.

**Tahap 2 — Formulasi Optimasi:**
1. Konstruksi fungsi tujuan $\pi_M, \pi_R, \pi_T$ sesuai Persamaan (4)–(6).
2. Definisi himpunan ketidakpastian $\mathcal{U}$ mengikuti Persamaan (7) jika mengikuti pendekatan SHIN, KIM, & JEONG (2024).
3. Formulasi masalah *bi-level* Stackelberg dan konversi ke *single-level* melalui substitusi reaksi terbaik (Persamaan 11).

**Tahap 3 — Penyelesaian Numerik:**
1. Solver *commercial*: Gurobi 11.0, CPLEX 22.1, atau *open-source* Pyomo + IPOPT.
2. Toleransi optimalitas: *gap* relatif $\leq 10^{-6}$.
3. Validasi dengan *Monte Carlo simulation* (≥ 10.000 iterasi) untuk menguji robustisitas solusi.

**Tahap 4 — Implementasi Sistem RMS (Return Management System):**
1. *Digital platform* berbasis blockchain untuk traceability baterai (per ISO/IEC 21434 untuk keamanan siber).
2. *Smart contract* untuk otomasi transaksi回収.
3. Integrasi dengan Battery Management System (BMS) untuk membaca SOH baterai bekas secara real-time melalui *on-board diagnostics* (OBD-II).

**Tahap 5 — Audit & Continuous Improvement:**
1.