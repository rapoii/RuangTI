# 1582 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. SSRN. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. SSRN. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sektor *capital-intensive* dengan karakteristik teknis tertinggi, di mana satu unit pesawat narrow-body bernilai ratusan juta dolar AS dan harus mempertahankan tingkat ketersediaan (*availability*) yang ekstrem untuk menjamin kelayakan ekonomi. Dalam kerangka regulasi internasional yang ditetapkan oleh International Civil Aviation Organization (ICAO) Annex 6 dan diimplementasikan secara nasional oleh otoritas penerbangan, setiap pesawat harus menjalani siklus pemeliharaan terstruktur yang dikenal dengan kebijakan A/B/C/D-Check. Zhou (2024) dalam studinya menjelaskan bahwa kebijakan hirarkis A/B/C/D-Check yang digunakan secara universal di sektor MRO penerbangan dewasa ini menghadapi tantangan fundamental berupa *trade-off* antara ketersediaan armada, keselamatan operasional, dan total biaya siklus hidup (*life cycle cost* — LCC).

Menurut Zhou (2024, DOI: 10.2139/ssrn.6387479), konsep Reliability-Centered Maintenance (RCM), yang awalnya diperkenalkan oleh Nowlan dan Heap (1978) untuk industri penerbangan militer AS, telah berkembang menjadi kerangka kerja universal untuk industri *asset-heavy* karena kemampuannya dalam mengkuantifikasi degradasi performa siklus hidup yang bersifat non-linear. RCM memungkinkan optimalisasi operasi melalui peningkatan keselamatan dan ketersediaan, namun pemodelan dan implementasinya masih sangat menantang ketika diterapkan pada sistem kompleks seperti kebijakan MRO A/B/C/D yang beroperasi secara hirarkis. Zhou menekankan bahwa D-Check — yang merupakan *overhaul* penuh pesawat yang memerlukan pesawat dikeluarkan dari layanan selama 1–2 bulan — merupakan kontributor terbesar terhadap *downtime* armada dan berdampak langsung terhadap revenue loss operator.

Konteks ekonomi menjadi pendorong utama adopsi model RCM hirarkis. Dengan harga sewa harian (*daily lease rate*) pesawat narrow-body seperti Airbus A320 atau Boeing 737 yang mencapai USD 25.000–45.000 per hari pada pasar 2024, setiap jam *ground time* yang tidak perlu akan menimbulkan opportunity cost yang sangat signifikan. Lebih lanjut, biaya D-Check penuh untuk satu unit pesawat narrow-body dapat mencapai USD 4–6 juta, sementara C-Check berkisar USD 500.000–1.000.000. Oleh karena itu, paper Zhou (2024) mengusulkan sebuah *MRO policy framework* yang mengintegrasikan siklus D-Check penuh dengan *partial refurbishment* selama fase *mature-run* operasi penerbangan, dengan optimasi penjadwalan berdasarkan waktu operasi tersedia maksimum (*maximum available operation time*). Eksistensi nilai optimal untuk model ketersediaan ditunjukkan secara matematis, memberikan landasan analitis bagi pengambilan keputusan manajerial di industri MRO.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Hierarki Pemeliharaan A/B/C/D-Check

Zhou (2024, DOI: 10.2139/ssrn.6387479) membangun model dengan empat tingkat pemeliharaan yang masing-masing memiliki interval waktu $T_A$, $T_B$, $T_C$, $T_D$ dengan relasi hirarkis:

$$T_A < T_B < T_C < T_D, \quad T_B = k_1 T_A, \quad T_C = k_2 T_B, \quad T_D = k_3 T_C$$

di mana $k_1$, $k_2$, $k_3$ merupakan *multiplier factors* yang nilainya khas untuk kelas pesawat. Untuk narrow-body umumnya $T_A = 400\text{–}600$ flight hours, $T_C = 20\text{–}24$ bulan, dan $T_D = 6\text{–}12$ tahun.

### 2.2 Fungsi Keandalan dan Degradasi Non-Linear

Zhou (2024) mengadopsi distribusi Weibull untuk memodelkan degradasi non-linear dari subsistem pesawat:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad \beta > 0, \quad \eta > 0$$

dengan $\beta$ adalah *shape parameter* (untuk $\beta > 1$ menunjukkan *wear-out*) dan $\eta$ adalah *scale parameter* (characteristic life). Laju kegagalan (*hazard rate*) diberikan oleh:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3 Model Ketersediaan Hirarkis

Inherent availability untuk satu siklus D-Check dengan *partial refurbishments* intervening didefinisikan oleh Zhou (2024) sebagai:

$$A = \frac{T_{op}}{T_{op} + T_{cm} + T_{pm}}$$

di mana:
- $T_{op}$ = total waktu operasi tersedia (flight hours)
- $T_{cm}$ = total *corrective maintenance* time
- $T_{pm}$ = total *preventive maintenance* time

Untuk kebijakan hirarkis dengan $N$ D-Check cycles dan $m$ *partial refurbishments* per siklus mature-run:

$$A_{cycle} = \frac{N \cdot T_{op,segment}}{N \cdot (T_{op,segment} + T_{partial}) + T_{D-check}}$$

### 2.4 Formulasi Optimasi

Zhou (2024, DOI: 10.2139/ssrn.6387479) membuktikan eksistensi nilai optimal $A^*$ melalui formulasi:

$$\max_{N, m, T_{partial}} A(N, m, T_{partial})$$

*subject to constraints:*

$$C_{total} = N \cdot C_{D-check} + N \cdot m \cdot C_{partial} + C_{unplanned} \leq C_{budget}$$

$$R(t_{D-check}) \geq R_{min}$$

di mana $R_{min}$ adalah ambang batas keandalan minimum yang disyaratkan regulator. *Theorem of existence* dibuktikan dengan menggunakan sifat konkavitas fungsi tujuan pada domain tertutup, sebagaimana diuraikan Zhou melalui pendekatan *renewal reward theorem*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Framework MRO Hirarkis

Zhou (2024) mengusulkan arsitektur tiga-lapis sebagai berikut:

**Lapisan 1 — *Operational Layer*:** Berisi *line maintenance* (A/B-Check) yang dilakukan di hangar garis depan dengan waktu *turnaround* 8–24 jam. Aktivitas meliputi inspeksi visual, *servicing*, dan penggantian unit *line replaceable unit* (LRU).

**Lapisan 2 — *Intermediate Layer*:** C-Check yang dilakukan di hangar khusus dengan durasi 1–2 minggu, melibatkan inspeksi detail sistem, *non-destructive testing* (NDT), dan *partial refurbishment*.

**Lapisan 3 — *Heavy Maintenance Layer*:** D-Check yang merupakan *overhaul* penuh pesawat, durasi 1–2 bulan, melibatkan pembongkaran kabin, inspeksi struktur, pengecatan, dan *re-certification* penuh.

### 3.2 Diagram Alir Proses Optimasi

```
[INPUT] Data operasi historis
    ↓
[STEP 1] Estimasi parameter Weibull (β, η) via MLE
    ↓
[STEP 2] Hitung reliability R(t) pada interval checks
    ↓
[STEP 3] Formulasikan fungsi availability A(N, m, T_p)
    ↓
[STEP 4] Optimasi dengan kendala biaya dan keandalan
    ↓
[STEP 5] Validasi nilai optimal A*
    ↓
[OUTPUT] Jadwal pemeliharaan optimal
```

### 3.3 SOP Implementasi

Berdasarkan temuan Zhou (2024, DOI: 10.2139/ssrn.6387479), implementasi SOP mengikuti tahapan: (1) pengumpulan data telemetri dan *unscheduled removal* dari fleet management system; (2) analisis *failure mode, effects, and criticality analysis* (FMECA); (3) penentuan *decision logic tree* sesuai standar MSG-3; (4) konfigurasi ulang interval berdasarkan *reliability growth*; (5) audit kepatuhan oleh otoritas penerbangan. Standar acuan meliputi SAE JA1011/JA1012 untuk RCM, ATA MSG-3 untuk *maintenance program development*, dan EASA Part-M / FAA 14 CFR Part 121 untuk regulasi operasional.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Pertimbangkan sebuah operator narrow-body fleet dengan karakteristik berikut (representatif untuk armada A320 berdasarkan data tipikal industri 2024 yang diacu Zhou, 2024):

| Parameter | Nilai | Simbol |
|---|---|---|
| Total flight hours per tahun | 3.000 jam | $F$ |
| Interval A-Check | 500 jam | $T_A$ |
| Interval C-Check | 6.000 jam | $T_C$ |
| Interval D-Check | 24.000 jam | $T_D$ |
| Durasi A-Check | 12 jam | $d_A$ |
| Durasi C-Check | 240 jam (~10 hari) | $d_C$ |
| Durasi D-Check | 1.440 jam (60 hari) | $d_D$ |
| *Daily lease rate* | USD 30.000 | $L$ |
| Biaya D-Check | USD 5.000.000 | $C_D$ |
| Biaya C-Check | USD 750.000 | $C_C$ |
| Biaya *partial refurbishment* | USD 1.500.000 | $C_P$ |
| Parameter Weibull $\beta$ | 2,5 | $\beta$ |
| Parameter Weibull $\eta$ | 30.000 jam | $\eta$ |

### 4.2 Perhitungan Availability Baseline (Tanpa Partial Refurbishment)

Jumlah C-Check per D-Check cycle:
$$n_C = \frac{T_D}{T_C} = \frac{24.000}{6.000} = 4 \text{ C-Checks}$$

Total *downtime* per D-Check cycle:
$$D_{total} = d_D + n_C \cdot d_C = 1.440 + 4(240) = 2.400 \text{ jam}$$

Total *uptime* per D-Check cycle:
$$U_{total} = T_D - D_{total} = 24.000 - 2.400 = 21.600 \text{ jam}$$

Availability baseline:
$$A_{baseline} = \frac{21.600}{24.000} = 0{,}900 = 90{,}0\%$$

### 4.3 Penerapan Partial Refurbishment (m = 2 per mature-run)

Dengan menyisipkan 2 *partial refurbishments* pada *mature-run phase* (di antara C-Check ke-1 dan ke-2, serta ke-3 dan ke-4), masing-masing berdurasi $d_P = 360$ jam (15 hari), diperoleh:

Total *downtime* per D-Check cycle:
$$D_{total}^{new} = d_D + n_C \cdot d_C + m \cdot d_P = 1.440 + 4(240) + 2(360) = 2.640 \text{ jam}$$

*Uptime* tetap (asumsi operasi tidak berubah, hanya distribusi maintenance):
$$U_{total} = 21.600 - 2 \cdot 360 = 20.880 \text{ jam}^*$$

*\*Catatan: sebenarnya dengan partial refurbishment, lifetime dapat diperpanjang; untuk konsistensi perhitungan ini kita evaluasi pada horizon 24.000 jam.*

Availability dengan partial refurbishment:
$$A_{new} = \frac{20.880}{24.000} = 0{,}870 = 87{,}0\%$$

### 4.4 Analisis Cost-Benefit

*Downtime cost* baseline:
$$DC_{base} = 2.400 \text{ jam} \times \frac{30.000}{24} = \text{USD }3.000.000$$

*Downtime cost* dengan partial refurbishment:
$$DC_{new} = 2.640 \text{ jam} \times \frac{30.000}{24} = \text{USD }3.300.000$$

Selisih biaya:
$$\Delta C = (C_D + 2 C_P + 4 C_C) - (C_D + 4 C_C) = 2 \times 1.500.000 = \text{USD }3.000.000$$

Namun, dengan partial refurbishment, lifetime pesawat dapat diperpanjang karena *rejuvenation* subsistem kritis. Zhou (2024) menunjukkan bahwa setiap partial refurbishment efektif meningkatkan *equivalent new* condition sebesar fraksi $\alpha = 0{,}25$–$0{,}35$. Dengan $\alpha = 0{,}30$:

$$T_{D,extended} = T_D (1 + m \cdot