# 1864 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Pergudangan Menggunakan Metode NASA-TLX: Kerangka Kuantitatif untuk Rekayasa Sumber Daya Manusia Industri E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami ekspansi eksponensial dalam dekade terakhir, dengan nilai *Gross Merchandise Value* (GMV) nasional menembus lebih dari US$53 miliar pada 2023 dan diproyeksikan terus tumbuh dengan CAGR di atas 13% (Bain & Company, 2024). Shopee, sebagai salah satu *marketplace* dominan di Asia Tenggara, mengoperasikan ekosistem logistik internal melalui Shopee Express (SPX) yang melayani volume pengiriman miliaran paket per tahun. Dalam struktur operasional SPX, *partner employees* — sering disebut sebagai *mitra* atau *third-party* — menjadi ujung tombak *last-mile delivery* yang menghadapi tekanan operasional unik: volume paket *peak season* (11.11, 12.12, Harbolnas) yang dapat melonjak 4–6 kali lipat dibanding hari biasa, *Service Level Agreement* (SLA) pengiriman 24–48 jam, serta kompleksitas alamat konsumen di Indonesia yang sangat heterogen.

Rafi & Putra (2024) dalam studinya menyoroti bahwa beban kerja bukan sekadar variabel fisik, melainkan dominan bersifat kognitif-mental: kurir SPX harus melakukan *multi-tasking* antara navigasi rute, verifikasi kode sortir, komunikasi dengan pelanggan via aplikasi, *scanning* barcode, penyelesaian *cash-on-delivery*, dan penanganan komplain dalam jendela waktu yang ketat. Pengukuran subjektif murni (*self-reported fatigue*) terbukti bias dan tidak granular. Oleh karena itu, penerapan **NASA-TLX** sebagai instrumen psikometrik terstandarisasi menjadi relevan karena mampu mengkuantifikasi *mental workload* melalui enam dimensi terstruktur.

Sementara itu, Aditya.R & Putra (2024) melengkapi gap tersebut dengan mengintegrasikan NASA-TLX bersama **Work Sampling** untuk operator gudang, menghasilkan pendekatan hibrida yang mengukur *effort* kognitif sekaligus proporsi utilisasi waktu kerja. Kedua paper ini menjadi rujukan utama Modul 1864 karena merepresentasikan state-of-the-art analisis *human factors* pada rantai pasok digital Indonesia. Urgensi ekonominya nyata: biaya *last-mile* menyumbang 41–53% dari total biaya logistik (World Bank, 2023), sehingga inefisiensi akibat beban kerja mental berlebihan — yang memicu *burnout*, turnover tinggi, dan human error — berdampak langsung pada margin dan kualitas layanan.

## 2. Landasan Teori & Formulasi Matematis

**NASA-TLX (Task Load Index)** dikembangkan oleh Hart & Staveland (1988) sebagai instrumen multidimensi untuk mengukur *subjective workload*. Terdiri dari enam subskala:

1. **Mental Demand (MD)** — aktivitas kognitif (mengingat, memutuskan, menghitung).
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, mendorong).
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (P)** — persepsi pencapaian tujuan tugas.
5. **Effort (E)** — usaha yang dikeluarkan untuk mencapai kinerja.
6. **Frustration (F)** — tingkat frustrasi/iritasi.

### 2.1 Prosedur Pairwise Comparison (Penentuan Bobot)

Responden memilih mana yang lebih "membebani" dari $\binom{6}{2} = 15$ pasangan dimensi. Setiap dimensi $i$ menerima bobot $w_i \in \{0,1,2,...,5\}$ dengan konstrain:

$$\sum_{i=1}^{6} w_i = 15$$

### 2.2 Pemberian Rating

Setiap dimensi diberi skor $r_i$ pada *Likert-type* skala 0–100 (dengan garis berskala visual *20-point bipolar* dan *5-point Likert* di ujungnya).

### 2.3 Skor Tertimbang (Weighted NASA-TLX)

$$\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

