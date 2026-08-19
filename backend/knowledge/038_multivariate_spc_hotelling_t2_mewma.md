# Modul Riset Ilmiah: Pengendalian Kualitas Multivariat (Multivariate SPC - Hotelling's T² & MEWMA)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley. ISBN: 978-1118146811.
- Hotelling, H. (1947). *Multivariate quality control, illustrated by the air testing of sample bombsights*. Techniques of Statistical Analysis, McGraw-Hill. (Foundational Creator).
- Lowry, C. A., Woodall, W. H., Champ, C. W., & Rigdon, S. E. (1992). *A multivariate exponentially weighted moving average control chart*. Technometrics, 34(1), 46-53. (MEWMA Benchmark).
- Jafari, M., Shahbazi, S., & Karbasian, M. (2025). *A Novel Approach to Quality Control in Multivariate Manufacturing Processes Based on Principal Component Analysis*. Research in Production and Operations Management.
- Saha, S., Khoo, M. B. C., Chatterjee, K., dkk. (2026). *Multivariate triple sampling Hotelling's T2 control chart*. Quality Technology & Quantitative Management, Taylor & Francis. DOI: [10.1080/16843703.2025.2474759](https://doi.org/10.1080/16843703.2025.2474759).

---

## 1. Konsep Multivariate Statistical Process Control (MSPC)
Dalam manufaktur modern berpresisi tinggi (semikonduktor, otomotif, kimia), kualitas produk ditentukan oleh beberapa variabel terukur ($p > 1$) yang **saling berkorelasi** (misal: panjang, lebar, dan ketebalan komponen). Menggunakan diagram kendali univariat ($\bar{X}-R$) secara terpisah untuk setiap variabel akan menyebabkan **inflasi kesalahan Tipe I ($\alpha_{\text{overall}} = 1 - (1-\alpha)^p \gg 0.05$)** dan gagal mendeteksi pergeseran korelasi geometris.

---

## 2. Diagram Kendali Hotelling's $T^2$
Statistik jarak tergeneralisasi Mahalanobis untuk memonitor vektor rata-rata proses $\mathbf{X} = [X_1, X_2, \dots, X_p]^T$.

### Formulasi Statistik $T^2$:
1. **Untuk Sampel Subgrup Berukuran $n$ (Vektor Rata-rata $\bar{\mathbf{X}}$):**
   $$T^2 = n (\bar{\mathbf{X}} - \bar{\bar{\mathbf{X}}})^T \mathbf{S}^{-1} (\bar{\mathbf{X}} - \bar{\bar{\mathbf{X}}})$$
   - $\bar{\bar{\mathbf{X}}} = [\bar{\bar{X}}_1, \dots, \bar{\bar{X}}_p]^T =$ Vektor rata-rata sampel keseluruhan.
   - $\mathbf{S} = \frac{1}{m(n-1)} \sum_{i=1}^m \sum_{j=1}^n (\mathbf{X}_{ij} - \bar{\mathbf{X}}_i)(\mathbf{X}_{ij} - \bar{\mathbf{X}}_i)^T =$ Matriks kovarians sampel gabungan ($p \times p$).

### Batas Kendali Atas (Upper Control Limit - UCL):
- **Fase I (Penetapan Kestabilan Historis):**
  $$\text{UCL} = \frac{p(m-1)(n-1)}{mn - m - p + 1} F_{\alpha, p, mn - m - p + 1} \qquad \text{LCL} = 0$$
- **Fase II (Monitoring Produksi Baru Berjalan):**
  $$\text{UCL} = \frac{p(m+1)(n-1)}{mn - m - p + 1} F_{\alpha, p, mn - m - p + 1}$$

---

## 3. Multivariate Exponentially Weighted Moving Average (MEWMA)
Diagram $T^2$ efektif untuk mendeteksi pergeseran besar, sedangkan MEWMA (Lowry et al., 1992) jauh lebih sensitif untuk mendeteksi **pergeseran rata-rata proses multivariat yang kecil hingga moderat**:

### Vektor Pembobotan MEWMA ($\mathbf{Z}_k$):
$$\mathbf{Z}_k = \mathbf{\Lambda} \mathbf{X}_k + (\mathbf{I} - \mathbf{\Lambda}) \mathbf{Z}_{k-1}$$
- $\mathbf{\Lambda} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_p)$ di mana $0 < \lambda \le 1$.
- Statistik MEWMA:
  $$T_k^2 = \mathbf{Z}_k^T \mathbf{\Sigma}_{\mathbf{Z}_k}^{-1} \mathbf{Z}_k$$
  *(Proses out-of-control jika $T_k^2 > H$).*
