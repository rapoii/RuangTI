# 2816 — Optimasi Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tekanan struktural yang semakin kompleks pada dekade terakhir. Sebagai salah satu sub-sektor agri-food dengan tingkat kerusakan (perishability) tertinggi, susu pasteurisasi, yoghurt, keju, dan produk turunan whey memiliki *shelf life* yang pendek — umumnya 7 hingga 21 hari untuk susu cair, dan hanya 3–6 minggu untuk yoghurt (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Kerusakan produk susu bukan sekadar kerugian finansial; menurut FAO, sekitar 14% produk susu global hilang antara *farm gate* dan *retail distribution*, setara dengan nilai ekonomi miliaran dolar per tahun. Konteks ini menjadi latar belakang urgensi perancangan jaringan rantai pasok yang tidak hanya meminimalkan biaya, namun juga mempertimbangkan *freshness*, emisi karbon, dan *service level*.

Secara struktural, jaringan rantai pasok susu biasanya melibatkan empat lapisan keputusan: (1) lokasi peternakan sapi perah (*farm*), (2) fasilitas pengumpulan dan pendinginan primer (*collection center*), (3) pabrik pengolahan (*processing plant*) yang melakukan pasteurisasi, fermentasi, atau standarisasi, serta (4) pusat distribusi (*distribution center*) yang melayani zona ritel. Keputusan yang harus dijawab secara simultan mencakup *facility location*, *capacity allocation*, *production planning*, dan *routing*. Lead Researchers (2023) menekankan bahwa dimensi multi-period dan multi-product membuat model Mixed-Integer Linear Programming (MILP) menjadi sangat besar (*large-scale*), dengan ribuan variabel biner yang tidak dapat diselesaikan secara langsung oleh *branch-and-bound* solver komersial dalam waktu komputasi yang acceptable.

Urgensi ekonominya semakin kuat ketika mempertimbangkan rantai pasok terbalik (*reverse supply chain*). Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa keputusan kualitas (*quality decisions*) pada *reverse logistics* produk susu — misalnya pengembalian kemasan, recovery whey untuk nutraceutical, dan disposal produk kadaluwarsa — menambah lapisan optimasi kedua yang saling耦合 dengan desain jaringan maju (*forward network*). Integrasi kedua arah ini, bersama dengan tujuan ganda (*cost vs. service level*), telah mendorong komunitas riset Teknik Industri untuk mengadopsi teknik dekomposisi. Di antara sekian banyak teknik, *Benders Decomposition* (BD) muncul sebagai pendekatan yang paling banyak dikutip karena kemampuannya memisahkan variabel keputusan lokasi (kompleks kombinatorial) dari variabel operasional (kontinu), sehingga menghasilkan *lower bound* dan *upper bound* yang konvergen secara iteratif.

Secara praktis, dua tantangan utama industri yang melatarbelakangi paper Lead Researchers (2023) adalah: pertama, sifat musiman produksi susu yang mengikuti *lactation curve* sapi perah (peak di bulan ke-2 setelah melahirkan, turun secara gradual selama 10 bulan), sehingga kapasitas *farm* dan *processing plant* harus elastis terhadap fluktuasi supply; kedua, regulasi *cold chain* yang ketat — suhu produk harus dijaga di bawah 4°C dari *farm* hingga *retail shelf* — menambah biaya energi dan kompleksitas distribusi. Kedua hal ini membentuk *trade-off* multi-objektif yang esensial untuk diselesaikan secara kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Lead Researchers (2023) adalah *Mixed-Integer Multi-Objective Programming* (MIMO) dengan tiga fungsi tujuan yang diagregasi menggunakan *weighted sum* dan *ε-constraint method*. Struktur dekomposisi Benders yang diusulkan memisahkan masalah menjadi *Master Problem* (MP) yang menentukan keputusan lokasi dan kapasitas, serta *Subproblem* (SP) yang menentukan alokasi aliran produk dan utilisasi kapasitas.

### 2.1 Notasi Himpunan dan Parameter

