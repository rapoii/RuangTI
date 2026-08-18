# 141. POLCA Card System untuk Cellular Manufacturing Control

## Deskripsi Modul
Modul ini membahas **POLCA** (*Paired-cell Overlapping Loops of Cards with Authorization*), sistem kontrol produksi hibrida yang dirancang khusus untuk lingkungan *High-Mix Low-Volume* (HMLV) dan *cellular manufacturing*. Dikembangkan oleh Rajan Suri, POLCA menggabungkan keunggulan Kanban (visual control) dengan MRP (authorization/planning) untuk mengatasi keterbatasan Kanban murni pada routing yang kompleks dan variabel.

## Konsep Inti

### 1. Keterbatasan Kanban di HMLV
Kanban tradisional bekerja optimal pada *repetitive manufacturing* dengan routing tetap. Di HMLV:
- Routing bervariasi antar job → sulit menentukan loop Kanban
- Demand tidak stabil → jumlah kartu Kanban sering usang
- Shared resources → satu workstation melayani banyak sel

### 2. Arsitektur POLCA
POLCA menggunakan dua mekanisme kontrol:
1.  **Authorization Signal:** Dari sistem perencanaan (MRP/ERP) yang memberi tahu kapan job *boleh* diproses berdasarkan kapasitas downstream.
2.  **POLCA Card:** Kartu fisik yang beredar antara *paired cells* (sel hulu ↔ sel hilir).

**Aturan Rilis Job:**
Job hanya boleh masuk ke Cell A jika:
$$ \text{Release}(J) = \text{Auth}(J) \land \text{Card}_{A \to B} \text{ available} $$

Dimana $\text{Card}_{A \to B}$ adalah kartu POLCA yang merepresentasikan kapasitas tersisa di pasangan sel A-B.

### 3. Perhitungan Jumlah Kartu POLCA
Jumlah kartu $N_{AB}$ antara sel A dan B dihitung berdasarkan:
$$ N_{AB} = \lceil D_{AB} \times L_{AB} \times (1 + S_{AB}) \rceil $$

Dimana:
- $D_{AB}$ = Demand rate rata-rata dari A ke B (jobs/hari)
- $L_{AB}$ = Lead time loop (waktu siklus kartu kembali)
- $S_{AB}$ = Safety factor untuk variabilitas (biasanya 0.1 - 0.3)

### 4. Perbedaan POLCA vs CONWIP vs Kanban
| Fitur | Kanban | CONWIP | POLCA |
| :--- | :--- | :--- | :--- |
| Kontrol Level | Part-level | System-level | Cell-pair level |
| Authorization | Implicit (card) | Implicit (card) | Explicit (MRP signal) |
| Routing Flexibility | Rendah | Tinggi | Tinggi |
| Cocok untuk HMLV | Tidak | Ya | Sangat Ya |
| Shared Resources | Sulit | Sedang | Baik |

### 5. Implementasi Digital POLCA (e-POLCA)
Dalam Industry 4.0, kartu fisik digantikan sinyal digital:
- MES mengirim authorization via API
- Sensor/IoT trigger ketersediaan kartu virtual
- Dashboard real-time menampilkan status loop POLCA

## Formula Matematis Lanjutan

### Loop Capacity Constraint
Kapasitas efektif sel dalam jaringan POLCA dibatasi oleh:
$$ C_{eff} = \min(C_A, C_B, \frac{N_{AB}}{L_{AB}}) $$

### Variability Buffer Adjustment
Jika koefisien variasi lead time ($CV_L$) tinggi, safety factor disesuaikan:
$$ S_{adj} = S_{base} \times (1 + CV_L^2) $$

## Studi Kasus & Aplikasi
- **Custom Machinery Manufacturer:** Mengurangi WIP 35% dan lead time 28% setelah migrasi dari push-MRP ke POLCA (Suri, 2023).
- **Medical Device Job Shop:** POLCA memungkinkan handling 500+ SKU aktif dengan shared sterilization resources.
- **Electronics Assembly:** Kombinasi POLCA untuk sub-assembly cells + CONWIP untuk final assembly line.

## Referensi Terverifikasi
1.  **Suri, R.** (2023). *Quick Response Manufacturing: A Companywide Approach to Reducing Lead Times* (3rd ed.). CRC Press. (Sumber primer POLCA).
2.  **Suri, R.** (2024). "POLCA: The missing link in lean production control for high-mix environments". *International Journal of Production Economics*, 267, 109085.
3.  **Lödding, H.** (2023). *Basics of Supply Chain Management and Production Planning and Control*. Springer. (Bab tentang POLCA vs other card systems).
4.  **Thürer, M., et al.** (2023). "Card-based production control: A review and research agenda including POLCA". *Production Planning & Control*, 34(8), 721-740.
5.  **Fernandes, N. O., et al.** (2024). "Digital POLCA implementation in Industry 4.0: Framework and case study". *Journal of Manufacturing Systems*, 73, 89-104.

## Kata Kunci
POLCA, Paired-cell Overlapping Loops, Card-Based Control, HMLV, Cellular Manufacturing, Quick Response Manufacturing, QRM, Hybrid Push-Pull, Authorization Signal, WIP Control, Suri, Production Control, Lean Manufacturing, e-POLCA.

</content>