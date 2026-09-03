# 1544 — Analisis Beban Kerja Mental Kurir Shopee Express Partner Menggunakan Metode NASA-TLX: Kerangka Kuantitatif untuk Optimalisasi SDM Last-Mile Delivery

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia telah mengalami transformasi eksponensial sejak dekade terakhir, dengan nilai transaksi bruto (GMV) nasional menembus lebih dari USD 53 miliar pada 2023, menjadikan Indonesia sebagai salah satu pasar *digital economy* terbesar di Asia Tenggara. Shopee, sebagai salah satu *marketplace* dominan, mengandalkan ekosistem logistik last-mile melalui Shopee Express Partner (SE- Partner)—sekelompok kurir dan operator sortir yang bekerja sebagai mitra UMKM atau pekerja lepas di bawah koordinasi *hub* regional. Karakteristik pekerjaan SE-Partner sangat unik: jam kerja tidak teratur, target pengiriman harian (biasanya 80–150 paket per hari), tekanan *Service Level Agreement* (SLA) 24–48 jam, paparan *cognitive load* tinggi akibat penggunaan aplikasi *scanner*, navigasi GPS, serta interaksi langsung dengan pelanggan yang variabel. Rafi & Putra (2024) dalam studi mereka menyoroti bahwa beban kerja mental (*mental workload*) kurir SE-Partner menjadi *hidden cost* signifikan yang sering diabaikan oleh manajemen operasional, padahal secara langsung memengaruhi tingkat kelelahan, *human error*, kecelakaan kerja, dan *turnover* yang pada akhirnya menggerus profitabilitas mitra (*DOI:* [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)).

Urgensi studi ini diperkuat oleh konteks makroekonomi Indonesia: tingkat *burnout* pada pekerja sektor logistik informal masih sangat minim terukur, sementara regulasi Kementerian Ketenagakerjaan (Permenaker No. 1 Tahun 2018 tentang Kesejahteraan Pekerja Lepas) belum sepenuhnya mencakup dimensi ergonomis kognitif. Dalam operasional *warehouse* dan *cross-docking* Shopee Express sendiri, Aditya & Putra (2024) membuktikan bahwa kombinasi *work sampling* dengan NASA-TLX mampu mengungkap inefisiensi yang luput dari pengukuran produktivitas konvensional (*DOI:* [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)). Kedua paper ini saling melengkapi: Rafi & Putra fokus pada dimensi kognitif pekerja lapangan, sementara Aditya & Putra mengkuantifikasi hubungan antara proporsi waktu kerja dan beban mental operator *warehouse*. Keduanya berakar pada paradigma Human Factors & Ergonomics (HF&E) yang memandang manusia bukan sebagai variabel residual, melainkan sebagai *resource* strategis dengan kapasitas kognitif terbatas yang harus dikelola secara ilmiah melalui pendekatan rekayasa. Tanpa pengukuran beban mental yang valid, keputusan manajerial seperti penambahan *routing*, insentif, atau rotasi shift akan bersifat intuitif dan rentan misalokasi. Oleh karena itu, NASA-TLX (*National Aeronautics and Space Administration Task Load Index*) yang dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi lintas industri menjadi instrumen utama yang digunakan Rafi & Putra (2024) untuk mengukur beban kognitif multidimensi kurir SE-Partner secara terstruktur dan terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Beban Kerja Mental (*Mental Workload*)

Beban kerja mental didefinisikan sebagai *cost* kognitif yang dikeluarkan operator saat mencapai tingkat *performance* tertentu, sebagai fungsi dari tuntutan tugas (*task demands*), kondisi lingkungan, kapasitas individual, dan pengalaman. NASA-TLX mengoperasionalkan konsep ini ke dalam enam subskala multidimensi yang dinilai responden menggunakan skala bipolar 0–100 (atau 0–20 lalu dinormalisasi), yaitu:

1. **Mental Demand (MD)** — Aktivitas berpikir, memutuskan, menghitung.
2. **Physical Demand (PD)** — Aktivitas fisik, meskipun fokus utama tetap kognitif.
3. **Temporal Demand (TD)** — Tekanan waktu, *time pressure*.
4. **Performance (P)** — Persepsi pencapaian target (skala terbalik: rendah = sukses).
5. **Effort (E)** — Tingkat usaha yang dikeluarkan secara keseluruhan.
6. **Frustration (F)** — Tingkat frustrasi, irritabilitas, dan stres selama bekerja.

### 2.2 Prosedur Pairwise Comparison

Instrumen NASA-TLX menggunakan *card-sorting procedure* di mana responden membandingkan 15 pasangan dimensi yang dihasilkan dari kombinasi $C(6,2)$:

$$\binom{6}{2} = \frac{6!}{2!\,(6-2)!} = 15 \text{ pasangan}$$

Setiap dimensi menerima bobot $w_i \in \{0, 1, 2, \dots, 5\}$ yang merupakan jumlah kemenangannya dalam 15 perbandingan, dengan total bobot:

$$\sum_{i=1}^{6} w_i = 15$$

