# 2609 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua keputusan operasional yang saling terkait erat dalam sistem manufaktur dan rantai pasok modern. Pada praktiknya, manajer produksi menghadapi dua realitas yang saling bertentangan: di satu sisi, keputusan lot sizing bertujuan meminimalkan total biaya persediaan (*inventory holding cost*) dan biaya persiapan (*setup cost*) melalui penerapan rumus Economic Order Quantity (EOQ) atau model Wagner-Whitin deterministik; di sisi lain, penjadwalan harus mengakomodasi keterbatasan kapasitas mesin, urutan produksi (*sequence-dependent setup*), serta due date pelanggan yang fluktuatif. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* mengidentifikasi bahwa dekomposisi tradisional yang memisahkan keputusan lot sizing (perencanaan agregat) dari scheduling (eksekusi shop floor) menghasilkan suboptimalitas signifikan ketika permintaan bersifat probabilistik.

Konteks industri yang melatarbelakangi riset ini sangat relevan dengan praktik Manufacturing Resource Planning (MRP II) dan Advanced Planning Systems (APS) di industri proses maupun diskrit. Dalam industri baja, kimia, dan semikonduktor—di mana biaya setup dapat mencapai 10–15% dari total biaya produksi—ketidakpastian permintaan (*demand uncertainty*) menciptakan fenomena *bullwhip effect* yang memperbesar variansi pesanan sepanjang rantai pasok. Studi empiris Forel dan Grunow (2023) menunjukkan bahwa meskipun pendekatan akademik lot sizing stokastik sudah mapan sejak tahun 1950-an, **hanya sekitar 8% perusahaan manufaktur di Eropa yang benar-benar mengimplementasikan model stokastik dalam sistem ERP mereka**; sisanya masih bergantung pada model deterministik dengan safety stock heuristik. Kesenjangan antara riset akademik dan praktik industri (*theory-practice gap*) inilah yang menjadi motivasi utama paper Lead Researchers (2025) dalam mengembangkan model hibrida.

Urgensi ekonomis dari masalah ini dapat dikuantifikasi: pada industri Fast-Moving Consumer Goods (FMCG) dengan revenue tahunan USD 500 juta, inefisiensi lot sizing sebesar 2–3% dari COGS setara dengan pemborosan USD 3–5 juta per tahun. Sementara itu, pada industri farmasi yang tunduk pada Good Manufacturing Practice (GMP), kesalahan penjadwalan tidak hanya berakibat finansial tetapi juga pada *batch release* yang tertunda dan risiko *stockout* pada obat kritis. Oleh karena itu, integrasi keputusan lot sizing dan scheduling dalam satu kerangka optimasi stokastik menjadi kebutuhan strategis. Model hibrida yang diusulkan menggabungkan kekuatan *stochastic programming* (untuk menangani ketidakpastian permintaan) dengan *constraint programming* atau *metaheuristic* (seperti Genetic Algorithm atau Simulated Annealing) untuk menyelesaikan dimensi scheduling yang bersifat NP-hard. Pendekatan ini diharapkan menjembatani kesenjangan antara rigoritas matematis dan kelayakan komputasional di industri nyata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Dasar Lot Sizing Deterministik

Formulasi Wagner-Whitin klasik (1958) menjadi titik awal. Untuk horizon perencanaan $T$ periode dengan permintaan deterministik $d_t$, variabel keputusan $X_t$ (jumlah produksi di periode $t$), $I_t$ (inventory akhir periode $t$), dan $Y_t$ (binary setup indicator), model dirumuskan:

$$\min Z = \sum_{t=1}^{T} \left( c_t X_t + h_t I_t + s_t Y_t \right)$$

$$\text{subject to:}$$

$$I_t = I_{t-1} + X_t - d_t, \quad \forall t = 1, 2, \ldots, T$$

$$X_t \leq M \cdot Y_t, \quad \forall t$$

$$Y_t \in \{0, 1\}, \quad I_t \geq 0, \quad X_t \geq 0$$

dengan $c_t$ adalah biaya produksi per unit, $h_t$ biaya holding per unit per periode, $s_t$ biaya setup, dan $M$ big-M parameter. Model ini solvable secara dinamis dengan kompleksitas $O(T^2)$.

