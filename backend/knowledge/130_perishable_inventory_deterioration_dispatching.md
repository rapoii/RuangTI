# 130. Perishable Goods Inventory & Deterioration Models

## Konsep Dasar
Perishable inventory management menangani produk dengan umur simpan terbatas (*shelf life*) yang mengalami deteriorasi fisik, penurunan kualitas, atau kadaluarsa. Berbeda dengan model inventori klasik, model perishable harus memperhitungkan **lifetime distribution**, **FIFO/LIFO issuing policies**, dan **waste reduction** sebagai tujuan eksplisit. Aplikasi meliputi makanan segar, farmasi, darah, dan bunga potong.

## Formulasi Matematis

### Model Deteriorasi Eksponensial (Ghare-Schrader)
Tingkat inventori $I(t)$ berkurang karena demand $\lambda$ dan deteriorasi $\theta$:

$$
\frac{dI(t)}{dt} = -\lambda - \theta I(t), \quad 0 \leq t \leq T
$$

Solusi: $I(t) = \left(I_0 + \frac{\lambda}{\theta}\right)e^{-\theta t} - \frac{\lambda}{\theta}$

Total biaya per siklus:
$$
TC(Q) = \frac{A\lambda}{Q} + h \cdot \bar{I} + c_d \cdot D_{lost} + p \cdot W
$$

di mana $D_{lost}$ = jumlah unit rusak sebelum terjual, $W$ = waste disposal cost.

### Fixed Lifetime Model (Nahmias)
Produk memiliki lifetime tetap $L$. Unit yang tiba pada waktu $t$ akan kadaluarsa pada $t+L$. Expected outdating per siklus untuk order quantity $Q$:

$$
E[O] = \int_0^L F_D(x) \, dx - L + \frac{Q}{\lambda}
$$

di mana $F_D$ adalah CDF demand selama lead time + review period.

### Age-Dependent Deterioration Rate
$$
\theta(t) = \alpha e^{\beta t}
$$
Model ini menangkap percepatan kerusakan seiring bertambahnya usia produk (misal: buah-buahan).

## Kebijakan Issuing
- **FIFO (First-In-First-Out):** Minimalkan waste, optimal untuk perishables.
- **LIFO (Last-In-First-Out):** Jarang digunakan kecuali untuk alasan regulasi.
- **FEFO (First-Expired-First-Out):** Berdasarkan remaining shelf life, bukan arrival time.
- **Dynamic Issuing:** Memprioritaskan produk mendekati expiry dengan discount pricing.

## Optimasi Replenishment
Untuk $(r, Q)$ policy dengan fixed lifetime $L$:

$$
\min_{r, Q} \quad TC(r, Q) = \text{Holding} + \text{Ordering} + \text{Shortage} + \text{Outdating}
$$

Kondisi optimal melibatkan trade-off antara shortage cost dan outdating cost. Sering diselesaikan dengan simulation optimization atau approximation methods.

## Referensi Terverifikasi
- Nahmias, S. (2011). *Perishable Inventory Systems*. Springer.
- Bakker, M., Riezebos, J., & Teunter, R. H. (2023). Review of inventory models for deteriorating items since 2001. *European Journal of Operational Research*, 308(1), 1–20.
- Duong, L. N. K., Wood, L. C., & Wang, W. Y. (2024). A review and reflection on inventory management of perishable products in a single-vendor, multi-buyer supply chain. *International Journal of Production Economics*, 267, 109065.
- Zhang, Y., & Rajaram, K. (2023). Dynamic pricing and inventory control for perishable products with reference price effects. *Management Science*, 69(8), 4789–4808.

</content>