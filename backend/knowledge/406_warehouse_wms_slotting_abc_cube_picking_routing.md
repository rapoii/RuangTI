# Modul 406: Manajemen Pergudangan Modern (WMS), Slotting Optimization ABC-Velocity, Cube Utilization %, dan Routing Order Picking

## 1. Domain Profesi & Ruang Lingkup
Profesi **Warehouse Manager / Logistics Supervisor & WMS Operations Specialist** bertanggung jawab mengoptimalkan pemanfaatan ruang 3D gudang (*cube utilization*), mempercepat waktu siklus pengambilan barang (*order picking*), serta memastikan akurasi persediaan (*Inventory Record Accuracy* - IRA).

### Standar Industri & Asosiasi:
1. **ASCM (Association for Supply Chain Management) / APICS CSCP Framework**.
2. **WERC (Warehousing Education and Research Council)**: *Warehouse Maturity & Benchmarking Metrics*.
3. **ANSI MH16.1**: *Specification for the Design, Testing and Utilization of Industrial Steel Storage Racks*.

---

## 2. Optimasi Penempatan Barang (Slotting Optimization & COI Index)

Metode *Cube-Per-Order Index* (COI) adalah algoritma deterministik klasik yang terbukti meminimalkan total jarak tempuh *material handler*.

### A. Indeks Cube-Per-Order (COI):
$$\text{COI}_i = \frac{S_i}{D_i}$$

Di mana:
- $S_i$: Ruang simpan yang dialokasikan untuk SKU $i$ (misal: volume dalam $\text{m}^3$ atau jumlah slot pallet).
- $D_i$: Frekuensi permintaan pemesanan per periode waktu (*demand trip velocity*).

**Aturan Penempatan (Heskett's Rule)**: Urutkan seluruh SKU berdasarkan nilai $\text{COI}_i$ dari yang **terkecil ke terbesar**. SKU dengan nilai $\text{COI}$ terkecil ditempatkan di lokasi yang paling dekat dengan pintu *I/O Station (Depot / Dock)* (*Golden Zone / Fast Mover Zone*).

### B. Analisis ABC-Velocity (Pareto 80/20 Rule Gudang):
- **Kelas A (Fast Movers - 20% SKU, 80% Order Picks)**: Diletakkan pada rak ketinggian setinggi pinggang (*Ergonomic Strike Zone*, $0.8 - 1.5\text{ m}$) di lorong utama terdekat dengan pintu keluar.
- **Kelas B (Medium Movers - 30% SKU, 15% Order Picks)**: Diletakkan di rak bawah atau tingkat kedua.
- **Kelas C (Slow Movers - 50% SKU, 5% Order Picks)**: Diletakkan di bagian rak paling atas ($> 2.5\text{ m}$) atau area belakang gudang.

---

## 3. Pemanfaatan Ruang Gudang (Warehouse Cube Utilization %)

Efisiensi penyimpanan ruang volumetrik dihitung secara 3-dimensi ($P \times L \times T$):

### A. Formula Cube Utilization ($CU$):
$$CU = \frac{\sum_{i=1}^{n} V_{\text{SKU } i}}{V_{\text{net usable storage}}} \times 100\%$$

Di mana $V_{\text{net usable storage}} = L_{\text{gudang}} \times W_{\text{gudang}} \times H_{\text{clearance}} - V_{\text{aisle}} - V_{\text{dock}} - V_{\text{office}}$.
Target *World-Class Warehouse*: $CU \ge 75\% - 85\%$.

### B. Honeycombing Loss (Kehilangan Ruang Akibat Ketidakpenuhan):
1. **Vertical Honeycombing**: Celah udara kosong di antara bagian atas muatan palet dan balok rak di atasnya.
2. **Horizontal Honeycombing**: Ruang slot palet kosong yang tidak dapat diisi karena dedikasi SKU pada satu *bay*.

---

## 4. Heuristik Routing Pengambilan Barang (Order Picking Routing Heuristics)

Pengambilan pesanan (*Order Picking*) menyerap hingga $55\%$ dari total biaya operasional gudang.

```
[Depot / Dock]
  ||
  |==> [Lorong 1] === (Lewati Penuh) ===>
  |                                     |
  |<== [Lorong 2] <== (Lewati Penuh) <=== (S-Shape Routing)
  |
  |==> [Lorong 3] === (Mid-Point Return) <==> (Mid-Point Routing)
```

1. **S-Shape (Transversal) Heuristic**: Picker memasuki lorong yang memiliki pick item, menyusuri lorong sampai ujung keluar, lalu masuk ke lorong berikutnya dari ujung sebaliknya.
2. **Return Heuristic**: Picker masuk ke lorong, mengambil barang sampai item terjauh di lorong tersebut, lalu putar balik keluar dari ujung lorong yang sama.
3. **Mid-Point Heuristic**: Gudang dibagi menjadi dua zona (depan dan belakang). Picker hanya masuk sejauh titik tengah lorong lalu putar balik.
4. **Largest Gap Heuristic**: Picker masuk sejauh mungkin ke dalam lorong dan hanya memutar balik jika celah antar pick item melebihi jarak ke ujung lorong.

---

## 5. Metrik Kinerja Gudang & Audit Akurasi Persediaan (Inventory Record Accuracy - IRA)

### A. Cycle Counting Accuracy (IRA):
$$\text{IRA} = \frac{\text{Jumlah SKU yang Cocok Sempurna (Fisik vs WMS)}}{\text{Total Jumlah SKU yang Di-Audit}} \times 100\%$$
Target industri otomotif/farmasi: $\text{IRA} \ge 99.5\%$.

### B. On-Time In-Full (OTIF) Delivery Rate:
$$\text{OTIF} = \frac{\text{Jumlah Order Terkirim Tepat Waktu Tanpa Cacat/Kurang}}{\text{Total Pesanan Pelanggan}} \times 100\%$$

### C. Order Cycle Time (OCT):
$$\text{OCT} = t_{\text{order received}} - t_{\text{shipped at dock}}$$

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A. (2010). *Facilities Planning* (4th ed.). John Wiley & Sons.
- Richards, G. (2021). *Warehouse Management: A Complete Guide to Improving Efficiency and Minimizing Costs in the Modern Warehouse* (4th ed.). Kogan Page.
- Duque-Jaramillo, J. C., Cogollo-Flórez, J. M., & Montoya-Torres, J. R. (2024). *Warehouse management optimization using a sorting-based slotting approach*. Journal of Industrial Engineering and Management, 17(1), 89-104. DOI: [10.3926/jiem.5661](https://doi.org/10.3926/jiem.5661).
- Yachachin, C. A. P., & Coronado, J. J. R. (2026). *Improving order picking service levels in distribution warehouses through SLP, dynamic slotting, and IoT-enabled WMS*. IEEE Access, 14, 18240-18255. DOI: [10.1109/ACCESS.2026.11642925](https://doi.org/10.1109/ACCESS.2026.11642925).
