# 890 — Penjadwalan Twin Automated Rail-Mounted Gantry (ARMG) Cranes di Mega Container Terminals: Optimalisasi Stacking Yard Block dan Penghindaran Interferensi serta Kolisi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Twin Automated Rail-Mounted Gantry (ARMG) Cranes Scheduling in Mega Container Terminals: Interference and Collision Avoidance Constraints, Yard Block Stacking Optimization  
**Standar & Referensi Utama:** Steenken, Voß & Stahlbock (OR Spectrum); IEEE Trans. Intell. Transp. Syst.; Steenken et al. (Container Terminal Operations)

---

## 1. Pendahuluan dan Konteks Industri

Industri pelabuhan dan terminal kontainer merupakan salah satu sektor yang paling krusial dalam rantai pasok global. Dengan meningkatnya volume perdagangan internasional, efisiensi operasional di terminal kontainer menjadi sangat penting untuk mengurangi biaya dan waktu yang diperlukan dalam proses bongkar muat. Twin Automated Rail-Mounted Gantry (ARMG) cranes telah muncul sebagai solusi inovatif untuk meningkatkan produktivitas dan efisiensi dalam operasi terminal kontainer. Namun, penjadwalan yang efektif dari crane ini menghadapi tantangan signifikan, termasuk interferensi antar crane dan risiko kolisi yang dapat mengakibatkan kerugian ekonomi yang besar serta potensi bahaya keselamatan.

Dalam konteks ini, optimasi penjadwalan crane tidak hanya berfokus pada pengurangan waktu siklus, tetapi juga pada penghindaran interferensi dan kolisi yang dapat mengganggu operasi. Penelitian oleh Steenken et al. (2004) menunjukkan bahwa penjadwalan yang tidak efisien dapat menyebabkan peningkatan waktu tunggu dan biaya operasional. Oleh karena itu, penting untuk mengembangkan model matematis yang dapat menangani berbagai kendala, termasuk penghindaran kolisi dan optimasi stacking yard block, untuk meningkatkan efisiensi keseluruhan terminal kontainer.

Tantangan ini semakin kompleks dengan meningkatnya ukuran kapal kontainer dan permintaan untuk layanan yang lebih cepat. Penjadwalan yang optimal dari ARMG cranes tidak hanya akan meningkatkan throughput terminal tetapi juga berkontribusi pada keberlanjutan operasional dengan mengurangi jejak karbon dan meningkatkan keselamatan kerja. Dalam modul ini, kami akan membahas landasan teori, metodologi, studi kasus kuantitatif, serta evaluasi kritis terkait penjadwalan ARMG cranes di terminal kontainer mega.

## 2. Landasan Teori & Formulasi Matematis

Penjadwalan ARMG cranes dapat dimodelkan sebagai masalah optimasi kombinatorial yang melibatkan beberapa variabel dan kendala. Misalkan kita mendefinisikan beberapa variabel sebagai berikut:

- $C_i$: Waktu mulai operasi crane ke-i
- $D_i$: Durasi operasi crane ke-i
- $Y_j$: Posisi yard block j
- $T_{ij}$: Waktu yang diperlukan untuk memindahkan kontainer dari posisi j ke posisi i

Model matematis untuk penjadwalan dapat dinyatakan sebagai berikut:

Minimalkan:
$$
Z = \sum_{i=1}^{n} C_i + \sum_{j=1}^{m} Y_j
$$

Dengan kendala:
1. Waktu mulai dan durasi:
$$
C_i + D_i \leq C_{i+1}, \quad \forall i \in \{1, 2, \ldots, n-1\}
$$
2. Penghindaran kolisi:
$$
|C_i - C_j| \geq T_{ij}, \quad \forall i \neq j
$$
3. Kapasitas yard block:
$$
\sum_{i=1}^{n} x_{ij} \leq K_j, \quad \forall j \in \{1, 2, \ldots, m\}$$
di mana $x_{ij}$ adalah variabel biner yang menunjukkan apakah crane ke-i mengakses yard block j.

