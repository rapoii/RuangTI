# 2680 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Studi Kasus Shopee Express dan Aplikasi Lintas Sektor Gudang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *e-commerce* di Indonesia mengalami pertumbuhan eksponensial dalam satu dekade terakhir, didorong oleh penetrasi platform digital seperti Shopee, Tokopedia, dan Lazada. Shopee sebagai salah satu *marketplace* terbesar di Asia Tenggara mengandalkan jaringan kemitraan (*Shopee Express Partner/SEJATI*) untuk menangani *last-mile delivery* — tahap paling kritis sekaligus paling rentan terhadap inefisiensi dalam rantai pasok digital. Rafi dan Putra (2024) dalam studi terindeks DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa karyawan *partner* Shopee Express menghadapi beban operasional yang kompleks: mulai dari pemilahan paket (*sorting*), perencanaan rute dinamis, navigasi berbasis aplikasi, verifikasi kode OTP pelanggan, hingga penanganan barang retur. Kompleksitas kognitif ini sering kali tidak tercermin dalam indikator produktivitas konvensional seperti jumlah paket per hari.

Urgensi penelitian ini terletak pada tiga dimensi. Pertama, dari perspektif **Keselamatan dan Kesehatan Kerja (K3)**, beban kerja mental berlebih merupakan *root cause* utama kelelahan kognitif (*cognitive fatigue*) yang berimplikasi pada peningkatan *human error*, kecelakaan kerja ringan, dan *burnout*. Kedua, secara **ekonomi operasional**, kesalahan input data, *miss-route*, atau keterlambatan pengiriman akan menurunkan *Service Level Agreement (SLA)* dan *customer satisfaction score (CSAT)*, yang secara langsung memengaruhi reputasi platform. Ketiga, dari sudut pandang **rekayasa sistem tenaga kerja**, pengukuran objektif terhadap beban mental menjadi prasyarat untuk penentuan *headcount*, penjadwalan shift, dan perancangan *ergonomic workload distribution*.

Penelitian terdahulu dalam konteks serupa — seperti yang dilakukan Aditya dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) pada operator gudang (*warehouse operators*) — telah membuktikan bahwa kombinasi metode *Work Sampling* dan NASA-TLX mampu mengungkap *gap* antara beban kerja fisik dan mental yang selama ini tersembunyi. Adopsi metodologi NASA-TLX pada konteks *courier* Shopee Express menjadi ekstensi natural yang menjawab kebutuhan spesifik industri *gig economy logistics*, di mana pekerja tidak hanya bergerak secara fisik tetapi juga memproses informasi digital secara simultan (aplikasi, notifikasi, instruksi dispatcher).

Secara empiris, fenomena *peak season* seperti Harbolnas, Ramadan, dan 12.12 menjadi *stress test* bagi sistem logistik. Volume paket dapat melonjak 3–5 kali lipat dibanding hari normal, sementara kapasitas sumber daya manusia relatif inelastic dalam jangka pendek. Tanpa instrumentasi pengukuran beban kerja mental yang valid, manajer operasional cenderung membuat keputusan sub-optimal yang justru memperburuk kelelahan pekerja dan menurunkan kualitas layanan. Oleh karena itu, kerangka analitis berbasis NASA-TLX yang diajukan Rafi dan Putra (2024) bukan sekadar alat ukur akademis, melainkan *decision support system* strategis bagi manajemen operasional Shopee Express dalam merumuskan kebijakan rotasi shift, insentif berbasis beban kerja, dan redistribusi zona pengiriman.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (*NASA Task Load Index*) merupakan instrumen multidimensi yang dikembangkan oleh *Human Performance Group* NASA Ames Research Center (Hart & Staveland, 1988) untuk mengukur beban kerja secara subjektif namun terstandarisasi. Terdiri dari **enam subskala** yang masing-masing merepresentasikan dimensi beban kerja berbeda:

1. **Mental Demand (MD)** — aktivitas kognitif (menghitung, memutuskan, mengamati).
2. **Physical Demand (PD)** — aktivitas fisik (mendorong, mengangkat, berjalan).
3. **Temporal Demand (TD)** — tekanan waktu (*time pressure*).
4. **Performance (P)** — persepsi pekerja terhadap keberhasilan完成任务 (semakin rendah rating, semakin tinggi frustrasi terhadap capaian).
5. **Effort (E)** — usaha total yang dikeluarkan untuk mencapai kinerja.
6. **Frustration (F)** — tingkat kegelisahan, stres, dan ketidaknyamanan.

### 2.1 Formulasi Bobot (Weighting)

NASA-TLX menerapkan prosedur *pairwise comparison* terhadap keenam dimensi, menghasilkan $\binom{6}{2} = 15$ pasangan perbandingan. Setiap pasangan pekerja memilih dimensi yang lebih berkontribusi terhadap *workload* pada tugas spesifik tersebut. Bobot setiap dimensi $w_i$ didefinisikan sebagai:

$$w_i = \sum_{j=1, j\neq i}^{6} \mathbb{1}_{\{i \text{ dipilih dibanding } j\}}, \quad i = 1,2,\ldots,6$$

dengan $\mathbb{1}_{\{\cdot\}}$ adalah *indicator function*. Karena terdapat 15 pasangan, maka secara teoritis $\sum_{i=1}^{6} w_i = 15$, dan $w_i \in \{0, 1, 2, 3, 4, 5\}$.

### 2.2 Skor Raw TLX

Skor *raw* (tidak terbobot) merupakan rata-rata aritmetik keenam dimensi pada skala *Likert* 0–100 (skala garis 21 titik *Bipolar Likert*, granularitas 5):

$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} r_i$$

dengan $r_i \in [0, 100]$ adalah rating dimensi ke-$i$.

### 2.3 Skor Weighted TLX (Final Score)

Skor akhir NASA-TLX yang digunakan dalam analisis Rafi dan Putra (2024) adalah rata-rata terbobot:

$$TLX_{score} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

Karena $\sum w_i = 15$, maka penyederhanaan:

$$TLX_{score} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

### 2.4 Interpretasi Skor

Menurut Hart (2006), skor TLX dapat dikategorikan sebagai berikut:

| Rentang Skor | Kategori Beban Kerja | Implikasi Manajemen |
|--------------|---------------------|---------------------|
| $0 \leq TLX < 20$ | Sangat Rendah | Potensi *under-stimulation*, risiko *human error* karena monoton |
| $20 \leq TLX < 40$ | Rendah | Beban kerja dalam batas ideal |
| $40 \leq TLX < 60$ | Sedang–Tinggi | Mulai perlu intervensi ringan |
| $60 \leq TLX < 80$ | Tinggi | Risiko kelelahan, perlu rotasi |
| $80 \leq TLX \leq 100$ | Sangat Tinggi | *Burnout* imminent, redesign sistem kerja mendesak |

### 2.5 Statistik Inferensial

Untuk menguji signifikansi perbedaan beban kerja antar-kelompok (misalnya antar-shift pagi/siang/malam atau antar-zona metropolitan), digunakan uji *One-Way ANOVA*:

$$F = \frac{MS_{between}}{MS_{within}} = \frac{\sum_{k=1}^{K} n_k(\bar{x}_k - \bar{x})^2 / (K-1)}{\sum_{k=1}^{K}\sum_{j=1}^{n_k}(x_{kj} - \bar{x}_k)^2 / (N-K)}$$

dengan $K$ jumlah kelompok, $n_k$ ukuran sampel kelompok ke-$k$, dan $N = \sum n_k$. Tolak $H_0$ (semua mean sama) jika $F > F_{\alpha, K-1, N-K}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX pada konteks operator Shopee Express mengikuti prosedur terstruktur sebagai berikut:

**Tahap 1 — Penentuan Ruang Lingkup dan Sampling**
Identifikasi populasi pekerja *partner* Shopee Express pada hub/sortation center tertentu. Penentuan ukuran sampel menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = ukuran populasi, $e$ = *margin of error* (umumnya 5% atau 10%). Rafi dan Putra (2024) menggunakan *purposive sampling* pada pekerja yang telah memiliki pengalaman minimal 6 bulan untuk memastikan reliabilitas persepsi beban kerja.

