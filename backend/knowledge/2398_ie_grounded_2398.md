# 2398 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global beroperasi di bawah rezim regulasi yang sangat ketat di mana ketersediaan (*availability*) armada pesawat bukan sekadar metrik operasional, melainkan merupakan variabel strategis yang menentukan profitabilitas maskapai, kepuasan pelanggan, dan keselamatan publik. Setiap jam terbang (*flight hour*) yang hilang akibat *grounding* pesawat karena perawatan yang tidak terjadwal akan menimbulkan *revenue loss* langsung yang berkisar antara USD 50.000 hingga USD 150.000 untuk pesawat narrow-body, dan dapat melebihi USD 300.000 untuk pesawat wide-body (Zhou, 2024). Dalam lanskap ini, Maintenance, Repair, and Overhaul (MRO) berfungsi sebagai tulang punggung ekosistem aviasi dengan pangsa pasar global yang diproyeksikan mencapai USD 116,7 miliar pada tahun 2030, di mana kebijakan pemeliharaan hirarkis A/B/C/D-check menjadi standar industri yang diakui oleh regulator FAA (Federal Aviation Regulations Part 121) dan EASA (European Union Aviation Safety Agency).

Hang Zhou (2024) dalam risetnya menegaskan bahwa *Reliability-Centered Maintenance* (RCM) telah memperoleh validitas empiris yang kuat sebagai kerangka kerja untuk mengkuantifikasi degradasi non-linear dari performa siklus-hidup (*life-cycle performance*) aset modal-intensif seperti pesawat terbang. Namun, tantangan substansial muncul ketika RCM diterapkan pada sistem kompleks dengan struktur pemeliharaan multi-level, seperti kebijakan A/B/C/D yang beroperasi secara simultan. Keunikan kontribusi Zhou adalah pengembangan model ketersediaan yang secara eksplisit mengintegrasikan siklus *full refurbishment* (D-check) bersamaan dengan *partial refurbishment* yang terjadi selama fase mature-run operasi pesawat. Pendekatan ini mengatasi keterbatasan model RCM konvensional yang cenderung memperlakukan setiap level pemeliharaan secara silo dan gagal menangkap interdependensi strategis antar-jadwal inspeksi.

Urgensi ekonomis dari optimalisasi kebijakan ini dapat dipahami melalui perspektif *total cost of ownership* (TCO). Sebuah pesawat narrow-body seperti Airbus A320 atau Boeing 737 menanggung biaya pemeliharaan kumulatif sepanjang siklus hidupnya yang dapat mencapai 40-50% dari biaya akuisisinya. Ketika jadwal D-check tidak dioptimalkan, perusahaan MRO menghadapi *shop visit* yang terlalu dini atau terlalu lambat, masing-masing menimbulkan *waste* modal dan risiko *unscheduled removal* komponen. Zhou (2024) menunjukkan bahwa penjadwalan berbasis *maximum available operation time* tidak hanya meningkatkan availabilitas armada tetapi juga menurunkan *inventory carrying cost* untuk *rotable components*, sehingga memberikan *value proposition* ganda bagi operator. Lebih jauh, di tengah disrupsi rantai pasok pascapandemi dan ketidakpastian geopolitik, optimalisasi kebijakan pemeliharaan menjadi semakin kritikal sebagai mekanisme *operational resilience*.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dikembangkan Zhou (2024) berakar pada teori keandalan klasik yang memodelkan degradasi komponen melalui distribusi probabilistik, dikombinasikan dengan optimisasi kombinatorial untuk penjadwalan multi-level. Asumsi fundamentalnya adalah bahwa tingkat kegagalan komponen mengikuti distribusi Weibull dengan parameter bentuk $\beta$ dan parameter skala $\eta$, sehingga fungsi keandalan $R(t)$ dinyatakan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $R(t)$ merepresentasikan probabilitas komponen beroperasi tanpa kegagalan hingga waktu $t$. Untuk komponen avionik kritis, nilai $\beta > 1$ mengindikasikan *wear-out failure* dominan, sementara $\beta < 1$ menandakan *infant mortality*.

### 2.1 Model Ketersediaan Hirarkis

Ketersediaan sesaat (*instantaneous availability*) pada waktu $t$ didefinisikan sebagai:

$$A(t) = \frac{MTBF}{MTBF + MTTR} = \frac{\mu}{\lambda(t) + \mu}$$

