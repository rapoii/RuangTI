# 2129 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu pilar keputusan taktis-operasional dalam sistem manufaktur dan rantai pasok modern. Secara historis, keputusan lot sizing dirumuskan oleh Wagner dan Whitin (1958) sebagai program dinamis diskrit, kemudian diadaptasi dalam berbagai varian seperti Economic Lot Scheduling Problem (ELSP), capacitated lot sizing problem (CLSP), dan multi-level lot sizing. Namun, pada praktiknya, sebagian besar perusahaan manufaktur masih mengandalkan model deterministik dengan *safety stock* dan *rolling-horizon planning* (RHP) sebagai mekanisme utama mengatasi ketidakpastian permintaan. Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyatakan: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Pernyataan ini menegaskan adanya jurang (*research-practice gap*) antara pendekatan akademis yang kaya akan formulasi probabilistik dan realitas operasional industri.

Urgensi permasalahan ini semakin relevan ketika disrupsi rantai pasok global pascapandemi, volatilitas permintaan konsumen (*demand volatility*), dan pergeseran paradigma *mass customization* menuntut sistem perencanaan produksi yang adaptif namun tetap optimal secara biaya. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan **Model Optimasi Stokastik Hibrida** (*Hybrid Stochastic Optimization Model*) yang memadukan kekuatan formulasi stokastik akademis dengan fleksibilitas implementasi berbasis horizon bergulir ala industri. Model ini bekerja dengan menyarangkan (*embedding*) sub-model peluang produksi (*production recourse*) ke dalam kerangka lot sizing stokastik, sehingga keputusan lot yang diambil pada horizon pertama tetap mempertimbangkan ekspektasi pembaruan rencana (*replanning*) di horizon berikutnya.

Secara ekonomis, keputusan lot sizing dan scheduling menentukan porsi signifikan dari total biaya operasional—mencakup biaya setup (*S*), biaya inventory holding (*h*), biaya backorder (*b*), dan biaya produksi variabel (*c*). Studi empiris Forel & Grunow (2023) menunjukkan bahwa penerapan *forecast evolution models* mampu menurunkan *actual costs* hingga dua digit persentase dibandingkan model deterministik naif. Oleh karena itu, integrasi model stokastik hibrida dengan mekanisme rolling-horizon bukan hanya relevan secara akademis, melainkan memiliki dampak profit langsung bagi perusahaan, terutama di sektor FMCG, *batch chemical*, *food & beverage*, dan *pharmaceutical* yang memiliki karakteristik permintaan musiman dan siklus produksi batch.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dirujuk Lead Researchers (2025) dan Forel & Grunow (2023) dibangun di atas tiga pilar: (i) formulasi lot sizing stokastik dengan permintaan sebagai variabel acak, (ii) model evolusi prakira (*Martingale Model of Forecast Evolution*—MMFE), dan (iii) mekanisme *production recourse* yang merepresentasikan fleksibilitas *replanning*.

### 2.1 Formulasi Dasar Lot Sizing Stokastik

Misalkan terdapat $T$ periode perencanaan dengan permintaan acak $D_t$ untuk $t=1,\dots,T$. Formulasi program linear stokastik dua tahap (*two-stage stochastic program*) adalah sebagai berikut:

$$\min_{q_t, y_t, I_t} \; \mathbb{E}\left[\sum_{t=1}^{T}\left(c_t q_t + s_t y_t + h_t I_t^+ + b_t I_t^-\right)\right]$$

dengan kendala utama **keseimbangan persediaan stokastik**:

$$I_t = I_{t-1} + q_t - D_t, \quad \forall t=1,\dots,T$$

$$q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad q_t, I_t^+, I_t^- \geq 0$$

