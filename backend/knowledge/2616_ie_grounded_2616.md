# 2616 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Gudang Menggunakan Metode NASA-TLX Terintegrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor *e-commerce* dan layanan kurir *last-mile* di Indonesia mengalami ekspansi eksponensial pasca-pandemi COVID-19. Data internal Shopee dan laporan tahunan industri logistik menunjukkan bahwa Shopee Express Partner (sebagai armada pengiriman milik *third-party logistics*/3PL yang berafiliasi dengan platform Shopee) menangani volume paket harian yang fluktuatif tajam, terutama pada periode *harbolnas* (Hari Belanja Nasional) seperti 12.12, 11.11, dan 9.9. Muhammad Rafi dan Boy Isma Putra (2024) dalam naskah yang diterbitkan di *Universitas Muhammadiyah Surakarta Peer-Reviewed Journal* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa peningkatan volume parcel tanpa diimbangi restrukturisasi beban kerja mitra kurir memicu degradasi kesejahteraan psikofisiologis operator. Studi tersebut menjadi signifikan karena mengaplikasikan *NASA Task Load Index* (NASA-TLX) — instrumen subjektif yang dikembangkan oleh Hart dan Staveland (1988) — pada konteks lokal *gig economy* Indonesia yang masih minim eksplorasi empiris.

Dalam perspektif Teknik Industri, beban kerja mental bukan sekadar variabel ergonomik melainkan *leading indicator* bagi *human error rate*, *overtime cost*, *absenteeism*, dan *service level agreement* (SLA) breach yang berdampak langsung pada *cost of poor quality* (COPQ). Studi kedua yang dilakukan oleh M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas aplikasi NASA-TLX ke operator gudang dengan mengombinasikannya bersama *work sampling* untuk memvalidasi asumsi proporsi aktivitas secara kuantitatif. Kedua paper ini mengisi *gap* riset nasional yang selama ini didominasi oleh metode objektif seperti pengukuran denyut nadi (*heart rate variability*) atau *time motion study* semata, tanpa mengintegrasikan persepsi subjektif pekerja sebagai *ground truth* perancangan ulang sistem kerja.

Urgensi ekonomis dapat dihitung secara kasar: dengan asumsi tarif pengiriman rata-rata Rp 5.500/paket dan *failure rate* yang meningkat dari 2% menjadi 5% akibat kelelahan mental operator, kerugian tahunan sebuah *sorting hub* berskala 10.000 paket/hari dapat melebihi Rp 1,3 miliar per tahun. Oleh karena itu, pemahaman granular terhadap dimensi-dimensi NASA-TLX — *Mental Demand*, *Physical Demand*, *Temporal Demand*, *Performance*, *Effort*, dan *Frustration* — menjadi basis rekayasa untuk *workload balancing*, *shift rotation policy*, dan *automation investment justification*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX sebagai Instrumen Multidimensi

NASA-TLX mengukur beban kerja melalui dua tahap prosedural: (1) *Raw TLX* (unweighted average dari enam skala Likert 0–100), dan (2) *Weighted TLX* yang dihasilkan dari prosedur *card sorting* berbasis *pairwise comparison*. Keenam subskala didefinisikan secara operasional oleh Hart (2006):

| Simbol | Dimensi | Interpretasi Operasional |
|:---:|:---|:---|
| $MD$ | Mental Demand | Jumlah aktivitas perseptual dan kognitif yang diperlukan |
| $PD$ | Physical Demand | Jumlah aktivitas fisik yang diperlukan |
| $TD$ | Temporal Demand | Tekanan waktu yang dirasakan operator |
| $PE$ | Performance | Pencapaian tujuan任務 (skala *reverse-coded*) |
| $EF$ | Effort | Jumlah kerja keras yang dikeluarkan secara mental dan fisik |
| $FR$ | Frustration | Tingkat irritasi, stress, dan ketidaknyamanan |

Formulasi *Raw TLX* dinyatakan sebagai:

$$TLX_{raw} = \frac{MD + PD + TD + PE + EF + FR}{6} \quad (1)$$

Sementara *Weighted TLX* dihasilkan melalui 15 perbandingan berpasangan yang menghasilkan *vector bobot* $w = (w_{MD}, w_{PD}, w_{TD}, w_{PE}, w_{EF}, w_{FR})$ dengan kendala:

$$\sum_{i=1}^{6} w_i = 15 \quad (2)$$

sehingga skor total berbobot dihitung dengan:

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15} \quad (3)$$

dengan $r_i$ adalah rating mentah dimensi ke-$i$. Rafi dan Putra (2024) mengadopsi *Weighted TLX* sebagai variabel dependen utama karena memberikan bobot proporsional terhadap dimensi yang secara subjektif paling relevan bagi Shopee Express Partner.

### 2.2 Work Sampling dan Penentuan Ukuran Sampel

Untuk paper kedua ([10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), Aditya.R dan Putra (2024) mengintegrasikan *work sampling* dengan parameter statistik:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2} \quad (4)$$

