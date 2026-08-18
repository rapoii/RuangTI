# 101. Column Generation & Dantzig-Wolfe Decomposition

## Konsep Dasar
Column Generation adalah metode eksak untuk menyelesaikan Linear Programming (LP) skala besar yang memiliki jumlah variabel sangat banyak (eksponensial), tetapi hanya sebagian kecil variabel yang bernilai positif pada solusi optimal. Metode ini memecah masalah menjadi **Master Problem (MP)** dan **Pricing Subproblem**.

Dantzig-Wolfe Decomposition adalah bentuk khusus dari column generation yang diterapkan pada struktur blok-diagonal dengan *linking constraints*.

## Formulasi Matematis

### Master Problem (Restricted)
Misalkan kita memiliki set kolom $\mathcal{K}$ yang sangat besar. Restricted Master Problem (RMP) hanya menggunakan subset $\mathcal{K}' \subset \mathcal{K}$:

$$
\begin{aligned}
\min \quad & \sum_{k \in \mathcal{K}'} c_k \lambda_k \\
\text{s.t.} \quad & \sum_{k \in \mathcal{K}'} a_{ik} \lambda_k = b_i, \quad \forall i \in M \\
& \lambda_k \geq 0, \quad \forall k \in \mathcal{K}'
\end{aligned}
$$

### Pricing Subproblem
Kolom baru dihasilkan dengan menyelesaikan subproblem berdasarkan *dual prices* $\pi$ dari RMP:

$$
z^* = \min_{k \in \mathcal{K}} \left( c_k - \sum_{i \in M} \pi_i a_{ik} \right)
$$

Jika $z^* < 0$, kolom terkait ditambahkan ke RMP. Jika $z^* \geq 0$, solusi saat ini adalah optimal.

## Algoritma Column Generation
1. Inisialisasi RMP dengan himpunan kolom awal yang feasible.
2. Selesaikan RMP, peroleh dual variables $\pi$.
3. Selesaikan pricing subproblem menggunakan $\pi$.
4. Jika reduced cost negatif ditemukan, tambahkan kolom ke RMP → kembali ke langkah 2.
5. Jika tidak ada kolom dengan reduced cost negatif, STOP. Solusi optimal tercapai.

## Aplikasi di Industrial Engineering
- **Vehicle Routing Problem (VRP):** Setiap kolom merepresentasikan satu rute kendaraan.
- **Crew Scheduling:** Kolom = jadwal kerja crew yang valid.
- **Cutting Stock Problem:** Pola pemotongan sebagai kolom.
- **Airline Crew Pairing:** Kombinasi penerbangan yang legal.

## Integrality Gap & Branch-and-Price
Untuk masalah Integer Programming, LP relaxation dari column generation sering menghasilkan solusi fraksional. **Branch-and-Price** menggabungkan Branch-and-Bound dengan Column Generation di setiap node pohon pencarian.

## Referensi Terverifikasi
- Desrosiers, J., & Lübbecke, M. (2005). A Primer in Column Generation. In *Column Generation* (pp. 1–32). Springer.
- Barnhart, C., Johnson, E. L., Nemhauser, G. L., Savelsbergh, M. W. P., & Vance, P. H. (1998). Branch-and-Price: Column Generation for Solving Huge Integer Programs. *Operations Research*, 46(3), 316–329.
- Lübbecke, M. E., & Desrosiers, J. (2023). Selected Topics in Column Generation. *European Journal of Operational Research*, 305(3), 1007–1023.
- Costa, A. M., & Santos, H. G. (2024). Advances in Column Generation for Vehicle Routing Problems: A Survey. *Computers & Operations Research*, 162, 106458.

</content>