### 2.3 Formulasi Skor Beban Kerja Tertimbang (*Adjusted Workload Score*)

Skor NASA-TLX definitif dihitung sebagai rata-rata terbobot dari keenam rating dengan bobot dari *pairwise comparison*:

$$W_{\text{NASA-TLX}} = \frac{1}{15} \sum_{i=1}^{6} w_i \cdot r_i$$

di mana:
- $W_{\text{NASA-TLX}}$ = skor beban kerja mental tertimbang (skala 0–100),
- $w_i$ = bobot dimensi ke-$i$ (jumlah kemenangan *pairwise*, $0 \le w_i \le 5$),
- $r_i$ = rating dimensi ke-$i$ pada skala 0–100.

### 2.4 Skor Rata-Rata Tidak Tertimbang (*Raw TLX*)

Alternatif yang lebih ringkas menggunakan rata-rata sederhana seluruh subskala:

$$\bar{W}_{\text{Raw}} = \frac{1}{6} \sum_{i=1}^{6} r_i$$

### 2.5 Integrasi dengan *Work Sampling* (Pendukung)

Aditya & Putra (2024) mengintegrasikan NASA-TLX dengan teknik *work sampling* untuk menghitung rasio beban mental terhadap proporsi waktu aktif:

$$L_{\text{eff}} = \frac{W_{\text{NASA-TLX}} \cdot t_{\text{aktif}}}{T_{\text{shift}}}$$

di mana $t_{\text{aktif}}$ adalah total waktu aktivitas produktif dan $T_{\text{shift}}$ adalah total durasi kerja dalam menit. Formula ini memungkinkan korelasi antara intensitas kognitif dan distribusi waktu kerja, yang selanjutnya digunakan untuk *rebalancing* beban.

### 2.6 Kategorisasi Beban Kerja

Tingkat beban kerja mental diklasifikasikan ke dalam empat kategori berdasarkan skor:

$$
W_{\text{kat}} = 
\begin{cases}
0 \le W < 25 & \rightarrow \text{Rendah} \\
25 \le W < 50 & \rightarrow \text{Sedang} \\
50 \le W < 75 & \rightarrow \text{Tinggi} \\
75 \le W \le 100 & \rightarrow \text{Sangat Tinggi}
\end{cases}
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi NASA-TLX

Berdasarkan kerangka Rafi & Putra (2024), implementasi di lingkungan Shopee Express Partner mengikuti SOP terstruktur berikut:

**Tahap 1 — Persiapan & Penentuan Sampel**
- Identifikasi populasi kurir SE-Partner di sebuah *hub* operasional (minimal $n=30$ responden untuk memenuhi *central limit theorem*).
- Penentuan *sample size* dengan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = jumlah populasi, $e$ = *margin of error* (umumnya 0,05).

**Tahap 2 — Pengumpulan Data Primer**
- Kuesioner demografi (usia, masa kerja, jenis kelamin, jumlah paket harian).
- Kuesioner NASA-TLX yang terdiri dari dua bagian: (1) *card sort* untuk *pairwise comparison* dan (2) enam pertanyaan rating skala 0–100.

**Tahap 3 — Scoring dan Aggregasi**
- Hitung $w_i$ dari *card sort* untuk setiap responden.
- Hitung $W_{\text{NASA-TLX}}$ per individu sesuai persamaan di Bagian 2.3.
- Aggregasi menggunakan rata-rata tim untuk melihat tren beban kerja.

**Tahap 4 — Validasi Silang dengan Work Sampling (Integrasi Aditya & Putra, 2024)**
- Lakukan observasi acak (*random sampling observation*) pada interval 1–2 menit selama jam kerja.
- Korelasikan proporsi waktu pada tiap elemen kerja dengan dimensi dominan NASA-TLX menggunakan *Pearson correlation*:

$$r_{xy} = \frac{n\sum x_iy_i - \sum x_i \sum y_i}{\sqrt{[n\sum x_i^2 - (\sum x_i)^2][n\sum y_i^2 - (\sum y_i)^2]}}$$

**Tahap 5 — Analisis & Rekomendasi**
- Identifikasi dimensi dominan yang kontribusinya > 20% terhadap skor total.
- Benchmark lintas *hub* dan *shift* (pagi, siang, malam).
- Desain intervensi ergonomi: *redesign rute*, penambahan *break time*, atau otomasi proses *sorting*.

### 3.2 Diagram Alir Proses

```
┌─────────────────────┐
│ Identifikasi Populasi│
│ Kurir SE-Partner (N)│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Hitung n (Slovin)   │
│ e = 0,05            │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Sebar Kuesioner     │
│ • Demografi         │
│ • Pairwise (15 pair)│
│ • Rating 6 Dimensi  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Hitung w_i per      │
│ Responden           │
│ (Σw_i = 15)         │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Hitung W_NASA-TLX   │
│ W = (1/15) Σ w_i·r_i│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Work Sampling       │
│ Observasi Acak      │
│ Korelasi r_xy       │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Rekomendasi Manaj.  │
│ (Shift, Rute, dll.) │
└─────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: *Hub* Shopee Express Cikarang — Shift Siang (12.