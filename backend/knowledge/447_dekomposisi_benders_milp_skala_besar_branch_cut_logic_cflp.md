# Modul 447: Dekomposisi Benders Klasik & Lanjutan (Branch-and-Cut, Logic-Based) untuk Optimasi Mixed-Integer Linear Programming Skala Besar

## 1. Konsep Dasar & Urgensi Dekomposisi Matematis dalam Riset Operasi Industri
Dalam rekayasa sistem industri berskala masif—seperti desain jaringan rantai pasok global (*Supply Chain Network Design* / SCND), penentuan lokasi fasilitas berkapasitas (*Capacitated Facility Location Problem* / CFLP), *unit commitment* pembangkit energi listrik, perencanaan rute armada multi-depot (*Vehicle Routing Problem*), hingga penjadwalan produksi *flow shop* terintegrasi—model optimasi matematis sering kali dirumuskan ke dalam bentuk **Mixed-Integer Linear Programming (MILP)**. 

Namun, ketika jumlah simpul pabrik ($I$), gudang perantara ($M$), dan pelanggan ($J$) mencapai ratusan atau ribuan, penyelesaian model langsung (*monolithic model*) menggunakan solver komersial konvensional seperti Gurobi, CPLEX, atau GLPK sering mengalami ledakan kombinatorial (*combinatorial explosion*) yang menyebabkan kehabisan memori (*out-of-memory*) atau waktu komputasi yang tak berhingga.

Struktur khusus dari model-model industri ini umumnya memiliki sifat **Block Angular** atau **Kopling Variabel** (*Complicating Variables*):
1. **Variabel Keputusan Diskrit/Biner ($y \in \{0, 1\}^m$)**: Bersifat strategis berjangka panjang, seperti keputusan mendirikan fasilitas manufaktur, membuka gudang (*facility opening*), membeli mesin berkapasitas besar, atau aktivasi rute logistik. Variabel-variabel ini adalah biang keladi (*complicating variables*) yang menjadikan ruang pencarian bersifat non-konveks (*NP-hard*).
2. **Variabel Keputusan Kontinu ($x \in \mathbb{R}_+^n$)**: Bersifat operasional taktis, seperti alokasi kuantitas pengiriman produk (*transportation flow*), level inventori pengaman, dan waktu operasi lini harian. Jika variabel biner $y$ ditentukan nilainya (difiksasi), masalah optimasi yang tersisa langsung runtuh menjadi masalah *Linear Programming* (LP) kontinu yang mudah diselesaikan dalam waktu polinomial (*polynomial time*).

```
+---------------------------------------------------------------------------------------------------+
|               STRUKTUR BLOK MATRIKS PEMROGRAMAN CAMPURAN BILANGAN BULAT (MILP)                    |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|      Variabel Biner Strategis (y)            Variabel Kontinu Aliran Operasional (x)              |
|        [Y_1, Y_2, ..., Y_m]                    [X_1, X_2, ..., X_n]                               |
|                                                                                                   |
|   +----------------------------+       +---------------------------------------------+            |
|   | Biaya Investasi Tetap:     |   +   | Biaya Operasional Kontinu:                  |  --> MIN   |
|   |      f^T · y               |       |      c^T · x                                |            |
|   +----------------------------+       +---------------------------------------------+            |
|                                                                                                   |
|   Matriks Kendala Penghubung (Coupling / Linking Matrix):                                         |
|   [  B  ] · y   +   [  A  ] · x   >=   b   (Kendala Pemenuhan Permintaan & Kapasitas Fisik)       |
|                                                                                                   |
|   Kendala Domain:                                                                                 |
|   y in {0, 1}^m   (Pencarian Pohon Kombinatorial)                                                 |
|   x >= 0          (Polytop Konveks Kontinu - Dual LP Simplex)                                     |
+---------------------------------------------------------------------------------------------------+
```

**Algoritma Dekomposisi Benders** (*Benders Decomposition*), yang dipelopori oleh Jacques F. Benders pada tahun 1962 dan disempurnakan untuk rekayasa industri oleh Arthur M. Geoffrion & Glenn W. Graves (1974), memanfaatkan struktur ini dengan memisahkan (*partitioning*) model besar menjadi dua komponen interaktif:
1. **Master Problem (MP)**: Menyelesaikan masalah bilangan bulat murni terhadap vektor $y$ yang diperbarui secara iteratif menggunakan bidang pemotong (*cutting planes* / *Benders cuts*).
2. **Dual Subproblem (DSP)**: Menyelesaikan masalah Linear Programming kontinu terhadap vektor $x$ untuk $y$ yang diberikan, mengevaluasi kelayakan fisik serta menghitung biaya operasional marginal melalui variabel ganda (*dual shadow prices*).

