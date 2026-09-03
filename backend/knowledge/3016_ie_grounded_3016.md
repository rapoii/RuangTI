# 3016 — Analisis Beban Kerja Mental Karyawan Logistik Last-Mill dan Operator Gudang Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor logistik e-commerce di Indonesia telah menciptakan tekanan operasional yang belum pernah terjadi sebelumnya, terutama pada segmen *last-mile delivery* dan operasional gudang (*warehouse operation*). Shopee Express sebagai salah satu mitra logistik utama platform Shopee di Indonesia menyerap volume pengiriman yang fluktuatif dengan pola musiman (musim promosi seperti Harbolnas, Ramadan, dan 12.12) yang dapat melonjak hingga 300–500% dari volume harian rata-rata. Rafi dan Putra (2024) dalam riset mereka menyoroti bahwa pekerja mitra (*partner employees*) Shopee Express menghadapi paparan beban kerja mental (*mental workload*) yang bersifat multidimensional—meliputi tuntutan kognitif, fisik, temporal, frustasi, serta usaha (*effort*) yang berkelanjutan untuk mempertahankan tingkat performa tertentu di tengah meningkatnya kompleksitas rute, dinamika alamat pelanggan, dan tekanan *Service Level Agreement* (SLA).

Urgensi riset ini semakin nyata ketika data internal industri logistik global menunjukkan bahwa *human error rate* pada aktivitas sortir dan pengiriman meningkat hampir 27% ketika tingkat beban kerja mental karyawan melampaui ambang batas kognitif optimum. Lebih lanjut, Aditya dan Putra (2024) dalam studi komplementer terhadap operator gudang menemukan bahwa kombinasi antara *work sampling* dan NASA-TLX mampu mengungkap korelasi langsung antara proporsi waktu kerja produktif dengan tingkat kelelahan mental yang dirasakan operator. Kedua studi tersebut mengonfirmasi bahwa pengukuran beban kerja mental bukan sekadar isu ergonomik melainkan variabel strategis yang menentukan throughput, kualitas layanan, *employee retention*, dan total biaya operasional. Oleh karena itu, adopsi metodologi pengukuran beban kerja mental yang terstandar, seperti NASA-TLX, menjadi kebutuhan imperatif bagi perencana kerja dan manajer operasional di industri logistik modern.

---

## 2. Landasan Teori & Formulasi Matematis

**NASA-TLX (NASA Task Load Index)** adalah instrumen multidimensi yang dikembangkan oleh Hart dan Staveland (1988) untuk mengukur beban kerja subjetif secara kuantitatif. Instrumen ini terdiri dari enam subskala yang masing-masing merepresentasikan dimensi beban kerja yang berbeda.

### 2.1 Enam Dimensi NASA-TLX

1. **Mental Demand (MD)** — Jumlah aktivitas berpikir,决策, dan komputasi kognitif yang diperlukan.
2. **Physical Demand (PD)** — Tingkat aktivitas fisik yang diperlukan.
3. **Temporal Demand (TD)** — Tingkat tekanan waktu yang dirasakan.
4. **Performance (P)** — Tingkat keberhasilan pekerja dalam menyelesaikan tugas (skor rendah = keberhasilan tinggi).
5. **Effort (E)** — Tingkat usaha yang dikeluarkan untuk mencapai tingkat performa.
6. **Frustration (F)** — Tingkat frustasi, irritasi, dan stress yang dialami.

### 2.2 Formulasi Matematis Skor Beban Kerja

Setiap dimensi dinilai menggunakan *raw rating* pada skala bipolar 0–100 melalui *visual analog scale*. Selanjutnya, bobot relatif (*weight*) setiap dimensi ditentukan melalui prosedur *pairwise comparison* antar keenan dimensi (total 15 pasangan). Skor beban kerja total (*Overall Workload Score*, *OWS*) dihitung menggunakan rumus:

$$OWS = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana:
- $w_i$ = bobot hasil *pairwise comparison* untuk dimensi $i$ (dengan $\sum w_i = 15$)
- $r_i$ = *raw rating* untuk dimensi $i$ (rentang 0–100)
- $OWS$ = *Overall Workload Score* (rentang 0–100)

Kategori interpretasi skor mengikuti klasifikasi standar:

| Rentang $OWS$ | Kategori Beban Kerja |
|:---:|:---:|
| 0 – 20 | Sangat Rendah |
| 21 – 40 | Rendah |
| 41 – 60 | Sedang |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

### 2.3 Integrasi dengan Work Sampling

Aditya dan Putra (2024) mengusulkan integrasi NASA-TLX dengan *work sampling* yang mengikuti distribusi probabilitas waktu kerja proporsional. Proporsi waktu untuk kategori aktivitas $j$ dinotasikan sebagai $P_j$ dengan $\sum P_j = 1$. Hubungan antara proporsi waktu kerja dan persepsi beban kerja dapat dimodelkan melalui:

$$TLX_{adjusted} = OWS \cdot \left(1 + \alpha \sum_{j} P_j \cdot \beta_j\right)$$

di mana $\alpha$ adalah konstanta koreksi konteks (umumnya $\alpha \approx 0.15$ untuk konteks gudang) dan $\beta_j$ adalah koefisien pembobot aktivitas spesifik untuk tiap kategori pekerjaan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi NASA-TLX di Lingkungan Logistik

```
┌─────────────────────────────────────────────┐
│ TAHAP 1: Identifikasi Populasi & Sampling   │
│ • Stratified random sampling                │
│ • Responden min. n = 30 per shift          │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ TAHAP 2: Validasi Instrumen                │
│ • Uji validitas isi oleh 3 expert judges    │
│ • Uji reliabilitas Cronbach's α ≥ 0.70     │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ TAHAP 3: Pengumpulan Data Primer           │
│ • Pre-task briefing                        │
│ • Pemberian kuesioner (15 skala VAS)       │
│ • Pengisian post-task dalam 5 menit        │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ TAHAP 4: Analisis & Komputasi              │
│ • Pairwise comparison card sort            │
│ • Perhitungan OWS                         │
│ • Uji beda (ANOVA/Mann-Whitney)           │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ TAHAP 5: Rekomendasi & Implementasi        │
│ • Workload redistribution                 │
│ • Job rotation design                     │
│ • Technology augmentation                 │
└─────────────────────────────────────────────┘
```

### 3.2 Prosedur Pairwise Comparison

Setiap responden diminta membandingkan dua dari enam dimensi secara berurutan (total 15 pasangan). Dimensi yang dianggap lebih berkontribusi terhadap beban kerja akan diberi skor 1 pada perbandingan tersebut. Bobot akhir $w_i$ adalah jumlah kemenangan dimensi $i$ dari 15 perbandingan.

### 3.3 SOP Pengukuran di Shopee Express

1. **Persiapan:** Briefing kepada responden terkait tujuan penelitian, jaminan kerahasiaan data, dan prosedur pengisian.
2. **Pelaksanaan:** Pengisian kuesioner dilakukan segera setelah shift kerja berakhir (durasi < 15 menit) untuk meminimalisir *recall bias*.
3. **Pengawasan:** Supervisor tidak hadir saat pengisian untuk mencegah *social desirability bias*.
4. **Verifikasi:** Cross-check data outlier menggunakan *boxplot* dan uji *Mahalanobis distance*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Studi kasus ini menggunakan data lapangan Rafi dan Putra (2024) pada kurir Shopee Express di Hub Jakarta Selatan dengan total 40 responden kurir. Kami asumsikan distribusi *raw rating* dan bobot pairwise comparison sebagai berikut untuk seorang kurir representatif:

| Dimensi ($i$) | Raw Rating ($r_i$) | Bobot ($w_i$) |
|:---|:---:|:---:|
| Mental Demand (MD) | 75 | 4 |
| Physical Demand (PD) | 65 | 2 |
| Temporal Demand (TD) | 85 | 5 |
| Performance (P) | 30 | 1 |
| Effort (E) | 70 | 2 |
| Frustration (F) | 60 | 1 |

### 4.2 Perhitungan Step-by-Step

**Langkah 1:** Verifikasi total bobot:
$$\sum_{i=1}^{6} w_i = 4 + 2 + 5 + 1 + 2 + 1 = 15 \checkmark$$

**Langkah 2:** Hitung produk $w_i \cdot r_i$ untuk setiap dimensi:

$$MD: 4 \times 75 = 300$$
$$PD: 2 \times 65 = 130$$
$$TD: 5 \times 85 = 425$$
$$P: 1 \times 30 = 30$$
$$E: 2 \times 70 = 140$$
$$F: 1 \times 60 = 60$$

**Langkah 3:** Hitung total skor terbobot:
$$\sum_{i=1}^{6} w_i \cdot r_i = 300 + 130 + 425 + 30 + 140 + 60 = 1085$$

**Langkah 4:** Hitung *Overall Workload Score*:
$$OWS = \frac{1085}{15} \approx 72.33$$

### 4.3 Interpretasi Manajerial

Skor $OWS = 72.33$ masuk dalam kategori **Tinggi (61–80)**. Hal ini mengindikasikan bahwa kurir tersebut mengalami beban kerja mental yang substansial, terutama pada dimensi *Temporal Demand* (TD) yang mendapat bobot dan rating tertinggi—konsisten dengan realitas operasional Shopee Express di mana kurir menghadapi *deadline* pengiriman harian ketat (sering kali < 8 jam untuk 80–120 paket).

**Rekomendasi Taktis:**
- Redistribusi volume pengiriman: target ≤ 90 paket/kurir/hari
- Implementasi *geofencing* dan optimasi rute berbasis algoritma *Vehicle Routing Problem* (VRP)
- Penambahan *buffer time* 15 menit antar zona pengiriman
- Pelatihan *stress management* dan micro-break scheduling setiap 90 menit

**Koreksi dengan Work Sampling (Aditya & Putra, 2024):**
Jika proporsi waktu kerja produktif $P_1 = 0.65$ dan aktivitas non-produktif $P_2 = 0.35$ dengan $\beta_1 = 0.8$, $\beta_2 = 1.2$, dan $\alpha = 0.15$:

$$TLX_{adjusted} = 72.33 \times \left(1 + 0.15 \times (0.65 \times 0.8 + 0.35 \times 1.2)\right)$$
$$= 72.33 \times (1 + 0.15 \times (0.52 + 0.42))$$
$$= 72.33 \times (1 + 0.15 \times 0.94)$$
$$= 72.33 \times 1.141 \approx 82.53$$

Skor terkoreksi $82.53$ kini masuk kategori **Sangat Tinggi**, menandakan bahwa tanpa intervensi, pekerja berisiko mengalami kelelahan kronis, penurunan akurasi pengiriman, dan potensi *burnout syndrome* dalam 3–6 bulan ke depan.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Meskipun NASA-TLX terbukti robust secara psikometrik, beberapa keterbatasan perlu diantisipasi. Pertama, sifat *self-reported* instrumen ini rentan terhadap *response bias* ketika responden memberikan jawaban normatif daripada jawaban autentik. Kedua, validitas eksternal (*generalizability*) terbatas pada konteks pekerjaan dengan struktur repetitif; pada pekerjaan dengan variabilitas tinggi (misalnya kurir dengan rute tidak konsisten), skor bisa berfluktuasi signifikan antar shift. Ketiga, NASA-TLX menangkap beban kerja sesaat (*snapshot*) bukan beban kumulatif, sehingga diperlukan *longitudinal panel study* untuk memodeli akumulasi fatigue menggunakan persamaan diferenius seperti:

$$\frac{dF(t)}{dt} = \gamma \cdot OWS(t) - \delta \cdot R(t)$$

di mana $F(t)$ adalah fatigue kumulatif, $\gamma$ adalah koefisien akumulasi, $R(t)$ adalah tingkat recovery (micro-break), dan $\delta$ adalah koefisien disipasi fatigue.

### 5.2 Aplikasi Lintas Sektor

Rafi dan Putra (2024) menekankan bahwa kerangka NASA-TLX dapat di-*cross-deploy* ke:

- **Manufaktur:** Pengukuran beban mental operator CNC dan assembly line
- **Kesehatan:** Evaluasi cognitive load perawat IGD dan dokter bedah
- **Aviasi:** *Pilot workload monitoring* untuk mencegah *controlled flight into terrain*
- **Kontrol Industri:** Operator ruang kendali SCADA di sektor energi
- **E-commerce Fulfillment:** Pekerja sortir di *automated warehouse* berbasis robotik kolaboratif (cobot)

### 5.3 Standar Masa Depan dan Agenda Riset

Integrasi NASA-TLX dengan teknologi