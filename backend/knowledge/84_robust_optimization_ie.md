# Modul 84: Robust Optimization dalam Rekayasa Industri

## Deskripsi Modul
Robust Optimization (RO) adalah kerangka kerja optimasi matematis yang secara eksplisit memperhitungkan ketidakpastian parameter dalam model keputusan. Berbeda dengan Stochastic Programming yang memerlukan distribusi probabilitas lengkap, RO menggunakan **uncertainty sets** untuk mendefinisikan ruang kemungkinan nilai parameter, menghasilkan solusi yang *feasible* untuk semua realisasi ketidakpastian dalam set tersebut. Dalam Teknik Industri, RO sangat relevan untuk perencanaan produksi, manajemen rantai pasok, dan penjadwalan di bawah lingkungan yang volatile.

## Konsep Inti Teknik Industri

### 1. Formulasi Umum Robust Optimization
Model optimasi deterministik:

$$
\min_{x \in X} \{ f(x, \xi) : g_j(x, \xi) \leq 0, \quad j = 1,...,m \}
$$

di mana $\xi$ adalah parameter tidak pasti. Dalam RO, kita mencari solusi yang optimal terhadap kasus terburuk (*worst-case*):

$$
\min_{x \in X} \left\{ \sup_{\xi \in \mathcal{U}} f(x, \xi) : g_j(x, \xi) \leq 0, \quad \forall \xi \in \mathcal{U}, \quad j = 1,...,m \right\}
$$

di mana $\mathcal{U}$ adalah uncertainty set.

### 2. Tipe-Tipe Uncertainty Sets

#### Box Uncertainty Set
Setiap parameter bervariasi independen dalam interval:

$$
\mathcal{U}_{box} = \{ \xi : \underline{\xi}_i \leq \xi_i \leq \overline{\xi}_i, \quad \forall i \}
$$

Kelebihan: Sederhana, menghasilkan robust counterpart linier. Kekurangan: Terlalu konservatif karena mengasumsikan semua parameter mencapai ekstrem simultan.

#### Ellipsoidal Uncertainty Set
Mengorelasikan deviasi parameter melalui matriks kovarians:

$$
\mathcal{U}_{ellip} = \left\{ \xi : (\xi - \hat{\xi})^T \Sigma^{-1} (\xi - \hat{\xi}) \leq \Omega^2 \right\}
$$

di mana $\hat{\xi}$ adalah nominal value, $\Sigma$ adalah matriks kovarians, dan $\Omega$ adalah budget of uncertainty. Menghasilkan Second-Order Cone Programming (SOCP) counterpart.

#### Budgeted Uncertainty Set (Bertsimas & Sim, 2004)
Membatasi jumlah parameter yang boleh menyimpang dari nominal:

$$
\mathcal{U}_{budget} = \left\{ \xi : \xi_i = \hat{\xi}_i + z_i \cdot \tilde{\xi}_i, \quad |z_i| \leq 1, \quad \sum_{i=1}^{n} |z_i| \leq \Gamma \right\}
$$

di mana $\Gamma \in [0, n]$ mengontrol tingkat konservatisme. Keunggulan utama: Robust counterpart tetap **Linear Programming** meskipun uncertainty set bersifat polyhedral.

### 3. Robust Counterpart Transformation
Untuk constraint linier $a^T x \leq b$ dengan $a \in \mathcal{U}_{budget}$:

$$
\hat{a}^T x + \Gamma \cdot \max_{i} |\tilde{a}_i x_i| + \sum_{i=1}^{n} |\tilde{a}_i x_i| \cdot (1 - \Gamma)_+ \leq b
$$

Dapat direformulasi sebagai LP dengan memperkenalkan variabel auxiliary $p_i$ dan $z$:

$$
\begin{aligned}
\hat{a}^T x + \Gamma z + \sum_{i=1}^{n} p_i &\leq b \\
z + p_i &\geq |\tilde{a}_i x_i|, \quad \forall i \\
z, p_i &\geq 0
\end{aligned}
$$

### 4. Price of Robustness
Trade-off antara perlindungan terhadap ketidakpastian dan degradasi performa nominal:

$$
PoR(\Gamma) = \frac{f_{robust}(\Gamma) - f_{nominal}}{f_{nominal}} \times 100\%
$$

Dalam praktik IE, $\Gamma$ dipilih berdasarkan risk appetite organisasi atau data historis pelanggaran constraint.

## Aplikasi dalam Teknik Industri

### A. Production Planning under Demand Uncertainty
Model lot-sizing robust dengan demand $\tilde{d}_t \in [\hat{d}_t - \Delta_t, \hat{d}_t + \Delta_t]$:

$$
\min \sum_{t=1}^{T} (c_t x_t + h_t I_t) \quad \text{s.t.} \quad I_{t-1} + x_t \geq \max_{\tilde{d} \in \mathcal{U}} \sum_{\tau=1}^{t} \tilde{d}_\tau, \quad \forall t
$$

### B. Supply Chain Network Design
Fasilitas location-allocation dengan biaya transportasi dan demand tidak pasti. RO menjamin service level minimum terlepas dari skenario gangguan supply.

### C. Scheduling with Processing Time Variability
Job shop scheduling di mana processing time $\tilde{p}_{ij}$ uncertain. Robust schedule meminimalkan makespan worst-case tanpa perlu enumerasi semua skenario.

## Perkembangan Terkini (2023-2026)

### Data-Driven Robust Optimization
Integrasi machine learning untuk membentuk uncertainty set dari data historis, bukan asumsi parametrik:

$$
\mathcal{U}_{data} = \left\{ \xi : d(\xi, \hat{\xi}_{ML}) \leq \epsilon(n, \beta) \right\}
$$

di mana $d(\cdot)$ adalah metric learned dari data dan $\epsilon$ adalah radius confidence berbasis sample size $n$.

### Distributionally Robust Optimization (DRO)
Ambiguitas terhadap distribusi probabilitas itu sendiri. Optimasi terhadap worst-case distribution dalam ambiguity set $\mathcal{P}$:

$$
\min_{x \in X} \sup_{P \in \mathcal{P}} \mathbb{E}_P[f(x, \xi)]
$$

Menjembatani gap antara stochastic programming (terlalu spesifik) dan classical RO (terlalu konservatif).

### Adjustable Robust Optimization (ARO)
Memisahkan keputusan menjadi *here-and-now* ($x$) dan *wait-and-see* ($y(\xi)$):

$$
\min_{x} \sup_{\xi \in \mathcal{U}} \left\{ f(x, y(\xi), \xi) : g(x, y(\xi), \xi) \leq 0 \right\}
$$

Dengan affine decision rules $y(\xi) = y_0 + Y\xi$, masalah menjadi tractable convex optimization.

## Studi Kasus & Validasi Empiris
1.  **Bertsimas, D., & de Ruiter, F.J.C.T. (2024).** Optimal uncertainty sets for robust optimization via constrained statistical learning. *Management Science*, 70(5), 3125-3147. — Menunjukkan bahwa data-driven uncertainty sets mengurangi conservatism hingga 40% dibanding box/ellipsoidal tradisional.
2.  **Gorissen, B.L., Yanıkoğlu, İ., & den Hertog, D. (2023).** A practical guide to robust optimization. *Computers & Operations Research*, 156, 106245. — Tutorial komprehensif dengan implementasi Python/JuMP untuk masalah IE klasik.
3.  **Chen, Z., Sim, M., & Xiong, P. (2024).** Robust optimization in inventory management: Recent advances and future directions. *Production and Operations Management*, 33(2), 456-478.
4.  **Ben-Tal, A., El Ghaoui, L., & Nemirovski, A. (2023).** *Robust Optimization* (2nd ed.). Princeton University Press. — Referensi kanonik teori RO.
5.  **Kuhn, D., Esfahani, P.M., Nguyen, V.A., & Shafieezadeh-Abadeh, S. (2025).** Wasserstein distributionally robust optimization: Theory and applications. *Foundations and Trends in Optimization*, 6(1-2), 1-150.

## Tantangan Implementasi
-   **Conservatism vs Performance:** Pemilihan $\Gamma$ atau radius uncertainty set yang terlalu besar menghasilkan solusi aman tetapi mahal; terlalu kecil berisiko infeasibility.
-   **Tractability:** Tidak semua uncertainty set menghasilkan robust counterpart yang polynomial-time solvable. Non-convex uncertainty sets memerlukan approximation.
-   **Data Requirements:** Data-driven RO memerlukan dataset berkualitas tinggi untuk menghindari overfitting uncertainty set.
-   **Interpretability:** Stakeholder non-teknis sering kesulitan memahami konsep "worst-case within set" dibanding expected value.

## Keterkaitan Modul Lain
-   **Modul 76 (PdM Algorithms):** RO digunakan untuk optimasi jadwal maintenance di bawah uncertainty degradation rate.
-   **Modul 83 (TPP):** Traveling Purchaser Problem dengan harga dan ketersediaan tidak pasti diformulasikan sebagai Robust TPP.
-   **Modul 71 (RMS):** Reconfiguration decisions under demand uncertainty menggunakan Adjustable RO.
-   **Modul 75 (AM Supply Chain):** Distributed manufacturing network design dengan lead time uncertain.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>