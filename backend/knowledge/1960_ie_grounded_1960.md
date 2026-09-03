# 1960 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dengan Metode NASA-TLX: Studi Kasus Shopee Express & Warehouse Operator

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai Rp1.530 triliun pada tahun 2025 (menurut laporan Bank Indonesia) telah menempatkan sektor *e-commerce* sebagai tulang punggung baru rantai pasok nasional. Shopee, sebagai salah satu *marketplace* terbesar di Asia Tenggara, mengandalkan jaringan *Shopee Express Partner* (sebutan kurir pihak ketiga) untuk menangani *last-mile delivery*, sortasi, dan pergudangan. Namun di balik pertumbuhan *Gross Merchandise Value* (GMV) yang eksponensial, terdapat beban kerja kognitif yang signifikan yang dialami oleh operator sortir dan kurir, terutama pada periode puncak seperti *flash sale*, Harbolnas, dan Ramadan. Muhammad Rafi dan Boy Isma Putra (2024) dalam paper *"Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method"* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa tekanan untuk memenuhi *Service Level Agreement* (SLA) pengiriman 24 jam, akurasi sortir paket di atas 99%, dan target harian pengiriman 80–120 paket per shift, meningkatkan risiko kelelahan mental, *human error*, dan *turnover* karyawan.

Konsekuensi ergonomis kognitif tersebut tidak dapat diabaikan: kesalahan *miss-route* pada logistik *e-commerce* Indonesia rata-rata menimbulkan *cost of quality* tambahan sebesar 8–12% dari biaya operasional kurir. Dalam konteks Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) berdasarkan PP No. 50 Tahun 2012 dan standar ISO 45001:2018, manajemen memiliki kewajiban moral dan legal untuk mengukur, mengevaluasi, dan mengendalikan beban kerja mental. Oleh karena itu, paper Rafi & Putra (2024) mengajukan NASA-TLX (*NASA Task Load Index*) yang dikembangkan oleh Hart & Staveland (1988) sebagai instrumen ergonomis terstandar untuk mengkuantifikasi *subjective workload* pada enam dimensi: *Mental Demand*, *Physical Demand*, *Temporal Demand*, *Performance*, *Effort*, dan *Frustration*. Pendekatan ini diperkuat oleh paper pendukung dari Aditya & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) yang mengintegrasikan NASA-TLX dengan *Work Sampling* untuk validasi beban kerja operator gudang. Urgensi penelitian ini menjadi semakin nyata ketika kita menyadari bahwa keputusan alokasi sumber daya manusia pada industri logistik modern tidak dapat lagi hanya didasarkan pada beban fisik (*physical workload*), melainkan harus mengintegrasikan dimensi kognitif yang merupakan *hidden cost driver* dalam operasional kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen *multidimensional subjective workload assessment* yang terdiri dari dua tahap prosedural: (1) *Raw TLX (RTLX)* berupa penilaian enam subskala independen dengan skala Likert 0–100, dan (2) *Weighted TLX (WTLX)* yang melakukan pembobotan melalui *pairwise comparison* terhadap 15 pasangan subskala untuk menghasilkan *Overall Workload Score* (OWS).

**Tahap 1: Raw TLX**

Setiap responden memberikan skor untuk enam dimensi berikut:

$$S_i \in [0, 100], \quad i \in \{MD, PD, TD, P, E, F\}$$

di mana MD = *Mental Demand*, PD = *Physical Demand*, TD = *Temporal Demand*, P = *Performance*, E = *Effort*, F = *Frustration*.

**Tahap 2: Penentuan Bobot (Card Sorting Task)**

Responden memilih anggota yang lebih berkontribusi terhadap beban kerja dari 15 pasangan $\binom{6}{2} = 15$. Frekuensi pemilihan subskala ke-$i$ dinotasikan sebagai $w_i$, dengan syarat:

$$\sum_{i=1}^{6} w_i = 15, \quad w_i \in \{0, 1, 2, \dots, 5\}$$

**Tahap 3: Overall Workload Score (OWS)**

$$\text{OWS} = \frac{\sum_{i=1}^{6} w_i \cdot S_i}{\sum_{i=1}^{6} w_i} = \frac{\sum_{i=1}^{6} w_i \cdot S_i}{15}$$

Nilai OWS berada pada rentang [0, 100] dengan klasifikasi beban kerja:

$$\text{OWS} = \begin{cases} 0 - 20 & \text{: Beban Kerja Rendah} \\ 21 - 40 & \text{: Beban Kerja Sedang} \\ 41 - 60 & \text{: Beban Kerja Cukup Tinggi} \\ 61 - 80 & \text{: Beban Kerja Tinggi} \\ 81 - 100 & \text{: Beban Kerja Sangat Tinggi} \end{cases}$$

**Formulasi Work Sampling (paper pendukung Aditya & Putra, 2024)**

Untuk validasi proporsi aktivitas, digunakan:

$$\bar{P} = \frac{\sum_{i=1}^{n} P_i}{n}, \quad \text{di mana } P_i = \frac{x_i}{N_i}$$

dengan $x_i$ = jumlah observasi kategori aktivitas tertentu pada hari ke-$i$, $N_i$ = total observasi pada hari ke-$i$, dan $n$ = jumlah hari observasi. *Standard Error* didekati dengan:

$$SE = \sqrt{\frac{\bar{P}(1-\bar{P})}{n}} \cdot \frac{1}{\sqrt{N}}$$

Ukuran sampel minimum untuk presisi 5% pada tingkat kepercayaan 95% ($Z=1{,}96$):

$$N_{min} = \frac{Z^2 \cdot p \cdot (1-p)}{e^2} = \frac{(1{,}96)^2 (0{,}5)(0{,}5)}{(0{,}05)^2} = 384{,}16 \approx 385 \text{ observasi}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express Partner mengikuti SOP yang diadaptasi dari paper Rafi & Putra (2024) dengan tujuh tahapan sistematis:

**Tahap 1 — Identifikasi Populasi & Sampling**
Tentukan populasi operator sortir (misal: 45 orang di Hub X). Gunakan *simple random sampling* dengan kriteria inklusi: pengalaman kerja minimal 3 bulan, tidak sedang cuti medis.

**Tahap 2 — Desain Instrumen**
Siapkan kuesioner NASA-TLX versi Bahasa Indonesia yang telah di-*back-translate* dan diuji validitas konstruk melalui *Cronbach's Alpha* ($\alpha \geq 0{,}70$). Instrumen terdiri dari (a) lembar rating 0–100 enam subskala, dan (b) kartu *pairwise comparison*.

**Tahap 3 — Pre-test & Briefing**
Lakukan *cognitive walkthrough* pada 5–10% responden untuk memastikan pemahaman istilah seperti *"frustration"* dan *"temporal demand"*.

**Tahap 4 — Pengumpulan Data**
Responden mengisi kuesioner pada akhir shift (post-task) atau menggunakan aplikasi digital (misal: Google Forms) dalam waktu 10–15 menit.

**Tahap 5 — Perhitungan Bobot & Skor**
Hitung frekuensi $w_i$ dari *pairwise comparison*, kemudian hitung OWS menggunakan rumus di Bagian 2.

**Tahap 6 — Analisis Statistik Inferensial**
Uji beda OWS antar kelompok (shift pagi/siang/malam) menggunakan *One-Way ANOVA* atau *Kruskal-Wallis* jika data tidak normal. Uji korelasi Pearson antara OWS dan variabel dependen (jumlah paket, jam lembur).

**Tahap 7 — Rekomendasi Ergonomis & Umpan Balik**
Susun *action plan* berupa: rotasi shift, redistribusi beban, investasi teknologi (conveyor scanner otomatis), atau *microbreak* terjadwal setiap 90 menit (standar NIOSH).

**Diagram Alir Proses:**

