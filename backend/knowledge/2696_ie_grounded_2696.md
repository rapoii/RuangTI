# 2696 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Studi Kasus Shopee Express dan Warehouse Operators

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara mengalami ekspansi eksponensial dalam dekade terakhir, dengan Indonesia menjadi pasar terbesar di kawasan ini. Shopee, sebagai salah satu platform *e-commerce* dominan, mengandalkan jaringan logistik last-mile bernama Shopee Express (SPX) untuk mendistribusikan jutaan paket setiap bulannya. Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa Mitra Shopee Express—yaitu pekerja kemitraan yang beroperasi di titik sortir, *pickup*, dan pengiriman—menghadapi tekanan mental yang bersumber dari kompleksitas tugas, volume paket yang fluktuatif, ekspektasi *Service Level Agreement* (SLA), serta tuntutan multi-tasking yang intens. Kondisi ini diperparah oleh karakteristik pekerja kemitraan (*gig worker*) yang tidak terikat struktur kerja formal, sehingga paparan terhadap beban kerja mental cenderung akumulatif tanpa mitigasi ergonomi kognitif yang terstruktur.

Secara ekonomis, *turnover* pekerja mitra yang tinggi menimbulkan *cost of recruitment*, *training*, dan produktivitas hilang yang signifikan bagi operator logistik. Studi Rafi dan Putra (2024) berupaya mengkuantifikasi beban kerja mental tersebut agar perusahaan dapat menentukan rasio pekerja-versus-volume paket yang sehat serta merancang intervensi ergonomi. Sementara itu, Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi lanskap dengan menerapkan kerangka serupa—*Work Sampling* yang dikombinasikan NASA-TLX—pada operator gudang, membuktikan bahwa metodologi ini portabel lintas fungsi rantai pasok: dari sortir paket di *Sorting Hub* hingga *picking*, *packing*, dan *staging* di gudang.

Urgensi topik ini semakin kuat mengingat psikologi keselamatan kerja modern (*modern safety psychology*) memandang beban kerja mental sebagai *antecedent* utama terhadap human error, kelelahan, kecelakaan kerja, dan degradasi kualitas layanan. Tanpa pengukuran yang sahih dan *reliable*, keputusan manajerial seperti penambahan *shift*, redistribusi tugas, atau penyediaan *rest break* hanya akan bersifat intuitif, bukan berbasis bukti (*evidence-based*). Oleh karena itu, NASA-TLX (*NASA Task Load Index*), yang dikembangkan oleh Sandra Hart dan Lowell Staveland (1988), muncul sebagai instrumen standar emas yang telah divalidasi secara internasional untuk keperluan ini, dan dipakai secara berturut-turut oleh Rafi & Putra (2024) serta Aditya.R & Putra (2024) pada konteks logistik Indonesia kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konstruk NASA-TLX

NASA-TLX mengukur beban kerja perseptual melalui enam dimensi yang saling ortogonal, sebagaimana dirangkum oleh Rafi dan Putra (2024):

1. **Mental Demand (MD)** — aktivitas kognitif (memikirkan, memutuskan, menghitung, mengamati).
2. **Physical Demand (PD)** — aktivitas fisik (menopang, mengangkat, berjalan).
3. **Temporal Demand (TD)** — tekanan waktu akibat kecepatan tugas.
4. **Performance (P)** — persepsi pekerja terhadap pencapaian tujuan tugas.
5. **Effort (EF)** — usaha (mental dan fisik) yang dicurahkan untuk mencapai tingkat performance.
6. **Frustration (FR)** — tingkat frustasi, iritasi, dan ketidaknyamanan selama kerja.

Setiap subskala dinilai pada rentang $0 \leq x_i \leq 100$ (atau $\{0, 5, 10, \dots, 100\}$ dalam versi kartu *pencil-paper*). Skor akhir NASA-TLX (*Weighted Workload*, WWL) adalah rata-rata terbobot dari keenam subskala:

$$
WWL = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{\sum_{i=1}^{6} w_i}
$$

dengan $w_i$ adalah bobot relatif dari subskala ke-$i$, yang diperoleh dari prosedur *pairwise comparison* antar-dimensi. Terdapat $\binom{6}{2}=15$ pasangan yang dibandingkan, sehingga $\sum w_i = 15$ dan formula dapat disederhanakan menjadi:

$$
WWL = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot x_i
$$

### 2.2. Work Sampling

Aditya.R dan Putra (2024) menambahkan metode *Work Sampling* untuk mengestimasi proporsi waktu kerja efektif versus idle/downtime. Jika dilakukan $N$ observasi acak dengan masing-masing peluang kejadian kategori kerja $k$ sebesar $p_k$, maka *confidence interval* 95% bagi proporsi kategori $k$ adalah:

$$
\hat{p}_k \pm Z_{0.025} \sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{N}}
$$

dengan $Z_{0.025} = 1{,}96$. Ukuran sampel minimum $N$ untuk *absolute error* $E$ tertentu:

$$
N = \frac{Z^2 \cdot p(1-p)}{E^2}
$$

### 2.3. Uji Validitas dan Reliabilitas

Skala Likert pada kuesioner NASA-TLX harus diuji validitas konstruk melalui *Corrected Item-Total Correlation* (CITC) dengan ambang $r_{CITC} \geq 0{,}361$ untuk $df = N-2$ pada $\alpha = 0{,}05$. Reliabilitas diuji dengan Cronbach's Alpha:

$$
\alpha = \frac{k}{k-1}\left[1 - \frac{\sum_{i=1}^{k}\sigma_i^2}{\sigma_T^2}\right]
$$

