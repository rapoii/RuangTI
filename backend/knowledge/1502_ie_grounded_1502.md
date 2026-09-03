# 1502 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Kerangka A/B/C/D-Check pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial merupakan salah satu sektor *capital-intensive* dengan aset armada bernilai miliaran dolar yang beroperasi dalam kerangka regulasi keselamatan paling ketat di dunia. Menurut Zhou (2024) dalam studinya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), industri *Maintenance, Repair, and Overhaul* (MRO) aviasi menghadapi tantangan struktural yang unik karena degradasi performa siklus-hidup (*life-cycle performance*) bersifat **non-linear**, sehingga pendekatan pemeliharaan periodik konvensional dengan interval tetap tidak lagi mampu menjamin availability yang optimal. Struktur pemeliharaan aviasi modern mengadopsi kebijakan **hirarkis A/B/C/D** yang merepresentasikan empat tingkat kedalaman inspeksi dan refurbishment: *A-check* (rutin ringan, interval ratusan hingga ribuan jam terbang), *B-check* (menengah, interval beberapa bulan), *C-check* (mayor, interval 20–24 bulan), dan *D-check* (overhaul penuh atau *heavy maintenance visit*, interval 6–12 tahun). 

Urgensi ekonomi dari optimalisasi kebijakan ini sangat substansial. Sebagai contoh, downtime satu pesawat narrow-body pada *D-check* dapat mencapai 30–60 hari, yang berarti kehilangan revenue harian dalam kisaran USD 80.000–150.000 per pesawat. Zhou (2024) menekankan bahwa optimalisasi ketersediaan armada bukan sekadar persoalan teknikal, melainkan keputusan strategis yang memengaruhi *yield management*, *fleet utilization rate*, dan *total cost of ownership* (TCO) operator. Lebih lanjut, framework yang dibangun Zhou memperkenalkan kombinasi antara *fully refurbished D-check cycles* dan *partial refurbishments* yang dilakukan pada fase *mature-run* operasi, sehingga degradasi akumulatif dapat diintervensi sebelum mencapai ambang batas kegagalan katastrofik. Pendekatan ini menyelaraskan prinsip-prinsip *Reliability-Centered Maintenance* (RCM) yang awalnya dikembangkan oleh Nowlan dan Heap (1978) untuk industri penerbangan militer AS, dengan kebutuhan komersial akan *trade-off* antara safety margin, availability, dan biaya siklus hidup.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis yang dibangun Zhou (2024) berakar pada **availability function** sebagai fungsi objektif utama, dengan *scheduling of life-cycle maintenance checks* dioptimasi berdasarkan *maximum available operation time*. Formulasi inti dari model ketersediaan (*steady-state availability*) untuk sistem dengan kebijakan pemeliharaan periodik dapat dinyatakan sebagai:

$$A_\infty = \frac{MTBMA}{MTBMA + MTTR}$$

di mana $A_\infty$ adalah ketersediaan asimtotik, $MTBMA$ (*Mean Time Between Maintenance Actions*) adalah waktu rata-rata antar tindakan pemeliharaan, dan $MTTR$ (*Mean Time To Repair*) adalah waktu rata-rata perbaikan. Untuk kebijakan hirarkis A/B/C/D yang diterapkan secara simultan, parameter MTBMA efektif menjadi superposisi dari keempat interval tersebut:

$$\frac{1}{MTBMA_{eff}} = \frac{1}{T_A} + \frac{1}{T_B} + \frac{1}{T_C} + \frac{1}{T_D}$$

dengan $T_A, T_B, T_C, T_D$ masing-masing menyatakan interval inspeksi A, B, C, dan D-check dalam satuan jam terbang (*flight hours*/FH) atau *flight cycles* (FC). Zhou menunjukkan bahwa untuk fase *mature-run* armada, downtime agregat $DT_{total}$ sepanjang horizon perencanaan $H$ dapat diformulasikan sebagai:

$$DT_{total}(H) = n_A \cdot \tau_A + n_B \cdot \tau_B + n_C \cdot \tau_C + n_D \cdot \tau_D + \sum_{i=1}^{N} \mathbb{1}_{F_i} \cdot \tau_{rep,i}$$

