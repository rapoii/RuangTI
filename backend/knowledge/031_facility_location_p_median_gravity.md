# Modul Riset Ilmiah: Penentuan Lokasi Fasilitas (Facility Location) & Desain Jaringan Rantai Pasok
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Daskin, M. S. (2013). *Network and Discrete Location: Models, Algorithms, and Applications* (2nd ed.). Wiley. ISBN: 978-0470905364. (Foundational Location Theory Text).
- Sadeghi, A. H., Sun, Z., Sahebi-Fakhrabad, A., dkk. (2023). *A mixed-integer linear formulation for a dynamic modified stochastic p-median problem in a competitive supply chain network design*. Logistics (MDPI), 7(1), 14. DOI: [10.3390/logistics7010014](https://doi.org/10.3390/logistics7010014).
- Musa, A. I. (2025). *Optimal location selection for a new processing plant using supply chain and distribution network analysis*. Journal Industrial Servicess, 10(2).
- Ivanov, D., Tsipoulanidis, A., & Schönberger, J. (2025). *Facility location planning and network design*. Global Supply Chain and Operations Management, Springer.

---

## 1. Konsep Penentuan Lokasi Fasilitas Pabrik & Distribusi
Penentuan lokasi fasilitas (*Facility Location Problem - FLP*) adalah keputusan investasi strategis jangka panjang yang menentukan koordinat geografis pabrik baru, gudang pusat (*Central Distribution Center - CDC*), atau depo distribusi untuk meminimalkan total biaya transportasi, operasional fasilitas, dan biaya pajak/lahan, serta memaksimalkan tingkat layanan konsumen.

---

## 2. Metode Titik Berat (Center of Gravity Method)
Metode kuantitatif kontinu untuk menentukan satu lokasi fasilitas tunggal yang meminimalkan total ongkos pemindahan material berdasarkan volume tonase dan jarak koordinat Euclidean:

### Formulasi Matematis Center of Gravity:
$$X^* = \frac{\sum_{i=1}^n X_i \times W_i \times R_i}{\sum_{i=1}^n W_i \times R_i} \qquad Y^* = \frac{\sum_{i=1}^n Y_i \times W_i \times R_i}{\sum_{i=1}^n W_i \times R_i}$$
- $(X_i, Y_i) =$ Koordinat lokasi sumber pasokan bahan baku atau pasar konsumen ke-$i$.
- $W_i =$ Volume beban / tonase material yang dipindahkan dari/ke lokasi ke-$i$.
- $R_i =$ Tarif ongkos angkut transportasi per kilometer-ton dari/ke lokasi ke-$i$.

---

## 3. Model $P\text{-Median Problem}$ (Hakimi Standard)
Menentukan lokasi $p$ buah fasilitas di antara sekumpulan kandidat simpul jaringan untuk melayani seluruh permintaan simpul konsumen dengan meminimalkan total jarak tertimbang:

### Formulasi Integer Linear Programming (ILP):
$$\min Z = \sum_{i=1}^n \sum_{j=1}^m w_i d_{ij} x_{ij}$$
**Kendala:**
1. Setiap konsumen $i$ dilayani tepat oleh satu fasilitas $j$: $\sum_{j=1}^m x_{ij} = 1, \quad \forall i$
2. Konsumen hanya bisa dilayani oleh fasilitas yang dibuka ($y_j = 1$): $x_{ij} \le y_j, \quad \forall i, j$
3. Tepat $p$ fasilitas yang dibangun: $\sum_{j=1}^m y_j = p$
4. Variabel biner: $x_{ij}, y_j \in \{0, 1\}$.
