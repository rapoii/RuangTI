# 1777 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh permintaan konsumen yang semakin fluktuatif, fragmentasi rantai pasok global, dan tekanan untuk menekan biaya inventaris tanpa mengorbankan *service level*, persoalan *lot sizing and scheduling* (penentuan ukuran lot dan penjadwalan produksi) menjadi salah satu keputusan operasional paling kritikal yang harus diselesaikan secara simultan. Lead Researchers (2025) dalam paper "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti jurang (*gap*) fundamental antara pendekatan akademis deterministik yang lazim diasumsikan dalam literatur klasik — seperti model Wagner-Whitin — dengan kompleksitas dunia nyata yang penuh ketidakpastian (*demand uncertainty*, *machine breakdowns*, dan *yield variability*). Dalam konteks industri riil, perusahaan manufaktur di sektor FMCG, otomotif, dan farmasi menghadapi *trade-off* langsung antara biaya *setup* (S) yang tetap tinggi per *changeover*, biaya *holding* (h) per unit per periode, serta biaya *backorder* atau *lost sales* yang muncul akibat *stockout*.

Urgensi ekonomis dari persoalan ini semakin kuat ketika dimasukkan dimensi stokastik. Sebagai contoh, fluktuasi permintaan musiman (*seasonal demand*) pada industri makanan dan minuman dapat menyebabkan *misalignment* hingga 25–40% antara rencana produksi awal dengan kebutuhan aktual, yang apabila tidak dikelola secara eksplisit akan menghasilkan *safety stock* yang berlebihan atau sebaliknya *stockout* yang merugikan. Studi Forel & Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara empiris membuktikan bahwa pendekatan akademis yang mempertimbangkan ketidakpastian permintaan secara eksplisit (stokastik) masih sangat jarang diadopsi di industri; praktisi lebih memilih model deterministik yang dijalankan dalam kerangka *rolling-horizon planning* dengan pembaruan *forecast* yang频繁. Paper Forel-Grunow ini menjadi penting karena menjembatani kesenjangan tersebut melalui formulasi *stochastic lot-sizing* yang mengadopsi *Martingale Model of Forecast Evolution* (MMFE) sehingga mampu mengantisipasi dinamika pembaruan ramalan dalam horizon perencanaan bergulir.

Konteks industri yang melatarbelakangi riset ini juga mencakup adopsi *Industry 4.0*, di mana data permintaan, kapasitas mesin, dan *lead time* dapat diperoleh secara *real-time* melalui integrasi ERP-MES-SCADA. Namun, kemampuan analitik untuk menerjemahkan data tersebut menjadi keputusan lot sizing-scheduling yang optimal masih terbatas. Lead Researchers (2025) menjawab tantangan ini dengan mengusulkan model hibrida yang memadukan *stochastic programming*, *mixed-integer programming* (MIP), dan *heuristic/metaheuristic* untuk menghasilkan solusi *near-optimal* yang komputasionalnya layak (*computationally tractable*) untuk skala industri. Inilah kontribusi utama paper: memberikan *decision support tool* yang realistis, terukur, dan siap diimplementasikan di lantai produksi.

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti mengikuti kerangka *capacitated lot sizing and scheduling problem* (CLSP) dengan ekstensi stokastik. Misalkan terdapat himpunan produk $I = \{1,2,\ldots,n\}$ yang harus diproduksi pada $T$ periode diskrit menggunakan $K$ mesin dengan kapasitas $C_{k,t}$ (unit waktu) per periode. Permintaan produk $i$ pada periode $t$ dimodelkan sebagai variabel acak $d_{i,t}$ dengan distribusi $\mathcal{D}_{i,t}$ yang diketahui (atau diestimasi dari data historis). Dalam pendekatan hibrida Lead Researchers (2025), ketidakpastian ini ditangkap melalui *scenario-based stochastic programming* dengan himpunan skenario $S = \{s_1, s_2, \ldots, s_{|S|}\}$ dan probabilitas kejadian $\pi_s$.

