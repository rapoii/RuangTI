# 2478 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimumkan Ketersediaan Armada: Kajian pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan merupakan salah satu sektor paling padat-modal (*capital-intensive*) di mana ketersediaan (*availability*) pesawat terbang bukan sekadar metrik operasional melainkan determinan langsung dari profitabilitas maskapai. Setiap jam pesawat *grounded* akibat inspeksi atau perbaikan yang tidak optimal berpotensi merugi jutaan dolar AS, terutama pada armada *narrow-body* dan *wide-body* modern yang memiliki jadwal rotasi harian ketat. Hang Zhou (2024) dalam studinya di jurnal *peer-reviewed* yang diindeks pada SSRN (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyoroti bahwa meskipun Reliability-Centered Maintenance (RCM) telah lama diakui sebagai kerangka kerja superior untuk mengelola aset berat karena kemampuannya mengkuantifikasi degradasi non-linier kinerja siklus hidup, implementasinya pada sistem sekompleks kebijakan hierarkis **A/B/C/D-check** dalam sektor MRO penerbangan masih menjadi tantangan metodologis yang signifikan.

Konteks operasional yang melatarbelakangi riset ini adalah kenyataan bahwa maskapai penerbangan global mengoperasikan armada dengan siklus pemeliharaan bertingkat (A, B, C, dan D-check) yang masing-masing memiliki cakupan, durasi *downtime*, dan biaya yang berbeda secara eksponensial. A-check dilakukan setiap 400–600 jam terbang dengan inspeksi umum berbiaya rendah; B-check dilakukan setiap 6–8 bulan; C-check merupakan inspeksi mayor setiap 20–24 bulan; sedangkan D-check merupakan *heavy maintenance visit* berupa *teardown* lengkap dan *refurbishment* total yang dilaksanakan setiap 6–10 tahun dengan downtime 1–2 bulan (Hang Zhou, 2024). Kompleksitas调度 (*scheduling*) keempat tingkatan ini secara simultan untuk memaksimalkan *fleet availability* menjadi permasalahan optimasi kombinatorial non-trivial, terlebih karena degradasi komponen pesawat mengikuti pola non-linier (cekungan-Weibull) yang sulit dimodelkan dengan kebijakan berbasis waktu deterministik.

Urgensi ekonomis dari riset ini dapat dikuantifikasi: dengan asumsi sebuah *wide-body*窄 menghasilkan pendapatan ~$80.000 per jam terbang dan biaya D-check tunggal mencapai $3–5 juta, peningkatan ketersediaan armada sebesar 1–2% melalui optimalisasi hierarkis dapat meningkatkan pendapatan tahunan ratusan juta dolar bagi maskapai besar. Lebih lanjut, regulator penerbangan sipil seperti FAA (14 CFR Part 121) dan EASA (EU 1321/2014) mensyaratkan kepatuhan ketat pada interval pemeliharaan, sehingga kebijakan RCM yang optimal harus menyeimbangkan antara约束 regulasi, ketersediaaan armada, dan total biaya siklus hidup. Studi Zhou (2024) menjawab kebutuhan ini dengan memperkenalkan kerangka kerja kebijakan MRO yang menggabungkan siklus D-check penuh yang telah direfurbishment dengan *partial refurbishment* selama fase *mature-run* operasi, di mana penjadwalan check dimodelkan sebagai masalah optimasi ketersediaan maksimum dengan keberadaan solusi optimal yang dibuktikan secara matematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Keandalan Non-Linier

Landasan teoritis utama yang digunakan Zhou (2024) adalah pemodelan degradasi komponen kritis pesawat menggunakan distribusi Weibull dengan parameter bentuk $\beta \neq 1$ untuk menangkap perilaku non-linier. Fungsi keandalan suatu subsistem pesawat pada umur $t$ didefinisikan sebagai:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan laju kegagalan (*hazard rate*) sesaat:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

di mana $\eta > 0$ adalah *scale parameter* (jam terbang atau siklus kalender) dan $\beta > 0$ adalah *shape parameter*. Untuk komponen авиационных двигателей (mesin turbofan), empiris menunjukkan $\beta > 1$ menandakan *wear-out failure*, sedangkan untuk avionik digital $\beta < 1$ menunjukkan *infant mortality*. Pemodelan dua fase ini esensial karena kebijakan A/B/C/D-check harus mengakomodasi kedua rezim degradasi tersebut secara simultan.

### 2.2 Formulasi Ketersediaan Hirarkis

Ketersediaan sesaat (*instantaneous availability*) sistem armada didefinisikan sebagai probabilitas pesawat siap operasi pada waktu $t$:

$$A(t) = \frac{\mu}{\lambda(t) + \mu}$$

dengan $\mu$ adalah laju perbaikan (perbaikan per satuan waktu). Untuk analisis jangka panjang, *steady-state availability* dalam satu siklus D-check penuh diberikan oleh:

$$\bar{A}_D = \frac{\sum_{i \in \{A,B,C\}} n_i \cdot T_i}{\sum_{i \in \{A,B,C\}} n_i \cdot (T_i + \bar{d}_i) + (T_D + \bar{d}_D)}$$

dengan:
- $T_i$ = interval antar-check tingkat $i$ (untuk $i \in \{A,B,C,D\}$)
- $n_i$ = jumlah check tingkat $i$ dalam satu siklus D-check penuh
- $\bar{d}_i$ = rata-rata *downtime* akibat check tingkat $i$

### 2.3 Masalah Optimasi

Zhou (2024) merumuskan masalah optimasi sebagai pencarian interval check optimal $\mathbf{T}^* = \{T_A^*, T_B^*, T_C^*, T_D^*\}$ yang memaksimumkan ketersediaan dengan kendala biaya total siklus hidup dan kepatuhan regulasi:

$$\max_{\mathbf{T}} \quad \bar{A}_D(\mathbf{T})$$

$$\text{s.t.} \quad C_{total}(\mathbf{T}) = \sum_{i} n_i \cdot c_i + c_d \sum_i n_i \bar{d}_i \leq C_{budget}$$

$$T_{i,min} \leq T_i \leq T_{i,max} \quad \forall i \in \{A,B,C,D\}$$

$$R(T_i) \geq R_{threshold} \quad \text{(kendala keandalan minimum)}$$

di mana $c_i$ adalah biaya per check tingkat $i$, $c_d$ adalah biaya *opportunity cost* per jam *downtime*, dan $R_{threshold}$ adalah batas keandalan yang dapat diterima regulator (umumnya $\geq 0{,}95$ untuk komponen struktural kritis).

### 2.4 Bukti Eksistensi Solusi Optimal

Kontribusi teoretis penting dari Zhou (2024) adalah pembuktian eksistensi nilai optimal melalui teorema titik tetap Banach dan sifat kontinuitas fungsi tujuan pada domain kompak $\mathcal{T} = \prod_{i}[T_{i,min}, T_{i,max}]$. Karena $\bar{A}_D$ adalah fungsi kontinu terhadap $\mathbf{T}$ dan domainnya kompak serta konveks, maka menurut Teorema Weierstrass, setidaknya satu maksimum global pasti ada, sehingga prosedur optimasi (misalnya *sequential quadratic programming* atau algoritma genetika untuk kasus multi-modal) akan konvergen.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti SOP 7-tahap yang distandardisasi sesuai dengan SAE JA1011/1012 dan diadaptasi oleh Zhou (2024) untuk konteks MRO penerbangan:

**Tahap 1 — Karakterisasi Sistem & Segmentasi Armada.** Inventarisasi seluruh komponen pesawat ke dalam *Significant Items* (SI) berdasarkan analisis FMECA (*Failure Modes, Effects, and Criticality Analysis*). Setiap SI diberi kode identifikasi, threshold degradasi, dan rattachement ke tingkat check yang relevan (A, B, C, atau D).

**Tahap 2 — Analisis Moda Kegagalan.** Identifikasi semua moda kegagalan potensial untuk setiap SI, termasuk *evident failure* (terdeteksi langsung oleh pilot), *hidden failure* (terdeteksi hanya saat inspeksi), serta *safety*, *operational*, *economic*, dan *environmental* consequences sesuai matriks Moubray.

**Tahap 3 — Seleksi Tugas Pemeliharaan RCM.** Untuk setiap moda kegagalan, dipilih satu atau lebih dari delapan tugas RCM standar: *on-condition task*, *restoration task*, *discard task*, *failure-finding task*, *combination task*, dsb. Keputusan ini mengikuti *decision logic tree* Moubray (1997).

**Tahap 4 — Penentuan Interval Check Awal.** Berdasarkan rekomendasi OEM (*Original Equipment Manufacturer*), regulator, dan data historis operator, ditetapkan interval awal $T_{i,0}$ untuk setiap tingkat.

**Tahap 5 — Pemodelan Degradasi & Simulasi Monte Carlo.** Menggunakan data telemetri *real-time* dari *Aircraft Health Monitoring* (AHM) dan *Engine Health Monitoring* (EHM), dilakukan simulasi Monte Carlo dengan $N \geq 10^5$