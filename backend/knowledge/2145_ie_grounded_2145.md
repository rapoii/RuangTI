# 2145 — Model Optimisasi Stokastik Hibrida pada Permasalahan Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu tantangan klasik yang terus berevolusi dalam rekayasa sistem manufaktur modern. Pada dasarnya, permasalahan ini berusaha menjawab dua keputusan manajerial yang saling terkait: (i) *berapa kuantitas* yang harus diproduksi pada setiap periode untuk memenuhi permintaan yang bersifat stokastik, dan (ii) *kapan* serta *pada mesin mana* urutan produksi tersebut harus dieksekusi agar total biaya sistem — yang terdiri dari biaya setup, biaya.inventory holding, biaya backordering, dan biaya overtime — dapat diminimalkan. Lead Researchers (2025) dalam naskah yang dipublikasikan di *Cuestiones de fisioterapia* berargumen bahwa pemisahan keputusan lot sizing dan scheduling secara sekuensial, seperti yang banyak dipraktikkan di industri, menghasilkan sub-optimalitas struktural karena informasi mengenai kapasitas mesin dan urutan operasi (*sequence-dependent setup*) tidak dipertimbangkan ketika keputusan kuantitas lot diambil. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

Konteks industri yang melatarbelakangi penelitian ini sangat relevan dengan realitas manufaktur kontemporer. Pada industri *consumer goods*, *pharmaceutical*, dan *semiconductor*, permintaan pasar memiliki volatilitas tinggi yang diperparah oleh *demand signal distortion* seperti efek Forrester (*bullwhip effect*). Dalam lingkungan seperti ini, perencanaan deterministik dengan permintaan *forecast* titik (*point forecast*) tunggal terbukti tidak cukup robust. Forel & Grunow (2023) menunjukkan dalam studi empiris berbasis simulasi pada data nyata bahwa pendekatan deterministik dengan *rolling-horizon planning* — yang merupakan praktik standar di industri — gagal menangkap nilai ekonomis dari pembaruan forecast yang terjadi secara berkala. Mereka memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) sebagai jembatan antara formulasi stokastik akademis dengan praktik rolling-horizon. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881).

Urgensi ekonomis dari integrasi dua keputusan ini juga semakin besar ketika *setup time* dan *setup cost* bersifat *sequence-dependent* (misalnya pada industri cetak, kaca, dan baja) karena biaya transisi antar-produk pada mesin yang sama dapat melebihi biaya produksi itu sendiri. Tanpa integrasi, solusi yang dihasilkan berisiko *infeasible* atau memiliki *safety stock* yang berlebihan. Lead Researchers (2025) menjawab tantangan ini dengan mengusulkan model optimisasi stokastik hibrida yang menggabungkan *two-stage stochastic programming* untuk lot sizing dengan *constraint programming* atau *mixed-integer programming* untuk penjadwalan detail pada lantai produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Himpunan

Formulasi hibrida yang diusulkan menggabungkan elemen *two-stage stochastic programming* dengan variabel keputusan diskret. Notasi yang digunakan adalah:

- $T = \{1, 2, \ldots, |T|\}$: himpunan periode perencanaan diskret
- $P = \{1, 2, \ldots, |P|\}$: himpunan produk (*items*)
- $M = \{1, 2, \ldots, |M|\}$: himpunan mesin produksi
- $\Omega = \{\omega_1, \omega_2, \ldots, \omega_{|\Omega|}\}$: himpunan skenario permintaan dengan probabilitas $p_\omega$, $\sum_{\omega \in \Omega} p_\omega = 1$
- $I_0$: inventory awal (unit)
- $d_{p,t,\omega}$: permintaan produk $p$ pada periode $t$ di skenario $\omega$ (variabel random)

### 2.2 Parameter Biaya

- $s_{p,t}$: biaya setup produk $p$ pada periode $t$ (rupiah)
- $h_{p,t}$: biaya *holding* per unit per periode (rupiah)
- $b_{p,t}$: biaya *backorder* per unit per periode (rupiah)
- $c_{p,t}$: biaya produksi variable per unit (rupiah)
- $\sigma_{i,j}$: *sequence-dependent setup time* antara produk $i$ dan $j$ (jam)
- $K_m$: kapasitas reguler mesin $m$ pada periode $t$ (jam)

