# 2632 — Analisis Beban Kerja Mental Kurir Logistik E-Commerce dengan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, dan khususnya di Indonesia, telah mengalami pertumbuhan eksponensial dalam satu dekade terakhir. Indonesia, dengan lebih dari 270 juta penduduk dan penetrasi internet yang mencapai 77% pada 2024, menjadi salah satu pasar *e-commerce* terbesar di dunia. Shopee, sebagai salah satu *marketplace* dominan, mengandalkan jaringan logistik last-mile melalui Shopee Express (SPX) dan mitra kurir (*Shopee Express Partner*). Dalam ekosistem ini, kurir *last-mile delivery* berfungsi sebagai titik kontak paling kritis antara *platform* dan pelanggan, sehingga kesejahteraan fisik-mental mereka secara langsung menentukan *Service Level Agreement* (SLA), tingkat retensi pelanggan, dan reputasi merek.

Muhammad Rafi dan Boy Isma Putra (2024) dalam artikel mereka di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) mitra kurir Shopee Express belum diukur secara kuantitatif meskipun telah lama menjadi keluhan operasional. Fenomena ini diperparah oleh variabilitas volume pesanan musiman (misalnya *flash sale*, Harbolnas, Ramadan) yang dapat meningkatkan beban kerja hingga 200–300% dari kondisi normal. Tanpa pengukuran objektif, manajemen tidak memiliki dasar bukti untuk melakukan *redesign* rute, realokasi armada, atau penambahan *buffer* istirahat.

Studi ini menggunakan *NASA-Task Load Index* (NASA-TLX), sebuah instrumen subjektif terstandarisasi yang dikembangkan oleh Human Performance Group NASA Ames Research Center (Hart & Staveland, 1988), yang telah divalidasi secara luas pada lebih dari 500 studi ergonomi kognitif. Studi pendukung oleh M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat landasan empiris dengan mengintegrasikan NASA-TLX bersama *Work Sampling* pada operator gudang, sehingga memberikan kerangka ganda: pengukuran subjektif (persepsi) dan objektif (proporsi waktu kerja).

Urgensi ekonomis dari studi ini terletak pada hubungan positif antara beban kerja mental berlebih dengan tiga indikator biaya utama: (1) peningkatan *error rate* (salah sortir, alamat keliru), (2) peningkatan *absenteeism* dan *turnover*, dan (3) peningkatan risiko kecelakaan kerja (terutama karena kelelahan kognitif memengaruhi *reaction time* saat mengendarai motor di lalu lintas padat). Menurut ILO, kelelahan kerja menyumbang 8–12% dari total kecelakaan kerja di sektor logistik, dan pada akhirnya menekan *profit margin* perusahaan melalui klaim asuransi, biaya rekrutmen ulang, dan penalti SLA.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-Task Load Index (NASA-TLX)

NASA-TLX mengukur beban kerja total melalui enam dimensi utama:

1. **Mental Demand (MD)** — aktivitas kognitif (memikirkan, memutuskan, menghitung).
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, mendorong, mengendarai).
3. **Temporal Demand (TD)** — tekanan waktu (seberapa cepat tugas harus diselesaikan).
4. **Performance (P)** — persepsi keberhasilan diri (terbalik: skor rendah = sukses).
5. **Effort (E)** — usaha total yang dikeluarkan.
6. **Frustration (F)** — tingkat frustrasi, iritasi, atau stres.

Setiap dimensi dinilai dengan *unipolar visual analog scale* dari 0 (sangat rendah) hingga 100 (sangat tinggi). Terdapat dua pendekatan *scoring*:

**a) Raw TLX (unweighted):**

$$TLX_{raw} = \frac{MD + PD + TD + P + E + F}{6}$$

**b) Weighted TLX (lengkap):** Responden terlebih dahulu melakukan 15 *pairwise comparisons* antar dimensi untuk menentukan bobot (*weight*) $w_i \in \{0,1,...,5\}$ yang lebih representatif. Skor akhir:

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $r_i$ adalah *rating* dimensi ke-$i$, dan $\sum_{i=1}^{6} w_i = 15$. Rentang skor: 0–100. Klasifikasi beban kerja:

- $TLX \in [0,20]$: Sangat Rendah
- $TLX \in [21,40]$: Rendah
- $TLX \in [21,40]$: Cukup *(perlu koreksi: 41–50)*
- $TLX \in [41,50]$: Sedang
- $TLX \in [51,70]$: Tinggi
- $TLX \in [71,100]$: Sangat Tinggi

*Catatan*: paper Rafi & Putra (2024) umumnya menggunakan *raw TLX* untuk analisis *one-sample t-test* terhadap nilai referensi 50 (ambang batas beban kerja "moderat–tinggi").

### 2.2 Work Sampling (Pendukung: Aditya & Putra, 2024)

*Work Sampling* adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan pada berbagai kategori aktivitas. Jumlah pengamatan minimum ditentukan oleh:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

di mana:
- $Z$ = nilai distribusi normal standar pada tingkat kepercayaan tertentu (1,96 untuk 95%)
- $p$ = proporsi aktivitas yang diharapkan (default 0,5 untuk konservatif)
- $e$ = *acceptable error* (presisi yang diinginkan, umumnya 5%)

