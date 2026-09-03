# 1608 — Analisis Beban Kerja Mental pada Operator Logistik Last-Mile dan Pergudangan Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami ekspansi eksponensial sepanjang dekade terakhir, didorong oleh penetrasi digital, perubahan perilaku konsumen pascapandemi, dan infrastruktur logistik yang semakin matang. Shopee, sebagai salah satu *marketplace* terbesar di Asia Tenggara, mengoperasikan layanan kurir internal bernama **Shopee Express** (dilambangkan "SPX") yang menangani pengiriman *last-mile* dari *hub* sortir ke alamat konsumen akhir. Dalam ekosistem ini, **mitra kurir (Shopee Express Partner)** berperan sebagai ujung tombak operasional yang menghadapi tekanan multi-dimensional: target pengiriman harian, variabilitas permintaan musiman (*seasonal demand spikes* seperti Harbolnas 11.11, 12.12), ekspektasi *real-time tracking*, serta interaksi langsung dengan pelanggan. Muhammad Rafi dan Boy Isma Putra (2024), dalam artikel yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), menyoroti bahwa beban kerja mental (*mental workload*) mitra kurir menjadi variabel kritis yang menentukan tidak hanya produktivitas tetapi juga keselamatan kerja, kualitas layanan, dan tingkat *turnover* pekerja.

Urgensi kajian ini diperkuat oleh data operasional: volume paket harian Shopee Express dapat melampaui rata-rata pada periode kampanye promosi, memaksa mitra bekerja dengan densitas tugas tinggi dalam jendela waktu sempit. Paparan berulang terhadap *time pressure*, kompleksitas routing di lalu lintas perkotaan padat, serta risiko kegagalan layanan (*failed delivery attempt*) berkontribusi terhadap akumulasi *cognitive load*. Jika tidak diukur dan dikelola secara kuantitatif, beban kerja mental berlebih akan bermanifestasi sebagai kelelahan, *human error*, kecelakaan kerja, dan penurunan *service level agreement* (SLA). Dalam kerangka *Industrial Engineering* dan *Human Factors & Ergonomics*, pengukuran beban kerja mental merupakan prasyarat untuk merancang sistem kerja yang *sustainable*, *safe*, dan *productive*.

Studi komplementer yang dilakukan oleh M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas konteks investigasi dari ranah *last-mile delivery* ke **operasional pergudangan (warehouse operations)**, dengan menggabungkan metode *Work Sampling* dan **NASA-TLX (NASA Task Load Index)**. Kombinasi ini memungkinkan tidak hanya pengukuran subjektif beban kerja mental tetapi juga validasi objektif proporsi waktu kerja aktual, sehingga menghasilkan rekomendasi yang *data-driven*. Kedua paper tersebut menjadi bukti empiris bahwa isu *mental workload* bersifat lintas-sektor dalam industri logistik, dan memerlukan pendekatan rekayasa yang terstandarisasi.

Dalam konteks ekonomi makro, *mental workload* yang tidak terkelola berdampak pada **biaya kompensasi klaim**, **biaya rekrutmen ulang**, dan **reputasi brand**. Bagi insinyur industri, memahami dan mengkuantifikasi beban kerja mental adalah kompetensi fundamental untuk merancang *shift scheduling*, *job rotation*, *workstation design*, dan *technology-assisted dispatch system* (misalnya integrasi *AI-based route optimization*). Bagian selanjutnya akan memformulasikan landasan teori, metodologi pengukuran, dan aplikasi kuantitatif NASA-TLX secara presisi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh **Sandra G. Hart dan Lowell E. Staveland** (1988) di NASA Ames Research Center untuk mengukur *subjective workload*.operator sistem. Instrumen ini telah teruji validitas dan reliabilitasnya lintas-domain (aeronautika, medis, manufaktur, logistik). NASA-TLX terdiri dari **enam dimensi beban kerja**:

| Simbol | Dimensi | Deskripsi |
|--------|---------|-----------|
| $MD$ | Mental Demand | Kebutuhan aktivitas kognitif (berpikir, memutuskan, mengamati) |
| $PD$ | Physical Demand | Kebutuhan aktivitas fisik (mendorong, mengangkat, mengendarai) |
| $TD$ | Temporal Demand | Tingkat tekanan waktu |
| $OP$ | Own Performance | Pencapaian tujuan tugas (rendah = sukses, tinggi = gagal) |
| $EF$ | Effort | Sejauh mana pengerahan usaha kerja (mental + fisik) |
| $FR$ | Frustration | Tingkat frustrasi, stres, dan irritabilitas |

### 2.2 Prosedur Penskalaan