### 2.2 Ekstensi Stokastik dengan Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) mengusulkan penggunaan **Martingale Model of Forecast Evolution (MMFE)** untuk menangkap pola revisi permintaan dalam *rolling-horizon planning*. Berbeda dengan asumsi permintaan $d_t$ yang statis, MMFE memodelkan bahwa forecast pada periode $t$ untuk periode $\tau$ (dengan $\tau > t$) akan di-revise seiring waktu:

$$D_{t,\tau} = D_{t-1,\tau} + \varepsilon_{t,\tau}, \quad \varepsilon_{t,\tau} \sim N(0, \sigma_\tau^2)$$

di mana $D_{t,\tau}$ adalah forecast yang tersedia di periode $t$ untuk permintaan di periode $\tau$, dan $\varepsilon_{t,\tau}$ adalah *innovation term*. Akar kuadrat dari variansi kumulatif *forecast error* didekati dengan:

$$\sigma_{t,\tau}^{MMFE} = \sqrt{\sum_{k=t+1}^{\tau} \phi^{\tau-k} \cdot \sigma_k^2}$$

dengan $\phi \in (0,1)$ adalah parameter peluruhan (*damping factor*) yang merepresentasikan kecepatan revisi forecast. Ketika $\phi \to 0$, model degenerasi menjadi permintaan statis; ketika $\phi \to 1$, permintaan bersifat *random walk*.

### 2.3 Formulasi Stokastik Dua Tahap (*Two-Stage Stochastic Program*)

Lead Researchers (2025) mengembangkan formulasi *two-stage stochastic linear program* sebagai berikut. Pada *first stage*, keputusan lot size $X_t$ ditentukan sebelum realisasi permintaan; pada *second stage*, tindakan recourse berupa produksi korektif $X_t^+$ atau backorder $B_t^-$ diambil setelah demand $\tilde{d}_t$ terrealisasi:

$$\min Z = \mathbb{E}_{\xi} \left[ \min \sum_{t=1}^{T} \left( c_t X_t + s_t Y_t + h_t I_t^+ + p_t B_t^- + q_t X_t^+ \right) \right]$$

$$\text{subject to:}$$

$$I_t^+ = I_{t-1}^+ + X_t + X_t^+ - \tilde{d}_t + B_t^-, \quad \forall t, \forall \xi \in \Omega$$

$$\sum_{i \in S_k} X_{i,t} \leq C_{k,t}, \quad \forall k \text{ (mesin/grup), } \forall t$$

$$X_t \leq M \cdot Y_t, \quad Y_t \in \{0,1\}, \quad X_t^+, B_t^-, I_t^+ \geq 0$$

di mana $h_t$ adalah holding cost, $p_t$ adalah penalty cost backorder, $q_t$ adalah biaya produksi darurat (*rush production*), $C_{k,t}$ adalah kapasitas sumber daya $k$ di periode $t$, dan $\xi = (\tilde{d}_1, \tilde{d}_2, \ldots, \tilde{d}_T)$ merepresentasikan skenario permintaan.

### 2.4 Arsitektur Hibrida: Integrasi dengan Heuristik Scheduling

Karena dimensi scheduling (sequence-dependent setup) bersifat kombinatorial dan NP-hard, Lead Researchers (2025) mengusulkan *decomposition architecture* sebagai berikut:

1. **Master Problem (MP):** Model stokastik MILP menentukan lot size per periode untuk setiap produk, menghasilkan *production target* mingguan.
2. **Subproblem (SP):** Constraint Programming (CP) atau Tabu Search menyelesaikan detail sequencing harian, dengan input lot size dari MP.
3. **Iterative Coordination:** *Benders decomposition* atau *Lagrangian relaxation* menjamin konsistensi solusi.

Fungsi objective agregat dengan bobot $\lambda$:

$$Z_{hybrid} = \lambda \cdot Z_{MP} + (1-\lambda) \cdot Z_{SP} + \rho \cdot \text{Violation}_{capacity}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di industri mengikuti kerangka SOP 7-tahap yang diadaptasi dari praktik APS (*Advanced Planning Systems*) dan konsisten dengan APICS/SCOR framework:

**Tahap 1 — Pengumpulan Data Historis & Karakterisasi Permintaan.**
Kumpulkan time series permintaan minimal 36–60 periode. Uji stasioneritas (Augmented Dickey-Fuller test), identifikasi tren dan musiman, kemudian estimasi parameter MMFE ($\phi$, $\sigma_\tau$) menggunakan Maximum Likelihood Estimation. Validasi dengan *backtesting* out-of-sample MAPE < 15%.

