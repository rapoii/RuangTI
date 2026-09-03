# 3000 — Analisis Beban Kerja Mental Operator Logistik Last-Mile Menggunakan Metode NASA-TLX pada Ekosistem E-Commerce Indonesia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada tahun 2025 telah mengubah struktur operasional logistik secara fundamental. Dalam lanskap ini, Shopee Express sebagai salah satu mitra pengiriman utama Shopee (PT Shopee International Indonesia) beroperasi sebagai *third-party logistics* (3PL) yang menangani jutaan paket setiap harinya, terutama di kawasan metropolitan seperti Jabodetabek, Surabaya, dan Bandung. Rafi & Putra (2024, DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa karyawan Shopee Express Partner (sebutan untuk kurir dan *sorting officer*) menghadapi tekanan multidimensional yang belum sepenuhnya dipetakan secara ergonomis, padahal beban kerja mental (*mental workload*) merupakan prediktor kuat bagi *human error*, kelelahan kumulatif, dan tingkat *turnover* yang pada akhirnya berdampak langsung pada *Service Level Agreement* (SLA) pengiriman.

Studi ini lahir dari kebutuhan mendesak untuk mengkuantifikasi beban kerja subjektif pekerja di lantai operasional *fulfillment center* (FC) dan *last-mile hub*. Berbeda dari studi beban kerja konvensional yang berfokus pada aspek fisik (kardiometabolik, postur), Rafi & Putra (2024) memilih *NASA Task Load Index* (NASA-TLX) karena sensitivitasnya terhadap enam dimensi beban kerja yang relevan dengan pekerja pengetahuan (*knowledge worker*) dan pekerja informasi di lini produksi layanan. Sementara itu, studi pendukung Aditya.R & Putra (2024, DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperluas aplikasi NASA-TLX dengan mengintegrasikan *work sampling* untuk memvalidasi beban kerja mental terhadap proporsi aktivitas riil operator gudang. Kedua studi ini menegaskan bahwa mental workload bukan lagi variabel sampingan melainkan *Key Performance Indicator* (KPI) baru yang wajib di-*benchmark* oleh manajemen rantai pasok modern.

Urgensi penelitian ini juga didorong oleh fenomena *peak season* (Harbolnas, Ramadan, 11.11, 12.12) di mana volume paket dapat meningkat 3–5 kali lipat, menciptakan *cognitive overload* yang tidak tereduksi oleh penambahan *shift* biasa. Tanpa pengukuran beban kerja mental yang terstandar, perusahaan cenderung merespons dengan kebijakan reaktif yang justru menurunkan *wellbeing* pekerja dan menurunkan kualitas layanan. Oleh karena itu, pendekatan NASA-TLX menjadi jembatan diagnostik antara persepsi subjektif pekerja dan keputusan manajerial berbasis data.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Konseptual NASA-TLX

NASA-TLX (Hart & Staveland, 1988) adalah instrumen psikometrik multidimensi yang mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Definisi Operasional |
|---|---|---|
| $x_1$ | Mental Demand (MD) | Tingkat aktivitas kognitif dan perseptual yang diperlukan |
| $x_2$ | Physical Demand (PD) | Tingkat aktivitas fisik yang diperlukan |
| $x_3$ | Temporal Demand (TD) | Tingkat tekanan waktu yang dirasakan |
| $x_4$ | Performance (P) | Tingkat keberhasilan pekerja dalam mencapai tujuan |
| $x_5$ | Effort (E) | Tingkat usaha mental dan fisik untuk mencapai kinerja |
| $x_6$ | Frustration (F) | Tingkat frustasi, irritasi, dan stres yang dirasakan |

Setiap dimensi dinilai pada *Likert-type scale* 0–100 dengan *bipolar anchors* (rendah–tinggi). Selanjutnya, dilakukan *Card Sort Task* untuk mendapatkan bobot pasangan (*pairwise comparison*) antar-dimensi yang menghasilkan vektor bobot:

$$\mathbf{w} = [w_1, w_2, w_3, w_4, w_5, w_6], \quad \sum_{i=1}^{6} w_i = 15$$

Bilangan 15 berasal dari jumlah maksimum perbandingan berpasangan dalam metode *complete pairwise comparison* yang melibatkan seluruh kombinasi $\binom{6}{2} = 15$ pasangan.

### 2.2. Formulasi *Raw TLX* (RTLX) dan *Weighted TLX* (WTLX)

Tanpa prosedur pembobotan, skor total disebut *Raw TLX*:

$$\text{RTLX} = \frac{1}{6} \sum_{i=1}^{6} x_i$$

Namun, RTLX mengabaikan heterogenitas kontribusi setiap dimensi. Oleh karena itu, Rafi & Putra (2024, DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) mengadopsi *Weighted TLX* (skor utama NASA-TLX):

$$\boxed{\text{WTLX} = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15} \sum_{i=1}^{6} w_i \cdot x_i}$$

Karena $\sum w_i = 15$, maka skor akhir berada pada interval $[0, 100]$. Semakin tinggi skor, semakin berat beban kerja mental yang dialami responden.

### 2.3. Validasi dengan *Work Sampling*

