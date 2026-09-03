# 2657 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning. *Production and Operations Management*, 32(11), 3619–3637. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai dengan volatilitas permintaan, fragmentasi rantai pasok global, dan permintaan akan personalisasi produk massal, perencanaan produksi agregat menghadapi tantangan struktural yang semakin kompleks. Dua keputusan operasional yang saling terkait erat — penentuan ukuran lot (*lot sizing*) dan penjadwalan (*scheduling*) — telah lama menjadi subjek riset intensif dalam Riset Operasi sejak формула Economic Order Quantity (EOQ) diperkenalkan Harris (1913) dan Wagner-Whitin (1958). Namun demikian, mayoritas implementasi industri masih bertumpu pada model deterministik yang kemudian "ditambal" dengan *safety stock* dan *rolling-horizon planning* berkala (Forel & Grunow, 2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Kesenjangan antara riset akademis dan praktik industri ini merupakan *grand challenge* yang diidentifikasi secara eksplisit oleh Lead Researchers (2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) dalam naskah "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem". Naskah tersebut menegaskan bahwa optimalitas deterministik menjadi usang ketika parameter permintaan didekati sebagai peubah acak dengan korelasi temporal. Lebih jauh, integrasi simultan antara keputusan lot sizing (tingkat strategis-taktis) dan scheduling (tingkat operasional) menuntut arsitektur optimasi yang mampu mengelola dua skala waktu sekaligus.

Urgensi ekonomis dari masalah ini bersifat material. Menurut Forel dan Grunow (2023), simulasi ekstensif pada data sintetis maupun data *real-world* menunjukkan bahwa model deterministik klasik yang dilengkapi *safety stock* Myers-Mentzer menghasilkan *overshooting* biaya inventori rata-rata 6%–14% dibandingkan model stokastik dengan evolusi peramalan. Dalam konteks perusahaan FMCG, manufaktur *automotive*, dan farmasi — di mana biaya *carrying cost* mencapai 20%–30% dari nilai inventori per tahun — selisih efektivitas 1% biaya produksi agregat sudah mewakili nilai absolut puluhan juta dolar AS per tahun untuk perusahaan menengah. Lead Researchers (2025) menekankan bahwa sifat *hybrid* dari masalah (yaitu penggabungan unsur diskret-kontinyu, stokastik-deterministik, dan strategis-operasional) menolak pendekatan monomodel dan memerlukan kerangka komputasi hibrid.

Konteks industri yang melatarbelakangi pengembangan modul ini mencakup: (i) pabrik *batch process* dengan *setup cost* dominan (*make-to-stock*); (ii) perusahaan dengan siklus hidup produk pendek di mana peramalan permintaan berevolusi cepat; dan (iii) fasilitas manufaktur dengan *capacity constraint* mesin yang ketat. Modul 2657 memposisikan diri sebagai jembatan antara formulasi matematis tingkat lanjut dan implementasi praktis dengan *rolling-horizon replanning*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Stokastik dengan Evolusi Peramalan (MMFE)

Forel dan Grunow (2023) menggunakan *Martingale Model of Forecast Evolution* (MMFE) untuk menangkap dinamika revisi peramalan dalam horizon bergulir. Notasi dasar:

- $t = 1, \ldots, T$: indeks period waktu diskret
- $d_t$: permintaan aktual pada period $t$ (peubah acak)
- $f_{t|t-\tau}$: peramalan permintaan $d_t$ yang dibuat pada period $t-\tau$
- $\mu_t$: ekspektasi permintaan tak bersyarat

Model MMFE mengasumsikan bahwa revisi peramalan bersifat *martingale*:

$$f_{t|t-\tau} = f_{t|t-\tau-1} + \varepsilon_{t,t-\tau}$$

dengan $\varepsilon_{t,t-\tau} \sim \mathcal{N}(0, \sigma^2_{t,\tau})$ independen, dan $\sigma^2_{t,\tau}$ mengecil seiring $\tau \to 0$ (semakin dekat horizon, semakin rendah varians residual). Kovarians antar period ditangkap melalui:

$$\text{Cov}(f_{t|t-\tau}, f_{s|t-\tau}) = \sum_{k=t-\tau+1}^{t} \sigma^2_{k,\tau} \cdot \rho_{t,s}$$

di mana $\rho_{t,s}$ adalah koefisien korelasi permintaan antar-period.

### 2.2 Formulasi Program Stokastik Dua Tahap (Two-Stage SP)

Lead Researchers (2025) mengusulkan formulasi program stokastik dua tahap yang menggabungkan keputusan lot-sizing (first-stage) dengan recourse produksi (second-stage). Bentuk kanonik:

$$\min_{Q_t, y_t} \quad \mathbb{E}_\xi \left[ \sum_{t=1}^{T} \left( c_t Q_t + s_t y_t + h_t I_t^+ + p_t I_t^- \right) \right]$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - d_t(\xi), \quad \forall t \in \{1,\ldots,T\}$$

$$Q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}$$

$$Q_t, I_t^+, I_t^- \geq 0$$

di mana:
- $c_t$: biaya produksi variabel per unit pada period $t$
- $s_t$: biaya *setup* (fixed cost) pada period $t$
- $h_t$: biaya *holding* inventari surplus per unit per period
- $p_t$: biaya *backorder/penalty* per unit per period
- $y_t$: variabel biner aktivasi setup
- $Q_t$: kuantitas produksi pada period $t$
- $I_t^+, I_t^-$: inventari positif dan negatif (*split inventory*)
- $M$: big-M untuk relasi setup
- $\xi$: skenario permintaan dengan realisasi $d_t(\xi)$

### 2.3 Formulasi Hibrida Lead Researchers (2025)

Inovasi utama Lead Researchers (2025) adalah pengintegrasian submodul *scheduling* ke dalam formulasi lot sizing stokastik. Indeks tambahan:

- $j = 1, \ldots, J$: indeks item (produk)
- $k = 1, \ldots, K$: indeks operasi dalam *routing*
- $m = 1, \ldots, M$: indeks mesin

Fungsi tujuan hibrid:

$$\min \quad \mathbb{E} \left[ \sum_{j,t} (c_{jt} Q_{jt} + s_{jt} y_{jt}) + \sum_{t,k,m} w_{ktm} z_{ktm} + \sum_{j,t,\omega} (h_{jt} I^+_{jt\omega} + p_{jt} I^-_{jt\omega}) \right] \cdot P(\omega)$$

dengan kendala kapasitas mesin:

$$\sum_{j,k} \tau_{jkm} \cdot x_{jkt} \leq C_{mt}, \quad \forall m, t$$

dan kendala urutan (*sequencing*):