### 2.3 Variabel Keputusan

- $q_{p,t,\omega} \geq 0$: kuantitas produksi produk $p$ pada periode $t$ di skenario $\omega$
- $y_{p,t,\omega} \in \{0,1\}$: 1 jika setup produk $p$ di periode $t$ (skenario $\omega$) dilakukan
- $I_{p,t,\omega} \in \mathbb{R}$: level inventory (positif = on-hand, negatif = backorder)
- $x_{i,j,m,t,\omega} \in \{0,1\}$: 1 jika produk $i$ diikuti langsung oleh produk $j$ pada mesin $m$ di periode $t$ skenario $\omega$
- $z_{p,m,t,\omega} \in \{0,1\}$: 1 jika produk $p$ diproses pada mesin $m$ di periode $t$

### 2.4 Formulasi Objective Function

Fungsi tujuan meminimalkan *expected total cost* seluruh skenario:

$$\min Z = \sum_{\omega \in \Omega} p_\omega \left[ \sum_{t \in T} \sum_{p \in P} \left( s_{p,t} y_{p,t,\omega} + c_{p,t} q_{p,t,\omega} + h_{p,t} I_{p,t,\omega}^{+} + b_{p,t} I_{p,t,\omega}^{-} \right) \right]$$

di mana $I_{p,t,\omega}^{+} = \max(I_{p,t,\omega}, 0)$ dan $I_{p,t,\omega}^{-} = \max(-I_{p,t,\omega}, 0)$ memisahkan on-hand inventory dan backorder.

### 2.5 Konstrain Utama

**a) Inventory balance constraint:**
$$I_{p,t,\omega} = I_{p,t-1,\omega} + q_{p,t,\omega} - d_{p,t,\omega}, \quad \forall p, t, \omega$$

**b) Production-setup linking:**
$$q_{p,t,\omega} \leq Q^{max}_{p,t} \cdot y_{p,t,\omega}, \quad \forall p, t, \omega$$

**c) Kapasitas mesin (sequence-dependent):**
$$\sum_{p \in P} \left( \tau_p \cdot q_{p,t,\omega} \right) + \sum_{i \in P} \sum_{j \in P, j \neq i} \sigma_{i,j} \cdot x_{i,j,m,t,\omega} \leq K_m, \quad \forall m, t, \omega$$

**d) Sequence continuity (variabel $x$ linking dengan $y$):**
$$\sum_{j \in P, j \neq i} x_{i,j,m,t,\omega} = y_{i,t,\omega} \cdot \mathbb{1}_{\text{machine } m \text{ digunakan}}, \quad \forall i, m, t, \omega$$

### 2.6 Model MMFE untuk Evolusi Forecast (Forel & Grunow, 2023)

Forel & Grunow (2023) memperkenalkan MMFE yang memodelkan *update* forecast sebagai *martingale*:

$$\hat{d}_{p,t}^{\tau+1} = \hat{d}_{p,t}^{\tau} + \varepsilon_{p,t}^{\tau+1}, \quad E[\varepsilon_{p,t}^{\tau+1} | \mathcal{F}_\tau] = 0$$

