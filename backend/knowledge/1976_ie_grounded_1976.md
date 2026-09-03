# 1976 — Analisis Beban Kerja Mental Karyawan Mitra Shopee Express Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia telah mengalami pertumbuhan eksponensial dalam dekade terakhir, dengan nilai *Gross Merchandise Value* (GMV) nasional melampaui USD 62 miliar pada tahun 2023. Shopee, sebagai salah satu *marketplace* dominan di kawasan Asia Tenggara, mengandalkan ekosistem logistik internal bernama **Shopee Express (SPX)** untuk menjamin *last-mile delivery* yang cepat dan terjangkau. Karakteristik unik SPX—dan pembeda signifikan dari operator logistik konvensional—adalah model kemitraan (*partner*) dengan pekerja lepas, di mana ribuan individu mengoperasikan armada roda dua dan roda tiga sebagai *rider* independen, bukan karyawan tetap. Model ini menimbulkan tantangan manajerial yang serius: rendahnya kendali organisasi terhadap *well-being* pekerja, paparan tinggi terhadap tekanan kinerja berbasis algoritma, serta fragmentasi jam kerja yang sulit diawasi.

Studi Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti isu krusial yang selama ini luput dari analisis rantai pasok: **beban kerja mental** (*mental workload*) mitra SPX. Berbeda dengan beban kerja fisik yang relatif terukur melalui denyut nadi atau kalori, beban kerja mental bersifat laten, multidimensional, dan memiliki korelasi kuat terhadap keselamatan kerja, kualitas layanan, dan *churn* pekerja. Tingginya angka *attrition* mitra kurir—yang mencapai lebih dari 60% per tahun menurut data internal berbagai platform—dihipotesiskan oleh Rafi & Putra sebagai konsekuensi kumulatif dari *cognitive overload* kronis yang tidak terdeteksi oleh metrik produktivitas konvensional seperti jumlah paket per hari.

Urgensi penelitian ini diperkuat oleh konteks regulasi. Sejak disahkannya UU Cipta Kerja dan turunannya, pemerintah Indonesia melalui Kementerian Ketenagakerjaan mulai menekankan perlunya **Analisis Beban Kerja** bagi seluruh pekerja, termasuk pekerja platform digital. Di sinilah kontribusi Rafi & Putra (2024) menjadi signifikan: mereka menerapkan **NASA-TLX (Task Load Index)**, instrumen psikometrik yang dikembangkan oleh *Human Performance Group* NASA (Hart & Staveland, 1988), untuk mengkuantifikasi beban kerja mental mitra SPX secara multidimensional. Pendekatan ini melengkapi riset Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), yang sebelumnya mengintegrasikan NASA-TLX dengan *Work Sampling* untuk operator gudang, sehingga memberikan kerangka holistik dari hulu (gudang) hingga hilir (kurir last-mile).

Signifikansi ekonomi dari studi ini tidak dapat diremehkan. Jika satu mitra SPX mengalikan 0,001 probabilitas kecelakaan fatal per tahun dengan total 1,5 juta mitra aktif, maka biaya sosial yang ditanggung sangat besar. Dengan mengidentifikasi dimensi beban kerja mental yang paling berkontribusi, manajemen dapat merancang intervensi terarah—mulai dari penyempurnaan antarmuka aplikasi, redistribusi zona pengiriman, hingga *coaching* manajemen stres—yang secara langsung meningkatkan keselamatan, retensi, dan pada akhirnya profitabilitas operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX sebagai Instrumen Multidimensi

NASA-TLX mengukur beban kerja melalui enam subskala yang masing-masing merepresentasikan dimensi berbeda dari pengalaman kognitif-psikologis pekerja:

| Simbol | Dimensi | Definisi Operasional |
|--------|---------|----------------------|
| $MD$ | Mental Demand | Jumlah aktivitas pikir dan perseptual yang diperlukan |
| $PD$ | Physical Demand | Jumlah aktivitas fisik yang diperlukan |
| $TD$ | Temporal Demand | Tekanan waktu yang dirasakan |
| $PE$ | Performance | Keberhasilan pekerja dalam mencapai tujuan |
| $EF$ | Effort | Sejauh mana pekerja harus bekerja keras |
| $FR$ | Frustration | Tingkat kegelisahan, stress, dan kekecewaan |

