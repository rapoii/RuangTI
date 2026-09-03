# 1589 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain dengan Mempertimbangkan Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan struktural baru dalam pengelolaan *end-of-life* (EoL) baterai lithium-ion (LIB). Proyeksi BloombergNEF menunjukkan bahwa volume baterai EV yang pensiun (*retired power battery*, RPB) akan melampaui 100 GWh per tahun sebelum 2030, dengan akumulasi stok global yang berpotensi menyentuh 2 TWh pada 2040. Jiang & Tang (2025) dalam prosiding ICLSE 2024 menyoroti bahwa salah satu bottleneck utama adalah ketidakselarasan keputusan antara manufaktur OEM, operator *echelon utilization*, dan *recycler*, yang masing-masing memiliki fungsi utilitas berbeda dalam rantai pasok tertutup (*closed-loop supply chain*, CLSC). DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Dalam arsitektur CLSC baterai bekas, terdapat tiga aliran material yang harus diorkestrasi secara simultan, yaitu: (i) aliran maju (*forward flow*) baterai baru dari manufaktur ke OEM EV; (ii) aliran balik (*reverse flow*) baterai pensiun dari konsumen ke titik koleksi; dan (iii) aliran cascading (*echelon flow*) berupa perpindahan baterai dari aplikasi otomotif berdaya tinggi menuju aplikasi stasioner berdaya lebih rendah (misalnya *stationary energy storage system*/SESS, telekomunikasi, atau lampu jalan pintar). Shin, Kim, & Jeong (2024) menegaskan bahwa tanpa sistem *return management* yang robust, *leakage rate* baterai ke disposal ilegal dapat mencapai 30–45%, menimbulkan kerugian ekonomi dan ekologis yang masif. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

Urgensi operasional makin diperparah oleh karakteristik teknis baterai yang menurun secara nonlinear. Kapasitas LIB turun hingga 70–80% *state-of-health* (SoH) setelah 1.500–2.000 siklus pengisian, yang merupakan ambang batas退役 untuk aplikasi otomotif, namun masih layak untuk aplikasi stasioner yang mensyaratkan SoH ≥ 60%. Fenomena *value cascading* ini mengharuskan perancang CLSC untuk membangun keputusan multilevel: kapan harus melakukan *echelon utilization*, kapan harus melakukan daur ulang bahan (*material recycling*), dan kapan kombinasi keduanya optimal. Tanpa formulasi matematis yang rigorous, keputusan cenderung bias ke salah satu opsi, menghambat tercapainya target *circular economy* yang dicanangkan oleh European Battery Regulation 2023/1542 dan program NEV China.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Pemain dan Variabel Keputusan

Model Jiang & Tang (2025) memformulasikan CLSC baterai bekas sebagai **permainan Stackelberg tiga-tingkat** dengan tiga *decision-maker* (DM):

1. **Manufaktur OEM (Leader)** — menentukan harga jual baterai baru $w_m$ dan tingkat investasi回收 $\tau_r$.
2. **Operator Echelon (Follower-1)** — menentukan volume baterai yang dialihkan ke aplikasi stacioner $q_e$ dengan harga transfer $p_e$.
3. **Recycler (Follower-2)** — menentukan volume daur ulang $q_r$ dengan harga beli $p_r$.

### 2.2 Fungsi Permintaan dan Pasokan Balik

Permintaan baterai baru dimodelkan sebagai fungsi harga linier:

$$D_m(w_m) = \alpha - \beta w_m, \quad \alpha, \beta > 0 \tag{1}$$

Pasokan baterai pensiun mengikuti model *return management*:

$$Q_r = \eta \cdot D_m(w_m) \cdot (1-\theta), \quad 0 < \eta \leq 1 \tag{2}$$

dengan $\eta$ adalah *collection rate* dan $\theta$ adalah tingkat degradasi yang membuat baterai tidak layak *echelon* (SoH < 60%).

### 2.3 Fungsi Utilitas

Fungsi laba manufaktur $\Pi_m$:

$$\Pi_m = (w_m - c_m) D_m + p_e q_e + p_r q_r - \tau_r q_r - C_{\text{inv}}(\tau_r) \tag{3}$$

dengan biaya inves回收回收 $C_{\text{inv}}(\tau_r) = \tfrac{1}{2} k \tau_r^2$.

Fungsi laba operator echelon $\Pi_e$:

$$\Pi_e = (p_e - c_e) q_e - \tfrac{1}{2} \gamma q_e^2 \tag{4}$$

