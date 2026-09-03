# 2216 — Analisis Beban Kerja Mental dan Fisik Operator Logistik E-Commerce: Integrasi Metode NASA-TLX dan Work Sampling untuk Optimalisasi Kinerja Rantai Pasok

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara mengalami pertumbuhan eksponensial pasca-pandemi COVID-19, dengan Indonesia menjadi pasar terbesar di kawasan ini. Berdasarkan laporan *We Are Social* dan *Hootsuite* (2024), penetrasi pengguna *e-commerce* di Indonesia mencapai lebih dari 190 juta pengguna aktif, mendorong permintaan akan layanan logistik *last-mile* yang masif. Dalam konteks ini, Shopee Express sebagai salah satu layanan kurir internal dari ekosistem Shopee (bawahan Sea Group) menanggung volume pengiriman harian yang sangat tinggi, terutama pada periode *peak season* seperti Harbolnas, Ramadan, dan *Double Day Sale* (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Permasalahan fundamental yang muncul adalah bagaimana mengukur dan mengelola **beban kerja mental** (*mental workload*) dari *shopee express partner employees* — yaitu pekerja mitra yang menangani sortasi, *picking-packing*, serta pengiriman paket dalam ekosistem *gig-economy* yang mengandalkan insentif berbasis produktivitas.

Beban kerja mental menjadi variabel kritis yang sering terabaikan dibandingkan beban kerja fisik, padahal menentukan tingkat kelelahan kognitif, *human error*, tingkat absensi, dan pada akhirnya kualitas layanan pelanggan. Rafi & Putra (2024) menyoroti bahwa tanpa pengukuran subjektif yang terstandarisasi, manajemen tidak memiliki *evidence-based baseline* untuk menentukan alokasi shift, jumlah pekerja mitra, maupun desain *workflow* yang ergonomis kognitif. Studi Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat urgensi ini dengan menunjukkan bahwa pada operator gudang, kombinasi *work sampling* dan NASA-TLX mampu mengungkap inefisiensi alokasi waktu kerja yang berkorelasi langsung dengan skor beban kerja mental.

Secara ekonomis, inefisiensi beban kerja memiliki konsekuensi ganda. Pertama, *service level agreement* (SLA) pengiriman Same-Day dan Next-Day menjadi sulit dipenuhi ketika operator mengalami kelelahan kognitif (*cognitive fatigue*), meningkatkan *return rate* dan komplain pelanggan. Kedua, dari perspektif *occupational health and safety* (OHS), beban kerja berlebih merupakan *root cause* utama gangguan muskuloskeletal, *decision fatigue*, dan *burnout syndrome* — yang pada akhirnya meningkatkan *turnover* pekerja mitra dan biaya rekrutmen ulang. Oleh karena itu, pengukuran beban kerja mental bukan sekadar isu ergonomis, melainkan variabel strategis dalam perancangan sistem kerja industri 4.0 yang *human-centric*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX (*NASA Task Load Index*)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh *Human Performance Group* NASA Ames Research Center (Hart & Staveland, 1988) untuk mengukur beban kerja secara subjektif melalui enam subskala:

1. **Mental Demand (MD)** — upaya kognitif dan perseptual.
2. **Physical Demand (PD)** — aktivitas fisik.
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (P)** — persepsi keberhasilan完成任务.
5. **Effort (E)** — usaha total yang dikeluarkan.
6. **Frustration (F)** — tingkat frustrasi/iritasi.

Tahapan prosedural NASA-TLX terdiri atas:

**Tahap 1 — Pemberian Rating Mentah (*Raw TLX*):**
Responden menilai keenam subskala pada rentang $0 \leq x_i \leq 100$ dengan skala garis 20 poin (*Likert-type bipolar scale*).

**Tahap 2 — Pembobotan (*Weighted TLX*):**
Responden melakukan perbandingan berpasangan (*pairwise comparison*) sebanyak $\binom{6}{2} = 15$ kali untuk menentukan bobot relatif setiap subskala. Frekuensi kemunculan suatu subskala sebagai "lebih memberatkan" menentukan bobotnya $w_i$, dengan $\sum_{i=1}^{6} w_i = 15$ dan $0 \leq w_i \leq 5$.

**Formulasi skor akhir NASA-TLX tertimbang (*Weighted Overall Workload Score*):**

$$
\text{WWS} = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot x_i
$$

dengan interpretasi kategori (Rafi & Putra, 2024):

$$
\text{Kategori} =
\begin{cases}
\text{Rendah}, & 0 \leq \text{WWS} < 25 \\
\text{Sedang}, & 25 \leq \text{WWS} < 50 \\
\text{Tinggi}, & 50 \leq \text{WWS} < 75 \\
\text{Sangat Tinggi}, & 75 \leq \text{WWS} \leq 100
\end{cases}
$$

### 2.2 Work Sampling

*Work sampling* adalah teknik statistik untuk menentukan proporsi waktu yang dicurahkan pada berbagai aktivitas melalui pengamatan acak instan (*instantaneous random observation*). Formulasi jumlah pengamatan minimum mengikuti teorema limit pusat dengan tingkat kepercayaan tertentu:

$$
N = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^{2}}
$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal standar (misal 1,96 untuk $\alpha = 0{,}05$), $p$ adalah proporsi aktivitas yang diestimasi (default 0,5 untuk konservatif), dan $e$ adalah *margin of error* yang dapat ditoleransi (umumnya 5%–10%).

Proporsi waktu suatu aktivitas $A_k$ dihitung melalui:

$$
P(A_k) = \frac{n_k}{N_{\text{total}}} \times 100\%
$$

dengan *confidence interval*:

$$
CI_{95\%} = P(A_k) \pm Z_{0,025} \sqrt{\frac{P(A_k)\bigl(1-P(A_k)\bigr)}{N_{\text{total}}}}
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi integrasi NASA-TLX dan *work sampling* mengikuti SOP terstruktur yang diadopsi dari Rafi & Putra (2024) serta Aditya.R & Putra (2024):

**Langkah 1 — Penentuan Tujuan & Ruang Lingkup.**
Definisikan *unit analysis* (individu operator, shift, atau stasiun kerja) dan variabel dependen (WWS, produktivitas, *error rate*).

**Langkah 2 — Perancangan Protokol Pengamatan.**
Tetapkan jumlah pengamatan $N$ menggunakan rumus *work sampling* di atas. Untuk Shopee Express hub dengan 30 operator pada *confidence level* 95% dan *error* 5%, diperoleh $N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = 384{,}16 \approx 385$ pengamatan.

**Langkah 3 — Pengacakan Jadwal Pengamatan.**
Gunakan *random number generator* untuk menentukan waktu kunjungan (misal setiap 2 menit selama jam kerja 8 jam = 240 observasi/hari × 2 hari = 480 observasi).

**Langkah 4 — Pelaksanaan Work Sampling.**
Observer mencatat aktivitas dominan operator pada momen pengamatan: sortasi, *picking*, *packing*, input data ke aplikasi, istirahat, menunggu antrian, dan lain-lain.

**Langkah 5 — Pemberian Kuesioner NASA-TLX.**
Setiap operator mengisi kuesioner NASA-TLX pada akhir shift. Bobot ditentukan melalui aplikasi *paper-based* atau digital (Likert 0–100).

**Langkah 6 — Analisis & Interpretasi.**
Hitung WWS individu dan rata-rata kelompok. Lakukan *correlation analysis* (Pearson/Spearman) antara proporsi aktivitas fisik (PD) dan WWS.

```
[Diagram Alir Metodologi]

┌─────────────────────┐
│ Identifikasi Masalah│
└──────────┬──────────┘
           ▼
┌─────────────────────────────┐
│ Tentukan N (work sampling) │
└──────────┬──────────────────┘
           ▼
┌──────────────────────────────────┐
│ Random Observation & Pencatatan │
│ Aktivitas Operator               │
└──────────┬───────────────────────┘
           ▼
┌──────────────────────────────────┐
│ Kuesioner NASA-TLX (Raw + Pair) │
└──────────┬───────────────────────┘
           ▼
┌────────────────────────────────────┐
│ Hitung WWS = Σ(wi·xi)/15           │
└──────────┬─────────────────────────┘
           ▼
┌────────────────────────────────────┐
│ Korelasi Workload vs Aktivitas     │
└──────────┬─────────────────────────┘
           ▼
┌────────────────────────────────────┐
│ Rekomendasi Desain Sistem Kerja    │
└────────────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus
Sebuah *fulfillment center* Shopee Express di Jakarta menangani rata-rata 8.000 paket/hari dengan 25 operator sortasi. Manajemen menduga beban kerja mental terlalu tinggi pada shift siang. Data primer dikumpulkan dari 10 operator sampel (Rafi & Putra, 2024).

**Tabel 1. Hasil Raw TLX dan Bobot Pairwise Comparison**

| Operator | MD | PD | TD | P | E | F |
|---|---|---|---|---|---|---|
| OP-01 | 75 | 60 | 80 | 40 | 70 | 65 |
| OP-02 | 70 | 65 | 75 | 50 | 65 | 60 |
| OP-03 | 80 | 70 | 85 | 35 | 75 | 70 |
| OP-04 | 65 | 55 | 70 | 55 | 60 | 55 |
| OP-05 | 85 | 75 | 90 | 30 | 80 | 75 |
| OP-06 | 72 | 62 | 78 | 45 | 68 | 62 |
| OP-07 | 78 | 68 | 82 | 38 | 72 | 68 |
| OP-08 | 68 | 58 | 72 | 48 | 62 | 58 |
| OP-09 | 82 | 72 | 88 | 32 | 78 | 72 |
| OP-10 | 74 | 64 | 80 | 42 | 70 | 64 |

**Tabel 2. Hasil Pairwise Comparison (Aggregat 10 Responden)**

| Subkala | Menang Berpasangan | Bobot ($w_i$) |
|---|---|---|
| Mental Demand (MD) | 95 | 5 |
| Physical Demand (PD) | 65 | 4 |
| Temporal Demand (TD) | 110 | 5 |
| Performance (P) | 22 | 1 |
| Effort (E) | 75 | 4 |
| Frustration (F) | 35 | 2 |
| **Total** | **402** | **15+6*≈21** |

*Catatan: Dalam praktiknya, tiap responden menghasilkan 15 bobot dari 15 perbandingan, sehingga total agregat dapat melebihi 15. Untuk konsistensi, digunakan normalisasi:* $w_i^{\text{norm}} = \dfrac{w_i}{\sum w_i^{\text{raw}}} \times 15$.

### 4.2 Perhitungan Step-by-Step (Operator OP-05 — Kasus Ekstrem)

Mentah: MD=85, PD=75, TD=90, P=30, E=80, F=75.

**Langkah