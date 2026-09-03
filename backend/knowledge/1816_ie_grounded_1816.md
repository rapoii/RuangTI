# 1816 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri logistik *last-mile* di Indonesia mengalami ekspansi masif sejak 2019, dipicu oleh akselerasi perdagangan elektronik pasca-pandemi COVID-19. Shopee Express sebagai salah satu mitra pengiriman Shopee menghadapi tantangan struktural berupa lonjakan volume parcel yang bersifat musiman (*seasonal spikes*) seperti pada Harbolnas 12.12, 11.11, dan Ramadan. Muhammad Rafi dan Boy Isma Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) secara eksplisit menyoroti bahwa karyawan *Shopee Express Partner* di hub-sortation menghadapi beban kerja kognitif yang fluktuatif akibat kombinasi antara target throughput harian, kompleksitas *scanning barcode*, verifikasi alamat, dan tekanan SLA (*Service Level Agreement*) pengiriman 24 jam. Kondisi ini menjadi krusial karena beban kerja mental yang tidak terukur berisiko menurunkan *human reliability*, meningkatkan *error rate* sortir, hingga menimbulkan *burnout* dan *turnover* yang merugikan secara ekonomis.

Secara ekonomis, biaya rekrutmen dan pelatihan satu orang kurir sortir di Indonesia berada pada kisaran Rp 1,5–3 juta per karyawan, sehingga setiap insiden kelelahan mental yang berujung pada kesalahan operasional (*mis-sort*, *lost parcel*) berdampak langsung pada *Cost of Poor Quality* (COPQ). Rafi & Putra (2024) berargumen bahwa tanpa instrumentasi psikometrik yang valid, manajemen cenderung hanya mengandalkan parameter fisik (jumlah parcel per jam) tanpa memperhitungkan dimensi kognitif seperti *mental demand*, *temporal demand*, dan *frustration*. Penelitian ini mengisi kesenjangan (*research gap*) tersebut dengan mengaplikasikan NASA Task Load Index (NASA-TLX), sebuah instrumen multidimensi yang telah teruji validitasnya secara internasional pada lingkungan operasional misi ulang-alik NASA dan telah diadaptasi ke berbagai konteks industri manufaktur serta jasa.

Studi pendukung dari M. Andre Aditya.R dan Boy Isma Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat relevansi topik dengan menunjukkan bahwa pada operator gudang, kombinasi *work sampling* (pengukuran utilisasi waktu kerja) dan NASA-TLX (pengukuran beban mental) mampu memberikan rekomendasi manajerial yang lebih komprehensif dibanding penggunaan salah satu metode secara tunggal. Kedua paper ini, yang diterbitkan pada tahun yang sama dengan basis metodologis identik, menunjukkan adanya konsistensi temuan bahwa operator logistik modern menghadapi *cognitive load* yang sebanding dengan *physical load*, sehingga diperlukan paradigma ergonomi kognitif (*cognitive ergonomics*) yang setara dengan ergonomi fisik dalam perancangan sistem kerja.

Urgensi penelitian ini juga didorong oleh tren otomasi sortir yang belum merata di Indonesia. Banyak hub *Shopee Express Partner* di tier-2 dan tier-3 cities masih mengandalkan proses sortir manual dengan *handheld scanner*, di mana operator harus secara simultan membaca alamat visual, memvalidasi kode pos, memutuskan rute, dan menjaga kecepatan lini. Paparan simultan terhadap stimuli visuo-spasial dan tekanan temporal ini menjadikan NASA-TLX sebagai instrument yang sangat relevan karena mampu mengkuantifikasi keenam dimensi beban kerja secara terpisah maupun agregat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX dikembangkan oleh Sandra Hart dan Lowell Staveland (1988) sebagai instrumen pengukuran subjektif beban kerja yang terdiri dari enam subskala, yaitu:

1. **Mental Demand (MD)** — beban aktivitas kognitif (berpikir, memutuskan, mengamati).
2. **Physical Demand (PD)** — beban aktivitas fisik.
3. **Temporal Demand (TD)** — beban terkait tekanan waktu.
4. **Performance (P)** — persepsi keberhasilan penyelesaian tugas.
5. **Effort (E)** — usaha yang dikeluarkan untuk mencapai level performance.
6. **Frustration (F)** — tingkat irritasi, stres, dan ketidaknyamanan.