**Fungsi Tujuan (Expected Total Cost):**
$$\min Z = \sum_{s \in S} \pi_s \left[ \sum_{i \in I} \sum_{t=1}^{T} \left( s_i \cdot y_{i,t} + h_i \cdot I^+_{i,t,s} + b_i \cdot I^-_{i,t,s} + o_i \cdot Q_{i,t,s} \right) + \sum_{k \in K} \sum_{t=1}^{T} c_{k,t} \cdot u_{k,t,s} \right]$$

di mana:
- $y_{i,t} \in \{0,1\}$ = variabel biner keputusan *setup* produk $i$ di periode $t$
- $I^+_{i,t,s}$ = inventaris positif (on-hand stock) produk $i$ di akhir periode $t$ pada skenario $s$
- $I^-_{i,t,s}$ = *backorder* produk $i$ pada periode $t$ skenario $s$
- $Q_{i,t,s} = q_{i,t} + \Delta_{i,t,s}$ = kuantitas produksi aktual (rencana $q_{i,t}$ + rekonsiliasi $\Delta_{i,t,s}$)
- $u_{k,t,s}$ = utilisasi kapasitas mesin $k$ pada periode $t$ skenario $s$
- $s_i, h_i, b_i, o_i$ = biaya setup, holding, backorder, overtime

**Kendala Inventaris (Periode-ke-Periode):**
$$I^+_{i,t,s} - I^-_{i,t,s} = I^+_{i,t-1,s} - I^-_{i,t-1,s} + q_{i,t} - d_{i,t,s}, \quad \forall i,t,s$$
$$I^+_{i,0,s} = I^-_{i,0,s} = 0, \quad \forall i,s$$

**Kendala Kapasitas (Coupling Constraint):**
$$\sum_{i \in I} \left( p_i \cdot q_{i,t,s} + \tau_i \cdot y_{i,t} \right) \leq C_{k,t} + o_{k,t,s}, \quad \forall k,t,s$$

**Kendala Linking Setup-Produksi (Big-M):**
$$q_{i,t,s} \leq M \cdot y_{i,t}, \quad \forall i,t,s$$

Komponen hibrida paper Lead Researchers (2025) terletak pada dekomposisi masalah: (a) lapisan strategis-taktis diselesaikan dengan *two-stage stochastic mixed-integer programming* (TS-SMIP) dengan *production recourse* untuk mengekspresikan fleksibilitas *replanning* seperti disarankan Forel & Grunow (2023); (b) lapisan operasional-jadwal diselesaikan melalui *constraint programming* atau *Lagrangian relaxation heuristic* agar *makespan* dan *sequencing* mampu ditangani dengan kompleksitas komputasi yang lebih rendah.

Untuk menangkap dinamika evolusi ramalan yang menjadi inti pendekatan Forel & Grunow (2023), *forecast* $\hat{d}_{i,t}^{(n)}$ yang tersedia pada *replanning cycle* ke-$n$ mengikuti MMFE:
$$\hat{d}_{i,t}^{(n)} = \hat{d}_{i,t}^{(n-1)} + \epsilon_{i,t}^{(n)}, \quad \epsilon_{i,t}^{(n)} \sim \mathcal{N}(0, \sigma^2_{i,t})$$
dengan syarat martingale $\mathbb{E}[\hat{d}_{i,t}^{(n)} | \hat{d}_{i,t}^{(n-1)}] = \hat{d}_{i,t}^{(n-1)}$. Ketika horizon bergulir melangkah ke depan, *information revelation* terjadi dan variabel keputusan level produksi $q_{i,t}$ direvisi melalui *recourse action* $\Delta_{i,t,s}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di industri mengikuti SOP enam tahapan yang telah divalidasi oleh Lead Researchers (2025) dan diperkuat dengan logika *rolling-horizon* Forel & Grunow (2023):

**Tahap 1 — Akuisisi & Pembersihan Data Historis.** Data permintaan 24–36 bulan terakhir, *bill of materials*, kapasitas mesin, *yield rate*, dan *setup time* diekstrak dari sistem ERP. Tahapan ini mengikuti pedoman *Data Quality Framework* ISO 8000.

