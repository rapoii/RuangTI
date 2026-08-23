# Modul Komprehensif: Statistical Quality Control, SPC, & Six Sigma
**Sumber Referensi:** *Introduction to Statistical Quality Control* (Douglas C. Montgomery), *Six Sigma Handbook* (Thomas Pyzdek & Paul Keller), *Juran's Quality Handbook* (Joseph M. Juran).

---

## 1. Statistical Process Control (SPC) & Teori Variasi
Proses manufaktur mengalami dua jenis variasi:
1. **Common Causes (Penyebab Umum)**: Variasi inheren acak yang selalu ada dalam sistem stabil.
2. **Special Causes (Penyebab Khusus)**: Gangguan luar (keausan pahat mendadak, operator tidak terlatih, batch material cacat) yang membuat proses keluar dari kendali statistik (*out of control*).

---

## 2. Peta Kendali Variabel ($\bar{X}-R$ dan $\bar{X}-S$)

### A. Peta Kendali $\bar{X}-R$ (Subgrup $n \le 10$, umumnya $n = 5$):
- **Garis Tengah (Center Line):**
  $$\bar{\bar{X}} = \frac{\sum_{i=1}^{m} \bar{X}_i}{m}, \quad \bar{R} = \frac{\sum_{i=1}^{m} R_i}{m}$$
- **Batas Kendali Peta $R$ (Range Chart):**
  $$\text{UCL}_R = D_4 \times \bar{R}, \quad \text{CL}_R = \bar{R}, \quad \text{LCL}_R = D_3 \times \bar{R}$$
  *(Jika $n \le 6$, maka $D_3 = 0$ dan $\text{LCL}_R = 0$)*
- **Batas Kendali Peta $\bar{X}$ (Mean Chart):**
  $$\text{UCL}_{\bar{X}} = \bar{\bar{X}} + A_2 \times \bar{R}, \quad \text{CL}_{\bar{X}} = \bar{\bar{X}}, \quad \text{LCL}_{\bar{X}} = \bar{\bar{X}} - A_2 \times \bar{R}$$

### Tabel Faktor Konstanta Peta Kendali Variabel (Montgomery Standard):
| Ukuran Sampel ($n$) | $A_2$ | $A_3$ | $d_2$ | $D_3$ | $D_4$ | $B_3$ | $B_4$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **2** | 1.880 | 2.659 | 1.128 | 0.000 | 3.267 | 0.000 | 3.267 |
| **3** | 1.023 | 1.954 | 1.693 | 0.000 | 2.574 | 0.000 | 2.568 |
| **4** | 0.729 | 1.628 | 2.059 | 0.000 | 2.282 | 0.000 | 2.266 |
| **5** | **0.577** | **1.427** | **2.326** | **0.000** | **2.114** | **0.000** | **2.089** |
| **6** | 0.483 | 1.287 | 2.534 | 0.000 | 2.004 | 0.030 | 1.970 |
| **7** | 0.419 | 1.182 | 2.704 | 0.076 | 1.924 | 0.118 | 1.882 |
| **8** | 0.373 | 1.099 | 2.847 | 0.136 | 1.864 | 0.185 | 1.815 |
| **9** | 0.337 | 1.032 | 2.970 | 0.184 | 1.816 | 0.239 | 1.761 |
| **10** | 0.308 | 0.975 | 3.078 | 0.223 | 1.777 | 0.284 | 1.716 |

---

## 3. Peta Kendali Atribut: P-Chart, NP-Chart, C-Chart, U-Chart ($p, np, c, u$)
Digunakan untuk data diskrit (cacat / non-conforming). *P-chart* (fraction nonconforming chart) adalah peta kendali atribut paling umum untuk proporsi unit cacat; *np-chart* untuk jumlah cacatan sampel konstan; *c-chart* dan *u-chart* untuk jumlah cacat per unit:
- **Peta $p$ (Proporsi Cacat):**
  $$\bar{p} = \frac{\sum d_i}{\sum n_i}, \quad \text{UCL/LCL}_p = \bar{p} \pm 3 \sqrt{\frac{\bar{p}(1-\bar{p})}{n_i}}$$
