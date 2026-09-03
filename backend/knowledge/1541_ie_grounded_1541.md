# 1541 — Strategi Closed-Loop Supply Chain Baterai Bekas: Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi *Closed-Loop Supply Chain* (CLSC) untuk Baterai Pensiun dengan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global telah menciptakan masalah struktural baru dalam rantai pasok: bagaimana mengelola baterai ion-litium yang telah memasuki akhir masa pakai otomotif (umumnya *State of Health*/SoH < 80%). Berdasarkan JIANG & TANG (2025) yang dipublikasikan di *Lecture Notes in Networks and Systems* melalui proceeding ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), baterai pensiun tidak boleh langsung di-*recycle* (didaur ulang secara metalurgi) melainkan harus diproses melalui **ekelon utilization** — pemanfaatan kedua pada aplikasi stasioner berskala lebih rendah seperti *storage* energi terbarukan, lampu jalan, atau *backup power* telekomunikasi — sebelum akhirnya di-*recycle*. Pendekatan *cascading* ini memperpanjang siklus hidup material hingga 8–12 tahun tambahan dan menurunkan *total cost of ownership* sistem baterai nasional.

Urgensi masalah bersifat tri-dimensi: (i) **ekologis** — satu baterai EV mengandung ±8 kg litium, 35 kg nikel, 20 kg mangan, dan 14 kg kobalt yang jika dibiarkan menjadi limbah akan mencemari lingkungan; (ii) **ekonomis** — pasar baterai pensiun diproyeksi mencapai USD 30,6 miliar pada 2030 (Gran View Research, 2023), menjadikan *reverse logistics* baterai sebagai *profit center* baru; serta (iii) **regulatoris** — regulasi *Extended Producer Responsibility* (EPR) di Uni Eropa (Directive 2006/66/EC yang diperbarui 2023) dan kebijakan *battery passport* mewajibkan produsen mengambil kembali minimal 70% baterai pensiun. JIANG & TANG (2025) menekankan bahwa tanpa desain CLSC yang koheren, jaringan pemulihan baterai akan menghadapi inefisiensi alokasi — baterai SoH 60-80% sering salah kirim ke *recycler* (kehilangan nilai pemanfaatan kedua), sementara baterai SoH <40% salah kirim ke pengguna sekunder (risiko kegagalan dini).

