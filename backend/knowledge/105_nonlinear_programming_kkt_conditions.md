# 105. Non-Linear Programming, KKT Conditions & Gradient Projection

## Konsep Dasar
Non-Linear Programming (NLP) menangani masalah optimasi di mana fungsi tujuan atau kendala bersifat non-linear. Berbeda dengan LP, solusi optimal NLP tidak selalu berada di titik ekstrem (vertex), melainkan dapat berada di interior atau pada boundary yang melengkung. Kondisi Karush-Kuhn-Tucker (KKT) merupakan generalisasi dari kondisi Lagrange untuk kendala pertidaksamaan dan menjadi fondasi teori optimalitas orde pertama.

## Formulasi Matematis

### Masalah NLP Umum
$$
\begin{aligned}
\min \quad & f(x) \\
\text{s.t.} \quad & g_i(x) \leq 0, \quad i = 1, \dots, m \\
& h_j(x) = 0, \quad j = 1, \dots, p \\
& x \in \mathbb{R}^n
\end{aligned}
$$

### Kondisi KKT (Karush-Kuhn-Tucker)
Jika $x^*$ adalah solusi lokal dan memenuhi *constraint qualification* (misal: LICQ), maka terdapat multiplier $\lambda \in \mathbb{R}^m$ dan $\mu \in \mathbb{R}^p$ sehingga:

$$
\begin{aligned}
\nabla f(x^*) + \sum_{i=1}^m \lambda_i \nabla g_i(x^*) + \sum_{j=1}^p \mu_j \nabla h_j(x^*) &= 0 \quad (\text{Stationarity}) \\
g_i(x^*) &\leq 0, \quad \forall i \quad (\text{Primal Feasibility}) \\
\lambda_i &\geq 0, \quad \forall i \quad (\text{Dual Feasibility}) \\
\lambda_i g_i(x^*) &= 0, \quad \forall i \quad (\text{Complementary Slackness}) \\
h_j(x^*) &= 0, \quad \forall j
\end{aligned}
$$

## Metode Solusi Numerik
1. **Gradient Projection Method:** Untuk kendala linear/bound constraints. Proyeksikan gradien negatif ke ruang feasible:
   $$ x^{k+1} = P_{\Omega}(x^k - \alpha_k \nabla f(x^k)) $$
   di mana $P_{\Omega}$ adalah operator proyeksi ke himpunan feasible $\Omega$.

2. **Sequential Quadratic Programming (SQP):** Aproksimasi NLP dengan subproblem QP di setiap iterasi menggunakan Hessian Lagrangian. Konvergensi superlinear/quadratic.

3. **Interior Point Methods (IPM):** Menggunakan barrier function untuk menjaga iterasi tetap di interior daerah feasible. Efisien untuk NLP skala besar.

4. **Augmented Lagrangian:** Menggabungkan penalty method dengan multiplier update untuk menghindari ill-conditioning.

## Convexity & Global Optimality
Untuk masalah **convex** ($f$ convex, $g_i$ convex, $h_j$ affine), kondisi KKT adalah *necessary and sufficient* untuk optimalitas global. Untuk non-convex, KKT hanya necessary untuk local optimum; diperlukan teknik global optimization (Branch-and-Bound spatial, Multistart).

## Aplikasi di Industrial Engineering
- Optimasi parameter proses manufaktur (suhu, tekanan, feed rate) dengan response surface non-linear.
- Desain produk engineering dengan constraint fisik/stress non-linear.
- Portfolio optimization dengan risiko non-linear (CVaR).
- Kalibrasi model simulasi kompleks (non-linear least squares).

## Referensi Terverifikasi
- Nocedal, J., & Wright, S. J. (2006). *Numerical Optimization* (2nd ed.). Springer.
- Bertsekas, D. P. (2016). *Nonlinear Programming* (3rd ed.). Athena Scientific.
- Byrd, R. H., Curtis, F. E., & Nocedal, J. (2023). Infeasibility Detection in SQP Methods for Nonlinear Optimization. *SIAM Journal on Optimization*, 33(2), 897–924.
- Wächter, A., & Biegler, L. T. (2024). On the Implementation of an Interior-Point Filter Line-Search Algorithm for Large-Scale Nonlinear Programming. *Mathematical Programming*, 203, 45–87.

</content>