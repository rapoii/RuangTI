# 1512 — Analisis Beban Kerja Mental Operator Logistik Last-Mill Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method  
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)  
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)  

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Asia Tenggara yang dipicu oleh platform *e-commerce* seperti Shopee, Tokopedia, dan Lazada telah menghasilkan transformasi radikal pada rantai pasok *last-mile delivery*. Shopee Express, sebagai anak perusahaan logistik Shopee yang beroperasi dengan model kemitraan (*partner*), mengelola volume pengiriman yang berfluktuasi tajam antara periode reguler dan *flash sale* (Rafi & Putra, 2024). Model bisnis kemitraan ini menarik bagi pelaku UMKM dan pekerja lepas, namun menciptakan tantangan ergonomi kognitif yang unik karena kombinasi antara target pengiriman harian yang ketat, kompleksitas rute urban, dan ketidakpastian alamat pelanggan. Pada periode puncak seperti Harbolnas (Hari Belanja Nasional) dan 12.12, volume paket dapat meningkat 4–6 kali lipat dibanding hari biasa, sehingga tekanan mental terhadap mitra kurir melonjak drastis.

Menurut Rafi & Putra (2024), analisis beban kerja mental merupakan kebutuhan strategis bagi manajemen operasional Shopee Express karena *turnover* mitra kurir yang tinggi, kecelakaan kerja yang berakar dari kelelahan kognitif, dan rendahnya *service level agreement* (SLA) pada pengiriman *same-day*. Beban kerja mental (*mental workload*) didefinisikan sebagai total biaya sumber daya kognitif yang dikeluarkan operator untuk menyelesaikan tugas pada tingkat kinerja tertentu (Hart & Staveland, 1988, dalam Rafi & Putra, 2024). Pada konteks *last-mile*, beban mental ini mencakup navigasi GPS, verifikasi identitas pelanggan (OTP), komunikasi dengan *call center*, serta pengambilan keputusan *real-time* terkait prioritas pengiriman ketika terjadi hambatan lalu lintas.

Urgensi penelitian ini juga didorong oleh fakta bahwa *overmental workload* menyebabkan peningkatan *error rate* (salah kirim, paket tertinggal), depresi ringan, dan bahkan keputusan untuk resign dalam 3–6 bulan pertama masa kerja mitra. Sebaliknya, *undermental workload* (terlalu rendah) menurunkan produktivitas dan motivasi. Oleh karena itu, pengukuran kuantitatif menggunakan instrumen tervalidasi seperti NASA-TLX menjadi prasyarat untuk desain ulang alokasi tugas, *shift scheduling*, dan program pelatihan kognitif. Studi pendukung Aditya.R & Putra (2024) menunjukkan bahwa kombinasi NASA-TLX dengan *Work Sampling* memberikan visibilitas dua dimensi: yaitu intensitas perseptual beban mental dan distribusi proporsi waktu aktivitas operator. Pendekatan ganda ini menjadi *gold standard* dalam ergonomi logistik modern karena dapat memetakan inefisiensi baik dari sisi *what people do* maupun *how hard they think*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Sandra Hart dan Lowell Staveland (NASA Ames Research Center, 1988) untuk mengukur beban kerja secara subjektif melalui enam subskala (Rafi & Putra, 2024):

1. **Mental Demand (MD)** – tuntutan aktivitas kognitif (berpikir, memutuskan, mengingat).
2. **Physical Demand (PD)** – tuntutan aktivitas fisik (mengangkat, berjalan, mengendarai).
3. **Temporal Demand (TD)** – tekanan waktu.
4. **Performance (PE)** – persepsi keberhasilan menyelesaikan tugas.
5. **Effort (EF)** – usaha yang dikeluarkan.
6. **Frustration (FR)** – tingkat frustrasi, stress, dan ketidaknyamanan.

Terdapat dua metode penskoran: **Raw TLX (RTLX)** dan **Weighted TLX**. Pada RTLX, skor total dihitung sebagai:

$$
\text{TLX}_{\text{raw}} = \frac{MD + PD + TD + PE + EF + FR}{6}
$$

dengan setiap subskala diskor 0–100 oleh responden menggunakan *visual analog scale*. Pada **Weighted TLX**, responden terlebih dahulu melakukan *pairwise comparison* terhadap 15 pasangan dimensi untuk menentukan bobot (jumlah total bobot = 15). Skor tertimbang dihitung:

$$
\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} (s_i \cdot w_i)}{15}
$$

dengan $s_i$ adalah skor subskala ke-$i$ dan $w_i$ adalah bobot hasil *card-sort*. Interpretasi skor mengikuti klasifikasi Gopher & Donchin (1986):

$$
\text{TLX}_{\text{weighted}} =
\begin{cases}
0 - 20 & \text{(Rendah)} \\
21 - 40 & \text{(Sedang Rendah)} \\
41 - 60 & \text{(Sedang)} \\
61 - 80 & \text{(Sedang Tinggi)} \\
81 - 100 & \text{(Tinggi)}
\end{cases}
$$

### 2.2 Work Sampling untuk Distribusi Aktivitas

Metode *Work Sampling* (WS) yang digunakan Aditya.R & Putra (2024) mengukur proporsi waktu operator melakukan aktivitas tertentu melalui pengamatan sesaat (*instantaneous observation*). Jumlah observasi minimum ditentukan oleh rumus statistik:

$$
n = \frac{N^2 \cdot p \cdot (1-p)}{E^2}
$$

dengan:
- $N$ = jumlah observasi (untuk *finite population correction*),
- $p$ = proporsi aktivitas yang diestimasi (umumnya $p = 0.5$ untuk kasus konservatif),
- $E$ = *allowable error* absolut.