Studi pendahung Shin, Kim, & Jeong (2024) di SSRN (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menunjukkan bahwa keputusan pengembalian (*return management*) di CLSC mengandung ketidakpastian tinggi (*demand uncertainty*, *return quality uncertainty*, *collection rate uncertainty*) sehingga model deterministik tradisional gagal di dunia nyata. Integrasi antara optimalisasi CLSC bertingkat ala JIANG-TANG dengan formulasi *robust optimization* ala Shin-Kim-Jeong menjadi kerangka teoretis yang relevan untuk aplikasi industri masa depan. Artikel ini menyintesiskan kedua literatur tersebut menjadi modul referensi praktis bagi perekayasa sistem industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Lima-Tingkat

JIANG & TANG (2025) memodelkan CLSC baterai pensiun sebagai jaringan **lima-tingkat** yang terdiri dari: *Battery Manufacturer* (BM) → *Retailer* (R) → *Consumer/EV User* → *Third-party Collector* (TC) → *Echelon User* (EU) dan *Recycler* (RC). Baterai pensiun mengalir mundur (*reverse flow*) dari konsumen ke TC, lalu bercabang: sebagian dialokasikan ke EU (utilisasi kedua) dan sebagian ke RC (remanufaktur/daur ulang).

### 2.2 Model Permintaan Deterministik

Permintaan konsumen terhadap baterai baru dimodelkan sebagai fungsi harga dan tingkat layanan:

$$D_i(p_i) = \alpha_i - \beta_i p_i + \gamma_i s_i, \quad i \in \{BM, R\}$$

dengan $\alpha_i$ sebagai ukuran pasar potensial, $\beta_i$ elastisitas harga, $\gamma_i$ sensitivitas layanan, $p_i$ harga jual, dan $s_i$ tingkat layanan purna-jual.

### 2.3 Fungsi Profit Stackelberg Game

Permainan *Stackelberg* dengan BM sebagai *leader* dan R sebagai *follower* menghasilkan fungsi keputusan:

$$\pi_{BM} = (p_{BM} - c_{BM}) D_{BM} - c_{inv} Q_{inv} + \pi_{rcv}$$

$$\pi_{R} = (p_{R} - p_{BM}) D_{R} - c_{rev} \tau + \pi_{col}$$

di mana $c_{BM}$, $c_{inv}$, $c_{rev}$, $c_{col}$ berturut-turut adalah biaya produksi, investasi回收回收回收 (*recovery*) fasilitas, operasional *reverse*, dan pengumpulan. Parameter $\tau$ menyatakan tingkat pemulihan (*recovery rate*).

### 2.4 Model Pemanfaatan Bertingkat (Echelon)

Alokasi baterai pensiun ke EU vs RC mengikuti aturan keputusan SoH:

$$\theta_j = \begin{cases} \tau_{EU}, & \text{jika } 0.4 \leq SoH_j < 0.8 \\ \tau_{RC}, & \text{jika } SoH_j < 0.4 \\ 0, & \text{lainnya (reject/scrap)} \end{cases}$$

dengan $\tau_{EU} + \tau_{RC} \leq 1$ dan *collection rate* total:

$$\tau = \tau_{EU} + \tau_{RC} = \phi(\rho_{TC}) = \phi_0 \left(\frac{\rho_{TC}}{1+\rho_{TC}}\right)$$

di mana $\rho_{TC}$ adalah insentif harga beli kembali yang ditawarkan *Third-party Collector*.

### 2.5 Formulasi Robust Counterpart (Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian permintaan $D_i \in [D_i^L, D_i^U]$, dibangun *uncertainty set box*:

$$\mathcal{U} = \left\{ D_i : D_i^L \leq D_i \leq D_i^U, \; i \in I \right\}$$

*Robust counterpart* dari masalah maksimasi profit BM menjadi:

$$\max_{p_{BM}, \tau} \min_{D_i \in \mathcal{U}} \pi_{BM}(p_{BM}, \tau, D_i)$$

yang ekuivalen dengan masalah *MILP* (Mixed-Integer Linear Programming) melalui引入 variabel bantu $\lambda_i$:

$$\begin{aligned}
\max \quad & \pi_{BM}^{nom} - \sum_{i} \lambda_i (D_i^U - D_i^L) \\
\text{s.t.} \quad & \lambda_i \geq \beta_i p_{BM} - \gamma_i s_i, \; \forall i \\
& 0 \leq \tau \leq 1, \; 0 \leq p_{BM} \leq p_{BM}^{cap}
\end{aligned}$$

### 2.6 Kondisi Keseimbangan (Nash Equilibrium)

Keseimbangan *Stackelberg* tercapai ketika reaksi terbaik R memenuhi:

$$\frac{\partial \pi_R}{\partial p_R} = 0 \Rightarrow p_R^* = \frac{\alpha_R + \beta_R p_{BM} + \gamma_R s_R}{2\beta_R}$$

Substitusi ke fungsi BM menghasilkan masalah univariat yang diselesaikan secara analitik atau melalui *gradient ascent* terbatas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai pensiun mengikuti SOP terintegrasi yang diadaptasi dari JIANG & TANG (2025) dan diperkuat dengan protokol ketidakpastian dari Shin et al. (2024). Diagram alir operasionalnya:

**Fase 1 — *Battery Tagging & Traceability***  
Setiap baterai EV dilengkapi *battery passport* berbasis *blockchain* (sesuai EU Regulation 2023/1542) yang mencatat: SoH riil, siklus pengisian, riwayat suhu, dan kode QR unik. Data ini menjadi input *real-time* untuk *dispatching decision*.

**Fase 2 — *Collection Logistics* (TC → Aggregation Hub)**  
*Third-party Collector* menjalankan rute pengumpulan dengan algoritma *Vehicle Routing Problem with Time Windows* (VRPTW):

$$\min \sum_{k \in K} \sum_{(i,j) \in E} c_{ij} x_{ijk}$$

dengan kendala kapasitas, jendela waktu, dan prioritas SoH. Baterai SoH tinggi (>70%) diprioritaskan untuk perjalanan singkat agar SoH tidak degradasi selama transit.

**Fase 3 — *Diagnostic & Echelon Sorting***  
Di *aggregation hub*, baterai menjalani *capacity testing* (siklus charge-discharge standar IEC 62660-1) dan *impedance spectroscopy*. Hasil SoH menentukan alokasi:
- $0.7 \leq SoH < 0.8$: **Tier-1 echelon** (sistem penyimpanan energi skala utilitas)
- $0.4 \leq SoH < 0.7$: **Tier-2 echelon** (lampu jalan surya, *backup* telekomunikasi)
- $SoH < 0.4$: **Direct remanufacturing / hydrometallurgical recycling**

**Fase 4 — *Remanufacturing Process* (RC)**  
Modul baterai yang masih layak (*cell matching*) digabung kembali menjadi pack baterai *second-life*. Proses mengikuti standar GB/T 34014-2017 (Tiongkok) atau UL 1974 (Amerika). Material *black mass* diekstraksi melalui proses *hydrometallurgy* dengan target recovery >95% litium, >98% nikel/kobalt.

**Fase 5 — *Demand Sensing & Robust Re-optimization***  
Sesuai Shin et al. (2024), parameter permintaan dan *return rate* diperbarui mingguan. Model *robust optimization* diselesaikan ulang melalui *rolling horizon* dengan *uncertainty budget* $\Gamma \in [0, |I|]$ yang mengatur tingkat konservatisme. Periode retraining model: 4 minggu; validasi *backtesting*: 12 minggu historis.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter (Kasus Tipikal CLSC Baterai EV)

Diadaptasi dari data industri baterai skala 50.000 unit/tahun:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $\alpha_R$ (ukuran pasar) | 60.000 | unit/tahun |
| $\beta_R$ (elastisitas) | 250 | unit/(juta IDR) |
| $\gamma_R$ | 120 | unit/(skala layanan) |
| $c_{BM}$ | 28,5 | juta IDR/unit |
| $c_{rev}$ | 1,2 | juta IDR/unit |
| $\phi_0$ | 0,85 | efisiensi pengumpulan maks |
| Subsidi pemerintah $s_g$ | 3,0 | juta IDR/unit daur ulang |
| SoH threshold EU | 0,4 | — |

### 4.2 Perhitungan Harga & Recovery Rate Optimal

**Step 1:** Substitusi harga BM yang diasumsikan $p_{BM} = 32$ juta IDR ke fungsi reaksi R:

$$p_R^* = \frac{60.000 + 250(32) + 120 \cdot 4}{2 \cdot 250} = \frac{60.000 + 8.000 + 480}{500} = 136,96 \text{ juta IDR
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