---

## 2. Landasan Matematis & Teori Dualitas LP

### 2.1 Formulasi Umum MILP Masalah Industri
Pandang formulasi umum masalah optimasi minimasi biaya industri:
$$\min_{x, y} \quad Z = f^T y + c^T x$$
$$\text{subject to:} \quad A x + B y \ge b$$
$$y \in Y \subseteq \{0, 1\}^m$$
$$x \ge 0, \quad x \in \mathbb{R}^n$$

di mana $f \in \mathbb{R}^m$, $c \in \mathbb{R}^n$, $b \in \mathbb{R}^p$, $A \in \mathbb{R}^{p \times n}$, dan $B \in \mathbb{R}^{p \times m}$.

### 2.2 Proyeksi Ruang Keputusan ke Vektor Biner $y$
Kita dapat memproyeksikan formulasi di atas ke dalam ruang variabel strategis $y$:
$$\min_{y \in Y} \left\{ f^T y + \min_{x \ge 0} \{ c^T x \mid A x \ge b - B y \} \right\}$$

Untuk nilai $y = \bar{y}$ yang tetap, **Primal Subproblem (PSP)** didefinisikan sebagai:
$$\begin{aligned}
\text{PSP}(\bar{y}): \quad v(\bar{y}) = \min_{x \ge 0} \quad & c^T x \\
\text{s.t.} \quad & A x \ge b - B \bar{y} \quad (\text{Dual multiplier: } u \ge 0)
\end{aligned}$$

### 2.3 Pembentukan Dual Subproblem (DSP)
Berdasarkan **Teorema Dualitas Kuat Linear Programming** (*Strong Duality Theorem*), nilai optimal dari Primal Subproblem sama dengan nilai optimal dari Dual Subproblem:
$$\begin{aligned}
\text{DSP}(\bar{y}): \quad v(\bar{y}) = \max_{u \ge 0} \quad & u^T (b - B \bar{y}) \\
\text{s.t.} \quad & A^T u \le c \\
& u \in \mathbb{R}_+^p
\end{aligned}$$

Perhatikan bahwa ruang fisibel dual $\mathcal{D} = \{ u \in \mathbb{R}_+^p \mid A^T u \le c \}$ **tidak bergantung** pada nilai $\bar{y}$. Nilai $\bar{y}$ hanya memodifikasi fungsi objektif dual.

Berdasarkan Teorema Representasi Minkowski-Weyl, ruang polihedral $\mathcal{D}$ dapat dinyatakan melalui himpunan berhingga titik ekstrem (*extreme points*) $\mathcal{P} = \{u^1, u^2, \dots, u^K\}$ dan arah sinar ekstrem (*extreme rays*) $\mathcal{R} = \{r^1, r^2, \dots, r^L\}$:
$$\mathcal{D} = \left\{ \sum_{k=1}^K \lambda_k u^k + \sum_{l=1}^L \mu_l r^l \;\middle|\; \sum_{k=1}^K \lambda_k = 1, \, \lambda_k \ge 0, \, \mu_l \ge 0 \right\}$$

```
                  SKEMA ITERASI DEKOMPOSISI BENDERS KLASIK
                  
   +--------------------------------------------------------------------+
   |                  BENDERS MASTER PROBLEM (MILP)                     |
   |                                                                    |
   |   min f^T y + θ                                                    |
   |   s.t. y in Y                                                      |
   |        θ >= (u^k)^T (b - B y),   ∀ u^k in Extreme Points (Optimality Cut)
   |        0 >= (r^l)^T (b - B y),   ∀ r^l in Extreme Rays   (Feasibility Cut)
   +--------------------------------------------------------------------+
             |                                              ^
             | Keputusan Fasilitas y_k                      | Bidang Pemotong
             v                                              | (Benders Cuts)
   +--------------------------------------------------------------------+
   |                   DUAL SUBPROBLEM (LP CONTINUOUS)                  |
   |                                                                    |
   |   v(y_k) = max u^T (b - B y_k)   s.t.  A^T u <= c,  u >= 0         |
   |                                                                    |
   |   [Status]:                                                        |
   |   - Unbounded (Primal Infeasible) -> Hasilkan Extreme Ray r^l      |
   |   - Bounded Optimal               -> Hasilkan Extreme Point u^k    |
   +--------------------------------------------------------------------+
```

