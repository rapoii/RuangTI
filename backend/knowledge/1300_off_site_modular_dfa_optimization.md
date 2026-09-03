# 1300 — Optimasi Proses Desain untuk Off-Site Modular Construction Menggunakan Pendekatan DfMA Berbasis AI

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Optimasi Proses Desain untuk Off-Site Modular Construction Menggunakan Pendekatan DfMA Berbasis AI  
**Standar & Referensi Utama:** Smith, J. (2023). Design for Manufacture and Assembly in Modular Construction. IEEE Transactions on Automation Science and Engineering, 20(1), 45-58. ISO 9001:2015.

---

## 1. Pendahuluan dan Konteks Industri

Industri konstruksi menghadapi tantangan signifikan dalam hal efisiensi, biaya, dan waktu penyelesaian proyek. Dengan meningkatnya permintaan akan bangunan yang lebih cepat dan lebih berkelanjutan, Off-Site Modular Construction (OSMC) muncul sebagai solusi inovatif. OSMC memungkinkan komponen bangunan diproduksi di luar lokasi konstruksi dan kemudian dirakit di lokasi, mengurangi waktu konstruksi dan meningkatkan kualitas produk akhir. Namun, tantangan dalam desain dan manufaktur tetap ada, terutama dalam hal integrasi desain untuk manufaktur dan perakitan (DfMA).

Pendekatan DfMA, yang berfokus pada pengoptimalan desain untuk mempermudah proses manufaktur dan perakitan, menjadi semakin relevan. Dalam konteks OSMC, penerapan DfMA yang didukung oleh kecerdasan buatan (AI) dapat meningkatkan efisiensi, mengurangi limbah, dan meningkatkan kualitas produk. Menurut Smith (2023), penerapan DfMA dalam OSMC dapat mengurangi biaya konstruksi hingga 30% dan mempercepat waktu penyelesaian proyek hingga 50%. Namun, implementasi yang efektif memerlukan pemahaman mendalam tentang proses desain dan manufaktur, serta kemampuan untuk mengintegrasikan teknologi AI dalam proses tersebut.

Dalam konteks ini, penting untuk mengeksplorasi bagaimana optimasi proses desain dapat dilakukan melalui pendekatan DfMA berbasis AI, serta tantangan yang mungkin dihadapi dalam implementasinya. Dengan pemahaman yang lebih baik tentang interaksi antara desain, manufaktur, dan teknologi, industri konstruksi dapat bergerak menuju praktik yang lebih efisien dan berkelanjutan.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DfMA mengharuskan perancang untuk mempertimbangkan berbagai faktor yang mempengaruhi biaya dan waktu dalam proses manufaktur dan perakitan. Salah satu rumus kunci dalam DfMA adalah analisis biaya total (Total Cost Analysis) yang dapat dinyatakan sebagai:

$$
CT = C_m + C_a + C_t
$$

di mana:
- $CT$ = Total Cost
- $C_m$ = Manufacturing Cost
- $C_a$ = Assembly Cost
- $C_t$ = Transportation Cost

Untuk mengoptimalkan desain, kita perlu meminimalkan $CT$ dengan mempertimbangkan variabel desain yang berpengaruh. Misalkan kita memiliki variabel desain $x_1, x_2, \ldots, x_n$ yang mempengaruhi $C_m$, $C_a$, dan $C_t$. Fungsi biaya dapat dinyatakan sebagai:

$$
CT(x_1, x_2, \ldots, x_n) = C_m(x_1, x_2, \ldots, x_n) + C_a(x_1, x_2, \ldots, x_n) + C_t(x_1, x_2, \ldots, x_n)
$$

Untuk menemukan nilai optimal dari variabel desain, kita dapat menggunakan metode optimasi seperti algoritma genetika atau pemrograman linier. Fungsi objektif yang ingin diminimalkan dapat dituliskan sebagai:

$$
\min CT = \sum_{i=1}^{n} C_i(x_1, x_2, \ldots, x_n)
$$

dengan kendala yang harus dipenuhi:

$$
g_j(x_1, x_2, \ldots, x_n) \leq 0, \quad j = 1, 2, \ldots, m
$$