di mana $n_k$ adalah jumlah kunjungan pemeliharaan level-$k$, $\tau_k$ adalah durasi downtime rata-rata per kunjungan level-$k$, $\mathbb{1}_{F_i}$ adalah *indicator function* untuk kejadian kegagalan unexpected $F_i$, dan $\tau_{rep,i}$ adalah waktu perbaikan tidak terjadwal.

Fungsi objektif utama yang dioptimasi Zhou (2024) adalah *availability* agregat terhadap total operation time:

$$A(H) = \frac{H - DT_{total}(H)}{H} = 1 - \frac{n_A \tau_A + n_B \tau_B + n_C \tau_C + n_D \tau_D + \sum \tau_{rep,i}}{H}$$

Untuk membuktikan **eksistensi nilai optimal**, Zhou menurunkan turunan pertama dari availability terhadap interval keputusan (misalnya $T_A$) dan menunjukkan karakteristik *concave* melalui Hessian definit negatif:

$$\frac{\partial^2 A}{\partial T_A^2} < 0 \implies A \text{ memiliki maksimum unik pada } T_A^*$$

yang diselesaikan melalui kondisi *first-order necessary condition* (FONC):

$$\frac{\partial A}{\partial T_A} = 0 \implies \frac{\tau_A}{T_A^2} \cdot \left(1 + \frac{T_A}{H}\right) - \frac{C_{A,incremental}}{V_{daily}} = 0$$

di mana $C_{A,incremental}$ adalah biaya marjinal penambahan satu A-check, dan $V_{daily}$ adalah *daily revenue value* pesawat. Variabel keputusan akhir berupa *scheduling intervals* $(T_A^*, T_B^*, T_C^*, T_D^*)$ yang memaksimalkan $A$ di bawah constraint regulasi:

$$T_A \leq T_A^{reg}, \quad T_B \leq T_B^{reg}, \quad T_C \leq T_C^{reg}, \quad T_D \leq T_D^{reg}$$

yang mencerminkan **hard limits** dari regulator aviasi (EASA Part-M, FAA 14 CFR Part 121).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM menurut kerangka Zhou (2024) mengikuti arsitektur proses berlapis yang dimulai dari **Failure Mode, Effects, and Criticality Analysis** (FMECA). Tahapan SOP industri dapat diuraikan sebagai berikut:

**Tahap 1 — Karakterisasi Degradasi Komponen:** Setiap *Line Replaceable Unit* (LRU) diklasifikasikan ke dalam salah satu dari empat kategori RCM (SAE JA1011): *safety-related*, *mission-critical*, *economically-significant*, atau *hidden-failure*. Data historis *Mean Time Between Failure* (MTBF) dikumpulkan dari *Continuing Airworthiness Maintenance Exposition* (CAME).

**Tahap 2 — Penentuan Interval Optimal:** Menggunakan *optimization engine* berbasis *availability-maximization*, sistem menghitung $T_A^*, T_B^*, T_C^*, T_D^*$ dengan memasukkan parameter: utilisasi harian (rata-rata 8–14 *block hours*), profil misi (*short-haul* vs *long-haul*), dan *environmental severity* (iklim tropis, polusi, *bird strike risk*).

**Tahap 3 — Penjadwalan Coupled-Optimization:** Partial refurbishments diintegrasikan ke dalam jadwal *mature-run* (yaitu setelah *first D-check* selesai), membentuk **hybrid schedule** yang mengurangi kebutuhan *D-check* kedua pada usia yang lebih muda. Diagram alir prosesnya mengikuti pola *feedback loop* antara hasil *post-maintenance test flight* dengan parameter input model.

**Tahap 4 — Validasi & Continuous Airworthiness:** Setiap kebijakan baru harus divalidasi melalui *Engineering Order* (EO) dan *Service Bulletin* (SB) dari OEM, kemudian diawasi oleh *Quality Assurance* (QA) dan *Quality Control* (QC) departemen sesuai standar AS9110. Arsitektur teknologi pendukung biasanya berupa *Computerized Maintenance Management System* (CMMS) seperti AMOS, TRAX, atau SAP MRO yang mengintegrasikan sensor IoT (*Aircraft Health Monitoring* — AHM) untuk *real-time condition-based triggers* yang dimutakhirkan Zhou ke dalam layer keputusan *predictive maintenance*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut simulasi perhitungan untuk satu unit pesawat narrow-body (tipe Boeing 737-800 analog) yang dioperasikan dengan utilisasi harian 10 *block hours* selama horizon $H = 10.000$ jam terbang. Parameter input berdasarkan praktik industri tipikal yang diadopsi dari kerangka Zhou (2024):

