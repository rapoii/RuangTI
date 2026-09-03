# 2277 — Strategi Closed-Loop Supply Chain (CLSC) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Bekas EV: Integrasi Robust Return Management dalam Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Rantai Pasok Tertutup untuk Pemanfaatan Bertingkat dan Daur Ulang Manufaktur Baterai Bekas, serta Model Robust dengan Sistem Manajemen Pengembalian untuk Ekonomi Sirkular
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan ujung-umur (end-of-life) yang belum pernah terjadi sebelumnya di sektor manufaktur baterai lithium-ion. Berdasarkan proyeksi International Energy Agency (IEA) yang dirujuk oleh JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), volume baterai EV pensiun diproyeksikan melebihi 1,4 juta ton pada 2030 dan melonjak menjadi >14 juta ton pada 2040. Setiap baterai EV yang pensiun memiliki *State of Health* (SOH) antara 70%–80% sehingga masih layak untuk aplikasi sekunder berdaya lebih rendah — sebuah peluang yang oleh JIANG & TANG (2025) disebut sebagai **echelon utilization** (pemanfaatan bertingkat), seperti penyimpanan energi stasioner (*stationary energy storage systems*/SESS), lampu jalan tenaga surya, *backup power* telekomunikasi, dan *forklift* listrik industri.

Urgensi operasionalnya bersifat multidimensional. Pertama, dimensi lingkungan: daur ulang baterai mengandung kobalt, nikel, dan litium yang merupakan *critical raw materials* dengan *supply risk* geopolitik tinggi; ekstraksi primer menghasilkan emisi CO₂ antara 8–15 ton per ton logam kobalt, sedangkan daur ulang hanya 1,2–2,5 ton. Kedua, dimensi ekonomi: pasar global baterai bekas diproyeksikan bernilai USD 32,8 miliar pada 2030 dengan CAGR >22%. Ketiga, dimensi regulasi: EU Battery Regulation 2023/1542 dan standar GB/T 34014-2017 (Tiongkok) mewajibkan *extended producer responsibility* (EPR) yang menuntut OEM membangun infrastruktur *take-back* terbalik. Keempat, dimensi teknis: distribusi parameter退役 baterai (kapasitas residu, resistansi internal, tingkat self-discharge) bersifat *stokastik* sehingga keputusan alokasi antara *echelon utilization* dan *recycling remanufacturing* membutuhkan model robust (JIANG & TANG, 2025).

Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi perspektif ini dengan mengajukan bahwa dalam konteks ekonomi sirkular, **sistem manajemen pengembalian (return management system/RMS)** bukan sekadar aktivitas logistik terbalik, melainkan *strategic capability* yang menentukan *robustness* rantai pasok secara keseluruhan. Mereka menunjukkan bahwa ketidakpastian kuantitas dan kualitas *return flow* (variasi musiman, perilaku konsumen, kualitas baterai yang dikembalikan) merupakan sumber utama *disruption* yang dapat diatasi dengan formulasi *robust optimization* dengan *uncertainty budget* Γ.

Dengan menggungkan kedua perspektif, dokumen modul ini akan memformulasikan strategi CLSC terpadu yang: (a) memutuskan alokasi baterai退役 antara *echelon utilization* dan *recycling remanufacturing*; (b) mengintegrasikan *return management* dengan toleransi ketidakpastian; dan (c) memenuhi约束 regulasi EPR sambil memaksimumkan profitabilitas sistem. Pendekatan ini merepresentasikan evolusi signifikan dari CLSC konvensional (forward + reverse logistics terpisah) menjadi *integrated circular supply chain* (ICSC) yang menjadi frontier riset dalam *Industrial Engineering & Logistics* kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC untuk Baterai Bekas

JIANG & TANG (2025) mengusulkan jaringan CLSC dengan empat entitas keputusan:
- **OEM/Pabrikan baterai baru** ($M$): memproduksi sel baterai baru dan menjadi *Stackelberg leader*.
- **Collector/Echo-logistics provider** ($C$): melakukan pengumpulan baterai退役 dari konsumen (dealer, operator fleet).
- **Testing & Sorting Center** ($T$): menentukan SOH dan mengelompokkan baterai ke Grade A (echelon), Grade B (remanufacturing), Grade C (material recycling).
- **Echelon User** ($U$): pengguna sekunder (SESS operator, dll.).
- **Recycler** ($R$): melakukan *recycling remanufacturing* untuk mengekstrak material.

### 2.2 Formulasi Model Programasi Matematis

#### 2.2.1 Fungsi Objektif (Perspektif Sistem Terintegrasi)

Model JIANG & TANG (2025) memformulasikan masalah sebagai *multi-objective mixed-integer nonlinear programming* (MINLP):

$$\max \; Z_{system} = \pi_{U} \cdot x_{EU} + \pi_{R} \cdot x_{RR} - C_{M} - C_{C} - C_{T} - C_{R} - C_{inv} - C_{pen}$$

di mana:
- $\pi_{U}$ = profit margin per unit baterai yang dialokasikan ke echelon utilization (Rp/kWh)
- $\pi_{R}$ = profit margin per unit baterai yang masuk recycling remanufacturing (Rp/kWh)
- $x_{EU}, x_{RR}$ = alokasi kuantitas baterai ke jalur echelon dan recycling (kWh)
- $C_{M}$ = biaya produksi baterai baru (manufaktur)
- $C_{C}$ = biaya koleksi dan reverse logistics
- $C_{T}$ = biaya inspeksi, pengujian SOH, dan sorting
- $C_{R}$ = biaya proses daur ulang pirometalurgi/hidrometalurgi
- $C_{inv}$ = biaya persediaan (holding cost) baterai退役
- $C_{pen}$ = biaya penalty regulasi (non-compliance EU Battery Reg.)

