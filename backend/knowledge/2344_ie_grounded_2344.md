# 2344 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analisis Beban Kerja Mental Karyawan Mitra Shopee Express dengan NASA-TLX
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Asia Tenggara yang diproyeksikan mencapai USD 1 triliun pada tahun 2030 telah mendorong ekspansi masif sektor *last-mile delivery*, di mana Shopee Express (sebagai salah satu *third-party logistics* utama di bawah naungan Sea Group) menjadi tulang punggung operasional *e-commerce* di Indonesia. Dalam konteks ini, kemitraan dengan *driver* atau kurir lepas (*partner employees*) menjadi model bisnis dominan karena bersifat *asset-light*, scalable, dan mampu menyerap fluktuasi permintaan musiman (Ramadhan, Harboled, 11.11). Rafi & Putra (2024) dalam publikasinya di DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menekankan bahwa karakteristik pekerjaan kurir Shopee Express — yang mengintegrasikan *picking*, *sorting*, *delivering*, serta *real-time tracking* melalui aplikasi mobile — menciptakan paparan beban kognitif yang unik dan belum sepenuhnya dipetakan secara kuantitatif dalam literatur teknik industri Indonesia.

Urgensi studi ini diperkuat oleh tiga fenomena empiris. Pertama, *Standardized Operational Procedure* (SOP) Shopee Express mensyaratkan SLA pengantaran dalam radius 24–48 jam dengan tingkat keberhasilan *first-attempt delivery* minimal 90%. Kedua, algoritma *dynamic routing* pada aplikasi mendorong keputusan manajerial dalam *split-second* yang memicu *temporal demand* tinggi. Ketiga, penelitian Aditya & Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) menunjukkan bahwa operator gudang (*warehouse operators*) menghadapi pola beban mental yang bergantung pada *peak hours*, sehingga perluasan metodologi ke konteks *delivery driver* menjadi kebutuhan strategis. Pengukuran objektif terhadap beban mental menjadi krusial karena kelelahan kognitif (*mental fatigue*) berkorelasi langsung dengan *human error*, kecelakaan kerja, dan penurunan produktivitas — yang pada akhirnya memengaruhi *customer satisfaction score* (CSAT) dan *cost per delivery* perusahaan. Dalam kerangka *Human Factors and Ergonomics*, penerapan *NASA Task Load Index* (NASA-TLX) muncul sebagai instrumen paling tervalidasi secara global untuk melakukan diagnosis holistik terhadap dimensi beban kerja multidimensi, sementara Work Sampling berperan sebagai pelengkap untuk memetakan *time allocation* aktivitas fisik operator.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX, yang dikembangkan oleh Hart & Staveland (1988) dan telah digunakan secara luas dalam konteks penerbangan, medis, dan manufaktur, mengukur beban kerja subjektif melalui enam dimensi dengan bobot relatif yang diperoleh dari *paired comparison card sorting*. Keenam dimensi tersebut adalah *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (PE), *Effort* (EF), dan *Frustration* (FR). Setiap dimensi dinilai pada skala bipolar *Likert* 0–100, lalu dihitung skor tertimbangnya (Weighted Score, WS) melalui:

$$WS = \frac{\sum_{i=1}^{6} w_i \cdot s_i}{\sum_{i=1}^{6} w_i}$$

dengan $w_i$ adalah bobot hasil *card sort* (bernilai 0–5) untuk dimensi ke-$i$, dan $s_i$ adalah skor mentah dimensi ke-$i$. Karena $\sum w_i = 15$ untuk 15 pasangan, maka penyebut bernilai konstan, sehingga:

$$WS = \frac{1}{15} \sum_{i=1}^{6} w_i \cdot s_i$$

Skor total $WS$ diklasifikasikan berdasarkan tipologi beban yang diadopsi Rafi & Putra (2024):