di mana $\hat{d}_{p,t}^{\tau}$ adalah forecast yang tersedia di titik keputusan $\tau$ untuk permintaan aktual di periode $t$. Dengan MMFE, struktur korelasi antar skenario di tiap *rolling-horizon* revisi dapat direpresentasikan secara eksplisit, sehingga *expected cost* yang dihitung oleh model mencerminkan informasi riil yang tersedia pada saat keputusan diambil (DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Pendekatan ini meningkatkan relevansi praktis formulasi stokastik yang secara historis dikritik karena mengasumsikan informasi sempurna (*clairvoyant*).

### 2.7 Mekanisme Hibrida

Elemen "hibrida" pada Lead Researchers (2025) terletak pada arsitektur dua-layer: (i) *outer loop* berupa *stochastic mixed-integer program* untuk lot sizing di mana skenario diselesaikan secara simultan, dan (ii) *inner loop* berupa *constraint-based scheduler* yang memvalidasi feasibilitas sequence-dependent setup pada kapasitas mesin. Validasi ini mencegah keputusan lot sizing yang secara matematis optimal di tingkat korporat namun tidak dapat dijadwalkan pada lantai produksi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida Lead Researchers (2025) di lingkungan industri mengikuti *Standard Operating Procedure* (SOP) delapan tahap:

**Tahap 1 — Pengumpulan Data Historis.** Data permintaan 24–36 bulan terakhir, kapasitas mesin, bill-of-material, dan *sequence-dependent setup matrix* dikumpulkan dari sistem ERP/MES. Distribusi permintaan diuji menggunakan *Anderson-Darling* dan *Kolmogorov-Smirnov* untuk memilih bentuk parametrik (Normal, Poisson, atau NegBin).

**Tahap 2 — Konstruksi Pohon Skenario.** Menggunakan MMFE dari Forel & Grunow (2023), dibangun *scenario tree* dengan *branching factor* 3–5 per periode dan kedalaman horizon matching dengan *rolling-horizon* planning yang digunakan perusahaan (umumnya 4–12 minggu). Total skenario $|\Omega|$ dibatasi 50–200 untuk tractability.

**Tahap 3 — Formulasi Model.** Model MILP/SCNP di-*encode* dalam bahasa *algebraic modeling* (GAMS, AMPL, atau Pyomo) dengan ukuran tipikal 5.000–50.000 variabel biner.

**Tahap 4 — Solusi Lot Sizing (Outer Loop).** Solver *branch-and-cut* (CPLEX, Gurobi) digunakan dengan *time limit* 600 detik. Gap optimalitas ditoleransi ≤ 1.5%.

**Tahap 5 — Validasi Scheduling (Inner Loop).** Solusi lot sizing dimasukkan ke *constraint programming scheduler* untuk mengecek *sequence-dependent feasibility*. Jika infeasible, *penalty* ditambahkan dan iterasi dilakukan.

**Tahap 6 — Output: Master Production Schedule (MPS).** MPS yang dihasilkan merepresentasikan keputusan lot sizing sekaligus sequence-nya.

**Tahap 7 — Implementasi Rolling-Horizon.** Setiap periode (mingguan), MPS di-*re-optimize* menggunakan forecast yang baru tersedia.

**Tahap 8 — Monitoring KPI.** KPI utama: *service level* (Type-1 ≥ 95%, Type-2 ≥ 98%), *setup cost reduction*, *inventory turn*, dan *schedule adherence rate* ≥ 90%.

### Diagram Alir Proses Logika

```
┌──────────────────────────────────────────────┐
│  INPUT: Data historis, kapasitas, permintaan │
└──────────────────┬───────────────────────────┘
                   ▼
┌──────────────────────────────────────────────┐
│  Tahap 1-2: Bangun scenario tree via MMFE    │
└──────────────────┬───────────────────────────┘
                   ▼
┌──────────────────────────────────────────────┐
│  Tahap 3-4: Solve Outer Loop (Stochastic     │
│             MILP untuk lot sizing)           │
└──────────────────┬───────────────────────────┘
                   ▼
┌──────────────────────────────────────────────┐
│  Tahap 5:  Inner Loop Scheduler Validation   │
│             (sequence-dependent feasibility) │
└─────┬──────────────────────────────┬─────────┘
      │ Infeasible                   │ Feasible
      ▼                              ▼
┌──────────────┐          ┌──────────────────────┐
│ Tambah penalty│          │ Output: MPS final    │
│ & re-solve    │          │ + sequence detail    │
└──────┬───────┘          └──────────┬───────────┘
       └──────────┬─────────────────┘
                  ▼
       ┌──────────────────────────────┐
       │  Tahap 7-8: Rolling horizon  │
       │  update + monitoring KPI     │
       └──────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Pertimbangkan lini produksi PT XYZ (industri minuman ringan) dengan karakteristik:
- $|P| = 3$ produk (A: air mineral 600ml, B: