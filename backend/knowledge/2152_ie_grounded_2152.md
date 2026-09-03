# 2152 — Analisis Beban Kerja Mental Operator Logistik E-Commerce menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal — Universitas Pendidikan Indonesia*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal — Universitas Pendidikan Indonesia*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada tahun 2025 (Bain & Company, 2021) telah menciptakan ledakan permintaan akan jasa *last-mile delivery*, di mana Shopee Express sebagai salah satu unit logistik dari ekosistem Shopee (di bawah naungan Sea Group) mempekerjakan ribuan mitra kurir (*partner employees*) yang tersebar di berbagai *hub* sortir regional. Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa karakteristik pekerjaan mitra Shopee Express bersifat unik: kombinasi antara *sorting*, *picking*, *packing*, *scanning*, dan interaksi langsung dengan pelanggan dalam jendela waktu *Service Level Agreement* (SLA) yang sangat ketat, seringkali di bawah 24 jam. Beban kognitif yang muncul dari multi-tasking, antisipasi keterlambatan, target pengiriman harian, dan risiko kesalahan *mis-sort* menciptakan kondisi di mana variabel *mental workload* menjadi determinan utama terhadap *human error*, keselamatan kerja, dan tingkat keausan psikologis (*burnout*) pekerja. Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat argumen ini dengan menunjukkan bahwa operator gudang (*warehouse operators*) yang mengalami beban mental berlebihan mengalami penurunan throughput hingga 18–27% dan peningkatan *mis-pick rate* yang berdampak langsung pada *return-on-logistics* (ROL).

Urgensi rekayasa dari penelitian Rafi & Putra (2024) terletak pada kebutuhan industri *e-commerce logistics* untuk memiliki instrumen kuantitatif yang mampu menerjemahkan persepsi subjektif kelelahan mental menjadi skor numerik yang bisa di-*benchmark*, dibandingkan antar-shift, dan digunakan sebagai *early-warning system* terhadap kelelahan kronis. Tanpa pengukuran beban mental yang valid, perusahaan logistik hanya mengandalkan *output metrics* (paket terkirim/hari) yang notabene *lagging indicators* — kelelahan baru terdeteksi setelah muncul *attrition*, kecelakaan kerja, atau komplain pelanggan yang melonjak. Dalam konteks *Human Factors and Ergonomics* (HFE), beban mental didefinisikan sebagai bagian dari kapasitas sumber daya kognitif yang sebenarnya digunakan untuk menyelesaikan tugas (*task demand*) pada suatu periode waktu, sehingga selisih antara kapasitas total dan beban aktual menjadi *spare mental capacity* (Wickens, 2008). Semakin kecil *spare capacity*, semakin tinggi risiko degradasi performa dan human error. Oleh karena itu, integrasi NASA-TLX dan Work Sampling yang dilakukan oleh Rafi & Putra (2024) dan Aditya & Putra (2024) menawarkan pendekatan holistik yang mengkuantifikasi baik dimensi subjektif beban mental maupun distribusi aktivitas fisik operator secara simultus, memungkinkan manajer operasional membuat keputusan alokasi SDM berbasis data.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konstruk Beban Kerja Mental dan Enam Dimensi NASA-TLX

NASA Task Load Index (NASA-TLX) adalah instrumen multidimensional yang dikembangkan oleh Hart & Staveland (1988) untuk mengukur *perceived workload* melalui enam subskala, yaitu: **(1) Mental Demand (MD)**, **(2) Physical Demand (PD)**, **(3) Temporal Demand (TD)**, **(4) Performance (P)**, **(5) Effort (E)**, dan **(6) Frustration (F)**. Setiap subskala dinilai menggunakan *Likert-type bipolar scale* dengan rentang 0–100 (skala *visual analog* bersegmentasi 20 titik). Keenam dimensi tersebut tidak berdiri sendiri, melainkan memiliki bobot relatif yang diperoleh dari prosedur *card-sorting pairwise comparison*.

### 2.2. Prosedur Pembobotan dan Skor Akhir NASA-TLX

Tahap *pairwise comparison* membandingkan keenam dimensi secara berpasangan, menghasilkan kombinasi sebanyak:

$$ \binom{6}{2} = \frac{6!}{2!(6-2)!} = 15 \text{ pasangan} $$

Setiap pasangan diberi skor 1 untuk dimensi yang dianggap lebih berkontribusi terhadap *workload* pada tugas spesifik, dan 0 untuk lawannya. Bobot ($w_i$) suatu subskala $i$ didefinisikan sebagai jumlah kemenangan dari 15 kemungkinan, sehingga:

$$ w_i = \sum_{j=1, j\neq i}^{6} \mathbb{1}\{i \succ j\}, \quad i \in \{MD, PD, TD, P, E, F\} $$

dengan $\mathbb{1}\{\cdot\}$ merupakan *indicator function*. Total bobot seluruh subskala memenuhi:

$$ \sum_{i=1}^{6} w_i = 15 $$

*Raw NASA-TLX Score* (skor rata-rata tanpa bobot) dihitung melalui:

$$ \overline{R} = \frac{1}{6} \sum_{i=1}^{6} R_i $$

Sementara *Weighted Workload Score* (WWL) atau *Adjusted NASA-TLX Score* dihitung melalui konvolusi skor dan bobot:

$$ \text{WWL} = \frac{\sum_{i=1}^{6} w_i \cdot R_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15} \sum_{i=1}^{6} w_i \cdot R_i $$

Nilai WWL berkisar 0–100 dan dikategorikan ke dalam tiga zona beban menurut rekomendasi Hart (2006): **Rendah** (0–20), **Sedang** (20–40), **Tinggi** (40–60), **Sangat Tinggi** (60–80), dan **Kritis** (80–100). Rafi & Putra (2024) menerapkan ambang batas **WWL ≥ 60** sebagai *trigger* intervensi ergonomi (rotasi tugas, *microbreak*, redistribusi paket).

### 2.3. Work Sampling dan Formula Ukuran Sampel

Work Sampling (WS) adalah teknik *work measurement* berbasis observasi sesaat (*instantaneous observation*) yang dikembangkan oleh Tippet (1935) untuk memproposikan proporsi waktu yang dihabiskan pada aktivitas tertentu tanpa *time study* kontinu. Ukuran sampel minimum untuk populasi tak hingga ditentukan oleh:

$$ n = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^{2}} $$

dengan $Z_{\alpha/2}$ adalah nilai kritis distribusi normal standar pada tingkat kepercayaan $(1-\alpha)$, $p$ adalah proporsi aktivitas yang diestimasi (default konservatif $p=0{,}5$), dan $e$ adalah *margin of error* absolut. Untuk populasi operator yang terbatas ($N$), koreksi *finite population* menghasilkan:

$$ n_{\text{adj}} = \frac{n}{1 + \dfrac{n-1}{N}} $$

Proporsi aktivitas $k$ dihitung dari frekuensi observasi:

$$ \hat{p}_k = \frac{f_k}{n}, \quad \text{dengan confidence interval } \hat{p}_k \pm Z_{\alpha/2}\sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{n}} $$

Aditya & Putra (2024) mengkombinasikan WS dan NASA-TLX melalui *concurrent triangulation* — proporsi waktu dari WS menjadi validator terhadap dimensi *Physical Demand* dan *Temporal Demand* NASA-TLX, meningkatkan *construct validity* hasil pengukuran.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX + Work Sampling mengikuti *Standard Operating Procedure* (SOP) tujuh tahapan berikut, sesuai protokol Rafi & Putra (2024) dan Aditya & Putra (2024):

**Tahap 1 — Penentuan Ruang Lingkup dan Stratifikasi.** Tentukan *unit analisis* (operator sortir/picker/kurir), stratum (shift pagi/siang/malam), dan *sampling frame*. Rekomendasikan minimal 30 operator per stratum untuk memenuhi *Central Limit Theorem*.

**Tahap 2 — Desain Instrumen.** Siapkan kuesioner NASA-TLX versi bilingual (Indonesia-Inggris) dengan 6 subskala *visual analog scale* dan 15 kartu *pairwise comparison*. Siapkan lembar observasi WS dengan daftar aktivitas *a-priori* (misal: *sorting*, *idle/waiting*, *walking*, *system check*, *break*).

**Tahap 3 — Pelatihan Observer dan Pilot Study.** Latih minimal 2 observer hingga *inter-rater reliability* Cohen's Kappa $\kappa \geq 0{,}80$. Pilot study 1–2 hari untuk kalibrasi.

**Tahap 4 — Pengumpulan Data NASA-TLX.** Setiap operator mengisi kuesioner pada akhir shift dengan instruksi terstandar. Lakukan *card-sorting* berpasangan.

**Tahap 5 — Pengumpulan Data Work Sampling.** Lakukan *round* observasi acak setiap 90–120 detik selama jam kerja (08.00–17.00). Total observasi $n$ sesuai rumus pada §2.3.

**Tahap 6 — Perhitungan dan Validasi Silang.** Hitung WWL dan proporsi $\hat{p}_k$. Validasi silang: korelasi Pearson $r$ antara $\hat{p}_{\text{walking+sorting}}$ dan subskala *Physical Demand* NASA-TLX harus $r \geq 0{,}50$.

**Tahap 7 — Rekomendasi Ergonomi.** Jika WWL ≥ 60 atau proporsi *idle* < 5%, rekomendasikan: redistribusi beban, penambahan *microbreak* 5 menit/jam, atau rotasi tugas.

Diagram alir logikanya: **Input (data primer) → Pairwise Comparison → Raw Rating → Weighted Score → Validasi WS → Keputusan Ergonomi → Output (intervensi)**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Industri (Simulasi Berdasarkan Rafi & Putra, 2024)

Misalkan sebuah *hub* sortir Shopee Express Jakarta mempekerjakan **N = 40 operator sortir** pada shift siang. Manajer ingin mengevaluasi beban mental melalui NASA-TLX dengan margin of error **e = 5%** dan confidence level **95%** ($Z = 1{,}96$). Dari pilot study, diasumsikan proporsi aktivitas padat (sorting) **p = 0,55**.

### 4.2. Perhitungan Ukuran Sampel NASA-TLX

$$ n = \frac{(1{,}96)^2 \cdot 0{,}55 \cdot (1-