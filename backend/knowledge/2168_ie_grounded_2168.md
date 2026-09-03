# 2168 — Analisis Beban Kerja Mental Operator Logistik Last-Mile Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami pertumbuhan eksponensial sejak dekade terakhir, dengan nilai transaksi bruto (GMV) nasional menembus lebih dari USD 50 miliar per tahun dan proyeksi CAGR sekitar 12-15% (Bain & Company, 2023). Di dalam arsitektur rantai pasok digital tersebut, sektor logistik *last-mile*—yakni tahap distribusi paket dari *sortation hub* hingga ke tangan konsumen akhir—menjadi titik kritis yang menyerap 53% dari total biaya logistik (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Shopee Express, sebagai salah satu *in-house logistics* (IHL) terbesar di Asia Tenggara, mengelola jutaan *parcel* per hari melalui jaringan mitra (*partner*) yang bersifat *gig-economy* dan berbasis *on-demand dispatching*. Karakteristik inilah yang menimbulkan tantangan ergonomis dan kognitif unik: pekerja tidak hanya menghadapi beban fisik pengangkutan paket, tetapi juga tekanan mental berupa *target Sortir Per Jam* (SPH), Window-Time Delivery (WTD), validasi alamat melalui aplikasi *mobile*, serta risiko *penalty* atas *misroute* dan *Failed Delivery Attempt* (FDA).

Rafi & Putra (2024) menyoroti bahwa karyawan mitra Shopee Express yang beroperasi di *last-mile hub* memiliki paparan beban kerja mental yang belum dipetakan secara kuantitatif, padahal dalam *standard operating procedure* (SOP) SLP-2023 sudah diatur bahwa batas beban kerja mental operator sortir tidak boleh melampaui skor NASA-TLX 80 (kategori *high load*). Studi tersebut menggunakan NASA-TLX (Task Load Index) yang dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi pada lebih dari 500 studi ergonomis di seluruh dunia, dengan *Cronbach's alpha* 0,72-0,83 untuk keenam dimensinya (Rafi & Putra, 2024). Sementara itu, Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat landasan empiris dengan menerapkan *work sampling* untuk memetakan proporsi waktu kerja efektif operator gudang, yang ternyata hanya berkisar 62-68% dari total jam kerja, dengan 18-22% tersita untuk aktivitas *idle* dan *waiting* yang justru meningkatkan beban kumulatif mental.

Urgensi penelitian ini diperkuat oleh data *turnover* mitra Shopee Express yang mencapai 38% per tahun (Rafi & Putra, 2024), di mana 47% alasan *resign* disebabkan oleh kelelahan dan tekanan target. Dari perspektif Teknik Industri, fenomena ini merepresentasikan inefisiensi sistemik yang melanggar prinsip *human factors engineering*: desain pekerjaan (*job design*) tidak *fit* terhadap kapasitas kognitif operator. Oleh karena itu, integrasi NASA-TLX dengan *work sampling* menjadi kerangka analitis yang mampu mengkuantifikasi secara simultan intensitas beban (*intensity*) dan distribusi waktu kerja (*time allocation*), sehingga rekomendasi perbaikan berupa *staffing adjustment*, *redesign workstation*, atau *rest break scheduling* dapat dijustifikasi secara ilmiah dan terstruktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensi yang mengukur beban kerja subjektif berdasarkan enam skala, sebagaimana dikutip Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

1. **Mental Demand (MD)** – demands of cognitive activity
2. **Physical Demand (PD)** – demands of physical activity
3. **Temporal Demand (TD)** – time pressure
4. **Performance (PE)** – perceived success in accomplishing goals
5. **Effort (EF)** – amount of work exerted
6. **Frustration (FR)** – insecurity, discouragement, irritation

Setiap dimensi dinilai pada rentang **0–100** melalui *Likert-type bipolar scale*. Keenam rating kemudian dibobotkan menggunakan teknik *pairwise comparison* (15 pasang) untuk memperoleh bobot dimensi $w_i$:

$$w_i = \frac{\text{jumlah kemenangan dimensi } i \text{ dalam pairwise comparison}}{15}, \quad i \in \{MD, PD, TD, PE, EF, FR\}$$

dengan kendala:

$$\sum_{i=1}^{6} w_i = 1$$