Model ini dapat diselesaikan menggunakan algoritma optimasi seperti Integer Linear Programming (ILP) atau heuristik seperti Genetic Algorithm (GA) untuk mendapatkan solusi yang efisien.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi yang diusulkan untuk penjadwalan ARMG cranes melibatkan langkah-langkah berikut:

1. **Identifikasi Parameter**: Mengumpulkan data terkait waktu operasi, durasi, dan posisi yard block.
2. **Modeling**: Mengembangkan model matematis berdasarkan parameter yang telah diidentifikasi.
3. **Pemilihan Algoritma**: Memilih algoritma optimasi yang sesuai (ILP, GA, dsb.) untuk menyelesaikan model.
4. **Simulasi**: Melakukan simulasi untuk menguji efektivitas model dalam kondisi nyata.
5. **Implementasi**: Menerapkan solusi yang dihasilkan ke dalam sistem operasi terminal.
6. **Monitoring dan Evaluasi**: Memantau kinerja sistem dan melakukan evaluasi untuk perbaikan berkelanjutan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Parameter] → [Modeling] → [Pemilihan Algoritma] → [Simulasi] → [Implementasi] → [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah terminal kontainer dengan 2 ARMG cranes dan 5 yard blocks. Parameter yang digunakan adalah sebagai berikut:

- Waktu operasi crane: $D_1 = 10$ menit, $D_2 = 12$ menit
- Waktu yang diperlukan untuk memindahkan kontainer: $T_{12} = 5$ menit
- Kapasitas yard block: $K_j = 3$ untuk setiap $j$

Dengan model yang telah didefinisikan, kita dapat menghitung waktu mulai dan durasi untuk setiap crane. Misalkan kita ingin menentukan waktu mulai untuk crane 1 dan crane 2.

Dari kendala waktu:
$$
C_1 + 10 \leq C_2 \implies C_2 \geq C_1 + 10
$$

Dengan asumsi $C_1 = 0$, maka:
$$
C_2 \geq 10
$$

Untuk penghindaran kolisi:
$$
|C_1 - C_2| \geq 5 \implies C_2 \geq C_1 + 5 \text{ atau } C_2 \leq C_1 - 5
$$

Karena $C_1 = 0$, maka $C_2 \geq 5$. Namun, dari kendala sebelumnya, kita mendapatkan $C_2 \geq 10$. Dengan demikian, solusi optimal adalah:
$$
C_1 = 0, \quad C_2 = 10
$$

Hasil ini menunjukkan bahwa crane 2 harus menunggu hingga crane 1 selesai sebelum memulai operasinya, yang mengindikasikan adanya potensi peningkatan efisiensi jika penjadwalan dapat dioptimalkan lebih lanjut.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penjadwalan ARMG cranes tidak hanya relevan dalam konteks terminal kontainer, tetapi juga dapat diterapkan dalam sektor lain seperti manufaktur dan distribusi. Dalam konteks rantai pasok, optimasi penjadwalan dapat mengurangi waktu tunggu dan meningkatkan throughput, yang sangat penting dalam industri yang kompetitif saat ini.

Namun, terdapat batasan dalam metodologi yang ada, seperti kompleksitas komputasi yang meningkat seiring dengan bertambahnya jumlah crane dan yard block. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih efisien dan adaptif.

Ke depan, integrasi teknologi seperti Internet of Things (IoT) dan kecerdasan buatan (AI) dapat menjadi arah riset yang menjanjikan untuk meningkatkan efisiensi penjadwalan dan penghindaran kolisi di terminal kontainer. Dengan memanfaatkan data real-time, sistem dapat beradaptasi dengan cepat terhadap perubahan kondisi operasional, sehingga meningkatkan keselamatan dan produktivitas secara keseluruhan.

---

Dokumen ini memberikan panduan komprehensif mengenai penjadwalan ARMG cranes di terminal kontainer, dengan fokus pada penghindaran interferensi dan kolisi serta optimasi stacking yard block. Melalui penerapan model matematis dan metodologi yang sistematis, diharapkan dapat meningkatkan efisiensi operasional dalam industri yang semakin kompetitif ini.