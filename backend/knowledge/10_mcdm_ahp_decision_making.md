# Modul Riset Ilmiah: Multi-Criteria Decision Making (MCDM) & Analytical Hierarchy Process (AHP)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Saaty, T. L. (1980). *The Analytic Hierarchy Process: Planning, Priority Setting, Resource Allocation*. McGraw-Hill. ISBN: 978-0070543713.
- Saaty, T. L. (1990). *How to make a decision: the analytic hierarchy process*. European Journal of Operational Research, 48(1), 9-26. DOI: [10.1016/0377-2217(90)90057-I](https://doi.org/10.1016/0377-2217(90)90057-I).
- Triantaphyllou, E. (2000). *Multi-criteria decision making methods: a comparative study*. Springer Science & Business Media. DOI: [10.1007/978-1-4757-3157-6](https://doi.org/10.1007/978-1-4757-3157-6).

---

## 1. Konsep Analytical Hierarchy Process (AHP)
AHP yang dikembangkan oleh Thomas L. Saaty adalah metodologi pengambilan keputusan multikriteria komprehensif yang menstrukturkan masalah kompleks ke dalam bentuk hierarki: **Tujuan (*Goal*) $\rightarrow$ Kriteria $\rightarrow$ Sub-Kriteria $\rightarrow$ Alternatif Keputusan**.

### Skala Perbandingan Berpasangan Fundamental Saaty (1–9):
| Nilai Intensitas | Definisi Kepentingan Relatif | Penjelasan / Makna |
| :---: | :--- | :--- |
| **1** | *Equal Importance* | Kedua elemen memiliki pengaruh yang sama besar |
| **3** | *Moderate Importance* | Elemen yang satu sedikit lebih penting daripada elemen lainnya |
| **5** | *Strong Importance* | Elemen yang satu sangat penting/esensial dibanding elemen lainnya |
| **7** | *Very Strong Importance* | Elemen yang satu terbukti sangat dominan secara signifikan |
| **9** | *Extreme Importance* | Mutlak jauh lebih penting (tingkat keyakinan tertinggi) |
| **2, 4, 6, 8** | *Intermediate Values* | Nilai kompromi di antara dua pertimbangan berdekatan |
| **Resiprokal ($1/a_{ij}$)** | *Inverse Comparison* | Jika elemen $i$ bernilai $a_{ij}$ dibanding $j$, maka elemen $j$ bernilai $1/a_{ij}$ dibanding $i$ |

---

## 2. Matriks Perbandingan Berpasangan & Penentuan Bobot Prioritas

### A. Pembentukan Matriks $A$ ($n \times n$):
$$A = \begin{bmatrix} 
1 & a_{12} & \dots & a_{1n} \\
1/a_{12} & 1 & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
1/a_{1n} & 1/a_{2n} & \dots & 1 
\end{bmatrix}$$

### B. Normalisasi & Perhitungan Eigenvector (Vektor Prioritas $w$):
1. Jumlahkan elemen di setiap kolom $j$: $S_j = \sum_{i=1}^{n} a_{ij}$
2. Bagi setiap sel dengan total kolomnya: $r_{ij} = \frac{a_{ij}}{S_j}$
3. Hitung rata-rata baris untuk memperoleh bobot prioritas $w_i$:
   $$w_i = \frac{\sum_{j=1}^{n} r_{ij}}{n}$$
   *(Dimana $\sum_{i=1}^{n} w_i = 1.00$)*

---

## 3. Uji Konsistensi Logis (Consistency Ratio - $\text{CR}$)
Pengambil keputusan manusia rentan terhadap inkonsistensi pertimbangan (misal: $A > B$, $B > C$, namun $C > A$). AHP menyediakan metrik matematis untuk mengukur deviasi konsistensi tersebut.

### Tahapan Perhitungan Consistency Ratio:
1. **Hitung Nilai Eigen Maksimum ($\lambda_{\max}$):**
   Kalikan matriks awal $A$ dengan vektor bobot $w$, lalu bagi hasil perkalian dengan elemen $w_i$ masing-masing:
   $$\lambda_{\max} = \frac{1}{n} \sum_{i=1}^{n} \frac{(A \times w)_i}{w_i}$$

2. **Hitung Consistency Index ($\text{CI}$):**
   $$\text{CI} = \frac{\lambda_{\max} - n}{n - 1}$$

3. **Hitung Consistency Ratio ($\text{CR}$):**
   $$\text{CR} = \frac{\text{CI}}{\text{RI}}$$

### Tabel Standar Random Consistency Index ($\text{RI}$ Saaty):
| Ordo Matriks ($n$) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Nilai $\text{RI}$** | 0.00 | 0.00 | **0.58** | **0.90** | **1.12** | **1.24** | **1.32** | **1.41** | **1.45** | **1.49** |

### Kriteria Kelayakan Konsistensi:
- **$\text{CR} \le 0.10$ ($10\%$)**: **Pertimbangan Dinyatakan Konsisten & Valid** — keputusan dapat diterima.
- **$\text{CR} > 0.10$**: **Inkonsisten** — pengambil keputusan **wajib meninjau dan merevisi kembali** perbandingan berpasangannya.
