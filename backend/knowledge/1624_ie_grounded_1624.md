# 1624 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *last-mile delivery* di Indonesia mengalami transformasi masif sejak akselerasi digitalisasi pascapandemi COVID-19. Shopee Express sebagai salah satu mitra pengiriman utama platform e-commerce Shopee di bawah naungan PT Shopee International Indonesia mengandalkan ribuan *partner* kurir yang tersebar di berbagai kota besar, termasuk hub operasional di Pekanbaru dan sekitarnya. Pertumbuhan volume paket yang meningkat rata-rata lebih dari 25% per tahun (data tren industri logistik nasional) menuntut produktivitas tinggi, namun di sisi lain menempatkan beban kognitif yang signifikan terhadap pekerja lapangan. Muhammad Rafi dan Boy Isma Putra (2024) dalam tulisannya di jurnal *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) mitra Shopee Express tidak hanya bersifat fisik, melainkan didominasi oleh tuntutan kognitif seperti navigasi rute, perhitungan target pengiriman harian, interaksi dengan pelanggan, serta tekanan waktu penyelesaian (*same-day delivery*).

Urgensi studi ini terletak pada fakta bahwa beban kerja mental yang tidak terukur dan tidak terkelola dengan baik berkorelasi langsung terhadap kelelahan, *human error*, attrition rate, dan kecelakaan kerja di lapangan. Di lingkungan pergudangan, M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) membuktikan bahwa kombinasi metode *Work Sampling* dan NASA-TLX mampu memberikan gambaran holistik tentang distribusi aktivitas operator gudang dan beban subjektif yang mereka rasakan. Kedua paper tersebut menjadi pondasi metodologis bagi praktisi Teknik Industri untuk melakukan *ergonomic assessment* berbasis bukti (*evidence-based*) di sektor logistik dan pergudangan, yang merupakan tulang punggung rantai pasok e-commerce Indonesia dengan nilai transaksi melebihi USD 80 miliar. Permasalahan yang diangkat bersifat praktis manajerial: bagaimana mengalokasikan SDM, merancang shift kerja, dan menetapkan target produktivitas yang realistis tanpa mengabaikan kapasitas kognitif pekerja.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh Hart dan Staveland (1988) untuk mengukur beban kerja subjektif berdasarkan enam dimensi, yaitu:

1. **Mental Demand (MD)** – tuntutan aktivitas kognitif.
2. **Physical Demand (PD)** – tuntutan aktivitas fisik.
3. **Temporal Demand (TD)** – tekanan waktu.
4. **Performance (PE)** – tingkat keberhasilan完成任务 yang dirasakan.
5. **Effort (EF)** – usaha yang dikeluarkan untuk完成任务.
6. **Frustration (FR)** – tingkat frustrasi/iritasi.

Setiap dimensi dinilai dengan skala *bipolar* 0–100. Bobot relatif (*weight*) diperoleh dari *pairwise comparison* sebanyak $\binom{6}{2}=15$ pasangan, menghasilkan total bobot $\sum_{i=1}^{6} w_i = 15$. **Weighted Workload (WWL)** dihitung sebagai:

$$WWL = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $r_i$ adalah *rating* dimensi ke-$i$ dan $w_i \in \{0,1,2,3,4,5\}$. Alternatifnya, *Raw TLX* (unweighted) dihitung sebagai:

$$RTLX = \frac{1}{6}\sum_{i=1}^{6} r_i$$

Interpretasi beban kerja berdasarkan skor WWL mengikuti kategori yang digunakan Rafi & Putra (2024): rendah ($0 \leq WWL \leq 25$), sedang ($26 \leq WWL \leq 50$), tinggi ($51 \leq WWL \leq 75$), dan sangat tinggi ($76 \leq WWL \leq 100$). Uji validitas instrumen menggunakan *Cronbach's Alpha*:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_i^2}{\sigma_T^2}\right)$$

dengan $k$ = jumlah item, $\sigma_i^2$ = varians item, $\sigma_T^2$ = varians total. Nilai $\alpha \geq 0.70$ dianggap reliabel.

### 2.2. Work Sampling

*Work Sampling* (WS) adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan pekerja pada berbagai aktivitas melalui pengamatan acak (*random instantaneous observation*). Penentuan jumlah pengamatan minimum menggunakan rumus:

$$n = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

di mana $Z$ = nilai standar normal pada tingkat kepercayaan tertentu (mis. $Z_{0.05}=1.96$), $p$ = proporsi aktivitas yang diestimasi (default $p=0.5$ untuk sampel maksimum), dan $e$ = *margin of error* yang dapat diterima. Selang kepercayaan proporsi aktivitas:

$$CI = p \pm Z\sqrt{\frac{p(1-p)}{n}}$$

Aditya.R & Putra (2024) mengkombinasikan WS (mengukur proporsi *productive time*, *idle time*, *supporting time*) dengan NASA-TLX (mengukur beban subjektif) untuk memperoleh *Workload Index* terintegrasi:

$$WI_{composite} = \alpha \cdot P_{productive} + \beta \cdot (1 - P_{idle}) + \gamma \cdot \frac{WWL}{100}$$