#### 2.2.2 Sub-model Pengujian dan Pengalokasian Baterai (State of Health Classifier)

SOH baterai ke-$i$ dimodelkan dengan distribusi probabilistik:

$$SOH_i = \frac{Q_{max,i}}{Q_{rated}} \sim \mathcal{N}(\mu_{SOH}, \sigma_{SOH}^2)$$

dengan aturan keputusan alokasi:

$$i \in \begin{cases} \text{Grade A (Echelon)} & \text{jika } SOH_i \geq \theta_A \\ \text{Grade B (Remanufacturing)} & \text{jika } \theta_B \leq SOH_i < \theta_A \\ \text{Grade C (Material Recycling)} & \text{jika } SOH_i < \theta_B \end{cases}$$

di mana threshold tipikal berdasarkan JIANG & TANG (2025): $\theta_A = 0{,}80$ dan $\theta_B = 0{,}60$.

#### 2.2.3 Formulasi Robust Optimization (Shin, Kim & Jeong, 2024)

Untuk menangani ketidakpastian *return flow*, Shin, Kim & Jeong (2024) mengadopsi formulasi *Soyster-Bertsimas-Sim*:

$$\min_{x,y} \; c^\top x + \max_{\xi \in \mathcal{U}} \; b^\top y$$

dengan *uncertainty set* polyhedral:

$$\mathcal{U} = \left\{ \xi \; | \; \tilde{b}_j \in [b_j - \hat{b}_j, b_j + \hat{b}_j], \sum_{j} \frac{|\tilde{b}_j - b_j|}{\hat{b}_j} \leq \Gamma \right\}$$

di mana $\Gamma$ adalah *budget of uncertainty* ($0 \leq \Gamma \leq J$). Semakin tinggi $\Gamma, semakin konservatif (robust) solusi tetapi semakin rendah profit optimalnya. Trade-off ini diformulasikan sebagai:

$$\rho(\Gamma) = \frac{Z_{opt}(\Gamma) - Z_{nominal}}{Z_{nominal}} \times 100\%$$

### 2.3 Stackelberg Game Equilibrium

JIANG & TANG (2025) memodelkan interaksi OEM dan Recycler sebagai *Stackelberg game* dua tahap. OEM sebagai leader memilih *wholesale transfer price* $w$ dan *subsidy* $s$ untuk daur ulang, sedangkan Recycler sebagai follower memilih *recovery quantity* $q_R$:

**OEM's Problem (Leader):**
$$\max_{w,s} \; \pi_M^L = (p_{new} - c_{prod})D_{new} + w \cdot q_R - s \cdot q_R$$

**Recycler's Problem (Follower):**
$$\max_{q_R} \; \pi_R^F = (p_{recovered} - c_{recycle})q_R + s \cdot q_R - w \cdot q_R$$

Solusi *subgame perfect equilibrium* memenuhi kondisi KKT turunan pertama:

$$\frac{\partial \pi_R^F}{\partial q_R} = p_{recovered} - c_{recycle} + s - w - 2\gamma q_R = 0 \Rightarrow q_R^* = \frac{p_{recovered} - c_{recycle} + s - w}{2\gamma}$$

Substitusi balik ke fungsi leader menghasilkan *best response function* OEM:

$$w^*(s) = \frac{p_{recovered} - c_{recycle} + s + \gamma D_{new}}{2}$$

### 2.4 Batasan (Constraints) Sistem

Batasan utama dalam model JIANG & TANG (2025) mencakup:

$$\sum_{k \in \{EU, RR\}} x_k \leq Q_{retired} \quad \text{(kapasitas baterai退役)}$$

$$x_{EU} + x_{RR} + x_{disposal} = Q_{retired} \quad \text{(keseimbangan massa)}$$

$$\sum_{i \in T} y_{i,k} \geq \beta_{EPR} \cdot Q_{retired} \quad \text{(EPR compliance, } \beta_{EPR} \geq 0{,}90\text{)}$$

$$SOH_i \cdot Q_i^{discharge} \geq \eta_{min} \quad \forall i \in \text{Grade A (fungsi lifetime)}$$

$$0 \leq x_{EU} \leq K_{EU}^{cap}, \quad 0 \leq x_{RR} \leq K_{R}^{cap}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) serta Shin, Kim & Jeong (2024) bersama-sama menyusun kerangka SOP rekayasa untuk implementasi CLSC baterai bekas EV. Berikut adalah sintesis prosedur operasional terstruktur yang mengikuti standar ISO 9001:2015 (manajemen mutu) dan ISO 14001:2015 (manajemen lingkungan):

### SOP-01: Akuisisi & Pengumpulan Baterai退役 (Reverse Logistics)
1. **Trigger Pengembalian**: aktivasi kupon deposit ($w_{deposit}$ ≈ Rp 2.500.000/unit) melalui aplikasi mobile OEM saat SOH turun < 80%.
2. **Pick-up Scheduling**: algoritma VRPTW (Vehicle Routing Problem with Time Windows) dengan kapasitas truck $\kappa = 40$ unit baterai.
3. **Dokumentasi Digital**: blockchain-based battery passport sesuai GB/T 34014-2017 mencakup data manufacturing date, cycle history, thermal event log.

### SOP-02: Pengujian, Sortasi & Klasifikasi SOH
1. **Capacity Test**: cyclic charge-discharge pada C/3 rate selama