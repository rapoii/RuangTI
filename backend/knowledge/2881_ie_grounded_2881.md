# 2881 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan tulang punggung perencanaan operasional pada industri manufaktur, FMCG, semikonduktor, dan farmasi. Dalam praktik nyata, permintaan pasar tidak pernah deterministik — fluktuasi musiman, *bullwhip effect*, perubahan mendadak selera konsumen, serta disrupsi rantai pasok pasca-pandemi telah menciptakan kebutuhan mendesak akan model optimasi yang secara eksplisit mengelola ketidakpastian (Forel & Grunow, 2023; DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Secara historis, praktisi industri cenderung mengabaikan pendekatan akademik yang memperlakukan permintaan sebagai variabel acak. Forel dan Grunow (2023) menunjukkan bahwa mayoritas perusahaan masih menggunakan model deterministik dengan *safety stock* tinggi, lalu mengakomodasi ketidakpastian melalui *rolling-horizon planning* dengan pembaruan ramalan (*forecast update*) yang频繁. Kesenjangan antara riset akademik dan praktik industri ini menjadi motivasi utama pengembangan model stokastik yang kompatibel dengan kerangka *rolling-horizon* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Paper Lead Researchers (2025) yang terbit dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengusulkan **model optimasi stokastik hibrida** yang memadukan pemrograman stokastik dua-tahap (*two-stage stochastic programming*) untuk keputusan ukuran lot dengan heuristik/constraint programming untuk penjadwalan tingkat-detail mesin. Urgensi ekonominya sangat nyata: menurut literatur lot sizing klasik (Wagner-Whitin, Silver-Meal, atau Dixon-Silver), kesalahan estimasi permintaan 10–15% dapat meningkatkan total biaya persediaan dan *setup* sebesar 5–12%. Dalam industri dengan margin tipis seperti baja, kertas, dan kimia, angka ini等同于 kerugian jutaan dolar per tahun untuk pabrik skala menengah.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Dasar Lot Sizing Deterministik (Extended Silver-Meal)

Formulasi dasar capacitated lot sizing problem (CLSP) dengan $T$ periode, biaya produksi $c_t$, biaya simpan $h_t$, dan biaya *setup* $f_t$:

$$\min Z = \sum_{t=1}^{T} \left( c_t p_t + h_t I_t + f_t x_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + p_t - d_t, \quad \forall t \in \{1,\ldots,T\}$$

$$p_t \leq C_t x_t, \quad x_t \in \{0,1\}, \quad p_t, I_t \geq 0$$

di mana $d_t$ adalah permintaan deterministik, $p_t$ kuantitas produksi, $I_t$ inventori akhir periode, $x_t$ variabel biner setup, dan $C_t$ kapasitas produksi.

### 2.2 Formulasi Stokastik Dua-Tahap (Lead Researchers, 2025)

Model hibrida Lead Researchers (2025) memperluas CLSP dengan ruang skenario $\Omega$ untuk merepresentasikan realisasi permintaan $\tilde{d}_t(\omega)$. Struktur dua-tahap:

- **Tahap-1 (*here-and-now*):** keputusan lot sizing $(x_t, p_t)$
- **Tahap-2 (*recourse*):** keputusan penjadwalan detail dan *backorder* $B_t^+, B_t^-$

Fungsi tujuan:

$$\min \; \sum_{t=1}^{T} f_t x_t + \mathbb{E}_{\omega}\left[ \sum_{t=1}^{T} \left( c_t p_t(\omega) + h_t I_t^+(\omega) + b_t B_t^-(\omega) + \pi_t y_t(\omega) \right) \right]$$

di mana $\pi_t$ adalah biaya *penalti* penjadwalan akibat ketidakseimbangan urutan pekerjaan. Diskretisasi skenario menghasilkan $|\Omega| = S$ realization, sehingga:

$$\min \; \sum_{t=1}^{T} f_t x_t + \frac{1}{S} \sum_{s=1}^{S} \sum_{t=1}^{T} \left( c_t p_t^s + h_t I_t^{+s} + b_t B_t^{-s} + \pi_t y_t^s \right)$$

### 2.3 Model Martingale untuk Evolusi Ramalan (Forel & Grunow, 2023)

Forel dan Grunow (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menggunakan *Martingale Model of Forecast Evolution* (MMFE):

$$\hat{d}_{t+1|t} = \hat{d}_{t|t} + \varepsilon_{t+1}$$

dengan $\mathbb{E}[\varepsilon_{t+1}] = 0$ dan $\text{Var}(\varepsilon_{t+1}) = \sigma^2 (t+1)^{\alpha}$ di mana $\alpha \in [1,2]$ adalah parameter *smoothing* yang diestimasi dari data historis. Model ini menangkap fakta bahwa varians kesalahan ramalan *meningkat* seiring lead time.

### 2.4 Komponen Hibrida: Lot Sizing + Scheduling

Mekanisme hibrida menggabungkan:
1. **MIP solver** (CPLEX/Gurobi) untuk *master problem* lot sizing.
2. **Constraint Programming** atau *dispatching rule* (ATC, SPT) untuk subproblem penjadwalan detail pada mesin paralel.
3. **Iterasi Benders** atau *Lagrangian decomposition* untuk menjamin konsistensi keputusan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti tahapan sebagai berikut (tersandar pada praktik SAP IBP dan AspenTech):

**Tahap A — Pengumpulan Data Historis:** Minimal 36 bulan data permintaan harian/mingguan untuk mengestimasi parameter MMFE ($\sigma, \alpha$) dan membangun pohon skenario dengan *moment matching* atau *scenario reduction* (kandidat algoritma: Kantorovich, fast-forward selection).

**Tahap B — Formulasi Model:** Bangun formulasi stokastik dua-tahap menggunakan bahasa pemodelan (AMPL/GAMS/Pyomo), integrasikan solver MIP untuk lot sizing.

**Tahap C — Penyelesaian Hibrida:** Jalankan dekomposisi: (i) selesaikan master problem, (ii) kirim solusi ke modul penjadwalan, (iii) evaluasi *recourse cost*, (iv) tambah *cut* bila perlu.

**Tahap D — Validasi Simulasi:** Jalankan *Monte Carlo* pada $N=10.000$ skenario untuk mengukur *expected cost*, *Value of Stochastic Solution* (VSS), dan *Expected Value of Perfect Information* (EVPI).

**Tahap E — Roll-out Operasional:** Terapkan kebijakan *rolling-horizon* dengan periode tinjauan mingguan, integrasikan pembaruan ramalan ke dalam modul stokastik.

Diagram alir logika keputusan:
```
[Data Permintaan Historis] → [Estimasi MMFE] → [Generate Pohon Skenario]
         ↓
[Master