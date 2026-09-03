# 2376 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *last-mile* di Indonesia mengalami transformasi masif pasca-pandemi COVID-19, terutama didorong oleh pertumbuhan ekonomi digital yang menurut data Bank Indonesia menembus nilai transaksi lebih dari Rp 400 triliun pada 2023. Shopee Express, sebagai salah satu unit layanan kurir internal ekosistem Shopee (di bawah naungan Sea Group), menghadapi tantangan operasional yang khas: fluktuasi volume parcel yang tinggi musiman (misalnya saat Harbolnas 11.11, 12.12, dan Ramadan), kompleksitas routing di wilayah urban padat, serta ekspektasi *Same-Day Delivery* yang menekan waktu siklus (cycle time) kurir mitra (*partner*). Muhammad Rafi dan Boy Isma Putra (2024) dalam artikel yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) mitra kurir Shopee Express menjadi variabel laten yang sangat menentukan kualitas layanan, keselamatan kerja, dan retensi karyawan.

Konteks industrialnya sangat relevan dengan persoalan Teknik Industri modern: bagaimana mengkuantifikasi *cognitive load* dan *psychosocial strain* pekerja lapangan yang tidak dapat diukur hanya dengan jam kerja absolut (*man-hours*). Studi tersebut mengadopsi metode NASA-TLX (Task Load Index) yang telah terbukti secara empiris sebagai instrumen subjektif terstandarisasi untuk mengukur beban kerja multidimensional, berbeda dengan pengukuran beban kerja fisik tradisional (misalnya pulsa kerja atau calorimetri). Studi komplementer dari M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas применение NASA-TLX ke operator gudang dengan mengombinasikannya bersama *Work Sampling*, memberikan pendekatan hybrid yang menangkap baik dimensi kognitif maupun distribusi aktivitas aktual di lantai produksi pergudangan.

Urgensi ekonomis dan teknis dari penelitian ini sangat jelas. Pertama, turnover kurir last-mile di Indonesia tercatat di atas 40% per tahun menurut data internal beberapa perusahaan rintisan (*startup*) logistik, sehingga memahami pemicu kelelahan mental krusial untuk strategi *employee retention*. Kedua, kecelakaan kerja yang melibatkan kurir—terutama insiden kendaraan bermotor—sering dikaitkan dengan kelelahan kognitif dan *decision fatigue* saat memprioritaskan rute. Ketiga, dari perspektif *Industrial Engineering*, beban kerja mental yang tidak terkelola akan menurunkan produktivitas throughput (parcel per kurir per hari) sekaligus meningkatkan *Return-to-Origin* (RTO) rate, yang secara langsung menggerus margin operasional. Oleh karena itu, framework NASA-TLX yang diperkenalkan Rafi & Putra (2024) bukan sekadar alat ukur akademis, melainkan instrumen rekayasa yang dapat diintegrasikan ke dalam *Standard Operating Procedure* (SOP) penjadwalan dan rotasi tugas kurir mitra.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh Sandra G. Hart dan Lowell E. Staveland (1988) di NASA Ames Research Center. Instrumen ini mengukur beban kerja pada enam dimensi, yaitu:

1. **Mental Demand (MD)** — usaha kognitif yang dibutuhkan (berpikir, memutuskan, mengamati).
2. **Physical Demand (PD)** — usaha fisik yang dibutuhkan.
3. **Temporal Demand (TD)** — tekanan waktu yang dirasakan.
4. **Performance (PE)** — persepsi pekerja terhadap keberhasilannya mencapai tujuan.
5. **Effort (EF)** — usaha total (mental + fisik) untuk mencapai level performansi.
6. **Frustration (FR)** — tingkat irritasi, stres, atau ketidakpuasan selama tugas.

Tahapan metodologis NASA-TLX mengikuti protokol dua fase (Hart, 2006):

**Fase 1 — Pairwise Comparison (15 pasangan):**
Responden memilih dimensi mana yang lebih dominan memberikan kontribusi terhadap beban kerja pada pasangan dimensi $(i,j)$, dengan $i \neq j$ dan $i,j \in \{MD, PD, TD, PE, EF, FR\}$. Jumlah pasangan adalah:

$$N_{pair} = \binom{6}{2} = \frac{6!}{2! \cdot 4!} = 15 \text{ pasangan}$$

**Fase 2 — Rating (skala 0–100):**
Responden memberikan skor $R_i \in [0, 100]$ untuk setiap dimensi $i$.

**Bobot $W_i$** dihitung dari jumlah kemenangan (wins) setiap dimensi pada Fase 1, dengan rentang:

$$W_i \in \{0, 1, 2, 3, 4, 5\}, \quad \sum_{i=1}^{6} W_i = 15$$

**Skor Total NASA-TLX (Weighted Average):**

$$\text{NASA-TLX}_{total} = \frac{\sum_{i=1}^{6} (R_i \times W_i)}{\sum_{i=1}^{6} W_i} = \frac{\sum_{i=1}^{6} R_i \cdot W_i}{15}$$

