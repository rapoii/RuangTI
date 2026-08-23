# Modul Riset Ilmiah: Desain Eksperimen (Design of Experiments - DOE) & Metodologi Taguchi
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2017). *Design and Analysis of Experiments* (9th ed.). Wiley. ISBN: 978-1119113478.
- Taguchi, G., Chowdhury, S., & Wu, Y. (2005). *Taguchi's Quality Engineering Handbook*. Wiley. ISBN: 978-0471413349.
- Box, G. E. P., Hunter, J. S., & Hunter, W. G. (2005). *Statistics for Experimenters: Design, Innovation, and Discovery* (2nd ed.). Wiley.
- Wu, C. F. J., & Hamada, M. S. (2021). *Experiments: Planning, Analysis, and Optimization* (3rd ed.). Wiley. ISBN: 978-1119099925.
- Antony, J. (2014). *Design of Experiments for Engineers and Scientists* (2nd ed.). Elsevier.

---

## 1. Konsep Dasar Desain Eksperimen (DOE)

DOE adalah pendekatan statistik terstruktur untuk merencanakan, melaksanakan, dan menganalisis uji coba proses guna mengidentifikasi faktor input ($X_1, X_2, \dots, X_k$) yang berpengaruh signifikan terhadap respon kualitas output ($Y$), memodelkan interaksi antar faktor, dan menemukan kondisi operasi optimal. Prinsip dasarnya tiga: **randomization** (menetralkan bias variabel pengganggu), **replication** (estimasi galat eksperimen), dan **blocking** (menyaring variasi yang diketahui namun tak diminati, misalnya shift/batch bahan baku).

## 2. Formulasi Matematis

### A. Desain Faktorial Penuh $2^k$
Eksperimen dengan $k$ faktor pada 2 level (Rendah $=-1$, Tinggi $=+1$): jumlah run $N = 2^k$ ($n \times 2^k$ dengan $n$ replikasi). Model orde pertama dengan interaksi:

$$
Y = \beta_0 + \sum_{i=1}^{k}\beta_i X_i + \sum_{i<j}\beta_{ij}X_iX_j + \epsilon
$$

Estimasi efek utama faktor $A$: $\text{Effect}_A = \bar{y}_{A^+} - \bar{y}_{A^-}$; efek setengah-normal plot / Pareto effect dipakai untuk skrining awal faktor aktif.

### B. Analisis Varians (ANOVA)
Total variabilitas respon dipecah menjadi kontribusi model dan residual:

$$
SS_T = \sum_i\sum_j (y_{ij}-\bar{y})^2 = SS_A + SS_B + SS_{AB} + \cdots + SS_E
$$

Uji signifikansi faktor membandingkan mean square faktor terhadap mean square error:

$$
F_0 = \frac{MS_{\text{Faktor}}}{MS_E} = \frac{SS_{\text{Faktor}}/df_{\text{Faktor}}}{SS_E/df_E}
$$

Jika $p$-value $< \alpha$ (umumnya $0.05$), faktor tersebut berpengaruh signifikan terhadap respon kualitas. Proporsi kontribusi diukur lewat persentase sum of squares: $\%\rho_A = SS_A/SS_T \times 100\%$.

### C. Metodologi Taguchi — Robust Parameter Design

**Loss Function Taguchi:** kerugian finansial masyarakat muncul begitu karakteristik kualitas menyimpang dari target nominal $m$:

$$
L(y) = k(y-m)^2, \qquad k = \frac{A}{\Delta^2}
$$

dengan $A$ = kerugian saat melewati batas toleransi $\Delta$. Rata-rata loss kuadratik: $E[L(y)] = k\left[\sigma_y^2 + (\mu_y - m)^2\right]$ — menunjukkan bahwa **mengurangi variasi ($\sigma_y^2$)** sama pentingnya dengan memusatkan mean pada target.

**Signal-to-Noise Ratio** sebagai metrik ketahanan terhadap noise factors:
1. Nominal-is-Best (dimensi presisi):
   $$S/N = 10\log_{10}\!\left(\frac{\bar{y}^2}{s^2}\right)$$
2. Smaller-the-Better (cacat, keausan, emisi):
   $$S/N = -10\log_{10}\!\left(\frac{1}{n}\sum_{i=1}^n y_i^2\right)$$
3. Larger-the-Better (kekuatan tarik, umur pakai):
   $$S/N = -10\log_{10}\!\left(\frac{1}{n}\sum_{i=1}^n \frac{1}{y_i^2}\right)$$

**Orthogonal Arrays (OA):** matriks desain standar Taguchi — $L_8(2^7)$ untuk maksimum 7 faktor 2 level dalam 8 run; $L_9(3^4)$ untuk 4 faktor 3 level dalam 9 run — subset fraksional yang menjaga keseimbangan pasangan level (ortogonalitas).

## 3. Metode Solusi / Prosedur Eksperimen

Prosedur dua-langkah robust design Taguchi:
1. **Pilih level kontrol faktor yang memaksimalkan $S/N$** (meminimalkan sensitivitas terhadap noise).
2. **Sesuaikan faktor adjustment** (yang memengaruhi mean tanpa mengubah variasi) agar mean tepat di target.

Alur analisis lengkap: skrining faktor → pemilihan OA & penugasan faktor/kolom interaksi (linear graph) → pelaksanaan run acak → analisis $S/N$ & ANOVA → prediksi respons optimal → **confirmation experiment** dengan interval prediksi:

$$
CI = \hat{y}_{opt} \pm t_{\alpha/2,\,df_E}\sqrt{\frac{MS_E}{n_f}}
$$

Jika rata-rata konfirmasi jatuh di dalam CI, model valid; jika gagal, indikasi interaksi tingkat tinggi yang ter-confounding — naikkan resolusi desain (resolusi IV/V) atau tambah run.

## 4. Aplikasi di Industrial Engineering

- **Optimasi Proses Manufaktur:** suhu/tekanan injeksi molding terhadap warpage; parameter las (arus, tegangan, kecepatan) terhadap kekuatan tarik; feed-speed-doc machining terhadap roughness $Ra$.
- **Robust Design Produk:** toleransi komponen dirancang kebal terhadap variasi bahan baku dan lingkungan tanpa menaikkan biaya (quality by design).
- **Screening Simulasi:** identifikasi faktor signifikan model DES sebelum optimasi metamodel.
- **Six Sigma Improve Phase:** DOE sebagai alat inti DMAIC untuk menemukan setting optimal $x$ pada $Y=f(x)$.
- **Formulasi & Proses Farmasi/Kimia:** mixture designs dan response surface lanjutan (Wu & Hamada, 2021).

## 5. Referensi Terverifikasi

1. Montgomery, D. C. (2017). *Design and Analysis of Experiments* (9th ed.). Wiley. ISBN: 978-1119113478.
2. Taguchi, G., Chowdhury, S., & Wu, Y. (2005). *Taguchi's Quality Engineering Handbook*. Wiley. ISBN: 978-0471413349.
3. Box, G. E. P., Hunter, J. S., & Hunter, W. G. (2005). *Statistics for Experimenters* (2nd ed.). Wiley.
4. Wu, C. F. J., & Hamada, M. S. (2021). *Experiments: Planning, Analysis, and Optimization* (3rd ed.). Wiley. ISBN: 978-1119099925.
5. Antony, J. (2014). *Design of Experiments for Engineers and Scientists* (2nd ed.). Elsevier.
