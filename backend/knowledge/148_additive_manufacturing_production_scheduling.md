# 148. Additive Manufacturing Production Scheduling & 3D Nesting

## Deskripsi Modul
Modul ini membahas tantangan unik penjadwalan produksi pada *Additive Manufacturing* (AM), khususnya untuk proses Powder Bed Fusion (PBF) dan Binder Jetting yang melibatkan build chamber dengan kapasitas terbatas. Fokus utama adalah integrasi antara *3D Bin Packing/Nesting* (penempatan part dalam chamber) dan *Batch Scheduling* (pengelompokan job ke dalam build cycles), serta optimasi parameter orientasi dan support structure.

## Konsep Inti

### 1. Karakteristik Unik AM Scheduling
Berbeda dengan manufaktur subtraktif, AM memiliki karakteristik:
- **Batch Processing:** Multiple parts dapat diproduksi simultan dalam satu build chamber.
- **Geometry-Dependent Time:** Build time bergantung pada tinggi total ($Z_{max}$) dan area cross-section, bukan volume material semata.
- **Nesting Interdependence:** Penempatan satu part mempengaruhi ruang tersedia untuk part lain (3D packing problem).
- **Post-Processing Dependency:** Cooling, depowdering, heat treatment seringkali menjadi bottleneck tersembunyi.

### 2. Model Waktu Build PBF
Waktu build total untuk satu batch $B$:
$$ T_{build}(B) = T_{setup} + \sum_{l=1}^{L} \left( t_{recoat} + t_{scan}(l) \right) + T_{cool} $$

Dimana:
- $L$: Jumlah layer = $\lceil Z_{max}(B) / \Delta z \rceil$
- $t_{scan}(l)$: Scan time layer $l$, proporsional terhadap total scan length
- $T_{setup}$: Preheating, calibration (~2-4 jam untuk metal AM)
- $T_{cool}$: In-chamber cooling (~0.5-1x build time)

Estimasi scan time layer $l$:
$$ t_{scan}(l) = \frac{A_{cross}(l)}{v_{scan} \cdot h_{hatch}} + n_{contour}(l) \cdot t_{jump} $$

### 3. 3D Nesting / Bin Packing Problem
Masalah menempatkan set parts $\mathcal{P}$ ke dalam build volume $V_{chamber} = W \times D \times H$:

**Objective:** Minimize number of builds atau maximize utilization rate:
$$ \eta = \frac{\sum_{p \in B} V_p}{V_{chamber}} \times 100\% $$

**Constraints:**
- No overlap: $\forall i,j \in B, \text{Int}(P_i) \cap \text{Int}(P_j) = \emptyset$
- Boundary: $P_i \subseteq V_{chamber}$
- Orientation: Part dapat dirotasi (biasanya diskrit: 0°, 90°, 180°, 270° sekitar Z-axis)
- Support accessibility: Ruang untuk removal post-process

### 4. Integrated Nesting-Scheduling Model
Model dua tahap yang umum digunakan:

**Stage 1 - Batch Formation & Nesting:**
$$ \min \sum_{b=1}^{B} T_{build}(b) + \alpha \cdot N_{unused} $$

**Stage 2 - Machine Assignment:**
Assign batches ke mesin AM heterogen dengan different capabilities:
$$ \min C_{max} = \max_{m \in M} \left\{ \sum_{b \in B_m} T_{build}(b) + T_{changeover}(b) \right\} $$

## Algoritma Nesting & Scheduling

### 1. Bottom-Left-Back (BLB) Heuristic
Adaptasi 3D dari Bottom-Left heuristic:
1. Sort parts by descending height or volume
2. Untuk setiap part, cari posisi feasible paling kiri-bawah-belakang
3. Cek collision menggunakan AABB/OBB tree
4. Jika tidak muat, buka bin baru

### 2. Genetic Algorithm untuk Nesting
Chromosome encoding: permutation of parts + orientation genes
- Crossover: Order-based crossover preserving feasibility
- Mutation: Swap positions, rotate parts
- Fitness: Utilization rate + penalty for infeasibility

### 3. Constraint Programming (CP)
Model CP modern menggunakan global constraints:
```
constraint noOverlap3D(parts[i], parts[j]) forall i != j;
constraint withinBounds(parts[i], chamber) forall i;
```
Solver seperti IBM CP Optimizer atau OR-Tools CP-SAT efektif untuk instance kecil-menengah (<50 parts).

## Orientasi & Support Optimization
Orientasi part mempengaruhi:
- **Build Height:** Menentukan jumlah layer → build time
- **Support Volume:** Overhang > threshold angle memerlukan support
- **Surface Quality:** Stair-stepping effect minimal pada face tertentu
- **Residual Stress:** Orientasi mempengaruhi thermal gradient

Multi-objective orientation optimization:
$$ \min \left\{ w_1 \cdot H(\theta) + w_2 \cdot V_{support}(\theta) + w_3 \cdot R_a(\theta) \right\} $$

## Aplikasi Industri

### 1. Medical Implants (Patient-Specific)
- High mix, lot-size-one production
- Urgency-based scheduling (surgery dates)
- Traceability requirements per ISO 13485

### 2. Aerospace Spare Parts
- On-demand manufacturing reducing inventory
- Material certification tracking (powder lot history)
- Post-processing qualification gates

### 3. Tooling & Jigs
- Rapid turnaround priority scheduling
- Lower quality requirements → faster parameters
- Nested with production parts untuk improve utilization

## Tantangan Riset Terkini
1. **Heterogeneous Machines:** Different build volumes, speeds, materials
2. **Uncertainty:** Build failures, powder degradation, machine breakdowns
3. **Energy-Aware Scheduling:** Peak electricity pricing, renewable integration
4. **Quality-Constrained Nesting:** Thermal interaction antar parts dalam batch

## Referensi
1. **Gibson, I., Rosen, D., & Stucker, B.** (2021). *Additive Manufacturing Technologies* (3rd ed.). Springer. (Referensi komprehensif proses AM).
2. **Li, X., et al.** (2023). "Integrated nesting and scheduling for additive manufacturing: A comprehensive review". *Journal of Manufacturing Systems*, 68, 445-468.
3. **Fera, M., et al.** (2024). "Metaheuristic approaches for 3D bin packing in selective laser melting scheduling". *Computers & Industrial Engineering*, 189, 110012.
4. **Ransikarbum, K., & Ha, S.** (2023). "Multi-objective optimization of part orientation and scheduling in powder bed fusion". *Additive Manufacturing*, 72, 103645.
5. **Baumers, M., et al.** (2023). "The cost of additive manufacturing: Machine productivity, economies of scale and technology-push". *Technological Forecasting and Social Change*, 188, 122278.

## Kata Kunci
Additive Manufacturing Scheduling, 3D Bin Packing, Nesting, Powder Bed Fusion, Build Time Estimation, Batch Scheduling, Part Orientation, Support Structure, Metal AM, SLS, DMLS, Layer-wise Manufacturing, AM Production Planning.

</content>