dengan $k$ = jumlah item, $\sigma_i^2$ = varians item ke-$i$, dan $\sigma_T^2$ = varians total. Kriteria Guilford: $\alpha > 0{,}70$ reliabel, $\alpha > 0{,}90$ sangat reliabel.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan protokol Rafi dan Putra (2024) serta Aditya.R dan Putra (2024), implementasi NASA-TLX mengikuti *Standard Operating Procedure* (SOP) berikut:

### Diagram Alir (Flowchart)

```
┌─────────────────────────────────────┐
│ Tahap 1: Identifikasi Tugas & Populasi│
│ (Sortir, Pickup, Delivery, Picking) │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 2: Penentuan Sampel           │
│ n = (Z·σ/E)² (slovin jika σ unknown)│
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 3: Uji Validitas & Reliabilitas│
│ - Pilot test n=30 responden         │
│ - CITC ≥ 0,361; Cronbach α ≥ 0,70   │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 4: Penyebaran Kuesioner TLX  │
│ + Work Sampling form (jika relevan) │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 5: Perhitungan Bobot (PC)    │
│ 15 pasangan perbandingan dimensi   │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 6: Hitung WWL & Kategorisasi │
│ Rendah (<30), Sedang (30-50),       │
│ Tinggi (50-70), Sangat Tinggi (>70) │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 7: Analisis Korelasi/Regresi  │
│ WWL ↔ Performansi, Shift, Volume    │
└───────────────┬─────────────────────┘
                │
                ▼
┌─────────────────────────────────────┐
│ Tahap 8: Rekomendasi Ergonomi & SOP │
└─────────────────────────────────────┘
```

### Prosedur Detail

1. **Pra-Studi:** Lakukan *site survey* pada SPX Hub untuk memetakan *workflow* sortir, identifikasi titik *bottleneck*, dan variabilitas volume harian.
2. **Pilot Test:** Minimal 30 operator menjawab kuesioner; data dianalisis untuk CITC dan Cronbach's Alpha agar instrumen valid.
3. **Pengumpulan Data Primer:** Kuesioner NASA-TLX dibagikan secara *paper-and-pencil* atau digital (Google Form) dengan penjelasan assessor; responden memberikan *rating* pada 6 subskala.
4. **Pairwise Comparison Card:** Setiap responden membandingkan 15 pasangan dimensi menggunakan kartu binner (*Hart & Staveland card sort*), menghasilkan bobot $w_i$ yang merepresentasikan kontributor terbesar terhadap beban mental.
5. **Work Sampling (jika dikombinasikan):** Pengamat melakukan observasi acak setiap interval waktu tetap (mis. tiap 30 detik selama 8 jam × 5 hari) dengan total minimal 384 observasi per pekerja (mengikuti formula $N = (1{,}96^2 \cdot 0{,}5 \cdot 0{,}5)/(0{,}05)^2$).
6. **Analisis Statistik:** Hitung skor WWL per individu, agregasi per shift/jabatan, uji beda (mis. *Mann-Whitney U* jika distribusi non-normal), dan korelasi dengan variabel produktivitas.
7. **Kategorisasi Beban Kerja:** Klasifikasikan WWL berdasarkan *threshold* industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: Mitra Shopee Express pada Sorting Hub Jakarta Selatan

Ambil satu operator sortir dengan hasil kuesioner NASA-TLX sebagai berikut (rentang 0–100):

| Dimensi ($i$) | Rating ($x_i$) |
|---|---|
| Mental Demand (MD) | 75 |
| Physical Demand (PD) | 60 |
| Temporal Demand (TD) | 85 |
| Performance (P) | 30 |
| Effort (EF) | 70 |
| Frustration (FR) | 65 |

### 4.2. Hasil Pairwise Comparison

Dari 15 perbandingan pasangan, bobot yang dipilih responden (jumlah vote "lebih membebani") menghasilkan:

| Dimensi | Bobot ($w_i$) |
|---|---|
| MD | 4 |
| PD | 2 |
| TD | 5 |
| P | 1 |
| EF | 2 |
| FR | 1 |
| **Total** | **15** |

### 4.3. Perhitungan WWL

$$
\begin{aligned}
WWL &= \frac{(75)(4) + (60)(2) + (85)(5) + (30)(1) + (70)(2) + (65)(1)}{15}\\
&= \frac{300 + 120 + 425 + 30 + 140 + 65}{15}\\
&= \frac{1080}{15}\\
&= 72{,}00
\end{aligned}
$$

Berdasarkan kategorisasi Rafi & Putra (2024), skor $WWL = 72$ termasuk **Sangat Tinggi** (skala >70). Dimensi **Temporal Demand (TD)** menjadi kontributor dominan, mengindikasikan tekanan waktu akibat *deadline* SLA sortir (target *dispatch* harian) merupakan sumber utama beban mental.

### 4.4. Simulasi Intervensi: Penambahan 1 Helper & Penjadwalan Ulang

Misalkan operator ditambah 1 helper sehingga Temporal Demand turun menjadi $TD' = 55$ (tekanan waktu berkurang), Effort turun menjadi $EF' = 55$, dan Performance naik menjadi $P' = 50$ (merasa lebih efektif). Asumsikan bobot tetap.

$$
\begin{aligned}
WWL' &= \frac{(75)(4) + (60)(2) + (55)(5) + (50)(1) + (55)(2) + (65)(1)}{15}\\
&= \frac{300 + 120 + 275 + 50 + 110 + 65}{15}\\
&= \frac{920}{15}\\
&= 61{,}33
\end{aligned}
$$

Intervensi menurunkan WWL