```
┌─────────────────────────┐
│ Identifikasi Masalah    │
│ Operasional (Beban      │
│ Mental Operator)        │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Sampling & Desain       │
│ Kuesioner NASA-TLX      │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Pre-test & Briefing     │
│ (Cronbach's Alpha ≥0,7) │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Pengumpulan Data        │
│ (Post-shift Survey)     │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐    ┌────────────────────┐
│ Perhitungan Bobot w_i  │───▶│ Card Sorting Task  │
└──────────┬──────────────┘    │ (15 Pairwise)      │
           ▼                    └────────────────────┘
┌─────────────────────────┐
│ Hitung OWS = Σ(w_i·S_i)/15│
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Analisis ANOVA / Uji   │
│ Korelasi Pearson       │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Rekomendasi Ergonomis:  │
│ Rotasi, Microbreak,     │
│ Otomasi Sortir          │
└─────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *Sorting Center* Shopee Express Partner di Kota Bekasi memiliki 3 shift kerja: pagi (08.00–16.00), siang (16.00–24.00), dan malam (24.00–08.00). Volume paket harian rata-rata 25.000 unit. Tim engineering ingin mengevaluasi beban kerja mental operator sortir pada masing-masing shift.

**Data Sampling:** 30 operator (10 per shift) mengisi kuesioner NASA-TLX. Berikut ringkasan *raw score* rata-rata per subskala:

| Subskala | Shift Pagi ($S_{pagi}$) | Shift Siang ($S_{siang}$) | Shift Malam ($S_{malam}$) |
|----------|:----:|:----:|:----:|
| Mental Demand (MD) | 65 | 70 | 80 |
| Physical Demand (PD) | 55 | 60 | 50 |
| Temporal Demand (TD) | 70 | 75 | 85 |
| Performance (P) | 30 | 35 | 40 |
| Effort (E) | 60 | 65 | 75 |
| Frustration (F) | 45 | 50 | 60 |

**Hasil Pairwise Comparison Agregat (Shift Malam sebagai kasus tertinggi):**

| Subskala | Frekuensi Kemenangan ($w_i$) |
|----------|:---:|
| MD | 4 |
| PD | 1 |
| TD | 5 |
| P | 0 |
| E | 3 |
| F | 2 |
| **Σ** | **15** |

**Perhitungan OWS Shift Malam:**

$$\text{OWS}_{malam} = \frac{(4)(80) + (1)(50) + (5)(85) + (0)(40) + (3)(75) + (2)(60)}{15}$$

$$= \frac{320 + 50 + 425 + 0 + 225 + 120}{15} = \frac{1140}{15} = 76{,}00$$

**Perhitungan OWS Shift Pagi** (asumsi bobot proporsional: $w_{MD}=3, w_{PD}=2, w_{TD}=4, w_P=0, w_E=3, w_F=3$):

$$\text{OWS}_{pagi} = \frac{(3)(65) + (2)(55) + (4)(70) + (0)(30) + (3)(60) + (3)(45)}{15}$$

$$= \frac{195 + 110 + 280 + 0 + 180 + 135}{15} = \frac{900}{15} = 60{,}00$$

**Perhitungan OWS Shift Siang** ($w_{MD}=3, w_{PD}=2, w_{TD}=5, w_P=1, w_E=2, w_F=2$):

$$\text{OWS}_{siang} = \frac{(3)(70) + (2)(60) + (5)(75) + (1)(35) + (2)(65) + (2)(50)}{15}$$

$$= \frac{210 + 120 + 375 + 35 + 130 + 100}{15} = \frac{970}{15} = 64{,}67$$

**Interpretasi Manajerial:**

| Shift | OWS | Kategori | Rekomendasi |
|-------|:---:|----------|-------------|
| Pagi | 60,00 | Cukup Tinggi | Redistribusi 5 operator dari shift malam |
| Siang | 64,67 | Tinggi | Tambah 1 *microbreak* (15 menit) di jam ke-4 |
| Malam | **76,00** | **Tinggi** | **Prioritas: tambah