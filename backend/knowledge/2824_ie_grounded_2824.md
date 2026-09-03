# 2824 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling untuk Optimasi Sistem Kerja Last-Mile Delivery & Warehouse

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada 2030 (Bain & Company, 2023) telah menciptakan tekanan operasional yang masif pada segmen last-mile delivery. Shopee Express, sebagai salah satu unit logistik milik PT Shopee International Indonesia yang beroperasi di bawah naungan Sea Limited, mengelola jutaan paket harian melalui jaringan *partner* (mitra kurir) independen. Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti fakta empiris bahwa karyawan *partner* Shopee Express menghadapi beban kerja mental (*mental workload*) yang sangat tinggi akibat tiga faktor simultan, yaitu: (1) target *Sortation Center Departure* (SCD) harian yang melebihi kapasitas fisiologis rata-rata 40–60 paket/jam, (2) kompleksitas navigasi alamat pelanggan di wilayah urban dengan geolokasi yang sering *invalid*, dan (3) tekanan *Service Level Agreement* (SLA) pengantaran same-day dengan penalty sistem jika terjadi *failure delivery*.

Konteks ini bukan sekadar isu produktivitas, melainkan telah menjadi masalah ergonomi kognitif (*cognitive ergonomics*) berskala nasional. Data International Labour Organization (ILO) menunjukkan bahwa kelelahan mental akibat beban kerja berlebihan berkontribusi pada 35% kecelakaan kerja di sektor transportasi. Rafi & Putra (2024) memilih metode NASA-TLX (Task Load Index) yang dikembangkan oleh Hart & Staveland (1988) karena instrumen ini telah teruji validitasnya lintas-budaya dan mampu membedakan *subjektivitas perseptual* beban kerja dari *objektivitas fisiologis*. Studi komplementer yang dilakukan oleh Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) pada operator *warehouse* mengintegrasikan NASA-TLX dengan teknik *Work Sampling* untuk memperoleh gambaran holistik, di mana beban kerja mental yang terukur dikorelasikan dengan utilisasi waktu kerja aktual, sehingga menghasilkan rekomendasi rekayasa yang bukan hanya ergonomis tetapi juga efisien secara alokasi sumber daya manusia.

Urgensi penelitian ini diperkuat oleh fenomena *turnover* kurir *partner* Shopee Express yang menurut laporan internal industri logistik mencapai 60–80% per tahun, dengan biaya rekrutmen dan pelatihan ulang yang ditaksir sebesar 1,5–2x gaji bulanan per karyawan. Dengan demikian, pemahaman kuantitatif terhadap beban kerja mental menjadi prasyarat strategis bagi *Engineering Manager* untuk merancang sistem kerja yang *human-centric* sekaligus mempertahankan *Service Level Agreement* dan margin operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX: Kerangka Pengukuran Beban Kerja

NASA-TLX mengukur beban kerja pada enam subskala dimensi yang masing-masing dinilai dengan *raw rating* (skala 0–100):

| Simbol | Dimensi | Deskripsi Operasional |
|:---:|:---|:---|
| $r_{MD}$ | Mental Demand | Aktivitas berpikir, memutuskan, menghitung |
| $r_{PD}$ | Physical Demand | Aktivitas fisik (berjalan, mengangkat, mengangkut) |
| $r_{TD}$ | Temporal Demand | Tekanan waktu, deadline, ritme kerja |
| $r_{PE}$ | Performance | Pencapaian tujuan task oleh pekerja sendiri |
| $r_{EF}$ | Effort | Kerja keras fisik & mental yang dikeluarkan |
| $r_{FR}$ | Frustration | Tingkat irritasi, stres, demotivasi |

### 2.2 Skor Tertimbang NASA-TLX (Weighted TLX Score)

Rafi & Putra (2024) mengadopsi prosedur *card-sorting* untuk memperoleh bobot ($w_i$) melalui 15 perbandingan berpasangan antar dimensi. Skor tertimbang dihitung menggunakan formula:

$$\text{NASA-TLX}_{weighted} = \frac{\displaystyle\sum_{i=1}^{6} w_i \cdot r_i}{\displaystyle\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

Karena $\sum_{i=1}^{6} w_i = 15$ (maksimum pembobotan dari 15 pasangan), maka skor tertimbang berada pada interval $[0, 100]$ dengan interpretasi:
- $0 \leq \text{TLX} < 20$: Beban kerja rendah
- $20 \leq \text{TLX} < 40$: Beban kerja sedang-rendah
- $40 \leq \text{TLX} < 60$: Beban kerja sedang-tinggi
- $60 \leq \text{TLX} < 80$: Beban kerja tinggi
- $80 \leq \text{TLX} \leq 100$: Beban kerja sangat tinggi (*overload*)

### 2.3 Work Sampling: Formulasi Proporsi Aktivitas

Aditya.R & Putra (2024) menggunakan *Work Sampling* dengan teknik *randomized observation* untuk mengelaborasi kontribusi proporsi waktu kerja. Proporsi suatu aktivitas $k$ ditentukan oleh:

$$P_k = \frac{n_k}{N} = \frac{n_k}{\displaystyle\sum_{j=1}^{K} n_j} \times 100\%$$

dimana $n_k$ adalah jumlah observasi aktivitas $k$, $N$ adalah total observasi, dan $K$ adalah jumlah kategori aktivitas. Untuk menjamin reliabilitas statistik pada tingkat keyakinan $1-\alpha$, digunakan formula *confidence interval*:

$$CI_{1-\alpha} = P_k \pm Z_{\alpha/2}\sqrt{\frac{P_k(1-P_k)}{N}}$$

Jumlah sampel minimum untuk *work sampling* dengan margin error $\varepsilon$ pada confidence level $1-\alpha$ adalah:

$$N_{min} = \frac{Z_{\alpha/2}^2 \cdot P_k(1-P_k)}{\varepsilon^2}$$

Untuk $\alpha=0.05$ ($Z_{0.025}=1.96$), margin error 5%, dan ekspektasi $P_k=0.5$ (kasus paling konservatif):

$$N_{min} = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.05)^2} = \frac{0.9604}{0.0025} = 384 \text{ observasi}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Penerapan NASA-TLX untuk Kurir E-Commerce

```
┌─────────────────────────────────────────┐
│  Tahap 1: Identifikasi Task Kurir       │
│  - Sortasi paket di Hub                 │
│  - Loading ke armada                    │
│  - Navigasi rute last-mile              │
│  - COD & verifikasi penerima            │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  Tahap 2: Sampling Responden            │
│  Stratified random sampling, n≥30       │
│  (Hair et al., 2019; Roscoe, 1975)      │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  Tahap 3: Pemberian Kuesioner TLX       │
│  - Raw rating (6 dimensi, 0-100)        │
│  - Card-sorting pairwise (15 pair)      │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  Tahap 4: Perhitungan Weighted Score    │
│  TLX_w = Σ(wi·ri)/15                   │
└──────────────────┬──────────────────────┘
                   ▼
┌────────────────────────────────