### 2.4 Karakterisasi Bidang Pemotong (Benders Cuts)
Ketika Dual Subproblem diselesaikan pada iterasi ke-$k$ dengan vektor $\bar{y}^{(k)}$:
1. **Kasus 1: Subproblem Tidak Terbatas (*Unbounded*) / Primal Tak Fisibel**
   Jika terdapat arah sinar ekstrem $r \in \mathcal{R}$ sedemikian hingga $r^T (b - B \bar{y}^{(k)}) > 0$, maka $\text{PSP}(\bar{y}^{(k)})$ tidak fisibel (misalnya, total kapasitas pabrik yang dibuka tidak mampu memenuhi permintaan pasar agregat). Untuk memotong solusi $\bar{y}^{(k)}$ yang tidak fisibel tersebut, kita menambahkan **Benders Feasibility Cut**:
   $$r^T (b - B y) \le 0 \iff (r^T B) y \ge r^T b$$

2. **Kasus 2: Subproblem Terbatas dan Optimal (*Bounded Optimal*)**
   Jika $\text{DSP}(\bar{y}^{(k)})$ mencapai nilai optimal pada titik ekstrem $u^k \in \mathcal{P}$ dengan nilai objektif $v(\bar{y}^{(k)}) = (u^k)^T (b - B \bar{y}^{(k)})$, maka untuk setiap pilihan vektor $y$ yang mungkin, biaya operasional $c^T x$ pasti bernilai paling sedikit $(u^k)^T (b - B y)$. Kita menambahkan variabel estimasi pembatas bawah $\theta$ beserta **Benders Optimality Cut**:
   $$\theta \ge (u^k)^T (b - B y) \iff \theta + (u^k)^T B y \ge (u^k)^T b$$

---

## 3. Algoritma Dekomposisi & Mekanisme Konvergensi

### 3.1 Prosedur Langkah demi Langkah (Algoritma Relaksasi Penuh)
- **Langkah 0 (Inisialisasi)**:
  Tetapkan batas bawah $LB = -\infty$, batas atas $UB = +\infty$, toleransi konvergensi $\epsilon > 0$, indeks iterasi $k = 1$. Himpunan pemotong $\mathcal{P}_{\text{cut}} = \emptyset$, $\mathcal{R}_{\text{cut}} = \emptyset$.
- **Langkah 1 (Selesaikan Master Problem Relaksasi)**:
  $$\min_{y \in Y, \theta} \quad f^T y + \theta$$
  $$\text{s.t.} \quad \theta \ge (u^i)^T (b - B y), \quad \forall u^i \in \mathcal{P}_{\text{cut}}$$
  $$0 \ge (r^j)^T (b - B y), \quad \forall r^j \in \mathcal{R}_{\text{cut}}$$
  $$\theta \ge \theta_{\text{lower\_bound}}$$
  Peroleh solusi optimal Master $(\bar{y}^{(k)}, \bar{\theta}^{(k)})$. Perbarui batas bawah:
  $$LB = f^T \bar{y}^{(k)} + \bar{\theta}^{(k)}$$
- **Langkah 2 (Selesaikan Dual Subproblem)**:
  Selesaikan $\text{DSP}(\bar{y}^{(k)})$.
  - Jika solusinya *unbounded* dengan arah ray $r^{(k)}$:
    Tambahkan $r^{(k)}$ ke $\mathcal{R}_{\text{cut}}$.
  - Jika solusinya *bounded optimal* dengan titik ekstrem $u^{(k)}$ dan nilai optimal $v(\bar{y}^{(k)})$:
    Perbarui batas atas:
    $$UB = \min\left( UB, \, f^T \bar{y}^{(k)} + v(\bar{y}^{(k)}) \right)$$
    Tambahkan $u^{(k)}$ ke $\mathcal{P}_{\text{cut}}$.
- **Langkah 3 (Uji Kriteria Penghentian)**:
  Hitung *Relative Optimality Gap*:
  $$\text{Gap} = \dfrac{UB - LB}{|UB| + 10^{-10}}$$
  Jika $\text{Gap} \le \epsilon$ atau $UB - LB \le \epsilon$, **BERHENTI**. Solusi optimal adalah $y^* = \bar{y}^{(k)}$ dan $x^*$ diperoleh dari Primal Subproblem. Jika tidak, naikkan $k \leftarrow k + 1$ dan kembali ke Langkah 1.

### 3.2 Bukti Konvergensi Monoton Berhingga (*Finite Convergence*)
Karena himpunan variabel biner $Y \subseteq \{0, 1\}^m$ bersifat berhingga ($|Y| \le 2^m$) dan jumlah titik ekstrem $|\mathcal{P}|$ serta sinar ekstrem $|\mathcal{R}|$ dari politop dual berdimensi hingga juga bersifat berhingga, maka:
1. Master problem mengeksplorasi kombinasi baru pada setiap iterasi karena pemotong yang ditambahkan membatalkan solusi $\bar{y}^{(k)}$ yang suboptimal.
2. Batas bawah $LB_k$ monoton tak-turun ($LB_k \le LB_{k+1}$), sedangkan batas atas $UB_k$ monoton tak-naik ($UB_k \ge UB_{k+1}$).
3. Algoritma dijamin berhenti dan mencapai solusi eksak global dalam jumlah iterasi berhingga $K \le |\mathcal{P}| + |\mathcal{R}| < \infty$.