dengan:
- $N$ = jumlah observasi minimum
- $Z$ = nilai Z-distribusi pada tingkat kepercayaan tertentu (1,96 untuk 95%)
- $p$ = proporsi aktivitas yang diestimasi (default 0,5 untuk menghasilkan $N$ maksimum)
- $E$ = *allowable error* (presisi yang diinginkan, tipikal 0,05)

Persentase aktivitas $P_i$ dihitung sebagai:

$$P_i = \frac{n_i}{N} \times 100\% \quad (5)$$

dengan $n_i$ = jumlah pengamatan pada kategori aktivitas $i$. *Standard error* untuk proporsi aktivitas dihitung dengan:

$$SE = \sqrt{\frac{p(1-p)}{N}} \quad (6)$$

### 2.3 Relasi Beban Kerja dan Produktivitas

Model klasik hubungan antara beban kerja dan produktivitas individu mengikuti fungsi kuadratik terbalik (Spector, 2002), yang menjustifikasi adanya *optimal load*:

$$Y = a - b(W - W^*)^2 \quad (7)$$

dengan $Y$ = produktivitas, $W$ = skor TLX, $W^*$ = beban kerja optimal (umumnya 50–60 pada skala 0–100), dan $a, b > 0$. Persamaan ini menjadi dasar justifikasi bahwa skor TLX > 80 mengindikasikan zona *overload* yang membutuhkan *intervensi ergonomi*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi dan Putra (2024) menyusun SOP riset dalam lima tahap:

```
┌─────────────────────────────────────────────────────┐
│ Tahap 1: Identifikasi populasi & sampling operator  │
│   ↓ (N=30–50 Shopee Express Partner aktif)         │
│ Tahap 2: Konstruksi kuesioner NASA-TLX bilingual    │
│   ↓ (terjemahan & *back-translation* oleh 2 ahli)  │
│ Tahap 3: Pra-survei & uji validitas konstruk        │
│   ↓ (Cronbach's α ≥ 0.70 sebagai ambang)           │
│ Tahap 4: Pelaksanaan survey + work sampling         │
│   ↓ (pengamatan acak 15 detik selama 3 hari kerja)  │
│ Tahap 5: Analisis data & pemetaan rekomendasi       │
└─────────────────────────────────────────────────────┘
```

**Diagram alur komputasi NASA-TLX:**

$$\boxed{\text{Input Ratings } r_i} \rightarrow \boxed{\text{Pairwise Comparison}} \rightarrow \boxed{\text{Derive } w_i} \rightarrow \boxed{\text{Compute } TLX_w} \rightarrow \boxed{\text{Threshold Mapping}}$$

Untuk implementasi di industri, berikut adalah SOP *workload assessment* yang terstandardisasi:

1. **Pra-kondisi**: Operator telah bekerja minimal 2 jam (menghindari *cold start bias*).
2. **Instrumen**: Kertas kuesioner NASA-TLX atau aplikasi digital (misal *PEMEX NASA-TLX App*).
3. **Waktu**: Setiap akhir shift atau setiap 4 jam kerja.
4. **Anonymity**: Kode ID tanpa nama untuk mengurangi *social desirability bias*.
5. **Triangulasi**: Data subjektif NASA-TLX divalidasi dengan *work sampling* objektif (Aditya.R & Putra, 2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus A: Shopee Express Partner (Berdasarkan Rafi & Putra, 2024)

Misalkan hasil pengumpulan data pada 1 mitra kurir di *sorting hub* Jakarta selama periode *flash sale* menghasilkan skor mentah sebagai berikut:

| Dimensi | Rating $r_i$ | Bobot $w_i$ |
|:---|:---:|:---:|
| Mental Demand ($MD$) | 75 | 5 |
| Physical Demand ($PD$) | 80 | 4 |
| Temporal Demand ($TD$) | 85 | 3 |
| Performance ($PE$) | 30 | 0 |
| Effort ($EF$) | 70 | 2 |
| Frustration ($FR$) | 60 | 1 |

**Step 1 — Hitung Raw TLX (Persamaan 1):**

$$TLX_{raw} = \frac{75 + 80 + 85 + 30 + 70 + 60}{6} = \frac{400}{6} = 66{,}67$$

**Step 2 — Verifikasi konstrain bobot (Persamaan 2):**

$$\sum w_i = 5 + 4 + 3 + 0 + 2 + 1 = 15 \quad \checkmark$$

**Step 3 — Hitung Weighted TLX (Persamaan 3):**

$$TLX_{weighted} = \frac{(5)(75) + (4)(80) + (3)(85) + (0)(30) + (2)(70) + (1)(60)}{15}$$

$$= \frac{375 + 320 + 255 + 0 + 140 + 60}{15} = \frac{1150}{15} = 76{,}67$$

**Interpretasi manajerial:** Skor $TLX_{weighted} = 76{,}67$ masuk kategori *high workload* (>70 menurut Hart, 2006). Dimensi *Temporal Demand* dan *Physical Demand* mendominasi,