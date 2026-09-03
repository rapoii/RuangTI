# 2008 — Analisis Beban Kerja Mental Karyawan Mitra Shopee Express Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Undergraduate Project Submission, Universitas Internasional Pemalang/Pemalang Press)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *e-commerce* di Indonesia mengalami transformasi struktural yang sangat pesat sejak dekade terakhir, didorong oleh penetrasi platform digital seperti Shopee, Tokopedia, dan Lazada. Shopee Express sebagai salah satu mitra pengiriman milik ekosistem Shopee menghadapi tantangan operasional berupa volume paket yang fluktuatif musiman (puncak pada event 11.11, 12.12, Harbolnas, dan Ramadan), rute pengiriman last-mile yang kompleks di medan perkotaan padat, serta ekspektasi pelanggan terhadap waktu pengiriman yang semakin singkat (same-day delivery). Dalam konteks ini, operator sortir, kurir pengantar, dan staf operasional gudang—yang selanjutnya disebut sebagai karyawan mitra—menjadi *front-line worker* yang menanggung beban kerja mental tertinggi karena harus mengintegrasikan banyak tuntutan kognitif secara simultan (Rafi & Putra, 2024).

Menurut Rafi dan Putra (2024), fenomena kelelahan mental, stres kerja, dan *human error* pada proses sortir menjadi isu kritis yang berdampak langsung pada *service level agreement* (SLA) dan retensi karyawan. Studi tersebut menyoroti bahwa pengukuran beban kerja mental selama ini masih didominasi oleh pendekatan intuitif manajerial, bukan berbasis instrumen psikometrik terstandar. NASA-TLX (NASA Task Load Index) yang dikembangkan oleh *Human Performance Research Group* NASA (Hart & Staveland, 1988) muncul sebagai instrumen subjektif terstruktur yang mampu mengkuantifikasi beban kerja melalui enam dimensi multidimensi (DOI: 10.21070/ups.9385).

Urgensi ekonomis dari studi ini semakin nyata ketika dikorelasikan dengan data tingkat turnover pekerja gig/logistik Indonesia yang tinggi (>40% per tahun pada sektor kurir). Beban kerja mental yang tidak terkelola dengan baik akan menurunkan kualitas sortir, meningkatkan *misroute*, *misdelivery*, dan komplain pelanggan yang pada akhirnya meningkatkan *cost of poor quality* (COPQ) perusahaan. Lebih jauh, Aditya dan Putra (2024) dalam riset terkait di gudang distribusi menunjukkan bahwa workload yang tidak terukur secara saintifik berkontribusi pada inefisiensi kapasitas utilisasi sebesar 15–25% (DOI: 10.21070/ups.11795). Oleh karena itu, paper Rafi & Putra (2024) merepresentasikan kontribusi penting dalam menerjemahkan kerangka psikometrik ke dalam praktik ergonomi industri logistik modern Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Beban Kerja Mental (*Mental Workload*)

Beban kerja mental didefinisikan sebagai total tuntutan aktivitas kognitif, perseptual, dan motorik yang dibebankan kepada operator dalam suatu sistem kerja pada periode waktu tertentu (Young & Stanton, 2002; Rafi & Putra, 2024). Berbeda dengan beban kerja fisik yang relatif terukur melalui denyut jantung atau kalorimetri, beban kerja mental harus diukur secara multidimensi karena melibatkan aspek tuntutan tugas, usaha, dan respons afektif.

### 2.2 Instrumen NASA-TLX

NASA-TLX menggunakan enam subskala yang dinilai menggunakan *Likert-type bipolar scale* 0–100 *step* 5:

1. **Mental Demand (MD)** – tuntutan aktivitas berpikir, memutuskan, menghitung.
2. **Physical Demand (PD)** – tuntutan aktivitas fisik.
3. **Temporal Demand (TD)** – tekanan waktu.
4. **Performance (OP)** – persepsi keberhasilan pencapaian target (skala terbalik: skor rendah = kinerja tinggi).
5. **Effort (EF)** – usaha fisik dan mental yang dikeluarkan.
6. **Frustration (FR)** – tingkat frustrasi, irritabilitas, dan ketidaknyamanan.

Prosedur pengukuran dua tahap:

**Tahap 1 – *Card Sorting* (15 pasangan):** Setiap responden memilih subskala mana yang lebih dominan/signifikan dari tiap pasangan, menghasilkan *Raw Weight* $w_i \in \{0,1\}$ untuk tiap dimensi ke-$i$.

**Tahap 2 – *Rating*:** Responden memberi skor $r_i \in [0, 100]$ untuk keenam dimensi.

**Formulasi Indeks Beban Kerja Mental (WWL):**

$$
WWL = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{\sum_{i=1}^{6} w_i} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}
$$

karena jumlah bobot maksimum dari 15 pasangan *card sort* selalu bernilai 15.

Atau dalam representasi eksplisit:

$$
WWL = \frac{w_{MD} \cdot r_{MD} + w_{PD} \cdot r_{PD} + w_{TD} \cdot r_{TD} + w_{OP} \cdot r_{OP} + w_{EF} \cdot r_{EF} + w_{FR} \cdot r_{FR}}{15}
$$

### 2.3 *Work Sampling* untuk Korelasi Beban Kerja

Menurut Aditya dan Putra (2024), untuk memvalidasi hasil NASA-TLX digunakan teknik *work sampling* dengan rumus probabilitas kejadian:

$$
p = \frac{x}{n}, \quad SE = \sqrt{\frac{p(1-p)}{n}}, \quad Z_{\alpha/2}=1.96 \text{ untuk } \alpha=0.05
$$

dengan ukuran sampel minimum:

$$
n = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}
$$

di mana $E$ adalah *margin of error* yang dapat diterima.

### 2.4 Klasifikasi Tingkat Beban Kerja

Berdasarkan referensi Rafi dan Putra (2024):

| Rentang WWL | Kategori |
|---|---|
| 0 – 20 | Rendah |
| 21 – 40 | Cukup Rendah |
| 41 – 60 | Sedang |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka Implementasi NASA-TLX pada Operator Shopee Express

Berdasarkan paper Rafi dan Putra (2024), tahapan implementasi mengikuti protokol:

```
┌─────────────────────────────────────────┐
│ Tahap 1: Identifikasi Uji Kerja         │
│   ├─ Sortir paket (scanning, routing)   │
│   ├─ Loading & unloading                │
│   ├─ Pengantaran last-mile              │
│   └─ Customer service inbound           │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│ Tahap 2: Penyiapan Instrumen            │
│   ├─ Kuesioner NASA-TLX (Bahasa Indo)   │
│   ├─ Lembar card-sort (15 pair)         │
│   └─ Briefing responden                 │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│ Tahap 3: Pengumpulan Data               │
│   ├─ Sampling 30–50 responden           │
│   ├─ Uji validitas (Cronbach α > 0.7)   │
│   └─ Uji reliabilitas                  │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│ Tahap 4: Analisis Data                  │
│   ├─ Perhitungan WWL agregat            │
│   ├─ Identifikasi dimensi dominan       │
│   └─ Rekomendasi ergonomi               │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│ Tahap 5: Rekomendasi & Implementasi     │
│   ├─ Job rotation                       │
│   ├─ Redesign workstation               │
│   ├─ Training cognitive resilience      │
│   └─ Monitoring berkala                 │
└─────────────────────────────────────────┘
```

### 3.2 Standar Prosedur Operasional Pengukuran

1. **Pra-pengukuran:** Briefing responden ≥10 menit, penjelasan maksud, hak menolak, kerahasiaan data.
2. **Uji Coba Pilot:** Minimal 5 responden untuk validasi pemahaman instrumen.
3. **Pengukuran Aktual:** Dilakukan setelah shift kerja berakhir atau *rest break* (periode paling valid karena total kumulasi beban kerja sudah terakumulasi).
4. **Validitas Internal:** Uji Cronbach's Alpha $\alpha$ dengan formula:

$$
\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{Y_i}}{\sigma^2_X}\right)
$$

dimana $k$ adalah jumlah item, $\sigma^2_{Y_i}$ varians tiap item, dan $\sigma^2_X$ varians total. Syarat: $\alpha \geq 0.70$.

5. **Pengendalian Bias:** Anonimitas responden, rotasi urutan dimensi untuk mengurangi *order effect*.

### 3.3 Integrasi dengan *Work Sampling*

