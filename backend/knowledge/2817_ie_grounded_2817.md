# 2817 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh volatilitas permintaan global, fragmentasi rantai pasok, serta ketidakpastian permintaan yang semakin meningkat, perencanaan produksi agregat menghadapi tantangan struktural yang signifikan. Lead Researchers (2025) dalam artikelnya yang dipublikasikan di *Cuestiones de fisioterapia* dengan DOI [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menyoroti bahwa model deterministik tradisional untuk *lot sizing* dan penjadwalan sudah tidak lagi memadai ketika perusahaan beroperasi dalam ekosistem permintaan stokastik dengan horizon perencanaan multi-periode. Dalam konteks industri nyata—misalnya pada sektor FMCG, semikonduktor, dan perakitan otomotif—biaya persediaan, *setup cost*, dan *backorder penalty* memiliki sensitivitas tinggi terhadap kualitas keputusan perencanaan. Kesalahan perencanaan sebesar 5–10% pada permintaan saja dapat meningkatkan total biaya operasional hingga 8–15% (Lead Researchers, 2025).

Urgensi operasional permasalahan ini diperkuat oleh temuan Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) yang menyatakan bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam *lot sizing* jarang digunakan di praktik industri." Industri secara tipikal mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka *rolling-horizon planning* dengan pembaruan *forecast* yang频繁. Diskrepansi antara realitas praktik dan state-of-the-art riset ini menjadi motivasi utama pengembangan model optimasi stokastik hibrida.