*Raw Task Load* (RTLX) untuk subjek $k$ dirumuskan sebagai:

$$\text{RTLX}_k = \frac{1}{6} \sum_{i=1}^{6} R_{i,k}$$

sedangkan *Weighted Task Load* (WTLX)—yang merupakan skor akhir NASA-TLX—dihitung menggunakan:

$$\text{WTLX}_k = \sum_{i=1}^{6} w_i \cdot R_{i,k} \tag{1}$$

dengan $R_{i,k}$ adalah *raw rating* dimensi $i$ dari subjek $k$. Skor WTLX dikategorikan (Rafi & Putra, 2024):

$$\text{WTLX}_k = \begin{cases} 0-20 & \text{(Low Load)} \\ 21-40 & \text{(Medium Load)} \\ 41-60 & \text{(Somewhat High Load)} \\ 61-80 & \text{(High Load)} \\ 81-100 & \text{(Very High Load)} \end{cases}$$

### 2.2 Work Sampling

Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) menerapkan *work sampling* untuk mengukur proporsi waktu pada kategori aktivitas operator gudang. Penentuan jumlah observasi minimum menggunakan rumus *Niebel & Freivalds* (2014) untuk tingkat keyakinan $1-\alpha$ dan presisi $S$:

$$N = \frac{Z_{\alpha/2}^2 \cdot p \cdot (1-p)}{S^2} \tag{2}$$

dengan:
- $Z_{\alpha/2}$ = nilai *z-score* pada tingkat kepercayaan $(1-\alpha)$
- $p$ = proporsi aktivitas yang diperkirakan (umumnya $p = 0{,}5$ untuk konservatif)
- $S$ = *allowable error* atau presisi absolut

Untuk $1-\alpha = 95\%$ dan $S = 0{,}05$, maka:

$$N = \frac{(1{,}96)^2 \cdot (0{,}5)(0{,}5)}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

Interval observasi acak ditentukan melalui *random number generator* dengan:

$$t_j = j \cdot \frac{T}{N}, \quad j = 1, 2, \ldots, N \tag{3}$$

dengan $T$ = total waktu pengamatan (misal 8 jam = 480 menit). Proporsi setiap kategori aktivitas $a$ diestimasi sebagai:

$$\hat{p}_a = \frac{n_a}{N} \tag{4}$$

dengan *confidence interval*:

$$\hat{p}_a \pm Z_{\alpha/2} \sqrt{\frac{\hat{p}_a (1-\hat{p}_a)}{N}} \tag{5}$$

### 2.3 Normalized Workload Index (NWI)

Untuk mengintegrasikan skor NASA-TLX dengan hasil *work sampling*, Rafi & Putra (2024) mengusulkan *Normalized Workload Index*:

$$\text{NWI} = \frac{\text{WTLX} \times T_{\text{effective}}}{T_{\text{total}}} \tag{6}$$

dengan $T_{\text{effective}}$ = total waktu aktivitas produktif (tidak termasuk *idle*, *waiting*, dan *personal*). Formulasi ini merepresentasikan intensitas beban kumulatif per satuan waktu kerja riil.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi mengikuti kerangka lima-tahap yang diadaptasi dari ISO 10075 (Ergonomic Principles Related to Mental Workload) dan dilaporkan oleh Rafi & Putra (2024):

### Tahap 1 — Penentuan Ruang Lingkup & Stratifikasi Responden
Stratifikasi responden berdasarkan tiga variabel kontrol: (a) shift kerja (pagi/siang/malam), (b) pengalaman kerja (<6 bulan, 6–18 bulan, >18 bulan), dan (c) volume paket harian (low: <500, medium: 500–1500, high: >1500 paket). Minimum sampel dihitung menggunakan *Slovin's formula*:

$$n = \frac{N_0}{1 + N_0 \cdot e^2} \tag{7}$$

dengan $N_0$ = populasi dan $e$ = *margin of error* (5%). Untuk populasi 120 mitra di satu *hub*, maka $n = 120/(1+120 \cdot 0{,}0025) = 92{,}3 \approx 93$ responden.

### Tahap 2 — Pretest & Validasi Kuesioner
Kuesioner NASA-TLX versi Indonesia di-*back-translate* dan diuji *reliability* menggunakan *Cronbach's alpha*. Hasil Rafi & Putra (2024) menunjukkan $\alpha = 0{,}847$ (acceptable), dengan nilai *item-total correlation* 0,521–0,792.