$$x_{jkt} + x_{jk't} \leq 1, \quad \text{untuk operasi yang bersaing pada mesin sama}$$

di mana $w_{ktm}$ adalah bobot keterlambatan mesin, $\tau_{jkm}$ adalah waktu proses, $C_{mt}$ adalah kapasitas, dan $x_{jkt}$ adalah variabel keputusan alokasi operasi.

### 2.4 Mekanisme Recourse pada Rolling Horizon

Untuk merefleksikan fleksibilitas *replanning* industri (Forel & Grunow, 2023), formulasi dilengkapi *production recourse* $Q^{rec}_{t,\omega}$ yang memungkinkan koreksi produksi setelah realisasi permintaan $\omega$ diobservasi:

$$Q_{t,\omega} = Q^*_t + Q^{rec}_{t,\omega}$$

dengan $Q^*_t$ keputusan first-stage dan $Q^{rec}_{t,\omega} \in [0, R^{max}_{t}]$. Batas recourse $R^{max}_t$ merepresentasikan kapasitas overtime atau *rush order* yang tersedia.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi modul 2657 mengikuti arsitektur **Lima Tahap SOP** yang distandardisasi:

### Tahap 1: Akuisisi & Karakterisasi Data Permintaan
1. Kumpulkan histori permintaan minimal 36 period (3 tahun) per SKU
2. Estimasi parameter MMFE: $\mu_t$, $\sigma_{t,\tau}$, $\rho_{t,s}$
3. Uji stasioneritas dengan *Augmented Dickey-Fuller test*
4. Validasi korelasi silang (*cross-correlation*) antar-SKU

### Tahap 2: Generasi Skenario
1. Tentukan jumlah skenario $N_s$ (standar: $N_s = 200-1000$)
2. Gunakan *moment matching* atau *Monte Carlo simulation* dengan *Latin Hypercube Sampling*
3. Reduksi skenario via *forward selection* (target: cardinality $\leq 50$)

### Tahap 3: Formulasi & Solusi
1. Bangun model two-stage SP menggunakan *algebraic modeling language* (AMPL/GAMS/Pyomo)
2. Pilih solver: CPLEX/Gurobi untuk MIP, atau *Benders decomposition* untuk ukuran besar
3. Validasi batas optimalitas (*optimality gap* $\leq 0.5\%$)

### Tahap 4: Integrasi Rolling-Horizon
1. Tentukan panjang horizon perencanaan $H$ (standar: $H = 12$ period mingguan)
2. Implementasikan *lock-in period* $L = 3$ period pertama (tidak boleh berubah setelah commit)
3. Rolling frequency: mingguan atau dwimingguan sesuai volatilitas

### Tahap 5: Monitoring & Adaptasi
1. Track *realized cost* vs. *expected cost*
2. Hitung *Value of Stochastic Solution (VSS)* dan *Expected Value of Perfect Information (EVPI)*
3. Reestimasi parameter setiap kuarter

**Diagram alir logika**:

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Histori Demand  │───▶│  Estimasi MMFE   │───▶│ Generasi Skenario│
└──────────────────┘    └──────────────────┘    └──────────────────┘
                                                        │
┌──────────────────┐    ┌──────────────────┐    ┌────────▼─────────┐
│   Implementasi   │◀───│  Solve Two-Stage │◀───│  Reduksi Skenario │
│   ke MRP/ERP     │    │   SP / MIP       │    │  (k=20-50)        │
└──────────────────┘    └──────────────────┘    └──────────────────┘
         ▲                                              │
         │                                              ▼
┌────────┴─────────┐                          ┌──────────────────┐
│  Revisi Forecast │◀───── Feedback Loop ─────│  Realisasi ω     │
└──────────────────┘                          └──────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus: Pabrik FMCG "PT Nusantara Beverage"

Sebuah pabrik minuman ringan menghadapi masalah *lot sizing* untuk 3 SKU utama dengan horizon $T = 6$ period (mingguan). Parameter biaya dan permintaan dirangkum dalam Tabel 1.

**Tabel 1. Parameter Input (disederhanakan)**

| Parameter | Period 1 | Period 2 | Period 3 | Period 4 | Period 5 | Period 6 |
|-----------|----------|---------|---------|---------|---------|---------|
| $\mu_t$ (demand mean) | 800 | 950 | 1100 | 1050 | 1200 | 1300 |
| $\sigma_t$ (std dev) | 120 | 140 | 165 | 158 | 180 | 195 |
| $c_t$ (var cost/unit) | Rp 5.000 | Rp 5.000 | Rp 5.000 | Rp 5.000 | Rp 5.000 | Rp 5.000 |
| $s_t$ (setup cost) | Rp 1.500.000 | Rp 1.500.000 | Rp 1.500.000 | Rp 1.500.000 | Rp 1.500.000 | Rp 1.500.000 |
| $h_t$ (holding/unit) | Rp 400 | Rp 400 | Rp 400 | Rp 400 | Rp 400 | Rp 400 |
| $p_t$ (backorder/unit) | Rp 1.200 | Rp 1.200 | Rp 1.200 | Rp 1.200 | Rp 1.200 | Rp 1.200 |

### 4.2 Perhitungan Manual Pendekatan Deterministik (Baseline)

Untuk perbandingan, hitung ukuran lot berbasis Economic Part Period (EPP) deterministik pada SKU dengan $\mu_t$ sebagai input pasti:

**EPP criterion**: $E_t = \frac{s_t$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
