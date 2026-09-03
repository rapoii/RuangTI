# 2926 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.6387479)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu sektor *asset-heavy* yang paling kompleks dalam lanskap teknik industri modern. Dengan armada dunia yang melebihi 28.000 pesawat komersial aktif dan pangsa pendapatan MRO global yang diproyeksikan melampaui USD 116 miliar pada 2031 (berdasarkan trajectory pertumbuhan compound annual rate MRO ±4,3% pasca-pandemi), optimalisasi siklus hidup komponen pesawat menjadi isu strategis yang memengaruhi profitabilitas maskapai, keselamatan penumpang, dan keberlanjutan operasional. Hang Zhou (2024), dalam karyanya yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), menyoroti bahwa meskipun *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka kerja yang sangat dihargai dalam industri-industri padat-aset karena kemampuannya mengkuantifikasi degradasi kinerja siklus hidup yang bersifat non-linear dan mengoptimalkan operasi dengan meningkatkan keselamatan serta ketersediaan (*availability*), implementasi RCM masih menghadapi tantangan signifikan—khususnya ketika diterapkan pada sistem kompleks seperti kebijakan pemeliharaan hierarkis A/B/C/D yang digunakan di sektor MRO aviasi.

Konteks industri yang melatarbelakangi riset ini sangat mendesak. Pesawat komersial modern beroperasi dalam siklus pemeliharaan bertingkat (*hierarchical maintenance levels*) yang lazim disebut sebagai *check packages*: **A-check** (rutin ringan, periodisitas 400–600 flight hours), **B-check** (lebih komprehensif, periodisitas 6–12 bulan), **C-check** (pemeriksaan struktural dan sistem mayor, periodisitas 20–24 bulan, downtime 1–2 minggu), serta **D-check** (overhaul penuh atau *heavy maintenance visit*, periodisitas 6–12 tahun, downtime 1–2 bulan). Zhou (2024) berargumen bahwa kebijakan D-check tradisional—yang berupa refurbishment penuh—memakan biaya sangat tinggi dan downtime panjang sehingga menurunkan ketersediaan armada. Sebaliknya, pendekatan yang hanya mengandalkan *partial refurbishment* pada fase mature-run juga belum optimal karena tidak menyentuh komponen-komponen yang memerlukan kalibrasi ulang penuh. Oleh karena itu, Zhou (2024, DOI: 10.2139/ssrn.5291672) mengajukan kerangka MRO yang mengintegrasikan siklus D-check penuh dengan refurbishment parsial selama fase mature-run operasi aviasi, dengan optimasi penjadwalan berdasarkan *maximum available operation time* dan pembuktian eksistensi nilai optimal untuk model ketersediaan. Urgensi ekonomis dari riset ini jelas: setiap jam *ground time* pesawat Boeing 777, misalnya, dapat menimbulkan *opportunity cost* senilai USD 15.000–25.000 dalam bentuk kehilangan pendapatan, sehingga peningkatan ketersediaan armada，哪怕 hanya sebesar 0.3%, dapat menghasilkan *value creation* puluhan juta dolar per tahun bagi operator skala besar.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dikembangkan Zhou (2024) berakar pada teori keandalan klasik dengan perluasan untuk sistem multi-komponen yang mengalami degradasi non-linear. Model ketersediaan (*availability*) didefinisikan sebagai rasio antara *Mean Time Between Failures* (MTBF) dengan jumlah MTBF dan *Mean Time To Repair* (MTTR):

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = \frac{\text{uptime}}{\text{uptime} + \text{downtime}}$$

Untuk menangkap perilaku degradasi non-linear, Zhou (2024) menggunakan distribusi Weibull dua-parameter sebagai model laju kegagalan (*hazard rate*):