Nilai ini berada pada rentang **0–100**. Interpretasi menurut klasifikasi umum:

| Rentang Skor | Kategori Beban Kerja |
|---|---|
| 0–20 | Rendah (*Low*) |
| 21–40 | Cukup Rendah |
| 41–60 | Sedang (*Moderate*) |
| 61–80 | Cukup Tinggi |
| 81–100 | Tinggi (*High*) |

### 2.4 Skor Raw TLX (Tanpa Bobot)

Alternatif komputasi yang sering digunakan untuk *rapid assessment*:

$$\text{TLX}_{\text{raw}} = \frac{1}{6}\sum_{i=1}^{6} r_i$$

### 2.5 Integrasi dengan Work Sampling (Aditya.R & Putra, 2024)

Untuk *warehouse operators*, Aditya.R & Putra mengombinasikan NASA-TLX dengan Work Sampling untuk mendapatkan **Workload Index (WI)** komposit:

$$WI = \alpha \cdot \text{TLX}_{\text{weighted}} + \beta \cdot U_{\text{task}}$$

dengan $U_{\text{task}}$ adalah proporsi waktu produktif hasil *work sampling*, $\alpha$ dan $\beta$ adalah bobot relatif yang ditentukan expert judgment dengan $\alpha + \beta = 1$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX mengikuti protokol terstandar yang dikembangkan oleh NASA Human Performance Research Group:

**Tahap 1 — Penyiapan Instrumen**
- Cetak kuesioner *NASA-TLX Card Sort* dengan 15 kartu pasangan dimensi.
- Siapkan *rating scale* visual analog (garis 0–100 dengan *tick marks* per 5 unit).
- Lakukan *pilot study* pada 5–10% populasi untuk validasi pemahaman istilah.

**Tahap 2 — Pengumpulan Data**
- Pengukuran dilakukan **setelah** responden menyelesaikan tugas (post-task), untuk menghindari *interruption effect*.
- Estimasi ukuran sampel menggunakan rumus Slovin untuk populasi terbatas:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = jumlah populasi, $e$ = *margin error* (umumnya 0,05 atau 0,10). Rafi & Putra (2024) menggunakan $e=0,10$ untuk menghasilkan $n \approx 30$ responden mitra SPX di Pekanbaru.

**Tahap 3 — Analisis Data**
1. Rekapitulasi bobot $w_i$ dari kartu pairwise.
2. Rekapitulasi rating $r_i$ dari skala visual.
3. Hitung $\text{TLX}_{\text{weighted}}$ per responden.
4. Uji normalitas (Shapiro-Wilk) dan reliabilitas (Cronbach's Alpha $\geq 0{,}70$).
5. Analisis komparatif (uji-t atau Mann-Whitney) antar kelompok (shift pagi vs siang, senior vs junior).

**Tahap 4 — Interpretasi & Rekomendasi**
Kategorisasi hasil, identifikasi dimensi dominan, dan formulasi rekomendasi ergonomis (rotasi tugas, *rest break* mikro, redesign *delivery route*, *training*).

**Diagram Alir SOP:**

```
┌──────────────────┐
│ Identifikasi     │
│ Populasi & Tugas │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐    ┌─────────────────────┐
│ Pilot Study n=5  │───▶│ Validasi Instrumen  │
└────────┬─────────┘    └──────────┬──────────┘
         │                         │
         ▼                         ▼
┌──────────────────┐    ┌─────────────────────┐
│ Pengukuran       │    │ Revisi Kuesioner    │
│ Lapangan (n=30+) │◀───┤ (jika diperlukan)   │
└────────┬─────────┘    └─────────────────────┘
         │
         ▼
┌──────────────────┐
│ Pairwise Card    │
│ Sort (15 kartu)  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Rating 0-100     │
│ per Dimensi      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐    ┌─────────────────────┐
│ Hitung TLX       │───▶│ Uji Statistik      │
│ Weighted         │    │ & Cronbach's α      │
└────────┬─────────┘    └──────────┬──────────┘
         │                         │
         ▼                         ▼
┌──────────────────┐    ┌─────────────────────┐
│ Rekomendasi      │◀───┤ Interpretasi        │
│ Ergonomi         │    │ Kategori Beban      │
└──────────────────┘    └─────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *hub* Shopee Express di Pekanbaru memiliki 50 mitra kurir. Manajemen ingin mengevaluasi beban kerja mental selama periode *peak season* Harbolnas. Menggunakan rumus Slovin dengan $N=50$ dan $e=0{,}10$:

$$n = \frac{50}{1 + 50 \cdot (0{,}10)^2} = \frac{50}{1 + 0{,}50} = \frac{50}{1{,}50} \approx 33{,}33 \rightarrow 34 \text{ responden}$$

**Langkah 1 — Hasil Pairwise Comparison (rata-rata 34 responden):**

| Dimensi | Jumlah Kemenangan | Bobot $w_i$ |
|---|---|---|
| Mental Demand (MD) | 92 | 4 |
| Physical Demand (PD) | 38 | 2 |
| Temporal Demand (TD) | 68 | 3 |
| Performance (P) | 25 | 1 |
| Effort (E) | 48 | 3 |
| Frustration (F) | 35 | 2 |
| **Total** | **306*** | **15** |

*\*Catatan: Total kemenangan aktual bervariasi tergantung jumlah responden; disajikan sebagai ilustrasi.*

**Langkah 2 — Rating Rata-rata per Dimensi (skala 0–100):**

| Dimensi | Rating Rata-rata $r_i$ |
|---|---|
| MD | 78 |
| PD | 65 |
| TD | 85 |
| P | 35 |
| E | 72 |
| F | 60 |

**Langkah 3 — Perhitungan Weighted TLX:**

$$\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

$$= \frac{(4 \cdot 78) + (2 \cdot 65) + (3 \cdot 85) + (1 \cdot 35) + (3 \cdot 72) + (2 \cdot 60)}{15}$$

$$= \frac{312 + 130 + 255 + 35 + 216 + 120}{15} = \frac{1068}{15} = 71{,}20$$

**Langkah 4 — Interpretasi Manajerial:**

Skor **71,20** masuk kategori **Cukup Tinggi** (61–80). Dimensi dengan kontribusi terbesar terhadap skor:

$$\text{Kontribusi}_{\text{TD}} = \frac{w_{\text{TD}} \cdot r_{\text{TD}}}{15 \cdot \text{TLX}_{\text{weighted}}} \times 100\% = \frac{3 \cdot 85}{15 \cdot 71{,}20} = 23{,}88\%$$

Dimensi **Temporal Demand** (23,88%) menjadi *pain point* utama — kurir mitra merasakan tekanan waktu yang ekstrem selama *peak season*. Rekomendasi teknis:

1. **Restrukturisasi Zona Pengiriman:** Partisi rute berdasarkan kompleksitas alamat, sehingga kurir berpengalaman mengambil rute urban padat dan kurir baru mengambil rute suburban.
2. *Microbreak* terjadwal (5 menit setiap 90 menit) sesuai standar NIOSH.
3. Implementasi *dynamic routing algorithm* berbasis aplikasi untuk mengurangi *cognitive load* navigasi.
4. *Training* manajemen stres dan *time-blocking* untuk menurunkan frustrasi.

**Langkah 5 — Validasi Statistik:**

Misalkan *standard deviation* $\sigma = 8{,}5$ dan *Cronbach's Alpha* $= 0{,}82$ (>0,70 → reliabel), maka *confidence interval* 95% untuk skor TLX:

$$\text{CI}_{95\%} = \bar{X} \pm 1{,}96 \cdot \frac{\sigma}{\sqrt{n}} = 71{,}20 \pm 1{,}96 \cdot \frac{8{,}5}{\sqrt{34}} = 71{,}20 \pm 2{,}86$$

Interpretasi: Dengan keyakinan 95