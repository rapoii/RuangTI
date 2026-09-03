# Modul Riset Ilmiah: Optimasi Persediaan Multi-Echelon (MEIO) & Desain Jaringan Rantai Pasok Stokastik
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Sherbrooke, C. C. (2004). *Optimal Inventory Modeling of Systems: Multi-Echelon Techniques*. Springer. ISBN: 978-1402075353. (Foundational MEIO).
- Sun, T., Huang, Z., Wu, D., dkk. (2024). *A simulation-optimization approach for inventory management in a multi-echelon supply chain network*. IEEE Conference on Industrial Engineering.
- Vicente, J. J., & Relvas, S. (2025). *Optimizing inventory planning in multi-echelon supply chains under uncertainty: a decision-making approach using review policies*. International Journal of Systems Science. DOI: [10.1080/17509653.2025.2483523](https://doi.org/10.1080/17509653.2025.2483523).
- Edirisinghe, G. S., & Almutairi, T. (2023). *Multi-echelon inventory optimization for practitioners: a predictive global sensitivity analysis approach*. Operations Research Forum, Springer. DOI: [10.1007/s43069-023-00222-7](https://doi.org/10.1007/s43069-023-00222-7).
- Abdi, F., Farughi, H., & Sadeghi, H. (2023). *Location-inventory-reliability optimisation problem in a multi-objective multi-period three-level supply chain network with stochastic demand*. European Journal of Industrial Engineering.

---

## 1. Konsep Dasar Multi-Echelon Inventory Optimization (MEIO)
Berbeda dengan model persediaan tunggal (single-echelon EOQ/ROP) yang mengoptimalkan setiap node secara independen, **MEIO** mengoptimalkan stok di seluruh jaringan rantai pasok secara simultan untuk meminimalkan total biaya sistem sambil mempertahankan target service level.

### Masalah Dekoupling & Efek Bullwhip
Dalam jaringan multi-tingkat, keputusan replenishment di tingkat hulu (pabrik/supplier) sangat bergantung pada variabilitas permintaan dari tingkat hilir (distributor/retailer). Tanpa koordinasi, terjadi amplifikasi varians (Bullwhip Effect). MEIO memecahkan ini dengan menempatkan **Safety Stock Decoupling Points** secara strategis.

## 2. Model Matematis & Formulasi Kunci

### Guaranteed Service Model (GSM) - Simpson / Graves & Willems
Model deterministik yang mengasumsikan batas waktu pelayanan (service time) yang dijamin antar node.
$$S_j = \max(SI_j + T_j - s_j, 0)$$
Di mana:
- $S_j$: Outbound service time node $j$
- $SI_j$: Inbound service time node $j$
- $T_j$: Processing/lead time internal node $j$
- $s_j$: Safety stock coverage time (waktu perlindungan stok keamanan)

### Stochastic Service Model (SSM) - Sherbrooke / METRIC
Menggunakan pendekatan probabilistik berbasis antrian untuk menghitung backorder yang tertunda.
$$E[BO(S)] = \sum_{x=S+1}^{\infty} (x-S) P(X=x)$$
Untuk distribusi Poisson (permintaan spare parts):
$$P(X=x) = \frac{e^{-\lambda L} (\lambda L)^x}{x!}$$

### Fungsi Tujuan Optimasi Jaringan Stokastik
$$\min Z = \sum_{i \in N} \left( h_i \cdot I_i + p_i \cdot B_i + c_i \cdot Q_i \right) + \sum_{(i,j) \in A} t_{ij} \cdot Y_{ij}$$
Kendala Service Level:
$$P(\text{Stockout}_i) \le 1 - \alpha_i \quad \forall i \in N$$

## 3. Metodologi Penyelesaian Modern (2023–2026)
1. **Simulation-Optimization**: Menggabungkan Discrete Event Simulation (DES) dengan algoritma metaheuristik (GA/PSO) untuk mengevaluasi kinerja stokastik tanpa asumsi distribusi normal yang kaku (Sun et al., 2024).
2. **Predictive Global Sensitivity Analysis**: Menggunakan Machine Learning untuk mengidentifikasi parameter mana yang paling sensitif terhadap total biaya persediaan, memungkinkan fokus optimasi pada node kritis saja (Edirisinghe & Almutairi, 2023).
3. **Robust & Distributionally Robust Optimization**: Melindungi solusi dari ambiguitas distribusi permintaan ketika data historis terbatas (Jabari, 2025).

## 4. Implikasi Praktis Teknik Industri
- **Strategic Safety Stock Placement**: Menentukan di mana harus menaruh buffer (Make-to-Stock vs Make-to-Order boundary).
- **Risk Pooling**: Mengkonsolidasikan stok di gudang pusat untuk mengurangi total safety stock karena efek diversifikasi risiko ($\sigma_{\text{agg}} < \sum \sigma_i$).
- **Postponement Strategy**: Menunda diferensiasi produk hingga tahap terakhir dalam rantai pasok untuk meningkatkan fleksibilitas respons permintaan.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
