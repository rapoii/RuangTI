# 1446 — Pemodelan Matematis dan Optimisasi Hibrida Distribusi Energi Terbatas Termal pada Jaringan Logistik Dingin (Cold Chain)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Mathematical Modelling and Hybrid Optimization of Thermally-Constrained Energy Distribution in Cold Logistics Networks
**Jurnal & Sitasi Utama:** Jonathan Liviera Marpaung, Putri Khairiah Nasution, Muthia Ferliani Balqis (2025). *International Journal of Energy Production and Management*. DOI: [https://doi.org/10.56578/ijepm100408](https://doi.org/10.56578/ijepm100408)
**Sitasi Pendukung:** Jonathan Liviera Marpaung, Putri Khairiah Nasution, Muthia Ferliani Balqis (2025). *International Journal of Energy Production and Management*. DOI: [https://doi.org/10.56578/ijepm100408](https://doi.org/10.56578/ijepm100408)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam jaringan pasok modern yang bertanggung jawab atas preservasi produk sensitif-suhu seperti produk farmasi (vaksin, insulin), makanan beku, produk biologi, dan bahan kimia tertentu. Marpaung, Nasution, dan Balqis (2025) dalam *International Journal of Energy Production and Management* (DOI: [10.56578/ijepm100408](https://doi.org/10.56578/ijepm100408)) menegaskan bahwa sistem cold chain menghadapi tantangan operasional dan lingkungan yang makin kompleks seiring meningkatnya permintaan pengiriman dinamis, ketidakpastian rute, serta tekanan untuk menekan konsumsi energi dan emisi karbon. Di banyak negara berkembang — termasuk Indonesia, Filipina, dan Vietnam — kehilangan pasok (*post-harvest losses*) akibat pelanggaran rantai dingin masih berkisar 20–40%, sebuah inefisiensi yang menunjukkan urgensi perbaikan sistematis.

Permasalahan utama yang diidentifikasi oleh Marpaung dkk. (2025) bersifat multi-dimensi. Pertama, kendala termal: setiap produk memiliki kurva degradasi spesifik terhadap suhu sehingga pelanggaran *time-temperature tolerance* menyebabkan penalti kualitas dan kerugian finansial. Kedua, ketidakpastian permintaan dan urgensi pengiriman yang menuntut mekanisme adaptif. Ketiga, konsumsi energi unit refrigerasi kendaraan yang berfluktuasi terhadap waktu, jarak, dan beban muatan. Keempat, kompleksitas Vehicle Routing Problem (VRP) yang meningkat tajam ketika kendala termal dan jendela waktu dimasukkan secara simultan.

Untuk menjawab tantangan tersebut, paper ini mengusulkan pendekatan *soft computing* hibrida yang mengintegrasikan tiga paradigma: **Fuzzy Logic** untuk menangani ketidakpastian (sensitivitas produk dan urgensi pengiriman), **Genetic Algorithm (GA)** untuk eksplorasi global ruang solusi, dan **Ant Colony Optimization (ACO)** untuk penyempurnaan rute berbasis feromon. Pendekatan ini relevan dengan agenda *Industry 5.0* dan *Green Logistics* yang mendorong efisiensi energi tanpa mengorbankan integritas produk. Studi ini memberikan kontribusi orisinal berupa formulasi multi-objektif (energi–waktu–penalti termal) dengan bobot adaptif yang dipandu *fuzzy inference system*, sebuah arsitektur yang sebelumnya belum banyak dieksplorasi dalam literatur cold chain.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dibangun Marpaung dkk. (2025) meminimalkan fungsi biaya multi-objektif $Z$ yang menggabungkan konsumsi energi, waktu tempuh, dan penalti deviasi suhu, dengan tunduk pada kendala kapasitas, jendela waktu, dan stabilitas termal.

### 2.1 Notasi dan Parameter

Misalkan $G = (N, A)$ merupakan graf lengkap dengan $N = \{0, 1, \ldots, n\}$ sebagai himpunan node (0 = depot) dan $A$ sebagai himpunan busur. Parameter-parameter kunci:

- $d_{ij}$ : jarak dari node $i$ ke node $j$
- $q_i$ : permintaan (kg) pada node $i$
- $[e_i, l_i]$ : jendela waktu (earliest, latest) di node $i$
- $T_i^{\text{ref}}$ : suhu referensi produk pada node $i$ (°C)
- $Q$ : kapasitas kendaraan
- $c_e, c_t, c_{\text{pen}}$ : koefisien biaya energi, waktu, dan penalti termal
- $P_k$ : daya制冷 unit (W) pada kendaraan $k$
- $x_{ijk} \in \{0,1\}$ : 1 jika kendaraan $k$ melewati busur $(i,j)$, selainnya 0

### 2.2 Fungsi Tujuan Multi-Objektif

$$\min Z = c_e \sum_{k \in K} \sum_{(i,j) \in A} e_{ij} \, x_{ijk} + c_t \sum_{k \in K} \sum_{(i,j) \in A} t_{ij} \, x_{ijk} + c_{\text{pen}} \sum_{i \in N} \delta_i$$

dengan $e_{ij}$ adalah energi yang dikonsumsi untuk menempuh busur $(i,j)$:

$$e_{ij} = \frac{P_k \cdot t_{ij}}{\eta_{\text{ref}}} \cdot (1 + \alpha \cdot q_k)$$

di mana $\eta_{\text{ref}}$ adalah koefisien performa refrigerasi (COP), $\alpha$ adalah faktor pembebanan, dan $q_k$ adalah muatan kendaraan $k$.

### 2.3 Penalti Deviasi Suhu

Penalti $\delta_i$ didefinisikan sebagai pelanggaran terhadap batas suhu yang diizinkan $[T_i^{\min}, T_i^{\max}]$:

$$\delta_i = \begin{cases} \beta_1 (T_i^{\text{aktual}} - T_i^{\max}) & \text{jika } T_i^{\text{aktual}} > T_i^{\max} \\ \beta_2 (T_i^{\min} - T_i^{\text{aktual}}) & \text{jika } T_i^{\text{aktual}} < T_i^{\min} \\ 0 & \text{lainnya} \end{cases}$$

dengan $\beta_1, \beta_2 > 0$ adalah bobot penalti asimetris (kerusakan produk biasanya non-linear terhadap overheating).

### 2.4 Modul Fuzzy Logic untuk Bobot Adaptif

Marpaung dkk. (2025) memperkenalkan *Fuzzy Inference System* (FIS) Mamdani dengan dua input: **sensitivitas produk** $S \in [0,10]$ dan **urgensi pengiriman** $U \in [0,10]$, serta satu output: **bobot penalti adaptif** $w_p \in [0,1]$. Aturan tipikal:

$$R_1: \text{JIKA } S = \text{Tinggi} \text{ DAN } U = \text{Tinggi} \text{ MAKA } w_p = \text{Sangat Berat}$$

$$R_2: \text{JIKA } S = \text{Rendah} \text{ DAN } U = \text{Rendah} \text{ MAKA } w_p = \text{Ringan}$$

Output FIS menggantikan $c_{\text{pen}}$ statis dengan $c_{\text{pen}}(S,U)$, memungkinkan sistem menanggapi ketidakpastian lingkungan secara real-time.

### 2.5 Kendala

$$\sum_{k \in K} \sum_{j \in N} x_{ijk} = 1, \quad \forall i \in N \setminus \{0\} \quad \text{(kunjungan tunggal)}$$

$$\sum_{i \in N} q_i \cdot y_{ik} \leq Q, \quad \forall k \in K \quad \text{(kapasitas kendaraan)}$$

$$e_i \leq s_{ik} \leq l_i, \quad \forall i \in N, k \in K \quad \text{(jendela waktu)}$$

$$T_i^{\min} \leq T_i^{\text{aktual}}(s_{ik}) \leq T_i^{\max}, \quad \forall i \in N \quad \text{(stabilitas termal)}$$

### 2.6 Hibridisasi GA–ACO

Arsitektur algoritmik mengikuti protokol dua-fase: (i) **GA global search** dengan representasi kromosom permutasi rute, *crossover* Order Crossover (OX), dan mutasi swap, di mana fitness $F = Z^{-1}$; (ii) **ACO refinement** yang menginisialisasi matriks feromon $\tau_{ij}(0)$ dari populasi elit GA, kemudian melakukan iterasi konstruksi solusi dengan aturan transisi:

$$p_{ij}^m(t) = \frac{[\tau_{ij}(t)]^{\alpha_{\text{aco}}} \cdot [\eta_{ij}]^{\beta_{\text{aco}}}}{\sum_{l \in J_m} [\tau_{il}(t)]^{\alpha_{\text{aco}}} \cdot [\eta_{il}]^{\beta_{\text{aco}}}}$$

dengan $\eta_{ij} = 1/e_{ij}$ sebagai visibilitas, $J_m$ himpunan node feasible, dan pembaruan feromon:

$$\tau_{ij}(t+1) = (1-\rho)\tau_{ij}(t) + \sum_{m=1}^{M} \Delta \tau_{ij}^m$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Marpaung dkk. (2025) mengikuti kerangka rekayasa berlapis yang dapat diadaptasikan ke SOP industri. Tahapan utamanya:

**Tahap 1 – Akuisisi Data dan Pre-processing.** Data historis permintaan, suhu ambient, profil kendaraan, dan karakteristik produk dikumpulkan dari WMS/TMS. Setiap produk diklasifikasikan berdasarkan *time-temperature integrator* (TTI) dan diberi skor sensitivitas $S_i$.

**Tahap 2 – Pembangunan Model Fuzzy.** Pakar domain mendefinisikan himpunan fuzzy untuk $S$ dan $U$ (misal: *Rendah*, *Sedang*, *Tinggi*). Basis aturan dibangun menggunakan pendekatan *grid partitioning* dengan 9 aturan untuk resolusi sedang, atau 25 aturan untuk aplikasi kritis (vaksin COVID-19, plasma darah).

**Tahap 3 – Inisialisasi GA.** Populasi awal sebanyak $N_p = 100$ kromosom dibangkitkan secara acak dengan perbaikan (*nearest-neighbor heuristic*) untuk menjamin feasibilitas awal. Parameter GA: probabilitas crossover $p_c = 0{,}85$, mutasi $p_m = 0{,}15$, generasi maksimum $G_{\max} = 300$.

**Tahap 4 – Evaluasi Fitness dan Seleksi.** Setiap kromosom dievaluasi terhadap fungsi tujuan $Z$; pelanggaran kendala dikenai *static penalty* tambahan. Seleksi menggunakan *tournament selection* dengan ukuran $k_t = 5$.

**Tahap 5 – Refinement ACO.** Solusi top-10% dari GA menjadi inisialisasi feromon. ACO dijalankan selama $I_{\max} = 50$ iterasi dengan $\alpha_{\text{aco}} = 1$, $\beta_{\text{aco}} = 2$, $\rho = 0{,}1$, dan jumlah semut $M = n$.

**Tahap 6 – Validasi dan Eksekusi.** Solusi akhir divalidasi melalui simulasi Monte Carlo (1000 run) untuk mengukur robustness. Hasil dikirim ke dispatcher melalui API TMS.

Diagram alur proses mengikuti pola *sequential hybrid metaheuristic* — sesuai standar ISO 23412 (2019) untuk *Controlled Temperature Handling Services* dan best practice *Gartner Supply Chain Top 25* untuk integrasi AI dalam rantai dingin.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk menggambarkan penerapan, perhatikan studi kasus distribusi produk susu pasteurisasi dari 1 depot (D) ke 8 pelanggan di wilayah Jabodetabek. Parameter disusun berdasarkan praktik industri refrigerated trucking di Asia Tenggara (Marpaung dkk., 2025, [DOI:10.56578/ijepm100408](https://doi.org/10.56578/ijepm100408)).

**Input Parameter:**

| Node | Demand $q_i$ (kg) | $[e_i, l_i]$ (menit) | $T_i^{\text{ref}}$ (°C) | Sensitivitas $S_i$ |
|------|-------------------|----------------------|--------------------------|---------------------|
| 1 | 80 | [30, 90] | 4 | 6 |
| 2 | 120 | [45, 105] | 4 | 6 |
| 3 | 60 | [60, 120] | 4 | 7 |
| 4 | 100 | [30, 90] | 2 | 9 |
| 5 | 90 | [75, 135] | 4 | 5 |
| 6 | 110 | [45, 105] | 4 | 6 |
| 7 | 70 | [60, 120] | 2 | 8 |
| 8 | 130 | [30, 90] | 4 | 7 |

Kapasitas kendaraan $Q = 250$ kg, daya制冷 $P_k = 1800$ W, COP $\eta_{\text{ref}} = 2{,}1$, $\alpha = 0{,}0008$, $c_e = \text{Rp }120/\text{kWh}$, $c_t = \text{Rp }1500/\text{jam}$, $c_{\text{pen}} = \text{Rp }50.000/°\text{C}$ pelanggaran.

**Langkah 1: Pembentukan Rute Awal GA.** Misalkan sebuah kromosom kandidat menghasilkan rute: D → 1 → 2 → 6 → D (Rute A) dan D → 3 → 4 → 5 → 7 → 8 → D (Rute B). Beban: Rute A = 80+120