#### a. Raw Rating (Tahap 1)
Responden memberikan skor pada setiap dimensi menggunakan garis *bipolar* berskala **0–100** dengan *anchor* spesifik. Skor ini disebut **raw rating** ($r_i$).

$$r_i \in [0, 100], \quad i \in \{MD, PD, TD, OP, EF, FR\}$$

#### b. Pairwise Comparison (Tahap 2)
Responden membandingkan **$\binom{6}{2}=15$** pasangan dimensi untuk menentukan dimensi mana yang **lebih berkontribusi** terhadap beban kerja total pada tugas spesifik. Setiap perbandingan menghasilkan satu poin untuk dimensi yang lebih dominan. Bobot ($w_i$) setiap dimensi adalah jumlah kemenangannya:

$$w_i \in \{0, 1, 2, 3, 4, 5\}, \quad \sum_{i=1}^{6} w_i = 15$$

#### c. Weighted Workload (Tahap 3)
Skor akhir NASA-TLX, disebut **Weighted Workload (WWL)** atau **Overall Workload Score**, dihitung sebagai:

$$\boxed{WWL = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}}$$

**Interpretasi Rentang Skor (Hart, 2006; konvensi penelitian ergonomika):**

| Rentang WWL | Kategori Beban Kerja |
|:-----------:|:---------------------|
| 0 – 20 | Sangat Rendah |
| 21 – 40 | Rendah |
| 41 – 60 | Sedang |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

> **Catatan:** Rentang teoritis maksimum adalah $\frac{5 \cdot 100 \cdot 6}{15} = 200$, namun praktik riset dan konvensi pelaporan membakukan skala 0–100 dengan asumsi tidak semua bobot simultan bernilai 5. Versi **Raw TLX (RTLX)** tanpa *pairwise comparison* menggunakan formula $\frac{\sum r_i}{6}$ untuk penyederhanaan administratif.

### 2.3 Work Sampling Theory

Untuk paper kedua ([10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), pendekatan **Work Sampling** digunakan guna mengukur proporsi waktu yang dihabiskan operator warehouse pada kategori aktivitas tertentu (produktif, *delay*, *idle*, *support*). Ukuran sampel minimum dihitung dengan rumus:

$$N = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^{2}}$$

dengan:
- $Z_{\alpha/2}$ = nilai kritis distribusi normal (umumnya 1,96 untuk tingkat kepercayaan 95%)
- $p$ = proporsi estimasi aktivitas (umumnya 0,5 jika tidak ada studi pendahuluan, untuk sampel konservatif)
- $e$ = tingkat kesalahan absolut yang dapat diterima (misal 0,05)

Frekuensi observasi acak ($f$) dan total waktu observasi ($T$) juga harus direncanakan agar memenuhi $N$. Hasil *work sampling* kemudian memberikan **distribusi aktivitas** $P_k$ yang harus direkonsiliasi dengan **WWL NASA-TLX** untuk mengidentifikasi *mismatch* antara beban subjektif dan aktivitas objektif.

### 2.4 Korelasi Mental Workload dengan Kinerja

Secara teoritis, hubungan beban kerja mental dan kinerja mengikuti **Yerkes-Dodson Law** dalam bentuk kurva terbalik-U:

$$\eta(\text{Performance}) = f(WWL) = a \cdot WWL \cdot e^{-b \cdot WWL} + c$$

dengan $a, b, c > 0$. Titik optimum berada pada $WWL^{*} = 1/b$, di mana kinerja mencapai maksimum sebelum menurun akibat *cognitive overload*. Ini menjadi justifikasi mengapa NASA-TLX harus digunakan tidak untuk meminimalkan $WWL$ ke nol (yang menandakan *underload* dan *boredom*), melainkan mempertahankan $WWL$ di sekitar **rentang 41–60** (kategori sedang).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan logistik mengikuti **SOP terstruktur** yang dapat distandarkan menjadi *playbook* rekayasa. Berikut adalah prosedur sistematis yang diadaptasi dari paper Rafi & Putra (2024) dan Aditya.R & Putra (2024):

### 3.1 Diagram Alir Implementasi

```
┌────────────────────────────────────────┐
│ TAHAP 1: Identifikasi Tugas & Populasi │
│ • Definisi work system boundary         │
│ • Penentuan responden (N ≥ 30 untuk    │
│   uji statistik valid)                  │
└──────────────┬─────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│ TAHAP 2: Briefing & Informed Consent    │
│ • Penjelasan tujuan penelitian          │
│ • Pelatihan filling instrumen          │
│ • Uji coba (pilot) 5–10 responden       │
└──────────────┬─────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│ TAHAP 3: Raw Rating Collection          │
│ • Skor 0–100 untuk 6 dimensi NASA-TLX  │
│ • Post-task (segera setelah shift)      │
└──────────────┬────────────────