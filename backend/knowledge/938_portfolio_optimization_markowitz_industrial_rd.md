# 938 — Optimasi Portofolio Riset dan Pengembangan Industri Menggunakan Pendekatan Markowitz

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Markowitz Mean-Variance and Multi-Criteria Portfolio Optimization for Industrial R&D Project Selection: Efficient Frontier Construction, Value-at-Risk (VaR), and Resource Bottlenecks  
**Standar & Referensi Utama:** Markowitz (Portfolio Selection: Efficient Diversification of Investments, Wiley); Cooper, Edgett & Kleinschmidt (Portfolio Management for New Products, Basic Books)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, perusahaan-perusahaan di sektor industri menghadapi tantangan besar dalam pengelolaan proyek Riset dan Pengembangan (R&D). R&D merupakan elemen kunci untuk inovasi dan daya saing, namun sering kali dihadapkan pada keterbatasan sumber daya dan risiko yang tinggi. Menurut Cooper, Edgett, dan Kleinschmidt (2004), manajemen portofolio produk baru yang efektif dapat meningkatkan peluang keberhasilan proyek R&D. Oleh karena itu, penting bagi perusahaan untuk menerapkan metode optimasi yang sistematis dalam pemilihan proyek R&D.

Pendekatan Markowitz Mean-Variance menawarkan kerangka kerja yang kuat untuk mengevaluasi dan memilih proyek berdasarkan risiko dan imbal hasil. Dengan memanfaatkan konsep garis efisien (efficient frontier), perusahaan dapat mengidentifikasi kombinasi proyek yang memberikan imbal hasil maksimum untuk tingkat risiko tertentu. Selain itu, analisis Value-at-Risk (VaR) dapat digunakan untuk mengukur potensi kerugian dalam portofolio proyek, memberikan wawasan tambahan dalam pengambilan keputusan.

Tantangan lain yang dihadapi adalah bottleneck sumber daya, di mana keterbatasan dalam kapasitas sumber daya dapat menghambat pelaksanaan proyek. Oleh karena itu, penting untuk mempertimbangkan aspek-aspek ini dalam proses seleksi proyek R&D, agar perusahaan dapat mengoptimalkan portofolio mereka dan memaksimalkan nilai investasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Markowitz

Model Markowitz didasarkan pada dua parameter utama: imbal hasil yang diharapkan ($E[R]$) dan risiko yang diukur dengan deviasi standar ($\sigma$). Imbal hasil yang diharapkan dari portofolio dapat dihitung dengan rumus:

$$
E[R_p] = \sum_{i=1}^{n} w_i E[R_i]
$$

di mana:
- $E[R_p]$ = imbal hasil yang diharapkan dari portofolio
- $w_i$ = proporsi investasi pada aset $i$
- $E[R_i]$ = imbal hasil yang diharapkan dari aset $i$

Risiko portofolio ($\sigma_p$) dapat dihitung dengan rumus:

$$
\sigma_p = \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} w_i w_j \sigma_{ij}}
$$

di mana:
- $\sigma_{ij}$ = kovarians antara aset $i$ dan $j$

### 2.2. Garis Efisien

Garis efisien adalah kurva yang menunjukkan kombinasi portofolio yang memberikan imbal hasil maksimum untuk tingkat risiko tertentu. Untuk membangun garis efisien, kita perlu memecahkan masalah optimasi berikut:

$$
\text{Minimize } \sigma_p^2
$$
$$
\text{Subject to } E[R_p] \geq R_t \quad \text{and} \quad \sum_{i=1}^{n} w_i = 1
$$

di mana $R_t$ adalah tingkat imbal hasil yang diinginkan.

### 2.3. Value-at-Risk (VaR)

Value-at-Risk (VaR) adalah ukuran risiko yang menunjukkan potensi kerugian maksimum pada portofolio dalam periode tertentu dengan tingkat kepercayaan tertentu. VaR dapat dihitung dengan rumus:

$$
VaR_{\alpha} = -\mu + z_{\alpha} \sigma
$$

