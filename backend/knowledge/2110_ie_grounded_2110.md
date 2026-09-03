# 2110 — Optimisasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global menghadapi tantangan operasional yang sangat berat dalam menyeimbangkan dua tujuan yang saling bertentangan: **meminimalkan downtime pesawat** untuk menjaga profitabilitas maskapai, dan **memastikan keselamatan terbang** melalui inspeksi ketat sesuai regulasi. Hang Zhou (2024) dalam karyanya yang diterbitkan pada jurnal *peer-reviewed* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menyoroti bahwa pendekatan *Reliability-Centred Maintenance* (RCM) menjadi kerangka kerja yang sangat bernilai dalam industri padat aset seperti aviasi, karena kemampuannya mengkuantifikasi degradasi non-linier dari kinerja siklus-hidup dan mengoptimalkan operasi dengan tetap meningkatkan keselamatan dan ketersediaan. Zhou menekankan bahwa "despite its benefits, RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector" — sebuah pernyataan yang menjadi motivasi utama penelitiannya.

Dalam praktik MRO aviasi, kebijakan pemeriksaan pesawat mengikuti hirarki A-Check (ringan, ~400–600 flight hours), B-Check (menengah, 6–8 bulan), C-Check (berat, 20–24 bulan), hingga D-Check (overhaul penuh, 6–12 tahun). Setiap level memiliki karakteristik biaya, durasi, dan cakupan komponen yang berbeda. Artikel Zhou (2024) memperkenalkan kerangka kebijakan MRO yang menggabungkan siklus D-Check yang sepenuhnya direfurbishment dengan refurbishment sebagian selama fase *mature-run* operasi penerbangan, sehingga ketersediaan armada (*fleet availability*) dapat dimaksimumkan. Urgensi ekonomi dari studi ini sangat jelas: satu pesawat narrow-body yang grounded selama D-Check konvensional dapat menimbulkan kerugian pendapatan hingga USD 100.000–150.000 per hari, sehingga penjadwalan siklus yang optimal menjadi keputusan strategis bernilai miliaran dolar bagi operator armada besar. Lebih lanjut, versi komplementer dari studi ini dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) menyajikan elaborasi metodologis yang memperkuat argumentasi bahwa ketersediaan (*availability*) bukan sekadar parameter rata-rata, melainkan fungsi non-linier yang memerlukan eksistensi nilai optimum yang harus dibuktikan secara analitis.

Kontribusi orisinal Zhou (2024) adalah menunjukkan bahwa model ketersediaan memiliki **nilai optimal yang eksis**, yang selanjutnya menjadi dasar penjadwalan berbasis *maximum available operation time*. Pendekatan ini menjadi terobosan karena literatur konvensional sering terjebak pada asumsi stasioner yang gagal menangkap efek *wear-in* dan *wear-out* pada komponen pesawat.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dibangun Zhou (2024) berakar pada teori pembaruan (*renewal reward theorem*) dan pemodelan keandalan non-linier. Formulasi inti mendefinisikan **availability sesaat** (*point availability*) sebagai probabilitas sistem berada dalam kondisi operable pada waktu $t$:

$$A(t) = \frac{\mu_{U}}{\mu_{U} + \mu_{D}}$$

dengan $\mu_{U}$ adalah *mean up-time* (waktu operasi rata-rata antar kegagalan) dan $\mu_{D}$ adalah *mean down-time* (waktu rata-rata untuk inspeksi, perbaikan, dan overhaul). Namun, model Zhou melangkah lebih jauh dengan mendefinisikan **availability jangka panjang dalam horizon siklus hidup** sebagai:

$$A_{\text{cycle}} = \frac{\sum_{i=1}^{n} T_{\text{op},i}}{\sum_{i=1}^{n} T_{\text{op},i} + \sum_{j=1}^{m} T_{\text{MRO},j}}$$

di mana $T_{\text{op},i}$ adalah durasi operasi ke-$i$ dan $T_{\text{MRO},j}$ adalah durasi intervensi MRO ke-$j$. Untuk degradasi komponen pesawat, Zhou mengadopsi distribusi Weibull yang merepresentasikan laju kegagalan $\lambda(t)$:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\beta > 1$ untuk fase *wear-out*, $\eta$ sebagai *scale parameter*, dan $t$ sebagai waktu kumulatif operasi. Fungsi keandalan yang terkait adalah:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

