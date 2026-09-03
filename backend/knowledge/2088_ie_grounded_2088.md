# 2088 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Studi Kasus Sortasi Hub Shopee Express dan Aplikasi Lintas Sektor Warehouse Operations

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Muhammadiyah Sidoarjo — UPS Journal)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami pertumbuhan eksponensial selama dekade terakhir, dengan volume transaksi yang diproyeksikan menembus lebih dari USD 50 miliar pada 2025. Shopee Express, sebagai salah satu unit *last-mile delivery* dan *sortation hub* dari ekosistem Sea Group/Shopee, menyerap puluhan ribu pekerja operasional yang disebut *Partner Employees* — pekerja harian lepas (PHL) dan tenaga alih daya yang tersebar di ratusan *sortation hub* di kota-kota besar Indonesia. Rafi dan Putra (2024) dalam penelitiannya yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental karyawan mitra Shopee Express belum pernah diukur secara kuantitatif menggunakan instrumen standar, meskipun operasional *sortation* mereka menghadapi Target *Service Level* (SL) harian yang sangat ketat (umumnya di atas 95% *on-time delivery*) dan volume *parcel* harian yang dapat melonjak 3–5 kali lipat pada periode *flash sale*, Harbolnas, atau Ramadan.

Konteks operasional ini menjadi urgen karena *sortation hub* Shopee Express memproses ribuan *parcel* per jam dengan karakteristik pekerjaan yang bersifat repetitif namun memiliki *task variability* tinggi (berbagai dimensi paket, alamat tidak terstandarisasi, scan barcode manual, verifikasi COD). Karyawan mitra dituntut melakukan *picking*, *sorting*, *loading-unloading*, verifikasi *parcel*, dan penyelesaian *customer dispute* secara bersamaan dengan tekanan *deadline* yang ditentukan oleh *cut-off* keberangkatan armada *last-mile*. Paparan terhadap tekanan kognitif semacam ini — jika tidak diukur — dapat memicu *occupational fatigue*, *human error* (mis-scan, mis-route), peningkatan *parcel defect rate*, hingga *occupational burnout* yang berujung pada *turnover* tinggi dan biaya rekrutmen ulang yang membengkak.

Menurut Aditya dan Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), analisis beban kerja pada operator gudang menjadi titik kritis dalam rantai pasok modern, terutama karena keputusan alokasi sumber daya manusia, perancangan *shift*, dan *ergonomic intervention* sangat bergantung pada pengukuran yang valid. Tanpa pengukuran kuantitatif, manajer operasional cenderung *over-staffing* (meningkatkan biaya) atau *under-staffing* (meningkatkan risiko). NASA-TLX (NASA Task Load Index) yang diperkenalkan oleh Hart dan Staveland (1988) muncul sebagai instrumen terstandarisasi yang telah divalidasi secara global di lebih dari 450 studi dan merupakan instrumen paling banyak dikutip dalam *human factors research* (HFES). Penelitian Rafi dan Putra (2024) menutup celah literatur dengan mengaplikasikan NASA-TLX secara langsung pada konteks spesifik operator Shopee Express di Indonesia — konteks yang secara sosioteknis berbeda dengan studi NASA-TLX di negara maju (AS, Eropa, Jepang) yang umumnya dilakukan pada pilot, *air traffic controller*, atau operator manufaktur *high-tech*. Adopsi NASA-TLX pada *gig economy logistics worker* merupakan kontribusi orisinal yang mengisi gap antara *human factors engineering* dan *logistics management* di pasar negara berkembang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX: Konsep Dimensi dan Penskalaan

NASA-TLX mengukur beban kerja (*workload*) sebagai konstruk multidimensi yang terdiri dari enam subskala, yaitu: *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (P), *Effort* (EF), dan *Frustration* (FR). Pada versi *Raw NASA-TLX* (RTLX), skor total merupakan rata-rata sederhana dari keenam dimensi:

$$RTLX = \frac{1}{6} \sum_{i=1}^{6} x_i = \frac{MD + PD + TD + P + EF + FR}{6}$$

