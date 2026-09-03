# 2158 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Perbaikan Pesawat Terbang (MRO)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global menghadapi tantangan paradoksal yang semakin akut di era pasca-pandemi: di satu sisi, permintaan penumpang diproyeksikan mencapai 4,4 miliar pada 2024 dengan *revenue passenger kilometers* (RPK) mendekati level 2019; di sisi lain, margin operasional maskapai sangat tipis, dengan rata-rata *operating margin* global hanya 1,2% pada 2023 (IATA Annual Review). Dalam konteks ini, ketersediaan armada (*fleet availability*) bukan sekadar metrik teknis melainkan variabel strategis yang menentukan profitabilitas, kepuasan pelanggan, dan daya saing korporat. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa setiap jam *ground time* pesawat narrow-body seperti Boeing 737 atau Airbus A320 dapat menimbulkan *opportunity cost* antara USD 8.000 hingga USD 15.000 akibat pembatalan rute, kompensasi penumpang, dan repositioning. Oleh karena itu, optimalisasi siklus *check* pemeliharaan menjadi arena kompetisi efisiensi yang sangat bernilai ekonomis.

Pemeliharaan pesawat terbang diatur secara hierarkis melalui regulasi EASA Part-M / FAA Part 121, yang membedakan empat tingkat *check*: *A-Check* (rutin, ~50-70 jam, setiap 400-600 *flight hours*/FC), *B-Check* (lebih intensif, setiap 6-8 bulan), *C-Check* (mayor, setiap 20-24 bulan atau 4.500-6.000 FC, durasi 1-2 minggu), dan *D-Check* (full refurbishment/overhaul terbesar, setiap 6-12 tahun atau 25.000 FC, durasi 1-2 bulan). Kompleksitas ini membuat kebijakan pemeliharaan menjadi masalah optimasi multi-level dengan ratusan sub-tugas dan interdependensi logistik yang rumit (Zhou, 2024). Pendekatan *Reliability-Centered Maintenance* (RCM), yang awalnya dikembangkan oleh Nowlan dan Heap (1978) untuk industri penerbangan militer AS, kemudian diadopsi secara luas oleh FAA melalui Advisory Circular 121-22A, namun implementasinya dalam konteks MRO komersial menghadapi friksi: vendor MRO cenderung menggunakan *block maintenance* tradisional berbasis *manufacturer's recommended schedule*, bukan berbasis data reliabilitas real-time. Zhou (2024) mengidentifikasi jurang ini sebagai motivasi utama penelitiannya: membangun kerangka RCM yang secara eksplisit memodelkan degradasi non-linear sepanjang siklus hidup, mengakomodasi kebijakan *D-check* penuh yang diikuti *partial refurbishment* periodik selama *mature-run* operasi.

