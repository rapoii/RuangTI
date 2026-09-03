# 1745 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan operasional paling kritikal dalam sistem manufaktur modern, dengan dampak langsung terhadap biaya inventaris, tingkat layanan pelanggan, dan efisiensi kapasitas produksi. Menurut Lead Researchers (2025) dalam jurnal *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)), pendekatan deterministik yang banyak diadopsi di industri gagal menangkap dinamika permintaan riil yang bersifat stokastik, sehingga menghasilkan rencana produksi yang suboptimal ketika dieksekusi di lantai pabrik. Studi tersebut mengusulkan model optimisasi stokastik hibrida yang secara eksplisit mengintegrasikan ketidakpastian permintaan ke dalam keputusan lot sizing dan sequencing secara simultan.

Urgensi permasalahan ini tampak dari praktik industri contemporary. Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) melaporkan bahwa meskipun pendekatan akademis yang mempertimbangkan ketidakpastian permintaan sudah mapan secara teoretis, industri justru sangat jarang mengimplementasikannya. Mayoritas perusahaan—khususnya di sektor consumer goods, farmasi, dan manufaktur diskrit—masih menggunakan model deterministik dengan safety stock tetap, lalu mengelola deviasi melalui mekanisme *rolling-horizon planning* yang memperbarui prakira secara periodik. Kesenjangan antara kapabilitas teoretis dan adopsi praktis inilah yang menjadi titik masuk kontribusi Lead Researchers (2025).

Secara ekonomis, keputusan lot sizing memengaruhi hingga 20–30% dari total biaya logistik dan rantai pasok di industri manufaktur mid-to-high volume. Ketidakpastian permintaan yang tidak tertangani dengan baik dapat menyebabkan fenomena *bullwhip effect*, di mana variabilitas permintaan kecil di tingkat retail beramplifikasi di sepanjang rantai pasok dan menghasilkan biaya persediaan serta backorder yang signifikan. Dalam konteks Indonesia—di mana sektor manufaktur menyumbang sekitar 19–21% PDB dan menghadapi permintaan domestik yang volatil—penguasaan terhadap metodologi stokastik untuk lot sizing menjadi kebutuhan strategis. Paper Lead Researchers (2025) berupaya menjembatani jurang tersebut dengan mengusulkan arsitektur hibrida: komponen optimasi stokastik dua-tahap (*two-stage stochastic programming*) untuk keputusan lot sizing tahap pertama, dan modul penjadwalan heuristik berbasis prioritas untuk menghasilkan sequence yang layak secara operasional pada tahap kedua.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar: Wagner–Whitin

Sebelum membahas ekstensi stokastik, penting untuk memahami fondasi deterministik yang menjadi basis perbandingan. Model Wagner–Whitin (1958) meminimalkan total biaya setup dan biaya holding selama horizon perencanaan $T$:

$$\min \sum_{t=1}^{T} \left( s_t + h_t \cdot I_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + q_t - d_t, \quad I_0 = 0, \quad I_t \geq 0$$

di mana $s_t$ adalah biaya setup pada periode $t$, $h_t$ adalah biaya holding per unit per periode, $I_t$ adalah inventaris akhir periode $t$, $q_t$ adalah kuantitas produksi pada periode $t$, dan $d_t$ adalah permintaan deterministik. Biner $y_t \in \{0,1\}$ mengindikasikan apakah setup dilakukan pada periode $t$, dengan konstrain *big-M*: $q_t \leq M \cdot y_t$.

### 2.2 Ekstensi Stokastik Dua-Tahap

Lead Researchers (2025) memperluas Wagner–Whitin ke dalam program stokastik dua-tahap. Permintaan $\tilde{d}_t$ diperlakukan sebagai variabel acak dengan skenario $\omega \in \Omega$ yang memiliki probabilitas $\pi_\omega$. Fungsi objektif harapan matematis:

$$\min \sum_{t=1}^{T} s_t \, y_t + \mathbb{E}_\omega \left[ \sum_{t=1}^{T} \left( h_t \cdot I_t(\omega) + p_t \cdot B_t(\omega) \right) \right]$$

dengan $B_t(\omega)$ merepresentasikan backorder pada skenario $\omega$ dan $p_t$ adalah penalty cost per unit backorder. Bentuk eksplisit:

$$\min \sum_{t=1}^{T} s_t y_t + \sum_{\omega \in \Omega} \pi_\omega \sum_{t=1}^{T} \left( h_t I_t^\omega + p_t B_t^\omega \right)$$

Kendala keseimbangan inventaris menjadi:

$$I_t^\omega = I_{t-1}^\omega + q_t^\omega - \tilde{d}_t^\omega, \quad \forall t, \omega$$

dengan $I_t^\omega \geq 0$, $B_t^\omega \geq 0$, dan $I_t^\omega \cdot B_t^\omega = 0$ (komplementaritas untuk mencegah inventaris positif simultan dengan backorder pada periode yang sama).

### 2.3 Model Martingale Prakira Evolusi (MMFE)

Forel dan Grunow (2023) memperkenalkan pendekatan *Martingale Model of Forecast Evolution* yang secara eksplisit memodelkan bagaimana prakira permintaan berevolusi seiring berlalunya waktu:

$$\tilde{D}_{t+k|t} = \tilde{D}_{t+k|t-1} + \tilde{\epsilon}_{t+k|t}$$

di mana $\tilde{D}_{t+k|t}$ adalah prakira permintaan pada periode $t+k$ yang dibuat di awal periode $t$, dan $\tilde{\epsilon}_{t+k|t}$ adalah *forecast revision* dengan ekspektasi nol $\mathbb{E}[\tilde{\epsilon}_{t+k|t}] = 0$. Pada saat eksekusi keputusan di periode $t$, prakira terbaru $\tilde{D}_{t+k|t}$ digunakan, dan seiring berjalannya waktu prakira direvisi menurut MMFE. Model ini mengkuantifikasi *value of forecast evolution*—penghematan biaya yang diperoleh dari informasi permintaan yang semakin akurat. Untuk kasus multi-period:

$$\tilde{D}_{t+k|t} = D_{t+k|t_0} + \sum_{\tau=t_0+1}^{t} \tilde{\epsilon}_{t+k|\tau}$$

dengan $D_{t+k|t_0}$ adalah prakira awal pada periode $t_0$.

### 2.4 Mekanisme Produksi Recourse

Lead Researchers (2025) mengintegrasikan fleksibilitas *recourse* yang memungkinkan koreksi keputusan lot sizing setelah realisasi permintaan parsial. Keputusan recourse $q_t^{rec}(\omega)$ memenuhi:

$$0 \leq q_t^{rec}(\omega) \leq q_t^{max}, \quad \forall t, \omega$$

dengan biaya recourse $c^{rec}$ per unit. Fungsi objektif menjadi:

$$\min \sum_{t=1}^{T} s_t y_t + \sum_{\omega \in \Omega} \pi_\omega \sum_{t=1}^{T} \left( h_t I_t^\omega + p_t B_t^\omega + c^{rec} \cdot q_t^{rec,\omega} \right)$$

### 2.5 Modul Penjadwalan Hibrida

Komponen penjadwalan mengadopsi formulasi *parallel machine scheduling* dengan urutan produksi $x_{ij} \in \{0,1\}$ mengindikasikan apakah job $i$ mendahului job $j$:

$$\min \sum_{i,j} w_{ij} \cdot C_j$$

dengan kendala transisi *setup time* $s_{ij}$ jika $x_{ij}=1$. Lead Researchers (2025) mengusulkan dekomposisi: masalah lot sizing diselesaikan via Benders decomposition, sedangkan subproblem penjadwalan diselesaikan melalui heuristik *shortest processing time* (SPT) atau *genetic algorithm* dengan populasi 100 individu dan 500 generasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid stochastic lot sizing di industri mengikuti SOP tujuh-tahap berikut:

**Tahap 1: Karakterisasi Permintaan.** Kumpulkan data historis permintaan minimal 24 periode (2 tahun). Uji stasioneritas dengan Augmented Dickey-Fuller test. Jika stasioner, fit distribusi (Normal, Poisson, atau Negative Binomial untuk data overdispersi). Jika non-stasioner, dekomposisi dengan STL atau SARIMA, lalu model residual stokastiknya.

**Tahap 2: Konstruksi Skenario.** Gunakan *moment matching* atau *Monte Carlo sampling* untuk membangkitkan $N=100$–$500$ skenario permintaan. Reduksi skenario dengan algoritma *forward selection* (Dupacova et al.) menjadi $K=20$–$50$ skenario representatif untuk menjaga tractability komputasi.

**Tahap 3: Formulasi Model.** Encode model two-stage stochastic program dalam platform optimasi (Gurobi, CPLEX, atau Pyomo). Definisikan parameter biaya dari data akunting: setup cost dari rata-rata biaya perubahan tooling, holding cost dari 20–25% annual carrying cost per unit, backorder cost dari profit margin yang hilang.

**Tahap 4: Kalibrasi Parameter MMFE.** Estimasi matriks kovariansi *forecast error* $\Sigma_\epsilon$ dari data prakira historis. Forel dan Grunow (2023) menunjukkan bahwa akurasi parameter MMFE menentukan efektivitas seluruh framework.

**Tahap 5: Optimasi Benders Decomposition.** Pisahkan master problem (keputusan lot sizing first-stage) dan subproblem (recourse). Iterasi hingga gap optimalitas $< 1\%$ atau iterasi mencapai batas maksimum 100.

**Tahap 6: Penjadwalan Heuristik.** Dari hasil lot sizing, generate sequence produksi menggunakan *priority dispatching*: job dengan *slack* terkecil dan *processing time* terpendek diprioritaskan.

**Tahap 7: Implementasi Rolling-Horizon.** Eksekusi rencana selama 1–4 periode (frozen horizon), lalu re-run optimasi dengan prakira terbaru untuk remaining horizon. Review periodik setiap periode produksi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Pabrik komponen otomotif di Surabaya dengan 3 produk (A, B, C) pada 1 lini produksi, horizon 6 periode.

**Parameter Input:**

| Parameter | A | B | C |
|-----------|---|---|---|
| $s_t$ (juta IDR) | 5.0 | 6.0 | 4.5 |
| $h_t$ (juta IDR/unit) | 0.05 | 0.07 | 0.04 |
| $p_t$ (juta IDR/unit) | 0.20 | 0.25 | 0.18 |
| Produksi max/unit | 80 | 60 | 90 |

**Permintaan (Normal, mean dan std):**

| Periode | A (μ, σ) | B (μ, σ) | C (μ, σ) |
|---------|----------|----------|----------|
| 1 | (40, 8) | (30, 6) | (50, 10) |
| 2 | (50, 10) | (25, 5) | (45, 9) |
| 3 | (35, 7) | (40, 8) | (55, 11) |
| 4 | (60, 12) | (35, 7) | (40