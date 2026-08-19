# Modul Riset Ilmiah: Desain Eksperimen (Design of Experiments - DOE) & Metodologi Taguchi
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2017). *Design and Analysis of Experiments* (9th ed.). Wiley. ISBN: 978-1119113478. (Foundational Experimental Design Text).
- Taguchi, G., Chowdhury, S., & Wu, Y. (2005). *Taguchi's Quality Engineering Handbook*. Wiley. ISBN: 978-0471413349.
- Box, G. E. P., Hunter, J. S., & Hunter, W. G. (2005). *Statistics for Experimenters: Design, Innovation, and Discovery* (2nd ed.). Wiley.

---

## 1. Konsep Dasar Desain Eksperimen (DOE)
DOE adalah pendekatan statistik terstruktur untuk merencanakan, melaksanakan, dan menganalisis uji coba proses manufaktur guna mengidentifikasi faktor-faktor input ($X_1, X_2, \dots, X_k$) yang berpengaruh signifikan secara statistik terhadap respon output kualitas ($Y$), serta memodelkan interaksi antar faktor.

---

## 2. Desain Faktorial Penuh ($2^k$ Full Factorial Design)
Eksperimen dengan $k$ faktor di mana masing-masing faktor diuji pada 2 level: Rendah ($-1$) dan Tinggi ($+1$).
- **Jumlah Run Eksperimen:** $N = 2^k$ (atau $n \times 2^k$ dengan $n$ replikasi).
- **Model Regresi Orde Pertama:**
  $$Y = \beta_0 + \sum_{i=1}^k \beta_i X_i + \sum_{i < j} \beta_{ij} X_i X_j + \epsilon$$

### Analisis Varians (ANOVA - Analysis of Variance):
Memecah total variabilitas respon ($SS_{\text{Total}}$) menjadi variabilitas perlakuan faktor ($SS_{\text{Model}}$) dan variabilitas kesalahan acak / residual ($SS_{\text{Error}}$):
$$SS_{\text{Total}} = SS_A + SS_B + SS_{AB} + SS_{\text{Error}}$$
$$\text{Uji } F\text{-Hitung} = \frac{MS_{\text{Faktor}}}{MS_{\text{Error}}} = \frac{SS_{\text{Faktor}} / df_{\text{Faktor}}}{SS_{\text{Error}} / df_{\text{Error}}}$$
*Jika $p\text{-value} < \alpha$ ($0.05$), faktor tersebut berpengaruh signifikan terhadap kualitas produk.*

---

## 3. Metodologi Taguchi (Robust Parameter Design)
Pendekatan Genichi Taguchi untuk merancang produk yang kebal (*robust*) terhadap variasi faktor gangguan (*noise factors* seperti fluktuasi suhu lingkungan atau degradasi mesin) tanpa meningkatkan biaya manufaktur.

### A. Taguchi Loss Function:
Menyatakan bahwa kerugian finansial masyarakat ($L(y)$) terjadi seketika saat karakteristik kualitas menyimpang dari target nominal ($m$), bukan hanya ketika keluar batas toleransi:
$$L(y) = k(y - m)^2$$

### B. Signal-to-Noise Ratio ($S/N$ Ratio):
Metrik logaritmik untuk mengukur ketahanan kualitas:
1. **Nominal is Best (NIB - Misal: Dimensi Target Presisi):**
   $$S/N = 10 \log_{10} \left( \frac{\bar{y}^2}{s^2} \right)$$
2. **Smaller the Better (STB - Misal: Tingkat Cacat, Keausan, Emisi Gas):**
   $$S/N = -10 \log_{10} \left( \frac{1}{n} \sum_{i=1}^n y_i^2 \right)$$
3. **Larger the Better (LTB - Misal: Kekuatan Tarik Material, Umur Pakai):**
   $$S/N = -10 \log_{10} \left( \frac{1}{n} \sum_{i=1}^n \frac{1}{y_i^2} \right)$$
