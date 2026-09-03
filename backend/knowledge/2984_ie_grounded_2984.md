# 2984 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri logistik e-commerce di Indonesia mengalami pertumbuhan eksponensial dalam dekade terakhir, dipicu oleh akselerasi digitalisasi perilaku konsumen pascapandemi COVID-19 dan penetrasi platform marketplace seperti Shopee, Tokopedia, dan Lazada. Data internal Shopee Indonesia menunjukkan bahwa volume pengiriman *Same-Day Delivery* dan *Instant Delivery* melalui layanan Shopee Express Partner melonjak lebih dari 60% year-on-year (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Dalam konteks operasional ini, *Shopee Express Partner* — yang selanjutnya disebut sebagai mitra kurir last-mile — menghadapi tekanan mental yang berlapis: target *delivery success rate* >98%, *Standard Operative Procedure* (SOP) sortir yang ketat, dinamika lalu lintas metropolitan Jabodetabek, serta ekspektasi pelanggan akan waktu kirim kurang dari 12 jam. Rafi dan Putra (2024) menekankan bahwa beban kerja mental (*mental workload*) bukan sekadar persoalan kelelahan fisik, melainkan resultante kognitif yang memengaruhi kualitas layanan, keselamatan kerja, dan retensi karyawan.

Pada lini operasional *warehouse* dan *distribution center* (DC) Shopee, M. Andre Aditya.R dan Boy Isma Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) menyoroti bahwa operator pergudangan menghadapi problematika serupa namun dengan karakter yang berbeda — kombinasi antara aktivitas fisik repetitif (lifting, picking, packing) dan proses kognitif (verifikasi SKU, pembacaan *handheld terminal*, *decision-making* pada rute sortir). Kedua penelitian ini, meskipun berbeda titik observasi, menyatu pada satu premis: tanpa instrumentasi kuantitatif yang valid, perusahaan logistik sulit menetapkan rasio *manpower allocation* yang proporsional terhadap kapasitas mental operator. Di sinilah *NASA Task Load Index* (NASA-TLX), yang awalnya dikembangkan oleh Hart dan Staveland (1988) untuk domain penerbangan antariksa, diadopsi sebagai metode baku industri (*de facto standard*) untuk pengukuran *subjective workload* multidimensional.

Urgensi rekayasa dari topik ini terletak pada korelasi empiris antara beban kerja mental berlebih (*overload*) dengan peningkatan *human error rate*, yang dalam industri logistik berpotensi langsung memicu *missort*, *lost parcel*, klaim garansi, dan penalti SLA (*Service Level Agreement*). Studi Rafi dan Putra (2024) mengestimasi bahwa biaya insiden operasional akibat *mental fatigue* mitra kurir Shopee Express dapat melampaui Rp 4,2 miliar per bulan per *hub* regional, sebuah angka yang menunjukkan bahwa investasi pada rekayasa beban kerja mental memiliki *return on investment* yang signifikan. Lebih jauh, pendekatan ini juga memenuhi kerangka *Occupational Health and Safety* (OHS) ISO 45001:2018 yang mensyaratkan identifikasi, evaluasi, dan pengendalian risiko psikososial di tempat kerja.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Multidimensi NASA-TLX

NASA-TLX adalah instrumen *subjective workload* yang mengukur beban kerja total berdasarkan enam subskala yang merepresentasikan dimensi kognitif, fisik, dan temporal. Keenam dimensi tersebut, sebagaimana diuraikan Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) adalah:

| No. | Dimensi | Notasi | Deskripsi Rekayasa |
|---|---|---|---|
| 1 | Mental Demand (MD) | $x_1$ | Kebutuhan aktivitas berpikir, memutuskan, menghitung |
| 2 | Physical Demand (PD) | $x_2$ | Kebutuhan aktivitas fisik (mengangkat, berjalan, mengetik) |
| 3 | Temporal Demand (TD) | $x_3$ | Tingkat tekanan waktu |
| 4 | Performance (P) | $x_4$ | Persepsi keberhasilan完成任务 (*invers*: rendah = beban tinggi) |
| 5 | Effort (E) | $x_5$ | Tingkat usaha yang dikeluarkan |
| 6 | Frustration (F) | $x_6$ | Tingkat frustrasi, irritasi, stres |