Setiap subskala dinilai menggunakan *Likert-type scale* 0–100 (*visual analog scale* dengan tick mark setiap 5 poin). Pada metode **Raw NASA-TLX (unweighted)**, skor total dihitung sebagai rata-rata keenam dimensi:

$$TLX_{raw} = \frac{MD + PD + TD + P + E + F}{6}$$

Namun, Rafi & Putra (2024) menerapkan versi **Weighted NASA-TLX** yang lebih robust melalui prosedur *card sorting* berisi 15 pasangan perbandingan berpasangan (*pairwise comparison*). Dari 15 perbandingan tersebut, setiap subskala memperoleh bobot $w_i \in \{0,1,2,3,4,5\}$. Skor total Weighted NASA-TLX diformulasikan sebagai:

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $r_i$ adalah *raw rating* subskala ke-$i$ dan pembagi 15 adalah jumlah maksimum bobot yang mungkin (jika satu subskala memenangkan seluruh 5 perbandingan). Hasil $TLX_{weighted}$ berada pada rentang 0–100 dan dikategorikan menggunakan *cut-off* berikut (mengacu pada Hancock & Meshkati, 1988, yang dirujuk oleh Rafi & Putra, 2024):

- **0–20**: Beban kerja rendah (*low load*) — operator memiliki kapasitas cadangan.
- **21–40**: Beban kerja optimal (*optimal load*) — target produktivitas seimbang dengan kapasitas mental.
- **41–60**: Beban kerja cukup tinggi (*moderate-high load*) — perlu monitoring.
- **61–80**: Beban kerja tinggi (*high load*) — risiko kelelahan mental meningkat.
- **81–100**: Beban kerja sangat tinggi (*very high load*) — risiko *human error* dan *burnout* sangat signifikan.

### 2.2 Work Sampling dan Penentuan Ukuran Sampel

Studi pendukung Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengaplikasikan *work sampling* untuk mengukur proporsi waktu kerja yang dihabiskan pada aktivitas produktif, *delay*, dan *idle*. Jumlah observasi minimum yang diperlukan ditentukan menggunakan rumus statistik inferensial untuk proporsi:

$$N = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^{2}}$$

di mana:
- $Z_{\alpha/2}$ = nilai Z distribusi normal pada tingkat kepercayaan $(1-\alpha)$, umumnya 1,96 untuk $\alpha=0,05$ (95% confidence).
- $p$ = proporsi aktivitas yang diestimasi (untuk konservatif digunakan $p=0,5$ sehingga $p(1-p)$ maksimum $=0,25$).
- $e$ = *margin of error* yang dapat diterima (umumnya 0,05 atau 5%).

Untuk populasi terbatas (*finite population* dengan total shift $K$), применяется koreksi *finite population*:

$$N_{adjusted} = \frac{N}{1 + \frac{N-1}{K}}$$

### 2.3 Perhitungan Waktu Standar

Setelah diperoleh proporsi waktu kerja produktif melalui work sampling, waktu standar (*standard time*) dihitung menggunakan pendekatan *Performance Rating* dan *Allowance*:

$$T_{normal} = T_{observed} \times R_p$$

$$T_{standard} = T_{normal} \times (1 + A)$$

di mana $R_p$ adalah *rating factor* (umumnya 100% untuk operator berpengalaman) dan $A$ adalah *allowance* (faktor kelonggaran untuk kebutuhan pribadi, kelelahan, dan hambatan tak terhindarkan, umumnya 10–20%).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX dan work sampling di lingkungan operator logistik mengikuti SOP lima tahap yang dirangkum dari kedua paper di atas:

### 3.1 Diagram Alir Proses

```
[Tahap 1: Identifikasi Sistem Kerja]
        ↓
[Pemetaan Aktivitas: sortir, scanning, loading, unloading, istirahat]
        ↓
[Tahap 2: Penentuan Sampel & Desain Instrumen]
        ↓
┌───────────────────────────────────────────┐
│ Work Sampling: jadwal observasi random    │
│ NASA-TLX: kuesioner 6-dimensi + card sort │
└───────────────────────────────────────────┘
        ↓
[Tahap 3: Pengumpulan Data di Lapangan]
        ↓
[Tahap 4: Perhitungan Skor TLX & Proporsi Aktivitas]
        ↓
[Tahap 5: Analisis, Rekomendasi & Feedback Loop ke Manajemen]
```