Studi pendukung Aditya.R & Putra (2024, DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengusulkan integrasi dengan *work sampling* untuk validasi silang. Proporsi waktu aktivitas operator $j$ diestimasi sebagai:

$$\hat{p}_j = \frac{n_j}{N}, \quad \text{Var}(\hat{p}_j) = \frac{\hat{p}_j(1-\hat{p}_j)}{N-1}$$

dengan $n_j$ adalah jumlah observasi aktivitas $j$, dan $N$ adalah total observasi. Reliabilitas pengukuran dinyatakan melalui *relative error*:

$$\text{RE} = \frac{S_{\hat{p}_j}}{\hat{p}_j} \leq 0.05$$

yang merupakan ambang batas rekomendasi Niebel (usia N=384 observasi untuk $p=0.5$ dengan keyakinan 95%).

### 2.4. Uji Statistik Pengujian Beban Kerja

Untuk menguji perbedaan skor antar-kelompok (misalnya antar-shift, antar-jabatan, antar-hub), Rafi & Putra (2024) menggunakan uji beda karena variabel beban kerja berskala interval/rasio. Statistik uji Independent Samples *t*-test:

$$t = \frac{\bar{X}_1 - \bar{X}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}, \quad s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$$

dengan derajat kebebasan $df = n_1 + n_2 - 2$. Hipotesis nol $H_0: \mu_1 = \mu_2$ ditolak jika $|t_{\text{hitung}}| > t_{\alpha/2, df}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express mengikuti *Standard Operating Procedure* (SOP) enam tahap yang dikembangkan Rafi & Putra (2024, DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

### Diagram Alir Implementasi NASA-TLX

```
┌─────────────────────────────────────┐
│ TAHAP 1: Identifikasi Populasi &    │
│          Sampling (purposive, n≥30) │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 2: Briefing & Informed Consent│
│          (jelaskan 6 dimensi TLX)   │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 3: Penilaian Skor Mentah      │
│          (skala 0-100 per dimensi)  │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 4: Card Sort Task             │
│          (15 pasangan perbandingan) │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 5: Perhitungan WTLX          │
│          (formula w_i·x_i/15)       │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 6: Analisis Statistik &       │
│          Rekomendasi Manajerial      │
└─────────────────────────────────────┘
```

### Langkah Detail:

1. **Tahap 1 — Sampling**: Responden dipilih secara *purposive sampling* dari populasi kurir dan *sorting officer* Shopee Express. Ukuran sampel minimum mengikuti rumus Slovin untuk populasi besar:
$$n = \frac{N}{1 + N \cdot e^2}, \quad e = 0.10$$

2. **Tahap 2 — Briefing**: Setiap responden diberikan penjelasan definisi keenam dimensi NASA-TLX secara verbal menggunakan *translated instructions* versi Bahasa Indonesia yang telah divalidasi secara linguistik.

3. **Tahap 3 — Penilaian Skor Mentah**: Responden diminta memberikan skor pada garis kontinum 0–100, dengan jeda *anchors* pada 5, 25, 50, 75, dan 95 sesuai instrumen resmi NASA-TLX.

4. **Tahap 4 — Card Sort**: Setiap responden memilih di antara 15 pasangan dimensi (misal: MD vs. PD, MD vs. TD, …, E vs. F) mana yang lebih "berkontribusi" terhadap beban kerja tugas spesifik. Hasilnya adalah bobot $w_i$.

5. **Tahap 5 — Perhitungan WTLX**: Menggunakan formula pada Sub-bagian 2.2.

6. **Tahap 6 — Analisis & Rekomendasi**: Bandingkan WTLX antar-kelompok, bandingkan dengan *benchmark* industri (ringan <40, sedang 40–60, berat 60–80, sangat berat >80), dan tetapkan *action plan*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Kasus

Misalkan seorang *sorting officer* Shopee Express di Hub Jakarta Selatan selama *peak season* 11.11 melaporkan beban kerja sebagai berikut (data ilustratif berbasis pola Rafi & Putra, 2024):

| Dimensi $i$ | Nama | $x_i$ (skor 0-100) |
|---|---|---|
| 1 | Mental Demand | 85 |
| 2 | Physical Demand | 70 |
| 3 | Temporal Demand | 90 |
| 4 | Performance | 30 (semakin rendah = semakin buruk) |
| 5 | Effort | 80 |
| 6 | Frustration | 75 |

Catatan: Skor Performance yang rendah mengindikasikan operator merasa kinerjanya tidak optimal karena tekanan.

### 4.2. Hasil Card Sort (Bobot)

Dari 15 perbandingan berpasangan, dimisalkan dimensi TD paling dominan (muncul 5 kali), diikuti MD (4 kali), E (3 kali), F (2 kali), PD (1 kali), dan P (0 kali):

$$w_1 = 4, \quad w_2 = 1, \quad w_3 = 5, \quad w_4 = 0, \quad w_5 = 3, \quad w_6 = 2$$

**Cek validitas:** $\sum w_i = 4+1+5+0+3+2 = 15$ ✓

### 4.3. Perhitungan WTLX

$$\text{WTLX} = \frac{w_1 x_1 + w_2 x_2 + w_3 x_3 + w_4 x_4 + w_5 x_5 + w_6 x_6}{15}$$

Substitusi:

$$\text{WTLX} = \frac{(4)(85) + (1)(70) + (5)(90) + (0)(30) + (3)(80) + (2)(75)}{15}$$

$$\text{WTLX} = \frac{340 + 70 + 450 + 0 + 240 + 150}{15} = \frac{1250}{15} \approx 83.33$$

### 4.4. Interpretasi Manajerial

Skor WTLX = **83.33** masuk kategori **sangat berat** (>80). Ini mengindikasikan:

- Operator mengalami *cognitive overload* terutama pada dimensi Temporal Demand (tekanan waktu) dan Mental Demand (pengambilan keputusan cepat).
- Risiko *human error* dalam pemilahan paket meningkat signifikan.
- Tanpa intervensi, risiko *burnout* dan *attrition* tinggi.

**Rekomendasi Engineering:**
1. Redistribusi rute dan zona sortasi untuk menurunkan $x_3$ (Temporal Demand).
2. Implementasi *pick-to-light* system untuk menurunkan $x_1$ (Mental Demand).
3. Penambahan