# Modul Riset Ilmiah: Logistik Pergudangan (Warehousing), Distribusi, & Vehicle Routing Problem (VRP)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Bartholdi, J. J., & Hackman, S. T. (2019). *Warehouse & Distribution Science*. Supply Chain and Logistics Institute, Georgia Institute of Technology.
- Toth, P., & Vigo, D. (2014). *Vehicle Routing: Problems, Methods, and Applications* (2nd ed.). SIAM. ISBN: 978-1611973587.
- Clarke, G., & Wright, J. W. (1964). *Scheduling of vehicles from a central depot to a number of delivery points*. Operations Research, 12(4), 568-581.
- Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A. (2010). *Facilities Planning* (4th ed.). Wiley.
- de Koster, R., Le-Duc, T., & Roodbergen, K. J. (2007). *Design and control of warehouse order picking: A literature review*. European Journal of Operational Research, 182(2), 481-501.
- Asghari, M., & Mirzapour Al-e-hashem, S. M. J. (2021). *Green vehicle routing problem: A state-of-the-art review*. International Journal of Production Economics, 231, 107899.

---

## 1. Konsep Dasar Operasi Pergudangan & Distribusi

Pergudangan bertindak sebagai penyangga (*buffer*) antara variasi pasokan dan permintaan dalam rantai pasok. Fungsi inti gudang meliputi receiving, put-away, storage, order picking, sortation, dan shipping. Di antara semuanya, **order picking** adalah aktivitas paling padat karya dan menyumbang sekitar $50\%-55\%$ dari total biaya operasional gudang (de Koster dkk., 2007), sehingga desain slotting dan routing picker menjadi fokus rekayasa.

### Strategi Alokasi Penyimpanan (Storage Policy)
1. **Randomized Storage:** palet/SKU ditempatkan pada lokasi kosong mana pun terdekat dari titik input — memaksimalkan utilisasi ruang namun memperpanjang jarak picking untuk SKU cepat-gerak.
2. **Dedicated Storage berbasis COI (Cube-per-Order Index):** SKU dengan rasio kebutuhan ruang terhadap frekuensi kunjungan terkecil ditempatkan paling dekat ke I/O point:
$$
\text{COI}_i = \frac{S_i}{T_i} = \frac{\text{kebutuhan ruang penyimpanan SKU } i}{\text{frekuensi perjalanan/trip pengambilan SKU } i}
$$

Aturan slotting: urutkan SKU menaik berdasarkan $\text{COI}_i$; nilai terkecil mendapat rak terdepan. Varian modern: ABC-velocity slotting dan family grouping untuk batch picking.

## 2. Formulasi Matematis VRP

VRP menentukan rute armada kendaraan homogen berkapasitas $C$ yang bermula-berakhir di depo tunggal ($0$) untuk melayani pelanggan $V'=\{1,\dots,n\}$ dengan permintaan $q_i$, meminimasi total jarak. Model MILP dengan variabel biner $x_{ij}$:

$$
\min \sum_{i\neq j} d_{ij}\,x_{ij}
$$

Kendala: setiap pelanggan dikunjungi tepat sekali ($\sum_i x_{ij}=1,\;\sum_j x_{ij}=1,\;\forall j$); konservasi aliran depo ($\sum_j x_{0j}=m$ armada); kapasitas via subtour elimination (MTZ):

$$
u_j - u_i + C\left(1 - x_{ij}\right) \ge q_j, \qquad q_j \le u_j \le C
$$

VRP umum merupakan masalah NP-hard; instans praktis (ratusan pelanggan) diselesaikan dengan heuristik klasik atau metaheuristik.

### Algoritma Penghematan Clarke-Wright (Savings Algorithm)
1. **Kondisi awal:** tiap pelanggan dilayani rute bolak-balik tersendiri $0\to i \to 0$; total jarak $=2\sum_i d_{0i}$.
2. **Nilai penghematan** bila pasangan $i,j$ digabung menjadi satu rute:
$$
s_{ij} = d_{0i} + d_{0j} - d_{ij}
$$
3. Urutkan pasangan $(i,j)$ secara descending berdasarkan $s_{ij}$.
4. **Gabungkan** jika: kedua pelanggan berada pada ujung rute yang sedang terbuka, bukan di rute yang sama, dan muatan gabungan memenuhi $\sum_k q_k \le C$. Ulangi hingga tak ada penggabungan feasible.

## 3. Metode Solusi / Algoritma Lanjutan

1. **Heuristik konstruksi:** Clarke-Wright savings, nearest neighbor, sweep algorithm, insertions (cheapest insertion).
2. **Metaheuristik:** Tabu Search, Genetic Algorithm, Simulated Annealing, dan **Adaptive Large Neighborhood Search (ALNS)** yang mengombinasikan destroy-repair operators — standar de facto VRP modern (Ropke & Cordeau, Transportation Science).
3. **Exact methods:** branch-and-cut dengan pemisahan kendala subtour (rounding cuts) untuk instans menengah.
4. **Varian praktis:** CVRP, VRPTW (time windows), pickup-delivery, multi-depot, serta **Green VRP** yang menyertakan biaya emisi/konsumsi BBM sebagai fungsi objektif (Asghari & Mirzapour Al-e-hashem, 2021).

Untuk routing picker dalam warehouse (order picking routing): heuristik S-shape (traversal), largest gap, midpoint, return, dan optimal dynamic programming pada trapesium pick face — dipilih sesuai layout aisle dan ukuran order.

## 4. Aplikasi di Industrial Engineering

- **Distribusi FMCG & E-commerce:** penjadwalan armada harian dengan ribuan order; kombinasi slotting COI + batch picking + routing mengurangi biaya logistik total.
- **Cold chain & farmasi:** VRPTW dengan kendala suhu dan batas waktu layanan.
- **Logistik hijau:** optimasi rute menurunkan konsumsi BBM dan emisi $CO_2$ sekaligus biaya (double dividend).
- **Desain Gudang:** penetapan jumlah lane, tinggi rak, dan zona forward/reserve berdasarkan analisis throughput.
- **Transport Planning Pabrik:** routing AGV/truk shuttle antar gudang dan line feeding.

## 5. Referensi Terverifikasi

1. Bartholdi, J. J., & Hackman, S. T. (2019). *Warehouse & Distribution Science*. Georgia Tech SCL.
2. Toth, P., & Vigo, D. (2014). *Vehicle Routing: Problems, Methods, and Applications* (2nd ed.). SIAM. ISBN: 978-1611973587.
3. Clarke, G., & Wright, J. W. (1964). Operations Research, 12(4), 568-581.
4. Tompkins, J. A., dkk. (2010). *Facilities Planning* (4th ed.). Wiley.
5. de Koster, R., Le-Duc, T., & Roodbergen, K. J. (2007). European Journal of Operational Research, 182(2), 481-501.
6. Asghari, M., & Mirzapour Al-e-hashem, S. M. J. (2021). International Journal of Production Economics, 231, 107899.
7. Ropke, S., & Cordeau, J.-F. (2009). Branch-and-cut and ALNS for the PDPTW. Transportation Science.
