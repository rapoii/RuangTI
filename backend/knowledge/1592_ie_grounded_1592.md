# 1592 — Analisis Beban Kerja Mental Operator Logistik Last-Mile Menggunakan Metode NASA-TLX dalam Ekosistem E-Commerce Indonesia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan e-commerce di Indonesia pada dekade terakhir telah mengubah secara fundamental struktur operasional industri logistik, khususnya segmen *last-mile delivery* yang menjadi titik kritis antara platform digital dan pelanggan akhir. Shopee sebagai salah satu *marketplace* terbesar di Asia Tenggara mengandalkan jaringan *Shopee Express Partner* (sebutan untuk pekerja_sortir, kurir, dan *packer* yang bekerja di bawah skema kemitraan atau *third-party logistics*/3PL) untuk menjamin kecepatan pengiriman yang menjadi diferensiasi kompetitif utama. Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) secara eksplisit menyoroti bahwa dalam lingkungan operasional *Shopee Express*, pekerja_sortir tidak hanya menghadapi beban fisik berupa pengangkatan repetitif dan *sorting* ribuan paket per shift, melainkan juga beban kognitif-mental yang berasal dari tekanan *deadline*, kompleksitas *scanning*, volume pesanan musiman (*flash sale*, Harbolnas), serta *multitasking* antara aplikasi *handheld terminal*, conveyor belt, dan sistem verifikasi barcode. Studi tersebut menegaskan bahwa kelalaian mengukur dimensi mental workload akan menghasilkan kebijakan sumber daya manusia (SDM) yang bias dan berisiko terhadap kecelakaan kerja, *human error*, dan *burnout*.

Urgensi riset ini juga didorong oleh dinamika *gig economy* dan fleksibilisasi kontrak kerja yang membuat banyak *Shopee Express Partner* bekerja melampaui jam biologis ideal tanpa *rest allowance* yang terkalibrasi secara ilmiah. Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat argumentasi tersebut dengan menunjukkan bahwa pada operator gudang—yang konteks operasionalnya sangat mirip dengan pekerja_sortir Shopee—pengukuran beban kerja yang hanya menggunakan *work sampling* tanpa asesmen subjektif mental akan menghasilkan kesimpulan yang *underestimate* terhadap kompleksitas kognitif pekerja. Oleh karena itu, integrasi dua pendekatan, yaitu observasi kerja (*work sampling*) dan penilaian subjektif mental (NASA-TLX), menjadi metodologi baku yang kini diadopsi luas dalam *Industrial Engineering* kontemporer.

Secara ekonomis, *human error* pada tahap *last-mile* memiliki dampak biaya yang tidak proporsional: satu paket yang salah sortir pada periode Harbolnas berpotensi memicu *customer complaint*, *refund*, biaya retur, dan degradasi *Net Promoter Score* (NPS). Dengan volume rata-rata 2–5 juta paket per hari yang ditangani agregat ekosistem Shopee, bahkan tingkat kesalahan 0,1% sudah berarti ribuan paket per hari, dengan total kerugian hingga miliaran rupiah per bulan. Oleh karena itu, pemerintah melalui SNI 8153:2021 tentang *Ergonomi Sistem Kerja* dan praktik *Human Factors* ISO 26800:2011 mendorong perusahaan logistik untuk menerapkan asesmen beban kerja holistik. Modul 1592 ini membahas bagaimana *National Aeronautics and Space Administration – Task Load Index* (NASA-TLX), yang awalnya dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi lintas industri, diimplementasikan secara riil pada konteks Shopee Express dan gudang 3PL.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen multidimensi yang mengukur beban kerja melalui enam subskala, dengan rentang skor 0–100 untuk setiap dimensi:

1. **Mental Demand (MD)** — aktivitas kognitif (menghitung, memutuskan, memantau).
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, mendorong, berjalan).
3. **Temporal Demand (TD)** — tekanan waktu / *time pressure*.
4. **Performance (P)** — persepsi keberhasilan完成任务; skor rendah berarti persepsi gagal.
5. **Effort (E)** — usaha total (mental + fisik) untuk完成任务.
6. **Frustration (F)** — tingkat irritasi, stres, dan ketidaknyamanan.