### 2.2 Formulasi *Raw TLX* (RTLX) dan *Weighted TLX*

Setiap subskala diberi peringkat oleh responden pada skala *Likert-type* 0–100 (20 *tick mark* dengan interval 5). Terdapat dua skema agregasi yang digunakan dalam literatur:

**Skema 1 — Raw TLX (RTLX):**

$$
\text{RTLX}_i = \sum_{j=1}^{6} x_{ij}
$$

di mana $x_{ij}$ adalah peringkat dimensi $j$ untuk responden $i$.

**Skema 2 — Weighted TLX (Skor Final):**

Prosedur ini memerlukan *Card Sorting Task* melalui 15 *pairwise comparison* antardimensi untuk menentukan bobot ($w_j$). Setiap bobot $w_j \in \{0, 1, 2, 3, 4, 5\}$ dengan kendala:

$$
\sum_{j=1}^{6} w_j = 15
$$

Skor akhir NASA-TLX (*Overall Workload*, OW) untuk responden $i$ diformulasikan sebagai:

$$
OW_i = \frac{\sum_{j=1}^{6} w_j \cdot x_{ij}}{\sum_{j=1}^{6} w_j} = \frac{1}{15}\sum_{j=1}^{6} w_j \cdot x_{ij}
$$

Karena $\sum w_j = 15$, maka $OW_i$ ternormalisasi pada rentang $[0, 100]$.

### 2.3 Formulasi *Work Sampling* (Aditya & Putra, 2024)

Untuk operator *warehouse*, Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengintegrasikan NASA-TLX dengan *work sampling* Bernoulli. Probabilitas observasi suatu aktivitas pada waktu acak:

$$
p_k = \frac{n_k}{N}
$$

di mana $n_k$ adalah jumlah observasi aktivitas $k$ dan $N$ adalah total observasi. Beban kerja fisik proporsional:

$$
W_{\text{fisik}} = \sum_{k=1}^{m} p_k \cdot T_k^{\text{norm}}
$$

dengan $T_k^{\text{norm}}$ adalah waktu normal aktivitas $k$ hasil *performance rating*.

### 2.4 Korelasi Beban Mental–Fisik

Kerangka integratif dari kedua paper dapat diekspresikan sebagai *composite workload score*:

$$
CW = \alpha \cdot OW + \beta \cdot W_{\text{fisik}}
$$

dengan $\alpha + \beta = 1$ adalah koefisien bobot kebijakan perusahaan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Pengukuran NASA-TLX (Rafi & Putra, 2024)

```
┌─────────────────────────────────────────────────┐
│ 1. Seleksi Responden Mitra Kurir (n ≥ 30)       │
│ 2. Briefing & Informed Consent                  │
│ 3. Pre-Task: Pairwise Comparison (15 ronde)     │
│ 4. Pelaksanaan Tugas Kurir 1 shift penuh        │
│ 5. Post-Task: Pemberian Rating 6 Dimensi        │
│ 6. Normalisasi Bobot via Card Sorting          │
│ 7. Perhitungan Skor Weighted TLX              │
│ 8. Klasifikasi Beban:                          │
│    - Rendah:  OW < 30                          │
│    - Sedang: 30 ≤ OW < 60                      │
│    - Tinggi: 60 ≤ OW < 80                      │
│    - Sangat Tinggi: OW ≥ 80                    │
│ 9. Rekomendasi Manajerial & Mitigasi            │
└─────────────────────────────────────────────────┘
```

### 3.2 SOP Work Sampling + NASA-TLX (Aditya & Putra, 2024)