- $I$ : himpunan kandidat lokasi peternakan, $|I| = n_I$
- $J$ : himpunan kandidat *collection center*, $|J| = n_J$
- $K$ : himpunan kandidat *processing plant*, $|K| = n_K$
- $L$ : himpunan *distribution center*, $|L| = n_L$
- $T$ : himpunan periode perencanaan, $|T| = n_T$
- $P$ : himpunan produk susu (susu cair, yoghurt, keju, mentega), $|P| = n_P$

Parameter kunci:
- $d_{ltp}$ : permintaan produk $p$ di *DC* $l$ pada periode $t$ (liter atau kg)
- $c_{ij}^{tr}$ : biaya transportasi per unit dari $i$ ke $j$
- $f_j, g_k, h_l$ : *fixed cost* pembukaan fasilitas
- $\alpha_i^{cap}$ : kapasitas maksimum produksi susu mentah di *farm* $i$
- $\beta_k^{proc}$ : kapasitas pengolahan di *plant* $k$ (liter/hari)
- $\rho_p$ : rasio konversi susu mentah ke produk $p$ (yield factor)
- $\theta_p$ : faktor emisi CO₂ per liter produk $p$

### 2.2 Variabel Keputusan

- $x_i \in \{0,1\}$ : keputusan pembukaan *farm* di lokasi $i$
- $y_j \in \{0,1\}$ : keputusan pembukaan *collection center* di $j$
- $z_k \in \{0,1\}$ : keputusan pembukaan *processing plant* di $k$
- $w_l \in \{0,1\}$ : keputusan pembukaan *DC* di $l$
- $q_{ijtp} \geq 0$ : volume susu mentah dikirim dari $i$ ke $j$ periode $t$ untuk produk $p$
- $r_{jktp} \geq 0$ : volume dikirim dari *collection* $j$ ke *plant* $k$
- $s_{kltp} \geq 0$ : volume produk jadi dikirim dari *plant* $k$ ke *DC* $l$
- $\phi_t \geq 0$ : *freshness deviation* pada periode $t$

### 2.3 Fungsi Tujuan Multi-Objektif

Tujuan 1 — Minimasi Total Biatan Biaya (TC):

$$\min Z_1 = \sum_i f_i x_i + \sum_j g_j y_j + \sum_k h_k z_k + \sum_l h_l w_l + \sum_{i,j,t,p} c_{ij}^{tr} q_{ijtp} + \sum_{j,k,t,p} c_{jk}^{tr} r_{jktp} + \sum_{k,l,t,p} c_{kl}^{tr} s_{kltp}$$

Tujuan 2 — Minimasi Total Emisi Karbon (CE):

$$\min Z_2 = \sum_{i,j,t,p} \theta_p^{tr} q_{ijtp} + \sum_{j,k,t,p} \theta_p^{tr} r_{jktp} + \sum_{k,l,t,p} \theta_p^{tr} s_{kltp} + \sum_k \theta_k^{op} z_k$$

Tujuan 3 — Minimasi Deviasi Kesegaran (FD):

$$\min Z_3 = \sum_{l,t,p} w_p \cdot \phi_{ltp}$$

dengan $w_p$ adalah bobot prioritas produk.

Formulasi lengkap menggunakan *ε-constraint*:

$$\min Z_1$$
$$\text{s.t.} \quad Z_2 \leq \varepsilon_2, \quad Z_3 \leq \varepsilon_3$$

### 2.4 Kendala

**Kendala kapasitas farm:**
$$\sum_{j,p} q_{ijtp} \leq \alpha_i^{cap} x_i \quad \forall i,t$$

**Kendala keseimbangan aliran di collection center:**
$$\sum_i q_{ijtp} = \sum_k r_{jktp} \quad \forall j,t,p$$

**Kendala kapasitas processing plant (dengan yield factor):**
$$\sum_j r_{jktp} \leq \beta_k^{proc} z_k \quad \forall k,t,p$$
$$\sum_p \frac{r_{jktp}}{\rho_p} \leq \beta_k^{proc} z_k \quad \forall k,t$$

