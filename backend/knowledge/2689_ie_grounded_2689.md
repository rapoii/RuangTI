# 2689 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi Terintegrasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh permintaan konsumen yang semakin fluktuatif, siklus hidup produk yang pendek, serta tekanan pada *lean inventory*, masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) menempati posisi sentral dalam pengambilan keputusan operasional. Lead Researchers (2025) dalam makalah "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" yang diterbitkan di *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti urgensi pengembangan model optimasi yang secara simultan menangani dua keputusan kritis tersebut dalam lingkungan permintaan stokastik. Permasalahan klasik *Capacitated Lot Sizing Problem* (CLSP) dan *Lot-Sizing and Scheduling Problem* (LSP) telah menjadi subyek riset intensif sejak formulasi Wagner–Whitin (1958), namun mayoritas model akademis yang mempertimbangkan ketidakpastian permintaan masih jarang diimplementasikan di industri.

Kesenjangan antara riset akademis dan praktik industri inilah yang menjadi motivasi utama. Forel dan Grunow (2023) dalam makalah "Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning" yang diterbitkan di *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyatakan: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Pernyataan ini menegaskan realitas empiris bahwa para praktisi lebih memilih kerangka *rolling-horizon* dengan pembaruan ramalan (*forecast update*) berkala sebagai mekanisme adaptif terhadap ketidakpastian, alih-alih menggunakan program stokastik penuh yang kompleks secara komputasional.

Konteks industri yang relevan mencakup industri proses (kimia, kertas, makanan dan minuman), manufaktur diskrit dengan multi-item, serta perusahaan dengan *make-to-stock* (MTS) yang beroperasi di pasar dengan volatilitas permintaan tinggi. Fluktuasi permintaan musiman, perilaku *bullwhip* dalam rantai pasok, dan disrupsi makroekonomis (seperti yang terjadi pasca-pandemi 2020–2022) memperkuat kebutuhan akan pendekatan hibrida yang menggabungkan kekuatan formulasi stokastik dengan fleksibilitas komputasional.

Makalah Lead Researchers (2025) mengusulkan arsitektur **hibrida** yang mengintegrasikan optimasi stokastik dua-tahap (*two-stage stochastic programming*) dengan metode dekomposisi atau heuristik meta untuk menjaga kelayakan komputasional pada skala industri nyata. Pendekatan ini secara konseptual selaras dengan temuan Forel dan Grunow (2023) yang menunjukkan bahwa nilai ekonomis (*economic value*) terbesar dari pengintegrasian ketidakpastian dalam lot sizing justru muncul ketika model mampu mengantisipasi evolusi ramalan dalam horizon perencanaan滚动.

## 2. Landasan Teori & Formulasi Matematis

Formulasi dasar untuk masalah *Capacitated Lot Sizing and Scheduling* (CLS-LSP) deterministik dengan himpunan item $I$, periode $T$, dan mesin $M$ dapat dinyatakan sebagai berikut:

$$\min_{Q,Y,I} \sum_{i \in I}\sum_{t \in T} \left( s_{it}Y_{it} + p_{it}Q_{it} + h_{it}I_{it} \right)$$

dengan kendala utama:

$$I_{i,t-1} + Q_{it} - I_{it} = d_{it} \quad \forall i \in I, \; \forall t \in T \tag{1}$$

$$Q_{it} \leq M_i \cdot Y_{it} \quad \forall i,t \tag{2}$$

$$\sum_{i \in I} a_{im}Q_{it} \leq C_{mt} \quad \forall m \in M, \; \forall t \in T \tag{3}$$

$$Y_{it} \in \{0,1\},\; Q_{it}, I_{it} \geq 0 \tag{4}$$

di mana $s_{it}$ adalah biaya *setup*, $p_{it}$ biaya produksi variabel per unit, $h_{it}$ biaya penyimpanan per unit per periode, $Y_{it}$ keputusan biner *setup*, $Q_{it}$ kuantitas produksi, $I_{it}$ tingkat persediaan akhir periode, dan $d_{it}$ permintaan deterministik. Persamaan (1) menjamin keseimbangan aliran material, (2) mengkopel keputusan setup dengan kuantitas produksi, (3) menjamin kapasitas mesin $m$ pada periode $t$ tidak terlampaui.

Untuk memperhitungkan ketidakpastian permintaan $d_{it}$, formulasi dua-tahap stokastik yang diusulkan Lead Researchers (2025) mengikuti kerangka Birge dan Louveaux (2011):

$$\min_{Y} \; \sum_{i,t} s_{it}Y_{it} + \mathbb{E}_{\xi}\left[Q(Y,\xi)\right]$$

di mana keputusan tahap pertama adalah $Y_{it}$ (komitmen *setup*), dan tahap kedua mencakup $Q_{it}(\xi)$ dan $I_{it}(\xi)$ sebagai fungsi dari skenario permintaan $\xi \in \Omega$. Fungsi recourse $Q(Y,\xi)$ didefinisikan sebagai:

$$Q(Y,\xi) = \min_{Q,I,B} \sum_{i,t}\left(p_{it}Q_{it} + h_{it}I_{it}^{+} + h_{it}^{-}B_{it}\right)$$

dengan $I_{it}^{+}$ persediaan berlebih (untuk *backlog* dinolkan) dan $B_{it}$ sebagai variabel *backorder*. Elemen **hibrida** dari model muncul ketika masalah recourse diselesaikan melalui dekomposisi L-shaped (Benders) yang dikombinasikan dengan pemotong *branch-and-cut* untuk menangani sifat diskrit $Y_{it}$, atau dengan algoritma *Progressive Hedging* (Rockafellar–Wets) untuk paralelisasi skenario.

Forel dan Grunow (2023) menambahkan dimensi penting melalui **Martingale Model of Forecast Evolution (MMFE)**, di mana permintaan yang diamati pada horizon keputusan direpresentasikan sebagai:

$$d_{t+\tau}^{t} = d_{t+\tau}^{t-1} + \varepsilon_{\tau} \quad \text{dengan} \quad \mathbb{E}[\varepsilon_{\tau} | \mathcal{F}_{t