Signifikansi ekonomis dari optimalisasi ini sangat besar. Boeing Commercial Market Outlook 2024 memperkirakan pasar MRO global bernilai USD 113 miliar pada 2033. Setiap peningkatan 1% pada *fleet availability* untuk armada 200 pesawat dengan utilisasi 10 jam/hari setara dengan tambahan 73.000 jam terbang per tahun, atau revenue tambahan USD 580 juta dengan asumsi *yield* USD 8.000/jam. Konteks ini menjelaskan mengapa kebijakan pemeliharaan hirarkis berbasis keandalan menjadi topik kritis dalam *operations research* kontemporer (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis Zhou (2024) dibangun di atas tiga pilar: model reliabilitas Weibull untuk karakterisasi degradasi, fungsi ketersediaan asimptotik untuk evaluasi kebijakan, dan optimasi *availability-driven scheduling* untuk menentukan interval *check* optimal.

### 2.1 Model Reliabilitas dan Hazard Rate

Fungsi reliabilitas komponen/subsistem mengikuti distribusi Weibull dua parameter:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad t \geq 0$$

di mana $\beta > 0$ adalah *shape parameter* (bentuk kurva kegagalan) dan $\eta > 0$ adalah *scale parameter* (umur karakteristik). Ketika $\beta < 1$, sistem mengalami *infant mortality*; ketika $\beta = 1$, laju kegagalan konstan (distribusi eksponensial); ketika $\beta > 1$, terjadi *wear-out* dominan — pola khas untuk komponen struktural pesawat (Zhou, 2024). *Hazard rate* terkait adalah:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Fungsi Ketersediaan Hirarkis (A/B/C/D Policy)

Ketersediaan sesaat (*instantaneous availability*) untuk siklus $i$-th didefinisikan sebagai:

$$A_i = \frac{T_{op,i}}{T_{op,i} + T_{down,i}}$$

di mana $T_{op,i}$ adalah *Mean Time To Failure* (MTTF) efektif selama interval siklus, dan $T_{down,i}$ adalah total *downtime* terjadwalkan (untuk *check*) ditambah *unscheduled downtime* karena kegagalan. Untuk kebijakan *D-check* penuh di siklus ke-$k$, waktu *overhaul* ditetapkan $T_D$ (misal 720 jam atau ~30 hari), sementara *partial refurbishment* (intermediate *C-check*) memiliki downtime $T_C$ (misal 360 jam ~15 hari). Setelah *D-check*, reliabilitas direset ke kondisi $R(0)=1$, sehingga reliabilitas residual setelah interval $t$ post-overhaul mengikuti kembali Weibull dengan parameter identik.

### 2.3 Model Ketersediaan Average (Long-Run Availability)

Untuk satu *life-cycle* penuh dengan satu *D-check* penuh pada $t = T_{life}$ dan $n-1$ kali *partial refurbishment* pada interval $T_C$, ketersediaan jangka panjang (*steady-state availability*) dirumuskan Zhou (2024) sebagai:

$$A_{avg} = \frac{\sum_{i=1}^{n} T_{op,i}}{\sum_{i=1}^{n}(T_{op,i} + T_{down,i}) + T_D}$$

dengan kendala optimasi: $T_{op,i}$ tidak boleh melebihi *threshold* reliabilitas minimum $R(T_{op,i}) \geq R_{min}$, biasanya $R_{min} = 0{,}90$ atau $0{,}95$ sesuai standar *dispatch reliability*. Zhou (2024) membuktikan eksistensi *optimal value* $T_{op}^*$ yang memaksimalkan $A_{avg}$ melalui kondisi orde pertama:

$$\frac{dA_{avg}}{dT_{op}} = 0 \implies T_{op}^* = \arg\max_{T_{op}} \frac{T_{op} \cdot M(T_{op})}{T_{op} \cdot M(T_{op}) + C(T_{op})}$$

di mana $M(T_{op})$ adalah jumlah siklus yang difasilitasi oleh interval tersebut, dan $C(T_{op})$ adalah total downtime kumulatif.

### 2.4 Fungsi Biaya Siklus Hidup

Total *Life Cycle Cost* (LCC) untuk armada $N$ pesawat:

$$LCC = N \cdot \sum_{j=A,B,C,D} \left[ n_j \cdot (c_j^{labor} + c_j^{material}) + c_j^{penalty} \cdot E[N_j^{delay}] \right]$$

di mana $n_j$ adalah jumlah *check* tipe-$j$ per siklus hidup, $c_j^{labor}$ dan $c_j^{material}$ adalah biaya langsung, dan $c_j^{penalty} \cdot E[N_j^{delay}]$ adalah *delay penalty* akibat backlog hangar (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Zhou (2024) mengusulkan protokol implementasi tujuh tahap untuk *MRO policy framework* berbasis RCM hirarkis:

**Tahap 1 — Functional Failure Analysis (FFA).** Inventarisasi seluruh *Line Replaceable Units* (LRU) dan *Shop Replaceable Units* (SRU) yang menjadi cakupan *check*. Setiap item dikodekan dengan *Failure Mode, Effects, and Criticality Analysis* (FMECA) sesuai standar SAE J1739.

**Tahap 2 — Reliability Data Acquisition.** Pengumpulan data Time Between Failures (TBF) dari *Continuing Airworthiness Maintenance Organization Exposition* (CAMO) minimal 5 tahun historis, kemudian *parameter fitting* Weibull via Maximum Likelihood Estimation (MLE).

**Tahap 3 — Criticality Ranking.** Setiap item diberikan skor *Criticality Number* $CN = S \cdot P \cdot O \cdot D$, di mana $S$=severity, $P$=probability, $O$=occurrence, $D$=detection difficulty. Item dengan $CN > 50$ masuk kategori *critical* dan wajib masuk *A-Check*.

**Tahap 4 — Task Selection Matrix.** Pemilihan tipe tugas pemeliharaan: *Scheduled Restoration*, *Scheduled Discard*, *Failure Finding*, atau *On-Condition Monitoring* sesuai tabel RCM klasik (Nowlan & Heap).

**Tahap 5 — Interval Optimization.** Iterasi numerik menggunakan *availability objective function* dari Bagian 2.3 untuk menentukan $T_A, T_B, T_C, T_D$ optimal yang memaksimalkan $A_{avg}$ di bawah kendala kapasitas hangar.

**Tahap 6 — Implementation & Monitoring.** Pilot pada 10-15% armada selama 6 bulan, dengan *Key Performance Indicator* (KPI): *dispatch reliability*, *unscheduled removal rate*, *maintenance man-hours per flight hour*.

**Tahap 7 — Continuous Feedback Loop.** Pembaruan parameter Weibull setiap 12 bulan menggunakan *Bayesian updating*:

$$\eta_{new} = \frac{\eta_0 \cdot \sigma_{data}}{\sigma_{data} + \eta_0^2 / n_{new}}$$

Diagram alir logika: `Data Akuisisi → MLE Fitting → Reliability Threshold → Optimization Solver (Golden Section / Nelder-Mead) → Schedule Generation → ERP Integration (SAP PM / Maximo) → Feedback`. Standar acuan industri: SAE JA1011/1012 (RCM criteria), EASA Part-M, FAA AC 120-17A, MSG-3 (Maintenance Steering Group).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai regional dengan armada $N=20$ unit Airbus A320ceo, *average flight hours* per pesawat per tahun: 3.200 FC, beroperasi dari hub tunggal dengan kapasitas hangar 4 *bay* (kapasitas 2 pesawat simultaneously untuk *C-Check*, 1 untuk *D-Check*).

**Input Parameter (berdasarkan Zhou, 2024):**
- *A-Check*: interval awal $T_A^{(0)} = 500$ FC, durasi $T_{down,A} = 8$ jam
- *C-Check*: interval awal $T_C^{(0)} = 5.000$ FC, durasi $T_{down,C} = 360$ jam
- *D-Check*: interval $T_D = 25.000$ FC, durasi $T_{down,D} = 720$ jam
- Parameter Weibull untuk grup komponen kritis: $\beta = 2{,}8$, $\eta = 18.000$ FC
- *Reliability threshold*: $R_{min} = 0{,}90$

**Langkah 1: Tentukan interval $T_{op,C}$ optimal untuk *C-Check*.**

Selesaikan: $R(T_{op,C}) = e^{-(T_{op,C}/18000)^{2,8}} = 0{,}90$

$$(T_{op,C}/18000)^{2,8} = -\ln(0{,}90) = 0{,}1054$$

$$T_{op,C} = 18000 \cdot (0{,}1054)^{1/2,8} = 18000 \cdot 0{,}4363 \approx 7.853 \text{ FC}$$

Namun, interval C-Check juga harus integer divisor dari D-check: $n_C = T_D / T_{op,C} = 25.000 / 7.853 \approx 3{,}18$, dibulatkan ke $n_C = 3$, sehingga $T_{op,C}^{adjusted} = 25.000 / 3 = 8.333$ FC. Reliabilitas pada titik ini:

$$R(8.333) = e^{-(8.333/18.000)^{2,8}} = e^{-0,2025} = 0{,}8167$$

Karena $R < R_{min}$, kita perlu melakukan *partial refurbishment* ekstra (*B-Check* equivalent dengan downtime 60 jam) pada usia 4.166 FC (setengah interval). Reliabilitas residual:

$$R(4.166) = e^{-(4.166/18.000)^{2,8}} = e^{-0,00595} = 0{,}9941 \geq 0{,}90 \;\checkmark$$

**Langkah 2: Hitung ketersediaan rata-rata satu siklus hidup (25.000 FC).**

- Total downtime terjadwalkan: $n_C \cdot T_{down,C} + T_{down,D} = 3 \cdot 360 + 2 \cdot 60 + 720 =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