$$Beban = \begin{cases} \text{Rendah}, & WS < 30 \\ \text{Sedang}, & 30 \leq WS < 50 \\ \text{Tinggi}, & 50 \leq WS < 70 \\ \text{Sangat Tinggi}, & WS \geq 70 \end{cases}$$

Untuk pelengkap, Work Sampling mengandalkan distribusi hipergeometrik dengan formula ukuran sampel minimum:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}$$

dengan $Z$ = nilai *Z-score* berdasarkan tingkat kepercayaan (umumnya 1,96 untuk $\alpha=0{,}05$), $p$ = probabilitas proporsi aktivitas yang diamati (default $p=0{,}5$ untuk konservatif), dan $E$ = *margin of error* yang dapat diterima (misal 0,05). Pengamatan dilakukan secara acak (*random sampling*) dengan total:

$$n_{obs} = \frac{T_{total}}{f_{interval}}$$

di mana $T_{total}$ adalah total waktu pengamatan dan $f_{interval}$ adalah frekuensi pengamatan (umumnya setiap 1–2 menit). Proporsi waktu untuk aktivitas ke-$k$:

$$P_k = \frac{x_k}{n_{obs}}$$

dengan $x_k$ sebagai jumlah observasi pada aktivitas $k$, dan *confidence interval*-nya:

$$CI = P_k \pm Z \cdot \sqrt{\frac{P_k (1-P_k)}{n_{obs}}}$$

Kombinasi NASA-TLX dengan Work Sampling memungkinkan *triangulasi metodologis*: NASA-TLX mengukur beban subjektif, sementara Work Sampling memvalidasi proporsi alokasi waktu yang menjadi pemicu beban kognitif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi mengikuti SOP *Human Factors Engineering* berbasis ISO 26800 dan ISO 10075 (prinsip ergonomi psikologis). Prosedur sistematisnya adalah sebagai berikut:

1. **Pra-survei & Penentuan Sampel:** Tentukan populasi (driver Shopee Express aktif minimal 3 bulan), hitung $N$ menggunakan rumus di atas dengan $p=0{,}5$, $E=0{,}05$, $Z=1{,}96$, sehingga $N \approx 384$ responden untuk generalisasi nasional. Randomisasi menggunakan *stratified sampling* berdasarkan zona operasional.
2. **Pelatihan Responden:** Sesi 15 menit untuk menjelaskan enam dimensi NASA-TLX menggunakan *card sort* versi kertas/digital dan panduan *anchoring* (contoh: skala 0 = tidak ada tuntutan, 100 = tuntutan sangat tinggi).
3. **Pelaksanaan Card Sort:** Setiap responden melakukan 15 perbandingan berpasangan antar dimensi. Total *pairing*:

$$C(6,2) = \frac{6!}{2!(6-2)!} = 15 \text{ pasangan}$$

4. **Pengisian Skor Mentah:** Responden menilai keenam dimensi terhadap pekerjaannya selama shift terakhir.
5. **Work Sampling Lapangan:** Observer mengamati 30–50 driver secara *time-and-motion* pada *peak hours* (10.00–14.00 dan 16.00–20.00) dengan interval 2 menit, menghasilkan:

$$n_{obs} = \frac{8 \text{ jam} \times 30 \text{ obs/jam}}{1 \text{ driver}} = 240 \text{ observasi/driver}$$

6. **Rekonsiliasi Data:** Crosstab antara $P_k$ dan $WS_i$ untuk identifikasi korelasi kausal (driver dengan proporsi *navigasi* tinggi diasumsikan memiliki MD & TD tinggi).

Diagram alir proses mengikuti pola: **Identifikasi Masalah → Pengukuran Subjective (TLX) → Pengukuran Objective (Work Sampling) → Rekomendasi Intervensi Ergonomis → Re-evaluasi Pasca-intervensi**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** PT XYZ, mitra resmi Shopee Express di Wilayah Jabodetabek, akan melakukan audit ergonomi terhadap 10 driver senior. Hasil *card sort* salah satu driver (responden A) menunjukkan bobot: MD=5, PD=1, TD=4, PE=2, EF=2, FR=1. Skor mentah dari kuesioner: MD=85, PD=60, TD=80, PE=50, EF=70, FR=55.

