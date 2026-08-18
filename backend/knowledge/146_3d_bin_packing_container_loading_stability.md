# 146. 3D Bin Packing & Container Loading dengan Stability Constraints

## Deskripsi Modul
Modul ini membahas masalah optimasi pengemasan tiga dimensi (3D-BPP) dan pemuatan kontainer dengan mempertimbangkan constraint stabilitas fisik. Topik mencakup formulasi matematis, algoritma heuristik (Extreme Point, Skyline), dan pendekatan hybrid untuk memaksimalkan utilisasi volume sambil menjamin keamanan muatan selama transportasi.

## Konsep Inti

### 1. Formulasi Masalah 3D-BPP
Diberikan set item $I = \{1, ..., n\}$ dengan dimensi $(w_i, d_i, h_i)$ dan berat $m_i$, serta bin/kontainer dengan dimensi $(W, D, H)$ dan kapasitas berat $M_{max}$.

**Objective:**
$$\min \sum_{k=1}^{K} y_k$$

di mana $y_k = 1$ jika bin $k$ digunakan.

**Constraints:**
- **Non-overlap**: $\forall i \neq j$ dalam bin yang sama, tidak ada interseksi volumetrik
- **Containment**: $0 \leq x_i, x_i + w_i \leq W$; serupa untuk $y, z$
- **Weight**: $\sum_{i \in B_k} m_i \leq M_{max}$
- **Orientation**: Item dapat dirotasi (hingga 6 orientasi orthogonal)

### 2. Extreme Point Based Heuristic
Metode Extreme Point (EP) mempertahankan daftar titik kandidat penempatan:

$$EP = \{(x, y, z) | \text{titik sudut feasible setelah placement sebelumnya}\}$$

**Best Extreme Point Selection:**
$$ep^* = \arg\min_{ep \in EP} \left[ \alpha \cdot \text{Waste}(ep, item) + \beta \cdot \text{Dist}(ep, origin) \right]$$

di mana Waste adalah volume residual tak terpakai di sekitar item.

### 3. Stability Constraints

#### A. Base Support Constraint
Setiap item harus memiliki area kontak minimum dengan item/floor di bawahnya:
$$\frac{A_{contact}}{A_{base}} \geq \gamma_{min}$$

dengan $\gamma_{min}$ biasanya 0.5-0.7 tergantung fragilitas barang.

#### B. Center of Gravity (CoG) Constraint
Untuk stack kolom items, CoG gabungan harus berada dalam support polygon:
$$x_{cog} = \frac{\sum m_i x_i}{\sum m_i}, \quad y_{cog} = \frac{\sum m_i y_i}{\sum m_i}$$

Stability margin:
$$SM = \min\left(\frac{x_{cog} - x_{min}}{x_{max} - x_{min}}, \frac{x_{max} - x_{cog}}{x_{max} - x_{min}}, \frac{y_{cog} - y_{min}}{y_{max} - y_{min}}, \frac{y_{max} - y_{cog}}{y_{max} - y_{min}}\right)$$

Require $SM \geq SM_{threshold}$.

#### C. Stacking Strength Constraint
Beban kumulatif tidak boleh melebihi crushing strength:
$$\sum_{j \in Above(i)} m_j \cdot g \leq \sigma_{max,i} \cdot A_{top,i}$$

### 4. Algoritma Lanjutan

#### A. Skyline Algorithm
Merepresentasikan permukaan atas packing sebagai polyline 2D:
$$Skyline = \{(x_1, z_1), (x_2, z_2), ..., (x_m, z_m)\}$$

Item ditempatkan pada posisi yang meminimalkan kenaikan skyline rata-rata.

#### B. GRASP with Path Relinking
1. **Construction Phase**: Randomized EP selection
2. **Local Search**: Swap, shift, rotate operations
3. **Path Relinking**: Interpolasi antara elite solutions

#### C. Integer Linear Programming (ILP) Formulation
Slice-based formulation untuk small instances:
$$\min \sum_k y_k$$
s.t.
$$\sum_{i \in I} w_i \cdot x_{ik} \leq W \cdot y_k, \quad \forall k$$
$$\sum_{p \in P} a_{ip} \lambda_p = 1, \quad \forall i$$

di mana $P$ adalah set feasible patterns dan $\lambda_p \in \{0,1\}$.

### 5. Practical Considerations

**Loading Sequence Constraint:**
Item yang dimuat terakhir harus bisa diakses pertama (LIFO untuk unloading):
$$z_i < z_j \Rightarrow \text{load\_order}(i) > \text{load\_order}(j) \quad \text{jika same column}$$

**Weight Distribution:**
Balance kiri-kanan untuk container:
$$\left| \sum_{i \in Left} m_i - \sum_{i \in Right} m_i \right| \leq \delta \cdot M_{total}$$

dengan $\delta$ biasanya 0.1-0.2.

## Referensi

### Textbooks
1. Dyckhoff, G., & Scheithauer, G. (2023). *Bin Packing and Cutting Stock Problems: Mathematical Models and Exact Algorithms*. Springer.
2. Bortfeldt, A., & Wascher, G. (2024). "Heuristics for three-dimensional packing problems". In *Handbook of Metaheuristics* (3rd ed.). Springer.

### Journal Articles (2023-2026)
1. Zhao, X., Li, Y., & Zhang, Q. (2024). A hybrid genetic algorithm with extreme point heuristic for 3D container loading problem with stability constraints. *European Journal of Operational Research*, 315(1), 89-105.
2. Parreño, F., Álvarez-Valdés, R., & Tamarit, J. M. (2023). A branch-and-price algorithm for the 3D bin packing problem with weight and balance constraints. *Computers & Operations Research*, 158, 106312.
3. Liu, H., Wang, Z., & Chen, L. (2024). Deep reinforcement learning for online 3D bin packing with heterogeneous items. *Transportation Research Part E*, 182, 103398.
4. Mahvash, B., & Kim, S. (2023). Stability-aware container loading optimization using physics simulation feedback. *Journal of Manufacturing Systems*, 70, 345-360.
5. Gajda, M., & Tricoire, F. (2025). Machine learning-guided heuristics for real-time 3D packing in e-commerce fulfillment. *International Journal of Production Economics*, 280, 109512.

## Latihan Soal

1. Diberikan 5 box dengan dimensi (cm): A(40×30×20, 5kg), B(30×30×30, 8kg), C(50×20×20, 3kg), D(20×20×40, 6kg), E(30×40×25, 7kg). Kontainer: 60×40×50 cm, max 30kg. Gunakan Extreme Point heuristic untuk menentukan packing sequence dan hitung utilisasi volume.

2. Verifikasi stabilitas stack berikut menggunakan CoG constraint: Base item 40×40 cm, dua item di atas masing-masing 20×40 cm ditempatkan side-by-side dengan offset 5 cm dari edge. Apakah stabil dengan $\gamma_{min}=0.6$?

3. Implementasikan pseudo-code Skyline algorithm untuk 2D strip packing sebagai subrutin dari 3D layer-based packing.

</content>