di mana $g_j$ adalah fungsi kendala yang berkaitan dengan batasan desain, material, atau regulasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari pendekatan DfMA berbasis AI dalam OSMC dapat dilakukan melalui langkah-langkah berikut:

1. **Analisis Kebutuhan**: Identifikasi kebutuhan proyek dan spesifikasi desain.
2. **Pengumpulan Data**: Kumpulkan data historis tentang biaya, waktu, dan kualitas dari proyek sebelumnya.
3. **Modeling**: Buat model matematis dari proses desain dan manufaktur menggunakan rumus yang telah dijelaskan.
4. **Optimasi**: Gunakan algoritma optimasi untuk menemukan solusi desain yang optimal.
5. **Simulasi**: Lakukan simulasi untuk memvalidasi desain yang dioptimalkan.
6. **Implementasi**: Terapkan desain yang telah dioptimalkan dalam proses manufaktur.
7. **Evaluasi**: Lakukan evaluasi pasca-implementasi untuk mengukur efektivitas dan efisiensi.

Diagram alir proses dapat dilihat pada Gambar 1.

```
[Analisis Kebutuhan] → [Pengumpulan Data] → [Modeling] → [Optimasi] → [Simulasi] → [Implementasi] → [Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan proyek pembangunan gedung modular dengan parameter berikut:

- Biaya manufaktur per unit ($C_m$): $5000
- Biaya perakitan per unit ($C_a$): $2000
- Biaya transportasi per unit ($C_t$): $1000
- Jumlah unit yang diproduksi: 100

Total biaya dapat dihitung sebagai berikut:

$$
CT = C_m + C_a + C_t = 5000 + 2000 + 1000 = 8000
$$

Dengan 100 unit, total biaya menjadi:

$$
CT_{total} = 100 \times CT = 100 \times 8000 = 800000
$$

Jika penerapan DfMA berbasis AI berhasil mengurangi biaya manufaktur sebesar 20%, biaya perakitan sebesar 10%, dan biaya transportasi sebesar 5%, maka biaya baru menjadi:

- Biaya manufaktur baru: $C_m' = 5000 \times (1 - 0.2) = 4000$
- Biaya perakitan baru: $C_a' = 2000 \times (1 - 0.1) = 1800$
- Biaya transportasi baru: $C_t' = 1000 \times (1 - 0.05) = 950$

Total biaya baru menjadi:

$$
CT' = C_m' + C_a' + C_t' = 4000 + 1800 + 950 = 6750
$$

Total biaya untuk 100 unit menjadi:

$$
CT'_{total} = 100 \times CT' = 100 \times 6750 = 675000
$$

Dengan demikian, penerapan DfMA berbasis AI menghasilkan penghematan total sebesar:

$$
Penghematan = CT_{total} - CT'_{total} = 800000 - 675000 = 125000
$$

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan DfMA berbasis AI dalam OSMC tidak hanya terbatas pada industri konstruksi. Pendekatan ini dapat diadaptasi untuk berbagai sektor lain seperti otomotif, elektronik, dan manufaktur umum. Dalam konteks rantai pasok, integrasi DfMA dapat meningkatkan efisiensi logistik dan mengurangi waktu siklus produksi. Selain itu, penerapan prinsip K3 dan ESG dalam proses desain dan manufaktur dapat menghasilkan produk yang lebih aman dan berkelanjutan.

Namun, terdapat batasan dalam metodologi ini, seperti kebutuhan akan data yang akurat dan representatif untuk pelatihan model AI, serta tantangan dalam mengintegrasikan teknologi baru dalam proses yang sudah ada. Arah riset masa depan dapat difokuskan pada pengembangan algoritma yang lebih canggih untuk optimasi desain, serta penerapan teknologi IoT untuk memantau dan menganalisis proses manufaktur secara real-time.

Dengan demikian, optimasi proses desain untuk OSMC menggunakan pendekatan DfMA berbasis AI tidak hanya membawa manfaat langsung dalam hal efisiensi dan penghematan biaya, tetapi juga membuka peluang untuk inovasi dan peningkatan berkelanjutan dalam industri konstruksi dan sektor lainnya.