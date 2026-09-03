# 844 — Optimasi Tangguh Distribusi untuk Ekspansi Kapasitas di Bawah Set Ambiguitas: Metode Jarak Wasserstein, Batas Berdasarkan Momen, dan Reformulasi Pemrograman Semidefinite

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Distributionally Robust Optimization (DRO) for Capacity Expansion under Ambiguity Sets: Wasserstein Distance Metric, Moment-Based Bounds, and Semidefinite Programming (SDP) Reformulation  
**Standar & Referensi Utama:** Kuhn et al. (2023, Oper. Res.); Ben-Tal, El Ghaoui & Nemirovski (Robust Optimization, Princeton University Press)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, perusahaan menghadapi tantangan yang semakin kompleks dalam merencanakan dan mengelola kapasitas produksi. Ketidakpastian dalam permintaan, fluktuasi harga bahan baku, dan variabilitas dalam proses produksi menjadi faktor-faktor yang mempengaruhi keputusan strategis. Optimasi Tangguh Distribusi (DRO) muncul sebagai pendekatan yang relevan untuk menangani ketidakpastian ini, terutama dalam konteks ekspansi kapasitas. Dengan menggunakan set ambiguitas, DRO memungkinkan perusahaan untuk merumuskan keputusan yang robust terhadap variasi yang tidak terduga dalam parameter sistem.

Sebagai contoh, dalam industri manufaktur, keputusan untuk menambah kapasitas produksi harus mempertimbangkan proyeksi permintaan yang tidak pasti. Jika perusahaan hanya mengandalkan estimasi permintaan yang tunggal, risiko overcapacity atau undercapacity meningkat, yang dapat berdampak pada biaya operasional dan profitabilitas. Oleh karena itu, pendekatan DRO yang menggunakan metrik jarak Wasserstein dan batas berbasis momen memberikan kerangka kerja yang kuat untuk mengevaluasi dan merencanakan ekspansi kapasitas dalam kondisi ketidakpastian.

Literatur terkini menunjukkan bahwa pendekatan ini tidak hanya relevan untuk sektor manufaktur, tetapi juga untuk rantai pasok, energi, dan layanan. Dengan demikian, pemahaman yang mendalam tentang DRO dan aplikasinya dalam ekspansi kapasitas menjadi sangat penting bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

Distribusi probabilitas permintaan dapat dinyatakan dengan $P$, yang merupakan distribusi probabilitas yang tidak diketahui. Dalam konteks DRO, kita ingin meminimalkan biaya ekspansi kapasitas $C(x)$ dengan mempertimbangkan ketidakpastian dalam permintaan yang terwakili oleh set ambiguitas $\mathcal{P}$.

Model matematis dasar untuk DRO dapat dinyatakan sebagai:

$$
\min_{x} \max_{P \in \mathcal{P}} \mathbb{E}_{P}[C(x, D)]
$$

di mana:
- $x$ adalah keputusan kapasitas yang akan ditentukan,
- $D$ adalah variabel acak yang mewakili permintaan,
- $C(x, D)$ adalah fungsi biaya yang tergantung pada keputusan kapasitas dan permintaan.

Set ambiguitas $\mathcal{P}$ dapat dinyatakan menggunakan metrik jarak Wasserstein sebagai berikut:

$$
\mathcal{P} = \{ P : W(P, P_0) \leq \epsilon \}
$$

di mana $W(P, P_0)$ adalah jarak Wasserstein antara distribusi $P$ dan distribusi referensi $P_0$, dan $\epsilon$ adalah parameter yang menentukan batas ambiguitas.

Untuk menyelesaikan masalah ini, kita dapat menggunakan pendekatan berbasis momen. Misalkan $\mu$ dan $\sigma^2$ adalah rata-rata dan varians dari permintaan. Kita dapat menggunakan batas berbasis momen untuk membatasi ruang solusi:

$$
\mathbb{E}[D] \leq \mu + k \sigma
$$

di mana $k$ adalah faktor yang ditentukan berdasarkan tingkat kepercayaan yang diinginkan.

Reformulasi pemrograman semidefinite (SDP) dapat digunakan untuk menyelesaikan masalah optimasi ini. Dengan mendefinisikan matriks $X$ yang terkait dengan keputusan kapasitas, kita dapat menyusun masalah SDP sebagai berikut:

$$
\begin{aligned}
& \text{minimize} && C(x) \\
& \text{subject to} && \begin{bmatrix}
X & A \\
A^T & B
\end{bmatrix} \succeq 0
\end{aligned}
$$

di mana $A$ dan $B$ adalah matriks yang terkait dengan batas momen dan jarak Wasserstein.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah implementasi sistematis untuk menerapkan DRO dalam ekspansi kapasitas adalah sebagai berikut:

1. **Identifikasi Parameter**: Tentukan parameter yang relevan, termasuk biaya ekspansi, proyeksi permintaan, dan batas ambiguitas.
2. **Modelkan Permintaan**: Gunakan data historis untuk memodelkan distribusi permintaan dan estimasi parameter momen.
3. **Tentukan Set Ambiguitas**: Definisikan set ambiguitas berdasarkan metrik jarak Wasserstein.
4. **Formulasikan Masalah Optimasi**: Susun model matematis berdasarkan rumus yang telah dijelaskan.
5. **Reformulasi SDP**: Jika diperlukan, reformulasikan masalah menjadi bentuk SDP untuk memudahkan penyelesaian.
6. **Selesaikan Masalah**: Gunakan perangkat lunak optimasi untuk menyelesaikan model dan mendapatkan solusi kapasitas optimal.
7. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami dampak perubahan parameter terhadap solusi.
8. **Implementasi dan Monitoring**: Implementasikan keputusan kapasitas dan lakukan monitoring untuk mengevaluasi kinerja.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Parameter] --> [Modelkan Permintaan] --> [Tentukan Set Ambiguitas] --> [Formulasikan Masalah] --> [Reformulasi SDP] --> [Selesaikan Masalah] --> [Analisis Sensitivitas] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, pertimbangkan sebuah perusahaan manufaktur yang ingin menambah kapasitas produksi. Misalkan biaya ekspansi kapasitas $C(x) = 100x + 50$, di mana $x$ adalah kapasitas tambahan yang akan ditambahkan. Proyeksi permintaan mengikuti distribusi normal dengan rata-rata $\mu = 200$ dan varians $\sigma^2 = 25$.

1. **Tentukan Set Ambiguitas**: Misalkan kita memilih $\epsilon = 0.1$ untuk jarak Wasserstein.
2. **Batas Momen**: Dengan $k = 1.96$ untuk tingkat kepercayaan 95%, kita mendapatkan batas permintaan maksimum:

$$
\mathbb{E}[D] \leq 200 + 1.96 \sqrt{25} = 200 + 9.8 = 209.8
$$

3. **Formulasikan Masalah**: Model optimasi menjadi:

$$
\min_{x} 100x + 50 \quad \text{s.t.} \quad x \geq 209.8
$$

4. **Selesaikan Masalah**: Dengan menggunakan perangkat lunak optimasi, kita menemukan solusi optimal $x^* = 210$.

5. **Interpretasi Hasil**: Keputusan untuk menambah kapasitas sebesar 210 unit akan memastikan bahwa perusahaan dapat memenuhi permintaan maksimum yang diperkirakan dengan probabilitas tinggi, sekaligus meminimalkan biaya ekspansi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan DRO memiliki aplikasi luas di berbagai sektor, termasuk rantai pasok, energi, dan layanan. Dalam konteks rantai pasok, optimasi kapasitas yang robust dapat mengurangi risiko kekurangan pasokan dan meningkatkan efisiensi operasional. Dalam industri energi, pendekatan ini dapat digunakan untuk merencanakan kapasitas pembangkit listrik yang dapat beradaptasi dengan fluktuasi permintaan.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kompleksitas komputasi yang meningkat seiring dengan bertambahnya dimensi masalah dan ketergantungan pada asumsi distribusi yang mungkin tidak selalu akurat. Oleh karena itu, penelitian masa depan perlu fokus pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi teknik pembelajaran mesin untuk meningkatkan akurasi model.

Dengan demikian, pemahaman dan penerapan DRO dalam ekspansi kapasitas akan menjadi keterampilan yang sangat berharga bagi para profesional teknik industri di masa depan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
