# 1992 — Analisis Beban Kerja Mental pada Operator Logistik E-Commerce Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analisis Beban Kerja Mental dengan Metode NASA-TLX (National Aeronautics and Space Administration – Task Load Index)
**Jurnal & Sitasi Utama:** Muhammad Rafi & Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R & Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada 2030 (McKinsey Global Institute, 2023) telah mengubah secara fundamental struktur permintaan terhadap jasa logistik *last-mile delivery*. Shopee Express, sebagai salah satu tulang punggung ekosistem pengiriman Sea Group/Shopee, mengandalkan jaringan *partner employees* (karyawan mitra) yang beroperasi pada titik-titik *drop-point*, *sortation hub*, dan rute pengiriman *last-mile*. Dalam operasional harian, pekerja ini menghadapi multi-tasking ekstrem: menerima barang dari *seller*, memvalidasi kode pelacakan pada aplikasi *handheld terminal* (HT), menyortir berdasarkan zona destinasi, berkomunikasi dengan pelanggan melalui telepon atau WhatsApp, serta menavigasi rute di tengah ketidakpastian lalu lintas urban Jakarta, Surabaya, atau Medan.

Muhammad Rafi dan Boy Isma Putra (2024) dalam studi mereka yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja (*workload*) bukan lagi fenomena yang dapat diukur secara tunggal. Beban fisik (pengangkatan paket 5–20 kg), beban kognitif (pengambilan keputusan di bawah tekanan SLA 24 jam), dan beban emosional (interaksi dengan pelanggan yang mengeluh keterlambatan) membentuk sebuah konstelasi multidimensional. Studi Aditya.R dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat argumentasi tersebut dengan menunjukkan bahwa operator gudang yang bekerja dalam shift malam memiliki *combined mental-physical workload* yang dapat menurunkan produktivitas *picking* hingga 18% bila tidak di-*redesign*.

Urgensi manajerial dari pengukuran beban kerja mental ini sangat nyata: standar Occupational Safety and Health Administration (OSHA) dan Keputusan Menteri Ketenagakerjaan No. KEP.51/MEN/1999 tentang Fisiologi Kerja mengharuskan雇主 untuk memastikan beban kerja tidak melebihi kapasitas fisiologis-psikologis pekerja. Kegagalan memenuhi standar ini berpotensi menurunkan *service level agreement* (SLA) pengiriman, meningkatkan *employee turnover* (rata-rata 35% per tahun di industri kurir Indonesia menurut Asosiasi Logistik Indonesia/ALI, 2023), serta menimbulkan kerugian ekonomi langsung berupa *rework cost*, *overtime premium*, dan kompensasi medis. Oleh karena itu, adopsi instrumen subjektif terstandar seperti NASA-TLX menjadi kebutuhan rekayasa yang tidak terhindarkan.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (Hart & Staveland, 1988) merupakan instrumen multidimensional yang membagi beban kerja ke dalam enam subskala. Setiap responden memberikan dua jenis input: (1) ***rating*** berupa skala bipolar 0–100 untuk setiap dimensi, dan (2) ***weight*** berupa hasil perbandingan berpasangan (*pairwise comparison*) antar-dimensi. Terdapat $\binom{6}{2} = 15$ pasangan perbandingan, sehingga total bobot yang terdistribusi adalah 15.

**Definisi Keenam Dimensi NASA-TLX:**

| Simbol | Dimensi | Deskripsi Operasional |
| :---: | :--- | :--- |
| $M$ | Mental Demand | Aktivitas berpikir, memutuskan, menghitung, memantau |
| $P$ | Physical Demand | Aktivitas fisik (mendorong, mengangkat, berjalan) |
| $T$ | Temporal Demand | Tekanan waktu, kecepatan respons yang dibutuhkan |
| $O$ | Performance | Persepsi keberhasilan pencapaian target |
| $E$ | Effort | Total usaha mental & fisik yang dicurahkan |
| $F$ | Frustration | Tingkat frustasi, stres, iritasi saat bekerja |

**Formulasi 1 – Raw TLX (Tanpa Bobot):**

$$TLX_{raw} = \frac{M + P + T + O + E + F}{6}$$

Nilai ini merepresentasikan rata-rata sederhana dan berguna untuk *screening* cepat.

**Formulasi 2 – Weighted TLX (Skor Final):**

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot R_i}{\sum_{i=1}^{6} w_i} = \frac{w_M M + w_P P + w_T T + w_O O + w_E E + w_F F}{15}$$

di mana $w_i \in \{0, 1, 2, 3, 4, 5\}$ adalah bobot hasil *pairwise comparison* dengan $\sum_{i=1}^{6} w_i = 15$, dan $R_i \in [0,100]$ adalah *rating* dimensi ke-$i$.

**Formulasi 3 – Klasifikasi Beban Kerja:**

