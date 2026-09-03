# 2421 — Strategi Closed-Loop Supply Chain untuk Baterai Pensiun: Pemanfaatan Bertingkat (Echelon Utilization), Daur Ulang, dan Remanufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Kim & Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan kendaraan listrik (EV) global telah menciptakan tantangan rekayasa baru yang sangat krusial dalam bidang teknik industri: bagaimana mengelola baterai lithium-ion pensiun (*retired EV batteries* / REVB) secara berkelanjutan, ekonomis, dan ramah lingkungan. JIANG Lin & TANG Lidan (2025) dalam artikelnya yang dipublikasikan pada prosiding *14th International Conference on Logistics and Systems Engineering* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti bahwa kapasitas baterai pensiun diproyeksikan melampaui 100 GWh secara global pada tahun 2030, menjadikan perancangan *closed-loop supply chain* (CLSC) bukan sekadar isu lingkungan melainkan keharusan strategis rantai pasok.

Dari perspektif operasional, baterai EV mencapai *end-of-first-life* (EOFL) ketika kapasitasnya turun ke ambang 70–80% dari kapasitas awal. Pada titik tersebut, baterai masih memiliki *State of Health* (SoH) yang layak untuk aplikasi stasioner berdaya lebih rendah — fenomena yang dikenal sebagai **echelon utilization** atau *cascaded utilization* — seperti penyimpanan energi surya (*solar PV storage*), *backup power telecom*, dan *peak-shaving* pada fasilitas industri. Hanya setelah degradasi lanjut ke ambang 30–40% SoH, baterai masuk ke jalur **recycling** untuk ekstraksi material kritis (litium, kobalt, mangan, nikel).

Urgensi permasalahan ini sangat relevan bagi Indonesia sebagai produsen nikel kelas dunia (melalui holding MIND ID dan smelter Morowali/Halmahera) dan pemain utama dalam rencana ekosistem baterai nasional (proyek baterai PT LIK dan konsorsium IBC). Tanpa strategi CLSC yang matang, penumpukan baterai pensiun akan menciptakan *reverse logistics bottleneck*, risiko pencemaran logam berat, serta inefisiensi ekonomi sirkular. JIANG & TANG (2025) mengemukakan bahwa optimalisasi simultan antara *forward logistics*, *reverse logistics*, *echelon utilization*, dan *recycling/remanufacturing* memerlukan model keputusan multi-period dengan ketidakpastian permintaan dan tingkat pengembalian (*return rate*).

Shin, Kim & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi landasan dengan menunjukkan bahwa pengelolaan arus balik dalam *circular economy* memerlukan formulasi **robust optimization** untuk menghadapi volatilitas permintaan, kualitas baterai yang dikembalikan, dan waktu kedatangan yang stokastik. Kedua paper ini menjadi pilar bagi pengembangan Modul 2421 yang membahas formulasi strategi CLSC untuk baterai pensiun.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan, Parameter, dan Variabel Keputusan

Mengikuti formulasi JIANG & TANG (2025), didefinisikan himpunan indeks sebagai berikut:

- $I = \{1, 2, \ldots, N\}$: himpunan fasilitas manufaktur baterai baru (*OEM plants*)
- $J = \{1, 2, \ldots, M\}$: himpunan retailer/distributor
- $K = \{1, 2, \ldots, L\}$: himpunan pusat echelon utilization (penyimpanan stasioner)
- $R = \{1, 2, \ldots, P\}$: himpunan fasilitas remanufaktur
- $D = \{1, 2, \ldots, Q\}$: himpunan fasilitas daur ulang (recycling)
- $T = \{1, 2, \ldots, T\}$: himpunan periode diskret

Parameter kunci:

$$\begin{aligned}
c^{m}_{ij} &= \text{biaya transportasi baterai baru dari } i \text{ ke } j \\
c^{r}_{jR} &= \text{biaya pengumpulan baterai pensiun dari } j \text{ ke fasilitas remanufaktur } R \\
c^{e}_{RK} &= \text{biaya alokasi baterai remanufaktur ke echelon center } K \\
p_{jt} &= \text{harga jual baterai baru di retailer } j \text{ pada periode } t \\
\lambda_{t} &= \text{return rate baterai pensiun pada periode } t, \; \lambda_t \in [0.05, 0.12] \\
\alpha &= \text{fraksi baterai pensiun yang lolos uji echelon utilization}, \; \alpha \in [0.55, 0.70] \\
\beta &= \text{fraksi baterai yang lolos uji remanufaktur}, \; \beta \in [0.15, 0.25] \\
\theta &= \text{recovery yield proses recycling}, \; \theta \in [0.85, 0.92] \\
d_{jt} &= \text{permintaan deterministik baterai di retailer } j \text{ pada periode } t \\
\tilde{d}_{jt} &= \text{permintaan stokastik dengan box uncertainty } \mathcal{U} \\
Q^{cap}_i, Q^{cap}_R, Q^{cap}_K &= \text{kapasitas produksi/olah masing-masing fasilitas}
\end{aligned}$$

Variabel keputusan kontinu:
- $x_{ijt} \ge 0$: jumlah baterai baru yang dikirim dari $i$ ke $j$ pada $t$
- $y_{jRt} \ge 0$: jumlah baterai pensiun yang dikumpulkan dari $j$ ke $R$ pada $t$
- $z_{RKt} \ge 0$: jumlah baterai remanufaktur dari $R$ ke $K$ untuk echelon
- $s_{jt} \ge 0$: inventory level baterai baru di retailer
- $u_{Rt} \ge 0$: inventory baterai remanufaktur di fasilitas $R$

### 2.2 Fungsi Objektif: Maksimisasi Profit CLSC

