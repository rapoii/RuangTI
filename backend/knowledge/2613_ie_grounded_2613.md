# 2613 — Strategi Rantai Pasok Tertutup Loop untuk Pemanfaatan Bertingkat dan Daur Ulang Baterai Daya Bekas Paska-Konsumsi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-loop Supply Chain untuk retired power battery dengan strategi echelon utilization, recycling, dan remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (Global EV outlook IEA 2024 memperkirakan lebih dari 250 juta unit pada 2030) telah menciptakan paradoks lingkungan dan ekonomi yang krusial: di satu sisi, elektrifikasi transportasi merupakan pilar dekarbonisasi, namun di sisi lain, berakhirnya siklus hidup baterai lithium-ion (umumnya 8–10 tahun atau setelah State of Health/SoH < 80%) memunculkan limpasan limbah B3 (Bahan Berbahaya dan Beracun) dengan kandungan logam kritis bernilai tinggi seperti litium, nikel, kobalt, dan mangan. JIANG Lin & TANG Lidan (2025) dalam naskah yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068) secara eksplisit menegaskan bahwa strategi *closed-loop supply chain* (CLSC) untuk baterai listrik bekas merupakan salah satu masalah optimasi paling menantang dalam bidang rekayasa sistem industri abad ke-21, karena setiap unit baterai memiliki beberapa *recovery pathway* yang saling bersaing: *echelon utilization* (pemanfaatan bertingkat, misal pada *stationary energy storage*), *remanufacturing* (pabrikasi ulang modul), dan *recycling* (daur ulang material ke *black mass*). 

Urgensi operasional makin diperkuat oleh kerangka regulasi seperti *EU Battery Regulation 2023/1542* yang mewajibkan tingkat daur ulang minimum 65% untuk baterai lithium-ion pada 2025 dan 80% pada 2030, serta *Extended Producer Responsibility* (EPR) yang diimplementasikan di Uni Eropa, Korea Selatan, dan Tiongkok. Shin, Kim, & Jeong (2024) dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) melengkapi bahwa kehadiran ketidakpastian permintaan, *return rate*, dan kualitas baterai kembali (State of Health yang stokastik) menuntut formulasi *robust optimization* agar strategi CLSC tetap layak secara finansial dalam berbagai skenario makroekonomi. Gabungan kedua perspektif ini menjadi fondasi mengapa Modul 2613 harus memodelkan keputusan jaringan tidak sekadar sebagai *cost minimization*, tetapi sebagai *multi-objective bilevel game* antara regulator/OEM (*leader*) dan operator daur ulang (*follower*) yang beroperasi di bawah kendala lingkungan. Studi ini juga relevan bagi Indonesia, di mana Perpres No. 55 Tahun 2019 tentang Percepatan Kendaraan Bermotor Listik (KBL) dan roadmap *End-of-Life Vehicle* oleh KLHK tengah disusun, menciptakan peluang positioning Indonesia sebagai hub regional reverse-logistics baterai ASEAN.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Baterai

Jaringan yang dimodelkan JIANG & TANG (2025) mengikuti arsitektur lima-echelon yang dapat direpresentasikan sebagai grafik berarah $G = (N, A)$ dengan himpunan node:

$$N = \{M,\ D,\ C,\ T,\ E,\ R\}$$

di mana $M$ = *manufacturer* (OEM baterai baru), $D$ = distributor, $C$ = konsumen/operator armada, $T$ = *collection center* (pusat pengumpulan baterai retired), $E$ = fasilitas *echelon* (mis. *Battery Energy Storage System*/BESS), dan $R$ = fasilitas *recycling* (pirometalurgi/hidrometalurgi → *black mass* → precursor). Setiap busur $(i,j) \in A$ memiliki kapasitas $u_{ij}$ dan biaya transportasi $c^{tr}_{ij}$ per unit baterai. Tabel keputusan utama adalah alokasi $x_{ij}$ (aliran baterai pada busur $(i,j)$) dan variabel biner $y_k \in \{0,1\}$ untuk keputusan *facility location* fasilitas $T$, $E$, $R$.

### 2.2 Parameter dan Fungsi Biaya

Parameter-paramater kunci mengikuti konvensi Shin, Kim, & Jeong (2024) yang mengintegrasikan *return management system*:

- $p^r_E$ : harga jual produk *echelon* (mis. listrik dari BESS), satuan USD/MWh.
- $p^r_R$ : harga jual *black mass* dan logam kritis (Ni, Co, Li), satuan USD/ton.
- $c^d_k$ : biaya *disassembly* & diagnostik SoH pada fasilitas $k \in \{T,E,R\}$.
- $c^p_k$ : biaya *processing* (remanufacturing/echelon grading/recycling).
- $c^{inv}_s$ : biaya inventory node $s$ per unit per periode.
- $\tilde{d}$ : permintaan EV baru (stokastik).
- $\tilde{\rho}$ : *return rate* baterai retired dari konsumen (stokastik, $\tilde{\rho} \sim U[\rho^L, \rho^U]$).

### 2.3 Formulasi Program Linier Integer Campuran (MILP) Deterministic

Profit total sistem CLSC dimaksimumkan:

$$\max\ \Pi = \sum_{(i,j) \in A} (r_{ij} - c^{tr}_{ij}) x_{ij} - \sum_{k \in \{T,E,R\}} (f_k y_k + c^d_k z_k) - \sum_{s \in N} c^{inv}_s I_s$$

dengan kendala utama:

**Kendala keseimbangan aliran di setiap node $i \in N$:**

$$\sum_{j: (j,i) \in A} x_{ji} + q_i = \sum_{j: (i,j) \in A} x_{ij} + I_i$$

**Kendala kapasitas fasilitas:**

$$0 \le x_{ij} \le u_{ij} y_k,\quad \forall (i,j) \in A$$

**Kendala permintaan EV baru:**

$$\sum_{j:(D,j)} x_{Dj} \ge d_{new}$$

**Kendala alokasi retired battery ke recovery pathway:**

$$x_{TE} + x_{TR} = \tilde{\rho} \cdot x_{CD}, \quad x_{TE}, x_{TR} \ge 0$$

**Kendala konservasi material di node recycling (input–output):**

$$\eta_R \sum_{(T,R)} x_{TR} = \sum_{(R,M)} x_{RM}$$

di mana $\eta_R \in (0,1)$ adalah *recovery rate* logam.

### 2.4 Formulasi Robust Counterpart (Shin, Kim, Jeong, 2024)

Untuk mengakomodasi ketidakpastian $\tilde{\rho}$ dan $\tilde{d}$, perspektif *robust optimization* dari Shin et al. (2024) menggunakan *budgeted uncertainty set*:

$$\mathcal{U} = \left\{ (\tilde{\rho}, \tilde{d})\ :\ \tilde{\rho} \in [\rho^L, \rho^U],\ \tilde{d} \in [d^L, d^U],\ \tfrac{\tilde{\rho} - \rho^L}{\rho^U - \rho^L} + \tfrac{\tilde{d} - d^L}{d^U - d^L} \le \Gamma \right\}$$

Parameter $\Gamma \in [0,2]$ adalah *budget of uncertainty* yang mencerminkan tingkat konservatisme pengambil keputusan. *Robust counterpart* dari kendala alokasi retired battery menjadi:

$$x_{TE} + x_{TR} \ge \rho^L \cdot x_{CD} + (\rho^U - \rho^L) z_\rho,\quad z_\rho \le x_{CD}$$

dengan variabel auxiliary $z_\rho \ge 0$. Pendekatan ini secara matematis menjamin *feasibility* untuk semua skenario dalam $\mathcal{U}$.

### 2.5 Model Bilevel Game untuk keputusan Echelon vs Recycling

JIANG & TANG (2025) menyempurnakan model dengan memperkenalkan permainan *Stackelberg*:

- **Upper level (Leader = OEM/manufacturer):** menentukan harga收购 $w$ (insentif pengembalian) dan investasi reverse-logistics.
- **Lower level (Follower = third-party recycler):** menentukan kapasitas $K_R$ dan alokasi $x_{TR}$ yang memaksimalkan $\Pi_R(w, K_R)$.

Formulasi lower level:

$$\max_{x_{TR}, K_R} \Pi_R = (p^r_R - c^p_R) x_{TR} - f_R y_R - \beta w x_{TR}$$

subject to: $0 \le x_{TR} \le K_R$, dengan $\beta$ adalah koefisien sensitivitas回收 price terhadap aliran回收.

Kondisi KKT dari lower level disubstitusikan ke upper level, menghasilkan *Mathematical Program with Equilibrium Constraints* (MPEC) yang selanjutnya dilinierisasi menggunakan teknik big-$M$ untuk diselesaikan oleh *branch-and-bound*.

## 3. Metodologi Rekayasa & Standar Prosedur