dengan $\alpha, \beta, \gamma$ adalah koefisien bobot manajerial yang disusun berdasarkan prioritas perusahaan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis NASA-TLX dan Work Sampling di lingkungan Shopee Express mengikuti SOP berikut (disintesis dari Rafi & Putra, 2024 serta Aditya.R & Putra, 2024):

**Tahap 1 – Persiapan dan Penentuan Sampel**
- Identifikasi populasi operator/kurir (N).
- Tentukan *margin of error* (umumnya 5%) dan tingkat kepercayaan 95%.
- Hitung $n_{TLX}$ menggunakan *purposive sampling* minimal 30 responden (memenuhi syarat CLT untuk analisis parametrik).
- Hitung $n_{WS}$ menggunakan rumus work sampling.

**Tahap 2 – Desain Instrumen**
- Kuesioner NASA-TLX versi cetak/digital dalam Bahasa Indonesia.
- Lembar observasi WS dengan kategori aktivitas (sortir, *packing*, *loading*, *delivery*, istirahat, dll.).
- Penjadwalan observasi acak dengan interval tidak tetap (*randomized time sampling*).

**Tahap 3 – Pengumpulan Data**
- Pre-test terhadap 5–10 responden untuk validasi instrumen.
- Penyebaran kuesioner NASA-TLX pasca-shift dengan pendampingan enumerator.
- Pengamatan WS oleh observer terlatih menggunakan aplikasi waktu (random alarm setiap 5–15 menit).

**Tahap 4 – Analisis Data**
- Perhitungan bobot dari *pairwise comparison card*.
- Komputasi WWL per individu, lalu dirata-ratakan.
- Perhitungan proporsi aktivitas dari data WS.
- Uji reliabilitas (Cronbach's Alpha) dan validitas konstruk.

**Tahap 5 – Rekomendasi Manajerial**
- Jika $WWL > 75$: rekomendasi *shift rotation*, penambahan SDM, otomatisasi.
- Jika $P_{idle} > 25\%$: rekomendasi redesain alur kerja.
- Jika $P_{productive} < 60\%$: investigasi *bottleneck* proses.

**Diagram Alir Proses:**

```
┌─────────────────────┐
│ Identifikasi Populasi│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Hitung n (TLX & WS) │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Pre-test Instrumen  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Pengumpulan Data     │
│ (Kuesioner + Obs.)  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Hitung WWL & P_act  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Uji Reliabilitas    │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Rekomendasi & SOP   │
└─────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus: Operator Sortir Hub Shopee Express

Misalkan sebuah hub Shopee Express memiliki 50 operator sortir. Manajer ingin mengukur beban kerja mental untuk mengevaluasi kelayakan shift 8 jam.

**Parameter:**
- Tingkat kepercayaan 95% → $Z = 1.96$
- $p = 0.5$ (asumsi konservatif)
- $e = 0.05$
- Sampel NASA-TLX diambil 30 operator (≥ 30 sesuai syarat CLT).

**Perhitungan Work Sampling:**
$$n_{WS} = \frac{(1.96)^2 \cdot 0.5 \cdot (1-0.5)}{(0.05)^2} = \frac{3.8416 \cdot 0.25}{0.0025} = \frac{0.9604}{0.0025} = 384.16 \approx 385 \text{ observasi}$$

Dengan frekuensi observasi tiap 10 menit selama 8 jam (48 time slot), dibutuhkan $\lceil 385/48 \rceil = 9$ hari observasi, atau menggunakan multiple observer paralel.

### 4.2. Simulasi Skor NASA-TLX

Tabel berikut adalah simulasi data primer 10 operator sortir Shopee Express:

| Operator | MD | PD | TD | PE | EF | FR |
|----------|----|----|----|----|----|----|
| O1 | 75 | 60 | 80 | 40 | 70 | 55 |
| O2 | 70 | 65 | 75 | 45 | 65 | 50 |
| O3 | 80 | 55 | 85 | 35 | 75 | 60 |
| O4 | 65 | 70 | 70 | 50 | 60 | 45 |
| O5 | 85 | 50 | 90 | 30 | 80 | 65 |
| O6 | 72 | 62 | 78 | 42 | 68 | 52 |
| O7 | 68 | 68 | 72 | 48 | 62 | 48 |
| O8 | 78 | 58 | 82 | 38 | 72 | 58 |
| O9 | 66 | 71 | 71 | 49 | 61 | 46 |
| O10 | 82 | 53 | 88 | 33 | 77 | 62 |

**Pairwise Comparison Weights (contoh untuk O1):**
Misalkan hasil *pairwise comparison* menghasilkan bobot: MD=5, PD=2, TD=4, PE=1, EF=2, FR=1. Total bobot = 15. ✓

**Perhitungan Weighted Workload O1:**
$$WWL_{O1} = \frac{(5\cdot75)+(2\cdot60)+(4\cdot80)+(1\cdot40)+(2\cdot70)+(1\cdot55)}{15}$$
$$= \frac{375 + 120 + 320 + 40 + 140 +