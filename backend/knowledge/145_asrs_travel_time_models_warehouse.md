# 145. AS/RS Travel-Time Models & Storage Assignment

## Deskripsi Modul
Modul ini membahas *Automated Storage and Retrieval Systems* (AS/RS) dengan fokus pada model analitik waktu perjalanan (*travel-time models*) untuk crane S/R, strategi penugasan penyimpanan (*storage assignment*), dan kebijakan pengambilan barang (*retrieval policies*). Materi mencakup derivasi matematis dari Bozer & White (1984) hingga model modern untuk shuttle-based systems.

## Konsep Inti

### 1. Klasifikasi AS/RS
- **Unit-Load AS/RS:** Pallet handling, aisle-captive crane
- **Mini-Load AS/RS:** Small parts, bin/tote handling
- **Shuttle-Based SBS/RS:** Multi-tier shuttles + vertical lift
- **Carousel/VLM:** Vertical Lift Modules untuk small parts

### 2. Travel-Time Model (Bozer & White, 1984)
Untuk single-command cycle pada rack dengan dimensi $L$ (panjang) dan $H$ (tinggi), kecepatan horizontal $v_h$, vertikal $v_v$:

$$ T_{sc} = t_p + \max\left(\frac{L}{v_h}, \frac{H}{v_v}\right) $$

Untuk dual-command cycle:
$$ T_{dc} = t_p + E[\max(T_x, T_y)] + E[|T_x - T_y|] $$

di mana $T_x, T_y$ adalah random variables untuk travel time horizontal dan vertikal ke lokasi storage/retrieval.

**Normalized Travel Time (Square-in-Time):**
Jika rack dikonfigurasi sehingga $\frac{L}{v_h} = \frac{H}{v_v} = T$, maka:
$$ E[T_{sc}] = T + t_p $$
$$ E[T_{dc}] = \frac{4}{3}T + t_p $$

### 3. Storage Assignment Policies
| Policy | Deskripsi | Throughput | Space Utilization |
| :--- | :--- | :--- | :--- |
| Random | Lokasi acak seragam | Baseline | Tinggi |
| Dedicated | Zona tetap per SKU | Rendah | Rendah |
| Class-Based (ABC) | Fast movers dekat I/O | Tinggi | Sedang |
| Full-Turnover | Optimal berdasarkan turnover | Maksimum | Sedang |
| COI (Cube-Per-Order Index) | Volume × Turnover balanced | Tinggi | Tinggi |

**Class-Based Zone Design:**
Untuk $K$ kelas dengan proporsi permintaan $\alpha_k$ dan proporsi ruang $\beta_k$:
$$ \min \sum_{k=1}^{K} \alpha_k \cdot E[T_k(\beta_k)] $$
$$ \text{s.t. } \sum_{k=1}^{K} \beta_k = 1 $$

### 4. Retrieval Policies
- **Nearest Neighbor:** Ambil request terdekat
- **Shortest Travel Time:** Minimalkan total travel
- **Batching:** Gabungkan multiple orders dalam satu trip
- **Dual-Command Sequencing:** Pair storage + retrieval requests

### 5. Shuttle-Based Systems (SBS/RS)
Model travel time berbeda karena decoupling horizontal (shuttle) dan vertikal (lift):
$$ T_{sbs} = \max(T_{shuttle}, T_{lift}) + T_{transfer} $$

Tier-to-tier vs tier-captive configuration mempengaruhi throughput secara signifikan.

## Aplikasi Praktis
1. **Rack Dimensioning:** Optimasi rasio $L/H$ untuk meminimalkan expected travel time
2. **SKU Slotting:** ABC analysis + COI index untuk menentukan zona penyimpanan
3. **Throughput Estimation:** Gunakan travel-time model untuk sizing jumlah aisle/crane
4. **Energy Optimization:** Trade-off antara speed dan energy consumption

## Referensi Terverifikasi
1. **Bozer, Y. A., & White, J. A.** (1984). "Travel-time models for automated storage/retrieval systems". *IIE Transactions*, 16(4), 329-338. (Paper seminal AS/RS).
2. **Gu, J., Goetschalckx, M., & McGinnis, L. F.** (2007). "Research on warehouse operation: A comprehensive review". *European Journal of Operational Research*, 177(1), 1-21.
3. **Baker, P., & Canessa, M.** (2009). "Warehouse design: A structured approach". *European Journal of Operational Research*, 193(2), 425-436.
4. **Azadeh, K., et al.** (2019). "Robotized and automated warehouse systems: Review and recent developments". *Transportation Research Part B*, 126, 917-945.
5. **Gagliardi, J.-P., Renaud, J., & Ruiz, A.** (2023). "Models for automated storage and retrieval systems: A literature review and research agenda". *International Journal of Production Research*, 61(12), 4021-4046.

## Kata Kunci
AS/RS, Automated Storage Retrieval System, Travel-Time Model, Bozer White, Storage Assignment, Class-Based Storage, Dual-Command Cycle, Single-Command Cycle, Shuttle-Based System, SBS/RS, Warehouse Automation, Cube-Per-Order Index, Rack Configuration, Material Handling.

</content>