di mana:
- $q_t$ = kuantitas produksi pada periode $t$
- $y_t$ = variabel biner keputusan setup pada periode $t$ ($y_t=1$ jika ada produksi)
- $I_t^+, I_t^-$ = persediaan positif (holding) dan negatif (backorder) di akhir periode $t$
- $s_t$ = biaya setup, $c_t$ = biaya produksi unit, $h_t$ = biaya holding per unit, $b_t$ = biaya backorder per unit
- $M$ = Big-M (kapasitas produksi maksimum per periode)

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Model MMFE yang diperkenalkan oleh Graves et al. dan diterapkan oleh Forel & Grunow (2023) mengasumsikan bahwa prakira permintaan $F_{t|\tau}$ pada periode $t$ yang dibuat pada horizon $\tau$ ($t \geq \tau$) mengikuti proses *martingale*:

$$F_{t|\tau} = F_{t|\tau-1} + \varepsilon_{t,\tau}, \quad \text{dengan} \quad \mathbb{E}[\varepsilon_{t,\tau}|\mathcal{F}_{\tau-1}] = 0$$

yang berarti update prakira merupakan *martingale difference sequence*. Bentuk parametrik yang lazim adalah:

$$F_{t|\tau} = F_{t|\tau-1} \cdot \exp\left(-\alpha\right) + \text{koreksi} + \varepsilon_{t,\tau}$$

dengan parameter $\alpha > 0$ mengontrol kecepatan konvergensi prakira menuju nilai aktual. Distribusi $\varepsilon_{t,\tau}$ lazim dimodelkan sebagai Normal multivariat dengan kovarians $\Sigma_t$. Substitusi MMFE ke dalam program stokastik menghasilkan struktur *scenario tree* dengan percabangan prakira yang realistis, berbeda dari scenario tree SAA (*Sample Average Approximation*) naif yang mengasumsikan permintaan langsung stasioner.

### 2.3 Production Recourse dan Replanning Flexibility

Forel & Grunow (2023) memperkenalkan variabel recourse $q_t^+$ dan $q_t^-$ sebagai kemampuan menyesuaikan produksi di periode $t$ setelah prakira baru tersedia. Fungsional biaya recourse:

$$C^{rec}(q_t^+, q_t^-) = c_t^+ q_t^+ + c_t^- q_t^-$$

dengan kendala **non-anticipativity** yang menjamin keputusan lot awal tidak dapat mengantisipasi realisasi permintaan aktual:

$$\sum_{s \in \xi_t} \pi_s \cdot q_t^{(s)} = Q_t^{\text{plan}}, \quad \forall \xi_t \in \text{info set at } t$$

### 2.4 Fungsi Objektif Total Model Hibrida

Menggabungkan semua komponen, fungsi objektif total model hibrida Lead Researchers (2025) dapat ditulis sebagai:

