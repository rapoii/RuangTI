# 130. Perishable Goods Inventory & Deterioration Models

## Kerangka Konseptual
Perishable inventory management menangani produk dengan *shelf life* terbatas yang mengalami deteriorasi fisik, penurunan kualitas, atau kedaluwarsa. Tiga paradigma model: (1) **deteriorating inventory** — fraksi stok membusuk kontinu (Ghare-Schrader); (2) **fixed lifetime** — unit kedaluwarsa tepat pada usia $L$ (darah 35 hari, vaksin, makanan olahan); (3) **quality decay** — nilai jual menurun dengan usia tanpa hilang fisik (buah, bunga potong). Perbedaan fundamental dari model klasik EOQ: kebijakan issuing (**FIFO/FEFO/LIFO**) menjadi variabel keputusan eksplisit, waste/outdating masuk fungsi tujuan, dan struktur optimal sering tidak berbentuk siklus sederhana. Aplikasi mencakup rantai dingin pangan, farmasi (GDSP), bank darah, dan agro-industri.

## Formulasi Matematis
### Model Deteriorasi Eksponensial (Ghare-Schrader)
Tingkat inventori $I(t)$ berkurang oleh demand $\lambda$ dan deteriorasi proporsional $\theta I$:
$$\frac{dI(t)}{dt} = -\lambda - \theta I(t), \quad 0 \leq t \leq T$$
Solusi dengan kondisi awal $I(0) = Q$:
$$I(t) = \left(Q + \frac{\lambda}{\theta}\right)e^{-\theta t} - \frac{\lambda}{\theta}$$
Dari $I(T) = 0$ diperoleh hubungan order quantity–siklus:
$$Q = \frac{\lambda}{\theta}\left(e^{\theta T} - 1\right), \quad \text{serta } TC(T) = \frac{A}{T} + \frac{h\lambda}{\theta^2 T}\left(e^{\theta T} - \theta T - 1\right)$$
Minimisasi terhadap $T$ menghasilkan ekstensi EOQ perishable; saat $\theta \to 0$ kembali ke formula Wilson klasik.

### Fixed Lifetime Model (Nahmias)
Unit yang tiba pada waktu $t$ kedaluwarsa pada $t + L$. Expected outdating per siklus:
$$E[O] = \int_0^{L} F_D(x)\,dx - L + \frac{Q}{\lambda}$$
Struktur kebijakan optimal pada kasus umum bersifat kompleks; Nahmias membuktikan struktur myopic untuk kasus dua-usia ($L=2$).

### Age-Dependent Deterioration Rate
$$\theta(t) = \alpha e^{\beta t}$$
Menangkap percepatan kerusakan seiring usia (buah klimakterik). Untuk cold chain, parameter Arrhenius menghubungkan $\theta$ dengan temperatur penyimpanan:
$$\theta(T_{temp}) = A_0 \exp\left(-\frac{E_a}{R\, T_{temp}}\right)$$

## Kebijakan Issuing & Optimasi Replenishment
- **FIFO:** Optimal secara teoretis untuk meminimalkan outdating pada demand i.i.d.; bukti dominansi FIFO berlaku saat holding cost seragam antar usia — pelanggarannya membuka ruang kebijakan age-based issuing yang lebih murah.
- **FEFO:** Berbasis remaining shelf life — wajib farmasi; mendekati FIFO saat umur seragam.
- **Dynamic Issuing:** Diskon harga dinamis untuk unit menjelang expiry — integrasi dengan dynamic pricing. Harga markdown optimal: $p^*(u) = \arg\max_p\; p \cdot P(\text{terjual} \le u \mid p)$ dengan $u$ hari menuju kedaluwarsa.

Kebijakan $(r, Q)$ dengan lifetime tetap:
$$\min_{r,Q}\; TC(r,Q) = C_h(r,Q) + C_o(r,Q) + C_s(r,Q) + C_d(r,Q)$$
Trade-off inti: menaikkan $Q$ menurunkan frekuensi pesan tetapi menaikkan expected outdating; tidak ada solusi closed-form → simulation optimization atau approximation (two-moment fitting) digunakan.

## Aplikasi Industri
- **Bank Darah:** Kebijakan issuing crossmatch-release-backlog; target wastage < 2%.
- **Retail Pangan:** FEFO + markdown optimization berbasis tanggal kedaluwarsa.
- **Farmasi Distributor:** VMI dengan constraint GDSP dan batch traceability.
- **Cold Chain Ekspor:** Integrasi model Arrhenius dengan routing refrigerated container; koefisien $Q_{10}$ (percepatan deteriorasi per kenaikan 10°C) menjadi input kalibrasi parameter $\theta(t)$ pada simulasi shelf-life transit.

## Modul Terkait
- **[124] Dynamic Pricing ML** — markdown pricing untuk stok mendekati expiry.
- Modul EOQ & Lot Sizing klasik — batas $\theta \to 0$.
- Modul Cold Chain Logistics — aspek transportasi termal.

## Referensi Terverifikasi
- Nahmias, S. (2011). *Perishable Inventory Systems*. Springer.
- Bakker, M., Riezebos, J., & Teunter, R. H. (2023). Review of inventory models for deteriorating items since 2001. *European Journal of Operational Research*, 308(1), 1–20.
- Duong, L. N. K., Wood, L. C., & Wang, W. Y. (2024). A review and reflection on inventory management of perishable products in a single-vendor, multi-buyer supply chain. *International Journal of Production Economics*, 267, 109065.
- Zhang, Y., & Rajaram, K. (2023). Dynamic pricing and inventory control for perishable products with reference price effects. *Management Science*, 69(8), 4789–4808.