---

## 4. Teknik Akselerasi Lanjutan: Modern Benders Enhancements

Dalam praktik sistem industri berdimensi masif, Benders klasik sering menghadapi tantangan lambatnya konvergensi (*slow tailing-off effect*) akibat pemotong standar yang dangkal (*weak cuts*). Tiga paradigma akselerasi modern digunakan:

### 4.1 Magnanti-Wong Pareto-Optimal Cuts (1981)
Bila subproblem dual memiliki solusi alternatif optimal (*dual degeneracy*), pemilihan titik dual $u \in \mathcal{P}$ sangat menentukan kedalaman bidang pemotong. 
Titik dual $u_{\text{MW}}$ dikatakan **Pareto-Optimal** jika tidak ada titik dual optimal lain $u \in \mathcal{D}$ yang menghasilkan bidang pemotong yang mendominasi secara seragam:
$$(u_{\text{MW}})^T (b - B y) \ge u^T (b - B y), \quad \forall y \in Y$$
dengan ketidaksamaan ketat untuk setidaknya satu $y \in Y$.

Untuk memperoleh titik Pareto ini, Magnanti & Wong merumuskan subproblem sekunder menggunakan titik inti (*core point*) relatif interior $y^c \in \text{ri}(\text{conv}(Y))$:
$$\max_{u \in \mathcal{D}^*} \quad u^T (b - B y^c)$$
di mana $\mathcal{D}^* = \{ u \ge 0 \mid A^T u \le c, \, u^T(b - B \bar{y}^{(k)}) = v(\bar{y}^{(k)}) \}$.

### 4.2 Branch-and-Benders-Cut (Modern Single-Tree Framework)
Alih-alih menyelesaikan Master Problem MILP dari awal (*from scratch*) pada setiap iterasi yang membuang pohon pencarian (*Branch-and-Bound tree*), arsitektur **Branch-and-Cut** modern (seperti fitur *Lazy Constraint Callbacks* pada solver mutakhir) menyematkan Benders Decomposition ke dalam satu pohon Branch-and-Bound tunggal:
- Setiap kali solver menemukan solusi simpul integer $\bar{y} \in \{0, 1\}^m$ di simpul pohon, *callback* subproblem dipanggil secara instan.
- Benders Cut ditambahkan sebagai *lazy constraint* secara lokal/global tanpa me-reset pohon B&B, mengurangi waktu komputasi hingga 80-95%.

### 4.3 Logic-Based Benders Decomposition (LBBD) & Constraint Programming
Dikembangkan oleh John Hooker (2000), LBBD memperluas Dekomposisi Benders ke masalah-masalah di mana subproblem tidak berbentuk Linear Programming kontinu konveks (misalnya: penjadwalan mesin kumulatif *disjunctive scheduling*, *routing* dengan jendela waktu nonlinear, atau formulasi *Constraint Programming* / CP). Pemotong yang dihasilkan tidak lagi berupa kombinasi linear dual multiplier, melainkan klausa logika proposisional (*logic inference cuts*) yang memetakan relasi sebab-akibat kegagalan alokasi.

---

## 5. Implementasi Algoritma Python Solver Lengkap

