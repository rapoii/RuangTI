# 1665 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, Vol. 54(2), pp. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning. *Production and Operations Management*, 32(11), 3613–3631. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu tantangan fundamental dalam manajemen operasi manufaktur modern. Dalam ekosistem *make-to-stock* dan *make-to-order*, keputusan terkait kuantitas produksi, waktu setup, dan alokasi kapasitas memiliki dampak langsung terhadap *Total Relevant Cost* yang terdiri dari biaya setup, biaya inventory carrying, dan biaya backorder. Studi oleh Lead Researchers (2025) yang dipublikasikan di *Cuestiones de Fisioterapia* menyoroti bahwa pendekatan deterministik tradisional seperti model Wagner-Whitin (1958) maupun Lot-for-Lot (L4L) tidak mampu mengakomodasi volatilitas permintaan yang merupakan karakteristik inheren dari permintaan konsumen di era *Industry 4.0*. DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

Konteks industri yang melatarbelakangi pengembangan model hibrida ini sangat relevan dengan praktik nyata. Dalam industri FMCG (*Fast-Moving Consumer Goods*), komponen otomotif, dan produksi kimia hilir, permintaan harian seringkali mengikuti pola musiman dengan coefficient of variation (CV) yang dapat melampaui 0,30. Sebagai contoh, rantai pasok komponen otomotif di Eropa menghadapi permintaan dengan volatilitas 25–40% yang dipengaruhi oleh siklus peluncuran model baru (*product life cycle introduction*) dan fluktuasi makroekonomi. Penelitian Forel & Grunow (2023) yang dimuat di *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menunjukkan kesenjangan antara riset akademis dan praktik industri: walaupun model stokastik telah berkembang pesat, lebih dari 78% perusahaan manufaktur masih menggunakan model deterministik dalam *Enterprise Resource Planning* (ERP) mereka dan mengkompensasi ketidakpastian melalui *rolling-horizon planning* dengan pembaruan forecast mingguan.

Urgensi ekonomis dari optimisasi lot sizing sangat substansial. Berdasarkan studi empiris Lead Researchers (2025), implementasi model hibrida stokastik mampu menurunkan total biaya perencanaan produksi hingga 8–15% dibandingkan dengan pendekatan deterministik berbasis *safety stock* statis. Penghematan ini berasal dari dua mekanisme utama: pertama, pengurangan *bullwhip effect* melalui integrasi informasi ketidakpastian dalam keputusan lot sizing; kedua, optimalisasi tradeoff antara biaya setup dan biaya inventory yang adaptif terhadap pola evolusi forecast. Dengan kata lain, paper Lead Researchers (2025) dan Forel & Grunow (2023) bersama-sama membangun pondasi teoretis dan empiris bagi transisi paradigma dari *deterministic lot sizing* menuju *dynamic stochastic lot sizing with production recourse* yang lebih representatif terhadap realitas operasional kontemporer.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik Wagner-Whitin sebagai Baseline

Sebelum membahas ekstensi stokastik, perlu dirumuskan baseline deterministik yang menjadi titik referensi. Untuk horizon perencanaan $T$ periode, model Wagner-Whitin meminimalkan fungsi biaya total:

$$Z = \min \sum_{t=1}^{T} \left[ s \cdot y_t + \sum_{k=t}^{T} h \cdot (k-t) \cdot d_k + \sum_{k=t}^{T} c \cdot d_k \right]$$

dengan kendala:

$$I_{t-1} + q_t - d_t = I_t, \quad \forall t \in \{1,\ldots,T\}$$
$$\sum_{i=1}^{t} q_i = \sum_{i=1}^{t} d_i, \quad \forall t$$
$$q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad q_t, I_t \geq 0$$

di mana $s$ adalah biaya setup, $h$ adalah biaya holding per unit per periode, $c$ adalah biaya produksi variabel, $d_t$ adalah permintaan deterministik, $y_t$ adalah variabel keputusan biner setup, $q_t$ adalah kuantitas produksi, $I_t$ adalah inventory level akhir periode, dan $M$ adalah *big-M* yang merepresentasikan kapasitas produksi maksimum.

### 2.2 Ekstensi Stokastik dengan Multi-Scenario Recourse

Lead Researchers (2025) mengusulkan formulasi stokastik dua-tahap (*two-stage stochastic programming*) yang menangkap ketidakpastian permintaan melalui himpunan skenario $\Omega$. Permintaan menjadi variabel acak $\tilde{d}_t(\omega)$ untuk setiap skenario $\omega \in \Omega$ dengan probabilitas $p(\omega)$. Fungsi objektif berubah menjadi:

$$\min \sum_{t=1}^{T} \left[ s \cdot y_t + c \cdot q_t \right] + \mathbb{E}_\omega \left[ \sum_{t=1}^{T} \left( h \cdot I_t^+(\omega) + b \cdot I_t^-(\omega) \right) \right]$$

di mana $I_t^+$ adalah inventory positif (holding), $I_t^-$ adalah *backorder* dengan biaya $b > h$, dan $\mathbb{E}_\omega$ adalah operator ekspektasi terhadap distribusi skenario. Formulasi ini disebut *recourse* karena keputusan lot sizing tahap pertama (here-and-now) harus mampu mengakomodasi keputusan recourse tahap kedua (wait-and-see) berupa penyesuaian produksi di periode berikutnya.

