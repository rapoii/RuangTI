# 2840 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dengan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai Rp1.430 triliun pada 2025 (Bank Indonesia, 2023) telah mengubah secara fundamental struktur rantai pasok last-mile delivery, dengan Shopee Express sebagai salah satu tulang punggung operasionalisasi fulfillment Shopee di kawasan Sumatera, Jawa, dan Indonesia Timur. Volume pengiriman harian Shopee Express di hub utama seperti Jakarta, Surabaya, dan Medan dapat melampaui 50.000 paket per hari pada periode *peak season* (Harbolnas, 11.11, 12.12), sehingga menciptakan paparan beban kerja kumulatif yang signifikan terhadap *partner employees* — yakni pekerja sortasi, *picker*, *packer*, dan kurir last-mile yang bekerja di bawah skema kemitraan (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)).

Permasalahan utama yang diidentifikasi oleh Rafi & Putra (2024) adalah dominasi dimensi psikologis dalam beban kerja yang bersifat *invisible* namun determinan terhadap keselamatan, kualitas sortir, dan *turnover* mitra. Tidak seperti beban kerja fisik yang dapat diukur melalui heart rate monitor atau calorimetri, beban mental membutuhkan instrumentasi subjektif terstandar yang reliabel dan valid lintas demografi operator. Oleh sebab itu, paper tersebut mengadopsi NASA-TLX (NASA Task Load Index) sebagai instrumen *multidimensional subjective workload assessment* yang telah tervalidasi secara psikometrik sejak dikembangkan oleh Hart & Staveland (1988) dan diaplikasikan secara luas dalam konteks transportasi, авиаasi, dan kini logistik digital. Urgensi ekonomis dari studi ini sangat tinggi mengingat satu insiden kelelahan mental pada *sorting operator* berpotensi menghasilkan *mis-sort rate* sebesar 3-7%, yang dalam skala harian Shopee Express setara dengan 1.500-3.500 paket salah rute, menimbulkan *reverse logistics cost*, *customer complaint*, dan degradasi *Service Level Agreement* (SLA) kepada merchant.

Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi kerangka analitis tersebut dengan mengusulkan integrasi Work Sampling untuk memvalidasi proporsi waktu aktivitas yang berkorelasi dengan skor NASA-TLX, sehingga tidak terjadi bias atribusi beban mental akibat distribusi aktivitas yang tidak representatif. Pendekatan integratif ini merepresentasikan evolusi metodologi *ergonomics analysis* dari pengukuran tunggal menjadi *multi-method triangulation* yang relevan untuk aplikasi pada gudang modern bercirikan *high-mix low-volume* hingga *low-mix high-volume* seperti operasi Shopee Express.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX)

NASA-TLX mengukur beban kerja melalui enam subskala yang masing-masing dinilai pada skala bipolar *Likert-type* 0-100 (step 5):

1. **Mental Demand (MD)** — aktivitas kognitif (menghitung, melihat, mencari, memutuskan)
2. **Physical Demand (PD)** — aktivitas fisik (menopang, mengangkat, berjalan)
3. **Temporal Demand (TD)** — tekanan waktu
4. **Performance (P)** — perceived success dalam pencapaian任务
5. **Effort (E)** — tingkat usaha yang dikeluarkan
6. **Frustration (F)** — tingkat irritasi, stress, discouragement

Skor total NASA-TLX dihitung sebagai *Weighted Average Score* (WAS), dengan bobot ditentukan melalui prosedur *paired comparison* dari 15 pasangan dimensi. Formulasi matematisnya:

$$
\text{TLX}_{WAS} = \frac{\sum_{i=1}^{6} S_i \cdot w_i}{15}
$$

di mana $S_i \in [0,100]$ adalah skor mentah subskala ke-$i$ dan $w_i \in \{0,1,...,5\}$ adalah bobot hasil perbandingan berpasangan. Konstanta 15 muncul karena terdapat $\binom{6}{2}=15$ kombinasi pasangan (Rafi & Putra, 2024). Skor dikategorikan ke dalam empat kualifikatif beban kerja menurut standar *Human Performance Models*:

$$
\text{Kelas Beban} = 
\begin{cases}
\text{Rendah}, & \text{TLX}_{WAS} < 25 \\
\text{Sedang}, & 25 \leq \text{TLX}_{WAS} < 50 \\
\text{Tinggi}, & 50 \leq \text{TLX}_{WAS} < 75 \\
\text{Sangat Tinggi}, & \text{TLX}_{WAS} \geq 75
\end{cases}
$$

### 2.2. Work Sampling — Penentuan Ukuran Sampel

Work Sampling menggunakan prinsip *random sampling* untuk mengestimasi proporsi waktu yang dihabiskan pada kategori aktivitas tertentu (Aditya & Putra, 2024). Ukuran sampel minimum yang dibutuhkan:

$$
n = \frac{Z^2 \cdot p(1-p)}{e^2}
$$

dengan $Z$ = nilai kritis distribusi normal standar (1,96 untuk $\alpha = 0,05$), $p$ = proporsi estimasi aktivitas, dan $e$ = *margin of error* yang dapat diterima. Confidence interval untuk proporsi aktivitas $p$ diberikan oleh:

$$
\text{CI}_{95\%} = \hat{p} \pm 1,96 \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}
$$

### 2.3. Uji Validitas dan Reliabilitas

Validitas konstruk NASA-TLX dikonfirmasi melalui *Cronbach's Alpha* ($\alpha$) dan validitas konvergen dengan *Pearson Product-Moment Correlation*:

$$
\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{S_i}}{\sigma^2_T}\right)
$$

di mana $k=6$ adalah jumlah subskala, $\sigma^2_{S_i}$ varians skor subskala, dan $\sigma^2_T$ varians skor total. Instrumen dinyatakan reliabel jika $\alpha \geq 0,70$ (Nunnally, 1978).

### 2.4. Uji Beda Rata-Rata

Untuk menguji perbedaan skor NASA-TLX antar shift, jenis kelamin, atau pengalaman kerja digunakan *Independent Samples t-Test* dengan statistik:

$$
t = \frac{\bar{X}_1 - \bar{X}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}, \quad s_p = \sqrt{\frac{(n_1-1)s^2_1 + (n_2-1)s^2_2}{n_1+n_2-2}}
$$

dengan derajat kebebasan $df = n_1 + n_2 - 2$. Keputusan ditolak $H_0$ jika $|t_{hitung}| > t_{tabel,\alpha/2,df}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi pada operator Shopee Express mengikuti SOP berbasis *Integrated Ergonomic Assessment Framework* yang terdiri dari tujuh tahap (Rafi & Putra, 2024; Aditya & Putra, 2024):

**Tahap 1 — Identifikasi Sistem & Unit Analisis.** Mendefinisikan *scope* pekerjaan (sortasi inbound/outbound, *scanning*, *loading-unloading*, *delivery routing*), jumlah operator sampel ($n \geq 30$ untuk memenuhi *Central Limit Theorem*), dan karakteristik demografis (usia, jenis kelamin, masa kerja, indeks massa tubuh).

**Tahap 2 — Penyusunan Kuesioner & Form Observasi.** Kuesioner NASA-TLX versi Bahasa Indonesia telah melalui proses *back-translation* dan uji *cognitive debriefing*. Form work sampling mencakup kategori aktivitas: *productive* (sorting, scanning, packing), *supportive* (cek HP, absen, briefing), dan *non-productive* (menunggu,闲聊, izin ke toilet).

**Tahap 3 — Penentuan Jumlah Observasi Work Sampling.** Menggunakan rumus pada Bagian 2.2 dengan $p = 0,5$ (kondisi paling konservatif), $e = 0,05$, dan $Z = 1,96$, diperoleh $n = 384$ observasi. Distribusikan secara acak terhadap $N$ operator menggunakan *random time generator*.

**Tahap 4 — Pelaksanaan Work Sampling.** Observer melakukan *instantaneous observation* pada interval acak (misal setiap 90 detik selama 8 jam = 320 observasi/operator/hari) selama minimal 5 hari kerja untuk menangkap variabilitas beban.

**Tahap 5 — Pelaksanaan NASA-TLX.** Responden mengisi kuesioner NASA-TLX pada akhir shift. Setiap subskala dinilai pada skala 0-100 dengan interval 5. Prosedur *paired comparison* dilakukan secara terpisah untuk menghasilkan vektor bobot.

**Tahap 6 — Analisis Data & Triangulasi.** Korelasi silang dilakukan antara proporsi waktu aktivitas *productive* dengan skor subskala *Mental Demand* dan *Effort* menggunakan *Spearman Rank Correlation* (untuk data yang tidak berdistribusi normal). Hipotesis: semakin tinggi proporsi aktivitas *productive* yang bersifat kognitif (sortir alamat, verifikasi barcode, routing), semakin tinggi skor MD.

**Tahap 7 — Rekomendasi & Implementasi.** Formulasi rekomendasi berbasis *hierarchy of controls* (NIOSH): eliminasi (otomatisasi sortir dengan *conveyor belt* dan *barcode scanner* otomatis), substitusi (rotasi岗位 untuk mengurangi paparan monoton), rekayasa (desain ulang *workstation* dengan prinsip *anthropometry*), administrasi (penambahan *micro-break* 5 menit tiap 90 menit), dan PPE (sarung tangan anti-slip, sepatu safety).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus

Studi kasus diadaptasi dari Rafi & Putra (2024) pada hub Shopee Express di Pekanbaru dengan $n = 30$ operator sortir, berusia 22-45 tahun, masa kerja 6 bulan hingga 8 tahun, terdiri dari 18 laki-laki dan 12 perempuan. Work sampling dilakukan selama 5 hari kerja dengan total observasi terhitung sebagai berikut.

### 4.2. Perhitungan Ukuran Sampel Work Sampling

Parameter: $Z = 1,96$, $p = 0,50$, $e = 0,05$.

$$
n = \frac{(1,96)^2 \cdot 0,50 \cdot (1-0,50)}{(0,05)^2} = \frac{3,8416 \cdot 0,25}{0,0025} = \frac{0,9604}{0,0025} = 384,16 \approx 385 \text{ observasi}
$$

Karena jumlah operator adalah 30 orang dengan jam observasi 8 jam/hari × 5 hari, tersedia kapasitas observasi $30 \times 5 \times (8 \times 60/1,5) = 30 \times 5 \times 320 = 48.000$ *opportunity*, jauh di atas kebutuhan minimum. *Margin of error* aktual menjadi:

$$
e_{aktual} = 1,96 \sqrt{\frac{0,50 \cdot 0,50}{48.000}} = 1,96 \cdot 0,00228 = 0,00448 \approx 0,45\%
$$

### 4.3. Distribusi Aktivitas Hasil Work Sampling (Aditya & Putra,