**Tahap 2 — Pembuatan Skenario Stokastik.**
Generate $N = 200\text{--}1000$ skenario permintaan menggunakan Monte Carlo simulation berdasarkan parameter MMFE. Reduksi skenario menggunakan teknik *moment matching* atau *scenario reduction* (Kaut-Wallace algorithm) menjadi 20–50 skenario representatif untuk tractability.

**Tahap 3 — Formulasi Master Problem.**
Encode model two-stage stochastic MILP dalam solver (Gurobi, CPLEX, atau Xpress). Parameter tuning: MIPGap = 0.5%, time limit = 300–900 detik. Validasi infeasibility detection.

**Tahap 4 — Eksekusi Subproblem Scheduling.**
Untuk setiap skenario, jalankan CP model atau metaheuristic (GA dengan populasi 100, 500 generasi; atau Tabu Search dengan tabu list size 50). Output: sequence feasible untuk setiap shift.

**Tahap 5 — Iterasi Benders/Lagrangian.**
Hitung dual prices dari capacity constraints di SP, kirim sebagai *cutting planes* ke MP. Iterasi berlanjut hingga gap optimilitas < 1% atau max 20 iterasi.

**Tahap 6 — Implementasi Rolling Horizon.**
Setiap periode (mingguan), re-run optimasi dengan forecast terbaru. Keputusan lot size hanya dieksekusi untuk *frozen horizon* (1–2 periode ke depan); *sliding horizon* (3–6 periode) digunakan untuk *capacity reservation*; *speculative horizon* (>6 periode) hanya informasional.

**Tahap 7 — Monitoring KPI & Continuous Improvement.**
Pantau Service Level (Fill Rate ≥ 95%), Inventory Turnover (target 8–12x per tahun), Setup Frequency, dan Plan Adherence. Bandingkan dengan baseline deterministik; target cost reduction 3–8% sesuai temuan Forel dan Grunow (2023).

Diagram alir proses mengikuti pola *closed-loop MPC (Model Predictive Control)*: Plan → Execute → Monitor → Revise Forecast → Re-plan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Pertimbangkan pabrik FMCG dengan 3 lini produk (A, B, C) pada 2 mesin (M1, M2) selama horizon $T = 4$ periode (bulan). Data biaya:

| Parameter | Produk A | Produk B | Produk C |
|---|---|---|---|
| $c_t$ (biaya produksi/unit) | 10 | 12 | 15 |
| $h_t$ (holding cost/unit/bulan) | 1.0 | 1.2 | 1.5 |
| $s_t$ (setup cost) | 200 | 250 | 300 |
| $p_t$ (backorder penalty/unit) | 5 | 6 | 8 |

Kapasitas: $C_{M1} = 1000$ unit/bulan, $C_{M2} = 800$ unit/bulan. Demand distribution (MMFE, $\phi = 0.7$):

| $t$ | $\mu_t$ (A, B, C) | $\sigma_t$ (A, B, C) |
|---|---|---|
| 1 | (400, 300, 200) | (40, 30, 25) |
| 2 | (450, 320, 220) | (50, 35, 30) |
| 3 | (500, 350, 250) | (60, 40, 35) |
| 4 | (550, 380, 280) | (70, 45, 40) |

### 4.2 Perhitungan Manual (Skenario Tunggal, Realisasi = Mean Demand)

Untuk penyederhanaan, gunakan realisasi $\tilde{d}_t = \mu_t$. Misalkan semua produk pada M1. Variabel keputusan: produksi di awal periode untuk menutupi beberapa periode sekaligus (Wagner-Whitin logic).

**Produk A:** $d = [400, 450, 500, 550]$, $c=10$, $h=1$, $s=200$.
- Opsi lot 1: produksi 400 di t=1 → cost $= 10 \cdot 400 + 200 = 4200$
- Opsi lot 2 (cover t=1-2): $X_1 = 850$, $I_1 = 400$ → cost $= 10 \cdot 850 + 1 \cdot 400 + 200 = 9100$
- Opsi lot 3 (cover t=1-3): $X_1 = 1350$, holding = $400 + 850 = 1250$ → cost $= 13500 + 1250 + 200 = 14950$
- Opsi lot 4 (cover t=1-4): $X_1