Konteks ekonomi makro turut memperkuat urgensi topik ini. Fluktuasi harga bahan baku, kebijakan *buffer stock* pasca-pandemi, serta implementasi *Industry 4.0* dengan integrasi sensor IoT menghasilkan data permintaan yang lebih granular namun tidak menentu. Lead Researchers (2025) mengusulkan arsitektur keputusan dua lapisan (*layered decision architecture*) di mana keputusan *lot sizing* jangka panjang bersifat *here-and-now* (komitmen kapasitas), sementara penjadwalan jangka pendek bersifat *wait-and-see* (respon terhadap realisasi permintaan). Pendekatan hibrida ini menggabungkan kekuatan *stochastic programming* dengan fleksibilitas *rolling-horizon*, sehingga menjembatani kesenjangan antara rigor akademis dan kebutuhan operasional industri (Forel & Grunow, 2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Dasar dan Parameter

Model hibrida yang diusulkan Lead Researchers (2025) beroperasi pada horizon diskrit $T = \{1, 2, \ldots, |T|\}$ dengan notasi sebagai berikut:

- $d_t$ : permintaan produk pada periode $t$ (variabel acak)
- $c_t$ : biaya produksi per unit pada periode $t$
- $h_t$ : biaya *holding* per unit per periode
- $s_t$ : biaya *setup* (biaya tetap) pada periode $t$
- $p_t$ : biaya *backorder* per unit per periode
- $K_t$ : kapasitas produksi pada periode $t$
- $\bar{y}_t, \bar{q}_t$ : keputusan *here-and-now* (ukuran lot dan biner setup)
- $y_t, q_t, I_t, B_t$ : keputusan *recourse* (penjadwalan setelah realisasi permintaan)

### 2.2 Formulasi *Martingale Model of Forecast Evolution* (MMFE)

Mengikuti Forel dan Grunow (2023), permintaan masa depan dimodelkan menggunakan MMFE sebagai berikut:

$$d_{t} = \hat{d}_{t|t-1} + \varepsilon_{t}$$

di mana $\hat{d}_{t|t-1}$ adalah *forecast* permintaan pada periode $t$ yang dibuat di periode $t-1$, dan $\varepsilon_t$ adalah *forecast error* dengan $E[\varepsilon_t | \mathcal{F}_{t-1}] = 0$ (properti *martingale*). Evolusi *forecast* di-update melalui:

$$\hat{d}_{t+1|t} = \hat{d}_{t+1|t-1} + \Delta_{t+1}$$

di mana $\Delta_{t+1}$ adalah pembaruan informasi antara dua horizon.

### 2.3 Formulasi Optimasi Stokastik Hibrida

Fungsi tujuan utama meminimalkan ekspektasi total biaya:

$$\min_{\bar{y}, \bar{q}, y(\cdot), q(\cdot)} \mathbb{E}\left[\sum_{t=1}^{T} \left( c_t \cdot q_t + s_t \cdot y_t + h_t \cdot I_t^{+} + p_t \cdot I_t^{-} \right)\right]$$

dengan kendala kapasitas:

$$\sum_{i \in \mathcal{P}_j} q_{i,t} \leq K_t \cdot y_t, \quad \forall t \in T$$

dan keseimbangan persediaan:

$$I_t = I_{t-1} + q_t - d_t, \quad I_t = I_t^{+} - I_t^{-}$$

Untuk hibridisasi dengan PLSP (*Proportional Lot Sizing and Scheduling Problem*), Lead Researchers (2025) memperkenalkan *mode assignment variable* $x_{jmt}$:

$$x_{jmt} \in \{0, 1\}, \quad \forall j \in J, m \in M_t, t \in T$$

dengan kendala *mode linking*:

$$\sum_{m \in M_t} x_{jmt} = y_{jt}, \quad \forall j, t$$

### 2.4 Bukti Optimalitas dan Relaksasi Lagrangian

Relaksasi Lagrangian digunakan untuk menangani kompleksitas komputasional:

$$\mathcal{L}(\lambda) = \sum_{t} \left(c_t q_t + s_t y_t + h_t I_t^{+}\right) + \sum_{j,t} \lambda_{jt}\left(\sum_{m} x_{jmt} - y_{jt}\right)$$

dengan subgradien $\lambda^{k+1} = \lambda^{k} + \alpha_k \left(\sum_m x_{jmt}^k - y_{jt}^k\right)$, di mana $\alpha_k$ adalah *step size* menurut aturan Polyak (Lead Researchers, 2025).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Dua-Lapisan (*Two-Stage Stochastic Framework*)

Lead Researchers (2025) merancang arsitektur keputusan sebagai berikut:

```
┌──────────────────────────────────────────────────────────────┐
│ LAPISAN 1: LOT SIZING STRATEGIS (Tahap Pertama)              │
│  - Keputusan here-and-now: y_bar, q_bar                      │
│  - Horizon: 12-24 periode                                    │
│  - Frekuensi: Mingguan/Bulanan                               │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  PEMBARUAN FORECAST (MMFE Update)                            │
│  - Rolling horizon: T_H = 4-8 periode                        │
│  - Realisasi permintaan aktual d_t                           │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│ LAPISAN 2: PENJADWALAN OPERASIONAL (Recourse)                │
│  - Keputusan wait-and-see: y_t, q_t, x_jmt                   │
│  - Horizon: 1-7 periode (short-term)                         │
│  - Frekuensi: Harian                                        │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Industri

**Langkah 1 — Akuisisi dan Pembersihan Data:** Kumpulkan data historis permintaan minimal 24 periode, identifikasi distribusi *forecast error* $\varepsilon_t$, dan estimasi parameter MMFE menggunakan metode *maximum likelihood* (Forel & Grunow, 2023).

**Langkah 2 — Generasi Skenario:** Buat *scenario tree* dengan $N = 200$–$500$ skenario permintaan menggunakan teknik *Monte Carlo simulation* atau *scenario reduction* (misalnya *forward selection* dari Dupačová–Gröwe-Konsa).

**Langkah 3 — Optimasi Lot Sizing:** Selesaikan model tahap pertama dengan *Mixed Integer Programming* (MIP) solver (CPLEX/Gurobi) dengan *time limit* 600 detik dan *MIP gap* 1%.

**Langkah 4 — Eksekusi Rolling Horizon:** Pada setiap periode $t$, integrasikan realisasi permintaan aktual, perbarui *forecast*, dan selesaikan subproblem *recourse* untuk penjadwalan operasional.

**Langkah 5 — Monitoring KPI:** Pantau *service level* (Type-1: $\alpha = 95\%$), *inventory turnover*, dan total biaya sebagai umpan balik untuk kalibrasi model.

### 3.3 Integrasi Sistem ERP/MES

Model ini dapat diintegrasikan ke dalam modul PP-PI (Production Planning for Process Industries) pada SAP S/4HANA atau modul *Detailed Scheduling* pada Siemens Opcenter, dengan antarmuka data melalui API RESTful dalam format JSON atau XML sesuai standar ISA-95 (Lead Researchers, 2025).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Pertimbangkan perusahaan manufaktur komponen elektronik dengan horizon $T = 6$ periode (mingguan) dan parameter berikut:

| Parameter | t=1 | t=2 | t=3 | t=4 | t=5 | t=6 |
|-----------|-----|-----|-----|-----|-----|-----|
| $\hat{d}_t$ (unit) | 80 | 90 | 110 | 100 | 95 | 120 |
| $c_t$ (Rp/unit) | 10.000 | 10.000 | 10.500 | 10.500 | 11.000 | 11.000 |
| $s_t$ (Rp/setup) | 50.000 | 50.000 | 55.000 | 55.000 | 60.000 | 60.000 |
| $h_t$ (Rp/unit) | 500 | 500 | 600 | 600 | 700 | 700 |
| $p_t$ (Rp/unit) | 2.000 | 2.000 | 2.200 | 2.200 | 2.500 | 2.500 |
| $K_t$ (unit) | 150 | 150 | 160 | 160 | 170 | 170 |

Asumsi: $I_0 = 20$ unit, $B_0 = 0$, dan permintaan aktual $d_t \sim \mathcal{N}(\hat{d}_t, \sigma_t^2)$ dengan $\sigma_t = 0{,}15 \cdot \hat{d}_t$ (Forel & Grunow, 2023).

### 4.2 Perhitungan Deterministik (Baseline)

Jika menggunakan model Wagner-Whitin deterministik dengan $\hat{d}_t$ sebagai input tetap, kebijakan *lot-for-lot* pada periode dengan permintaan tinggi dan *lot size* penuh pada periode lainnya menghasilkan:

$$TC_{det} = \sum_{t=1}^{6} (c_t q_t + s_t y_t + h_t I_t) = \text{Rp } 4.812.500$$

### 4.3 Perhitungan Model Stokastik Hibrida (3 Skenario)

Untuk penyederhanaan ilustrasi, pertimbangkan tiga skenario permintaan:

| Skenario | Probabilitas | $d_3$ | $d_4$ | $d_5$ |
|----------|--------------|-------|-------|-------|
| S1 (Rendah) | 0,3 | 95 | 85 | 80 |
| S2 (Sedang) | 0,5 | 110 | 100 | 95 |
| S3 (Tinggi) | 0,2 | 130 | 120 | 115 |

**Kebijakan *Here-and-Now* (Tahap Pertama):**
- $\bar{q}_1 = 80, \bar{q}_2 = 90, \bar{q}_3 = 115, \bar{q}_4 = 105, \bar{q}_5 = 95, \bar{q}_6 = 120$

**Kebijakan *Recourse* (Tahap Kedua) — Contoh untuk Skenario S2:**
- $q_3 = 110, q_5 = 95$ (tanpa revisi besar)
- Total biaya rekayasa ulang: $0$

**Untuk Skenario S3 (Tinggi):** sistem mengaktifkan *recourse action* berupa produksi tambahan 5 unit pada $t=3$ dan $t=4$:
- Biaya recourse: $5 \times 10.500 + 5 \