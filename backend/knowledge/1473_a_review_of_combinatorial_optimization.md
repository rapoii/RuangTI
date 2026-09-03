# 1473 — Optimasi Kombinatorial pada Logistik Terbalik dan Rekondisi Produk End-of-Life: Framework Rekayasa Sistem untuk Keberlanjutan Rantai Pasok Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Tinjauan Komprehensif Masalah Optimasi Kombinatorial dalam Logistik Terbalik dan Rekondisi untuk Produk End-of-Life (EOL)
**Jurnal & Sitasi Utama:** Yaping Ren, Xinyu Lu, Hongfei Guo (2023). *A Review of Combinatorial Optimization Problems in Reverse Logistics and Remanufacturing for End-of-Life Products*. **Mathematics**, 11(2), 298. DOI: [https://doi.org/10.3390/math11020298](https://doi.org/10.3390/math11020298)
**Sitasi Pendukung:** Koen W. De Bock, Kristof Coussement, Arno De Caigny (2023). *Explainable AI for Operational Research: A defining framework, methods, applications, and a research agenda*. **European Journal of Operational Research**. DOI: [https://doi.org/10.1016/j.ejor.2023.09.026](https://doi.org/10.1016/j.ejor.2023.09.026)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan global yang dipicu oleh akumulasi limbah elektronik (e-waste), peralatan rumah tangga bekas, serta komponen otomotif dan aeronautika yang sudah melampaui umur pakainya telah mengubah paradigma rantai pasok linear konvensional menjadi model **sirkular**. Dalam konteks ini, *reverse logistics* (RL) dan *remanufacturing* muncul sebagai dua pilar strategis yang memungkinkan perusahaan回收 (recovery) nilai ekonomis, mengurangi jejak karbon, dan mematuhi regulasi Extended Producer Responsibility (EPR) yang semakin ketat di Uni, UE, dan berbagai yurisdiksi lainnya. Ren, Lu, dan Guo (2023) dalam *Mathematics* mengidentifikasi bahwa proses pemulihan produk end-of-life (EOL) memicu serangkaian **masalah optimasi kombinatorial** (*Combinatorial Optimization Problems*/COPs) yang kompleks dan harus diselesaikan secara efisien untuk menjamin kelayakan operasional dan profitabilitas sistem.

Secara industri, urgensi permasalahan ini sangat nyata. Volume e-waste global mencapai 53,6 juta ton pada tahun 2019 dan diproyeksikan tumbuh menjadi 74,7 juta ton pada tahun 2030 (Forti et al., 2020 — data kontekstual yang dikutip secara luas). Setiap ton e-waste mengandung material bernilai tinggi seperti emas, tembaga, paladium, dan rare-earth yang hanya dapat diekstrak melalui operasi *remanufacturing* dan *disassembly* yang teroptimasi. Ren et al. (2023) secara sistematis mengkategorikan 160 paper yang terbit sejak 1992 ke dalam tiga modul optimasi utama: **(1)** facility location dan vehicle routing dalam RL, **(2)** scheduling dalam remanufacturing, serta **(3)** disassembly dalam remanufacturing. Ketiga modul ini saling berkaitan karena keputusan lokasi fasilitas menentukan volume material yang harus ditangani, yang kemudian memengaruhi konfigurasi line balancing dan sequence scheduling di lantai produksi.

Konteks ekonomi menunjukkan bahwa margin operasi *remanufacturing* sangat sensitif terhadap efisiensi pengembalian produk, kualitas sortasi, dan akurasi line balancing. Sebuah studi kasus pada industri printer Eropa menunjukkan bahwa biaya transport untuk RL bisa mencapai 35%–50% dari total biaya operasional daur ulang, sementara *idle time* pada disassembly line yang tidak seimbang dapat menurunkan throughput hingga 20%–30%. Oleh karena itu, formulasi matematis yang ketat dan algoritma metaheuristik yang handal menjadi kebutuhan strategis. Lebih lanjut, De Bock, Coussement, dan De Caigny (2023) dalam *European Journal of Operational Research* menyoroti bahwa integrasi **Explainable AI (XAI)** dalam riset operasi—yang mereka sebut *XAIOR*—menjadi semakin krusial karena pengambil keputusan industri tidak lagi menerima "black-box solutions" tanpa interpretabilitas, terutama dalam konteks di mana keputusan alokasi fasilitas bernilai jutaan dolar dan menyangkut kepatuhan lingkungan.

Dengan demikian, modul ini disusun untuk memberikan framework rekayasa yang komprehensif: mulai dari formulasi matematis, prosedur operasional, hingga studi kasus kuantitatif yang dapat diadopsi oleh praktisi Teknik Industri di perusahaan manufaktur, operator RL pihak ketiga (3PL), serta konsultan keberlanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

Ren et al. (2023) menyusun kerangka berpikir bahwa COPs dalam RL dan *remanufacturing* dapat diformalisasikan sebagai masalah optimasi dengan domain diskrit (kombinatorial) yang memiliki ruang solusi eksponensial. Bagian ini menyajikan empat formulasi kanonik yang paling sering dijumpai: **Capacitated Facility Location Problem (CFLP)**, **Capacitated Vehicle Routing Problem (CVRP)**, **Disassembly Line Balancing Problem (DLBP)**, dan **Disassembly Scheduling Problem (DSP)**.

### 2.1 Capacitated Facility Location Problem (CFLP) untuk Jaringan Pengumpulan EOL

Formulasi ini menentukan lokasi optimum dari *collection centers* (CC), *inspection/dismantling centers* (IDC), dan *remanufacturing facilities* (RF) dengan memperhatikan kapasitas setiap fasilitas dan biaya transport.

**Parameter:**
- $I = \{1, 2, \dots, m\}$: himpunan calon lokasi fasilitas
- $J = \{1, 2, \dots, n\}$: himpunan zona permintaan (sumber EOL)
- $f_i$: biaya tetap pembukaan fasilitas di lokasi $i \in I$
- $c_{ij}$: biaya transport per unit dari $i$ ke $j$
- $q_j$: volume permintaan (supply) di zona $j$
- $Q_i$: kapasitas fasilitas di lokasi $i$

**Variabel keputusan:**
- $y_i \in \{0,1\}$: 1 jika fasilitas dibuka di $i$, 0 sebaliknya
- $x_{ij} \geq 0$: fraksi permintaan $j$ yang dilayani fasilitas $i$

**Formulasi MILP (Mixed Integer Linear Programming):**

$$\min \; Z_{CFLP} = \sum_{i \in I} f_i \, y_i + \sum_{i \in I} \sum_{j \in J} c_{ij} \, x_{ij}$$

dengan kendala:

$$\sum_{i \in I} x_{ij} = 1, \quad \forall j \in J \tag{1}$$

$$\sum_{j \in J} q_j \, x_{ij} \leq Q_i \, y_i, \quad \forall i \in I \tag{2}$$

$$x_{ij} \geq 0, \; y_i \in \{0,1\}, \quad \forall i \in I, \; \forall j \in J \tag{3}$$

Kendala (1) menjamin seluruh permintaan terlayani; kendala (2) menjamin kapasitas tidak terlampaui (kondisi *big-M coupling*).

### 2.2 Vehicle Routing Problem (VRP) untuk Pengumpulan Produk EOL

Setelah fasilitas ditetapkan, armada kendaraan harus menentukan rute untuk mengumpulkan produk EOL dari titik permintaan ke fasilitas. Formulasi standar mengikuti *Capacitated VRP* dengan depot di fasilitas *remanufacturing*.

**Parameter:**
- $K$: jumlah kendaraan berkapasitas $C_k$
- $d_{uv}$: jarak dari node $u$ ke node $v$
- $a_j$: jumlah produk yang akan dikumpulkan di pelanggan $j$

**Variabel keputusan:**
- $z_{uvk} \in \{0,1\}$: 1 jika kendaraan $k$ melewati edge $(u,v)$
- $u_j$: urutan kunjungan node $j$ (untuk *subtour elimination*)

$$\min \; Z_{VRP} = \sum_{k \in K} \sum_{(u,v) \in E} d_{uv} \, z_{uvk}$$

$$\sum_{k \in K} \sum_{v \in V} z_{uvk} = 1, \quad \forall u \in V_{customer} \tag{4}$$

$$\sum_{v \in V} z_{0vk} = \sum_{v \in V} z_{v,n+1,k} = 1, \quad \forall k \in K \tag{5}$$

$$\sum_{u \in V} a_u \, z_{uvk} \leq C_k, \quad \forall k \in K \tag{6}$$

$$u_u - u_v + |V| \cdot z_{uvk} \leq |V| - 1, \quad \forall u \neq v \tag{7}$$

Kendala (7) adalah formulasi MTZ (*Miller-Tucker-Zemlin*) untuk mengeliminasi *subtour* (Ren et al., 2023).

### 2.3 Disassembly Line Balancing Problem (DLBP)

DLBP bertujuan mendistribusikan *disassembly tasks* ke workstation untuk meminimalkan jumlah workstation atau menyeimbangkan beban kerja (cycle time conformity).

**Parameter:**
- $T = \{1, 2, \dots, t\}$: himpunan task pembongkaran
- $p_i$: waktu proses task $i$
- $PR$: precedence relation antar-task
- $C$: cycle time yang diizinkan

**Variabel keputusan:**
- $x_{ik} \in \{0,1\}$: 1 jika task $i$ dialokasikan ke workstation $k$
- $w_k \in \{0,1\}$: 1 jika workstation $k$ dibuka

$$\min \; W = \sum_{k=1}^{K_{max}} w_k \tag{8}$$

$$\sum_{k=1}^{K_{max}} x_{ik} = 1, \quad \forall i \in T \tag{9}$$

$$\sum_{i \in T} p_i \, x_{ik} \leq C, \quad \forall k \tag{10}$$

$$x_{ik} \leq x_{jk}, \quad \forall (i,j) \in PR, \; \forall k \tag{11}$$

### 2.4 Disassembly Scheduling Problem (DSP)

DSP menentukan urutan job pada mesin rekondisi dengan constraint *setup time* yang bergantung pada sequence. Ren et al. (2023) menekankan bahwa *stochastic yield* (tingkat keberhasilan rekondisi yang tidak pasti) membuat DSP lebih kompleks dibanding scheduling klasik.

$$\min \; \sum_{j=1}^{n} w_j \, C_j \tag{12}$$

dengan $C_j$ adalah *completion time* job $j$ dan $w_j$ bobot prioritasnya, serta kendala urutan teknologi dan *no-wait*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis Ren et al. (2023) yang meninjau 160 paper, prosedur operasional untuk menangani COPs dalam RL-*remanufacturing* mengikuti **lima tahap sistematis** yang kami adaptasi sebagai SOP industri:

**Tahap 1 — Karakterisasi Aliran EOL dan Demand Forecasting.**
Langkah awal adalah memetakan *bill-of-materials* (BOM) produk EOL, mengestimasi volume return, dan menentukan *quality grading* (A: langsung reuse; B: rekondisi; C: daur ulang material). Teknik yang digunakan meliputi *Markov chain* untuk transisi kualitas dan *ARIMA* untuk forecasting volume return. Pada tahap ini, integrasi XAI seperti SHAP (*SHapley Additive exPlanations*) atau LIME yang diformalisasikan oleh De Bock et al. (2023) dapat digunakan untuk menginterpretasi kontribusi fitur dalam prediksi kualitas, mendukung prinsip *attributable analytics* dalam kerangka XAIOR.

**Tahap 2 — Formulasi Masalah Optimasi Kombinatorial.**
Berdasarkan karakteristik Stage 1, pilih formulasi yang sesuai (CFLP untuk keputusan lokasi jangka panjang, VRP untuk operasional harian, DLBP untuk lini produksi, DSP untuk penjadwalan). Bangun model MILP atau Constraint Programming. Validasi parameter menggunakan data historis 12–24 bulan.

**Tahap 3 — Penyelesaian dengan Metaheuristik.**
Untuk instancia berskala besar, MILP *solver* (CPLEX, Gurobi) memerlukan waktu komputasi berlebihan. Ren et al. (2023) mendokumentasikan keberhasilan algoritma **Genetic Algorithm (GA)**, **Particle Swarm Optimization (PSO)**, **Ant Colony Optimization (ACO)**, dan **Variable Neighborhood Search (VNS)** untuk tipe masalah masing-masing. Parameter tuning mengikuti *Design of Experiments* (Taguchi atau full factorial).

**Tahap 4 — Validasi, Simulasi, dan Sensitivity Analysis.**
Solusi yang dihasilkan harus divalidasi melalui *discrete-event simulation* (misalnya menggunakan FlexSim, Arena, atau AnyLogic). Lakukan *sensitivity analysis* pada parameter kunci seperti kapasitas, biaya transport, dan yield rate untuk menguji robustisitas solusi.

**Tahap 5 — Implementasi, Monitoring, dan Continuous Improvement.**
Solusi diterapkan ke *Manufacturing Execution System* (MES) dan *Transport Management System* (TMS). KPI yang dimonitor antara lain: *collection rate*, *backhaul utilization*, *line efficiency*, dan *remanufacturing yield*. Setiap deviasi >10% dari baseline memicu *re-optimization*.

```
[Diagram Alir SOP — Deskripsi Naratif]

MULAI
   ↓
[Karakterisasi EOL & Forecasting]
   ↓
[Formulasi COP: CFLP / VRP / DLBP / DSP]
   ↓
[Solve: Exact (MILP) atau Metaheuristik (GA/PSO/ACO/VNS)]
   ↓
[Validasi via DES + XAI Interpretation]
   ↓
[Implementasi ke MES/TMS]
   ↓
[Monitor KPI & Continuous Improvement]
   ↓
KEMBALI KE TAHAP 1 (jika deviasi > threshold)
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Studi Kasus

Sebuah perusahaan *remanufacturing* printer di Eropa Timur ingin membangun jaringan RL untuk 6 kota (J1–J6). Perusahaan mempertimbangkan 4 calon lokasi pusat inspeksi/pembongkaran (I1–I4). Data diberikan pada Tabel 1.

**Tabel 1. Data Permintaan dan Kapasitas**

| Zona $j$ | $q_j$ (unit/bulan) | | Lokasi $i$ | $Q_i$ (unit/bulan)

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
