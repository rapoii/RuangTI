# 2552 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dengan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Ergonomi Kognitif dan Perancangan Sistem Kerja
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *e-commerce* di Asia Tenggara mengalami ekspansi eksponensial pasca-2020, didorong oleh digitalisasi konsumsi rumah tangga, pola *mobile commerce*, serta integrasi platform *over-the-top* (OTT) seperti Shopee, Tokopedia, dan Lazada. Di Indonesia, volume pengiriman paket harian Shopee Express melalui ekosistem *Shopee Partner* melonjak signifikan, menempatkan mitra kurir (Partner Employee) sebagai *first-mile* dan *last-mile* operator yang paling rentan terhadap akumulasi beban kerja mental. Muhammad Rafi dan Boy Isma Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) mendokumentasikan fenomena ini secara empiris melalui asesmen beban kognitif terhadap mitra Shopee Express di Sumatera, menemukan bahwa kombinasi *routing density*, fluktuasi permintaan musiman, serta tekanan *Service Level Agreement* (SLA) 24–48 jam menghasilkan profil beban mental yang fluktuatif sepanjang shift.

Urgensi penelitian ini diperkuat oleh tiga faktor struktural. Pertama, **fragmentasi tenaga kerja gig**: lebih dari 70% kurir *e-commerce* merupakan pekerja informal dengan jam kerja tidak teratur, *income volatility*, dan paparan stressor kognitif tinggi (rute kompleks, alamat ambigu, pelanggan sulit). Kedua, **insiden keselamatan dan human error**: kelelahan mental (*mental fatigue*) terbukti meningkatkan kesalahan *scanning*, *missort*, dan *misdelivery*, yang menurunkan *first-attempt delivery rate* (FADR) menjadi titik kritis bagi margin operasional. Ketiga, **regulasi ketenagakerjaan** melalui UU Cipta Kerja dan Permenaker No. 5/2018 tentang Keselamatan dan Kesehatan Kerja menuntut pengusaha untuk melakukan identifikasi, pengukuran, dan pengendalian bahaya psikososial.

Paper kedua yang ditulis oleh M. Andre Aditya.R dan Boy Isma Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat fondasi metodologis dengan mengintegrasikan NASA-TLX ke dalam *Work Sampling* di lingkungan operator gudang (*warehouse operators*), membuktikan bahwa metode subjektif terstandar ISO dapat digabungkan dengan teknik observasi statistik untuk triangulasi data beban kerja. Sinergi dua paper tersebut membentuk basis bukti (*evidence base*) bagi pengembangan SOP *cognitive ergonomics* di industri *fulfillment*.

Dalam konteks industri, pendekatan tradisional *time-and-motion study* ala Taylor-FW Gilbreth gagal menangkap dimensi kognitif, afektif, dan temporal yang menjadi determinan utama produktivitas kurir modern. NASA-TLX (Hart & Staveland, 1988) muncul sebagai instrumen subjektif yang telah divalidasi secara psikometrik lintas budaya dan lintas profesi, menjadikannya *gold standard* untuk asesmen beban mental di lingkungan kerja dinamis. Penerapan metode ini pada mitra Shopee Express memungkinkan manajer operasional membuat keputusan *rostering*, *route optimization*, dan *capacity planning* berbasis data kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual NASA-TLX

NASA-TLX mengukur beban kerja total sebagai kombinasi terbobot dari enam subskala multidimensi yang merepresentasikan dimensi beban intrinsik manusia. Keenam subskala tersebut adalah: **Mental Demand (MD)**, **Physical Demand (PD)**, **Temporal Demand (TD)**, **Performance (PE)**, **Effort (EF)**, dan **Frustration (FR)**. Setiap subskala dinilai pada skala bipolar *Likert* 0–100 dengan interval 5 poin (0 = sangat rendah, 100 = sangat tinggi), kecuali subskala Performance yang menggunakan semantik terbalik (rendah = kinerja buruk, tinggi = kinerja baik).

Skor total NASA-TLX dihitung menggunakan persamaan terbobot (*weighted raw TLX*, *WR-TLX*):