$$Z^* = \min \; \sum_{t=1}^{T} \left[s_t y_t + c_t q_t + \mathbb{E}_{\omega}\left(\sum_{t'=t}^{T} h_{t'} I_{t'}^{+} + b_{t'} I_{t'}^{-} + c_{t'}^{+} q_{t'}^{+} + c_{t'}^{-} q_{t'}^{-}\right)\right]$$

subject to:

$$I_{t,\omega} = I_{t-1,\omega} + q_t + q_t^+(\omega) - q_t^-(\omega) - D_{t,\omega}, \quad \forall t, \forall \omega \in \Omega$$

$$q_t + q_t^+(\omega) \leq M \cdot y_t, \quad I_{t,\omega} \geq -B \text{ (backorder limit)}$$

di mana $\omega$ merepresentasikan skenario permintaan dan $\Omega$ adalah himpunan skenario.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida Lead Researchers (2025) dalam SOP industri mengikuti kerangka tujuh-tahap berikut:

**Tahap 1 – Pengumpulan Data Historis dan Estimasi Parameter.** Kumpulkan minimal 36 bulan data permintaan $D_t$, biaya produksi $c_t$, biaya setup $s_t$, dan kapasitas produksi $C^{cap}$. Estimasi parameter MMFE ($\alpha$, $\Sigma_t$) menggunakan metode *maximum likelihood* pada residuals prakira historis.

**Tahap 2 – Generasi Scenario Tree.** Bangun *scenario tree* dengan dua pendekatan paralel: (a) Monte Carlo Simulation dengan 1.000–5.000 skenario untuk mengestimasi expected costs, (b) moment-matching berdasarkan MMFE untuk menjamin distribusi prakira realistis. Reduksi skenario menggunakan *scenario reduction* (Heitsch & Römisch) menjadi 50–200 skenario representatif.

**Tahap 3 – Formulasi Model dan Validasi.** Bangun model Mixed-Integer Stochastic Program (MISP) di atas platform optimasi (Gurobi, CPLEX, atau Pyomo + HiGHS). Validasi dengan *backtesting* pada data historis out-of-sample.

**Tahap 4 – Integrasi dengan Rolling-Horizon Planning (RHP).** Tetapkan horizon perencanaan $\tau$ (umumnya 3–6 bulan) dan *replanning interval* $f$ (mingguan atau dwimingguan). Pada setiap *replanning*, refresh prakira, re-optimasi lot decisions, dan pertahankan keputusan jangka panjang (frozen horizon 1–2 periode).

**Tahap 5 – Eksekusi Keputusan dan Monitoring.** Implementasikan rencana produksi, monitor *fill rate*, *inventory turn*, dan *stockout frequency*. Bandingkan dengan baseline deterministik.

**Tahap 6 – Recalibration Berkala.** Setiap kuartal, kalibrasi ulang parameter MMFE dan *safety factor* berdasarkan *forecast bias* dan *tracking signal*.

**Tahap 7 – Continuous Improvement dan Audit.** Lakukan audit SOP mengacu pada ISO 9001 (manajemen mutu) dan SCOR 12.0 (Supply Chain Operations Reference) untuk benchmarking lintas industri.

Diagram alir proses:

```
[Data Historis] → [Estimasi Parameter MMFE] → [Generasi Scenario Tree]
        ↓                                              ↓
[Validasi Backtesting] ← [Formulasi MISP] ← [Reduksi Skenario]
        ↓
[Roll-Forward Optimasi] → [Eksekusi Produksi] → [Monitoring KPI]
        ↓                                              ↓
[Recalibration] ← [Audit SCOR/ISO] ← [Performance Reporting]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Konteks Kasus:** Pabrik *food & beverage* dengan lini produksi saus botol 250 ml. Data operasional:

| Parameter | Nilai |
|-----------|-------|
| Horizon $T$ | 6 periode (bulan) |
| Permintaan aktual $D_t$ | [3.200, 3.500, 4.100, 3.800, 4.400, 5.000] unit |
| Biaya produksi $c_t$ | Rp 8.000/unit |
| Biaya setup $s_t$ | Rp 1.200.000 |
| Biaya holding $h_t$ | Rp 600/unit/bulan |
| Biaya backorder $b_t$ | Rp 2.400/unit |
| Biaya recourse $c_t^+, c_t^-$ | Rp 12.000 / Rp 10.000 |
| Kapasitas $M$ | 6.000 unit/period |

**Prakira awal (F):** [3.300, 3.600, 4.000, 4.100, 4.500, 4.800]

**Update prakira MMFE** (parameter $\alpha = 0{,}15$, $\sigma = 250$):

$$F_{t|\tau} = F_{t|\tau-1} \cdot (1-\alpha) + \varepsilon_{t,\tau}, \quad \varepsilon \sim N(0, \sigma^2)$$

Untuk $t=2$ dengan $F_{2|1} = 3.600$ dan $\varepsilon_{2,1} = -50$:

$$F_{2|2} = 3.600 \cdot 0{,}85 + (-50) = 3.010$$

**Kasus A — Model Deterministik Naif (tanpa MMFE):**

Penyelesaian dengan lot sizing klasik menghasilkan rencana produksi $q_t = [3.300, 3.600, 4.000, 4.100, 4.500, 4.800]$.

$$I_1 = 3.300 - 3.200 = 100$$
$$I_2 = 100 + 3.600 - 3.500 = 200$$