**Tahap 2 — Estimasi Distribusi Permintaan.** Menggunakan *Kernel Density Estimation* (KDE) atau *Bayesian inference* untuk memperoleh $\mathcal{D}_{i,t}$, lalu melakukan *scenario generation* via *Monte Carlo sampling* (Latin Hypercube Sampling untuk efisiensi).

**Tahap 3 — Formulasi Model & Generasi Skenario.** Bangun model TS-SMIP di atas platform optimasi (Gurobi, CPLEX, atau Pyomo + solver open-source). Untuk horizon $T=12$ minggu dan skenario $|S|=50$, kompleksitas tetap *tractable*.

**Tahap 4 — Optimasi Lot Sizing & Scheduling Hibrida.** Jalankan *Benders decomposition* untuk memecahkan master problem (komponen *lot sizing* dengan variabel biner $y_{i,t}$) dan subproblem (komponen *scheduling* dengan variabel kontinu). *Cut generation* mempercepat konvergensi.

**Tahap 5 — Implementasi Rolling-Horizon & Recourse.** Setiap periode rolling (mingguan), data permintaan aktual direalisasikan, *forecast* diperbarui menurut MMFE, dan *production recourse* $\Delta_{i,t,s}$ diterapkan. Logika keputusan ini divisualisasikan sebagai diagram alir berikut:

```
┌──────────────────────────┐
│  Perbarui Data Aktual    │
│  d_{i,t} (realisasi)     │
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  Update Forecast MMFE    │
│  d̂_{i,t}^{(n+1)}          │
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  Resolve Subproblem      │
│  Recourse: q_{i,t}+Δ      │
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  Cek Kendala Kapasitas & │
│  Service Level?          │
└────┬─────────────┬───────┘
     │ NO          │ YES
     ▼             ▼
  Re-optimize    Lock Plan
  (Benders)      Eksekusi MES
```

**Tahap 6 — Monitoring KPI & Continuous Improvement.** KPI utama yang dimonitor: *Total Cost Variance* (<5%), *Fill Rate* (>98%), *Schedule Stability Index* (rasio rencana yang tidak berubah antar *rolling cycle*), dan *Solver Runtime* (<30 menit).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik FMCG memproduksi 3 varian produk (*A*, *B*, *C*) dengan horizon perencanaan $T=4$ periode. Parameter biaya dan kapasitas disusun sebagai berikut:

| Parameter | Produk A | Produk B | Produk C |
|---|---|---|---|
| Biaya setup $s_i$ (IDR) | 1.200.000 | 1.500.000 | 900.000 |
| Biaya holding $h_i$ (IDR/unit) | 500 | 700 | 400 |
| Biaya backorder $b_i$ (IDR/unit) | 5.000 | 7.000 | 4.000 |
| *Processing time* $p_i$ (jam/unit) | 0,5 | 0,7 | 0,4 |

Kapasitas per periode: $C_t = 1.600$ jam. Permintaan *expected value*: $E[d_A] = (800, 1200, 1500, 900)$, $E[d_B] = (600, 800, 1100, 700)$, $E[d_C] = (1000, 900, 1300, 1100)$.

**Langkah 1 — Perhitungan Kebutuhan Kapasitas Kumulatif Deterministik:**
$$\text{Kebutuhan jam}_{t} = \sum_i p_i \cdot d_{i,t}$$
$$= 0{,}5(800) + 0{,}7(600) + 0{,}4(1000) = 1.320 \text{ jam (periode 1)}$$
$$= 0{,}5(1200) + 0{,}7(800) + 0{,}4(900) = 1.460 \text{ jam (periode 2)}$$
$$= 0{,}5(1500) + 0{,}7(1100) + 0{,}4(1300) = 2.010 \text{ jam (periode 3)} \rightarrow \text{OVERLOAD!}$$
$$= 0{,}5(900) + 0{,}7(700) + 0{,}4(1100) = 1.330 \text{ jam (periode 4)}$$

Terjadi kelebihan beban 410 jam di periode 3, sehingga *backorder* atau *overtime* tidak terhindarkan dalam skenario deterministik.

**Langkah 2 — Solusi Stokastik Hibrida (dengan recourse).** Misalkan dua skenario demand dengan probabilitas $\pi_1 = 0{,