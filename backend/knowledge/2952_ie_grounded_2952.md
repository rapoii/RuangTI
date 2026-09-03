# 2952 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan dengan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Pustaka — UPS)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Pustaka — UPS)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, dan secara khusus di Indonesia, mengalami ekspansi eksponensial sepanjang dekade terakhir, dengan Shopee sebagai salah satu platform *marketplace* dengan pangsa pasar terbesar. Salah satu pilar operasional Shopee adalah Shopee Express (SPX), entitas logistik yang mengelola rantai pasok *last-mile delivery* dengan mengandalkan ribuan *partner employees* (mitra kurir). Rafi & Putra (2024), dalam artikel ilmiah yang dipublikasikan pada *Universitas Pustaka Scientific Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), menyoroti bahwa mitra Shopee Express menghadapi tekanan multi-dimensi — meliputi permintaan mental, fisik, temporal, frustasi, dan upaya (effort) — yang apabila tidak dikelola secara kuantitatif akan menurunkan performa, meningkatkan *error rate*, memperbanyak kecelakaan kerja, dan pada akhirnya merugikan produktivitas korporasi.

Urgensi riset ini diperkuat oleh fakta bahwa beban kerja mental (*mental workload*) merupakan variabel laten yang tidak dapat diamati secara langsung melalui output fisik, namun memiliki konsekuensi langsung terhadap *service level agreement* (SLA), *customer satisfaction score* (CSAT), dan tingkat *turnover* karyawan. Dalam konteks gig-economy yang tengah tumbuh, Shopee Express mengandalkan model kemitraan di mana setiap individu pengemudi menerima rute, memindai (*scan*) paket, berkomunikasi dengan pelanggan, dan menyelesaikan penyelesaian masalah (*problem-solving*) dalam jendela waktu yang ketat. Kombinasi kompleksitas kognitif dan tekanan temporal ini menjadi objek studi yang ideal untuk aplikasi *NASA Task Load Index* (NASA-TLX). Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) selanjutnya memperkuat basis bukti dengan menunjukkan bahwa NASA-TLX juga relevan bagi operator gudang (*warehouse operator*) — kelompok pekerja yang meskipun lebih *stationary*, tetap menanggung beban kognitif signifikan terkait *picking accuracy*, *inventory tracking*, dan *deadline pressure*.

Kedua paper tersebut secara kolektif membentuk justifikasi bahwa pengukuran beban kerja mental bukan sekadar eksperimen akademis, melainkan kebutuhan operasional yang memiliki implikasi terhadap *human resource planning*, *shift scheduling*, dan *ergonomic intervention*. Secara ekonomi, biaya satu mitra kurir yang *burnout* — berupa pelatihan ulang, kehilangan produktivitas, dan potensi litigasi kecelakaan — merupakan pos biaya yang dapat diminimalkan melalui asesmen beban kerja berbasis bukti kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual NASA-TLX

NASA-TLX, yang dikembangkan oleh Hart & Staveland (1988) dan diadopsi secara luas dalam literatur *human factors*, mengukur beban kerja melalui enam subskala unidimensional:

| Simbol | Dimensi | Deskripsi |
|---|---|---|
| $MD$ | Mental Demand | Upaya kognitif dan perseptual |
| $PD$ | Physical Demand | Upaya fisik yang diperlukan |
| $TD$ | Temporal Demand | Tingkat tekanan waktu |
| $OP$ | Own Performance | Persepsi terhadap pencapaian tugas |
| $EF$ | Effort | Tingkat kerja keras yang dikeluarkan |
| $FR$ | Frustration | Tingkat irritasi, stress, dan frustasi |

Setiap subskala dinilai menggunakan *Likert-type scale* 0–100 dengan *step* 5 (0, 5, 10, …, 100). Terdapat dua varian kalkulasi:

**Raw TLX (unweighted):**
$$TLX_{Raw} = \frac{MD + PD + TD + OP + EF + FR}{6} \quad (1)$$

**Weighted TLX (dengan bobot dari pairwise comparison):**

Prosedur pembobotan dilakukan melalui 15 perbandingan berpasangan ($C_2^6 = 15$), di mana responden memilih anggota dari setiap pasangan yang lebih berpengaruh terhadap beban kerja tugas. Jumlah kemenangan tiap subskala dibagi 15 menghasilkan bobot $w_i$.

$$TLX_{Weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{\sum_{i=1}^{6} w_i} \times 100 \quad (2)$$

di mana $r_i$ adalah *rating* subskala ke-$i$ dan $w_i \in \{0, 1, 2, 3, 4, 5\}$ adalah bobot hasil pairwise. Karena $\sum w_i = 15$, persamaan (2) dapat disederhanakan menjadi:

$$TLX_{Weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15} \quad (3)$$

### 2.2 Kategorisasi Beban Kerja

Berdasarkan *benchmark* literatur dan hasil empiris Rafi & Putra (2024), skor NASA-TLX dikategorikan sebagai berikut:

$$Kategori = \begin{cases} \text{Rendah} & \text{jika } TLX \leq 20 \\ \text{Sedang-Rendah} & \text{jika } 21 \leq TLX \leq 40 \\ \text{Sedang} & \text{jika } 41 \leq TLX \leq 60 \\ \text{Sedang-Tinggi} & \text{jika } 61 \leq TLX \leq 80 \\ \text{Tinggi} & \text{jika } TLX > 80 \end{cases} \quad (4)$$

### 2.3 Work Sampling dan Uji Adequasi Sampel

Aditya.R & Putra (2024) mengintegrasikan NASA-TLX dengan teknik *work sampling* untuk operator gudang. Proporsi waktu yang dihabiskan pada aktivitas tertentu dihitung dengan:

$$P_k = \frac{X_k}{N} \times 100\% \quad (5)$$

di mana $P_k$ adalah persentase waktu untuk aktivitas $k$, $X_k$ adalah jumlah pengamatan pada aktivitas $k$, dan $N$ adalah total pengamatan. Jumlah pengamatan yang diperlukan untuk tingkat keyakinan tertentu ditentukan oleh:

$$N = \frac{Z_{\alpha/2}^2 \cdot p \cdot (1-p)}{E^2} \quad (6)$$

di mana $Z_{\alpha/2}$ adalah nilai *z* pada tingkat kepercayaan $(1-\alpha)$, $p$ adalah proporsi aktivitas yang diestimasi, dan $E$ adalah *margin of error* absolut.

### 2.4 Statistik Inferensial

Untuk menguji signifikansi perbedaan skor NASA-TLX antar kelompok (misalnya antar shift atau antar pengalaman kerja), digunakan uji Mann-Whitney $U$ atau Kruskal-Wallis $H$ (untuk data non-parametrik):

$$H = \frac{12}{N(N+1)} \sum_{j=1}^{k} \frac{R_j^2}{n_j} - 3(N+1) \quad (7)$$

dengan $R_j$ adalah jumlah peringkat kelompok $j$, $n_j$ adalah ukuran sampel kelompok $j$, dan $N$ adalah total sampel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan metodologi Rafi & Putra (2024) dan Aditya.R & Putra (2024), berikut adalah *Standard Operating Procedure* (SOP) implementasi NASA-TLX di lingkungan operasional:

### Diagram Alir Implementasi

```
┌────────────────────────────────────────┐
│ Tahap 1: Identifikasi Populasi & Tugas │
│ (operator kurir / gudang, 1 siklus kerja)│
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 2: Penentuan Ukuran Sampel       │
│ (persamaan 6, α=5%, E=5%)              │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 3: Pretest & Validasi Kuesioner  │
│ (uji pemahaman, Cronbach α > 0.70)     │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 4: Pengumpulan Data Rating (0-100)│
│ untuk 6 subskala                      │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 5: Pairwise Comparison Card Sort │
│ (15 kartu, pilih yang lebih dominan)   │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 6: Kalkulasi Weighted TLX        │
│ (persamaan 3)                         │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 7: Uji Statistik & Interpretasi  │
│ (Kruskal-Wallis / Mann-Whitney)       │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│ Tahap 8: Rekomendasi Ergonomis &       │
│ Penjadwalan Ulang (Shift Scheduling)   │
└────────────────────────────────────────┘
```

### Prosedur Detail

**Tahap 1-2 — Desain Sampling.** Rafi & Putra (2024) menggunakan populasi mitra Shopee Express dengan ukuran sample yang memenuhi syarat power statistik. Aditya.R & Putra (2024) pada konteks gudang melakukan work sampling terlebih dahulu untuk memetakan distribusi aktivitas, kemudian NASA-TLX diterapkan pada aktivitas dominan yang teridentifikasi.

**Tahap 3-4 — Instrumen.** Kuesioner menggunakan *bipolar 21-point* anchors untuk keenam subskala. Pengisian dilakukan segera setelah responden menyelesaikan siklus tugas (post-task assessment) untuk menghindari *recall bias*. Validitas konstruk diverifikasi melalui *Cronbach's alpha*:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_{y_i}^2}{\sigma_y^2}\right) \quad (8)$$

dengan $k$ jumlah item dan $\sigma_y^2$ varians total. Nilai $\alpha > 0.70$ dianggap reliabel.

**Tahap 5-6 — Pembobotan.** *Card sort* dilakukan dengan 15 kartu yang merepresentasikan keenam subskala; responden memilih anggota pasangan yang dianggap lebih berkontribusi pada beban kerja keseluruhan. Bobot dihitung sebagai jumlah kemenangan.

**Tahap 7-8 — Analisis & Rekomendasi.** Hasil skor TLX dibandingkan terhadap threshold kategori persamaan (4), kemudian diterjemahkan menjadi intervensi seperti redistribusi rute, rotasi shift, penambahan *helper*, atau pelatihan teknis.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Replikasi Studi Kasus Mitra Shopee Express

Mengacu pada Rafi & Putra (2024), misalkan diambil 1 responden mitra kurir Shopee Express "Budi" yang baru menyelesaikan shift 8 jam. Data primer sebagai berikut:

| Subskala | Rating $r_i$ |
|---|---|
| Mental Demand (MD) | 75 |
| Physical Demand (PD) | 80 |
| Temporal Demand (TD) | 85 |
| Own Performance (OP) | 30 (di mana *lower score = better performance* dalam NASA-TLX, karena diinterpretasikan sebagai *how successful in accomplishing the goal* — semakin rendah semakin baik) |
| Effort (EF) | 80 |
| Frustration (FR) | 65 |

**Langkah 1 — Raw TLX (Persamaan 1):**

$$TLX_{Raw} = \frac{75 + 80 + 85 + 30 + 80 +