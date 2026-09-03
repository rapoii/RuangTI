# 2993 — Model Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua keputusan operasional yang saling terkait erat dalam sistem manufaktur modern, namun secara historis sering ditangani secara terpisah dalam literatur akademik. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* menegaskan bahwa integrasi keduanya melalui model optimasi stokastik hybrid menjadi kebutuhan strategis karena ketidakpastian permintaan (*demand uncertainty*) telah menjadi karakteristik permanen rantai pasok global pasca-pandemi. Dalam konteks industri nyata, keputusan lot sizing menentukan kuantitas produksi optimal pada setiap periode untuk meminimalkan total biaya yang terdiri dari biaya setup ($s_i$), biaya produksi per unit ($c_i$), biaya penyimpanan ($h_i$), dan biaya kekurangan persediaan ($p_i$). Sementara itu, penjadwalan produksi memastikan urutan dan alokasi kapasitas mesin dalam horizon perencanaan yang terbatas.

Forel dan Grunow (2023) menyoroti kesenjangan kritis (*research-practice gap*) yang selama ini menghambat adopsi model stokastik di industri. Mereka menemukan bahwa "pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan di praktik industri", padahal pendekatan deterministik yang diterapkan secara *rolling-horizon* tetap mengandung risiko inefisiensi biaya yang signifikan ketika terjadi pergeseran permintaan yang tajam (*demand shocks*). Fenomena ini diperparah oleh volatilitas permintaan komponen elektronik, makanan dan minuman, serta produk farmasi yang mengalami fluktuasi musiman maupun struktural. Urgensi ekonominya terlihat pada potensi penghematan 8–15% dari total biaya perencanaan produksi menurut studi empiris mereka pada kasus industri FMCG dan semikonduktor. Paper Lead Researchers (2025) mengusulkan model hybrid yang menjembatani kemampuan solusi eksak untuk problem kecil dan kemampuan *metaheuristic* untuk problem skala besar, sehingga dapat diadopsi pada MRP/ERP sistem yang menangani ratusan SKU dengan ribuan periode perencanaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Wagner-Whitin)

Formulasi *Uncapacitated Lot Sizing Problem* (ULSP) klasik sebagai titik tolak adalah:

$$\min Z = \sum_{i=1}^{T} \left( s_i \cdot y_i + c_i \cdot x_i + h_i \cdot s_i \right)$$

dengan kendala:

$$s_{i-1} + x_i = d_i + s_i, \quad \forall i = 1, \dots, T$$
$$x_i \leq M \cdot y_i, \quad y_i \in \{0,1\}, \quad x_i, s_i \geq 0$$

di mana $x_i$ adalah kuantitas produksi, $y_i$ adalah variabel biner setup, $s_i$ adalah *ending inventory*, dan $d_i$ adalah permintaan periode $i$. Wagner dan Whitin (1958) membuktikan bahwa ULSP memiliki *lot-for-lot* property pada periode permintaan positif, sehingga Dynamic Programming backward menjadi solver optimal dengan kompleksitas $O(T^2)$.

### 2.2 Formulasi Stokastik dengan *Recourse* (Forel & Grunow, 2023)

Forel dan Grunow (2023) mengembangkan formulasi *two-stage stochastic program* yang merepresentasikan ketidakpastian permintaan melalui skenario $\omega \in \Omega$:

$$\min_{x,y} \quad \sum_{i=1}^{T} (s_i y_i + c_i x_i) + \mathbb{E}_\xi \left[ Q(x, \tilde{\xi}) \right]$$

di mana fungsi recourse:

$$Q(x, \tilde{\xi}) = \min_{x^+, x^-} \sum_{i=1}^{T} (h_i^+ s_i^+ + h_i^- s_i^- + p_i \cdot \text{short}_i)$$

dengan kendala stokokastik:

$$s_{i-1} + x_i + x_i^+ - x_i^- - \text{short}_i = \tilde{d}_i^\omega + s_i, \quad \forall i, \omega$$

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Inovasi utama Forel dan Grunow (2023) adalah penerapan MMFE yang memungkinkan evolusi *forecast* seiring waktu. Bentuk matematisnya:

$$\tilde{d}_{i+k} = \tilde{d}_{i+k|i} + \sum_{j=i+1}^{i+k} \tilde{\epsilon}_j, \quad \tilde{\epsilon}_j \sim N(0, \sigma_j^2)$$

di mana $\tilde{d}_{i+k|i}$ adalah *forecast* untuk periode $i+k$ yang dibuat pada periode $i$, dan $\tilde{\epsilon}_j$ merepresentasikan *forecast error* yang independen. Model ini menghasilkan struktur korelasi antar permintaan secara endogen, berbeda dengan asumsi independensi pada model stokastik konvensional.

### 2.4 Model Hybrid (Lead Researchers, 2025)

Paper utama mengintegrasikan MILP eksak dengan *metaheuristic Simulated Annealing* melalui mekanisme *adaptive switching*:

$$\text{Solver}(P) = \begin{cases} \text{Branch-and-Cut eksak} & \text{jika } |P| \leq \pi \\ \text{SA-Tabu hybrid} & \text{jika } |P| > \pi \end{cases}$$

di mana $\pi$ adalah threshold kompleksitas problem (default 50 periode × 25 item). Fungsi tetangga (*neighborhood*) pada komponen SA didefinisikan sebagai:

$$N(x) = \{ x' : x'_i = x_i \pm \Delta_i, \; i \in \mathcal{I}_{\text{flip}} \}$$

dengan $\Delta_i \sim U[1, \bar{\Delta}]$ dan $\mathcal{I}_{\text{flip}}$ dipilih dengan mekanisme *tabu list* sepanjang $\tau$ iterasi untuk mencegah cycling.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model ini di lingkungan industri mengikuti kerangka SOP 7-tahap yang diturunkan dari kedua paper:

**Tahap 1 — Karakterisasi Data Historis.** Kumpulkan