Untuk operator gudang dengan $p = 0{,}5$ dan $e = 0{,}05$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{0{,}9604}{0{,}0025} \approx 384 \text{ observasi}$$

Proporsi aktivitas ke-$k$ dihitung sebagai:

$$P_k = \frac{n_k}{N}$$

dengan batas kesalahan (*confidence interval*):

$$CI = P_k \pm Z \sqrt{\frac{P_k(1-P_k)}{N}}$$

### 2.3 Uji Beda Beban Kerja

Untuk menguji apakah skor NASA-TXL berbeda signifikan dari nilai referensi 50 (ambang batas), digunakan *one-sample t-test*:

$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$$

di mana $\bar{x}$ = rata-rata skor TLX, $\mu_0 = 50$, $s$ = simpangan baku sampel, $n$ = jumlah responden. Hipotesis nol ditolak jika $|t| > t_{\alpha/2, n-1}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Diagram alir implementasi sesuai dengan prosedur yang digunakan Rafi & Putra (2024) dan Aditya & Putra (2024):

```
[1] Identifikasi Masalah
       ↓
[2] Studi Literatur & Benchmarking Beban Kerja Kurir
       ↓
[3] Penentuan Lokasi (Hub SPX X) & Responden (N kurir aktif)
       ↓
[4] Perhitungan Sampel (Slovin): n = N/(1+Ne²)
       ↓
[5] Kuesioner NASA-TLX (6 subskala + 15 pairwise comparison)
       ↓
[6] Observasi Work Sampling (pengamatan acak terjadwal, interval 5-10 menit)
       ↓
[7] Uji Validitas (Pearson r > 0,361; n≥30) & Reliabilitas (Cronbach α > 0,70)
       ↓
[8] Perhitungan Raw TLX & Weighted TLX per Responden
       ↓
[9] Uji Normalitas (Shapiro-Wilk) → Uji Parametrik/Non-parametrik
       ↓
[10] One-Sample t-test (vs μ₀=50) atau Wilcoxon Signed-Rank
       ↓
[11] Analisis Dimensi Dominan (Pareto)
       ↓
[12] Rekomendasi Rekayasa (Redesign rute, Buffer time, Rest policy)
```

**Prosedur Detail Setiap Tahap:**

- **Tahap 3–4**: Populasi adalah seluruh mitra kurir aktif di satu *hub* Shopee Express. Sampling menggunakan rumus Slovin untuk presisi 5%:
$$n = \frac{N}{1 + N \cdot e^2}$$
Misal N = 200 mitra, e = 0,05 → n = 200/2 = 133 mitra.

- **Tahap 5**: Kuesioner NASA-TLX diberikan setelah shift kerja, mengacu pada aktivitas satu hari penuh. *Pairwise comparison card* digunakan untuk menentukan bobot.

- **Tahap 6**: Untuk integrasi dengan metode Aditya & Putra (2024), pengamat melakukan observasi *work sampling* dengan pola *random time observation* pada interval 5–10 menit selama 8 jam kerja.

- **Tahap 7**: Uji validitas dengan korelasi Pearson (signifikan jika r > r_tabel pada α = 0,05; untuk n=30 → r > 0,361). Reliabilitas dengan Cronbach's alpha; threshold ≥ 0,70 sesuai rekomendasi Nunnally (1978).

- **Tahap 10**: Jika data berdistribusi normal, gunakan *one-sample t-test*; jika tidak, gunakan *Wilcoxon Signed-Rank Test*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Kasus

Studi kasus hipotetis-realistis berdasarkan tipikal penelitian Rafi & Putra (2024): seorang kurir SPX di kota metropolitan dengan volume pesanan 80–150 paket/hari. Populasi N = 200 mitra, sampel n = 133 (Slovin, e=5%).

### 4.2 Perhitungan Slovin

$$n = \frac{200}{1 + 200 \cdot (0{,}05)^2} = \frac{200}{1 + 0{,}5} = \frac{200}{1{,}5} = 133{,}33 \approx 133 \text{ responden}$$

### 4.3 Contoh Perhitungan Raw TLX (5 Responden)

| Resp | MD | PD | TD | P | E | F | Raw TLX | Kategori |
|------|-----|-----|-----|---|---|---|---------|----------|
| R1 | 75 | 80 | 85 | 30 | 80 | 70 | **70,0** | Sangat Tinggi |
| R2 | 65 | 70 | 75 | 35 | 70 | 60 | **62,5** | Tinggi |
| R3 | 55 | 60 | 65 | 40 | 60 | 50 | **55,0** | Tinggi |
| R4 | 50 | 55 | 60 | 40 | 55 | 45 | **50,8** | Sedang |
| R5 | 45 | 50 | 55 | 35 | 50 | 40 | **45,8** | Sedang |

**Rata-rata:** $\bar{x} = (70,0+62,5+55,0+50,8+45,8)/5 = 56{,}8$
**Simpangan baku:** $s = \sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}} = \sqrt{478{,}6/4} \approx 10{,}94$

### 4.4 Uji Hipotesis (One-Sample t-test vs μ₀=50)

$$t