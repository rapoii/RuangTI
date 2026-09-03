# 2536 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Ekspansi ekonomi digital Indonesia yang diproyeksikan menembus USD 130 miliar pada 2025 (Bain & Company, 2023) telah mengubah struktur operasional sektor *last-mile delivery* secara fundamental. Shopee Express, sebagai salah satu pilar logistik dari ekosistem Sea Group, mengoperasikan ribuan *partner*—mulai dari *sortation hub* hingga armada kurir—yang bekerja di bawah tekanan siklus pesanan (*order cycle*) yang sangat pendek, yaitu rata-rata kurang dari 24 jam dari *order placement* hingga *out for delivery*. Dalam lanskap ini, variabel manusia (*human factor*) menjadi *bottleneck* strategis yang tidak dapat direduksi oleh otomatisasi semata.

Penelitian Rafi & Putra (2024) dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti fenomena krusial bahwa *mental workload* karyawan *Shopee Express Partner* kerap kali melampaui ambang ergonomis, terutama pada periode *flash sale* dan *harbolnas* (hari belanja nasional) di mana volume parcels dapat melonjak 3–5 kali lipat. Studi ini mengadopsi *NASA Task Load Index* (NASA-TLX), instrumen subjektif yang dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi secara internasional melalui lebih dari 550 studi. Sementara itu, penelitian Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi analisis dengan teknik *work sampling* untuk mengkuantifikasi proporsi waktu produktif, *idle*, dan *delay* operator gudang—dua pendekatan yang saling melengkapi karena NASA-TLX mengukur **kualitas** beban kerja dari perspektif kognitif, sementara *work sampling* mengukur **kuantitas** utilisasi waktu kerja.

Urgensi manajerial dari kedua studi ini terletak pada korelasi langsung antara *mental workload* berlebih dengan *human error rate*, *turnover intention*, dan *occupational burnout*. Data International Labour Organization (ILO, 2022) menunjukkan bahwa *work-related stress* menyumbang 30–50% dari total klaim *occupational disease* di industri logistik global. Oleh karena itu, dokumen modul ini disusun untuk memberikan kerangka rekayasa yang komprehensif bagi praktisi Teknik Industri dalam mengukur, menganalisis, dan mereduksi beban kerja mental operator di lingkungan *fulfillment center* dan *sortation hub*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen *multidimensional* yang mengukur beban kerja melalui enam subskala, masing-masing dinilai pada rentang 0–100:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $R_{MD}$ | Mental Demand | Jumlah aktivitas kognitif (memilah, menghitung, mengambil keputusan) |
| $R_{PD}$ | Physical Demand | Aktivitas fisik (mengangkat, berjalan, mendorong) |
| $R_{TD}$ | Temporal Demand | Tekanan waktu untuk menyelesaikan tugas |
| $R_{P}$ | Performance | Pencapaian tujuan kerja oleh operator |
| $R_{E}$ | Effort | Tingkat usaha yang dikeluarkan |
| $R_{F}$ | Frustration | Tingkat frustrasi, irritasi, atau stres |

**Tahap 1: Pemberian Bobot (Pairwise Comparison)**
Responden memilih mana yang lebih dominan dari 15 pasangan $(C(6,2) = 15)$ subskala. Bobot $W_i$ untuk subskala ke-$i$ adalah:

$$W_i = \sum_{j=1, j \neq i}^{6} c_{ij}$$

dengan $c_{ij} = 1$ jika subskala $i$ lebih dominan dari $j$, dan $c_{ij} = 0$ jika sebaliknya. Total bobot ternormalisasi memenuhi $\sum W_i = 15$.

**Tahap 2: Perhitungan Weighted Workload**

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} W_i \cdot R_i}{15}$$

Nilai $TLX$ dikategorikan menurut Hart (2006):

| Kisaran TLX | Kategori Beban Kerja |
|---|---|
| 0 – 20 | Sangat Rendah |
| 21 – 40 | Rendah |
| 41 – 60 | Sedang |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

### 2.2 Work Sampling

Work sampling adalah teknik *statistical sampling* untuk menentukan proporsi waktu kerja yang dihabiskan pada kategori aktivitas tertentu. Jumlah observasi minimum yang dibutuhkan untuk tingkat keyakinan tertentu dihitung dengan rumus:

$$N = \frac{Z_{\alpha/2}^{2} \cdot p(1-p)}{e^{2}}$$

di mana:
- $Z_{\alpha/2}$ = nilai *Z* pada tingkat kepercayaan $1-\alpha$ (umumnya 1,96 untuk $\alpha = 0,05$)
- $p$ = proporsi estimasi aktivitas (default 0,5 untuk konservatif)
- $e$ = *margin of error* yang dapat diterima

Untuk populasi operator yang terbatas (populasi hingga $N_{pop}$), koreksi *finite population* diterapkan:

$$N_{adj} = \frac{N}{1 + \frac{N-1}{N_{pop}}}$$

**Indeks Performansi Operator (POI):**

$$POI = \frac{T_{productive}}{T_{productive} + T_{idle} + T_{delay}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Rafi & Putra (2024) di lingkungan operasional Shopee Express mengikuti **lima tahap prosedural** berikut:

**Tahap 1 — Persiapan dan Penentuan Unit Analisis**
Identifikasi岗位 (posisi kerja) yang akan dianalisis: *picker*, *packer*, *sorter*, *delivery partner*. Penentuan *time frame* observasi harus mencakup periode *peak* dan *non-peak* untuk menangkap variabilitas beban kerja musiman.

**Tahap 2 — Briefing dan Kalibrasi Responden**
Seluruh responden (N minimum 30 per kelompok kerja sesuai aturan *central limit theorem*) mengikuti *briefing* terstandar selama 30 menit untuk memastikan pemahaman konsisten terhadap keenam subskala NASA-TLX. Instrumen bilingual (Indonesia-Inggris) dibagikan untuk menghindari bias linguistik.

**Tahap 3 — Random Observation Cycle**
Observasi *work sampling* dilakukan dengan metode *random route* (jadwal observasi tidak terprediksi) untuk mencegah *Hawthorne effect*. Interval observasi acak mengikuti distribusi uniform:

$$t_{obs} \sim U(0, T_{shift})$$

dengan $T_{shift}$ = total durasi shift (8 jam = 28.800 detik). Pengamat mencatat kategori aktivitas setiap kali sinyal *buzzer* berbunyi.

**Tahap 4 — Pengisian Kuesioner NASA-TLX**
Setelah shift berakhir, responden mengisi kuesioner dengan *raw rating* dan *pairwise comparison card*. Validitas internal diuji menggunakan *Cronbach's alpha* dengan ambang minimum 0,70.

**Tahap 5 — Analisis Statistik dan Rekomendasi**
Data dianalisis dengan uji beda (*Mann-Whitney U* untuk data ordinal) dan korelasi *Spearman* antara $TLX$ dengan variabel kinerja. Rekomendasi perbaikan disusun berdasarkan *root cause analysis* dari subskala dominan.

Diagram alir proses secara visual dapat direpresentasikan sebagai:

```
┌─────────────────────┐
│ Identifikasi Posisi │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Briefing Responden  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐    ┌────────────────────┐
│  Work Sampling      │───→│ Random Observation │
│  (Tahap 3)          │    │  → Catat Aktivitas │
└──────────┬──────────┘    └────────────────────┘
           ↓
┌─────────────────────┐
│  Kuesioner NASA-TLX │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Analisis Statistik │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Rekomendasi SOP    │
└─────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Sortation Hub Shopee Express Jakarta Selatan

Sebuah *sortation hub* dengan 45 operator *sorter* akan dievaluasi beban kerja mentalnya selama periode *Mega Flash Sale* (volume parcels = 18.000 unit/hari, 2,5x rata-rata harian). Tujuh operator dijadikan responden, masing-masing menyelesaikan **15 pairwise comparisons** dan **6 raw ratings**.

**Tabel 1. Hasil Raw Rating Tujuh Operator Sorter**

| Operator | $R_{MD}$ | $R_{PD}$ | $R_{TD}$ | $R_{P}$ | $R_{E}$ | $R_{F}$ |
|---|---|---|---|---|---|---|
| OP-01 | 75 | 60 | 85 | 40 | 70 | 65 |
| OP-02 | 80 | 55 | 90 | 35 | 75 | 70 |
| OP-03 | 70 | 65 | 80 | 45 | 65 | 60 |
| OP-04 | 85 | 70 | 75 | 50 | 80 | 75 |
| OP-05 | 65 | 50 | 85 | 40 | 60 | 55 |
| OP-06 | 78 | 58 | 88 | 42 | 72 | 68 |
| OP-07 | 72 | 62 | 82 | 48 | 68 | 63 |
| **Rata-rata** $\bar{R}$ | **75,0** | **60,0** | **83,6** | **42,9** | **70,0** | **65,1** |

**Tabel 2. Bobot dari Pairwise Comparison (OP-01)**

| Pasangan | Dominan | Bobot |
|---|---|---|
| MD vs PD | MD | 1 |
| MD vs TD | TD | 0 |
| MD vs P | MD | 1 |
| MD vs E | MD | 1 |
| MD vs F | MD | 1 |
| PD vs TD | TD | 0 |
| PD vs P | PD | 1 |
| PD vs E | E | 0 |
| PD vs F | PD | 1 |
| TD vs P | TD | 1 |
| TD vs E | TD | 1 |
| TD vs F | TD | 1 |
| P vs E | E | 0 |
| P vs F | F | 0 |
| E vs F | E | 1 |

Hasil penjumlahan: $W_{MD}=4$, $W_{PD}=3$, $W_{TD}=5$, $W_{P}=1$, $W_{E}=2$, $W_{F}=0$ → $\sum W = 15$ ✓

**Perhitungan TLX OP-01 (menggunakan rating individu):**

$$TLX_{OP-01} = \frac{(4)(75) + (3)(60) + (5)(85) + (1)(40) + (2)(70) + (0)(65)}{15}$$

$$= \frac{300 + 180 + 425