# 2193 — Optimasi Stokastik Hibrida untuk Lot Sizing dan Penjadwalan Produksi dalam Kerangka Perencanaan Rolling-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LS&S) menempati posisi strategis dalam sistem perencanaan produksi manufaktur modern karena secara langsung menentukan besaran biaya inventaris, biaya setup, tingkat pelayanan pelanggan, dan utilisasi kapasitas. Lead Researchers (2025) dalam jurnal *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti bahwa pada lingkungan permintaan yang berfluktuasi tinggi—seperti industri FMCG, semikonduktor, dan farmasi—model deterministik konvensional (Economic Order Quantity, Wagner-Whitin, atau Silver-Meal) terbukti gagal menangkap dinamika ketidakpastian permintaan (*demand uncertainty*) sehingga menghasilkan rencana produksi yang suboptimal. Studi mereka mengusulkan pendekatan *hybrid stochastic optimization* yang mengintegrasikan pemrograman stokastik dua-tahap (*two-stage stochastic programming*) dengan logika *constraint programming* untuk penjadwalan pada lantai produksi.

Konteks industri yang melatarbelakangi riset ini semakin relevan ketika Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mendokumentasikan adanya *research-practice gap* yang mencolok: "Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates" (Forel & Grunow, 2023). Temuan empiris mereka didasarkan pada observasi di industri proses kontinu dan diskrit di Eropa yang menunjukkan bahwa 78% perusahaan manufaktur mengandalkan sistem MRP deterministik dengan *safety stock* sebagai *buffer* tunggal, meskipun metode stokastik secara teoritis mampu menurunkan biaya operasional hingga 8–15%.

Urgensi ekonomis dari masalah LS&S juga tecermin dari studi Forel & Grunow (2023) yang membuktikan bahwa *forecast evolution models*—khususnya *Martingale Model of Forecast Evolution* (MMFE)—secara signifikan mampu mereduksi *actual costs* (biaya riil pasca-implementasi) ketika diintegrasikan dengan mekanisme *production recourse* dalam kerangka *rolling-horizon*. MMFE memungkinkan perencana mengantisipasi bagaimana *forecast update* di periode berikutnya akan mengubah struktur keputusan optimal, sehingga lot size periode awal tidak hanya optimal terhadap informasi saat ini, melainkan juga *robust* terhadap distribusi permintaan masa depan.

Dengan demikian, dokumen Knowledge Base Modul 2193 ini memadukan perspektif hibrida (stochastic + constraint programming) dari Lead Researchers (2025) dengan kerangka *forecast evolution* dari Forel & Grunow (2023) untuk memberikan panduan operasional yang komprehensif bagi praktisi rekayasa produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Stokastik Dasar

Formulasi Lead Researchers (2025) mengikuti kerangka *two-stage stochastic programming* yang diperkenalkan Dantzig (1955) dan dikembangkan untuk konteks lot sizing oleh Gavish & Graves (1981). Fungsi tujuan meminimasi ekspektasi total biaya yang terdiri dari biaya setup, biaya produksi, biaya penyimpanan, dan biaya backorder. Parameter notasi:

- $T$: horizon perencanaan diskret (misal $T = 12$ periode/bulan)
- $i \in \{1, \dots, m\}$: indeks produk
- $t \in \{1, \dots, T\}$: indeks periode waktu
- $\omega \in \Omega$: skenario permintaan dengan probabilitas $P(\omega)$
- $d_{i,t}(\omega)$: permintaan acak produk $i$ di periode $t$ pada skenario $\omega$
- $c^p_{i,t}$: biaya produksi per unit produk $i$ di periode $t$
- $c^h_{i,t}$: biaya simpan per unit produk $i$ di periode $t$
- $c^B_{i,t}$: biaya backorder per unit
- $s_{i,t}$: biaya setup (fixed cost)
- $X_{i,t}$: variabel keputusan biner setup ($1$ jika setup, $0$ jika tidak)
- $Q_{i,t}$: jumlah produksi produk $i$ di periode $t$
- $I_{i,t}$: level inventaris akhir periode
- $B_{i,t}$: level backorder akhir periode

Formulasi lengkap sebagai berikut (Lead Researchers, 2025):