Skor ini diklasifikasikan (mengikuti konvensi Hart & Staveland, 1988) sebagai:

| Rentang Skor | Kategori Beban Kerja |
|:------------:|:--------------------:|
| 0 – 20       | Sangat Rendah        |
| 21 – 40      | Rendah               |
| 41 – 60      | Sedang               |
| 61 – 80      | Tinggi               |
| 81 – 100     | Sangat Tinggi        |

### 2.2. Work Sampling (Sampling Pekerjaan)

Untuk studi operator gudang (Aditya.R & Putra, 2024), pendekatan *Work Sampling* yang diperkenalkan oleh L. Tippet (1935) digunakan. Prinsipnya: dari $N$ observasi acak terhadap pekerja, proporsi waktu yang dihabiskan untuk aktivitas tertentu $k$ adalah:

$$\hat{p}_k = \frac{n_k}{N}, \quad k = 1, 2, \ldots, m$$

dengan $n_k$ adalah jumlah observasi di mana pekerja melakukan aktivitas $k$.

**Penentuan ukuran sampel minimum** dengan tingkat kepercayaan $(1-\alpha)$ dan *margin of error* $e$:

$$N_{min} = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{e^2}$$

Untuk $p = 0{,}5$ (kasus paling konservatif karena $p(1-p)$ maksimum) pada $\alpha = 0{,}05$ sehingga $Z_{0{,}025} = 1{,}96$ dan $e = 0{,}05$:

$$N_{min} = \frac{(1{,}96)^2 \cdot 0{,}25}{0{,}0025} = \frac{0{,}9604}{0{,}0025} \approx 384 \text{ observasi}$$

### 2.3. Integrasi Work Sampling + NASA-TLX (Hybrid)

Pendekatan hybrid yang diusulkan Aditya.R & Putra (2024) menghitung *effective cognitive load per unit waktu aktif*:

$$\text{Load}_{eff} = \frac{\text{NASA-TLX}_{total}}{T_{active}}$$

dengan $T_{active} = \hat{p}_{productive} \cdot T_{shift}$ adalah fraksi waktu produktif dalam satu shift.

### 2.4. Uji Validitas dan Reliabilitas

Untuk memastikan konsistensi internal instrumen, digunakan Cronbach's Alpha:

$$\alpha_{Cronbach} = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k}\sigma^2_{R_i}}{\sigma^2_{total}}\right)$$

dengan $k=6$ dimensi dan $\sigma^2_{R_i}$ adalah varians skor dimensi $i$. Nilai $\alpha \geq 0{,}70$ dianggap reliabel (Nunnally, 1978).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Pelaksanaan NASA-TLX untuk Kurir Mitra Shopee Express

```
┌──────────────────────────────────────┐
│  Tahap 1: Identifikasi populasi &    │
│  penentuan sampel (Stratified Random) │
│  n = (Z²·σ²)/e² dengan σ estimasi    │
│  dari pilot study (n=30)             │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 2: Pembuatan kuesioner NASA-  │
│  TLX versi digital (Google Form /    │
│  aplikasi internal Shopee)           │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 3: Sosialisasi & informed     │
│  consent; briefing responden tentang │
│  definisi operasional keenam dimensi│
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 4: Pengisian kuesioner        │
│  - Pairwise Comparison (15 pairs)    │
│  - Rating 0-100 per dimensi          │
│  Dilakukan setelah 1 shift penuh     │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 5: Perhitungan W_i (skor 0-5)│
│  dan R_i (skor 0-100); hitung        │
│  NASA-TLX_total = Σ(R_i·W_i)/15      │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 6: Uji reliabilitas           │
│  (Cronbach's α ≥ 0,70)              │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 7: Analisis korelasi NASA-TLX │
│  dengan KPI operasional              │
│  (parcel/hari, RTO%, overtime)       │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  Tahap 8: Rekomendasi rekayasa:      │
│  rotasi shift, training, redesign    │
│  rute, insentif berbasis workload    │
└──────────────────────────────────────┘
```

### 3.2. SOP Integrasi NASA-TLX ke dalam Sistem Manajemen SDM

**Langkah 1 — Baseline Assessment:** Lakukan pengukuran NASA-TLX triwulanan terhadap minimal 10% mitra aktif sebagai *control group*.

**Langkah 2 — Threshold Alert:** Tetapkan *threshold* skor NASA-TLX total ≥ 75 sebagai pemicu *automatic review* oleh *Area Coordinator*. Jika terlampaui 2 periode berturut-turut, kurir wajib menjalani *coaching session*.

**Langkah 3 — Workload Balancing Algorithm:** Gunakan hasil skor dimensi $TD$ (temporal demand) dan $FR$ (frustration) sebagai input algoritma redistribusi parcel, dengan formula alokasi:

$$\text{Parcel}_i = \text{Parcel}_{base} \cdot \left(1 - \beta \cdot \frac{\text{NASA-TLX}_i