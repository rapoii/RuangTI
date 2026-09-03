# 1496 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami ekspansi eksponensial sepanjang dekade terakhir, dengan nilai *Gross Merchandise Value* (GMV) nasional yang menembus lebih dari USD 53 miliar pada 2023 dan diproyeksikan tumbuh pada CAGR (Compound Annual Growth Rate) >13% hingga 2030. Pertumbuhan ini secara langsung meningkatkan kompleksitas operasional *last-mile delivery*, yang menjadi titik kritis (*critical choke point*) dalam rantai pasok digital. Shopee Express, sebagai salah satu *in-house logistics* dari ekosistem Shopee, mengelola ribuan mitra (*partner*) kurir yang beroperasi di *sorting center*, *hub*, dan titik distribusi terakhir. Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa tekanan operasional mitra Shopee Express bersumber dari tiga variabel simultan: (i) target *Same-Day Delivery* (SDD) dan *Next-Day Delivery* (NDD) yang dibakukan secara algoritmik, (ii) volume *parcel* harian yang berfluktuasi mengikuti pola *flash sale*, dan (iii) ekspektasi *Service Level Agreement* (SLA) berupa *on-time delivery rate* ≥95%.

Permasalahan utama yang diangkat oleh Rafi dan Putra (2024) adalah fenomena *cognitive overload* yang dialami operator pada tahap sortir, *packing*, dan *dispatching*. Beban kerja mental (*mental workload*) yang tidak terkelola secara kuantitatif berdampak pada peningkatan *error rate* (misroute, *missort*, *mis-scan barcode*), kelelahan (*fatigue*), serta *attrition rate* mitra yang rata-rata di atas 35% per tahun. Studi terdahulu oleh Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) pada operator gudang menunjukkan bahwa beban kerja fisik maupun mental yang tidak diukur secara sistematis menyebabkan *productivity* turun 18–22% dan *defect rate* naik hingga 4,7% per shift. Kedua naskah ini menjadi landasan empiris bahwa pengukuran beban kerja mental bukan sekadar isu ergonomik, melainkan variabel strategis yang menentukan *throughput*, biaya operasional per *parcel*, dan reputasi *brand* perusahaan *logistics aggregator*.

Urgensi ekonomis dari studi ini juga tecermin dari struktur biaya operasional *last-mile delivery* yang menyumbang 41–53% dari total *cost-per-parcel*. Setiap 1% peningkatan *error rate* pada sortir berdampak pada pembengkakan biaya *re-shipment*, *customer service escalation*, dan *refund* yang secara agregat merugikan industri logistik nasional lebih dari Rp 4,7 triliun per tahun. Oleh karena itu, instrumentasi kuantitatif terhadap beban kerja mental melalui *NASA Task Load Index* (NASA-TLX) dan *work sampling* menjadi kebutuhan imperatif bagi manajemen SDM, *industrial engineer*, dan *operations excellence team* di sektor *e-commerce logistics*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model NASA-TLX (Hart & Staveland, 1988)

NASA-TLX mengukur beban kerja subjektif melalui enam dimensi yang masing-masing dinilai pada *Likert-type scale* 0–100 (0 = sangat rendah; 100 = sangat tinggi), kecuali dimensi *Performance* yang dinilai secara inversi (0 = sukses; 100 = gagal). Keenam dimensi tersebut adalah:

1. **Mental Demand (MD)** – beban aktivitas kognitif (perhatian, memori, kalkulasi, *decision-making*).
2. **Physical Demand (PD)** – beban aktivitas fisik (mobilitas, kekuatan, endurance).
3. **Temporal Demand (TD)** – tekanan waktu (*time pressure*) untuk menyelesaikan tugas.
4. **Performance (PE)** – persepsi subyektif terhadap keberhasilan penyelesaian tugas.
5. **Effort (EF)** – usaha total (mental + fisik) yang dikeluarkan untuk mencapai level kinerja.
6. **Frustration (FR)** – tingkat frustrasi, depresi, stres, dan ketidaknyamanan.

Prosedur NASA-TLX mencakup dua tahap:

**Tahap 1: Pairwise Comparison (Bobot)** — Setiap responden membandingkan 15 pasang dimensi dari keenam subskala untuk menentukan *weight* (bobot) relatif. Total bobot = 15. Bobot setiap dimensi $w_i$ dihitung menggunakan rumus:

$$w_i = \frac{\text{jumlah kemenangan dimensi } i}{15}, \quad i \in \{MD, PD, TD, PE, EF, FR\}$$

**Tahap 2: Weighted Scoring** — *Raw Task Load Index* (RTLX) atau *Weighted TLX* (WTLX) dihitung sebagai:

$$\text{WTLX} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

dengan $r_i$ adalah rating dimensi ke-$i$ pada skala 0–100. Nilai WTLX 0–9 dikategorikan beban kerja rendah; 10–29 = sedang; 30–49 = agak tinggi; 50–79 = tinggi; 80–100 = sangat tinggi.

Versi ringkas NASA-TLX (*Raw TLX*) menggunakan formula:

$$\text{RTLX} = \frac{1}{6}\sum_{i=1}^{6} r_i$$

### 2.2 Work Sampling (Observasi Instan)

Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) menggunakan *work sampling* untuk memetakan distribusi waktu kerja operator. Jumlah observasi minimum yang diperlukan adalah:

$$n = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{E^{2}}$$

dengan $Z_{\alpha/2}$ = nilai Z pada tingkat keyakinan $(1-\alpha)$; $p$ = proporsi aktivitas yang diestimasi (jika tidak diketahui digunakan $p = 0{,}5$ untuk *worst case*); $E$ = *margin of error* absolut. Untuk $\alpha = 0{,}05$, $Z = 1{,}96$, dan $E = 0{,}05$:

$$n = \frac{(1{,}96)^2 \cdot (0{,}5)(0{,}5)}{(0{,}05)^2} = \frac{0{,}9604}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

Interval kepercayaan proporsi aktivitas:

$$\text{CI} = p \pm Z_{\alpha/2}\sqrt{\frac{p(1-p)}{n}}$$

Proporsi waktu produktif:

$$P_{\text{prod}} = \frac{n_{\text{prod}}}{n_{\text{total}}}$$

*Allowance* standar (fatigue, personal, contingency) mengikuti formula ILO:

$$A_{\text{total}} = A_1 + A_2 + A_3$$

dengan $A_1$ = *personal allowance* (5%); $A_2$ = *fatigue allowance* (tergantung WTLX); $A_3$ = *contingency allowance* (5–10%).

### 2.3 Model Korelasi Beban Kerja Mental–Kinerja

Rafi dan Putra (2024) membangun regresi linier sederhana:

$$\text{ErrorRate} = \beta_0 + \beta_1 \cdot \text{WTLX} + \varepsilon$$

dengan hipotesis $\beta_1 > 0$, artinya peningkatan WTLX berkorelasi positif dengan tingkat kesalahan sortir.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi NASA-TLX di Sorting Center

Tahapan SOP yang dirumuskan Rafi dan Putra (2024) adalah sebagai berikut (diagram alur tekstual):

**Fase 1 — Pra-survei (Minggu ke-1):**
1. Identifikasi岗位 (*job*) kritis: sortir, *packing*, *scanning*, *dispatching*.
2. Pemetaan alur material (*value stream mapping*) menggunakan simbol VSM standar Toyota.
3. Penentuan populasi dan sampel ($n$ minimal 30 responden sesuai *central limit theorem*).

**Fase 2 — Pairwise Comparison (Minggu ke-2):**
1. Setiap operator diminta membandingkan 15 pasang kartu dimensi.
2. Pengisian dilakukan individual untuk menghindari *bias* konformitas.
3. Hitung bobot $w_i$ sesuai Persamaan (1).

**Fase 3 — Rating Task (Minggu ke-3):**
1. Operator dinilai pada *actual task* selama 1 shift penuh (8 jam).
2. Pemberian rating $r_i$ pada skala 0–100.
3. Hitung WTLX sesuai Persamaan (2).

**Fase 4 — Analisis & Rekomendasi (Minggu ke-4):**
1. Uji normalitas (Shapiro-Wilk) dan homogenitas (Levene).
2. Uji beda (ANOVA atau Kruskal-Wallis) antar岗位.
3. Korelasi WTLX ↔ *error rate*, WTLX ↔ *cycle time*.

### 3.2 Prosedur Work Sampling

Mengacu pada Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)):

1. Definisikan kategori aktivitas: produktif, semi-produktif, tidak produktif, idle, *delay*.
2. Siapkan *observation schedule* dengan waktu acak (*random time sampling*).
3. Pengamat melakukan *round* keliling area kerja pada interval tetap (misal setiap 60 detik).
4. Catat aktivitas operator yang sedang berlangsung pada momen tersebut.
5. Minimum 385 observasi per岗位.
6. Tabulasi dan uji validitas data (*chi-square goodness-of-fit*).

### 3.3 Standar Industri Rujukan

- ISO 9241-210:2019 — *Human-centred design of interactive systems*.
- ISO 10075:2017 — *Ergonomic principles related to mental workload*.
- SNI 8399:2017 — *Ergonomi Perkantoran*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Penelitian (Hipotetis-Representatif)

Berdasarkan Rafi dan Putra (2024), diambil kasus pada岗位 *parcel sorting* di *sorting center* Shopee Express Cikarang dengan karakteristik:

- Volume harian: 18.500 *parcel* per hari.
- Jumlah operator sortir: 24 orang (3 shift × 8 orang).
- Jam kerja efektif: 8 jam/shift (480 menit).
- Target *throughput*: 220 *parcel*/jam/orang.
- Aktivitas sortir berbasis *conveyor belt* + *scanner barcode*.

### 4.2 Perhitungan WTLX — Contoh Operator A

**Langkah 1: Tabel Pairwise Comparison** (mengikuti protokol asli NASA-TLX; disini disimulasikan untuk 1 operator dengan profil beban sortir high-volume):

| Dimensi | MD | PD | TD | PE | EF | FR | Total Kemenangan ($w_i$) |
|---------|----|----|----|----|----|----|----|
| MD      | –  | 1  | 1  | 1  | 1  | 1  | 5  |
| PD      | 0  | –  | 0  | 1  | 0  | 1  | 2  |
| TD      | 0  | 1  | –  | 1  | 1  | 1  | 4  |
| PE      | 0  | 0  | 0  | –  | 0  | 1  | 1  |
| EF      | 0  | 1  | 0  | 1  | –  | 1  | 3  |
| FR      | 0  | 0  | 0  | 0  | 0  | –  | 0  |

Total = 15 ✓

**Langkah 2: Rating Subjektif** pada skala 0–100:

$$r_{MD}=75,\ r_{PD}=60,\ r_{TD}=85,\ r_{PE}=25,\ r_{EF}=80,\ r_{FR}=70$$

**Langkah 3: Hitung Weighted Score:**

$$\text{WTLX} = \frac{1}{15}\big[(5)(75) + (2)(60) + (4)(85) + (1)(25) + (3)(80) + (0)(70)\big]$$

$$= \frac{1}{15}[375 + 120 + 340 + 25 +