Untuk populasi tak hingga (*infinite population*), rumus disederhanakan:

$$
n = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}
$$

dengan $Z$ = nilai Z pada tingkat kepercayaan $(1-\alpha)$. Untuk $\alpha = 0.05$, $Z = 1.96$.

Interval kepercayaan proporsi aktivitas adalah:

$$
CI_{p} = p \pm Z \cdot \sqrt{\frac{p(1-p)}{n}}
$$

### 2.3 Model Beban Kognitif Berlapis (*Multiplex Cognitive Load*)

Untuk analisis integratif, Rafi & Putra (2024) mengadopsi model yang menggabungkan skor NASA-TLX dengan *utilization rate* dari Work Sampling:

$$
U_{\text{cognitive}} = \frac{T_{\text{task-active}} + T_{\text{cognitive-overhead}}}{T_{\text{total}}}
$$

dengan $T_{\text{task-active}}$ adalah waktu melakukan tugas utama dan $T_{\text{cognitive-overhead}}$ adalah waktu untuk proses kognitif sekunder (cek HP, tanya alamat, dst.).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Penelitian

```
┌─────────────────────────────────────┐
│ Tahap 1: Identifikasi Masalah &     │
│ Studi Pendahuluan (Observasi Awal)  │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 2: Penentuan Responden        │
│ (Stratified Sampling: 30 Mitra)     │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 3: Work Sampling (7 hari,     │
│ interval acak 5 menit, jam kerja)   │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 4: Kuesioner NASA-TLX         │
│ (Self-administered setelah shift)   │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 5: Uji Validitas & Reliabilitas│
│ (Cronbach's α > 0.70)              │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 6: Perhitungan Raw & Weighted │
│ TLX, Pairwise Comparison            │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 7: Analisis Korelasi & Regresi│
│ (Pearson, Linier Berganda)          │
└────────────────┬────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│ Tahap 8: Rekomendasi Perbaikan      │
│ (Job Rotation, Shift Design, SOP)   │
└─────────────────────────────────────┘
```

### 3.2 SOP Pengukuran NASA-TLX di Sortation Center Shopee Express

**Langkah 1 – Pra-survey (3 hari):** Lakukan observasi partisipatif untuk memetakan aktivitas tipikal mitra kurir: sortir inbound, *loading*, pengiriman, *return handling*, *pickup request*.

**Langkah 2 – Penentuan Responden:** Gunakan *stratified random sampling* dengan strata berdasarkan zona pengiriman (urban dense, suburban, industrial). Minimum 30 responden mengikuti rumus Slovin:

$$
n = \frac{N}{1 + N \cdot e^2}
$$

dengan $N$ = populasi mitra (misal 200) dan $e$ = margin error (0.05).

**Langkah 3 – Pelaksanaan Work Sampling:** Siapkan lembar observasi dengan kategori aktivitas: (1) sortir, (2) muat, (3) antar, (4) komunikasi dengan customer, (5) istirahat, (6) menunggu sistem, (7) perjalanan kosong. Gunakan aplikasi *random time generator* setiap 5 menit selama 7 hari kerja.

**Langkah 4 – Kuesioner NASA-TLX:** Disertakan *post-shift survey* menggunakan Google Form berisi 6 pertanyaan skala 0–100 dan instruksi *card-sort pairwise comparison*. Setiap responden diminta membandingkan 15 pasangan dimensi (${6 \choose 2} = 15$).

**Langkah 5 – Pengujian Instrumen:** Hitung Cronbach's $\alpha$:

$$
\alpha = \frac{k}{k-1} \cdot \left( 1 - \frac{\sum_{i=1}^{k} \sigma_{y_i}^2}{\sigma_T^2} \right)
$$

dengan $k$ = jumlah item dan $\sigma_T^2$ = varians total. Syarat lulus $\alpha \geq 0.70$ (Nunnally, 1978).

**Langkah 6 – Analisis Data:** Hitung skor Raw TLX dan Weighted TLX per responden. Lakukan uji beda (ANOVA) untuk membandingkan zona pengiriman dan uji regresi linier berganda:

$$
Y_{TLX} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_n X_n + \varepsilon
$$

**Langkah 7 – Rekomendasi:** Tetapkan *threshold action*: jika $\text{TLX}_{\text{weighted}} > 75$, lakukan *redesign task*; jika $>85$, wajib *job rotation*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Berdasarkan parameter lapangan Rafi & Putra (2024) untuk Shopee Express Hub X (kota metropolitan, 50 mitra kurir), disimulasikan studi kasus sebagai berikut:

- **Responden:** 30 mitra kurir (stratified: 12 urban, 10 suburban, 8 industrial).
- **Periode:** 7 hari kerja, *peak* di hari ke-3 (volume paket 380/hari).
- **Aktivitas hasil Work Sampling** (rata-rata 1.200 observasi):

| Aktivitas | Proporsi (%) |
|---|---|
| Sortir & Loading | 18,3 |
| Pengiriman (Antar) | 42,5 |
| Komunikasi Customer | 8,2 |
| Menunggu Sistem/Antrian | 6,7 |
| Perjalanan Kosong | 11,4 |
| Istirahat | 9,1 |
| Lain-lain | 3,8 |

### 4.2 Penentuan Jumlah Observasi

Asumsikan $p = 0.425$ (proporsi aktivitas pengiriman), $E = 0.03$, $Z = 1.96$:

$$
n = \frac{1.96^2 \cdot 0.425 \cdot (1-0.425)}{0.03^