### 2.1 Prosedur Penskoran Dua-Tahap

Tahap pertama adalah *Card Sorting* (*raw paired comparison*) di mana responden memilih dari 15 pasangan dimensi mana yang *lebih berkontribusi* terhadap beban kerja tugasnya. Setiap pilihan menghasilkan bobot biner 1; total pasangan adalah $\binom{6}{2} = 15$. Jika responden memilih dimensi $i$ sebanyak $c_i$ kali, maka bobotnya:

$$w_i = \frac{c_i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$

Tahap kedua adalah *Rating Magnitude*, di mana responden memberikan skor mentah $r_i \in [0, 100]$ untuk setiap subskala. Skor total tertimbang (*Weighted Workload Score*/WWS) adalah:

$$\boxed{WWS = \sum_{i=1}^{6} w_i \cdot r_i = w_{MD} r_{MD} + w_{PD} r_{PD} + w_{TD} r_{TD} + w_{P} r_{P} + w_{E} r_{E} + w_{F} r_{F}}$$

dengan rentang teoretis $0 \leq WWS \leq 100$.

### 2.2 Interpretasi Beban Kerja

Mengikuti klasifikasi Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) yang mengkategorikan berdasarkan distribusi empiris pada *Shopee Express Partner*:

- $0 \leq WWS < 25$: Beban kerja rendah (*underload*) — berisiko terhadap *disengagement*.
- $25 \leq WWS < 50$: Beban kerja sedang — zona ergonomis ideal.
- $50 \leq WWS < 75$: Beban kerja tinggi — intervensi diperlukan.
- $75 \leq WWS \leq 100$: Beban kerja sangat tinggi — *overload*, risiko keselamatan kritis.

### 2.3 Work Sampling sebagai Pelengkap

Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengintegrasikan *work sampling* dengan persamaan klasik:

$$\text{Proporsi Aktivitas } k = \frac{n_k}{N}, \quad SE = \sqrt{\frac{p(1-p)}{N}}, \quad N = \frac{Z^2 \cdot p(1-p)}{e^2}$$

dengan $p$ = proporsi aktivitas, $N$ = jumlah observasi, $Z = 1{,}96$ untuk tingkat kepercayaan 95%, dan $e$ = *margin of error* absolut. Untuk $p = 0{,}5$ dan $e = 0{,}05$, dibutuhkan $N \geq 385$ observasi acak, yang selanjutnya dipetakan ke beban mental melalui korelasi Pearson:

$$r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \sum(y_i - \bar{y})^2}}$$

sehingga beban mental prediktif:

$$\hat{WWS}_i = \beta_0 + \beta_1 \cdot (\text{Aktivitas Repetitif}_i) + \beta_2 \cdot (\text{Waktu Idle}_i) + \varepsilon_i$$

### 2.4 Validitas dan Reliabilitas Instrumen

Koefisien Cronbach's alpha NASA-TLX secara konsisten dilaporkan $\alpha \geq 0{,}72$ (Hart, 2006), sehingga memenuhi ambang reliabilitas konsistensi internal. Untuk analisis signifikansi perbedaan antarkelompok operator digunakan:

$$t = \frac{\bar{X}_1 - \bar{X}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}, \quad s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$$

sedangkan untuk multi-grup digunakan ANOVA satu jalur:

$$F = \frac{MS_{between}}{MS_{within}} = \frac{\sum_{j} n_j(\bar{X}_j - \bar{X})^2 / (k-1)}{\sum_j \sum_i (X_{ij} - \bar{X}_j)^2 / (N-k)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan NASA-TLX di lapangan mengikuti *Standard Operating Procedure* yang konsisten dengan protokol Hart (2006) dan dimodifikasi sesuai konteks operasional Rafi & Putra (2024).

### 3.1 Diagram Alir Implementasi

```
┌────────────────────────────────────────────────────────┐
│ FASE 1: DEFINISI OPERASIONAL                          │
│ • Identifikasi populasi (Shopee Express Partner)      │
│ • Stratifikasi: sortir pagi / siang / malam            │
│ • Pengajuan informed consent & ethical clearance       │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ FASE 2: WORK SAMPLING (Aditya & Putra, 2024)          │
│ • Penentuan N via rumus sampling                       │
│ • Pengamatan acak (random instant) tiap 60 detik      │
│ • Klasifikasi aktivitas: sorting, scanning, idle, dll │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ FASE 3: PEMBERIAN KUESIONER NASA-TLX                   │
│ • Penjelasan prosedur & simulasi skala 0-100           │
│ • Pelaksanaan tugas operasional normal                 │
│ • Pengisian skor mentah r_i pasca-shift (±30 menit)   │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ FASE 4: CARD SORTING (15 pasangan)                     │
│ • Responden memilih "yang lebih memberatkan"           │
│ • Penghitungan w_i = c_i / 15                         │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ FASE 5: KOMPUTASI WWS & ANALISIS STATISTIK             │
│ • Hitung WWS = Σ w_i · r_i                            │
│ • Uji normalitas (Shapiro-Wilk)                        │
│ • Uji beda (t-test / Mann-Whitney / ANOVA)            │
│ • Pemetaan heatmap dimensi                            │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ FASE 6: REKOMENDASI ERGONOMI & SDM                     │
│ • Redesain workstation, rotasi shift, rest allowance   │
│ • Pelatihan & workload balancing                      │
│ • Monitoring periodik setiap 6 bulan                   │
└────────────────────────────────────────────────────────┘
```

### 3.2 Protokol Pengukuran di *Shopee Sortation Center*

1. **Persiapan lokasi** — disediakan bilik tertutup dengan pencahayaan cukup untuk mengisi kuesioner (mencegah bias dari supervisor).
2. **Instruksi terstandar** — gunakan *instruction card* yang telah diterjemahkan ke Bahasa Indonesia dengan istilah operasional lokal (mis. "sortir", "scan barcode", "paket COD").
3. **Penjaminan anonimitas** — kuesioner diberi kode numerik; tidak ada nama responden.
4. **Pengisian pasca-tugas** — maksimal 30 menit setelah shift berakhir untuk menghindari *recency bias* sekaligus mencegah *amnesia*.
5. **Validasi data** — cek *outlier* dengan *boxplot*; skor $r_i > 95$ atau $< 5$ diverifikasi ulang.

### 3.3 SOP Rest Allowance (SNI 8153:2021)

Jika WWS > 50, maka kebijakan *microbreak* berikut direkomendasikan:
$$\text{Frekuensi Istirahat} = \frac{T_{\text{shift}}}{T_{\text{cycle}} \cdot N_{\text{mikroistirahat}}}, \quad T_{\text{cycle}} = \text{waktu siklus sortir rata-rata}$$

Untuk *Shopee Express Partner* yang beroperasi 8 jam/hari dengan rata-rata sortir 600 paket/jam, satu siklus efektif ≈ 6 detik, sehingga rekomendasi *microbreak* setiap 90 menit selama 10 menit (rasio 11%) menurunkan WWS rata-rata hingga 12–18 poin (Rafi & Putra, 2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Studi Kasus

Ambil satu operator sortir bernama *Operator A* di *Shopee Sortation Center* Jakarta, shift pagi (08.00–16.00 WIB), dengan *task* utama menyortir paket berdasarkan kode pos tujuan. Berdasarkan Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), data aktivitas melalui *work sampling* pada 385 observasi menunjukkan:

| Aktivitas | Jumlah Observasi | Proporsi |
|---|---|---|
| Sorting aktif | 250 | 64,9% |
| Scanning barcode | 78 | 20,3% |
| Idle/istirahat singkat | 30 | 7,8% |
| Konsultasi/dengan supervisor | 15 | 3,9% |
| Lain-lain (membersihkan area) | 12 | 3,1% |

### 4.2 Hasil Penskoran NASA-TLX Operator A

| Dimensi | Skor Mentah $r_i$ | Bobot $w_i$ (jumlah kemenangan/15) | Kontribusi $w_i \cdot r_i$ |
|---|---|---|---|
| Mental Demand | 70 | 0,40 (6/15) | 28,00 |
| Physical Demand | 60 | 0,13 (2/15) | 7,80 |
| Temporal Demand | 80 | 0,20 (3/15) | 16,00 |
|