di mana $MTBF = \frac{1}{\lambda(t)}$ adalah *Mean Time Between Failure* dan $MTTR = \frac{1}{\mu}$ adalah *Mean Time To Repair*. Untuk struktur A/B/C/D, ketersediaan jangka panjang (*long-run availability*) dihitung dengan mempertimbangkan proporsi downtime pada setiap level inspeksi:

$$A_{LR} = \frac{\sum_{i \in \{A,B,C,D\}} w_i \cdot T_{op,i}}{\sum_{i \in \{A,B,C,D\}} w_i \cdot T_{op,i} + \sum_{i \in \{A,B,C,D\}} w_i \cdot T_{down,i}}$$

dengan $w_i$ menyatakan bobot frekuensi relatif dari masing-masing level inspeksi per satuan waktu, $T_{op,i}$ adalah durasi operasi produktif, dan $T_{down,i}$ adalah total downtime kumulatif.

### 2.2 Optimisasi Siklus D-Check

Zhou (2024) memformulasikan permasalahan optimisasi sebagai pencarian interval D-check optimal $T_D^*$ yang memaksimalkan ketersediaan agregat:

$$\max_{T_D} \quad A(T_D) = \frac{T_D - \mathbb{E}[T_{down}(T_D)]}{T_D}$$

dengan kendala $T_D \in [T_D^{min}, T_D^{max}]$ yang mencerminkan batas usia struktural pesawat (umumnya 6-12 tahun atau 8.000-12.000 flight cycle). Fungsi *expected downtime* $\mathbb{E}[T_{down}(T_D)]$ mencakup waktu inspeksi terjadwal plus waktu tunggu untuk *unscheduled removals*:

$$\mathbb{E}[T_{down}(T_D)] = T_{C-check} + N_{partial} \cdot T_{partial} + \sum_{j=1}^{n} t_{repair,j} \cdot P_j(T_D)$$

di mana $N_{partial}$ adalah jumlah *partial refurbishment* yang terjadi dalam satu siklus D-check, dan $t_{repair,j} \cdot P_j(T_D)$ adalah konvolusi antara durasi perbaikan dengan probabilitas kegagalan mode kegagalan tertentu. Zhou membuktikan secara analitis bahwa fungsi $A(T_D)$ memiliki nilai optimal $T_D^*$ yang unik melalui kondisi orde pertama:

$$\frac{dA(T_D)}{dT_D} = 0 \implies \mathbb{E}[T_{down}(T_D^*)] = T_D^* \cdot \frac{d\mathbb{E}[T_{down}]}{dT_D}$$

### 2.3 Pemodelan Degradasi Non-Linear

Zhou memperkenalkan formulasi degradasi non-linear yang menangkap *bathtub curve* karakteristik komponen avionik:

$$\lambda(t) = \lambda_0 + \alpha \cdot t^{\gamma} \quad \text{(fase mature-run)}$$

dengan $\alpha > 0$ dan $\gamma \in [1, 3]$ untuk merepresentasikan aksinasi laju kegagalan seiring bertambahnya usia siklus. Model ini menjadi dasar untuk menentukan kapan *partial refurbishment* optimal dilakukan, yaitu ketika *hazard rate* melewati ambang batas kritis $\lambda_{threshold}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti protokol rekayasa yang sistematis, sebagaimana distandarkan dalam MSG-3 (Maintenance Steering Group-3) oleh Aviation Maintenance Human Factors dan diadopsi secara luas oleh operator global. Prosedur operasional yang diturunkan dari framework Zhou (2024) mencakup delapan tahapan utama yang saling dependen.

**Tahap 1 — Segmentasi Armada dan Inventarisasi Aset.** Setiap unit pesawat di-*tag* dengan *unique identifier* (tail number MSN/Line Number) dan dimasukkan ke dalam *fleet management database* yang mencatat akumulasi flight hours, flight cycles, dan kalender waktu. Tahap ini menjadi prasyarat untuk *traceability* dan akuntabilitas kepatuhan regulasi.

**Tahap 2 — Analisis Fungsi dan Failure Mode (FMECA).** Tim rekayasa keandalan mengidentifikasi *failure modes* utama untuk setiap *line replaceable unit* (LRU) menggunakan Failure Mode, Effects, and Criticality Analysis (FMECA). Setiap failure mode dinilai berdasarkan *severity* (S), *occurrence* (O), dan *detectability* (D), menghasilkan *Risk Priority Number* (RPN):