$$Kategori = \begin{cases} \text{Rendah}, & TLX_{weighted} < 50 \\ \text{Sedang}, & 50 \leq TLX_{weighted} \leq 70 \\ \text{Tinggi}, & TLX_{weighted} > 70 \end{cases}$$

**Formulasi Pelengkap – Validitas Statistik (Cronbach's Alpha):**

Pengukuran reliabilitas internal keenam subskala divalidasi menggunakan koefisien alpha Cronbach:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_i^2}{\sigma_T^2}\right)$$

dengan $k=6$ (jumlah subskala), $\sigma_i^2$ varian tiap subskala, dan $\sigma_T^2$ varian skor total. Instrumen dianggap reliabel bila $\alpha \geq 0{,}70$ (Nunnally, 1978).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express mengikuti protokol enam tahap yang distandarkan berdasarkan ISO 9241-210 (Human-Centred Design) dan praktik dari Rafi & Putra (2024):

**Tahap 1 – Identifikasi Populasi & Sampling.**
Tentukan *sampling frame* menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

di mana $N$ = jumlah mitra aktif dan $e$ = margin of error (umumnya $0{,}05$ hingga $0{,}10$). Rafi & Putra (2024) merekomendasikan minimal 30 responden untuk menjamin *central limit theorem* berlaku pada distribusi $TLX_{weighted}$.

**Tahap 2 – Konstruksi Kuesioner.**
Gunakan *digital form* (Google Form / LimeSurvey) dengan dua bagian: (a) halaman pembobotan 15 pasangan dimensi menggunakan kartu visual (*card sorting*), dan (b) halaman *rating* 6 dimensi menggunakan *slider* 0–100.

**Tahap 3 – Briefing & Pra-Uji.**
Sesi *briefing* 15 menit untuk memastikan responden memahami konteks tugas. Pra-uji (*pilot test*) pada 5 responden pertama; data pilot dihitung Cronbach's alpha; bila $\alpha < 0{,}70$, revisi instrument dilakukan.

**Tahap 4 – Pengumpulan Data.**
Pengisian kuesioner di akhir shift, dengan supervisi enumerator terlatih. Durasi pengisian 10–20 menit. Kompensasi waktu (*coffee break*) diberikan agar tidak mengganggu produktivitas.

**Tahap 5 – Perhitungan & Uji Statistik.**
Hitung $w_i$ dari matriks *pairwise* (setiap pasangan yang "menang" menambah 1 pada bobotnya). Hitung $TLX_{weighted}$ untuk tiap responden. Uji normalitas (Shapiro-Wilk), uji beda (ANOVA atau Kruskal-Wallis untuk perbandingan antar-shift), dan uji korelasi (Spearman) antara dimensi.

**Tahap 6 – Rekomendasi Rekayasa.**
Hasilkan rekomendasi terstruktur: (a) redistribusi tugas, (b) *automation* proses bernilai tambah rendah, (c) penyesuaian *headcount*, (d) desain ulang *workstation ergonomis*, dan (e) program *mental health & resilience training*.

**Diagram Alir Proses:**

```
┌─────────────────────────┐
│ Identifikasi Masalah &  │
│  Ruang Lingkup          │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Sampling (Slovin n)     │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Pilot Test + Uji Alpha  │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Pengumpulan Data (HT/PC)│
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Hitung wi dari 15       │
│ Pairwise Comparisons    │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Hitung TLX_weighted     │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Klasifikasi (R/S/T)     │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Uji Statistik &         │
│ Rekomendasi Rekayasa    │
└─────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Shopee Express Hub Cililitan – Shift Siang**

Studi kasus ini mengilustrasikan penerapan formula pada 5 mitra Shopee Express yang beroperasi di *sortation hub* Cililitan, Jakarta Timur. Kelima responden (R1–R5) telah mengisi kuesioner NASA-TLX lengkap. Data *pairwise comparison* disederhanakan sebagai berikut (1 = dimensi kiri lebih dominan, 0 = kanan; total bobot = 15):

| Responden | $w_M$ | $w_P$ | $w_T$ | $w_O$ | $w_E$ | $w_F$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| R1 | 4 | 2 | 3 | 1 | 3 | 2 |
| R2 | 3 | 3 | 2 | 0 | 4 | 3 |
| R3 | 5 | 1 | 3 | 0 | 4 | 2 |
| R4 | 2 | 4 | 3 | 1 | 2 | 3 |
| R5 | 3 | 2 | 4 | 0 | 3 | 3 |

**Rating (0–100):**

| Responden | $M$ | $P$ | $T$ | $O$ | $E$ | $F$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| R1 | 75 | 60 | 80 | 40 | 70 | 55 |
| R2 | 80 | 70 | 75 | 30 | 75 | 60 |
| R3 | 85 | 55 |