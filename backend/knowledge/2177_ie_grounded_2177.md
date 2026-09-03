# 2177 — Model Optimasi Stokastik Hibrida untuk Permasalahan Lot Sizing dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, Vol. 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning.* Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu keputusan operasional paling kritikal dalam sistem manufaktur modern, karena secara langsung menentukan besaran biaya persediaan, biaya setup, utilisasi kapasitas, dan *service level* kepada pelanggan. Dalam praktik industri, keputusan ini diambil di lingkungan yang sarat ketidakpastian: permintaan yang berfluktuasi, waktu proses yang stokastik, ketersediaan mesin yang fluktuatif, dan risiko gangguan rantai pasok. Menurut **Forel dan Grunow (2023)**, terdapat jurang yang lebar antara literatur akademik dan praktik industri — pendekatan akademik yang mempertimbangkan ketidakpastian permintaan secara eksplisit (misalnya *stochastic programming*) hampir tidak pernah digunakan di lapangan, padahal industri umumnya menghadapi *demand volatility* yang signifikan (*Production and Operations Management*, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Kondisi ini menciptakan *trade-off* paradoksal: para akademisi terus mengembangkan formulasi matematis yang semakin elegan, sementara praktisi industri tetap menggunakan *Material Requirements Planning* (MRP) deterministik yang diperkuat dengan *safety stock* besar dan *rolling-horizon replanning*. Hasil riset **Forel dan Grunow (2023)** menunjukkan bahwa model *forecast evolution* — khususnya **Martingale Model of Forecast Evolution (MMFE)** — yang menggabungkan pembaruan *forecast* secara berkala dalam kerangka perencanaan *rolling-horizon*, mampu menurunkan biaya aktual secara signifikan dibandingkan pendekatan stokastik klasik yang mengasumsikan permintaan periode depan sebagai variabel acak independen. Temuan ini diperkuat oleh **Lead Researchers (2025)** yang mengajukan arsitektur hibrida yang memadukan keputusan lot sizing tingkat strategis dengan penjadwalan tingkat taktis dalam satu kerangka optimasi terpadu (*Cuestiones de Fisioterapia*, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Urgensi ekonominya sangat besar. Pada industri FMCG (*Fast-Moving Consumer Goods*), proporsi biaya persediaan mencapai 8–12% dari nilai inventori; di industri otomotif, keputusan lot sizing menentukan *throughput* lini perakitan bernilai miliaran rupiah per bulan. Kesalahan perencanaan lot sizing 5–10% saja dapat menimbulkan biaya peluang (*opportunity cost*) yang setara dengan 1–2% omset tahunan. Oleh karena itu, pengembangan model optimasi hibrida yang mampu menjembatani rigoritas matematis dan kelayakan implementasi menjadi kebutuhan strategis yang tidak terhindarkan.

---

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang diajukan menggayakan tiga pilar teoretis: (i) *Stochastic Integer Programming* untuk keputusan lot sizing di bawah ketidakpastian permintaan; (ii) *Martingale Model of Forecast Evolution* (MMFE) untuk memodelkan evolusi *forecast*; dan (iii) formulasi recourse produksi yang merepresentasikan fleksibilitas *replanning*.

### 2.1 Notasi Dasar

- $t \in \mathcal{T} = \{1, 2, \ldots, T\}$: indeks period perencanaan
- $i \in \mathcal{I} = \{1, 2, \ldots, N\}$: indeks item/produk
- $s \in \mathcal{S}$: skenario permintaan dengan probabilitas $p_s$, $\sum_s p_s = 1$
- $D_{it}^s$: permintaan aktual item $i$ pada periode $t$ di skenario $s$

**Parameter:**
- $c_{it}$: biaya produksi per unit
- $h_{it}$: biaya simpan per unit per periode
- $s_{it}$: biaya setup
- $K_{jt}$: kapasitas mesin $j$ pada periode $t$

**Variabel keputusan:**
- $x_{its}$: jumlah produksi item $i$ pada periode $t$ di skenario $s$
- $y_{its} \in \{0,1\}$: keputusan setup
- $I_{its}$: inventori akhir periode

### 2.2 Formulasi Deterministik (Baseline)

Tanpa ketidakpastian, model lot sizing klasik (*Wagner-Within*):

$$\min \sum_{i \in \mathcal{I}} \sum_{t \in \mathcal{T}} \left( c_{it} x_{it} + h_{it} I_{it} + s_{it} y_{it} \right)$$

dengan kendala:

$$I_{it} = I_{i,t-1} + x_{it} - D_{it}, \quad \forall i, t$$
$$x_{it} \leq M \cdot y_{it}, \quad \forall i, t$$
$$\sum_{i} x_{it} \leq K_t, \quad \forall t$$
$$I_{i0} = I_{i0}^0, \quad I_{iT} \geq 0, \quad y_{it} \in \{0,1\}$$

### 2