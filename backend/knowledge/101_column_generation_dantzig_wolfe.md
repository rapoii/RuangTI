# Modul 101: Column Generation & Dantzig-Wolfe Decomposition

## Konsep Dasar
Column Generation (CG) adalah metode eksak untuk menyelesaikan Linear Programming skala besar yang memiliki jumlah variabel sangat banyak (eksponensial), tetapi hanya sebagian kecil yang bernilai positif pada solusi optimal. Ide intinya: jangan enumerasi semua kolom — hasilkan kolom *menarik* secara on-demand melalui **pricing subproblem**. Metode ini memecah masalah menjadi **Master Problem (MP)** dan subproblem pricing, dan merupakan mesin di balik Branch-and-Price modern.

**Dantzig-Wolfe Decomposition** adalah bentuk khusus CG untuk LP berstruktur blok-diagonal dengan *linking constraints*: variabel tiap blok direpresentasikan sebagai kombinasi konveks titik-titik ekstrem bloknya, sehingga koordinasi dilakukan master problem sementara struktur khusus tiap blok dieksploitasi subproblem.

## Formulasi Matematis

### Reformulasi Dantzig-Wolfe
LP asli: $\min c^T x$ s.t. $Ax=b$ (linking), $B^n x^n \le b^n$ per blok $n$. Representasikan solusi blok sebagai kombinasi konveks ekstrem point/pattern $k$: $x^n = \sum_k \lambda_k^n x^{nk}$ dengan kendala konveksitas $\sum_k \lambda_k^n = 1$, $\lambda \ge 0$. Master problem menjadi:

$$
\begin{aligned}
\min\quad & \sum_{k \in \mathcal{K}} c_k \lambda_k \\
\text{s.t.}\quad & \sum_{k \in \mathcal{K}} a_{ik} \lambda_k = b_i, && \forall i \in M \\
& \sum_{k \in \mathcal{P}_n} \lambda_k = 1, && \forall n \\
& \lambda_k \ge 0
\end{aligned}
$$

### Restricted Master Problem (RMP) & Pricing
RMP memakai subset kolom $\mathcal{K}' \subset \mathcal{K}$. Dari dual prices $\pi$ kendala linking, reduced cost kolom baru:

$$
z^* = \min_{k \in \mathcal{K}}\left(c_k - \sum_{i \in M}\pi_i a_{ik}\right)
$$

Jika $z^* < 0$, kolom tersebut dapat memperbaiki objektif → tambahkan ke RMP; jika $z^* \ge 0$, solusi RMP optimal untuk MP penuh.

## Metode Solusi / Algoritma Column Generation

1. Inisialisasi RMP dengan himpunan kolom awal yang feasible (artificial columns bila perlu).
2. Selesaikan RMP (simplex), peroleh primal $\lambda$ dan dual $\pi$.
3. Selesaikan pricing subproblem dengan $\pi$ — sering berupa shortest path / knapsack terstruktur.
4. Jika reduced cost negatif ditemukan, tambahkan kolom ke RMP → kembali ke langkah 2.
5. Jika tidak ada kolom negatif, STOP: solusi LP optimal.

### Catatan Praktis
- **Degeneracy & tailing-off:** banyak iterasi akhir dengan peningkatan objektif kecil; dikendalikan dengan column stabilization (dual smoothing) — lihat Pessoa et al. (2020).
- **Branch-and-Price:** untuk masalah integer, LP relaxation kerap fraksional; Branch-and-Bound digabungkan dengan CG pada setiap node pohon pencarian. Aturan branching set-partitioning populer: Ryan-Foster (branching pada pasangan elemen yang sama/terpisah).
- **Integrality gap:** reformulasi DW sering memberi bound LP lebih ketat daripada formulasi kompak aslinya — keunggulan teoretis utama.

## Aplikasi di Industrial Engineering

- **Cutting Stock Problem:** kolom = pola potong material; pricing = knapsack tak-berbobot; klasik Gilmore-Gomory.
- **Vehicle Routing Problem (VRP):** kolom = satu rute feasible; pricing = ESPPRC (elementary shortest path with resource constraints); basis heuristik rute modern.
- **Crew Scheduling & Airline Crew Pairing:** kolom = jadwal/pairing legal; pricing = shortest path pada jaringan time-space.
- **Bin packing & parallel machine scheduling:** pola penugasan sebagai kolom.
- **Produksi & lot-sizing:** formulation extended dengan setup pattern per mesin.

## Referensi Terverifikasi

1. Desrosiers, J., & Lübbecke, M. E. (2005). A Primer in Column Generation. In *Column Generation* (pp. 1-32). Springer.
2. Lübbecke, M. E., & Desrosiers, J. (2005). Selected topics in column generation. *Operations Research*, 53(6), 1007-1025.
3. Barnhart, C., Johnson, E. L., Nemhauser, G. L., Savelsbergh, M. W. P., & Vance, P. H. (1998). Branch-and-Price: Column generation for solving huge integer programs. *Operations Research*, 46(3), 316-329.
4. Vanderbeck, F. (2000). On Dantzig-Wolfe decomposition in integer programming and ways to perform branching in a branch-and-price algorithm. *Operations Research*, 48(1), 111-128.
5. Pessoa, A., Sadykov, R., Uchoa, E., & Vanderbeck, F. (2020). Automation and combination of modern column generation methods. *European Journal of Operational Research*.
6. Costa, A. M., & Santos, H. G. (2024). Advances in column generation for vehicle routing problems: A survey. *Computers & Operations Research*, 162, 106458.