**Tahap 2 — Instrumen dan Pelatihan Enumerator**
Kuesioner NASA-TLX versi digital/dicetak disediakan dalam dua bagian: (a) *Card-Like Rating Sheet* untuk rating 0–100 keenam dimensi, dan (b) *Pairwise Comparison Card* untuk pembobotan. Enumerator dilatih menggunakan *simulation training* agar instruksi seragam.

**Tahap 3 — Pengumpulan Data**
Pengisian kuesioner dilakukan *post-task* — yaitu setelah pekerja menyelesaikan shift atau setelah periode pengamatan 1–2 jam kerja riil di lapangan. Hal ini untuk memastikan recall beban kerja tetap akurat (*cognitive recall window* ≤ 4 jam).

**Tahap 4 — Perhitungan Manual/Terkomputerisasi**
Skor dihitung menggunakan persamaan pada Bagian 2. Perangkat lunak pendukung seperti SPSS, R, atau Python (paket `pandas` + `numpy`) digunakan untuk analisis statistik.

**Tahap 5 — Analisis dan Rekomendasi**
Tahap akhir menghasilkan rekomendasi berbasis data: redistribusi zona, penyesuaian kuota paket per shift, penambahan *helper* pada jam puncak, atau redesign *user interface* aplikasi kurir untuk menurunkan *Mental Demand*.

**Diagram Alir SOP NASA-TLX (Sintesis dari Rafi & Putra, 2024):**

```
┌──────────────────────┐
│ Identifikasi Populasi│
│ & Sampling (Slovin)  │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│  Pelatihan Enumerator│
│   & Validasi Kuesioner│
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Pengisian Kuesioner  │
│ (Post-Task ≤ 4 jam)  │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Hitung Bobot (PC) &  │
│ Rating (0-100)       │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Hitung TLX_score =   │
│ Σ(w_i·r_i)/15        │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Uji ANOVA/Komparasi  │
│ & Interpretasi Beban │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Rekomendasi Manajerial│
│ (Redesign, Rotasi)   │
└──────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan ilustrasi kuantitatif yang selaras dengan konteks studi Rafi dan Putra (2024), berikut adalah simulasi komputasional NASA-TLX untuk **10 kurir Shopee Express** pada shift siang di zona metropolitan Jakarta. Data berikut merepresentasikan tipikal operasional *last-mile delivery* pada hari normal (non-*peak season*).

### 4.1 Data Input Rating dan Bobot

Misalkan satu pekerja (Responden A) memberikan rating sebagai berikut:

| Dimensi ($i$) | Rating ($r_i$) | Bobot ($w_i$) | $w_i \cdot r_i$ |
|---|---|---|---|
| Mental Demand | 75 | 4 | 300 |
| Physical Demand | 60 | 2 | 120 |
| Temporal Demand | 80 | 5 | 400 |
| Performance | 30* | 1 | 30 |
| Effort | 70 | 2 | 140 |
| Frustration | 55 | 1 | 55 |
| **Total** | — | **15** | **1.045** |

*Catatan: Performance rendah (30) berarti persepsi pekerja terhadap keberhasilannya rendah — ini meningkatkan beban frustrasi.

### 4.2 Perhitungan TLX Score

$$TLX_{score} = \frac{1045}{15} \approx 69{,}67$$

Interpretasi: Responden A berada pada kategori **Tinggi** (60–80). Pekerja ini perlu dievaluasi untuk kemungkinan rotasi zona, pengurangan target pengiriman, atau *coaching* aplikasi navigasi.

### 4.3 Agregasi Multi-Responden

Untuk 10 responden dengan skor masing-masing:
$$S = \{72{,}5;\; 68{,}3;\; 81{,}2;\; 59{,}8;\; 64{,}1;\; 77{,}4;\; 55{,}0;\; 70{,}9;\; 63{,}2;\; 66{,}7\}$$

Rata-rata kelompok:

$$\bar{x} = \frac{1}{10}\sum_{j=1}^{10} S_j = \frac{679{,}1}{10} = 67{,}91$$

Standar deviasi sampel:

$$\sigma = \sqrt{\frac{\sum_{j=1}^{10}(S_j - \bar{x})^2}{n-1}}$$

Perhitungan selisih kuadrat: $\sum