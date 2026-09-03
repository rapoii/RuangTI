# Modul Riset Ilmiah: Desain Eksperimen (DOE) & Response Surface Methodology (RSM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2017). *Design and Analysis of Experiments* (9th ed.). Wiley. (Foundational DOE).
- Azcarate, S. M., Teglia, C. M., & Chiappini, F. A. (2023). *Fundamentals of design of experiments and optimization: experimental designs in response surface methodology*. Springer.
- Chen, H. Y., & Chen, C. (2025). *A study of the response surface methodology model with regression analysis in three fields of engineering*. Applied System Innovation, MDPI. DOI: [10.3390/asi8040099](https://doi.org/10.3390/asi8040099).
- Aristizábal‐Alzate, C. E., & Castillejos‐López, E. (2025). *Integration of design of experiments, analysis of variance and response surface methodology... a minireview*. ChemistryEurope, Wiley.
- Thakur, R., Sahu, N. K., & Shukla, R. K. (2024). *Optimization of dry turning for improved machining of duplex stainless steel (DSS2205) using response surface methodology (RSM) and design of experiments (DOE)*. Sādhanā, Springer.

---

## 1. Design of Experiments (DOE)
DOE adalah pendekatan sistematis untuk memahami hubungan antara faktor-faktor input (variabel independen / $X$) dan respons output (variabel dependen / $Y$) dari sebuah proses. Berbeda dengan eksperimen *One-Factor-At-A-Time* (OFAT) yang mengubah satu variabel sementara yang lain dikunci, DOE memvariasikan beberapa faktor secara simultan untuk mendeteksi **Efek Interaksi**.

### Desain Faktorial Penuh ($2^k$ Design):
- Memeriksa $k$ faktor masing-masing pada 2 level (Rendah $-1$, Tinggi $+1$).
- Jumlah *run* eksperimen dasar adalah $2^k$.
- Model regresi orde pertama dengan interaksi:
  $$ y = \beta_0 + \sum_{i=1}^k \beta_i x_i + \sum_{i < j} \beta_{ij} x_i x_j + \epsilon $$

### Fractional Factorial Design ($2^{k-p}$):
Ketika jumlah faktor $k$ sangat besar, DOE fraksional (misal: Taguchi Orthogonal Arrays) digunakan untuk mengisolasi efek utama (*Main Effects*) dan interaksi tingkat rendah dengan jumlah eksperimen yang jauh lebih sedikit, mengorbankan efek interaksi tingkat tinggi yang di-*alias*-kan.

---

## 2. Response Surface Methodology (RSM)
Ketika model linear orde pertama dari DOE awal (Screening) menunjukkan kelengkungan (*curvature*) di dekat titik optimum (terdeteksi via signifikan-nya *Center Points*), eksperimen harus beralih ke RSM. 

RSM adalah sekumpulan teknik matematika dan statistik yang digunakan untuk pemodelan dan analisis masalah di mana respons yang diminati dipengaruhi oleh beberapa variabel, dengan tujuan utama mengoptimalkan respons ini (biasanya menggunakan **model polinomial orde kedua**).

### Model Orde Kedua (Quadratic Model):
$$ y = \beta_0 + \sum_{i=1}^k \beta_i x_i + \sum_{i=1}^k \beta_{ii} x_i^2 + \sum_{i < j} \beta_{ij} x_i x_j + \epsilon $$
Di mana $\beta_{ii}$ merepresentasikan efek kuadratik (lengkungan respons).

### Desain Eksperimen untuk RSM:
1. **Central Composite Design (CCD):**
   Desain eksperimen paling populer untuk fitting model orde kedua. Terdiri dari 3 bagian:
   - Titik Faktorial (Kotak): $2^k$ titik di $(\pm 1, \pm 1, \dots)$.
   - Titik Pusat (Center): $n_c$ titik di $(0, 0, \dots)$ untuk memperkirakan *pure error* dan kelengkungan.
   - Titik Bintang (Axial/Star): $2k$ titik di jarak $\pm \alpha$ dari pusat untuk memungkinkan estimasi efek kuadratik. Jika $\alpha = (2^k)^{1/4}$, desain disebut *Rotatable*.

2. **Box-Behnken Design (BBD):**
   Desain tiga level (Rendah, Tengah, Tinggi) yang lebih efisien (membutuhkan run lebih sedikit) daripada CCD, tetapi tidak memiliki titik ekstrem yang menggabungkan semua faktor pada level tertinggi/terendahnya.

### Analisis Hasil & Optimasi:
- **Analisis Varians (ANOVA):** Mengevaluasi signifikansi model ($P$-value $< 0.05$), signifikansi masing-masing faktor ($X_i, X_i^2, X_i X_j$), dan *Lack of Fit* (harus tidak signifikan / $P > 0.05$ agar model valid).
- **Contour & 3D Surface Plots:** Visualisasi topologi ruang solusi.
- **Desirability Function ($D$):** Metode optimasi multi-respons (Derringer & Suich). Setiap respons $y_i$ diubah ke skala keinginan $d_i \in [0, 1]$, lalu dioptimalkan:
  $$ D = (d_1 \times d_2 \times \dots \times d_n)^{1/n} $$

### Aplikasi Teknik Industri:
RSM banyak digunakan (seperti dalam studi Thakur et al., 2024) untuk mengoptimalkan parameter pemesinan (Kecepatan, *Feed Rate*, *Depth of Cut*) guna meminimalkan Kekasaran Permukaan ($R_a$) sekaligus memaksimalkan Material Removal Rate (MRR).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