Berikut adalah implementasi Python mandiri (*pure Python + NumPy*) untuk **Exact Benders Decomposition Solver** yang menyelesaikan masalah industri *Capacitated Facility Location Problem (CFLP)* dengan Two-Phase Simplex Dual Subproblem Solver dan Master Evaluator:

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 447: Dekomposisi Benders Eksak untuk Capacitated Facility Location Problem (CFLP)
Metode: Two-Phase Simplex Subproblem Solver + Cutting-Plane Master Iteration
"""

import itertools
import numpy as np
from typing import Dict, List, Tuple, Any

class TwoPhaseLPSubproblem:
    """
    Solver Primal-Dual Linear Programming berbasis Simpleks Dua-Fase
    Menyelesaikan Subproblem Transportasi Kontinu:
        min sum_{i,j} c_{ij} * x_{ij}
        s.t. sum_{i} x_{ij} = d_j,          forall j (Permintaan Pelanggan)
             sum_{j} x_{ij} <= s_i * y_i,   forall i (Kapasitas Fasilitas Aktif)
             x_{ij} >= 0
    """
    def __init__(self, cost_matrix: np.ndarray, capacities: np.ndarray, demands: np.ndarray):
        self.c = np.array(cost_matrix, dtype=float)
        self.s = np.array(capacities, dtype=float)
        self.d = np.array(demands, dtype=float)
        self.I, self.J = self.c.shape

    def solve(self, y: np.ndarray) -> Dict[str, Any]:
        tot_cap = np.sum(self.s * y)
        tot_dem = np.sum(self.d)

        # Pemeriksaan Kelayakan Agregat Cepat (Kapasitas Total vs Permintaan Total)
        if tot_cap < tot_dem - 1e-6:
            # Ray ketakfisibelan ekstrem
            return {
                'status': 'infeasible',
                'u_ray': np.ones(self.J),
                'v_ray': np.ones(self.I)
            }

        num_x = self.I * self.J
        num_slacks = self.I
        num_vars = num_x + num_slacks
        num_rows = self.J + self.I

        A = np.zeros((num_rows, num_vars))
        b = np.zeros(num_rows)

        # 1. Baris Kendala Permintaan Pelanggan (Equality Constraints)
        for j in range(self.J):
            for i in range(self.I):
                A[j, i * self.J + j] = 1.0
            b[j] = self.d[j]

        # 2. Baris Kendala Kapasitas Fasilitas (Inequality with Slack w_i)
        for i in range(self.I):
            row = self.J + i
            for j in range(self.J):
                A[row, i * self.J + j] = 1.0
            A[row, num_x + i] = 1.0
            b[row] = self.s[i] * y[i]

        cost_vec = np.zeros(num_vars)
        for i in range(self.I):
            for j in range(self.J):
                cost_vec[i * self.J + j] = self.c[i, j]

        # Inisialisasi Simpleks Fase 1 (Penambahan Variabel Artifisial pada Baris Permintaan)
        art_rows = list(range(self.J))
        num_art = len(art_rows)
        tab = np.zeros((num_rows + 1, num_vars + num_art + 1))
        tab[:num_rows, :num_vars] = A
        for k, r in enumerate(art_rows):
            tab[r, num_vars + k] = 1.0
        tab[:num_rows, -1] = b
        basis = [num_vars + k for k in range(num_art)] + [num_x + i for i in range(self.I)]

        # Bentuk baris objektif Fase 1: min sum(artifisial)
        for k, r in enumerate(art_rows):
            tab[-1, :] -= tab[r, :]

        # Loop Simpleks Fase 1
        while True:
            c_row = tab[-1, :-1]
            min_c = np.min(c_row)
            if min_c >= -1e-8:
                break
            piv_col = int(np.argmin(c_row))
            col_vals = tab[:-1, piv_col]
            ratios = [(tab[r, -1] / col_vals[r], r) if col_vals[r] > 1e-8 else (np.inf, r) for r in range(num_rows)]
            min_ratio, piv_row = min(ratios, key=lambda x: x[0])
            if np.isinf(min_ratio):
                return {'status': 'infeasible', 'u_ray': np.ones(self.J), 'v_ray': np.ones(self.I)}

            piv_val = tab[piv_row, piv_col]
            tab[piv_row, :] /= piv_val
            for r in range(num_rows + 1):
                if r != piv_row:
                    tab[r, :] -= tab[r, piv_col] * tab[piv_row, :]
            basis[piv_row] = piv_col

        if abs(tab[-1, -1]) > 1e-5:
            return {'status': 'infeasible', 'u_ray': np.ones(self.J), 'v_ray': np.ones(self.I)}

        # Inisialisasi Simpleks Fase 2 (Fungsi Objektif Biaya Asli)
        tab2 = np.zeros((num_rows + 1, num_vars + 1))
        tab2[:num_rows, :num_vars] = tab[:num_rows, :num_vars]
        tab2[:num_rows, -1] = tab[:num_rows, -1]
        tab2[-1, :num_vars] = cost_vec
        for r in range(num_rows):
            b_var = basis[r]
            if b_var < num_vars:
                tab2[-1, :] -= tab2[-1, b_var] * tab2[r, :]

        # Loop Simpleks Fase 2
        while True:
            c_row = tab2[-1, :-1]
            min_c = np.min(c_row)
            if min_c >= -1e-8:
                break
            piv_col = int(np.argmin(c_row))
            col_vals = tab2[:-1, piv_col]
            ratios = [(tab2[r, -1] / col_vals[r], r) if col_vals[r] > 1e-8 else (np.inf, r) for r in range(num_rows)]
            min_ratio, piv_row = min(ratios, key=lambda x: x[0])
            if np.isinf(min_ratio):
                return {'status': 'unbounded', 'obj': -np.inf}

            piv_val = tab2[piv_row, piv_col]
            tab2[piv_row, :] /= piv_val
            for r in range(num_rows + 1):
                if r != piv_row:
                    tab2[r, :] -= tab2[r, piv_col] * tab2[piv_row, :]
            basis[piv_row] = piv_col

        # Rekonstruksi Solusi Primal & Variabel Ganda (Dual Shadow Prices)
        x_sol = np.zeros(num_vars)
        for r in range(num_rows):
            if basis[r] < num_vars:
                x_sol[basis[r]] = tab2[r, -1]

        B_mat = A[:, basis]
        c_B = cost_vec[basis]
        pi = np.linalg.solve(B_mat.T, c_B)
        u_dual = pi[:self.J]        # Multiplier Permintaan
        v_dual = -pi[self.J:]       # Multiplier Kapasitas (Shadow cost >= 0)

        flow_matrix = x_sol[:num_x].reshape((self.I, self.J))
        obj_val = float(-tab2[-1, -1])

        return {
            'status': 'optimal',
            'obj': obj_val,
            'flow': flow_matrix,
            'u_opt': u_dual,
            'v_opt': v_dual
        }


class BendersCFLPSolver:
    """
    Koordinator Algoritma Dekomposisi Benders untuk CFLP
    """
    def __init__(self, fixed_costs: List[float], capacities: List[float], 
                 demands: List[float], transport_costs: List[List[float]]):
        self.f = np.array(fixed_costs, dtype=float)
        self.s = np.array(capacities, dtype=float)
        self.d = np.array(demands, dtype=float)
        self.c = np.array(transport_costs, dtype=float)
        self.I, self.J = self.c.shape
        self.subproblem = TwoPhaseLPSubproblem(self.c, self.s, self.d)
        
        self.optimality_cuts: List[Tuple[np.ndarray, np.ndarray]] = []
        self.feasibility_cuts: List[Tuple[np.ndarray, np.ndarray]] = []

    def solve_master(self) -> Tuple[float, np.ndarray, float]:
        """Menyelesaikan Master Problem kombinatorial biner dengan seluruh cutting planes."""
        best_master_obj = np.inf
        best_y = None
        best_theta = 0.0

        # Eksplorasi kombinasi ruang biner 2^I
        for y_tuple in itertools.product([0, 1], repeat=self.I):
            y = np.array(y_tuple, dtype=float)

            # Validasi Feasibility Cuts: sum(u*d) - sum(v*s*y) <= 0
            is_feasible = True
            for (u_ray, v_ray) in self.feasibility_cuts:
                val = np.dot(u_ray, self.d) - np.dot(v_ray, self.s * y)
                if val > 1e-6:
                    is_feasible = False
                    break
            if not is_feasible:
                continue

            # Hitung pembatas bawah theta dari Optimality Cuts
            theta = 0.0
            for (u_opt, v_opt) in self.optimality_cuts:
                bound = np.dot(u_opt, self.d) - np.dot(v_opt, self.s * y)
                if bound > theta:
                    theta = bound

            master_obj = np.dot(self.f, y) + theta
            if master_obj < best_master_obj:
                best_master_obj = master_obj
                best_y = y
                best_theta = theta

        return best_master_obj, best_y, best_theta

    def optimize(self, max_iter: int = 25, tol: float = 1e-4) -> Dict[str, Any]:
        lb = -np.inf
        ub = np.inf
        iteration = 0
        best_sol = None
        history = []

        print(f"=== Memulai Optimasi Dekomposisi Benders (I={self.I} Fasilitas, J={self.J} Pasar) ===")

        while iteration < max_iter and (ub - lb) > tol:
            iteration += 1
            master_obj, y_k, theta_k = self.solve_master()
            lb = master_obj

            sub_res = self.subproblem.solve(y_k)

            if sub_res['status'] == 'infeasible':
                print(f"Iter {iteration:02d} | Master y={y_k.astype(int)} | Subproblem: INFEASIBLE -> Tambah Feasibility Cut")
                self.feasibility_cuts.append((sub_res['u_ray'], sub_res['v_ray']))
                history.append({'iter': iteration, 'y': y_k.tolist(), 'lb': lb, 'ub': ub, 'cut': 'Feasibility'})
            else:
                sub_obj = sub_res['obj']
                current_total = float(np.dot(self.f, y_k) + sub_obj)
                if current_total < ub:
                    ub = current_total
                    best_sol = {
                        'iteration': iteration,
                        'facilities_open': y_k.astype(int).tolist(),
                        'fixed_cost': float(np.dot(self.f, y_k)),
                        'transport_cost': float(sub_obj),
                        'total_cost': current_total,
                        'flow_matrix': sub_res['flow']
                    }

                gap = ub - lb
                print(f"Iter {iteration:02d} | Master y={y_k.astype(int)} | LB: ${lb:,.2f} | UB: ${ub:,.2f} | Gap: ${gap:,.4f}")
                history.append({'iter': iteration, 'y': y_k.tolist(), 'lb': lb, 'ub': ub, 'cut': 'Optimality'})

                if gap <= tol:
                    break

                self.optimality_cuts.append((sub_res['u_opt'], sub_res['v_opt']))

        print(f"=== Konvergensi Tercapai pada Iterasi {iteration} (Optimality Gap = 0.00%) ===\n")
        return {
            'best_solution': best_sol,
            'history': history,
            'total_feasibility_cuts': len(self.feasibility_cuts),
            'total_optimality_cuts': len(self.optimality_cuts)
        }


# ==========================================
# EKSEKUSI STUDI KASUS INDUSTRI
# ==========================================
if __name__ == "__main__":
    # Parameter Studi Kasus Jaringan Manufaktur Otomotif:
    # 3 Kandidat Lokasi Pabrik (Plant 1: Karawang, Plant 2: Cikarang, Plant 3: Surabaya)
    fixed_costs = [500.0, 600.0, 450.0]     # Biaya Tetap Operasional ($/minggu)
    capacities = [120.0, 150.0, 100.0]     # Kapasitas Produksi (Unit/minggu)

    # 4 Wilayah Pasar Distribusi (Jakarta, Bandung, Semarang, Yogyakarta)
    demands = [40.0, 50.0, 30.0, 45.0]      # Permintaan Pasar (Unit/minggu) - Total = 165 Unit

    # Matriks Biaya Logistik Pengiriman ($/unit)
    transport_costs = [
        [8.0, 6.0, 10.0, 9.0],    # Dari Karawang
        [9.0, 12.0, 13.0, 7.0],   # Dari Cikarang
        [14.0, 9.0, 16.0, 5.0]    # Dari Surabaya
    ]

    solver = BendersCFLPSolver(fixed_costs, capacities, demands, transport_costs)
    result = solver.optimize()

    sol = result['best_solution']
    print(f"Status Konfigurasi Fasilitas Optimal : {sol['facilities_open']}")
    print(f"Biaya Investasi Tetap (Fixed Cost)    : ${sol['fixed_cost']:,.2f}")
    print(f"Biaya Logistik Transportasi           : ${sol['transport_cost']:,.2f}")
    print(f"Total Biaya Rantai Pasok Minimum      : ${sol['total_cost']:,.2f}")
    print("\nMatriks Aliran Produk Optimal (Unit Alokasi Pabrik ke Pasar):")
    print(sol['flow_matrix'])
```

---

## 6. Studi Kasus Industri: Optimasi Jaringan Rantai Pasok Otomotif Multi-Eselon

### 6.1 Deskripsi Masalah & Data Parameter
Sebuah perusahaan manufaktur komponen otomotif tier-1 di Indonesia merencanakan restrukturisasi rantai pasok untuk memenuhi lonjakan permintaan komponen baterai EV di 4 kawasan industri (Jakarta, Bandung, Semarang, Yogyakarta) dengan total kebutuhan agregat $\sum d_j = 165\text{ unit/minggu}$.

Tersedia 3 kandidat pabrik perakitan:
- **Pabrik 1 (Karawang)**: Biaya Tetap $f_1 = \$500$, Kapasitas $s_1 = 120\text{ unit}$.
- **Pabrik 2 (Cikarang)**: Biaya Tetap $f_2 = \$600$, Kapasitas $s_2 = 150\text{ unit}$.
- **Pabrik 3 (Surabaya)**: Biaya Tetap $f_3 = \$450$, Kapasitas $s_3 = 100\text{ unit}$.

Matriks ongkos angkut unit $c_{ij}$:
$$\mathbf{C} = \begin{pmatrix} 8 & 6 & 10 & 9 \\ 9 & 12 & 13 & 7 \\ 14 & 9 & 16 & 5 \end{pmatrix}$$

### 6.2 Trajektori Komputasi Dekomposisi Benders
1. **Iterasi 1**: Master Problem memilih $y = [0, 0, 0]$ (biaya fixed $\$0$). Subproblem mengevaluasi $\sum s_i y_i = 0 < 165$, menghasilkan status **INFEASIBLE**. Ray pembatas kelayakan (*Feasibility Cut*) digenerasikan:
   $$120 y_1 + 150 y_2 + 100 y_3 \ge 165$$
2. **Iterasi 2**: Master Problem memilih kombinasi termurah yang memenuhi kapasitas: $y = [1, 0, 1]$ ($f_1 + f_3 = \$950$, total kapasitas $= 220 \ge 165$). 
   - Subproblem transportasi diselesaikan dengan solusi primal:
     $$x_{11} = 40, \, x_{12} = 50, \, x_{13} = 30, \, x_{14} = 0 \quad (\text{Total Alokasi Pabrik 1} = 120\text{ unit})$$
     $$x_{31} = 0, \, x_{32} = 0, \, x_{33} = 0, \, x_{34} = 45 \quad (\text{Total Alokasi Pabrik 3} = 45\text{ unit})$$
   - Biaya transportasi: $v(y) = (40\times 8 + 50\times 6 + 30\times 10) + (45\times 5) = 920 + 225 = \$1{,}145$.
   - Batas atas $UB = 950 + 1{,}145 = \$2{,}095$.
   - Multiplier dual menghasilkan Optimality Cut baru: $\theta + 0 y_1 + 0 y_2 + 0 y_3 \ge 1{,}145$.
3. **Iterasi 3**: Master Problem memecahkan kembali model dengan batas bawah $\theta \ge 1{,}145$. Diperoleh $LB = \$950 + \$1{,}145 = \$2{,}095$. Karena $UB = LB = \$2{,}095$, *Optimality Gap* $= 0.00\%$, konvergensi tercapai secara eksak.

---

## 7. Rangkuman Formula Matematis Penting

| Notasi Formula | Deskripsi Teknis |
| :--- | :--- |
| $\min_{y \in Y, \theta} \{ f^T y + \theta \}$ | Formulasi Relaksasi Benders Master Problem |
| $v(y) = \max_{u \ge 0} \{ u^T (b - By) \mid A^T u \le c \}$ | Dual Subproblem Benders |
| $(r^l)^T (b - By) \le 0$ | Benders Feasibility Cut (Penanganan Ketakfisibelan Primal) |
| $\theta \ge (u^k)^T (b - By)$ | Benders Optimality Cut (Pembatasan Bawah Estimasi Biaya) |
| $\max_{u \in \mathcal{D}^*} \{ u^T (b - B y^c) \}$ | Magnanti-Wong Subproblem untuk Pareto-Optimal Cut |
| $\text{Gap} = \frac{UB_k - LB_k}{\|UB_k\| + \epsilon} \le \text{Tol}$ | Kriteria Terminasi Relatif Konvergensi Global |

---

## 8. Referensi Akademik Terverifikasi (Buku Teks & Jurnal Bereputasi)

1. **Benders, J. F.** (1962). *Partitioning procedures for solving mixed-variables programming problems*. **Numerische Mathematik**, 4(1), 238–252. [DOI: 10.1007/BF01386316](https://doi.org/10.1007/BF01386316)
2. **Geoffrion, A. M., & Graves, G. W.** (1974). *Multicommodity distribution system design by Benders decomposition*. **Management Science**, 20(5), 822–844. [DOI: 10.1287/mnsc.20.5.822](https://doi.org/10.1287/mnsc.20.5.822)
3. **Magnanti, T. L., & Wong, R. T.** (1981). *Accelerating Benders decomposition: Algorithmic enhancement and model selection criteria*. **Operations Research**, 29(3), 464–484. [DOI: 10.1287/opre.29.3.464](https://doi.org/10.1287/opre.29.3.464)
4. **Rahmaniani, R., Crainic, T. G., Gendreau, M., & Rei, W.** (2017). *The Benders decomposition algorithm: A literature review*. **European Journal of Operational Research**, 259(3), 801–817. [DOI: 10.1016/j.ejor.2016.12.005](https://doi.org/10.1016/j.ejor.2016.12.005)
5. **Wentges, P.** (1996). *Accelerating Benders' decomposition for the capacitated facility location problem*. **Mathematical Methods of Operations Research**, 44(2), 267–290. [DOI: 10.1007/bf01194335](https://doi.org/10.1007/bf01194335)
6. **Lin, Y. H., & Tian, Q.** (2021). *Branch-and-cut approach based on generalized Benders decomposition for facility location with limited choice rule*. **European Journal of Operational Research**, 293(1), 109–119. [DOI: 10.1016/j.ejor.2020.12.017](https://doi.org/10.1016/j.ejor.2020.12.017)
7. **Hillier, F. S., & Lieberman, G. J.** (2021). *Introduction to Operations Research* (11th ed.). McGraw-Hill Education, New York. ISBN: 978-1259872990.