**Kendala kepuasan permintaan di DC:**
$$\sum_k s_{kltp} = d_{ltp} \quad \forall l,t,p$$

**Kendala kesegaran (time-temperature integration):**
$$\phi_{ltp} \geq \sum_k \tau_{kl} s_{kltp} - \bar{\tau}_p d_{ltp} \quad \forall l,t,p$$

dengan $\tau_{kl}$ adalah waktu transit dari $k$ ke $l$, dan $\bar{\tau}_p$ adalah batas waktu kesegaran produk $p$.

### 2.5 Formulasi Benders Decomposition

Lead Researchers (2023) merumuskan MP sebagai masalah lokasi:

$$\min_{x,y,z,w \in \{0,1\}} \sum_i f_i x_i + \sum_j g_j y_j + \sum_k h_k z_k + \sum_l h_l w_l + \eta$$
$$\text{s.t.} \quad \eta \geq \Phi(x,y,z,w)$$

di mana $\eta$ adalah variabel skalar yang低估 biaya operasional. Subproblem (SP) untuk setiap kombinasi $(x^*, y^*, z^*, w^*)$ yang diberikan:

$$\min_{q,r,s \geq 0} \sum c^{tr} (\cdot) \quad \text{s.t. kendala aliran (2)–(6)}$$

Dual SP menghasilkan *optimality cut*:

$$\eta \geq \Phi^* + \sum_i \pi_i (\alpha_i^{cap} x_i - \sum_{j,p} q_{ijtp}^*) + \sum_k \sigma_k (\beta_k^{proc} z_k - \sum_{j,p} r_{jktp}^*) + \cdots$$

Proses iteratif berhenti ketika gap $(UB - LB)/UB \leq 10^{-3}$ (toleransi 0,1%).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Lead Researchers (2023) dalam praktik industri mengikuti kerangka SOP enam-tahap yang selaras dengan referensi Zhang et al. (2024) untuk konteks reverse logistics.

**Tahap 1 — Karakterisasi Data Historis (4 minggu).** Pengumpulan data produksi harian dari setiap *farm*, demand forecasting mingguan dari ritel, data suhu dan waktu transit aktual. Data di-clean dan divalidasi menggunakan teknik *outlier detection* (IQR method) sebelum memasuki tahap pemodelan. Lead Researchers merekomendasikan penggunaan *Enterprise Resource Planning* (ERP) integration melalui API untuk otomasi.

**Tahap 2 — Kalibrasi Parameter Yield dan Emisi.** Parameter $\rho_p$ dan $\theta_p$ dikalibrasi menggunakan data *mass balance* selama 12 periode terakhir. Audit energi dan *carbon footprint* mengikuti standar ISO 14064-1 dan GHG Protocol Scope 1, 2, 3.

**Tahap 3 — Konstruksi Model dan Validasi.** Model MILP dibangun dalam *high-level algebraic modeling language* seperti GAMS atau Pyomo, kemudian divalidasi terhadap baseline historis dengan target deviasi <5%. Zhang et al. (2024) menambahkan modul *reverse flow* yang memperlakukan produk rusak sebagai *recovery stream* dengan kualitas yang menurun secara stokastik.

**Tahap 4 — Eksekusi Benders Decomposition.** Iterasi BD dilakukan menggunakan *cutting plane* manager, dengan *callback function* yang menambahkan Benders cut pada setiap *node* dari *branch-and-bound tree*. Computational setup: Intel Xeon 3.0 GHz, 64 GB RAM, dengan *solver* CPLEX 22.1 atau Gurobi 11.0.

**Tahap 5 — Sensitivity Analysis dan Robustness Check.** Analisis sensitivitas pada parameter permintaan (variasi ±20%), biaya energi (±15%), dan disruption scenarios (penutupan satu *plant*).

**Tahap 6 — Implementasi dan Monitoring.** Hasil optimasi di-deploy sebagai *production schedule* 12 minggu ke depan, dengan *rolling horizon* update setiap 4 minggu. KPI yang dimonitor: *service level* (target ≥97%), *freshness score* (target ≥90%), *