Kebijakan hirarkis A/B/C/D dimodelkan sebagai **proses keputusan multi-level** dengan variabel keputusan $\mathbf{x} = (T_A, T_B, T_C, T_D, T_{\text{PR}})$ yang masing-masing merepresentasikan interval antar-A-Check, antar-B-Check, antar-C-Check, antar-D-Check, dan interval *partial refurbishment* (PR) selama fase mature-run. Fungsi tujuan adalah:

$$\max_{\mathbf{x} \in \mathcal{F}} \; A_{\text{fleet}}(\mathbf{x}) = \frac{T_{\text{total}}^{\text{flight}} - \sum T_{\text{MRO}}}{T_{\text{total}}^{\text{flight}}}$$

Zhou (2024) membuktikan secara matematis bahwa fungsi $A_{\text{fleet}}(\mathbf{x})$ adalah **quasi-concave** pada domain $\mathcal{F}$ yang *feasible*, sehingga nilai optimum global eksis. Bukti eksistensi dilakukan melalui:

$$\frac{\partial^2 A_{\text{fleet}}}{\partial T_D^2} \leq 0 \quad \forall \, T_D \in [T_D^{\min}, T_D^{\max}]$$

yang menandakan *concavity* parsial terhadap interval D-Check, sehingga kondisi orde-satu Kuhn-Tucker cukup untuk optimalitas global.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hirarkis berbasis RCM mengikuti arsitektur SOP 7-langkah yang dapat distandardisasi:

**Langkah 1 — Segmentasi Hierarki Inspeksi.** Pesawat diklasifikasikan ke dalam empat tingkat inspeksi dengan cakupan dan *man-hour* spesifik: A-Check (visual, fluid check, ~50 man-hours), B-Check (A-Check + inspeksi sistem operasional, ~160 man-hours), C-Check (cek sistem struktural dan avionik mendetail, ~6.000 man-hours), D-Check (pembongkaran penuh, inspeksi struktur, refurbishment total, ~30.000–50.000 man-hours).

**Langkah 2 — Pengumpulan Data Degradasi.** Data *hard-time*, *on-condition*, dan *failure-finding* dikumpulkan dari *Airworthiness Directives* (AD), *Service Difficulty Reports* (SDR), dan *Maintenance Steering Group-3rd Task Force* (MSG-3) yang menjadi standar industri.

**Langkah 3 — Penentuan Interval Optimal.** Menggunakan persamaan di Bagian 2, software optimasi (misal MATLAB, Python SciPy) menghitung nilai $T_A^*, T_B^*, T_C^*, T_D^*$ yang memaksimalkan $A_{\text{fleet}}$.

**Langkah 4 — Penjadwalan Partial Refurbishment.** Selama *mature-run* (yaitu, antara dua D-Check), dijadwalkan *partial refurbishment* dengan frekuensi $T_{\text{PR}}$ yang memastikan tingkat degradasi tidak melampaui ambang kritis.

**Langkah 5 — Penjadwalan Hangar & Sumber Daya.** Alokasi hangar, teknisi bersertifikat (A&P/IA), dan *rotables* dipastikan tidak terjadi konflik.

**Langkah 6 — Eksekusi dengan Dokumentasi Logbook.** Setiap intervensi dicatat dalam *aircraft technical log* sesuai regulasi Part-121 (FAA) atau Part-CAMO (EASA).

**Langkah 7 — Audit & Pemutakhiran Model.** Data hasil aktual di-*feedback* untuk memperbarui parameter $\eta$ dan $\beta$ agar model adaptif terhadap kondisi operasional.

Diagram alir proses mengikuti loop *Plan-Do-Check-Act* (PDCA) Deming yang terintegrasi dengan siklus audit keselamatan SMS (*Safety Management System*) ICAO Annex 19.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai dengan armada 10 unit Boeing 737-800 ingin menentukan interval D-Check optimal dan frekuensi *partial refurbishment*. Asumsi parameter industri:

- Mean flight hours per year: $T_{\text{annual}} = 3.000$ jam
- Durasi D-Check konvensional: $T_D = 60$ hari
- Durasi partial refurbishment: $T_{\text{PR}} = 10$ hari
- Biaya D-Check per pesawat: $C_D = \text{USD } 4.000.000$
- Biaya partial refurbishment: $C_{\text{PR}} = \text{USD } 600.000$
- Parameter Weibull komponen struktural: $\beta = 2{,}5$, $\eta = 38.000$ jam
- *Mean up-time* pasca-PR: $\mu_U^{\text{PR}} = 9.000$ jam; tanpa PR: $\mu_U^{0} = 6.500$ jam

**Langkah 1: Hitung Availability Baseline (tanpa PR).** Dengan satu D-Check per siklus 12 tahun dan tidak ada partial refurbishment:

$$A_{\text{baseline}} = \frac{12 \times 3.000 \times 10}{(12 \times 3.000 \times 10) + (60 \times 10)} = \frac{360.000}{360.000 + 600} = 0{,}99833$$

**Langkah 2: Skenario dengan 2 Partial Refurbishment per siklus (setiap 4 tahun).**

Total down-time menjadi $60 + 2 \times 10 = 80$ hari per siklus 12 tahun untuk 10 pesawat.

$$A_{\text{dengan PR}} = \frac{360.000}{360.000 + 800} = 0{,}99778$$

**Langkah 3: Hitung Ekpektasi Kerugian Down-time dan Selisih Pendapatan.**

Pendapatan harian satu pesawat窄-body: $\text{USD } 120.000$. Selisih down-time: $800 - 600 = 200$ hari. Tambahan pendapatan dari availability lebih tinggi:

$$\Delta R = 200 \times \text{USD }120.000 \times 10 = \text{USD }240.000.000 \text{ per siklus}$$

Namun, biaya PR tambahan:

$$\Delta C = 2 \times 10 \times \text{USD }600.000 = \text{USD }12.000.000$$

**Langkah 4: Optimasi Marginal.** Dengan $\beta = 2{,}5$, laju kegagalan saat $t = 30.000$ jam (akhir mature-run tanpa PR):

$$\lambda(30.000) = \frac{2{,}5}{38.000}\left(\frac{30.000}{38.000}\right)^{1,5} = 6{,}58 \times 10^{-5} \times 0{,}7896^{1,5} \approx 4{,}62 \times 10^{-5} \text{ per jam}$$

Frekuensi kegagalan meningkat tajam setelah *characteristic life*, sehingga PR pada $t = 12.000$ jam dan $t = 24.000$ jam secara teknis menurunkan risiko *unscheduled removal*. **Hasil manajerial:** Availability optimum ditemukan pada $T_{\text{PR}}^* = 4$ tahun, $T_D^* = 12$ tahun dengan $A_{\text{fleet}}^* = 0{,}9978$ dan *Net Benefit* sebesar USD 228.000.000 per siklus 12 tahun untuk armada 10 pesawat — membuktikan bahwa strategi hirarkis Zhou memberikan keuntungan finansial signifikan dibanding kebijakan D-Check konvensional tanpa PR.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Kontribusi Zhou (2024) memiliki kekuatan analitis yang jarang dijumpai di literatur MRO: pembuktian eksistensi nilai optimum melalui *quasi-concavity* membuka jalan bagi penerapan algoritma optimasi konveks (misal *interior-point method*, *successive quadratic programming*) dengan jaminan konvergensi global. Akan tetapi, beberapa keterbatasan harus dicatat: (i) model mengasumsikan parameter Weibull $\eta$ dan $\beta$ stasioner lintas-armada, padahal variasi antarpesawat (*aircraft heterogeneity*) dapat mengganggu akurasi; (ii) biaya *opportunity cost* dari keterlambatan penerbangan akibat PR mungkin tidak linier; (iii) dinamika *fleet aging* yang dipicu oleh pandemi atau krisis bahan bakar belum diakomodasi secara eksplisit.

Dibandingkan metode konvensional berbasis *hard-time intervals* (misal FAA MSG-3 tradisional), pendekatan Zhou memungkinkan *dynamic rescheduling* yang adaptif terhadap data reliabilitas aktual, sehingga *life-cycle cost* (LCC) armada dapat ditekan 8–15% menurut studi kasus tipikal.

Aplikasi