**Langkah 1 — Hitung Weighted Score (WS):**

$$WS = \frac{(5 \cdot 85) + (1 \cdot 60) + (4 \cdot 80) + (2 \cdot 50) + (2 \cdot 70) + (1 \cdot 55)}{5+1+4+2+2+1}$$

$$WS = \frac{425 + 60 + 320 + 100 + 140 + 55}{15} = \frac{1100}{15} = 73{,}33$$

Berdasarkan klasifikasi tipologi, responden A masuk kategori **Beban Sangat Tinggi** ($WS \geq 70$).

**Langkah 2 — Verifikasi Work Sampling:** Dari 240 observasi terhadap responden A, teridentifikasi alokasi waktu: *driving* 55%, *navigasi & scanning barcode* 20%, *komunikasi via HP* 12%, *picking barang* 8%, *istirahat* 5%. Proporsi *navigasi & scanning* (20%) merupakan pemicu kuat MD dan TD.

**Langkah 3 — Hitung Confidence Interval untuk aktivitas "navigasi":**

$$P_{nav} = 0{,}20, \quad Z = 1{,}96$$

$$CI = 0{,}20 \pm 1{,}96 \cdot \sqrt{\frac{0{,}20 \cdot 0{,}80}{240}} = 0{,}20 \pm 0{,}051$$

Artinya proporsi waktu navigasi berada pada rentang 14,9%–25,1% dengan keyakinan 95%.

**Langkah 4 — Rekomendasi Engineering:** Berdasarkan hasil tersebut, intervensi yang direkomendasikan berupa: (a) implementasi *voice-command picking* untuk mengurangi MD; (c) redistribusi zona pengiriman untuk menurunkan TD; (c) penambahan *micro-rest* 5 menit tiap 90 menit guna menurunkan PD & EF. Estimasi *post-intervention WS* yang ditargetkan: $\leq 50$ (beban sedang).

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologis:** NASA-TLX bersifat *subjective recall* sehingga rentan terhadap *response bias* dan *fatigue-induced misjudgment*. Work Sampling memerlukan observer terlatih untuk mencegah *Hawthorne effect*. Replikasi longitudinal dengan *psychophysiological measures* (HRV, EEG, pupil dilation) disarankan untuk validasi konvergen. Perbandingan dengan metode alternatif seperti SWAT (Subjective Workload Assessment Technique) dan *Workload Profile* (NASA-TLX varian multi-resource) perlu dilakukan untuk konteks *gig economy*.

**Aplikasi Lintas Sektor:** Kerangka metodologis Rafi & Putra (2024) serta Aditya & Putra (2024) dapat diadaptasi pada: (i) operator *call center* (MD & FR dominan), (ii) teknisi pemeliharaan pesawat (*line maintenance*), (iii) tenaga medis IGD saat pandemi, dan (iv) operator *control room* industri proses. Integrasi dengan *digital twin* memungkinkan simulasi beban kerja berbasis *real-time KPI*.

**Agenda Riset Lanjutan:** Pengembangan model prediktif berbasis *machine learning* (Random Forest regressor) untuk memprediksi $WS$ dari variabel Work Sampling, formulasi:

$$\hat{WS} = f(P_{nav}, P_{kom}, P_{driving}, \text{jam\_shift}, \text{cuaca})$$

dengan evaluasi RMSE. Standar masa depan yang diharapkan adalah ISO 9241-210 (Human-Centred Design) untuk *ergonomic-by-design* platform aplikasi kurir, serta adopsi *wearable biosensors* (smartwatch) sebagai sumber data Work Sampling otomatis. Integrasi ini akan membentuk *closed-loop ergonomics system* yang adaptif terhadap beban real-time — sebuah evolusi penting dalam *Human Factors Engineering