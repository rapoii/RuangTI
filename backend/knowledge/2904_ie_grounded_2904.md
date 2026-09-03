# 2904 — Analisis Beban Kerja Mental (Mental Workload) Operator Logistik Last-Mile dan Pergudangan dengan Metode NASA-TLX: Modul Pengukuran Kognitif, Work Sampling, dan Optimasi Sumber Daya Manusia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital di Asia Tenggara telah menghasilkan ledakan volume transaksi *e-commerce* yang belum pernah terjadi sebelumnya. Indonesia, sebagai pasar digital terbesar di kawasan ini, mencatatkan nilai *gross merchandise value (GMV)* yang menembus lebih dari USD 53 miliar pada 2023, dengan Shopee mempertahankan posisi sebagai platform dengan pangsa pasar dominan. Shopee Express, sebagai salah satu unit layanan logistik *end-to-end* milik Shopee, mengandalkan jaringan *partner* (mitra kurir independen) untuk menangani pengiriman *last-mile* ke jutaan konsumen setiap harinya. Dalam ekosistem ini, *shopee express partner employees* (karyawan mitra Shopee Express) menghadapi tekanan operasional yang unik: mereka harus menavigasi rute yang tidak pasti, mengelola harapan pelanggan yang beragam, menyelesaikan puluhan hingga ratusan pengiriman per shift, dan tetap mempertahankan akurasi pelacakan paket melalui aplikasi *mobile* secara *real-time*.

Menurut Rafi dan Putra (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)), analisis beban kerja mental pada populasi tersebut menjadi krusial karena beberapa alasan. Pertama, kelelahan kognitif (*mental fatigue*) telah teridentifikasi sebagai kontributor utama terhadap peningkatan *human error* dalam operasional pengiriman—dimana satu kesalahan input status pengiriman atau salah alamat dapat memicu eskalasi komplain, refund, hingga pemutusan kontrak kemitraan. Kedua, beban kerja mental yang berlebihan dalam jangka panjang dikaitkan dengan *burnout*, peningkatan *turnover* mitra, dan menurunnya produktivitas per shift. Ketiga, dari perspektif *Total Quality Management (TQM)*, kualitas layanan *last-mile* tidak hanya ditentukan oleh kecepatan fisik tetapi juga oleh keadaan kognitif operator yang berinteraksi dengan pelanggan.