$$\text{TLX}_{\text{weighted}} = \sum_{i=1}^{6} w_i \cdot r_i$$

di mana $w_i$ adalah bobot kontribusi relatif subskala ke-$i$ yang diperoleh dari prosedur *card-sort pair-wise comparison* (15 pasangan), dan $r_i$ adalah rating responden pada subskala ke-$i$. Bobot $w_i$ berskala 0–5 (jumlah kemenangan dari 5 perbandingan relevan per subskala), sehingga rentang skor total menjadi:

$$0 \leq \text{TLX}_{\text{weighted}} \leq 500$$

Normalisasi ke skala 0–100 dilakukan melalui:

$$\text{TLX}_{\text{norm}} = \frac{\text{TLX}_{\text{weighted}}}{5} \in [0, 100]$$

### 2.2 Prosedur Pair-Wise Comparison

Untuk setiap responden, dilakukan 15 perbandingan berpasangan ($\binom{6}{2} = 15$) yang membentuk matriks simetris $C_{6 \times 6}$ dengan elemen:

$$c_{ij} = \begin{cases} 1, & \text{jika subskala } i \text{ lebih dominan daripada } j \\ 0, & \text{jika subskala } j \text{ lebih dominan} \end{cases}$$

Bobot subskala $w_i$ merupakan jumlah baris (atau kolom) yang bernilai 1:

$$w_i = \sum_{j=1}^{6} c_{ij}$$

Agregasi lintas responden menggunakan rerata tertimbang atau modus proporsional.

### 2.3 Work Sampling sebagai Teknik Sampling Aktivitas

M. Andre Aditya.R dan Boy Isma Putra (2024) melengkapi kerangka kerja dengan *Work Sampling* yang diformalisasikan oleh statistik sampling acak. Proporsi waktu yang dihabiskan untuk aktivitas tertentu $p$ diestimasi oleh:

$$\hat{p} = \frac{n_A}{N}$$

dengan $n_A$ adalah jumlah observasi aktivitas $A$, dan $N$ adalah total observasi. Penentuan ukuran sampel minimum menggunakan rumus Cochran dengan *confidence level* $(1-\alpha)$ dan *margin of error* $E$:

$$n_0 = \frac{Z^2 \cdot p \cdot q}{E^2}$$

dengan $p = 0{,}5$ (konservatif untuk varians maksimum), $q = 1-p$, dan $Z$ adalah nilai kritis distribusi normal standar. Untuk populasi observasi terbatas dalam satu shift $N_{\text{shift}}$, koreksi populasi有限 diterapkan:

$$n = \frac{n_0}{1 + \frac{n_0 - 1}{N_{\text{shift}}}}$$

Interval kepercayaan untuk $\hat{p}$ adalah:

$$\hat{p} \pm Z \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{N_{\text{effective}}}}$$

### 2.4 Model Beban Kerja Komposit

Paper Rafi & Putra (2024) mengusulkan model beban kerja komposit yang menggabungkan intensitas subjektif NASA-TLX dengan laju kejadian aktivitas (frekuensi *pickup*, *delivery*, *scan fail*). Indeks beban kerja operator $\beta$ didefinisikan sebagai:

$$\beta = \alpha_1 \cdot \text{TLX}_{\text{norm}} + \alpha_2 \cdot f_{\text{err}} + \alpha_3 \cdot \rho_{\text{util}}$$

dengan $f_{\text{err}}$ adalah frekuensi error per jam, $\rho_{\text{util}}$ adalah utilisasi operator (proporsi waktu kerja efektif terhadap total waktu tersedia), dan $\alpha_k$ adalah koefisien yang dikalibrasi melalui regresi linier. Model ini memungkinkan manajer operasi memetakan operator ke dalam kuadran *risk matrix* (4×4) antara *workload level* dan *error proneness*.

### 2.5 Klasifikasi Tingkat Beban Kerja

Mengikuti konvensi Hart (2006), skor NASA-TLX ternormalisasi diklasifikasikan ke dalam tiga zona:

$$\text{Zona Beban} = \begin{cases} \text{Rendah}, & 0 \leq \text{TLX}_{\text{norm}} < 33{,}3 \\ \text{Sedang}, & 33{,}3 \leq \text{TLX}_{\text{norm}} < 66{,}7 \\ \text{Tinggi}, & 66{,}7 \leq \text{TLX}_{\text{norm}} \leq 100 \end{cases}$$

Zona tinggi mengindikasikan kebutuhan intervensi ergonomi, redistribusi rute, atau penambahan *buffer time*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Sistematis

Implementasi NASA-TLX pada operator Shopee Express mengikuti protokol lima tahap yang distandarkan pada kedua paper rujukan (Rafi & Putra, 2024; Aditya.R & Putra, 2024). Diagram alir SOP adalah sebagai berikut:

```
┌──────────────────────────────────────────────────────────┐
│ TAHAP 1: IDENTIFIKASI KONTEKS KERJA                       │
│   • Pemetaan岗位 (job description) operator               │
│   • Identifikasi stressor lingkungan (rut, traffic, jam)  │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ TAHAP 2: PEMILIHAN SAMPEL                                 │
│   • Stratified random sampling (shift pagi, siang, malam)│
│   • Penentuan n dengan rumus Cochran (α=5%, E=10%)       │
│   • Kriteria inklusi: min. 3 bulan pengalaman            │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ TAHAP 3: PENGUMPULAN DATA                                 │
│   • Pre-shift briefing & informed consent                 │
│   • Distribusi kuesioner NASA-TLX (paper form / mobile)  │
│   • Work sampling dengan random time observation         │
│   • Pengukuran objective: scan rate, error rate, KM      │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ TAHAP 4: ANALISIS DATA                                    │
│   • Perhitungan bobot pair-wise comparison                │
│   • Agregasi skor TLX weighted                           │
│   • Statistik deskriptif & inferensial (uji beda)        │
│   • Pemetaan zona beban (rendah/sedang/tinggi)           │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ TAHAP 5: REKOMENDASI & FEEDBACK LOOP                      │
│   • Modifikasi rute (route rebalancing)                   │
│   • Penjadwalan shift (rotasi shift)                      │
│   • Redesain SOP pick-up / delivery                       │
│   • Monitoring berkala (Q1: review, Q2: re-assessment)   │
└──────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Pair-Wise Comparison (Detail)

Responden diminta memilih dari 15 pasangan subskala, subskala mana yang "lebih berkontribusi terhadap beban kerja" dalam pekerjaannya. Contoh pasangan: (MD vs PD), (MD vs TD), (MD vs PE), (MD vs EF), (MD vs FR), dan seterusnya hingga (EF vs FR). Hasilnya ditabulasi dalam matriks triangular bawah dan dijumlahkan untuk memperoleh bobot $w_i$.

### 3.3 Integrasi dengan Work Sampling

Aditya.R & Putra (2024) mengintegrasikan work sampling dengan NASA-TLX melalui *continuous time sampling* menggunakan aplikasi *random reminder* yang membunyikan alarm setiap 2 menit selama shift 8 jam. Total observasi potensial: $8 \times 60 / 2 = 240$ per operator. Aktivitas diklasifikasikan ke dalam kategori: *productive work* (picking, packing, scanning), *supporting work* (merchandising, talking with supervisor), *idle* (waiting, restroom), dan *non-productive* (personal phone, chatting).

### 3.4 Standar Operasional Prosedur Pengendalian Beban Kerja

Berdasarkan rekomendasi Rafi & Putra (2024), SOP mitigasi mencakup:

1. **Penetapan batas atas skor TLX harian**: $\text{TLX}_{\text{weighted}} \leq 350$ (norm $\leq 70$); pelampauan berturut-turut 3 hari memicu *intervention review*.
2. **Maximum consecutive driving time**: 4 jam, diikuti istirahat wajib 30 menit (selaras dengan UU No. 22/2009 tentang Lalu Lintas).
3. **Workload-adjusted incentive**: tarif *per-parcel* ditambah premium 15% jika utilisasi $< 60\%$ untuk mencegah under-utilization.
4. **Ergonomic training**: 8 jam/tahun untuk *mental resilience*, *task segmentation*, dan *stress management*.

---