### 3.2 Prosedur Detail

**Tahap 1 — Identifikasi Sistem Kerja.** Lakukan *job analysis* dengan teknik *interview*, *observation*, dan tinjauan SOP sortir Shopee. Identifikasi sub-aktivitas seperti *induction scan*, *sortation decision*, *loading ke armada*, dan *pemberian informasi ke customer*.

**Tahap 2 — Desain Instrumen.** Siapkan formulir NASA-TLX dalam Bahasa Indonesia dengan instruksi terstandar (Hart, 2006). Siapkan formulir *card sorting* berisi 15 pasangan perbandingan. Untuk work sampling, gunakan tabel observasi dengan kolom waktu (misal interval 2 menit selama 8 jam = 240 observasi per operator per hari).

**Tahap 3 — Pengumpulan Data.** Libatkan minimal 10–15 operator sebagai responden (Rafi & Putra, 2024). Lakukan pre-shift briefing, berikan kuesioner pada akhir shift untuk mengurangi bias *recency effect*, dan jalankan work sampling oleh pengamat terlatih yang *blind* terhadap tujuan penelitian untuk menghindari *observer bias*.

**Tahap 4 — Perhitungan.** Hitung skor TLX per individu menggunakan Persamaan (2) dan agregatkan. Hitung proporsi aktivitas dari data work sampling dan tentukan jumlah observasi minimum via Persamaan (3).

**Tahap 5 — Rekomendasi.** Bandingkan skor dengan *cut-off* kategori, identifikasi subskala dominan (misalnya jika *Temporal Demand* dan *Frustration* tertinggi, fokuskan intervensi pada penjadwalan dan *workload smoothing*), dan buat rekomendasi seperti rotasi tugas, penambahan *buffer time*, atau redesign *layout* hub.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis Sortasi Shopee Express Hub X

Ambil kasus operator sortir di sebuah hub *Shopee Express Partner* dengan karakteristik mirip subjek penelitian Rafi & Putra (2024). Misalkan dilakukan pengukuran pada 5 operator selama satu shift dengan data sebagai berikut:

**Tabel 1. Raw Rating NASA-TLX per Operator (skala 0–100)**

| Operator | MD | PD | TD | P | E | F |
|----------|----|----|----|----|----|----|
| Op-1 | 75 | 60 | 80 | 40 | 70 | 65 |
| Op-2 | 70 | 55 | 75 | 45 | 65 | 60 |
| Op-3 | 80 | 65 | 85 | 35 | 75 | 70 |
| Op-4 | 65 | 50 | 70 | 50 | 60 | 55 |
| Op-5 | 78 | 62 | 82 | 38 | 72 | 68 |

**Tabel 2. Bobot dari Card Sorting untuk Operator Op-3 (contoh)**

Misalkan dari 15 perbandingan, Op-3 memperoleh bobot sebagai berikut: $w_{MD}=5$, $w_{PD}=2$, $w_{TD}=4$, $w_P=1$, $w_E=3$, $w_F=0$.

**Langkah 1 — Perhitungan Weighted TLX Op-3:**

$$TLX_{Op-3} = \frac{(5)(80) + (2)(65) + (4)(85) + (1)(35) + (3)(75) + (0)(70)}{15}$$

$$TLX_{Op-3} = \frac{400 + 130 + 340 + 35 + 225 + 0}{15} = \frac{1130}{15} \approx 75{,}33$$

**Langkah 2 — Interpretasi:** Skor 75,33 berada pada rentang **61–80** → kategori *high load*. Sub-dimensi dominan adalah *Mental Demand* (bobot 5, rating 80) dan *Temporal Demand* (bobot 4, rating 85), mengindikasikan tekanan kognitif dan waktu sebagai sumber utama beban.

**Langkah 3 — Perhitungan Work Sampling untuk Validasi Eksternal:**

Ambil data observasi 240 kali dalam satu shift (interval 2 menit) untuk Op-3 dengan hasil:
- Aktivitas sortir aktif: 156 observasi
- *Delay* (menunggu parcel, scanner error): 54 observasi
- *Idle*/istirahat: 30 observasi

Proporsi sortir aktif: $\hat{p} = 156/240 = 0{,}65$ (65