Fungsi laba recycler $\Pi_r$ (berdasarkan Shin et al., 2024):

$$\Pi_r = (v_r - p_r) q_r - c_p q_r - \tfrac{1}{2} \delta q_r^2 \tag{5}$$

dengan $v_r$ adalah nilai material daur ulang (Li, Co, Ni), $c_p$ biaya proses, dan $\delta q_r^2$ biaya lingkungan kuadratik.

### 2.4 Model Robust untuk Ketidakpastian Permintaan

Mengikuti kerangka Shin, Kim, & Jeong (2024), ketidakpastian permintaan dimodelkan dengan *budget uncertainty set*:

$$\mathcal{U} = \left\{ \tilde{D}_m = D_m + \xi : |\xi| \leq \rho D_m,\; \sum |\xi_i| \leq \Gamma \right\} \tag{6}$$

Masalah optimasi robust menjadi:

$$\max_{w_m, \tau_r} \min_{\tilde{D}_m \in \mathcal{U}} \Pi_m(w_m, \tau_r, \tilde{D}_m) \tag{7}$$

yang diselesaikan dengan *dual reformulation* melalui variabel dual $\lambda \geq 0$ dan $\mu_i \geq 0$.

### 2.5 Kondisi Keseimbangan (*Equilibrium*)

Dari turunan parsial First-Order, solusi *Stackelberg equilibrium* $(w_m^*, p_e^*, p_r^*)$ memenuhi:

$$\frac{\partial \Pi_e}{\partial q_e} = 0 \Rightarrow p_e^* = c_e + \gamma q_e \tag{8}$$

$$\frac{\partial \Pi_r}{\partial q_r} = 0 \Rightarrow p_r^* = v_r - c_p - \delta q_r \tag{9}$$

$$\frac{\partial \Pi_m}{\partial w_m} = 0 \Rightarrow w_m^* = \frac{\alpha + \beta c_m + \beta \rho}{2\beta} \tag{10}$$

Substitusi mundur (*backward induction*) menghasilkan harga dan kuantitas equilibrium sebagai fungsi parameter eksogen.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi CLSC baterai bekas mengikuti SOP 7-tahap yang distandardisasi oleh Jiang & Tang (2025):

**Tahap 1 — Karakterisasi Baterai Pensiun.**
Setiap modul baterai yang masuk ke *collection center* menjalani pengujian SoH menggunakan *hybrid pulse power characterization* (HPPC) dan electrochemical impedance spectroscopy (EIS). Baterai diklasifikasikan: **Grade A** (SoH 70–80%, layak echelon EV-ke-EV), **Grade B** (SoH 60–70%, layak echelon stasioner), **Grade C** (SoH < 60%, langsung recycling).

**Tahap 2 — Penetapan Harga Transfer.**
Harga $p_e$ dan $p_r$ ditentukan melalui mekanisme auction Vickrey–Clarke–Groves (VCG) untuk mencegah *information asymmetry* antar operator.

**Tahap 3 — Optimisasi Jaringan.**
Gunakan model MILP dengan *facility location* untuk menentukan lokasi optimal *echelon center* dan *recycling hub* dengan meminimalkan total biaya logistik:

$$\min Z = \sum_{i,j} (c_{ij}^t x_{ij} + c_{ij}^f y_{ij}) + \sum_{k} F_k z_k \tag{11}$$

dengan $x_{ij}$ alokasi aliran, $y_{ij}$ biaya transport, $z_k$ keputusan biner fasilitas, $F_k$ *fixed cost*.

**Tahap 4 — Kontrak Koordinasi.**
Implementasi *revenue-sharing contract* + *cost-sharing contract* untuk mengkoordinasikan keputusan triadik. Parameter koordinator $(\phi, \psi)$ dipilih untuk menyelaraskan *individual rationality* (IR) dan *incentive compatibility* (IC).

**Tahap 5 — Simulasi Robust.**
*Monte Carlo simulation* dengan 10.000 iterasi untuk memvalidasi performa model robust terhadap skenario *worst-case* demand shock.

**Tahap 6 — Implementasi Traceability.**
Penerapan *battery passport* sesuai EU Regulation 2023/1542 dengan blockchain ledger untuk menjamin traceability dari *cradle-to-grave*.

**Tahap 7 — Audit & Continuous Improvement.**
KPI yang dipantau: *collection rate* $\eta$, *echelon yield* $Y_e$, *recycling recovery rate* $R_r$, dan *carbon footprint* $CF$ (kgCO₂e/kWh).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