### Tahap 3 — Pengumpulan Data Primer
Pelaksanaan *work sampling* menggunakan aplikasi *random observer* (android-based) dengan interval random 90–150 detik selama 5 hari kerja berturut. Dua pengamat terlatih melakukan observasi untuk menguji *inter-rater reliability* dengan *Cohen's Kappa*:

$$\kappa = \frac{p_o - p_e}{1 - p_e} \tag{8}$$

Hasil Aditya.R & Putra (2024) menunjukkan $\kappa = 0{,}82$ (sangat baik).

### Tahap 4 — Analisis Data
- Statistik deskriptif skor WTLX per dimensi
- Uji beda *Independent t-test* atau *Mann-Whitney U* antar kelompok
- Regresi linier berganda untuk menentukan faktor dominan beban mental:

$$\text{WTLX} = \beta_0 + \beta_1 \text{Volume} + \beta_2 \text{Shift} + \beta_3 \text{Experience} + \varepsilon \tag{9}$$

- Penghitungan NWI (Persamaan 6).

### Tahap 5 — Rekomendasi & Implementasi SOP
Hasil digunakan untuk menyusun rekomendasi berbasis *hierarchy of controls* (Niebel & Freivalds, 2014): (a) eliminasi (redesain SOP), (b) substitusi (rotasi shift), (c) rekayasa (workstation ergonomis), (d) administratif (penyesuaian target SPH), (e) PPE (pelatihan manajemen stres).

```
┌──────────────────────────────────────────────┐
│   ALUR ANALISIS NASA-TLX + WORK SAMPLING    │
├──────────────────────────────────────────────┤
│ [1] Identifikasi populasi mitra              │
│           ↓                                  │
│ [2] Slovin → n minimum                       │
│           ↓                                  │
│ [3] Cronbach α pretest kuesioner             │
│           ↓                                  │
│ [4] Pengisian kuesioner + Work Sampling      │
│           ↓                                  │
│ [5] Hitung w_i via pairwise comparison       │
│           ↓                                  │
│ [6] Hitung WTLX, RTLX, NWI                   │
│           ↓                                  │
│ [7] Uji beda & regresi                       │
│           ↓                                  │
│ [8] Pemetaan kategori beban (Low–Very High)  │
│           ↓                                  │
│ [9] Rekomendasi rekayasa                     │
└──────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Kasus
Misalkan sebuah *sortation hub* Shopee Express di Tangerang memiliki 30 operator sortir shift siang. Operator A—seorang mitra pria, usia 27 tahun, pengalaman 14 bulan—bekerja selama 8 jam (480 menit) dengan volume 1.250 paket. Hasil observasi *work sampling* (N = 400 kali observasi) menghasilkan distribusi aktivitas sebagai berikut:

| Kategori Aktivitas | $n_a$ | $\hat{p}_a$ |
|---|---|---|
| Sortir & Scanning | 208 | 0,520 |
| Loading ke armada | 64 | 0,160 |
| Validasi alamat via aplikasi | 56 | 0,140 |
| *Idle*/Menunggu | 48 | 0,120 |
| *Personal* (istirahat/ke toilet) | 24 | 0,060 |
| **Total** | **400** | **1,000** |

### 4.2 Perhitungan Confidence Interval
Untuk aktivitas sortir ($\hat{p} = 0{,}520$):

$$\text{CI}_{95\%} = 0{,}520 \pm 1{,}96 \sqrt{\frac{0{,}520 \cdot 0{,}480}{400}} = 0{,}520 \pm 0{,}0489$$

jadi proporsi waktu sortir berada pada rentang $[0{,}471; 0{,}569]$ (47,1%–56,9%). Hal ini menunjukkan bahwa utilisasi efektif sortir sudah cukup tinggi namun masih ada celah *idle* 12% yang mengindikasikan *waiting time* untuk armada.

### 4.3 Perhitungan NASA-TLX Operator A
Hasil kuesioner Operator A:

| Dimensi | $R_i$ | Kemenangan Pairwise | $w_i$ |
|---|---|---|---|
| Mental Demand | 75 | 4 | 0,