$$RPN = S \times O \times D$$

Failure mode dengan RPN > threshold akan masuk dalam *critical item list* yang memerlukan interval inspeksi lebih ketat.

**Tahap 3 — Penjadwalan A/B/C/D-Check.** A-check dilakukan setiap 400-600 flight hours (atau 8-10 minggu) dengan durasi 24-50 *man-hours* dan biasanya dilakukan di *line maintenance station*. B-check yang mulai jarang dilakukan sebagai kategori terpisah (banyak maskapai menggabungkan ke A-check berkala) berlangsung setiap 6-8 bulan. C-check merupakan inspeksi mayor dengan durasi 1-2 minggu, dilakukan setiap 20-24 bulan, dengan cakupan inspeksi struktural dan *avionic bay* hingga *cabin refurbishment*. D-check adalah *heavy maintenance visit* penuh di mana pesawat hampir sepenuhnya dibongkar, dilakukan setiap 6-12 tahun dengan durasi 1-2 bulan dan ribuan *man-hours*.

**Tahap 4 — Penentuan Interval Optimal Menggunakan Model Zhou.** Interval $T_D^*$ dihitung dengan algoritma optimisasi berbasis *gradient descent* atau *dynamic programming* dengan state space $\{t, n_{partial}, R_{component}\}$. Output dari tahap ini adalah *master maintenance schedule* yang mengalokasikan pesawat ke hangar bay dengan kapasitas optimal.

**Tahap 5 — Eksekusi Pemeliharaan dan Perbaikan.** Prosedur ini mengikuti *Maintenance Manual* (AMM) dan *Structural Repair Manual* (SRM) yang diterbitkan oleh OEM (Original Equipment Manufacturer). Setiap *task card* harus ditandatangani oleh teknisi bersertifikat (B1/B2 license sesuai EASA Part-66) dan diinspeksi oleh *quality assurance inspector*.

**Tahap 6 — Uji Fungsi Pascapemeliharaan.** Setelah setiap kunjungan, pesawat menjalani *functional flight test* dan *ground run* untuk memverifikasi integrasi sistem. *Non-conformance* dicatat dalam *technical log* dan *corrective action* harus diselesaikan sebelum *return to service*.

**Tahap 7 — Analisis Data dan *Continuous Improvement*.** Data downtime, *unscheduled removals*, dan *reliability metrics* di-*feedback* ke *RCM decision diagram* untuk validasi atau revisi interval. Zhou (2024) menekankan bahwa proses ini bersifat iteratif dan harus memperhitungkan *lessons learned* dari *in-service events*.

**Tahap 8 — Dokumentasi dan Kepatuhan Regulasi.** Seluruh aktivitas pemeliharaan dicatat dalam *aircraft maintenance log* dan *back-up traceability record* yang wajib disimpan minimal selama 2 tahun setelah pesawat di-*decommission* sesuai regulasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi kerangka Zhou (2024), pertimbangkan sebuah studi kasus pada operator narrow-body dengan 10 unit Airbus A320neo. Parameter industri tipikal diasumsikan sebagai berikut:

**Tabel 1. Parameter Input Operasional**

| Parameter | Nilai | Satuan |
|---|---|---|
| Flight hours per siklus D-check ($T_D$) | 12.000 | jam terbang |
| Durasi C-check ($T_{C-check}$) | 360 | jam |
| Durasi D-check ($T_{D-check}$) | 1.440 | jam (60 hari) |
| Durasi partial refurbishment ($T_{partial}$) | 96 | jam |
| Jumlah partial refurbishment per D-check ($N_{partial}$) | 4 | event |
| MTBF komponen avionik kritis | 2.500 | jam |
| MTTR rata-rata | 12 | jam |
| $\beta$ (Weibull shape) | 2,5 | — |
| $\eta$ (Weibull scale) | 8.000 | jam |

**Langkah 1 — Perhitungan Keandalan Komponen pada Usia D-check.**

$$R(T_D) = e^{-\left(\frac{12.000}{8.000}\right)^{2,5}} = e^{-(1,5)^{2,5}} = e^{-2,756} = 0,0635$$

Artinya, pada saat pesawat mencapai interval D-check, hanya sekitar 6,35% populasi komponen avionik yang masih dalam kondisi original-equivalent. Nilai ini menjadi justifikasi kuantitatif mengapa D-check diperlukan sebagai *full refurbishment*.

**Langkah 2 — Perhitungan Expected