$$
\min \; \mathbb{E}_{\omega} \left[ \sum_{i=1}^{m}\sum_{t=1}^{T} \left( s_{i,t} X_{i,t} + c^p_{i,t} Q_{i,t} + c^h_{i,t} I^+_{i,t} + c^B_{i,t} I^-_{i,t} \right) \right] \tag{1}
$$

dengan kendala:

$$
I^+_{i,t} - I^-_{i,t} = I^+_{i,t-1} - I^-_{i,t-1} + Q_{i,t} - d_{i,t}(\omega), \quad \forall i,t,\omega \tag{2}
$$

$$
Q_{i,t} \leq M \cdot X_{i,t}, \quad \forall i,t \tag{3}
$$

$$
Q_{i,t} \geq 0,\; X_{i,t} \in \{0,1\}, \quad \forall i,t \tag{4}
$$

$$
I^+_{i,t} \geq 0,\; I^-_{i,t} \geq 0, \quad \forall i,t,\omega \tag{5}
$$

dimana $M$ adalah *big-M* yang membatasi produksi hanya terjadi pada periode dengan setup.

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengadopsi MMFE dari Graves et al. (1986) untuk memodelkan evolusi forecast antar periode *rolling-horizon*. Misalkan $D_{i,t}$ adalah permintaan acak riil dan $F^k_{i,t}$ adalah *forecast* yang tersedia pada awal periode $k$ untuk permintaan di periode $t$ (dimana $k \leq t$). MMFE mengasumsikan:

$$
\mathbb{E}[D_{i,t} | \mathcal{F}_k] = F^k_{i,t}, \quad \forall k \leq t \tag{6}
$$

dengan *variance reduction* yang progresif:

$$
\text{Var}[D_{i,t} | \mathcal{F}_k] = \sigma^2_{i,t} \cdot \phi^{t-k}, \quad 0 < \phi < 1 \tag{7}
$$

Parameter $\phi$ merepresentasikan *smoothing coefficient* yang menentukan seberapa cepat informasi baru menggantikan forecast lama; secara empiris Forel & Grunow (2023) mengestimasi $\phi \in [0.6, 0.85]$ untuk data industri riil.

### 2.3 Formulasi Lot Sizing dengan Production Recourse

Untuk menangkap fleksibilitas *replanning*, Lead Researchers (2025) dan Forel & Grunow (2023) memperkenalkan variabel recourse $Q^r_{i,t}$ yang merepresentasikan koreksi produksi setelah informasi demand ter-update. Fungsi tujuan menjadi:

$$
\min \; \sum_{t=1}^{T}\left(s_{i,t} X_{i,t} + c^p_{i,t} Q_{i,t}\right) + \mathbb{E}_{\omega}\left[\sum_{t=1}^{T}\left(c^{pr}_{i,t} Q^r_{i,t}(\omega) + c^h_{i,t} I^+_{i,t}(\omega) + c^B_{i,t} I^-_{i,t}(\omega)\right)\right] \tag{8}
$$

dengan kendala recourse:

$$
I^+_{i,t}(\omega) - I^-_{i,t}(\omega) = I^+_{i,t-1}(\omega) - I^-_{i,t-1}(\omega) + Q_{i,t} + Q^r_{i,t}(\omega) - d_{i,t}(\omega) \tag{9}
$$

$$
0 \leq Q^r_{i,t}(\omega) \leq Q^r_{max} \tag{10}
$$

Kombinasi (1)–(10) inilah yang disebut sebagai *hybrid stochastic optimization model* karena menggabungkan keputusan *here-and-now* ($X_{i,t}, Q_{i,t}$) dengan keputusan *wait-and-see* ($Q^r_{i,t}(\omega)$).

### 2.4 Constraint Programming Layer untuk Penjadwalan

Untuk komponen scheduling pada *shared resource* (misalnya mesin, operator, atau *bottleneck*), Lead Researchers (2025) menambahkan *constraint programming* (CP) layer dengan notasi $C_i$ sebagai kapasitas:

$$
\sum_{i=1}^{m} \sum_{r \in R_{i,t}} p_{i,r} \cdot y_{i,r,t} \leq C_t, \quad \forall t \tag{11}
$$

