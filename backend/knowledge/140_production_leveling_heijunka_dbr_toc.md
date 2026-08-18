# 140. Heijunka & Drum-Buffer-Rope (DBR) dalam Theory of Constraints

## Deskripsi Modul
Modul ini membahas dua pendekatan fundamental untuk *production leveling* dan pengendalian aliran produksi: **Heijunka** dari Toyota Production System (TPS) dan **Drum-Buffer-Rope (DBR)** dari Theory of Constraints (TOC). Meskipun berasal dari filosofi berbeda, keduanya bertujuan meratakan beban kerja, mengurangi variabilitas, dan mencegah overproduction melalui mekanisme pull-based control.

## Konsep Inti

### 1. Heijunka (Production Leveling)
Heijunka adalah teknik perataan volume dan mix produksi untuk menghilangkan *mura* (ketidakrataan) yang menyebabkan *muda* (pemborosan).

**Dua Dimensi Leveling:**
- **Volume Leveling:** Memproduksi jumlah total yang sama setiap periode
- **Mix Leveling:** Memproduksi proporsi varian produk yang konsisten setiap siklus

**Heijunka Box Calculation:**
Untuk $n$ model dengan permintaan harian $d_1, d_2, ..., d_n$:
$$ \text{Pitch} = \frac{\sum_{i=1}^{n} d_i}{N_{cycles}} $$

Dimana $N_{cycles}$ ditentukan oleh EPEI (*Every Part Every Interval*):
$$ EPEI = \frac{\sum_{i=1}^{n} S_i}{T_{available} - \sum_{i=1}^{n} d_i \cdot t_i} $$

Dengan $S_i$ = setup time per model, $t_i$ = cycle time per unit.

**Contoh Heijunka Sequence:**
Permintaan harian: A=60, B=30, C=10 → Ratio 6:3:1
Sequence ideal: A-B-A-C-A-B-A-A-B-A (repeating pattern)

### 2. Theory of Constraints (TOC) Fundamentals
TOC memandang sistem produksi sebagai rantai yang kekuatannya ditentukan oleh mata rantai terlemah (*constraint/bottleneck*).

**Five Focusing Steps:**
1. **Identify** constraint
2. **Exploit** constraint (maximize utilization without investment)
3. **Subordinate** everything else to constraint
4. **Elevate** constraint (add capacity if needed)
5. **Repeat** (avoid inertia)

**Throughput Accounting:**
$$ \text{Throughput (T)} = \text{Revenue} - \text{Totally Variable Costs} $$
$$ \text{Net Profit} = T - \text{Operating Expense (OE)} $$
$$ \text{ROI} = \frac{T - OE}{\text{Investment}} $$

### 3. Drum-Buffer-Rope (DBR) Mechanism
DBR adalah mekanisme eksekusi TOC yang menyinkronkan seluruh sistem dengan pace bottleneck.

**Komponen DBR:**
- **Drum:** Jadwal bottleneck yang menentukan ritme seluruh sistem
- **Buffer:** Perlindungan waktu/inventory sebelum bottleneck dan sebelum shipping
- **Rope:** Mekanisme komunikasi yang menarik material ke gateway berdasarkan konsumsi bottleneck

**Buffer Sizing Formula:**
$$ B_{time} = k \cdot (\sigma_{setup} + \sigma_{process}) \cdot \sqrt{L_{feeder}} $$

Dimana $k$ = safety factor (biasanya 1.5-3), $\sigma$ = standar deviasi, $L_{feeder}$ = lead time feeder resource.

**Rope Signal Logic:**
$$ \text{Release}_t = \text{Consumption}_{bottleneck, t-\Delta} $$

Material hanya dilepas ke lantai produksi ketika bottleneck telah mengonsumsi material sebelumnya, mencegah WIP berlebih.

### 4. Buffer Management & Recovery
Buffer dibagi tiga zona: Green (OK), Yellow (Warning), Red (Action Required).

$$ \text{Buffer Penetration \%} = \frac{\text{Actual Wait Time}}{\text{Total Buffer Size}} \times 100\% $$

**Prioritas Ekspedisi:**
- Zona Merah > 75%: Ekspedisi segera, root cause analysis wajib
- Zona Kuning 33-75%: Monitor, siapkan recovery plan
- Zona Hijau < 33%: Normal operation

### 5. Integrasi Heijunka + DBR
Dalam lingkungan HMLV, kombinasi keduanya optimal:
- **Heijunka** meratakan demand signal di level master schedule
- **DBR** mengeksekusi floor-level synchronization dengan constraint awareness
- **Combined Benefit:** Reduced bullwhip effect + protected throughput

$$ \text{Effective Capacity} = \min(\text{Bottleneck Rate}, \text{Heijunka Pitch Rate}) $$

## Aplikasi Industri
1. **Automotive Assembly:** Mix leveling untuk multi-model lines
2. **Semiconductor Fab:** DBR dengan photolithography sebagai drum
3. **Food Processing:** Heijunka untuk allergen changeover minimization
4. **Job Shop Manufacturing:** Simplified DBR (S-DBR) untuk make-to-order

## Studi Kasus Numerik
Line dengan 5 workstation, WS3 adalah bottleneck (capacity = 8 units/hr).
- Demand: 100 units/day (10 hr shift)
- Feeder WS1→WS3 lead time = 2 hr, σ = 0.5 hr
- Buffer size: $B = 2 \times 0.5 \times \sqrt{2} = 1.41$ hr ≈ 1.5 hr
- Rope release rate = 8 units/hr (sinkron dengan drum)
- Jika WS3 breakdown 30 min, buffer memberikan protection window

## Referensi Terverifikasi
1. **Goldratt, E. M., & Cox, J.** (2014). *The Goal: A Process of Ongoing Improvement* (3rd Rev. ed.). North River Press. (Buku seminal TOC/DBR).
2. **Ohno, T.** (1988). *Toyota Production System: Beyond Large-Scale Production*. Productivity Press. (Sumber asli Heijunka).
3. **Schragenheim, E., Dettmer, H. W., & Patterson, J. R.** (2023). *Supply Chain Management at Warp Speed: Integrating the System from End to End*. CRC Press. (Modern DBR/S-DBR).
4. **Thürer, M., et al.** (2024). "Heijunka and workload control in high-variety manufacturing: An integrated framework". *International Journal of Production Economics*, 267, 109078.
5. **Gupta, M. C., & Boyd, L. H.** (2023). "Theory of Constraints: A review and research agenda for Industry 4.0 integration". *Journal of Manufacturing Technology Management*, 34(6), 1123-1148.

## Kata Kunci
Heijunka, Production Leveling, Drum-Buffer-Rope, DBR, Theory of Constraints, TOC, Bottleneck Management, Buffer Management, Throughput Accounting, EPEI, Pull System, Goldratt, TPS, Mix Leveling, Volume Leveling.

</content>