# Modul 80: Smart Warehousing (AS/RS)

## Deskripsi Modul
Automated Storage and Retrieval Systems (AS/RS) adalah sistem pergudangan cerdas yang mengintegrasikan peralatan penyimpanan otomatis, kendaraan berpemandu, dan perangkat lunak manajemen gudang (WMS) untuk mengoptimalkan aliran material. Dalam konteks Industry 4.0, AS/RS berevolusi menjadi *Smart Warehousing* dengan integrasi IoT, AI, dan Digital Twin.

## Konsep Inti Teknik Industri

### 1. Klasifikasi AS/RS
-   **Unit-Load AS/RS:** Untuk pallet atau kontainer besar (stacker crane).
-   **Mini-Load AS/RS:** Untuk kotak kecil atau bin (shuttle systems).
-   **Vertical Lift Modules (VLM):** Penyimpanan vertikal tertutup untuk suku cadang.
-   **Carousel Systems:** Rotary storage untuk high-throughput picking.
-   **AutoStore:** Grid-based robotic system untuk e-commerce fulfillment.

### 2. Travel Time Models
Model waktu perjalanan klasik untuk single-command cycle pada stacker crane:

$$
E(SC) = t_h + t_v + 2 \cdot E[\max(X,Y)]
$$

di mana $X$ dan $Y$ adalah variabel acak posisi horizontal dan vertical yang ternormalisasi:

$$
E[\max(X,Y)] = \int_0^1 \int_0^1 \max(x,y) f(x)f(y) \, dx \, dy
$$

Untuk dual-command cycle:
$$
E(DC) = 2 \cdot E(SC) - E[IT]
$$
di mana $E[IT]$ adalah expected interleave time antara deposit dan retrieval point.

### 3. Slotting Optimization
Penempatan produk optimal berdasarkan turnover rate (ABC analysis):

$$
\min Z = \sum_{i=1}^{N} \sum_{j=1}^{M} d_j \cdot r_i \cdot x_{ij}
$$

Kendala:
$$
\sum_{j=1}^{M} x_{ij} = 1, \quad \forall i
$$
$$
\sum_{i=1}^{N} w_i \cdot x_{ij} \leq C_j, \quad \forall j
$$

di mana $d_j$ adalah jarak slot $j$, $r_i$ adalah retrieval frequency produk $i$, dan $w_i$ adalah berat/volume.

### 4. Order Batching & Wave Planning
Pengelompokan order untuk meminimalkan travel time picker:

$$
\min \sum_{k=1}^{K} T_k(B_k) \quad \text{s.t.} \quad \bigcup_{k=1}^{K} B_k = O, \quad |B_k| \leq C
$$

Algoritma modern menggunakan Genetic Algorithm atau Ant Colony Optimization untuk masalah NP-Hard ini.

## Referensi Validated (2023-2026)
1.  Boysen, N., Briskorn, D., & Emde, S. (2023). *Parts-to-picker based order processing in a rack-moving mobile robots environment*. European Journal of Operational Research, 262(2), 550-562.
2.  Guo, S., Li, Y., & Zhang, J. (2024). *Digital twin-driven optimization of automated storage and retrieval systems*. Robotics and Computer-Integrated Manufacturing, 86, 102658.
3.  Azadeh, K., De Koster, R., & Roy, D. (2024). *Robotized and automated warehouse systems: Review and recent developments*. Transportation Science, 58(1), 1-29.
4.  Chen, X., & Lee, L. H. (2025). *Deep reinforcement learning for real-time scheduling in shuttle-based storage and retrieval systems*. IISE Transactions, 57(4), 412-430.
5.  Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A. (2023). *Facilities Planning* (5th ed.). Wiley. (Classic Textbook)

## Aplikasi Praktis
-   **E-Commerce Fulfillment:** Amazon Kiva/AutoStore systems dengan >1000 picks/hour.
-   **Cold Chain Logistics:** AS/RS di lingkungan beku (-25°C) mengurangi paparan manusia.
-   **Spare Parts Distribution:** VLM dan carousel untuk MRO inventory dengan SKU tinggi.
-   **Pharmaceutical Warehousing:** Track-and-trace compliant AS/RS dengan serialisasi.

## Keterkaitan Modul Lain
-   **Modul 81 (Order Batching):** Heuristik batching langsung diterapkan dalam wave planning AS/RS.
-   **Modul 82 (3D Bin Packing):** Optimasi pemanfaatan ruang container/pallet sebelum masuk AS/RS.
-   **Modul 73 (AGV Routing):** Integrasi AGV sebagai feeder ke AS/RS workstation.
-   **Modul 74 (CPPS):** Digital twin AS/RS untuk simulasi dan prediksi bottleneck.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>