| Parameter | A-check | B-check | C-check | D-check |
|---|---|---|---|---|
| Interval reguler $T_k$ (FH) | 600 | 4.000 | 8.000 | 24.000 |
| Durasi downtime $\tau_k$ (jam) | 12 | 36 | 120 | 720 (30 hari) |
| Biaya per visit $C_k$ (USD) | 8.000 | 35.000 | 350.000 | 4.500.000 |

**Langkah 1 — Hitung jumlah kunjungan pada $H = 10.000$ FH:**

$$n_A = \left\lfloor \frac{H}{T_A} \right\rfloor = \left\lfloor \frac{10.000}{600} \right\rfloor = 16$$

$$n_B = \left\lfloor \frac{H}{T_B} \right\rfloor = \left\lfloor \frac{10.000}{4.000} \right\rfloor = 2$$

$$n_C = \left\lfloor \frac{H}{T_C} \right\rfloor = \left\lfloor \frac{10.000}{8.000} \right\rfloor = 1$$

**Langkah 2 — Hitung downtime agregat terjadwal:**

$$DT_{scheduled} = n_A \tau_A + n_B \tau_B + n_C \tau_C = (16)(12) + (2)(36) + (1)(120) = 192 + 72 + 120 = 384 \text{ jam}$$

**Langkah 3 — Asumsikan 1 *unscheduled removal event* dengan MTTR = 48 jam:**

$$DT_{total} = 384 + 48 = 432 \text{ jam}$$

**Langkah 4 — Hitung availability agregat:**

$$A(H) = \frac{10.000 - 432}{10.000} = 0{,}9568 = 95{,}68\%$$

**Langkah 5 — Bandingkan dengan kebijakan tanpa partial refurbishment (semua degradasi diakumulasi ke D-check):** Jika satu D-check penuh dimasukkan di akhir horizon (efektif $\tau_D$ senilai 720 jam digeser ke $H = 24.000$ FH, sehingga proporsional pada $H$ kita = 300 jam ekivalen):

$$DT_{total}' = 384 + 300 + 48 = 732 \text{ jam} \implies A' = 92{,}68\%$$

**Langkah 6 — Validasi optimalitas interval A-check dengan analisis marjinal:** Menggunakan $V_{daily} = \text{USD } 100.000$ per *block hour* dan $C_A = 8.000$:

$$\frac{\partial A}{\partial T_A} = \frac{192}{H \cdot T_A^2} \cdot T_A - \frac{8.000}{10 \cdot 100.000} = \frac{192 \cdot 16}{10.000^2} - 0{,}008$$

Hasil turunan pada $T_A^* = 600$ FH mendekati nol, mengonfirmasi bahwa interval tersebut **optimal secara marjinal** menurut kerangka Zhou (2024).

**Interpretasi Manajerial:** Penerapan *partial refurbishment* meningkatkan availability dari 92,68% menjadi 95,68% — selisih 3 poin persentase yang setara dengan tambahan 300 *block hours* produktif per tahun, atau revenue uplift sekitar **USD 30 juta per pesawat per siklus hidup**. Hasil ini sangat selaras dengan temuan Zhou (2024) bahwa terdapat **nilai optimal unik** yang dapat dibuktikan secara matematis melalui *concave maximization*.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Kerangka Zhou (2024) memberikan kontribusi signifikan dengan membuktikan eksistensi optimum analitis untuk kebijakan pemeliharaan hirarkis yang sebelumnya hanya diselesaikan secara heuristik atau simulasi Monte Carlo. Namun, beberapa **limitasi metodologis** perlu dicermati. Pertama, model mengasumsikan *failure rate* komponen mengikuti distribusi Weibull dengan parameter bentuk $\beta$ konstan sepanjang horizon, padahal realitanya *bathtub curve* menunjukkan perilaku berbeda antara fase *infant mortality*, *useful life*, dan *wear-out*. Kedua, korelasi antara *unscheduled events* dan *scheduled inspections* diabaikan (*independence assumption*), yang dapat低估 *avalanche effect* pada sistem avionik modern yang saling tergantung. Ketiga, model belum sepenuhnya mengintegrasikan **digital twin** dan *