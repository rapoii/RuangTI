# Modul Riset Ilmiah: Logistik Pergudangan (Warehousing), Distribusi, & Vehicle Routing Problem (VRP)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Bartholdi, J. J., & Hackman, S. T. (2019). *Warehouse & Distribution Science*. Supply Chain and Logistics Institute, Georgia Institute of Technology.
- Toth, P., & Vigo, D. (2014). *Vehicle Routing: Problems, Methods, and Applications* (2nd ed.). SIAM - Society for Industrial and Applied Mathematics. ISBN: 978-1611973587.
- Clarke, G., & Wright, J. W. (1964). *Scheduling of vehicles from a central depot to a number of delivery points*. Operations Research, 12(4), 568-581. (Clarke-Wright Savings Algorithm).

---

## 1. Operasi Pergudangan & Strategi Penyimpanan Material (Storage Policy)
Pergudangan bertindak sebagai penyangga (*buffer*) variasi pasokan dan permintaan dalam rantai pasok. Operasi pengambilan barang (*Order Picking*) menyumbang **$50\% - 55\%$ dari total biaya operasional gudang**.

### Strategi Alokasi Penyimpanan (Dedicated vs Dedicated Activity-Based):
1. **Randomized Storage:** Menempatkan palet pada lokasi kosong mana pun yang terdekat (memaksimalkan utilitas ruang gudang).
2. **Dedicated Storage (Berdasarkan $COI$ / Cube-per-Order Index):**
   Menempatkan SKU dengan rasio kebutuhan ruang terhadap frekuensi pengambilan terkecil di lokasi yang paling dekat dengan pintu *Depot / I/O point*:
   $$\text{COI}_i = \frac{S_i}{T_i} = \frac{\text{Kebutuhan Ruang Penyimpanan SKU } i}{\text{Frekuensi Perjalanan / Trip Pengambilan SKU } i}$$
   *Urutkan SKU berdasarkan nilai $\text{COI}$ terkecil ke terbesar untuk ditempatkan di rak terdepan.*

---

## 2. Vehicle Routing Problem (VRP) & Algoritma Penghematan Clarke-Wright
VRP bertujuan menentukan rute armada kendaraan berkapasitas terbatas ($C$) untuk melayani sekumpulan pelanggan geografis terpisah dengan total jarak tempuh minimum, bermula dan berakhir di depo tunggal.

### Algoritma Clarke-Wright Savings Method:
1. **Kondisi Dasar:** Setiap pelanggan $i$ dilayani oleh rute terpisah bolak-balik dari depo ($0 \rightarrow i \rightarrow 0$). Total jarak awal $= 2 \sum d_{0i}$.
2. **Kalkulasi Nilai Penghematan (Savings $s_{ij}$):**
   Jika pelanggan $i$ dan $j$ digabungkan ke dalam satu rute ($0 \rightarrow i \rightarrow j \rightarrow 0$):
   $$s_{ij} = d_{0i} + d_{0j} - d_{ij}$$
3. **Urutkan Nilai Penghematan:** Urutkan pasangan rute $(i, j)$ berdasarkan nilai $s_{ij}$ dari terbesar ke terkecil.
4. **Penggabungan Rute Berurutan:** Gabungkan pelanggan $i$ dan $j$ ke dalam rute yang sama jika dan hanya jika:
   - Pelanggan $i$ dan $j$ berada di ujung rute yang sedang terbuka.
   - Total muatan gabungan tidak melebihi kapasitas kendaraan: $\sum q_k \le C$.