di mana $x_i$ merupakan skor individu dimensi pada skala $0$–$100$ (atau skala bipolar 21 titik pada instrumen asli). Skor mendekati $0$ mengindikasikan beban kerja rendah; skor mendekati $100$ mengindikasikan beban kerja sangat tinggi.

### 2.2 Weighted NASA-TLX dan Prosedur Pairwise Comparison

Versi lengkap — *Weighted NASA-TLX* (WTLX) — melakukan *pairwise comparison* antar keenam dimensi (sebanyak $\binom{6}{2} = 15$ pasangan) untuk menentukan bobot kepentingan relatif. Setiap pasangan yang dipilih sebagai "lebih memberatkan" akan menambah satu suara pada dimensi tersebut. Bobot dinormalisasi sehingga:

$$WTLX = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{\sum_{i=1}^{6} w_i}$$

dengan $\sum_{i=1}^{6} w_i = 15$ (jumlah total perbandingan). WTLX memberikan bobot lebih besar pada dimensi yang dianggap paling relevan oleh responden untuk pekerjaannya. Untuk penelitian di lingkungan Shopee Express dengan 30 operator mitra, WTLX lazim digunakan karena dimensi *Temporal Demand* dan *Mental Demand* umumnya memiliki bobot tinggi.

### 2.3 Work Sampling sebagai Instrumen Pendukung

Aditya dan Putra (2024) mengombinasikan NASA-TLX dengan *work sampling* untuk memvalidasi distribusi waktu kerja. Teori *work sampling* dibangun di atas dasar statistik inferensial binomial:

$$n = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}$$

di mana:
- $n$ = jumlah pengamatan minimum,
- $Z$ = nilai Z pada tingkat kepercayaan tertentu (misalnya $Z_{0.95} = 1{,}96$),
- $p$ = proporsi aktivitas yang diperkirakan (umumnya $p = 0{,}5$ untuk *worst-case*),
- $E$ = *allowable error* (presisi yang diinginkan).

Selang kepercayaan proporsi aktivitas menjadi:

$$CI_{1-\alpha} = \hat{p} \pm Z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

### 2.4 Klasifikasi Beban Kerja dan Ambang Batas Ergonomi

Berdasarkan literatur *human factors*, skor WTLX diklasifikasikan sebagai berikut untuk interpretasi manajerial:

| Skor WTLX | Kategori | Implikasi |
|-----------|----------|-----------|
| $0$ – $20$ | Rendah | Operator masih memiliki kapasitas cadangan |
| $21$ – $40$ | Cukup Rendah | Beban optimal secara ergonomis |
| $41$ – $60$ | Sedang | Mulai mendekati batas kelonggaran |
| $61$ – $80$ | Tinggi | Risiko *fatigue* meningkat, supervisi diperlukan |
| $81$ – $100$ | Sangat Tinggi | Risiko *human error* dan *burnout* substansial |

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Penelitian

Penerapan NASA-TLX mengikuti alur metodologis terstruktur sebagai berikut (diolah dari Rafi & Putra, 2024):

```
┌─────────────────────────────────────────────┐
│ Tahap 1: Identifikasi Masalah & Konteks     │
│ (Sortation Hub Shopee Express, volume       │
│ parcel, shift pattern, KPI on-time delivery)│
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 2: Penentuan Populasi & Sampel        │
│ (Purposive sampling: operator sortasi aktif │
│ minimal 3 bulan, N = 30 responden)          │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 3: Pra-Uji Validitas Kuesioner        │
│ (Uji validitas isi, uji coba 5 operator)    │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 4: Pengumpulan Data TLX              │
│ (Skoring 0–100 per dimensi, lalu 15        │
│ pairwise comparisons)                      │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 5: Pengumpulan Data Work Sampling    │
│ (Pengamatan acak 10 operator selama 5      │
│ hari, interval 2 menit, total ≥ 3.600      │
│ observasi)                                 │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 6: Perhitungan WTLX & Workload Ratio │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 7: Analisis Statistik & Rekomendasi  │
│ (Mean, SD, ANOVA, korelasi Pearson dengan  │
│ work sampling → rekomendasi shift,