$$h(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $t$ adalah usia operasi (flight hours atau calendar time), $\beta$ adalah parameter bentuk (*shape*), dan $\eta$ adalah parameter skala (*scale*). Ketika $\beta > 1$, komponen memasuki fase *wear-out* dan degradasi berlangsung secara akselerasi non-linear—kondisi khas untuk komponen avionik dan struktur pesawat di akhir siklus hidupnya.

Model kebijakan pemeliharaan hierarkis A/B/C/D secara formal dapat diekspresikan sebagai berikut. Misalkan $T_A$, $T_B$, $T_C$, $T_D$ masing-masing menyatakan interval antar-pemeliharaan untuk tingkat A, B, C, dan D, dengan $T_A < T_B < T_C < T_D$. Zhou (2024) mendefinisikan **siklus hidup efektif** sebuah pesawat yang beroperasi dari *commissioning* hingga *retirement* sebagai $L_{\text{lifecycle}}$, yang terdiri atas $N$ siklus mature-run dan satu terminal D-check:

$$L_{\text{lifecycle}} = N \cdot T_{\text{cycle}} + T_D$$

di mana $T_{\text{cycle}}$ adalah durasi satu siklus mature-run (yakni periode antara dua D-check yang berurutan). Untuk setiap siklus mature-run, availabilitas sesaat (*instantaneous availability*) pada waktu $t$ diberikan oleh:

$$A_{\text{inst}}(t) = 1 - \frac{\sum_{i \in \{A,B,C\}} \tau_i \cdot \mathbb{1}_{i}(t) + \tau_P \cdot \mathbb{1}_{P}(t)}{\Delta t}$$

dengan $\tau_i$ adalah downtime untuk check tingkat $i$, $\tau_P$ adalah downtime untuk *partial refurbishment*, dan $\mathbb{1}_{i}(t)$ adalah fungsi indikator yang bernilai 1 ketika check tingkat $i$ jatuh dalam interval $[t, t+\Delta t]$. Availabilitas rata-rata untuk satu siklus mature-run kemudian dihitung sebagai:

$$\bar{A}_{\text{cycle}} = \frac{1}{T_{\text{cycle}}} \int_0^{T_{\text{cycle}}} A_{\text{inst}}(t) \, dt$$

Fungsi objektif yang diminimasi dalam model Zhou (2024) adalah *expected total downtime* per satuan operasi, atau ekuivalen dengan memaksimumkan availabilitas seumur hidup:

$$\max_{T_A, T_B, T_C, T_P} \; A_{\text{lifecycle}} = \frac{\sum_{j=1}^{N} \int_{(j-1)T_{\text{cycle}}}^{jT_{\text{cycle}}} A_{\text{inst}}(t) \, dt}{L_{\text{lifecycle}}}$$

Pembuktian eksistensi nilai optimal dilakukan dengan menunjukkan bahwa $A_{\text{lifecycle}}$ bersifat *quasi-concave* pada domain kendala biaya dan bahwa kendala kelayakan (misalnya *minimum safety threshold* dan *maximum allowable risk*) membentuk himpunan kompak, sehingga oleh Teorema Nilai Ekstrem Weierstrass dan sifat *quasi-concavity*, optimal global pasti ada. Kondisi orde-1 (KKT) untuk titik optimal interior adalah:

$$\frac{\partial A_{\text{lifecycle}}}{\partial T_A} = \lambda \frac{\partial C_{\text{total}}}{\partial T_A}, \quad \frac{\partial A_{\text{lifecycle}}}{\partial T_B} = \lambda \frac{\partial C_{\text{total}}}{\partial T_B}$$

dengan $C_{\text{total}}$ adalah total biaya siklus hidup dan $\lambda$ adalah *Lagrange multiplier* terkait kendala biaya.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka RCM hierarkis Zhou (2024) mengikuti protokol rekayasa terstruktur yang dapat dipetakan sebagai SOP industri. Tahapan implementasi digambarkan sebagai berikut:

**Tahap 1 – Karakterisasi Sistem dan Akuisisi Data.** Insinyur MRO menghimpun data historis *failure*, *unscheduled removal*, dan *shop visit* dari *AMOS*, *Trax*, atau *SAP MRO* untuk setiap *part number* kritikalitas ATA Chapter. Data minimum yang dibutuhkan mencakup: flight hours, flight cycles, kalender sejak *new*, jenis kegagalan, mode kegagalan, dan downtime aktual. Penggolongan *criticality* mengikuti standar MSG-3 (Maintenance Steering Group-3) dengan kategori *Safety*, *Operational*, *Economic*, dan *Non-effect*.

**Tahap 2 – Pemodelan Keandalan.** Untuk setiap grup komponen homogenis, *fit* distribusi Weibull dua-parameter dengan estimasi parameter menggunakan *Maximum Likelihood Estimation* (MLE). Uji goodness-of-fit (Anderson-Darling atau Kolmogorov-Smirnov) dilakukan untuk memvalidasi asumsi distribusi.

**Tahap 3 – Penentuan Interval Hierarkis Optimal.** Interval $T_A$, $T_B$, $T_C$, $T_P$ ditentukan dengan menyelesaikan masalah maksimasi availabilitas di bawah kendala biaya dan *risk threshold*. Algoritma optimasi yang digunakan dapat berupa *Sequential Quadratic Programming* (SQP) atau *Genetic Algorithm* untuk kasus multi-modal.

**Tahap 4 – Validasi dengan Simulasi Monte Carlo.** Simulasi dengan $10^5$–$10^6$ replikasi dijalankan untuk memvalidasi availabilitas prediksi terhadap perilaku aktual dengan *confidence interval* 95%.

**Tahap 5 – Implementasi dan Monitoring Berkelanjutan.** SOP pemeliharaan diperbarui dalam *Maintenance Planning Document* (MPD) dan *Maintenance Review Board Report* (MRBR). KPI yang dimonitor secara real-time adalah *Dispatch Reliability*, *Schedule Reliability*, *Daily Aircraft Utilization*, dan *Technical Delay Rate*.

Diagram alir logika keputusan (*decision flowchart*) mengikuti pola:

```
[Input: Data historis MRO]
        ↓
[Analisis MSG-3 → Identifikasi item kritikal]
        ↓
[Estimasi Weibull (β, η) per grup komponen]
        ↓
[Apakah β > 1? (wear-out dominan)]
   ├─ Ya → Aktifkan partial refurbishment dalam mature-run
   └─ Tidak → Jadwalkan D-check penuh
        ↓
[Optimasi T_A, T_B, T_C, T_P → Maximize A_lifecycle]
        ↓
[Validasi Monte Carlo → CI 95%]
        ↓
[Output: MPD/MRBR baru + KPI monitoring]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi penerapan numerik, perhatikan kasus kebijakan MRO untuk komponen avionik kritikal pada Boeing 737-800 dengan asumsi parameter industri berikut:

- **Komponen:** Integrated Drive Generator (IDG), ATA Chapter 24
- **Data historis:** MTBF aktual = 8.500 flight hours, $\beta = 1.45$, $\eta = 9.200$ flight hours (estimasi Weibull)
- **Interval baseline:** $T_A = 500$ fh, $T_B = 3.000$ fh, $T_C = 6.000$ fh, $T_D = 24.000$ fh
- **Downtime:** $\tau_A = 4$ jam, $\tau_B = 16$ jam, $\tau_C = 72$ jam, $\tau_D = 720$ jam (30 hari), $\tau_P = 96$ jam (4 hari, *partial refurbishment*)
- **Total siklus hidup:** $L_{\text{lifecycle}} = 72.000$ fh (~ 12 tahun operasi)

**Langkah 1 – Perhitungan Availabilitas Baseline (Kebijakan D-check Penuh Tradisional).**

Availabilitas dalam satu siklus mature-run sepanjang $T_{\text{cycle}} = 24.000$ fh:

$$N_A = \frac{24.000}{500} = 48 \text{ A-checks}, \quad N_B = \frac{24.000}{3.000} = 8 \text{ B-checks}, \quad N_C = \frac{24.000}{6.000} = 4 \text{ C-checks}$$

Total downtime per siklus mature-run:

$$D_{\text{cycle}} = 48 \times 4 + 8 \times 16 + 4 \times 72 = 192 + 128 + 288 = 608 \text{ jam}$$

Availabilitas rata-rata satu siklus mature-run:

$$\bar{A}_{\text{cycle}} = \frac{24.000 \times (365/24) - 608/24}{24.000 \times (365/24)} \approx \frac{364.392}{365.000} = 0.99833$$

Untuk seluruh siklus hidup termasuk D-check (2 D-check sepanjang 72.000 fh):

$$D_{\text{total}} = 3 \times 608 + 2 \times 720 = 1.824 + 1.440 = 3.264 \text{ jam}$$

$$A_{\text{lifecycle}}^{\text{baseline}} = \frac{72.000 \text{ fh} - 3.264/365 \text{ hari}}{72.000 \text{ fh}} \approx 0.99876$$

**Langkah 2 – Perhitungan dengan Kerangka Zhou (D-check + Partial Refurbishment).**

Misalkan partial refurbishment dilakukan setiap $T_P = 8.000$ fh dengan downtime 96 jam. Jumlah partial refurbishment per siklus:

$$N_P = \frac{24.000}{8.000} = 3$$

Total downtime per siklus mature-run dengan strategi baru:

$$D_{\text{cycle}}^{*} = 48
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
