# 2481 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi pada Sistem Perencanaan *Rolling-Horizon*

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*  
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54, No. 2, hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)  
**Sitasi Pendukung:** Forel & Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuduan dan Konteks Industri

Penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan tulang punggung perencanaan manufaktur modern. Dalam ekosistem Industri 4.0, perusahaan menghadapi volatilitas permintaan yang semakin tinggi akibat fragmentasi rantai pasok, pergeseran perilaku konsumen pasca-pandemi, dan ketidakpastian makroekonomi. Lead Researchers (2025) mencatat bahwa lebih dari 70% perusahaan manufaktur di Eropa masih mengandalkan model deterministik MRP-II untuk menentukan rencana produksi, meskipun diketahui bahwa pendekatan tersebut menyebabkan **efek whip** (*bullwhip effect*) yang signifikan — di mana variance permintaan dapat membengkak 4–6 kali lipat ketika berpindah dari hilir ke hulu rantai pasok. DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

Secara operasional, perusahaan dituntut untuk menyeimbangkan tiga trade-off fundamental: (i) biaya *setup* (S) yang muncul setiap kali mesin di-*changeover*, (ii) biaya *holding* inventaris (h) yang proporsional dengan stok rata-rata, dan (iii) biaya *backorder* atau stockout (b) akibat ketidakmampuan memenuhi permintaan tepat waktu. Model Wagner-Whitin klasik (1958) hanya relevan ketika permintaan diketahui sempurna; pada kondisi nyata, asumsi deterministik ini menjadi sumber utama inefisiensi. Forel & Grunow (2023) menunjukkan dalam studi empiris mereka terhadap 26 perusahaan FMCG dan *consumer electronics* bahwa rata-rata *overstock* inventaris mencapai 18–24% di atas level optimal ketika model deterministik diterapkan tanpa mekanisme *forecast update*. DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881).

Urgensi operasional makin terasa dengan hadirnya teknologi *advanced planning systems* (APS) dan integrasi IoT pada lini produksi. Data sensor real-time memungkinkan perusahaan memperbarui ramalan permintaan mingguan atau harian. Namun, tanpa formulasi matematis yang secara eksplisit meng-*encode* proses evolusi ramalan (*forecast evolution*), pembaruan tersebut tidak dapat dimanfaatkan secara optimal dalam keputusan lot sizing. Inilah celah yang dijawab oleh model hibrida stokastik yang diusulkan Lead Researchers (2025): menggabungkan *stochastic programming* dengan *martingale model of forecast evolution* (MMFE) dan mekanisme *rolling-horizon* dengan *production recourse*. Integrasi tiga pilar ini menghasilkan kerangka keputusan yang adaptif, *forward-looking*, namun tetap kompatibel dengan praktik industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Struktur Model

Misalkan terdapat himpunan periode waktu $t \in \mathcal{T} = \{1, 2, \dots, T\}$, himpunan produk $i \in \mathcal{I} = \{1, 2, \dots, I\}$, dan himpunan skenario permintaan $\omega \in \Omega$. Parameter dan variabel keputusan utama:

**Parameter:**
- $p_i$ = biaya produksi variabel per unit produk $i$
- $h_i$ = biaya simpan per unit produk $i$ per periode
- $s_i$ = biaya setup untuk produk $i$
- $c_t$ = kapasitas produksi tersedia pada periode $t$
- $a_i$ = waktu proses per unit produk $i$
- $b_i$ = waktu setup produk $i$
- $d_{it}^{\tau}$ = permintaan produk $i$ pada periode $t$ yang diramalkan pada periode $\tau \leq t$

**Variabel Keputusan:**
- $x_{it}^{\omega} \geq 0$ = jumlah produksi produk $i$ pada periode $t$ dalam skenario $\omega$
- $y_{it}^{\omega} \in \{0,1\}$ = variabel biner setup produk $i$ pada periode $t$ skenario $\omega$
- $I_{it}^{\omega}$ = inventaris akhir periode $t$ produk $i$ skenario $\omega$

### 2.2 Model Martingale of Forecast Evolution (MMFE)

Forel & Grunow (2023) memperkenalkan MMFE yang memenuhi properti martingale berikut:

$$\mathbb{E}[d_{it}^{\tau} \mid \mathcal{F}_{\tau-1}] = d_{it}^{\tau-1}, \quad \forall i \in \mathcal{I}, t > \tau$$

dengan $\mathcal{F}_{\tau}$ adalah *filtration* informasi hingga periode $\tau$. Ini berarti ramalan terbaik untuk permintaan $d_{it}$ berdasarkan informasi hingga $\tau-1$ adalah ramalan yang dibuat di periode $\tau-1$. Volatilitas ramalan dikuantifikasi melalui:

$$\text{Var}(d_{it}^{\tau} \mid \mathcal{F}_{\tau-1}) = \sigma_{it}^2 \cdot (1 - \alpha^{t-\tau+1})$$

dengan $\alpha \in (0,1)$ adalah *smoothing factor* yang mengukur laju konvergensi ramalan terhadap realisasi aktual.

### 2.3 Formulasi Optimisasi Stokastik

Fungsi tujuan meminimalkan ekspektasi biaya total:

$$\min \sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \mathbb{E}_{\omega}\left[ p_i x_{it}^{\omega} + s_i y_{it}^{\omega} + h_i I_{it}^{\omega} \right]$$

dengan kendala:

$$I_{i,t-1}^{\omega} + x_{it}^{\omega} - d_{it}^{\omega} = I_{it}^{\omega} \quad \forall i, t, \omega \quad (1)$$

$$x_{it}^{\omega} \leq M_i \cdot y_{it}^{\omega} \quad \forall i, t, \omega \quad (2)$$

$$\sum_{i \in \mathcal{I}} \left( a_i x_{it}^{\omega} + b_i y_{it}^{\omega} \right) \leq c_t \quad \forall t, \omega \quad (3)$$

$$I_{it}^{\omega} \geq 0, \quad x_{it}^{\omega} \geq 0, \quad y_{it}^{\omega} \in \{0,1\} \quad (4)$$

Kendala (1) menjamin keseimbangan inventaris, (2) adalah *big-M linking* setup-produksi, (3) adalah kendala kapasitas, dan (4) adalah domain variabel.

### 2.4 Mekanisme *Production Recourse*

Lead Researchers (2025) memperkenalkan variabel recourse $x_{it}^{\text{rec}}$ yang merepresentasikan penyesuaian produksi setelah pembaruan ramalan:

$$x_{it}^{\omega} = x_{it}^{\text{base}} + x_{it}^{\text{rec},\omega}$$

dengan biaya recourse $c^{\text{rec}} > p_i$ untuk menghukum perubahan mendadak. Pembaruan ini hanya diizinkan untuk periode $t \geq \tau + \Delta$, dengan $\Delta$ adalah *lead time* minimum.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model di atas memerlukan SOP terstruktur sebagai berikut:

**Langkah 1 – Akuisisi & Pembersihan Data Historis.** Kumpulkan data permintaan 36–60 bulan terakhir, bersihkan outlier menggunakan metode *interquartile range* (IQR), dan segmentasi berdasarkan SKU serta pola musiman. Validasi menggunakan *tracking signal* dengan ambang batas $\pm 4$.

**Langkah 2 – Estimasi Parameter MMFE.** Tentukan $\alpha$ melalui *maximum likelihood estimation* (MLE) pada residual ramalan historis. Hitung:

$$\hat{\alpha} = \arg\max_{\alpha} \prod_{t=1}^{T} \frac{1}{\sqrt{2\pi\hat{\sigma}_t^2}} \exp\left(-\frac{(d_t - \hat{d}_t^{\tau})^2}{2\hat{\sigma}_t^2}\right)$$

**Langkah 3 – Generasi Skenario.** Gunakan *Monte Carlo simulation* untuk membangkitkan $N_{\omega} = 200\text{–}500$ skenario permintaan sesuai MMFE. Terapkan *scenario reduction* (algoritma Dupacova) untuk menurunkan menjadi 20–50 skenario representatif.

**Langkah 4 – Formulasi & Solusi.** Bangun model mixed-integer stochastic program (MISDP) menggunakan platform Gurobi atau CPLEX. Aktifkan *presolve*, *cuts* (Gomory, cover), dan *branch-and-bound* dengan *MIPGap* = 0,5%.

**Langkah 5 – Implementasi Rolling-Horizon.** Terapkan prosedur iteratif: pada setiap periode $\tau$, selesaikan model dengan horizon $T - \tau + 1$; amankan keputusan $x_{i\tau}$; *freeze* keputusan tersebut dan geser horizon ke depan. Frekuensi update mingguan sesuai praktik Forel & Grunow (2023) menunjukkan pengurangan biaya riil 7,3–12,1%.

**Langkah 6 – Monitoring & Re-optimization.** Pantau realisasi aktual vs ramalan, hitung *forecast accuracy* (MAPE, MASE). Jika MAPE > 15%, picu *re-estimation* parameter MMFE.

Diagram alir proses secara skematis:

```
[Data Historis] → [Estimasi MMFE] → [Generasi Skenario] → [Optimisasi MISDP]
        ↓                                                              ↓
   [IoT/SAP ERP]                                              [Solusi Lot Sizing]
                                                                     ↓
        [Realisasi Permintaan] ← [Eksekusi Produksi]