```
┌─────────────────────────────────────────────────┐
│ 1. Penetapan jumlah observasi (N)               │
│    N = (Z²·p·q) / e² dengan Z=1.96, e=5%      │
│ 2. Penjadwalan round observasi (5–10 menit)    │
│ 3. Pelatihan observer ≥ 2 orang (uji Cohen κ>0.8)│
│ 4. Pengamatan aktivitas operator               │
│ 5. Pemberian kuesioner NASA-TLX pasca-shift    │
│ 6. Tabulasi p_k dan perhitungan W_fisik        │
│ 7. Analisis korelasi W_fisik vs OW             │
│ 8. Penentuan rasio operator : supervisor       │
└─────────────────────────────────────────────────┘
```

### 3.3 Penentuan Jumlah Sampel Minimum

Untuk NASA-TLX dengan presisi $\epsilon$ dan Confidence Level 95%:

$$
n_{\min} = \left(\frac{Z_{\alpha/2} \cdot \sigma}{\epsilon}\right)^2
$$

dengan $Z_{\alpha/2} = 1{,}96$ untuk $\alpha = 0{,}05$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Mitra Kurir Shopee Express Hub Jakarta Selatan (Rafi & Putra, 2024)

**Data Responden (n = 30 mitra kurir):**

| Responden | MD | PD | TD | P | E | F |
|---|---|---|---|---|---|---|
| R01 | 75 | 60 | 80 | 30 | 70 | 55 |
| R02 | 70 | 55 | 85 | 35 | 65 | 60 |
| R03 | 80 | 65 | 75 | 25 | 75 | 65 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |

**Bobot Hasil Pairwise Comparison (contoh agregat 30 responden):**

$$
w_{\text{MD}} = 4,\; w_{\text{PD}} = 2,\; w_{\text{TD}} = 3,\; w_{\text{P}} = 1,\; w_{\text{E}} = 2,\; w_{\text{F}} = 3
$$

**Verifikasi bobot:** $\sum w_j = 4+2+3+1+2+3 = 15$ ✓

**Perhitungan Manual Responden R01:**

$$
OW_{R01} = \frac{(4 \cdot 75) + (2 \cdot 60) + (3 \cdot 80) + (1 \cdot 30) + (2 \cdot 70) + (3 \cdot 55)}{15}
$$

$$
OW_{R01} = \frac{300 + 120 + 240 + 30 + 140 + 165}{15} = \frac{995}{15} = 66{,}33
$$

**Interpretasi R01:** $66{,}33 \in [60, 80)$ → **Beban Tinggi**, memerlukan intervensi berupa pengurangan shift dari 10 jam menjadi 8 jam, penambahan co-loader, dan micro-break setiap 90 menit.

**Perhitungan R02:**

$$
OW_{R02} = \frac{(4 \cdot 70) + (2 \cdot 55) + (3 \cdot 85) + (1 \cdot 35) + (2 \cdot 65) + (3 \cdot 60)}{15}
$$

$$
OW_{R02} = \frac{280 + 110 + 255 + 35 + 130 + 180}{15} = \frac{990}{15} = 66{,}00
$$

**Perhitungan R03:**

$$
OW_{R03} = \frac{(4 \cdot 80) + (2 \cdot 65) + (3 \cdot 75) + (1 \cdot 25) + (2 \cdot 75) + (3 \cdot 65)}{15}
$$

$$
OW_{R03} = \frac{320 + 130 + 225 + 25 + 150 + 195}{15} = \frac{1045}{15} = 69{,}67
$$

**Rata-rata beban kerja:**

$$
\overline{OW} = \frac{66{,}33 + 66{,}00 + 69{,}67}{3} = 67{,}33
$$

### 4.2 Skenario Work Sampling Operator Warehouse (Aditya & Putra, 2024)

Misalkan hasil observasi 600 round pada operator sortir Shopee Hub Cikarang:

| Aktivitas $k$ | $n_k$ | $p_k = n_k/N