$$
\sum_{r \in R_{i,t}} y_{i,r,t} = Q_{i,t}, \quad \forall i,t \tag{12}
$$

dimana $y_{i,r,t}$ adalah jumlah unit produk $i$ yang diproses pada resource $r$ di periode $t$, dan $p_{i,r}$ adalah waktu proses per unit. Logika CP menjamin *non-overlap* antar job pada mesin yang sama.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model hibrida ini mengikuti SOP enam-tahap yang distandarkan oleh Lead Researchers (2025) dengan adaptasi kerangka *rolling-horizon* Forel & Grunow (2023):

**Tahap 1 — Akuisisi & Pembersihan Data Historis.** Kumpulkan data permintaan historis minimal 36 periode, data kapasitas, biaya (setup, simpan, backorder, recourse), dan *lead time* per produk. Estimasi parameter distribusi permintaan (uji Anderson-Darling untuk normalitas, fitting Poisson untuk *low-volume items*).

**Tahap 2 — Konstruksi Skenario Demand.** Bangkitkan skenario melalui *Monte Carlo simulation* atau *Latin Hypercube Sampling*. Untuk dimensi besar, gunakan *scenario reduction* (Dupačová-Gröwe-Kometani) hingga $N_s \in [50, 200]$ skenario representatif.

**Tahap 3 — Inisialisasi Model MMFE.** Estimasi *smoothing coefficient* $\phi$ via *maximum likelihood* pada data historis. Validasi melalui *out-of-sample backtesting* dengan MAPE $< 10\%$.

**Tahap 4 — Solusi Optimasi Hibrida.** Gunakan *decomposition method* (Benders atau Progressive Hedging) untuk skala besar, atau langsung dengan solver MIP modern (Gurobi 11+, CPLEX 22+) yang mampu menangani formulasi (1)–(10) secara langsung untuk ukuran moderat.

**Tahap 5 — Layer CP untuk Penjadwalan Detail.** Output lot size dari tahap 4 dimasukkan ke CP solver (IBM CP Optimizer, Google OR-Tools CP-SAT) untuk menyusun urutan job pada setiap *resource*.

**Tahap 6 — Eksekusi Rolling-Horizon dengan Reschedule Trigger.** Terapkan *review period* $R = 1$ minggu. Setiap awal periode, *update forecast* dengan data terbaru, *re-run* model hibrida, dan terapkan *production recourse* $Q^r_{i,t}$ jika deviasi forecast melebihi *trigger threshold* $\delta = 1.96\sigma_{i,t}$.

Diagram alir proses:

```
┌──────────────────────┐
│ Data Historis        │
└──────────┬───────────┘
           ▼
┌──────────────────────┐    ┌───────────────────────┐
│ Estimasi Parameter   │───▶│ Bangkitkan Skenario   │
│ (μ, σ, φ)            │    │ (Monte Carlo/LHS)     │
└──────────┬───────────┘    └───────────┬───────────┘
           ▼                            ▼
┌──────────────────────┐    ┌───────────────────────┐
│ MMFE Calibration     │───▶│ Two-Stage Stochastic  │
│                      │    │ Programming (MIP)     │
└──────────┬───────────┘    └───────────┬───────────┘
           ▼                            ▼
┌──────────────────────────────────────────────────┐
│ Constraint Programming Layer (Penjadwalan)       │
└──────────────────────────┬───────────────────────┘
                           ▼
┌──────────────────────────────────────────────────┐
│ Rencana Lot Size + Jadwal Eksekusi (Periode t)   │
└──────────────────────────┬───────────────────────┘
                           ▼
              ┌────────────┴────────────┐
              ▼                         ▼
   ┌─────────────────┐       ┌──────────────────────┐
   │ Implementasi    │       │ Rolling-Horizon Next │
   │ Produksi t      │       │ Review (t+1)         │
   └─────────┬───────┘       └──────────────────────┘
             ▼
   ┌─────────────────┐
   │ Production      │
   │ Recourse Q^r    │──▶ re-trigger jika |deviasi|>δ
   └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Set Data Studi Kasus

Pertimbangkan lini produksi dua produk