Di sisi hulu rantai pasok, M. Andre Aditya.R dan Boy Isma Putra (2024) (DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi gambaran dengan meneliti *warehouse operators*—operator yang bekerja di pusat sortir dan penyimpanan. Mereka menunjukkan bahwa beban kerja di gudang tidak homogen: gabungan antara tuntutan fisik (mengangkat, memindahkan paket) dan tuntutan mental (membaca SKU, mengoperasikan WMS, berhadapan dengan ritme *conveyor* yang ketat) menciptakan profil beban multidimensional. Kedua penelitian ini, meskipun diterapkan pada populasi berbeda (kurir lapangan vs operator gudang), mengkonfirmasi bahwa metode NASA-TLX (*Task Load Index*) yang dikembangkan oleh *Human Performance Group* NASA Ames Research Center (Hart & Staveland, 1988) tetap menjadi instrumen paling andal untuk mengkuantifikasi beban kerja subjektif secara multi-dimensi.

Urgensi keilmuan dan praktis dari studi ini diperkuat oleh fakta bahwa perusahaan *e-commerce* dan logistik di Indonesia jarang memiliki *dashboard* beban kerja mental yang terstandarisasi. Keputusan alokasi jumlah mitra, penjadwalan shift, dan desain antarmuka aplikasi sering dibuat berdasarkan intuisi manajemen, bukan data kuantitatif tentang kapasitas kognitif pekerja. Modul 2904 ini bertujuan menjembatani kesenjangan tersebut dengan menyediakan kerangka metodologis lengkap—mulai dari formulasi matematis NASA-TLX, integrasi dengan *work sampling*, hingga SOP implementasi di lapangan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konsep Beban Kerja Mental (*Mental Workload*)

Beban kerja mental didefinisikan sebagai biaya kognitif total yang dikeluarkan operator untuk menyelesaikan tugas dalam kondisi tertentu, merupakan fungsi dari tuntutan tugas (*task demands*), keadaan operator (kapasitas, motivasi, pengalaman), serta perilaku yang ditampilkan (*performance*) (Rafi & Putra, 2024). Berbeda dengan beban kerja fisik yang relatif mudah diukur dengan denyut nadi atau konsumsi oksigen, beban kerja mental harus diukur secara subjektif melalui *self-report* terstandarisasi, dan NASA-TLX adalah instrumen yang paling banyak divalidasi secara internasional.

### 2.2. Enam Dimensi NASA-TLX

NASA-TLX mengukur beban kerja melalui enam subskala yang masing-masing merepresentasikan dimensi kognitif-fisik-temporal yang berbeda. Keenam dimensi tersebut, sesuai dengan protokol asli Hart & Staveland (1988) dan diadopsi oleh Rafi & Putra (2024), adalah:

1. **Mental Demand (MD)** — seberapa banyak aktivitas berpikir, memutuskan, dan menghitung yang diperlukan.
2. **Physical Demand (PD)** — seberapa banyak aktivitas fisik yang diperlukan.
3. **Temporal Demand (TD)** — seberapa besar tekanan waktu yang dirasakan.
4. **Performance (P)** — seberapa besar keberhasilan operator dalam mencapai tujuan (skor rendah = keberhasilan tinggi).
5. **Effort (EF)** — seberapa keras usaha yang harus dikeluarkan secara mental dan fisik untuk mencapai tingkat performance.
6. **Frustration (FR)** — seberapa besar tingkat frustasi, irritasi, dan stres yang dirasakan.

### 2.3. Formulasi *Raw NASA-TLX Score*

Setiap subskala dinilai oleh responden pada skala garis kontinu dari 0 sampai 100 (dengan tick marks setiap kelipatan 5). Bobot (*weight*) untuk setiap dimensi ditentukan melalui prosedur *paired comparison*, dimana responden memilih pasangan dimensi yang lebih relevan terhadap beban kerjanya dari $\binom{6}{2}=15$ pasangan. *Raw TLX* dihitung menggunakan rumus (Rafi & Putra, 2024; mengutip Hart & Staveland, 1988):

$$
\text{Raw TLX}_i = \frac{\sum_{k=1}^{6} w_{k,i} \cdot r_{k,i}}{15}
$$

dengan parameter:
- $r_{k,i}$ = skor *raw* dimensi $k$ (dari $\{MD, PD, TD, P, EF, FR\}$) untuk responden $i$, bernilai 0–100.
- $w_{k,i}$ = bobot dimensi $k$ untuk responden $i$, bernilai 0–5 (karena setiap dimensi muncul dalam 5 dari 15 perbandingan).
- Total bobot untuk setiap responden: $\sum_{k=1}^{6} w_{k,i} = 15$.

### 2.4. Formulasi *Weighted TLX (Adjusted TLX)*

Karena prosedur *paired comparison* memakan waktu, banyak implementasi modern menggunakan *weighted* langsung dari survei independen atau *default weights*. Versi *weighted* didefinisikan sebagai:

$$
\text{Weighted TLX}_i = \frac{\sum_{k=1}^{6} w_{k,i} \cdot r_{k,i}}{\sum_{k=1}^{6} w_{k,i}} = \frac{\sum_{k=1}^{6} w_{k,i} \cdot r_{k,i}}{15}
$$

Karena $\sum w_{k,i}=15$, rumus Raw TLX dan Weighted TLX identik secara matematis. Skor akhir berada pada rentang 0–100. Kategorisasi beban kerja mengikuti konvensi literatur (Rafi & Putra, 2024):

$$
\text{Kategori} = \begin{cases}
\text{Rendah}, & 0 \le \text{TLX} < 25 \\
\text{Sedang}, & 25 \le \text{TLX} < 50 \\
\text{Tinggi}, & 50 \le \text{TLX} < 75 \\
\text{Sangat Tinggi}, & 75 \le \text{TLX} \le 100
\end{cases}
$$

### 2.5. Integrasi dengan *Work Sampling*

Aditya.R & Putra (2024) menambahkan dimensi *work sampling* untuk memvalidasi skor NASA-TLX. *Work sampling* adalah teknik observasi acak (*instantaneous observation*) untuk menentukan proporsi waktu yang dihabiskan operator pada berbagai kategori aktivitas. Formula dasarnya:

$$
p_k = \frac{n_k}{N}, \quad \text{dengan } \sum_{k=1}^{m} p_k = 1
$$

dan batas galat (*confidence interval*) pada tingkat signifikansi $\alpha$:

$$
R = \pm z_{\alpha/2} \sqrt{\frac{p_k(1-p_k)}{N}}
$$

dimana:
- $n_k$ = jumlah observasi yang termasuk dalam kategori aktivitas $k$.
- $N$ = total jumlah observasi acak.
- $z_{\alpha/2}$ = nilai z pada置信 level $(1-\alpha)$ (misal: 1,96 untuk $\alpha=0{,}05$).

Jumlah sampel minimum yang dibutuhkan untuk presisi tertentu $E$ dihitung dengan:

$$
N_{\min} = \frac{z_{\alpha/2}^2 \cdot p(1-p)}{E^2}
$$

Konsistensi antara profil *work sampling* dan skor NASA-TLX memberikan bukti konvergen (*triangulasi*) bahwa beban kerja yang dilaporkan bukan artefak persepsi subjektif semata.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Tahapan SOP Pengukuran NASA-TLX di Lingkungan Last-Mile

Berdasarkan protokol Rafi & Putra (2024), implementasi NASA-TLX pada mitra Shopee Express mengikuti tahapan:

**Tahap 1 — Penetapan Unit Analisis dan Stratifikasi Populasi.** Populasi dikelompokkan berdasarkan zona operasi (urban, suburban, rural), shift (pagi/siang/malam), dan seniority. Minimum sampel dihitung menggunakan rumus Slovin pada tingkat galat 5%:

$$
n = \frac{N}{1 + N \cdot e^2}
$$

**Tahap 2 — Desain Kuesioner dan *Pre-Test*.** Kuesioner NASA-TLX diterjemahkan dan diadaptasi secara *forward-backward translation*. Uji coba pada 10–15 responden untuk mengukur reliabilitas menggunakan Cronbach's Alpha ($\alpha \ge 0{,}70$ sebagai ambang).

**Tahap 3 — Pengumpulan Data.** Instrumen diisi responden di akhir shift (post-task) untuk menghindari *interruption* selama operasi. Setiap responden menyelesaikan dua tahap: (a) *rating* keenam subskala pada skala 0–100, dan (b) *paired comparison* 15 pasangan.

**Tahap 4 — Komputasi dan Analisis Statistik.** Hitung Raw TLX, uji normalitas (Shapiro-Wilk), uji beda (Mann-Whitney U untuk 2 kelompok, Kruskal-Wallis untuk >2 kelompok karena distribusi TLX sering non-normal), dan korelasi Spekarman dengan variable dependen.

**Tahap 5 — Interpretasi dan Rekomendasi.** Petakan hasil ke kategori (Rendah/Sedang/Tinggi/Sangat Tinggi) dan form rekomendasi managerial.

### 3.2. Diagram Alir Proses

```
┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│  Identifikasi       │───▶│ Desain Instrumen    │───▶│  Pre-Test & Validasi │
│  Masalah Beban      │    │ NASA-TLX (6 dim)    │    │  (Cronbach α ≥ 0.70) │
└──────────────────────┘    └──────────────────────┘    └──────────────────────┘
                                                              │
                                                              ▼
┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│  Rekomendasi &      │◀───│  Analisis Statistik │◀───│  Pengumpulan Data    │
│  Tindakan Perbaikan │    │  (Uji beda, korel)  │    │  (Post-shift survey) │
└──────────────────────┘    └──────────────────────┘    └──────────────────────┘
```

### 3.3. Integrasi dengan *Work Sampling* (Modul Gudang)

Untuk studi operator gudang, Aditya.R & Putra (2024) menambahkan prosedur observasi acak di samping survei NASA-TLX. Pengamat melakukan *round* observasi setiap interval acak (misalnya, setiap 90 detik selama shift 8 jam) dengan total $N$ observasi yang memenuhi $N_{\min}$. Aktivitas diklasifikasikan ke dalam kategori seperti *picking*, *packing*, *sorting*, *搬运* (搬运 = perpindahan manual), *idle*, *delay*, dan *administrative*.

### 3.4. Standar Industri Terkait

Implementasi mengacu pada:
- **ISO 10075:** Ergonomic principles related to mental workload (Part 1: general issues; Part 2: design principles; Part 3: measurement methods).
- **NASA STD-3000:** Man-Systems Integration Standards (Bab 7.4 Mental Workload).
- **SNI 7269:** Ergonomi di tempat kerja — Penilaian beban kerja.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Profil Kasus Hipotetis (Berdasarkan Pola Temuan Rafi & Putra, 2024)

Sebuah hub Shopee Express di kawasan urban Jakarta memiliki 50 mitra aktif. Tim operasional ingin mengevaluasi beban kerja mental pada shift siang (10.00–18.00). Menggunakan rumus Slovin dengan $N=50$ dan $e=0{,}10$:

$$
n = \frac{50}{1 + 50 \cdot (0{,}10)^2} = \frac{50}{1 + 0{,}5} = 33{,}33 \approx 34 \text{ responden}
$$

### 4.2. Data Mentah 3 Responden Representatif

**Tabel 1. Skor Mentah dan Bobot NASA-TLX**

| Responden | MD | PD | TD | P | EF | FR | MD-w |