- **Peta $c$ (Jumlah Cacat per Unit Konstan):**
  $$\bar{c} = \frac{\sum c_i}{m}, \quad \text{UCL/LCL}_c = \bar{c} \pm 3 \sqrt{\bar{c}}$$
- **Peta $u$ (Jumlah Cacat per Unit Variabel):**
  $$\bar{u} = \frac{\sum c_i}{\sum n_i}, \quad \text{UCL/LCL}_u = \bar{u} \pm 3 \sqrt{\frac{\bar{u}}{n_i}}$$

---

## 4. Analisis Kapabilitas Proses ($C_p$ dan $C_{pk}$)
Mengukur kemampuan proses memenuhi batas spesifikasi teknis $(\text{USL}$ dan $\text{LSL})$.

### Formulasi Matematis:
$$\hat{\sigma} = \frac{\bar{R}}{d_2} \quad \text{atau} \quad \hat{\sigma} = \frac{\bar{S}}{c_4}$$
$$C_p = \frac{\text{USL} - \text{LSL}}{6\hat{\sigma}}$$
$$C_{pu} = \frac{\text{USL} - \bar{\bar{X}}}{3\hat{\sigma}}, \quad C_{pl} = \frac{\bar{\bar{X}} - \text{LSL}}{3\hat{\sigma}}$$
$$C_{pk} = \min(C_{pu}, C_{pl})$$

### Standar Interpretasi Industri:
- $C_{pk} < 1.00$: **Proses Tidak Mampu (Incapable)** — menghasilkan banyak produk cacat.
- $1.00 \le C_{pk} < 1.33$: **Proses Mampu Marginal** — butuh pengendalian ketat.
- $1.33 \le C_{pk} < 1.67$: **Proses Mampu Baik (Industry Standard 4 Sigma)**.
- $C_{pk} \ge 2.00$: **Kelas Dunia (World Class 6 Sigma)**.

---

## 5. Metrik Six Sigma & DPMO (Defects Per Million Opportunities)
$$\text{DPO} = \frac{\text{Total Cacat (D)}}{\text{Total Unit (N)} \times \text{Jumlah Peluang Cacat per Unit (O)}}$$
$$\text{DPMO} = \text{DPO} \times 10^6 = \frac{D}{N \times O} \times 10^6$$

### Hubungan Level Sigma dan DPMO (dengan $1.5\sigma$ shift):
- $1\sigma = 691.462 \text{ DPMO}$ (Yield $30.85\%$)
- $2\sigma = 308.538 \text{ DPMO}$ (Yield $69.15\%$)
- $3\sigma = 66.807 \text{ DPMO}$ (Yield $93.32\%$)
- $4\sigma = 6.210 \text{ DPMO}$ (Yield $99.38\%$)
- $5\sigma = 233 \text{ DPMO}$ (Yield $99.977\%$)
- **$6\sigma = 3.4 \text{ DPMO}$** (Yield **$99.99966\%$**)

---

## 6. Nelson Rules (Western Electric Pattern Detection)
Peta kendali tidak hanya mendeteksi titik di luar batas kendali, melainkan 8 pola ketidakstabilan:
1. **Rule 1**: 1 titik berada di luar batas $\pm 3\sigma$ ($\text{UCL / LCL}$).
2. **Rule 2**: 9 titik berurutan berada pada satu sisi garis tengah ($\text{CL}$).
3. **Rule 3**: 6 titik berurutan meningkat atau menurun secara konsisten (*trend*).
4. **Rule 4**: 14 titik berurutan bergantian naik dan turun (*sawtooth* / osilasi).
5. **Rule 5**: 2 dari 3 titik berurutan berada di luar zona $2\sigma$ pada satu sisi.
6. **Rule 6**: 4 dari 5 titik berurutan berada di luar zona $1\sigma$ pada satu sisi.
7. **Rule 7**: 15 titik berurutan berada di dalam zona $1\sigma$ di kedua sisi (*stratification* / kesalahan kalkulasi batas).
8. **Rule 8**: 8 titik berurutan berada di luar zona $1\sigma$ di kedua sisi tanpa ada titik di zona $1\sigma$ (*mixture* / dua mesin berbeda).