Aditya dan Putra (2024) mengusulkan integrasi dua metode: NASA-TLX sebagai pengukuran subjektif kognitif dan *work sampling* sebagai pengukuran objektif waktu kerja. Pola korelasi silang ini menghasilkan *triangulasi metodologis* yang lebih robust.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Sortir Paket di Shopee Express Hub Jakarta Selatan

Misalkan dilakukan studi terhadap 30 operator sortir di Hub Jakarta Selatan pada periode Harbolnas dengan volume 12.000 paket/hari. Berikut adalah data *card-sort* agregat (jumlah responden yang memilih tiap dimensi sebagai "paling dominan"):

| Dimensi | Bobot $w_i$ (dari 30 resp.) | Rating rata-rata $r_i$ |
|---|---|---|
| Mental Demand (MD) | 5 | 75 |
| Physical Demand (PD) | 3 | 60 |
| Temporal Demand (TD) | 4 | 85 |
| Performance (OP) | 1 | 30 |
| Effort (EF) | 2 | 70 |
| Frustration (FR) | 0 | 50 |
| **Total** | **15** | — |

**Langkah 1: Hitung pembilang (pembobot × rating)**

$$
\sum w_i r_i = (5)(75) + (3)(60) + (4)(85) + (1)(30) + (2)(70) + (0)(50)
$$

$$
= 375 + 180 + 340 + 30 + 140 + 0 = 1065
$$

**Langkah 2: Hitung penyebut (jumlah bobot)**

$$
\sum_{i=1}^{6} w_i = 5 + 3 + 4 + 1 + 2 + 0 = 15
$$

**Langkah 3: Hitung WWL**

$$
WWL = \frac{1065}{15} = 71
$$

**Interpretasi:** $WWL = 71$ berada pada rentang 61–80 → **kategori TINGGI**. Operator sortir di Hub Jakarta Selatan memiliki beban kerja mental pada level tinggi saat Harbolnas.

### 4.2 Identifikasi Dimensi Dominan

Dari bobot $w_i$, dimensi **Mental Demand** (5), **Temporal Demand** (4), dan **Physical Demand** (3) menjadi kontributor utama. Ini menunjukkan:
- **Konsentrasi kognitif tinggi** saat scanning dan routing keputusan pengiriman.
- **Tekanan waktu signifikan** karena SLA same-day.
- **Beban fisik sorting** paket dengan berbagai dimensi dan berat.

### 4.3 Perhitungan Uji Reliabilitas (Cronbach Alpha)

Misalkan data rating 30 responden pada 6 dimensi menghasilkan varians tiap item dan varians total sebagai berikut (ilustratif):

| Dimensi | $\sigma^2_{Y_i}$ |
|---|---|
| MD | 142.3 |
| PD | 198.5 |
| TD | 167.8 |
| OP | 215.4 |
| EF | 156.2 |
| FR | 234.7 |
| $\sigma^2_X$ (total) | 1428.6 |

$$
\alpha = \frac{6}{6-1}\left(1 - \frac{142.3+198.5+167.8+215.4+156.2+234.7}{1428.6}\right)
$$

$$
= 1.2 \left(1 - \frac{1114.9}{1428.6}\right) = 1.2 (1 - 0.7805) = 1.2 (0.2195) = 0.2634
$$

Hasil $\alpha < 0.70$ menunjukkan instrumen perlu di-*review* atau ditingkatkan jumlah item, atau dilakukan pengukuran berulang.

### 4.4 Rekomendasi Kuantitatif

Untuk menurunkan WWL dari 71 ke kategori sedang (≤ 60), diperlukan pengurangan beban mental atau relokasi temporal demand. Strategi:

$$
\Delta WWL_{target} = 71 - 55 = 16 \text{ poin}
$$

Skenario rekomendasi:
- **Job rotation** setiap 2 jam (mengurangi Temporal Demand dari 85 → 65): ΔWWL ≈ $-\frac{4 \times (85-65)}{15} = -5.3$
- **Redesign konveyor sortir otomatis** (mengurangi Physical Demand dari 60 → 50): ΔWWL ≈ $-\frac{3 \times 10}{15} = -2.0$
- **Penambahan breaks micro (5 menit tiap 90 menit)** (mengurangi Mental Demand 75 → 65): ΔWWL ≈ $-\frac{5 \times 10}{15} = -3.3$
- **Total estimasi ΔWWL:** $-10.6$ → WWL baru ≈ 60.4 (masuk kategori