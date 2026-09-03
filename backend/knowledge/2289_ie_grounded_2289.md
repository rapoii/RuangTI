# 2289 — Modul Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot (*Lot Sizing*) dan Penjadwalan Produksi
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur global menghadapi tantangan struktural yang semakin kompleks akibat volatilitas permintaan pascapandemi, fragmentasi rantai pasok, dan pergeseran perilaku konsumen menuju kustomisasi massal. Dalam konteks ini, keputusan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) berada di garis depan operasi karena secara langsung memengaruhi biaya persediaan, biaya produksi, *service level*, dan utilisasi kapasitas. Lead Researchers (2025) menyoroti bahwa pendekatan deterministik tradisional—seperti *Wagner-Whitin*, *Silver-Meal*, atau *Economic Order Quantity* (EOQ)—menghasilkan keputusan yang suboptimal ketika permintaan aktual menyimpang signifikan dari rencana awal. Ketidakpastian permintaan (*demand uncertainty*) merupakan variabel kritis yang bila diabaikan dapat menaikkan total biaya logistik hingga 15–25% pada industri proses dan *discrete manufacturing* (Forel & Grunow, 2023).

Kesenjangan antara riset akademik dan praktik industri menjadi masalah klasik yang teridentifikasi secara empiris. Forel dan Grunow (2023) menyatakan secara eksplisit: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates"* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Fenomena ini menciptakan paradoks operasional: perusahaan mengadopsi perencanaan berulang (*rolling-horizon planning*) untuk menyerap guncangan permintaan, namun model keputusan yang digunakan tetap deterministik sehingga *safety stock* harus dinaikkan secara ad-hoc. Lead Researchers (2025) menjawab paradoks ini dengan mengusulkan **model optimasi stokastik hibrida** yang mengintegrasikan struktur *lot sizing* multi-item dengan konstrain penjadwalan kapasitas pada *single machine* atau *parallel machine*, diselesaikan melalui dekomposisi *Benders* dan *sample average approximation* (SAA). Urgensi ekonomi dari adopsi model ini tecermin dari potensi penghematan biaya total sebesar 7–12% yang dilaporkan pada studi kasus mereka, dengan peningkatan *fill rate* hingga 4–6 poin persentase.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Stokastik Dua-Tahap dengan Recourse (*Two-Stage Stochastic Program*)

Formulasi inti mengikuti kerangka *stochastic programming* di mana keputusan tingkat pertama (*here-and-now*) berupa ukuran lot dan *setup* dilakukan sebelum realisasi permintaan, sedangkan keputusan tingkat kedua (*recourse*) berupa penyesuaian produksi melalui lembur, *subcontracting*, atau *backlogging* dilakukan setelah permintaan teramati.

Misalkan himpunan periode perencanaan $T = \{1, 2, \ldots, |T|\}$, himpunan item $I = \{1, 2, \ldots, |I|\}$, dan himpunan skenario permintaan $\Omega = \{1, 2, \ldots, |\Omega|\}$ dengan probabilitas $\pi_\omega$. Parameter biaya meliputi $c_i^t$ (biaya produksi variabel), $h_i^t$ (biaya *holding*), $s_i^t$ (biaya *setup*), $p_i^t$ (waktu produksi unit), $r_i^{\omega,t}$ (biaya *recourse* per unit), dan kapasitas reguler $C^t$ serta lembur $C^{ot,t}$. Variabel keputusan biner $y_i^t \in \{0,1\}$ mengindikasikan *setup*, variabel kontinyu $x_i^{\omega,t}$ menyatakan kuantitas produksi, $I_i^{\omega,t}$ adalah level persediaan, dan $w_i^{\omega,t}$ adalah kuantitas recourse.

Fungsi objektif meminimalkan ekspektasi biaya total:

$$\min \; Z = \sum_{t \in T} \sum_{i \in I} \left( s_i^t \cdot y_i^t + c_i^t \cdot x_i^{\omega,t} \right) + \sum_{\omega \in \Omega} \pi_\omega \sum_{t \in T} \sum_{i \in I} \left( h_i^t \cdot I_i^{\omega,t} + r_i^{\omega,t} \cdot w_i^{\omega,t} \right)$$

Tunduk pada konstrain:

$$\sum_{i \in I} p_i^t \cdot x_i^{\omega,t} \leq C^t \quad \forall t \in T, \forall \omega \in \Omega \quad \text{(kapasitas reguler)}$$

$$I_i^{\omega,t} = I_i^{\omega,t-1} + x_i^{\omega,t} + w_i^{\omega,t} - d_i^{\omega,t} \quad \forall i, t, \omega \quad \text{(keseimbangan persediaan)}$$

$$x_i^{\omega,t} \leq M \cdot y_i^t \quad \forall i, t, \omega \quad \text{(linkage setup-produksi)}$$

$$I_i^{\omega,t} \geq 0, \; y_i^t \in \{0,1\} \quad \forall i, t \quad \text{(non-negativitas dan biner)}$$

### 2.2 Model Martingale Evolusi Forecast (MMFE)

Forel dan Grunow (2023) memperkenalkan **Martingale Model of Forecast Evolution** untuk menangkap dinamika pembaruan permintaan dalam kerangka *rolling-horizon*. Jika $D_t$ adalah permintaan aktual pada periode $t$ dan $F_t^k$ adalah forecast yang dibuat pada periode $k$ untuk periode $t$, MMFE mendefinisikan:

$$F_t^k = D_t + \sum_{j=k+1}^{t} \epsilon_j \quad \forall \, t > k$$

dengan $\epsilon_j$ adalah *forecast error* independen berdistribusi normal $\mathcal{N}(0, \sigma_j^2)$. Kovarians antar forecast pada waktu berbeda diberikan oleh:

$$\text{Cov}(F_t^{k_1}, F_t^{k_2}) = \sum_{j=\min(k_1,k_2)+1}^{t} \sigma_j^2 \quad \text{(untuk } k_1 \neq k_2 \text{)}$$

Struktur kovarians ini memungkinkan model stokastik secara koheren mengantisipasi bahwa informasi baru akan tersedia seiring berjalannya waktu. Varian forecast secara *closed-form*:

$$\text{Var}(F_t^k) = \sum_{j=k+1}^{t} \sigma_j^2 = \sigma_t^2(k)$$

### 2.3 Fungsi Nilai *Rolling-Horizon*

Nilai optimal dari keputusan lot sizing pada horizon pendek dimodelkan sebagai *Bellman equation*:

$$V_t(F_t^t, I_t) = \min_{y_t, x_t} \left\{ c_t^\top x_t + s_t^\top y_t + h_t^\top I_t + \mathbb{E}\left[ V_{t+1}(F_{t+1}^t, I_{t+1}) \mid F_t^t \right] \right\}$$

yang menangkap *trade-off* antara biaya saat ini dan ekspektasi biaya masa depan bersyarat forecast yang tersedia.

### 2.4 Hibridisasi dengan Penjadwalan

Lead Researchers (2025) melakukan hibridisasi dengan menyertakan konstrain penjadwalan *disjunctive* pada level mesin:

$$\sum_{i \in I} \sum_{s \in S_i} z_{i,s}^{\omega,t} = 1 \quad \forall t, \omega \quad \text{(penugasan job)}$$

di mana $z_{i,s}^{\omega,t}$ adalah variabel biner penugasan job $i$ pada *sequence slot* $s$. Hibridisasi diselesaikan melalui dekomposisi *Benders* dengan *cut generation* untuk variabel lot sizing dan *branch-and-price* untuk subproblem penjadwalan.

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi model hibrida di industri mengikuti **delapan tahap SOP** berikut berdasarkan sintesis Lead Researchers (2025) dan Forel & Grunow (2023):

**Tahap 1 — Akuisisi Data Historis.** Kumpulkan minimal 36 bulan data permintaan, lead time, downtime mesin, dan biaya operasional. Bersihkan data dari *outlier* menggunakan metode *Tukey's fences* dengan $k = 1.5 \times \text{IQR}$.

**Tahap 2 — Kalibrasi MMFE.** Estimasi varians *forecast error* $\sigma_j^2$ menggunakan dekomposisi variance yang dijelaskan Forel & Grunow: $\sigma_j^2 = \text{Var}(F_t^{k} - F_t^{k-1})$. Uji stasioneritas dengan *Augmented Dickey-Fuller*.

**Tahap 3 — Generasi Skenario.** Gunakan *Monte Carlo simulation* untuk membangkitkan $|\Omega| = 200$–500 skenario permintaan. Terapkan teknik reduksi skenario (*scenario reduction*) melalui algoritma *forward selection* Heitsch & Römisch untuk mempertahankan momen statistik utama.

**Tahap 4 — Formulasi Model.** Bangun model Mixed-Integer Stochastic Program (MISP) menggunakan *modeling language* seperti GAMS, AMPL, atau Pyomo. Masukkan konstrain kapasitas, *setup*, dan keseimbangan persediaan.

**Tahap 5 — Solusi Numerik.** Selesaikan melalui dekomposisi *Benders* dengan master problem menentukan $y_i^t$ dan subproblem menyelesaikan recourse. Gunakan *warm-start* dengan solusi deterministik EOQ.

**Tahap 6 — Validasi Out-of-Sample.** Jalankan simulasi *rolling-horizon* dengan periode re-planning $\tau = 1$ minggu. Bandingkan biaya dengan model deterministik menggunakan *paired t-test* pada level signifikansi $\alpha = 0.05$.

**Tahap 7 — Implementasi ERP Integration.** Integrasikan output model ke modul MRP/ERP melalui API. Atur *trigger* otomatis untuk re-optimasi saat *forecast refresh* diterima.

**Tahap 8 — Continuous Monitoring.** Pantau *tracking signal* performa forecast dan *service level*. Lakukan re-kalibrasi MMFE setiap kuartal.

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Data Historis   │───▶│ Kalibrasi MMFE   │───▶│ Generasi Skenario│
└─────────────────┘    └──────────────────┘    └──────────────────┘
                                                       │
┌─────────────────┐    ┌──────────────────┐             ▼
│ ERP / MRP       │◀───│ Optimasi MISP    │◀────┌──────────────────┐
│ Implementation  │    │ (Benders + SAA)  │     │ Reduksi Skenario │
└─────────────────┘    └──────────────────┘     └──────────────────┘
         ▲                       ▲
         │                       │
┌─────────────────┐    ┌────────┴─────────┐
│ Monitoring KPI
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