di mana:
- $\mu$ = rata-rata imbal hasil portofolio
- $z_{\alpha}$ = nilai z untuk tingkat kepercayaan $\alpha$
- $\sigma$ = deviasi standar imbal hasil portofolio

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Proyek R&D**: Kumpulkan data tentang semua proyek R&D yang diusulkan, termasuk estimasi imbal hasil dan risiko.
2. **Pengumpulan Data**: Kumpulkan data historis untuk menghitung imbal hasil yang diharapkan dan kovarians antar proyek.
3. **Perhitungan Imbal Hasil dan Risiko**: Gunakan rumus yang telah dijelaskan untuk menghitung $E[R]$ dan $\sigma$ untuk setiap proyek.
4. **Optimasi Portofolio**: Gunakan metode optimasi untuk menentukan bobot optimal ($w_i$) untuk setiap proyek dalam portofolio.
5. **Konstruksi Garis Efisien**: Plot garis efisien berdasarkan hasil optimasi.
6. **Analisis VaR**: Hitung VaR untuk portofolio yang dihasilkan untuk memahami potensi risiko.
7. **Evaluasi Bottleneck Sumber Daya**: Identifikasi dan analisis bottleneck dalam sumber daya yang dapat mempengaruhi pelaksanaan proyek.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Proyek R&D] --> [Pengumpulan Data] --> [Perhitungan Imbal Hasil dan Risiko]
       |                                                      |
       |                                                      v
       |                                               [Optimasi Portofolio]
       |                                                      |
       |                                                      v
       |                                               [Konstruksi Garis Efisien]
       |                                                      |
       |                                                      v
       |                                               [Analisis VaR]
       |                                                      |
       |                                                      v
       +--------------------------------------------------> [Evaluasi Bottleneck]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan memiliki tiga proyek R&D yang diusulkan dengan estimasi imbal hasil dan deviasi standar sebagai berikut:

| Proyek | Imbal Hasil yang Diharapkan ($E[R_i]$) | Deviasi Standar ($\sigma_i$) |
|--------|----------------------------------------|-------------------------------|
| A      | 0.12                                   | 0.10                          |
| B      | 0.15                                   | 0.20                          |
| C      | 0.10                                   | 0.15                          |

Kovarians antar proyek adalah sebagai berikut:

|        | A     | B     | C     |
|--------|-------|-------|-------|
| A      | 0.01  | 0.002 | 0.001 |
| B      | 0.002 | 0.04  | 0.003 |
| C      | 0.001 | 0.003 | 0.022 |

### 4.2. Langkah Kalkulasi

1. **Hitung Imbal Hasil Portofolio**:
   Misalkan bobot proyek adalah $w_A = 0.4$, $w_B = 0.4$, dan $w_C = 0.2$.

   $$E[R_p] = 0.4 \times 0.12 + 0.4 \times 0.15 + 0.2 \times 0.10 = 0.048 + 0.06 + 0.02 = 0.128$$

2. **Hitung Risiko Portofolio**:
   Menggunakan rumus risiko portofolio:

   $$\sigma_p = \sqrt{(0.4^2 \times 0.01) + (0.4^2 \times 0.04) + (0.2^2 \times 0.022) + 2 \times (0.4 \times 0.4 \times 0.002) + 2 \times (0.4 \times 0.2 \times 0.001) + 2 \times (0.4 \times 0.2 \times 0.003)}$$

   Setelah perhitungan, diperoleh $\sigma_p \approx 0.114$.

3. **Hitung VaR**:
   Dengan tingkat kepercayaan 95% ($z_{0.95} \approx 1.645$):

   $$VaR_{0.95} = -E[R_p] + z_{0.95} \sigma_p = -0.128 + 1.645 \times 0.114 \approx 0.028$$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, portofolio yang dihasilkan memiliki imbal hasil yang diharapkan sebesar 12.8% dengan risiko 11.4%. VaR menunjukkan bahwa dengan tingkat kepercayaan 95%, potensi kerugian maksimum adalah 2.8%. Ini memberikan informasi penting bagi manajemen dalam pengambilan keputusan terkait proyek R&D.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan optimasi portofolio tidak hanya relevan dalam konteks R&D, tetapi juga dapat diterapkan dalam disiplin lain seperti manajemen rantai pasok, di mana pemilihan pemasok dan produk dapat dioptimalkan menggunakan prinsip yang sama. Dalam konteks otomasi, penggunaan algoritma untuk optimasi dapat meningkatkan efisiensi dan mengurangi biaya.

Namun, terdapat batasan dalam metodologi ini, seperti asumsi bahwa imbal hasil mengikuti distribusi normal dan ketidakpastian dalam estimasi parameter. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih robust, termasuk penggunaan teknik machine learning untuk memprediksi imbal hasil dan risiko.

Arah riset masa depan dapat berfokus pada integrasi aspek keberlanjutan (ESG) dalam proses seleksi proyek, serta pengembangan alat analisis yang lebih canggih untuk mengatasi bottleneck sumber daya secara real-time. Dengan demikian, perusahaan dapat lebih responsif terhadap perubahan pasar dan meningkatkan daya saing mereka di era industri 4.0.