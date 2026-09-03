# 1921 — Model Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Lingkungan Permintaan Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54(02), hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan integrasi antara *lot sizing* (penentuan ukuran batch produksi) dan *scheduling* (penjadwalan urutan produksi pada mesin terbatas) merupakan salah satu keputusan operasional paling krusial dalam sistem manufaktur modern. Lead Researchers (2025) menyoroti bahwa dalam praktik industri nyata, dua keputusan ini lazim ditangani secara terpisah — bagian perencanaan produksi (*production planning*) menangani ukuran lot, sementara bagian *shop-floor* menangani alokasi mesin — padahal keduanya saling berinteraksi secara stokastik melalui ketidakpastian permintaan, kerusakan mesin, dan variabilitas proses [DOI: 10.48047/cu/54/02/2007-2018]. Studi tersebut menekankan bahwa dekomposisi keputusan ini menghasilkan *sub-optimality* struktural yang tidak lagi dapat diterima pada era manufaktur *demand-driven* dengan margin keuntungan yang tipis.

Urgensi ekonomi dari pendekatan hybrid ini semakin nyata ketika memperhatikan skala biaya persediaan global. Menurut Forel & Grunow (2023), perusahaan manufaktur pada rantai pasok barang konsumsi (FMCG) rutin menghadapi kerugian akibat *safety stock* yang berlebihan ketika menggunakan model deterministik klasik, karena pendekatan tersebut tidak secara eksplisit mengakomodasi evolusi ramalan permintaan dalam kerangka *rolling-horizon planning* (RHP) [DOI: 10.1111/poms.13881]. Studi Forel-Grunow menunjukkan bahwa *forecast evolution* berbasis *Martingale Model of Forecast Evolution* (MMFE) mampu mereduksi biaya aktual hingga signifikan dibanding pendekatan deterministik, karena model ini mampu "mempelajari" perilaku pembaruan ramalan (*forecast update*) yang menjadi karakteristik inheren RHP.

Secara industri, fenomena ini muncul di berbagai sektor: industri makanan dan minuman dengan permintaan musiman yang volatil, industri *fast-moving consumer goods* (FMCG) dengan promosi jangka pendek, hingga industri *job-shop* dengan pesanan custom yang berubah mingguan. Lead Researchers (2025) berargumen bahwa arsitektur hybrid — yang menggabungkan *Mixed-Integer Linear Programming* (MILP) untuk lot sizing, *Constraint Programming* (CP) untuk detail scheduling, dan *stochastic programming* untuk menangani ketidakpastian — merupakan jawaban metodologis atas kelemahan struktural ini. Paper ini secara eksplisit memposisikan riset sebagai jembatan antara riset akademis (yang biasanya mempertimbangkan ketidakpastian namun belum diadopsi industri) dan praktik industri (yang menggunakan RHP deterministik).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Lot Sizing (Baseline Wagner-Whitin)

Sebagai *baseline*, formulasi *capacitated lot sizing problem* (CLSP) deterministik dinyatakan sebagai berikut. Definisikan himpunan periode diskrit $T = \{1,2,\ldots,T\}$, dengan parameter:

- $d_t$ = permintaan deterministik pada periode $t$
- $s_t$ = biaya *setup* pada periode $t$
- $h_t$ = biaya *holding* per unit pada periode $t$
- $c_t$ = biaya produksi per unit pada periode $t$
- $K_t$ = kapasitas produksi pada periode $t$

Variabel keputusan:
- $y_t \in \{0,1\}$: keputusan setup (1 jika setup dilakukan di periode $t$)
- $x_t \geq 0$: kuantitas produksi di periode $t$
- $I_t \geq 0$: persediaan akhir periode $t$

Formulasi MILP deterministiknya adalah:

$$\min \quad Z = \sum_{t=1}^{T} \left( s_t y_t + h_t I_t + c_t x_t \right)$$

$$\text{s.t.} \quad I_t = I_{t-1} + x_t - d_t, \quad \forall t \in T$$

$$x_t \leq K_t \cdot y_t, \quad \forall t \in T$$

$$I_0 = I_T = 0, \quad I_t \geq 0, \quad y_t \in \{0,1\}$$

### 2.2 Formulasi Stokastik dengan *Martingale Model of Forecast Evolution* (MMFE)

Forel & Grunow (2023) memperkenalkan perluasan stokastik berbasis MMFE yang melacak evolusi ramalan sepanjang horizon perencanaan. Definisikan $D_{t|\tau}$ sebagai permintaan pada periode $t$ yang diramalkan pada informasi yang tersedia hingga periode $\tau$. Properti martingale mensyaratkan:

$$\mathbb{E}[D_{t|\tau+1} \mid \mathcal{F}_\tau] = D_{t|\tau}, \quad \forall \tau < t$$

dengan *innovation* (pembaruan) ramalan $\epsilon_{t+1}$ sehingga:

$$D_{t|\tau+1} = D_{t|\tau} + \epsilon_{t+1}, \quad \mathbb{E}[\epsilon_{t+1}] = 0$$

Formulasi lot sizing stokastik dua-tahap (*two-stage stochastic programming with recourse*) menjadi:

$$\min \quad Z = \sum_{t=1}^{T} \left[ s_t y_t + c_t x_t + \mathbb{E}_\omega\left( \sum_{t=1}^{T} h_t I_t^+(\omega) + p_t \delta_t^+(\omega) \right) \right]$$

di mana:
- $I_t^+(\omega) = \max(0, I_t(\omega))$ adalah persediaan positif pada skenario $\omega$
- $\delta_t^+(\omega)$ adalah *backorder* atau kerugian permintaan tak terpenuhi
- $p_t$ adalah biaya *penalty* per unit permintaan tak terpenuhi

Fungsi rekursif persediaan mengikuti:

$$I_t(\omega) = I_{t-1}(\omega) + x_t(\omega) - D_t(\omega), \quad \forall t, \omega \in \Omega$$

### 2.3 Formulasi Hybrid Lot Sizing–Scheduling (Lead Researchers, 2025)

Lead Researchers (2025) mengusulkan dekomposisi koordinatif tiga-lapis. Lapis pertama adalah keputusan lot sizing stokastik dengan variabel $y_t, x_t, I_t$. Lapis kedua adalah detail scheduling pada $M$ mesin paralel dengan variabel $z_{ijm} \in \{0,1\}$ yang menunjukkan operasi $j$ dari job $i$ dialokasikan ke mesin $m$ pada slot waktu $k$. Lapis ketiga adalah *recourse* dengan variabel koreksi $x_t^r(\omega)$.

Fungsi tujuan hybrid:

$$\min \quad Z_{hybrid} = \underbrace{\alpha \sum_{t=1}^{T}\left( s_t y_t + c_t x_t \right)}_{\text{lot sizing cost}} + \underbrace{\beta \sum_{i,j,m,k} w_{ijm} z_{ijmk}}_{\text{scheduling cost}} + \underbrace{\gamma \mathbb{E}_\omega \left[ \sum_{t=1}^{T} \left( h_t I_t^+(\omega) + p_t \delta_t^+(\omega) \right) \right]}_{\text{stochastic recourse cost}}$$

dengan bobot $\alpha + \beta + \gamma = 1$ yang mencerminkan preferensi manajerial. Kendala keterkaitan (*linking constraint*) antara lot sizing dan scheduling adalah kapasitas agregat:

$$\sum_{i,j} \sum_{m} \sum_{k \in S_t} z_{ijmk} \cdot p_{ij} \leq K_t \cdot y_t, \quad \forall t \in T$$

di mana $S_t$ adalah himpunan slot waktu yang jatuh pada periode $t$, dan $p_{ij}$ adalah waktu proses unit operasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Lead Researchers (2025) merancang arsitektur implementasi yang sistematis dan dapat direplikasi di lingkungan industri. Prosedur operasi standar (*Standard Operating Procedure*/SOP) yang disarankan mengikuti alur enam-tahap berikut:

**Tahap 1 – Akuisisi Data Historis & Pemodelan Permintaan.** Kumpulkan data permintaan historis minimal 36–60 periode, identifikasi pola tren, musiman, dan *outlier*. Estimasi parameter MMFE melalui regresi *forecast update*:

$$\hat{\epsilon}_{t+1} = D_{t|\tau+1}^{actual} - D_{t|\tau}^{forecast}, \quad \hat{\sigma}_\epsilon = \sqrt{\frac{1}{N-1}\sum (\epsilon_i - \bar{\epsilon})^2}$$

**Tahap 2 – Generasi Skenario Stokastik.** Gunakan teknik *Monte Carlo simulation* atau *scenario tree generation* (L-shaped algorithm) untuk membangkitkan $N_s = 500$–$2000$ skenario permintaan yang merefleksikan evolusi ramalan.

**Tahap 3 – Optimasi Lot Sizing Tier-1.** Selesaikan model MILP stokastik menggunakan solver seperti Gurobi atau CPLEX dengan *Benders decomposition* untuk menangani computational complexity.

**Tahap 4 – Optimasi Scheduling Tier-2.** Masukkan hasil lot sizing sebagai *upper-bound* kapasitas, kemudian selesaikan *constraint programming* model untuk alokasi mesin terperinci.

**Tahap 5 – Validasi & Verifikasi dengan Simulasi.** Lakukan *discrete-event simulation* untuk memvalidasi keputusan hybrid terhadap aturan *first-come-first-served* (FCFS) atau *priority dispatching*.

**Tahap 6 – Implementasi Rolling-Horizon dengan Forecast Update.** Setiap periode $h$ (misal mingguan), perbarui ramalan $D_{t|\tau}$, regenerasi skenario, dan re-selesaikan model. Forel & Grunow (2023) menunjukkan bahwa mekanisme ini mampu menurunkan total biaya aktual hingga 4–12% dibanding pendekatan deterministik murni pada studi kasus nyata mereka.

Diagram alir prosedur:

```
┌─────────────────────────────┐
│  Data Historis Permintaan   │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  Estimasi Parameter MMFE    │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  Generasi Pohon Skenario    │
│  (L-shaped / Monte Carlo)   │
└──────────────