### 2.3 Model Martingale of Forecast Evolution (MMFE)

Forel & Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) yang merepresentasikan evolusi forecast secara stokastik:

$$\tilde{d}_{t+1} = \tilde{d}_t + \varepsilon_{t+1}$$

di mana $\varepsilon_{t+1}$ adalah *forecast error* dengan mean nol $\mathbb{E}[\varepsilon_{t+1} | \mathcal{F}_t] = 0$ dan varian $\sigma^2_{\varepsilon,t}$ yang dapat bersifat heteroskedastik. MMFE memiliki sifat *martingale*: ekspektasi bersyarat dari forecast di periode berikutnya adalah forecast saat ini. Model ini memungkinkan integrasi dinamika pembaruan forecast ke dalam keputusan lot sizing secara proaktif, bukan reaktif.

### 2.4 Model Hibrida: Integrasi Scenario-based dan MMFE

Paper Lead Researchers (2025) mengintegrasikan MMFE dengan optimisasi stokastik dua-tahap. Formulasi lengkap (*Mixed Integer Stochastic Program* — MISP) adalah:

$$\min \sum_{t=1}^{T} \left[ s \cdot y_t + c \cdot q_t \right] + \sum_{\omega \in \Omega} p(\omega) \cdot \sum_{t=1}^{T} \left[ h \cdot I_t(\omega) + p \cdot r_t(\omega) \right]$$

subject to:

$$I_{t-1}(\omega) + q_t + r_t(\omega) - \tilde{d}_t(\omega) = I_t(\omega), \quad \forall t, \omega$$
$$q_t + r_t(\omega) \leq C_t, \quad \forall t, \omega$$
$$r_t(\omega) \leq C_t \cdot z_t(\omega), \quad z_t(\omega) \in \{0,1\}$$
$$\tilde{d}_{t+1}(\omega) = \tilde{d}_t(\omega) + \varepsilon_{t+1}(\omega), \quad \forall t, \omega$$

di mana $r_t(\omega)$ adalah kuantitas recourse (produksi darurat/overtime) pada skenario $\omega$, $p$ adalah biaya recourse per unit (umumnya $p > c$), $C_t$ adalah kapasitas periode $t$, dan $z_t(\omega)$ adalah indikator aktivasi recourse.

Kompleksitas komputasional model ini bersifat $\mathcal{O}(|\Omega| \cdot T \cdot I)$ dengan $I$ sebagai jumlah item, sehingga teknik dekomposisi seperti *Benders Decomposition* atau *Progressive Hedging Algorithm* (PHA) diperlukan untuk implementasi pada skala industri. Lead Researchers (2025) melaporkan bahwa algoritma PHA dengan *scenario bundling* mampu menyelesaikan instance dengan $|\Omega| = 500$ skenario dan $T = 52$ minggu dalam waktu kurang dari 10 menit pada platform komputasi standar.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida stokastik di lingkungan industri mengikuti prosedur operasional standar yang terdiri atas tujuh tahap sistematis:

**Tahap 1 — Karakterisasi Data Historis dan Distribusi Permintaan.** Pengumpulan data permintaan historis minimal 24–36 periode (bulanan) atau 104 periode (mingguan). Uji stasioneritas menggunakan *Augmented Dickey-Fuller Test* dan identifikasi pola musiman melalui dekomposisi STL (*Seasonal-Trend decomposition using Loess*). Estimasi parameter MMFE dilakukan dengan metode *Maximum Likelihood Estimation* (MLE).

**Tahap 2 — Generasi Skenario.** Pembangkitan skenario permintaan menggunakan *Monte Carlo Simulation* dengan mempertahankan korelasi antar-item dan korelasi temporal. Jumlah skenario $|\Omega|$ yang direkomendasikan Lead Researchers (2025) adalah antara 100–1000, tergantung horizon dan tingkat granularitas.

**Tahap 3 — Formulasi Model MISP.** Penyusunan model Mixed Integer Stochastic Program sesuai formulasi pada Bagian 2.4 dengan parameter yang telah dikalibrasi.

**Tahap 4 — Solusi Komputasional.** Eksekusi algoritma PHA atau Benders Decomposition menggunakan *solver* komersial (Gurobi, CPLEX) atau *open-source* (HiGHS, SCIP).

**Tahap 5 — Validasi dengan Rolling-Horizon Backtesting.** Forel & Grunow (2023) menekankan pentingnya validasi melalui *rolling-horizon backtest*: model dijalankan secara iteratif dengan informasi forecast yang diperbarui setiap periode, mensimulasikan proses keputusan riil di lantai produksi.

**Tahap 6 — Integrasi ERP/MES.** Output keputusan lot sizing diintegrasikan ke dalam modul *Production Planning* ERP (SAP PP/DS, Oracle ASCP) atau *Manufacturing Execution System* (MES) melalui API atau batch interface.

**Tahap 7 — Monitoring & Continuous Improvement.** Pemantauan *Key Performance Indicators* (KPI): service level, inventory turnover, setup frequency, dan total cost variance. Kalibrasi ulang parameter dilakukan setiap kuarter berdasarkan data aktual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik