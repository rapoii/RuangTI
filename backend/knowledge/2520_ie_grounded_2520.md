# 2520 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Upskill: Jurnal Pendidikan dan Pengembangan Sumber Daya Manusia*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri logistik e-commerce di Indonesia mengalami ekspansi eksponensial sejak pandemi COVID-19, dengan nilai transaksi menembus lebih dari Rp 450 triliun pada 2023 dan menempatkan Indonesia sebagai pasar e-commerce terbesar di Asia Tenggara. Shopee Express, sebagai salah satu mitra pengiriman utama dalam ekosistem Sea Group, mengoperasikan ribuan *partner* (mitra kurir dan operator gudang) yang tersebar di lebih dari 500 kota. Dalam konteks operasional ini, *mental workload* (beban kerja mental) menjadi variabel kritis yang jarang diukur secara kuantitatif, padahal secara langsung mempengaruhi tingkat kelelahan, *human error*, angka kecelakaan kerja, dan pada akhirnya *service level agreement* (SLA) pengiriman.

Paper Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) secara eksplisit mengkaji permasalahan ini dengan mengajukan NASA-TLX (*NASA Task Load Index*) sebagai instrumen pengukuran subjektif yang telah tervalidasi secara psikometrik. Studi ini berangkat dari hipotesis bahwa kurir Shopee Express menghadapi kombinasi unik antara tekanan temporal (target pengiriman harian), kompleksitas kognitif (verifikasi paket, navigasi rute, penyelesaian sengketa COD), dan ketidakpastian lingkungan (cuaca, kemacetan, perilaku konsumen). Aditya.R & Putra (2024) dalam DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi analisis tersebut dengan mengintegrasikan *Work Sampling* untuk mendapatkan profil utilisasi waktu kerja operator gudang, sehingga membentuk kerangka holistik yang mengukur baik beban kerja mental maupun produktivitas fisik.

Urgensi riset ini terletak pada tiga hal: (1) regulasi Keselamatan dan Kesehatan Kerja (UU No. 1 Tahun 1970 jo. Permenaker No. 5/2018) yang mengamanatkan pengukuran beban kerja sebagai dasar penentuan jam kerja dan istirahat; (2) *Total Cost of Ownership* tenaga kerja yang meningkat seiring turnover kurir yang mencapai 40–60% per tahun di industri *last-mile delivery*; (3) kelangkaan metodologi terapan yang mengintegrasikan pengukuran subjektif dan objektif secara simultan untuk SDM informal sektor logistik. Modul ini menyintesisasikan kedua paper tersebut menjadi kerangka rekayasa yang dapat direplikasi oleh praktisi Teknik Industri di berbagai lini operasional rantai pasok e-commerce, manufaktur, dan pergudangan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX (Hart & Staveland, 1988) adalah instrumen multidimensi yang mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|:------:|:--------|:----------------------|
| $r_{MD}$ | Mental Demand | Kebutuhan aktivitas berpikir, memutuskan, dan memproses informasi |
| $r_{PD}$ | Physical Demand | Kebutuhan aktivitas fisik (berjalan, mengangkat, mengendarai) |
| $r_{TD}$ | Temporal Demand | Tingkat tekanan waktu terhadap penyelesaian tugas |
| $r_{PE}$ | Performance | Pencapaian target任务 (skor rendah = kinerja buruk = beban tinggi) |
| $r_{EF}$ | Effort | Usaha keras yang dikeluarkan untuk mencapai target |
| $r_{FR}$ | Frustration | Tingkat irritasi, stress, dan ketidaknyamanan saat bekerja |

Setiap dimensi dinilai pada skala *Likert* 0–100 yang dibagi menjadi 20 tingkatan (masing-masing kelipatan 5). Terdapat dua metrik agregat yang digunakan:

**Raw TLX (Unweighted):**
$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} r_i = \frac{r_{MD} + r_{PD} + r_{TD} + r_{PE} + r_{EF} + r_{FR}}{6}$$

**Weighted TLX:**
Pada tahap kedua, responden melakukan 15 *pairwise comparison* ($C(6,2) = 15$) untuk menentukan bobot relatif $w_i$ dari setiap dimensi. Bobot dinormalisasi sehingga $\sum_{i=1}^{6} w_i = 15$ (bukan 1). Skor akhir dihitung sebagai:
$$TLX_{w} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

Karena setiap $w_i \in \{0, 1, 2, \ldots, 5\}$ dan $\sum w_i = 15$, maka $TLX_{w}$ tetap berada pada rentang 0–100. Interpretasi beban kerja mengikuti klasifikasi:

$$TLX_{w} \in \begin{cases} [0, 20] & \text{Rendah} \\ (20, 50] & \text{Sedang} \\ (50, 80] & \text{Tinggi} \\ (80, 100] & \text{Sangat Tinggi} \end{cases}$$

### 2.2 Work Sampling

Work Sampling adalah teknik observasi *instantaneous* berdasarkan hukum probabilitas untuk menentukan proporsi waktu yang dihabiskan pada berbagai kategori aktivitas. Penentuan jumlah pengamatan minimum mengikuti rumus *Slovin* yang dimodifikasi:

$$n = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{E^{2}}$$

Untuk populasi terbatas ($N$已知):
$$n_{adj} = \frac{N \cdot Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{(N-1)\cdot E^{2} + Z_{\alpha/2}^{2}\cdot p\cdot(1-p)}$$

dengan:
- $Z_{\alpha/2}$ = nilai Z tabel untuk tingkat kepercayaan $(1-\alpha)$ (umumnya 1,96 pada $\alpha = 0,05$)
- $p$ = proporsi aktivitas yang diestimasi (default 0,5 untuk *worst case*)
- $E$ = *margin of error* yang dapat diterima (umumnya 0,05 atau 5%)

**Validitas Reliabilitas:**
Setelah pengumpulan data, validitas diuji menggunakan batas kesalahan absolut:
$$\sigma_p = \sqrt{\frac{p(1-p)}{n-1}}$$
$$B = Z_{\alpha/2} \cdot \sigma_p$$

Pengukuran dianggap reliabel apabila $B \leq E$.

**Tingkat Utilisasi:**
$$U = \frac{\sum_{i=1}^{k} f_i^{produktif}}{n_{total}} \times 100\%$$

dengan $f_i^{produktif}$ adalah frekuensi observasi pada kategori produktif (picking, packing, sortir, loading) dan $k$ adalah jumlah kategori aktivitas.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Berikut adalah *Standard Operating Procedure* (SOP) yang diadaptasi dari Rafi & Putra (2024) dan Aditya.R & Putra (2024) untuk implementasi di lapangan:

**Tahap 1 — Preparasi (Minggu ke-1)**
1. Identifikasi populasi kerja ($N$ kurir/operator aktif per *hub*).
2. Tentukan *sampling frame* menggunakan *stratified random sampling* berdasarkan shift dan zona operasional.
3. Siapkan kuesioner NASA-TLX versi cetak/digital dan *form* observasi *work sampling*.

**Tahap 2 — Pengumpulan Data Work Sampling (Minggu ke-2)**
1. Lakukan observasi *round* setiap 60 detik selama 8 jam per hari selama 5 hari kerja.
2. Total pengamatan yang harus dilakukan disesuaikan dengan rumus Slovin (lihat §2.2).
3. *Observer* mencatat kategori aktivitas: produktif, non-produktif (menunggu, istirahat), dan *delay* (system).

**Tahap 3 — Pengukuran NASA-TLX (Minggu ke-3)**
1. Distribuasikan kuesioner kepada seluruh responden pada akhir shift.
2. Responden menilai keenam dimensi pada skala 0–100.
3. Responden menyelesaikan 15 *pairwise comparison* untuk mendapatkan bobot.

**Tahap 4 — Analisis & Validasi (Minggu ke-4)**
1. Hitung $TLX_{raw}$ dan $TLX_{w}$ per individu, lalu agregasi per *hub*.
2. Lakukan uji reliabilitas *Cronbach's Alpha* ($\alpha \geq 0,70$).
3. Hitung $B$ untuk *work sampling*; apabila $B > E$, tambah jumlah observasi.

**Tahap 5 — Rekomendasi Engineering (Minggu ke-5)**
1. *Job redesign* jika $TLX_{w} > 80$.
2. Redistribusi shift jika $U < 75\%$.
3. Pelatihan khusus pada dimensi dengan bobot tertinggi.

Diagram alir logika keputusan:
```
[Pengukuran TLX_w & U] → IF TLX_w > 80 THEN Job Redesign URGENT
                        → ELSEIF U < 75% THEN Redistribusi Shift
                        → ELSE Monitoring Rutin