JIANG & TANG (2025) merumuskan objektif sebagai maksimisasi total profit T-periode yang menggabungkan *revenue*, *forward logistics cost*, *reverse logistics cost*, *processing cost*, dan *holding cost*:

$$\max \Pi = \sum_{t \in T} \Bigg[ \sum_{j \in J} p_{jt} \cdot d_{jt} - \sum_{i \in I} \sum_{j \in J} c^{m}_{ij} x_{ijt} - \sum_{j \in J} \sum_{R \in R} c^{r}_{jR} y_{jRt} - \sum_{R \in R} \sum_{K \in K} c^{e}_{RK} z_{RKt} $$

$$ - \sum_{i \in I} C^{m}_i \sum_{j \in J} x_{ijt} - \sum_{R \in R} C^{p}_R \sum_{j \in J} y_{jRt} - \sum_{R \in R} C^{rem}_R \sum_{K \in K} z_{RKt} - \sum_{j \in J} h_j s_{jt} \Bigg] \tag{1}$$

dengan $C^{m}_i$, $C^{p}_R$, $C^{rem}_R$ berturut-turut adalah biaya produksi OEM, biaya inspeksi/pengumpulan, dan biaya remanufaktur. Term terakhir $h_j s_{jt}$ adalah *holding cost* inventaris ritel.

### 2.3 Kendala Fundamental CLSC

$$\sum_{i \in I} x_{ijt} - s_{j,t-1} + s_{jt} = d_{jt}, \quad \forall j, t \tag{2}$$

$$\sum_{j \in J} y_{jRt} = \lambda_t \sum_{i \in I} x_{ij,t-\tau}, \quad \forall R, t \tag{3}$$

Persamaan (3) menyatakan bahwa laju pensiun mengikuti *usage lag* $\tau$ (biasanya $\tau = 5$–$8$ tahun) dari permintaan masa lalu. Aliran material dalam CLSC baterai pensiun mengikuti konservasi massa:

$$\sum_{R \in R} z_{RKt} = \alpha \sum_{j \in J} y_{jRt}, \quad \forall K, t \tag{4}$$

$$\sum_{D \in D} w_{RD,t} = \beta \sum_{j \in J} y_{jRt}, \quad \forall D, t \tag{5}$$

$$\sum_{D \in D} q_{Dt} = (1-\alpha-\beta) \sum_{j \in J} y_{jRt}, \quad \forall t \tag{6}$$

dengan $w_{RD,t}$ adalah aliran ke daur ulang dari baterai yang gagal echelon dan remanufaktur, sedangkan $q_{Dt}$ adalah baterai yang langsung menuju daur ulang karena kerusakan kritis.

Kendala kapasitas:
$$\sum_{j \in J} x_{ijt} \le Q^{cap}_i, \quad \forall i, t \tag{7}$$
$$\sum_{j \in J} y_{jRt} \le Q^{cap}_R, \quad \forall R, t \tag{8}$$
$$\sum_{R \in R} z_{RKt} \le Q^{cap}_K, \quad \forall K, t \tag{9}$$

### 2.4 Formulasi Robust Counterpart (Shin, Kim & Jeong, 2024)

Untuk menangani ketidakpastian permintaan $\tilde{d}_{jt}$, Shin et al. (2024) mengusulkan *Bertsimas-Sim robust counterpart*. Misalkan $\tilde{d}_{jt} = \hat{d}_{jt} + \hat{\eta}_{jt} \xi_{jt}$, dengan $\xi_{jt} \in [-1, 1]$ dan budget ketidakpastian $\Gamma_0$:

$$\sum_{t \in T} \sum_{j \in J} \hat{\eta}_{jt} + \Gamma_0 \cdot \max_{j,t} \hat{\eta}_{jt} \le \text{(batas perlindungan)} \tag{10}$$

Fungsi objektif robust:

$$\max_{\mathbf{x} \in \mathcal{X}} \min_{\tilde{\mathbf{d}} \in \mathcal{U}} \Pi(\mathbf{x}, \tilde{\mathbf{d}}) \ge \Pi(\mathbf{x}, \hat{\mathbf{d}}) - \Omega(\mathbf{x}, \Gamma_0) \tag{11}$$

dengan $\Omega(\mathbf{x}, \Gamma_0) = \sum_{j,t} \hat{\eta}_{jt} \cdot y^{*}_{jt} + \Gamma_0 \cdot \max_{j,t}(\hat{\eta}_{jt} \cdot y^{*}_{jt})$ adalah *worst-case deviation*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur CLSC Empat-Tingkat

JIANG & TANG (2025) mengusulkan arsitektur empat tingkat (*four-tier CLSC*) yang secara sistematis mengintegrasikan forward dan reverse logistics:

**Tingkat 1 — OEM & Manufaktur Baterai Baru:** Fasilitas produksi sel baterai lithium-ion, lalu *pack assembly* dengan kapasitas $Q^{cap}_i$. SOP: validasi IEC 62660-3 untuk *performance testing*, traceability melalui *battery passport* ISO/IEC 21434.

**Tingkat 2 — Distribusi & Penggunaan Pertama (First-Life Use):** Retailer/ATPM mendistribusikan baterai ke armada EV. SOP mencakup SOC window (State of Charge: 20–80%) untuk memperpanjang siklus hidup.

**Tingkat 3 — Pengumpulan, Sortasi & Uji SoH:** Setelah EOFL, baterai dikumpulkan ke *echelon collection center* dan menjalani pengujian kapasitas (IEC 62933), impedansi AC, dan *thermal abuse screening*. Hasil sortir: Grade A (SoH > 80%) → reuse langsung; Grade B (SoH 60–80%) → echelon utilization; Grade C (SoH < 60%)