Setiap dimensi dinilai oleh responden pada skala bipolar $0$–$100$ dengan *tick mark* berjarak 5-unit. Namun, berbeda dengan skor rata-rata sederhana, NASA-TLX memperkenalkan mekanisme **pairwise comparison** untuk menurunkan bobot subjektif ($w_i$) bagi setiap dimensi, sehingga dimensi yang paling relevan bagi tugas tertentu akan memberikan kontribusi lebih besar terhadap skor total.

### 2.2 Skor Raw NASA-TLX (Weighted TLX)

Formulasi skor total NASA-TLX mengikuti persamaan:

$$
\text{TLX}_{\text{weighted}} = \frac{\displaystyle\sum_{i=1}^{6} w_i \cdot \bar{x}_i}{\displaystyle\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot \bar{x}_i
$$

di mana:
- $\bar{x}_i$ = rata-rata skor dimensi $i$ dari seluruh responden, dengan $0 \le \bar{x}_i \le 100$
- $w_i$ = bobot hasil *pairwise comparison* dimensi $i$, dengan $0 \le w_i \le 5$
- $\sum_{i=1}^{6} w_i = 15$ (akibat dari 15 pasangan perbandingan yang mungkin dari 6 dimensi)

Kategori beban kerja berdasarkan skor TLX mengikuti klasifikasi:

$$
\text{Klasifikasi TLX} = \begin{cases} 0 \le \text{TLX} \le 20 & \text{: Rendah} \\ 20 < \text{TLX} \le 50 & \text{: Cukup} \\ 50 < \text{TLX} \le 80 & \text{: Tinggi} \\ \text{TLX} > 80 & \text{: Sangat Tinggi} \end{cases}
$$

### 2.3 Pairwise Comparison dan Penentuan Bobot

Mekanisme *pairwise comparison* mengikuti kaidah combinatorial $\binom{6}{2} = 15$ pasangan. Untuk setiap pasangan, responden memilih dimensi mana yang **lebih dominan** terhadap beban kerja. Frekuensi kemenangan suatu dimensi pada seluruh 15 pasangan menjadi bobotnya:

$$
w_i = \sum_{j=1, j \neq i}^{6} \mathbf{1}_{\{i \text{ dipilih atas } j\}}
$$

dengan $\mathbf{1}_{\{\cdot\}}$ adalah fungsi indikator dan $\sum w_i = 15$. Pendekatan ini mengharmonisasi perbedaan persepsi antar individu, sehingga skor TLX merepresentasikan intensitas beban kerja yang **terboboti secara personal** oleh karakteristik tugas aktual.

### 2.4 Validitas Statistik: Uji Reliabilitas dan Korelasi

Rafi & Putra (2024) melaporkan bahwa reliabilitas instrumen diuji menggunakan Cronbach's Alpha:

$$
\alpha = \frac{k}{k-1}\left(1 - \frac{\displaystyle\sum_{i=1}^{k} s_i^2}{s_t^2}\right)
$$

dengan $k = 6$ dimensi, $s_i^2$ varians setiap item, dan $s_t^2$ varians skor total. Nilai $\alpha \ge 0{,}70$ mengindikasikan konsistensi internal yang dapat diterima. Selanjutnya, signifikansi perbedaan skor antar *shift* atau antar hub pengiriman diuji dengan Kruskal-Wallis (non-parametrik) karena distribusi skor TLX sering tidak normal:

$$
H = \frac{12}{N(N+1)}\sum_{j=1}^{g} \frac{R_j^2}{n_j} - 3(N+1)
$$

dengan $N$ jumlah responden total, $g$ jumlah kelompok, $R_j$ jumlah *rank* kelompok ke-$j$, dan $n_j$ ukuran sampel kelompok ke-$j$.

### 2.5 Integrasi dengan Work Sampling (Studi Pendukung)

Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi kerangka dengan *Work Sampling*, yang menurunkan proporsi waktu kerja melalui formula:

$$
p_a = \frac{n_a}{N}, \quad \text{dengan} \quad N = \frac{Z^2 \cdot p(1-p)}{e^2}
$$

di mana $n_a$ adalah jumlah observasi aktivitas $a$, $N$ total observasi